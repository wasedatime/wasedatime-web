import * as re from "react";
import Te, { useRef as tt, useDebugValue as Uc, useContext as gt, createElement as wt, createContext as pn, forwardRef as es, Fragment as jn, useLayoutEffect as jh, Children as PM, isValidElement as gi, cloneElement as pi, useState as Ln, useEffect as st, useMemo as dn, useReducer as RM, createRef as UM, useCallback as Fc } from "react";
import * as FM from "react-dom";
import ci, { createPortal as YM } from "react-dom";
function BM(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Bi(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(t, i);
        return new o();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var ir = {}, QM = {
  get exports() {
    return ir;
  },
  set exports(e) {
    ir = e;
  }
}, Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;
function $M() {
  if (Yc)
    return Re;
  Yc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var v = m.$$typeof;
      switch (v) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Re.ContextConsumer = s, Re.ContextProvider = o, Re.Element = e, Re.ForwardRef = u, Re.Fragment = n, Re.Lazy = d, Re.Memo = f, Re.Portal = t, Re.Profiler = i, Re.StrictMode = r, Re.Suspense = c, Re.SuspenseList = l, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(m) {
    return p(m) === s;
  }, Re.isContextProvider = function(m) {
    return p(m) === o;
  }, Re.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Re.isForwardRef = function(m) {
    return p(m) === u;
  }, Re.isFragment = function(m) {
    return p(m) === n;
  }, Re.isLazy = function(m) {
    return p(m) === d;
  }, Re.isMemo = function(m) {
    return p(m) === f;
  }, Re.isPortal = function(m) {
    return p(m) === t;
  }, Re.isProfiler = function(m) {
    return p(m) === i;
  }, Re.isStrictMode = function(m) {
    return p(m) === r;
  }, Re.isSuspense = function(m) {
    return p(m) === c;
  }, Re.isSuspenseList = function(m) {
    return p(m) === l;
  }, Re.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === c || m === l || m === g || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === o || m.$$typeof === s || m.$$typeof === u || m.$$typeof === h || m.getModuleId !== void 0);
  }, Re.typeOf = p, Re;
}
var Ue = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bc;
function WM() {
  return Bc || (Bc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, p = !1, m = !1, v = !1, w = !1, j;
    j = Symbol.for("react.module.reference");
    function N(te) {
      return !!(typeof te == "string" || typeof te == "function" || te === n || te === i || w || te === r || te === c || te === l || v || te === g || h || p || m || typeof te == "object" && te !== null && (te.$$typeof === d || te.$$typeof === f || te.$$typeof === o || te.$$typeof === s || te.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      te.$$typeof === j || te.getModuleId !== void 0));
    }
    function I(te) {
      if (typeof te == "object" && te !== null) {
        var le = te.$$typeof;
        switch (le) {
          case e:
            var Me = te.type;
            switch (Me) {
              case n:
              case i:
              case r:
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
    var B = s, z = o, W = e, $ = u, b = n, k = d, U = f, x = t, T = i, S = r, R = c, C = l, J = !1, ie = !1;
    function L(te) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(te) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function P(te) {
      return I(te) === s;
    }
    function q(te) {
      return I(te) === o;
    }
    function K(te) {
      return typeof te == "object" && te !== null && te.$$typeof === e;
    }
    function X(te) {
      return I(te) === u;
    }
    function O(te) {
      return I(te) === n;
    }
    function ne(te) {
      return I(te) === d;
    }
    function G(te) {
      return I(te) === f;
    }
    function he(te) {
      return I(te) === t;
    }
    function H(te) {
      return I(te) === i;
    }
    function Q(te) {
      return I(te) === r;
    }
    function V(te) {
      return I(te) === c;
    }
    function fe(te) {
      return I(te) === l;
    }
    Ue.ContextConsumer = B, Ue.ContextProvider = z, Ue.Element = W, Ue.ForwardRef = $, Ue.Fragment = b, Ue.Lazy = k, Ue.Memo = U, Ue.Portal = x, Ue.Profiler = T, Ue.StrictMode = S, Ue.Suspense = R, Ue.SuspenseList = C, Ue.isAsyncMode = L, Ue.isConcurrentMode = F, Ue.isContextConsumer = P, Ue.isContextProvider = q, Ue.isElement = K, Ue.isForwardRef = X, Ue.isFragment = O, Ue.isLazy = ne, Ue.isMemo = G, Ue.isPortal = he, Ue.isProfiler = H, Ue.isStrictMode = Q, Ue.isSuspense = V, Ue.isSuspenseList = fe, Ue.isValidElementType = N, Ue.typeOf = I;
  }()), Ue;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $M() : e.exports = WM();
})(QM);
function VM(e) {
  function t(P, q, K, X, O) {
    for (var ne = 0, G = 0, he = 0, H = 0, Q, V, fe = 0, te = 0, le, Me = le = Q = 0, de = 0, E = 0, y = 0, M = 0, A = K.length, Y = A - 1, ee, Z = "", ve = "", Ce = "", Se = "", Pe; de < A; ) {
      if (V = K.charCodeAt(de), de === Y && G + H + he + ne !== 0 && (G !== 0 && (V = G === 47 ? 10 : 47), H = he = ne = 0, A++, Y++), G + H + he + ne === 0) {
        if (de === Y && (0 < E && (Z = Z.replace(d, "")), 0 < Z.trim().length)) {
          switch (V) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Z += K.charAt(de);
          }
          V = 59;
        }
        switch (V) {
          case 123:
            for (Z = Z.trim(), Q = Z.charCodeAt(0), le = 1, M = ++de; de < A; ) {
              switch (V = K.charCodeAt(de)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (V = K.charCodeAt(de + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Me = de + 1; Me < Y; ++Me)
                          switch (K.charCodeAt(Me)) {
                            case 47:
                              if (V === 42 && K.charCodeAt(Me - 1) === 42 && de + 2 !== Me) {
                                de = Me + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (V === 47) {
                                de = Me + 1;
                                break e;
                              }
                          }
                        de = Me;
                      }
                  }
                  break;
                case 91:
                  V++;
                case 40:
                  V++;
                case 34:
                case 39:
                  for (; de++ < Y && K.charCodeAt(de) !== V; )
                    ;
              }
              if (le === 0)
                break;
              de++;
            }
            switch (le = K.substring(M, de), Q === 0 && (Q = (Z = Z.replace(f, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < E && (Z = Z.replace(d, "")), V = Z.charCodeAt(1), V) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    E = q;
                    break;
                  default:
                    E = R;
                }
                if (le = t(q, E, le, V, O + 1), M = le.length, 0 < J && (E = n(R, Z, y), Pe = a(3, le, E, q, x, U, M, V, O, X), Z = E.join(""), Pe !== void 0 && (M = (le = Pe.trim()).length) === 0 && (V = 0, le = "")), 0 < M)
                  switch (V) {
                    case 115:
                      Z = Z.replace(B, s);
                    case 100:
                    case 109:
                    case 45:
                      le = Z + "{" + le + "}";
                      break;
                    case 107:
                      Z = Z.replace(w, "$1 $2"), le = Z + "{" + le + "}", le = S === 1 || S === 2 && o("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                      break;
                    default:
                      le = Z + le, X === 112 && (le = (ve += le, ""));
                  }
                else
                  le = "";
                break;
              default:
                le = t(q, n(q, Z, y), le, X, O + 1);
            }
            Ce += le, le = y = E = Me = Q = 0, Z = "", V = K.charCodeAt(++de);
            break;
          case 125:
          case 59:
            if (Z = (0 < E ? Z.replace(d, "") : Z).trim(), 1 < (M = Z.length))
              switch (Me === 0 && (Q = Z.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (M = (Z = Z.replace(" ", ":")).length), 0 < J && (Pe = a(1, Z, q, P, x, U, ve.length, X, O, X)) !== void 0 && (M = (Z = Pe.trim()).length) === 0 && (Z = "\0\0"), Q = Z.charCodeAt(0), V = Z.charCodeAt(1), Q) {
                case 0:
                  break;
                case 64:
                  if (V === 105 || V === 99) {
                    Se += Z + K.charAt(de);
                    break;
                  }
                default:
                  Z.charCodeAt(M - 1) !== 58 && (ve += i(Z, Q, V, Z.charCodeAt(2)));
              }
            y = E = Me = Q = 0, Z = "", V = K.charCodeAt(++de);
        }
      }
      switch (V) {
        case 13:
        case 10:
          G === 47 ? G = 0 : 1 + Q === 0 && X !== 107 && 0 < Z.length && (E = 1, Z += "\0"), 0 < J * L && a(0, Z, q, P, x, U, ve.length, X, O, X), U = 1, x++;
          break;
        case 59:
        case 125:
          if (G + H + he + ne === 0) {
            U++;
            break;
          }
        default:
          switch (U++, ee = K.charAt(de), V) {
            case 9:
            case 32:
              if (H + ne + G === 0)
                switch (fe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ee = "";
                    break;
                  default:
                    V !== 32 && (ee = " ");
                }
              break;
            case 0:
              ee = "\\0";
              break;
            case 12:
              ee = "\\f";
              break;
            case 11:
              ee = "\\v";
              break;
            case 38:
              H + G + ne === 0 && (E = y = 1, ee = "\f" + ee);
              break;
            case 108:
              if (H + G + ne + T === 0 && 0 < Me)
                switch (de - Me) {
                  case 2:
                    fe === 112 && K.charCodeAt(de - 3) === 58 && (T = fe);
                  case 8:
                    te === 111 && (T = te);
                }
              break;
            case 58:
              H + G + ne === 0 && (Me = de);
              break;
            case 44:
              G + he + H + ne === 0 && (E = 1, ee += "\r");
              break;
            case 34:
            case 39:
              G === 0 && (H = H === V ? 0 : H === 0 ? V : H);
              break;
            case 91:
              H + G + he === 0 && ne++;
              break;
            case 93:
              H + G + he === 0 && ne--;
              break;
            case 41:
              H + G + ne === 0 && he--;
              break;
            case 40:
              if (H + G + ne === 0) {
                if (Q === 0)
                  switch (2 * fe + 3 * te) {
                    case 533:
                      break;
                    default:
                      Q = 1;
                  }
                he++;
              }
              break;
            case 64:
              G + he + H + ne + Me + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + ne + he))
                switch (G) {
                  case 0:
                    switch (2 * V + 3 * K.charCodeAt(de + 1)) {
                      case 235:
                        G = 47;
                        break;
                      case 220:
                        M = de, G = 42;
                    }
                    break;
                  case 42:
                    V === 47 && fe === 42 && M + 2 !== de && (K.charCodeAt(M + 2) === 33 && (ve += K.substring(M, de + 1)), ee = "", G = 0);
                }
          }
          G === 0 && (Z += ee);
      }
      te = fe, fe = V, de++;
    }
    if (M = ve.length, 0 < M) {
      if (E = q, 0 < J && (Pe = a(2, ve, E, P, x, U, M, X, O, X), Pe !== void 0 && (ve = Pe).length === 0))
        return Se + ve + Ce;
      if (ve = E.join(",") + "{" + ve + "}", S * T !== 0) {
        switch (S !== 2 || o(ve, 2) || (T = 0), T) {
          case 111:
            ve = ve.replace(N, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(j, "::-webkit-input-$1") + ve.replace(j, "::-moz-$1") + ve.replace(j, ":-ms-input-$1") + ve;
        }
        T = 0;
      }
    }
    return Se + ve + Ce;
  }
  function n(P, q, K) {
    var X = q.trim().split(m);
    q = X;
    var O = X.length, ne = P.length;
    switch (ne) {
      case 0:
      case 1:
        var G = 0;
        for (P = ne === 0 ? "" : P[0] + " "; G < O; ++G)
          q[G] = r(P, q[G], K).trim();
        break;
      default:
        var he = G = 0;
        for (q = []; G < O; ++G)
          for (var H = 0; H < ne; ++H)
            q[he++] = r(P[H] + " ", X[G], K).trim();
    }
    return q;
  }
  function r(P, q, K) {
    var X = q.charCodeAt(0);
    switch (33 > X && (X = (q = q.trim()).charCodeAt(0)), X) {
      case 38:
        return q.replace(v, "$1" + P.trim());
      case 58:
        return P.trim() + q.replace(v, "$1" + P.trim());
      default:
        if (0 < 1 * K && 0 < q.indexOf("\f"))
          return q.replace(v, (P.charCodeAt(0) === 58 ? "" : "$1") + P.trim());
    }
    return P + q;
  }
  function i(P, q, K, X) {
    var O = P + ";", ne = 2 * q + 3 * K + 4 * X;
    if (ne === 944) {
      P = O.indexOf(":", 9) + 1;
      var G = O.substring(P, O.length - 1).trim();
      return G = O.substring(0, P).trim() + G + ";", S === 1 || S === 2 && o(G, 1) ? "-webkit-" + G + G : G;
    }
    if (S === 0 || S === 2 && !o(O, 1))
      return O;
    switch (ne) {
      case 1015:
        return O.charCodeAt(10) === 97 ? "-webkit-" + O + O : O;
      case 951:
        return O.charCodeAt(3) === 116 ? "-webkit-" + O + O : O;
      case 963:
        return O.charCodeAt(5) === 110 ? "-webkit-" + O + O : O;
      case 1009:
        if (O.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + O + O;
      case 978:
        return "-webkit-" + O + "-moz-" + O + O;
      case 1019:
      case 983:
        return "-webkit-" + O + "-moz-" + O + "-ms-" + O + O;
      case 883:
        if (O.charCodeAt(8) === 45)
          return "-webkit-" + O + O;
        if (0 < O.indexOf("image-set(", 11))
          return O.replace(k, "$1-webkit-$2") + O;
        break;
      case 932:
        if (O.charCodeAt(4) === 45)
          switch (O.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + O.replace("-grow", "") + "-webkit-" + O + "-ms-" + O.replace("grow", "positive") + O;
            case 115:
              return "-webkit-" + O + "-ms-" + O.replace("shrink", "negative") + O;
            case 98:
              return "-webkit-" + O + "-ms-" + O.replace("basis", "preferred-size") + O;
          }
        return "-webkit-" + O + "-ms-" + O + O;
      case 964:
        return "-webkit-" + O + "-ms-flex-" + O + O;
      case 1023:
        if (O.charCodeAt(8) !== 99)
          break;
        return G = O.substring(O.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + G + "-webkit-" + O + "-ms-flex-pack" + G + O;
      case 1005:
        return h.test(O) ? O.replace(g, ":-webkit-") + O.replace(g, ":-moz-") + O : O;
      case 1e3:
        switch (G = O.substring(13).trim(), q = G.indexOf("-") + 1, G.charCodeAt(0) + G.charCodeAt(q)) {
          case 226:
            G = O.replace(I, "tb");
            break;
          case 232:
            G = O.replace(I, "tb-rl");
            break;
          case 220:
            G = O.replace(I, "lr");
            break;
          default:
            return O;
        }
        return "-webkit-" + O + "-ms-" + G + O;
      case 1017:
        if (O.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (q = (O = P).length - 10, G = (O.charCodeAt(q) === 33 ? O.substring(0, q) : O).substring(P.indexOf(":", 7) + 1).trim(), ne = G.charCodeAt(0) + (G.charCodeAt(7) | 0)) {
          case 203:
            if (111 > G.charCodeAt(8))
              break;
          case 115:
            O = O.replace(G, "-webkit-" + G) + ";" + O;
            break;
          case 207:
          case 102:
            O = O.replace(G, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + O.replace(G, "-webkit-" + G) + ";" + O.replace(G, "-ms-" + G + "box") + ";" + O;
        }
        return O + ";";
      case 938:
        if (O.charCodeAt(5) === 45)
          switch (O.charCodeAt(6)) {
            case 105:
              return G = O.replace("-items", ""), "-webkit-" + O + "-webkit-box-" + G + "-ms-flex-" + G + O;
            case 115:
              return "-webkit-" + O + "-ms-flex-item-" + O.replace(W, "") + O;
            default:
              return "-webkit-" + O + "-ms-flex-line-pack" + O.replace("align-content", "").replace(W, "") + O;
          }
        break;
      case 973:
      case 989:
        if (O.charCodeAt(3) !== 45 || O.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (b.test(P) === !0)
          return (G = P.substring(P.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(P.replace("stretch", "fill-available"), q, K, X).replace(":fill-available", ":stretch") : O.replace(G, "-webkit-" + G) + O.replace(G, "-moz-" + G.replace("fill-", "")) + O;
        break;
      case 962:
        if (O = "-webkit-" + O + (O.charCodeAt(5) === 102 ? "-ms-" + O : "") + O, K + X === 211 && O.charCodeAt(13) === 105 && 0 < O.indexOf("transform", 10))
          return O.substring(0, O.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + O;
    }
    return O;
  }
  function o(P, q) {
    var K = P.indexOf(q === 1 ? ":" : "{"), X = P.substring(0, q !== 3 ? K : 10);
    return K = P.substring(K + 1, P.length - 1), ie(q !== 2 ? X : X.replace($, "$1"), K, q);
  }
  function s(P, q) {
    var K = i(q, q.charCodeAt(0), q.charCodeAt(1), q.charCodeAt(2));
    return K !== q + ";" ? K.replace(z, " or ($1)").substring(4) : "(" + q + ")";
  }
  function a(P, q, K, X, O, ne, G, he, H, Q) {
    for (var V = 0, fe = q, te; V < J; ++V)
      switch (te = C[V].call(l, P, fe, K, X, O, ne, G, he, H, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = te;
      }
    if (fe !== q)
      return fe;
  }
  function u(P) {
    switch (P) {
      case void 0:
      case null:
        J = C.length = 0;
        break;
      default:
        if (typeof P == "function")
          C[J++] = P;
        else if (typeof P == "object")
          for (var q = 0, K = P.length; q < K; ++q)
            u(P[q]);
        else
          L = !!P | 0;
    }
    return u;
  }
  function c(P) {
    return P = P.prefix, P !== void 0 && (ie = null, P ? typeof P != "function" ? S = 1 : (S = 2, ie = P) : S = 0), c;
  }
  function l(P, q) {
    var K = P;
    if (33 > K.charCodeAt(0) && (K = K.trim()), F = K, K = [F], 0 < J) {
      var X = a(-1, q, K, K, x, U, 0, 0, 0, 0);
      X !== void 0 && typeof X == "string" && (q = X);
    }
    var O = t(R, K, q, 0, 0);
    return 0 < J && (X = a(-2, O, K, K, x, U, O.length, 0, 0, 0), X !== void 0 && (O = X)), F = "", T = 0, U = x = 1, O;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, g = /: */g, h = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, v = /([\t\r\n ])*\f?&/g, w = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, N = /:(read-only)/g, I = /[svh]\w+-[tblr]{2}/, B = /\(\s*(.*)\s*\)/g, z = /([\s\S]*?);/g, W = /-self|flex-/g, $ = /[^]*?(:[rp][el]a[\w-]+)[^]*/, b = /stretch|:\s*\w+\-(?:conte|avail)/, k = /([^-])(image-set\()/, U = 1, x = 1, T = 0, S = 1, R = [], C = [], J = 0, ie = null, L = 0, F = "";
  return l.use = u, l.set = c, e !== void 0 && c(e), l;
}
var HM = {
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
function bh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qM = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ca = /* @__PURE__ */ bh(
  function(e) {
    return qM.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ei = {}, KM = {
  get exports() {
    return Ei;
  },
  set exports(e) {
    Ei = e;
  }
}, Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function GM() {
  if (Qc)
    return Fe;
  Qc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function j(I) {
    if (typeof I == "object" && I !== null) {
      var B = I.$$typeof;
      switch (B) {
        case t:
          switch (I = I.type, I) {
            case u:
            case c:
            case r:
            case o:
            case i:
            case f:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case a:
                case l:
                case h:
                case g:
                case s:
                  return I;
                default:
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function N(I) {
    return j(I) === c;
  }
  return Fe.AsyncMode = u, Fe.ConcurrentMode = c, Fe.ContextConsumer = a, Fe.ContextProvider = s, Fe.Element = t, Fe.ForwardRef = l, Fe.Fragment = r, Fe.Lazy = h, Fe.Memo = g, Fe.Portal = n, Fe.Profiler = o, Fe.StrictMode = i, Fe.Suspense = f, Fe.isAsyncMode = function(I) {
    return N(I) || j(I) === u;
  }, Fe.isConcurrentMode = N, Fe.isContextConsumer = function(I) {
    return j(I) === a;
  }, Fe.isContextProvider = function(I) {
    return j(I) === s;
  }, Fe.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === t;
  }, Fe.isForwardRef = function(I) {
    return j(I) === l;
  }, Fe.isFragment = function(I) {
    return j(I) === r;
  }, Fe.isLazy = function(I) {
    return j(I) === h;
  }, Fe.isMemo = function(I) {
    return j(I) === g;
  }, Fe.isPortal = function(I) {
    return j(I) === n;
  }, Fe.isProfiler = function(I) {
    return j(I) === o;
  }, Fe.isStrictMode = function(I) {
    return j(I) === i;
  }, Fe.isSuspense = function(I) {
    return j(I) === f;
  }, Fe.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === r || I === c || I === o || I === i || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === g || I.$$typeof === s || I.$$typeof === a || I.$$typeof === l || I.$$typeof === m || I.$$typeof === v || I.$$typeof === w || I.$$typeof === p);
  }, Fe.typeOf = j, Fe;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c;
function JM() {
  return $c || ($c = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function j(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === c || V === o || V === i || V === f || V === d || typeof V == "object" && V !== null && (V.$$typeof === h || V.$$typeof === g || V.$$typeof === s || V.$$typeof === a || V.$$typeof === l || V.$$typeof === m || V.$$typeof === v || V.$$typeof === w || V.$$typeof === p);
    }
    function N(V) {
      if (typeof V == "object" && V !== null) {
        var fe = V.$$typeof;
        switch (fe) {
          case t:
            var te = V.type;
            switch (te) {
              case u:
              case c:
              case r:
              case o:
              case i:
              case f:
                return te;
              default:
                var le = te && te.$$typeof;
                switch (le) {
                  case a:
                  case l:
                  case h:
                  case g:
                  case s:
                    return le;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var I = u, B = c, z = a, W = s, $ = t, b = l, k = r, U = h, x = g, T = n, S = o, R = i, C = f, J = !1;
    function ie(V) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(V) || N(V) === u;
    }
    function L(V) {
      return N(V) === c;
    }
    function F(V) {
      return N(V) === a;
    }
    function P(V) {
      return N(V) === s;
    }
    function q(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function K(V) {
      return N(V) === l;
    }
    function X(V) {
      return N(V) === r;
    }
    function O(V) {
      return N(V) === h;
    }
    function ne(V) {
      return N(V) === g;
    }
    function G(V) {
      return N(V) === n;
    }
    function he(V) {
      return N(V) === o;
    }
    function H(V) {
      return N(V) === i;
    }
    function Q(V) {
      return N(V) === f;
    }
    Ye.AsyncMode = I, Ye.ConcurrentMode = B, Ye.ContextConsumer = z, Ye.ContextProvider = W, Ye.Element = $, Ye.ForwardRef = b, Ye.Fragment = k, Ye.Lazy = U, Ye.Memo = x, Ye.Portal = T, Ye.Profiler = S, Ye.StrictMode = R, Ye.Suspense = C, Ye.isAsyncMode = ie, Ye.isConcurrentMode = L, Ye.isContextConsumer = F, Ye.isContextProvider = P, Ye.isElement = q, Ye.isForwardRef = K, Ye.isFragment = X, Ye.isLazy = O, Ye.isMemo = ne, Ye.isPortal = G, Ye.isProfiler = he, Ye.isStrictMode = H, Ye.isSuspense = Q, Ye.isValidElementType = j, Ye.typeOf = N;
  }()), Ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = GM() : e.exports = JM();
})(KM);
var Uu = Ei, ZM = {
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
}, XM = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ey = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ch = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fu = {};
Fu[Uu.ForwardRef] = ey;
Fu[Uu.Memo] = Ch;
function Wc(e) {
  return Uu.isMemo(e) ? Ch : Fu[e.$$typeof] || ZM;
}
var ty = Object.defineProperty, ny = Object.getOwnPropertyNames, Vc = Object.getOwnPropertySymbols, ry = Object.getOwnPropertyDescriptor, iy = Object.getPrototypeOf, Hc = Object.prototype;
function xh(e, t, n) {
  if (typeof t != "string") {
    if (Hc) {
      var r = iy(t);
      r && r !== Hc && xh(e, r, n);
    }
    var i = ny(t);
    Vc && (i = i.concat(Vc(t)));
    for (var o = Wc(e), s = Wc(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!XM[u] && !(n && n[u]) && !(s && s[u]) && !(o && o[u])) {
        var c = ry(t, u);
        try {
          ty(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var oy = xh;
function an() {
  return (an = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var qc = function(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, xa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ir.typeOf(e);
}, jo = Object.freeze([]), Sn = Object.freeze({});
function Ii(e) {
  return typeof e == "function";
}
function Oa(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Yu(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Bu = typeof window < "u" && "HTMLElement" in window, sy = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), ay = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function uy() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Fr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(uy.apply(void 0, [ay[e]].concat(n)).trim());
}
var cy = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, i = 0; i < n; i++)
      r += this.groupSizes[i];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, s = o; n >= s; )
        (s <<= 1) < 0 && Fr(16, "" + n);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(i), this.length = s;
      for (var a = o; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var u = this.indexOfGroup(n + 1), c = 0, l = r.length; c < l; c++)
      this.tag.insertRule(u, r[c]) && (this.groupSizes[n]++, u++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], i = this.indexOfGroup(n), o = i + r;
      this.groupSizes[n] = 0;
      for (var s = i; s < o; s++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0)
      return r;
    for (var i = this.groupSizes[n], o = this.indexOfGroup(n), s = o + i, a = o; a < s; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), vo = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Mi = 1, eo = function(e) {
  if (vo.has(e))
    return vo.get(e);
  for (; So.has(Mi); )
    Mi++;
  var t = Mi++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Fr(16, "" + t), vo.set(e, t), So.set(t, e), t;
}, ly = function(e) {
  return So.get(e);
}, fy = function(e, t) {
  t >= Mi && (Mi = t + 1), vo.set(e, t), So.set(t, e);
}, dy = "style[" + Lr + '][data-styled-version="5.3.10"]', hy = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), gy = function(e, t, n) {
  for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
    (r = i[o]) && e.registerName(t, r);
}, py = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, o = n.length; i < o; i++) {
    var s = n[i].trim();
    if (s) {
      var a = s.match(hy);
      if (a) {
        var u = 0 | parseInt(a[1], 10), c = a[2];
        u !== 0 && (fy(c, u), gy(e, c, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, My = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Oh = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), i = function(a) {
    for (var u = a.childNodes, c = u.length; c >= 0; c--) {
      var l = u[c];
      if (l && l.nodeType === 1 && l.hasAttribute(Lr))
        return l;
    }
  }(n), o = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(Lr, "active"), r.setAttribute("data-styled-version", "5.3.10");
  var s = My();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
}, yy = function() {
  function e(n) {
    var r = this.element = Oh(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, s = 0, a = o.length; s < a; s++) {
        var u = o[s];
        if (u.ownerNode === i)
          return u;
      }
      Fr(17);
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
}(), my = function() {
  function e(n) {
    var r = this.element = Oh(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var i = document.createTextNode(r), o = this.nodes[n];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), vy = function() {
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
}(), Kc = Bu, wy = { isServer: !Bu, useCSSOMInjection: !sy }, Lh = function() {
  function e(n, r, i) {
    n === void 0 && (n = Sn), r === void 0 && (r = {}), this.options = an({}, wy, {}, n), this.gs = r, this.names = new Map(i), this.server = !!n.isServer, !this.server && Bu && Kc && (Kc = !1, function(o) {
      for (var s = document.querySelectorAll(dy), a = 0, u = s.length; a < u; a++) {
        var c = s[a];
        c && c.getAttribute(Lr) !== "active" && (py(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(n) {
    return eo(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(an({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (r = this.options).isServer, o = r.useCSSOMInjection, s = r.target, n = i ? new vy(s) : o ? new yy(s) : new my(s), new cy(n)));
    var n, r, i, o, s;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (eo(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(r), this.names.set(n, i);
    }
  }, t.insertRules = function(n, r, i) {
    this.registerName(n, r), this.getTag().insertRules(eo(n), i);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(eo(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), i = r.length, o = "", s = 0; s < i; s++) {
        var a = ly(s);
        if (a !== void 0) {
          var u = n.names.get(a), c = r.getGroup(s);
          if (u && c && u.size) {
            var l = Lr + ".g" + s + '[id="' + a + '"]', f = "";
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
}(), Dy = /(a)(d)/gi, Gc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function La(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Gc(t % 52) + n;
  return (Gc(t % 52) + n).replace(Dy, "$1-$2");
}
var $n = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, _h = function(e) {
  return $n(5381, e);
};
function Ay(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ii(n) && !Yu(n))
      return !1;
  }
  return !0;
}
var Ey = _h("5.3.10"), Iy = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ay(t), this.componentId = n, this.baseHash = $n(Ey, n), this.baseStyle = r, Lh.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = _r(this.rules, t, n, r).join(""), a = La($n(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(i, a)) {
          var u = r(s, "." + a, void 0, i);
          n.insertRules(i, a, u);
        }
        o.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, l = $n(this.baseHash, r.hash), f = "", d = 0; d < c; d++) {
        var g = this.rules[d];
        if (typeof g == "string")
          f += g, process.env.NODE_ENV !== "production" && (l = $n(l, g + d));
        else if (g) {
          var h = _r(g, t, n, r), p = Array.isArray(h) ? h.join("") : h;
          l = $n(l, p + d), f += p;
        }
      }
      if (f) {
        var m = La(l >>> 0);
        if (!n.hasNameForId(i, m)) {
          var v = r(f, "." + m, void 0, i);
          n.insertRules(i, m, v);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), Ny = /^\s*\/\/.*$/gm, Ty = [":", "[", ".", "#"];
function jy(e) {
  var t, n, r, i, o = e === void 0 ? Sn : e, s = o.options, a = s === void 0 ? Sn : s, u = o.plugins, c = u === void 0 ? jo : u, l = new VM(a), f = [], d = function(p) {
    function m(v) {
      if (v)
        try {
          p(v + "}");
        } catch {
        }
    }
    return function(v, w, j, N, I, B, z, W, $, b) {
      switch (v) {
        case 1:
          if ($ === 0 && w.charCodeAt(0) === 64)
            return p(w + ";"), "";
          break;
        case 2:
          if (W === 0)
            return w + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return p(j[0] + w), "";
            default:
              return w + (b === 0 ? "/*|*/" : "");
          }
        case -2:
          w.split("/*|*/}").forEach(m);
      }
    };
  }(function(p) {
    f.push(p);
  }), g = function(p, m, v) {
    return m === 0 && Ty.indexOf(v[n.length]) !== -1 || v.match(i) ? p : "." + t;
  };
  function h(p, m, v, w) {
    w === void 0 && (w = "&");
    var j = p.replace(Ny, ""), N = m && v ? v + " " + m + " { " + j + " }" : j;
    return t = w, n = m, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), l(v || !m ? "" : m, N);
  }
  return l.use([].concat(c, [function(p, m, v) {
    p === 2 && v.length && v[0].lastIndexOf(n) > 0 && (v[0] = v[0].replace(r, g));
  }, d, function(p) {
    if (p === -2) {
      var m = f;
      return f = [], m;
    }
  }])), h.hash = c.length ? c.reduce(function(p, m) {
    return m.name || Fr(15), $n(p, m.name);
  }, 5381).toString() : "", h;
}
var kh = Te.createContext();
kh.Consumer;
var zh = Te.createContext(), Sy = (zh.Consumer, new Lh()), _a = jy();
function by() {
  return gt(kh) || Sy;
}
function Cy() {
  return gt(zh) || _a;
}
var xy = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(i, o) {
      o === void 0 && (o = _a);
      var s = r.name + o.hash;
      i.hasNameForId(r.id, s) || i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Fr(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = _a), this.name + t.hash;
  }, e;
}(), Oy = /([A-Z])/, Ly = /([A-Z])/g, _y = /^ms-/, ky = function(e) {
  return "-" + e.toLowerCase();
};
function Jc(e) {
  return Oy.test(e) ? e.replace(Ly, ky).replace(_y, "-ms-") : e;
}
var Zc = function(e) {
  return e == null || e === !1 || e === "";
};
function _r(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, o = [], s = 0, a = e.length; s < a; s += 1)
      (i = _r(e[s], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Zc(e))
    return "";
  if (Yu(e))
    return "." + e.styledComponentId;
  if (Ii(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && ir.isElement(u) && console.warn(Oa(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _r(u, t, n, r);
  }
  var c;
  return e instanceof xy ? n ? (e.inject(n, r), e.getName(r)) : e : xa(e) ? function l(f, d) {
    var g, h, p = [];
    for (var m in f)
      f.hasOwnProperty(m) && !Zc(f[m]) && (Array.isArray(f[m]) && f[m].isCss || Ii(f[m]) ? p.push(Jc(m) + ":", f[m], ";") : xa(f[m]) ? p.push.apply(p, l(f[m], m)) : p.push(Jc(m) + ": " + (g = m, (h = f[m]) == null || typeof h == "boolean" || h === "" ? "" : typeof h != "number" || h === 0 || g in HM || g.startsWith("--") ? String(h).trim() : h + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Xc = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function zy(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return Ii(e) || xa(e) ? Xc(_r(qc(jo, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Xc(_r(qc(e, n)));
}
var el = /invalid hook call/i, to = /* @__PURE__ */ new Set(), Py = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (el.test(o))
          i = !1, to.delete(n);
        else {
          for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
            a[u - 1] = arguments[u];
          r.apply(void 0, [o].concat(a));
        }
      }, tt(), i && !to.has(n) && (console.warn(n), to.add(n));
    } catch (o) {
      el.test(o.message) && to.delete(n);
    } finally {
      console.error = r;
    }
  }
}, Ry = function(e, t, n) {
  return n === void 0 && (n = Sn), e.theme !== n.theme && e.theme || t || n.theme;
}, Uy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fy = /(^-|-$)/g;
function Us(e) {
  return e.replace(Uy, "-").replace(Fy, "");
}
var Yy = function(e) {
  return La(_h(e) >>> 0);
};
function no(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ka = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, By = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Qy(e, t, n) {
  var r = e[n];
  ka(t) && ka(r) ? Ph(r, t) : e[n] = t;
}
function Ph(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i];
    if (ka(s))
      for (var a in s)
        By(a) && Qy(e, s[a], a);
  }
  return e;
}
var Rh = Te.createContext();
Rh.Consumer;
var Fs = {};
function Uh(e, t, n) {
  var r = Yu(e), i = !no(e), o = t.attrs, s = o === void 0 ? jo : o, a = t.componentId, u = a === void 0 ? function(w, j) {
    var N = typeof w != "string" ? "sc" : Us(w);
    Fs[N] = (Fs[N] || 0) + 1;
    var I = N + "-" + Yy("5.3.10" + N + Fs[N]);
    return j ? j + "-" + I : I;
  }(t.displayName, t.parentComponentId) : a, c = t.displayName, l = c === void 0 ? function(w) {
    return no(w) ? "styled." + w : "Styled(" + Oa(w) + ")";
  }(e) : c, f = t.displayName && t.componentId ? Us(t.displayName) + "-" + t.componentId : t.componentId || u, d = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, g = t.shouldForwardProp;
  r && e.shouldForwardProp && (g = t.shouldForwardProp ? function(w, j, N) {
    return e.shouldForwardProp(w, j, N) && t.shouldForwardProp(w, j, N);
  } : e.shouldForwardProp);
  var h, p = new Iy(n, f, r ? e.componentStyle : void 0), m = p.isStatic && s.length === 0, v = function(w, j) {
    return function(N, I, B, z) {
      var W = N.attrs, $ = N.componentStyle, b = N.defaultProps, k = N.foldedComponentIds, U = N.shouldForwardProp, x = N.styledComponentId, T = N.target;
      process.env.NODE_ENV !== "production" && Uc(x);
      var S = function(X, O, ne) {
        X === void 0 && (X = Sn);
        var G = an({}, O, { theme: X }), he = {};
        return ne.forEach(function(H) {
          var Q, V, fe, te = H;
          for (Q in Ii(te) && (te = te(G)), te)
            G[Q] = he[Q] = Q === "className" ? (V = he[Q], fe = te[Q], V && fe ? V + " " + fe : V || fe) : te[Q];
        }), [G, he];
      }(Ry(I, gt(Rh), b) || Sn, I, W), R = S[0], C = S[1], J = function(X, O, ne, G) {
        var he = by(), H = Cy(), Q = O ? X.generateAndInjectStyles(Sn, he, H) : X.generateAndInjectStyles(ne, he, H);
        return process.env.NODE_ENV !== "production" && Uc(Q), process.env.NODE_ENV !== "production" && !O && G && G(Q), Q;
      }($, z, R, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), ie = B, L = C.$as || I.$as || C.as || I.as || T, F = no(L), P = C !== I ? an({}, I, {}, C) : I, q = {};
      for (var K in P)
        K[0] !== "$" && K !== "as" && (K === "forwardedAs" ? q.as = P[K] : (U ? U(K, Ca, L) : !F || Ca(K)) && (q[K] = P[K]));
      return I.style && C.style !== I.style && (q.style = an({}, I.style, {}, C.style)), q.className = Array.prototype.concat(k, x, J !== x ? J : null, I.className, C.className).filter(Boolean).join(" "), q.ref = ie, wt(L, q);
    }(h, w, j, m);
  };
  return v.displayName = l, (h = Te.forwardRef(v)).attrs = d, h.componentStyle = p, h.displayName = l, h.shouldForwardProp = g, h.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : jo, h.styledComponentId = f, h.target = r ? e.target : e, h.withComponent = function(w) {
    var j = t.componentId, N = function(B, z) {
      if (B == null)
        return {};
      var W, $, b = {}, k = Object.keys(B);
      for ($ = 0; $ < k.length; $++)
        W = k[$], z.indexOf(W) >= 0 || (b[W] = B[W]);
      return b;
    }(t, ["componentId"]), I = j && j + "-" + (no(w) ? w : Us(Oa(w)));
    return Uh(w, an({}, N, { attrs: d, componentId: I }), n);
  }, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = r ? Ph({}, e.defaultProps, w) : w;
  } }), process.env.NODE_ENV !== "production" && (Py(l, f), h.warnTooManyClasses = function(w, j) {
    var N = {}, I = !1;
    return function(B) {
      if (!I && (N[B] = !0, Object.keys(N).length >= 200)) {
        var z = j ? ' with the id of "' + j + '"' : "";
        console.warn("Over 200 classes were generated for component " + w + z + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), I = !0, N = {};
      }
    };
  }(l, f)), Object.defineProperty(h, "toString", { value: function() {
    return "." + h.styledComponentId;
  } }), i && oy(h, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), h;
}
var za = function(e) {
  return function t(n, r, i) {
    if (i === void 0 && (i = Sn), !ir.isValidElementType(r))
      return Fr(1, String(r));
    var o = function() {
      return n(r, i, zy.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return t(n, r, an({}, i, {}, s));
    }, o.attrs = function(s) {
      return t(n, r, an({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, o;
  }(Uh, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  za[e] = za(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const ts = za, Fh = ts("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`, _4 = ts("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`, k4 = ts(Fh)`
  background-image: url(${(e) => e.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`, $y = ts("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
var ge = {}, Wy = {
  get exports() {
    return ge;
  },
  set exports(e) {
    ge = e;
  }
}, Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl;
function Vy() {
  if (tl)
    return Gr;
  tl = 1;
  var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, u, c) {
    var l, f = {}, d = null, g = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (g = u.ref);
    for (l in u)
      r.call(u, l) && !o.hasOwnProperty(l) && (f[l] = u[l]);
    if (a && a.defaultProps)
      for (l in u = a.defaultProps, u)
        f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: a, key: d, ref: g, props: f, _owner: i.current };
  }
  return Gr.Fragment = n, Gr.jsx = s, Gr.jsxs = s, Gr;
}
var Jr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;
function Hy() {
  return nl || (nl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, p = "@@iterator";
    function m(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ce = h && _[h] || _[p];
      return typeof ce == "function" ? ce : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(_) {
      {
        for (var ce = arguments.length, ye = new Array(ce > 1 ? ce - 1 : 0), Ae = 1; Ae < ce; Ae++)
          ye[Ae - 1] = arguments[Ae];
        j("error", _, ye);
      }
    }
    function j(_, ce, ye) {
      {
        var Ae = v.ReactDebugCurrentFrame, Le = Ae.getStackAddendum();
        Le !== "" && (ce += "%s", ye = ye.concat([Le]));
        var He = ye.map(function(Oe) {
          return String(Oe);
        });
        He.unshift("Warning: " + ce), Function.prototype.apply.call(console[_], console, He);
      }
    }
    var N = !1, I = !1, B = !1, z = !1, W = !1, $;
    $ = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || W || _ === i || _ === c || _ === l || z || _ === g || N || I || B || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === f || _.$$typeof === s || _.$$typeof === a || _.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === $ || _.getModuleId !== void 0));
    }
    function k(_, ce, ye) {
      var Ae = _.displayName;
      if (Ae)
        return Ae;
      var Le = ce.displayName || ce.name || "";
      return Le !== "" ? ye + "(" + Le + ")" : ye;
    }
    function U(_) {
      return _.displayName || "Context";
    }
    function x(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case r:
          return "Fragment";
        case n:
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
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var ce = _;
            return U(ce) + ".Consumer";
          case s:
            var ye = _;
            return U(ye._context) + ".Provider";
          case u:
            return k(_, _.render, "ForwardRef");
          case f:
            var Ae = _.displayName || null;
            return Ae !== null ? Ae : x(_.type) || "Memo";
          case d: {
            var Le = _, He = Le._payload, Oe = Le._init;
            try {
              return x(Oe(He));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, S = 0, R, C, J, ie, L, F, P;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function K() {
      {
        if (S === 0) {
          R = console.log, C = console.info, J = console.warn, ie = console.error, L = console.group, F = console.groupCollapsed, P = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        S++;
      }
    }
    function X() {
      {
        if (S--, S === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, _, {
              value: R
            }),
            info: T({}, _, {
              value: C
            }),
            warn: T({}, _, {
              value: J
            }),
            error: T({}, _, {
              value: ie
            }),
            group: T({}, _, {
              value: L
            }),
            groupCollapsed: T({}, _, {
              value: F
            }),
            groupEnd: T({}, _, {
              value: P
            })
          });
        }
        S < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = v.ReactCurrentDispatcher, ne;
    function G(_, ce, ye) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Le) {
            var Ae = Le.stack.trim().match(/\n( *(at )?)/);
            ne = Ae && Ae[1] || "";
          }
        return `
` + ne + _;
      }
    }
    var he = !1, H;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Q();
    }
    function V(_, ce) {
      if (!_ || he)
        return "";
      {
        var ye = H.get(_);
        if (ye !== void 0)
          return ye;
      }
      var Ae;
      he = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var He;
      He = O.current, O.current = null, K();
      try {
        if (ce) {
          var Oe = function() {
            throw Error();
          };
          if (Object.defineProperty(Oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Oe, []);
            } catch (nn) {
              Ae = nn;
            }
            Reflect.construct(_, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (nn) {
              Ae = nn;
            }
            _.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nn) {
            Ae = nn;
          }
          _();
        }
      } catch (nn) {
        if (nn && Ae && typeof nn.stack == "string") {
          for (var be = nn.stack.split(`
`), yt = Ae.stack.split(`
`), nt = be.length - 1, it = yt.length - 1; nt >= 1 && it >= 0 && be[nt] !== yt[it]; )
            it--;
          for (; nt >= 1 && it >= 0; nt--, it--)
            if (be[nt] !== yt[it]) {
              if (nt !== 1 || it !== 1)
                do
                  if (nt--, it--, it < 0 || be[nt] !== yt[it]) {
                    var bt = `
` + be[nt].replace(" at new ", " at ");
                    return _.displayName && bt.includes("<anonymous>") && (bt = bt.replace("<anonymous>", _.displayName)), typeof _ == "function" && H.set(_, bt), bt;
                  }
                while (nt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        he = !1, O.current = He, X(), Error.prepareStackTrace = Le;
      }
      var dr = _ ? _.displayName || _.name : "", Rc = dr ? G(dr) : "";
      return typeof _ == "function" && H.set(_, Rc), Rc;
    }
    function fe(_, ce, ye) {
      return V(_, !1);
    }
    function te(_) {
      var ce = _.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function le(_, ce, ye) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return V(_, te(_));
      if (typeof _ == "string")
        return G(_);
      switch (_) {
        case c:
          return G("Suspense");
        case l:
          return G("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case u:
            return fe(_.render);
          case f:
            return le(_.type, ce, ye);
          case d: {
            var Ae = _, Le = Ae._payload, He = Ae._init;
            try {
              return le(He(Le), ce, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, de = {}, E = v.ReactDebugCurrentFrame;
    function y(_) {
      if (_) {
        var ce = _._owner, ye = le(_.type, _._source, ce ? ce.type : null);
        E.setExtraStackFrame(ye);
      } else
        E.setExtraStackFrame(null);
    }
    function M(_, ce, ye, Ae, Le) {
      {
        var He = Function.call.bind(Me);
        for (var Oe in _)
          if (He(_, Oe)) {
            var be = void 0;
            try {
              if (typeof _[Oe] != "function") {
                var yt = Error((Ae || "React class") + ": " + ye + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              be = _[Oe](ce, Oe, Ae, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              be = nt;
            }
            be && !(be instanceof Error) && (y(Le), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ae || "React class", ye, Oe, typeof be), y(null)), be instanceof Error && !(be.message in de) && (de[be.message] = !0, y(Le), w("Failed %s type: %s", ye, be.message), y(null));
          }
      }
    }
    var A = Array.isArray;
    function Y(_) {
      return A(_);
    }
    function ee(_) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, ye = ce && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ye;
      }
    }
    function Z(_) {
      try {
        return ve(_), !1;
      } catch {
        return !0;
      }
    }
    function ve(_) {
      return "" + _;
    }
    function Ce(_) {
      if (Z(_))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(_)), ve(_);
    }
    var Se = v.ReactCurrentOwner, Pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, De, tn;
    tn = {};
    function lr(_) {
      if (Me.call(_, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Xi(_) {
      if (Me.call(_, "key")) {
        var ce = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function xc(_, ce) {
      if (typeof _.ref == "string" && Se.current && ce && Se.current.stateNode !== ce) {
        var ye = x(Se.current.type);
        tn[ye] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Se.current.type), _.ref), tn[ye] = !0);
      }
    }
    function NM(_, ce) {
      {
        var ye = function() {
          Ve || (Ve = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        ye.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function TM(_, ce) {
      {
        var ye = function() {
          De || (De = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        ye.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var jM = function(_, ce, ye, Ae, Le, He, Oe) {
      var be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: ce,
        ref: ye,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: He
      };
      return be._store = {}, Object.defineProperty(be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.defineProperty(be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(be.props), Object.freeze(be)), be;
    };
    function SM(_, ce, ye, Ae, Le) {
      {
        var He, Oe = {}, be = null, yt = null;
        ye !== void 0 && (Ce(ye), be = "" + ye), Xi(ce) && (Ce(ce.key), be = "" + ce.key), lr(ce) && (yt = ce.ref, xc(ce, Le));
        for (He in ce)
          Me.call(ce, He) && !Pe.hasOwnProperty(He) && (Oe[He] = ce[He]);
        if (_ && _.defaultProps) {
          var nt = _.defaultProps;
          for (He in nt)
            Oe[He] === void 0 && (Oe[He] = nt[He]);
        }
        if (be || yt) {
          var it = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          be && NM(Oe, it), yt && TM(Oe, it);
        }
        return jM(_, be, yt, Le, Ae, Se.current, Oe);
      }
    }
    var zs = v.ReactCurrentOwner, Oc = v.ReactDebugCurrentFrame;
    function fr(_) {
      if (_) {
        var ce = _._owner, ye = le(_.type, _._source, ce ? ce.type : null);
        Oc.setExtraStackFrame(ye);
      } else
        Oc.setExtraStackFrame(null);
    }
    var Ps;
    Ps = !1;
    function Rs(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Lc() {
      {
        if (zs.current) {
          var _ = x(zs.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function bM(_) {
      {
        if (_ !== void 0) {
          var ce = _.fileName.replace(/^.*[\\\/]/, ""), ye = _.lineNumber;
          return `

Check your code at ` + ce + ":" + ye + ".";
        }
        return "";
      }
    }
    var _c = {};
    function CM(_) {
      {
        var ce = Lc();
        if (!ce) {
          var ye = typeof _ == "string" ? _ : _.displayName || _.name;
          ye && (ce = `

Check the top-level render call using <` + ye + ">.");
        }
        return ce;
      }
    }
    function kc(_, ce) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ye = CM(ce);
        if (_c[ye])
          return;
        _c[ye] = !0;
        var Ae = "";
        _ && _._owner && _._owner !== zs.current && (Ae = " It was passed a child from " + x(_._owner.type) + "."), fr(_), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Ae), fr(null);
      }
    }
    function zc(_, ce) {
      {
        if (typeof _ != "object")
          return;
        if (Y(_))
          for (var ye = 0; ye < _.length; ye++) {
            var Ae = _[ye];
            Rs(Ae) && kc(Ae, ce);
          }
        else if (Rs(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Le = m(_);
          if (typeof Le == "function" && Le !== _.entries)
            for (var He = Le.call(_), Oe; !(Oe = He.next()).done; )
              Rs(Oe.value) && kc(Oe.value, ce);
        }
      }
    }
    function xM(_) {
      {
        var ce = _.type;
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
          M(ye, _.props, "prop", Ae, _);
        } else if (ce.PropTypes !== void 0 && !Ps) {
          Ps = !0;
          var Le = x(ce);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function OM(_) {
      {
        for (var ce = Object.keys(_.props), ye = 0; ye < ce.length; ye++) {
          var Ae = ce[ye];
          if (Ae !== "children" && Ae !== "key") {
            fr(_), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ae), fr(null);
            break;
          }
        }
        _.ref !== null && (fr(_), w("Invalid attribute `ref` supplied to `React.Fragment`."), fr(null));
      }
    }
    function Pc(_, ce, ye, Ae, Le, He) {
      {
        var Oe = b(_);
        if (!Oe) {
          var be = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = bM(Le);
          yt ? be += yt : be += Lc();
          var nt;
          _ === null ? nt = "null" : Y(_) ? nt = "array" : _ !== void 0 && _.$$typeof === t ? (nt = "<" + (x(_.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof _, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, be);
        }
        var it = SM(_, ce, ye, Le, He);
        if (it == null)
          return it;
        if (Oe) {
          var bt = ce.children;
          if (bt !== void 0)
            if (Ae)
              if (Y(bt)) {
                for (var dr = 0; dr < bt.length; dr++)
                  zc(bt[dr], _);
                Object.freeze && Object.freeze(bt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zc(bt, _);
        }
        return _ === r ? OM(it) : xM(it), it;
      }
    }
    function LM(_, ce, ye) {
      return Pc(_, ce, ye, !0);
    }
    function _M(_, ce, ye) {
      return Pc(_, ce, ye, !1);
    }
    var kM = _M, zM = LM;
    Jr.Fragment = r, Jr.jsx = kM, Jr.jsxs = zM;
  }()), Jr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vy() : e.exports = Hy();
})(Wy);
var bo = {}, qy = {
  get exports() {
    return bo;
  },
  set exports(e) {
    bo = e;
  }
}, or = {}, D = {}, rl = {
  get exports() {
    return D;
  },
  set exports(e) {
    D = e;
  }
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ys, il;
function Ky() {
  if (il)
    return Ys;
  il = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
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
  return Ys = i() ? Object.assign : function(o, s) {
    for (var a, u = r(o), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var f in a)
        t.call(a, f) && (u[f] = a[f]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          n.call(a, c[d]) && (u[c[d]] = a[c[d]]);
      }
    }
    return u;
  }, Ys;
}
var Bs, ol;
function Qu() {
  if (ol)
    return Bs;
  ol = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bs = e, Bs;
}
var Qs, sl;
function Yh() {
  return sl || (sl = 1, Qs = Function.call.bind(Object.prototype.hasOwnProperty)), Qs;
}
var $s, al;
function Gy() {
  if (al)
    return $s;
  al = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qu(), n = {}, r = Yh();
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
        if (r(o, l)) {
          var f;
          try {
            if (typeof o[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = o[l](s, l, u, a, null, t);
          } catch (h) {
            f = h;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + a + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, $s = i, $s;
}
var Ws, ul;
function Jy() {
  if (ul)
    return Ws;
  ul = 1;
  var e = Ei, t = Ky(), n = Qu(), r = Yh(), i = Gy(), o = function() {
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
  return Ws = function(a, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(L) {
      var F = L && (c && L[c] || L[l]);
      if (typeof F == "function")
        return F;
    }
    var d = "<<anonymous>>", g = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: w(),
      arrayOf: j,
      element: N(),
      elementType: I(),
      instanceOf: B,
      node: b(),
      objectOf: W,
      oneOf: z,
      oneOfType: $,
      shape: U,
      exact: x
    };
    function h(L, F) {
      return L === F ? L !== 0 || 1 / L === 1 / F : L !== L && F !== F;
    }
    function p(L, F) {
      this.message = L, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function m(L) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, P = 0;
      function q(X, O, ne, G, he, H, Q) {
        if (G = G || d, H = H || ne, Q !== n) {
          if (u) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = G + ":" + ne;
            !F[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[fe] = !0, P++);
          }
        }
        return O[ne] == null ? X ? O[ne] === null ? new p("The " + he + " `" + H + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new p("The " + he + " `" + H + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : L(O, ne, G, he, H);
      }
      var K = q.bind(null, !1);
      return K.isRequired = q.bind(null, !0), K;
    }
    function v(L) {
      function F(P, q, K, X, O, ne) {
        var G = P[q], he = R(G);
        if (he !== L) {
          var H = C(G);
          return new p(
            "Invalid " + X + " `" + O + "` of type " + ("`" + H + "` supplied to `" + K + "`, expected ") + ("`" + L + "`."),
            { expectedType: L }
          );
        }
        return null;
      }
      return m(F);
    }
    function w() {
      return m(s);
    }
    function j(L) {
      function F(P, q, K, X, O) {
        if (typeof L != "function")
          return new p("Property `" + O + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var ne = P[q];
        if (!Array.isArray(ne)) {
          var G = R(ne);
          return new p("Invalid " + X + " `" + O + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected an array."));
        }
        for (var he = 0; he < ne.length; he++) {
          var H = L(ne, he, K, X, O + "[" + he + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return m(F);
    }
    function N() {
      function L(F, P, q, K, X) {
        var O = F[P];
        if (!a(O)) {
          var ne = R(O);
          return new p("Invalid " + K + " `" + X + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(L);
    }
    function I() {
      function L(F, P, q, K, X) {
        var O = F[P];
        if (!e.isValidElementType(O)) {
          var ne = R(O);
          return new p("Invalid " + K + " `" + X + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(L);
    }
    function B(L) {
      function F(P, q, K, X, O) {
        if (!(P[q] instanceof L)) {
          var ne = L.name || d, G = ie(P[q]);
          return new p("Invalid " + X + " `" + O + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return m(F);
    }
    function z(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function F(P, q, K, X, O) {
        for (var ne = P[q], G = 0; G < L.length; G++)
          if (h(ne, L[G]))
            return null;
        var he = JSON.stringify(L, function(Q, V) {
          var fe = C(V);
          return fe === "symbol" ? String(V) : V;
        });
        return new p("Invalid " + X + " `" + O + "` of value `" + String(ne) + "` " + ("supplied to `" + K + "`, expected one of " + he + "."));
      }
      return m(F);
    }
    function W(L) {
      function F(P, q, K, X, O) {
        if (typeof L != "function")
          return new p("Property `" + O + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var ne = P[q], G = R(ne);
        if (G !== "object")
          return new p("Invalid " + X + " `" + O + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected an object."));
        for (var he in ne)
          if (r(ne, he)) {
            var H = L(ne, he, K, X, O + "." + he, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return m(F);
    }
    function $(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var F = 0; F < L.length; F++) {
        var P = L[F];
        if (typeof P != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(P) + " at index " + F + "."
          ), s;
      }
      function q(K, X, O, ne, G) {
        for (var he = [], H = 0; H < L.length; H++) {
          var Q = L[H], V = Q(K, X, O, ne, G, n);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && he.push(V.data.expectedType);
        }
        var fe = he.length > 0 ? ", expected one of type [" + he.join(", ") + "]" : "";
        return new p("Invalid " + ne + " `" + G + "` supplied to " + ("`" + O + "`" + fe + "."));
      }
      return m(q);
    }
    function b() {
      function L(F, P, q, K, X) {
        return T(F[P]) ? null : new p("Invalid " + K + " `" + X + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return m(L);
    }
    function k(L, F, P, q, K) {
      return new p(
        (L || "React class") + ": " + F + " type `" + P + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function U(L) {
      function F(P, q, K, X, O) {
        var ne = P[q], G = R(ne);
        if (G !== "object")
          return new p("Invalid " + X + " `" + O + "` of type `" + G + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var he in L) {
          var H = L[he];
          if (typeof H != "function")
            return k(K, X, O, he, C(H));
          var Q = H(ne, he, K, X, O + "." + he, n);
          if (Q)
            return Q;
        }
        return null;
      }
      return m(F);
    }
    function x(L) {
      function F(P, q, K, X, O) {
        var ne = P[q], G = R(ne);
        if (G !== "object")
          return new p("Invalid " + X + " `" + O + "` of type `" + G + "` " + ("supplied to `" + K + "`, expected `object`."));
        var he = t({}, P[q], L);
        for (var H in he) {
          var Q = L[H];
          if (r(L, H) && typeof Q != "function")
            return k(K, X, O, H, C(Q));
          if (!Q)
            return new p(
              "Invalid " + X + " `" + O + "` key `" + H + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(P[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(L), null, "  ")
            );
          var V = Q(ne, H, K, X, O + "." + H, n);
          if (V)
            return V;
        }
        return null;
      }
      return m(F);
    }
    function T(L) {
      switch (typeof L) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !L;
        case "object":
          if (Array.isArray(L))
            return L.every(T);
          if (L === null || a(L))
            return !0;
          var F = f(L);
          if (F) {
            var P = F.call(L), q;
            if (F !== L.entries) {
              for (; !(q = P.next()).done; )
                if (!T(q.value))
                  return !1;
            } else
              for (; !(q = P.next()).done; ) {
                var K = q.value;
                if (K && !T(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function S(L, F) {
      return L === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function R(L) {
      var F = typeof L;
      return Array.isArray(L) ? "array" : L instanceof RegExp ? "object" : S(F, L) ? "symbol" : F;
    }
    function C(L) {
      if (typeof L > "u" || L === null)
        return "" + L;
      var F = R(L);
      if (F === "object") {
        if (L instanceof Date)
          return "date";
        if (L instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function J(L) {
      var F = C(L);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function ie(L) {
      return !L.constructor || !L.constructor.name ? d : L.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, Ws;
}
var Vs, cl;
function Zy() {
  if (cl)
    return Vs;
  cl = 1;
  var e = Qu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Vs = function() {
    function r(s, a, u, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, Vs;
}
if (process.env.NODE_ENV !== "production") {
  var Xy = Ei, em = !0;
  rl.exports = Jy()(Xy.isElement, em);
} else
  rl.exports = Zy()();
var Co = {}, tm = {
  get exports() {
    return Co;
  },
  set exports(e) {
    Co = e;
  }
}, Wt = {}, Ni = {}, nm = {
  get exports() {
    return Ni;
  },
  set exports(e) {
    Ni = e;
  }
};
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
  var n = "none", r = "contents", i = /input|select|textarea|button|object|iframe/;
  function o(f, d) {
    return d.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    f.scrollWidth <= 0 && f.scrollHeight <= 0;
  }
  function s(f) {
    var d = f.offsetWidth <= 0 && f.offsetHeight <= 0;
    if (d && !f.innerHTML)
      return !0;
    try {
      var g = window.getComputedStyle(f), h = g.getPropertyValue("display");
      return d ? h !== r && o(f, g) : h === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function a(f) {
    for (var d = f, g = f.getRootNode && f.getRootNode(); d && d !== document.body; ) {
      if (g && d === g && (d = g.host.parentNode), s(d))
        return !1;
      d = d.parentNode;
    }
    return !0;
  }
  function u(f, d) {
    var g = f.nodeName.toLowerCase(), h = i.test(g) && !f.disabled || g === "a" && f.href || d;
    return h && a(f);
  }
  function c(f) {
    var d = f.getAttribute("tabindex");
    d === null && (d = void 0);
    var g = isNaN(d);
    return (g || d >= 0) && u(f, !g);
  }
  function l(f) {
    var d = [].slice.call(f.querySelectorAll("*"), 0).reduce(function(g, h) {
      return g.concat(h.shadowRoot ? l(h.shadowRoot) : [h]);
    }, []);
    return d.filter(c);
  }
  e.exports = t.default;
})(nm, Ni);
Object.defineProperty(Wt, "__esModule", {
  value: !0
});
Wt.resetState = sm;
Wt.log = am;
Wt.handleBlur = Ti;
Wt.handleFocus = ji;
Wt.markForFocusLater = um;
Wt.returnFocus = cm;
Wt.popWithoutFocus = lm;
Wt.setupScopedFocus = fm;
Wt.teardownScopedFocus = dm;
var rm = Ni, im = om(rm);
function om(e) {
  return e && e.__esModule ? e : { default: e };
}
var sr = [], Nr = null, Pa = !1;
function sm() {
  sr = [];
}
function am() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), sr.forEach(function(e) {
    var t = e || {};
    console.log(t.nodeName, t.className, t.id);
  }), console.log("end focusManager ----------"));
}
function Ti() {
  Pa = !0;
}
function ji() {
  if (Pa) {
    if (Pa = !1, !Nr)
      return;
    setTimeout(function() {
      if (!Nr.contains(document.activeElement)) {
        var e = (0, im.default)(Nr)[0] || Nr;
        e.focus();
      }
    }, 0);
  }
}
function um() {
  sr.push(document.activeElement);
}
function cm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = null;
  try {
    sr.length !== 0 && (t = sr.pop(), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
  }
}
function lm() {
  sr.length > 0 && sr.pop();
}
function fm(e) {
  Nr = e, window.addEventListener ? (window.addEventListener("blur", Ti, !1), document.addEventListener("focus", ji, !0)) : (window.attachEvent("onBlur", Ti), document.attachEvent("onFocus", ji));
}
function dm() {
  Nr = null, window.addEventListener ? (window.removeEventListener("blur", Ti), document.removeEventListener("focus", ji)) : (window.detachEvent("onBlur", Ti), document.detachEvent("onFocus", ji));
}
var xo = {}, hm = {
  get exports() {
    return xo;
  },
  set exports(e) {
    xo = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = Ni, r = i(n);
  function i(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return a.activeElement.shadowRoot ? o(a.activeElement.shadowRoot) : a.activeElement;
  }
  function s(a, u) {
    var c = (0, r.default)(a);
    if (!c.length) {
      u.preventDefault();
      return;
    }
    var l = void 0, f = u.shiftKey, d = c[0], g = c[c.length - 1], h = o();
    if (a === h) {
      if (!f)
        return;
      l = g;
    }
    if (g === h && !f && (l = d), d === h && f && (l = g), l) {
      u.preventDefault(), l.focus();
      return;
    }
    var p = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), m = p != null && p[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (m) {
      var v = c.indexOf(h);
      if (v > -1 && (v += f ? -1 : 1), l = c[v], typeof l > "u") {
        u.preventDefault(), l = f ? g : d, l.focus();
        return;
      }
      u.preventDefault(), l.focus();
    }
  }
  e.exports = t.default;
})(hm, xo);
var Vt = {}, gm = process.env.NODE_ENV !== "production", Bh = function() {
};
if (gm) {
  var pm = function(t, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    var o = 0, s = "Warning: " + t.replace(/%s/g, function() {
      return n[o++];
    });
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  };
  Bh = function(e, t, n) {
    var r = arguments.length;
    n = new Array(r > 2 ? r - 2 : 0);
    for (var i = 2; i < r; i++)
      n[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || pm.apply(null, [t].concat(n));
  };
}
var Mm = Bh, Qt = {}, Ra = {}, ym = {
  get exports() {
    return Ra;
  },
  set exports(e) {
    Ra = e;
  }
};
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
})(ym);
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.canUseDOM = Qt.SafeNodeList = Qt.SafeHTMLCollection = void 0;
var mm = Ra, vm = wm(mm);
function wm(e) {
  return e && e.__esModule ? e : { default: e };
}
var ns = vm.default, Dm = ns.canUseDOM ? window.HTMLElement : {};
Qt.SafeHTMLCollection = ns.canUseDOM ? window.HTMLCollection : {};
Qt.SafeNodeList = ns.canUseDOM ? window.NodeList : {};
Qt.canUseDOM = ns.canUseDOM;
Qt.default = Dm;
Object.defineProperty(Vt, "__esModule", {
  value: !0
});
Vt.resetState = Tm;
Vt.log = jm;
Vt.assertNodeList = Qh;
Vt.setElement = Sm;
Vt.validateElement = $u;
Vt.hide = bm;
Vt.show = Cm;
Vt.documentNotReadyOrSSRTesting = xm;
var Am = Mm, Em = Nm(Am), Im = Qt;
function Nm(e) {
  return e && e.__esModule ? e : { default: e };
}
var Et = null;
function Tm() {
  Et && (Et.removeAttribute ? Et.removeAttribute("aria-hidden") : Et.length != null ? Et.forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Et).forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  })), Et = null;
}
function jm() {
  if (process.env.NODE_ENV !== "production") {
    var e = Et || {};
    console.log("ariaAppHider ----------"), console.log(e.nodeName, e.className, e.id), console.log("end ariaAppHider ----------");
  }
}
function Qh(e, t) {
  if (!e || !e.length)
    throw new Error("react-modal: No elements were found for selector " + t + ".");
}
function Sm(e) {
  var t = e;
  if (typeof t == "string" && Im.canUseDOM) {
    var n = document.querySelectorAll(t);
    Qh(n, t), t = n;
  }
  return Et = t || Et, Et;
}
function $u(e) {
  var t = e || Et;
  return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, Em.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function bm(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var i = $u(e)[Symbol.iterator](), o; !(t = (o = i.next()).done); t = !0) {
      var s = o.value;
      s.setAttribute("aria-hidden", "true");
    }
  } catch (a) {
    n = !0, r = a;
  } finally {
    try {
      !t && i.return && i.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function Cm(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var i = $u(e)[Symbol.iterator](), o; !(t = (o = i.next()).done); t = !0) {
      var s = o.value;
      s.removeAttribute("aria-hidden");
    }
  } catch (a) {
    n = !0, r = a;
  } finally {
    try {
      !t && i.return && i.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function xm() {
  Et = null;
}
var Yr = {};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
Yr.resetState = Om;
Yr.log = Lm;
var er = {}, tr = {};
function ll(e, t) {
  e.classList.remove(t);
}
function Om() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in er)
    ll(e, er[t]);
  var n = document.body;
  for (var r in tr)
    ll(n, tr[r]);
  er = {}, tr = {};
}
function Lm() {
  if (process.env.NODE_ENV !== "production") {
    var e = document.getElementsByTagName("html")[0].className, t = `Show tracked classes:

`;
    t += "<html /> (" + e + `):
  `;
    for (var n in er)
      t += "  " + n + " " + er[n] + `
  `;
    e = document.body.className, t += `

doc.body (` + e + `):
  `;
    for (var r in tr)
      t += "  " + r + " " + tr[r] + `
  `;
    t += `
`, console.log(t);
  }
}
var _m = function(t, n) {
  return t[n] || (t[n] = 0), t[n] += 1, n;
}, km = function(t, n) {
  return t[n] && (t[n] -= 1), n;
}, zm = function(t, n, r) {
  r.forEach(function(i) {
    _m(n, i), t.add(i);
  });
}, Pm = function(t, n, r) {
  r.forEach(function(i) {
    km(n, i), n[i] === 0 && t.remove(i);
  });
};
Yr.add = function(t, n) {
  return zm(t.classList, t.nodeName.toLowerCase() == "html" ? er : tr, n.split(" "));
};
Yr.remove = function(t, n) {
  return Pm(t.classList, t.nodeName.toLowerCase() == "html" ? er : tr, n.split(" "));
};
var Br = {};
Object.defineProperty(Br, "__esModule", {
  value: !0
});
Br.log = Um;
Br.resetState = Fm;
function Rm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var $h = function e() {
  var t = this;
  Rm(this, e), this.register = function(n) {
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
}, Oo = new $h();
function Um() {
  console.log("portalOpenInstances ----------"), console.log(Oo.openInstances.length), Oo.openInstances.forEach(function(e) {
    return console.log(e);
  }), console.log("end portalOpenInstances ----------");
}
function Fm() {
  Oo = new $h();
}
Br.default = Oo;
var Wu = {};
Object.defineProperty(Wu, "__esModule", {
  value: !0
});
Wu.resetState = $m;
Wu.log = Wm;
var Ym = Br, Bm = Qm(Ym);
function Qm(e) {
  return e && e.__esModule ? e : { default: e };
}
var ht = void 0, Yt = void 0, nr = [];
function $m() {
  for (var e = [ht, Yt], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  ht = Yt = null, nr = [];
}
function Wm() {
  console.log("bodyTrap ----------"), console.log(nr.length);
  for (var e = [ht, Yt], t = 0; t < e.length; t++) {
    var n = e[t], r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function fl() {
  if (nr.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  nr[nr.length - 1].focusContent();
}
function Vm(e, t) {
  !ht && !Yt && (ht = document.createElement("div"), ht.setAttribute("data-react-modal-body-trap", ""), ht.style.position = "absolute", ht.style.opacity = "0", ht.setAttribute("tabindex", "0"), ht.addEventListener("focus", fl), Yt = ht.cloneNode(), Yt.addEventListener("focus", fl)), nr = t, nr.length > 0 ? (document.body.firstChild !== ht && document.body.insertBefore(ht, document.body.firstChild), document.body.lastChild !== Yt && document.body.appendChild(Yt)) : (ht.parentElement && ht.parentElement.removeChild(ht), Yt.parentElement && Yt.parentElement.removeChild(Yt));
}
Bm.default.subscribe(Vm);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Object.assign || function(T) {
    for (var S = 1; S < arguments.length; S++) {
      var R = arguments[S];
      for (var C in R)
        Object.prototype.hasOwnProperty.call(R, C) && (T[C] = R[C]);
    }
    return T;
  }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
    return typeof T;
  } : function(T) {
    return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
  }, i = function() {
    function T(S, R) {
      for (var C = 0; C < R.length; C++) {
        var J = R[C];
        J.enumerable = J.enumerable || !1, J.configurable = !0, "value" in J && (J.writable = !0), Object.defineProperty(S, J.key, J);
      }
    }
    return function(S, R, C) {
      return R && T(S.prototype, R), C && T(S, C), S;
    };
  }(), o = Te, s = D, a = I(s), u = Wt, c = N(u), l = xo, f = I(l), d = Vt, g = N(d), h = Yr, p = N(h), m = Qt, v = I(m), w = Br, j = I(w);
  function N(T) {
    if (T && T.__esModule)
      return T;
    var S = {};
    if (T != null)
      for (var R in T)
        Object.prototype.hasOwnProperty.call(T, R) && (S[R] = T[R]);
    return S.default = T, S;
  }
  function I(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function B(T, S) {
    if (!(T instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function z(T, S) {
    if (!T)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return S && (typeof S == "object" || typeof S == "function") ? S : T;
  }
  function W(T, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof S);
    T.prototype = Object.create(S && S.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S);
  }
  var $ = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, b = function(S) {
    return S.code === "Tab" || S.keyCode === 9;
  }, k = function(S) {
    return S.code === "Escape" || S.keyCode === 27;
  }, U = 0, x = function(T) {
    W(S, T);
    function S(R) {
      B(this, S);
      var C = z(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, R));
      return C.setOverlayRef = function(J) {
        C.overlay = J, C.props.overlayRef && C.props.overlayRef(J);
      }, C.setContentRef = function(J) {
        C.content = J, C.props.contentRef && C.props.contentRef(J);
      }, C.afterClose = function() {
        var J = C.props, ie = J.appElement, L = J.ariaHideApp, F = J.htmlOpenClassName, P = J.bodyOpenClassName, q = J.parentSelector, K = q && q().ownerDocument || document;
        P && p.remove(K.body, P), F && p.remove(K.getElementsByTagName("html")[0], F), L && U > 0 && (U -= 1, U === 0 && g.show(ie)), C.props.shouldFocusAfterRender && (C.props.shouldReturnFocusAfterClose ? (c.returnFocus(C.props.preventScroll), c.teardownScopedFocus()) : c.popWithoutFocus()), C.props.onAfterClose && C.props.onAfterClose(), j.default.deregister(C);
      }, C.open = function() {
        C.beforeOpen(), C.state.afterOpen && C.state.beforeClose ? (clearTimeout(C.closeTimer), C.setState({ beforeClose: !1 })) : (C.props.shouldFocusAfterRender && (c.setupScopedFocus(C.node), c.markForFocusLater()), C.setState({ isOpen: !0 }, function() {
          C.openAnimationFrame = requestAnimationFrame(function() {
            C.setState({ afterOpen: !0 }), C.props.isOpen && C.props.onAfterOpen && C.props.onAfterOpen({
              overlayEl: C.overlay,
              contentEl: C.content
            });
          });
        }));
      }, C.close = function() {
        C.props.closeTimeoutMS > 0 ? C.closeWithTimeout() : C.closeWithoutTimeout();
      }, C.focusContent = function() {
        return C.content && !C.contentHasFocus() && C.content.focus({ preventScroll: !0 });
      }, C.closeWithTimeout = function() {
        var J = Date.now() + C.props.closeTimeoutMS;
        C.setState({ beforeClose: !0, closesAt: J }, function() {
          C.closeTimer = setTimeout(C.closeWithoutTimeout, C.state.closesAt - Date.now());
        });
      }, C.closeWithoutTimeout = function() {
        C.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, C.afterClose);
      }, C.handleKeyDown = function(J) {
        b(J) && (0, f.default)(C.content, J), C.props.shouldCloseOnEsc && k(J) && (J.stopPropagation(), C.requestClose(J));
      }, C.handleOverlayOnClick = function(J) {
        C.shouldClose === null && (C.shouldClose = !0), C.shouldClose && C.props.shouldCloseOnOverlayClick && (C.ownerHandlesClose() ? C.requestClose(J) : C.focusContent()), C.shouldClose = null;
      }, C.handleContentOnMouseUp = function() {
        C.shouldClose = !1;
      }, C.handleOverlayOnMouseDown = function(J) {
        !C.props.shouldCloseOnOverlayClick && J.target == C.overlay && J.preventDefault();
      }, C.handleContentOnClick = function() {
        C.shouldClose = !1;
      }, C.handleContentOnMouseDown = function() {
        C.shouldClose = !1;
      }, C.requestClose = function(J) {
        return C.ownerHandlesClose() && C.props.onRequestClose(J);
      }, C.ownerHandlesClose = function() {
        return C.props.onRequestClose;
      }, C.shouldBeClosed = function() {
        return !C.state.isOpen && !C.state.beforeClose;
      }, C.contentHasFocus = function() {
        return document.activeElement === C.content || C.content.contains(document.activeElement);
      }, C.buildClassName = function(J, ie) {
        var L = (typeof ie > "u" ? "undefined" : r(ie)) === "object" ? ie : {
          base: $[J],
          afterOpen: $[J] + "--after-open",
          beforeClose: $[J] + "--before-close"
        }, F = L.base;
        return C.state.afterOpen && (F = F + " " + L.afterOpen), C.state.beforeClose && (F = F + " " + L.beforeClose), typeof ie == "string" && ie ? F + " " + ie : F;
      }, C.attributesFromObject = function(J, ie) {
        return Object.keys(ie).reduce(function(L, F) {
          return L[J + "-" + F] = ie[F], L;
        }, {});
      }, C.state = {
        afterOpen: !1,
        beforeClose: !1
      }, C.shouldClose = null, C.moveFromContentToOverlay = null, C;
    }
    return i(S, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(C, J) {
        process.env.NODE_ENV !== "production" && (C.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), C.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !C.isOpen ? this.open() : !this.props.isOpen && C.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !J.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var C = this.props, J = C.appElement, ie = C.ariaHideApp, L = C.htmlOpenClassName, F = C.bodyOpenClassName, P = C.parentSelector, q = P && P().ownerDocument || document;
        F && p.add(q.body, F), L && p.add(q.getElementsByTagName("html")[0], L), ie && (U += 1, g.hide(J)), j.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var C = this.props, J = C.id, ie = C.className, L = C.overlayClassName, F = C.defaultStyles, P = C.children, q = ie ? {} : F.content, K = L ? {} : F.overlay;
        if (this.shouldBeClosed())
          return null;
        var X = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", L),
          style: n({}, K, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, O = n({
          id: J,
          ref: this.setContentRef,
          style: n({}, q, this.props.style.content),
          className: this.buildClassName("content", ie),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), ne = this.props.contentElement(O, P);
        return this.props.overlayElement(X, ne);
      }
    }]), S;
  }(o.Component);
  x.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, x.propTypes = {
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
    appElement: a.default.oneOfType([a.default.instanceOf(v.default), a.default.instanceOf(m.SafeHTMLCollection), a.default.instanceOf(m.SafeNodeList), a.default.arrayOf(a.default.instanceOf(v.default))]),
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
  }, t.default = x, e.exports = t.default;
})(tm, Co);
function Wh() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function Vh(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function Hh(e, t) {
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
Wh.__suppressDeprecationWarning = !0;
Vh.__suppressDeprecationWarning = !0;
Hh.__suppressDeprecationWarning = !0;
function Hm(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var n = null, r = null, i = null;
  if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? i = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (i = "UNSAFE_componentWillUpdate"), n !== null || r !== null || i !== null) {
    var o = e.displayName || e.name, s = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + s + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (r !== null ? `
  ` + r : "") + (i !== null ? `
  ` + i : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Wh, t.componentWillReceiveProps = Vh), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = Hh;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function(c, l, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      a.call(this, c, l, d);
    };
  }
  return e;
}
const qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: Hm
}, Symbol.toStringTag, { value: "Module" })), Km = /* @__PURE__ */ Bi(qm);
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.bodyOpenClassName = or.portalClassName = void 0;
var dl = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Gm = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), qh = Te, Lo = Qi(qh), Jm = ci, _o = Qi(Jm), Zm = D, Ie = Qi(Zm), Xm = Co, hl = Qi(Xm), ev = Vt, tv = rv(ev), Tn = Qt, gl = Qi(Tn), nv = Km;
function rv(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function Qi(e) {
  return e && e.__esModule ? e : { default: e };
}
function iv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pl(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ov(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var sv = or.portalClassName = "ReactModalPortal", av = or.bodyOpenClassName = "ReactModal__Body--open", Fn = Tn.canUseDOM && _o.default.createPortal !== void 0, Ua = function(t) {
  return document.createElement(t);
}, Ml = function() {
  return Fn ? _o.default.createPortal : _o.default.unstable_renderSubtreeIntoContainer;
};
function ro(e) {
  return e();
}
var Qr = function(e) {
  ov(t, e);
  function t() {
    var n, r, i, o;
    iv(this, t);
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return o = (r = (i = pl(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))), i), i.removePortal = function() {
      !Fn && _o.default.unmountComponentAtNode(i.node);
      var c = ro(i.props.parentSelector);
      c && c.contains(i.node) ? c.removeChild(i.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, i.portalRef = function(c) {
      i.portal = c;
    }, i.renderPortal = function(c) {
      var l = Ml(), f = l(i, Lo.default.createElement(hl.default, dl({ defaultStyles: t.defaultStyles }, c)), i.node);
      i.portalRef(f);
    }, r), pl(i, o);
  }
  return Gm(t, [{
    key: "componentDidMount",
    value: function() {
      if (Tn.canUseDOM) {
        Fn || (this.node = Ua("div")), this.node.className = this.props.portalClassName;
        var r = ro(this.props.parentSelector);
        r.appendChild(this.node), !Fn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var i = ro(r.parentSelector), o = ro(this.props.parentSelector);
      return { prevParent: i, nextParent: o };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, i, o) {
      if (Tn.canUseDOM) {
        var s = this.props, a = s.isOpen, u = s.portalClassName;
        r.portalClassName !== u && (this.node.className = u);
        var c = o.prevParent, l = o.nextParent;
        l !== c && (c.removeChild(this.node), l.appendChild(this.node)), !(!r.isOpen && !a) && !Fn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Tn.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, i = Date.now(), o = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || i + this.props.closeTimeoutMS);
        o ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, o - i)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Tn.canUseDOM || !Fn)
        return null;
      !this.node && Fn && (this.node = Ua("div"));
      var r = Ml();
      return r(Lo.default.createElement(hl.default, dl({
        ref: this.portalRef,
        defaultStyles: t.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      tv.setElement(r);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), t;
}(qh.Component);
Qr.propTypes = {
  isOpen: Ie.default.bool.isRequired,
  style: Ie.default.shape({
    content: Ie.default.object,
    overlay: Ie.default.object
  }),
  portalClassName: Ie.default.string,
  bodyOpenClassName: Ie.default.string,
  htmlOpenClassName: Ie.default.string,
  className: Ie.default.oneOfType([Ie.default.string, Ie.default.shape({
    base: Ie.default.string.isRequired,
    afterOpen: Ie.default.string.isRequired,
    beforeClose: Ie.default.string.isRequired
  })]),
  overlayClassName: Ie.default.oneOfType([Ie.default.string, Ie.default.shape({
    base: Ie.default.string.isRequired,
    afterOpen: Ie.default.string.isRequired,
    beforeClose: Ie.default.string.isRequired
  })]),
  appElement: Ie.default.oneOfType([Ie.default.instanceOf(gl.default), Ie.default.instanceOf(Tn.SafeHTMLCollection), Ie.default.instanceOf(Tn.SafeNodeList), Ie.default.arrayOf(Ie.default.instanceOf(gl.default))]),
  onAfterOpen: Ie.default.func,
  onRequestClose: Ie.default.func,
  closeTimeoutMS: Ie.default.number,
  ariaHideApp: Ie.default.bool,
  shouldFocusAfterRender: Ie.default.bool,
  shouldCloseOnOverlayClick: Ie.default.bool,
  shouldReturnFocusAfterClose: Ie.default.bool,
  preventScroll: Ie.default.bool,
  parentSelector: Ie.default.func,
  aria: Ie.default.object,
  data: Ie.default.object,
  role: Ie.default.string,
  contentLabel: Ie.default.string,
  shouldCloseOnEsc: Ie.default.bool,
  overlayRef: Ie.default.func,
  contentRef: Ie.default.func,
  id: Ie.default.string,
  overlayElement: Ie.default.func,
  contentElement: Ie.default.func
};
Qr.defaultProps = {
  isOpen: !1,
  portalClassName: sv,
  bodyOpenClassName: av,
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
    return Lo.default.createElement(
      "div",
      t,
      n
    );
  },
  contentElement: function(t, n) {
    return Lo.default.createElement(
      "div",
      t,
      n
    );
  }
};
Qr.defaultStyles = {
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
(0, nv.polyfill)(Qr);
process.env.NODE_ENV !== "production" && (Qr.setCreateHTMLElement = function(e) {
  return Ua = e;
});
or.default = Qr;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = or, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  t.default = r.default, e.exports = t.default;
})(qy, bo);
const Kh = /* @__PURE__ */ Sh(bo), yl = document, uv = () => {
  const e = tt(!1), t = yl.documentElement, { body: n } = yl;
  return [() => {
    if (!n || !n.style || e.current || document == null)
      return;
    const o = window.innerWidth - t.clientWidth, s = parseInt(
      window.getComputedStyle(n).getPropertyValue("padding-right")
    ) || 0;
    t.style.position = "relative", t.style.overflow = "hidden", n.style.position = "relative", n.style.overflow = "hidden", n.style.paddingRight = `${s + o}px`, e.current = !0;
  }, () => {
    !n || !n.style || !e.current || (t.style.position = "", t.style.overflow = "", n.style.position = "", n.style.overflow = "", n.style.paddingRight = "", e.current = !1);
  }];
};
Kh.setAppElement(document.createElement("div"));
const z4 = ({
  isOpen: e,
  children: t,
  closeTimeoutMS: n,
  style: r,
  overlayClassName: i,
  className: o,
  onRequestClose: s
}) => {
  const [a, u] = uv();
  return e ? a() : u(), /* @__PURE__ */ ge.jsx(
    Kh,
    {
      isOpen: e,
      closeTimeoutMS: n,
      style: r,
      overlayClassName: i,
      className: o,
      onRequestClose: s || (() => {
      }),
      shouldCloseOnOverlayClick: !0,
      children: t
    }
  );
}, P4 = {
  headerHeight: "67px",
  searchBarHeight: "32px",
  switchHeight: "32px"
}, R4 = {
  title: "36px",
  subtitle: "24px",
  content: "14px",
  small: "12px"
};
var In = /* @__PURE__ */ ((e) => (e.EN = "en", e.JA = "ja", e))(In || {});
const cv = ["desktop", "tablet", "phone", "phoneMini"], U4 = (e) => cv.includes(e), lv = ["light", "dark"], F4 = (e) => lv.includes(e), fv = {
  courseChange: "Course change detected. If you added/deleted courses in another tab, please ",
  RefreshLink: "click here to refresh to see the changes"
}, dv = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun"
}, hv = {
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
}, gv = {
  timetable: "Timetable",
  syllabus: "Syllabus",
  "course info": "Course",
  roomfinder: "Rooms",
  joinus: "Join Us",
  bus: "Bus",
  language: "Language",
  career: "Career",
  "corona-info": "COVID19"
}, pv = {
  licensed: " Code Licensed ",
  syllabus: "Syllabus correct as at",
  update: ""
}, Mv = {
  title: "WasedaTime",
  description: "Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
}, yv = {
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
}, mv = {
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
}, vv = {
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
}, wv = {
  "Under Construction": "Under Construction",
  "Want to help?": "Wanna build an amazing app with us?",
  "Check out our": "Check out our",
  facebook: " Facebook ",
  twitter: "Twitter",
  or: " or ",
  "!": "!",
  "We sincerely welcome any contributors!": "We sincerely welcome any contributors!"
}, Dv = {
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
}, Av = {
  header: "Updates on the issue with the 2020 syllabus",
  main: "Hi! Thanks for clicking in.",
  main2: "We apologize that the 2020 syllabus is not supported yet. Due to a updated policy from Waseda University, we are not able to obtain the 2020 syllabus data at this moment.",
  main3: "We are actively negotiating with the university and will provide any updates as soon as possible. We have received many inquiries and are very sorry for not being able to respond in time.",
  main4: "Thank you so much again, and we will do our best to ensure that the mission of WasedaTime continues.",
  main5: "Please stay safe and healthy!"
}, Ev = {
  Intern: "Intern",
  Articles: "Articles",
  viewMore: "View More",
  Entry: "Entry"
}, Iv = {
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
}, Nv = {
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
}, Gh = {
  app: fv,
  common: dv,
  welcome: hv,
  navigation: gv,
  footer: pv,
  about: Mv,
  timetable: yv,
  syllabus: mv,
  courseInfo: vv,
  room: wv,
  bus: Dv,
  updates: Av,
  career: Ev,
  coronaInfo: Iv,
  user: Nv
}, Tv = {
  courseChange: "科目の変更が検出されました。別のタブで科目を登録/取り消した場合は、変更を反映するために",
  RefreshLink: "こちらにクリックして再読み込みしてください"
}, jv = {
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
  sun: "日"
}, Sv = {
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
}, bv = {
  timetable: "時間割",
  syllabus: "シラバス",
  "course info": "授業詳細",
  roomfinder: "空き教室",
  joinus: "募集中！",
  bus: "バス",
  language: "言語",
  career: "キャリア",
  "corona-info": "コロナ"
}, Cv = {
  licensed: " ソースコードライセンス ",
  syllabus: "シラバスは",
  update: "に更新されました"
}, xv = {
  title: "早稲田タイム",
  description: "早稲田大学の学生のキャンパスライフを支え、向上させることを目的とした非営利・学生運営・オープンソースのアプリ"
}, Ov = {
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
}, Lv = {
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
}, _v = {
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
}, kv = {
  "Under Construction": "作成中",
  "Want to help?": "一緒に楽しく開発しませんか？",
  "Check out our": "興味のある方は ",
  facebook: " Facebook ",
  twitter: " Twitter ",
  or: "または",
  "!": "から！",
  "We sincerely welcome any contributors!": ""
}, zv = {
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
}, Pv = {
  header: "2020のシラバスについて",
  main: "こんにちは！クリックしていただきありがとうございます。",
  main2: "申し訳ありませんが、2020年のシラバスはまだサポートされていません。早稲田大学のポリシーが更新されたため、現時点では2020のシラバスデータを取得できません。",
  main3: "私たちは積極的に大学と相談しており、新しい情報をできるだけ早く提供します。多くのお問い合わせをいただきましたが、時間内にご返答できず大変申し訳ございません。",
  main4: "改めて、あなたに感謝申し上げます。早稲田タイムの使命が継続するように最善を尽くします。",
  main5: "どうぞ、安全と健康にお気をつけくださいませ。"
}, Rv = {
  Intern: "インターン",
  Articles: "記事",
  viewMore: "インターン内容をもっと見る",
  Entry: "エントリー"
}, Uv = {
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
}, Fv = {
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
}, Jh = {
  app: Tv,
  common: jv,
  welcome: Sv,
  navigation: bv,
  footer: Cv,
  about: xv,
  timetable: Ov,
  syllabus: Lv,
  courseInfo: _v,
  room: kv,
  bus: zv,
  updates: Pv,
  career: Rv,
  coronaInfo: Uv,
  user: Fv
}, Yv = () => /* @__PURE__ */ ge.jsx("svg", { viewBox: "0 0 50 50", width: "50px", height: "50px", children: /* @__PURE__ */ ge.jsx("path", { d: "M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z" }) });
var Fa = {}, Bv = {
  get exports() {
    return Fa;
  },
  set exports(e) {
    Fa = e;
  }
};
(function(e, t) {
  (function(r, i) {
    e.exports = i(Te);
  })(zt, (n) => (
    /******/
    (() => {
      var r = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (a, u) => {
            u.match = h, u.parse = p;
            var c = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, l = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, f = /^(?:(min|max)-)?(.+)/, d = /(em|rem|px|cm|mm|in|pt|pc)?$/, g = /(dpi|dpcm|dppx)?$/;
            function h(j, N) {
              return p(j).some(function(I) {
                var B = I.inverse, z = I.type === "all" || N.type === I.type;
                if (z && B || !(z || B))
                  return !1;
                var W = I.expressions.every(function($) {
                  var b = $.feature, k = $.modifier, U = $.value, x = N[b];
                  if (!x)
                    return !1;
                  switch (b) {
                    case "orientation":
                    case "scan":
                      return x.toLowerCase() === U.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      U = w(U), x = w(x);
                      break;
                    case "resolution":
                      U = v(U), x = v(x);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      U = m(U), x = m(x);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      U = parseInt(U, 10) || 1, x = parseInt(x, 10) || 0;
                      break;
                  }
                  switch (k) {
                    case "min":
                      return x >= U;
                    case "max":
                      return x <= U;
                    default:
                      return x === U;
                  }
                });
                return W && !B || !W && B;
              });
            }
            function p(j) {
              return j.split(",").map(function(N) {
                N = N.trim();
                var I = N.match(c), B = I[1], z = I[2], W = I[3] || "", $ = {};
                return $.inverse = !!B && B.toLowerCase() === "not", $.type = z ? z.toLowerCase() : "all", W = W.match(/\([^\)]+\)/g) || [], $.expressions = W.map(function(b) {
                  var k = b.match(l), U = k[1].toLowerCase().match(f);
                  return {
                    modifier: U[1],
                    feature: U[2],
                    value: k[2]
                  };
                }), $;
              });
            }
            function m(j) {
              var N = Number(j), I;
              return N || (I = j.match(/^(\d+)\s*\/\s*(\d+)$/), N = I[1] / I[2]), N;
            }
            function v(j) {
              var N = parseFloat(j), I = String(j).match(g)[1];
              switch (I) {
                case "dpcm":
                  return N / 2.54;
                case "dppx":
                  return N * 96;
                default:
                  return N;
              }
            }
            function w(j) {
              var N = parseFloat(j), I = String(j).match(d)[1];
              switch (I) {
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
              default: () => p
              /* harmony export */
            });
            var l = /[A-Z]/g, f = /^ms-/, d = {};
            function g(m) {
              return "-" + m.toLowerCase();
            }
            function h(m) {
              if (d.hasOwnProperty(m))
                return d[m];
              var v = m.replace(l, g);
              return d[m] = f.test(v) ? "-" + v : v;
            }
            const p = h;
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
            function d(h, p, m) {
              var v = this;
              if (f && !m) {
                var w = f.call(window, h);
                this.matches = w.matches, this.media = w.media, w.addListener(I);
              } else
                this.matches = l(h, p), this.media = h;
              this.addListener = j, this.removeListener = N, this.dispose = B;
              function j(z) {
                w && w.addListener(z);
              }
              function N(z) {
                w && w.removeListener(z);
              }
              function I(z) {
                v.matches = z.matches, v.media = z.media;
              }
              function B() {
                w && w.removeListener(I);
              }
            }
            function g(h, p, m) {
              return new d(h, p, m);
            }
            a.exports = g;
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
            function f(g) {
              if (g == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(g);
            }
            function d() {
              try {
                if (!Object.assign)
                  return !1;
                var g = new String("abc");
                if (g[5] = "de", Object.getOwnPropertyNames(g)[0] === "5")
                  return !1;
                for (var h = {}, p = 0; p < 10; p++)
                  h["_" + String.fromCharCode(p)] = p;
                var m = Object.getOwnPropertyNames(h).map(function(w) {
                  return h[w];
                });
                if (m.join("") !== "0123456789")
                  return !1;
                var v = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(w) {
                  v[w] = w;
                }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            a.exports = d() ? Object.assign : function(g, h) {
              for (var p, m = f(g), v, w = 1; w < arguments.length; w++) {
                p = Object(arguments[w]);
                for (var j in p)
                  c.call(p, j) && (m[j] = p[j]);
                if (u) {
                  v = u(p);
                  for (var N = 0; N < v.length; N++)
                    l.call(p, v[N]) && (m[v[N]] = p[v[N]]);
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
              ), d = {}, g = c(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              l = function(p) {
                var m = "Warning: " + p;
                typeof console < "u" && console.error(m);
                try {
                  throw new Error(m);
                } catch {
                }
              };
            }
            function h(p, m, v, w, j) {
              for (var N in p)
                if (g(p, N)) {
                  var I;
                  try {
                    if (typeof p[N] != "function") {
                      var B = Error(
                        (w || "React class") + ": " + v + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw B.name = "Invariant Violation", B;
                    }
                    I = p[N](m, N, w, v, null, f);
                  } catch (W) {
                    I = W;
                  }
                  if (I && !(I instanceof Error) && l(
                    (w || "React class") + ": type specification of " + v + " `" + N + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), I instanceof Error && !(I.message in d)) {
                    d[I.message] = !0;
                    var z = j ? j() : "";
                    l(
                      "Failed " + v + " type: " + I.message + (z ?? "")
                    );
                  }
                }
            }
            h.resetWarningCache = function() {
              d = {};
            }, a.exports = h;
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
            ), g = c(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), h = c(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), p = function() {
            };
            p = function(v) {
              var w = "Warning: " + v;
              typeof console < "u" && console.error(w);
              try {
                throw new Error(w);
              } catch {
              }
            };
            function m() {
              return null;
            }
            a.exports = function(v, w) {
              var j = typeof Symbol == "function" && Symbol.iterator, N = "@@iterator";
              function I(H) {
                var Q = H && (j && H[j] || H[N]);
                if (typeof Q == "function")
                  return Q;
              }
              var B = "<<anonymous>>", z = {
                array: k("array"),
                bigint: k("bigint"),
                bool: k("boolean"),
                func: k("function"),
                number: k("number"),
                object: k("object"),
                string: k("string"),
                symbol: k("symbol"),
                any: U(),
                arrayOf: x,
                element: T(),
                elementType: S(),
                instanceOf: R,
                node: L(),
                objectOf: J,
                oneOf: C,
                oneOfType: ie,
                shape: P,
                exact: q
              };
              function W(H, Q) {
                return H === Q ? H !== 0 || 1 / H === 1 / Q : H !== H && Q !== Q;
              }
              function $(H, Q) {
                this.message = H, this.data = Q && typeof Q == "object" ? Q : {}, this.stack = "";
              }
              $.prototype = Error.prototype;
              function b(H) {
                var Q = {}, V = 0;
                function fe(le, Me, de, E, y, M, A) {
                  if (E = E || B, M = M || de, A !== d) {
                    if (w) {
                      var Y = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw Y.name = "Invariant Violation", Y;
                    } else if (typeof console < "u") {
                      var ee = E + ":" + de;
                      !Q[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
                      V < 3 && (p(
                        "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + E + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), Q[ee] = !0, V++);
                    }
                  }
                  return Me[de] == null ? le ? Me[de] === null ? new $("The " + y + " `" + M + "` is marked as required " + ("in `" + E + "`, but its value is `null`.")) : new $("The " + y + " `" + M + "` is marked as required in " + ("`" + E + "`, but its value is `undefined`.")) : null : H(Me, de, E, y, M);
                }
                var te = fe.bind(null, !1);
                return te.isRequired = fe.bind(null, !0), te;
              }
              function k(H) {
                function Q(V, fe, te, le, Me, de) {
                  var E = V[fe], y = O(E);
                  if (y !== H) {
                    var M = ne(E);
                    return new $(
                      "Invalid " + le + " `" + Me + "` of type " + ("`" + M + "` supplied to `" + te + "`, expected ") + ("`" + H + "`."),
                      { expectedType: H }
                    );
                  }
                  return null;
                }
                return b(Q);
              }
              function U() {
                return b(m);
              }
              function x(H) {
                function Q(V, fe, te, le, Me) {
                  if (typeof H != "function")
                    return new $("Property `" + Me + "` of component `" + te + "` has invalid PropType notation inside arrayOf.");
                  var de = V[fe];
                  if (!Array.isArray(de)) {
                    var E = O(de);
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected an array."));
                  }
                  for (var y = 0; y < de.length; y++) {
                    var M = H(de, y, te, le, Me + "[" + y + "]", d);
                    if (M instanceof Error)
                      return M;
                  }
                  return null;
                }
                return b(Q);
              }
              function T() {
                function H(Q, V, fe, te, le) {
                  var Me = Q[V];
                  if (!v(Me)) {
                    var de = O(Me);
                    return new $("Invalid " + te + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return b(H);
              }
              function S() {
                function H(Q, V, fe, te, le) {
                  var Me = Q[V];
                  if (!l.isValidElementType(Me)) {
                    var de = O(Me);
                    return new $("Invalid " + te + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return b(H);
              }
              function R(H) {
                function Q(V, fe, te, le, Me) {
                  if (!(V[fe] instanceof H)) {
                    var de = H.name || B, E = he(V[fe]);
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected ") + ("instance of `" + de + "`."));
                  }
                  return null;
                }
                return b(Q);
              }
              function C(H) {
                if (!Array.isArray(H))
                  return arguments.length > 1 ? p(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : p("Invalid argument supplied to oneOf, expected an array."), m;
                function Q(V, fe, te, le, Me) {
                  for (var de = V[fe], E = 0; E < H.length; E++)
                    if (W(de, H[E]))
                      return null;
                  var y = JSON.stringify(H, function(A, Y) {
                    var ee = ne(Y);
                    return ee === "symbol" ? String(Y) : Y;
                  });
                  return new $("Invalid " + le + " `" + Me + "` of value `" + String(de) + "` " + ("supplied to `" + te + "`, expected one of " + y + "."));
                }
                return b(Q);
              }
              function J(H) {
                function Q(V, fe, te, le, Me) {
                  if (typeof H != "function")
                    return new $("Property `" + Me + "` of component `" + te + "` has invalid PropType notation inside objectOf.");
                  var de = V[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected an object."));
                  for (var y in de)
                    if (g(de, y)) {
                      var M = H(de, y, te, le, Me + "." + y, d);
                      if (M instanceof Error)
                        return M;
                    }
                  return null;
                }
                return b(Q);
              }
              function ie(H) {
                if (!Array.isArray(H))
                  return p("Invalid argument supplied to oneOfType, expected an instance of array."), m;
                for (var Q = 0; Q < H.length; Q++) {
                  var V = H[Q];
                  if (typeof V != "function")
                    return p(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(V) + " at index " + Q + "."
                    ), m;
                }
                function fe(te, le, Me, de, E) {
                  for (var y = [], M = 0; M < H.length; M++) {
                    var A = H[M], Y = A(te, le, Me, de, E, d);
                    if (Y == null)
                      return null;
                    Y.data && g(Y.data, "expectedType") && y.push(Y.data.expectedType);
                  }
                  var ee = y.length > 0 ? ", expected one of type [" + y.join(", ") + "]" : "";
                  return new $("Invalid " + de + " `" + E + "` supplied to " + ("`" + Me + "`" + ee + "."));
                }
                return b(fe);
              }
              function L() {
                function H(Q, V, fe, te, le) {
                  return K(Q[V]) ? null : new $("Invalid " + te + " `" + le + "` supplied to " + ("`" + fe + "`, expected a ReactNode."));
                }
                return b(H);
              }
              function F(H, Q, V, fe, te) {
                return new $(
                  (H || "React class") + ": " + Q + " type `" + V + "." + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + te + "`."
                );
              }
              function P(H) {
                function Q(V, fe, te, le, Me) {
                  var de = V[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type `" + E + "` " + ("supplied to `" + te + "`, expected `object`."));
                  for (var y in H) {
                    var M = H[y];
                    if (typeof M != "function")
                      return F(te, le, Me, y, ne(M));
                    var A = M(de, y, te, le, Me + "." + y, d);
                    if (A)
                      return A;
                  }
                  return null;
                }
                return b(Q);
              }
              function q(H) {
                function Q(V, fe, te, le, Me) {
                  var de = V[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type `" + E + "` " + ("supplied to `" + te + "`, expected `object`."));
                  var y = f({}, V[fe], H);
                  for (var M in y) {
                    var A = H[M];
                    if (g(H, M) && typeof A != "function")
                      return F(te, le, Me, M, ne(A));
                    if (!A)
                      return new $(
                        "Invalid " + le + " `" + Me + "` key `" + M + "` supplied to `" + te + "`.\nBad object: " + JSON.stringify(V[fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
                      );
                    var Y = A(de, M, te, le, Me + "." + M, d);
                    if (Y)
                      return Y;
                  }
                  return null;
                }
                return b(Q);
              }
              function K(H) {
                switch (typeof H) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !H;
                  case "object":
                    if (Array.isArray(H))
                      return H.every(K);
                    if (H === null || v(H))
                      return !0;
                    var Q = I(H);
                    if (Q) {
                      var V = Q.call(H), fe;
                      if (Q !== H.entries) {
                        for (; !(fe = V.next()).done; )
                          if (!K(fe.value))
                            return !1;
                      } else
                        for (; !(fe = V.next()).done; ) {
                          var te = fe.value;
                          if (te && !K(te[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function X(H, Q) {
                return H === "symbol" ? !0 : Q ? Q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Q instanceof Symbol : !1;
              }
              function O(H) {
                var Q = typeof H;
                return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : X(Q, H) ? "symbol" : Q;
              }
              function ne(H) {
                if (typeof H > "u" || H === null)
                  return "" + H;
                var Q = O(H);
                if (Q === "object") {
                  if (H instanceof Date)
                    return "date";
                  if (H instanceof RegExp)
                    return "regexp";
                }
                return Q;
              }
              function G(H) {
                var Q = ne(H);
                switch (Q) {
                  case "array":
                  case "object":
                    return "an " + Q;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + Q;
                  default:
                    return Q;
                }
              }
              function he(H) {
                return !H.constructor || !H.constructor.name ? B : H.constructor.name;
              }
              return z.checkPropTypes = h, z.resetWarningCache = h.resetWarningCache, z.PropTypes = z, z;
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
              var c = typeof Symbol == "function" && Symbol.for, l = c ? Symbol.for("react.element") : 60103, f = c ? Symbol.for("react.portal") : 60106, d = c ? Symbol.for("react.fragment") : 60107, g = c ? Symbol.for("react.strict_mode") : 60108, h = c ? Symbol.for("react.profiler") : 60114, p = c ? Symbol.for("react.provider") : 60109, m = c ? Symbol.for("react.context") : 60110, v = c ? Symbol.for("react.async_mode") : 60111, w = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, N = c ? Symbol.for("react.suspense") : 60113, I = c ? Symbol.for("react.suspense_list") : 60120, B = c ? Symbol.for("react.memo") : 60115, z = c ? Symbol.for("react.lazy") : 60116, W = c ? Symbol.for("react.block") : 60121, $ = c ? Symbol.for("react.fundamental") : 60117, b = c ? Symbol.for("react.responder") : 60118, k = c ? Symbol.for("react.scope") : 60119;
              function U(A) {
                return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                A === d || A === w || A === h || A === g || A === N || A === I || typeof A == "object" && A !== null && (A.$$typeof === z || A.$$typeof === B || A.$$typeof === p || A.$$typeof === m || A.$$typeof === j || A.$$typeof === $ || A.$$typeof === b || A.$$typeof === k || A.$$typeof === W);
              }
              function x(A) {
                if (typeof A == "object" && A !== null) {
                  var Y = A.$$typeof;
                  switch (Y) {
                    case l:
                      var ee = A.type;
                      switch (ee) {
                        case v:
                        case w:
                        case d:
                        case h:
                        case g:
                        case N:
                          return ee;
                        default:
                          var Z = ee && ee.$$typeof;
                          switch (Z) {
                            case m:
                            case j:
                            case z:
                            case B:
                            case p:
                              return Z;
                            default:
                              return Y;
                          }
                      }
                    case f:
                      return Y;
                  }
                }
              }
              var T = v, S = w, R = m, C = p, J = l, ie = j, L = d, F = z, P = B, q = f, K = h, X = g, O = N, ne = !1;
              function G(A) {
                return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), he(A) || x(A) === v;
              }
              function he(A) {
                return x(A) === w;
              }
              function H(A) {
                return x(A) === m;
              }
              function Q(A) {
                return x(A) === p;
              }
              function V(A) {
                return typeof A == "object" && A !== null && A.$$typeof === l;
              }
              function fe(A) {
                return x(A) === j;
              }
              function te(A) {
                return x(A) === d;
              }
              function le(A) {
                return x(A) === z;
              }
              function Me(A) {
                return x(A) === B;
              }
              function de(A) {
                return x(A) === f;
              }
              function E(A) {
                return x(A) === h;
              }
              function y(A) {
                return x(A) === g;
              }
              function M(A) {
                return x(A) === N;
              }
              u.AsyncMode = T, u.ConcurrentMode = S, u.ContextConsumer = R, u.ContextProvider = C, u.Element = J, u.ForwardRef = ie, u.Fragment = L, u.Lazy = F, u.Memo = P, u.Portal = q, u.Profiler = K, u.StrictMode = X, u.Suspense = O, u.isAsyncMode = G, u.isConcurrentMode = he, u.isContextConsumer = H, u.isContextProvider = Q, u.isElement = V, u.isForwardRef = fe, u.isFragment = te, u.isLazy = le, u.isMemo = Me, u.isPortal = de, u.isProfiler = E, u.isStrictMode = y, u.isSuspense = M, u.isValidElementType = U, u.typeOf = x;
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
            function l(d, g) {
              if (d === g)
                return !0;
              if (!d || !g)
                return !1;
              var h = Object.keys(d), p = Object.keys(g), m = h.length;
              if (p.length !== m)
                return !1;
              for (var v = 0; v < m; v++) {
                var w = h[v];
                if (d[w] !== g[w] || !Object.prototype.hasOwnProperty.call(g, w))
                  return !1;
              }
              return !0;
            }
            function f(d, g) {
              if (d === g)
                return !0;
              if (!d || !g)
                return !1;
              var h = d.length;
              if (g.length !== h)
                return !1;
              for (var p = 0; p < h; p++)
                if (d[p] !== g[p])
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
            var l = this && this.__rest || function(h, p) {
              var m = {};
              for (var v in h)
                Object.prototype.hasOwnProperty.call(h, v) && p.indexOf(v) < 0 && (m[v] = h[v]);
              if (h != null && typeof Object.getOwnPropertySymbols == "function")
                for (var w = 0, v = Object.getOwnPropertySymbols(h); w < v.length; w++)
                  p.indexOf(v[w]) < 0 && Object.prototype.propertyIsEnumerable.call(h, v[w]) && (m[v[w]] = h[v[w]]);
              return m;
            }, f = this && this.__importDefault || function(h) {
              return h && h.__esModule ? h : { default: h };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var d = f(c(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), g = function(h) {
              var p = h.children, m = h.device, v = h.onChange, w = l(h, ["children", "device", "onChange"]), j = (0, d.default)(w, m, v);
              return typeof p == "function" ? p(j) : j ? p : null;
            };
            u.default = g;
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
            var l = this && this.__importDefault || function(p) {
              return p && p.__esModule ? p : { default: p };
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
            var g = l(c(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            u.toQuery = g.default;
            var h = l(c(
              /*! ./Context */
              "./src/Context.ts"
            ));
            u.Context = h.default;
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
                for (var I, B = 1, z = arguments.length; B < z; B++) {
                  I = arguments[B];
                  for (var W in I)
                    Object.prototype.hasOwnProperty.call(I, W) && (N[W] = I[W]);
                }
                return N;
              }, l.apply(this, arguments);
            }, f = this && this.__rest || function(N, I) {
              var B = {};
              for (var z in N)
                Object.prototype.hasOwnProperty.call(N, z) && I.indexOf(z) < 0 && (B[z] = N[z]);
              if (N != null && typeof Object.getOwnPropertySymbols == "function")
                for (var W = 0, z = Object.getOwnPropertySymbols(N); W < z.length; W++)
                  I.indexOf(z[W]) < 0 && Object.prototype.propertyIsEnumerable.call(N, z[W]) && (B[z[W]] = N[z[W]]);
              return B;
            }, d = this && this.__importDefault || function(N) {
              return N && N.__esModule ? N : { default: N };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var g = d(c(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), h = g.default.oneOfType([
              g.default.string,
              g.default.number
            ]), p = {
              all: g.default.bool,
              grid: g.default.bool,
              aural: g.default.bool,
              braille: g.default.bool,
              handheld: g.default.bool,
              print: g.default.bool,
              projection: g.default.bool,
              screen: g.default.bool,
              tty: g.default.bool,
              tv: g.default.bool,
              embossed: g.default.bool
            }, m = {
              orientation: g.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: g.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: g.default.string,
              deviceAspectRatio: g.default.string,
              height: h,
              deviceHeight: h,
              width: h,
              deviceWidth: h,
              color: g.default.bool,
              colorIndex: g.default.bool,
              monochrome: g.default.bool,
              resolution: h,
              type: Object.keys(p)
            };
            m.type;
            var v = f(
              m,
              ["type"]
            ), w = l({ minAspectRatio: g.default.string, maxAspectRatio: g.default.string, minDeviceAspectRatio: g.default.string, maxDeviceAspectRatio: g.default.string, minHeight: h, maxHeight: h, minDeviceHeight: h, maxDeviceHeight: h, minWidth: h, maxWidth: h, minDeviceWidth: h, maxDeviceWidth: h, minColor: g.default.number, maxColor: g.default.number, minColorIndex: g.default.number, maxColorIndex: g.default.number, minMonochrome: g.default.number, maxMonochrome: g.default.number, minResolution: h, maxResolution: h }, v), j = l(l({}, p), w);
            u.default = {
              all: j,
              types: p,
              matchers: m,
              features: w
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
            var l = this && this.__importDefault || function(v) {
              return v && v.__esModule ? v : { default: v };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var f = l(c(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), d = l(c(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), g = function(v) {
              return "not ".concat(v);
            }, h = function(v, w) {
              var j = (0, f.default)(v);
              return typeof w == "number" && (w = "".concat(w, "px")), w === !0 ? j : w === !1 ? g(j) : "(".concat(j, ": ").concat(w, ")");
            }, p = function(v) {
              return v.join(" and ");
            }, m = function(v) {
              var w = [];
              return Object.keys(d.default.all).forEach(function(j) {
                var N = v[j];
                N != null && w.push(h(j, N));
              }), p(w);
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
            var l = this && this.__importDefault || function($) {
              return $ && $.__esModule ? $ : { default: $ };
            };
            Object.defineProperty(u, "__esModule", { value: !0 });
            var f = c(
              /*! react */
              "react"
            ), d = l(c(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), g = l(c(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), h = c(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), p = l(c(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), m = l(c(
              /*! ./Context */
              "./src/Context.ts"
            )), v = function($) {
              return $.query || (0, p.default)($);
            }, w = function($) {
              if ($) {
                var b = Object.keys($);
                return b.reduce(function(k, U) {
                  return k[(0, g.default)(U)] = $[U], k;
                }, {});
              }
            }, j = function() {
              var $ = (0, f.useRef)(!1);
              return (0, f.useEffect)(function() {
                $.current = !0;
              }, []), $.current;
            }, N = function($) {
              var b = (0, f.useContext)(m.default), k = function() {
                return w($) || w(b);
              }, U = (0, f.useState)(k), x = U[0], T = U[1];
              return (0, f.useEffect)(function() {
                var S = k();
                (0, h.shallowEqualObjects)(x, S) || T(S);
              }, [$, b]), x;
            }, I = function($) {
              var b = function() {
                return v($);
              }, k = (0, f.useState)(b), U = k[0], x = k[1];
              return (0, f.useEffect)(function() {
                var T = b();
                U !== T && x(T);
              }, [$]), U;
            }, B = function($, b) {
              var k = function() {
                return (0, d.default)($, b || {}, !!b);
              }, U = (0, f.useState)(k), x = U[0], T = U[1], S = j();
              return (0, f.useEffect)(function() {
                if (S) {
                  var R = k();
                  return T(R), function() {
                    R && R.dispose();
                  };
                }
              }, [$, b]), x;
            }, z = function($) {
              var b = (0, f.useState)($.matches), k = b[0], U = b[1];
              return (0, f.useEffect)(function() {
                var x = function(T) {
                  U(T.matches);
                };
                return $.addListener(x), U($.matches), function() {
                  $.removeListener(x);
                };
              }, [$]), k;
            }, W = function($, b, k) {
              var U = N(b), x = I($);
              if (!x)
                throw new Error("Invalid or missing MediaQuery!");
              var T = B(x, U), S = z(T), R = j();
              return (0, f.useEffect)(function() {
                R && k && k(S);
              }, [S]), (0, f.useEffect)(function() {
                return function() {
                  T && T.dispose();
                };
              }, []), S;
            };
            u.default = W;
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
        return r[a].call(c.exports, c, c.exports, o), c.exports;
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
})(Bv);
const Ya = /* @__PURE__ */ Sh(Fa);
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
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
var ml;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ml || (ml = {}));
function Tt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Zh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Xh(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var vl;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(vl || (vl = {}));
function Qv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Xh(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : $v(n, t) : t,
    search: qv(r),
    hash: Kv(i)
  };
}
function $v(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Hs(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Wv(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Vv(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Xh(e) : (i = Ba({}, e), Tt(!i.pathname || !i.pathname.includes("?"), Hs("?", "pathname", "search", i)), Tt(!i.pathname || !i.pathname.includes("#"), Hs("#", "pathname", "hash", i)), Tt(!i.search || !i.search.includes("#"), Hs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (r || s == null)
    a = n;
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
  let u = Qv(i, a), c = s && s !== "/" && s.endsWith("/"), l = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || l) && (u.pathname += "/"), u;
}
const Hv = (e) => e.join("/").replace(/\/\/+/g, "/"), qv = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Kv = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, eg = ["post", "put", "patch", "delete"];
new Set(eg);
const Gv = ["get", ...eg];
new Set(Gv);
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
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
const Vu = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (Vu.displayName = "DataRouter");
const Jv = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (Jv.displayName = "DataRouterState");
const Zv = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (Zv.displayName = "Await");
const Hu = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (Hu.displayName = "Navigation");
const qu = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (qu.displayName = "Location");
const Ku = /* @__PURE__ */ re.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (Ku.displayName = "Route");
const Xv = /* @__PURE__ */ re.createContext(null);
process.env.NODE_ENV !== "production" && (Xv.displayName = "RouteError");
function tg() {
  return re.useContext(qu) != null;
}
function ew() {
  return tg() || (process.env.NODE_ENV !== "production" ? Tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Tt(!1)), re.useContext(qu).location;
}
const ng = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function rg(e) {
  re.useContext(Hu).static || re.useLayoutEffect(e);
}
function tw() {
  return re.useContext(Vu) != null ? sw() : nw();
}
function nw() {
  tg() || (process.env.NODE_ENV !== "production" ? Tt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Tt(!1));
  let {
    basename: e,
    navigator: t
  } = re.useContext(Hu), {
    matches: n
  } = re.useContext(Ku), {
    pathname: r
  } = ew(), i = JSON.stringify(Wv(n).map((a) => a.pathnameBase)), o = re.useRef(!1);
  return rg(() => {
    o.current = !0;
  }), re.useCallback(function(a, u) {
    if (u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && Zh(o.current, ng), !o.current)
      return;
    if (typeof a == "number") {
      t.go(a);
      return;
    }
    let c = Vv(a, JSON.parse(i), r, u.relative === "path");
    e !== "/" && (c.pathname = c.pathname === "/" ? e : Hv([e, c.pathname])), (u.replace ? t.replace : t.push)(c, u.state, u);
  }, [e, t, i, r]);
}
var $a;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})($a || ($a = {}));
var Wa;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(Wa || (Wa = {}));
function ig(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function rw(e) {
  let t = re.useContext(Vu);
  return t || (process.env.NODE_ENV !== "production" ? Tt(!1, ig(e)) : Tt(!1)), t;
}
function iw(e) {
  let t = re.useContext(Ku);
  return t || (process.env.NODE_ENV !== "production" ? Tt(!1, ig(e)) : Tt(!1)), t;
}
function ow(e) {
  let t = iw(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? Tt(!1, e + ' can only be used on routes that contain a unique "id"') : Tt(!1)), n.route.id;
}
function sw() {
  let {
    router: e
  } = rw($a.UseNavigateStable), t = ow(Wa.UseNavigateStable), n = re.useRef(!1);
  return rg(() => {
    n.current = !0;
  }), re.useCallback(function(i, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && Zh(n.current, ng), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Qa({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
var wl;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(wl || (wl = {}));
new Promise(() => {
});
const aw = {
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
}, uw = {
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
}, cw = {
  sun: "#FFC000",
  moon: "#F7E7CE"
}, lw = {
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
}, Ge = {
  light: aw,
  dark: uw,
  icon: cw,
  quarter: lw
};
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pe.apply(this, arguments);
}
function Je(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ko = {}, fw = {
  get exports() {
    return ko;
  },
  set exports(e) {
    ko = e;
  }
}, $e = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dl;
function dw() {
  if (Dl)
    return $e;
  Dl = 1;
  var e = 60103, t = 60106, n = 60107, r = 60108, i = 60114, o = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, g = 60122, h = 60117, p = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var v = Symbol.for;
    e = v("react.element"), t = v("react.portal"), n = v("react.fragment"), r = v("react.strict_mode"), i = v("react.profiler"), o = v("react.provider"), s = v("react.context"), a = v("react.forward_ref"), u = v("react.suspense"), c = v("react.suspense_list"), l = v("react.memo"), f = v("react.lazy"), d = v("react.block"), g = v("react.server.block"), h = v("react.fundamental"), p = v("react.debug_trace_mode"), m = v("react.legacy_hidden");
  }
  function w(x) {
    if (typeof x == "object" && x !== null) {
      var T = x.$$typeof;
      switch (T) {
        case e:
          switch (x = x.type, x) {
            case n:
            case i:
            case r:
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
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  var j = o, N = e, I = a, B = n, z = f, W = l, $ = t, b = i, k = r, U = u;
  return $e.ContextConsumer = s, $e.ContextProvider = j, $e.Element = N, $e.ForwardRef = I, $e.Fragment = B, $e.Lazy = z, $e.Memo = W, $e.Portal = $, $e.Profiler = b, $e.StrictMode = k, $e.Suspense = U, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(x) {
    return w(x) === s;
  }, $e.isContextProvider = function(x) {
    return w(x) === o;
  }, $e.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, $e.isForwardRef = function(x) {
    return w(x) === a;
  }, $e.isFragment = function(x) {
    return w(x) === n;
  }, $e.isLazy = function(x) {
    return w(x) === f;
  }, $e.isMemo = function(x) {
    return w(x) === l;
  }, $e.isPortal = function(x) {
    return w(x) === t;
  }, $e.isProfiler = function(x) {
    return w(x) === i;
  }, $e.isStrictMode = function(x) {
    return w(x) === r;
  }, $e.isSuspense = function(x) {
    return w(x) === u;
  }, $e.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === i || x === p || x === r || x === u || x === c || x === m || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === l || x.$$typeof === o || x.$$typeof === s || x.$$typeof === a || x.$$typeof === h || x.$$typeof === d || x[0] === g);
  }, $e.typeOf = w, $e;
}
var We = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Al;
function hw() {
  return Al || (Al = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, n = 60107, r = 60108, i = 60114, o = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, g = 60122, h = 60117, p = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var v = Symbol.for;
      e = v("react.element"), t = v("react.portal"), n = v("react.fragment"), r = v("react.strict_mode"), i = v("react.profiler"), o = v("react.provider"), s = v("react.context"), a = v("react.forward_ref"), u = v("react.suspense"), c = v("react.suspense_list"), l = v("react.memo"), f = v("react.lazy"), d = v("react.block"), g = v("react.server.block"), h = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), p = v("react.debug_trace_mode"), v("react.offscreen"), m = v("react.legacy_hidden");
    }
    var w = !1;
    function j(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === n || Q === i || Q === p || Q === r || Q === u || Q === c || Q === m || w || typeof Q == "object" && Q !== null && (Q.$$typeof === f || Q.$$typeof === l || Q.$$typeof === o || Q.$$typeof === s || Q.$$typeof === a || Q.$$typeof === h || Q.$$typeof === d || Q[0] === g));
    }
    function N(Q) {
      if (typeof Q == "object" && Q !== null) {
        var V = Q.$$typeof;
        switch (V) {
          case e:
            var fe = Q.type;
            switch (fe) {
              case n:
              case i:
              case r:
              case u:
              case c:
                return fe;
              default:
                var te = fe && fe.$$typeof;
                switch (te) {
                  case s:
                  case a:
                  case f:
                  case l:
                  case o:
                    return te;
                  default:
                    return V;
                }
            }
          case t:
            return V;
        }
      }
    }
    var I = s, B = o, z = e, W = a, $ = n, b = f, k = l, U = t, x = i, T = r, S = u, R = !1, C = !1;
    function J(Q) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(Q) {
      return C || (C = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(Q) {
      return N(Q) === s;
    }
    function F(Q) {
      return N(Q) === o;
    }
    function P(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function q(Q) {
      return N(Q) === a;
    }
    function K(Q) {
      return N(Q) === n;
    }
    function X(Q) {
      return N(Q) === f;
    }
    function O(Q) {
      return N(Q) === l;
    }
    function ne(Q) {
      return N(Q) === t;
    }
    function G(Q) {
      return N(Q) === i;
    }
    function he(Q) {
      return N(Q) === r;
    }
    function H(Q) {
      return N(Q) === u;
    }
    We.ContextConsumer = I, We.ContextProvider = B, We.Element = z, We.ForwardRef = W, We.Fragment = $, We.Lazy = b, We.Memo = k, We.Portal = U, We.Profiler = x, We.StrictMode = T, We.Suspense = S, We.isAsyncMode = J, We.isConcurrentMode = ie, We.isContextConsumer = L, We.isContextProvider = F, We.isElement = P, We.isForwardRef = q, We.isFragment = K, We.isLazy = X, We.isMemo = O, We.isPortal = ne, We.isProfiler = G, We.isStrictMode = he, We.isSuspense = H, We.isValidElementType = j, We.typeOf = N;
  }()), We;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = dw() : e.exports = hw();
})(fw);
function og(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = og(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function at() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = og(e)) && (r && (r += " "), r += t);
  return r;
}
function sg(e) {
  return typeof e == "string";
}
function $i(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Ar(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function ag(e) {
  if (!Ar(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ag(e[n]);
  }), t;
}
function un(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? pe({}, e) : e;
  return Ar(e) && Ar(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (Ar(t[i]) && i in e && Ar(e[i]) ? r[i] = un(e[i], t[i], n) : n.clone ? r[i] = Ar(t[i]) ? ag(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function gw(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ug(e, t, n, r, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = o.type;
  return typeof u == "function" && !gw(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cg = $i(D.element, ug);
cg.isRequired = $i(D.element.isRequired, ug);
const Wi = cg;
function pw(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Mw(e, t, n, r, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof o == "function" && !pw(o) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const lg = $i(D.elementType, Mw), yw = "exact-prop: ​";
function fg(e) {
  return process.env.NODE_ENV === "production" ? e : pe({}, e, {
    [yw]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Si(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const mw = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function vw(e) {
  const t = `${e}`.match(mw);
  return t && t[1] || "";
}
function dg(e, t = "") {
  return e.displayName || e.name || vw(e) || t;
}
function El(e, t, n) {
  const r = dg(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ww(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return dg(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ir.ForwardRef:
          return El(e, e.render, "ForwardRef");
        case ir.Memo:
          return El(e, e.type, "memo");
        default:
          return;
      }
  }
}
function kr(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], s = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Dw = D.oneOfType([D.func, D.object]), hg = Dw;
function yi(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Si(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Il(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Aw(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(o, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function $t(e) {
  return e && e.ownerDocument || document;
}
function bi(e) {
  return $t(e).defaultView || window;
}
function Va(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ew = typeof window < "u" ? re.useLayoutEffect : re.useEffect, Ci = Ew;
function Tr(e) {
  const t = re.useRef(e);
  return Ci(() => {
    t.current = e;
  }), re.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function jt(...e) {
  return re.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Va(n, t);
    });
  }, e);
}
let rs = !0, Ha = !1, Nl;
const Iw = {
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
function Nw(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Iw[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Tw(e) {
  e.metaKey || e.altKey || e.ctrlKey || (rs = !0);
}
function qs() {
  rs = !1;
}
function jw() {
  this.visibilityState === "hidden" && Ha && (rs = !0);
}
function Sw(e) {
  e.addEventListener("keydown", Tw, !0), e.addEventListener("mousedown", qs, !0), e.addEventListener("pointerdown", qs, !0), e.addEventListener("touchstart", qs, !0), e.addEventListener("visibilitychange", jw, !0);
}
function bw(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return rs || Nw(t);
}
function Cw() {
  const e = re.useCallback((i) => {
    i != null && Sw(i.ownerDocument);
  }, []), t = re.useRef(!1);
  function n() {
    return t.current ? (Ha = !0, window.clearTimeout(Nl), Nl = window.setTimeout(() => {
      Ha = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return bw(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function gg(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function xw(e) {
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
function Ow(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Lw = Number.isInteger || Ow;
function pg(e, t, n, r) {
  const i = e[t];
  if (i == null || !Lw(i)) {
    const o = xw(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${o}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Mg(e, t, ...n) {
  return e[t] === void 0 ? null : pg(e, t, ...n);
}
function qa() {
  return null;
}
Mg.isRequired = pg;
qa.isRequired = qa;
const yg = process.env.NODE_ENV === "production" ? qa : Mg;
function mg(e, t) {
  const n = pe({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = pe({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, o = t[r];
      n[r] = {}, !o || !Object.keys(o) ? n[r] = i : !i || !Object.keys(i) ? n[r] = o : (n[r] = pe({}, o), Object.keys(i).forEach((s) => {
        n[r][s] = mg(i[s], o[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function _n(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((o, s) => {
        if (s) {
          const a = t(s);
          a !== "" && o.push(a), n && n[s] && o.push(n[s]);
        }
        return o;
      }, []).join(" ");
    }
  ), r;
}
const Tl = (e) => e, _w = () => {
  let e = Tl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Tl;
    }
  };
}, kw = _w(), zw = kw, Pw = {
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
function Zt(e, t, n = "Mui") {
  const r = Pw[t];
  return r ? `${n}-${r}` : `${zw.generate(e)}-${t}`;
}
function Pt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Zt(e, i, n);
  }), r;
}
function Rw(e) {
  return typeof e == "function" ? e() : e;
}
const zo = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: o = !1
  } = t, [s, a] = re.useState(null), u = jt(/* @__PURE__ */ re.isValidElement(r) ? r.ref : null, n);
  return Ci(() => {
    o || a(Rw(i) || document.body);
  }, [i, o]), Ci(() => {
    if (s && !o)
      return Va(n, s), () => {
        Va(n, null);
      };
  }, [n, s, o]), o ? /* @__PURE__ */ re.isValidElement(r) ? /* @__PURE__ */ re.cloneElement(r, {
    ref: u
  }) : r : s && /* @__PURE__ */ FM.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (zo.propTypes = {
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
  container: D.oneOfType([kr, D.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: D.bool
});
process.env.NODE_ENV !== "production" && (zo["propTypes"] = fg(zo.propTypes));
const Uw = zo;
function Fw(e) {
  const t = $t(e);
  return t.body === e ? bi(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function jl(e) {
  return parseInt(bi(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Sl(e, t, n, r = [], i) {
  const o = [t, n, ...r], s = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, (a) => {
    o.indexOf(a) === -1 && s.indexOf(a.tagName) === -1 && mi(a, i);
  });
}
function Ks(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Yw(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Fw(r)) {
      const u = gg($t(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${jl(r) + u}px`;
      const c = $t(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${jl(l) + u}px`;
      });
    }
    const o = r.parentElement, s = bi(r), a = (o == null ? void 0 : o.nodeName) === "HTML" && s.getComputedStyle(o).overflowY === "scroll" ? o : r;
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
      value: o,
      el: s,
      property: a
    }) => {
      o ? s.style.setProperty(a, o) : s.style.removeProperty(a);
    });
  };
}
function Bw(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Qw {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && mi(t.modalRef, !1);
    const i = Bw(n);
    Sl(n, t.mount, t.modalRef, i, !0);
    const o = Ks(this.containers, (s) => s.container === n);
    return o !== -1 ? (this.containers[o].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Ks(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = Yw(i, n));
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const r = Ks(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[r];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && mi(t.modalRef, !0), Sl(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const o = i.modals[i.modals.length - 1];
      o.modalRef && mi(o.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const $w = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ww(e) {
  const t = parseInt(e.getAttribute("tabindex"), 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Vw(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Hw(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Vw(e));
}
function qw(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll($w)).forEach((r, i) => {
    const o = Ww(r);
    o === -1 || !Hw(r) || (o === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: o,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Kw() {
  return !0;
}
function Po(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = qw,
    isEnabled: s = Kw,
    open: a
  } = e, u = re.useRef(), c = re.useRef(null), l = re.useRef(null), f = re.useRef(null), d = re.useRef(null), g = re.useRef(!1), h = re.useRef(null), p = jt(t.ref, h), m = re.useRef(null);
  re.useEffect(() => {
    !a || !h.current || (g.current = !n);
  }, [n, a]), re.useEffect(() => {
    if (!a || !h.current)
      return;
    const j = $t(h.current);
    return h.current.contains(j.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", -1)), g.current && h.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), re.useEffect(() => {
    if (!a || !h.current)
      return;
    const j = $t(h.current), N = (z) => {
      const {
        current: W
      } = h;
      if (W !== null) {
        if (!j.hasFocus() || r || !s() || u.current) {
          u.current = !1;
          return;
        }
        if (!W.contains(j.activeElement)) {
          if (z && d.current !== z.target || j.activeElement !== d.current)
            d.current = null;
          else if (d.current !== null)
            return;
          if (!g.current)
            return;
          let k = [];
          if ((j.activeElement === c.current || j.activeElement === l.current) && (k = o(h.current)), k.length > 0) {
            var $, b;
            const U = !!(($ = m.current) != null && $.shiftKey && ((b = m.current) == null ? void 0 : b.key) === "Tab"), x = k[0], T = k[k.length - 1];
            U ? T.focus() : x.focus();
          } else
            W.focus();
        }
      }
    }, I = (z) => {
      m.current = z, !(r || !s() || z.key !== "Tab") && j.activeElement === h.current && z.shiftKey && (u.current = !0, l.current.focus());
    };
    j.addEventListener("focusin", N), j.addEventListener("keydown", I, !0);
    const B = setInterval(() => {
      j.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(B), j.removeEventListener("focusin", N), j.removeEventListener("keydown", I, !0);
    };
  }, [n, r, i, s, a, o]);
  const v = (j) => {
    f.current === null && (f.current = j.relatedTarget), g.current = !0, d.current = j.target;
    const N = t.props.onFocus;
    N && N(j);
  }, w = (j) => {
    f.current === null && (f.current = j.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ge.jsxs(re.Fragment, {
    children: [/* @__PURE__ */ ge.jsx("div", {
      tabIndex: 0,
      onFocus: w,
      ref: c,
      "data-test": "sentinelStart"
    }), /* @__PURE__ */ re.cloneElement(t, {
      ref: p,
      onFocus: v
    }), /* @__PURE__ */ ge.jsx("div", {
      tabIndex: 0,
      onFocus: w,
      ref: l,
      "data-test": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Po.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Wi,
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
process.env.NODE_ENV !== "production" && (Po["propTypes"] = fg(Po.propTypes));
function Gw(e) {
  return Zt("MuiModal", e);
}
Pt("MuiModal", ["root", "hidden"]);
const Jw = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"], Zw = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return _n({
    root: ["root", !t && n && "hidden"]
  }, Gw, r);
};
function Xw(e) {
  return typeof e == "function" ? e() : e;
}
function e0(e) {
  return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
const t0 = new Qw(), vg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const {
    BackdropComponent: r,
    BackdropProps: i,
    children: o,
    classes: s,
    className: a,
    closeAfterTransition: u = !1,
    component: c = "div",
    components: l = {},
    componentsProps: f = {},
    container: d,
    disableAutoFocus: g = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: p = !1,
    disablePortal: m = !1,
    disableRestoreFocus: v = !1,
    disableScrollLock: w = !1,
    hideBackdrop: j = !1,
    keepMounted: N = !1,
    // private
    // eslint-disable-next-line react/prop-types
    manager: I = t0,
    onBackdropClick: B,
    onClose: z,
    onKeyDown: W,
    open: $,
    /* eslint-disable react/prop-types */
    theme: b,
    onTransitionEnter: k,
    onTransitionExited: U
  } = t, x = Je(t, Jw), [T, S] = re.useState(!0), R = re.useRef({}), C = re.useRef(null), J = re.useRef(null), ie = jt(J, n), L = e0(t), F = () => $t(C.current), P = () => (R.current.modalRef = J.current, R.current.mountNode = C.current, R.current), q = () => {
    I.mount(P(), {
      disableScrollLock: w
    }), J.current.scrollTop = 0;
  }, K = Tr(() => {
    const de = Xw(d) || F().body;
    I.add(P(), de), J.current && q();
  }), X = re.useCallback(() => I.isTopModal(P()), [I]), O = Tr((de) => {
    C.current = de, de && ($ && X() ? q() : mi(J.current, !0));
  }), ne = re.useCallback(() => {
    I.remove(P());
  }, [I]);
  re.useEffect(() => () => {
    ne();
  }, [ne]), re.useEffect(() => {
    $ ? K() : (!L || !u) && ne();
  }, [$, ne, L, u, K]);
  const G = pe({}, t, {
    classes: s,
    closeAfterTransition: u,
    disableAutoFocus: g,
    disableEnforceFocus: h,
    disableEscapeKeyDown: p,
    disablePortal: m,
    disableRestoreFocus: v,
    disableScrollLock: w,
    exited: T,
    hideBackdrop: j,
    keepMounted: N
  }), he = Zw(G);
  if (!N && !$ && (!L || T))
    return null;
  const H = () => {
    S(!1), k && k();
  }, Q = () => {
    S(!0), U && U(), u && ne();
  }, V = (de) => {
    de.target === de.currentTarget && (B && B(de), z && z(de, "backdropClick"));
  }, fe = (de) => {
    W && W(de), !(de.key !== "Escape" || !X()) && (p || (de.stopPropagation(), z && z(de, "escapeKeyDown")));
  }, te = {};
  o.props.tabIndex === void 0 && (te.tabIndex = "-1"), L && (te.onEnter = Il(H, o.props.onEnter), te.onExited = Il(Q, o.props.onExited));
  const le = l.Root || c, Me = f.root || {};
  return /* @__PURE__ */ ge.jsx(Uw, {
    ref: O,
    container: d,
    disablePortal: m,
    children: /* @__PURE__ */ ge.jsxs(le, pe({
      role: "presentation"
    }, Me, !sg(le) && {
      as: c,
      ownerState: pe({}, G, Me.ownerState),
      theme: b
    }, x, {
      ref: ie,
      onKeyDown: fe,
      className: at(he.root, Me.className, a),
      children: [!j && r ? /* @__PURE__ */ ge.jsx(r, pe({
        "aria-hidden": !0,
        open: $,
        onClick: V
      }, i)) : null, /* @__PURE__ */ ge.jsx(Po, {
        disableEnforceFocus: h,
        disableAutoFocus: g,
        disableRestoreFocus: v,
        isEnabled: X,
        open: $,
        children: /* @__PURE__ */ re.cloneElement(o, te)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (vg.propTypes = {
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
  children: Wi.isRequired,
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
  container: D.oneOfType([kr, D.func]),
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
const n0 = vg;
function r0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function i0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var o0 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(i0(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var s = r0(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', a);
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), dt = "-ms-", Ro = "-moz-", _e = "-webkit-", Gu = "comm", Ju = "rule", Zu = "decl", s0 = "@import", wg = "@keyframes", a0 = Math.abs, is = String.fromCharCode, u0 = Object.assign;
function c0(e, t) {
  return lt(e, 0) ^ 45 ? (((t << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function Dg(e) {
  return e.trim();
}
function l0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Ka(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function xi(e, t, n) {
  return e.slice(t, n);
}
function qt(e) {
  return e.length;
}
function Xu(e) {
  return e.length;
}
function io(e, t) {
  return t.push(e), e;
}
function f0(e, t) {
  return e.map(t).join("");
}
var os = 1, zr = 1, Ag = 0, Dt = 0, ot = 0, $r = "";
function ss(e, t, n, r, i, o, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: os, column: zr, length: s, return: "" };
}
function Zr(e, t) {
  return u0(ss("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function d0() {
  return ot;
}
function h0() {
  return ot = Dt > 0 ? lt($r, --Dt) : 0, zr--, ot === 10 && (zr = 1, os--), ot;
}
function St() {
  return ot = Dt < Ag ? lt($r, Dt++) : 0, zr++, ot === 10 && (zr = 1, os++), ot;
}
function Jt() {
  return lt($r, Dt);
}
function wo() {
  return Dt;
}
function Vi(e, t) {
  return xi($r, e, t);
}
function Oi(e) {
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
function Eg(e) {
  return os = zr = 1, Ag = qt($r = e), Dt = 0, [];
}
function Ig(e) {
  return $r = "", e;
}
function Do(e) {
  return Dg(Vi(Dt - 1, Ga(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function g0(e) {
  for (; (ot = Jt()) && ot < 33; )
    St();
  return Oi(e) > 2 || Oi(ot) > 3 ? "" : " ";
}
function p0(e, t) {
  for (; --t && St() && !(ot < 48 || ot > 102 || ot > 57 && ot < 65 || ot > 70 && ot < 97); )
    ;
  return Vi(e, wo() + (t < 6 && Jt() == 32 && St() == 32));
}
function Ga(e) {
  for (; St(); )
    switch (ot) {
      case e:
        return Dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ga(ot);
        break;
      case 40:
        e === 41 && Ga(e);
        break;
      case 92:
        St();
        break;
    }
  return Dt;
}
function M0(e, t) {
  for (; St() && e + ot !== 47 + 10; )
    if (e + ot === 42 + 42 && Jt() === 47)
      break;
  return "/*" + Vi(t, Dt - 1) + "*" + is(e === 47 ? e : St());
}
function y0(e) {
  for (; !Oi(Jt()); )
    St();
  return Vi(e, Dt);
}
function m0(e) {
  return Ig(Ao("", null, null, null, [""], e = Eg(e), 0, [0], e));
}
function Ao(e, t, n, r, i, o, s, a, u) {
  for (var c = 0, l = 0, f = s, d = 0, g = 0, h = 0, p = 1, m = 1, v = 1, w = 0, j = "", N = i, I = o, B = r, z = j; m; )
    switch (h = w, w = St()) {
      case 40:
        if (h != 108 && lt(z, f - 1) == 58) {
          Ka(z += ze(Do(w), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        z += Do(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += g0(h);
        break;
      case 92:
        z += p0(wo() - 1, 7);
        continue;
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            io(v0(M0(St(), wo()), t, n), u);
            break;
          default:
            z += "/";
        }
        break;
      case 123 * p:
        a[c++] = qt(z) * v;
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            v == -1 && (z = ze(z, /\f/g, "")), g > 0 && qt(z) - f && io(g > 32 ? Cl(z + ";", r, n, f - 1) : Cl(ze(z, " ", "") + ";", r, n, f - 2), u);
            break;
          case 59:
            z += ";";
          default:
            if (io(B = bl(z, t, n, c, l, i, a, j, N = [], I = [], f), o), w === 123)
              if (l === 0)
                Ao(z, t, B, B, N, o, f, a, I);
              else
                switch (d === 99 && lt(z, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Ao(e, B, B, r && io(bl(e, B, B, 0, 0, i, a, j, i, N = [], f), I), i, I, f, a, r ? N : I);
                    break;
                  default:
                    Ao(z, B, B, B, [""], I, 0, a, I);
                }
        }
        c = l = g = 0, p = v = 1, j = z = "", f = s;
        break;
      case 58:
        f = 1 + qt(z), g = h;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && h0() == 125)
            continue;
        }
        switch (z += is(w), w * p) {
          case 38:
            v = l > 0 ? 1 : (z += "\f", -1);
            break;
          case 44:
            a[c++] = (qt(z) - 1) * v, v = 1;
            break;
          case 64:
            Jt() === 45 && (z += Do(St())), d = Jt(), l = f = qt(j = z += y0(wo())), w++;
            break;
          case 45:
            h === 45 && qt(z) == 2 && (p = 0);
        }
    }
  return o;
}
function bl(e, t, n, r, i, o, s, a, u, c, l) {
  for (var f = i - 1, d = i === 0 ? o : [""], g = Xu(d), h = 0, p = 0, m = 0; h < r; ++h)
    for (var v = 0, w = xi(e, f + 1, f = a0(p = s[h])), j = e; v < g; ++v)
      (j = Dg(p > 0 ? d[v] + " " + w : ze(w, /&\f/g, d[v]))) && (u[m++] = j);
  return ss(e, t, n, i === 0 ? Ju : a, u, c, l);
}
function v0(e, t, n) {
  return ss(e, t, n, Gu, is(d0()), xi(e, 2, -2), 0);
}
function Cl(e, t, n, r) {
  return ss(e, t, n, Zu, xi(e, 0, r), xi(e, r + 1, -1), r);
}
function br(e, t) {
  for (var n = "", r = Xu(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function w0(e, t, n, r) {
  switch (e.type) {
    case s0:
    case Zu:
      return e.return = e.return || e.value;
    case Gu:
      return "";
    case wg:
      return e.return = e.value + "{" + br(e.children, r) + "}";
    case Ju:
      e.value = e.props.join(",");
  }
  return qt(n = br(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function D0(e) {
  var t = Xu(e);
  return function(n, r, i, o) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, i, o) || "";
    return s;
  };
}
function A0(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var E0 = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = Jt(), i === 38 && o === 12 && (n[r] = 1), !Oi(o); )
    St();
  return Vi(t, Dt);
}, I0 = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Oi(i)) {
      case 0:
        i === 38 && Jt() === 12 && (n[r] = 1), t[r] += E0(Dt - 1, n, r);
        break;
      case 2:
        t[r] += Do(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Jt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += is(i);
    }
  while (i = St());
  return t;
}, N0 = function(t, n) {
  return Ig(I0(Eg(t), n));
}, xl = /* @__PURE__ */ new WeakMap(), T0 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !xl.get(r)) && !i) {
      xl.set(t, !0);
      for (var o = [], s = N0(n, o), a = r.props, u = 0, c = 0; u < s.length; u++)
        for (var l = 0; l < a.length; l++, c++)
          t.props[c] = o[u] ? s[u].replace(/&\f/g, a[l]) : a[l] + " " + s[u];
    }
  }
}, j0 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, S0 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", b0 = function(t) {
  return t.type === "comm" && t.children.indexOf(S0) > -1;
}, C0 = function(t) {
  return function(n, r, i) {
    if (!(n.type !== "rule" || t.compat)) {
      var o = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var s = !!n.parent, a = s ? n.parent.children : (
          // global rule at the root level
          i
        ), u = a.length - 1; u >= 0; u--) {
          var c = a[u];
          if (c.line < n.line)
            break;
          if (c.column < n.column) {
            if (b0(c))
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
}, Ng = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, x0 = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!Ng(n[r]))
      return !0;
  return !1;
}, Ol = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, O0 = function(t, n, r) {
  Ng(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ol(t)) : x0(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ol(t)));
};
function Tg(e, t) {
  switch (c0(e, t)) {
    case 5103:
      return _e + "print-" + e + e;
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
      return _e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _e + e + Ro + e + dt + e + e;
    case 6828:
    case 4268:
      return _e + e + dt + e + e;
    case 6165:
      return _e + e + dt + "flex-" + e + e;
    case 5187:
      return _e + e + ze(e, /(\w+).+(:[^]+)/, _e + "box-$1$2" + dt + "flex-$1$2") + e;
    case 5443:
      return _e + e + dt + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return _e + e + dt + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return _e + e + dt + ze(e, "shrink", "negative") + e;
    case 5292:
      return _e + e + dt + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return _e + "box-" + ze(e, "-grow", "") + _e + e + dt + ze(e, "grow", "positive") + e;
    case 4554:
      return _e + ze(e, /([^-])(transform)/g, "$1" + _e + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, _e + "$1"), /(image-set)/, _e + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, _e + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, _e + "box-pack:$3" + dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _e + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, _e + "$1$2") + e;
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
      if (qt(e) - 1 - t > 6)
        switch (lt(e, t + 1)) {
          case 109:
            if (lt(e, t + 4) !== 45)
              break;
          case 102:
            return ze(e, /(.+:)(.+)-([^]+)/, "$1" + _e + "$2-$3$1" + Ro + (lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ka(e, "stretch") ? Tg(ze(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (lt(e, qt(e) - 3 - (~Ka(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + _e) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _e + (lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _e + "$2$3$1" + dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (lt(e, t + 11)) {
        case 114:
          return _e + e + dt + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _e + e + dt + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _e + e + dt + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return _e + e + dt + e + e;
  }
  return e;
}
var L0 = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Zu:
        t.return = Tg(t.value, t.length);
        break;
      case wg:
        return br([Zr(t, {
          value: ze(t.value, "@", "@" + _e)
        })], i);
      case Ju:
        if (t.length)
          return f0(t.props, function(o) {
            switch (l0(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return br([Zr(t, {
                  props: [ze(o, /:(read-\w+)/, ":" + Ro + "$1")]
                })], i);
              case "::placeholder":
                return br([Zr(t, {
                  props: [ze(o, /:(plac\w+)/, ":" + _e + "input-$1")]
                }), Zr(t, {
                  props: [ze(o, /:(plac\w+)/, ":" + Ro + "$1")]
                }), Zr(t, {
                  props: [ze(o, /:(plac\w+)/, dt + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, _0 = [L0], k0 = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || _0;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var o = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), v = 1; v < m.length; v++)
        o[m[v]] = !0;
      a.push(p);
    }
  );
  var u, c = [T0, j0];
  process.env.NODE_ENV !== "production" && c.push(C0({
    get compat() {
      return h.compat;
    }
  }), O0);
  {
    var l, f = [w0, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? l.insert(p.return) : p.value && p.type !== Gu && l.insert(p.value + "{}"));
    } : A0(function(p) {
      l.insert(p);
    })], d = D0(c.concat(i, f)), g = function(m) {
      return br(m0(m), d);
    };
    u = function(m, v, w, j) {
      l = w, process.env.NODE_ENV !== "production" && v.map !== void 0 && (l = {
        insert: function(I) {
          w.insert(I + v.map);
        }
      }), g(m ? m + "{" + v.styles + "}" : v.styles), j && (h.inserted[v.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new o0({
      key: n,
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
  return h.sheet.hydrate(a), h;
}, z0 = !0;
function ec(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var as = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  z0 === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, us = function(t, n, r) {
  as(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function P0(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var R0 = {
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
}, Ll = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, U0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", F0 = /[A-Z]|^ms/g, jg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tc = function(t) {
  return t.charCodeAt(1) === 45;
}, _l = function(t) {
  return t != null && typeof t != "boolean";
}, Gs = /* @__PURE__ */ bh(function(e) {
  return tc(e) ? e : e.replace(F0, "-$&").toLowerCase();
}), Uo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(jg, function(r, i, o) {
          return Bt = {
            name: i,
            styles: o,
            next: Bt
          }, i;
        });
  }
  return R0[t] !== 1 && !tc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Y0 = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, B0 = ["normal", "none", "initial", "inherit", "unset"], Q0 = Uo, $0 = /^-ms-/, W0 = /-(.)/g, kl = {};
  Uo = function(t, n) {
    if (t === "content" && (typeof n != "string" || B0.indexOf(n) === -1 && !Y0.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = Q0(t, n);
    return r !== "" && !tc(t) && t.indexOf("-") !== -1 && kl[t] === void 0 && (kl[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace($0, "ms-").replace(W0, function(i, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var Sg = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Li(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Sg);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Bt = {
          name: n.name,
          styles: n.styles,
          next: Bt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Bt = {
              name: r.name,
              styles: r.styles,
              next: Bt
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return V0(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = Bt, s = n(e);
        return Bt = o, Li(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = n.replace(jg, function(l, f, d) {
          var g = "animation" + a.length;
          return a.push("const " + g + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var c = t[n];
  return c !== void 0 ? c : n;
}
function V0(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Li(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? r += o + "{" + t[s] + "}" : _l(s) && (r += Gs(o) + ":" + Uo(o, s) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Sg);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            _l(s[a]) && (r += Gs(o) + ":" + Uo(o, s[a]) + ";");
        else {
          var u = Li(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Gs(o) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(U0), r += o + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var zl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, bg;
process.env.NODE_ENV !== "production" && (bg = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Bt, Pr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, o = "";
  Bt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (i = !1, o += Li(r, n, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Ll), o += s[0]);
  for (var a = 1; a < t.length; a++)
    o += Li(r, n, t[a]), i && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(Ll), o += s[a]);
  var u;
  process.env.NODE_ENV !== "production" && (o = o.replace(bg, function(d) {
    return u = d, "";
  })), zl.lastIndex = 0;
  for (var c = "", l; (l = zl.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var f = P0(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: o,
    map: u,
    next: Bt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: o,
    next: Bt
  };
}, H0 = {}.hasOwnProperty, nc = /* @__PURE__ */ pn(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ k0({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (nc.displayName = "EmotionCacheContext");
nc.Provider;
var cs = function(t) {
  return /* @__PURE__ */ es(function(n, r) {
    var i = gt(nc);
    return t(n, i, r);
  });
}, Wr = /* @__PURE__ */ pn({});
process.env.NODE_ENV !== "production" && (Wr.displayName = "EmotionThemeContext");
var q0 = re["useInsertionEffect"] ? re["useInsertionEffect"] : function(t) {
  t();
};
function Cg(e) {
  q0(e);
}
var Pl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Rl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", K0 = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return as(n, r, i), Cg(function() {
    return us(n, r, i);
  }), null;
}, G0 = /* @__PURE__ */ cs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Pl], o = [r], s = "";
  typeof e.className == "string" ? s = ec(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var a = Pr(o, void 0, gt(Wr));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[Rl];
    u && (a = Pr([a, "label:" + u + ";"]));
  }
  s += t.key + "-" + a.name;
  var c = {};
  for (var l in e)
    H0.call(e, l) && l !== "css" && l !== Pl && (process.env.NODE_ENV === "production" || l !== Rl) && (c[l] = e[l]);
  return c.ref = n, c.className = s, /* @__PURE__ */ wt(jn, null, /* @__PURE__ */ wt(K0, {
    cache: t,
    serialized: a,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ wt(i, c));
});
process.env.NODE_ENV !== "production" && (G0.displayName = "EmotionCssPropInternal");
var J0 = {
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
}, Ul = re["useInsertionEffect"] ? re["useInsertionEffect"] : jh, Fl = !1, Z0 = /* @__PURE__ */ cs(function(e, t) {
  process.env.NODE_ENV !== "production" && !Fl && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Fl = !0);
  var n = e.styles, r = Pr([n], void 0, gt(Wr)), i = tt();
  return Ul(function() {
    var o = t.key + "-global", s = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", o), s.hydrate([u])), i.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Ul(function() {
    var o = i.current, s = o[0], a = o[1];
    if (a) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && us(t, r.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (Z0.displayName = "EmotionGlobal");
function X0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pr(t);
}
var rc = function() {
  var t = X0.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, eD = function e(t) {
  for (var n = t.length, r = 0, i = ""; r < n; r++) {
    var o = t[r];
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
function tD(e, t, n) {
  var r = [], i = ec(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var nD = function(t) {
  var n = t.cache, r = t.serializedArr;
  return Cg(function() {
    for (var i = 0; i < r.length; i++)
      us(n, r[i], !1);
  }), null;
}, rD = /* @__PURE__ */ cs(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    var d = Pr(l, t.registered);
    return r.push(d), as(t, d, !1), t.key + "-" + d.name;
  }, o = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    return tD(t.registered, i, eD(l));
  }, s = {
    css: i,
    cx: o,
    theme: gt(Wr)
  }, a = e.children(s);
  return n = !0, /* @__PURE__ */ wt(jn, null, /* @__PURE__ */ wt(nD, {
    cache: t,
    serializedArr: r
  }), a);
});
process.env.NODE_ENV !== "production" && (rD.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Yl = !0, iD = typeof jest < "u";
  if (Yl && !iD) {
    var Bl = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Yl ? window : global
    ), Ql = "__EMOTION_REACT_" + J0.version.split(".")[0] + "__";
    Bl[Ql] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Bl[Ql] = !0;
  }
}
var oD = Ca, sD = function(t) {
  return t !== "theme";
}, $l = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? oD : sD;
}, Wl = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(s) {
      return t.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, aD = re["useInsertionEffect"] ? re["useInsertionEffect"] : function(t) {
  t();
};
function uD(e) {
  aD(e);
}
var Vl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, cD = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return as(n, r, i), uD(function() {
    return us(n, r, i);
  }), null;
}, lD = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, s;
  n !== void 0 && (o = n.label, s = n.target);
  var a = Wl(t, n, r), u = a || $l(i), c = !u("as");
  return function() {
    var l = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Vl), f.push(l[0][0]);
      for (var d = l.length, g = 1; g < d; g++)
        process.env.NODE_ENV !== "production" && l[0][g] === void 0 && console.error(Vl), f.push(l[g], l[0][g]);
    }
    var h = cs(function(p, m, v) {
      var w = c && p.as || i, j = "", N = [], I = p;
      if (p.theme == null) {
        I = {};
        for (var B in p)
          I[B] = p[B];
        I.theme = gt(Wr);
      }
      typeof p.className == "string" ? j = ec(m.registered, N, p.className) : p.className != null && (j = p.className + " ");
      var z = Pr(f.concat(N), m.registered, I);
      j += m.key + "-" + z.name, s !== void 0 && (j += " " + s);
      var W = c && a === void 0 ? $l(w) : u, $ = {};
      for (var b in p)
        c && b === "as" || // $FlowFixMe
        W(b) && ($[b] = p[b]);
      return $.className = j, $.ref = v, /* @__PURE__ */ wt(jn, null, /* @__PURE__ */ wt(cD, {
        cache: m,
        serialized: z,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ wt(w, $));
    });
    return h.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = i, h.__emotion_styles = f, h.__emotion_forwardProp = a, Object.defineProperty(h, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), h.withComponent = function(p, m) {
      return e(p, pe({}, n, m, {
        shouldForwardProp: Wl(h, m, !0)
      })).apply(void 0, f);
    }, h;
  };
};
const fD = lD;
var dD = [
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
], Ja = fD.bind();
dD.forEach(function(e) {
  Ja[e] = Ja(e);
});
const hD = Ja;
/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function gD(e, t) {
  const n = hD(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const pD = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, MD = ["values", "unit", "step"], yD = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => pe({}, n, {
    [r.key]: r.val
  }), {});
};
function mD(e) {
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
  } = e, i = Je(e, MD), o = yD(t), s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function c(d, g) {
    const h = s.indexOf(g);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : g) - r / 100}${n})`;
  }
  function l(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const g = s.indexOf(d);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? u(s[g]) : c(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return pe({
    keys: s,
    values: o,
    up: a,
    down: u,
    between: c,
    only: l,
    not: f,
    unit: n
  }, i);
}
const vD = {
  borderRadius: 4
}, wD = vD, DD = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.string, D.object, D.array]) : {}, kn = DD;
function vi(e, t) {
  return t ? un(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ic = {
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
}, Hl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ic[e]}px)`
};
function hn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Hl;
    return t.reduce((s, a, u) => (s[o.up(o.keys[u])] = n(t[u]), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Hl;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || ic).indexOf(a) !== -1) {
        const u = o.up(a);
        s[u] = n(t[a], a);
      } else {
        const u = a;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return n(t);
}
function AD(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function ED(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ls(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Fo(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = ls(e, n) || r, t && (i = t(i, r, e)), i;
}
function Be(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, c = ls(u, r) || {};
    return hn(s, a, (f) => {
      let d = Fo(c, i, f);
      return f === d && typeof f == "string" && (d = Fo(c, i, `${t}${f === "default" ? "" : yi(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: kn
  } : {}, o.filterProps = [t], o;
}
function ID(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ND = {
  m: "margin",
  p: "padding"
}, TD = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ql = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jD = ID((e) => {
  if (e.length > 2)
    if (ql[e])
      e = ql[e];
    else
      return [e];
  const [t, n] = e.split(""), r = ND[t], i = TD[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), fs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ds = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], SD = [...fs, ...ds];
function Hi(e, t, n, r) {
  var i;
  const o = (i = ls(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), o * s) : Array.isArray(o) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[s]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xg(e) {
  return Hi(e, "spacing", 8, "spacing");
}
function qi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function bD(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = qi(t, n), r), {});
}
function CD(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = jD(n), o = bD(i, r), s = e[n];
  return hn(e, s, o);
}
function Og(e, t) {
  const n = xg(e.theme);
  return Object.keys(e).map((r) => CD(e, t, r, n)).reduce(vi, {});
}
function Xe(e) {
  return Og(e, fs);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? fs.reduce((e, t) => (e[t] = kn, e), {}) : {};
Xe.filterProps = fs;
function et(e) {
  return Og(e, ds);
}
et.propTypes = process.env.NODE_ENV !== "production" ? ds.reduce((e, t) => (e[t] = kn, e), {}) : {};
et.filterProps = ds;
process.env.NODE_ENV !== "production" && SD.reduce((e, t) => (e[t] = kn, e), {});
function xD(e = 8) {
  if (e.mui)
    return e;
  const t = xg({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const s = t(o);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function hs(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? vi(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const OD = Be({
  prop: "border",
  themeKey: "borders",
  transform: Kt
}), LD = Be({
  prop: "borderTop",
  themeKey: "borders",
  transform: Kt
}), _D = Be({
  prop: "borderRight",
  themeKey: "borders",
  transform: Kt
}), kD = Be({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Kt
}), zD = Be({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Kt
}), PD = Be({
  prop: "borderColor",
  themeKey: "palette"
}), RD = Be({
  prop: "borderTopColor",
  themeKey: "palette"
}), UD = Be({
  prop: "borderRightColor",
  themeKey: "palette"
}), FD = Be({
  prop: "borderBottomColor",
  themeKey: "palette"
}), YD = Be({
  prop: "borderLeftColor",
  themeKey: "palette"
}), gs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hi(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: qi(t, r)
    });
    return hn(e, e.borderRadius, n);
  }
  return null;
};
gs.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: kn
} : {};
gs.filterProps = ["borderRadius"];
hs(OD, LD, _D, kD, zD, PD, RD, UD, FD, YD, gs);
const ps = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hi(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: qi(t, r)
    });
    return hn(e, e.gap, n);
  }
  return null;
};
ps.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: kn
} : {};
ps.filterProps = ["gap"];
const Ms = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hi(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: qi(t, r)
    });
    return hn(e, e.columnGap, n);
  }
  return null;
};
Ms.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: kn
} : {};
Ms.filterProps = ["columnGap"];
const ys = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hi(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: qi(t, r)
    });
    return hn(e, e.rowGap, n);
  }
  return null;
};
ys.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: kn
} : {};
ys.filterProps = ["rowGap"];
const BD = Be({
  prop: "gridColumn"
}), QD = Be({
  prop: "gridRow"
}), $D = Be({
  prop: "gridAutoFlow"
}), WD = Be({
  prop: "gridAutoColumns"
}), VD = Be({
  prop: "gridAutoRows"
}), HD = Be({
  prop: "gridTemplateColumns"
}), qD = Be({
  prop: "gridTemplateRows"
}), KD = Be({
  prop: "gridTemplateAreas"
}), GD = Be({
  prop: "gridArea"
});
hs(ps, Ms, ys, BD, QD, $D, WD, VD, HD, qD, KD, GD);
function Cr(e, t) {
  return t === "grey" ? t : e;
}
const JD = Be({
  prop: "color",
  themeKey: "palette",
  transform: Cr
}), ZD = Be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Cr
}), XD = Be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Cr
});
hs(JD, ZD, XD);
function It(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const eA = Be({
  prop: "width",
  transform: It
}), oc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i, o;
      return {
        maxWidth: ((r = e.theme) == null || (i = r.breakpoints) == null || (o = i.values) == null ? void 0 : o[n]) || ic[n] || It(n)
      };
    };
    return hn(e, e.maxWidth, t);
  }
  return null;
};
oc.filterProps = ["maxWidth"];
const tA = Be({
  prop: "minWidth",
  transform: It
}), nA = Be({
  prop: "height",
  transform: It
}), rA = Be({
  prop: "maxHeight",
  transform: It
}), iA = Be({
  prop: "minHeight",
  transform: It
});
Be({
  prop: "size",
  cssProperty: "width",
  transform: It
});
Be({
  prop: "size",
  cssProperty: "height",
  transform: It
});
const oA = Be({
  prop: "boxSizing"
});
hs(eA, oc, tA, nA, rA, iA, oA);
const sA = {
  // borders
  border: {
    themeKey: "borders",
    transform: Kt
  },
  borderTop: {
    themeKey: "borders",
    transform: Kt
  },
  borderRight: {
    themeKey: "borders",
    transform: Kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Kt
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
    style: gs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Cr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Cr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Cr
  },
  // spacing
  p: {
    style: et
  },
  pt: {
    style: et
  },
  pr: {
    style: et
  },
  pb: {
    style: et
  },
  pl: {
    style: et
  },
  px: {
    style: et
  },
  py: {
    style: et
  },
  padding: {
    style: et
  },
  paddingTop: {
    style: et
  },
  paddingRight: {
    style: et
  },
  paddingBottom: {
    style: et
  },
  paddingLeft: {
    style: et
  },
  paddingX: {
    style: et
  },
  paddingY: {
    style: et
  },
  paddingInline: {
    style: et
  },
  paddingInlineStart: {
    style: et
  },
  paddingInlineEnd: {
    style: et
  },
  paddingBlock: {
    style: et
  },
  paddingBlockStart: {
    style: et
  },
  paddingBlockEnd: {
    style: et
  },
  m: {
    style: Xe
  },
  mt: {
    style: Xe
  },
  mr: {
    style: Xe
  },
  mb: {
    style: Xe
  },
  ml: {
    style: Xe
  },
  mx: {
    style: Xe
  },
  my: {
    style: Xe
  },
  margin: {
    style: Xe
  },
  marginTop: {
    style: Xe
  },
  marginRight: {
    style: Xe
  },
  marginBottom: {
    style: Xe
  },
  marginLeft: {
    style: Xe
  },
  marginX: {
    style: Xe
  },
  marginY: {
    style: Xe
  },
  marginInline: {
    style: Xe
  },
  marginInlineStart: {
    style: Xe
  },
  marginInlineEnd: {
    style: Xe
  },
  marginBlock: {
    style: Xe
  },
  marginBlockStart: {
    style: Xe
  },
  marginBlockEnd: {
    style: Xe
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
    style: ps
  },
  rowGap: {
    style: ys
  },
  columnGap: {
    style: Ms
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
    transform: It
  },
  maxWidth: {
    style: oc
  },
  minWidth: {
    transform: It
  },
  height: {
    transform: It
  },
  maxHeight: {
    transform: It
  },
  minHeight: {
    transform: It
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
}, Lg = sA;
function aA(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function uA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cA() {
  function e(n, r, i, o) {
    const s = {
      [n]: r,
      theme: i
    }, a = o[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: c,
      transform: l,
      style: f
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = ls(i, c) || {};
    return f ? f(s) : hn(s, r, (h) => {
      let p = Fo(d, l, h);
      return h === p && typeof h == "string" && (p = Fo(d, l, `${n}${h === "default" ? "" : yi(h)}`, h)), u === !1 ? p : {
        [u]: p
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: o = {}
    } = n || {};
    if (!i)
      return null;
    const s = (r = o.unstable_sxConfig) != null ? r : Lg;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const l = AD(o.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((g) => {
        const h = uA(c[g], o);
        if (h != null)
          if (typeof h == "object")
            if (s[g])
              d = vi(d, e(g, h, o, s));
            else {
              const p = hn({
                theme: o
              }, h, (m) => ({
                [g]: m
              }));
              aA(p, h) ? d[g] = t({
                sx: h,
                theme: o
              }) : d = vi(d, p);
            }
          else
            d = vi(d, e(g, h, o, s));
      }), ED(f, d);
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const _g = cA();
_g.filterProps = ["sx"];
const kg = _g, lA = ["breakpoints", "palette", "spacing", "shape"];
function sc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, s = Je(e, lA), a = mD(n), u = xD(i);
  let c = un({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: pe({
      mode: "light"
    }, r),
    spacing: u,
    shape: pe({}, wD, o)
  }, s);
  return c = t.reduce((l, f) => un(l, f), c), c.unstable_sxConfig = pe({}, Lg, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return kg({
      sx: f,
      theme: this
    });
  }, c;
}
function fA(e) {
  return Object.keys(e).length === 0;
}
function dA(e = null) {
  const t = re.useContext(Wr);
  return !t || fA(t) ? e : t;
}
const hA = sc();
function zg(e = hA) {
  return dA(e);
}
const gA = ["variant"];
function Kl(e) {
  return e.length === 0;
}
function Pg(e) {
  const {
    variant: t
  } = e, n = Je(e, gA);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += Kl(r) ? e[i] : yi(e[i]) : r += `${Kl(r) ? i : yi(i)}${yi(e[i].toString())}`;
  }), r;
}
const pA = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function MA(e) {
  return Object.keys(e).length === 0;
}
function yA(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const mA = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, vA = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((i) => {
    const o = Pg(i.props);
    r[o] = i.style;
  }), r;
}, wA = (e, t, n, r) => {
  var i, o;
  const {
    ownerState: s = {}
  } = e, a = [], u = n == null || (i = n.components) == null || (o = i[r]) == null ? void 0 : o.variants;
  return u && u.forEach((c) => {
    let l = !0;
    Object.keys(c.props).forEach((f) => {
      s[f] !== c.props[f] && e[f] !== c.props[f] && (l = !1);
    }), l && a.push(t[Pg(c.props)]);
  }), a;
};
function Eo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const DA = sc(), AA = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Xr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return MA(t) ? e : t[n] || t;
}
function EA(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = DA,
    rootShouldForwardProp: r = Eo,
    slotShouldForwardProp: i = Eo
  } = e, o = (s) => kg(pe({}, s, {
    theme: Xr(pe({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return o.__mui_systemSx = !0, (s, a = {}) => {
    pD(s, (N) => N.filter((I) => !(I != null && I.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: l,
      skipSx: f,
      overridesResolver: d
    } = a, g = Je(a, pA), h = l !== void 0 ? l : c && c !== "Root" || !1, p = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${AA(c || "Root")}`);
    let v = Eo;
    c === "Root" ? v = r : c ? v = i : yA(s) && (v = void 0);
    const w = gD(s, pe({
      shouldForwardProp: v,
      label: m
    }, g)), j = (N, ...I) => {
      const B = I ? I.map((b) => typeof b == "function" && b.__emotion_real !== b ? (k) => b(pe({}, k, {
        theme: Xr(pe({}, k, {
          defaultTheme: n,
          themeId: t
        }))
      })) : b) : [];
      let z = N;
      u && d && B.push((b) => {
        const k = Xr(pe({}, b, {
          defaultTheme: n,
          themeId: t
        })), U = mA(u, k);
        if (U) {
          const x = {};
          return Object.entries(U).forEach(([T, S]) => {
            x[T] = typeof S == "function" ? S(pe({}, b, {
              theme: k
            })) : S;
          }), d(b, x);
        }
        return null;
      }), u && !h && B.push((b) => {
        const k = Xr(pe({}, b, {
          defaultTheme: n,
          themeId: t
        }));
        return wA(b, vA(u, k), k, u);
      }), p || B.push(o);
      const W = B.length - I.length;
      if (Array.isArray(N) && W > 0) {
        const b = new Array(W).fill("");
        z = [...N, ...b], z.raw = [...N.raw, ...b];
      } else
        typeof N == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        N.__emotion_real !== N && (z = (b) => N(pe({}, b, {
          theme: Xr(pe({}, b, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const $ = w(z, ...B);
      if (process.env.NODE_ENV !== "production") {
        let b;
        u && (b = `${u}${c || ""}`), b === void 0 && (b = `Styled(${ww(s)})`), $.displayName = b;
      }
      return s.muiName && ($.muiName = s.muiName), $;
    };
    return w.withConfig && (j.withConfig = w.withConfig), j;
  };
}
function IA(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : mg(t.components[n].defaultProps, r);
}
function NA({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = zg(n);
  return r && (i = i[r] || i), IA({
    theme: i,
    name: t,
    props: e
  });
}
function ac(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function TA(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ar(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ar(TA(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Si(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Si(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function ms(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function jA(e) {
  e = ar(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), s = (c, l = (c + n / 30) % 12) => i - o * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), ms({
    type: a,
    values: u
  });
}
function Gl(e) {
  e = ar(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ar(jA(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Jl(e, t) {
  const n = Gl(e), r = Gl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function jr(e, t) {
  return e = ar(e), t = ac(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ms(e);
}
function SA(e, t) {
  if (e = ar(e), t = ac(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ms(e);
}
function bA(e, t) {
  if (e = ar(e), t = ac(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ms(e);
}
function CA(e, t) {
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
const xA = {
  black: "#000",
  white: "#fff"
}, _i = xA, OA = {
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
}, LA = OA, _A = {
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
}, hr = _A, kA = {
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
}, gr = kA, zA = {
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
}, ei = zA, PA = {
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
}, pr = PA, RA = {
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
}, Mr = RA, UA = {
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
}, yr = UA, FA = ["mode", "contrastThreshold", "tonalOffset"], Zl = {
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
    paper: _i.white,
    default: _i.white
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
}, Js = {
  text: {
    primary: _i.white,
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
    active: _i.white,
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
function Xl(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = bA(e.main, i) : t === "dark" && (e.dark = SA(e.main, o)));
}
function YA(e = "light") {
  return e === "dark" ? {
    main: pr[200],
    light: pr[50],
    dark: pr[400]
  } : {
    main: pr[700],
    light: pr[400],
    dark: pr[800]
  };
}
function BA(e = "light") {
  return e === "dark" ? {
    main: hr[200],
    light: hr[50],
    dark: hr[400]
  } : {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  };
}
function QA(e = "light") {
  return e === "dark" ? {
    main: gr[500],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function $A(e = "light") {
  return e === "dark" ? {
    main: Mr[400],
    light: Mr[300],
    dark: Mr[700]
  } : {
    main: Mr[700],
    light: Mr[500],
    dark: Mr[900]
  };
}
function WA(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[800],
    light: yr[500],
    dark: yr[900]
  };
}
function VA(e = "light") {
  return e === "dark" ? {
    main: ei[400],
    light: ei[300],
    dark: ei[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ei[500],
    dark: ei[900]
  };
}
function HA(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = Je(e, FA), o = e.primary || YA(t), s = e.secondary || BA(t), a = e.error || QA(t), u = e.info || $A(t), c = e.success || WA(t), l = e.warning || VA(t);
  function f(p) {
    const m = Jl(p, Js.text.primary) >= n ? Js.text.primary : Zl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const v = Jl(p, m);
      v < 3 && console.error([`MUI: The contrast ratio of ${v}:1 for ${m} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: p,
    name: m,
    mainShade: v = 500,
    lightShade: w = 300,
    darkShade: j = 700
  }) => {
    if (p = pe({}, p), !p.main && p[v] && (p.main = p[v]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${v}\` property.` : Si(11, m ? ` (${m})` : "", v));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Si(12, m ? ` (${m})` : "", JSON.stringify(p.main)));
    return Xl(p, "light", w, r), Xl(p, "dark", j, r), p.contrastText || (p.contrastText = f(p.main)), p;
  }, g = {
    dark: Js,
    light: Zl
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), un(pe({
    // A collection of common colors.
    common: pe({}, _i),
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
    grey: LA,
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
  }, g[t]), i);
}
const qA = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function KA(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ef = {
  textTransform: "uppercase"
}, tf = '"Roboto", "Helvetica", "Arial", sans-serif';
function GA(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = tf,
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
  } = n, d = Je(n, qA);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, h = f || ((v) => `${v / c * g}rem`), p = (v, w, j, N, I) => pe({
    fontFamily: r,
    fontWeight: v,
    fontSize: h(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j
  }, r === tf ? {
    letterSpacing: `${KA(N / w)}em`
  } : {}, I, l), m = {
    h1: p(o, 96, 1.167, -1.5),
    h2: p(o, 60, 1.2, -0.5),
    h3: p(s, 48, 1.167, 0),
    h4: p(s, 34, 1.235, 0.25),
    h5: p(s, 24, 1.334, 0),
    h6: p(a, 20, 1.6, 0.15),
    subtitle1: p(s, 16, 1.75, 0.15),
    subtitle2: p(a, 14, 1.57, 0.1),
    body1: p(s, 16, 1.5, 0.15),
    body2: p(s, 14, 1.43, 0.15),
    button: p(a, 14, 1.75, 0.4, ef),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, ef)
  };
  return un(pe({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
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
const JA = 0.2, ZA = 0.14, XA = 0.12;
function Ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${JA})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ZA})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${XA})`].join(",");
}
const eE = ["none", Ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], tE = eE, nE = ["duration", "easing", "delay"], rE = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, iE = {
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
function nf(e) {
  return `${Math.round(e)}ms`;
}
function oE(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function sE(e) {
  const t = pe({}, rE, e.easing), n = pe({}, iE, e.duration);
  return pe({
    getAutoHeightDuration: oE,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = o, c = Je(o, nE);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof s == "string" ? s : nf(s)} ${a} ${typeof u == "string" ? u : nf(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const aE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, uE = aE, cE = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function lE(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: o = {}
  } = e, s = Je(e, cE), a = HA(r), u = sc(e);
  let c = un(u, {
    mixins: CA(u.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: tE.slice(),
    typography: GA(a, o),
    transitions: sE(i),
    zIndex: pe({}, uE)
  });
  if (c = un(c, s), c = t.reduce((l, f) => un(l, f), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, g) => {
      let h;
      for (h in d) {
        const p = d[h];
        if (l.indexOf(h) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Zt("", h);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[h] = {};
        }
      }
    };
    Object.keys(c.components).forEach((d) => {
      const g = c.components[d].styleOverrides;
      g && d.indexOf("Mui") === 0 && f(g, d);
    });
  }
  return c;
}
const fE = lE(), uc = fE, cc = (e) => Eo(e) && e !== "classes", dE = EA({
  defaultTheme: uc,
  rootShouldForwardProp: cc
}), At = dE;
function Mn({
  props: e,
  name: t
}) {
  return NA({
    props: e,
    name: t,
    defaultTheme: uc
  });
}
const Rg = /* @__PURE__ */ re.createContext({});
process.env.NODE_ENV !== "production" && (Rg.displayName = "ListContext");
const Za = Rg;
function hE(e) {
  return Zt("MuiList", e);
}
Pt("MuiList", ["root", "padding", "dense", "subheader"]);
const gE = ["children", "className", "component", "dense", "disablePadding", "subheader"], pE = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return _n({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, hE, t);
}, ME = At("ul", {
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
})), Ug = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: o,
    component: s = "ul",
    dense: a = !1,
    disablePadding: u = !1,
    subheader: c
  } = r, l = Je(r, gE), f = re.useMemo(() => ({
    dense: a
  }), [a]), d = pe({}, r, {
    component: s,
    dense: a,
    disablePadding: u
  }), g = pE(d);
  return /* @__PURE__ */ ge.jsx(Za.Provider, {
    value: f,
    children: /* @__PURE__ */ ge.jsxs(ME, pe({
      as: s,
      className: at(g.root, o),
      ref: n,
      ownerState: d
    }, l, {
      children: [c, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ug.propTypes = {
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
const yE = Ug, mE = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Zs(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function rf(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Fg(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function ti(e, t, n, r, i, o) {
  let s = !1, a = i(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const u = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Fg(a, o) || u)
      a = i(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Yg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: o = !1,
    children: s,
    className: a,
    disabledItemsFocusable: u = !1,
    disableListWrap: c = !1,
    onKeyDown: l,
    variant: f = "selectedMenu"
  } = t, d = Je(t, mE), g = re.useRef(null), h = re.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Ci(() => {
    i && g.current.focus();
  }, [i]), re.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, N) => {
      const I = !g.current.style.width;
      if (j.clientHeight < g.current.clientHeight && I) {
        const B = `${gg($t(j))}px`;
        g.current.style[N.direction === "rtl" ? "paddingLeft" : "paddingRight"] = B, g.current.style.width = `calc(100% + ${B})`;
      }
      return g.current;
    }
  }), []);
  const p = (j) => {
    const N = g.current, I = j.key, B = $t(N).activeElement;
    if (I === "ArrowDown")
      j.preventDefault(), ti(N, B, c, u, Zs);
    else if (I === "ArrowUp")
      j.preventDefault(), ti(N, B, c, u, rf);
    else if (I === "Home")
      j.preventDefault(), ti(N, null, c, u, Zs);
    else if (I === "End")
      j.preventDefault(), ti(N, null, c, u, rf);
    else if (I.length === 1) {
      const z = h.current, W = I.toLowerCase(), $ = performance.now();
      z.keys.length > 0 && ($ - z.lastTime > 500 ? (z.keys = [], z.repeating = !0, z.previousKeyMatched = !0) : z.repeating && W !== z.keys[0] && (z.repeating = !1)), z.lastTime = $, z.keys.push(W);
      const b = B && !z.repeating && Fg(B, z);
      z.previousKeyMatched && (b || ti(N, B, !1, u, Zs, z)) ? j.preventDefault() : z.previousKeyMatched = !1;
    }
    l && l(j);
  }, m = jt(g, n);
  let v = -1;
  re.Children.forEach(s, (j, N) => {
    /* @__PURE__ */ re.isValidElement(j) && (process.env.NODE_ENV !== "production" && ko.isFragment(j) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), j.props.disabled || (f === "selectedMenu" && j.props.selected || v === -1) && (v = N));
  });
  const w = re.Children.map(s, (j, N) => {
    if (N === v) {
      const I = {};
      return o && (I.autoFocus = !0), j.props.tabIndex === void 0 && f === "selectedMenu" && (I.tabIndex = 0), /* @__PURE__ */ re.cloneElement(j, I);
    }
    return j;
  });
  return /* @__PURE__ */ ge.jsx(yE, pe({
    role: "menu",
    ref: m,
    className: a,
    onKeyDown: p,
    tabIndex: i ? 0 : -1
  }, d, {
    children: w
  }));
});
process.env.NODE_ENV !== "production" && (Yg.propTypes = {
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
const vE = Yg;
function vs() {
  const e = zg(uc);
  return process.env.NODE_ENV !== "production" && re.useDebugValue(e), e;
}
function wE(e) {
  return Zt("MuiPaper", e);
}
Pt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const DE = ["className", "component", "elevation", "square", "variant"], of = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, AE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, o = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return _n(o, wE, i);
}, EE = At("div", {
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
    backgroundImage: `linear-gradient(${jr("#fff", of(t.elevation))}, ${jr("#fff", of(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Bg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: o = "div",
    elevation: s = 1,
    square: a = !1,
    variant: u = "elevation"
  } = r, c = Je(r, DE), l = pe({}, r, {
    component: o,
    elevation: s,
    square: a,
    variant: u
  }), f = AE(l);
  return process.env.NODE_ENV !== "production" && vs().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ ge.jsx(EE, pe({
    as: o,
    ownerState: l,
    className: at(f.root, i),
    ref: n
  }, c));
});
process.env.NODE_ENV !== "production" && (Bg.propTypes = {
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
  elevation: $i(yg, (e) => {
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
const Qg = Bg;
function Xa(e, t) {
  return Xa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Xa(e, t);
}
function $g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xa(e, t);
}
const sf = {
  disabled: !1
};
var IE = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.shape({
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
const Yo = Te.createContext(null);
var NE = function(t) {
  return t.scrollTop;
}, li = "unmounted", Yn = "exited", Bn = "entering", Er = "entered", eu = "exiting", yn = /* @__PURE__ */ function(e) {
  $g(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = i, a = s && !s.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = Yn, o.appearStatus = Bn) : u = Er : r.unmountOnExit || r.mountOnEnter ? u = li : u = Yn, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var s = i.in;
    return s && o.status === li ? {
      status: Yn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Bn && s !== Er && (o = Bn) : (s === Bn || s === Er) && (o = eu);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, s, a;
    return o = s = a = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), {
      exit: o,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Bn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this);
          s && NE(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Yn && this.setState({
        status: li
      });
  }, n.performEnter = function(i) {
    var o = this, s = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [ci.findDOMNode(this), a], c = u[0], l = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!i && !s || sf.disabled) {
      this.safeSetState({
        status: Er
      }, function() {
        o.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, l), this.safeSetState({
      status: Bn
    }, function() {
      o.props.onEntering(c, l), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Er
        }, function() {
          o.props.onEntered(c, l);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ci.findDOMNode(this);
    if (!o || sf.disabled) {
      this.safeSetState({
        status: Yn
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: eu
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Yn
        }, function() {
          i.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, o.nextCallback = null, i(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this), a = i == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = u[0], l = u[1];
      this.props.addEndListener(c, l);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === li)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Je(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Te.createElement(Yo.Provider, {
        value: null
      }, typeof s == "function" ? s(i, a) : Te.cloneElement(Te.Children.only(s), a))
    );
  }, t;
}(Te.Component);
yn.contextType = Yo;
yn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    current: typeof Element > "u" ? D.any : function(e, t, n, r, i, o) {
      var s = e[t];
      return D.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, o);
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
    var n = IE;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return n.apply(void 0, [t].concat(i));
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
function mr() {
}
yn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mr,
  onEntering: mr,
  onEntered: mr,
  onExit: mr,
  onExiting: mr,
  onExited: mr
};
yn.UNMOUNTED = li;
yn.EXITED = Yn;
yn.ENTERING = Bn;
yn.ENTERED = Er;
yn.EXITING = eu;
const Wg = yn;
function TE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lc(e, t) {
  var n = function(o) {
    return t && gi(o) ? t(o) : o;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && PM.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function jE(e, t) {
  e = e || {}, t = t || {};
  function n(l) {
    return l in t ? t[l] : e[l];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var o in e)
    o in t ? i.length && (r[o] = i, i = []) : i.push(o);
  var s, a = {};
  for (var u in t) {
    if (r[u])
      for (s = 0; s < r[u].length; s++) {
        var c = r[u][s];
        a[r[u][s]] = n(c);
      }
    a[u] = n(u);
  }
  for (s = 0; s < i.length; s++)
    a[i[s]] = n(i[s]);
  return a;
}
function Kn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function SE(e, t) {
  return lc(e.children, function(n) {
    return pi(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Kn(n, "appear", e),
      enter: Kn(n, "enter", e),
      exit: Kn(n, "exit", e)
    });
  });
}
function bE(e, t, n) {
  var r = lc(e.children), i = jE(t, r);
  return Object.keys(i).forEach(function(o) {
    var s = i[o];
    if (gi(s)) {
      var a = o in t, u = o in r, c = t[o], l = gi(c) && !c.props.in;
      u && (!a || l) ? i[o] = pi(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Kn(s, "exit", e),
        enter: Kn(s, "enter", e)
      }) : !u && a && !l ? i[o] = pi(s, {
        in: !1
      }) : u && a && gi(c) && (i[o] = pi(s, {
        onExited: n.bind(null, s),
        in: c.props.in,
        exit: Kn(s, "exit", e),
        enter: Kn(s, "enter", e)
      }));
    }
  }), i;
}
var CE = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, xE = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, fc = /* @__PURE__ */ function(e) {
  $g(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = o.handleExited.bind(TE(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, o;
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
  }, t.getDerivedStateFromProps = function(i, o) {
    var s = o.children, a = o.handleExited, u = o.firstRender;
    return {
      children: u ? SE(i, a) : bE(i, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(i, o) {
    var s = lc(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(a) {
      var u = pe({}, a.children);
      return delete u[i.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var i = this.props, o = i.component, s = i.childFactory, a = Je(i, ["component", "childFactory"]), u = this.state.contextValue, c = CE(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, o === null ? /* @__PURE__ */ Te.createElement(Yo.Provider, {
      value: u
    }, c) : /* @__PURE__ */ Te.createElement(Yo.Provider, {
      value: u
    }, /* @__PURE__ */ Te.createElement(o, a, c));
  }, t;
}(Te.Component);
fc.propTypes = process.env.NODE_ENV !== "production" ? {
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
fc.defaultProps = xE;
const OE = fc, Vg = (e) => e.scrollTop;
function Bo(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: o,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof o == "object" ? o[t.mode] : o,
    delay: s.transitionDelay
  };
}
const LE = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function tu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const _E = {
  entering: {
    opacity: 1,
    transform: tu(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Xs = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent), dc = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: o,
    easing: s,
    in: a,
    onEnter: u,
    onEntered: c,
    onEntering: l,
    onExit: f,
    onExited: d,
    onExiting: g,
    style: h,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Wg
  } = t, v = Je(t, LE), w = re.useRef(), j = re.useRef(), N = vs(), I = re.useRef(null), B = jt(o.ref, n), z = jt(I, B), W = (R) => (C) => {
    if (R) {
      const J = I.current;
      C === void 0 ? R(J) : R(J, C);
    }
  }, $ = W(l), b = W((R, C) => {
    Vg(R);
    const {
      duration: J,
      delay: ie,
      easing: L
    } = Bo({
      style: h,
      timeout: p,
      easing: s
    }, {
      mode: "enter"
    });
    let F;
    p === "auto" ? (F = N.transitions.getAutoHeightDuration(R.clientHeight), j.current = F) : F = J, R.style.transition = [N.transitions.create("opacity", {
      duration: F,
      delay: ie
    }), N.transitions.create("transform", {
      duration: Xs ? F : F * 0.666,
      delay: ie,
      easing: L
    })].join(","), u && u(R, C);
  }), k = W(c), U = W(g), x = W((R) => {
    const {
      duration: C,
      delay: J,
      easing: ie
    } = Bo({
      style: h,
      timeout: p,
      easing: s
    }, {
      mode: "exit"
    });
    let L;
    p === "auto" ? (L = N.transitions.getAutoHeightDuration(R.clientHeight), j.current = L) : L = C, R.style.transition = [N.transitions.create("opacity", {
      duration: L,
      delay: J
    }), N.transitions.create("transform", {
      duration: Xs ? L : L * 0.666,
      delay: Xs ? J : J || L * 0.333,
      easing: ie
    })].join(","), R.style.opacity = 0, R.style.transform = tu(0.75), f && f(R);
  }), T = W(d), S = (R) => {
    p === "auto" && (w.current = setTimeout(R, j.current || 0)), r && r(I.current, R);
  };
  return re.useEffect(() => () => {
    clearTimeout(w.current);
  }, []), /* @__PURE__ */ ge.jsx(m, pe({
    appear: i,
    in: a,
    nodeRef: I,
    onEnter: b,
    onEntered: k,
    onEntering: $,
    onExit: x,
    onExited: T,
    onExiting: U,
    addEndListener: S,
    timeout: p === "auto" ? null : p
  }, v, {
    children: (R, C) => /* @__PURE__ */ re.cloneElement(o, pe({
      style: pe({
        opacity: 0,
        transform: tu(0.75),
        visibility: R === "exited" && !a ? "hidden" : void 0
      }, _E[R], h, o.props.style),
      ref: z
    }, C))
  }));
});
process.env.NODE_ENV !== "production" && (dc.propTypes = {
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
  children: Wi.isRequired,
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
dc.muiSupportAuto = !0;
const kE = dc, zE = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], PE = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Hg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = vs(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: o,
    appear: s = !0,
    children: a,
    easing: u,
    in: c,
    onEnter: l,
    onEntered: f,
    onEntering: d,
    onExit: g,
    onExited: h,
    onExiting: p,
    style: m,
    timeout: v = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Wg
  } = t, j = Je(t, zE), N = re.useRef(null), I = jt(a.ref, n), B = jt(N, I), z = (S) => (R) => {
    if (S) {
      const C = N.current;
      R === void 0 ? S(C) : S(C, R);
    }
  }, W = z(d), $ = z((S, R) => {
    Vg(S);
    const C = Bo({
      style: m,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    S.style.webkitTransition = r.transitions.create("opacity", C), S.style.transition = r.transitions.create("opacity", C), l && l(S, R);
  }), b = z(f), k = z(p), U = z((S) => {
    const R = Bo({
      style: m,
      timeout: v,
      easing: u
    }, {
      mode: "exit"
    });
    S.style.webkitTransition = r.transitions.create("opacity", R), S.style.transition = r.transitions.create("opacity", R), g && g(S);
  }), x = z(h), T = (S) => {
    o && o(N.current, S);
  };
  return /* @__PURE__ */ ge.jsx(w, pe({
    appear: s,
    in: c,
    nodeRef: N,
    onEnter: $,
    onEntered: b,
    onEntering: W,
    onExit: U,
    onExited: x,
    onExiting: k,
    addEndListener: T,
    timeout: v
  }, j, {
    children: (S, R) => /* @__PURE__ */ re.cloneElement(a, pe({
      style: pe({
        opacity: 0,
        visibility: S === "exited" && !c ? "hidden" : void 0
      }, PE[S], m, a.props.style),
      ref: B
    }, R))
  }));
});
process.env.NODE_ENV !== "production" && (Hg.propTypes = {
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
  children: Wi.isRequired,
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
const RE = Hg;
function UE(e) {
  return Zt("MuiBackdrop", e);
}
Pt("MuiBackdrop", ["root", "invisible"]);
const FE = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"], YE = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return _n({
    root: ["root", n && "invisible"]
  }, UE, t);
}, BE = At("div", {
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
})), qg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  var r, i;
  const o = Mn({
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
    transitionDuration: g,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = RE
  } = o, p = Je(o, FE), m = pe({}, o, {
    component: a,
    invisible: f
  }), v = YE(m);
  return /* @__PURE__ */ ge.jsx(h, pe({
    in: d,
    timeout: g
  }, p, {
    children: /* @__PURE__ */ ge.jsx(BE, {
      "aria-hidden": !0,
      as: (r = u.Root) != null ? r : a,
      className: at(v.root, l),
      ownerState: pe({}, m, (i = c.root) == null ? void 0 : i.ownerState),
      classes: v,
      ref: n,
      children: s
    })
  }));
});
process.env.NODE_ENV !== "production" && (qg.propTypes = {
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
const QE = qg, $E = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"], WE = (e) => e.classes, VE = At("div", {
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
}) => pe({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), HE = At(QE, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Kg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  var r;
  const i = Mn({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = HE,
    closeAfterTransition: s = !1,
    children: a,
    components: u = {},
    componentsProps: c = {},
    disableAutoFocus: l = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: g = !1,
    disableRestoreFocus: h = !1,
    disableScrollLock: p = !1,
    hideBackdrop: m = !1,
    keepMounted: v = !1
  } = i, w = Je(i, $E), [j, N] = re.useState(!0), I = {
    closeAfterTransition: s,
    disableAutoFocus: l,
    disableEnforceFocus: f,
    disableEscapeKeyDown: d,
    disablePortal: g,
    disableRestoreFocus: h,
    disableScrollLock: p,
    hideBackdrop: m,
    keepMounted: v
  }, B = pe({}, i, I, {
    exited: j
  }), z = WE(B);
  return /* @__PURE__ */ ge.jsx(n0, pe({
    components: pe({
      Root: VE
    }, u),
    componentsProps: {
      root: pe({}, c.root, (!u.Root || !sg(u.Root)) && {
        ownerState: pe({}, (r = c.root) == null ? void 0 : r.ownerState)
      })
    },
    BackdropComponent: o,
    onTransitionEnter: () => N(!1),
    onTransitionExited: () => N(!0),
    ref: n
  }, w, {
    classes: z
  }, I, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (Kg.propTypes = {
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
  children: Wi.isRequired,
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
  container: D.oneOfType([kr, D.func]),
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
const qE = Kg;
function KE(e) {
  return Zt("MuiPopover", e);
}
Pt("MuiPopover", ["root", "paper"]);
const GE = ["onEntering"], JE = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function af(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function uf(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function cf(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Io(e) {
  return typeof e == "function" ? e() : e;
}
const ZE = (e) => {
  const {
    classes: t
  } = e;
  return _n({
    root: ["root"],
    paper: ["paper"]
  }, KE, t);
}, XE = At(qE, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), eI = At(Qg, {
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
}), Gg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
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
    marginThreshold: g = 16,
    open: h,
    PaperProps: p = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: v = kE,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: j
    } = {}
  } = r, N = Je(r.TransitionProps, GE), I = Je(r, JE), B = re.useRef(), z = jt(B, p.ref), W = pe({}, r, {
    anchorOrigin: s,
    anchorReference: u,
    elevation: d,
    marginThreshold: g,
    PaperProps: p,
    transformOrigin: m,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: N
  }), $ = ZE(W), b = re.useCallback(() => {
    if (u === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const C = Io(o), J = C && C.nodeType === 1 ? C : $t(B.current).body, ie = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const L = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && L.top === 0 && L.left === 0 && L.right === 0 && L.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ie.top + af(ie, s.vertical),
      left: ie.left + uf(ie, s.horizontal)
    };
  }, [o, s.horizontal, s.vertical, a, u]), k = re.useCallback((C) => ({
    vertical: af(C, m.vertical),
    horizontal: uf(C, m.horizontal)
  }), [m.horizontal, m.vertical]), U = re.useCallback((C) => {
    const J = {
      width: C.offsetWidth,
      height: C.offsetHeight
    }, ie = k(J);
    if (u === "none")
      return {
        top: null,
        left: null,
        transformOrigin: cf(ie)
      };
    const L = b();
    let F = L.top - ie.vertical, P = L.left - ie.horizontal;
    const q = F + J.height, K = P + J.width, X = bi(Io(o)), O = X.innerHeight - g, ne = X.innerWidth - g;
    if (F < g) {
      const G = F - g;
      F -= G, ie.vertical += G;
    } else if (q > O) {
      const G = q - O;
      F -= G, ie.vertical += G;
    }
    if (process.env.NODE_ENV !== "production" && J.height > O && J.height && O && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - O}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), P < g) {
      const G = P - g;
      P -= G, ie.horizontal += G;
    } else if (K > ne) {
      const G = K - ne;
      P -= G, ie.horizontal += G;
    }
    return {
      top: `${Math.round(F)}px`,
      left: `${Math.round(P)}px`,
      transformOrigin: cf(ie)
    };
  }, [o, u, b, k, g]), x = re.useCallback(() => {
    const C = B.current;
    if (!C)
      return;
    const J = U(C);
    J.top !== null && (C.style.top = J.top), J.left !== null && (C.style.left = J.left), C.style.transformOrigin = J.transformOrigin;
  }, [U]), T = (C, J) => {
    j && j(C, J), x();
  };
  re.useEffect(() => {
    h && x();
  }), re.useImperativeHandle(i, () => h ? {
    updatePosition: () => {
      x();
    }
  } : null, [h, x]), re.useEffect(() => {
    if (!h)
      return;
    const C = Aw(() => {
      x();
    }), J = bi(o);
    return J.addEventListener("resize", C), () => {
      C.clear(), J.removeEventListener("resize", C);
    };
  }, [o, h, x]);
  let S = w;
  w === "auto" && !v.muiSupportAuto && (S = void 0);
  const R = f || (o ? $t(Io(o)).body : void 0);
  return /* @__PURE__ */ ge.jsx(XE, pe({
    BackdropProps: {
      invisible: !0
    },
    className: at($.root, l),
    container: R,
    open: h,
    ref: n,
    ownerState: W
  }, I, {
    children: /* @__PURE__ */ ge.jsx(v, pe({
      appear: !0,
      in: h,
      onEntering: T,
      timeout: S
    }, N, {
      children: /* @__PURE__ */ ge.jsx(eI, pe({
        elevation: d
      }, p, {
        ref: z,
        className: at($.paper, p.className),
        children: c
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Gg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: hg,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: $i(D.oneOfType([kr, D.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Io(e.anchorEl);
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
  container: D.oneOfType([kr, D.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: yg,
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
    component: lg
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
const tI = Gg;
function nI(e) {
  return Zt("MuiMenu", e);
}
Pt("MuiMenu", ["root", "paper", "list"]);
const rI = ["onEntering"], iI = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], oI = {
  vertical: "top",
  horizontal: "right"
}, sI = {
  vertical: "top",
  horizontal: "left"
}, aI = (e) => {
  const {
    classes: t
  } = e;
  return _n({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, nI, t);
}, uI = At(tI, {
  shouldForwardProp: (e) => cc(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), cI = At(Qg, {
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
}), lI = At(vE, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Jg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
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
      onEntering: g
    } = {},
    variant: h = "selectedMenu"
  } = r, p = Je(r.TransitionProps, rI), m = Je(r, iI), v = vs(), w = v.direction === "rtl", j = pe({}, r, {
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: a,
    onEntering: g,
    PaperProps: l,
    transitionDuration: d,
    TransitionProps: p,
    variant: h
  }), N = aI(j), I = i && !s && c, B = re.useRef(null), z = (b, k) => {
    B.current && B.current.adjustStyleForScrollbar(b, v), g && g(b, k);
  }, W = (b) => {
    b.key === "Tab" && (b.preventDefault(), u && u(b, "tabKeyDown"));
  };
  let $ = -1;
  return re.Children.map(o, (b, k) => {
    /* @__PURE__ */ re.isValidElement(b) && (process.env.NODE_ENV !== "production" && ko.isFragment(b) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), b.props.disabled || (h === "selectedMenu" && b.props.selected || $ === -1) && ($ = k));
  }), /* @__PURE__ */ ge.jsx(uI, pe({
    classes: f,
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? oI : sI,
    PaperProps: pe({
      component: cI
    }, l, {
      classes: pe({}, l.classes, {
        root: N.paper
      })
    }),
    className: N.root,
    open: c,
    ref: n,
    transitionDuration: d,
    TransitionProps: pe({
      onEntering: z
    }, p),
    ownerState: j
  }, m, {
    children: /* @__PURE__ */ ge.jsx(lI, pe({
      onKeyDown: W,
      actions: B,
      autoFocus: i && ($ === -1 || s),
      autoFocusItem: I,
      variant: h
    }, a, {
      className: at(N.list, a.className),
      children: o
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Jg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: D.oneOfType([kr, D.func]),
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
const fI = Jg;
function Zg(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: o,
    rippleSize: s,
    in: a,
    onExited: u,
    timeout: c
  } = e, [l, f] = re.useState(!1), d = at(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + o,
    left: -(s / 2) + i
  }, h = at(n.child, l && n.childLeaving, r && n.childPulsate);
  return !a && !l && f(!0), re.useEffect(() => {
    if (!a && u != null) {
      const p = setTimeout(u, c);
      return () => {
        clearTimeout(p);
      };
    }
  }, [u, a, c]), /* @__PURE__ */ ge.jsx("span", {
    className: d,
    style: g,
    children: /* @__PURE__ */ ge.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (Zg.propTypes = {
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
const dI = Pt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ot = dI, hI = ["center", "classes", "className"];
let ws = (e) => e, lf, ff, df, hf;
const nu = 550, gI = 80, pI = rc(lf || (lf = ws`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), MI = rc(ff || (ff = ws`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), yI = rc(df || (df = ws`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), mI = At("span", {
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
}), vI = At(Zg, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(hf || (hf = ws`
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
`), Ot.rippleVisible, pI, nu, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ot.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ot.child, Ot.childLeaving, MI, nu, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ot.childPulsate, yI, ({
  theme: e
}) => e.transitions.easing.easeInOut), Xg = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: o = {},
    className: s
  } = r, a = Je(r, hI), [u, c] = re.useState([]), l = re.useRef(0), f = re.useRef(null);
  re.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [u]);
  const d = re.useRef(!1), g = re.useRef(null), h = re.useRef(null), p = re.useRef(null);
  re.useEffect(() => () => {
    clearTimeout(g.current);
  }, []);
  const m = re.useCallback((N) => {
    const {
      pulsate: I,
      rippleX: B,
      rippleY: z,
      rippleSize: W,
      cb: $
    } = N;
    c((b) => [...b, /* @__PURE__ */ ge.jsx(vI, {
      classes: {
        ripple: at(o.ripple, Ot.ripple),
        rippleVisible: at(o.rippleVisible, Ot.rippleVisible),
        ripplePulsate: at(o.ripplePulsate, Ot.ripplePulsate),
        child: at(o.child, Ot.child),
        childLeaving: at(o.childLeaving, Ot.childLeaving),
        childPulsate: at(o.childPulsate, Ot.childPulsate)
      },
      timeout: nu,
      pulsate: I,
      rippleX: B,
      rippleY: z,
      rippleSize: W
    }, l.current)]), l.current += 1, f.current = $;
  }, [o]), v = re.useCallback((N = {}, I = {}, B) => {
    const {
      pulsate: z = !1,
      center: W = i || I.pulsate,
      fakeElement: $ = !1
      // For test purposes
    } = I;
    if ((N == null ? void 0 : N.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (N == null ? void 0 : N.type) === "touchstart" && (d.current = !0);
    const b = $ ? null : p.current, k = b ? b.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let U, x, T;
    if (W || N === void 0 || N.clientX === 0 && N.clientY === 0 || !N.clientX && !N.touches)
      U = Math.round(k.width / 2), x = Math.round(k.height / 2);
    else {
      const {
        clientX: S,
        clientY: R
      } = N.touches ? N.touches[0] : N;
      U = Math.round(S - k.left), x = Math.round(R - k.top);
    }
    if (W)
      T = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), T % 2 === 0 && (T += 1);
    else {
      const S = Math.max(Math.abs((b ? b.clientWidth : 0) - U), U) * 2 + 2, R = Math.max(Math.abs((b ? b.clientHeight : 0) - x), x) * 2 + 2;
      T = Math.sqrt(S ** 2 + R ** 2);
    }
    N != null && N.touches ? h.current === null && (h.current = () => {
      m({
        pulsate: z,
        rippleX: U,
        rippleY: x,
        rippleSize: T,
        cb: B
      });
    }, g.current = setTimeout(() => {
      h.current && (h.current(), h.current = null);
    }, gI)) : m({
      pulsate: z,
      rippleX: U,
      rippleY: x,
      rippleSize: T,
      cb: B
    });
  }, [i, m]), w = re.useCallback(() => {
    v({}, {
      pulsate: !0
    });
  }, [v]), j = re.useCallback((N, I) => {
    if (clearTimeout(g.current), (N == null ? void 0 : N.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.current = setTimeout(() => {
        j(N, I);
      });
      return;
    }
    h.current = null, c((B) => B.length > 0 ? B.slice(1) : B), f.current = I;
  }, []);
  return re.useImperativeHandle(n, () => ({
    pulsate: w,
    start: v,
    stop: j
  }), [w, v, j]), /* @__PURE__ */ ge.jsx(mI, pe({
    className: at(o.root, Ot.root, s),
    ref: p
  }, a, {
    children: /* @__PURE__ */ ge.jsx(OE, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (Xg.propTypes = {
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
const wI = Xg;
function DI(e) {
  return Zt("MuiButtonBase", e);
}
const AI = Pt("MuiButtonBase", ["root", "disabled", "focusVisible"]), EI = AI, II = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], NI = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = _n({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, DI, i);
  return n && r && (s.root += ` ${r}`), s;
}, TI = At("button", {
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
  [`&.${EI.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ep = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
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
    LinkComponent: g = "a",
    onBlur: h,
    onClick: p,
    onContextMenu: m,
    onDragLeave: v,
    onFocus: w,
    onFocusVisible: j,
    onKeyDown: N,
    onKeyUp: I,
    onMouseDown: B,
    onMouseLeave: z,
    onMouseUp: W,
    onTouchEnd: $,
    onTouchMove: b,
    onTouchStart: k,
    tabIndex: U = 0,
    TouchRippleProps: x,
    touchRippleRef: T,
    type: S
  } = r, R = Je(r, II), C = re.useRef(null), J = re.useRef(null), ie = jt(J, T), {
    isFocusVisibleRef: L,
    onFocus: F,
    onBlur: P,
    ref: q
  } = Cw(), [K, X] = re.useState(!1);
  c && K && X(!1), re.useImperativeHandle(i, () => ({
    focusVisible: () => {
      X(!0), C.current.focus();
    }
  }), []);
  const [O, ne] = re.useState(!1);
  re.useEffect(() => {
    ne(!0);
  }, []);
  const G = O && !l && !c;
  re.useEffect(() => {
    K && d && !l && O && J.current.pulsate();
  }, [l, d, K, O]);
  function he(De, tn, lr = f) {
    return Tr((Xi) => (tn && tn(Xi), !lr && J.current && J.current[De](Xi), !0));
  }
  const H = he("start", B), Q = he("stop", m), V = he("stop", v), fe = he("stop", W), te = he("stop", (De) => {
    K && De.preventDefault(), z && z(De);
  }), le = he("start", k), Me = he("stop", $), de = he("stop", b), E = he("stop", (De) => {
    P(De), L.current === !1 && X(!1), h && h(De);
  }, !1), y = Tr((De) => {
    C.current || (C.current = De.currentTarget), F(De), L.current === !0 && (X(!0), j && j(De)), w && w(De);
  }), M = () => {
    const De = C.current;
    return u && u !== "button" && !(De.tagName === "A" && De.href);
  }, A = re.useRef(!1), Y = Tr((De) => {
    d && !A.current && K && J.current && De.key === " " && (A.current = !0, J.current.stop(De, () => {
      J.current.start(De);
    })), De.target === De.currentTarget && M() && De.key === " " && De.preventDefault(), N && N(De), De.target === De.currentTarget && M() && De.key === "Enter" && !c && (De.preventDefault(), p && p(De));
  }), ee = Tr((De) => {
    d && De.key === " " && J.current && K && !De.defaultPrevented && (A.current = !1, J.current.stop(De, () => {
      J.current.pulsate(De);
    })), I && I(De), p && De.target === De.currentTarget && M() && De.key === " " && !De.defaultPrevented && p(De);
  });
  let Z = u;
  Z === "button" && (R.href || R.to) && (Z = g);
  const ve = {};
  Z === "button" ? (ve.type = S === void 0 ? "button" : S, ve.disabled = c) : (!R.href && !R.to && (ve.role = "button"), c && (ve["aria-disabled"] = c));
  const Ce = jt(q, C), Se = jt(n, Ce);
  process.env.NODE_ENV !== "production" && re.useEffect(() => {
    G && !J.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [G]);
  const Pe = pe({}, r, {
    centerRipple: o,
    component: u,
    disabled: c,
    disableRipple: l,
    disableTouchRipple: f,
    focusRipple: d,
    tabIndex: U,
    focusVisible: K
  }), Ve = NI(Pe);
  return /* @__PURE__ */ ge.jsxs(TI, pe({
    as: Z,
    className: at(Ve.root, a),
    ownerState: Pe,
    onBlur: E,
    onClick: p,
    onContextMenu: Q,
    onFocus: y,
    onKeyDown: Y,
    onKeyUp: ee,
    onMouseDown: H,
    onMouseLeave: te,
    onMouseUp: fe,
    onDragLeave: V,
    onTouchEnd: Me,
    onTouchMove: de,
    onTouchStart: le,
    ref: Se,
    tabIndex: c ? -1 : U,
    type: S
  }, ve, R, {
    children: [s, G ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ge.jsx(wI, pe({
        ref: ie,
        center: o
      }, x))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ep.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: hg,
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
  component: lg,
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
const jI = ep, SI = Pt("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), gf = SI, bI = Pt("MuiListItemIcon", ["root", "alignItemsFlexStart"]), pf = bI, CI = Pt("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Mf = CI;
function xI(e) {
  return Zt("MuiMenuItem", e);
}
const OI = Pt("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), ni = OI, LI = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"], _I = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, kI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: o,
    classes: s
  } = e, u = _n({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", o && "selected"]
  }, xI, s);
  return pe({}, s, u);
}, zI = At(jI, {
  shouldForwardProp: (e) => cc(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: _I
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
  [`&.${ni.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : jr(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ni.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : jr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ni.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : jr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : jr(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${ni.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ni.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${gf.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${gf.inset}`]: {
    marginLeft: 52
  },
  [`& .${Mf.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Mf.inset}`]: {
    paddingLeft: 36
  },
  [`& .${pf.root}`]: {
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
  [`& .${pf.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), tp = /* @__PURE__ */ re.forwardRef(function(t, n) {
  const r = Mn({
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
  } = r, d = Je(r, LI), g = re.useContext(Za), h = {
    dense: s || g.dense || !1,
    disableGutters: u
  }, p = re.useRef(null);
  Ci(() => {
    i && (p.current ? p.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const m = pe({}, r, {
    dense: h.dense,
    divider: a,
    disableGutters: u
  }), v = kI(r), w = jt(p, n);
  let j;
  return r.disabled || (j = f !== void 0 ? f : -1), /* @__PURE__ */ ge.jsx(Za.Provider, {
    value: h,
    children: /* @__PURE__ */ ge.jsx(zI, pe({
      ref: w,
      role: l,
      tabIndex: j,
      component: o,
      focusVisibleClassName: at(v.focusVisible, c)
    }, d, {
      ownerState: m,
      classes: v
    }))
  });
});
process.env.NODE_ENV !== "production" && (tp.propTypes = {
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
const yf = tp;
var PI = {
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
const RI = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hc = (e, t) => {
  const n = es(
    ({ color: r = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: s, children: a, ...u }, c) => wt(
      "svg",
      {
        ref: c,
        ...PI,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: `lucide lucide-${RI(e)}`,
        ...u
      },
      [
        ...t.map(([l, f]) => wt(l, f)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, mf = hc("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]), UI = hc("Moon", [
  ["path", { d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "1rit1i" }]
]), FI = hc("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Qo = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375
}, Y4 = (e, t) => `
      @media screen and (max-width: ${Qo[e] / 16}em) {
        ${t};
      }
    `, YI = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  backgroundColor: "inherit"
}, BI = ({ theme: e, changeLang: t }) => {
  const [n, r] = Te.useState(null), i = (a) => {
    a.preventDefault(), r(a.currentTarget);
  }, o = () => {
    r(null);
  }, s = (a, u) => {
    a.preventDefault(), t(u), window.dispatchEvent(new Event("storage")), o();
  };
  return /* @__PURE__ */ ge.jsxs("div", { style: { float: "right" }, children: [
    /* @__PURE__ */ ge.jsx(
      "button",
      {
        style: {
          ...YI,
          color: e === "light" ? Ge.light.main : Ge.dark.text2
        },
        onClick: i,
        "aria-label": "Language toggle",
        children: /* @__PURE__ */ ge.jsx(Ya, { maxWidth: Qo.tablet, children: (a) => a ? /* @__PURE__ */ ge.jsx(mf, { size: "2x" }) : /* @__PURE__ */ ge.jsx(mf, { size: "3x", transform: "shrink-2" }) })
      }
    ),
    /* @__PURE__ */ ge.jsxs(
      fI,
      {
        id: "language-menu",
        anchorEl: n,
        open: !!n,
        onClose: o,
        disableAutoFocusItem: !0,
        classes: {
          paper: e === "light" ? Ge.light.bgSide : Ge.dark.bgSide
        },
        children: [
          /* @__PURE__ */ ge.jsx(
            yf,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? Ge.light.text2 : Ge.dark.text2
              },
              onClick: (a) => s(a, "ja"),
              children: "日本語"
            }
          ),
          /* @__PURE__ */ ge.jsx(
            yf,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? Ge.light.text2 : Ge.dark.text2
              },
              onClick: (a) => s(a, "en"),
              children: "English"
            }
          )
        ]
      }
    )
  ] });
}, np = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjMzMiAxNDAuNDIzLDMwMS4yODYgMTQ1LjMzNCwzMDEuNDYyIDE1NC45NzEgQyAzMDEuNzU5IDE3MS4xOTQsMzAxLjc4NCAxNzEuMDUwLDI5OS4xNjIgMTY4LjIwNSBDIDI5NS40MzkgMTY0LjE2NywyODcuNTg1IDE2Mi41MDksMjgxLjgwMCAxNjQuNTQyIEMgMjY0LjM3OSAxNzAuNjYyLDI2NC43NjcgMjAyLjA2NywyODIuMzIwIDIwNi42NDcgQyAyODguODE1IDIwOC4zNDIsMjk5LjAxMiAyMDQuOTAxLDMwMC40NDYgMjAwLjUzMCBDIDMwMS4wNTQgMTk4LjY3NSwzMDEuNzcxIDE5OS45OTcsMzAxLjc4NSAyMDMuMDAwIEwgMzAxLjgwMCAyMDYuMjAwIDMwNS40NzEgMjA2LjI2NCBDIDMwNy45NjQgMjA2LjMwOCwzMDkuMTgzIDIwNi4xNzksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjM0MiAyMDUuNjA5LDMwOS4zMTAgMTkwLjc0MSwzMDkuMjAwIDE3Mi44MjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA1LjUwMiAxNDAuMjI1IEMgMzAzLjU3OCAxNDAuMjExLDMwMS44MjIgMTQwLjI2MCwzMDEuNjAwIDE0MC4zMzQgTTYzLjYwMCAxNDYuNjczIEMgNjMuNjAwIDE0Ny4wNDQsNjMuOTQ3IDE0OC4zNDksNjQuMzcxIDE0OS41NzMgQyA2NC43OTUgMTUwLjc5OCw2Ni4yNTEgMTU1LjMxMCw2Ny42MDUgMTU5LjYwMCBDIDY4Ljk2MCAxNjMuODkwLDcwLjM5NyAxNjguMzkwLDcwLjc5OSAxNjkuNjAwIEMgNzEuODA0IDE3Mi42MjcsNzMuNzM1IDE3OC43OTMsNzQuODA2IDE4Mi40MDAgQyA3NS4yOTcgMTg0LjA1MCw3Ni4wMjEgMTg2LjM5MCw3Ni40MTUgMTg3LjYwMCBDIDc2LjgxMCAxODguODEwLDc3LjcwNyAxOTEuNjkwLDc4LjQwOSAxOTQuMDAwIEMgNzkuMTEwIDE5Ni4zMTAsODAuMDQwIDE5OS4zNzAsODAuNDc1IDIwMC44MDAgQyA4MC45MTAgMjAyLjIzMCw4MS41MDEgMjA0LjAzMCw4MS43ODggMjA0LjgwMCBMIDgyLjMxMSAyMDYuMjAwIDg1LjY1MyAyMDYuMjAwIEwgODguOTk2IDIwNi4yMDAgOTYuNzk4IDE4Mi43MDkgQyAxMDMuMzQwIDE2My4wMTIsMTA1LjYwMCAxNTcuMDAzLDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU5LjM2OSwxMDYuMzI4IDE2MS40ODQsMTA3LjIxOSAxNjQuMDA5IEMgMTEwLjQxOCAxNzMuMDgyLDExNS45NzIgMTg5Ljk3MywxMTguODU2IDE5OS40MDAgQyAxMTkuMzI3IDIwMC45NDAsMTIwLjAwOSAyMDMuMTAwLDEyMC4zNzEgMjA0LjIwMCBMIDEyMS4wMzEgMjA2LjIwMCAxMjQuNDA1IDIwNi4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTM3LjUzMCAxNzcuMjAwIEMgMTQyLjg5MyAxNjEuMjUwLDE0Ny4zNzMgMTQ3LjcwNSwxNDcuNDg2IDE0Ny4xMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ0LjUzOCAxNDYuMDAwIEwgMTQxLjM4NSAxNDYuMDAwIDE0MC40NDcgMTQ5LjUwMCBDIDEzOS42MzYgMTUyLjUyNSwxMzguMTM5IDE1Ny45ODUsMTM2LjgwMCAxNjIuODAwIEMgMTMyLjk0MyAxNzYuNjY4LDEyNi43MjcgMTk1LjY4NiwxMjYuMjI2IDE5NS4xNTAgQyAxMjUuOTM2IDE5NC44MzgsMTE2LjAxOCAxNjUuMzgzLDExMy42NTAgMTU3LjgwMCBDIDExMi45NjMgMTU1LjYwMCwxMTEuODMwIDE1Mi4wNDUsMTExLjEzMyAxNDkuOTAwIEwgMTA5Ljg2NCAxNDYuMDAwIDEwNi43ODEgMTQ2LjAwMCBDIDEwMy4yNTEgMTQ2LjAwMCwxMDMuNDI0IDE0NS43OTEsMTAxLjY1MCAxNTIuMjAwIEMgMTAxLjQwNiAxNTMuMDgwLDEwMC44NDUgMTU1LjAxNSwxMDAuNDAzIDE1Ni41MDAgQyA5OS45NjIgMTU3Ljk4NSw5OS4yNjYgMTYwLjMyNSw5OC44NTcgMTYxLjcwMCBDIDk2LjgyNSAxNjguNTM5LDk2LjExOSAxNzAuNzczLDkzLjc3MCAxNzcuODAwIEMgODcuODEwIDE5NS42MjIsODcuNDAyIDE5Ni42NzcsODYuOTcyIDE5NS4zNTcgQyA4Ni44MzYgMTk0Ljk0MSw4Ni41NzQgMTk0LjE1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjIwMyAxOTMuMDUwLDg1LjQ4MSAxOTAuNzEwLDg0Ljc4NCAxODguNDAwIEMgODIuNDcyIDE4MC43NDEsODEuOTQxIDE3OS4wMDksODEuNTk1IDE3OC4wMDAgQyA4MS4yMTIgMTc2Ljg4Niw3OS4wMTggMTY5LjQ4NCw3OC4zMzMgMTY3LjAwMCBDIDc3LjgzNCAxNjUuMTkxLDc3LjIzMSAxNjMuMDc5LDc2Ljc5MSAxNjEuNjAwIEMgNzYuNjI3IDE2MS4wNTAsNzYuMjk2IDE1OS44ODAsNzYuMDU1IDE1OS4wMDAgQyA3NS4xNTIgMTU1LjcwNSw3My45MTUgMTUxLjMxMyw3My4xNTMgMTQ4LjcwMCBMIDcyLjM2NiAxNDYuMDAwIDY3Ljk4MyAxNDYuMDAwIEMgNjQuMTQxIDE0Ni4wMDAsNjMuNjAwIDE0Ni4wODMsNjMuNjAwIDE0Ni42NzMgTTE2Ni4yMDAgMTYzLjg1OSBDIDE2My40MzQgMTY0LjE2MywxNTkuNDg0IDE2NS41OTcsMTU3LjIwMCAxNjcuMTI3IEwgMTU1LjAwMCAxNjguNjAwIDE1NC44ODEgMTcxLjEwMCBDIDE1NC43MzAgMTc0LjI2MywxNTUuMjIxIDE3NC4zNDEsMTU3Ljk3MiAxNzEuNTg5IEMgMTYwLjgyMCAxNjguNzQyLDE2Mi45ODMgMTY3Ljg2NCwxNjcuMjAwIDE2Ny44NDQgQyAxNzMuNDMxIDE2Ny44MTUsMTc2LjAzMiAxNzAuNTI1LDE3Ni4xNDMgMTc3LjE2MyBMIDE3Ni4yMDAgMTgwLjYwMCAxNzQuNzU1IDE4MS4zMDYgQyAxNzMuOTYxIDE4MS42OTUsMTcwLjE4MSAxODIuNjU3LDE2Ni4zNTUgMTgzLjQ0MyBDIDE1NC4wMjkgMTg1Ljk3OCwxNTAuODM4IDE4OC44MjUsMTUxLjI4MCAxOTYuODkwIEMgMTUxLjg1MCAyMDcuMjc3LDE2NS4yMTYgMjExLjA2NywxNzQuMzA0IDIwMy40MTkgQyAxNzUuNzQzIDIwMi4yMDksMTc2LjgwMCAyMDIuMDk4LDE3Ni44MDAgMjAzLjE1OSBDIDE3Ni44MDAgMjA0LjYzOCwxNzkuNDA2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTg3LjQzNiAyMDYuNDAwLDE5MS40MjggMjAzLjU1MiwxODYuNzk3IDIwMi42ODkgQyAxODUuNjc2IDIwMi40ODEsMTg0LjY1MyAyMDEuOTY5LDE4NC4wNzkgMjAxLjMzMSBMIDE4My4xNTggMjAwLjMwNiAxODMuMjQ3IDE4Ny4yNTMgQyAxODMuMzQ2IDE3Mi44MDAsMTgzLjE1NiAxNzEuMzE2LDE4MC43OTAgMTY4LjA0OSBDIDE3OC40MTMgMTY0Ljc2OCwxNzIuNzQ1IDE2My4xNDEsMTY2LjIwMCAxNjMuODU5IE0yMDIuNjg3IDE2NC4wMzcgQyAxOTYuNzMyIDE2NS40MzksMTkzLjM4NiAxNjkuNzU4LDE5My40MzQgMTc1Ljk4MSBDIDE5My40ODQgMTgyLjU5OCwxOTYuMjQ1IDE4NS44OTgsMjAzLjI5MyAxODcuNzY1IEMgMjExLjMxMiAxODkuODg4LDIxMy45NzYgMTkyLjE2OCwyMTMuNDY2IDE5Ni40NzIgQyAyMTIuNDUwIDIwNS4wNDksMjAyLjQyNCAyMDUuNzI0LDE5NS42MzkgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTQuMjgzIDE5Ny42NzEgQyAxOTMuOTY3IDE5OC4xODIsMTkzLjM5NSAxOTkuNzYyLDE5My4wMTEgMjAxLjE4MyBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMzUxIDIwNC41OTQgQyAxOTMuOTIzIDIwNS4wNTAsMTk1LjI0OCAyMDUuNjU4LDE5Ni4yOTUgMjA1Ljk0NyBDIDE5Ny4zNDMgMjA2LjIzNSwxOTguNzIyIDIwNi42MzUsMTk5LjM2MCAyMDYuODM1IEMgMjExLjI4OSAyMTAuNTg3LDIyMy44NDggMTk4LjM4MiwyMTguNTM2IDE4OC4yMDAgQyAyMTYuOTI2IDE4NS4xMTMsMjE0LjMyMyAxODMuNjUyLDIwNi4wMDAgMTgxLjE2NCBDIDIwMS4wNjAgMTc5LjY4NywxOTkuMDAwIDE3Ny41MjksMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMyAxNjYuMzcxLDIwNy4wMjggMTY0LjYxNCwyMTMuODQ4IDE3MC41ODAgQyAyMTUuOTY4IDE3Mi40MzQsMjE2LjgwMCAxNzIuNDQwLDIxNi44MDAgMTcwLjYwMCBDIDIxNi44MDAgMTcwLjEzOCwyMTYuOTYxIDE2OS41ODksMjE3LjE1OCAxNjkuMzgwIEMgMjE3LjM1NSAxNjkuMTcxLDIxNy42NDAgMTY4LjQxMiwyMTcuNzkxIDE2Ny42OTMgQyAyMTguMzc2IDE2NC45MTYsMjA4Ljc5OSAxNjIuNTk3LDIwMi42ODcgMTY0LjAzNyBNMjQwLjQwMCAxNjMuODg1IEMgMjI3LjI3MSAxNjYuMTg5LDIyMC4zOTYgMTgyLjc3NCwyMjYuOTI1IDE5Ni4zOTEgQyAyMzEuOTg4IDIwNi45NDgsMjQ2LjM5MSAyMTAuNDA3LDI1OC4wMDAgMjAzLjg1MyBDIDI2MC40OTYgMjAyLjQ0NCwyNjAuODAwIDIwMi4wMjIsMjYwLjgwMCAxOTkuOTYyIEMgMjYwLjgwMCAxOTcuNDMxLDI2MC40MDQgMTk3LjI5NiwyNTguMTE5IDE5OS4wNDkgQyAyNDYuNTkwIDIwNy44OTQsMjMyLjgwMCAyMDEuNjUxLDIzMi44MDAgMTg3LjU4NSBMIDIzMi44MDAgMTg1LjIxMCAyNDcuNzAwIDE4NS4xMDUgTCAyNjIuNjAwIDE4NS4wMDAgMjYyLjcyMiAxODIuNjE4IEMgMjYzLjM5MSAxNjkuNjA2LDI1My43NzYgMTYxLjUzNiwyNDAuNDAwIDE2My44ODUgTTMzMy44MDAgMTYzLjg0NyBDIDMyNi45NDIgMTY0LjUzNywzMjIuMDAwIDE2Ny42OTMsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNzQuMjQwLDMyMi42OTMgMTc0LjMwNywzMjUuMTkxIDE3MS42ODggQyAzMzAuOTQ1IDE2NS42NTUsMzQwLjg2MSAxNjYuNDk2LDM0Mi45NjYgMTczLjE5NSBDIDM0NS4yMTMgMTgwLjM0OCwzNDQuNDU0IDE4MS4yNzcsMzM0LjgwMCAxODMuMTg2IEMgMzIxLjU2MyAxODUuODAzLDMxOC41OTYgMTg4LjIzMiwzMTguNjYwIDE5Ni40MDAgQyAzMTguNzQzIDIwNi44NjgsMzMwLjYwNyAyMTAuOTIyLDM0MC44MzUgMjAzLjk3NiBDIDM0My42MjMgMjAyLjA4MywzNDMuNzY2IDIwMi4wNjgsMzQ0LjQwNCAyMDMuNjEwIEMgMzQ1LjEyNyAyMDUuMzU0LDM0Ni43OTcgMjA2LjQwMCwzNDguODYyIDIwNi40MDEgQyAzNTQuNzE1IDIwNi40MDUsMzU4LjYzOCAyMDMuNTYyLDM1NC4wMDAgMjAyLjY3OCBDIDM1MC40NTkgMjAyLjAwNCwzNTAuNjAwIDIwMi42NDgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAxNzEuNTk0LDM1MC40NjkgMTcwLjc1NCwzNDcuNTIwIDE2Ny40MDQgQyAzNDUuMDYwIDE2NC42MTAsMzM5Ljc5MSAxNjMuMjQ0LDMzMy44MDAgMTYzLjg0NyBNMjQ3Ljg5NiAxNjcuNDA2IEMgMjUyLjAwMyAxNjguNjI2LDI1NS40NDcgMTc0LjM2NSwyNTUuMTI0IDE3OS40NTEgTCAyNTUuMDAwIDE4MS40MDAgMjQzLjkwMCAxODEuNTA2IEwgMjMyLjgwMCAxODEuNjEzIDIzMi44MDAgMTgwLjYyNiBDIDIzMi44MDAgMTcxLjkwMiwyNDAuNDU3IDE2NS4xOTcsMjQ3Ljg5NiAxNjcuNDA2IE0yOTQuMjk1IDE2OC41NDMgQyAzMDEuNTMzIDE3Mi4zMDAsMzA0LjAxNiAxODYuMjUzLDI5OS4yNTcgMTk2LjQyNyBDIDI5NS4zNDQgMjA0Ljc5MywyODQuMDQ0IDIwNS42MjcsMjc5LjU5OSAxOTcuODc4IEMgMjc0LjMzNiAxODguNzAyLDI3Ni44NjggMTcyLjc0OSwyODQuMTk3IDE2OC45MDYgQyAyODcuMDEyIDE2Ny40MzEsMjkxLjgxOSAxNjcuMjU4LDI5NC4yOTUgMTY4LjU0MyBNMTc2LjE5NyAxOTEuMjA4IEMgMTc2LjE5NCAxOTguMzI0LDE3Ni4wNTcgMTk4LjcxMCwxNzIuNzgyIDIwMC44MTEgQyAxNjYuMjM1IDIwNS4wMTMsMTU5Ljk5OSAyMDIuOTk5LDE1OS4wMDMgMTk2LjM2MiBDIDE1OC4xNDIgMTkwLjYxNSwxNjEuMzg0IDE4Ny44NTEsMTcxLjYwMCAxODUuNjI0IEMgMTc2LjYwMSAxODQuNTM0LDE3Ni4yMDAgMTg0LjA0NywxNzYuMTk3IDE5MS4yMDggTTM0My41MDQgMTkxLjAwNSBDIDM0My42MjYgMTk4LjAyOCwzNDMuNDI1IDE5OC41ODYsMzM5Ljk1MCAyMDAuODY3IEMgMzM0LjAwMiAyMDQuNzcxLDMyNy42NDQgMjAyLjk5NCwzMjYuNDE4IDE5Ny4wODUgQyAzMjUuMjYzIDE5MS41MjEsMzI4LjAyMiAxODguMzM0LDMzNS42MDAgMTg2LjQ4MCBDIDM0NC4zNzUgMTg0LjMzNCwzNDMuMzc4IDE4My43NjMsMzQzLjUwNCAxOTEuMDA1IE0xNTcuNjc5IDIxOS40NTAgQyAxNTMuMzc1IDIyMS42MzQsMTU1LjA0OSAyMjguMDAwLDE1OS45MjcgMjI4LjAwMCBDIDE2NS43MzMgMjI4LjAwMCwxNjYuMzM0IDIxOS44MzcsMTYwLjU5MCAyMTkuMDA5IEMgMTU5LjUwOSAyMTguODUzLDE1OC41NzcgMjE4Ljk5NSwxNTcuNjc5IDIxOS40NTAgTTEwMi44ODIgMjIyLjY5NyBMIDEwMy4wMDAgMjI1LjQwMCAxMDQuNDAwIDIyNS4zMDAgQyAxMDUuMTcwIDIyNS4yNDYsMTA5LjI4MiAyMjUuMDg5LDExMy41MzggMjI0Ljk1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMjEuMTUyIDI1Mi40NTIgTCAxMjEuMDI5IDI4MC4yMDAgMTI1LjExNCAyODAuMzE0IEMgMTI4LjIyMyAyODAuNDAxLDEyOS4yMDcgMjgwLjMwNSwxMjkuMjMwIDI3OS45MTQgQyAxMjkuMjQ2IDI3OS42MzEsMTI5LjIzMyAyNjcuNzY3LDEyOS4yMDIgMjUzLjU0OSBDIDEyOS4xNzEgMjM5LjMzMSwxMjkuMjcyIDIyNy4wMjUsMTI5LjQyNiAyMjYuMjAyIEwgMTI5LjcwNyAyMjQuNzA2IDEzNy4xNTMgMjI0Ljk1NSBDIDE0MS4yNDkgMjI1LjA5MSwxNDUuMjMwIDIyNS4yNDcsMTQ2LjAwMCAyMjUuMzAyIEwgMTQ3LjQwMCAyMjUuNDAwIDE0Ny40MDAgMjIyLjgwMCBMIDE0Ny40MDAgMjIwLjIwMCAxMjUuMDgyIDIyMC4wOTcgTCAxMDIuNzYzIDIxOS45OTMgMTAyLjg4MiAyMjIuNjk3IE0xOTQuNDAwIDIzOC4xMjQgQyAxOTEuNDc4IDIzOC45NzAsMTg5LjgxOSAyMzkuOTI2LDE4Ny4yNzUgMjQyLjIyOCBDIDE4NC4zMDcgMjQ0LjkxMywxODQuNDAxIDI0NC45MjQsMTg0LjM5NCAyNDEuOTAwIEMgMTg0LjM4NiAyMzguNjMxLDE4NC4zMzAgMjM4LjU4MiwxODAuNjU1IDIzOC41OTYgTCAxNzcuNTExIDIzOC42MDggMTc3LjQ1NSAyNTkuNTA0IEwgMTc3LjQwMCAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE4NC43NjkgMjgwLjQwMCAxODQuNzEwIDI2Ny4zMDAgQyAxODQuNjIwIDI0Ny4zNTcsMTg2LjQwMCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDIwMi43NTggMjQzLjIwMCwyMDQuNTMzIDI0Ny45MDQsMjAzLjY1OSAyNjYuMDY0IEMgMjAzLjQwMiAyNzEuNDE5LDIwMy4xOTMgMjc2LjgzNSwyMDMuMTk2IDI3OC4xMDAgTCAyMDMuMjAwIDI4MC40MDAgMjA2LjgwMCAyODAuNDAwIEMgMjA5LjM4NyAyODAuNDAwLDIxMC40MTQgMjgwLjI1OSwyMTAuNDUwIDI3OS45MDAgQyAyMTAuNDc4IDI3OS42MjUsMjEwLjQ2MSAyNzUuMjYwLDIxMC40MTIgMjcwLjIwMCBDIDIxMC4yMDkgMjQ4Ljk0NiwyMTIuNDA1IDI0My4wOTYsMjIwLjYwMCAyNDMuMDYwIEMgMjIzLjg4MiAyNDMuMDQ1LDIyNi4xODAgMjQ0LjAyNCwyMjcuNzI3IDI0Ni4wOTYgQyAyMjkuNzMzIDI0OC43ODIsMjI5LjgwNiAyNDkuNDk1LDIyOS43MTQgMjY1LjUxNSBMIDIyOS42MjkgMjgwLjQzMCAyMzMuMjU3IDI4MC4zMTUgTCAyMzYuODg2IDI4MC4yMDAgMjM2LjkxMiAyNjQuMDAwIEMgMjM2LjkzNyAyNDguMTkyLDIzNi45MTYgMjQ3Ljc0NSwyMzYuMDUyIDI0NS41MzAgQyAyMzIuMjc5IDIzNS44NzEsMjE4LjA1MCAyMzQuOTYzLDIxMS40MDAgMjQzLjk1OCBDIDIwOS45NDAgMjQ1LjkzMywyMDkuODU0IDI0NS45NDQsMjA5LjA1MCAyNDQuMjQ5IEMgMjA2LjcwOSAyMzkuMzE1LDE5OS45OTEgMjM2LjUwNiwxOTQuNDAwIDIzOC4xMjQgTTI2MS4yODMgMjM4LjIxMCBDIDI0MS4yNTIgMjQyLjU2MCwyNDAuNjgyIDI3NC40MDYsMjYwLjUyNyAyODAuNDQyIEMgMjY4Ljg2NCAyODIuOTc3LDI4MS41MzMgMjc5LjQwMSwyODIuMTMyIDI3NC4zNDQgQyAyODIuNDY3IDI3MS41MTcsMjgyLjAwNyAyNzEuMTg5LDI4MC4wNTIgMjcyLjg2MiBDIDI2OS4yMjAgMjgyLjEzNCwyNTUuNjg0IDI3Ni42NDcsMjU0LjI0NCAyNjIuNDAwIEMgMjUzLjkwMCAyNTguOTk1LDI1Mi44NDkgMjU5LjIyMywyNjkuNDIxIDI1OS4xMDUgTCAyODQuMjAwIDI1OS4wMDAgMjg0LjMzNiAyNTcuMDAwIEMgMjg1LjIzMSAyNDMuODI4LDI3NC43NTEgMjM1LjI4NiwyNjEuMjgzIDIzOC4yMTAgTTE1Ni4zODAgMjM4Ljc5MyBDIDE1Ni4zNjkgMjM4LjkwNywxNTYuMzQzIDI0OC4yNzAsMTU2LjMyMiAyNTkuNjAwIEwgMTU2LjI4NSAyODAuMjAwIDE1OS44NzYgMjgwLjMxNCBMIDE2My40NjcgMjgwLjQyOCAxNjMuNDM0IDI1OS41MzEgTCAxNjMuNDAwIDIzOC42MzMgMTU5LjkwMCAyMzguNjA5IEMgMTU3Ljk3NSAyMzguNTk2LDE1Ni4zOTEgMjM4LjY3OCwxNTYuMzgwIDIzOC43OTMgTTI2OS4xNjQgMjQxLjQyNiBDIDI3My40MDggMjQyLjY4NywyNzYuMjYzIDI0Ny4wNzcsMjc2LjQ5MCAyNTIuNjg5IEwgMjc2LjYwMCAyNTUuNDAwIDI2NS41MDAgMjU1LjUwNiBMIDI1NC40MDAgMjU1LjYxMyAyNTQuNDA1IDI1NC41MDYgQyAyNTQuNDQxIDI0NS45NzUsMjYxLjk4MSAyMzkuMjkzLDI2OS4xNjQgMjQxLjQyNiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2Y4ZjVmNSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggaWQ9InBhdGgxIiBkPSJNMTc2LjIwMCAyMi43MDAgQyAxNjMuNzg2IDM1LjE4NSwxNTEuODIzIDQ3LjIwMCwxNDkuNjE2IDQ5LjQwMCBDIDE0NC4zMzggNTQuNjYxLDU0LjM1MCAxNDQuNjUzLDQ5LjMwNCAxNDkuNzE3IEMgNDcuMTU3IDE1MS44NzIsMzUuMTg1IDE2My43ODksMjIuNzAwIDE3Ni4yMDEgQyAyLjU3OCAxOTYuMjA0LDAuMDAwIDE5OC45MDYsMC4wMDAgMTk5Ljk4OSBDIDAuMDAwIDIwMS4wNzAsMi4xNTMgMjAzLjM0MiwxOC42ODAgMjE5LjcwNiBDIDI4Ljk1NCAyMjkuODc4LDQ3LjgwOSAyNDguNzEyLDYwLjU4MCAyNjEuNTYwIEMgODkuODg4IDI5MS4wNDUsMTA4Ljk1NSAzMTAuMTEyLDEzOC40NDAgMzM5LjQyMCBDIDE1MS4yODggMzUyLjE5MSwxNzAuMTIyIDM3MS4wNDYsMTgwLjI5NCAzODEuMzIwIEMgMTk2LjU0MyAzOTcuNzMyLDE5OC45MzUgNDAwLjAwMCwxOTkuOTk0IDQwMC4wMDAgQyAyMDEuMDU0IDQwMC4wMDAsMjA0LjEzMiAzOTcuMDU3LDIyNS43NTkgMzc1LjM2MCBDIDIzOS4yNjcgMzYxLjgwOCwyNTAuNTAwIDM1MC41NDAsMjUwLjcyMCAzNTAuMzIwIEMgMjUxLjI0MyAzNDkuNzk3LDM0OS42NTkgMjUxLjM4MSwzNTAuMjYwIDI1MC43ODAgQyAzNTAuNTEzIDI1MC41MjcsMzYxLjgwOCAyMzkuMjY3LDM3NS4zNjAgMjI1Ljc1OSBDIDM5Ny4wMjcgMjA0LjE2Miw0MDAuMDAwIDIwMS4wNTMsNDAwLjAwMCAxOTkuOTk3IEMgNDAwLjAwMCAxOTguOTQwLDM5Ny4xMTMgMTk1LjkyMCwzNzYuMTAwIDE3NC45OTQgQyAzNjIuOTU1IDE2MS45MDMsMzUxLjY2MCAxNTAuNjUwLDM1MS4wMDAgMTQ5Ljk4OCBDIDM1MC4zNDAgMTQ5LjMyNSwzMjcuNzUwIDEyNi43MzMsMzAwLjgwMCA5OS43ODIgQyAyNzMuODUwIDcyLjgzMiwyNTEuNDY1IDUwLjQ0NiwyNTEuMDU1IDUwLjAzNSBDIDI1MC42NDYgNDkuNjI1LDIzOS4yNjAgMzguMTk5LDIyNS43NTUgMjQuNjQ1IEMgMjA0LjA1NSAyLjg2NywyMDEuMDU3IDAuMDAwLDE5OS45ODUgMC4wMDAgQyAxOTguOTE0IDAuMDAwLDE5Ni4xMzYgMi42NTEsMTc2LjIwMCAyMi43MDAgTTMwOS4yMDAgMTcyLjgyNSBDIDMwOS4zMTAgMTkwLjc0MSwzMDkuMzQyIDIwNS42MDksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjE4MyAyMDYuMTc5LDMwNy45NjQgMjA2LjMwOCwzMDUuNDcxIDIwNi4yNjQgTCAzMDEuODAwIDIwNi4yMDAgMzAxLjc4NSAyMDMuMDAwIEMgMzAxLjc3MSAxOTkuOTk3LDMwMS4wNTQgMTk4LjY3NSwzMDAuNDQ2IDIwMC41MzAgQyAyOTkuMDEyIDIwNC45MDEsMjg4LjgxNSAyMDguMzQyLDI4Mi4zMjAgMjA2LjY0NyBDIDI2NC43NjcgMjAyLjA2NywyNjQuMzc5IDE3MC42NjIsMjgxLjgwMCAxNjQuNTQyIEMgMjg3LjU4NSAxNjIuNTA5LDI5NS40MzkgMTY0LjE2NywyOTkuMTYyIDE2OC4yMDUgQyAzMDEuNzg0IDE3MS4wNTAsMzAxLjc1OSAxNzEuMTk0LDMwMS40NjIgMTU0Ljk3MSBDIDMwMS4yODYgMTQ1LjMzNCwzMDEuMzMyIDE0MC40MjMsMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjgyMiAxNDAuMjYwLDMwMy41NzggMTQwLjIxMSwzMDUuNTAyIDE0MC4yMjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA5LjIwMCAxNzIuODI1IE03My4xNTMgMTQ4LjcwMCBDIDczLjkxNSAxNTEuMzEzLDc1LjE1MiAxNTUuNzA1LDc2LjA1NSAxNTkuMDAwIEMgNzYuMjk2IDE1OS44ODAsNzYuNjI3IDE2MS4wNTAsNzYuNzkxIDE2MS42MDAgQyA3Ny4yMzEgMTYzLjA3OSw3Ny44MzQgMTY1LjE5MSw3OC4zMzMgMTY3LjAwMCBDIDc5LjAxOCAxNjkuNDg0LDgxLjIxMiAxNzYuODg2LDgxLjU5NSAxNzguMDAwIEMgODEuOTQxIDE3OS4wMDksODIuNDcyIDE4MC43NDEsODQuNzg0IDE4OC40MDAgQyA4NS40ODEgMTkwLjcxMCw4Ni4yMDMgMTkzLjA1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjU3NCAxOTQuMTUwLDg2LjgzNiAxOTQuOTQxLDg2Ljk3MiAxOTUuMzU3IEMgODcuNDAyIDE5Ni42NzcsODcuODEwIDE5NS42MjIsOTMuNzcwIDE3Ny44MDAgQyA5Ni4xMTkgMTcwLjc3Myw5Ni44MjUgMTY4LjUzOSw5OC44NTcgMTYxLjcwMCBDIDk5LjI2NiAxNjAuMzI1LDk5Ljk2MiAxNTcuOTg1LDEwMC40MDMgMTU2LjUwMCBDIDEwMC44NDUgMTU1LjAxNSwxMDEuNDA2IDE1My4wODAsMTAxLjY1MCAxNTIuMjAwIEMgMTAzLjQyNCAxNDUuNzkxLDEwMy4yNTEgMTQ2LjAwMCwxMDYuNzgxIDE0Ni4wMDAgTCAxMDkuODY0IDE0Ni4wMDAgMTExLjEzMyAxNDkuOTAwIEMgMTExLjgzMCAxNTIuMDQ1LDExMi45NjMgMTU1LjYwMCwxMTMuNjUwIDE1Ny44MDAgQyAxMTYuMDE4IDE2NS4zODMsMTI1LjkzNiAxOTQuODM4LDEyNi4yMjYgMTk1LjE1MCBDIDEyNi41MDYgMTk1LjQ0OSwxMjcuNjE5IDE5Mi40MDAsMTMwLjczNyAxODIuODAwIEMgMTMzLjQ3MCAxNzQuMzg1LDEzNC43NzYgMTcwLjA3NiwxMzYuODAwIDE2Mi44MDAgQyAxMzguMTM5IDE1Ny45ODUsMTM5LjYzNiAxNTIuNTI1LDE0MC40NDcgMTQ5LjUwMCBMIDE0MS4zODUgMTQ2LjAwMCAxNDQuNTM4IDE0Ni4wMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ3LjQ4NiAxNDcuMTAwIEMgMTQ3LjM3MyAxNDcuNzA1LDE0Mi44OTMgMTYxLjI1MCwxMzcuNTMwIDE3Ny4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTI0LjQwNSAyMDYuMjAwIEwgMTIxLjAzMSAyMDYuMjAwIDEyMC4zNzEgMjA0LjIwMCBDIDEyMC4wMDkgMjAzLjEwMCwxMTkuMzI3IDIwMC45NDAsMTE4Ljg1NiAxOTkuNDAwIEMgMTE1Ljk3MiAxODkuOTczLDExMC40MTggMTczLjA4MiwxMDcuMjE5IDE2NC4wMDkgQyAxMDYuMzI4IDE2MS40ODQsMTA1LjYwMCAxNTkuMzY5LDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU3LjAwMywxMDMuMzQwIDE2My4wMTIsOTYuNzk4IDE4Mi43MDkgTCA4OC45OTYgMjA2LjIwMCA4NS42NTMgMjA2LjIwMCBMIDgyLjMxMSAyMDYuMjAwIDgxLjc4OCAyMDQuODAwIEMgODEuNTAxIDIwNC4wMzAsODAuOTEwIDIwMi4yMzAsODAuNDc1IDIwMC44MDAgQyA4MC4wNDAgMTk5LjM3MCw3OS4xMTAgMTk2LjMxMCw3OC40MDkgMTk0LjAwMCBDIDc3LjcwNyAxOTEuNjkwLDc2LjgxMCAxODguODEwLDc2LjQxNSAxODcuNjAwIEMgNzYuMDIxIDE4Ni4zOTAsNzUuMjk3IDE4NC4wNTAsNzQuODA2IDE4Mi40MDAgQyA3My43MzUgMTc4Ljc5Myw3MS44MDQgMTcyLjYyNyw3MC43OTkgMTY5LjYwMCBDIDcwLjM5NyAxNjguMzkwLDY4Ljk2MCAxNjMuODkwLDY3LjYwNSAxNTkuNjAwIEMgNjYuMjUxIDE1NS4zMTAsNjQuNzk1IDE1MC43OTgsNjQuMzcxIDE0OS41NzMgQyA2My4wOTEgMTQ1Ljg3Niw2Mi45NjYgMTQ2LjAwMCw2Ny45ODMgMTQ2LjAwMCBMIDcyLjM2NiAxNDYuMDAwIDczLjE1MyAxNDguNzAwIE0xNzUuNjAwIDE2NC41MTggQyAxODIuNTkwIDE2Ny4wNzIsMTgzLjM2OSAxNjkuMzg4LDE4My4yNDcgMTg3LjI1MyBMIDE4My4xNTggMjAwLjMwNiAxODQuMDc5IDIwMS4zMzEgQyAxODQuNjUzIDIwMS45NjksMTg1LjY3NiAyMDIuNDgxLDE4Ni43OTcgMjAyLjY4OSBDIDE5MS40MjggMjAzLjU1MiwxODcuNDM2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTc5LjQwNiAyMDYuNDAwLDE3Ni44MDAgMjA0LjYzOCwxNzYuODAwIDIwMy4xNTkgQyAxNzYuODAwIDIwMi4wOTgsMTc1Ljc0MyAyMDIuMjA5LDE3NC4zMDQgMjAzLjQxOSBDIDE2NS4yMTYgMjExLjA2NywxNTEuODUwIDIwNy4yNzcsMTUxLjI4MCAxOTYuODkwIEMgMTUwLjgzOCAxODguODI1LDE1NC4wMjkgMTg1Ljk3OCwxNjYuMzU1IDE4My40NDMgQyAxNzAuMTgxIDE4Mi42NTcsMTczLjk2MSAxODEuNjk1LDE3NC43NTUgMTgxLjMwNiBMIDE3Ni4yMDAgMTgwLjYwMCAxNzYuMTQzIDE3Ny4xNjMgQyAxNzYuMDMyIDE3MC41MjUsMTczLjQzMSAxNjcuODE1LDE2Ny4yMDAgMTY3Ljg0NCBDIDE2Mi45ODMgMTY3Ljg2NCwxNjAuODIwIDE2OC43NDIsMTU3Ljk3MiAxNzEuNTg5IEMgMTU1LjIyMSAxNzQuMzQxLDE1NC43MzAgMTc0LjI2MywxNTQuODgxIDE3MS4xMDAgTCAxNTUuMDAwIDE2OC42MDAgMTU3LjIwMCAxNjcuMTI3IEMgMTYxLjkwNyAxNjMuOTc0LDE3MC42OTkgMTYyLjcyOCwxNzUuNjAwIDE2NC41MTggTTIxMS4zMjggMTYzLjk4NiBDIDIxNi44MDAgMTY0Ljg4MiwyMTkuMjU1IDE2Ny4xNTQsMjE3LjE1OCAxNjkuMzgwIEMgMjE2Ljk2MSAxNjkuNTg5LDIxNi44MDAgMTcwLjEzOCwyMTYuODAwIDE3MC42MDAgQyAyMTYuODAwIDE3Mi40NDAsMjE1Ljk2OCAxNzIuNDM0LDIxMy44NDggMTcwLjU4MCBDIDIwNy4wMjggMTY0LjYxNCwxOTkuMDAzIDE2Ni4zNzEsMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMCAxNzcuNTI5LDIwMS4wNjAgMTc5LjY4NywyMDYuMDAwIDE4MS4xNjQgQyAyMTQuMzIzIDE4My42NTIsMjE2LjkyNiAxODUuMTEzLDIxOC41MzYgMTg4LjIwMCBDIDIyMy44NDggMTk4LjM4MiwyMTEuMjg5IDIxMC41ODcsMTk5LjM2MCAyMDYuODM1IEMgMTk4LjcyMiAyMDYuNjM1LDE5Ny4zNDMgMjA2LjIzNSwxOTYuMjk1IDIwNS45NDcgQyAxOTUuMjQ4IDIwNS42NTgsMTkzLjkyMyAyMDUuMDUwLDE5My4zNTEgMjA0LjU5NCBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMDExIDIwMS4xODMgQyAxOTMuMzk1IDE5OS43NjIsMTkzLjk2NyAxOTguMTgyLDE5NC4yODMgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTUuNjM5IDE5Ny42NzEgQyAyMDIuNDI0IDIwNS43MjQsMjEyLjQ1MCAyMDUuMDQ5LDIxMy40NjYgMTk2LjQ3MiBDIDIxMy45NzYgMTkyLjE2OCwyMTEuMzEyIDE4OS44ODgsMjAzLjI5MyAxODcuNzY1IEMgMTk2LjI0NSAxODUuODk4LDE5My40ODQgMTgyLjU5OCwxOTMuNDM0IDE3NS45ODEgQyAxOTMuMzY1IDE2Ni45NDAsMjAwLjQzMyAxNjIuMjAyLDIxMS4zMjggMTYzLjk4NiBNMjUwLjUyOCAxNjQuMTk4IEMgMjU4LjUzMyAxNjYuMjgzLDI2My4yMDAgMTczLjMzMiwyNjIuNzIyIDE4Mi42MTggTCAyNjIuNjAwIDE4NS4wMDAgMjQ3LjcwMCAxODUuMTA1IEwgMjMyLjgwMCAxODUuMjEwIDIzMi44MDAgMTg3LjU4NSBDIDIzMi44MDAgMjAxLjY1MSwyNDYuNTkwIDIwNy44OTQsMjU4LjExOSAxOTkuMDQ5IEMgMjYwLjQwNCAxOTcuMjk2LDI2MC44MDAgMTk3LjQzMSwyNjAuODAwIDE5OS45NjIgQyAyNjAuODAwIDIwMi4zNjMsMjU5LjYyNiAyMDMuNDIxLDI1NC44MDAgMjA1LjM3MCBDIDIzNi42NzAgMjEyLjY5MiwyMjAuMTg3IDE5Ny42MTIsMjI1LjMyMiAxNzguNDAwIEMgMjI4LjI4MyAxNjcuMzE5LDIzOS4xMDQgMTYxLjIyMiwyNTAuNTI4IDE2NC4xOTggTTM0My44MDAgMTY0LjgzNCBDIDM0OS44MDAgMTY3LjA3OSwzNTAuNjAwIDE2OS42OTgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAyMDIuNjQ4LDM1MC40NTkgMjAyLjAwNCwzNTQuMDAwIDIwMi42NzggQyAzNTguNjM4IDIwMy41NjIsMzU0LjcxNSAyMDYuNDA1LDM0OC44NjIgMjA2LjQwMSBDIDM0Ni43OTcgMjA2LjQwMCwzNDUuMTI3IDIwNS4zNTQsMzQ0LjQwNCAyMDMuNjEwIEMgMzQzLjc2NiAyMDIuMDY4LDM0My42MjMgMjAyLjA4MywzNDAuODM1IDIwMy45NzYgQyAzMzAuNjA3IDIxMC45MjIsMzE4Ljc0MyAyMDYuODY4LDMxOC42NjAgMTk2LjQwMCBDIDMxOC41OTYgMTg4LjIzMiwzMjEuNTYzIDE4NS44MDMsMzM0LjgwMCAxODMuMTg2IEMgMzQ0LjQ1NCAxODEuMjc3LDM0NS4yMTMgMTgwLjM0OCwzNDIuOTY2IDE3My4xOTUgQyAzNDAuODYxIDE2Ni40OTYsMzMwLjk0NSAxNjUuNjU1LDMyNS4xOTEgMTcxLjY4OCBDIDMyMi42OTMgMTc0LjMwNywzMjIuMDAwIDE3NC4yNDAsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNjUuNTI2LDMzNS4xMjAgMTYxLjU4NywzNDMuODAwIDE2NC44MzQgTTI0MS45OTcgMTY3LjE3NCBDIDIzNy4xNTcgMTY4LjY0NiwyMzIuODAwIDE3NS4wMTgsMjMyLjgwMCAxODAuNjI2IEwgMjMyLjgwMCAxODEuNjEzIDI0My45MDAgMTgxLjUwNiBMIDI1NS4wMDAgMTgxLjQwMCAyNTUuMTI0IDE3OS40NTEgQyAyNTUuNjIxIDE3MS42MzQsMjQ4LjY3OSAxNjUuMTQxLDI0MS45OTcgMTY3LjE3NCBNMjg2LjM5NyAxNjcuOTUwIEMgMjc0LjAyNSAxNzIuMDA3LDI3My4yMzQgMTk3LjUwNCwyODUuMzE5IDIwMi43MTcgQyAyODguODE0IDIwNC4yMjUsMjk0LjM0NyAyMDIuNzA5LDI5Ny4zMTQgMTk5LjQzMSBDIDMwMy4xMTAgMTkzLjAyNiwzMDIuOTMzIDE3NS42NjMsMjk3LjAxOCAxNzAuNDcwIEMgMjk0LjI1MiAxNjguMDQxLDI4OS41MzQgMTY2LjkyMSwyODYuMzk3IDE2Ny45NTAgTTE3MS42MDAgMTg1LjYyNCBDIDE2MS4zODQgMTg3Ljg1MSwxNTguMTQyIDE5MC42MTUsMTU5LjAwMyAxOTYuMzYyIEMgMTU5Ljk5OSAyMDIuOTk5LDE2Ni4yMzUgMjA1LjAxMywxNzIuNzgyIDIwMC44MTEgQyAxNzYuMDU3IDE5OC43MTAsMTc2LjE5NCAxOTguMzI0LDE3Ni4xOTcgMTkxLjIwOCBDIDE3Ni4yMDAgMTg0LjA0NywxNzYuNjAxIDE4NC41MzQsMTcxLjYwMCAxODUuNjI0IE0zNDAuNjAwIDE4NS4yNjEgQyAzMzMuNjAyIDE4Ni45NTUsMzMyLjAyMSAxODcuNDAyLDMzMC43MjQgMTg4LjA1MiBDIDMyMi4xNTEgMTkyLjM0OSwzMjYuNjM0IDIwNS4wMjAsMzM1LjkyMSAyMDIuNzM5IEMgMzQyLjAxNiAyMDEuMjQzLDM0My42MzkgMTk4LjczMiwzNDMuNTA0IDE5MS4wMDUgQyAzNDMuMzg5IDE4NC4zNDksMzQzLjQ5NSAxODQuNTYxLDM0MC42MDAgMTg1LjI2MSBNMTYyLjk0NSAyMTkuOTE5IEMgMTY2LjI1OCAyMjIuODY2LDE2NC4zNDEgMjI4LjAwMCwxNTkuOTI3IDIyOC4wMDAgQyAxNTUuMDQ5IDIyOC4wMDAsMTUzLjM3NSAyMjEuNjM0LDE1Ny42NzkgMjE5LjQ1MCBDIDE1OS4yNDMgMjE4LjY1NywxNjEuNzc5IDIxOC44ODMsMTYyLjk0NSAyMTkuOTE5IE0xNDcuNDAwIDIyMi44MDAgTCAxNDcuNDAwIDIyNS40MDAgMTQ2LjAwMCAyMjUuMzAyIEMgMTQ1LjIzMCAyMjUuMjQ3LDE0MS4yNDkgMjI1LjA5MSwxMzcuMTUzIDIyNC45NTUgTCAxMjkuNzA3IDIyNC43MDYgMTI5LjQyNiAyMjYuMjAyIEMgMTI5LjI3MiAyMjcuMDI1LDEyOS4xNzEgMjM5LjMzMSwxMjkuMjAyIDI1My41NDkgQyAxMjkuMjMzIDI2Ny43NjcsMTI5LjI0NiAyNzkuNjMxLDEyOS4yMzAgMjc5LjkxNCBDIDEyOS4yMDcgMjgwLjMwNSwxMjguMjIzIDI4MC40MDEsMTI1LjExNCAyODAuMzE0IEwgMTIxLjAyOSAyODAuMjAwIDEyMS4xNTIgMjUyLjQ1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMTMuNTM4IDIyNC45NTIgQyAxMDkuMjgyIDIyNS4wODksMTA1LjE3MCAyMjUuMjQ2LDEwNC40MDAgMjI1LjMwMCBMIDEwMy4wMDAgMjI1LjQwMCAxMDIuODgyIDIyMi42OTcgTCAxMDIuNzYzIDIxOS45OTMgMTI1LjA4MiAyMjAuMDk3IEwgMTQ3LjQwMCAyMjAuMjAwIDE0Ny40MDAgMjIyLjgwMCBNMjAzLjc0MiAyMzkuMDEwIEMgMjA2LjAyOCAyNDAuMTc2LDIwOC4wNzcgMjQyLjE5OSwyMDkuMDUwIDI0NC4yNDkgQyAyMDkuODU0IDI0NS45NDQsMjA5Ljk0MCAyNDUuOTMzLDIxMS40MDAgMjQzLjk1OCBDIDIxOC4wNTAgMjM0Ljk2MywyMzIuMjc5IDIzNS44NzEsMjM2LjA1MiAyNDUuNTMwIEMgMjM2LjkxNiAyNDcuNzQ1LDIzNi45MzcgMjQ4LjE5MiwyMzYuOTEyIDI2NC4wMDAgTCAyMzYuODg2IDI4MC4yMDAgMjMzLjI1NyAyODAuMzE1IEwgMjI5LjYyOSAyODAuNDMwIDIyOS43MTQgMjY1LjUxNSBDIDIyOS44MDYgMjQ5LjQ5NSwyMjkuNzMzIDI0OC43ODIsMjI3LjcyNyAyNDYuMDk2IEMgMjI2LjE4MCAyNDQuMDI0LDIyMy44ODIgMjQzLjA0NSwyMjAuNjAwIDI0My4wNjAgQyAyMTIuNDA1IDI0My4wOTYsMjEwLjIwOSAyNDguOTQ2LDIxMC40MTIgMjcwLjIwMCBDIDIxMC40NjEgMjc1LjI2MCwyMTAuNDc4IDI3OS42MjUsMjEwLjQ1MCAyNzkuOTAwIEMgMjEwLjQxNCAyODAuMjU5LDIwOS4zODcgMjgwLjQwMCwyMDYuODAwIDI4MC40MDAgTCAyMDMuMjAwIDI4MC40MDAgMjAzLjE5NiAyNzguMTAwIEMgMjAzLjE5MyAyNzYuODM1LDIwMy40MDIgMjcxLjQxOSwyMDMuNjU5IDI2Ni4wNjQgQyAyMDQuNTMzIDI0Ny45MDQsMjAyLjc1OCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDE4Ni40MDAgMjQzLjIwMCwxODQuNjIwIDI0Ny4zNTcsMTg0LjcxMCAyNjcuMzAwIEwgMTg0Ljc2OSAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE3Ny40MDAgMjgwLjQwMCAxNzcuNDU1IDI1OS41MDQgTCAxNzcuNTExIDIzOC42MDggMTgwLjY1NSAyMzguNTk2IEMgMTg0LjMzMCAyMzguNTgyLDE4NC4zODYgMjM4LjYzMSwxODQuMzk0IDI0MS45MDAgQyAxODQuNDAxIDI0NC45MjQsMTg0LjMwNyAyNDQuOTEzLDE4Ny4yNzUgMjQyLjIyOCBDIDE5Mi4zNzggMjM3LjYwOSwxOTguNjEwIDIzNi4zOTIsMjAzLjc0MiAyMzkuMDEwIE0yNzEuNTY1IDIzOC4yMTcgQyAyNzkuNzA5IDI0MC4xMzYsMjg0Ljk1OCAyNDcuODU1LDI4NC4zMzYgMjU3LjAwMCBMIDI4NC4yMDAgMjU5LjAwMCAyNjkuNDIxIDI1OS4xMDUgQyAyNTIuODQ5IDI1OS4yMjMsMjUzLjkwMCAyNTguOTk1LDI1NC4yNDQgMjYyLjQwMCBDIDI1NS42ODQgMjc2LjY0NywyNjkuMjIwIDI4Mi4xMzQsMjgwLjA1MiAyNzIuODYyIEMgMjgyLjAwNyAyNzEuMTg5LDI4Mi40NjcgMjcxLjUxNywyODIuMTMyIDI3NC4zNDQgQyAyODEuNTMzIDI3OS40MDEsMjY4Ljg2NCAyODIuOTc3LDI2MC41MjcgMjgwLjQ0MiBDIDI1MS4yNjkgMjc3LjYyNiwyNDYuMjE5IDI3MC4yNzYsMjQ2LjIwOCAyNTkuNjAwIEMgMjQ2LjE5MyAyNDQuMjE0LDI1Ny4yOTUgMjM0Ljg1MywyNzEuNTY1IDIzOC4yMTcgTTE2My40MzQgMjU5LjUzMSBMIDE2My40NjcgMjgwLjQyOCAxNTkuODc2IDI4MC4zMTQgTCAxNTYuMjg1IDI4MC4yMDAgMTU2LjMyMiAyNTkuNjAwIEMgMTU2LjM0MyAyNDguMjcwLDE1Ni4zNjkgMjM4LjkwNywxNTYuMzgwIDIzOC43OTMgQyAxNTYuMzkxIDIzOC42NzgsMTU3Ljk3NSAyMzguNTk2LDE1OS45MDAgMjM4LjYwOSBMIDE2My40MDAgMjM4LjYzMyAxNjMuNDM0IDI1OS41MzEgTTI2Mi44NjYgMjQxLjU2MyBDIDI1OC4zOTEgMjQzLjEwOSwyNTQuNDI4IDI0OS4xNzEsMjU0LjQwNSAyNTQuNTA2IEwgMjU0LjQwMCAyNTUuNjEzIDI2NS41MDAgMjU1LjUwNiBMIDI3Ni42MDAgMjU1LjQwMCAyNzYuNDkwIDI1Mi42ODkgQyAyNzYuMTQ2IDI0NC4xNzYsMjY5Ljk1MCAyMzkuMTE3LDI2Mi44NjYgMjQxLjU2MyAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMTQyNCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", rp = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMTg1LjAwMCAxMjcuMDY1IEMgMTgwLjY3MSAxMjkuNzQzLDE3Mi4zNjcgMTMzLjMzNSwxNjYuMjAwIDEzNS4xOTYgQyAxNjAuNzIwIDEzNi44NTAsMTU5LjQ1MiAxMzcuNTUwLDE2MC45MTkgMTM4LjExNCBDIDE2MS43NzEgMTM4LjQ0MSwxNjcuNDgwIDEzNy43MDIsMTcwLjYwMCAxMzYuODYxIEMgMTcyLjE0MCAxMzYuNDQ2LDE3My42NzAgMTM2LjAzNywxNzQuMDAwIDEzNS45NTMgQyAxNzQuNTE1IDEzNS44MjIsMTc0LjYwMCAxMzYuNzEwLDE3NC42MDAgMTQyLjIwMCBMIDE3NC42MDAgMTQ4LjYwMCAxNjguNjAwIDE0OC44MDAgTCAxNjIuNjAwIDE0OS4wMDAgMTYyLjYwMCAxNTAuMDAwIEwgMTYyLjYwMCAxNTEuMDAwIDE2OC41MDAgMTUxLjExMSBDIDE3Mi44NTYgMTUxLjE5MiwxNzQuNDAwIDE1MS4zNTEsMTc0LjQwMCAxNTEuNzE2IEMgMTc0LjQwMCAxNTQuNzY4LDE2OC4yNjEgMTY4Ljc4NCwxNjMuNDQ0IDE3Ni43MjcgQyAxNjEuMzE3IDE4MC4yMzYsMTYxLjA1MiAxODAuODM0LDE2MS4xNTMgMTgxLjkwMCBDIDE2MS4zOTYgMTg0LjQ3MiwxNjguMTQzIDE3Ni42MTEsMTcyLjIzMyAxNjguOTg5IEMgMTczLjM1MiAxNjYuOTA1LDE3NC4zODcgMTY1LjMyMCwxNzQuNTMzIDE2NS40NjcgQyAxNzQuNjgwIDE2NS42MTMsMTc0LjgwMCAxNzMuNTg5LDE3NC44MDAgMTgzLjE5MCBDIDE3NC44MDAgMjAzLjQyNCwxNzQuOTg3IDIwNC4yNjcsMTc4LjcwOCAyMDAuODAwIEwgMTc5LjYwMCAxOTkuOTY5IDE3OS42MDAgMTgyLjU4NCBDIDE3OS42MDAgMTY4LjY0NCwxNzkuNzAyIDE2NS4yMDAsMTgwLjExNyAxNjUuMjAwIEMgMTgwLjc5MiAxNjUuMjAwLDE4My41NDYgMTY4LjA5MywxODUuMTYzIDE3MC41MDAgQyAxODcuMTIyIDE3My40MTcsMTg5LjcxNiAxNzMuMTQwLDE4OS42NzIgMTcwLjAxNyBDIDE4OS42MzEgMTY3LjA0NCwxODYuNzY1IDE2NC42NDAsMTgxLjA4OSAxNjIuODE2IEwgMTc5LjU3OCAxNjIuMzMxIDE3OS42ODkgMTU2Ljg2NSBMIDE3OS44MDAgMTUxLjQwMCAxODcuMDYxIDE1MS4yOTEgQyAxOTYuMjk5IDE1MS4xNTMsMTk2Ljc1OCAxNTAuNzA0LDE5MS42MDEgMTQ2Ljg1NyBDIDE4OC4yMjIgMTQ0LjMzNiwxODguMjI3IDE0NC4zMzYsMTg1LjgwMCAxNDYuODAwIEMgMTgzLjkyOSAxNDguNjk5LDE4My43MjQgMTQ4LjgwMCwxODEuNzE1IDE0OC44MDAgTCAxNzkuNjAwIDE0OC44MDAgMTc5LjYwMCAxNDEuNDYxIEwgMTc5LjYwMCAxMzQuMTIyIDE4MS41MDAgMTMzLjQ5MiBDIDE4Mi41NDUgMTMzLjE0NiwxODQuNjYwIDEzMi4zOTYsMTg2LjIwMCAxMzEuODI2IEMgMTg3Ljc4NSAxMzEuMjM5LDE4OS40MzQgMTMwLjg3OCwxOTAuMDAwIDEzMC45OTQgQyAxOTIuNjQ4IDEzMS41MzYsMTkyLjM5MCAxMjkuODcxLDE4OS40NTQgMTI3LjQ2NSBDIDE4Ny4zNzkgMTI1Ljc2NSwxODcuMTM3IDEyNS43NDMsMTg1LjAwMCAxMjcuMDY1IE0yMjAuMDAwIDEyOC40NTIgQyAyMTYuMzM5IDEyOS45ODAsMjA5LjA4NiAxMzIuNTU4LDIwNi42MDAgMTMzLjIxNCBDIDIwNS45NDAgMTMzLjM4OCwyMDQuNDEwIDEzMy44MDMsMjAzLjIwMCAxMzQuMTM1IEMgMTk4Ljg4MSAxMzUuMzIzLDE5NC45NjEgMTM2LjMxMSwxOTIuNDc2IDEzNi44MzkgQyAxODkuODkwIDEzNy4zODksMTg4LjkxNiAxMzguMDE4LDE4OS40MTEgMTM4LjgxOCBDIDE4OS43MTkgMTM5LjMxNiwxOTIuNzU3IDEzOS4xMTcsMTk5LjAwMCAxMzguMTkwIEMgMjAwLjk4MCAxMzcuODk2LDIwMy40MTAgMTM3LjUzOCwyMDQuNDAwIDEzNy4zOTQgQyAyMDkuMTU5IDEzNi43MDIsMjE2LjgwOCAxMzUuMDM2LDIyMS43OTkgMTMzLjYwMyBDIDIyMy4zMzggMTMzLjE2MiwyMjUuNjIxIDEzMi44MDAsMjI2Ljg3MyAxMzIuODAwIEMgMjMyLjAxMCAxMzIuODAwLDIzMi4yMzQgMTMxLjg2NywyMjcuODA3IDEyOC45MDAgQyAyMjQuMTIwIDEyNi40MjksMjI0Ljc1OSAxMjYuNDY2LDIyMC4wMDAgMTI4LjQ1MiBNOTQuODAwIDE0OS43NTEgQyA5NC44MDAgMTcwLjMzMyw5NC43OTIgMTcwLjI1NSw5Ni44NzQgMTY5LjE3NiBDIDk4LjU4NSAxNjguMjkxLDk5LjIwMCAxNjcuNDk2LDk5LjIwMCAxNjYuMTcxIEMgOTkuMjAwIDE2My41MTIsOTguOTI0IDE2My42MDAsMTA3LjI0MyAxNjMuNjAwIEwgMTE0LjgwMCAxNjMuNjAwIDExNC44MDAgMTY5LjgwMCBMIDExNC44MDAgMTc2LjAwMCA5Ny44MjQgMTc2LjAwMCBDIDgwLjM5NiAxNzYuMDAwLDgwLjEwMSAxNzYuMDI3LDgwLjYwMCAxNzcuNTk5IEMgODAuODQ0IDE3OC4zNzAsODEuMzA2IDE3OC4zOTQsOTcuNzI2IDE3OC40OTYgTCAxMTQuNjAwIDE3OC42MDAgMTE0LjgxNyAxODkuMjAwIEMgMTE0LjkzNiAxOTUuMDMwLDExNS4wNzEgMTk5Ljg0NSwxMTUuMTE3IDE5OS45MDAgQyAxMTUuNDQ4IDIwMC4yOTcsMTE3LjQ4MSAxOTkuODU0LDExOC40MzEgMTk5LjE3OCBMIDExOS41ODYgMTk4LjM1NSAxMTkuNjkzIDE4OC40NzggTCAxMTkuODAwIDE3OC42MDAgMTM3LjgwMCAxNzguNDAwIEwgMTU1LjgwMCAxNzguMjAwIDE1NS45MDggMTc3LjIwMCBDIDE1Ni4wMDQgMTc2LjMxMSwxNTEuMTEzIDE3Mi4wNDMsMTQ5LjA5MyAxNzEuMjUzIEMgMTQ4Ljg4NiAxNzEuMTcyLDE0Ny42MDMgMTcyLjIxMCwxNDYuMjQxIDE3My41NTkgTCAxNDMuNzY2IDE3Ni4wMTIgMTMxLjc4MyAxNzUuOTA2IEwgMTE5LjgwMCAxNzUuODAwIDExOS42OTAgMTY5LjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMjcuODkwIDE2My42OTIgTCAxMzYuMjAwIDE2My44MDAgMTM2LjMzMCAxNjUuMzk1IEMgMTM2LjU1NiAxNjguMTY4LDEzNy45NjUgMTY4LjQ5MSwxNDAuMzAwIDE2Ni4zMDQgTCAxNDEuMjAwIDE2NS40NjEgMTQxLjIwMCAxNTAuOTMwIEMgMTQxLjIwMCAxMzguNTQ2LDE0MS4yODUgMTM2LjQwMCwxNDEuNzc2IDEzNi40MDAgQyAxNDMuNjQwIDEzNi40MDAsMTQyLjg2NCAxMzQuNDQ2LDE0MC4yMDIgMTMyLjQzNiBDIDEzNy42MTEgMTMwLjQ4MCwxMzcuNDkyIDEzMC40NjcsMTM2LjQwMCAxMzIuMDAwIEwgMTM1LjU0NiAxMzMuMjAwIDExNy42NTEgMTMzLjIwMCBMIDk5Ljc1NyAxMzMuMjAwIDk3Ljg2NCAxMzIuMDAwIEMgOTQuNTU1IDEyOS45MDEsOTQuODAwIDEyOC40NzksOTQuODAwIDE0OS43NTEgTTI1NS44MDQgMTM0LjA2NSBDIDI1NS4yMTggMTM2LjQ1OSwyNTUuNzg4IDE5OC44MjIsMjU2LjQwMCAxOTkuMjA2IEMgMjU4LjU2NSAyMDAuNTYzLDI2MC40MDAgMTk4LjE1OCwyNjAuNDAwIDE5My45NjMgQyAyNjAuNDAwIDE5Mi4wMzksMjYwLjUwOSAxOTAuMTgxLDI2MC42NDMgMTg5LjgzMyBDIDI2MC44NjAgMTg5LjI2NiwyNjMuMjc4IDE4OS4yMDAsMjgzLjg0MyAxODkuMjAwIEwgMzA2LjgwMCAxODkuMjAwIDMwNi44MDAgMTkyLjE3MSBDIDMwNi44MDAgMTk2LjMzOCwzMDguMTc0IDE5Ny4zNjEsMzEwLjcwMCAxOTUuMDc1IEwgMzExLjYwMCAxOTQuMjYxIDMxMS42MDAgMTY3LjY3NiBMIDMxMS42MDAgMTQxLjA5MiAzMTIuNTk2IDE0MC4xNjkgQyAzMTMuODc1IDEzOC45ODQsMzEzLjYzMyAxMzguNDIzLDMxMC45ODMgMTM2LjQyMiBDIDMwOC40MTQgMTM0LjQ4MiwzMDcuOTE2IDEzNC40MzIsMzA2LjgwMCAxMzYuMDAwIEwgMzA1Ljk0NiAxMzcuMjAwIDI4My41MjggMTM3LjIwMCBMIDI2MS4xMTEgMTM3LjIwMCAyNTkuMjU2IDEzNS42ODkgQyAyNTUuODU5IDEzMi45MjQsMjU2LjA2MCAxMzMuMDE5LDI1NS44MDQgMTM0LjA2NSBNMTM2LjIwMCAxNDEuMjAwIEwgMTM2LjIwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDk5LjQwMCAxNDYuNjAwIDk5LjI4NyAxNDEuNjU2IEMgOTkuMTMzIDEzNC44ODEsOTYuOTM5IDEzNS41NzQsMTE4LjE1MiAxMzUuNjk2IEwgMTM2LjIwMCAxMzUuODAwIDEzNi4yMDAgMTQxLjIwMCBNMjI3LjQ3NCAxNDAuNTAwIEMgMjI1LjQyOCAxNDYuMjg1LDIyNC4yNjIgMTQ5LjA5OSwyMjIuMjU2IDE1My4wOTMgQyAyMTkuMjczIDE1OS4wMzUsMjE5LjQ2NyAxNjEuMjk3LDIyMi42NjggMTU3LjkwMCBDIDIyNC41MjEgMTU1LjkzNCwyMzEuMjAwIDE0NS42NTEsMjMxLjIwMCAxNDQuNzY1IEMgMjMxLjIwMCAxNDQuNTcxLDIzMi4wMDUgMTQ0LjIwOSwyMzIuOTg4IDE0My45NjEgQyAyMzYuNDk3IDE0My4wNzgsMjM2LjM1NCAxNDIuMTkxLDIzMi4zODAgMTQwLjE5MCBDIDIyOC43MzMgMTM4LjM1MywyMjguMjIyIDEzOC4zODUsMjI3LjQ3NCAxNDAuNTAwIE0yODAuOTU3IDE0MC4yMzMgQyAyODEuMDkxIDE0MC41ODEsMjgxLjIwMCAxNDUuMzQ3LDI4MS4yMDAgMTUwLjgyNSBMIDI4MS4yMDAgMTYwLjc4NSAyODAuMzAwIDE2MS4wMDUgQyAyNzkuODA1IDE2MS4xMjYsMjc1LjE3MCAxNjEuMTc1LDI3MC4wMDAgMTYxLjExMyBMIDI2MC42MDAgMTYxLjAwMCAyNjAuNDg3IDE1MS4yMDAgQyAyNjAuNDI1IDE0NS44MTAsMjYwLjQ3NCAxNDAuOTk1LDI2MC41OTUgMTQwLjUwMCBMIDI2MC44MTUgMTM5LjYwMCAyNzAuNzY1IDEzOS42MDAgQyAyNzkuNDY5IDEzOS42MDAsMjgwLjc0NSAxMzkuNjc5LDI4MC45NTcgMTQwLjIzMyBNMzA2LjcwNyAxNTAuMzAwIEwgMzA2LjYwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDI4Ni4yMDAgMTYxLjAwMCAyODYuMDkzIDE1MC4zMDAgTCAyODUuOTg3IDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMzA2LjgxMyAxMzkuNjAwIDMwNi43MDcgMTUwLjMwMCBNMjA2Ljk4NiAxNDEuMjIzIEMgMjA2Ljg0MiAxNDEuNDU2LDIwNy41NDkgMTQyLjg3NSwyMDguNTU3IDE0NC4zNzcgQyAyMTAuNDMwIDE0Ny4xNjksMjExLjY0NSAxNDkuNjY2LDIxMi4xNjggMTUxLjgwMCBDIDIxMy4wNTAgMTU1LjM5OCwyMTYuODAwIDE1NS4xNjksMjE2LjgwMCAxNTEuNTE3IEMgMjE2LjgwMCAxNDcuMzgxLDIwOC41MzcgMTM4LjcxMywyMDYuOTg2IDE0MS4yMjMgTTE5NS4zMDAgMTQzLjQ4MyBDIDE5NC40NzggMTQzLjc4NSwxOTQuNzIyIDE0NC41ODksMTk2LjE5NiAxNDYuNDQ0IEMgMTk2Ljk2NCAxNDcuNDEwLDE5Ny41OTQgMTQ4LjMzNywxOTcuNTk2IDE0OC41MDQgQyAxOTcuNTk4IDE0OC42NzIsMTk3LjkzOSAxNDkuNTcyLDE5OC4zNTMgMTUwLjUwNCBDIDE5OC43NjcgMTUxLjQzNywxOTkuMzM3IDE1Mi44MzAsMTk5LjYyMCAxNTMuNjAwIEMgMjAxLjAxNyAxNTcuNDAyLDIwNC4wMDAgMTU2Ljk3MCwyMDQuMDAwIDE1Mi45NjYgQyAyMDQuMDAwIDE0OS4xMTcsMTk3Ljk0MSAxNDIuNTEyLDE5NS4zMDAgMTQzLjQ4MyBNMTM2LjIwOCAxNTAuMTAwIEMgMTM2LjMzMSAxNTAuNTk1LDEzNi4zNzkgMTUzLjI1MCwxMzYuMzE2IDE1Ni4wMDAgTCAxMzYuMjAwIDE2MS4wMDAgMTE4LjYwMCAxNjEuMTExIEMgMTA4LjkyMCAxNjEuMTcyLDEwMC41OTUgMTYxLjEyNCwxMDAuMTAwIDE2MS4wMDMgQyA5OS4wNDQgMTYwLjc0Nyw5OC42NzEgMTUwLjY4OSw5OS42ODAgMTQ5LjY4MCBDIDEwMC4wMzkgMTQ5LjMyMSwxMDQuNjc0IDE0OS4yMDAsMTE4LjA3MiAxNDkuMjAwIEwgMTM1Ljk4NSAxNDkuMjAwIDEzNi4yMDggMTUwLjEwMCBNMjA2LjU4MiAxNTkuNzA0IEMgMjA2LjQ3NyAxNTkuOTc3LDIwNi40MzkgMTY5LjIwMCwyMDYuNDk2IDE4MC4yMDAgTCAyMDYuNjAwIDIwMC4yMDAgMjA3Ljk1NCAyMDAuMTM1IEMgMjA5LjgzMCAyMDAuMDQ1LDIxMC45MTQgMTk4LjgyNiwyMTEuMTgxIDE5Ni41MDggTCAyMTEuNDAwIDE5NC42MDAgMjIwLjAwMCAxOTQuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyOC43MTIgMTk1LjYwMCBDIDIyOS4wNTggMTk4LjY5MiwyMzAuMDk2IDE5OS4yNDEsMjMyLjQzOCAxOTcuNTczIEwgMjMzLjYwMCAxOTYuNzQ2IDIzMy42MDAgMTgxLjE2NCBMIDIzMy42MDAgMTY1LjU4MyAyMzQuNjE1IDE2NS4xMjAgQyAyMzUuMjMyIDE2NC44MzksMjM1LjU0NiAxNjQuNDM3LDIzNS40MTUgMTY0LjA5NiBDIDIzNS4yOTcgMTYzLjc4NywyMzUuMjAwIDE2My40MDUsMjM1LjIwMCAxNjMuMjQ2IEMgMjM1LjIwMCAxNjIuODk3LDIzMC41ODMgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMjkuOTA1IDE1OS42MDAsMjI5LjM1MSAxNjAuMTQwLDIyOC44NjMgMTYwLjgwMCBMIDIyNy45NzYgMTYyLjAwMCAyMTkuNjg4IDE2MS45OTkgTCAyMTEuNDAwIDE2MS45OTggMjA5LjA4NiAxNjAuNjAzIEMgMjA3LjQ4NiAxNTkuNjM4LDIwNi43MTMgMTU5LjM2MCwyMDYuNTgyIDE1OS43MDQgTTE5Mi44MDAgMTgwLjE0OCBMIDE5Mi44MDAgMjAwLjAwMCAxOTMuOTY5IDIwMC4wMDAgQyAxOTQuNjQ0IDIwMC4wMDAsMTk1LjY2MCAxOTkuNTYyLDE5Ni4zNjkgMTk4Ljk2NCBMIDE5Ny42MDAgMTk3LjkyOSAxOTcuNjAwIDE4MC45NTYgTCAxOTcuNjAwIDE2My45ODMgMTk4LjU1MiAxNjMuNTQ5IEMgMjAwLjY4MyAxNjIuNTc4LDE5OC45MTcgMTYwLjk4OSwxOTUuMjQ1IDE2MC41NzMgTCAxOTIuODAwIDE2MC4yOTcgMTkyLjgwMCAxODAuMTQ4IE0yODAuOTU3IDE2NC4yMzMgQyAyODEuNTc0IDE2NS44MzksMjgxLjIxNiAxODYuMzA4LDI4MC41NjcgMTg2LjU1NyBDIDI3OC45NjkgMTg3LjE3MCwyNjAuODkyIDE4Ni44MTcsMjYwLjY0MyAxODYuMTY3IEMgMjYwLjUwOSAxODUuODE5LDI2MC40MDAgMTgwLjg4NCwyNjAuNDAwIDE3NS4yMDAgQyAyNjAuNDAwIDE2OS41MTYsMjYwLjUwOSAxNjQuNTgxLDI2MC42NDMgMTY0LjIzMyBDIDI2MS4wMTAgMTYzLjI3NSwyODAuNTkwIDE2My4yNzUsMjgwLjk1NyAxNjQuMjMzIE0zMDYuNzA2IDE3NS4xMDAgTCAzMDYuNjAwIDE4Ni42MDAgMjk2LjQwMCAxODYuNjAwIEwgMjg2LjIwMCAxODYuNjAwIDI4Ni4wOTQgMTc1LjEwMCBMIDI4NS45ODggMTYzLjYwMCAyOTYuNDAwIDE2My42MDAgTCAzMDYuODEyIDE2My42MDAgMzA2LjcwNiAxNzUuMTAwIE0yMjguNzEwIDE3MC43MDAgTCAyMjguODIxIDE3Ni44MDAgMjIwLjAxMCAxNzYuODAwIEwgMjExLjIwMCAxNzYuODAwIDIxMS4yMDAgMTcwLjg2NyBDIDIxMS4yMDAgMTY3LjYwMywyMTEuMzIzIDE2NC44MTAsMjExLjQ3NCAxNjQuNjU5IEMgMjExLjYyNSAxNjQuNTA4LDIxNS41NDAgMTY0LjQzMywyMjAuMTc0IDE2NC40OTIgTCAyMjguNjAwIDE2NC42MDAgMjI4LjcxMCAxNzAuNzAwIE0yMjguNzEwIDE4NS43MDAgTCAyMjguODIwIDE5Mi4wMDAgMjIwLjAxMCAxOTIuMDAwIEwgMjExLjIwMCAxOTIuMDAwIDIxMS4yMDAgMTg1Ljg2NyBDIDIxMS4yMDAgMTgyLjQ5MywyMTEuMzIzIDE3OS42MTAsMjExLjQ3NCAxNzkuNDU5IEMgMjExLjYyNSAxNzkuMzA4LDIxNS41NDAgMTc5LjIzMywyMjAuMTc0IDE3OS4yOTIgTCAyMjguNjAwIDE3OS40MDAgMjI4LjcxMCAxODUuNzAwIE0yMTEuMzIwIDIxMS40NjMgQyAyMTEuMTY3IDIxMS44NjQsMjExLjM2NSAyMTIuMzI4LDIxMS44MzUgMjEyLjY2NSBDIDIxNS4zNjQgMjE1LjIwMiwyMTQuODYyIDIxNi4yNDAsMjA1LjQyMCAyMjUuOTQyIEMgMTk2LjE5NSAyMzUuNDIwLDE4NC40MzEgMjQ0LjIxNiwxNjkuMjcxIDI1Mi45NzIgQyAxNjMuMjgwIDI1Ni40MzIsMTYyLjA2OSAyNTcuNTkxLDE2My43NjQgMjU4LjI0MiBDIDE2NS45ODEgMjU5LjA5MiwxODUuOTQxIDI0Ny45OTksMTk2LjY2NCAyMzkuOTU3IEMgMTk3LjU4MCAyMzkuMjcwLDE5OC41MjUgMjM4LjgzMCwxOTguNzY0IDIzOC45NzggQyAxOTkuNTI5IDIzOS40NTEsMTk5LjM0NiAyNjQuMTMwLDE5OC41NDAgMjY5LjIxNyBDIDE5Ny42MzggMjc0LjkwOSwxOTguOTUzIDI3OC40MDAsMjAxLjk5OSAyNzguNDAwIEMgMjAzLjYyOSAyNzguNDAwLDIwMy41OTkgMjc4Ljc3MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNjA5IDI0Ny44OTAsMjAzLjc0NCAyMzkuMjIwLDIwMy45MDYgMjM4Ljk5OSBDIDIwNC4wNjggMjM4Ljc3OSwyMDQuNjk1IDIzOC4zNDQsMjA1LjMwMCAyMzguMDMyIEMgMjA2LjgwMiAyMzcuMjU4LDIwNi42OTAgMjM2LjIyOSwyMDUuMDE3IDIzNS40MzUgQyAyMDMuMzQ1IDIzNC42NDIsMjAzLjQ2NiAyMzQuMjI1LDIwNS45MDEgMjMyLjQwMCBDIDIwNi45MjggMjMxLjYzMCwyMTAuMTA3IDIyOC42OTIsMjEyLjk2NSAyMjUuODcxIEMgMjE4LjYyOCAyMjAuMjgyLDIxOC45OTkgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMjUuOTk1IDIyMC4wMDAsMjE5LjQxMyAyMTEuODQwLDIxMy40ODUgMjExLjA2MiBDIDIxMS45MzEgMjEwLjg1OSwyMTEuNTIzIDIxMC45MzQsMjExLjMyMCAyMTEuNDYzIE0xMDYuMjgzIDIxMS43MjggQyAxMDYuMDUwIDIxMi4zMzYsMTA2LjYwMyAyMTIuODEzLDEwOC44NzAgMjEzLjk2MSBDIDExMC40NDcgMjE0Ljc2MCwxMTAuNjQ3IDIxNi4wMjcsMTA5LjYwMyAyMTguNjAwIEMgMTA5LjQyNCAyMTkuMDQwLDEwOC44NjUgMjIwLjQ4MCwxMDguMzYwIDIyMS44MDAgQyAxMDYuODAxIDIyNS44NzQsMTAwLjgwNCAyMzYuMjU2LDk5LjIzNCAyMzcuNjAwIEMgOTkuMTA1IDIzNy43MTAsOTguMDI0IDIzOC45NzAsOTYuODMyIDI0MC40MDAgQyA5NS42MzkgMjQxLjgzMCw5Mi43NzggMjQ0LjgyNyw5MC40NzMgMjQ3LjA1OSBDIDg2LjUwNSAyNTAuOTA0LDg1LjYwMiAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODguMjQ5IDI1Mi40MDAsOTUuMjg4IDI0Ni43NDYsOTkuODcyIDI0Mi4yNjMgTCAxMDMuNTQ0IDIzOC42NzEgMTA2LjE0NyAyMzkuMzE0IEMgMTExLjIwNiAyNDAuNTYyLDExNy41NjkgMjQzLjczMywxMjAuMzA1IDI0Ni4zNjkgTCAxMjEuMjEwIDI0Ny4yNDEgMTE5Ljk0MSAyNDkuMTIwIEMgMTE0LjgyOCAyNTYuNjg5LDEwNS40MjkgMjY1LjQxNiw5NS40MDAgMjcxLjkwNSBDIDg5Ljc4NSAyNzUuNTM4LDg5LjIwMCAyNzUuOTgwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI4MC45MTAsMTEyLjQ0NCAyNjUuMjkzLDEyMC44OTcgMjU1LjMwMSBDIDEyMi4zMzkgMjUzLjU5NSwxMjMuOTg5IDI1MS43NjIsMTI0LjU2MyAyNTEuMjI4IEwgMTI1LjYwNSAyNTAuMjU1IDEyNi43MDMgMjUxLjMwMiBDIDEzMS4wODcgMjU1LjQ4NSwxMzQuNTYwIDI1MS4yNTQsMTMwLjM5OSAyNDYuNzk5IEMgMTI4Ljg4OCAyNDUuMTgxLDEyOC44ODQgMjQ1LjIyMSwxMzAuODAwIDI0Mi40MDAgQyAxMzEuNjgwIDI0MS4xMDQsMTMyLjQwMCAyMzkuOTMxLDEzMi40MDAgMjM5Ljc5NCBDIDEzMi40MDAgMjM5LjY1NywxMzIuOTQwIDIzOC43NTksMTMzLjYwMCAyMzcuODAwIEMgMTM0LjI2MCAyMzYuODQwLDEzNS44OTggMjMzLjg4MCwxMzcuMjM4IDIzMS4yMjEgQyAxMzkuMzAwIDIyNy4xMzMsMTM5Ljk1MSAyMjYuMTk3LDE0MS40NTUgMjI1LjE2MiBDIDE0NC4wMTEgMjIzLjQwNCwxNDMuMTQxIDIyMS42MDgsMTM4LjUzNyAyMTkuMTM0IEwgMTM2Ljg3NCAyMTguMjQwIDEzNS4yNjggMjE5LjY5MSBDIDEzMy41MjYgMjIxLjI2NSwxMzMuMTAyIDIyMS4zNjYsMTI2LjQwMCAyMjEuODE5IEMgMTE0Ljg1OSAyMjIuNTk5LDExNC4zMDIgMjIyLjYxMSwxMTQuMDk4IDIyMi4wNzggQyAxMTMuNzc2IDIyMS4yMzksMTE1LjY0MyAyMTguMDIzLDExNi43NjQgMjE3LjQ4NiBDIDExOC44NjMgMjE2LjQ4MCwxMTcuNzcxIDIxNC41MzIsMTE0LjAwNCAyMTIuNTYzIEMgMTExLjM1MiAyMTEuMTc4LDEwNi42ODggMjEwLjY3MywxMDYuMjgzIDIxMS43MjggTTI3NS43MjAgMjE0LjY2NSBDIDI3NS41NDQgMjE1LjEyMiwyNzUuNzcwIDIxNS41NDcsMjc2LjQxMyAyMTUuOTcxIEMgMjgxLjM3OSAyMTkuMjQ2LDI4MS4zODEgMjIwLjAwMCwyNzYuNDU5IDIzMy44MDAgQyAyNzIuMzU5IDI0NS4yOTMsMjY4LjUwNCAyNTQuNjI1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2My45OTIgMjYyLjYyNiwyNTQuMzkwIDI2Mi43OTcsMjUyLjMwOSAyNTkuMTcwIEMgMjUwLjU0OCAyNTYuMTAyLDI0OS43MTUgMjU5LjkxMiwyNTEuMzcwIDI2My40NjYgQyAyNTMuNTY5IDI2OC4xOTAsMjU3LjMwNCAyNzAuNjk0LDI1OS4wODkgMjY4LjY0MiBDIDI1OS43MTMgMjY3LjkyNCwyNjAuODYwIDI2Ny40NzcsMjYzLjY2MSAyNjYuODYyIEMgMjgyLjA2MiAyNjIuODIyLDI4OC42NzYgMjYxLjI4NiwyOTYuNTc0IDI1OS4yMjMgQyAzMDAuNzM5IDI1OC4xMzUsMzA0LjI5NyAyNTcuMzM2LDMwNC40ODAgMjU3LjQ0OSBDIDMwNS4zMTcgMjU3Ljk2NywzMDYuODk3IDI2MS42MzAsMzA4LjA0OSAyNjUuNzI3IEMgMzA5LjQ5NyAyNzAuODc2LDMxMy42MDAgMjcwLjQzMiwzMTMuNjAwIDI2NS4xMjUgQyAzMTMuNjAwIDI1OC4yNjcsMzA1LjU1NyAyNDguMTU4LDI5My4wMzUgMjM5LjI3NyBDIDI4OC4yNzkgMjM1LjkwNCwyODcuODEzIDIzNy42NzksMjkyLjMyMCAyNDIuMDAwIEMgMjk3LjIyOCAyNDYuNzA2LDMwMi40MDAgMjUyLjk3OSwzMDIuNDAwIDI1NC4yMjcgQyAzMDIuNDAwIDI1NS4xNzUsMjY5Ljc0MyAyNjEuMDc3LDI2OC45NDEgMjYwLjI3NCBDIDI2OC44MTIgMjYwLjE0NSwyNjkuNjA0IDI1OC41NDYsMjcwLjcwMCAyNTYuNzIwIEMgMjczLjk2MyAyNTEuMjg3LDI3OS40NjIgMjQwLjEzMiwyODEuOTk5IDIzMy44MDAgQyAyODQuNjQ0IDIyNy4xOTYsMjg1Ljg5NiAyMjQuODc0LDI4Ny4xNjQgMjI0LjIxOSBDIDI4OS4yMDQgMjIzLjE2NCwyODguNTcwIDIyMS4zMzIsMjg1LjA1MyAyMTguMTE4IEMgMjgxLjYzMSAyMTQuOTkxLDI3Ni4zNDUgMjEzLjAzNSwyNzUuNzIwIDIxNC42NjUgTTEzMy44NDggMjI0LjU4MCBDIDEzNC4yNjggMjI1LjY3NywxMjcuODk3IDIzNy44ODMsMTI1LjEwOSAyNDEuMzIxIEwgMTI0LjIwMCAyNDIuNDQyIDEyMS42MDAgMjQxLjI2MyBDIDExNy45NzEgMjM5LjYxOCwxMTMuNTk1IDIzOC4yMTIsMTA5LjYwMCAyMzcuNDA3IEMgMTA3LjczMCAyMzcuMDMwLDEwNS45NjggMjM2LjY1MiwxMDUuNjg0IDIzNi41NjcgQyAxMDUuMzQwIDIzNi40NjQsMTA1Ljg2MCAyMzUuMzg3LDEwNy4yMzEgMjMzLjM1NCBDIDEwOC4zNjYgMjMxLjY3MywxMDkuOTcyIDIyOS4xMjksMTEwLjc5OSAyMjcuNzAyIEwgMTEyLjMwNCAyMjUuMTA4IDExOC4yNTIgMjI0LjkzMyBDIDEyMS41MjMgMjI0LjgzNywxMjUuNDYwIDIyNC42MTEsMTI3LjAwMCAyMjQuNDMyIEMgMTMxLjY1NiAyMjMuODg5LDEzMy41OTkgMjIzLjkzMSwxMzMuODQ4IDIyNC41ODAgIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmOGY0ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGlkPSJwYXRoMSIgZD0iTTE3Ny44NzYgMjEuMDQ1IEMgMTY2LjM5NCAzMi42MjAsMTUxLjcxMSA0Ny4zMzUsMTQ1LjI0NiA1My43NDUgQyAxMzAuMDQ0IDY4LjgxOSw2OC44MTkgMTMwLjA0NCw1My43NDUgMTQ1LjI0NiBDIDQ3LjMzNSAxNTEuNzExLDMyLjYyMCAxNjYuMzk0LDIxLjA0NSAxNzcuODc2IEMgMi4zOTEgMTk2LjM4MSwwLjAwMCAxOTguODkxLDAuMDAwIDE5OS45NzUgQyAwLjAwMCAyMDEuMDYxLDIuNzc4IDIwMy45NjYsMjQuNjQ1IDIyNS43NTUgQyAzOC4xOTkgMjM5LjI2MCw0OS42MjUgMjUwLjY0Niw1MC4wMzUgMjUxLjA1NSBDIDUwLjQ0NiAyNTEuNDY1LDcyLjgzMiAyNzMuODUwLDk5Ljc4MiAzMDAuODAwIEMgMTI2LjczMyAzMjcuNzUwLDE0OS4zMjUgMzUwLjM0MCwxNDkuOTg4IDM1MS4wMDAgQyAxNTAuNjUwIDM1MS42NjAsMTYxLjkwMyAzNjIuOTU1LDE3NC45OTQgMzc2LjEwMCBDIDE5NS45MjAgMzk3LjExMywxOTguOTQwIDQwMC4wMDAsMTk5Ljk5NyA0MDAuMDAwIEMgMjAxLjA1MyA0MDAuMDAwLDIwNC4xNjIgMzk3LjAyNywyMjUuNzU5IDM3NS4zNjAgQyAyMzkuMjY3IDM2MS44MDgsMjUwLjUwMCAzNTAuNTQwLDI1MC43MjAgMzUwLjMyMCBDIDI1MS4yNDMgMzQ5Ljc5NywzNDkuNjU5IDI1MS4zODEsMzUwLjI2MCAyNTAuNzgwIEMgMzUwLjUxMyAyNTAuNTI3LDM2MS44MDggMjM5LjI2NywzNzUuMzYwIDIyNS43NTkgQyAzOTYuMDU3IDIwNS4xMjgsMzk5Ljk5OSAyMDEuMDIzLDM5OS45OTYgMjAwLjA5OSBDIDM5OS45OTIgMTk5LjE3MiwzODcuMjk3IDE4Ni4zMTIsMzE5LjA5NiAxMTguMTQ0IEMgMjc0LjYwMyA3My42NzMsMjI5Ljg3OCAyOC44OTgsMjE5LjcwNiAxOC42NDQgQyAyMDMuMzAwIDIuMTA2LDIwMS4wNzIgMC4wMDAsMTk5Ljk4MiAwLjAwMCBDIDE5OC44ODkgMC4wMDAsMTk2LjQyOCAyLjM0MywxNzcuODc2IDIxLjA0NSBNMTg5LjQ1NCAxMjcuNDY1IEMgMTkyLjM5MCAxMjkuODcxLDE5Mi42NDggMTMxLjUzNiwxOTAuMDAwIDEzMC45OTQgQyAxODkuNDM0IDEzMC44NzgsMTg3Ljc4NSAxMzEuMjM5LDE4Ni4yMDAgMTMxLjgyNiBDIDE4NC42NjAgMTMyLjM5NiwxODIuNTQ1IDEzMy4xNDYsMTgxLjUwMCAxMzMuNDkyIEwgMTc5LjYwMCAxMzQuMTIyIDE3OS42MDAgMTQxLjQ2MSBMIDE3OS42MDAgMTQ4LjgwMCAxODEuNzE1IDE0OC44MDAgQyAxODMuNzI0IDE0OC44MDAsMTgzLjkyOSAxNDguNjk5LDE4NS44MDAgMTQ2LjgwMCBDIDE4OC4yMjcgMTQ0LjMzNiwxODguMjIyIDE0NC4zMzYsMTkxLjYwMSAxNDYuODU3IEMgMTk2Ljc1OCAxNTAuNzA0LDE5Ni4yOTkgMTUxLjE1MywxODcuMDYxIDE1MS4yOTEgTCAxNzkuODAwIDE1MS40MDAgMTc5LjY4OSAxNTYuODY1IEwgMTc5LjU3OCAxNjIuMzMxIDE4MS4wODkgMTYyLjgxNiBDIDE4Ni43NjUgMTY0LjY0MCwxODkuNjMxIDE2Ny4wNDQsMTg5LjY3MiAxNzAuMDE3IEMgMTg5LjcxNiAxNzMuMTQwLDE4Ny4xMjIgMTczLjQxNywxODUuMTYzIDE3MC41MDAgQyAxODMuNTQ2IDE2OC4wOTMsMTgwLjc5MiAxNjUuMjAwLDE4MC4xMTcgMTY1LjIwMCBDIDE3OS43MDIgMTY1LjIwMCwxNzkuNjAwIDE2OC42NDQsMTc5LjYwMCAxODIuNTg0IEwgMTc5LjYwMCAxOTkuOTY5IDE3OC43MDggMjAwLjgwMCBDIDE3NC45ODcgMjA0LjI2NywxNzQuODAwIDIwMy40MjQsMTc0LjgwMCAxODMuMTkwIEMgMTc0LjgwMCAxNzMuNTg5LDE3NC42ODAgMTY1LjYxMywxNzQuNTMzIDE2NS40NjcgQyAxNzQuMzg3IDE2NS4zMjAsMTczLjM1MiAxNjYuOTA1LDE3Mi4yMzMgMTY4Ljk4OSBDIDE2OC4xNDMgMTc2LjYxMSwxNjEuMzk2IDE4NC40NzIsMTYxLjE1MyAxODEuOTAwIEMgMTYxLjA1MiAxODAuODM0LDE2MS4zMTcgMTgwLjIzNiwxNjMuNDQ0IDE3Ni43MjcgQyAxNjguMjYxIDE2OC43ODQsMTc0LjQwMCAxNTQuNzY4LDE3NC40MDAgMTUxLjcxNiBDIDE3NC40MDAgMTUxLjM1MSwxNzIuODU2IDE1MS4xOTIsMTY4LjUwMCAxNTEuMTExIEwgMTYyLjYwMCAxNTEuMDAwIDE2Mi42MDAgMTUwLjAwMCBMIDE2Mi42MDAgMTQ5LjAwMCAxNjguNjAwIDE0OC44MDAgTCAxNzQuNjAwIDE0OC42MDAgMTc0LjYwMCAxNDIuMjAwIEMgMTc0LjYwMCAxMzYuNzEwLDE3NC41MTUgMTM1LjgyMiwxNzQuMDAwIDEzNS45NTMgQyAxNzMuNjcwIDEzNi4wMzcsMTcyLjE0MCAxMzYuNDQ2LDE3MC42MDAgMTM2Ljg2MSBDIDE2Ny40ODAgMTM3LjcwMiwxNjEuNzcxIDEzOC40NDEsMTYwLjkxOSAxMzguMTE0IEMgMTU5LjQ1MiAxMzcuNTUwLDE2MC43MjAgMTM2Ljg1MCwxNjYuMjAwIDEzNS4xOTYgQyAxNzIuMzY3IDEzMy4zMzUsMTgwLjY3MSAxMjkuNzQzLDE4NS4wMDAgMTI3LjA2NSBDIDE4Ny4xMzcgMTI1Ljc0MywxODcuMzc5IDEyNS43NjUsMTg5LjQ1NCAxMjcuNDY1IE0yMjcuODA3IDEyOC45MDAgQyAyMzIuMjM0IDEzMS44NjcsMjMyLjAxMCAxMzIuODAwLDIyNi44NzMgMTMyLjgwMCBDIDIyNS42MjEgMTMyLjgwMCwyMjMuMzM4IDEzMy4xNjIsMjIxLjc5OSAxMzMuNjAzIEMgMjE2LjgwOCAxMzUuMDM2LDIwOS4xNTkgMTM2LjcwMiwyMDQuNDAwIDEzNy4zOTQgQyAyMDMuNDEwIDEzNy41MzgsMjAwLjk4MCAxMzcuODk2LDE5OS4wMDAgMTM4LjE5MCBDIDE5Mi43NTcgMTM5LjExNywxODkuNzE5IDEzOS4zMTYsMTg5LjQxMSAxMzguODE4IEMgMTg4LjkxNiAxMzguMDE4LDE4OS44OTAgMTM3LjM4OSwxOTIuNDc2IDEzNi44MzkgQyAxOTQuOTYxIDEzNi4zMTEsMTk4Ljg4MSAxMzUuMzIzLDIwMy4yMDAgMTM0LjEzNSBDIDIwNC40MTAgMTMzLjgwMywyMDUuOTQwIDEzMy4zODgsMjA2LjYwMCAxMzMuMjE0IEMgMjA5LjA4NiAxMzIuNTU4LDIxNi4zMzkgMTI5Ljk4MCwyMjAuMDAwIDEyOC40NTIgQyAyMjQuNzU5IDEyNi40NjYsMjI0LjEyMCAxMjYuNDI5LDIyNy44MDcgMTI4LjkwMCBNOTcuODY0IDEzMi4wMDAgTCA5OS43NTcgMTMzLjIwMCAxMTcuNjUxIDEzMy4yMDAgTCAxMzUuNTQ2IDEzMy4yMDAgMTM2LjQwMCAxMzIuMDAwIEMgMTM3LjQ5MiAxMzAuNDY3LDEzNy42MTEgMTMwLjQ4MCwxNDAuMjAyIDEzMi40MzYgQyAxNDIuODY0IDEzNC40NDYsMTQzLjY0MCAxMzYuNDAwLDE0MS43NzYgMTM2LjQwMCBDIDE0MS4yODUgMTM2LjQwMCwxNDEuMjAwIDEzOC41NDYsMTQxLjIwMCAxNTAuOTMwIEwgMTQxLjIwMCAxNjUuNDYxIDE0MC4zMDAgMTY2LjMwNCBDIDEzNy45NjUgMTY4LjQ5MSwxMzYuNTU2IDE2OC4xNjgsMTM2LjMzMCAxNjUuMzk1IEwgMTM2LjIwMCAxNjMuODAwIDEyNy44OTAgMTYzLjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMTkuNjkwIDE2OS42OTIgTCAxMTkuODAwIDE3NS44MDAgMTMxLjc4MyAxNzUuOTA2IEwgMTQzLjc2NiAxNzYuMDEyIDE0Ni4yNDEgMTczLjU1OSBDIDE0Ny42MDMgMTcyLjIxMCwxNDguODg2IDE3MS4xNzIsMTQ5LjA5MyAxNzEuMjUzIEMgMTUxLjExMyAxNzIuMDQzLDE1Ni4wMDQgMTc2LjMxMSwxNTUuOTA4IDE3Ny4yMDAgTCAxNTUuODAwIDE3OC4yMDAgMTM3LjgwMCAxNzguNDAwIEwgMTE5LjgwMCAxNzguNjAwIDExOS42OTMgMTg4LjQ3OCBMIDExOS41ODYgMTk4LjM1NSAxMTguNDMxIDE5OS4xNzggQyAxMTcuNDgxIDE5OS44NTQsMTE1LjQ0OCAyMDAuMjk3LDExNS4xMTcgMTk5LjkwMCBDIDExNS4wNzEgMTk5Ljg0NSwxMTQuOTM2IDE5NS4wMzAsMTE0LjgxNyAxODkuMjAwIEwgMTE0LjYwMCAxNzguNjAwIDk3LjcyNiAxNzguNDk2IEMgODEuMzA2IDE3OC4zOTQsODAuODQ0IDE3OC4zNzAsODAuNjAwIDE3Ny41OTkgQyA4MC4xMDEgMTc2LjAyNyw4MC4zOTYgMTc2LjAwMCw5Ny44MjQgMTc2LjAwMCBMIDExNC44MDAgMTc2LjAwMCAxMTQuODAwIDE2OS44MDAgTCAxMTQuODAwIDE2My42MDAgMTA3LjI0MyAxNjMuNjAwIEMgOTguOTI0IDE2My42MDAsOTkuMjAwIDE2My41MTIsOTkuMjAwIDE2Ni4xNzEgQyA5OS4yMDAgMTY3LjQ5Niw5OC41ODUgMTY4LjI5MSw5Ni44NzQgMTY5LjE3NiBDIDk0Ljc5MiAxNzAuMjU1LDk0LjgwMCAxNzAuMzMzLDk0LjgwMCAxNDkuNzUxIEMgOTQuODAwIDEyOC40NzksOTQuNTU1IDEyOS45MDEsOTcuODY0IDEzMi4wMDAgTTI1OS4yNTYgMTM1LjY4OSBMIDI2MS4xMTEgMTM3LjIwMCAyODMuNTI4IDEzNy4yMDAgTCAzMDUuOTQ2IDEzNy4yMDAgMzA2LjgwMCAxMzYuMDAwIEMgMzA3LjkxNiAxMzQuNDMyLDMwOC40MTQgMTM0LjQ4MiwzMTAuOTgzIDEzNi40MjIgQyAzMTMuNjMzIDEzOC40MjMsMzEzLjg3NSAxMzguOTg0LDMxMi41OTYgMTQwLjE2OSBMIDMxMS42MDAgMTQxLjA5MiAzMTEuNjAwIDE2Ny42NzYgTCAzMTEuNjAwIDE5NC4yNjEgMzEwLjcwMCAxOTUuMDc1IEMgMzA4LjE3NCAxOTcuMzYxLDMwNi44MDAgMTk2LjMzOCwzMDYuODAwIDE5Mi4xNzEgTCAzMDYuODAwIDE4OS4yMDAgMjgzLjg0MyAxODkuMjAwIEMgMjYzLjI3OCAxODkuMjAwLDI2MC44NjAgMTg5LjI2NiwyNjAuNjQzIDE4OS44MzMgQyAyNjAuNTA5IDE5MC4xODEsMjYwLjQwMCAxOTIuMDM5LDI2MC40MDAgMTkzLjk2MyBDIDI2MC40MDAgMTk4LjE1OCwyNTguNTY1IDIwMC41NjMsMjU2LjQwMCAxOTkuMjA2IEMgMjU1Ljc4OCAxOTguODIyLDI1NS4yMTggMTM2LjQ1OSwyNTUuODA0IDEzNC4wNjUgQyAyNTYuMDYwIDEzMy4wMTksMjU1Ljg1OSAxMzIuOTI0LDI1OS4yNTYgMTM1LjY4OSBNOTkuNjQwIDEzNi4xNTIgQyA5OS4zMjcgMTM2LjUyOSw5OS4yMTIgMTM4LjMzMyw5OS4yODcgMTQxLjY1NiBMIDk5LjQwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDEzNi4yMDAgMTQ2LjYwMCAxMzYuMjAwIDE0MS4yMDAgTCAxMzYuMjAwIDEzNS44MDAgMTE4LjE1MiAxMzUuNjk2IEMgMTAzLjA3NCAxMzUuNjA5LDEwMC4wMjggMTM1LjY4NCw5OS42NDAgMTM2LjE1MiBNMjMyLjM4MCAxNDAuMTkwIEMgMjM2LjM1NCAxNDIuMTkxLDIzNi40OTcgMTQzLjA3OCwyMzIuOTg4IDE0My45NjEgQyAyMzIuMDA1IDE0NC4yMDksMjMxLjIwMCAxNDQuNTcxLDIzMS4yMDAgMTQ0Ljc2NSBDIDIzMS4yMDAgMTQ1LjY1MSwyMjQuNTIxIDE1NS45MzQsMjIyLjY2OCAxNTcuOTAwIEMgMjE5LjQ2NyAxNjEuMjk3LDIxOS4yNzMgMTU5LjAzNSwyMjIuMjU2IDE1My4wOTMgQyAyMjQuMjYyIDE0OS4wOTksMjI1LjQyOCAxNDYuMjg1LDIyNy40NzQgMTQwLjUwMCBDIDIyOC4yMjIgMTM4LjM4NSwyMjguNzMzIDEzOC4zNTMsMjMyLjM4MCAxNDAuMTkwIE0yNjAuNTk1IDE0MC41MDAgQyAyNjAuNDc0IDE0MC45OTUsMjYwLjQyNSAxNDUuODEwLDI2MC40ODcgMTUxLjIwMCBMIDI2MC42MDAgMTYxLjAwMCAyNzAuMDAwIDE2MS4xMTMgQyAyNzUuMTcwIDE2MS4xNzUsMjc5LjgwNSAxNjEuMTI2LDI4MC4zMDAgMTYxLjAwNSBMIDI4MS4yMDAgMTYwLjc4NSAyODEuMjAwIDE1MC44MjUgQyAyODEuMjAwIDE0NS4zNDcsMjgxLjA5MSAxNDAuNTgxLDI4MC45NTcgMTQwLjIzMyBDIDI4MC43NDUgMTM5LjY3OSwyNzkuNDY5IDEzOS42MDAsMjcwLjc2NSAxMzkuNjAwIEwgMjYwLjgxNSAxMzkuNjAwIDI2MC41OTUgMTQwLjUwMCBNMjg2LjA5MyAxNTAuMzAwIEwgMjg2LjIwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDMwNi42MDAgMTYxLjAwMCAzMDYuNzA3IDE1MC4zMDAgTCAzMDYuODEzIDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMjg1Ljk4NyAxMzkuNjAwIDI4Ni4wOTMgMTUwLjMwMCBNMjEwLjAyNiAxNDIuMDE2IEMgMjE0LjAxMiAxNDQuNTc1LDIxNi44MDAgMTQ4LjQ4NCwyMTYuODAwIDE1MS41MTcgQyAyMTYuODAwIDE1NS4xNjksMjEzLjA1MCAxNTUuMzk4LDIxMi4xNjggMTUxLjgwMCBDIDIxMS42NDUgMTQ5LjY2NiwyMTAuNDMwIDE0Ny4xNjksMjA4LjU1NyAxNDQuMzc3IEMgMjA2LjA2MCAxNDAuNjU2LDIwNi41ODcgMTM5LjgxMCwyMTAuMDI2IDE0Mi4wMTYgTTIwMS4yMDMgMTQ2Ljk2MSBDIDIwNC43ODQgMTUwLjYwMiwyMDUuMjQxIDE1Ni4wMDAsMjAxLjk2OSAxNTYuMDAwIEMgMjAwLjc1NCAxNTYuMDAwLDIwMC4zNTAgMTU1LjU4NywxOTkuNjIwIDE1My42MDAgQyAxOTkuMzM3IDE1Mi44MzAsMTk4Ljc2NyAxNTEuNDM3LDE5OC4zNTMgMTUwLjUwNCBDIDE5Ny45MzkgMTQ5LjU3MiwxOTcuNTk4IDE0OC42NzIsMTk3LjU5NiAxNDguNTA0IEMgMTk3LjU5NCAxNDguMzM3LDE5Ni45NjQgMTQ3LjQxMCwxOTYuMTk2IDE0Ni40NDQgQyAxOTIuOTEzIDE0Mi4zMTQsMTk3LjA1MiAxNDIuNzQyLDIwMS4yMDMgMTQ2Ljk2MSBNOTkuNjgwIDE0OS42ODAgQyA5OC42NzEgMTUwLjY4OSw5OS4wNDQgMTYwLjc0NywxMDAuMTAwIDE2MS4wMDMgQyAxMDAuNTk1IDE2MS4xMjQsMTA4LjkyMCAxNjEuMTcyLDExOC42MDAgMTYxLjExMSBMIDEzNi4yMDAgMTYxLjAwMCAxMzYuMzE2IDE1Ni4wMDAgQyAxMzYuMzc5IDE1My4yNTAsMTM2LjMzMSAxNTAuNTk1LDEzNi4yMDggMTUwLjEwMCBMIDEzNS45ODUgMTQ5LjIwMCAxMTguMDcyIDE0OS4yMDAgQyAxMDQuNjc0IDE0OS4yMDAsMTAwLjAzOSAxNDkuMzIxLDk5LjY4MCAxNDkuNjgwIE0yMTkuNjg4IDE2MS45OTkgTCAyMjcuOTc2IDE2Mi4wMDAgMjI4Ljg2MyAxNjAuODAwIEMgMjI5LjM1MSAxNjAuMTQwLDIyOS45MDUgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMzAuNTgzIDE1OS42MDAsMjM1LjIwMCAxNjIuODk3LDIzNS4yMDAgMTYzLjI0NiBDIDIzNS4yMDAgMTYzLjQwNSwyMzUuMjk3IDE2My43ODcsMjM1LjQxNSAxNjQuMDk2IEMgMjM1LjU0NiAxNjQuNDM3LDIzNS4yMzIgMTY0LjgzOSwyMzQuNjE1IDE2NS4xMjAgTCAyMzMuNjAwIDE2NS41ODMgMjMzLjYwMCAxODEuMTY0IEwgMjMzLjYwMCAxOTYuNzQ2IDIzMi40MzggMTk3LjU3MyBDIDIzMC4wOTYgMTk5LjI0MSwyMjkuMDU4IDE5OC42OTIsMjI4LjcxMiAxOTUuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyMC4wMDAgMTk0LjYwMCBMIDIxMS40MDAgMTk0LjYwMCAyMTEuMTgxIDE5Ni41MDggQyAyMTAuOTE0IDE5OC44MjYsMjA5LjgzMCAyMDAuMDQ1LDIwNy45NTQgMjAwLjEzNSBMIDIwNi42MDAgMjAwLjIwMCAyMDYuNDk2IDE4MC4yMDAgQyAyMDYuMzc1IDE1Ni45MzMsMjA2LjEyNiAxNTguODE4LDIwOS4wODYgMTYwLjYwMyBMIDIxMS40MDAgMTYxLjk5OCAyMTkuNjg4IDE2MS45OTkgTTE5OC40MjAgMTYxLjMwNSBDIDE5OS41NzEgMTYyLjAyNCwxOTkuNjMxIDE2My4wNTcsMTk4LjU1MiAxNjMuNTQ5IEwgMTk3LjYwMCAxNjMuOTgzIDE5Ny42MDAgMTgwLjk1NiBMIDE5Ny42MDAgMTk3LjkyOSAxOTYuMzY5IDE5OC45NjQgQyAxOTUuNjYwIDE5OS41NjIsMTk0LjY0NCAyMDAuMDAwLDE5My45NjkgMjAwLjAwMCBMIDE5Mi44MDAgMjAwLjAwMCAxOTIuODAwIDE4MC4xNDggTCAxOTIuODAwIDE2MC4yOTcgMTk1LjI0NSAxNjAuNTczIEMgMTk2LjU5MCAxNjAuNzI2LDE5OC4wMTkgMTYxLjA1NSwxOTguNDIwIDE2MS4zMDUgTTI2MC42NDMgMTY0LjIzMyBDIDI2MC41MDkgMTY0LjU4MSwyNjAuNDAwIDE2OS41MTYsMjYwLjQwMCAxNzUuMjAwIEMgMjYwLjQwMCAxODAuODg0LDI2MC41MDkgMTg1LjgxOSwyNjAuNjQzIDE4Ni4xNjcgQyAyNjAuODkyIDE4Ni44MTcsMjc4Ljk2OSAxODcuMTcwLDI4MC41NjcgMTg2LjU1NyBDIDI4MS4yMTYgMTg2LjMwOCwyODEuNTc0IDE2NS44MzksMjgwLjk1NyAxNjQuMjMzIEMgMjgwLjU5MCAxNjMuMjc1LDI2MS4wMTAgMTYzLjI3NSwyNjAuNjQzIDE2NC4yMzMgTTI4Ni4wOTQgMTc1LjEwMCBMIDI4Ni4yMDAgMTg2LjYwMCAyOTYuNDAwIDE4Ni42MDAgTCAzMDYuNjAwIDE4Ni42MDAgMzA2LjcwNiAxNzUuMTAwIEwgMzA2LjgxMiAxNjMuNjAwIDI5Ni40MDAgMTYzLjYwMCBMIDI4NS45ODggMTYzLjYwMCAyODYuMDk0IDE3NS4xMDAgTTIxMS40NzQgMTY0LjY1OSBDIDIxMS4zMjMgMTY0LjgxMCwyMTEuMjAwIDE2Ny42MDMsMjExLjIwMCAxNzAuODY3IEwgMjExLjIwMCAxNzYuODAwIDIyMC4wMTAgMTc2LjgwMCBMIDIyOC44MjEgMTc2LjgwMCAyMjguNzEwIDE3MC43MDAgTCAyMjguNjAwIDE2NC42MDAgMjIwLjE3NCAxNjQuNDkyIEMgMjE1LjU0MCAxNjQuNDMzLDIxMS42MjUgMTY0LjUwOCwyMTEuNDc0IDE2NC42NTkgTTIxMS40NzQgMTc5LjQ1OSBDIDIxMS4zMjMgMTc5LjYxMCwyMTEuMjAwIDE4Mi40OTMsMjExLjIwMCAxODUuODY3IEwgMjExLjIwMCAxOTIuMDAwIDIyMC4wMTAgMTkyLjAwMCBMIDIyOC44MjAgMTkyLjAwMCAyMjguNzEwIDE4NS43MDAgTCAyMjguNjAwIDE3OS40MDAgMjIwLjE3NCAxNzkuMjkyIEMgMjE1LjU0MCAxNzkuMjMzLDIxMS42MjUgMTc5LjMwOCwyMTEuNDc0IDE3OS40NTkgTTIxNi44MDAgMjEyLjAxNSBDIDIxOC41OTcgMjEyLjkxNCwyMjIuODAwIDIxNy4zMTEsMjIyLjgwMCAyMTguMjkwIEMgMjIyLjgwMCAyMTkuMzY0LDIyMi4wMTYgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMTguOTk5IDIyMC4wMDAsMjE4LjYyOCAyMjAuMjgyLDIxMi45NjUgMjI1Ljg3MSBDIDIxMC4xMDcgMjI4LjY5MiwyMDYuOTI4IDIzMS42MzAsMjA1LjkwMSAyMzIuNDAwIEMgMjAzLjQ2NiAyMzQuMjI1LDIwMy4zNDUgMjM0LjY0MiwyMDUuMDE3IDIzNS40MzUgQyAyMDYuNjkwIDIzNi4yMjksMjA2LjgwMiAyMzcuMjU4LDIwNS4zMDAgMjM4LjAzMiBDIDIwNC42OTUgMjM4LjM0NCwyMDQuMDY4IDIzOC43NzksMjAzLjkwNiAyMzguOTk5IEMgMjAzLjc0NCAyMzkuMjIwLDIwMy42MDkgMjQ3Ljg5MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNTk5IDI3OC43NzAsMjAzLjYyOSAyNzguNDAwLDIwMS45OTkgMjc4LjQwMCBDIDE5OC45NTMgMjc4LjQwMCwxOTcuNjM4IDI3NC45MDksMTk4LjU0MCAyNjkuMjE3IEMgMTk5LjM0NiAyNjQuMTMwLDE5OS41MjkgMjM5LjQ1MSwxOTguNzY0IDIzOC45NzggQyAxOTguNTI1IDIzOC44MzAsMTk3LjU4MCAyMzkuMjcwLDE5Ni42NjQgMjM5Ljk1NyBDIDE4NS45NDEgMjQ3Ljk5OSwxNjUuOTgxIDI1OS4wOTIsMTYzLjc2NCAyNTguMjQyIEMgMTYyLjA2OSAyNTcuNTkxLDE2My4yODAgMjU2LjQzMiwxNjkuMjcxIDI1Mi45NzIgQyAxODQuNDMxIDI0NC4yMTYsMTk2LjE5NSAyMzUuNDIwLDIwNS40MjAgMjI1Ljk0MiBDIDIxNC44NjIgMjE2LjI0MCwyMTUuMzY0IDIxNS4yMDIsMjExLjgzNSAyMTIuNjY1IEMgMjA5LjQyOSAyMTAuOTM2LDIxMy41NjQgMjEwLjM5NCwyMTYuODAwIDIxMi4wMTUgTTExNC4wMDQgMjEyLjU2MyBDIDExNy43NzEgMjE0LjUzMiwxMTguODYzIDIxNi40ODAsMTE2Ljc2NCAyMTcuNDg2IEMgMTE1LjY0MyAyMTguMDIzLDExMy43NzYgMjIxLjIzOSwxMTQuMDk4IDIyMi4wNzggQyAxMTQuMzAyIDIyMi42MTEsMTE0Ljg1OSAyMjIuNTk5LDEyNi40MDAgMjIxLjgxOSBDIDEzMy4xMDIgMjIxLjM2NiwxMzMuNTI2IDIyMS4yNjUsMTM1LjI2OCAyMTkuNjkxIEwgMTM2Ljg3NCAyMTguMjQwIDEzOC41MzcgMjE5LjEzNCBDIDE0My4xNDEgMjIxLjYwOCwxNDQuMDExIDIyMy40MDQsMTQxLjQ1NSAyMjUuMTYyIEMgMTM5Ljk1MSAyMjYuMTk3LDEzOS4zMDAgMjI3LjEzMywxMzcuMjM4IDIzMS4yMjEgQyAxMzUuODk4IDIzMy44ODAsMTM0LjI2MCAyMzYuODQwLDEzMy42MDAgMjM3LjgwMCBDIDEzMi45NDAgMjM4Ljc1OSwxMzIuNDAwIDIzOS42NTcsMTMyLjQwMCAyMzkuNzk0IEMgMTMyLjQwMCAyMzkuOTMxLDEzMS42ODAgMjQxLjEwNCwxMzAuODAwIDI0Mi40MDAgQyAxMjguODg0IDI0NS4yMjEsMTI4Ljg4OCAyNDUuMTgxLDEzMC4zOTkgMjQ2Ljc5OSBDIDEzNC41NjAgMjUxLjI1NCwxMzEuMDg3IDI1NS40ODUsMTI2LjcwMyAyNTEuMzAyIEwgMTI1LjYwNSAyNTAuMjU1IDEyNC41NjMgMjUxLjIyOCBDIDEyMy45ODkgMjUxLjc2MiwxMjIuMzM5IDI1My41OTUsMTIwLjg5NyAyNTUuMzAxIEMgMTEyLjQ0NCAyNjUuMjkzLDg5LjIwMCAyODAuOTEwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI3NS45ODAsODkuNzg1IDI3NS41MzgsOTUuNDAwIDI3MS45MDUgQyAxMDUuNDI5IDI2NS40MTYsMTE0LjgyOCAyNTYuNjg5LDExOS45NDEgMjQ5LjEyMCBMIDEyMS4yMTAgMjQ3LjI0MSAxMjAuMzA1IDI0Ni4zNjkgQyAxMTcuNTY5IDI0My43MzMsMTExLjIwNiAyNDAuNTYyLDEwNi4xNDcgMjM5LjMxNCBMIDEwMy41NDQgMjM4LjY3MSA5OS44NzIgMjQyLjI2MyBDIDk1LjI4OCAyNDYuNzQ2LDg4LjI0OSAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODUuNjAyIDI1Mi40MDAsODYuNTA1IDI1MC45MDQsOTAuNDczIDI0Ny4wNTkgQyA5Mi43NzggMjQ0LjgyNyw5NS42MzkgMjQxLjgzMCw5Ni44MzIgMjQwLjQwMCBDIDk4LjAyNCAyMzguOTcwLDk5LjEwNSAyMzcuNzEwLDk5LjIzNCAyMzcuNjAwIEMgMTAwLjgwNCAyMzYuMjU2LDEwNi44MDEgMjI1Ljg3NCwxMDguMzYwIDIyMS44MDAgQyAxMDguODY1IDIyMC40ODAsMTA5LjQyNCAyMTkuMDQwLDEwOS42MDMgMjE4LjYwMCBDIDExMC42NDcgMjE2LjAyNywxMTAuNDQ3IDIxNC43NjAsMTA4Ljg3MCAyMTMuOTYxIEMgMTA2LjYwMyAyMTIuODEzLDEwNi4wNTAgMjEyLjMzNiwxMDYuMjgzIDIxMS43MjggQyAxMDYuNjg4IDIxMC42NzMsMTExLjM1MiAyMTEuMTc4LDExNC4wMDQgMjEyLjU2MyBNMjgxLjEzMyAyMTUuMzE2IEMgMjg2LjIzMiAyMTcuNjc4LDI4OS43NTYgMjIyLjg3OCwyODcuMTY0IDIyNC4yMTkgQyAyODUuODk2IDIyNC44NzQsMjg0LjY0NCAyMjcuMTk2LDI4MS45OTkgMjMzLjgwMCBDIDI3OS40NjIgMjQwLjEzMiwyNzMuOTYzIDI1MS4yODcsMjcwLjcwMCAyNTYuNzIwIEMgMjY5LjYwNCAyNTguNTQ2LDI2OC44MTIgMjYwLjE0NSwyNjguOTQxIDI2MC4yNzQgQyAyNjkuNzQzIDI2MS4wNzcsMzAyLjQwMCAyNTUuMTc1LDMwMi40MDAgMjU0LjIyNyBDIDMwMi40MDAgMjUyLjk3OSwyOTcuMjI4IDI0Ni43MDYsMjkyLjMyMCAyNDIuMDAwIEMgMjg3LjgxMyAyMzcuNjc5LDI4OC4yNzkgMjM1LjkwNCwyOTMuMDM1IDIzOS4yNzcgQyAzMDUuNTU3IDI0OC4xNTgsMzEzLjYwMCAyNTguMjY3LDMxMy42MDAgMjY1LjEyNSBDIDMxMy42MDAgMjcwLjQzMiwzMDkuNDk3IDI3MC44NzYsMzA4LjA0OSAyNjUuNzI3IEMgMzA2Ljg5NyAyNjEuNjMwLDMwNS4zMTcgMjU3Ljk2NywzMDQuNDgwIDI1Ny40NDkgQyAzMDQuMjk3IDI1Ny4zMzYsMzAwLjczOSAyNTguMTM1LDI5Ni41NzQgMjU5LjIyMyBDIDI4OC42NzYgMjYxLjI4NiwyODIuMDYyIDI2Mi44MjIsMjYzLjY2MSAyNjYuODYyIEMgMjYwLjg2MCAyNjcuNDc3LDI1OS43MTMgMjY3LjkyNCwyNTkuMDg5IDI2OC42NDIgQyAyNTcuMzA0IDI3MC42OTQsMjUzLjU2OSAyNjguMTkwLDI1MS4zNzAgMjYzLjQ2NiBDIDI0OS43MTUgMjU5LjkxMiwyNTAuNTQ4IDI1Ni4xMDIsMjUyLjMwOSAyNTkuMTcwIEMgMjUzLjY2NCAyNjEuNTMxLDI1NS44ODYgMjYxLjk4MywyNjIuNTU0IDI2MS4yNTcgQyAyNjQuODkyIDI2MS4wMDIsMjY0LjkxNyAyNjAuOTg1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2OC41MDQgMjU0LjYyNSwyNzIuMzU5IDI0NS4yOTMsMjc2LjQ1OSAyMzMuODAwIEMgMjgxLjM4MSAyMjAuMDAwLDI4MS4zNzkgMjE5LjI0NiwyNzYuNDEzIDIxNS45NzEgQyAyNzMuNTg0IDIxNC4xMDUsMjc3LjM3OSAyMTMuNTc4LDI4MS4xMzMgMjE1LjMxNiBNMTI3LjAwMCAyMjQuNDMyIEMgMTI1LjQ2MCAyMjQuNjExLDEyMS41MjMgMjI0LjgzNywxMTguMjUyIDIyNC45MzMgTCAxMTIuMzA0IDIyNS4xMDggMTEwLjc5OSAyMjcuNzAyIEMgMTA5Ljk3MiAyMjkuMTI5LDEwOC4zNjYgMjMxLjY3MywxMDcuMjMxIDIzMy4zNTQgQyAxMDUuODYwIDIzNS4zODcsMTA1LjM0MCAyMzYuNDY0LDEwNS42ODQgMjM2LjU2NyBDIDEwNS45NjggMjM2LjY1MiwxMDcuNzMwIDIzNy4wMzAsMTA5LjYwMCAyMzcuNDA3IEMgMTEzLjU5NSAyMzguMjEyLDExNy45NzEgMjM5LjYxOCwxMjEuNjAwIDI0MS4yNjMgTCAxMjQuMjAwIDI0Mi40NDIgMTI1LjEwOSAyNDEuMzIxIEMgMTI3Ljg5NyAyMzcuODgzLDEzNC4yNjggMjI1LjY3NywxMzMuODQ4IDIyNC41ODAgQyAxMzMuNTk5IDIyMy45MzEsMTMxLjY1NiAyMjMuODg5LDEyNy4wMDAgMjI0LjQzMiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMWMyYyIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", QI = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: np,
    alt: "WasedaTime English Logo",
    style: { width: 120, height: 120 }
  }
), B4 = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: rp,
    alt: "WasedaTime Japanese Logo",
    style: { width: 120, height: 120 }
  }
), $I = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: np,
    alt: "WasedaTime English Small Logo",
    style: { width: 50, height: 50 }
  }
), Q4 = () => /* @__PURE__ */ ge.jsx("img", { src: rp, style: { width: 50, height: 50 } }), WI = ({ theme: e, setTheme: t }) => {
  const n = {
    light: /* @__PURE__ */ ge.jsx(FI, { color: Ge.icon.sun }),
    dark: /* @__PURE__ */ ge.jsx(UI, { color: Ge.icon.moon })
  };
  return /* @__PURE__ */ ge.jsx(
    "div",
    {
      className: "cursor-pointer transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon",
      onClick: () => t(e === "dark" ? "light" : "dark"),
      children: n[e]
    }
  );
}, VI = (e, t) => {
  const n = e ? "#FAFAFA30" : Ge.light.bgSide, r = e ? "#24252770" : Ge.dark.bgSide;
  return {
    height: "67px",
    width: "100%",
    padding: "8px 0px",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: t === "light" ? Ge.light.bgSide : Ge.dark.bgSide,
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
}, HI = {
  flex: "5",
  paddingRight: "0px"
}, qI = {
  flex: "3",
  padding: "0px 0px 0px 1em"
}, KI = {
  flex: "8",
  margin: "auto 0px"
}, GI = {
  flex: "10",
  margin: "auto 0px"
}, JI = {
  flex: "3",
  margin: "auto 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"
}, ZI = (e) => ({
  width: "100%",
  borderRadius: "25px",
  height: "40px",
  padding: "0px 1em",
  outline: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: e === "light" ? Ge.light.bgSide : Ge.dark.text3,
  backgroundColor: e === "light" ? Ge.light.bgMain : Ge.dark.text3,
  color: e === "light" ? Ge.light.text1 : Ge.dark.text1
}), XI = (e) => ({
  fontWeight: 500,
  paddingLeft: "100px",
  fontSize: "32px",
  color: e === "light" ? Ge.light.text1 : Ge.dark.text1
}), $4 = ({
  title: e,
  onInputChange: t,
  placeholder: n,
  inputText: r,
  disabled: i,
  isBlur: o,
  changeLang: s,
  theme: a = "light",
  setTheme: u
}) => {
  const c = tw(), l = /* @__PURE__ */ ge.jsx("label", { style: { marginLeft: "0" }, children: /* @__PURE__ */ ge.jsx(
    "input",
    {
      style: ZI(a),
      placeholder: n || "Search...",
      onChange: t ? (f) => t(f.target.value) : () => {
      },
      value: r || "",
      disabled: i,
      autoFocus: !0
    }
  ) });
  return /* @__PURE__ */ ge.jsxs("header", { style: VI(o, a), children: [
    /* @__PURE__ */ ge.jsx(Ya, { maxWidth: Qo.tablet, children: (f) => f ? /* @__PURE__ */ ge.jsx("div", { style: qI, onClick: () => c("/home"), children: /* @__PURE__ */ ge.jsx($I, {}) }) : /* @__PURE__ */ ge.jsx("header", { style: HI, children: /* @__PURE__ */ ge.jsx("h2", { style: XI(a), children: e }) }) }),
    /* @__PURE__ */ ge.jsx(Ya, { maxWidth: Qo.tablet, children: (f) => f ? /* @__PURE__ */ ge.jsx("div", { style: GI, children: l }) : /* @__PURE__ */ ge.jsx("div", { style: KI, children: l }) }),
    /* @__PURE__ */ ge.jsxs("div", { style: JI, children: [
      /* @__PURE__ */ ge.jsx(WI, { theme: a, setTheme: u }),
      /* @__PURE__ */ ge.jsx(BI, { theme: a, changeLang: s })
    ] })
  ] });
}, eN = /* @__PURE__ */ ge.jsx("style", { children: `
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
    ` }), tN = {
  display: "block",
  width: "100px",
  height: "100px",
  transition: "transform(0, 12vh)",
  animation: "loadingSpinnerSpin 3s linear infinite"
}, W4 = ({ message: e, theme: t }) => {
  const [n, r] = Ln("");
  return st(() => {
    setTimeout(() => {
      r(
        "Slow network is detected. Please wait we're almost done 💪"
      );
    }, 4e3);
  }), /* @__PURE__ */ ge.jsx(Fh, { style: { flex: "1 0 0" }, children: /* @__PURE__ */ ge.jsxs(
    $y,
    {
      style: {
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
      },
      children: [
        eN,
        /* @__PURE__ */ ge.jsx("div", { style: tN, children: /* @__PURE__ */ ge.jsx(QI, {}) }),
        /* @__PURE__ */ ge.jsx(
          "p",
          {
            style: {
              fontSize: "2rem",
              textAlign: "center",
              color: t === "light" ? Ge.light.text2 : Ge.dark.text2
            },
            children: e || "Loading..."
          }
        ),
        /* @__PURE__ */ ge.jsx(
          "p",
          {
            style: {
              fontSize: "2rem",
              textAlign: "center",
              color: t === "light" ? Ge.light.text2 : Ge.dark.text2
            },
            children: n
          }
        )
      ]
    }
  ) });
};
function Rr(e) {
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function nN(e, t) {
  if (Rr(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Rr(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ip(e) {
  var t = nN(e, "string");
  return Rr(t) === "symbol" ? t : String(t);
}
function gc(e, t, n) {
  return t = ip(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rN(e, t) {
  if (e == null)
    return {};
  var n = Je(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function iN() {
  if (console && console.warn) {
    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    typeof n[0] == "string" && (n[0] = "react-i18next:: ".concat(n[0])), (e = console).warn.apply(e, n);
  }
}
var vf = {};
function ru() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && vf[t[0]] || (typeof t[0] == "string" && (vf[t[0]] = /* @__PURE__ */ new Date()), iN.apply(void 0, t));
}
function wf(e, t, n) {
  e.loadNamespaces(t, function() {
    if (e.isInitialized)
      n();
    else {
      var r = function i() {
        setTimeout(function() {
          e.off("initialized", i);
        }, 0), n();
      };
      e.on("initialized", r);
    }
  });
}
function oN(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  var s = function(u, c) {
    var l = t.services.backendConnector.state["".concat(u, "|").concat(c)];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function sN(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return ru("i18n.languages were undefined or empty", t.languages), !0;
  var r = t.options.ignoreJSONStructure !== void 0;
  return r ? t.hasLoadedNamespace(e, {
    precheck: function(o, s) {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !s(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : oN(e, t, n);
}
function aN(e) {
  return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown");
}
var uN = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, cN = {
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
}, lN = function(t) {
  return cN[t];
}, fN = function(t) {
  return t.replace(uN, lN);
};
function Df(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Df(Object(n), !0).forEach(function(r) {
      gc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Df(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var iu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: fN
};
function dN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  iu = Af(Af({}, iu), e);
}
function hN() {
  return iu;
}
var op;
function gN(e) {
  op = e;
}
function pN() {
  return op;
}
function sp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ef(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ip(r.key), r);
  }
}
function ap(e, t, n) {
  return t && Ef(e.prototype, t), n && Ef(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var MN = {
  type: "3rdParty",
  init: function(t) {
    dN(t.options.react), gN(t);
  }
}, yN = pn(), mN = function() {
  function e() {
    sp(this, e), this.usedNamespaces = {};
  }
  return ap(e, [{
    key: "addUsedNamespaces",
    value: function(n) {
      var r = this;
      n.forEach(function(i) {
        r.usedNamespaces[i] || (r.usedNamespaces[i] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), e;
}();
function vN(e) {
  if (Array.isArray(e))
    return e;
}
function wN(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, s, a = [], u = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        u = !1;
      } else
        for (; !(u = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); u = !0)
          ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (c)
          throw i;
      }
    }
    return a;
  }
}
function If(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function DN(e, t) {
  if (e) {
    if (typeof e == "string")
      return If(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return If(e, t);
  }
}
function AN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function up(e, t) {
  return vN(e) || wN(e, t) || DN(e, t) || AN();
}
function Nf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nf(Object(n), !0).forEach(function(r) {
      gc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var EN = function(t, n) {
  var r = tt();
  return st(function() {
    r.current = n ? r.current : t;
  }, [t, n]), r.current;
};
function IN(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.i18n, r = gt(yN) || {}, i = r.i18n, o = r.defaultNS, s = n || i || pN();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new mN()), !s) {
    ru("You will need to pass in an i18next instance by using initReactI18next");
    var a = function($, b) {
      return typeof b == "string" ? b : b && Rr(b) === "object" && typeof b.defaultValue == "string" ? b.defaultValue : Array.isArray($) ? $[$.length - 1] : $;
    }, u = [a, {}, !1];
    return u.t = a, u.i18n = {}, u.ready = !1, u;
  }
  s.options.react && s.options.react.wait !== void 0 && ru("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var c = ea(ea(ea({}, hN()), s.options.react), t), l = c.useSuspense, f = c.keyPrefix, d = e || o || s.options && s.options.defaultNS;
  d = typeof d == "string" ? [d] : d || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(d);
  var g = (s.isInitialized || s.initializedStoreOnce) && d.every(function(W) {
    return sN(W, s, c);
  });
  function h() {
    return s.getFixedT(null, c.nsMode === "fallback" ? d : d[0], f);
  }
  var p = Ln(h), m = up(p, 2), v = m[0], w = m[1], j = d.join(), N = EN(j), I = tt(!0);
  st(function() {
    var W = c.bindI18n, $ = c.bindI18nStore;
    I.current = !0, !g && !l && wf(s, d, function() {
      I.current && w(h);
    }), g && N && N !== j && I.current && w(h);
    function b() {
      I.current && w(h);
    }
    return W && s && s.on(W, b), $ && s && s.store.on($, b), function() {
      I.current = !1, W && s && W.split(" ").forEach(function(k) {
        return s.off(k, b);
      }), $ && s && $.split(" ").forEach(function(k) {
        return s.store.off(k, b);
      });
    };
  }, [s, j]);
  var B = tt(!0);
  st(function() {
    I.current && !B.current && w(h), B.current = !1;
  }, [s, f]);
  var z = [v, s, g];
  if (z.t = v, z.i18n = s, z.ready = g, g || !g && !l)
    return z;
  throw new Promise(function(W) {
    wf(s, d, function() {
      W();
    });
  });
}
var NN = ["forwardedRef"];
function Tf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tf(Object(n), !0).forEach(function(r) {
      gc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TN(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(r) {
    function i(s) {
      var a = s.forwardedRef, u = rN(s, NN), c = IN(e, oo(oo({}, u), {}, {
        keyPrefix: t.keyPrefix
      })), l = up(c, 3), f = l[0], d = l[1], g = l[2], h = oo(oo({}, u), {}, {
        t: f,
        i18n: d,
        tReady: g
      });
      return t.withRef && a ? h.ref = a : !t.withRef && a && (h.forwardedRef = a), wt(r, h);
    }
    i.displayName = "withI18nextTranslation(".concat(aN(r), ")"), i.WrappedComponent = r;
    var o = function(a, u) {
      return wt(i, Object.assign({}, a, {
        forwardedRef: u
      }));
    };
    return t.withRef ? es(o) : i;
  };
}
var ue = {}, jN = {
  get exports() {
    return ue;
  },
  set exports(e) {
    ue = e;
  }
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
(function(e) {
  var t, n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v, w, j, N, I, B, z;
  (function(W) {
    var $ = typeof zt == "object" ? zt : typeof self == "object" ? self : typeof this == "object" ? this : {};
    W(b($, b(e.exports)));
    function b(k, U) {
      return k !== $ && (typeof Object.create == "function" ? Object.defineProperty(k, "__esModule", { value: !0 }) : k.__esModule = !0), function(x, T) {
        return k[x] = U ? U(x, T) : T;
      };
    }
  })(function(W) {
    var $ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(b, k) {
      b.__proto__ = k;
    } || function(b, k) {
      for (var U in k)
        k.hasOwnProperty(U) && (b[U] = k[U]);
    };
    t = function(b, k) {
      $(b, k);
      function U() {
        this.constructor = b;
      }
      b.prototype = k === null ? Object.create(k) : (U.prototype = k.prototype, new U());
    }, n = Object.assign || function(b) {
      for (var k, U = 1, x = arguments.length; U < x; U++) {
        k = arguments[U];
        for (var T in k)
          Object.prototype.hasOwnProperty.call(k, T) && (b[T] = k[T]);
      }
      return b;
    }, r = function(b, k) {
      var U = {};
      for (var x in b)
        Object.prototype.hasOwnProperty.call(b, x) && k.indexOf(x) < 0 && (U[x] = b[x]);
      if (b != null && typeof Object.getOwnPropertySymbols == "function")
        for (var T = 0, x = Object.getOwnPropertySymbols(b); T < x.length; T++)
          k.indexOf(x[T]) < 0 && Object.prototype.propertyIsEnumerable.call(b, x[T]) && (U[x[T]] = b[x[T]]);
      return U;
    }, i = function(b, k, U, x) {
      var T = arguments.length, S = T < 3 ? k : x === null ? x = Object.getOwnPropertyDescriptor(k, U) : x, R;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        S = Reflect.decorate(b, k, U, x);
      else
        for (var C = b.length - 1; C >= 0; C--)
          (R = b[C]) && (S = (T < 3 ? R(S) : T > 3 ? R(k, U, S) : R(k, U)) || S);
      return T > 3 && S && Object.defineProperty(k, U, S), S;
    }, o = function(b, k) {
      return function(U, x) {
        k(U, x, b);
      };
    }, s = function(b, k) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(b, k);
    }, a = function(b, k, U, x) {
      function T(S) {
        return S instanceof U ? S : new U(function(R) {
          R(S);
        });
      }
      return new (U || (U = Promise))(function(S, R) {
        function C(L) {
          try {
            ie(x.next(L));
          } catch (F) {
            R(F);
          }
        }
        function J(L) {
          try {
            ie(x.throw(L));
          } catch (F) {
            R(F);
          }
        }
        function ie(L) {
          L.done ? S(L.value) : T(L.value).then(C, J);
        }
        ie((x = x.apply(b, k || [])).next());
      });
    }, u = function(b, k) {
      var U = { label: 0, sent: function() {
        if (S[0] & 1)
          throw S[1];
        return S[1];
      }, trys: [], ops: [] }, x, T, S, R;
      return R = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (R[Symbol.iterator] = function() {
        return this;
      }), R;
      function C(ie) {
        return function(L) {
          return J([ie, L]);
        };
      }
      function J(ie) {
        if (x)
          throw new TypeError("Generator is already executing.");
        for (; U; )
          try {
            if (x = 1, T && (S = ie[0] & 2 ? T.return : ie[0] ? T.throw || ((S = T.return) && S.call(T), 0) : T.next) && !(S = S.call(T, ie[1])).done)
              return S;
            switch (T = 0, S && (ie = [ie[0] & 2, S.value]), ie[0]) {
              case 0:
              case 1:
                S = ie;
                break;
              case 4:
                return U.label++, { value: ie[1], done: !1 };
              case 5:
                U.label++, T = ie[1], ie = [0];
                continue;
              case 7:
                ie = U.ops.pop(), U.trys.pop();
                continue;
              default:
                if (S = U.trys, !(S = S.length > 0 && S[S.length - 1]) && (ie[0] === 6 || ie[0] === 2)) {
                  U = 0;
                  continue;
                }
                if (ie[0] === 3 && (!S || ie[1] > S[0] && ie[1] < S[3])) {
                  U.label = ie[1];
                  break;
                }
                if (ie[0] === 6 && U.label < S[1]) {
                  U.label = S[1], S = ie;
                  break;
                }
                if (S && U.label < S[2]) {
                  U.label = S[2], U.ops.push(ie);
                  break;
                }
                S[2] && U.ops.pop(), U.trys.pop();
                continue;
            }
            ie = k.call(b, U);
          } catch (L) {
            ie = [6, L], T = 0;
          } finally {
            x = S = 0;
          }
        if (ie[0] & 5)
          throw ie[1];
        return { value: ie[0] ? ie[1] : void 0, done: !0 };
      }
    }, z = function(b, k, U, x) {
      x === void 0 && (x = U), b[x] = k[U];
    }, c = function(b, k) {
      for (var U in b)
        U !== "default" && !k.hasOwnProperty(U) && (k[U] = b[U]);
    }, l = function(b) {
      var k = typeof Symbol == "function" && Symbol.iterator, U = k && b[k], x = 0;
      if (U)
        return U.call(b);
      if (b && typeof b.length == "number")
        return {
          next: function() {
            return b && x >= b.length && (b = void 0), { value: b && b[x++], done: !b };
          }
        };
      throw new TypeError(k ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, f = function(b, k) {
      var U = typeof Symbol == "function" && b[Symbol.iterator];
      if (!U)
        return b;
      var x = U.call(b), T, S = [], R;
      try {
        for (; (k === void 0 || k-- > 0) && !(T = x.next()).done; )
          S.push(T.value);
      } catch (C) {
        R = { error: C };
      } finally {
        try {
          T && !T.done && (U = x.return) && U.call(x);
        } finally {
          if (R)
            throw R.error;
        }
      }
      return S;
    }, d = function() {
      for (var b = [], k = 0; k < arguments.length; k++)
        b = b.concat(f(arguments[k]));
      return b;
    }, g = function() {
      for (var b = 0, k = 0, U = arguments.length; k < U; k++)
        b += arguments[k].length;
      for (var x = Array(b), T = 0, k = 0; k < U; k++)
        for (var S = arguments[k], R = 0, C = S.length; R < C; R++, T++)
          x[T] = S[R];
      return x;
    }, h = function(b) {
      return this instanceof h ? (this.v = b, this) : new h(b);
    }, p = function(b, k, U) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var x = U.apply(b, k || []), T, S = [];
      return T = {}, R("next"), R("throw"), R("return"), T[Symbol.asyncIterator] = function() {
        return this;
      }, T;
      function R(P) {
        x[P] && (T[P] = function(q) {
          return new Promise(function(K, X) {
            S.push([P, q, K, X]) > 1 || C(P, q);
          });
        });
      }
      function C(P, q) {
        try {
          J(x[P](q));
        } catch (K) {
          F(S[0][3], K);
        }
      }
      function J(P) {
        P.value instanceof h ? Promise.resolve(P.value.v).then(ie, L) : F(S[0][2], P);
      }
      function ie(P) {
        C("next", P);
      }
      function L(P) {
        C("throw", P);
      }
      function F(P, q) {
        P(q), S.shift(), S.length && C(S[0][0], S[0][1]);
      }
    }, m = function(b) {
      var k, U;
      return k = {}, x("next"), x("throw", function(T) {
        throw T;
      }), x("return"), k[Symbol.iterator] = function() {
        return this;
      }, k;
      function x(T, S) {
        k[T] = b[T] ? function(R) {
          return (U = !U) ? { value: h(b[T](R)), done: T === "return" } : S ? S(R) : R;
        } : S;
      }
    }, v = function(b) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var k = b[Symbol.asyncIterator], U;
      return k ? k.call(b) : (b = typeof l == "function" ? l(b) : b[Symbol.iterator](), U = {}, x("next"), x("throw"), x("return"), U[Symbol.asyncIterator] = function() {
        return this;
      }, U);
      function x(S) {
        U[S] = b[S] && function(R) {
          return new Promise(function(C, J) {
            R = b[S](R), T(C, J, R.done, R.value);
          });
        };
      }
      function T(S, R, C, J) {
        Promise.resolve(J).then(function(ie) {
          S({ value: ie, done: C });
        }, R);
      }
    }, w = function(b, k) {
      return Object.defineProperty ? Object.defineProperty(b, "raw", { value: k }) : b.raw = k, b;
    }, j = function(b) {
      if (b && b.__esModule)
        return b;
      var k = {};
      if (b != null)
        for (var U in b)
          Object.hasOwnProperty.call(b, U) && (k[U] = b[U]);
      return k.default = b, k;
    }, N = function(b) {
      return b && b.__esModule ? b : { default: b };
    }, I = function(b, k) {
      if (!k.has(b))
        throw new TypeError("attempted to get private field on non-instance");
      return k.get(b);
    }, B = function(b, k, U) {
      if (!k.has(b))
        throw new TypeError("attempted to set private field on non-instance");
      return k.set(b, U), U;
    }, W("__extends", t), W("__assign", n), W("__rest", r), W("__decorate", i), W("__param", o), W("__metadata", s), W("__awaiter", a), W("__generator", u), W("__exportStar", c), W("__createBinding", z), W("__values", l), W("__read", f), W("__spread", d), W("__spreadArrays", g), W("__await", h), W("__asyncGenerator", p), W("__asyncDelegator", m), W("__asyncValues", v), W("__makeTemplateObject", w), W("__importStar", j), W("__importDefault", N), W("__classPrivateFieldGet", I), W("__classPrivateFieldSet", B);
  });
})(jN);
var $o;
(function(e) {
  e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple";
})($o || ($o = {}));
function ta(e) {
  var t = ["provider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function SN(e) {
  var t = ["customProvider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function bN(e) {
  var t = ["customState"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function Gn(e) {
  return e.redirectSignIn !== void 0;
}
var ke;
(function(e) {
  e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default", e.DeviceConfig = "deviceConfig", e.NetworkError = "networkError", e.AutoSignInError = "autoSignInError";
})(ke || (ke = {}));
function CN(e) {
  return !!e.username;
}
var jf;
(function(e) {
  e.API_KEY = "API_KEY", e.AWS_IAM = "AWS_IAM", e.OPENID_CONNECT = "OPENID_CONNECT", e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", e.AWS_LAMBDA = "AWS_LAMBDA";
})(jf || (jf = {}));
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
var ou = function(e, t) {
  return ou = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, ou(e, t);
};
function pc(e, t) {
  ou(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var we = function() {
  return we = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, we.apply(this, arguments);
};
function cp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ne(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Ee(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Rt(e) {
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
function cr(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
function ut() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(cr(arguments[t]));
  return e;
}
var xN = "Logging", Sf = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
}, Ft;
(function(e) {
  e.DEBUG = "DEBUG", e.ERROR = "ERROR", e.INFO = "INFO", e.WARN = "WARN", e.VERBOSE = "VERBOSE";
})(Ft || (Ft = {}));
var Ht = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = Ft.WARN), this.name = t, this.level = n, this._pluggables = [];
    }
    return e.prototype._padding = function(t) {
      return t < 10 ? "0" + t : "" + t;
    }, e.prototype._ts = function() {
      var t = /* @__PURE__ */ new Date();
      return [this._padding(t.getMinutes()), this._padding(t.getSeconds())].join(":") + "." + t.getMilliseconds();
    }, e.prototype.configure = function(t) {
      return t ? (this._config = t, this._config) : this._config;
    }, e.prototype._log = function(t) {
      for (var n, r, i = [], o = 1; o < arguments.length; o++)
        i[o - 1] = arguments[o];
      var s = this.level;
      e.LOG_LEVEL && (s = e.LOG_LEVEL), typeof window < "u" && window.LOG_LEVEL && (s = window.LOG_LEVEL);
      var a = Sf[s], u = Sf[t];
      if (u >= a) {
        var c = console.log.bind(console);
        t === Ft.ERROR && console.error && (c = console.error.bind(console)), t === Ft.WARN && console.warn && (c = console.warn.bind(console));
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
          for (var g = Rt(this._pluggables), h = g.next(); !h.done; h = g.next()) {
            var p = h.value, m = { message: f, timestamp: Date.now() };
            p.pushLogs([m]);
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            h && !h.done && (r = g.return) && r.call(g);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
    }, e.prototype.log = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.INFO], t));
    }, e.prototype.info = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.INFO], t));
    }, e.prototype.warn = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.WARN], t));
    }, e.prototype.error = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.ERROR], t));
    }, e.prototype.debug = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.DEBUG], t));
    }, e.prototype.verbose = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ft.VERBOSE], t));
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategoryName() === xN && (this._pluggables.push(t), t.configure(this._config));
    }, e.prototype.listPluggables = function() {
      return this._pluggables;
    }, e.LOG_LEVEL = null, e;
  }()
), na = new Ht("Amplify"), ON = (
  /** @class */
  function() {
    function e() {
      this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = Ht, this.ServiceWorker = null;
    }
    return e.prototype.register = function(t) {
      na.debug("component registered in amplify", t), this._components.push(t), typeof t.getModuleName == "function" ? (this._modules[t.getModuleName()] = t, this[t.getModuleName()] = t) : na.debug("no getModuleName method for component", t), t.configure(this._config);
    }, e.prototype.configure = function(t) {
      var n = this;
      return t ? (this._config = Object.assign(this._config, t), na.debug("amplify config", this._config), Object.entries(this._modules).forEach(function(r) {
        var i = cr(r, 2);
        i[0];
        var o = i[1];
        Object.keys(o).forEach(function(s) {
          n._modules[s] && (o[s] = n._modules[s]);
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
), Mc = new ON(), LN = "5.1.12", su = "aws-amplify/" + LN, Qn = {
  userAgent: su + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (Qn.product = navigator.product || "", Qn.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      Qn.userAgent = su + " react-native", Qn.isReactNative = !0;
      break;
    default:
      Qn.userAgent = su + " js", Qn.isReactNative = !1;
      break;
  }
var _N = function(e) {
  return "" + Qn.userAgent + (e || "");
}, rn = new Ht("Hub"), kN = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function zN(e) {
  return e.onHubCapsule !== void 0;
}
var PN = (
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
        var r = this.patterns.find(function(o) {
          var s = o.pattern;
          return s.source === t.source;
        });
        if (!r) {
          rn.warn("No listeners for " + t);
          return;
        }
        this.patterns = ut(this.patterns.filter(function(o) {
          return o !== r;
        }));
      } else {
        var i = this.listeners[t];
        if (!i) {
          rn.warn("No listeners for " + t);
          return;
        }
        this.listeners[t] = ut(i.filter(function(o) {
          var s = o.callback;
          return s !== n;
        }));
      }
    }, e.prototype.remove = function(t, n) {
      this._remove(t, n);
    }, e.prototype.dispatch = function(t, n, r, i) {
      if (r === void 0 && (r = ""), this.protectedChannels.indexOf(t) > -1) {
        var o = i === kN;
        o || rn.warn("WARNING: " + t + " is protected and dispatching on it can have unintended consequences");
      }
      var s = {
        channel: t,
        payload: we({}, n),
        source: r,
        patternInfo: []
      };
      try {
        this._toListeners(s);
      } catch (a) {
        rn.error(a);
      }
    }, e.prototype.listen = function(t, n, r) {
      var i = this;
      r === void 0 && (r = "noname");
      var o;
      if (zN(n))
        rn.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), o = n.onHubCapsule.bind(n);
      else {
        if (typeof n != "function")
          throw new Error("No callback supplied to Hub");
        o = n;
      }
      if (t instanceof RegExp)
        this.patterns.push({
          pattern: t,
          callback: o
        });
      else {
        var s = this.listeners[t];
        s || (s = [], this.listeners[t] = s), s.push({
          name: r,
          callback: o
        });
      }
      return function() {
        i._remove(t, o);
      };
    }, e.prototype._toListeners = function(t) {
      var n = t.channel, r = t.payload, i = this.listeners[n];
      if (i && i.forEach(function(s) {
        rn.debug("Dispatching to " + n + " with ", r);
        try {
          s.callback(t);
        } catch (a) {
          rn.error(a);
        }
      }), this.patterns.length > 0) {
        if (!r.message) {
          rn.warn("Cannot perform pattern matching without a message key");
          return;
        }
        var o = r.message;
        this.patterns.forEach(function(s) {
          var a = o.match(s.pattern);
          if (a) {
            var u = cr(a), c = u.slice(1), l = we(we({}, t), { patternInfo: c });
            try {
              s.callback(l);
            } catch (f) {
              rn.error(f);
            }
          }
        });
      }
    }, e;
  }()
), on = new PN("__default__"), RN = function(e) {
  if (e.isResolved)
    return e;
  var t = !0, n = !1, r = !1, i = e.then(function(o) {
    return r = !0, t = !1, o;
  }, function(o) {
    throw n = !0, t = !1, o;
  });
  return i.isFullfilled = function() {
    return r;
  }, i.isPending = function() {
    return t;
  }, i.isRejected = function() {
    return n;
  }, i;
}, gn = function() {
  var e = typeof window < "u" && typeof window.document < "u", t = typeof process < "u" && process.versions != null && process.versions.node != null;
  return {
    isBrowser: e,
    isNode: t
  };
}, bn = {}, Ds = {}, Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.MAX_HASHABLE_LENGTH = Nt.INIT = Nt.KEY = Nt.DIGEST_LENGTH = Nt.BLOCK_SIZE = void 0;
Nt.BLOCK_SIZE = 64;
Nt.DIGEST_LENGTH = 32;
Nt.KEY = new Uint32Array([
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
Nt.INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
Nt.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.RawSha256 = void 0;
var Ct = Nt, UN = (
  /** @class */
  function() {
    function e() {
      this.state = Int32Array.from(Ct.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return e.prototype.update = function(t) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      var n = 0, r = t.byteLength;
      if (this.bytesHashed += r, this.bytesHashed * 8 > Ct.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r > 0; )
        this.buffer[this.bufferLength++] = t[n++], r--, this.bufferLength === Ct.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
    }, e.prototype.digest = function() {
      if (!this.finished) {
        var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
        if (n.setUint8(this.bufferLength++, 128), r % Ct.BLOCK_SIZE >= Ct.BLOCK_SIZE - 8) {
          for (var i = this.bufferLength; i < Ct.BLOCK_SIZE; i++)
            n.setUint8(i, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < Ct.BLOCK_SIZE - 8; i++)
          n.setUint8(i, 0);
        n.setUint32(Ct.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), n.setUint32(Ct.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
      }
      for (var o = new Uint8Array(Ct.DIGEST_LENGTH), i = 0; i < 8; i++)
        o[i * 4] = this.state[i] >>> 24 & 255, o[i * 4 + 1] = this.state[i] >>> 16 & 255, o[i * 4 + 2] = this.state[i] >>> 8 & 255, o[i * 4 + 3] = this.state[i] >>> 0 & 255;
      return o;
    }, e.prototype.hashBuffer = function() {
      for (var t = this, n = t.buffer, r = t.state, i = r[0], o = r[1], s = r[2], a = r[3], u = r[4], c = r[5], l = r[6], f = r[7], d = 0; d < Ct.BLOCK_SIZE; d++) {
        if (d < 16)
          this.temp[d] = (n[d * 4] & 255) << 24 | (n[d * 4 + 1] & 255) << 16 | (n[d * 4 + 2] & 255) << 8 | n[d * 4 + 3] & 255;
        else {
          var g = this.temp[d - 2], h = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
          g = this.temp[d - 15];
          var p = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
          this.temp[d] = (h + this.temp[d - 7] | 0) + (p + this.temp[d - 16] | 0);
        }
        var m = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & l) | 0) + (f + (Ct.KEY[d] + this.temp[d] | 0) | 0) | 0, v = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & o ^ i & s ^ o & s) | 0;
        f = l, l = c, c = u, u = a + m | 0, a = s, s = o, o = i, i = m + v | 0;
      }
      r[0] += i, r[1] += o, r[2] += s, r[3] += a, r[4] += u, r[5] += c, r[6] += l, r[7] += f;
    }, e;
  }()
);
As.RawSha256 = UN;
var yc = {}, Es = {};
const FN = (e) => {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++) {
    const i = e.charCodeAt(n);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192, i & 63 | 128);
    else if (n + 1 < e.length && (i & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
      const o = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++n) & 1023);
      t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
    } else
      t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
  }
  return Uint8Array.from(t);
}, YN = (e) => {
  let t = "";
  for (let n = 0, r = e.length; n < r; n++) {
    const i = e[n];
    if (i < 128)
      t += String.fromCharCode(i);
    else if (192 <= i && i < 224) {
      const o = e[++n];
      t += String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (240 <= i && i < 365) {
      const s = "%" + [i, e[++n], e[++n], e[++n]].map((a) => a.toString(16)).join("%");
      t += decodeURIComponent(s);
    } else
      t += String.fromCharCode((i & 15) << 12 | (e[++n] & 63) << 6 | e[++n] & 63);
  }
  return t;
};
function BN(e) {
  return new TextEncoder().encode(e);
}
function QN(e) {
  return new TextDecoder("utf-8").decode(e);
}
const $N = (e) => typeof TextEncoder == "function" ? BN(e) : FN(e), WN = (e) => typeof TextDecoder == "function" ? QN(e) : YN(e), VN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: $N,
  toUtf8: WN
}, Symbol.toStringTag, { value: "Module" })), HN = /* @__PURE__ */ Bi(VN);
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.convertToBuffer = void 0;
var qN = HN, KN = typeof Buffer < "u" && Buffer.from ? function(e) {
  return Buffer.from(e, "utf8");
} : qN.fromUtf8;
function GN(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? KN(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
Es.convertToBuffer = GN;
var Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.isEmptyData = void 0;
function JN(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Is.isEmptyData = JN;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.numToUint8 = void 0;
function ZN(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255
  ]);
}
Ns.numToUint8 = ZN;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.uint32ArrayFrom = void 0;
function XN(e) {
  if (!Array.from) {
    for (var t = new Uint32Array(e.length), n = 0; n < e.length; )
      t[n] = e[n];
    return t;
  }
  return Uint32Array.from(e);
}
Ts.uint32ArrayFrom = XN;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
  var t = Es;
  Object.defineProperty(e, "convertToBuffer", { enumerable: !0, get: function() {
    return t.convertToBuffer;
  } });
  var n = Is;
  Object.defineProperty(e, "isEmptyData", { enumerable: !0, get: function() {
    return n.isEmptyData;
  } });
  var r = Ns;
  Object.defineProperty(e, "numToUint8", { enumerable: !0, get: function() {
    return r.numToUint8;
  } });
  var i = Ts;
  Object.defineProperty(e, "uint32ArrayFrom", { enumerable: !0, get: function() {
    return i.uint32ArrayFrom;
  } });
})(yc);
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.Sha256 = void 0;
var bf = ue, Wo = Nt, au = As, uu = yc, eT = (
  /** @class */
  function() {
    function e(t) {
      if (this.hash = new au.RawSha256(), t) {
        this.outer = new au.RawSha256();
        var n = tT(t), r = new Uint8Array(Wo.BLOCK_SIZE);
        r.set(n);
        for (var i = 0; i < Wo.BLOCK_SIZE; i++)
          n[i] ^= 54, r[i] ^= 92;
        this.hash.update(n), this.outer.update(r);
        for (var i = 0; i < n.byteLength; i++)
          n[i] = 0;
      }
    }
    return e.prototype.update = function(t) {
      if (!((0, uu.isEmptyData)(t) || this.error))
        try {
          this.hash.update((0, uu.convertToBuffer)(t));
        } catch (n) {
          this.error = n;
        }
    }, e.prototype.digestSync = function() {
      if (this.error)
        throw this.error;
      return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
    }, e.prototype.digest = function() {
      return (0, bf.__awaiter)(this, void 0, void 0, function() {
        return (0, bf.__generator)(this, function(t) {
          return [2, this.digestSync()];
        });
      });
    }, e;
  }()
);
Ds.Sha256 = eT;
function tT(e) {
  var t = (0, uu.convertToBuffer)(e);
  if (t.byteLength > Wo.BLOCK_SIZE) {
    var n = new au.RawSha256();
    n.update(t), t = n.digest();
  }
  var r = new Uint8Array(Wo.BLOCK_SIZE);
  return r.set(t), r;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  (0, t.__exportStar)(Ds, e);
})(bn);
var lp = {};
for (var so = 0; so < 256; so++) {
  var ao = so.toString(16).toLowerCase();
  ao.length === 1 && (ao = "0" + ao), lp[so] = ao;
}
function Sr(e) {
  for (var t = "", n = 0; n < e.byteLength; n++)
    t += lp[e[n]];
  return t;
}
var Vo = {}, nT = {
  get exports() {
    return Vo;
  },
  set exports(e) {
    Vo = e;
  }
};
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(n) {
    var r = t && !t.nodeType && t, i = e && !e.nodeType && e, o = typeof zt == "object" && zt;
    (o.global === o || o.window === o || o.self === o) && (n = o);
    var s, a = 2147483647, u = 36, c = 1, l = 26, f = 38, d = 700, g = 72, h = 128, p = "-", m = /^xn--/, v = /[^\x20-\x7E]/, w = /[\x2E\u3002\uFF0E\uFF61]/g, j = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, N = u - c, I = Math.floor, B = String.fromCharCode, z;
    function W(L) {
      throw RangeError(j[L]);
    }
    function $(L, F) {
      for (var P = L.length, q = []; P--; )
        q[P] = F(L[P]);
      return q;
    }
    function b(L, F) {
      var P = L.split("@"), q = "";
      P.length > 1 && (q = P[0] + "@", L = P[1]), L = L.replace(w, ".");
      var K = L.split("."), X = $(K, F).join(".");
      return q + X;
    }
    function k(L) {
      for (var F = [], P = 0, q = L.length, K, X; P < q; )
        K = L.charCodeAt(P++), K >= 55296 && K <= 56319 && P < q ? (X = L.charCodeAt(P++), (X & 64512) == 56320 ? F.push(((K & 1023) << 10) + (X & 1023) + 65536) : (F.push(K), P--)) : F.push(K);
      return F;
    }
    function U(L) {
      return $(L, function(F) {
        var P = "";
        return F > 65535 && (F -= 65536, P += B(F >>> 10 & 1023 | 55296), F = 56320 | F & 1023), P += B(F), P;
      }).join("");
    }
    function x(L) {
      return L - 48 < 10 ? L - 22 : L - 65 < 26 ? L - 65 : L - 97 < 26 ? L - 97 : u;
    }
    function T(L, F) {
      return L + 22 + 75 * (L < 26) - ((F != 0) << 5);
    }
    function S(L, F, P) {
      var q = 0;
      for (L = P ? I(L / d) : L >> 1, L += I(L / F); L > N * l >> 1; q += u)
        L = I(L / N);
      return I(q + (N + 1) * L / (L + f));
    }
    function R(L) {
      var F = [], P = L.length, q, K = 0, X = h, O = g, ne, G, he, H, Q, V, fe, te, le;
      for (ne = L.lastIndexOf(p), ne < 0 && (ne = 0), G = 0; G < ne; ++G)
        L.charCodeAt(G) >= 128 && W("not-basic"), F.push(L.charCodeAt(G));
      for (he = ne > 0 ? ne + 1 : 0; he < P; ) {
        for (H = K, Q = 1, V = u; he >= P && W("invalid-input"), fe = x(L.charCodeAt(he++)), (fe >= u || fe > I((a - K) / Q)) && W("overflow"), K += fe * Q, te = V <= O ? c : V >= O + l ? l : V - O, !(fe < te); V += u)
          le = u - te, Q > I(a / le) && W("overflow"), Q *= le;
        q = F.length + 1, O = S(K - H, q, H == 0), I(K / q) > a - X && W("overflow"), X += I(K / q), K %= q, F.splice(K++, 0, X);
      }
      return U(F);
    }
    function C(L) {
      var F, P, q, K, X, O, ne, G, he, H, Q, V = [], fe, te, le, Me;
      for (L = k(L), fe = L.length, F = h, P = 0, X = g, O = 0; O < fe; ++O)
        Q = L[O], Q < 128 && V.push(B(Q));
      for (q = K = V.length, K && V.push(p); q < fe; ) {
        for (ne = a, O = 0; O < fe; ++O)
          Q = L[O], Q >= F && Q < ne && (ne = Q);
        for (te = q + 1, ne - F > I((a - P) / te) && W("overflow"), P += (ne - F) * te, F = ne, O = 0; O < fe; ++O)
          if (Q = L[O], Q < F && ++P > a && W("overflow"), Q == F) {
            for (G = P, he = u; H = he <= X ? c : he >= X + l ? l : he - X, !(G < H); he += u)
              Me = G - H, le = u - H, V.push(
                B(T(H + Me % le, 0))
              ), G = I(Me / le);
            V.push(B(T(G, 0))), X = S(P, te, q == K), P = 0, ++q;
          }
        ++P, ++F;
      }
      return V.join("");
    }
    function J(L) {
      return b(L, function(F) {
        return m.test(F) ? R(F.slice(4).toLowerCase()) : F;
      });
    }
    function ie(L) {
      return b(L, function(F) {
        return v.test(F) ? "xn--" + C(F) : F;
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
        decode: k,
        encode: U
      },
      decode: R,
      encode: C,
      toASCII: ie,
      toUnicode: J
    }, r && i)
      if (e.exports == r)
        i.exports = s;
      else
        for (z in s)
          s.hasOwnProperty(z) && (r[z] = s[z]);
    else
      n.punycode = s;
  })(zt);
})(nT, Vo);
var rT = {
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
}, ki = {};
function iT(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var oT = function(e, t, n, r) {
  t = t || "&", n = n || "=";
  var i = {};
  if (typeof e != "string" || e.length === 0)
    return i;
  var o = /\+/g;
  e = e.split(t);
  var s = 1e3;
  r && typeof r.maxKeys == "number" && (s = r.maxKeys);
  var a = e.length;
  s > 0 && a > s && (a = s);
  for (var u = 0; u < a; ++u) {
    var c = e[u].replace(o, "%20"), l = c.indexOf(n), f, d, g, h;
    l >= 0 ? (f = c.substr(0, l), d = c.substr(l + 1)) : (f = c, d = ""), g = decodeURIComponent(f), h = decodeURIComponent(d), iT(i, g) ? Array.isArray(i[g]) ? i[g].push(h) : i[g] = [i[g], h] : i[g] = h;
  }
  return i;
}, ri = function(e) {
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
}, sT = function(e, t, n, r) {
  return t = t || "&", n = n || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(i) {
    var o = encodeURIComponent(ri(i)) + n;
    return Array.isArray(e[i]) ? e[i].map(function(s) {
      return o + encodeURIComponent(ri(s));
    }).join(t) : o + encodeURIComponent(ri(e[i]));
  }).join(t) : r ? encodeURIComponent(ri(r)) + n + encodeURIComponent(ri(e)) : "";
};
ki.decode = ki.parse = oT;
ki.encode = ki.stringify = sT;
var aT = Vo, sn = rT, Dn = fp;
function cn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var uT = /^([a-z0-9.+-]+:)/i, cT = /:[0-9]*$/, lT = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, fT = ["<", ">", '"', "`", " ", "\r", `
`, "	"], dT = ["{", "}", "|", "\\", "^", "`"].concat(fT), cu = ["'"].concat(dT), Cf = ["%", "/", "?", ";", "#"].concat(cu), xf = ["/", "?", "#"], hT = 255, Of = /^[+a-z0-9A-Z_-]{0,63}$/, gT = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, pT = {
  javascript: !0,
  "javascript:": !0
}, lu = {
  javascript: !0,
  "javascript:": !0
}, xr = {
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
}, fu = ki;
function fp(e, t, n) {
  if (e && sn.isObject(e) && e instanceof cn)
    return e;
  var r = new cn();
  return r.parse(e, t, n), r;
}
cn.prototype.parse = function(e, t, n) {
  if (!sn.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var r = e.indexOf("?"), i = r !== -1 && r < e.indexOf("#") ? "?" : "#", o = e.split(i), s = /\\/g;
  o[0] = o[0].replace(s, "/"), e = o.join(i);
  var a = e;
  if (a = a.trim(), !n && e.split("#").length === 1) {
    var u = lT.exec(a);
    if (u)
      return this.path = a, this.href = a, this.pathname = u[1], u[2] ? (this.search = u[2], t ? this.query = fu.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var c = uT.exec(a);
  if (c) {
    c = c[0];
    var l = c.toLowerCase();
    this.protocol = l, a = a.substr(c.length);
  }
  if (n || c || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(c && lu[c]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!lu[c] && (f || c && !xr[c])) {
    for (var d = -1, g = 0; g < xf.length; g++) {
      var h = a.indexOf(xf[g]);
      h !== -1 && (d === -1 || h < d) && (d = h);
    }
    var p, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (p = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(p)), d = -1;
    for (var g = 0; g < Cf.length; g++) {
      var h = a.indexOf(Cf[g]);
      h !== -1 && (d === -1 || h < d) && (d = h);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v)
      for (var w = this.hostname.split(/\./), g = 0, j = w.length; g < j; g++) {
        var N = w[g];
        if (N && !N.match(Of)) {
          for (var I = "", B = 0, z = N.length; B < z; B++)
            N.charCodeAt(B) > 127 ? I += "x" : I += N[B];
          if (!I.match(Of)) {
            var W = w.slice(0, g), $ = w.slice(g + 1), b = N.match(gT);
            b && (W.push(b[1]), $.unshift(b[2])), $.length && (a = "/" + $.join(".") + a), this.hostname = W.join(".");
            break;
          }
        }
      }
    this.hostname.length > hT ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), v || (this.hostname = aT.toASCII(this.hostname));
    var k = this.port ? ":" + this.port : "", U = this.hostname || "";
    this.host = U + k, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!pT[l])
    for (var g = 0, j = cu.length; g < j; g++) {
      var x = cu[g];
      if (a.indexOf(x) !== -1) {
        var T = encodeURIComponent(x);
        T === x && (T = escape(x)), a = a.split(x).join(T);
      }
    }
  var S = a.indexOf("#");
  S !== -1 && (this.hash = a.substr(S), a = a.slice(0, S));
  var R = a.indexOf("?");
  if (R !== -1 ? (this.search = a.substr(R), this.query = a.substr(R + 1), t && (this.query = fu.parse(this.query)), a = a.slice(0, R)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), xr[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var k = this.pathname || "", C = this.search || "";
    this.path = k + C;
  }
  return this.href = this.format(), this;
};
cn.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, o = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && sn.isObject(this.query) && Object.keys(this.query).length && (o = fu.stringify(this.query));
  var s = this.search || o && "?" + o || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || xr[t]) && i !== !1 ? (i = "//" + (i || ""), n && n.charAt(0) !== "/" && (n = "/" + n)) : i || (i = ""), r && r.charAt(0) !== "#" && (r = "#" + r), s && s.charAt(0) !== "?" && (s = "?" + s), n = n.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), s = s.replace("#", "%23"), t + i + n + s + r;
};
cn.prototype.resolve = function(e) {
  return this.resolveObject(fp(e, !1, !0)).format();
};
cn.prototype.resolveObject = function(e) {
  if (sn.isString(e)) {
    var t = new cn();
    t.parse(e, !1, !0), e = t;
  }
  for (var n = new cn(), r = Object.keys(this), i = 0; i < r.length; i++) {
    var o = r[i];
    n[o] = this[o];
  }
  if (n.hash = e.hash, e.href === "")
    return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), a = 0; a < s.length; a++) {
      var u = s[a];
      u !== "protocol" && (n[u] = e[u]);
    }
    return xr[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!xr[e.protocol]) {
      for (var c = Object.keys(e), l = 0; l < c.length; l++) {
        var f = c[l];
        n[f] = e[f];
      }
      return n.href = n.format(), n;
    }
    if (n.protocol = e.protocol, !e.host && !lu[e.protocol]) {
      for (var j = (e.pathname || "").split("/"); j.length && !(e.host = j.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), j[0] !== "" && j.unshift(""), j.length < 2 && j.unshift(""), n.pathname = j.join("/");
    } else
      n.pathname = e.pathname;
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var d = n.pathname || "", g = n.search || "";
      n.path = d + g;
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
  }
  var h = n.pathname && n.pathname.charAt(0) === "/", p = e.host || e.pathname && e.pathname.charAt(0) === "/", m = p || h || n.host && e.pathname, v = m, w = n.pathname && n.pathname.split("/") || [], j = e.pathname && e.pathname.split("/") || [], N = n.protocol && !xr[n.protocol];
  if (N && (n.hostname = "", n.port = null, n.host && (w[0] === "" ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (j[0] === "" ? j[0] = e.host : j.unshift(e.host)), e.host = null), m = m && (j[0] === "" || w[0] === "")), p)
    n.host = e.host || e.host === "" ? e.host : n.host, n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = j;
  else if (j.length)
    w || (w = []), w.pop(), w = w.concat(j), n.search = e.search, n.query = e.query;
  else if (!sn.isNullOrUndefined(e.search)) {
    if (N) {
      n.hostname = n.host = w.shift();
      var I = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
      I && (n.auth = I.shift(), n.host = n.hostname = I.shift());
    }
    return n.search = e.search, n.query = e.query, (!sn.isNull(n.pathname) || !sn.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
  }
  if (!w.length)
    return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var B = w.slice(-1)[0], z = (n.host || e.host || w.length > 1) && (B === "." || B === "..") || B === "", W = 0, $ = w.length; $ >= 0; $--)
    B = w[$], B === "." ? w.splice($, 1) : B === ".." ? (w.splice($, 1), W++) : W && (w.splice($, 1), W--);
  if (!m && !v)
    for (; W--; W)
      w.unshift("..");
  m && w[0] !== "" && (!w[0] || w[0].charAt(0) !== "/") && w.unshift(""), z && w.join("/").substr(-1) !== "/" && w.push("");
  var b = w[0] === "" || w[0] && w[0].charAt(0) === "/";
  if (N) {
    n.hostname = n.host = b ? "" : w.length ? w.shift() : "";
    var I = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
    I && (n.auth = I.shift(), n.host = n.hostname = I.shift());
  }
  return m = m || n.host && w.length, m && !b && w.unshift(""), w.length ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), (!sn.isNull(n.pathname) || !sn.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
};
cn.prototype.parseHost = function() {
  var e = this.host, t = cT.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var uo = new Ht("Util"), Jn = (
  /** @class */
  function(e) {
    pc(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.nonRetryable = !0, r;
    }
    return t;
  }(Error)
), MT = function(e) {
  var t = "nonRetryable";
  return e && e[t];
};
function yT(e, t, n, r) {
  return Ne(this, void 0, void 0, function() {
    var i = this;
    return Ee(this, function(o) {
      if (typeof e != "function")
        throw Error("functionToRetry must be a function");
      return [2, new Promise(function(s, a) {
        return Ne(i, void 0, void 0, function() {
          var u, c, l, f, d, g, h;
          return Ee(this, function(p) {
            switch (p.label) {
              case 0:
                u = 0, c = !1, f = function() {
                }, r && r.then(function() {
                  c = !0, clearTimeout(l), f();
                }), g = function() {
                  var m, v, w, j;
                  return Ee(this, function(N) {
                    switch (N.label) {
                      case 0:
                        u++, uo.debug(e.name + " attempt #" + u + " with this vars: " + JSON.stringify(t)), N.label = 1;
                      case 1:
                        return N.trys.push([1, 3, , 7]), m = {}, v = s, [4, e.apply(void 0, ut(t))];
                      case 2:
                        return [2, (m.value = v.apply(void 0, [N.sent()]), m)];
                      case 3:
                        return w = N.sent(), d = w, uo.debug("error on " + e.name, w), MT(w) ? (uo.debug(e.name + " non retryable error", w), [2, { value: a(w) }]) : (j = n(u, t, w), uo.debug(e.name + " retrying in " + j + " ms"), j === !1 || c ? [2, { value: a(w) }] : [3, 4]);
                      case 4:
                        return [4, new Promise(function(I) {
                          f = I, l = setTimeout(f, j);
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
                }, p.label = 1;
              case 1:
                return c ? [3, 3] : [5, g()];
              case 2:
                return h = p.sent(), typeof h == "object" ? [2, h.value] : [3, 1];
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
var dp = 5 * 60 * 1e3;
function mT(e) {
  e === void 0 && (e = dp);
  var t = 100, n = 100;
  return function(r) {
    var i = Math.pow(2, r) * t + n * Math.random();
    return i > e ? !1 : i;
  };
}
var vT = function(e, t, n, r) {
  return n === void 0 && (n = dp), yT(e, t, mT(n), r);
};
function wT(e) {
  return e.split("").map(function(t) {
    return t.charCodeAt(0).toString(16).padStart(2, "0");
  }).join("");
}
function DT(e) {
  return e.match(/.{2}/g).map(function(t) {
    return String.fromCharCode(parseInt(t, 16));
  }).join("");
}
var AT = new Ht("Parser"), hp = function(e) {
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
  } : r = e ? e.Storage || e : {}, e.Logging && (t.Logging = we(we({}, e.Logging), { region: e.aws_project_region })), e.geo && (t.Geo = Object.assign({}, e.geo), e.geo.amazon_location_service && (t.Geo = {
    AmazonLocationService: e.geo.amazon_location_service
  })), t.Analytics = Object.assign({}, t.Analytics, e.Analytics), t.Auth = Object.assign({}, t.Auth, e.Auth), t.Storage = Object.assign({}, r), t.Logging = Object.assign({}, t.Logging, e.Logging), AT.debug("parse config", e, "to amplifyconfig", t), t;
}, du = function(e, t) {
  return du = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, du(e, t);
};
function mc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  du(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var oe = function() {
  return oe = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, oe.apply(this, arguments);
};
function pt(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function Mt(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = c;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(c);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        r = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ET(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return o;
}
var gp = {}, js = {}, Ki = {}, Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.isEmptyData = void 0;
function IT(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Ss.isEmptyData = IT;
var vc = {};
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
})(vc);
var NT = function(e) {
  for (var t = [], n = 0, r = e.length; n < r; n++) {
    var i = e.charCodeAt(n);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192, i & 63 | 128);
    else if (n + 1 < e.length && (i & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
      var o = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++n) & 1023);
      t.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, o & 63 | 128);
    } else
      t.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
  }
  return Uint8Array.from(t);
}, TT = function(e) {
  for (var t = "", n = 0, r = e.length; n < r; n++) {
    var i = e[n];
    if (i < 128)
      t += String.fromCharCode(i);
    else if (192 <= i && i < 224) {
      var o = e[++n];
      t += String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (240 <= i && i < 365) {
      var s = [i, e[++n], e[++n], e[++n]], a = "%" + s.map(function(u) {
        return u.toString(16);
      }).join("%");
      t += decodeURIComponent(a);
    } else
      t += String.fromCharCode((i & 15) << 12 | (e[++n] & 63) << 6 | e[++n] & 63);
  }
  return t;
};
function jT(e) {
  return new TextEncoder().encode(e);
}
function ST(e) {
  return new TextDecoder("utf-8").decode(e);
}
var pp = function(e) {
  return typeof TextEncoder == "function" ? jT(e) : NT(e);
}, Mp = function(e) {
  return typeof TextDecoder == "function" ? ST(e) : TT(e);
};
const bT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: pp,
  toUtf8: Mp
}, Symbol.toStringTag, { value: "Module" })), CT = /* @__PURE__ */ Bi(bT), xT = {};
function OT() {
  return typeof window < "u" ? window : typeof self < "u" ? self : xT;
}
const LT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  locateWindow: OT
}, Symbol.toStringTag, { value: "Module" })), wc = /* @__PURE__ */ Bi(LT);
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.Sha256 = void 0;
var _T = Ss, yp = vc, kT = CT, hu = wc, zT = (
  /** @class */
  function() {
    function e(t) {
      t ? (this.operation = PT(t).then(function(n) {
        return (0, hu.locateWindow)().msCrypto.subtle.sign(yp.SHA_256_HMAC_ALGO, n);
      }), this.operation.catch(function() {
      })) : this.operation = Promise.resolve((0, hu.locateWindow)().msCrypto.subtle.digest("SHA-256"));
    }
    return e.prototype.update = function(t) {
      var n = this;
      (0, _T.isEmptyData)(t) || (this.operation = this.operation.then(function(r) {
        return r.onerror = function() {
          n.operation = Promise.reject(new Error("Error encountered updating hash"));
        }, r.process(mp(t)), r;
      }), this.operation.catch(function() {
      }));
    }, e.prototype.digest = function() {
      return this.operation.then(function(t) {
        return new Promise(function(n, r) {
          t.onerror = function() {
            r(new Error("Error encountered finalizing hash"));
          }, t.oncomplete = function() {
            t.result && n(new Uint8Array(t.result)), r(new Error("Error encountered finalizing hash"));
          }, t.finish();
        });
      });
    }, e;
  }()
);
Ki.Sha256 = zT;
function PT(e) {
  return new Promise(function(t, n) {
    var r = (0, hu.locateWindow)().msCrypto.subtle.importKey("raw", mp(e), yp.SHA_256_HMAC_ALGO, !1, ["sign"]);
    r.oncomplete = function() {
      r.result && t(r.result), n(new Error("ImportKey completed without importing key."));
    }, r.onerror = function() {
      n(new Error("ImportKey failed to import key."));
    };
  });
}
function mp(e) {
  return typeof e == "string" ? (0, kT.fromUtf8)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.Sha256 = void 0;
var co = yc, lo = vc, ra = wc, RT = (
  /** @class */
  function() {
    function e(t) {
      this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function(n, r) {
        (0, ra.locateWindow)().crypto.subtle.importKey("raw", (0, co.convertToBuffer)(t), lo.SHA_256_HMAC_ALGO, !1, ["sign"]).then(n, r);
      }), this.key.catch(function() {
      }));
    }
    return e.prototype.update = function(t) {
      if (!(0, co.isEmptyData)(t)) {
        var n = (0, co.convertToBuffer)(t), r = new Uint8Array(this.toHash.byteLength + n.byteLength);
        r.set(this.toHash, 0), r.set(n, this.toHash.byteLength), this.toHash = r;
      }
    }, e.prototype.digest = function() {
      var t = this;
      return this.key ? this.key.then(function(n) {
        return (0, ra.locateWindow)().crypto.subtle.sign(lo.SHA_256_HMAC_ALGO, n, t.toHash).then(function(r) {
          return new Uint8Array(r);
        });
      }) : (0, co.isEmptyData)(this.toHash) ? Promise.resolve(lo.EMPTY_DATA_SHA_256) : Promise.resolve().then(function() {
        return (0, ra.locateWindow)().crypto.subtle.digest(lo.SHA_256_HASH, t.toHash);
      }).then(function(n) {
        return Promise.resolve(new Uint8Array(n));
      });
    }, e;
  }()
);
Gi.Sha256 = RT;
var vp = {}, Ut = {}, Lf;
function UT() {
  if (Lf)
    return Ut;
  Lf = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.supportsZeroByteGCM = Ut.supportsSubtleCrypto = Ut.supportsSecureRandom = Ut.supportsWebCrypto = void 0;
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
  function n(s) {
    if (r(s) && typeof s.crypto.subtle == "object") {
      var a = s.crypto.subtle;
      return i(a);
    }
    return !1;
  }
  Ut.supportsWebCrypto = n;
  function r(s) {
    if (typeof s == "object" && typeof s.crypto == "object") {
      var a = s.crypto.getRandomValues;
      return typeof a == "function";
    }
    return !1;
  }
  Ut.supportsSecureRandom = r;
  function i(s) {
    return s && t.every(function(a) {
      return typeof s[a] == "function";
    });
  }
  Ut.supportsSubtleCrypto = i;
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
  return Ut.supportsZeroByteGCM = o, Ut;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(UT(), e);
})(vp);
var wp = {}, ia = {}, _f;
function FT() {
  return _f || (_f = 1, Object.defineProperty(ia, "__esModule", { value: !0 })), ia;
}
var oa = {}, kf;
function YT() {
  return kf || (kf = 1, Object.defineProperty(oa, "__esModule", { value: !0 })), oa;
}
var sa = {}, zf;
function BT() {
  return zf || (zf = 1, Object.defineProperty(sa, "__esModule", { value: !0 })), sa;
}
var aa = {}, Pf;
function QT() {
  return Pf || (Pf = 1, Object.defineProperty(aa, "__esModule", { value: !0 })), aa;
}
var ii = {}, Rf;
function $T() {
  if (Rf)
    return ii;
  Rf = 1, Object.defineProperty(ii, "__esModule", { value: !0 }), ii.isMsWindow = void 0;
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
  function t(r) {
    return "MSInputMethodContext" in r && "msCrypto" in r;
  }
  function n(r) {
    if (t(r) && r.msCrypto.subtle !== void 0) {
      var i = r.msCrypto, o = i.getRandomValues, s = i.subtle;
      return e.map(function(a) {
        return s[a];
      }).concat(o).every(function(a) {
        return typeof a == "function";
      });
    }
    return !1;
  }
  return ii.isMsWindow = n, ii;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(FT(), e), t.__exportStar(YT(), e), t.__exportStar(BT(), e), t.__exportStar(QT(), e), t.__exportStar($T(), e);
})(wp);
Object.defineProperty(js, "__esModule", { value: !0 });
js.Sha256 = void 0;
var WT = Ki, VT = Gi, HT = bn, qT = vp, KT = wp, Uf = wc, GT = (
  /** @class */
  function() {
    function e(t) {
      (0, qT.supportsWebCrypto)((0, Uf.locateWindow)()) ? this.hash = new VT.Sha256(t) : (0, KT.isMsWindow)((0, Uf.locateWindow)()) ? this.hash = new WT.Sha256(t) : this.hash = new HT.Sha256(t);
    }
    return e.prototype.update = function(t, n) {
      this.hash.update(t, n);
    }, e.prototype.digest = function() {
      return this.hash.digest();
    }, e;
  }()
);
js.Sha256 = GT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebCryptoSha256 = e.Ie11Sha256 = void 0;
  var t = ue;
  (0, t.__exportStar)(js, e);
  var n = Ki;
  Object.defineProperty(e, "Ie11Sha256", { enumerable: !0, get: function() {
    return n.Sha256;
  } });
  var r = Gi;
  Object.defineProperty(e, "WebCryptoSha256", { enumerable: !0, get: function() {
    return r.Sha256;
  } });
})(gp);
var Ff = (
  /** @class */
  function() {
    function e(t) {
      this.statusCode = t.statusCode, this.headers = t.headers || {}, this.body = t.body;
    }
    return e.isInstance = function(t) {
      if (!t)
        return !1;
      var n = t;
      return typeof n.statusCode == "number" && typeof n.headers == "object";
    }, e;
  }()
), Ur = (
  /** @class */
  function() {
    function e(t) {
      this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.substr(-1) !== ":" ? t.protocol + ":" : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? "/" + t.path : t.path : "/";
    }
    return e.isInstance = function(t) {
      if (!t)
        return !1;
      var n = t;
      return "method" in n && "protocol" in n && "hostname" in n && "path" in n && typeof n.query == "object" && typeof n.headers == "object";
    }, e.prototype.clone = function() {
      var t = new e(we(we({}, this), { headers: we({}, this.headers) }));
      return t.query && (t.query = JT(t.query)), t;
    }, e;
  }()
);
function JT(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r, i = e[n];
    return we(we({}, t), (r = {}, r[n] = Array.isArray(i) ? ut(i) : i, r));
  }, {});
}
var Zn = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, ZT);
}, ZT = function(e) {
  return "%" + e.charCodeAt(0).toString(16).toUpperCase();
};
function XT(e) {
  var t, n, r = [];
  try {
    for (var i = Rt(Object.keys(e).sort()), o = i.next(); !o.done; o = i.next()) {
      var s = o.value, a = e[s];
      if (s = Zn(s), Array.isArray(a))
        for (var u = 0, c = a.length; u < c; u++)
          r.push(s + "=" + Zn(a[u]));
      else {
        var l = s;
        (a || typeof a == "string") && (l += "=" + Zn(a)), r.push(l);
      }
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      o && !o.done && (n = i.return) && n.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r.join("&");
}
function ej(e) {
  return e === void 0 && (e = 0), new Promise(function(t, n) {
    e && setTimeout(function() {
      var r = new Error("Request did not complete within " + e + " ms");
      r.name = "TimeoutError", n(r);
    }, e);
  });
}
var tj = (
  /** @class */
  function() {
    function e(t) {
      var n = t === void 0 ? {} : t, r = n.requestTimeout;
      this.requestTimeout = r;
    }
    return e.prototype.destroy = function() {
    }, e.prototype.handle = function(t, n) {
      var r = n === void 0 ? {} : n, i = r.abortSignal, o = this.requestTimeout;
      if (i != null && i.aborted) {
        var s = new Error("Request aborted");
        return s.name = "AbortError", Promise.reject(s);
      }
      var a = t.path;
      if (t.query) {
        var u = XT(t.query);
        u && (a += "?" + u);
      }
      var c = t.port, l = t.method, f = t.protocol + "//" + t.hostname + (c ? ":" + c : "") + a, d = l === "GET" || l === "HEAD" ? void 0 : t.body, g = {
        body: d,
        headers: new Headers(t.headers),
        method: l
      };
      typeof AbortController < "u" && (g.signal = i);
      var h = new Request(f, g), p = [
        fetch(h).then(function(m) {
          var v, w, j = m.headers, N = {};
          try {
            for (var I = Rt(j.entries()), B = I.next(); !B.done; B = I.next()) {
              var z = B.value;
              N[z[0]] = z[1];
            }
          } catch ($) {
            v = { error: $ };
          } finally {
            try {
              B && !B.done && (w = I.return) && w.call(I);
            } finally {
              if (v)
                throw v.error;
            }
          }
          var W = m.body !== void 0;
          return W ? {
            response: new Ff({
              headers: N,
              statusCode: m.status,
              body: m.body
            })
          } : m.blob().then(function($) {
            return {
              response: new Ff({
                headers: N,
                statusCode: m.status,
                body: $
              })
            };
          });
        }),
        ej(o)
      ];
      return i && p.push(new Promise(function(m, v) {
        i.onabort = function() {
          var w = new Error("Request aborted");
          w.name = "AbortError", v(w);
        };
      })), Promise.race(p);
    }, e;
  }()
), ur = {}, Vr = new Array(64);
for (var ft = 0, zi = "A".charCodeAt(0), Dc = "Z".charCodeAt(0); ft + zi <= Dc; ft++) {
  var xn = String.fromCharCode(ft + zi);
  ur[xn] = ft, Vr[ft] = xn;
}
for (var ft = 0, zi = "a".charCodeAt(0), Dc = "z".charCodeAt(0); ft + zi <= Dc; ft++) {
  var xn = String.fromCharCode(ft + zi), Pi = ft + 26;
  ur[xn] = Pi, Vr[Pi] = xn;
}
for (var ft = 0; ft < 10; ft++) {
  ur[ft.toString(10)] = ft + 52;
  var xn = ft.toString(10), Pi = ft + 52;
  ur[xn] = Pi, Vr[Pi] = xn;
}
ur["+"] = 62;
Vr[62] = "+";
ur["/"] = 63;
Vr[63] = "/";
var Or = 6, wi = 8, nj = 63;
function Dp(e) {
  var t = e.length / 4 * 3;
  e.substr(-2) === "==" ? t -= 2 : e.substr(-1) === "=" && t--;
  for (var n = new ArrayBuffer(t), r = new DataView(n), i = 0; i < e.length; i += 4) {
    for (var o = 0, s = 0, a = i, u = i + 3; a <= u; a++)
      e[a] !== "=" ? (o |= ur[e[a]] << (u - a) * Or, s += Or) : o >>= Or;
    var c = i / 4 * 3;
    o >>= s % wi;
    for (var l = Math.floor(s / wi), f = 0; f < l; f++) {
      var d = (l - f - 1) * wi;
      r.setUint8(c + f, (o & 255 << d) >> d);
    }
  }
  return new Uint8Array(n);
}
function rj(e) {
  for (var t = "", n = 0; n < e.length; n += 3) {
    for (var r = 0, i = 0, o = n, s = Math.min(n + 3, e.length); o < s; o++)
      r |= e[o] << (s - o - 1) * wi, i += wi;
    var a = Math.ceil(i / Or);
    r <<= a * Or - i;
    for (var u = 1; u <= a; u++) {
      var c = (a - u) * Or;
      t += Vr[(r & nj << c) >> c];
    }
    t += "==".slice(0, 4 - a);
  }
  return t;
}
var ij = function(e) {
  return typeof Blob == "function" && e instanceof Blob ? oj(e) : sj(e);
};
function oj(e) {
  return Ne(this, void 0, void 0, function() {
    var t, n;
    return Ee(this, function(r) {
      switch (r.label) {
        case 0:
          return [4, aj(e)];
        case 1:
          return t = r.sent(), n = Dp(t), [2, new Uint8Array(n)];
      }
    });
  });
}
function sj(e) {
  return Ne(this, void 0, void 0, function() {
    var t, n, r, i, o, s, a;
    return Ee(this, function(u) {
      switch (u.label) {
        case 0:
          t = new Uint8Array(0), n = e.getReader(), r = !1, u.label = 1;
        case 1:
          return r ? [3, 3] : [4, n.read()];
        case 2:
          return i = u.sent(), o = i.done, s = i.value, s && (a = t, t = new Uint8Array(a.length + s.length), t.set(a), t.set(s, a.length)), r = o, [3, 1];
        case 3:
          return [2, t];
      }
    });
  });
}
function aj(e) {
  return new Promise(function(t, n) {
    var r = new FileReader();
    r.onloadend = function() {
      var i;
      if (r.readyState !== 2)
        return n(new Error("Reader aborted too early"));
      var o = (i = r.result) !== null && i !== void 0 ? i : "", s = o.indexOf(","), a = s > -1 ? s + 1 : o.length;
      t(o.substring(a));
    }, r.onabort = function() {
      return n(new Error("Read aborted"));
    }, r.onerror = function() {
      return n(r.error);
    }, r.readAsDataURL(e);
  });
}
var uj = function(e) {
  return function() {
    return Promise.reject(e);
  };
}, cj = function(e) {
  return function(t, n) {
    return function(r) {
      return Ne(void 0, void 0, void 0, function() {
        var i;
        return Ee(this, function(o) {
          return !((i = e == null ? void 0 : e.retryStrategy) === null || i === void 0) && i.mode && (n.userAgent = ut(n.userAgent || [], [["cfg/retry-mode", e.retryStrategy.mode]])), [2, e.retryStrategy.retry(t, r)];
        });
      });
    };
  };
}, lj = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: !0
}, fj = function(e) {
  return {
    applyToStack: function(t) {
      t.add(cj(e), lj);
    }
  };
}, dj = 100, hj = 20 * 1e3, gj = 500, pj = 500, Mj = 5, yj = 10, mj = 1, vj = "amz-sdk-invocation-id", wj = "amz-sdk-request", Dj = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
], Aj = [
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
], Ej = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"], Ij = [500, 502, 503, 504], Nj = function(e) {
  return e.$retryable !== void 0;
}, Tj = function(e) {
  return Dj.includes(e.name);
}, Ap = function(e) {
  var t, n;
  return ((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) === 429 || Aj.includes(e.name) || ((n = e.$retryable) === null || n === void 0 ? void 0 : n.throttling) == !0;
}, jj = function(e) {
  var t;
  return Ej.includes(e.name) || Ij.includes(((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) || 0);
}, Ho = {}, Yf = {
  get exports() {
    return Ho;
  },
  set exports(e) {
    Ho = e;
  }
}, Bf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (Bf) {
  var Qf = new Uint8Array(16);
  Yf.exports = function() {
    return Bf(Qf), Qf;
  };
} else {
  var $f = new Array(16);
  Yf.exports = function() {
    for (var t = 0, n; t < 16; t++)
      t & 3 || (n = Math.random() * 4294967296), $f[t] = n >>> ((t & 3) << 3) & 255;
    return $f;
  };
}
var Ep = [];
for (var fo = 0; fo < 256; ++fo)
  Ep[fo] = (fo + 256).toString(16).substr(1);
function Sj(e, t) {
  var n = t || 0, r = Ep;
  return [
    r[e[n++]],
    r[e[n++]],
    r[e[n++]],
    r[e[n++]],
    "-",
    r[e[n++]],
    r[e[n++]],
    "-",
    r[e[n++]],
    r[e[n++]],
    "-",
    r[e[n++]],
    r[e[n++]],
    "-",
    r[e[n++]],
    r[e[n++]],
    r[e[n++]],
    r[e[n++]],
    r[e[n++]],
    r[e[n++]]
  ].join("");
}
var Ip = Sj, bj = Ho, Cj = Ip, Wf, ua, ca = 0, la = 0;
function xj(e, t, n) {
  var r = t && n || 0, i = t || [];
  e = e || {};
  var o = e.node || Wf, s = e.clockseq !== void 0 ? e.clockseq : ua;
  if (o == null || s == null) {
    var a = bj();
    o == null && (o = Wf = [
      a[0] | 1,
      a[1],
      a[2],
      a[3],
      a[4],
      a[5]
    ]), s == null && (s = ua = (a[6] << 8 | a[7]) & 16383);
  }
  var u = e.msecs !== void 0 ? e.msecs : (/* @__PURE__ */ new Date()).getTime(), c = e.nsecs !== void 0 ? e.nsecs : la + 1, l = u - ca + (c - la) / 1e4;
  if (l < 0 && e.clockseq === void 0 && (s = s + 1 & 16383), (l < 0 || u > ca) && e.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ca = u, la = c, ua = s, u += 122192928e5;
  var f = ((u & 268435455) * 1e4 + c) % 4294967296;
  i[r++] = f >>> 24 & 255, i[r++] = f >>> 16 & 255, i[r++] = f >>> 8 & 255, i[r++] = f & 255;
  var d = u / 4294967296 * 1e4 & 268435455;
  i[r++] = d >>> 8 & 255, i[r++] = d & 255, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = s & 255;
  for (var g = 0; g < 6; ++g)
    i[r + g] = o[g];
  return t || Cj(i);
}
var Oj = xj, Lj = Ho, _j = Ip;
function kj(e, t, n) {
  var r = t && n || 0;
  typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
  var i = e.random || (e.rng || Lj)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
    for (var o = 0; o < 16; ++o)
      t[r + o] = i[o];
  return t || _j(i);
}
var zj = kj, Pj = Oj, Np = zj, Ac = Np;
Ac.v1 = Pj;
Ac.v4 = Np;
var Rj = Ac, Uj = function(e) {
  var t = e, n = e, r = function(a) {
    return a.name === "TimeoutError" ? yj : Mj;
  }, i = function(a) {
    return r(a) <= n;
  }, o = function(a) {
    if (!i(a))
      throw new Error("No retry token available");
    var u = r(a);
    return n -= u, u;
  }, s = function(a) {
    n += a ?? mj, n = Math.min(n, t);
  };
  return Object.freeze({
    hasRetryTokens: i,
    retrieveRetryTokens: o,
    releaseRetryTokens: s
  });
}, Fj = function(e, t) {
  return Math.floor(Math.min(hj, Math.random() * Math.pow(2, t) * e));
}, Yj = function(e) {
  return e ? Nj(e) || Tj(e) || Ap(e) || jj(e) : !1;
}, Ec = 3, Bj = "standard", Qj = (
  /** @class */
  function() {
    function e(t, n) {
      var r, i, o;
      this.maxAttemptsProvider = t, this.mode = Bj, this.retryDecider = (r = n == null ? void 0 : n.retryDecider) !== null && r !== void 0 ? r : Yj, this.delayDecider = (i = n == null ? void 0 : n.delayDecider) !== null && i !== void 0 ? i : Fj, this.retryQuota = (o = n == null ? void 0 : n.retryQuota) !== null && o !== void 0 ? o : Uj(pj);
    }
    return e.prototype.shouldRetry = function(t, n, r) {
      return n < r && this.retryDecider(t) && this.retryQuota.hasRetryTokens(t);
    }, e.prototype.getMaxAttempts = function() {
      return Ne(this, void 0, void 0, function() {
        var t;
        return Ee(this, function(n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 3]), [4, this.maxAttemptsProvider()];
            case 1:
              return t = n.sent(), [3, 3];
            case 2:
              return n.sent(), t = Ec, [3, 3];
            case 3:
              return [2, t];
          }
        });
      });
    }, e.prototype.retry = function(t, n) {
      return Ne(this, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l;
        return Ee(this, function(f) {
          switch (f.label) {
            case 0:
              return i = 0, o = 0, [4, this.getMaxAttempts()];
            case 1:
              s = f.sent(), a = n.request, Ur.isInstance(a) && (a.headers[vj] = Rj.v4()), u = function() {
                var d, g, h, p, m;
                return Ee(this, function(v) {
                  switch (v.label) {
                    case 0:
                      return v.trys.push([0, 2, , 5]), Ur.isInstance(a) && (a.headers[wj] = "attempt=" + (i + 1) + "; max=" + s), [4, t(n)];
                    case 1:
                      return d = v.sent(), g = d.response, h = d.output, c.retryQuota.releaseRetryTokens(r), h.$metadata.attempts = i + 1, h.$metadata.totalRetryDelay = o, [2, { value: { response: g, output: h } }];
                    case 2:
                      return p = v.sent(), i++, c.shouldRetry(p, i, s) ? (r = c.retryQuota.retrieveRetryTokens(p), m = c.delayDecider(Ap(p) ? gj : dj, i), o += m, [4, new Promise(function(w) {
                        return setTimeout(w, m);
                      })]) : [3, 4];
                    case 3:
                      return v.sent(), [2, "continue"];
                    case 4:
                      throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = i, p.$metadata.totalRetryDelay = o, p;
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
), $j = function(e) {
  var t = Wj(e.maxAttempts);
  return we(we({}, e), { maxAttempts: t, retryStrategy: e.retryStrategy || new Qj(t) });
}, Wj = function(e) {
  if (e === void 0 && (e = Ec), typeof e == "number") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
};
function Vj(e) {
  if (typeof e == "string") {
    for (var t = e.length, n = t - 1; n >= 0; n--) {
      var r = e.charCodeAt(n);
      r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2);
    }
    return t;
  } else {
    if (typeof e.byteLength == "number")
      return e.byteLength;
    if (typeof e.size == "number")
      return e.size;
  }
}
const Hj = {
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
}, Tp = {
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
}, mt = {
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
}, vn = {
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
  static getFirstMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 0 && r[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 1 && r[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(t, n, r) {
    if (t.test(n))
      return r;
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
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), n[0] === 10)
      switch (n[1]) {
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
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), !(n[0] === 1 && n[1] < 5)) {
      if (n[0] === 1 && n[1] < 6)
        return "Cupcake";
      if (n[0] === 1 && n[1] >= 6)
        return "Donut";
      if (n[0] === 2 && n[1] < 2)
        return "Eclair";
      if (n[0] === 2 && n[1] === 2)
        return "Froyo";
      if (n[0] === 2 && n[1] > 2)
        return "Gingerbread";
      if (n[0] === 3)
        return "Honeycomb";
      if (n[0] === 4 && n[1] < 1)
        return "Ice Cream Sandwich";
      if (n[0] === 4 && n[1] < 4)
        return "Jelly Bean";
      if (n[0] === 4 && n[1] >= 4)
        return "KitKat";
      if (n[0] === 5)
        return "Lollipop";
      if (n[0] === 6)
        return "Marshmallow";
      if (n[0] === 7)
        return "Nougat";
      if (n[0] === 8)
        return "Oreo";
      if (n[0] === 9)
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
  static compareVersions(t, n, r = !1) {
    const i = se.getVersionPrecision(t), o = se.getVersionPrecision(n);
    let s = Math.max(i, o), a = 0;
    const u = se.map([t, n], (c) => {
      const l = s - se.getVersionPrecision(c), f = c + new Array(l + 1).join(".0");
      return se.map(f.split("."), (d) => new Array(20 - d.length).join("0") + d).reverse();
    });
    for (r && (a = s - Math.min(i, o)), s -= 1; s >= a; ) {
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
  static map(t, n) {
    const r = [];
    let i;
    if (Array.prototype.map)
      return Array.prototype.map.call(t, n);
    for (i = 0; i < t.length; i += 1)
      r.push(n(t[i]));
    return r;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(t, n) {
    let r, i;
    if (Array.prototype.find)
      return Array.prototype.find.call(t, n);
    for (r = 0, i = t.length; r < i; r += 1) {
      const o = t[r];
      if (n(o, r))
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
  static assign(t, ...n) {
    const r = t;
    let i, o;
    if (Object.assign)
      return Object.assign(t, ...n);
    for (i = 0, o = n.length; i < o; i += 1) {
      const s = n[i];
      typeof s == "object" && s !== null && Object.keys(s).forEach((u) => {
        r[u] = s[u];
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
    return Hj[t];
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
    return Tp[t] || "";
  }
}
const qe = /version\/(\d+(\.?_?\d+)+)/i, qj = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(e) {
      const t = {
        name: "Googlebot"
      }, n = se.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = se.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(e) {
      const t = {
        name: "Samsung Internet for Android"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Whale/i],
    describe(e) {
      const t = {
        name: "NAVER Whale Browser"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(e) {
      const t = {
        name: "MZ Browser"
      }, n = se.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/focus/i],
    describe(e) {
      const t = {
        name: "Focus"
      }, n = se.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/swing/i],
    describe(e) {
      const t = {
        name: "Swing"
      }, n = se.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/coast/i],
    describe(e) {
      const t = {
        name: "Opera Coast"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
      const t = {
        name: "Opera Touch"
      }, n = se.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/yabrowser/i],
    describe(e) {
      const t = {
        name: "Yandex Browser"
      }, n = se.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(e) {
      const t = {
        name: "UC Browser"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(e) {
      const t = {
        name: "Maxthon"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/epiphany/i],
    describe(e) {
      const t = {
        name: "Epiphany"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/puffin/i],
    describe(e) {
      const t = {
        name: "Puffin"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sleipnir/i],
    describe(e) {
      const t = {
        name: "Sleipnir"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/k-meleon/i],
    describe(e) {
      const t = {
        name: "K-Meleon"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/micromessenger/i],
    describe(e) {
      const t = {
        name: "WeChat"
      }, n = se.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(e) {
      const t = {
        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
      }, n = se.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/msie|trident/i],
    describe(e) {
      const t = {
        name: "Internet Explorer"
      }, n = se.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/\sedg\//i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = se.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = se.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/vivaldi/i],
    describe(e) {
      const t = {
        name: "Vivaldi"
      }, n = se.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/seamonkey/i],
    describe(e) {
      const t = {
        name: "SeaMonkey"
      }, n = se.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sailfish/i],
    describe(e) {
      const t = {
        name: "Sailfish"
      }, n = se.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/silk/i],
    describe(e) {
      const t = {
        name: "Amazon Silk"
      }, n = se.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/phantom/i],
    describe(e) {
      const t = {
        name: "PhantomJS"
      }, n = se.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/slimerjs/i],
    describe(e) {
      const t = {
        name: "SlimerJS"
      }, n = se.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = {
        name: "BlackBerry"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = {
        name: "WebOS Browser"
      }, n = se.getFirstMatch(qe, e) || se.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/bada/i],
    describe(e) {
      const t = {
        name: "Bada"
      }, n = se.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/tizen/i],
    describe(e) {
      const t = {
        name: "Tizen"
      }, n = se.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qupzilla/i],
    describe(e) {
      const t = {
        name: "QupZilla"
      }, n = se.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
      const t = {
        name: "Firefox"
      }, n = se.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/electron/i],
    describe(e) {
      const t = {
        name: "Electron"
      }, n = se.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(e) {
      const t = {
        name: "Miui"
      }, n = se.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chromium/i],
    describe(e) {
      const t = {
        name: "Chromium"
      }, n = se.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(e) {
      const t = {
        name: "Chrome"
      }, n = se.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/GSA/i],
    describe(e) {
      const t = {
        name: "Google Search"
      }, n = se.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Android Browser */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = {
        name: "Android Browser"
      }, n = se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(e) {
      const t = {
        name: "PlayStation 4"
      }, n = se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(e) {
      const t = {
        name: "Safari"
      }, n = se.getFirstMatch(qe, e);
      return n && (t.version = n), t;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(e) {
      const t = /^(.*)\/(.*) /, n = /^(.*)\/(.*)[ \t]\((.*)/, i = e.search("\\(") !== -1 ? n : t;
      return {
        name: se.getFirstMatch(i, e),
        version: se.getSecondMatch(i, e)
      };
    }
  }
], Kj = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(e) {
      const t = se.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
      return {
        name: mt.Roku,
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
        name: mt.WindowsPhone,
        version: t
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(e) {
      const t = se.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), n = se.getWindowsVersionName(t);
      return {
        name: mt.Windows,
        version: t,
        versionName: n
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
      const t = {
        name: mt.iOS
      }, n = se.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
      return n && (t.version = n), t;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(e) {
      const t = se.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), n = se.getMacOSVersionName(t), r = {
        name: mt.MacOS,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
      const t = se.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
      return {
        name: mt.iOS,
        version: t
      };
    }
  },
  /* Android */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = se.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), n = se.getAndroidVersionName(t), r = {
        name: mt.Android,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = se.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), n = {
        name: mt.WebOS
      };
      return t && t.length && (n.version = t), n;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = se.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || se.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || se.getFirstMatch(/\bbb(\d+)/i, e);
      return {
        name: mt.BlackBerry,
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
        name: mt.Bada,
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
        name: mt.Tizen,
        version: t
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: mt.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: mt.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(e) {
      const t = se.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: mt.PlayStation4,
        version: t
      };
    }
  }
], Gj = [
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
      const t = se.getFirstMatch(/(can-l01)/i, e) && "Nova", n = {
        type: rt.mobile,
        vendor: "Huawei"
      };
      return t && (n.model = t), n;
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
      const t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
      return t && !n;
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
], Jj = [
  /* EdgeHTML */
  {
    test(e) {
      return e.getBrowserName(!0) === "microsoft edge";
    },
    describe(e) {
      if (/\sedg\//i.test(e))
        return {
          name: vn.Blink
        };
      const n = se.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: vn.EdgeHTML,
        version: n
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(e) {
      const t = {
        name: vn.Trident
      }, n = se.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Presto */
  {
    test(e) {
      return e.test(/presto/i);
    },
    describe(e) {
      const t = {
        name: vn.Presto
      }, n = se.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Gecko */
  {
    test(e) {
      const t = e.test(/gecko/i), n = e.test(/like gecko/i);
      return t && !n;
    },
    describe(e) {
      const t = {
        name: vn.Gecko
      }, n = se.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: vn.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
        name: vn.WebKit
      }, n = se.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }
];
class Vf {
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
  constructor(t, n = !1) {
    if (t == null || t === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, n !== !0 && this.parse();
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
    const t = se.find(qj, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
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
    const t = se.find(Kj, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
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
    const { name: n } = this.getOS();
    return t ? String(n).toLowerCase() || "" : n || "";
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
    const { type: n } = this.getPlatform();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = se.find(Gj, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
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
    const t = se.find(Jj, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
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
    const n = {};
    let r = 0;
    const i = {};
    let o = 0;
    if (Object.keys(t).forEach((a) => {
      const u = t[a];
      typeof u == "string" ? (i[a] = u, o += 1) : typeof u == "object" && (n[a] = u, r += 1);
    }), r > 0) {
      const a = Object.keys(n), u = se.find(a, (l) => this.isOS(l));
      if (u) {
        const l = this.satisfies(n[u]);
        if (l !== void 0)
          return l;
      }
      const c = se.find(
        a,
        (l) => this.isPlatform(l)
      );
      if (c) {
        const l = this.satisfies(n[c]);
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
  isBrowser(t, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const o = se.getBrowserTypeByAlias(i);
    return n && o && (i = o.toLowerCase()), i === r;
  }
  compareVersion(t) {
    let n = [0], r = t, i = !1;
    const o = this.getBrowserVersion();
    if (typeof o == "string")
      return t[0] === ">" || t[0] === "<" ? (r = t.substr(1), t[1] === "=" ? (i = !0, r = t.substr(2)) : n = [], t[0] === ">" ? n.push(1) : n.push(-1)) : t[0] === "=" ? r = t.substr(1) : t[0] === "~" && (i = !0, r = t.substr(1)), n.indexOf(
        se.compareVersions(o, r, i)
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
  is(t, n = !1) {
    return this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(t = []) {
    return t.some((n) => this.is(n));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Zj {
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
  static getParser(t, n = !1) {
    if (typeof t != "string")
      throw new Error("UserAgent should be a string");
    return new Vf(t, n);
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
    return new Vf(t).getResult();
  }
  static get BROWSER_MAP() {
    return Tp;
  }
  static get ENGINE_MAP() {
    return vn;
  }
  static get OS_MAP() {
    return mt;
  }
  static get PLATFORMS_MAP() {
    return rt;
  }
}
var Xj = function(e) {
  var t = e.serviceId, n = e.clientVersion;
  return function() {
    return Ne(void 0, void 0, void 0, function() {
      var r, i, o, s, a, u, c, l, f;
      return Ee(this, function(d) {
        return r = !((o = window == null ? void 0 : window.navigator) === null || o === void 0) && o.userAgent ? Zj.parse(window.navigator.userAgent) : void 0, i = [
          // sdk-metadata
          ["aws-sdk-js", n],
          // os-metadata
          ["os/" + (((s = r == null ? void 0 : r.os) === null || s === void 0 ? void 0 : s.name) || "other"), (a = r == null ? void 0 : r.os) === null || a === void 0 ? void 0 : a.version],
          // language-metadata
          // ECMAScript edition doesn't matter in JS.
          ["lang/js"],
          // browser vendor and version.
          ["md/browser", ((c = (u = r == null ? void 0 : r.browser) === null || u === void 0 ? void 0 : u.name) !== null && c !== void 0 ? c : "unknown") + "_" + ((f = (l = r == null ? void 0 : r.browser) === null || l === void 0 ? void 0 : l.version) !== null && f !== void 0 ? f : "unknown")]
        ], t && i.push(["api/" + t, n]), [2, i];
      });
    });
  };
};
function eS(e) {
  var t, n, r = {};
  if (e = e.replace(/^\?/, ""), e)
    try {
      for (var i = Rt(e.split("&")), o = i.next(); !o.done; o = i.next()) {
        var s = o.value, a = cr(s.split("="), 2), u = a[0], c = a[1], l = c === void 0 ? null : c;
        u = decodeURIComponent(u), l && (l = decodeURIComponent(l)), u in r ? Array.isArray(r[u]) ? r[u].push(l) : r[u] = [r[u], l] : r[u] = l;
      }
    } catch (f) {
      t = { error: f };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
  return r;
}
var tS = function(e) {
  var t = new URL(e), n = t.hostname, r = t.pathname, i = t.port, o = t.protocol, s = t.search, a;
  return s && (a = eS(s)), {
    hostname: n,
    port: i ? parseInt(i) : void 0,
    protocol: o,
    path: r,
    query: a
  };
}, nS = function(e) {
  var t;
  return we(we({}, e), { tls: (t = e.tls) !== null && t !== void 0 ? t : !0, endpoint: e.endpoint ? rS(e) : function() {
    return iS(e);
  }, isCustomEndpoint: !!e.endpoint });
}, rS = function(e) {
  var t = e.endpoint, n = e.urlParser;
  if (typeof t == "string") {
    var r = Promise.resolve(n(t));
    return function() {
      return r;
    };
  } else if (typeof t == "object") {
    var i = Promise.resolve(t);
    return function() {
      return i;
    };
  }
  return t;
}, iS = function(e) {
  return Ne(void 0, void 0, void 0, function() {
    var t, n, r, i, o, s;
    return Ee(this, function(a) {
      switch (a.label) {
        case 0:
          return t = e.tls, n = t === void 0 ? !0 : t, [4, e.region()];
        case 1:
          if (r = a.sent(), i = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/), !i.test(r))
            throw new Error("Invalid region in client config");
          return [4, e.regionInfoProvider(r)];
        case 2:
          if (o = ((s = a.sent()) !== null && s !== void 0 ? s : {}).hostname, !o)
            throw new Error("Cannot resolve hostname from client config");
          return [2, e.urlParser((n ? "https:" : "http:") + "//" + o)];
      }
    });
  });
}, oS = function(e) {
  if (!e.region)
    throw new Error("Region is missing");
  return we(we({}, e), { region: sS(e.region) });
}, sS = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}, Hf = "content-length";
function aS(e) {
  var t = this;
  return function(n) {
    return function(r) {
      return Ne(t, void 0, void 0, function() {
        var i, o, s, a, u;
        return Ee(this, function(c) {
          return i = r.request, Ur.isInstance(i) && (o = i.body, s = i.headers, o && Object.keys(s).map(function(l) {
            return l.toLowerCase();
          }).indexOf(Hf) === -1 && (a = e(o), a !== void 0 && (i.headers = we(we({}, i.headers), (u = {}, u[Hf] = String(a), u))))), [2, n(we(we({}, r), { request: i }))];
        });
      });
    };
  };
}
var uS = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: !0
}, cS = function(e) {
  return {
    applyToStack: function(t) {
      t.add(aS(e.bodyLengthChecker), uS);
    }
  };
};
var lS = function(e) {
  return function(t) {
    return function(n) {
      return Ne(void 0, void 0, void 0, function() {
        var r, i, o;
        return Ee(this, function(s) {
          return Ur.isInstance(n.request) ? (r = n.request, i = (e.requestHandler.metadata || {}).handlerProtocol, o = i === void 0 ? "" : i, o.indexOf("h2") >= 0 && !r.headers[":authority"] ? (delete r.headers.host, r.headers[":authority"] = "") : r.headers.host || (r.headers.host = r.hostname), [2, t(n)]) : [2, t(n)];
        });
      });
    };
  };
}, fS = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: !0
}, dS = function(e) {
  return {
    applyToStack: function(t) {
      t.add(lS(e), fS);
    }
  };
}, hS = function() {
  return function(e, t) {
    return function(n) {
      return Ne(void 0, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l, f;
        return Ee(this, function(d) {
          switch (d.label) {
            case 0:
              return r = t.clientName, i = t.commandName, o = t.inputFilterSensitiveLog, s = t.logger, a = t.outputFilterSensitiveLog, [4, e(n)];
            case 1:
              return u = d.sent(), s ? (typeof s.info == "function" && (c = u.output, l = c.$metadata, f = cp(c, ["$metadata"]), s.info({
                clientName: r,
                commandName: i,
                input: o(n.input),
                output: a(f),
                metadata: l
              })), [2, u]) : [2, u];
          }
        });
      });
    };
  };
}, gS = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: !0
}, pS = function(e) {
  return {
    applyToStack: function(t) {
      t.add(hS(), gS);
    }
  };
}, MS = "X-Amz-Algorithm", yS = "X-Amz-Credential", jp = "X-Amz-Date", mS = "X-Amz-SignedHeaders", vS = "X-Amz-Expires", Sp = "X-Amz-Signature", bp = "X-Amz-Security-Token", Cp = "authorization", xp = jp.toLowerCase(), wS = "date", DS = [Cp, xp, wS], AS = Sp.toLowerCase(), gu = "x-amz-content-sha256", ES = bp.toLowerCase(), IS = {
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
}, NS = /^proxy-/, TS = /^sec-/, fa = "AWS4-HMAC-SHA256", jS = "AWS4-HMAC-SHA256-PAYLOAD", SS = "UNSIGNED-PAYLOAD", bS = 50, Op = "aws4_request", CS = 60 * 60 * 24 * 7, ho = {}, da = [];
function ha(e, t, n) {
  return e + "/" + t + "/" + n + "/" + Op;
}
var xS = function(e, t, n, r, i) {
  return Ne(void 0, void 0, void 0, function() {
    var o, s, a, u, c, l, f, d, g;
    return Ee(this, function(h) {
      switch (h.label) {
        case 0:
          return [4, qf(e, t.secretAccessKey, t.accessKeyId)];
        case 1:
          if (o = h.sent(), s = n + ":" + r + ":" + i + ":" + Sr(o) + ":" + t.sessionToken, s in ho)
            return [2, ho[s]];
          for (da.push(s); da.length > bS; )
            delete ho[da.shift()];
          a = "AWS4" + t.secretAccessKey, h.label = 2;
        case 2:
          h.trys.push([2, 7, 8, 9]), u = Rt([n, r, i, Op]), c = u.next(), h.label = 3;
        case 3:
          return c.done ? [3, 6] : (l = c.value, [4, qf(e, a, l)]);
        case 4:
          a = h.sent(), h.label = 5;
        case 5:
          return c = u.next(), [3, 3];
        case 6:
          return [3, 9];
        case 7:
          return f = h.sent(), d = { error: f }, [3, 9];
        case 8:
          try {
            c && !c.done && (g = u.return) && g.call(u);
          } finally {
            if (d)
              throw d.error;
          }
          return [
            7
            /*endfinally*/
          ];
        case 9:
          return [2, ho[s] = a];
      }
    });
  });
};
function qf(e, t, n) {
  var r = new e(t);
  return r.update(n), r.digest();
}
function Kf(e, t, n) {
  var r, i, o = e.headers, s = {};
  try {
    for (var a = Rt(Object.keys(o).sort()), u = a.next(); !u.done; u = a.next()) {
      var c = u.value, l = c.toLowerCase();
      (l in IS || t != null && t.has(l) || NS.test(l) || TS.test(l)) && (!n || n && !n.has(l)) || (s[l] = o[c].trim().replace(/\s+/g, " "));
    }
  } catch (f) {
    r = { error: f };
  } finally {
    try {
      u && !u.done && (i = a.return) && i.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return s;
}
function OS(e) {
  var t, n, r = e.query, i = r === void 0 ? {} : r, o = [], s = {}, a = function(f) {
    if (f.toLowerCase() === AS)
      return "continue";
    o.push(f);
    var d = i[f];
    typeof d == "string" ? s[f] = Zn(f) + "=" + Zn(d) : Array.isArray(d) && (s[f] = d.slice(0).sort().reduce(function(g, h) {
      return g.concat([Zn(f) + "=" + Zn(h)]);
    }, []).join("&"));
  };
  try {
    for (var u = Rt(Object.keys(i).sort()), c = u.next(); !c.done; c = u.next()) {
      var l = c.value;
      a(l);
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      c && !c.done && (n = u.return) && n.call(u);
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
var LS = function(e) {
  return typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
};
function ga(e, t) {
  var n = e.headers, r = e.body;
  return Ne(this, void 0, void 0, function() {
    var i, o, s, a, u, c, l;
    return Ee(this, function(f) {
      switch (f.label) {
        case 0:
          try {
            for (i = Rt(Object.keys(n)), o = i.next(); !o.done; o = i.next())
              if (s = o.value, s.toLowerCase() === gu)
                return [2, n[s]];
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
          return r != null ? [3, 1] : [2, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
        case 1:
          return typeof r == "string" || ArrayBuffer.isView(r) || LS(r) ? (a = new t(), a.update(r), u = Sr, [4, a.digest()]) : [3, 3];
        case 2:
          return [2, u.apply(void 0, [f.sent()])];
        case 3:
          return [2, SS];
      }
    });
  });
}
function _S(e, t) {
  var n, r;
  e = e.toLowerCase();
  try {
    for (var i = Rt(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
      var s = o.value;
      if (e === s.toLowerCase())
        return !0;
    }
  } catch (a) {
    n = { error: a };
  } finally {
    try {
      o && !o.done && (r = i.return) && r.call(i);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return !1;
}
function Lp(e) {
  var t = e.headers, n = e.query, r = cp(e, ["headers", "query"]);
  return we(we({}, r), { headers: we({}, t), query: n ? kS(n) : void 0 });
}
function kS(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r, i = e[n];
    return we(we({}, t), (r = {}, r[n] = Array.isArray(i) ? ut(i) : i, r));
  }, {});
}
function zS(e, t) {
  var n, r, i;
  t === void 0 && (t = {});
  var o = typeof e.clone == "function" ? e.clone() : Lp(e), s = o.headers, a = o.query, u = a === void 0 ? {} : a;
  try {
    for (var c = Rt(Object.keys(s)), l = c.next(); !l.done; l = c.next()) {
      var f = l.value, d = f.toLowerCase();
      d.substr(0, 6) === "x-amz-" && !(!((i = t.unhoistableHeaders) === null || i === void 0) && i.has(d)) && (u[f] = s[f], delete s[f]);
    }
  } catch (g) {
    n = { error: g };
  } finally {
    try {
      l && !l.done && (r = c.return) && r.call(c);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return we(we({}, e), {
    headers: s,
    query: u
  });
}
function Gf(e) {
  var t, n;
  e = typeof e.clone == "function" ? e.clone() : Lp(e);
  try {
    for (var r = Rt(Object.keys(e.headers)), i = r.next(); !i.done; i = r.next()) {
      var o = i.value;
      DS.indexOf(o.toLowerCase()) > -1 && delete e.headers[o];
    }
  } catch (s) {
    t = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return e;
}
function PS(e) {
  return RS(e).toISOString().replace(/\.\d{3}Z$/, "Z");
}
function RS(e) {
  return typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
}
var US = (
  /** @class */
  function() {
    function e(t) {
      var n = t.applyChecksum, r = t.credentials, i = t.region, o = t.service, s = t.sha256, a = t.uriEscapePath, u = a === void 0 ? !0 : a;
      this.service = o, this.sha256 = s, this.uriEscapePath = u, this.applyChecksum = typeof n == "boolean" ? n : !0, this.regionProvider = FS(i), this.credentialProvider = YS(r);
    }
    return e.prototype.presign = function(t, n) {
      return n === void 0 && (n = {}), Ne(this, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l, f, d, g, h, p, m, v, w, j, N, I, B, z, W, $, b;
        return Ee(this, function(k) {
          switch (k.label) {
            case 0:
              return r = n.signingDate, i = r === void 0 ? /* @__PURE__ */ new Date() : r, o = n.expiresIn, s = o === void 0 ? 3600 : o, a = n.unsignableHeaders, u = n.unhoistableHeaders, c = n.signableHeaders, l = n.signingRegion, f = n.signingService, [4, this.credentialProvider()];
            case 1:
              return d = k.sent(), l == null ? [3, 2] : (h = l, [3, 4]);
            case 2:
              return [4, this.regionProvider()];
            case 3:
              h = k.sent(), k.label = 4;
            case 4:
              return g = h, p = go(i), m = p.longDate, v = p.shortDate, s > CS ? [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")] : (w = ha(v, g, f ?? this.service), j = zS(Gf(t), { unhoistableHeaders: u }), d.sessionToken && (j.query[bp] = d.sessionToken), j.query[MS] = fa, j.query[yS] = d.accessKeyId + "/" + w, j.query[jp] = m, j.query[vS] = s.toString(10), N = Kf(j, a, c), j.query[mS] = Jf(N), I = j.query, B = Sp, z = this.getSignature, W = [
                m,
                w,
                this.getSigningKey(d, g, v, f)
              ], $ = this.createCanonicalRequest, b = [j, N], [4, ga(t, this.sha256)]);
            case 5:
              return [4, z.apply(this, W.concat([$.apply(this, b.concat([k.sent()]))]))];
            case 6:
              return I[B] = k.sent(), [2, j];
          }
        });
      });
    }, e.prototype.sign = function(t, n) {
      return Ne(this, void 0, void 0, function() {
        return Ee(this, function(r) {
          return typeof t == "string" ? [2, this.signString(t, n)] : t.headers && t.payload ? [2, this.signEvent(t, n)] : [2, this.signRequest(t, n)];
        });
      });
    }, e.prototype.signEvent = function(t, n) {
      var r = t.headers, i = t.payload, o = n.signingDate, s = o === void 0 ? /* @__PURE__ */ new Date() : o, a = n.priorSignature, u = n.signingRegion, c = n.signingService;
      return Ne(this, void 0, void 0, function() {
        var l, f, d, g, h, p, m, v, w, j, N;
        return Ee(this, function(I) {
          switch (I.label) {
            case 0:
              return u == null ? [3, 1] : (f = u, [3, 3]);
            case 1:
              return [4, this.regionProvider()];
            case 2:
              f = I.sent(), I.label = 3;
            case 3:
              return l = f, d = go(s), g = d.shortDate, h = d.longDate, p = ha(g, l, c ?? this.service), [4, ga({ headers: {}, body: i }, this.sha256)];
            case 4:
              return m = I.sent(), v = new this.sha256(), v.update(r), j = Sr, [4, v.digest()];
            case 5:
              return w = j.apply(void 0, [I.sent()]), N = [
                jS,
                h,
                p,
                a,
                w,
                m
              ].join(`
`), [2, this.signString(N, { signingDate: s, signingRegion: l, signingService: c })];
          }
        });
      });
    }, e.prototype.signString = function(t, n) {
      var r = n === void 0 ? {} : n, i = r.signingDate, o = i === void 0 ? /* @__PURE__ */ new Date() : i, s = r.signingRegion, a = r.signingService;
      return Ne(this, void 0, void 0, function() {
        var u, c, l, f, d, g, h, p;
        return Ee(this, function(m) {
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
              return c = l, f = go(o).shortDate, h = (g = this.sha256).bind, [4, this.getSigningKey(u, c, f, a)];
            case 5:
              return d = new (h.apply(g, [void 0, m.sent()]))(), d.update(t), p = Sr, [4, d.digest()];
            case 6:
              return [2, p.apply(void 0, [m.sent()])];
          }
        });
      });
    }, e.prototype.signRequest = function(t, n) {
      var r = n === void 0 ? {} : n, i = r.signingDate, o = i === void 0 ? /* @__PURE__ */ new Date() : i, s = r.signableHeaders, a = r.unsignableHeaders, u = r.signingRegion, c = r.signingService;
      return Ne(this, void 0, void 0, function() {
        var l, f, d, g, h, p, m, v, w, j, N;
        return Ee(this, function(I) {
          switch (I.label) {
            case 0:
              return [4, this.credentialProvider()];
            case 1:
              return l = I.sent(), u == null ? [3, 2] : (d = u, [3, 4]);
            case 2:
              return [4, this.regionProvider()];
            case 3:
              d = I.sent(), I.label = 4;
            case 4:
              return f = d, g = Gf(t), h = go(o), p = h.longDate, m = h.shortDate, v = ha(m, f, c ?? this.service), g.headers[xp] = p, l.sessionToken && (g.headers[ES] = l.sessionToken), [4, ga(g, this.sha256)];
            case 5:
              return w = I.sent(), !_S(gu, g.headers) && this.applyChecksum && (g.headers[gu] = w), j = Kf(g, a, s), [4, this.getSignature(p, v, this.getSigningKey(l, f, m, c), this.createCanonicalRequest(g, j, w))];
            case 6:
              return N = I.sent(), g.headers[Cp] = fa + " " + ("Credential=" + l.accessKeyId + "/" + v + ", ") + ("SignedHeaders=" + Jf(j) + ", ") + ("Signature=" + N), [2, g];
          }
        });
      });
    }, e.prototype.createCanonicalRequest = function(t, n, r) {
      var i = Object.keys(n).sort();
      return t.method + `
` + this.getCanonicalPath(t) + `
` + OS(t) + `
` + i.map(function(o) {
        return o + ":" + n[o];
      }).join(`
`) + `

` + i.join(";") + `
` + r;
    }, e.prototype.createStringToSign = function(t, n, r) {
      return Ne(this, void 0, void 0, function() {
        var i, o;
        return Ee(this, function(s) {
          switch (s.label) {
            case 0:
              return i = new this.sha256(), i.update(r), [4, i.digest()];
            case 1:
              return o = s.sent(), [2, fa + `
` + t + `
` + n + `
` + Sr(o)];
          }
        });
      });
    }, e.prototype.getCanonicalPath = function(t) {
      var n = t.path;
      if (this.uriEscapePath) {
        var r = encodeURIComponent(n.replace(/^\//, ""));
        return "/" + r.replace(/%2F/g, "/");
      }
      return n;
    }, e.prototype.getSignature = function(t, n, r, i) {
      return Ne(this, void 0, void 0, function() {
        var o, s, a, u, c;
        return Ee(this, function(l) {
          switch (l.label) {
            case 0:
              return [4, this.createStringToSign(t, n, i)];
            case 1:
              return o = l.sent(), u = (a = this.sha256).bind, [4, r];
            case 2:
              return s = new (u.apply(a, [void 0, l.sent()]))(), s.update(o), c = Sr, [4, s.digest()];
            case 3:
              return [2, c.apply(void 0, [l.sent()])];
          }
        });
      });
    }, e.prototype.getSigningKey = function(t, n, r, i) {
      return xS(this.sha256, t, r, n, i || this.service);
    }, e;
  }()
), go = function(e) {
  var t = PS(e).replace(/[\-:]/g, "");
  return {
    longDate: t,
    shortDate: t.substr(0, 8)
  };
}, Jf = function(e) {
  return Object.keys(e).sort().join(";");
}, FS = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
}, YS = function(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
};
function BS(e) {
  var t = this, n = e.credentials || e.credentialDefaultProvider(e), r = pa(n), i = e.signingEscapePath, o = i === void 0 ? !0 : i, s = e.systemClockOffset, a = s === void 0 ? e.systemClockOffset || 0 : s, u = e.sha256, c;
  return e.signer ? c = pa(e.signer) : c = function() {
    return pa(e.region)().then(function(l) {
      return Ne(t, void 0, void 0, function() {
        return Ee(this, function(f) {
          switch (f.label) {
            case 0:
              return [4, e.regionInfoProvider(l)];
            case 1:
              return [2, [f.sent() || {}, l]];
          }
        });
      });
    }).then(function(l) {
      var f = cr(l, 2), d = f[0], g = f[1], h = d.signingRegion, p = d.signingService;
      return e.signingRegion = e.signingRegion || h || g, e.signingName = e.signingName || p || e.serviceId, new US({
        credentials: r,
        region: e.signingRegion,
        service: e.signingName,
        sha256: u,
        uriEscapePath: o
      });
    });
  }, we(we({}, e), {
    systemClockOffset: a,
    signingEscapePath: o,
    credentials: r,
    signer: c
  });
}
function pa(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}
function QS(e) {
  return we(we({}, e), { customUserAgent: typeof e.customUserAgent == "string" ? [[e.customUserAgent]] : e.customUserAgent });
}
var Ma = "user-agent", $S = "x-amz-user-agent", Zf = " ", WS = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g, VS = function(e) {
  return function(t, n) {
    return function(r) {
      return Ne(void 0, void 0, void 0, function() {
        var i, o, s, a, u, c, l, f;
        return Ee(this, function(d) {
          switch (d.label) {
            case 0:
              return i = r.request, Ur.isInstance(i) ? (o = i.headers, s = ((l = n == null ? void 0 : n.userAgent) === null || l === void 0 ? void 0 : l.map(ya)) || [], [4, e.defaultUserAgentProvider()]) : [2, t(r)];
            case 1:
              return a = d.sent().map(ya), u = ((f = e == null ? void 0 : e.customUserAgent) === null || f === void 0 ? void 0 : f.map(ya)) || [], o[$S] = ut(a, s, u).join(Zf), c = ut(a.filter(function(g) {
                return g.startsWith("aws-sdk-");
              }), u).join(Zf), e.runtime !== "browser" && c && (o[Ma] = o[Ma] ? o[Ma] + " " + c : c), [2, t(we(we({}, r), { request: i }))];
          }
        });
      });
    };
  };
}, ya = function(e) {
  var t = cr(e, 2), n = t[0], r = t[1], i = n.indexOf("/"), o = n.substring(0, i), s = n.substring(i + 1);
  return o === "api" && (s = s.toLowerCase()), [o, s, r].filter(function(a) {
    return a && a.length > 0;
  }).map(function(a) {
    return a == null ? void 0 : a.replace(WS, "_");
  }).join("/");
}, HS = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: !0
}, qS = function(e) {
  return {
    applyToStack: function(t) {
      t.add(VS(e), HS);
    }
  };
}, qo = function() {
  var e = [], t = [], n = /* @__PURE__ */ new Set(), r = function(l) {
    return l.sort(function(f, d) {
      return Xf[d.step] - Xf[f.step] || ed[d.priority || "normal"] - ed[f.priority || "normal"];
    });
  }, i = function(l) {
    var f = !1, d = function(g) {
      return g.name && g.name === l ? (f = !0, n.delete(l), !1) : !0;
    };
    return e = e.filter(d), t = t.filter(d), f;
  }, o = function(l) {
    var f = !1, d = function(g) {
      return g.middleware === l ? (f = !0, g.name && n.delete(g.name), !1) : !0;
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
      d.before.length === 0 && d.after.length === 0 ? f.push(d) : f.push.apply(f, ut(a(d)));
    }), f.push(l), l.after.reverse().forEach(function(d) {
      d.before.length === 0 && d.after.length === 0 ? f.push(d) : f.push.apply(f, ut(a(d)));
    }), f;
  }, u = function() {
    var l = [], f = [], d = {};
    e.forEach(function(h) {
      var p = we(we({}, h), { before: [], after: [] });
      p.name && (d[p.name] = p), l.push(p);
    }), t.forEach(function(h) {
      var p = we(we({}, h), { before: [], after: [] });
      p.name && (d[p.name] = p), f.push(p);
    }), f.forEach(function(h) {
      if (h.toMiddleware) {
        var p = d[h.toMiddleware];
        if (p === void 0)
          throw new Error(h.toMiddleware + " is not found when adding " + (h.name || "anonymous") + " middleware " + h.relation + " " + h.toMiddleware);
        h.relation === "after" && p.after.push(h), h.relation === "before" && p.before.push(h);
      }
    });
    var g = r(l).map(a).reduce(function(h, p) {
      return h.push.apply(h, ut(p)), h;
    }, []);
    return g.map(function(h) {
      return h.middleware;
    });
  }, c = {
    add: function(l, f) {
      f === void 0 && (f = {});
      var d = f.name, g = f.override, h = we({ step: "initialize", priority: "normal", middleware: l }, f);
      if (d) {
        if (n.has(d)) {
          if (!g)
            throw new Error("Duplicate middleware name '" + d + "'");
          var p = e.findIndex(function(v) {
            return v.name === d;
          }), m = e[p];
          if (m.step !== h.step || m.priority !== h.priority)
            throw new Error('"' + d + '" middleware with ' + m.priority + " priority in " + m.step + " step cannot be " + ("overridden by same-name middleware with " + h.priority + " priority in " + h.step + " step."));
          e.splice(p, 1);
        }
        n.add(d);
      }
      e.push(h);
    },
    addRelativeTo: function(l, f) {
      var d = f.name, g = f.override, h = we({ middleware: l }, f);
      if (d) {
        if (n.has(d)) {
          if (!g)
            throw new Error("Duplicate middleware name '" + d + "'");
          var p = t.findIndex(function(v) {
            return v.name === d;
          }), m = t[p];
          if (m.toMiddleware !== h.toMiddleware || m.relation !== h.relation)
            throw new Error('"' + d + '" middleware ' + m.relation + ' "' + m.toMiddleware + '" middleware cannot be overridden ' + ("by same-name middleware " + h.relation + ' "' + h.toMiddleware + '" middleware.'));
          t.splice(p, 1);
        }
        n.add(d);
      }
      t.push(h);
    },
    clone: function() {
      return s(qo());
    },
    use: function(l) {
      l.applyToStack(c);
    },
    remove: function(l) {
      return typeof l == "string" ? i(l) : o(l);
    },
    removeByTag: function(l) {
      var f = !1, d = function(g) {
        var h = g.tags, p = g.name;
        return h && h.includes(l) ? (p && n.delete(p), f = !0, !1) : !0;
      };
      return e = e.filter(d), t = t.filter(d), f;
    },
    concat: function(l) {
      var f = s(qo());
      return f.use(l), f;
    },
    applyToStack: s,
    resolve: function(l, f) {
      var d, g;
      try {
        for (var h = Rt(u().reverse()), p = h.next(); !p.done; p = h.next()) {
          var m = p.value;
          l = m(l, f);
        }
      } catch (v) {
        d = { error: v };
      } finally {
        try {
          p && !p.done && (g = h.return) && g.call(h);
        } finally {
          if (d)
            throw d.error;
        }
      }
      return l;
    }
  };
  return c;
}, Xf = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
}, ed = {
  high: 3,
  normal: 2,
  low: 1
}, KS = (
  /** @class */
  function() {
    function e(t) {
      this.middlewareStack = qo(), this.config = t;
    }
    return e.prototype.send = function(t, n, r) {
      var i = typeof n != "function" ? n : void 0, o = typeof n == "function" ? n : r, s = t.resolveMiddleware(this.middlewareStack, this.config, i);
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
), _p = (
  /** @class */
  function() {
    function e() {
      this.middlewareStack = qo();
    }
    return e;
  }()
), Ko = function() {
  var e = Object.getPrototypeOf(this).constructor, t = Function.bind.apply(String, ut([null], arguments)), n = new t();
  return Object.setPrototypeOf(n, e.prototype), n;
};
Ko.prototype = Object.create(String.prototype, {
  constructor: {
    value: Ko,
    enumerable: !1,
    writable: !0,
    configurable: !0
  }
});
Object.setPrototypeOf(Ko, String);
(function(e) {
  pc(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.deserializeJSON = function() {
    return JSON.parse(e.prototype.toString.call(this));
  }, t.prototype.toJSON = function() {
    return e.prototype.toString.call(this);
  }, t.fromObject = function(n) {
    return n instanceof t ? n : n instanceof String || typeof n == "string" ? new t(n) : new t(JSON.stringify(n));
  }, t;
})(Ko);
var GS = function(e, t) {
  return function(n, r) {
    return function(i) {
      return Ne(void 0, void 0, void 0, function() {
        var o, s;
        return Ee(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, n(i)];
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
}, JS = function(e, t) {
  return function(n, r) {
    return function(i) {
      return Ne(void 0, void 0, void 0, function() {
        var o;
        return Ee(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, t(i.input, e)];
            case 1:
              return o = s.sent(), [2, n(we(we({}, i), { request: o }))];
          }
        });
      });
    };
  };
}, ZS = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: !0
}, XS = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: !0
};
function kp(e, t, n) {
  return {
    applyToStack: function(r) {
      r.add(GS(e, n), ZS), r.add(JS(e, t), XS);
    }
  };
}
var An = new Ht("CognitoCredentials"), eb = new Promise(function(e, t) {
  if (!gn().isBrowser)
    return An.debug("not in the browser, directly resolved"), e();
  var n = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null;
  if (n)
    return An.debug("google api already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), tb = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
    }
    return e.prototype.refreshGoogleToken = function() {
      return Ne(this, void 0, void 0, function() {
        return Ee(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (An.debug("need to wait for the Google SDK loaded"), [4, eb]);
            case 1:
              t.sent(), this.initialized = !0, An.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshGoogleTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshGoogleTokenImpl = function() {
      var t = null;
      return gn().isBrowser && (t = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), t ? new Promise(function(n, r) {
        t.getAuthInstance().then(function(i) {
          i || (An.debug("google Auth undefined"), r(new Jn("google Auth undefined")));
          var o = i.currentUser.get();
          o.isSignedIn() ? (An.debug("refreshing the google access token"), o.reloadAuthResponse().then(function(s) {
            var a = s.id_token, u = s.expires_at;
            n({ token: a, expires_at: u });
          }).catch(function(s) {
            s && s.error === "network_error" ? r("Network error reloading google auth response") : r(new Jn("Failed to reload google auth response"));
          })) : r(new Jn("User is not signed in with Google"));
        }).catch(function(i) {
          An.debug("Failed to refresh google token", i), r(new Jn("Failed to refresh google token"));
        });
      }) : (An.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
    }, e;
  }()
), Wn = new Ht("CognitoCredentials"), nb = new Promise(function(e, t) {
  if (!gn().isBrowser)
    return Wn.debug("not in the browser, directly resolved"), e();
  var n = window.FB;
  if (n)
    return Wn.debug("FB SDK already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), rb = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    return e.prototype.refreshFacebookToken = function() {
      return Ne(this, void 0, void 0, function() {
        return Ee(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (Wn.debug("need to wait for the Facebook SDK loaded"), [4, nb]);
            case 1:
              t.sent(), this.initialized = !0, Wn.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshFacebookTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshFacebookTokenImpl = function() {
      var t = null;
      if (gn().isBrowser && (t = window.FB), !t) {
        var n = "no fb sdk available";
        return Wn.debug(n), Promise.reject(new Jn(n));
      }
      return new Promise(function(r, i) {
        t.getLoginStatus(function(o) {
          if (!o || !o.authResponse) {
            var s = "no response from facebook when refreshing the jwt token";
            Wn.debug(s), i(new Jn(s));
          } else {
            var a = o.authResponse, u = a.accessToken, c = a.expiresIn, l = /* @__PURE__ */ new Date(), f = c * 1e3 + l.getTime();
            if (!u) {
              var s = "the jwtToken is undefined";
              Wn.debug(s), i(new Jn(s));
            }
            r({
              token: u,
              expires_at: f
            });
          }
        }, { scope: "public_profile,email" });
      });
    }, e;
  }()
), ib = new tb(), ob = new rb(), Rn = {}, sb = (
  /** @class */
  function() {
    function e() {
    }
    return e.setItem = function(t, n) {
      return Rn[t] = n, Rn[t];
    }, e.getItem = function(t) {
      return Object.prototype.hasOwnProperty.call(Rn, t) ? Rn[t] : void 0;
    }, e.removeItem = function(t) {
      return delete Rn[t];
    }, e.clear = function() {
      return Rn = {}, Rn;
    }, e;
  }()
), zp = (
  /** @class */
  function() {
    function e() {
      try {
        this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
      } catch {
        this.storageWindow = sb;
      }
    }
    return e.prototype.getStorage = function() {
      return this.storageWindow;
    }, e;
  }()
);
const ab = "@aws-sdk/client-cognito-identity", ub = "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", cb = "3.6.1", lb = {
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
}, fb = "./dist/cjs/index.js", db = "./types/index.d.ts", hb = "./dist/es/index.js", gb = {
  "./runtimeConfig": "./runtimeConfig.browser"
}, pb = !1, Mb = {
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
}, yb = {
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
}, mb = {
  node: ">=10.0.0"
}, vb = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
}, wb = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
}, Db = "Apache-2.0", Ab = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", Eb = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-cognito-identity"
}, Ib = {
  name: ab,
  description: ub,
  version: cb,
  scripts: lb,
  main: fb,
  types: db,
  module: hb,
  browser: gb,
  "react-native": {
    "./runtimeConfig": "./runtimeConfig.native"
  },
  sideEffects: pb,
  dependencies: Mb,
  devDependencies: yb,
  engines: mb,
  typesVersions: vb,
  author: wb,
  license: Db,
  homepage: Ab,
  repository: Eb
};
var td = "cognito-identity.{region}.amazonaws.com", Nb = "cognito-identity.{region}.amazonaws.com.cn", Tb = "cognito-identity.{region}.c2s.ic.gov", jb = "cognito-identity.{region}.sc2s.sgov.gov", Sb = "cognito-identity.{region}.amazonaws.com", bb = /* @__PURE__ */ new Set([
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
]), Cb = /* @__PURE__ */ new Set(["cn-north-1", "cn-northwest-1"]), xb = /* @__PURE__ */ new Set(["us-iso-east-1"]), Ob = /* @__PURE__ */ new Set(["us-isob-east-1"]), Lb = /* @__PURE__ */ new Set(["us-gov-east-1", "us-gov-west-1"]), _b = function(e, t) {
  var n = void 0;
  switch (e) {
    case "ap-northeast-1":
      n = {
        hostname: "cognito-identity.ap-northeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-northeast-2":
      n = {
        hostname: "cognito-identity.ap-northeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-south-1":
      n = {
        hostname: "cognito-identity.ap-south-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-1":
      n = {
        hostname: "cognito-identity.ap-southeast-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ap-southeast-2":
      n = {
        hostname: "cognito-identity.ap-southeast-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "ca-central-1":
      n = {
        hostname: "cognito-identity.ca-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "cn-north-1":
      n = {
        hostname: "cognito-identity.cn-north-1.amazonaws.com.cn",
        partition: "aws-cn"
      };
      break;
    case "eu-central-1":
      n = {
        hostname: "cognito-identity.eu-central-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-north-1":
      n = {
        hostname: "cognito-identity.eu-north-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-1":
      n = {
        hostname: "cognito-identity.eu-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-2":
      n = {
        hostname: "cognito-identity.eu-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "eu-west-3":
      n = {
        hostname: "cognito-identity.eu-west-3.amazonaws.com",
        partition: "aws"
      };
      break;
    case "fips-us-east-1":
      n = {
        hostname: "cognito-identity-fips.us-east-1.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-1"
      };
      break;
    case "fips-us-east-2":
      n = {
        hostname: "cognito-identity-fips.us-east-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-east-2"
      };
      break;
    case "fips-us-gov-west-1":
      n = {
        hostname: "cognito-identity-fips.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov",
        signingRegion: "us-gov-west-1"
      };
      break;
    case "fips-us-west-2":
      n = {
        hostname: "cognito-identity-fips.us-west-2.amazonaws.com",
        partition: "aws",
        signingRegion: "us-west-2"
      };
      break;
    case "sa-east-1":
      n = {
        hostname: "cognito-identity.sa-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-1":
      n = {
        hostname: "cognito-identity.us-east-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-east-2":
      n = {
        hostname: "cognito-identity.us-east-2.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-gov-west-1":
      n = {
        hostname: "cognito-identity.us-gov-west-1.amazonaws.com",
        partition: "aws-us-gov"
      };
      break;
    case "us-west-1":
      n = {
        hostname: "cognito-identity.us-west-1.amazonaws.com",
        partition: "aws"
      };
      break;
    case "us-west-2":
      n = {
        hostname: "cognito-identity.us-west-2.amazonaws.com",
        partition: "aws"
      };
      break;
    default:
      bb.has(e) && (n = {
        hostname: td.replace("{region}", e),
        partition: "aws"
      }), Cb.has(e) && (n = {
        hostname: Nb.replace("{region}", e),
        partition: "aws-cn"
      }), xb.has(e) && (n = {
        hostname: Tb.replace("{region}", e),
        partition: "aws-iso"
      }), Ob.has(e) && (n = {
        hostname: jb.replace("{region}", e),
        partition: "aws-iso-b"
      }), Lb.has(e) && (n = {
        hostname: Sb.replace("{region}", e),
        partition: "aws-us-gov"
      }), n === void 0 && (n = {
        hostname: td.replace("{region}", e),
        partition: "aws"
      });
  }
  return Promise.resolve(oe({ signingService: "cognito-identity" }, n));
}, nd = {
  apiVersion: "2014-06-30",
  disableHostPrefix: !1,
  logger: {},
  regionInfoProvider: _b,
  serviceId: "Cognito Identity",
  urlParser: tS
}, kb = oe(oe({}, nd), { runtime: "browser", base64Decoder: Dp, base64Encoder: rj, bodyLengthChecker: Vj, credentialDefaultProvider: function(e) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: Xj({
  serviceId: nd.serviceId,
  clientVersion: Ib.version
}), maxAttempts: Ec, region: uj("Region is missing"), requestHandler: new tj(), sha256: gp.Sha256, streamCollector: ij, utf8Decoder: pp, utf8Encoder: Mp }), zb = (
  /** @class */
  function(e) {
    mc(t, e);
    function t(n) {
      var r = this, i = oe(oe({}, kb), n), o = oS(i), s = nS(o), a = BS(s), u = $j(a), c = u, l = QS(c);
      return r = e.call(this, l) || this, r.config = l, r.middlewareStack.use(fj(r.config)), r.middlewareStack.use(cS(r.config)), r.middlewareStack.use(dS(r.config)), r.middlewareStack.use(pS(r.config)), r.middlewareStack.use(qS(r.config)), r;
    }
    return t.prototype.destroy = function() {
      e.prototype.destroy.call(this);
    }, t;
  }(KS)
), rd;
(function(e) {
  e.AUTHENTICATED_ROLE = "AuthenticatedRole", e.DENY = "Deny";
})(rd || (rd = {}));
var id;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(id || (id = {}));
var od;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(od || (od = {}));
var sd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(sd || (sd = {}));
var ad;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(ad || (ad = {}));
var ud;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(ud || (ud = {}));
var cd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(cd || (cd = {}));
var ld;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(ld || (ld = {}));
var fd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(fd || (fd = {}));
var dd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(dd || (dd = {}));
var hd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(hd || (hd = {}));
var gd;
(function(e) {
  e.ACCESS_DENIED = "AccessDenied", e.INTERNAL_SERVER_ERROR = "InternalServerError";
})(gd || (gd = {}));
var pd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(pd || (pd = {}));
var Md;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Md || (Md = {}));
var yd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(yd || (yd = {}));
var md;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(md || (md = {}));
var vd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(vd || (vd = {}));
var wd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(wd || (wd = {}));
var Dd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Dd || (Dd = {}));
var Ad;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Ad || (Ad = {}));
var pu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(pu || (pu = {}));
var Ed;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Ed || (Ed = {}));
var Mu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Mu || (Mu = {}));
var Id;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Id || (Id = {}));
var yu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(yu || (yu = {}));
var mu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(mu || (mu = {}));
var Nd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Nd || (Nd = {}));
var Td;
(function(e) {
  e.CONTAINS = "Contains", e.EQUALS = "Equals", e.NOT_EQUAL = "NotEqual", e.STARTS_WITH = "StartsWith";
})(Td || (Td = {}));
var jd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(jd || (jd = {}));
var Sd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Sd || (Sd = {}));
var bd;
(function(e) {
  e.RULES = "Rules", e.TOKEN = "Token";
})(bd || (bd = {}));
var Cd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Cd || (Cd = {}));
var xd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(xd || (xd = {}));
var Od;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Od || (Od = {}));
var Ld;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Ld || (Ld = {}));
var _d;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(_d || (_d = {}));
var kd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(kd || (kd = {}));
var zd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(zd || (zd = {}));
var Pd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Pd || (Pd = {}));
var Rd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Rd || (Rd = {}));
var Ud;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Ud || (Ud = {}));
var Fd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Fd || (Fd = {}));
var Yd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Yd || (Yd = {}));
var Bd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Bd || (Bd = {}));
var Qd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Qd || (Qd = {}));
var $d;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})($d || ($d = {}));
var Wd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Wd || (Wd = {}));
var Vd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Vd || (Vd = {}));
var Hd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Hd || (Hd = {}));
var qd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(qd || (qd = {}));
var Kd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Kd || (Kd = {}));
var Gd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Gd || (Gd = {}));
var Jd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Jd || (Jd = {}));
var Zd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Zd || (Zd = {}));
var Xd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(Xd || (Xd = {}));
var eh;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(eh || (eh = {}));
var th;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return oe({}, t);
  };
})(th || (th = {}));
var Pb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r;
    return Mt(this, function(i) {
      return n = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
      }, r = JSON.stringify(Wb(e)), [2, Wp(t, n, "/", void 0, r)];
    });
  });
}, Rb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r;
    return Mt(this, function(i) {
      return n = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId"
      }, r = JSON.stringify(Vb(e)), [2, Wp(t, n, "/", void 0, r)];
    });
  });
}, Ub = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, Fb(e, t)] : [4, bs(e.body, t)];
        case 1:
          return n = o.sent(), r = {}, r = Kb(n), i = oe({ $metadata: Qe(e) }, r), [2, Promise.resolve(i)];
      }
    });
  });
}, Fb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v;
    return Mt(this, function(w) {
      switch (w.label) {
        case 0:
          return r = [oe({}, e)], v = {}, [4, bs(e.body, t)];
        case 1:
          switch (n = oe.apply(void 0, r.concat([(v.body = w.sent(), v)])), o = "UnknownError", o = Vp(e, n.body), s = o, s) {
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
          return a = [{}], [4, Pp(n)];
        case 3:
          return i = oe.apply(void 0, [oe.apply(void 0, a.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, Rp(n)];
        case 5:
          return i = oe.apply(void 0, [oe.apply(void 0, u.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, Qb(n)];
        case 7:
          return i = oe.apply(void 0, [oe.apply(void 0, c.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, Up(n)];
        case 9:
          return i = oe.apply(void 0, [oe.apply(void 0, l.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, Fp(n)];
        case 11:
          return i = oe.apply(void 0, [oe.apply(void 0, f.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Yp(n)];
        case 13:
          return i = oe.apply(void 0, [oe.apply(void 0, d.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 14:
          return g = [{}], [4, Bp(n)];
        case 15:
          return i = oe.apply(void 0, [oe.apply(void 0, g.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 16:
          return h = [{}], [4, Qp(n)];
        case 17:
          return i = oe.apply(void 0, [oe.apply(void 0, h.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 18:
          p = n.body, o = p.code || p.Code || o, i = oe(oe({}, p), { name: "" + o, message: p.message || p.Message || o, $fault: "client", $metadata: Qe(e) }), w.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, Yb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, Bb(e, t)] : [4, bs(e.body, t)];
        case 1:
          return n = o.sent(), r = {}, r = Gb(n), i = oe({ $metadata: Qe(e) }, r), [2, Promise.resolve(i)];
      }
    });
  });
}, Bb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v;
    return Mt(this, function(w) {
      switch (w.label) {
        case 0:
          return r = [oe({}, e)], v = {}, [4, bs(e.body, t)];
        case 1:
          switch (n = oe.apply(void 0, r.concat([(v.body = w.sent(), v)])), o = "UnknownError", o = Vp(e, n.body), s = o, s) {
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
          return a = [{}], [4, Pp(n)];
        case 3:
          return i = oe.apply(void 0, [oe.apply(void 0, a.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, Rp(n)];
        case 5:
          return i = oe.apply(void 0, [oe.apply(void 0, u.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, Up(n)];
        case 7:
          return i = oe.apply(void 0, [oe.apply(void 0, c.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, $b(n)];
        case 9:
          return i = oe.apply(void 0, [oe.apply(void 0, l.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, Fp(n)];
        case 11:
          return i = oe.apply(void 0, [oe.apply(void 0, f.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Yp(n)];
        case 13:
          return i = oe.apply(void 0, [oe.apply(void 0, d.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 14:
          return g = [{}], [4, Bp(n)];
        case 15:
          return i = oe.apply(void 0, [oe.apply(void 0, g.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 16:
          return h = [{}], [4, Qp(n)];
        case 17:
          return i = oe.apply(void 0, [oe.apply(void 0, h.concat([w.sent()])), { name: o, $metadata: Qe(e) }]), [3, 19];
        case 18:
          p = n.body, o = p.code || p.Code || o, i = oe(oe({}, p), { name: "" + o, message: p.message || p.Message || o, $fault: "client", $metadata: Qe(e) }), w.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, Pp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = qb(n), i = oe({ name: "ExternalServiceException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Rp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = Jb(n), i = oe({ name: "InternalErrorException", $fault: "server", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Qb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = Zb(n), i = oe({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Up = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = Xb(n), i = oe({ name: "InvalidParameterException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, $b = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = e1(n), i = oe({ name: "LimitExceededException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Fp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = t1(n), i = oe({ name: "NotAuthorizedException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Yp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = n1(n), i = oe({ name: "ResourceConflictException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Bp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = r1(n), i = oe({ name: "ResourceNotFoundException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Qp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = i1(n), i = oe({ name: "TooManyRequestsException", $fault: "client", $metadata: Qe(e) }, r), [2, i];
    });
  });
}, Wb = function(e, t) {
  return oe(oe(oe({}, e.CustomRoleArn !== void 0 && e.CustomRoleArn !== null && { CustomRoleArn: e.CustomRoleArn }), e.IdentityId !== void 0 && e.IdentityId !== null && { IdentityId: e.IdentityId }), e.Logins !== void 0 && e.Logins !== null && { Logins: $p(e.Logins) });
}, Vb = function(e, t) {
  return oe(oe(oe({}, e.AccountId !== void 0 && e.AccountId !== null && { AccountId: e.AccountId }), e.IdentityPoolId !== void 0 && e.IdentityPoolId !== null && { IdentityPoolId: e.IdentityPoolId }), e.Logins !== void 0 && e.Logins !== null && { Logins: $p(e.Logins) });
}, $p = function(e, t) {
  return Object.entries(e).reduce(function(n, r) {
    var i, o = ET(r, 2), s = o[0], a = o[1];
    return a === null ? n : oe(oe({}, n), (i = {}, i[s] = a, i));
  }, {});
}, Hb = function(e, t) {
  return {
    AccessKeyId: e.AccessKeyId !== void 0 && e.AccessKeyId !== null ? e.AccessKeyId : void 0,
    Expiration: e.Expiration !== void 0 && e.Expiration !== null ? new Date(Math.round(e.Expiration * 1e3)) : void 0,
    SecretKey: e.SecretKey !== void 0 && e.SecretKey !== null ? e.SecretKey : void 0,
    SessionToken: e.SessionToken !== void 0 && e.SessionToken !== null ? e.SessionToken : void 0
  };
}, qb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Kb = function(e, t) {
  return {
    Credentials: e.Credentials !== void 0 && e.Credentials !== null ? Hb(e.Credentials) : void 0,
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, Gb = function(e, t) {
  return {
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, Jb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Zb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Xb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, e1 = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, t1 = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, n1 = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, r1 = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, i1 = function(e, t) {
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
}, o1 = function(e, t) {
  return e === void 0 && (e = new Uint8Array()), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array());
}, s1 = function(e, t) {
  return o1(e, t).then(function(n) {
    return t.utf8Encoder(n);
  });
}, Wp = function(e, t, n, r, i) {
  return pt(void 0, void 0, void 0, function() {
    var o, s, a, u, c, l;
    return Mt(this, function(f) {
      switch (f.label) {
        case 0:
          return [4, e.endpoint()];
        case 1:
          return o = f.sent(), s = o.hostname, a = o.protocol, u = a === void 0 ? "https" : a, c = o.port, l = {
            protocol: u,
            hostname: s,
            port: c,
            method: "POST",
            path: n,
            headers: t
          }, r !== void 0 && (l.hostname = r), i !== void 0 && (l.body = i), [2, new Ur(l)];
      }
    });
  });
}, bs = function(e, t) {
  return s1(e, t).then(function(n) {
    return n.length ? JSON.parse(n) : {};
  });
}, Vp = function(e, t) {
  var n = function(o, s) {
    return Object.keys(o).find(function(a) {
      return a.toLowerCase() === s.toLowerCase();
    });
  }, r = function(o) {
    var s = o;
    return s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
  }, i = n(e.headers, "x-amzn-errortype");
  return i !== void 0 ? r(e.headers[i]) : t.code !== void 0 ? r(t.code) : t.__type !== void 0 ? r(t.__type) : "";
}, vu = (
  /** @class */
  function(e) {
    mc(t, e);
    function t(n) {
      var r = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return r.input = n, r;
    }
    return t.prototype.resolveMiddleware = function(n, r, i) {
      this.middlewareStack.use(kp(r, this.serialize, this.deserialize));
      var o = n.concat(this.middlewareStack), s = r.logger, a = "CognitoIdentityClient", u = "GetCredentialsForIdentityCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: pu.filterSensitiveLog,
        outputFilterSensitiveLog: Mu.filterSensitiveLog
      }, l = r.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(n, r) {
      return Pb(n, r);
    }, t.prototype.deserialize = function(n, r) {
      return Ub(n, r);
    }, t;
  }(_p)
), Di = (
  /** @class */
  function(e) {
    mc(t, e);
    function t(n) {
      var r = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return r.input = n, r;
    }
    return t.prototype.resolveMiddleware = function(n, r, i) {
      this.middlewareStack.use(kp(r, this.serialize, this.deserialize));
      var o = n.concat(this.middlewareStack), s = r.logger, a = "CognitoIdentityClient", u = "GetIdCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: yu.filterSensitiveLog,
        outputFilterSensitiveLog: mu.filterSensitiveLog
      }, l = r.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(n, r) {
      return Rb(n, r);
    }, t.prototype.deserialize = function(n, r) {
      return Yb(n, r);
    }, t;
  }(_p)
), Cs = (
  /** @class */
  function(e) {
    pc(t, e);
    function t(n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, n) || this;
      return i.tryNextLink = r, i;
    }
    return t;
  }(Error)
);
function Hp(e) {
  return Promise.all(Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return typeof r == "string" ? t.push([n, r]) : t.push(r().then(function(i) {
      return [n, i];
    })), t;
  }, [])).then(function(t) {
    return t.reduce(function(n, r) {
      var i = cr(r, 2), o = i[0], s = i[1];
      return n[o] = s, n;
    }, {});
  });
}
function fi(e) {
  var t = this;
  return function() {
    return Ne(t, void 0, void 0, function() {
      var n, r, i, o, s, a, u, c, l, f, d, g, h;
      return Ee(this, function(p) {
        switch (p.label) {
          case 0:
            return f = (l = e.client).send, d = vu.bind, h = {
              CustomRoleArn: e.customRoleArn,
              IdentityId: e.identityId
            }, e.logins ? [4, Hp(e.logins)] : [3, 2];
          case 1:
            return g = p.sent(), [3, 3];
          case 2:
            g = void 0, p.label = 3;
          case 3:
            return [4, f.apply(l, [new (d.apply(vu, [void 0, (h.Logins = g, h)]))()])];
          case 4:
            return n = p.sent().Credentials, r = n === void 0 ? u1() : n, i = r.AccessKeyId, o = i === void 0 ? a1() : i, s = r.Expiration, a = r.SecretKey, u = a === void 0 ? c1() : a, c = r.SessionToken, [2, {
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
function a1() {
  throw new Cs("Response from Amazon Cognito contained no access key ID");
}
function u1() {
  throw new Cs("Response from Amazon Cognito contained no credentials");
}
function c1() {
  throw new Cs("Response from Amazon Cognito contained no secret key");
}
var ma = "IdentityIds", l1 = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = "aws:cognito-identity-ids"), this.dbName = t;
    }
    return e.prototype.getItem = function(t) {
      return this.withObjectStore("readonly", function(n) {
        var r = n.get(t);
        return new Promise(function(i) {
          r.onerror = function() {
            return i(null);
          }, r.onsuccess = function() {
            return i(r.result ? r.result.value : null);
          };
        });
      }).catch(function() {
        return null;
      });
    }, e.prototype.removeItem = function(t) {
      return this.withObjectStore("readwrite", function(n) {
        var r = n.delete(t);
        return new Promise(function(i, o) {
          r.onerror = function() {
            return o(r.error);
          }, r.onsuccess = function() {
            return i();
          };
        });
      });
    }, e.prototype.setItem = function(t, n) {
      return this.withObjectStore("readwrite", function(r) {
        var i = r.put({ id: t, value: n });
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
      return new Promise(function(n, r) {
        t.onsuccess = function() {
          n(t.result);
        }, t.onerror = function() {
          r(t.error);
        }, t.onblocked = function() {
          r(new Error("Unable to access DB"));
        }, t.onupgradeneeded = function() {
          var i = t.result;
          i.onerror = function() {
            r(new Error("Failed to create object store"));
          }, i.createObjectStore(ma, { keyPath: "id" });
        };
      });
    }, e.prototype.withObjectStore = function(t, n) {
      return this.getDb().then(function(r) {
        var i = r.transaction(ma, t);
        return i.oncomplete = function() {
          return r.close();
        }, new Promise(function(o, s) {
          i.onerror = function() {
            return s(i.error);
          }, o(n(i.objectStore(ma)));
        }).catch(function(o) {
          throw r.close(), o;
        });
      });
    }, e;
  }()
), f1 = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.store = t;
    }
    return e.prototype.getItem = function(t) {
      return t in this.store ? this.store[t] : null;
    }, e.prototype.removeItem = function(t) {
      delete this.store[t];
    }, e.prototype.setItem = function(t, n) {
      this.store[t] = n;
    }, e;
  }()
), d1 = new f1();
function h1() {
  return typeof self == "object" && self.indexedDB ? new l1() : typeof window == "object" && window.localStorage ? window.localStorage : d1;
}
function g1(e) {
  var t = this, n = e.accountId, r = e.cache, i = r === void 0 ? h1() : r, o = e.client, s = e.customRoleArn, a = e.identityPoolId, u = e.logins, c = e.userIdentifier, l = c === void 0 ? !u || Object.keys(u).length === 0 ? "ANONYMOUS" : void 0 : c, f = l ? "aws:cognito-identity-credentials:" + a + ":" + l : void 0, d = function() {
    return Ne(t, void 0, void 0, function() {
      var g, h, p, m, v, w, j, N, I;
      return Ee(this, function(B) {
        switch (B.label) {
          case 0:
            return h = f, h ? [4, i.getItem(f)] : [3, 2];
          case 1:
            h = B.sent(), B.label = 2;
          case 2:
            return g = h, g ? [3, 7] : (w = (v = o).send, j = Di.bind, I = {
              AccountId: n,
              IdentityPoolId: a
            }, u ? [4, Hp(u)] : [3, 4]);
          case 3:
            return N = B.sent(), [3, 5];
          case 4:
            N = void 0, B.label = 5;
          case 5:
            return [4, w.apply(v, [new (j.apply(Di, [void 0, (I.Logins = N, I)]))()])];
          case 6:
            p = B.sent().IdentityId, m = p === void 0 ? p1() : p, g = m, f && Promise.resolve(i.setItem(f, g)).catch(function() {
            }), B.label = 7;
          case 7:
            return d = fi({
              client: o,
              customRoleArn: s,
              logins: u,
              identityId: g
            }), [2, d()];
        }
      });
    });
  };
  return function() {
    return d().catch(function(g) {
      return Ne(t, void 0, void 0, function() {
        return Ee(this, function(h) {
          throw f && Promise.resolve(i.removeItem(f)).catch(function() {
          }), g;
        });
      });
    });
  };
}
function p1() {
  throw new Cs("Response from Amazon Cognito contained no identity ID");
}
function va(e) {
  var t = new zb({
    region: e.region,
    customUserAgent: _N()
  });
  return t.middlewareStack.add(function(n, r) {
    return function(i) {
      return n(M1(i));
    };
  }, {
    step: "build",
    name: "cacheControlMiddleWare"
  }), t;
}
function M1(e) {
  return we(we({}, e), { request: we(we({}, e.request), { headers: we(we({}, e.request.headers), { "cache-control": "no-store" }) }) });
}
var je = new Ht("Credentials"), y1 = 50 * 60 * 1e3, m1 = "CognitoIdentityId-", v1 = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", w1 = function(e, t, n) {
  on.dispatch("core", { event: e, data: t, message: n }, "Credentials", v1);
}, D1 = (
  /** @class */
  function() {
    function e(t) {
      this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(t), this._refreshHandlers.google = ib.refreshGoogleToken, this._refreshHandlers.facebook = ob.refreshFacebookToken;
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
      return n && (this._refreshHandlers = we(we({}, this._refreshHandlers), n)), this._storage = this._config.storage, this._storage || (this._storage = new zp().getStorage()), this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), w1("credentials_configured", null, "Credentials has been configured successfully"), this._config;
    }, e.prototype.get = function() {
      return je.debug("getting credentials"), this._pickupCredentials();
    }, e.prototype._getCognitoIdentityIdStorageKey = function(t) {
      return "" + m1 + t;
    }, e.prototype._pickupCredentials = function() {
      return je.debug("picking up credentials"), !this._gettingCredPromise || !this._gettingCredPromise.isPending() ? (je.debug("getting new cred promise"), this._gettingCredPromise = RN(this._keepAlive())) : je.debug("getting old cred promise"), this._gettingCredPromise;
    }, e.prototype._keepAlive = function() {
      return Ne(this, void 0, void 0, function() {
        var t, n, r, i, o, s, a, u;
        return Ee(this, function(c) {
          switch (c.label) {
            case 0:
              if (je.debug("checking if credentials exists and not expired"), t = this._credentials, t && !this._isExpired(t) && !this._isPastTTL())
                return je.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(t)];
              if (je.debug("need to get a new credential or refresh the existing one"), n = this.Auth, r = n === void 0 ? Mc.Auth : n, !r || typeof r.currentUserCredentials != "function")
                return [2, this._setCredentialsForGuest()];
              if (!(!this._isExpired(t) && this._isPastTTL()))
                return [3, 6];
              je.debug("ttl has passed but token is not yet expired"), c.label = 1;
            case 1:
              return c.trys.push([1, 5, , 6]), [4, r.currentUserPoolUser()];
            case 2:
              return i = c.sent(), [4, r.currentSession()];
            case 3:
              return o = c.sent(), s = o.refreshToken, a = new Promise(function(l, f) {
                i.refreshSession(s, function(d, g) {
                  return d ? f(d) : l(g);
                });
              }), [4, a];
            case 4:
              return c.sent(), [3, 6];
            case 5:
              return u = c.sent(), je.debug("Error attempting to refreshing the session", u), [3, 6];
            case 6:
              return [2, r.currentUserCredentials()];
          }
        });
      });
    }, e.prototype.refreshFederatedToken = function(t) {
      je.debug("Getting federated credentials");
      var n = t.provider, r = t.user, i = t.token, o = t.identity_id, s = t.expires_at;
      s = new Date(s).getFullYear() === 1970 ? s * 1e3 : s;
      var a = this;
      return je.debug("checking if federated jwt token expired"), s > (/* @__PURE__ */ new Date()).getTime() ? (je.debug("token not expired"), this._setCredentialsFromFederation({
        provider: n,
        token: i,
        user: r,
        identity_id: o,
        expires_at: s
      })) : a._refreshHandlers[n] && typeof a._refreshHandlers[n] == "function" ? (je.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
        refreshHandler: a._refreshHandlers[n],
        provider: n,
        user: r
      })) : (je.debug("no refresh handler for provider:", n), this.clear(), Promise.reject("no refresh handler for provider"));
    }, e.prototype._providerRefreshWithRetry = function(t) {
      var n = this, r = t.refreshHandler, i = t.provider, o = t.user, s = 10 * 1e3;
      return vT(r, [], s).then(function(a) {
        return je.debug("refresh federated token sucessfully", a), n._setCredentialsFromFederation({
          provider: i,
          token: a.token,
          user: o,
          identity_id: a.identity_id,
          expires_at: a.expires_at
        });
      }).catch(function(a) {
        var u = typeof a == "string" && a.toLowerCase().lastIndexOf("network error", a.length) === 0;
        return u || n.clear(), je.debug("refresh federated token failed", a), Promise.reject("refreshing federation token failed: " + a);
      });
    }, e.prototype._isExpired = function(t) {
      if (!t)
        return je.debug("no credentials for expiration check"), !0;
      je.debug("are these credentials expired?", t);
      var n = Date.now(), r = t.expiration;
      return r.getTime() <= n;
    }, e.prototype._isPastTTL = function() {
      return this._nextCredentialsRefresh <= Date.now();
    }, e.prototype._setCredentialsForGuest = function() {
      var t;
      return Ne(this, void 0, void 0, function() {
        var n, r, i, o, s, a, u, c, l, f, d, g = this;
        return Ee(this, function(h) {
          switch (h.label) {
            case 0:
              return je.debug("setting credentials for guest"), !((t = this._config) === null || t === void 0) && t.identityPoolId || (this._config = Object.assign({}, this._config, hp(this._config || {}).Auth)), n = this._config, r = n.identityPoolId, i = n.region, o = n.mandatorySignIn, s = n.identityPoolRegion, o ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : r ? !s && !i ? (je.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (u = this, [4, this._getGuestIdentityId()]) : (je.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
            case 1:
              return a = u._identityId = h.sent(), c = va({
                region: s || i
              }), l = void 0, a ? (f = {
                identityId: a,
                client: c
              }, l = fi(f)()) : (d = function() {
                return Ne(g, void 0, void 0, function() {
                  var p, m, v;
                  return Ee(this, function(w) {
                    switch (w.label) {
                      case 0:
                        return [4, c.send(new Di({
                          IdentityPoolId: r
                        }))];
                      case 1:
                        return p = w.sent().IdentityId, this._identityId = p, m = {
                          client: c,
                          identityId: p
                        }, v = fi(m), [2, v()];
                    }
                  });
                });
              }, l = d().catch(function(p) {
                return Ne(g, void 0, void 0, function() {
                  return Ee(this, function(m) {
                    throw p;
                  });
                });
              })), [2, this._loadCredentials(l, "guest", !1, null).then(function(p) {
                return p;
              }).catch(function(p) {
                return Ne(g, void 0, void 0, function() {
                  var m, v = this;
                  return Ee(this, function(w) {
                    switch (w.label) {
                      case 0:
                        return p.name === "ResourceNotFoundException" && p.message === "Identity '" + a + "' not found." ? (je.debug("Failed to load guest credentials"), [4, this._removeGuestIdentityId()]) : [3, 2];
                      case 1:
                        return w.sent(), m = function() {
                          return Ne(v, void 0, void 0, function() {
                            var j, N, I;
                            return Ee(this, function(B) {
                              switch (B.label) {
                                case 0:
                                  return [4, c.send(new Di({
                                    IdentityPoolId: r
                                  }))];
                                case 1:
                                  return j = B.sent().IdentityId, this._identityId = j, N = {
                                    client: c,
                                    identityId: j
                                  }, I = fi(N), [2, I()];
                              }
                            });
                          });
                        }, l = m().catch(function(j) {
                          return Ne(v, void 0, void 0, function() {
                            return Ee(this, function(N) {
                              throw j;
                            });
                          });
                        }), [2, this._loadCredentials(l, "guest", !1, null)];
                      case 2:
                        return [2, p];
                    }
                  });
                });
              })];
          }
        });
      });
    }, e.prototype._setCredentialsFromFederation = function(t) {
      var n = t.provider, r = t.token, i = t.identity_id, o = {
        google: "accounts.google.com",
        facebook: "graph.facebook.com",
        amazon: "www.amazon.com",
        developer: "cognito-identity.amazonaws.com"
      }, s = o[n] || n;
      if (!s)
        return Promise.reject("You must specify a federated provider");
      var a = {};
      a[s] = r;
      var u = this._config, c = u.identityPoolId, l = u.region, f = u.identityPoolRegion;
      if (!c)
        return je.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!f && !l)
        return je.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var d = va({
        region: f || l
      }), g = void 0;
      if (i) {
        var h = {
          identityId: i,
          logins: a,
          client: d
        };
        g = fi(h)();
      } else {
        var h = {
          logins: a,
          identityPoolId: c,
          client: d
        };
        g = g1(h)();
      }
      return this._loadCredentials(g, "federated", !0, t);
    }, e.prototype._setCredentialsFromSession = function(t) {
      var n = this;
      je.debug("set credentials from session");
      var r = t.getIdToken().getJwtToken(), i = this._config, o = i.region, s = i.userPoolId, a = i.identityPoolId, u = i.identityPoolRegion;
      if (!a)
        return je.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!u && !o)
        return je.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var c = "cognito-idp." + o + ".amazonaws.com/" + s, l = {};
      l[c] = r;
      var f = va({
        region: u || o
      }), d = function() {
        return Ne(n, void 0, void 0, function() {
          var h, p, m, v, w, j, N, I, B, z;
          return Ee(this, function(W) {
            switch (W.label) {
              case 0:
                return [4, this._getGuestIdentityId()];
              case 1:
                return h = W.sent(), h ? [3, 3] : [4, f.send(new Di({
                  IdentityPoolId: a,
                  Logins: l
                }))];
              case 2:
                m = W.sent().IdentityId, p = m, W.label = 3;
              case 3:
                return [4, f.send(new vu({
                  IdentityId: h || p,
                  Logins: l
                }))];
              case 4:
                return v = W.sent(), w = v.Credentials, j = w.AccessKeyId, N = w.Expiration, I = w.SecretKey, B = w.SessionToken, z = v.IdentityId, this._identityId = z, h ? (je.debug("The guest identity " + h + " has been successfully linked to the logins"), h === z && je.debug("The guest identity " + h + " has become the primary identity"), [4, this._removeGuestIdentityId()]) : [3, 6];
              case 5:
                W.sent(), W.label = 6;
              case 6:
                return [2, {
                  accessKeyId: j,
                  secretAccessKey: I,
                  sessionToken: B,
                  expiration: N,
                  identityId: z
                }];
            }
          });
        });
      }, g = d().catch(function(h) {
        return Ne(n, void 0, void 0, function() {
          return Ee(this, function(p) {
            throw h;
          });
        });
      });
      return this._loadCredentials(g, "userPool", !0, null);
    }, e.prototype._loadCredentials = function(t, n, r, i) {
      var o = this, s = this;
      return new Promise(function(a, u) {
        t.then(function(c) {
          return Ne(o, void 0, void 0, function() {
            var l, f, d, g, h;
            return Ee(this, function(p) {
              switch (p.label) {
                case 0:
                  if (je.debug("Load credentials successfully", c), this._identityId && !c.identityId && (c.identityId = this._identityId), s._credentials = c, s._credentials.authenticated = r, s._credentials_source = n, s._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + y1, n === "federated") {
                    l = Object.assign({ id: this._credentials.identityId }, i.user), f = i.provider, d = i.token, g = i.expires_at, h = i.identity_id;
                    try {
                      this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                        provider: f,
                        token: d,
                        user: l,
                        expires_at: g,
                        identity_id: h
                      }));
                    } catch (m) {
                      je.debug("Failed to put federated info into auth storage", m);
                    }
                  }
                  return n !== "guest" ? [3, 2] : [4, this._setGuestIdentityId(c.identityId)];
                case 1:
                  p.sent(), p.label = 2;
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
            je.debug("Failed to load credentials", t), je.debug("Error loading credentials", c), u(c);
            return;
          }
        });
      });
    }, e.prototype.set = function(t, n) {
      return n === "session" ? this._setCredentialsFromSession(t) : n === "federation" ? this._setCredentialsFromFederation(t) : n === "guest" ? this._setCredentialsForGuest() : (je.debug("no source specified for setting credentials"), Promise.reject("invalid source"));
    }, e.prototype.clear = function() {
      return Ne(this, void 0, void 0, function() {
        return Ee(this, function(t) {
          return this._credentials = null, this._credentials_source = null, je.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype._getGuestIdentityId = function() {
      return Ne(this, void 0, void 0, function() {
        var t, n;
        return Ee(this, function(r) {
          switch (r.label) {
            case 0:
              t = this._config.identityPoolId, r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return r.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(t))];
            case 3:
              return n = r.sent(), je.debug("Failed to get the cached guest identityId", n), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._setGuestIdentityId = function(t) {
      return Ne(this, void 0, void 0, function() {
        var n, r;
        return Ee(this, function(i) {
          switch (i.label) {
            case 0:
              n = this._config.identityPoolId, i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return i.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(n), t), [3, 4];
            case 3:
              return r = i.sent(), je.debug("Failed to cache guest identityId", r), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._removeGuestIdentityId = function() {
      return Ne(this, void 0, void 0, function() {
        var t;
        return Ee(this, function(n) {
          return t = this._config.identityPoolId, je.debug("removing " + this._getCognitoIdentityIdStorageKey(t) + " from storage"), this._storage.removeItem(this._getCognitoIdentityIdStorageKey(t)), [
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
), qp = new D1(null);
Mc.register(qp);
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Kp = I1, nh = N1, A1 = decodeURIComponent, E1 = encodeURIComponent, po = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function I1(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, i = e.split(";"), o = r.decode || A1, s = 0; s < i.length; s++) {
    var a = i[s], u = a.indexOf("=");
    if (!(u < 0)) {
      var c = a.substring(0, u).trim();
      if (n[c] == null) {
        var l = a.substring(u + 1, a.length).trim();
        l[0] === '"' && (l = l.slice(1, -1)), n[c] = T1(l, o);
      }
    }
  }
  return n;
}
function N1(e, t, n) {
  var r = n || {}, i = r.encode || E1;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!po.test(e))
    throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !po.test(o))
    throw new TypeError("argument val is invalid");
  var s = e + "=" + o;
  if (r.maxAge != null) {
    var a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!po.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!po.test(r.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + r.expires.toUTCString();
  }
  if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
    var u = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
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
function T1(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function j1() {
  return typeof document == "object" && typeof document.cookie == "string";
}
function S1(e, t) {
  return typeof e == "string" ? Kp(e, t) : typeof e == "object" && e !== null ? e : {};
}
function b1(e, t) {
  return typeof t > "u" && (t = !e || e[0] !== "{" && e[0] !== "[" && e[0] !== '"'), !t;
}
function rh(e, t) {
  t === void 0 && (t = {});
  var n = C1(e);
  if (b1(n, t.doNotParse))
    try {
      return JSON.parse(n);
    } catch {
    }
  return e;
}
function C1(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e;
}
var Vn = globalThis && globalThis.__assign || function() {
  return Vn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Vn.apply(this, arguments);
}, x1 = (
  /** @class */
  function() {
    function e(t, n) {
      var r = this;
      this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = S1(t, n), new Promise(function() {
        r.HAS_DOCUMENT_COOKIE = j1();
      }).catch(function() {
      });
    }
    return e.prototype._updateBrowserValues = function(t) {
      this.HAS_DOCUMENT_COOKIE && (this.cookies = Kp(document.cookie, t));
    }, e.prototype._emitChange = function(t) {
      for (var n = 0; n < this.changeListeners.length; ++n)
        this.changeListeners[n](t);
    }, e.prototype.get = function(t, n, r) {
      return n === void 0 && (n = {}), this._updateBrowserValues(r), rh(this.cookies[t], n);
    }, e.prototype.getAll = function(t, n) {
      t === void 0 && (t = {}), this._updateBrowserValues(n);
      var r = {};
      for (var i in this.cookies)
        r[i] = rh(this.cookies[i], t);
      return r;
    }, e.prototype.set = function(t, n, r) {
      var i;
      typeof n == "object" && (n = JSON.stringify(n)), this.cookies = Vn(Vn({}, this.cookies), (i = {}, i[t] = n, i)), this.HAS_DOCUMENT_COOKIE && (document.cookie = nh(t, n, r)), this._emitChange({ name: t, value: n, options: r });
    }, e.prototype.remove = function(t, n) {
      var r = n = Vn(Vn({}, n), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
      this.cookies = Vn({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = nh(t, "", r)), this._emitChange({ name: t, value: void 0, options: n });
    }, e.prototype.addChangeListener = function(t) {
      this.changeListeners.push(t);
    }, e.prototype.removeChangeListener = function(t) {
      var n = this.changeListeners.indexOf(t);
      n >= 0 && this.changeListeners.splice(n, 1);
    }, e;
  }()
);
const wa = x1;
var ih = gn().isBrowser, O1 = 365 * 24 * 60 * 60 * 1e3, L1 = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.cookies = new wa(), this.store = ih ? window.localStorage : /* @__PURE__ */ Object.create(null), this.cookies = t.req ? new wa(t.req.headers.cookie) : new wa(), Object.assign(this.store, this.cookies.getAll());
    }
    return Object.defineProperty(e.prototype, "length", {
      get: function() {
        return Object.entries(this.store).length;
      },
      enumerable: !0,
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
      var r = t.split(".").pop(), i = [
        "LastAuthUser",
        "accessToken",
        // refreshToken originates on the client, but SSR pages won't fail when this expires
        // Note: the new `accessToken` will also be refreshed on the client (since Amplify doesn't set server-side cookies)
        "refreshToken",
        // Required for CognitoUserSession
        "idToken"
      ];
      i.includes(r ?? "") && this.setUniversalItem(t, n, {
        expires: new Date(Date.now() + O1)
      });
    }, e.prototype.setLocalItem = function(t, n) {
      this.store[t] = n;
    }, e.prototype.setUniversalItem = function(t, n, r) {
      r === void 0 && (r = {}), this.cookies.set(t, n, we(we({}, r), {
        path: "/",
        // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
        sameSite: !0,
        // Allow unsecure requests to http://localhost:3000/ when in development.
        secure: !(ih && window.location.hostname === "localhost")
      }));
    }, e;
  }()
);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var oh = /* @__PURE__ */ function() {
  function e(n) {
    var r = n || {}, i = r.ValidationData, o = r.Username, s = r.Password, a = r.AuthParameters, u = r.ClientMetadata;
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
}(), Ke = {}, xs = {};
xs.byteLength = z1;
xs.toByteArray = R1;
xs.fromByteArray = Y1;
var Gt = [], xt = [], _1 = typeof Uint8Array < "u" ? Uint8Array : Array, Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vr = 0, k1 = Da.length; vr < k1; ++vr)
  Gt[vr] = Da[vr], xt[Da.charCodeAt(vr)] = vr;
xt["-".charCodeAt(0)] = 62;
xt["_".charCodeAt(0)] = 63;
function Gp(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function z1(e) {
  var t = Gp(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function P1(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function R1(e) {
  var t, n = Gp(e), r = n[0], i = n[1], o = new _1(P1(e, r, i)), s = 0, a = i > 0 ? r - 4 : r, u;
  for (u = 0; u < a; u += 4)
    t = xt[e.charCodeAt(u)] << 18 | xt[e.charCodeAt(u + 1)] << 12 | xt[e.charCodeAt(u + 2)] << 6 | xt[e.charCodeAt(u + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
  return i === 2 && (t = xt[e.charCodeAt(u)] << 2 | xt[e.charCodeAt(u + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = xt[e.charCodeAt(u)] << 10 | xt[e.charCodeAt(u + 1)] << 4 | xt[e.charCodeAt(u + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o;
}
function U1(e) {
  return Gt[e >> 18 & 63] + Gt[e >> 12 & 63] + Gt[e >> 6 & 63] + Gt[e & 63];
}
function F1(e, t, n) {
  for (var r, i = [], o = t; o < n; o += 3)
    r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(U1(r));
  return i.join("");
}
function Y1(e) {
  for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o)
    i.push(F1(e, s, s + o > a ? a : s + o));
  return r === 1 ? (t = e[n - 1], i.push(
    Gt[t >> 2] + Gt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(
    Gt[t >> 10] + Gt[t >> 4 & 63] + Gt[t << 2 & 63] + "="
  )), i.join("");
}
var Ic = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ic.read = function(e, t, n, r, i) {
  var o, s, a = i * 8 - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? i - 1 : 0, d = n ? -1 : 1, g = e[t + f];
  for (f += d, o = g & (1 << -l) - 1, g >>= -l, l += a; l > 0; o = o * 256 + e[t + f], f += d, l -= 8)
    ;
  for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = s * 256 + e[t + f], f += d, l -= 8)
    ;
  if (o === 0)
    o = 1 - c;
  else {
    if (o === u)
      return s ? NaN : (g ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, r), o = o - c;
  }
  return (g ? -1 : 1) * s * Math.pow(2, o - r);
};
Ic.write = function(e, t, n, r, i, o) {
  var s, a, u, c = o * 8 - i - 1, l = (1 << c) - 1, f = l >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = r ? 0 : o - 1, h = r ? 1 : -1, p = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? t += d / u : t += d * Math.pow(2, 1 - f), t * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s = s + f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + g] = a & 255, g += h, a /= 256, i -= 8)
    ;
  for (s = s << i | a, c += i; c > 0; e[n + g] = s & 255, g += h, s /= 256, c -= 8)
    ;
  e[n + g - h] |= p * 128;
};
var B1 = {}.toString, Q1 = Array.isArray || function(e) {
  return B1.call(e) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = xs, n = Ic, r = Q1;
  e.Buffer = a, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = zt.TYPED_ARRAY_SUPPORT !== void 0 ? zt.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = o();
  function i() {
    try {
      var E = new Uint8Array(1);
      return E.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
        return 42;
      } }, E.foo() === 42 && // typed array instances can be augmented
      typeof E.subarray == "function" && // chrome 9-10 lack `subarray`
      E.subarray(1, 1).byteLength === 0;
    } catch {
      return !1;
    }
  }
  function o() {
    return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function s(E, y) {
    if (o() < y)
      throw new RangeError("Invalid typed array length");
    return a.TYPED_ARRAY_SUPPORT ? (E = new Uint8Array(y), E.__proto__ = a.prototype) : (E === null && (E = new a(y)), E.length = y), E;
  }
  function a(E, y, M) {
    if (!a.TYPED_ARRAY_SUPPORT && !(this instanceof a))
      return new a(E, y, M);
    if (typeof E == "number") {
      if (typeof y == "string")
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return f(this, E);
    }
    return u(this, E, y, M);
  }
  a.poolSize = 8192, a._augment = function(E) {
    return E.__proto__ = a.prototype, E;
  };
  function u(E, y, M, A) {
    if (typeof y == "number")
      throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && y instanceof ArrayBuffer ? h(E, y, M, A) : typeof y == "string" ? d(E, y, M) : p(E, y);
  }
  a.from = function(E, y, M) {
    return u(null, E, y, M);
  }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
    value: null,
    configurable: !0
  }));
  function c(E) {
    if (typeof E != "number")
      throw new TypeError('"size" argument must be a number');
    if (E < 0)
      throw new RangeError('"size" argument must not be negative');
  }
  function l(E, y, M, A) {
    return c(y), y <= 0 ? s(E, y) : M !== void 0 ? typeof A == "string" ? s(E, y).fill(M, A) : s(E, y).fill(M) : s(E, y);
  }
  a.alloc = function(E, y, M) {
    return l(null, E, y, M);
  };
  function f(E, y) {
    if (c(y), E = s(E, y < 0 ? 0 : m(y) | 0), !a.TYPED_ARRAY_SUPPORT)
      for (var M = 0; M < y; ++M)
        E[M] = 0;
    return E;
  }
  a.allocUnsafe = function(E) {
    return f(null, E);
  }, a.allocUnsafeSlow = function(E) {
    return f(null, E);
  };
  function d(E, y, M) {
    if ((typeof M != "string" || M === "") && (M = "utf8"), !a.isEncoding(M))
      throw new TypeError('"encoding" must be a valid string encoding');
    var A = w(y, M) | 0;
    E = s(E, A);
    var Y = E.write(y, M);
    return Y !== A && (E = E.slice(0, Y)), E;
  }
  function g(E, y) {
    var M = y.length < 0 ? 0 : m(y.length) | 0;
    E = s(E, M);
    for (var A = 0; A < M; A += 1)
      E[A] = y[A] & 255;
    return E;
  }
  function h(E, y, M, A) {
    if (y.byteLength, M < 0 || y.byteLength < M)
      throw new RangeError("'offset' is out of bounds");
    if (y.byteLength < M + (A || 0))
      throw new RangeError("'length' is out of bounds");
    return M === void 0 && A === void 0 ? y = new Uint8Array(y) : A === void 0 ? y = new Uint8Array(y, M) : y = new Uint8Array(y, M, A), a.TYPED_ARRAY_SUPPORT ? (E = y, E.__proto__ = a.prototype) : E = g(E, y), E;
  }
  function p(E, y) {
    if (a.isBuffer(y)) {
      var M = m(y.length) | 0;
      return E = s(E, M), E.length === 0 || y.copy(E, 0, 0, M), E;
    }
    if (y) {
      if (typeof ArrayBuffer < "u" && y.buffer instanceof ArrayBuffer || "length" in y)
        return typeof y.length != "number" || de(y.length) ? s(E, 0) : g(E, y);
      if (y.type === "Buffer" && r(y.data))
        return g(E, y.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }
  function m(E) {
    if (E >= o())
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
    return E | 0;
  }
  function v(E) {
    return +E != E && (E = 0), a.alloc(+E);
  }
  a.isBuffer = function(y) {
    return !!(y != null && y._isBuffer);
  }, a.compare = function(y, M) {
    if (!a.isBuffer(y) || !a.isBuffer(M))
      throw new TypeError("Arguments must be Buffers");
    if (y === M)
      return 0;
    for (var A = y.length, Y = M.length, ee = 0, Z = Math.min(A, Y); ee < Z; ++ee)
      if (y[ee] !== M[ee]) {
        A = y[ee], Y = M[ee];
        break;
      }
    return A < Y ? -1 : Y < A ? 1 : 0;
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
  }, a.concat = function(y, M) {
    if (!r(y))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (y.length === 0)
      return a.alloc(0);
    var A;
    if (M === void 0)
      for (M = 0, A = 0; A < y.length; ++A)
        M += y[A].length;
    var Y = a.allocUnsafe(M), ee = 0;
    for (A = 0; A < y.length; ++A) {
      var Z = y[A];
      if (!a.isBuffer(Z))
        throw new TypeError('"list" argument must be an Array of Buffers');
      Z.copy(Y, ee), ee += Z.length;
    }
    return Y;
  };
  function w(E, y) {
    if (a.isBuffer(E))
      return E.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(E) || E instanceof ArrayBuffer))
      return E.byteLength;
    typeof E != "string" && (E = "" + E);
    var M = E.length;
    if (M === 0)
      return 0;
    for (var A = !1; ; )
      switch (y) {
        case "ascii":
        case "latin1":
        case "binary":
          return M;
        case "utf8":
        case "utf-8":
        case void 0:
          return V(E).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return M * 2;
        case "hex":
          return M >>> 1;
        case "base64":
          return le(E).length;
        default:
          if (A)
            return V(E).length;
          y = ("" + y).toLowerCase(), A = !0;
      }
  }
  a.byteLength = w;
  function j(E, y, M) {
    var A = !1;
    if ((y === void 0 || y < 0) && (y = 0), y > this.length || ((M === void 0 || M > this.length) && (M = this.length), M <= 0) || (M >>>= 0, y >>>= 0, M <= y))
      return "";
    for (E || (E = "utf8"); ; )
      switch (E) {
        case "hex":
          return ie(this, y, M);
        case "utf8":
        case "utf-8":
          return T(this, y, M);
        case "ascii":
          return C(this, y, M);
        case "latin1":
        case "binary":
          return J(this, y, M);
        case "base64":
          return x(this, y, M);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return L(this, y, M);
        default:
          if (A)
            throw new TypeError("Unknown encoding: " + E);
          E = (E + "").toLowerCase(), A = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function N(E, y, M) {
    var A = E[y];
    E[y] = E[M], E[M] = A;
  }
  a.prototype.swap16 = function() {
    var y = this.length;
    if (y % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var M = 0; M < y; M += 2)
      N(this, M, M + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var y = this.length;
    if (y % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var M = 0; M < y; M += 4)
      N(this, M, M + 3), N(this, M + 1, M + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var y = this.length;
    if (y % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var M = 0; M < y; M += 8)
      N(this, M, M + 7), N(this, M + 1, M + 6), N(this, M + 2, M + 5), N(this, M + 3, M + 4);
    return this;
  }, a.prototype.toString = function() {
    var y = this.length | 0;
    return y === 0 ? "" : arguments.length === 0 ? T(this, 0, y) : j.apply(this, arguments);
  }, a.prototype.equals = function(y) {
    if (!a.isBuffer(y))
      throw new TypeError("Argument must be a Buffer");
    return this === y ? !0 : a.compare(this, y) === 0;
  }, a.prototype.inspect = function() {
    var y = "", M = e.INSPECT_MAX_BYTES;
    return this.length > 0 && (y = this.toString("hex", 0, M).match(/.{2}/g).join(" "), this.length > M && (y += " ... ")), "<Buffer " + y + ">";
  }, a.prototype.compare = function(y, M, A, Y, ee) {
    if (!a.isBuffer(y))
      throw new TypeError("Argument must be a Buffer");
    if (M === void 0 && (M = 0), A === void 0 && (A = y ? y.length : 0), Y === void 0 && (Y = 0), ee === void 0 && (ee = this.length), M < 0 || A > y.length || Y < 0 || ee > this.length)
      throw new RangeError("out of range index");
    if (Y >= ee && M >= A)
      return 0;
    if (Y >= ee)
      return -1;
    if (M >= A)
      return 1;
    if (M >>>= 0, A >>>= 0, Y >>>= 0, ee >>>= 0, this === y)
      return 0;
    for (var Z = ee - Y, ve = A - M, Ce = Math.min(Z, ve), Se = this.slice(Y, ee), Pe = y.slice(M, A), Ve = 0; Ve < Ce; ++Ve)
      if (Se[Ve] !== Pe[Ve]) {
        Z = Se[Ve], ve = Pe[Ve];
        break;
      }
    return Z < ve ? -1 : ve < Z ? 1 : 0;
  };
  function I(E, y, M, A, Y) {
    if (E.length === 0)
      return -1;
    if (typeof M == "string" ? (A = M, M = 0) : M > 2147483647 ? M = 2147483647 : M < -2147483648 && (M = -2147483648), M = +M, isNaN(M) && (M = Y ? 0 : E.length - 1), M < 0 && (M = E.length + M), M >= E.length) {
      if (Y)
        return -1;
      M = E.length - 1;
    } else if (M < 0)
      if (Y)
        M = 0;
      else
        return -1;
    if (typeof y == "string" && (y = a.from(y, A)), a.isBuffer(y))
      return y.length === 0 ? -1 : B(E, y, M, A, Y);
    if (typeof y == "number")
      return y = y & 255, a.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? Y ? Uint8Array.prototype.indexOf.call(E, y, M) : Uint8Array.prototype.lastIndexOf.call(E, y, M) : B(E, [y], M, A, Y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function B(E, y, M, A, Y) {
    var ee = 1, Z = E.length, ve = y.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (E.length < 2 || y.length < 2)
        return -1;
      ee = 2, Z /= 2, ve /= 2, M /= 2;
    }
    function Ce(tn, lr) {
      return ee === 1 ? tn[lr] : tn.readUInt16BE(lr * ee);
    }
    var Se;
    if (Y) {
      var Pe = -1;
      for (Se = M; Se < Z; Se++)
        if (Ce(E, Se) === Ce(y, Pe === -1 ? 0 : Se - Pe)) {
          if (Pe === -1 && (Pe = Se), Se - Pe + 1 === ve)
            return Pe * ee;
        } else
          Pe !== -1 && (Se -= Se - Pe), Pe = -1;
    } else
      for (M + ve > Z && (M = Z - ve), Se = M; Se >= 0; Se--) {
        for (var Ve = !0, De = 0; De < ve; De++)
          if (Ce(E, Se + De) !== Ce(y, De)) {
            Ve = !1;
            break;
          }
        if (Ve)
          return Se;
      }
    return -1;
  }
  a.prototype.includes = function(y, M, A) {
    return this.indexOf(y, M, A) !== -1;
  }, a.prototype.indexOf = function(y, M, A) {
    return I(this, y, M, A, !0);
  }, a.prototype.lastIndexOf = function(y, M, A) {
    return I(this, y, M, A, !1);
  };
  function z(E, y, M, A) {
    M = Number(M) || 0;
    var Y = E.length - M;
    A ? (A = Number(A), A > Y && (A = Y)) : A = Y;
    var ee = y.length;
    if (ee % 2 !== 0)
      throw new TypeError("Invalid hex string");
    A > ee / 2 && (A = ee / 2);
    for (var Z = 0; Z < A; ++Z) {
      var ve = parseInt(y.substr(Z * 2, 2), 16);
      if (isNaN(ve))
        return Z;
      E[M + Z] = ve;
    }
    return Z;
  }
  function W(E, y, M, A) {
    return Me(V(y, E.length - M), E, M, A);
  }
  function $(E, y, M, A) {
    return Me(fe(y), E, M, A);
  }
  function b(E, y, M, A) {
    return $(E, y, M, A);
  }
  function k(E, y, M, A) {
    return Me(le(y), E, M, A);
  }
  function U(E, y, M, A) {
    return Me(te(y, E.length - M), E, M, A);
  }
  a.prototype.write = function(y, M, A, Y) {
    if (M === void 0)
      Y = "utf8", A = this.length, M = 0;
    else if (A === void 0 && typeof M == "string")
      Y = M, A = this.length, M = 0;
    else if (isFinite(M))
      M = M | 0, isFinite(A) ? (A = A | 0, Y === void 0 && (Y = "utf8")) : (Y = A, A = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var ee = this.length - M;
    if ((A === void 0 || A > ee) && (A = ee), y.length > 0 && (A < 0 || M < 0) || M > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    Y || (Y = "utf8");
    for (var Z = !1; ; )
      switch (Y) {
        case "hex":
          return z(this, y, M, A);
        case "utf8":
        case "utf-8":
          return W(this, y, M, A);
        case "ascii":
          return $(this, y, M, A);
        case "latin1":
        case "binary":
          return b(this, y, M, A);
        case "base64":
          return k(this, y, M, A);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return U(this, y, M, A);
        default:
          if (Z)
            throw new TypeError("Unknown encoding: " + Y);
          Y = ("" + Y).toLowerCase(), Z = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function x(E, y, M) {
    return y === 0 && M === E.length ? t.fromByteArray(E) : t.fromByteArray(E.slice(y, M));
  }
  function T(E, y, M) {
    M = Math.min(E.length, M);
    for (var A = [], Y = y; Y < M; ) {
      var ee = E[Y], Z = null, ve = ee > 239 ? 4 : ee > 223 ? 3 : ee > 191 ? 2 : 1;
      if (Y + ve <= M) {
        var Ce, Se, Pe, Ve;
        switch (ve) {
          case 1:
            ee < 128 && (Z = ee);
            break;
          case 2:
            Ce = E[Y + 1], (Ce & 192) === 128 && (Ve = (ee & 31) << 6 | Ce & 63, Ve > 127 && (Z = Ve));
            break;
          case 3:
            Ce = E[Y + 1], Se = E[Y + 2], (Ce & 192) === 128 && (Se & 192) === 128 && (Ve = (ee & 15) << 12 | (Ce & 63) << 6 | Se & 63, Ve > 2047 && (Ve < 55296 || Ve > 57343) && (Z = Ve));
            break;
          case 4:
            Ce = E[Y + 1], Se = E[Y + 2], Pe = E[Y + 3], (Ce & 192) === 128 && (Se & 192) === 128 && (Pe & 192) === 128 && (Ve = (ee & 15) << 18 | (Ce & 63) << 12 | (Se & 63) << 6 | Pe & 63, Ve > 65535 && Ve < 1114112 && (Z = Ve));
        }
      }
      Z === null ? (Z = 65533, ve = 1) : Z > 65535 && (Z -= 65536, A.push(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023), A.push(Z), Y += ve;
    }
    return R(A);
  }
  var S = 4096;
  function R(E) {
    var y = E.length;
    if (y <= S)
      return String.fromCharCode.apply(String, E);
    for (var M = "", A = 0; A < y; )
      M += String.fromCharCode.apply(
        String,
        E.slice(A, A += S)
      );
    return M;
  }
  function C(E, y, M) {
    var A = "";
    M = Math.min(E.length, M);
    for (var Y = y; Y < M; ++Y)
      A += String.fromCharCode(E[Y] & 127);
    return A;
  }
  function J(E, y, M) {
    var A = "";
    M = Math.min(E.length, M);
    for (var Y = y; Y < M; ++Y)
      A += String.fromCharCode(E[Y]);
    return A;
  }
  function ie(E, y, M) {
    var A = E.length;
    (!y || y < 0) && (y = 0), (!M || M < 0 || M > A) && (M = A);
    for (var Y = "", ee = y; ee < M; ++ee)
      Y += Q(E[ee]);
    return Y;
  }
  function L(E, y, M) {
    for (var A = E.slice(y, M), Y = "", ee = 0; ee < A.length; ee += 2)
      Y += String.fromCharCode(A[ee] + A[ee + 1] * 256);
    return Y;
  }
  a.prototype.slice = function(y, M) {
    var A = this.length;
    y = ~~y, M = M === void 0 ? A : ~~M, y < 0 ? (y += A, y < 0 && (y = 0)) : y > A && (y = A), M < 0 ? (M += A, M < 0 && (M = 0)) : M > A && (M = A), M < y && (M = y);
    var Y;
    if (a.TYPED_ARRAY_SUPPORT)
      Y = this.subarray(y, M), Y.__proto__ = a.prototype;
    else {
      var ee = M - y;
      Y = new a(ee, void 0);
      for (var Z = 0; Z < ee; ++Z)
        Y[Z] = this[Z + y];
    }
    return Y;
  };
  function F(E, y, M) {
    if (E % 1 !== 0 || E < 0)
      throw new RangeError("offset is not uint");
    if (E + y > M)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUIntLE = function(y, M, A) {
    y = y | 0, M = M | 0, A || F(y, M, this.length);
    for (var Y = this[y], ee = 1, Z = 0; ++Z < M && (ee *= 256); )
      Y += this[y + Z] * ee;
    return Y;
  }, a.prototype.readUIntBE = function(y, M, A) {
    y = y | 0, M = M | 0, A || F(y, M, this.length);
    for (var Y = this[y + --M], ee = 1; M > 0 && (ee *= 256); )
      Y += this[y + --M] * ee;
    return Y;
  }, a.prototype.readUInt8 = function(y, M) {
    return M || F(y, 1, this.length), this[y];
  }, a.prototype.readUInt16LE = function(y, M) {
    return M || F(y, 2, this.length), this[y] | this[y + 1] << 8;
  }, a.prototype.readUInt16BE = function(y, M) {
    return M || F(y, 2, this.length), this[y] << 8 | this[y + 1];
  }, a.prototype.readUInt32LE = function(y, M) {
    return M || F(y, 4, this.length), (this[y] | this[y + 1] << 8 | this[y + 2] << 16) + this[y + 3] * 16777216;
  }, a.prototype.readUInt32BE = function(y, M) {
    return M || F(y, 4, this.length), this[y] * 16777216 + (this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3]);
  }, a.prototype.readIntLE = function(y, M, A) {
    y = y | 0, M = M | 0, A || F(y, M, this.length);
    for (var Y = this[y], ee = 1, Z = 0; ++Z < M && (ee *= 256); )
      Y += this[y + Z] * ee;
    return ee *= 128, Y >= ee && (Y -= Math.pow(2, 8 * M)), Y;
  }, a.prototype.readIntBE = function(y, M, A) {
    y = y | 0, M = M | 0, A || F(y, M, this.length);
    for (var Y = M, ee = 1, Z = this[y + --Y]; Y > 0 && (ee *= 256); )
      Z += this[y + --Y] * ee;
    return ee *= 128, Z >= ee && (Z -= Math.pow(2, 8 * M)), Z;
  }, a.prototype.readInt8 = function(y, M) {
    return M || F(y, 1, this.length), this[y] & 128 ? (255 - this[y] + 1) * -1 : this[y];
  }, a.prototype.readInt16LE = function(y, M) {
    M || F(y, 2, this.length);
    var A = this[y] | this[y + 1] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt16BE = function(y, M) {
    M || F(y, 2, this.length);
    var A = this[y + 1] | this[y] << 8;
    return A & 32768 ? A | 4294901760 : A;
  }, a.prototype.readInt32LE = function(y, M) {
    return M || F(y, 4, this.length), this[y] | this[y + 1] << 8 | this[y + 2] << 16 | this[y + 3] << 24;
  }, a.prototype.readInt32BE = function(y, M) {
    return M || F(y, 4, this.length), this[y] << 24 | this[y + 1] << 16 | this[y + 2] << 8 | this[y + 3];
  }, a.prototype.readFloatLE = function(y, M) {
    return M || F(y, 4, this.length), n.read(this, y, !0, 23, 4);
  }, a.prototype.readFloatBE = function(y, M) {
    return M || F(y, 4, this.length), n.read(this, y, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(y, M) {
    return M || F(y, 8, this.length), n.read(this, y, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(y, M) {
    return M || F(y, 8, this.length), n.read(this, y, !1, 52, 8);
  };
  function P(E, y, M, A, Y, ee) {
    if (!a.isBuffer(E))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (y > Y || y < ee)
      throw new RangeError('"value" argument is out of bounds');
    if (M + A > E.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUIntLE = function(y, M, A, Y) {
    if (y = +y, M = M | 0, A = A | 0, !Y) {
      var ee = Math.pow(2, 8 * A) - 1;
      P(this, y, M, A, ee, 0);
    }
    var Z = 1, ve = 0;
    for (this[M] = y & 255; ++ve < A && (Z *= 256); )
      this[M + ve] = y / Z & 255;
    return M + A;
  }, a.prototype.writeUIntBE = function(y, M, A, Y) {
    if (y = +y, M = M | 0, A = A | 0, !Y) {
      var ee = Math.pow(2, 8 * A) - 1;
      P(this, y, M, A, ee, 0);
    }
    var Z = A - 1, ve = 1;
    for (this[M + Z] = y & 255; --Z >= 0 && (ve *= 256); )
      this[M + Z] = y / ve & 255;
    return M + A;
  }, a.prototype.writeUInt8 = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (y = Math.floor(y)), this[M] = y & 255, M + 1;
  };
  function q(E, y, M, A) {
    y < 0 && (y = 65535 + y + 1);
    for (var Y = 0, ee = Math.min(E.length - M, 2); Y < ee; ++Y)
      E[M + Y] = (y & 255 << 8 * (A ? Y : 1 - Y)) >>> (A ? Y : 1 - Y) * 8;
  }
  a.prototype.writeUInt16LE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[M] = y & 255, this[M + 1] = y >>> 8) : q(this, y, M, !0), M + 2;
  }, a.prototype.writeUInt16BE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[M] = y >>> 8, this[M + 1] = y & 255) : q(this, y, M, !1), M + 2;
  };
  function K(E, y, M, A) {
    y < 0 && (y = 4294967295 + y + 1);
    for (var Y = 0, ee = Math.min(E.length - M, 4); Y < ee; ++Y)
      E[M + Y] = y >>> (A ? Y : 3 - Y) * 8 & 255;
  }
  a.prototype.writeUInt32LE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[M + 3] = y >>> 24, this[M + 2] = y >>> 16, this[M + 1] = y >>> 8, this[M] = y & 255) : K(this, y, M, !0), M + 4;
  }, a.prototype.writeUInt32BE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[M] = y >>> 24, this[M + 1] = y >>> 16, this[M + 2] = y >>> 8, this[M + 3] = y & 255) : K(this, y, M, !1), M + 4;
  }, a.prototype.writeIntLE = function(y, M, A, Y) {
    if (y = +y, M = M | 0, !Y) {
      var ee = Math.pow(2, 8 * A - 1);
      P(this, y, M, A, ee - 1, -ee);
    }
    var Z = 0, ve = 1, Ce = 0;
    for (this[M] = y & 255; ++Z < A && (ve *= 256); )
      y < 0 && Ce === 0 && this[M + Z - 1] !== 0 && (Ce = 1), this[M + Z] = (y / ve >> 0) - Ce & 255;
    return M + A;
  }, a.prototype.writeIntBE = function(y, M, A, Y) {
    if (y = +y, M = M | 0, !Y) {
      var ee = Math.pow(2, 8 * A - 1);
      P(this, y, M, A, ee - 1, -ee);
    }
    var Z = A - 1, ve = 1, Ce = 0;
    for (this[M + Z] = y & 255; --Z >= 0 && (ve *= 256); )
      y < 0 && Ce === 0 && this[M + Z + 1] !== 0 && (Ce = 1), this[M + Z] = (y / ve >> 0) - Ce & 255;
    return M + A;
  }, a.prototype.writeInt8 = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (y = Math.floor(y)), y < 0 && (y = 255 + y + 1), this[M] = y & 255, M + 1;
  }, a.prototype.writeInt16LE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[M] = y & 255, this[M + 1] = y >>> 8) : q(this, y, M, !0), M + 2;
  }, a.prototype.writeInt16BE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[M] = y >>> 8, this[M + 1] = y & 255) : q(this, y, M, !1), M + 2;
  }, a.prototype.writeInt32LE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[M] = y & 255, this[M + 1] = y >>> 8, this[M + 2] = y >>> 16, this[M + 3] = y >>> 24) : K(this, y, M, !0), M + 4;
  }, a.prototype.writeInt32BE = function(y, M, A) {
    return y = +y, M = M | 0, A || P(this, y, M, 4, 2147483647, -2147483648), y < 0 && (y = 4294967295 + y + 1), a.TYPED_ARRAY_SUPPORT ? (this[M] = y >>> 24, this[M + 1] = y >>> 16, this[M + 2] = y >>> 8, this[M + 3] = y & 255) : K(this, y, M, !1), M + 4;
  };
  function X(E, y, M, A, Y, ee) {
    if (M + A > E.length)
      throw new RangeError("Index out of range");
    if (M < 0)
      throw new RangeError("Index out of range");
  }
  function O(E, y, M, A, Y) {
    return Y || X(E, y, M, 4), n.write(E, y, M, A, 23, 4), M + 4;
  }
  a.prototype.writeFloatLE = function(y, M, A) {
    return O(this, y, M, !0, A);
  }, a.prototype.writeFloatBE = function(y, M, A) {
    return O(this, y, M, !1, A);
  };
  function ne(E, y, M, A, Y) {
    return Y || X(E, y, M, 8), n.write(E, y, M, A, 52, 8), M + 8;
  }
  a.prototype.writeDoubleLE = function(y, M, A) {
    return ne(this, y, M, !0, A);
  }, a.prototype.writeDoubleBE = function(y, M, A) {
    return ne(this, y, M, !1, A);
  }, a.prototype.copy = function(y, M, A, Y) {
    if (A || (A = 0), !Y && Y !== 0 && (Y = this.length), M >= y.length && (M = y.length), M || (M = 0), Y > 0 && Y < A && (Y = A), Y === A || y.length === 0 || this.length === 0)
      return 0;
    if (M < 0)
      throw new RangeError("targetStart out of bounds");
    if (A < 0 || A >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (Y < 0)
      throw new RangeError("sourceEnd out of bounds");
    Y > this.length && (Y = this.length), y.length - M < Y - A && (Y = y.length - M + A);
    var ee = Y - A, Z;
    if (this === y && A < M && M < Y)
      for (Z = ee - 1; Z >= 0; --Z)
        y[Z + M] = this[Z + A];
    else if (ee < 1e3 || !a.TYPED_ARRAY_SUPPORT)
      for (Z = 0; Z < ee; ++Z)
        y[Z + M] = this[Z + A];
    else
      Uint8Array.prototype.set.call(
        y,
        this.subarray(A, A + ee),
        M
      );
    return ee;
  }, a.prototype.fill = function(y, M, A, Y) {
    if (typeof y == "string") {
      if (typeof M == "string" ? (Y = M, M = 0, A = this.length) : typeof A == "string" && (Y = A, A = this.length), y.length === 1) {
        var ee = y.charCodeAt(0);
        ee < 256 && (y = ee);
      }
      if (Y !== void 0 && typeof Y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof Y == "string" && !a.isEncoding(Y))
        throw new TypeError("Unknown encoding: " + Y);
    } else
      typeof y == "number" && (y = y & 255);
    if (M < 0 || this.length < M || this.length < A)
      throw new RangeError("Out of range index");
    if (A <= M)
      return this;
    M = M >>> 0, A = A === void 0 ? this.length : A >>> 0, y || (y = 0);
    var Z;
    if (typeof y == "number")
      for (Z = M; Z < A; ++Z)
        this[Z] = y;
    else {
      var ve = a.isBuffer(y) ? y : V(new a(y, Y).toString()), Ce = ve.length;
      for (Z = 0; Z < A - M; ++Z)
        this[Z + M] = ve[Z % Ce];
    }
    return this;
  };
  var G = /[^+\/0-9A-Za-z-_]/g;
  function he(E) {
    if (E = H(E).replace(G, ""), E.length < 2)
      return "";
    for (; E.length % 4 !== 0; )
      E = E + "=";
    return E;
  }
  function H(E) {
    return E.trim ? E.trim() : E.replace(/^\s+|\s+$/g, "");
  }
  function Q(E) {
    return E < 16 ? "0" + E.toString(16) : E.toString(16);
  }
  function V(E, y) {
    y = y || 1 / 0;
    for (var M, A = E.length, Y = null, ee = [], Z = 0; Z < A; ++Z) {
      if (M = E.charCodeAt(Z), M > 55295 && M < 57344) {
        if (!Y) {
          if (M > 56319) {
            (y -= 3) > -1 && ee.push(239, 191, 189);
            continue;
          } else if (Z + 1 === A) {
            (y -= 3) > -1 && ee.push(239, 191, 189);
            continue;
          }
          Y = M;
          continue;
        }
        if (M < 56320) {
          (y -= 3) > -1 && ee.push(239, 191, 189), Y = M;
          continue;
        }
        M = (Y - 55296 << 10 | M - 56320) + 65536;
      } else
        Y && (y -= 3) > -1 && ee.push(239, 191, 189);
      if (Y = null, M < 128) {
        if ((y -= 1) < 0)
          break;
        ee.push(M);
      } else if (M < 2048) {
        if ((y -= 2) < 0)
          break;
        ee.push(
          M >> 6 | 192,
          M & 63 | 128
        );
      } else if (M < 65536) {
        if ((y -= 3) < 0)
          break;
        ee.push(
          M >> 12 | 224,
          M >> 6 & 63 | 128,
          M & 63 | 128
        );
      } else if (M < 1114112) {
        if ((y -= 4) < 0)
          break;
        ee.push(
          M >> 18 | 240,
          M >> 12 & 63 | 128,
          M >> 6 & 63 | 128,
          M & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return ee;
  }
  function fe(E) {
    for (var y = [], M = 0; M < E.length; ++M)
      y.push(E.charCodeAt(M) & 255);
    return y;
  }
  function te(E, y) {
    for (var M, A, Y, ee = [], Z = 0; Z < E.length && !((y -= 2) < 0); ++Z)
      M = E.charCodeAt(Z), A = M >> 8, Y = M % 256, ee.push(Y), ee.push(A);
    return ee;
  }
  function le(E) {
    return t.toByteArray(he(E));
  }
  function Me(E, y, M, A) {
    for (var Y = 0; Y < A && !(Y + M >= y.length || Y >= E.length); ++Y)
      y[Y + M] = E[Y];
    return Y;
  }
  function de(E) {
    return E !== E;
  }
})(Ke);
var Lt;
typeof window < "u" && window.crypto && (Lt = window.crypto);
!Lt && typeof window < "u" && window.msCrypto && (Lt = window.msCrypto);
!Lt && typeof global < "u" && global.crypto && (Lt = global.crypto);
if (!Lt && typeof require == "function")
  try {
    Lt = require("crypto");
  } catch {
  }
function $1() {
  if (Lt) {
    if (typeof Lt.getRandomValues == "function")
      try {
        return Lt.getRandomValues(new Uint32Array(1))[0];
      } catch {
      }
    if (typeof Lt.randomBytes == "function")
      try {
        return Lt.randomBytes(4).readInt32LE();
      } catch {
      }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}
function W1(e) {
  for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    r.push((o >>> 4).toString(16)), r.push((o & 15).toString(16));
  }
  return r.join("");
}
var V1 = /* @__PURE__ */ function() {
  function e(n, r) {
    n = this.words = n || [], r != null ? this.sigBytes = r : this.sigBytes = n.length * 4;
  }
  var t = e.prototype;
  return t.random = function(r) {
    for (var i = [], o = 0; o < r; o += 4)
      i.push($1());
    return new e(i, r);
  }, t.toString = function() {
    return W1(this);
  }, e;
}();
function me(e, t) {
  e != null && this.fromString(e, t);
}
function vt() {
  return new me(null);
}
var Cn, H1 = 244837814094590, sh = (H1 & 16777215) == 15715070;
function q1(e, t, n, r, i, o) {
  for (; --o >= 0; ) {
    var s = t * this[e++] + n[r] + i;
    i = Math.floor(s / 67108864), n[r++] = s & 67108863;
  }
  return i;
}
function K1(e, t, n, r, i, o) {
  for (var s = t & 32767, a = t >> 15; --o >= 0; ) {
    var u = this[e] & 32767, c = this[e++] >> 15, l = a * u + c * s;
    u = s * u + ((l & 32767) << 15) + n[r] + (i & 1073741823), i = (u >>> 30) + (l >>> 15) + a * c + (i >>> 30), n[r++] = u & 1073741823;
  }
  return i;
}
function G1(e, t, n, r, i, o) {
  for (var s = t & 16383, a = t >> 14; --o >= 0; ) {
    var u = this[e] & 16383, c = this[e++] >> 14, l = a * u + c * s;
    u = s * u + ((l & 16383) << 14) + n[r] + i, i = (u >> 28) + (l >> 14) + a * c, n[r++] = u & 268435455;
  }
  return i;
}
var ah = typeof navigator < "u";
ah && sh && navigator.appName == "Microsoft Internet Explorer" ? (me.prototype.am = K1, Cn = 30) : ah && sh && navigator.appName != "Netscape" ? (me.prototype.am = q1, Cn = 26) : (me.prototype.am = G1, Cn = 28);
me.prototype.DB = Cn;
me.prototype.DM = (1 << Cn) - 1;
me.prototype.DV = 1 << Cn;
var Nc = 52;
me.prototype.FV = Math.pow(2, Nc);
me.prototype.F1 = Nc - Cn;
me.prototype.F2 = 2 * Cn - Nc;
var J1 = "0123456789abcdefghijklmnopqrstuvwxyz", Os = new Array(), Hr, _t;
Hr = "0".charCodeAt(0);
for (_t = 0; _t <= 9; ++_t)
  Os[Hr++] = _t;
Hr = "a".charCodeAt(0);
for (_t = 10; _t < 36; ++_t)
  Os[Hr++] = _t;
Hr = "A".charCodeAt(0);
for (_t = 10; _t < 36; ++_t)
  Os[Hr++] = _t;
function uh(e) {
  return J1.charAt(e);
}
function Z1(e, t) {
  var n = Os[e.charCodeAt(t)];
  return n ?? -1;
}
function X1(e) {
  for (var t = this.t - 1; t >= 0; --t)
    e[t] = this[t];
  e.t = this.t, e.s = this.s;
}
function eC(e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
}
function Tc(e) {
  var t = vt();
  return t.fromInt(e), t;
}
function tC(e, t) {
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
  for (var r = e.length, i = !1, o = 0; --r >= 0; ) {
    var s = Z1(e, r);
    if (s < 0) {
      e.charAt(r) == "-" && (i = !0);
      continue;
    }
    i = !1, o == 0 ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, o += n, o >= this.DB && (o -= this.DB);
  }
  this.clamp(), i && me.ZERO.subTo(this, this);
}
function nC() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function rC(e) {
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
  var n = (1 << t) - 1, r, i = !1, o = "", s = this.t, a = this.DB - s * this.DB % t;
  if (s-- > 0)
    for (a < this.DB && (r = this[s] >> a) > 0 && (i = !0, o = uh(r)); s >= 0; )
      a < t ? (r = (this[s] & (1 << a) - 1) << t - a, r |= this[--s] >> (a += this.DB - t)) : (r = this[s] >> (a -= t) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (i = !0), i && (o += uh(r));
  return i ? o : "0";
}
function iC() {
  var e = vt();
  return me.ZERO.subTo(this, e), e;
}
function oC() {
  return this.s < 0 ? this.negate() : this;
}
function sC(e) {
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
function jc(e) {
  var t = 1, n;
  return (n = e >>> 16) != 0 && (e = n, t += 16), (n = e >> 8) != 0 && (e = n, t += 8), (n = e >> 4) != 0 && (e = n, t += 4), (n = e >> 2) != 0 && (e = n, t += 2), (n = e >> 1) != 0 && (e = n, t += 1), t;
}
function aC() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + jc(this[this.t - 1] ^ this.s & this.DM);
}
function uC(e, t) {
  var n;
  for (n = this.t - 1; n >= 0; --n)
    t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n)
    t[n] = 0;
  t.t = this.t + e, t.s = this.s;
}
function cC(e, t) {
  for (var n = e; n < this.t; ++n)
    t[n - e] = this[n];
  t.t = Math.max(this.t - e, 0), t.s = this.s;
}
function lC(e, t) {
  var n = e % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(e / this.DB), s = this.s << n & this.DM, a;
  for (a = this.t - 1; a >= 0; --a)
    t[a + o + 1] = this[a] >> r | s, s = (this[a] & i) << n;
  for (a = o - 1; a >= 0; --a)
    t[a] = 0;
  t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp();
}
function fC(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) {
    t.t = 0;
    return;
  }
  var r = e % this.DB, i = this.DB - r, o = (1 << r) - 1;
  t[0] = this[n] >> r;
  for (var s = n + 1; s < this.t; ++s)
    t[s - n - 1] |= (this[s] & o) << i, t[s - n] = this[s] >> r;
  r > 0 && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp();
}
function dC(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; )
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
function hC(e, t) {
  var n = this.abs(), r = e.abs(), i = n.t;
  for (t.t = i + r.t; --i >= 0; )
    t[i] = 0;
  for (i = 0; i < r.t; ++i)
    t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  t.s = 0, t.clamp(), this.s != e.s && me.ZERO.subTo(t, t);
}
function gC(e) {
  for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
    e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp();
}
function pC(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) {
      t != null && t.fromInt(0), n != null && this.copyTo(n);
      return;
    }
    n == null && (n = vt());
    var o = vt(), s = this.s, a = e.s, u = this.DB - jc(r[r.t - 1]);
    u > 0 ? (r.lShiftTo(u, o), i.lShiftTo(u, n)) : (r.copyTo(o), i.copyTo(n));
    var c = o.t, l = o[c - 1];
    if (l != 0) {
      var f = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0), d = this.FV / f, g = (1 << this.F1) / f, h = 1 << this.F2, p = n.t, m = p - c, v = t ?? vt();
      for (o.dlShiftTo(m, v), n.compareTo(v) >= 0 && (n[n.t++] = 1, n.subTo(v, n)), me.ONE.dlShiftTo(c, v), v.subTo(o, o); o.t < c; )
        o[o.t++] = 0;
      for (; --m >= 0; ) {
        var w = n[--p] == l ? this.DM : Math.floor(n[p] * d + (n[p - 1] + h) * g);
        if ((n[p] += o.am(0, w, n, m, 0, c)) < w)
          for (o.dlShiftTo(m, v), n.subTo(v, n); n[p] < --w; )
            n.subTo(v, n);
      }
      t != null && (n.drShiftTo(c, t), s != a && me.ZERO.subTo(t, t)), n.t = c, n.clamp(), u > 0 && n.rShiftTo(u, n), s < 0 && me.ZERO.subTo(n, n);
    }
  }
}
function MC(e) {
  var t = vt();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(me.ZERO) > 0 && e.subTo(t, t), t;
}
function yC() {
  if (this.t < 1)
    return 0;
  var e = this[0];
  if (!(e & 1))
    return 0;
  var t = e & 3;
  return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
}
function mC(e) {
  return this.compareTo(e) == 0;
}
function vC(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i; )
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
function wC(e) {
  var t = vt();
  return this.addTo(e, t), t;
}
function DC(e) {
  var t = vt();
  return this.subTo(e, t), t;
}
function AC(e) {
  var t = vt();
  return this.multiplyTo(e, t), t;
}
function EC(e) {
  var t = vt();
  return this.divRemTo(e, t, null), t;
}
function qr(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
}
function IC(e) {
  var t = vt();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(me.ZERO) > 0 && this.m.subTo(t, t), t;
}
function NC(e) {
  var t = vt();
  return e.copyTo(t), this.reduce(t), t;
}
function TC(e) {
  for (; e.t <= this.mt2; )
    e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767, r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; )
      e[n] -= e.DV, e[++n]++;
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function jC(e, t) {
  e.squareTo(t), this.reduce(t);
}
function SC(e, t, n) {
  e.multiplyTo(t, n), this.reduce(n);
}
qr.prototype.convert = IC;
qr.prototype.revert = NC;
qr.prototype.reduce = TC;
qr.prototype.mulTo = SC;
qr.prototype.sqrTo = jC;
function bC(e, t, n) {
  var r = e.bitLength(), i, o = Tc(1), s = new qr(t);
  if (r <= 0)
    return o;
  r < 18 ? i = 1 : r < 48 ? i = 3 : r < 144 ? i = 4 : r < 768 ? i = 5 : i = 6;
  var a = new Array(), u = 3, c = i - 1, l = (1 << i) - 1;
  if (a[1] = s.convert(this), i > 1) {
    var f = vt();
    for (s.sqrTo(a[1], f); u <= l; )
      a[u] = vt(), s.mulTo(f, a[u - 2], a[u]), u += 2;
  }
  var d = e.t - 1, g, h = !0, p = vt(), m;
  for (r = jc(e[d]) - 1; d >= 0; ) {
    for (r >= c ? g = e[d] >> r - c & l : (g = (e[d] & (1 << r + 1) - 1) << c - r, d > 0 && (g |= e[d - 1] >> this.DB + r - c)), u = i; !(g & 1); )
      g >>= 1, --u;
    if ((r -= u) < 0 && (r += this.DB, --d), h)
      a[g].copyTo(o), h = !1;
    else {
      for (; u > 1; )
        s.sqrTo(o, p), s.sqrTo(p, o), u -= 2;
      u > 0 ? s.sqrTo(o, p) : (m = o, o = p, p = m), s.mulTo(p, a[g], o);
    }
    for (; d >= 0 && !(e[d] & 1 << r); )
      s.sqrTo(o, p), m = o, o = p, p = m, --r < 0 && (r = this.DB - 1, --d);
  }
  var v = s.revert(o);
  return n(null, v), v;
}
me.prototype.copyTo = X1;
me.prototype.fromInt = eC;
me.prototype.fromString = tC;
me.prototype.clamp = nC;
me.prototype.dlShiftTo = uC;
me.prototype.drShiftTo = cC;
me.prototype.lShiftTo = lC;
me.prototype.rShiftTo = fC;
me.prototype.subTo = dC;
me.prototype.multiplyTo = hC;
me.prototype.squareTo = gC;
me.prototype.divRemTo = pC;
me.prototype.invDigit = yC;
me.prototype.addTo = vC;
me.prototype.toString = rC;
me.prototype.negate = iC;
me.prototype.abs = oC;
me.prototype.compareTo = sC;
me.prototype.bitLength = aC;
me.prototype.mod = MC;
me.prototype.equals = mC;
me.prototype.add = wC;
me.prototype.subtract = DC;
me.prototype.multiply = AC;
me.prototype.divide = EC;
me.prototype.modPow = bC;
me.ZERO = Tc(0);
me.ONE = Tc(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function Aa(e) {
  return Ke.Buffer.from(new V1().random(e).toString(), "hex");
}
var CC = /^[89a-f]/i, xC = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", OC = "userAttributes.", wr = /* @__PURE__ */ function() {
  function e(n) {
    this.N = new me(xC, 16), this.g = new me("2", 16), this.k = new me(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {
    }), this.infoBits = Ke.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = n;
  }
  var t = e.prototype;
  return t.getSmallAValue = function() {
    return this.smallAValue;
  }, t.getLargeAValue = function(r) {
    var i = this;
    this.largeAValue ? r(null, this.largeAValue) : this.calculateA(this.smallAValue, function(o, s) {
      o && r(o, null), i.largeAValue = s, r(null, i.largeAValue);
    });
  }, t.generateRandomSmallA = function() {
    var r = Aa(128).toString("hex"), i = new me(r, 16);
    return i;
  }, t.generateRandomString = function() {
    return Aa(40).toString("base64");
  }, t.getRandomPassword = function() {
    return this.randomPassword;
  }, t.getSaltDevices = function() {
    return this.SaltToHashDevices;
  }, t.getVerifierDevices = function() {
    return this.verifierDevices;
  }, t.generateHashDevice = function(r, i, o) {
    var s = this;
    this.randomPassword = this.generateRandomString();
    var a = "" + r + i + ":" + this.randomPassword, u = this.hash(a), c = Aa(16).toString("hex");
    this.SaltToHashDevices = this.padHex(new me(c, 16)), this.g.modPow(new me(this.hexHash(this.SaltToHashDevices + u), 16), this.N, function(l, f) {
      l && o(l, null), s.verifierDevices = s.padHex(f), o(null, null);
    });
  }, t.calculateA = function(r, i) {
    var o = this;
    this.g.modPow(r, this.N, function(s, a) {
      s && i(s, null), a.mod(o.N).equals(me.ZERO) && i(new Error("Illegal paramater. A mod N cannot be 0."), null), i(null, a);
    });
  }, t.calculateU = function(r, i) {
    this.UHexHash = this.hexHash(this.padHex(r) + this.padHex(i));
    var o = new me(this.UHexHash, 16);
    return o;
  }, t.hash = function(r) {
    var i = new bn.Sha256();
    i.update(r);
    var o = i.digestSync(), s = Ke.Buffer.from(o).toString("hex");
    return new Array(64 - s.length).join("0") + s;
  }, t.hexHash = function(r) {
    return this.hash(Ke.Buffer.from(r, "hex"));
  }, t.computehkdf = function(r, i) {
    var o = Ke.Buffer.concat([this.infoBits, Ke.Buffer.from(String.fromCharCode(1), "utf8")]), s = new bn.Sha256(i);
    s.update(r);
    var a = s.digestSync(), u = new bn.Sha256(a);
    u.update(o);
    var c = u.digestSync(), l = c, f = l.slice(0, 16);
    return f;
  }, t.getPasswordAuthenticationKey = function(r, i, o, s, a) {
    var u = this;
    if (o.mod(this.N).equals(me.ZERO))
      throw new Error("B cannot be zero.");
    if (this.UValue = this.calculateU(this.largeAValue, o), this.UValue.equals(me.ZERO))
      throw new Error("U cannot be zero.");
    var c = "" + this.poolName + r + ":" + i, l = this.hash(c), f = new me(this.hexHash(this.padHex(s) + l), 16);
    this.calculateS(f, o, function(d, g) {
      d && a(d, null);
      var h = u.computehkdf(Ke.Buffer.from(u.padHex(g), "hex"), Ke.Buffer.from(u.padHex(u.UValue), "hex"));
      a(null, h);
    });
  }, t.calculateS = function(r, i, o) {
    var s = this;
    this.g.modPow(r, this.N, function(a, u) {
      a && o(a, null);
      var c = i.subtract(s.k.multiply(u));
      c.modPow(s.smallAValue.add(s.UValue.multiply(r)), s.N, function(l, f) {
        l && o(l, null), o(null, f.mod(s.N));
      });
    });
  }, t.getNewPasswordRequiredChallengeUserAttributePrefix = function() {
    return OC;
  }, t.padHex = function(r) {
    if (!(r instanceof me))
      throw new Error("Not a BigInteger");
    var i = r.compareTo(me.ZERO) < 0, o = r.abs().toString(16);
    if (o = o.length % 2 !== 0 ? "0" + o : o, o = CC.test(o) ? "00" + o : o, i) {
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
var Jp = /* @__PURE__ */ function() {
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
      return JSON.parse(Ke.Buffer.from(r, "base64").toString("utf8"));
    } catch {
      return {};
    }
  }, e;
}();
function LC(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wu(e, t);
}
function wu(e, t) {
  return wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, wu(e, t);
}
var Du = /* @__PURE__ */ function(e) {
  LC(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, i = r.AccessToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(Jp);
function _C(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Au(e, t);
}
function Au(e, t) {
  return Au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Au(e, t);
}
var Eu = /* @__PURE__ */ function(e) {
  _C(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, i = r.IdToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(Jp);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Iu = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, i = r.RefreshToken;
    this.token = i || "";
  }
  var t = e.prototype;
  return t.getToken = function() {
    return this.token;
  }, e;
}(), kC = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Nu = "aws-amplify/" + kC, En = {
  userAgent: Nu + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (En.product = navigator.product || "", En.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      En.userAgent = Nu + " react-native", En.isReactNative = !0;
      break;
    default:
      En.userAgent = Nu + " js", En.isReactNative = !1;
      break;
  }
var zC = function() {
  return En.userAgent;
};
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Tu = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, i = r.IdToken, o = r.RefreshToken, s = r.AccessToken, a = r.ClockDrift;
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
    var r = Math.floor(/* @__PURE__ */ new Date() / 1e3), i = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
    return r - i;
  }, t.isValid = function() {
    var r = Math.floor(/* @__PURE__ */ new Date() / 1e3), i = r - this.clockDrift;
    return i < this.accessToken.getExpiration() && i < this.idToken.getExpiration();
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var PC = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], RC = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ch = /* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.getNowString = function() {
    var r = /* @__PURE__ */ new Date(), i = RC[r.getUTCDay()], o = PC[r.getUTCMonth()], s = r.getUTCDate(), a = r.getUTCHours();
    a < 10 && (a = "0" + a);
    var u = r.getUTCMinutes();
    u < 10 && (u = "0" + u);
    var c = r.getUTCSeconds();
    c < 10 && (c = "0" + c);
    var l = r.getUTCFullYear(), f = i + " " + o + " " + s + " " + a + ":" + u + ":" + c + " UTC " + l;
    return f;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ir = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, i = r.Name, o = r.Value;
    this.Name = i || "", this.Value = o || "";
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
var Un = {}, UC = /* @__PURE__ */ function() {
  function e() {
  }
  return e.setItem = function(n, r) {
    return Un[n] = r, Un[n];
  }, e.getItem = function(n) {
    return Object.prototype.hasOwnProperty.call(Un, n) ? Un[n] : void 0;
  }, e.removeItem = function(n) {
    return delete Un[n];
  }, e.clear = function() {
    return Un = {}, Un;
  }, e;
}(), Zp = /* @__PURE__ */ function() {
  function e() {
    try {
      this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
    } catch {
      this.storageWindow = UC;
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
var FC = typeof navigator < "u", lh = FC ? En.isReactNative ? "react-native" : navigator.userAgent : "nodejs", ju = /* @__PURE__ */ function() {
  function e(n) {
    if (n == null || n.Username == null || n.Pool == null)
      throw new Error("Username and Pool information are required.");
    this.username = n.Username || "", this.pool = n.Pool, this.Session = null, this.client = n.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = n.Storage || new Zp().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
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
  }, t.initiateAuth = function(r, i) {
    var o = this, s = r.getAuthParameters();
    s.USERNAME = this.username;
    var a = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), u = {
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
  }, t.authenticateUser = function(r, i) {
    return this.authenticationFlowType === "USER_PASSWORD_AUTH" ? this.authenticateUserPlainUsernamePassword(r, i) : this.authenticationFlowType === "USER_SRP_AUTH" || this.authenticationFlowType === "CUSTOM_AUTH" ? this.authenticateUserDefaultAuth(r, i) : i.onFailure(new Error("Authentication flow type is invalid."));
  }, t.authenticateUserDefaultAuth = function(r, i) {
    var o = this, s = new wr(this.pool.getUserPoolName()), a = new ch(), u, c, l = {};
    this.deviceKey != null && (l.DEVICE_KEY = this.deviceKey), l.USERNAME = this.username, s.getLargeAValue(function(f, d) {
      f && i.onFailure(f), l.SRP_A = d.toString(16), o.authenticationFlowType === "CUSTOM_AUTH" && (l.CHALLENGE_NAME = "SRP_A");
      var g = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), h = {
        AuthFlow: o.authenticationFlowType,
        ClientId: o.pool.getClientId(),
        AuthParameters: l,
        ClientMetadata: g
      };
      o.getUserContextData(o.username) && (h.UserContextData = o.getUserContextData(o.username)), o.client.request("InitiateAuth", h, function(p, m) {
        if (p)
          return i.onFailure(p);
        var v = m.ChallengeParameters;
        o.username = v.USER_ID_FOR_SRP, o.userDataKey = o.keyPrefix + "." + o.username + ".userData", u = new me(v.SRP_B, 16), c = new me(v.SALT, 16), o.getCachedDeviceKeyAndPassword(), s.getPasswordAuthenticationKey(o.username, r.getPassword(), u, c, function(w, j) {
          w && i.onFailure(w);
          var N = a.getNowString(), I = Ke.Buffer.concat([Ke.Buffer.from(o.pool.getUserPoolName(), "utf8"), Ke.Buffer.from(o.username, "utf8"), Ke.Buffer.from(v.SECRET_BLOCK, "base64"), Ke.Buffer.from(N, "utf8")]), B = new bn.Sha256(j);
          B.update(I);
          var z = B.digestSync(), W = Ke.Buffer.from(z).toString("base64"), $ = {};
          $.USERNAME = o.username, $.PASSWORD_CLAIM_SECRET_BLOCK = v.SECRET_BLOCK, $.TIMESTAMP = N, $.PASSWORD_CLAIM_SIGNATURE = W, o.deviceKey != null && ($.DEVICE_KEY = o.deviceKey);
          var b = function U(x, T) {
            return o.client.request("RespondToAuthChallenge", x, function(S, R) {
              return S && S.code === "ResourceNotFoundException" && S.message.toLowerCase().indexOf("device") !== -1 ? ($.DEVICE_KEY = null, o.deviceKey = null, o.randomPassword = null, o.deviceGroupKey = null, o.clearCachedDeviceKeyAndPassword(), U(x, T)) : T(S, R);
            });
          }, k = {
            ChallengeName: "PASSWORD_VERIFIER",
            ClientId: o.pool.getClientId(),
            ChallengeResponses: $,
            Session: m.Session,
            ClientMetadata: g
          };
          o.getUserContextData() && (k.UserContextData = o.getUserContextData()), b(k, function(U, x) {
            return U ? i.onFailure(U) : o.authenticateUserInternal(x, s, i);
          });
        });
      });
    });
  }, t.authenticateUserPlainUsernamePassword = function(r, i) {
    var o = this, s = {};
    if (s.USERNAME = this.username, s.PASSWORD = r.getPassword(), !s.PASSWORD) {
      i.onFailure(new Error("PASSWORD parameter is required"));
      return;
    }
    var a = new wr(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (s.DEVICE_KEY = this.deviceKey);
    var u = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), c = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: s,
      ClientMetadata: u
    };
    this.getUserContextData(this.username) && (c.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", c, function(l, f) {
      return l ? i.onFailure(l) : o.authenticateUserInternal(f, a, i);
    });
  }, t.authenticateUserInternal = function(r, i, o) {
    var s = this, a = r.ChallengeName, u = r.ChallengeParameters;
    if (a === "SMS_MFA")
      return this.Session = r.Session, o.mfaRequired(a, u);
    if (a === "SELECT_MFA_TYPE")
      return this.Session = r.Session, o.selectMFAType(a, u);
    if (a === "MFA_SETUP")
      return this.Session = r.Session, o.mfaSetup(a, u);
    if (a === "SOFTWARE_TOKEN_MFA")
      return this.Session = r.Session, o.totpRequired(a, u);
    if (a === "CUSTOM_CHALLENGE")
      return this.Session = r.Session, o.customChallenge(u);
    if (a === "NEW_PASSWORD_REQUIRED") {
      this.Session = r.Session;
      var c = null, l = null, f = [], d = i.getNewPasswordRequiredChallengeUserAttributePrefix();
      if (u && (c = JSON.parse(r.ChallengeParameters.userAttributes), l = JSON.parse(r.ChallengeParameters.requiredAttributes)), l)
        for (var g = 0; g < l.length; g++)
          f[g] = l[g].substr(d.length);
      return o.newPasswordRequired(c, f);
    }
    if (a === "DEVICE_SRP_AUTH") {
      this.Session = r.Session, this.getDeviceResponse(o);
      return;
    }
    this.signInUserSession = this.getCognitoUserSession(r.AuthenticationResult), this.challengeName = a, this.cacheTokens();
    var h = r.AuthenticationResult.NewDeviceMetadata;
    if (h == null)
      return o.onSuccess(this.signInUserSession);
    i.generateHashDevice(r.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, r.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(p) {
      if (p)
        return o.onFailure(p);
      var m = {
        Salt: Ke.Buffer.from(i.getSaltDevices(), "hex").toString("base64"),
        PasswordVerifier: Ke.Buffer.from(i.getVerifierDevices(), "hex").toString("base64")
      };
      s.verifierDevices = m.PasswordVerifier, s.deviceGroupKey = h.DeviceGroupKey, s.randomPassword = i.getRandomPassword(), s.client.request("ConfirmDevice", {
        DeviceKey: h.DeviceKey,
        AccessToken: s.signInUserSession.getAccessToken().getJwtToken(),
        DeviceSecretVerifierConfig: m,
        DeviceName: lh
      }, function(v, w) {
        return v ? o.onFailure(v) : (s.deviceKey = r.AuthenticationResult.NewDeviceMetadata.DeviceKey, s.cacheDeviceKeyAndPassword(), w.UserConfirmationNecessary === !0 ? o.onSuccess(s.signInUserSession, w.UserConfirmationNecessary) : o.onSuccess(s.signInUserSession));
      });
    });
  }, t.completeNewPasswordChallenge = function(r, i, o, s) {
    var a = this;
    if (!r)
      return o.onFailure(new Error("New password is required."));
    var u = new wr(this.pool.getUserPoolName()), c = u.getNewPasswordRequiredChallengeUserAttributePrefix(), l = {};
    i && Object.keys(i).forEach(function(d) {
      l[c + d] = i[d];
    }), l.NEW_PASSWORD = r, l.USERNAME = this.username;
    var f = {
      ChallengeName: "NEW_PASSWORD_REQUIRED",
      ClientId: this.pool.getClientId(),
      ChallengeResponses: l,
      Session: this.Session,
      ClientMetadata: s
    };
    this.getUserContextData() && (f.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", f, function(d, g) {
      return d ? o.onFailure(d) : a.authenticateUserInternal(g, u, o);
    });
  }, t.getDeviceResponse = function(r, i) {
    var o = this, s = new wr(this.deviceGroupKey), a = new ch(), u = {};
    u.USERNAME = this.username, u.DEVICE_KEY = this.deviceKey, s.getLargeAValue(function(c, l) {
      c && r.onFailure(c), u.SRP_A = l.toString(16);
      var f = {
        ChallengeName: "DEVICE_SRP_AUTH",
        ClientId: o.pool.getClientId(),
        ChallengeResponses: u,
        ClientMetadata: i,
        Session: o.Session
      };
      o.getUserContextData() && (f.UserContextData = o.getUserContextData()), o.client.request("RespondToAuthChallenge", f, function(d, g) {
        if (d)
          return r.onFailure(d);
        var h = g.ChallengeParameters, p = new me(h.SRP_B, 16), m = new me(h.SALT, 16);
        s.getPasswordAuthenticationKey(o.deviceKey, o.randomPassword, p, m, function(v, w) {
          if (v)
            return r.onFailure(v);
          var j = a.getNowString(), N = Ke.Buffer.concat([Ke.Buffer.from(o.deviceGroupKey, "utf8"), Ke.Buffer.from(o.deviceKey, "utf8"), Ke.Buffer.from(h.SECRET_BLOCK, "base64"), Ke.Buffer.from(j, "utf8")]), I = new bn.Sha256(w);
          I.update(N);
          var B = I.digestSync(), z = Ke.Buffer.from(B).toString("base64"), W = {};
          W.USERNAME = o.username, W.PASSWORD_CLAIM_SECRET_BLOCK = h.SECRET_BLOCK, W.TIMESTAMP = j, W.PASSWORD_CLAIM_SIGNATURE = z, W.DEVICE_KEY = o.deviceKey;
          var $ = {
            ChallengeName: "DEVICE_PASSWORD_VERIFIER",
            ClientId: o.pool.getClientId(),
            ChallengeResponses: W,
            Session: g.Session
          };
          o.getUserContextData() && ($.UserContextData = o.getUserContextData()), o.client.request("RespondToAuthChallenge", $, function(b, k) {
            return b ? r.onFailure(b) : (o.signInUserSession = o.getCognitoUserSession(k.AuthenticationResult), o.cacheTokens(), r.onSuccess(o.signInUserSession));
          });
        });
      });
    });
  }, t.confirmRegistration = function(r, i, o, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      ConfirmationCode: r,
      Username: this.username,
      ForceAliasCreation: i,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", a, function(u) {
      return u ? o(u, null) : o(null, "SUCCESS");
    });
  }, t.sendCustomChallengeAnswer = function(r, i, o) {
    var s = this, a = {};
    a.USERNAME = this.username, a.ANSWER = r;
    var u = new wr(this.pool.getUserPoolName());
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
  }, t.sendMFACode = function(r, i, o, s) {
    var a = this, u = {};
    u.USERNAME = this.username, u.SMS_MFA_CODE = r;
    var c = o || "SMS_MFA";
    c === "SOFTWARE_TOKEN_MFA" && (u.SOFTWARE_TOKEN_MFA_CODE = r), this.deviceKey != null && (u.DEVICE_KEY = this.deviceKey);
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
      var g = d.ChallengeName;
      if (g === "DEVICE_SRP_AUTH") {
        a.getDeviceResponse(i);
        return;
      }
      if (a.signInUserSession = a.getCognitoUserSession(d.AuthenticationResult), a.cacheTokens(), d.AuthenticationResult.NewDeviceMetadata == null)
        return i.onSuccess(a.signInUserSession);
      var h = new wr(a.pool.getUserPoolName());
      h.generateHashDevice(d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, d.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(p) {
        if (p)
          return i.onFailure(p);
        var m = {
          Salt: Ke.Buffer.from(h.getSaltDevices(), "hex").toString("base64"),
          PasswordVerifier: Ke.Buffer.from(h.getVerifierDevices(), "hex").toString("base64")
        };
        a.verifierDevices = m.PasswordVerifier, a.deviceGroupKey = d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, a.randomPassword = h.getRandomPassword(), a.client.request("ConfirmDevice", {
          DeviceKey: d.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          AccessToken: a.signInUserSession.getAccessToken().getJwtToken(),
          DeviceSecretVerifierConfig: m,
          DeviceName: lh
        }, function(v, w) {
          return v ? i.onFailure(v) : (a.deviceKey = d.AuthenticationResult.NewDeviceMetadata.DeviceKey, a.cacheDeviceKeyAndPassword(), w.UserConfirmationNecessary === !0 ? i.onSuccess(a.signInUserSession, w.UserConfirmationNecessary) : i.onSuccess(a.signInUserSession));
        });
      });
    });
  }, t.changePassword = function(r, i, o, s) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return o(new Error("User is not authenticated"), null);
    this.client.request("ChangePassword", {
      PreviousPassword: r,
      ProposedPassword: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: s
    }, function(a) {
      return a ? o(a, null) : o(null, "SUCCESS");
    });
  }, t.enableMFA = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    var i = [], o = {
      DeliveryMedium: "SMS",
      AttributeName: "phone_number"
    };
    i.push(o), this.client.request("SetUserSettings", {
      MFAOptions: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? r(s, null) : r(null, "SUCCESS");
    });
  }, t.setUserMfaPreference = function(r, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o(new Error("User is not authenticated"), null);
    this.client.request("SetUserMFAPreference", {
      SMSMfaSettings: r,
      SoftwareTokenMfaSettings: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? o(s, null) : o(null, "SUCCESS");
    });
  }, t.disableMFA = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    var i = [];
    this.client.request("SetUserSettings", {
      MFAOptions: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o) {
      return o ? r(o, null) : r(null, "SUCCESS");
    });
  }, t.deleteUser = function(r, i) {
    var o = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    this.client.request("DeleteUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: i
    }, function(s) {
      return s ? r(s, null) : (o.clearCachedUser(), r(null, "SUCCESS"));
    });
  }, t.updateAttributes = function(r, i, o) {
    var s = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i(new Error("User is not authenticated"), null);
    this.client.request("UpdateUserAttributes", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserAttributes: r,
      ClientMetadata: o
    }, function(a, u) {
      return a ? i(a, null) : s.getUserData(function() {
        return i(null, "SUCCESS", u);
      }, {
        bypassCache: !0
      });
    });
  }, t.getUserAttributes = function(r) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return r(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i, o) {
      if (i)
        return r(i, null);
      for (var s = [], a = 0; a < o.UserAttributes.length; a++) {
        var u = {
          Name: o.UserAttributes[a].Name,
          Value: o.UserAttributes[a].Value
        }, c = new Ir(u);
        s.push(c);
      }
      return r(null, s);
    });
  }, t.getMFAOptions = function(r) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return r(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i, o) {
      return i ? r(i, null) : r(null, o.MFAOptions);
    });
  }, t.createGetUserRequest = function() {
    return this.client.promisifyRequest("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    });
  }, t.refreshSessionIfPossible = function(r) {
    var i = this;
    return r === void 0 && (r = {}), new Promise(function(o) {
      var s = i.signInUserSession.getRefreshToken();
      s && s.getToken() ? i.refreshSession(s, o, r.clientMetadata) : o();
    });
  }, t.getUserData = function(r, i) {
    var o = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return this.clearCachedUserData(), r(new Error("User is not authenticated"), null);
    var s = this.getUserDataFromCache();
    if (!s) {
      this.fetchUserData().then(function(a) {
        r(null, a);
      }).catch(r);
      return;
    }
    if (this.isFetchUserDataAndTokenRequired(i)) {
      this.fetchUserData().then(function(a) {
        return o.refreshSessionIfPossible(i).then(function() {
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
    var i = r || {}, o = i.bypassCache, s = o === void 0 ? !1 : o;
    return s;
  }, t.fetchUserData = function() {
    var r = this;
    return this.createGetUserRequest().then(function(i) {
      return r.cacheUserData(i), i;
    });
  }, t.deleteAttributes = function(r, i) {
    var o = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return i(new Error("User is not authenticated"), null);
    this.client.request("DeleteUserAttributes", {
      UserAttributeNames: r,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? i(s, null) : o.getUserData(function() {
        return i(null, "SUCCESS");
      }, {
        bypassCache: !0
      });
    });
  }, t.resendConfirmationCode = function(r, i) {
    var o = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: i
    };
    this.client.request("ResendConfirmationCode", o, function(s, a) {
      return s ? r(s, null) : r(null, a);
    });
  }, t.getSession = function(r, i) {
    if (i === void 0 && (i = {}), this.username == null)
      return r(new Error("Username is null. Cannot retrieve a new session"), null);
    if (this.signInUserSession != null && this.signInUserSession.isValid())
      return r(null, this.signInUserSession);
    var o = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, s = o + ".idToken", a = o + ".accessToken", u = o + ".refreshToken", c = o + ".clockDrift";
    if (this.storage.getItem(s)) {
      var l = new Eu({
        IdToken: this.storage.getItem(s)
      }), f = new Du({
        AccessToken: this.storage.getItem(a)
      }), d = new Iu({
        RefreshToken: this.storage.getItem(u)
      }), g = parseInt(this.storage.getItem(c), 0) || 0, h = {
        IdToken: l,
        AccessToken: f,
        RefreshToken: d,
        ClockDrift: g
      }, p = new Tu(h);
      if (p.isValid())
        return this.signInUserSession = p, r(null, this.signInUserSession);
      if (!d.getToken())
        return r(new Error("Cannot retrieve a new session. Please authenticate."), null);
      this.refreshSession(d, r, i.clientMetadata);
    } else
      r(new Error("Local storage is missing an ID Token, Please authenticate"), null);
  }, t.refreshSession = function(r, i, o) {
    var s = this, a = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(i) : i, u = {};
    u.REFRESH_TOKEN = r.getToken();
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
    this.getUserContextData() && (d.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", d, function(g, h) {
      if (g)
        return g.code === "NotAuthorizedException" && s.clearCachedUser(), a(g, null);
      if (h) {
        var p = h.AuthenticationResult;
        return Object.prototype.hasOwnProperty.call(p, "RefreshToken") || (p.RefreshToken = r.getToken()), s.signInUserSession = s.getCognitoUserSession(p), s.cacheTokens(), a(null, s.signInUserSession);
      }
    });
  }, t.cacheTokens = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(), i = r + "." + this.username + ".idToken", o = r + "." + this.username + ".accessToken", s = r + "." + this.username + ".refreshToken", a = r + "." + this.username + ".clockDrift", u = r + ".LastAuthUser";
    this.storage.setItem(i, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(o, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(s, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(a, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(u, this.username);
  }, t.cacheUserData = function(r) {
    this.storage.setItem(this.userDataKey, JSON.stringify(r));
  }, t.clearCachedUserData = function() {
    this.storage.removeItem(this.userDataKey);
  }, t.clearCachedUser = function() {
    this.clearCachedTokens(), this.clearCachedUserData();
  }, t.cacheDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = r + ".deviceKey", o = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.setItem(i, this.deviceKey), this.storage.setItem(o, this.randomPassword), this.storage.setItem(s, this.deviceGroupKey);
  }, t.getCachedDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = r + ".deviceKey", o = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.getItem(i) && (this.deviceKey = this.storage.getItem(i), this.randomPassword = this.storage.getItem(o), this.deviceGroupKey = this.storage.getItem(s));
  }, t.clearCachedDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, i = r + ".deviceKey", o = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.removeItem(i), this.storage.removeItem(o), this.storage.removeItem(s);
  }, t.clearCachedTokens = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(), i = r + "." + this.username + ".idToken", o = r + "." + this.username + ".accessToken", s = r + "." + this.username + ".refreshToken", a = r + ".LastAuthUser", u = r + "." + this.username + ".clockDrift";
    this.storage.removeItem(i), this.storage.removeItem(o), this.storage.removeItem(s), this.storage.removeItem(a), this.storage.removeItem(u);
  }, t.getCognitoUserSession = function(r) {
    var i = new Eu(r), o = new Du(r), s = new Iu(r), a = {
      IdToken: i,
      AccessToken: o,
      RefreshToken: s
    };
    return new Tu(a);
  }, t.forgotPassword = function(r, i) {
    var o = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: i
    };
    this.getUserContextData() && (o.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", o, function(s, a) {
      return s ? r.onFailure(s) : typeof r.inputVerificationCode == "function" ? r.inputVerificationCode(a) : r.onSuccess(a);
    });
  }, t.confirmPassword = function(r, i, o, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ConfirmationCode: r,
      Password: i,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", a, function(u) {
      return u ? o.onFailure(u) : o.onSuccess("SUCCESS");
    });
  }, t.getAttributeVerificationCode = function(r, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    this.client.request("GetUserAttributeVerificationCode", {
      AttributeName: r,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: o
    }, function(s, a) {
      return s ? i.onFailure(s) : typeof i.inputVerificationCode == "function" ? i.inputVerificationCode(a) : i.onSuccess("SUCCESS");
    });
  }, t.verifyAttribute = function(r, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    this.client.request("VerifyUserAttribute", {
      AttributeName: r,
      Code: i,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? o.onFailure(s) : o.onSuccess("SUCCESS");
    });
  }, t.getDevice = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("GetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey
    }, function(i, o) {
      return i ? r.onFailure(i) : r.onSuccess(o);
    });
  }, t.forgetSpecificDevice = function(r, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    this.client.request("ForgetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: r
    }, function(o) {
      return o ? i.onFailure(o) : i.onSuccess("SUCCESS");
    });
  }, t.forgetDevice = function(r) {
    var i = this;
    this.forgetSpecificDevice(this.deviceKey, {
      onFailure: r.onFailure,
      onSuccess: function(s) {
        return i.deviceKey = null, i.deviceGroupKey = null, i.randomPassword = null, i.clearCachedDeviceKeyAndPassword(), r.onSuccess(s);
      }
    });
  }, t.setDeviceStatusRemembered = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "remembered"
    }, function(i) {
      return i ? r.onFailure(i) : r.onSuccess("SUCCESS");
    });
  }, t.setDeviceStatusNotRemembered = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "not_remembered"
    }, function(i) {
      return i ? r.onFailure(i) : r.onSuccess("SUCCESS");
    });
  }, t.listDevices = function(r, i, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    var s = {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      Limit: r
    };
    i && (s.PaginationToken = i), this.client.request("ListDevices", s, function(a, u) {
      return a ? o.onFailure(a) : o.onSuccess(u);
    });
  }, t.globalSignOut = function(r) {
    var i = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("GlobalSignOut", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o) {
      return o ? r.onFailure(o) : (i.clearCachedUser(), r.onSuccess("SUCCESS"));
    });
  }, t.signOut = function(r) {
    var i = this;
    if (!r || typeof r != "function") {
      this.cleanClientData();
      return;
    }
    this.getSession(function(o, s) {
      if (o)
        return r(o);
      i.revokeTokens(function(a) {
        i.cleanClientData(), r(a);
      });
    });
  }, t.revokeTokens = function(r) {
    if (r === void 0 && (r = function() {
    }), typeof r != "function")
      throw new Error("Invalid revokeTokenCallback. It should be a function.");
    if (!this.signInUserSession) {
      var i = new Error("User is not authenticated");
      return r(i);
    }
    if (!this.signInUserSession.getAccessToken()) {
      var o = new Error("No Access token available");
      return r(o);
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
        var i = r.decodePayload(), o = i.origin_jti;
        return !!o;
      } catch {
      }
    return !1;
  }, t.cleanClientData = function() {
    this.signInUserSession = null, this.clearCachedUser();
  }, t.revokeToken = function(r) {
    var i = r.token, o = r.callback;
    this.client.requestWithRetry("RevokeToken", {
      Token: i,
      ClientId: this.pool.getClientId()
    }, function(s) {
      if (s)
        return o(s);
      o();
    });
  }, t.sendMFASelectionAnswer = function(r, i) {
    var o = this, s = {};
    s.USERNAME = this.username, s.ANSWER = r;
    var a = {
      ChallengeName: "SELECT_MFA_TYPE",
      ChallengeResponses: s,
      ClientId: this.pool.getClientId(),
      Session: this.Session
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function(u, c) {
      if (u)
        return i.onFailure(u);
      if (o.Session = c.Session, r === "SMS_MFA")
        return i.mfaRequired(c.ChallengeName, c.ChallengeParameters);
      if (r === "SOFTWARE_TOKEN_MFA")
        return i.totpRequired(c.ChallengeName, c.ChallengeParameters);
    });
  }, t.getUserContextData = function() {
    var r = this.pool;
    return r.getUserContextData(this.username);
  }, t.associateSoftwareToken = function(r) {
    var i = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o, s) {
      return o ? r.onFailure(o) : r.associateSecretCode(s.SecretCode);
    }) : this.client.request("AssociateSoftwareToken", {
      Session: this.Session
    }, function(o, s) {
      return o ? r.onFailure(o) : (i.Session = s.Session, r.associateSecretCode(s.SecretCode));
    });
  }, t.verifySoftwareToken = function(r, i, o) {
    var s = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserCode: r,
      FriendlyDeviceName: i
    }, function(a, u) {
      return a ? o.onFailure(a) : o.onSuccess(u);
    }) : this.client.request("VerifySoftwareToken", {
      Session: this.Session,
      UserCode: r,
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
function YC(e, t) {
  return t = t || {}, new Promise(function(n, r) {
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
      }), n(u());
    }, i.onerror = r, i.withCredentials = t.credentials == "include", t.headers)
      i.setRequestHeader(c, t.headers[c]);
    i.send(t.body || null);
  });
}
const BC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YC
}, Symbol.toStringTag, { value: "Module" })), fh = /* @__PURE__ */ Bi(BC);
self.fetch || (self.fetch = fh.default || fh);
function Xp() {
}
Xp.prototype.userAgent = zC();
function QC(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ri(e, t);
}
function Su(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Su = function(r) {
    if (r === null || !WC(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return No(r, arguments, bu(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), Ri(i, r);
  }, Su(e);
}
function No(e, t, n) {
  return $C() ? No = Reflect.construct.bind() : No = function(i, o, s) {
    var a = [null];
    a.push.apply(a, o);
    var u = Function.bind.apply(i, a), c = new u();
    return s && Ri(c, s.prototype), c;
  }, No.apply(null, arguments);
}
function $C() {
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
function WC(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ri(e, t) {
  return Ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Ri(e, t);
}
function bu(e) {
  return bu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, bu(e);
}
var VC = /* @__PURE__ */ function(e) {
  QC(t, e);
  function t(n, r, i, o) {
    var s;
    return s = e.call(this, n) || this, s.code = r, s.name = i, s.statusCode = o, s;
  }
  return t;
}(/* @__PURE__ */ Su(Error)), HC = /* @__PURE__ */ function() {
  function e(n, r, i) {
    this.endpoint = r || "https://cognito-idp." + n + ".amazonaws.com/";
    var o = i || {}, s = o.credentials;
    this.fetchOptions = s ? {
      credentials: s
    } : {};
  }
  var t = e.prototype;
  return t.promisifyRequest = function(r, i) {
    var o = this;
    return new Promise(function(s, a) {
      o.request(r, i, function(u, c) {
        u ? a(new VC(u.message, u.code, u.name, u.statusCode)) : s(c);
      });
    });
  }, t.requestWithRetry = function(r, i, o) {
    var s = this, a = 5 * 1e3;
    JC(function(u) {
      return new Promise(function(c, l) {
        s.request(r, u, function(f, d) {
          f ? l(f) : c(d);
        });
      });
    }, [i], a).then(function(u) {
      return o(null, u);
    }).catch(function(u) {
      return o(u);
    });
  }, t.request = function(r, i, o) {
    var s = {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService." + r,
      "X-Amz-User-Agent": Xp.prototype.userAgent,
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
}(), Mo = {
  debug: function() {
  }
}, qC = function(t) {
  var n = "nonRetryable";
  return t && t[n];
};
function eM(e, t, n, r) {
  if (r === void 0 && (r = 1), typeof e != "function")
    throw Error("functionToRetry must be a function");
  return Mo.debug(e.name + " attempt #" + r + " with args: " + JSON.stringify(t)), e.apply(void 0, t).catch(function(i) {
    if (Mo.debug("error on " + e.name, i), qC(i))
      throw Mo.debug(e.name + " non retryable error", i), i;
    var o = n(r, t, i);
    if (Mo.debug(e.name + " retrying in " + o + " ms"), o !== !1)
      return new Promise(function(s) {
        return setTimeout(s, o);
      }).then(function() {
        return eM(e, t, n, r + 1);
      });
    throw i;
  });
}
function KC(e) {
  var t = 100, n = 100;
  return function(r) {
    var i = Math.pow(2, r) * t + n * Math.random();
    return i > e ? !1 : i;
  };
}
var GC = 5 * 60 * 1e3;
function JC(e, t, n) {
  return n === void 0 && (n = GC), eM(e, t, KC(n));
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var ZC = 55, XC = /* @__PURE__ */ function() {
  function e(n, r) {
    var i = n || {}, o = i.UserPoolId, s = i.ClientId, a = i.endpoint, u = i.fetchOptions, c = i.AdvancedSecurityDataCollectionFlag;
    if (!o || !s)
      throw new Error("Both UserPoolId and ClientId are required.");
    if (o.length > ZC || !/^[\w-]+_[0-9a-zA-Z]+$/.test(o))
      throw new Error("Invalid UserPoolId format.");
    var l = o.split("_")[0];
    this.userPoolId = o, this.clientId = s, this.client = new HC(l, a, u), this.advancedSecurityDataCollectionFlag = c !== !1, this.storage = n.Storage || new Zp().getStorage(), r && (this.wrapRefreshSessionCallback = r);
  }
  var t = e.prototype;
  return t.getUserPoolId = function() {
    return this.userPoolId;
  }, t.getUserPoolName = function() {
    return this.getUserPoolId().split("_")[1];
  }, t.getClientId = function() {
    return this.clientId;
  }, t.signUp = function(r, i, o, s, a, u) {
    var c = this, l = {
      ClientId: this.clientId,
      Username: r,
      Password: i,
      UserAttributes: o,
      ValidationData: s,
      ClientMetadata: u
    };
    this.getUserContextData(r) && (l.UserContextData = this.getUserContextData(r)), this.client.request("SignUp", l, function(f, d) {
      if (f)
        return a(f, null);
      var g = {
        Username: r,
        Pool: c,
        Storage: c.storage
      }, h = {
        user: new ju(g),
        userConfirmed: d.UserConfirmed,
        userSub: d.UserSub,
        codeDeliveryDetails: d.CodeDeliveryDetails
      };
      return a(null, h);
    });
  }, t.getCurrentUser = function() {
    var r = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser", i = this.storage.getItem(r);
    if (i) {
      var o = {
        Username: i,
        Pool: this,
        Storage: this.storage
      };
      return new ju(o);
    }
    return null;
  }, t.getUserContextData = function(r) {
    if (!(typeof AmazonCognitoAdvancedSecurityData > "u")) {
      var i = AmazonCognitoAdvancedSecurityData;
      if (this.advancedSecurityDataCollectionFlag) {
        var o = i.getData(r, this.userPoolId, this.clientId);
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
}(), Hn = {}, ex = {
  get exports() {
    return Hn;
  },
  set exports(e) {
    Hn = e;
  }
};
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
      var i = window.Cookies, o = window.Cookies = n();
      o.noConflict = function() {
        return window.Cookies = i, o;
      };
    }
  })(function() {
    function n() {
      for (var o = 0, s = {}; o < arguments.length; o++) {
        var a = arguments[o];
        for (var u in a)
          s[u] = a[u];
      }
      return s;
    }
    function r(o) {
      return o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function i(o) {
      function s() {
      }
      function a(c, l, f) {
        if (!(typeof document > "u")) {
          f = n({
            path: "/"
          }, s.defaults, f), typeof f.expires == "number" && (f.expires = new Date(/* @__PURE__ */ new Date() * 1 + f.expires * 864e5)), f.expires = f.expires ? f.expires.toUTCString() : "";
          try {
            var d = JSON.stringify(l);
            /^[\{\[]/.test(d) && (l = d);
          } catch {
          }
          l = o.write ? o.write(l, c) : encodeURIComponent(String(l)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var g = "";
          for (var h in f)
            f[h] && (g += "; " + h, f[h] !== !0 && (g += "=" + f[h].split(";")[0]));
          return document.cookie = c + "=" + l + g;
        }
      }
      function u(c, l) {
        if (!(typeof document > "u")) {
          for (var f = {}, d = document.cookie ? document.cookie.split("; ") : [], g = 0; g < d.length; g++) {
            var h = d[g].split("="), p = h.slice(1).join("=");
            !l && p.charAt(0) === '"' && (p = p.slice(1, -1));
            try {
              var m = r(h[0]);
              if (p = (o.read || o)(p, m) || r(p), l)
                try {
                  p = JSON.parse(p);
                } catch {
                }
              if (f[m] = p, c === m)
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
        a(c, "", n(l, {
          expires: -1
        }));
      }, s.defaults = {}, s.withConverter = i, s;
    }
    return i(function() {
    });
  });
})(ex);
var tx = /* @__PURE__ */ function() {
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
  return t.setItem = function(r, i) {
    var o = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (o.sameSite = this.sameSite), Hn.set(r, i, o), Hn.get(r);
  }, t.getItem = function(r) {
    return Hn.get(r);
  }, t.removeItem = function(r) {
    var i = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (i.sameSite = this.sameSite), Hn.remove(r, i);
  }, t.clear = function() {
    for (var r = Hn.get(), i = Object.keys(r).length, o = 0; o < i; ++o)
      this.removeItem(Object.keys(r)[o]);
    return {};
  }, e;
}(), nx = "_self", rx = function(e) {
  var t = window.open(e, nx);
  return t ? Promise.resolve(t) : Promise.reject();
}, ix = function(e) {
  window.sessionStorage.setItem("oauth_state", e);
}, ox = function() {
  var e = window.sessionStorage.getItem("oauth_state");
  return window.sessionStorage.removeItem("oauth_state"), e;
}, sx = function(e) {
  window.sessionStorage.setItem("ouath_pkce_key", e);
}, ax = function() {
  var e = window.sessionStorage.getItem("ouath_pkce_key");
  return window.sessionStorage.removeItem("ouath_pkce_key"), e;
}, ux = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", Ea = function(e, t, n) {
  on.dispatch("auth", { event: e, data: t, message: n }, "Auth", ux);
}, Dr = new Ht("OAuth"), cx = (
  /** @class */
  function() {
    function e(t) {
      var n = t.config, r = t.cognitoClientId, i = t.scopes, o = i === void 0 ? [] : i;
      if (this._urlOpener = n.urlOpener || rx, this._config = n, this._cognitoClientId = r, !this.isValidScopes(o))
        throw Error("scopes must be a String Array");
      this._scopes = o;
    }
    return e.prototype.isValidScopes = function(t) {
      return Array.isArray(t) && t.every(function(n) {
        return typeof n == "string";
      });
    }, e.prototype.oauthSignIn = function(t, n, r, i, o, s) {
      t === void 0 && (t = "code"), o === void 0 && (o = $o.Cognito);
      var a = this._generateState(32), u = s ? a + "-" + wT(s) : a;
      ix(u);
      var c = this._generateRandom(128);
      sx(c);
      var l = this._generateChallenge(c), f = "S256", d = this._scopes.join(" "), g = Object.entries(ue.__assign(ue.__assign({ redirect_uri: r, response_type: t, client_id: i, identity_provider: o, scope: d, state: u }, t === "code" ? { code_challenge: l } : {}), t === "code" ? { code_challenge_method: f } : {})).map(function(p) {
        var m = ue.__read(p, 2), v = m[0], w = m[1];
        return encodeURIComponent(v) + "=" + encodeURIComponent(w);
      }).join("&"), h = "https://" + n + "/oauth2/authorize?" + g;
      Dr.debug("Redirecting to " + h), this._urlOpener(h, r);
    }, e.prototype._handleCodeFlow = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, r, i, o, s, a, u, c, l, f, d, g, h, p;
        return ue.__generator(this, function(m) {
          switch (m.label) {
            case 0:
              return n = (Dn(t).query || "").split("&").map(function(v) {
                return v.split("=");
              }).reduce(function(v, w) {
                var j, N = ue.__read(w, 2), I = N[0], B = N[1];
                return ue.__assign(ue.__assign({}, v), (j = {}, j[I] = B, j));
              }, { code: void 0 }).code, r = Dn(t).pathname || "/", i = Dn(this._config.redirectSignIn).pathname || "/", !n || r !== i ? [
                2
                /*return*/
              ] : (o = "https://" + this._config.domain + "/oauth2/token", Ea("codeFlow", {}, "Retrieving tokens from " + o), s = Gn(this._config) ? this._cognitoClientId : this._config.clientID, a = Gn(this._config) ? this._config.redirectSignIn : this._config.redirectUri, u = ax(), c = ue.__assign({
                grant_type: "authorization_code",
                code: n,
                client_id: s,
                redirect_uri: a
              }, u ? { code_verifier: u } : {}), Dr.debug("Calling token endpoint: " + o + " with", c), l = Object.entries(c).map(function(v) {
                var w = ue.__read(v, 2), j = w[0], N = w[1];
                return encodeURIComponent(j) + "=" + encodeURIComponent(N);
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
              if (f = m.sent(), d = f.access_token, g = f.refresh_token, h = f.id_token, p = f.error, p)
                throw new Error(p);
              return [2, {
                accessToken: d,
                refreshToken: g,
                idToken: h
              }];
          }
        });
      });
    }, e.prototype._handleImplicitFlow = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, r, i;
        return ue.__generator(this, function(o) {
          return n = (Dn(t).hash || "#").substr(1).split("&").map(function(s) {
            return s.split("=");
          }).reduce(function(s, a) {
            var u, c = ue.__read(a, 2), l = c[0], f = c[1];
            return ue.__assign(ue.__assign({}, s), (u = {}, u[l] = f, u));
          }, {
            id_token: void 0,
            access_token: void 0
          }), r = n.id_token, i = n.access_token, Ea("implicitFlow", {}, "Got tokens from " + t), Dr.debug("Retrieving implicit tokens from " + t + " with"), [2, {
            accessToken: i,
            idToken: r,
            refreshToken: null
          }];
        });
      });
    }, e.prototype.handleAuthResponse = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, r, i, o, s, a, u;
        return ue.__generator(this, function(c) {
          switch (c.label) {
            case 0:
              if (c.trys.push([0, 5, , 6]), n = t ? ue.__assign(ue.__assign({}, (Dn(t).hash || "#").substr(1).split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), g = d[0], h = d[1];
                return l[g] = h, l;
              }, {})), (Dn(t).query || "").split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), g = d[0], h = d[1];
                return l[g] = h, l;
              }, {})) : {}, r = n.error, i = n.error_description, r)
                throw new Error(i);
              return o = this._validateState(n), Dr.debug("Starting " + this._config.responseType + " flow with " + t), this._config.responseType !== "code" ? [3, 2] : (s = [{}], [4, this._handleCodeFlow(t)]);
            case 1:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, s.concat([c.sent()])), { state: o }])];
            case 2:
              return a = [{}], [4, this._handleImplicitFlow(t)];
            case 3:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, a.concat([c.sent()])), { state: o }])];
            case 4:
              return [3, 6];
            case 5:
              throw u = c.sent(), Dr.debug("Error handling auth response.", u), u;
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
        var n = ox(), r = t.state;
        if (n && n !== r)
          throw new Error("Invalid state in OAuth flow");
        return r;
      }
    }, e.prototype.signOut = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return ue.__generator(this, function(i) {
          return t = "https://" + this._config.domain + "/logout?", n = Gn(this._config) ? this._cognitoClientId : this._config.oauth.clientID, r = Gn(this._config) ? this._config.redirectSignOut : this._config.returnTo, t += Object.entries({
            client_id: n,
            logout_uri: encodeURIComponent(r)
          }).map(function(o) {
            var s = ue.__read(o, 2), a = s[0], u = s[1];
            return a + "=" + u;
          }).join("&"), Ea("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + t), Dr.debug("Signing out from " + t), [2, this._urlOpener(t, r)];
        });
      });
    }, e.prototype._generateState = function(t) {
      for (var n = "", r = t, i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; r > 0; --r)
        n += i[Math.round(Math.random() * (i.length - 1))];
      return n;
    }, e.prototype._generateChallenge = function(t) {
      var n = new bn.Sha256();
      n.update(t);
      var r = n.digestSync(), i = Ke.Buffer.from(r).toString("base64"), o = this._base64URL(i);
      return o;
    }, e.prototype._base64URL = function(t) {
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, e.prototype._generateRandom = function(t) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = new Uint8Array(t);
      if (typeof window < "u" && window.crypto)
        window.crypto.getRandomValues(r);
      else
        for (var i = 0; i < t; i += 1)
          r[i] = Math.random() * n.length | 0;
      return this._bufferToString(r);
    }, e.prototype._bufferToString = function(t) {
      for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = [], i = 0; i < t.byteLength; i += 1) {
        var o = t[i] % n.length;
        r.push(n[o]);
      }
      return r.join("");
    }, e;
  }()
);
const lx = cx, fx = function(e) {
  if (gn().isBrowser && window.location) {
    var t = window.location.href;
    e({ url: t });
  } else if (!gn().isNode)
    throw new Error("Not supported");
};
var ct;
(function(e) {
  e.DEFAULT_MSG = "Authentication Error", e.EMPTY_EMAIL = "Email cannot be empty", e.EMPTY_PHONE = "Phone number cannot be empty", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty", e.NETWORK_ERROR = "Network Error", e.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
})(ct || (ct = {}));
var dx = new Ht("AuthError"), wn = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(n) {
      var r = this, i = gx[n], o = i.message, s = i.log;
      return r = e.call(this, o) || this, r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || o, dx.error(r.log), r;
    }
    return t;
  }(Error)
), hx = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r;
    }
    return t;
  }(wn)
), gx = {
  noConfig: {
    message: ct.DEFAULT_MSG,
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
    message: ct.DEFAULT_MSG,
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
    message: ct.EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: ct.INVALID_USERNAME
  },
  emptyPassword: {
    message: ct.EMPTY_PASSWORD
  },
  emptyCode: {
    message: ct.EMPTY_CODE
  },
  signUpError: {
    message: ct.SIGN_UP_ERROR,
    log: "The first parameter should either be non-null string or object"
  },
  noMFA: {
    message: ct.NO_MFA
  },
  invalidMFA: {
    message: ct.INVALID_MFA
  },
  emptyChallengeResponse: {
    message: ct.EMPTY_CHALLENGE
  },
  noUserSession: {
    message: ct.NO_USER_SESSION
  },
  deviceConfig: {
    message: ct.DEVICE_CONFIG
  },
  networkError: {
    message: ct.NETWORK_ERROR
  },
  autoSignInError: {
    message: ct.AUTOSIGNIN_ERROR
  },
  default: {
    message: ct.DEFAULT_MSG
  }
}, ae = new Ht("AuthClass"), dh = "aws.cognito.signin.user.admin", px = 10 * 1e3, Mx = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", xe = function(e, t, n) {
  on.dispatch("auth", { event: e, data: t, message: n }, "Auth", Mx);
}, yx = 60, mx = 3 * 60 * 1e3, vx = (
  /** @class */
  function() {
    function e(t) {
      var n = this;
      this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = qp, this.wrapRefreshSessionCallback = function(r) {
        var i = function(o, s) {
          return s ? xe("tokenRefresh", void 0, "New token retrieved") : xe("tokenRefresh_failure", o, "Failed to retrieve new token"), r(o, s);
        };
        return i;
      }, this.configure(t), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), on.listen("auth", function(r) {
        var i = r.payload, o = i.event;
        switch (o) {
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
      });
    }
    return e.prototype.getModuleName = function() {
      return "Auth";
    }, e.prototype.configure = function(t) {
      var n = this;
      if (!t)
        return this._config || {};
      ae.debug("configure Auth");
      var r = Object.assign({}, this._config, hp(t).Auth, t);
      this._config = r;
      var i = this._config, o = i.userPoolId, s = i.userPoolWebClientId, a = i.cookieStorage, u = i.oauth, c = i.region, l = i.identityPoolId, f = i.mandatorySignIn, d = i.refreshHandlers, g = i.identityPoolRegion, h = i.clientMetadata, p = i.endpoint, m = i.storage;
      if (!m)
        a ? this._storage = new tx(a) : this._storage = t.ssr ? new L1() : new zp().getStorage();
      else {
        if (!this._isValidAuthStorage(m))
          throw ae.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
        this._storage = m;
      }
      if (this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), o) {
        var v = {
          UserPoolId: o,
          ClientId: s,
          endpoint: p
        };
        v.Storage = this._storage, this.userPool = new XC(v, this.wrapRefreshSessionCallback);
      }
      this.Credentials.configure({
        mandatorySignIn: f,
        region: c,
        userPoolId: o,
        identityPoolId: l,
        refreshHandlers: d,
        storage: this._storage,
        identityPoolRegion: g
      });
      var w = u ? Gn(this._config.oauth) ? u : u.awsCognito : void 0;
      if (w) {
        var j = Object.assign({
          cognitoClientId: s,
          UserPoolId: o,
          domain: w.domain,
          scopes: w.scope,
          redirectSignIn: w.redirectSignIn,
          redirectSignOut: w.redirectSignOut,
          responseType: w.responseType,
          Storage: this._storage,
          urlOpener: w.urlOpener,
          clientMetadata: h
        }, w.options);
        this._oAuthHandler = new lx({
          scopes: j.scopes,
          config: j,
          cognitoClientId: j.cognitoClientId
        });
        var N = {};
        fx(function(B) {
          var z = B.url;
          N[z] || (N[z] = !0, n._handleAuthResponse(z));
        });
      }
      if (xe("configured", null, "The Auth category has been configured successfully"), !this.autoSignInInitiated && typeof this._storage.getItem == "function") {
        var I = this.isTrueStorageValue("amplify-polling-started");
        I && (xe("autoSignIn_failure", null, ke.AutoSignInError), this._storage.removeItem("amplify-auto-sign-in")), this._storage.removeItem("amplify-polling-started");
      }
      return this._config;
    }, e.prototype.signUp = function(t) {
      for (var n = this, r = [], i = 1; i < arguments.length; i++)
        r[i - 1] = arguments[i];
      var o, s, a;
      if (!this.userPool)
        return this.rejectNoUserPool();
      var u = null, c = null, l = [], f = null, d, g = { enabled: !1 }, h = {}, p = {};
      if (t && typeof t == "string") {
        u = t, c = r ? r[0] : null;
        var m = r ? r[1] : null, v = r ? r[2] : null;
        m && l.push(new Ir({ Name: "email", Value: m })), v && l.push(new Ir({
          Name: "phone_number",
          Value: v
        }));
      } else if (t && typeof t == "object") {
        u = t.username, c = t.password, t && t.clientMetadata ? d = t.clientMetadata : this._config.clientMetadata && (d = this._config.clientMetadata);
        var w = t.attributes;
        w && Object.keys(w).map(function(N) {
          l.push(new Ir({ Name: N, Value: w[N] }));
        });
        var j = t.validationData;
        j && (f = [], Object.keys(j).map(function(N) {
          f.push(new Ir({
            Name: N,
            Value: j[N]
          }));
        })), g = (o = t.autoSignIn) !== null && o !== void 0 ? o : { enabled: !1 }, g.enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), h = (s = g.validationData) !== null && s !== void 0 ? s : {}, p = (a = g.clientMetaData) !== null && a !== void 0 ? a : {});
      } else
        return this.rejectAuthError(ke.SignUpError);
      return u ? c ? (ae.debug("signUp attrs:", l), ae.debug("signUp validation data:", f), new Promise(function(N, I) {
        n.userPool.signUp(u, c, l, f, function(B, z) {
          B ? (xe("signUp_failure", B, u + " failed to signup"), I(B)) : (xe("signUp", z, u + " has signed up successfully"), g.enabled && n.handleAutoSignIn(u, c, h, p, z), N(z));
        }, d);
      })) : this.rejectAuthError(ke.EmptyPassword) : this.rejectAuthError(ke.EmptyUsername);
    }, e.prototype.handleAutoSignIn = function(t, n, r, i, o) {
      this.autoSignInInitiated = !0;
      var s = new oh({
        Username: t,
        Password: n,
        ValidationData: r,
        ClientMetadata: i
      });
      o.userConfirmed ? this.signInAfterUserConfirmed(s) : this._config.signUpVerificationMethod === "link" ? this.handleLinkAutoSignIn(s) : this.handleCodeAutoSignIn(s);
    }, e.prototype.handleCodeAutoSignIn = function(t) {
      var n = this, r = function(i) {
        var o = i.payload;
        o.event === "confirmSignUp" && n.signInAfterUserConfirmed(t, r);
      };
      on.listen("auth", r);
    }, e.prototype.handleLinkAutoSignIn = function(t) {
      var n = this;
      this._storage.setItem("amplify-polling-started", "true");
      var r = Date.now(), i = setInterval(function() {
        Date.now() - r > mx ? (clearInterval(i), xe("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), n._storage.removeItem("amplify-auto-sign-in")) : n.signInAfterUserConfirmed(t, null, i);
      }, 5e3);
    }, e.prototype.signInAfterUserConfirmed = function(t, n, r) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var i, o, s = this;
        return ue.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              i = this.createCognitoUser(t.getUsername()), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, i.authenticateUser(t, this.authCallbacks(i, function(u) {
                xe("autoSignIn", u, t.getUsername() + " has signed in successfully"), n && on.remove("auth", n), r && (clearInterval(r), s._storage.removeItem("amplify-polling-started")), s._storage.removeItem("amplify-auto-sign-in");
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
    }, e.prototype.confirmSignUp = function(t, n, r) {
      var i = this;
      if (!this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(ke.EmptyUsername);
      if (!n)
        return this.rejectAuthError(ke.EmptyCode);
      var o = this.createCognitoUser(t), s = r && typeof r.forceAliasCreation == "boolean" ? r.forceAliasCreation : !0, a;
      return r && r.clientMetadata ? a = r.clientMetadata : this._config.clientMetadata && (a = this._config.clientMetadata), new Promise(function(u, c) {
        o.confirmRegistration(n, s, function(l, f) {
          if (l)
            c(l);
          else {
            xe("confirmSignUp", f, t + " has been confirmed successfully");
            var d = i.isTrueStorageValue("amplify-auto-sign-in");
            d && !i.autoSignInInitiated && (xe("autoSignIn_failure", null, ke.AutoSignInError), i._storage.removeItem("amplify-auto-sign-in")), u(f);
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
        return this.rejectAuthError(ke.EmptyUsername);
      var r = this.createCognitoUser(t);
      return new Promise(function(i, o) {
        r.resendConfirmationCode(function(s, a) {
          s ? o(s) : i(a);
        }, n);
      });
    }, e.prototype.signIn = function(t, n, r) {
      if (r === void 0 && (r = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      var i = null, o = null, s = {};
      if (typeof t == "string")
        i = t, o = n;
      else if (CN(t))
        typeof n < "u" && ae.warn("The password should be defined under the first parameter object!"), i = t.username, o = t.password, s = t.validationData;
      else
        return this.rejectAuthError(ke.InvalidUsername);
      if (!i)
        return this.rejectAuthError(ke.EmptyUsername);
      var a = new oh({
        Username: i,
        Password: o,
        ValidationData: s,
        ClientMetadata: r
      });
      return o ? this.signInWithPassword(a) : this.signInWithoutPassword(a);
    }, e.prototype.authCallbacks = function(t, n, r) {
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
                  return c = f.sent(), o.user = c, xe("signIn", c, "A user " + t.getUsername() + " has been signed in"), n(c), [3, 8];
                case 7:
                  return l = f.sent(), ae.error("Failed to get the signed in user", l), r(l), [3, 8];
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
          ae.debug("signIn failure", s), xe("signIn_failure", s, t.getUsername() + " failed to signin"), r(s);
        },
        customChallenge: function(s) {
          ae.debug("signIn custom challenge answer required"), t.challengeName = "CUSTOM_CHALLENGE", t.challengeParam = s, n(t);
        },
        mfaRequired: function(s, a) {
          ae.debug("signIn MFA required"), t.challengeName = s, t.challengeParam = a, n(t);
        },
        mfaSetup: function(s, a) {
          ae.debug("signIn mfa setup", s), t.challengeName = s, t.challengeParam = a, n(t);
        },
        newPasswordRequired: function(s, a) {
          ae.debug("signIn new password"), t.challengeName = "NEW_PASSWORD_REQUIRED", t.challengeParam = {
            userAttributes: s,
            requiredAttributes: a
          }, n(t);
        },
        totpRequired: function(s, a) {
          ae.debug("signIn totpRequired"), t.challengeName = s, t.challengeParam = a, n(t);
        },
        selectMFAType: function(s, a) {
          ae.debug("signIn selectMFAType", s), t.challengeName = s, t.challengeParam = a, n(t);
        }
      };
    }, e.prototype.signInWithPassword = function(t) {
      var n = this;
      if (this.pendingSignIn)
        throw new Error("Pending sign-in attempt already in progress");
      var r = this.createCognitoUser(t.getUsername());
      return this.pendingSignIn = new Promise(function(i, o) {
        r.authenticateUser(t, n.authCallbacks(r, function(s) {
          n.pendingSignIn = null, i(s);
        }, function(s) {
          n.pendingSignIn = null, o(s);
        }));
      }), this.pendingSignIn;
    }, e.prototype.signInWithoutPassword = function(t) {
      var n = this, r = this.createCognitoUser(t.getUsername());
      return r.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise(function(i, o) {
        r.initiateAuth(t, n.authCallbacks(r, i, o));
      });
    }, e.prototype.getMFAOptions = function(t) {
      return new Promise(function(n, r) {
        t.getMFAOptions(function(i, o) {
          if (i) {
            ae.debug("get MFA Options failed", i), r(i);
            return;
          }
          ae.debug("get MFA options success", o), n(o);
        });
      });
    }, e.prototype.getPreferredMFA = function(t, n) {
      var r = this, i = this;
      return new Promise(function(o, s) {
        var a = r._config.clientMetadata, u = n ? n.bypassCache : !1;
        t.getUserData(function(c, l) {
          return ue.__awaiter(r, void 0, void 0, function() {
            var f, d;
            return ue.__generator(this, function(g) {
              switch (g.label) {
                case 0:
                  if (!c)
                    return [3, 5];
                  if (ae.debug("getting preferred mfa failed", c), !this.isSessionInvalid(c))
                    return [3, 4];
                  g.label = 1;
                case 1:
                  return g.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                case 2:
                  return g.sent(), [3, 4];
                case 3:
                  return f = g.sent(), s(new Error("Session is invalid due to: " + c.message + " and failed to clean up invalid session: " + f.message)), [
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
      var n = null, r = t.PreferredMfaSetting;
      if (r)
        n = r;
      else {
        var i = t.UserMFASettingList;
        if (i)
          i.length === 0 ? n = "NOMFA" : ae.debug("invalid case for getPreferredMFA", t);
        else {
          var o = t.MFAOptions;
          o ? n = "SMS_MFA" : n = "NOMFA";
        }
      }
      return n;
    }, e.prototype._getUserData = function(t, n) {
      var r = this;
      return new Promise(function(i, o) {
        t.getUserData(function(s, a) {
          return ue.__awaiter(r, void 0, void 0, function() {
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
        }, n);
      });
    }, e.prototype.setPreferredMFA = function(t, n) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l = this;
        return ue.__generator(this, function(f) {
          switch (f.label) {
            case 0:
              return r = this._config.clientMetadata, [4, this._getUserData(t, {
                bypassCache: !0,
                clientMetadata: r
              })];
            case 1:
              switch (i = f.sent(), o = null, s = null, a = n, a) {
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
                return [2, this.rejectAuthError(ke.InvalidMFA)];
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
              return ae.debug("no validmfa method provided"), [2, this.rejectAuthError(ke.NoMFA)];
            case 7:
              return [2, new Promise(function(d, g) {
                t.setUserMfaPreference(o, s, function(h, p) {
                  if (h)
                    return ae.debug("Set user mfa preference error", h), g(h);
                  ae.debug("Set user mfa success", p), ae.debug("Caching the latest user data into local"), t.getUserData(function(m, v) {
                    return ue.__awaiter(l, void 0, void 0, function() {
                      var w;
                      return ue.__generator(this, function(j) {
                        switch (j.label) {
                          case 0:
                            if (!m)
                              return [3, 5];
                            if (ae.debug("getting user data failed", m), !this.isSessionInvalid(m))
                              return [3, 4];
                            j.label = 1;
                          case 1:
                            return j.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                          case 2:
                            return j.sent(), [3, 4];
                          case 3:
                            return w = j.sent(), g(new Error("Session is invalid due to: " + m.message + " and failed to clean up invalid session: " + w.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, g(m)];
                          case 5:
                            return [2, d(p)];
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
        t.disableMFA(function(i, o) {
          if (i) {
            ae.debug("disable mfa failed", i), r(i);
            return;
          }
          ae.debug("disable mfa succeed", o), n(o);
        });
      });
    }, e.prototype.enableSMS = function(t) {
      return new Promise(function(n, r) {
        t.enableMFA(function(i, o) {
          if (i) {
            ae.debug("enable mfa failed", i), r(i);
            return;
          }
          ae.debug("enable mfa succeed", o), n(o);
        });
      });
    }, e.prototype.setupTOTP = function(t) {
      return new Promise(function(n, r) {
        t.associateSoftwareToken({
          onFailure: function(i) {
            ae.debug("associateSoftwareToken failed", i), r(i);
          },
          associateSecretCode: function(i) {
            ae.debug("associateSoftwareToken success", i), n(i);
          }
        });
      });
    }, e.prototype.verifyTotpToken = function(t, n) {
      ae.debug("verification totp token", t, n);
      var r;
      t && typeof t.getSignInUserSession == "function" && (r = t.getSignInUserSession());
      var i = r == null ? void 0 : r.isValid();
      return new Promise(function(o, s) {
        t.verifySoftwareToken(n, "My TOTP device", {
          onFailure: function(a) {
            ae.debug("verifyTotpToken failed", a), s(a);
          },
          onSuccess: function(a) {
            i || xe("signIn", t, "A user " + t.getUsername() + " has been signed in"), xe("verify", t, "A user " + t.getUsername() + " has been verified"), ae.debug("verifyTotpToken success", a), o(a);
          }
        });
      });
    }, e.prototype.confirmSignIn = function(t, n, r, i) {
      var o = this;
      if (i === void 0 && (i = this._config.clientMetadata), !n)
        return this.rejectAuthError(ke.EmptyCode);
      var s = this;
      return new Promise(function(a, u) {
        t.sendMFACode(n, {
          onSuccess: function(c) {
            return ue.__awaiter(o, void 0, void 0, function() {
              var l, f, d, g;
              return ue.__generator(this, function(h) {
                switch (h.label) {
                  case 0:
                    ae.debug(c), h.label = 1;
                  case 1:
                    return h.trys.push([1, 4, 5, 10]), [4, this.Credentials.clear()];
                  case 2:
                    return h.sent(), [4, this.Credentials.set(c, "session")];
                  case 3:
                    return l = h.sent(), ae.debug("succeed to get cognito credentials", l), [3, 10];
                  case 4:
                    return f = h.sent(), ae.debug("cannot get cognito credentials", f), [3, 10];
                  case 5:
                    s.user = t, h.label = 6;
                  case 6:
                    return h.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser()];
                  case 7:
                    return d = h.sent(), t.attributes = d.attributes, [3, 9];
                  case 8:
                    return g = h.sent(), ae.debug("cannot get updated Cognito User", g), [3, 9];
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
        }, r, i);
      });
    }, e.prototype.completeNewPassword = function(t, n, r, i) {
      var o = this;
      if (r === void 0 && (r = {}), i === void 0 && (i = this._config.clientMetadata), !n)
        return this.rejectAuthError(ke.EmptyPassword);
      var s = this;
      return new Promise(function(a, u) {
        t.completeNewPasswordChallenge(n, r, {
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
    }, e.prototype.sendCustomChallengeAnswer = function(t, n, r) {
      var i = this;
      return r === void 0 && (r = this._config.clientMetadata), this.userPool ? n ? new Promise(function(o, s) {
        t.sendCustomChallengeAnswer(n, i.authCallbacks(t, o, s), r);
      }) : this.rejectAuthError(ke.EmptyChallengeResponse) : this.rejectNoUserPool();
    }, e.prototype.deleteUserAttributes = function(t, n) {
      var r = this;
      return new Promise(function(i, o) {
        r.userSession(t).then(function(s) {
          t.deleteAttributes(n, function(a, u) {
            return a ? o(a) : i(u);
          });
        });
      });
    }, e.prototype.deleteUser = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n, r = this;
        return ue.__generator(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return i.sent(), [3, 3];
            case 2:
              throw t = i.sent(), ae.debug("Failed to sync cache info into memory", t), new Error(t);
            case 3:
              return n = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(o, s) {
                return ue.__awaiter(r, void 0, void 0, function() {
                  var a, u = this;
                  return ue.__generator(this, function(c) {
                    if (this.userPool)
                      if (a = this.userPool.getCurrentUser(), a)
                        a.getSession(function(l, f) {
                          return ue.__awaiter(u, void 0, void 0, function() {
                            var d, g = this;
                            return ue.__generator(this, function(h) {
                              switch (h.label) {
                                case 0:
                                  if (!l)
                                    return [3, 5];
                                  if (ae.debug("Failed to get the user session", l), !this.isSessionInvalid(l))
                                    return [3, 4];
                                  h.label = 1;
                                case 1:
                                  return h.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(a)];
                                case 2:
                                  return h.sent(), [3, 4];
                                case 3:
                                  return d = h.sent(), s(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                                    2
                                    /*return*/
                                  ];
                                case 4:
                                  return [2, s(l)];
                                case 5:
                                  a.deleteUser(function(p, m) {
                                    if (p)
                                      s(p);
                                    else {
                                      xe("userDeleted", m, "The authenticated user has been deleted."), a.signOut(), g.user = null;
                                      try {
                                        g.cleanCachedItems();
                                      } catch {
                                        ae.debug("failed to clear cached items");
                                      }
                                      n ? g.oAuthSignOutRedirect(o, s) : (xe("signOut", g.user, "A user has been signed out"), o(m));
                                    }
                                  }), h.label = 6;
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
    }, e.prototype.updateUserAttributes = function(t, n, r) {
      var i = this;
      r === void 0 && (r = this._config.clientMetadata);
      var o = [], s = this;
      return new Promise(function(a, u) {
        s.userSession(t).then(function(c) {
          for (var l in n)
            if (l !== "sub" && l.indexOf("_verified") < 0) {
              var f = {
                Name: l,
                Value: n[l]
              };
              o.push(f);
            }
          t.updateAttributes(o, function(d, g, h) {
            if (d)
              return xe("updateUserAttributes_failure", d, "Failed to update attributes"), u(d);
            var p = i.createUpdateAttributesResultList(n, h == null ? void 0 : h.CodeDeliveryDetailsList);
            return xe("updateUserAttributes", p, "Attributes successfully updated"), a(g);
          }, r);
        });
      });
    }, e.prototype.createUpdateAttributesResultList = function(t, n) {
      var r = {};
      return Object.keys(t).forEach(function(i) {
        r[i] = {
          isUpdated: !0
        };
        var o = n == null ? void 0 : n.find(function(s) {
          return s.AttributeName === i;
        });
        o && (r[i].isUpdated = !1, r[i].codeDeliveryDetails = o);
      }), r;
    }, e.prototype.userAttributes = function(t) {
      var n = this;
      return new Promise(function(r, i) {
        n.userSession(t).then(function(o) {
          t.getUserAttributes(function(s, a) {
            s ? i(s) : r(a);
          });
        });
      });
    }, e.prototype.verifiedContact = function(t) {
      var n = this;
      return this.userAttributes(t).then(function(r) {
        var i = n.attributesToObject(r), o = {}, s = {};
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
        var n = this;
        return ue.__generator(this, function(r) {
          switch (r.label) {
            case 0:
              t.signOut(), this.user = null, r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()];
            case 2:
              return r.sent(), [3, 4];
            case 3:
              return r.sent(), ae.debug("failed to clear cached items"), [3, 4];
            case 4:
              return this.isSignedInHostedUI() ? [2, new Promise(function(i, o) {
                n.oAuthSignOutRedirect(i, o);
              })] : (xe("signOut", this.user, "A user has been signed out"), [
                2
                /*return*/
              ]);
          }
        });
      });
    }, e.prototype.currentUserPoolUser = function(t) {
      var n = this;
      return this.userPool ? new Promise(function(r, i) {
        n._storageSync.then(function() {
          return ue.__awaiter(n, void 0, void 0, function() {
            var o, s, a, u, c, l, f, d = this;
            return ue.__generator(this, function(g) {
              switch (g.label) {
                case 0:
                  return this.isOAuthInProgress() ? (ae.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise(function(h) {
                    var p = setTimeout(function() {
                      ae.debug("OAuth signIn in progress timeout"), on.remove("auth", m), h();
                    }, px);
                    on.listen("auth", m);
                    function m(v) {
                      var w = v.payload, j = w.event;
                      (j === "cognitoHostedUI" || j === "cognitoHostedUI_failure") && (ae.debug("OAuth signIn resolved: " + j), clearTimeout(p), on.remove("auth", m), h());
                    }
                  })]) : [3, 2];
                case 1:
                  g.sent(), g.label = 2;
                case 2:
                  if (o = this.userPool.getCurrentUser(), !o)
                    return ae.debug("Failed to get user from user pool"), i("No current user"), [
                      2
                      /*return*/
                    ];
                  g.label = 3;
                case 3:
                  return g.trys.push([3, 7, , 8]), [4, this._userSession(o)];
                case 4:
                  return s = g.sent(), a = t ? t.bypassCache : !1, a ? [4, this.Credentials.clear()] : [3, 6];
                case 5:
                  g.sent(), g.label = 6;
                case 6:
                  if (u = this._config.clientMetadata, c = s.getAccessToken().decodePayload().scope, l = c === void 0 ? "" : c, l.split(" ").includes(dh))
                    o.getUserData(function(h, p) {
                      return ue.__awaiter(d, void 0, void 0, function() {
                        var m, v, w, j, N, I, B;
                        return ue.__generator(this, function(z) {
                          switch (z.label) {
                            case 0:
                              if (!h)
                                return [3, 7];
                              if (ae.debug("getting user data failed", h), !this.isSessionInvalid(h))
                                return [3, 5];
                              z.label = 1;
                            case 1:
                              return z.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(o)];
                            case 2:
                              return z.sent(), [3, 4];
                            case 3:
                              return m = z.sent(), i(new Error("Session is invalid due to: " + h.message + " and failed to clean up invalid session: " + m.message)), [
                                2
                                /*return*/
                              ];
                            case 4:
                              return i(h), [3, 6];
                            case 5:
                              r(o), z.label = 6;
                            case 6:
                              return [
                                2
                                /*return*/
                              ];
                            case 7:
                              for (v = p.PreferredMfaSetting || "NOMFA", w = [], j = 0; j < p.UserAttributes.length; j++)
                                N = {
                                  Name: p.UserAttributes[j].Name,
                                  Value: p.UserAttributes[j].Value
                                }, I = new Ir(N), w.push(I);
                              return B = this.attributesToObject(w), Object.assign(o, { attributes: B, preferredMFA: v }), [2, r(o)];
                          }
                        });
                      });
                    }, { bypassCache: a, clientMetadata: u });
                  else
                    return ae.debug("Unable to get the user data because the " + dh + " is not in the scopes of the access token"), [2, r(o)];
                  return [3, 8];
                case 7:
                  return f = g.sent(), i(f), [3, 8];
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
        var n, r, i, o, s;
        return ue.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              ae.debug("getting current authenticated user"), n = null, a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw r = a.sent(), ae.debug("Failed to sync cache info into memory", r), r;
            case 4:
              try {
                i = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")), i && (n = ue.__assign(ue.__assign({}, i.user), { token: i.token }));
              } catch {
                ae.debug("cannot load federated user from auth storage");
              }
              return n ? (this.user = n, ae.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
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
      return ae.debug("Getting current session"), this.userPool ? new Promise(function(n, r) {
        t.currentUserPoolUser().then(function(i) {
          t.userSession(i).then(function(o) {
            n(o);
          }).catch(function(o) {
            ae.debug("Failed to get the current session", o), r(o);
          });
        }).catch(function(i) {
          ae.debug("Failed to get the current user", i), r(i);
        });
      }) : Promise.reject(new Error("No User Pool in the configuration."));
    }, e.prototype._userSession = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, r, i = this;
        return ue.__generator(this, function(o) {
          switch (o.label) {
            case 0:
              if (!t)
                return ae.debug("the user is null"), [2, this.rejectAuthError(ke.NoUserSession)];
              n = this._config.clientMetadata, this.inflightSessionPromiseCounter === 0 && (this.inflightSessionPromise = new Promise(function(s, a) {
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
                }, { clientMetadata: n });
              })), this.inflightSessionPromiseCounter++, o.label = 1;
            case 1:
              return o.trys.push([1, , 3, 4]), [4, this.inflightSessionPromise];
            case 2:
              return r = o.sent(), t.signInUserSession = r, [2, r];
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
        var t, n, r = this;
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
              n = null;
              try {
                n = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
              } catch (o) {
                ae.debug("failed to get or parse item aws-amplify-federatedInfo", o);
              }
              return n ? [2, this.Credentials.refreshFederatedToken(n)] : [2, this.currentSession().then(function(o) {
                return ae.debug("getting session success", o), r.Credentials.set(o, "session");
              }).catch(function() {
                return ae.debug("getting guest credentials"), r.Credentials.set(null, "guest");
              })];
          }
        });
      });
    }, e.prototype.currentCredentials = function() {
      return ae.debug("getting current credentials"), this.Credentials.get();
    }, e.prototype.verifyUserAttribute = function(t, n, r) {
      return r === void 0 && (r = this._config.clientMetadata), new Promise(function(i, o) {
        t.getAttributeVerificationCode(n, {
          onSuccess: function(s) {
            return i(s);
          },
          onFailure: function(s) {
            return o(s);
          }
        }, r);
      });
    }, e.prototype.verifyUserAttributeSubmit = function(t, n, r) {
      return r ? new Promise(function(i, o) {
        t.verifyAttribute(n, r, {
          onSuccess: function(s) {
            i(s);
          },
          onFailure: function(s) {
            o(s);
          }
        });
      }) : this.rejectAuthError(ke.EmptyCode);
    }, e.prototype.verifyCurrentUserAttribute = function(t) {
      var n = this;
      return n.currentUserPoolUser().then(function(r) {
        return n.verifyUserAttribute(r, t);
      });
    }, e.prototype.verifyCurrentUserAttributeSubmit = function(t, n) {
      var r = this;
      return r.currentUserPoolUser().then(function(i) {
        return r.verifyUserAttributeSubmit(i, t, n);
      });
    }, e.prototype.cognitoIdentitySignOut = function(t, n) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var r, i, o = this;
        return ue.__generator(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return s.sent(), [3, 3];
            case 2:
              throw r = s.sent(), ae.debug("Failed to sync cache info into memory", r), r;
            case 3:
              return i = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(a, u) {
                if (t && t.global) {
                  ae.debug("user global sign out", n);
                  var c = o._config.clientMetadata;
                  n.getSession(function(l, f) {
                    return ue.__awaiter(o, void 0, void 0, function() {
                      var d, g = this;
                      return ue.__generator(this, function(h) {
                        switch (h.label) {
                          case 0:
                            if (!l)
                              return [3, 5];
                            if (ae.debug("failed to get the user session", l), !this.isSessionInvalid(l))
                              return [3, 4];
                            h.label = 1;
                          case 1:
                            return h.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(n)];
                          case 2:
                            return h.sent(), [3, 4];
                          case 3:
                            return d = h.sent(), u(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, u(l)];
                          case 5:
                            return n.globalSignOut({
                              onSuccess: function(p) {
                                if (ae.debug("global sign out success"), i)
                                  g.oAuthSignOutRedirect(a, u);
                                else
                                  return a();
                              },
                              onFailure: function(p) {
                                return ae.debug("global sign out failed", p), u(p);
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
                  ae.debug("user sign out", n), n.signOut(function() {
                    if (i)
                      o.oAuthSignOutRedirect(a, u);
                    else
                      return a();
                  });
              })];
          }
        });
      });
    }, e.prototype.oAuthSignOutRedirect = function(t, n) {
      var r = gn().isBrowser;
      r ? this.oAuthSignOutRedirectOrReject(n) : this.oAuthSignOutAndResolve(t);
    }, e.prototype.oAuthSignOutAndResolve = function(t) {
      this._oAuthHandler.signOut(), t();
    }, e.prototype.oAuthSignOutRedirectOrReject = function(t) {
      this._oAuthHandler.signOut(), setTimeout(function() {
        return t(Error("Signout timeout fail"));
      }, 3e3);
    }, e.prototype.signOut = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n;
        return ue.__generator(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
            case 1:
              return r.sent(), [3, 3];
            case 2:
              return r.sent(), ae.debug("failed to clear cached items"), [3, 3];
            case 3:
              return this.userPool ? (n = this.userPool.getCurrentUser(), n ? [4, this.cognitoIdentitySignOut(t, n)] : [3, 5]) : [3, 7];
            case 4:
              return r.sent(), [3, 6];
            case 5:
              ae.debug("no current Cognito user"), r.label = 6;
            case 6:
              return [3, 8];
            case 7:
              ae.debug("no Cognito User pool"), r.label = 8;
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
    }, e.prototype.changePassword = function(t, n, r, i) {
      var o = this;
      return i === void 0 && (i = this._config.clientMetadata), new Promise(function(s, a) {
        o.userSession(t).then(function(u) {
          t.changePassword(n, r, function(c, l) {
            return c ? (ae.debug("change password failure", c), a(c)) : s(l);
          }, i);
        });
      });
    }, e.prototype.forgotPassword = function(t, n) {
      if (n === void 0 && (n = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(ke.EmptyUsername);
      var r = this.createCognitoUser(t);
      return new Promise(function(i, o) {
        r.forgotPassword({
          onSuccess: function() {
            i();
          },
          onFailure: function(s) {
            ae.debug("forgot password failure", s), xe("forgotPassword_failure", s, t + " forgotPassword failed"), o(s);
          },
          inputVerificationCode: function(s) {
            xe("forgotPassword", r, t + " has initiated forgot password flow"), i(s);
          }
        }, n);
      });
    }, e.prototype.forgotPasswordSubmit = function(t, n, r, i) {
      if (i === void 0 && (i = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(ke.EmptyUsername);
      if (!n)
        return this.rejectAuthError(ke.EmptyCode);
      if (!r)
        return this.rejectAuthError(ke.EmptyPassword);
      var o = this.createCognitoUser(t);
      return new Promise(function(s, a) {
        o.confirmPassword(n, r, {
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
        var t, u, n, r, i, o, s, a, u;
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
              n = c.sent(), r = this.attributesToObject(n), i = null, c.label = 4;
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
                attributes: r
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
    }, e.prototype.federatedSignIn = function(t, n, r) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var i, u, o, s, a, u, c, l, f, d, g, h;
        return ue.__generator(this, function(p) {
          switch (p.label) {
            case 0:
              if (!this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation requires either a User Pool or Identity Pool in config");
              if (typeof t > "u" && this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
              return ta(t) || SN(t) || bN(t) || typeof t > "u" ? (i = t || {
                provider: $o.Cognito
              }, u = ta(i) ? i.provider : i.customProvider, o = (ta(i), i.customState), this._config.userPoolId && (s = Gn(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, a = Gn(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, a, s, u, o)), [3, 4]) : [3, 1];
            case 1:
              u = t;
              try {
                c = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user), c && ae.warn("There is already a signed in user: " + c + ` in your app.
																	You should not call Auth.federatedSignIn method again as it may cause unexpected behavior.`);
              } catch {
              }
              return l = n.token, f = n.identity_id, d = n.expires_at, [4, this.Credentials.set({ provider: u, token: l, identity_id: f, user: r, expires_at: d }, "federation")];
            case 2:
              return g = p.sent(), [4, this.currentAuthenticatedUser()];
            case 3:
              return h = p.sent(), xe("signIn", h, "A user " + h.username + " has been signed in"), ae.debug("federated sign in credentials", g), [2, g];
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
        var n, r, i, o, s, a, u, c, l, f, d, g, h, p;
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
              if (xe("parsingCallbackUrl", { url: t }, "The callback url is being parsed"), n = t || (gn().isBrowser ? window.location.href : ""), r = !!(Dn(n).query || "").split("&").map(function(v) {
                return v.split("=");
              }).find(function(v) {
                var w = ue.__read(v, 1), j = w[0];
                return j === "code" || j === "error";
              }), i = !!(Dn(n).hash || "#").substr(1).split("&").map(function(v) {
                return v.split("=");
              }).find(function(v) {
                var w = ue.__read(v, 1), j = w[0];
                return j === "access_token" || j === "error";
              }), !(r || i))
                return [3, 7];
              this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), m.label = 2;
            case 2:
              return m.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(n)];
            case 3:
              return o = m.sent(), s = o.accessToken, a = o.idToken, u = o.refreshToken, c = o.state, l = new Tu({
                IdToken: new Eu({ IdToken: a }),
                RefreshToken: new Iu({
                  RefreshToken: u
                }),
                AccessToken: new Du({
                  AccessToken: s
                })
              }), f = void 0, this._config.identityPoolId ? [4, this.Credentials.set(l, "session")] : [3, 5];
            case 4:
              f = m.sent(), ae.debug("AWS credentials", f), m.label = 5;
            case 5:
              return d = /-/.test(c), g = this.createCognitoUser(l.getIdToken().decodePayload()["cognito:username"]), g.setSignInUserSession(l), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), xe("signIn", g, "A user " + g.getUsername() + " has been signed in"), xe("cognitoHostedUI", g, "A user " + g.getUsername() + " has been signed in via Cognito Hosted UI"), d && (h = c.split("-").splice(1).join("-"), xe("customOAuthState", DT(h), "State for user " + g.getUsername())), [2, f];
            case 6:
              return p = m.sent(), ae.debug("Error in cognito hosted auth response", p), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), xe("signIn_failure", p, "The OAuth response flow failed"), xe("cognitoHostedUI_failure", p, "A failure occurred when returning to the Cognito Hosted UI"), xe("customState_failure", p, "A failure occurred when returning state"), [3, 7];
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
      return t && t.map(function(i) {
        i.Name === "email_verified" || i.Name === "phone_number_verified" ? r[i.Name] = n.isTruthyString(i.Value) || i.Value === !0 : r[i.Name] = i.Value;
      }), r;
    }, e.prototype.isTruthyString = function(t) {
      return typeof t.toLowerCase == "function" && t.toLowerCase() === "true";
    }, e.prototype.createCognitoUser = function(t) {
      var n = {
        Username: t,
        Pool: this.userPool
      };
      n.Storage = this._storage;
      var r = this._config.authenticationFlowType, i = new ju(n);
      return r && i.setAuthenticationFlowType(r), i;
    }, e.prototype._isValidAuthStorage = function(t) {
      return !!t && typeof t.getItem == "function" && typeof t.setItem == "function" && typeof t.removeItem == "function" && typeof t.clear == "function";
    }, e.prototype.noUserPoolErrorHandler = function(t) {
      return t && (!t.userPoolId || !t.identityPoolId) ? ke.MissingAuthConfig : ke.NoConfig;
    }, e.prototype.rejectAuthError = function(t) {
      return Promise.reject(new wn(t));
    }, e.prototype.rejectNoUserPool = function() {
      var t = this.noUserPoolErrorHandler(this._config);
      return Promise.reject(new hx(t));
    }, e.prototype.rememberDevice = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n;
        return ue.__generator(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              return n = r.sent(), ae.debug("The user is not authenticated by the error", n), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                t.setDeviceStatusRemembered({
                  onSuccess: function(s) {
                    i(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? o(new wn(ke.DeviceConfig)) : s.code === "NetworkError" ? o(new wn(ke.NetworkError)) : o(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.forgetDevice = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n;
        return ue.__generator(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              return n = r.sent(), ae.debug("The user is not authenticated by the error", n), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                t.forgetDevice({
                  onSuccess: function(s) {
                    i(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? o(new wn(ke.DeviceConfig)) : s.code === "NetworkError" ? o(new wn(ke.NetworkError)) : o(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.fetchDevices = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n;
        return ue.__generator(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              throw n = r.sent(), ae.debug("The user is not authenticated by the error", n), new Error("The user is not authenticated");
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(i, o) {
                var s = {
                  onSuccess: function(a) {
                    var u = a.Devices.map(function(c) {
                      var l = c.DeviceAttributes.find(function(d) {
                        var g = d.Name;
                        return g === "device_name";
                      }) || {}, f = {
                        id: c.DeviceKey,
                        name: l.Value
                      };
                      return f;
                    });
                    i(u);
                  },
                  onFailure: function(a) {
                    a.code === "InvalidParameterException" ? o(new wn(ke.DeviceConfig)) : a.code === "NetworkError" ? o(new wn(ke.NetworkError)) : o(a);
                  }
                };
                t.listDevices(yx, null, s);
              })];
          }
        });
      });
    }, e;
  }()
), zn = new vx(null);
Mc.register(zn);
var tM = {}, Ia = {}, hh;
function wx() {
  return hh || (hh = 1, function(e) {
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
    function n(s) {
      var a = ["customProvider"];
      return s && !!a.find(function(u) {
        return s.hasOwnProperty(u);
      });
    }
    e.isFederatedSignInOptionsCustom = n;
    function r(s) {
      var a = ["customState"];
      return s && !!a.find(function(u) {
        return s.hasOwnProperty(u);
      });
    }
    e.hasCustomState = r;
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
  }(Ia)), Ia;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(wx(), e);
})(tM);
const V4 = () => {
  const e = window.location.protocol + "//" + window.location.host + "/verify", t = window.location.protocol + "//" + window.location.host + "/", n = {
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
  zn.configure(n);
}, H4 = async () => {
  try {
    const e = await zn.currentSession();
    if (e)
      return e.getIdToken().getJwtToken();
  } catch {
    return "";
  }
}, q4 = async () => {
  try {
    const e = await zn.currentSession();
    if (e)
      return e.getAccessToken().getJwtToken();
  } catch {
    return "";
  }
}, K4 = async () => {
  try {
    const e = await zn.currentSession();
    if (e)
      return e.getRefreshToken().getToken();
  } catch {
    return "";
  }
}, G4 = async () => {
  try {
    const e = await zn.currentUserInfo();
    if (e && e.attributes)
      return {
        id: e.attributes.sub,
        name: e.attributes.preferred_username,
        picture: e.attributes.picture
      };
  } catch {
    return null;
  }
}, Dx = () => {
  try {
    zn.federatedSignIn({
      provider: tM.CognitoHostedUIIdentityProvider.Google,
      customState: window.location.pathname + window.location.search
    });
  } catch (e) {
    console.log(e);
  }
}, J4 = () => {
  zn.signOut();
};
var Ax = Object.defineProperty, Ex = (e, t, n) => t in e ? Ax(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Na = (e, t, n) => (Ex(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ix = class {
  constructor() {
    Na(this, "current", this.detect()), Na(this, "handoffState", "pending"), Na(this, "currentId", 0);
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
}, ln = new Ix(), Pn = (e, t) => {
  ln.isServer ? st(e, t) : jh(e, t);
};
function Ls(e) {
  let t = tt(e);
  return Pn(() => {
    t.current = e;
  }, [e]), t;
}
function Ji(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Sc() {
  let e = [], t = { addEventListener(n, r, i, o) {
    return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o));
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
    return Ji(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, i) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = Sc();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let i of e.splice(r, 1))
          i();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function Nx() {
  let [e] = Ln(Sc);
  return st(() => () => e.dispose(), [e]), e;
}
let kt = function(e) {
  let t = Ls(e);
  return Te.useCallback((...n) => t.current(...n), [t]);
};
function _s() {
  let [e, t] = Ln(ln.isHandoffComplete);
  return e && ln.isHandoffComplete === !1 && t(!1), st(() => {
    e !== !0 && t(!0);
  }, [e]), st(() => ln.handoff(), []), e;
}
var gh;
let Kr = (gh = Te.useId) != null ? gh : function() {
  let e = _s(), [t, n] = Te.useState(e ? () => ln.nextId() : null);
  return Pn(() => {
    t === null && n(ln.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function On(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, On), r;
}
function nM(e) {
  return ln.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Cu = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qn || {}), rM = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(rM || {}), Tx = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Tx || {});
function jx(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Cu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var iM = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(iM || {});
function Sx(e, t = 0) {
  var n;
  return e === ((n = nM(e)) == null ? void 0 : n.body) ? !1 : On(t, { [0]() {
    return e.matches(Cu);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Cu))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var bx = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(bx || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function rr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Cx = ["textarea", "input"].join(",");
function xx(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Cx)) != null ? n : !1;
}
function Ox(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null)
      return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function To(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? Ox(e) : e : jx(e);
  i.length > 0 && s.length > 1 && (s = s.filter((g) => !i.includes(g))), r = r ?? o.activeElement;
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
      return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, l = 0, f = s.length, d;
  do {
    if (l >= f || l + f <= 0)
      return 0;
    let g = u + l;
    if (t & 16)
      g = (g + f) % f;
    else {
      if (g < 0)
        return 3;
      if (g >= f)
        return 1;
    }
    d = s[g], d == null || d.focus(c), l += a;
  } while (d !== o.activeElement);
  return t & 6 && xx(d) && d.select(), 2;
}
function Ta(e, t, n) {
  let r = Ls(t);
  st(() => {
    function i(o) {
      r.current(o);
    }
    return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n);
  }, [e, n]);
}
function Lx(e, t, n = !0) {
  let r = tt(!1);
  st(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function i(s, a) {
    if (!r.current || s.defaultPrevented)
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
      return !Sx(c, iM.Loose) && c.tabIndex !== -1 && s.preventDefault(), t(s, c);
    }
  }
  let o = tt(null);
  Ta("mousedown", (s) => {
    var a, u;
    r.current && (o.current = ((u = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), Ta("click", (s) => {
    o.current && (i(s, () => o.current), o.current = null);
  }, !0), Ta("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
let oM = Symbol();
function _x(e, t = !0) {
  return Object.assign(e, { [oM]: t });
}
function mn(...e) {
  let t = tt(e);
  st(() => {
    t.current = e;
  }, [e]);
  let n = kt((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : i.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[oM])) ? void 0 : n;
}
function ph(...e) {
  return e.filter(Boolean).join(" ");
}
var xu = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(xu || {}), kx = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(kx || {});
function Xt({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: o = !0, name: s }) {
  let a = sM(t, e);
  if (o)
    return yo(a, n, r, s);
  let u = i ?? 0;
  if (u & 2) {
    let { static: c = !1, ...l } = a;
    if (c)
      return yo(l, n, r, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...l } = a;
    return On(c ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return yo({ ...l, hidden: !0, style: { display: "none" } }, n, r, s);
    } });
  }
  return yo(a, n, r, s);
}
function yo(e, t = {}, n, r) {
  let { as: i = n, children: o, refName: s = "ref", ...a } = ja(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
  let l = {};
  if (t) {
    let f = !1, d = [];
    for (let [g, h] of Object.entries(t))
      typeof h == "boolean" && (f = !0), h === !0 && d.push(g);
    f && (l["data-headlessui-state"] = d.join(" "));
  }
  if (i === jn && Object.keys(Mh(a)).length > 0) {
    if (!gi(c) || Array.isArray(c) && c.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    let f = c.props, d = typeof (f == null ? void 0 : f.className) == "function" ? (...h) => ph(f == null ? void 0 : f.className(...h), a.className) : ph(f == null ? void 0 : f.className, a.className), g = d ? { className: d } : {};
    return pi(c, Object.assign({}, sM(c.props, Mh(ja(a, ["ref"]))), l, u, zx(c.ref, u.ref), g));
  }
  return wt(i, Object.assign({}, ja(a, ["ref"]), i !== jn && u, i !== jn && l), c);
}
function zx(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  } };
}
function sM(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](i, ...o) {
      let s = n[r];
      for (let a of s) {
        if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented)
          return;
        a(i, ...o);
      }
    } });
  return t;
}
function en(e) {
  var t;
  return Object.assign(es(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Mh(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ja(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function Px(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Rx(n) ? !1 : r;
}
function Rx(e) {
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
let Ux = "div";
var Go = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Go || {});
function Fx(e, t) {
  let { features: n = 1, ...r } = e, i = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Xt({ ourProps: i, theirProps: r, slot: {}, defaultTag: Ux, name: "Hidden" });
}
let Ou = en(Fx), aM = pn(null);
aM.displayName = "OpenClosedContext";
var di = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(di || {});
function Yx() {
  return gt(aM);
}
var uM = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(uM || {});
function bc(e, t) {
  let n = tt([]), r = kt(e);
  st(() => {
    let i = [...n.current];
    for (let [o, s] of t.entries())
      if (n.current[o] !== s) {
        let a = r(t, i);
        return n.current = t, a;
      }
  }, [r, ...t]);
}
function Bx() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Qx(e, t, n) {
  let r = Ls(t);
  st(() => {
    function i(o) {
      r.current(o);
    }
    return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n);
  }, [e, n]);
}
var hi = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(hi || {});
function $x() {
  let e = tt(0);
  return Qx("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function cM() {
  let e = tt(!1);
  return Pn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ks(...e) {
  return dn(() => nM(...e), [...e]);
}
function lM(e, t, n, r) {
  let i = Ls(n);
  st(() => {
    e = e ?? window;
    function o(s) {
      i.current(s);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function Wx(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function fM(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current)
    n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Vx = "div";
var dM = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(dM || {});
function Hx(e, t) {
  let n = tt(null), r = mn(n, t), { initialFocus: i, containers: o, features: s = 30, ...a } = e;
  _s() || (s = 1);
  let u = ks(n);
  Gx({ ownerDocument: u }, !!(s & 16));
  let c = Jx({ ownerDocument: u, container: n, initialFocus: i }, !!(s & 2));
  Zx({ ownerDocument: u, container: n, containers: o, previousActiveElement: c }, !!(s & 8));
  let l = $x(), f = kt((p) => {
    let m = n.current;
    m && ((v) => v())(() => {
      On(l.current, { [hi.Forwards]: () => {
        To(m, qn.First, { skipElements: [p.relatedTarget] });
      }, [hi.Backwards]: () => {
        To(m, qn.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }), d = Nx(), g = tt(!1), h = { ref: r, onKeyDown(p) {
    p.key == "Tab" && (g.current = !0, d.requestAnimationFrame(() => {
      g.current = !1;
    }));
  }, onBlur(p) {
    let m = fM(o);
    n.current instanceof HTMLElement && m.add(n.current);
    let v = p.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (hM(m, v) || (g.current ? To(n.current, On(l.current, { [hi.Forwards]: () => qn.Next, [hi.Backwards]: () => qn.Previous }) | qn.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && rr(p.target)));
  } };
  return Te.createElement(Te.Fragment, null, !!(s & 4) && Te.createElement(Ou, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Go.Focusable }), Xt({ ourProps: h, theirProps: a, defaultTag: Vx, name: "FocusTrap" }), !!(s & 4) && Te.createElement(Ou, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Go.Focusable }));
}
let qx = en(Hx), oi = Object.assign(qx, { features: dM }), Nn = [];
Wx(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Nn[0] !== t.target && (Nn.unshift(t.target), Nn = Nn.filter((n) => n != null && n.isConnected), Nn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Kx(e = !0) {
  let t = tt(Nn.slice());
  return bc(([n], [r]) => {
    r === !0 && n === !1 && Ji(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Nn.slice());
  }, [e, Nn, t]), kt(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Gx({ ownerDocument: e }, t) {
  let n = Kx(t);
  bc(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && rr(n());
  }, [t]);
  let r = tt(!1);
  st(() => (r.current = !1, () => {
    r.current = !0, Ji(() => {
      r.current && rr(n());
    });
  }), []);
}
function Jx({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let i = tt(null), o = cM();
  return bc(() => {
    if (!r)
      return;
    let s = t.current;
    s && Ji(() => {
      if (!o.current)
        return;
      let a = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === a) {
          i.current = a;
          return;
        }
      } else if (s.contains(a)) {
        i.current = a;
        return;
      }
      n != null && n.current ? rr(n.current) : To(s, qn.First) === rM.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [r]), i;
}
function Zx({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
  let o = cM();
  lM(e == null ? void 0 : e.defaultView, "focus", (s) => {
    if (!i || !o.current)
      return;
    let a = fM(n);
    t.current instanceof HTMLElement && a.add(t.current);
    let u = r.current;
    if (!u)
      return;
    let c = s.target;
    c && c instanceof HTMLElement ? hM(a, c) ? (r.current = c, rr(c)) : (s.preventDefault(), s.stopPropagation(), rr(u)) : rr(r.current);
  }, !0);
}
function hM(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let gM = pn(!1);
function Xx() {
  return gt(gM);
}
function Lu(e) {
  return Te.createElement(gM.Provider, { value: e.force }, e.children);
}
function eO(e) {
  let t = Xx(), n = gt(pM), r = ks(e), [i, o] = Ln(() => {
    if (!t && n !== null || ln.isServer)
      return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (r === null)
      return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return st(() => {
    i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i));
  }, [i, r]), st(() => {
    t || n !== null && o(n.current);
  }, [n, o, t]), i;
}
let tO = jn;
function nO(e, t) {
  let n = e, r = tt(null), i = mn(_x((l) => {
    r.current = l;
  }), t), o = ks(r), s = eO(r), [a] = Ln(() => {
    var l;
    return ln.isServer ? null : (l = o == null ? void 0 : o.createElement("div")) != null ? l : null;
  }), u = _s(), c = tt(!1);
  return Pn(() => {
    if (c.current = !1, !(!s || !a))
      return s.contains(a) || (a.setAttribute("data-headlessui-portal", ""), s.appendChild(a)), () => {
        c.current = !0, Ji(() => {
          var l;
          c.current && (!s || !a || (a instanceof Node && s.contains(a) && s.removeChild(a), s.childNodes.length <= 0 && ((l = s.parentElement) == null || l.removeChild(s))));
        });
      };
  }, [s, a]), u ? !s || !a ? null : YM(Xt({ ourProps: { ref: i }, theirProps: n, defaultTag: tO, name: "Portal" }), a) : null;
}
let rO = jn, pM = pn(null);
function iO(e, t) {
  let { target: n, ...r } = e, i = { ref: mn(t) };
  return Te.createElement(pM.Provider, { value: n }, Xt({ ourProps: i, theirProps: r, defaultTag: rO, name: "Popover.Group" }));
}
let oO = en(nO), sO = en(iO), _u = Object.assign(oO, { Group: sO }), MM = pn(null);
function yM() {
  let e = gt(MM);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, yM), t;
  }
  return e;
}
function aO() {
  let [e, t] = Ln([]);
  return [e.length > 0 ? e.join(" ") : void 0, dn(() => function(n) {
    let r = kt((o) => (t((s) => [...s, o]), () => t((s) => {
      let a = s.slice(), u = a.indexOf(o);
      return u !== -1 && a.splice(u, 1), a;
    }))), i = dn(() => ({ register: r, slot: n.slot, name: n.name, props: n.props }), [r, n.slot, n.name, n.props]);
    return Te.createElement(MM.Provider, { value: i }, n.children);
  }, [t])];
}
let uO = "p";
function cO(e, t) {
  let n = Kr(), { id: r = `headlessui-description-${n}`, ...i } = e, o = yM(), s = mn(t);
  Pn(() => o.register(r), [r, o.register]);
  let a = { ref: s, ...o.props, id: r };
  return Xt({ ourProps: a, theirProps: i, slot: o.slot || {}, defaultTag: uO, name: o.name || "Description" });
}
let lO = en(cO), fO = Object.assign(lO, {}), Cc = pn(() => {
});
Cc.displayName = "StackContext";
var ku = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ku || {});
function dO() {
  return gt(Cc);
}
function hO({ children: e, onUpdate: t, type: n, element: r, enabled: i }) {
  let o = dO(), s = kt((...a) => {
    t == null || t(...a), o(...a);
  });
  return Pn(() => {
    let a = i === void 0 || i === !0;
    return a && s(0, n, r), () => {
      a && s(1, n, r);
    };
  }, [s, n, r, i]), Te.createElement(Cc.Provider, { value: s }, e);
}
function gO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const pO = typeof Object.is == "function" ? Object.is : gO, { useState: MO, useEffect: yO, useLayoutEffect: mO, useDebugValue: vO } = re;
function wO(e, t, n) {
  const r = t(), [{ inst: i }, o] = MO({ inst: { value: r, getSnapshot: t } });
  return mO(() => {
    i.value = r, i.getSnapshot = t, Sa(i) && o({ inst: i });
  }, [e, r, t]), yO(() => (Sa(i) && o({ inst: i }), e(() => {
    Sa(i) && o({ inst: i });
  })), [e]), vO(r), r;
}
function Sa(e) {
  const t = e.getSnapshot, n = e.value;
  try {
    const r = t();
    return !pO(n, r);
  } catch {
    return !0;
  }
}
function DO(e, t, n) {
  return t();
}
const AO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", EO = !AO, IO = EO ? DO : wO, NO = "useSyncExternalStore" in re ? ((e) => e.useSyncExternalStore)(re) : IO;
function TO(e) {
  return NO(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function jO(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let s = t[i].call(n, ...o);
    s && (n = s, r.forEach((a) => a()));
  } };
}
function SO() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = r.clientWidth - r.offsetWidth, o = e - i;
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function bO() {
  if (!Bx())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function i(s) {
      return r.containers.flatMap((a) => a()).some((a) => a.contains(s));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    n.addEventListener(t, "click", (s) => {
      if (s.target instanceof HTMLElement)
        try {
          let a = s.target.closest("a");
          if (!a)
            return;
          let { hash: u } = new URL(a.href), c = t.querySelector(u);
          c && !i(c) && (o = c);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (s) => {
      s.target instanceof HTMLElement && !i(s.target) && s.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
    });
  } };
}
function CO() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function xO(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Xn = jO(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Sc(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: xO(n) }, i = [bO(), SO(), CO()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Xn.subscribe(() => {
  let e = Xn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && Xn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Xn.dispatch("TEARDOWN", n);
  }
});
function OO(e, t, n) {
  let r = TO(Xn), i = e ? r.get(e) : void 0, o = i ? i.count > 0 : !1;
  return Pn(() => {
    if (!(!e || !t))
      return Xn.dispatch("PUSH", e, n), () => Xn.dispatch("POP", e, n);
  }, [t, e]), o;
}
let ba = /* @__PURE__ */ new Map(), si = /* @__PURE__ */ new Map();
function yh(e, t = !0) {
  Pn(() => {
    var n;
    if (!t)
      return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r)
      return;
    function i() {
      var s;
      if (!r)
        return;
      let a = (s = si.get(r)) != null ? s : 1;
      if (a === 1 ? si.delete(r) : si.set(r, a - 1), a !== 1)
        return;
      let u = ba.get(r);
      u && (u["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", u["aria-hidden"]), r.inert = u.inert, ba.delete(r));
    }
    let o = (n = si.get(r)) != null ? n : 0;
    return si.set(r, o + 1), o !== 0 || (ba.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0), i;
  }, [e, t]);
}
var LO = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(LO || {}), _O = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(_O || {});
let kO = { [0](e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Jo = pn(null);
Jo.displayName = "DialogContext";
function Zi(e) {
  let t = gt(Jo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zi), n;
  }
  return t;
}
function zO(e, t, n = () => [document.body]) {
  OO(e, t, (r) => {
    var i;
    return { containers: [...(i = r.containers) != null ? i : [], n] };
  });
}
function PO(e, t) {
  return On(t.type, kO, e, t);
}
let RO = "div", UO = xu.RenderStrategy | xu.Static;
function FO(e, t) {
  let n = Kr(), { id: r = `headlessui-dialog-${n}`, open: i, onClose: o, initialFocus: s, __demoMode: a = !1, ...u } = e, [c, l] = Ln(0), f = Yx();
  i === void 0 && f !== null && (i = (f & di.Open) === di.Open);
  let d = tt(null), g = mn(d, t), h = tt(null), p = ks(d), m = e.hasOwnProperty("open") || f !== null, v = e.hasOwnProperty("onClose");
  if (!m && !v)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!m)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!v)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof o != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
  let w = i ? 0 : 1, [j, N] = RM(PO, { titleId: null, descriptionId: null, panelRef: UM() }), I = kt(() => o(!1)), B = kt((X) => N({ type: 0, id: X })), z = _s() ? a ? !1 : w === 0 : !1, W = c > 1, $ = gt(Jo) !== null, b = W ? "parent" : "leaf", k = f !== null ? (f & di.Closing) === di.Closing : !1, U = (() => $ || k ? !1 : z)(), x = Fc(() => {
    var X, O;
    return (O = Array.from((X = p == null ? void 0 : p.querySelectorAll("body > *")) != null ? X : []).find((ne) => ne.id === "headlessui-portal-root" ? !1 : ne.contains(h.current) && ne instanceof HTMLElement)) != null ? O : null;
  }, [h]);
  yh(x, U);
  let T = (() => W ? !0 : z)(), S = Fc(() => {
    var X, O;
    return (O = Array.from((X = p == null ? void 0 : p.querySelectorAll("[data-headlessui-portal]")) != null ? X : []).find((ne) => ne.contains(h.current) && ne instanceof HTMLElement)) != null ? O : null;
  }, [h]);
  yh(S, T);
  let R = kt(() => {
    var X, O;
    return [...Array.from((X = p == null ? void 0 : p.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? X : []).filter((ne) => !(ne === document.body || ne === document.head || !(ne instanceof HTMLElement) || ne.contains(h.current) || j.panelRef.current && ne.contains(j.panelRef.current))), (O = j.panelRef.current) != null ? O : d.current];
  }), C = (() => !(!z || W))();
  Lx(() => R(), I, C);
  let J = (() => !(W || w !== 0))();
  lM(p == null ? void 0 : p.defaultView, "keydown", (X) => {
    J && (X.defaultPrevented || X.key === uM.Escape && (X.preventDefault(), X.stopPropagation(), I()));
  });
  let ie = (() => !(k || w !== 0 || $))();
  zO(p, ie, R), st(() => {
    if (w !== 0 || !d.current)
      return;
    let X = new ResizeObserver((O) => {
      for (let ne of O) {
        let G = ne.target.getBoundingClientRect();
        G.x === 0 && G.y === 0 && G.width === 0 && G.height === 0 && I();
      }
    });
    return X.observe(d.current), () => X.disconnect();
  }, [w, d, I]);
  let [L, F] = aO(), P = dn(() => [{ dialogState: w, close: I, setTitleId: B }, j], [w, j, I, B]), q = dn(() => ({ open: w === 0 }), [w]), K = { ref: g, id: r, role: "dialog", "aria-modal": w === 0 ? !0 : void 0, "aria-labelledby": j.titleId, "aria-describedby": L };
  return Te.createElement(hO, { type: "Dialog", enabled: w === 0, element: d, onUpdate: kt((X, O) => {
    O === "Dialog" && On(X, { [ku.Add]: () => l((ne) => ne + 1), [ku.Remove]: () => l((ne) => ne - 1) });
  }) }, Te.createElement(Lu, { force: !0 }, Te.createElement(_u, null, Te.createElement(Jo.Provider, { value: P }, Te.createElement(_u.Group, { target: d }, Te.createElement(Lu, { force: !1 }, Te.createElement(F, { slot: q, name: "Dialog.Description" }, Te.createElement(oi, { initialFocus: s, containers: R, features: z ? On(b, { parent: oi.features.RestoreFocus, leaf: oi.features.All & ~oi.features.FocusLock }) : oi.features.None }, Xt({ ourProps: K, theirProps: u, slot: q, defaultTag: RO, features: UO, visible: w === 0, name: "Dialog" })))))))), Te.createElement(Ou, { features: Go.Hidden, ref: h }));
}
let YO = "div";
function BO(e, t) {
  let n = Kr(), { id: r = `headlessui-dialog-overlay-${n}`, ...i } = e, [{ dialogState: o, close: s }] = Zi("Dialog.Overlay"), a = mn(t), u = kt((l) => {
    if (l.target === l.currentTarget) {
      if (Px(l.currentTarget))
        return l.preventDefault();
      l.preventDefault(), l.stopPropagation(), s();
    }
  }), c = dn(() => ({ open: o === 0 }), [o]);
  return Xt({ ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u }, theirProps: i, slot: c, defaultTag: YO, name: "Dialog.Overlay" });
}
let QO = "div";
function $O(e, t) {
  let n = Kr(), { id: r = `headlessui-dialog-backdrop-${n}`, ...i } = e, [{ dialogState: o }, s] = Zi("Dialog.Backdrop"), a = mn(t);
  st(() => {
    if (s.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s.panelRef]);
  let u = dn(() => ({ open: o === 0 }), [o]);
  return Te.createElement(Lu, { force: !0 }, Te.createElement(_u, null, Xt({ ourProps: { ref: a, id: r, "aria-hidden": !0 }, theirProps: i, slot: u, defaultTag: QO, name: "Dialog.Backdrop" })));
}
let WO = "div";
function VO(e, t) {
  let n = Kr(), { id: r = `headlessui-dialog-panel-${n}`, ...i } = e, [{ dialogState: o }, s] = Zi("Dialog.Panel"), a = mn(t, s.panelRef), u = dn(() => ({ open: o === 0 }), [o]), c = kt((l) => {
    l.stopPropagation();
  });
  return Xt({ ourProps: { ref: a, id: r, onClick: c }, theirProps: i, slot: u, defaultTag: WO, name: "Dialog.Panel" });
}
let HO = "h2";
function qO(e, t) {
  let n = Kr(), { id: r = `headlessui-dialog-title-${n}`, ...i } = e, [{ dialogState: o, setTitleId: s }] = Zi("Dialog.Title"), a = mn(t);
  st(() => (s(r), () => s(null)), [r, s]);
  let u = dn(() => ({ open: o === 0 }), [o]);
  return Xt({ ourProps: { ref: a, id: r }, theirProps: i, slot: u, defaultTag: HO, name: "Dialog.Title" });
}
let KO = en(FO), GO = en($O), JO = en(VO), ZO = en(BO), XO = en(qO), mo = Object.assign(KO, { Backdrop: GO, Panel: JO, Overlay: ZO, Title: XO, Description: fO });
const e4 = {
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
}, t4 = ({ isModalOpen: e, closeModal: t, t: n }) => /* @__PURE__ */ ge.jsx(mo, { open: e, onClose: () => t, children: /* @__PURE__ */ ge.jsxs(
  mo.Panel,
  {
    className: "bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3",
    style: { borderRadius: "20px", padding: "1em 2em" },
    children: [
      /* @__PURE__ */ ge.jsxs(mo.Title, { style: { fontSize: "24px" }, children: [
        n("user.Sign in"),
        /* @__PURE__ */ ge.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } })
      ] }),
      /* @__PURE__ */ ge.jsxs(mo.Description, { children: [
        /* @__PURE__ */ ge.jsxs("div", { className: "px-4 py-4 lg:px-16", children: [
          /* @__PURE__ */ ge.jsx("p", { children: n("user.sign in description") }),
          /* @__PURE__ */ ge.jsxs("button", { style: e4, onClick: Dx, children: [
            /* @__PURE__ */ ge.jsx("span", { style: { padding: "0px", paddingRight: "0.5em" }, children: /* @__PURE__ */ ge.jsx(Yv, {}) }),
            n("user.Sign in with WasedaMail")
          ] })
        ] }),
        /* @__PURE__ */ ge.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } }),
        /* @__PURE__ */ ge.jsxs("p", { children: [
          n("user.agreement on privacy policy 1"),
          /* @__PURE__ */ ge.jsx("a", { href: "/privacy-policy", children: /* @__PURE__ */ ge.jsx("b", { children: n("user.Privacy Policy") }) }),
          n("user.agreement on privacy policy 2"),
          /* @__PURE__ */ ge.jsx("a", { href: "/terms-of-service", children: /* @__PURE__ */ ge.jsx("b", { children: n("user.Terms of Service") }) }),
          n("user.agreement on privacy policy 3")
        ] })
      ] })
    ]
  }
) }), X4 = TN("translation")(t4);
var mM = [], n4 = mM.forEach, r4 = mM.slice;
function i4(e) {
  return n4.call(r4.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
var mh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, o4 = function(t, n, r) {
  var i = r || {};
  i.path = i.path || "/";
  var o = encodeURIComponent(n), s = t + "=" + o;
  if (i.maxAge > 0) {
    var a = i.maxAge - 0;
    if (isNaN(a))
      throw new Error("maxAge should be a Number");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (i.domain) {
    if (!mh.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!mh.test(i.path))
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
}, vh = {
  create: function(t, n, r, i) {
    var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (o.expires = /* @__PURE__ */ new Date(), o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)), i && (o.domain = i), document.cookie = o4(t, encodeURIComponent(n), o);
  },
  read: function(t) {
    for (var n = t + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
      for (var o = r[i]; o.charAt(0) === " "; )
        o = o.substring(1, o.length);
      if (o.indexOf(n) === 0)
        return o.substring(n.length, o.length);
    }
    return null;
  },
  remove: function(t) {
    this.create(t, "", -1);
  }
}, s4 = {
  name: "cookie",
  lookup: function(t) {
    var n;
    if (t.lookupCookie && typeof document < "u") {
      var r = vh.read(t.lookupCookie);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupCookie && typeof document < "u" && vh.create(n.lookupCookie, t, n.cookieMinutes, n.cookieDomain, n.cookieOptions);
  }
}, a4 = {
  name: "querystring",
  lookup: function(t) {
    var n;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var i = r.substring(1), o = i.split("&"), s = 0; s < o.length; s++) {
        var a = o[s].indexOf("=");
        if (a > 0) {
          var u = o[s].substring(0, a);
          u === t.lookupQuerystring && (n = o[s].substring(a + 1));
        }
      }
    }
    return n;
  }
}, ai = null, wh = function() {
  if (ai !== null)
    return ai;
  try {
    ai = window !== "undefined" && window.localStorage !== null;
    var t = "i18next.translate.boo";
    window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
  } catch {
    ai = !1;
  }
  return ai;
}, u4 = {
  name: "localStorage",
  lookup: function(t) {
    var n;
    if (t.lookupLocalStorage && wh()) {
      var r = window.localStorage.getItem(t.lookupLocalStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupLocalStorage && wh() && window.localStorage.setItem(n.lookupLocalStorage, t);
  }
}, ui = null, Dh = function() {
  if (ui !== null)
    return ui;
  try {
    ui = window !== "undefined" && window.sessionStorage !== null;
    var t = "i18next.translate.boo";
    window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t);
  } catch {
    ui = !1;
  }
  return ui;
}, c4 = {
  name: "sessionStorage",
  lookup: function(t) {
    var n;
    if (t.lookupSessionStorage && Dh()) {
      var r = window.sessionStorage.getItem(t.lookupSessionStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupSessionStorage && Dh() && window.sessionStorage.setItem(n.lookupSessionStorage, t);
  }
}, l4 = {
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
}, f4 = {
  name: "htmlTag",
  lookup: function(t) {
    var n, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, d4 = {
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
}, h4 = {
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
function g4() {
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
var vM = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    sp(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  return ap(e, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = i4(r, this.options || {}, g4()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(s4), this.addDetector(a4), this.addDetector(u4), this.addDetector(c4), this.addDetector(l4), this.addDetector(f4), this.addDetector(d4), this.addDetector(h4);
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
      var i = [];
      return n.forEach(function(o) {
        if (r.detectors[o]) {
          var s = r.detectors[o].lookup(r.options);
          s && typeof s == "string" && (s = [s]), s && (i = i.concat(s));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(n, r) {
      var i = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(n) > -1 || r.forEach(function(o) {
        i.detectors[o] && i.detectors[o].cacheUserLanguage(n, i.options);
      }));
    }
  }]), e;
}();
vM.type = "languageDetector";
function zu(e) {
  return zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zu(e);
}
var wM = [], p4 = wM.forEach, M4 = wM.slice;
function Pu(e) {
  return p4.call(M4.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
function DM() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : zu(XMLHttpRequest)) === "object";
}
function y4(e) {
  return !!e && typeof e.then == "function";
}
function m4(e) {
  return y4(e) ? e : Promise.resolve(e);
}
function v4(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ui = {}, w4 = {
  get exports() {
    return Ui;
  },
  set exports(e) {
    Ui = e;
  }
}, Ai = {}, D4 = {
  get exports() {
    return Ai;
  },
  set exports(e) {
    Ai = e;
  }
}, Ah;
function A4() {
  return Ah || (Ah = 1, function(e, t) {
    var n = typeof self < "u" ? self : zt, r = function() {
      function o() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return o.prototype = n, new o();
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
        function u(T) {
          return T && DataView.prototype.isPrototypeOf(T);
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
          ], l = ArrayBuffer.isView || function(T) {
            return T && c.indexOf(Object.prototype.toString.call(T)) > -1;
          };
        function f(T) {
          if (typeof T != "string" && (T = String(T)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T))
            throw new TypeError("Invalid character in header field name");
          return T.toLowerCase();
        }
        function d(T) {
          return typeof T != "string" && (T = String(T)), T;
        }
        function g(T) {
          var S = {
            next: function() {
              var R = T.shift();
              return { done: R === void 0, value: R };
            }
          };
          return a.iterable && (S[Symbol.iterator] = function() {
            return S;
          }), S;
        }
        function h(T) {
          this.map = {}, T instanceof h ? T.forEach(function(S, R) {
            this.append(R, S);
          }, this) : Array.isArray(T) ? T.forEach(function(S) {
            this.append(S[0], S[1]);
          }, this) : T && Object.getOwnPropertyNames(T).forEach(function(S) {
            this.append(S, T[S]);
          }, this);
        }
        h.prototype.append = function(T, S) {
          T = f(T), S = d(S);
          var R = this.map[T];
          this.map[T] = R ? R + ", " + S : S;
        }, h.prototype.delete = function(T) {
          delete this.map[f(T)];
        }, h.prototype.get = function(T) {
          return T = f(T), this.has(T) ? this.map[T] : null;
        }, h.prototype.has = function(T) {
          return this.map.hasOwnProperty(f(T));
        }, h.prototype.set = function(T, S) {
          this.map[f(T)] = d(S);
        }, h.prototype.forEach = function(T, S) {
          for (var R in this.map)
            this.map.hasOwnProperty(R) && T.call(S, this.map[R], R, this);
        }, h.prototype.keys = function() {
          var T = [];
          return this.forEach(function(S, R) {
            T.push(R);
          }), g(T);
        }, h.prototype.values = function() {
          var T = [];
          return this.forEach(function(S) {
            T.push(S);
          }), g(T);
        }, h.prototype.entries = function() {
          var T = [];
          return this.forEach(function(S, R) {
            T.push([R, S]);
          }), g(T);
        }, a.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
        function p(T) {
          if (T.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          T.bodyUsed = !0;
        }
        function m(T) {
          return new Promise(function(S, R) {
            T.onload = function() {
              S(T.result);
            }, T.onerror = function() {
              R(T.error);
            };
          });
        }
        function v(T) {
          var S = new FileReader(), R = m(S);
          return S.readAsArrayBuffer(T), R;
        }
        function w(T) {
          var S = new FileReader(), R = m(S);
          return S.readAsText(T), R;
        }
        function j(T) {
          for (var S = new Uint8Array(T), R = new Array(S.length), C = 0; C < S.length; C++)
            R[C] = String.fromCharCode(S[C]);
          return R.join("");
        }
        function N(T) {
          if (T.slice)
            return T.slice(0);
          var S = new Uint8Array(T.byteLength);
          return S.set(new Uint8Array(T)), S.buffer;
        }
        function I() {
          return this.bodyUsed = !1, this._initBody = function(T) {
            this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : a.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : a.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : a.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : a.arrayBuffer && a.blob && u(T) ? (this._bodyArrayBuffer = N(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || l(T)) ? this._bodyArrayBuffer = N(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, a.blob && (this.blob = function() {
            var T = p(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
          }), this.text = function() {
            var T = p(this);
            if (T)
              return T;
            if (this._bodyBlob)
              return w(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(j(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, a.formData && (this.formData = function() {
            return this.text().then($);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var B = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function z(T) {
          var S = T.toUpperCase();
          return B.indexOf(S) > -1 ? S : T;
        }
        function W(T, S) {
          S = S || {};
          var R = S.body;
          if (T instanceof W) {
            if (T.bodyUsed)
              throw new TypeError("Already read");
            this.url = T.url, this.credentials = T.credentials, S.headers || (this.headers = new h(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !R && T._bodyInit != null && (R = T._bodyInit, T.bodyUsed = !0);
          } else
            this.url = String(T);
          if (this.credentials = S.credentials || this.credentials || "same-origin", (S.headers || !this.headers) && (this.headers = new h(S.headers)), this.method = z(S.method || this.method || "GET"), this.mode = S.mode || this.mode || null, this.signal = S.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && R)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(R);
        }
        W.prototype.clone = function() {
          return new W(this, { body: this._bodyInit });
        };
        function $(T) {
          var S = new FormData();
          return T.trim().split("&").forEach(function(R) {
            if (R) {
              var C = R.split("="), J = C.shift().replace(/\+/g, " "), ie = C.join("=").replace(/\+/g, " ");
              S.append(decodeURIComponent(J), decodeURIComponent(ie));
            }
          }), S;
        }
        function b(T) {
          var S = new h(), R = T.replace(/\r?\n[\t ]+/g, " ");
          return R.split(/\r?\n/).forEach(function(C) {
            var J = C.split(":"), ie = J.shift().trim();
            if (ie) {
              var L = J.join(":").trim();
              S.append(ie, L);
            }
          }), S;
        }
        I.call(W.prototype);
        function k(T, S) {
          S || (S = {}), this.type = "default", this.status = S.status === void 0 ? 200 : S.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in S ? S.statusText : "OK", this.headers = new h(S.headers), this.url = S.url || "", this._initBody(T);
        }
        I.call(k.prototype), k.prototype.clone = function() {
          return new k(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
          });
        }, k.error = function() {
          var T = new k(null, { status: 0, statusText: "" });
          return T.type = "error", T;
        };
        var U = [301, 302, 303, 307, 308];
        k.redirect = function(T, S) {
          if (U.indexOf(S) === -1)
            throw new RangeError("Invalid status code");
          return new k(null, { status: S, headers: { location: T } });
        }, s.DOMException = o.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function(S, R) {
            this.message = S, this.name = R;
            var C = Error(S);
            this.stack = C.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function x(T, S) {
          return new Promise(function(R, C) {
            var J = new W(T, S);
            if (J.signal && J.signal.aborted)
              return C(new s.DOMException("Aborted", "AbortError"));
            var ie = new XMLHttpRequest();
            function L() {
              ie.abort();
            }
            ie.onload = function() {
              var F = {
                status: ie.status,
                statusText: ie.statusText,
                headers: b(ie.getAllResponseHeaders() || "")
              };
              F.url = "responseURL" in ie ? ie.responseURL : F.headers.get("X-Request-URL");
              var P = "response" in ie ? ie.response : ie.responseText;
              R(new k(P, F));
            }, ie.onerror = function() {
              C(new TypeError("Network request failed"));
            }, ie.ontimeout = function() {
              C(new TypeError("Network request failed"));
            }, ie.onabort = function() {
              C(new s.DOMException("Aborted", "AbortError"));
            }, ie.open(J.method, J.url, !0), J.credentials === "include" ? ie.withCredentials = !0 : J.credentials === "omit" && (ie.withCredentials = !1), "responseType" in ie && a.blob && (ie.responseType = "blob"), J.headers.forEach(function(F, P) {
              ie.setRequestHeader(P, F);
            }), J.signal && (J.signal.addEventListener("abort", L), ie.onreadystatechange = function() {
              ie.readyState === 4 && J.signal.removeEventListener("abort", L);
            }), ie.send(typeof J._bodyInit > "u" ? null : J._bodyInit);
          });
        }
        return x.polyfill = !0, o.fetch || (o.fetch = x, o.Headers = h, o.Request = W, o.Response = k), s.Headers = h, s.Request = W, s.Response = k, s.fetch = x, Object.defineProperty(s, "__esModule", { value: !0 }), s;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
  }(D4, Ai)), Ai;
}
(function(e, t) {
  var n;
  if (typeof fetch == "function" && (typeof zt < "u" && zt.fetch ? n = zt.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof v4 < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = n || A4();
    r.default && (r = r.default), t.default = r, e.exports = t.default;
  }
})(w4, Ui);
const AM = Ui, Eh = /* @__PURE__ */ BM({
  __proto__: null,
  default: AM
}, [Ui]);
function Zo(e) {
  return Zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zo(e);
}
var fn;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? fn = global.fetch : typeof window < "u" && window.fetch ? fn = window.fetch : fn = fetch);
var Fi;
DM() && (typeof global < "u" && global.XMLHttpRequest ? Fi = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Fi = window.XMLHttpRequest));
var Xo;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Xo = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Xo = window.ActiveXObject));
!fn && Eh && !Fi && !Xo && (fn = AM || Eh);
typeof fn != "function" && (fn = void 0);
var Ru = function(t, n) {
  if (n && Zo(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return t;
}, Ih = function(t, n, r) {
  fn(t, n).then(function(i) {
    if (!i.ok)
      return r(i.statusText || "Error", {
        status: i.status
      });
    i.text().then(function(o) {
      r(null, {
        status: i.status,
        data: o
      });
    }).catch(r);
  }).catch(r);
}, Nh = !1, E4 = function(t, n, r, i) {
  t.queryStringParams && (n = Ru(n, t.queryStringParams));
  var o = Pu({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  r && (o["Content-Type"] = "application/json");
  var s = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions, a = Pu({
    method: r ? "POST" : "GET",
    body: r ? t.stringify(r) : void 0,
    headers: o
  }, Nh ? {} : s);
  try {
    Ih(n, a, i);
  } catch (u) {
    if (!s || Object.keys(s).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(s).forEach(function(c) {
        delete a[c];
      }), Ih(n, a, i), Nh = !0;
    } catch (c) {
      i(c);
    }
  }
}, I4 = function(t, n, r, i) {
  r && Zo(r) === "object" && (r = Ru("", r).slice(1)), t.queryStringParams && (n = Ru(n, t.queryStringParams));
  try {
    var o;
    Fi ? o = new Fi() : o = new Xo("MSXML2.XMLHTTP.3.0"), o.open(r ? "POST" : "GET", n, 1), t.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!t.withCredentials, r && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
    var s = t.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var a in s)
        o.setRequestHeader(a, s[a]);
    o.onreadystatechange = function() {
      o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
        status: o.status,
        data: o.responseText
      });
    }, o.send(r);
  } catch (u) {
    console && console.log(u);
  }
}, N4 = function(t, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, fn && n.indexOf("file:") !== 0)
    return E4(t, n, r, i);
  if (DM() || typeof ActiveXObject == "function")
    return I4(t, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function Yi(e) {
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function T4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Th(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, EM(r.key), r);
  }
}
function j4(e, t, n) {
  return t && Th(e.prototype, t), n && Th(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function S4(e, t, n) {
  return t = EM(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function EM(e) {
  var t = b4(e, "string");
  return Yi(t) === "symbol" ? t : String(t);
}
function b4(e, t) {
  if (Yi(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Yi(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C4 = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return S4({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: N4,
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
}, IM = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    T4(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
  }
  return j4(e, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = Pu(i, this.options || {}, C4()), this.allOptions = o, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(n, r, i) {
      this._readAny(n, n, r, r, i);
    }
  }, {
    key: "read",
    value: function(n, r, i) {
      this._readAny([n], n, [r], r, i);
    }
  }, {
    key: "_readAny",
    value: function(n, r, i, o, s) {
      var a = this, u = this.options.loadPath;
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(n, i)), u = m4(u), u.then(function(c) {
        if (!c)
          return s(null, {});
        var l = a.services.interpolator.interpolate(c, {
          lng: n.join("+"),
          ns: i.join("+")
        });
        a.loadUrl(l, s, r, o);
      });
    }
  }, {
    key: "loadUrl",
    value: function(n, r, i, o) {
      var s = this, a = typeof i == "string" ? [i] : i, u = typeof o == "string" ? [o] : o, c = this.options.parseLoadPayload(a, u);
      this.options.request(this.options, n, c, function(l, f) {
        if (f && (f.status >= 500 && f.status < 600 || !f.status))
          return r("failed loading " + n + "; status code: " + f.status, !0);
        if (f && f.status >= 400 && f.status < 500)
          return r("failed loading " + n + "; status code: " + f.status, !1);
        if (!f && l && l.message && l.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + n + ": " + l.message, !0);
        if (l)
          return r(l, !1);
        var d, g;
        try {
          typeof f.data == "string" ? d = s.options.parse(f.data, i, o) : d = f.data;
        } catch {
          g = "failed parsing " + n + " to json";
        }
        if (g)
          return r(g, !1);
        r(null, d);
      });
    }
  }, {
    key: "create",
    value: function(n, r, i, o, s) {
      var a = this;
      if (this.options.addPath) {
        typeof n == "string" && (n = [n]);
        var u = this.options.parsePayload(r, i, o), c = 0, l = [], f = [];
        n.forEach(function(d) {
          var g = a.options.addPath;
          typeof a.options.addPath == "function" && (g = a.options.addPath(d, r));
          var h = a.services.interpolator.interpolate(g, {
            lng: d,
            ns: r
          });
          a.options.request(a.options, h, u, function(p, m) {
            c += 1, l.push(p), f.push(m), c === n.length && typeof s == "function" && s(l, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var n = this, r = this.services, i = r.backendConnector, o = r.languageUtils, s = r.logger, a = i.language;
      if (!(a && a.toLowerCase() === "cimode")) {
        var u = [], c = function(f) {
          var d = o.toResolveHierarchy(f);
          d.forEach(function(g) {
            u.indexOf(g) < 0 && u.push(g);
          });
        };
        c(a), this.allOptions.preload && this.allOptions.preload.forEach(function(l) {
          return c(l);
        }), u.forEach(function(l) {
          n.allOptions.ns.forEach(function(f) {
            i.read(l, f, "read", null, null, function(d, g) {
              d && s.warn("loading namespace ".concat(f, " for language ").concat(l, " failed"), d), !d && g && s.log("loaded namespace ".concat(f, " for language ").concat(l), g), i.loaded("".concat(l, "|").concat(f), d, g);
            });
          });
        });
      }
    }
  }]), e;
}();
IM.type = "backend";
const x4 = {
  [In.EN]: Gh,
  [In.JA]: Jh
}, eL = ({
  i18n: e,
  customTranslations: t = x4
}) => {
  const n = {
    [In.EN]: {
      translation: { ...Gh, ...t[In.EN] }
    },
    [In.JA]: {
      translation: { ...Jh, ...t[In.JA] }
    }
  }, r = {
    order: ["localStorage"],
    lookupLocalStorage: "wasedatime-lng",
    caches: ["localStorage"]
  };
  e.use(IM).use(vM).use(MN).init({
    resources: n,
    fallbackLng: In.EN,
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
    detection: r
  });
};
export {
  Ge as Colors,
  Yv as GoogleIcon,
  $4 as Header,
  In as Lang,
  BI as LanguageMenu,
  W4 as LoadingSpinner,
  QI as Logo,
  B4 as LogoJp,
  z4 as Modal,
  $y as Overlay,
  _4 as RowWrapper,
  X4 as SignInModal,
  $I as SmallLogo,
  Q4 as SmallLogoJp,
  WI as ThemeToggle,
  Fh as Wrapper,
  k4 as WrapperWithBackground,
  V4 as configAuth,
  Gh as en,
  R4 as fontSize,
  q4 as getAccessToken,
  H4 as getIdToken,
  K4 as getRefreshToken,
  G4 as getUserAttr,
  P4 as height,
  eL as i18nConfig,
  U4 as isScreenType,
  F4 as isThemeType,
  Jh as ja,
  Y4 as media,
  Dx as signIn,
  J4 as signOut,
  Qo as sizes,
  uv as useScrollBlock
};
