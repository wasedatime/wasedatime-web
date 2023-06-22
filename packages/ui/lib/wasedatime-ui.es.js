import * as oe from "react";
import Te, { useRef as tt, useDebugValue as bc, useContext as gt, createElement as wt, createContext as gn, forwardRef as Xo, Fragment as Tn, useLayoutEffect as gh, Children as yM, isValidElement as hi, cloneElement as gi, useState as On, useEffect as st, useMemo as fn, useReducer as mM, createRef as vM, useCallback as Cc } from "react";
import * as wM from "react-dom";
import ui, { createPortal as DM } from "react-dom";
function AM(e, t) {
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
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ph(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Yi(e) {
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
var rr = {}, EM = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
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
var xc;
function IM() {
  if (xc)
    return Re;
  xc = 1;
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
var Oc;
function NM() {
  return Oc || (Oc = 1, process.env.NODE_ENV !== "production" && function() {
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
    var Q = s, z = o, W = e, $ = u, b = n, k = d, U = f, x = t, T = i, S = r, R = c, C = l, J = !1, re = !1;
    function L(te) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(te) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
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
    function V(te) {
      return I(te) === i;
    }
    function B(te) {
      return I(te) === r;
    }
    function H(te) {
      return I(te) === c;
    }
    function fe(te) {
      return I(te) === l;
    }
    Ue.ContextConsumer = Q, Ue.ContextProvider = z, Ue.Element = W, Ue.ForwardRef = $, Ue.Fragment = b, Ue.Lazy = k, Ue.Memo = U, Ue.Portal = x, Ue.Profiler = T, Ue.StrictMode = S, Ue.Suspense = R, Ue.SuspenseList = C, Ue.isAsyncMode = L, Ue.isConcurrentMode = F, Ue.isContextConsumer = P, Ue.isContextProvider = q, Ue.isElement = K, Ue.isForwardRef = X, Ue.isFragment = O, Ue.isLazy = ne, Ue.isMemo = G, Ue.isPortal = he, Ue.isProfiler = V, Ue.isStrictMode = B, Ue.isSuspense = H, Ue.isSuspenseList = fe, Ue.isValidElementType = N, Ue.typeOf = I;
  }()), Ue;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = IM() : e.exports = NM();
})(EM);
function TM(e) {
  function t(P, q, K, X, O) {
    for (var ne = 0, G = 0, he = 0, V = 0, B, H, fe = 0, te = 0, le, Me = le = B = 0, de = 0, E = 0, y = 0, M = 0, A = K.length, Y = A - 1, ee, Z = "", ve = "", Ce = "", Se = "", Pe; de < A; ) {
      if (H = K.charCodeAt(de), de === Y && G + V + he + ne !== 0 && (G !== 0 && (H = G === 47 ? 10 : 47), V = he = ne = 0, A++, Y++), G + V + he + ne === 0) {
        if (de === Y && (0 < E && (Z = Z.replace(d, "")), 0 < Z.trim().length)) {
          switch (H) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Z += K.charAt(de);
          }
          H = 59;
        }
        switch (H) {
          case 123:
            for (Z = Z.trim(), B = Z.charCodeAt(0), le = 1, M = ++de; de < A; ) {
              switch (H = K.charCodeAt(de)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (H = K.charCodeAt(de + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Me = de + 1; Me < Y; ++Me)
                          switch (K.charCodeAt(Me)) {
                            case 47:
                              if (H === 42 && K.charCodeAt(Me - 1) === 42 && de + 2 !== Me) {
                                de = Me + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (H === 47) {
                                de = Me + 1;
                                break e;
                              }
                          }
                        de = Me;
                      }
                  }
                  break;
                case 91:
                  H++;
                case 40:
                  H++;
                case 34:
                case 39:
                  for (; de++ < Y && K.charCodeAt(de) !== H; )
                    ;
              }
              if (le === 0)
                break;
              de++;
            }
            switch (le = K.substring(M, de), B === 0 && (B = (Z = Z.replace(f, "").trim()).charCodeAt(0)), B) {
              case 64:
                switch (0 < E && (Z = Z.replace(d, "")), H = Z.charCodeAt(1), H) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    E = q;
                    break;
                  default:
                    E = R;
                }
                if (le = t(q, E, le, H, O + 1), M = le.length, 0 < J && (E = n(R, Z, y), Pe = a(3, le, E, q, x, U, M, H, O, X), Z = E.join(""), Pe !== void 0 && (M = (le = Pe.trim()).length) === 0 && (H = 0, le = "")), 0 < M)
                  switch (H) {
                    case 115:
                      Z = Z.replace(Q, s);
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
            Ce += le, le = y = E = Me = B = 0, Z = "", H = K.charCodeAt(++de);
            break;
          case 125:
          case 59:
            if (Z = (0 < E ? Z.replace(d, "") : Z).trim(), 1 < (M = Z.length))
              switch (Me === 0 && (B = Z.charCodeAt(0), B === 45 || 96 < B && 123 > B) && (M = (Z = Z.replace(" ", ":")).length), 0 < J && (Pe = a(1, Z, q, P, x, U, ve.length, X, O, X)) !== void 0 && (M = (Z = Pe.trim()).length) === 0 && (Z = "\0\0"), B = Z.charCodeAt(0), H = Z.charCodeAt(1), B) {
                case 0:
                  break;
                case 64:
                  if (H === 105 || H === 99) {
                    Se += Z + K.charAt(de);
                    break;
                  }
                default:
                  Z.charCodeAt(M - 1) !== 58 && (ve += i(Z, B, H, Z.charCodeAt(2)));
              }
            y = E = Me = B = 0, Z = "", H = K.charCodeAt(++de);
        }
      }
      switch (H) {
        case 13:
        case 10:
          G === 47 ? G = 0 : 1 + B === 0 && X !== 107 && 0 < Z.length && (E = 1, Z += "\0"), 0 < J * L && a(0, Z, q, P, x, U, ve.length, X, O, X), U = 1, x++;
          break;
        case 59:
        case 125:
          if (G + V + he + ne === 0) {
            U++;
            break;
          }
        default:
          switch (U++, ee = K.charAt(de), H) {
            case 9:
            case 32:
              if (V + ne + G === 0)
                switch (fe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ee = "";
                    break;
                  default:
                    H !== 32 && (ee = " ");
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
              V + G + ne === 0 && (E = y = 1, ee = "\f" + ee);
              break;
            case 108:
              if (V + G + ne + T === 0 && 0 < Me)
                switch (de - Me) {
                  case 2:
                    fe === 112 && K.charCodeAt(de - 3) === 58 && (T = fe);
                  case 8:
                    te === 111 && (T = te);
                }
              break;
            case 58:
              V + G + ne === 0 && (Me = de);
              break;
            case 44:
              G + he + V + ne === 0 && (E = 1, ee += "\r");
              break;
            case 34:
            case 39:
              G === 0 && (V = V === H ? 0 : V === 0 ? H : V);
              break;
            case 91:
              V + G + he === 0 && ne++;
              break;
            case 93:
              V + G + he === 0 && ne--;
              break;
            case 41:
              V + G + ne === 0 && he--;
              break;
            case 40:
              if (V + G + ne === 0) {
                if (B === 0)
                  switch (2 * fe + 3 * te) {
                    case 533:
                      break;
                    default:
                      B = 1;
                  }
                he++;
              }
              break;
            case 64:
              G + he + V + ne + Me + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < V + ne + he))
                switch (G) {
                  case 0:
                    switch (2 * H + 3 * K.charCodeAt(de + 1)) {
                      case 235:
                        G = 47;
                        break;
                      case 220:
                        M = de, G = 42;
                    }
                    break;
                  case 42:
                    H === 47 && fe === 42 && M + 2 !== de && (K.charCodeAt(M + 2) === 33 && (ve += K.substring(M, de + 1)), ee = "", G = 0);
                }
          }
          G === 0 && (Z += ee);
      }
      te = fe, fe = H, de++;
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
          for (var V = 0; V < ne; ++V)
            q[he++] = r(P[V] + " ", X[G], K).trim();
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
    return K = P.substring(K + 1, P.length - 1), re(q !== 2 ? X : X.replace($, "$1"), K, q);
  }
  function s(P, q) {
    var K = i(q, q.charCodeAt(0), q.charCodeAt(1), q.charCodeAt(2));
    return K !== q + ";" ? K.replace(z, " or ($1)").substring(4) : "(" + q + ")";
  }
  function a(P, q, K, X, O, ne, G, he, V, B) {
    for (var H = 0, fe = q, te; H < J; ++H)
      switch (te = C[H].call(l, P, fe, K, X, O, ne, G, he, V, B)) {
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
    return P = P.prefix, P !== void 0 && (re = null, P ? typeof P != "function" ? S = 1 : (S = 2, re = P) : S = 0), c;
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
  var f = /^\0+/g, d = /[\0\r\f]/g, g = /: */g, h = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, v = /([\t\r\n ])*\f?&/g, w = /@(k\w+)\s*(\S*)\s*/, j = /::(place)/g, N = /:(read-only)/g, I = /[svh]\w+-[tblr]{2}/, Q = /\(\s*(.*)\s*\)/g, z = /([\s\S]*?);/g, W = /-self|flex-/g, $ = /[^]*?(:[rp][el]a[\w-]+)[^]*/, b = /stretch|:\s*\w+\-(?:conte|avail)/, k = /([^-])(image-set\()/, U = 1, x = 1, T = 0, S = 1, R = [], C = [], J = 0, re = null, L = 0, F = "";
  return l.use = u, l.set = c, e !== void 0 && c(e), l;
}
var jM = {
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
function Mh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var SM = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sa = /* @__PURE__ */ Mh(
  function(e) {
    return SM.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ai = {}, bM = {
  get exports() {
    return Ai;
  },
  set exports(e) {
    Ai = e;
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
var Lc;
function CM() {
  if (Lc)
    return Fe;
  Lc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function j(I) {
    if (typeof I == "object" && I !== null) {
      var Q = I.$$typeof;
      switch (Q) {
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
                  return Q;
              }
          }
        case n:
          return Q;
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
var _c;
function xM() {
  return _c || (_c = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function j(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === r || H === c || H === o || H === i || H === f || H === d || typeof H == "object" && H !== null && (H.$$typeof === h || H.$$typeof === g || H.$$typeof === s || H.$$typeof === a || H.$$typeof === l || H.$$typeof === m || H.$$typeof === v || H.$$typeof === w || H.$$typeof === p);
    }
    function N(H) {
      if (typeof H == "object" && H !== null) {
        var fe = H.$$typeof;
        switch (fe) {
          case t:
            var te = H.type;
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
    var I = u, Q = c, z = a, W = s, $ = t, b = l, k = r, U = h, x = g, T = n, S = o, R = i, C = f, J = !1;
    function re(H) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(H) || N(H) === u;
    }
    function L(H) {
      return N(H) === c;
    }
    function F(H) {
      return N(H) === a;
    }
    function P(H) {
      return N(H) === s;
    }
    function q(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function K(H) {
      return N(H) === l;
    }
    function X(H) {
      return N(H) === r;
    }
    function O(H) {
      return N(H) === h;
    }
    function ne(H) {
      return N(H) === g;
    }
    function G(H) {
      return N(H) === n;
    }
    function he(H) {
      return N(H) === o;
    }
    function V(H) {
      return N(H) === i;
    }
    function B(H) {
      return N(H) === f;
    }
    Ye.AsyncMode = I, Ye.ConcurrentMode = Q, Ye.ContextConsumer = z, Ye.ContextProvider = W, Ye.Element = $, Ye.ForwardRef = b, Ye.Fragment = k, Ye.Lazy = U, Ye.Memo = x, Ye.Portal = T, Ye.Profiler = S, Ye.StrictMode = R, Ye.Suspense = C, Ye.isAsyncMode = re, Ye.isConcurrentMode = L, Ye.isContextConsumer = F, Ye.isContextProvider = P, Ye.isElement = q, Ye.isForwardRef = K, Ye.isFragment = X, Ye.isLazy = O, Ye.isMemo = ne, Ye.isPortal = G, Ye.isProfiler = he, Ye.isStrictMode = V, Ye.isSuspense = B, Ye.isValidElementType = j, Ye.typeOf = N;
  }()), Ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = CM() : e.exports = xM();
})(bM);
var Lu = Ai, OM = {
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
}, LM = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _M = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _u = {};
_u[Lu.ForwardRef] = _M;
_u[Lu.Memo] = yh;
function kc(e) {
  return Lu.isMemo(e) ? yh : _u[e.$$typeof] || OM;
}
var kM = Object.defineProperty, zM = Object.getOwnPropertyNames, zc = Object.getOwnPropertySymbols, PM = Object.getOwnPropertyDescriptor, RM = Object.getPrototypeOf, Pc = Object.prototype;
function mh(e, t, n) {
  if (typeof t != "string") {
    if (Pc) {
      var r = RM(t);
      r && r !== Pc && mh(e, r, n);
    }
    var i = zM(t);
    zc && (i = i.concat(zc(t)));
    for (var o = kc(e), s = kc(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!LM[u] && !(n && n[u]) && !(s && s[u]) && !(o && o[u])) {
        var c = PM(t, u);
        try {
          kM(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var UM = mh;
function sn() {
  return (sn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Rc = function(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, ba = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !rr.typeOf(e);
}, To = Object.freeze([]), jn = Object.freeze({});
function Ei(e) {
  return typeof e == "function";
}
function Ca(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ku(e) {
  return e && typeof e.styledComponentId == "string";
}
var Or = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", zu = typeof window < "u" && "HTMLElement" in window, FM = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), YM = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function QM() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Ur(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(QM.apply(void 0, [YM[e]].concat(n)).trim());
}
var BM = function() {
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
        (s <<= 1) < 0 && Ur(16, "" + n);
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
}(), mo = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), pi = 1, Xi = function(e) {
  if (mo.has(e))
    return mo.get(e);
  for (; jo.has(pi); )
    pi++;
  var t = pi++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Ur(16, "" + t), mo.set(e, t), jo.set(t, e), t;
}, $M = function(e) {
  return jo.get(e);
}, WM = function(e, t) {
  t >= pi && (pi = t + 1), mo.set(e, t), jo.set(t, e);
}, HM = "style[" + Or + '][data-styled-version="5.3.10"]', VM = new RegExp("^" + Or + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qM = function(e, t, n) {
  for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
    (r = i[o]) && e.registerName(t, r);
}, KM = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, o = n.length; i < o; i++) {
    var s = n[i].trim();
    if (s) {
      var a = s.match(VM);
      if (a) {
        var u = 0 | parseInt(a[1], 10), c = a[2];
        u !== 0 && (WM(c, u), qM(e, c, a[3]), e.getTag().insertRules(u, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, GM = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, vh = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), i = function(a) {
    for (var u = a.childNodes, c = u.length; c >= 0; c--) {
      var l = u[c];
      if (l && l.nodeType === 1 && l.hasAttribute(Or))
        return l;
    }
  }(n), o = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(Or, "active"), r.setAttribute("data-styled-version", "5.3.10");
  var s = GM();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
}, JM = function() {
  function e(n) {
    var r = this.element = vh(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, s = 0, a = o.length; s < a; s++) {
        var u = o[s];
        if (u.ownerNode === i)
          return u;
      }
      Ur(17);
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
}(), ZM = function() {
  function e(n) {
    var r = this.element = vh(n);
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
}(), XM = function() {
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
}(), Uc = zu, ey = { isServer: !zu, useCSSOMInjection: !FM }, wh = function() {
  function e(n, r, i) {
    n === void 0 && (n = jn), r === void 0 && (r = {}), this.options = sn({}, ey, {}, n), this.gs = r, this.names = new Map(i), this.server = !!n.isServer, !this.server && zu && Uc && (Uc = !1, function(o) {
      for (var s = document.querySelectorAll(HM), a = 0, u = s.length; a < u; a++) {
        var c = s[a];
        c && c.getAttribute(Or) !== "active" && (KM(o, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Xi(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(sn({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (r = this.options).isServer, o = r.useCSSOMInjection, s = r.target, n = i ? new XM(s) : o ? new JM(s) : new ZM(s), new BM(n)));
    var n, r, i, o, s;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Xi(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(r), this.names.set(n, i);
    }
  }, t.insertRules = function(n, r, i) {
    this.registerName(n, r), this.getTag().insertRules(Xi(n), i);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Xi(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), i = r.length, o = "", s = 0; s < i; s++) {
        var a = $M(s);
        if (a !== void 0) {
          var u = n.names.get(a), c = r.getGroup(s);
          if (u && c && u.size) {
            var l = Or + ".g" + s + '[id="' + a + '"]', f = "";
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
}(), ty = /(a)(d)/gi, Fc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xa(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Fc(t % 52) + n;
  return (Fc(t % 52) + n).replace(ty, "$1-$2");
}
var Bn = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Dh = function(e) {
  return Bn(5381, e);
};
function ny(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ei(n) && !ku(n))
      return !1;
  }
  return !0;
}
var ry = Dh("5.3.10"), iy = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ny(t), this.componentId = n, this.baseHash = Bn(ry, n), this.baseStyle = r, wh.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = Lr(this.rules, t, n, r).join(""), a = xa(Bn(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(i, a)) {
          var u = r(s, "." + a, void 0, i);
          n.insertRules(i, a, u);
        }
        o.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, l = Bn(this.baseHash, r.hash), f = "", d = 0; d < c; d++) {
        var g = this.rules[d];
        if (typeof g == "string")
          f += g, process.env.NODE_ENV !== "production" && (l = Bn(l, g + d));
        else if (g) {
          var h = Lr(g, t, n, r), p = Array.isArray(h) ? h.join("") : h;
          l = Bn(l, p + d), f += p;
        }
      }
      if (f) {
        var m = xa(l >>> 0);
        if (!n.hasNameForId(i, m)) {
          var v = r(f, "." + m, void 0, i);
          n.insertRules(i, m, v);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), oy = /^\s*\/\/.*$/gm, sy = [":", "[", ".", "#"];
function ay(e) {
  var t, n, r, i, o = e === void 0 ? jn : e, s = o.options, a = s === void 0 ? jn : s, u = o.plugins, c = u === void 0 ? To : u, l = new TM(a), f = [], d = function(p) {
    function m(v) {
      if (v)
        try {
          p(v + "}");
        } catch {
        }
    }
    return function(v, w, j, N, I, Q, z, W, $, b) {
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
    return m === 0 && sy.indexOf(v[n.length]) !== -1 || v.match(i) ? p : "." + t;
  };
  function h(p, m, v, w) {
    w === void 0 && (w = "&");
    var j = p.replace(oy, ""), N = m && v ? v + " " + m + " { " + j + " }" : j;
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
    return m.name || Ur(15), Bn(p, m.name);
  }, 5381).toString() : "", h;
}
var Ah = Te.createContext();
Ah.Consumer;
var Eh = Te.createContext(), uy = (Eh.Consumer, new wh()), Oa = ay();
function cy() {
  return gt(Ah) || uy;
}
function ly() {
  return gt(Eh) || Oa;
}
var fy = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Oa);
      var s = r.name + o.hash;
      i.hasNameForId(r.id, s) || i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Ur(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Oa), this.name + t.hash;
  }, e;
}(), dy = /([A-Z])/, hy = /([A-Z])/g, gy = /^ms-/, py = function(e) {
  return "-" + e.toLowerCase();
};
function Yc(e) {
  return dy.test(e) ? e.replace(hy, py).replace(gy, "-ms-") : e;
}
var Qc = function(e) {
  return e == null || e === !1 || e === "";
};
function Lr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, o = [], s = 0, a = e.length; s < a; s += 1)
      (i = Lr(e[s], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (Qc(e))
    return "";
  if (ku(e))
    return "." + e.styledComponentId;
  if (Ei(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && rr.isElement(u) && console.warn(Ca(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Lr(u, t, n, r);
  }
  var c;
  return e instanceof fy ? n ? (e.inject(n, r), e.getName(r)) : e : ba(e) ? function l(f, d) {
    var g, h, p = [];
    for (var m in f)
      f.hasOwnProperty(m) && !Qc(f[m]) && (Array.isArray(f[m]) && f[m].isCss || Ei(f[m]) ? p.push(Yc(m) + ":", f[m], ";") : ba(f[m]) ? p.push.apply(p, l(f[m], m)) : p.push(Yc(m) + ": " + (g = m, (h = f[m]) == null || typeof h == "boolean" || h === "" ? "" : typeof h != "number" || h === 0 || g in jM || g.startsWith("--") ? String(h).trim() : h + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Bc = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function My(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return Ei(e) || ba(e) ? Bc(Lr(Rc(To, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bc(Lr(Rc(e, n)));
}
var $c = /invalid hook call/i, eo = /* @__PURE__ */ new Set(), yy = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if ($c.test(o))
          i = !1, eo.delete(n);
        else {
          for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
            a[u - 1] = arguments[u];
          r.apply(void 0, [o].concat(a));
        }
      }, tt(), i && !eo.has(n) && (console.warn(n), eo.add(n));
    } catch (o) {
      $c.test(o.message) && eo.delete(n);
    } finally {
      console.error = r;
    }
  }
}, my = function(e, t, n) {
  return n === void 0 && (n = jn), e.theme !== n.theme && e.theme || t || n.theme;
}, vy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wy = /(^-|-$)/g;
function Rs(e) {
  return e.replace(vy, "-").replace(wy, "");
}
var Dy = function(e) {
  return xa(Dh(e) >>> 0);
};
function to(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var La = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ay = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ey(e, t, n) {
  var r = e[n];
  La(t) && La(r) ? Ih(r, t) : e[n] = t;
}
function Ih(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var i = 0, o = n; i < o.length; i++) {
    var s = o[i];
    if (La(s))
      for (var a in s)
        Ay(a) && Ey(e, s[a], a);
  }
  return e;
}
var Nh = Te.createContext();
Nh.Consumer;
var Us = {};
function Th(e, t, n) {
  var r = ku(e), i = !to(e), o = t.attrs, s = o === void 0 ? To : o, a = t.componentId, u = a === void 0 ? function(w, j) {
    var N = typeof w != "string" ? "sc" : Rs(w);
    Us[N] = (Us[N] || 0) + 1;
    var I = N + "-" + Dy("5.3.10" + N + Us[N]);
    return j ? j + "-" + I : I;
  }(t.displayName, t.parentComponentId) : a, c = t.displayName, l = c === void 0 ? function(w) {
    return to(w) ? "styled." + w : "Styled(" + Ca(w) + ")";
  }(e) : c, f = t.displayName && t.componentId ? Rs(t.displayName) + "-" + t.componentId : t.componentId || u, d = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, g = t.shouldForwardProp;
  r && e.shouldForwardProp && (g = t.shouldForwardProp ? function(w, j, N) {
    return e.shouldForwardProp(w, j, N) && t.shouldForwardProp(w, j, N);
  } : e.shouldForwardProp);
  var h, p = new iy(n, f, r ? e.componentStyle : void 0), m = p.isStatic && s.length === 0, v = function(w, j) {
    return function(N, I, Q, z) {
      var W = N.attrs, $ = N.componentStyle, b = N.defaultProps, k = N.foldedComponentIds, U = N.shouldForwardProp, x = N.styledComponentId, T = N.target;
      process.env.NODE_ENV !== "production" && bc(x);
      var S = function(X, O, ne) {
        X === void 0 && (X = jn);
        var G = sn({}, O, { theme: X }), he = {};
        return ne.forEach(function(V) {
          var B, H, fe, te = V;
          for (B in Ei(te) && (te = te(G)), te)
            G[B] = he[B] = B === "className" ? (H = he[B], fe = te[B], H && fe ? H + " " + fe : H || fe) : te[B];
        }), [G, he];
      }(my(I, gt(Nh), b) || jn, I, W), R = S[0], C = S[1], J = function(X, O, ne, G) {
        var he = cy(), V = ly(), B = O ? X.generateAndInjectStyles(jn, he, V) : X.generateAndInjectStyles(ne, he, V);
        return process.env.NODE_ENV !== "production" && bc(B), process.env.NODE_ENV !== "production" && !O && G && G(B), B;
      }($, z, R, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), re = Q, L = C.$as || I.$as || C.as || I.as || T, F = to(L), P = C !== I ? sn({}, I, {}, C) : I, q = {};
      for (var K in P)
        K[0] !== "$" && K !== "as" && (K === "forwardedAs" ? q.as = P[K] : (U ? U(K, Sa, L) : !F || Sa(K)) && (q[K] = P[K]));
      return I.style && C.style !== I.style && (q.style = sn({}, I.style, {}, C.style)), q.className = Array.prototype.concat(k, x, J !== x ? J : null, I.className, C.className).filter(Boolean).join(" "), q.ref = re, wt(L, q);
    }(h, w, j, m);
  };
  return v.displayName = l, (h = Te.forwardRef(v)).attrs = d, h.componentStyle = p, h.displayName = l, h.shouldForwardProp = g, h.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : To, h.styledComponentId = f, h.target = r ? e.target : e, h.withComponent = function(w) {
    var j = t.componentId, N = function(Q, z) {
      if (Q == null)
        return {};
      var W, $, b = {}, k = Object.keys(Q);
      for ($ = 0; $ < k.length; $++)
        W = k[$], z.indexOf(W) >= 0 || (b[W] = Q[W]);
      return b;
    }(t, ["componentId"]), I = j && j + "-" + (to(w) ? w : Rs(Ca(w)));
    return Th(w, sn({}, N, { attrs: d, componentId: I }), n);
  }, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = r ? Ih({}, e.defaultProps, w) : w;
  } }), process.env.NODE_ENV !== "production" && (yy(l, f), h.warnTooManyClasses = function(w, j) {
    var N = {}, I = !1;
    return function(Q) {
      if (!I && (N[Q] = !0, Object.keys(N).length >= 200)) {
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
  } }), i && UM(h, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), h;
}
var _a = function(e) {
  return function t(n, r, i) {
    if (i === void 0 && (i = jn), !rr.isValidElementType(r))
      return Ur(1, String(r));
    var o = function() {
      return n(r, i, My.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return t(n, r, sn({}, i, {}, s));
    }, o.attrs = function(s) {
      return t(n, r, sn({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, o;
  }(Th, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  _a[e] = _a(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const es = _a, jh = es("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`, GO = es("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`, JO = es(jh)`
  background-image: url(${(e) => e.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`, Iy = es("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
var ge = {}, Ny = {
  get exports() {
    return ge;
  },
  set exports(e) {
    ge = e;
  }
}, Kr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc;
function Ty() {
  if (Wc)
    return Kr;
  Wc = 1;
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
  return Kr.Fragment = n, Kr.jsx = s, Kr.jsxs = s, Kr;
}
var Gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc;
function jy() {
  return Hc || (Hc = 1, process.env.NODE_ENV !== "production" && function() {
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
        var Ve = ye.map(function(Oe) {
          return String(Oe);
        });
        Ve.unshift("Warning: " + ce), Function.prototype.apply.call(console[_], console, Ve);
      }
    }
    var N = !1, I = !1, Q = !1, z = !1, W = !1, $;
    $ = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || W || _ === i || _ === c || _ === l || z || _ === g || N || I || Q || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === f || _.$$typeof === s || _.$$typeof === a || _.$$typeof === u || // This needs to include all possible module reference object
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
            var Le = _, Ve = Le._payload, Oe = Le._init;
            try {
              return x(Oe(Ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, S = 0, R, C, J, re, L, F, P;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function K() {
      {
        if (S === 0) {
          R = console.log, C = console.info, J = console.warn, re = console.error, L = console.group, F = console.groupCollapsed, P = console.groupEnd;
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
              value: re
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
    var he = !1, V;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      V = new B();
    }
    function H(_, ce) {
      if (!_ || he)
        return "";
      {
        var ye = V.get(_);
        if (ye !== void 0)
          return ye;
      }
      var Ae;
      he = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ve;
      Ve = O.current, O.current = null, K();
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
            } catch (tn) {
              Ae = tn;
            }
            Reflect.construct(_, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (tn) {
              Ae = tn;
            }
            _.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tn) {
            Ae = tn;
          }
          _();
        }
      } catch (tn) {
        if (tn && Ae && typeof tn.stack == "string") {
          for (var be = tn.stack.split(`
`), yt = Ae.stack.split(`
`), nt = be.length - 1, it = yt.length - 1; nt >= 1 && it >= 0 && be[nt] !== yt[it]; )
            it--;
          for (; nt >= 1 && it >= 0; nt--, it--)
            if (be[nt] !== yt[it]) {
              if (nt !== 1 || it !== 1)
                do
                  if (nt--, it--, it < 0 || be[nt] !== yt[it]) {
                    var St = `
` + be[nt].replace(" at new ", " at ");
                    return _.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", _.displayName)), typeof _ == "function" && V.set(_, St), St;
                  }
                while (nt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        he = !1, O.current = Ve, X(), Error.prepareStackTrace = Le;
      }
      var fr = _ ? _.displayName || _.name : "", Sc = fr ? G(fr) : "";
      return typeof _ == "function" && V.set(_, Sc), Sc;
    }
    function fe(_, ce, ye) {
      return H(_, !1);
    }
    function te(_) {
      var ce = _.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function le(_, ce, ye) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return H(_, te(_));
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
            var Ae = _, Le = Ae._payload, Ve = Ae._init;
            try {
              return le(Ve(Le), ce, ye);
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
        var Ve = Function.call.bind(Me);
        for (var Oe in _)
          if (Ve(_, Oe)) {
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
    }, He, De, en;
    en = {};
    function cr(_) {
      if (Me.call(_, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Zi(_) {
      if (Me.call(_, "key")) {
        var ce = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Dc(_, ce) {
      if (typeof _.ref == "string" && Se.current && ce && Se.current.stateNode !== ce) {
        var ye = x(Se.current.type);
        en[ye] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Se.current.type), _.ref), en[ye] = !0);
      }
    }
    function oM(_, ce) {
      {
        var ye = function() {
          He || (He = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        ye.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function sM(_, ce) {
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
    var aM = function(_, ce, ye, Ae, Le, Ve, Oe) {
      var be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: ce,
        ref: ye,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: Ve
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
    function uM(_, ce, ye, Ae, Le) {
      {
        var Ve, Oe = {}, be = null, yt = null;
        ye !== void 0 && (Ce(ye), be = "" + ye), Zi(ce) && (Ce(ce.key), be = "" + ce.key), cr(ce) && (yt = ce.ref, Dc(ce, Le));
        for (Ve in ce)
          Me.call(ce, Ve) && !Pe.hasOwnProperty(Ve) && (Oe[Ve] = ce[Ve]);
        if (_ && _.defaultProps) {
          var nt = _.defaultProps;
          for (Ve in nt)
            Oe[Ve] === void 0 && (Oe[Ve] = nt[Ve]);
        }
        if (be || yt) {
          var it = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          be && oM(Oe, it), yt && sM(Oe, it);
        }
        return aM(_, be, yt, Le, Ae, Se.current, Oe);
      }
    }
    var ks = v.ReactCurrentOwner, Ac = v.ReactDebugCurrentFrame;
    function lr(_) {
      if (_) {
        var ce = _._owner, ye = le(_.type, _._source, ce ? ce.type : null);
        Ac.setExtraStackFrame(ye);
      } else
        Ac.setExtraStackFrame(null);
    }
    var zs;
    zs = !1;
    function Ps(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Ec() {
      {
        if (ks.current) {
          var _ = x(ks.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function cM(_) {
      {
        if (_ !== void 0) {
          var ce = _.fileName.replace(/^.*[\\\/]/, ""), ye = _.lineNumber;
          return `

Check your code at ` + ce + ":" + ye + ".";
        }
        return "";
      }
    }
    var Ic = {};
    function lM(_) {
      {
        var ce = Ec();
        if (!ce) {
          var ye = typeof _ == "string" ? _ : _.displayName || _.name;
          ye && (ce = `

Check the top-level render call using <` + ye + ">.");
        }
        return ce;
      }
    }
    function Nc(_, ce) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ye = lM(ce);
        if (Ic[ye])
          return;
        Ic[ye] = !0;
        var Ae = "";
        _ && _._owner && _._owner !== ks.current && (Ae = " It was passed a child from " + x(_._owner.type) + "."), lr(_), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, Ae), lr(null);
      }
    }
    function Tc(_, ce) {
      {
        if (typeof _ != "object")
          return;
        if (Y(_))
          for (var ye = 0; ye < _.length; ye++) {
            var Ae = _[ye];
            Ps(Ae) && Nc(Ae, ce);
          }
        else if (Ps(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Le = m(_);
          if (typeof Le == "function" && Le !== _.entries)
            for (var Ve = Le.call(_), Oe; !(Oe = Ve.next()).done; )
              Ps(Oe.value) && Nc(Oe.value, ce);
        }
      }
    }
    function fM(_) {
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
        } else if (ce.PropTypes !== void 0 && !zs) {
          zs = !0;
          var Le = x(ce);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dM(_) {
      {
        for (var ce = Object.keys(_.props), ye = 0; ye < ce.length; ye++) {
          var Ae = ce[ye];
          if (Ae !== "children" && Ae !== "key") {
            lr(_), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ae), lr(null);
            break;
          }
        }
        _.ref !== null && (lr(_), w("Invalid attribute `ref` supplied to `React.Fragment`."), lr(null));
      }
    }
    function jc(_, ce, ye, Ae, Le, Ve) {
      {
        var Oe = b(_);
        if (!Oe) {
          var be = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = cM(Le);
          yt ? be += yt : be += Ec();
          var nt;
          _ === null ? nt = "null" : Y(_) ? nt = "array" : _ !== void 0 && _.$$typeof === t ? (nt = "<" + (x(_.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof _, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, be);
        }
        var it = uM(_, ce, ye, Le, Ve);
        if (it == null)
          return it;
        if (Oe) {
          var St = ce.children;
          if (St !== void 0)
            if (Ae)
              if (Y(St)) {
                for (var fr = 0; fr < St.length; fr++)
                  Tc(St[fr], _);
                Object.freeze && Object.freeze(St);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tc(St, _);
        }
        return _ === r ? dM(it) : fM(it), it;
      }
    }
    function hM(_, ce, ye) {
      return jc(_, ce, ye, !0);
    }
    function gM(_, ce, ye) {
      return jc(_, ce, ye, !1);
    }
    var pM = gM, MM = hM;
    Gr.Fragment = r, Gr.jsx = pM, Gr.jsxs = MM;
  }()), Gr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ty() : e.exports = jy();
})(Ny);
var So = {}, Sy = {
  get exports() {
    return So;
  },
  set exports(e) {
    So = e;
  }
}, ir = {}, D = {}, Vc = {
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
var Fs, qc;
function by() {
  if (qc)
    return Fs;
  qc = 1;
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
  return Fs = i() ? Object.assign : function(o, s) {
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
  }, Fs;
}
var Ys, Kc;
function Pu() {
  if (Kc)
    return Ys;
  Kc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ys = e, Ys;
}
var Qs, Gc;
function Sh() {
  return Gc || (Gc = 1, Qs = Function.call.bind(Object.prototype.hasOwnProperty)), Qs;
}
var Bs, Jc;
function Cy() {
  if (Jc)
    return Bs;
  Jc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Pu(), n = {}, r = Sh();
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
  }, Bs = i, Bs;
}
var $s, Zc;
function xy() {
  if (Zc)
    return $s;
  Zc = 1;
  var e = Ai, t = by(), n = Pu(), r = Sh(), i = Cy(), o = function() {
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
  return $s = function(a, u) {
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
      instanceOf: Q,
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
      function q(X, O, ne, G, he, V, B) {
        if (G = G || d, V = V || ne, B !== n) {
          if (u) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = G + ":" + ne;
            !F[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[fe] = !0, P++);
          }
        }
        return O[ne] == null ? X ? O[ne] === null ? new p("The " + he + " `" + V + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new p("The " + he + " `" + V + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : L(O, ne, G, he, V);
      }
      var K = q.bind(null, !1);
      return K.isRequired = q.bind(null, !0), K;
    }
    function v(L) {
      function F(P, q, K, X, O, ne) {
        var G = P[q], he = R(G);
        if (he !== L) {
          var V = C(G);
          return new p(
            "Invalid " + X + " `" + O + "` of type " + ("`" + V + "` supplied to `" + K + "`, expected ") + ("`" + L + "`."),
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
          var V = L(ne, he, K, X, O + "[" + he + "]", n);
          if (V instanceof Error)
            return V;
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
    function Q(L) {
      function F(P, q, K, X, O) {
        if (!(P[q] instanceof L)) {
          var ne = L.name || d, G = re(P[q]);
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
        var he = JSON.stringify(L, function(B, H) {
          var fe = C(H);
          return fe === "symbol" ? String(H) : H;
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
            var V = L(ne, he, K, X, O + "." + he, n);
            if (V instanceof Error)
              return V;
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
        for (var he = [], V = 0; V < L.length; V++) {
          var B = L[V], H = B(K, X, O, ne, G, n);
          if (H == null)
            return null;
          H.data && r(H.data, "expectedType") && he.push(H.data.expectedType);
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
          var V = L[he];
          if (typeof V != "function")
            return k(K, X, O, he, C(V));
          var B = V(ne, he, K, X, O + "." + he, n);
          if (B)
            return B;
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
        for (var V in he) {
          var B = L[V];
          if (r(L, V) && typeof B != "function")
            return k(K, X, O, V, C(B));
          if (!B)
            return new p(
              "Invalid " + X + " `" + O + "` key `" + V + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(P[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(L), null, "  ")
            );
          var H = B(ne, V, K, X, O + "." + V, n);
          if (H)
            return H;
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
    function re(L) {
      return !L.constructor || !L.constructor.name ? d : L.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, $s;
}
var Ws, Xc;
function Oy() {
  if (Xc)
    return Ws;
  Xc = 1;
  var e = Pu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ws = function() {
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
  }, Ws;
}
if (process.env.NODE_ENV !== "production") {
  var Ly = Ai, _y = !0;
  Vc.exports = xy()(Ly.isElement, _y);
} else
  Vc.exports = Oy()();
var bo = {}, ky = {
  get exports() {
    return bo;
  },
  set exports(e) {
    bo = e;
  }
}, $t = {}, Ii = {}, zy = {
  get exports() {
    return Ii;
  },
  set exports(e) {
    Ii = e;
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
})(zy, Ii);
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.resetState = Fy;
$t.log = Yy;
$t.handleBlur = Ni;
$t.handleFocus = Ti;
$t.markForFocusLater = Qy;
$t.returnFocus = By;
$t.popWithoutFocus = $y;
$t.setupScopedFocus = Wy;
$t.teardownScopedFocus = Hy;
var Py = Ii, Ry = Uy(Py);
function Uy(e) {
  return e && e.__esModule ? e : { default: e };
}
var or = [], Ir = null, ka = !1;
function Fy() {
  or = [];
}
function Yy() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), or.forEach(function(e) {
    var t = e || {};
    console.log(t.nodeName, t.className, t.id);
  }), console.log("end focusManager ----------"));
}
function Ni() {
  ka = !0;
}
function Ti() {
  if (ka) {
    if (ka = !1, !Ir)
      return;
    setTimeout(function() {
      if (!Ir.contains(document.activeElement)) {
        var e = (0, Ry.default)(Ir)[0] || Ir;
        e.focus();
      }
    }, 0);
  }
}
function Qy() {
  or.push(document.activeElement);
}
function By() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = null;
  try {
    or.length !== 0 && (t = or.pop(), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
  }
}
function $y() {
  or.length > 0 && or.pop();
}
function Wy(e) {
  Ir = e, window.addEventListener ? (window.addEventListener("blur", Ni, !1), document.addEventListener("focus", Ti, !0)) : (window.attachEvent("onBlur", Ni), document.attachEvent("onFocus", Ti));
}
function Hy() {
  Ir = null, window.addEventListener ? (window.removeEventListener("blur", Ni), document.removeEventListener("focus", Ti)) : (window.detachEvent("onBlur", Ni), document.detachEvent("onFocus", Ti));
}
var Co = {}, Vy = {
  get exports() {
    return Co;
  },
  set exports(e) {
    Co = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = Ii, r = i(n);
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
})(Vy, Co);
var Wt = {}, qy = process.env.NODE_ENV !== "production", bh = function() {
};
if (qy) {
  var Ky = function(t, n) {
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
  bh = function(e, t, n) {
    var r = arguments.length;
    n = new Array(r > 2 ? r - 2 : 0);
    for (var i = 2; i < r; i++)
      n[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || Ky.apply(null, [t].concat(n));
  };
}
var Gy = bh, Qt = {}, za = {}, Jy = {
  get exports() {
    return za;
  },
  set exports(e) {
    za = e;
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
})(Jy);
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.canUseDOM = Qt.SafeNodeList = Qt.SafeHTMLCollection = void 0;
var Zy = za, Xy = em(Zy);
function em(e) {
  return e && e.__esModule ? e : { default: e };
}
var ts = Xy.default, tm = ts.canUseDOM ? window.HTMLElement : {};
Qt.SafeHTMLCollection = ts.canUseDOM ? window.HTMLCollection : {};
Qt.SafeNodeList = ts.canUseDOM ? window.NodeList : {};
Qt.canUseDOM = ts.canUseDOM;
Qt.default = tm;
Object.defineProperty(Wt, "__esModule", {
  value: !0
});
Wt.resetState = sm;
Wt.log = am;
Wt.assertNodeList = Ch;
Wt.setElement = um;
Wt.validateElement = Ru;
Wt.hide = cm;
Wt.show = lm;
Wt.documentNotReadyOrSSRTesting = fm;
var nm = Gy, rm = om(nm), im = Qt;
function om(e) {
  return e && e.__esModule ? e : { default: e };
}
var Et = null;
function sm() {
  Et && (Et.removeAttribute ? Et.removeAttribute("aria-hidden") : Et.length != null ? Et.forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Et).forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  })), Et = null;
}
function am() {
  if (process.env.NODE_ENV !== "production") {
    var e = Et || {};
    console.log("ariaAppHider ----------"), console.log(e.nodeName, e.className, e.id), console.log("end ariaAppHider ----------");
  }
}
function Ch(e, t) {
  if (!e || !e.length)
    throw new Error("react-modal: No elements were found for selector " + t + ".");
}
function um(e) {
  var t = e;
  if (typeof t == "string" && im.canUseDOM) {
    var n = document.querySelectorAll(t);
    Ch(n, t), t = n;
  }
  return Et = t || Et, Et;
}
function Ru(e) {
  var t = e || Et;
  return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, rm.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function cm(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var i = Ru(e)[Symbol.iterator](), o; !(t = (o = i.next()).done); t = !0) {
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
function lm(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var i = Ru(e)[Symbol.iterator](), o; !(t = (o = i.next()).done); t = !0) {
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
function fm() {
  Et = null;
}
var Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
Fr.resetState = dm;
Fr.log = hm;
var Xn = {}, er = {};
function el(e, t) {
  e.classList.remove(t);
}
function dm() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in Xn)
    el(e, Xn[t]);
  var n = document.body;
  for (var r in er)
    el(n, er[r]);
  Xn = {}, er = {};
}
function hm() {
  if (process.env.NODE_ENV !== "production") {
    var e = document.getElementsByTagName("html")[0].className, t = `Show tracked classes:

`;
    t += "<html /> (" + e + `):
  `;
    for (var n in Xn)
      t += "  " + n + " " + Xn[n] + `
  `;
    e = document.body.className, t += `

doc.body (` + e + `):
  `;
    for (var r in er)
      t += "  " + r + " " + er[r] + `
  `;
    t += `
`, console.log(t);
  }
}
var gm = function(t, n) {
  return t[n] || (t[n] = 0), t[n] += 1, n;
}, pm = function(t, n) {
  return t[n] && (t[n] -= 1), n;
}, Mm = function(t, n, r) {
  r.forEach(function(i) {
    gm(n, i), t.add(i);
  });
}, ym = function(t, n, r) {
  r.forEach(function(i) {
    pm(n, i), n[i] === 0 && t.remove(i);
  });
};
Fr.add = function(t, n) {
  return Mm(t.classList, t.nodeName.toLowerCase() == "html" ? Xn : er, n.split(" "));
};
Fr.remove = function(t, n) {
  return ym(t.classList, t.nodeName.toLowerCase() == "html" ? Xn : er, n.split(" "));
};
var Yr = {};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
Yr.log = vm;
Yr.resetState = wm;
function mm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var xh = function e() {
  var t = this;
  mm(this, e), this.register = function(n) {
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
}, xo = new xh();
function vm() {
  console.log("portalOpenInstances ----------"), console.log(xo.openInstances.length), xo.openInstances.forEach(function(e) {
    return console.log(e);
  }), console.log("end portalOpenInstances ----------");
}
function wm() {
  xo = new xh();
}
Yr.default = xo;
var Uu = {};
Object.defineProperty(Uu, "__esModule", {
  value: !0
});
Uu.resetState = Im;
Uu.log = Nm;
var Dm = Yr, Am = Em(Dm);
function Em(e) {
  return e && e.__esModule ? e : { default: e };
}
var ht = void 0, Ft = void 0, tr = [];
function Im() {
  for (var e = [ht, Ft], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  ht = Ft = null, tr = [];
}
function Nm() {
  console.log("bodyTrap ----------"), console.log(tr.length);
  for (var e = [ht, Ft], t = 0; t < e.length; t++) {
    var n = e[t], r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function tl() {
  if (tr.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  tr[tr.length - 1].focusContent();
}
function Tm(e, t) {
  !ht && !Ft && (ht = document.createElement("div"), ht.setAttribute("data-react-modal-body-trap", ""), ht.style.position = "absolute", ht.style.opacity = "0", ht.setAttribute("tabindex", "0"), ht.addEventListener("focus", tl), Ft = ht.cloneNode(), Ft.addEventListener("focus", tl)), tr = t, tr.length > 0 ? (document.body.firstChild !== ht && document.body.insertBefore(ht, document.body.firstChild), document.body.lastChild !== Ft && document.body.appendChild(Ft)) : (ht.parentElement && ht.parentElement.removeChild(ht), Ft.parentElement && Ft.parentElement.removeChild(Ft));
}
Am.default.subscribe(Tm);
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
  }(), o = Te, s = D, a = I(s), u = $t, c = N(u), l = Co, f = I(l), d = Wt, g = N(d), h = Fr, p = N(h), m = Qt, v = I(m), w = Yr, j = I(w);
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
  function Q(T, S) {
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
      Q(this, S);
      var C = z(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, R));
      return C.setOverlayRef = function(J) {
        C.overlay = J, C.props.overlayRef && C.props.overlayRef(J);
      }, C.setContentRef = function(J) {
        C.content = J, C.props.contentRef && C.props.contentRef(J);
      }, C.afterClose = function() {
        var J = C.props, re = J.appElement, L = J.ariaHideApp, F = J.htmlOpenClassName, P = J.bodyOpenClassName, q = J.parentSelector, K = q && q().ownerDocument || document;
        P && p.remove(K.body, P), F && p.remove(K.getElementsByTagName("html")[0], F), L && U > 0 && (U -= 1, U === 0 && g.show(re)), C.props.shouldFocusAfterRender && (C.props.shouldReturnFocusAfterClose ? (c.returnFocus(C.props.preventScroll), c.teardownScopedFocus()) : c.popWithoutFocus()), C.props.onAfterClose && C.props.onAfterClose(), j.default.deregister(C);
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
      }, C.buildClassName = function(J, re) {
        var L = (typeof re > "u" ? "undefined" : r(re)) === "object" ? re : {
          base: $[J],
          afterOpen: $[J] + "--after-open",
          beforeClose: $[J] + "--before-close"
        }, F = L.base;
        return C.state.afterOpen && (F = F + " " + L.afterOpen), C.state.beforeClose && (F = F + " " + L.beforeClose), typeof re == "string" && re ? F + " " + re : F;
      }, C.attributesFromObject = function(J, re) {
        return Object.keys(re).reduce(function(L, F) {
          return L[J + "-" + F] = re[F], L;
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
        var C = this.props, J = C.appElement, re = C.ariaHideApp, L = C.htmlOpenClassName, F = C.bodyOpenClassName, P = C.parentSelector, q = P && P().ownerDocument || document;
        F && p.add(q.body, F), L && p.add(q.getElementsByTagName("html")[0], L), re && (U += 1, g.hide(J)), j.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var C = this.props, J = C.id, re = C.className, L = C.overlayClassName, F = C.defaultStyles, P = C.children, q = re ? {} : F.content, K = L ? {} : F.overlay;
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
          className: this.buildClassName("content", re),
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
})(ky, bo);
function Oh() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function Lh(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function _h(e, t) {
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
Oh.__suppressDeprecationWarning = !0;
Lh.__suppressDeprecationWarning = !0;
_h.__suppressDeprecationWarning = !0;
function jm(e) {
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
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Oh, t.componentWillReceiveProps = Lh), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = _h;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function(c, l, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      a.call(this, c, l, d);
    };
  }
  return e;
}
const Sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: jm
}, Symbol.toStringTag, { value: "Module" })), bm = /* @__PURE__ */ Yi(Sm);
Object.defineProperty(ir, "__esModule", {
  value: !0
});
ir.bodyOpenClassName = ir.portalClassName = void 0;
var nl = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Cm = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), kh = Te, Oo = Qi(kh), xm = ui, Lo = Qi(xm), Om = D, Ie = Qi(Om), Lm = bo, rl = Qi(Lm), _m = Wt, km = Pm(_m), Nn = Qt, il = Qi(Nn), zm = bm;
function Pm(e) {
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
function Rm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ol(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Fm = ir.portalClassName = "ReactModalPortal", Ym = ir.bodyOpenClassName = "ReactModal__Body--open", Un = Nn.canUseDOM && Lo.default.createPortal !== void 0, Pa = function(t) {
  return document.createElement(t);
}, sl = function() {
  return Un ? Lo.default.createPortal : Lo.default.unstable_renderSubtreeIntoContainer;
};
function no(e) {
  return e();
}
var Qr = function(e) {
  Um(t, e);
  function t() {
    var n, r, i, o;
    Rm(this, t);
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return o = (r = (i = ol(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))), i), i.removePortal = function() {
      !Un && Lo.default.unmountComponentAtNode(i.node);
      var c = no(i.props.parentSelector);
      c && c.contains(i.node) ? c.removeChild(i.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, i.portalRef = function(c) {
      i.portal = c;
    }, i.renderPortal = function(c) {
      var l = sl(), f = l(i, Oo.default.createElement(rl.default, nl({ defaultStyles: t.defaultStyles }, c)), i.node);
      i.portalRef(f);
    }, r), ol(i, o);
  }
  return Cm(t, [{
    key: "componentDidMount",
    value: function() {
      if (Nn.canUseDOM) {
        Un || (this.node = Pa("div")), this.node.className = this.props.portalClassName;
        var r = no(this.props.parentSelector);
        r.appendChild(this.node), !Un && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var i = no(r.parentSelector), o = no(this.props.parentSelector);
      return { prevParent: i, nextParent: o };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, i, o) {
      if (Nn.canUseDOM) {
        var s = this.props, a = s.isOpen, u = s.portalClassName;
        r.portalClassName !== u && (this.node.className = u);
        var c = o.prevParent, l = o.nextParent;
        l !== c && (c.removeChild(this.node), l.appendChild(this.node)), !(!r.isOpen && !a) && !Un && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Nn.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, i = Date.now(), o = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || i + this.props.closeTimeoutMS);
        o ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, o - i)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Nn.canUseDOM || !Un)
        return null;
      !this.node && Un && (this.node = Pa("div"));
      var r = sl();
      return r(Oo.default.createElement(rl.default, nl({
        ref: this.portalRef,
        defaultStyles: t.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      km.setElement(r);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), t;
}(kh.Component);
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
  appElement: Ie.default.oneOfType([Ie.default.instanceOf(il.default), Ie.default.instanceOf(Nn.SafeHTMLCollection), Ie.default.instanceOf(Nn.SafeNodeList), Ie.default.arrayOf(Ie.default.instanceOf(il.default))]),
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
  portalClassName: Fm,
  bodyOpenClassName: Ym,
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
    return Oo.default.createElement(
      "div",
      t,
      n
    );
  },
  contentElement: function(t, n) {
    return Oo.default.createElement(
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
(0, zm.polyfill)(Qr);
process.env.NODE_ENV !== "production" && (Qr.setCreateHTMLElement = function(e) {
  return Pa = e;
});
ir.default = Qr;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = ir, r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  t.default = r.default, e.exports = t.default;
})(Sy, So);
const zh = /* @__PURE__ */ ph(So), al = document, Qm = () => {
  const e = tt(!1), t = al.documentElement, { body: n } = al;
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
zh.setAppElement(document.createElement("div"));
const ZO = ({
  isOpen: e,
  children: t,
  closeTimeoutMS: n,
  style: r,
  overlayClassName: i,
  className: o,
  onRequestClose: s
}) => {
  const [a, u] = Qm();
  return e ? a() : u(), /* @__PURE__ */ ge.jsx(
    zh,
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
}, XO = {
  headerHeight: "67px",
  searchBarHeight: "32px",
  switchHeight: "32px"
}, e4 = {
  title: "36px",
  subtitle: "24px",
  content: "14px",
  small: "12px"
};
var En = /* @__PURE__ */ ((e) => (e.EN = "en", e.JA = "ja", e))(En || {});
const Bm = ["desktop", "tablet", "phone", "phoneMini"], t4 = (e) => Bm.includes(e), $m = ["light", "dark"], n4 = (e) => $m.includes(e), Wm = {
  courseChange: "Course change detected. If you added/deleted courses in another tab, please ",
  RefreshLink: "click here to refresh to see the changes"
}, Hm = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun"
}, Vm = {
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
}, qm = {
  timetable: "Timetable",
  syllabus: "Syllabus",
  "course info": "Course",
  roomfinder: "Rooms",
  joinus: "Join Us",
  bus: "Bus",
  language: "Language",
  career: "Career",
  "corona-info": "COVID19"
}, Km = {
  licensed: " Code Licensed ",
  syllabus: "Syllabus correct as at",
  update: ""
}, Gm = {
  title: "WasedaTime",
  description: "Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
}, Jm = {
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
}, Zm = {
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
}, Xm = {
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
}, ev = {
  "Under Construction": "Under Construction",
  "Want to help?": "Wanna build an amazing app with us?",
  "Check out our": "Check out our",
  facebook: " Facebook ",
  twitter: "Twitter",
  or: " or ",
  "!": "!",
  "We sincerely welcome any contributors!": "We sincerely welcome any contributors!"
}, tv = {
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
}, nv = {
  header: "Updates on the issue with the 2020 syllabus",
  main: "Hi! Thanks for clicking in.",
  main2: "We apologize that the 2020 syllabus is not supported yet. Due to a updated policy from Waseda University, we are not able to obtain the 2020 syllabus data at this moment.",
  main3: "We are actively negotiating with the university and will provide any updates as soon as possible. We have received many inquiries and are very sorry for not being able to respond in time.",
  main4: "Thank you so much again, and we will do our best to ensure that the mission of WasedaTime continues.",
  main5: "Please stay safe and healthy!"
}, rv = {
  Intern: "Intern",
  Articles: "Articles",
  viewMore: "View More",
  Entry: "Entry"
}, iv = {
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
}, ov = {
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
}, Ph = {
  app: Wm,
  common: Hm,
  welcome: Vm,
  navigation: qm,
  footer: Km,
  about: Gm,
  timetable: Jm,
  syllabus: Zm,
  courseInfo: Xm,
  room: ev,
  bus: tv,
  updates: nv,
  career: rv,
  coronaInfo: iv,
  user: ov
}, sv = {
  courseChange: "科目の変更が検出されました。別のタブで科目を登録/取り消した場合は、変更を反映するために",
  RefreshLink: "こちらにクリックして再読み込みしてください"
}, av = {
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
  sun: "日"
}, uv = {
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
}, cv = {
  timetable: "時間割",
  syllabus: "シラバス",
  "course info": "授業詳細",
  roomfinder: "空き教室",
  joinus: "募集中！",
  bus: "バス",
  language: "言語",
  career: "キャリア",
  "corona-info": "コロナ"
}, lv = {
  licensed: " ソースコードライセンス ",
  syllabus: "シラバスは",
  update: "に更新されました"
}, fv = {
  title: "早稲田タイム",
  description: "早稲田大学の学生のキャンパスライフを支え、向上させることを目的とした非営利・学生運営・オープンソースのアプリ"
}, dv = {
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
}, hv = {
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
}, gv = {
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
}, pv = {
  "Under Construction": "作成中",
  "Want to help?": "一緒に楽しく開発しませんか？",
  "Check out our": "興味のある方は ",
  facebook: " Facebook ",
  twitter: " Twitter ",
  or: "または",
  "!": "から！",
  "We sincerely welcome any contributors!": ""
}, Mv = {
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
}, yv = {
  header: "2020のシラバスについて",
  main: "こんにちは！クリックしていただきありがとうございます。",
  main2: "申し訳ありませんが、2020年のシラバスはまだサポートされていません。早稲田大学のポリシーが更新されたため、現時点では2020のシラバスデータを取得できません。",
  main3: "私たちは積極的に大学と相談しており、新しい情報をできるだけ早く提供します。多くのお問い合わせをいただきましたが、時間内にご返答できず大変申し訳ございません。",
  main4: "改めて、あなたに感謝申し上げます。早稲田タイムの使命が継続するように最善を尽くします。",
  main5: "どうぞ、安全と健康にお気をつけくださいませ。"
}, mv = {
  Intern: "インターン",
  Articles: "記事",
  viewMore: "インターン内容をもっと見る",
  Entry: "エントリー"
}, vv = {
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
}, wv = {
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
}, Rh = {
  app: sv,
  common: av,
  welcome: uv,
  navigation: cv,
  footer: lv,
  about: fv,
  timetable: dv,
  syllabus: hv,
  courseInfo: gv,
  room: pv,
  bus: Mv,
  updates: yv,
  career: mv,
  coronaInfo: vv,
  user: wv
}, Dv = () => /* @__PURE__ */ ge.jsx("svg", { viewBox: "0 0 50 50", width: "50px", height: "50px", children: /* @__PURE__ */ ge.jsx("path", { d: "M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z" }) });
var Ra = {}, Av = {
  get exports() {
    return Ra;
  },
  set exports(e) {
    Ra = e;
  }
};
(function(e, t) {
  (function(r, i) {
    e.exports = i(Te);
  })(kt, (n) => (
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
                var Q = I.inverse, z = I.type === "all" || N.type === I.type;
                if (z && Q || !(z || Q))
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
                return W && !Q || !W && Q;
              });
            }
            function p(j) {
              return j.split(",").map(function(N) {
                N = N.trim();
                var I = N.match(c), Q = I[1], z = I[2], W = I[3] || "", $ = {};
                return $.inverse = !!Q && Q.toLowerCase() === "not", $.type = z ? z.toLowerCase() : "all", W = W.match(/\([^\)]+\)/g) || [], $.expressions = W.map(function(b) {
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
              this.addListener = j, this.removeListener = N, this.dispose = Q;
              function j(z) {
                w && w.addListener(z);
              }
              function N(z) {
                w && w.removeListener(z);
              }
              function I(z) {
                v.matches = z.matches, v.media = z.media;
              }
              function Q() {
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
                      var Q = Error(
                        (w || "React class") + ": " + v + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw Q.name = "Invariant Violation", Q;
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
              function I(V) {
                var B = V && (j && V[j] || V[N]);
                if (typeof B == "function")
                  return B;
              }
              var Q = "<<anonymous>>", z = {
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
                oneOfType: re,
                shape: P,
                exact: q
              };
              function W(V, B) {
                return V === B ? V !== 0 || 1 / V === 1 / B : V !== V && B !== B;
              }
              function $(V, B) {
                this.message = V, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
              }
              $.prototype = Error.prototype;
              function b(V) {
                var B = {}, H = 0;
                function fe(le, Me, de, E, y, M, A) {
                  if (E = E || Q, M = M || de, A !== d) {
                    if (w) {
                      var Y = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw Y.name = "Invariant Violation", Y;
                    } else if (typeof console < "u") {
                      var ee = E + ":" + de;
                      !B[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
                      H < 3 && (p(
                        "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + E + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), B[ee] = !0, H++);
                    }
                  }
                  return Me[de] == null ? le ? Me[de] === null ? new $("The " + y + " `" + M + "` is marked as required " + ("in `" + E + "`, but its value is `null`.")) : new $("The " + y + " `" + M + "` is marked as required in " + ("`" + E + "`, but its value is `undefined`.")) : null : V(Me, de, E, y, M);
                }
                var te = fe.bind(null, !1);
                return te.isRequired = fe.bind(null, !0), te;
              }
              function k(V) {
                function B(H, fe, te, le, Me, de) {
                  var E = H[fe], y = O(E);
                  if (y !== V) {
                    var M = ne(E);
                    return new $(
                      "Invalid " + le + " `" + Me + "` of type " + ("`" + M + "` supplied to `" + te + "`, expected ") + ("`" + V + "`."),
                      { expectedType: V }
                    );
                  }
                  return null;
                }
                return b(B);
              }
              function U() {
                return b(m);
              }
              function x(V) {
                function B(H, fe, te, le, Me) {
                  if (typeof V != "function")
                    return new $("Property `" + Me + "` of component `" + te + "` has invalid PropType notation inside arrayOf.");
                  var de = H[fe];
                  if (!Array.isArray(de)) {
                    var E = O(de);
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected an array."));
                  }
                  for (var y = 0; y < de.length; y++) {
                    var M = V(de, y, te, le, Me + "[" + y + "]", d);
                    if (M instanceof Error)
                      return M;
                  }
                  return null;
                }
                return b(B);
              }
              function T() {
                function V(B, H, fe, te, le) {
                  var Me = B[H];
                  if (!v(Me)) {
                    var de = O(Me);
                    return new $("Invalid " + te + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return b(V);
              }
              function S() {
                function V(B, H, fe, te, le) {
                  var Me = B[H];
                  if (!l.isValidElementType(Me)) {
                    var de = O(Me);
                    return new $("Invalid " + te + " `" + le + "` of type " + ("`" + de + "` supplied to `" + fe + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return b(V);
              }
              function R(V) {
                function B(H, fe, te, le, Me) {
                  if (!(H[fe] instanceof V)) {
                    var de = V.name || Q, E = he(H[fe]);
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected ") + ("instance of `" + de + "`."));
                  }
                  return null;
                }
                return b(B);
              }
              function C(V) {
                if (!Array.isArray(V))
                  return arguments.length > 1 ? p(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : p("Invalid argument supplied to oneOf, expected an array."), m;
                function B(H, fe, te, le, Me) {
                  for (var de = H[fe], E = 0; E < V.length; E++)
                    if (W(de, V[E]))
                      return null;
                  var y = JSON.stringify(V, function(A, Y) {
                    var ee = ne(Y);
                    return ee === "symbol" ? String(Y) : Y;
                  });
                  return new $("Invalid " + le + " `" + Me + "` of value `" + String(de) + "` " + ("supplied to `" + te + "`, expected one of " + y + "."));
                }
                return b(B);
              }
              function J(V) {
                function B(H, fe, te, le, Me) {
                  if (typeof V != "function")
                    return new $("Property `" + Me + "` of component `" + te + "` has invalid PropType notation inside objectOf.");
                  var de = H[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type " + ("`" + E + "` supplied to `" + te + "`, expected an object."));
                  for (var y in de)
                    if (g(de, y)) {
                      var M = V(de, y, te, le, Me + "." + y, d);
                      if (M instanceof Error)
                        return M;
                    }
                  return null;
                }
                return b(B);
              }
              function re(V) {
                if (!Array.isArray(V))
                  return p("Invalid argument supplied to oneOfType, expected an instance of array."), m;
                for (var B = 0; B < V.length; B++) {
                  var H = V[B];
                  if (typeof H != "function")
                    return p(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(H) + " at index " + B + "."
                    ), m;
                }
                function fe(te, le, Me, de, E) {
                  for (var y = [], M = 0; M < V.length; M++) {
                    var A = V[M], Y = A(te, le, Me, de, E, d);
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
                function V(B, H, fe, te, le) {
                  return K(B[H]) ? null : new $("Invalid " + te + " `" + le + "` supplied to " + ("`" + fe + "`, expected a ReactNode."));
                }
                return b(V);
              }
              function F(V, B, H, fe, te) {
                return new $(
                  (V || "React class") + ": " + B + " type `" + H + "." + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + te + "`."
                );
              }
              function P(V) {
                function B(H, fe, te, le, Me) {
                  var de = H[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type `" + E + "` " + ("supplied to `" + te + "`, expected `object`."));
                  for (var y in V) {
                    var M = V[y];
                    if (typeof M != "function")
                      return F(te, le, Me, y, ne(M));
                    var A = M(de, y, te, le, Me + "." + y, d);
                    if (A)
                      return A;
                  }
                  return null;
                }
                return b(B);
              }
              function q(V) {
                function B(H, fe, te, le, Me) {
                  var de = H[fe], E = O(de);
                  if (E !== "object")
                    return new $("Invalid " + le + " `" + Me + "` of type `" + E + "` " + ("supplied to `" + te + "`, expected `object`."));
                  var y = f({}, H[fe], V);
                  for (var M in y) {
                    var A = V[M];
                    if (g(V, M) && typeof A != "function")
                      return F(te, le, Me, M, ne(A));
                    if (!A)
                      return new $(
                        "Invalid " + le + " `" + Me + "` key `" + M + "` supplied to `" + te + "`.\nBad object: " + JSON.stringify(H[fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(V), null, "  ")
                      );
                    var Y = A(de, M, te, le, Me + "." + M, d);
                    if (Y)
                      return Y;
                  }
                  return null;
                }
                return b(B);
              }
              function K(V) {
                switch (typeof V) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !V;
                  case "object":
                    if (Array.isArray(V))
                      return V.every(K);
                    if (V === null || v(V))
                      return !0;
                    var B = I(V);
                    if (B) {
                      var H = B.call(V), fe;
                      if (B !== V.entries) {
                        for (; !(fe = H.next()).done; )
                          if (!K(fe.value))
                            return !1;
                      } else
                        for (; !(fe = H.next()).done; ) {
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
              function X(V, B) {
                return V === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
              }
              function O(V) {
                var B = typeof V;
                return Array.isArray(V) ? "array" : V instanceof RegExp ? "object" : X(B, V) ? "symbol" : B;
              }
              function ne(V) {
                if (typeof V > "u" || V === null)
                  return "" + V;
                var B = O(V);
                if (B === "object") {
                  if (V instanceof Date)
                    return "date";
                  if (V instanceof RegExp)
                    return "regexp";
                }
                return B;
              }
              function G(V) {
                var B = ne(V);
                switch (B) {
                  case "array":
                  case "object":
                    return "an " + B;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + B;
                  default:
                    return B;
                }
              }
              function he(V) {
                return !V.constructor || !V.constructor.name ? Q : V.constructor.name;
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
              var c = typeof Symbol == "function" && Symbol.for, l = c ? Symbol.for("react.element") : 60103, f = c ? Symbol.for("react.portal") : 60106, d = c ? Symbol.for("react.fragment") : 60107, g = c ? Symbol.for("react.strict_mode") : 60108, h = c ? Symbol.for("react.profiler") : 60114, p = c ? Symbol.for("react.provider") : 60109, m = c ? Symbol.for("react.context") : 60110, v = c ? Symbol.for("react.async_mode") : 60111, w = c ? Symbol.for("react.concurrent_mode") : 60111, j = c ? Symbol.for("react.forward_ref") : 60112, N = c ? Symbol.for("react.suspense") : 60113, I = c ? Symbol.for("react.suspense_list") : 60120, Q = c ? Symbol.for("react.memo") : 60115, z = c ? Symbol.for("react.lazy") : 60116, W = c ? Symbol.for("react.block") : 60121, $ = c ? Symbol.for("react.fundamental") : 60117, b = c ? Symbol.for("react.responder") : 60118, k = c ? Symbol.for("react.scope") : 60119;
              function U(A) {
                return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                A === d || A === w || A === h || A === g || A === N || A === I || typeof A == "object" && A !== null && (A.$$typeof === z || A.$$typeof === Q || A.$$typeof === p || A.$$typeof === m || A.$$typeof === j || A.$$typeof === $ || A.$$typeof === b || A.$$typeof === k || A.$$typeof === W);
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
                            case Q:
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
              var T = v, S = w, R = m, C = p, J = l, re = j, L = d, F = z, P = Q, q = f, K = h, X = g, O = N, ne = !1;
              function G(A) {
                return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), he(A) || x(A) === v;
              }
              function he(A) {
                return x(A) === w;
              }
              function V(A) {
                return x(A) === m;
              }
              function B(A) {
                return x(A) === p;
              }
              function H(A) {
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
                return x(A) === Q;
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
              u.AsyncMode = T, u.ConcurrentMode = S, u.ContextConsumer = R, u.ContextProvider = C, u.Element = J, u.ForwardRef = re, u.Fragment = L, u.Lazy = F, u.Memo = P, u.Portal = q, u.Profiler = K, u.StrictMode = X, u.Suspense = O, u.isAsyncMode = G, u.isConcurrentMode = he, u.isContextConsumer = V, u.isContextProvider = B, u.isElement = H, u.isForwardRef = fe, u.isFragment = te, u.isLazy = le, u.isMemo = Me, u.isPortal = de, u.isProfiler = E, u.isStrictMode = y, u.isSuspense = M, u.isValidElementType = U, u.typeOf = x;
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
                for (var I, Q = 1, z = arguments.length; Q < z; Q++) {
                  I = arguments[Q];
                  for (var W in I)
                    Object.prototype.hasOwnProperty.call(I, W) && (N[W] = I[W]);
                }
                return N;
              }, l.apply(this, arguments);
            }, f = this && this.__rest || function(N, I) {
              var Q = {};
              for (var z in N)
                Object.prototype.hasOwnProperty.call(N, z) && I.indexOf(z) < 0 && (Q[z] = N[z]);
              if (N != null && typeof Object.getOwnPropertySymbols == "function")
                for (var W = 0, z = Object.getOwnPropertySymbols(N); W < z.length; W++)
                  I.indexOf(z[W]) < 0 && Object.prototype.propertyIsEnumerable.call(N, z[W]) && (Q[z[W]] = N[z[W]]);
              return Q;
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
            }, Q = function($, b) {
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
              var T = Q(x, U), S = z(T), R = j();
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
})(Av);
const Ua = /* @__PURE__ */ ph(Ra), Ev = {
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
}, Iv = {
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
}, Nv = {
  sun: "#FFC000",
  moon: "#F7E7CE"
}, Tv = {
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
  light: Ev,
  dark: Iv,
  icon: Nv,
  quarter: Tv
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
var _o = {}, jv = {
  get exports() {
    return _o;
  },
  set exports(e) {
    _o = e;
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
var ul;
function Sv() {
  if (ul)
    return $e;
  ul = 1;
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
  var j = o, N = e, I = a, Q = n, z = f, W = l, $ = t, b = i, k = r, U = u;
  return $e.ContextConsumer = s, $e.ContextProvider = j, $e.Element = N, $e.ForwardRef = I, $e.Fragment = Q, $e.Lazy = z, $e.Memo = W, $e.Portal = $, $e.Profiler = b, $e.StrictMode = k, $e.Suspense = U, $e.isAsyncMode = function() {
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
var cl;
function bv() {
  return cl || (cl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, n = 60107, r = 60108, i = 60114, o = 60109, s = 60110, a = 60112, u = 60113, c = 60120, l = 60115, f = 60116, d = 60121, g = 60122, h = 60117, p = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var v = Symbol.for;
      e = v("react.element"), t = v("react.portal"), n = v("react.fragment"), r = v("react.strict_mode"), i = v("react.profiler"), o = v("react.provider"), s = v("react.context"), a = v("react.forward_ref"), u = v("react.suspense"), c = v("react.suspense_list"), l = v("react.memo"), f = v("react.lazy"), d = v("react.block"), g = v("react.server.block"), h = v("react.fundamental"), v("react.scope"), v("react.opaque.id"), p = v("react.debug_trace_mode"), v("react.offscreen"), m = v("react.legacy_hidden");
    }
    var w = !1;
    function j(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === n || B === i || B === p || B === r || B === u || B === c || B === m || w || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === l || B.$$typeof === o || B.$$typeof === s || B.$$typeof === a || B.$$typeof === h || B.$$typeof === d || B[0] === g));
    }
    function N(B) {
      if (typeof B == "object" && B !== null) {
        var H = B.$$typeof;
        switch (H) {
          case e:
            var fe = B.type;
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
                    return H;
                }
            }
          case t:
            return H;
        }
      }
    }
    var I = s, Q = o, z = e, W = a, $ = n, b = f, k = l, U = t, x = i, T = r, S = u, R = !1, C = !1;
    function J(B) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(B) {
      return C || (C = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(B) {
      return N(B) === s;
    }
    function F(B) {
      return N(B) === o;
    }
    function P(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function q(B) {
      return N(B) === a;
    }
    function K(B) {
      return N(B) === n;
    }
    function X(B) {
      return N(B) === f;
    }
    function O(B) {
      return N(B) === l;
    }
    function ne(B) {
      return N(B) === t;
    }
    function G(B) {
      return N(B) === i;
    }
    function he(B) {
      return N(B) === r;
    }
    function V(B) {
      return N(B) === u;
    }
    We.ContextConsumer = I, We.ContextProvider = Q, We.Element = z, We.ForwardRef = W, We.Fragment = $, We.Lazy = b, We.Memo = k, We.Portal = U, We.Profiler = x, We.StrictMode = T, We.Suspense = S, We.isAsyncMode = J, We.isConcurrentMode = re, We.isContextConsumer = L, We.isContextProvider = F, We.isElement = P, We.isForwardRef = q, We.isFragment = K, We.isLazy = X, We.isMemo = O, We.isPortal = ne, We.isProfiler = G, We.isStrictMode = he, We.isSuspense = V, We.isValidElementType = j, We.typeOf = N;
  }()), We;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Sv() : e.exports = bv();
})(jv);
function Uh(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Uh(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function at() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Uh(e)) && (r && (r += " "), r += t);
  return r;
}
function Fh(e) {
  return typeof e == "string";
}
function Bi(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Dr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Yh(e) {
  if (!Dr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Yh(e[n]);
  }), t;
}
function an(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? pe({}, e) : e;
  return Dr(e) && Dr(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (Dr(t[i]) && i in e && Dr(e[i]) ? r[i] = an(e[i], t[i], n) : n.clone ? r[i] = Dr(t[i]) ? Yh(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function Cv(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Qh(e, t, n, r, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = o.type;
  return typeof u == "function" && !Cv(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Bh = Bi(D.element, Qh);
Bh.isRequired = Bi(D.element.isRequired, Qh);
const $i = Bh;
function xv(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ov(e, t, n, r, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof o == "function" && !xv(o) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const $h = Bi(D.elementType, Ov), Lv = "exact-prop: ​";
function Wh(e) {
  return process.env.NODE_ENV === "production" ? e : pe({}, e, {
    [Lv]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function ji(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const _v = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function kv(e) {
  const t = `${e}`.match(_v);
  return t && t[1] || "";
}
function Hh(e, t = "") {
  return e.displayName || e.name || kv(e) || t;
}
function ll(e, t, n) {
  const r = Hh(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function zv(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Hh(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case rr.ForwardRef:
          return ll(e, e.render, "ForwardRef");
        case rr.Memo:
          return ll(e, e.type, "memo");
        default:
          return;
      }
  }
}
function _r(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], s = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Pv = D.oneOfType([D.func, D.object]), Vh = Pv;
function Mi(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ji(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function fl(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Rv(e, t = 166) {
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
function Bt(e) {
  return e && e.ownerDocument || document;
}
function Si(e) {
  return Bt(e).defaultView || window;
}
function Fa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Uv = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect, bi = Uv;
function Nr(e) {
  const t = oe.useRef(e);
  return bi(() => {
    t.current = e;
  }), oe.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function Tt(...e) {
  return oe.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Fa(n, t);
    });
  }, e);
}
let ns = !0, Ya = !1, dl;
const Fv = {
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
function Yv(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Fv[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Qv(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ns = !0);
}
function Hs() {
  ns = !1;
}
function Bv() {
  this.visibilityState === "hidden" && Ya && (ns = !0);
}
function $v(e) {
  e.addEventListener("keydown", Qv, !0), e.addEventListener("mousedown", Hs, !0), e.addEventListener("pointerdown", Hs, !0), e.addEventListener("touchstart", Hs, !0), e.addEventListener("visibilitychange", Bv, !0);
}
function Wv(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ns || Yv(t);
}
function Hv() {
  const e = oe.useCallback((i) => {
    i != null && $v(i.ownerDocument);
  }, []), t = oe.useRef(!1);
  function n() {
    return t.current ? (Ya = !0, window.clearTimeout(dl), dl = window.setTimeout(() => {
      Ya = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Wv(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function qh(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Vv(e) {
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
function qv(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Kv = Number.isInteger || qv;
function Kh(e, t, n, r) {
  const i = e[t];
  if (i == null || !Kv(i)) {
    const o = Vv(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${o}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Gh(e, t, ...n) {
  return e[t] === void 0 ? null : Kh(e, t, ...n);
}
function Qa() {
  return null;
}
Gh.isRequired = Kh;
Qa.isRequired = Qa;
const Jh = process.env.NODE_ENV === "production" ? Qa : Gh;
function Zh(e, t) {
  const n = pe({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = pe({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, o = t[r];
      n[r] = {}, !o || !Object.keys(o) ? n[r] = i : !i || !Object.keys(i) ? n[r] = o : (n[r] = pe({}, o), Object.keys(i).forEach((s) => {
        n[r][s] = Zh(i[s], o[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Ln(e, t, n = void 0) {
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
const hl = (e) => e, Gv = () => {
  let e = hl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hl;
    }
  };
}, Jv = Gv(), Zv = Jv, Xv = {
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
function Jt(e, t, n = "Mui") {
  const r = Xv[t];
  return r ? `${n}-${r}` : `${Zv.generate(e)}-${t}`;
}
function zt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Jt(e, i, n);
  }), r;
}
function ew(e) {
  return typeof e == "function" ? e() : e;
}
const ko = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: o = !1
  } = t, [s, a] = oe.useState(null), u = Tt(/* @__PURE__ */ oe.isValidElement(r) ? r.ref : null, n);
  return bi(() => {
    o || a(ew(i) || document.body);
  }, [i, o]), bi(() => {
    if (s && !o)
      return Fa(n, s), () => {
        Fa(n, null);
      };
  }, [n, s, o]), o ? /* @__PURE__ */ oe.isValidElement(r) ? /* @__PURE__ */ oe.cloneElement(r, {
    ref: u
  }) : r : s && /* @__PURE__ */ wM.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (ko.propTypes = {
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
  container: D.oneOfType([_r, D.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: D.bool
});
process.env.NODE_ENV !== "production" && (ko["propTypes"] = Wh(ko.propTypes));
const tw = ko;
function nw(e) {
  const t = Bt(e);
  return t.body === e ? Si(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function yi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function gl(e) {
  return parseInt(Si(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function pl(e, t, n, r = [], i) {
  const o = [t, n, ...r], s = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, (a) => {
    o.indexOf(a) === -1 && s.indexOf(a.tagName) === -1 && yi(a, i);
  });
}
function Vs(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function rw(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (nw(r)) {
      const u = qh(Bt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${gl(r) + u}px`;
      const c = Bt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${gl(l) + u}px`;
      });
    }
    const o = r.parentElement, s = Si(r), a = (o == null ? void 0 : o.nodeName) === "HTML" && s.getComputedStyle(o).overflowY === "scroll" ? o : r;
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
function iw(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ow {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && yi(t.modalRef, !1);
    const i = iw(n);
    pl(n, t.mount, t.modalRef, i, !0);
    const o = Vs(this.containers, (s) => s.container === n);
    return o !== -1 ? (this.containers[o].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Vs(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = rw(i, n));
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const r = Vs(this.containers, (o) => o.modals.indexOf(t) !== -1), i = this.containers[r];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && yi(t.modalRef, !0), pl(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const o = i.modals[i.modals.length - 1];
      o.modalRef && yi(o.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const sw = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function aw(e) {
  const t = parseInt(e.getAttribute("tabindex"), 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function uw(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function cw(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || uw(e));
}
function lw(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(sw)).forEach((r, i) => {
    const o = aw(r);
    o === -1 || !cw(r) || (o === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: o,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function fw() {
  return !0;
}
function zo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = lw,
    isEnabled: s = fw,
    open: a
  } = e, u = oe.useRef(), c = oe.useRef(null), l = oe.useRef(null), f = oe.useRef(null), d = oe.useRef(null), g = oe.useRef(!1), h = oe.useRef(null), p = Tt(t.ref, h), m = oe.useRef(null);
  oe.useEffect(() => {
    !a || !h.current || (g.current = !n);
  }, [n, a]), oe.useEffect(() => {
    if (!a || !h.current)
      return;
    const j = Bt(h.current);
    return h.current.contains(j.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", -1)), g.current && h.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), oe.useEffect(() => {
    if (!a || !h.current)
      return;
    const j = Bt(h.current), N = (z) => {
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
    const Q = setInterval(() => {
      j.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(Q), j.removeEventListener("focusin", N), j.removeEventListener("keydown", I, !0);
    };
  }, [n, r, i, s, a, o]);
  const v = (j) => {
    f.current === null && (f.current = j.relatedTarget), g.current = !0, d.current = j.target;
    const N = t.props.onFocus;
    N && N(j);
  }, w = (j) => {
    f.current === null && (f.current = j.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ge.jsxs(oe.Fragment, {
    children: [/* @__PURE__ */ ge.jsx("div", {
      tabIndex: 0,
      onFocus: w,
      ref: c,
      "data-test": "sentinelStart"
    }), /* @__PURE__ */ oe.cloneElement(t, {
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
process.env.NODE_ENV !== "production" && (zo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: $i,
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
process.env.NODE_ENV !== "production" && (zo["propTypes"] = Wh(zo.propTypes));
function dw(e) {
  return Jt("MuiModal", e);
}
zt("MuiModal", ["root", "hidden"]);
const hw = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"], gw = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ln({
    root: ["root", !t && n && "hidden"]
  }, dw, r);
};
function pw(e) {
  return typeof e == "function" ? e() : e;
}
function Mw(e) {
  return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
const yw = new ow(), Xh = /* @__PURE__ */ oe.forwardRef(function(t, n) {
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
    manager: I = yw,
    onBackdropClick: Q,
    onClose: z,
    onKeyDown: W,
    open: $,
    /* eslint-disable react/prop-types */
    theme: b,
    onTransitionEnter: k,
    onTransitionExited: U
  } = t, x = Je(t, hw), [T, S] = oe.useState(!0), R = oe.useRef({}), C = oe.useRef(null), J = oe.useRef(null), re = Tt(J, n), L = Mw(t), F = () => Bt(C.current), P = () => (R.current.modalRef = J.current, R.current.mountNode = C.current, R.current), q = () => {
    I.mount(P(), {
      disableScrollLock: w
    }), J.current.scrollTop = 0;
  }, K = Nr(() => {
    const de = pw(d) || F().body;
    I.add(P(), de), J.current && q();
  }), X = oe.useCallback(() => I.isTopModal(P()), [I]), O = Nr((de) => {
    C.current = de, de && ($ && X() ? q() : yi(J.current, !0));
  }), ne = oe.useCallback(() => {
    I.remove(P());
  }, [I]);
  oe.useEffect(() => () => {
    ne();
  }, [ne]), oe.useEffect(() => {
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
  }), he = gw(G);
  if (!N && !$ && (!L || T))
    return null;
  const V = () => {
    S(!1), k && k();
  }, B = () => {
    S(!0), U && U(), u && ne();
  }, H = (de) => {
    de.target === de.currentTarget && (Q && Q(de), z && z(de, "backdropClick"));
  }, fe = (de) => {
    W && W(de), !(de.key !== "Escape" || !X()) && (p || (de.stopPropagation(), z && z(de, "escapeKeyDown")));
  }, te = {};
  o.props.tabIndex === void 0 && (te.tabIndex = "-1"), L && (te.onEnter = fl(V, o.props.onEnter), te.onExited = fl(B, o.props.onExited));
  const le = l.Root || c, Me = f.root || {};
  return /* @__PURE__ */ ge.jsx(tw, {
    ref: O,
    container: d,
    disablePortal: m,
    children: /* @__PURE__ */ ge.jsxs(le, pe({
      role: "presentation"
    }, Me, !Fh(le) && {
      as: c,
      ownerState: pe({}, G, Me.ownerState),
      theme: b
    }, x, {
      ref: re,
      onKeyDown: fe,
      className: at(he.root, Me.className, a),
      children: [!j && r ? /* @__PURE__ */ ge.jsx(r, pe({
        "aria-hidden": !0,
        open: $,
        onClick: H
      }, i)) : null, /* @__PURE__ */ ge.jsx(zo, {
        disableEnforceFocus: h,
        disableAutoFocus: g,
        disableRestoreFocus: v,
        isEnabled: X,
        open: $,
        children: /* @__PURE__ */ oe.cloneElement(o, te)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Xh.propTypes = {
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
  children: $i.isRequired,
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
  container: D.oneOfType([_r, D.func]),
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
const mw = Xh;
function vw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ww(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Dw = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ww(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var s = vw(i);
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
}(), dt = "-ms-", Po = "-moz-", _e = "-webkit-", Fu = "comm", Yu = "rule", Qu = "decl", Aw = "@import", eg = "@keyframes", Ew = Math.abs, rs = String.fromCharCode, Iw = Object.assign;
function Nw(e, t) {
  return lt(e, 0) ^ 45 ? (((t << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function tg(e) {
  return e.trim();
}
function Tw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Ba(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ci(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function Bu(e) {
  return e.length;
}
function ro(e, t) {
  return t.push(e), e;
}
function jw(e, t) {
  return e.map(t).join("");
}
var is = 1, kr = 1, ng = 0, Dt = 0, ot = 0, Br = "";
function os(e, t, n, r, i, o, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: is, column: kr, length: s, return: "" };
}
function Jr(e, t) {
  return Iw(os("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Sw() {
  return ot;
}
function bw() {
  return ot = Dt > 0 ? lt(Br, --Dt) : 0, kr--, ot === 10 && (kr = 1, is--), ot;
}
function jt() {
  return ot = Dt < ng ? lt(Br, Dt++) : 0, kr++, ot === 10 && (kr = 1, is++), ot;
}
function Gt() {
  return lt(Br, Dt);
}
function vo() {
  return Dt;
}
function Wi(e, t) {
  return Ci(Br, e, t);
}
function xi(e) {
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
function rg(e) {
  return is = kr = 1, ng = Vt(Br = e), Dt = 0, [];
}
function ig(e) {
  return Br = "", e;
}
function wo(e) {
  return tg(Wi(Dt - 1, $a(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cw(e) {
  for (; (ot = Gt()) && ot < 33; )
    jt();
  return xi(e) > 2 || xi(ot) > 3 ? "" : " ";
}
function xw(e, t) {
  for (; --t && jt() && !(ot < 48 || ot > 102 || ot > 57 && ot < 65 || ot > 70 && ot < 97); )
    ;
  return Wi(e, vo() + (t < 6 && Gt() == 32 && jt() == 32));
}
function $a(e) {
  for (; jt(); )
    switch (ot) {
      case e:
        return Dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $a(ot);
        break;
      case 40:
        e === 41 && $a(e);
        break;
      case 92:
        jt();
        break;
    }
  return Dt;
}
function Ow(e, t) {
  for (; jt() && e + ot !== 47 + 10; )
    if (e + ot === 42 + 42 && Gt() === 47)
      break;
  return "/*" + Wi(t, Dt - 1) + "*" + rs(e === 47 ? e : jt());
}
function Lw(e) {
  for (; !xi(Gt()); )
    jt();
  return Wi(e, Dt);
}
function _w(e) {
  return ig(Do("", null, null, null, [""], e = rg(e), 0, [0], e));
}
function Do(e, t, n, r, i, o, s, a, u) {
  for (var c = 0, l = 0, f = s, d = 0, g = 0, h = 0, p = 1, m = 1, v = 1, w = 0, j = "", N = i, I = o, Q = r, z = j; m; )
    switch (h = w, w = jt()) {
      case 40:
        if (h != 108 && lt(z, f - 1) == 58) {
          Ba(z += ze(wo(w), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        z += wo(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += Cw(h);
        break;
      case 92:
        z += xw(vo() - 1, 7);
        continue;
      case 47:
        switch (Gt()) {
          case 42:
          case 47:
            ro(kw(Ow(jt(), vo()), t, n), u);
            break;
          default:
            z += "/";
        }
        break;
      case 123 * p:
        a[c++] = Vt(z) * v;
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            v == -1 && (z = ze(z, /\f/g, "")), g > 0 && Vt(z) - f && ro(g > 32 ? yl(z + ";", r, n, f - 1) : yl(ze(z, " ", "") + ";", r, n, f - 2), u);
            break;
          case 59:
            z += ";";
          default:
            if (ro(Q = Ml(z, t, n, c, l, i, a, j, N = [], I = [], f), o), w === 123)
              if (l === 0)
                Do(z, t, Q, Q, N, o, f, a, I);
              else
                switch (d === 99 && lt(z, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Do(e, Q, Q, r && ro(Ml(e, Q, Q, 0, 0, i, a, j, i, N = [], f), I), i, I, f, a, r ? N : I);
                    break;
                  default:
                    Do(z, Q, Q, Q, [""], I, 0, a, I);
                }
        }
        c = l = g = 0, p = v = 1, j = z = "", f = s;
        break;
      case 58:
        f = 1 + Vt(z), g = h;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && bw() == 125)
            continue;
        }
        switch (z += rs(w), w * p) {
          case 38:
            v = l > 0 ? 1 : (z += "\f", -1);
            break;
          case 44:
            a[c++] = (Vt(z) - 1) * v, v = 1;
            break;
          case 64:
            Gt() === 45 && (z += wo(jt())), d = Gt(), l = f = Vt(j = z += Lw(vo())), w++;
            break;
          case 45:
            h === 45 && Vt(z) == 2 && (p = 0);
        }
    }
  return o;
}
function Ml(e, t, n, r, i, o, s, a, u, c, l) {
  for (var f = i - 1, d = i === 0 ? o : [""], g = Bu(d), h = 0, p = 0, m = 0; h < r; ++h)
    for (var v = 0, w = Ci(e, f + 1, f = Ew(p = s[h])), j = e; v < g; ++v)
      (j = tg(p > 0 ? d[v] + " " + w : ze(w, /&\f/g, d[v]))) && (u[m++] = j);
  return os(e, t, n, i === 0 ? Yu : a, u, c, l);
}
function kw(e, t, n) {
  return os(e, t, n, Fu, rs(Sw()), Ci(e, 2, -2), 0);
}
function yl(e, t, n, r) {
  return os(e, t, n, Qu, Ci(e, 0, r), Ci(e, r + 1, -1), r);
}
function Sr(e, t) {
  for (var n = "", r = Bu(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function zw(e, t, n, r) {
  switch (e.type) {
    case Aw:
    case Qu:
      return e.return = e.return || e.value;
    case Fu:
      return "";
    case eg:
      return e.return = e.value + "{" + Sr(e.children, r) + "}";
    case Yu:
      e.value = e.props.join(",");
  }
  return Vt(n = Sr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Pw(e) {
  var t = Bu(e);
  return function(n, r, i, o) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Rw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Uw = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = Gt(), i === 38 && o === 12 && (n[r] = 1), !xi(o); )
    jt();
  return Wi(t, Dt);
}, Fw = function(t, n) {
  var r = -1, i = 44;
  do
    switch (xi(i)) {
      case 0:
        i === 38 && Gt() === 12 && (n[r] = 1), t[r] += Uw(Dt - 1, n, r);
        break;
      case 2:
        t[r] += wo(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Gt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += rs(i);
    }
  while (i = jt());
  return t;
}, Yw = function(t, n) {
  return ig(Fw(rg(t), n));
}, ml = /* @__PURE__ */ new WeakMap(), Qw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ml.get(r)) && !i) {
      ml.set(t, !0);
      for (var o = [], s = Yw(n, o), a = r.props, u = 0, c = 0; u < s.length; u++)
        for (var l = 0; l < a.length; l++, c++)
          t.props[c] = o[u] ? s[u].replace(/&\f/g, a[l]) : a[l] + " " + s[u];
    }
  }
}, Bw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, $w = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ww = function(t) {
  return t.type === "comm" && t.children.indexOf($w) > -1;
}, Hw = function(t) {
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
            if (Ww(c))
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
}, og = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Vw = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!og(n[r]))
      return !0;
  return !1;
}, vl = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, qw = function(t, n, r) {
  og(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), vl(t)) : Vw(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), vl(t)));
};
function sg(e, t) {
  switch (Nw(e, t)) {
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
      return _e + e + Po + e + dt + e + e;
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
      if (Vt(e) - 1 - t > 6)
        switch (lt(e, t + 1)) {
          case 109:
            if (lt(e, t + 4) !== 45)
              break;
          case 102:
            return ze(e, /(.+:)(.+)-([^]+)/, "$1" + _e + "$2-$3$1" + Po + (lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ba(e, "stretch") ? sg(ze(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (lt(e, Vt(e) - 3 - (~Ba(e, "!important") && 10))) {
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
var Kw = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Qu:
        t.return = sg(t.value, t.length);
        break;
      case eg:
        return Sr([Jr(t, {
          value: ze(t.value, "@", "@" + _e)
        })], i);
      case Yu:
        if (t.length)
          return jw(t.props, function(o) {
            switch (Tw(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Sr([Jr(t, {
                  props: [ze(o, /:(read-\w+)/, ":" + Po + "$1")]
                })], i);
              case "::placeholder":
                return Sr([Jr(t, {
                  props: [ze(o, /:(plac\w+)/, ":" + _e + "input-$1")]
                }), Jr(t, {
                  props: [ze(o, /:(plac\w+)/, ":" + Po + "$1")]
                }), Jr(t, {
                  props: [ze(o, /:(plac\w+)/, dt + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Gw = [Kw], Jw = function(t) {
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
  var i = t.stylisPlugins || Gw;
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
  var u, c = [Qw, Bw];
  process.env.NODE_ENV !== "production" && c.push(Hw({
    get compat() {
      return h.compat;
    }
  }), qw);
  {
    var l, f = [zw, process.env.NODE_ENV !== "production" ? function(p) {
      p.root || (p.return ? l.insert(p.return) : p.value && p.type !== Fu && l.insert(p.value + "{}"));
    } : Rw(function(p) {
      l.insert(p);
    })], d = Pw(c.concat(i, f)), g = function(m) {
      return Sr(_w(m), d);
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
    sheet: new Dw({
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
}, Zw = !0;
function $u(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var ss = function(t, n, r) {
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
  Zw === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, as = function(t, n, r) {
  ss(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Xw(e) {
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
var e0 = {
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
}, wl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, t0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", n0 = /[A-Z]|^ms/g, ag = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Wu = function(t) {
  return t.charCodeAt(1) === 45;
}, Dl = function(t) {
  return t != null && typeof t != "boolean";
}, qs = /* @__PURE__ */ Mh(function(e) {
  return Wu(e) ? e : e.replace(n0, "-$&").toLowerCase();
}), Ro = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ag, function(r, i, o) {
          return Yt = {
            name: i,
            styles: o,
            next: Yt
          }, i;
        });
  }
  return e0[t] !== 1 && !Wu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var r0 = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i0 = ["normal", "none", "initial", "inherit", "unset"], o0 = Ro, s0 = /^-ms-/, a0 = /-(.)/g, Al = {};
  Ro = function(t, n) {
    if (t === "content" && (typeof n != "string" || i0.indexOf(n) === -1 && !r0.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = o0(t, n);
    return r !== "" && !Wu(t) && t.indexOf("-") !== -1 && Al[t] === void 0 && (Al[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(s0, "ms-").replace(a0, function(i, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var ug = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Oi(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ug);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Yt = {
          name: n.name,
          styles: n.styles,
          next: Yt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Yt = {
              name: r.name,
              styles: r.styles,
              next: Yt
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return u0(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = Yt, s = n(e);
        return Yt = o, Oi(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = n.replace(ag, function(l, f, d) {
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
function u0(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Oi(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? r += o + "{" + t[s] + "}" : Dl(s) && (r += qs(o) + ":" + Ro(o, s) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ug);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Dl(s[a]) && (r += qs(o) + ":" + Ro(o, s[a]) + ";");
        else {
          var u = Oi(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += qs(o) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(t0), r += o + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var El = /label:\s*([^\s;\n{]+)\s*(;|$)/g, cg;
process.env.NODE_ENV !== "production" && (cg = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Yt, zr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, o = "";
  Yt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (i = !1, o += Oi(r, n, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(wl), o += s[0]);
  for (var a = 1; a < t.length; a++)
    o += Oi(r, n, t[a]), i && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(wl), o += s[a]);
  var u;
  process.env.NODE_ENV !== "production" && (o = o.replace(cg, function(d) {
    return u = d, "";
  })), El.lastIndex = 0;
  for (var c = "", l; (l = El.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var f = Xw(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: o,
    map: u,
    next: Yt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: o,
    next: Yt
  };
}, c0 = {}.hasOwnProperty, Hu = /* @__PURE__ */ gn(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Jw({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Hu.displayName = "EmotionCacheContext");
Hu.Provider;
var us = function(t) {
  return /* @__PURE__ */ Xo(function(n, r) {
    var i = gt(Hu);
    return t(n, i, r);
  });
}, $r = /* @__PURE__ */ gn({});
process.env.NODE_ENV !== "production" && ($r.displayName = "EmotionThemeContext");
var l0 = oe["useInsertionEffect"] ? oe["useInsertionEffect"] : function(t) {
  t();
};
function lg(e) {
  l0(e);
}
var Il = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Nl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", f0 = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ss(n, r, i), lg(function() {
    return as(n, r, i);
  }), null;
}, d0 = /* @__PURE__ */ us(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Il], o = [r], s = "";
  typeof e.className == "string" ? s = $u(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var a = zr(o, void 0, gt($r));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[Nl];
    u && (a = zr([a, "label:" + u + ";"]));
  }
  s += t.key + "-" + a.name;
  var c = {};
  for (var l in e)
    c0.call(e, l) && l !== "css" && l !== Il && (process.env.NODE_ENV === "production" || l !== Nl) && (c[l] = e[l]);
  return c.ref = n, c.className = s, /* @__PURE__ */ wt(Tn, null, /* @__PURE__ */ wt(f0, {
    cache: t,
    serialized: a,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ wt(i, c));
});
process.env.NODE_ENV !== "production" && (d0.displayName = "EmotionCssPropInternal");
var h0 = {
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
}, Tl = oe["useInsertionEffect"] ? oe["useInsertionEffect"] : gh, jl = !1, g0 = /* @__PURE__ */ us(function(e, t) {
  process.env.NODE_ENV !== "production" && !jl && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), jl = !0);
  var n = e.styles, r = zr([n], void 0, gt($r)), i = tt();
  return Tl(function() {
    var o = t.key + "-global", s = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", o), s.hydrate([u])), i.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Tl(function() {
    var o = i.current, s = o[0], a = o[1];
    if (a) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && as(t, r.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (g0.displayName = "EmotionGlobal");
function p0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return zr(t);
}
var Vu = function() {
  var t = p0.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, M0 = function e(t) {
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
function y0(e, t, n) {
  var r = [], i = $u(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var m0 = function(t) {
  var n = t.cache, r = t.serializedArr;
  return lg(function() {
    for (var i = 0; i < r.length; i++)
      as(n, r[i], !1);
  }), null;
}, v0 = /* @__PURE__ */ us(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    var d = zr(l, t.registered);
    return r.push(d), ss(t, d, !1), t.key + "-" + d.name;
  }, o = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
      l[f] = arguments[f];
    return y0(t.registered, i, M0(l));
  }, s = {
    css: i,
    cx: o,
    theme: gt($r)
  }, a = e.children(s);
  return n = !0, /* @__PURE__ */ wt(Tn, null, /* @__PURE__ */ wt(m0, {
    cache: t,
    serializedArr: r
  }), a);
});
process.env.NODE_ENV !== "production" && (v0.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Sl = !0, w0 = typeof jest < "u";
  if (Sl && !w0) {
    var bl = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Sl ? window : global
    ), Cl = "__EMOTION_REACT_" + h0.version.split(".")[0] + "__";
    bl[Cl] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bl[Cl] = !0;
  }
}
var D0 = Sa, A0 = function(t) {
  return t !== "theme";
}, xl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? D0 : A0;
}, Ol = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(s) {
      return t.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, E0 = oe["useInsertionEffect"] ? oe["useInsertionEffect"] : function(t) {
  t();
};
function I0(e) {
  E0(e);
}
var Ll = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, N0 = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ss(n, r, i), I0(function() {
    return as(n, r, i);
  }), null;
}, T0 = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, s;
  n !== void 0 && (o = n.label, s = n.target);
  var a = Ol(t, n, r), u = a || xl(i), c = !u("as");
  return function() {
    var l = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Ll), f.push(l[0][0]);
      for (var d = l.length, g = 1; g < d; g++)
        process.env.NODE_ENV !== "production" && l[0][g] === void 0 && console.error(Ll), f.push(l[g], l[0][g]);
    }
    var h = us(function(p, m, v) {
      var w = c && p.as || i, j = "", N = [], I = p;
      if (p.theme == null) {
        I = {};
        for (var Q in p)
          I[Q] = p[Q];
        I.theme = gt($r);
      }
      typeof p.className == "string" ? j = $u(m.registered, N, p.className) : p.className != null && (j = p.className + " ");
      var z = zr(f.concat(N), m.registered, I);
      j += m.key + "-" + z.name, s !== void 0 && (j += " " + s);
      var W = c && a === void 0 ? xl(w) : u, $ = {};
      for (var b in p)
        c && b === "as" || // $FlowFixMe
        W(b) && ($[b] = p[b]);
      return $.className = j, $.ref = v, /* @__PURE__ */ wt(Tn, null, /* @__PURE__ */ wt(N0, {
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
        shouldForwardProp: Ol(h, m, !0)
      })).apply(void 0, f);
    }, h;
  };
};
const j0 = T0;
var S0 = [
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
], Wa = j0.bind();
S0.forEach(function(e) {
  Wa[e] = Wa(e);
});
const b0 = Wa;
/**
 * @mui/styled-engine v5.12.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function C0(e, t) {
  const n = b0(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const x0 = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, O0 = ["values", "unit", "step"], L0 = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => pe({}, n, {
    [r.key]: r.val
  }), {});
};
function _0(e) {
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
  } = e, i = Je(e, O0), o = L0(t), s = Object.keys(o);
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
const k0 = {
  borderRadius: 4
}, z0 = k0, P0 = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.string, D.object, D.array]) : {}, _n = P0;
function mi(e, t) {
  return t ? an(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qu = {
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
}, _l = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qu[e]}px)`
};
function dn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || _l;
    return t.reduce((s, a, u) => (s[o.up(o.keys[u])] = n(t[u]), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || _l;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || qu).indexOf(a) !== -1) {
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
function R0(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function U0(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function cs(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Uo(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = cs(e, n) || r, t && (i = t(i, r, e)), i;
}
function Qe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, c = cs(u, r) || {};
    return dn(s, a, (f) => {
      let d = Uo(c, i, f);
      return f === d && typeof f == "string" && (d = Uo(c, i, `${t}${f === "default" ? "" : Mi(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: _n
  } : {}, o.filterProps = [t], o;
}
function F0(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Y0 = {
  m: "margin",
  p: "padding"
}, Q0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, B0 = F0((e) => {
  if (e.length > 2)
    if (kl[e])
      e = kl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Y0[t], i = Q0[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), ls = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], fs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], $0 = [...ls, ...fs];
function Hi(e, t, n, r) {
  var i;
  const o = (i = cs(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), o * s) : Array.isArray(o) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[s]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function fg(e) {
  return Hi(e, "spacing", 8, "spacing");
}
function Vi(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function W0(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Vi(t, n), r), {});
}
function H0(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = B0(n), o = W0(i, r), s = e[n];
  return dn(e, s, o);
}
function dg(e, t) {
  const n = fg(e.theme);
  return Object.keys(e).map((r) => H0(e, t, r, n)).reduce(mi, {});
}
function Xe(e) {
  return dg(e, ls);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? ls.reduce((e, t) => (e[t] = _n, e), {}) : {};
Xe.filterProps = ls;
function et(e) {
  return dg(e, fs);
}
et.propTypes = process.env.NODE_ENV !== "production" ? fs.reduce((e, t) => (e[t] = _n, e), {}) : {};
et.filterProps = fs;
process.env.NODE_ENV !== "production" && $0.reduce((e, t) => (e[t] = _n, e), {});
function V0(e = 8) {
  if (e.mui)
    return e;
  const t = fg({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const s = t(o);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function ds(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? mi(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function qt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const q0 = Qe({
  prop: "border",
  themeKey: "borders",
  transform: qt
}), K0 = Qe({
  prop: "borderTop",
  themeKey: "borders",
  transform: qt
}), G0 = Qe({
  prop: "borderRight",
  themeKey: "borders",
  transform: qt
}), J0 = Qe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: qt
}), Z0 = Qe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: qt
}), X0 = Qe({
  prop: "borderColor",
  themeKey: "palette"
}), eD = Qe({
  prop: "borderTopColor",
  themeKey: "palette"
}), tD = Qe({
  prop: "borderRightColor",
  themeKey: "palette"
}), nD = Qe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), rD = Qe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), hs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hi(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Vi(t, r)
    });
    return dn(e, e.borderRadius, n);
  }
  return null;
};
hs.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: _n
} : {};
hs.filterProps = ["borderRadius"];
ds(q0, K0, G0, J0, Z0, X0, eD, tD, nD, rD, hs);
const gs = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hi(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Vi(t, r)
    });
    return dn(e, e.gap, n);
  }
  return null;
};
gs.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: _n
} : {};
gs.filterProps = ["gap"];
const ps = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hi(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Vi(t, r)
    });
    return dn(e, e.columnGap, n);
  }
  return null;
};
ps.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: _n
} : {};
ps.filterProps = ["columnGap"];
const Ms = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hi(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Vi(t, r)
    });
    return dn(e, e.rowGap, n);
  }
  return null;
};
Ms.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: _n
} : {};
Ms.filterProps = ["rowGap"];
const iD = Qe({
  prop: "gridColumn"
}), oD = Qe({
  prop: "gridRow"
}), sD = Qe({
  prop: "gridAutoFlow"
}), aD = Qe({
  prop: "gridAutoColumns"
}), uD = Qe({
  prop: "gridAutoRows"
}), cD = Qe({
  prop: "gridTemplateColumns"
}), lD = Qe({
  prop: "gridTemplateRows"
}), fD = Qe({
  prop: "gridTemplateAreas"
}), dD = Qe({
  prop: "gridArea"
});
ds(gs, ps, Ms, iD, oD, sD, aD, uD, cD, lD, fD, dD);
function br(e, t) {
  return t === "grey" ? t : e;
}
const hD = Qe({
  prop: "color",
  themeKey: "palette",
  transform: br
}), gD = Qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: br
}), pD = Qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: br
});
ds(hD, gD, pD);
function It(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const MD = Qe({
  prop: "width",
  transform: It
}), Ku = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i, o;
      return {
        maxWidth: ((r = e.theme) == null || (i = r.breakpoints) == null || (o = i.values) == null ? void 0 : o[n]) || qu[n] || It(n)
      };
    };
    return dn(e, e.maxWidth, t);
  }
  return null;
};
Ku.filterProps = ["maxWidth"];
const yD = Qe({
  prop: "minWidth",
  transform: It
}), mD = Qe({
  prop: "height",
  transform: It
}), vD = Qe({
  prop: "maxHeight",
  transform: It
}), wD = Qe({
  prop: "minHeight",
  transform: It
});
Qe({
  prop: "size",
  cssProperty: "width",
  transform: It
});
Qe({
  prop: "size",
  cssProperty: "height",
  transform: It
});
const DD = Qe({
  prop: "boxSizing"
});
ds(MD, Ku, yD, mD, vD, wD, DD);
const AD = {
  // borders
  border: {
    themeKey: "borders",
    transform: qt
  },
  borderTop: {
    themeKey: "borders",
    transform: qt
  },
  borderRight: {
    themeKey: "borders",
    transform: qt
  },
  borderBottom: {
    themeKey: "borders",
    transform: qt
  },
  borderLeft: {
    themeKey: "borders",
    transform: qt
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
    style: hs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: br
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: br
  },
  backgroundColor: {
    themeKey: "palette",
    transform: br
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
    style: gs
  },
  rowGap: {
    style: Ms
  },
  columnGap: {
    style: ps
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
    style: Ku
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
}, hg = AD;
function ED(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ID(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ND() {
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
    const d = cs(i, c) || {};
    return f ? f(s) : dn(s, r, (h) => {
      let p = Uo(d, l, h);
      return h === p && typeof h == "string" && (p = Uo(d, l, `${n}${h === "default" ? "" : Mi(h)}`, h)), u === !1 ? p : {
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
    const s = (r = o.unstable_sxConfig) != null ? r : hg;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const l = R0(o.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((g) => {
        const h = ID(c[g], o);
        if (h != null)
          if (typeof h == "object")
            if (s[g])
              d = mi(d, e(g, h, o, s));
            else {
              const p = dn({
                theme: o
              }, h, (m) => ({
                [g]: m
              }));
              ED(p, h) ? d[g] = t({
                sx: h,
                theme: o
              }) : d = mi(d, p);
            }
          else
            d = mi(d, e(g, h, o, s));
      }), U0(f, d);
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const gg = ND();
gg.filterProps = ["sx"];
const pg = gg, TD = ["breakpoints", "palette", "spacing", "shape"];
function Gu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, s = Je(e, TD), a = _0(n), u = V0(i);
  let c = an({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: pe({
      mode: "light"
    }, r),
    spacing: u,
    shape: pe({}, z0, o)
  }, s);
  return c = t.reduce((l, f) => an(l, f), c), c.unstable_sxConfig = pe({}, hg, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return pg({
      sx: f,
      theme: this
    });
  }, c;
}
function jD(e) {
  return Object.keys(e).length === 0;
}
function SD(e = null) {
  const t = oe.useContext($r);
  return !t || jD(t) ? e : t;
}
const bD = Gu();
function Mg(e = bD) {
  return SD(e);
}
const CD = ["variant"];
function zl(e) {
  return e.length === 0;
}
function yg(e) {
  const {
    variant: t
  } = e, n = Je(e, CD);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += zl(r) ? e[i] : Mi(e[i]) : r += `${zl(r) ? i : Mi(i)}${Mi(e[i].toString())}`;
  }), r;
}
const xD = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function OD(e) {
  return Object.keys(e).length === 0;
}
function LD(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const _D = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, kD = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((i) => {
    const o = yg(i.props);
    r[o] = i.style;
  }), r;
}, zD = (e, t, n, r) => {
  var i, o;
  const {
    ownerState: s = {}
  } = e, a = [], u = n == null || (i = n.components) == null || (o = i[r]) == null ? void 0 : o.variants;
  return u && u.forEach((c) => {
    let l = !0;
    Object.keys(c.props).forEach((f) => {
      s[f] !== c.props[f] && e[f] !== c.props[f] && (l = !1);
    }), l && a.push(t[yg(c.props)]);
  }), a;
};
function Ao(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const PD = Gu(), RD = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Zr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return OD(t) ? e : t[n] || t;
}
function UD(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = PD,
    rootShouldForwardProp: r = Ao,
    slotShouldForwardProp: i = Ao
  } = e, o = (s) => pg(pe({}, s, {
    theme: Zr(pe({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return o.__mui_systemSx = !0, (s, a = {}) => {
    x0(s, (N) => N.filter((I) => !(I != null && I.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: l,
      skipSx: f,
      overridesResolver: d
    } = a, g = Je(a, xD), h = l !== void 0 ? l : c && c !== "Root" || !1, p = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${RD(c || "Root")}`);
    let v = Ao;
    c === "Root" ? v = r : c ? v = i : LD(s) && (v = void 0);
    const w = C0(s, pe({
      shouldForwardProp: v,
      label: m
    }, g)), j = (N, ...I) => {
      const Q = I ? I.map((b) => typeof b == "function" && b.__emotion_real !== b ? (k) => b(pe({}, k, {
        theme: Zr(pe({}, k, {
          defaultTheme: n,
          themeId: t
        }))
      })) : b) : [];
      let z = N;
      u && d && Q.push((b) => {
        const k = Zr(pe({}, b, {
          defaultTheme: n,
          themeId: t
        })), U = _D(u, k);
        if (U) {
          const x = {};
          return Object.entries(U).forEach(([T, S]) => {
            x[T] = typeof S == "function" ? S(pe({}, b, {
              theme: k
            })) : S;
          }), d(b, x);
        }
        return null;
      }), u && !h && Q.push((b) => {
        const k = Zr(pe({}, b, {
          defaultTheme: n,
          themeId: t
        }));
        return zD(b, kD(u, k), k, u);
      }), p || Q.push(o);
      const W = Q.length - I.length;
      if (Array.isArray(N) && W > 0) {
        const b = new Array(W).fill("");
        z = [...N, ...b], z.raw = [...N.raw, ...b];
      } else
        typeof N == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        N.__emotion_real !== N && (z = (b) => N(pe({}, b, {
          theme: Zr(pe({}, b, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const $ = w(z, ...Q);
      if (process.env.NODE_ENV !== "production") {
        let b;
        u && (b = `${u}${c || ""}`), b === void 0 && (b = `Styled(${zv(s)})`), $.displayName = b;
      }
      return s.muiName && ($.muiName = s.muiName), $;
    };
    return w.withConfig && (j.withConfig = w.withConfig), j;
  };
}
function FD(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Zh(t.components[n].defaultProps, r);
}
function YD({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = Mg(n);
  return r && (i = i[r] || i), FD({
    theme: i,
    name: t,
    props: e
  });
}
function Ju(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function QD(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function sr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return sr(QD(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ji(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ji(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function ys(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function BD(e) {
  e = sr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), s = (c, l = (c + n / 30) % 12) => i - o * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), ys({
    type: a,
    values: u
  });
}
function Pl(e) {
  e = sr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? sr(BD(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Rl(e, t) {
  const n = Pl(e), r = Pl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Tr(e, t) {
  return e = sr(e), t = Ju(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ys(e);
}
function $D(e, t) {
  if (e = sr(e), t = Ju(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ys(e);
}
function WD(e, t) {
  if (e = sr(e), t = Ju(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ys(e);
}
function HD(e, t) {
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
const VD = {
  black: "#000",
  white: "#fff"
}, Li = VD, qD = {
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
}, KD = qD, GD = {
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
}, dr = GD, JD = {
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
}, hr = JD, ZD = {
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
}, Xr = ZD, XD = {
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
}, gr = XD, eA = {
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
}, pr = eA, tA = {
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
}, Mr = tA, nA = ["mode", "contrastThreshold", "tonalOffset"], Ul = {
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
    paper: Li.white,
    default: Li.white
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
}, Ks = {
  text: {
    primary: Li.white,
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
    active: Li.white,
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
function Fl(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = WD(e.main, i) : t === "dark" && (e.dark = $D(e.main, o)));
}
function rA(e = "light") {
  return e === "dark" ? {
    main: gr[200],
    light: gr[50],
    dark: gr[400]
  } : {
    main: gr[700],
    light: gr[400],
    dark: gr[800]
  };
}
function iA(e = "light") {
  return e === "dark" ? {
    main: dr[200],
    light: dr[50],
    dark: dr[400]
  } : {
    main: dr[500],
    light: dr[300],
    dark: dr[700]
  };
}
function oA(e = "light") {
  return e === "dark" ? {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  } : {
    main: hr[700],
    light: hr[400],
    dark: hr[800]
  };
}
function sA(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[700],
    light: pr[500],
    dark: pr[900]
  };
}
function aA(e = "light") {
  return e === "dark" ? {
    main: Mr[400],
    light: Mr[300],
    dark: Mr[700]
  } : {
    main: Mr[800],
    light: Mr[500],
    dark: Mr[900]
  };
}
function uA(e = "light") {
  return e === "dark" ? {
    main: Xr[400],
    light: Xr[300],
    dark: Xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xr[500],
    dark: Xr[900]
  };
}
function cA(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = Je(e, nA), o = e.primary || rA(t), s = e.secondary || iA(t), a = e.error || oA(t), u = e.info || sA(t), c = e.success || aA(t), l = e.warning || uA(t);
  function f(p) {
    const m = Rl(p, Ks.text.primary) >= n ? Ks.text.primary : Ul.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const v = Rl(p, m);
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
The color object needs to have a \`main\` property or a \`${v}\` property.` : ji(11, m ? ` (${m})` : "", v));
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
} });` : ji(12, m ? ` (${m})` : "", JSON.stringify(p.main)));
    return Fl(p, "light", w, r), Fl(p, "dark", j, r), p.contrastText || (p.contrastText = f(p.main)), p;
  }, g = {
    dark: Ks,
    light: Ul
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), an(pe({
    // A collection of common colors.
    common: pe({}, Li),
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
    grey: KD,
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
const lA = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function fA(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yl = {
  textTransform: "uppercase"
}, Ql = '"Roboto", "Helvetica", "Arial", sans-serif';
function dA(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Ql,
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
  } = n, d = Je(n, lA);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, h = f || ((v) => `${v / c * g}rem`), p = (v, w, j, N, I) => pe({
    fontFamily: r,
    fontWeight: v,
    fontSize: h(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j
  }, r === Ql ? {
    letterSpacing: `${fA(N / w)}em`
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
    button: p(a, 14, 1.75, 0.4, Yl),
    caption: p(s, 12, 1.66, 0.4),
    overline: p(s, 12, 2.66, 1, Yl)
  };
  return an(pe({
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
const hA = 0.2, gA = 0.14, pA = 0.12;
function Ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hA})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${gA})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pA})`].join(",");
}
const MA = ["none", Ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yA = MA, mA = ["duration", "easing", "delay"], vA = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wA = {
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
function Bl(e) {
  return `${Math.round(e)}ms`;
}
function DA(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function AA(e) {
  const t = pe({}, vA, e.easing), n = pe({}, wA, e.duration);
  return pe({
    getAutoHeightDuration: DA,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = o, c = Je(o, mA);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof s == "string" ? s : Bl(s)} ${a} ${typeof u == "string" ? u : Bl(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const EA = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, IA = EA, NA = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function TA(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: o = {}
  } = e, s = Je(e, NA), a = cA(r), u = Gu(e);
  let c = an(u, {
    mixins: HD(u.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yA.slice(),
    typography: dA(a, o),
    transitions: AA(i),
    zIndex: pe({}, IA)
  });
  if (c = an(c, s), c = t.reduce((l, f) => an(l, f), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, g) => {
      let h;
      for (h in d) {
        const p = d[h];
        if (l.indexOf(h) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Jt("", h);
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
const jA = TA(), Zu = jA, Xu = (e) => Ao(e) && e !== "classes", SA = UD({
  defaultTheme: Zu,
  rootShouldForwardProp: Xu
}), At = SA;
function pn({
  props: e,
  name: t
}) {
  return YD({
    props: e,
    name: t,
    defaultTheme: Zu
  });
}
const mg = /* @__PURE__ */ oe.createContext({});
process.env.NODE_ENV !== "production" && (mg.displayName = "ListContext");
const Ha = mg;
function bA(e) {
  return Jt("MuiList", e);
}
zt("MuiList", ["root", "padding", "dense", "subheader"]);
const CA = ["children", "className", "component", "dense", "disablePadding", "subheader"], xA = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ln({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, bA, t);
}, OA = At("ul", {
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
})), vg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: o,
    component: s = "ul",
    dense: a = !1,
    disablePadding: u = !1,
    subheader: c
  } = r, l = Je(r, CA), f = oe.useMemo(() => ({
    dense: a
  }), [a]), d = pe({}, r, {
    component: s,
    dense: a,
    disablePadding: u
  }), g = xA(d);
  return /* @__PURE__ */ ge.jsx(Ha.Provider, {
    value: f,
    children: /* @__PURE__ */ ge.jsxs(OA, pe({
      as: s,
      className: at(g.root, o),
      ref: n,
      ownerState: d
    }, l, {
      children: [c, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (vg.propTypes = {
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
const LA = vg, _A = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Gs(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function $l(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function wg(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function ei(e, t, n, r, i, o) {
  let s = !1, a = i(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const u = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !wg(a, o) || u)
      a = i(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Dg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
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
  } = t, d = Je(t, _A), g = oe.useRef(null), h = oe.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  bi(() => {
    i && g.current.focus();
  }, [i]), oe.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, N) => {
      const I = !g.current.style.width;
      if (j.clientHeight < g.current.clientHeight && I) {
        const Q = `${qh(Bt(j))}px`;
        g.current.style[N.direction === "rtl" ? "paddingLeft" : "paddingRight"] = Q, g.current.style.width = `calc(100% + ${Q})`;
      }
      return g.current;
    }
  }), []);
  const p = (j) => {
    const N = g.current, I = j.key, Q = Bt(N).activeElement;
    if (I === "ArrowDown")
      j.preventDefault(), ei(N, Q, c, u, Gs);
    else if (I === "ArrowUp")
      j.preventDefault(), ei(N, Q, c, u, $l);
    else if (I === "Home")
      j.preventDefault(), ei(N, null, c, u, Gs);
    else if (I === "End")
      j.preventDefault(), ei(N, null, c, u, $l);
    else if (I.length === 1) {
      const z = h.current, W = I.toLowerCase(), $ = performance.now();
      z.keys.length > 0 && ($ - z.lastTime > 500 ? (z.keys = [], z.repeating = !0, z.previousKeyMatched = !0) : z.repeating && W !== z.keys[0] && (z.repeating = !1)), z.lastTime = $, z.keys.push(W);
      const b = Q && !z.repeating && wg(Q, z);
      z.previousKeyMatched && (b || ei(N, Q, !1, u, Gs, z)) ? j.preventDefault() : z.previousKeyMatched = !1;
    }
    l && l(j);
  }, m = Tt(g, n);
  let v = -1;
  oe.Children.forEach(s, (j, N) => {
    /* @__PURE__ */ oe.isValidElement(j) && (process.env.NODE_ENV !== "production" && _o.isFragment(j) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), j.props.disabled || (f === "selectedMenu" && j.props.selected || v === -1) && (v = N));
  });
  const w = oe.Children.map(s, (j, N) => {
    if (N === v) {
      const I = {};
      return o && (I.autoFocus = !0), j.props.tabIndex === void 0 && f === "selectedMenu" && (I.tabIndex = 0), /* @__PURE__ */ oe.cloneElement(j, I);
    }
    return j;
  });
  return /* @__PURE__ */ ge.jsx(LA, pe({
    role: "menu",
    ref: m,
    className: a,
    onKeyDown: p,
    tabIndex: i ? 0 : -1
  }, d, {
    children: w
  }));
});
process.env.NODE_ENV !== "production" && (Dg.propTypes = {
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
const kA = Dg;
function ms() {
  const e = Mg(Zu);
  return process.env.NODE_ENV !== "production" && oe.useDebugValue(e), e;
}
function zA(e) {
  return Jt("MuiPaper", e);
}
zt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const PA = ["className", "component", "elevation", "square", "variant"], Wl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, RA = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, o = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ln(o, zA, i);
}, UA = At("div", {
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
    backgroundImage: `linear-gradient(${Tr("#fff", Wl(t.elevation))}, ${Tr("#fff", Wl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Ag = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: o = "div",
    elevation: s = 1,
    square: a = !1,
    variant: u = "elevation"
  } = r, c = Je(r, PA), l = pe({}, r, {
    component: o,
    elevation: s,
    square: a,
    variant: u
  }), f = RA(l);
  return process.env.NODE_ENV !== "production" && ms().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ ge.jsx(UA, pe({
    as: o,
    ownerState: l,
    className: at(f.root, i),
    ref: n
  }, c));
});
process.env.NODE_ENV !== "production" && (Ag.propTypes = {
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
  elevation: Bi(Jh, (e) => {
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
const Eg = Ag;
function Va(e, t) {
  return Va = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Va(e, t);
}
function Ig(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Va(e, t);
}
const Hl = {
  disabled: !1
};
var FA = process.env.NODE_ENV !== "production" ? D.oneOfType([D.number, D.shape({
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
const Fo = Te.createContext(null);
var YA = function(t) {
  return t.scrollTop;
}, ci = "unmounted", Fn = "exited", Yn = "entering", Ar = "entered", qa = "exiting", Mn = /* @__PURE__ */ function(e) {
  Ig(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = i, a = s && !s.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = Fn, o.appearStatus = Yn) : u = Ar : r.unmountOnExit || r.mountOnEnter ? u = ci : u = Fn, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var s = i.in;
    return s && o.status === ci ? {
      status: Fn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Yn && s !== Ar && (o = Yn) : (s === Yn || s === Ar) && (o = qa);
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
      if (this.cancelNextCallback(), o === Yn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ui.findDOMNode(this);
          s && YA(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Fn && this.setState({
        status: ci
      });
  }, n.performEnter = function(i) {
    var o = this, s = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [ui.findDOMNode(this), a], c = u[0], l = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!i && !s || Hl.disabled) {
      this.safeSetState({
        status: Ar
      }, function() {
        o.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, l), this.safeSetState({
      status: Yn
    }, function() {
      o.props.onEntering(c, l), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Ar
        }, function() {
          o.props.onEntered(c, l);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ui.findDOMNode(this);
    if (!o || Hl.disabled) {
      this.safeSetState({
        status: Fn
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: qa
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Fn
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : ui.findDOMNode(this), a = i == null && !this.props.addEndListener;
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
    if (i === ci)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Je(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Te.createElement(Fo.Provider, {
        value: null
      }, typeof s == "function" ? s(i, a) : Te.cloneElement(Te.Children.only(s), a))
    );
  }, t;
}(Te.Component);
Mn.contextType = Fo;
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = FA;
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
function yr() {
}
Mn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yr,
  onEntering: yr,
  onEntered: yr,
  onExit: yr,
  onExiting: yr,
  onExited: yr
};
Mn.UNMOUNTED = ci;
Mn.EXITED = Fn;
Mn.ENTERING = Yn;
Mn.ENTERED = Ar;
Mn.EXITING = qa;
const Ng = Mn;
function QA(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ec(e, t) {
  var n = function(o) {
    return t && hi(o) ? t(o) : o;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && yM.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function BA(e, t) {
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
function qn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function $A(e, t) {
  return ec(e.children, function(n) {
    return gi(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qn(n, "appear", e),
      enter: qn(n, "enter", e),
      exit: qn(n, "exit", e)
    });
  });
}
function WA(e, t, n) {
  var r = ec(e.children), i = BA(t, r);
  return Object.keys(i).forEach(function(o) {
    var s = i[o];
    if (hi(s)) {
      var a = o in t, u = o in r, c = t[o], l = hi(c) && !c.props.in;
      u && (!a || l) ? i[o] = gi(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: qn(s, "exit", e),
        enter: qn(s, "enter", e)
      }) : !u && a && !l ? i[o] = gi(s, {
        in: !1
      }) : u && a && hi(c) && (i[o] = gi(s, {
        onExited: n.bind(null, s),
        in: c.props.in,
        exit: qn(s, "exit", e),
        enter: qn(s, "enter", e)
      }));
    }
  }), i;
}
var HA = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, VA = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, tc = /* @__PURE__ */ function(e) {
  Ig(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = o.handleExited.bind(QA(o));
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
      children: u ? $A(i, a) : WA(i, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(i, o) {
    var s = ec(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(a) {
      var u = pe({}, a.children);
      return delete u[i.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var i = this.props, o = i.component, s = i.childFactory, a = Je(i, ["component", "childFactory"]), u = this.state.contextValue, c = HA(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, o === null ? /* @__PURE__ */ Te.createElement(Fo.Provider, {
      value: u
    }, c) : /* @__PURE__ */ Te.createElement(Fo.Provider, {
      value: u
    }, /* @__PURE__ */ Te.createElement(o, a, c));
  }, t;
}(Te.Component);
tc.propTypes = process.env.NODE_ENV !== "production" ? {
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
tc.defaultProps = VA;
const qA = tc, Tg = (e) => e.scrollTop;
function Yo(e, t) {
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
const KA = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ka(e) {
  return `scale(${e}, ${e ** 2})`;
}
const GA = {
  entering: {
    opacity: 1,
    transform: Ka(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Js = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent), nc = /* @__PURE__ */ oe.forwardRef(function(t, n) {
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
    TransitionComponent: m = Ng
  } = t, v = Je(t, KA), w = oe.useRef(), j = oe.useRef(), N = ms(), I = oe.useRef(null), Q = Tt(o.ref, n), z = Tt(I, Q), W = (R) => (C) => {
    if (R) {
      const J = I.current;
      C === void 0 ? R(J) : R(J, C);
    }
  }, $ = W(l), b = W((R, C) => {
    Tg(R);
    const {
      duration: J,
      delay: re,
      easing: L
    } = Yo({
      style: h,
      timeout: p,
      easing: s
    }, {
      mode: "enter"
    });
    let F;
    p === "auto" ? (F = N.transitions.getAutoHeightDuration(R.clientHeight), j.current = F) : F = J, R.style.transition = [N.transitions.create("opacity", {
      duration: F,
      delay: re
    }), N.transitions.create("transform", {
      duration: Js ? F : F * 0.666,
      delay: re,
      easing: L
    })].join(","), u && u(R, C);
  }), k = W(c), U = W(g), x = W((R) => {
    const {
      duration: C,
      delay: J,
      easing: re
    } = Yo({
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
      duration: Js ? L : L * 0.666,
      delay: Js ? J : J || L * 0.333,
      easing: re
    })].join(","), R.style.opacity = 0, R.style.transform = Ka(0.75), f && f(R);
  }), T = W(d), S = (R) => {
    p === "auto" && (w.current = setTimeout(R, j.current || 0)), r && r(I.current, R);
  };
  return oe.useEffect(() => () => {
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
    children: (R, C) => /* @__PURE__ */ oe.cloneElement(o, pe({
      style: pe({
        opacity: 0,
        transform: Ka(0.75),
        visibility: R === "exited" && !a ? "hidden" : void 0
      }, GA[R], h, o.props.style),
      ref: z
    }, C))
  }));
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
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
  children: $i.isRequired,
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
nc.muiSupportAuto = !0;
const JA = nc, ZA = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], XA = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, jg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = ms(), i = {
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
    TransitionComponent: w = Ng
  } = t, j = Je(t, ZA), N = oe.useRef(null), I = Tt(a.ref, n), Q = Tt(N, I), z = (S) => (R) => {
    if (S) {
      const C = N.current;
      R === void 0 ? S(C) : S(C, R);
    }
  }, W = z(d), $ = z((S, R) => {
    Tg(S);
    const C = Yo({
      style: m,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    S.style.webkitTransition = r.transitions.create("opacity", C), S.style.transition = r.transitions.create("opacity", C), l && l(S, R);
  }), b = z(f), k = z(p), U = z((S) => {
    const R = Yo({
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
    children: (S, R) => /* @__PURE__ */ oe.cloneElement(a, pe({
      style: pe({
        opacity: 0,
        visibility: S === "exited" && !c ? "hidden" : void 0
      }, XA[S], m, a.props.style),
      ref: Q
    }, R))
  }));
});
process.env.NODE_ENV !== "production" && (jg.propTypes = {
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
  children: $i.isRequired,
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
const eE = jg;
function tE(e) {
  return Jt("MuiBackdrop", e);
}
zt("MuiBackdrop", ["root", "invisible"]);
const nE = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"], rE = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ln({
    root: ["root", n && "invisible"]
  }, tE, t);
}, iE = At("div", {
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
})), Sg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  var r, i;
  const o = pn({
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
    TransitionComponent: h = eE
  } = o, p = Je(o, nE), m = pe({}, o, {
    component: a,
    invisible: f
  }), v = rE(m);
  return /* @__PURE__ */ ge.jsx(h, pe({
    in: d,
    timeout: g
  }, p, {
    children: /* @__PURE__ */ ge.jsx(iE, {
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
process.env.NODE_ENV !== "production" && (Sg.propTypes = {
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
const oE = Sg, sE = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"], aE = (e) => e.classes, uE = At("div", {
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
})), cE = At(oE, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), bg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  var r;
  const i = pn({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = cE,
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
  } = i, w = Je(i, sE), [j, N] = oe.useState(!0), I = {
    closeAfterTransition: s,
    disableAutoFocus: l,
    disableEnforceFocus: f,
    disableEscapeKeyDown: d,
    disablePortal: g,
    disableRestoreFocus: h,
    disableScrollLock: p,
    hideBackdrop: m,
    keepMounted: v
  }, Q = pe({}, i, I, {
    exited: j
  }), z = aE(Q);
  return /* @__PURE__ */ ge.jsx(mw, pe({
    components: pe({
      Root: uE
    }, u),
    componentsProps: {
      root: pe({}, c.root, (!u.Root || !Fh(u.Root)) && {
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
process.env.NODE_ENV !== "production" && (bg.propTypes = {
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
  children: $i.isRequired,
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
  container: D.oneOfType([_r, D.func]),
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
const lE = bg;
function fE(e) {
  return Jt("MuiPopover", e);
}
zt("MuiPopover", ["root", "paper"]);
const dE = ["onEntering"], hE = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function Vl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function ql(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Kl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Eo(e) {
  return typeof e == "function" ? e() : e;
}
const gE = (e) => {
  const {
    classes: t
  } = e;
  return Ln({
    root: ["root"],
    paper: ["paper"]
  }, fE, t);
}, pE = At(lE, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ME = At(Eg, {
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
}), Cg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
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
    TransitionComponent: v = JA,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: j
    } = {}
  } = r, N = Je(r.TransitionProps, dE), I = Je(r, hE), Q = oe.useRef(), z = Tt(Q, p.ref), W = pe({}, r, {
    anchorOrigin: s,
    anchorReference: u,
    elevation: d,
    marginThreshold: g,
    PaperProps: p,
    transformOrigin: m,
    TransitionComponent: v,
    transitionDuration: w,
    TransitionProps: N
  }), $ = gE(W), b = oe.useCallback(() => {
    if (u === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const C = Eo(o), J = C && C.nodeType === 1 ? C : Bt(Q.current).body, re = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const L = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && L.top === 0 && L.left === 0 && L.right === 0 && L.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: re.top + Vl(re, s.vertical),
      left: re.left + ql(re, s.horizontal)
    };
  }, [o, s.horizontal, s.vertical, a, u]), k = oe.useCallback((C) => ({
    vertical: Vl(C, m.vertical),
    horizontal: ql(C, m.horizontal)
  }), [m.horizontal, m.vertical]), U = oe.useCallback((C) => {
    const J = {
      width: C.offsetWidth,
      height: C.offsetHeight
    }, re = k(J);
    if (u === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Kl(re)
      };
    const L = b();
    let F = L.top - re.vertical, P = L.left - re.horizontal;
    const q = F + J.height, K = P + J.width, X = Si(Eo(o)), O = X.innerHeight - g, ne = X.innerWidth - g;
    if (F < g) {
      const G = F - g;
      F -= G, re.vertical += G;
    } else if (q > O) {
      const G = q - O;
      F -= G, re.vertical += G;
    }
    if (process.env.NODE_ENV !== "production" && J.height > O && J.height && O && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - O}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), P < g) {
      const G = P - g;
      P -= G, re.horizontal += G;
    } else if (K > ne) {
      const G = K - ne;
      P -= G, re.horizontal += G;
    }
    return {
      top: `${Math.round(F)}px`,
      left: `${Math.round(P)}px`,
      transformOrigin: Kl(re)
    };
  }, [o, u, b, k, g]), x = oe.useCallback(() => {
    const C = Q.current;
    if (!C)
      return;
    const J = U(C);
    J.top !== null && (C.style.top = J.top), J.left !== null && (C.style.left = J.left), C.style.transformOrigin = J.transformOrigin;
  }, [U]), T = (C, J) => {
    j && j(C, J), x();
  };
  oe.useEffect(() => {
    h && x();
  }), oe.useImperativeHandle(i, () => h ? {
    updatePosition: () => {
      x();
    }
  } : null, [h, x]), oe.useEffect(() => {
    if (!h)
      return;
    const C = Rv(() => {
      x();
    }), J = Si(o);
    return J.addEventListener("resize", C), () => {
      C.clear(), J.removeEventListener("resize", C);
    };
  }, [o, h, x]);
  let S = w;
  w === "auto" && !v.muiSupportAuto && (S = void 0);
  const R = f || (o ? Bt(Eo(o)).body : void 0);
  return /* @__PURE__ */ ge.jsx(pE, pe({
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
      children: /* @__PURE__ */ ge.jsx(ME, pe({
        elevation: d
      }, p, {
        ref: z,
        className: at($.paper, p.className),
        children: c
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Cg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Vh,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: Bi(D.oneOfType([_r, D.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Eo(e.anchorEl);
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
  container: D.oneOfType([_r, D.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Jh,
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
    component: $h
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
const yE = Cg;
function mE(e) {
  return Jt("MuiMenu", e);
}
zt("MuiMenu", ["root", "paper", "list"]);
const vE = ["onEntering"], wE = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], DE = {
  vertical: "top",
  horizontal: "right"
}, AE = {
  vertical: "top",
  horizontal: "left"
}, EE = (e) => {
  const {
    classes: t
  } = e;
  return Ln({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, mE, t);
}, IE = At(yE, {
  shouldForwardProp: (e) => Xu(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), NE = At(Eg, {
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
}), TE = At(kA, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), xg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
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
  } = r, p = Je(r.TransitionProps, vE), m = Je(r, wE), v = ms(), w = v.direction === "rtl", j = pe({}, r, {
    autoFocus: i,
    disableAutoFocusItem: s,
    MenuListProps: a,
    onEntering: g,
    PaperProps: l,
    transitionDuration: d,
    TransitionProps: p,
    variant: h
  }), N = EE(j), I = i && !s && c, Q = oe.useRef(null), z = (b, k) => {
    Q.current && Q.current.adjustStyleForScrollbar(b, v), g && g(b, k);
  }, W = (b) => {
    b.key === "Tab" && (b.preventDefault(), u && u(b, "tabKeyDown"));
  };
  let $ = -1;
  return oe.Children.map(o, (b, k) => {
    /* @__PURE__ */ oe.isValidElement(b) && (process.env.NODE_ENV !== "production" && _o.isFragment(b) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), b.props.disabled || (h === "selectedMenu" && b.props.selected || $ === -1) && ($ = k));
  }), /* @__PURE__ */ ge.jsx(IE, pe({
    classes: f,
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? DE : AE,
    PaperProps: pe({
      component: NE
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
    children: /* @__PURE__ */ ge.jsx(TE, pe({
      onKeyDown: W,
      actions: Q,
      autoFocus: i && ($ === -1 || s),
      autoFocusItem: I,
      variant: h
    }, a, {
      className: at(N.list, a.className),
      children: o
    }))
  }));
});
process.env.NODE_ENV !== "production" && (xg.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: D.oneOfType([_r, D.func]),
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
const jE = xg;
function Og(e) {
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
  } = e, [l, f] = oe.useState(!1), d = at(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + o,
    left: -(s / 2) + i
  }, h = at(n.child, l && n.childLeaving, r && n.childPulsate);
  return !a && !l && f(!0), oe.useEffect(() => {
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
process.env.NODE_ENV !== "production" && (Og.propTypes = {
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
const SE = zt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), xt = SE, bE = ["center", "classes", "className"];
let vs = (e) => e, Gl, Jl, Zl, Xl;
const Ga = 550, CE = 80, xE = Vu(Gl || (Gl = vs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), OE = Vu(Jl || (Jl = vs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), LE = Vu(Zl || (Zl = vs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), _E = At("span", {
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
}), kE = At(Og, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Xl || (Xl = vs`
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
`), xt.rippleVisible, xE, Ga, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, xt.child, xt.childLeaving, OE, Ga, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.childPulsate, LE, ({
  theme: e
}) => e.transitions.easing.easeInOut), Lg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: o = {},
    className: s
  } = r, a = Je(r, bE), [u, c] = oe.useState([]), l = oe.useRef(0), f = oe.useRef(null);
  oe.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [u]);
  const d = oe.useRef(!1), g = oe.useRef(null), h = oe.useRef(null), p = oe.useRef(null);
  oe.useEffect(() => () => {
    clearTimeout(g.current);
  }, []);
  const m = oe.useCallback((N) => {
    const {
      pulsate: I,
      rippleX: Q,
      rippleY: z,
      rippleSize: W,
      cb: $
    } = N;
    c((b) => [...b, /* @__PURE__ */ ge.jsx(kE, {
      classes: {
        ripple: at(o.ripple, xt.ripple),
        rippleVisible: at(o.rippleVisible, xt.rippleVisible),
        ripplePulsate: at(o.ripplePulsate, xt.ripplePulsate),
        child: at(o.child, xt.child),
        childLeaving: at(o.childLeaving, xt.childLeaving),
        childPulsate: at(o.childPulsate, xt.childPulsate)
      },
      timeout: Ga,
      pulsate: I,
      rippleX: Q,
      rippleY: z,
      rippleSize: W
    }, l.current)]), l.current += 1, f.current = $;
  }, [o]), v = oe.useCallback((N = {}, I = {}, Q) => {
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
        cb: Q
      });
    }, g.current = setTimeout(() => {
      h.current && (h.current(), h.current = null);
    }, CE)) : m({
      pulsate: z,
      rippleX: U,
      rippleY: x,
      rippleSize: T,
      cb: Q
    });
  }, [i, m]), w = oe.useCallback(() => {
    v({}, {
      pulsate: !0
    });
  }, [v]), j = oe.useCallback((N, I) => {
    if (clearTimeout(g.current), (N == null ? void 0 : N.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.current = setTimeout(() => {
        j(N, I);
      });
      return;
    }
    h.current = null, c((Q) => Q.length > 0 ? Q.slice(1) : Q), f.current = I;
  }, []);
  return oe.useImperativeHandle(n, () => ({
    pulsate: w,
    start: v,
    stop: j
  }), [w, v, j]), /* @__PURE__ */ ge.jsx(_E, pe({
    className: at(o.root, xt.root, s),
    ref: p
  }, a, {
    children: /* @__PURE__ */ ge.jsx(qA, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (Lg.propTypes = {
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
const zE = Lg;
function PE(e) {
  return Jt("MuiButtonBase", e);
}
const RE = zt("MuiButtonBase", ["root", "disabled", "focusVisible"]), UE = RE, FE = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], YE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = Ln({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, PE, i);
  return n && r && (s.root += ` ${r}`), s;
}, QE = At("button", {
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
  [`&.${UE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _g = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
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
    onMouseDown: Q,
    onMouseLeave: z,
    onMouseUp: W,
    onTouchEnd: $,
    onTouchMove: b,
    onTouchStart: k,
    tabIndex: U = 0,
    TouchRippleProps: x,
    touchRippleRef: T,
    type: S
  } = r, R = Je(r, FE), C = oe.useRef(null), J = oe.useRef(null), re = Tt(J, T), {
    isFocusVisibleRef: L,
    onFocus: F,
    onBlur: P,
    ref: q
  } = Hv(), [K, X] = oe.useState(!1);
  c && K && X(!1), oe.useImperativeHandle(i, () => ({
    focusVisible: () => {
      X(!0), C.current.focus();
    }
  }), []);
  const [O, ne] = oe.useState(!1);
  oe.useEffect(() => {
    ne(!0);
  }, []);
  const G = O && !l && !c;
  oe.useEffect(() => {
    K && d && !l && O && J.current.pulsate();
  }, [l, d, K, O]);
  function he(De, en, cr = f) {
    return Nr((Zi) => (en && en(Zi), !cr && J.current && J.current[De](Zi), !0));
  }
  const V = he("start", Q), B = he("stop", m), H = he("stop", v), fe = he("stop", W), te = he("stop", (De) => {
    K && De.preventDefault(), z && z(De);
  }), le = he("start", k), Me = he("stop", $), de = he("stop", b), E = he("stop", (De) => {
    P(De), L.current === !1 && X(!1), h && h(De);
  }, !1), y = Nr((De) => {
    C.current || (C.current = De.currentTarget), F(De), L.current === !0 && (X(!0), j && j(De)), w && w(De);
  }), M = () => {
    const De = C.current;
    return u && u !== "button" && !(De.tagName === "A" && De.href);
  }, A = oe.useRef(!1), Y = Nr((De) => {
    d && !A.current && K && J.current && De.key === " " && (A.current = !0, J.current.stop(De, () => {
      J.current.start(De);
    })), De.target === De.currentTarget && M() && De.key === " " && De.preventDefault(), N && N(De), De.target === De.currentTarget && M() && De.key === "Enter" && !c && (De.preventDefault(), p && p(De));
  }), ee = Nr((De) => {
    d && De.key === " " && J.current && K && !De.defaultPrevented && (A.current = !1, J.current.stop(De, () => {
      J.current.pulsate(De);
    })), I && I(De), p && De.target === De.currentTarget && M() && De.key === " " && !De.defaultPrevented && p(De);
  });
  let Z = u;
  Z === "button" && (R.href || R.to) && (Z = g);
  const ve = {};
  Z === "button" ? (ve.type = S === void 0 ? "button" : S, ve.disabled = c) : (!R.href && !R.to && (ve.role = "button"), c && (ve["aria-disabled"] = c));
  const Ce = Tt(q, C), Se = Tt(n, Ce);
  process.env.NODE_ENV !== "production" && oe.useEffect(() => {
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
  }), He = YE(Pe);
  return /* @__PURE__ */ ge.jsxs(QE, pe({
    as: Z,
    className: at(He.root, a),
    ownerState: Pe,
    onBlur: E,
    onClick: p,
    onContextMenu: B,
    onFocus: y,
    onKeyDown: Y,
    onKeyUp: ee,
    onMouseDown: V,
    onMouseLeave: te,
    onMouseUp: fe,
    onDragLeave: H,
    onTouchEnd: Me,
    onTouchMove: de,
    onTouchStart: le,
    ref: Se,
    tabIndex: c ? -1 : U,
    type: S
  }, ve, R, {
    children: [s, G ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ge.jsx(zE, pe({
        ref: re,
        center: o
      }, x))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_g.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Vh,
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
  component: $h,
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
const BE = _g, $E = zt("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), ef = $E, WE = zt("MuiListItemIcon", ["root", "alignItemsFlexStart"]), tf = WE, HE = zt("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), nf = HE;
function VE(e) {
  return Jt("MuiMenuItem", e);
}
const qE = zt("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), ti = qE, KE = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"], GE = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, JE = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: o,
    classes: s
  } = e, u = Ln({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", o && "selected"]
  }, VE, s);
  return pe({}, s, u);
}, ZE = At(BE, {
  shouldForwardProp: (e) => Xu(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: GE
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
  [`&.${ti.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Tr(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ti.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Tr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ti.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Tr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Tr(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${ti.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ti.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ef.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ef.inset}`]: {
    marginLeft: 52
  },
  [`& .${nf.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${nf.inset}`]: {
    paddingLeft: 36
  },
  [`& .${tf.root}`]: {
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
  [`& .${tf.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), kg = /* @__PURE__ */ oe.forwardRef(function(t, n) {
  const r = pn({
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
  } = r, d = Je(r, KE), g = oe.useContext(Ha), h = {
    dense: s || g.dense || !1,
    disableGutters: u
  }, p = oe.useRef(null);
  bi(() => {
    i && (p.current ? p.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const m = pe({}, r, {
    dense: h.dense,
    divider: a,
    disableGutters: u
  }), v = JE(r), w = Tt(p, n);
  let j;
  return r.disabled || (j = f !== void 0 ? f : -1), /* @__PURE__ */ ge.jsx(Ha.Provider, {
    value: h,
    children: /* @__PURE__ */ ge.jsx(ZE, pe({
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
process.env.NODE_ENV !== "production" && (kg.propTypes = {
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
const rf = kg;
var XE = {
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
const eI = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rc = (e, t) => {
  const n = Xo(
    ({ color: r = "currentColor", size: i = 24, strokeWidth: o = 2, absoluteStrokeWidth: s, children: a, ...u }, c) => wt(
      "svg",
      {
        ref: c,
        ...XE,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: `lucide lucide-${eI(e)}`,
        ...u
      },
      [
        ...t.map(([l, f]) => wt(l, f)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, of = rc("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]), tI = rc("Moon", [
  ["path", { d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "1rit1i" }]
]), nI = rc("Sun", [
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
}, r4 = (e, t) => `
      @media screen and (max-width: ${Qo[e] / 16}em) {
        ${t};
      }
    `, rI = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  backgroundColor: "inherit"
}, iI = ({ theme: e, changeLang: t }) => {
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
          ...rI,
          color: e === "light" ? Ge.light.main : Ge.dark.text2
        },
        onClick: i,
        "aria-label": "Language toggle",
        children: /* @__PURE__ */ ge.jsx(Ua, { maxWidth: Qo.tablet, children: (a) => a ? /* @__PURE__ */ ge.jsx(of, { size: "2x" }) : /* @__PURE__ */ ge.jsx(of, { size: "3x", transform: "shrink-2" }) })
      }
    ),
    /* @__PURE__ */ ge.jsxs(
      jE,
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
            rf,
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
            rf,
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
}, zg = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjMzMiAxNDAuNDIzLDMwMS4yODYgMTQ1LjMzNCwzMDEuNDYyIDE1NC45NzEgQyAzMDEuNzU5IDE3MS4xOTQsMzAxLjc4NCAxNzEuMDUwLDI5OS4xNjIgMTY4LjIwNSBDIDI5NS40MzkgMTY0LjE2NywyODcuNTg1IDE2Mi41MDksMjgxLjgwMCAxNjQuNTQyIEMgMjY0LjM3OSAxNzAuNjYyLDI2NC43NjcgMjAyLjA2NywyODIuMzIwIDIwNi42NDcgQyAyODguODE1IDIwOC4zNDIsMjk5LjAxMiAyMDQuOTAxLDMwMC40NDYgMjAwLjUzMCBDIDMwMS4wNTQgMTk4LjY3NSwzMDEuNzcxIDE5OS45OTcsMzAxLjc4NSAyMDMuMDAwIEwgMzAxLjgwMCAyMDYuMjAwIDMwNS40NzEgMjA2LjI2NCBDIDMwNy45NjQgMjA2LjMwOCwzMDkuMTgzIDIwNi4xNzksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjM0MiAyMDUuNjA5LDMwOS4zMTAgMTkwLjc0MSwzMDkuMjAwIDE3Mi44MjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA1LjUwMiAxNDAuMjI1IEMgMzAzLjU3OCAxNDAuMjExLDMwMS44MjIgMTQwLjI2MCwzMDEuNjAwIDE0MC4zMzQgTTYzLjYwMCAxNDYuNjczIEMgNjMuNjAwIDE0Ny4wNDQsNjMuOTQ3IDE0OC4zNDksNjQuMzcxIDE0OS41NzMgQyA2NC43OTUgMTUwLjc5OCw2Ni4yNTEgMTU1LjMxMCw2Ny42MDUgMTU5LjYwMCBDIDY4Ljk2MCAxNjMuODkwLDcwLjM5NyAxNjguMzkwLDcwLjc5OSAxNjkuNjAwIEMgNzEuODA0IDE3Mi42MjcsNzMuNzM1IDE3OC43OTMsNzQuODA2IDE4Mi40MDAgQyA3NS4yOTcgMTg0LjA1MCw3Ni4wMjEgMTg2LjM5MCw3Ni40MTUgMTg3LjYwMCBDIDc2LjgxMCAxODguODEwLDc3LjcwNyAxOTEuNjkwLDc4LjQwOSAxOTQuMDAwIEMgNzkuMTEwIDE5Ni4zMTAsODAuMDQwIDE5OS4zNzAsODAuNDc1IDIwMC44MDAgQyA4MC45MTAgMjAyLjIzMCw4MS41MDEgMjA0LjAzMCw4MS43ODggMjA0LjgwMCBMIDgyLjMxMSAyMDYuMjAwIDg1LjY1MyAyMDYuMjAwIEwgODguOTk2IDIwNi4yMDAgOTYuNzk4IDE4Mi43MDkgQyAxMDMuMzQwIDE2My4wMTIsMTA1LjYwMCAxNTcuMDAzLDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU5LjM2OSwxMDYuMzI4IDE2MS40ODQsMTA3LjIxOSAxNjQuMDA5IEMgMTEwLjQxOCAxNzMuMDgyLDExNS45NzIgMTg5Ljk3MywxMTguODU2IDE5OS40MDAgQyAxMTkuMzI3IDIwMC45NDAsMTIwLjAwOSAyMDMuMTAwLDEyMC4zNzEgMjA0LjIwMCBMIDEyMS4wMzEgMjA2LjIwMCAxMjQuNDA1IDIwNi4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTM3LjUzMCAxNzcuMjAwIEMgMTQyLjg5MyAxNjEuMjUwLDE0Ny4zNzMgMTQ3LjcwNSwxNDcuNDg2IDE0Ny4xMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ0LjUzOCAxNDYuMDAwIEwgMTQxLjM4NSAxNDYuMDAwIDE0MC40NDcgMTQ5LjUwMCBDIDEzOS42MzYgMTUyLjUyNSwxMzguMTM5IDE1Ny45ODUsMTM2LjgwMCAxNjIuODAwIEMgMTMyLjk0MyAxNzYuNjY4LDEyNi43MjcgMTk1LjY4NiwxMjYuMjI2IDE5NS4xNTAgQyAxMjUuOTM2IDE5NC44MzgsMTE2LjAxOCAxNjUuMzgzLDExMy42NTAgMTU3LjgwMCBDIDExMi45NjMgMTU1LjYwMCwxMTEuODMwIDE1Mi4wNDUsMTExLjEzMyAxNDkuOTAwIEwgMTA5Ljg2NCAxNDYuMDAwIDEwNi43ODEgMTQ2LjAwMCBDIDEwMy4yNTEgMTQ2LjAwMCwxMDMuNDI0IDE0NS43OTEsMTAxLjY1MCAxNTIuMjAwIEMgMTAxLjQwNiAxNTMuMDgwLDEwMC44NDUgMTU1LjAxNSwxMDAuNDAzIDE1Ni41MDAgQyA5OS45NjIgMTU3Ljk4NSw5OS4yNjYgMTYwLjMyNSw5OC44NTcgMTYxLjcwMCBDIDk2LjgyNSAxNjguNTM5LDk2LjExOSAxNzAuNzczLDkzLjc3MCAxNzcuODAwIEMgODcuODEwIDE5NS42MjIsODcuNDAyIDE5Ni42NzcsODYuOTcyIDE5NS4zNTcgQyA4Ni44MzYgMTk0Ljk0MSw4Ni41NzQgMTk0LjE1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjIwMyAxOTMuMDUwLDg1LjQ4MSAxOTAuNzEwLDg0Ljc4NCAxODguNDAwIEMgODIuNDcyIDE4MC43NDEsODEuOTQxIDE3OS4wMDksODEuNTk1IDE3OC4wMDAgQyA4MS4yMTIgMTc2Ljg4Niw3OS4wMTggMTY5LjQ4NCw3OC4zMzMgMTY3LjAwMCBDIDc3LjgzNCAxNjUuMTkxLDc3LjIzMSAxNjMuMDc5LDc2Ljc5MSAxNjEuNjAwIEMgNzYuNjI3IDE2MS4wNTAsNzYuMjk2IDE1OS44ODAsNzYuMDU1IDE1OS4wMDAgQyA3NS4xNTIgMTU1LjcwNSw3My45MTUgMTUxLjMxMyw3My4xNTMgMTQ4LjcwMCBMIDcyLjM2NiAxNDYuMDAwIDY3Ljk4MyAxNDYuMDAwIEMgNjQuMTQxIDE0Ni4wMDAsNjMuNjAwIDE0Ni4wODMsNjMuNjAwIDE0Ni42NzMgTTE2Ni4yMDAgMTYzLjg1OSBDIDE2My40MzQgMTY0LjE2MywxNTkuNDg0IDE2NS41OTcsMTU3LjIwMCAxNjcuMTI3IEwgMTU1LjAwMCAxNjguNjAwIDE1NC44ODEgMTcxLjEwMCBDIDE1NC43MzAgMTc0LjI2MywxNTUuMjIxIDE3NC4zNDEsMTU3Ljk3MiAxNzEuNTg5IEMgMTYwLjgyMCAxNjguNzQyLDE2Mi45ODMgMTY3Ljg2NCwxNjcuMjAwIDE2Ny44NDQgQyAxNzMuNDMxIDE2Ny44MTUsMTc2LjAzMiAxNzAuNTI1LDE3Ni4xNDMgMTc3LjE2MyBMIDE3Ni4yMDAgMTgwLjYwMCAxNzQuNzU1IDE4MS4zMDYgQyAxNzMuOTYxIDE4MS42OTUsMTcwLjE4MSAxODIuNjU3LDE2Ni4zNTUgMTgzLjQ0MyBDIDE1NC4wMjkgMTg1Ljk3OCwxNTAuODM4IDE4OC44MjUsMTUxLjI4MCAxOTYuODkwIEMgMTUxLjg1MCAyMDcuMjc3LDE2NS4yMTYgMjExLjA2NywxNzQuMzA0IDIwMy40MTkgQyAxNzUuNzQzIDIwMi4yMDksMTc2LjgwMCAyMDIuMDk4LDE3Ni44MDAgMjAzLjE1OSBDIDE3Ni44MDAgMjA0LjYzOCwxNzkuNDA2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTg3LjQzNiAyMDYuNDAwLDE5MS40MjggMjAzLjU1MiwxODYuNzk3IDIwMi42ODkgQyAxODUuNjc2IDIwMi40ODEsMTg0LjY1MyAyMDEuOTY5LDE4NC4wNzkgMjAxLjMzMSBMIDE4My4xNTggMjAwLjMwNiAxODMuMjQ3IDE4Ny4yNTMgQyAxODMuMzQ2IDE3Mi44MDAsMTgzLjE1NiAxNzEuMzE2LDE4MC43OTAgMTY4LjA0OSBDIDE3OC40MTMgMTY0Ljc2OCwxNzIuNzQ1IDE2My4xNDEsMTY2LjIwMCAxNjMuODU5IE0yMDIuNjg3IDE2NC4wMzcgQyAxOTYuNzMyIDE2NS40MzksMTkzLjM4NiAxNjkuNzU4LDE5My40MzQgMTc1Ljk4MSBDIDE5My40ODQgMTgyLjU5OCwxOTYuMjQ1IDE4NS44OTgsMjAzLjI5MyAxODcuNzY1IEMgMjExLjMxMiAxODkuODg4LDIxMy45NzYgMTkyLjE2OCwyMTMuNDY2IDE5Ni40NzIgQyAyMTIuNDUwIDIwNS4wNDksMjAyLjQyNCAyMDUuNzI0LDE5NS42MzkgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTQuMjgzIDE5Ny42NzEgQyAxOTMuOTY3IDE5OC4xODIsMTkzLjM5NSAxOTkuNzYyLDE5My4wMTEgMjAxLjE4MyBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMzUxIDIwNC41OTQgQyAxOTMuOTIzIDIwNS4wNTAsMTk1LjI0OCAyMDUuNjU4LDE5Ni4yOTUgMjA1Ljk0NyBDIDE5Ny4zNDMgMjA2LjIzNSwxOTguNzIyIDIwNi42MzUsMTk5LjM2MCAyMDYuODM1IEMgMjExLjI4OSAyMTAuNTg3LDIyMy44NDggMTk4LjM4MiwyMTguNTM2IDE4OC4yMDAgQyAyMTYuOTI2IDE4NS4xMTMsMjE0LjMyMyAxODMuNjUyLDIwNi4wMDAgMTgxLjE2NCBDIDIwMS4wNjAgMTc5LjY4NywxOTkuMDAwIDE3Ny41MjksMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMyAxNjYuMzcxLDIwNy4wMjggMTY0LjYxNCwyMTMuODQ4IDE3MC41ODAgQyAyMTUuOTY4IDE3Mi40MzQsMjE2LjgwMCAxNzIuNDQwLDIxNi44MDAgMTcwLjYwMCBDIDIxNi44MDAgMTcwLjEzOCwyMTYuOTYxIDE2OS41ODksMjE3LjE1OCAxNjkuMzgwIEMgMjE3LjM1NSAxNjkuMTcxLDIxNy42NDAgMTY4LjQxMiwyMTcuNzkxIDE2Ny42OTMgQyAyMTguMzc2IDE2NC45MTYsMjA4Ljc5OSAxNjIuNTk3LDIwMi42ODcgMTY0LjAzNyBNMjQwLjQwMCAxNjMuODg1IEMgMjI3LjI3MSAxNjYuMTg5LDIyMC4zOTYgMTgyLjc3NCwyMjYuOTI1IDE5Ni4zOTEgQyAyMzEuOTg4IDIwNi45NDgsMjQ2LjM5MSAyMTAuNDA3LDI1OC4wMDAgMjAzLjg1MyBDIDI2MC40OTYgMjAyLjQ0NCwyNjAuODAwIDIwMi4wMjIsMjYwLjgwMCAxOTkuOTYyIEMgMjYwLjgwMCAxOTcuNDMxLDI2MC40MDQgMTk3LjI5NiwyNTguMTE5IDE5OS4wNDkgQyAyNDYuNTkwIDIwNy44OTQsMjMyLjgwMCAyMDEuNjUxLDIzMi44MDAgMTg3LjU4NSBMIDIzMi44MDAgMTg1LjIxMCAyNDcuNzAwIDE4NS4xMDUgTCAyNjIuNjAwIDE4NS4wMDAgMjYyLjcyMiAxODIuNjE4IEMgMjYzLjM5MSAxNjkuNjA2LDI1My43NzYgMTYxLjUzNiwyNDAuNDAwIDE2My44ODUgTTMzMy44MDAgMTYzLjg0NyBDIDMyNi45NDIgMTY0LjUzNywzMjIuMDAwIDE2Ny42OTMsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNzQuMjQwLDMyMi42OTMgMTc0LjMwNywzMjUuMTkxIDE3MS42ODggQyAzMzAuOTQ1IDE2NS42NTUsMzQwLjg2MSAxNjYuNDk2LDM0Mi45NjYgMTczLjE5NSBDIDM0NS4yMTMgMTgwLjM0OCwzNDQuNDU0IDE4MS4yNzcsMzM0LjgwMCAxODMuMTg2IEMgMzIxLjU2MyAxODUuODAzLDMxOC41OTYgMTg4LjIzMiwzMTguNjYwIDE5Ni40MDAgQyAzMTguNzQzIDIwNi44NjgsMzMwLjYwNyAyMTAuOTIyLDM0MC44MzUgMjAzLjk3NiBDIDM0My42MjMgMjAyLjA4MywzNDMuNzY2IDIwMi4wNjgsMzQ0LjQwNCAyMDMuNjEwIEMgMzQ1LjEyNyAyMDUuMzU0LDM0Ni43OTcgMjA2LjQwMCwzNDguODYyIDIwNi40MDEgQyAzNTQuNzE1IDIwNi40MDUsMzU4LjYzOCAyMDMuNTYyLDM1NC4wMDAgMjAyLjY3OCBDIDM1MC40NTkgMjAyLjAwNCwzNTAuNjAwIDIwMi42NDgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAxNzEuNTk0LDM1MC40NjkgMTcwLjc1NCwzNDcuNTIwIDE2Ny40MDQgQyAzNDUuMDYwIDE2NC42MTAsMzM5Ljc5MSAxNjMuMjQ0LDMzMy44MDAgMTYzLjg0NyBNMjQ3Ljg5NiAxNjcuNDA2IEMgMjUyLjAwMyAxNjguNjI2LDI1NS40NDcgMTc0LjM2NSwyNTUuMTI0IDE3OS40NTEgTCAyNTUuMDAwIDE4MS40MDAgMjQzLjkwMCAxODEuNTA2IEwgMjMyLjgwMCAxODEuNjEzIDIzMi44MDAgMTgwLjYyNiBDIDIzMi44MDAgMTcxLjkwMiwyNDAuNDU3IDE2NS4xOTcsMjQ3Ljg5NiAxNjcuNDA2IE0yOTQuMjk1IDE2OC41NDMgQyAzMDEuNTMzIDE3Mi4zMDAsMzA0LjAxNiAxODYuMjUzLDI5OS4yNTcgMTk2LjQyNyBDIDI5NS4zNDQgMjA0Ljc5MywyODQuMDQ0IDIwNS42MjcsMjc5LjU5OSAxOTcuODc4IEMgMjc0LjMzNiAxODguNzAyLDI3Ni44NjggMTcyLjc0OSwyODQuMTk3IDE2OC45MDYgQyAyODcuMDEyIDE2Ny40MzEsMjkxLjgxOSAxNjcuMjU4LDI5NC4yOTUgMTY4LjU0MyBNMTc2LjE5NyAxOTEuMjA4IEMgMTc2LjE5NCAxOTguMzI0LDE3Ni4wNTcgMTk4LjcxMCwxNzIuNzgyIDIwMC44MTEgQyAxNjYuMjM1IDIwNS4wMTMsMTU5Ljk5OSAyMDIuOTk5LDE1OS4wMDMgMTk2LjM2MiBDIDE1OC4xNDIgMTkwLjYxNSwxNjEuMzg0IDE4Ny44NTEsMTcxLjYwMCAxODUuNjI0IEMgMTc2LjYwMSAxODQuNTM0LDE3Ni4yMDAgMTg0LjA0NywxNzYuMTk3IDE5MS4yMDggTTM0My41MDQgMTkxLjAwNSBDIDM0My42MjYgMTk4LjAyOCwzNDMuNDI1IDE5OC41ODYsMzM5Ljk1MCAyMDAuODY3IEMgMzM0LjAwMiAyMDQuNzcxLDMyNy42NDQgMjAyLjk5NCwzMjYuNDE4IDE5Ny4wODUgQyAzMjUuMjYzIDE5MS41MjEsMzI4LjAyMiAxODguMzM0LDMzNS42MDAgMTg2LjQ4MCBDIDM0NC4zNzUgMTg0LjMzNCwzNDMuMzc4IDE4My43NjMsMzQzLjUwNCAxOTEuMDA1IE0xNTcuNjc5IDIxOS40NTAgQyAxNTMuMzc1IDIyMS42MzQsMTU1LjA0OSAyMjguMDAwLDE1OS45MjcgMjI4LjAwMCBDIDE2NS43MzMgMjI4LjAwMCwxNjYuMzM0IDIxOS44MzcsMTYwLjU5MCAyMTkuMDA5IEMgMTU5LjUwOSAyMTguODUzLDE1OC41NzcgMjE4Ljk5NSwxNTcuNjc5IDIxOS40NTAgTTEwMi44ODIgMjIyLjY5NyBMIDEwMy4wMDAgMjI1LjQwMCAxMDQuNDAwIDIyNS4zMDAgQyAxMDUuMTcwIDIyNS4yNDYsMTA5LjI4MiAyMjUuMDg5LDExMy41MzggMjI0Ljk1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMjEuMTUyIDI1Mi40NTIgTCAxMjEuMDI5IDI4MC4yMDAgMTI1LjExNCAyODAuMzE0IEMgMTI4LjIyMyAyODAuNDAxLDEyOS4yMDcgMjgwLjMwNSwxMjkuMjMwIDI3OS45MTQgQyAxMjkuMjQ2IDI3OS42MzEsMTI5LjIzMyAyNjcuNzY3LDEyOS4yMDIgMjUzLjU0OSBDIDEyOS4xNzEgMjM5LjMzMSwxMjkuMjcyIDIyNy4wMjUsMTI5LjQyNiAyMjYuMjAyIEwgMTI5LjcwNyAyMjQuNzA2IDEzNy4xNTMgMjI0Ljk1NSBDIDE0MS4yNDkgMjI1LjA5MSwxNDUuMjMwIDIyNS4yNDcsMTQ2LjAwMCAyMjUuMzAyIEwgMTQ3LjQwMCAyMjUuNDAwIDE0Ny40MDAgMjIyLjgwMCBMIDE0Ny40MDAgMjIwLjIwMCAxMjUuMDgyIDIyMC4wOTcgTCAxMDIuNzYzIDIxOS45OTMgMTAyLjg4MiAyMjIuNjk3IE0xOTQuNDAwIDIzOC4xMjQgQyAxOTEuNDc4IDIzOC45NzAsMTg5LjgxOSAyMzkuOTI2LDE4Ny4yNzUgMjQyLjIyOCBDIDE4NC4zMDcgMjQ0LjkxMywxODQuNDAxIDI0NC45MjQsMTg0LjM5NCAyNDEuOTAwIEMgMTg0LjM4NiAyMzguNjMxLDE4NC4zMzAgMjM4LjU4MiwxODAuNjU1IDIzOC41OTYgTCAxNzcuNTExIDIzOC42MDggMTc3LjQ1NSAyNTkuNTA0IEwgMTc3LjQwMCAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE4NC43NjkgMjgwLjQwMCAxODQuNzEwIDI2Ny4zMDAgQyAxODQuNjIwIDI0Ny4zNTcsMTg2LjQwMCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDIwMi43NTggMjQzLjIwMCwyMDQuNTMzIDI0Ny45MDQsMjAzLjY1OSAyNjYuMDY0IEMgMjAzLjQwMiAyNzEuNDE5LDIwMy4xOTMgMjc2LjgzNSwyMDMuMTk2IDI3OC4xMDAgTCAyMDMuMjAwIDI4MC40MDAgMjA2LjgwMCAyODAuNDAwIEMgMjA5LjM4NyAyODAuNDAwLDIxMC40MTQgMjgwLjI1OSwyMTAuNDUwIDI3OS45MDAgQyAyMTAuNDc4IDI3OS42MjUsMjEwLjQ2MSAyNzUuMjYwLDIxMC40MTIgMjcwLjIwMCBDIDIxMC4yMDkgMjQ4Ljk0NiwyMTIuNDA1IDI0My4wOTYsMjIwLjYwMCAyNDMuMDYwIEMgMjIzLjg4MiAyNDMuMDQ1LDIyNi4xODAgMjQ0LjAyNCwyMjcuNzI3IDI0Ni4wOTYgQyAyMjkuNzMzIDI0OC43ODIsMjI5LjgwNiAyNDkuNDk1LDIyOS43MTQgMjY1LjUxNSBMIDIyOS42MjkgMjgwLjQzMCAyMzMuMjU3IDI4MC4zMTUgTCAyMzYuODg2IDI4MC4yMDAgMjM2LjkxMiAyNjQuMDAwIEMgMjM2LjkzNyAyNDguMTkyLDIzNi45MTYgMjQ3Ljc0NSwyMzYuMDUyIDI0NS41MzAgQyAyMzIuMjc5IDIzNS44NzEsMjE4LjA1MCAyMzQuOTYzLDIxMS40MDAgMjQzLjk1OCBDIDIwOS45NDAgMjQ1LjkzMywyMDkuODU0IDI0NS45NDQsMjA5LjA1MCAyNDQuMjQ5IEMgMjA2LjcwOSAyMzkuMzE1LDE5OS45OTEgMjM2LjUwNiwxOTQuNDAwIDIzOC4xMjQgTTI2MS4yODMgMjM4LjIxMCBDIDI0MS4yNTIgMjQyLjU2MCwyNDAuNjgyIDI3NC40MDYsMjYwLjUyNyAyODAuNDQyIEMgMjY4Ljg2NCAyODIuOTc3LDI4MS41MzMgMjc5LjQwMSwyODIuMTMyIDI3NC4zNDQgQyAyODIuNDY3IDI3MS41MTcsMjgyLjAwNyAyNzEuMTg5LDI4MC4wNTIgMjcyLjg2MiBDIDI2OS4yMjAgMjgyLjEzNCwyNTUuNjg0IDI3Ni42NDcsMjU0LjI0NCAyNjIuNDAwIEMgMjUzLjkwMCAyNTguOTk1LDI1Mi44NDkgMjU5LjIyMywyNjkuNDIxIDI1OS4xMDUgTCAyODQuMjAwIDI1OS4wMDAgMjg0LjMzNiAyNTcuMDAwIEMgMjg1LjIzMSAyNDMuODI4LDI3NC43NTEgMjM1LjI4NiwyNjEuMjgzIDIzOC4yMTAgTTE1Ni4zODAgMjM4Ljc5MyBDIDE1Ni4zNjkgMjM4LjkwNywxNTYuMzQzIDI0OC4yNzAsMTU2LjMyMiAyNTkuNjAwIEwgMTU2LjI4NSAyODAuMjAwIDE1OS44NzYgMjgwLjMxNCBMIDE2My40NjcgMjgwLjQyOCAxNjMuNDM0IDI1OS41MzEgTCAxNjMuNDAwIDIzOC42MzMgMTU5LjkwMCAyMzguNjA5IEMgMTU3Ljk3NSAyMzguNTk2LDE1Ni4zOTEgMjM4LjY3OCwxNTYuMzgwIDIzOC43OTMgTTI2OS4xNjQgMjQxLjQyNiBDIDI3My40MDggMjQyLjY4NywyNzYuMjYzIDI0Ny4wNzcsMjc2LjQ5MCAyNTIuNjg5IEwgMjc2LjYwMCAyNTUuNDAwIDI2NS41MDAgMjU1LjUwNiBMIDI1NC40MDAgMjU1LjYxMyAyNTQuNDA1IDI1NC41MDYgQyAyNTQuNDQxIDI0NS45NzUsMjYxLjk4MSAyMzkuMjkzLDI2OS4xNjQgMjQxLjQyNiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2Y4ZjVmNSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggaWQ9InBhdGgxIiBkPSJNMTc2LjIwMCAyMi43MDAgQyAxNjMuNzg2IDM1LjE4NSwxNTEuODIzIDQ3LjIwMCwxNDkuNjE2IDQ5LjQwMCBDIDE0NC4zMzggNTQuNjYxLDU0LjM1MCAxNDQuNjUzLDQ5LjMwNCAxNDkuNzE3IEMgNDcuMTU3IDE1MS44NzIsMzUuMTg1IDE2My43ODksMjIuNzAwIDE3Ni4yMDEgQyAyLjU3OCAxOTYuMjA0LDAuMDAwIDE5OC45MDYsMC4wMDAgMTk5Ljk4OSBDIDAuMDAwIDIwMS4wNzAsMi4xNTMgMjAzLjM0MiwxOC42ODAgMjE5LjcwNiBDIDI4Ljk1NCAyMjkuODc4LDQ3LjgwOSAyNDguNzEyLDYwLjU4MCAyNjEuNTYwIEMgODkuODg4IDI5MS4wNDUsMTA4Ljk1NSAzMTAuMTEyLDEzOC40NDAgMzM5LjQyMCBDIDE1MS4yODggMzUyLjE5MSwxNzAuMTIyIDM3MS4wNDYsMTgwLjI5NCAzODEuMzIwIEMgMTk2LjU0MyAzOTcuNzMyLDE5OC45MzUgNDAwLjAwMCwxOTkuOTk0IDQwMC4wMDAgQyAyMDEuMDU0IDQwMC4wMDAsMjA0LjEzMiAzOTcuMDU3LDIyNS43NTkgMzc1LjM2MCBDIDIzOS4yNjcgMzYxLjgwOCwyNTAuNTAwIDM1MC41NDAsMjUwLjcyMCAzNTAuMzIwIEMgMjUxLjI0MyAzNDkuNzk3LDM0OS42NTkgMjUxLjM4MSwzNTAuMjYwIDI1MC43ODAgQyAzNTAuNTEzIDI1MC41MjcsMzYxLjgwOCAyMzkuMjY3LDM3NS4zNjAgMjI1Ljc1OSBDIDM5Ny4wMjcgMjA0LjE2Miw0MDAuMDAwIDIwMS4wNTMsNDAwLjAwMCAxOTkuOTk3IEMgNDAwLjAwMCAxOTguOTQwLDM5Ny4xMTMgMTk1LjkyMCwzNzYuMTAwIDE3NC45OTQgQyAzNjIuOTU1IDE2MS45MDMsMzUxLjY2MCAxNTAuNjUwLDM1MS4wMDAgMTQ5Ljk4OCBDIDM1MC4zNDAgMTQ5LjMyNSwzMjcuNzUwIDEyNi43MzMsMzAwLjgwMCA5OS43ODIgQyAyNzMuODUwIDcyLjgzMiwyNTEuNDY1IDUwLjQ0NiwyNTEuMDU1IDUwLjAzNSBDIDI1MC42NDYgNDkuNjI1LDIzOS4yNjAgMzguMTk5LDIyNS43NTUgMjQuNjQ1IEMgMjA0LjA1NSAyLjg2NywyMDEuMDU3IDAuMDAwLDE5OS45ODUgMC4wMDAgQyAxOTguOTE0IDAuMDAwLDE5Ni4xMzYgMi42NTEsMTc2LjIwMCAyMi43MDAgTTMwOS4yMDAgMTcyLjgyNSBDIDMwOS4zMTAgMTkwLjc0MSwzMDkuMzQyIDIwNS42MDksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjE4MyAyMDYuMTc5LDMwNy45NjQgMjA2LjMwOCwzMDUuNDcxIDIwNi4yNjQgTCAzMDEuODAwIDIwNi4yMDAgMzAxLjc4NSAyMDMuMDAwIEMgMzAxLjc3MSAxOTkuOTk3LDMwMS4wNTQgMTk4LjY3NSwzMDAuNDQ2IDIwMC41MzAgQyAyOTkuMDEyIDIwNC45MDEsMjg4LjgxNSAyMDguMzQyLDI4Mi4zMjAgMjA2LjY0NyBDIDI2NC43NjcgMjAyLjA2NywyNjQuMzc5IDE3MC42NjIsMjgxLjgwMCAxNjQuNTQyIEMgMjg3LjU4NSAxNjIuNTA5LDI5NS40MzkgMTY0LjE2NywyOTkuMTYyIDE2OC4yMDUgQyAzMDEuNzg0IDE3MS4wNTAsMzAxLjc1OSAxNzEuMTk0LDMwMS40NjIgMTU0Ljk3MSBDIDMwMS4yODYgMTQ1LjMzNCwzMDEuMzMyIDE0MC40MjMsMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjgyMiAxNDAuMjYwLDMwMy41NzggMTQwLjIxMSwzMDUuNTAyIDE0MC4yMjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA5LjIwMCAxNzIuODI1IE03My4xNTMgMTQ4LjcwMCBDIDczLjkxNSAxNTEuMzEzLDc1LjE1MiAxNTUuNzA1LDc2LjA1NSAxNTkuMDAwIEMgNzYuMjk2IDE1OS44ODAsNzYuNjI3IDE2MS4wNTAsNzYuNzkxIDE2MS42MDAgQyA3Ny4yMzEgMTYzLjA3OSw3Ny44MzQgMTY1LjE5MSw3OC4zMzMgMTY3LjAwMCBDIDc5LjAxOCAxNjkuNDg0LDgxLjIxMiAxNzYuODg2LDgxLjU5NSAxNzguMDAwIEMgODEuOTQxIDE3OS4wMDksODIuNDcyIDE4MC43NDEsODQuNzg0IDE4OC40MDAgQyA4NS40ODEgMTkwLjcxMCw4Ni4yMDMgMTkzLjA1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjU3NCAxOTQuMTUwLDg2LjgzNiAxOTQuOTQxLDg2Ljk3MiAxOTUuMzU3IEMgODcuNDAyIDE5Ni42NzcsODcuODEwIDE5NS42MjIsOTMuNzcwIDE3Ny44MDAgQyA5Ni4xMTkgMTcwLjc3Myw5Ni44MjUgMTY4LjUzOSw5OC44NTcgMTYxLjcwMCBDIDk5LjI2NiAxNjAuMzI1LDk5Ljk2MiAxNTcuOTg1LDEwMC40MDMgMTU2LjUwMCBDIDEwMC44NDUgMTU1LjAxNSwxMDEuNDA2IDE1My4wODAsMTAxLjY1MCAxNTIuMjAwIEMgMTAzLjQyNCAxNDUuNzkxLDEwMy4yNTEgMTQ2LjAwMCwxMDYuNzgxIDE0Ni4wMDAgTCAxMDkuODY0IDE0Ni4wMDAgMTExLjEzMyAxNDkuOTAwIEMgMTExLjgzMCAxNTIuMDQ1LDExMi45NjMgMTU1LjYwMCwxMTMuNjUwIDE1Ny44MDAgQyAxMTYuMDE4IDE2NS4zODMsMTI1LjkzNiAxOTQuODM4LDEyNi4yMjYgMTk1LjE1MCBDIDEyNi41MDYgMTk1LjQ0OSwxMjcuNjE5IDE5Mi40MDAsMTMwLjczNyAxODIuODAwIEMgMTMzLjQ3MCAxNzQuMzg1LDEzNC43NzYgMTcwLjA3NiwxMzYuODAwIDE2Mi44MDAgQyAxMzguMTM5IDE1Ny45ODUsMTM5LjYzNiAxNTIuNTI1LDE0MC40NDcgMTQ5LjUwMCBMIDE0MS4zODUgMTQ2LjAwMCAxNDQuNTM4IDE0Ni4wMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ3LjQ4NiAxNDcuMTAwIEMgMTQ3LjM3MyAxNDcuNzA1LDE0Mi44OTMgMTYxLjI1MCwxMzcuNTMwIDE3Ny4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTI0LjQwNSAyMDYuMjAwIEwgMTIxLjAzMSAyMDYuMjAwIDEyMC4zNzEgMjA0LjIwMCBDIDEyMC4wMDkgMjAzLjEwMCwxMTkuMzI3IDIwMC45NDAsMTE4Ljg1NiAxOTkuNDAwIEMgMTE1Ljk3MiAxODkuOTczLDExMC40MTggMTczLjA4MiwxMDcuMjE5IDE2NC4wMDkgQyAxMDYuMzI4IDE2MS40ODQsMTA1LjYwMCAxNTkuMzY5LDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU3LjAwMywxMDMuMzQwIDE2My4wMTIsOTYuNzk4IDE4Mi43MDkgTCA4OC45OTYgMjA2LjIwMCA4NS42NTMgMjA2LjIwMCBMIDgyLjMxMSAyMDYuMjAwIDgxLjc4OCAyMDQuODAwIEMgODEuNTAxIDIwNC4wMzAsODAuOTEwIDIwMi4yMzAsODAuNDc1IDIwMC44MDAgQyA4MC4wNDAgMTk5LjM3MCw3OS4xMTAgMTk2LjMxMCw3OC40MDkgMTk0LjAwMCBDIDc3LjcwNyAxOTEuNjkwLDc2LjgxMCAxODguODEwLDc2LjQxNSAxODcuNjAwIEMgNzYuMDIxIDE4Ni4zOTAsNzUuMjk3IDE4NC4wNTAsNzQuODA2IDE4Mi40MDAgQyA3My43MzUgMTc4Ljc5Myw3MS44MDQgMTcyLjYyNyw3MC43OTkgMTY5LjYwMCBDIDcwLjM5NyAxNjguMzkwLDY4Ljk2MCAxNjMuODkwLDY3LjYwNSAxNTkuNjAwIEMgNjYuMjUxIDE1NS4zMTAsNjQuNzk1IDE1MC43OTgsNjQuMzcxIDE0OS41NzMgQyA2My4wOTEgMTQ1Ljg3Niw2Mi45NjYgMTQ2LjAwMCw2Ny45ODMgMTQ2LjAwMCBMIDcyLjM2NiAxNDYuMDAwIDczLjE1MyAxNDguNzAwIE0xNzUuNjAwIDE2NC41MTggQyAxODIuNTkwIDE2Ny4wNzIsMTgzLjM2OSAxNjkuMzg4LDE4My4yNDcgMTg3LjI1MyBMIDE4My4xNTggMjAwLjMwNiAxODQuMDc5IDIwMS4zMzEgQyAxODQuNjUzIDIwMS45NjksMTg1LjY3NiAyMDIuNDgxLDE4Ni43OTcgMjAyLjY4OSBDIDE5MS40MjggMjAzLjU1MiwxODcuNDM2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTc5LjQwNiAyMDYuNDAwLDE3Ni44MDAgMjA0LjYzOCwxNzYuODAwIDIwMy4xNTkgQyAxNzYuODAwIDIwMi4wOTgsMTc1Ljc0MyAyMDIuMjA5LDE3NC4zMDQgMjAzLjQxOSBDIDE2NS4yMTYgMjExLjA2NywxNTEuODUwIDIwNy4yNzcsMTUxLjI4MCAxOTYuODkwIEMgMTUwLjgzOCAxODguODI1LDE1NC4wMjkgMTg1Ljk3OCwxNjYuMzU1IDE4My40NDMgQyAxNzAuMTgxIDE4Mi42NTcsMTczLjk2MSAxODEuNjk1LDE3NC43NTUgMTgxLjMwNiBMIDE3Ni4yMDAgMTgwLjYwMCAxNzYuMTQzIDE3Ny4xNjMgQyAxNzYuMDMyIDE3MC41MjUsMTczLjQzMSAxNjcuODE1LDE2Ny4yMDAgMTY3Ljg0NCBDIDE2Mi45ODMgMTY3Ljg2NCwxNjAuODIwIDE2OC43NDIsMTU3Ljk3MiAxNzEuNTg5IEMgMTU1LjIyMSAxNzQuMzQxLDE1NC43MzAgMTc0LjI2MywxNTQuODgxIDE3MS4xMDAgTCAxNTUuMDAwIDE2OC42MDAgMTU3LjIwMCAxNjcuMTI3IEMgMTYxLjkwNyAxNjMuOTc0LDE3MC42OTkgMTYyLjcyOCwxNzUuNjAwIDE2NC41MTggTTIxMS4zMjggMTYzLjk4NiBDIDIxNi44MDAgMTY0Ljg4MiwyMTkuMjU1IDE2Ny4xNTQsMjE3LjE1OCAxNjkuMzgwIEMgMjE2Ljk2MSAxNjkuNTg5LDIxNi44MDAgMTcwLjEzOCwyMTYuODAwIDE3MC42MDAgQyAyMTYuODAwIDE3Mi40NDAsMjE1Ljk2OCAxNzIuNDM0LDIxMy44NDggMTcwLjU4MCBDIDIwNy4wMjggMTY0LjYxNCwxOTkuMDAzIDE2Ni4zNzEsMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMCAxNzcuNTI5LDIwMS4wNjAgMTc5LjY4NywyMDYuMDAwIDE4MS4xNjQgQyAyMTQuMzIzIDE4My42NTIsMjE2LjkyNiAxODUuMTEzLDIxOC41MzYgMTg4LjIwMCBDIDIyMy44NDggMTk4LjM4MiwyMTEuMjg5IDIxMC41ODcsMTk5LjM2MCAyMDYuODM1IEMgMTk4LjcyMiAyMDYuNjM1LDE5Ny4zNDMgMjA2LjIzNSwxOTYuMjk1IDIwNS45NDcgQyAxOTUuMjQ4IDIwNS42NTgsMTkzLjkyMyAyMDUuMDUwLDE5My4zNTEgMjA0LjU5NCBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMDExIDIwMS4xODMgQyAxOTMuMzk1IDE5OS43NjIsMTkzLjk2NyAxOTguMTgyLDE5NC4yODMgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTUuNjM5IDE5Ny42NzEgQyAyMDIuNDI0IDIwNS43MjQsMjEyLjQ1MCAyMDUuMDQ5LDIxMy40NjYgMTk2LjQ3MiBDIDIxMy45NzYgMTkyLjE2OCwyMTEuMzEyIDE4OS44ODgsMjAzLjI5MyAxODcuNzY1IEMgMTk2LjI0NSAxODUuODk4LDE5My40ODQgMTgyLjU5OCwxOTMuNDM0IDE3NS45ODEgQyAxOTMuMzY1IDE2Ni45NDAsMjAwLjQzMyAxNjIuMjAyLDIxMS4zMjggMTYzLjk4NiBNMjUwLjUyOCAxNjQuMTk4IEMgMjU4LjUzMyAxNjYuMjgzLDI2My4yMDAgMTczLjMzMiwyNjIuNzIyIDE4Mi42MTggTCAyNjIuNjAwIDE4NS4wMDAgMjQ3LjcwMCAxODUuMTA1IEwgMjMyLjgwMCAxODUuMjEwIDIzMi44MDAgMTg3LjU4NSBDIDIzMi44MDAgMjAxLjY1MSwyNDYuNTkwIDIwNy44OTQsMjU4LjExOSAxOTkuMDQ5IEMgMjYwLjQwNCAxOTcuMjk2LDI2MC44MDAgMTk3LjQzMSwyNjAuODAwIDE5OS45NjIgQyAyNjAuODAwIDIwMi4zNjMsMjU5LjYyNiAyMDMuNDIxLDI1NC44MDAgMjA1LjM3MCBDIDIzNi42NzAgMjEyLjY5MiwyMjAuMTg3IDE5Ny42MTIsMjI1LjMyMiAxNzguNDAwIEMgMjI4LjI4MyAxNjcuMzE5LDIzOS4xMDQgMTYxLjIyMiwyNTAuNTI4IDE2NC4xOTggTTM0My44MDAgMTY0LjgzNCBDIDM0OS44MDAgMTY3LjA3OSwzNTAuNjAwIDE2OS42OTgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAyMDIuNjQ4LDM1MC40NTkgMjAyLjAwNCwzNTQuMDAwIDIwMi42NzggQyAzNTguNjM4IDIwMy41NjIsMzU0LjcxNSAyMDYuNDA1LDM0OC44NjIgMjA2LjQwMSBDIDM0Ni43OTcgMjA2LjQwMCwzNDUuMTI3IDIwNS4zNTQsMzQ0LjQwNCAyMDMuNjEwIEMgMzQzLjc2NiAyMDIuMDY4LDM0My42MjMgMjAyLjA4MywzNDAuODM1IDIwMy45NzYgQyAzMzAuNjA3IDIxMC45MjIsMzE4Ljc0MyAyMDYuODY4LDMxOC42NjAgMTk2LjQwMCBDIDMxOC41OTYgMTg4LjIzMiwzMjEuNTYzIDE4NS44MDMsMzM0LjgwMCAxODMuMTg2IEMgMzQ0LjQ1NCAxODEuMjc3LDM0NS4yMTMgMTgwLjM0OCwzNDIuOTY2IDE3My4xOTUgQyAzNDAuODYxIDE2Ni40OTYsMzMwLjk0NSAxNjUuNjU1LDMyNS4xOTEgMTcxLjY4OCBDIDMyMi42OTMgMTc0LjMwNywzMjIuMDAwIDE3NC4yNDAsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNjUuNTI2LDMzNS4xMjAgMTYxLjU4NywzNDMuODAwIDE2NC44MzQgTTI0MS45OTcgMTY3LjE3NCBDIDIzNy4xNTcgMTY4LjY0NiwyMzIuODAwIDE3NS4wMTgsMjMyLjgwMCAxODAuNjI2IEwgMjMyLjgwMCAxODEuNjEzIDI0My45MDAgMTgxLjUwNiBMIDI1NS4wMDAgMTgxLjQwMCAyNTUuMTI0IDE3OS40NTEgQyAyNTUuNjIxIDE3MS42MzQsMjQ4LjY3OSAxNjUuMTQxLDI0MS45OTcgMTY3LjE3NCBNMjg2LjM5NyAxNjcuOTUwIEMgMjc0LjAyNSAxNzIuMDA3LDI3My4yMzQgMTk3LjUwNCwyODUuMzE5IDIwMi43MTcgQyAyODguODE0IDIwNC4yMjUsMjk0LjM0NyAyMDIuNzA5LDI5Ny4zMTQgMTk5LjQzMSBDIDMwMy4xMTAgMTkzLjAyNiwzMDIuOTMzIDE3NS42NjMsMjk3LjAxOCAxNzAuNDcwIEMgMjk0LjI1MiAxNjguMDQxLDI4OS41MzQgMTY2LjkyMSwyODYuMzk3IDE2Ny45NTAgTTE3MS42MDAgMTg1LjYyNCBDIDE2MS4zODQgMTg3Ljg1MSwxNTguMTQyIDE5MC42MTUsMTU5LjAwMyAxOTYuMzYyIEMgMTU5Ljk5OSAyMDIuOTk5LDE2Ni4yMzUgMjA1LjAxMywxNzIuNzgyIDIwMC44MTEgQyAxNzYuMDU3IDE5OC43MTAsMTc2LjE5NCAxOTguMzI0LDE3Ni4xOTcgMTkxLjIwOCBDIDE3Ni4yMDAgMTg0LjA0NywxNzYuNjAxIDE4NC41MzQsMTcxLjYwMCAxODUuNjI0IE0zNDAuNjAwIDE4NS4yNjEgQyAzMzMuNjAyIDE4Ni45NTUsMzMyLjAyMSAxODcuNDAyLDMzMC43MjQgMTg4LjA1MiBDIDMyMi4xNTEgMTkyLjM0OSwzMjYuNjM0IDIwNS4wMjAsMzM1LjkyMSAyMDIuNzM5IEMgMzQyLjAxNiAyMDEuMjQzLDM0My42MzkgMTk4LjczMiwzNDMuNTA0IDE5MS4wMDUgQyAzNDMuMzg5IDE4NC4zNDksMzQzLjQ5NSAxODQuNTYxLDM0MC42MDAgMTg1LjI2MSBNMTYyLjk0NSAyMTkuOTE5IEMgMTY2LjI1OCAyMjIuODY2LDE2NC4zNDEgMjI4LjAwMCwxNTkuOTI3IDIyOC4wMDAgQyAxNTUuMDQ5IDIyOC4wMDAsMTUzLjM3NSAyMjEuNjM0LDE1Ny42NzkgMjE5LjQ1MCBDIDE1OS4yNDMgMjE4LjY1NywxNjEuNzc5IDIxOC44ODMsMTYyLjk0NSAyMTkuOTE5IE0xNDcuNDAwIDIyMi44MDAgTCAxNDcuNDAwIDIyNS40MDAgMTQ2LjAwMCAyMjUuMzAyIEMgMTQ1LjIzMCAyMjUuMjQ3LDE0MS4yNDkgMjI1LjA5MSwxMzcuMTUzIDIyNC45NTUgTCAxMjkuNzA3IDIyNC43MDYgMTI5LjQyNiAyMjYuMjAyIEMgMTI5LjI3MiAyMjcuMDI1LDEyOS4xNzEgMjM5LjMzMSwxMjkuMjAyIDI1My41NDkgQyAxMjkuMjMzIDI2Ny43NjcsMTI5LjI0NiAyNzkuNjMxLDEyOS4yMzAgMjc5LjkxNCBDIDEyOS4yMDcgMjgwLjMwNSwxMjguMjIzIDI4MC40MDEsMTI1LjExNCAyODAuMzE0IEwgMTIxLjAyOSAyODAuMjAwIDEyMS4xNTIgMjUyLjQ1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMTMuNTM4IDIyNC45NTIgQyAxMDkuMjgyIDIyNS4wODksMTA1LjE3MCAyMjUuMjQ2LDEwNC40MDAgMjI1LjMwMCBMIDEwMy4wMDAgMjI1LjQwMCAxMDIuODgyIDIyMi42OTcgTCAxMDIuNzYzIDIxOS45OTMgMTI1LjA4MiAyMjAuMDk3IEwgMTQ3LjQwMCAyMjAuMjAwIDE0Ny40MDAgMjIyLjgwMCBNMjAzLjc0MiAyMzkuMDEwIEMgMjA2LjAyOCAyNDAuMTc2LDIwOC4wNzcgMjQyLjE5OSwyMDkuMDUwIDI0NC4yNDkgQyAyMDkuODU0IDI0NS45NDQsMjA5Ljk0MCAyNDUuOTMzLDIxMS40MDAgMjQzLjk1OCBDIDIxOC4wNTAgMjM0Ljk2MywyMzIuMjc5IDIzNS44NzEsMjM2LjA1MiAyNDUuNTMwIEMgMjM2LjkxNiAyNDcuNzQ1LDIzNi45MzcgMjQ4LjE5MiwyMzYuOTEyIDI2NC4wMDAgTCAyMzYuODg2IDI4MC4yMDAgMjMzLjI1NyAyODAuMzE1IEwgMjI5LjYyOSAyODAuNDMwIDIyOS43MTQgMjY1LjUxNSBDIDIyOS44MDYgMjQ5LjQ5NSwyMjkuNzMzIDI0OC43ODIsMjI3LjcyNyAyNDYuMDk2IEMgMjI2LjE4MCAyNDQuMDI0LDIyMy44ODIgMjQzLjA0NSwyMjAuNjAwIDI0My4wNjAgQyAyMTIuNDA1IDI0My4wOTYsMjEwLjIwOSAyNDguOTQ2LDIxMC40MTIgMjcwLjIwMCBDIDIxMC40NjEgMjc1LjI2MCwyMTAuNDc4IDI3OS42MjUsMjEwLjQ1MCAyNzkuOTAwIEMgMjEwLjQxNCAyODAuMjU5LDIwOS4zODcgMjgwLjQwMCwyMDYuODAwIDI4MC40MDAgTCAyMDMuMjAwIDI4MC40MDAgMjAzLjE5NiAyNzguMTAwIEMgMjAzLjE5MyAyNzYuODM1LDIwMy40MDIgMjcxLjQxOSwyMDMuNjU5IDI2Ni4wNjQgQyAyMDQuNTMzIDI0Ny45MDQsMjAyLjc1OCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDE4Ni40MDAgMjQzLjIwMCwxODQuNjIwIDI0Ny4zNTcsMTg0LjcxMCAyNjcuMzAwIEwgMTg0Ljc2OSAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE3Ny40MDAgMjgwLjQwMCAxNzcuNDU1IDI1OS41MDQgTCAxNzcuNTExIDIzOC42MDggMTgwLjY1NSAyMzguNTk2IEMgMTg0LjMzMCAyMzguNTgyLDE4NC4zODYgMjM4LjYzMSwxODQuMzk0IDI0MS45MDAgQyAxODQuNDAxIDI0NC45MjQsMTg0LjMwNyAyNDQuOTEzLDE4Ny4yNzUgMjQyLjIyOCBDIDE5Mi4zNzggMjM3LjYwOSwxOTguNjEwIDIzNi4zOTIsMjAzLjc0MiAyMzkuMDEwIE0yNzEuNTY1IDIzOC4yMTcgQyAyNzkuNzA5IDI0MC4xMzYsMjg0Ljk1OCAyNDcuODU1LDI4NC4zMzYgMjU3LjAwMCBMIDI4NC4yMDAgMjU5LjAwMCAyNjkuNDIxIDI1OS4xMDUgQyAyNTIuODQ5IDI1OS4yMjMsMjUzLjkwMCAyNTguOTk1LDI1NC4yNDQgMjYyLjQwMCBDIDI1NS42ODQgMjc2LjY0NywyNjkuMjIwIDI4Mi4xMzQsMjgwLjA1MiAyNzIuODYyIEMgMjgyLjAwNyAyNzEuMTg5LDI4Mi40NjcgMjcxLjUxNywyODIuMTMyIDI3NC4zNDQgQyAyODEuNTMzIDI3OS40MDEsMjY4Ljg2NCAyODIuOTc3LDI2MC41MjcgMjgwLjQ0MiBDIDI1MS4yNjkgMjc3LjYyNiwyNDYuMjE5IDI3MC4yNzYsMjQ2LjIwOCAyNTkuNjAwIEMgMjQ2LjE5MyAyNDQuMjE0LDI1Ny4yOTUgMjM0Ljg1MywyNzEuNTY1IDIzOC4yMTcgTTE2My40MzQgMjU5LjUzMSBMIDE2My40NjcgMjgwLjQyOCAxNTkuODc2IDI4MC4zMTQgTCAxNTYuMjg1IDI4MC4yMDAgMTU2LjMyMiAyNTkuNjAwIEMgMTU2LjM0MyAyNDguMjcwLDE1Ni4zNjkgMjM4LjkwNywxNTYuMzgwIDIzOC43OTMgQyAxNTYuMzkxIDIzOC42NzgsMTU3Ljk3NSAyMzguNTk2LDE1OS45MDAgMjM4LjYwOSBMIDE2My40MDAgMjM4LjYzMyAxNjMuNDM0IDI1OS41MzEgTTI2Mi44NjYgMjQxLjU2MyBDIDI1OC4zOTEgMjQzLjEwOSwyNTQuNDI4IDI0OS4xNzEsMjU0LjQwNSAyNTQuNTA2IEwgMjU0LjQwMCAyNTUuNjEzIDI2NS41MDAgMjU1LjUwNiBMIDI3Ni42MDAgMjU1LjQwMCAyNzYuNDkwIDI1Mi42ODkgQyAyNzYuMTQ2IDI0NC4xNzYsMjY5Ljk1MCAyMzkuMTE3LDI2Mi44NjYgMjQxLjU2MyAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMTQyNCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", Pg = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMTg1LjAwMCAxMjcuMDY1IEMgMTgwLjY3MSAxMjkuNzQzLDE3Mi4zNjcgMTMzLjMzNSwxNjYuMjAwIDEzNS4xOTYgQyAxNjAuNzIwIDEzNi44NTAsMTU5LjQ1MiAxMzcuNTUwLDE2MC45MTkgMTM4LjExNCBDIDE2MS43NzEgMTM4LjQ0MSwxNjcuNDgwIDEzNy43MDIsMTcwLjYwMCAxMzYuODYxIEMgMTcyLjE0MCAxMzYuNDQ2LDE3My42NzAgMTM2LjAzNywxNzQuMDAwIDEzNS45NTMgQyAxNzQuNTE1IDEzNS44MjIsMTc0LjYwMCAxMzYuNzEwLDE3NC42MDAgMTQyLjIwMCBMIDE3NC42MDAgMTQ4LjYwMCAxNjguNjAwIDE0OC44MDAgTCAxNjIuNjAwIDE0OS4wMDAgMTYyLjYwMCAxNTAuMDAwIEwgMTYyLjYwMCAxNTEuMDAwIDE2OC41MDAgMTUxLjExMSBDIDE3Mi44NTYgMTUxLjE5MiwxNzQuNDAwIDE1MS4zNTEsMTc0LjQwMCAxNTEuNzE2IEMgMTc0LjQwMCAxNTQuNzY4LDE2OC4yNjEgMTY4Ljc4NCwxNjMuNDQ0IDE3Ni43MjcgQyAxNjEuMzE3IDE4MC4yMzYsMTYxLjA1MiAxODAuODM0LDE2MS4xNTMgMTgxLjkwMCBDIDE2MS4zOTYgMTg0LjQ3MiwxNjguMTQzIDE3Ni42MTEsMTcyLjIzMyAxNjguOTg5IEMgMTczLjM1MiAxNjYuOTA1LDE3NC4zODcgMTY1LjMyMCwxNzQuNTMzIDE2NS40NjcgQyAxNzQuNjgwIDE2NS42MTMsMTc0LjgwMCAxNzMuNTg5LDE3NC44MDAgMTgzLjE5MCBDIDE3NC44MDAgMjAzLjQyNCwxNzQuOTg3IDIwNC4yNjcsMTc4LjcwOCAyMDAuODAwIEwgMTc5LjYwMCAxOTkuOTY5IDE3OS42MDAgMTgyLjU4NCBDIDE3OS42MDAgMTY4LjY0NCwxNzkuNzAyIDE2NS4yMDAsMTgwLjExNyAxNjUuMjAwIEMgMTgwLjc5MiAxNjUuMjAwLDE4My41NDYgMTY4LjA5MywxODUuMTYzIDE3MC41MDAgQyAxODcuMTIyIDE3My40MTcsMTg5LjcxNiAxNzMuMTQwLDE4OS42NzIgMTcwLjAxNyBDIDE4OS42MzEgMTY3LjA0NCwxODYuNzY1IDE2NC42NDAsMTgxLjA4OSAxNjIuODE2IEwgMTc5LjU3OCAxNjIuMzMxIDE3OS42ODkgMTU2Ljg2NSBMIDE3OS44MDAgMTUxLjQwMCAxODcuMDYxIDE1MS4yOTEgQyAxOTYuMjk5IDE1MS4xNTMsMTk2Ljc1OCAxNTAuNzA0LDE5MS42MDEgMTQ2Ljg1NyBDIDE4OC4yMjIgMTQ0LjMzNiwxODguMjI3IDE0NC4zMzYsMTg1LjgwMCAxNDYuODAwIEMgMTgzLjkyOSAxNDguNjk5LDE4My43MjQgMTQ4LjgwMCwxODEuNzE1IDE0OC44MDAgTCAxNzkuNjAwIDE0OC44MDAgMTc5LjYwMCAxNDEuNDYxIEwgMTc5LjYwMCAxMzQuMTIyIDE4MS41MDAgMTMzLjQ5MiBDIDE4Mi41NDUgMTMzLjE0NiwxODQuNjYwIDEzMi4zOTYsMTg2LjIwMCAxMzEuODI2IEMgMTg3Ljc4NSAxMzEuMjM5LDE4OS40MzQgMTMwLjg3OCwxOTAuMDAwIDEzMC45OTQgQyAxOTIuNjQ4IDEzMS41MzYsMTkyLjM5MCAxMjkuODcxLDE4OS40NTQgMTI3LjQ2NSBDIDE4Ny4zNzkgMTI1Ljc2NSwxODcuMTM3IDEyNS43NDMsMTg1LjAwMCAxMjcuMDY1IE0yMjAuMDAwIDEyOC40NTIgQyAyMTYuMzM5IDEyOS45ODAsMjA5LjA4NiAxMzIuNTU4LDIwNi42MDAgMTMzLjIxNCBDIDIwNS45NDAgMTMzLjM4OCwyMDQuNDEwIDEzMy44MDMsMjAzLjIwMCAxMzQuMTM1IEMgMTk4Ljg4MSAxMzUuMzIzLDE5NC45NjEgMTM2LjMxMSwxOTIuNDc2IDEzNi44MzkgQyAxODkuODkwIDEzNy4zODksMTg4LjkxNiAxMzguMDE4LDE4OS40MTEgMTM4LjgxOCBDIDE4OS43MTkgMTM5LjMxNiwxOTIuNzU3IDEzOS4xMTcsMTk5LjAwMCAxMzguMTkwIEMgMjAwLjk4MCAxMzcuODk2LDIwMy40MTAgMTM3LjUzOCwyMDQuNDAwIDEzNy4zOTQgQyAyMDkuMTU5IDEzNi43MDIsMjE2LjgwOCAxMzUuMDM2LDIyMS43OTkgMTMzLjYwMyBDIDIyMy4zMzggMTMzLjE2MiwyMjUuNjIxIDEzMi44MDAsMjI2Ljg3MyAxMzIuODAwIEMgMjMyLjAxMCAxMzIuODAwLDIzMi4yMzQgMTMxLjg2NywyMjcuODA3IDEyOC45MDAgQyAyMjQuMTIwIDEyNi40MjksMjI0Ljc1OSAxMjYuNDY2LDIyMC4wMDAgMTI4LjQ1MiBNOTQuODAwIDE0OS43NTEgQyA5NC44MDAgMTcwLjMzMyw5NC43OTIgMTcwLjI1NSw5Ni44NzQgMTY5LjE3NiBDIDk4LjU4NSAxNjguMjkxLDk5LjIwMCAxNjcuNDk2LDk5LjIwMCAxNjYuMTcxIEMgOTkuMjAwIDE2My41MTIsOTguOTI0IDE2My42MDAsMTA3LjI0MyAxNjMuNjAwIEwgMTE0LjgwMCAxNjMuNjAwIDExNC44MDAgMTY5LjgwMCBMIDExNC44MDAgMTc2LjAwMCA5Ny44MjQgMTc2LjAwMCBDIDgwLjM5NiAxNzYuMDAwLDgwLjEwMSAxNzYuMDI3LDgwLjYwMCAxNzcuNTk5IEMgODAuODQ0IDE3OC4zNzAsODEuMzA2IDE3OC4zOTQsOTcuNzI2IDE3OC40OTYgTCAxMTQuNjAwIDE3OC42MDAgMTE0LjgxNyAxODkuMjAwIEMgMTE0LjkzNiAxOTUuMDMwLDExNS4wNzEgMTk5Ljg0NSwxMTUuMTE3IDE5OS45MDAgQyAxMTUuNDQ4IDIwMC4yOTcsMTE3LjQ4MSAxOTkuODU0LDExOC40MzEgMTk5LjE3OCBMIDExOS41ODYgMTk4LjM1NSAxMTkuNjkzIDE4OC40NzggTCAxMTkuODAwIDE3OC42MDAgMTM3LjgwMCAxNzguNDAwIEwgMTU1LjgwMCAxNzguMjAwIDE1NS45MDggMTc3LjIwMCBDIDE1Ni4wMDQgMTc2LjMxMSwxNTEuMTEzIDE3Mi4wNDMsMTQ5LjA5MyAxNzEuMjUzIEMgMTQ4Ljg4NiAxNzEuMTcyLDE0Ny42MDMgMTcyLjIxMCwxNDYuMjQxIDE3My41NTkgTCAxNDMuNzY2IDE3Ni4wMTIgMTMxLjc4MyAxNzUuOTA2IEwgMTE5LjgwMCAxNzUuODAwIDExOS42OTAgMTY5LjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMjcuODkwIDE2My42OTIgTCAxMzYuMjAwIDE2My44MDAgMTM2LjMzMCAxNjUuMzk1IEMgMTM2LjU1NiAxNjguMTY4LDEzNy45NjUgMTY4LjQ5MSwxNDAuMzAwIDE2Ni4zMDQgTCAxNDEuMjAwIDE2NS40NjEgMTQxLjIwMCAxNTAuOTMwIEMgMTQxLjIwMCAxMzguNTQ2LDE0MS4yODUgMTM2LjQwMCwxNDEuNzc2IDEzNi40MDAgQyAxNDMuNjQwIDEzNi40MDAsMTQyLjg2NCAxMzQuNDQ2LDE0MC4yMDIgMTMyLjQzNiBDIDEzNy42MTEgMTMwLjQ4MCwxMzcuNDkyIDEzMC40NjcsMTM2LjQwMCAxMzIuMDAwIEwgMTM1LjU0NiAxMzMuMjAwIDExNy42NTEgMTMzLjIwMCBMIDk5Ljc1NyAxMzMuMjAwIDk3Ljg2NCAxMzIuMDAwIEMgOTQuNTU1IDEyOS45MDEsOTQuODAwIDEyOC40NzksOTQuODAwIDE0OS43NTEgTTI1NS44MDQgMTM0LjA2NSBDIDI1NS4yMTggMTM2LjQ1OSwyNTUuNzg4IDE5OC44MjIsMjU2LjQwMCAxOTkuMjA2IEMgMjU4LjU2NSAyMDAuNTYzLDI2MC40MDAgMTk4LjE1OCwyNjAuNDAwIDE5My45NjMgQyAyNjAuNDAwIDE5Mi4wMzksMjYwLjUwOSAxOTAuMTgxLDI2MC42NDMgMTg5LjgzMyBDIDI2MC44NjAgMTg5LjI2NiwyNjMuMjc4IDE4OS4yMDAsMjgzLjg0MyAxODkuMjAwIEwgMzA2LjgwMCAxODkuMjAwIDMwNi44MDAgMTkyLjE3MSBDIDMwNi44MDAgMTk2LjMzOCwzMDguMTc0IDE5Ny4zNjEsMzEwLjcwMCAxOTUuMDc1IEwgMzExLjYwMCAxOTQuMjYxIDMxMS42MDAgMTY3LjY3NiBMIDMxMS42MDAgMTQxLjA5MiAzMTIuNTk2IDE0MC4xNjkgQyAzMTMuODc1IDEzOC45ODQsMzEzLjYzMyAxMzguNDIzLDMxMC45ODMgMTM2LjQyMiBDIDMwOC40MTQgMTM0LjQ4MiwzMDcuOTE2IDEzNC40MzIsMzA2LjgwMCAxMzYuMDAwIEwgMzA1Ljk0NiAxMzcuMjAwIDI4My41MjggMTM3LjIwMCBMIDI2MS4xMTEgMTM3LjIwMCAyNTkuMjU2IDEzNS42ODkgQyAyNTUuODU5IDEzMi45MjQsMjU2LjA2MCAxMzMuMDE5LDI1NS44MDQgMTM0LjA2NSBNMTM2LjIwMCAxNDEuMjAwIEwgMTM2LjIwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDk5LjQwMCAxNDYuNjAwIDk5LjI4NyAxNDEuNjU2IEMgOTkuMTMzIDEzNC44ODEsOTYuOTM5IDEzNS41NzQsMTE4LjE1MiAxMzUuNjk2IEwgMTM2LjIwMCAxMzUuODAwIDEzNi4yMDAgMTQxLjIwMCBNMjI3LjQ3NCAxNDAuNTAwIEMgMjI1LjQyOCAxNDYuMjg1LDIyNC4yNjIgMTQ5LjA5OSwyMjIuMjU2IDE1My4wOTMgQyAyMTkuMjczIDE1OS4wMzUsMjE5LjQ2NyAxNjEuMjk3LDIyMi42NjggMTU3LjkwMCBDIDIyNC41MjEgMTU1LjkzNCwyMzEuMjAwIDE0NS42NTEsMjMxLjIwMCAxNDQuNzY1IEMgMjMxLjIwMCAxNDQuNTcxLDIzMi4wMDUgMTQ0LjIwOSwyMzIuOTg4IDE0My45NjEgQyAyMzYuNDk3IDE0My4wNzgsMjM2LjM1NCAxNDIuMTkxLDIzMi4zODAgMTQwLjE5MCBDIDIyOC43MzMgMTM4LjM1MywyMjguMjIyIDEzOC4zODUsMjI3LjQ3NCAxNDAuNTAwIE0yODAuOTU3IDE0MC4yMzMgQyAyODEuMDkxIDE0MC41ODEsMjgxLjIwMCAxNDUuMzQ3LDI4MS4yMDAgMTUwLjgyNSBMIDI4MS4yMDAgMTYwLjc4NSAyODAuMzAwIDE2MS4wMDUgQyAyNzkuODA1IDE2MS4xMjYsMjc1LjE3MCAxNjEuMTc1LDI3MC4wMDAgMTYxLjExMyBMIDI2MC42MDAgMTYxLjAwMCAyNjAuNDg3IDE1MS4yMDAgQyAyNjAuNDI1IDE0NS44MTAsMjYwLjQ3NCAxNDAuOTk1LDI2MC41OTUgMTQwLjUwMCBMIDI2MC44MTUgMTM5LjYwMCAyNzAuNzY1IDEzOS42MDAgQyAyNzkuNDY5IDEzOS42MDAsMjgwLjc0NSAxMzkuNjc5LDI4MC45NTcgMTQwLjIzMyBNMzA2LjcwNyAxNTAuMzAwIEwgMzA2LjYwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDI4Ni4yMDAgMTYxLjAwMCAyODYuMDkzIDE1MC4zMDAgTCAyODUuOTg3IDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMzA2LjgxMyAxMzkuNjAwIDMwNi43MDcgMTUwLjMwMCBNMjA2Ljk4NiAxNDEuMjIzIEMgMjA2Ljg0MiAxNDEuNDU2LDIwNy41NDkgMTQyLjg3NSwyMDguNTU3IDE0NC4zNzcgQyAyMTAuNDMwIDE0Ny4xNjksMjExLjY0NSAxNDkuNjY2LDIxMi4xNjggMTUxLjgwMCBDIDIxMy4wNTAgMTU1LjM5OCwyMTYuODAwIDE1NS4xNjksMjE2LjgwMCAxNTEuNTE3IEMgMjE2LjgwMCAxNDcuMzgxLDIwOC41MzcgMTM4LjcxMywyMDYuOTg2IDE0MS4yMjMgTTE5NS4zMDAgMTQzLjQ4MyBDIDE5NC40NzggMTQzLjc4NSwxOTQuNzIyIDE0NC41ODksMTk2LjE5NiAxNDYuNDQ0IEMgMTk2Ljk2NCAxNDcuNDEwLDE5Ny41OTQgMTQ4LjMzNywxOTcuNTk2IDE0OC41MDQgQyAxOTcuNTk4IDE0OC42NzIsMTk3LjkzOSAxNDkuNTcyLDE5OC4zNTMgMTUwLjUwNCBDIDE5OC43NjcgMTUxLjQzNywxOTkuMzM3IDE1Mi44MzAsMTk5LjYyMCAxNTMuNjAwIEMgMjAxLjAxNyAxNTcuNDAyLDIwNC4wMDAgMTU2Ljk3MCwyMDQuMDAwIDE1Mi45NjYgQyAyMDQuMDAwIDE0OS4xMTcsMTk3Ljk0MSAxNDIuNTEyLDE5NS4zMDAgMTQzLjQ4MyBNMTM2LjIwOCAxNTAuMTAwIEMgMTM2LjMzMSAxNTAuNTk1LDEzNi4zNzkgMTUzLjI1MCwxMzYuMzE2IDE1Ni4wMDAgTCAxMzYuMjAwIDE2MS4wMDAgMTE4LjYwMCAxNjEuMTExIEMgMTA4LjkyMCAxNjEuMTcyLDEwMC41OTUgMTYxLjEyNCwxMDAuMTAwIDE2MS4wMDMgQyA5OS4wNDQgMTYwLjc0Nyw5OC42NzEgMTUwLjY4OSw5OS42ODAgMTQ5LjY4MCBDIDEwMC4wMzkgMTQ5LjMyMSwxMDQuNjc0IDE0OS4yMDAsMTE4LjA3MiAxNDkuMjAwIEwgMTM1Ljk4NSAxNDkuMjAwIDEzNi4yMDggMTUwLjEwMCBNMjA2LjU4MiAxNTkuNzA0IEMgMjA2LjQ3NyAxNTkuOTc3LDIwNi40MzkgMTY5LjIwMCwyMDYuNDk2IDE4MC4yMDAgTCAyMDYuNjAwIDIwMC4yMDAgMjA3Ljk1NCAyMDAuMTM1IEMgMjA5LjgzMCAyMDAuMDQ1LDIxMC45MTQgMTk4LjgyNiwyMTEuMTgxIDE5Ni41MDggTCAyMTEuNDAwIDE5NC42MDAgMjIwLjAwMCAxOTQuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyOC43MTIgMTk1LjYwMCBDIDIyOS4wNTggMTk4LjY5MiwyMzAuMDk2IDE5OS4yNDEsMjMyLjQzOCAxOTcuNTczIEwgMjMzLjYwMCAxOTYuNzQ2IDIzMy42MDAgMTgxLjE2NCBMIDIzMy42MDAgMTY1LjU4MyAyMzQuNjE1IDE2NS4xMjAgQyAyMzUuMjMyIDE2NC44MzksMjM1LjU0NiAxNjQuNDM3LDIzNS40MTUgMTY0LjA5NiBDIDIzNS4yOTcgMTYzLjc4NywyMzUuMjAwIDE2My40MDUsMjM1LjIwMCAxNjMuMjQ2IEMgMjM1LjIwMCAxNjIuODk3LDIzMC41ODMgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMjkuOTA1IDE1OS42MDAsMjI5LjM1MSAxNjAuMTQwLDIyOC44NjMgMTYwLjgwMCBMIDIyNy45NzYgMTYyLjAwMCAyMTkuNjg4IDE2MS45OTkgTCAyMTEuNDAwIDE2MS45OTggMjA5LjA4NiAxNjAuNjAzIEMgMjA3LjQ4NiAxNTkuNjM4LDIwNi43MTMgMTU5LjM2MCwyMDYuNTgyIDE1OS43MDQgTTE5Mi44MDAgMTgwLjE0OCBMIDE5Mi44MDAgMjAwLjAwMCAxOTMuOTY5IDIwMC4wMDAgQyAxOTQuNjQ0IDIwMC4wMDAsMTk1LjY2MCAxOTkuNTYyLDE5Ni4zNjkgMTk4Ljk2NCBMIDE5Ny42MDAgMTk3LjkyOSAxOTcuNjAwIDE4MC45NTYgTCAxOTcuNjAwIDE2My45ODMgMTk4LjU1MiAxNjMuNTQ5IEMgMjAwLjY4MyAxNjIuNTc4LDE5OC45MTcgMTYwLjk4OSwxOTUuMjQ1IDE2MC41NzMgTCAxOTIuODAwIDE2MC4yOTcgMTkyLjgwMCAxODAuMTQ4IE0yODAuOTU3IDE2NC4yMzMgQyAyODEuNTc0IDE2NS44MzksMjgxLjIxNiAxODYuMzA4LDI4MC41NjcgMTg2LjU1NyBDIDI3OC45NjkgMTg3LjE3MCwyNjAuODkyIDE4Ni44MTcsMjYwLjY0MyAxODYuMTY3IEMgMjYwLjUwOSAxODUuODE5LDI2MC40MDAgMTgwLjg4NCwyNjAuNDAwIDE3NS4yMDAgQyAyNjAuNDAwIDE2OS41MTYsMjYwLjUwOSAxNjQuNTgxLDI2MC42NDMgMTY0LjIzMyBDIDI2MS4wMTAgMTYzLjI3NSwyODAuNTkwIDE2My4yNzUsMjgwLjk1NyAxNjQuMjMzIE0zMDYuNzA2IDE3NS4xMDAgTCAzMDYuNjAwIDE4Ni42MDAgMjk2LjQwMCAxODYuNjAwIEwgMjg2LjIwMCAxODYuNjAwIDI4Ni4wOTQgMTc1LjEwMCBMIDI4NS45ODggMTYzLjYwMCAyOTYuNDAwIDE2My42MDAgTCAzMDYuODEyIDE2My42MDAgMzA2LjcwNiAxNzUuMTAwIE0yMjguNzEwIDE3MC43MDAgTCAyMjguODIxIDE3Ni44MDAgMjIwLjAxMCAxNzYuODAwIEwgMjExLjIwMCAxNzYuODAwIDIxMS4yMDAgMTcwLjg2NyBDIDIxMS4yMDAgMTY3LjYwMywyMTEuMzIzIDE2NC44MTAsMjExLjQ3NCAxNjQuNjU5IEMgMjExLjYyNSAxNjQuNTA4LDIxNS41NDAgMTY0LjQzMywyMjAuMTc0IDE2NC40OTIgTCAyMjguNjAwIDE2NC42MDAgMjI4LjcxMCAxNzAuNzAwIE0yMjguNzEwIDE4NS43MDAgTCAyMjguODIwIDE5Mi4wMDAgMjIwLjAxMCAxOTIuMDAwIEwgMjExLjIwMCAxOTIuMDAwIDIxMS4yMDAgMTg1Ljg2NyBDIDIxMS4yMDAgMTgyLjQ5MywyMTEuMzIzIDE3OS42MTAsMjExLjQ3NCAxNzkuNDU5IEMgMjExLjYyNSAxNzkuMzA4LDIxNS41NDAgMTc5LjIzMywyMjAuMTc0IDE3OS4yOTIgTCAyMjguNjAwIDE3OS40MDAgMjI4LjcxMCAxODUuNzAwIE0yMTEuMzIwIDIxMS40NjMgQyAyMTEuMTY3IDIxMS44NjQsMjExLjM2NSAyMTIuMzI4LDIxMS44MzUgMjEyLjY2NSBDIDIxNS4zNjQgMjE1LjIwMiwyMTQuODYyIDIxNi4yNDAsMjA1LjQyMCAyMjUuOTQyIEMgMTk2LjE5NSAyMzUuNDIwLDE4NC40MzEgMjQ0LjIxNiwxNjkuMjcxIDI1Mi45NzIgQyAxNjMuMjgwIDI1Ni40MzIsMTYyLjA2OSAyNTcuNTkxLDE2My43NjQgMjU4LjI0MiBDIDE2NS45ODEgMjU5LjA5MiwxODUuOTQxIDI0Ny45OTksMTk2LjY2NCAyMzkuOTU3IEMgMTk3LjU4MCAyMzkuMjcwLDE5OC41MjUgMjM4LjgzMCwxOTguNzY0IDIzOC45NzggQyAxOTkuNTI5IDIzOS40NTEsMTk5LjM0NiAyNjQuMTMwLDE5OC41NDAgMjY5LjIxNyBDIDE5Ny42MzggMjc0LjkwOSwxOTguOTUzIDI3OC40MDAsMjAxLjk5OSAyNzguNDAwIEMgMjAzLjYyOSAyNzguNDAwLDIwMy41OTkgMjc4Ljc3MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNjA5IDI0Ny44OTAsMjAzLjc0NCAyMzkuMjIwLDIwMy45MDYgMjM4Ljk5OSBDIDIwNC4wNjggMjM4Ljc3OSwyMDQuNjk1IDIzOC4zNDQsMjA1LjMwMCAyMzguMDMyIEMgMjA2LjgwMiAyMzcuMjU4LDIwNi42OTAgMjM2LjIyOSwyMDUuMDE3IDIzNS40MzUgQyAyMDMuMzQ1IDIzNC42NDIsMjAzLjQ2NiAyMzQuMjI1LDIwNS45MDEgMjMyLjQwMCBDIDIwNi45MjggMjMxLjYzMCwyMTAuMTA3IDIyOC42OTIsMjEyLjk2NSAyMjUuODcxIEMgMjE4LjYyOCAyMjAuMjgyLDIxOC45OTkgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMjUuOTk1IDIyMC4wMDAsMjE5LjQxMyAyMTEuODQwLDIxMy40ODUgMjExLjA2MiBDIDIxMS45MzEgMjEwLjg1OSwyMTEuNTIzIDIxMC45MzQsMjExLjMyMCAyMTEuNDYzIE0xMDYuMjgzIDIxMS43MjggQyAxMDYuMDUwIDIxMi4zMzYsMTA2LjYwMyAyMTIuODEzLDEwOC44NzAgMjEzLjk2MSBDIDExMC40NDcgMjE0Ljc2MCwxMTAuNjQ3IDIxNi4wMjcsMTA5LjYwMyAyMTguNjAwIEMgMTA5LjQyNCAyMTkuMDQwLDEwOC44NjUgMjIwLjQ4MCwxMDguMzYwIDIyMS44MDAgQyAxMDYuODAxIDIyNS44NzQsMTAwLjgwNCAyMzYuMjU2LDk5LjIzNCAyMzcuNjAwIEMgOTkuMTA1IDIzNy43MTAsOTguMDI0IDIzOC45NzAsOTYuODMyIDI0MC40MDAgQyA5NS42MzkgMjQxLjgzMCw5Mi43NzggMjQ0LjgyNyw5MC40NzMgMjQ3LjA1OSBDIDg2LjUwNSAyNTAuOTA0LDg1LjYwMiAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODguMjQ5IDI1Mi40MDAsOTUuMjg4IDI0Ni43NDYsOTkuODcyIDI0Mi4yNjMgTCAxMDMuNTQ0IDIzOC42NzEgMTA2LjE0NyAyMzkuMzE0IEMgMTExLjIwNiAyNDAuNTYyLDExNy41NjkgMjQzLjczMywxMjAuMzA1IDI0Ni4zNjkgTCAxMjEuMjEwIDI0Ny4yNDEgMTE5Ljk0MSAyNDkuMTIwIEMgMTE0LjgyOCAyNTYuNjg5LDEwNS40MjkgMjY1LjQxNiw5NS40MDAgMjcxLjkwNSBDIDg5Ljc4NSAyNzUuNTM4LDg5LjIwMCAyNzUuOTgwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI4MC45MTAsMTEyLjQ0NCAyNjUuMjkzLDEyMC44OTcgMjU1LjMwMSBDIDEyMi4zMzkgMjUzLjU5NSwxMjMuOTg5IDI1MS43NjIsMTI0LjU2MyAyNTEuMjI4IEwgMTI1LjYwNSAyNTAuMjU1IDEyNi43MDMgMjUxLjMwMiBDIDEzMS4wODcgMjU1LjQ4NSwxMzQuNTYwIDI1MS4yNTQsMTMwLjM5OSAyNDYuNzk5IEMgMTI4Ljg4OCAyNDUuMTgxLDEyOC44ODQgMjQ1LjIyMSwxMzAuODAwIDI0Mi40MDAgQyAxMzEuNjgwIDI0MS4xMDQsMTMyLjQwMCAyMzkuOTMxLDEzMi40MDAgMjM5Ljc5NCBDIDEzMi40MDAgMjM5LjY1NywxMzIuOTQwIDIzOC43NTksMTMzLjYwMCAyMzcuODAwIEMgMTM0LjI2MCAyMzYuODQwLDEzNS44OTggMjMzLjg4MCwxMzcuMjM4IDIzMS4yMjEgQyAxMzkuMzAwIDIyNy4xMzMsMTM5Ljk1MSAyMjYuMTk3LDE0MS40NTUgMjI1LjE2MiBDIDE0NC4wMTEgMjIzLjQwNCwxNDMuMTQxIDIyMS42MDgsMTM4LjUzNyAyMTkuMTM0IEwgMTM2Ljg3NCAyMTguMjQwIDEzNS4yNjggMjE5LjY5MSBDIDEzMy41MjYgMjIxLjI2NSwxMzMuMTAyIDIyMS4zNjYsMTI2LjQwMCAyMjEuODE5IEMgMTE0Ljg1OSAyMjIuNTk5LDExNC4zMDIgMjIyLjYxMSwxMTQuMDk4IDIyMi4wNzggQyAxMTMuNzc2IDIyMS4yMzksMTE1LjY0MyAyMTguMDIzLDExNi43NjQgMjE3LjQ4NiBDIDExOC44NjMgMjE2LjQ4MCwxMTcuNzcxIDIxNC41MzIsMTE0LjAwNCAyMTIuNTYzIEMgMTExLjM1MiAyMTEuMTc4LDEwNi42ODggMjEwLjY3MywxMDYuMjgzIDIxMS43MjggTTI3NS43MjAgMjE0LjY2NSBDIDI3NS41NDQgMjE1LjEyMiwyNzUuNzcwIDIxNS41NDcsMjc2LjQxMyAyMTUuOTcxIEMgMjgxLjM3OSAyMTkuMjQ2LDI4MS4zODEgMjIwLjAwMCwyNzYuNDU5IDIzMy44MDAgQyAyNzIuMzU5IDI0NS4yOTMsMjY4LjUwNCAyNTQuNjI1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2My45OTIgMjYyLjYyNiwyNTQuMzkwIDI2Mi43OTcsMjUyLjMwOSAyNTkuMTcwIEMgMjUwLjU0OCAyNTYuMTAyLDI0OS43MTUgMjU5LjkxMiwyNTEuMzcwIDI2My40NjYgQyAyNTMuNTY5IDI2OC4xOTAsMjU3LjMwNCAyNzAuNjk0LDI1OS4wODkgMjY4LjY0MiBDIDI1OS43MTMgMjY3LjkyNCwyNjAuODYwIDI2Ny40NzcsMjYzLjY2MSAyNjYuODYyIEMgMjgyLjA2MiAyNjIuODIyLDI4OC42NzYgMjYxLjI4NiwyOTYuNTc0IDI1OS4yMjMgQyAzMDAuNzM5IDI1OC4xMzUsMzA0LjI5NyAyNTcuMzM2LDMwNC40ODAgMjU3LjQ0OSBDIDMwNS4zMTcgMjU3Ljk2NywzMDYuODk3IDI2MS42MzAsMzA4LjA0OSAyNjUuNzI3IEMgMzA5LjQ5NyAyNzAuODc2LDMxMy42MDAgMjcwLjQzMiwzMTMuNjAwIDI2NS4xMjUgQyAzMTMuNjAwIDI1OC4yNjcsMzA1LjU1NyAyNDguMTU4LDI5My4wMzUgMjM5LjI3NyBDIDI4OC4yNzkgMjM1LjkwNCwyODcuODEzIDIzNy42NzksMjkyLjMyMCAyNDIuMDAwIEMgMjk3LjIyOCAyNDYuNzA2LDMwMi40MDAgMjUyLjk3OSwzMDIuNDAwIDI1NC4yMjcgQyAzMDIuNDAwIDI1NS4xNzUsMjY5Ljc0MyAyNjEuMDc3LDI2OC45NDEgMjYwLjI3NCBDIDI2OC44MTIgMjYwLjE0NSwyNjkuNjA0IDI1OC41NDYsMjcwLjcwMCAyNTYuNzIwIEMgMjczLjk2MyAyNTEuMjg3LDI3OS40NjIgMjQwLjEzMiwyODEuOTk5IDIzMy44MDAgQyAyODQuNjQ0IDIyNy4xOTYsMjg1Ljg5NiAyMjQuODc0LDI4Ny4xNjQgMjI0LjIxOSBDIDI4OS4yMDQgMjIzLjE2NCwyODguNTcwIDIyMS4zMzIsMjg1LjA1MyAyMTguMTE4IEMgMjgxLjYzMSAyMTQuOTkxLDI3Ni4zNDUgMjEzLjAzNSwyNzUuNzIwIDIxNC42NjUgTTEzMy44NDggMjI0LjU4MCBDIDEzNC4yNjggMjI1LjY3NywxMjcuODk3IDIzNy44ODMsMTI1LjEwOSAyNDEuMzIxIEwgMTI0LjIwMCAyNDIuNDQyIDEyMS42MDAgMjQxLjI2MyBDIDExNy45NzEgMjM5LjYxOCwxMTMuNTk1IDIzOC4yMTIsMTA5LjYwMCAyMzcuNDA3IEMgMTA3LjczMCAyMzcuMDMwLDEwNS45NjggMjM2LjY1MiwxMDUuNjg0IDIzNi41NjcgQyAxMDUuMzQwIDIzNi40NjQsMTA1Ljg2MCAyMzUuMzg3LDEwNy4yMzEgMjMzLjM1NCBDIDEwOC4zNjYgMjMxLjY3MywxMDkuOTcyIDIyOS4xMjksMTEwLjc5OSAyMjcuNzAyIEwgMTEyLjMwNCAyMjUuMTA4IDExOC4yNTIgMjI0LjkzMyBDIDEyMS41MjMgMjI0LjgzNywxMjUuNDYwIDIyNC42MTEsMTI3LjAwMCAyMjQuNDMyIEMgMTMxLjY1NiAyMjMuODg5LDEzMy41OTkgMjIzLjkzMSwxMzMuODQ4IDIyNC41ODAgIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmOGY0ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGlkPSJwYXRoMSIgZD0iTTE3Ny44NzYgMjEuMDQ1IEMgMTY2LjM5NCAzMi42MjAsMTUxLjcxMSA0Ny4zMzUsMTQ1LjI0NiA1My43NDUgQyAxMzAuMDQ0IDY4LjgxOSw2OC44MTkgMTMwLjA0NCw1My43NDUgMTQ1LjI0NiBDIDQ3LjMzNSAxNTEuNzExLDMyLjYyMCAxNjYuMzk0LDIxLjA0NSAxNzcuODc2IEMgMi4zOTEgMTk2LjM4MSwwLjAwMCAxOTguODkxLDAuMDAwIDE5OS45NzUgQyAwLjAwMCAyMDEuMDYxLDIuNzc4IDIwMy45NjYsMjQuNjQ1IDIyNS43NTUgQyAzOC4xOTkgMjM5LjI2MCw0OS42MjUgMjUwLjY0Niw1MC4wMzUgMjUxLjA1NSBDIDUwLjQ0NiAyNTEuNDY1LDcyLjgzMiAyNzMuODUwLDk5Ljc4MiAzMDAuODAwIEMgMTI2LjczMyAzMjcuNzUwLDE0OS4zMjUgMzUwLjM0MCwxNDkuOTg4IDM1MS4wMDAgQyAxNTAuNjUwIDM1MS42NjAsMTYxLjkwMyAzNjIuOTU1LDE3NC45OTQgMzc2LjEwMCBDIDE5NS45MjAgMzk3LjExMywxOTguOTQwIDQwMC4wMDAsMTk5Ljk5NyA0MDAuMDAwIEMgMjAxLjA1MyA0MDAuMDAwLDIwNC4xNjIgMzk3LjAyNywyMjUuNzU5IDM3NS4zNjAgQyAyMzkuMjY3IDM2MS44MDgsMjUwLjUwMCAzNTAuNTQwLDI1MC43MjAgMzUwLjMyMCBDIDI1MS4yNDMgMzQ5Ljc5NywzNDkuNjU5IDI1MS4zODEsMzUwLjI2MCAyNTAuNzgwIEMgMzUwLjUxMyAyNTAuNTI3LDM2MS44MDggMjM5LjI2NywzNzUuMzYwIDIyNS43NTkgQyAzOTYuMDU3IDIwNS4xMjgsMzk5Ljk5OSAyMDEuMDIzLDM5OS45OTYgMjAwLjA5OSBDIDM5OS45OTIgMTk5LjE3MiwzODcuMjk3IDE4Ni4zMTIsMzE5LjA5NiAxMTguMTQ0IEMgMjc0LjYwMyA3My42NzMsMjI5Ljg3OCAyOC44OTgsMjE5LjcwNiAxOC42NDQgQyAyMDMuMzAwIDIuMTA2LDIwMS4wNzIgMC4wMDAsMTk5Ljk4MiAwLjAwMCBDIDE5OC44ODkgMC4wMDAsMTk2LjQyOCAyLjM0MywxNzcuODc2IDIxLjA0NSBNMTg5LjQ1NCAxMjcuNDY1IEMgMTkyLjM5MCAxMjkuODcxLDE5Mi42NDggMTMxLjUzNiwxOTAuMDAwIDEzMC45OTQgQyAxODkuNDM0IDEzMC44NzgsMTg3Ljc4NSAxMzEuMjM5LDE4Ni4yMDAgMTMxLjgyNiBDIDE4NC42NjAgMTMyLjM5NiwxODIuNTQ1IDEzMy4xNDYsMTgxLjUwMCAxMzMuNDkyIEwgMTc5LjYwMCAxMzQuMTIyIDE3OS42MDAgMTQxLjQ2MSBMIDE3OS42MDAgMTQ4LjgwMCAxODEuNzE1IDE0OC44MDAgQyAxODMuNzI0IDE0OC44MDAsMTgzLjkyOSAxNDguNjk5LDE4NS44MDAgMTQ2LjgwMCBDIDE4OC4yMjcgMTQ0LjMzNiwxODguMjIyIDE0NC4zMzYsMTkxLjYwMSAxNDYuODU3IEMgMTk2Ljc1OCAxNTAuNzA0LDE5Ni4yOTkgMTUxLjE1MywxODcuMDYxIDE1MS4yOTEgTCAxNzkuODAwIDE1MS40MDAgMTc5LjY4OSAxNTYuODY1IEwgMTc5LjU3OCAxNjIuMzMxIDE4MS4wODkgMTYyLjgxNiBDIDE4Ni43NjUgMTY0LjY0MCwxODkuNjMxIDE2Ny4wNDQsMTg5LjY3MiAxNzAuMDE3IEMgMTg5LjcxNiAxNzMuMTQwLDE4Ny4xMjIgMTczLjQxNywxODUuMTYzIDE3MC41MDAgQyAxODMuNTQ2IDE2OC4wOTMsMTgwLjc5MiAxNjUuMjAwLDE4MC4xMTcgMTY1LjIwMCBDIDE3OS43MDIgMTY1LjIwMCwxNzkuNjAwIDE2OC42NDQsMTc5LjYwMCAxODIuNTg0IEwgMTc5LjYwMCAxOTkuOTY5IDE3OC43MDggMjAwLjgwMCBDIDE3NC45ODcgMjA0LjI2NywxNzQuODAwIDIwMy40MjQsMTc0LjgwMCAxODMuMTkwIEMgMTc0LjgwMCAxNzMuNTg5LDE3NC42ODAgMTY1LjYxMywxNzQuNTMzIDE2NS40NjcgQyAxNzQuMzg3IDE2NS4zMjAsMTczLjM1MiAxNjYuOTA1LDE3Mi4yMzMgMTY4Ljk4OSBDIDE2OC4xNDMgMTc2LjYxMSwxNjEuMzk2IDE4NC40NzIsMTYxLjE1MyAxODEuOTAwIEMgMTYxLjA1MiAxODAuODM0LDE2MS4zMTcgMTgwLjIzNiwxNjMuNDQ0IDE3Ni43MjcgQyAxNjguMjYxIDE2OC43ODQsMTc0LjQwMCAxNTQuNzY4LDE3NC40MDAgMTUxLjcxNiBDIDE3NC40MDAgMTUxLjM1MSwxNzIuODU2IDE1MS4xOTIsMTY4LjUwMCAxNTEuMTExIEwgMTYyLjYwMCAxNTEuMDAwIDE2Mi42MDAgMTUwLjAwMCBMIDE2Mi42MDAgMTQ5LjAwMCAxNjguNjAwIDE0OC44MDAgTCAxNzQuNjAwIDE0OC42MDAgMTc0LjYwMCAxNDIuMjAwIEMgMTc0LjYwMCAxMzYuNzEwLDE3NC41MTUgMTM1LjgyMiwxNzQuMDAwIDEzNS45NTMgQyAxNzMuNjcwIDEzNi4wMzcsMTcyLjE0MCAxMzYuNDQ2LDE3MC42MDAgMTM2Ljg2MSBDIDE2Ny40ODAgMTM3LjcwMiwxNjEuNzcxIDEzOC40NDEsMTYwLjkxOSAxMzguMTE0IEMgMTU5LjQ1MiAxMzcuNTUwLDE2MC43MjAgMTM2Ljg1MCwxNjYuMjAwIDEzNS4xOTYgQyAxNzIuMzY3IDEzMy4zMzUsMTgwLjY3MSAxMjkuNzQzLDE4NS4wMDAgMTI3LjA2NSBDIDE4Ny4xMzcgMTI1Ljc0MywxODcuMzc5IDEyNS43NjUsMTg5LjQ1NCAxMjcuNDY1IE0yMjcuODA3IDEyOC45MDAgQyAyMzIuMjM0IDEzMS44NjcsMjMyLjAxMCAxMzIuODAwLDIyNi44NzMgMTMyLjgwMCBDIDIyNS42MjEgMTMyLjgwMCwyMjMuMzM4IDEzMy4xNjIsMjIxLjc5OSAxMzMuNjAzIEMgMjE2LjgwOCAxMzUuMDM2LDIwOS4xNTkgMTM2LjcwMiwyMDQuNDAwIDEzNy4zOTQgQyAyMDMuNDEwIDEzNy41MzgsMjAwLjk4MCAxMzcuODk2LDE5OS4wMDAgMTM4LjE5MCBDIDE5Mi43NTcgMTM5LjExNywxODkuNzE5IDEzOS4zMTYsMTg5LjQxMSAxMzguODE4IEMgMTg4LjkxNiAxMzguMDE4LDE4OS44OTAgMTM3LjM4OSwxOTIuNDc2IDEzNi44MzkgQyAxOTQuOTYxIDEzNi4zMTEsMTk4Ljg4MSAxMzUuMzIzLDIwMy4yMDAgMTM0LjEzNSBDIDIwNC40MTAgMTMzLjgwMywyMDUuOTQwIDEzMy4zODgsMjA2LjYwMCAxMzMuMjE0IEMgMjA5LjA4NiAxMzIuNTU4LDIxNi4zMzkgMTI5Ljk4MCwyMjAuMDAwIDEyOC40NTIgQyAyMjQuNzU5IDEyNi40NjYsMjI0LjEyMCAxMjYuNDI5LDIyNy44MDcgMTI4LjkwMCBNOTcuODY0IDEzMi4wMDAgTCA5OS43NTcgMTMzLjIwMCAxMTcuNjUxIDEzMy4yMDAgTCAxMzUuNTQ2IDEzMy4yMDAgMTM2LjQwMCAxMzIuMDAwIEMgMTM3LjQ5MiAxMzAuNDY3LDEzNy42MTEgMTMwLjQ4MCwxNDAuMjAyIDEzMi40MzYgQyAxNDIuODY0IDEzNC40NDYsMTQzLjY0MCAxMzYuNDAwLDE0MS43NzYgMTM2LjQwMCBDIDE0MS4yODUgMTM2LjQwMCwxNDEuMjAwIDEzOC41NDYsMTQxLjIwMCAxNTAuOTMwIEwgMTQxLjIwMCAxNjUuNDYxIDE0MC4zMDAgMTY2LjMwNCBDIDEzNy45NjUgMTY4LjQ5MSwxMzYuNTU2IDE2OC4xNjgsMTM2LjMzMCAxNjUuMzk1IEwgMTM2LjIwMCAxNjMuODAwIDEyNy44OTAgMTYzLjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMTkuNjkwIDE2OS42OTIgTCAxMTkuODAwIDE3NS44MDAgMTMxLjc4MyAxNzUuOTA2IEwgMTQzLjc2NiAxNzYuMDEyIDE0Ni4yNDEgMTczLjU1OSBDIDE0Ny42MDMgMTcyLjIxMCwxNDguODg2IDE3MS4xNzIsMTQ5LjA5MyAxNzEuMjUzIEMgMTUxLjExMyAxNzIuMDQzLDE1Ni4wMDQgMTc2LjMxMSwxNTUuOTA4IDE3Ny4yMDAgTCAxNTUuODAwIDE3OC4yMDAgMTM3LjgwMCAxNzguNDAwIEwgMTE5LjgwMCAxNzguNjAwIDExOS42OTMgMTg4LjQ3OCBMIDExOS41ODYgMTk4LjM1NSAxMTguNDMxIDE5OS4xNzggQyAxMTcuNDgxIDE5OS44NTQsMTE1LjQ0OCAyMDAuMjk3LDExNS4xMTcgMTk5LjkwMCBDIDExNS4wNzEgMTk5Ljg0NSwxMTQuOTM2IDE5NS4wMzAsMTE0LjgxNyAxODkuMjAwIEwgMTE0LjYwMCAxNzguNjAwIDk3LjcyNiAxNzguNDk2IEMgODEuMzA2IDE3OC4zOTQsODAuODQ0IDE3OC4zNzAsODAuNjAwIDE3Ny41OTkgQyA4MC4xMDEgMTc2LjAyNyw4MC4zOTYgMTc2LjAwMCw5Ny44MjQgMTc2LjAwMCBMIDExNC44MDAgMTc2LjAwMCAxMTQuODAwIDE2OS44MDAgTCAxMTQuODAwIDE2My42MDAgMTA3LjI0MyAxNjMuNjAwIEMgOTguOTI0IDE2My42MDAsOTkuMjAwIDE2My41MTIsOTkuMjAwIDE2Ni4xNzEgQyA5OS4yMDAgMTY3LjQ5Niw5OC41ODUgMTY4LjI5MSw5Ni44NzQgMTY5LjE3NiBDIDk0Ljc5MiAxNzAuMjU1LDk0LjgwMCAxNzAuMzMzLDk0LjgwMCAxNDkuNzUxIEMgOTQuODAwIDEyOC40NzksOTQuNTU1IDEyOS45MDEsOTcuODY0IDEzMi4wMDAgTTI1OS4yNTYgMTM1LjY4OSBMIDI2MS4xMTEgMTM3LjIwMCAyODMuNTI4IDEzNy4yMDAgTCAzMDUuOTQ2IDEzNy4yMDAgMzA2LjgwMCAxMzYuMDAwIEMgMzA3LjkxNiAxMzQuNDMyLDMwOC40MTQgMTM0LjQ4MiwzMTAuOTgzIDEzNi40MjIgQyAzMTMuNjMzIDEzOC40MjMsMzEzLjg3NSAxMzguOTg0LDMxMi41OTYgMTQwLjE2OSBMIDMxMS42MDAgMTQxLjA5MiAzMTEuNjAwIDE2Ny42NzYgTCAzMTEuNjAwIDE5NC4yNjEgMzEwLjcwMCAxOTUuMDc1IEMgMzA4LjE3NCAxOTcuMzYxLDMwNi44MDAgMTk2LjMzOCwzMDYuODAwIDE5Mi4xNzEgTCAzMDYuODAwIDE4OS4yMDAgMjgzLjg0MyAxODkuMjAwIEMgMjYzLjI3OCAxODkuMjAwLDI2MC44NjAgMTg5LjI2NiwyNjAuNjQzIDE4OS44MzMgQyAyNjAuNTA5IDE5MC4xODEsMjYwLjQwMCAxOTIuMDM5LDI2MC40MDAgMTkzLjk2MyBDIDI2MC40MDAgMTk4LjE1OCwyNTguNTY1IDIwMC41NjMsMjU2LjQwMCAxOTkuMjA2IEMgMjU1Ljc4OCAxOTguODIyLDI1NS4yMTggMTM2LjQ1OSwyNTUuODA0IDEzNC4wNjUgQyAyNTYuMDYwIDEzMy4wMTksMjU1Ljg1OSAxMzIuOTI0LDI1OS4yNTYgMTM1LjY4OSBNOTkuNjQwIDEzNi4xNTIgQyA5OS4zMjcgMTM2LjUyOSw5OS4yMTIgMTM4LjMzMyw5OS4yODcgMTQxLjY1NiBMIDk5LjQwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDEzNi4yMDAgMTQ2LjYwMCAxMzYuMjAwIDE0MS4yMDAgTCAxMzYuMjAwIDEzNS44MDAgMTE4LjE1MiAxMzUuNjk2IEMgMTAzLjA3NCAxMzUuNjA5LDEwMC4wMjggMTM1LjY4NCw5OS42NDAgMTM2LjE1MiBNMjMyLjM4MCAxNDAuMTkwIEMgMjM2LjM1NCAxNDIuMTkxLDIzNi40OTcgMTQzLjA3OCwyMzIuOTg4IDE0My45NjEgQyAyMzIuMDA1IDE0NC4yMDksMjMxLjIwMCAxNDQuNTcxLDIzMS4yMDAgMTQ0Ljc2NSBDIDIzMS4yMDAgMTQ1LjY1MSwyMjQuNTIxIDE1NS45MzQsMjIyLjY2OCAxNTcuOTAwIEMgMjE5LjQ2NyAxNjEuMjk3LDIxOS4yNzMgMTU5LjAzNSwyMjIuMjU2IDE1My4wOTMgQyAyMjQuMjYyIDE0OS4wOTksMjI1LjQyOCAxNDYuMjg1LDIyNy40NzQgMTQwLjUwMCBDIDIyOC4yMjIgMTM4LjM4NSwyMjguNzMzIDEzOC4zNTMsMjMyLjM4MCAxNDAuMTkwIE0yNjAuNTk1IDE0MC41MDAgQyAyNjAuNDc0IDE0MC45OTUsMjYwLjQyNSAxNDUuODEwLDI2MC40ODcgMTUxLjIwMCBMIDI2MC42MDAgMTYxLjAwMCAyNzAuMDAwIDE2MS4xMTMgQyAyNzUuMTcwIDE2MS4xNzUsMjc5LjgwNSAxNjEuMTI2LDI4MC4zMDAgMTYxLjAwNSBMIDI4MS4yMDAgMTYwLjc4NSAyODEuMjAwIDE1MC44MjUgQyAyODEuMjAwIDE0NS4zNDcsMjgxLjA5MSAxNDAuNTgxLDI4MC45NTcgMTQwLjIzMyBDIDI4MC43NDUgMTM5LjY3OSwyNzkuNDY5IDEzOS42MDAsMjcwLjc2NSAxMzkuNjAwIEwgMjYwLjgxNSAxMzkuNjAwIDI2MC41OTUgMTQwLjUwMCBNMjg2LjA5MyAxNTAuMzAwIEwgMjg2LjIwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDMwNi42MDAgMTYxLjAwMCAzMDYuNzA3IDE1MC4zMDAgTCAzMDYuODEzIDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMjg1Ljk4NyAxMzkuNjAwIDI4Ni4wOTMgMTUwLjMwMCBNMjEwLjAyNiAxNDIuMDE2IEMgMjE0LjAxMiAxNDQuNTc1LDIxNi44MDAgMTQ4LjQ4NCwyMTYuODAwIDE1MS41MTcgQyAyMTYuODAwIDE1NS4xNjksMjEzLjA1MCAxNTUuMzk4LDIxMi4xNjggMTUxLjgwMCBDIDIxMS42NDUgMTQ5LjY2NiwyMTAuNDMwIDE0Ny4xNjksMjA4LjU1NyAxNDQuMzc3IEMgMjA2LjA2MCAxNDAuNjU2LDIwNi41ODcgMTM5LjgxMCwyMTAuMDI2IDE0Mi4wMTYgTTIwMS4yMDMgMTQ2Ljk2MSBDIDIwNC43ODQgMTUwLjYwMiwyMDUuMjQxIDE1Ni4wMDAsMjAxLjk2OSAxNTYuMDAwIEMgMjAwLjc1NCAxNTYuMDAwLDIwMC4zNTAgMTU1LjU4NywxOTkuNjIwIDE1My42MDAgQyAxOTkuMzM3IDE1Mi44MzAsMTk4Ljc2NyAxNTEuNDM3LDE5OC4zNTMgMTUwLjUwNCBDIDE5Ny45MzkgMTQ5LjU3MiwxOTcuNTk4IDE0OC42NzIsMTk3LjU5NiAxNDguNTA0IEMgMTk3LjU5NCAxNDguMzM3LDE5Ni45NjQgMTQ3LjQxMCwxOTYuMTk2IDE0Ni40NDQgQyAxOTIuOTEzIDE0Mi4zMTQsMTk3LjA1MiAxNDIuNzQyLDIwMS4yMDMgMTQ2Ljk2MSBNOTkuNjgwIDE0OS42ODAgQyA5OC42NzEgMTUwLjY4OSw5OS4wNDQgMTYwLjc0NywxMDAuMTAwIDE2MS4wMDMgQyAxMDAuNTk1IDE2MS4xMjQsMTA4LjkyMCAxNjEuMTcyLDExOC42MDAgMTYxLjExMSBMIDEzNi4yMDAgMTYxLjAwMCAxMzYuMzE2IDE1Ni4wMDAgQyAxMzYuMzc5IDE1My4yNTAsMTM2LjMzMSAxNTAuNTk1LDEzNi4yMDggMTUwLjEwMCBMIDEzNS45ODUgMTQ5LjIwMCAxMTguMDcyIDE0OS4yMDAgQyAxMDQuNjc0IDE0OS4yMDAsMTAwLjAzOSAxNDkuMzIxLDk5LjY4MCAxNDkuNjgwIE0yMTkuNjg4IDE2MS45OTkgTCAyMjcuOTc2IDE2Mi4wMDAgMjI4Ljg2MyAxNjAuODAwIEMgMjI5LjM1MSAxNjAuMTQwLDIyOS45MDUgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMzAuNTgzIDE1OS42MDAsMjM1LjIwMCAxNjIuODk3LDIzNS4yMDAgMTYzLjI0NiBDIDIzNS4yMDAgMTYzLjQwNSwyMzUuMjk3IDE2My43ODcsMjM1LjQxNSAxNjQuMDk2IEMgMjM1LjU0NiAxNjQuNDM3LDIzNS4yMzIgMTY0LjgzOSwyMzQuNjE1IDE2NS4xMjAgTCAyMzMuNjAwIDE2NS41ODMgMjMzLjYwMCAxODEuMTY0IEwgMjMzLjYwMCAxOTYuNzQ2IDIzMi40MzggMTk3LjU3MyBDIDIzMC4wOTYgMTk5LjI0MSwyMjkuMDU4IDE5OC42OTIsMjI4LjcxMiAxOTUuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyMC4wMDAgMTk0LjYwMCBMIDIxMS40MDAgMTk0LjYwMCAyMTEuMTgxIDE5Ni41MDggQyAyMTAuOTE0IDE5OC44MjYsMjA5LjgzMCAyMDAuMDQ1LDIwNy45NTQgMjAwLjEzNSBMIDIwNi42MDAgMjAwLjIwMCAyMDYuNDk2IDE4MC4yMDAgQyAyMDYuMzc1IDE1Ni45MzMsMjA2LjEyNiAxNTguODE4LDIwOS4wODYgMTYwLjYwMyBMIDIxMS40MDAgMTYxLjk5OCAyMTkuNjg4IDE2MS45OTkgTTE5OC40MjAgMTYxLjMwNSBDIDE5OS41NzEgMTYyLjAyNCwxOTkuNjMxIDE2My4wNTcsMTk4LjU1MiAxNjMuNTQ5IEwgMTk3LjYwMCAxNjMuOTgzIDE5Ny42MDAgMTgwLjk1NiBMIDE5Ny42MDAgMTk3LjkyOSAxOTYuMzY5IDE5OC45NjQgQyAxOTUuNjYwIDE5OS41NjIsMTk0LjY0NCAyMDAuMDAwLDE5My45NjkgMjAwLjAwMCBMIDE5Mi44MDAgMjAwLjAwMCAxOTIuODAwIDE4MC4xNDggTCAxOTIuODAwIDE2MC4yOTcgMTk1LjI0NSAxNjAuNTczIEMgMTk2LjU5MCAxNjAuNzI2LDE5OC4wMTkgMTYxLjA1NSwxOTguNDIwIDE2MS4zMDUgTTI2MC42NDMgMTY0LjIzMyBDIDI2MC41MDkgMTY0LjU4MSwyNjAuNDAwIDE2OS41MTYsMjYwLjQwMCAxNzUuMjAwIEMgMjYwLjQwMCAxODAuODg0LDI2MC41MDkgMTg1LjgxOSwyNjAuNjQzIDE4Ni4xNjcgQyAyNjAuODkyIDE4Ni44MTcsMjc4Ljk2OSAxODcuMTcwLDI4MC41NjcgMTg2LjU1NyBDIDI4MS4yMTYgMTg2LjMwOCwyODEuNTc0IDE2NS44MzksMjgwLjk1NyAxNjQuMjMzIEMgMjgwLjU5MCAxNjMuMjc1LDI2MS4wMTAgMTYzLjI3NSwyNjAuNjQzIDE2NC4yMzMgTTI4Ni4wOTQgMTc1LjEwMCBMIDI4Ni4yMDAgMTg2LjYwMCAyOTYuNDAwIDE4Ni42MDAgTCAzMDYuNjAwIDE4Ni42MDAgMzA2LjcwNiAxNzUuMTAwIEwgMzA2LjgxMiAxNjMuNjAwIDI5Ni40MDAgMTYzLjYwMCBMIDI4NS45ODggMTYzLjYwMCAyODYuMDk0IDE3NS4xMDAgTTIxMS40NzQgMTY0LjY1OSBDIDIxMS4zMjMgMTY0LjgxMCwyMTEuMjAwIDE2Ny42MDMsMjExLjIwMCAxNzAuODY3IEwgMjExLjIwMCAxNzYuODAwIDIyMC4wMTAgMTc2LjgwMCBMIDIyOC44MjEgMTc2LjgwMCAyMjguNzEwIDE3MC43MDAgTCAyMjguNjAwIDE2NC42MDAgMjIwLjE3NCAxNjQuNDkyIEMgMjE1LjU0MCAxNjQuNDMzLDIxMS42MjUgMTY0LjUwOCwyMTEuNDc0IDE2NC42NTkgTTIxMS40NzQgMTc5LjQ1OSBDIDIxMS4zMjMgMTc5LjYxMCwyMTEuMjAwIDE4Mi40OTMsMjExLjIwMCAxODUuODY3IEwgMjExLjIwMCAxOTIuMDAwIDIyMC4wMTAgMTkyLjAwMCBMIDIyOC44MjAgMTkyLjAwMCAyMjguNzEwIDE4NS43MDAgTCAyMjguNjAwIDE3OS40MDAgMjIwLjE3NCAxNzkuMjkyIEMgMjE1LjU0MCAxNzkuMjMzLDIxMS42MjUgMTc5LjMwOCwyMTEuNDc0IDE3OS40NTkgTTIxNi44MDAgMjEyLjAxNSBDIDIxOC41OTcgMjEyLjkxNCwyMjIuODAwIDIxNy4zMTEsMjIyLjgwMCAyMTguMjkwIEMgMjIyLjgwMCAyMTkuMzY0LDIyMi4wMTYgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMTguOTk5IDIyMC4wMDAsMjE4LjYyOCAyMjAuMjgyLDIxMi45NjUgMjI1Ljg3MSBDIDIxMC4xMDcgMjI4LjY5MiwyMDYuOTI4IDIzMS42MzAsMjA1LjkwMSAyMzIuNDAwIEMgMjAzLjQ2NiAyMzQuMjI1LDIwMy4zNDUgMjM0LjY0MiwyMDUuMDE3IDIzNS40MzUgQyAyMDYuNjkwIDIzNi4yMjksMjA2LjgwMiAyMzcuMjU4LDIwNS4zMDAgMjM4LjAzMiBDIDIwNC42OTUgMjM4LjM0NCwyMDQuMDY4IDIzOC43NzksMjAzLjkwNiAyMzguOTk5IEMgMjAzLjc0NCAyMzkuMjIwLDIwMy42MDkgMjQ3Ljg5MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNTk5IDI3OC43NzAsMjAzLjYyOSAyNzguNDAwLDIwMS45OTkgMjc4LjQwMCBDIDE5OC45NTMgMjc4LjQwMCwxOTcuNjM4IDI3NC45MDksMTk4LjU0MCAyNjkuMjE3IEMgMTk5LjM0NiAyNjQuMTMwLDE5OS41MjkgMjM5LjQ1MSwxOTguNzY0IDIzOC45NzggQyAxOTguNTI1IDIzOC44MzAsMTk3LjU4MCAyMzkuMjcwLDE5Ni42NjQgMjM5Ljk1NyBDIDE4NS45NDEgMjQ3Ljk5OSwxNjUuOTgxIDI1OS4wOTIsMTYzLjc2NCAyNTguMjQyIEMgMTYyLjA2OSAyNTcuNTkxLDE2My4yODAgMjU2LjQzMiwxNjkuMjcxIDI1Mi45NzIgQyAxODQuNDMxIDI0NC4yMTYsMTk2LjE5NSAyMzUuNDIwLDIwNS40MjAgMjI1Ljk0MiBDIDIxNC44NjIgMjE2LjI0MCwyMTUuMzY0IDIxNS4yMDIsMjExLjgzNSAyMTIuNjY1IEMgMjA5LjQyOSAyMTAuOTM2LDIxMy41NjQgMjEwLjM5NCwyMTYuODAwIDIxMi4wMTUgTTExNC4wMDQgMjEyLjU2MyBDIDExNy43NzEgMjE0LjUzMiwxMTguODYzIDIxNi40ODAsMTE2Ljc2NCAyMTcuNDg2IEMgMTE1LjY0MyAyMTguMDIzLDExMy43NzYgMjIxLjIzOSwxMTQuMDk4IDIyMi4wNzggQyAxMTQuMzAyIDIyMi42MTEsMTE0Ljg1OSAyMjIuNTk5LDEyNi40MDAgMjIxLjgxOSBDIDEzMy4xMDIgMjIxLjM2NiwxMzMuNTI2IDIyMS4yNjUsMTM1LjI2OCAyMTkuNjkxIEwgMTM2Ljg3NCAyMTguMjQwIDEzOC41MzcgMjE5LjEzNCBDIDE0My4xNDEgMjIxLjYwOCwxNDQuMDExIDIyMy40MDQsMTQxLjQ1NSAyMjUuMTYyIEMgMTM5Ljk1MSAyMjYuMTk3LDEzOS4zMDAgMjI3LjEzMywxMzcuMjM4IDIzMS4yMjEgQyAxMzUuODk4IDIzMy44ODAsMTM0LjI2MCAyMzYuODQwLDEzMy42MDAgMjM3LjgwMCBDIDEzMi45NDAgMjM4Ljc1OSwxMzIuNDAwIDIzOS42NTcsMTMyLjQwMCAyMzkuNzk0IEMgMTMyLjQwMCAyMzkuOTMxLDEzMS42ODAgMjQxLjEwNCwxMzAuODAwIDI0Mi40MDAgQyAxMjguODg0IDI0NS4yMjEsMTI4Ljg4OCAyNDUuMTgxLDEzMC4zOTkgMjQ2Ljc5OSBDIDEzNC41NjAgMjUxLjI1NCwxMzEuMDg3IDI1NS40ODUsMTI2LjcwMyAyNTEuMzAyIEwgMTI1LjYwNSAyNTAuMjU1IDEyNC41NjMgMjUxLjIyOCBDIDEyMy45ODkgMjUxLjc2MiwxMjIuMzM5IDI1My41OTUsMTIwLjg5NyAyNTUuMzAxIEMgMTEyLjQ0NCAyNjUuMjkzLDg5LjIwMCAyODAuOTEwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI3NS45ODAsODkuNzg1IDI3NS41MzgsOTUuNDAwIDI3MS45MDUgQyAxMDUuNDI5IDI2NS40MTYsMTE0LjgyOCAyNTYuNjg5LDExOS45NDEgMjQ5LjEyMCBMIDEyMS4yMTAgMjQ3LjI0MSAxMjAuMzA1IDI0Ni4zNjkgQyAxMTcuNTY5IDI0My43MzMsMTExLjIwNiAyNDAuNTYyLDEwNi4xNDcgMjM5LjMxNCBMIDEwMy41NDQgMjM4LjY3MSA5OS44NzIgMjQyLjI2MyBDIDk1LjI4OCAyNDYuNzQ2LDg4LjI0OSAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODUuNjAyIDI1Mi40MDAsODYuNTA1IDI1MC45MDQsOTAuNDczIDI0Ny4wNTkgQyA5Mi43NzggMjQ0LjgyNyw5NS42MzkgMjQxLjgzMCw5Ni44MzIgMjQwLjQwMCBDIDk4LjAyNCAyMzguOTcwLDk5LjEwNSAyMzcuNzEwLDk5LjIzNCAyMzcuNjAwIEMgMTAwLjgwNCAyMzYuMjU2LDEwNi44MDEgMjI1Ljg3NCwxMDguMzYwIDIyMS44MDAgQyAxMDguODY1IDIyMC40ODAsMTA5LjQyNCAyMTkuMDQwLDEwOS42MDMgMjE4LjYwMCBDIDExMC42NDcgMjE2LjAyNywxMTAuNDQ3IDIxNC43NjAsMTA4Ljg3MCAyMTMuOTYxIEMgMTA2LjYwMyAyMTIuODEzLDEwNi4wNTAgMjEyLjMzNiwxMDYuMjgzIDIxMS43MjggQyAxMDYuNjg4IDIxMC42NzMsMTExLjM1MiAyMTEuMTc4LDExNC4wMDQgMjEyLjU2MyBNMjgxLjEzMyAyMTUuMzE2IEMgMjg2LjIzMiAyMTcuNjc4LDI4OS43NTYgMjIyLjg3OCwyODcuMTY0IDIyNC4yMTkgQyAyODUuODk2IDIyNC44NzQsMjg0LjY0NCAyMjcuMTk2LDI4MS45OTkgMjMzLjgwMCBDIDI3OS40NjIgMjQwLjEzMiwyNzMuOTYzIDI1MS4yODcsMjcwLjcwMCAyNTYuNzIwIEMgMjY5LjYwNCAyNTguNTQ2LDI2OC44MTIgMjYwLjE0NSwyNjguOTQxIDI2MC4yNzQgQyAyNjkuNzQzIDI2MS4wNzcsMzAyLjQwMCAyNTUuMTc1LDMwMi40MDAgMjU0LjIyNyBDIDMwMi40MDAgMjUyLjk3OSwyOTcuMjI4IDI0Ni43MDYsMjkyLjMyMCAyNDIuMDAwIEMgMjg3LjgxMyAyMzcuNjc5LDI4OC4yNzkgMjM1LjkwNCwyOTMuMDM1IDIzOS4yNzcgQyAzMDUuNTU3IDI0OC4xNTgsMzEzLjYwMCAyNTguMjY3LDMxMy42MDAgMjY1LjEyNSBDIDMxMy42MDAgMjcwLjQzMiwzMDkuNDk3IDI3MC44NzYsMzA4LjA0OSAyNjUuNzI3IEMgMzA2Ljg5NyAyNjEuNjMwLDMwNS4zMTcgMjU3Ljk2NywzMDQuNDgwIDI1Ny40NDkgQyAzMDQuMjk3IDI1Ny4zMzYsMzAwLjczOSAyNTguMTM1LDI5Ni41NzQgMjU5LjIyMyBDIDI4OC42NzYgMjYxLjI4NiwyODIuMDYyIDI2Mi44MjIsMjYzLjY2MSAyNjYuODYyIEMgMjYwLjg2MCAyNjcuNDc3LDI1OS43MTMgMjY3LjkyNCwyNTkuMDg5IDI2OC42NDIgQyAyNTcuMzA0IDI3MC42OTQsMjUzLjU2OSAyNjguMTkwLDI1MS4zNzAgMjYzLjQ2NiBDIDI0OS43MTUgMjU5LjkxMiwyNTAuNTQ4IDI1Ni4xMDIsMjUyLjMwOSAyNTkuMTcwIEMgMjUzLjY2NCAyNjEuNTMxLDI1NS44ODYgMjYxLjk4MywyNjIuNTU0IDI2MS4yNTcgQyAyNjQuODkyIDI2MS4wMDIsMjY0LjkxNyAyNjAuOTg1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2OC41MDQgMjU0LjYyNSwyNzIuMzU5IDI0NS4yOTMsMjc2LjQ1OSAyMzMuODAwIEMgMjgxLjM4MSAyMjAuMDAwLDI4MS4zNzkgMjE5LjI0NiwyNzYuNDEzIDIxNS45NzEgQyAyNzMuNTg0IDIxNC4xMDUsMjc3LjM3OSAyMTMuNTc4LDI4MS4xMzMgMjE1LjMxNiBNMTI3LjAwMCAyMjQuNDMyIEMgMTI1LjQ2MCAyMjQuNjExLDEyMS41MjMgMjI0LjgzNywxMTguMjUyIDIyNC45MzMgTCAxMTIuMzA0IDIyNS4xMDggMTEwLjc5OSAyMjcuNzAyIEMgMTA5Ljk3MiAyMjkuMTI5LDEwOC4zNjYgMjMxLjY3MywxMDcuMjMxIDIzMy4zNTQgQyAxMDUuODYwIDIzNS4zODcsMTA1LjM0MCAyMzYuNDY0LDEwNS42ODQgMjM2LjU2NyBDIDEwNS45NjggMjM2LjY1MiwxMDcuNzMwIDIzNy4wMzAsMTA5LjYwMCAyMzcuNDA3IEMgMTEzLjU5NSAyMzguMjEyLDExNy45NzEgMjM5LjYxOCwxMjEuNjAwIDI0MS4yNjMgTCAxMjQuMjAwIDI0Mi40NDIgMTI1LjEwOSAyNDEuMzIxIEMgMTI3Ljg5NyAyMzcuODgzLDEzNC4yNjggMjI1LjY3NywxMzMuODQ4IDIyNC41ODAgQyAxMzMuNTk5IDIyMy45MzEsMTMxLjY1NiAyMjMuODg5LDEyNy4wMDAgMjI0LjQzMiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMWMyYyIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", oI = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: zg,
    alt: "WasedaTime English Logo",
    style: { width: 120, height: 120 }
  }
), i4 = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: Pg,
    alt: "WasedaTime Japanese Logo",
    style: { width: 120, height: 120 }
  }
), sI = () => /* @__PURE__ */ ge.jsx(
  "img",
  {
    src: zg,
    alt: "WasedaTime English Small Logo",
    style: { width: 50, height: 50 }
  }
), o4 = () => /* @__PURE__ */ ge.jsx("img", { src: Pg, style: { width: 50, height: 50 } }), aI = ({ theme: e, setTheme: t }) => {
  const n = {
    light: /* @__PURE__ */ ge.jsx(nI, { color: Ge.icon.sun }),
    dark: /* @__PURE__ */ ge.jsx(tI, { color: Ge.icon.moon })
  };
  return /* @__PURE__ */ ge.jsx(
    "div",
    {
      className: "cursor-pointer transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon",
      onClick: () => t(e === "dark" ? "light" : "dark"),
      children: n[e]
    }
  );
}, uI = (e, t) => {
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
}, cI = {
  flex: "5",
  paddingRight: "0px"
}, lI = {
  flex: "3",
  padding: "0px 0px 0px 1em"
}, fI = {
  flex: "8",
  margin: "auto 0px"
}, dI = {
  flex: "10",
  margin: "auto 0px"
}, hI = {
  flex: "3",
  margin: "auto 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"
}, gI = (e) => ({
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
}), pI = (e) => ({
  fontWeight: 500,
  paddingLeft: "100px",
  fontSize: "32px",
  color: e === "light" ? Ge.light.text1 : Ge.dark.text1
}), s4 = ({
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
  const c = /* @__PURE__ */ ge.jsx("label", { style: { marginLeft: "0" }, children: /* @__PURE__ */ ge.jsx(
    "input",
    {
      style: gI(a),
      placeholder: n || "Search...",
      onChange: t ? (l) => t(l.target.value) : () => {
      },
      value: r || "",
      disabled: i,
      autoFocus: !0
    }
  ) });
  return /* @__PURE__ */ ge.jsxs("header", { style: uI(o, a), children: [
    /* @__PURE__ */ ge.jsx(Ua, { maxWidth: Qo.tablet, children: (l) => l ? /* @__PURE__ */ ge.jsx("div", { style: lI, onClick: () => {
      location.href = "/home";
    }, children: /* @__PURE__ */ ge.jsx(sI, {}) }) : /* @__PURE__ */ ge.jsx("header", { style: cI, children: /* @__PURE__ */ ge.jsx("h2", { style: pI(a), children: e }) }) }),
    /* @__PURE__ */ ge.jsx(Ua, { maxWidth: Qo.tablet, children: (l) => l ? /* @__PURE__ */ ge.jsx("div", { style: dI, children: c }) : /* @__PURE__ */ ge.jsx("div", { style: fI, children: c }) }),
    /* @__PURE__ */ ge.jsxs("div", { style: hI, children: [
      /* @__PURE__ */ ge.jsx(aI, { theme: a, setTheme: u }),
      /* @__PURE__ */ ge.jsx(iI, { theme: a, changeLang: s })
    ] })
  ] });
}, MI = /* @__PURE__ */ ge.jsx("style", { children: `
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
    ` }), yI = {
  display: "block",
  width: "100px",
  height: "100px",
  transition: "transform(0, 12vh)",
  animation: "loadingSpinnerSpin 3s linear infinite"
}, a4 = ({ message: e, theme: t }) => {
  const [n, r] = On("");
  return st(() => {
    setTimeout(() => {
      r(
        "Slow network is detected. Please wait we're almost done 💪"
      );
    }, 4e3);
  }), /* @__PURE__ */ ge.jsx(jh, { style: { flex: "1 0 0" }, children: /* @__PURE__ */ ge.jsxs(
    Iy,
    {
      style: {
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
      },
      children: [
        MI,
        /* @__PURE__ */ ge.jsx("div", { style: yI, children: /* @__PURE__ */ ge.jsx(oI, {}) }),
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
function Pr(e) {
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function mI(e, t) {
  if (Pr(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pr(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rg(e) {
  var t = mI(e, "string");
  return Pr(t) === "symbol" ? t : String(t);
}
function ic(e, t, n) {
  return t = Rg(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vI(e, t) {
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
function wI() {
  if (console && console.warn) {
    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    typeof n[0] == "string" && (n[0] = "react-i18next:: ".concat(n[0])), (e = console).warn.apply(e, n);
  }
}
var sf = {};
function Ja() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && sf[t[0]] || (typeof t[0] == "string" && (sf[t[0]] = /* @__PURE__ */ new Date()), wI.apply(void 0, t));
}
function af(e, t, n) {
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
function DI(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  var s = function(u, c) {
    var l = t.services.backendConnector.state["".concat(u, "|").concat(c)];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function AI(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return Ja("i18n.languages were undefined or empty", t.languages), !0;
  var r = t.options.ignoreJSONStructure !== void 0;
  return r ? t.hasLoadedNamespace(e, {
    precheck: function(o, s) {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !s(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : DI(e, t, n);
}
function EI(e) {
  return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown");
}
var II = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, NI = {
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
}, TI = function(t) {
  return NI[t];
}, jI = function(t) {
  return t.replace(II, TI);
};
function uf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uf(Object(n), !0).forEach(function(r) {
      ic(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var Za = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: jI
};
function SI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Za = cf(cf({}, Za), e);
}
function bI() {
  return Za;
}
var Ug;
function CI(e) {
  Ug = e;
}
function xI() {
  return Ug;
}
function Fg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rg(r.key), r);
  }
}
function Yg(e, t, n) {
  return t && lf(e.prototype, t), n && lf(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var OI = {
  type: "3rdParty",
  init: function(t) {
    SI(t.options.react), CI(t);
  }
}, LI = gn(), _I = function() {
  function e() {
    Fg(this, e), this.usedNamespaces = {};
  }
  return Yg(e, [{
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
function kI(e) {
  if (Array.isArray(e))
    return e;
}
function zI(e, t) {
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
function ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function PI(e, t) {
  if (e) {
    if (typeof e == "string")
      return ff(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ff(e, t);
  }
}
function RI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qg(e, t) {
  return kI(e) || zI(e, t) || PI(e, t) || RI();
}
function df(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? df(Object(n), !0).forEach(function(r) {
      ic(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : df(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var UI = function(t, n) {
  var r = tt();
  return st(function() {
    r.current = n ? r.current : t;
  }, [t, n]), r.current;
};
function FI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.i18n, r = gt(LI) || {}, i = r.i18n, o = r.defaultNS, s = n || i || xI();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new _I()), !s) {
    Ja("You will need to pass in an i18next instance by using initReactI18next");
    var a = function($, b) {
      return typeof b == "string" ? b : b && Pr(b) === "object" && typeof b.defaultValue == "string" ? b.defaultValue : Array.isArray($) ? $[$.length - 1] : $;
    }, u = [a, {}, !1];
    return u.t = a, u.i18n = {}, u.ready = !1, u;
  }
  s.options.react && s.options.react.wait !== void 0 && Ja("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var c = Zs(Zs(Zs({}, bI()), s.options.react), t), l = c.useSuspense, f = c.keyPrefix, d = e || o || s.options && s.options.defaultNS;
  d = typeof d == "string" ? [d] : d || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(d);
  var g = (s.isInitialized || s.initializedStoreOnce) && d.every(function(W) {
    return AI(W, s, c);
  });
  function h() {
    return s.getFixedT(null, c.nsMode === "fallback" ? d : d[0], f);
  }
  var p = On(h), m = Qg(p, 2), v = m[0], w = m[1], j = d.join(), N = UI(j), I = tt(!0);
  st(function() {
    var W = c.bindI18n, $ = c.bindI18nStore;
    I.current = !0, !g && !l && af(s, d, function() {
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
  var Q = tt(!0);
  st(function() {
    I.current && !Q.current && w(h), Q.current = !1;
  }, [s, f]);
  var z = [v, s, g];
  if (z.t = v, z.i18n = s, z.ready = g, g || !g && !l)
    return z;
  throw new Promise(function(W) {
    af(s, d, function() {
      W();
    });
  });
}
var YI = ["forwardedRef"];
function hf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(n), !0).forEach(function(r) {
      ic(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function QI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(r) {
    function i(s) {
      var a = s.forwardedRef, u = vI(s, YI), c = FI(e, io(io({}, u), {}, {
        keyPrefix: t.keyPrefix
      })), l = Qg(c, 3), f = l[0], d = l[1], g = l[2], h = io(io({}, u), {}, {
        t: f,
        i18n: d,
        tReady: g
      });
      return t.withRef && a ? h.ref = a : !t.withRef && a && (h.forwardedRef = a), wt(r, h);
    }
    i.displayName = "withI18nextTranslation(".concat(EI(r), ")"), i.WrappedComponent = r;
    var o = function(a, u) {
      return wt(i, Object.assign({}, a, {
        forwardedRef: u
      }));
    };
    return t.withRef ? Xo(o) : i;
  };
}
var ue = {}, BI = {
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
  var t, n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v, w, j, N, I, Q, z;
  (function(W) {
    var $ = typeof kt == "object" ? kt : typeof self == "object" ? self : typeof this == "object" ? this : {};
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
            re(x.next(L));
          } catch (F) {
            R(F);
          }
        }
        function J(L) {
          try {
            re(x.throw(L));
          } catch (F) {
            R(F);
          }
        }
        function re(L) {
          L.done ? S(L.value) : T(L.value).then(C, J);
        }
        re((x = x.apply(b, k || [])).next());
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
      function C(re) {
        return function(L) {
          return J([re, L]);
        };
      }
      function J(re) {
        if (x)
          throw new TypeError("Generator is already executing.");
        for (; U; )
          try {
            if (x = 1, T && (S = re[0] & 2 ? T.return : re[0] ? T.throw || ((S = T.return) && S.call(T), 0) : T.next) && !(S = S.call(T, re[1])).done)
              return S;
            switch (T = 0, S && (re = [re[0] & 2, S.value]), re[0]) {
              case 0:
              case 1:
                S = re;
                break;
              case 4:
                return U.label++, { value: re[1], done: !1 };
              case 5:
                U.label++, T = re[1], re = [0];
                continue;
              case 7:
                re = U.ops.pop(), U.trys.pop();
                continue;
              default:
                if (S = U.trys, !(S = S.length > 0 && S[S.length - 1]) && (re[0] === 6 || re[0] === 2)) {
                  U = 0;
                  continue;
                }
                if (re[0] === 3 && (!S || re[1] > S[0] && re[1] < S[3])) {
                  U.label = re[1];
                  break;
                }
                if (re[0] === 6 && U.label < S[1]) {
                  U.label = S[1], S = re;
                  break;
                }
                if (S && U.label < S[2]) {
                  U.label = S[2], U.ops.push(re);
                  break;
                }
                S[2] && U.ops.pop(), U.trys.pop();
                continue;
            }
            re = k.call(b, U);
          } catch (L) {
            re = [6, L], T = 0;
          } finally {
            x = S = 0;
          }
        if (re[0] & 5)
          throw re[1];
        return { value: re[0] ? re[1] : void 0, done: !0 };
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
        P.value instanceof h ? Promise.resolve(P.value.v).then(re, L) : F(S[0][2], P);
      }
      function re(P) {
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
        Promise.resolve(J).then(function(re) {
          S({ value: re, done: C });
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
    }, Q = function(b, k, U) {
      if (!k.has(b))
        throw new TypeError("attempted to set private field on non-instance");
      return k.set(b, U), U;
    }, W("__extends", t), W("__assign", n), W("__rest", r), W("__decorate", i), W("__param", o), W("__metadata", s), W("__awaiter", a), W("__generator", u), W("__exportStar", c), W("__createBinding", z), W("__values", l), W("__read", f), W("__spread", d), W("__spreadArrays", g), W("__await", h), W("__asyncGenerator", p), W("__asyncDelegator", m), W("__asyncValues", v), W("__makeTemplateObject", w), W("__importStar", j), W("__importDefault", N), W("__classPrivateFieldGet", I), W("__classPrivateFieldSet", Q);
  });
})(BI);
var Bo;
(function(e) {
  e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple";
})(Bo || (Bo = {}));
function Xs(e) {
  var t = ["provider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function $I(e) {
  var t = ["customProvider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function WI(e) {
  var t = ["customState"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function Kn(e) {
  return e.redirectSignIn !== void 0;
}
var ke;
(function(e) {
  e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default", e.DeviceConfig = "deviceConfig", e.NetworkError = "networkError", e.AutoSignInError = "autoSignInError";
})(ke || (ke = {}));
function HI(e) {
  return !!e.username;
}
var gf;
(function(e) {
  e.API_KEY = "API_KEY", e.AWS_IAM = "AWS_IAM", e.OPENID_CONNECT = "OPENID_CONNECT", e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", e.AWS_LAMBDA = "AWS_LAMBDA";
})(gf || (gf = {}));
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
var Xa = function(e, t) {
  return Xa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  }, Xa(e, t);
};
function oc(e, t) {
  Xa(e, t);
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
function Bg(e, t) {
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
function Pt(e) {
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
function ur(e, t) {
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
    e = e.concat(ur(arguments[t]));
  return e;
}
var VI = "Logging", pf = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
}, Ut;
(function(e) {
  e.DEBUG = "DEBUG", e.ERROR = "ERROR", e.INFO = "INFO", e.WARN = "WARN", e.VERBOSE = "VERBOSE";
})(Ut || (Ut = {}));
var Ht = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = Ut.WARN), this.name = t, this.level = n, this._pluggables = [];
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
      var a = pf[s], u = pf[t];
      if (u >= a) {
        var c = console.log.bind(console);
        t === Ut.ERROR && console.error && (c = console.error.bind(console)), t === Ut.WARN && console.warn && (c = console.warn.bind(console));
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
          for (var g = Pt(this._pluggables), h = g.next(); !h.done; h = g.next()) {
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
      this._log.apply(this, ut([Ut.INFO], t));
    }, e.prototype.info = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ut.INFO], t));
    }, e.prototype.warn = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ut.WARN], t));
    }, e.prototype.error = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ut.ERROR], t));
    }, e.prototype.debug = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ut.DEBUG], t));
    }, e.prototype.verbose = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, ut([Ut.VERBOSE], t));
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategoryName() === VI && (this._pluggables.push(t), t.configure(this._config));
    }, e.prototype.listPluggables = function() {
      return this._pluggables;
    }, e.LOG_LEVEL = null, e;
  }()
), ea = new Ht("Amplify"), qI = (
  /** @class */
  function() {
    function e() {
      this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = Ht, this.ServiceWorker = null;
    }
    return e.prototype.register = function(t) {
      ea.debug("component registered in amplify", t), this._components.push(t), typeof t.getModuleName == "function" ? (this._modules[t.getModuleName()] = t, this[t.getModuleName()] = t) : ea.debug("no getModuleName method for component", t), t.configure(this._config);
    }, e.prototype.configure = function(t) {
      var n = this;
      return t ? (this._config = Object.assign(this._config, t), ea.debug("amplify config", this._config), Object.entries(this._modules).forEach(function(r) {
        var i = ur(r, 2);
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
), sc = new qI(), KI = "5.1.12", eu = "aws-amplify/" + KI, Qn = {
  userAgent: eu + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (Qn.product = navigator.product || "", Qn.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      Qn.userAgent = eu + " react-native", Qn.isReactNative = !0;
      break;
    default:
      Qn.userAgent = eu + " js", Qn.isReactNative = !1;
      break;
  }
var GI = function(e) {
  return "" + Qn.userAgent + (e || "");
}, nn = new Ht("Hub"), JI = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function ZI(e) {
  return e.onHubCapsule !== void 0;
}
var XI = (
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
          nn.warn("No listeners for " + t);
          return;
        }
        this.patterns = ut(this.patterns.filter(function(o) {
          return o !== r;
        }));
      } else {
        var i = this.listeners[t];
        if (!i) {
          nn.warn("No listeners for " + t);
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
        var o = i === JI;
        o || nn.warn("WARNING: " + t + " is protected and dispatching on it can have unintended consequences");
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
        nn.error(a);
      }
    }, e.prototype.listen = function(t, n, r) {
      var i = this;
      r === void 0 && (r = "noname");
      var o;
      if (ZI(n))
        nn.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), o = n.onHubCapsule.bind(n);
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
        nn.debug("Dispatching to " + n + " with ", r);
        try {
          s.callback(t);
        } catch (a) {
          nn.error(a);
        }
      }), this.patterns.length > 0) {
        if (!r.message) {
          nn.warn("Cannot perform pattern matching without a message key");
          return;
        }
        var o = r.message;
        this.patterns.forEach(function(s) {
          var a = o.match(s.pattern);
          if (a) {
            var u = ur(a), c = u.slice(1), l = we(we({}, t), { patternInfo: c });
            try {
              s.callback(l);
            } catch (f) {
              nn.error(f);
            }
          }
        });
      }
    }, e;
  }()
), rn = new XI("__default__"), eN = function(e) {
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
}, hn = function() {
  var e = typeof window < "u" && typeof window.document < "u", t = typeof process < "u" && process.versions != null && process.versions.node != null;
  return {
    isBrowser: e,
    isNode: t
  };
}, Sn = {}, ws = {}, Nt = {};
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
var Ds = {};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.RawSha256 = void 0;
var bt = Nt, tN = (
  /** @class */
  function() {
    function e() {
      this.state = Int32Array.from(bt.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return e.prototype.update = function(t) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      var n = 0, r = t.byteLength;
      if (this.bytesHashed += r, this.bytesHashed * 8 > bt.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r > 0; )
        this.buffer[this.bufferLength++] = t[n++], r--, this.bufferLength === bt.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
    }, e.prototype.digest = function() {
      if (!this.finished) {
        var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
        if (n.setUint8(this.bufferLength++, 128), r % bt.BLOCK_SIZE >= bt.BLOCK_SIZE - 8) {
          for (var i = this.bufferLength; i < bt.BLOCK_SIZE; i++)
            n.setUint8(i, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < bt.BLOCK_SIZE - 8; i++)
          n.setUint8(i, 0);
        n.setUint32(bt.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), n.setUint32(bt.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
      }
      for (var o = new Uint8Array(bt.DIGEST_LENGTH), i = 0; i < 8; i++)
        o[i * 4] = this.state[i] >>> 24 & 255, o[i * 4 + 1] = this.state[i] >>> 16 & 255, o[i * 4 + 2] = this.state[i] >>> 8 & 255, o[i * 4 + 3] = this.state[i] >>> 0 & 255;
      return o;
    }, e.prototype.hashBuffer = function() {
      for (var t = this, n = t.buffer, r = t.state, i = r[0], o = r[1], s = r[2], a = r[3], u = r[4], c = r[5], l = r[6], f = r[7], d = 0; d < bt.BLOCK_SIZE; d++) {
        if (d < 16)
          this.temp[d] = (n[d * 4] & 255) << 24 | (n[d * 4 + 1] & 255) << 16 | (n[d * 4 + 2] & 255) << 8 | n[d * 4 + 3] & 255;
        else {
          var g = this.temp[d - 2], h = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
          g = this.temp[d - 15];
          var p = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
          this.temp[d] = (h + this.temp[d - 7] | 0) + (p + this.temp[d - 16] | 0);
        }
        var m = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & l) | 0) + (f + (bt.KEY[d] + this.temp[d] | 0) | 0) | 0, v = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & o ^ i & s ^ o & s) | 0;
        f = l, l = c, c = u, u = a + m | 0, a = s, s = o, o = i, i = m + v | 0;
      }
      r[0] += i, r[1] += o, r[2] += s, r[3] += a, r[4] += u, r[5] += c, r[6] += l, r[7] += f;
    }, e;
  }()
);
Ds.RawSha256 = tN;
var ac = {}, As = {};
const nN = (e) => {
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
}, rN = (e) => {
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
function iN(e) {
  return new TextEncoder().encode(e);
}
function oN(e) {
  return new TextDecoder("utf-8").decode(e);
}
const sN = (e) => typeof TextEncoder == "function" ? iN(e) : nN(e), aN = (e) => typeof TextDecoder == "function" ? oN(e) : rN(e), uN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: sN,
  toUtf8: aN
}, Symbol.toStringTag, { value: "Module" })), cN = /* @__PURE__ */ Yi(uN);
Object.defineProperty(As, "__esModule", { value: !0 });
As.convertToBuffer = void 0;
var lN = cN, fN = typeof Buffer < "u" && Buffer.from ? function(e) {
  return Buffer.from(e, "utf8");
} : lN.fromUtf8;
function dN(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? fN(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
As.convertToBuffer = dN;
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.isEmptyData = void 0;
function hN(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Es.isEmptyData = hN;
var Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.numToUint8 = void 0;
function gN(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255
  ]);
}
Is.numToUint8 = gN;
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.uint32ArrayFrom = void 0;
function pN(e) {
  if (!Array.from) {
    for (var t = new Uint32Array(e.length), n = 0; n < e.length; )
      t[n] = e[n];
    return t;
  }
  return Uint32Array.from(e);
}
Ns.uint32ArrayFrom = pN;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
  var t = As;
  Object.defineProperty(e, "convertToBuffer", { enumerable: !0, get: function() {
    return t.convertToBuffer;
  } });
  var n = Es;
  Object.defineProperty(e, "isEmptyData", { enumerable: !0, get: function() {
    return n.isEmptyData;
  } });
  var r = Is;
  Object.defineProperty(e, "numToUint8", { enumerable: !0, get: function() {
    return r.numToUint8;
  } });
  var i = Ns;
  Object.defineProperty(e, "uint32ArrayFrom", { enumerable: !0, get: function() {
    return i.uint32ArrayFrom;
  } });
})(ac);
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.Sha256 = void 0;
var Mf = ue, $o = Nt, tu = Ds, nu = ac, MN = (
  /** @class */
  function() {
    function e(t) {
      if (this.hash = new tu.RawSha256(), t) {
        this.outer = new tu.RawSha256();
        var n = yN(t), r = new Uint8Array($o.BLOCK_SIZE);
        r.set(n);
        for (var i = 0; i < $o.BLOCK_SIZE; i++)
          n[i] ^= 54, r[i] ^= 92;
        this.hash.update(n), this.outer.update(r);
        for (var i = 0; i < n.byteLength; i++)
          n[i] = 0;
      }
    }
    return e.prototype.update = function(t) {
      if (!((0, nu.isEmptyData)(t) || this.error))
        try {
          this.hash.update((0, nu.convertToBuffer)(t));
        } catch (n) {
          this.error = n;
        }
    }, e.prototype.digestSync = function() {
      if (this.error)
        throw this.error;
      return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
    }, e.prototype.digest = function() {
      return (0, Mf.__awaiter)(this, void 0, void 0, function() {
        return (0, Mf.__generator)(this, function(t) {
          return [2, this.digestSync()];
        });
      });
    }, e;
  }()
);
ws.Sha256 = MN;
function yN(e) {
  var t = (0, nu.convertToBuffer)(e);
  if (t.byteLength > $o.BLOCK_SIZE) {
    var n = new tu.RawSha256();
    n.update(t), t = n.digest();
  }
  var r = new Uint8Array($o.BLOCK_SIZE);
  return r.set(t), r;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  (0, t.__exportStar)(ws, e);
})(Sn);
var $g = {};
for (var oo = 0; oo < 256; oo++) {
  var so = oo.toString(16).toLowerCase();
  so.length === 1 && (so = "0" + so), $g[oo] = so;
}
function jr(e) {
  for (var t = "", n = 0; n < e.byteLength; n++)
    t += $g[e[n]];
  return t;
}
var Wo = {}, mN = {
  get exports() {
    return Wo;
  },
  set exports(e) {
    Wo = e;
  }
};
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(n) {
    var r = t && !t.nodeType && t, i = e && !e.nodeType && e, o = typeof kt == "object" && kt;
    (o.global === o || o.window === o || o.self === o) && (n = o);
    var s, a = 2147483647, u = 36, c = 1, l = 26, f = 38, d = 700, g = 72, h = 128, p = "-", m = /^xn--/, v = /[^\x20-\x7E]/, w = /[\x2E\u3002\uFF0E\uFF61]/g, j = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, N = u - c, I = Math.floor, Q = String.fromCharCode, z;
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
        return F > 65535 && (F -= 65536, P += Q(F >>> 10 & 1023 | 55296), F = 56320 | F & 1023), P += Q(F), P;
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
      var F = [], P = L.length, q, K = 0, X = h, O = g, ne, G, he, V, B, H, fe, te, le;
      for (ne = L.lastIndexOf(p), ne < 0 && (ne = 0), G = 0; G < ne; ++G)
        L.charCodeAt(G) >= 128 && W("not-basic"), F.push(L.charCodeAt(G));
      for (he = ne > 0 ? ne + 1 : 0; he < P; ) {
        for (V = K, B = 1, H = u; he >= P && W("invalid-input"), fe = x(L.charCodeAt(he++)), (fe >= u || fe > I((a - K) / B)) && W("overflow"), K += fe * B, te = H <= O ? c : H >= O + l ? l : H - O, !(fe < te); H += u)
          le = u - te, B > I(a / le) && W("overflow"), B *= le;
        q = F.length + 1, O = S(K - V, q, V == 0), I(K / q) > a - X && W("overflow"), X += I(K / q), K %= q, F.splice(K++, 0, X);
      }
      return U(F);
    }
    function C(L) {
      var F, P, q, K, X, O, ne, G, he, V, B, H = [], fe, te, le, Me;
      for (L = k(L), fe = L.length, F = h, P = 0, X = g, O = 0; O < fe; ++O)
        B = L[O], B < 128 && H.push(Q(B));
      for (q = K = H.length, K && H.push(p); q < fe; ) {
        for (ne = a, O = 0; O < fe; ++O)
          B = L[O], B >= F && B < ne && (ne = B);
        for (te = q + 1, ne - F > I((a - P) / te) && W("overflow"), P += (ne - F) * te, F = ne, O = 0; O < fe; ++O)
          if (B = L[O], B < F && ++P > a && W("overflow"), B == F) {
            for (G = P, he = u; V = he <= X ? c : he >= X + l ? l : he - X, !(G < V); he += u)
              Me = G - V, le = u - V, H.push(
                Q(T(V + Me % le, 0))
              ), G = I(Me / le);
            H.push(Q(T(G, 0))), X = S(P, te, q == K), P = 0, ++q;
          }
        ++P, ++F;
      }
      return H.join("");
    }
    function J(L) {
      return b(L, function(F) {
        return m.test(F) ? R(F.slice(4).toLowerCase()) : F;
      });
    }
    function re(L) {
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
      toASCII: re,
      toUnicode: J
    }, r && i)
      if (e.exports == r)
        i.exports = s;
      else
        for (z in s)
          s.hasOwnProperty(z) && (r[z] = s[z]);
    else
      n.punycode = s;
  })(kt);
})(mN, Wo);
var vN = {
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
}, _i = {};
function wN(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var DN = function(e, t, n, r) {
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
    l >= 0 ? (f = c.substr(0, l), d = c.substr(l + 1)) : (f = c, d = ""), g = decodeURIComponent(f), h = decodeURIComponent(d), wN(i, g) ? Array.isArray(i[g]) ? i[g].push(h) : i[g] = [i[g], h] : i[g] = h;
  }
  return i;
}, ni = function(e) {
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
}, AN = function(e, t, n, r) {
  return t = t || "&", n = n || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(i) {
    var o = encodeURIComponent(ni(i)) + n;
    return Array.isArray(e[i]) ? e[i].map(function(s) {
      return o + encodeURIComponent(ni(s));
    }).join(t) : o + encodeURIComponent(ni(e[i]));
  }).join(t) : r ? encodeURIComponent(ni(r)) + n + encodeURIComponent(ni(e)) : "";
};
_i.decode = _i.parse = DN;
_i.encode = _i.stringify = AN;
var EN = Wo, on = vN, wn = Wg;
function un() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var IN = /^([a-z0-9.+-]+:)/i, NN = /:[0-9]*$/, TN = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, jN = ["<", ">", '"', "`", " ", "\r", `
`, "	"], SN = ["{", "}", "|", "\\", "^", "`"].concat(jN), ru = ["'"].concat(SN), yf = ["%", "/", "?", ";", "#"].concat(ru), mf = ["/", "?", "#"], bN = 255, vf = /^[+a-z0-9A-Z_-]{0,63}$/, CN = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, xN = {
  javascript: !0,
  "javascript:": !0
}, iu = {
  javascript: !0,
  "javascript:": !0
}, Cr = {
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
}, ou = _i;
function Wg(e, t, n) {
  if (e && on.isObject(e) && e instanceof un)
    return e;
  var r = new un();
  return r.parse(e, t, n), r;
}
un.prototype.parse = function(e, t, n) {
  if (!on.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var r = e.indexOf("?"), i = r !== -1 && r < e.indexOf("#") ? "?" : "#", o = e.split(i), s = /\\/g;
  o[0] = o[0].replace(s, "/"), e = o.join(i);
  var a = e;
  if (a = a.trim(), !n && e.split("#").length === 1) {
    var u = TN.exec(a);
    if (u)
      return this.path = a, this.href = a, this.pathname = u[1], u[2] ? (this.search = u[2], t ? this.query = ou.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var c = IN.exec(a);
  if (c) {
    c = c[0];
    var l = c.toLowerCase();
    this.protocol = l, a = a.substr(c.length);
  }
  if (n || c || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(c && iu[c]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!iu[c] && (f || c && !Cr[c])) {
    for (var d = -1, g = 0; g < mf.length; g++) {
      var h = a.indexOf(mf[g]);
      h !== -1 && (d === -1 || h < d) && (d = h);
    }
    var p, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (p = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(p)), d = -1;
    for (var g = 0; g < yf.length; g++) {
      var h = a.indexOf(yf[g]);
      h !== -1 && (d === -1 || h < d) && (d = h);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v)
      for (var w = this.hostname.split(/\./), g = 0, j = w.length; g < j; g++) {
        var N = w[g];
        if (N && !N.match(vf)) {
          for (var I = "", Q = 0, z = N.length; Q < z; Q++)
            N.charCodeAt(Q) > 127 ? I += "x" : I += N[Q];
          if (!I.match(vf)) {
            var W = w.slice(0, g), $ = w.slice(g + 1), b = N.match(CN);
            b && (W.push(b[1]), $.unshift(b[2])), $.length && (a = "/" + $.join(".") + a), this.hostname = W.join(".");
            break;
          }
        }
      }
    this.hostname.length > bN ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), v || (this.hostname = EN.toASCII(this.hostname));
    var k = this.port ? ":" + this.port : "", U = this.hostname || "";
    this.host = U + k, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!xN[l])
    for (var g = 0, j = ru.length; g < j; g++) {
      var x = ru[g];
      if (a.indexOf(x) !== -1) {
        var T = encodeURIComponent(x);
        T === x && (T = escape(x)), a = a.split(x).join(T);
      }
    }
  var S = a.indexOf("#");
  S !== -1 && (this.hash = a.substr(S), a = a.slice(0, S));
  var R = a.indexOf("?");
  if (R !== -1 ? (this.search = a.substr(R), this.query = a.substr(R + 1), t && (this.query = ou.parse(this.query)), a = a.slice(0, R)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), Cr[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var k = this.pathname || "", C = this.search || "";
    this.path = k + C;
  }
  return this.href = this.format(), this;
};
un.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, o = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && on.isObject(this.query) && Object.keys(this.query).length && (o = ou.stringify(this.query));
  var s = this.search || o && "?" + o || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Cr[t]) && i !== !1 ? (i = "//" + (i || ""), n && n.charAt(0) !== "/" && (n = "/" + n)) : i || (i = ""), r && r.charAt(0) !== "#" && (r = "#" + r), s && s.charAt(0) !== "?" && (s = "?" + s), n = n.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), s = s.replace("#", "%23"), t + i + n + s + r;
};
un.prototype.resolve = function(e) {
  return this.resolveObject(Wg(e, !1, !0)).format();
};
un.prototype.resolveObject = function(e) {
  if (on.isString(e)) {
    var t = new un();
    t.parse(e, !1, !0), e = t;
  }
  for (var n = new un(), r = Object.keys(this), i = 0; i < r.length; i++) {
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
    return Cr[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!Cr[e.protocol]) {
      for (var c = Object.keys(e), l = 0; l < c.length; l++) {
        var f = c[l];
        n[f] = e[f];
      }
      return n.href = n.format(), n;
    }
    if (n.protocol = e.protocol, !e.host && !iu[e.protocol]) {
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
  var h = n.pathname && n.pathname.charAt(0) === "/", p = e.host || e.pathname && e.pathname.charAt(0) === "/", m = p || h || n.host && e.pathname, v = m, w = n.pathname && n.pathname.split("/") || [], j = e.pathname && e.pathname.split("/") || [], N = n.protocol && !Cr[n.protocol];
  if (N && (n.hostname = "", n.port = null, n.host && (w[0] === "" ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (j[0] === "" ? j[0] = e.host : j.unshift(e.host)), e.host = null), m = m && (j[0] === "" || w[0] === "")), p)
    n.host = e.host || e.host === "" ? e.host : n.host, n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = j;
  else if (j.length)
    w || (w = []), w.pop(), w = w.concat(j), n.search = e.search, n.query = e.query;
  else if (!on.isNullOrUndefined(e.search)) {
    if (N) {
      n.hostname = n.host = w.shift();
      var I = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
      I && (n.auth = I.shift(), n.host = n.hostname = I.shift());
    }
    return n.search = e.search, n.query = e.query, (!on.isNull(n.pathname) || !on.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
  }
  if (!w.length)
    return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var Q = w.slice(-1)[0], z = (n.host || e.host || w.length > 1) && (Q === "." || Q === "..") || Q === "", W = 0, $ = w.length; $ >= 0; $--)
    Q = w[$], Q === "." ? w.splice($, 1) : Q === ".." ? (w.splice($, 1), W++) : W && (w.splice($, 1), W--);
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
  return m = m || n.host && w.length, m && !b && w.unshift(""), w.length ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), (!on.isNull(n.pathname) || !on.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
};
un.prototype.parseHost = function() {
  var e = this.host, t = NN.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var ao = new Ht("Util"), Gn = (
  /** @class */
  function(e) {
    oc(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.nonRetryable = !0, r;
    }
    return t;
  }(Error)
), ON = function(e) {
  var t = "nonRetryable";
  return e && e[t];
};
function LN(e, t, n, r) {
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
                        u++, ao.debug(e.name + " attempt #" + u + " with this vars: " + JSON.stringify(t)), N.label = 1;
                      case 1:
                        return N.trys.push([1, 3, , 7]), m = {}, v = s, [4, e.apply(void 0, ut(t))];
                      case 2:
                        return [2, (m.value = v.apply(void 0, [N.sent()]), m)];
                      case 3:
                        return w = N.sent(), d = w, ao.debug("error on " + e.name, w), ON(w) ? (ao.debug(e.name + " non retryable error", w), [2, { value: a(w) }]) : (j = n(u, t, w), ao.debug(e.name + " retrying in " + j + " ms"), j === !1 || c ? [2, { value: a(w) }] : [3, 4]);
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
var Hg = 5 * 60 * 1e3;
function _N(e) {
  e === void 0 && (e = Hg);
  var t = 100, n = 100;
  return function(r) {
    var i = Math.pow(2, r) * t + n * Math.random();
    return i > e ? !1 : i;
  };
}
var kN = function(e, t, n, r) {
  return n === void 0 && (n = Hg), LN(e, t, _N(n), r);
};
function zN(e) {
  return e.split("").map(function(t) {
    return t.charCodeAt(0).toString(16).padStart(2, "0");
  }).join("");
}
function PN(e) {
  return e.match(/.{2}/g).map(function(t) {
    return String.fromCharCode(parseInt(t, 16));
  }).join("");
}
var RN = new Ht("Parser"), Vg = function(e) {
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
  })), t.Analytics = Object.assign({}, t.Analytics, e.Analytics), t.Auth = Object.assign({}, t.Auth, e.Auth), t.Storage = Object.assign({}, r), t.Logging = Object.assign({}, t.Logging, e.Logging), RN.debug("parse config", e, "to amplifyconfig", t), t;
}, su = function(e, t) {
  return su = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, su(e, t);
};
function uc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  su(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ie = function() {
  return ie = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, ie.apply(this, arguments);
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
function UN(e, t) {
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
var qg = {}, Ts = {}, qi = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.isEmptyData = void 0;
function FN(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
js.isEmptyData = FN;
var cc = {};
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
})(cc);
var YN = function(e) {
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
}, QN = function(e) {
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
function BN(e) {
  return new TextEncoder().encode(e);
}
function $N(e) {
  return new TextDecoder("utf-8").decode(e);
}
var Kg = function(e) {
  return typeof TextEncoder == "function" ? BN(e) : YN(e);
}, Gg = function(e) {
  return typeof TextDecoder == "function" ? $N(e) : QN(e);
};
const WN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: Kg,
  toUtf8: Gg
}, Symbol.toStringTag, { value: "Module" })), HN = /* @__PURE__ */ Yi(WN), VN = {};
function qN() {
  return typeof window < "u" ? window : typeof self < "u" ? self : VN;
}
const KN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  locateWindow: qN
}, Symbol.toStringTag, { value: "Module" })), lc = /* @__PURE__ */ Yi(KN);
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.Sha256 = void 0;
var GN = js, Jg = cc, JN = HN, au = lc, ZN = (
  /** @class */
  function() {
    function e(t) {
      t ? (this.operation = XN(t).then(function(n) {
        return (0, au.locateWindow)().msCrypto.subtle.sign(Jg.SHA_256_HMAC_ALGO, n);
      }), this.operation.catch(function() {
      })) : this.operation = Promise.resolve((0, au.locateWindow)().msCrypto.subtle.digest("SHA-256"));
    }
    return e.prototype.update = function(t) {
      var n = this;
      (0, GN.isEmptyData)(t) || (this.operation = this.operation.then(function(r) {
        return r.onerror = function() {
          n.operation = Promise.reject(new Error("Error encountered updating hash"));
        }, r.process(Zg(t)), r;
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
qi.Sha256 = ZN;
function XN(e) {
  return new Promise(function(t, n) {
    var r = (0, au.locateWindow)().msCrypto.subtle.importKey("raw", Zg(e), Jg.SHA_256_HMAC_ALGO, !1, ["sign"]);
    r.oncomplete = function() {
      r.result && t(r.result), n(new Error("ImportKey completed without importing key."));
    }, r.onerror = function() {
      n(new Error("ImportKey failed to import key."));
    };
  });
}
function Zg(e) {
  return typeof e == "string" ? (0, JN.fromUtf8)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.Sha256 = void 0;
var uo = ac, co = cc, ta = lc, eT = (
  /** @class */
  function() {
    function e(t) {
      this.toHash = new Uint8Array(0), t !== void 0 && (this.key = new Promise(function(n, r) {
        (0, ta.locateWindow)().crypto.subtle.importKey("raw", (0, uo.convertToBuffer)(t), co.SHA_256_HMAC_ALGO, !1, ["sign"]).then(n, r);
      }), this.key.catch(function() {
      }));
    }
    return e.prototype.update = function(t) {
      if (!(0, uo.isEmptyData)(t)) {
        var n = (0, uo.convertToBuffer)(t), r = new Uint8Array(this.toHash.byteLength + n.byteLength);
        r.set(this.toHash, 0), r.set(n, this.toHash.byteLength), this.toHash = r;
      }
    }, e.prototype.digest = function() {
      var t = this;
      return this.key ? this.key.then(function(n) {
        return (0, ta.locateWindow)().crypto.subtle.sign(co.SHA_256_HMAC_ALGO, n, t.toHash).then(function(r) {
          return new Uint8Array(r);
        });
      }) : (0, uo.isEmptyData)(this.toHash) ? Promise.resolve(co.EMPTY_DATA_SHA_256) : Promise.resolve().then(function() {
        return (0, ta.locateWindow)().crypto.subtle.digest(co.SHA_256_HASH, t.toHash);
      }).then(function(n) {
        return Promise.resolve(new Uint8Array(n));
      });
    }, e;
  }()
);
Ki.Sha256 = eT;
var Xg = {}, Rt = {}, wf;
function tT() {
  if (wf)
    return Rt;
  wf = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.supportsZeroByteGCM = Rt.supportsSubtleCrypto = Rt.supportsSecureRandom = Rt.supportsWebCrypto = void 0;
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
  Rt.supportsWebCrypto = n;
  function r(s) {
    if (typeof s == "object" && typeof s.crypto == "object") {
      var a = s.crypto.getRandomValues;
      return typeof a == "function";
    }
    return !1;
  }
  Rt.supportsSecureRandom = r;
  function i(s) {
    return s && t.every(function(a) {
      return typeof s[a] == "function";
    });
  }
  Rt.supportsSubtleCrypto = i;
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
  return Rt.supportsZeroByteGCM = o, Rt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(tT(), e);
})(Xg);
var ep = {}, na = {}, Df;
function nT() {
  return Df || (Df = 1, Object.defineProperty(na, "__esModule", { value: !0 })), na;
}
var ra = {}, Af;
function rT() {
  return Af || (Af = 1, Object.defineProperty(ra, "__esModule", { value: !0 })), ra;
}
var ia = {}, Ef;
function iT() {
  return Ef || (Ef = 1, Object.defineProperty(ia, "__esModule", { value: !0 })), ia;
}
var oa = {}, If;
function oT() {
  return If || (If = 1, Object.defineProperty(oa, "__esModule", { value: !0 })), oa;
}
var ri = {}, Nf;
function sT() {
  if (Nf)
    return ri;
  Nf = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.isMsWindow = void 0;
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
  return ri.isMsWindow = n, ri;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(nT(), e), t.__exportStar(rT(), e), t.__exportStar(iT(), e), t.__exportStar(oT(), e), t.__exportStar(sT(), e);
})(ep);
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.Sha256 = void 0;
var aT = qi, uT = Ki, cT = Sn, lT = Xg, fT = ep, Tf = lc, dT = (
  /** @class */
  function() {
    function e(t) {
      (0, lT.supportsWebCrypto)((0, Tf.locateWindow)()) ? this.hash = new uT.Sha256(t) : (0, fT.isMsWindow)((0, Tf.locateWindow)()) ? this.hash = new aT.Sha256(t) : this.hash = new cT.Sha256(t);
    }
    return e.prototype.update = function(t, n) {
      this.hash.update(t, n);
    }, e.prototype.digest = function() {
      return this.hash.digest();
    }, e;
  }()
);
Ts.Sha256 = dT;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebCryptoSha256 = e.Ie11Sha256 = void 0;
  var t = ue;
  (0, t.__exportStar)(Ts, e);
  var n = qi;
  Object.defineProperty(e, "Ie11Sha256", { enumerable: !0, get: function() {
    return n.Sha256;
  } });
  var r = Ki;
  Object.defineProperty(e, "WebCryptoSha256", { enumerable: !0, get: function() {
    return r.Sha256;
  } });
})(qg);
var jf = (
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
), Rr = (
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
      return t.query && (t.query = hT(t.query)), t;
    }, e;
  }()
);
function hT(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r, i = e[n];
    return we(we({}, t), (r = {}, r[n] = Array.isArray(i) ? ut(i) : i, r));
  }, {});
}
var Jn = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, gT);
}, gT = function(e) {
  return "%" + e.charCodeAt(0).toString(16).toUpperCase();
};
function pT(e) {
  var t, n, r = [];
  try {
    for (var i = Pt(Object.keys(e).sort()), o = i.next(); !o.done; o = i.next()) {
      var s = o.value, a = e[s];
      if (s = Jn(s), Array.isArray(a))
        for (var u = 0, c = a.length; u < c; u++)
          r.push(s + "=" + Jn(a[u]));
      else {
        var l = s;
        (a || typeof a == "string") && (l += "=" + Jn(a)), r.push(l);
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
function MT(e) {
  return e === void 0 && (e = 0), new Promise(function(t, n) {
    e && setTimeout(function() {
      var r = new Error("Request did not complete within " + e + " ms");
      r.name = "TimeoutError", n(r);
    }, e);
  });
}
var yT = (
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
        var u = pT(t.query);
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
            for (var I = Pt(j.entries()), Q = I.next(); !Q.done; Q = I.next()) {
              var z = Q.value;
              N[z[0]] = z[1];
            }
          } catch ($) {
            v = { error: $ };
          } finally {
            try {
              Q && !Q.done && (w = I.return) && w.call(I);
            } finally {
              if (v)
                throw v.error;
            }
          }
          var W = m.body !== void 0;
          return W ? {
            response: new jf({
              headers: N,
              statusCode: m.status,
              body: m.body
            })
          } : m.blob().then(function($) {
            return {
              response: new jf({
                headers: N,
                statusCode: m.status,
                body: $
              })
            };
          });
        }),
        MT(o)
      ];
      return i && p.push(new Promise(function(m, v) {
        i.onabort = function() {
          var w = new Error("Request aborted");
          w.name = "AbortError", v(w);
        };
      })), Promise.race(p);
    }, e;
  }()
), ar = {}, Wr = new Array(64);
for (var ft = 0, ki = "A".charCodeAt(0), fc = "Z".charCodeAt(0); ft + ki <= fc; ft++) {
  var Cn = String.fromCharCode(ft + ki);
  ar[Cn] = ft, Wr[ft] = Cn;
}
for (var ft = 0, ki = "a".charCodeAt(0), fc = "z".charCodeAt(0); ft + ki <= fc; ft++) {
  var Cn = String.fromCharCode(ft + ki), zi = ft + 26;
  ar[Cn] = zi, Wr[zi] = Cn;
}
for (var ft = 0; ft < 10; ft++) {
  ar[ft.toString(10)] = ft + 52;
  var Cn = ft.toString(10), zi = ft + 52;
  ar[Cn] = zi, Wr[zi] = Cn;
}
ar["+"] = 62;
Wr[62] = "+";
ar["/"] = 63;
Wr[63] = "/";
var xr = 6, vi = 8, mT = 63;
function tp(e) {
  var t = e.length / 4 * 3;
  e.substr(-2) === "==" ? t -= 2 : e.substr(-1) === "=" && t--;
  for (var n = new ArrayBuffer(t), r = new DataView(n), i = 0; i < e.length; i += 4) {
    for (var o = 0, s = 0, a = i, u = i + 3; a <= u; a++)
      e[a] !== "=" ? (o |= ar[e[a]] << (u - a) * xr, s += xr) : o >>= xr;
    var c = i / 4 * 3;
    o >>= s % vi;
    for (var l = Math.floor(s / vi), f = 0; f < l; f++) {
      var d = (l - f - 1) * vi;
      r.setUint8(c + f, (o & 255 << d) >> d);
    }
  }
  return new Uint8Array(n);
}
function vT(e) {
  for (var t = "", n = 0; n < e.length; n += 3) {
    for (var r = 0, i = 0, o = n, s = Math.min(n + 3, e.length); o < s; o++)
      r |= e[o] << (s - o - 1) * vi, i += vi;
    var a = Math.ceil(i / xr);
    r <<= a * xr - i;
    for (var u = 1; u <= a; u++) {
      var c = (a - u) * xr;
      t += Wr[(r & mT << c) >> c];
    }
    t += "==".slice(0, 4 - a);
  }
  return t;
}
var wT = function(e) {
  return typeof Blob == "function" && e instanceof Blob ? DT(e) : AT(e);
};
function DT(e) {
  return Ne(this, void 0, void 0, function() {
    var t, n;
    return Ee(this, function(r) {
      switch (r.label) {
        case 0:
          return [4, ET(e)];
        case 1:
          return t = r.sent(), n = tp(t), [2, new Uint8Array(n)];
      }
    });
  });
}
function AT(e) {
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
function ET(e) {
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
var IT = function(e) {
  return function() {
    return Promise.reject(e);
  };
}, NT = function(e) {
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
}, TT = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: !0
}, jT = function(e) {
  return {
    applyToStack: function(t) {
      t.add(NT(e), TT);
    }
  };
}, ST = 100, bT = 20 * 1e3, CT = 500, xT = 500, OT = 5, LT = 10, _T = 1, kT = "amz-sdk-invocation-id", zT = "amz-sdk-request", PT = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch"
], RT = [
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
], UT = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"], FT = [500, 502, 503, 504], YT = function(e) {
  return e.$retryable !== void 0;
}, QT = function(e) {
  return PT.includes(e.name);
}, np = function(e) {
  var t, n;
  return ((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) === 429 || RT.includes(e.name) || ((n = e.$retryable) === null || n === void 0 ? void 0 : n.throttling) == !0;
}, BT = function(e) {
  var t;
  return UT.includes(e.name) || FT.includes(((t = e.$metadata) === null || t === void 0 ? void 0 : t.httpStatusCode) || 0);
}, Ho = {}, Sf = {
  get exports() {
    return Ho;
  },
  set exports(e) {
    Ho = e;
  }
}, bf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (bf) {
  var Cf = new Uint8Array(16);
  Sf.exports = function() {
    return bf(Cf), Cf;
  };
} else {
  var xf = new Array(16);
  Sf.exports = function() {
    for (var t = 0, n; t < 16; t++)
      t & 3 || (n = Math.random() * 4294967296), xf[t] = n >>> ((t & 3) << 3) & 255;
    return xf;
  };
}
var rp = [];
for (var lo = 0; lo < 256; ++lo)
  rp[lo] = (lo + 256).toString(16).substr(1);
function $T(e, t) {
  var n = t || 0, r = rp;
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
var ip = $T, WT = Ho, HT = ip, Of, sa, aa = 0, ua = 0;
function VT(e, t, n) {
  var r = t && n || 0, i = t || [];
  e = e || {};
  var o = e.node || Of, s = e.clockseq !== void 0 ? e.clockseq : sa;
  if (o == null || s == null) {
    var a = WT();
    o == null && (o = Of = [
      a[0] | 1,
      a[1],
      a[2],
      a[3],
      a[4],
      a[5]
    ]), s == null && (s = sa = (a[6] << 8 | a[7]) & 16383);
  }
  var u = e.msecs !== void 0 ? e.msecs : (/* @__PURE__ */ new Date()).getTime(), c = e.nsecs !== void 0 ? e.nsecs : ua + 1, l = u - aa + (c - ua) / 1e4;
  if (l < 0 && e.clockseq === void 0 && (s = s + 1 & 16383), (l < 0 || u > aa) && e.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  aa = u, ua = c, sa = s, u += 122192928e5;
  var f = ((u & 268435455) * 1e4 + c) % 4294967296;
  i[r++] = f >>> 24 & 255, i[r++] = f >>> 16 & 255, i[r++] = f >>> 8 & 255, i[r++] = f & 255;
  var d = u / 4294967296 * 1e4 & 268435455;
  i[r++] = d >>> 8 & 255, i[r++] = d & 255, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = s & 255;
  for (var g = 0; g < 6; ++g)
    i[r + g] = o[g];
  return t || HT(i);
}
var qT = VT, KT = Ho, GT = ip;
function JT(e, t, n) {
  var r = t && n || 0;
  typeof e == "string" && (t = e === "binary" ? new Array(16) : null, e = null), e = e || {};
  var i = e.random || (e.rng || KT)();
  if (i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, t)
    for (var o = 0; o < 16; ++o)
      t[r + o] = i[o];
  return t || GT(i);
}
var ZT = JT, XT = qT, op = ZT, dc = op;
dc.v1 = XT;
dc.v4 = op;
var ej = dc, tj = function(e) {
  var t = e, n = e, r = function(a) {
    return a.name === "TimeoutError" ? LT : OT;
  }, i = function(a) {
    return r(a) <= n;
  }, o = function(a) {
    if (!i(a))
      throw new Error("No retry token available");
    var u = r(a);
    return n -= u, u;
  }, s = function(a) {
    n += a ?? _T, n = Math.min(n, t);
  };
  return Object.freeze({
    hasRetryTokens: i,
    retrieveRetryTokens: o,
    releaseRetryTokens: s
  });
}, nj = function(e, t) {
  return Math.floor(Math.min(bT, Math.random() * Math.pow(2, t) * e));
}, rj = function(e) {
  return e ? YT(e) || QT(e) || np(e) || BT(e) : !1;
}, hc = 3, ij = "standard", oj = (
  /** @class */
  function() {
    function e(t, n) {
      var r, i, o;
      this.maxAttemptsProvider = t, this.mode = ij, this.retryDecider = (r = n == null ? void 0 : n.retryDecider) !== null && r !== void 0 ? r : rj, this.delayDecider = (i = n == null ? void 0 : n.delayDecider) !== null && i !== void 0 ? i : nj, this.retryQuota = (o = n == null ? void 0 : n.retryQuota) !== null && o !== void 0 ? o : tj(xT);
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
              return n.sent(), t = hc, [3, 3];
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
              s = f.sent(), a = n.request, Rr.isInstance(a) && (a.headers[kT] = ej.v4()), u = function() {
                var d, g, h, p, m;
                return Ee(this, function(v) {
                  switch (v.label) {
                    case 0:
                      return v.trys.push([0, 2, , 5]), Rr.isInstance(a) && (a.headers[zT] = "attempt=" + (i + 1) + "; max=" + s), [4, t(n)];
                    case 1:
                      return d = v.sent(), g = d.response, h = d.output, c.retryQuota.releaseRetryTokens(r), h.$metadata.attempts = i + 1, h.$metadata.totalRetryDelay = o, [2, { value: { response: g, output: h } }];
                    case 2:
                      return p = v.sent(), i++, c.shouldRetry(p, i, s) ? (r = c.retryQuota.retrieveRetryTokens(p), m = c.delayDecider(np(p) ? CT : ST, i), o += m, [4, new Promise(function(w) {
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
), sj = function(e) {
  var t = aj(e.maxAttempts);
  return we(we({}, e), { maxAttempts: t, retryStrategy: e.retryStrategy || new oj(t) });
}, aj = function(e) {
  if (e === void 0 && (e = hc), typeof e == "number") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
};
function uj(e) {
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
const cj = {
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
}, sp = {
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
}, mn = {
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
    return cj[t];
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
    return sp[t] || "";
  }
}
const qe = /version\/(\d+(\.?_?\d+)+)/i, lj = [
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
], fj = [
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
], dj = [
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
], hj = [
  /* EdgeHTML */
  {
    test(e) {
      return e.getBrowserName(!0) === "microsoft edge";
    },
    describe(e) {
      if (/\sedg\//i.test(e))
        return {
          name: mn.Blink
        };
      const n = se.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: mn.EdgeHTML,
        version: n
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(e) {
      const t = {
        name: mn.Trident
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
        name: mn.Presto
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
        name: mn.Gecko
      }, n = se.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: mn.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
        name: mn.WebKit
      }, n = se.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }
];
class Lf {
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
    const t = se.find(lj, (n) => {
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
    const t = se.find(fj, (n) => {
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
    const t = se.find(dj, (n) => {
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
    const t = se.find(hj, (n) => {
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
class gj {
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
    return new Lf(t, n);
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
    return new Lf(t).getResult();
  }
  static get BROWSER_MAP() {
    return sp;
  }
  static get ENGINE_MAP() {
    return mn;
  }
  static get OS_MAP() {
    return mt;
  }
  static get PLATFORMS_MAP() {
    return rt;
  }
}
var pj = function(e) {
  var t = e.serviceId, n = e.clientVersion;
  return function() {
    return Ne(void 0, void 0, void 0, function() {
      var r, i, o, s, a, u, c, l, f;
      return Ee(this, function(d) {
        return r = !((o = window == null ? void 0 : window.navigator) === null || o === void 0) && o.userAgent ? gj.parse(window.navigator.userAgent) : void 0, i = [
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
function Mj(e) {
  var t, n, r = {};
  if (e = e.replace(/^\?/, ""), e)
    try {
      for (var i = Pt(e.split("&")), o = i.next(); !o.done; o = i.next()) {
        var s = o.value, a = ur(s.split("="), 2), u = a[0], c = a[1], l = c === void 0 ? null : c;
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
var yj = function(e) {
  var t = new URL(e), n = t.hostname, r = t.pathname, i = t.port, o = t.protocol, s = t.search, a;
  return s && (a = Mj(s)), {
    hostname: n,
    port: i ? parseInt(i) : void 0,
    protocol: o,
    path: r,
    query: a
  };
}, mj = function(e) {
  var t;
  return we(we({}, e), { tls: (t = e.tls) !== null && t !== void 0 ? t : !0, endpoint: e.endpoint ? vj(e) : function() {
    return wj(e);
  }, isCustomEndpoint: !!e.endpoint });
}, vj = function(e) {
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
}, wj = function(e) {
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
}, Dj = function(e) {
  if (!e.region)
    throw new Error("Region is missing");
  return we(we({}, e), { region: Aj(e.region) });
}, Aj = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}, _f = "content-length";
function Ej(e) {
  var t = this;
  return function(n) {
    return function(r) {
      return Ne(t, void 0, void 0, function() {
        var i, o, s, a, u;
        return Ee(this, function(c) {
          return i = r.request, Rr.isInstance(i) && (o = i.body, s = i.headers, o && Object.keys(s).map(function(l) {
            return l.toLowerCase();
          }).indexOf(_f) === -1 && (a = e(o), a !== void 0 && (i.headers = we(we({}, i.headers), (u = {}, u[_f] = String(a), u))))), [2, n(we(we({}, r), { request: i }))];
        });
      });
    };
  };
}
var Ij = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: !0
}, Nj = function(e) {
  return {
    applyToStack: function(t) {
      t.add(Ej(e.bodyLengthChecker), Ij);
    }
  };
};
var Tj = function(e) {
  return function(t) {
    return function(n) {
      return Ne(void 0, void 0, void 0, function() {
        var r, i, o;
        return Ee(this, function(s) {
          return Rr.isInstance(n.request) ? (r = n.request, i = (e.requestHandler.metadata || {}).handlerProtocol, o = i === void 0 ? "" : i, o.indexOf("h2") >= 0 && !r.headers[":authority"] ? (delete r.headers.host, r.headers[":authority"] = "") : r.headers.host || (r.headers.host = r.hostname), [2, t(n)]) : [2, t(n)];
        });
      });
    };
  };
}, jj = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: !0
}, Sj = function(e) {
  return {
    applyToStack: function(t) {
      t.add(Tj(e), jj);
    }
  };
}, bj = function() {
  return function(e, t) {
    return function(n) {
      return Ne(void 0, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l, f;
        return Ee(this, function(d) {
          switch (d.label) {
            case 0:
              return r = t.clientName, i = t.commandName, o = t.inputFilterSensitiveLog, s = t.logger, a = t.outputFilterSensitiveLog, [4, e(n)];
            case 1:
              return u = d.sent(), s ? (typeof s.info == "function" && (c = u.output, l = c.$metadata, f = Bg(c, ["$metadata"]), s.info({
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
}, Cj = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: !0
}, xj = function(e) {
  return {
    applyToStack: function(t) {
      t.add(bj(), Cj);
    }
  };
}, Oj = "X-Amz-Algorithm", Lj = "X-Amz-Credential", ap = "X-Amz-Date", _j = "X-Amz-SignedHeaders", kj = "X-Amz-Expires", up = "X-Amz-Signature", cp = "X-Amz-Security-Token", lp = "authorization", fp = ap.toLowerCase(), zj = "date", Pj = [lp, fp, zj], Rj = up.toLowerCase(), uu = "x-amz-content-sha256", Uj = cp.toLowerCase(), Fj = {
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
}, Yj = /^proxy-/, Qj = /^sec-/, ca = "AWS4-HMAC-SHA256", Bj = "AWS4-HMAC-SHA256-PAYLOAD", $j = "UNSIGNED-PAYLOAD", Wj = 50, dp = "aws4_request", Hj = 60 * 60 * 24 * 7, fo = {}, la = [];
function fa(e, t, n) {
  return e + "/" + t + "/" + n + "/" + dp;
}
var Vj = function(e, t, n, r, i) {
  return Ne(void 0, void 0, void 0, function() {
    var o, s, a, u, c, l, f, d, g;
    return Ee(this, function(h) {
      switch (h.label) {
        case 0:
          return [4, kf(e, t.secretAccessKey, t.accessKeyId)];
        case 1:
          if (o = h.sent(), s = n + ":" + r + ":" + i + ":" + jr(o) + ":" + t.sessionToken, s in fo)
            return [2, fo[s]];
          for (la.push(s); la.length > Wj; )
            delete fo[la.shift()];
          a = "AWS4" + t.secretAccessKey, h.label = 2;
        case 2:
          h.trys.push([2, 7, 8, 9]), u = Pt([n, r, i, dp]), c = u.next(), h.label = 3;
        case 3:
          return c.done ? [3, 6] : (l = c.value, [4, kf(e, a, l)]);
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
          return [2, fo[s] = a];
      }
    });
  });
};
function kf(e, t, n) {
  var r = new e(t);
  return r.update(n), r.digest();
}
function zf(e, t, n) {
  var r, i, o = e.headers, s = {};
  try {
    for (var a = Pt(Object.keys(o).sort()), u = a.next(); !u.done; u = a.next()) {
      var c = u.value, l = c.toLowerCase();
      (l in Fj || t != null && t.has(l) || Yj.test(l) || Qj.test(l)) && (!n || n && !n.has(l)) || (s[l] = o[c].trim().replace(/\s+/g, " "));
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
function qj(e) {
  var t, n, r = e.query, i = r === void 0 ? {} : r, o = [], s = {}, a = function(f) {
    if (f.toLowerCase() === Rj)
      return "continue";
    o.push(f);
    var d = i[f];
    typeof d == "string" ? s[f] = Jn(f) + "=" + Jn(d) : Array.isArray(d) && (s[f] = d.slice(0).sort().reduce(function(g, h) {
      return g.concat([Jn(f) + "=" + Jn(h)]);
    }, []).join("&"));
  };
  try {
    for (var u = Pt(Object.keys(i).sort()), c = u.next(); !c.done; c = u.next()) {
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
var Kj = function(e) {
  return typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
};
function da(e, t) {
  var n = e.headers, r = e.body;
  return Ne(this, void 0, void 0, function() {
    var i, o, s, a, u, c, l;
    return Ee(this, function(f) {
      switch (f.label) {
        case 0:
          try {
            for (i = Pt(Object.keys(n)), o = i.next(); !o.done; o = i.next())
              if (s = o.value, s.toLowerCase() === uu)
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
          return typeof r == "string" || ArrayBuffer.isView(r) || Kj(r) ? (a = new t(), a.update(r), u = jr, [4, a.digest()]) : [3, 3];
        case 2:
          return [2, u.apply(void 0, [f.sent()])];
        case 3:
          return [2, $j];
      }
    });
  });
}
function Gj(e, t) {
  var n, r;
  e = e.toLowerCase();
  try {
    for (var i = Pt(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
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
function hp(e) {
  var t = e.headers, n = e.query, r = Bg(e, ["headers", "query"]);
  return we(we({}, r), { headers: we({}, t), query: n ? Jj(n) : void 0 });
}
function Jj(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r, i = e[n];
    return we(we({}, t), (r = {}, r[n] = Array.isArray(i) ? ut(i) : i, r));
  }, {});
}
function Zj(e, t) {
  var n, r, i;
  t === void 0 && (t = {});
  var o = typeof e.clone == "function" ? e.clone() : hp(e), s = o.headers, a = o.query, u = a === void 0 ? {} : a;
  try {
    for (var c = Pt(Object.keys(s)), l = c.next(); !l.done; l = c.next()) {
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
function Pf(e) {
  var t, n;
  e = typeof e.clone == "function" ? e.clone() : hp(e);
  try {
    for (var r = Pt(Object.keys(e.headers)), i = r.next(); !i.done; i = r.next()) {
      var o = i.value;
      Pj.indexOf(o.toLowerCase()) > -1 && delete e.headers[o];
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
function Xj(e) {
  return eS(e).toISOString().replace(/\.\d{3}Z$/, "Z");
}
function eS(e) {
  return typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
}
var tS = (
  /** @class */
  function() {
    function e(t) {
      var n = t.applyChecksum, r = t.credentials, i = t.region, o = t.service, s = t.sha256, a = t.uriEscapePath, u = a === void 0 ? !0 : a;
      this.service = o, this.sha256 = s, this.uriEscapePath = u, this.applyChecksum = typeof n == "boolean" ? n : !0, this.regionProvider = nS(i), this.credentialProvider = rS(r);
    }
    return e.prototype.presign = function(t, n) {
      return n === void 0 && (n = {}), Ne(this, void 0, void 0, function() {
        var r, i, o, s, a, u, c, l, f, d, g, h, p, m, v, w, j, N, I, Q, z, W, $, b;
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
              return g = h, p = ho(i), m = p.longDate, v = p.shortDate, s > Hj ? [2, Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future")] : (w = fa(v, g, f ?? this.service), j = Zj(Pf(t), { unhoistableHeaders: u }), d.sessionToken && (j.query[cp] = d.sessionToken), j.query[Oj] = ca, j.query[Lj] = d.accessKeyId + "/" + w, j.query[ap] = m, j.query[kj] = s.toString(10), N = zf(j, a, c), j.query[_j] = Rf(N), I = j.query, Q = up, z = this.getSignature, W = [
                m,
                w,
                this.getSigningKey(d, g, v, f)
              ], $ = this.createCanonicalRequest, b = [j, N], [4, da(t, this.sha256)]);
            case 5:
              return [4, z.apply(this, W.concat([$.apply(this, b.concat([k.sent()]))]))];
            case 6:
              return I[Q] = k.sent(), [2, j];
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
              return l = f, d = ho(s), g = d.shortDate, h = d.longDate, p = fa(g, l, c ?? this.service), [4, da({ headers: {}, body: i }, this.sha256)];
            case 4:
              return m = I.sent(), v = new this.sha256(), v.update(r), j = jr, [4, v.digest()];
            case 5:
              return w = j.apply(void 0, [I.sent()]), N = [
                Bj,
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
              return c = l, f = ho(o).shortDate, h = (g = this.sha256).bind, [4, this.getSigningKey(u, c, f, a)];
            case 5:
              return d = new (h.apply(g, [void 0, m.sent()]))(), d.update(t), p = jr, [4, d.digest()];
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
              return f = d, g = Pf(t), h = ho(o), p = h.longDate, m = h.shortDate, v = fa(m, f, c ?? this.service), g.headers[fp] = p, l.sessionToken && (g.headers[Uj] = l.sessionToken), [4, da(g, this.sha256)];
            case 5:
              return w = I.sent(), !Gj(uu, g.headers) && this.applyChecksum && (g.headers[uu] = w), j = zf(g, a, s), [4, this.getSignature(p, v, this.getSigningKey(l, f, m, c), this.createCanonicalRequest(g, j, w))];
            case 6:
              return N = I.sent(), g.headers[lp] = ca + " " + ("Credential=" + l.accessKeyId + "/" + v + ", ") + ("SignedHeaders=" + Rf(j) + ", ") + ("Signature=" + N), [2, g];
          }
        });
      });
    }, e.prototype.createCanonicalRequest = function(t, n, r) {
      var i = Object.keys(n).sort();
      return t.method + `
` + this.getCanonicalPath(t) + `
` + qj(t) + `
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
              return o = s.sent(), [2, ca + `
` + t + `
` + n + `
` + jr(o)];
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
              return s = new (u.apply(a, [void 0, l.sent()]))(), s.update(o), c = jr, [4, s.digest()];
            case 3:
              return [2, c.apply(void 0, [l.sent()])];
          }
        });
      });
    }, e.prototype.getSigningKey = function(t, n, r, i) {
      return Vj(this.sha256, t, r, n, i || this.service);
    }, e;
  }()
), ho = function(e) {
  var t = Xj(e).replace(/[\-:]/g, "");
  return {
    longDate: t,
    shortDate: t.substr(0, 8)
  };
}, Rf = function(e) {
  return Object.keys(e).sort().join(";");
}, nS = function(e) {
  if (typeof e == "string") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
}, rS = function(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  } else
    return e;
};
function iS(e) {
  var t = this, n = e.credentials || e.credentialDefaultProvider(e), r = ha(n), i = e.signingEscapePath, o = i === void 0 ? !0 : i, s = e.systemClockOffset, a = s === void 0 ? e.systemClockOffset || 0 : s, u = e.sha256, c;
  return e.signer ? c = ha(e.signer) : c = function() {
    return ha(e.region)().then(function(l) {
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
      var f = ur(l, 2), d = f[0], g = f[1], h = d.signingRegion, p = d.signingService;
      return e.signingRegion = e.signingRegion || h || g, e.signingName = e.signingName || p || e.serviceId, new tS({
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
function ha(e) {
  if (typeof e == "object") {
    var t = Promise.resolve(e);
    return function() {
      return t;
    };
  }
  return e;
}
function oS(e) {
  return we(we({}, e), { customUserAgent: typeof e.customUserAgent == "string" ? [[e.customUserAgent]] : e.customUserAgent });
}
var ga = "user-agent", sS = "x-amz-user-agent", Uf = " ", aS = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g, uS = function(e) {
  return function(t, n) {
    return function(r) {
      return Ne(void 0, void 0, void 0, function() {
        var i, o, s, a, u, c, l, f;
        return Ee(this, function(d) {
          switch (d.label) {
            case 0:
              return i = r.request, Rr.isInstance(i) ? (o = i.headers, s = ((l = n == null ? void 0 : n.userAgent) === null || l === void 0 ? void 0 : l.map(pa)) || [], [4, e.defaultUserAgentProvider()]) : [2, t(r)];
            case 1:
              return a = d.sent().map(pa), u = ((f = e == null ? void 0 : e.customUserAgent) === null || f === void 0 ? void 0 : f.map(pa)) || [], o[sS] = ut(a, s, u).join(Uf), c = ut(a.filter(function(g) {
                return g.startsWith("aws-sdk-");
              }), u).join(Uf), e.runtime !== "browser" && c && (o[ga] = o[ga] ? o[ga] + " " + c : c), [2, t(we(we({}, r), { request: i }))];
          }
        });
      });
    };
  };
}, pa = function(e) {
  var t = ur(e, 2), n = t[0], r = t[1], i = n.indexOf("/"), o = n.substring(0, i), s = n.substring(i + 1);
  return o === "api" && (s = s.toLowerCase()), [o, s, r].filter(function(a) {
    return a && a.length > 0;
  }).map(function(a) {
    return a == null ? void 0 : a.replace(aS, "_");
  }).join("/");
}, cS = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: !0
}, lS = function(e) {
  return {
    applyToStack: function(t) {
      t.add(uS(e), cS);
    }
  };
}, Vo = function() {
  var e = [], t = [], n = /* @__PURE__ */ new Set(), r = function(l) {
    return l.sort(function(f, d) {
      return Ff[d.step] - Ff[f.step] || Yf[d.priority || "normal"] - Yf[f.priority || "normal"];
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
      return s(Vo());
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
      var f = s(Vo());
      return f.use(l), f;
    },
    applyToStack: s,
    resolve: function(l, f) {
      var d, g;
      try {
        for (var h = Pt(u().reverse()), p = h.next(); !p.done; p = h.next()) {
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
}, Ff = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
}, Yf = {
  high: 3,
  normal: 2,
  low: 1
}, fS = (
  /** @class */
  function() {
    function e(t) {
      this.middlewareStack = Vo(), this.config = t;
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
), gp = (
  /** @class */
  function() {
    function e() {
      this.middlewareStack = Vo();
    }
    return e;
  }()
), qo = function() {
  var e = Object.getPrototypeOf(this).constructor, t = Function.bind.apply(String, ut([null], arguments)), n = new t();
  return Object.setPrototypeOf(n, e.prototype), n;
};
qo.prototype = Object.create(String.prototype, {
  constructor: {
    value: qo,
    enumerable: !1,
    writable: !0,
    configurable: !0
  }
});
Object.setPrototypeOf(qo, String);
(function(e) {
  oc(t, e);
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
})(qo);
var dS = function(e, t) {
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
}, hS = function(e, t) {
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
}, gS = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: !0
}, pS = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: !0
};
function pp(e, t, n) {
  return {
    applyToStack: function(r) {
      r.add(dS(e, n), gS), r.add(hS(e, t), pS);
    }
  };
}
var Dn = new Ht("CognitoCredentials"), MS = new Promise(function(e, t) {
  if (!hn().isBrowser)
    return Dn.debug("not in the browser, directly resolved"), e();
  var n = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null;
  if (n)
    return Dn.debug("google api already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), yS = (
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
              return this.initialized ? [3, 2] : (Dn.debug("need to wait for the Google SDK loaded"), [4, MS]);
            case 1:
              t.sent(), this.initialized = !0, Dn.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshGoogleTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshGoogleTokenImpl = function() {
      var t = null;
      return hn().isBrowser && (t = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), t ? new Promise(function(n, r) {
        t.getAuthInstance().then(function(i) {
          i || (Dn.debug("google Auth undefined"), r(new Gn("google Auth undefined")));
          var o = i.currentUser.get();
          o.isSignedIn() ? (Dn.debug("refreshing the google access token"), o.reloadAuthResponse().then(function(s) {
            var a = s.id_token, u = s.expires_at;
            n({ token: a, expires_at: u });
          }).catch(function(s) {
            s && s.error === "network_error" ? r("Network error reloading google auth response") : r(new Gn("Failed to reload google auth response"));
          })) : r(new Gn("User is not signed in with Google"));
        }).catch(function(i) {
          Dn.debug("Failed to refresh google token", i), r(new Gn("Failed to refresh google token"));
        });
      }) : (Dn.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
    }, e;
  }()
), $n = new Ht("CognitoCredentials"), mS = new Promise(function(e, t) {
  if (!hn().isBrowser)
    return $n.debug("not in the browser, directly resolved"), e();
  var n = window.FB;
  if (n)
    return $n.debug("FB SDK already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), vS = (
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
              return this.initialized ? [3, 2] : ($n.debug("need to wait for the Facebook SDK loaded"), [4, mS]);
            case 1:
              t.sent(), this.initialized = !0, $n.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshFacebookTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshFacebookTokenImpl = function() {
      var t = null;
      if (hn().isBrowser && (t = window.FB), !t) {
        var n = "no fb sdk available";
        return $n.debug(n), Promise.reject(new Gn(n));
      }
      return new Promise(function(r, i) {
        t.getLoginStatus(function(o) {
          if (!o || !o.authResponse) {
            var s = "no response from facebook when refreshing the jwt token";
            $n.debug(s), i(new Gn(s));
          } else {
            var a = o.authResponse, u = a.accessToken, c = a.expiresIn, l = /* @__PURE__ */ new Date(), f = c * 1e3 + l.getTime();
            if (!u) {
              var s = "the jwtToken is undefined";
              $n.debug(s), i(new Gn(s));
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
), wS = new yS(), DS = new vS(), Pn = {}, AS = (
  /** @class */
  function() {
    function e() {
    }
    return e.setItem = function(t, n) {
      return Pn[t] = n, Pn[t];
    }, e.getItem = function(t) {
      return Object.prototype.hasOwnProperty.call(Pn, t) ? Pn[t] : void 0;
    }, e.removeItem = function(t) {
      return delete Pn[t];
    }, e.clear = function() {
      return Pn = {}, Pn;
    }, e;
  }()
), Mp = (
  /** @class */
  function() {
    function e() {
      try {
        this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
      } catch {
        this.storageWindow = AS;
      }
    }
    return e.prototype.getStorage = function() {
      return this.storageWindow;
    }, e;
  }()
);
const ES = "@aws-sdk/client-cognito-identity", IS = "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", NS = "3.6.1", TS = {
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
}, jS = "./dist/cjs/index.js", SS = "./types/index.d.ts", bS = "./dist/es/index.js", CS = {
  "./runtimeConfig": "./runtimeConfig.browser"
}, xS = !1, OS = {
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
}, LS = {
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
}, _S = {
  node: ">=10.0.0"
}, kS = {
  "<4.0": {
    "types/*": [
      "types/ts3.4/*"
    ]
  }
}, zS = {
  name: "AWS SDK for JavaScript Team",
  url: "https://aws.amazon.com/javascript/"
}, PS = "Apache-2.0", RS = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", US = {
  type: "git",
  url: "https://github.com/aws/aws-sdk-js-v3.git",
  directory: "clients/client-cognito-identity"
}, FS = {
  name: ES,
  description: IS,
  version: NS,
  scripts: TS,
  main: jS,
  types: SS,
  module: bS,
  browser: CS,
  "react-native": {
    "./runtimeConfig": "./runtimeConfig.native"
  },
  sideEffects: xS,
  dependencies: OS,
  devDependencies: LS,
  engines: _S,
  typesVersions: kS,
  author: zS,
  license: PS,
  homepage: RS,
  repository: US
};
var Qf = "cognito-identity.{region}.amazonaws.com", YS = "cognito-identity.{region}.amazonaws.com.cn", QS = "cognito-identity.{region}.c2s.ic.gov", BS = "cognito-identity.{region}.sc2s.sgov.gov", $S = "cognito-identity.{region}.amazonaws.com", WS = /* @__PURE__ */ new Set([
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
]), HS = /* @__PURE__ */ new Set(["cn-north-1", "cn-northwest-1"]), VS = /* @__PURE__ */ new Set(["us-iso-east-1"]), qS = /* @__PURE__ */ new Set(["us-isob-east-1"]), KS = /* @__PURE__ */ new Set(["us-gov-east-1", "us-gov-west-1"]), GS = function(e, t) {
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
      WS.has(e) && (n = {
        hostname: Qf.replace("{region}", e),
        partition: "aws"
      }), HS.has(e) && (n = {
        hostname: YS.replace("{region}", e),
        partition: "aws-cn"
      }), VS.has(e) && (n = {
        hostname: QS.replace("{region}", e),
        partition: "aws-iso"
      }), qS.has(e) && (n = {
        hostname: BS.replace("{region}", e),
        partition: "aws-iso-b"
      }), KS.has(e) && (n = {
        hostname: $S.replace("{region}", e),
        partition: "aws-us-gov"
      }), n === void 0 && (n = {
        hostname: Qf.replace("{region}", e),
        partition: "aws"
      });
  }
  return Promise.resolve(ie({ signingService: "cognito-identity" }, n));
}, Bf = {
  apiVersion: "2014-06-30",
  disableHostPrefix: !1,
  logger: {},
  regionInfoProvider: GS,
  serviceId: "Cognito Identity",
  urlParser: yj
}, JS = ie(ie({}, Bf), { runtime: "browser", base64Decoder: tp, base64Encoder: vT, bodyLengthChecker: uj, credentialDefaultProvider: function(e) {
  return function() {
    return Promise.reject(new Error("Credential is missing"));
  };
}, defaultUserAgentProvider: pj({
  serviceId: Bf.serviceId,
  clientVersion: FS.version
}), maxAttempts: hc, region: IT("Region is missing"), requestHandler: new yT(), sha256: qg.Sha256, streamCollector: wT, utf8Decoder: Kg, utf8Encoder: Gg }), ZS = (
  /** @class */
  function(e) {
    uc(t, e);
    function t(n) {
      var r = this, i = ie(ie({}, JS), n), o = Dj(i), s = mj(o), a = iS(s), u = sj(a), c = u, l = oS(c);
      return r = e.call(this, l) || this, r.config = l, r.middlewareStack.use(jT(r.config)), r.middlewareStack.use(Nj(r.config)), r.middlewareStack.use(Sj(r.config)), r.middlewareStack.use(xj(r.config)), r.middlewareStack.use(lS(r.config)), r;
    }
    return t.prototype.destroy = function() {
      e.prototype.destroy.call(this);
    }, t;
  }(fS)
), $f;
(function(e) {
  e.AUTHENTICATED_ROLE = "AuthenticatedRole", e.DENY = "Deny";
})($f || ($f = {}));
var Wf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Wf || (Wf = {}));
var Hf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Hf || (Hf = {}));
var Vf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Vf || (Vf = {}));
var qf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(qf || (qf = {}));
var Kf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Kf || (Kf = {}));
var Gf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Gf || (Gf = {}));
var Jf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Jf || (Jf = {}));
var Zf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Zf || (Zf = {}));
var Xf;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Xf || (Xf = {}));
var ed;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(ed || (ed = {}));
var td;
(function(e) {
  e.ACCESS_DENIED = "AccessDenied", e.INTERNAL_SERVER_ERROR = "InternalServerError";
})(td || (td = {}));
var nd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(nd || (nd = {}));
var rd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(rd || (rd = {}));
var id;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(id || (id = {}));
var od;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(od || (od = {}));
var sd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(sd || (sd = {}));
var ad;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(ad || (ad = {}));
var ud;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(ud || (ud = {}));
var cd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(cd || (cd = {}));
var cu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(cu || (cu = {}));
var ld;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(ld || (ld = {}));
var lu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(lu || (lu = {}));
var fd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(fd || (fd = {}));
var fu;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(fu || (fu = {}));
var du;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(du || (du = {}));
var dd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(dd || (dd = {}));
var hd;
(function(e) {
  e.CONTAINS = "Contains", e.EQUALS = "Equals", e.NOT_EQUAL = "NotEqual", e.STARTS_WITH = "StartsWith";
})(hd || (hd = {}));
var gd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(gd || (gd = {}));
var pd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(pd || (pd = {}));
var Md;
(function(e) {
  e.RULES = "Rules", e.TOKEN = "Token";
})(Md || (Md = {}));
var yd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(yd || (yd = {}));
var md;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(md || (md = {}));
var vd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(vd || (vd = {}));
var wd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(wd || (wd = {}));
var Dd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Dd || (Dd = {}));
var Ad;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Ad || (Ad = {}));
var Ed;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Ed || (Ed = {}));
var Id;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Id || (Id = {}));
var Nd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Nd || (Nd = {}));
var Td;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Td || (Td = {}));
var jd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(jd || (jd = {}));
var Sd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Sd || (Sd = {}));
var bd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(bd || (bd = {}));
var Cd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Cd || (Cd = {}));
var xd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(xd || (xd = {}));
var Od;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Od || (Od = {}));
var Ld;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Ld || (Ld = {}));
var _d;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(_d || (_d = {}));
var kd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(kd || (kd = {}));
var zd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(zd || (zd = {}));
var Pd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Pd || (Pd = {}));
var Rd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Rd || (Rd = {}));
var Ud;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Ud || (Ud = {}));
var Fd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Fd || (Fd = {}));
var Yd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Yd || (Yd = {}));
var Qd;
(function(e) {
  e.filterSensitiveLog = function(t) {
    return ie({}, t);
  };
})(Qd || (Qd = {}));
var XS = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r;
    return Mt(this, function(i) {
      return n = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
      }, r = JSON.stringify(ab(e)), [2, Np(t, n, "/", void 0, r)];
    });
  });
}, eb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r;
    return Mt(this, function(i) {
      return n = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.GetId"
      }, r = JSON.stringify(ub(e)), [2, Np(t, n, "/", void 0, r)];
    });
  });
}, tb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, nb(e, t)] : [4, Ss(e.body, t)];
        case 1:
          return n = o.sent(), r = {}, r = fb(n), i = ie({ $metadata: Be(e) }, r), [2, Promise.resolve(i)];
      }
    });
  });
}, nb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v;
    return Mt(this, function(w) {
      switch (w.label) {
        case 0:
          return r = [ie({}, e)], v = {}, [4, Ss(e.body, t)];
        case 1:
          switch (n = ie.apply(void 0, r.concat([(v.body = w.sent(), v)])), o = "UnknownError", o = Tp(e, n.body), s = o, s) {
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
          return a = [{}], [4, yp(n)];
        case 3:
          return i = ie.apply(void 0, [ie.apply(void 0, a.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, mp(n)];
        case 5:
          return i = ie.apply(void 0, [ie.apply(void 0, u.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, ob(n)];
        case 7:
          return i = ie.apply(void 0, [ie.apply(void 0, c.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, vp(n)];
        case 9:
          return i = ie.apply(void 0, [ie.apply(void 0, l.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, wp(n)];
        case 11:
          return i = ie.apply(void 0, [ie.apply(void 0, f.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Dp(n)];
        case 13:
          return i = ie.apply(void 0, [ie.apply(void 0, d.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 14:
          return g = [{}], [4, Ap(n)];
        case 15:
          return i = ie.apply(void 0, [ie.apply(void 0, g.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 16:
          return h = [{}], [4, Ep(n)];
        case 17:
          return i = ie.apply(void 0, [ie.apply(void 0, h.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 18:
          p = n.body, o = p.code || p.Code || o, i = ie(ie({}, p), { name: "" + o, message: p.message || p.Message || o, $fault: "client", $metadata: Be(e) }), w.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, rb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      switch (o.label) {
        case 0:
          return e.statusCode >= 300 ? [2, ib(e, t)] : [4, Ss(e.body, t)];
        case 1:
          return n = o.sent(), r = {}, r = db(n), i = ie({ $metadata: Be(e) }, r), [2, Promise.resolve(i)];
      }
    });
  });
}, ib = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i, o, s, a, u, c, l, f, d, g, h, p, m, v;
    return Mt(this, function(w) {
      switch (w.label) {
        case 0:
          return r = [ie({}, e)], v = {}, [4, Ss(e.body, t)];
        case 1:
          switch (n = ie.apply(void 0, r.concat([(v.body = w.sent(), v)])), o = "UnknownError", o = Tp(e, n.body), s = o, s) {
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
          return a = [{}], [4, yp(n)];
        case 3:
          return i = ie.apply(void 0, [ie.apply(void 0, a.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 4:
          return u = [{}], [4, mp(n)];
        case 5:
          return i = ie.apply(void 0, [ie.apply(void 0, u.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 6:
          return c = [{}], [4, vp(n)];
        case 7:
          return i = ie.apply(void 0, [ie.apply(void 0, c.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 8:
          return l = [{}], [4, sb(n)];
        case 9:
          return i = ie.apply(void 0, [ie.apply(void 0, l.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 10:
          return f = [{}], [4, wp(n)];
        case 11:
          return i = ie.apply(void 0, [ie.apply(void 0, f.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 12:
          return d = [{}], [4, Dp(n)];
        case 13:
          return i = ie.apply(void 0, [ie.apply(void 0, d.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 14:
          return g = [{}], [4, Ap(n)];
        case 15:
          return i = ie.apply(void 0, [ie.apply(void 0, g.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 16:
          return h = [{}], [4, Ep(n)];
        case 17:
          return i = ie.apply(void 0, [ie.apply(void 0, h.concat([w.sent()])), { name: o, $metadata: Be(e) }]), [3, 19];
        case 18:
          p = n.body, o = p.code || p.Code || o, i = ie(ie({}, p), { name: "" + o, message: p.message || p.Message || o, $fault: "client", $metadata: Be(e) }), w.label = 19;
        case 19:
          return m = i.message || i.Message || o, i.message = m, delete i.Message, [2, Promise.reject(Object.assign(new Error(m), i))];
      }
    });
  });
}, yp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = lb(n), i = ie({ name: "ExternalServiceException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, mp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = hb(n), i = ie({ name: "InternalErrorException", $fault: "server", $metadata: Be(e) }, r), [2, i];
    });
  });
}, ob = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = gb(n), i = ie({ name: "InvalidIdentityPoolConfigurationException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, vp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = pb(n), i = ie({ name: "InvalidParameterException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, sb = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = Mb(n), i = ie({ name: "LimitExceededException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, wp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = yb(n), i = ie({ name: "NotAuthorizedException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, Dp = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = mb(n), i = ie({ name: "ResourceConflictException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, Ap = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = vb(n), i = ie({ name: "ResourceNotFoundException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, Ep = function(e, t) {
  return pt(void 0, void 0, void 0, function() {
    var n, r, i;
    return Mt(this, function(o) {
      return n = e.body, r = wb(n), i = ie({ name: "TooManyRequestsException", $fault: "client", $metadata: Be(e) }, r), [2, i];
    });
  });
}, ab = function(e, t) {
  return ie(ie(ie({}, e.CustomRoleArn !== void 0 && e.CustomRoleArn !== null && { CustomRoleArn: e.CustomRoleArn }), e.IdentityId !== void 0 && e.IdentityId !== null && { IdentityId: e.IdentityId }), e.Logins !== void 0 && e.Logins !== null && { Logins: Ip(e.Logins) });
}, ub = function(e, t) {
  return ie(ie(ie({}, e.AccountId !== void 0 && e.AccountId !== null && { AccountId: e.AccountId }), e.IdentityPoolId !== void 0 && e.IdentityPoolId !== null && { IdentityPoolId: e.IdentityPoolId }), e.Logins !== void 0 && e.Logins !== null && { Logins: Ip(e.Logins) });
}, Ip = function(e, t) {
  return Object.entries(e).reduce(function(n, r) {
    var i, o = UN(r, 2), s = o[0], a = o[1];
    return a === null ? n : ie(ie({}, n), (i = {}, i[s] = a, i));
  }, {});
}, cb = function(e, t) {
  return {
    AccessKeyId: e.AccessKeyId !== void 0 && e.AccessKeyId !== null ? e.AccessKeyId : void 0,
    Expiration: e.Expiration !== void 0 && e.Expiration !== null ? new Date(Math.round(e.Expiration * 1e3)) : void 0,
    SecretKey: e.SecretKey !== void 0 && e.SecretKey !== null ? e.SecretKey : void 0,
    SessionToken: e.SessionToken !== void 0 && e.SessionToken !== null ? e.SessionToken : void 0
  };
}, lb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, fb = function(e, t) {
  return {
    Credentials: e.Credentials !== void 0 && e.Credentials !== null ? cb(e.Credentials) : void 0,
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, db = function(e, t) {
  return {
    IdentityId: e.IdentityId !== void 0 && e.IdentityId !== null ? e.IdentityId : void 0
  };
}, hb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, gb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, pb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Mb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, yb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, mb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, vb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, wb = function(e, t) {
  return {
    message: e.message !== void 0 && e.message !== null ? e.message : void 0
  };
}, Be = function(e) {
  var t;
  return {
    httpStatusCode: e.statusCode,
    requestId: (t = e.headers["x-amzn-requestid"]) !== null && t !== void 0 ? t : e.headers["x-amzn-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  };
}, Db = function(e, t) {
  return e === void 0 && (e = new Uint8Array()), e instanceof Uint8Array ? Promise.resolve(e) : t.streamCollector(e) || Promise.resolve(new Uint8Array());
}, Ab = function(e, t) {
  return Db(e, t).then(function(n) {
    return t.utf8Encoder(n);
  });
}, Np = function(e, t, n, r, i) {
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
          }, r !== void 0 && (l.hostname = r), i !== void 0 && (l.body = i), [2, new Rr(l)];
      }
    });
  });
}, Ss = function(e, t) {
  return Ab(e, t).then(function(n) {
    return n.length ? JSON.parse(n) : {};
  });
}, Tp = function(e, t) {
  var n = function(o, s) {
    return Object.keys(o).find(function(a) {
      return a.toLowerCase() === s.toLowerCase();
    });
  }, r = function(o) {
    var s = o;
    return s.indexOf(":") >= 0 && (s = s.split(":")[0]), s.indexOf("#") >= 0 && (s = s.split("#")[1]), s;
  }, i = n(e.headers, "x-amzn-errortype");
  return i !== void 0 ? r(e.headers[i]) : t.code !== void 0 ? r(t.code) : t.__type !== void 0 ? r(t.__type) : "";
}, hu = (
  /** @class */
  function(e) {
    uc(t, e);
    function t(n) {
      var r = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return r.input = n, r;
    }
    return t.prototype.resolveMiddleware = function(n, r, i) {
      this.middlewareStack.use(pp(r, this.serialize, this.deserialize));
      var o = n.concat(this.middlewareStack), s = r.logger, a = "CognitoIdentityClient", u = "GetCredentialsForIdentityCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: cu.filterSensitiveLog,
        outputFilterSensitiveLog: lu.filterSensitiveLog
      }, l = r.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(n, r) {
      return XS(n, r);
    }, t.prototype.deserialize = function(n, r) {
      return tb(n, r);
    }, t;
  }(gp)
), wi = (
  /** @class */
  function(e) {
    uc(t, e);
    function t(n) {
      var r = (
        // Start section: command_constructor
        e.call(this) || this
      );
      return r.input = n, r;
    }
    return t.prototype.resolveMiddleware = function(n, r, i) {
      this.middlewareStack.use(pp(r, this.serialize, this.deserialize));
      var o = n.concat(this.middlewareStack), s = r.logger, a = "CognitoIdentityClient", u = "GetIdCommand", c = {
        logger: s,
        clientName: a,
        commandName: u,
        inputFilterSensitiveLog: fu.filterSensitiveLog,
        outputFilterSensitiveLog: du.filterSensitiveLog
      }, l = r.requestHandler;
      return o.resolve(function(f) {
        return l.handle(f.request, i || {});
      }, c);
    }, t.prototype.serialize = function(n, r) {
      return eb(n, r);
    }, t.prototype.deserialize = function(n, r) {
      return rb(n, r);
    }, t;
  }(gp)
), bs = (
  /** @class */
  function(e) {
    oc(t, e);
    function t(n, r) {
      r === void 0 && (r = !0);
      var i = e.call(this, n) || this;
      return i.tryNextLink = r, i;
    }
    return t;
  }(Error)
);
function jp(e) {
  return Promise.all(Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    return typeof r == "string" ? t.push([n, r]) : t.push(r().then(function(i) {
      return [n, i];
    })), t;
  }, [])).then(function(t) {
    return t.reduce(function(n, r) {
      var i = ur(r, 2), o = i[0], s = i[1];
      return n[o] = s, n;
    }, {});
  });
}
function li(e) {
  var t = this;
  return function() {
    return Ne(t, void 0, void 0, function() {
      var n, r, i, o, s, a, u, c, l, f, d, g, h;
      return Ee(this, function(p) {
        switch (p.label) {
          case 0:
            return f = (l = e.client).send, d = hu.bind, h = {
              CustomRoleArn: e.customRoleArn,
              IdentityId: e.identityId
            }, e.logins ? [4, jp(e.logins)] : [3, 2];
          case 1:
            return g = p.sent(), [3, 3];
          case 2:
            g = void 0, p.label = 3;
          case 3:
            return [4, f.apply(l, [new (d.apply(hu, [void 0, (h.Logins = g, h)]))()])];
          case 4:
            return n = p.sent().Credentials, r = n === void 0 ? Ib() : n, i = r.AccessKeyId, o = i === void 0 ? Eb() : i, s = r.Expiration, a = r.SecretKey, u = a === void 0 ? Nb() : a, c = r.SessionToken, [2, {
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
function Eb() {
  throw new bs("Response from Amazon Cognito contained no access key ID");
}
function Ib() {
  throw new bs("Response from Amazon Cognito contained no credentials");
}
function Nb() {
  throw new bs("Response from Amazon Cognito contained no secret key");
}
var Ma = "IdentityIds", Tb = (
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
          }, i.createObjectStore(Ma, { keyPath: "id" });
        };
      });
    }, e.prototype.withObjectStore = function(t, n) {
      return this.getDb().then(function(r) {
        var i = r.transaction(Ma, t);
        return i.oncomplete = function() {
          return r.close();
        }, new Promise(function(o, s) {
          i.onerror = function() {
            return s(i.error);
          }, o(n(i.objectStore(Ma)));
        }).catch(function(o) {
          throw r.close(), o;
        });
      });
    }, e;
  }()
), jb = (
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
), Sb = new jb();
function bb() {
  return typeof self == "object" && self.indexedDB ? new Tb() : typeof window == "object" && window.localStorage ? window.localStorage : Sb;
}
function Cb(e) {
  var t = this, n = e.accountId, r = e.cache, i = r === void 0 ? bb() : r, o = e.client, s = e.customRoleArn, a = e.identityPoolId, u = e.logins, c = e.userIdentifier, l = c === void 0 ? !u || Object.keys(u).length === 0 ? "ANONYMOUS" : void 0 : c, f = l ? "aws:cognito-identity-credentials:" + a + ":" + l : void 0, d = function() {
    return Ne(t, void 0, void 0, function() {
      var g, h, p, m, v, w, j, N, I;
      return Ee(this, function(Q) {
        switch (Q.label) {
          case 0:
            return h = f, h ? [4, i.getItem(f)] : [3, 2];
          case 1:
            h = Q.sent(), Q.label = 2;
          case 2:
            return g = h, g ? [3, 7] : (w = (v = o).send, j = wi.bind, I = {
              AccountId: n,
              IdentityPoolId: a
            }, u ? [4, jp(u)] : [3, 4]);
          case 3:
            return N = Q.sent(), [3, 5];
          case 4:
            N = void 0, Q.label = 5;
          case 5:
            return [4, w.apply(v, [new (j.apply(wi, [void 0, (I.Logins = N, I)]))()])];
          case 6:
            p = Q.sent().IdentityId, m = p === void 0 ? xb() : p, g = m, f && Promise.resolve(i.setItem(f, g)).catch(function() {
            }), Q.label = 7;
          case 7:
            return d = li({
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
function xb() {
  throw new bs("Response from Amazon Cognito contained no identity ID");
}
function ya(e) {
  var t = new ZS({
    region: e.region,
    customUserAgent: GI()
  });
  return t.middlewareStack.add(function(n, r) {
    return function(i) {
      return n(Ob(i));
    };
  }, {
    step: "build",
    name: "cacheControlMiddleWare"
  }), t;
}
function Ob(e) {
  return we(we({}, e), { request: we(we({}, e.request), { headers: we(we({}, e.request.headers), { "cache-control": "no-store" }) }) });
}
var je = new Ht("Credentials"), Lb = 50 * 60 * 1e3, _b = "CognitoIdentityId-", kb = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", zb = function(e, t, n) {
  rn.dispatch("core", { event: e, data: t, message: n }, "Credentials", kb);
}, Pb = (
  /** @class */
  function() {
    function e(t) {
      this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(t), this._refreshHandlers.google = wS.refreshGoogleToken, this._refreshHandlers.facebook = DS.refreshFacebookToken;
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
      return n && (this._refreshHandlers = we(we({}, this._refreshHandlers), n)), this._storage = this._config.storage, this._storage || (this._storage = new Mp().getStorage()), this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), zb("credentials_configured", null, "Credentials has been configured successfully"), this._config;
    }, e.prototype.get = function() {
      return je.debug("getting credentials"), this._pickupCredentials();
    }, e.prototype._getCognitoIdentityIdStorageKey = function(t) {
      return "" + _b + t;
    }, e.prototype._pickupCredentials = function() {
      return je.debug("picking up credentials"), !this._gettingCredPromise || !this._gettingCredPromise.isPending() ? (je.debug("getting new cred promise"), this._gettingCredPromise = eN(this._keepAlive())) : je.debug("getting old cred promise"), this._gettingCredPromise;
    }, e.prototype._keepAlive = function() {
      return Ne(this, void 0, void 0, function() {
        var t, n, r, i, o, s, a, u;
        return Ee(this, function(c) {
          switch (c.label) {
            case 0:
              if (je.debug("checking if credentials exists and not expired"), t = this._credentials, t && !this._isExpired(t) && !this._isPastTTL())
                return je.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(t)];
              if (je.debug("need to get a new credential or refresh the existing one"), n = this.Auth, r = n === void 0 ? sc.Auth : n, !r || typeof r.currentUserCredentials != "function")
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
      return kN(r, [], s).then(function(a) {
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
              return je.debug("setting credentials for guest"), !((t = this._config) === null || t === void 0) && t.identityPoolId || (this._config = Object.assign({}, this._config, Vg(this._config || {}).Auth)), n = this._config, r = n.identityPoolId, i = n.region, o = n.mandatorySignIn, s = n.identityPoolRegion, o ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : r ? !s && !i ? (je.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (u = this, [4, this._getGuestIdentityId()]) : (je.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
            case 1:
              return a = u._identityId = h.sent(), c = ya({
                region: s || i
              }), l = void 0, a ? (f = {
                identityId: a,
                client: c
              }, l = li(f)()) : (d = function() {
                return Ne(g, void 0, void 0, function() {
                  var p, m, v;
                  return Ee(this, function(w) {
                    switch (w.label) {
                      case 0:
                        return [4, c.send(new wi({
                          IdentityPoolId: r
                        }))];
                      case 1:
                        return p = w.sent().IdentityId, this._identityId = p, m = {
                          client: c,
                          identityId: p
                        }, v = li(m), [2, v()];
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
                            return Ee(this, function(Q) {
                              switch (Q.label) {
                                case 0:
                                  return [4, c.send(new wi({
                                    IdentityPoolId: r
                                  }))];
                                case 1:
                                  return j = Q.sent().IdentityId, this._identityId = j, N = {
                                    client: c,
                                    identityId: j
                                  }, I = li(N), [2, I()];
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
      var d = ya({
        region: f || l
      }), g = void 0;
      if (i) {
        var h = {
          identityId: i,
          logins: a,
          client: d
        };
        g = li(h)();
      } else {
        var h = {
          logins: a,
          identityPoolId: c,
          client: d
        };
        g = Cb(h)();
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
      var f = ya({
        region: u || o
      }), d = function() {
        return Ne(n, void 0, void 0, function() {
          var h, p, m, v, w, j, N, I, Q, z;
          return Ee(this, function(W) {
            switch (W.label) {
              case 0:
                return [4, this._getGuestIdentityId()];
              case 1:
                return h = W.sent(), h ? [3, 3] : [4, f.send(new wi({
                  IdentityPoolId: a,
                  Logins: l
                }))];
              case 2:
                m = W.sent().IdentityId, p = m, W.label = 3;
              case 3:
                return [4, f.send(new hu({
                  IdentityId: h || p,
                  Logins: l
                }))];
              case 4:
                return v = W.sent(), w = v.Credentials, j = w.AccessKeyId, N = w.Expiration, I = w.SecretKey, Q = w.SessionToken, z = v.IdentityId, this._identityId = z, h ? (je.debug("The guest identity " + h + " has been successfully linked to the logins"), h === z && je.debug("The guest identity " + h + " has become the primary identity"), [4, this._removeGuestIdentityId()]) : [3, 6];
              case 5:
                W.sent(), W.label = 6;
              case 6:
                return [2, {
                  accessKeyId: j,
                  secretAccessKey: I,
                  sessionToken: Q,
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
                  if (je.debug("Load credentials successfully", c), this._identityId && !c.identityId && (c.identityId = this._identityId), s._credentials = c, s._credentials.authenticated = r, s._credentials_source = n, s._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + Lb, n === "federated") {
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
), Sp = new Pb(null);
sc.register(Sp);
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var bp = Fb, Bd = Yb, Rb = decodeURIComponent, Ub = encodeURIComponent, go = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Fb(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, i = e.split(";"), o = r.decode || Rb, s = 0; s < i.length; s++) {
    var a = i[s], u = a.indexOf("=");
    if (!(u < 0)) {
      var c = a.substring(0, u).trim();
      if (n[c] == null) {
        var l = a.substring(u + 1, a.length).trim();
        l[0] === '"' && (l = l.slice(1, -1)), n[c] = Qb(l, o);
      }
    }
  }
  return n;
}
function Yb(e, t, n) {
  var r = n || {}, i = r.encode || Ub;
  if (typeof i != "function")
    throw new TypeError("option encode is invalid");
  if (!go.test(e))
    throw new TypeError("argument name is invalid");
  var o = i(t);
  if (o && !go.test(o))
    throw new TypeError("argument val is invalid");
  var s = e + "=" + o;
  if (r.maxAge != null) {
    var a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!go.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!go.test(r.path))
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
function Qb(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function Bb() {
  return typeof document == "object" && typeof document.cookie == "string";
}
function $b(e, t) {
  return typeof e == "string" ? bp(e, t) : typeof e == "object" && e !== null ? e : {};
}
function Wb(e, t) {
  return typeof t > "u" && (t = !e || e[0] !== "{" && e[0] !== "[" && e[0] !== '"'), !t;
}
function $d(e, t) {
  t === void 0 && (t = {});
  var n = Hb(e);
  if (Wb(n, t.doNotParse))
    try {
      return JSON.parse(n);
    } catch {
    }
  return e;
}
function Hb(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e;
}
var Wn = globalThis && globalThis.__assign || function() {
  return Wn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Wn.apply(this, arguments);
}, Vb = (
  /** @class */
  function() {
    function e(t, n) {
      var r = this;
      this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = $b(t, n), new Promise(function() {
        r.HAS_DOCUMENT_COOKIE = Bb();
      }).catch(function() {
      });
    }
    return e.prototype._updateBrowserValues = function(t) {
      this.HAS_DOCUMENT_COOKIE && (this.cookies = bp(document.cookie, t));
    }, e.prototype._emitChange = function(t) {
      for (var n = 0; n < this.changeListeners.length; ++n)
        this.changeListeners[n](t);
    }, e.prototype.get = function(t, n, r) {
      return n === void 0 && (n = {}), this._updateBrowserValues(r), $d(this.cookies[t], n);
    }, e.prototype.getAll = function(t, n) {
      t === void 0 && (t = {}), this._updateBrowserValues(n);
      var r = {};
      for (var i in this.cookies)
        r[i] = $d(this.cookies[i], t);
      return r;
    }, e.prototype.set = function(t, n, r) {
      var i;
      typeof n == "object" && (n = JSON.stringify(n)), this.cookies = Wn(Wn({}, this.cookies), (i = {}, i[t] = n, i)), this.HAS_DOCUMENT_COOKIE && (document.cookie = Bd(t, n, r)), this._emitChange({ name: t, value: n, options: r });
    }, e.prototype.remove = function(t, n) {
      var r = n = Wn(Wn({}, n), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
      this.cookies = Wn({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = Bd(t, "", r)), this._emitChange({ name: t, value: void 0, options: n });
    }, e.prototype.addChangeListener = function(t) {
      this.changeListeners.push(t);
    }, e.prototype.removeChangeListener = function(t) {
      var n = this.changeListeners.indexOf(t);
      n >= 0 && this.changeListeners.splice(n, 1);
    }, e;
  }()
);
const ma = Vb;
var Wd = hn().isBrowser, qb = 365 * 24 * 60 * 60 * 1e3, Kb = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.cookies = new ma(), this.store = Wd ? window.localStorage : /* @__PURE__ */ Object.create(null), this.cookies = t.req ? new ma(t.req.headers.cookie) : new ma(), Object.assign(this.store, this.cookies.getAll());
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
        expires: new Date(Date.now() + qb)
      });
    }, e.prototype.setLocalItem = function(t, n) {
      this.store[t] = n;
    }, e.prototype.setUniversalItem = function(t, n, r) {
      r === void 0 && (r = {}), this.cookies.set(t, n, we(we({}, r), {
        path: "/",
        // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
        sameSite: !0,
        // Allow unsecure requests to http://localhost:3000/ when in development.
        secure: !(Wd && window.location.hostname === "localhost")
      }));
    }, e;
  }()
);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Hd = /* @__PURE__ */ function() {
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
}(), Ke = {}, Cs = {};
Cs.byteLength = Zb;
Cs.toByteArray = e1;
Cs.fromByteArray = r1;
var Kt = [], Ct = [], Gb = typeof Uint8Array < "u" ? Uint8Array : Array, va = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var mr = 0, Jb = va.length; mr < Jb; ++mr)
  Kt[mr] = va[mr], Ct[va.charCodeAt(mr)] = mr;
Ct["-".charCodeAt(0)] = 62;
Ct["_".charCodeAt(0)] = 63;
function Cp(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function Zb(e) {
  var t = Cp(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function Xb(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function e1(e) {
  var t, n = Cp(e), r = n[0], i = n[1], o = new Gb(Xb(e, r, i)), s = 0, a = i > 0 ? r - 4 : r, u;
  for (u = 0; u < a; u += 4)
    t = Ct[e.charCodeAt(u)] << 18 | Ct[e.charCodeAt(u + 1)] << 12 | Ct[e.charCodeAt(u + 2)] << 6 | Ct[e.charCodeAt(u + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
  return i === 2 && (t = Ct[e.charCodeAt(u)] << 2 | Ct[e.charCodeAt(u + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = Ct[e.charCodeAt(u)] << 10 | Ct[e.charCodeAt(u + 1)] << 4 | Ct[e.charCodeAt(u + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o;
}
function t1(e) {
  return Kt[e >> 18 & 63] + Kt[e >> 12 & 63] + Kt[e >> 6 & 63] + Kt[e & 63];
}
function n1(e, t, n) {
  for (var r, i = [], o = t; o < n; o += 3)
    r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(t1(r));
  return i.join("");
}
function r1(e) {
  for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o)
    i.push(n1(e, s, s + o > a ? a : s + o));
  return r === 1 ? (t = e[n - 1], i.push(
    Kt[t >> 2] + Kt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(
    Kt[t >> 10] + Kt[t >> 4 & 63] + Kt[t << 2 & 63] + "="
  )), i.join("");
}
var gc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
gc.read = function(e, t, n, r, i) {
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
gc.write = function(e, t, n, r, i, o) {
  var s, a, u, c = o * 8 - i - 1, l = (1 << c) - 1, f = l >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = r ? 0 : o - 1, h = r ? 1 : -1, p = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? t += d / u : t += d * Math.pow(2, 1 - f), t * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s = s + f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + g] = a & 255, g += h, a /= 256, i -= 8)
    ;
  for (s = s << i | a, c += i; c > 0; e[n + g] = s & 255, g += h, s /= 256, c -= 8)
    ;
  e[n + g - h] |= p * 128;
};
var i1 = {}.toString, o1 = Array.isArray || function(e) {
  return i1.call(e) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = Cs, n = gc, r = o1;
  e.Buffer = a, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = kt.TYPED_ARRAY_SUPPORT !== void 0 ? kt.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = o();
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
          return H(E).length;
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
            return H(E).length;
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
          return re(this, y, M);
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
    for (var Z = ee - Y, ve = A - M, Ce = Math.min(Z, ve), Se = this.slice(Y, ee), Pe = y.slice(M, A), He = 0; He < Ce; ++He)
      if (Se[He] !== Pe[He]) {
        Z = Se[He], ve = Pe[He];
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
      return y.length === 0 ? -1 : Q(E, y, M, A, Y);
    if (typeof y == "number")
      return y = y & 255, a.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? Y ? Uint8Array.prototype.indexOf.call(E, y, M) : Uint8Array.prototype.lastIndexOf.call(E, y, M) : Q(E, [y], M, A, Y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Q(E, y, M, A, Y) {
    var ee = 1, Z = E.length, ve = y.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (E.length < 2 || y.length < 2)
        return -1;
      ee = 2, Z /= 2, ve /= 2, M /= 2;
    }
    function Ce(en, cr) {
      return ee === 1 ? en[cr] : en.readUInt16BE(cr * ee);
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
        for (var He = !0, De = 0; De < ve; De++)
          if (Ce(E, Se + De) !== Ce(y, De)) {
            He = !1;
            break;
          }
        if (He)
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
    return Me(H(y, E.length - M), E, M, A);
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
        var Ce, Se, Pe, He;
        switch (ve) {
          case 1:
            ee < 128 && (Z = ee);
            break;
          case 2:
            Ce = E[Y + 1], (Ce & 192) === 128 && (He = (ee & 31) << 6 | Ce & 63, He > 127 && (Z = He));
            break;
          case 3:
            Ce = E[Y + 1], Se = E[Y + 2], (Ce & 192) === 128 && (Se & 192) === 128 && (He = (ee & 15) << 12 | (Ce & 63) << 6 | Se & 63, He > 2047 && (He < 55296 || He > 57343) && (Z = He));
            break;
          case 4:
            Ce = E[Y + 1], Se = E[Y + 2], Pe = E[Y + 3], (Ce & 192) === 128 && (Se & 192) === 128 && (Pe & 192) === 128 && (He = (ee & 15) << 18 | (Ce & 63) << 12 | (Se & 63) << 6 | Pe & 63, He > 65535 && He < 1114112 && (Z = He));
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
  function re(E, y, M) {
    var A = E.length;
    (!y || y < 0) && (y = 0), (!M || M < 0 || M > A) && (M = A);
    for (var Y = "", ee = y; ee < M; ++ee)
      Y += B(E[ee]);
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
      var ve = a.isBuffer(y) ? y : H(new a(y, Y).toString()), Ce = ve.length;
      for (Z = 0; Z < A - M; ++Z)
        this[Z + M] = ve[Z % Ce];
    }
    return this;
  };
  var G = /[^+\/0-9A-Za-z-_]/g;
  function he(E) {
    if (E = V(E).replace(G, ""), E.length < 2)
      return "";
    for (; E.length % 4 !== 0; )
      E = E + "=";
    return E;
  }
  function V(E) {
    return E.trim ? E.trim() : E.replace(/^\s+|\s+$/g, "");
  }
  function B(E) {
    return E < 16 ? "0" + E.toString(16) : E.toString(16);
  }
  function H(E, y) {
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
var Ot;
typeof window < "u" && window.crypto && (Ot = window.crypto);
!Ot && typeof window < "u" && window.msCrypto && (Ot = window.msCrypto);
!Ot && typeof global < "u" && global.crypto && (Ot = global.crypto);
if (!Ot && typeof require == "function")
  try {
    Ot = require("crypto");
  } catch {
  }
function s1() {
  if (Ot) {
    if (typeof Ot.getRandomValues == "function")
      try {
        return Ot.getRandomValues(new Uint32Array(1))[0];
      } catch {
      }
    if (typeof Ot.randomBytes == "function")
      try {
        return Ot.randomBytes(4).readInt32LE();
      } catch {
      }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}
function a1(e) {
  for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
    var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    r.push((o >>> 4).toString(16)), r.push((o & 15).toString(16));
  }
  return r.join("");
}
var u1 = /* @__PURE__ */ function() {
  function e(n, r) {
    n = this.words = n || [], r != null ? this.sigBytes = r : this.sigBytes = n.length * 4;
  }
  var t = e.prototype;
  return t.random = function(r) {
    for (var i = [], o = 0; o < r; o += 4)
      i.push(s1());
    return new e(i, r);
  }, t.toString = function() {
    return a1(this);
  }, e;
}();
function me(e, t) {
  e != null && this.fromString(e, t);
}
function vt() {
  return new me(null);
}
var bn, c1 = 244837814094590, Vd = (c1 & 16777215) == 15715070;
function l1(e, t, n, r, i, o) {
  for (; --o >= 0; ) {
    var s = t * this[e++] + n[r] + i;
    i = Math.floor(s / 67108864), n[r++] = s & 67108863;
  }
  return i;
}
function f1(e, t, n, r, i, o) {
  for (var s = t & 32767, a = t >> 15; --o >= 0; ) {
    var u = this[e] & 32767, c = this[e++] >> 15, l = a * u + c * s;
    u = s * u + ((l & 32767) << 15) + n[r] + (i & 1073741823), i = (u >>> 30) + (l >>> 15) + a * c + (i >>> 30), n[r++] = u & 1073741823;
  }
  return i;
}
function d1(e, t, n, r, i, o) {
  for (var s = t & 16383, a = t >> 14; --o >= 0; ) {
    var u = this[e] & 16383, c = this[e++] >> 14, l = a * u + c * s;
    u = s * u + ((l & 16383) << 14) + n[r] + i, i = (u >> 28) + (l >> 14) + a * c, n[r++] = u & 268435455;
  }
  return i;
}
var qd = typeof navigator < "u";
qd && Vd && navigator.appName == "Microsoft Internet Explorer" ? (me.prototype.am = f1, bn = 30) : qd && Vd && navigator.appName != "Netscape" ? (me.prototype.am = l1, bn = 26) : (me.prototype.am = d1, bn = 28);
me.prototype.DB = bn;
me.prototype.DM = (1 << bn) - 1;
me.prototype.DV = 1 << bn;
var pc = 52;
me.prototype.FV = Math.pow(2, pc);
me.prototype.F1 = pc - bn;
me.prototype.F2 = 2 * bn - pc;
var h1 = "0123456789abcdefghijklmnopqrstuvwxyz", xs = new Array(), Hr, Lt;
Hr = "0".charCodeAt(0);
for (Lt = 0; Lt <= 9; ++Lt)
  xs[Hr++] = Lt;
Hr = "a".charCodeAt(0);
for (Lt = 10; Lt < 36; ++Lt)
  xs[Hr++] = Lt;
Hr = "A".charCodeAt(0);
for (Lt = 10; Lt < 36; ++Lt)
  xs[Hr++] = Lt;
function Kd(e) {
  return h1.charAt(e);
}
function g1(e, t) {
  var n = xs[e.charCodeAt(t)];
  return n ?? -1;
}
function p1(e) {
  for (var t = this.t - 1; t >= 0; --t)
    e[t] = this[t];
  e.t = this.t, e.s = this.s;
}
function M1(e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
}
function Mc(e) {
  var t = vt();
  return t.fromInt(e), t;
}
function y1(e, t) {
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
    var s = g1(e, r);
    if (s < 0) {
      e.charAt(r) == "-" && (i = !0);
      continue;
    }
    i = !1, o == 0 ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, o += n, o >= this.DB && (o -= this.DB);
  }
  this.clamp(), i && me.ZERO.subTo(this, this);
}
function m1() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function v1(e) {
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
    for (a < this.DB && (r = this[s] >> a) > 0 && (i = !0, o = Kd(r)); s >= 0; )
      a < t ? (r = (this[s] & (1 << a) - 1) << t - a, r |= this[--s] >> (a += this.DB - t)) : (r = this[s] >> (a -= t) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (i = !0), i && (o += Kd(r));
  return i ? o : "0";
}
function w1() {
  var e = vt();
  return me.ZERO.subTo(this, e), e;
}
function D1() {
  return this.s < 0 ? this.negate() : this;
}
function A1(e) {
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
function yc(e) {
  var t = 1, n;
  return (n = e >>> 16) != 0 && (e = n, t += 16), (n = e >> 8) != 0 && (e = n, t += 8), (n = e >> 4) != 0 && (e = n, t += 4), (n = e >> 2) != 0 && (e = n, t += 2), (n = e >> 1) != 0 && (e = n, t += 1), t;
}
function E1() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + yc(this[this.t - 1] ^ this.s & this.DM);
}
function I1(e, t) {
  var n;
  for (n = this.t - 1; n >= 0; --n)
    t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n)
    t[n] = 0;
  t.t = this.t + e, t.s = this.s;
}
function N1(e, t) {
  for (var n = e; n < this.t; ++n)
    t[n - e] = this[n];
  t.t = Math.max(this.t - e, 0), t.s = this.s;
}
function T1(e, t) {
  var n = e % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(e / this.DB), s = this.s << n & this.DM, a;
  for (a = this.t - 1; a >= 0; --a)
    t[a + o + 1] = this[a] >> r | s, s = (this[a] & i) << n;
  for (a = o - 1; a >= 0; --a)
    t[a] = 0;
  t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp();
}
function j1(e, t) {
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
function S1(e, t) {
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
function b1(e, t) {
  var n = this.abs(), r = e.abs(), i = n.t;
  for (t.t = i + r.t; --i >= 0; )
    t[i] = 0;
  for (i = 0; i < r.t; ++i)
    t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  t.s = 0, t.clamp(), this.s != e.s && me.ZERO.subTo(t, t);
}
function C1(e) {
  for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
    e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp();
}
function x1(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) {
      t != null && t.fromInt(0), n != null && this.copyTo(n);
      return;
    }
    n == null && (n = vt());
    var o = vt(), s = this.s, a = e.s, u = this.DB - yc(r[r.t - 1]);
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
function O1(e) {
  var t = vt();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(me.ZERO) > 0 && e.subTo(t, t), t;
}
function L1() {
  if (this.t < 1)
    return 0;
  var e = this[0];
  if (!(e & 1))
    return 0;
  var t = e & 3;
  return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
}
function _1(e) {
  return this.compareTo(e) == 0;
}
function k1(e, t) {
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
function z1(e) {
  var t = vt();
  return this.addTo(e, t), t;
}
function P1(e) {
  var t = vt();
  return this.subTo(e, t), t;
}
function R1(e) {
  var t = vt();
  return this.multiplyTo(e, t), t;
}
function U1(e) {
  var t = vt();
  return this.divRemTo(e, t, null), t;
}
function Vr(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
}
function F1(e) {
  var t = vt();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(me.ZERO) > 0 && this.m.subTo(t, t), t;
}
function Y1(e) {
  var t = vt();
  return e.copyTo(t), this.reduce(t), t;
}
function Q1(e) {
  for (; e.t <= this.mt2; )
    e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767, r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; )
      e[n] -= e.DV, e[++n]++;
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function B1(e, t) {
  e.squareTo(t), this.reduce(t);
}
function $1(e, t, n) {
  e.multiplyTo(t, n), this.reduce(n);
}
Vr.prototype.convert = F1;
Vr.prototype.revert = Y1;
Vr.prototype.reduce = Q1;
Vr.prototype.mulTo = $1;
Vr.prototype.sqrTo = B1;
function W1(e, t, n) {
  var r = e.bitLength(), i, o = Mc(1), s = new Vr(t);
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
  for (r = yc(e[d]) - 1; d >= 0; ) {
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
me.prototype.copyTo = p1;
me.prototype.fromInt = M1;
me.prototype.fromString = y1;
me.prototype.clamp = m1;
me.prototype.dlShiftTo = I1;
me.prototype.drShiftTo = N1;
me.prototype.lShiftTo = T1;
me.prototype.rShiftTo = j1;
me.prototype.subTo = S1;
me.prototype.multiplyTo = b1;
me.prototype.squareTo = C1;
me.prototype.divRemTo = x1;
me.prototype.invDigit = L1;
me.prototype.addTo = k1;
me.prototype.toString = v1;
me.prototype.negate = w1;
me.prototype.abs = D1;
me.prototype.compareTo = A1;
me.prototype.bitLength = E1;
me.prototype.mod = O1;
me.prototype.equals = _1;
me.prototype.add = z1;
me.prototype.subtract = P1;
me.prototype.multiply = R1;
me.prototype.divide = U1;
me.prototype.modPow = W1;
me.ZERO = Mc(0);
me.ONE = Mc(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function wa(e) {
  return Ke.Buffer.from(new u1().random(e).toString(), "hex");
}
var H1 = /^[89a-f]/i, V1 = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", q1 = "userAttributes.", vr = /* @__PURE__ */ function() {
  function e(n) {
    this.N = new me(V1, 16), this.g = new me("2", 16), this.k = new me(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {
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
    var r = wa(128).toString("hex"), i = new me(r, 16);
    return i;
  }, t.generateRandomString = function() {
    return wa(40).toString("base64");
  }, t.getRandomPassword = function() {
    return this.randomPassword;
  }, t.getSaltDevices = function() {
    return this.SaltToHashDevices;
  }, t.getVerifierDevices = function() {
    return this.verifierDevices;
  }, t.generateHashDevice = function(r, i, o) {
    var s = this;
    this.randomPassword = this.generateRandomString();
    var a = "" + r + i + ":" + this.randomPassword, u = this.hash(a), c = wa(16).toString("hex");
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
    var i = new Sn.Sha256();
    i.update(r);
    var o = i.digestSync(), s = Ke.Buffer.from(o).toString("hex");
    return new Array(64 - s.length).join("0") + s;
  }, t.hexHash = function(r) {
    return this.hash(Ke.Buffer.from(r, "hex"));
  }, t.computehkdf = function(r, i) {
    var o = Ke.Buffer.concat([this.infoBits, Ke.Buffer.from(String.fromCharCode(1), "utf8")]), s = new Sn.Sha256(i);
    s.update(r);
    var a = s.digestSync(), u = new Sn.Sha256(a);
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
    return q1;
  }, t.padHex = function(r) {
    if (!(r instanceof me))
      throw new Error("Not a BigInteger");
    var i = r.compareTo(me.ZERO) < 0, o = r.abs().toString(16);
    if (o = o.length % 2 !== 0 ? "0" + o : o, o = H1.test(o) ? "00" + o : o, i) {
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
var xp = /* @__PURE__ */ function() {
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
function K1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gu(e, t);
}
function gu(e, t) {
  return gu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, gu(e, t);
}
var pu = /* @__PURE__ */ function(e) {
  K1(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, i = r.AccessToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(xp);
function G1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mu(e, t);
}
function Mu(e, t) {
  return Mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Mu(e, t);
}
var yu = /* @__PURE__ */ function(e) {
  G1(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, i = r.IdToken;
    return e.call(this, i || "") || this;
  }
  return t;
}(xp);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var mu = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, i = r.RefreshToken;
    this.token = i || "";
  }
  var t = e.prototype;
  return t.getToken = function() {
    return this.token;
  }, e;
}(), J1 = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var vu = "aws-amplify/" + J1, An = {
  userAgent: vu + " js",
  product: "",
  navigator: null,
  isReactNative: !1
};
if (typeof navigator < "u" && navigator.product)
  switch (An.product = navigator.product || "", An.navigator = navigator || null, navigator.product) {
    case "ReactNative":
      An.userAgent = vu + " react-native", An.isReactNative = !0;
      break;
    default:
      An.userAgent = vu + " js", An.isReactNative = !1;
      break;
  }
var Z1 = function() {
  return An.userAgent;
};
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var wu = /* @__PURE__ */ function() {
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
var X1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], eC = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Gd = /* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.getNowString = function() {
    var r = /* @__PURE__ */ new Date(), i = eC[r.getUTCDay()], o = X1[r.getUTCMonth()], s = r.getUTCDate(), a = r.getUTCHours();
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
var Er = /* @__PURE__ */ function() {
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
var Rn = {}, tC = /* @__PURE__ */ function() {
  function e() {
  }
  return e.setItem = function(n, r) {
    return Rn[n] = r, Rn[n];
  }, e.getItem = function(n) {
    return Object.prototype.hasOwnProperty.call(Rn, n) ? Rn[n] : void 0;
  }, e.removeItem = function(n) {
    return delete Rn[n];
  }, e.clear = function() {
    return Rn = {}, Rn;
  }, e;
}(), Op = /* @__PURE__ */ function() {
  function e() {
    try {
      this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
    } catch {
      this.storageWindow = tC;
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
var nC = typeof navigator < "u", Jd = nC ? An.isReactNative ? "react-native" : navigator.userAgent : "nodejs", Du = /* @__PURE__ */ function() {
  function e(n) {
    if (n == null || n.Username == null || n.Pool == null)
      throw new Error("Username and Pool information are required.");
    this.username = n.Username || "", this.pool = n.Pool, this.Session = null, this.client = n.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = n.Storage || new Op().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
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
    var o = this, s = new vr(this.pool.getUserPoolName()), a = new Gd(), u, c, l = {};
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
          var N = a.getNowString(), I = Ke.Buffer.concat([Ke.Buffer.from(o.pool.getUserPoolName(), "utf8"), Ke.Buffer.from(o.username, "utf8"), Ke.Buffer.from(v.SECRET_BLOCK, "base64"), Ke.Buffer.from(N, "utf8")]), Q = new Sn.Sha256(j);
          Q.update(I);
          var z = Q.digestSync(), W = Ke.Buffer.from(z).toString("base64"), $ = {};
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
    var a = new vr(this.pool.getUserPoolName());
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
        DeviceName: Jd
      }, function(v, w) {
        return v ? o.onFailure(v) : (s.deviceKey = r.AuthenticationResult.NewDeviceMetadata.DeviceKey, s.cacheDeviceKeyAndPassword(), w.UserConfirmationNecessary === !0 ? o.onSuccess(s.signInUserSession, w.UserConfirmationNecessary) : o.onSuccess(s.signInUserSession));
      });
    });
  }, t.completeNewPasswordChallenge = function(r, i, o, s) {
    var a = this;
    if (!r)
      return o.onFailure(new Error("New password is required."));
    var u = new vr(this.pool.getUserPoolName()), c = u.getNewPasswordRequiredChallengeUserAttributePrefix(), l = {};
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
    var o = this, s = new vr(this.deviceGroupKey), a = new Gd(), u = {};
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
          var j = a.getNowString(), N = Ke.Buffer.concat([Ke.Buffer.from(o.deviceGroupKey, "utf8"), Ke.Buffer.from(o.deviceKey, "utf8"), Ke.Buffer.from(h.SECRET_BLOCK, "base64"), Ke.Buffer.from(j, "utf8")]), I = new Sn.Sha256(w);
          I.update(N);
          var Q = I.digestSync(), z = Ke.Buffer.from(Q).toString("base64"), W = {};
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
    var u = new vr(this.pool.getUserPoolName());
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
      var h = new vr(a.pool.getUserPoolName());
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
          DeviceName: Jd
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
        }, c = new Er(u);
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
      var l = new yu({
        IdToken: this.storage.getItem(s)
      }), f = new pu({
        AccessToken: this.storage.getItem(a)
      }), d = new mu({
        RefreshToken: this.storage.getItem(u)
      }), g = parseInt(this.storage.getItem(c), 0) || 0, h = {
        IdToken: l,
        AccessToken: f,
        RefreshToken: d,
        ClockDrift: g
      }, p = new wu(h);
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
    var i = new yu(r), o = new pu(r), s = new mu(r), a = {
      IdToken: i,
      AccessToken: o,
      RefreshToken: s
    };
    return new wu(a);
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
function rC(e, t) {
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
const iC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rC
}, Symbol.toStringTag, { value: "Module" })), Zd = /* @__PURE__ */ Yi(iC);
self.fetch || (self.fetch = Zd.default || Zd);
function Lp() {
}
Lp.prototype.userAgent = Z1();
function oC(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pi(e, t);
}
function Au(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Au = function(r) {
    if (r === null || !aC(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return Io(r, arguments, Eu(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), Pi(i, r);
  }, Au(e);
}
function Io(e, t, n) {
  return sC() ? Io = Reflect.construct.bind() : Io = function(i, o, s) {
    var a = [null];
    a.push.apply(a, o);
    var u = Function.bind.apply(i, a), c = new u();
    return s && Pi(c, s.prototype), c;
  }, Io.apply(null, arguments);
}
function sC() {
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
function aC(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Pi(e, t) {
  return Pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Pi(e, t);
}
function Eu(e) {
  return Eu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Eu(e);
}
var uC = /* @__PURE__ */ function(e) {
  oC(t, e);
  function t(n, r, i, o) {
    var s;
    return s = e.call(this, n) || this, s.code = r, s.name = i, s.statusCode = o, s;
  }
  return t;
}(/* @__PURE__ */ Au(Error)), cC = /* @__PURE__ */ function() {
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
        u ? a(new uC(u.message, u.code, u.name, u.statusCode)) : s(c);
      });
    });
  }, t.requestWithRetry = function(r, i, o) {
    var s = this, a = 5 * 1e3;
    hC(function(u) {
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
      "X-Amz-User-Agent": Lp.prototype.userAgent,
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
}(), po = {
  debug: function() {
  }
}, lC = function(t) {
  var n = "nonRetryable";
  return t && t[n];
};
function _p(e, t, n, r) {
  if (r === void 0 && (r = 1), typeof e != "function")
    throw Error("functionToRetry must be a function");
  return po.debug(e.name + " attempt #" + r + " with args: " + JSON.stringify(t)), e.apply(void 0, t).catch(function(i) {
    if (po.debug("error on " + e.name, i), lC(i))
      throw po.debug(e.name + " non retryable error", i), i;
    var o = n(r, t, i);
    if (po.debug(e.name + " retrying in " + o + " ms"), o !== !1)
      return new Promise(function(s) {
        return setTimeout(s, o);
      }).then(function() {
        return _p(e, t, n, r + 1);
      });
    throw i;
  });
}
function fC(e) {
  var t = 100, n = 100;
  return function(r) {
    var i = Math.pow(2, r) * t + n * Math.random();
    return i > e ? !1 : i;
  };
}
var dC = 5 * 60 * 1e3;
function hC(e, t, n) {
  return n === void 0 && (n = dC), _p(e, t, fC(n));
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var gC = 55, pC = /* @__PURE__ */ function() {
  function e(n, r) {
    var i = n || {}, o = i.UserPoolId, s = i.ClientId, a = i.endpoint, u = i.fetchOptions, c = i.AdvancedSecurityDataCollectionFlag;
    if (!o || !s)
      throw new Error("Both UserPoolId and ClientId are required.");
    if (o.length > gC || !/^[\w-]+_[0-9a-zA-Z]+$/.test(o))
      throw new Error("Invalid UserPoolId format.");
    var l = o.split("_")[0];
    this.userPoolId = o, this.clientId = s, this.client = new cC(l, a, u), this.advancedSecurityDataCollectionFlag = c !== !1, this.storage = n.Storage || new Op().getStorage(), r && (this.wrapRefreshSessionCallback = r);
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
        user: new Du(g),
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
      return new Du(o);
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
}(), Hn = {}, MC = {
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
})(MC);
var yC = /* @__PURE__ */ function() {
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
}(), mC = "_self", vC = function(e) {
  var t = window.open(e, mC);
  return t ? Promise.resolve(t) : Promise.reject();
}, wC = function(e) {
  window.sessionStorage.setItem("oauth_state", e);
}, DC = function() {
  var e = window.sessionStorage.getItem("oauth_state");
  return window.sessionStorage.removeItem("oauth_state"), e;
}, AC = function(e) {
  window.sessionStorage.setItem("ouath_pkce_key", e);
}, EC = function() {
  var e = window.sessionStorage.getItem("ouath_pkce_key");
  return window.sessionStorage.removeItem("ouath_pkce_key"), e;
}, IC = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", Da = function(e, t, n) {
  rn.dispatch("auth", { event: e, data: t, message: n }, "Auth", IC);
}, wr = new Ht("OAuth"), NC = (
  /** @class */
  function() {
    function e(t) {
      var n = t.config, r = t.cognitoClientId, i = t.scopes, o = i === void 0 ? [] : i;
      if (this._urlOpener = n.urlOpener || vC, this._config = n, this._cognitoClientId = r, !this.isValidScopes(o))
        throw Error("scopes must be a String Array");
      this._scopes = o;
    }
    return e.prototype.isValidScopes = function(t) {
      return Array.isArray(t) && t.every(function(n) {
        return typeof n == "string";
      });
    }, e.prototype.oauthSignIn = function(t, n, r, i, o, s) {
      t === void 0 && (t = "code"), o === void 0 && (o = Bo.Cognito);
      var a = this._generateState(32), u = s ? a + "-" + zN(s) : a;
      wC(u);
      var c = this._generateRandom(128);
      AC(c);
      var l = this._generateChallenge(c), f = "S256", d = this._scopes.join(" "), g = Object.entries(ue.__assign(ue.__assign({ redirect_uri: r, response_type: t, client_id: i, identity_provider: o, scope: d, state: u }, t === "code" ? { code_challenge: l } : {}), t === "code" ? { code_challenge_method: f } : {})).map(function(p) {
        var m = ue.__read(p, 2), v = m[0], w = m[1];
        return encodeURIComponent(v) + "=" + encodeURIComponent(w);
      }).join("&"), h = "https://" + n + "/oauth2/authorize?" + g;
      wr.debug("Redirecting to " + h), this._urlOpener(h, r);
    }, e.prototype._handleCodeFlow = function(t) {
      return ue.__awaiter(this, void 0, void 0, function() {
        var n, r, i, o, s, a, u, c, l, f, d, g, h, p;
        return ue.__generator(this, function(m) {
          switch (m.label) {
            case 0:
              return n = (wn(t).query || "").split("&").map(function(v) {
                return v.split("=");
              }).reduce(function(v, w) {
                var j, N = ue.__read(w, 2), I = N[0], Q = N[1];
                return ue.__assign(ue.__assign({}, v), (j = {}, j[I] = Q, j));
              }, { code: void 0 }).code, r = wn(t).pathname || "/", i = wn(this._config.redirectSignIn).pathname || "/", !n || r !== i ? [
                2
                /*return*/
              ] : (o = "https://" + this._config.domain + "/oauth2/token", Da("codeFlow", {}, "Retrieving tokens from " + o), s = Kn(this._config) ? this._cognitoClientId : this._config.clientID, a = Kn(this._config) ? this._config.redirectSignIn : this._config.redirectUri, u = EC(), c = ue.__assign({
                grant_type: "authorization_code",
                code: n,
                client_id: s,
                redirect_uri: a
              }, u ? { code_verifier: u } : {}), wr.debug("Calling token endpoint: " + o + " with", c), l = Object.entries(c).map(function(v) {
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
          return n = (wn(t).hash || "#").substr(1).split("&").map(function(s) {
            return s.split("=");
          }).reduce(function(s, a) {
            var u, c = ue.__read(a, 2), l = c[0], f = c[1];
            return ue.__assign(ue.__assign({}, s), (u = {}, u[l] = f, u));
          }, {
            id_token: void 0,
            access_token: void 0
          }), r = n.id_token, i = n.access_token, Da("implicitFlow", {}, "Got tokens from " + t), wr.debug("Retrieving implicit tokens from " + t + " with"), [2, {
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
              if (c.trys.push([0, 5, , 6]), n = t ? ue.__assign(ue.__assign({}, (wn(t).hash || "#").substr(1).split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), g = d[0], h = d[1];
                return l[g] = h, l;
              }, {})), (wn(t).query || "").split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = ue.__read(f, 2), g = d[0], h = d[1];
                return l[g] = h, l;
              }, {})) : {}, r = n.error, i = n.error_description, r)
                throw new Error(i);
              return o = this._validateState(n), wr.debug("Starting " + this._config.responseType + " flow with " + t), this._config.responseType !== "code" ? [3, 2] : (s = [{}], [4, this._handleCodeFlow(t)]);
            case 1:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, s.concat([c.sent()])), { state: o }])];
            case 2:
              return a = [{}], [4, this._handleImplicitFlow(t)];
            case 3:
              return [2, ue.__assign.apply(void 0, [ue.__assign.apply(void 0, a.concat([c.sent()])), { state: o }])];
            case 4:
              return [3, 6];
            case 5:
              throw u = c.sent(), wr.debug("Error handling auth response.", u), u;
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
        var n = DC(), r = t.state;
        if (n && n !== r)
          throw new Error("Invalid state in OAuth flow");
        return r;
      }
    }, e.prototype.signOut = function() {
      return ue.__awaiter(this, void 0, void 0, function() {
        var t, n, r;
        return ue.__generator(this, function(i) {
          return t = "https://" + this._config.domain + "/logout?", n = Kn(this._config) ? this._cognitoClientId : this._config.oauth.clientID, r = Kn(this._config) ? this._config.redirectSignOut : this._config.returnTo, t += Object.entries({
            client_id: n,
            logout_uri: encodeURIComponent(r)
          }).map(function(o) {
            var s = ue.__read(o, 2), a = s[0], u = s[1];
            return a + "=" + u;
          }).join("&"), Da("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + t), wr.debug("Signing out from " + t), [2, this._urlOpener(t, r)];
        });
      });
    }, e.prototype._generateState = function(t) {
      for (var n = "", r = t, i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; r > 0; --r)
        n += i[Math.round(Math.random() * (i.length - 1))];
      return n;
    }, e.prototype._generateChallenge = function(t) {
      var n = new Sn.Sha256();
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
const TC = NC, jC = function(e) {
  if (hn().isBrowser && window.location) {
    var t = window.location.href;
    e({ url: t });
  } else if (!hn().isNode)
    throw new Error("Not supported");
};
var ct;
(function(e) {
  e.DEFAULT_MSG = "Authentication Error", e.EMPTY_EMAIL = "Email cannot be empty", e.EMPTY_PHONE = "Phone number cannot be empty", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty", e.NETWORK_ERROR = "Network Error", e.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
})(ct || (ct = {}));
var SC = new Ht("AuthError"), vn = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(n) {
      var r = this, i = CC[n], o = i.message, s = i.log;
      return r = e.call(this, o) || this, r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || o, SC.error(r.log), r;
    }
    return t;
  }(Error)
), bC = (
  /** @class */
  function(e) {
    ue.__extends(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r;
    }
    return t;
  }(vn)
), CC = {
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
}, ae = new Ht("AuthClass"), Xd = "aws.cognito.signin.user.admin", xC = 10 * 1e3, OC = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", xe = function(e, t, n) {
  rn.dispatch("auth", { event: e, data: t, message: n }, "Auth", OC);
}, LC = 60, _C = 3 * 60 * 1e3, kC = (
  /** @class */
  function() {
    function e(t) {
      var n = this;
      this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = Sp, this.wrapRefreshSessionCallback = function(r) {
        var i = function(o, s) {
          return s ? xe("tokenRefresh", void 0, "New token retrieved") : xe("tokenRefresh_failure", o, "Failed to retrieve new token"), r(o, s);
        };
        return i;
      }, this.configure(t), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), rn.listen("auth", function(r) {
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
      var r = Object.assign({}, this._config, Vg(t).Auth, t);
      this._config = r;
      var i = this._config, o = i.userPoolId, s = i.userPoolWebClientId, a = i.cookieStorage, u = i.oauth, c = i.region, l = i.identityPoolId, f = i.mandatorySignIn, d = i.refreshHandlers, g = i.identityPoolRegion, h = i.clientMetadata, p = i.endpoint, m = i.storage;
      if (!m)
        a ? this._storage = new yC(a) : this._storage = t.ssr ? new Kb() : new Mp().getStorage();
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
        v.Storage = this._storage, this.userPool = new pC(v, this.wrapRefreshSessionCallback);
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
      var w = u ? Kn(this._config.oauth) ? u : u.awsCognito : void 0;
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
        this._oAuthHandler = new TC({
          scopes: j.scopes,
          config: j,
          cognitoClientId: j.cognitoClientId
        });
        var N = {};
        jC(function(Q) {
          var z = Q.url;
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
        m && l.push(new Er({ Name: "email", Value: m })), v && l.push(new Er({
          Name: "phone_number",
          Value: v
        }));
      } else if (t && typeof t == "object") {
        u = t.username, c = t.password, t && t.clientMetadata ? d = t.clientMetadata : this._config.clientMetadata && (d = this._config.clientMetadata);
        var w = t.attributes;
        w && Object.keys(w).map(function(N) {
          l.push(new Er({ Name: N, Value: w[N] }));
        });
        var j = t.validationData;
        j && (f = [], Object.keys(j).map(function(N) {
          f.push(new Er({
            Name: N,
            Value: j[N]
          }));
        })), g = (o = t.autoSignIn) !== null && o !== void 0 ? o : { enabled: !1 }, g.enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), h = (s = g.validationData) !== null && s !== void 0 ? s : {}, p = (a = g.clientMetaData) !== null && a !== void 0 ? a : {});
      } else
        return this.rejectAuthError(ke.SignUpError);
      return u ? c ? (ae.debug("signUp attrs:", l), ae.debug("signUp validation data:", f), new Promise(function(N, I) {
        n.userPool.signUp(u, c, l, f, function(Q, z) {
          Q ? (xe("signUp_failure", Q, u + " failed to signup"), I(Q)) : (xe("signUp", z, u + " has signed up successfully"), g.enabled && n.handleAutoSignIn(u, c, h, p, z), N(z));
        }, d);
      })) : this.rejectAuthError(ke.EmptyPassword) : this.rejectAuthError(ke.EmptyUsername);
    }, e.prototype.handleAutoSignIn = function(t, n, r, i, o) {
      this.autoSignInInitiated = !0;
      var s = new Hd({
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
      rn.listen("auth", r);
    }, e.prototype.handleLinkAutoSignIn = function(t) {
      var n = this;
      this._storage.setItem("amplify-polling-started", "true");
      var r = Date.now(), i = setInterval(function() {
        Date.now() - r > _C ? (clearInterval(i), xe("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), n._storage.removeItem("amplify-auto-sign-in")) : n.signInAfterUserConfirmed(t, null, i);
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
                xe("autoSignIn", u, t.getUsername() + " has signed in successfully"), n && rn.remove("auth", n), r && (clearInterval(r), s._storage.removeItem("amplify-polling-started")), s._storage.removeItem("amplify-auto-sign-in");
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
      else if (HI(t))
        typeof n < "u" && ae.warn("The password should be defined under the first parameter object!"), i = t.username, o = t.password, s = t.validationData;
      else
        return this.rejectAuthError(ke.InvalidUsername);
      if (!i)
        return this.rejectAuthError(ke.EmptyUsername);
      var a = new Hd({
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
                      ae.debug("OAuth signIn in progress timeout"), rn.remove("auth", m), h();
                    }, xC);
                    rn.listen("auth", m);
                    function m(v) {
                      var w = v.payload, j = w.event;
                      (j === "cognitoHostedUI" || j === "cognitoHostedUI_failure") && (ae.debug("OAuth signIn resolved: " + j), clearTimeout(p), rn.remove("auth", m), h());
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
                  if (u = this._config.clientMetadata, c = s.getAccessToken().decodePayload().scope, l = c === void 0 ? "" : c, l.split(" ").includes(Xd))
                    o.getUserData(function(h, p) {
                      return ue.__awaiter(d, void 0, void 0, function() {
                        var m, v, w, j, N, I, Q;
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
                                }, I = new Er(N), w.push(I);
                              return Q = this.attributesToObject(w), Object.assign(o, { attributes: Q, preferredMFA: v }), [2, r(o)];
                          }
                        });
                      });
                    }, { bypassCache: a, clientMetadata: u });
                  else
                    return ae.debug("Unable to get the user data because the " + Xd + " is not in the scopes of the access token"), [2, r(o)];
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
      var r = hn().isBrowser;
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
              return Xs(t) || $I(t) || WI(t) || typeof t > "u" ? (i = t || {
                provider: Bo.Cognito
              }, u = Xs(i) ? i.provider : i.customProvider, o = (Xs(i), i.customState), this._config.userPoolId && (s = Kn(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, a = Kn(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, a, s, u, o)), [3, 4]) : [3, 1];
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
              if (xe("parsingCallbackUrl", { url: t }, "The callback url is being parsed"), n = t || (hn().isBrowser ? window.location.href : ""), r = !!(wn(n).query || "").split("&").map(function(v) {
                return v.split("=");
              }).find(function(v) {
                var w = ue.__read(v, 1), j = w[0];
                return j === "code" || j === "error";
              }), i = !!(wn(n).hash || "#").substr(1).split("&").map(function(v) {
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
              return o = m.sent(), s = o.accessToken, a = o.idToken, u = o.refreshToken, c = o.state, l = new wu({
                IdToken: new yu({ IdToken: a }),
                RefreshToken: new mu({
                  RefreshToken: u
                }),
                AccessToken: new pu({
                  AccessToken: s
                })
              }), f = void 0, this._config.identityPoolId ? [4, this.Credentials.set(l, "session")] : [3, 5];
            case 4:
              f = m.sent(), ae.debug("AWS credentials", f), m.label = 5;
            case 5:
              return d = /-/.test(c), g = this.createCognitoUser(l.getIdToken().decodePayload()["cognito:username"]), g.setSignInUserSession(l), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), xe("signIn", g, "A user " + g.getUsername() + " has been signed in"), xe("cognitoHostedUI", g, "A user " + g.getUsername() + " has been signed in via Cognito Hosted UI"), d && (h = c.split("-").splice(1).join("-"), xe("customOAuthState", PN(h), "State for user " + g.getUsername())), [2, f];
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
      var r = this._config.authenticationFlowType, i = new Du(n);
      return r && i.setAuthenticationFlowType(r), i;
    }, e.prototype._isValidAuthStorage = function(t) {
      return !!t && typeof t.getItem == "function" && typeof t.setItem == "function" && typeof t.removeItem == "function" && typeof t.clear == "function";
    }, e.prototype.noUserPoolErrorHandler = function(t) {
      return t && (!t.userPoolId || !t.identityPoolId) ? ke.MissingAuthConfig : ke.NoConfig;
    }, e.prototype.rejectAuthError = function(t) {
      return Promise.reject(new vn(t));
    }, e.prototype.rejectNoUserPool = function() {
      var t = this.noUserPoolErrorHandler(this._config);
      return Promise.reject(new bC(t));
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
                    s.code === "InvalidParameterException" ? o(new vn(ke.DeviceConfig)) : s.code === "NetworkError" ? o(new vn(ke.NetworkError)) : o(s);
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
                    s.code === "InvalidParameterException" ? o(new vn(ke.DeviceConfig)) : s.code === "NetworkError" ? o(new vn(ke.NetworkError)) : o(s);
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
                    a.code === "InvalidParameterException" ? o(new vn(ke.DeviceConfig)) : a.code === "NetworkError" ? o(new vn(ke.NetworkError)) : o(a);
                  }
                };
                t.listDevices(LC, null, s);
              })];
          }
        });
      });
    }, e;
  }()
), kn = new kC(null);
sc.register(kn);
var kp = {}, Aa = {}, eh;
function zC() {
  return eh || (eh = 1, function(e) {
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
  }(Aa)), Aa;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ue;
  t.__exportStar(zC(), e);
})(kp);
const u4 = () => {
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
  kn.configure(n);
}, c4 = async () => {
  try {
    const e = await kn.currentSession();
    if (e)
      return e.getIdToken().getJwtToken();
  } catch {
    return "";
  }
}, l4 = async () => {
  try {
    const e = await kn.currentSession();
    if (e)
      return e.getAccessToken().getJwtToken();
  } catch {
    return "";
  }
}, f4 = async () => {
  try {
    const e = await kn.currentSession();
    if (e)
      return e.getRefreshToken().getToken();
  } catch {
    return "";
  }
}, d4 = async () => {
  try {
    const e = await kn.currentUserInfo();
    if (e && e.attributes)
      return {
        id: e.attributes.sub,
        name: e.attributes.preferred_username,
        picture: e.attributes.picture
      };
  } catch {
    return null;
  }
}, PC = () => {
  try {
    kn.federatedSignIn({
      provider: kp.CognitoHostedUIIdentityProvider.Google,
      customState: window.location.pathname + window.location.search
    });
  } catch (e) {
    console.log(e);
  }
}, h4 = () => {
  kn.signOut();
};
var RC = Object.defineProperty, UC = (e, t, n) => t in e ? RC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ea = (e, t, n) => (UC(e, typeof t != "symbol" ? t + "" : t, n), n);
let FC = class {
  constructor() {
    Ea(this, "current", this.detect()), Ea(this, "handoffState", "pending"), Ea(this, "currentId", 0);
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
}, cn = new FC(), zn = (e, t) => {
  cn.isServer ? st(e, t) : gh(e, t);
};
function Os(e) {
  let t = tt(e);
  return zn(() => {
    t.current = e;
  }, [e]), t;
}
function Gi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function mc() {
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
    return Gi(() => {
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
    let r = mc();
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
function YC() {
  let [e] = On(mc);
  return st(() => () => e.dispose(), [e]), e;
}
let _t = function(e) {
  let t = Os(e);
  return Te.useCallback((...n) => t.current(...n), [t]);
};
function Ls() {
  let [e, t] = On(cn.isHandoffComplete);
  return e && cn.isHandoffComplete === !1 && t(!1), st(() => {
    e !== !0 && t(!0);
  }, [e]), st(() => cn.handoff(), []), e;
}
var th;
let qr = (th = Te.useId) != null ? th : function() {
  let e = Ls(), [t, n] = Te.useState(e ? () => cn.nextId() : null);
  return zn(() => {
    t === null && n(cn.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function xn(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, xn), r;
}
function zp(e) {
  return cn.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Iu = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Vn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Vn || {}), Pp = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Pp || {}), QC = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(QC || {});
function BC(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Iu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Rp = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rp || {});
function $C(e, t = 0) {
  var n;
  return e === ((n = zp(e)) == null ? void 0 : n.body) ? !1 : xn(t, { [0]() {
    return e.matches(Iu);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Iu))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var WC = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(WC || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function nr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let HC = ["textarea", "input"].join(",");
function VC(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, HC)) != null ? n : !1;
}
function qC(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null)
      return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function No(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? qC(e) : e : BC(e);
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
  return t & 6 && VC(d) && d.select(), 2;
}
function Ia(e, t, n) {
  let r = Os(t);
  st(() => {
    function i(o) {
      r.current(o);
    }
    return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n);
  }, [e, n]);
}
function KC(e, t, n = !0) {
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
      return !$C(c, Rp.Loose) && c.tabIndex !== -1 && s.preventDefault(), t(s, c);
    }
  }
  let o = tt(null);
  Ia("mousedown", (s) => {
    var a, u;
    r.current && (o.current = ((u = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), Ia("click", (s) => {
    o.current && (i(s, () => o.current), o.current = null);
  }, !0), Ia("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
let Up = Symbol();
function GC(e, t = !0) {
  return Object.assign(e, { [Up]: t });
}
function yn(...e) {
  let t = tt(e);
  st(() => {
    t.current = e;
  }, [e]);
  let n = _t((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : i.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Up])) ? void 0 : n;
}
function nh(...e) {
  return e.filter(Boolean).join(" ");
}
var Nu = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nu || {}), JC = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(JC || {});
function Zt({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: o = !0, name: s }) {
  let a = Fp(t, e);
  if (o)
    return Mo(a, n, r, s);
  let u = i ?? 0;
  if (u & 2) {
    let { static: c = !1, ...l } = a;
    if (c)
      return Mo(l, n, r, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...l } = a;
    return xn(c ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return Mo({ ...l, hidden: !0, style: { display: "none" } }, n, r, s);
    } });
  }
  return Mo(a, n, r, s);
}
function Mo(e, t = {}, n, r) {
  let { as: i = n, children: o, refName: s = "ref", ...a } = Na(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
  let l = {};
  if (t) {
    let f = !1, d = [];
    for (let [g, h] of Object.entries(t))
      typeof h == "boolean" && (f = !0), h === !0 && d.push(g);
    f && (l["data-headlessui-state"] = d.join(" "));
  }
  if (i === Tn && Object.keys(rh(a)).length > 0) {
    if (!hi(c) || Array.isArray(c) && c.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    let f = c.props, d = typeof (f == null ? void 0 : f.className) == "function" ? (...h) => nh(f == null ? void 0 : f.className(...h), a.className) : nh(f == null ? void 0 : f.className, a.className), g = d ? { className: d } : {};
    return gi(c, Object.assign({}, Fp(c.props, rh(Na(a, ["ref"]))), l, u, ZC(c.ref, u.ref), g));
  }
  return wt(i, Object.assign({}, Na(a, ["ref"]), i !== Tn && u, i !== Tn && l), c);
}
function ZC(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  } };
}
function Fp(...e) {
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
function Xt(e) {
  var t;
  return Object.assign(Xo(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function rh(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Na(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function XC(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && ex(n) ? !1 : r;
}
function ex(e) {
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
let tx = "div";
var Ko = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ko || {});
function nx(e, t) {
  let { features: n = 1, ...r } = e, i = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Zt({ ourProps: i, theirProps: r, slot: {}, defaultTag: tx, name: "Hidden" });
}
let Tu = Xt(nx), Yp = gn(null);
Yp.displayName = "OpenClosedContext";
var fi = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(fi || {});
function rx() {
  return gt(Yp);
}
var Qp = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Qp || {});
function vc(e, t) {
  let n = tt([]), r = _t(e);
  st(() => {
    let i = [...n.current];
    for (let [o, s] of t.entries())
      if (n.current[o] !== s) {
        let a = r(t, i);
        return n.current = t, a;
      }
  }, [r, ...t]);
}
function ix() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ox(e, t, n) {
  let r = Os(t);
  st(() => {
    function i(o) {
      r.current(o);
    }
    return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n);
  }, [e, n]);
}
var di = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(di || {});
function sx() {
  let e = tt(0);
  return ox("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Bp() {
  let e = tt(!1);
  return zn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function _s(...e) {
  return fn(() => zp(...e), [...e]);
}
function $p(e, t, n, r) {
  let i = Os(n);
  st(() => {
    e = e ?? window;
    function o(s) {
      i.current(s);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function ax(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Wp(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current)
    n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let ux = "div";
var Hp = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hp || {});
function cx(e, t) {
  let n = tt(null), r = yn(n, t), { initialFocus: i, containers: o, features: s = 30, ...a } = e;
  Ls() || (s = 1);
  let u = _s(n);
  dx({ ownerDocument: u }, !!(s & 16));
  let c = hx({ ownerDocument: u, container: n, initialFocus: i }, !!(s & 2));
  gx({ ownerDocument: u, container: n, containers: o, previousActiveElement: c }, !!(s & 8));
  let l = sx(), f = _t((p) => {
    let m = n.current;
    m && ((v) => v())(() => {
      xn(l.current, { [di.Forwards]: () => {
        No(m, Vn.First, { skipElements: [p.relatedTarget] });
      }, [di.Backwards]: () => {
        No(m, Vn.Last, { skipElements: [p.relatedTarget] });
      } });
    });
  }), d = YC(), g = tt(!1), h = { ref: r, onKeyDown(p) {
    p.key == "Tab" && (g.current = !0, d.requestAnimationFrame(() => {
      g.current = !1;
    }));
  }, onBlur(p) {
    let m = Wp(o);
    n.current instanceof HTMLElement && m.add(n.current);
    let v = p.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Vp(m, v) || (g.current ? No(n.current, xn(l.current, { [di.Forwards]: () => Vn.Next, [di.Backwards]: () => Vn.Previous }) | Vn.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && nr(p.target)));
  } };
  return Te.createElement(Te.Fragment, null, !!(s & 4) && Te.createElement(Tu, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ko.Focusable }), Zt({ ourProps: h, theirProps: a, defaultTag: ux, name: "FocusTrap" }), !!(s & 4) && Te.createElement(Tu, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ko.Focusable }));
}
let lx = Xt(cx), ii = Object.assign(lx, { features: Hp }), In = [];
ax(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && In[0] !== t.target && (In.unshift(t.target), In = In.filter((n) => n != null && n.isConnected), In.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function fx(e = !0) {
  let t = tt(In.slice());
  return vc(([n], [r]) => {
    r === !0 && n === !1 && Gi(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = In.slice());
  }, [e, In, t]), _t(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function dx({ ownerDocument: e }, t) {
  let n = fx(t);
  vc(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && nr(n());
  }, [t]);
  let r = tt(!1);
  st(() => (r.current = !1, () => {
    r.current = !0, Gi(() => {
      r.current && nr(n());
    });
  }), []);
}
function hx({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let i = tt(null), o = Bp();
  return vc(() => {
    if (!r)
      return;
    let s = t.current;
    s && Gi(() => {
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
      n != null && n.current ? nr(n.current) : No(s, Vn.First) === Pp.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [r]), i;
}
function gx({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, i) {
  let o = Bp();
  $p(e == null ? void 0 : e.defaultView, "focus", (s) => {
    if (!i || !o.current)
      return;
    let a = Wp(n);
    t.current instanceof HTMLElement && a.add(t.current);
    let u = r.current;
    if (!u)
      return;
    let c = s.target;
    c && c instanceof HTMLElement ? Vp(a, c) ? (r.current = c, nr(c)) : (s.preventDefault(), s.stopPropagation(), nr(u)) : nr(r.current);
  }, !0);
}
function Vp(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let qp = gn(!1);
function px() {
  return gt(qp);
}
function ju(e) {
  return Te.createElement(qp.Provider, { value: e.force }, e.children);
}
function Mx(e) {
  let t = px(), n = gt(Kp), r = _s(e), [i, o] = On(() => {
    if (!t && n !== null || cn.isServer)
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
let yx = Tn;
function mx(e, t) {
  let n = e, r = tt(null), i = yn(GC((l) => {
    r.current = l;
  }), t), o = _s(r), s = Mx(r), [a] = On(() => {
    var l;
    return cn.isServer ? null : (l = o == null ? void 0 : o.createElement("div")) != null ? l : null;
  }), u = Ls(), c = tt(!1);
  return zn(() => {
    if (c.current = !1, !(!s || !a))
      return s.contains(a) || (a.setAttribute("data-headlessui-portal", ""), s.appendChild(a)), () => {
        c.current = !0, Gi(() => {
          var l;
          c.current && (!s || !a || (a instanceof Node && s.contains(a) && s.removeChild(a), s.childNodes.length <= 0 && ((l = s.parentElement) == null || l.removeChild(s))));
        });
      };
  }, [s, a]), u ? !s || !a ? null : DM(Zt({ ourProps: { ref: i }, theirProps: n, defaultTag: yx, name: "Portal" }), a) : null;
}
let vx = Tn, Kp = gn(null);
function wx(e, t) {
  let { target: n, ...r } = e, i = { ref: yn(t) };
  return Te.createElement(Kp.Provider, { value: n }, Zt({ ourProps: i, theirProps: r, defaultTag: vx, name: "Popover.Group" }));
}
let Dx = Xt(mx), Ax = Xt(wx), Su = Object.assign(Dx, { Group: Ax }), Gp = gn(null);
function Jp() {
  let e = gt(Gp);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Jp), t;
  }
  return e;
}
function Ex() {
  let [e, t] = On([]);
  return [e.length > 0 ? e.join(" ") : void 0, fn(() => function(n) {
    let r = _t((o) => (t((s) => [...s, o]), () => t((s) => {
      let a = s.slice(), u = a.indexOf(o);
      return u !== -1 && a.splice(u, 1), a;
    }))), i = fn(() => ({ register: r, slot: n.slot, name: n.name, props: n.props }), [r, n.slot, n.name, n.props]);
    return Te.createElement(Gp.Provider, { value: i }, n.children);
  }, [t])];
}
let Ix = "p";
function Nx(e, t) {
  let n = qr(), { id: r = `headlessui-description-${n}`, ...i } = e, o = Jp(), s = yn(t);
  zn(() => o.register(r), [r, o.register]);
  let a = { ref: s, ...o.props, id: r };
  return Zt({ ourProps: a, theirProps: i, slot: o.slot || {}, defaultTag: Ix, name: o.name || "Description" });
}
let Tx = Xt(Nx), jx = Object.assign(Tx, {}), wc = gn(() => {
});
wc.displayName = "StackContext";
var bu = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(bu || {});
function Sx() {
  return gt(wc);
}
function bx({ children: e, onUpdate: t, type: n, element: r, enabled: i }) {
  let o = Sx(), s = _t((...a) => {
    t == null || t(...a), o(...a);
  });
  return zn(() => {
    let a = i === void 0 || i === !0;
    return a && s(0, n, r), () => {
      a && s(1, n, r);
    };
  }, [s, n, r, i]), Te.createElement(wc.Provider, { value: s }, e);
}
function Cx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const xx = typeof Object.is == "function" ? Object.is : Cx, { useState: Ox, useEffect: Lx, useLayoutEffect: _x, useDebugValue: kx } = oe;
function zx(e, t, n) {
  const r = t(), [{ inst: i }, o] = Ox({ inst: { value: r, getSnapshot: t } });
  return _x(() => {
    i.value = r, i.getSnapshot = t, Ta(i) && o({ inst: i });
  }, [e, r, t]), Lx(() => (Ta(i) && o({ inst: i }), e(() => {
    Ta(i) && o({ inst: i });
  })), [e]), kx(r), r;
}
function Ta(e) {
  const t = e.getSnapshot, n = e.value;
  try {
    const r = t();
    return !xx(n, r);
  } catch {
    return !0;
  }
}
function Px(e, t, n) {
  return t();
}
const Rx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ux = !Rx, Fx = Ux ? Px : zx, Yx = "useSyncExternalStore" in oe ? ((e) => e.useSyncExternalStore)(oe) : Fx;
function Qx(e) {
  return Yx(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Bx(e, t) {
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
function $x() {
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
function Wx() {
  if (!ix())
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
function Hx() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Vx(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Zn = Bx(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: mc(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Vx(n) }, i = [Wx(), $x(), Hx()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Zn.subscribe(() => {
  let e = Zn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && Zn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Zn.dispatch("TEARDOWN", n);
  }
});
function qx(e, t, n) {
  let r = Qx(Zn), i = e ? r.get(e) : void 0, o = i ? i.count > 0 : !1;
  return zn(() => {
    if (!(!e || !t))
      return Zn.dispatch("PUSH", e, n), () => Zn.dispatch("POP", e, n);
  }, [t, e]), o;
}
let ja = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new Map();
function ih(e, t = !0) {
  zn(() => {
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
      let a = (s = oi.get(r)) != null ? s : 1;
      if (a === 1 ? oi.delete(r) : oi.set(r, a - 1), a !== 1)
        return;
      let u = ja.get(r);
      u && (u["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", u["aria-hidden"]), r.inert = u.inert, ja.delete(r));
    }
    let o = (n = oi.get(r)) != null ? n : 0;
    return oi.set(r, o + 1), o !== 0 || (ja.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0), i;
  }, [e, t]);
}
var Kx = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kx || {}), Gx = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Gx || {});
let Jx = { [0](e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Go = gn(null);
Go.displayName = "DialogContext";
function Ji(e) {
  let t = gt(Go);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ji), n;
  }
  return t;
}
function Zx(e, t, n = () => [document.body]) {
  qx(e, t, (r) => {
    var i;
    return { containers: [...(i = r.containers) != null ? i : [], n] };
  });
}
function Xx(e, t) {
  return xn(t.type, Jx, e, t);
}
let eO = "div", tO = Nu.RenderStrategy | Nu.Static;
function nO(e, t) {
  let n = qr(), { id: r = `headlessui-dialog-${n}`, open: i, onClose: o, initialFocus: s, __demoMode: a = !1, ...u } = e, [c, l] = On(0), f = rx();
  i === void 0 && f !== null && (i = (f & fi.Open) === fi.Open);
  let d = tt(null), g = yn(d, t), h = tt(null), p = _s(d), m = e.hasOwnProperty("open") || f !== null, v = e.hasOwnProperty("onClose");
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
  let w = i ? 0 : 1, [j, N] = mM(Xx, { titleId: null, descriptionId: null, panelRef: vM() }), I = _t(() => o(!1)), Q = _t((X) => N({ type: 0, id: X })), z = Ls() ? a ? !1 : w === 0 : !1, W = c > 1, $ = gt(Go) !== null, b = W ? "parent" : "leaf", k = f !== null ? (f & fi.Closing) === fi.Closing : !1, U = (() => $ || k ? !1 : z)(), x = Cc(() => {
    var X, O;
    return (O = Array.from((X = p == null ? void 0 : p.querySelectorAll("body > *")) != null ? X : []).find((ne) => ne.id === "headlessui-portal-root" ? !1 : ne.contains(h.current) && ne instanceof HTMLElement)) != null ? O : null;
  }, [h]);
  ih(x, U);
  let T = (() => W ? !0 : z)(), S = Cc(() => {
    var X, O;
    return (O = Array.from((X = p == null ? void 0 : p.querySelectorAll("[data-headlessui-portal]")) != null ? X : []).find((ne) => ne.contains(h.current) && ne instanceof HTMLElement)) != null ? O : null;
  }, [h]);
  ih(S, T);
  let R = _t(() => {
    var X, O;
    return [...Array.from((X = p == null ? void 0 : p.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? X : []).filter((ne) => !(ne === document.body || ne === document.head || !(ne instanceof HTMLElement) || ne.contains(h.current) || j.panelRef.current && ne.contains(j.panelRef.current))), (O = j.panelRef.current) != null ? O : d.current];
  }), C = (() => !(!z || W))();
  KC(() => R(), I, C);
  let J = (() => !(W || w !== 0))();
  $p(p == null ? void 0 : p.defaultView, "keydown", (X) => {
    J && (X.defaultPrevented || X.key === Qp.Escape && (X.preventDefault(), X.stopPropagation(), I()));
  });
  let re = (() => !(k || w !== 0 || $))();
  Zx(p, re, R), st(() => {
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
  let [L, F] = Ex(), P = fn(() => [{ dialogState: w, close: I, setTitleId: Q }, j], [w, j, I, Q]), q = fn(() => ({ open: w === 0 }), [w]), K = { ref: g, id: r, role: "dialog", "aria-modal": w === 0 ? !0 : void 0, "aria-labelledby": j.titleId, "aria-describedby": L };
  return Te.createElement(bx, { type: "Dialog", enabled: w === 0, element: d, onUpdate: _t((X, O) => {
    O === "Dialog" && xn(X, { [bu.Add]: () => l((ne) => ne + 1), [bu.Remove]: () => l((ne) => ne - 1) });
  }) }, Te.createElement(ju, { force: !0 }, Te.createElement(Su, null, Te.createElement(Go.Provider, { value: P }, Te.createElement(Su.Group, { target: d }, Te.createElement(ju, { force: !1 }, Te.createElement(F, { slot: q, name: "Dialog.Description" }, Te.createElement(ii, { initialFocus: s, containers: R, features: z ? xn(b, { parent: ii.features.RestoreFocus, leaf: ii.features.All & ~ii.features.FocusLock }) : ii.features.None }, Zt({ ourProps: K, theirProps: u, slot: q, defaultTag: eO, features: tO, visible: w === 0, name: "Dialog" })))))))), Te.createElement(Tu, { features: Ko.Hidden, ref: h }));
}
let rO = "div";
function iO(e, t) {
  let n = qr(), { id: r = `headlessui-dialog-overlay-${n}`, ...i } = e, [{ dialogState: o, close: s }] = Ji("Dialog.Overlay"), a = yn(t), u = _t((l) => {
    if (l.target === l.currentTarget) {
      if (XC(l.currentTarget))
        return l.preventDefault();
      l.preventDefault(), l.stopPropagation(), s();
    }
  }), c = fn(() => ({ open: o === 0 }), [o]);
  return Zt({ ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u }, theirProps: i, slot: c, defaultTag: rO, name: "Dialog.Overlay" });
}
let oO = "div";
function sO(e, t) {
  let n = qr(), { id: r = `headlessui-dialog-backdrop-${n}`, ...i } = e, [{ dialogState: o }, s] = Ji("Dialog.Backdrop"), a = yn(t);
  st(() => {
    if (s.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s.panelRef]);
  let u = fn(() => ({ open: o === 0 }), [o]);
  return Te.createElement(ju, { force: !0 }, Te.createElement(Su, null, Zt({ ourProps: { ref: a, id: r, "aria-hidden": !0 }, theirProps: i, slot: u, defaultTag: oO, name: "Dialog.Backdrop" })));
}
let aO = "div";
function uO(e, t) {
  let n = qr(), { id: r = `headlessui-dialog-panel-${n}`, ...i } = e, [{ dialogState: o }, s] = Ji("Dialog.Panel"), a = yn(t, s.panelRef), u = fn(() => ({ open: o === 0 }), [o]), c = _t((l) => {
    l.stopPropagation();
  });
  return Zt({ ourProps: { ref: a, id: r, onClick: c }, theirProps: i, slot: u, defaultTag: aO, name: "Dialog.Panel" });
}
let cO = "h2";
function lO(e, t) {
  let n = qr(), { id: r = `headlessui-dialog-title-${n}`, ...i } = e, [{ dialogState: o, setTitleId: s }] = Ji("Dialog.Title"), a = yn(t);
  st(() => (s(r), () => s(null)), [r, s]);
  let u = fn(() => ({ open: o === 0 }), [o]);
  return Zt({ ourProps: { ref: a, id: r }, theirProps: i, slot: u, defaultTag: cO, name: "Dialog.Title" });
}
let fO = Xt(nO), dO = Xt(sO), hO = Xt(uO), gO = Xt(iO), pO = Xt(lO), yo = Object.assign(fO, { Backdrop: dO, Panel: hO, Overlay: gO, Title: pO, Description: jx });
const MO = {
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
}, yO = ({ isModalOpen: e, closeModal: t, t: n }) => /* @__PURE__ */ ge.jsx(yo, { open: e, onClose: () => t, children: /* @__PURE__ */ ge.jsxs(
  yo.Panel,
  {
    className: "bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3",
    style: { borderRadius: "20px", padding: "1em 2em" },
    children: [
      /* @__PURE__ */ ge.jsxs(yo.Title, { style: { fontSize: "24px" }, children: [
        n("user.Sign in"),
        /* @__PURE__ */ ge.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } })
      ] }),
      /* @__PURE__ */ ge.jsxs(yo.Description, { children: [
        /* @__PURE__ */ ge.jsxs("div", { className: "px-4 py-4 lg:px-16", children: [
          /* @__PURE__ */ ge.jsx("p", { children: n("user.sign in description") }),
          /* @__PURE__ */ ge.jsxs("button", { style: MO, onClick: PC, children: [
            /* @__PURE__ */ ge.jsx("span", { style: { padding: "0px", paddingRight: "0.5em" }, children: /* @__PURE__ */ ge.jsx(Dv, {}) }),
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
) }), p4 = QI("translation")(yO);
var Zp = [], mO = Zp.forEach, vO = Zp.slice;
function wO(e) {
  return mO.call(vO.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
var oh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, DO = function(t, n, r) {
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
    if (!oh.test(i.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!oh.test(i.path))
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
}, sh = {
  create: function(t, n, r, i) {
    var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (o.expires = /* @__PURE__ */ new Date(), o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)), i && (o.domain = i), document.cookie = DO(t, encodeURIComponent(n), o);
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
}, AO = {
  name: "cookie",
  lookup: function(t) {
    var n;
    if (t.lookupCookie && typeof document < "u") {
      var r = sh.read(t.lookupCookie);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupCookie && typeof document < "u" && sh.create(n.lookupCookie, t, n.cookieMinutes, n.cookieDomain, n.cookieOptions);
  }
}, EO = {
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
}, si = null, ah = function() {
  if (si !== null)
    return si;
  try {
    si = window !== "undefined" && window.localStorage !== null;
    var t = "i18next.translate.boo";
    window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
  } catch {
    si = !1;
  }
  return si;
}, IO = {
  name: "localStorage",
  lookup: function(t) {
    var n;
    if (t.lookupLocalStorage && ah()) {
      var r = window.localStorage.getItem(t.lookupLocalStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupLocalStorage && ah() && window.localStorage.setItem(n.lookupLocalStorage, t);
  }
}, ai = null, uh = function() {
  if (ai !== null)
    return ai;
  try {
    ai = window !== "undefined" && window.sessionStorage !== null;
    var t = "i18next.translate.boo";
    window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t);
  } catch {
    ai = !1;
  }
  return ai;
}, NO = {
  name: "sessionStorage",
  lookup: function(t) {
    var n;
    if (t.lookupSessionStorage && uh()) {
      var r = window.sessionStorage.getItem(t.lookupSessionStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupSessionStorage && uh() && window.sessionStorage.setItem(n.lookupSessionStorage, t);
  }
}, TO = {
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
}, jO = {
  name: "htmlTag",
  lookup: function(t) {
    var n, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, SO = {
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
}, bO = {
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
function CO() {
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
var Xp = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Fg(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  return Yg(e, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = wO(r, this.options || {}, CO()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = i, this.addDetector(AO), this.addDetector(EO), this.addDetector(IO), this.addDetector(NO), this.addDetector(TO), this.addDetector(jO), this.addDetector(SO), this.addDetector(bO);
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
Xp.type = "languageDetector";
function Cu(e) {
  return Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cu(e);
}
var eM = [], xO = eM.forEach, OO = eM.slice;
function xu(e) {
  return xO.call(OO.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
function tM() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Cu(XMLHttpRequest)) === "object";
}
function LO(e) {
  return !!e && typeof e.then == "function";
}
function _O(e) {
  return LO(e) ? e : Promise.resolve(e);
}
function kO(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ri = {}, zO = {
  get exports() {
    return Ri;
  },
  set exports(e) {
    Ri = e;
  }
}, Di = {}, PO = {
  get exports() {
    return Di;
  },
  set exports(e) {
    Di = e;
  }
}, ch;
function RO() {
  return ch || (ch = 1, function(e, t) {
    var n = typeof self < "u" ? self : kt, r = function() {
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
        var Q = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function z(T) {
          var S = T.toUpperCase();
          return Q.indexOf(S) > -1 ? S : T;
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
              var C = R.split("="), J = C.shift().replace(/\+/g, " "), re = C.join("=").replace(/\+/g, " ");
              S.append(decodeURIComponent(J), decodeURIComponent(re));
            }
          }), S;
        }
        function b(T) {
          var S = new h(), R = T.replace(/\r?\n[\t ]+/g, " ");
          return R.split(/\r?\n/).forEach(function(C) {
            var J = C.split(":"), re = J.shift().trim();
            if (re) {
              var L = J.join(":").trim();
              S.append(re, L);
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
            var re = new XMLHttpRequest();
            function L() {
              re.abort();
            }
            re.onload = function() {
              var F = {
                status: re.status,
                statusText: re.statusText,
                headers: b(re.getAllResponseHeaders() || "")
              };
              F.url = "responseURL" in re ? re.responseURL : F.headers.get("X-Request-URL");
              var P = "response" in re ? re.response : re.responseText;
              R(new k(P, F));
            }, re.onerror = function() {
              C(new TypeError("Network request failed"));
            }, re.ontimeout = function() {
              C(new TypeError("Network request failed"));
            }, re.onabort = function() {
              C(new s.DOMException("Aborted", "AbortError"));
            }, re.open(J.method, J.url, !0), J.credentials === "include" ? re.withCredentials = !0 : J.credentials === "omit" && (re.withCredentials = !1), "responseType" in re && a.blob && (re.responseType = "blob"), J.headers.forEach(function(F, P) {
              re.setRequestHeader(P, F);
            }), J.signal && (J.signal.addEventListener("abort", L), re.onreadystatechange = function() {
              re.readyState === 4 && J.signal.removeEventListener("abort", L);
            }), re.send(typeof J._bodyInit > "u" ? null : J._bodyInit);
          });
        }
        return x.polyfill = !0, o.fetch || (o.fetch = x, o.Headers = h, o.Request = W, o.Response = k), s.Headers = h, s.Request = W, s.Response = k, s.fetch = x, Object.defineProperty(s, "__esModule", { value: !0 }), s;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t;
  }(PO, Di)), Di;
}
(function(e, t) {
  var n;
  if (typeof fetch == "function" && (typeof kt < "u" && kt.fetch ? n = kt.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof kO < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = n || RO();
    r.default && (r = r.default), t.default = r, e.exports = t.default;
  }
})(zO, Ri);
const nM = Ri, lh = /* @__PURE__ */ AM({
  __proto__: null,
  default: nM
}, [Ri]);
function Jo(e) {
  return Jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jo(e);
}
var ln;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? ln = global.fetch : typeof window < "u" && window.fetch ? ln = window.fetch : ln = fetch);
var Ui;
tM() && (typeof global < "u" && global.XMLHttpRequest ? Ui = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Ui = window.XMLHttpRequest));
var Zo;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Zo = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Zo = window.ActiveXObject));
!ln && lh && !Ui && !Zo && (ln = nM || lh);
typeof ln != "function" && (ln = void 0);
var Ou = function(t, n) {
  if (n && Jo(n) === "object") {
    var r = "";
    for (var i in n)
      r += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(n[i]);
    if (!r)
      return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return t;
}, fh = function(t, n, r) {
  ln(t, n).then(function(i) {
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
}, dh = !1, UO = function(t, n, r, i) {
  t.queryStringParams && (n = Ou(n, t.queryStringParams));
  var o = xu({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  r && (o["Content-Type"] = "application/json");
  var s = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions, a = xu({
    method: r ? "POST" : "GET",
    body: r ? t.stringify(r) : void 0,
    headers: o
  }, dh ? {} : s);
  try {
    fh(n, a, i);
  } catch (u) {
    if (!s || Object.keys(s).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
      return i(u);
    try {
      Object.keys(s).forEach(function(c) {
        delete a[c];
      }), fh(n, a, i), dh = !0;
    } catch (c) {
      i(c);
    }
  }
}, FO = function(t, n, r, i) {
  r && Jo(r) === "object" && (r = Ou("", r).slice(1)), t.queryStringParams && (n = Ou(n, t.queryStringParams));
  try {
    var o;
    Ui ? o = new Ui() : o = new Zo("MSXML2.XMLHTTP.3.0"), o.open(r ? "POST" : "GET", n, 1), t.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!t.withCredentials, r && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
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
}, YO = function(t, n, r, i) {
  if (typeof r == "function" && (i = r, r = void 0), i = i || function() {
  }, ln && n.indexOf("file:") !== 0)
    return UO(t, n, r, i);
  if (tM() || typeof ActiveXObject == "function")
    return FO(t, n, r, i);
  i(new Error("No fetch and no xhr implementation found!"));
};
function Fi(e) {
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e);
}
function QO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rM(r.key), r);
  }
}
function BO(e, t, n) {
  return t && hh(e.prototype, t), n && hh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $O(e, t, n) {
  return t = rM(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rM(e) {
  var t = WO(e, "string");
  return Fi(t) === "symbol" ? t : String(t);
}
function WO(e, t) {
  if (Fi(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fi(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HO = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: !1,
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, i) {
      return $O({}, r, i || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: YO,
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
}, iM = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    QO(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
  }
  return BO(e, [{
    key: "init",
    value: function(n) {
      var r = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = xu(i, this.options || {}, HO()), this.allOptions = o, this.services && this.options.reloadInterval && setInterval(function() {
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
      typeof this.options.loadPath == "function" && (u = this.options.loadPath(n, i)), u = _O(u), u.then(function(c) {
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
iM.type = "backend";
const VO = {
  [En.EN]: Ph,
  [En.JA]: Rh
}, M4 = ({
  i18n: e,
  customTranslations: t = VO
}) => {
  const n = {
    [En.EN]: {
      translation: { ...Ph, ...t[En.EN] }
    },
    [En.JA]: {
      translation: { ...Rh, ...t[En.JA] }
    }
  }, r = {
    order: ["localStorage"],
    lookupLocalStorage: "wasedatime-lng",
    caches: ["localStorage"]
  };
  e.use(iM).use(Xp).use(OI).init({
    resources: n,
    fallbackLng: En.EN,
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
  Dv as GoogleIcon,
  s4 as Header,
  En as Lang,
  iI as LanguageMenu,
  a4 as LoadingSpinner,
  oI as Logo,
  i4 as LogoJp,
  ZO as Modal,
  Iy as Overlay,
  GO as RowWrapper,
  p4 as SignInModal,
  sI as SmallLogo,
  o4 as SmallLogoJp,
  aI as ThemeToggle,
  jh as Wrapper,
  JO as WrapperWithBackground,
  u4 as configAuth,
  Ph as en,
  e4 as fontSize,
  l4 as getAccessToken,
  c4 as getIdToken,
  f4 as getRefreshToken,
  d4 as getUserAttr,
  XO as height,
  M4 as i18nConfig,
  t4 as isScreenType,
  n4 as isThemeType,
  Rh as ja,
  r4 as media,
  PC as signIn,
  h4 as signOut,
  Qo as sizes,
  Qm as useScrollBlock
};
