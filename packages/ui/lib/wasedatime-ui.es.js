var Kp = Object.defineProperty;
var Gp = (e, t, r) => t in e ? Kp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var uc = (e, t, r) => (Gp(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as ee from "react";
import Ne, { useRef as et, useDebugValue as cc, useContext as dt, createElement as mt, createContext as ar, forwardRef as wo, Fragment as mr, useLayoutEffect as Bd, Children as Jp, isValidElement as qn, cloneElement as Kn, useState as Vr, useEffect as ot, useMemo as ir, useReducer as Zp, createRef as Xp, useCallback as lc } from "react";
import * as eM from "react-dom";
import ji, { createPortal as tM } from "react-dom";
function rM(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ao(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Js = { exports: {} }, Be = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc;
function nM() {
  if (fc)
    return Be;
  fc = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, o = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, h = 60122, g = 60117, M = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var w = Symbol.for;
    e = w("react.element"), t = w("react.portal"), r = w("react.fragment"), n = w("react.strict_mode"), i = w("react.profiler"), o = w("react.provider"), s = w("react.context"), a = w("react.forward_ref"), u = w("react.suspense"), c = w("react.suspense_list"), l = w("react.memo"), f = w("react.lazy"), d = w("react.block"), h = w("react.server.block"), g = w("react.fundamental"), M = w("react.debug_trace_mode"), m = w("react.legacy_hidden");
  }
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var j = x.$$typeof;
      switch (j) {
        case e:
          switch (x = x.type, x) {
            case r:
            case i:
            case n:
            case u:
            case c:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case a:
                case f:
                case l:
                case o:
                  return x;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  var T = o, N = e, E = a, P = r, k = f, B = l, F = t, S = i, L = n, R = u;
  return Be.ContextConsumer = s, Be.ContextProvider = T, Be.Element = N, Be.ForwardRef = E, Be.Fragment = P, Be.Lazy = k, Be.Memo = B, Be.Portal = F, Be.Profiler = S, Be.StrictMode = L, Be.Suspense = R, Be.isAsyncMode = function() {
    return !1;
  }, Be.isConcurrentMode = function() {
    return !1;
  }, Be.isContextConsumer = function(x) {
    return v(x) === s;
  }, Be.isContextProvider = function(x) {
    return v(x) === o;
  }, Be.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Be.isForwardRef = function(x) {
    return v(x) === a;
  }, Be.isFragment = function(x) {
    return v(x) === r;
  }, Be.isLazy = function(x) {
    return v(x) === f;
  }, Be.isMemo = function(x) {
    return v(x) === l;
  }, Be.isPortal = function(x) {
    return v(x) === t;
  }, Be.isProfiler = function(x) {
    return v(x) === i;
  }, Be.isStrictMode = function(x) {
    return v(x) === n;
  }, Be.isSuspense = function(x) {
    return v(x) === u;
  }, Be.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === i || x === M || x === n || x === u || x === c || x === m || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === l || x.$$typeof === o || x.$$typeof === s || x.$$typeof === a || x.$$typeof === g || x.$$typeof === d || x[0] === h);
  }, Be.typeOf = v, Be;
}
var $e = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function iM() {
  return dc || (dc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, i = 60114, o = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, h = 60122, g = 60117, M = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var w = Symbol.for;
      e = w("react.element"), t = w("react.portal"), r = w("react.fragment"), n = w("react.strict_mode"), i = w("react.profiler"), o = w("react.provider"), s = w("react.context"), a = w("react.forward_ref"), u = w("react.suspense"), c = w("react.suspense_list"), l = w("react.memo"), f = w("react.lazy"), d = w("react.block"), h = w("react.server.block"), g = w("react.fundamental"), w("react.scope"), w("react.opaque.id"), M = w("react.debug_trace_mode"), w("react.offscreen"), m = w("react.legacy_hidden");
    }
    var v = !1;
    function T(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === r || Y === i || Y === M || Y === n || Y === u || Y === c || Y === m || v || typeof Y == "object" && Y !== null && (Y.$$typeof === f || Y.$$typeof === l || Y.$$typeof === o || Y.$$typeof === s || Y.$$typeof === a || Y.$$typeof === g || Y.$$typeof === d || Y[0] === h));
    }
    function N(Y) {
      if (typeof Y == "object" && Y !== null) {
        var Q = Y.$$typeof;
        switch (Q) {
          case e:
            var fe = Y.type;
            switch (fe) {
              case r:
              case i:
              case n:
              case u:
              case c:
                return fe;
              default:
                var X = fe && fe.$$typeof;
                switch (X) {
                  case s:
                  case a:
                  case f:
                  case l:
                  case o:
                    return X;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var E = s, P = o, k = e, B = a, F = r, S = f, L = l, R = t, x = i, j = n, b = u, W = !1, re = !1;
    function oe(Y) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(Y) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(Y) {
      return N(Y) === s;
    }
    function $(Y) {
      return N(Y) === o;
    }
    function U(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function K(Y) {
      return N(Y) === a;
    }
    function q(Y) {
      return N(Y) === r;
    }
    function J(Y) {
      return N(Y) === f;
    }
    function C(Y) {
      return N(Y) === l;
    }
    function te(Y) {
      return N(Y) === t;
    }
    function H(Y) {
      return N(Y) === i;
    }
    function ge(Y) {
      return N(Y) === n;
    }
    function V(Y) {
      return N(Y) === u;
    }
    $e.ContextConsumer = E, $e.ContextProvider = P, $e.Element = k, $e.ForwardRef = B, $e.Fragment = F, $e.Lazy = S, $e.Memo = L, $e.Portal = R, $e.Profiler = x, $e.StrictMode = j, $e.Suspense = b, $e.isAsyncMode = oe, $e.isConcurrentMode = ie, $e.isContextConsumer = _, $e.isContextProvider = $, $e.isElement = U, $e.isForwardRef = K, $e.isFragment = q, $e.isLazy = J, $e.isMemo = C, $e.isPortal = te, $e.isProfiler = H, $e.isStrictMode = ge, $e.isSuspense = V, $e.isValidElementType = T, $e.typeOf = N;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Js.exports = nM() : Js.exports = iM();
var Mi = Js.exports;
function oM(e) {
  function t(U, K, q, J, C) {
    for (var te = 0, H = 0, ge = 0, V = 0, Y, Q, fe = 0, X = 0, le, Me = le = Y = 0, de = 0, I = 0, y = 0, p = 0, A = q.length, z = A - 1, Z, G = "", ve = "", be = "", je = "", ze; de < A; ) {
      if (Q = q.charCodeAt(de), de === z && H + V + ge + te !== 0 && (H !== 0 && (Q = H === 47 ? 10 : 47), V = ge = te = 0, A++, z++), H + V + ge + te === 0) {
        if (de === z && (0 < I && (G = G.replace(d, "")), 0 < G.trim().length)) {
          switch (Q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += q.charAt(de);
          }
          Q = 59;
        }
        switch (Q) {
          case 123:
            for (G = G.trim(), Y = G.charCodeAt(0), le = 1, p = ++de; de < A; ) {
              switch (Q = q.charCodeAt(de)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (Q = q.charCodeAt(de + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Me = de + 1; Me < z; ++Me)
                          switch (q.charCodeAt(Me)) {
                            case 47:
                              if (Q === 42 && q.charCodeAt(Me - 1) === 42 && de + 2 !== Me) {
                                de = Me + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Q === 47) {
                                de = Me + 1;
                                break e;
                              }
                          }
                        de = Me;
                      }
                  }
                  break;
                case 91:
                  Q++;
                case 40:
                  Q++;
                case 34:
                case 39:
                  for (; de++ < z && q.charCodeAt(de) !== Q; )
                    ;
              }
              if (le === 0)
                break;
              de++;
            }
            switch (le = q.substring(p, de), Y === 0 && (Y = (G = G.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < I && (G = G.replace(d, "")), Q = G.charCodeAt(1), Q) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    I = K;
                    break;
                  default:
                    I = W;
                }
                if (le = t(K, I, le, Q, C + 1), p = le.length, 0 < oe && (I = r(W, G, y), ze = a(3, le, I, K, x, R, p, Q, C, J), G = I.join(""), ze !== void 0 && (p = (le = ze.trim()).length) === 0 && (Q = 0, le = "")), 0 < p)
                  switch (Q) {
                    case 115:
                      G = G.replace(P, s);
                    case 100:
                    case 109:
                    case 45:
                      le = G + "{" + le + "}";
                      break;
                    case 107:
                      G = G.replace(v, "$1 $2"), le = G + "{" + le + "}", le = b === 1 || b === 2 && o("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                      break;
                    default:
                      le = G + le, J === 112 && (le = (ve += le, ""));
                  }
                else
                  le = "";
                break;
              default:
                le = t(K, r(K, G, y), le, J, C + 1);
            }
            be += le, le = y = I = Me = Y = 0, G = "", Q = q.charCodeAt(++de);
            break;
          case 125:
          case 59:
            if (G = (0 < I ? G.replace(d, "") : G).trim(), 1 < (p = G.length))
              switch (Me === 0 && (Y = G.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (p = (G = G.replace(" ", ":")).length), 0 < oe && (ze = a(1, G, K, U, x, R, ve.length, J, C, J)) !== void 0 && (p = (G = ze.trim()).length) === 0 && (G = "\0\0"), Y = G.charCodeAt(0), Q = G.charCodeAt(1), Y) {
                case 0:
                  break;
                case 64:
                  if (Q === 105 || Q === 99) {
                    je += G + q.charAt(de);
                    break;
                  }
                default:
                  G.charCodeAt(p - 1) !== 58 && (ve += i(G, Y, Q, G.charCodeAt(2)));
              }
            y = I = Me = Y = 0, G = "", Q = q.charCodeAt(++de);
        }
      }
      switch (Q) {
        case 13:
        case 10:
          H === 47 ? H = 0 : 1 + Y === 0 && J !== 107 && 0 < G.length && (I = 1, G += "\0"), 0 < oe * _ && a(0, G, K, U, x, R, ve.length, J, C, J), R = 1, x++;
          break;
        case 59:
        case 125:
          if (H + V + ge + te === 0) {
            R++;
            break;
          }
        default:
          switch (R++, Z = q.charAt(de), Q) {
            case 9:
            case 32:
              if (V + te + H === 0)
                switch (fe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Z = "";
                    break;
                  default:
                    Q !== 32 && (Z = " ");
                }
              break;
            case 0:
              Z = "\\0";
              break;
            case 12:
              Z = "\\f";
              break;
            case 11:
              Z = "\\v";
              break;
            case 38:
              V + H + te === 0 && (I = y = 1, Z = "\f" + Z);
              break;
            case 108:
              if (V + H + te + j === 0 && 0 < Me)
                switch (de - Me) {
                  case 2:
                    fe === 112 && q.charCodeAt(de - 3) === 58 && (j = fe);
                  case 8:
                    X === 111 && (j = X);
                }
              break;
            case 58:
              V + H + te === 0 && (Me = de);
              break;
            case 44:
              H + ge + V + te === 0 && (I = 1, Z += "\r");
              break;
            case 34:
            case 39:
              H === 0 && (V = V === Q ? 0 : V === 0 ? Q : V);
              break;
            case 91:
              V + H + ge === 0 && te++;
              break;
            case 93:
              V + H + ge === 0 && te--;
              break;
            case 41:
              V + H + te === 0 && ge--;
              break;
            case 40:
              if (V + H + te === 0) {
                if (Y === 0)
                  switch (2 * fe + 3 * X) {
                    case 533:
                      break;
                    default:
                      Y = 1;
                  }
                ge++;
              }
              break;
            case 64:
              H + ge + V + te + Me + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + te + ge))
                switch (H) {
                  case 0:
                    switch (2 * Q + 3 * q.charCodeAt(de + 1)) {
                      case 235:
                        H = 47;
                        break;
                      case 220:
                        p = de, H = 42;
                    }
                    break;
                  case 42:
                    Q === 47 && fe === 42 && p + 2 !== de && (q.charCodeAt(p + 2) === 33 && (ve += q.substring(p, de + 1)), Z = "", H = 0);
                }
          }
          H === 0 && (G += Z);
      }
      X = fe, fe = Q, de++;
    }
    if (p = ve.length, 0 < p) {
      if (I = K, 0 < oe && (ze = a(2, ve, I, U, x, R, p, J, C, J), ze !== void 0 && (ve = ze).length === 0))
        return je + ve + be;
      if (ve = I.join(",") + "{" + ve + "}", b * j !== 0) {
        switch (b !== 2 || o(ve, 2) || (j = 0), j) {
          case 111:
            ve = ve.replace(N, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(T, "::-webkit-input-$1") + ve.replace(T, "::-moz-$1") + ve.replace(T, ":-ms-input-$1") + ve;
        }
        j = 0;
      }
    }
    return je + ve + be;
  }
  function r(U, K, q) {
    var J = K.trim().split(m);
    K = J;
    var C = J.length, te = U.length;
    switch (te) {
      case 0:
      case 1:
        var H = 0;
        for (U = te === 0 ? "" : U[0] + " "; H < C; ++H)
          K[H] = n(U, K[H], q).trim();
        break;
      default:
        var ge = H = 0;
        for (K = []; H < C; ++H)
          for (var V = 0; V < te; ++V)
            K[ge++] = n(U[V] + " ", J[H], q).trim();
    }
    return K;
  }
  function n(U, K, q) {
    var J = K.charCodeAt(0);
    switch (33 > J && (J = (K = K.trim()).charCodeAt(0)), J) {
      case 38:
        return K.replace(w, "$1" + U.trim());
      case 58:
        return U.trim() + K.replace(w, "$1" + U.trim());
      default:
        if (0 < 1 * q && 0 < K.indexOf("\f"))
          return K.replace(w, (U.charCodeAt(0) === 58 ? "" : "$1") + U.trim());
    }
    return U + K;
  }
  function i(U, K, q, J) {
    var C = U + ";", te = 2 * K + 3 * q + 4 * J;
    if (te === 944) {
      U = C.indexOf(":", 9) + 1;
      var H = C.substring(U, C.length - 1).trim();
      return H = C.substring(0, U).trim() + H + ";", b === 1 || b === 2 && o(H, 1) ? "-webkit-" + H + H : H;
    }
    if (b === 0 || b === 2 && !o(C, 1))
      return C;
    switch (te) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45)
          return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace(L, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
            case 115:
              return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
            case 98:
              return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99)
          break;
        return H = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + H + "-webkit-" + C + "-ms-flex-pack" + H + C;
      case 1005:
        return g.test(C) ? C.replace(h, ":-webkit-") + C.replace(h, ":-moz-") + C : C;
      case 1e3:
        switch (H = C.substring(13).trim(), K = H.indexOf("-") + 1, H.charCodeAt(0) + H.charCodeAt(K)) {
          case 226:
            H = C.replace(E, "tb");
            break;
          case 232:
            H = C.replace(E, "tb-rl");
            break;
          case 220:
            H = C.replace(E, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + H + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (K = (C = U).length - 10, H = (C.charCodeAt(K) === 33 ? C.substring(0, K) : C).substring(U.indexOf(":", 7) + 1).trim(), te = H.charCodeAt(0) + (H.charCodeAt(7) | 0)) {
          case 203:
            if (111 > H.charCodeAt(8))
              break;
          case 115:
            C = C.replace(H, "-webkit-" + H) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(H, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + C.replace(H, "-webkit-" + H) + ";" + C.replace(H, "-ms-" + H + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return H = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + H + "-ms-flex-" + H + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(B, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(B, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (S.test(U) === !0)
          return (H = U.substring(U.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(U.replace("stretch", "fill-available"), K, q, J).replace(":fill-available", ":stretch") : C.replace(H, "-webkit-" + H) + C.replace(H, "-moz-" + H.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, q + J === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + C;
    }
    return C;
  }
  function o(U, K) {
    var q = U.indexOf(K === 1 ? ":" : "{"), J = U.substring(0, K !== 3 ? q : 10);
    return q = U.substring(q + 1, U.length - 1), ie(K !== 2 ? J : J.replace(F, "$1"), q, K);
  }
  function s(U, K) {
    var q = i(K, K.charCodeAt(0), K.charCodeAt(1), K.charCodeAt(2));
    return q !== K + ";" ? q.replace(k, " or ($1)").substring(4) : "(" + K + ")";
  }
  function a(U, K, q, J, C, te, H, ge, V, Y) {
    for (var Q = 0, fe = K, X; Q < oe; ++Q)
      switch (X = re[Q].call(l, U, fe, q, J, C, te, H, ge, V, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = X;
      }
    if (fe !== K)
      return fe;
  }
  function u(U) {
    switch (U) {
      case void 0:
      case null:
        oe = re.length = 0;
        break;
      default:
        if (typeof U == "function")
          re[oe++] = U;
        else if (typeof U == "object")
          for (var K = 0, q = U.length; K < q; ++K)
            u(U[K]);
        else
          _ = !!U | 0;
    }
    return u;
  }
  function c(U) {
    return U = U.prefix, U !== void 0 && (ie = null, U ? typeof U != "function" ? b = 1 : (b = 2, ie = U) : b = 0), c;
  }
  function l(U, K) {
    var q = U;
    if (33 > q.charCodeAt(0) && (q = q.trim()), $ = q, q = [$], 0 < oe) {
      var J = a(-1, K, q, q, x, R, 0, 0, 0, 0);
      J !== void 0 && typeof J == "string" && (K = J);
    }
    var C = t(W, q, K, 0, 0);
    return 0 < oe && (J = a(-2, C, q, q, x, R, C.length, 0, 0, 0), J !== void 0 && (C = J)), $ = "", j = 0, R = x = 1, C;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, g = /zoo|gra/, M = /([,: ])(transform)/g, m = /,\r+?/g, w = /([\t\r\n ])*\f?&/g, v = /@(k\w+)\s*(\S*)\s*/, T = /::(place)/g, N = /:(read-only)/g, E = /[svh]\w+-[tblr]{2}/, P = /\(\s*(.*)\s*\)/g, k = /([\s\S]*?);/g, B = /-self|flex-/g, F = /[^]*?(:[rp][el]a[\w-]+)[^]*/, S = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, R = 1, x = 1, j = 0, b = 1, W = [], re = [], oe = 0, ie = null, _ = 0, $ = "";
  return l.use = u, l.set = c, e !== void 0 && c(e), l;
}
var sM = {
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
function $d(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var aM = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zs = /* @__PURE__ */ $d(
  function(e) {
    return aM.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Xs = { exports: {} }, Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc;
function uM() {
  if (gc)
    return Pe;
  gc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var P = E.$$typeof;
      switch (P) {
        case t:
          switch (E = E.type, E) {
            case u:
            case c:
            case n:
            case o:
            case i:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case l:
                case g:
                case h:
                case s:
                  return E;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function N(E) {
    return T(E) === c;
  }
  return Pe.AsyncMode = u, Pe.ConcurrentMode = c, Pe.ContextConsumer = a, Pe.ContextProvider = s, Pe.Element = t, Pe.ForwardRef = l, Pe.Fragment = n, Pe.Lazy = g, Pe.Memo = h, Pe.Portal = r, Pe.Profiler = o, Pe.StrictMode = i, Pe.Suspense = f, Pe.isAsyncMode = function(E) {
    return N(E) || T(E) === u;
  }, Pe.isConcurrentMode = N, Pe.isContextConsumer = function(E) {
    return T(E) === a;
  }, Pe.isContextProvider = function(E) {
    return T(E) === s;
  }, Pe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Pe.isForwardRef = function(E) {
    return T(E) === l;
  }, Pe.isFragment = function(E) {
    return T(E) === n;
  }, Pe.isLazy = function(E) {
    return T(E) === g;
  }, Pe.isMemo = function(E) {
    return T(E) === h;
  }, Pe.isPortal = function(E) {
    return T(E) === r;
  }, Pe.isProfiler = function(E) {
    return T(E) === o;
  }, Pe.isStrictMode = function(E) {
    return T(E) === i;
  }, Pe.isSuspense = function(E) {
    return T(E) === f;
  }, Pe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === c || E === o || E === i || E === f || E === d || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === h || E.$$typeof === s || E.$$typeof === a || E.$$typeof === l || E.$$typeof === m || E.$$typeof === w || E.$$typeof === v || E.$$typeof === M);
  }, Pe.typeOf = T, Pe;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function cM() {
  return hc || (hc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
    function T(Q) {
      return typeof Q == "string" || typeof Q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Q === n || Q === c || Q === o || Q === i || Q === f || Q === d || typeof Q == "object" && Q !== null && (Q.$$typeof === g || Q.$$typeof === h || Q.$$typeof === s || Q.$$typeof === a || Q.$$typeof === l || Q.$$typeof === m || Q.$$typeof === w || Q.$$typeof === v || Q.$$typeof === M);
    }
    function N(Q) {
      if (typeof Q == "object" && Q !== null) {
        var fe = Q.$$typeof;
        switch (fe) {
          case t:
            var X = Q.type;
            switch (X) {
              case u:
              case c:
              case n:
              case o:
              case i:
              case f:
                return X;
              default:
                var le = X && X.$$typeof;
                switch (le) {
                  case a:
                  case l:
                  case g:
                  case h:
                  case s:
                    return le;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var E = u, P = c, k = a, B = s, F = t, S = l, L = n, R = g, x = h, j = r, b = o, W = i, re = f, oe = !1;
    function ie(Q) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(Q) || N(Q) === u;
    }
    function _(Q) {
      return N(Q) === c;
    }
    function $(Q) {
      return N(Q) === a;
    }
    function U(Q) {
      return N(Q) === s;
    }
    function K(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === t;
    }
    function q(Q) {
      return N(Q) === l;
    }
    function J(Q) {
      return N(Q) === n;
    }
    function C(Q) {
      return N(Q) === g;
    }
    function te(Q) {
      return N(Q) === h;
    }
    function H(Q) {
      return N(Q) === r;
    }
    function ge(Q) {
      return N(Q) === o;
    }
    function V(Q) {
      return N(Q) === i;
    }
    function Y(Q) {
      return N(Q) === f;
    }
    Re.AsyncMode = E, Re.ConcurrentMode = P, Re.ContextConsumer = k, Re.ContextProvider = B, Re.Element = F, Re.ForwardRef = S, Re.Fragment = L, Re.Lazy = R, Re.Memo = x, Re.Portal = j, Re.Profiler = b, Re.StrictMode = W, Re.Suspense = re, Re.isAsyncMode = ie, Re.isConcurrentMode = _, Re.isContextConsumer = $, Re.isContextProvider = U, Re.isElement = K, Re.isForwardRef = q, Re.isFragment = J, Re.isLazy = C, Re.isMemo = te, Re.isPortal = H, Re.isProfiler = ge, Re.isStrictMode = V, Re.isSuspense = Y, Re.isValidElementType = T, Re.typeOf = N;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Xs.exports = uM() : Xs.exports = cM();
var cu = Xs.exports, lu = cu, lM = {
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
}, fM = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dM = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vd = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fu = {};
fu[lu.ForwardRef] = dM;
fu[lu.Memo] = Vd;
function pc(e) {
  return lu.isMemo(e) ? Vd : fu[e.$$typeof] || lM;
}
var gM = Object.defineProperty, hM = Object.getOwnPropertyNames, Mc = Object.getOwnPropertySymbols, pM = Object.getOwnPropertyDescriptor, MM = Object.getPrototypeOf, yc = Object.prototype;
function Wd(e, t, r) {
  if (typeof t != "string") {
    if (yc) {
      var n = MM(t);
      n && n !== yc && Wd(e, n, r);
    }
    var i = hM(t);
    Mc && (i = i.concat(Mc(t)));
    for (var o = pc(e), s = pc(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!fM[u] && !(r && r[u]) && !(s && s[u]) && !(o && o[u])) {
        var c = pM(t, u);
        try {
          gM(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var yM = Wd;
const mM = /* @__PURE__ */ Do(yM);
function Xt() {
  return (Xt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var mc = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, ea = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Mi.typeOf(e);
}, eo = Object.freeze([]), vr = Object.freeze({});
function ri(e) {
  return typeof e == "function";
}
function ta(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function du(e) {
  return e && typeof e.styledComponentId == "string";
}
var Mn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", gu = typeof window < "u" && "HTMLElement" in window, vM = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), wM = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function DM() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function In(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(DM.apply(void 0, [wM[e]].concat(r)).trim());
}
var AM = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, s = o; r >= s; )
        (s <<= 1) < 0 && In(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(i), this.length = s;
      for (var a = o; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), c = 0, l = n.length; c < l; c++)
      this.tag.insertRule(u, n[c]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), o = i + n;
      this.groupSizes[r] = 0;
      for (var s = i; s < o; s++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), s = o + i, a = o; a < s; a++)
      n += this.tag.getRule(a) + `/*!sc*/
`;
    return n;
  }, e;
}(), Wi = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Map(), Gn = 1, Si = function(e) {
  if (Wi.has(e))
    return Wi.get(e);
  for (; to.has(Gn); )
    Gn++;
  var t = Gn++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && In(16, "" + t), Wi.set(e, t), to.set(t, e), t;
}, IM = function(e) {
  return to.get(e);
}, EM = function(e, t) {
  t >= Gn && (Gn = t + 1), Wi.set(e, t), to.set(t, e);
}, NM = "style[" + Mn + '][data-styled-version="5.3.10"]', TM = new RegExp("^" + Mn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jM = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, s = i.length; o < s; o++)
    (n = i[o]) && e.registerName(t, n);
}, SM = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var s = r[i].trim();
    if (s) {
      var a = s.match(TM);
      if (a) {
        var u = 0 | parseInt(a[1], 10), c = a[2];
        u !== 0 && (EM(c, u), jM(e, c, a[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(s);
    }
  }
}, bM = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Hd = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(a) {
    for (var u = a.childNodes, c = u.length; c >= 0; c--) {
      var l = u[c];
      if (l && l.nodeType === 1 && l.hasAttribute(Mn))
        return l;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Mn, "active"), n.setAttribute("data-styled-version", "5.3.10");
  var s = bM();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, o), n;
}, xM = function() {
  function e(r) {
    var n = this.element = Hd(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, s = 0, a = o.length; s < a; s++) {
        var u = o[s];
        if (u.ownerNode === i)
          return u;
      }
      In(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), CM = function() {
  function e(r) {
    var n = this.element = Hd(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), OM = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), vc = gu, LM = { isServer: !gu, useCSSOMInjection: !vM }, qd = function() {
  function e(r, n, i) {
    r === void 0 && (r = vr), n === void 0 && (n = {}), this.options = Xt({}, LM, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && gu && vc && (vc = !1, function(o) {
      for (var s = document.querySelectorAll(NM), a = 0, u = s.length; a < u; a++) {
        var c = s[a];
        c && c.getAttribute(Mn) !== "active" && (SM(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Si(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Xt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, s = n.target, r = i ? new OM(s) : o ? new xM(s) : new CM(s), new AM(r)));
    var r, n, i, o, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Si(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Si(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Si(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", s = 0; s < i; s++) {
        var a = IM(s);
        if (a !== void 0) {
          var u = r.names.get(a), c = n.getGroup(s);
          if (u && c && u.size) {
            var l = Mn + ".g" + s + '[id="' + a + '"]', f = "";
            u !== void 0 && u.forEach(function(d) {
              d.length > 0 && (f += d + ",");
            }), o += "" + c + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), _M = /(a)(d)/gi, wc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ra(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = wc(t % 52) + r;
  return (wc(t % 52) + r).replace(_M, "$1-$2");
}
var Lr = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Kd = function(e) {
  return Lr(5381, e);
};
function kM(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ri(r) && !du(r))
      return !1;
  }
  return !0;
}
var zM = Kd("5.3.10"), PM = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && kM(t), this.componentId = r, this.baseHash = Lr(zM, r), this.baseStyle = n, qd.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = yn(this.rules, t, r, n).join(""), a = ra(Lr(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(i, a)) {
          var u = n(s, "." + a, void 0, i);
          r.insertRules(i, a, u);
        }
        o.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, l = Lr(this.baseHash, n.hash), f = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (l = Lr(l, h + d));
        else if (h) {
          var g = yn(h, t, r, n), M = Array.isArray(g) ? g.join("") : g;
          l = Lr(l, M + d), f += M;
        }
      }
      if (f) {
        var m = ra(l >>> 0);
        if (!r.hasNameForId(i, m)) {
          var w = n(f, "." + m, void 0, i);
          r.insertRules(i, m, w);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), RM = /^\s*\/\/.*$/gm, UM = [":", "[", ".", "#"];
function YM(e) {
  var t, r, n, i, o = e === void 0 ? vr : e, s = o.options, a = s === void 0 ? vr : s, u = o.plugins, c = u === void 0 ? eo : u, l = new oM(a), f = [], d = function(M) {
    function m(w) {
      if (w)
        try {
          M(w + "}");
        } catch {
        }
    }
    return function(w, v, T, N, E, P, k, B, F, S) {
      switch (w) {
        case 1:
          if (F === 0 && v.charCodeAt(0) === 64)
            return M(v + ";"), "";
          break;
        case 2:
          if (B === 0)
            return v + "/*|*/";
          break;
        case 3:
          switch (B) {
            case 102:
            case 112:
              return M(T[0] + v), "";
            default:
              return v + (S === 0 ? "/*|*/" : "");
          }
        case -2:
          v.split("/*|*/}").forEach(m);
      }
    };
  }(function(M) {
    f.push(M);
  }), h = function(M, m, w) {
    return m === 0 && UM.indexOf(w[r.length]) !== -1 || w.match(i) ? M : "." + t;
  };
  function g(M, m, w, v) {
    v === void 0 && (v = "&");
    var T = M.replace(RM, ""), N = m && w ? w + " " + m + " { " + T + " }" : T;
    return t = v, r = m, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), l(w || !m ? "" : m, N);
  }
  return l.use([].concat(c, [function(M, m, w) {
    M === 2 && w.length && w[0].lastIndexOf(r) > 0 && (w[0] = w[0].replace(n, h));
  }, d, function(M) {
    if (M === -2) {
      var m = f;
      return f = [], m;
    }
  }])), g.hash = c.length ? c.reduce(function(M, m) {
    return m.name || In(15), Lr(M, m.name);
  }, 5381).toString() : "", g;
}
var Gd = Ne.createContext();
Gd.Consumer;
var Jd = Ne.createContext(), FM = (Jd.Consumer, new qd()), na = YM();
function QM() {
  return dt(Gd) || FM;
}
function BM() {
  return dt(Jd) || na;
}
var $M = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = na);
      var s = n.name + o.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return In(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = na), this.name + t.hash;
  }, e;
}(), VM = /([A-Z])/, WM = /([A-Z])/g, HM = /^ms-/, qM = function(e) {
  return "-" + e.toLowerCase();
};
function Dc(e) {
  return VM.test(e) ? e.replace(WM, qM).replace(HM, "-ms-") : e;
}
var Ac = function(e) {
  return e == null || e === !1 || e === "";
};
function yn(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], s = 0, a = e.length; s < a; s += 1)
      (i = yn(e[s], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Ac(e))
    return "";
  if (du(e))
    return "." + e.styledComponentId;
  if (ri(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && Mi.isElement(u) && console.warn(ta(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), yn(u, t, r, n);
  }
  var c;
  return e instanceof $M ? r ? (e.inject(r, n), e.getName(n)) : e : ea(e) ? function l(f, d) {
    var h, g, M = [];
    for (var m in f)
      f.hasOwnProperty(m) && !Ac(f[m]) && (Array.isArray(f[m]) && f[m].isCss || ri(f[m]) ? M.push(Dc(m) + ":", f[m], ";") : ea(f[m]) ? M.push.apply(M, l(f[m], m)) : M.push(Dc(m) + ": " + (h = m, (g = f[m]) == null || typeof g == "boolean" || g === "" ? "" : typeof g != "number" || g === 0 || h in sM || h.startsWith("--") ? String(g).trim() : g + "px") + ";"));
    return d ? [d + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var Ic = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Zd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return ri(e) || ea(e) ? Ic(yn(mc(eo, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ic(yn(mc(e, r)));
}
var Ec = /invalid hook call/i, bi = /* @__PURE__ */ new Set(), KM = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (Ec.test(o))
          i = !1, bi.delete(r);
        else {
          for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
            a[u - 1] = arguments[u];
          n.apply(void 0, [o].concat(a));
        }
      }, et(), i && !bi.has(r) && (console.warn(r), bi.add(r));
    } catch (o) {
      Ec.test(o.message) && bi.delete(r);
    } finally {
      console.error = n;
    }
  }
}, GM = function(e, t, r) {
  return r === void 0 && (r = vr), e.theme !== r.theme && e.theme || t || r.theme;
}, JM = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ZM = /(^-|-$)/g;
function ss(e) {
  return e.replace(JM, "-").replace(ZM, "");
}
var XM = function(e) {
  return ra(Kd(e) >>> 0);
};
function xi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ia = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ey = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ty(e, t, r) {
  var n = e[r];
  ia(t) && ia(n) ? Xd(n, t) : e[r] = t;
}
function Xd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var s = o[i];
    if (ia(s))
      for (var a in s)
        ey(a) && ty(e, s[a], a);
  }
  return e;
}
var eg = Ne.createContext();
eg.Consumer;
var as = {};
function tg(e, t, r) {
  var n = du(e), i = !xi(e), o = t.attrs, s = o === void 0 ? eo : o, a = t.componentId, u = a === void 0 ? function(v, T) {
    var N = typeof v != "string" ? "sc" : ss(v);
    as[N] = (as[N] || 0) + 1;
    var E = N + "-" + XM("5.3.10" + N + as[N]);
    return T ? T + "-" + E : E;
  }(t.displayName, t.parentComponentId) : a, c = t.displayName, l = c === void 0 ? function(v) {
    return xi(v) ? "styled." + v : "Styled(" + ta(v) + ")";
  }(e) : c, f = t.displayName && t.componentId ? ss(t.displayName) + "-" + t.componentId : t.componentId || u, d = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(v, T, N) {
    return e.shouldForwardProp(v, T, N) && t.shouldForwardProp(v, T, N);
  } : e.shouldForwardProp);
  var g, M = new PM(r, f, n ? e.componentStyle : void 0), m = M.isStatic && s.length === 0, w = function(v, T) {
    return function(N, E, P, k) {
      var B = N.attrs, F = N.componentStyle, S = N.defaultProps, L = N.foldedComponentIds, R = N.shouldForwardProp, x = N.styledComponentId, j = N.target;
      process.env.NODE_ENV !== "production" && cc(x);
      var b = function(J, C, te) {
        J === void 0 && (J = vr);
        var H = Xt({}, C, { theme: J }), ge = {};
        return te.forEach(function(V) {
          var Y, Q, fe, X = V;
          for (Y in ri(X) && (X = X(H)), X)
            H[Y] = ge[Y] = Y === "className" ? (Q = ge[Y], fe = X[Y], Q && fe ? Q + " " + fe : Q || fe) : X[Y];
        }), [H, ge];
      }(GM(E, dt(eg), S) || vr, E, B), W = b[0], re = b[1], oe = function(J, C, te, H) {
        var ge = QM(), V = BM(), Y = C ? J.generateAndInjectStyles(vr, ge, V) : J.generateAndInjectStyles(te, ge, V);
        return process.env.NODE_ENV !== "production" && cc(Y), process.env.NODE_ENV !== "production" && !C && H && H(Y), Y;
      }(F, k, W, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), ie = P, _ = re.$as || E.$as || re.as || E.as || j, $ = xi(_), U = re !== E ? Xt({}, E, {}, re) : E, K = {};
      for (var q in U)
        q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? K.as = U[q] : (R ? R(q, Zs, _) : !$ || Zs(q)) && (K[q] = U[q]));
      return E.style && re.style !== E.style && (K.style = Xt({}, E.style, {}, re.style)), K.className = Array.prototype.concat(L, x, oe !== x ? oe : null, E.className, re.className).filter(Boolean).join(" "), K.ref = ie, mt(_, K);
    }(g, v, T, m);
  };
  return w.displayName = l, (g = Ne.forwardRef(w)).attrs = d, g.componentStyle = M, g.displayName = l, g.shouldForwardProp = h, g.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : eo, g.styledComponentId = f, g.target = n ? e.target : e, g.withComponent = function(v) {
    var T = t.componentId, N = function(P, k) {
      if (P == null)
        return {};
      var B, F, S = {}, L = Object.keys(P);
      for (F = 0; F < L.length; F++)
        B = L[F], k.indexOf(B) >= 0 || (S[B] = P[B]);
      return S;
    }(t, ["componentId"]), E = T && T + "-" + (xi(v) ? v : ss(ta(v)));
    return tg(v, Xt({}, N, { attrs: d, componentId: E }), r);
  }, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = n ? Xd({}, e.defaultProps, v) : v;
  } }), process.env.NODE_ENV !== "production" && (KM(l, f), g.warnTooManyClasses = function(v, T) {
    var N = {}, E = !1;
    return function(P) {
      if (!E && (N[P] = !0, Object.keys(N).length >= 200)) {
        var k = T ? ' with the id of "' + T + '"' : "";
        console.warn("Over 200 classes were generated for component " + v + k + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, N = {};
      }
    };
  }(l, f)), Object.defineProperty(g, "toString", { value: function() {
    return "." + g.styledComponentId;
  } }), i && mM(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), g;
}
var oa = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = vr), !Mi.isValidElementType(n))
      return In(1, String(n));
    var o = function() {
      return r(n, i, Zd.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return t(r, n, Xt({}, i, {}, s));
    }, o.attrs = function(s) {
      return t(r, n, Xt({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, o;
  }(tg, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  oa[e] = oa(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Io = oa, rg = Io("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`, OC = Io("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`, LC = Io(rg)`
  background-image: url(${(e) => e.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`, ry = Io("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`, _C = {
  headerHeight: "67px",
  searchBarHeight: "32px",
  switchHeight: "32px"
}, kC = {
  title: "36px",
  subtitle: "24px",
  content: "14px",
  small: "12px"
}, ny = ["desktop", "tablet", "phone", "phoneMini"], zC = (e) => ny.includes(e), iy = ["light", "dark"], PC = (e) => iy.includes(e), oy = {
  courseChange: "Course change detected. If you added/deleted courses in another tab, please ",
  RefreshLink: "click here to refresh to see the changes"
}, sy = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun"
}, ay = {
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
}, uy = {
  timetable: "Timetable",
  syllabus: "Syllabus",
  "course info": "Course",
  roomfinder: "Rooms",
  joinus: "Join Us",
  bus: "Bus",
  language: "Language",
  career: "Career",
  "corona-info": "COVID19"
}, cy = {
  licensed: " Code Licensed ",
  syllabus: "Syllabus correct as at",
  update: ""
}, ly = {
  title: "WasedaTime",
  description: "Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
}, fy = {
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
}, dy = {
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
}, gy = {
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
}, hy = {
  "Under Construction": "Under Construction",
  "Want to help?": "Wanna build an amazing app with us?",
  "Check out our": "Check out our",
  facebook: " Facebook ",
  twitter: "Twitter",
  or: " or ",
  "!": "!",
  "We sincerely welcome any contributors!": "We sincerely welcome any contributors!"
}, py = {
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
}, My = {
  header: "Updates on the issue with the 2020 syllabus",
  main: "Hi! Thanks for clicking in.",
  main2: "We apologize that the 2020 syllabus is not supported yet. Due to a updated policy from Waseda University, we are not able to obtain the 2020 syllabus data at this moment.",
  main3: "We are actively negotiating with the university and will provide any updates as soon as possible. We have received many inquiries and are very sorry for not being able to respond in time.",
  main4: "Thank you so much again, and we will do our best to ensure that the mission of WasedaTime continues.",
  main5: "Please stay safe and healthy!"
}, yy = {
  Intern: "Intern",
  Articles: "Articles",
  viewMore: "View More",
  Entry: "Entry"
}, my = {
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
}, vy = {
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
}, ng = {
  app: oy,
  common: sy,
  welcome: ay,
  navigation: uy,
  footer: cy,
  about: ly,
  timetable: fy,
  syllabus: dy,
  courseInfo: gy,
  room: hy,
  bus: py,
  updates: My,
  career: yy,
  coronaInfo: my,
  user: vy
}, wy = {
  courseChange: "科目の変更が検出されました。別のタブで科目を登録/取り消した場合は、変更を反映するために",
  RefreshLink: "こちらにクリックして再読み込みしてください"
}, Dy = {
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
  sun: "日"
}, Ay = {
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
}, Iy = {
  timetable: "時間割",
  syllabus: "シラバス",
  "course info": "授業詳細",
  roomfinder: "空き教室",
  joinus: "募集中！",
  bus: "バス",
  language: "言語",
  career: "キャリア",
  "corona-info": "コロナ"
}, Ey = {
  licensed: " ソースコードライセンス ",
  syllabus: "シラバスは",
  update: "に更新されました"
}, Ny = {
  title: "早稲田タイム",
  description: "早稲田大学の学生のキャンパスライフを支え、向上させることを目的とした非営利・学生運営・オープンソースのアプリ"
}, Ty = {
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
}, jy = {
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
}, Sy = {
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
}, by = {
  "Under Construction": "作成中",
  "Want to help?": "一緒に楽しく開発しませんか？",
  "Check out our": "興味のある方は ",
  facebook: " Facebook ",
  twitter: " Twitter ",
  or: "または",
  "!": "から！",
  "We sincerely welcome any contributors!": ""
}, xy = {
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
}, Cy = {
  header: "2020のシラバスについて",
  main: "こんにちは！クリックしていただきありがとうございます。",
  main2: "申し訳ありませんが、2020年のシラバスはまだサポートされていません。早稲田大学のポリシーが更新されたため、現時点では2020のシラバスデータを取得できません。",
  main3: "私たちは積極的に大学と相談しており、新しい情報をできるだけ早く提供します。多くのお問い合わせをいただきましたが、時間内にご返答できず大変申し訳ございません。",
  main4: "改めて、あなたに感謝申し上げます。早稲田タイムの使命が継続するように最善を尽くします。",
  main5: "どうぞ、安全と健康にお気をつけくださいませ。"
}, Oy = {
  Intern: "インターン",
  Articles: "記事",
  viewMore: "インターン内容をもっと見る",
  Entry: "エントリー"
}, Ly = {
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
}, _y = {
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
}, ig = {
  app: wy,
  common: Dy,
  welcome: Ay,
  navigation: Iy,
  footer: Ey,
  about: Ny,
  timetable: Ty,
  syllabus: jy,
  courseInfo: Sy,
  room: by,
  bus: xy,
  updates: Cy,
  career: Oy,
  coronaInfo: Ly,
  user: _y
}, Nc = document, RC = () => {
  const e = et(!1), t = Nc.documentElement, { body: r } = Nc;
  return [() => {
    if (!r || !r.style || e.current || document == null)
      return;
    const o = window.innerWidth - t.clientWidth, s = parseInt(
      window.getComputedStyle(r).getPropertyValue("padding-right")
    ) || 0;
    t.style.position = "relative", t.style.overflow = "hidden", r.style.position = "relative", r.style.overflow = "hidden", r.style.paddingRight = `${s + o}px`, e.current = !0;
  }, () => {
    !r || !r.style || !e.current || (t.style.position = "", t.style.overflow = "", r.style.position = "", r.style.overflow = "", r.style.paddingRight = "", e.current = !1);
  }];
};
var sa = { exports: {} }, xn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function ky() {
  if (Tc)
    return xn;
  Tc = 1;
  var e = Ne, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, u, c) {
    var l, f = {}, d = null, h = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (l in u)
      n.call(u, l) && !o.hasOwnProperty(l) && (f[l] = u[l]);
    if (a && a.defaultProps)
      for (l in u = a.defaultProps, u)
        f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: a, key: d, ref: h, props: f, _owner: i.current };
  }
  return xn.Fragment = r, xn.jsx = s, xn.jsxs = s, xn;
}
var Cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jc;
function zy() {
  return jc || (jc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ne, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, M = "@@iterator";
    function m(O) {
      if (O === null || typeof O != "object")
        return null;
      var ce = g && O[g] || O[M];
      return typeof ce == "function" ? ce : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(O) {
      {
        for (var ce = arguments.length, ye = new Array(ce > 1 ? ce - 1 : 0), Ae = 1; Ae < ce; Ae++)
          ye[Ae - 1] = arguments[Ae];
        T("error", O, ye);
      }
    }
    function T(O, ce, ye) {
      {
        var Ae = w.ReactDebugCurrentFrame, Oe = Ae.getStackAddendum();
        Oe !== "" && (ce += "%s", ye = ye.concat([Oe]));
        var We = ye.map(function(Ce) {
          return String(Ce);
        });
        We.unshift("Warning: " + ce), Function.prototype.apply.call(console[O], console, We);
      }
    }
    var N = !1, E = !1, P = !1, k = !1, B = !1, F;
    F = Symbol.for("react.module.reference");
    function S(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === o || B || O === i || O === c || O === l || k || O === h || N || E || P || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === f || O.$$typeof === s || O.$$typeof === a || O.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === F || O.getModuleId !== void 0));
    }
    function L(O, ce, ye) {
      var Ae = O.displayName;
      if (Ae)
        return Ae;
      var Oe = ce.displayName || ce.name || "";
      return Oe !== "" ? ye + "(" + Oe + ")" : ye;
    }
    function R(O) {
      return O.displayName || "Context";
    }
    function x(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case a:
            var ce = O;
            return R(ce) + ".Consumer";
          case s:
            var ye = O;
            return R(ye._context) + ".Provider";
          case u:
            return L(O, O.render, "ForwardRef");
          case f:
            var Ae = O.displayName || null;
            return Ae !== null ? Ae : x(O.type) || "Memo";
          case d: {
            var Oe = O, We = Oe._payload, Ce = Oe._init;
            try {
              return x(Ce(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, b = 0, W, re, oe, ie, _, $, U;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function q() {
      {
        if (b === 0) {
          W = console.log, re = console.info, oe = console.warn, ie = console.error, _ = console.group, $ = console.groupCollapsed, U = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        b++;
      }
    }
    function J() {
      {
        if (b--, b === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, O, {
              value: W
            }),
            info: j({}, O, {
              value: re
            }),
            warn: j({}, O, {
              value: oe
            }),
            error: j({}, O, {
              value: ie
            }),
            group: j({}, O, {
              value: _
            }),
            groupCollapsed: j({}, O, {
              value: $
            }),
            groupEnd: j({}, O, {
              value: U
            })
          });
        }
        b < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = w.ReactCurrentDispatcher, te;
    function H(O, ce, ye) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var Ae = Oe.stack.trim().match(/\n( *(at )?)/);
            te = Ae && Ae[1] || "";
          }
        return `
` + te + O;
      }
    }
    var ge = !1, V;
    {
      var Y = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Y();
    }
    function Q(O, ce) {
      if (!O || ge)
        return "";
      {
        var ye = V.get(O);
        if (ye !== void 0)
          return ye;
      }
      var Ae;
      ge = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = C.current, C.current = null, q();
      try {
        if (ce) {
          var Ce = function() {
            throw Error();
          };
          if (Object.defineProperty(Ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ce, []);
            } catch (Kt) {
              Ae = Kt;
            }
            Reflect.construct(O, [], Ce);
          } else {
            try {
              Ce.call();
            } catch (Kt) {
              Ae = Kt;
            }
            O.call(Ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kt) {
            Ae = Kt;
          }
          O();
        }
      } catch (Kt) {
        if (Kt && Ae && typeof Kt.stack == "string") {
          for (var Se = Kt.stack.split(`
`), pt = Ae.stack.split(`
`), tt = Se.length - 1, nt = pt.length - 1; tt >= 1 && nt >= 0 && Se[tt] !== pt[nt]; )
            nt--;
          for (; tt >= 1 && nt >= 0; tt--, nt--)
            if (Se[tt] !== pt[nt]) {
              if (tt !== 1 || nt !== 1)
                do
                  if (tt--, nt--, nt < 0 || Se[tt] !== pt[nt]) {
                    var Tt = `
` + Se[tt].replace(" at new ", " at ");
                    return O.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", O.displayName)), typeof O == "function" && V.set(O, Tt), Tt;
                  }
                while (tt >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        ge = !1, C.current = We, J(), Error.prepareStackTrace = Oe;
      }
      var Kr = O ? O.displayName || O.name : "", ac = Kr ? H(Kr) : "";
      return typeof O == "function" && V.set(O, ac), ac;
    }
    function fe(O, ce, ye) {
      return Q(O, !1);
    }
    function X(O) {
      var ce = O.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function le(O, ce, ye) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Q(O, X(O));
      if (typeof O == "string")
        return H(O);
      switch (O) {
        case c:
          return H("Suspense");
        case l:
          return H("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case u:
            return fe(O.render);
          case f:
            return le(O.type, ce, ye);
          case d: {
            var Ae = O, Oe = Ae._payload, We = Ae._init;
            try {
              return le(We(Oe), ce, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, de = {}, I = w.ReactDebugCurrentFrame;
    function y(O) {
      if (O) {
        var ce = O._owner, ye = le(O.type, O._source, ce ? ce.type : null);
        I.setExtraStackFrame(ye);
      } else
        I.setExtraStackFrame(null);
    }
    function p(O, ce, ye, Ae, Oe) {
      {
        var We = Function.call.bind(Me);
        for (var Ce in O)
          if (We(O, Ce)) {
            var Se = void 0;
            try {
              if (typeof O[Ce] != "function") {
                var pt = Error((Ae || "React class") + ": " + ye + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pt.name = "Invariant Violation", pt;
              }
              Se = O[Ce](ce, Ce, Ae, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Se = tt;
            }
            Se && !(Se instanceof Error) && (y(Oe), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ae || "React class", ye, Ce, typeof Se), y(null)), Se instanceof Error && !(Se.message in de) && (de[Se.message] = !0, y(Oe), v("Failed %s type: %s", ye, Se.message), y(null));
          }
      }
    }
    var A = Array.isArray;
    function z(O) {
      return A(O);
    }
    function Z(O) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, ye = ce && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return ye;
      }
    }
    function G(O) {
      try {
        return ve(O), !1;
      } catch {
        return !0;
      }
    }
    function ve(O) {
      return "" + O;
    }
    function be(O) {
      if (G(O))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Z(O)), ve(O);
    }
    var je = w.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, De, qt;
    qt = {};
    function Hr(O) {
      if (Me.call(O, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Ti(O) {
      if (Me.call(O, "key")) {
        var ce = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function ec(O, ce) {
      if (typeof O.ref == "string" && je.current && ce && je.current.stateNode !== ce) {
        var ye = x(je.current.type);
        qt[ye] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(je.current.type), O.ref), qt[ye] = !0);
      }
    }
    function Pp(O, ce) {
      {
        var ye = function() {
          Ve || (Ve = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        ye.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function Rp(O, ce) {
      {
        var ye = function() {
          De || (De = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        ye.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var Up = function(O, ce, ye, Ae, Oe, We, Ce) {
      var Se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: ce,
        ref: ye,
        props: Ce,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return Se._store = {}, Object.defineProperty(Se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.defineProperty(Se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(Se.props), Object.freeze(Se)), Se;
    };
    function Yp(O, ce, ye, Ae, Oe) {
      {
        var We, Ce = {}, Se = null, pt = null;
        ye !== void 0 && (be(ye), Se = "" + ye), Ti(ce) && (be(ce.key), Se = "" + ce.key), Hr(ce) && (pt = ce.ref, ec(ce, Oe));
        for (We in ce)
          Me.call(ce, We) && !ze.hasOwnProperty(We) && (Ce[We] = ce[We]);
        if (O && O.defaultProps) {
          var tt = O.defaultProps;
          for (We in tt)
            Ce[We] === void 0 && (Ce[We] = tt[We]);
        }
        if (Se || pt) {
          var nt = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Se && Pp(Ce, nt), pt && Rp(Ce, nt);
        }
        return Up(O, Se, pt, Oe, Ae, je.current, Ce);
      }
    }
    var ns = w.ReactCurrentOwner, tc = w.ReactDebugCurrentFrame;
    function qr(O) {
      if (O) {
        var ce = O._owner, ye = le(O.type, O._source, ce ? ce.type : null);
        tc.setExtraStackFrame(ye);
      } else
        tc.setExtraStackFrame(null);
    }
    var is;
    is = !1;
    function os(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function rc() {
      {
        if (ns.current) {
          var O = x(ns.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Fp(O) {
      {
        if (O !== void 0) {
          var ce = O.fileName.replace(/^.*[\\\/]/, ""), ye = O.lineNumber;
          return `

Check your code at ` + ce + ":" + ye + ".";
        }
        return "";
      }
    }
    var nc = {};
    function Qp(O) {
      {
        var ce = rc();
        if (!ce) {
          var ye = typeof O == "string" ? O : O.displayName || O.name;
          ye && (ce = `

Check the top-level render call using <` + ye + ">.");
        }
        return ce;
      }
    }
    function ic(O, ce) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var ye = Qp(ce);
        if (nc[ye])
          return;
        nc[ye] = !0;
        var Ae = "";
        O && O._owner && O._owner !== ns.current && (Ae = " It was passed a child from " + x(O._owner.type) + "."), qr(O), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Ae), qr(null);
      }
    }
    function oc(O, ce) {
      {
        if (typeof O != "object")
          return;
        if (z(O))
          for (var ye = 0; ye < O.length; ye++) {
            var Ae = O[ye];
            os(Ae) && ic(Ae, ce);
          }
        else if (os(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Oe = m(O);
          if (typeof Oe == "function" && Oe !== O.entries)
            for (var We = Oe.call(O), Ce; !(Ce = We.next()).done; )
              os(Ce.value) && ic(Ce.value, ce);
        }
      }
    }
    function Bp(O) {
      {
        var ce = O.type;
        if (ce == null || typeof ce == "string")
          return;
        var ye;
        if (typeof ce == "function")
          ye = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === f))
          ye = ce.propTypes;
        else
          return;
        if (ye) {
          var Ae = x(ce);
          p(ye, O.props, "prop", Ae, O);
        } else if (ce.PropTypes !== void 0 && !is) {
          is = !0;
          var Oe = x(ce);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $p(O) {
      {
        for (var ce = Object.keys(O.props), ye = 0; ye < ce.length; ye++) {
          var Ae = ce[ye];
          if (Ae !== "children" && Ae !== "key") {
            qr(O), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ae), qr(null);
            break;
          }
        }
        O.ref !== null && (qr(O), v("Invalid attribute `ref` supplied to `React.Fragment`."), qr(null));
      }
    }
    function sc(O, ce, ye, Ae, Oe, We) {
      {
        var Ce = S(O);
        if (!Ce) {
          var Se = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pt = Fp(Oe);
          pt ? Se += pt : Se += rc();
          var tt;
          O === null ? tt = "null" : z(O) ? tt = "array" : O !== void 0 && O.$$typeof === t ? (tt = "<" + (x(O.type) || "Unknown") + " />", Se = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof O, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Se);
        }
        var nt = Yp(O, ce, ye, Oe, We);
        if (nt == null)
          return nt;
        if (Ce) {
          var Tt = ce.children;
          if (Tt !== void 0)
            if (Ae)
              if (z(Tt)) {
                for (var Kr = 0; Kr < Tt.length; Kr++)
                  oc(Tt[Kr], O);
                Object.freeze && Object.freeze(Tt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              oc(Tt, O);
        }
        return O === n ? $p(nt) : Bp(nt), nt;
      }
    }
    function Vp(O, ce, ye) {
      return sc(O, ce, ye, !0);
    }
    function Wp(O, ce, ye) {
      return sc(O, ce, ye, !1);
    }
    var Hp = Wp, qp = Vp;
    Cn.Fragment = n, Cn.jsx = Hp, Cn.jsxs = qp;
  }()), Cn;
}
process.env.NODE_ENV === "production" ? sa.exports = ky() : sa.exports = zy();
var he = sa.exports;
const Py = () => /* @__PURE__ */ he.jsx("svg", { viewBox: "0 0 50 50", width: "50px", height: "50px", children: /* @__PURE__ */ he.jsx("path", { d: "M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z" }) });
var og = { exports: {} };
(function(e, t) {
  (function(n, i) {
    e.exports = i(Ne);
  })(Lt, (r) => (
    /******/
    (() => {
      var n = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (a, u) => {
            u.match = g, u.parse = M;
            var c = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, l = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, f = /^(?:(min|max)-)?(.+)/, d = /(em|rem|px|cm|mm|in|pt|pc)?$/, h = /(dpi|dpcm|dppx)?$/;
            function g(T, N) {
              return M(T).some(function(E) {
                var P = E.inverse, k = E.type === "all" || N.type === E.type;
                if (k && P || !(k || P))
                  return !1;
                var B = E.expressions.every(function(F) {
                  var S = F.feature, L = F.modifier, R = F.value, x = N[S];
                  if (!x)
                    return !1;
                  switch (S) {
                    case "orientation":
                    case "scan":
                      return x.toLowerCase() === R.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      R = v(R), x = v(x);
                      break;
                    case "resolution":
                      R = w(R), x = w(x);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      R = m(R), x = m(x);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      R = parseInt(R, 10) || 1, x = parseInt(x, 10) || 0;
                      break;
                  }
                  switch (L) {
                    case "min":
                      return x >= R;
                    case "max":
                      return x <= R;
                    default:
                      return x === R;
                  }
                });
                return B && !P || !B && P;
              });
            }
            function M(T) {
              return T.split(",").map(function(N) {
                N = N.trim();
                var E = N.match(c), P = E[1], k = E[2], B = E[3] || "", F = {};
                return F.inverse = !!P && P.toLowerCase() === "not", F.type = k ? k.toLowerCase() : "all", B = B.match(/\([^\)]+\)/g) || [], F.expressions = B.map(function(S) {
                  var L = S.match(l), R = L[1].toLowerCase().match(f);
                  return {
                    modifier: R[1],
                    feature: R[2],
                    value: L[2]
                  };
                }), F;
              });
            }
            function m(T) {
              var N = Number(T), E;
              return N || (E = T.match(/^(\d+)\s*\/\s*(\d+)$/), N = E[1] / E[2]), N;
            }
            function w(T) {
              var N = parseFloat(T), E = String(T).match(h)[1];
              switch (E) {
                case "dpcm":
                  return N / 2.54;
                case "dppx":
                  return N * 96;
                default:
                  return N;
              }
            }
            function v(T) {
              var N = parseFloat(T), E = String(T).match(d)[1];
              switch (E) {
                case "em":
                  return N * 16;
                case "rem":
                  return N * 16;
                case "cm":
                  return N * 96 / 2.54;
                case "mm":
                  return N * 96 / 2.54 / 10;
                case "in":
                  return N * 96;
                case "pt":
                  return N * 72;
                case "pc":
                  return N * 72 / 12;
                default:
                  return N;
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
          (a, u, c) => {
            c.r(u), c.d(u, {
              /* harmony export */
              default: () => M
              /* harmony export */
            });
            var l = /[A-Z]/g, f = /^ms-/, d = {};
            function h(m) {
              return "-" + m.toLowerCase();
            }
            function g(m) {
              if (d.hasOwnProperty(m))
                return d[m];
              var w = m.replace(l, h);
              return d[m] = f.test(w) ? "-" + w : w;
            }
            const M = g;
          }
        ),
        /***/
        "./node_modules/matchmediaquery/index.js": (
          /*!***********************************************!*\
            !*** ./node_modules/matchmediaquery/index.js ***!
            \***********************************************/
          /***/
          (a, u, c) => {
            var l = c(
              /*! css-mediaquery */
              "./node_modules/css-mediaquery/index.js"
            ).match, f = typeof window < "u" ? window.matchMedia : null;
            function d(g, M, m) {
              var w = this;
              if (f && !m) {
                var v = f.call(window, g);
                this.matches = v.matches, this.media = v.media, v.addListener(E);
              } else
                this.matches = l(g, M), this.media = g;
              this.addListener = T, this.removeListener = N, this.dispose = P;
              function T(k) {
                v && v.addListener(k);
              }
              function N(k) {
                v && v.removeListener(k);
              }
              function E(k) {
                w.matches = k.matches, w.media = k.media;
              }
              function P() {
                v && v.removeListener(E);
              }
            }
            function h(g, M, m) {
              return new d(g, M, m);
            }
            a.exports = h;
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
            var u = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
            function f(h) {
              if (h == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(h);
            }
            function d() {
              try {
                if (!Object.assign)
                  return !1;
                var h = new String("abc");
                if (h[5] = "de", Object.getOwnPropertyNames(h)[0] === "5")
                  return !1;
                for (var g = {}, M = 0; M < 10; M++)
                  g["_" + String.fromCharCode(M)] = M;
                var m = Object.getOwnPropertyNames(g).map(function(v) {
                  return g[v];
                });
                if (m.join("") !== "0123456789")
                  return !1;
                var w = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(v) {
                  w[v] = v;
                }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            a.exports = d() ? Object.assign : function(h, g) {
              for (var M, m = f(h), w, v = 1; v < arguments.length; v++) {
                M = Object(arguments[v]);
                for (var T in M)
                  c.call(M, T) && (m[T] = M[T]);
                if (u) {
                  w = u(M);
                  for (var N = 0; N < w.length; N++)
                    l.call(M, w[N]) && (m[w[N]] = M[w[N]]);
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
          (a, u, c) => {
            var l = function() {
            };
            {
              var f = c(
                /*! ./lib/ReactPropTypesSecret */
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
              ), d = {}, h = c(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              l = function(M) {
                var m = "Warning: " + M;
                typeof console < "u" && console.error(m);
                try {
                  throw new Error(m);
                } catch {
                }
              };
            }
            function g(M, m, w, v, T) {
              for (var N in M)
                if (h(M, N)) {
                  var E;
                  try {
                    if (typeof M[N] != "function") {
                      var P = Error(
                        (v || "React class") + ": " + w + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw P.name = "Invariant Violation", P;
                    }
                    E = M[N](m, N, v, w, null, f);
                  } catch (B) {
                    E = B;
                  }
                  if (E && !(E instanceof Error) && l(
                    (v || "React class") + ": type specification of " + w + " `" + N + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), E instanceof Error && !(E.message in d)) {
                    d[E.message] = !0;
                    var k = T ? T() : "";
                    l(
                      "Failed " + w + " type: " + E.message + (k ?? "")
                    );
                  }
                }
            }
            g.resetWarningCache = function() {
              d = {};
            }, a.exports = g;
          }
        ),
        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js": (
          /*!************************************************************!*\
            !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
            \************************************************************/
          /***/
          (a, u, c) => {
            var l = c(
              /*! react-is */
              "./node_modules/react-is/index.js"
            ), f = c(
              /*! object-assign */
              "./node_modules/object-assign/index.js"
            ), d = c(
              /*! ./lib/ReactPropTypesSecret */
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
            ), h = c(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), g = c(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), M = function() {
            };
            M = function(w) {
              var v = "Warning: " + w;
              typeof console < "u" && console.error(v);
              try {
                throw new Error(v);
              } catch {
              }
            };
            function m() {
              return null;
            }
            a.exports = function(w, v) {
              var T = typeof Symbol == "function" && Symbol.iterator, N = "@@iterator";
              function E(V) {
                var Y = V && (T && V[T] || V[N]);
                if (typeof Y == "function")
                  return Y;
              }
              var P = "<<anonymous>>", k = {
                array: L("array"),
                bigint: L("bigint"),
                bool: L("boolean"),
                func: L("function"),
                number: L("number"),
                object: L("object"),
                string: L("string"),
                symbol: L("symbol"),
                any: R(),
                arrayOf: x,
                element: j(),
                elementType: b(),
                instanceOf: W,
                node: _(),
                objectOf: oe,
                oneOf: re,
                oneOfType: ie,
                shape: U,
                exact: K
              };
              function B(V, Y) {
                return V === Y ? V !== 0 || 1 / V === 1 / Y : V !== V && Y !== Y;
              }
              function F(V, Y) {
                this.message = V, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
              }
              F.prototype = Error.prototype;
              function S(V) {
                var Y = {}, Q = 0;
                function fe(le, Me, de, I, y, p, A) {
                  if (I = I || P, p = p || de, A !== d) {
                    if (v) {
                      var z = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw z.name = "Invariant Violation", z;
                    } else if (typeof console < "u") {
                      var Z = I + ":" + de;
                      !Y[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
                      Q < 3 && (M(
                        "You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), Y[Z] = !0, Q++);
                    }
                  }
                  return Me[de] == null ? le ? Me[de] === null ? new F("The " + y + " `" + p + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new F("The " + y + " `" + p + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : V(Me, de, I, y, p);
                }
                var X = fe.bind(null, !1);
                return X.isRequired = fe.bind(null, !0), X;
              }
              function L(V) {
                function Y(Q, fe, X, le, Me, de) {
                  var I = Q[fe], y = C(I);
                  if (y !== V) {
                    var p = te(I);
                    return new F(
                      "Invalid " + le + " `" + Me + "` of type " + ("`" + p + "` supplied to `" + X + "`, expected ") + ("`" + V + "`."),
                      { expectedType: V }
                    );
                  }
                  return null;
                }
                return S(Y);
              }
              function R() {
                return S(m);
              }
              function x(V) {
                function Y(Q, fe, X, le, Me) {
                  if (typeof V != "function")
                    return new F("Property `" + Me + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
                  var de = Q[fe];
                  if (!Array.isArray(de)) {
                    var I = C(de);
                    return new F("Invalid " + le + " `" + Me + "` of type " + ("`" + I + "` supplied to `" + X + "`, expected an array."));
                  }
                  for (var y = 0; y < de.length; y++) {
                    var p = V(de, y, X, le, Me + "[" + y + "]", d);
                    if (p instanceof Error)
                      return p;
                  }
                  return null;
                }
                return S(Y);
              }
              function j() {
                function V(Y, Q, fe, X, le) {
                  var Me = Y[Q];
                  if (!w(Me)) {
                    var de = C(Me);
                    return new F("Invalid " + X + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return S(V);
              }
              function b() {
                function V(Y, Q, fe, X, le) {
                  var Me = Y[Q];
                  if (!l.isValidElementType(Me)) {
                    var de = C(Me);
                    return new F("Invalid " + X + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return S(V);
              }
              function W(V) {
                function Y(Q, fe, X, le, Me) {
                  if (!(Q[fe] instanceof V)) {
                    var de = V.name || P, I = ge(Q[fe]);
                    return new F("Invalid " + le + " `" + Me + "` of type " + ("`" + I + "` supplied to `" + X + "`, expected ") + ("instance of `" + de + "`."));
                  }
                  return null;
                }
                return S(Y);
              }
              function re(V) {
                if (!Array.isArray(V))
                  return arguments.length > 1 ? M(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : M("Invalid argument supplied to oneOf, expected an array."), m;
                function Y(Q, fe, X, le, Me) {
                  for (var de = Q[fe], I = 0; I < V.length; I++)
                    if (B(de, V[I]))
                      return null;
                  var y = JSON.stringify(V, function(A, z) {
                    var Z = te(z);
                    return Z === "symbol" ? String(z) : z;
                  });
                  return new F("Invalid " + le + " `" + Me + "` of value `" + String(de) + "` " + ("supplied to `" + X + "`, expected one of " + y + "."));
                }
                return S(Y);
              }
              function oe(V) {
                function Y(Q, fe, X, le, Me) {
                  if (typeof V != "function")
                    return new F("Property `" + Me + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
                  var de = Q[fe], I = C(de);
                  if (I !== "object")
                    return new F("Invalid " + le + " `" + Me + "` of type " + ("`" + I + "` supplied to `" + X + "`, expected an object."));
                  for (var y in de)
                    if (h(de, y)) {
                      var p = V(de, y, X, le, Me + "." + y, d);
                      if (p instanceof Error)
                        return p;
                    }
                  return null;
                }
                return S(Y);
              }
              function ie(V) {
                if (!Array.isArray(V))
                  return M("Invalid argument supplied to oneOfType, expected an instance of array."), m;
                for (var Y = 0; Y < V.length; Y++) {
                  var Q = V[Y];
                  if (typeof Q != "function")
                    return M(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(Q) + " at index " + Y + "."
                    ), m;
                }
                function fe(X, le, Me, de, I) {
                  for (var y = [], p = 0; p < V.length; p++) {
                    var A = V[p], z = A(X, le, Me, de, I, d);
                    if (z == null)
                      return null;
                    z.data && h(z.data, "expectedType") && y.push(z.data.expectedType);
                  }
                  var Z = y.length > 0 ? ", expected one of type [" + y.join(", ") + "]" : "";
                  return new F("Invalid " + de + " `" + I + "` supplied to " + ("`" + Me + "`" + Z + "."));
                }
                return S(fe);
              }
              function _() {
                function V(Y, Q, fe, X, le) {
                  return q(Y[Q]) ? null : new F("Invalid " + X + " `" + le + "` supplied to " + ("`" + fe + "`, expected a ReactNode."));
                }
                return S(V);
              }
              function $(V, Y, Q, fe, X) {
                return new F(
                  (V || "React class") + ": " + Y + " type `" + Q + "." + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
                );
              }
              function U(V) {
                function Y(Q, fe, X, le, Me) {
                  var de = Q[fe], I = C(de);
                  if (I !== "object")
                    return new F("Invalid " + le + " `" + Me + "` of type `" + I + "` " + ("supplied to `" + X + "`, expected `object`."));
                  for (var y in V) {
                    var p = V[y];
                    if (typeof p != "function")
                      return $(X, le, Me, y, te(p));
                    var A = p(de, y, X, le, Me + "." + y, d);
                    if (A)
                      return A;
                  }
                  return null;
                }
                return S(Y);
              }
              function K(V) {
                function Y(Q, fe, X, le, Me) {
                  var de = Q[fe], I = C(de);
                  if (I !== "object")
                    return new F("Invalid " + le + " `" + Me + "` of type `" + I + "` " + ("supplied to `" + X + "`, expected `object`."));
                  var y = f({}, Q[fe], V);
                  for (var p in y) {
                    var A = V[p];
                    if (h(V, p) && typeof A != "function")
                      return $(X, le, Me, p, te(A));
                    if (!A)
                      return new F(
                        "Invalid " + le + " `" + Me + "` key `" + p + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(Q[fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(V), null, "  ")
                      );
                    var z = A(de, p, X, le, Me + "." + p, d);
                    if (z)
                      return z;
                  }
                  return null;
                }
                return S(Y);
              }
              function q(V) {
                switch (typeof V) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !V;
                  case "object":
                    if (Array.isArray(V))
                      return V.every(q);
                    if (V === null || w(V))
                      return !0;
                    var Y = E(V);
                    if (Y) {
                      var Q = Y.call(V), fe;
                      if (Y !== V.entries) {
                        for (; !(fe = Q.next()).done; )
                          if (!q(fe.value))
                            return !1;
                      } else
                        for (; !(fe = Q.next()).done; ) {
                          var X = fe.value;
                          if (X && !q(X[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function J(V, Y) {
                return V === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
              }
              function C(V) {
                var Y = typeof V;
                return Array.isArray(V) ? "array" : V instanceof RegExp ? "object" : J(Y, V) ? "symbol" : Y;
              }
              function te(V) {
                if (typeof V > "u" || V === null)
                  return "" + V;
                var Y = C(V);
                if (Y === "object") {
                  if (V instanceof Date)
                    return "date";
                  if (V instanceof RegExp)
                    return "regexp";
                }
                return Y;
              }
              function H(V) {
                var Y = te(V);
                switch (Y) {
                  case "array":
                  case "object":
                    return "an " + Y;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + Y;
                  default:
                    return Y;
                }
              }
              function ge(V) {
                return !V.constructor || !V.constructor.name ? P : V.constructor.name;
              }
              return k.checkPropTypes = g, k.resetWarningCache = g.resetWarningCache, k.PropTypes = k, k;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/index.js": (
          /*!******************************************!*\
            !*** ./node_modules/prop-types/index.js ***!
            \******************************************/
          /***/
          (a, u, c) => {
            {
              var l = c(
                /*! react-is */
                "./node_modules/react-is/index.js"
              ), f = !0;
              a.exports = c(
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
            var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            a.exports = u;
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
          (a, u) => {
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            (function() {
              var c = typeof Symbol == "function" && Symbol.for, l = c ? Symbol.for("react.element") : 60103, f = c ? Symbol.for("react.portal") : 60106, d = c ? Symbol.for("react.fragment") : 60107, h = c ? Symbol.for("react.strict_mode") : 60108, g = c ? Symbol.for("react.profiler") : 60114, M = c ? Symbol.for("react.provider") : 60109, m = c ? Symbol.for("react.context") : 60110, w = c ? Symbol.for("react.async_mode") : 60111, v = c ? Symbol.for("react.concurrent_mode") : 60111, T = c ? Symbol.for("react.forward_ref") : 60112, N = c ? Symbol.for("react.suspense") : 60113, E = c ? Symbol.for("react.suspense_list") : 60120, P = c ? Symbol.for("react.memo") : 60115, k = c ? Symbol.for("react.lazy") : 60116, B = c ? Symbol.for("react.block") : 60121, F = c ? Symbol.for("react.fundamental") : 60117, S = c ? Symbol.for("react.responder") : 60118, L = c ? Symbol.for("react.scope") : 60119;
              function R(A) {
                return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                A === d || A === v || A === g || A === h || A === N || A === E || typeof A == "object" && A !== null && (A.$$typeof === k || A.$$typeof === P || A.$$typeof === M || A.$$typeof === m || A.$$typeof === T || A.$$typeof === F || A.$$typeof === S || A.$$typeof === L || A.$$typeof === B);
              }
              function x(A) {
                if (typeof A == "object" && A !== null) {
                  var z = A.$$typeof;
                  switch (z) {
                    case l:
                      var Z = A.type;
                      switch (Z) {
                        case w:
                        case v:
                        case d:
                        case g:
                        case h:
                        case N:
                          return Z;
                        default:
                          var G = Z && Z.$$typeof;
                          switch (G) {
                            case m:
                            case T:
                            case k:
                            case P:
                            case M:
                              return G;
                            default:
                              return z;
                          }
                      }
                    case f:
                      return z;
                  }
                }
              }
              var j = w, b = v, W = m, re = M, oe = l, ie = T, _ = d, $ = k, U = P, K = f, q = g, J = h, C = N, te = !1;
              function H(A) {
                return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ge(A) || x(A) === w;
              }
              function ge(A) {
                return x(A) === v;
              }
              function V(A) {
                return x(A) === m;
              }
              function Y(A) {
                return x(A) === M;
              }
              function Q(A) {
                return typeof A == "object" && A !== null && A.$$typeof === l;
              }
              function fe(A) {
                return x(A) === T;
              }
              function X(A) {
                return x(A) === d;
              }
              function le(A) {
                return x(A) === k;
              }
              function Me(A) {
                return x(A) === P;
              }
              function de(A) {
                return x(A) === f;
              }
              function I(A) {
                return x(A) === g;
              }
              function y(A) {
                return x(A) === h;
              }
              function p(A) {
                return x(A) === N;
              }
              u.AsyncMode = j, u.ConcurrentMode = b, u.ContextConsumer = W, u.ContextProvider = re, u.Element = oe, u.ForwardRef = ie, u.Fragment = _, u.Lazy = $, u.Memo = U, u.Portal = K, u.Profiler = q, u.StrictMode = J, u.Suspense = C, u.isAsyncMode = H, u.isConcurrentMode = ge, u.isContextConsumer = V, u.isContextProvider = Y, u.isElement = Q, u.isForwardRef = fe, u.isFragment = X, u.isLazy = le, u.isMemo = Me, u.isPortal = de, u.isProfiler = I, u.isStrictMode = y, u.isSuspense = p, u.isValidElementType = R, u.typeOf = x;
            })();
          }
        ),
        /***/
        "./node_modules/react-is/index.js": (
          /*!****************************************!*\
            !*** ./node_modules/react-is/index.js ***!
            \****************************************/
          /***/
          (a, u, c) => {
            a.exports = c(
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
          (a, u, c) => {
            c.r(u), c.d(u, {
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
            function l(d, h) {
              if (d === h)
                return !0;
              if (!d || !h)
                return !1;
              var g = Object.keys(d), M = Object.keys(h), m = g.length;
              if (M.length !== m)
                return !1;
              for (var w = 0; w < m; w++) {
                var v = g[w];
                if (d[v] !== h[v] || !Object.prototype.hasOwnProperty.call(h, v))
                  return !1;
              }
              return !0;
            }
            function f(d, h) {
              if (d === h)
                return !0;
              if (!d || !h)
                return !1;
              var g = d.length;
              if (h.length !== g)
                return !1;
              for (var M = 0; M < g; M++)
                if (d[M] !== h[M])
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
          function(a, u, c) {
            var l = this && this.__rest || function(g, M) {
              var m = {};
              for (var w in g)
                Object.prototype.hasOwnProperty.call(g, w) && M.indexOf(w) < 0 && (m[w] = g[w]);
              if (g != null && typeof Object.getOwnPropertySymbols == "function")
                for (var v = 0, w = Object.getOwnPropertySymbols(g); v < w.length; v++)
                  M.indexOf(w[v]) < 0 && Object.prototype.propertyIsEnumerable.call(g, w[v]) && (m[w[v]] = g[w[v]]);
              return m;
            }, f = this && this.__importDefault || function(g) {
              return g && g.__esModule ? g : { default: g };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var d = f(c(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), h = function(g) {
              var M = g.children, m = g.device, w = g.onChange, v = l(g, ["children", "device", "onChange"]), T = (0, d.default)(v, m, w);
              return typeof M == "function" ? M(T) : T ? M : null;
            };
            u.default = h;
          }
        ),
        /***/
        "./src/Context.ts": (
          /*!************************!*\
            !*** ./src/Context.ts ***!
            \************************/
          /***/
          (a, u, c) => {
            Object.defineProperty(u, "__esModule", { value: !0 });
            var l = c(
              /*! react */
              "react"
            ), f = (0, l.createContext)(void 0);
            u.default = f;
          }
        ),
        /***/
        "./src/index.ts": (
          /*!**********************!*\
            !*** ./src/index.ts ***!
            \**********************/
          /***/
          function(a, u, c) {
            var l = this && this.__importDefault || function(M) {
              return M && M.__esModule ? M : { default: M };
            };
            Object.defineProperty(u, "__esModule", { value: !0 }), u.Context = u.toQuery = u.useMediaQuery = u.default = void 0;
            var f = l(c(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            ));
            u.useMediaQuery = f.default;
            var d = l(c(
              /*! ./Component */
              "./src/Component.ts"
            ));
            u.default = d.default;
            var h = l(c(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            u.toQuery = h.default;
            var g = l(c(
              /*! ./Context */
              "./src/Context.ts"
            ));
            u.Context = g.default;
          }
        ),
        /***/
        "./src/mediaQuery.ts": (
          /*!***************************!*\
            !*** ./src/mediaQuery.ts ***!
            \***************************/
          /***/
          function(a, u, c) {
            var l = this && this.__assign || function() {
              return l = Object.assign || function(N) {
                for (var E, P = 1, k = arguments.length; P < k; P++) {
                  E = arguments[P];
                  for (var B in E)
                    Object.prototype.hasOwnProperty.call(E, B) && (N[B] = E[B]);
                }
                return N;
              }, l.apply(this, arguments);
            }, f = this && this.__rest || function(N, E) {
              var P = {};
              for (var k in N)
                Object.prototype.hasOwnProperty.call(N, k) && E.indexOf(k) < 0 && (P[k] = N[k]);
              if (N != null && typeof Object.getOwnPropertySymbols == "function")
                for (var B = 0, k = Object.getOwnPropertySymbols(N); B < k.length; B++)
                  E.indexOf(k[B]) < 0 && Object.prototype.propertyIsEnumerable.call(N, k[B]) && (P[k[B]] = N[k[B]]);
              return P;
            }, d = this && this.__importDefault || function(N) {
              return N && N.__esModule ? N : { default: N };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var h = d(c(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), g = h.default.oneOfType([
              h.default.string,
              h.default.number
            ]), M = {
              all: h.default.bool,
              grid: h.default.bool,
              aural: h.default.bool,
              braille: h.default.bool,
              handheld: h.default.bool,
              print: h.default.bool,
              projection: h.default.bool,
              screen: h.default.bool,
              tty: h.default.bool,
              tv: h.default.bool,
              embossed: h.default.bool
            }, m = {
              orientation: h.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: h.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: h.default.string,
              deviceAspectRatio: h.default.string,
              height: g,
              deviceHeight: g,
              width: g,
              deviceWidth: g,
              color: h.default.bool,
              colorIndex: h.default.bool,
              monochrome: h.default.bool,
              resolution: g,
              type: Object.keys(M)
            };
            m.type;
            var w = f(
              m,
              ["type"]
            ), v = l({ minAspectRatio: h.default.string, maxAspectRatio: h.default.string, minDeviceAspectRatio: h.default.string, maxDeviceAspectRatio: h.default.string, minHeight: g, maxHeight: g, minDeviceHeight: g, maxDeviceHeight: g, minWidth: g, maxWidth: g, minDeviceWidth: g, maxDeviceWidth: g, minColor: h.default.number, maxColor: h.default.number, minColorIndex: h.default.number, maxColorIndex: h.default.number, minMonochrome: h.default.number, maxMonochrome: h.default.number, minResolution: g, maxResolution: g }, w), T = l(l({}, M), v);
            u.default = {
              all: T,
              types: M,
              matchers: m,
              features: v
            };
          }
        ),
        /***/
        "./src/toQuery.ts": (
          /*!************************!*\
            !*** ./src/toQuery.ts ***!
            \************************/
          /***/
          function(a, u, c) {
            var l = this && this.__importDefault || function(w) {
              return w && w.__esModule ? w : { default: w };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var f = l(c(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), d = l(c(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), h = function(w) {
              return "not ".concat(w);
            }, g = function(w, v) {
              var T = (0, f.default)(w);
              return typeof v == "number" && (v = "".concat(v, "px")), v === !0 ? T : v === !1 ? h(T) : "(".concat(T, ": ").concat(v, ")");
            }, M = function(w) {
              return w.join(" and ");
            }, m = function(w) {
              var v = [];
              return Object.keys(d.default.all).forEach(function(T) {
                var N = w[T];
                N != null && v.push(g(T, N));
              }), M(v);
            };
            u.default = m;
          }
        ),
        /***/
        "./src/useMediaQuery.ts": (
          /*!******************************!*\
            !*** ./src/useMediaQuery.ts ***!
            \******************************/
          /***/
          function(a, u, c) {
            var l = this && this.__importDefault || function(F) {
              return F && F.__esModule ? F : { default: F };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var f = c(
              /*! react */
              "react"
            ), d = l(c(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), h = l(c(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), g = c(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), M = l(c(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), m = l(c(
              /*! ./Context */
              "./src/Context.ts"
            )), w = function(F) {
              return F.query || (0, M.default)(F);
            }, v = function(F) {
              if (F) {
                var S = Object.keys(F);
                return S.reduce(function(L, R) {
                  return L[(0, h.default)(R)] = F[R], L;
                }, {});
              }
            }, T = function() {
              var F = (0, f.useRef)(!1);
              return (0, f.useEffect)(function() {
                F.current = !0;
              }, []), F.current;
            }, N = function(F) {
              var S = (0, f.useContext)(m.default), L = function() {
                return v(F) || v(S);
              }, R = (0, f.useState)(L), x = R[0], j = R[1];
              return (0, f.useEffect)(function() {
                var b = L();
                (0, g.shallowEqualObjects)(x, b) || j(b);
              }, [F, S]), x;
            }, E = function(F) {
              var S = function() {
                return w(F);
              }, L = (0, f.useState)(S), R = L[0], x = L[1];
              return (0, f.useEffect)(function() {
                var j = S();
                R !== j && x(j);
              }, [F]), R;
            }, P = function(F, S) {
              var L = function() {
                return (0, d.default)(F, S || {}, !!S);
              }, R = (0, f.useState)(L), x = R[0], j = R[1], b = T();
              return (0, f.useEffect)(function() {
                if (b) {
                  var W = L();
                  return j(W), function() {
                    W && W.dispose();
                  };
                }
              }, [F, S]), x;
            }, k = function(F) {
              var S = (0, f.useState)(F.matches), L = S[0], R = S[1];
              return (0, f.useEffect)(function() {
                var x = function(j) {
                  R(j.matches);
                };
                return F.addListener(x), R(F.matches), function() {
                  F.removeListener(x);
                };
              }, [F]), L;
            }, B = function(F, S, L) {
              var R = N(S), x = E(F);
              if (!x)
                throw new Error("Invalid or missing MediaQuery!");
              var j = P(x, R), b = k(j), W = T();
              return (0, f.useEffect)(function() {
                W && L && L(b);
              }, [b]), (0, f.useEffect)(function() {
                return function() {
                  j && j.dispose();
                };
              }, []), b;
            };
            u.default = B;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
            \**************************************************************************************/
          /***/
          (a) => {
            a.exports = r;
          }
        )
        /******/
      }, i = {};
      function o(a) {
        var u = i[a];
        if (u !== void 0)
          return u.exports;
        var c = i[a] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return n[a].call(c.exports, c, c.exports, o), c.exports;
      }
      o.d = (a, u) => {
        for (var c in u)
          o.o(u, c) && !o.o(a, c) && Object.defineProperty(a, c, { enumerable: !0, get: u[c] });
      }, o.o = (a, u) => Object.prototype.hasOwnProperty.call(a, u), o.r = (a) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      };
      var s = o("./src/index.ts");
      return s;
    })()
  ));
})(og);
var Ry = og.exports;
const aa = /* @__PURE__ */ Do(Ry);
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ua.apply(this, arguments);
}
var Sc;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Sc || (Sc = {}));
function It(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function sg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ag(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var bc;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(bc || (bc = {}));
function Uy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = ""
  } = typeof e == "string" ? ag(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Yy(r, t) : t,
    search: $y(n),
    hash: Vy(i)
  };
}
function Yy(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
  }), r.length > 1 ? r.join("/") : "/";
}
function us(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Fy(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Qy(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string" ? i = ag(e) : (i = ua({}, e), It(!i.pathname || !i.pathname.includes("?"), us("?", "pathname", "search", i)), It(!i.pathname || !i.pathname.includes("#"), us("#", "pathname", "hash", i)), It(!i.search || !i.search.includes("#"), us("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (n || s == null)
    a = r;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), f -= 1;
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = Uy(i, a), c = s && s !== "/" && s.endsWith("/"), l = (o || s === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (c || l) && (u.pathname += "/"), u;
}
const By = (e) => e.join("/").replace(/\/\/+/g, "/"), $y = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Vy = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ca.apply(this, arguments);
}
const hu = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (hu.displayName = "DataRouter");
const Wy = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (Wy.displayName = "DataRouterState");
const Hy = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (Hy.displayName = "Await");
const pu = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (pu.displayName = "Navigation");
const Mu = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (Mu.displayName = "Location");
const yu = /* @__PURE__ */ ee.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (yu.displayName = "Route");
const qy = /* @__PURE__ */ ee.createContext(null);
process.env.NODE_ENV !== "production" && (qy.displayName = "RouteError");
function ug() {
  return ee.useContext(Mu) != null;
}
function Ky() {
  return ug() || (process.env.NODE_ENV !== "production" ? It(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : It(!1)), ee.useContext(Mu).location;
}
const cg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function lg(e) {
  ee.useContext(pu).static || ee.useLayoutEffect(e);
}
function Gy() {
  return ee.useContext(hu) != null ? tm() : Jy();
}
function Jy() {
  ug() || (process.env.NODE_ENV !== "production" ? It(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : It(!1));
  let {
    basename: e,
    navigator: t
  } = ee.useContext(pu), {
    matches: r
  } = ee.useContext(yu), {
    pathname: n
  } = Ky(), i = JSON.stringify(Fy(r).map((a) => a.pathnameBase)), o = ee.useRef(!1);
  return lg(() => {
    o.current = !0;
  }), ee.useCallback(function(a, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && sg(o.current, cg), !o.current)
      return;
    if (typeof a == "number") {
      t.go(a);
      return;
    }
    let c = Qy(a, JSON.parse(i), n, u.relative === "path");
    e !== "/" && (c.pathname = c.pathname === "/" ? e : By([e, c.pathname])), (u.replace ? t.replace : t.push)(c, u.state, u);
  }, [e, t, i, n]);
}
var la;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})(la || (la = {}));
var fa;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(fa || (fa = {}));
function fg(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Zy(e) {
  let t = ee.useContext(hu);
  return t || (process.env.NODE_ENV !== "production" ? It(!1, fg(e)) : It(!1)), t;
}
function Xy(e) {
  let t = ee.useContext(yu);
  return t || (process.env.NODE_ENV !== "production" ? It(!1, fg(e)) : It(!1)), t;
}
function em(e) {
  let t = Xy(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? It(!1, e + ' can only be used on routes that contain a unique "id"') : It(!1)), r.route.id;
}
function tm() {
  let {
    router: e
  } = Zy(la.UseNavigateStable), t = em(fa.UseNavigateStable), r = ee.useRef(!1);
  return lg(() => {
    r.current = !0;
  }), ee.useCallback(function(i, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && sg(r.current, cg), r.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ca({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
var xc;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(xc || (xc = {}));
new Promise(() => {
});
const rm = {
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
}, nm = {
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
}, im = {
  sun: "#FFC000",
  moon: "#F7E7CE"
}, om = {
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
}, Ke = {
  light: rm,
  dark: nm,
  icon: im,
  quarter: om
};
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pe.apply(this, arguments);
}
function Ge(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var da = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cs, Cc;
function sm() {
  if (Cc)
    return cs;
  Cc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return cs = i() ? Object.assign : function(o, s) {
    for (var a, u = n(o), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var f in a)
        t.call(a, f) && (u[f] = a[f]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          r.call(a, c[d]) && (u[c[d]] = a[c[d]]);
      }
    }
    return u;
  }, cs;
}
var ls, Oc;
function mu() {
  if (Oc)
    return ls;
  Oc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ls = e, ls;
}
var fs, Lc;
function dg() {
  return Lc || (Lc = 1, fs = Function.call.bind(Object.prototype.hasOwnProperty)), fs;
}
var ds, _c;
function am() {
  if (_c)
    return ds;
  _c = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = mu(), r = {}, n = dg();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, a, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (n(o, l)) {
          var f;
          try {
            if (typeof o[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = o[l](s, l, u, a, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + a + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ds = i, ds;
}
var gs, kc;
function um() {
  if (kc)
    return gs;
  kc = 1;
  var e = cu, t = sm(), r = mu(), n = dg(), i = am(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return gs = function(a, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(_) {
      var $ = _ && (c && _[c] || _[l]);
      if (typeof $ == "function")
        return $;
    }
    var d = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: v(),
      arrayOf: T,
      element: N(),
      elementType: E(),
      instanceOf: P,
      node: S(),
      objectOf: B,
      oneOf: k,
      oneOfType: F,
      shape: R,
      exact: x
    };
    function g(_, $) {
      return _ === $ ? _ !== 0 || 1 / _ === 1 / $ : _ !== _ && $ !== $;
    }
    function M(_, $) {
      this.message = _, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function m(_) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, U = 0;
      function K(J, C, te, H, ge, V, Y) {
        if (H = H || d, V = V || te, Y !== r) {
          if (u) {
            var Q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Q.name = "Invariant Violation", Q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = H + ":" + te;
            !$[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[fe] = !0, U++);
          }
        }
        return C[te] == null ? J ? C[te] === null ? new M("The " + ge + " `" + V + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new M("The " + ge + " `" + V + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : _(C, te, H, ge, V);
      }
      var q = K.bind(null, !1);
      return q.isRequired = K.bind(null, !0), q;
    }
    function w(_) {
      function $(U, K, q, J, C, te) {
        var H = U[K], ge = W(H);
        if (ge !== _) {
          var V = re(H);
          return new M(
            "Invalid " + J + " `" + C + "` of type " + ("`" + V + "` supplied to `" + q + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return m($);
    }
    function v() {
      return m(s);
    }
    function T(_) {
      function $(U, K, q, J, C) {
        if (typeof _ != "function")
          return new M("Property `" + C + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var te = U[K];
        if (!Array.isArray(te)) {
          var H = W(te);
          return new M("Invalid " + J + " `" + C + "` of type " + ("`" + H + "` supplied to `" + q + "`, expected an array."));
        }
        for (var ge = 0; ge < te.length; ge++) {
          var V = _(te, ge, q, J, C + "[" + ge + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return m($);
    }
    function N() {
      function _($, U, K, q, J) {
        var C = $[U];
        if (!a(C)) {
          var te = W(C);
          return new M("Invalid " + q + " `" + J + "` of type " + ("`" + te + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(_);
    }
    function E() {
      function _($, U, K, q, J) {
        var C = $[U];
        if (!e.isValidElementType(C)) {
          var te = W(C);
          return new M("Invalid " + q + " `" + J + "` of type " + ("`" + te + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(_);
    }
    function P(_) {
      function $(U, K, q, J, C) {
        if (!(U[K] instanceof _)) {
          var te = _.name || d, H = ie(U[K]);
          return new M("Invalid " + J + " `" + C + "` of type " + ("`" + H + "` supplied to `" + q + "`, expected ") + ("instance of `" + te + "`."));
        }
        return null;
      }
      return m($);
    }
    function k(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(U, K, q, J, C) {
        for (var te = U[K], H = 0; H < _.length; H++)
          if (g(te, _[H]))
            return null;
        var ge = JSON.stringify(_, function(Y, Q) {
          var fe = re(Q);
          return fe === "symbol" ? String(Q) : Q;
        });
        return new M("Invalid " + J + " `" + C + "` of value `" + String(te) + "` " + ("supplied to `" + q + "`, expected one of " + ge + "."));
      }
      return m($);
    }
    function B(_) {
      function $(U, K, q, J, C) {
        if (typeof _ != "function")
          return new M("Property `" + C + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var te = U[K], H = W(te);
        if (H !== "object")
          return new M("Invalid " + J + " `" + C + "` of type " + ("`" + H + "` supplied to `" + q + "`, expected an object."));
        for (var ge in te)
          if (n(te, ge)) {
            var V = _(te, ge, q, J, C + "." + ge, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return m($);
    }
    function F(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < _.length; $++) {
        var U = _[$];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(U) + " at index " + $ + "."
          ), s;
      }
      function K(q, J, C, te, H) {
        for (var ge = [], V = 0; V < _.length; V++) {
          var Y = _[V], Q = Y(q, J, C, te, H, r);
          if (Q == null)
            return null;
          Q.data && n(Q.data, "expectedType") && ge.push(Q.data.expectedType);
        }
        var fe = ge.length > 0 ? ", expected one of type [" + ge.join(", ") + "]" : "";
        return new M("Invalid " + te + " `" + H + "` supplied to " + ("`" + C + "`" + fe + "."));
      }
      return m(K);
    }
    function S() {
      function _($, U, K, q, J) {
        return j($[U]) ? null : new M("Invalid " + q + " `" + J + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return m(_);
    }
    function L(_, $, U, K, q) {
      return new M(
        (_ || "React class") + ": " + $ + " type `" + U + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function R(_) {
      function $(U, K, q, J, C) {
        var te = U[K], H = W(te);
        if (H !== "object")
          return new M("Invalid " + J + " `" + C + "` of type `" + H + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var ge in _) {
          var V = _[ge];
          if (typeof V != "function")
            return L(q, J, C, ge, re(V));
          var Y = V(te, ge, q, J, C + "." + ge, r);
          if (Y)
            return Y;
        }
        return null;
      }
      return m($);
    }
    function x(_) {
      function $(U, K, q, J, C) {
        var te = U[K], H = W(te);
        if (H !== "object")
          return new M("Invalid " + J + " `" + C + "` of type `" + H + "` " + ("supplied to `" + q + "`, expected `object`."));
        var ge = t({}, U[K], _);
        for (var V in ge) {
          var Y = _[V];
          if (n(_, V) && typeof Y != "function")
            return L(q, J, C, V, re(Y));
          if (!Y)
            return new M(
              "Invalid " + J + " `" + C + "` key `" + V + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(U[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var Q = Y(te, V, q, J, C + "." + V, r);
          if (Q)
            return Q;
        }
        return null;
      }
      return m($);
    }
    function j(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(j);
          if (_ === null || a(_))
            return !0;
          var $ = f(_);
          if ($) {
            var U = $.call(_), K;
            if ($ !== _.entries) {
              for (; !(K = U.next()).done; )
                if (!j(K.value))
                  return !1;
            } else
              for (; !(K = U.next()).done; ) {
                var q = K.value;
                if (q && !j(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function b(_, $) {
      return _ === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function W(_) {
      var $ = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : b($, _) ? "symbol" : $;
    }
    function re(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var $ = W(_);
      if ($ === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function oe(_) {
      var $ = re(_);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function ie(_) {
      return !_.constructor || !_.constructor.name ? d : _.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, gs;
}
var hs, zc;
function cm() {
  if (zc)
    return hs;
  zc = 1;
  var e = mu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hs = function() {
    function n(s, a, u, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, hs;
}
if (process.env.NODE_ENV !== "production") {
  var lm = cu, fm = !0;
  da.exports = um()(lm.isElement, fm);
} else
  da.exports = cm()();
var dm = da.exports;
const D = /* @__PURE__ */ Do(dm);
function gg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = gg(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function st() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = gg(e)) && (n && (n += " "), n += t);
  return n;
}
function hg(e) {
  return typeof e == "string";
}
function yi(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function sn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function pg(e) {
  if (!sn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = pg(e[r]);
  }), t;
}
function er(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? pe({}, e) : e;
  return sn(e) && sn(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (sn(t[i]) && i in e && sn(e[i]) ? n[i] = er(e[i], t[i], r) : r.clone ? n[i] = sn(t[i]) ? pg(t[i]) : t[i] : n[i] = t[i]);
  }), n;
}
function gm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Mg(e, t, r, n, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = o.type;
  return typeof u == "function" && !gm(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yg = yi(D.element, Mg);
yg.isRequired = yi(D.element.isRequired, Mg);
const mi = yg;
function hm(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pm(e, t, r, n, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof o == "function" && !hm(o) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const mg = yi(D.elementType, pm), Mm = "exact-prop: ​";
function vg(e) {
  return process.env.NODE_ENV === "production" ? e : pe({}, e, {
    [Mm]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function ni(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var ga = { exports: {} }, Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc;
function ym() {
  if (Pc)
    return Ue;
  Pc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function M(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case e:
          switch (m = m.type, m) {
            case r:
            case i:
            case n:
            case c:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case u:
                case d:
                case f:
                case o:
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
  return Ue.ContextConsumer = s, Ue.ContextProvider = o, Ue.Element = e, Ue.ForwardRef = u, Ue.Fragment = r, Ue.Lazy = d, Ue.Memo = f, Ue.Portal = t, Ue.Profiler = i, Ue.StrictMode = n, Ue.Suspense = c, Ue.SuspenseList = l, Ue.isAsyncMode = function() {
    return !1;
  }, Ue.isConcurrentMode = function() {
    return !1;
  }, Ue.isContextConsumer = function(m) {
    return M(m) === s;
  }, Ue.isContextProvider = function(m) {
    return M(m) === o;
  }, Ue.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Ue.isForwardRef = function(m) {
    return M(m) === u;
  }, Ue.isFragment = function(m) {
    return M(m) === r;
  }, Ue.isLazy = function(m) {
    return M(m) === d;
  }, Ue.isMemo = function(m) {
    return M(m) === f;
  }, Ue.isPortal = function(m) {
    return M(m) === t;
  }, Ue.isProfiler = function(m) {
    return M(m) === i;
  }, Ue.isStrictMode = function(m) {
    return M(m) === n;
  }, Ue.isSuspense = function(m) {
    return M(m) === c;
  }, Ue.isSuspenseList = function(m) {
    return M(m) === l;
  }, Ue.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === i || m === n || m === c || m === l || m === h || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === o || m.$$typeof === s || m.$$typeof === u || m.$$typeof === g || m.getModuleId !== void 0);
  }, Ue.typeOf = M, Ue;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function mm() {
  return Rc || (Rc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = !1, M = !1, m = !1, w = !1, v = !1, T;
    T = Symbol.for("react.module.reference");
    function N(X) {
      return !!(typeof X == "string" || typeof X == "function" || X === r || X === i || v || X === n || X === c || X === l || w || X === h || g || M || m || typeof X == "object" && X !== null && (X.$$typeof === d || X.$$typeof === f || X.$$typeof === o || X.$$typeof === s || X.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      X.$$typeof === T || X.getModuleId !== void 0));
    }
    function E(X) {
      if (typeof X == "object" && X !== null) {
        var le = X.$$typeof;
        switch (le) {
          case e:
            var Me = X.type;
            switch (Me) {
              case r:
              case i:
              case n:
              case c:
              case l:
                return Me;
              default:
                var de = Me && Me.$$typeof;
                switch (de) {
                  case a:
                  case s:
                  case u:
                  case d:
                  case f:
                  case o:
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
    var P = s, k = o, B = e, F = u, S = r, L = d, R = f, x = t, j = i, b = n, W = c, re = l, oe = !1, ie = !1;
    function _(X) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(X) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(X) {
      return E(X) === s;
    }
    function K(X) {
      return E(X) === o;
    }
    function q(X) {
      return typeof X == "object" && X !== null && X.$$typeof === e;
    }
    function J(X) {
      return E(X) === u;
    }
    function C(X) {
      return E(X) === r;
    }
    function te(X) {
      return E(X) === d;
    }
    function H(X) {
      return E(X) === f;
    }
    function ge(X) {
      return E(X) === t;
    }
    function V(X) {
      return E(X) === i;
    }
    function Y(X) {
      return E(X) === n;
    }
    function Q(X) {
      return E(X) === c;
    }
    function fe(X) {
      return E(X) === l;
    }
    Ye.ContextConsumer = P, Ye.ContextProvider = k, Ye.Element = B, Ye.ForwardRef = F, Ye.Fragment = S, Ye.Lazy = L, Ye.Memo = R, Ye.Portal = x, Ye.Profiler = j, Ye.StrictMode = b, Ye.Suspense = W, Ye.SuspenseList = re, Ye.isAsyncMode = _, Ye.isConcurrentMode = $, Ye.isContextConsumer = U, Ye.isContextProvider = K, Ye.isElement = q, Ye.isForwardRef = J, Ye.isFragment = C, Ye.isLazy = te, Ye.isMemo = H, Ye.isPortal = ge, Ye.isProfiler = V, Ye.isStrictMode = Y, Ye.isSuspense = Q, Ye.isSuspenseList = fe, Ye.isValidElementType = N, Ye.typeOf = E;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? ga.exports = ym() : ga.exports = mm();
var Uc = ga.exports;
const vm = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function wm(e) {
  const t = `${e}`.match(vm);
  return t && t[1] || "";
}
function wg(e, t = "") {
  return e.displayName || e.name || wm(e) || t;
}
function Yc(e, t, r) {
  const n = wg(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Dm(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return wg(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Uc.ForwardRef:
          return Yc(e, e.render, "ForwardRef");
        case Uc.Memo:
          return Yc(e, e.type, "memo");
        default:
          return;
      }
  }
}
function mn(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], s = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Am = D.oneOfType([D.func, D.object]), Dg = Am;
function Jn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ni(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fc(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
function Im(e, t = 166) {
  let r;
  function n(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(o, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Ut(e) {
  return e && e.ownerDocument || document;
}
function ii(e) {
  return Ut(e).defaultView || window;
}
function ha(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Em = typeof window < "u" ? ee.useLayoutEffect : ee.useEffect, oi = Em;
function cn(e) {
  const t = ee.useRef(e);
  return oi(() => {
    t.current = e;
  }), ee.useCallback((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  ), []);
}
function Et(...e) {
  return ee.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ha(r, t);
    });
  }, e);
}
let Eo = !0, pa = !1, Qc;
const Nm = {
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
function Tm(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Nm[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function jm(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Eo = !0);
}
function ps() {
  Eo = !1;
}
function Sm() {
  this.visibilityState === "hidden" && pa && (Eo = !0);
}
function bm(e) {
  e.addEventListener("keydown", jm, !0), e.addEventListener("mousedown", ps, !0), e.addEventListener("pointerdown", ps, !0), e.addEventListener("touchstart", ps, !0), e.addEventListener("visibilitychange", Sm, !0);
}
function xm(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Eo || Tm(t);
}
function Cm() {
  const e = ee.useCallback((i) => {
    i != null && bm(i.ownerDocument);
  }, []), t = ee.useRef(!1);
  function r() {
    return t.current ? (pa = !0, window.clearTimeout(Qc), Qc = window.setTimeout(() => {
      pa = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(i) {
    return xm(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Ag(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Om(e) {
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
function Lm(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const _m = Number.isInteger || Lm;
function Ig(e, t, r, n) {
  const i = e[t];
  if (i == null || !_m(i)) {
    const o = Om(i);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${o}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Eg(e, t, ...r) {
  return e[t] === void 0 ? null : Ig(e, t, ...r);
}
function Ma() {
  return null;
}
Eg.isRequired = Ig;
Ma.isRequired = Ma;
const Ng = process.env.NODE_ENV === "production" ? Ma : Eg;
function Tg(e, t) {
  const r = pe({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = pe({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[n] || {}, o = t[n];
      r[n] = {}, !o || !Object.keys(o) ? r[n] = i : !i || !Object.keys(i) ? r[n] = o : (r[n] = pe({}, o), Object.keys(i).forEach((s) => {
        r[n][s] = Tg(i[s], o[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Er(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      n[i] = e[i].reduce((o, s) => {
        if (s) {
          const a = t(s);
          a !== "" && o.push(a), r && r[s] && o.push(r[s]);
        }
        return o;
      }, []).join(" ");
    }
  ), n;
}
const Bc = (e) => e, km = () => {
  let e = Bc;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Bc;
    }
  };
}, zm = km(), Pm = zm, Rm = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function Vt(e, t, r = "Mui") {
  const n = Rm[t];
  return n ? `${r}-${n}` : `${Pm.generate(e)}-${t}`;
}
function _t(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Vt(e, i, r);
  }), n;
}
function Um(e) {
  return typeof e == "function" ? e() : e;
}
const ro = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const {
    children: n,
    container: i,
    disablePortal: o = !1
  } = t, [s, a] = ee.useState(null), u = Et(/* @__PURE__ */ ee.isValidElement(n) ? n.ref : null, r);
  return oi(() => {
    o || a(Um(i) || document.body);
  }, [i, o]), oi(() => {
    if (s && !o)
      return ha(r, s), () => {
        ha(r, null);
      };
  }, [r, s, o]), o ? /* @__PURE__ */ ee.isValidElement(n) ? /* @__PURE__ */ ee.cloneElement(n, {
    ref: u
  }) : n : s && /* @__PURE__ */ eM.createPortal(n, s);
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: D.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: D.oneOfType([mn, D.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: D.bool
});
process.env.NODE_ENV !== "production" && (ro["propTypes"] = vg(ro.propTypes));
const Ym = ro;
function Fm(e) {
  const t = Ut(e);
  return t.body === e ? ii(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Zn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function $c(e) {
  return parseInt(ii(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Vc(e, t, r, n = [], i) {
  const o = [t, r, ...n], s = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, (a) => {
    o.indexOf(a) === -1 && s.indexOf(a.tagName) === -1 && Zn(a, i);
  });
}
function Ms(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function Qm(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Fm(n)) {
      const u = Ag(Ut(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${$c(n) + u}px`;
      const c = Ut(n).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${$c(l) + u}px`;
      });
    }
    const o = n.parentElement, s = ii(n), a = (o == null ? void 0 : o.nodeName) === "HTML" && s.getComputedStyle(o).overflowY === "scroll" ? o : n;
    r.push({
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
    r.forEach(({
      value: o,
      el: s,
      property: a
    }) => {
      o ? s.style.setProperty(a, o) : s.style.removeProperty(a);
    });
  };
}
function Bm(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class $m {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Zn(t.modalRef, !1);
    const i = Bm(r);
    Vc(r, t.mount, t.modalRef, i, !0);
    const o = Ms(this.containers, (s) => s.container === r);
    return o !== -1 ? (this.containers[o].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = Ms(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[n];
    i.restore || (i.restore = Qm(i, r));
  }
  remove(t) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const n = Ms(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[n];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Zn(t.modalRef, !0), Vc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(n, 1);
    else {
      const o = i.modals[i.modals.length - 1];
      o.modalRef && Zn(o.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Vm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Wm(e) {
  const t = parseInt(e.getAttribute("tabindex"), 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Hm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function qm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Hm(e));
}
function Km(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Vm)).forEach((n, i) => {
    const o = Wm(n);
    o === -1 || !qm(n) || (o === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: o,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function Gm() {
  return !0;
}
function no(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = Km,
    isEnabled: s = Gm,
    open: a
  } = e, u = ee.useRef(), c = ee.useRef(null), l = ee.useRef(null), f = ee.useRef(null), d = ee.useRef(null), h = ee.useRef(!1), g = ee.useRef(null), M = Et(t.ref, g), m = ee.useRef(null);
  ee.useEffect(() => {
    !a || !g.current || (h.current = !r);
  }, [r, a]), ee.useEffect(() => {
    if (!a || !g.current)
      return;
    const T = Ut(g.current);
    return g.current.contains(T.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", -1)), h.current && g.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), ee.useEffect(() => {
    if (!a || !g.current)
      return;
    const T = Ut(g.current), N = (k) => {
      const {
        current: B
      } = g;
      if (B !== null) {
        if (!T.hasFocus() || n || !s() || u.current) {
          u.current = !1;
          return;
        }
        if (!B.contains(T.activeElement)) {
          if (k && d.current !== k.target || T.activeElement !== d.current)
            d.current = null;
          else if (d.current !== null)
            return;
          if (!h.current)
            return;
          let L = [];
          if ((T.activeElement === c.current || T.activeElement === l.current) && (L = o(g.current)), L.length > 0) {
            var F, S;
            const R = !!((F = m.current) != null && F.shiftKey && ((S = m.current) == null ? void 0 : S.key) === "Tab"), x = L[0], j = L[L.length - 1];
            R ? j.focus() : x.focus();
          } else
            B.focus();
        }
      }
    }, E = (k) => {
      m.current = k, !(n || !s() || k.key !== "Tab") && T.activeElement === g.current && k.shiftKey && (u.current = !0, l.current.focus());
    };
    T.addEventListener("focusin", N), T.addEventListener("keydown", E, !0);
    const P = setInterval(() => {
      T.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(P), T.removeEventListener("focusin", N), T.removeEventListener("keydown", E, !0);
    };
  }, [r, n, i, s, a, o]);
  const w = (T) => {
    f.current === null && (f.current = T.relatedTarget), h.current = !0, d.current = T.target;
    const N = t.props.onFocus;
    N && N(T);
  }, v = (T) => {
    f.current === null && (f.current = T.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ he.jsxs(ee.Fragment, {
    children: [/* @__PURE__ */ he.jsx("div", {
      tabIndex: 0,
      onFocus: v,
      ref: c,
      "data-test": "sentinelStart"
    }), /* @__PURE__ */ ee.cloneElement(t, {
      ref: M,
      onFocus: w
    }), /* @__PURE__ */ he.jsx("div", {
      tabIndex: 0,
      onFocus: v,
      ref: l,
      "data-test": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (no.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: mi,
  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: D.bool,
  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: D.bool,
  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: D.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: D.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple trap focus mounted at the same time.
   * @default function defaultIsEnabled() {
   *   return true;
   * }
   */
  isEnabled: D.func,
  /**
   * If `true`, focus is locked.
   */
  open: D.bool.isRequired
});
process.env.NODE_ENV !== "production" && (no["propTypes"] = vg(no.propTypes));
function Jm(e) {
  return Vt("MuiModal", e);
}
_t("MuiModal", ["root", "hidden"]);
const Zm = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"], Xm = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Er({
    root: ["root", !t && r && "hidden"]
  }, Jm, n);
};
function ev(e) {
  return typeof e == "function" ? e() : e;
}
function tv(e) {
  return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
const rv = new $m(), jg = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const {
    BackdropComponent: n,
    BackdropProps: i,
    children: o,
    classes: s,
    className: a,
    closeAfterTransition: u = !1,
    component: c = "div",
    components: l = {},
    componentsProps: f = {},
    container: d,
    disableAutoFocus: h = !1,
    disableEnforceFocus: g = !1,
    disableEscapeKeyDown: M = !1,
    disablePortal: m = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: v = !1,
    hideBackdrop: T = !1,
    keepMounted: N = !1,
    // private
    // eslint-disable-next-line react/prop-types
    manager: E = rv,
    onBackdropClick: P,
    onClose: k,
    onKeyDown: B,
    open: F,
    /* eslint-disable react/prop-types */
    theme: S,
    onTransitionEnter: L,
    onTransitionExited: R
  } = t, x = Ge(t, Zm), [j, b] = ee.useState(!0), W = ee.useRef({}), re = ee.useRef(null), oe = ee.useRef(null), ie = Et(oe, r), _ = tv(t), $ = () => Ut(re.current), U = () => (W.current.modalRef = oe.current, W.current.mountNode = re.current, W.current), K = () => {
    E.mount(U(), {
      disableScrollLock: v
    }), oe.current.scrollTop = 0;
  }, q = cn(() => {
    const de = ev(d) || $().body;
    E.add(U(), de), oe.current && K();
  }), J = ee.useCallback(() => E.isTopModal(U()), [E]), C = cn((de) => {
    re.current = de, de && (F && J() ? K() : Zn(oe.current, !0));
  }), te = ee.useCallback(() => {
    E.remove(U());
  }, [E]);
  ee.useEffect(() => () => {
    te();
  }, [te]), ee.useEffect(() => {
    F ? q() : (!_ || !u) && te();
  }, [F, te, _, u, q]);
  const H = pe({}, t, {
    classes: s,
    closeAfterTransition: u,
    disableAutoFocus: h,
    disableEnforceFocus: g,
    disableEscapeKeyDown: M,
    disablePortal: m,
    disableRestoreFocus: w,
    disableScrollLock: v,
    exited: j,
    hideBackdrop: T,
    keepMounted: N
  }), ge = Xm(H);
  if (!N && !F && (!_ || j))
    return null;
  const V = () => {
    b(!1), L && L();
  }, Y = () => {
    b(!0), R && R(), u && te();
  }, Q = (de) => {
    de.target === de.currentTarget && (P && P(de), k && k(de, "backdropClick"));
  }, fe = (de) => {
    B && B(de), !(de.key !== "Escape" || !J()) && (M || (de.stopPropagation(), k && k(de, "escapeKeyDown")));
  }, X = {};
  o.props.tabIndex === void 0 && (X.tabIndex = "-1"), _ && (X.onEnter = Fc(V, o.props.onEnter), X.onExited = Fc(Y, o.props.onExited));
  const le = l.Root || c, Me = f.root || {};
  return /* @__PURE__ */ he.jsx(Ym, {
    ref: C,
    container: d,
    disablePortal: m,
    children: /* @__PURE__ */ he.jsxs(le, pe({
      role: "presentation"
    }, Me, !hg(le) && {
      as: c,
      ownerState: pe({}, H, Me.ownerState),
      theme: S
    }, x, {
      ref: ie,
      onKeyDown: fe,
      className: st(ge.root, Me.className, a),
      children: [!T && n ? /* @__PURE__ */ he.jsx(n, pe({
        "aria-hidden": !0,
        open: F,
        onClick: Q
      }, i)) : null, /* @__PURE__ */ he.jsx(no, {
        disableEnforceFocus: g,
        disableAutoFocus: h,
        disableRestoreFocus: w,
        isEnabled: J,
        open: F,
        children: /* @__PURE__ */ ee.cloneElement(o, X)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (jg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: D.elementType,
  /**
   * Props applied to the backdrop element.
   */
  BackdropProps: D.object,
  /**
   * A single child content element.
   */
  children: mi.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: D.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: D.shape({
    Root: D.elementType
  }),
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: D.shape({
    root: D.object
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: D.oneOfType([mn, D.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: D.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: D.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: D.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: D.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: D.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: D.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: D.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: D.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: D.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: D.func,
  /**
   * @ignore
   */
  onKeyDown: D.func,
  /**
   * If `true`, the component is shown.
   */
  open: D.bool.isRequired
});
const nv = jg;
function iv(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ov(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var sv = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, o), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ov(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var s = iv(i);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ft = "-ms-", io = "-moz-", Le = "-webkit-", vu = "comm", wu = "rule", Du = "decl", av = "@import", Sg = "@keyframes", uv = Math.abs, No = String.fromCharCode, cv = Object.assign;
function lv(e, t) {
  return ct(e, 0) ^ 45 ? (((t << 2 ^ ct(e, 0)) << 2 ^ ct(e, 1)) << 2 ^ ct(e, 2)) << 2 ^ ct(e, 3) : 0;
}
function bg(e) {
  return e.trim();
}
function fv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, r) {
  return e.replace(t, r);
}
function ya(e, t) {
  return e.indexOf(t);
}
function ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function si(e, t, r) {
  return e.slice(t, r);
}
function Ft(e) {
  return e.length;
}
function Au(e) {
  return e.length;
}
function Ci(e, t) {
  return t.push(e), e;
}
function dv(e, t) {
  return e.map(t).join("");
}
var To = 1, vn = 1, xg = 0, vt = 0, it = 0, En = "";
function jo(e, t, r, n, i, o, s) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: To, column: vn, length: s, return: "" };
}
function On(e, t) {
  return cv(jo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function gv() {
  return it;
}
function hv() {
  return it = vt > 0 ? ct(En, --vt) : 0, vn--, it === 10 && (vn = 1, To--), it;
}
function Nt() {
  return it = vt < xg ? ct(En, vt++) : 0, vn++, it === 10 && (vn = 1, To++), it;
}
function $t() {
  return ct(En, vt);
}
function Hi() {
  return vt;
}
function vi(e, t) {
  return si(En, e, t);
}
function ai(e) {
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
function Cg(e) {
  return To = vn = 1, xg = Ft(En = e), vt = 0, [];
}
function Og(e) {
  return En = "", e;
}
function qi(e) {
  return bg(vi(vt - 1, ma(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pv(e) {
  for (; (it = $t()) && it < 33; )
    Nt();
  return ai(e) > 2 || ai(it) > 3 ? "" : " ";
}
function Mv(e, t) {
  for (; --t && Nt() && !(it < 48 || it > 102 || it > 57 && it < 65 || it > 70 && it < 97); )
    ;
  return vi(e, Hi() + (t < 6 && $t() == 32 && Nt() == 32));
}
function ma(e) {
  for (; Nt(); )
    switch (it) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ma(it);
        break;
      case 40:
        e === 41 && ma(e);
        break;
      case 92:
        Nt();
        break;
    }
  return vt;
}
function yv(e, t) {
  for (; Nt() && e + it !== 47 + 10; )
    if (e + it === 42 + 42 && $t() === 47)
      break;
  return "/*" + vi(t, vt - 1) + "*" + No(e === 47 ? e : Nt());
}
function mv(e) {
  for (; !ai($t()); )
    Nt();
  return vi(e, vt);
}
function vv(e) {
  return Og(Ki("", null, null, null, [""], e = Cg(e), 0, [0], e));
}
function Ki(e, t, r, n, i, o, s, a, u) {
  for (var c = 0, l = 0, f = s, d = 0, h = 0, g = 0, M = 1, m = 1, w = 1, v = 0, T = "", N = i, E = o, P = n, k = T; m; )
    switch (g = v, v = Nt()) {
      case 40:
        if (g != 108 && ct(k, f - 1) == 58) {
          ya(k += ke(qi(v), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += qi(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += pv(g);
        break;
      case 92:
        k += Mv(Hi() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            Ci(wv(yv(Nt(), Hi()), t, r), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * M:
        a[c++] = Ft(k) * w;
      case 125 * M:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            w == -1 && (k = ke(k, /\f/g, "")), h > 0 && Ft(k) - f && Ci(h > 32 ? Hc(k + ";", n, r, f - 1) : Hc(ke(k, " ", "") + ";", n, r, f - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (Ci(P = Wc(k, t, r, c, l, i, a, T, N = [], E = [], f), o), v === 123)
              if (l === 0)
                Ki(k, t, P, P, N, o, f, a, E);
              else
                switch (d === 99 && ct(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Ki(e, P, P, n && Ci(Wc(e, P, P, 0, 0, i, a, T, i, N = [], f), E), i, E, f, a, n ? N : E);
                    break;
                  default:
                    Ki(k, P, P, P, [""], E, 0, a, E);
                }
        }
        c = l = h = 0, M = w = 1, T = k = "", f = s;
        break;
      case 58:
        f = 1 + Ft(k), h = g;
      default:
        if (M < 1) {
          if (v == 123)
            --M;
          else if (v == 125 && M++ == 0 && hv() == 125)
            continue;
        }
        switch (k += No(v), v * M) {
          case 38:
            w = l > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            a[c++] = (Ft(k) - 1) * w, w = 1;
            break;
          case 64:
            $t() === 45 && (k += qi(Nt())), d = $t(), l = f = Ft(T = k += mv(Hi())), v++;
            break;
          case 45:
            g === 45 && Ft(k) == 2 && (M = 0);
        }
    }
  return o;
}
function Wc(e, t, r, n, i, o, s, a, u, c, l) {
  for (var f = i - 1, d = i === 0 ? o : [""], h = Au(d), g = 0, M = 0, m = 0; g < n; ++g)
    for (var w = 0, v = si(e, f + 1, f = uv(M = s[g])), T = e; w < h; ++w)
      (T = bg(M > 0 ? d[w] + " " + v : ke(v, /&\f/g, d[w]))) && (u[m++] = T);
  return jo(e, t, r, i === 0 ? wu : a, u, c, l);
}
function wv(e, t, r) {
  return jo(e, t, r, vu, No(gv()), si(e, 2, -2), 0);
}
function Hc(e, t, r, n) {
  return jo(e, t, r, Du, si(e, 0, n), si(e, n + 1, -1), n);
}
function dn(e, t) {
  for (var r = "", n = Au(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Dv(e, t, r, n) {
  switch (e.type) {
    case av:
    case Du:
      return e.return = e.return || e.value;
    case vu:
      return "";
    case Sg:
      return e.return = e.value + "{" + dn(e.children, n) + "}";
    case wu:
      e.value = e.props.join(",");
  }
  return Ft(r = dn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Av(e) {
  var t = Au(e);
  return function(r, n, i, o) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, i, o) || "";
    return s;
  };
}
function Iv(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ev = function(t, r, n) {
  for (var i = 0, o = 0; i = o, o = $t(), i === 38 && o === 12 && (r[n] = 1), !ai(o); )
    Nt();
  return vi(t, vt);
}, Nv = function(t, r) {
  var n = -1, i = 44;
  do
    switch (ai(i)) {
      case 0:
        i === 38 && $t() === 12 && (r[n] = 1), t[n] += Ev(vt - 1, r, n);
        break;
      case 2:
        t[n] += qi(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = $t() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += No(i);
    }
  while (i = Nt());
  return t;
}, Tv = function(t, r) {
  return Og(Nv(Cg(t), r));
}, qc = /* @__PURE__ */ new WeakMap(), jv = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !qc.get(n)) && !i) {
      qc.set(t, !0);
      for (var o = [], s = Tv(r, o), a = n.props, u = 0, c = 0; u < s.length; u++)
        for (var l = 0; l < a.length; l++, c++)
          t.props[c] = o[u] ? s[u].replace(/&\f/g, a[l]) : a[l] + " " + s[u];
    }
  }
}, Sv = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, bv = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", xv = function(t) {
  return t.type === "comm" && t.children.indexOf(bv) > -1;
}, Cv = function(t) {
  return function(r, n, i) {
    if (!(r.type !== "rule" || t.compat)) {
      var o = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var s = !!r.parent, a = s ? r.parent.children : (
          // global rule at the root level
          i
        ), u = a.length - 1; u >= 0; u--) {
          var c = a[u];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (xv(c))
              return;
            break;
          }
        }
        o.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Lg = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Ov = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Lg(r[n]))
      return !0;
  return !1;
}, Kc = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Lv = function(t, r, n) {
  Lg(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Kc(t)) : Ov(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Kc(t)));
};
function _g(e, t) {
  switch (lv(e, t)) {
    case 5103:
      return Le + "print-" + e + e;
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
      return Le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + e + io + e + ft + e + e;
    case 6828:
    case 4268:
      return Le + e + ft + e + e;
    case 6165:
      return Le + e + ft + "flex-" + e + e;
    case 5187:
      return Le + e + ke(e, /(\w+).+(:[^]+)/, Le + "box-$1$2" + ft + "flex-$1$2") + e;
    case 5443:
      return Le + e + ft + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return Le + e + ft + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Le + e + ft + ke(e, "shrink", "negative") + e;
    case 5292:
      return Le + e + ft + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return Le + "box-" + ke(e, "-grow", "") + Le + e + ft + ke(e, "grow", "positive") + e;
    case 4554:
      return Le + ke(e, /([^-])(transform)/g, "$1" + Le + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Le + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, Le + "$1$2") + e;
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
      if (Ft(e) - 1 - t > 6)
        switch (ct(e, t + 1)) {
          case 109:
            if (ct(e, t + 4) !== 45)
              break;
          case 102:
            return ke(e, /(.+:)(.+)-([^]+)/, "$1" + Le + "$2-$3$1" + io + (ct(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ya(e, "stretch") ? _g(ke(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ct(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ct(e, Ft(e) - 3 - (~ya(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + Le) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Le + (ct(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Le + "$2$3$1" + ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ct(e, t + 11)) {
        case 114:
          return Le + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Le + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Le + e + ft + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Le + e + ft + e + e;
  }
  return e;
}
var _v = function(t, r, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Du:
        t.return = _g(t.value, t.length);
        break;
      case Sg:
        return dn([On(t, {
          value: ke(t.value, "@", "@" + Le)
        })], i);
      case wu:
        if (t.length)
          return dv(t.props, function(o) {
            switch (fv(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return dn([On(t, {
                  props: [ke(o, /:(read-\w+)/, ":" + io + "$1")]
                })], i);
              case "::placeholder":
                return dn([On(t, {
                  props: [ke(o, /:(plac\w+)/, ":" + Le + "input-$1")]
                }), On(t, {
                  props: [ke(o, /:(plac\w+)/, ":" + io + "$1")]
                }), On(t, {
                  props: [ke(o, /:(plac\w+)/, ft + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, kv = [_v], zv = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(M) {
      var m = M.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(M), M.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || kv;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var o = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(M) {
      for (var m = M.getAttribute("data-emotion").split(" "), w = 1; w < m.length; w++)
        o[m[w]] = !0;
      a.push(M);
    }
  );
  var u, c = [jv, Sv];
  process.env.NODE_ENV !== "production" && c.push(Cv({
    get compat() {
      return g.compat;
    }
  }), Lv);
  {
    var l, f = [Dv, process.env.NODE_ENV !== "production" ? function(M) {
      M.root || (M.return ? l.insert(M.return) : M.value && M.type !== vu && l.insert(M.value + "{}"));
    } : Iv(function(M) {
      l.insert(M);
    })], d = Av(c.concat(i, f)), h = function(m) {
      return dn(vv(m), d);
    };
    u = function(m, w, v, T) {
      l = v, process.env.NODE_ENV !== "production" && w.map !== void 0 && (l = {
        insert: function(E) {
          v.insert(E + w.map);
        }
      }), h(m ? m + "{" + w.styles + "}" : w.styles), T && (g.inserted[w.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new sv({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(a), g;
}, Pv = !0;
function Iu(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " ";
  }), n;
}
var So = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Pv === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, bo = function(t, r, n) {
  So(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Rv(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Uv = {
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
}, Gc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Yv = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Fv = /[A-Z]|^ms/g, kg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Eu = function(t) {
  return t.charCodeAt(1) === 45;
}, Jc = function(t) {
  return t != null && typeof t != "boolean";
}, ys = /* @__PURE__ */ $d(function(e) {
  return Eu(e) ? e : e.replace(Fv, "-$&").toLowerCase();
}), oo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(kg, function(n, i, o) {
          return Rt = {
            name: i,
            styles: o,
            next: Rt
          }, i;
        });
  }
  return Uv[t] !== 1 && !Eu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Qv = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Bv = ["normal", "none", "initial", "inherit", "unset"], $v = oo, Vv = /^-ms-/, Wv = /-(.)/g, Zc = {};
  oo = function(t, r) {
    if (t === "content" && (typeof r != "string" || Bv.indexOf(r) === -1 && !Qv.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = $v(t, r);
    return n !== "" && !Eu(t) && t.indexOf("-") !== -1 && Zc[t] === void 0 && (Zc[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Vv, "ms-").replace(Wv, function(i, o) {
      return o.toUpperCase();
    }) + "?")), n;
  };
}
var zg = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ui(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(zg);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Rt = {
          name: r.name,
          styles: r.styles,
          next: Rt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Rt = {
              name: n.name,
              styles: n.styles,
              next: Rt
            }, n = n.next;
        var i = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (i += r.map), i;
      }
      return Hv(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = Rt, s = r(e);
        return Rt = o, ui(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = r.replace(kg, function(l, f, d) {
          var h = "animation" + a.length;
          return a.push("const " + h + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + h + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function Hv(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += ui(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var s = r[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += o + "{" + t[s] + "}" : Jc(s) && (n += ys(o) + ":" + oo(o, s) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(zg);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Jc(s[a]) && (n += ys(o) + ":" + oo(o, s[a]) + ";");
        else {
          var u = ui(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += ys(o) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(Yv), n += o + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Xc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Pg;
process.env.NODE_ENV !== "production" && (Pg = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Rt, wn = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, o = "";
  Rt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (i = !1, o += ui(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Gc), o += s[0]);
  for (var a = 1; a < t.length; a++)
    o += ui(n, r, t[a]), i && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(Gc), o += s[a]);
  var u;
  process.env.NODE_ENV !== "production" && (o = o.replace(Pg, function(d) {
    return u = d, "";
  })), Xc.lastIndex = 0;
  for (var c = "", l; (l = Xc.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var f = Rv(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: o,
    map: u,
    next: Rt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: o,
    next: Rt
  };
}, qv = {}.hasOwnProperty, Nu = /* @__PURE__ */ ar(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ zv({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Nu.displayName = "EmotionCacheContext");
Nu.Provider;
var xo = function(t) {
  return /* @__PURE__ */ wo(function(r, n) {
    var i = dt(Nu);
    return t(r, i, n);
  });
}, Nn = /* @__PURE__ */ ar({});
process.env.NODE_ENV !== "production" && (Nn.displayName = "EmotionThemeContext");
var Kv = ee["useInsertionEffect"] ? ee["useInsertionEffect"] : function(t) {
  t();
};
function Rg(e) {
  Kv(e);
}
var el = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", tl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Gv = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return So(r, n, i), Rg(function() {
    return bo(r, n, i);
  }), null;
}, Jv = /* @__PURE__ */ xo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[el], o = [n], s = "";
  typeof e.className == "string" ? s = Iu(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var a = wn(o, void 0, dt(Nn));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[tl];
    u && (a = wn([a, "label:" + u + ";"]));
  }
  s += t.key + "-" + a.name;
  var c = {};
  for (var l in e)
    qv.call(e, l) && l !== "css" && l !== el && (process.env.NODE_ENV === "production" || l !== tl) && (c[l] = e[l]);
  return c.ref = r, c.className = s, /* @__PURE__ */ mt(mr, null, /* @__PURE__ */ mt(Gv, {
    cache: t,
    serialized: a,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ mt(i, c));
});
process.env.NODE_ENV !== "production" && (Jv.displayName = "EmotionCssPropInternal");
var Zv = {
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
}, rl = ee["useInsertionEffect"] ? ee["useInsertionEffect"] : Bd, nl = !1, Xv = /* @__PURE__ */ xo(function(e, t) {
  process.env.NODE_ENV !== "production" && !nl && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), nl = !0);
  var r = e.styles, n = wn([r], void 0, dt(Nn)), i = et();
  return rl(function() {
    var o = t.key + "-global", s = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + o + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", o), s.hydrate([u])), i.current = [s, a], function() {
      s.flush();
    };
  }, [t]), rl(function() {
    var o = i.current, s = o[0], a = o[1];
    if (a) {
      o[1] = !1;
      return;
    }
    if (n.next !== void 0 && bo(t, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Xv.displayName = "EmotionGlobal");
function ew() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return wn(t);
}
var Tu = function() {
  var t = ew.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, tw = function e(t) {
  for (var r = t.length, n = 0, i = ""; n < r; n++) {
    var o = t[n];
    if (o != null) {
      var s = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            s = e(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var a in o)
              o[a] && a && (s && (s += " "), s += a);
          }
          break;
        }
        default:
          s = o;
      }
      s && (i && (i += " "), i += s);
    }
  }
  return i;
};
function rw(e, t, r) {
  var n = [], i = Iu(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var nw = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Rg(function() {
    for (var i = 0; i < n.length; i++)
      bo(r, n[i], !1);
  }), null;
}, iw = /* @__PURE__ */ xo(function(e, t) {
  var r = !1, n = [], i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    var d = wn(l, t.registered);
    return n.push(d), So(t, d, !1), t.key + "-" + d.name;
  }, o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    return rw(t.registered, i, tw(l));
  }, s = {
    css: i,
    cx: o,
    theme: dt(Nn)
  }, a = e.children(s);
  return r = !0, /* @__PURE__ */ mt(mr, null, /* @__PURE__ */ mt(nw, {
    cache: t,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (iw.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var il = !0, ow = typeof jest < "u";
  if (il && !ow) {
    var ol = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : il ? window : global
    ), sl = "__EMOTION_REACT_" + Zv.version.split(".")[0] + "__";
    ol[sl] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ol[sl] = !0;
  }
}
var sw = Zs, aw = function(t) {
  return t !== "theme";
}, al = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? sw : aw;
}, ul = function(t, r, n) {
  var i;
  if (r) {
    var o = r.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(s) {
      return t.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, uw = ee["useInsertionEffect"] ? ee["useInsertionEffect"] : function(t) {
  t();
};
function cw(e) {
  uw(e);
}
var cl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, lw = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return So(r, n, i), cw(function() {
    return bo(r, n, i);
  }), null;
}, fw = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, o, s;
  r !== void 0 && (o = r.label, s = r.target);
  var a = ul(t, r, n), u = a || al(i), c = !u("as");
  return function() {
    var l = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(cl), f.push(l[0][0]);
      for (var d = l.length, h = 1; h < d; h++)
        process.env.NODE_ENV !== "production" && l[0][h] === void 0 && console.error(cl), f.push(l[h], l[0][h]);
    }
    var g = xo(function(M, m, w) {
      var v = c && M.as || i, T = "", N = [], E = M;
      if (M.theme == null) {
        E = {};
        for (var P in M)
          E[P] = M[P];
        E.theme = dt(Nn);
      }
      typeof M.className == "string" ? T = Iu(m.registered, N, M.className) : M.className != null && (T = M.className + " ");
      var k = wn(f.concat(N), m.registered, E);
      T += m.key + "-" + k.name, s !== void 0 && (T += " " + s);
      var B = c && a === void 0 ? al(v) : u, F = {};
      for (var S in M)
        c && S === "as" || // $FlowFixMe
        B(S) && (F[S] = M[S]);
      return F.className = T, F.ref = w, /* @__PURE__ */ mt(mr, null, /* @__PURE__ */ mt(lw, {
        cache: m,
        serialized: k,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ mt(v, F));
    });
    return g.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = i, g.__emotion_styles = f, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(M, m) {
      return e(M, pe({}, r, m, {
        shouldForwardProp: ul(g, m, !0)
      })).apply(void 0, f);
    }, g;
  };
};
const dw = fw;
var gw = [
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
], va = dw.bind();
gw.forEach(function(e) {
  va[e] = va(e);
});
const hw = va;
/**
 * @mui/styled-engine v5.12.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pw(e, t) {
  const r = hw(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Mw = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, yw = ["values", "unit", "step"], mw = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => pe({}, r, {
    [n.key]: n.val
  }), {});
};
function vw(e) {
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
    unit: r = "px",
    step: n = 5
  } = e, i = Ge(e, yw), o = mw(t), s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function c(d, h) {
    const g = s.indexOf(h);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : h) - n / 100}${r})`;
  }
  function l(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const h = s.indexOf(d);
    return h === 0 ? a(s[1]) : h === s.length - 1 ? u(s[h]) : c(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return pe({
    keys: s,
    values: o,
    up: a,
    down: u,
    between: c,
    only: l,
    not: f,
    unit: r
  }, i);
}
const ww = {
  borderRadius: 4
}, Dw = ww, Aw = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.string, D.object, D.array]) : {}, Nr = Aw;
function Xn(e, t) {
  return t ? er(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ju = {
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
}, ll = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ju[e]}px)`
};
function or(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || ll;
    return t.reduce((s, a, u) => (s[o.up(o.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const o = n.breakpoints || ll;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || ju).indexOf(a) !== -1) {
        const u = o.up(a);
        s[u] = r(t[a], a);
      } else {
        const u = a;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Iw(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const o = e.up(i);
    return n[o] = {}, n;
  }, {})) || {};
}
function Ew(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Co(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function so(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Co(e, r) || n, t && (i = t(i, n, e)), i;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, o = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, c = Co(u, n) || {};
    return or(s, a, (f) => {
      let d = so(c, i, f);
      return f === d && typeof f == "string" && (d = so(c, i, `${t}${f === "default" ? "" : Jn(f)}`, f)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Nr
  } : {}, o.filterProps = [t], o;
}
function Nw(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Tw = {
  m: "margin",
  p: "padding"
}, jw = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, fl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Sw = Nw((e) => {
  if (e.length > 2)
    if (fl[e])
      e = fl[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Tw[t], i = jw[r] || "";
  return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
}), Oo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Lo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], bw = [...Oo, ...Lo];
function wi(e, t, r, n) {
  var i;
  const o = (i = Co(e, t, !1)) != null ? i : r;
  return typeof o == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), o * s) : Array.isArray(o) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[s]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ug(e) {
  return wi(e, "spacing", 8, "spacing");
}
function Di(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function xw(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Di(t, r), n), {});
}
function Cw(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = Sw(r), o = xw(i, n), s = e[r];
  return or(e, s, o);
}
function Yg(e, t) {
  const r = Ug(e.theme);
  return Object.keys(e).map((n) => Cw(e, t, n, r)).reduce(Xn, {});
}
function Ze(e) {
  return Yg(e, Oo);
}
Ze.propTypes = process.env.NODE_ENV !== "production" ? Oo.reduce((e, t) => (e[t] = Nr, e), {}) : {};
Ze.filterProps = Oo;
function Xe(e) {
  return Yg(e, Lo);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? Lo.reduce((e, t) => (e[t] = Nr, e), {}) : {};
Xe.filterProps = Lo;
process.env.NODE_ENV !== "production" && bw.reduce((e, t) => (e[t] = Nr, e), {});
function Ow(e = 8) {
  if (e.mui)
    return e;
  const t = Ug({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((o) => {
    const s = t(o);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function _o(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((o) => {
    n[o] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, o) => t[o] ? Xn(i, t[o](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function Qt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Lw = Fe({
  prop: "border",
  themeKey: "borders",
  transform: Qt
}), _w = Fe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Qt
}), kw = Fe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Qt
}), zw = Fe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Qt
}), Pw = Fe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Qt
}), Rw = Fe({
  prop: "borderColor",
  themeKey: "palette"
}), Uw = Fe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Yw = Fe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Fw = Fe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Qw = Fe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), ko = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = wi(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Di(t, n)
    });
    return or(e, e.borderRadius, r);
  }
  return null;
};
ko.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Nr
} : {};
ko.filterProps = ["borderRadius"];
_o(Lw, _w, kw, zw, Pw, Rw, Uw, Yw, Fw, Qw, ko);
const zo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wi(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Di(t, n)
    });
    return or(e, e.gap, r);
  }
  return null;
};
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Nr
} : {};
zo.filterProps = ["gap"];
const Po = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wi(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Di(t, n)
    });
    return or(e, e.columnGap, r);
  }
  return null;
};
Po.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Nr
} : {};
Po.filterProps = ["columnGap"];
const Ro = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wi(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Di(t, n)
    });
    return or(e, e.rowGap, r);
  }
  return null;
};
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Nr
} : {};
Ro.filterProps = ["rowGap"];
const Bw = Fe({
  prop: "gridColumn"
}), $w = Fe({
  prop: "gridRow"
}), Vw = Fe({
  prop: "gridAutoFlow"
}), Ww = Fe({
  prop: "gridAutoColumns"
}), Hw = Fe({
  prop: "gridAutoRows"
}), qw = Fe({
  prop: "gridTemplateColumns"
}), Kw = Fe({
  prop: "gridTemplateRows"
}), Gw = Fe({
  prop: "gridTemplateAreas"
}), Jw = Fe({
  prop: "gridArea"
});
_o(zo, Po, Ro, Bw, $w, Vw, Ww, Hw, qw, Kw, Gw, Jw);
function gn(e, t) {
  return t === "grey" ? t : e;
}
const Zw = Fe({
  prop: "color",
  themeKey: "palette",
  transform: gn
}), Xw = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gn
}), e0 = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gn
});
_o(Zw, Xw, e0);
function Dt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const t0 = Fe({
  prop: "width",
  transform: Dt
}), Su = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i, o;
      return {
        maxWidth: ((n = e.theme) == null || (i = n.breakpoints) == null || (o = i.values) == null ? void 0 : o[r]) || ju[r] || Dt(r)
      };
    };
    return or(e, e.maxWidth, t);
  }
  return null;
};
Su.filterProps = ["maxWidth"];
const r0 = Fe({
  prop: "minWidth",
  transform: Dt
}), n0 = Fe({
  prop: "height",
  transform: Dt
}), i0 = Fe({
  prop: "maxHeight",
  transform: Dt
}), o0 = Fe({
  prop: "minHeight",
  transform: Dt
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: Dt
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: Dt
});
const s0 = Fe({
  prop: "boxSizing"
});
_o(t0, Su, r0, n0, i0, o0, s0);
const a0 = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qt
  },
  borderTop: {
    themeKey: "borders",
    transform: Qt
  },
  borderRight: {
    themeKey: "borders",
    transform: Qt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qt
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
    style: ko
  },
  // palette
  color: {
    themeKey: "palette",
    transform: gn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gn
  },
  // spacing
  p: {
    style: Xe
  },
  pt: {
    style: Xe
  },
  pr: {
    style: Xe
  },
  pb: {
    style: Xe
  },
  pl: {
    style: Xe
  },
  px: {
    style: Xe
  },
  py: {
    style: Xe
  },
  padding: {
    style: Xe
  },
  paddingTop: {
    style: Xe
  },
  paddingRight: {
    style: Xe
  },
  paddingBottom: {
    style: Xe
  },
  paddingLeft: {
    style: Xe
  },
  paddingX: {
    style: Xe
  },
  paddingY: {
    style: Xe
  },
  paddingInline: {
    style: Xe
  },
  paddingInlineStart: {
    style: Xe
  },
  paddingInlineEnd: {
    style: Xe
  },
  paddingBlock: {
    style: Xe
  },
  paddingBlockStart: {
    style: Xe
  },
  paddingBlockEnd: {
    style: Xe
  },
  m: {
    style: Ze
  },
  mt: {
    style: Ze
  },
  mr: {
    style: Ze
  },
  mb: {
    style: Ze
  },
  ml: {
    style: Ze
  },
  mx: {
    style: Ze
  },
  my: {
    style: Ze
  },
  margin: {
    style: Ze
  },
  marginTop: {
    style: Ze
  },
  marginRight: {
    style: Ze
  },
  marginBottom: {
    style: Ze
  },
  marginLeft: {
    style: Ze
  },
  marginX: {
    style: Ze
  },
  marginY: {
    style: Ze
  },
  marginInline: {
    style: Ze
  },
  marginInlineStart: {
    style: Ze
  },
  marginInlineEnd: {
    style: Ze
  },
  marginBlock: {
    style: Ze
  },
  marginBlockStart: {
    style: Ze
  },
  marginBlockEnd: {
    style: Ze
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
    style: zo
  },
  rowGap: {
    style: Ro
  },
  columnGap: {
    style: Po
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
    transform: Dt
  },
  maxWidth: {
    style: Su
  },
  minWidth: {
    transform: Dt
  },
  height: {
    transform: Dt
  },
  maxHeight: {
    transform: Dt
  },
  minHeight: {
    transform: Dt
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
}, Fg = a0;
function u0(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function c0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function l0() {
  function e(r, n, i, o) {
    const s = {
      [r]: n,
      theme: i
    }, a = o[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: c,
      transform: l,
      style: f
    } = a;
    if (n == null)
      return null;
    if (c === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = Co(i, c) || {};
    return f ? f(s) : or(s, n, (g) => {
      let M = so(d, l, g);
      return g === M && typeof g == "string" && (M = so(d, l, `${r}${g === "default" ? "" : Jn(g)}`, g)), u === !1 ? M : {
        [u]: M
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: i,
      theme: o = {}
    } = r || {};
    if (!i)
      return null;
    const s = (n = o.unstable_sxConfig) != null ? n : Fg;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const l = Iw(o.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((h) => {
        const g = c0(c[h], o);
        if (g != null)
          if (typeof g == "object")
            if (s[h])
              d = Xn(d, e(h, g, o, s));
            else {
              const M = or({
                theme: o
              }, g, (m) => ({
                [h]: m
              }));
              u0(M, g) ? d[h] = t({
                sx: g,
                theme: o
              }) : d = Xn(d, M);
            }
          else
            d = Xn(d, e(h, g, o, s));
      }), Ew(f, d);
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Qg = l0();
Qg.filterProps = ["sx"];
const Bg = Qg, f0 = ["breakpoints", "palette", "spacing", "shape"];
function bu(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: o = {}
  } = e, s = Ge(e, f0), a = vw(r), u = Ow(i);
  let c = er({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: pe({
      mode: "light"
    }, n),
    spacing: u,
    shape: pe({}, Dw, o)
  }, s);
  return c = t.reduce((l, f) => er(l, f), c), c.unstable_sxConfig = pe({}, Fg, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return Bg({
      sx: f,
      theme: this
    });
  }, c;
}
function d0(e) {
  return Object.keys(e).length === 0;
}
function g0(e = null) {
  const t = ee.useContext(Nn);
  return !t || d0(t) ? e : t;
}
const h0 = bu();
function $g(e = h0) {
  return g0(e);
}
const p0 = ["variant"];
function dl(e) {
  return e.length === 0;
}
function Vg(e) {
  const {
    variant: t
  } = e, r = Ge(e, p0);
  let n = t || "";
  return Object.keys(r).sort().forEach((i) => {
    i === "color" ? n += dl(n) ? e[i] : Jn(e[i]) : n += `${dl(n) ? i : Jn(i)}${Jn(e[i].toString())}`;
  }), n;
}
const M0 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function y0(e) {
  return Object.keys(e).length === 0;
}
function m0(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const v0 = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, w0 = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((i) => {
    const o = Vg(i.props);
    n[o] = i.style;
  }), n;
}, D0 = (e, t, r, n) => {
  var i, o;
  const {
    ownerState: s = {}
  } = e, a = [], u = r == null || (i = r.components) == null || (o = i[n]) == null ? void 0 : o.variants;
  return u && u.forEach((c) => {
    let l = !0;
    Object.keys(c.props).forEach((f) => {
      s[f] !== c.props[f] && e[f] !== c.props[f] && (l = !1);
    }), l && a.push(t[Vg(c.props)]);
  }), a;
};
function Gi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const A0 = bu(), I0 = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Ln({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return y0(t) ? e : t[r] || t;
}
function E0(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = A0,
    rootShouldForwardProp: n = Gi,
    slotShouldForwardProp: i = Gi
  } = e, o = (s) => Bg(pe({}, s, {
    theme: Ln(pe({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return o.__mui_systemSx = !0, (s, a = {}) => {
    Mw(s, (N) => N.filter((E) => !(E != null && E.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: l,
      skipSx: f,
      overridesResolver: d
    } = a, h = Ge(a, M0), g = l !== void 0 ? l : c && c !== "Root" || !1, M = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${I0(c || "Root")}`);
    let w = Gi;
    c === "Root" ? w = n : c ? w = i : m0(s) && (w = void 0);
    const v = pw(s, pe({
      shouldForwardProp: w,
      label: m
    }, h)), T = (N, ...E) => {
      const P = E ? E.map((S) => typeof S == "function" && S.__emotion_real !== S ? (L) => S(pe({}, L, {
        theme: Ln(pe({}, L, {
          defaultTheme: r,
          themeId: t
        }))
      })) : S) : [];
      let k = N;
      u && d && P.push((S) => {
        const L = Ln(pe({}, S, {
          defaultTheme: r,
          themeId: t
        })), R = v0(u, L);
        if (R) {
          const x = {};
          return Object.entries(R).forEach(([j, b]) => {
            x[j] = typeof b == "function" ? b(pe({}, S, {
              theme: L
            })) : b;
          }), d(S, x);
        }
        return null;
      }), u && !g && P.push((S) => {
        const L = Ln(pe({}, S, {
          defaultTheme: r,
          themeId: t
        }));
        return D0(S, w0(u, L), L, u);
      }), M || P.push(o);
      const B = P.length - E.length;
      if (Array.isArray(N) && B > 0) {
        const S = new Array(B).fill("");
        k = [...N, ...S], k.raw = [...N.raw, ...S];
      } else
        typeof N == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        N.__emotion_real !== N && (k = (S) => N(pe({}, S, {
          theme: Ln(pe({}, S, {
            defaultTheme: r,
            themeId: t
          }))
        })));
      const F = v(k, ...P);
      if (process.env.NODE_ENV !== "production") {
        let S;
        u && (S = `${u}${c || ""}`), S === void 0 && (S = `Styled(${Dm(s)})`), F.displayName = S;
      }
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return v.withConfig && (T.withConfig = v.withConfig), T;
  };
}
function N0(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Tg(t.components[r].defaultProps, n);
}
function T0({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = $g(r);
  return n && (i = i[n] || i), N0({
    theme: i,
    name: t,
    props: e
  });
}
function xu(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function j0(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Br(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Br(j0(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ni(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ni(10, i));
  } else
    n = n.split(",");
  return n = n.map((o) => parseFloat(o)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function Uo(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function S0(e) {
  e = Br(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, o = n * Math.min(i, 1 - i), s = (c, l = (c + r / 30) % 12) => i - o * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), Uo({
    type: a,
    values: u
  });
}
function gl(e) {
  e = Br(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Br(S0(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function hl(e, t) {
  const r = gl(e), n = gl(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ln(e, t) {
  return e = Br(e), t = xu(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Uo(e);
}
function b0(e, t) {
  if (e = Br(e), t = xu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Uo(e);
}
function x0(e, t) {
  if (e = Br(e), t = xu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Uo(e);
}
function C0(e, t) {
  return pe({
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
const O0 = {
  black: "#000",
  white: "#fff"
}, ci = O0, L0 = {
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
}, _0 = L0, k0 = {
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
}, Gr = k0, z0 = {
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
}, Jr = z0, P0 = {
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
}, _n = P0, R0 = {
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
}, Zr = R0, U0 = {
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
}, Xr = U0, Y0 = {
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
}, en = Y0, F0 = ["mode", "contrastThreshold", "tonalOffset"], pl = {
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
    paper: ci.white,
    default: ci.white
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
}, ms = {
  text: {
    primary: ci.white,
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
    active: ci.white,
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
function Ml(e, t, r, n) {
  const i = n.light || n, o = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = x0(e.main, i) : t === "dark" && (e.dark = b0(e.main, o)));
}
function Q0(e = "light") {
  return e === "dark" ? {
    main: Zr[200],
    light: Zr[50],
    dark: Zr[400]
  } : {
    main: Zr[700],
    light: Zr[400],
    dark: Zr[800]
  };
}
function B0(e = "light") {
  return e === "dark" ? {
    main: Gr[200],
    light: Gr[50],
    dark: Gr[400]
  } : {
    main: Gr[500],
    light: Gr[300],
    dark: Gr[700]
  };
}
function $0(e = "light") {
  return e === "dark" ? {
    main: Jr[500],
    light: Jr[300],
    dark: Jr[700]
  } : {
    main: Jr[700],
    light: Jr[400],
    dark: Jr[800]
  };
}
function V0(e = "light") {
  return e === "dark" ? {
    main: Xr[400],
    light: Xr[300],
    dark: Xr[700]
  } : {
    main: Xr[700],
    light: Xr[500],
    dark: Xr[900]
  };
}
function W0(e = "light") {
  return e === "dark" ? {
    main: en[400],
    light: en[300],
    dark: en[700]
  } : {
    main: en[800],
    light: en[500],
    dark: en[900]
  };
}
function H0(e = "light") {
  return e === "dark" ? {
    main: _n[400],
    light: _n[300],
    dark: _n[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _n[500],
    dark: _n[900]
  };
}
function q0(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = Ge(e, F0), o = e.primary || Q0(t), s = e.secondary || B0(t), a = e.error || $0(t), u = e.info || V0(t), c = e.success || W0(t), l = e.warning || H0(t);
  function f(M) {
    const m = hl(M, ms.text.primary) >= r ? ms.text.primary : pl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = hl(M, m);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${m} on ${M}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: M,
    name: m,
    mainShade: w = 500,
    lightShade: v = 300,
    darkShade: T = 700
  }) => {
    if (M = pe({}, M), !M.main && M[w] && (M.main = M[w]), !M.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : ni(11, m ? ` (${m})` : "", w));
    if (typeof M.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(M.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ni(12, m ? ` (${m})` : "", JSON.stringify(M.main)));
    return Ml(M, "light", v, n), Ml(M, "dark", T, n), M.contrastText || (M.contrastText = f(M.main)), M;
  }, h = {
    dark: ms,
    light: pl
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), er(pe({
    // A collection of common colors.
    common: pe({}, ci),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: o,
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
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: _0,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, h[t]), i);
}
const K0 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function G0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const yl = {
  textTransform: "uppercase"
}, ml = '"Roboto", "Helvetica", "Arial", sans-serif';
function J0(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ml,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: f
  } = r, d = Ge(r, K0);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = i / 14, g = f || ((w) => `${w / c * h}rem`), M = (w, v, T, N, E) => pe({
    fontFamily: n,
    fontWeight: w,
    fontSize: g(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, n === ml ? {
    letterSpacing: `${G0(N / v)}em`
  } : {}, E, l), m = {
    h1: M(o, 96, 1.167, -1.5),
    h2: M(o, 60, 1.2, -0.5),
    h3: M(s, 48, 1.167, 0),
    h4: M(s, 34, 1.235, 0.25),
    h5: M(s, 24, 1.334, 0),
    h6: M(a, 20, 1.6, 0.15),
    subtitle1: M(s, 16, 1.75, 0.15),
    subtitle2: M(a, 14, 1.57, 0.1),
    body1: M(s, 16, 1.5, 0.15),
    body2: M(s, 14, 1.43, 0.15),
    button: M(a, 14, 1.75, 0.4, yl),
    caption: M(s, 12, 1.66, 0.4),
    overline: M(s, 12, 2.66, 1, yl)
  };
  return er(pe({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: u
  }, m), d, {
    clone: !1
    // No need to clone deep
  });
}
const Z0 = 0.2, X0 = 0.14, eD = 0.12;
function Je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Z0})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${X0})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${eD})`].join(",");
}
const tD = ["none", Je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], rD = tD, nD = ["duration", "easing", "delay"], iD = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, oD = {
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
function vl(e) {
  return `${Math.round(e)}ms`;
}
function sD(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function aD(e) {
  const t = pe({}, iD, e.easing), r = pe({}, oD, e.duration);
  return pe({
    getAutoHeightDuration: sD,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = o, c = Ge(o, nD);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof s == "string" ? s : vl(s)} ${a} ${typeof u == "string" ? u : vl(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const uD = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, cD = uD, lD = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function fD(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: o = {}
  } = e, s = Ge(e, lD), a = q0(n), u = bu(e);
  let c = er(u, {
    mixins: C0(u.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rD.slice(),
    typography: J0(a, o),
    transitions: aD(i),
    zIndex: pe({}, cD)
  });
  if (c = er(c, s), c = t.reduce((l, f) => er(l, f), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, h) => {
      let g;
      for (g in d) {
        const M = d[g];
        if (l.indexOf(g) !== -1 && Object.keys(M).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Vt("", g);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: M
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[g] = {};
        }
      }
    };
    Object.keys(c.components).forEach((d) => {
      const h = c.components[d].styleOverrides;
      h && d.indexOf("Mui") === 0 && f(h, d);
    });
  }
  return c;
}
const dD = fD(), Cu = dD, Ou = (e) => Gi(e) && e !== "classes", gD = E0({
  defaultTheme: Cu,
  rootShouldForwardProp: Ou
}), wt = gD;
function ur({
  props: e,
  name: t
}) {
  return T0({
    props: e,
    name: t,
    defaultTheme: Cu
  });
}
const Wg = /* @__PURE__ */ ee.createContext({});
process.env.NODE_ENV !== "production" && (Wg.displayName = "ListContext");
const wa = Wg;
function hD(e) {
  return Vt("MuiList", e);
}
_t("MuiList", ["root", "padding", "dense", "subheader"]);
const pD = ["children", "className", "component", "dense", "disablePadding", "subheader"], MD = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: i
  } = e;
  return Er({
    root: ["root", !r && "padding", n && "dense", i && "subheader"]
  }, hD, t);
}, yD = wt("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => pe({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Hg = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: o,
    component: s = "ul",
    dense: a = !1,
    disablePadding: u = !1,
    subheader: c
  } = n, l = Ge(n, pD), f = ee.useMemo(() => ({
    dense: a
  }), [a]), d = pe({}, n, {
    component: s,
    dense: a,
    disablePadding: u
  }), h = MD(d);
  return /* @__PURE__ */ he.jsx(wa.Provider, {
    value: f,
    children: /* @__PURE__ */ he.jsxs(yD, pe({
      as: s,
      className: st(h.root, o),
      ref: r,
      ownerState: d
    }, l, {
      children: [c, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Hg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: D.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: D.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: D.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object])
});
const mD = Hg, vD = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function vs(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function wl(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function qg(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.indexOf(t.keys.join("")) === 0;
}
function kn(e, t, r, n, i, o) {
  let s = !1, a = i(e, t, t ? r : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const u = n ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !qg(a, o) || u)
      a = i(e, a, r);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Kg = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    autoFocus: i = !1,
    autoFocusItem: o = !1,
    children: s,
    className: a,
    disabledItemsFocusable: u = !1,
    disableListWrap: c = !1,
    onKeyDown: l,
    variant: f = "selectedMenu"
  } = t, d = Ge(t, vD), h = ee.useRef(null), g = ee.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  oi(() => {
    i && h.current.focus();
  }, [i]), ee.useImperativeHandle(n, () => ({
    adjustStyleForScrollbar: (T, N) => {
      const E = !h.current.style.width;
      if (T.clientHeight < h.current.clientHeight && E) {
        const P = `${Ag(Ut(T))}px`;
        h.current.style[N.direction === "rtl" ? "paddingLeft" : "paddingRight"] = P, h.current.style.width = `calc(100% + ${P})`;
      }
      return h.current;
    }
  }), []);
  const M = (T) => {
    const N = h.current, E = T.key, P = Ut(N).activeElement;
    if (E === "ArrowDown")
      T.preventDefault(), kn(N, P, c, u, vs);
    else if (E === "ArrowUp")
      T.preventDefault(), kn(N, P, c, u, wl);
    else if (E === "Home")
      T.preventDefault(), kn(N, null, c, u, vs);
    else if (E === "End")
      T.preventDefault(), kn(N, null, c, u, wl);
    else if (E.length === 1) {
      const k = g.current, B = E.toLowerCase(), F = performance.now();
      k.keys.length > 0 && (F - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && B !== k.keys[0] && (k.repeating = !1)), k.lastTime = F, k.keys.push(B);
      const S = P && !k.repeating && qg(P, k);
      k.previousKeyMatched && (S || kn(N, P, !1, u, vs, k)) ? T.preventDefault() : k.previousKeyMatched = !1;
    }
    l && l(T);
  }, m = Et(h, r);
  let w = -1;
  ee.Children.forEach(s, (T, N) => {
    /* @__PURE__ */ ee.isValidElement(T) && (process.env.NODE_ENV !== "production" && Mi.isFragment(T) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), T.props.disabled || (f === "selectedMenu" && T.props.selected || w === -1) && (w = N));
  });
  const v = ee.Children.map(s, (T, N) => {
    if (N === w) {
      const E = {};
      return o && (E.autoFocus = !0), T.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ ee.cloneElement(T, E);
    }
    return T;
  });
  return /* @__PURE__ */ he.jsx(mD, pe({
    role: "menu",
    ref: m,
    className: a,
    onKeyDown: M,
    tabIndex: i ? 0 : -1
  }, d, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (Kg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: D.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: D.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: D.node,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: D.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: D.bool,
  /**
   * @ignore
   */
  onKeyDown: D.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: D.oneOf(["menu", "selectedMenu"])
});
const wD = Kg;
function Yo() {
  const e = $g(Cu);
  return process.env.NODE_ENV !== "production" && ee.useDebugValue(e), e;
}
function DD(e) {
  return Vt("MuiPaper", e);
}
_t("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const AD = ["className", "component", "elevation", "square", "variant"], Dl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ID = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: i
  } = e, o = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Er(o, DD, i);
}, ED = wt("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return pe({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && pe({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${ln("#fff", Dl(t.elevation))}, ${ln("#fff", Dl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), Gg = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: o = "div",
    elevation: s = 1,
    square: a = !1,
    variant: u = "elevation"
  } = n, c = Ge(n, AD), l = pe({}, n, {
    component: o,
    elevation: s,
    square: a,
    variant: u
  }), f = ID(l);
  return process.env.NODE_ENV !== "production" && Yo().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ he.jsx(ED, pe({
    as: o,
    ownerState: l,
    className: st(f.root, i),
    ref: r
  }, c));
});
process.env.NODE_ENV !== "production" && (Gg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: yi(Ng, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: D.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: D.oneOfType([D.oneOf(["elevation", "outlined"]), D.string])
});
const Jg = Gg;
function Da(e, t) {
  return Da = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Da(e, t);
}
function Zg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Da(e, t);
}
const Al = {
  disabled: !1
};
var ND = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.shape({
  enter: D.number,
  exit: D.number,
  appear: D.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && D.oneOfType([D.string, D.shape({
  enter: D.string,
  exit: D.string,
  active: D.string
}), D.shape({
  enter: D.string,
  enterDone: D.string,
  enterActive: D.string,
  exit: D.string,
  exitDone: D.string,
  exitActive: D.string
})]);
const ao = Ne.createContext(null);
var TD = function(t) {
  return t.scrollTop;
}, $n = "unmounted", xr = "exited", Cr = "entering", an = "entered", Aa = "exiting", cr = /* @__PURE__ */ function(e) {
  Zg(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var s = i, a = s && !s.isMounting ? n.enter : n.appear, u;
    return o.appearStatus = null, n.in ? a ? (u = xr, o.appearStatus = Cr) : u = an : n.unmountOnExit || n.mountOnEnter ? u = $n : u = xr, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var s = i.in;
    return s && o.status === $n ? {
      status: xr
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Cr && s !== an && (o = Cr) : (s === Cr || s === an) && (o = Aa);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, s, a;
    return o = s = a = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), {
      exit: o,
      enter: s,
      appear: a
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Cr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ji.findDOMNode(this);
          s && TD(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === xr && this.setState({
        status: $n
      });
  }, r.performEnter = function(i) {
    var o = this, s = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [ji.findDOMNode(this), a], c = u[0], l = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!i && !s || Al.disabled) {
      this.safeSetState({
        status: an
      }, function() {
        o.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, l), this.safeSetState({
      status: Cr
    }, function() {
      o.props.onEntering(c, l), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: an
        }, function() {
          o.props.onEntered(c, l);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ji.findDOMNode(this);
    if (!o || Al.disabled) {
      this.safeSetState({
        status: xr
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Aa
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: xr
        }, function() {
          i.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, o.nextCallback = null, i(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ji.findDOMNode(this), a = i == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = u[0], l = u[1];
      this.props.addEndListener(c, l);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === $n)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Ge(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ne.createElement(ao.Provider, {
        value: null
      }, typeof s == "function" ? s(i, a) : Ne.cloneElement(Ne.Children.only(s), a))
    );
  }, t;
}(Ne.Component);
cr.contextType = ao;
cr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: D.shape({
    current: typeof Element > "u" ? D.any : function(e, t, r, n, i, o) {
      var s = e[t];
      return D.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, i, o);
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
  children: D.oneOfType([D.func.isRequired, D.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: D.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: D.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: D.bool,
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
  appear: D.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: D.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: D.bool,
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
    var r = ND;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      i[o - 1] = arguments[o];
    return r.apply(void 0, [t].concat(i));
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
  addEndListener: D.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: D.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: D.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: D.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: D.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: D.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: D.func
} : {};
function tn() {
}
cr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: tn,
  onEntering: tn,
  onEntered: tn,
  onExit: tn,
  onExiting: tn,
  onExited: tn
};
cr.UNMOUNTED = $n;
cr.EXITED = xr;
cr.ENTERING = Cr;
cr.ENTERED = an;
cr.EXITING = Aa;
const Xg = cr;
function jD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lu(e, t) {
  var r = function(o) {
    return t && qn(o) ? t(o) : o;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Jp.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function SD(e, t) {
  e = e || {}, t = t || {};
  function r(l) {
    return l in t ? t[l] : e[l];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var o in e)
    o in t ? i.length && (n[o] = i, i = []) : i.push(o);
  var s, a = {};
  for (var u in t) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var c = n[u][s];
        a[n[u][s]] = r(c);
      }
    a[u] = r(u);
  }
  for (s = 0; s < i.length; s++)
    a[i[s]] = r(i[s]);
  return a;
}
function Pr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function bD(e, t) {
  return Lu(e.children, function(r) {
    return Kn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Pr(r, "appear", e),
      enter: Pr(r, "enter", e),
      exit: Pr(r, "exit", e)
    });
  });
}
function xD(e, t, r) {
  var n = Lu(e.children), i = SD(t, n);
  return Object.keys(i).forEach(function(o) {
    var s = i[o];
    if (qn(s)) {
      var a = o in t, u = o in n, c = t[o], l = qn(c) && !c.props.in;
      u && (!a || l) ? i[o] = Kn(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Pr(s, "exit", e),
        enter: Pr(s, "enter", e)
      }) : !u && a && !l ? i[o] = Kn(s, {
        in: !1
      }) : u && a && qn(c) && (i[o] = Kn(s, {
        onExited: r.bind(null, s),
        in: c.props.in,
        exit: Pr(s, "exit", e),
        enter: Pr(s, "enter", e)
      }));
    }
  }), i;
}
var CD = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, OD = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, _u = /* @__PURE__ */ function(e) {
  Zg(t, e);
  function t(n, i) {
    var o;
    o = e.call(this, n, i) || this;
    var s = o.handleExited.bind(jD(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, o;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, o) {
    var s = o.children, a = o.handleExited, u = o.firstRender;
    return {
      children: u ? bD(i, a) : xD(i, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(i, o) {
    var s = Lu(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(a) {
      var u = pe({}, a.children);
      return delete u[i.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var i = this.props, o = i.component, s = i.childFactory, a = Ge(i, ["component", "childFactory"]), u = this.state.contextValue, c = CD(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, o === null ? /* @__PURE__ */ Ne.createElement(ao.Provider, {
      value: u
    }, c) : /* @__PURE__ */ Ne.createElement(ao.Provider, {
      value: u
    }, /* @__PURE__ */ Ne.createElement(o, a, c));
  }, t;
}(Ne.Component);
_u.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: D.any,
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
  children: D.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: D.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: D.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: D.bool,
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
  childFactory: D.func
} : {};
_u.defaultProps = OD;
const LD = _u, eh = (e) => e.scrollTop;
function uo(e, t) {
  var r, n;
  const {
    timeout: i,
    easing: o,
    style: s = {}
  } = e;
  return {
    duration: (r = s.transitionDuration) != null ? r : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (n = s.transitionTimingFunction) != null ? n : typeof o == "object" ? o[t.mode] : o,
    delay: s.transitionDelay
  };
}
const _D = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ia(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kD = {
  entering: {
    opacity: 1,
    transform: Ia(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ws = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent), ku = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: i = !0,
    children: o,
    easing: s,
    in: a,
    onEnter: u,
    onEntered: c,
    onEntering: l,
    onExit: f,
    onExited: d,
    onExiting: h,
    style: g,
    timeout: M = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Xg
  } = t, w = Ge(t, _D), v = ee.useRef(), T = ee.useRef(), N = Yo(), E = ee.useRef(null), P = Et(o.ref, r), k = Et(E, P), B = (W) => (re) => {
    if (W) {
      const oe = E.current;
      re === void 0 ? W(oe) : W(oe, re);
    }
  }, F = B(l), S = B((W, re) => {
    eh(W);
    const {
      duration: oe,
      delay: ie,
      easing: _
    } = uo({
      style: g,
      timeout: M,
      easing: s
    }, {
      mode: "enter"
    });
    let $;
    M === "auto" ? ($ = N.transitions.getAutoHeightDuration(W.clientHeight), T.current = $) : $ = oe, W.style.transition = [N.transitions.create("opacity", {
      duration: $,
      delay: ie
    }), N.transitions.create("transform", {
      duration: ws ? $ : $ * 0.666,
      delay: ie,
      easing: _
    })].join(","), u && u(W, re);
  }), L = B(c), R = B(h), x = B((W) => {
    const {
      duration: re,
      delay: oe,
      easing: ie
    } = uo({
      style: g,
      timeout: M,
      easing: s
    }, {
      mode: "exit"
    });
    let _;
    M === "auto" ? (_ = N.transitions.getAutoHeightDuration(W.clientHeight), T.current = _) : _ = re, W.style.transition = [N.transitions.create("opacity", {
      duration: _,
      delay: oe
    }), N.transitions.create("transform", {
      duration: ws ? _ : _ * 0.666,
      delay: ws ? oe : oe || _ * 0.333,
      easing: ie
    })].join(","), W.style.opacity = 0, W.style.transform = Ia(0.75), f && f(W);
  }), j = B(d), b = (W) => {
    M === "auto" && (v.current = setTimeout(W, T.current || 0)), n && n(E.current, W);
  };
  return ee.useEffect(() => () => {
    clearTimeout(v.current);
  }, []), /* @__PURE__ */ he.jsx(m, pe({
    appear: i,
    in: a,
    nodeRef: E,
    onEnter: S,
    onEntered: L,
    onEntering: F,
    onExit: x,
    onExited: j,
    onExiting: R,
    addEndListener: b,
    timeout: M === "auto" ? null : M
  }, w, {
    children: (W, re) => /* @__PURE__ */ ee.cloneElement(o, pe({
      style: pe({
        opacity: 0,
        transform: Ia(0.75),
        visibility: W === "exited" && !a ? "hidden" : void 0
      }, kD[W], g, o.props.style),
      ref: k
    }, re))
  }));
});
process.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: D.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: D.bool,
  /**
   * A single child content element.
   */
  children: mi.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: D.oneOfType([D.shape({
    enter: D.string,
    exit: D.string
  }), D.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: D.bool,
  /**
   * @ignore
   */
  onEnter: D.func,
  /**
   * @ignore
   */
  onEntered: D.func,
  /**
   * @ignore
   */
  onEntering: D.func,
  /**
   * @ignore
   */
  onExit: D.func,
  /**
   * @ignore
   */
  onExited: D.func,
  /**
   * @ignore
   */
  onExiting: D.func,
  /**
   * @ignore
   */
  style: D.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: D.oneOfType([D.oneOf(["auto"]), D.number, D.shape({
    appear: D.number,
    enter: D.number,
    exit: D.number
  })])
});
ku.muiSupportAuto = !0;
const zD = ku, PD = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], RD = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, th = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = Yo(), i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: o,
    appear: s = !0,
    children: a,
    easing: u,
    in: c,
    onEnter: l,
    onEntered: f,
    onEntering: d,
    onExit: h,
    onExited: g,
    onExiting: M,
    style: m,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Xg
  } = t, T = Ge(t, PD), N = ee.useRef(null), E = Et(a.ref, r), P = Et(N, E), k = (b) => (W) => {
    if (b) {
      const re = N.current;
      W === void 0 ? b(re) : b(re, W);
    }
  }, B = k(d), F = k((b, W) => {
    eh(b);
    const re = uo({
      style: m,
      timeout: w,
      easing: u
    }, {
      mode: "enter"
    });
    b.style.webkitTransition = n.transitions.create("opacity", re), b.style.transition = n.transitions.create("opacity", re), l && l(b, W);
  }), S = k(f), L = k(M), R = k((b) => {
    const W = uo({
      style: m,
      timeout: w,
      easing: u
    }, {
      mode: "exit"
    });
    b.style.webkitTransition = n.transitions.create("opacity", W), b.style.transition = n.transitions.create("opacity", W), h && h(b);
  }), x = k(g), j = (b) => {
    o && o(N.current, b);
  };
  return /* @__PURE__ */ he.jsx(v, pe({
    appear: s,
    in: c,
    nodeRef: N,
    onEnter: F,
    onEntered: S,
    onEntering: B,
    onExit: R,
    onExited: x,
    onExiting: L,
    addEndListener: j,
    timeout: w
  }, T, {
    children: (b, W) => /* @__PURE__ */ ee.cloneElement(a, pe({
      style: pe({
        opacity: 0,
        visibility: b === "exited" && !c ? "hidden" : void 0
      }, RD[b], m, a.props.style),
      ref: P
    }, W))
  }));
});
process.env.NODE_ENV !== "production" && (th.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: D.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: D.bool,
  /**
   * A single child content element.
   */
  children: mi.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: D.oneOfType([D.shape({
    enter: D.string,
    exit: D.string
  }), D.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: D.bool,
  /**
   * @ignore
   */
  onEnter: D.func,
  /**
   * @ignore
   */
  onEntered: D.func,
  /**
   * @ignore
   */
  onEntering: D.func,
  /**
   * @ignore
   */
  onExit: D.func,
  /**
   * @ignore
   */
  onExited: D.func,
  /**
   * @ignore
   */
  onExiting: D.func,
  /**
   * @ignore
   */
  style: D.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: D.oneOfType([D.number, D.shape({
    appear: D.number,
    enter: D.number,
    exit: D.number
  })])
});
const UD = th;
function YD(e) {
  return Vt("MuiBackdrop", e);
}
_t("MuiBackdrop", ["root", "invisible"]);
const FD = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"], QD = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Er({
    root: ["root", r && "invisible"]
  }, YD, t);
}, BD = wt("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => pe({
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
})), rh = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  var n, i;
  const o = ur({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    component: a = "div",
    components: u = {},
    componentsProps: c = {},
    className: l,
    invisible: f = !1,
    open: d,
    transitionDuration: h,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = UD
  } = o, M = Ge(o, FD), m = pe({}, o, {
    component: a,
    invisible: f
  }), w = QD(m);
  return /* @__PURE__ */ he.jsx(g, pe({
    in: d,
    timeout: h
  }, M, {
    children: /* @__PURE__ */ he.jsx(BD, {
      "aria-hidden": !0,
      as: (n = u.Root) != null ? n : a,
      className: st(w.root, l),
      ownerState: pe({}, m, (i = c.root) == null ? void 0 : i.ownerState),
      classes: w,
      ref: r,
      children: s
    })
  }));
});
process.env.NODE_ENV !== "production" && (rh.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: D.shape({
    Root: D.elementType
  }),
  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: D.shape({
    root: D.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: D.bool,
  /**
   * If `true`, the component is shown.
   */
  open: D.bool.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: D.oneOfType([D.number, D.shape({
    appear: D.number,
    enter: D.number,
    exit: D.number
  })])
});
const $D = rh, VD = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"], WD = (e) => e.classes, HD = wt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => pe({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), qD = wt($D, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), nh = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  var n;
  const i = ur({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = qD,
    closeAfterTransition: s = !1,
    children: a,
    components: u = {},
    componentsProps: c = {},
    disableAutoFocus: l = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: h = !1,
    disableRestoreFocus: g = !1,
    disableScrollLock: M = !1,
    hideBackdrop: m = !1,
    keepMounted: w = !1
  } = i, v = Ge(i, VD), [T, N] = ee.useState(!0), E = {
    closeAfterTransition: s,
    disableAutoFocus: l,
    disableEnforceFocus: f,
    disableEscapeKeyDown: d,
    disablePortal: h,
    disableRestoreFocus: g,
    disableScrollLock: M,
    hideBackdrop: m,
    keepMounted: w
  }, P = pe({}, i, E, {
    exited: T
  }), k = WD(P);
  return /* @__PURE__ */ he.jsx(nv, pe({
    components: pe({
      Root: HD
    }, u),
    componentsProps: {
      root: pe({}, c.root, (!u.Root || !hg(u.Root)) && {
        ownerState: pe({}, (n = c.root) == null ? void 0 : n.ownerState)
      })
    },
    BackdropComponent: o,
    onTransitionEnter: () => N(!1),
    onTransitionExited: () => N(!0),
    ref: r
  }, v, {
    classes: k
  }, E, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (nh.propTypes = {
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
  BackdropComponent: D.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   */
  BackdropProps: D.object,
  /**
   * A single child content element.
   */
  children: mi.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: D.bool,
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: D.shape({
    Root: D.elementType
  }),
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: D.shape({
    root: D.object
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: D.oneOfType([mn, D.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: D.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: D.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: D.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: D.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: D.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: D.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: D.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: D.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: D.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: D.func,
  /**
   * If `true`, the component is shown.
   */
  open: D.bool.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object])
});
const KD = nh;
function GD(e) {
  return Vt("MuiPopover", e);
}
_t("MuiPopover", ["root", "paper"]);
const JD = ["onEntering"], ZD = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function Il(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function El(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function Nl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ji(e) {
  return typeof e == "function" ? e() : e;
}
const XD = (e) => {
  const {
    classes: t
  } = e;
  return Er({
    root: ["root"],
    paper: ["paper"]
  }, GD, t);
}, eA = wt(KD, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), tA = wt(Jg, {
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
}), ih = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: o,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: u = "anchorEl",
    children: c,
    className: l,
    container: f,
    elevation: d = 8,
    marginThreshold: h = 16,
    open: g,
    PaperProps: M = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = zD,
    transitionDuration: v = "auto",
    TransitionProps: {
      onEntering: T
    } = {}
  } = n, N = Ge(n.TransitionProps, JD), E = Ge(n, ZD), P = ee.useRef(), k = Et(P, M.ref), B = pe({}, n, {
    anchorOrigin: s,
    anchorReference: u,
    elevation: d,
    marginThreshold: h,
    PaperProps: M,
    transformOrigin: m,
    TransitionComponent: w,
    transitionDuration: v,
    TransitionProps: N
  }), F = XD(B), S = ee.useCallback(() => {
    if (u === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const re = Ji(o), oe = re && re.nodeType === 1 ? re : Ut(P.current).body, ie = oe.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const _ = oe.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && _.top === 0 && _.left === 0 && _.right === 0 && _.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ie.top + Il(ie, s.vertical),
      left: ie.left + El(ie, s.horizontal)
    };
  }, [o, s.horizontal, s.vertical, a, u]), L = ee.useCallback((re) => ({
    vertical: Il(re, m.vertical),
    horizontal: El(re, m.horizontal)
  }), [m.horizontal, m.vertical]), R = ee.useCallback((re) => {
    const oe = {
      width: re.offsetWidth,
      height: re.offsetHeight
    }, ie = L(oe);
    if (u === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Nl(ie)
      };
    const _ = S();
    let $ = _.top - ie.vertical, U = _.left - ie.horizontal;
    const K = $ + oe.height, q = U + oe.width, J = ii(Ji(o)), C = J.innerHeight - h, te = J.innerWidth - h;
    if ($ < h) {
      const H = $ - h;
      $ -= H, ie.vertical += H;
    } else if (K > C) {
      const H = K - C;
      $ -= H, ie.vertical += H;
    }
    if (process.env.NODE_ENV !== "production" && oe.height > C && oe.height && C && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${oe.height - C}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), U < h) {
      const H = U - h;
      U -= H, ie.horizontal += H;
    } else if (q > te) {
      const H = q - te;
      U -= H, ie.horizontal += H;
    }
    return {
      top: `${Math.round($)}px`,
      left: `${Math.round(U)}px`,
      transformOrigin: Nl(ie)
    };
  }, [o, u, S, L, h]), x = ee.useCallback(() => {
    const re = P.current;
    if (!re)
      return;
    const oe = R(re);
    oe.top !== null && (re.style.top = oe.top), oe.left !== null && (re.style.left = oe.left), re.style.transformOrigin = oe.transformOrigin;
  }, [R]), j = (re, oe) => {
    T && T(re, oe), x();
  };
  ee.useEffect(() => {
    g && x();
  }), ee.useImperativeHandle(i, () => g ? {
    updatePosition: () => {
      x();
    }
  } : null, [g, x]), ee.useEffect(() => {
    if (!g)
      return;
    const re = Im(() => {
      x();
    }), oe = ii(o);
    return oe.addEventListener("resize", re), () => {
      re.clear(), oe.removeEventListener("resize", re);
    };
  }, [o, g, x]);
  let b = v;
  v === "auto" && !w.muiSupportAuto && (b = void 0);
  const W = f || (o ? Ut(Ji(o)).body : void 0);
  return /* @__PURE__ */ he.jsx(eA, pe({
    BackdropProps: {
      invisible: !0
    },
    className: st(F.root, l),
    container: W,
    open: g,
    ref: r,
    ownerState: B
  }, E, {
    children: /* @__PURE__ */ he.jsx(w, pe({
      appear: !0,
      in: g,
      onEntering: j,
      timeout: b
    }, N, {
      children: /* @__PURE__ */ he.jsx(tA, pe({
        elevation: d
      }, M, {
        ref: k,
        className: st(F.paper, M.className),
        children: c
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ih.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Dg,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: yi(D.oneOfType([mn, D.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ji(e.anchorEl);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
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
  anchorOrigin: D.shape({
    horizontal: D.oneOfType([D.oneOf(["center", "left", "right"]), D.number]).isRequired,
    vertical: D.oneOfType([D.oneOf(["bottom", "center", "top"]), D.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: D.shape({
    left: D.number.isRequired,
    top: D.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: D.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: D.oneOfType([mn, D.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ng,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: D.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: D.func,
  /**
   * If `true`, the component is shown.
   */
  open: D.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: D.shape({
    component: mg
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
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
  transformOrigin: D.shape({
    horizontal: D.oneOfType([D.oneOf(["center", "left", "right"]), D.number]).isRequired,
    vertical: D.oneOfType([D.oneOf(["bottom", "center", "top"]), D.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: D.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: D.oneOfType([D.oneOf(["auto"]), D.number, D.shape({
    appear: D.number,
    enter: D.number,
    exit: D.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: D.object
});
const rA = ih;
function nA(e) {
  return Vt("MuiMenu", e);
}
_t("MuiMenu", ["root", "paper", "list"]);
const iA = ["onEntering"], oA = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], sA = {
  vertical: "top",
  horizontal: "right"
}, aA = {
  vertical: "top",
  horizontal: "left"
}, uA = (e) => {
  const {
    classes: t
  } = e;
  return Er({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, nA, t);
}, cA = wt(rA, {
  shouldForwardProp: (e) => Ou(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), lA = wt(Jg, {
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
}), fA = wt(wD, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), oh = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: o,
    disableAutoFocusItem: s = !1,
    MenuListProps: a = {},
    onClose: u,
    open: c,
    PaperProps: l = {},
    PopoverClasses: f,
    transitionDuration: d = "auto",
    TransitionProps: {
      onEntering: h
    } = {},
    variant: g = "selectedMenu"
  } = n, M = Ge(n.TransitionProps, iA), m = Ge(n, oA), w = Yo(), v = w.direction === "rtl", T = pe({}, n, {
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: a,
    onEntering: h,
    PaperProps: l,
    transitionDuration: d,
    TransitionProps: M,
    variant: g
  }), N = uA(T), E = i && !s && c, P = ee.useRef(null), k = (S, L) => {
    P.current && P.current.adjustStyleForScrollbar(S, w), h && h(S, L);
  }, B = (S) => {
    S.key === "Tab" && (S.preventDefault(), u && u(S, "tabKeyDown"));
  };
  let F = -1;
  return ee.Children.map(o, (S, L) => {
    /* @__PURE__ */ ee.isValidElement(S) && (process.env.NODE_ENV !== "production" && Mi.isFragment(S) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), S.props.disabled || (g === "selectedMenu" && S.props.selected || F === -1) && (F = L));
  }), /* @__PURE__ */ he.jsx(cA, pe({
    classes: f,
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: v ? "right" : "left"
    },
    transformOrigin: v ? sA : aA,
    PaperProps: pe({
      component: lA
    }, l, {
      classes: pe({}, l.classes, {
        root: N.paper
      })
    }),
    className: N.root,
    open: c,
    ref: r,
    transitionDuration: d,
    TransitionProps: pe({
      onEntering: k
    }, M),
    ownerState: T
  }, m, {
    children: /* @__PURE__ */ he.jsx(fA, pe({
      onKeyDown: B,
      actions: P,
      autoFocus: i && (F === -1 || s),
      autoFocusItem: E,
      variant: g
    }, a, {
      className: st(N.list, a.className),
      children: o
    }))
  }));
});
process.env.NODE_ENV !== "production" && (oh.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: D.oneOfType([mn, D.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: D.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: D.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: D.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: D.func,
  /**
   * If `true`, the component is shown.
   */
  open: D.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: D.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: D.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: D.oneOfType([D.oneOf(["auto"]), D.number, D.shape({
    appear: D.number,
    enter: D.number,
    exit: D.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: D.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: D.oneOf(["menu", "selectedMenu"])
});
const dA = oh;
function sh(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: i,
    rippleY: o,
    rippleSize: s,
    in: a,
    onExited: u,
    timeout: c
  } = e, [l, f] = ee.useState(!1), d = st(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), h = {
    width: s,
    height: s,
    top: -(s / 2) + o,
    left: -(s / 2) + i
  }, g = st(r.child, l && r.childLeaving, n && r.childPulsate);
  return !a && !l && f(!0), ee.useEffect(() => {
    if (!a && u != null) {
      const M = setTimeout(u, c);
      return () => {
        clearTimeout(M);
      };
    }
  }, [u, a, c]), /* @__PURE__ */ he.jsx("span", {
    className: d,
    style: h,
    children: /* @__PURE__ */ he.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (sh.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: D.object.isRequired,
  className: D.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: D.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: D.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: D.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: D.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: D.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: D.number,
  /**
   * exit delay
   */
  timeout: D.number.isRequired
});
const gA = _t("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), bt = gA, hA = ["center", "classes", "className"];
let Fo = (e) => e, Tl, jl, Sl, bl;
const Ea = 550, pA = 80, MA = Tu(Tl || (Tl = Fo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), yA = Tu(jl || (jl = Fo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), mA = Tu(Sl || (Sl = Fo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), vA = wt("span", {
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
}), wA = wt(sh, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(bl || (bl = Fo`
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
`), bt.rippleVisible, MA, Ea, ({
  theme: e
}) => e.transitions.easing.easeInOut, bt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, bt.child, bt.childLeaving, yA, Ea, ({
  theme: e
}) => e.transitions.easing.easeInOut, bt.childPulsate, mA, ({
  theme: e
}) => e.transitions.easing.easeInOut), ah = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: o = {},
    className: s
  } = n, a = Ge(n, hA), [u, c] = ee.useState([]), l = ee.useRef(0), f = ee.useRef(null);
  ee.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [u]);
  const d = ee.useRef(!1), h = ee.useRef(null), g = ee.useRef(null), M = ee.useRef(null);
  ee.useEffect(() => () => {
    clearTimeout(h.current);
  }, []);
  const m = ee.useCallback((N) => {
    const {
      pulsate: E,
      rippleX: P,
      rippleY: k,
      rippleSize: B,
      cb: F
    } = N;
    c((S) => [...S, /* @__PURE__ */ he.jsx(wA, {
      classes: {
        ripple: st(o.ripple, bt.ripple),
        rippleVisible: st(o.rippleVisible, bt.rippleVisible),
        ripplePulsate: st(o.ripplePulsate, bt.ripplePulsate),
        child: st(o.child, bt.child),
        childLeaving: st(o.childLeaving, bt.childLeaving),
        childPulsate: st(o.childPulsate, bt.childPulsate)
      },
      timeout: Ea,
      pulsate: E,
      rippleX: P,
      rippleY: k,
      rippleSize: B
    }, l.current)]), l.current += 1, f.current = F;
  }, [o]), w = ee.useCallback((N = {}, E = {}, P) => {
    const {
      pulsate: k = !1,
      center: B = i || E.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = E;
    if ((N == null ? void 0 : N.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (N == null ? void 0 : N.type) === "touchstart" && (d.current = !0);
    const S = F ? null : M.current, L = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let R, x, j;
    if (B || N === void 0 || N.clientX === 0 && N.clientY === 0 || !N.clientX && !N.touches)
      R = Math.round(L.width / 2), x = Math.round(L.height / 2);
    else {
      const {
        clientX: b,
        clientY: W
      } = N.touches ? N.touches[0] : N;
      R = Math.round(b - L.left), x = Math.round(W - L.top);
    }
    if (B)
      j = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const b = Math.max(Math.abs((S ? S.clientWidth : 0) - R), R) * 2 + 2, W = Math.max(Math.abs((S ? S.clientHeight : 0) - x), x) * 2 + 2;
      j = Math.sqrt(b ** 2 + W ** 2);
    }
    N != null && N.touches ? g.current === null && (g.current = () => {
      m({
        pulsate: k,
        rippleX: R,
        rippleY: x,
        rippleSize: j,
        cb: P
      });
    }, h.current = setTimeout(() => {
      g.current && (g.current(), g.current = null);
    }, pA)) : m({
      pulsate: k,
      rippleX: R,
      rippleY: x,
      rippleSize: j,
      cb: P
    });
  }, [i, m]), v = ee.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), T = ee.useCallback((N, E) => {
    if (clearTimeout(h.current), (N == null ? void 0 : N.type) === "touchend" && g.current) {
      g.current(), g.current = null, h.current = setTimeout(() => {
        T(N, E);
      });
      return;
    }
    g.current = null, c((P) => P.length > 0 ? P.slice(1) : P), f.current = E;
  }, []);
  return ee.useImperativeHandle(r, () => ({
    pulsate: v,
    start: w,
    stop: T
  }), [v, w, T]), /* @__PURE__ */ he.jsx(vA, pe({
    className: st(o.root, bt.root, s),
    ref: M
  }, a, {
    children: /* @__PURE__ */ he.jsx(LD, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (ah.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: D.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string
});
const DA = ah;
function AA(e) {
  return Vt("MuiButtonBase", e);
}
const IA = _t("MuiButtonBase", ["root", "disabled", "focusVisible"]), EA = IA, NA = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], TA = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, s = Er({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, AA, i);
  return r && n && (s.root += ` ${n}`), s;
}, jA = wt("button", {
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
  [`&.${EA.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), uh = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: o = !1,
    children: s,
    className: a,
    component: u = "button",
    disabled: c = !1,
    disableRipple: l = !1,
    disableTouchRipple: f = !1,
    focusRipple: d = !1,
    LinkComponent: h = "a",
    onBlur: g,
    onClick: M,
    onContextMenu: m,
    onDragLeave: w,
    onFocus: v,
    onFocusVisible: T,
    onKeyDown: N,
    onKeyUp: E,
    onMouseDown: P,
    onMouseLeave: k,
    onMouseUp: B,
    onTouchEnd: F,
    onTouchMove: S,
    onTouchStart: L,
    tabIndex: R = 0,
    TouchRippleProps: x,
    touchRippleRef: j,
    type: b
  } = n, W = Ge(n, NA), re = ee.useRef(null), oe = ee.useRef(null), ie = Et(oe, j), {
    isFocusVisibleRef: _,
    onFocus: $,
    onBlur: U,
    ref: K
  } = Cm(), [q, J] = ee.useState(!1);
  c && q && J(!1), ee.useImperativeHandle(i, () => ({
    focusVisible: () => {
      J(!0), re.current.focus();
    }
  }), []);
  const [C, te] = ee.useState(!1);
  ee.useEffect(() => {
    te(!0);
  }, []);
  const H = C && !l && !c;
  ee.useEffect(() => {
    q && d && !l && C && oe.current.pulsate();
  }, [l, d, q, C]);
  function ge(De, qt, Hr = f) {
    return cn((Ti) => (qt && qt(Ti), !Hr && oe.current && oe.current[De](Ti), !0));
  }
  const V = ge("start", P), Y = ge("stop", m), Q = ge("stop", w), fe = ge("stop", B), X = ge("stop", (De) => {
    q && De.preventDefault(), k && k(De);
  }), le = ge("start", L), Me = ge("stop", F), de = ge("stop", S), I = ge("stop", (De) => {
    U(De), _.current === !1 && J(!1), g && g(De);
  }, !1), y = cn((De) => {
    re.current || (re.current = De.currentTarget), $(De), _.current === !0 && (J(!0), T && T(De)), v && v(De);
  }), p = () => {
    const De = re.current;
    return u && u !== "button" && !(De.tagName === "A" && De.href);
  }, A = ee.useRef(!1), z = cn((De) => {
    d && !A.current && q && oe.current && De.key === " " && (A.current = !0, oe.current.stop(De, () => {
      oe.current.start(De);
    })), De.target === De.currentTarget && p() && De.key === " " && De.preventDefault(), N && N(De), De.target === De.currentTarget && p() && De.key === "Enter" && !c && (De.preventDefault(), M && M(De));
  }), Z = cn((De) => {
    d && De.key === " " && oe.current && q && !De.defaultPrevented && (A.current = !1, oe.current.stop(De, () => {
      oe.current.pulsate(De);
    })), E && E(De), M && De.target === De.currentTarget && p() && De.key === " " && !De.defaultPrevented && M(De);
  });
  let G = u;
  G === "button" && (W.href || W.to) && (G = h);
  const ve = {};
  G === "button" ? (ve.type = b === void 0 ? "button" : b, ve.disabled = c) : (!W.href && !W.to && (ve.role = "button"), c && (ve["aria-disabled"] = c));
  const be = Et(K, re), je = Et(r, be);
  process.env.NODE_ENV !== "production" && ee.useEffect(() => {
    H && !oe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [H]);
  const ze = pe({}, n, {
    centerRipple: o,
    component: u,
    disabled: c,
    disableRipple: l,
    disableTouchRipple: f,
    focusRipple: d,
    tabIndex: R,
    focusVisible: q
  }), Ve = TA(ze);
  return /* @__PURE__ */ he.jsxs(jA, pe({
    as: G,
    className: st(Ve.root, a),
    ownerState: ze,
    onBlur: I,
    onClick: M,
    onContextMenu: Y,
    onFocus: y,
    onKeyDown: z,
    onKeyUp: Z,
    onMouseDown: V,
    onMouseLeave: X,
    onMouseUp: fe,
    onDragLeave: Q,
    onTouchEnd: Me,
    onTouchMove: de,
    onTouchStart: le,
    ref: je,
    tabIndex: c ? -1 : R,
    type: b
  }, ve, W, {
    children: [s, H ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ he.jsx(DA, pe({
        ref: ie,
        center: o
      }, x))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (uh.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dg,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: D.bool,
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * @ignore
   */
  className: D.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: mg,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: D.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: D.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: D.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: D.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: D.string,
  /**
   * @ignore
   */
  href: D.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: D.elementType,
  /**
   * @ignore
   */
  onBlur: D.func,
  /**
   * @ignore
   */
  onClick: D.func,
  /**
   * @ignore
   */
  onContextMenu: D.func,
  /**
   * @ignore
   */
  onDragLeave: D.func,
  /**
   * @ignore
   */
  onFocus: D.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: D.func,
  /**
   * @ignore
   */
  onKeyDown: D.func,
  /**
   * @ignore
   */
  onKeyUp: D.func,
  /**
   * @ignore
   */
  onMouseDown: D.func,
  /**
   * @ignore
   */
  onMouseLeave: D.func,
  /**
   * @ignore
   */
  onMouseUp: D.func,
  /**
   * @ignore
   */
  onTouchEnd: D.func,
  /**
   * @ignore
   */
  onTouchMove: D.func,
  /**
   * @ignore
   */
  onTouchStart: D.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * @default 0
   */
  tabIndex: D.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: D.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: D.oneOfType([D.func, D.shape({
    current: D.shape({
      pulsate: D.func.isRequired,
      start: D.func.isRequired,
      stop: D.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: D.oneOfType([D.oneOf(["button", "reset", "submit"]), D.string])
});
const SA = uh, bA = _t("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), xl = bA, xA = _t("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Cl = xA, CA = _t("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ol = CA;
function OA(e) {
  return Vt("MuiMenuItem", e);
}
const LA = _t("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), zn = LA, _A = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"], kA = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, zA = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: n,
    disableGutters: i,
    selected: o,
    classes: s
  } = e, u = Er({
    root: ["root", r && "dense", t && "disabled", !i && "gutters", n && "divider", o && "selected"]
  }, OA, s);
  return pe({}, s, u);
}, PA = wt(SA, {
  shouldForwardProp: (e) => Ou(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: kA
})(({
  theme: e,
  ownerState: t
}) => pe({}, e.typography.body1, {
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
  [`&.${zn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ln(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${zn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ln(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${zn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ln(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ln(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${zn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${zn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${xl.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${xl.inset}`]: {
    marginLeft: 52
  },
  [`& .${Ol.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Ol.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Cl.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && pe({
  minHeight: 32,
  // https://material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Cl.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), ch = /* @__PURE__ */ ee.forwardRef(function(t, r) {
  const n = ur({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: o = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: u = !1,
    focusVisibleClassName: c,
    role: l = "menuitem",
    tabIndex: f
  } = n, d = Ge(n, _A), h = ee.useContext(wa), g = {
    dense: s || h.dense || !1,
    disableGutters: u
  }, M = ee.useRef(null);
  oi(() => {
    i && (M.current ? M.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const m = pe({}, n, {
    dense: g.dense,
    divider: a,
    disableGutters: u
  }), w = zA(n), v = Et(M, r);
  let T;
  return n.disabled || (T = f !== void 0 ? f : -1), /* @__PURE__ */ he.jsx(wa.Provider, {
    value: g,
    children: /* @__PURE__ */ he.jsx(PA, pe({
      ref: v,
      role: l,
      tabIndex: T,
      component: o,
      focusVisibleClassName: st(w.focusVisible, c)
    }, d, {
      ownerState: m,
      classes: w
    }))
  });
});
process.env.NODE_ENV !== "production" && (ch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: D.bool,
  /**
   * The content of the component.
   */
  children: D.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: D.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: D.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: D.bool,
  /**
   * @ignore
   */
  disabled: D.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: D.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: D.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: D.string,
  /**
   * @ignore
   */
  role: D.string,
  /**
   * @ignore
   */
  selected: D.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: D.oneOfType([D.arrayOf(D.oneOfType([D.func, D.object, D.bool])), D.func, D.object]),
  /**
   * @default 0
   */
  tabIndex: D.number
});
const Ll = ch;
var RA = {
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
const UA = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zu = (e, t) => {
  const r = wo(
    ({ color: n = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: s, children: a, ...u }, c) => mt(
      "svg",
      {
        ref: c,
        ...RA,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: `lucide lucide-${UA(e)}`,
        ...u
      },
      [
        ...t.map(([l, f]) => mt(l, f)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return r.displayName = `${e}`, r;
}, _l = zu("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]), YA = zu("Moon", [
  ["path", { d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "1rit1i" }]
]), FA = zu("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), co = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375
}, UC = (e, t) => `
      @media screen and (max-width: ${co[e] / 16}em) {
        ${Zd(t)};
      }
    `, QA = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  backgroundColor: "inherit"
}, BA = ({ theme: e, changeLang: t }) => {
  const [r, n] = Ne.useState(null), i = (a) => {
    a.preventDefault(), n(a.currentTarget);
  }, o = () => {
    n(null);
  }, s = (a, u) => {
    a.preventDefault(), t(u), window.dispatchEvent(new Event("storage")), o();
  };
  return /* @__PURE__ */ he.jsxs("div", { style: { float: "right" }, children: [
    /* @__PURE__ */ he.jsx(
      "button",
      {
        style: {
          ...QA,
          color: e === "light" ? Ke.light.main : Ke.dark.text2
        },
        onClick: i,
        "aria-label": "Language toggle",
        children: /* @__PURE__ */ he.jsx(aa, { maxWidth: co.tablet, children: (a) => a ? /* @__PURE__ */ he.jsx(_l, { size: "2x" }) : /* @__PURE__ */ he.jsx(_l, { size: "3x", transform: "shrink-2" }) })
      }
    ),
    /* @__PURE__ */ he.jsxs(
      dA,
      {
        id: "language-menu",
        anchorEl: r,
        open: !!r,
        onClose: o,
        disableAutoFocusItem: !0,
        classes: {
          paper: e === "light" ? Ke.light.bgSide : Ke.dark.bgSide
        },
        children: [
          /* @__PURE__ */ he.jsx(
            Ll,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? Ke.light.text2 : Ke.dark.text2
              },
              onClick: (a) => s(a, "ja"),
              children: "日本語"
            }
          ),
          /* @__PURE__ */ he.jsx(
            Ll,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? Ke.light.text2 : Ke.dark.text2
              },
              onClick: (a) => s(a, "en"),
              children: "English"
            }
          )
        ]
      }
    )
  ] });
}, lh = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjMzMiAxNDAuNDIzLDMwMS4yODYgMTQ1LjMzNCwzMDEuNDYyIDE1NC45NzEgQyAzMDEuNzU5IDE3MS4xOTQsMzAxLjc4NCAxNzEuMDUwLDI5OS4xNjIgMTY4LjIwNSBDIDI5NS40MzkgMTY0LjE2NywyODcuNTg1IDE2Mi41MDksMjgxLjgwMCAxNjQuNTQyIEMgMjY0LjM3OSAxNzAuNjYyLDI2NC43NjcgMjAyLjA2NywyODIuMzIwIDIwNi42NDcgQyAyODguODE1IDIwOC4zNDIsMjk5LjAxMiAyMDQuOTAxLDMwMC40NDYgMjAwLjUzMCBDIDMwMS4wNTQgMTk4LjY3NSwzMDEuNzcxIDE5OS45OTcsMzAxLjc4NSAyMDMuMDAwIEwgMzAxLjgwMCAyMDYuMjAwIDMwNS40NzEgMjA2LjI2NCBDIDMwNy45NjQgMjA2LjMwOCwzMDkuMTgzIDIwNi4xNzksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjM0MiAyMDUuNjA5LDMwOS4zMTAgMTkwLjc0MSwzMDkuMjAwIDE3Mi44MjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA1LjUwMiAxNDAuMjI1IEMgMzAzLjU3OCAxNDAuMjExLDMwMS44MjIgMTQwLjI2MCwzMDEuNjAwIDE0MC4zMzQgTTYzLjYwMCAxNDYuNjczIEMgNjMuNjAwIDE0Ny4wNDQsNjMuOTQ3IDE0OC4zNDksNjQuMzcxIDE0OS41NzMgQyA2NC43OTUgMTUwLjc5OCw2Ni4yNTEgMTU1LjMxMCw2Ny42MDUgMTU5LjYwMCBDIDY4Ljk2MCAxNjMuODkwLDcwLjM5NyAxNjguMzkwLDcwLjc5OSAxNjkuNjAwIEMgNzEuODA0IDE3Mi42MjcsNzMuNzM1IDE3OC43OTMsNzQuODA2IDE4Mi40MDAgQyA3NS4yOTcgMTg0LjA1MCw3Ni4wMjEgMTg2LjM5MCw3Ni40MTUgMTg3LjYwMCBDIDc2LjgxMCAxODguODEwLDc3LjcwNyAxOTEuNjkwLDc4LjQwOSAxOTQuMDAwIEMgNzkuMTEwIDE5Ni4zMTAsODAuMDQwIDE5OS4zNzAsODAuNDc1IDIwMC44MDAgQyA4MC45MTAgMjAyLjIzMCw4MS41MDEgMjA0LjAzMCw4MS43ODggMjA0LjgwMCBMIDgyLjMxMSAyMDYuMjAwIDg1LjY1MyAyMDYuMjAwIEwgODguOTk2IDIwNi4yMDAgOTYuNzk4IDE4Mi43MDkgQyAxMDMuMzQwIDE2My4wMTIsMTA1LjYwMCAxNTcuMDAzLDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU5LjM2OSwxMDYuMzI4IDE2MS40ODQsMTA3LjIxOSAxNjQuMDA5IEMgMTEwLjQxOCAxNzMuMDgyLDExNS45NzIgMTg5Ljk3MywxMTguODU2IDE5OS40MDAgQyAxMTkuMzI3IDIwMC45NDAsMTIwLjAwOSAyMDMuMTAwLDEyMC4zNzEgMjA0LjIwMCBMIDEyMS4wMzEgMjA2LjIwMCAxMjQuNDA1IDIwNi4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTM3LjUzMCAxNzcuMjAwIEMgMTQyLjg5MyAxNjEuMjUwLDE0Ny4zNzMgMTQ3LjcwNSwxNDcuNDg2IDE0Ny4xMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ0LjUzOCAxNDYuMDAwIEwgMTQxLjM4NSAxNDYuMDAwIDE0MC40NDcgMTQ5LjUwMCBDIDEzOS42MzYgMTUyLjUyNSwxMzguMTM5IDE1Ny45ODUsMTM2LjgwMCAxNjIuODAwIEMgMTMyLjk0MyAxNzYuNjY4LDEyNi43MjcgMTk1LjY4NiwxMjYuMjI2IDE5NS4xNTAgQyAxMjUuOTM2IDE5NC44MzgsMTE2LjAxOCAxNjUuMzgzLDExMy42NTAgMTU3LjgwMCBDIDExMi45NjMgMTU1LjYwMCwxMTEuODMwIDE1Mi4wNDUsMTExLjEzMyAxNDkuOTAwIEwgMTA5Ljg2NCAxNDYuMDAwIDEwNi43ODEgMTQ2LjAwMCBDIDEwMy4yNTEgMTQ2LjAwMCwxMDMuNDI0IDE0NS43OTEsMTAxLjY1MCAxNTIuMjAwIEMgMTAxLjQwNiAxNTMuMDgwLDEwMC44NDUgMTU1LjAxNSwxMDAuNDAzIDE1Ni41MDAgQyA5OS45NjIgMTU3Ljk4NSw5OS4yNjYgMTYwLjMyNSw5OC44NTcgMTYxLjcwMCBDIDk2LjgyNSAxNjguNTM5LDk2LjExOSAxNzAuNzczLDkzLjc3MCAxNzcuODAwIEMgODcuODEwIDE5NS42MjIsODcuNDAyIDE5Ni42NzcsODYuOTcyIDE5NS4zNTcgQyA4Ni44MzYgMTk0Ljk0MSw4Ni41NzQgMTk0LjE1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjIwMyAxOTMuMDUwLDg1LjQ4MSAxOTAuNzEwLDg0Ljc4NCAxODguNDAwIEMgODIuNDcyIDE4MC43NDEsODEuOTQxIDE3OS4wMDksODEuNTk1IDE3OC4wMDAgQyA4MS4yMTIgMTc2Ljg4Niw3OS4wMTggMTY5LjQ4NCw3OC4zMzMgMTY3LjAwMCBDIDc3LjgzNCAxNjUuMTkxLDc3LjIzMSAxNjMuMDc5LDc2Ljc5MSAxNjEuNjAwIEMgNzYuNjI3IDE2MS4wNTAsNzYuMjk2IDE1OS44ODAsNzYuMDU1IDE1OS4wMDAgQyA3NS4xNTIgMTU1LjcwNSw3My45MTUgMTUxLjMxMyw3My4xNTMgMTQ4LjcwMCBMIDcyLjM2NiAxNDYuMDAwIDY3Ljk4MyAxNDYuMDAwIEMgNjQuMTQxIDE0Ni4wMDAsNjMuNjAwIDE0Ni4wODMsNjMuNjAwIDE0Ni42NzMgTTE2Ni4yMDAgMTYzLjg1OSBDIDE2My40MzQgMTY0LjE2MywxNTkuNDg0IDE2NS41OTcsMTU3LjIwMCAxNjcuMTI3IEwgMTU1LjAwMCAxNjguNjAwIDE1NC44ODEgMTcxLjEwMCBDIDE1NC43MzAgMTc0LjI2MywxNTUuMjIxIDE3NC4zNDEsMTU3Ljk3MiAxNzEuNTg5IEMgMTYwLjgyMCAxNjguNzQyLDE2Mi45ODMgMTY3Ljg2NCwxNjcuMjAwIDE2Ny44NDQgQyAxNzMuNDMxIDE2Ny44MTUsMTc2LjAzMiAxNzAuNTI1LDE3Ni4xNDMgMTc3LjE2MyBMIDE3Ni4yMDAgMTgwLjYwMCAxNzQuNzU1IDE4MS4zMDYgQyAxNzMuOTYxIDE4MS42OTUsMTcwLjE4MSAxODIuNjU3LDE2Ni4zNTUgMTgzLjQ0MyBDIDE1NC4wMjkgMTg1Ljk3OCwxNTAuODM4IDE4OC44MjUsMTUxLjI4MCAxOTYuODkwIEMgMTUxLjg1MCAyMDcuMjc3LDE2NS4yMTYgMjExLjA2NywxNzQuMzA0IDIwMy40MTkgQyAxNzUuNzQzIDIwMi4yMDksMTc2LjgwMCAyMDIuMDk4LDE3Ni44MDAgMjAzLjE1OSBDIDE3Ni44MDAgMjA0LjYzOCwxNzkuNDA2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTg3LjQzNiAyMDYuNDAwLDE5MS40MjggMjAzLjU1MiwxODYuNzk3IDIwMi42ODkgQyAxODUuNjc2IDIwMi40ODEsMTg0LjY1MyAyMDEuOTY5LDE4NC4wNzkgMjAxLjMzMSBMIDE4My4xNTggMjAwLjMwNiAxODMuMjQ3IDE4Ny4yNTMgQyAxODMuMzQ2IDE3Mi44MDAsMTgzLjE1NiAxNzEuMzE2LDE4MC43OTAgMTY4LjA0OSBDIDE3OC40MTMgMTY0Ljc2OCwxNzIuNzQ1IDE2My4xNDEsMTY2LjIwMCAxNjMuODU5IE0yMDIuNjg3IDE2NC4wMzcgQyAxOTYuNzMyIDE2NS40MzksMTkzLjM4NiAxNjkuNzU4LDE5My40MzQgMTc1Ljk4MSBDIDE5My40ODQgMTgyLjU5OCwxOTYuMjQ1IDE4NS44OTgsMjAzLjI5MyAxODcuNzY1IEMgMjExLjMxMiAxODkuODg4LDIxMy45NzYgMTkyLjE2OCwyMTMuNDY2IDE5Ni40NzIgQyAyMTIuNDUwIDIwNS4wNDksMjAyLjQyNCAyMDUuNzI0LDE5NS42MzkgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTQuMjgzIDE5Ny42NzEgQyAxOTMuOTY3IDE5OC4xODIsMTkzLjM5NSAxOTkuNzYyLDE5My4wMTEgMjAxLjE4MyBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMzUxIDIwNC41OTQgQyAxOTMuOTIzIDIwNS4wNTAsMTk1LjI0OCAyMDUuNjU4LDE5Ni4yOTUgMjA1Ljk0NyBDIDE5Ny4zNDMgMjA2LjIzNSwxOTguNzIyIDIwNi42MzUsMTk5LjM2MCAyMDYuODM1IEMgMjExLjI4OSAyMTAuNTg3LDIyMy44NDggMTk4LjM4MiwyMTguNTM2IDE4OC4yMDAgQyAyMTYuOTI2IDE4NS4xMTMsMjE0LjMyMyAxODMuNjUyLDIwNi4wMDAgMTgxLjE2NCBDIDIwMS4wNjAgMTc5LjY4NywxOTkuMDAwIDE3Ny41MjksMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMyAxNjYuMzcxLDIwNy4wMjggMTY0LjYxNCwyMTMuODQ4IDE3MC41ODAgQyAyMTUuOTY4IDE3Mi40MzQsMjE2LjgwMCAxNzIuNDQwLDIxNi44MDAgMTcwLjYwMCBDIDIxNi44MDAgMTcwLjEzOCwyMTYuOTYxIDE2OS41ODksMjE3LjE1OCAxNjkuMzgwIEMgMjE3LjM1NSAxNjkuMTcxLDIxNy42NDAgMTY4LjQxMiwyMTcuNzkxIDE2Ny42OTMgQyAyMTguMzc2IDE2NC45MTYsMjA4Ljc5OSAxNjIuNTk3LDIwMi42ODcgMTY0LjAzNyBNMjQwLjQwMCAxNjMuODg1IEMgMjI3LjI3MSAxNjYuMTg5LDIyMC4zOTYgMTgyLjc3NCwyMjYuOTI1IDE5Ni4zOTEgQyAyMzEuOTg4IDIwNi45NDgsMjQ2LjM5MSAyMTAuNDA3LDI1OC4wMDAgMjAzLjg1MyBDIDI2MC40OTYgMjAyLjQ0NCwyNjAuODAwIDIwMi4wMjIsMjYwLjgwMCAxOTkuOTYyIEMgMjYwLjgwMCAxOTcuNDMxLDI2MC40MDQgMTk3LjI5NiwyNTguMTE5IDE5OS4wNDkgQyAyNDYuNTkwIDIwNy44OTQsMjMyLjgwMCAyMDEuNjUxLDIzMi44MDAgMTg3LjU4NSBMIDIzMi44MDAgMTg1LjIxMCAyNDcuNzAwIDE4NS4xMDUgTCAyNjIuNjAwIDE4NS4wMDAgMjYyLjcyMiAxODIuNjE4IEMgMjYzLjM5MSAxNjkuNjA2LDI1My43NzYgMTYxLjUzNiwyNDAuNDAwIDE2My44ODUgTTMzMy44MDAgMTYzLjg0NyBDIDMyNi45NDIgMTY0LjUzNywzMjIuMDAwIDE2Ny42OTMsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNzQuMjQwLDMyMi42OTMgMTc0LjMwNywzMjUuMTkxIDE3MS42ODggQyAzMzAuOTQ1IDE2NS42NTUsMzQwLjg2MSAxNjYuNDk2LDM0Mi45NjYgMTczLjE5NSBDIDM0NS4yMTMgMTgwLjM0OCwzNDQuNDU0IDE4MS4yNzcsMzM0LjgwMCAxODMuMTg2IEMgMzIxLjU2MyAxODUuODAzLDMxOC41OTYgMTg4LjIzMiwzMTguNjYwIDE5Ni40MDAgQyAzMTguNzQzIDIwNi44NjgsMzMwLjYwNyAyMTAuOTIyLDM0MC44MzUgMjAzLjk3NiBDIDM0My42MjMgMjAyLjA4MywzNDMuNzY2IDIwMi4wNjgsMzQ0LjQwNCAyMDMuNjEwIEMgMzQ1LjEyNyAyMDUuMzU0LDM0Ni43OTcgMjA2LjQwMCwzNDguODYyIDIwNi40MDEgQyAzNTQuNzE1IDIwNi40MDUsMzU4LjYzOCAyMDMuNTYyLDM1NC4wMDAgMjAyLjY3OCBDIDM1MC40NTkgMjAyLjAwNCwzNTAuNjAwIDIwMi42NDgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAxNzEuNTk0LDM1MC40NjkgMTcwLjc1NCwzNDcuNTIwIDE2Ny40MDQgQyAzNDUuMDYwIDE2NC42MTAsMzM5Ljc5MSAxNjMuMjQ0LDMzMy44MDAgMTYzLjg0NyBNMjQ3Ljg5NiAxNjcuNDA2IEMgMjUyLjAwMyAxNjguNjI2LDI1NS40NDcgMTc0LjM2NSwyNTUuMTI0IDE3OS40NTEgTCAyNTUuMDAwIDE4MS40MDAgMjQzLjkwMCAxODEuNTA2IEwgMjMyLjgwMCAxODEuNjEzIDIzMi44MDAgMTgwLjYyNiBDIDIzMi44MDAgMTcxLjkwMiwyNDAuNDU3IDE2NS4xOTcsMjQ3Ljg5NiAxNjcuNDA2IE0yOTQuMjk1IDE2OC41NDMgQyAzMDEuNTMzIDE3Mi4zMDAsMzA0LjAxNiAxODYuMjUzLDI5OS4yNTcgMTk2LjQyNyBDIDI5NS4zNDQgMjA0Ljc5MywyODQuMDQ0IDIwNS42MjcsMjc5LjU5OSAxOTcuODc4IEMgMjc0LjMzNiAxODguNzAyLDI3Ni44NjggMTcyLjc0OSwyODQuMTk3IDE2OC45MDYgQyAyODcuMDEyIDE2Ny40MzEsMjkxLjgxOSAxNjcuMjU4LDI5NC4yOTUgMTY4LjU0MyBNMTc2LjE5NyAxOTEuMjA4IEMgMTc2LjE5NCAxOTguMzI0LDE3Ni4wNTcgMTk4LjcxMCwxNzIuNzgyIDIwMC44MTEgQyAxNjYuMjM1IDIwNS4wMTMsMTU5Ljk5OSAyMDIuOTk5LDE1OS4wMDMgMTk2LjM2MiBDIDE1OC4xNDIgMTkwLjYxNSwxNjEuMzg0IDE4Ny44NTEsMTcxLjYwMCAxODUuNjI0IEMgMTc2LjYwMSAxODQuNTM0LDE3Ni4yMDAgMTg0LjA0NywxNzYuMTk3IDE5MS4yMDggTTM0My41MDQgMTkxLjAwNSBDIDM0My42MjYgMTk4LjAyOCwzNDMuNDI1IDE5OC41ODYsMzM5Ljk1MCAyMDAuODY3IEMgMzM0LjAwMiAyMDQuNzcxLDMyNy42NDQgMjAyLjk5NCwzMjYuNDE4IDE5Ny4wODUgQyAzMjUuMjYzIDE5MS41MjEsMzI4LjAyMiAxODguMzM0LDMzNS42MDAgMTg2LjQ4MCBDIDM0NC4zNzUgMTg0LjMzNCwzNDMuMzc4IDE4My43NjMsMzQzLjUwNCAxOTEuMDA1IE0xNTcuNjc5IDIxOS40NTAgQyAxNTMuMzc1IDIyMS42MzQsMTU1LjA0OSAyMjguMDAwLDE1OS45MjcgMjI4LjAwMCBDIDE2NS43MzMgMjI4LjAwMCwxNjYuMzM0IDIxOS44MzcsMTYwLjU5MCAyMTkuMDA5IEMgMTU5LjUwOSAyMTguODUzLDE1OC41NzcgMjE4Ljk5NSwxNTcuNjc5IDIxOS40NTAgTTEwMi44ODIgMjIyLjY5NyBMIDEwMy4wMDAgMjI1LjQwMCAxMDQuNDAwIDIyNS4zMDAgQyAxMDUuMTcwIDIyNS4yNDYsMTA5LjI4MiAyMjUuMDg5LDExMy41MzggMjI0Ljk1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMjEuMTUyIDI1Mi40NTIgTCAxMjEuMDI5IDI4MC4yMDAgMTI1LjExNCAyODAuMzE0IEMgMTI4LjIyMyAyODAuNDAxLDEyOS4yMDcgMjgwLjMwNSwxMjkuMjMwIDI3OS45MTQgQyAxMjkuMjQ2IDI3OS42MzEsMTI5LjIzMyAyNjcuNzY3LDEyOS4yMDIgMjUzLjU0OSBDIDEyOS4xNzEgMjM5LjMzMSwxMjkuMjcyIDIyNy4wMjUsMTI5LjQyNiAyMjYuMjAyIEwgMTI5LjcwNyAyMjQuNzA2IDEzNy4xNTMgMjI0Ljk1NSBDIDE0MS4yNDkgMjI1LjA5MSwxNDUuMjMwIDIyNS4yNDcsMTQ2LjAwMCAyMjUuMzAyIEwgMTQ3LjQwMCAyMjUuNDAwIDE0Ny40MDAgMjIyLjgwMCBMIDE0Ny40MDAgMjIwLjIwMCAxMjUuMDgyIDIyMC4wOTcgTCAxMDIuNzYzIDIxOS45OTMgMTAyLjg4MiAyMjIuNjk3IE0xOTQuNDAwIDIzOC4xMjQgQyAxOTEuNDc4IDIzOC45NzAsMTg5LjgxOSAyMzkuOTI2LDE4Ny4yNzUgMjQyLjIyOCBDIDE4NC4zMDcgMjQ0LjkxMywxODQuNDAxIDI0NC45MjQsMTg0LjM5NCAyNDEuOTAwIEMgMTg0LjM4NiAyMzguNjMxLDE4NC4zMzAgMjM4LjU4MiwxODAuNjU1IDIzOC41OTYgTCAxNzcuNTExIDIzOC42MDggMTc3LjQ1NSAyNTkuNTA0IEwgMTc3LjQwMCAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE4NC43NjkgMjgwLjQwMCAxODQuNzEwIDI2Ny4zMDAgQyAxODQuNjIwIDI0Ny4zNTcsMTg2LjQwMCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDIwMi43NTggMjQzLjIwMCwyMDQuNTMzIDI0Ny45MDQsMjAzLjY1OSAyNjYuMDY0IEMgMjAzLjQwMiAyNzEuNDE5LDIwMy4xOTMgMjc2LjgzNSwyMDMuMTk2IDI3OC4xMDAgTCAyMDMuMjAwIDI4MC40MDAgMjA2LjgwMCAyODAuNDAwIEMgMjA5LjM4NyAyODAuNDAwLDIxMC40MTQgMjgwLjI1OSwyMTAuNDUwIDI3OS45MDAgQyAyMTAuNDc4IDI3OS42MjUsMjEwLjQ2MSAyNzUuMjYwLDIxMC40MTIgMjcwLjIwMCBDIDIxMC4yMDkgMjQ4Ljk0NiwyMTIuNDA1IDI0My4wOTYsMjIwLjYwMCAyNDMuMDYwIEMgMjIzLjg4MiAyNDMuMDQ1LDIyNi4xODAgMjQ0LjAyNCwyMjcuNzI3IDI0Ni4wOTYgQyAyMjkuNzMzIDI0OC43ODIsMjI5LjgwNiAyNDkuNDk1LDIyOS43MTQgMjY1LjUxNSBMIDIyOS42MjkgMjgwLjQzMCAyMzMuMjU3IDI4MC4zMTUgTCAyMzYuODg2IDI4MC4yMDAgMjM2LjkxMiAyNjQuMDAwIEMgMjM2LjkzNyAyNDguMTkyLDIzNi45MTYgMjQ3Ljc0NSwyMzYuMDUyIDI0NS41MzAgQyAyMzIuMjc5IDIzNS44NzEsMjE4LjA1MCAyMzQuOTYzLDIxMS40MDAgMjQzLjk1OCBDIDIwOS45NDAgMjQ1LjkzMywyMDkuODU0IDI0NS45NDQsMjA5LjA1MCAyNDQuMjQ5IEMgMjA2LjcwOSAyMzkuMzE1LDE5OS45OTEgMjM2LjUwNiwxOTQuNDAwIDIzOC4xMjQgTTI2MS4yODMgMjM4LjIxMCBDIDI0MS4yNTIgMjQyLjU2MCwyNDAuNjgyIDI3NC40MDYsMjYwLjUyNyAyODAuNDQyIEMgMjY4Ljg2NCAyODIuOTc3LDI4MS41MzMgMjc5LjQwMSwyODIuMTMyIDI3NC4zNDQgQyAyODIuNDY3IDI3MS41MTcsMjgyLjAwNyAyNzEuMTg5LDI4MC4wNTIgMjcyLjg2MiBDIDI2OS4yMjAgMjgyLjEzNCwyNTUuNjg0IDI3Ni42NDcsMjU0LjI0NCAyNjIuNDAwIEMgMjUzLjkwMCAyNTguOTk1LDI1Mi44NDkgMjU5LjIyMywyNjkuNDIxIDI1OS4xMDUgTCAyODQuMjAwIDI1OS4wMDAgMjg0LjMzNiAyNTcuMDAwIEMgMjg1LjIzMSAyNDMuODI4LDI3NC43NTEgMjM1LjI4NiwyNjEuMjgzIDIzOC4yMTAgTTE1Ni4zODAgMjM4Ljc5MyBDIDE1Ni4zNjkgMjM4LjkwNywxNTYuMzQzIDI0OC4yNzAsMTU2LjMyMiAyNTkuNjAwIEwgMTU2LjI4NSAyODAuMjAwIDE1OS44NzYgMjgwLjMxNCBMIDE2My40NjcgMjgwLjQyOCAxNjMuNDM0IDI1OS41MzEgTCAxNjMuNDAwIDIzOC42MzMgMTU5LjkwMCAyMzguNjA5IEMgMTU3Ljk3NSAyMzguNTk2LDE1Ni4zOTEgMjM4LjY3OCwxNTYuMzgwIDIzOC43OTMgTTI2OS4xNjQgMjQxLjQyNiBDIDI3My40MDggMjQyLjY4NywyNzYuMjYzIDI0Ny4wNzcsMjc2LjQ5MCAyNTIuNjg5IEwgMjc2LjYwMCAyNTUuNDAwIDI2NS41MDAgMjU1LjUwNiBMIDI1NC40MDAgMjU1LjYxMyAyNTQuNDA1IDI1NC41MDYgQyAyNTQuNDQxIDI0NS45NzUsMjYxLjk4MSAyMzkuMjkzLDI2OS4xNjQgMjQxLjQyNiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2Y4ZjVmNSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggaWQ9InBhdGgxIiBkPSJNMTc2LjIwMCAyMi43MDAgQyAxNjMuNzg2IDM1LjE4NSwxNTEuODIzIDQ3LjIwMCwxNDkuNjE2IDQ5LjQwMCBDIDE0NC4zMzggNTQuNjYxLDU0LjM1MCAxNDQuNjUzLDQ5LjMwNCAxNDkuNzE3IEMgNDcuMTU3IDE1MS44NzIsMzUuMTg1IDE2My43ODksMjIuNzAwIDE3Ni4yMDEgQyAyLjU3OCAxOTYuMjA0LDAuMDAwIDE5OC45MDYsMC4wMDAgMTk5Ljk4OSBDIDAuMDAwIDIwMS4wNzAsMi4xNTMgMjAzLjM0MiwxOC42ODAgMjE5LjcwNiBDIDI4Ljk1NCAyMjkuODc4LDQ3LjgwOSAyNDguNzEyLDYwLjU4MCAyNjEuNTYwIEMgODkuODg4IDI5MS4wNDUsMTA4Ljk1NSAzMTAuMTEyLDEzOC40NDAgMzM5LjQyMCBDIDE1MS4yODggMzUyLjE5MSwxNzAuMTIyIDM3MS4wNDYsMTgwLjI5NCAzODEuMzIwIEMgMTk2LjU0MyAzOTcuNzMyLDE5OC45MzUgNDAwLjAwMCwxOTkuOTk0IDQwMC4wMDAgQyAyMDEuMDU0IDQwMC4wMDAsMjA0LjEzMiAzOTcuMDU3LDIyNS43NTkgMzc1LjM2MCBDIDIzOS4yNjcgMzYxLjgwOCwyNTAuNTAwIDM1MC41NDAsMjUwLjcyMCAzNTAuMzIwIEMgMjUxLjI0MyAzNDkuNzk3LDM0OS42NTkgMjUxLjM4MSwzNTAuMjYwIDI1MC43ODAgQyAzNTAuNTEzIDI1MC41MjcsMzYxLjgwOCAyMzkuMjY3LDM3NS4zNjAgMjI1Ljc1OSBDIDM5Ny4wMjcgMjA0LjE2Miw0MDAuMDAwIDIwMS4wNTMsNDAwLjAwMCAxOTkuOTk3IEMgNDAwLjAwMCAxOTguOTQwLDM5Ny4xMTMgMTk1LjkyMCwzNzYuMTAwIDE3NC45OTQgQyAzNjIuOTU1IDE2MS45MDMsMzUxLjY2MCAxNTAuNjUwLDM1MS4wMDAgMTQ5Ljk4OCBDIDM1MC4zNDAgMTQ5LjMyNSwzMjcuNzUwIDEyNi43MzMsMzAwLjgwMCA5OS43ODIgQyAyNzMuODUwIDcyLjgzMiwyNTEuNDY1IDUwLjQ0NiwyNTEuMDU1IDUwLjAzNSBDIDI1MC42NDYgNDkuNjI1LDIzOS4yNjAgMzguMTk5LDIyNS43NTUgMjQuNjQ1IEMgMjA0LjA1NSAyLjg2NywyMDEuMDU3IDAuMDAwLDE5OS45ODUgMC4wMDAgQyAxOTguOTE0IDAuMDAwLDE5Ni4xMzYgMi42NTEsMTc2LjIwMCAyMi43MDAgTTMwOS4yMDAgMTcyLjgyNSBDIDMwOS4zMTAgMTkwLjc0MSwzMDkuMzQyIDIwNS42MDksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjE4MyAyMDYuMTc5LDMwNy45NjQgMjA2LjMwOCwzMDUuNDcxIDIwNi4yNjQgTCAzMDEuODAwIDIwNi4yMDAgMzAxLjc4NSAyMDMuMDAwIEMgMzAxLjc3MSAxOTkuOTk3LDMwMS4wNTQgMTk4LjY3NSwzMDAuNDQ2IDIwMC41MzAgQyAyOTkuMDEyIDIwNC45MDEsMjg4LjgxNSAyMDguMzQyLDI4Mi4zMjAgMjA2LjY0NyBDIDI2NC43NjcgMjAyLjA2NywyNjQuMzc5IDE3MC42NjIsMjgxLjgwMCAxNjQuNTQyIEMgMjg3LjU4NSAxNjIuNTA5LDI5NS40MzkgMTY0LjE2NywyOTkuMTYyIDE2OC4yMDUgQyAzMDEuNzg0IDE3MS4wNTAsMzAxLjc1OSAxNzEuMTk0LDMwMS40NjIgMTU0Ljk3MSBDIDMwMS4yODYgMTQ1LjMzNCwzMDEuMzMyIDE0MC40MjMsMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjgyMiAxNDAuMjYwLDMwMy41NzggMTQwLjIxMSwzMDUuNTAyIDE0MC4yMjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA5LjIwMCAxNzIuODI1IE03My4xNTMgMTQ4LjcwMCBDIDczLjkxNSAxNTEuMzEzLDc1LjE1MiAxNTUuNzA1LDc2LjA1NSAxNTkuMDAwIEMgNzYuMjk2IDE1OS44ODAsNzYuNjI3IDE2MS4wNTAsNzYuNzkxIDE2MS42MDAgQyA3Ny4yMzEgMTYzLjA3OSw3Ny44MzQgMTY1LjE5MSw3OC4zMzMgMTY3LjAwMCBDIDc5LjAxOCAxNjkuNDg0LDgxLjIxMiAxNzYuODg2LDgxLjU5NSAxNzguMDAwIEMgODEuOTQxIDE3OS4wMDksODIuNDcyIDE4MC43NDEsODQuNzg0IDE4OC40MDAgQyA4NS40ODEgMTkwLjcxMCw4Ni4yMDMgMTkzLjA1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjU3NCAxOTQuMTUwLDg2LjgzNiAxOTQuOTQxLDg2Ljk3MiAxOTUuMzU3IEMgODcuNDAyIDE5Ni42NzcsODcuODEwIDE5NS42MjIsOTMuNzcwIDE3Ny44MDAgQyA5Ni4xMTkgMTcwLjc3Myw5Ni44MjUgMTY4LjUzOSw5OC44NTcgMTYxLjcwMCBDIDk5LjI2NiAxNjAuMzI1LDk5Ljk2MiAxNTcuOTg1LDEwMC40MDMgMTU2LjUwMCBDIDEwMC44NDUgMTU1LjAxNSwxMDEuNDA2IDE1My4wODAsMTAxLjY1MCAxNTIuMjAwIEMgMTAzLjQyNCAxNDUuNzkxLDEwMy4yNTEgMTQ2LjAwMCwxMDYuNzgxIDE0Ni4wMDAgTCAxMDkuODY0IDE0Ni4wMDAgMTExLjEzMyAxNDkuOTAwIEMgMTExLjgzMCAxNTIuMDQ1LDExMi45NjMgMTU1LjYwMCwxMTMuNjUwIDE1Ny44MDAgQyAxMTYuMDE4IDE2NS4zODMsMTI1LjkzNiAxOTQuODM4LDEyNi4yMjYgMTk1LjE1MCBDIDEyNi41MDYgMTk1LjQ0OSwxMjcuNjE5IDE5Mi40MDAsMTMwLjczNyAxODIuODAwIEMgMTMzLjQ3MCAxNzQuMzg1LDEzNC43NzYgMTcwLjA3NiwxMzYuODAwIDE2Mi44MDAgQyAxMzguMTM5IDE1Ny45ODUsMTM5LjYzNiAxNTIuNTI1LDE0MC40NDcgMTQ5LjUwMCBMIDE0MS4zODUgMTQ2LjAwMCAxNDQuNTM4IDE0Ni4wMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ3LjQ4NiAxNDcuMTAwIEMgMTQ3LjM3MyAxNDcuNzA1LDE0Mi44OTMgMTYxLjI1MCwxMzcuNTMwIDE3Ny4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTI0LjQwNSAyMDYuMjAwIEwgMTIxLjAzMSAyMDYuMjAwIDEyMC4zNzEgMjA0LjIwMCBDIDEyMC4wMDkgMjAzLjEwMCwxMTkuMzI3IDIwMC45NDAsMTE4Ljg1NiAxOTkuNDAwIEMgMTE1Ljk3MiAxODkuOTczLDExMC40MTggMTczLjA4MiwxMDcuMjE5IDE2NC4wMDkgQyAxMDYuMzI4IDE2MS40ODQsMTA1LjYwMCAxNTkuMzY5LDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU3LjAwMywxMDMuMzQwIDE2My4wMTIsOTYuNzk4IDE4Mi43MDkgTCA4OC45OTYgMjA2LjIwMCA4NS42NTMgMjA2LjIwMCBMIDgyLjMxMSAyMDYuMjAwIDgxLjc4OCAyMDQuODAwIEMgODEuNTAxIDIwNC4wMzAsODAuOTEwIDIwMi4yMzAsODAuNDc1IDIwMC44MDAgQyA4MC4wNDAgMTk5LjM3MCw3OS4xMTAgMTk2LjMxMCw3OC40MDkgMTk0LjAwMCBDIDc3LjcwNyAxOTEuNjkwLDc2LjgxMCAxODguODEwLDc2LjQxNSAxODcuNjAwIEMgNzYuMDIxIDE4Ni4zOTAsNzUuMjk3IDE4NC4wNTAsNzQuODA2IDE4Mi40MDAgQyA3My43MzUgMTc4Ljc5Myw3MS44MDQgMTcyLjYyNyw3MC43OTkgMTY5LjYwMCBDIDcwLjM5NyAxNjguMzkwLDY4Ljk2MCAxNjMuODkwLDY3LjYwNSAxNTkuNjAwIEMgNjYuMjUxIDE1NS4zMTAsNjQuNzk1IDE1MC43OTgsNjQuMzcxIDE0OS41NzMgQyA2My4wOTEgMTQ1Ljg3Niw2Mi45NjYgMTQ2LjAwMCw2Ny45ODMgMTQ2LjAwMCBMIDcyLjM2NiAxNDYuMDAwIDczLjE1MyAxNDguNzAwIE0xNzUuNjAwIDE2NC41MTggQyAxODIuNTkwIDE2Ny4wNzIsMTgzLjM2OSAxNjkuMzg4LDE4My4yNDcgMTg3LjI1MyBMIDE4My4xNTggMjAwLjMwNiAxODQuMDc5IDIwMS4zMzEgQyAxODQuNjUzIDIwMS45NjksMTg1LjY3NiAyMDIuNDgxLDE4Ni43OTcgMjAyLjY4OSBDIDE5MS40MjggMjAzLjU1MiwxODcuNDM2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTc5LjQwNiAyMDYuNDAwLDE3Ni44MDAgMjA0LjYzOCwxNzYuODAwIDIwMy4xNTkgQyAxNzYuODAwIDIwMi4wOTgsMTc1Ljc0MyAyMDIuMjA5LDE3NC4zMDQgMjAzLjQxOSBDIDE2NS4yMTYgMjExLjA2NywxNTEuODUwIDIwNy4yNzcsMTUxLjI4MCAxOTYuODkwIEMgMTUwLjgzOCAxODguODI1LDE1NC4wMjkgMTg1Ljk3OCwxNjYuMzU1IDE4My40NDMgQyAxNzAuMTgxIDE4Mi42NTcsMTczLjk2MSAxODEuNjk1LDE3NC43NTUgMTgxLjMwNiBMIDE3Ni4yMDAgMTgwLjYwMCAxNzYuMTQzIDE3Ny4xNjMgQyAxNzYuMDMyIDE3MC41MjUsMTczLjQzMSAxNjcuODE1LDE2Ny4yMDAgMTY3Ljg0NCBDIDE2Mi45ODMgMTY3Ljg2NCwxNjAuODIwIDE2OC43NDIsMTU3Ljk3MiAxNzEuNTg5IEMgMTU1LjIyMSAxNzQuMzQxLDE1NC43MzAgMTc0LjI2MywxNTQuODgxIDE3MS4xMDAgTCAxNTUuMDAwIDE2OC42MDAgMTU3LjIwMCAxNjcuMTI3IEMgMTYxLjkwNyAxNjMuOTc0LDE3MC42OTkgMTYyLjcyOCwxNzUuNjAwIDE2NC41MTggTTIxMS4zMjggMTYzLjk4NiBDIDIxNi44MDAgMTY0Ljg4MiwyMTkuMjU1IDE2Ny4xNTQsMjE3LjE1OCAxNjkuMzgwIEMgMjE2Ljk2MSAxNjkuNTg5LDIxNi44MDAgMTcwLjEzOCwyMTYuODAwIDE3MC42MDAgQyAyMTYuODAwIDE3Mi40NDAsMjE1Ljk2OCAxNzIuNDM0LDIxMy44NDggMTcwLjU4MCBDIDIwNy4wMjggMTY0LjYxNCwxOTkuMDAzIDE2Ni4zNzEsMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMCAxNzcuNTI5LDIwMS4wNjAgMTc5LjY4NywyMDYuMDAwIDE4MS4xNjQgQyAyMTQuMzIzIDE4My42NTIsMjE2LjkyNiAxODUuMTEzLDIxOC41MzYgMTg4LjIwMCBDIDIyMy44NDggMTk4LjM4MiwyMTEuMjg5IDIxMC41ODcsMTk5LjM2MCAyMDYuODM1IEMgMTk4LjcyMiAyMDYuNjM1LDE5Ny4zNDMgMjA2LjIzNSwxOTYuMjk1IDIwNS45NDcgQyAxOTUuMjQ4IDIwNS42NTgsMTkzLjkyMyAyMDUuMDUwLDE5My4zNTEgMjA0LjU5NCBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMDExIDIwMS4xODMgQyAxOTMuMzk1IDE5OS43NjIsMTkzLjk2NyAxOTguMTgyLDE5NC4yODMgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTUuNjM5IDE5Ny42NzEgQyAyMDIuNDI0IDIwNS43MjQsMjEyLjQ1MCAyMDUuMDQ5LDIxMy40NjYgMTk2LjQ3MiBDIDIxMy45NzYgMTkyLjE2OCwyMTEuMzEyIDE4OS44ODgsMjAzLjI5MyAxODcuNzY1IEMgMTk2LjI0NSAxODUuODk4LDE5My40ODQgMTgyLjU5OCwxOTMuNDM0IDE3NS45ODEgQyAxOTMuMzY1IDE2Ni45NDAsMjAwLjQzMyAxNjIuMjAyLDIxMS4zMjggMTYzLjk4NiBNMjUwLjUyOCAxNjQuMTk4IEMgMjU4LjUzMyAxNjYuMjgzLDI2My4yMDAgMTczLjMzMiwyNjIuNzIyIDE4Mi42MTggTCAyNjIuNjAwIDE4NS4wMDAgMjQ3LjcwMCAxODUuMTA1IEwgMjMyLjgwMCAxODUuMjEwIDIzMi44MDAgMTg3LjU4NSBDIDIzMi44MDAgMjAxLjY1MSwyNDYuNTkwIDIwNy44OTQsMjU4LjExOSAxOTkuMDQ5IEMgMjYwLjQwNCAxOTcuMjk2LDI2MC44MDAgMTk3LjQzMSwyNjAuODAwIDE5OS45NjIgQyAyNjAuODAwIDIwMi4zNjMsMjU5LjYyNiAyMDMuNDIxLDI1NC44MDAgMjA1LjM3MCBDIDIzNi42NzAgMjEyLjY5MiwyMjAuMTg3IDE5Ny42MTIsMjI1LjMyMiAxNzguNDAwIEMgMjI4LjI4MyAxNjcuMzE5LDIzOS4xMDQgMTYxLjIyMiwyNTAuNTI4IDE2NC4xOTggTTM0My44MDAgMTY0LjgzNCBDIDM0OS44MDAgMTY3LjA3OSwzNTAuNjAwIDE2OS42OTgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAyMDIuNjQ4LDM1MC40NTkgMjAyLjAwNCwzNTQuMDAwIDIwMi42NzggQyAzNTguNjM4IDIwMy41NjIsMzU0LjcxNSAyMDYuNDA1LDM0OC44NjIgMjA2LjQwMSBDIDM0Ni43OTcgMjA2LjQwMCwzNDUuMTI3IDIwNS4zNTQsMzQ0LjQwNCAyMDMuNjEwIEMgMzQzLjc2NiAyMDIuMDY4LDM0My42MjMgMjAyLjA4MywzNDAuODM1IDIwMy45NzYgQyAzMzAuNjA3IDIxMC45MjIsMzE4Ljc0MyAyMDYuODY4LDMxOC42NjAgMTk2LjQwMCBDIDMxOC41OTYgMTg4LjIzMiwzMjEuNTYzIDE4NS44MDMsMzM0LjgwMCAxODMuMTg2IEMgMzQ0LjQ1NCAxODEuMjc3LDM0NS4yMTMgMTgwLjM0OCwzNDIuOTY2IDE3My4xOTUgQyAzNDAuODYxIDE2Ni40OTYsMzMwLjk0NSAxNjUuNjU1LDMyNS4xOTEgMTcxLjY4OCBDIDMyMi42OTMgMTc0LjMwNywzMjIuMDAwIDE3NC4yNDAsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNjUuNTI2LDMzNS4xMjAgMTYxLjU4NywzNDMuODAwIDE2NC44MzQgTTI0MS45OTcgMTY3LjE3NCBDIDIzNy4xNTcgMTY4LjY0NiwyMzIuODAwIDE3NS4wMTgsMjMyLjgwMCAxODAuNjI2IEwgMjMyLjgwMCAxODEuNjEzIDI0My45MDAgMTgxLjUwNiBMIDI1NS4wMDAgMTgxLjQwMCAyNTUuMTI0IDE3OS40NTEgQyAyNTUuNjIxIDE3MS42MzQsMjQ4LjY3OSAxNjUuMTQxLDI0MS45OTcgMTY3LjE3NCBNMjg2LjM5NyAxNjcuOTUwIEMgMjc0LjAyNSAxNzIuMDA3LDI3My4yMzQgMTk3LjUwNCwyODUuMzE5IDIwMi43MTcgQyAyODguODE0IDIwNC4yMjUsMjk0LjM0NyAyMDIuNzA5LDI5Ny4zMTQgMTk5LjQzMSBDIDMwMy4xMTAgMTkzLjAyNiwzMDIuOTMzIDE3NS42NjMsMjk3LjAxOCAxNzAuNDcwIEMgMjk0LjI1MiAxNjguMDQxLDI4OS41MzQgMTY2LjkyMSwyODYuMzk3IDE2Ny45NTAgTTE3MS42MDAgMTg1LjYyNCBDIDE2MS4zODQgMTg3Ljg1MSwxNTguMTQyIDE5MC42MTUsMTU5LjAwMyAxOTYuMzYyIEMgMTU5Ljk5OSAyMDIuOTk5LDE2Ni4yMzUgMjA1LjAxMywxNzIuNzgyIDIwMC44MTEgQyAxNzYuMDU3IDE5OC43MTAsMTc2LjE5NCAxOTguMzI0LDE3Ni4xOTcgMTkxLjIwOCBDIDE3Ni4yMDAgMTg0LjA0NywxNzYuNjAxIDE4NC41MzQsMTcxLjYwMCAxODUuNjI0IE0zNDAuNjAwIDE4NS4yNjEgQyAzMzMuNjAyIDE4Ni45NTUsMzMyLjAyMSAxODcuNDAyLDMzMC43MjQgMTg4LjA1MiBDIDMyMi4xNTEgMTkyLjM0OSwzMjYuNjM0IDIwNS4wMjAsMzM1LjkyMSAyMDIuNzM5IEMgMzQyLjAxNiAyMDEuMjQzLDM0My42MzkgMTk4LjczMiwzNDMuNTA0IDE5MS4wMDUgQyAzNDMuMzg5IDE4NC4zNDksMzQzLjQ5NSAxODQuNTYxLDM0MC42MDAgMTg1LjI2MSBNMTYyLjk0NSAyMTkuOTE5IEMgMTY2LjI1OCAyMjIuODY2LDE2NC4zNDEgMjI4LjAwMCwxNTkuOTI3IDIyOC4wMDAgQyAxNTUuMDQ5IDIyOC4wMDAsMTUzLjM3NSAyMjEuNjM0LDE1Ny42NzkgMjE5LjQ1MCBDIDE1OS4yNDMgMjE4LjY1NywxNjEuNzc5IDIxOC44ODMsMTYyLjk0NSAyMTkuOTE5IE0xNDcuNDAwIDIyMi44MDAgTCAxNDcuNDAwIDIyNS40MDAgMTQ2LjAwMCAyMjUuMzAyIEMgMTQ1LjIzMCAyMjUuMjQ3LDE0MS4yNDkgMjI1LjA5MSwxMzcuMTUzIDIyNC45NTUgTCAxMjkuNzA3IDIyNC43MDYgMTI5LjQyNiAyMjYuMjAyIEMgMTI5LjI3MiAyMjcuMDI1LDEyOS4xNzEgMjM5LjMzMSwxMjkuMjAyIDI1My41NDkgQyAxMjkuMjMzIDI2Ny43NjcsMTI5LjI0NiAyNzkuNjMxLDEyOS4yMzAgMjc5LjkxNCBDIDEyOS4yMDcgMjgwLjMwNSwxMjguMjIzIDI4MC40MDEsMTI1LjExNCAyODAuMzE0IEwgMTIxLjAyOSAyODAuMjAwIDEyMS4xNTIgMjUyLjQ1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMTMuNTM4IDIyNC45NTIgQyAxMDkuMjgyIDIyNS4wODksMTA1LjE3MCAyMjUuMjQ2LDEwNC40MDAgMjI1LjMwMCBMIDEwMy4wMDAgMjI1LjQwMCAxMDIuODgyIDIyMi42OTcgTCAxMDIuNzYzIDIxOS45OTMgMTI1LjA4MiAyMjAuMDk3IEwgMTQ3LjQwMCAyMjAuMjAwIDE0Ny40MDAgMjIyLjgwMCBNMjAzLjc0MiAyMzkuMDEwIEMgMjA2LjAyOCAyNDAuMTc2LDIwOC4wNzcgMjQyLjE5OSwyMDkuMDUwIDI0NC4yNDkgQyAyMDkuODU0IDI0NS45NDQsMjA5Ljk0MCAyNDUuOTMzLDIxMS40MDAgMjQzLjk1OCBDIDIxOC4wNTAgMjM0Ljk2MywyMzIuMjc5IDIzNS44NzEsMjM2LjA1MiAyNDUuNTMwIEMgMjM2LjkxNiAyNDcuNzQ1LDIzNi45MzcgMjQ4LjE5MiwyMzYuOTEyIDI2NC4wMDAgTCAyMzYuODg2IDI4MC4yMDAgMjMzLjI1NyAyODAuMzE1IEwgMjI5LjYyOSAyODAuNDMwIDIyOS43MTQgMjY1LjUxNSBDIDIyOS44MDYgMjQ5LjQ5NSwyMjkuNzMzIDI0OC43ODIsMjI3LjcyNyAyNDYuMDk2IEMgMjI2LjE4MCAyNDQuMDI0LDIyMy44ODIgMjQzLjA0NSwyMjAuNjAwIDI0My4wNjAgQyAyMTIuNDA1IDI0My4wOTYsMjEwLjIwOSAyNDguOTQ2LDIxMC40MTIgMjcwLjIwMCBDIDIxMC40NjEgMjc1LjI2MCwyMTAuNDc4IDI3OS42MjUsMjEwLjQ1MCAyNzkuOTAwIEMgMjEwLjQxNCAyODAuMjU5LDIwOS4zODcgMjgwLjQwMCwyMDYuODAwIDI4MC40MDAgTCAyMDMuMjAwIDI4MC40MDAgMjAzLjE5NiAyNzguMTAwIEMgMjAzLjE5MyAyNzYuODM1LDIwMy40MDIgMjcxLjQxOSwyMDMuNjU5IDI2Ni4wNjQgQyAyMDQuNTMzIDI0Ny45MDQsMjAyLjc1OCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDE4Ni40MDAgMjQzLjIwMCwxODQuNjIwIDI0Ny4zNTcsMTg0LjcxMCAyNjcuMzAwIEwgMTg0Ljc2OSAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE3Ny40MDAgMjgwLjQwMCAxNzcuNDU1IDI1OS41MDQgTCAxNzcuNTExIDIzOC42MDggMTgwLjY1NSAyMzguNTk2IEMgMTg0LjMzMCAyMzguNTgyLDE4NC4zODYgMjM4LjYzMSwxODQuMzk0IDI0MS45MDAgQyAxODQuNDAxIDI0NC45MjQsMTg0LjMwNyAyNDQuOTEzLDE4Ny4yNzUgMjQyLjIyOCBDIDE5Mi4zNzggMjM3LjYwOSwxOTguNjEwIDIzNi4zOTIsMjAzLjc0MiAyMzkuMDEwIE0yNzEuNTY1IDIzOC4yMTcgQyAyNzkuNzA5IDI0MC4xMzYsMjg0Ljk1OCAyNDcuODU1LDI4NC4zMzYgMjU3LjAwMCBMIDI4NC4yMDAgMjU5LjAwMCAyNjkuNDIxIDI1OS4xMDUgQyAyNTIuODQ5IDI1OS4yMjMsMjUzLjkwMCAyNTguOTk1LDI1NC4yNDQgMjYyLjQwMCBDIDI1NS42ODQgMjc2LjY0NywyNjkuMjIwIDI4Mi4xMzQsMjgwLjA1MiAyNzIuODYyIEMgMjgyLjAwNyAyNzEuMTg5LDI4Mi40NjcgMjcxLjUxNywyODIuMTMyIDI3NC4zNDQgQyAyODEuNTMzIDI3OS40MDEsMjY4Ljg2NCAyODIuOTc3LDI2MC41MjcgMjgwLjQ0MiBDIDI1MS4yNjkgMjc3LjYyNiwyNDYuMjE5IDI3MC4yNzYsMjQ2LjIwOCAyNTkuNjAwIEMgMjQ2LjE5MyAyNDQuMjE0LDI1Ny4yOTUgMjM0Ljg1MywyNzEuNTY1IDIzOC4yMTcgTTE2My40MzQgMjU5LjUzMSBMIDE2My40NjcgMjgwLjQyOCAxNTkuODc2IDI4MC4zMTQgTCAxNTYuMjg1IDI4MC4yMDAgMTU2LjMyMiAyNTkuNjAwIEMgMTU2LjM0MyAyNDguMjcwLDE1Ni4zNjkgMjM4LjkwNywxNTYuMzgwIDIzOC43OTMgQyAxNTYuMzkxIDIzOC42NzgsMTU3Ljk3NSAyMzguNTk2LDE1OS45MDAgMjM4LjYwOSBMIDE2My40MDAgMjM4LjYzMyAxNjMuNDM0IDI1OS41MzEgTTI2Mi44NjYgMjQxLjU2MyBDIDI1OC4zOTEgMjQzLjEwOSwyNTQuNDI4IDI0OS4xNzEsMjU0LjQwNSAyNTQuNTA2IEwgMjU0LjQwMCAyNTUuNjEzIDI2NS41MDAgMjU1LjUwNiBMIDI3Ni42MDAgMjU1LjQwMCAyNzYuNDkwIDI1Mi42ODkgQyAyNzYuMTQ2IDI0NC4xNzYsMjY5Ljk1MCAyMzkuMTE3LDI2Mi44NjYgMjQxLjU2MyAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMTQyNCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", fh = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMTg1LjAwMCAxMjcuMDY1IEMgMTgwLjY3MSAxMjkuNzQzLDE3Mi4zNjcgMTMzLjMzNSwxNjYuMjAwIDEzNS4xOTYgQyAxNjAuNzIwIDEzNi44NTAsMTU5LjQ1MiAxMzcuNTUwLDE2MC45MTkgMTM4LjExNCBDIDE2MS43NzEgMTM4LjQ0MSwxNjcuNDgwIDEzNy43MDIsMTcwLjYwMCAxMzYuODYxIEMgMTcyLjE0MCAxMzYuNDQ2LDE3My42NzAgMTM2LjAzNywxNzQuMDAwIDEzNS45NTMgQyAxNzQuNTE1IDEzNS44MjIsMTc0LjYwMCAxMzYuNzEwLDE3NC42MDAgMTQyLjIwMCBMIDE3NC42MDAgMTQ4LjYwMCAxNjguNjAwIDE0OC44MDAgTCAxNjIuNjAwIDE0OS4wMDAgMTYyLjYwMCAxNTAuMDAwIEwgMTYyLjYwMCAxNTEuMDAwIDE2OC41MDAgMTUxLjExMSBDIDE3Mi44NTYgMTUxLjE5MiwxNzQuNDAwIDE1MS4zNTEsMTc0LjQwMCAxNTEuNzE2IEMgMTc0LjQwMCAxNTQuNzY4LDE2OC4yNjEgMTY4Ljc4NCwxNjMuNDQ0IDE3Ni43MjcgQyAxNjEuMzE3IDE4MC4yMzYsMTYxLjA1MiAxODAuODM0LDE2MS4xNTMgMTgxLjkwMCBDIDE2MS4zOTYgMTg0LjQ3MiwxNjguMTQzIDE3Ni42MTEsMTcyLjIzMyAxNjguOTg5IEMgMTczLjM1MiAxNjYuOTA1LDE3NC4zODcgMTY1LjMyMCwxNzQuNTMzIDE2NS40NjcgQyAxNzQuNjgwIDE2NS42MTMsMTc0LjgwMCAxNzMuNTg5LDE3NC44MDAgMTgzLjE5MCBDIDE3NC44MDAgMjAzLjQyNCwxNzQuOTg3IDIwNC4yNjcsMTc4LjcwOCAyMDAuODAwIEwgMTc5LjYwMCAxOTkuOTY5IDE3OS42MDAgMTgyLjU4NCBDIDE3OS42MDAgMTY4LjY0NCwxNzkuNzAyIDE2NS4yMDAsMTgwLjExNyAxNjUuMjAwIEMgMTgwLjc5MiAxNjUuMjAwLDE4My41NDYgMTY4LjA5MywxODUuMTYzIDE3MC41MDAgQyAxODcuMTIyIDE3My40MTcsMTg5LjcxNiAxNzMuMTQwLDE4OS42NzIgMTcwLjAxNyBDIDE4OS42MzEgMTY3LjA0NCwxODYuNzY1IDE2NC42NDAsMTgxLjA4OSAxNjIuODE2IEwgMTc5LjU3OCAxNjIuMzMxIDE3OS42ODkgMTU2Ljg2NSBMIDE3OS44MDAgMTUxLjQwMCAxODcuMDYxIDE1MS4yOTEgQyAxOTYuMjk5IDE1MS4xNTMsMTk2Ljc1OCAxNTAuNzA0LDE5MS42MDEgMTQ2Ljg1NyBDIDE4OC4yMjIgMTQ0LjMzNiwxODguMjI3IDE0NC4zMzYsMTg1LjgwMCAxNDYuODAwIEMgMTgzLjkyOSAxNDguNjk5LDE4My43MjQgMTQ4LjgwMCwxODEuNzE1IDE0OC44MDAgTCAxNzkuNjAwIDE0OC44MDAgMTc5LjYwMCAxNDEuNDYxIEwgMTc5LjYwMCAxMzQuMTIyIDE4MS41MDAgMTMzLjQ5MiBDIDE4Mi41NDUgMTMzLjE0NiwxODQuNjYwIDEzMi4zOTYsMTg2LjIwMCAxMzEuODI2IEMgMTg3Ljc4NSAxMzEuMjM5LDE4OS40MzQgMTMwLjg3OCwxOTAuMDAwIDEzMC45OTQgQyAxOTIuNjQ4IDEzMS41MzYsMTkyLjM5MCAxMjkuODcxLDE4OS40NTQgMTI3LjQ2NSBDIDE4Ny4zNzkgMTI1Ljc2NSwxODcuMTM3IDEyNS43NDMsMTg1LjAwMCAxMjcuMDY1IE0yMjAuMDAwIDEyOC40NTIgQyAyMTYuMzM5IDEyOS45ODAsMjA5LjA4NiAxMzIuNTU4LDIwNi42MDAgMTMzLjIxNCBDIDIwNS45NDAgMTMzLjM4OCwyMDQuNDEwIDEzMy44MDMsMjAzLjIwMCAxMzQuMTM1IEMgMTk4Ljg4MSAxMzUuMzIzLDE5NC45NjEgMTM2LjMxMSwxOTIuNDc2IDEzNi44MzkgQyAxODkuODkwIDEzNy4zODksMTg4LjkxNiAxMzguMDE4LDE4OS40MTEgMTM4LjgxOCBDIDE4OS43MTkgMTM5LjMxNiwxOTIuNzU3IDEzOS4xMTcsMTk5LjAwMCAxMzguMTkwIEMgMjAwLjk4MCAxMzcuODk2LDIwMy40MTAgMTM3LjUzOCwyMDQuNDAwIDEzNy4zOTQgQyAyMDkuMTU5IDEzNi43MDIsMjE2LjgwOCAxMzUuMDM2LDIyMS43OTkgMTMzLjYwMyBDIDIyMy4zMzggMTMzLjE2MiwyMjUuNjIxIDEzMi44MDAsMjI2Ljg3MyAxMzIuODAwIEMgMjMyLjAxMCAxMzIuODAwLDIzMi4yMzQgMTMxLjg2NywyMjcuODA3IDEyOC45MDAgQyAyMjQuMTIwIDEyNi40MjksMjI0Ljc1OSAxMjYuNDY2LDIyMC4wMDAgMTI4LjQ1MiBNOTQuODAwIDE0OS43NTEgQyA5NC44MDAgMTcwLjMzMyw5NC43OTIgMTcwLjI1NSw5Ni44NzQgMTY5LjE3NiBDIDk4LjU4NSAxNjguMjkxLDk5LjIwMCAxNjcuNDk2LDk5LjIwMCAxNjYuMTcxIEMgOTkuMjAwIDE2My41MTIsOTguOTI0IDE2My42MDAsMTA3LjI0MyAxNjMuNjAwIEwgMTE0LjgwMCAxNjMuNjAwIDExNC44MDAgMTY5LjgwMCBMIDExNC44MDAgMTc2LjAwMCA5Ny44MjQgMTc2LjAwMCBDIDgwLjM5NiAxNzYuMDAwLDgwLjEwMSAxNzYuMDI3LDgwLjYwMCAxNzcuNTk5IEMgODAuODQ0IDE3OC4zNzAsODEuMzA2IDE3OC4zOTQsOTcuNzI2IDE3OC40OTYgTCAxMTQuNjAwIDE3OC42MDAgMTE0LjgxNyAxODkuMjAwIEMgMTE0LjkzNiAxOTUuMDMwLDExNS4wNzEgMTk5Ljg0NSwxMTUuMTE3IDE5OS45MDAgQyAxMTUuNDQ4IDIwMC4yOTcsMTE3LjQ4MSAxOTkuODU0LDExOC40MzEgMTk5LjE3OCBMIDExOS41ODYgMTk4LjM1NSAxMTkuNjkzIDE4OC40NzggTCAxMTkuODAwIDE3OC42MDAgMTM3LjgwMCAxNzguNDAwIEwgMTU1LjgwMCAxNzguMjAwIDE1NS45MDggMTc3LjIwMCBDIDE1Ni4wMDQgMTc2LjMxMSwxNTEuMTEzIDE3Mi4wNDMsMTQ5LjA5MyAxNzEuMjUzIEMgMTQ4Ljg4NiAxNzEuMTcyLDE0Ny42MDMgMTcyLjIxMCwxNDYuMjQxIDE3My41NTkgTCAxNDMuNzY2IDE3Ni4wMTIgMTMxLjc4MyAxNzUuOTA2IEwgMTE5LjgwMCAxNzUuODAwIDExOS42OTAgMTY5LjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMjcuODkwIDE2My42OTIgTCAxMzYuMjAwIDE2My44MDAgMTM2LjMzMCAxNjUuMzk1IEMgMTM2LjU1NiAxNjguMTY4LDEzNy45NjUgMTY4LjQ5MSwxNDAuMzAwIDE2Ni4zMDQgTCAxNDEuMjAwIDE2NS40NjEgMTQxLjIwMCAxNTAuOTMwIEMgMTQxLjIwMCAxMzguNTQ2LDE0MS4yODUgMTM2LjQwMCwxNDEuNzc2IDEzNi40MDAgQyAxNDMuNjQwIDEzNi40MDAsMTQyLjg2NCAxMzQuNDQ2LDE0MC4yMDIgMTMyLjQzNiBDIDEzNy42MTEgMTMwLjQ4MCwxMzcuNDkyIDEzMC40NjcsMTM2LjQwMCAxMzIuMDAwIEwgMTM1LjU0NiAxMzMuMjAwIDExNy42NTEgMTMzLjIwMCBMIDk5Ljc1NyAxMzMuMjAwIDk3Ljg2NCAxMzIuMDAwIEMgOTQuNTU1IDEyOS45MDEsOTQuODAwIDEyOC40NzksOTQuODAwIDE0OS43NTEgTTI1NS44MDQgMTM0LjA2NSBDIDI1NS4yMTggMTM2LjQ1OSwyNTUuNzg4IDE5OC44MjIsMjU2LjQwMCAxOTkuMjA2IEMgMjU4LjU2NSAyMDAuNTYzLDI2MC40MDAgMTk4LjE1OCwyNjAuNDAwIDE5My45NjMgQyAyNjAuNDAwIDE5Mi4wMzksMjYwLjUwOSAxOTAuMTgxLDI2MC42NDMgMTg5LjgzMyBDIDI2MC44NjAgMTg5LjI2NiwyNjMuMjc4IDE4OS4yMDAsMjgzLjg0MyAxODkuMjAwIEwgMzA2LjgwMCAxODkuMjAwIDMwNi44MDAgMTkyLjE3MSBDIDMwNi44MDAgMTk2LjMzOCwzMDguMTc0IDE5Ny4zNjEsMzEwLjcwMCAxOTUuMDc1IEwgMzExLjYwMCAxOTQuMjYxIDMxMS42MDAgMTY3LjY3NiBMIDMxMS42MDAgMTQxLjA5MiAzMTIuNTk2IDE0MC4xNjkgQyAzMTMuODc1IDEzOC45ODQsMzEzLjYzMyAxMzguNDIzLDMxMC45ODMgMTM2LjQyMiBDIDMwOC40MTQgMTM0LjQ4MiwzMDcuOTE2IDEzNC40MzIsMzA2LjgwMCAxMzYuMDAwIEwgMzA1Ljk0NiAxMzcuMjAwIDI4My41MjggMTM3LjIwMCBMIDI2MS4xMTEgMTM3LjIwMCAyNTkuMjU2IDEzNS42ODkgQyAyNTUuODU5IDEzMi45MjQsMjU2LjA2MCAxMzMuMDE5LDI1NS44MDQgMTM0LjA2NSBNMTM2LjIwMCAxNDEuMjAwIEwgMTM2LjIwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDk5LjQwMCAxNDYuNjAwIDk5LjI4NyAxNDEuNjU2IEMgOTkuMTMzIDEzNC44ODEsOTYuOTM5IDEzNS41NzQsMTE4LjE1MiAxMzUuNjk2IEwgMTM2LjIwMCAxMzUuODAwIDEzNi4yMDAgMTQxLjIwMCBNMjI3LjQ3NCAxNDAuNTAwIEMgMjI1LjQyOCAxNDYuMjg1LDIyNC4yNjIgMTQ5LjA5OSwyMjIuMjU2IDE1My4wOTMgQyAyMTkuMjczIDE1OS4wMzUsMjE5LjQ2NyAxNjEuMjk3LDIyMi42NjggMTU3LjkwMCBDIDIyNC41MjEgMTU1LjkzNCwyMzEuMjAwIDE0NS42NTEsMjMxLjIwMCAxNDQuNzY1IEMgMjMxLjIwMCAxNDQuNTcxLDIzMi4wMDUgMTQ0LjIwOSwyMzIuOTg4IDE0My45NjEgQyAyMzYuNDk3IDE0My4wNzgsMjM2LjM1NCAxNDIuMTkxLDIzMi4zODAgMTQwLjE5MCBDIDIyOC43MzMgMTM4LjM1MywyMjguMjIyIDEzOC4zODUsMjI3LjQ3NCAxNDAuNTAwIE0yODAuOTU3IDE0MC4yMzMgQyAyODEuMDkxIDE0MC41ODEsMjgxLjIwMCAxNDUuMzQ3LDI4MS4yMDAgMTUwLjgyNSBMIDI4MS4yMDAgMTYwLjc4NSAyODAuMzAwIDE2MS4wMDUgQyAyNzkuODA1IDE2MS4xMjYsMjc1LjE3MCAxNjEuMTc1LDI3MC4wMDAgMTYxLjExMyBMIDI2MC42MDAgMTYxLjAwMCAyNjAuNDg3IDE1MS4yMDAgQyAyNjAuNDI1IDE0NS44MTAsMjYwLjQ3NCAxNDAuOTk1LDI2MC41OTUgMTQwLjUwMCBMIDI2MC44MTUgMTM5LjYwMCAyNzAuNzY1IDEzOS42MDAgQyAyNzkuNDY5IDEzOS42MDAsMjgwLjc0NSAxMzkuNjc5LDI4MC45NTcgMTQwLjIzMyBNMzA2LjcwNyAxNTAuMzAwIEwgMzA2LjYwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDI4Ni4yMDAgMTYxLjAwMCAyODYuMDkzIDE1MC4zMDAgTCAyODUuOTg3IDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMzA2LjgxMyAxMzkuNjAwIDMwNi43MDcgMTUwLjMwMCBNMjA2Ljk4NiAxNDEuMjIzIEMgMjA2Ljg0MiAxNDEuNDU2LDIwNy41NDkgMTQyLjg3NSwyMDguNTU3IDE0NC4zNzcgQyAyMTAuNDMwIDE0Ny4xNjksMjExLjY0NSAxNDkuNjY2LDIxMi4xNjggMTUxLjgwMCBDIDIxMy4wNTAgMTU1LjM5OCwyMTYuODAwIDE1NS4xNjksMjE2LjgwMCAxNTEuNTE3IEMgMjE2LjgwMCAxNDcuMzgxLDIwOC41MzcgMTM4LjcxMywyMDYuOTg2IDE0MS4yMjMgTTE5NS4zMDAgMTQzLjQ4MyBDIDE5NC40NzggMTQzLjc4NSwxOTQuNzIyIDE0NC41ODksMTk2LjE5NiAxNDYuNDQ0IEMgMTk2Ljk2NCAxNDcuNDEwLDE5Ny41OTQgMTQ4LjMzNywxOTcuNTk2IDE0OC41MDQgQyAxOTcuNTk4IDE0OC42NzIsMTk3LjkzOSAxNDkuNTcyLDE5OC4zNTMgMTUwLjUwNCBDIDE5OC43NjcgMTUxLjQzNywxOTkuMzM3IDE1Mi44MzAsMTk5LjYyMCAxNTMuNjAwIEMgMjAxLjAxNyAxNTcuNDAyLDIwNC4wMDAgMTU2Ljk3MCwyMDQuMDAwIDE1Mi45NjYgQyAyMDQuMDAwIDE0OS4xMTcsMTk3Ljk0MSAxNDIuNTEyLDE5NS4zMDAgMTQzLjQ4MyBNMTM2LjIwOCAxNTAuMTAwIEMgMTM2LjMzMSAxNTAuNTk1LDEzNi4zNzkgMTUzLjI1MCwxMzYuMzE2IDE1Ni4wMDAgTCAxMzYuMjAwIDE2MS4wMDAgMTE4LjYwMCAxNjEuMTExIEMgMTA4LjkyMCAxNjEuMTcyLDEwMC41OTUgMTYxLjEyNCwxMDAuMTAwIDE2MS4wMDMgQyA5OS4wNDQgMTYwLjc0Nyw5OC42NzEgMTUwLjY4OSw5OS42ODAgMTQ5LjY4MCBDIDEwMC4wMzkgMTQ5LjMyMSwxMDQuNjc0IDE0OS4yMDAsMTE4LjA3MiAxNDkuMjAwIEwgMTM1Ljk4NSAxNDkuMjAwIDEzNi4yMDggMTUwLjEwMCBNMjA2LjU4MiAxNTkuNzA0IEMgMjA2LjQ3NyAxNTkuOTc3LDIwNi40MzkgMTY5LjIwMCwyMDYuNDk2IDE4MC4yMDAgTCAyMDYuNjAwIDIwMC4yMDAgMjA3Ljk1NCAyMDAuMTM1IEMgMjA5LjgzMCAyMDAuMDQ1LDIxMC45MTQgMTk4LjgyNiwyMTEuMTgxIDE5Ni41MDggTCAyMTEuNDAwIDE5NC42MDAgMjIwLjAwMCAxOTQuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyOC43MTIgMTk1LjYwMCBDIDIyOS4wNTggMTk4LjY5MiwyMzAuMDk2IDE5OS4yNDEsMjMyLjQzOCAxOTcuNTczIEwgMjMzLjYwMCAxOTYuNzQ2IDIzMy42MDAgMTgxLjE2NCBMIDIzMy42MDAgMTY1LjU4MyAyMzQuNjE1IDE2NS4xMjAgQyAyMzUuMjMyIDE2NC44MzksMjM1LjU0NiAxNjQuNDM3LDIzNS40MTUgMTY0LjA5NiBDIDIzNS4yOTcgMTYzLjc4NywyMzUuMjAwIDE2My40MDUsMjM1LjIwMCAxNjMuMjQ2IEMgMjM1LjIwMCAxNjIuODk3LDIzMC41ODMgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMjkuOTA1IDE1OS42MDAsMjI5LjM1MSAxNjAuMTQwLDIyOC44NjMgMTYwLjgwMCBMIDIyNy45NzYgMTYyLjAwMCAyMTkuNjg4IDE2MS45OTkgTCAyMTEuNDAwIDE2MS45OTggMjA5LjA4NiAxNjAuNjAzIEMgMjA3LjQ4NiAxNTkuNjM4LDIwNi43MTMgMTU5LjM2MCwyMDYuNTgyIDE1OS43MDQgTTE5Mi44MDAgMTgwLjE0OCBMIDE5Mi44MDAgMjAwLjAwMCAxOTMuOTY5IDIwMC4wMDAgQyAxOTQuNjQ0IDIwMC4wMDAsMTk1LjY2MCAxOTkuNTYyLDE5Ni4zNjkgMTk4Ljk2NCBMIDE5Ny42MDAgMTk3LjkyOSAxOTcuNjAwIDE4MC45NTYgTCAxOTcuNjAwIDE2My45ODMgMTk4LjU1MiAxNjMuNTQ5IEMgMjAwLjY4MyAxNjIuNTc4LDE5OC45MTcgMTYwLjk4OSwxOTUuMjQ1IDE2MC41NzMgTCAxOTIuODAwIDE2MC4yOTcgMTkyLjgwMCAxODAuMTQ4IE0yODAuOTU3IDE2NC4yMzMgQyAyODEuNTc0IDE2NS44MzksMjgxLjIxNiAxODYuMzA4LDI4MC41NjcgMTg2LjU1NyBDIDI3OC45NjkgMTg3LjE3MCwyNjAuODkyIDE4Ni44MTcsMjYwLjY0MyAxODYuMTY3IEMgMjYwLjUwOSAxODUuODE5LDI2MC40MDAgMTgwLjg4NCwyNjAuNDAwIDE3NS4yMDAgQyAyNjAuNDAwIDE2OS41MTYsMjYwLjUwOSAxNjQuNTgxLDI2MC42NDMgMTY0LjIzMyBDIDI2MS4wMTAgMTYzLjI3NSwyODAuNTkwIDE2My4yNzUsMjgwLjk1NyAxNjQuMjMzIE0zMDYuNzA2IDE3NS4xMDAgTCAzMDYuNjAwIDE4Ni42MDAgMjk2LjQwMCAxODYuNjAwIEwgMjg2LjIwMCAxODYuNjAwIDI4Ni4wOTQgMTc1LjEwMCBMIDI4NS45ODggMTYzLjYwMCAyOTYuNDAwIDE2My42MDAgTCAzMDYuODEyIDE2My42MDAgMzA2LjcwNiAxNzUuMTAwIE0yMjguNzEwIDE3MC43MDAgTCAyMjguODIxIDE3Ni44MDAgMjIwLjAxMCAxNzYuODAwIEwgMjExLjIwMCAxNzYuODAwIDIxMS4yMDAgMTcwLjg2NyBDIDIxMS4yMDAgMTY3LjYwMywyMTEuMzIzIDE2NC44MTAsMjExLjQ3NCAxNjQuNjU5IEMgMjExLjYyNSAxNjQuNTA4LDIxNS41NDAgMTY0LjQzMywyMjAuMTc0IDE2NC40OTIgTCAyMjguNjAwIDE2NC42MDAgMjI4LjcxMCAxNzAuNzAwIE0yMjguNzEwIDE4NS43MDAgTCAyMjguODIwIDE5Mi4wMDAgMjIwLjAxMCAxOTIuMDAwIEwgMjExLjIwMCAxOTIuMDAwIDIxMS4yMDAgMTg1Ljg2NyBDIDIxMS4yMDAgMTgyLjQ5MywyMTEuMzIzIDE3OS42MTAsMjExLjQ3NCAxNzkuNDU5IEMgMjExLjYyNSAxNzkuMzA4LDIxNS41NDAgMTc5LjIzMywyMjAuMTc0IDE3OS4yOTIgTCAyMjguNjAwIDE3OS40MDAgMjI4LjcxMCAxODUuNzAwIE0yMTEuMzIwIDIxMS40NjMgQyAyMTEuMTY3IDIxMS44NjQsMjExLjM2NSAyMTIuMzI4LDIxMS44MzUgMjEyLjY2NSBDIDIxNS4zNjQgMjE1LjIwMiwyMTQuODYyIDIxNi4yNDAsMjA1LjQyMCAyMjUuOTQyIEMgMTk2LjE5NSAyMzUuNDIwLDE4NC40MzEgMjQ0LjIxNiwxNjkuMjcxIDI1Mi45NzIgQyAxNjMuMjgwIDI1Ni40MzIsMTYyLjA2OSAyNTcuNTkxLDE2My43NjQgMjU4LjI0MiBDIDE2NS45ODEgMjU5LjA5MiwxODUuOTQxIDI0Ny45OTksMTk2LjY2NCAyMzkuOTU3IEMgMTk3LjU4MCAyMzkuMjcwLDE5OC41MjUgMjM4LjgzMCwxOTguNzY0IDIzOC45NzggQyAxOTkuNTI5IDIzOS40NTEsMTk5LjM0NiAyNjQuMTMwLDE5OC41NDAgMjY5LjIxNyBDIDE5Ny42MzggMjc0LjkwOSwxOTguOTUzIDI3OC40MDAsMjAxLjk5OSAyNzguNDAwIEMgMjAzLjYyOSAyNzguNDAwLDIwMy41OTkgMjc4Ljc3MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNjA5IDI0Ny44OTAsMjAzLjc0NCAyMzkuMjIwLDIwMy45MDYgMjM4Ljk5OSBDIDIwNC4wNjggMjM4Ljc3OSwyMDQuNjk1IDIzOC4zNDQsMjA1LjMwMCAyMzguMDMyIEMgMjA2LjgwMiAyMzcuMjU4LDIwNi42OTAgMjM2LjIyOSwyMDUuMDE3IDIzNS40MzUgQyAyMDMuMzQ1IDIzNC42NDIsMjAzLjQ2NiAyMzQuMjI1LDIwNS45MDEgMjMyLjQwMCBDIDIwNi45MjggMjMxLjYzMCwyMTAuMTA3IDIyOC42OTIsMjEyLjk2NSAyMjUuODcxIEMgMjE4LjYyOCAyMjAuMjgyLDIxOC45OTkgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMjUuOTk1IDIyMC4wMDAsMjE5LjQxMyAyMTEuODQwLDIxMy40ODUgMjExLjA2MiBDIDIxMS45MzEgMjEwLjg1OSwyMTEuNTIzIDIxMC45MzQsMjExLjMyMCAyMTEuNDYzIE0xMDYuMjgzIDIxMS43MjggQyAxMDYuMDUwIDIxMi4zMzYsMTA2LjYwMyAyMTIuODEzLDEwOC44NzAgMjEzLjk2MSBDIDExMC40NDcgMjE0Ljc2MCwxMTAuNjQ3IDIxNi4wMjcsMTA5LjYwMyAyMTguNjAwIEMgMTA5LjQyNCAyMTkuMDQwLDEwOC44NjUgMjIwLjQ4MCwxMDguMzYwIDIyMS44MDAgQyAxMDYuODAxIDIyNS44NzQsMTAwLjgwNCAyMzYuMjU2LDk5LjIzNCAyMzcuNjAwIEMgOTkuMTA1IDIzNy43MTAsOTguMDI0IDIzOC45NzAsOTYuODMyIDI0MC40MDAgQyA5NS42MzkgMjQxLjgzMCw5Mi43NzggMjQ0LjgyNyw5MC40NzMgMjQ3LjA1OSBDIDg2LjUwNSAyNTAuOTA0LDg1LjYwMiAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODguMjQ5IDI1Mi40MDAsOTUuMjg4IDI0Ni43NDYsOTkuODcyIDI0Mi4yNjMgTCAxMDMuNTQ0IDIzOC42NzEgMTA2LjE0NyAyMzkuMzE0IEMgMTExLjIwNiAyNDAuNTYyLDExNy41NjkgMjQzLjczMywxMjAuMzA1IDI0Ni4zNjkgTCAxMjEuMjEwIDI0Ny4yNDEgMTE5Ljk0MSAyNDkuMTIwIEMgMTE0LjgyOCAyNTYuNjg5LDEwNS40MjkgMjY1LjQxNiw5NS40MDAgMjcxLjkwNSBDIDg5Ljc4NSAyNzUuNTM4LDg5LjIwMCAyNzUuOTgwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI4MC45MTAsMTEyLjQ0NCAyNjUuMjkzLDEyMC44OTcgMjU1LjMwMSBDIDEyMi4zMzkgMjUzLjU5NSwxMjMuOTg5IDI1MS43NjIsMTI0LjU2MyAyNTEuMjI4IEwgMTI1LjYwNSAyNTAuMjU1IDEyNi43MDMgMjUxLjMwMiBDIDEzMS4wODcgMjU1LjQ4NSwxMzQuNTYwIDI1MS4yNTQsMTMwLjM5OSAyNDYuNzk5IEMgMTI4Ljg4OCAyNDUuMTgxLDEyOC44ODQgMjQ1LjIyMSwxMzAuODAwIDI0Mi40MDAgQyAxMzEuNjgwIDI0MS4xMDQsMTMyLjQwMCAyMzkuOTMxLDEzMi40MDAgMjM5Ljc5NCBDIDEzMi40MDAgMjM5LjY1NywxMzIuOTQwIDIzOC43NTksMTMzLjYwMCAyMzcuODAwIEMgMTM0LjI2MCAyMzYuODQwLDEzNS44OTggMjMzLjg4MCwxMzcuMjM4IDIzMS4yMjEgQyAxMzkuMzAwIDIyNy4xMzMsMTM5Ljk1MSAyMjYuMTk3LDE0MS40NTUgMjI1LjE2MiBDIDE0NC4wMTEgMjIzLjQwNCwxNDMuMTQxIDIyMS42MDgsMTM4LjUzNyAyMTkuMTM0IEwgMTM2Ljg3NCAyMTguMjQwIDEzNS4yNjggMjE5LjY5MSBDIDEzMy41MjYgMjIxLjI2NSwxMzMuMTAyIDIyMS4zNjYsMTI2LjQwMCAyMjEuODE5IEMgMTE0Ljg1OSAyMjIuNTk5LDExNC4zMDIgMjIyLjYxMSwxMTQuMDk4IDIyMi4wNzggQyAxMTMuNzc2IDIyMS4yMzksMTE1LjY0MyAyMTguMDIzLDExNi43NjQgMjE3LjQ4NiBDIDExOC44NjMgMjE2LjQ4MCwxMTcuNzcxIDIxNC41MzIsMTE0LjAwNCAyMTIuNTYzIEMgMTExLjM1MiAyMTEuMTc4LDEwNi42ODggMjEwLjY3MywxMDYuMjgzIDIxMS43MjggTTI3NS43MjAgMjE0LjY2NSBDIDI3NS41NDQgMjE1LjEyMiwyNzUuNzcwIDIxNS41NDcsMjc2LjQxMyAyMTUuOTcxIEMgMjgxLjM3OSAyMTkuMjQ2LDI4MS4zODEgMjIwLjAwMCwyNzYuNDU5IDIzMy44MDAgQyAyNzIuMzU5IDI0NS4yOTMsMjY4LjUwNCAyNTQuNjI1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2My45OTIgMjYyLjYyNiwyNTQuMzkwIDI2Mi43OTcsMjUyLjMwOSAyNTkuMTcwIEMgMjUwLjU0OCAyNTYuMTAyLDI0OS43MTUgMjU5LjkxMiwyNTEuMzcwIDI2My40NjYgQyAyNTMuNTY5IDI2OC4xOTAsMjU3LjMwNCAyNzAuNjk0LDI1OS4wODkgMjY4LjY0MiBDIDI1OS43MTMgMjY3LjkyNCwyNjAuODYwIDI2Ny40NzcsMjYzLjY2MSAyNjYuODYyIEMgMjgyLjA2MiAyNjIuODIyLDI4OC42NzYgMjYxLjI4NiwyOTYuNTc0IDI1OS4yMjMgQyAzMDAuNzM5IDI1OC4xMzUsMzA0LjI5NyAyNTcuMzM2LDMwNC40ODAgMjU3LjQ0OSBDIDMwNS4zMTcgMjU3Ljk2NywzMDYuODk3IDI2MS42MzAsMzA4LjA0OSAyNjUuNzI3IEMgMzA5LjQ5NyAyNzAuODc2LDMxMy42MDAgMjcwLjQzMiwzMTMuNjAwIDI2NS4xMjUgQyAzMTMuNjAwIDI1OC4yNjcsMzA1LjU1NyAyNDguMTU4LDI5My4wMzUgMjM5LjI3NyBDIDI4OC4yNzkgMjM1LjkwNCwyODcuODEzIDIzNy42NzksMjkyLjMyMCAyNDIuMDAwIEMgMjk3LjIyOCAyNDYuNzA2LDMwMi40MDAgMjUyLjk3OSwzMDIuNDAwIDI1NC4yMjcgQyAzMDIuNDAwIDI1NS4xNzUsMjY5Ljc0MyAyNjEuMDc3LDI2OC45NDEgMjYwLjI3NCBDIDI2OC44MTIgMjYwLjE0NSwyNjkuNjA0IDI1OC41NDYsMjcwLjcwMCAyNTYuNzIwIEMgMjczLjk2MyAyNTEuMjg3LDI3OS40NjIgMjQwLjEzMiwyODEuOTk5IDIzMy44MDAgQyAyODQuNjQ0IDIyNy4xOTYsMjg1Ljg5NiAyMjQuODc0LDI4Ny4xNjQgMjI0LjIxOSBDIDI4OS4yMDQgMjIzLjE2NCwyODguNTcwIDIyMS4zMzIsMjg1LjA1MyAyMTguMTE4IEMgMjgxLjYzMSAyMTQuOTkxLDI3Ni4zNDUgMjEzLjAzNSwyNzUuNzIwIDIxNC42NjUgTTEzMy44NDggMjI0LjU4MCBDIDEzNC4yNjggMjI1LjY3NywxMjcuODk3IDIzNy44ODMsMTI1LjEwOSAyNDEuMzIxIEwgMTI0LjIwMCAyNDIuNDQyIDEyMS42MDAgMjQxLjI2MyBDIDExNy45NzEgMjM5LjYxOCwxMTMuNTk1IDIzOC4yMTIsMTA5LjYwMCAyMzcuNDA3IEMgMTA3LjczMCAyMzcuMDMwLDEwNS45NjggMjM2LjY1MiwxMDUuNjg0IDIzNi41NjcgQyAxMDUuMzQwIDIzNi40NjQsMTA1Ljg2MCAyMzUuMzg3LDEwNy4yMzEgMjMzLjM1NCBDIDEwOC4zNjYgMjMxLjY3MywxMDkuOTcyIDIyOS4xMjksMTEwLjc5OSAyMjcuNzAyIEwgMTEyLjMwNCAyMjUuMTA4IDExOC4yNTIgMjI0LjkzMyBDIDEyMS41MjMgMjI0LjgzNywxMjUuNDYwIDIyNC42MTEsMTI3LjAwMCAyMjQuNDMyIEMgMTMxLjY1NiAyMjMuODg5LDEzMy41OTkgMjIzLjkzMSwxMzMuODQ4IDIyNC41ODAgIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmOGY0ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGlkPSJwYXRoMSIgZD0iTTE3Ny44NzYgMjEuMDQ1IEMgMTY2LjM5NCAzMi42MjAsMTUxLjcxMSA0Ny4zMzUsMTQ1LjI0NiA1My43NDUgQyAxMzAuMDQ0IDY4LjgxOSw2OC44MTkgMTMwLjA0NCw1My43NDUgMTQ1LjI0NiBDIDQ3LjMzNSAxNTEuNzExLDMyLjYyMCAxNjYuMzk0LDIxLjA0NSAxNzcuODc2IEMgMi4zOTEgMTk2LjM4MSwwLjAwMCAxOTguODkxLDAuMDAwIDE5OS45NzUgQyAwLjAwMCAyMDEuMDYxLDIuNzc4IDIwMy45NjYsMjQuNjQ1IDIyNS43NTUgQyAzOC4xOTkgMjM5LjI2MCw0OS42MjUgMjUwLjY0Niw1MC4wMzUgMjUxLjA1NSBDIDUwLjQ0NiAyNTEuNDY1LDcyLjgzMiAyNzMuODUwLDk5Ljc4MiAzMDAuODAwIEMgMTI2LjczMyAzMjcuNzUwLDE0OS4zMjUgMzUwLjM0MCwxNDkuOTg4IDM1MS4wMDAgQyAxNTAuNjUwIDM1MS42NjAsMTYxLjkwMyAzNjIuOTU1LDE3NC45OTQgMzc2LjEwMCBDIDE5NS45MjAgMzk3LjExMywxOTguOTQwIDQwMC4wMDAsMTk5Ljk5NyA0MDAuMDAwIEMgMjAxLjA1MyA0MDAuMDAwLDIwNC4xNjIgMzk3LjAyNywyMjUuNzU5IDM3NS4zNjAgQyAyMzkuMjY3IDM2MS44MDgsMjUwLjUwMCAzNTAuNTQwLDI1MC43MjAgMzUwLjMyMCBDIDI1MS4yNDMgMzQ5Ljc5NywzNDkuNjU5IDI1MS4zODEsMzUwLjI2MCAyNTAuNzgwIEMgMzUwLjUxMyAyNTAuNTI3LDM2MS44MDggMjM5LjI2NywzNzUuMzYwIDIyNS43NTkgQyAzOTYuMDU3IDIwNS4xMjgsMzk5Ljk5OSAyMDEuMDIzLDM5OS45OTYgMjAwLjA5OSBDIDM5OS45OTIgMTk5LjE3MiwzODcuMjk3IDE4Ni4zMTIsMzE5LjA5NiAxMTguMTQ0IEMgMjc0LjYwMyA3My42NzMsMjI5Ljg3OCAyOC44OTgsMjE5LjcwNiAxOC42NDQgQyAyMDMuMzAwIDIuMTA2LDIwMS4wNzIgMC4wMDAsMTk5Ljk4MiAwLjAwMCBDIDE5OC44ODkgMC4wMDAsMTk2LjQyOCAyLjM0MywxNzcuODc2IDIxLjA0NSBNMTg5LjQ1NCAxMjcuNDY1IEMgMTkyLjM5MCAxMjkuODcxLDE5Mi42NDggMTMxLjUzNiwxOTAuMDAwIDEzMC45OTQgQyAxODkuNDM0IDEzMC44NzgsMTg3Ljc4NSAxMzEuMjM5LDE4Ni4yMDAgMTMxLjgyNiBDIDE4NC42NjAgMTMyLjM5NiwxODIuNTQ1IDEzMy4xNDYsMTgxLjUwMCAxMzMuNDkyIEwgMTc5LjYwMCAxMzQuMTIyIDE3OS42MDAgMTQxLjQ2MSBMIDE3OS42MDAgMTQ4LjgwMCAxODEuNzE1IDE0OC44MDAgQyAxODMuNzI0IDE0OC44MDAsMTgzLjkyOSAxNDguNjk5LDE4NS44MDAgMTQ2LjgwMCBDIDE4OC4yMjcgMTQ0LjMzNiwxODguMjIyIDE0NC4zMzYsMTkxLjYwMSAxNDYuODU3IEMgMTk2Ljc1OCAxNTAuNzA0LDE5Ni4yOTkgMTUxLjE1MywxODcuMDYxIDE1MS4yOTEgTCAxNzkuODAwIDE1MS40MDAgMTc5LjY4OSAxNTYuODY1IEwgMTc5LjU3OCAxNjIuMzMxIDE4MS4wODkgMTYyLjgxNiBDIDE4Ni43NjUgMTY0LjY0MCwxODkuNjMxIDE2Ny4wNDQsMTg5LjY3MiAxNzAuMDE3IEMgMTg5LjcxNiAxNzMuMTQwLDE4Ny4xMjIgMTczLjQxNywxODUuMTYzIDE3MC41MDAgQyAxODMuNTQ2IDE2OC4wOTMsMTgwLjc5MiAxNjUuMjAwLDE4MC4xMTcgMTY1LjIwMCBDIDE3OS43MDIgMTY1LjIwMCwxNzkuNjAwIDE2OC42NDQsMTc5LjYwMCAxODIuNTg0IEwgMTc5LjYwMCAxOTkuOTY5IDE3OC43MDggMjAwLjgwMCBDIDE3NC45ODcgMjA0LjI2NywxNzQuODAwIDIwMy40MjQsMTc0LjgwMCAxODMuMTkwIEMgMTc0LjgwMCAxNzMuNTg5LDE3NC42ODAgMTY1LjYxMywxNzQuNTMzIDE2NS40NjcgQyAxNzQuMzg3IDE2NS4zMjAsMTczLjM1MiAxNjYuOTA1LDE3Mi4yMzMgMTY4Ljk4OSBDIDE2OC4xNDMgMTc2LjYxMSwxNjEuMzk2IDE4NC40NzIsMTYxLjE1MyAxODEuOTAwIEMgMTYxLjA1MiAxODAuODM0LDE2MS4zMTcgMTgwLjIzNiwxNjMuNDQ0IDE3Ni43MjcgQyAxNjguMjYxIDE2OC43ODQsMTc0LjQwMCAxNTQuNzY4LDE3NC40MDAgMTUxLjcxNiBDIDE3NC40MDAgMTUxLjM1MSwxNzIuODU2IDE1MS4xOTIsMTY4LjUwMCAxNTEuMTExIEwgMTYyLjYwMCAxNTEuMDAwIDE2Mi42MDAgMTUwLjAwMCBMIDE2Mi42MDAgMTQ5LjAwMCAxNjguNjAwIDE0OC44MDAgTCAxNzQuNjAwIDE0OC42MDAgMTc0LjYwMCAxNDIuMjAwIEMgMTc0LjYwMCAxMzYuNzEwLDE3NC41MTUgMTM1LjgyMiwxNzQuMDAwIDEzNS45NTMgQyAxNzMuNjcwIDEzNi4wMzcsMTcyLjE0MCAxMzYuNDQ2LDE3MC42MDAgMTM2Ljg2MSBDIDE2Ny40ODAgMTM3LjcwMiwxNjEuNzcxIDEzOC40NDEsMTYwLjkxOSAxMzguMTE0IEMgMTU5LjQ1MiAxMzcuNTUwLDE2MC43MjAgMTM2Ljg1MCwxNjYuMjAwIDEzNS4xOTYgQyAxNzIuMzY3IDEzMy4zMzUsMTgwLjY3MSAxMjkuNzQzLDE4NS4wMDAgMTI3LjA2NSBDIDE4Ny4xMzcgMTI1Ljc0MywxODcuMzc5IDEyNS43NjUsMTg5LjQ1NCAxMjcuNDY1IE0yMjcuODA3IDEyOC45MDAgQyAyMzIuMjM0IDEzMS44NjcsMjMyLjAxMCAxMzIuODAwLDIyNi44NzMgMTMyLjgwMCBDIDIyNS42MjEgMTMyLjgwMCwyMjMuMzM4IDEzMy4xNjIsMjIxLjc5OSAxMzMuNjAzIEMgMjE2LjgwOCAxMzUuMDM2LDIwOS4xNTkgMTM2LjcwMiwyMDQuNDAwIDEzNy4zOTQgQyAyMDMuNDEwIDEzNy41MzgsMjAwLjk4MCAxMzcuODk2LDE5OS4wMDAgMTM4LjE5MCBDIDE5Mi43NTcgMTM5LjExNywxODkuNzE5IDEzOS4zMTYsMTg5LjQxMSAxMzguODE4IEMgMTg4LjkxNiAxMzguMDE4LDE4OS44OTAgMTM3LjM4OSwxOTIuNDc2IDEzNi44MzkgQyAxOTQuOTYxIDEzNi4zMTEsMTk4Ljg4MSAxMzUuMzIzLDIwMy4yMDAgMTM0LjEzNSBDIDIwNC40MTAgMTMzLjgwMywyMDUuOTQwIDEzMy4zODgsMjA2LjYwMCAxMzMuMjE0IEMgMjA5LjA4NiAxMzIuNTU4LDIxNi4zMzkgMTI5Ljk4MCwyMjAuMDAwIDEyOC40NTIgQyAyMjQuNzU5IDEyNi40NjYsMjI0LjEyMCAxMjYuNDI5LDIyNy44MDcgMTI4LjkwMCBNOTcuODY0IDEzMi4wMDAgTCA5OS43NTcgMTMzLjIwMCAxMTcuNjUxIDEzMy4yMDAgTCAxMzUuNTQ2IDEzMy4yMDAgMTM2LjQwMCAxMzIuMDAwIEMgMTM3LjQ5MiAxMzAuNDY3LDEzNy42MTEgMTMwLjQ4MCwxNDAuMjAyIDEzMi40MzYgQyAxNDIuODY0IDEzNC40NDYsMTQzLjY0MCAxMzYuNDAwLDE0MS43NzYgMTM2LjQwMCBDIDE0MS4yODUgMTM2LjQwMCwxNDEuMjAwIDEzOC41NDYsMTQxLjIwMCAxNTAuOTMwIEwgMTQxLjIwMCAxNjUuNDYxIDE0MC4zMDAgMTY2LjMwNCBDIDEzNy45NjUgMTY4LjQ5MSwxMzYuNTU2IDE2OC4xNjgsMTM2LjMzMCAxNjUuMzk1IEwgMTM2LjIwMCAxNjMuODAwIDEyNy44OTAgMTYzLjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMTkuNjkwIDE2OS42OTIgTCAxMTkuODAwIDE3NS44MDAgMTMxLjc4MyAxNzUuOTA2IEwgMTQzLjc2NiAxNzYuMDEyIDE0Ni4yNDEgMTczLjU1OSBDIDE0Ny42MDMgMTcyLjIxMCwxNDguODg2IDE3MS4xNzIsMTQ5LjA5MyAxNzEuMjUzIEMgMTUxLjExMyAxNzIuMDQzLDE1Ni4wMDQgMTc2LjMxMSwxNTUuOTA4IDE3Ny4yMDAgTCAxNTUuODAwIDE3OC4yMDAgMTM3LjgwMCAxNzguNDAwIEwgMTE5LjgwMCAxNzguNjAwIDExOS42OTMgMTg4LjQ3OCBMIDExOS41ODYgMTk4LjM1NSAxMTguNDMxIDE5OS4xNzggQyAxMTcuNDgxIDE5OS44NTQsMTE1LjQ0OCAyMDAuMjk3LDExNS4xMTcgMTk5LjkwMCBDIDExNS4wNzEgMTk5Ljg0NSwxMTQuOTM2IDE5NS4wMzAsMTE0LjgxNyAxODkuMjAwIEwgMTE0LjYwMCAxNzguNjAwIDk3LjcyNiAxNzguNDk2IEMgODEuMzA2IDE3OC4zOTQsODAuODQ0IDE3OC4zNzAsODAuNjAwIDE3Ny41OTkgQyA4MC4xMDEgMTc2LjAyNyw4MC4zOTYgMTc2LjAwMCw5Ny44MjQgMTc2LjAwMCBMIDExNC44MDAgMTc2LjAwMCAxMTQuODAwIDE2OS44MDAgTCAxMTQuODAwIDE2My42MDAgMTA3LjI0MyAxNjMuNjAwIEMgOTguOTI0IDE2My42MDAsOTkuMjAwIDE2My41MTIsOTkuMjAwIDE2Ni4xNzEgQyA5OS4yMDAgMTY3LjQ5Niw5OC41ODUgMTY4LjI5MSw5Ni44NzQgMTY5LjE3NiBDIDk0Ljc5MiAxNzAuMjU1LDk0LjgwMCAxNzAuMzMzLDk0LjgwMCAxNDkuNzUxIEMgOTQuODAwIDEyOC40NzksOTQuNTU1IDEyOS45MDEsOTcuODY0IDEzMi4wMDAgTTI1OS4yNTYgMTM1LjY4OSBMIDI2MS4xMTEgMTM3LjIwMCAyODMuNTI4IDEzNy4yMDAgTCAzMDUuOTQ2IDEzNy4yMDAgMzA2LjgwMCAxMzYuMDAwIEMgMzA3LjkxNiAxMzQuNDMyLDMwOC40MTQgMTM0LjQ4MiwzMTAuOTgzIDEzNi40MjIgQyAzMTMuNjMzIDEzOC40MjMsMzEzLjg3NSAxMzguOTg0LDMxMi41OTYgMTQwLjE2OSBMIDMxMS42MDAgMTQxLjA5MiAzMTEuNjAwIDE2Ny42NzYgTCAzMTEuNjAwIDE5NC4yNjEgMzEwLjcwMCAxOTUuMDc1IEMgMzA4LjE3NCAxOTcuMzYxLDMwNi44MDAgMTk2LjMzOCwzMDYuODAwIDE5Mi4xNzEgTCAzMDYuODAwIDE4OS4yMDAgMjgzLjg0MyAxODkuMjAwIEMgMjYzLjI3OCAxODkuMjAwLDI2MC44NjAgMTg5LjI2NiwyNjAuNjQzIDE4OS44MzMgQyAyNjAuNTA5IDE5MC4xODEsMjYwLjQwMCAxOTIuMDM5LDI2MC40MDAgMTkzLjk2MyBDIDI2MC40MDAgMTk4LjE1OCwyNTguNTY1IDIwMC41NjMsMjU2LjQwMCAxOTkuMjA2IEMgMjU1Ljc4OCAxOTguODIyLDI1NS4yMTggMTM2LjQ1OSwyNTUuODA0IDEzNC4wNjUgQyAyNTYuMDYwIDEzMy4wMTksMjU1Ljg1OSAxMzIuOTI0LDI1OS4yNTYgMTM1LjY4OSBNOTkuNjQwIDEzNi4xNTIgQyA5OS4zMjcgMTM2LjUyOSw5OS4yMTIgMTM4LjMzMyw5OS4yODcgMTQxLjY1NiBMIDk5LjQwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDEzNi4yMDAgMTQ2LjYwMCAxMzYuMjAwIDE0MS4yMDAgTCAxMzYuMjAwIDEzNS44MDAgMTE4LjE1MiAxMzUuNjk2IEMgMTAzLjA3NCAxMzUuNjA5LDEwMC4wMjggMTM1LjY4NCw5OS42NDAgMTM2LjE1MiBNMjMyLjM4MCAxNDAuMTkwIEMgMjM2LjM1NCAxNDIuMTkxLDIzNi40OTcgMTQzLjA3OCwyMzIuOTg4IDE0My45NjEgQyAyMzIuMDA1IDE0NC4yMDksMjMxLjIwMCAxNDQuNTcxLDIzMS4yMDAgMTQ0Ljc2NSBDIDIzMS4yMDAgMTQ1LjY1MSwyMjQuNTIxIDE1NS45MzQsMjIyLjY2OCAxNTcuOTAwIEMgMjE5LjQ2NyAxNjEuMjk3LDIxOS4yNzMgMTU5LjAzNSwyMjIuMjU2IDE1My4wOTMgQyAyMjQuMjYyIDE0OS4wOTksMjI1LjQyOCAxNDYuMjg1LDIyNy40NzQgMTQwLjUwMCBDIDIyOC4yMjIgMTM4LjM4NSwyMjguNzMzIDEzOC4zNTMsMjMyLjM4MCAxNDAuMTkwIE0yNjAuNTk1IDE0MC41MDAgQyAyNjAuNDc0IDE0MC45OTUsMjYwLjQyNSAxNDUuODEwLDI2MC40ODcgMTUxLjIwMCBMIDI2MC42MDAgMTYxLjAwMCAyNzAuMDAwIDE2MS4xMTMgQyAyNzUuMTcwIDE2MS4xNzUsMjc5LjgwNSAxNjEuMTI2LDI4MC4zMDAgMTYxLjAwNSBMIDI4MS4yMDAgMTYwLjc4NSAyODEuMjAwIDE1MC44MjUgQyAyODEuMjAwIDE0NS4zNDcsMjgxLjA5MSAxNDAuNTgxLDI4MC45NTcgMTQwLjIzMyBDIDI4MC43NDUgMTM5LjY3OSwyNzkuNDY5IDEzOS42MDAsMjcwLjc2NSAxMzkuNjAwIEwgMjYwLjgxNSAxMzkuNjAwIDI2MC41OTUgMTQwLjUwMCBNMjg2LjA5MyAxNTAuMzAwIEwgMjg2LjIwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDMwNi42MDAgMTYxLjAwMCAzMDYuNzA3IDE1MC4zMDAgTCAzMDYuODEzIDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMjg1Ljk4NyAxMzkuNjAwIDI4Ni4wOTMgMTUwLjMwMCBNMjEwLjAyNiAxNDIuMDE2IEMgMjE0LjAxMiAxNDQuNTc1LDIxNi44MDAgMTQ4LjQ4NCwyMTYuODAwIDE1MS41MTcgQyAyMTYuODAwIDE1NS4xNjksMjEzLjA1MCAxNTUuMzk4LDIxMi4xNjggMTUxLjgwMCBDIDIxMS42NDUgMTQ5LjY2NiwyMTAuNDMwIDE0Ny4xNjksMjA4LjU1NyAxNDQuMzc3IEMgMjA2LjA2MCAxNDAuNjU2LDIwNi41ODcgMTM5LjgxMCwyMTAuMDI2IDE0Mi4wMTYgTTIwMS4yMDMgMTQ2Ljk2MSBDIDIwNC43ODQgMTUwLjYwMiwyMDUuMjQxIDE1Ni4wMDAsMjAxLjk2OSAxNTYuMDAwIEMgMjAwLjc1NCAxNTYuMDAwLDIwMC4zNTAgMTU1LjU4NywxOTkuNjIwIDE1My42MDAgQyAxOTkuMzM3IDE1Mi44MzAsMTk4Ljc2NyAxNTEuNDM3LDE5OC4zNTMgMTUwLjUwNCBDIDE5Ny45MzkgMTQ5LjU3MiwxOTcuNTk4IDE0OC42NzIsMTk3LjU5NiAxNDguNTA0IEMgMTk3LjU5NCAxNDguMzM3LDE5Ni45NjQgMTQ3LjQxMCwxOTYuMTk2IDE0Ni40NDQgQyAxOTIuOTEzIDE0Mi4zMTQsMTk3LjA1MiAxNDIuNzQyLDIwMS4yMDMgMTQ2Ljk2MSBNOTkuNjgwIDE0OS42ODAgQyA5OC42NzEgMTUwLjY4OSw5OS4wNDQgMTYwLjc0NywxMDAuMTAwIDE2MS4wMDMgQyAxMDAuNTk1IDE2MS4xMjQsMTA4LjkyMCAxNjEuMTcyLDExOC42MDAgMTYxLjExMSBMIDEzNi4yMDAgMTYxLjAwMCAxMzYuMzE2IDE1Ni4wMDAgQyAxMzYuMzc5IDE1My4yNTAsMTM2LjMzMSAxNTAuNTk1LDEzNi4yMDggMTUwLjEwMCBMIDEzNS45ODUgMTQ5LjIwMCAxMTguMDcyIDE0OS4yMDAgQyAxMDQuNjc0IDE0OS4yMDAsMTAwLjAzOSAxNDkuMzIxLDk5LjY4MCAxNDkuNjgwIE0yMTkuNjg4IDE2MS45OTkgTCAyMjcuOTc2IDE2Mi4wMDAgMjI4Ljg2MyAxNjAuODAwIEMgMjI5LjM1MSAxNjAuMTQwLDIyOS45MDUgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMzAuNTgzIDE1OS42MDAsMjM1LjIwMCAxNjIuODk3LDIzNS4yMDAgMTYzLjI0NiBDIDIzNS4yMDAgMTYzLjQwNSwyMzUuMjk3IDE2My43ODcsMjM1LjQxNSAxNjQuMDk2IEMgMjM1LjU0NiAxNjQuNDM3LDIzNS4yMzIgMTY0LjgzOSwyMzQuNjE1IDE2NS4xMjAgTCAyMzMuNjAwIDE2NS41ODMgMjMzLjYwMCAxODEuMTY0IEwgMjMzLjYwMCAxOTYuNzQ2IDIzMi40MzggMTk3LjU3MyBDIDIzMC4wOTYgMTk5LjI0MSwyMjkuMDU4IDE5OC42OTIsMjI4LjcxMiAxOTUuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyMC4wMDAgMTk0LjYwMCBMIDIxMS40MDAgMTk0LjYwMCAyMTEuMTgxIDE5Ni41MDggQyAyMTAuOTE0IDE5OC44MjYsMjA5LjgzMCAyMDAuMDQ1LDIwNy45NTQgMjAwLjEzNSBMIDIwNi42MDAgMjAwLjIwMCAyMDYuNDk2IDE4MC4yMDAgQyAyMDYuMzc1IDE1Ni45MzMsMjA2LjEyNiAxNTguODE4LDIwOS4wODYgMTYwLjYwMyBMIDIxMS40MDAgMTYxLjk5OCAyMTkuNjg4IDE2MS45OTkgTTE5OC40MjAgMTYxLjMwNSBDIDE5OS41NzEgMTYyLjAyNCwxOTkuNjMxIDE2My4wNTcsMTk4LjU1MiAxNjMuNTQ5IEwgMTk3LjYwMCAxNjMuOTgzIDE5Ny42MDAgMTgwLjk1NiBMIDE5Ny42MDAgMTk3LjkyOSAxOTYuMzY5IDE5OC45NjQgQyAxOTUuNjYwIDE5OS41NjIsMTk0LjY0NCAyMDAuMDAwLDE5My45NjkgMjAwLjAwMCBMIDE5Mi44MDAgMjAwLjAwMCAxOTIuODAwIDE4MC4xNDggTCAxOTIuODAwIDE2MC4yOTcgMTk1LjI0NSAxNjAuNTczIEMgMTk2LjU5MCAxNjAuNzI2LDE5OC4wMTkgMTYxLjA1NSwxOTguNDIwIDE2MS4zMDUgTTI2MC42NDMgMTY0LjIzMyBDIDI2MC41MDkgMTY0LjU4MSwyNjAuNDAwIDE2OS41MTYsMjYwLjQwMCAxNzUuMjAwIEMgMjYwLjQwMCAxODAuODg0LDI2MC41MDkgMTg1LjgxOSwyNjAuNjQzIDE4Ni4xNjcgQyAyNjAuODkyIDE4Ni44MTcsMjc4Ljk2OSAxODcuMTcwLDI4MC41NjcgMTg2LjU1NyBDIDI4MS4yMTYgMTg2LjMwOCwyODEuNTc0IDE2NS44MzksMjgwLjk1NyAxNjQuMjMzIEMgMjgwLjU5MCAxNjMuMjc1LDI2MS4wMTAgMTYzLjI3NSwyNjAuNjQzIDE2NC4yMzMgTTI4Ni4wOTQgMTc1LjEwMCBMIDI4Ni4yMDAgMTg2LjYwMCAyOTYuNDAwIDE4Ni42MDAgTCAzMDYuNjAwIDE4Ni42MDAgMzA2LjcwNiAxNzUuMTAwIEwgMzA2LjgxMiAxNjMuNjAwIDI5Ni40MDAgMTYzLjYwMCBMIDI4NS45ODggMTYzLjYwMCAyODYuMDk0IDE3NS4xMDAgTTIxMS40NzQgMTY0LjY1OSBDIDIxMS4zMjMgMTY0LjgxMCwyMTEuMjAwIDE2Ny42MDMsMjExLjIwMCAxNzAuODY3IEwgMjExLjIwMCAxNzYuODAwIDIyMC4wMTAgMTc2LjgwMCBMIDIyOC44MjEgMTc2LjgwMCAyMjguNzEwIDE3MC43MDAgTCAyMjguNjAwIDE2NC42MDAgMjIwLjE3NCAxNjQuNDkyIEMgMjE1LjU0MCAxNjQuNDMzLDIxMS42MjUgMTY0LjUwOCwyMTEuNDc0IDE2NC42NTkgTTIxMS40NzQgMTc5LjQ1OSBDIDIxMS4zMjMgMTc5LjYxMCwyMTEuMjAwIDE4Mi40OTMsMjExLjIwMCAxODUuODY3IEwgMjExLjIwMCAxOTIuMDAwIDIyMC4wMTAgMTkyLjAwMCBMIDIyOC44MjAgMTkyLjAwMCAyMjguNzEwIDE4NS43MDAgTCAyMjguNjAwIDE3OS40MDAgMjIwLjE3NCAxNzkuMjkyIEMgMjE1LjU0MCAxNzkuMjMzLDIxMS42MjUgMTc5LjMwOCwyMTEuNDc0IDE3OS40NTkgTTIxNi44MDAgMjEyLjAxNSBDIDIxOC41OTcgMjEyLjkxNCwyMjIuODAwIDIxNy4zMTEsMjIyLjgwMCAyMTguMjkwIEMgMjIyLjgwMCAyMTkuMzY0LDIyMi4wMTYgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMTguOTk5IDIyMC4wMDAsMjE4LjYyOCAyMjAuMjgyLDIxMi45NjUgMjI1Ljg3MSBDIDIxMC4xMDcgMjI4LjY5MiwyMDYuOTI4IDIzMS42MzAsMjA1LjkwMSAyMzIuNDAwIEMgMjAzLjQ2NiAyMzQuMjI1LDIwMy4zNDUgMjM0LjY0MiwyMDUuMDE3IDIzNS40MzUgQyAyMDYuNjkwIDIzNi4yMjksMjA2LjgwMiAyMzcuMjU4LDIwNS4zMDAgMjM4LjAzMiBDIDIwNC42OTUgMjM4LjM0NCwyMDQuMDY4IDIzOC43NzksMjAzLjkwNiAyMzguOTk5IEMgMjAzLjc0NCAyMzkuMjIwLDIwMy42MDkgMjQ3Ljg5MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNTk5IDI3OC43NzAsMjAzLjYyOSAyNzguNDAwLDIwMS45OTkgMjc4LjQwMCBDIDE5OC45NTMgMjc4LjQwMCwxOTcuNjM4IDI3NC45MDksMTk4LjU0MCAyNjkuMjE3IEMgMTk5LjM0NiAyNjQuMTMwLDE5OS41MjkgMjM5LjQ1MSwxOTguNzY0IDIzOC45NzggQyAxOTguNTI1IDIzOC44MzAsMTk3LjU4MCAyMzkuMjcwLDE5Ni42NjQgMjM5Ljk1NyBDIDE4NS45NDEgMjQ3Ljk5OSwxNjUuOTgxIDI1OS4wOTIsMTYzLjc2NCAyNTguMjQyIEMgMTYyLjA2OSAyNTcuNTkxLDE2My4yODAgMjU2LjQzMiwxNjkuMjcxIDI1Mi45NzIgQyAxODQuNDMxIDI0NC4yMTYsMTk2LjE5NSAyMzUuNDIwLDIwNS40MjAgMjI1Ljk0MiBDIDIxNC44NjIgMjE2LjI0MCwyMTUuMzY0IDIxNS4yMDIsMjExLjgzNSAyMTIuNjY1IEMgMjA5LjQyOSAyMTAuOTM2LDIxMy41NjQgMjEwLjM5NCwyMTYuODAwIDIxMi4wMTUgTTExNC4wMDQgMjEyLjU2MyBDIDExNy43NzEgMjE0LjUzMiwxMTguODYzIDIxNi40ODAsMTE2Ljc2NCAyMTcuNDg2IEMgMTE1LjY0MyAyMTguMDIzLDExMy43NzYgMjIxLjIzOSwxMTQuMDk4IDIyMi4wNzggQyAxMTQuMzAyIDIyMi42MTEsMTE0Ljg1OSAyMjIuNTk5LDEyNi40MDAgMjIxLjgxOSBDIDEzMy4xMDIgMjIxLjM2NiwxMzMuNTI2IDIyMS4yNjUsMTM1LjI2OCAyMTkuNjkxIEwgMTM2Ljg3NCAyMTguMjQwIDEzOC41MzcgMjE5LjEzNCBDIDE0My4xNDEgMjIxLjYwOCwxNDQuMDExIDIyMy40MDQsMTQxLjQ1NSAyMjUuMTYyIEMgMTM5Ljk1MSAyMjYuMTk3LDEzOS4zMDAgMjI3LjEzMywxMzcuMjM4IDIzMS4yMjEgQyAxMzUuODk4IDIzMy44ODAsMTM0LjI2MCAyMzYuODQwLDEzMy42MDAgMjM3LjgwMCBDIDEzMi45NDAgMjM4Ljc1OSwxMzIuNDAwIDIzOS42NTcsMTMyLjQwMCAyMzkuNzk0IEMgMTMyLjQwMCAyMzkuOTMxLDEzMS42ODAgMjQxLjEwNCwxMzAuODAwIDI0Mi40MDAgQyAxMjguODg0IDI0NS4yMjEsMTI4Ljg4OCAyNDUuMTgxLDEzMC4zOTkgMjQ2Ljc5OSBDIDEzNC41NjAgMjUxLjI1NCwxMzEuMDg3IDI1NS40ODUsMTI2LjcwMyAyNTEuMzAyIEwgMTI1LjYwNSAyNTAuMjU1IDEyNC41NjMgMjUxLjIyOCBDIDEyMy45ODkgMjUxLjc2MiwxMjIuMzM5IDI1My41OTUsMTIwLjg5NyAyNTUuMzAxIEMgMTEyLjQ0NCAyNjUuMjkzLDg5LjIwMCAyODAuOTEwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI3NS45ODAsODkuNzg1IDI3NS41MzgsOTUuNDAwIDI3MS45MDUgQyAxMDUuNDI5IDI2NS40MTYsMTE0LjgyOCAyNTYuNjg5LDExOS45NDEgMjQ5LjEyMCBMIDEyMS4yMTAgMjQ3LjI0MSAxMjAuMzA1IDI0Ni4zNjkgQyAxMTcuNTY5IDI0My43MzMsMTExLjIwNiAyNDAuNTYyLDEwNi4xNDcgMjM5LjMxNCBMIDEwMy41NDQgMjM4LjY3MSA5OS44NzIgMjQyLjI2MyBDIDk1LjI4OCAyNDYuNzQ2LDg4LjI0OSAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODUuNjAyIDI1Mi40MDAsODYuNTA1IDI1MC45MDQsOTAuNDczIDI0Ny4wNTkgQyA5Mi43NzggMjQ0LjgyNyw5NS42MzkgMjQxLjgzMCw5Ni44MzIgMjQwLjQwMCBDIDk4LjAyNCAyMzguOTcwLDk5LjEwNSAyMzcuNzEwLDk5LjIzNCAyMzcuNjAwIEMgMTAwLjgwNCAyMzYuMjU2LDEwNi44MDEgMjI1Ljg3NCwxMDguMzYwIDIyMS44MDAgQyAxMDguODY1IDIyMC40ODAsMTA5LjQyNCAyMTkuMDQwLDEwOS42MDMgMjE4LjYwMCBDIDExMC42NDcgMjE2LjAyNywxMTAuNDQ3IDIxNC43NjAsMTA4Ljg3MCAyMTMuOTYxIEMgMTA2LjYwMyAyMTIuODEzLDEwNi4wNTAgMjEyLjMzNiwxMDYuMjgzIDIxMS43MjggQyAxMDYuNjg4IDIxMC42NzMsMTExLjM1MiAyMTEuMTc4LDExNC4wMDQgMjEyLjU2MyBNMjgxLjEzMyAyMTUuMzE2IEMgMjg2LjIzMiAyMTcuNjc4LDI4OS43NTYgMjIyLjg3OCwyODcuMTY0IDIyNC4yMTkgQyAyODUuODk2IDIyNC44NzQsMjg0LjY0NCAyMjcuMTk2LDI4MS45OTkgMjMzLjgwMCBDIDI3OS40NjIgMjQwLjEzMiwyNzMuOTYzIDI1MS4yODcsMjcwLjcwMCAyNTYuNzIwIEMgMjY5LjYwNCAyNTguNTQ2LDI2OC44MTIgMjYwLjE0NSwyNjguOTQxIDI2MC4yNzQgQyAyNjkuNzQzIDI2MS4wNzcsMzAyLjQwMCAyNTUuMTc1LDMwMi40MDAgMjU0LjIyNyBDIDMwMi40MDAgMjUyLjk3OSwyOTcuMjI4IDI0Ni43MDYsMjkyLjMyMCAyNDIuMDAwIEMgMjg3LjgxMyAyMzcuNjc5LDI4OC4yNzkgMjM1LjkwNCwyOTMuMDM1IDIzOS4yNzcgQyAzMDUuNTU3IDI0OC4xNTgsMzEzLjYwMCAyNTguMjY3LDMxMy42MDAgMjY1LjEyNSBDIDMxMy42MDAgMjcwLjQzMiwzMDkuNDk3IDI3MC44NzYsMzA4LjA0OSAyNjUuNzI3IEMgMzA2Ljg5NyAyNjEuNjMwLDMwNS4zMTcgMjU3Ljk2NywzMDQuNDgwIDI1Ny40NDkgQyAzMDQuMjk3IDI1Ny4zMzYsMzAwLjczOSAyNTguMTM1LDI5Ni41NzQgMjU5LjIyMyBDIDI4OC42NzYgMjYxLjI4NiwyODIuMDYyIDI2Mi44MjIsMjYzLjY2MSAyNjYuODYyIEMgMjYwLjg2MCAyNjcuNDc3LDI1OS43MTMgMjY3LjkyNCwyNTkuMDg5IDI2OC42NDIgQyAyNTcuMzA0IDI3MC42OTQsMjUzLjU2OSAyNjguMTkwLDI1MS4zNzAgMjYzLjQ2NiBDIDI0OS43MTUgMjU5LjkxMiwyNTAuNTQ4IDI1Ni4xMDIsMjUyLjMwOSAyNTkuMTcwIEMgMjUzLjY2NCAyNjEuNTMxLDI1NS44ODYgMjYxLjk4MywyNjIuNTU0IDI2MS4yNTcgQyAyNjQuODkyIDI2MS4wMDIsMjY0LjkxNyAyNjAuOTg1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2OC41MDQgMjU0LjYyNSwyNzIuMzU5IDI0NS4yOTMsMjc2LjQ1OSAyMzMuODAwIEMgMjgxLjM4MSAyMjAuMDAwLDI4MS4zNzkgMjE5LjI0NiwyNzYuNDEzIDIxNS45NzEgQyAyNzMuNTg0IDIxNC4xMDUsMjc3LjM3OSAyMTMuNTc4LDI4MS4xMzMgMjE1LjMxNiBNMTI3LjAwMCAyMjQuNDMyIEMgMTI1LjQ2MCAyMjQuNjExLDEyMS41MjMgMjI0LjgzNywxMTguMjUyIDIyNC45MzMgTCAxMTIuMzA0IDIyNS4xMDggMTEwLjc5OSAyMjcuNzAyIEMgMTA5Ljk3MiAyMjkuMTI5LDEwOC4zNjYgMjMxLjY3MywxMDcuMjMxIDIzMy4zNTQgQyAxMDUuODYwIDIzNS4zODcsMTA1LjM0MCAyMzYuNDY0LDEwNS42ODQgMjM2LjU2NyBDIDEwNS45NjggMjM2LjY1MiwxMDcuNzMwIDIzNy4wMzAsMTA5LjYwMCAyMzcuNDA3IEMgMTEzLjU5NSAyMzguMjEyLDExNy45NzEgMjM5LjYxOCwxMjEuNjAwIDI0MS4yNjMgTCAxMjQuMjAwIDI0Mi40NDIgMTI1LjEwOSAyNDEuMzIxIEMgMTI3Ljg5NyAyMzcuODgzLDEzNC4yNjggMjI1LjY3NywxMzMuODQ4IDIyNC41ODAgQyAxMzMuNTk5IDIyMy45MzEsMTMxLjY1NiAyMjMuODg5LDEyNy4wMDAgMjI0LjQzMiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMWMyYyIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", $A = () => /* @__PURE__ */ he.jsx(
  "img",
  {
    src: lh,
    alt: "WasedaTime English Logo",
    style: { width: 120, height: 120 }
  }
), YC = () => /* @__PURE__ */ he.jsx(
  "img",
  {
    src: fh,
    alt: "WasedaTime Japanese Logo",
    style: { width: 120, height: 120 }
  }
), VA = () => /* @__PURE__ */ he.jsx(
  "img",
  {
    src: lh,
    alt: "WasedaTime English Small Logo",
    style: { width: 50, height: 50 }
  }
), FC = () => /* @__PURE__ */ he.jsx("img", { src: fh, style: { width: 50, height: 50 } }), WA = ({ theme: e, setTheme: t }) => {
  const r = {
    light: /* @__PURE__ */ he.jsx(FA, { color: Ke.icon.sun }),
    dark: /* @__PURE__ */ he.jsx(YA, { color: Ke.icon.moon })
  };
  return /* @__PURE__ */ he.jsx(
    "div",
    {
      className: "cursor-pointer transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon",
      onClick: () => t(e === "dark" ? "light" : "dark"),
      children: r[e]
    }
  );
}, HA = (e, t) => {
  const r = e ? "#FAFAFA30" : Ke.light.bgSide, n = e ? "#24252770" : Ke.dark.bgSide;
  return {
    height: "67px",
    width: "100%",
    padding: "8px 0px",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: t === "light" ? Ke.light.bgSide : Ke.dark.bgSide,
    background: t === "light" ? r : n,
    backdropFilter: e ? "blur(5px)" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 90,
    gridRow: "1 / 2",
    display: "flex",
    flexDirection: "row"
  };
}, qA = {
  flex: "5",
  paddingRight: "0px"
}, KA = {
  flex: "3",
  padding: "0px 0px 0px 1em"
}, GA = {
  flex: "8",
  margin: "auto 0px"
}, JA = {
  flex: "10",
  margin: "auto 0px"
}, ZA = {
  flex: "3",
  margin: "auto 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"
}, XA = (e) => ({
  width: "100%",
  borderRadius: "25px",
  height: "40px",
  padding: "0px 1em",
  outline: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: e === "light" ? Ke.light.bgSide : Ke.dark.text3,
  backgroundColor: e === "light" ? Ke.light.bgMain : Ke.dark.text3,
  color: e === "light" ? Ke.light.text1 : Ke.dark.text1
}), eI = (e) => ({
  fontWeight: 500,
  paddingLeft: "100px",
  fontSize: "32px",
  color: e === "light" ? Ke.light.text1 : Ke.dark.text1
}), QC = ({
  title: e,
  onInputChange: t,
  placeholder: r,
  inputText: n,
  disabled: i,
  isBlur: o,
  changeLang: s,
  theme: a = "light",
  setTheme: u
}) => {
  const c = Gy(), l = /* @__PURE__ */ he.jsx("label", { style: { marginLeft: "0" }, children: /* @__PURE__ */ he.jsx(
    "input",
    {
      style: XA(a),
      placeholder: r || "Search...",
      onChange: t ? (f) => t(f.target.value) : () => {
      },
      value: n || "",
      disabled: i,
      autoFocus: !0
    }
  ) });
  return /* @__PURE__ */ he.jsxs("header", { style: HA(o, a), children: [
    /* @__PURE__ */ he.jsx(aa, { maxWidth: co.tablet, children: (f) => f ? /* @__PURE__ */ he.jsx("div", { style: KA, onClick: () => c("/home"), children: /* @__PURE__ */ he.jsx(VA, {}) }) : /* @__PURE__ */ he.jsx("header", { style: qA, children: /* @__PURE__ */ he.jsx("h2", { style: eI(a), children: e }) }) }),
    /* @__PURE__ */ he.jsx(aa, { maxWidth: co.tablet, children: (f) => f ? /* @__PURE__ */ he.jsx("div", { style: JA, children: l }) : /* @__PURE__ */ he.jsx("div", { style: GA, children: l }) }),
    /* @__PURE__ */ he.jsxs("div", { style: ZA, children: [
      /* @__PURE__ */ he.jsx(WA, { theme: a, setTheme: u }),
      /* @__PURE__ */ he.jsx(BA, { theme: a, changeLang: s })
    ] })
  ] });
}, tI = /* @__PURE__ */ he.jsx("style", { children: `
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
    ` }), rI = {
  display: "block",
  width: "100px",
  height: "100px",
  transition: "transform(0, 12vh)",
  animation: "loadingSpinnerSpin 3s linear infinite"
};
class BC extends Ne.Component {
  constructor(r) {
    super(r);
    uc(this, "_isMounted");
    this._isMounted = !1, this.state = {
      delayMessage: ""
    };
  }
  componentDidMount() {
    this._isMounted = !0, this._isMounted && setTimeout(() => {
      this._isMounted && this.setState({
        delayMessage: "Slow network is detected. Please wait we're almost done 💪"
      });
    }, 4e3);
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  render() {
    return /* @__PURE__ */ he.jsx(rg, { style: { flex: "1 0 0" }, children: /* @__PURE__ */ he.jsxs(
      ry,
      {
        style: {
          alignItems: "center",
          justifyContent: "center",
          padding: "25px"
        },
        children: [
          tI,
          /* @__PURE__ */ he.jsx("div", { style: rI, children: /* @__PURE__ */ he.jsx($A, {}) }),
          /* @__PURE__ */ he.jsx(
            "p",
            {
              style: {
                fontSize: "2rem",
                textAlign: "center",
                color: this.props.theme === "light" ? Ke.light.text2 : Ke.dark.text2
              },
              children: this.props.message || "Loading..."
            }
          ),
          /* @__PURE__ */ he.jsx(
            "p",
            {
              style: {
                fontSize: "2rem",
                textAlign: "center",
                color: this.props.theme === "light" ? Ke.light.text2 : Ke.dark.text2
              },
              children: this.state.delayMessage
            }
          )
        ]
      }
    ) });
  }
}
function Dn(e) {
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
function nI(e, t) {
  if (Dn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dh(e) {
  var t = nI(e, "string");
  return Dn(t) === "symbol" ? t : String(t);
}
function Pu(e, t, r) {
  return t = dh(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function iI(e, t) {
  if (e == null)
    return {};
  var r = Ge(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oI() {
  if (console && console.warn) {
    for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r);
  }
}
var kl = {};
function Na() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  typeof t[0] == "string" && kl[t[0]] || (typeof t[0] == "string" && (kl[t[0]] = /* @__PURE__ */ new Date()), oI.apply(void 0, t));
}
function zl(e, t, r) {
  e.loadNamespaces(t, function() {
    if (e.isInitialized)
      r();
    else {
      var n = function i() {
        setTimeout(function() {
          e.off("initialized", i);
        }, 0), r();
      };
      e.on("initialized", n);
    }
  });
}
function sI(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (n.toLowerCase() === "cimode")
    return !0;
  var s = function(u, c) {
    var l = t.services.backendConnector.state["".concat(u, "|").concat(c)];
    return l === -1 || l === 2;
  };
  return r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(n, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(n, e) && (!i || s(o, e)));
}
function aI(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return Na("i18n.languages were undefined or empty", t.languages), !0;
  var n = t.options.ignoreJSONStructure !== void 0;
  return n ? t.hasLoadedNamespace(e, {
    precheck: function(o, s) {
      if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !s(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : sI(e, t, r);
}
function uI(e) {
  return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown");
}
var cI = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, lI = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, fI = function(t) {
  return lI[t];
}, dI = function(t) {
  return t.replace(cI, fI);
};
function Pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pl(Object(r), !0).forEach(function(n) {
      Pu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ta = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: dI
};
function gI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Ta = Rl(Rl({}, Ta), e);
}
function hI() {
  return Ta;
}
var gh;
function pI(e) {
  gh = e;
}
function MI() {
  return gh;
}
function hh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dh(n.key), n);
  }
}
function ph(e, t, r) {
  return t && Ul(e.prototype, t), r && Ul(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var yI = {
  type: "3rdParty",
  init: function(t) {
    gI(t.options.react), pI(t);
  }
}, mI = ar(), vI = function() {
  function e() {
    hh(this, e), this.usedNamespaces = {};
  }
  return ph(e, [{
    key: "addUsedNamespaces",
    value: function(r) {
      var n = this;
      r.forEach(function(i) {
        n.usedNamespaces[i] || (n.usedNamespaces[i] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), e;
}();
function wI(e) {
  if (Array.isArray(e))
    return e;
}
function DI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, o, s, a = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); u = !0)
          ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (c)
          throw i;
      }
    }
    return a;
  }
}
function Yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function AI(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yl(e, t);
  }
}
function II() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mh(e, t) {
  return wI(e) || DI(e, t) || AI(e, t) || II();
}
function Fl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fl(Object(r), !0).forEach(function(n) {
      Pu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var EI = function(t, r) {
  var n = et();
  return ot(function() {
    n.current = r ? n.current : t;
  }, [t, r]), n.current;
};
function NI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.i18n, n = dt(mI) || {}, i = n.i18n, o = n.defaultNS, s = r || i || MI();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new vI()), !s) {
    Na("You will need to pass in an i18next instance by using initReactI18next");
    var a = function(F, S) {
      return typeof S == "string" ? S : S && Dn(S) === "object" && typeof S.defaultValue == "string" ? S.defaultValue : Array.isArray(F) ? F[F.length - 1] : F;
    }, u = [a, {}, !1];
    return u.t = a, u.i18n = {}, u.ready = !1, u;
  }
  s.options.react && s.options.react.wait !== void 0 && Na("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var c = Ds(Ds(Ds({}, hI()), s.options.react), t), l = c.useSuspense, f = c.keyPrefix, d = e || o || s.options && s.options.defaultNS;
  d = typeof d == "string" ? [d] : d || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(d);
  var h = (s.isInitialized || s.initializedStoreOnce) && d.every(function(B) {
    return aI(B, s, c);
  });
  function g() {
    return s.getFixedT(null, c.nsMode === "fallback" ? d : d[0], f);
  }
  var M = Vr(g), m = Mh(M, 2), w = m[0], v = m[1], T = d.join(), N = EI(T), E = et(!0);
  ot(function() {
    var B = c.bindI18n, F = c.bindI18nStore;
    E.current = !0, !h && !l && zl(s, d, function() {
      E.current && v(g);
    }), h && N && N !== T && E.current && v(g);
    function S() {
      E.current && v(g);
    }
    return B && s && s.on(B, S), F && s && s.store.on(F, S), function() {
      E.current = !1, B && s && B.split(" ").forEach(function(L) {
        return s.off(L, S);
      }), F && s && F.split(" ").forEach(function(L) {
        return s.store.off(L, S);
      });
    };
  }, [s, T]);
  var P = et(!0);
  ot(function() {
    E.current && !P.current && v(g), P.current = !1;
  }, [s, f]);
  var k = [w, s, h];
  if (k.t = w, k.i18n = s, k.ready = h, h || !h && !l)
    return k;
  throw new Promise(function(B) {
    zl(s, d, function() {
      B();
    });
  });
}
var TI = ["forwardedRef"];
function Ql(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ql(Object(r), !0).forEach(function(n) {
      Pu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ql(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(n) {
    function i(s) {
      var a = s.forwardedRef, u = iI(s, TI), c = NI(e, Oi(Oi({}, u), {}, {
        keyPrefix: t.keyPrefix
      })), l = Mh(c, 3), f = l[0], d = l[1], h = l[2], g = Oi(Oi({}, u), {}, {
        t: f,
        i18n: d,
        tReady: h
      });
      return t.withRef && a ? g.ref = a : !t.withRef && a && (g.forwardedRef = a), mt(n, g);
    }
    i.displayName = "withI18nextTranslation(".concat(uI(n), ")"), i.WrappedComponent = n;
    var o = function(a, u) {
      return mt(i, Object.assign({}, a, {
        forwardedRef: u
      }));
    };
    return t.withRef ? wo(o) : i;
  };
}
var yh = { exports: {} };
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
(function(e) {
  var t, r, n, i, o, s, a, u, c, l, f, d, h, g, M, m, w, v, T, N, E, P, k;
  (function(B) {
    var F = typeof Lt == "object" ? Lt : typeof self == "object" ? self : typeof this == "object" ? this : {};
    B(S(F, S(e.exports)));
    function S(L, R) {
      return L !== F && (typeof Object.create == "function" ? Object.defineProperty(L, "__esModule", { value: !0 }) : L.__esModule = !0), function(x, j) {
        return L[x] = R ? R(x, j) : j;
      };
    }
  })(function(B) {
    var F = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, L) {
      S.__proto__ = L;
    } || function(S, L) {
      for (var R in L)
        L.hasOwnProperty(R) && (S[R] = L[R]);
    };
    t = function(S, L) {
      F(S, L);
      function R() {
        this.constructor = S;
      }
      S.prototype = L === null ? Object.create(L) : (R.prototype = L.prototype, new R());
    }, r = Object.assign || function(S) {
      for (var L, R = 1, x = arguments.length; R < x; R++) {
        L = arguments[R];
        for (var j in L)
          Object.prototype.hasOwnProperty.call(L, j) && (S[j] = L[j]);
      }
      return S;
    }, n = function(S, L) {
      var R = {};
      for (var x in S)
        Object.prototype.hasOwnProperty.call(S, x) && L.indexOf(x) < 0 && (R[x] = S[x]);
      if (S != null && typeof Object.getOwnPropertySymbols == "function")
        for (var j = 0, x = Object.getOwnPropertySymbols(S); j < x.length; j++)
          L.indexOf(x[j]) < 0 && Object.prototype.propertyIsEnumerable.call(S, x[j]) && (R[x[j]] = S[x[j]]);
      return R;
    }, i = function(S, L, R, x) {
      var j = arguments.length, b = j < 3 ? L : x === null ? x = Object.getOwnPropertyDescriptor(L, R) : x, W;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        b = Reflect.decorate(S, L, R, x);
      else
        for (var re = S.length - 1; re >= 0; re--)
          (W = S[re]) && (b = (j < 3 ? W(b) : j > 3 ? W(L, R, b) : W(L, R)) || b);
      return j > 3 && b && Object.defineProperty(L, R, b), b;
    }, o = function(S, L) {
      return function(R, x) {
        L(R, x, S);
      };
    }, s = function(S, L) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(S, L);
    }, a = function(S, L, R, x) {
      function j(b) {
        return b instanceof R ? b : new R(function(W) {
          W(b);
        });
      }
      return new (R || (R = Promise))(function(b, W) {
        function re(_) {
          try {
            ie(x.next(_));
          } catch ($) {
            W($);
          }
        }
        function oe(_) {
          try {
            ie(x.throw(_));
          } catch ($) {
            W($);
          }
        }
        function ie(_) {
          _.done ? b(_.value) : j(_.value).then(re, oe);
        }
        ie((x = x.apply(S, L || [])).next());
      });
    }, u = function(S, L) {
      var R = { label: 0, sent: function() {
        if (b[0] & 1)
          throw b[1];
        return b[1];
      }, trys: [], ops: [] }, x, j, b, W;
      return W = { next: re(0), throw: re(1), return: re(2) }, typeof Symbol == "function" && (W[Symbol.iterator] = function() {
        return this;
      }), W;
      function re(ie) {
        return function(_) {
          return oe([ie, _]);
        };
      }
      function oe(ie) {
        if (x)
          throw new TypeError("Generator is already executing.");
        for (; R; )
          try {
            if (x = 1, j && (b = ie[0] & 2 ? j.return : ie[0] ? j.throw || ((b = j.return) && b.call(j), 0) : j.next) && !(b = b.call(j, ie[1])).done)
              return b;
            switch (j = 0, b && (ie = [ie[0] & 2, b.value]), ie[0]) {
              case 0:
              case 1:
                b = ie;
                break;
              case 4:
                return R.label++, { value: ie[1], done: !1 };
              case 5:
                R.label++, j = ie[1], ie = [0];
                continue;
              case 7:
                ie = R.ops.pop(), R.trys.pop();
                continue;
              default:
                if (b = R.trys, !(b = b.length > 0 && b[b.length - 1]) && (ie[0] === 6 || ie[0] === 2)) {
                  R = 0;
                  continue;
                }
                if (ie[0] === 3 && (!b || ie[1] > b[0] && ie[1] < b[3])) {
                  R.label = ie[1];
                  break;
                }
                if (ie[0] === 6 && R.label < b[1]) {
                  R.label = b[1], b = ie;
                  break;
                }
                if (b && R.label < b[2]) {
                  R.label = b[2], R.ops.push(ie);
                  break;
                }
                b[2] && R.ops.pop(), R.trys.pop();
                continue;
            }
            ie = L.call(S, R);
          } catch (_) {
            ie = [6, _], j = 0;
          } finally {
            x = b = 0;
          }
        if (ie[0] & 5)
          throw ie[1];
        return { value: ie[0] ? ie[1] : void 0, done: !0 };
      }
    }, k = function(S, L, R, x) {
      x === void 0 && (x = R), S[x] = L[R];
    }, c = function(S, L) {
      for (var R in S)
        R !== "default" && !L.hasOwnProperty(R) && (L[R] = S[R]);
    }, l = function(S) {
      var L = typeof Symbol == "function" && Symbol.iterator, R = L && S[L], x = 0;
      if (R)
        return R.call(S);
      if (S && typeof S.length == "number")
        return {
          next: function() {
            return S && x >= S.length && (S = void 0), { value: S && S[x++], done: !S };
          }
        };
      throw new TypeError(L ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, f = function(S, L) {
      var R = typeof Symbol == "function" && S[Symbol.iterator];
      if (!R)
        return S;
      var x = R.call(S), j, b = [], W;
      try {
        for (; (L === void 0 || L-- > 0) && !(j = x.next()).done; )
          b.push(j.value);
      } catch (re) {
        W = { error: re };
      } finally {
        try {
          j && !j.done && (R = x.return) && R.call(x);
        } finally {
          if (W)
            throw W.error;
        }
      }
      return b;
    }, d = function() {
      for (var S = [], L = 0; L < arguments.length; L++)
        S = S.concat(f(arguments[L]));
      return S;
    }, h = function() {
      for (var S = 0, L = 0, R = arguments.length; L < R; L++)
        S += arguments[L].length;
      for (var x = Array(S), j = 0, L = 0; L < R; L++)
        for (var b = arguments[L], W = 0, re = b.length; W < re; W++, j++)
          x[j] = b[W];
      return x;
    }, g = function(S) {
      return this instanceof g ? (this.v = S, this) : new g(S);
    }, M = function(S, L, R) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var x = R.apply(S, L || []), j, b = [];
      return j = {}, W("next"), W("throw"), W("return"), j[Symbol.asyncIterator] = function() {
        return this;
      }, j;
      function W(U) {
        x[U] && (j[U] = function(K) {
          return new Promise(function(q, J) {
            b.push([U, K, q, J]) > 1 || re(U, K);
          });
        });
      }
      function re(U, K) {
        try {
          oe(x[U](K));
        } catch (q) {
          $(b[0][3], q);
        }
      }
      function oe(U) {
        U.value instanceof g ? Promise.resolve(U.value.v).then(ie, _) : $(b[0][2], U);
      }
      function ie(U) {
        re("next", U);
      }
      function _(U) {
        re("throw", U);
      }
      function $(U, K) {
        U(K), b.shift(), b.length && re(b[0][0], b[0][1]);
      }
    }, m = function(S) {
      var L, R;
      return L = {}, x("next"), x("throw", function(j) {
        throw j;
      }), x("return"), L[Symbol.iterator] = function() {
        return this;
      }, L;
      function x(j, b) {
        L[j] = S[j] ? function(W) {
          return (R = !R) ? { value: g(S[j](W)), done: j === "return" } : b ? b(W) : W;
        } : b;
      }
    }, w = function(S) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var L = S[Symbol.asyncIterator], R;
      return L ? L.call(S) : (S = typeof l == "function" ? l(S) : S[Symbol.iterator](), R = {}, x("next"), x("throw"), x("return"), R[Symbol.asyncIterator] = function() {
        return this;
      }, R);
      function x(b) {
        R[b] = S[b] && function(W) {
          return new Promise(function(re, oe) {
            W = S[b](W), j(re, oe, W.done, W.value);
          });
        };
      }
      function j(b, W, re, oe) {
        Promise.resolve(oe).then(function(ie) {
          b({ value: ie, done: re });
        }, W);
      }
    }, v = function(S, L) {
      return Object.defineProperty ? Object.defineProperty(S, "raw", { value: L }) : S.raw = L, S;
    }, T = function(S) {
      if (S && S.__esModule)
        return S;
      var L = {};
      if (S != null)
        for (var R in S)
          Object.hasOwnProperty.call(S, R) && (L[R] = S[R]);
      return L.default = S, L;
    }, N = function(S) {
      return S && S.__esModule ? S : { default: S };
    }, E = function(S, L) {
      if (!L.has(S))
        throw new TypeError("attempted to get private field on non-instance");
      return L.get(S);
    }, P = function(S, L, R) {
      if (!L.has(S))
        throw new TypeError("attempted to set private field on non-instance");
      return L.set(S, R), R;
    }, B("__extends", t), B("__assign", r), B("__rest", n), B("__decorate", i), B("__param", o), B("__metadata", s), B("__awaiter", a), B("__generator", u), B("__exportStar", c), B("__createBinding", k), B("__values", l), B("__read", f), B("__spread", d), B("__spreadArrays", h), B("__await", g), B("__asyncGenerator", M), B("__asyncDelegator", m), B("__asyncValues", w), B("__makeTemplateObject", v), B("__importStar", T), B("__importDefault", N), B("__classPrivateFieldGet", E), B("__classPrivateFieldSet", P);
  });
})(yh);
var ue = yh.exports, lo;
(function(e) {
  e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple";
})(lo || (lo = {}));
function As(e) {
  var t = ["provider"];
  return e && !!t.find(function(r) {
    return e.hasOwnProperty(r);
  });
}
function SI(e) {
  var t = ["customProvider"];
  return e && !!t.find(function(r) {
    return e.hasOwnProperty(r);
  });
}
function bI(e) {
  var t = ["customState"];
  return e && !!t.find(function(r) {
    return e.hasOwnProperty(r);
  });
}
function Rr(e) {
  return e.redirectSignIn !== void 0;
}
var _e;
(function(e) {
  e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default", e.DeviceConfig = "deviceConfig", e.NetworkError = "networkError", e.AutoSignInError = "autoSignInError";
})(_e || (_e = {}));
function xI(e) {
  return !!e.username;
}
var Bl;
(function(e) {
  e.API_KEY = "API_KEY", e.AWS_IAM = "AWS_IAM", e.OPENID_CONNECT = "OPENID_CONNECT", e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", e.AWS_LAMBDA = "AWS_LAMBDA";
})(Bl || (Bl = {}));
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
var ja = function(e, t) {
  return ja = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, ja(e, t);
};
function Ru(e, t) {
  ja(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var we = function() {
  return we = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, we.apply(this, arguments);
};
function mh(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Ee(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function a(l) {
      try {
        c(n.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Ie(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function kt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wr(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
function at() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Wr(arguments[t]));
  return e;
}
var CI = "Logging", $l = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
}, Pt;
(function(e) {
  e.DEBUG = "DEBUG", e.ERROR = "ERROR", e.INFO = "INFO", e.WARN = "WARN", e.VERBOSE = "VERBOSE";
})(Pt || (Pt = {}));
var Yt = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = Pt.WARN), this.name = t, this.level = r, this._pluggables = [];
    }
    return e.prototype._padding = function(t) {
      return t < 10 ? "0" + t : "" + t;
    }, e.prototype._ts = function() {
      var t = /* @__PURE__ */ new Date();
      return [this._padding(t.getMinutes()), this._padding(t.getSeconds())].join(":") + "." + t.getMilliseconds();
    }, e.prototype.configure = function(t) {
      return t ? (this._config = t, this._config) : this._config;
    }, e.prototype._log = function(t) {
      for (var r, n, i = [], o = 1; o < arguments.length; o++)
        i[o - 1] = arguments[o];
      var s = this.level;
      e.LOG_LEVEL && (s = e.LOG_LEVEL), typeof window < "u" && window.LOG_LEVEL && (s = window.LOG_LEVEL);
      var a = $l[s], u = $l[t];
      if (u >= a) {
        var c = console.log.bind(console);
        t === Pt.ERROR && console.error && (c = console.error.bind(console)), t === Pt.WARN && console.warn && (c = console.warn.bind(console));
        var l = "[" + t + "] " + this._ts() + " " + this.name, f = "";
        if (i.length === 1 && typeof i[0] == "string")
          f = l + " - " + i[0], c(f);
        else if (i.length === 1)
          f = l + " " + i[0], c(l, i[0]);
        else if (typeof i[0] == "string") {
          var d = i.slice(1);
          d.length === 1 && (d = d[0]), f = l + " - " + i[0] + " " + d, c(l + " - " + i[0], d);
        } else
          f = l + " " + i, c(l, i);
        try {
          for (var h = kt(this._pluggables), g = h.next(); !g.done; g = h.next()) {
            var M = g.value, m = { message: f, timestamp: Date.now() };
            M.pushLogs([m]);
          }
        } catch (w) {
          r = { error: w };
        } finally {
          try {
            g && !g.done && (n = h.return) && n.call(h);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
    }, e.prototype.log = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.INFO], t));
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.INFO], t));
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.WARN], t));
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.ERROR], t));
    }, e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.DEBUG], t));
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      this._log.apply(this, at([Pt.VERBOSE], t));
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategoryName() === CI && (this._pluggables.push(t), t.configure(this._config));
    }, e.prototype.listPluggables = function() {
      return this._pluggables;
    }, e.LOG_LEVEL = null, e;
  }()
), Is = new Yt("Amplify"), OI = (
  /** @class */
  function() {
    function e() {
      this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = Yt, this.ServiceWorker = null;
    }
    return e.prototype.register = function(t) {
      Is.debug("component registered in amplify", t), this._components.push(t), typeof t.getModuleName == "function" ? (this._modules[t.getModuleName()] = t, this[t.getModuleName()] = t) : Is.debug("no getModuleName method for component", t), t.configure(this._config);
    }, e.prototype.configure = function(t) {
      var r = this;
      return t ? (this._config = Object.assign(this._config, t), Is.debug("amplify config", this._config), Object.entries(this._modules).forEach(function(n) {
        var i = Wr(n, 2);
        i[0];
        var o = i[1];
        Object.keys(o).forEach(function(s) {
          r._modules[s] && (o[s] = r._modules[s]);
        });
      }), this._components.map(function(n) {
        n.configure(r._config);
      }), this._config) : this._config;
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategory && typeof t.getCategory == "function" && this._components.map(function(r) {
        r.addPluggable && typeof r.addPluggable == "function" && r.addPluggable(t);
      });
    }, e;
  }()
), Uu = new OI(), LI = "5.1.12", Sa = "aws-amplify/" + LI, Or = {
  userAgent: Sa + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (Or.product = navigator.product || "", Or.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      Or.userAgent = Sa + " react-native", Or.isReactNative = !0;
      break;
    default:
      Or.userAgent = Sa + " js", Or.isReactNative = !1;
      break;
  }
var _I = function(e) {
  return "" + Or.userAgent + (e || "");
}, Gt = new Yt("Hub"), kI = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function zI(e) {
  return e.onHubCapsule !== void 0;
}
var PI = (
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
    return e.prototype._remove = function(t, r) {
      if (t instanceof RegExp) {
        var n = this.patterns.find(function(o) {
          var s = o.pattern;
          return s.source === t.source;
        });
        if (!n) {
          Gt.warn("No listeners for " + t);
          return;
        }
        this.patterns = at(this.patterns.filter(function(o) {
          return o !== n;
        }));
      } else {
        var i = this.listeners[t];
        if (!i) {
          Gt.warn("No listeners for " + t);
          return;
        }
        this.listeners[t] = at(i.filter(function(o) {
          var s = o.callback;
          return s !== r;
        }));
      }
    }, e.prototype.remove = function(t, r) {
      this._remove(t, r);
    }, e.prototype.dispatch = function(t, r, n, i) {
      if (n === void 0 && (n = ""), this.protectedChannels.indexOf(t) > -1) {
        var o = i === kI;
        o || Gt.warn("WARNING: " + t + " is protected and dispatching on it can have unintended consequences");
      }
      var s = {
        channel: t,
        payload: we({}, r),
        source: n,
        patternInfo: []
      };
      try {
        this._toListeners(s);
      } catch (a) {
        Gt.error(a);
      }
    }, e.prototype.listen = function(t, r, n) {
      var i = this;
      n === void 0 && (n = "noname");
      var o;
      if (zI(r))
        Gt.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), o = r.onHubCapsule.bind(r);
      else {
        if (typeof r != "function")
          throw new Error("No callback supplied to Hub");
        o = r;
      }
      if (t instanceof RegExp)
        this.patterns.push({
          pattern: t,
          callback: o
        });
      else {
        var s = this.listeners[t];
        s || (s = [], this.listeners[t] = s), s.push({
          name: n,
          callback: o
        });
      }
      return function() {
        i._remove(t, o);
      };
    }, e.prototype._toListeners = function(t) {
      var r = t.channel, n = t.payload, i = this.listeners[r];
      if (i && i.forEach(function(s) {
        Gt.debug("Dispatching to " + r + " with ", n);
        try {
          s.callback(t);
        } catch (a) {
          Gt.error(a);
        }
      }), this.patterns.length > 0) {
        if (!n.message) {
          Gt.warn("Cannot perform pattern matching without a message key");
          return;
        }
        var o = n.message;
        this.patterns.forEach(function(s) {
          var a = o.match(s.pattern);
          if (a) {
            var u = Wr(a), c = u.slice(1), l = we(we({}, t), { patternInfo: c });
            try {
              s.callback(l);
            } catch (f) {
              Gt.error(f);
            }
          }
        });
      }
    }, e;
  }()
), Jt = new PI("__default__"), RI = function(e) {
  if (e.isResolved)
    return e;
  var t = !0, r = !1, n = !1, i = e.then(function(o) {
    return n = !0, t = !1, o;
  }, function(o) {
    throw r = !0, t = !1, o;
  });
  return i.isFullfilled = function() {
    return n;
  }, i.isPending = function() {
    return t;
  }, i.isRejected = function() {
    return r;
  }, i;
}, sr = function() {
  var e = typeof window < "u" && typeof window.document < "u", t = typeof process < "u" && process.versions != null && process.versions.node != null;
  return {
    isBrowser: e,
    isNode: t
  };
}, wr = {}, Qo = {}, At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.MAX_HASHABLE_LENGTH = At.INIT = At.KEY = At.DIGEST_LENGTH = At.BLOCK_SIZE = void 0;
At.BLOCK_SIZE = 64;
At.DIGEST_LENGTH = 32;
At.KEY = new Uint32Array([
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
At.INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
At.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.RawSha256 = void 0;
var jt = At, UI = (
  /** @class */
  function() {
    function e() {
      this.state = Int32Array.from(jt.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return e.prototype.update = function(t) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      var r = 0, n = t.byteLength;
      if (this.bytesHashed += n, this.bytesHashed * 8 > jt.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; n > 0; )
        this.buffer[this.bufferLength++] = t[r++], n--, this.bufferLength === jt.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
    }, e.prototype.digest = function() {
      if (!this.finished) {
        var t = this.bytesHashed * 8, r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), n = this.bufferLength;
        if (r.setUint8(this.bufferLength++, 128), n % jt.BLOCK_SIZE >= jt.BLOCK_SIZE - 8) {
          for (var i = this.bufferLength; i < jt.BLOCK_SIZE; i++)
            r.setUint8(i, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < jt.BLOCK_SIZE - 8; i++)
          r.setUint8(i, 0);
        r.setUint32(jt.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), r.setUint32(jt.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
      }
      for (var o = new Uint8Array(jt.DIGEST_LENGTH), i = 0; i < 8; i++)
        o[i * 4] = this.state[i] >>> 24 & 255, o[i * 4 + 1] = this.state[i] >>> 16 & 255, o[i * 4 + 2] = this.state[i] >>> 8 & 255, o[i * 4 + 3] = this.state[i] >>> 0 & 255;
      return o;
    }, e.prototype.hashBuffer = function() {
      for (var t = this, r = t.buffer, n = t.state, i = n[0], o = n[1], s = n[2], a = n[3], u = n[4], c = n[5], l = n[6], f = n[7], d = 0; d < jt.BLOCK_SIZE; d++) {
        if (d < 16)
          this.temp[d] = (r[d * 4] & 255) << 24 | (r[d * 4 + 1] & 255) << 16 | (r[d * 4 + 2] & 255) << 8 | r[d * 4 + 3] & 255;
        else {
          var h = this.temp[d - 2], g = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10;
          h = this.temp[d - 15];
          var M = (h >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
          this.temp[d] = (g + this.temp[d - 7] | 0) + (M + this.temp[d - 16] | 0);
        }
        var m = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & l) | 0) + (f + (jt.KEY[d] + this.temp[d] | 0) | 0) | 0, w = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & o ^ i & s ^ o & s) | 0;
        f = l, l = c, c = u, u = a + m | 0, a = s, s = o, o = i, i = m + w | 0;
      }
      n[0] += i, n[1] += o, n[2] += s, n[3] += a, n[4] += u, n[5] += c, n[6] += l, n[7] += f;
    }, e;
  }()
);
Bo.RawSha256 = UI;
var Yu = {}, $o = {};
const YI = (e) => {
  const t = [];
  for (let r = 0, n = e.length; r < n; r++) {
    const i = e.charCodeAt(r);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192, i & 63 | 128);
    else if (r + 1 < e.length && (i & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320) {
      const o = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023);
      t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
    } else
      t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
  }
  return Uint8Array.from(t);
}, FI = (e) => {
  let t = "";
  for (let r = 0, n = e.length; r < n; r++) {
    const i = e[r];
    if (i < 128)
      t += String.fromCharCode(i);
    else if (192 <= i && i < 224) {
      const o = e[++r];
      t += String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (240 <= i && i < 365) {
      const s = "%" + [i, e[++r], e[++r], e[++r]].map((a) => a.toString(16)).join("%");
      t += decodeURIComponent(s);
    } else
      t += String.fromCharCode((i & 15) << 12 | (e[++r] & 63) << 6 | e[++r] & 63);
  }
  return t;
};
function QI(e) {
  return new TextEncoder().encode(e);
}
function BI(e) {
  return new TextDecoder("utf-8").decode(e);
}
const $I = (e) => typeof TextEncoder == "function" ? QI(e) : YI(e), VI = (e) => typeof TextDecoder == "function" ? BI(e) : FI(e), WI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: $I,
  toUtf8: VI
}, Symbol.toStringTag, { value: "Module" })), HI = /* @__PURE__ */ Ao(WI);
Object.defineProperty($o, "__esModule", { value: !0 });
$o.convertToBuffer = void 0;
var qI = HI, KI = typeof Buffer < "u" && Buffer.from ? function(e) {
  return Buffer.from(e, "utf8");
} : qI.fromUtf8;
function GI(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? KI(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
$o.convertToBuffer = GI;
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.isEmptyData = void 0;
function JI(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Vo.isEmptyData = JI;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.numToUint8 = void 0;
function ZI(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255
  ]);
}
Wo.numToUint8 = ZI;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.uint32ArrayFrom = void 0;
function XI(e) {
  if (!Array.from) {
    for (var t = new Uint32Array(e.length), r = 0; r < e.length; )
      t[r] = e[r];
    return t;
  }
  return Uint32Array.from(e);
}
Ho.uint32ArrayFrom = XI;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
  var t = $o;
  Object.defineProperty(e, "convertToBuffer", { enumerable: !0, get: function() {
    return t.convertToBuffer;
  } });
  var r = Vo;
  Object.defineProperty(e, "isEmptyData", { enumerable: !0, get: function() {
    return r.isEmptyData;
  } });
  var n = Wo;
  Object.defineProperty(e, "numToUint8", { enumerable: !0, get: function() {
    return n.numToUint8;
  } });
  var i = Ho;
  Object.defineProperty(e, "uint32ArrayFrom", { enumerable: !0, get: function() {
    return i.uint32ArrayFrom;
  } });
})(Yu);
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.Sha256 = void 0;
var Vl = ue, fo = At, ba = Bo, xa = Yu, eE = (
  /** @class */
  function() {
    function e(t) {
      if (this.hash = new ba.RawSha256(), t) {
        this.outer = new ba.RawSha256();
        var r = tE(t), n = new Uint8Array(fo.BLOCK_SIZE);
        n.set(r);
        for (var i = 0; i < fo.BLOCK_SIZE; i++)
          r[i] ^= 54, n[i] ^= 92;
        this.hash.update(r), this.outer.update(n);
        for (var i = 0; i < r.byteLength; i++)
          r[i] = 0;
      }
    }
    return e.prototype.update = function(t) {
      if (!((0, xa.isEmptyData)(t) || this.error))
        try {
          this.hash.update((0, xa.convertToBuffer)(t));
        } catch (r) {
          this.error = r;
        }
    }, e.prototype.digestSync = function() {
      if (this.error)
        throw this.error;
      return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
    }, e.prototype.digest = function() {
      return (0, Vl.__awaiter)(this, void 0, void 0, function() {
        return (0, Vl.__generator)(this, function(t) {
          return [2, this.digestSync()];
        });
      });
    }, e;
  }()
);
Qo.Sha256 = eE;
function tE(e) {
  var t = (0, xa.convertToBuffer)(e);
  if (t.byteLength > fo.BLOCK_SIZE) {
    var r = new ba.RawSha256();
    r.update(t), t = r.digest();
  }
  var n = new Uint8Array(fo.BLOCK_SIZE);
  return n.set(t), n;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  (0, t.__exportStar)(Qo, e);
})(wr);
var vh = {};
for (var Li = 0; Li < 256; Li++) {
  var _i = Li.toString(16).toLowerCase();
  _i.length === 1 && (_i = "0" + _i), vh[Li] = _i;
}
function fn(e) {
  for (var t = "", r = 0; r < e.byteLength; r++)
    t += vh[e[r]];
  return t;
}
var go = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
go.exports;
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, i = e && !e.nodeType && e, o = typeof Lt == "object" && Lt;
    (o.global === o || o.window === o || o.self === o) && (r = o);
    var s, a = 2147483647, u = 36, c = 1, l = 26, f = 38, d = 700, h = 72, g = 128, M = "-", m = /^xn--/, w = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, T = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, N = u - c, E = Math.floor, P = String.fromCharCode, k;
    function B(_) {
      throw RangeError(T[_]);
    }
    function F(_, $) {
      for (var U = _.length, K = []; U--; )
        K[U] = $(_[U]);
      return K;
    }
    function S(_, $) {
      var U = _.split("@"), K = "";
      U.length > 1 && (K = U[0] + "@", _ = U[1]), _ = _.replace(v, ".");
      var q = _.split("."), J = F(q, $).join(".");
      return K + J;
    }
    function L(_) {
      for (var $ = [], U = 0, K = _.length, q, J; U < K; )
        q = _.charCodeAt(U++), q >= 55296 && q <= 56319 && U < K ? (J = _.charCodeAt(U++), (J & 64512) == 56320 ? $.push(((q & 1023) << 10) + (J & 1023) + 65536) : ($.push(q), U--)) : $.push(q);
      return $;
    }
    function R(_) {
      return F(_, function($) {
        var U = "";
        return $ > 65535 && ($ -= 65536, U += P($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), U += P($), U;
      }).join("");
    }
    function x(_) {
      return _ - 48 < 10 ? _ - 22 : _ - 65 < 26 ? _ - 65 : _ - 97 < 26 ? _ - 97 : u;
    }
    function j(_, $) {
      return _ + 22 + 75 * (_ < 26) - (($ != 0) << 5);
    }
    function b(_, $, U) {
      var K = 0;
      for (_ = U ? E(_ / d) : _ >> 1, _ += E(_ / $); _ > N * l >> 1; K += u)
        _ = E(_ / N);
      return E(K + (N + 1) * _ / (_ + f));
    }
    function W(_) {
      var $ = [], U = _.length, K, q = 0, J = g, C = h, te, H, ge, V, Y, Q, fe, X, le;
      for (te = _.lastIndexOf(M), te < 0 && (te = 0), H = 0; H < te; ++H)
        _.charCodeAt(H) >= 128 && B("not-basic"), $.push(_.charCodeAt(H));
      for (ge = te > 0 ? te + 1 : 0; ge < U; ) {
        for (V = q, Y = 1, Q = u; ge >= U && B("invalid-input"), fe = x(_.charCodeAt(ge++)), (fe >= u || fe > E((a - q) / Y)) && B("overflow"), q += fe * Y, X = Q <= C ? c : Q >= C + l ? l : Q - C, !(fe < X); Q += u)
          le = u - X, Y > E(a / le) && B("overflow"), Y *= le;
        K = $.length + 1, C = b(q - V, K, V == 0), E(q / K) > a - J && B("overflow"), J += E(q / K), q %= K, $.splice(q++, 0, J);
      }
      return R($);
    }
    function re(_) {
      var $, U, K, q, J, C, te, H, ge, V, Y, Q = [], fe, X, le, Me;
      for (_ = L(_), fe = _.length, $ = g, U = 0, J = h, C = 0; C < fe; ++C)
        Y = _[C], Y < 128 && Q.push(P(Y));
      for (K = q = Q.length, q && Q.push(M); K < fe; ) {
        for (te = a, C = 0; C < fe; ++C)
          Y = _[C], Y >= $ && Y < te && (te = Y);
        for (X = K + 1, te - $ > E((a - U) / X) && B("overflow"), U += (te - $) * X, $ = te, C = 0; C < fe; ++C)
          if (Y = _[C], Y < $ && ++U > a && B("overflow"), Y == $) {
            for (H = U, ge = u; V = ge <= J ? c : ge >= J + l ? l : ge - J, !(H < V); ge += u)
              Me = H - V, le = u - V, Q.push(
                P(j(V + Me % le, 0))
              ), H = E(Me / le);
            Q.push(P(j(H, 0))), J = b(U, X, K == q), U = 0, ++K;
          }
        ++U, ++$;
      }
      return Q.join("");
    }
    function oe(_) {
      return S(_, function($) {
        return m.test($) ? W($.slice(4).toLowerCase()) : $;
      });
    }
    function ie(_) {
      return S(_, function($) {
        return w.test($) ? "xn--" + re($) : $;
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
        decode: L,
        encode: R
      },
      decode: W,
      encode: re,
      toASCII: ie,
      toUnicode: oe
    }, n && i)
      if (e.exports == n)
        i.exports = s;
      else
        for (k in s)
          s.hasOwnProperty(k) && (n[k] = s[k]);
    else
      r.punycode = s;
  })(Lt);
})(go, go.exports);
var rE = go.exports, nE = {
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
}, li = {};
function iE(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var oE = function(e, t, r, n) {
  t = t || "&", r = r || "=";
  var i = {};
  if (typeof e != "string" || e.length === 0)
    return i;
  var o = /\+/g;
  e = e.split(t);
  var s = 1e3;
  n && typeof n.maxKeys == "number" && (s = n.maxKeys);
  var a = e.length;
  s > 0 && a > s && (a = s);
  for (var u = 0; u < a; ++u) {
    var c = e[u].replace(o, "%20"), l = c.indexOf(r), f, d, h, g;
    l >= 0 ? (f = c.substr(0, l), d = c.substr(l + 1)) : (f = c, d = ""), h = decodeURIComponent(f), g = decodeURIComponent(d), iE(i, h) ? Array.isArray(i[h]) ? i[h].push(g) : i[h] = [i[h], g] : i[h] = g;
  }
  return i;
}, Pn = function(e) {
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
}, sE = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(i) {
    var o = encodeURIComponent(Pn(i)) + r;
    return Array.isArray(e[i]) ? e[i].map(function(s) {
      return o + encodeURIComponent(Pn(s));
    }).join(t) : o + encodeURIComponent(Pn(e[i]));
  }).join(t) : n ? encodeURIComponent(Pn(n)) + r + encodeURIComponent(Pn(e)) : "";
};
li.decode = li.parse = oE;
li.encode = li.stringify = sE;
var aE = rE, Zt = nE, gr = wh;
function tr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var uE = /^([a-z0-9.+-]+:)/i, cE = /:[0-9]*$/, lE = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, fE = ["<", ">", '"', "`", " ", "\r", `
`, "	"], dE = ["{", "}", "|", "\\", "^", "`"].concat(fE), Ca = ["'"].concat(dE), Wl = ["%", "/", "?", ";", "#"].concat(Ca), Hl = ["/", "?", "#"], gE = 255, ql = /^[+a-z0-9A-Z_-]{0,63}$/, hE = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, pE = {
  javascript: !0,
  "javascript:": !0
}, Oa = {
  javascript: !0,
  "javascript:": !0
}, hn = {
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
}, La = li;
function wh(e, t, r) {
  if (e && Zt.isObject(e) && e instanceof tr)
    return e;
  var n = new tr();
  return n.parse(e, t, r), n;
}
tr.prototype.parse = function(e, t, r) {
  if (!Zt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"), i = n !== -1 && n < e.indexOf("#") ? "?" : "#", o = e.split(i), s = /\\/g;
  o[0] = o[0].replace(s, "/"), e = o.join(i);
  var a = e;
  if (a = a.trim(), !r && e.split("#").length === 1) {
    var u = lE.exec(a);
    if (u)
      return this.path = a, this.href = a, this.pathname = u[1], u[2] ? (this.search = u[2], t ? this.query = La.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var c = uE.exec(a);
  if (c) {
    c = c[0];
    var l = c.toLowerCase();
    this.protocol = l, a = a.substr(c.length);
  }
  if (r || c || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(c && Oa[c]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!Oa[c] && (f || c && !hn[c])) {
    for (var d = -1, h = 0; h < Hl.length; h++) {
      var g = a.indexOf(Hl[h]);
      g !== -1 && (d === -1 || g < d) && (d = g);
    }
    var M, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (M = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(M)), d = -1;
    for (var h = 0; h < Wl.length; h++) {
      var g = a.indexOf(Wl[h]);
      g !== -1 && (d === -1 || g < d) && (d = g);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var w = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!w)
      for (var v = this.hostname.split(/\./), h = 0, T = v.length; h < T; h++) {
        var N = v[h];
        if (N && !N.match(ql)) {
          for (var E = "", P = 0, k = N.length; P < k; P++)
            N.charCodeAt(P) > 127 ? E += "x" : E += N[P];
          if (!E.match(ql)) {
            var B = v.slice(0, h), F = v.slice(h + 1), S = N.match(hE);
            S && (B.push(S[1]), F.unshift(S[2])), F.length && (a = "/" + F.join(".") + a), this.hostname = B.join(".");
            break;
          }
        }
      }
    this.hostname.length > gE ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), w || (this.hostname = aE.toASCII(this.hostname));
    var L = this.port ? ":" + this.port : "", R = this.hostname || "";
    this.host = R + L, this.href += this.host, w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!pE[l])
    for (var h = 0, T = Ca.length; h < T; h++) {
      var x = Ca[h];
      if (a.indexOf(x) !== -1) {
        var j = encodeURIComponent(x);
        j === x && (j = escape(x)), a = a.split(x).join(j);
      }
    }
  var b = a.indexOf("#");
  b !== -1 && (this.hash = a.substr(b), a = a.slice(0, b));
  var W = a.indexOf("?");
  if (W !== -1 ? (this.search = a.substr(W), this.query = a.substr(W + 1), t && (this.query = La.parse(this.query)), a = a.slice(0, W)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), hn[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var L = this.pathname || "", re = this.search || "";
    this.path = L + re;
  }
  return this.href = this.format(), this;
};
tr.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, o = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && Zt.isObject(this.query) && Object.keys(this.query).length && (o = La.stringify(this.query));
  var s = this.search || o && "?" + o || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || hn[t]) && i !== !1 ? (i = "//" + (i || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), s && s.charAt(0) !== "?" && (s = "?" + s), r = r.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), s = s.replace("#", "%23"), t + i + r + s + n;
};
tr.prototype.resolve = function(e) {
  return this.resolveObject(wh(e, !1, !0)).format();
};
tr.prototype.resolveObject = function(e) {
  if (Zt.isString(e)) {
    var t = new tr();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new tr(), n = Object.keys(this), i = 0; i < n.length; i++) {
    var o = n[i];
    r[o] = this[o];
  }
  if (r.hash = e.hash, e.href === "")
    return r.href = r.format(), r;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), a = 0; a < s.length; a++) {
      var u = s[a];
      u !== "protocol" && (r[u] = e[u]);
    }
    return hn[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!hn[e.protocol]) {
      for (var c = Object.keys(e), l = 0; l < c.length; l++) {
        var f = c[l];
        r[f] = e[f];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !Oa[e.protocol]) {
      for (var T = (e.pathname || "").split("/"); T.length && !(e.host = T.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), T[0] !== "" && T.unshift(""), T.length < 2 && T.unshift(""), r.pathname = T.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var d = r.pathname || "", h = r.search || "";
      r.path = d + h;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var g = r.pathname && r.pathname.charAt(0) === "/", M = e.host || e.pathname && e.pathname.charAt(0) === "/", m = M || g || r.host && e.pathname, w = m, v = r.pathname && r.pathname.split("/") || [], T = e.pathname && e.pathname.split("/") || [], N = r.protocol && !hn[r.protocol];
  if (N && (r.hostname = "", r.port = null, r.host && (v[0] === "" ? v[0] = r.host : v.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (T[0] === "" ? T[0] = e.host : T.unshift(e.host)), e.host = null), m = m && (T[0] === "" || v[0] === "")), M)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, v = T;
  else if (T.length)
    v || (v = []), v.pop(), v = v.concat(T), r.search = e.search, r.query = e.query;
  else if (!Zt.isNullOrUndefined(e.search)) {
    if (N) {
      r.hostname = r.host = v.shift();
      var E = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      E && (r.auth = E.shift(), r.host = r.hostname = E.shift());
    }
    return r.search = e.search, r.query = e.query, (!Zt.isNull(r.pathname) || !Zt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!v.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var P = v.slice(-1)[0], k = (r.host || e.host || v.length > 1) && (P === "." || P === "..") || P === "", B = 0, F = v.length; F >= 0; F--)
    P = v[F], P === "." ? v.splice(F, 1) : P === ".." ? (v.splice(F, 1), B++) : B && (v.splice(F, 1), B--);
  if (!m && !w)
    for (; B--; B)
      v.unshift("..");
  m && v[0] !== "" && (!v[0] || v[0].charAt(0) !== "/") && v.unshift(""), k && v.join("/").substr(-1) !== "/" && v.push("");
  var S = v[0] === "" || v[0] && v[0].charAt(0) === "/";
  if (N) {
    r.hostname = r.host = S ? "" : v.length ? v.shift() : "";
    var E = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    E && (r.auth = E.shift(), r.host = r.hostname = E.shift());
  }
  return m = m || r.host && v.length, m && !S && v.unshift(""), v.length ? r.pathname = v.join("/") : (r.pathname = null, r.path = null), (!Zt.isNull(r.pathname) || !Zt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
tr.prototype.parseHost = function() {
  var e = this.host, t = cE.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var ki = new Yt("Util"), Ur = (
  /** @class */
  function(e) {
    Ru(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.nonRetryable = !0, n;
    }
    return t;
  }(Error)
), ME = function(e) {
  var t = "nonRetryable";
  return e && e[t];
};
function yE(e, t, r, n) {
  return Ee(this, void 0, void 0, function() {
    var i = this;
    return Ie(this, function(o) {
      if (typeof e != "function")
        throw Error("functionToRetry must be a function");
      return [2, new Promise(function(s, a) {
        return Ee(i, void 0, void 0, function() {
          var u, c, l, f, d, h, g;
          return Ie(this, function(M) {
            switch (M.label) {
              case 0:
                u = 0, c = !1, f = function() {
                }, n && n.then(function() {
                  c = !0, clearTimeout(l), f();
                }), h = function() {
                  var m, w, v, T;
                  return Ie(this, function(N) {
                    switch (N.label) {
                      case 0:
                        u++, ki.debug(e.name + " attempt #" + u + " with this vars: " + JSON.stringify(t)), N.label = 1;
                      case 1:
                        return N.trys.push([1, 3, , 7]), m = {}, w = s, [4, e.apply(void 0, at(t))];
                      case 2:
                        return [2, (m.value = w.apply(void 0, [N.sent()]), m)];
                      case 3:
                        return v = N.sent(), d = v, ki.debug("error on " + e.name, v), ME(v) ? (ki.debug(e.name + " non retryable error", v), [2, { value: a(v) }]) : (T = r(u, t, v), ki.debug(e.name + " retrying in " + T + " ms"), T === !1 || c ? [2, { value: a(v) }] : [3, 4]);
                      case 4:
                        return [4, new Promise(function(E) {
                          f = E, l = setTimeout(f, T);
                        })];
                      case 5:
                        N.sent(), N.label = 6;
                      case 6:
                        return [3, 7];
                      case 7:
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                }, M.label = 1;
              case 1:
                return c ? [3, 3] : [5, h()];
              case 2:
                return g = M.sent(), typeof g == "object" ? [2, g.value] : [3, 1];
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
var Dh = 5 * 60 * 1e3;
function mE(e) {
  e === void 0 && (e = Dh);
  var t = 100, r = 100;
  return function(n) {
    var i = Math.pow(2, n) * t + r * Math.random();
    return i > e ? !1 : i;
  };
}
var vE = function(e, t, r, n) {
  return r === void 0 && (r = Dh), yE(e, t, mE(r), n);
};
function wE(e) {
  return e.split("").map(function(t) {
    return t.charCodeAt(0).toString(16).padStart(2, "0");
  }).join("");
}
function DE(e) {
  return e.match(/.{2}/g).map(function(t) {
    return String.fromCharCode(parseInt(t, 16));
  }).join("");
}
var AE = new Yt("Parser"), Ah = function(e) {
  var t = {};
  if (e.aws_mobile_analytics_app_id) {
    var r = {
      AWSPinpoint: {
        appId: e.aws_mobile_analytics_app_id,
        region: e.aws_mobile_analytics_app_region
      }
    };
    t.Analytics = r;
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
  var n;
  return e.aws_user_files_s3_bucket ? n = {
    AWSS3: {
      bucket: e.aws_user_files_s3_bucket,
      region: e.aws_user_files_s3_bucket_region,
      dangerouslyConnectToHttpEndpointForTesting: e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
    }
  } : n = e ? e.Storage || e : {}, e.Logging && (t.Logging = we(we({}, e.Logging), { region: e.aws_project_region })), e.geo && (t.Geo = Object.assign({}, e.geo), e.geo.amazon_location_service && (t.Geo = {
    AmazonLocationService: e.geo.amazon_location_service
  })), t.Analytics = Object.assign({}, t.Analytics, e.Analytics), t.Auth = Object.assign({}, t.Auth, e.Auth), t.Storage = Object.assign({}, n), t.Logging = Object.assign({}, t.Logging, e.Logging), AE.debug("parse config", e, "to amplifyconfig", t), t;
}, _a = function(e, t) {
  return _a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, _a(e, t);
};
function Fu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  _a(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ne = function() {
  return ne = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, ne.apply(this, arguments);
};
function gt(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function a(l) {
      try {
        c(n.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function ht(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function IE(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
var Ih = {}, qo = {}, Ai = {}, Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.isEmptyData = void 0;
function EE(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Ko.isEmptyData = EE;
var Qu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EMPTY_DATA_SHA_256 = e.SHA_256_HMAC_ALGO = e.SHA_256_HASH = void 0, e.SHA_256_HASH = { name: "SHA-256" }, e.SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: e.SHA_256_HASH
  }, e.EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
  ]);
})(Qu);
var NE = function(e) {
  for (var t = [], r = 0, n = e.length; r < n; r++) {
    var i = e.charCodeAt(r);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192, i & 63 | 128);
    else if (r + 1 < e.length && (i & 64512) === 55296 && (e.charCodeAt(r + 1) & 64512) === 56320) {
      var o = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023);
      t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
    } else
      t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
  }
  return Uint8Array.from(t);
}, TE = function(e) {
  for (var t = "", r = 0, n = e.length; r < n; r++) {
    var i = e[r];
    if (i < 128)
      t += String.fromCharCode(i);
    else if (192 <= i && i < 224) {
      var o = e[++r];
      t += String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (240 <= i && i < 365) {
      var s = [i, e[++r], e[++r], e[++r]], a = "%" + s.map(function(u) {
        return u.toString(16);
      }).join("%");
      t += decodeURIComponent(a);
    } else
      t += String.fromCharCode((i & 15) << 12 | (e[++r] & 63) << 6 | e[++r] & 63);
  }
  return t;
};
function jE(e) {
  return new TextEncoder().encode(e);
}
function SE(e) {
  return new TextDecoder("utf-8").decode(e);
}
var Eh = function(e) {
  return typeof TextEncoder == "function" ? jE(e) : NE(e);
}, Nh = function(e) {
  return typeof TextDecoder == "function" ? SE(e) : TE(e);
};
const bE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: Eh,
  toUtf8: Nh
}, Symbol.toStringTag, { value: "Module" })), xE = /* @__PURE__ */ Ao(bE), CE = {};
function OE() {
  return typeof window < "u" ? window : typeof self < "u" ? self : CE;
}
const LE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  locateWindow: OE
}, Symbol.toStringTag, { value: "Module" })), Bu = /* @__PURE__ */ Ao(LE);
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.Sha256 = void 0;
var _E = Ko, Th = Qu, kE = xE, ka = Bu, zE = (
  /** @class */
  function() {
    function e(t) {
      t ? (this.operation = PE(t).then(function(r) {
        return (0, ka.locateWindow)().msCrypto.subtle.sign(Th.SHA_256_HMAC_ALGO, r);
      }), this.operation.catch(function() {
      })) : this.operation = Promise.resolve((0, ka.locateWindow)().msCrypto.subtle.digest("SHA-256"));
    }
    return e.prototype.update = function(t) {
      var r = this;
      (0, _E.isEmptyData)(t) || (this.operation = this.operation.then(function(n) {
        return n.onerror = function() {
          r.operation = Promise.reject(new Error("Error encountered updating hash"));
        }, n.process(jh(t)), n;
      }), this.operation.catch(function() {
      }));
    }, e.prototype.digest = function() {
      return this.operation.then(function(t) {
        return new Promise(function(r, n) {
          t.onerror = function() {
            n(new Error("Error encountered finalizing hash"));
          }, t.oncomplete = function() {
            t.result && r(new Uint8Array(t.result)), n(new Error("Error encountered finalizing hash"));
          }, t.finish();
        });
      });
    }, e;
  }()
);
Ai.Sha256 = zE;
function PE(e) {
  return new Promise(function(t, r) {
    var n = (0, ka.locateWindow)().msCrypto.subtle.importKey("raw", jh(e), Th.SHA_256_HMAC_ALGO, !1, ["sign"]);
    n.oncomplete = function() {
      n.result && t(n.result), r(new Error("ImportKey completed without importing key."));
    }, n.onerror = function() {
      r(new Error("ImportKey failed to import key."));
    };
  });
}
function jh(e) {
  return typeof e == "string" ? (0, kE.fromUtf8)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.Sha256 = void 0;
var zi = Yu, Pi = Qu, Es = Bu, RE = (
  /** @class */
  function() {
    function e(t) {
      this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function(r, n) {
        (0, Es.locateWindow)().crypto.subtle.importKey("raw", (0, zi.convertToBuffer)(t), Pi.SHA_256_HMAC_ALGO, !1, ["sign"]).then(r, n);
      }), this.key.catch(function() {
      }));
    }
    return e.prototype.update = function(t) {
      if (!(0, zi.isEmptyData)(t)) {
        var r = (0, zi.convertToBuffer)(t), n = new Uint8Array(this.toHash.byteLength + r.byteLength);
        n.set(this.toHash, 0), n.set(r, this.toHash.byteLength), this.toHash = n;
      }
    }, e.prototype.digest = function() {
      var t = this;
      return this.key ? this.key.then(function(r) {
        return (0, Es.locateWindow)().crypto.subtle.sign(Pi.SHA_256_HMAC_ALGO, r, t.toHash).then(function(n) {
          return new Uint8Array(n);
        });
      }) : (0, zi.isEmptyData)(this.toHash) ? Promise.resolve(Pi.EMPTY_DATA_SHA_256) : Promise.resolve().then(function() {
        return (0, Es.locateWindow)().crypto.subtle.digest(Pi.SHA_256_HASH, t.toHash);
      }).then(function(r) {
        return Promise.resolve(new Uint8Array(r));
      });
    }, e;
  }()
);
Ii.Sha256 = RE;
var Sh = {}, zt = {}, Kl;
function UE() {
  if (Kl)
    return zt;
  Kl = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.supportsZeroByteGCM = zt.supportsSubtleCrypto = zt.supportsSecureRandom = zt.supportsWebCrypto = void 0;
  var e = ue, t = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
  ];
  function r(s) {
    if (n(s) && typeof s.crypto.subtle == "object") {
      var a = s.crypto.subtle;
      return i(a);
    }
    return !1;
  }
  zt.supportsWebCrypto = r;
  function n(s) {
    if (typeof s == "object" && typeof s.crypto == "object") {
      var a = s.crypto.getRandomValues;
      return typeof a == "function";
    }
    return !1;
  }
  zt.supportsSecureRandom = n;
  function i(s) {
    return s && t.every(function(a) {
      return typeof s[a] == "function";
    });
  }
  zt.supportsSubtleCrypto = i;
  function o(s) {
    return e.__awaiter(this, void 0, void 0, function() {
      var a, u;
      return e.__generator(this, function(c) {
        switch (c.label) {
          case 0:
            if (!i(s))
              return [2, !1];
            c.label = 1;
          case 1:
            return c.trys.push([1, 4, , 5]), [4, s.generateKey({ name: "AES-GCM", length: 128 }, !1, ["encrypt"])];
          case 2:
            return a = c.sent(), [4, s.encrypt({
              name: "AES-GCM",
              iv: new Uint8Array(Array(12)),
              additionalData: new Uint8Array(Array(16)),
              tagLength: 128
            }, a, new Uint8Array(0))];
          case 3:
            return u = c.sent(), [2, u.byteLength === 16];
          case 4:
            return c.sent(), [2, !1];
          case 5:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return zt.supportsZeroByteGCM = o, zt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(UE(), e);
})(Sh);
var bh = {}, Ns = {}, Gl;
function YE() {
  return Gl || (Gl = 1, Object.defineProperty(Ns, "__esModule", { value: !0 })), Ns;
}
var Ts = {}, Jl;
function FE() {
  return Jl || (Jl = 1, Object.defineProperty(Ts, "__esModule", { value: !0 })), Ts;
}
var js = {}, Zl;
function QE() {
  return Zl || (Zl = 1, Object.defineProperty(js, "__esModule", { value: !0 })), js;
}
var Ss = {}, Xl;
function BE() {
  return Xl || (Xl = 1, Object.defineProperty(Ss, "__esModule", { value: !0 })), Ss;
}
var Rn = {}, ef;
function $E() {
  if (ef)
    return Rn;
  ef = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.isMsWindow = void 0;
  var e = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
  ];
  function t(n) {
    return "MSInputMethodContext" in n && "msCrypto" in n;
  }
  function r(n) {
    if (t(n) && n.msCrypto.subtle !== void 0) {
      var i = n.msCrypto, o = i.getRandomValues, s = i.subtle;
      return e.map(function(a) {
        return s[a];
      }).concat(o).every(function(a) {
        return typeof a == "function";
      });
    }
    return !1;
  }
  return Rn.isMsWindow = r, Rn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(YE(), e), t.__exportStar(FE(), e), t.__exportStar(QE(), e), t.__exportStar(BE(), e), t.__exportStar($E(), e);
})(bh);
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.Sha256 = void 0;
var VE = Ai, WE = Ii, HE = wr, qE = Sh, KE = bh, tf = Bu, GE = (
  /** @class */
  function() {
    function e(t) {
      (0, qE.supportsWebCrypto)((0, tf.locateWindow)()) ? this.hash = new WE.Sha256(t) : (0, KE.isMsWindow)((0, tf.locateWindow)()) ? this.hash = new VE.Sha256(t) : this.hash = new HE.Sha256(t);
    }
    return e.prototype.update = function(t, r) {
      this.hash.update(t, r);
    }, e.prototype.digest = function() {
      return this.hash.digest();
    }, e;
  }()
);
qo.Sha256 = GE;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebCryptoSha256 = e.Ie11Sha256 = void 0;
  var t = ue;
  (0, t.__exportStar)(qo, e);
  var r = Ai;
  Object.defineProperty(e, "Ie11Sha256", { enumerable: !0, get: function() {
    return r.Sha256;
  } });
  var n = Ii;
  Object.defineProperty(e, "WebCryptoSha256", { enumerable: !0, get: function() {
    return n.Sha256;
  } });
})(Ih);
var rf = (
  /** @class */
  function() {
    function e(t) {
      this.statusCode = t.statusCode, this.headers = t.headers || {}, this.body = t.body;
    }
    return e.isInstance = function(t) {
      if (!t)
        return !1;
      var r = t;
      return typeof r.statusCode == "number" && typeof r.headers == "object";
    }, e;
  }()
), An = (
  /** @class */
  function() {
    function e(t) {
      this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.substr(-1) !== ":" ? t.protocol + ":" : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? "/" + t.path : t.path : "/";
    }
    return e.isInstance = function(t) {
      if (!t)
        return !1;
      var r = t;
      return "method" in r && "protocol" in r && "hostname" in r && "path" in r && typeof r.query == "object" && typeof r.headers == "object";
    }, e.prototype.clone = function() {
      var t = new e(we(we({}, this), { headers: we({}, this.headers) }));
      return t.query && (t.query = JE(t.query)), t;
    }, e;
  }()
);
function JE(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n, i = e[r];
    return we(we({}, t), (n = {}, n[r] = Array.isArray(i) ? at(i) : i, n));
  }, {});
}
var Yr = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, ZE);
}, ZE = function(e) {
  return "%" + e.charCodeAt(0).toString(16).toUpperCase();
};
function XE(e) {
  var t, r, n = [];
  try {
    for (var i = kt(Object.keys(e).sort()), o = i.next(); !o.done; o = i.next()) {
      var s = o.value, a = e[s];
      if (s = Yr(s), Array.isArray(a))
        for (var u = 0, c = a.length; u < c; u++)
          n.push(s + "=" + Yr(a[u]));
      else {
        var l = s;
        (a || typeof a == "string") && (l += "=" + Yr(a)), n.push(l);
      }
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      o && !o.done && (r = i.return) && r.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return n.join("&");
}
function eN(e) {
  return e === void 0 && (e = 0), new Promise(function(t, r) {
    e && setTimeout(function() {
      var n = new Error("Request did not complete within " + e + " ms");
      n.name = "TimeoutError", r(n);
    }, e);
  });
}
var tN = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.requestTimeout;
      this.requestTimeout = n;
    }
    return e.prototype.destroy = function() {
    }, e.prototype.handle = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.abortSignal, o = this.requestTimeout;
      if (i != null && i.aborted) {
        var s = new Error("Request aborted");
        return s.name = "AbortError", Promise.reject(s);
      }
      var a = t.path;
      if (t.query) {
        var u = XE(t.query);
        u && (a += "?" + u);
      }
      var c = t.port, l = t.method, f = t.protocol + "//" + t.hostname + (c ? ":" + c : "") + a, d = l === "GET" || l === "HEAD" ? void 0 : t.body, h = {
        body: d,
        headers: new Headers(t.headers),
        method: l
      };
      typeof AbortController < "u" && (h.signal = i);
      var g = new Request(f, h), M = [
        fetch(g).then(function(m) {
          var w, v, T = m.headers, N = {};
          try {
            for (var E = kt(T.entries()), P = E.next(); !P.done; P = E.next()) {
              var k = P.value;
              N[k[0]] = k[1];
            }
          } catch (F) {
            w = { error: F };
          } finally {
            try {
              P && !P.done && (v = E.return) && v.call(E);
            } finally {
              if (w)
                throw w.error;
            }
          }
          var B = m.body !== void 0;
          return B ? {
            response: new rf({
              headers: N,
              statusCode: m.status,
              body: m.body
            })
          } : m.blob().then(function(F) {
            return {
              response: new rf({
                headers: N,
                statusCode: m.status,
                body: F
              })
            };
          });
        }),
        eN(o)
      ];
      return i && M.push(new Promise(function(m, w) {
        i.onabort = function() {
          var v = new Error("Request aborted");
          v.name = "AbortError", w(v);
        };
      })), Promise.race(M);
    }, e;
  }()
), $r = {}, Tn = new Array(64);
for (var lt = 0, fi = "A".charCodeAt(0), $u = "Z".charCodeAt(0); lt + fi <= $u; lt++) {
  var Ar = String.fromCharCode(lt + fi);
  $r[Ar] = lt, Tn[lt] = Ar;
}
for (var lt = 0, fi = "a".charCodeAt(0), $u = "z".charCodeAt(0); lt + fi <= $u; lt++) {
  var Ar = String.fromCharCode(lt + fi), di = lt + 26;
  $r[Ar] = di, Tn[di] = Ar;
}
for (var lt = 0; lt < 10; lt++) {
  $r[lt.toString(10)] = lt + 52;
  var Ar = lt.toString(10), di = lt + 52;
  $r[Ar] = di, Tn[di] = Ar;
}
$r["+"] = 62;
Tn[62] = "+";
$r["/"] = 63;
Tn[63] = "/";
var pn = 6, ei = 8, rN = 63;
function xh(e) {
  var t = e.length / 4 * 3;
  e.substr(-2) === "==" ? t -= 2 : e.substr(-1) === "=" && t--;
  for (var r = new ArrayBuffer(t), n = new DataView(r), i = 0; i < e.length; i += 4) {
    for (var o = 0, s = 0, a = i, u = i + 3; a <= u; a++)
      e[a] !== "=" ? (o |= $r[e[a]] << (u - a) * pn, s += pn) : o >>= pn;
    var c = i / 4 * 3;
    o >>= s % ei;
    for (var l = Math.floor(s / ei), f = 0; f < l; f++) {
      var d = (l - f - 1) * ei;
      n.setUint8(c + f, (o & 255 << d) >> d);
    }
  }
  return new Uint8Array(r);
}
function nN(e) {
  for (var t = "", r = 0; r < e.length; r += 3) {
    for (var n = 0, i = 0, o = r, s = Math.min(r + 3, e.length); o < s; o++)
      n |= e[o] << (s - o - 1) * ei, i += ei;
    var a = Math.ceil(i / pn);
    n <<= a * pn - i;
    for (var u = 1; u <= a; u++) {
      var c = (a - u) * pn;
      t += Tn[(n & rN << c) >> c];
    }
    t += "==".slice(0, 4 - a);
  }
  return t;
}
var iN = function(e) {
  return typeof Blob == "function" && e instanceof Blob ? oN(e) : sN(e);
};
function oN(e) {
  return Ee(this, void 0, void 0, function() {
    var t, r;
    return Ie(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, aN(e)];
        case 1:
          return t = n.sent(), r = xh(t), [2, new Uint8Array(r)];
      }
    });
  });
}
function sN(e) {
  return Ee(this, void 0, void 0, function() {
    var t, r, n, i, o, s, a;
    return Ie(this, function(u) {
      switch (u.label) {
        case 0:
          t = new Uint8Array(0), r = e.getReader(), n = !1, u.label = 1;
        case 1:
          return n ? [3, 3] : [4, r.read()];
        case 2:
          return i = u.sent(), o = i.done, s = i.value, s && (a = t, t = new Uint8Array(a.length + s.length), t.set(a), t.set(s, a.length)), n = o, [3, 1];
        case 3:
          return [2, t];
      }
    });
  });
}
function aN(e) {
  return new Promise(function(t, r) {
    var n = new FileReader();
    n.onloadend = function() {
      var i;
      if (n.readyState !== 2)
        return r(new Error("Reader aborted too early"));
      var o = (i = n.result) !== null && i !== void 0 ? i : "", s = o.indexOf(","), a = s > -1 ? s + 1 : o.length;
      t(o.substring(a));
    }, n.onabort = function() {
      return r(new Error("Read aborted"));
    }, n.onerror = function() {
      return r(n.error);
    }, n.readAsDataURL(e);
  });
}
var uN = function(e) {
  return function() {
    return Promise.reject(e);
  };
}, cN = function(e) {
  return function(t, r) {
    return function(n) {
      return Ee(void 0, void 0, void 0, function() {
        var i;
        return Ie(this, function(o) {
          return !((i = e == null ? void 0 : e.retryStrategy) === null || i === void 0) && i.mode && (r.userAgent = at(r.userAgent || [], [["cfg/retry-mode", e.retryStrategy.mode]])), [2, e.retryStrategy.retry(t, n)];
        });
      });
    };
  };
}, lN = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: !0
}, fN = function(e) {
  return {
    applyToStack: function(t) {
      t.add(cN(e), lN);
    }
  };
}, dN = 100, gN = 20 * 1e3, hN = 500, pN = 500, MN = 5, yN = 10, mN = 1, vN = "amz-sdk-invocation-id", wN = "amz-sdk-request", DN = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
], AN = [
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
  "TooManyRequestsException",
  "TransactionInProgressException"
], IN = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"], EN = [500, 502, 503, 504], NN = function(e) {
  return e.$retryable !== void 0;
}, TN = function(e) {
  return DN.includes(e.name);
}, Ch = function(e) {
  var t, r;
  return ((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) === 429 || AN.includes(e.name) || ((r = e.$retryable) === null || r === void 0 ? void 0 : r.throttling) == !0;
}, jN = function(e) {
  var t;
  return IN.includes(e.name) || EN.includes(((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) || 0);
}, za = { exports: {} }, nf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (nf) {
  var of = new Uint8Array(16);
  za.exports = function() {
    return nf(of), of;
  };
} else {
  var sf = new Array(16);
  za.exports = function() {
    for (var t = 0, r; t < 16; t++)
      t & 3 || (r = Math.random() * 4294967296), sf[t] = r >>> ((t & 3) << 3) & 255;
    return sf;
  };
}
var Oh = za.exports, Lh = [];
for (var Ri = 0; Ri < 256; ++Ri)
  Lh[Ri] = (Ri + 256).toString(16).substr(1);
function SN(e, t) {
  var r = t || 0, n = Lh;
  return [
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    "-",
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]],
    n[e[r++]]
  ].join("");
}
var _h = SN, bN = Oh, xN = _h, af, bs, xs = 0, Cs = 0;
function CN(e, t, r) {
  var n = t && r || 0, i = t || [];
  e = e || {};
  var o = e.node || af, s = e.clockseq !== void 0 ? e.clockseq : bs;
  if (o == null || s == null) {
    var a = bN();
    o == null && (o = af = [
      a[0] | 1,
      a[1],
      a[2],
      a[3],
      a[4],
      a[5]
    ]), s == null && (s = bs = (a[6] << 8 | a[7]) & 16383);
  }
  var u = e.msecs !== void 0 ? e.msecs : (/* @__PURE__ */ new Date()).getTime(), c = e.nsecs !== void 0 ? e.nsecs : Cs + 1, l = u - xs + (c - Cs) / 1e4;
  if (l < 0 && e.clockseq === void 0 && (s = s + 1 & 16383), (l < 0 || u > xs) && e.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  xs = u, Cs = c, bs = s, u += 122192928e5;
  var f = ((u & 268435455) * 1e4 + c) % 4294967296;
  i[n++] = f >>> 24 & 255, i[n++] = f >>> 16 & 255, i[n++] = f >>> 8 & 255, i[n++] = f & 255;
  var d = u / 4294967296 * 1e4 & 268435455;
  i[n++] = d >>> 8 & 255, i[n++] = d & 255, i[n++] = d >>> 24 & 15 | 16, i[n++] = d >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = s & 255;
  for (var h = 0; h < 6; ++h)
    i[n + h] = o[h];
  return t || xN(i);
}
var ON = CN, LN = Oh, _N = _h;
function kN(e, t, r) {
  var n = t && r || 0;
  typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
  var i = e.random || (e.rng || LN)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
    for (var o = 0; o < 16; ++o)
      t[n + o] = i[o];
  return t || _N(i);
}
var zN = kN, PN = ON, kh = zN, Vu = kh;
Vu.v1 = PN;
Vu.v4 = kh;
var RN = Vu, UN = function(e) {
  var t = e, r = e, n = function(a) {
    return a.name === "TimeoutError" ? yN : MN;
  }, i = function(a) {
    return n(a) <= r;
  }, o = function(a) {
    if (!i(a))
      throw new Error("No retry token available");
    var u = n(a);
    return r -= u, u;
  }, s = function(a) {
    r += a ?? mN, r = Math.min(r, t);
  };
  return Object.freeze({
    hasRetryTokens: i,
    retrieveRetryTokens: o,
    releaseRetryTokens: s
  });
}, YN = function(e, t) {
  return Math.floor(Math.min(gN, Math.random() * Math.pow(2, t) * e));
}, FN = function(e) {
  return e ? NN(e) || TN(e) || Ch(e) || jN(e) : !1;
}, Wu = 3, QN = "standard", BN = (
  /** @class */
  function() {
    function e(t, r) {
      var n, i, o;
      this.maxAttemptsProvider = t, this.mode = QN, this.retryDecider = (n = r == null ? void 0 : r.retryDecider) !== null && n !== void 0 ? n : FN, this.delayDecider = (i = r == null ? void 0 : r.delayDecider) !== null && i !== void 0 ? i : YN, this.retryQuota = (o = r == null ? void 0 : r.retryQuota) !== null && o !== void 0 ? o : UN(pN);
    }
    return e.prototype.shouldRetry = function(t, r, n) {
      return r < n && this.retryDecider(t) && this.retryQuota.hasRetryTokens(t);
    }, e.prototype.getMaxAttempts = function() {
      return Ee(this, void 0, void 0, function() {
        var t;
        return Ie(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.maxAttemptsProvider()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              return r.sent(), t = Wu, [3, 3];
            case 3:
              return [2, t];
          }
        });
      });
    }, e.prototype.retry = function(t, r) {
      return Ee(this, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l;
        return Ie(this, function(f) {
          switch (f.label) {
            case 0:
              return i = 0, o = 0, [4, this.getMaxAttempts()];
            case 1:
              s = f.sent(), a = r.request, An.isInstance(a) && (a.headers[vN] = RN.v4()), u = function() {
                var d, h, g, M, m;
                return Ie(this, function(w) {
                  switch (w.label) {
                    case 0:
                      return w.trys.push([0, 2, , 5]), An.isInstance(a) && (a.headers[wN] = "attempt=" + (i + 1) + "; max=" + s), [4, t(r)];
                    case 1:
                      return d = w.sent(), h = d.response, g = d.output, c.retryQuota.releaseRetryTokens(n), g.$metadata.attempts = i + 1, g.$metadata.totalRetryDelay = o, [2, { value: { response: h, output: g } }];
                    case 2:
                      return M = w.sent(), i++, c.shouldRetry(M, i, s) ? (n = c.retryQuota.retrieveRetryTokens(M), m = c.delayDecider(Ch(M) ? hN : dN, i), o += m, [4, new Promise(function(v) {
                        return setTimeout(v, m);
                      })]) : [3, 4];
                    case 3:
                      return w.sent(), [2, "continue"];
                    case 4:
                      throw M.$metadata || (M.$metadata = {}), M.$metadata.attempts = i, M.$metadata.totalRetryDelay = o, M;
                    case 5:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              }, c = this, f.label = 2;
            case 2:
              return [5, u()];
            case 3:
              return l = f.sent(), typeof l == "object" ? [2, l.value] : [3, 2];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e;
  }()
), $N = function(e) {
  var t = VN(e.maxAttempts);
  return we(we({}, e), { maxAttempts: t, retryStrategy: e.retryStrategy || new BN(t) });
}, VN = function(e) {
  if (e === void 0 && (e = Wu), typeof e == "number") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
};
function WN(e) {
  if (typeof e == "string") {
    for (var t = e.length, r = t - 1; r >= 0; r--) {
      var n = e.charCodeAt(r);
      n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2);
    }
    return t;
  } else {
    if (typeof e.byteLength == "number")
      return e.byteLength;
    if (typeof e.size == "number")
      return e.size;
  }
}
const HN = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, zh = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, rt = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, Mt = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, fr = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class se {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(t, r) {
    const n = r.match(t);
    return n && n.length > 0 && n[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(t, r) {
    const n = r.match(t);
    return n && n.length > 1 && n[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(t, r, n) {
    if (t.test(r))
      return n;
  }
  static getWindowsVersionName(t) {
    switch (t) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(t) {
    const r = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), r[0] === 10)
      switch (r[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(t) {
    const r = t.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), !(r[0] === 1 && r[1] < 5)) {
      if (r[0] === 1 && r[1] < 6)
        return "Cupcake";
      if (r[0] === 1 && r[1] >= 6)
        return "Donut";
      if (r[0] === 2 && r[1] < 2)
        return "Eclair";
      if (r[0] === 2 && r[1] === 2)
        return "Froyo";
      if (r[0] === 2 && r[1] > 2)
        return "Gingerbread";
      if (r[0] === 3)
        return "Honeycomb";
      if (r[0] === 4 && r[1] < 1)
        return "Ice Cream Sandwich";
      if (r[0] === 4 && r[1] < 4)
        return "Jelly Bean";
      if (r[0] === 4 && r[1] >= 4)
        return "KitKat";
      if (r[0] === 5)
        return "Lollipop";
      if (r[0] === 6)
        return "Marshmallow";
      if (r[0] === 7)
        return "Nougat";
      if (r[0] === 8)
        return "Oreo";
      if (r[0] === 9)
        return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(t, r, n = !1) {
    const i = se.getVersionPrecision(t), o = se.getVersionPrecision(r);
    let s = Math.max(i, o), a = 0;
    const u = se.map([t, r], (c) => {
      const l = s - se.getVersionPrecision(c), f = c + new Array(l + 1).join(".0");
      return se.map(f.split("."), (d) => new Array(20 - d.length).join("0") + d).reverse();
    });
    for (n && (a = s - Math.min(i, o)), s -= 1; s >= a; ) {
      if (u[0][s] > u[1][s])
        return 1;
      if (u[0][s] === u[1][s]) {
        if (s === a)
          return 0;
        s -= 1;
      } else if (u[0][s] < u[1][s])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(t, r) {
    const n = [];
    let i;
    if (Array.prototype.map)
      return Array.prototype.map.call(t, r);
    for (i = 0; i < t.length; i += 1)
      n.push(r(t[i]));
    return n;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(t, r) {
    let n, i;
    if (Array.prototype.find)
      return Array.prototype.find.call(t, r);
    for (n = 0, i = t.length; n < i; n += 1) {
      const o = t[n];
      if (r(o, n))
        return o;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(t, ...r) {
    const n = t;
    let i, o;
    if (Object.assign)
      return Object.assign(t, ...r);
    for (i = 0, o = r.length; i < o; i += 1) {
      const s = r[i];
      typeof s == "object" && s !== null && Object.keys(s).forEach((u) => {
        n[u] = s[u];
      });
    }
    return t;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(t) {
    return HN[t];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(t) {
    return zh[t] || "";
  }
}
const He = /version\/(\d+(\.?_?\d+)+)/i, qN = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(e) {
      const t = {
        name: "Googlebot"
      }, r = se.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, r = se.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(e) {
      const t = {
        name: "Samsung Internet for Android"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/Whale/i],
    describe(e) {
      const t = {
        name: "NAVER Whale Browser"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(e) {
      const t = {
        name: "MZ Browser"
      }, r = se.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/focus/i],
    describe(e) {
      const t = {
        name: "Focus"
      }, r = se.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/swing/i],
    describe(e) {
      const t = {
        name: "Swing"
      }, r = se.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/coast/i],
    describe(e) {
      const t = {
        name: "Opera Coast"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
      const t = {
        name: "Opera Touch"
      }, r = se.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/yabrowser/i],
    describe(e) {
      const t = {
        name: "Yandex Browser"
      }, r = se.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(e) {
      const t = {
        name: "UC Browser"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(e) {
      const t = {
        name: "Maxthon"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/epiphany/i],
    describe(e) {
      const t = {
        name: "Epiphany"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/puffin/i],
    describe(e) {
      const t = {
        name: "Puffin"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/sleipnir/i],
    describe(e) {
      const t = {
        name: "Sleipnir"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/k-meleon/i],
    describe(e) {
      const t = {
        name: "K-Meleon"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/micromessenger/i],
    describe(e) {
      const t = {
        name: "WeChat"
      }, r = se.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(e) {
      const t = {
        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
      }, r = se.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/msie|trident/i],
    describe(e) {
      const t = {
        name: "Internet Explorer"
      }, r = se.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/\sedg\//i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, r = se.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, r = se.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/vivaldi/i],
    describe(e) {
      const t = {
        name: "Vivaldi"
      }, r = se.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/seamonkey/i],
    describe(e) {
      const t = {
        name: "SeaMonkey"
      }, r = se.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/sailfish/i],
    describe(e) {
      const t = {
        name: "Sailfish"
      }, r = se.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/silk/i],
    describe(e) {
      const t = {
        name: "Amazon Silk"
      }, r = se.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/phantom/i],
    describe(e) {
      const t = {
        name: "PhantomJS"
      }, r = se.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/slimerjs/i],
    describe(e) {
      const t = {
        name: "SlimerJS"
      }, r = se.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = {
        name: "BlackBerry"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = {
        name: "WebOS Browser"
      }, r = se.getFirstMatch(He, e) || se.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/bada/i],
    describe(e) {
      const t = {
        name: "Bada"
      }, r = se.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/tizen/i],
    describe(e) {
      const t = {
        name: "Tizen"
      }, r = se.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/qupzilla/i],
    describe(e) {
      const t = {
        name: "QupZilla"
      }, r = se.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
      const t = {
        name: "Firefox"
      }, r = se.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/electron/i],
    describe(e) {
      const t = {
        name: "Electron"
      }, r = se.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(e) {
      const t = {
        name: "Miui"
      }, r = se.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/chromium/i],
    describe(e) {
      const t = {
        name: "Chromium"
      }, r = se.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(e) {
      const t = {
        name: "Chrome"
      }, r = se.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  {
    test: [/GSA/i],
    describe(e) {
      const t = {
        name: "Google Search"
      }, r = se.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  /* Android Browser */
  {
    test(e) {
      const t = !e.test(/like android/i), r = e.test(/android/i);
      return t && r;
    },
    describe(e) {
      const t = {
        name: "Android Browser"
      }, r = se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(e) {
      const t = {
        name: "PlayStation 4"
      }, r = se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(e) {
      const t = {
        name: "Safari"
      }, r = se.getFirstMatch(He, e);
      return r && (t.version = r), t;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(e) {
      const t = /^(.*)\/(.*) /, r = /^(.*)\/(.*)[ \t]\((.*)/, i = e.search("\\(") !== -1 ? r : t;
      return {
        name: se.getFirstMatch(i, e),
        version: se.getSecondMatch(i, e)
      };
    }
  }
], KN = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(e) {
      const t = se.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
      return {
        name: Mt.Roku,
        version: t
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(e) {
      const t = se.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
      return {
        name: Mt.WindowsPhone,
        version: t
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(e) {
      const t = se.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = se.getWindowsVersionName(t);
      return {
        name: Mt.Windows,
        version: t,
        versionName: r
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
      const t = {
        name: Mt.iOS
      }, r = se.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
      return r && (t.version = r), t;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(e) {
      const t = se.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), r = se.getMacOSVersionName(t), n = {
        name: Mt.MacOS,
        version: t
      };
      return r && (n.versionName = r), n;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
      const t = se.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
      return {
        name: Mt.iOS,
        version: t
      };
    }
  },
  /* Android */
  {
    test(e) {
      const t = !e.test(/like android/i), r = e.test(/android/i);
      return t && r;
    },
    describe(e) {
      const t = se.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = se.getAndroidVersionName(t), n = {
        name: Mt.Android,
        version: t
      };
      return r && (n.versionName = r), n;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = se.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = {
        name: Mt.WebOS
      };
      return t && t.length && (r.version = t), r;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = se.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || se.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || se.getFirstMatch(/\bbb(\d+)/i, e);
      return {
        name: Mt.BlackBerry,
        version: t
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(e) {
      const t = se.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
      return {
        name: Mt.Bada,
        version: t
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(e) {
      const t = se.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Mt.Tizen,
        version: t
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: Mt.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: Mt.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(e) {
      const t = se.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Mt.PlayStation4,
        version: t
      };
    }
  }
], GN = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(e) {
      const t = se.getFirstMatch(/(can-l01)/i, e) && "Nova", r = {
        type: rt.mobile,
        vendor: "Huawei"
      };
      return t && (r.model = t), r;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: rt.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: rt.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: rt.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: rt.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: rt.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: rt.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(e) {
      const t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
      return t && !r;
    },
    describe(e) {
      const t = se.getFirstMatch(/(ipod|iphone)/i, e);
      return {
        type: rt.mobile,
        vendor: "Apple",
        model: t
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: rt.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: rt.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(e) {
      return e.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: rt.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(e) {
      return e.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: rt.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(e) {
      return e.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: rt.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(e) {
      const t = Number(String(e.getOSVersion()).split(".")[0]);
      return e.getOSName(!0) === "android" && t >= 3;
    },
    describe() {
      return {
        type: rt.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(e) {
      return e.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: rt.mobile
      };
    }
  },
  /* desktop */
  {
    test(e) {
      return e.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: rt.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(e) {
      return e.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: rt.desktop
      };
    }
  },
  /* Linux */
  {
    test(e) {
      return e.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: rt.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(e) {
      return e.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: rt.tv
      };
    }
  },
  /* Roku */
  {
    test(e) {
      return e.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: rt.tv
      };
    }
  }
], JN = [
  /* EdgeHTML */
  {
    test(e) {
      return e.getBrowserName(!0) === "microsoft edge";
    },
    describe(e) {
      if (/\sedg\//i.test(e))
        return {
          name: fr.Blink
        };
      const r = se.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: fr.EdgeHTML,
        version: r
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(e) {
      const t = {
        name: fr.Trident
      }, r = se.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  /* Presto */
  {
    test(e) {
      return e.test(/presto/i);
    },
    describe(e) {
      const t = {
        name: fr.Presto
      }, r = se.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  /* Gecko */
  {
    test(e) {
      const t = e.test(/gecko/i), r = e.test(/like gecko/i);
      return t && !r;
    },
    describe(e) {
      const t = {
        name: fr.Gecko
      }, r = se.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: fr.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
        name: fr.WebKit
      }, r = se.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return r && (t.version = r), t;
    }
  }
];
class uf {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(t, r = !1) {
    if (t == null || t === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, r !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(t) {
    return t.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = se.find(qN, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(t) {
    return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const t = se.find(KN, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(t) {
    const { name: r } = this.getOS();
    return t ? String(r).toLowerCase() || "" : r || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(t = !1) {
    const { type: r } = this.getPlatform();
    return t ? String(r).toLowerCase() || "" : r || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = se.find(GN, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(t) {
    return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const t = se.find(JN, (r) => {
      if (typeof r.test == "function")
        return r.test(this);
      if (r.test instanceof Array)
        return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return se.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(t) {
    const r = {};
    let n = 0;
    const i = {};
    let o = 0;
    if (Object.keys(t).forEach((a) => {
      const u = t[a];
      typeof u == "string" ? (i[a] = u, o += 1) : typeof u == "object" && (r[a] = u, n += 1);
    }), n > 0) {
      const a = Object.keys(r), u = se.find(a, (l) => this.isOS(l));
      if (u) {
        const l = this.satisfies(r[u]);
        if (l !== void 0)
          return l;
      }
      const c = se.find(
        a,
        (l) => this.isPlatform(l)
      );
      if (c) {
        const l = this.satisfies(r[c]);
        if (l !== void 0)
          return l;
      }
    }
    if (o > 0) {
      const a = Object.keys(i), u = se.find(a, (c) => this.isBrowser(c, !0));
      if (u !== void 0)
        return this.compareVersion(i[u]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(t, r = !1) {
    const n = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const o = se.getBrowserTypeByAlias(i);
    return r && o && (i = o.toLowerCase()), i === n;
  }
  compareVersion(t) {
    let r = [0], n = t, i = !1;
    const o = this.getBrowserVersion();
    if (typeof o == "string")
      return t[0] === ">" || t[0] === "<" ? (n = t.substr(1), t[1] === "=" ? (i = !0, n = t.substr(2)) : r = [], t[0] === ">" ? r.push(1) : r.push(-1)) : t[0] === "=" ? n = t.substr(1) : t[0] === "~" && (i = !0, n = t.substr(1)), r.indexOf(
        se.compareVersions(o, n, i)
      ) > -1;
  }
  isOS(t) {
    return this.getOSName(!0) === String(t).toLowerCase();
  }
  isPlatform(t) {
    return this.getPlatformType(!0) === String(t).toLowerCase();
  }
  isEngine(t) {
    return this.getEngineName(!0) === String(t).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(t, r = !1) {
    return this.isBrowser(t, r) || this.isOS(t) || this.isPlatform(t);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(t = []) {
    return t.some((r) => this.is(r));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class ZN {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(t, r = !1) {
    if (typeof t != "string")
      throw new Error("UserAgent should be a string");
    return new uf(t, r);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(t) {
    return new uf(t).getResult();
  }
  static get BROWSER_MAP() {
    return zh;
  }
  static get ENGINE_MAP() {
    return fr;
  }
  static get OS_MAP() {
    return Mt;
  }
  static get PLATFORMS_MAP() {
    return rt;
  }
}
var XN = function(e) {
  var t = e.serviceId, r = e.clientVersion;
  return function() {
    return Ee(void 0, void 0, void 0, function() {
      var n, i, o, s, a, u, c, l, f;
      return Ie(this, function(d) {
        return n = !((o = window == null ? void 0 : window.navigator) === null || o === void 0) && o.userAgent ? ZN.parse(window.navigator.userAgent) : void 0, i = [
          // sdk-metadata
          ["aws-sdk-js", r],
          // os-metadata
          ["os/" + (((s = n == null ? void 0 : n.os) === null || s === void 0 ? void 0 : s.name) || "other"), (a = n == null ? void 0 : n.os) === null || a === void 0 ? void 0 : a.version],
          // language-metadata
          // ECMAScript edition doesn't matter in JS.
          ["lang/js"],
          // browser vendor and version.
          ["md/browser", ((c = (u = n == null ? void 0 : n.browser) === null || u === void 0 ? void 0 : u.name) !== null && c !== void 0 ? c : "unknown") + "_" + ((f = (l = n == null ? void 0 : n.browser) === null || l === void 0 ? void 0 : l.version) !== null && f !== void 0 ? f : "unknown")]
        ], t && i.push(["api/" + t, r]), [2, i];
      });
    });
  };
};
function eT(e) {
  var t, r, n = {};
  if (e = e.replace(/^\?/, ""), e)
    try {
      for (var i = kt(e.split("&")), o = i.next(); !o.done; o = i.next()) {
        var s = o.value, a = Wr(s.split("="), 2), u = a[0], c = a[1], l = c === void 0 ? null : c;
        u = decodeURIComponent(u), l && (l = decodeURIComponent(l)), u in n ? Array.isArray(n[u]) ? n[u].push(l) : n[u] = [n[u], l] : n[u] = l;
      }
    } catch (f) {
      t = { error: f };
    } finally {
      try {
        o && !o.done && (r = i.return) && r.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
  return n;
}
var tT = function(e) {
  var t = new URL(e), r = t.hostname, n = t.pathname, i = t.port, o = t.protocol, s = t.search, a;
  return s && (a = eT(s)), {
    hostname: r,
    port: i ? parseInt(i) : void 0,
    protocol: o,
    path: n,
    query: a
  };
}, rT = function(e) {
  var t;
  return we(we({}, e), { tls: (t = e.tls) !== null && t !== void 0 ? t : !0, endpoint: e.endpoint ? nT(e) : function() {
    return iT(e);
  }, isCustomEndpoint: !!e.endpoint });
}, nT = function(e) {
  var t = e.endpoint, r = e.urlParser;
  if (typeof t == "string") {
    var n = Promise.resolve(r(t));
    return function() {
      return n;
    };
  } else if (typeof t == "object") {
    var i = Promise.resolve(t);
    return function() {
      return i;
    };
  }
  return t;
}, iT = function(e) {
  return Ee(void 0, void 0, void 0, function() {
    var t, r, n, i, o, s;
    return Ie(this, function(a) {
      switch (a.label) {
        case 0:
          return t = e.tls, r = t === void 0 ? !0 : t, [4, e.region()];
        case 1:
          if (n = a.sent(), i = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/), !i.test(n))
            throw new Error("Invalid region in client config");
          return [4, e.regionInfoProvider(n)];
        case 2:
          if (o = ((s = a.sent()) !== null && s !== void 0 ? s : {}).hostname, !o)
            throw new Error("Cannot resolve hostname from client config");
          return [2, e.urlParser((r ? "https:" : "http:") + "//" + o)];
      }
    });
  });
}, oT = function(e) {
  if (!e.region)
    throw new Error("Region is missing");
  return we(we({}, e), { region: sT(e.region) });
}, sT = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}, cf = "content-length";
function aT(e) {
  var t = this;
  return function(r) {
    return function(n) {
      return Ee(t, void 0, void 0, function() {
        var i, o, s, a, u;
        return Ie(this, function(c) {
          return i = n.request, An.isInstance(i) && (o = i.body, s = i.headers, o && Object.keys(s).map(function(l) {
            return l.toLowerCase();
          }).indexOf(cf) === -1 && (a = e(o), a !== void 0 && (i.headers = we(we({}, i.headers), (u = {}, u[cf] = String(a), u))))), [2, r(we(we({}, n), { request: i }))];
        });
      });
    };
  };
}
var uT = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: !0
}, cT = function(e) {
  return {
    applyToStack: function(t) {
      t.add(aT(e.bodyLengthChecker), uT);
    }
  };
};
var lT = function(e) {
  return function(t) {
    return function(r) {
      return Ee(void 0, void 0, void 0, function() {
        var n, i, o;
        return Ie(this, function(s) {
          return An.isInstance(r.request) ? (n = r.request, i = (e.requestHandler.metadata || {}).handlerProtocol, o = i === void 0 ? "" : i, o.indexOf("h2") >= 0 && !n.headers[":authority"] ? (delete n.headers.host, n.headers[":authority"] = "") : n.headers.host || (n.headers.host = n.hostname), [2, t(r)]) : [2, t(r)];
        });
      });
    };
  };
}, fT = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: !0
}, dT = function(e) {
  return {
    applyToStack: function(t) {
      t.add(lT(e), fT);
    }
  };
}, gT = function() {
  return function(e, t) {
    return function(r) {
      return Ee(void 0, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l, f;
        return Ie(this, function(d) {
          switch (d.label) {
            case 0:
              return n = t.clientName, i = t.commandName, o = t.inputFilterSensitiveLog, s = t.logger, a = t.outputFilterSensitiveLog, [4, e(r)];
            case 1:
              return u = d.sent(), s ? (typeof s.info == "function" && (c = u.output, l = c.$metadata, f = mh(c, ["$metadata"]), s.info({
                clientName: n,
                commandName: i,
                input: o(r.input),
                output: a(f),
                metadata: l
              })), [2, u]) : [2, u];
          }
        });
      });
    };
  };
}, hT = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: !0
}, pT = function(e) {
  return {
    applyToStack: function(t) {
      t.add(gT(), hT);
    }
  };
}, MT = "X-Amz-Algorithm", yT = "X-Amz-Credential", Ph = "X-Amz-Date", mT = "X-Amz-SignedHeaders", vT = "X-Amz-Expires", Rh = "X-Amz-Signature", Uh = "X-Amz-Security-Token", Yh = "authorization", Fh = Ph.toLowerCase(), wT = "date", DT = [Yh, Fh, wT], AT = Rh.toLowerCase(), Pa = "x-amz-content-sha256", IT = Uh.toLowerCase(), ET = {
  authorization: !0,
  "cache-control": !0,
  connection: !0,
  expect: !0,
  from: !0,
  "keep-alive": !0,
  "max-forwards": !0,
  pragma: !0,
  referer: !0,
  te: !0,
  trailer: !0,
  "transfer-encoding": !0,
  upgrade: !0,
  "user-agent": !0,
  "x-amzn-trace-id": !0
}, NT = /^proxy-/, TT = /^sec-/, Os = "AWS4-HMAC-SHA256", jT = "AWS4-HMAC-SHA256-PAYLOAD", ST = "UNSIGNED-PAYLOAD", bT = 50, Qh = "aws4_request", xT = 60 * 60 * 24 * 7, Ui = {}, Ls = [];
function _s(e, t, r) {
  return e + "/" + t + "/" + r + "/" + Qh;
}
var CT = function(e, t, r, n, i) {
  return Ee(void 0, void 0, void 0, function() {
    var o, s, a, u, c, l, f, d, h;
    return Ie(this, function(g) {
      switch (g.label) {
        case 0:
          return [4, lf(e, t.secretAccessKey, t.accessKeyId)];
        case 1:
          if (o = g.sent(), s = r + ":" + n + ":" + i + ":" + fn(o) + ":" + t.sessionToken, s in Ui)
            return [2, Ui[s]];
          for (Ls.push(s); Ls.length > bT; )
            delete Ui[Ls.shift()];
          a = "AWS4" + t.secretAccessKey, g.label = 2;
        case 2:
          g.trys.push([2, 7, 8, 9]), u = kt([r, n, i, Qh]), c = u.next(), g.label = 3;
        case 3:
          return c.done ? [3, 6] : (l = c.value, [4, lf(e, a, l)]);
        case 4:
          a = g.sent(), g.label = 5;
        case 5:
          return c = u.next(), [3, 3];
        case 6:
          return [3, 9];
        case 7:
          return f = g.sent(), d = { error: f }, [3, 9];
        case 8:
          try {
            c && !c.done && (h = u.return) && h.call(u);
          } finally {
            if (d)
              throw d.error;
          }
          return [
            7
            /*endfinally*/
          ];
        case 9:
          return [2, Ui[s] = a];
      }
    });
  });
};
function lf(e, t, r) {
  var n = new e(t);
  return n.update(r), n.digest();
}
function ff(e, t, r) {
  var n, i, o = e.headers, s = {};
  try {
    for (var a = kt(Object.keys(o).sort()), u = a.next(); !u.done; u = a.next()) {
      var c = u.value, l = c.toLowerCase();
      (l in ET || t != null && t.has(l) || NT.test(l) || TT.test(l)) && (!r || r && !r.has(l)) || (s[l] = o[c].trim().replace(/\s+/g, " "));
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      u && !u.done && (i = a.return) && i.call(a);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return s;
}
function OT(e) {
  var t, r, n = e.query, i = n === void 0 ? {} : n, o = [], s = {}, a = function(f) {
    if (f.toLowerCase() === AT)
      return "continue";
    o.push(f);
    var d = i[f];
    typeof d == "string" ? s[f] = Yr(f) + "=" + Yr(d) : Array.isArray(d) && (s[f] = d.slice(0).sort().reduce(function(h, g) {
      return h.concat([Yr(f) + "=" + Yr(g)]);
    }, []).join("&"));
  };
  try {
    for (var u = kt(Object.keys(i).sort()), c = u.next(); !c.done; c = u.next()) {
      var l = c.value;
      a(l);
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      c && !c.done && (r = u.return) && r.call(u);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return o.map(function(f) {
    return s[f];
  }).filter(function(f) {
    return f;
  }).join("&");
}
var LT = function(e) {
  return typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
};
function ks(e, t) {
  var r = e.headers, n = e.body;
  return Ee(this, void 0, void 0, function() {
    var i, o, s, a, u, c, l;
    return Ie(this, function(f) {
      switch (f.label) {
        case 0:
          try {
            for (i = kt(Object.keys(r)), o = i.next(); !o.done; o = i.next())
              if (s = o.value, s.toLowerCase() === Pa)
                return [2, r[s]];
          } catch (d) {
            c = { error: d };
          } finally {
            try {
              o && !o.done && (l = i.return) && l.call(i);
            } finally {
              if (c)
                throw c.error;
            }
          }
          return n != null ? [3, 1] : [2, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
        case 1:
          return typeof n == "string" || ArrayBuffer.isView(n) || LT(n) ? (a = new t(), a.update(n), u = fn, [4, a.digest()]) : [3, 3];
        case 2:
          return [2, u.apply(void 0, [f.sent()])];
        case 3:
          return [2, ST];
      }
    });
  });
}
function _T(e, t) {
  var r, n;
  e = e.toLowerCase();
  try {
    for (var i = kt(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
      var s = o.value;
      if (e === s.toLowerCase())
        return !0;
    }
  } catch (a) {
    r = { error: a };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return !1;
}
function Bh(e) {
  var t = e.headers, r = e.query, n = mh(e, ["headers", "query"]);
  return we(we({}, n), { headers: we({}, t), query: r ? kT(r) : void 0 });
}
function kT(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n, i = e[r];
    return we(we({}, t), (n = {}, n[r] = Array.isArray(i) ? at(i) : i, n));
  }, {});
}
function zT(e, t) {
  var r, n, i;
  t === void 0 && (t = {});
  var o = typeof e.clone == "function" ? e.clone() : Bh(e), s = o.headers, a = o.query, u = a === void 0 ? {} : a;
  try {
    for (var c = kt(Object.keys(s)), l = c.next(); !l.done; l = c.next()) {
      var f = l.value, d = f.toLowerCase();
      d.substr(0, 6) === "x-amz-" && !(!((i = t.unhoistableHeaders) === null || i === void 0) && i.has(d)) && (u[f] = s[f], delete s[f]);
    }
  } catch (h) {
    r = { error: h };
  } finally {
    try {
      l && !l.done && (n = c.return) && n.call(c);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return we(we({}, e), {
    headers: s,
    query: u
  });
}
function df(e) {
  var t, r;
  e = typeof e.clone == "function" ? e.clone() : Bh(e);
  try {
    for (var n = kt(Object.keys(e.headers)), i = n.next(); !i.done; i = n.next()) {
      var o = i.value;
      DT.indexOf(o.toLowerCase()) > -1 && delete e.headers[o];
    }
  } catch (s) {
    t = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return e;
}
function PT(e) {
  return RT(e).toISOString().replace(/\.\d{3}Z$/, "Z");
}
function RT(e) {
  return typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
}
var UT = (
  /** @class */
  function() {
    function e(t) {
      var r = t.applyChecksum, n = t.credentials, i = t.region, o = t.service, s = t.sha256, a = t.uriEscapePath, u = a === void 0 ? !0 : a;
      this.service = o, this.sha256 = s, this.uriEscapePath = u, this.applyChecksum = typeof r == "boolean" ? r : !0, this.regionProvider = YT(i), this.credentialProvider = FT(n);
    }
    return e.prototype.presign = function(t, r) {
      return r === void 0 && (r = {}), Ee(this, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l, f, d, h, g, M, m, w, v, T, N, E, P, k, B, F, S;
        return Ie(this, function(L) {
          switch (L.label) {
            case 0:
              return n = r.signingDate, i = n === void 0 ? /* @__PURE__ */ new Date() : n, o = r.expiresIn, s = o === void 0 ? 3600 : o, a = r.unsignableHeaders, u = r.unhoistableHeaders, c = r.signableHeaders, l = r.signingRegion, f = r.signingService, [4, this.credentialProvider()];
            case 1:
              return d = L.sent(), l == null ? [3, 2] : (g = l, [3, 4]);
            case 2:
              return [4, this.regionProvider()];
            case 3:
              g = L.sent(), L.label = 4;
            case 4:
              return h = g, M = Yi(i), m = M.longDate, w = M.shortDate, s > xT ? [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")] : (v = _s(w, h, f ?? this.service), T = zT(df(t), { unhoistableHeaders: u }), d.sessionToken && (T.query[Uh] = d.sessionToken), T.query[MT] = Os, T.query[yT] = d.accessKeyId + "/" + v, T.query[Ph] = m, T.query[vT] = s.toString(10), N = ff(T, a, c), T.query[mT] = gf(N), E = T.query, P = Rh, k = this.getSignature, B = [
                m,
                v,
                this.getSigningKey(d, h, w, f)
              ], F = this.createCanonicalRequest, S = [T, N], [4, ks(t, this.sha256)]);
            case 5:
              return [4, k.apply(this, B.concat([F.apply(this, S.concat([L.sent()]))]))];
            case 6:
              return E[P] = L.sent(), [2, T];
          }
        });
      });
    }, e.prototype.sign = function(t, r) {
      return Ee(this, void 0, void 0, function() {
        return Ie(this, function(n) {
          return typeof t == "string" ? [2, this.signString(t, r)] : t.headers && t.payload ? [2, this.signEvent(t, r)] : [2, this.signRequest(t, r)];
        });
      });
    }, e.prototype.signEvent = function(t, r) {
      var n = t.headers, i = t.payload, o = r.signingDate, s = o === void 0 ? /* @__PURE__ */ new Date() : o, a = r.priorSignature, u = r.signingRegion, c = r.signingService;
      return Ee(this, void 0, void 0, function() {
        var l, f, d, h, g, M, m, w, v, T, N;
        return Ie(this, function(E) {
          switch (E.label) {
            case 0:
              return u == null ? [3, 1] : (f = u, [3, 3]);
            case 1:
              return [4, this.regionProvider()];
            case 2:
              f = E.sent(), E.label = 3;
            case 3:
              return l = f, d = Yi(s), h = d.shortDate, g = d.longDate, M = _s(h, l, c ?? this.service), [4, ks({ headers: {}, body: i }, this.sha256)];
            case 4:
              return m = E.sent(), w = new this.sha256(), w.update(n), T = fn, [4, w.digest()];
            case 5:
              return v = T.apply(void 0, [E.sent()]), N = [
                jT,
                g,
                M,
                a,
                v,
                m
              ].join(`
`), [2, this.signString(N, { signingDate: s, signingRegion: l, signingService: c })];
          }
        });
      });
    }, e.prototype.signString = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.signingDate, o = i === void 0 ? /* @__PURE__ */ new Date() : i, s = n.signingRegion, a = n.signingService;
      return Ee(this, void 0, void 0, function() {
        var u, c, l, f, d, h, g, M;
        return Ie(this, function(m) {
          switch (m.label) {
            case 0:
              return [4, this.credentialProvider()];
            case 1:
              return u = m.sent(), s == null ? [3, 2] : (l = s, [3, 4]);
            case 2:
              return [4, this.regionProvider()];
            case 3:
              l = m.sent(), m.label = 4;
            case 4:
              return c = l, f = Yi(o).shortDate, g = (h = this.sha256).bind, [4, this.getSigningKey(u, c, f, a)];
            case 5:
              return d = new (g.apply(h, [void 0, m.sent()]))(), d.update(t), M = fn, [4, d.digest()];
            case 6:
              return [2, M.apply(void 0, [m.sent()])];
          }
        });
      });
    }, e.prototype.signRequest = function(t, r) {
      var n = r === void 0 ? {} : r, i = n.signingDate, o = i === void 0 ? /* @__PURE__ */ new Date() : i, s = n.signableHeaders, a = n.unsignableHeaders, u = n.signingRegion, c = n.signingService;
      return Ee(this, void 0, void 0, function() {
        var l, f, d, h, g, M, m, w, v, T, N;
        return Ie(this, function(E) {
          switch (E.label) {
            case 0:
              return [4, this.credentialProvider()];
            case 1:
              return l = E.sent(), u == null ? [3, 2] : (d = u, [3, 4]);
            case 2:
              return [4, this.regionProvider()];
            case 3:
              d = E.sent(), E.label = 4;
            case 4:
              return f = d, h = df(t), g = Yi(o), M = g.longDate, m = g.shortDate, w = _s(m, f, c ?? this.service), h.headers[Fh] = M, l.sessionToken && (h.headers[IT] = l.sessionToken), [4, ks(h, this.sha256)];
            case 5:
              return v = E.sent(), !_T(Pa, h.headers) && this.applyChecksum && (h.headers[Pa] = v), T = ff(h, a, s), [4, this.getSignature(M, w, this.getSigningKey(l, f, m, c), this.createCanonicalRequest(h, T, v))];
            case 6:
              return N = E.sent(), h.headers[Yh] = Os + " " + ("Credential=" + l.accessKeyId + "/" + w + ", ") + ("SignedHeaders=" + gf(T) + ", ") + ("Signature=" + N), [2, h];
          }
        });
      });
    }, e.prototype.createCanonicalRequest = function(t, r, n) {
      var i = Object.keys(r).sort();
      return t.method + `
` + this.getCanonicalPath(t) + `
` + OT(t) + `
` + i.map(function(o) {
        return o + ":" + r[o];
      }).join(`
`) + `

` + i.join(";") + `
` + n;
    }, e.prototype.createStringToSign = function(t, r, n) {
      return Ee(this, void 0, void 0, function() {
        var i, o;
        return Ie(this, function(s) {
          switch (s.label) {
            case 0:
              return i = new this.sha256(), i.update(n), [4, i.digest()];
            case 1:
              return o = s.sent(), [2, Os + `
` + t + `
` + r + `
` + fn(o)];
          }
        });
      });
    }, e.prototype.getCanonicalPath = function(t) {
      var r = t.path;
      if (this.uriEscapePath) {
        var n = encodeURIComponent(r.replace(/^\//, ""));
        return "/" + n.replace(/%2F/g, "/");
      }
      return r;
    }, e.prototype.getSignature = function(t, r, n, i) {
      return Ee(this, void 0, void 0, function() {
        var o, s, a, u, c;
        return Ie(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, this.createStringToSign(t, r, i)];
            case 1:
              return o = l.sent(), u = (a = this.sha256).bind, [4, n];
            case 2:
              return s = new (u.apply(a, [void 0, l.sent()]))(), s.update(o), c = fn, [4, s.digest()];
            case 3:
              return [2, c.apply(void 0, [l.sent()])];
          }
        });
      });
    }, e.prototype.getSigningKey = function(t, r, n, i) {
      return CT(this.sha256, t, n, r, i || this.service);
    }, e;
  }()
), Yi = function(e) {
  var t = PT(e).replace(/[\-:]/g, "");
  return {
    longDate: t,
    shortDate: t.substr(0, 8)
  };
}, gf = function(e) {
  return Object.keys(e).sort().join(";");
}, YT = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
}, FT = function(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
};
function QT(e) {
  var t = this, r = e.credentials || e.credentialDefaultProvider(e), n = zs(r), i = e.signingEscapePath, o = i === void 0 ? !0 : i, s = e.systemClockOffset, a = s === void 0 ? e.systemClockOffset || 0 : s, u = e.sha256, c;
  return e.signer ? c = zs(e.signer) : c = function() {
    return zs(e.region)().then(function(l) {
      return Ee(t, void 0, void 0, function() {
        return Ie(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, e.regionInfoProvider(l)];
            case 1:
              return [2, [f.sent() || {}, l]];
          }
        });
      });
    }).then(function(l) {
      var f = Wr(l, 2), d = f[0], h = f[1], g = d.signingRegion, M = d.signingService;
      return e.signingRegion = e.signingRegion || g || h, e.signingName = e.signingName || M || e.serviceId, new UT({
        credentials: n,
        region: e.signingRegion,
        service: e.signingName,
        sha256: u,
        uriEscapePath: o
      });
    });
  }, we(we({}, e), {
    systemClockOffset: a,
    signingEscapePath: o,
    credentials: n,
    signer: c
  });
}
function zs(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}
function BT(e) {
  return we(we({}, e), { customUserAgent: typeof e.customUserAgent == "string" ? [[e.customUserAgent]] : e.customUserAgent });
}
var Ps = "user-agent", $T = "x-amz-user-agent", hf = " ", VT = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g, WT = function(e) {
  return function(t, r) {
    return function(n) {
      return Ee(void 0, void 0, void 0, function() {
        var i, o, s, a, u, c, l, f;
        return Ie(this, function(d) {
          switch (d.label) {
            case 0:
              return i = n.request, An.isInstance(i) ? (o = i.headers, s = ((l = r == null ? void 0 : r.userAgent) === null || l === void 0 ? void 0 : l.map(Rs)) || [], [4, e.defaultUserAgentProvider()]) : [2, t(n)];
            case 1:
              return a = d.sent().map(Rs), u = ((f = e == null ? void 0 : e.customUserAgent) === null || f === void 0 ? void 0 : f.map(Rs)) || [], o[$T] = at(a, s, u).join(hf), c = at(a.filter(function(h) {
                return h.startsWith("aws-sdk-");
              }), u).join(hf), e.runtime !== "browser" && c && (o[Ps] = o[Ps] ? o[Ps] + " " + c : c), [2, t(we(we({}, n), { request: i }))];
          }
        });
      });
    };
  };
}, Rs = function(e) {
  var t = Wr(e, 2), r = t[0], n = t[1], i = r.indexOf("/"), o = r.substring(0, i), s = r.substring(i + 1);
  return o === "api" && (s = s.toLowerCase()), [o, s, n].filter(function(a) {
    return a && a.length > 0;
  }).map(function(a) {
    return a == null ? void 0 : a.replace(VT, "_");
  }).join("/");
}, HT = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: !0
}, qT = function(e) {
  return {
    applyToStack: function(t) {
      t.add(WT(e), HT);
    }
  };
}, ho = function() {
  var e = [], t = [], r = /* @__PURE__ */ new Set(), n = function(l) {
    return l.sort(function(f, d) {
      return pf[d.step] - pf[f.step] || Mf[d.priority || "normal"] - Mf[f.priority || "normal"];
    });
  }, i = function(l) {
    var f = !1, d = function(h) {
      return h.name && h.name === l ? (f = !0, r.delete(l), !1) : !0;
    };
    return e = e.filter(d), t = t.filter(d), f;
  }, o = function(l) {
    var f = !1, d = function(h) {
      return h.middleware === l ? (f = !0, h.name && r.delete(h.name), !1) : !0;
    };
    return e = e.filter(d), t = t.filter(d), f;
  }, s = function(l) {
    return e.forEach(function(f) {
      l.add(f.middleware, we({}, f));
    }), t.forEach(function(f) {
      l.addRelativeTo(f.middleware, we({}, f));
    }), l;
  }, a = function(l) {
    var f = [];
    return l.before.forEach(function(d) {
      d.before.length === 0 && d.after.length === 0 ? f.push(d) : f.push.apply(f, at(a(d)));
    }), f.push(l), l.after.reverse().forEach(function(d) {
      d.before.length === 0 && d.after.length === 0 ? f.push(d) : f.push.apply(f, at(a(d)));
    }), f;
  }, u = function() {
    var l = [], f = [], d = {};
    e.forEach(function(g) {
      var M = we(we({}, g), { before: [], after: [] });
      M.name && (d[M.name] = M), l.push(M);
    }), t.forEach(function(g) {
      var M = we(we({}, g), { before: [], after: [] });
      M.name && (d[M.name] = M), f.push(M);
    }), f.forEach(function(g) {
      if (g.toMiddleware) {
        var M = d[g.toMiddleware];
        if (M === void 0)
          throw new Error(g.toMiddleware + " is not found when adding " + (g.name || "anonymous") + " middleware " + g.relation + " " + g.toMiddleware);
        g.relation === "after" && M.after.push(g), g.relation === "before" && M.before.push(g);
      }
    });
    var h = n(l).map(a).reduce(function(g, M) {
      return g.push.apply(g, at(M)), g;
    }, []);
    return h.map(function(g) {
      return g.middleware;
    });
  }, c = {
    add: function(l, f) {
      f === void 0 && (f = {});
      var d = f.name, h = f.override, g = we({ step: "initialize", priority: "normal", middleware: l }, f);
      if (d) {
        if (r.has(d)) {
          if (!h)
            throw new Error("Duplicate middleware name '" + d + "'");
          var M = e.findIndex(function(w) {
            return w.name === d;
          }), m = e[M];
          if (m.step !== g.step || m.priority !== g.priority)
            throw new Error('"' + d + '" middleware with ' + m.priority + " priority in " + m.step + " step cannot be " + ("overridden by same-name middleware with " + g.priority + " priority in " + g.step + " step."));
          e.splice(M, 1);
        }
        r.add(d);
      }
      e.push(g);
    },
    addRelativeTo: function(l, f) {
      var d = f.name, h = f.override, g = we({ middleware: l }, f);
      if (d) {
        if (r.has(d)) {
          if (!h)
            throw new Error("Duplicate middleware name '" + d + "'");
          var M = t.findIndex(function(w) {
            return w.name === d;
          }), m = t[M];
          if (m.toMiddleware !== g.toMiddleware || m.relation !== g.relation)
            throw new Error('"' + d + '" middleware ' + m.relation + ' "' + m.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + g.relation + ' "' + g.toMiddleware + '" middleware.'));
          t.splice(M, 1);
        }
        r.add(d);
      }
      t.push(g);
    },
    clone: function() {
      return s(ho());
    },
    use: function(l) {
      l.applyToStack(c);
    },
    remove: function(l) {
      return typeof l == "string" ? i(l) : o(l);
    },
    removeByTag: function(l) {
      var f = !1, d = function(h) {
        var g = h.tags, M = h.name;
        return g && g.includes(l) ? (M && r.delete(M), f = !0, !1) : !0;
      };
      return e = e.filter(d), t = t.filter(d), f;
    },
    concat: function(l) {
      var f = s(ho());
      return f.use(l), f;
    },
    applyToStack: s,
    resolve: function(l, f) {
      var d, h;
      try {
        for (var g = kt(u().reverse()), M = g.next(); !M.done; M = g.next()) {
          var m = M.value;
          l = m(l, f);
        }
      } catch (w) {
        d = { error: w };
      } finally {
        try {
          M && !M.done && (h = g.return) && h.call(g);
        } finally {
          if (d)
            throw d.error;
        }
      }
      return l;
    }
  };
  return c;
}, pf = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
}, Mf = {
  high: 3,
  normal: 2,
  low: 1
}, KT = (
  /** @class */
  function() {
    function e(t) {
      this.middlewareStack = ho(), this.config = t;
    }
    return e.prototype.send = function(t, r, n) {
      var i = typeof r != "function" ? r : void 0, o = typeof r == "function" ? r : n, s = t.resolveMiddleware(this.middlewareStack, this.config, i);
      if (o)
        s(t).then(function(a) {
          return o(null, a.output);
        }, function(a) {
          return o(a);
        }).catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          function() {
          }
        );
      else
        return s(t).then(function(a) {
          return a.output;
        });
    }, e.prototype.destroy = function() {
      this.config.requestHandler.destroy && this.config.requestHandler.destroy();
    }, e;
  }()
), $h = (
  /** @class */
  function() {
    function e() {
      this.middlewareStack = ho();
    }
    return e;
  }()
), po = function() {
  var e = Object.getPrototypeOf(this).constructor, t = Function.bind.apply(String, at([null], arguments)), r = new t();
  return Object.setPrototypeOf(r, e.prototype), r;
};
po.prototype = Object.create(String.prototype, {
  constructor: {
    value: po,
    enumerable: !1,
    writable: !0,
    configurable: !0
  }
});
Object.setPrototypeOf(po, String);
(function(e) {
  Ru(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.deserializeJSON = function() {
    return JSON.parse(e.prototype.toString.call(this));
  }, t.prototype.toJSON = function() {
    return e.prototype.toString.call(this);
  }, t.fromObject = function(r) {
    return r instanceof t ? r : r instanceof String || typeof r == "string" ? new t(r) : new t(JSON.stringify(r));
  }, t;
})(po);
var GT = function(e, t) {
  return function(r, n) {
    return function(i) {
      return Ee(void 0, void 0, void 0, function() {
        var o, s;
        return Ie(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, r(i)];
            case 1:
              return o = a.sent().response, [4, t(o, e)];
            case 2:
              return s = a.sent(), [2, {
                response: o,
                output: s
              }];
          }
        });
      });
    };
  };
}, JT = function(e, t) {
  return function(r, n) {
    return function(i) {
      return Ee(void 0, void 0, void 0, function() {
        var o;
        return Ie(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, t(i.input, e)];
            case 1:
              return o = s.sent(), [2, r(we(we({}, i), { request: o }))];
          }
        });
      });
    };
  };
}, ZT = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: !0
}, XT = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: !0
};
function Vh(e, t, r) {
  return {
    applyToStack: function(n) {
      n.add(GT(e, r), ZT), n.add(JT(e, t), XT);
    }
  };
}
var hr = new Yt("CognitoCredentials"), ej = new Promise(function(e, t) {
  if (!sr().isBrowser)
    return hr.debug("not in the browser, directly resolved"), e();
  var r = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null;
  if (r)
    return hr.debug("google api already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), tj = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
    }
    return e.prototype.refreshGoogleToken = function() {
      return Ee(this, void 0, void 0, function() {
        return Ie(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (hr.debug("need to wait for the Google SDK loaded"), [4, ej]);
            case 1:
              t.sent(), this.initialized = !0, hr.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshGoogleTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshGoogleTokenImpl = function() {
      var t = null;
      return sr().isBrowser && (t = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), t ? new Promise(function(r, n) {
        t.getAuthInstance().then(function(i) {
          i || (hr.debug("google Auth undefined"), n(new Ur("google Auth undefined")));
          var o = i.currentUser.get();
          o.isSignedIn() ? (hr.debug("refreshing the google access token"), o.reloadAuthResponse().then(function(s) {
            var a = s.id_token, u = s.expires_at;
            r({ token: a, expires_at: u });
          }).catch(function(s) {
            s && s.error === "network_error" ? n("Network error reloading google auth response") : n(new Ur("Failed to reload google auth response"));
          })) : n(new Ur("User is not signed in with Google"));
        }).catch(function(i) {
          hr.debug("Failed to refresh google token", i), n(new Ur("Failed to refresh google token"));
        });
      }) : (hr.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
    }, e;
  }()
), _r = new Yt("CognitoCredentials"), rj = new Promise(function(e, t) {
  if (!sr().isBrowser)
    return _r.debug("not in the browser, directly resolved"), e();
  var r = window.FB;
  if (r)
    return _r.debug("FB SDK already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), nj = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    return e.prototype.refreshFacebookToken = function() {
      return Ee(this, void 0, void 0, function() {
        return Ie(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (_r.debug("need to wait for the Facebook SDK loaded"), [4, rj]);
            case 1:
              t.sent(), this.initialized = !0, _r.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshFacebookTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshFacebookTokenImpl = function() {
      var t = null;
      if (sr().isBrowser && (t = window.FB), !t) {
        var r = "no fb sdk available";
        return _r.debug(r), Promise.reject(new Ur(r));
      }
      return new Promise(function(n, i) {
        t.getLoginStatus(function(o) {
          if (!o || !o.authResponse) {
            var s = "no response from facebook when refreshing the jwt token";
            _r.debug(s), i(new Ur(s));
          } else {
            var a = o.authResponse, u = a.accessToken, c = a.expiresIn, l = /* @__PURE__ */ new Date(), f = c * 1e3 + l.getTime();
            if (!u) {
              var s = "the jwtToken is undefined";
              _r.debug(s), i(new Ur(s));
            }
            n({
              token: u,
              expires_at: f
            });
          }
        }, { scope: "public_profile,email" });
      });
    }, e;
  }()
), ij = new tj(), oj = new nj(), Sr = {}, sj = (
  /** @class */
  function() {
    function e() {
    }
    return e.setItem = function(t, r) {
      return Sr[t] = r, Sr[t];
    }, e.getItem = function(t) {
      return Object.prototype.hasOwnProperty.call(Sr, t) ? Sr[t] : void 0;
    }, e.removeItem = function(t) {
      return delete Sr[t];
    }, e.clear = function() {
      return Sr = {}, Sr;
    }, e;
  }()
), Wh = (
  /** @class */
  function() {
    function e() {
      try {
        this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
      } catch {
        this.storageWindow = sj;
      }
    }
    return e.prototype.getStorage = function() {
      return this.storageWindow;
    }, e;
  }()
);
const aj = "@aws-sdk/client-cognito-identity", uj = "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", cj = "3.6.1", lj = {
  clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
  "build-documentation": "yarn remove-documentation && typedoc ./",
  prepublishOnly: "yarn build",
  pretest: "yarn build:cjs",
  "remove-definitions": "rimraf ./types",
  "remove-dist": "rimraf ./dist",
  "remove-documentation": "rimraf ./docs",
  "test:unit": "mocha **/cjs/**/*.spec.js",
  "test:e2e": "mocha **/cjs/**/*.ispec.js && karma start karma.conf.js",
  test: "yarn test:unit",
  "build:cjs": "tsc -p tsconfig.json",
  "build:es": "tsc -p tsconfig.es.json",
  build: "yarn build:cjs && yarn build:es",
  postbuild: "downlevel-dts types types/ts3.4"
}, fj = "./dist/cjs/index.js", dj = "./types/index.d.ts", gj = "./dist/es/index.js", hj = {
  "./runtimeConfig": "./runtimeConfig.browser"
}, pj = !1, Mj = {
  "@aws-crypto/sha256-browser": "^1.0.0",
  "@aws-crypto/sha256-js": "^1.0.0",
  "@aws-sdk/config-resolver": "3.6.1",
  "@aws-sdk/credential-provider-node": "3.6.1",
  "@aws-sdk/fetch-http-handler": "3.6.1",
  "@aws-sdk/hash-node": "3.6.1",
  "@aws-sdk/invalid-dependency": "3.6.1",
  "@aws-sdk/middleware-content-length": "3.6.1",
  "@aws-sdk/middleware-host-header": "3.6.1",
  "@aws-sdk/middleware-logger": "3.6.1",
  "@aws-sdk/middleware-retry": "3.6.1",
  "@aws-sdk/middleware-serde": "3.6.1",
  "@aws-sdk/middleware-signing": "3.6.1",
  "@aws-sdk/middleware-stack": "3.6.1",
  "@aws-sdk/middleware-user-agent": "3.6.1",
  "@aws-sdk/node-config-provider": "3.6.1",
  "@aws-sdk/node-http-handler": "3.6.1",
  "@aws-sdk/protocol-http": "3.6.1",
  "@aws-sdk/smithy-client": "3.6.1",
  "@aws-sdk/types": "3.6.1",
  "@aws-sdk/url-parser": "3.6.1",
  "@aws-sdk/url-parser-native": "3.6.1",
  "@aws-sdk/util-base64-browser": "3.6.1",
  "@aws-sdk/util-base64-node": "3.6.1",
  "@aws-sdk/util-body-length-browser": "3.6.1",
  "@aws-sdk/util-body-length-node": "3.6.1",
  "@aws-sdk/util-user-agent-browser": "3.6.1",
  "@aws-sdk/util-user-agent-node": "3.6.1",
  "@aws-sdk/util-utf8-browser": "3.6.1",
  "@aws-sdk/util-utf8-node": "3.6.1",
  tslib: "^2.0.0"
}, yj = {
  "@aws-sdk/client-documentation-generator": "3.6.1",
  "@aws-sdk/client-iam": "3.6.1",
  "@types/chai": "^4.2.11",
  "@types/mocha": "^8.0.4",
  "@types/node": "^12.7.5",
  "downlevel-dts": "0.7.0",
  jest: "^26.1.0",
  rimraf: "^3.0.0",
  typedoc: "^0.19.2",
  typescript: "~4.1.2"
}, mj = {
  node: ">=10.0.0"
}, vj = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
}, wj = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
}, Dj = "Apache-2.0", Aj = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", Ij = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-cognito-identity"
}, Ej = {
  name: aj,
  description: uj,
  version: cj,
  scripts: lj,
  main: fj,
  types: dj,
  module: gj,
  browser: hj,
  "react-native": {
    "./runtimeConfig": "./runtimeConfig.native"
  },
  sideEffects: pj,
  dependencies: Mj,
  devDependencies: yj,
  engines: mj,
  typesVersions: vj,
  author: wj,
  license: Dj,
  homepage: Aj,
  repository: Ij
};
var yf = "cognito-identity.{region}.amazonaws.com", Nj = "cognito-identity.{region}.amazonaws.com.cn", Tj = "cognito-identity.{region}.c2s.ic.gov", jj = "cognito-identity.{region}.sc2s.sgov.gov", Sj = "cognito-identity.{region}.amazonaws.com", bj = /* @__PURE__ */ new Set([
  "af-south-1",
  "ap-east-1",
  "ap-northeast-1",
  "ap-northeast-2",
  "ap-south-1",
  "ap-southeast-1",
  "ap-southeast-2",
  "ca-central-1",
  "eu-central-1",
  "eu-north-1",
  "eu-south-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "me-south-1",
  "sa-east-1",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2"
]), xj = /* @__PURE__ */ new Set(["cn-north-1", "cn-northwest-1"]), Cj = /* @__PURE__ */ new Set(["us-iso-east-1"]), Oj = /* @__PURE__ */ new Set(["us-isob-east-1"]), Lj = /* @__PURE__ */ new Set(["us-gov-east-1", "us-gov-west-1"]), _j = function(e, t) {
  var r = void 0;
  switch (e) {
    case "ap-northeast-1":
      r = {
        hostname: "cognito-identity.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      r = {
        hostname: "cognito-identity.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      r = {
        hostname: "cognito-identity.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      r = {
        hostname: "cognito-identity.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      r = {
        hostname: "cognito-identity.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      r = {
        hostname: "cognito-identity.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      r = {
        hostname: "cognito-identity.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      r = {
        hostname: "cognito-identity.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      r = {
        hostname: "cognito-identity.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      r = {
        hostname: "cognito-identity.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      r = {
        hostname: "cognito-identity.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      r = {
        hostname: "cognito-identity.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      r = {
        hostname: "cognito-identity-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      r = {
        hostname: "cognito-identity-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      r = {
        hostname: "cognito-identity-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-2":
      r = {
        hostname: "cognito-identity-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "sa-east-1":
      r = {
        hostname: "cognito-identity.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      r = {
        hostname: "cognito-identity.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      r = {
        hostname: "cognito-identity.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      r = {
        hostname: "cognito-identity.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      r = {
        hostname: "cognito-identity.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      r = {
        hostname: "cognito-identity.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    default:
      bj.has(e) && (r = {
        hostname: yf.replace("{region}", e),
        partition: "aws"
      }), xj.has(e) && (r = {
        hostname: Nj.replace("{region}", e),
        partition: "aws-cn"
      }), Cj.has(e) && (r = {
        hostname: Tj.replace("{region}", e),
        partition: "aws-iso"
      }), Oj.has(e) && (r = {
        hostname: jj.replace("{region}", e),
        partition: "aws-iso-b"
      }), Lj.has(e) && (r = {
        hostname: Sj.replace("{region}", e),
        partition: "aws-us-gov"
      }), r === void 0 && (r = {
        hostname: yf.replace("{region}", e),
        partition: "aws"
      });
  }
  return Promise.resolve(ne({ signingService: "cognito-identity" }, r));
}, mf = {
  apiVersion: "2014-06-30",
  disableHostPrefix: !1,
  logger: {},
  regionInfoProvider: _j,
  serviceId: "Cognito Identity",
  urlParser: tT
}, kj = ne(ne({}, mf), { runtime: "browser", base64Decoder: xh, base64Encoder: nN, bodyLengthChecker: WN, credentialDefaultProvider: function(e) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: XN({
  serviceId: mf.serviceId,
  clientVersion: Ej.version
}), maxAttempts: Wu, region: uN("Region is missing"), requestHandler: new tN(), sha256: Ih.Sha256, streamCollector: iN, utf8Decoder: Eh, utf8Encoder: Nh }), zj = (
  /** @class */
  function(e) {
    Fu(t, e);
    function t(r) {
      var n = this, i = ne(ne({}, kj), r), o = oT(i), s = rT(o), a = QT(s), u = $N(a), c = u, l = BT(c);
      return n = e.call(this, l) || this, n.config = l, n.middlewareStack.use(fN(n.config)), n.middlewareStack.use(cT(n.config)), n.middlewareStack.use(dT(n.config)), n.middlewareStack.use(pT(n.config)), n.middlewareStack.use(qT(n.config)), n;
    }
    return t.prototype.destroy = function() {
      e.prototype.destroy.call(this);
    }, t;
  }(KT)
), vf;
(function(e) {
  e.AUTHENTICATED_ROLE = "AuthenticatedRole", e.DENY = "Deny";
})(vf || (vf = {}));
var wf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(wf || (wf = {}));
var Df;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Df || (Df = {}));
var Af;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Af || (Af = {}));
var If;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(If || (If = {}));
var Ef;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Ef || (Ef = {}));
var Nf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Nf || (Nf = {}));
var Tf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Tf || (Tf = {}));
var jf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(jf || (jf = {}));
var Sf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Sf || (Sf = {}));
var bf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(bf || (bf = {}));
var xf;
(function(e) {
  e.ACCESS_DENIED = "AccessDenied", e.INTERNAL_SERVER_ERROR = "InternalServerError";
})(xf || (xf = {}));
var Cf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Cf || (Cf = {}));
var Of;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Of || (Of = {}));
var Lf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Lf || (Lf = {}));
var _f;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(_f || (_f = {}));
var kf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(kf || (kf = {}));
var zf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(zf || (zf = {}));
var Pf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Pf || (Pf = {}));
var Rf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Rf || (Rf = {}));
var Ra;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Ra || (Ra = {}));
var Uf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Uf || (Uf = {}));
var Ua;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Ua || (Ua = {}));
var Yf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Yf || (Yf = {}));
var Ya;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Ya || (Ya = {}));
var Fa;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Fa || (Fa = {}));
var Ff;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Ff || (Ff = {}));
var Qf;
(function(e) {
  e.CONTAINS = "Contains", e.EQUALS = "Equals", e.NOT_EQUAL = "NotEqual", e.STARTS_WITH = "StartsWith";
})(Qf || (Qf = {}));
var Bf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Bf || (Bf = {}));
var $f;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})($f || ($f = {}));
var Vf;
(function(e) {
  e.RULES = "Rules", e.TOKEN = "Token";
})(Vf || (Vf = {}));
var Wf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Wf || (Wf = {}));
var Hf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Hf || (Hf = {}));
var qf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(qf || (qf = {}));
var Kf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Kf || (Kf = {}));
var Gf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Gf || (Gf = {}));
var Jf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Jf || (Jf = {}));
var Zf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Zf || (Zf = {}));
var Xf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Xf || (Xf = {}));
var ed;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(ed || (ed = {}));
var td;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(td || (td = {}));
var rd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(rd || (rd = {}));
var nd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(nd || (nd = {}));
var id;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(id || (id = {}));
var od;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(od || (od = {}));
var sd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(sd || (sd = {}));
var ad;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(ad || (ad = {}));
var ud;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(ud || (ud = {}));
var cd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(cd || (cd = {}));
var ld;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(ld || (ld = {}));
var fd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(fd || (fd = {}));
var dd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(dd || (dd = {}));
var gd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(gd || (gd = {}));
var hd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(hd || (hd = {}));
var pd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(pd || (pd = {}));
var Md;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(Md || (Md = {}));
var yd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ne({}, t);
  };
})(yd || (yd = {}));
var Pj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n;
    return ht(this, function(i) {
      return r = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
      }, n = JSON.stringify(Vj(e)), [2, tp(t, r, "/", void 0, n)];
    });
  });
}, Rj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n;
    return ht(this, function(i) {
      return r = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId"
      }, n = JSON.stringify(Wj(e)), [2, tp(t, r, "/", void 0, n)];
    });
  });
}, Uj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, Yj(e, t)] : [4, Go(e.body, t)];
        case 1:
          return r = o.sent(), n = {}, n = Kj(r), i = ne({ $metadata: Qe(e) }, n), [2, Promise.resolve(i)];
      }
    });
  });
}, Yj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i, o, s, a, u, c, l, f, d, h, g, M, m, w;
    return ht(this, function(v) {
      switch (v.label) {
        case 0:
          return n = [ne({}, e)], w = {}, [4, Go(e.body, t)];
        case 1:
          switch (r = ne.apply(void 0, n.concat([(w.body = v.sent(), w)])), o = "UnknownError", o = rp(e, r.body), s = o, s) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
              return [3, 6];
            case "InvalidParameterException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          return a = [{}], [4, Hh(r)];
        case 3:
          return i = ne.apply(void 0, [ne.apply(void 0, a.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, qh(r)];
        case 5:
          return i = ne.apply(void 0, [ne.apply(void 0, u.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, Bj(r)];
        case 7:
          return i = ne.apply(void 0, [ne.apply(void 0, c.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, Kh(r)];
        case 9:
          return i = ne.apply(void 0, [ne.apply(void 0, l.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, Gh(r)];
        case 11:
          return i = ne.apply(void 0, [ne.apply(void 0, f.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Jh(r)];
        case 13:
          return i = ne.apply(void 0, [ne.apply(void 0, d.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 14:
          return h = [{}], [4, Zh(r)];
        case 15:
          return i = ne.apply(void 0, [ne.apply(void 0, h.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 16:
          return g = [{}], [4, Xh(r)];
        case 17:
          return i = ne.apply(void 0, [ne.apply(void 0, g.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 18:
          M = r.body, o = M.code || M.Code || o, i = ne(ne({}, M), { name: "" + o, message: M.message || M.Message || o, $fault: "client", $metadata: Qe(e) }), v.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, Fj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, Qj(e, t)] : [4, Go(e.body, t)];
        case 1:
          return r = o.sent(), n = {}, n = Gj(r), i = ne({ $metadata: Qe(e) }, n), [2, Promise.resolve(i)];
      }
    });
  });
}, Qj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i, o, s, a, u, c, l, f, d, h, g, M, m, w;
    return ht(this, function(v) {
      switch (v.label) {
        case 0:
          return n = [ne({}, e)], w = {}, [4, Go(e.body, t)];
        case 1:
          switch (r = ne.apply(void 0, n.concat([(w.body = v.sent(), w)])), o = "UnknownError", o = rp(e, r.body), s = o, s) {
            case "ExternalServiceException":
              return [3, 2];
            case "com.amazonaws.cognitoidentity#ExternalServiceException":
              return [3, 2];
            case "InternalErrorException":
              return [3, 4];
            case "com.amazonaws.cognitoidentity#InternalErrorException":
              return [3, 4];
            case "InvalidParameterException":
              return [3, 6];
            case "com.amazonaws.cognitoidentity#InvalidParameterException":
              return [3, 6];
            case "LimitExceededException":
              return [3, 8];
            case "com.amazonaws.cognitoidentity#LimitExceededException":
              return [3, 8];
            case "NotAuthorizedException":
              return [3, 10];
            case "com.amazonaws.cognitoidentity#NotAuthorizedException":
              return [3, 10];
            case "ResourceConflictException":
              return [3, 12];
            case "com.amazonaws.cognitoidentity#ResourceConflictException":
              return [3, 12];
            case "ResourceNotFoundException":
              return [3, 14];
            case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
              return [3, 14];
            case "TooManyRequestsException":
              return [3, 16];
            case "com.amazonaws.cognitoidentity#TooManyRequestsException":
              return [3, 16];
          }
          return [3, 18];
        case 2:
          return a = [{}], [4, Hh(r)];
        case 3:
          return i = ne.apply(void 0, [ne.apply(void 0, a.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, qh(r)];
        case 5:
          return i = ne.apply(void 0, [ne.apply(void 0, u.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, Kh(r)];
        case 7:
          return i = ne.apply(void 0, [ne.apply(void 0, c.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, $j(r)];
        case 9:
          return i = ne.apply(void 0, [ne.apply(void 0, l.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, Gh(r)];
        case 11:
          return i = ne.apply(void 0, [ne.apply(void 0, f.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Jh(r)];
        case 13:
          return i = ne.apply(void 0, [ne.apply(void 0, d.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 14:
          return h = [{}], [4, Zh(r)];
        case 15:
          return i = ne.apply(void 0, [ne.apply(void 0, h.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 16:
          return g = [{}], [4, Xh(r)];
        case 17:
          return i = ne.apply(void 0, [ne.apply(void 0, g.concat([v.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 18:
          M = r.body, o = M.code || M.Code || o, i = ne(ne({}, M), { name: "" + o, message: M.message || M.Message || o, $fault: "client", $metadata: Qe(e) }), v.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, Hh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = qj(r), i = ne({ name: "ExternalServiceException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, qh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = Jj(r), i = ne({ name: "InternalErrorException", $fault: "server", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Bj = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = Zj(r), i = ne({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Kh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = Xj(r), i = ne({ name: "InvalidParameterException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, $j = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = eS(r), i = ne({ name: "LimitExceededException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Gh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = tS(r), i = ne({ name: "NotAuthorizedException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Jh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = rS(r), i = ne({ name: "ResourceConflictException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Zh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = nS(r), i = ne({ name: "ResourceNotFoundException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Xh = function(e, t) {
  return gt(void 0, void 0, void 0, function() {
    var r, n, i;
    return ht(this, function(o) {
      return r = e.body, n = iS(r), i = ne({ name: "TooManyRequestsException", $fault: "client", $metadata: Qe(e) }, n), [2, i];
    });
  });
}, Vj = function(e, t) {
  return ne(ne(ne({}, e.CustomRoleArn !== void 0 && e.CustomRoleArn !== null && { CustomRoleArn: e.CustomRoleArn }), e.IdentityId !== void 0 && e.IdentityId !== null && { IdentityId: e.IdentityId }), e.Logins !== void 0 && e.Logins !== null && { Logins: ep(e.Logins) });
}, Wj = function(e, t) {
  return ne(ne(ne({}, e.AccountId !== void 0 && e.AccountId !== null && { AccountId: e.AccountId }), e.IdentityPoolId !== void 0 && e.IdentityPoolId !== null && { IdentityPoolId: e.IdentityPoolId }), e.Logins !== void 0 && e.Logins !== null && { Logins: ep(e.Logins) });
}, ep = function(e, t) {
  return Object.entries(e).reduce(function(r, n) {
    var i, o = IE(n, 2), s = o[0], a = o[1];
    return a === null ? r : ne(ne({}, r), (i = {}, i[s] = a, i));
  }, {});
}, Hj = function(e, t) {
  return {
    AccessKeyId: e.AccessKeyId !== void 0 && e.AccessKeyId !== null ? e.AccessKeyId : void 0,
    Expiration: e.Expiration !== void 0 && e.Expiration !== null ? new Date(Math.round(e.Expiration * 1e3)) : void 0,
    SecretKey: e.SecretKey !== void 0 && e.SecretKey !== null ? e.SecretKey : void 0,
    SessionToken: e.SessionToken !== void 0 && e.SessionToken !== null ? e.SessionToken : void 0
  };
}, qj = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Kj = function(e, t) {
  return {
    Credentials: e.Credentials !== void 0 && e.Credentials !== null ? Hj(e.Credentials) : void 0,
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, Gj = function(e, t) {
  return {
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, Jj = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Zj = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Xj = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, eS = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, tS = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, rS = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, nS = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, iS = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Qe = function(e) {
  var t;
  return {
    httpStatusCode: e.statusCode,
    requestId: (t = e.headers["x-amzn-requestid"]) !== null && t !== void 0 ? t : e.headers["x-amzn-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  };
}, oS = function(e, t) {
  return e === void 0 && (e = new Uint8Array()), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array());
}, sS = function(e, t) {
  return oS(e, t).then(function(r) {
    return t.utf8Encoder(r);
  });
}, tp = function(e, t, r, n, i) {
  return gt(void 0, void 0, void 0, function() {
    var o, s, a, u, c, l;
    return ht(this, function(f) {
      switch (f.label) {
        case 0:
          return [4, e.endpoint()];
        case 1:
          return o = f.sent(), s = o.hostname, a = o.protocol, u = a === void 0 ? "https" : a, c = o.port, l = {
            protocol: u,
            hostname: s,
            port: c,
            method: "POST",
            path: r,
            headers: t
          }, n !== void 0 && (l.hostname = n), i !== void 0 && (l.body = i), [2, new An(l)];
      }
    });
  });
}, Go = function(e, t) {
  return sS(e, t).then(function(r) {
    return r.length ? JSON.parse(r) : {};
  });
}, rp = function(e, t) {
  var r = function(o, s) {
    return Object.keys(o).find(function(a) {
      return a.toLowerCase() === s.toLowerCase();
    });
  }, n = function(o) {
    var s = o;
    return s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
  }, i = r(e.headers, "x-amzn-errortype");
  return i !== void 0 ? n(e.headers[i]) : t.code !== void 0 ? n(t.code) : t.__type !== void 0 ? n(t.__type) : "";
}, Qa = (
  /** @class */
  function(e) {
    Fu(t, e);
    function t(r) {
      var n = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return n.input = r, n;
    }
    return t.prototype.resolveMiddleware = function(r, n, i) {
      this.middlewareStack.use(Vh(n, this.serialize, this.deserialize));
      var o = r.concat(this.middlewareStack), s = n.logger, a = "CognitoIdentityClient", u = "GetCredentialsForIdentityCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: Ra.filterSensitiveLog,
        outputFilterSensitiveLog: Ua.filterSensitiveLog
      }, l = n.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(r, n) {
      return Pj(r, n);
    }, t.prototype.deserialize = function(r, n) {
      return Uj(r, n);
    }, t;
  }($h)
), ti = (
  /** @class */
  function(e) {
    Fu(t, e);
    function t(r) {
      var n = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return n.input = r, n;
    }
    return t.prototype.resolveMiddleware = function(r, n, i) {
      this.middlewareStack.use(Vh(n, this.serialize, this.deserialize));
      var o = r.concat(this.middlewareStack), s = n.logger, a = "CognitoIdentityClient", u = "GetIdCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: Ya.filterSensitiveLog,
        outputFilterSensitiveLog: Fa.filterSensitiveLog
      }, l = n.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(r, n) {
      return Rj(r, n);
    }, t.prototype.deserialize = function(r, n) {
      return Fj(r, n);
    }, t;
  }($h)
), Jo = (
  /** @class */
  function(e) {
    Ru(t, e);
    function t(r, n) {
      n === void 0 && (n = !0);
      var i = e.call(this, r) || this;
      return i.tryNextLink = n, i;
    }
    return t;
  }(Error)
);
function np(e) {
  return Promise.all(Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    return typeof n == "string" ? t.push([r, n]) : t.push(n().then(function(i) {
      return [r, i];
    })), t;
  }, [])).then(function(t) {
    return t.reduce(function(r, n) {
      var i = Wr(n, 2), o = i[0], s = i[1];
      return r[o] = s, r;
    }, {});
  });
}
function Vn(e) {
  var t = this;
  return function() {
    return Ee(t, void 0, void 0, function() {
      var r, n, i, o, s, a, u, c, l, f, d, h, g;
      return Ie(this, function(M) {
        switch (M.label) {
          case 0:
            return f = (l = e.client).send, d = Qa.bind, g = {
              CustomRoleArn: e.customRoleArn,
              IdentityId: e.identityId
            }, e.logins ? [4, np(e.logins)] : [3, 2];
          case 1:
            return h = M.sent(), [3, 3];
          case 2:
            h = void 0, M.label = 3;
          case 3:
            return [4, f.apply(l, [new (d.apply(Qa, [void 0, (g.Logins = h, g)]))()])];
          case 4:
            return r = M.sent().Credentials, n = r === void 0 ? uS() : r, i = n.AccessKeyId, o = i === void 0 ? aS() : i, s = n.Expiration, a = n.SecretKey, u = a === void 0 ? cS() : a, c = n.SessionToken, [2, {
              identityId: e.identityId,
              accessKeyId: o,
              secretAccessKey: u,
              sessionToken: c,
              expiration: s
            }];
        }
      });
    });
  };
}
function aS() {
  throw new Jo("Response from Amazon Cognito contained no access key ID");
}
function uS() {
  throw new Jo("Response from Amazon Cognito contained no credentials");
}
function cS() {
  throw new Jo("Response from Amazon Cognito contained no secret key");
}
var Us = "IdentityIds", lS = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = "aws:cognito-identity-ids"), this.dbName = t;
    }
    return e.prototype.getItem = function(t) {
      return this.withObjectStore("readonly", function(r) {
        var n = r.get(t);
        return new Promise(function(i) {
          n.onerror = function() {
            return i(null);
          }, n.onsuccess = function() {
            return i(n.result ? n.result.value : null);
          };
        });
      }).catch(function() {
        return null;
      });
    }, e.prototype.removeItem = function(t) {
      return this.withObjectStore("readwrite", function(r) {
        var n = r.delete(t);
        return new Promise(function(i, o) {
          n.onerror = function() {
            return o(n.error);
          }, n.onsuccess = function() {
            return i();
          };
        });
      });
    }, e.prototype.setItem = function(t, r) {
      return this.withObjectStore("readwrite", function(n) {
        var i = n.put({ id: t, value: r });
        return new Promise(function(o, s) {
          i.onerror = function() {
            return s(i.error);
          }, i.onsuccess = function() {
            return o();
          };
        });
      });
    }, e.prototype.getDb = function() {
      var t = self.indexedDB.open(this.dbName, 1);
      return new Promise(function(r, n) {
        t.onsuccess = function() {
          r(t.result);
        }, t.onerror = function() {
          n(t.error);
        }, t.onblocked = function() {
          n(new Error("Unable to access DB"));
        }, t.onupgradeneeded = function() {
          var i = t.result;
          i.onerror = function() {
            n(new Error("Failed to create object store"));
          }, i.createObjectStore(Us, { keyPath: "id" });
        };
      });
    }, e.prototype.withObjectStore = function(t, r) {
      return this.getDb().then(function(n) {
        var i = n.transaction(Us, t);
        return i.oncomplete = function() {
          return n.close();
        }, new Promise(function(o, s) {
          i.onerror = function() {
            return s(i.error);
          }, o(r(i.objectStore(Us)));
        }).catch(function(o) {
          throw n.close(), o;
        });
      });
    }, e;
  }()
), fS = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.store = t;
    }
    return e.prototype.getItem = function(t) {
      return t in this.store ? this.store[t] : null;
    }, e.prototype.removeItem = function(t) {
      delete this.store[t];
    }, e.prototype.setItem = function(t, r) {
      this.store[t] = r;
    }, e;
  }()
), dS = new fS();
function gS() {
  return typeof self == "object" && self.indexedDB ? new lS() : typeof window == "object" && window.localStorage ? window.localStorage : dS;
}
function hS(e) {
  var t = this, r = e.accountId, n = e.cache, i = n === void 0 ? gS() : n, o = e.client, s = e.customRoleArn, a = e.identityPoolId, u = e.logins, c = e.userIdentifier, l = c === void 0 ? !u || Object.keys(u).length === 0 ? "ANONYMOUS" : void 0 : c, f = l ? "aws:cognito-identity-credentials:" + a + ":" + l : void 0, d = function() {
    return Ee(t, void 0, void 0, function() {
      var h, g, M, m, w, v, T, N, E;
      return Ie(this, function(P) {
        switch (P.label) {
          case 0:
            return g = f, g ? [4, i.getItem(f)] : [3, 2];
          case 1:
            g = P.sent(), P.label = 2;
          case 2:
            return h = g, h ? [3, 7] : (v = (w = o).send, T = ti.bind, E = {
              AccountId: r,
              IdentityPoolId: a
            }, u ? [4, np(u)] : [3, 4]);
          case 3:
            return N = P.sent(), [3, 5];
          case 4:
            N = void 0, P.label = 5;
          case 5:
            return [4, v.apply(w, [new (T.apply(ti, [void 0, (E.Logins = N, E)]))()])];
          case 6:
            M = P.sent().IdentityId, m = M === void 0 ? pS() : M, h = m, f && Promise.resolve(i.setItem(f, h)).catch(function() {
            }), P.label = 7;
          case 7:
            return d = Vn({
              client: o,
              customRoleArn: s,
              logins: u,
              identityId: h
            }), [2, d()];
        }
      });
    });
  };
  return function() {
    return d().catch(function(h) {
      return Ee(t, void 0, void 0, function() {
        return Ie(this, function(g) {
          throw f && Promise.resolve(i.removeItem(f)).catch(function() {
          }), h;
        });
      });
    });
  };
}
function pS() {
  throw new Jo("Response from Amazon Cognito contained no identity ID");
}
function Ys(e) {
  var t = new zj({
    region: e.region,
    customUserAgent: _I()
  });
  return t.middlewareStack.add(function(r, n) {
    return function(i) {
      return r(MS(i));
    };
  }, {
    step: "build",
    name: "cacheControlMiddleWare"
  }), t;
}
function MS(e) {
  return we(we({}, e), { request: we(we({}, e.request), { headers: we(we({}, e.request.headers), { "cache-control": "no-store" }) }) });
}
var Te = new Yt("Credentials"), yS = 50 * 60 * 1e3, mS = "CognitoIdentityId-", vS = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", wS = function(e, t, r) {
  Jt.dispatch("core", { event: e, data: t, message: r }, "Credentials", vS);
}, DS = (
  /** @class */
  function() {
    function e(t) {
      this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(t), this._refreshHandlers.google = ij.refreshGoogleToken, this._refreshHandlers.facebook = oj.refreshFacebookToken;
    }
    return e.prototype.getModuleName = function() {
      return "Credentials";
    }, e.prototype.getCredSource = function() {
      return this._credentials_source;
    }, e.prototype.configure = function(t) {
      if (!t)
        return this._config || {};
      this._config = Object.assign({}, this._config, t);
      var r = this._config.refreshHandlers;
      return r && (this._refreshHandlers = we(we({}, this._refreshHandlers), r)), this._storage = this._config.storage, this._storage || (this._storage = new Wh().getStorage()), this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), wS("credentials_configured", null, "Credentials has been configured successfully"), this._config;
    }, e.prototype.get = function() {
      return Te.debug("getting credentials"), this._pickupCredentials();
    }, e.prototype._getCognitoIdentityIdStorageKey = function(t) {
      return "" + mS + t;
    }, e.prototype._pickupCredentials = function() {
      return Te.debug("picking up credentials"), !this._gettingCredPromise || !this._gettingCredPromise.isPending() ? (Te.debug("getting new cred promise"), this._gettingCredPromise = RI(this._keepAlive())) : Te.debug("getting old cred promise"), this._gettingCredPromise;
    }, e.prototype._keepAlive = function() {
      return Ee(this, void 0, void 0, function() {
        var t, r, n, i, o, s, a, u;
        return Ie(this, function(c) {
          switch (c.label) {
            case 0:
              if (Te.debug("checking if credentials exists and not expired"), t = this._credentials, t && !this._isExpired(t) && !this._isPastTTL())
                return Te.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(t)];
              if (Te.debug("need to get a new credential or refresh the existing one"), r = this.Auth, n = r === void 0 ? Uu.Auth : r, !n || typeof n.currentUserCredentials != "function")
                return [2, this._setCredentialsForGuest()];
              if (!(!this._isExpired(t) && this._isPastTTL()))
                return [3, 6];
              Te.debug("ttl has passed but token is not yet expired"), c.label = 1;
            case 1:
              return c.trys.push([1, 5, , 6]), [4, n.currentUserPoolUser()];
            case 2:
              return i = c.sent(), [4, n.currentSession()];
            case 3:
              return o = c.sent(), s = o.refreshToken, a = new Promise(function(l, f) {
                i.refreshSession(s, function(d, h) {
                  return d ? f(d) : l(h);
                });
              }), [4, a];
            case 4:
              return c.sent(), [3, 6];
            case 5:
              return u = c.sent(), Te.debug("Error attempting to refreshing the session", u), [3, 6];
            case 6:
              return [2, n.currentUserCredentials()];
          }
        });
      });
    }, e.prototype.refreshFederatedToken = function(t) {
      Te.debug("Getting federated credentials");
      var r = t.provider, n = t.user, i = t.token, o = t.identity_id, s = t.expires_at;
      s = new Date(s).getFullYear() === 1970 ? s * 1e3 : s;
      var a = this;
      return Te.debug("checking if federated jwt token expired"), s > (/* @__PURE__ */ new Date()).getTime() ? (Te.debug("token not expired"), this._setCredentialsFromFederation({
        provider: r,
        token: i,
        user: n,
        identity_id: o,
        expires_at: s
      })) : a._refreshHandlers[r] && typeof a._refreshHandlers[r] == "function" ? (Te.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
        refreshHandler: a._refreshHandlers[r],
        provider: r,
        user: n
      })) : (Te.debug("no refresh handler for provider:", r), this.clear(), Promise.reject("no refresh handler for provider"));
    }, e.prototype._providerRefreshWithRetry = function(t) {
      var r = this, n = t.refreshHandler, i = t.provider, o = t.user, s = 10 * 1e3;
      return vE(n, [], s).then(function(a) {
        return Te.debug("refresh federated token sucessfully", a), r._setCredentialsFromFederation({
          provider: i,
          token: a.token,
          user: o,
          identity_id: a.identity_id,
          expires_at: a.expires_at
        });
      }).catch(function(a) {
        var u = typeof a == "string" && a.toLowerCase().lastIndexOf("network error", a.length) === 0;
        return u || r.clear(), Te.debug("refresh federated token failed", a), Promise.reject("refreshing federation token failed: " + a);
      });
    }, e.prototype._isExpired = function(t) {
      if (!t)
        return Te.debug("no credentials for expiration check"), !0;
      Te.debug("are these credentials expired?", t);
      var r = Date.now(), n = t.expiration;
      return n.getTime() <= r;
    }, e.prototype._isPastTTL = function() {
      return this._nextCredentialsRefresh <= Date.now();
    }, e.prototype._setCredentialsForGuest = function() {
      var t;
      return Ee(this, void 0, void 0, function() {
        var r, n, i, o, s, a, u, c, l, f, d, h = this;
        return Ie(this, function(g) {
          switch (g.label) {
            case 0:
              return Te.debug("setting credentials for guest"), !((t = this._config) === null || t === void 0) && t.identityPoolId || (this._config = Object.assign({}, this._config, Ah(this._config || {}).Auth)), r = this._config, n = r.identityPoolId, i = r.region, o = r.mandatorySignIn, s = r.identityPoolRegion, o ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : n ? !s && !i ? (Te.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (u = this, [4, this._getGuestIdentityId()]) : (Te.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
            case 1:
              return a = u._identityId = g.sent(), c = Ys({
                region: s || i
              }), l = void 0, a ? (f = {
                identityId: a,
                client: c
              }, l = Vn(f)()) : (d = function() {
                return Ee(h, void 0, void 0, function() {
                  var M, m, w;
                  return Ie(this, function(v) {
                    switch (v.label) {
                      case 0:
                        return [4, c.send(new ti({
                          IdentityPoolId: n
                        }))];
                      case 1:
                        return M = v.sent().IdentityId, this._identityId = M, m = {
                          client: c,
                          identityId: M
                        }, w = Vn(m), [2, w()];
                    }
                  });
                });
              }, l = d().catch(function(M) {
                return Ee(h, void 0, void 0, function() {
                  return Ie(this, function(m) {
                    throw M;
                  });
                });
              })), [2, this._loadCredentials(l, "guest", !1, null).then(function(M) {
                return M;
              }).catch(function(M) {
                return Ee(h, void 0, void 0, function() {
                  var m, w = this;
                  return Ie(this, function(v) {
                    switch (v.label) {
                      case 0:
                        return M.name === "ResourceNotFoundException" && M.message === "Identity '" + a + "' not found." ? (Te.debug("Failed to load guest credentials"), [4, this._removeGuestIdentityId()]) : [3, 2];
                      case 1:
                        return v.sent(), m = function() {
                          return Ee(w, void 0, void 0, function() {
                            var T, N, E;
                            return Ie(this, function(P) {
                              switch (P.label) {
                                case 0:
                                  return [4, c.send(new ti({
                                    IdentityPoolId: n
                                  }))];
                                case 1:
                                  return T = P.sent().IdentityId, this._identityId = T, N = {
                                    client: c,
                                    identityId: T
                                  }, E = Vn(N), [2, E()];
                              }
                            });
                          });
                        }, l = m().catch(function(T) {
                          return Ee(w, void 0, void 0, function() {
                            return Ie(this, function(N) {
                              throw T;
                            });
                          });
                        }), [2, this._loadCredentials(l, "guest", !1, null)];
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
      var r = t.provider, n = t.token, i = t.identity_id, o = {
        google: "accounts.google.com",
        facebook: "graph.facebook.com",
        amazon: "www.amazon.com",
        developer: "cognito-identity.amazonaws.com"
      }, s = o[r] || r;
      if (!s)
        return Promise.reject("You must specify a federated provider");
      var a = {};
      a[s] = n;
      var u = this._config, c = u.identityPoolId, l = u.region, f = u.identityPoolRegion;
      if (!c)
        return Te.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!f && !l)
        return Te.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var d = Ys({
        region: f || l
      }), h = void 0;
      if (i) {
        var g = {
          identityId: i,
          logins: a,
          client: d
        };
        h = Vn(g)();
      } else {
        var g = {
          logins: a,
          identityPoolId: c,
          client: d
        };
        h = hS(g)();
      }
      return this._loadCredentials(h, "federated", !0, t);
    }, e.prototype._setCredentialsFromSession = function(t) {
      var r = this;
      Te.debug("set credentials from session");
      var n = t.getIdToken().getJwtToken(), i = this._config, o = i.region, s = i.userPoolId, a = i.identityPoolId, u = i.identityPoolRegion;
      if (!a)
        return Te.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!u && !o)
        return Te.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var c = "cognito-idp." + o + ".amazonaws.com/" + s, l = {};
      l[c] = n;
      var f = Ys({
        region: u || o
      }), d = function() {
        return Ee(r, void 0, void 0, function() {
          var g, M, m, w, v, T, N, E, P, k;
          return Ie(this, function(B) {
            switch (B.label) {
              case 0:
                return [4, this._getGuestIdentityId()];
              case 1:
                return g = B.sent(), g ? [3, 3] : [4, f.send(new ti({
                  IdentityPoolId: a,
                  Logins: l
                }))];
              case 2:
                m = B.sent().IdentityId, M = m, B.label = 3;
              case 3:
                return [4, f.send(new Qa({
                  IdentityId: g || M,
                  Logins: l
                }))];
              case 4:
                return w = B.sent(), v = w.Credentials, T = v.AccessKeyId, N = v.Expiration, E = v.SecretKey, P = v.SessionToken, k = w.IdentityId, this._identityId = k, g ? (Te.debug("The guest identity " + g + " has been successfully linked to the logins"), g === k && Te.debug("The guest identity " + g + " has become the primary identity"), [4, this._removeGuestIdentityId()]) : [3, 6];
              case 5:
                B.sent(), B.label = 6;
              case 6:
                return [2, {
                  accessKeyId: T,
                  secretAccessKey: E,
                  sessionToken: P,
                  expiration: N,
                  identityId: k
                }];
            }
          });
        });
      }, h = d().catch(function(g) {
        return Ee(r, void 0, void 0, function() {
          return Ie(this, function(M) {
            throw g;
          });
        });
      });
      return this._loadCredentials(h, "userPool", !0, null);
    }, e.prototype._loadCredentials = function(t, r, n, i) {
      var o = this, s = this;
      return new Promise(function(a, u) {
        t.then(function(c) {
          return Ee(o, void 0, void 0, function() {
            var l, f, d, h, g;
            return Ie(this, function(M) {
              switch (M.label) {
                case 0:
                  if (Te.debug("Load credentials successfully", c), this._identityId && !c.identityId && (c.identityId = this._identityId), s._credentials = c, s._credentials.authenticated = n, s._credentials_source = r, s._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + yS, r === "federated") {
                    l = Object.assign({ id: this._credentials.identityId }, i.user), f = i.provider, d = i.token, h = i.expires_at, g = i.identity_id;
                    try {
                      this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                        provider: f,
                        token: d,
                        user: l,
                        expires_at: h,
                        identity_id: g
                      }));
                    } catch (m) {
                      Te.debug("Failed to put federated info into auth storage", m);
                    }
                  }
                  return r !== "guest" ? [3, 2] : [4, this._setGuestIdentityId(c.identityId)];
                case 1:
                  M.sent(), M.label = 2;
                case 2:
                  return a(s._credentials), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(c) {
          if (c) {
            Te.debug("Failed to load credentials", t), Te.debug("Error loading credentials", c), u(c);
            return;
          }
        });
      });
    }, e.prototype.set = function(t, r) {
      return r === "session" ? this._setCredentialsFromSession(t) : r === "federation" ? this._setCredentialsFromFederation(t) : r === "guest" ? this._setCredentialsForGuest() : (Te.debug("no source specified for setting credentials"), Promise.reject("invalid source"));
    }, e.prototype.clear = function() {
      return Ee(this, void 0, void 0, function() {
        return Ie(this, function(t) {
          return this._credentials = null, this._credentials_source = null, Te.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype._getGuestIdentityId = function() {
      return Ee(this, void 0, void 0, function() {
        var t, r;
        return Ie(this, function(n) {
          switch (n.label) {
            case 0:
              t = this._config.identityPoolId, n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return n.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(t))];
            case 3:
              return r = n.sent(), Te.debug("Failed to get the cached guest identityId", r), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._setGuestIdentityId = function(t) {
      return Ee(this, void 0, void 0, function() {
        var r, n;
        return Ie(this, function(i) {
          switch (i.label) {
            case 0:
              r = this._config.identityPoolId, i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return i.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(r), t), [3, 4];
            case 3:
              return n = i.sent(), Te.debug("Failed to cache guest identityId", n), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._removeGuestIdentityId = function() {
      return Ee(this, void 0, void 0, function() {
        var t;
        return Ie(this, function(r) {
          return t = this._config.identityPoolId, Te.debug("removing " + this._getCognitoIdentityIdStorageKey(t) + " from storage"), this._storage.removeItem(this._getCognitoIdentityIdStorageKey(t)), [
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
), ip = new DS(null);
Uu.register(ip);
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var op = ES, md = NS, AS = decodeURIComponent, IS = encodeURIComponent, Fi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function ES(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = t || {}, i = e.split(";"), o = n.decode || AS, s = 0; s < i.length; s++) {
    var a = i[s], u = a.indexOf("=");
    if (!(u < 0)) {
      var c = a.substring(0, u).trim();
      if (r[c] == null) {
        var l = a.substring(u + 1, a.length).trim();
        l[0] === '"' && (l = l.slice(1, -1)), r[c] = TS(l, o);
      }
    }
  }
  return r;
}
function NS(e, t, r) {
  var n = r || {}, i = n.encode || IS;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!Fi.test(e))
    throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !Fi.test(o))
    throw new TypeError("argument val is invalid");
  var s = e + "=" + o;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!Fi.test(n.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Fi.test(n.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + n.path;
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + n.expires.toUTCString();
  }
  if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.sameSite) {
    var u = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (u) {
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
function TS(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function jS() {
  return typeof document == "object" && typeof document.cookie == "string";
}
function SS(e, t) {
  return typeof e == "string" ? op(e, t) : typeof e == "object" && e !== null ? e : {};
}
function bS(e, t) {
  return typeof t > "u" && (t = !e || e[0] !== "{" && e[0] !== "[" && e[0] !== '"'), !t;
}
function vd(e, t) {
  t === void 0 && (t = {});
  var r = xS(e);
  if (bS(r, t.doNotParse))
    try {
      return JSON.parse(r);
    } catch {
    }
  return e;
}
function xS(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e;
}
var kr = globalThis && globalThis.__assign || function() {
  return kr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, kr.apply(this, arguments);
}, CS = (
  /** @class */
  function() {
    function e(t, r) {
      var n = this;
      this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = SS(t, r), new Promise(function() {
        n.HAS_DOCUMENT_COOKIE = jS();
      }).catch(function() {
      });
    }
    return e.prototype._updateBrowserValues = function(t) {
      this.HAS_DOCUMENT_COOKIE && (this.cookies = op(document.cookie, t));
    }, e.prototype._emitChange = function(t) {
      for (var r = 0; r < this.changeListeners.length; ++r)
        this.changeListeners[r](t);
    }, e.prototype.get = function(t, r, n) {
      return r === void 0 && (r = {}), this._updateBrowserValues(n), vd(this.cookies[t], r);
    }, e.prototype.getAll = function(t, r) {
      t === void 0 && (t = {}), this._updateBrowserValues(r);
      var n = {};
      for (var i in this.cookies)
        n[i] = vd(this.cookies[i], t);
      return n;
    }, e.prototype.set = function(t, r, n) {
      var i;
      typeof r == "object" && (r = JSON.stringify(r)), this.cookies = kr(kr({}, this.cookies), (i = {}, i[t] = r, i)), this.HAS_DOCUMENT_COOKIE && (document.cookie = md(t, r, n)), this._emitChange({ name: t, value: r, options: n });
    }, e.prototype.remove = function(t, r) {
      var n = r = kr(kr({}, r), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
      this.cookies = kr({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = md(t, "", n)), this._emitChange({ name: t, value: void 0, options: r });
    }, e.prototype.addChangeListener = function(t) {
      this.changeListeners.push(t);
    }, e.prototype.removeChangeListener = function(t) {
      var r = this.changeListeners.indexOf(t);
      r >= 0 && this.changeListeners.splice(r, 1);
    }, e;
  }()
);
const Fs = CS;
var wd = sr().isBrowser, OS = 365 * 24 * 60 * 60 * 1e3, LS = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.cookies = new Fs(), this.store = wd ? window.localStorage : /* @__PURE__ */ Object.create(null), this.cookies = t.req ? new Fs(t.req.headers.cookie) : new Fs(), Object.assign(this.store, this.cookies.getAll());
    }
    return Object.defineProperty(e.prototype, "length", {
      get: function() {
        return Object.entries(this.store).length;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.clear = function() {
      var t = this;
      Array.from(new Array(this.length)).map(function(r, n) {
        return t.key(n);
      }).forEach(function(r) {
        return t.removeItem(r);
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
    }, e.prototype.setItem = function(t, r) {
      this.setLocalItem(t, r);
      var n = t.split(".").pop(), i = [
        "LastAuthUser",
        "accessToken",
        // refreshToken originates on the client, but SSR pages won't fail when this expires
        // Note: the new `accessToken` will also be refreshed on the client (since Amplify doesn't set server-side cookies)
        "refreshToken",
        // Required for CognitoUserSession
        "idToken"
      ];
      i.includes(n ?? "") && this.setUniversalItem(t, r, {
        expires: new Date(Date.now() + OS)
      });
    }, e.prototype.setLocalItem = function(t, r) {
      this.store[t] = r;
    }, e.prototype.setUniversalItem = function(t, r, n) {
      n === void 0 && (n = {}), this.cookies.set(t, r, we(we({}, n), {
        path: "/",
        // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
        sameSite: !0,
        // Allow unsecure requests to http://localhost:3000/ when in development.
        secure: !(wd && window.location.hostname === "localhost")
      }));
    }, e;
  }()
);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Dd = /* @__PURE__ */ function() {
  function e(r) {
    var n = r || {}, i = n.ValidationData, o = n.Username, s = n.Password, a = n.AuthParameters, u = n.ClientMetadata;
    this.validationData = i || {}, this.authParameters = a || {}, this.clientMetadata = u || {}, this.username = o, this.password = s;
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
}(), qe = {}, Zo = {};
Zo.byteLength = zS;
Zo.toByteArray = RS;
Zo.fromByteArray = FS;
var Bt = [], St = [], _S = typeof Uint8Array < "u" ? Uint8Array : Array, Qs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var rn = 0, kS = Qs.length; rn < kS; ++rn)
  Bt[rn] = Qs[rn], St[Qs.charCodeAt(rn)] = rn;
St["-".charCodeAt(0)] = 62;
St["_".charCodeAt(0)] = 63;
function sp(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function zS(e) {
  var t = sp(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function PS(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function RS(e) {
  var t, r = sp(e), n = r[0], i = r[1], o = new _S(PS(e, n, i)), s = 0, a = i > 0 ? n - 4 : n, u;
  for (u = 0; u < a; u += 4)
    t = St[e.charCodeAt(u)] << 18 | St[e.charCodeAt(u + 1)] << 12 | St[e.charCodeAt(u + 2)] << 6 | St[e.charCodeAt(u + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
  return i === 2 && (t = St[e.charCodeAt(u)] << 2 | St[e.charCodeAt(u + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = St[e.charCodeAt(u)] << 10 | St[e.charCodeAt(u + 1)] << 4 | St[e.charCodeAt(u + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o;
}
function US(e) {
  return Bt[e >> 18 & 63] + Bt[e >> 12 & 63] + Bt[e >> 6 & 63] + Bt[e & 63];
}
function YS(e, t, r) {
  for (var n, i = [], o = t; o < r; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(US(n));
  return i.join("");
}
function FS(e) {
  for (var t, r = e.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n; s < a; s += o)
    i.push(YS(e, s, s + o > a ? a : s + o));
  return n === 1 ? (t = e[r - 1], i.push(
    Bt[t >> 2] + Bt[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(
    Bt[t >> 10] + Bt[t >> 4 & 63] + Bt[t << 2 & 63] + "="
  )), i.join("");
}
var Hu = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Hu.read = function(e, t, r, n, i) {
  var o, s, a = i * 8 - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = r ? i - 1 : 0, d = r ? -1 : 1, h = e[t + f];
  for (f += d, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = o * 256 + e[t + f], f += d, l -= 8)
    ;
  for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = s * 256 + e[t + f], f += d, l -= 8)
    ;
  if (o === 0)
    o = 1 - c;
  else {
    if (o === u)
      return s ? NaN : (h ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), o = o - c;
  }
  return (h ? -1 : 1) * s * Math.pow(2, o - n);
};
Hu.write = function(e, t, r, n, i, o) {
  var s, a, u, c = o * 8 - i - 1, l = (1 << c) - 1, f = l >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, g = n ? 1 : -1, M = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? t += d / u : t += d * Math.pow(2, 1 - f), t * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s = s + f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + h] = a & 255, h += g, a /= 256, i -= 8)
    ;
  for (s = s << i | a, c += i; c > 0; e[r + h] = s & 255, h += g, s /= 256, c -= 8)
    ;
  e[r + h - g] |= M * 128;
};
var QS = {}.toString, BS = Array.isArray || function(e) {
  return QS.call(e) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = Zo, r = Hu, n = BS;
  e.Buffer = a, e.SlowBuffer = w, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = Lt.TYPED_ARRAY_SUPPORT !== void 0 ? Lt.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = o();
  function i() {
    try {
      var I = new Uint8Array(1);
      return I.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
        return 42;
      } }, I.foo() === 42 && // typed array instances can be augmented
      typeof I.subarray == "function" && // chrome 9-10 lack `subarray`
      I.subarray(1, 1).byteLength === 0;
    } catch {
      return !1;
    }
  }
  function o() {
    return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function s(I, y) {
    if (o() < y)
      throw new RangeError("Invalid typed array length");
    return a.TYPED_ARRAY_SUPPORT ? (I = new Uint8Array(y), I.__proto__ = a.prototype) : (I === null && (I = new a(y)), I.length = y), I;
  }
  function a(I, y, p) {
    if (!a.TYPED_ARRAY_SUPPORT && !(this instanceof a))
      return new a(I, y, p);
    if (typeof I == "number") {
      if (typeof y == "string")
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return f(this, I);
    }
    return u(this, I, y, p);
  }
  a.poolSize = 8192, a._augment = function(I) {
    return I.__proto__ = a.prototype, I;
  };
  function u(I, y, p, A) {
    if (typeof y == "number")
      throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && y instanceof ArrayBuffer ? g(I, y, p, A) : typeof y == "string" ? d(I, y, p) : M(I, y);
  }
  a.from = function(I, y, p) {
    return u(null, I, y, p);
  }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
    value: null,
    configurable: !0
  }));
  function c(I) {
    if (typeof I != "number")
      throw new TypeError('"size" argument must be a number');
    if (I < 0)
      throw new RangeError('"size" argument must not be negative');
  }
  function l(I, y, p, A) {
    return c(y), y <= 0 ? s(I, y) : p !== void 0 ? typeof A == "string" ? s(I, y).fill(p, A) : s(I, y).fill(p) : s(I, y);
  }
  a.alloc = function(I, y, p) {
    return l(null, I, y, p);
  };
  function f(I, y) {
    if (c(y), I = s(I, y < 0 ? 0 : m(y) | 0), !a.TYPED_ARRAY_SUPPORT)
      for (var p = 0; p < y; ++p)
        I[p] = 0;
    return I;
  }
  a.allocUnsafe = function(I) {
    return f(null, I);
  }, a.allocUnsafeSlow = function(I) {
    return f(null, I);
  };
  function d(I, y, p) {
    if ((typeof p != "string" || p === "") && (p = "utf8"), !a.isEncoding(p))
      throw new TypeError('"encoding" must be a valid string encoding');
    var A = v(y, p) | 0;
    I = s(I, A);
    var z = I.write(y, p);
    return z !== A && (I = I.slice(0, z)), I;
  }
  function h(I, y) {
    var p = y.length < 0 ? 0 : m(y.length) | 0;
    I = s(I, p);
    for (var A = 0; A < p; A += 1)
      I[A] = y[A] & 255;
    return I;
  }
  function g(I, y, p, A) {
    if (y.byteLength, p < 0 || y.byteLength < p)
      throw new RangeError("'offset' is out of bounds");
    if (y.byteLength < p + (A || 0))
      throw new RangeError("'length' is out of bounds");
    return p === void 0 && A === void 0 ? y = new Uint8Array(y) : A === void 0 ? y = new Uint8Array(y, p) : y = new Uint8Array(y, p, A), a.TYPED_ARRAY_SUPPORT ? (I = y, I.__proto__ = a.prototype) : I = h(I, y), I;
  }
  function M(I, y) {
    if (a.isBuffer(y)) {
      var p = m(y.length) | 0;
      return I = s(I, p), I.length === 0 || y.copy(I, 0, 0, p), I;
    }
    if (y) {
      if (typeof ArrayBuffer < "u" && y.buffer instanceof ArrayBuffer || "length" in y)
        return typeof y.length != "number" || de(y.length) ? s(I, 0) : h(I, y);
      if (y.type === "Buffer" && n(y.data))
        return h(I, y.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }
  function m(I) {
    if (I >= o())
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
    return I | 0;
  }
  function w(I) {
    return +I != I && (I = 0), a.alloc(+I);
  }
  a.isBuffer = function(y) {
    return !!(y != null && y._isBuffer);
  }, a.compare = function(y, p) {
    if (!a.isBuffer(y) || !a.isBuffer(p))
      throw new TypeError("Arguments must be Buffers");
    if (y === p)
      return 0;
    for (var A = y.length, z = p.length, Z = 0, G = Math.min(A, z); Z < G; ++Z)
      if (y[Z] !== p[Z]) {
        A = y[Z], z = p[Z];
        break;
      }
    return A < z ? -1 : z < A ? 1 : 0;
  }, a.isEncoding = function(y) {
    switch (String(y).toLowerCase()) {
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
  }, a.concat = function(y, p) {
    if (!n(y))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (y.length === 0)
      return a.alloc(0);
    var A;
    if (p === void 0)
      for (p = 0, A = 0; A < y.length; ++A)
        p += y[A].length;
    var z = a.allocUnsafe(p), Z = 0;
    for (A = 0; A < y.length; ++A) {
      var G = y[A];
      if (!a.isBuffer(G))
        throw new TypeError('"list" argument must be an Array of Buffers');
      G.copy(z, Z), Z += G.length;
    }
    return z;
  };
  function v(I, y) {
    if (a.isBuffer(I))
      return I.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(I) || I instanceof ArrayBuffer))
      return I.byteLength;
    typeof I != "string" && (I = "" + I);
    var p = I.length;
    if (p === 0)
      return 0;
    for (var A = !1; ; )
      switch (y) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
        case void 0:
          return Q(I).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return le(I).length;
        default:
          if (A)
            return Q(I).length;
          y = ("" + y).toLowerCase(), A = !0;
      }
  }
  a.byteLength = v;
  function T(I, y, p) {
    var A = !1;
    if ((y === void 0 || y < 0) && (y = 0), y > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, y >>>= 0, p <= y))
      return "";
    for (I || (I = "utf8"); ; )
      switch (I) {
        case "hex":
          return ie(this, y, p);
        case "utf8":
        case "utf-8":
          return j(this, y, p);
        case "ascii":
          return re(this, y, p);
        case "latin1":
        case "binary":
          return oe(this, y, p);
        case "base64":
          return x(this, y, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _(this, y, p);
        default:
          if (A)
            throw new TypeError("Unknown encoding: " + I);
          I = (I + "").toLowerCase(), A = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function N(I, y, p) {
    var A = I[y];
    I[y] = I[p], I[p] = A;
  }
  a.prototype.swap16 = function() {
    var y = this.length;
    if (y % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var p = 0; p < y; p += 2)
      N(this, p, p + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var y = this.length;
    if (y % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var p = 0; p < y; p += 4)
      N(this, p, p + 3), N(this, p + 1, p + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var y = this.length;
    if (y % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var p = 0; p < y; p += 8)
      N(this, p, p + 7), N(this, p + 1, p + 6), N(this, p + 2, p + 5), N(this, p + 3, p + 4);
    return this;
  }, a.prototype.toString = function() {
    var y = this.length | 0;
    return y === 0 ? "" : arguments.length === 0 ? j(this, 0, y) : T.apply(this, arguments);
  }, a.prototype.equals = function(y) {
    if (!a.isBuffer(y))
      throw new TypeError("Argument must be a Buffer");
    return this === y ? !0 : a.compare(this, y) === 0;
  }, a.prototype.inspect = function() {
    var y = "", p = e.INSPECT_MAX_BYTES;
    return this.length > 0 && (y = this.toString("hex", 0, p).match(/.{2}/g).join(" "), this.length > p && (y += " ... ")), "<Buffer " + y + ">";
  }, a.prototype.compare = function(y, p, A, z, Z) {
    if (!a.isBuffer(y))
      throw new TypeError("Argument must be a Buffer");
    if (p === void 0 && (p = 0), A === void 0 && (A = y ? y.length : 0), z === void 0 && (z = 0), Z === void 0 && (Z = this.length), p < 0 || A > y.length || z < 0 || Z > this.length)
      throw new RangeError("out of range index");
    if (z >= Z && p >= A)
      return 0;
    if (z >= Z)
      return -1;
    if (p >= A)
      return 1;
    if (p >>>= 0, A >>>= 0, z >>>= 0, Z >>>= 0, this === y)
      return 0;
    for (var G = Z - z, ve = A - p, be = Math.min(G, ve), je = this.slice(z, Z), ze = y.slice(p, A), Ve = 0; Ve < be; ++Ve)
      if (je[Ve] !== ze[Ve]) {
        G = je[Ve], ve = ze[Ve];
        break;
      }
    return G < ve ? -1 : ve < G ? 1 : 0;
  };
  function E(I, y, p, A, z) {
    if (I.length === 0)
      return -1;
    if (typeof p == "string" ? (A = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, isNaN(p) && (p = z ? 0 : I.length - 1), p < 0 && (p = I.length + p), p >= I.length) {
      if (z)
        return -1;
      p = I.length - 1;
    } else if (p < 0)
      if (z)
        p = 0;
      else
        return -1;
    if (typeof y == "string" && (y = a.from(y, A)), a.isBuffer(y))
      return y.length === 0 ? -1 : P(I, y, p, A, z);
    if (typeof y == "number")
      return y = y & 255, a.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? z ? Uint8Array.prototype.indexOf.call(I, y, p) : Uint8Array.prototype.lastIndexOf.call(I, y, p) : P(I, [y], p, A, z);
    throw new TypeError("val must be string, number or Buffer");
  }
  function P(I, y, p, A, z) {
    var Z = 1, G = I.length, ve = y.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (I.length < 2 || y.length < 2)
        return -1;
      Z = 2, G /= 2, ve /= 2, p /= 2;
    }
    function be(qt, Hr) {
      return Z === 1 ? qt[Hr] : qt.readUInt16BE(Hr * Z);
    }
    var je;
    if (z) {
      var ze = -1;
      for (je = p; je < G; je++)
        if (be(I, je) === be(y, ze === -1 ? 0 : je - ze)) {
          if (ze === -1 && (ze = je), je - ze + 1 === ve)
            return ze * Z;
        } else
          ze !== -1 && (je -= je - ze), ze = -1;
    } else
      for (p + ve > G && (p = G - ve), je = p; je >= 0; je--) {
        for (var Ve = !0, De = 0; De < ve; De++)
          if (be(I, je + De) !== be(y, De)) {
            Ve = !1;
            break;
          }
        if (Ve)
          return je;
      }
    return -1;
  }
  a.prototype.includes = function(y, p, A) {
    return this.indexOf(y, p, A) !== -1;
  }, a.prototype.indexOf = function(y, p, A) {
    return E(this, y, p, A, !0);
  }, a.prototype.lastIndexOf = function(y, p, A) {
    return E(this, y, p, A, !1);
  };
  function k(I, y, p, A) {
    p = Number(p) || 0;
    var z = I.length - p;
    A ? (A = Number(A), A > z && (A = z)) : A = z;
    var Z = y.length;
    if (Z % 2 !== 0)
      throw new TypeError("Invalid hex string");
    A > Z / 2 && (A = Z / 2);
    for (var G = 0; G < A; ++G) {
      var ve = parseInt(y.substr(G * 2, 2), 16);
      if (isNaN(ve))
        return G;
      I[p + G] = ve;
    }
    return G;
  }
  function B(I, y, p, A) {
    return Me(Q(y, I.length - p), I, p, A);
  }
  function F(I, y, p, A) {
    return Me(fe(y), I, p, A);
  }
  function S(I, y, p, A) {
    return F(I, y, p, A);
  }
  function L(I, y, p, A) {
    return Me(le(y), I, p, A);
  }
  function R(I, y, p, A) {
    return Me(X(y, I.length - p), I, p, A);
  }
  a.prototype.write = function(y, p, A, z) {
    if (p === void 0)
      z = "utf8", A = this.length, p = 0;
    else if (A === void 0 && typeof p == "string")
      z = p, A = this.length, p = 0;
    else if (isFinite(p))
      p = p | 0, isFinite(A) ? (A = A | 0, z === void 0 && (z = "utf8")) : (z = A, A = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var Z = this.length - p;
    if ((A === void 0 || A > Z) && (A = Z), y.length > 0 && (A < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    z || (z = "utf8");
    for (var G = !1; ; )
      switch (z) {
        case "hex":
          return k(this, y, p, A);
        case "utf8":
        case "utf-8":
          return B(this, y, p, A);
        case "ascii":
          return F(this, y, p, A);
        case "latin1":
        case "binary":
          return S(this, y, p, A);
        case "base64":
          return L(this, y, p, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return R(this, y, p, A);
        default:
          if (G)
            throw new TypeError("Unknown encoding: " + z);
          z = ("" + z).toLowerCase(), G = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function x(I, y, p) {
    return y === 0 && p === I.length ? t.fromByteArray(I) : t.fromByteArray(I.slice(y, p));
  }
  function j(I, y, p) {
    p = Math.min(I.length, p);
    for (var A = [], z = y; z < p; ) {
      var Z = I[z], G = null, ve = Z > 239 ? 4 : Z > 223 ? 3 : Z > 191 ? 2 : 1;
      if (z + ve <= p) {
        var be, je, ze, Ve;
        switch (ve) {
          case 1:
            Z < 128 && (G = Z);
            break;
          case 2:
            be = I[z + 1], (be & 192) === 128 && (Ve = (Z & 31) << 6 | be & 63, Ve > 127 && (G = Ve));
            break;
          case 3:
            be = I[z + 1], je = I[z + 2], (be & 192) === 128 && (je & 192) === 128 && (Ve = (Z & 15) << 12 | (be & 63) << 6 | je & 63, Ve > 2047 && (Ve < 55296 || Ve > 57343) && (G = Ve));
            break;
          case 4:
            be = I[z + 1], je = I[z + 2], ze = I[z + 3], (be & 192) === 128 && (je & 192) === 128 && (ze & 192) === 128 && (Ve = (Z & 15) << 18 | (be & 63) << 12 | (je & 63) << 6 | ze & 63, Ve > 65535 && Ve < 1114112 && (G = Ve));
        }
      }
      G === null ? (G = 65533, ve = 1) : G > 65535 && (G -= 65536, A.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), A.push(G), z += ve;
    }
    return W(A);
  }
  var b = 4096;
  function W(I) {
    var y = I.length;
    if (y <= b)
      return String.fromCharCode.apply(String, I);
    for (var p = "", A = 0; A < y; )
      p += String.fromCharCode.apply(
        String,
        I.slice(A, A += b)
      );
    return p;
  }
  function re(I, y, p) {
    var A = "";
    p = Math.min(I.length, p);
    for (var z = y; z < p; ++z)
      A += String.fromCharCode(I[z] & 127);
    return A;
  }
  function oe(I, y, p) {
    var A = "";
    p = Math.min(I.length, p);
    for (var z = y; z < p; ++z)
      A += String.fromCharCode(I[z]);
    return A;
  }
  function ie(I, y, p) {
    var A = I.length;
    (!y || y < 0) && (y = 0), (!p || p < 0 || p > A) && (p = A);
    for (var z = "", Z = y; Z < p; ++Z)
      z += Y(I[Z]);
    return z;
  }
  function _(I, y, p) {
    for (var A = I.slice(y, p), z = "", Z = 0; Z < A.length; Z += 2)
      z += String.fromCharCode(A[Z] + A[Z + 1] * 256);
    return z;
  }
  a.prototype.slice = function(y, p) {
    var A = this.length;
    y = ~~y, p = p === void 0 ? A : ~~p, y < 0 ? (y += A, y < 0 && (y = 0)) : y > A && (y = A), p < 0 ? (p += A, p < 0 && (p = 0)) : p > A && (p = A), p < y && (p = y);
    var z;
    if (a.TYPED_ARRAY_SUPPORT)
      z = this.subarray(y, p), z.__proto__ = a.prototype;
    else {
      var Z = p - y;
      z = new a(Z, void 0);
      for (var G = 0; G < Z; ++G)
        z[G] = this[G + y];
    }
    return z;
  };
  function $(I, y, p) {
    if (I % 1 !== 0 || I < 0)
      throw new RangeError("offset is not uint");
    if (I + y > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUIntLE = function(y, p, A) {
    y = y | 0, p = p | 0, A || $(y, p, this.length);
    for (var z = this[y], Z = 1, G = 0; ++G < p && (Z *= 256); )
      z += this[y + G] * Z;
    return z;
  }, a.prototype.readUIntBE = function(y, p, A) {
    y = y | 0, p = p | 0, A || $(y, p, this.length);
    for (var z = this[y + --p], Z = 1; p > 0 && (Z *= 256); )
      z += this[y + --p] * Z;
    return z;
  }, a.prototype.readUInt8 = function(y, p) {
    return p || $(y, 1, this.length), this[y];
  }, a.prototype.readUInt16LE = function(y, p) {
    return p || $(y, 2, this.length), this[y] | this[y + 1] << 8;
  }, a.prototype.readUInt16BE = function(y, p) {
    return p || $(y, 2, this.length), this[y] << 8 | this[y + 1];
  }, a.prototype.readUInt32LE = function(y, p) {
    return p || $(y, 4, this.length), (this[y] | this[y + 1] << 8 | this[y + 2] << 16) + this[y + 3] * 16777216;
  }, a.prototype.readUInt32BE = function(y, p) {
    return p || $(y, 4, this.length), this[y] * 16777216 + (this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3]);
  }, a.prototype.readIntLE = function(y, p, A) {
    y = y | 0, p = p | 0, A || $(y, p, this.length);
    for (var z = this[y], Z = 1, G = 0; ++G < p && (Z *= 256); )
      z += this[y + G] * Z;
    return Z *= 128, z >= Z && (z -= Math.pow(2, 8 * p)), z;
  }, a.prototype.readIntBE = function(y, p, A) {
    y = y | 0, p = p | 0, A || $(y, p, this.length);
    for (var z = p, Z = 1, G = this[y + --z]; z > 0 && (Z *= 256); )
      G += this[y + --z] * Z;
    return Z *= 128, G >= Z && (G -= Math.pow(2, 8 * p)), G;
  }, a.prototype.readInt8 = function(y, p) {
    return p || $(y, 1, this.length), this[y] & 128 ? (255 - this[y] + 1) * -1 : this[y];
  }, a.prototype.readInt16LE = function(y, p) {
    p || $(y, 2, this.length);
    var A = this[y] | this[y + 1] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt16BE = function(y, p) {
    p || $(y, 2, this.length);
    var A = this[y + 1] | this[y] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt32LE = function(y, p) {
    return p || $(y, 4, this.length), this[y] | this[y + 1] << 8 | this[y + 2] << 16 | this[y + 3] << 24;
  }, a.prototype.readInt32BE = function(y, p) {
    return p || $(y, 4, this.length), this[y] << 24 | this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3];
  }, a.prototype.readFloatLE = function(y, p) {
    return p || $(y, 4, this.length), r.read(this, y, !0, 23, 4);
  }, a.prototype.readFloatBE = function(y, p) {
    return p || $(y, 4, this.length), r.read(this, y, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(y, p) {
    return p || $(y, 8, this.length), r.read(this, y, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(y, p) {
    return p || $(y, 8, this.length), r.read(this, y, !1, 52, 8);
  };
  function U(I, y, p, A, z, Z) {
    if (!a.isBuffer(I))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (y > z || y < Z)
      throw new RangeError('"value" argument is out of bounds');
    if (p + A > I.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUIntLE = function(y, p, A, z) {
    if (y = +y, p = p | 0, A = A | 0, !z) {
      var Z = Math.pow(2, 8 * A) - 1;
      U(this, y, p, A, Z, 0);
    }
    var G = 1, ve = 0;
    for (this[p] = y & 255; ++ve < A && (G *= 256); )
      this[p + ve] = y / G & 255;
    return p + A;
  }, a.prototype.writeUIntBE = function(y, p, A, z) {
    if (y = +y, p = p | 0, A = A | 0, !z) {
      var Z = Math.pow(2, 8 * A) - 1;
      U(this, y, p, A, Z, 0);
    }
    var G = A - 1, ve = 1;
    for (this[p + G] = y & 255; --G >= 0 && (ve *= 256); )
      this[p + G] = y / ve & 255;
    return p + A;
  }, a.prototype.writeUInt8 = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (y = Math.floor(y)), this[p] = y & 255, p + 1;
  };
  function K(I, y, p, A) {
    y < 0 && (y = 65535 + y + 1);
    for (var z = 0, Z = Math.min(I.length - p, 2); z < Z; ++z)
      I[p + z] = (y & 255 << 8 * (A ? z : 1 - z)) >>> (A ? z : 1 - z) * 8;
  }
  a.prototype.writeUInt16LE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[p] = y & 255, this[p + 1] = y >>> 8) : K(this, y, p, !0), p + 2;
  }, a.prototype.writeUInt16BE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[p] = y >>> 8, this[p + 1] = y & 255) : K(this, y, p, !1), p + 2;
  };
  function q(I, y, p, A) {
    y < 0 && (y = 4294967295 + y + 1);
    for (var z = 0, Z = Math.min(I.length - p, 4); z < Z; ++z)
      I[p + z] = y >>> (A ? z : 3 - z) * 8 & 255;
  }
  a.prototype.writeUInt32LE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[p + 3] = y >>> 24, this[p + 2] = y >>> 16, this[p + 1] = y >>> 8, this[p] = y & 255) : q(this, y, p, !0), p + 4;
  }, a.prototype.writeUInt32BE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[p] = y >>> 24, this[p + 1] = y >>> 16, this[p + 2] = y >>> 8, this[p + 3] = y & 255) : q(this, y, p, !1), p + 4;
  }, a.prototype.writeIntLE = function(y, p, A, z) {
    if (y = +y, p = p | 0, !z) {
      var Z = Math.pow(2, 8 * A - 1);
      U(this, y, p, A, Z - 1, -Z);
    }
    var G = 0, ve = 1, be = 0;
    for (this[p] = y & 255; ++G < A && (ve *= 256); )
      y < 0 && be === 0 && this[p + G - 1] !== 0 && (be = 1), this[p + G] = (y / ve >> 0) - be & 255;
    return p + A;
  }, a.prototype.writeIntBE = function(y, p, A, z) {
    if (y = +y, p = p | 0, !z) {
      var Z = Math.pow(2, 8 * A - 1);
      U(this, y, p, A, Z - 1, -Z);
    }
    var G = A - 1, ve = 1, be = 0;
    for (this[p + G] = y & 255; --G >= 0 && (ve *= 256); )
      y < 0 && be === 0 && this[p + G + 1] !== 0 && (be = 1), this[p + G] = (y / ve >> 0) - be & 255;
    return p + A;
  }, a.prototype.writeInt8 = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (y = Math.floor(y)), y < 0 && (y = 255 + y + 1), this[p] = y & 255, p + 1;
  }, a.prototype.writeInt16LE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[p] = y & 255, this[p + 1] = y >>> 8) : K(this, y, p, !0), p + 2;
  }, a.prototype.writeInt16BE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[p] = y >>> 8, this[p + 1] = y & 255) : K(this, y, p, !1), p + 2;
  }, a.prototype.writeInt32LE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[p] = y & 255, this[p + 1] = y >>> 8, this[p + 2] = y >>> 16, this[p + 3] = y >>> 24) : q(this, y, p, !0), p + 4;
  }, a.prototype.writeInt32BE = function(y, p, A) {
    return y = +y, p = p | 0, A || U(this, y, p, 4, 2147483647, -2147483648), y < 0 && (y = 4294967295 + y + 1), a.TYPED_ARRAY_SUPPORT ? (this[p] = y >>> 24, this[p + 1] = y >>> 16, this[p + 2] = y >>> 8, this[p + 3] = y & 255) : q(this, y, p, !1), p + 4;
  };
  function J(I, y, p, A, z, Z) {
    if (p + A > I.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function C(I, y, p, A, z) {
    return z || J(I, y, p, 4), r.write(I, y, p, A, 23, 4), p + 4;
  }
  a.prototype.writeFloatLE = function(y, p, A) {
    return C(this, y, p, !0, A);
  }, a.prototype.writeFloatBE = function(y, p, A) {
    return C(this, y, p, !1, A);
  };
  function te(I, y, p, A, z) {
    return z || J(I, y, p, 8), r.write(I, y, p, A, 52, 8), p + 8;
  }
  a.prototype.writeDoubleLE = function(y, p, A) {
    return te(this, y, p, !0, A);
  }, a.prototype.writeDoubleBE = function(y, p, A) {
    return te(this, y, p, !1, A);
  }, a.prototype.copy = function(y, p, A, z) {
    if (A || (A = 0), !z && z !== 0 && (z = this.length), p >= y.length && (p = y.length), p || (p = 0), z > 0 && z < A && (z = A), z === A || y.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (A < 0 || A >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (z < 0)
      throw new RangeError("sourceEnd out of bounds");
    z > this.length && (z = this.length), y.length - p < z - A && (z = y.length - p + A);
    var Z = z - A, G;
    if (this === y && A < p && p < z)
      for (G = Z - 1; G >= 0; --G)
        y[G + p] = this[G + A];
    else if (Z < 1e3 || !a.TYPED_ARRAY_SUPPORT)
      for (G = 0; G < Z; ++G)
        y[G + p] = this[G + A];
    else
      Uint8Array.prototype.set.call(
        y,
        this.subarray(A, A + Z),
        p
      );
    return Z;
  }, a.prototype.fill = function(y, p, A, z) {
    if (typeof y == "string") {
      if (typeof p == "string" ? (z = p, p = 0, A = this.length) : typeof A == "string" && (z = A, A = this.length), y.length === 1) {
        var Z = y.charCodeAt(0);
        Z < 256 && (y = Z);
      }
      if (z !== void 0 && typeof z != "string")
        throw new TypeError("encoding must be a string");
      if (typeof z == "string" && !a.isEncoding(z))
        throw new TypeError("Unknown encoding: " + z);
    } else
      typeof y == "number" && (y = y & 255);
    if (p < 0 || this.length < p || this.length < A)
      throw new RangeError("Out of range index");
    if (A <= p)
      return this;
    p = p >>> 0, A = A === void 0 ? this.length : A >>> 0, y || (y = 0);
    var G;
    if (typeof y == "number")
      for (G = p; G < A; ++G)
        this[G] = y;
    else {
      var ve = a.isBuffer(y) ? y : Q(new a(y, z).toString()), be = ve.length;
      for (G = 0; G < A - p; ++G)
        this[G + p] = ve[G % be];
    }
    return this;
  };
  var H = /[^+\/0-9A-Za-z-_]/g;
  function ge(I) {
    if (I = V(I).replace(H, ""), I.length < 2)
      return "";
    for (; I.length % 4 !== 0; )
      I = I + "=";
    return I;
  }
  function V(I) {
    return I.trim ? I.trim() : I.replace(/^\s+|\s+$/g, "");
  }
  function Y(I) {
    return I < 16 ? "0" + I.toString(16) : I.toString(16);
  }
  function Q(I, y) {
    y = y || 1 / 0;
    for (var p, A = I.length, z = null, Z = [], G = 0; G < A; ++G) {
      if (p = I.charCodeAt(G), p > 55295 && p < 57344) {
        if (!z) {
          if (p > 56319) {
            (y -= 3) > -1 && Z.push(239, 191, 189);
            continue;
          } else if (G + 1 === A) {
            (y -= 3) > -1 && Z.push(239, 191, 189);
            continue;
          }
          z = p;
          continue;
        }
        if (p < 56320) {
          (y -= 3) > -1 && Z.push(239, 191, 189), z = p;
          continue;
        }
        p = (z - 55296 << 10 | p - 56320) + 65536;
      } else
        z && (y -= 3) > -1 && Z.push(239, 191, 189);
      if (z = null, p < 128) {
        if ((y -= 1) < 0)
          break;
        Z.push(p);
      } else if (p < 2048) {
        if ((y -= 2) < 0)
          break;
        Z.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((y -= 3) < 0)
          break;
        Z.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((y -= 4) < 0)
          break;
        Z.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return Z;
  }
  function fe(I) {
    for (var y = [], p = 0; p < I.length; ++p)
      y.push(I.charCodeAt(p) & 255);
    return y;
  }
  function X(I, y) {
    for (var p, A, z, Z = [], G = 0; G < I.length && !((y -= 2) < 0); ++G)
      p = I.charCodeAt(G), A = p >> 8, z = p % 256, Z.push(z), Z.push(A);
    return Z;
  }
  function le(I) {
    return t.toByteArray(ge(I));
  }
  function Me(I, y, p, A) {
    for (var z = 0; z < A && !(z + p >= y.length || z >= I.length); ++z)
      y[z + p] = I[z];
    return z;
  }
  function de(I) {
    return I !== I;
  }
})(qe);
var xt;
typeof window < "u" && window.crypto && (xt = window.crypto);
!xt && typeof window < "u" && window.msCrypto && (xt = window.msCrypto);
!xt && typeof global < "u" && global.crypto && (xt = global.crypto);
if (!xt && typeof require == "function")
  try {
    xt = require("crypto");
  } catch {
  }
function $S() {
  if (xt) {
    if (typeof xt.getRandomValues == "function")
      try {
        return xt.getRandomValues(new Uint32Array(1))[0];
      } catch {
      }
    if (typeof xt.randomBytes == "function")
      try {
        return xt.randomBytes(4).readInt32LE();
      } catch {
      }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}
function VS(e) {
  for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    n.push((o >>> 4).toString(16)), n.push((o & 15).toString(16));
  }
  return n.join("");
}
var WS = /* @__PURE__ */ function() {
  function e(r, n) {
    r = this.words = r || [], n != null ? this.sigBytes = n : this.sigBytes = r.length * 4;
  }
  var t = e.prototype;
  return t.random = function(n) {
    for (var i = [], o = 0; o < n; o += 4)
      i.push($S());
    return new e(i, n);
  }, t.toString = function() {
    return VS(this);
  }, e;
}();
function me(e, t) {
  e != null && this.fromString(e, t);
}
function yt() {
  return new me(null);
}
var Dr, HS = 244837814094590, Ad = (HS & 16777215) == 15715070;
function qS(e, t, r, n, i, o) {
  for (; --o >= 0; ) {
    var s = t * this[e++] + r[n] + i;
    i = Math.floor(s / 67108864), r[n++] = s & 67108863;
  }
  return i;
}
function KS(e, t, r, n, i, o) {
  for (var s = t & 32767, a = t >> 15; --o >= 0; ) {
    var u = this[e] & 32767, c = this[e++] >> 15, l = a * u + c * s;
    u = s * u + ((l & 32767) << 15) + r[n] + (i & 1073741823), i = (u >>> 30) + (l >>> 15) + a * c + (i >>> 30), r[n++] = u & 1073741823;
  }
  return i;
}
function GS(e, t, r, n, i, o) {
  for (var s = t & 16383, a = t >> 14; --o >= 0; ) {
    var u = this[e] & 16383, c = this[e++] >> 14, l = a * u + c * s;
    u = s * u + ((l & 16383) << 14) + r[n] + i, i = (u >> 28) + (l >> 14) + a * c, r[n++] = u & 268435455;
  }
  return i;
}
var Id = typeof navigator < "u";
Id && Ad && navigator.appName == "Microsoft Internet Explorer" ? (me.prototype.am = KS, Dr = 30) : Id && Ad && navigator.appName != "Netscape" ? (me.prototype.am = qS, Dr = 26) : (me.prototype.am = GS, Dr = 28);
me.prototype.DB = Dr;
me.prototype.DM = (1 << Dr) - 1;
me.prototype.DV = 1 << Dr;
var qu = 52;
me.prototype.FV = Math.pow(2, qu);
me.prototype.F1 = qu - Dr;
me.prototype.F2 = 2 * Dr - qu;
var JS = "0123456789abcdefghijklmnopqrstuvwxyz", Xo = new Array(), jn, Ct;
jn = "0".charCodeAt(0);
for (Ct = 0; Ct <= 9; ++Ct)
  Xo[jn++] = Ct;
jn = "a".charCodeAt(0);
for (Ct = 10; Ct < 36; ++Ct)
  Xo[jn++] = Ct;
jn = "A".charCodeAt(0);
for (Ct = 10; Ct < 36; ++Ct)
  Xo[jn++] = Ct;
function Ed(e) {
  return JS.charAt(e);
}
function ZS(e, t) {
  var r = Xo[e.charCodeAt(t)];
  return r ?? -1;
}
function XS(e) {
  for (var t = this.t - 1; t >= 0; --t)
    e[t] = this[t];
  e.t = this.t, e.s = this.s;
}
function e1(e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
}
function Ku(e) {
  var t = yt();
  return t.fromInt(e), t;
}
function t1(e, t) {
  var r;
  if (t == 16)
    r = 4;
  else if (t == 8)
    r = 3;
  else if (t == 2)
    r = 1;
  else if (t == 32)
    r = 5;
  else if (t == 4)
    r = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  this.t = 0, this.s = 0;
  for (var n = e.length, i = !1, o = 0; --n >= 0; ) {
    var s = ZS(e, n);
    if (s < 0) {
      e.charAt(n) == "-" && (i = !0);
      continue;
    }
    i = !1, o == 0 ? this[this.t++] = s : o + r > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, o += r, o >= this.DB && (o -= this.DB);
  }
  this.clamp(), i && me.ZERO.subTo(this, this);
}
function r1() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function n1(e) {
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
  var r = (1 << t) - 1, n, i = !1, o = "", s = this.t, a = this.DB - s * this.DB % t;
  if (s-- > 0)
    for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0, o = Ed(n)); s >= 0; )
      a < t ? (n = (this[s] & (1 << a) - 1) << t - a, n |= this[--s] >> (a += this.DB - t)) : (n = this[s] >> (a -= t) & r, a <= 0 && (a += this.DB, --s)), n > 0 && (i = !0), i && (o += Ed(n));
  return i ? o : "0";
}
function i1() {
  var e = yt();
  return me.ZERO.subTo(this, e), e;
}
function o1() {
  return this.s < 0 ? this.negate() : this;
}
function s1(e) {
  var t = this.s - e.s;
  if (t != 0)
    return t;
  var r = this.t;
  if (t = r - e.t, t != 0)
    return this.s < 0 ? -t : t;
  for (; --r >= 0; )
    if ((t = this[r] - e[r]) != 0)
      return t;
  return 0;
}
function Gu(e) {
  var t = 1, r;
  return (r = e >>> 16) != 0 && (e = r, t += 16), (r = e >> 8) != 0 && (e = r, t += 8), (r = e >> 4) != 0 && (e = r, t += 4), (r = e >> 2) != 0 && (e = r, t += 2), (r = e >> 1) != 0 && (e = r, t += 1), t;
}
function a1() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Gu(this[this.t - 1] ^ this.s & this.DM);
}
function u1(e, t) {
  var r;
  for (r = this.t - 1; r >= 0; --r)
    t[r + e] = this[r];
  for (r = e - 1; r >= 0; --r)
    t[r] = 0;
  t.t = this.t + e, t.s = this.s;
}
function c1(e, t) {
  for (var r = e; r < this.t; ++r)
    t[r - e] = this[r];
  t.t = Math.max(this.t - e, 0), t.s = this.s;
}
function l1(e, t) {
  var r = e % this.DB, n = this.DB - r, i = (1 << n) - 1, o = Math.floor(e / this.DB), s = this.s << r & this.DM, a;
  for (a = this.t - 1; a >= 0; --a)
    t[a + o + 1] = this[a] >> n | s, s = (this[a] & i) << r;
  for (a = o - 1; a >= 0; --a)
    t[a] = 0;
  t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp();
}
function f1(e, t) {
  t.s = this.s;
  var r = Math.floor(e / this.DB);
  if (r >= this.t) {
    t.t = 0;
    return;
  }
  var n = e % this.DB, i = this.DB - n, o = (1 << n) - 1;
  t[0] = this[r] >> n;
  for (var s = r + 1; s < this.t; ++s)
    t[s - r - 1] |= (this[s] & o) << i, t[s - r] = this[s] >> n;
  n > 0 && (t[this.t - r - 1] |= (this.s & o) << i), t.t = this.t - r, t.clamp();
}
function d1(e, t) {
  for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
    n += this[r] - e[r], t[r++] = n & this.DM, n >>= this.DB;
  if (e.t < this.t) {
    for (n -= e.s; r < this.t; )
      n += this[r], t[r++] = n & this.DM, n >>= this.DB;
    n += this.s;
  } else {
    for (n += this.s; r < e.t; )
      n -= e[r], t[r++] = n & this.DM, n >>= this.DB;
    n -= e.s;
  }
  t.s = n < 0 ? -1 : 0, n < -1 ? t[r++] = this.DV + n : n > 0 && (t[r++] = n), t.t = r, t.clamp();
}
function g1(e, t) {
  var r = this.abs(), n = e.abs(), i = r.t;
  for (t.t = i + n.t; --i >= 0; )
    t[i] = 0;
  for (i = 0; i < n.t; ++i)
    t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
  t.s = 0, t.clamp(), this.s != e.s && me.ZERO.subTo(t, t);
}
function h1(e) {
  for (var t = this.abs(), r = e.t = 2 * t.t; --r >= 0; )
    e[r] = 0;
  for (r = 0; r < t.t - 1; ++r) {
    var n = t.am(r, t[r], e, 2 * r, 0, 1);
    (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1);
  }
  e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp();
}
function p1(e, t, r) {
  var n = e.abs();
  if (!(n.t <= 0)) {
    var i = this.abs();
    if (i.t < n.t) {
      t != null && t.fromInt(0), r != null && this.copyTo(r);
      return;
    }
    r == null && (r = yt());
    var o = yt(), s = this.s, a = e.s, u = this.DB - Gu(n[n.t - 1]);
    u > 0 ? (n.lShiftTo(u, o), i.lShiftTo(u, r)) : (n.copyTo(o), i.copyTo(r));
    var c = o.t, l = o[c - 1];
    if (l != 0) {
      var f = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0), d = this.FV / f, h = (1 << this.F1) / f, g = 1 << this.F2, M = r.t, m = M - c, w = t ?? yt();
      for (o.dlShiftTo(m, w), r.compareTo(w) >= 0 && (r[r.t++] = 1, r.subTo(w, r)), me.ONE.dlShiftTo(c, w), w.subTo(o, o); o.t < c; )
        o[o.t++] = 0;
      for (; --m >= 0; ) {
        var v = r[--M] == l ? this.DM : Math.floor(r[M] * d + (r[M - 1] + g) * h);
        if ((r[M] += o.am(0, v, r, m, 0, c)) < v)
          for (o.dlShiftTo(m, w), r.subTo(w, r); r[M] < --v; )
            r.subTo(w, r);
      }
      t != null && (r.drShiftTo(c, t), s != a && me.ZERO.subTo(t, t)), r.t = c, r.clamp(), u > 0 && r.rShiftTo(u, r), s < 0 && me.ZERO.subTo(r, r);
    }
  }
}
function M1(e) {
  var t = yt();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(me.ZERO) > 0 && e.subTo(t, t), t;
}
function y1() {
  if (this.t < 1)
    return 0;
  var e = this[0];
  if (!(e & 1))
    return 0;
  var t = e & 3;
  return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
}
function m1(e) {
  return this.compareTo(e) == 0;
}
function v1(e, t) {
  for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
    n += this[r] + e[r], t[r++] = n & this.DM, n >>= this.DB;
  if (e.t < this.t) {
    for (n += e.s; r < this.t; )
      n += this[r], t[r++] = n & this.DM, n >>= this.DB;
    n += this.s;
  } else {
    for (n += this.s; r < e.t; )
      n += e[r], t[r++] = n & this.DM, n >>= this.DB;
    n += e.s;
  }
  t.s = n < 0 ? -1 : 0, n > 0 ? t[r++] = n : n < -1 && (t[r++] = this.DV + n), t.t = r, t.clamp();
}
function w1(e) {
  var t = yt();
  return this.addTo(e, t), t;
}
function D1(e) {
  var t = yt();
  return this.subTo(e, t), t;
}
function A1(e) {
  var t = yt();
  return this.multiplyTo(e, t), t;
}
function I1(e) {
  var t = yt();
  return this.divRemTo(e, t, null), t;
}
function Sn(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
}
function E1(e) {
  var t = yt();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(me.ZERO) > 0 && this.m.subTo(t, t), t;
}
function N1(e) {
  var t = yt();
  return e.copyTo(t), this.reduce(t), t;
}
function T1(e) {
  for (; e.t <= this.mt2; )
    e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var r = e[t] & 32767, n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (r = t + this.m.t, e[r] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV; )
      e[r] -= e.DV, e[++r]++;
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function j1(e, t) {
  e.squareTo(t), this.reduce(t);
}
function S1(e, t, r) {
  e.multiplyTo(t, r), this.reduce(r);
}
Sn.prototype.convert = E1;
Sn.prototype.revert = N1;
Sn.prototype.reduce = T1;
Sn.prototype.mulTo = S1;
Sn.prototype.sqrTo = j1;
function b1(e, t, r) {
  var n = e.bitLength(), i, o = Ku(1), s = new Sn(t);
  if (n <= 0)
    return o;
  n < 18 ? i = 1 : n < 48 ? i = 3 : n < 144 ? i = 4 : n < 768 ? i = 5 : i = 6;
  var a = new Array(), u = 3, c = i - 1, l = (1 << i) - 1;
  if (a[1] = s.convert(this), i > 1) {
    var f = yt();
    for (s.sqrTo(a[1], f); u <= l; )
      a[u] = yt(), s.mulTo(f, a[u - 2], a[u]), u += 2;
  }
  var d = e.t - 1, h, g = !0, M = yt(), m;
  for (n = Gu(e[d]) - 1; d >= 0; ) {
    for (n >= c ? h = e[d] >> n - c & l : (h = (e[d] & (1 << n + 1) - 1) << c - n, d > 0 && (h |= e[d - 1] >> this.DB + n - c)), u = i; !(h & 1); )
      h >>= 1, --u;
    if ((n -= u) < 0 && (n += this.DB, --d), g)
      a[h].copyTo(o), g = !1;
    else {
      for (; u > 1; )
        s.sqrTo(o, M), s.sqrTo(M, o), u -= 2;
      u > 0 ? s.sqrTo(o, M) : (m = o, o = M, M = m), s.mulTo(M, a[h], o);
    }
    for (; d >= 0 && !(e[d] & 1 << n); )
      s.sqrTo(o, M), m = o, o = M, M = m, --n < 0 && (n = this.DB - 1, --d);
  }
  var w = s.revert(o);
  return r(null, w), w;
}
me.prototype.copyTo = XS;
me.prototype.fromInt = e1;
me.prototype.fromString = t1;
me.prototype.clamp = r1;
me.prototype.dlShiftTo = u1;
me.prototype.drShiftTo = c1;
me.prototype.lShiftTo = l1;
me.prototype.rShiftTo = f1;
me.prototype.subTo = d1;
me.prototype.multiplyTo = g1;
me.prototype.squareTo = h1;
me.prototype.divRemTo = p1;
me.prototype.invDigit = y1;
me.prototype.addTo = v1;
me.prototype.toString = n1;
me.prototype.negate = i1;
me.prototype.abs = o1;
me.prototype.compareTo = s1;
me.prototype.bitLength = a1;
me.prototype.mod = M1;
me.prototype.equals = m1;
me.prototype.add = w1;
me.prototype.subtract = D1;
me.prototype.multiply = A1;
me.prototype.divide = I1;
me.prototype.modPow = b1;
me.ZERO = Ku(0);
me.ONE = Ku(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function Bs(e) {
  return qe.Buffer.from(new WS().random(e).toString(), "hex");
}
var x1 = /^[89a-f]/i, C1 = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", O1 = "userAttributes.", nn = /* @__PURE__ */ function() {
  function e(r) {
    this.N = new me(C1, 16), this.g = new me("2", 16), this.k = new me(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {
    }), this.infoBits = qe.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = r;
  }
  var t = e.prototype;
  return t.getSmallAValue = function() {
    return this.smallAValue;
  }, t.getLargeAValue = function(n) {
    var i = this;
    this.largeAValue ? n(null, this.largeAValue) : this.calculateA(this.smallAValue, function(o, s) {
      o && n(o, null), i.largeAValue = s, n(null, i.largeAValue);
    });
  }, t.generateRandomSmallA = function() {
    var n = Bs(128).toString("hex"), i = new me(n, 16);
    return i;
  }, t.generateRandomString = function() {
    return Bs(40).toString("base64");
  }, t.getRandomPassword = function() {
    return this.randomPassword;
  }, t.getSaltDevices = function() {
    return this.SaltToHashDevices;
  }, t.getVerifierDevices = function() {
    return this.verifierDevices;
  }, t.generateHashDevice = function(n, i, o) {
    var s = this;
    this.randomPassword = this.generateRandomString();
    var a = "" + n + i + ":" + this.randomPassword, u = this.hash(a), c = Bs(16).toString("hex");
    this.SaltToHashDevices = this.padHex(new me(c, 16)), this.g.modPow(new me(this.hexHash(this.SaltToHashDevices + u), 16), this.N, function(l, f) {
      l && o(l, null), s.verifierDevices = s.padHex(f), o(null, null);
    });
  }, t.calculateA = function(n, i) {
    var o = this;
    this.g.modPow(n, this.N, function(s, a) {
      s && i(s, null), a.mod(o.N).equals(me.ZERO) && i(new Error("Illegal paramater. A mod N cannot be 0."), null), i(null, a);
    });
  }, t.calculateU = function(n, i) {
    this.UHexHash = this.hexHash(this.padHex(n) + this.padHex(i));
    var o = new me(this.UHexHash, 16);
    return o;
  }, t.hash = function(n) {
    var i = new wr.Sha256();
    i.update(n);
    var o = i.digestSync(), s = qe.Buffer.from(o).toString("hex");
    return new Array(64 - s.length).join("0") + s;
  }, t.hexHash = function(n) {
    return this.hash(qe.Buffer.from(n, "hex"));
  }, t.computehkdf = function(n, i) {
    var o = qe.Buffer.concat([this.infoBits, qe.Buffer.from(String.fromCharCode(1), "utf8")]), s = new wr.Sha256(i);
    s.update(n);
    var a = s.digestSync(), u = new wr.Sha256(a);
    u.update(o);
    var c = u.digestSync(), l = c, f = l.slice(0, 16);
    return f;
  }, t.getPasswordAuthenticationKey = function(n, i, o, s, a) {
    var u = this;
    if (o.mod(this.N).equals(me.ZERO))
      throw new Error("B cannot be zero.");
    if (this.UValue = this.calculateU(this.largeAValue, o), this.UValue.equals(me.ZERO))
      throw new Error("U cannot be zero.");
    var c = "" + this.poolName + n + ":" + i, l = this.hash(c), f = new me(this.hexHash(this.padHex(s) + l), 16);
    this.calculateS(f, o, function(d, h) {
      d && a(d, null);
      var g = u.computehkdf(qe.Buffer.from(u.padHex(h), "hex"), qe.Buffer.from(u.padHex(u.UValue), "hex"));
      a(null, g);
    });
  }, t.calculateS = function(n, i, o) {
    var s = this;
    this.g.modPow(n, this.N, function(a, u) {
      a && o(a, null);
      var c = i.subtract(s.k.multiply(u));
      c.modPow(s.smallAValue.add(s.UValue.multiply(n)), s.N, function(l, f) {
        l && o(l, null), o(null, f.mod(s.N));
      });
    });
  }, t.getNewPasswordRequiredChallengeUserAttributePrefix = function() {
    return O1;
  }, t.padHex = function(n) {
    if (!(n instanceof me))
      throw new Error("Not a BigInteger");
    var i = n.compareTo(me.ZERO) < 0, o = n.abs().toString(16);
    if (o = o.length % 2 !== 0 ? "0" + o : o, o = x1.test(o) ? "00" + o : o, i) {
      var s = o.split("").map(function(u) {
        var c = ~parseInt(u, 16) & 15;
        return "0123456789ABCDEF".charAt(c);
      }).join(""), a = new me(s, 16).add(me.ONE);
      o = a.toString(16), o.toUpperCase().startsWith("FF8") && (o = o.substring(2));
    }
    return o;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var ap = /* @__PURE__ */ function() {
  function e(r) {
    this.jwtToken = r || "", this.payload = this.decodePayload();
  }
  var t = e.prototype;
  return t.getJwtToken = function() {
    return this.jwtToken;
  }, t.getExpiration = function() {
    return this.payload.exp;
  }, t.getIssuedAt = function() {
    return this.payload.iat;
  }, t.decodePayload = function() {
    var n = this.jwtToken.split(".")[1];
    try {
      return JSON.parse(qe.Buffer.from(n, "base64").toString("utf8"));
    } catch {
      return {};
    }
  }, e;
}();
function L1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ba(e, t);
}
function Ba(e, t) {
  return Ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ba(e, t);
}
var $a = /* @__PURE__ */ function(e) {
  L1(t, e);
  function t(r) {
    var n = r === void 0 ? {} : r, i = n.AccessToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(ap);
function _1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Va(e, t);
}
function Va(e, t) {
  return Va = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Va(e, t);
}
var Wa = /* @__PURE__ */ function(e) {
  _1(t, e);
  function t(r) {
    var n = r === void 0 ? {} : r, i = n.IdToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(ap);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ha = /* @__PURE__ */ function() {
  function e(r) {
    var n = r === void 0 ? {} : r, i = n.RefreshToken;
    this.token = i || "";
  }
  var t = e.prototype;
  return t.getToken = function() {
    return this.token;
  }, e;
}(), k1 = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var qa = "aws-amplify/" + k1, pr = {
  userAgent: qa + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (pr.product = navigator.product || "", pr.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      pr.userAgent = qa + " react-native", pr.isReactNative = !0;
      break;
    default:
      pr.userAgent = qa + " js", pr.isReactNative = !1;
      break;
  }
var z1 = function() {
  return pr.userAgent;
};
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ka = /* @__PURE__ */ function() {
  function e(r) {
    var n = r === void 0 ? {} : r, i = n.IdToken, o = n.RefreshToken, s = n.AccessToken, a = n.ClockDrift;
    if (s == null || i == null)
      throw new Error("Id token and Access Token must be present.");
    this.idToken = i, this.refreshToken = o, this.accessToken = s, this.clockDrift = a === void 0 ? this.calculateClockDrift() : a;
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
    var n = Math.floor(/* @__PURE__ */ new Date() / 1e3), i = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
    return n - i;
  }, t.isValid = function() {
    var n = Math.floor(/* @__PURE__ */ new Date() / 1e3), i = n - this.clockDrift;
    return i < this.accessToken.getExpiration() && i < this.idToken.getExpiration();
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var P1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], R1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Nd = /* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.getNowString = function() {
    var n = /* @__PURE__ */ new Date(), i = R1[n.getUTCDay()], o = P1[n.getUTCMonth()], s = n.getUTCDate(), a = n.getUTCHours();
    a < 10 && (a = "0" + a);
    var u = n.getUTCMinutes();
    u < 10 && (u = "0" + u);
    var c = n.getUTCSeconds();
    c < 10 && (c = "0" + c);
    var l = n.getUTCFullYear(), f = i + " " + o + " " + s + " " + a + ":" + u + ":" + c + " UTC " + l;
    return f;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var un = /* @__PURE__ */ function() {
  function e(r) {
    var n = r === void 0 ? {} : r, i = n.Name, o = n.Value;
    this.Name = i || "", this.Value = o || "";
  }
  var t = e.prototype;
  return t.getValue = function() {
    return this.Value;
  }, t.setValue = function(n) {
    return this.Value = n, this;
  }, t.getName = function() {
    return this.Name;
  }, t.setName = function(n) {
    return this.Name = n, this;
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
var br = {}, U1 = /* @__PURE__ */ function() {
  function e() {
  }
  return e.setItem = function(r, n) {
    return br[r] = n, br[r];
  }, e.getItem = function(r) {
    return Object.prototype.hasOwnProperty.call(br, r) ? br[r] : void 0;
  }, e.removeItem = function(r) {
    return delete br[r];
  }, e.clear = function() {
    return br = {}, br;
  }, e;
}(), up = /* @__PURE__ */ function() {
  function e() {
    try {
      this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
    } catch {
      this.storageWindow = U1;
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
var Y1 = typeof navigator < "u", Td = Y1 ? pr.isReactNative ? "react-native" : navigator.userAgent : "nodejs", Ga = /* @__PURE__ */ function() {
  function e(r) {
    if (r == null || r.Username == null || r.Pool == null)
      throw new Error("Username and Pool information are required.");
    this.username = r.Username || "", this.pool = r.Pool, this.Session = null, this.client = r.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = r.Storage || new up().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
  }
  var t = e.prototype;
  return t.setSignInUserSession = function(n) {
    this.clearCachedUserData(), this.signInUserSession = n, this.cacheTokens();
  }, t.getSignInUserSession = function() {
    return this.signInUserSession;
  }, t.getUsername = function() {
    return this.username;
  }, t.getAuthenticationFlowType = function() {
    return this.authenticationFlowType;
  }, t.setAuthenticationFlowType = function(n) {
    this.authenticationFlowType = n;
  }, t.initiateAuth = function(n, i) {
    var o = this, s = n.getAuthParameters();
    s.USERNAME = this.username;
    var a = Object.keys(n.getValidationData()).length !== 0 ? n.getValidationData() : n.getClientMetadata(), u = {
      AuthFlow: "CUSTOM_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: s,
      ClientMetadata: a
    };
    this.getUserContextData() && (u.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", u, function(c, l) {
      if (c)
        return i.onFailure(c);
      var f = l.ChallengeName, d = l.ChallengeParameters;
      return f === "CUSTOM_CHALLENGE" ? (o.Session = l.Session, i.customChallenge(d)) : (o.signInUserSession = o.getCognitoUserSession(l.AuthenticationResult), o.cacheTokens(), i.onSuccess(o.signInUserSession));
    });
  }, t.authenticateUser = function(n, i) {
    return this.authenticationFlowType === "USER_PASSWORD_AUTH" ? this.authenticateUserPlainUsernamePassword(n, i) : this.authenticationFlowType === "USER_SRP_AUTH" || this.authenticationFlowType === "CUSTOM_AUTH" ? this.authenticateUserDefaultAuth(n, i) : i.onFailure(new Error("Authentication flow type is invalid."));
  }, t.authenticateUserDefaultAuth = function(n, i) {
    var o = this, s = new nn(this.pool.getUserPoolName()), a = new Nd(), u, c, l = {};
    this.deviceKey != null && (l.DEVICE_KEY = this.deviceKey), l.USERNAME = this.username, s.getLargeAValue(function(f, d) {
      f && i.onFailure(f), l.SRP_A = d.toString(16), o.authenticationFlowType === "CUSTOM_AUTH" && (l.CHALLENGE_NAME = "SRP_A");
      var h = Object.keys(n.getValidationData()).length !== 0 ? n.getValidationData() : n.getClientMetadata(), g = {
        AuthFlow: o.authenticationFlowType,
        ClientId: o.pool.getClientId(),
        AuthParameters: l,
        ClientMetadata: h
      };
      o.getUserContextData(o.username) && (g.UserContextData = o.getUserContextData(o.username)), o.client.request("InitiateAuth", g, function(M, m) {
        if (M)
          return i.onFailure(M);
        var w = m.ChallengeParameters;
        o.username = w.USER_ID_FOR_SRP, o.userDataKey = o.keyPrefix + "." + o.username + ".userData", u = new me(w.SRP_B, 16), c = new me(w.SALT, 16), o.getCachedDeviceKeyAndPassword(), s.getPasswordAuthenticationKey(o.username, n.getPassword(), u, c, function(v, T) {
          v && i.onFailure(v);
          var N = a.getNowString(), E = qe.Buffer.concat([qe.Buffer.from(o.pool.getUserPoolName(), "utf8"), qe.Buffer.from(o.username, "utf8"), qe.Buffer.from(w.SECRET_BLOCK, "base64"), qe.Buffer.from(N, "utf8")]), P = new wr.Sha256(T);
          P.update(E);
          var k = P.digestSync(), B = qe.Buffer.from(k).toString("base64"), F = {};
          F.USERNAME = o.username, F.PASSWORD_CLAIM_SECRET_BLOCK = w.SECRET_BLOCK, F.TIMESTAMP = N, F.PASSWORD_CLAIM_SIGNATURE = B, o.deviceKey != null && (F.DEVICE_KEY = o.deviceKey);
          var S = function R(x, j) {
            return o.client.request("RespondToAuthChallenge", x, function(b, W) {
              return b && b.code === "ResourceNotFoundException" && b.message.toLowerCase().indexOf("device") !== -1 ? (F.DEVICE_KEY = null, o.deviceKey = null, o.randomPassword = null, o.deviceGroupKey = null, o.clearCachedDeviceKeyAndPassword(), R(x, j)) : j(b, W);
            });
          }, L = {
            ChallengeName: "PASSWORD_VERIFIER",
            ClientId: o.pool.getClientId(),
            ChallengeResponses: F,
            Session: m.Session,
            ClientMetadata: h
          };
          o.getUserContextData() && (L.UserContextData = o.getUserContextData()), S(L, function(R, x) {
            return R ? i.onFailure(R) : o.authenticateUserInternal(x, s, i);
          });
        });
      });
    });
  }, t.authenticateUserPlainUsernamePassword = function(n, i) {
    var o = this, s = {};
    if (s.USERNAME = this.username, s.PASSWORD = n.getPassword(), !s.PASSWORD) {
      i.onFailure(new Error("PASSWORD parameter is required"));
      return;
    }
    var a = new nn(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (s.DEVICE_KEY = this.deviceKey);
    var u = Object.keys(n.getValidationData()).length !== 0 ? n.getValidationData() : n.getClientMetadata(), c = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: s,
      ClientMetadata: u
    };
    this.getUserContextData(this.username) && (c.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", c, function(l, f) {
      return l ? i.onFailure(l) : o.authenticateUserInternal(f, a, i);
    });
  }, t.authenticateUserInternal = function(n, i, o) {
    var s = this, a = n.ChallengeName, u = n.ChallengeParameters;
    if (a === "SMS_MFA")
      return this.Session = n.Session, o.mfaRequired(a, u);
    if (a === "SELECT_MFA_TYPE")
      return this.Session = n.Session, o.selectMFAType(a, u);
    if (a === "MFA_SETUP")
      return this.Session = n.Session, o.mfaSetup(a, u);
    if (a === "SOFTWARE_TOKEN_MFA")
      return this.Session = n.Session, o.totpRequired(a, u);
    if (a === "CUSTOM_CHALLENGE")
      return this.Session = n.Session, o.customChallenge(u);
    if (a === "NEW_PASSWORD_REQUIRED") {
      this.Session = n.Session;
      var c = null, l = null, f = [], d = i.getNewPasswordRequiredChallengeUserAttributePrefix();
      if (u && (c = JSON.parse(n.ChallengeParameters.userAttributes), l = JSON.parse(n.ChallengeParameters.requiredAttributes)), l)
        for (var h = 0; h < l.length; h++)
          f[h] = l[h].substr(d.length);
      return o.newPasswordRequired(c, f);
    }
    if (a === "DEVICE_SRP_AUTH") {
      this.Session = n.Session, this.getDeviceResponse(o);
      return;
    }
    this.signInUserSession = this.getCognitoUserSession(n.AuthenticationResult), this.challengeName = a, this.cacheTokens();
    var g = n.AuthenticationResult.NewDeviceMetadata;
    if (g == null)
      return o.onSuccess(this.signInUserSession);
    i.generateHashDevice(n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, n.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(M) {
      if (M)
        return o.onFailure(M);
      var m = {
        Salt: qe.Buffer.from(i.getSaltDevices(), "hex").toString("base64"),
        PasswordVerifier: qe.Buffer.from(i.getVerifierDevices(), "hex").toString("base64")
      };
      s.verifierDevices = m.PasswordVerifier, s.deviceGroupKey = g.DeviceGroupKey, s.randomPassword = i.getRandomPassword(), s.client.request("ConfirmDevice", {
        DeviceKey: g.DeviceKey,
        AccessToken: s.signInUserSession.getAccessToken().getJwtToken(),
        DeviceSecretVerifierConfig: m,
        DeviceName: Td
      }, function(w, v) {
        return w ? o.onFailure(w) : (s.deviceKey = n.AuthenticationResult.NewDeviceMetadata.DeviceKey, s.cacheDeviceKeyAndPassword(), v.UserConfirmationNecessary === !0 ? o.onSuccess(s.signInUserSession, v.UserConfirmationNecessary) : o.onSuccess(s.signInUserSession));
      });
    });
  }, t.completeNewPasswordChallenge = function(n, i, o, s) {
    var a = this;
    if (!n)
      return o.onFailure(new Error("New password is required."));
    var u = new nn(this.pool.getUserPoolName()), c = u.getNewPasswordRequiredChallengeUserAttributePrefix(), l = {};
    i && Object.keys(i).forEach(function(d) {
      l[c + d] = i[d];
    }), l.NEW_PASSWORD = n, l.USERNAME = this.username;
    var f = {
      ChallengeName: "NEW_PASSWORD_REQUIRED",
      ClientId: this.pool.getClientId(),
      ChallengeResponses: l,
      Session: this.Session,
      ClientMetadata: s
    };
    this.getUserContextData() && (f.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", f, function(d, h) {
      return d ? o.onFailure(d) : a.authenticateUserInternal(h, u, o);
    });
  }, t.getDeviceResponse = function(n, i) {
    var o = this, s = new nn(this.deviceGroupKey), a = new Nd(), u = {};
    u.USERNAME = this.username, u.DEVICE_KEY = this.deviceKey, s.getLargeAValue(function(c, l) {
      c && n.onFailure(c), u.SRP_A = l.toString(16);
      var f = {
        ChallengeName: "DEVICE_SRP_AUTH",
        ClientId: o.pool.getClientId(),
        ChallengeResponses: u,
        ClientMetadata: i,
        Session: o.Session
      };
      o.getUserContextData() && (f.UserContextData = o.getUserContextData()), o.client.request("RespondToAuthChallenge", f, function(d, h) {
        if (d)
          return n.onFailure(d);
        var g = h.ChallengeParameters, M = new me(g.SRP_B, 16), m = new me(g.SALT, 16);
        s.getPasswordAuthenticationKey(o.deviceKey, o.randomPassword, M, m, function(w, v) {
          if (w)
            return n.onFailure(w);
          var T = a.getNowString(), N = qe.Buffer.concat([qe.Buffer.from(o.deviceGroupKey, "utf8"), qe.Buffer.from(o.deviceKey, "utf8"), qe.Buffer.from(g.SECRET_BLOCK, "base64"), qe.Buffer.from(T, "utf8")]), E = new wr.Sha256(v);
          E.update(N);
          var P = E.digestSync(), k = qe.Buffer.from(P).toString("base64"), B = {};
          B.USERNAME = o.username, B.PASSWORD_CLAIM_SECRET_BLOCK = g.SECRET_BLOCK, B.TIMESTAMP = T, B.PASSWORD_CLAIM_SIGNATURE = k, B.DEVICE_KEY = o.deviceKey;
          var F = {
            ChallengeName: "DEVICE_PASSWORD_VERIFIER",
            ClientId: o.pool.getClientId(),
            ChallengeResponses: B,
            Session: h.Session
          };
          o.getUserContextData() && (F.UserContextData = o.getUserContextData()), o.client.request("RespondToAuthChallenge", F, function(S, L) {
            return S ? n.onFailure(S) : (o.signInUserSession = o.getCognitoUserSession(L.AuthenticationResult), o.cacheTokens(), n.onSuccess(o.signInUserSession));
          });
        });
      });
    });
  }, t.confirmRegistration = function(n, i, o, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      ConfirmationCode: n,
      Username: this.username,
      ForceAliasCreation: i,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", a, function(u) {
      return u ? o(u, null) : o(null, "SUCCESS");
    });
  }, t.sendCustomChallengeAnswer = function(n, i, o) {
    var s = this, a = {};
    a.USERNAME = this.username, a.ANSWER = n;
    var u = new nn(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (a.DEVICE_KEY = this.deviceKey);
    var c = {
      ChallengeName: "CUSTOM_CHALLENGE",
      ChallengeResponses: a,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: o
    };
    this.getUserContextData() && (c.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", c, function(l, f) {
      return l ? i.onFailure(l) : s.authenticateUserInternal(f, u, i);
    });
  }, t.sendMFACode = function(n, i, o, s) {
    var a = this, u = {};
    u.USERNAME = this.username, u.SMS_MFA_CODE = n;
    var c = o || "SMS_MFA";
    c === "SOFTWARE_TOKEN_MFA" && (u.SOFTWARE_TOKEN_MFA_CODE = n), this.deviceKey != null && (u.DEVICE_KEY = this.deviceKey);
    var l = {
      ChallengeName: c,
      ChallengeResponses: u,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: s
    };
    this.getUserContextData() && (l.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", l, function(f, d) {
      if (f)
        return i.onFailure(f);
      var h = d.ChallengeName;
      if (h === "DEVICE_SRP_AUTH") {
        a.getDeviceResponse(i);
        return;
      }
      if (a.signInUserSession = a.getCognitoUserSession(d.AuthenticationResult), a.cacheTokens(), d.AuthenticationResult.NewDeviceMetadata == null)
        return i.onSuccess(a.signInUserSession);
      var g = new nn(a.pool.getUserPoolName());
      g.generateHashDevice(d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, d.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(M) {
        if (M)
          return i.onFailure(M);
        var m = {
          Salt: qe.Buffer.from(g.getSaltDevices(), "hex").toString("base64"),
          PasswordVerifier: qe.Buffer.from(g.getVerifierDevices(), "hex").toString("base64")
        };
        a.verifierDevices = m.PasswordVerifier, a.deviceGroupKey = d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, a.randomPassword = g.getRandomPassword(), a.client.request("ConfirmDevice", {
          DeviceKey: d.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          AccessToken: a.signInUserSession.getAccessToken().getJwtToken(),
          DeviceSecretVerifierConfig: m,
          DeviceName: Td
        }, function(w, v) {
          return w ? i.onFailure(w) : (a.deviceKey = d.AuthenticationResult.NewDeviceMetadata.DeviceKey, a.cacheDeviceKeyAndPassword(), v.UserConfirmationNecessary === !0 ? i.onSuccess(a.signInUserSession, v.UserConfirmationNecessary) : i.onSuccess(a.signInUserSession));
        });
      });
    });
  }, t.changePassword = function(n, i, o, s) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return o(new Error("User is not authenticated"), null);
    this.client.request("ChangePassword", {
      PreviousPassword: n,
      ProposedPassword: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: s
    }, function(a) {
      return a ? o(a, null) : o(null, "SUCCESS");
    });
  }, t.enableMFA = function(n) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n(new Error("User is not authenticated"), null);
    var i = [], o = {
      DeliveryMedium: "SMS",
      AttributeName: "phone_number"
    };
    i.push(o), this.client.request("SetUserSettings", {
      MFAOptions: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? n(s, null) : n(null, "SUCCESS");
    });
  }, t.setUserMfaPreference = function(n, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o(new Error("User is not authenticated"), null);
    this.client.request("SetUserMFAPreference", {
      SMSMfaSettings: n,
      SoftwareTokenMfaSettings: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? o(s, null) : o(null, "SUCCESS");
    });
  }, t.disableMFA = function(n) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n(new Error("User is not authenticated"), null);
    var i = [];
    this.client.request("SetUserSettings", {
      MFAOptions: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o) {
      return o ? n(o, null) : n(null, "SUCCESS");
    });
  }, t.deleteUser = function(n, i) {
    var o = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n(new Error("User is not authenticated"), null);
    this.client.request("DeleteUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: i
    }, function(s) {
      return s ? n(s, null) : (o.clearCachedUser(), n(null, "SUCCESS"));
    });
  }, t.updateAttributes = function(n, i, o) {
    var s = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i(new Error("User is not authenticated"), null);
    this.client.request("UpdateUserAttributes", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserAttributes: n,
      ClientMetadata: o
    }, function(a, u) {
      return a ? i(a, null) : s.getUserData(function() {
        return i(null, "SUCCESS", u);
      }, {
        bypassCache: !0
      });
    });
  }, t.getUserAttributes = function(n) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return n(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i, o) {
      if (i)
        return n(i, null);
      for (var s = [], a = 0; a < o.UserAttributes.length; a++) {
        var u = {
          Name: o.UserAttributes[a].Name,
          Value: o.UserAttributes[a].Value
        }, c = new un(u);
        s.push(c);
      }
      return n(null, s);
    });
  }, t.getMFAOptions = function(n) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return n(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i, o) {
      return i ? n(i, null) : n(null, o.MFAOptions);
    });
  }, t.createGetUserRequest = function() {
    return this.client.promisifyRequest("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    });
  }, t.refreshSessionIfPossible = function(n) {
    var i = this;
    return n === void 0 && (n = {}), new Promise(function(o) {
      var s = i.signInUserSession.getRefreshToken();
      s && s.getToken() ? i.refreshSession(s, o, n.clientMetadata) : o();
    });
  }, t.getUserData = function(n, i) {
    var o = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return this.clearCachedUserData(), n(new Error("User is not authenticated"), null);
    var s = this.getUserDataFromCache();
    if (!s) {
      this.fetchUserData().then(function(a) {
        n(null, a);
      }).catch(n);
      return;
    }
    if (this.isFetchUserDataAndTokenRequired(i)) {
      this.fetchUserData().then(function(a) {
        return o.refreshSessionIfPossible(i).then(function() {
          return a;
        });
      }).then(function(a) {
        return n(null, a);
      }).catch(n);
      return;
    }
    try {
      n(null, JSON.parse(s));
      return;
    } catch (a) {
      this.clearCachedUserData(), n(a, null);
      return;
    }
  }, t.getUserDataFromCache = function() {
    var n = this.storage.getItem(this.userDataKey);
    return n;
  }, t.isFetchUserDataAndTokenRequired = function(n) {
    var i = n || {}, o = i.bypassCache, s = o === void 0 ? !1 : o;
    return s;
  }, t.fetchUserData = function() {
    var n = this;
    return this.createGetUserRequest().then(function(i) {
      return n.cacheUserData(i), i;
    });
  }, t.deleteAttributes = function(n, i) {
    var o = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return i(new Error("User is not authenticated"), null);
    this.client.request("DeleteUserAttributes", {
      UserAttributeNames: n,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? i(s, null) : o.getUserData(function() {
        return i(null, "SUCCESS");
      }, {
        bypassCache: !0
      });
    });
  }, t.resendConfirmationCode = function(n, i) {
    var o = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: i
    };
    this.client.request("ResendConfirmationCode", o, function(s, a) {
      return s ? n(s, null) : n(null, a);
    });
  }, t.getSession = function(n, i) {
    if (i === void 0 && (i = {}), this.username == null)
      return n(new Error("Username is null. Cannot retrieve a new session"), null);
    if (this.signInUserSession != null && this.signInUserSession.isValid())
      return n(null, this.signInUserSession);
    var o = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, s = o + ".idToken", a = o + ".accessToken", u = o + ".refreshToken", c = o + ".clockDrift";
    if (this.storage.getItem(s)) {
      var l = new Wa({
        IdToken: this.storage.getItem(s)
      }), f = new $a({
        AccessToken: this.storage.getItem(a)
      }), d = new Ha({
        RefreshToken: this.storage.getItem(u)
      }), h = parseInt(this.storage.getItem(c), 0) || 0, g = {
        IdToken: l,
        AccessToken: f,
        RefreshToken: d,
        ClockDrift: h
      }, M = new Ka(g);
      if (M.isValid())
        return this.signInUserSession = M, n(null, this.signInUserSession);
      if (!d.getToken())
        return n(new Error("Cannot retrieve a new session. Please authenticate."), null);
      this.refreshSession(d, n, i.clientMetadata);
    } else
      n(new Error("Local storage is missing an ID Token, Please authenticate"), null);
  }, t.refreshSession = function(n, i, o) {
    var s = this, a = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(i) : i, u = {};
    u.REFRESH_TOKEN = n.getToken();
    var c = "CognitoIdentityServiceProvider." + this.pool.getClientId(), l = c + ".LastAuthUser";
    if (this.storage.getItem(l)) {
      this.username = this.storage.getItem(l);
      var f = c + "." + this.username + ".deviceKey";
      this.deviceKey = this.storage.getItem(f), u.DEVICE_KEY = this.deviceKey;
    }
    var d = {
      ClientId: this.pool.getClientId(),
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters: u,
      ClientMetadata: o
    };
    this.getUserContextData() && (d.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", d, function(h, g) {
      if (h)
        return h.code === "NotAuthorizedException" && s.clearCachedUser(), a(h, null);
      if (g) {
        var M = g.AuthenticationResult;
        return Object.prototype.hasOwnProperty.call(M, "RefreshToken") || (M.RefreshToken = n.getToken()), s.signInUserSession = s.getCognitoUserSession(M), s.cacheTokens(), a(null, s.signInUserSession);
      }
    });
  }, t.cacheTokens = function() {
    var n = "CognitoIdentityServiceProvider." + this.pool.getClientId(), i = n + "." + this.username + ".idToken", o = n + "." + this.username + ".accessToken", s = n + "." + this.username + ".refreshToken", a = n + "." + this.username + ".clockDrift", u = n + ".LastAuthUser";
    this.storage.setItem(i, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(o, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(s, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(a, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(u, this.username);
  }, t.cacheUserData = function(n) {
    this.storage.setItem(this.userDataKey, JSON.stringify(n));
  }, t.clearCachedUserData = function() {
    this.storage.removeItem(this.userDataKey);
  }, t.clearCachedUser = function() {
    this.clearCachedTokens(), this.clearCachedUserData();
  }, t.cacheDeviceKeyAndPassword = function() {
    var n = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = n + ".deviceKey", o = n + ".randomPasswordKey", s = n + ".deviceGroupKey";
    this.storage.setItem(i, this.deviceKey), this.storage.setItem(o, this.randomPassword), this.storage.setItem(s, this.deviceGroupKey);
  }, t.getCachedDeviceKeyAndPassword = function() {
    var n = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = n + ".deviceKey", o = n + ".randomPasswordKey", s = n + ".deviceGroupKey";
    this.storage.getItem(i) && (this.deviceKey = this.storage.getItem(i), this.randomPassword = this.storage.getItem(o), this.deviceGroupKey = this.storage.getItem(s));
  }, t.clearCachedDeviceKeyAndPassword = function() {
    var n = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = n + ".deviceKey", o = n + ".randomPasswordKey", s = n + ".deviceGroupKey";
    this.storage.removeItem(i), this.storage.removeItem(o), this.storage.removeItem(s);
  }, t.clearCachedTokens = function() {
    var n = "CognitoIdentityServiceProvider." + this.pool.getClientId(), i = n + "." + this.username + ".idToken", o = n + "." + this.username + ".accessToken", s = n + "." + this.username + ".refreshToken", a = n + ".LastAuthUser", u = n + "." + this.username + ".clockDrift";
    this.storage.removeItem(i), this.storage.removeItem(o), this.storage.removeItem(s), this.storage.removeItem(a), this.storage.removeItem(u);
  }, t.getCognitoUserSession = function(n) {
    var i = new Wa(n), o = new $a(n), s = new Ha(n), a = {
      IdToken: i,
      AccessToken: o,
      RefreshToken: s
    };
    return new Ka(a);
  }, t.forgotPassword = function(n, i) {
    var o = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: i
    };
    this.getUserContextData() && (o.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", o, function(s, a) {
      return s ? n.onFailure(s) : typeof n.inputVerificationCode == "function" ? n.inputVerificationCode(a) : n.onSuccess(a);
    });
  }, t.confirmPassword = function(n, i, o, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ConfirmationCode: n,
      Password: i,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", a, function(u) {
      return u ? o.onFailure(u) : o.onSuccess("SUCCESS");
    });
  }, t.getAttributeVerificationCode = function(n, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    this.client.request("GetUserAttributeVerificationCode", {
      AttributeName: n,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: o
    }, function(s, a) {
      return s ? i.onFailure(s) : typeof i.inputVerificationCode == "function" ? i.inputVerificationCode(a) : i.onSuccess("SUCCESS");
    });
  }, t.verifyAttribute = function(n, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    this.client.request("VerifyUserAttribute", {
      AttributeName: n,
      Code: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? o.onFailure(s) : o.onSuccess("SUCCESS");
    });
  }, t.getDevice = function(n) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n.onFailure(new Error("User is not authenticated"));
    this.client.request("GetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey
    }, function(i, o) {
      return i ? n.onFailure(i) : n.onSuccess(o);
    });
  }, t.forgetSpecificDevice = function(n, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    this.client.request("ForgetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: n
    }, function(o) {
      return o ? i.onFailure(o) : i.onSuccess("SUCCESS");
    });
  }, t.forgetDevice = function(n) {
    var i = this;
    this.forgetSpecificDevice(this.deviceKey, {
      onFailure: n.onFailure,
      onSuccess: function(s) {
        return i.deviceKey = null, i.deviceGroupKey = null, i.randomPassword = null, i.clearCachedDeviceKeyAndPassword(), n.onSuccess(s);
      }
    });
  }, t.setDeviceStatusRemembered = function(n) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "remembered"
    }, function(i) {
      return i ? n.onFailure(i) : n.onSuccess("SUCCESS");
    });
  }, t.setDeviceStatusNotRemembered = function(n) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "not_remembered"
    }, function(i) {
      return i ? n.onFailure(i) : n.onSuccess("SUCCESS");
    });
  }, t.listDevices = function(n, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    var s = {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      Limit: n
    };
    i && (s.PaginationToken = i), this.client.request("ListDevices", s, function(a, u) {
      return a ? o.onFailure(a) : o.onSuccess(u);
    });
  }, t.globalSignOut = function(n) {
    var i = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return n.onFailure(new Error("User is not authenticated"));
    this.client.request("GlobalSignOut", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o) {
      return o ? n.onFailure(o) : (i.clearCachedUser(), n.onSuccess("SUCCESS"));
    });
  }, t.signOut = function(n) {
    var i = this;
    if (!n || typeof n != "function") {
      this.cleanClientData();
      return;
    }
    this.getSession(function(o, s) {
      if (o)
        return n(o);
      i.revokeTokens(function(a) {
        i.cleanClientData(), n(a);
      });
    });
  }, t.revokeTokens = function(n) {
    if (n === void 0 && (n = function() {
    }), typeof n != "function")
      throw new Error("Invalid revokeTokenCallback. It should be a function.");
    if (!this.signInUserSession) {
      var i = new Error("User is not authenticated");
      return n(i);
    }
    if (!this.signInUserSession.getAccessToken()) {
      var o = new Error("No Access token available");
      return n(o);
    }
    var s = this.signInUserSession.getRefreshToken().getToken(), a = this.signInUserSession.getAccessToken();
    if (this.isSessionRevocable(a) && s)
      return this.revokeToken({
        token: s,
        callback: n
      });
    n();
  }, t.isSessionRevocable = function(n) {
    if (n && typeof n.decodePayload == "function")
      try {
        var i = n.decodePayload(), o = i.origin_jti;
        return !!o;
      } catch {
      }
    return !1;
  }, t.cleanClientData = function() {
    this.signInUserSession = null, this.clearCachedUser();
  }, t.revokeToken = function(n) {
    var i = n.token, o = n.callback;
    this.client.requestWithRetry("RevokeToken", {
      Token: i,
      ClientId: this.pool.getClientId()
    }, function(s) {
      if (s)
        return o(s);
      o();
    });
  }, t.sendMFASelectionAnswer = function(n, i) {
    var o = this, s = {};
    s.USERNAME = this.username, s.ANSWER = n;
    var a = {
      ChallengeName: "SELECT_MFA_TYPE",
      ChallengeResponses: s,
      ClientId: this.pool.getClientId(),
      Session: this.Session
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function(u, c) {
      if (u)
        return i.onFailure(u);
      if (o.Session = c.Session, n === "SMS_MFA")
        return i.mfaRequired(c.ChallengeName, c.ChallengeParameters);
      if (n === "SOFTWARE_TOKEN_MFA")
        return i.totpRequired(c.ChallengeName, c.ChallengeParameters);
    });
  }, t.getUserContextData = function() {
    var n = this.pool;
    return n.getUserContextData(this.username);
  }, t.associateSoftwareToken = function(n) {
    var i = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o, s) {
      return o ? n.onFailure(o) : n.associateSecretCode(s.SecretCode);
    }) : this.client.request("AssociateSoftwareToken", {
      Session: this.Session
    }, function(o, s) {
      return o ? n.onFailure(o) : (i.Session = s.Session, n.associateSecretCode(s.SecretCode));
    });
  }, t.verifySoftwareToken = function(n, i, o) {
    var s = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserCode: n,
      FriendlyDeviceName: i
    }, function(a, u) {
      return a ? o.onFailure(a) : o.onSuccess(u);
    }) : this.client.request("VerifySoftwareToken", {
      Session: this.Session,
      UserCode: n,
      FriendlyDeviceName: i
    }, function(a, u) {
      if (a)
        return o.onFailure(a);
      s.Session = u.Session;
      var c = {};
      c.USERNAME = s.username;
      var l = {
        ChallengeName: "MFA_SETUP",
        ClientId: s.pool.getClientId(),
        ChallengeResponses: c,
        Session: s.Session
      };
      s.getUserContextData() && (l.UserContextData = s.getUserContextData()), s.client.request("RespondToAuthChallenge", l, function(f, d) {
        return f ? o.onFailure(f) : (s.signInUserSession = s.getCognitoUserSession(d.AuthenticationResult), s.cacheTokens(), o.onSuccess(s.signInUserSession));
      });
    });
  }, e;
}();
function F1(e, t) {
  return t = t || {}, new Promise(function(r, n) {
    var i = new XMLHttpRequest(), o = [], s = [], a = {}, u = function() {
      return { ok: (i.status / 100 | 0) == 2, statusText: i.statusText, status: i.status, url: i.responseURL, text: function() {
        return Promise.resolve(i.responseText);
      }, json: function() {
        return Promise.resolve(i.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([i.response]));
      }, clone: u, headers: { keys: function() {
        return o;
      }, entries: function() {
        return s;
      }, get: function(l) {
        return a[l.toLowerCase()];
      }, has: function(l) {
        return l.toLowerCase() in a;
      } } };
    };
    for (var c in i.open(t.method || "get", e, !0), i.onload = function() {
      i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(l, f, d) {
        o.push(f = f.toLowerCase()), s.push([f, d]), a[f] = a[f] ? a[f] + "," + d : d;
      }), r(u());
    }, i.onerror = n, i.withCredentials = t.credentials == "include", t.headers)
      i.setRequestHeader(c, t.headers[c]);
    i.send(t.body || null);
  });
}
const Q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F1
}, Symbol.toStringTag, { value: "Module" })), jd = /* @__PURE__ */ Ao(Q1);
self.fetch || (self.fetch = jd.default || jd);
function cp() {
}
cp.prototype.userAgent = z1();
function B1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gi(e, t);
}
function Ja(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ja = function(n) {
    if (n === null || !V1(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, i);
    }
    function i() {
      return Zi(n, arguments, Za(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), gi(i, n);
  }, Ja(e);
}
function Zi(e, t, r) {
  return $1() ? Zi = Reflect.construct.bind() : Zi = function(i, o, s) {
    var a = [null];
    a.push.apply(a, o);
    var u = Function.bind.apply(i, a), c = new u();
    return s && gi(c, s.prototype), c;
  }, Zi.apply(null, arguments);
}
function $1() {
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
function V1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function gi(e, t) {
  return gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, gi(e, t);
}
function Za(e) {
  return Za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Za(e);
}
var W1 = /* @__PURE__ */ function(e) {
  B1(t, e);
  function t(r, n, i, o) {
    var s;
    return s = e.call(this, r) || this, s.code = n, s.name = i, s.statusCode = o, s;
  }
  return t;
}(/* @__PURE__ */ Ja(Error)), H1 = /* @__PURE__ */ function() {
  function e(r, n, i) {
    this.endpoint = n || "https://cognito-idp." + r + ".amazonaws.com/";
    var o = i || {}, s = o.credentials;
    this.fetchOptions = s ? {
      credentials: s
    } : {};
  }
  var t = e.prototype;
  return t.promisifyRequest = function(n, i) {
    var o = this;
    return new Promise(function(s, a) {
      o.request(n, i, function(u, c) {
        u ? a(new W1(u.message, u.code, u.name, u.statusCode)) : s(c);
      });
    });
  }, t.requestWithRetry = function(n, i, o) {
    var s = this, a = 5 * 1e3;
    J1(function(u) {
      return new Promise(function(c, l) {
        s.request(n, u, function(f, d) {
          f ? l(f) : c(d);
        });
      });
    }, [i], a).then(function(u) {
      return o(null, u);
    }).catch(function(u) {
      return o(u);
    });
  }, t.request = function(n, i, o) {
    var s = {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService." + n,
      "X-Amz-User-Agent": cp.prototype.userAgent,
      "Cache-Control": "no-store"
    }, a = Object.assign({}, this.fetchOptions, {
      headers: s,
      method: "POST",
      mode: "cors",
      body: JSON.stringify(i)
    }), u;
    fetch(this.endpoint, a).then(function(c) {
      return u = c, c;
    }, function(c) {
      throw c instanceof TypeError ? new Error("Network error") : c;
    }).then(function(c) {
      return c.json().catch(function() {
        return {};
      });
    }).then(function(c) {
      if (u.ok)
        return o(null, c);
      var l = (c.__type || c.code).split("#").pop(), f = new Error(c.message || c.Message || null);
      return f.name = l, f.code = l, o(f);
    }).catch(function(c) {
      if (u && u.headers && u.headers.get("x-amzn-errortype"))
        try {
          var l = u.headers.get("x-amzn-errortype").split(":")[0], f = new Error(u.status ? u.status.toString() : null);
          return f.code = l, f.name = l, f.statusCode = u.status, o(f);
        } catch {
          return o(c);
        }
      else
        c instanceof Error && c.message === "Network error" && (c.code = "NetworkError");
      return o(c);
    });
  }, e;
}(), Qi = {
  debug: function() {
  }
}, q1 = function(t) {
  var r = "nonRetryable";
  return t && t[r];
};
function lp(e, t, r, n) {
  if (n === void 0 && (n = 1), typeof e != "function")
    throw Error("functionToRetry must be a function");
  return Qi.debug(e.name + " attempt #" + n + " with args: " + JSON.stringify(t)), e.apply(void 0, t).catch(function(i) {
    if (Qi.debug("error on " + e.name, i), q1(i))
      throw Qi.debug(e.name + " non retryable error", i), i;
    var o = r(n, t, i);
    if (Qi.debug(e.name + " retrying in " + o + " ms"), o !== !1)
      return new Promise(function(s) {
        return setTimeout(s, o);
      }).then(function() {
        return lp(e, t, r, n + 1);
      });
    throw i;
  });
}
function K1(e) {
  var t = 100, r = 100;
  return function(n) {
    var i = Math.pow(2, n) * t + r * Math.random();
    return i > e ? !1 : i;
  };
}
var G1 = 5 * 60 * 1e3;
function J1(e, t, r) {
  return r === void 0 && (r = G1), lp(e, t, K1(r));
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Z1 = 55, X1 = /* @__PURE__ */ function() {
  function e(r, n) {
    var i = r || {}, o = i.UserPoolId, s = i.ClientId, a = i.endpoint, u = i.fetchOptions, c = i.AdvancedSecurityDataCollectionFlag;
    if (!o || !s)
      throw new Error("Both UserPoolId and ClientId are required.");
    if (o.length > Z1 || !/^[\w-]+_[0-9a-zA-Z]+$/.test(o))
      throw new Error("Invalid UserPoolId format.");
    var l = o.split("_")[0];
    this.userPoolId = o, this.clientId = s, this.client = new H1(l, a, u), this.advancedSecurityDataCollectionFlag = c !== !1, this.storage = r.Storage || new up().getStorage(), n && (this.wrapRefreshSessionCallback = n);
  }
  var t = e.prototype;
  return t.getUserPoolId = function() {
    return this.userPoolId;
  }, t.getUserPoolName = function() {
    return this.getUserPoolId().split("_")[1];
  }, t.getClientId = function() {
    return this.clientId;
  }, t.signUp = function(n, i, o, s, a, u) {
    var c = this, l = {
      ClientId: this.clientId,
      Username: n,
      Password: i,
      UserAttributes: o,
      ValidationData: s,
      ClientMetadata: u
    };
    this.getUserContextData(n) && (l.UserContextData = this.getUserContextData(n)), this.client.request("SignUp", l, function(f, d) {
      if (f)
        return a(f, null);
      var h = {
        Username: n,
        Pool: c,
        Storage: c.storage
      }, g = {
        user: new Ga(h),
        userConfirmed: d.UserConfirmed,
        userSub: d.UserSub,
        codeDeliveryDetails: d.CodeDeliveryDetails
      };
      return a(null, g);
    });
  }, t.getCurrentUser = function() {
    var n = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser", i = this.storage.getItem(n);
    if (i) {
      var o = {
        Username: i,
        Pool: this,
        Storage: this.storage
      };
      return new Ga(o);
    }
    return null;
  }, t.getUserContextData = function(n) {
    if (!(typeof AmazonCognitoAdvancedSecurityData > "u")) {
      var i = AmazonCognitoAdvancedSecurityData;
      if (this.advancedSecurityDataCollectionFlag) {
        var o = i.getData(n, this.userPoolId, this.clientId);
        if (o) {
          var s = {
            EncodedData: o
          };
          return s;
        }
      }
      return {};
    }
  }, e;
}(), fp = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e, t) {
  (function(r) {
    var n;
    if (e.exports = r(), n = !0, !n) {
      var i = window.Cookies, o = window.Cookies = r();
      o.noConflict = function() {
        return window.Cookies = i, o;
      };
    }
  })(function() {
    function r() {
      for (var o = 0, s = {}; o < arguments.length; o++) {
        var a = arguments[o];
        for (var u in a)
          s[u] = a[u];
      }
      return s;
    }
    function n(o) {
      return o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function i(o) {
      function s() {
      }
      function a(c, l, f) {
        if (!(typeof document > "u")) {
          f = r({
            path: "/"
          }, s.defaults, f), typeof f.expires == "number" && (f.expires = new Date(/* @__PURE__ */ new Date() * 1 + f.expires * 864e5)), f.expires = f.expires ? f.expires.toUTCString() : "";
          try {
            var d = JSON.stringify(l);
            /^[\{\[]/.test(d) && (l = d);
          } catch {
          }
          l = o.write ? o.write(l, c) : encodeURIComponent(String(l)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var h = "";
          for (var g in f)
            f[g] && (h += "; " + g, f[g] !== !0 && (h += "=" + f[g].split(";")[0]));
          return document.cookie = c + "=" + l + h;
        }
      }
      function u(c, l) {
        if (!(typeof document > "u")) {
          for (var f = {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0; h < d.length; h++) {
            var g = d[h].split("="), M = g.slice(1).join("=");
            !l && M.charAt(0) === '"' && (M = M.slice(1, -1));
            try {
              var m = n(g[0]);
              if (M = (o.read || o)(M, m) || n(M), l)
                try {
                  M = JSON.parse(M);
                } catch {
                }
              if (f[m] = M, c === m)
                break;
            } catch {
            }
          }
          return c ? f[c] : f;
        }
      }
      return s.set = a, s.get = function(c) {
        return u(
          c,
          !1
          /* read as raw */
        );
      }, s.getJSON = function(c) {
        return u(
          c,
          !0
          /* read as json */
        );
      }, s.remove = function(c, l) {
        a(c, "", r(l, {
          expires: -1
        }));
      }, s.defaults = {}, s.withConverter = i, s;
    }
    return i(function() {
    });
  });
})(fp);
var Un = fp.exports, eb = /* @__PURE__ */ function() {
  function e(r) {
    if (r === void 0 && (r = {}), r.domain && (this.domain = r.domain), r.path ? this.path = r.path : this.path = "/", Object.prototype.hasOwnProperty.call(r, "expires") ? this.expires = r.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(r, "secure") ? this.secure = r.secure : this.secure = !0, Object.prototype.hasOwnProperty.call(r, "sameSite")) {
      if (!["strict", "lax", "none"].includes(r.sameSite))
        throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
      if (r.sameSite === "none" && !this.secure)
        throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
      this.sameSite = r.sameSite;
    } else
      this.sameSite = null;
  }
  var t = e.prototype;
  return t.setItem = function(n, i) {
    var o = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (o.sameSite = this.sameSite), Un.set(n, i, o), Un.get(n);
  }, t.getItem = function(n) {
    return Un.get(n);
  }, t.removeItem = function(n) {
    var i = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (i.sameSite = this.sameSite), Un.remove(n, i);
  }, t.clear = function() {
    for (var n = Un.get(), i = Object.keys(n).length, o = 0; o < i; ++o)
      this.removeItem(Object.keys(n)[o]);
    return {};
  }, e;
}(), tb = "_self", rb = function(e) {
  var t = window.open(e, tb);
  return t ? Promise.resolve(t) : Promise.reject();
}, nb = function(e) {
  window.sessionStorage.setItem("oauth_state", e);
}, ib = function() {
  var e = window.sessionStorage.getItem("oauth_state");
  return window.sessionStorage.removeItem("oauth_state"), e;
}, ob = function(e) {
  window.sessionStorage.setItem("ouath_pkce_key", e);
}, sb = function() {
  var e = window.sessionStorage.getItem("ouath_pkce_key");
  return window.sessionStorage.removeItem("ouath_pkce_key"), e;
}, ab = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", $s = function(e, t, r) {
  Jt.dispatch("auth", { event: e, data: t, message: r }, "Auth", ab);
}, on = new Yt("OAuth"), ub = (
  /** @class */
  function() {
    function e(t) {
      var r = t.config, n = t.cognitoClientId, i = t.scopes, o = i === void 0 ? [] : i;
      if (this._urlOpener = r.urlOpener || rb, this._config = r, this._cognitoClientId = n, !this.isValidScopes(o))
        throw Error("scopes must be a String Array");
      this._scopes = o;
    }
    return e.prototype.isValidScopes = function(t) {
      return Array.isArray(t) && t.every(function(r) {
        return typeof r == "string";
      });
    }, e.prototype.oauthSignIn = function(t, r, n, i, o, s) {
      t === void 0 && (t = "code"), o === void 0 && (o = lo.Cognito);
      var a = this._generateState(32), u = s ? a + "-" + wE(s) : a;
      nb(u);
      var c = this._generateRandom(128);
      ob(c);
      var l = this._generateChallenge(c), f = "S256", d = this._scopes.join(" "), h = Object.entries(ue.__assign(ue.__assign({ redirect_uri: n, response_type: t, client_id: i, identity_provider: o, scope: d, state: u }, t === "code" ? { code_challenge: l } : {}), t === "code" ? { code_challenge_method: f } : {})).map(function(M) {
        var m = ue.__read(M, 2), w = m[0], v = m[1];
        return encodeURIComponent(w) + "=" + encodeURIComponent(v);
      }).join("&"), g = "https://" + r + "/oauth2/authorize?" + h;
      on.debug("Redirecting to " + g), this._urlOpener(g, n);
    }, e.prototype._handleCodeFlow = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i, o, s, a, u, c, l, f, d, h, g, M;
        return ue.__generator(this, function(m) {
          switch (m.label) {
            case 0:
              return r = (gr(t).query || "").split("&").map(function(w) {
                return w.split("=");
              }).reduce(function(w, v) {
                var T, N = ue.__read(v, 2), E = N[0], P = N[1];
                return ue.__assign(ue.__assign({}, w), (T = {}, T[E] = P, T));
              }, { code: void 0 }).code, n = gr(t).pathname || "/", i = gr(this._config.redirectSignIn).pathname || "/", !r || n !== i ? [
                2
                /*return*/
              ] : (o = "https://" + this._config.domain + "/oauth2/token", $s("codeFlow", {}, "Retrieving tokens from " + o), s = Rr(this._config) ? this._cognitoClientId : this._config.clientID, a = Rr(this._config) ? this._config.redirectSignIn : this._config.redirectUri, u = sb(), c = ue.__assign({
                grant_type: "authorization_code",
                code: r,
                client_id: s,
                redirect_uri: a
              }, u ? { code_verifier: u } : {}), on.debug("Calling token endpoint: " + o + " with", c), l = Object.entries(c).map(function(w) {
                var v = ue.__read(w, 2), T = v[0], N = v[1];
                return encodeURIComponent(T) + "=" + encodeURIComponent(N);
              }).join("&"), [4, fetch(o, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: l
              })]);
            case 1:
              return [4, m.sent().json()];
            case 2:
              if (f = m.sent(), d = f.access_token, h = f.refresh_token, g = f.id_token, M = f.error, M)
                throw new Error(M);
              return [2, {
                accessToken: d,
                refreshToken: h,
                idToken: g
              }];
          }
        });
      });
    }, e.prototype._handleImplicitFlow = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i;
        return ue.__generator(this, function(o) {
          return r = (gr(t).hash || "#").substr(1).split("&").map(function(s) {
            return s.split("=");
          }).reduce(function(s, a) {
            var u, c = ue.__read(a, 2), l = c[0], f = c[1];
            return ue.__assign(ue.__assign({}, s), (u = {}, u[l] = f, u));
          }, {
            id_token: void 0,
            access_token: void 0
          }), n = r.id_token, i = r.access_token, $s("implicitFlow", {}, "Got tokens from " + t), on.debug("Retrieving implicit tokens from " + t + " with"), [2, {
            accessToken: i,
            idToken: n,
            refreshToken: null
          }];
        });
      });
    }, e.prototype.handleAuthResponse = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i, o, s, a, u;
        return ue.__generator(this, function(c) {
          switch (c.label) {
            case 0:
              if (c.trys.push([0, 5, , 6]), r = t ? ue.__assign(ue.__assign({}, (gr(t).hash || "#").substr(1).split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), h = d[0], g = d[1];
                return l[h] = g, l;
              }, {})), (gr(t).query || "").split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), h = d[0], g = d[1];
                return l[h] = g, l;
              }, {})) : {}, n = r.error, i = r.error_description, n)
                throw new Error(i);
              return o = this._validateState(r), on.debug("Starting " + this._config.responseType + " flow with " + t), this._config.responseType !== "code" ? [3, 2] : (s = [{}], [4, this._handleCodeFlow(t)]);
            case 1:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, s.concat([c.sent()])), { state: o }])];
            case 2:
              return a = [{}], [4, this._handleImplicitFlow(t)];
            case 3:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, a.concat([c.sent()])), { state: o }])];
            case 4:
              return [3, 6];
            case 5:
              throw u = c.sent(), on.debug("Error handling auth response.", u), u;
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
        var r = ib(), n = t.state;
        if (r && r !== n)
          throw new Error("Invalid state in OAuth flow");
        return n;
      }
    }, e.prototype.signOut = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r, n;
        return ue.__generator(this, function(i) {
          return t = "https://" + this._config.domain + "/logout?", r = Rr(this._config) ? this._cognitoClientId : this._config.oauth.clientID, n = Rr(this._config) ? this._config.redirectSignOut : this._config.returnTo, t += Object.entries({
            client_id: r,
            logout_uri: encodeURIComponent(n)
          }).map(function(o) {
            var s = ue.__read(o, 2), a = s[0], u = s[1];
            return a + "=" + u;
          }).join("&"), $s("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + t), on.debug("Signing out from " + t), [2, this._urlOpener(t, n)];
        });
      });
    }, e.prototype._generateState = function(t) {
      for (var r = "", n = t, i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; n > 0; --n)
        r += i[Math.round(Math.random() * (i.length - 1))];
      return r;
    }, e.prototype._generateChallenge = function(t) {
      var r = new wr.Sha256();
      r.update(t);
      var n = r.digestSync(), i = qe.Buffer.from(n).toString("base64"), o = this._base64URL(i);
      return o;
    }, e.prototype._base64URL = function(t) {
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, e.prototype._generateRandom = function(t) {
      var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = new Uint8Array(t);
      if (typeof window < "u" && window.crypto)
        window.crypto.getRandomValues(n);
      else
        for (var i = 0; i < t; i += 1)
          n[i] = Math.random() * r.length | 0;
      return this._bufferToString(n);
    }, e.prototype._bufferToString = function(t) {
      for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = [], i = 0; i < t.byteLength; i += 1) {
        var o = t[i] % r.length;
        n.push(r[o]);
      }
      return n.join("");
    }, e;
  }()
);
const cb = ub, lb = function(e) {
  if (sr().isBrowser && window.location) {
    var t = window.location.href;
    e({ url: t });
  } else if (!sr().isNode)
    throw new Error("Not supported");
};
var ut;
(function(e) {
  e.DEFAULT_MSG = "Authentication Error", e.EMPTY_EMAIL = "Email cannot be empty", e.EMPTY_PHONE = "Phone number cannot be empty", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty", e.NETWORK_ERROR = "Network Error", e.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
})(ut || (ut = {}));
var fb = new Yt("AuthError"), dr = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(r) {
      var n = this, i = gb[r], o = i.message, s = i.log;
      return n = e.call(this, o) || this, n.constructor = t, Object.setPrototypeOf(n, t.prototype), n.name = "AuthError", n.log = s || o, fb.error(n.log), n;
    }
    return t;
  }(Error)
), db = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.constructor = t, Object.setPrototypeOf(n, t.prototype), n.name = "NoUserPoolError", n;
    }
    return t;
  }(dr)
), gb = {
  noConfig: {
    message: ut.DEFAULT_MSG,
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
    message: ut.DEFAULT_MSG,
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
    message: ut.EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: ut.INVALID_USERNAME
  },
  emptyPassword: {
    message: ut.EMPTY_PASSWORD
  },
  emptyCode: {
    message: ut.EMPTY_CODE
  },
  signUpError: {
    message: ut.SIGN_UP_ERROR,
    log: "The first parameter should either be non-null string or object"
  },
  noMFA: {
    message: ut.NO_MFA
  },
  invalidMFA: {
    message: ut.INVALID_MFA
  },
  emptyChallengeResponse: {
    message: ut.EMPTY_CHALLENGE
  },
  noUserSession: {
    message: ut.NO_USER_SESSION
  },
  deviceConfig: {
    message: ut.DEVICE_CONFIG
  },
  networkError: {
    message: ut.NETWORK_ERROR
  },
  autoSignInError: {
    message: ut.AUTOSIGNIN_ERROR
  },
  default: {
    message: ut.DEFAULT_MSG
  }
}, ae = new Yt("AuthClass"), Sd = "aws.cognito.signin.user.admin", hb = 10 * 1e3, pb = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", xe = function(e, t, r) {
  Jt.dispatch("auth", { event: e, data: t, message: r }, "Auth", pb);
}, Mb = 60, yb = 3 * 60 * 1e3, mb = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = ip, this.wrapRefreshSessionCallback = function(n) {
        var i = function(o, s) {
          return s ? xe("tokenRefresh", void 0, "New token retrieved") : xe("tokenRefresh_failure", o, "Failed to retrieve new token"), n(o, s);
        };
        return i;
      }, this.configure(t), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), Jt.listen("auth", function(n) {
        var i = n.payload, o = i.event;
        switch (o) {
          case "verify":
          case "signIn":
            r._storage.setItem("amplify-signin-with-hostedUI", "false");
            break;
          case "signOut":
            r._storage.removeItem("amplify-signin-with-hostedUI");
            break;
          case "cognitoHostedUI":
            r._storage.setItem("amplify-signin-with-hostedUI", "true");
            break;
        }
      });
    }
    return e.prototype.getModuleName = function() {
      return "Auth";
    }, e.prototype.configure = function(t) {
      var r = this;
      if (!t)
        return this._config || {};
      ae.debug("configure Auth");
      var n = Object.assign({}, this._config, Ah(t).Auth, t);
      this._config = n;
      var i = this._config, o = i.userPoolId, s = i.userPoolWebClientId, a = i.cookieStorage, u = i.oauth, c = i.region, l = i.identityPoolId, f = i.mandatorySignIn, d = i.refreshHandlers, h = i.identityPoolRegion, g = i.clientMetadata, M = i.endpoint, m = i.storage;
      if (!m)
        a ? this._storage = new eb(a) : this._storage = t.ssr ? new LS() : new Wh().getStorage();
      else {
        if (!this._isValidAuthStorage(m))
          throw ae.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
        this._storage = m;
      }
      if (this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), o) {
        var w = {
          UserPoolId: o,
          ClientId: s,
          endpoint: M
        };
        w.Storage = this._storage, this.userPool = new X1(w, this.wrapRefreshSessionCallback);
      }
      this.Credentials.configure({
        mandatorySignIn: f,
        region: c,
        userPoolId: o,
        identityPoolId: l,
        refreshHandlers: d,
        storage: this._storage,
        identityPoolRegion: h
      });
      var v = u ? Rr(this._config.oauth) ? u : u.awsCognito : void 0;
      if (v) {
        var T = Object.assign({
          cognitoClientId: s,
          UserPoolId: o,
          domain: v.domain,
          scopes: v.scope,
          redirectSignIn: v.redirectSignIn,
          redirectSignOut: v.redirectSignOut,
          responseType: v.responseType,
          Storage: this._storage,
          urlOpener: v.urlOpener,
          clientMetadata: g
        }, v.options);
        this._oAuthHandler = new cb({
          scopes: T.scopes,
          config: T,
          cognitoClientId: T.cognitoClientId
        });
        var N = {};
        lb(function(P) {
          var k = P.url;
          N[k] || (N[k] = !0, r._handleAuthResponse(k));
        });
      }
      if (xe("configured", null, "The Auth category has been configured successfully"), !this.autoSignInInitiated && typeof this._storage.getItem == "function") {
        var E = this.isTrueStorageValue("amplify-polling-started");
        E && (xe("autoSignIn_failure", null, _e.AutoSignInError), this._storage.removeItem("amplify-auto-sign-in")), this._storage.removeItem("amplify-polling-started");
      }
      return this._config;
    }, e.prototype.signUp = function(t) {
      for (var r = this, n = [], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
      var o, s, a;
      if (!this.userPool)
        return this.rejectNoUserPool();
      var u = null, c = null, l = [], f = null, d, h = { enabled: !1 }, g = {}, M = {};
      if (t && typeof t == "string") {
        u = t, c = n ? n[0] : null;
        var m = n ? n[1] : null, w = n ? n[2] : null;
        m && l.push(new un({ Name: "email", Value: m })), w && l.push(new un({
          Name: "phone_number",
          Value: w
        }));
      } else if (t && typeof t == "object") {
        u = t.username, c = t.password, t && t.clientMetadata ? d = t.clientMetadata : this._config.clientMetadata && (d = this._config.clientMetadata);
        var v = t.attributes;
        v && Object.keys(v).map(function(N) {
          l.push(new un({ Name: N, Value: v[N] }));
        });
        var T = t.validationData;
        T && (f = [], Object.keys(T).map(function(N) {
          f.push(new un({
            Name: N,
            Value: T[N]
          }));
        })), h = (o = t.autoSignIn) !== null && o !== void 0 ? o : { enabled: !1 }, h.enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), g = (s = h.validationData) !== null && s !== void 0 ? s : {}, M = (a = h.clientMetaData) !== null && a !== void 0 ? a : {});
      } else
        return this.rejectAuthError(_e.SignUpError);
      return u ? c ? (ae.debug("signUp attrs:", l), ae.debug("signUp validation data:", f), new Promise(function(N, E) {
        r.userPool.signUp(u, c, l, f, function(P, k) {
          P ? (xe("signUp_failure", P, u + " failed to signup"), E(P)) : (xe("signUp", k, u + " has signed up successfully"), h.enabled && r.handleAutoSignIn(u, c, g, M, k), N(k));
        }, d);
      })) : this.rejectAuthError(_e.EmptyPassword) : this.rejectAuthError(_e.EmptyUsername);
    }, e.prototype.handleAutoSignIn = function(t, r, n, i, o) {
      this.autoSignInInitiated = !0;
      var s = new Dd({
        Username: t,
        Password: r,
        ValidationData: n,
        ClientMetadata: i
      });
      o.userConfirmed ? this.signInAfterUserConfirmed(s) : this._config.signUpVerificationMethod === "link" ? this.handleLinkAutoSignIn(s) : this.handleCodeAutoSignIn(s);
    }, e.prototype.handleCodeAutoSignIn = function(t) {
      var r = this, n = function(i) {
        var o = i.payload;
        o.event === "confirmSignUp" && r.signInAfterUserConfirmed(t, n);
      };
      Jt.listen("auth", n);
    }, e.prototype.handleLinkAutoSignIn = function(t) {
      var r = this;
      this._storage.setItem("amplify-polling-started", "true");
      var n = Date.now(), i = setInterval(function() {
        Date.now() - n > yb ? (clearInterval(i), xe("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), r._storage.removeItem("amplify-auto-sign-in")) : r.signInAfterUserConfirmed(t, null, i);
      }, 5e3);
    }, e.prototype.signInAfterUserConfirmed = function(t, r, n) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var i, o, s = this;
        return ue.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              i = this.createCognitoUser(t.getUsername()), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, i.authenticateUser(t, this.authCallbacks(i, function(u) {
                xe("autoSignIn", u, t.getUsername() + " has signed in successfully"), r && Jt.remove("auth", r), n && (clearInterval(n), s._storage.removeItem("amplify-polling-started")), s._storage.removeItem("amplify-auto-sign-in");
              }, function(u) {
                ae.error(u), s._storage.removeItem("amplify-auto-sign-in");
              }))];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              return o = a.sent(), ae.error(o), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.confirmSignUp = function(t, r, n) {
      var i = this;
      if (!this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(_e.EmptyUsername);
      if (!r)
        return this.rejectAuthError(_e.EmptyCode);
      var o = this.createCognitoUser(t), s = n && typeof n.forceAliasCreation == "boolean" ? n.forceAliasCreation : !0, a;
      return n && n.clientMetadata ? a = n.clientMetadata : this._config.clientMetadata && (a = this._config.clientMetadata), new Promise(function(u, c) {
        o.confirmRegistration(r, s, function(l, f) {
          if (l)
            c(l);
          else {
            xe("confirmSignUp", f, t + " has been confirmed successfully");
            var d = i.isTrueStorageValue("amplify-auto-sign-in");
            d && !i.autoSignInInitiated && (xe("autoSignIn_failure", null, _e.AutoSignInError), i._storage.removeItem("amplify-auto-sign-in")), u(f);
          }
        }, a);
      });
    }, e.prototype.isTrueStorageValue = function(t) {
      var r = this._storage.getItem(t);
      return r ? r === "true" : !1;
    }, e.prototype.resendSignUp = function(t, r) {
      if (r === void 0 && (r = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(_e.EmptyUsername);
      var n = this.createCognitoUser(t);
      return new Promise(function(i, o) {
        n.resendConfirmationCode(function(s, a) {
          s ? o(s) : i(a);
        }, r);
      });
    }, e.prototype.signIn = function(t, r, n) {
      if (n === void 0 && (n = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      var i = null, o = null, s = {};
      if (typeof t == "string")
        i = t, o = r;
      else if (xI(t))
        typeof r < "u" && ae.warn("The password should be defined under the first parameter object!"), i = t.username, o = t.password, s = t.validationData;
      else
        return this.rejectAuthError(_e.InvalidUsername);
      if (!i)
        return this.rejectAuthError(_e.EmptyUsername);
      var a = new Dd({
        Username: i,
        Password: o,
        ValidationData: s,
        ClientMetadata: n
      });
      return o ? this.signInWithPassword(a) : this.signInWithoutPassword(a);
    }, e.prototype.authCallbacks = function(t, r, n) {
      var i = this, o = this;
      return {
        onSuccess: function(s) {
          return ue.__awaiter(i, void 0, void 0, function() {
            var a, u, c, l;
            return ue.__generator(this, function(f) {
              switch (f.label) {
                case 0:
                  ae.debug(s), delete t.challengeName, delete t.challengeParam, f.label = 1;
                case 1:
                  return f.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                case 2:
                  return f.sent(), [4, this.Credentials.set(s, "session")];
                case 3:
                  return a = f.sent(), ae.debug("succeed to get cognito credentials", a), [3, 9];
                case 4:
                  return u = f.sent(), ae.debug("cannot get cognito credentials", u), [3, 9];
                case 5:
                  return f.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                case 6:
                  return c = f.sent(), o.user = c, xe("signIn", c, "A user " + t.getUsername() + " has been signed in"), r(c), [3, 8];
                case 7:
                  return l = f.sent(), ae.error("Failed to get the signed in user", l), n(l), [3, 8];
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
          ae.debug("signIn failure", s), xe("signIn_failure", s, t.getUsername() + " failed to signin"), n(s);
        },
        customChallenge: function(s) {
          ae.debug("signIn custom challenge answer required"), t.challengeName = "CUSTOM_CHALLENGE", t.challengeParam = s, r(t);
        },
        mfaRequired: function(s, a) {
          ae.debug("signIn MFA required"), t.challengeName = s, t.challengeParam = a, r(t);
        },
        mfaSetup: function(s, a) {
          ae.debug("signIn mfa setup", s), t.challengeName = s, t.challengeParam = a, r(t);
        },
        newPasswordRequired: function(s, a) {
          ae.debug("signIn new password"), t.challengeName = "NEW_PASSWORD_REQUIRED", t.challengeParam = {
            userAttributes: s,
            requiredAttributes: a
          }, r(t);
        },
        totpRequired: function(s, a) {
          ae.debug("signIn totpRequired"), t.challengeName = s, t.challengeParam = a, r(t);
        },
        selectMFAType: function(s, a) {
          ae.debug("signIn selectMFAType", s), t.challengeName = s, t.challengeParam = a, r(t);
        }
      };
    }, e.prototype.signInWithPassword = function(t) {
      var r = this;
      if (this.pendingSignIn)
        throw new Error("Pending sign-in attempt already in progress");
      var n = this.createCognitoUser(t.getUsername());
      return this.pendingSignIn = new Promise(function(i, o) {
        n.authenticateUser(t, r.authCallbacks(n, function(s) {
          r.pendingSignIn = null, i(s);
        }, function(s) {
          r.pendingSignIn = null, o(s);
        }));
      }), this.pendingSignIn;
    }, e.prototype.signInWithoutPassword = function(t) {
      var r = this, n = this.createCognitoUser(t.getUsername());
      return n.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise(function(i, o) {
        n.initiateAuth(t, r.authCallbacks(n, i, o));
      });
    }, e.prototype.getMFAOptions = function(t) {
      return new Promise(function(r, n) {
        t.getMFAOptions(function(i, o) {
          if (i) {
            ae.debug("get MFA Options failed", i), n(i);
            return;
          }
          ae.debug("get MFA options success", o), r(o);
        });
      });
    }, e.prototype.getPreferredMFA = function(t, r) {
      var n = this, i = this;
      return new Promise(function(o, s) {
        var a = n._config.clientMetadata, u = r ? r.bypassCache : !1;
        t.getUserData(function(c, l) {
          return ue.__awaiter(n, void 0, void 0, function() {
            var f, d;
            return ue.__generator(this, function(h) {
              switch (h.label) {
                case 0:
                  if (!c)
                    return [3, 5];
                  if (ae.debug("getting preferred mfa failed", c), !this.isSessionInvalid(c))
                    return [3, 4];
                  h.label = 1;
                case 1:
                  return h.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                case 2:
                  return h.sent(), [3, 4];
                case 3:
                  return f = h.sent(), s(new Error("Session is invalid due to: " + c.message + " and failed to clean up invalid session: " + f.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return s(c), [
                    2
                    /*return*/
                  ];
                case 5:
                  return d = i._getMfaTypeFromUserData(l), d ? (o(d), [
                    2
                    /*return*/
                  ]) : (s("invalid MFA Type"), [
                    2
                    /*return*/
                  ]);
              }
            });
          });
        }, { bypassCache: u, clientMetadata: a });
      });
    }, e.prototype._getMfaTypeFromUserData = function(t) {
      var r = null, n = t.PreferredMfaSetting;
      if (n)
        r = n;
      else {
        var i = t.UserMFASettingList;
        if (i)
          i.length === 0 ? r = "NOMFA" : ae.debug("invalid case for getPreferredMFA", t);
        else {
          var o = t.MFAOptions;
          o ? r = "SMS_MFA" : r = "NOMFA";
        }
      }
      return r;
    }, e.prototype._getUserData = function(t, r) {
      var n = this;
      return new Promise(function(i, o) {
        t.getUserData(function(s, a) {
          return ue.__awaiter(n, void 0, void 0, function() {
            var u;
            return ue.__generator(this, function(c) {
              switch (c.label) {
                case 0:
                  if (!s)
                    return [3, 5];
                  if (ae.debug("getting user data failed", s), !this.isSessionInvalid(s))
                    return [3, 4];
                  c.label = 1;
                case 1:
                  return c.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                case 2:
                  return c.sent(), [3, 4];
                case 3:
                  return u = c.sent(), o(new Error("Session is invalid due to: " + s.message + " and failed to clean up invalid session: " + u.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return o(s), [
                    2
                    /*return*/
                  ];
                case 5:
                  i(a), c.label = 6;
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, r);
      });
    }, e.prototype.setPreferredMFA = function(t, r) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l = this;
        return ue.__generator(this, function(f) {
          switch (f.label) {
            case 0:
              return n = this._config.clientMetadata, [4, this._getUserData(t, {
                bypassCache: !0,
                clientMetadata: n
              })];
            case 1:
              switch (i = f.sent(), o = null, s = null, a = r, a) {
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
              return o = {
                PreferredMfa: !0,
                Enabled: !0
              }, [3, 7];
            case 4:
              return u = i.UserMFASettingList, [4, this._getMfaTypeFromUserData(i)];
            case 5:
              if (c = f.sent(), c === "NOMFA")
                return [2, Promise.resolve("No change for mfa type")];
              if (c === "SMS_MFA")
                o = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else if (c === "SOFTWARE_TOKEN_MFA")
                s = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else
                return [2, this.rejectAuthError(_e.InvalidMFA)];
              return u && u.length !== 0 && u.forEach(function(d) {
                d === "SMS_MFA" ? o = {
                  PreferredMfa: !1,
                  Enabled: !1
                } : d === "SOFTWARE_TOKEN_MFA" && (s = {
                  PreferredMfa: !1,
                  Enabled: !1
                });
              }), [3, 7];
            case 6:
              return ae.debug("no validmfa method provided"), [2, this.rejectAuthError(_e.NoMFA)];
            case 7:
              return [2, new Promise(function(d, h) {
                t.setUserMfaPreference(o, s, function(g, M) {
                  if (g)
                    return ae.debug("Set user mfa preference error", g), h(g);
                  ae.debug("Set user mfa success", M), ae.debug("Caching the latest user data into local"), t.getUserData(function(m, w) {
                    return ue.__awaiter(l, void 0, void 0, function() {
                      var v;
                      return ue.__generator(this, function(T) {
                        switch (T.label) {
                          case 0:
                            if (!m)
                              return [3, 5];
                            if (ae.debug("getting user data failed", m), !this.isSessionInvalid(m))
                              return [3, 4];
                            T.label = 1;
                          case 1:
                            return T.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                          case 2:
                            return T.sent(), [3, 4];
                          case 3:
                            return v = T.sent(), h(new Error("Session is invalid due to: " + m.message + " and failed to clean up invalid session: " + v.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, h(m)];
                          case 5:
                            return [2, d(M)];
                        }
                      });
                    });
                  }, {
                    bypassCache: !0,
                    clientMetadata: n
                  });
                });
              })];
          }
        });
      });
    }, e.prototype.disableSMS = function(t) {
      return new Promise(function(r, n) {
        t.disableMFA(function(i, o) {
          if (i) {
            ae.debug("disable mfa failed", i), n(i);
            return;
          }
          ae.debug("disable mfa succeed", o), r(o);
        });
      });
    }, e.prototype.enableSMS = function(t) {
      return new Promise(function(r, n) {
        t.enableMFA(function(i, o) {
          if (i) {
            ae.debug("enable mfa failed", i), n(i);
            return;
          }
          ae.debug("enable mfa succeed", o), r(o);
        });
      });
    }, e.prototype.setupTOTP = function(t) {
      return new Promise(function(r, n) {
        t.associateSoftwareToken({
          onFailure: function(i) {
            ae.debug("associateSoftwareToken failed", i), n(i);
          },
          associateSecretCode: function(i) {
            ae.debug("associateSoftwareToken success", i), r(i);
          }
        });
      });
    }, e.prototype.verifyTotpToken = function(t, r) {
      ae.debug("verification totp token", t, r);
      var n;
      t && typeof t.getSignInUserSession == "function" && (n = t.getSignInUserSession());
      var i = n == null ? void 0 : n.isValid();
      return new Promise(function(o, s) {
        t.verifySoftwareToken(r, "My TOTP device", {
          onFailure: function(a) {
            ae.debug("verifyTotpToken failed", a), s(a);
          },
          onSuccess: function(a) {
            i || xe("signIn", t, "A user " + t.getUsername() + " has been signed in"), xe("verify", t, "A user " + t.getUsername() + " has been verified"), ae.debug("verifyTotpToken success", a), o(a);
          }
        });
      });
    }, e.prototype.confirmSignIn = function(t, r, n, i) {
      var o = this;
      if (i === void 0 && (i = this._config.clientMetadata), !r)
        return this.rejectAuthError(_e.EmptyCode);
      var s = this;
      return new Promise(function(a, u) {
        t.sendMFACode(r, {
          onSuccess: function(c) {
            return ue.__awaiter(o, void 0, void 0, function() {
              var l, f, d, h;
              return ue.__generator(this, function(g) {
                switch (g.label) {
                  case 0:
                    ae.debug(c), g.label = 1;
                  case 1:
                    return g.trys.push([1, 4, 5, 10]), [4, this.Credentials.clear()];
                  case 2:
                    return g.sent(), [4, this.Credentials.set(c, "session")];
                  case 3:
                    return l = g.sent(), ae.debug("succeed to get cognito credentials", l), [3, 10];
                  case 4:
                    return f = g.sent(), ae.debug("cannot get cognito credentials", f), [3, 10];
                  case 5:
                    s.user = t, g.label = 6;
                  case 6:
                    return g.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser()];
                  case 7:
                    return d = g.sent(), t.attributes = d.attributes, [3, 9];
                  case 8:
                    return h = g.sent(), ae.debug("cannot get updated Cognito User", h), [3, 9];
                  case 9:
                    return xe("signIn", t, "A user " + t.getUsername() + " has been signed in"), a(t), [
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
          onFailure: function(c) {
            ae.debug("confirm signIn failure", c), u(c);
          }
        }, n, i);
      });
    }, e.prototype.completeNewPassword = function(t, r, n, i) {
      var o = this;
      if (n === void 0 && (n = {}), i === void 0 && (i = this._config.clientMetadata), !r)
        return this.rejectAuthError(_e.EmptyPassword);
      var s = this;
      return new Promise(function(a, u) {
        t.completeNewPasswordChallenge(r, n, {
          onSuccess: function(c) {
            return ue.__awaiter(o, void 0, void 0, function() {
              var l, f;
              return ue.__generator(this, function(d) {
                switch (d.label) {
                  case 0:
                    ae.debug(c), d.label = 1;
                  case 1:
                    return d.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                  case 2:
                    return d.sent(), [4, this.Credentials.set(c, "session")];
                  case 3:
                    return l = d.sent(), ae.debug("succeed to get cognito credentials", l), [3, 6];
                  case 4:
                    return f = d.sent(), ae.debug("cannot get cognito credentials", f), [3, 6];
                  case 5:
                    return s.user = t, xe("signIn", t, "A user " + t.getUsername() + " has been signed in"), a(t), [
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
          onFailure: function(c) {
            ae.debug("completeNewPassword failure", c), xe("completeNewPassword_failure", c, o.user + " failed to complete the new password flow"), u(c);
          },
          mfaRequired: function(c, l) {
            ae.debug("signIn MFA required"), t.challengeName = c, t.challengeParam = l, a(t);
          },
          mfaSetup: function(c, l) {
            ae.debug("signIn mfa setup", c), t.challengeName = c, t.challengeParam = l, a(t);
          },
          totpRequired: function(c, l) {
            ae.debug("signIn mfa setup", c), t.challengeName = c, t.challengeParam = l, a(t);
          }
        }, i);
      });
    }, e.prototype.sendCustomChallengeAnswer = function(t, r, n) {
      var i = this;
      return n === void 0 && (n = this._config.clientMetadata), this.userPool ? r ? new Promise(function(o, s) {
        t.sendCustomChallengeAnswer(r, i.authCallbacks(t, o, s), n);
      }) : this.rejectAuthError(_e.EmptyChallengeResponse) : this.rejectNoUserPool();
    }, e.prototype.deleteUserAttributes = function(t, r) {
      var n = this;
      return new Promise(function(i, o) {
        n.userSession(t).then(function(s) {
          t.deleteAttributes(r, function(a, u) {
            return a ? o(a) : i(u);
          });
        });
      });
    }, e.prototype.deleteUser = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r, n = this;
        return ue.__generator(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return i.sent(), [3, 3];
            case 2:
              throw t = i.sent(), ae.debug("Failed to sync cache info into memory", t), new Error(t);
            case 3:
              return r = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(o, s) {
                return ue.__awaiter(n, void 0, void 0, function() {
                  var a, u = this;
                  return ue.__generator(this, function(c) {
                    if (this.userPool)
                      if (a = this.userPool.getCurrentUser(), a)
                        a.getSession(function(l, f) {
                          return ue.__awaiter(u, void 0, void 0, function() {
                            var d, h = this;
                            return ue.__generator(this, function(g) {
                              switch (g.label) {
                                case 0:
                                  if (!l)
                                    return [3, 5];
                                  if (ae.debug("Failed to get the user session", l), !this.isSessionInvalid(l))
                                    return [3, 4];
                                  g.label = 1;
                                case 1:
                                  return g.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(a)];
                                case 2:
                                  return g.sent(), [3, 4];
                                case 3:
                                  return d = g.sent(), s(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                                    2
                                    /*return*/
                                  ];
                                case 4:
                                  return [2, s(l)];
                                case 5:
                                  a.deleteUser(function(M, m) {
                                    if (M)
                                      s(M);
                                    else {
                                      xe("userDeleted", m, "The authenticated user has been deleted."), a.signOut(), h.user = null;
                                      try {
                                        h.cleanCachedItems();
                                      } catch {
                                        ae.debug("failed to clear cached items");
                                      }
                                      r ? h.oAuthSignOutRedirect(o, s) : (xe("signOut", h.user, "A user has been signed out"), o(m));
                                    }
                                  }), g.label = 6;
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
                        return ae.debug("Failed to get user from user pool"), [2, s(new Error("No current user."))];
                    else
                      ae.debug("no Congito User pool"), s(new Error("Cognito User pool does not exist"));
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
    }, e.prototype.updateUserAttributes = function(t, r, n) {
      var i = this;
      n === void 0 && (n = this._config.clientMetadata);
      var o = [], s = this;
      return new Promise(function(a, u) {
        s.userSession(t).then(function(c) {
          for (var l in r)
            if (l !== "sub" && l.indexOf("_verified") < 0) {
              var f = {
                Name: l,
                Value: r[l]
              };
              o.push(f);
            }
          t.updateAttributes(o, function(d, h, g) {
            if (d)
              return xe("updateUserAttributes_failure", d, "Failed to update attributes"), u(d);
            var M = i.createUpdateAttributesResultList(r, g == null ? void 0 : g.CodeDeliveryDetailsList);
            return xe("updateUserAttributes", M, "Attributes successfully updated"), a(h);
          }, n);
        });
      });
    }, e.prototype.createUpdateAttributesResultList = function(t, r) {
      var n = {};
      return Object.keys(t).forEach(function(i) {
        n[i] = {
          isUpdated: !0
        };
        var o = r == null ? void 0 : r.find(function(s) {
          return s.AttributeName === i;
        });
        o && (n[i].isUpdated = !1, n[i].codeDeliveryDetails = o);
      }), n;
    }, e.prototype.userAttributes = function(t) {
      var r = this;
      return new Promise(function(n, i) {
        r.userSession(t).then(function(o) {
          t.getUserAttributes(function(s, a) {
            s ? i(s) : n(a);
          });
        });
      });
    }, e.prototype.verifiedContact = function(t) {
      var r = this;
      return this.userAttributes(t).then(function(n) {
        var i = r.attributesToObject(n), o = {}, s = {};
        return i.email && (i.email_verified ? s.email = i.email : o.email = i.email), i.phone_number && (i.phone_number_verified ? s.phone_number = i.phone_number : o.phone_number = i.phone_number), {
          verified: s,
          unverified: o
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
    }, e.prototype.isSignedInHostedUI = function() {
      return this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true";
    }, e.prototype.isSessionInvalid = function(t) {
      return this.isUserDisabledError(t) || this.isUserDoesNotExistError(t) || this.isTokenRevokedError(t) || this.isRefreshTokenRevokedError(t) || this.isRefreshTokenExpiredError(t);
    }, e.prototype.cleanUpInvalidSession = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r = this;
        return ue.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              t.signOut(), this.user = null, n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()];
            case 2:
              return n.sent(), [3, 4];
            case 3:
              return n.sent(), ae.debug("failed to clear cached items"), [3, 4];
            case 4:
              return this.isSignedInHostedUI() ? [2, new Promise(function(i, o) {
                r.oAuthSignOutRedirect(i, o);
              })] : (xe("signOut", this.user, "A user has been signed out"), [
                2
                /*return*/
              ]);
          }
        });
      });
    }, e.prototype.currentUserPoolUser = function(t) {
      var r = this;
      return this.userPool ? new Promise(function(n, i) {
        r._storageSync.then(function() {
          return ue.__awaiter(r, void 0, void 0, function() {
            var o, s, a, u, c, l, f, d = this;
            return ue.__generator(this, function(h) {
              switch (h.label) {
                case 0:
                  return this.isOAuthInProgress() ? (ae.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise(function(g) {
                    var M = setTimeout(function() {
                      ae.debug("OAuth signIn in progress timeout"), Jt.remove("auth", m), g();
                    }, hb);
                    Jt.listen("auth", m);
                    function m(w) {
                      var v = w.payload, T = v.event;
                      (T === "cognitoHostedUI" || T === "cognitoHostedUI_failure") && (ae.debug("OAuth signIn resolved: " + T), clearTimeout(M), Jt.remove("auth", m), g());
                    }
                  })]) : [3, 2];
                case 1:
                  h.sent(), h.label = 2;
                case 2:
                  if (o = this.userPool.getCurrentUser(), !o)
                    return ae.debug("Failed to get user from user pool"), i("No current user"), [
                      2
                      /*return*/
                    ];
                  h.label = 3;
                case 3:
                  return h.trys.push([3, 7, , 8]), [4, this._userSession(o)];
                case 4:
                  return s = h.sent(), a = t ? t.bypassCache : !1, a ? [4, this.Credentials.clear()] : [3, 6];
                case 5:
                  h.sent(), h.label = 6;
                case 6:
                  if (u = this._config.clientMetadata, c = s.getAccessToken().decodePayload().scope, l = c === void 0 ? "" : c, l.split(" ").includes(Sd))
                    o.getUserData(function(g, M) {
                      return ue.__awaiter(d, void 0, void 0, function() {
                        var m, w, v, T, N, E, P;
                        return ue.__generator(this, function(k) {
                          switch (k.label) {
                            case 0:
                              if (!g)
                                return [3, 7];
                              if (ae.debug("getting user data failed", g), !this.isSessionInvalid(g))
                                return [3, 5];
                              k.label = 1;
                            case 1:
                              return k.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(o)];
                            case 2:
                              return k.sent(), [3, 4];
                            case 3:
                              return m = k.sent(), i(new Error("Session is invalid due to: " + g.message + " and failed to clean up invalid session: " + m.message)), [
                                2
                                /*return*/
                              ];
                            case 4:
                              return i(g), [3, 6];
                            case 5:
                              n(o), k.label = 6;
                            case 6:
                              return [
                                2
                                /*return*/
                              ];
                            case 7:
                              for (w = M.PreferredMfaSetting || "NOMFA", v = [], T = 0; T < M.UserAttributes.length; T++)
                                N = {
                                  Name: M.UserAttributes[T].Name,
                                  Value: M.UserAttributes[T].Value
                                }, E = new un(N), v.push(E);
                              return P = this.attributesToObject(v), Object.assign(o, { attributes: P, preferredMFA: w }), [2, n(o)];
                          }
                        });
                      });
                    }, { bypassCache: a, clientMetadata: u });
                  else
                    return ae.debug("Unable to get the user data because the " + Sd + " is not in the scopes of the access token"), [2, n(o)];
                  return [3, 8];
                case 7:
                  return f = h.sent(), i(f), [3, 8];
                case 8:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(o) {
          return ae.debug("Failed to sync cache info into memory", o), i(o);
        });
      }) : this.rejectNoUserPool();
    }, e.prototype.isOAuthInProgress = function() {
      return this.oAuthFlowInProgress;
    }, e.prototype.currentAuthenticatedUser = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i, o, s;
        return ue.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              ae.debug("getting current authenticated user"), r = null, a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw n = a.sent(), ae.debug("Failed to sync cache info into memory", n), n;
            case 4:
              try {
                i = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")), i && (r = ue.__assign(ue.__assign({}, i.user), { token: i.token }));
              } catch {
                ae.debug("cannot load federated user from auth storage");
              }
              return r ? (this.user = r, ae.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
            case 5:
              ae.debug("get current authenticated userpool user"), o = null, a.label = 6;
            case 6:
              return a.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(t)];
            case 7:
              return o = a.sent(), [3, 9];
            case 8:
              return s = a.sent(), s === "No userPool" && ae.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), ae.debug("The user is not authenticated by the error", s), [2, Promise.reject("The user is not authenticated")];
            case 9:
              return this.user = o, [2, this.user];
          }
        });
      });
    }, e.prototype.currentSession = function() {
      var t = this;
      return ae.debug("Getting current session"), this.userPool ? new Promise(function(r, n) {
        t.currentUserPoolUser().then(function(i) {
          t.userSession(i).then(function(o) {
            r(o);
          }).catch(function(o) {
            ae.debug("Failed to get the current session", o), n(o);
          });
        }).catch(function(i) {
          ae.debug("Failed to get the current user", i), n(i);
        });
      }) : Promise.reject(new Error("No User Pool in the configuration."));
    }, e.prototype._userSession = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i = this;
        return ue.__generator(this, function(o) {
          switch (o.label) {
            case 0:
              if (!t)
                return ae.debug("the user is null"), [2, this.rejectAuthError(_e.NoUserSession)];
              r = this._config.clientMetadata, this.inflightSessionPromiseCounter === 0 && (this.inflightSessionPromise = new Promise(function(s, a) {
                t.getSession(function(u, c) {
                  return ue.__awaiter(i, void 0, void 0, function() {
                    var l;
                    return ue.__generator(this, function(f) {
                      switch (f.label) {
                        case 0:
                          if (!u)
                            return [3, 5];
                          if (ae.debug("Failed to get the session from user", t), !this.isSessionInvalid(u))
                            return [3, 4];
                          f.label = 1;
                        case 1:
                          return f.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                        case 2:
                          return f.sent(), [3, 4];
                        case 3:
                          return l = f.sent(), a(new Error("Session is invalid due to: " + u.message + " and failed to clean up invalid session: " + l.message)), [
                            2
                            /*return*/
                          ];
                        case 4:
                          return a(u), [
                            2
                            /*return*/
                          ];
                        case 5:
                          return ae.debug("Succeed to get the user session", c), s(c), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, { clientMetadata: r });
              })), this.inflightSessionPromiseCounter++, o.label = 1;
            case 1:
              return o.trys.push([1, , 3, 4]), [4, this.inflightSessionPromise];
            case 2:
              return n = o.sent(), t.signInUserSession = n, [2, n];
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
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r, n = this;
        return ue.__generator(this, function(i) {
          switch (i.label) {
            case 0:
              ae.debug("Getting current user credentials"), i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return i.sent(), [3, 4];
            case 3:
              throw t = i.sent(), ae.debug("Failed to sync cache info into memory", t), t;
            case 4:
              r = null;
              try {
                r = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
              } catch (o) {
                ae.debug("failed to get or parse item aws-amplify-federatedInfo", o);
              }
              return r ? [2, this.Credentials.refreshFederatedToken(r)] : [2, this.currentSession().then(function(o) {
                return ae.debug("getting session success", o), n.Credentials.set(o, "session");
              }).catch(function() {
                return ae.debug("getting guest credentials"), n.Credentials.set(null, "guest");
              })];
          }
        });
      });
    }, e.prototype.currentCredentials = function() {
      return ae.debug("getting current credentials"), this.Credentials.get();
    }, e.prototype.verifyUserAttribute = function(t, r, n) {
      return n === void 0 && (n = this._config.clientMetadata), new Promise(function(i, o) {
        t.getAttributeVerificationCode(r, {
          onSuccess: function(s) {
            return i(s);
          },
          onFailure: function(s) {
            return o(s);
          }
        }, n);
      });
    }, e.prototype.verifyUserAttributeSubmit = function(t, r, n) {
      return n ? new Promise(function(i, o) {
        t.verifyAttribute(r, n, {
          onSuccess: function(s) {
            i(s);
          },
          onFailure: function(s) {
            o(s);
          }
        });
      }) : this.rejectAuthError(_e.EmptyCode);
    }, e.prototype.verifyCurrentUserAttribute = function(t) {
      var r = this;
      return r.currentUserPoolUser().then(function(n) {
        return r.verifyUserAttribute(n, t);
      });
    }, e.prototype.verifyCurrentUserAttributeSubmit = function(t, r) {
      var n = this;
      return n.currentUserPoolUser().then(function(i) {
        return n.verifyUserAttributeSubmit(i, t, r);
      });
    }, e.prototype.cognitoIdentitySignOut = function(t, r) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, i, o = this;
        return ue.__generator(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return s.sent(), [3, 3];
            case 2:
              throw n = s.sent(), ae.debug("Failed to sync cache info into memory", n), n;
            case 3:
              return i = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(a, u) {
                if (t && t.global) {
                  ae.debug("user global sign out", r);
                  var c = o._config.clientMetadata;
                  r.getSession(function(l, f) {
                    return ue.__awaiter(o, void 0, void 0, function() {
                      var d, h = this;
                      return ue.__generator(this, function(g) {
                        switch (g.label) {
                          case 0:
                            if (!l)
                              return [3, 5];
                            if (ae.debug("failed to get the user session", l), !this.isSessionInvalid(l))
                              return [3, 4];
                            g.label = 1;
                          case 1:
                            return g.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(r)];
                          case 2:
                            return g.sent(), [3, 4];
                          case 3:
                            return d = g.sent(), u(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, u(l)];
                          case 5:
                            return r.globalSignOut({
                              onSuccess: function(M) {
                                if (ae.debug("global sign out success"), i)
                                  h.oAuthSignOutRedirect(a, u);
                                else
                                  return a();
                              },
                              onFailure: function(M) {
                                return ae.debug("global sign out failed", M), u(M);
                              }
                            }), [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  }, { clientMetadata: c });
                } else
                  ae.debug("user sign out", r), r.signOut(function() {
                    if (i)
                      o.oAuthSignOutRedirect(a, u);
                    else
                      return a();
                  });
              })];
          }
        });
      });
    }, e.prototype.oAuthSignOutRedirect = function(t, r) {
      var n = sr().isBrowser;
      n ? this.oAuthSignOutRedirectOrReject(r) : this.oAuthSignOutAndResolve(t);
    }, e.prototype.oAuthSignOutAndResolve = function(t) {
      this._oAuthHandler.signOut(), t();
    }, e.prototype.oAuthSignOutRedirectOrReject = function(t) {
      this._oAuthHandler.signOut(), setTimeout(function() {
        return t(Error("Signout timeout fail"));
      }, 3e3);
    }, e.prototype.signOut = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r;
        return ue.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
            case 1:
              return n.sent(), [3, 3];
            case 2:
              return n.sent(), ae.debug("failed to clear cached items"), [3, 3];
            case 3:
              return this.userPool ? (r = this.userPool.getCurrentUser(), r ? [4, this.cognitoIdentitySignOut(t, r)] : [3, 5]) : [3, 7];
            case 4:
              return n.sent(), [3, 6];
            case 5:
              ae.debug("no current Cognito user"), n.label = 6;
            case 6:
              return [3, 8];
            case 7:
              ae.debug("no Cognito User pool"), n.label = 8;
            case 8:
              return xe("signOut", this.user, "A user has been signed out"), this.user = null, [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.cleanCachedItems = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        return ue.__generator(this, function(t) {
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
    }, e.prototype.changePassword = function(t, r, n, i) {
      var o = this;
      return i === void 0 && (i = this._config.clientMetadata), new Promise(function(s, a) {
        o.userSession(t).then(function(u) {
          t.changePassword(r, n, function(c, l) {
            return c ? (ae.debug("change password failure", c), a(c)) : s(l);
          }, i);
        });
      });
    }, e.prototype.forgotPassword = function(t, r) {
      if (r === void 0 && (r = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(_e.EmptyUsername);
      var n = this.createCognitoUser(t);
      return new Promise(function(i, o) {
        n.forgotPassword({
          onSuccess: function() {
            i();
          },
          onFailure: function(s) {
            ae.debug("forgot password failure", s), xe("forgotPassword_failure", s, t + " forgotPassword failed"), o(s);
          },
          inputVerificationCode: function(s) {
            xe("forgotPassword", n, t + " has initiated forgot password flow"), i(s);
          }
        }, r);
      });
    }, e.prototype.forgotPasswordSubmit = function(t, r, n, i) {
      if (i === void 0 && (i = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(_e.EmptyUsername);
      if (!r)
        return this.rejectAuthError(_e.EmptyCode);
      if (!n)
        return this.rejectAuthError(_e.EmptyPassword);
      var o = this.createCognitoUser(t);
      return new Promise(function(s, a) {
        o.confirmPassword(r, n, {
          onSuccess: function(u) {
            xe("forgotPasswordSubmit", o, t + " forgotPasswordSubmit successful"), s(u);
          },
          onFailure: function(u) {
            xe("forgotPasswordSubmit_failure", u, t + " forgotPasswordSubmit failed"), a(u);
          }
        }, i);
      });
    }, e.prototype.currentUserInfo = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, u, r, n, i, o, s, a, u;
        return ue.__generator(this, function(c) {
          switch (c.label) {
            case 0:
              return t = this.Credentials.getCredSource(), !t || t === "aws" || t === "userPool" ? [4, this.currentUserPoolUser().catch(function(l) {
                return ae.error(l);
              })] : [3, 9];
            case 1:
              if (u = c.sent(), !u)
                return [2, null];
              c.label = 2;
            case 2:
              return c.trys.push([2, 8, , 9]), [4, this.userAttributes(u)];
            case 3:
              r = c.sent(), n = this.attributesToObject(r), i = null, c.label = 4;
            case 4:
              return c.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
            case 5:
              return i = c.sent(), [3, 7];
            case 6:
              return o = c.sent(), ae.debug("Failed to retrieve credentials while getting current user info", o), [3, 7];
            case 7:
              return s = {
                id: i ? i.identityId : void 0,
                username: u.getUsername(),
                attributes: n
              }, [2, s];
            case 8:
              return a = c.sent(), ae.error("currentUserInfo error", a), [2, {}];
            case 9:
              return t === "federated" ? (u = this.user, [2, u || {}]) : [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.federatedSignIn = function(t, r, n) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var i, u, o, s, a, u, c, l, f, d, h, g;
        return ue.__generator(this, function(M) {
          switch (M.label) {
            case 0:
              if (!this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation requires either a User Pool or Identity Pool in config");
              if (typeof t > "u" && this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
              return As(t) || SI(t) || bI(t) || typeof t > "u" ? (i = t || {
                provider: lo.Cognito
              }, u = As(i) ? i.provider : i.customProvider, o = (As(i), i.customState), this._config.userPoolId && (s = Rr(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, a = Rr(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, a, s, u, o)), [3, 4]) : [3, 1];
            case 1:
              u = t;
              try {
                c = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user), c && ae.warn("There is already a signed in user: " + c + ` in your app.
																	You should not call Auth.federatedSignIn method again as it may cause unexpected behavior.`);
              } catch {
              }
              return l = r.token, f = r.identity_id, d = r.expires_at, [4, this.Credentials.set({ provider: u, token: l, identity_id: f, user: n, expires_at: d }, "federation")];
            case 2:
              return h = M.sent(), [4, this.currentAuthenticatedUser()];
            case 3:
              return g = M.sent(), xe("signIn", g, "A user " + g.username + " has been signed in"), ae.debug("federated sign in credentials", h), [2, h];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._handleAuthResponse = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, n, i, o, s, a, u, c, l, f, d, h, g, M;
        return ue.__generator(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.oAuthFlowInProgress)
                return ae.debug("Skipping URL " + t + " current flow in progress"), [
                  2
                  /*return*/
                ];
              m.label = 1;
            case 1:
              if (m.trys.push([1, , 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId)
                throw new Error("OAuth responses require a User Pool defined in config");
              if (xe("parsingCallbackUrl", { url: t }, "The callback url is being parsed"), r = t || (sr().isBrowser ? window.location.href : ""), n = !!(gr(r).query || "").split("&").map(function(w) {
                return w.split("=");
              }).find(function(w) {
                var v = ue.__read(w, 1), T = v[0];
                return T === "code" || T === "error";
              }), i = !!(gr(r).hash || "#").substr(1).split("&").map(function(w) {
                return w.split("=");
              }).find(function(w) {
                var v = ue.__read(w, 1), T = v[0];
                return T === "access_token" || T === "error";
              }), !(n || i))
                return [3, 7];
              this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), m.label = 2;
            case 2:
              return m.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(r)];
            case 3:
              return o = m.sent(), s = o.accessToken, a = o.idToken, u = o.refreshToken, c = o.state, l = new Ka({
                IdToken: new Wa({ IdToken: a }),
                RefreshToken: new Ha({
                  RefreshToken: u
                }),
                AccessToken: new $a({
                  AccessToken: s
                })
              }), f = void 0, this._config.identityPoolId ? [4, this.Credentials.set(l, "session")] : [3, 5];
            case 4:
              f = m.sent(), ae.debug("AWS credentials", f), m.label = 5;
            case 5:
              return d = /-/.test(c), h = this.createCognitoUser(l.getIdToken().decodePayload()["cognito:username"]), h.setSignInUserSession(l), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), xe("signIn", h, "A user " + h.getUsername() + " has been signed in"), xe("cognitoHostedUI", h, "A user " + h.getUsername() + " has been signed in via Cognito Hosted UI"), d && (g = c.split("-").splice(1).join("-"), xe("customOAuthState", DE(g), "State for user " + h.getUsername())), [2, f];
            case 6:
              return M = m.sent(), ae.debug("Error in cognito hosted auth response", M), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), xe("signIn_failure", M, "The OAuth response flow failed"), xe("cognitoHostedUI_failure", M, "A failure occurred when returning to the Cognito Hosted UI"), xe("customState_failure", M, "A failure occurred when returning state"), [3, 7];
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
      var r = this, n = {};
      return t && t.map(function(i) {
        i.Name === "email_verified" || i.Name === "phone_number_verified" ? n[i.Name] = r.isTruthyString(i.Value) || i.Value === !0 : n[i.Name] = i.Value;
      }), n;
    }, e.prototype.isTruthyString = function(t) {
      return typeof t.toLowerCase == "function" && t.toLowerCase() === "true";
    }, e.prototype.createCognitoUser = function(t) {
      var r = {
        Username: t,
        Pool: this.userPool
      };
      r.Storage = this._storage;
      var n = this._config.authenticationFlowType, i = new Ga(r);
      return n && i.setAuthenticationFlowType(n), i;
    }, e.prototype._isValidAuthStorage = function(t) {
      return !!t && typeof t.getItem == "function" && typeof t.setItem == "function" && typeof t.removeItem == "function" && typeof t.clear == "function";
    }, e.prototype.noUserPoolErrorHandler = function(t) {
      return t && (!t.userPoolId || !t.identityPoolId) ? _e.MissingAuthConfig : _e.NoConfig;
    }, e.prototype.rejectAuthError = function(t) {
      return Promise.reject(new dr(t));
    }, e.prototype.rejectNoUserPool = function() {
      var t = this.noUserPoolErrorHandler(this._config);
      return Promise.reject(new db(t));
    }, e.prototype.rememberDevice = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r;
        return ue.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = n.sent(), [3, 3];
            case 2:
              return r = n.sent(), ae.debug("The user is not authenticated by the error", r), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                t.setDeviceStatusRemembered({
                  onSuccess: function(s) {
                    i(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? o(new dr(_e.DeviceConfig)) : s.code === "NetworkError" ? o(new dr(_e.NetworkError)) : o(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.forgetDevice = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r;
        return ue.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = n.sent(), [3, 3];
            case 2:
              return r = n.sent(), ae.debug("The user is not authenticated by the error", r), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                t.forgetDevice({
                  onSuccess: function(s) {
                    i(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? o(new dr(_e.DeviceConfig)) : s.code === "NetworkError" ? o(new dr(_e.NetworkError)) : o(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.fetchDevices = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, r;
        return ue.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = n.sent(), [3, 3];
            case 2:
              throw r = n.sent(), ae.debug("The user is not authenticated by the error", r), new Error("The user is not authenticated");
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                var s = {
                  onSuccess: function(a) {
                    var u = a.Devices.map(function(c) {
                      var l = c.DeviceAttributes.find(function(d) {
                        var h = d.Name;
                        return h === "device_name";
                      }) || {}, f = {
                        id: c.DeviceKey,
                        name: l.Value
                      };
                      return f;
                    });
                    i(u);
                  },
                  onFailure: function(a) {
                    a.code === "InvalidParameterException" ? o(new dr(_e.DeviceConfig)) : a.code === "NetworkError" ? o(new dr(_e.NetworkError)) : o(a);
                  }
                };
                t.listDevices(Mb, null, s);
              })];
          }
        });
      });
    }, e;
  }()
), Tr = new mb(null);
Uu.register(Tr);
var dp = {}, Vs = {}, bd;
function vb() {
  return bd || (bd = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), function(s) {
      s.Cognito = "COGNITO", s.Google = "Google", s.Facebook = "Facebook", s.Amazon = "LoginWithAmazon", s.Apple = "SignInWithApple";
    }(e.CognitoHostedUIIdentityProvider || (e.CognitoHostedUIIdentityProvider = {}));
    function t(s) {
      var a = ["provider"];
      return s && !!a.find(function(u) {
        return s.hasOwnProperty(u);
      });
    }
    e.isFederatedSignInOptions = t;
    function r(s) {
      var a = ["customProvider"];
      return s && !!a.find(function(u) {
        return s.hasOwnProperty(u);
      });
    }
    e.isFederatedSignInOptionsCustom = r;
    function n(s) {
      var a = ["customState"];
      return s && !!a.find(function(u) {
        return s.hasOwnProperty(u);
      });
    }
    e.hasCustomState = n;
    function i(s) {
      return s.redirectSignIn !== void 0;
    }
    e.isCognitoHostedOpts = i, function(s) {
      s.NoConfig = "noConfig", s.MissingAuthConfig = "missingAuthConfig", s.EmptyUsername = "emptyUsername", s.InvalidUsername = "invalidUsername", s.EmptyPassword = "emptyPassword", s.EmptyCode = "emptyCode", s.SignUpError = "signUpError", s.NoMFA = "noMFA", s.InvalidMFA = "invalidMFA", s.EmptyChallengeResponse = "emptyChallengeResponse", s.NoUserSession = "noUserSession", s.Default = "default", s.DeviceConfig = "deviceConfig", s.NetworkError = "networkError", s.AutoSignInError = "autoSignInError";
    }(e.AuthErrorTypes || (e.AuthErrorTypes = {}));
    function o(s) {
      return !!s.username;
    }
    e.isUsernamePasswordOpts = o, function(s) {
      s.API_KEY = "API_KEY", s.AWS_IAM = "AWS_IAM", s.OPENID_CONNECT = "OPENID_CONNECT", s.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", s.AWS_LAMBDA = "AWS_LAMBDA";
    }(e.GRAPHQL_AUTH_MODE || (e.GRAPHQL_AUTH_MODE = {}));
  }(Vs)), Vs;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(vb(), e);
})(dp);
const $C = () => {
  const e = window.location.protocol + "//" + window.location.host + "/verify", t = window.location.protocol + "//" + window.location.host + "/", r = {
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
        redirectSignIn: e,
        redirectSignOut: t,
        responseType: "code"
        // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    }
  };
  Tr.configure(r);
}, VC = async () => {
  try {
    const e = await Tr.currentSession();
    if (e)
      return e.getIdToken().getJwtToken();
  } catch {
    return "";
  }
}, WC = async () => {
  try {
    const e = await Tr.currentSession();
    if (e)
      return e.getAccessToken().getJwtToken();
  } catch {
    return "";
  }
}, HC = async () => {
  try {
    const e = await Tr.currentSession();
    if (e)
      return e.getRefreshToken().getToken();
  } catch {
    return "";
  }
}, qC = async () => {
  try {
    const e = await Tr.currentUserInfo();
    if (e && e.attributes)
      return {
        id: e.attributes.sub,
        name: e.attributes.preferred_username,
        picture: e.attributes.picture
      };
  } catch {
    return null;
  }
}, wb = () => {
  try {
    Tr.federatedSignIn({
      provider: dp.CognitoHostedUIIdentityProvider.Google,
      customState: window.location.pathname + window.location.search
    });
  } catch (e) {
    console.log(e);
  }
}, KC = () => {
  Tr.signOut();
};
var Db = Object.defineProperty, Ab = (e, t, r) => t in e ? Db(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ws = (e, t, r) => (Ab(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ib = class {
  constructor() {
    Ws(this, "current", this.detect()), Ws(this, "handoffState", "pending"), Ws(this, "currentId", 0);
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
}, rr = new Ib(), jr = (e, t) => {
  rr.isServer ? ot(e, t) : Bd(e, t);
};
function es(e) {
  let t = et(e);
  return jr(() => {
    t.current = e;
  }, [e]), t;
}
function Ei(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ju() {
  let e = [], t = { addEventListener(r, n, i, o) {
    return r.addEventListener(n, i, o), t.add(() => r.removeEventListener(n, i, o));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return Ei(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let o = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: o });
    });
  }, group(r) {
    let n = Ju();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let i of e.splice(n, 1))
          i();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function Eb() {
  let [e] = Vr(Ju);
  return ot(() => () => e.dispose(), [e]), e;
}
let Ot = function(e) {
  let t = es(e);
  return Ne.useCallback((...r) => t.current(...r), [t]);
};
function ts() {
  let [e, t] = Vr(rr.isHandoffComplete);
  return e && rr.isHandoffComplete === !1 && t(!1), ot(() => {
    e !== !0 && t(!0);
  }, [e]), ot(() => rr.handoff(), []), e;
}
var xd;
let bn = (xd = Ne.useId) != null ? xd : function() {
  let e = ts(), [t, r] = Ne.useState(e ? () => rr.nextId() : null);
  return jr(() => {
    t === null && r(rr.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function Ir(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Ir), n;
}
function gp(e) {
  return rr.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Xa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var zr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(zr || {}), hp = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(hp || {}), Nb = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Nb || {});
function Tb(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Xa)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var pp = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(pp || {});
function jb(e, t = 0) {
  var r;
  return e === ((r = gp(e)) == null ? void 0 : r.body) ? !1 : Ir(t, { [0]() {
    return e.matches(Xa);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Xa))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var Sb = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Sb || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Qr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let bb = ["textarea", "input"].join(",");
function xb(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, bb)) != null ? r : !1;
}
function Cb(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Xi(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? r ? Cb(e) : e : Tb(e);
  i.length > 0 && s.length > 1 && (s = s.filter((h) => !i.includes(h))), n = n ?? o.activeElement;
  let a = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, l = 0, f = s.length, d;
  do {
    if (l >= f || l + f <= 0)
      return 0;
    let h = u + l;
    if (t & 16)
      h = (h + f) % f;
    else {
      if (h < 0)
        return 3;
      if (h >= f)
        return 1;
    }
    d = s[h], d == null || d.focus(c), l += a;
  } while (d !== o.activeElement);
  return t & 6 && xb(d) && d.select(), 2;
}
function Hs(e, t, r) {
  let n = es(t);
  ot(() => {
    function i(o) {
      n.current(o);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [e, r]);
}
function Ob(e, t, r = !0) {
  let n = et(!1);
  ot(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function i(s, a) {
    if (!n.current || s.defaultPrevented)
      return;
    let u = function l(f) {
      return typeof f == "function" ? l(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e), c = a(s);
    if (c !== null && c.getRootNode().contains(c)) {
      for (let l of u) {
        if (l === null)
          continue;
        let f = l instanceof HTMLElement ? l : l.current;
        if (f != null && f.contains(c) || s.composed && s.composedPath().includes(f))
          return;
      }
      return !jb(c, pp.Loose) && c.tabIndex !== -1 && s.preventDefault(), t(s, c);
    }
  }
  let o = et(null);
  Hs("mousedown", (s) => {
    var a, u;
    n.current && (o.current = ((u = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), Hs("click", (s) => {
    o.current && (i(s, () => o.current), o.current = null);
  }, !0), Hs("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
let Mp = Symbol();
function Lb(e, t = !0) {
  return Object.assign(e, { [Mp]: t });
}
function lr(...e) {
  let t = et(e);
  ot(() => {
    t.current = e;
  }, [e]);
  let r = Ot((n) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Mp])) ? void 0 : r;
}
function Cd(...e) {
  return e.filter(Boolean).join(" ");
}
var eu = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(eu || {}), _b = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_b || {});
function Wt({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: o = !0, name: s }) {
  let a = yp(t, e);
  if (o)
    return Bi(a, r, n, s);
  let u = i ?? 0;
  if (u & 2) {
    let { static: c = !1, ...l } = a;
    if (c)
      return Bi(l, r, n, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...l } = a;
    return Ir(c ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return Bi({ ...l, hidden: !0, style: { display: "none" } }, r, n, s);
    } });
  }
  return Bi(a, r, n, s);
}
function Bi(e, t = {}, r, n) {
  let { as: i = r, children: o, refName: s = "ref", ...a } = qs(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
  let l = {};
  if (t) {
    let f = !1, d = [];
    for (let [h, g] of Object.entries(t))
      typeof g == "boolean" && (f = !0), g === !0 && d.push(h);
    f && (l["data-headlessui-state"] = d.join(" "));
  }
  if (i === mr && Object.keys(Od(a)).length > 0) {
    if (!qn(c) || Array.isArray(c) && c.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
    let f = c.props, d = typeof (f == null ? void 0 : f.className) == "function" ? (...g) => Cd(f == null ? void 0 : f.className(...g), a.className) : Cd(f == null ? void 0 : f.className, a.className), h = d ? { className: d } : {};
    return Kn(c, Object.assign({}, yp(c.props, Od(qs(a, ["ref"]))), l, u, kb(c.ref, u.ref), h));
  }
  return mt(i, Object.assign({}, qs(a, ["ref"]), i !== mr && u, i !== mr && l), c);
}
function kb(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  } };
}
function yp(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...o) {
      let s = r[n];
      for (let a of s) {
        if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented)
          return;
        a(i, ...o);
      }
    } });
  return t;
}
function Ht(e) {
  var t;
  return Object.assign(wo(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Od(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function qs(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function zb(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && Pb(r) ? !1 : n;
}
function Pb(e) {
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
let Rb = "div";
var Mo = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Mo || {});
function Ub(e, t) {
  let { features: r = 1, ...n } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Wt({ ourProps: i, theirProps: n, slot: {}, defaultTag: Rb, name: "Hidden" });
}
let tu = Ht(Ub), mp = ar(null);
mp.displayName = "OpenClosedContext";
var Wn = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Wn || {});
function Yb() {
  return dt(mp);
}
var vp = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(vp || {});
function Zu(e, t) {
  let r = et([]), n = Ot(e);
  ot(() => {
    let i = [...r.current];
    for (let [o, s] of t.entries())
      if (r.current[o] !== s) {
        let a = n(t, i);
        return r.current = t, a;
      }
  }, [n, ...t]);
}
function Fb() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Qb(e, t, r) {
  let n = es(t);
  ot(() => {
    function i(o) {
      n.current(o);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [e, r]);
}
var Hn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Hn || {});
function Bb() {
  let e = et(0);
  return Qb("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function wp() {
  let e = et(!1);
  return jr(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function rs(...e) {
  return ir(() => gp(...e), [...e]);
}
function Dp(e, t, r, n) {
  let i = es(r);
  ot(() => {
    e = e ?? window;
    function o(s) {
      i.current(s);
    }
    return e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n);
  }, [e, t, n]);
}
function $b(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Ap(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.current)
    r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let Vb = "div";
var Ip = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ip || {});
function Wb(e, t) {
  let r = et(null), n = lr(r, t), { initialFocus: i, containers: o, features: s = 30, ...a } = e;
  ts() || (s = 1);
  let u = rs(r);
  Kb({ ownerDocument: u }, !!(s & 16));
  let c = Gb({ ownerDocument: u, container: r, initialFocus: i }, !!(s & 2));
  Jb({ ownerDocument: u, container: r, containers: o, previousActiveElement: c }, !!(s & 8));
  let l = Bb(), f = Ot((M) => {
    let m = r.current;
    m && ((w) => w())(() => {
      Ir(l.current, { [Hn.Forwards]: () => {
        Xi(m, zr.First, { skipElements: [M.relatedTarget] });
      }, [Hn.Backwards]: () => {
        Xi(m, zr.Last, { skipElements: [M.relatedTarget] });
      } });
    });
  }), d = Eb(), h = et(!1), g = { ref: n, onKeyDown(M) {
    M.key == "Tab" && (h.current = !0, d.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(M) {
    let m = Ap(o);
    r.current instanceof HTMLElement && m.add(r.current);
    let w = M.relatedTarget;
    w instanceof HTMLElement && w.dataset.headlessuiFocusGuard !== "true" && (Ep(m, w) || (h.current ? Xi(r.current, Ir(l.current, { [Hn.Forwards]: () => zr.Next, [Hn.Backwards]: () => zr.Previous }) | zr.WrapAround, { relativeTo: M.target }) : M.target instanceof HTMLElement && Qr(M.target)));
  } };
  return Ne.createElement(Ne.Fragment, null, !!(s & 4) && Ne.createElement(tu, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Mo.Focusable }), Wt({ ourProps: g, theirProps: a, defaultTag: Vb, name: "FocusTrap" }), !!(s & 4) && Ne.createElement(tu, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Mo.Focusable }));
}
let Hb = Ht(Wb), Yn = Object.assign(Hb, { features: Ip }), Mr = [];
$b(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Mr[0] !== t.target && (Mr.unshift(t.target), Mr = Mr.filter((r) => r != null && r.isConnected), Mr.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function qb(e = !0) {
  let t = et(Mr.slice());
  return Zu(([r], [n]) => {
    n === !0 && r === !1 && Ei(() => {
      t.current.splice(0);
    }), n === !1 && r === !0 && (t.current = Mr.slice());
  }, [e, Mr, t]), Ot(() => {
    var r;
    return (r = t.current.find((n) => n != null && n.isConnected)) != null ? r : null;
  });
}
function Kb({ ownerDocument: e }, t) {
  let r = qb(t);
  Zu(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Qr(r());
  }, [t]);
  let n = et(!1);
  ot(() => (n.current = !1, () => {
    n.current = !0, Ei(() => {
      n.current && Qr(r());
    });
  }), []);
}
function Gb({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = et(null), o = wp();
  return Zu(() => {
    if (!n)
      return;
    let s = t.current;
    s && Ei(() => {
      if (!o.current)
        return;
      let a = e == null ? void 0 : e.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === a) {
          i.current = a;
          return;
        }
      } else if (s.contains(a)) {
        i.current = a;
        return;
      }
      r != null && r.current ? Qr(r.current) : Xi(s, zr.First) === hp.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n]), i;
}
function Jb({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  let o = wp();
  Dp(e == null ? void 0 : e.defaultView, "focus", (s) => {
    if (!i || !o.current)
      return;
    let a = Ap(r);
    t.current instanceof HTMLElement && a.add(t.current);
    let u = n.current;
    if (!u)
      return;
    let c = s.target;
    c && c instanceof HTMLElement ? Ep(a, c) ? (n.current = c, Qr(c)) : (s.preventDefault(), s.stopPropagation(), Qr(u)) : Qr(n.current);
  }, !0);
}
function Ep(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let Np = ar(!1);
function Zb() {
  return dt(Np);
}
function ru(e) {
  return Ne.createElement(Np.Provider, { value: e.force }, e.children);
}
function Xb(e) {
  let t = Zb(), r = dt(Tp), n = rs(e), [i, o] = Vr(() => {
    if (!t && r !== null || rr.isServer)
      return null;
    let s = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (n === null)
      return null;
    let a = n.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(a);
  });
  return ot(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), ot(() => {
    t || r !== null && o(r.current);
  }, [r, o, t]), i;
}
let ex = mr;
function tx(e, t) {
  let r = e, n = et(null), i = lr(Lb((l) => {
    n.current = l;
  }), t), o = rs(n), s = Xb(n), [a] = Vr(() => {
    var l;
    return rr.isServer ? null : (l = o == null ? void 0 : o.createElement("div")) != null ? l : null;
  }), u = ts(), c = et(!1);
  return jr(() => {
    if (c.current = !1, !(!s || !a))
      return s.contains(a) || (a.setAttribute("data-headlessui-portal", ""), s.appendChild(a)), () => {
        c.current = !0, Ei(() => {
          var l;
          c.current && (!s || !a || (a instanceof Node && s.contains(a) && s.removeChild(a), s.childNodes.length <= 0 && ((l = s.parentElement) == null || l.removeChild(s))));
        });
      };
  }, [s, a]), u ? !s || !a ? null : tM(Wt({ ourProps: { ref: i }, theirProps: r, defaultTag: ex, name: "Portal" }), a) : null;
}
let rx = mr, Tp = ar(null);
function nx(e, t) {
  let { target: r, ...n } = e, i = { ref: lr(t) };
  return Ne.createElement(Tp.Provider, { value: r }, Wt({ ourProps: i, theirProps: n, defaultTag: rx, name: "Popover.Group" }));
}
let ix = Ht(tx), ox = Ht(nx), nu = Object.assign(ix, { Group: ox }), jp = ar(null);
function Sp() {
  let e = dt(jp);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Sp), t;
  }
  return e;
}
function sx() {
  let [e, t] = Vr([]);
  return [e.length > 0 ? e.join(" ") : void 0, ir(() => function(r) {
    let n = Ot((o) => (t((s) => [...s, o]), () => t((s) => {
      let a = s.slice(), u = a.indexOf(o);
      return u !== -1 && a.splice(u, 1), a;
    }))), i = ir(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return Ne.createElement(jp.Provider, { value: i }, r.children);
  }, [t])];
}
let ax = "p";
function ux(e, t) {
  let r = bn(), { id: n = `headlessui-description-${r}`, ...i } = e, o = Sp(), s = lr(t);
  jr(() => o.register(n), [n, o.register]);
  let a = { ref: s, ...o.props, id: n };
  return Wt({ ourProps: a, theirProps: i, slot: o.slot || {}, defaultTag: ax, name: o.name || "Description" });
}
let cx = Ht(ux), lx = Object.assign(cx, {}), Xu = ar(() => {
});
Xu.displayName = "StackContext";
var iu = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(iu || {});
function fx() {
  return dt(Xu);
}
function dx({ children: e, onUpdate: t, type: r, element: n, enabled: i }) {
  let o = fx(), s = Ot((...a) => {
    t == null || t(...a), o(...a);
  });
  return jr(() => {
    let a = i === void 0 || i === !0;
    return a && s(0, r, n), () => {
      a && s(1, r, n);
    };
  }, [s, r, n, i]), Ne.createElement(Xu.Provider, { value: s }, e);
}
function gx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const hx = typeof Object.is == "function" ? Object.is : gx, { useState: px, useEffect: Mx, useLayoutEffect: yx, useDebugValue: mx } = ee;
function vx(e, t, r) {
  const n = t(), [{ inst: i }, o] = px({ inst: { value: n, getSnapshot: t } });
  return yx(() => {
    i.value = n, i.getSnapshot = t, Ks(i) && o({ inst: i });
  }, [e, n, t]), Mx(() => (Ks(i) && o({ inst: i }), e(() => {
    Ks(i) && o({ inst: i });
  })), [e]), mx(n), n;
}
function Ks(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !hx(r, n);
  } catch {
    return !0;
  }
}
function wx(e, t, r) {
  return t();
}
const Dx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ax = !Dx, Ix = Ax ? wx : vx, Ex = "useSyncExternalStore" in ee ? ((e) => e.useSyncExternalStore)(ee) : Ix;
function Nx(e) {
  return Ex(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Tx(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...o) {
    let s = t[i].call(r, ...o);
    s && (r = s, n.forEach((a) => a()));
  } };
}
function jx() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, o = e - i;
    r.style(n, "paddingRight", `${o}px`);
  } };
}
function Sx() {
  if (!Fb())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(s) {
      return n.containers.flatMap((a) => a()).some((a) => a.contains(s));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    r.addEventListener(t, "click", (s) => {
      if (s.target instanceof HTMLElement)
        try {
          let a = s.target.closest("a");
          if (!a)
            return;
          let { hash: u } = new URL(a.href), c = t.querySelector(u);
          c && !i(c) && (o = c);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (s) => {
      s.target instanceof HTMLElement && !i(s.target) && s.preventDefault();
    }, { passive: !1 }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
    });
  } };
}
function bx() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function xx(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let Fr = Tx(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Ju(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: xx(r) }, i = [Sx(), jx(), bx()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(n)), i.forEach(({ after: o }) => o == null ? void 0 : o(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Fr.subscribe(() => {
  let e = Fr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Fr.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Fr.dispatch("TEARDOWN", r);
  }
});
function Cx(e, t, r) {
  let n = Nx(Fr), i = e ? n.get(e) : void 0, o = i ? i.count > 0 : !1;
  return jr(() => {
    if (!(!e || !t))
      return Fr.dispatch("PUSH", e, r), () => Fr.dispatch("POP", e, r);
  }, [t, e]), o;
}
let Gs = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map();
function Ld(e, t = !0) {
  jr(() => {
    var r;
    if (!t)
      return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n)
      return;
    function i() {
      var s;
      if (!n)
        return;
      let a = (s = Fn.get(n)) != null ? s : 1;
      if (a === 1 ? Fn.delete(n) : Fn.set(n, a - 1), a !== 1)
        return;
      let u = Gs.get(n);
      u && (u["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", u["aria-hidden"]), n.inert = u.inert, Gs.delete(n));
    }
    let o = (r = Fn.get(n)) != null ? r : 0;
    return Fn.set(n, o + 1), o !== 0 || (Gs.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0), i;
  }, [e, t]);
}
var Ox = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ox || {}), Lx = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Lx || {});
let _x = { [0](e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, yo = ar(null);
yo.displayName = "DialogContext";
function Ni(e) {
  let t = dt(yo);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ni), r;
  }
  return t;
}
function kx(e, t, r = () => [document.body]) {
  Cx(e, t, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function zx(e, t) {
  return Ir(t.type, _x, e, t);
}
let Px = "div", Rx = eu.RenderStrategy | eu.Static;
function Ux(e, t) {
  let r = bn(), { id: n = `headlessui-dialog-${r}`, open: i, onClose: o, initialFocus: s, __demoMode: a = !1, ...u } = e, [c, l] = Vr(0), f = Yb();
  i === void 0 && f !== null && (i = (f & Wn.Open) === Wn.Open);
  let d = et(null), h = lr(d, t), g = et(null), M = rs(d), m = e.hasOwnProperty("open") || f !== null, w = e.hasOwnProperty("onClose");
  if (!m && !w)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!m)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!w)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof o != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
  let v = i ? 0 : 1, [T, N] = Zp(zx, { titleId: null, descriptionId: null, panelRef: Xp() }), E = Ot(() => o(!1)), P = Ot((J) => N({ type: 0, id: J })), k = ts() ? a ? !1 : v === 0 : !1, B = c > 1, F = dt(yo) !== null, S = B ? "parent" : "leaf", L = f !== null ? (f & Wn.Closing) === Wn.Closing : !1, R = (() => F || L ? !1 : k)(), x = lc(() => {
    var J, C;
    return (C = Array.from((J = M == null ? void 0 : M.querySelectorAll("body > *")) != null ? J : []).find((te) => te.id === "headlessui-portal-root" ? !1 : te.contains(g.current) && te instanceof HTMLElement)) != null ? C : null;
  }, [g]);
  Ld(x, R);
  let j = (() => B ? !0 : k)(), b = lc(() => {
    var J, C;
    return (C = Array.from((J = M == null ? void 0 : M.querySelectorAll("[data-headlessui-portal]")) != null ? J : []).find((te) => te.contains(g.current) && te instanceof HTMLElement)) != null ? C : null;
  }, [g]);
  Ld(b, j);
  let W = Ot(() => {
    var J, C;
    return [...Array.from((J = M == null ? void 0 : M.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? J : []).filter((te) => !(te === document.body || te === document.head || !(te instanceof HTMLElement) || te.contains(g.current) || T.panelRef.current && te.contains(T.panelRef.current))), (C = T.panelRef.current) != null ? C : d.current];
  }), re = (() => !(!k || B))();
  Ob(() => W(), E, re);
  let oe = (() => !(B || v !== 0))();
  Dp(M == null ? void 0 : M.defaultView, "keydown", (J) => {
    oe && (J.defaultPrevented || J.key === vp.Escape && (J.preventDefault(), J.stopPropagation(), E()));
  });
  let ie = (() => !(L || v !== 0 || F))();
  kx(M, ie, W), ot(() => {
    if (v !== 0 || !d.current)
      return;
    let J = new ResizeObserver((C) => {
      for (let te of C) {
        let H = te.target.getBoundingClientRect();
        H.x === 0 && H.y === 0 && H.width === 0 && H.height === 0 && E();
      }
    });
    return J.observe(d.current), () => J.disconnect();
  }, [v, d, E]);
  let [_, $] = sx(), U = ir(() => [{ dialogState: v, close: E, setTitleId: P }, T], [v, T, E, P]), K = ir(() => ({ open: v === 0 }), [v]), q = { ref: h, id: n, role: "dialog", "aria-modal": v === 0 ? !0 : void 0, "aria-labelledby": T.titleId, "aria-describedby": _ };
  return Ne.createElement(dx, { type: "Dialog", enabled: v === 0, element: d, onUpdate: Ot((J, C) => {
    C === "Dialog" && Ir(J, { [iu.Add]: () => l((te) => te + 1), [iu.Remove]: () => l((te) => te - 1) });
  }) }, Ne.createElement(ru, { force: !0 }, Ne.createElement(nu, null, Ne.createElement(yo.Provider, { value: U }, Ne.createElement(nu.Group, { target: d }, Ne.createElement(ru, { force: !1 }, Ne.createElement($, { slot: K, name: "Dialog.Description" }, Ne.createElement(Yn, { initialFocus: s, containers: W, features: k ? Ir(S, { parent: Yn.features.RestoreFocus, leaf: Yn.features.All & ~Yn.features.FocusLock }) : Yn.features.None }, Wt({ ourProps: q, theirProps: u, slot: K, defaultTag: Px, features: Rx, visible: v === 0, name: "Dialog" })))))))), Ne.createElement(tu, { features: Mo.Hidden, ref: g }));
}
let Yx = "div";
function Fx(e, t) {
  let r = bn(), { id: n = `headlessui-dialog-overlay-${r}`, ...i } = e, [{ dialogState: o, close: s }] = Ni("Dialog.Overlay"), a = lr(t), u = Ot((l) => {
    if (l.target === l.currentTarget) {
      if (zb(l.currentTarget))
        return l.preventDefault();
      l.preventDefault(), l.stopPropagation(), s();
    }
  }), c = ir(() => ({ open: o === 0 }), [o]);
  return Wt({ ourProps: { ref: a, id: n, "aria-hidden": !0, onClick: u }, theirProps: i, slot: c, defaultTag: Yx, name: "Dialog.Overlay" });
}
let Qx = "div";
function Bx(e, t) {
  let r = bn(), { id: n = `headlessui-dialog-backdrop-${r}`, ...i } = e, [{ dialogState: o }, s] = Ni("Dialog.Backdrop"), a = lr(t);
  ot(() => {
    if (s.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s.panelRef]);
  let u = ir(() => ({ open: o === 0 }), [o]);
  return Ne.createElement(ru, { force: !0 }, Ne.createElement(nu, null, Wt({ ourProps: { ref: a, id: n, "aria-hidden": !0 }, theirProps: i, slot: u, defaultTag: Qx, name: "Dialog.Backdrop" })));
}
let $x = "div";
function Vx(e, t) {
  let r = bn(), { id: n = `headlessui-dialog-panel-${r}`, ...i } = e, [{ dialogState: o }, s] = Ni("Dialog.Panel"), a = lr(t, s.panelRef), u = ir(() => ({ open: o === 0 }), [o]), c = Ot((l) => {
    l.stopPropagation();
  });
  return Wt({ ourProps: { ref: a, id: n, onClick: c }, theirProps: i, slot: u, defaultTag: $x, name: "Dialog.Panel" });
}
let Wx = "h2";
function Hx(e, t) {
  let r = bn(), { id: n = `headlessui-dialog-title-${r}`, ...i } = e, [{ dialogState: o, setTitleId: s }] = Ni("Dialog.Title"), a = lr(t);
  ot(() => (s(n), () => s(null)), [n, s]);
  let u = ir(() => ({ open: o === 0 }), [o]);
  return Wt({ ourProps: { ref: a, id: n }, theirProps: i, slot: u, defaultTag: Wx, name: "Dialog.Title" });
}
let qx = Ht(Ux), Kx = Ht(Bx), Gx = Ht(Vx), Jx = Ht(Fx), Zx = Ht(Hx), $i = Object.assign(qx, { Backdrop: Kx, Panel: Gx, Overlay: Jx, Title: Zx, Description: lx });
const Xx = {
  fontSize: "1.2em",
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
}, eC = ({ isModalOpen: e, closeModal: t, t: r }) => /* @__PURE__ */ he.jsx($i, { open: e, onClose: () => t, children: /* @__PURE__ */ he.jsxs(
  $i.Panel,
  {
    className: "bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3",
    style: { borderRadius: "20px", padding: "1em 2em" },
    children: [
      /* @__PURE__ */ he.jsxs($i.Title, { style: { fontSize: "24px" }, children: [
        r("user.Sign in"),
        /* @__PURE__ */ he.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } })
      ] }),
      /* @__PURE__ */ he.jsxs($i.Description, { children: [
        /* @__PURE__ */ he.jsxs("div", { className: "px-4 py-4 lg:px-16", children: [
          /* @__PURE__ */ he.jsx("p", { children: r("user.sign in description") }),
          /* @__PURE__ */ he.jsxs("button", { style: Xx, onClick: wb, children: [
            /* @__PURE__ */ he.jsx("span", { style: { padding: "0px", paddingRight: "0.5em" }, children: /* @__PURE__ */ he.jsx(Py, {}) }),
            r("user.Sign in with WasedaMail")
          ] })
        ] }),
        /* @__PURE__ */ he.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } }),
        /* @__PURE__ */ he.jsxs("p", { children: [
          r("user.agreement on privacy policy 1"),
          /* @__PURE__ */ he.jsx("a", { href: "/privacy-policy", children: /* @__PURE__ */ he.jsx("b", { children: r("user.Privacy Policy") }) }),
          r("user.agreement on privacy policy 2"),
          /* @__PURE__ */ he.jsx("a", { href: "/terms-of-service", children: /* @__PURE__ */ he.jsx("b", { children: r("user.Terms of Service") }) }),
          r("user.agreement on privacy policy 3")
        ] })
      ] })
    ]
  }
) }), JC = jI("translation")(eC);
var bp = [], tC = bp.forEach, rC = bp.slice;
function nC(e) {
  return tC.call(rC.call(arguments, 1), function(t) {
    if (t)
      for (var r in t)
        e[r] === void 0 && (e[r] = t[r]);
  }), e;
}
var _d = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, iC = function(t, r, n) {
  var i = n || {};
  i.path = i.path || "/";
  var o = encodeURIComponent(r), s = t + "=" + o;
  if (i.maxAge > 0) {
    var a = i.maxAge - 0;
    if (isNaN(a))
      throw new Error("maxAge should be a Number");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (i.domain) {
    if (!_d.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!_d.test(i.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + i.path;
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + i.expires.toUTCString();
  }
  if (i.httpOnly && (s += "; HttpOnly"), i.secure && (s += "; Secure"), i.sameSite) {
    var u = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
    switch (u) {
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
}, kd = {
  create: function(t, r, n, i) {
    var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (o.expires = /* @__PURE__ */ new Date(), o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)), i && (o.domain = i), document.cookie = iC(t, encodeURIComponent(r), o);
  },
  read: function(t) {
    for (var r = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
      for (var o = n[i]; o.charAt(0) === " "; )
        o = o.substring(1, o.length);
      if (o.indexOf(r) === 0)
        return o.substring(r.length, o.length);
    }
    return null;
  },
  remove: function(t) {
    this.create(t, "", -1);
  }
}, oC = {
  name: "cookie",
  lookup: function(t) {
    var r;
    if (t.lookupCookie && typeof document < "u") {
      var n = kd.read(t.lookupCookie);
      n && (r = n);
    }
    return r;
  },
  cacheUserLanguage: function(t, r) {
    r.lookupCookie && typeof document < "u" && kd.create(r.lookupCookie, t, r.cookieMinutes, r.cookieDomain, r.cookieOptions);
  }
}, sC = {
  name: "querystring",
  lookup: function(t) {
    var r;
    if (typeof window < "u") {
      var n = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var i = n.substring(1), o = i.split("&"), s = 0; s < o.length; s++) {
        var a = o[s].indexOf("=");
        if (a > 0) {
          var u = o[s].substring(0, a);
          u === t.lookupQuerystring && (r = o[s].substring(a + 1));
        }
      }
    }
    return r;
  }
}, Qn = null, zd = function() {
  if (Qn !== null)
    return Qn;
  try {
    Qn = window !== "undefined" && window.localStorage !== null;
    var t = "i18next.translate.boo";
    window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
  } catch {
    Qn = !1;
  }
  return Qn;
}, aC = {
  name: "localStorage",
  lookup: function(t) {
    var r;
    if (t.lookupLocalStorage && zd()) {
      var n = window.localStorage.getItem(t.lookupLocalStorage);
      n && (r = n);
    }
    return r;
  },
  cacheUserLanguage: function(t, r) {
    r.lookupLocalStorage && zd() && window.localStorage.setItem(r.lookupLocalStorage, t);
  }
}, Bn = null, Pd = function() {
  if (Bn !== null)
    return Bn;
  try {
    Bn = window !== "undefined" && window.sessionStorage !== null;
    var t = "i18next.translate.boo";
    window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t);
  } catch {
    Bn = !1;
  }
  return Bn;
}, uC = {
  name: "sessionStorage",
  lookup: function(t) {
    var r;
    if (t.lookupSessionStorage && Pd()) {
      var n = window.sessionStorage.getItem(t.lookupSessionStorage);
      n && (r = n);
    }
    return r;
  },
  cacheUserLanguage: function(t, r) {
    r.lookupSessionStorage && Pd() && window.sessionStorage.setItem(r.lookupSessionStorage, t);
  }
}, cC = {
  name: "navigator",
  lookup: function(t) {
    var r = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var n = 0; n < navigator.languages.length; n++)
          r.push(navigator.languages[n]);
      navigator.userLanguage && r.push(navigator.userLanguage), navigator.language && r.push(navigator.language);
    }
    return r.length > 0 ? r : void 0;
  }
}, lC = {
  name: "htmlTag",
  lookup: function(t) {
    var r, n = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return n && typeof n.getAttribute == "function" && (r = n.getAttribute("lang")), r;
  }
}, fC = {
  name: "path",
  lookup: function(t) {
    var r;
    if (typeof window < "u") {
      var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (n instanceof Array)
        if (typeof t.lookupFromPathIndex == "number") {
          if (typeof n[t.lookupFromPathIndex] != "string")
            return;
          r = n[t.lookupFromPathIndex].replace("/", "");
        } else
          r = n[0].replace("/", "");
    }
    return r;
  }
}, dC = {
  name: "subdomain",
  lookup: function(t) {
    var r;
    if (typeof window < "u") {
      var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
      n instanceof Array && (typeof t.lookupFromSubdomainIndex == "number" ? r = n[t.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : r = n[0].replace("http://", "").replace("https://", "").replace(".", ""));
    }
    return r;
  }
};
function gC() {
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
var xp = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    hh(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, r);
  }
  return ph(e, [{
    key: "init",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = r, this.options = nC(n, this.options || {}, gC()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(oC), this.addDetector(sC), this.addDetector(aC), this.addDetector(uC), this.addDetector(cC), this.addDetector(lC), this.addDetector(fC), this.addDetector(dC);
    }
  }, {
    key: "addDetector",
    value: function(r) {
      this.detectors[r.name] = r;
    }
  }, {
    key: "detect",
    value: function(r) {
      var n = this;
      r || (r = this.options.order);
      var i = [];
      return r.forEach(function(o) {
        if (n.detectors[o]) {
          var s = n.detectors[o].lookup(n.options);
          s && typeof s == "string" && (s = [s]), s && (i = i.concat(s));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(r, n) {
      var i = this;
      n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(r) > -1 || n.forEach(function(o) {
        i.detectors[o] && i.detectors[o].cacheUserLanguage(r, i.options);
      }));
    }
  }]), e;
}();
xp.type = "languageDetector";
function ou(e) {
  return ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ou(e);
}
var Cp = [], hC = Cp.forEach, pC = Cp.slice;
function su(e) {
  return hC.call(pC.call(arguments, 1), function(t) {
    if (t)
      for (var r in t)
        e[r] === void 0 && (e[r] = t[r]);
  }), e;
}
function Op() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : ou(XMLHttpRequest)) === "object";
}
function MC(e) {
  return !!e && typeof e.then == "function";
}
function yC(e) {
  return MC(e) ? e : Promise.resolve(e);
}
function mC(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var au = { exports: {} }, Vi = { exports: {} }, Rd;
function vC() {
  return Rd || (Rd = 1, function(e, t) {
    var r = typeof self < "u" ? self : Lt, n = function() {
      function o() {
        this.fetch = !1, this.DOMException = r.DOMException;
      }
      return o.prototype = r, new o();
    }();
    (function(o) {
      (function(s) {
        var a = {
          searchParams: "URLSearchParams" in o,
          iterable: "Symbol" in o && "iterator" in Symbol,
          blob: "FileReader" in o && "Blob" in o && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in o,
          arrayBuffer: "ArrayBuffer" in o
        };
        function u(j) {
          return j && DataView.prototype.isPrototypeOf(j);
        }
        if (a.arrayBuffer)
          var c = [
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
            return j && c.indexOf(Object.prototype.toString.call(j)) > -1;
          };
        function f(j) {
          if (typeof j != "string" && (j = String(j)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(j))
            throw new TypeError("Invalid character in header field name");
          return j.toLowerCase();
        }
        function d(j) {
          return typeof j != "string" && (j = String(j)), j;
        }
        function h(j) {
          var b = {
            next: function() {
              var W = j.shift();
              return { done: W === void 0, value: W };
            }
          };
          return a.iterable && (b[Symbol.iterator] = function() {
            return b;
          }), b;
        }
        function g(j) {
          this.map = {}, j instanceof g ? j.forEach(function(b, W) {
            this.append(W, b);
          }, this) : Array.isArray(j) ? j.forEach(function(b) {
            this.append(b[0], b[1]);
          }, this) : j && Object.getOwnPropertyNames(j).forEach(function(b) {
            this.append(b, j[b]);
          }, this);
        }
        g.prototype.append = function(j, b) {
          j = f(j), b = d(b);
          var W = this.map[j];
          this.map[j] = W ? W + ", " + b : b;
        }, g.prototype.delete = function(j) {
          delete this.map[f(j)];
        }, g.prototype.get = function(j) {
          return j = f(j), this.has(j) ? this.map[j] : null;
        }, g.prototype.has = function(j) {
          return this.map.hasOwnProperty(f(j));
        }, g.prototype.set = function(j, b) {
          this.map[f(j)] = d(b);
        }, g.prototype.forEach = function(j, b) {
          for (var W in this.map)
            this.map.hasOwnProperty(W) && j.call(b, this.map[W], W, this);
        }, g.prototype.keys = function() {
          var j = [];
          return this.forEach(function(b, W) {
            j.push(W);
          }), h(j);
        }, g.prototype.values = function() {
          var j = [];
          return this.forEach(function(b) {
            j.push(b);
          }), h(j);
        }, g.prototype.entries = function() {
          var j = [];
          return this.forEach(function(b, W) {
            j.push([W, b]);
          }), h(j);
        }, a.iterable && (g.prototype[Symbol.iterator] = g.prototype.entries);
        function M(j) {
          if (j.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          j.bodyUsed = !0;
        }
        function m(j) {
          return new Promise(function(b, W) {
            j.onload = function() {
              b(j.result);
            }, j.onerror = function() {
              W(j.error);
            };
          });
        }
        function w(j) {
          var b = new FileReader(), W = m(b);
          return b.readAsArrayBuffer(j), W;
        }
        function v(j) {
          var b = new FileReader(), W = m(b);
          return b.readAsText(j), W;
        }
        function T(j) {
          for (var b = new Uint8Array(j), W = new Array(b.length), re = 0; re < b.length; re++)
            W[re] = String.fromCharCode(b[re]);
          return W.join("");
        }
        function N(j) {
          if (j.slice)
            return j.slice(0);
          var b = new Uint8Array(j.byteLength);
          return b.set(new Uint8Array(j)), b.buffer;
        }
        function E() {
          return this.bodyUsed = !1, this._initBody = function(j) {
            this._bodyInit = j, j ? typeof j == "string" ? this._bodyText = j : a.blob && Blob.prototype.isPrototypeOf(j) ? this._bodyBlob = j : a.formData && FormData.prototype.isPrototypeOf(j) ? this._bodyFormData = j : a.searchParams && URLSearchParams.prototype.isPrototypeOf(j) ? this._bodyText = j.toString() : a.arrayBuffer && a.blob && u(j) ? (this._bodyArrayBuffer = N(j.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(j) || l(j)) ? this._bodyArrayBuffer = N(j) : this._bodyText = j = Object.prototype.toString.call(j) : this._bodyText = "", this.headers.get("content-type") || (typeof j == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(j) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, a.blob && (this.blob = function() {
            var j = M(this);
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
            return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(w);
          }), this.text = function() {
            var j = M(this);
            if (j)
              return j;
            if (this._bodyBlob)
              return v(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(T(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, a.formData && (this.formData = function() {
            return this.text().then(F);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function k(j) {
          var b = j.toUpperCase();
          return P.indexOf(b) > -1 ? b : j;
        }
        function B(j, b) {
          b = b || {};
          var W = b.body;
          if (j instanceof B) {
            if (j.bodyUsed)
              throw new TypeError("Already read");
            this.url = j.url, this.credentials = j.credentials, b.headers || (this.headers = new g(j.headers)), this.method = j.method, this.mode = j.mode, this.signal = j.signal, !W && j._bodyInit != null && (W = j._bodyInit, j.bodyUsed = !0);
          } else
            this.url = String(j);
          if (this.credentials = b.credentials || this.credentials || "same-origin", (b.headers || !this.headers) && (this.headers = new g(b.headers)), this.method = k(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.signal = b.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && W)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(W);
        }
        B.prototype.clone = function() {
          return new B(this, { body: this._bodyInit });
        };
        function F(j) {
          var b = new FormData();
          return j.trim().split("&").forEach(function(W) {
            if (W) {
              var re = W.split("="), oe = re.shift().replace(/\+/g, " "), ie = re.join("=").replace(/\+/g, " ");
              b.append(decodeURIComponent(oe), decodeURIComponent(ie));
            }
          }), b;
        }
        function S(j) {
          var b = new g(), W = j.replace(/\r?\n[\t ]+/g, " ");
          return W.split(/\r?\n/).forEach(function(re) {
            var oe = re.split(":"), ie = oe.shift().trim();
            if (ie) {
              var _ = oe.join(":").trim();
              b.append(ie, _);
            }
          }), b;
        }
        E.call(B.prototype);
        function L(j, b) {
          b || (b = {}), this.type = "default", this.status = b.status === void 0 ? 200 : b.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new g(b.headers), this.url = b.url || "", this._initBody(j);
        }
        E.call(L.prototype), L.prototype.clone = function() {
          return new L(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new g(this.headers),
            url: this.url
          });
        }, L.error = function() {
          var j = new L(null, { status: 0, statusText: "" });
          return j.type = "error", j;
        };
        var R = [301, 302, 303, 307, 308];
        L.redirect = function(j, b) {
          if (R.indexOf(b) === -1)
            throw new RangeError("Invalid status code");
          return new L(null, { status: b, headers: { location: j } });
        }, s.DOMException = o.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function(b, W) {
            this.message = b, this.name = W;
            var re = Error(b);
            this.stack = re.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function x(j, b) {
          return new Promise(function(W, re) {
            var oe = new B(j, b);
            if (oe.signal && oe.signal.aborted)
              return re(new s.DOMException("Aborted", "AbortError"));
            var ie = new XMLHttpRequest();
            function _() {
              ie.abort();
            }
            ie.onload = function() {
              var $ = {
                status: ie.status,
                statusText: ie.statusText,
                headers: S(ie.getAllResponseHeaders() || "")
              };
              $.url = "responseURL" in ie ? ie.responseURL : $.headers.get("X-Request-URL");
              var U = "response" in ie ? ie.response : ie.responseText;
              W(new L(U, $));
            }, ie.onerror = function() {
              re(new TypeError("Network request failed"));
            }, ie.ontimeout = function() {
              re(new TypeError("Network request failed"));
            }, ie.onabort = function() {
              re(new s.DOMException("Aborted", "AbortError"));
            }, ie.open(oe.method, oe.url, !0), oe.credentials === "include" ? ie.withCredentials = !0 : oe.credentials === "omit" && (ie.withCredentials = !1), "responseType" in ie && a.blob && (ie.responseType = "blob"), oe.headers.forEach(function($, U) {
              ie.setRequestHeader(U, $);
            }), oe.signal && (oe.signal.addEventListener("abort", _), ie.onreadystatechange = function() {
              ie.readyState === 4 && oe.signal.removeEventListener("abort", _);
            }), ie.send(typeof oe._bodyInit > "u" ? null : oe._bodyInit);
          });
        }
        return x.polyfill = !0, o.fetch || (o.fetch = x, o.Headers = g, o.Request = B, o.Response = L), s.Headers = g, s.Request = B, s.Response = L, s.fetch = x, Object.defineProperty(s, "__esModule", { value: !0 }), s;
      })({});
    })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = n;
    t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
  }(Vi, Vi.exports)), Vi.exports;
}
(function(e, t) {
  var r;
  if (typeof fetch == "function" && (typeof Lt < "u" && Lt.fetch ? r = Lt.fetch : typeof window < "u" && window.fetch ? r = window.fetch : r = fetch), typeof mC < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var n = r || vC();
    n.default && (n = n.default), t.default = n, e.exports = t.default;
  }
})(au, au.exports);
var Lp = au.exports;
const _p = /* @__PURE__ */ Do(Lp), Ud = /* @__PURE__ */ rM({
  __proto__: null,
  default: _p
}, [Lp]);
function mo(e) {
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
var nr;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? nr = global.fetch : typeof window < "u" && window.fetch ? nr = window.fetch : nr = fetch);
var hi;
Op() && (typeof global < "u" && global.XMLHttpRequest ? hi = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (hi = window.XMLHttpRequest));
var vo;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? vo = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (vo = window.ActiveXObject));
!nr && Ud && !hi && !vo && (nr = _p || Ud);
typeof nr != "function" && (nr = void 0);
var uu = function(t, r) {
  if (r && mo(r) === "object") {
    var n = "";
    for (var i in r)
      n += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(r[i]);
    if (!n)
      return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
  }
  return t;
}, Yd = function(t, r, n) {
  nr(t, r).then(function(i) {
    if (!i.ok)
      return n(i.statusText || "Error", {
        status: i.status
      });
    i.text().then(function(o) {
      n(null, {
        status: i.status,
        data: o
      });
    }).catch(n);
  }).catch(n);
}, Fd = !1, wC = function(t, r, n, i) {
  t.queryStringParams && (r = uu(r, t.queryStringParams));
  var o = su({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  n && (o["Content-Type"] = "application/json");
  var s = typeof t.requestOptions == "function" ? t.requestOptions(n) : t.requestOptions, a = su({
    method: n ? "POST" : "GET",
    body: n ? t.stringify(n) : void 0,
    headers: o
  }, Fd ? {} : s);
  try {
    Yd(r, a, i);
  } catch (u) {
    if (!s || Object.keys(s).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(s).forEach(function(c) {
        delete a[c];
      }), Yd(r, a, i), Fd = !0;
    } catch (c) {
      i(c);
    }
  }
}, DC = function(t, r, n, i) {
  n && mo(n) === "object" && (n = uu("", n).slice(1)), t.queryStringParams && (r = uu(r, t.queryStringParams));
  try {
    var o;
    hi ? o = new hi() : o = new vo("MSXML2.XMLHTTP.3.0"), o.open(n ? "POST" : "GET", r, 1), t.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!t.withCredentials, n && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
    var s = t.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var a in s)
        o.setRequestHeader(a, s[a]);
    o.onreadystatechange = function() {
      o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
        status: o.status,
        data: o.responseText
      });
    }, o.send(n);
  } catch (u) {
    console && console.log(u);
  }
}, AC = function(t, r, n, i) {
  if (typeof n == "function" && (i = n, n = void 0), i = i || function() {
  }, nr && r.indexOf("file:") !== 0)
    return wC(t, r, n, i);
  if (Op() || typeof ActiveXObject == "function")
    return DC(t, r, n, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function pi(e) {
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function IC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kp(n.key), n);
  }
}
function EC(e, t, r) {
  return t && Qd(e.prototype, t), r && Qd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NC(e, t, r) {
  return t = kp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kp(e) {
  var t = TC(e, "string");
  return pi(t) === "symbol" ? t : String(t);
}
function TC(e, t) {
  if (pi(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pi(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jC = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(r) {
      return JSON.parse(r);
    },
    stringify: JSON.stringify,
    parsePayload: function(r, n, i) {
      return NC({}, n, i || "");
    },
    parseLoadPayload: function(r, n) {
    },
    request: AC,
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
}, zp = function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    IC(this, e), this.services = t, this.options = r, this.allOptions = n, this.type = "backend", this.init(t, r, n);
  }
  return EC(e, [{
    key: "init",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = r, this.options = su(i, this.options || {}, jC()), this.allOptions = o, this.services && this.options.reloadInterval && setInterval(function() {
        return n.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(r, n, i) {
      this._readAny(r, r, n, n, i);
    }
  }, {
    key: "read",
    value: function(r, n, i) {
      this._readAny([r], r, [n], n, i);
    }
  }, {
    key: "_readAny",
    value: function(r, n, i, o, s) {
      var a = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(r, i)), u = yC(u), u.then(function(c) {
        if (!c)
          return s(null, {});
        var l = a.services.interpolator.interpolate(c, {
          lng: r.join("+"),
          ns: i.join("+")
        });
        a.loadUrl(l, s, n, o);
      });
    }
  }, {
    key: "loadUrl",
    value: function(r, n, i, o) {
      var s = this, a = typeof i == "string" ? [i] : i, u = typeof o == "string" ? [o] : o, c = this.options.parseLoadPayload(a, u);
      this.options.request(this.options, r, c, function(l, f) {
        if (f && (f.status >= 500 && f.status < 600 || !f.status))
          return n("failed loading " + r + "; status code: " + f.status, !0);
        if (f && f.status >= 400 && f.status < 500)
          return n("failed loading " + r + "; status code: " + f.status, !1);
        if (!f && l && l.message && l.message.indexOf("Failed to fetch") > -1)
          return n("failed loading " + r + ": " + l.message, !0);
        if (l)
          return n(l, !1);
        var d, h;
        try {
          typeof f.data == "string" ? d = s.options.parse(f.data, i, o) : d = f.data;
        } catch {
          h = "failed parsing " + r + " to json";
        }
        if (h)
          return n(h, !1);
        n(null, d);
      });
    }
  }, {
    key: "create",
    value: function(r, n, i, o, s) {
      var a = this;
      if (this.options.addPath) {
        typeof r == "string" && (r = [r]);
        var u = this.options.parsePayload(n, i, o), c = 0, l = [], f = [];
        r.forEach(function(d) {
          var h = a.options.addPath;
          typeof a.options.addPath == "function" && (h = a.options.addPath(d, n));
          var g = a.services.interpolator.interpolate(h, {
            lng: d,
            ns: n
          });
          a.options.request(a.options, g, u, function(M, m) {
            c += 1, l.push(M), f.push(m), c === r.length && typeof s == "function" && s(l, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var r = this, n = this.services, i = n.backendConnector, o = n.languageUtils, s = n.logger, a = i.language;
      if (!(a && a.toLowerCase() === "cimode")) {
        var u = [], c = function(f) {
          var d = o.toResolveHierarchy(f);
          d.forEach(function(h) {
            u.indexOf(h) < 0 && u.push(h);
          });
        };
        c(a), this.allOptions.preload && this.allOptions.preload.forEach(function(l) {
          return c(l);
        }), u.forEach(function(l) {
          r.allOptions.ns.forEach(function(f) {
            i.read(l, f, "read", null, null, function(d, h) {
              d && s.warn("loading namespace ".concat(f, " for language ").concat(l, " failed"), d), !d && h && s.log("loaded namespace ".concat(f, " for language ").concat(l), h), i.loaded("".concat(l, "|").concat(f), d, h);
            });
          });
        });
      }
    }
  }]), e;
}();
zp.type = "backend";
var yr = /* @__PURE__ */ ((e) => (e.EN = "en", e.JA = "ja", e))(yr || {});
const SC = {
  [yr.EN]: ng,
  [yr.JA]: ig
}, ZC = ({
  i18n: e,
  customTranslations: t = SC
}) => {
  const r = {
    [yr.EN]: {
      translation: { ...ng, ...t[yr.EN] }
    },
    [yr.JA]: {
      translation: { ...ig, ...t[yr.JA] }
    }
  }, n = {
    order: ["localStorage"],
    lookupLocalStorage: "wasedatime-lng",
    caches: ["localStorage"]
  };
  e.use(zp).use(xp).use(yI).init({
    resources: r,
    fallbackLng: yr.EN,
    keySeparator: ".",
    interpolation: {
      // react already safes from xss
      escapeValue: !1
    },
    // Configure the withNamespaces / NamespacesConsumer to
    // not render the content until needed namespaces are loaded.
    react: {
      wait: !0
    },
    detection: n
  });
};
export {
  Ke as Colors,
  Py as GoogleIcon,
  QC as Header,
  BA as LanguageMenu,
  BC as LoadingSpinner,
  $A as Logo,
  YC as LogoJp,
  ry as Overlay,
  OC as RowWrapper,
  JC as SignInModal,
  VA as SmallLogo,
  FC as SmallLogoJp,
  WA as ThemeToggle,
  rg as Wrapper,
  LC as WrapperWithBackground,
  $C as configAuth,
  ng as en,
  kC as fontSize,
  WC as getAccessToken,
  VC as getIdToken,
  HC as getRefreshToken,
  qC as getUserAttr,
  _C as height,
  ZC as i18nConfig,
  zC as isScreenType,
  PC as isThemeType,
  ig as ja,
  UC as media,
  wb as signIn,
  KC as signOut,
  co as sizes,
  RC as useScrollBlock
};
