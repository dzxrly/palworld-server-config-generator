const jl = (function () {
    const t = document.createElement('link').relList;
    return t && t.supports && t.supports('modulepreload')
      ? 'modulepreload'
      : 'preload';
  })(),
  Ms = {},
  Fl = '/palworld-server-config-generator/',
  kn = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${Fl}${r}`), r in Ms)) return;
            Ms[r] = !0;
            const s = r.endsWith('.css'),
              o = s ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${o}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = s ? 'stylesheet' : jl),
              s || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = r),
              document.head.appendChild(i),
              s)
            )
              return new Promise((l, a) => {
                i.addEventListener('load', l),
                  i.addEventListener('error', () =>
                    a(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Zr(e, t) {
  const n = new Set(e.split(','));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const ce = {},
  jt = [],
  ke = () => {},
  Bl = () => !1,
  Qn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  es = (e) => e.startsWith('onUpdate:'),
  he = Object.assign,
  ts = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  ql = Object.prototype.hasOwnProperty,
  ee = (e, t) => ql.call(e, t),
  D = Array.isArray,
  Ft = (e) => Jn(e) === '[object Map]',
  ei = (e) => Jn(e) === '[object Set]',
  G = (e) => typeof e == 'function',
  pe = (e) => typeof e == 'string',
  Ut = (e) => typeof e == 'symbol',
  ue = (e) => e !== null && typeof e == 'object',
  ti = (e) => (ue(e) || G(e)) && G(e.then) && G(e.catch),
  ni = Object.prototype.toString,
  Jn = (e) => ni.call(e),
  Hl = (e) => Jn(e).slice(8, -1),
  ri = (e) => Jn(e) === '[object Object]',
  ns = (e) =>
    pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Tn = Zr(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Yn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Dl = /-(\w)/g,
  qe = Yn((e) => e.replace(Dl, (t, n) => (n ? n.toUpperCase() : ''))),
  Vl = /\B([A-Z])/g,
  Et = Yn((e) => e.replace(Vl, '-$1').toLowerCase()),
  Xn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hr = Yn((e) => (e ? `on${Xn(e)}` : '')),
  We = (e, t) => !Object.is(e, t),
  pr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  jn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  zl = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Kl = (e) => {
    const t = pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ns;
const si = () =>
  Ns ||
  (Ns =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {});
function rs(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = pe(r) ? Ql(r) : rs(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (pe(e) || ue(e)) return e;
}
const Ul = /;(?![^(]*\))/g,
  Wl = /:([^]+)/,
  Gl = /\/\*[^]*?\*\//g;
function Ql(e) {
  const t = {};
  return (
    e
      .replace(Gl, '')
      .split(Ul)
      .forEach((n) => {
        if (n) {
          const r = n.split(Wl);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ss(e) {
  let t = '';
  if (pe(e)) t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const r = ss(e[n]);
      r && (t += r + ' ');
    }
  else if (ue(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Jl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Yl = Zr(Jl);
function oi(e) {
  return !!e || e === '';
}
const Yd = (e) =>
    pe(e)
      ? e
      : e == null
      ? ''
      : D(e) || (ue(e) && (e.toString === ni || !G(e.toString)))
      ? JSON.stringify(e, ii, 2)
      : String(e),
  ii = (e, t) =>
    t && t.__v_isRef
      ? ii(e, t.value)
      : Ft(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[gr(r, o) + ' =>'] = s), n),
            {}
          ),
        }
      : ei(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => gr(n)) }
      : Ut(t)
      ? gr(t)
      : ue(t) && !D(t) && !ri(t)
      ? String(t)
      : t,
  gr = (e, t = '') => {
    var n;
    return Ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ne;
class li {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ne),
      !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ne;
      try {
        return (Ne = this), t();
      } finally {
        Ne = n;
      }
    }
  }
  on() {
    Ne = this;
  }
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Xl(e) {
  return new li(e);
}
function Zl(e, t = Ne) {
  t && t.active && t.effects.push(e);
}
function ea() {
  return Ne;
}
let _t;
class os {
  constructor(t, n, r, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Zl(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Ct();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ta(n.computed), this._dirtyLevel >= 2)) break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), St();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = ut,
      n = _t;
    try {
      return (ut = !0), (_t = this), this._runnings++, Is(this), this.fn();
    } finally {
      js(this), this._runnings--, (_t = n), (ut = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (Is(this),
      js(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function ta(e) {
  return e.value;
}
function Is(e) {
  e._trackId++, (e._depsLength = 0);
}
function js(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) ai(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function ai(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let ut = !0,
  Or = 0;
const ci = [];
function Ct() {
  ci.push(ut), (ut = !1);
}
function St() {
  const e = ci.pop();
  ut = e === void 0 ? !0 : e;
}
function is() {
  Or++;
}
function ls() {
  for (Or--; !Or && Lr.length; ) Lr.shift()();
}
function ui(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && ai(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Lr = [];
function fi(e, t, n) {
  is();
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel;
      (r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger());
    }
  di(e), ls();
}
function di(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Lr.push(t.scheduler));
}
const hi = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  $r = new WeakMap(),
  bt = Symbol(''),
  Mr = Symbol('');
function Se(e, t, n) {
  if (ut && _t) {
    let r = $r.get(e);
    r || $r.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = hi(() => r.delete(n)))), ui(_t, s);
  }
}
function Ye(e, t, n, r, s, o) {
  const i = $r.get(e);
  if (!i) return;
  let l = [];
  if (t === 'clear') l = [...i.values()];
  else if (n === 'length' && D(e)) {
    const a = Number(r);
    i.forEach((u, c) => {
      (c === 'length' || (!Ut(c) && c >= a)) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        D(e)
          ? ns(n) && l.push(i.get('length'))
          : (l.push(i.get(bt)), Ft(e) && l.push(i.get(Mr)));
        break;
      case 'delete':
        D(e) || (l.push(i.get(bt)), Ft(e) && l.push(i.get(Mr)));
        break;
      case 'set':
        Ft(e) && l.push(i.get(bt));
        break;
    }
  is();
  for (const a of l) a && fi(a, 2);
  ls();
}
const na = Zr('__proto__,__v_isRef,__isVue'),
  pi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ut)
  ),
  Fs = ra();
function ra() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = te(this);
        for (let o = 0, i = this.length; o < i; o++) Se(r, 'get', o + '');
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(te)) : s;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Ct(), is();
        const r = te(this)[t].apply(this, n);
        return ls(), St(), r;
      };
    }),
    e
  );
}
function sa(e) {
  const t = te(this);
  return Se(t, 'has', e), t.hasOwnProperty(e);
}
class gi {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, r) {
    const s = this._isReadonly,
      o = this._shallow;
    if (n === '__v_isReactive') return !s;
    if (n === '__v_isReadonly') return s;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return r === (s ? (o ? va : _i) : o ? yi : vi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = D(t);
    if (!s) {
      if (i && ee(Fs, n)) return Reflect.get(Fs, n, r);
      if (n === 'hasOwnProperty') return sa;
    }
    const l = Reflect.get(t, n, r);
    return (Ut(n) ? pi.has(n) : na(n)) || (s || Se(t, 'get', n), o)
      ? l
      : Pe(l)
      ? i && ns(n)
        ? l
        : l.value
      : ue(l)
      ? s
        ? wi(l)
        : Wt(l)
      : l;
  }
}
class mi extends gi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._shallow) {
      const a = Ht(o);
      if (
        (!Fn(r) && !Ht(r) && ((o = te(o)), (r = te(r))),
        !D(t) && Pe(o) && !Pe(r))
      )
        return a ? !1 : ((o.value = r), !0);
    }
    const i = D(t) && ns(n) ? Number(n) < t.length : ee(t, n),
      l = Reflect.set(t, n, r, s);
    return (
      t === te(s) && (i ? We(r, o) && Ye(t, 'set', n, r) : Ye(t, 'add', n, r)),
      l
    );
  }
  deleteProperty(t, n) {
    const r = ee(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Ye(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ut(n) || !pi.has(n)) && Se(t, 'has', n), r;
  }
  ownKeys(t) {
    return Se(t, 'iterate', D(t) ? 'length' : bt), Reflect.ownKeys(t);
  }
}
class oa extends gi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ia = new mi(),
  la = new oa(),
  aa = new mi(!0),
  as = (e) => e,
  Zn = (e) => Reflect.getPrototypeOf(e);
function bn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = te(e),
    o = te(t);
  n || (We(t, o) && Se(s, 'get', t), Se(s, 'get', o));
  const { has: i } = Zn(s),
    l = r ? as : n ? fs : ln;
  if (i.call(s, t)) return l(e.get(t));
  if (i.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function wn(e, t = !1) {
  const n = this.__v_raw,
    r = te(n),
    s = te(e);
  return (
    t || (We(e, s) && Se(r, 'has', e), Se(r, 'has', s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function xn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Se(te(e), 'iterate', bt), Reflect.get(e, 'size', e)
  );
}
function Bs(e) {
  e = te(e);
  const t = te(this);
  return Zn(t).has.call(t, e) || (t.add(e), Ye(t, 'add', e, e)), this;
}
function qs(e, t) {
  t = te(t);
  const n = te(this),
    { has: r, get: s } = Zn(n);
  let o = r.call(n, e);
  o || ((e = te(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? We(t, i) && Ye(n, 'set', e, t) : Ye(n, 'add', e, t), this
  );
}
function Hs(e) {
  const t = te(this),
    { has: n, get: r } = Zn(t);
  let s = n.call(t, e);
  s || ((e = te(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && Ye(t, 'delete', e, void 0), o;
}
function Ds() {
  const e = te(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ye(e, 'clear', void 0, void 0), n;
}
function En(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      l = te(i),
      a = t ? as : e ? fs : ln;
    return (
      !e && Se(l, 'iterate', bt), i.forEach((u, c) => r.call(s, a(u), a(c), o))
    );
  };
}
function Cn(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = te(s),
      i = Ft(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      a = e === 'keys' && i,
      u = s[e](...r),
      c = n ? as : t ? fs : ln;
    return (
      !t && Se(o, 'iterate', a ? Mr : bt),
      {
        next() {
          const { value: h, done: f } = u.next();
          return f
            ? { value: h, done: f }
            : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function tt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function ca() {
  const e = {
      get(o) {
        return bn(this, o);
      },
      get size() {
        return xn(this);
      },
      has: wn,
      add: Bs,
      set: qs,
      delete: Hs,
      clear: Ds,
      forEach: En(!1, !1),
    },
    t = {
      get(o) {
        return bn(this, o, !1, !0);
      },
      get size() {
        return xn(this);
      },
      has: wn,
      add: Bs,
      set: qs,
      delete: Hs,
      clear: Ds,
      forEach: En(!1, !0),
    },
    n = {
      get(o) {
        return bn(this, o, !0);
      },
      get size() {
        return xn(this, !0);
      },
      has(o) {
        return wn.call(this, o, !0);
      },
      add: tt('add'),
      set: tt('set'),
      delete: tt('delete'),
      clear: tt('clear'),
      forEach: En(!0, !1),
    },
    r = {
      get(o) {
        return bn(this, o, !0, !0);
      },
      get size() {
        return xn(this, !0);
      },
      has(o) {
        return wn.call(this, o, !0);
      },
      add: tt('add'),
      set: tt('set'),
      delete: tt('delete'),
      clear: tt('clear'),
      forEach: En(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      (e[o] = Cn(o, !1, !1)),
        (n[o] = Cn(o, !0, !1)),
        (t[o] = Cn(o, !1, !0)),
        (r[o] = Cn(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [ua, fa, da, ha] = ca();
function cs(e, t) {
  const n = t ? (e ? ha : da) : e ? fa : ua;
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(ee(n, s) && s in r ? n : r, s, o);
}
const pa = { get: cs(!1, !1) },
  ga = { get: cs(!1, !0) },
  ma = { get: cs(!0, !1) },
  vi = new WeakMap(),
  yi = new WeakMap(),
  _i = new WeakMap(),
  va = new WeakMap();
function ya(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function _a(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ya(Hl(e));
}
function Wt(e) {
  return Ht(e) ? e : us(e, !1, ia, pa, vi);
}
function bi(e) {
  return us(e, !1, aa, ga, yi);
}
function wi(e) {
  return us(e, !0, la, ma, _i);
}
function us(e, t, n, r, s) {
  if (!ue(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = _a(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function Bt(e) {
  return Ht(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
function Fn(e) {
  return !!(e && e.__v_isShallow);
}
function xi(e) {
  return Bt(e) || Ht(e);
}
function te(e) {
  const t = e && e.__v_raw;
  return t ? te(t) : e;
}
function Pt(e) {
  return jn(e, '__v_skip', !0), e;
}
const ln = (e) => (ue(e) ? Wt(e) : e),
  fs = (e) => (ue(e) ? wi(e) : e);
class Ei {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new os(
        () => t(this._value),
        () => en(this, 1),
        () => this.dep && di(this.dep)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = te(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        We(t._value, (t._value = t.effect.run())) &&
        en(t, 2),
      ds(t),
      t.effect._dirtyLevel >= 1 && en(t, 1),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function ba(e, t, n = !1) {
  let r, s;
  const o = G(e);
  return (
    o ? ((r = e), (s = ke)) : ((r = e.get), (s = e.set)),
    new Ei(r, s, o || !s, n)
  );
}
function ds(e) {
  ut &&
    _t &&
    ((e = te(e)),
    ui(
      _t,
      e.dep ||
        (e.dep = hi(() => (e.dep = void 0), e instanceof Ei ? e : void 0))
    ));
}
function en(e, t = 2, n) {
  e = te(e);
  const r = e.dep;
  r && fi(r, t);
}
function Pe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Dt(e) {
  return Ci(e, !1);
}
function wa(e) {
  return Ci(e, !0);
}
function Ci(e, t) {
  return Pe(e) ? e : new xa(e, t);
}
class xa {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : te(t)),
      (this._value = n ? t : ln(t));
  }
  get value() {
    return ds(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Fn(t) || Ht(t);
    (t = n ? t : te(t)),
      We(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ln(t)), en(this, 2));
  }
}
function wt(e) {
  return Pe(e) ? e.value : e;
}
const Ea = {
  get: (e, t, n) => wt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Pe(s) && !Pe(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Si(e) {
  return Bt(e) ? e : new Proxy(e, Ea);
}
class Ca {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: r } = t(
      () => ds(this),
      () => en(this)
    );
    (this._get = n), (this._set = r);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Sa(e) {
  return new Ca(e);
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ft(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    er(o, t, n);
  }
  return s;
}
function $e(e, t, n, r) {
  if (G(e)) {
    const o = ft(e, t, n, r);
    return (
      o &&
        ti(o) &&
        o.catch((i) => {
          er(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push($e(e[o], t, n, r));
  return s;
}
function er(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ft(a, null, 10, [e, i, l]);
      return;
    }
  }
  Pa(e, n, s, r);
}
function Pa(e, t, n, r = !0) {
  console.error(e);
}
let an = !1,
  Nr = !1;
const _e = [];
let Ue = 0;
const qt = [];
let ot = null,
  mt = 0;
const Pi = Promise.resolve();
let hs = null;
function Ri(e) {
  const t = hs || Pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ra(e) {
  let t = Ue + 1,
    n = _e.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = _e[r],
      o = cn(s);
    o < e || (o === e && s.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function ps(e) {
  (!_e.length || !_e.includes(e, an && e.allowRecurse ? Ue + 1 : Ue)) &&
    (e.id == null ? _e.push(e) : _e.splice(Ra(e.id), 0, e), ki());
}
function ki() {
  !an && !Nr && ((Nr = !0), (hs = Pi.then(Ai)));
}
function ka(e) {
  const t = _e.indexOf(e);
  t > Ue && _e.splice(t, 1);
}
function Ta(e) {
  D(e)
    ? qt.push(...e)
    : (!ot || !ot.includes(e, e.allowRecurse ? mt + 1 : mt)) && qt.push(e),
    ki();
}
function Vs(e, t, n = an ? Ue + 1 : 0) {
  for (; n < _e.length; n++) {
    const r = _e[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      _e.splice(n, 1), n--, r();
    }
  }
}
function Ti(e) {
  if (qt.length) {
    const t = [...new Set(qt)].sort((n, r) => cn(n) - cn(r));
    if (((qt.length = 0), ot)) {
      ot.push(...t);
      return;
    }
    for (ot = t, mt = 0; mt < ot.length; mt++) ot[mt]();
    (ot = null), (mt = 0);
  }
}
const cn = (e) => (e.id == null ? 1 / 0 : e.id),
  Aa = (e, t) => {
    const n = cn(e) - cn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ai(e) {
  (Nr = !1), (an = !0), _e.sort(Aa);
  const t = ke;
  try {
    for (Ue = 0; Ue < _e.length; Ue++) {
      const n = _e[Ue];
      n && n.active !== !1 && ft(n, null, 14);
    }
  } finally {
    (Ue = 0),
      (_e.length = 0),
      Ti(),
      (an = !1),
      (hs = null),
      (_e.length || qt.length) && Ai();
  }
}
function Oa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ce;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && t.slice(7);
  if (i && i in r) {
    const c = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: h, trim: f } = r[c] || ce;
    f && (s = n.map((m) => (pe(m) ? m.trim() : m))), h && (s = n.map(zl));
  }
  let l,
    a = r[(l = hr(t))] || r[(l = hr(qe(t)))];
  !a && o && (a = r[(l = hr(Et(t)))]), a && $e(a, e, 6, s);
  const u = r[l + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), $e(u, e, 6, s);
  }
}
function Oi(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!G(e)) {
    const a = (u) => {
      const c = Oi(u, t, !0);
      c && ((l = !0), he(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !o && !l
    ? (ue(e) && r.set(e, null), null)
    : (D(o) ? o.forEach((a) => (i[a] = null)) : he(i, o),
      ue(e) && r.set(e, i),
      i);
}
function tr(e, t) {
  return !e || !Qn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Et(t)) || ee(e, t));
}
let we = null,
  nr = null;
function Bn(e) {
  const t = we;
  return (we = e), (nr = (e && e.type.__scopeId) || null), t;
}
function Xd(e) {
  nr = e;
}
function Zd() {
  nr = null;
}
function La(e, t = we, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && no(-1);
    const o = Bn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Bn(o), r._d && no(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function mr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: a,
    emit: u,
    render: c,
    renderCache: h,
    data: f,
    setupState: m,
    ctx: _,
    inheritAttrs: E,
  } = e;
  let x, P;
  const I = Bn(e);
  try {
    if (n.shapeFlag & 4) {
      const V = s || r,
        F = V;
      (x = Ke(c.call(F, V, h, o, m, f, _))), (P = a);
    } else {
      const V = t;
      (x = Ke(
        V.length > 1 ? V(o, { attrs: a, slots: l, emit: u }) : V(o, null)
      )),
        (P = t.props ? a : $a(a));
    }
  } catch (V) {
    (rn.length = 0), er(V, e, 1), (x = Ce(Be));
  }
  let j = x;
  if (P && E !== !1) {
    const V = Object.keys(P),
      { shapeFlag: F } = j;
    V.length && F & 7 && (i && V.some(es) && (P = Ma(P, i)), (j = dt(j, P)));
  }
  return (
    n.dirs && ((j = dt(j)), (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (j.transition = n.transition),
    (x = j),
    Bn(I),
    x
  );
}
const $a = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Qn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ma = (e, t) => {
    const n = {};
    for (const r in e) (!es(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Na(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? zs(r, i, u) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const f = c[h];
        if (i[f] !== r[f] && !tr(u, f)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? zs(r, i, u)
        : !0
      : !!i;
  return !1;
}
function zs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !tr(n, o)) return !0;
  }
  return !1;
}
function Ia({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Li = 'components';
function ja(e, t) {
  return Ba(Li, e, !0, t) || e;
}
const Fa = Symbol.for('v-ndc');
function Ba(e, t, n = !0, r = !1) {
  const s = we || me;
  if (s) {
    const o = s.type;
    if (e === Li) {
      const l = Ic(o, !1);
      if (l && (l === t || l === qe(t) || l === Xn(qe(t)))) return o;
    }
    const i = Ks(s[e] || o[e], t) || Ks(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Ks(e, t) {
  return e && (e[t] || e[qe(t)] || e[Xn(qe(t))]);
}
const qa = (e) => e.__isSuspense;
function Ha(e, t) {
  t && t.pendingBranch
    ? D(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ta(e);
}
const Da = Symbol.for('v-scx'),
  Va = () => Xe(Da);
function za(e, t) {
  return rr(e, null, { flush: 'post' });
}
function Ka(e, t) {
  return rr(e, null, { flush: 'sync' });
}
const Sn = {};
function An(e, t, n) {
  return rr(e, t, n);
}
function rr(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: l } = ce
) {
  if (t && o) {
    const A = t;
    t = (...W) => {
      A(...W), F();
    };
  }
  const a = me,
    u = (A) => (r === !0 ? A : yt(A, r === !1 ? 1 : void 0));
  let c,
    h = !1,
    f = !1;
  if (
    (Pe(e)
      ? ((c = () => e.value), (h = Fn(e)))
      : Bt(e)
      ? ((c = () => u(e)), (h = !0))
      : D(e)
      ? ((f = !0),
        (h = e.some((A) => Bt(A) || Fn(A))),
        (c = () =>
          e.map((A) => {
            if (Pe(A)) return A.value;
            if (Bt(A)) return u(A);
            if (G(A)) return ft(A, a, 2);
          })))
      : G(e)
      ? t
        ? (c = () => ft(e, a, 2))
        : (c = () => (m && m(), $e(e, a, 3, [_])))
      : (c = ke),
    t && r)
  ) {
    const A = c;
    c = () => yt(A());
  }
  let m,
    _ = (A) => {
      m = j.onStop = () => {
        ft(A, a, 4), (m = j.onStop = void 0);
      };
    },
    E;
  if (ar)
    if (
      ((_ = ke),
      t ? n && $e(t, a, 3, [c(), f ? [] : void 0, _]) : c(),
      s === 'sync')
    ) {
      const A = Va();
      E = A.__watcherHandles || (A.__watcherHandles = []);
    } else return ke;
  let x = f ? new Array(e.length).fill(Sn) : Sn;
  const P = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const A = j.run();
        (r || h || (f ? A.some((W, N) => We(W, x[N])) : We(A, x))) &&
          (m && m(),
          $e(t, a, 3, [A, x === Sn ? void 0 : f && x[0] === Sn ? [] : x, _]),
          (x = A));
      } else j.run();
  };
  P.allowRecurse = !!t;
  let I;
  s === 'sync'
    ? (I = P)
    : s === 'post'
    ? (I = () => Ee(P, a && a.suspense))
    : ((P.pre = !0), a && (P.id = a.uid), (I = () => ps(P)));
  const j = new os(c, ke, I),
    V = ea(),
    F = () => {
      j.stop(), V && ts(V.effects, j);
    };
  return (
    t
      ? n
        ? P()
        : (x = j.run())
      : s === 'post'
      ? Ee(j.run.bind(j), a && a.suspense)
      : j.run(),
    E && E.push(F),
    F
  );
}
function Ua(e, t, n) {
  const r = this.proxy,
    s = pe(e) ? (e.includes('.') ? $i(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  G(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = mn(this),
    l = rr(s, o.bind(r), n);
  return i(), l;
}
function $i(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function yt(e, t, n = 0, r) {
  if (!ue(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), Pe(e))) yt(e.value, t, n, r);
  else if (D(e)) for (let s = 0; s < e.length; s++) yt(e[s], t, n, r);
  else if (ei(e) || Ft(e))
    e.forEach((s) => {
      yt(s, t, n, r);
    });
  else if (ri(e)) for (const s in e) yt(e[s], t, n, r);
  return e;
}
function Mi(e, t) {
  if (we === null) return e;
  const n = cr(we) || we.proxy,
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, l, a = ce] = t[s];
    o &&
      (G(o) && (o = { mounted: o, updated: o }),
      o.deep && yt(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function ht(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[r];
    a && (Ct(), $e(a, n, 8, [e.el, l, e, t]), St());
  }
}
const it = Symbol('_leaveCb'),
  Pn = Symbol('_enterCb');
function Ni() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    vs(() => {
      e.isMounted = !0;
    }),
    ys(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Te = [Function, Array],
  Ii = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Te,
    onEnter: Te,
    onAfterEnter: Te,
    onEnterCancelled: Te,
    onBeforeLeave: Te,
    onLeave: Te,
    onAfterLeave: Te,
    onLeaveCancelled: Te,
    onBeforeAppear: Te,
    onAppear: Te,
    onAfterAppear: Te,
    onAppearCancelled: Te,
  },
  Wa = {
    name: 'BaseTransition',
    props: Ii,
    setup(e, { slots: t }) {
      const n = Rt(),
        r = Ni();
      let s;
      return () => {
        const o = t.default && gs(t.default(), !0);
        if (!o || !o.length) return;
        let i = o[0];
        if (o.length > 1) {
          for (const E of o)
            if (E.type !== Be) {
              i = E;
              break;
            }
        }
        const l = te(e),
          { mode: a } = l;
        if (r.isLeaving) return vr(i);
        const u = Us(i);
        if (!u) return vr(i);
        const c = un(u, l, r, n);
        fn(u, c);
        const h = n.subTree,
          f = h && Us(h);
        let m = !1;
        const { getTransitionKey: _ } = u.type;
        if (_) {
          const E = _();
          s === void 0 ? (s = E) : E !== s && ((s = E), (m = !0));
        }
        if (f && f.type !== Be && (!vt(u, f) || m)) {
          const E = un(f, l, r, n);
          if ((fn(f, E), a === 'out-in'))
            return (
              (r.isLeaving = !0),
              (E.afterLeave = () => {
                (r.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              vr(i)
            );
          a === 'in-out' &&
            u.type !== Be &&
            (E.delayLeave = (x, P, I) => {
              const j = ji(r, f);
              (j[String(f.key)] = f),
                (x[it] = () => {
                  P(), (x[it] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = I);
            });
        }
        return i;
      };
    },
  },
  Ga = Wa;
function ji(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function un(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: m,
      onLeaveCancelled: _,
      onBeforeAppear: E,
      onAppear: x,
      onAfterAppear: P,
      onAppearCancelled: I,
    } = t,
    j = String(e.key),
    V = ji(n, e),
    F = (N, Q) => {
      N && $e(N, r, 9, Q);
    },
    A = (N, Q) => {
      const J = Q[1];
      F(N, Q),
        D(N) ? N.every((X) => X.length <= 1) && J() : N.length <= 1 && J();
    },
    W = {
      mode: o,
      persisted: i,
      beforeEnter(N) {
        let Q = l;
        if (!n.isMounted)
          if (s) Q = E || l;
          else return;
        N[it] && N[it](!0);
        const J = V[j];
        J && vt(e, J) && J.el[it] && J.el[it](), F(Q, [N]);
      },
      enter(N) {
        let Q = a,
          J = u,
          X = c;
        if (!n.isMounted)
          if (s) (Q = x || a), (J = P || u), (X = I || c);
          else return;
        let $ = !1;
        const Z = (N[Pn] = (M) => {
          $ ||
            (($ = !0),
            M ? F(X, [N]) : F(J, [N]),
            W.delayedLeave && W.delayedLeave(),
            (N[Pn] = void 0));
        });
        Q ? A(Q, [N, Z]) : Z();
      },
      leave(N, Q) {
        const J = String(e.key);
        if ((N[Pn] && N[Pn](!0), n.isUnmounting)) return Q();
        F(h, [N]);
        let X = !1;
        const $ = (N[it] = (Z) => {
          X ||
            ((X = !0),
            Q(),
            Z ? F(_, [N]) : F(m, [N]),
            (N[it] = void 0),
            V[J] === e && delete V[J]);
        });
        (V[J] = e), f ? A(f, [N, $]) : $();
      },
      clone(N) {
        return un(N, t, n, r);
      },
    };
  return W;
}
function vr(e) {
  if (sr(e)) return (e = dt(e)), (e.children = null), e;
}
function Us(e) {
  return sr(e) ? (e.children ? e.children[0] : void 0) : e;
}
function fn(e, t) {
  e.shapeFlag & 6 && e.component
    ? fn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function gs(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Oe
      ? (i.patchFlag & 128 && s++, (r = r.concat(gs(i.children, t, l))))
      : (t || i.type !== Be) && r.push(l != null ? dt(i, { key: l }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function ms(e, t) {
  return G(e) ? (() => he({ name: e.name }, t, { setup: e }))() : e;
}
const On = (e) => !!e.type.__asyncLoader,
  sr = (e) => e.type.__isKeepAlive;
function Qa(e, t) {
  Fi(e, 'a', t);
}
function Ja(e, t) {
  Fi(e, 'da', t);
}
function Fi(e, t, n = me) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((or(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      sr(s.parent.vnode) && Ya(r, t, n, s), (s = s.parent);
  }
}
function Ya(e, t, n, r) {
  const s = or(t, e, r, !0);
  _s(() => {
    ts(r[t], s);
  }, n);
}
function or(e, t, n = me, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Ct();
          const l = mn(n),
            a = $e(t, n, e, i);
          return l(), St(), a;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Ze =
    (e) =>
    (t, n = me) =>
      (!ar || e === 'sp') && or(e, (...r) => t(...r), n),
  Xa = Ze('bm'),
  vs = Ze('m'),
  Za = Ze('bu'),
  Bi = Ze('u'),
  ys = Ze('bum'),
  _s = Ze('um'),
  ec = Ze('sp'),
  tc = Ze('rtg'),
  nc = Ze('rtc');
function rc(e, t = me) {
  or('ec', e, t);
}
function eh(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (D(e) || pe(e)) {
    s = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (ue(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const u = i[l];
        s[l] = t(e[u], u, l, o && o[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
function th(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (D(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...s) => {
              const o = r.fn(...s);
              return o && (o.key = r.key), o;
            }
          : r.fn);
  }
  return e;
}
const Ir = (e) => (e ? (el(e) ? cr(e) || e.proxy : Ir(e.parent)) : null),
  tn = he(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ir(e.parent),
    $root: (e) => Ir(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), ps(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: (e) => Ua.bind(e),
  }),
  yr = (e, t) => e !== ce && !e.__isScriptSetup && ee(e, t),
  sc = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== '$') {
        const m = i[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (yr(r, t)) return (i[t] = 1), r[t];
          if (s !== ce && ee(s, t)) return (i[t] = 2), s[t];
          if ((u = e.propsOptions[0]) && ee(u, t)) return (i[t] = 3), o[t];
          if (n !== ce && ee(n, t)) return (i[t] = 4), n[t];
          jr && (i[t] = 0);
        }
      }
      const c = tn[t];
      let h, f;
      if (c) return t === '$attrs' && Se(e, 'get', t), c(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== ce && ee(n, t)) return (i[t] = 4), n[t];
      if (((f = a.config.globalProperties), ee(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return yr(s, t)
        ? ((s[t] = n), !0)
        : r !== ce && ee(r, t)
        ? ((r[t] = n), !0)
        : ee(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ce && ee(e, i)) ||
        yr(t, i) ||
        ((l = o[0]) && ee(l, i)) ||
        ee(r, i) ||
        ee(tn, i) ||
        ee(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ee(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function qn(e) {
  return D(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function nh(e, t) {
  return !e || !t ? e || t : D(e) && D(t) ? e.concat(t) : he({}, qn(e), qn(t));
}
let jr = !0;
function oc(e) {
  const t = bs(e),
    n = e.proxy,
    r = e.ctx;
  (jr = !1), t.beforeCreate && Ws(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: h,
    mounted: f,
    beforeUpdate: m,
    updated: _,
    activated: E,
    deactivated: x,
    beforeDestroy: P,
    beforeUnmount: I,
    destroyed: j,
    unmounted: V,
    render: F,
    renderTracked: A,
    renderTriggered: W,
    errorCaptured: N,
    serverPrefetch: Q,
    expose: J,
    inheritAttrs: X,
    components: $,
    directives: Z,
    filters: M,
  } = t;
  if ((u && ic(u, r, null), i))
    for (const ie in i) {
      const re = i[ie];
      G(re) && (r[ie] = re.bind(n));
    }
  if (s) {
    const ie = s.call(n, n);
    ue(ie) && (e.data = Wt(ie));
  }
  if (((jr = !0), o))
    for (const ie in o) {
      const re = o[ie],
        Ge = G(re) ? re.bind(n, n) : G(re.get) ? re.get.bind(n, n) : ke,
        et = !G(re) && G(re.set) ? re.set.bind(n) : ke,
        De = K({ get: Ge, set: et });
      Object.defineProperty(r, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (xe) => (De.value = xe),
      });
    }
  if (l) for (const ie in l) qi(l[ie], r, n, ie);
  if (a) {
    const ie = G(a) ? a.call(n) : a;
    Reflect.ownKeys(ie).forEach((re) => {
      Ln(re, ie[re]);
    });
  }
  c && Ws(c, e, 'c');
  function ae(ie, re) {
    D(re) ? re.forEach((Ge) => ie(Ge.bind(n))) : re && ie(re.bind(n));
  }
  if (
    (ae(Xa, h),
    ae(vs, f),
    ae(Za, m),
    ae(Bi, _),
    ae(Qa, E),
    ae(Ja, x),
    ae(rc, N),
    ae(nc, A),
    ae(tc, W),
    ae(ys, I),
    ae(_s, V),
    ae(ec, Q),
    D(J))
  )
    if (J.length) {
      const ie = e.exposed || (e.exposed = {});
      J.forEach((re) => {
        Object.defineProperty(ie, re, {
          get: () => n[re],
          set: (Ge) => (n[re] = Ge),
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === ke && (e.render = F),
    X != null && (e.inheritAttrs = X),
    $ && (e.components = $),
    Z && (e.directives = Z);
}
function ic(e, t, n = ke) {
  D(e) && (e = Fr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    ue(s)
      ? 'default' in s
        ? (o = Xe(s.from || r, s.default, !0))
        : (o = Xe(s.from || r))
      : (o = Xe(s)),
      Pe(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function Ws(e, t, n) {
  $e(D(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qi(e, t, n, r) {
  const s = r.includes('.') ? $i(n, r) : () => n[r];
  if (pe(e)) {
    const o = t[e];
    G(o) && An(s, o);
  } else if (G(e)) An(s, e.bind(n));
  else if (ue(e))
    if (D(e)) e.forEach((o) => qi(o, t, n, r));
    else {
      const o = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(o) && An(s, o, e);
    }
}
function bs(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
      ? (a = t)
      : ((a = {}), s.length && s.forEach((u) => Hn(a, u, i, !0)), Hn(a, t, i)),
    ue(t) && o.set(t, a),
    a
  );
}
function Hn(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Hn(e, o, n, !0), s && s.forEach((i) => Hn(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const l = lc[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const lc = {
  data: Gs,
  props: Qs,
  emits: Qs,
  methods: Xt,
  computed: Xt,
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  components: Xt,
  directives: Xt,
  watch: cc,
  provide: Gs,
  inject: ac,
};
function Gs(e, t) {
  return t
    ? e
      ? function () {
          return he(
            G(e) ? e.call(this, this) : e,
            G(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function ac(e, t) {
  return Xt(Fr(e), Fr(t));
}
function Fr(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xt(e, t) {
  return e ? he(Object.create(null), e, t) : t;
}
function Qs(e, t) {
  return e
    ? D(e) && D(t)
      ? [...new Set([...e, ...t])]
      : he(Object.create(null), qn(e), qn(t != null ? t : {}))
    : t;
}
function cc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = he(Object.create(null), e);
  for (const r in t) n[r] = be(e[r], t[r]);
  return n;
}
function Hi() {
  return {
    app: null,
    config: {
      isNativeTag: Bl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let uc = 0;
function fc(e, t) {
  return function (r, s = null) {
    G(r) || (r = he({}, r)), s != null && !ue(s) && (s = null);
    const o = Hi(),
      i = new WeakSet();
    let l = !1;
    const a = (o.app = {
      _uid: uc++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Fc,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          i.has(u) ||
            (u && G(u.install)
              ? (i.add(u), u.install(a, ...c))
              : G(u) && (i.add(u), u(a, ...c))),
          a
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), a;
      },
      component(u, c) {
        return c ? ((o.components[u] = c), a) : o.components[u];
      },
      directive(u, c) {
        return c ? ((o.directives[u] = c), a) : o.directives[u];
      },
      mount(u, c, h) {
        if (!l) {
          const f = Ce(r, s);
          return (
            (f.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            c && t ? t(f, u) : e(f, u, h),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            cr(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, c) {
        return (o.provides[u] = c), a;
      },
      runWithContext(u) {
        Dn = a;
        try {
          return u();
        } finally {
          Dn = null;
        }
      },
    });
    return a;
  };
}
let Dn = null;
function Ln(e, t) {
  if (me) {
    let n = me.provides;
    const r = me.parent && me.parent.provides;
    r === n && (n = me.provides = Object.create(r)), (n[e] = t);
  }
}
function Xe(e, t, n = !1) {
  const r = me || we;
  if (r || Dn) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Dn._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && G(t) ? t.call(r && r.proxy) : t;
  }
}
function dc(e, t, n, r = !1) {
  const s = {},
    o = {};
  jn(o, lr, 1), (e.propsDefaults = Object.create(null)), Di(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : bi(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function hc(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = te(s),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let f = c[h];
        if (tr(e.emitsOptions, f)) continue;
        const m = t[f];
        if (a)
          if (ee(o, f)) m !== o[f] && ((o[f] = m), (u = !0));
          else {
            const _ = qe(f);
            s[_] = Br(a, l, _, m, e, !1);
          }
        else m !== o[f] && ((o[f] = m), (u = !0));
      }
    }
  } else {
    Di(e, t, s, o) && (u = !0);
    let c;
    for (const h in l)
      (!t || (!ee(t, h) && ((c = Et(h)) === h || !ee(t, c)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[c] !== void 0) &&
            (s[h] = Br(a, l, h, void 0, e, !0))
          : delete s[h]);
    if (o !== l)
      for (const h in o) (!t || (!ee(t, h) && !0)) && (delete o[h], (u = !0));
  }
  u && Ye(e, 'set', '$attrs');
}
function Di(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (Tn(a)) continue;
      const u = t[a];
      let c;
      s && ee(s, (c = qe(a)))
        ? !o || !o.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : tr(e.emitsOptions, a) ||
          ((!(a in r) || u !== r[a]) && ((r[a] = u), (i = !0)));
    }
  if (o) {
    const a = te(n),
      u = l || ce;
    for (let c = 0; c < o.length; c++) {
      const h = o[c];
      n[h] = Br(s, a, h, u[h], e, !ee(u, h));
    }
  }
  return i;
}
function Br(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = ee(i, 'default');
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && G(a)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const c = mn(s);
          (r = u[n] = a.call(null, t)), c();
        }
      } else r = a;
    }
    i[0] &&
      (o && !l ? (r = !1) : i[1] && (r === '' || r === Et(n)) && (r = !0));
  }
  return r;
}
function Vi(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!G(e)) {
    const c = (h) => {
      a = !0;
      const [f, m] = Vi(h, t, !0);
      he(i, f), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a) return ue(e) && r.set(e, jt), jt;
  if (D(o))
    for (let c = 0; c < o.length; c++) {
      const h = qe(o[c]);
      Js(h) && (i[h] = ce);
    }
  else if (o)
    for (const c in o) {
      const h = qe(c);
      if (Js(h)) {
        const f = o[c],
          m = (i[h] = D(f) || G(f) ? { type: f } : he({}, f));
        if (m) {
          const _ = Zs(Boolean, m.type),
            E = Zs(String, m.type);
          (m[0] = _ > -1),
            (m[1] = E < 0 || _ < E),
            (_ > -1 || ee(m, 'default')) && l.push(h);
        }
      }
    }
  const u = [i, l];
  return ue(e) && r.set(e, u), u;
}
function Js(e) {
  return e[0] !== '$';
}
function Ys(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? 'null' : '';
}
function Xs(e, t) {
  return Ys(e) === Ys(t);
}
function Zs(e, t) {
  return D(t) ? t.findIndex((n) => Xs(n, e)) : G(t) && Xs(t, e) ? 0 : -1;
}
const zi = (e) => e[0] === '_' || e === '$stable',
  ws = (e) => (D(e) ? e.map(Ke) : [Ke(e)]),
  pc = (e, t, n) => {
    if (t._n) return t;
    const r = La((...s) => ws(t(...s)), n);
    return (r._c = !1), r;
  },
  Ki = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (zi(s)) continue;
      const o = e[s];
      if (G(o)) t[s] = pc(s, o, r);
      else if (o != null) {
        const i = ws(o);
        t[s] = () => i;
      }
    }
  },
  Ui = (e, t) => {
    const n = ws(t);
    e.slots.default = () => n;
  },
  gc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = te(t)), jn(t, '_', n)) : Ki(t, (e.slots = {}));
    } else (e.slots = {}), t && Ui(e, t);
    jn(e.slots, lr, 1);
  },
  mc = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = ce;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (he(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), Ki(t, s)),
        (i = t);
    } else t && (Ui(e, t), (i = { default: 1 }));
    if (o) for (const l in s) !zi(l) && i[l] == null && delete s[l];
  };
function qr(e, t, n, r, s = !1) {
  if (D(e)) {
    e.forEach((f, m) => qr(f, t && (D(t) ? t[m] : t), n, r, s));
    return;
  }
  if (On(r) && !s) return;
  const o = r.shapeFlag & 4 ? cr(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ce ? (l.refs = {}) : l.refs,
    h = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (pe(u)
        ? ((c[u] = null), ee(h, u) && (h[u] = null))
        : Pe(u) && (u.value = null)),
    G(a))
  )
    ft(a, l, 12, [i, c]);
  else {
    const f = pe(a),
      m = Pe(a),
      _ = e.f;
    if (f || m) {
      const E = () => {
        if (_) {
          const x = f ? (ee(h, a) ? h[a] : c[a]) : a.value;
          s
            ? D(x) && ts(x, o)
            : D(x)
            ? x.includes(o) || x.push(o)
            : f
            ? ((c[a] = [o]), ee(h, a) && (h[a] = c[a]))
            : ((a.value = [o]), e.k && (c[e.k] = a.value));
        } else
          f
            ? ((c[a] = i), ee(h, a) && (h[a] = i))
            : m && ((a.value = i), e.k && (c[e.k] = i));
      };
      s || _ ? E() : ((E.id = -1), Ee(E, n));
    }
  }
}
const Ee = Ha;
function vc(e) {
  return yc(e);
}
function yc(e, t) {
  const n = si();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: h,
      nextSibling: f,
      setScopeId: m = ke,
      insertStaticContent: _,
    } = e,
    E = (
      d,
      p,
      g,
      b = null,
      v = null,
      S = null,
      T = void 0,
      C = null,
      R = !!p.dynamicChildren
    ) => {
      if (d === p) return;
      d && !vt(d, p) && ((b = y(d)), xe(d, v, S, !0), (d = null)),
        p.patchFlag === -2 && ((R = !1), (p.dynamicChildren = null));
      const { type: w, ref: L, shapeFlag: H } = p;
      switch (w) {
        case ir:
          x(d, p, g, b);
          break;
        case Be:
          P(d, p, g, b);
          break;
        case $n:
          d == null && I(p, g, b, T);
          break;
        case Oe:
          $(d, p, g, b, v, S, T, C, R);
          break;
        default:
          H & 1
            ? F(d, p, g, b, v, S, T, C, R)
            : H & 6
            ? Z(d, p, g, b, v, S, T, C, R)
            : (H & 64 || H & 128) && w.process(d, p, g, b, v, S, T, C, R, B);
      }
      L != null && v && qr(L, d && d.ref, S, p || d, !p);
    },
    x = (d, p, g, b) => {
      if (d == null) r((p.el = l(p.children)), g, b);
      else {
        const v = (p.el = d.el);
        p.children !== d.children && u(v, p.children);
      }
    },
    P = (d, p, g, b) => {
      d == null ? r((p.el = a(p.children || '')), g, b) : (p.el = d.el);
    },
    I = (d, p, g, b) => {
      [d.el, d.anchor] = _(d.children, p, g, b, d.el, d.anchor);
    },
    j = ({ el: d, anchor: p }, g, b) => {
      let v;
      for (; d && d !== p; ) (v = f(d)), r(d, g, b), (d = v);
      r(p, g, b);
    },
    V = ({ el: d, anchor: p }) => {
      let g;
      for (; d && d !== p; ) (g = f(d)), s(d), (d = g);
      s(p);
    },
    F = (d, p, g, b, v, S, T, C, R) => {
      p.type === 'svg' ? (T = 'svg') : p.type === 'math' && (T = 'mathml'),
        d == null ? A(p, g, b, v, S, T, C, R) : Q(d, p, v, S, T, C, R);
    },
    A = (d, p, g, b, v, S, T, C) => {
      let R, w;
      const { props: L, shapeFlag: H, transition: q, dirs: U } = d;
      if (
        ((R = d.el = i(d.type, S, L && L.is, L)),
        H & 8
          ? c(R, d.children)
          : H & 16 && N(d.children, R, null, b, v, _r(d, S), T, C),
        U && ht(d, null, b, 'created'),
        W(R, d, d.scopeId, T, b),
        L)
      ) {
        for (const le in L)
          le !== 'value' &&
            !Tn(le) &&
            o(R, le, null, L[le], S, d.children, b, v, ve);
        'value' in L && o(R, 'value', null, L.value, S),
          (w = L.onVnodeBeforeMount) && ze(w, b, d);
      }
      U && ht(d, null, b, 'beforeMount');
      const Y = _c(v, q);
      Y && q.beforeEnter(R),
        r(R, p, g),
        ((w = L && L.onVnodeMounted) || Y || U) &&
          Ee(() => {
            w && ze(w, b, d), Y && q.enter(R), U && ht(d, null, b, 'mounted');
          }, v);
    },
    W = (d, p, g, b, v) => {
      if ((g && m(d, g), b)) for (let S = 0; S < b.length; S++) m(d, b[S]);
      if (v) {
        let S = v.subTree;
        if (p === S) {
          const T = v.vnode;
          W(d, T, T.scopeId, T.slotScopeIds, v.parent);
        }
      }
    },
    N = (d, p, g, b, v, S, T, C, R = 0) => {
      for (let w = R; w < d.length; w++) {
        const L = (d[w] = C ? lt(d[w]) : Ke(d[w]));
        E(null, L, p, g, b, v, S, T, C);
      }
    },
    Q = (d, p, g, b, v, S, T) => {
      const C = (p.el = d.el);
      let { patchFlag: R, dynamicChildren: w, dirs: L } = p;
      R |= d.patchFlag & 16;
      const H = d.props || ce,
        q = p.props || ce;
      let U;
      if (
        (g && pt(g, !1),
        (U = q.onVnodeBeforeUpdate) && ze(U, g, p, d),
        L && ht(p, d, g, 'beforeUpdate'),
        g && pt(g, !0),
        w
          ? J(d.dynamicChildren, w, C, g, b, _r(p, v), S)
          : T || re(d, p, C, null, g, b, _r(p, v), S, !1),
        R > 0)
      ) {
        if (R & 16) X(C, p, H, q, g, b, v);
        else if (
          (R & 2 && H.class !== q.class && o(C, 'class', null, q.class, v),
          R & 4 && o(C, 'style', H.style, q.style, v),
          R & 8)
        ) {
          const Y = p.dynamicProps;
          for (let le = 0; le < Y.length; le++) {
            const de = Y[le],
              ge = H[de],
              Me = q[de];
            (Me !== ge || de === 'value') &&
              o(C, de, ge, Me, v, d.children, g, b, ve);
          }
        }
        R & 1 && d.children !== p.children && c(C, p.children);
      } else !T && w == null && X(C, p, H, q, g, b, v);
      ((U = q.onVnodeUpdated) || L) &&
        Ee(() => {
          U && ze(U, g, p, d), L && ht(p, d, g, 'updated');
        }, b);
    },
    J = (d, p, g, b, v, S, T) => {
      for (let C = 0; C < p.length; C++) {
        const R = d[C],
          w = p[C],
          L =
            R.el && (R.type === Oe || !vt(R, w) || R.shapeFlag & 70)
              ? h(R.el)
              : g;
        E(R, w, L, null, b, v, S, T, !0);
      }
    },
    X = (d, p, g, b, v, S, T) => {
      if (g !== b) {
        if (g !== ce)
          for (const C in g)
            !Tn(C) && !(C in b) && o(d, C, g[C], null, T, p.children, v, S, ve);
        for (const C in b) {
          if (Tn(C)) continue;
          const R = b[C],
            w = g[C];
          R !== w && C !== 'value' && o(d, C, w, R, T, p.children, v, S, ve);
        }
        'value' in b && o(d, 'value', g.value, b.value, T);
      }
    },
    $ = (d, p, g, b, v, S, T, C, R) => {
      const w = (p.el = d ? d.el : l('')),
        L = (p.anchor = d ? d.anchor : l(''));
      let { patchFlag: H, dynamicChildren: q, slotScopeIds: U } = p;
      U && (C = C ? C.concat(U) : U),
        d == null
          ? (r(w, g, b), r(L, g, b), N(p.children || [], g, L, v, S, T, C, R))
          : H > 0 && H & 64 && q && d.dynamicChildren
          ? (J(d.dynamicChildren, q, g, v, S, T, C),
            (p.key != null || (v && p === v.subTree)) && xs(d, p, !0))
          : re(d, p, g, L, v, S, T, C, R);
    },
    Z = (d, p, g, b, v, S, T, C, R) => {
      (p.slotScopeIds = C),
        d == null
          ? p.shapeFlag & 512
            ? v.ctx.activate(p, g, b, T, R)
            : M(p, g, b, v, S, T, R)
          : ne(d, p, R);
    },
    M = (d, p, g, b, v, S, T) => {
      const C = (d.component = Oc(d, b, v));
      if ((sr(d) && (C.ctx.renderer = B), Lc(C), C.asyncDep)) {
        if ((v && v.registerDep(C, ae), !d.el)) {
          const R = (C.subTree = Ce(Be));
          P(null, R, p, g);
        }
      } else ae(C, d, p, g, v, S, T);
    },
    ne = (d, p, g) => {
      const b = (p.component = d.component);
      if (Na(d, p, g))
        if (b.asyncDep && !b.asyncResolved) {
          ie(b, p, g);
          return;
        } else (b.next = p), ka(b.update), (b.effect.dirty = !0), b.update();
      else (p.el = d.el), (b.vnode = p);
    },
    ae = (d, p, g, b, v, S, T) => {
      const C = () => {
          if (d.isMounted) {
            let { next: L, bu: H, u: q, parent: U, vnode: Y } = d;
            {
              const At = Wi(d);
              if (At) {
                L && ((L.el = Y.el), ie(d, L, T)),
                  At.asyncDep.then(() => {
                    d.isUnmounted || C();
                  });
                return;
              }
            }
            let le = L,
              de;
            pt(d, !1),
              L ? ((L.el = Y.el), ie(d, L, T)) : (L = Y),
              H && pr(H),
              (de = L.props && L.props.onVnodeBeforeUpdate) && ze(de, U, L, Y),
              pt(d, !0);
            const ge = mr(d),
              Me = d.subTree;
            (d.subTree = ge),
              E(Me, ge, h(Me.el), y(Me), d, v, S),
              (L.el = ge.el),
              le === null && Ia(d, ge.el),
              q && Ee(q, v),
              (de = L.props && L.props.onVnodeUpdated) &&
                Ee(() => ze(de, U, L, Y), v);
          } else {
            let L;
            const { el: H, props: q } = p,
              { bm: U, m: Y, parent: le } = d,
              de = On(p);
            if (
              (pt(d, !1),
              U && pr(U),
              !de && (L = q && q.onVnodeBeforeMount) && ze(L, le, p),
              pt(d, !0),
              H && fe)
            ) {
              const ge = () => {
                (d.subTree = mr(d)), fe(H, d.subTree, d, v, null);
              };
              de
                ? p.type.__asyncLoader().then(() => !d.isUnmounted && ge())
                : ge();
            } else {
              const ge = (d.subTree = mr(d));
              E(null, ge, g, b, d, v, S), (p.el = ge.el);
            }
            if ((Y && Ee(Y, v), !de && (L = q && q.onVnodeMounted))) {
              const ge = p;
              Ee(() => ze(L, le, ge), v);
            }
            (p.shapeFlag & 256 ||
              (le && On(le.vnode) && le.vnode.shapeFlag & 256)) &&
              d.a &&
              Ee(d.a, v),
              (d.isMounted = !0),
              (p = g = b = null);
          }
        },
        R = (d.effect = new os(C, ke, () => ps(w), d.scope)),
        w = (d.update = () => {
          R.dirty && R.run();
        });
      (w.id = d.uid), pt(d, !0), w();
    },
    ie = (d, p, g) => {
      p.component = d;
      const b = d.vnode.props;
      (d.vnode = p),
        (d.next = null),
        hc(d, p.props, b, g),
        mc(d, p.children, g),
        Ct(),
        Vs(d),
        St();
    },
    re = (d, p, g, b, v, S, T, C, R = !1) => {
      const w = d && d.children,
        L = d ? d.shapeFlag : 0,
        H = p.children,
        { patchFlag: q, shapeFlag: U } = p;
      if (q > 0) {
        if (q & 128) {
          et(w, H, g, b, v, S, T, C, R);
          return;
        } else if (q & 256) {
          Ge(w, H, g, b, v, S, T, C, R);
          return;
        }
      }
      U & 8
        ? (L & 16 && ve(w, v, S), H !== w && c(g, H))
        : L & 16
        ? U & 16
          ? et(w, H, g, b, v, S, T, C, R)
          : ve(w, v, S, !0)
        : (L & 8 && c(g, ''), U & 16 && N(H, g, b, v, S, T, C, R));
    },
    Ge = (d, p, g, b, v, S, T, C, R) => {
      (d = d || jt), (p = p || jt);
      const w = d.length,
        L = p.length,
        H = Math.min(w, L);
      let q;
      for (q = 0; q < H; q++) {
        const U = (p[q] = R ? lt(p[q]) : Ke(p[q]));
        E(d[q], U, g, null, v, S, T, C, R);
      }
      w > L ? ve(d, v, S, !0, !1, H) : N(p, g, b, v, S, T, C, R, H);
    },
    et = (d, p, g, b, v, S, T, C, R) => {
      let w = 0;
      const L = p.length;
      let H = d.length - 1,
        q = L - 1;
      for (; w <= H && w <= q; ) {
        const U = d[w],
          Y = (p[w] = R ? lt(p[w]) : Ke(p[w]));
        if (vt(U, Y)) E(U, Y, g, null, v, S, T, C, R);
        else break;
        w++;
      }
      for (; w <= H && w <= q; ) {
        const U = d[H],
          Y = (p[q] = R ? lt(p[q]) : Ke(p[q]));
        if (vt(U, Y)) E(U, Y, g, null, v, S, T, C, R);
        else break;
        H--, q--;
      }
      if (w > H) {
        if (w <= q) {
          const U = q + 1,
            Y = U < L ? p[U].el : b;
          for (; w <= q; )
            E(null, (p[w] = R ? lt(p[w]) : Ke(p[w])), g, Y, v, S, T, C, R), w++;
        }
      } else if (w > q) for (; w <= H; ) xe(d[w], v, S, !0), w++;
      else {
        const U = w,
          Y = w,
          le = new Map();
        for (w = Y; w <= q; w++) {
          const Re = (p[w] = R ? lt(p[w]) : Ke(p[w]));
          Re.key != null && le.set(Re.key, w);
        }
        let de,
          ge = 0;
        const Me = q - Y + 1;
        let At = !1,
          Os = 0;
        const Gt = new Array(Me);
        for (w = 0; w < Me; w++) Gt[w] = 0;
        for (w = U; w <= H; w++) {
          const Re = d[w];
          if (ge >= Me) {
            xe(Re, v, S, !0);
            continue;
          }
          let Ve;
          if (Re.key != null) Ve = le.get(Re.key);
          else
            for (de = Y; de <= q; de++)
              if (Gt[de - Y] === 0 && vt(Re, p[de])) {
                Ve = de;
                break;
              }
          Ve === void 0
            ? xe(Re, v, S, !0)
            : ((Gt[Ve - Y] = w + 1),
              Ve >= Os ? (Os = Ve) : (At = !0),
              E(Re, p[Ve], g, null, v, S, T, C, R),
              ge++);
        }
        const Ls = At ? bc(Gt) : jt;
        for (de = Ls.length - 1, w = Me - 1; w >= 0; w--) {
          const Re = Y + w,
            Ve = p[Re],
            $s = Re + 1 < L ? p[Re + 1].el : b;
          Gt[w] === 0
            ? E(null, Ve, g, $s, v, S, T, C, R)
            : At && (de < 0 || w !== Ls[de] ? De(Ve, g, $s, 2) : de--);
        }
      }
    },
    De = (d, p, g, b, v = null) => {
      const { el: S, type: T, transition: C, children: R, shapeFlag: w } = d;
      if (w & 6) {
        De(d.component.subTree, p, g, b);
        return;
      }
      if (w & 128) {
        d.suspense.move(p, g, b);
        return;
      }
      if (w & 64) {
        T.move(d, p, g, B);
        return;
      }
      if (T === Oe) {
        r(S, p, g);
        for (let H = 0; H < R.length; H++) De(R[H], p, g, b);
        r(d.anchor, p, g);
        return;
      }
      if (T === $n) {
        j(d, p, g);
        return;
      }
      if (b !== 2 && w & 1 && C)
        if (b === 0) C.beforeEnter(S), r(S, p, g), Ee(() => C.enter(S), v);
        else {
          const { leave: H, delayLeave: q, afterLeave: U } = C,
            Y = () => r(S, p, g),
            le = () => {
              H(S, () => {
                Y(), U && U();
              });
            };
          q ? q(S, Y, le) : le();
        }
      else r(S, p, g);
    },
    xe = (d, p, g, b = !1, v = !1) => {
      const {
        type: S,
        props: T,
        ref: C,
        children: R,
        dynamicChildren: w,
        shapeFlag: L,
        patchFlag: H,
        dirs: q,
      } = d;
      if ((C != null && qr(C, null, g, d, !0), L & 256)) {
        p.ctx.deactivate(d);
        return;
      }
      const U = L & 1 && q,
        Y = !On(d);
      let le;
      if ((Y && (le = T && T.onVnodeBeforeUnmount) && ze(le, p, d), L & 6))
        _n(d.component, g, b);
      else {
        if (L & 128) {
          d.suspense.unmount(g, b);
          return;
        }
        U && ht(d, null, p, 'beforeUnmount'),
          L & 64
            ? d.type.remove(d, p, g, v, B, b)
            : w && (S !== Oe || (H > 0 && H & 64))
            ? ve(w, p, g, !1, !0)
            : ((S === Oe && H & 384) || (!v && L & 16)) && ve(R, p, g),
          b && kt(d);
      }
      ((Y && (le = T && T.onVnodeUnmounted)) || U) &&
        Ee(() => {
          le && ze(le, p, d), U && ht(d, null, p, 'unmounted');
        }, g);
    },
    kt = (d) => {
      const { type: p, el: g, anchor: b, transition: v } = d;
      if (p === Oe) {
        Tt(g, b);
        return;
      }
      if (p === $n) {
        V(d);
        return;
      }
      const S = () => {
        s(g), v && !v.persisted && v.afterLeave && v.afterLeave();
      };
      if (d.shapeFlag & 1 && v && !v.persisted) {
        const { leave: T, delayLeave: C } = v,
          R = () => T(g, S);
        C ? C(d.el, S, R) : R();
      } else S();
    },
    Tt = (d, p) => {
      let g;
      for (; d !== p; ) (g = f(d)), s(d), (d = g);
      s(p);
    },
    _n = (d, p, g) => {
      const { bum: b, scope: v, update: S, subTree: T, um: C } = d;
      b && pr(b),
        v.stop(),
        S && ((S.active = !1), xe(T, d, p, g)),
        C && Ee(C, p),
        Ee(() => {
          d.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    ve = (d, p, g, b = !1, v = !1, S = 0) => {
      for (let T = S; T < d.length; T++) xe(d[T], p, g, b, v);
    },
    y = (d) =>
      d.shapeFlag & 6
        ? y(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : f(d.anchor || d.el);
  let O = !1;
  const k = (d, p, g) => {
      d == null
        ? p._vnode && xe(p._vnode, null, null, !0)
        : E(p._vnode || null, d, p, null, null, null, g),
        O || ((O = !0), Vs(), Ti(), (O = !1)),
        (p._vnode = d);
    },
    B = {
      p: E,
      um: xe,
      m: De,
      r: kt,
      mt: M,
      mc: N,
      pc: re,
      pbc: J,
      n: y,
      o: e,
    };
  let se, fe;
  return (
    t && ([se, fe] = t(B)), { render: k, hydrate: se, createApp: fc(k, se) }
  );
}
function _r({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n;
}
function pt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function _c(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function xs(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (D(r) && D(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = lt(s[o])), (l.el = i.el)),
        n || xs(i, l)),
        l.type === ir && (l.el = i.el);
    }
}
function bc(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l);
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function Wi(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Wi(t);
}
const wc = (e) => e.__isTeleport,
  nn = (e) => e && (e.disabled || e.disabled === ''),
  eo = (e) => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  to = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  Hr = (e, t) => {
    const n = e && e.to;
    return pe(n) ? (t ? t(n) : null) : n;
  },
  xc = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, r, s, o, i, l, a, u) {
      const {
          mc: c,
          pc: h,
          pbc: f,
          o: { insert: m, querySelector: _, createText: E, createComment: x },
        } = u,
        P = nn(t.props);
      let { shapeFlag: I, children: j, dynamicChildren: V } = t;
      if (e == null) {
        const F = (t.el = E('')),
          A = (t.anchor = E(''));
        m(F, n, r), m(A, n, r);
        const W = (t.target = Hr(t.props, _)),
          N = (t.targetAnchor = E(''));
        W &&
          (m(N, W),
          i === 'svg' || eo(W)
            ? (i = 'svg')
            : (i === 'mathml' || to(W)) && (i = 'mathml'));
        const Q = (J, X) => {
          I & 16 && c(j, J, X, s, o, i, l, a);
        };
        P ? Q(n, A) : W && Q(W, N);
      } else {
        t.el = e.el;
        const F = (t.anchor = e.anchor),
          A = (t.target = e.target),
          W = (t.targetAnchor = e.targetAnchor),
          N = nn(e.props),
          Q = N ? n : A,
          J = N ? F : W;
        if (
          (i === 'svg' || eo(A)
            ? (i = 'svg')
            : (i === 'mathml' || to(A)) && (i = 'mathml'),
          V
            ? (f(e.dynamicChildren, V, Q, s, o, i, l), xs(e, t, !0))
            : a || h(e, t, Q, J, s, o, i, l, !1),
          P)
        )
          N
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Rn(t, n, F, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const X = (t.target = Hr(t.props, _));
          X && Rn(t, X, null, u, 0);
        } else N && Rn(t, A, W, u, 1);
      }
      Gi(t);
    },
    remove(e, t, n, r, { um: s, o: { remove: o } }, i) {
      const {
        shapeFlag: l,
        children: a,
        anchor: u,
        targetAnchor: c,
        target: h,
        props: f,
      } = e;
      if ((h && o(c), i && o(u), l & 16)) {
        const m = i || !nn(f);
        for (let _ = 0; _ < a.length; _++) {
          const E = a[_];
          s(E, t, n, m, !!E.dynamicChildren);
        }
      }
    },
    move: Rn,
    hydrate: Ec,
  };
function Rn(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: u, props: c } = e,
    h = o === 2;
  if ((h && r(i, t, n), (!h || nn(c)) && a & 16))
    for (let f = 0; f < u.length; f++) s(u[f], t, n, 2);
  h && r(l, t, n);
}
function Ec(
  e,
  t,
  n,
  r,
  s,
  o,
  { o: { nextSibling: i, parentNode: l, querySelector: a } },
  u
) {
  const c = (t.target = Hr(t.props, a));
  if (c) {
    const h = c._lpa || c.firstChild;
    if (t.shapeFlag & 16)
      if (nn(t.props))
        (t.anchor = u(i(e), t, l(e), n, r, s, o)), (t.targetAnchor = h);
      else {
        t.anchor = i(e);
        let f = h;
        for (; f; )
          if (
            ((f = i(f)), f && f.nodeType === 8 && f.data === 'teleport anchor')
          ) {
            (t.targetAnchor = f),
              (c._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        u(h, t, c, n, r, s, o);
      }
    Gi(t);
  }
  return t.anchor && i(t.anchor);
}
const rh = xc;
function Gi(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Oe = Symbol.for('v-fgt'),
  ir = Symbol.for('v-txt'),
  Be = Symbol.for('v-cmt'),
  $n = Symbol.for('v-stc'),
  rn = [];
let Fe = null;
function Qi(e = !1) {
  rn.push((Fe = e ? null : []));
}
function Cc() {
  rn.pop(), (Fe = rn[rn.length - 1] || null);
}
let dn = 1;
function no(e) {
  dn += e;
}
function Ji(e) {
  return (
    (e.dynamicChildren = dn > 0 ? Fe || jt : null),
    Cc(),
    dn > 0 && Fe && Fe.push(e),
    e
  );
}
function sh(e, t, n, r, s, o) {
  return Ji(Zi(e, t, n, r, s, o, !0));
}
function Yi(e, t, n, r, s) {
  return Ji(Ce(e, t, n, r, s, !0));
}
function Dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lr = '__vInternal',
  Xi = ({ key: e }) => (e != null ? e : null),
  Mn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? pe(e) || Pe(e) || G(e)
        ? { i: we, r: e, k: t, f: !!n }
        : e
      : null
  );
function Zi(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Oe ? 0 : 1,
  i = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xi(t),
    ref: t && Mn(t),
    scopeId: nr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: we,
  };
  return (
    l
      ? (Es(a, n), o & 128 && e.normalize(a))
      : n && (a.shapeFlag |= pe(n) ? 8 : 16),
    dn > 0 &&
      !i &&
      Fe &&
      (a.patchFlag > 0 || o & 6) &&
      a.patchFlag !== 32 &&
      Fe.push(a),
    a
  );
}
const Ce = Sc;
function Sc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Fa) && (e = Be), Dr(e))) {
    const l = dt(e, t, !0);
    return (
      n && Es(l, n),
      dn > 0 &&
        !o &&
        Fe &&
        (l.shapeFlag & 6 ? (Fe[Fe.indexOf(e)] = l) : Fe.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((jc(e) && (e = e.__vccOpts), t)) {
    t = Pc(t);
    let { class: l, style: a } = t;
    l && !pe(l) && (t.class = ss(l)),
      ue(a) && (xi(a) && !D(a) && (a = he({}, a)), (t.style = rs(a)));
  }
  const i = pe(e) ? 1 : qa(e) ? 128 : wc(e) ? 64 : ue(e) ? 4 : G(e) ? 2 : 0;
  return Zi(e, t, n, r, s, i, o, !0);
}
function Pc(e) {
  return e ? (xi(e) || lr in e ? he({}, e) : e) : null;
}
function dt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    l = t ? kc(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Xi(l),
    ref:
      t && t.ref ? (n && s ? (D(s) ? s.concat(Mn(t)) : [s, Mn(t)]) : Mn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dt(e.ssContent),
    ssFallback: e.ssFallback && dt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Rc(e = ' ', t = 0) {
  return Ce(ir, null, e, t);
}
function oh(e = '', t = !1) {
  return t ? (Qi(), Yi(Be, null, e)) : Ce(Be, null, e);
}
function Ke(e) {
  return e == null || typeof e == 'boolean'
    ? Ce(Be)
    : D(e)
    ? Ce(Oe, null, e.slice())
    : typeof e == 'object'
    ? lt(e)
    : Ce(ir, null, String(e));
}
function lt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dt(e);
}
function Es(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (D(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Es(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(lr in t)
        ? (t._ctx = we)
        : s === 3 &&
          we &&
          (we.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    G(t)
      ? ((t = { default: t, _ctx: we }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Rc(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function kc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = ss([t.class, r.class]));
      else if (s === 'style') t.style = rs([t.style, r.style]);
      else if (Qn(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(D(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function ze(e, t, n, r = null) {
  $e(e, t, 7, [n, r]);
}
const Tc = Hi();
let Ac = 0;
function Oc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Tc,
    o = {
      uid: Ac++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new li(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Vi(r, s),
      emitsOptions: Oi(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ce,
      inheritAttrs: r.inheritAttrs,
      ctx: ce,
      data: ce,
      props: ce,
      attrs: ce,
      slots: ce,
      refs: ce,
      setupState: ce,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Oa.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let me = null;
const Rt = () => me || we;
let Vn, Vr;
{
  const e = si(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Vn = t('__VUE_INSTANCE_SETTERS__', (n) => (me = n))),
    (Vr = t('__VUE_SSR_SETTERS__', (n) => (ar = n)));
}
const mn = (e) => {
    const t = me;
    return (
      Vn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Vn(t);
      }
    );
  },
  ro = () => {
    me && me.scope.off(), Vn(null);
  };
function el(e) {
  return e.vnode.shapeFlag & 4;
}
let ar = !1;
function Lc(e, t = !1) {
  t && Vr(t);
  const { props: n, children: r } = e.vnode,
    s = el(e);
  dc(e, n, s, t), gc(e, r);
  const o = s ? $c(e, t) : void 0;
  return t && Vr(!1), o;
}
function $c(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Pt(new Proxy(e.ctx, sc)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Nc(e) : null),
      o = mn(e);
    Ct();
    const i = ft(r, e, 0, [e.props, s]);
    if ((St(), o(), ti(i))) {
      if ((i.then(ro, ro), t))
        return i
          .then((l) => {
            so(e, l, t);
          })
          .catch((l) => {
            er(l, e, 0);
          });
      e.asyncDep = i;
    } else so(e, i, t);
  } else tl(e, t);
}
function so(e, t, n) {
  G(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ue(t) && (e.setupState = Si(t)),
    tl(e, n);
}
let oo;
function tl(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && oo && !r.render) {
      const s = r.template || bs(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          u = he(he({ isCustomElement: o, delimiters: l }, i), a);
        r.render = oo(s, u);
      }
    }
    e.render = r.render || ke;
  }
  {
    const s = mn(e);
    Ct();
    try {
      oc(e);
    } finally {
      St(), s();
    }
  }
}
function Mc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Se(e, 'get', '$attrs'), t[n];
      },
    }))
  );
}
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Mc(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function cr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Si(Pt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in tn) return tn[n](e);
        },
        has(t, n) {
          return n in t || n in tn;
        },
      }))
    );
}
function Ic(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function jc(e) {
  return G(e) && '__vccOpts' in e;
}
const K = (e, t) => ba(e, t, ar);
function ih(e, t, n = ce) {
  const r = Rt(),
    s = qe(t),
    o = Et(t),
    i = Sa((a, u) => {
      let c;
      return (
        Ka(() => {
          const h = e[t];
          We(c, h) && ((c = h), u());
        }),
        {
          get() {
            return a(), n.get ? n.get(c) : c;
          },
          set(h) {
            const f = r.vnode.props;
            !(
              f &&
              (t in f || s in f || o in f) &&
              (`onUpdate:${t}` in f ||
                `onUpdate:${s}` in f ||
                `onUpdate:${o}` in f)
            ) &&
              We(h, c) &&
              ((c = h), u()),
              r.emit(`update:${t}`, n.set ? n.set(h) : h);
          },
        }
      );
    }),
    l = t === 'modelValue' ? 'modelModifiers' : `${t}Modifiers`;
  return (
    (i[Symbol.iterator] = () => {
      let a = 0;
      return {
        next() {
          return a < 2
            ? { value: a++ ? e[l] || {} : i, done: !1 }
            : { done: !0 };
        },
      };
    }),
    i
  );
}
function z(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ue(t) && !D(t)
      ? Dr(t)
        ? Ce(e, null, [t])
        : Ce(e, t)
      : Ce(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Dr(n) && (n = [n]),
      Ce(e, t, n));
}
const Fc = '3.4.15';
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Bc = 'http://www.w3.org/2000/svg',
  qc = 'http://www.w3.org/1998/Math/MathML',
  at = typeof document != 'undefined' ? document : null,
  io = at && at.createElement('template'),
  Hc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? at.createElementNS(Bc, e)
          : t === 'mathml'
          ? at.createElementNS(qc, e)
          : at.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      );
    },
    createText: (e) => at.createTextNode(e),
    createComment: (e) => at.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => at.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        io.innerHTML =
          r === 'svg'
            ? `<svg>${e}</svg>`
            : r === 'mathml'
            ? `<math>${e}</math>`
            : e;
        const l = io.content;
        if (r === 'svg' || r === 'mathml') {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  nt = 'transition',
  Qt = 'animation',
  Vt = Symbol('_vtc'),
  Cs = (e, { slots: t }) => z(Ga, rl(e), t);
Cs.displayName = 'Transition';
const nl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Dc = (Cs.props = he({}, Ii, nl)),
  gt = (e, t = []) => {
    D(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  lo = (e) => (e ? (D(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function rl(e) {
  const t = {};
  for (const $ in e) $ in nl || (t[$] = e[$]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = o,
      appearActiveClass: u = i,
      appearToClass: c = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    _ = Vc(s),
    E = _ && _[0],
    x = _ && _[1],
    {
      onBeforeEnter: P,
      onEnter: I,
      onEnterCancelled: j,
      onLeave: V,
      onLeaveCancelled: F,
      onBeforeAppear: A = P,
      onAppear: W = I,
      onAppearCancelled: N = j,
    } = t,
    Q = ($, Z, M) => {
      st($, Z ? c : l), st($, Z ? u : i), M && M();
    },
    J = ($, Z) => {
      ($._isLeaving = !1), st($, h), st($, m), st($, f), Z && Z();
    },
    X = ($) => (Z, M) => {
      const ne = $ ? W : I,
        ae = () => Q(Z, $, M);
      gt(ne, [Z, ae]),
        ao(() => {
          st(Z, $ ? a : o), Je(Z, $ ? c : l), lo(ne) || co(Z, r, E, ae);
        });
    };
  return he(t, {
    onBeforeEnter($) {
      gt(P, [$]), Je($, o), Je($, i);
    },
    onBeforeAppear($) {
      gt(A, [$]), Je($, a), Je($, u);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave($, Z) {
      $._isLeaving = !0;
      const M = () => J($, Z);
      Je($, h),
        ol(),
        Je($, f),
        ao(() => {
          !$._isLeaving || (st($, h), Je($, m), lo(V) || co($, r, x, M));
        }),
        gt(V, [$, M]);
    },
    onEnterCancelled($) {
      Q($, !1), gt(j, [$]);
    },
    onAppearCancelled($) {
      Q($, !0), gt(N, [$]);
    },
    onLeaveCancelled($) {
      J($), gt(F, [$]);
    },
  });
}
function Vc(e) {
  if (e == null) return null;
  if (ue(e)) return [br(e.enter), br(e.leave)];
  {
    const t = br(e);
    return [t, t];
  }
}
function br(e) {
  return Kl(e);
}
function Je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Vt] || (e[Vt] = new Set())).add(t);
}
function st(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Vt];
  n && (n.delete(t), n.size || (e[Vt] = void 0));
}
function ao(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let zc = 0;
function co(e, t, n, r) {
  const s = (e._endId = ++zc),
    o = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: a } = sl(e, t);
  if (!i) return r();
  const u = i + 'end';
  let c = 0;
  const h = () => {
      e.removeEventListener(u, f), o();
    },
    f = (m) => {
      m.target === e && ++c >= a && h();
    };
  setTimeout(() => {
    c < a && h();
  }, l + 1),
    e.addEventListener(u, f);
}
function sl(e, t) {
  const n = window.getComputedStyle(e),
    r = (_) => (n[_] || '').split(', '),
    s = r(`${nt}Delay`),
    o = r(`${nt}Duration`),
    i = uo(s, o),
    l = r(`${Qt}Delay`),
    a = r(`${Qt}Duration`),
    u = uo(l, a);
  let c = null,
    h = 0,
    f = 0;
  t === nt
    ? i > 0 && ((c = nt), (h = i), (f = o.length))
    : t === Qt
    ? u > 0 && ((c = Qt), (h = u), (f = a.length))
    : ((h = Math.max(i, u)),
      (c = h > 0 ? (i > u ? nt : Qt) : null),
      (f = c ? (c === nt ? o.length : a.length) : 0));
  const m =
    c === nt && /\b(transform|all)(,|$)/.test(r(`${nt}Property`).toString());
  return { type: c, timeout: h, propCount: f, hasTransform: m };
}
function uo(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => fo(n) + fo(e[r])));
}
function fo(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function ol() {
  return document.body.offsetHeight;
}
function Kc(e, t, n) {
  const r = e[Vt];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
const Uc = Symbol('_vod'),
  il = Symbol('');
function lh(e) {
  const t = Rt();
  if (!t) return;
  const n = (t.ut = (s = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
      ).forEach((o) => Kr(o, s));
    }),
    r = () => {
      const s = e(t.proxy);
      zr(t.subTree, s), n(s);
    };
  za(r),
    vs(() => {
      const s = new MutationObserver(r);
      s.observe(t.subTree.el.parentNode, { childList: !0 }),
        _s(() => s.disconnect());
    });
}
function zr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          zr(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Kr(e.el, t);
  else if (e.type === Oe) e.children.forEach((n) => zr(n, t));
  else if (e.type === $n) {
    let { el: n, anchor: r } = e;
    for (; n && (Kr(n, t), n !== r); ) n = n.nextSibling;
  }
}
function Kr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = '';
    for (const s in t) n.setProperty(`--${s}`, t[s]), (r += `--${s}: ${t[s]};`);
    n[il] = r;
  }
}
function Wc(e, t, n) {
  const r = e.style,
    s = r.display,
    o = pe(n);
  if (n && !o) {
    if (t && !pe(t)) for (const i in t) n[i] == null && Ur(r, i, '');
    for (const i in n) Ur(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[il];
      i && (n += ';' + i), (r.cssText = n);
    }
  } else t && e.removeAttribute('style');
  Uc in e && (r.display = s);
}
const ho = /\s*!important$/;
function Ur(e, t, n) {
  if (D(n)) n.forEach((r) => Ur(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = Gc(e, t);
    ho.test(n)
      ? e.setProperty(Et(r), n.replace(ho, ''), 'important')
      : (e[r] = n);
  }
}
const po = ['Webkit', 'Moz', 'ms'],
  wr = {};
function Gc(e, t) {
  const n = wr[t];
  if (n) return n;
  let r = qe(t);
  if (r !== 'filter' && r in e) return (wr[t] = r);
  r = Xn(r);
  for (let s = 0; s < po.length; s++) {
    const o = po[s] + r;
    if (o in e) return (wr[t] = o);
  }
  return t;
}
const go = 'http://www.w3.org/1999/xlink';
function Qc(e, t, n, r, s) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(go, t.slice(6, t.length))
      : e.setAttributeNS(go, t, n);
  else {
    const o = Yl(t);
    n == null || (o && !oi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n);
  }
}
function Jc(e, t, n, r, s, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && i(r, s, o), (e[t] = n == null ? '' : n);
    return;
  }
  const l = e.tagName;
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = n;
    const u = l === 'OPTION' ? e.getAttribute('value') : e.value,
      c = n == null ? '' : n;
    u !== c && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === '' || n == null) {
    const u = typeof e[t];
    u === 'boolean'
      ? (n = oi(n))
      : n == null && u === 'string'
      ? ((n = ''), (a = !0))
      : u === 'number' && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function Yc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Xc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const mo = Symbol('_vei');
function Zc(e, t, n, r, s = null) {
  const o = e[mo] || (e[mo] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = eu(t);
    if (r) {
      const u = (o[t] = ru(r, s));
      Yc(e, l, u, a);
    } else i && (Xc(e, l, i, a), (o[t] = void 0));
  }
}
const vo = /(?:Once|Passive|Capture)$/;
function eu(e) {
  let t;
  if (vo.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(vo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : Et(e.slice(2)), t];
}
let xr = 0;
const tu = Promise.resolve(),
  nu = () => xr || (tu.then(() => (xr = 0)), (xr = Date.now()));
function ru(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    $e(su(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = nu()), n;
}
function su(e, t) {
  if (D(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const yo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ou = (e, t, n, r, s, o, i, l, a) => {
    const u = s === 'svg';
    t === 'class'
      ? Kc(e, r, u)
      : t === 'style'
      ? Wc(e, n, r)
      : Qn(t)
      ? es(t) || Zc(e, t, n, r, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : iu(e, t, r, u)
        )
      ? Jc(e, t, r, o, i, l, a)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        Qc(e, t, r, u));
  };
function iu(e, t, n, r) {
  if (r)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && yo(t) && G(n))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const s = e.tagName;
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE')
      return !1;
  }
  return yo(t) && pe(n) ? !1 : t in e;
}
const ll = new WeakMap(),
  al = new WeakMap(),
  zn = Symbol('_moveCb'),
  _o = Symbol('_enterCb'),
  cl = {
    name: 'TransitionGroup',
    props: he({}, Dc, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Rt(),
        r = Ni();
      let s, o;
      return (
        Bi(() => {
          if (!s.length) return;
          const i = e.moveClass || `${e.name || 'v'}-move`;
          if (!du(s[0].el, n.vnode.el, i)) return;
          s.forEach(cu), s.forEach(uu);
          const l = s.filter(fu);
          ol(),
            l.forEach((a) => {
              const u = a.el,
                c = u.style;
              Je(u, i),
                (c.transform = c.webkitTransform = c.transitionDuration = '');
              const h = (u[zn] = (f) => {
                (f && f.target !== u) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (u.removeEventListener('transitionend', h),
                    (u[zn] = null),
                    st(u, i)));
              });
              u.addEventListener('transitionend', h);
            });
        }),
        () => {
          const i = te(e),
            l = rl(i);
          let a = i.tag || Oe;
          (s = o), (o = t.default ? gs(t.default()) : []);
          for (let u = 0; u < o.length; u++) {
            const c = o[u];
            c.key != null && fn(c, un(c, l, r, n));
          }
          if (s)
            for (let u = 0; u < s.length; u++) {
              const c = s[u];
              fn(c, un(c, l, r, n)), ll.set(c, c.el.getBoundingClientRect());
            }
          return Ce(a, null, o);
        }
      );
    },
  },
  lu = (e) => delete e.mode;
cl.props;
const au = cl;
function cu(e) {
  const t = e.el;
  t[zn] && t[zn](), t[_o] && t[_o]();
}
function uu(e) {
  al.set(e, e.el.getBoundingClientRect());
}
function fu(e) {
  const t = ll.get(e),
    n = al.get(e),
    r = t.left - n.left,
    s = t.top - n.top;
  if (r || s) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${r}px,${s}px)`),
      (o.transitionDuration = '0s'),
      e
    );
  }
}
function du(e, t, n) {
  const r = e.cloneNode(),
    s = e[Vt];
  s &&
    s.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
    }),
    n.split(/\s+/).forEach((l) => l && r.classList.add(l)),
    (r.style.display = 'none');
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: i } = sl(r);
  return o.removeChild(r), i;
}
const hu = he({ patchProp: ou }, Hc);
let bo;
function pu() {
  return bo || (bo = vc(hu));
}
const ul = (...e) => {
  const t = pu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = mu(r);
      if (!s) return;
      const o = t._component;
      !G(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = '');
      const i = n(s, !1, gu(s));
      return (
        s instanceof Element &&
          (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
        i
      );
    }),
    t
  );
};
function gu(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function mu(e) {
  return pe(e) ? document.querySelector(e) : e;
}
function Ss(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const xt = Dt(!1);
let ur;
function vu(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[2] || n[4] || '0',
    versionNumber: n[4] || n[2] || '0',
    platform: t[0] || '',
  };
}
function yu(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const fl = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function _u(e) {
  (ur = { is: { ...e } }), delete e.mac, delete e.desktop;
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone';
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 });
}
function bu(e) {
  const t = e.toLowerCase(),
    n = yu(t),
    r = vu(t, n),
    s = {};
  r.browser &&
    ((s[r.browser] = !0),
    (s.version = r.version),
    (s.versionNumber = parseInt(r.versionNumber, 10))),
    r.platform && (s[r.platform] = !0);
  const o =
    s.android ||
    s.ios ||
    s.bb ||
    s.blackberry ||
    s.ipad ||
    s.iphone ||
    s.ipod ||
    s.kindle ||
    s.playbook ||
    s.silk ||
    s['windows phone'];
  return (
    o === !0 || t.indexOf('mobile') > -1
      ? ((s.mobile = !0),
        s.edga || s.edgios
          ? ((s.edge = !0), (r.browser = 'edge'))
          : s.crios
          ? ((s.chrome = !0), (r.browser = 'chrome'))
          : s.fxios && ((s.firefox = !0), (r.browser = 'firefox')))
      : (s.desktop = !0),
    (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s['windows phone'] && ((s.winphone = !0), delete s['windows phone']),
    (s.chrome ||
      s.opr ||
      s.safari ||
      s.vivaldi ||
      (s.mobile === !0 && s.ios !== !0 && o !== !0)) &&
      (s.webkit = !0),
    s.edg && ((r.browser = 'edgechromium'), (s.edgeChromium = !0)),
    ((s.safari && s.blackberry) || s.bb) &&
      ((r.browser = 'blackberry'), (s.blackberry = !0)),
    s.safari && s.playbook && ((r.browser = 'playbook'), (s.playbook = !0)),
    s.opr && ((r.browser = 'opera'), (s.opera = !0)),
    s.safari && s.android && ((r.browser = 'android'), (s.android = !0)),
    s.safari && s.kindle && ((r.browser = 'kindle'), (s.kindle = !0)),
    s.safari && s.silk && ((r.browser = 'silk'), (s.silk = !0)),
    s.vivaldi && ((r.browser = 'vivaldi'), (s.vivaldi = !0)),
    (s.name = r.browser),
    (s.platform = r.platform),
    t.indexOf('electron') > -1
      ? (s.electron = !0)
      : document.location.href.indexOf('-extension://') > -1
      ? (s.bex = !0)
      : (window.Capacitor !== void 0
          ? ((s.capacitor = !0),
            (s.nativeMobile = !0),
            (s.nativeMobileWrapper = 'capacitor'))
          : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
            ((s.cordova = !0),
            (s.nativeMobile = !0),
            (s.nativeMobileWrapper = 'cordova')),
        fl === !0 &&
          s.mac === !0 &&
          ((s.desktop === !0 && s.safari === !0) ||
            (s.nativeMobile === !0 &&
              s.android !== !0 &&
              s.ios !== !0 &&
              s.ipad !== !0)) &&
          _u(s)),
    s
  );
}
const wo = navigator.userAgent || navigator.vendor || window.opera,
  wu = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Le = {
    userAgent: wo,
    is: bu(wo),
    has: { touch: fl },
    within: { iframe: window.self !== window.top },
  },
  Wr = {
    install(e) {
      const { $q: t } = e;
      xt.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Le), (xt.value = !1), (ur = void 0);
          }),
          (t.platform = Wt(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  Ss(Le.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Le.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf('apple'),
    xt.value === !0 ? Object.assign(Wr, Le, ur, wu) : Object.assign(Wr, Le);
}
var fr = (e, t) => {
  const n = Wt(e);
  for (const r in e)
    Ss(
      t,
      r,
      () => n[r],
      (s) => {
        n[r] = s;
      }
    );
  return t;
};
const vn = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(vn, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener('qtest', null, e),
    window.removeEventListener('qtest', null, e);
} catch {}
function hn() {}
function xu(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function ah(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML'))
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function dl(e) {
  e.stopPropagation();
}
function Eu(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Ot(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Cu(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((s) => {
      s[0].addEventListener(s[1], e[s[2]], vn[s[3]]);
    });
}
function Su(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], vn[r[3]]);
    }),
    (e[n] = void 0));
}
function Pu(e, t = 250, n) {
  let r = null;
  function s() {
    const o = arguments,
      i = () => {
        (r = null), n !== !0 && e.apply(this, o);
      };
    r !== null ? clearTimeout(r) : n === !0 && e.apply(this, o),
      (r = setTimeout(i, t));
  }
  return (
    (s.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    s
  );
}
const Er = ['sm', 'md', 'lg', 'xl'],
  { passive: xo } = vn;
var Ru = fr(
  {
    width: 0,
    height: 0,
    name: 'xs',
    sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
    lt: { sm: !0, md: !0, lg: !0, xl: !0 },
    gt: { xs: !1, sm: !1, md: !1, lg: !1 },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
  },
  {
    setSizes: hn,
    setDebounce: hn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0));
        return;
      }
      const { visualViewport: n } = window,
        r = n || window,
        s = document.scrollingElement || document.documentElement,
        o =
          n === void 0 || Le.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, s.clientWidth),
                Math.max(window.innerHeight, s.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - s.clientWidth,
                n.height * n.scale + window.innerHeight - s.clientHeight,
              ],
        i = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
      this.__update = (h) => {
        const [f, m] = o();
        if ((m !== this.height && (this.height = m), f !== this.width))
          this.width = f;
        else if (h !== !0) return;
        let _ = this.sizes;
        (this.gt.xs = f >= _.sm),
          (this.gt.sm = f >= _.md),
          (this.gt.md = f >= _.lg),
          (this.gt.lg = f >= _.xl),
          (this.lt.sm = f < _.sm),
          (this.lt.md = f < _.md),
          (this.lt.lg = f < _.lg),
          (this.lt.xl = f < _.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (_ =
            (this.xs === !0 && 'xs') ||
            (this.sm === !0 && 'sm') ||
            (this.md === !0 && 'md') ||
            (this.lg === !0 && 'lg') ||
            'xl'),
          _ !== this.name &&
            (i === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${_}`)),
            (this.name = _));
      };
      let l,
        a = {},
        u = 16;
      (this.setSizes = (h) => {
        Er.forEach((f) => {
          h[f] !== void 0 && (a[f] = h[f]);
        });
      }),
        (this.setDebounce = (h) => {
          u = h;
        });
      const c = () => {
        const h = getComputedStyle(document.body);
        h.getPropertyValue('--q-size-sm') &&
          Er.forEach((f) => {
            this.sizes[f] = parseInt(h.getPropertyValue(`--q-size-${f}`), 10);
          }),
          (this.setSizes = (f) => {
            Er.forEach((m) => {
              f[m] && (this.sizes[m] = f[m]);
            }),
              this.__update(!0);
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && r.removeEventListener('resize', l, xo),
              (l = f > 0 ? Pu(this.__update, f) : this.__update),
              r.addEventListener('resize', l, xo);
          }),
          this.setDebounce(u),
          Object.keys(a).length !== 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          i === !0 &&
            this.name === 'xs' &&
            document.body.classList.add('screen--xs');
      };
      xt.value === !0 ? t.push(c) : c();
    },
  }
);
const ye = fr(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (ye.mode = e),
          e === 'auto'
            ? (ye.__media === void 0 &&
                ((ye.__media = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                )),
                (ye.__updateMedia = () => {
                  ye.set('auto');
                }),
                ye.__media.addListener(ye.__updateMedia)),
              (e = ye.__media.matches))
            : ye.__media !== void 0 &&
              (ye.__media.removeListener(ye.__updateMedia),
              (ye.__media = void 0)),
          (ye.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? 'light' : 'dark'}`
          ),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        ye.set(ye.isActive === !1);
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: r } = e.config;
        if (((e.dark = this), this.__installed === !0 && r === void 0)) return;
        this.isActive = r === !0;
        const s = r !== void 0 ? r : !1;
        if (xt.value === !0) {
          const o = (l) => {
              this.__fromSSR = l;
            },
            i = this.set;
          (this.set = o),
            o(s),
            t.push(() => {
              (this.set = i), this.set(this.__fromSSR);
            });
        } else this.set(s);
      },
    }
  ),
  hl = () => !0;
function ku(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function Tu(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function Au(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return hl;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(ku).map(Tu)),
    () => t.includes(window.location.hash)
  );
}
var Ou = {
    __history: [],
    add: hn,
    remove: hn,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Le.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        (r !== void 0 && r.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (i) => {
        i.condition === void 0 && (i.condition = hl), this.__history.push(i);
      }),
        (this.remove = (i) => {
          const l = this.__history.indexOf(i);
          l >= 0 && this.__history.splice(l, 1);
        });
      const s = Au(Object.assign({ backButtonExit: !0 }, r)),
        o = () => {
          if (this.__history.length) {
            const i = this.__history[this.__history.length - 1];
            i.condition() === !0 && (this.__history.pop(), i.handler());
          } else s() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', o, !1);
          })
        : window.Capacitor.Plugins.App.addListener('backButton', o);
    },
  },
  Eo = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
      expand: (e) => (e ? `Expand "${e}"` : 'Expand'),
      collapse: (e) => (e ? `Collapse "${e}"` : 'Collapse'),
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
      ),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1
          ? '1 record selected.'
          : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: {
      noNodes: 'No nodes available',
      noResults: 'No matching nodes found',
    },
  };
function Co() {
  const e =
    Array.isArray(navigator.languages) === !0 &&
    navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join('-');
}
const Ie = fr(
  { __langPack: {} },
  {
    getLocale: Co,
    set(e = Eo, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: Co };
      {
        if (
          ((n.set = Ie.set),
          Ie.__langConfig === void 0 || Ie.__langConfig.noHtmlAttrs !== !0)
        ) {
          const r = document.documentElement;
          r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'),
            r.setAttribute('lang', n.isoName);
        }
        Object.assign(Ie.__langPack, n),
          (Ie.props = n),
          (Ie.isoName = n.isoName),
          (Ie.nativeName = n.nativeName);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      (e.lang = Ie.__langPack),
        (Ie.__langConfig = e.config.lang),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || Eo);
    },
  }
);
function Lu(e, t, n = document.body) {
  if (typeof e != 'string')
    throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let pl = !1;
function $u(e) {
  pl = e.isComposing === !0;
}
function Mu(e) {
  return (
    pl === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function Gr(e, t) {
  return Mu(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function gl(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function Nu({ is: e, has: t, within: n }, r) {
  const s = [
    e.desktop === !0 ? 'desktop' : 'mobile',
    `${t.touch === !1 ? 'no-' : ''}touch`,
  ];
  if (e.mobile === !0) {
    const o = gl(e);
    o !== void 0 && s.push('platform-' + o);
  }
  if (e.nativeMobile === !0) {
    const o = e.nativeMobileWrapper;
    s.push(o),
      s.push('native-mobile'),
      e.ios === !0 &&
        (r[o] === void 0 || r[o].iosStatusBarPadding !== !1) &&
        s.push('q-ios-padding');
  } else e.electron === !0 ? s.push('electron') : e.bex === !0 && s.push('bex');
  return n.iframe === !0 && s.push('within-iframe'), s;
}
function Iu() {
  const { is: e } = Le,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (ur !== void 0)
    n.delete('desktop'), n.add('platform-ios'), n.add('mobile');
  else if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'),
        n.delete('platform-ios'),
        n.delete('platform-android'),
        n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile');
      const s = gl(e);
      s !== void 0
        ? (n.add(`platform-${s}`),
          n.delete(`platform-${s === 'ios' ? 'android' : 'ios'}`))
        : (n.delete('platform-ios'), n.delete('platform-android'));
    }
  }
  Le.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    Le.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function ju(e) {
  for (const t in e) Lu(t, e[t]);
}
var Fu = {
    install(e) {
      if (this.__installed !== !0) {
        if (xt.value === !0) Iu();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && ju(t.config.brand);
          const n = Nu(Le, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Le.is.ios === !0 && document.body.addEventListener('touchstart', hn),
          window.addEventListener('keydown', $u, !0);
      }
    },
  },
  Bu = {
    name: 'material-icons',
    type: {
      positive: 'check_circle',
      negative: 'warning',
      info: 'info',
      warning: 'priority_high',
    },
    arrow: {
      up: 'arrow_upward',
      right: 'arrow_forward',
      down: 'arrow_downward',
      left: 'arrow_back',
      dropdown: 'arrow_drop_down',
    },
    chevron: { left: 'chevron_left', right: 'chevron_right' },
    colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
    pullToRefresh: { icon: 'refresh' },
    carousel: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      navigationIcon: 'lens',
    },
    chip: { remove: 'cancel', selected: 'check' },
    datetime: {
      arrowLeft: 'chevron_left',
      arrowRight: 'chevron_right',
      now: 'access_time',
      today: 'today',
    },
    editor: {
      bold: 'format_bold',
      italic: 'format_italic',
      strikethrough: 'strikethrough_s',
      underline: 'format_underlined',
      unorderedList: 'format_list_bulleted',
      orderedList: 'format_list_numbered',
      subscript: 'vertical_align_bottom',
      superscript: 'vertical_align_top',
      hyperlink: 'link',
      toggleFullscreen: 'fullscreen',
      quote: 'format_quote',
      left: 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify',
      print: 'print',
      outdent: 'format_indent_decrease',
      indent: 'format_indent_increase',
      removeFormat: 'format_clear',
      formatting: 'text_format',
      fontSize: 'format_size',
      align: 'format_align_left',
      hr: 'remove',
      undo: 'undo',
      redo: 'redo',
      heading: 'format_size',
      code: 'code',
      size: 'format_size',
      font: 'font_download',
      viewSource: 'code',
    },
    expansionItem: {
      icon: 'keyboard_arrow_down',
      denseIcon: 'arrow_drop_down',
    },
    fab: { icon: 'add', activeIcon: 'close' },
    field: { clear: 'cancel', error: 'error' },
    pagination: {
      first: 'first_page',
      prev: 'keyboard_arrow_left',
      next: 'keyboard_arrow_right',
      last: 'last_page',
    },
    rating: { icon: 'grade' },
    stepper: { done: 'check', active: 'edit', error: 'warning' },
    tabs: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
    },
    table: {
      arrowUp: 'arrow_upward',
      warning: 'warning',
      firstPage: 'first_page',
      prevPage: 'chevron_left',
      nextPage: 'chevron_right',
      lastPage: 'last_page',
    },
    tree: { icon: 'play_arrow' },
    uploader: {
      done: 'done',
      clear: 'clear',
      add: 'add_box',
      upload: 'cloud_upload',
      removeQueue: 'clear_all',
      removeUploaded: 'done_all',
    },
  };
const Kn = fr(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = { ...e, rtl: e.rtl === !0 };
        (n.set = Kn.set), Object.assign(Kn.__icons, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          Ss(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || Bu);
      },
    }
  ),
  qu = '_q_',
  ch = '_q_l_',
  uh = '_q_pc_',
  fh = '_q_fo_',
  dh = () => {},
  Un = {};
let ml = !1;
function Hu() {
  ml = !0;
}
function Cr(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == 'object' &&
    typeof t == 'object'
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (Cr(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      let o = e.entries();
      for (r = o.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = o.next();
      }
      for (o = e.entries(), r = o.next(); r.done !== !0; ) {
        if (Cr(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = o.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      const o = e.entries();
      for (r = o.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = o.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const s = Object.keys(e).filter((o) => e[o] !== void 0);
    if (
      ((n = s.length),
      n !== Object.keys(t).filter((o) => t[o] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const o = s[r];
      if (Cr(e[o], t[o]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pn(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
function hh(e) {
  return typeof e == 'number' && isFinite(e);
}
const So = [Wr, Fu, ye, Ru, Ou, Ie, Kn];
function Du(e, t) {
  const n = ul(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...s } = t._context;
  return Object.assign(n._context, s), n;
}
function Po(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function Vu(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(qu, n.$q),
    Po(n, So),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        pn(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        pn(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      Po(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && So.includes(r) === !1
        )
      ),
    xt.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
var zu = function (e, t = {}) {
    const n = { version: '2.14.2' };
    ml === !1
      ? (t.config !== void 0 && Object.assign(Un, t.config),
        (n.config = { ...Un }),
        Hu())
      : (n.config = t.config || {}),
      Vu(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  Ku = { version: '2.14.2', install: zu, lang: Ie, iconSet: Kn };
var Uu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t) n[r] = s;
  return n;
};
const Wu = {};
function Gu(e, t) {
  const n = ja('router-view');
  return Qi(), Yi(n);
}
var Qu = Uu(Wu, [['render', Gu]]);
function ph(e) {
  return e;
}
var Ju = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Yu = Symbol();
var Ro;
(function (e) {
  (e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function');
})(Ro || (Ro = {}));
function Xu() {
  const e = Xl(!0),
    t = e.run(() => Dt({}));
  let n = [],
    r = [];
  const s = Pt({
    install(o) {
      (s._a = o),
        o.provide(Yu, s),
        (o.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(o) {
      return !this._a && !Ju ? r.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
var Sr = () => Xu();
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Nt = typeof window != 'undefined';
function Zu(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const oe = Object.assign;
function Pr(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = He(s) ? s.map(e) : e(s);
  }
  return n;
}
const sn = () => {},
  He = Array.isArray,
  ef = /\/$/,
  tf = (e) => e.replace(ef, '');
function Rr(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = '';
  const l = t.indexOf('#');
  let a = t.indexOf('?');
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (o = t.slice(a + 1, l > -1 ? l : t.length)),
      (s = e(o))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = of(r != null ? r : t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: i }
  );
}
function nf(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function ko(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function rf(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    zt(t.matched[r], n.matched[s]) &&
    vl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function zt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!sf(e[n], t[n])) return !1;
  return !0;
}
function sf(e, t) {
  return He(e) ? To(e, t) : He(t) ? To(t, e) : e === t;
}
function To(e, t) {
  return He(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function of(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1];
  (s === '..' || s === '.') && r.push('');
  let o = n.length - 1,
    i,
    l;
  for (i = 0; i < r.length; i++)
    if (((l = r[i]), l !== '.'))
      if (l === '..') o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join('/') +
    '/' +
    r.slice(i - (i === r.length ? 1 : 0)).join('/')
  );
}
var gn;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(gn || (gn = {}));
var on;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(on || (on = {}));
function lf(e) {
  if (!e)
    if (Nt) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), tf(e);
}
const af = /^[^#]+#/;
function cf(e, t) {
  return e.replace(af, '#') + t;
}
function uf(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const dr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function ff(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = uf(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Ao(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qr = new Map();
function df(e, t) {
  Qr.set(e, t);
}
function hf(e) {
  const t = Qr.get(e);
  return Qr.delete(e), t;
}
let pf = () => location.protocol + '//' + location.host;
function yl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = s.slice(l);
    return a[0] !== '/' && (a = '/' + a), ko(a, '');
  }
  return ko(n, e) + r + s;
}
function gf(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const l = ({ state: f }) => {
    const m = yl(e, location),
      _ = n.value,
      E = t.value;
    let x = 0;
    if (f) {
      if (((n.value = m), (t.value = f), i && i === _)) {
        i = null;
        return;
      }
      x = E ? f.position - E.position : 0;
    } else r(m);
    s.forEach((P) => {
      P(n.value, _, {
        delta: x,
        type: gn.pop,
        direction: x ? (x > 0 ? on.forward : on.back) : on.unknown,
      });
    });
  };
  function a() {
    i = n.value;
  }
  function u(f) {
    s.push(f);
    const m = () => {
      const _ = s.indexOf(f);
      _ > -1 && s.splice(_, 1);
    };
    return o.push(m), m;
  }
  function c() {
    const { history: f } = window;
    !f.state || f.replaceState(oe({}, f.state, { scroll: dr() }), '');
  }
  function h() {
    for (const f of o) f();
    (o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: h }
  );
}
function Oo(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? dr() : null,
  };
}
function mf(e) {
  const { history: t, location: n } = window,
    r = { value: yl(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(a, u, c) {
    const h = e.indexOf('#'),
      f =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + a
          : pf() + e + a;
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', f), (s.value = u);
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](f);
    }
  }
  function i(a, u) {
    const c = oe({}, t.state, Oo(s.value.back, a, s.value.forward, !0), u, {
      position: s.value.position,
    });
    o(a, c, !0), (r.value = a);
  }
  function l(a, u) {
    const c = oe({}, s.value, t.state, { forward: a, scroll: dr() });
    o(c.current, c, !0);
    const h = oe({}, Oo(r.value, a, null), { position: c.position + 1 }, u);
    o(a, h, !1), (r.value = a);
  }
  return { location: r, state: s, push: l, replace: i };
}
function vf(e) {
  e = lf(e);
  const t = mf(e),
    n = gf(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = oe(
    { location: '', base: e, go: r, createHref: cf.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function yf(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    vf(e)
  );
}
function _f(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function _l(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const rt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  bl = Symbol('');
var Lo;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Lo || (Lo = {}));
function Kt(e, t) {
  return oe(new Error(), { type: e, [bl]: !0 }, t);
}
function Qe(e, t) {
  return e instanceof Error && bl in e && (t == null || !!(e.type & t));
}
const $o = '[^/]+?',
  bf = { sensitive: !1, strict: !1, start: !0, end: !0 },
  wf = /[.+*?^${}()[\]/\\]/g;
function xf(e, t) {
  const n = oe({}, bf, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (s += '/');
    for (let h = 0; h < u.length; h++) {
      const f = u[h];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        h || (s += '/'), (s += f.value.replace(wf, '\\$&')), (m += 40);
      else if (f.type === 1) {
        const { value: _, repeatable: E, optional: x, regexp: P } = f;
        o.push({ name: _, repeatable: E, optional: x });
        const I = P || $o;
        if (I !== $o) {
          m += 10;
          try {
            new RegExp(`(${I})`);
          } catch (V) {
            throw new Error(
              `Invalid custom RegExp for param "${_}" (${I}): ` + V.message
            );
          }
        }
        let j = E ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
        h || (j = x && u.length < 2 ? `(?:/${j})` : '/' + j),
          x && (j += '?'),
          (s += j),
          (m += 20),
          x && (m += -8),
          E && (m += -20),
          I === '.*' && (m += -50);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)');
  const i = new RegExp(s, n.sensitive ? '' : 'i');
  function l(u) {
    const c = u.match(i),
      h = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const m = c[f] || '',
        _ = o[f - 1];
      h[_.name] = m && _.repeatable ? m.split('/') : m;
    }
    return h;
  }
  function a(u) {
    let c = '',
      h = !1;
    for (const f of e) {
      (!h || !c.endsWith('/')) && (c += '/'), (h = !1);
      for (const m of f)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: _, repeatable: E, optional: x } = m,
            P = _ in u ? u[_] : '';
          if (He(P) && !E)
            throw new Error(
              `Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`
            );
          const I = He(P) ? P.join('/') : P;
          if (!I)
            if (x)
              f.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${_}"`);
          c += I;
        }
    }
    return c || '/';
  }
  return { re: i, score: r, keys: o, parse: l, stringify: a };
}
function Ef(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Cf(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = Ef(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Mo(r)) return 1;
    if (Mo(s)) return -1;
  }
  return s.length - r.length;
}
function Mo(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Sf = { type: 0, value: '' },
  Pf = /[a-zA-Z0-9_]/;
function Rf(e) {
  if (!e) return [[]];
  if (e === '/') return [[Sf]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let l = 0,
    a,
    u = '',
    c = '';
  function h() {
    !u ||
      (n === 0
        ? o.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (a === '*' || a === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === '*' || a === '+',
            optional: a === '*' || a === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function f() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === '/' ? (u && h(), i()) : a === ':' ? (h(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = r);
        break;
      case 1:
        a === '('
          ? (n = 2)
          : Pf.test(a)
          ? f()
          : (h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--);
        break;
      case 2:
        a === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a);
        break;
      case 3:
        h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), i(), s;
}
function kf(e, t, n) {
  const r = xf(Rf(e.path), n),
    s = oe(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Tf(e, t) {
  const n = [],
    r = new Map();
  t = jo({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(c) {
    return r.get(c);
  }
  function o(c, h, f) {
    const m = !f,
      _ = Af(c);
    _.aliasOf = f && f.record;
    const E = jo(t, c),
      x = [_];
    if ('alias' in c) {
      const j = typeof c.alias == 'string' ? [c.alias] : c.alias;
      for (const V of j)
        x.push(
          oe({}, _, {
            components: f ? f.record.components : _.components,
            path: V,
            aliasOf: f ? f.record : _,
          })
        );
    }
    let P, I;
    for (const j of x) {
      const { path: V } = j;
      if (h && V[0] !== '/') {
        const F = h.record.path,
          A = F[F.length - 1] === '/' ? '' : '/';
        j.path = h.record.path + (V && A + V);
      }
      if (
        ((P = kf(j, h, E)),
        f
          ? f.alias.push(P)
          : ((I = I || P),
            I !== P && I.alias.push(P),
            m && c.name && !Io(P) && i(c.name)),
        _.children)
      ) {
        const F = _.children;
        for (let A = 0; A < F.length; A++) o(F[A], P, f && f.children[A]);
      }
      (f = f || P),
        ((P.record.components && Object.keys(P.record.components).length) ||
          P.record.name ||
          P.record.redirect) &&
          a(P);
    }
    return I
      ? () => {
          i(I);
        }
      : sn;
  }
  function i(c) {
    if (_l(c)) {
      const h = r.get(c);
      h &&
        (r.delete(c),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(c);
      h > -1 &&
        (n.splice(h, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(i),
        c.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(c) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Cf(c, n[h]) >= 0 &&
      (c.record.path !== n[h].record.path || !wl(c, n[h]));

    )
      h++;
    n.splice(h, 0, c), c.record.name && !Io(c) && r.set(c.record.name, c);
  }
  function u(c, h) {
    let f,
      m = {},
      _,
      E;
    if ('name' in c && c.name) {
      if (((f = r.get(c.name)), !f)) throw Kt(1, { location: c });
      (E = f.record.name),
        (m = oe(
          No(
            h.params,
            f.keys.filter((I) => !I.optional).map((I) => I.name)
          ),
          c.params &&
            No(
              c.params,
              f.keys.map((I) => I.name)
            )
        )),
        (_ = f.stringify(m));
    } else if ('path' in c)
      (_ = c.path),
        (f = n.find((I) => I.re.test(_))),
        f && ((m = f.parse(_)), (E = f.record.name));
    else {
      if (((f = h.name ? r.get(h.name) : n.find((I) => I.re.test(h.path))), !f))
        throw Kt(1, { location: c, currentLocation: h });
      (E = f.record.name),
        (m = oe({}, h.params, c.params)),
        (_ = f.stringify(m));
    }
    const x = [];
    let P = f;
    for (; P; ) x.unshift(P.record), (P = P.parent);
    return { name: E, path: _, params: m, matched: x, meta: Lf(x) };
  }
  return (
    e.forEach((c) => o(c)),
    {
      addRoute: o,
      resolve: u,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: s,
    }
  );
}
function No(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Af(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Of(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Of(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function Io(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Lf(e) {
  return e.reduce((t, n) => oe(t, n.meta), {});
}
function jo(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function wl(e, t) {
  return t.children.some((n) => n === e || wl(e, n));
}
const xl = /#/g,
  $f = /&/g,
  Mf = /\//g,
  Nf = /=/g,
  If = /\?/g,
  El = /\+/g,
  jf = /%5B/g,
  Ff = /%5D/g,
  Cl = /%5E/g,
  Bf = /%60/g,
  Sl = /%7B/g,
  qf = /%7C/g,
  Pl = /%7D/g,
  Hf = /%20/g;
function Ps(e) {
  return encodeURI('' + e)
    .replace(qf, '|')
    .replace(jf, '[')
    .replace(Ff, ']');
}
function Df(e) {
  return Ps(e).replace(Sl, '{').replace(Pl, '}').replace(Cl, '^');
}
function Jr(e) {
  return Ps(e)
    .replace(El, '%2B')
    .replace(Hf, '+')
    .replace(xl, '%23')
    .replace($f, '%26')
    .replace(Bf, '`')
    .replace(Sl, '{')
    .replace(Pl, '}')
    .replace(Cl, '^');
}
function Vf(e) {
  return Jr(e).replace(Nf, '%3D');
}
function zf(e) {
  return Ps(e).replace(xl, '%23').replace(If, '%3F');
}
function Kf(e) {
  return e == null ? '' : zf(e).replace(Mf, '%2F');
}
function Wn(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function Uf(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(El, ' '),
      i = o.indexOf('='),
      l = Wn(i < 0 ? o : o.slice(0, i)),
      a = i < 0 ? null : Wn(o.slice(i + 1));
    if (l in t) {
      let u = t[l];
      He(u) || (u = t[l] = [u]), u.push(a);
    } else t[l] = a;
  }
  return t;
}
function Fo(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = Vf(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (He(r) ? r.map((o) => o && Jr(o)) : [r && Jr(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function Wf(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = He(r)
        ? r.map((s) => (s == null ? null : '' + s))
        : r == null
        ? r
        : '' + r);
  }
  return t;
}
const Gf = Symbol(''),
  Bo = Symbol(''),
  Rs = Symbol(''),
  Rl = Symbol(''),
  Yr = Symbol('');
function Jt() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function ct(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((i, l) => {
      const a = (h) => {
          h === !1
            ? l(Kt(4, { from: n, to: t }))
            : h instanceof Error
            ? l(h)
            : _f(h)
            ? l(Kt(2, { from: t, to: h }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof h == 'function' &&
                o.push(h),
              i());
        },
        u = e.call(r && r.instances[s], t, n, a);
      let c = Promise.resolve(u);
      e.length < 3 && (c = c.then(a)), c.catch((h) => l(h));
    });
}
function kr(e, t, n, r) {
  const s = [];
  for (const o of e)
    for (const i in o.components) {
      let l = o.components[i];
      if (!(t !== 'beforeRouteEnter' && !o.instances[i]))
        if (Qf(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(ct(u, n, r, o, i));
        } else {
          let a = l();
          s.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const c = Zu(u) ? u.default : u;
              o.components[i] = c;
              const f = (c.__vccOpts || c)[t];
              return f && ct(f, n, r, o, i)();
            })
          );
        }
    }
  return s;
}
function Qf(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function qo(e) {
  const t = Xe(Rs),
    n = Xe(Rl),
    r = K(() => t.resolve(wt(e.to))),
    s = K(() => {
      const { matched: a } = r.value,
        { length: u } = a,
        c = a[u - 1],
        h = n.matched;
      if (!c || !h.length) return -1;
      const f = h.findIndex(zt.bind(null, c));
      if (f > -1) return f;
      const m = Ho(a[u - 2]);
      return u > 1 && Ho(c) === m && h[h.length - 1].path !== m
        ? h.findIndex(zt.bind(null, a[u - 2]))
        : f;
    }),
    o = K(() => s.value > -1 && Zf(n.params, r.value.params)),
    i = K(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        vl(n.params, r.value.params)
    );
  function l(a = {}) {
    return Xf(a)
      ? t[wt(e.replace) ? 'replace' : 'push'](wt(e.to)).catch(sn)
      : Promise.resolve();
  }
  return {
    route: r,
    href: K(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: l,
  };
}
const Jf = ms({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: qo,
    setup(e, { slots: t }) {
      const n = Wt(qo(e)),
        { options: r } = Xe(Rs),
        s = K(() => ({
          [Do(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Do(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : z(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            );
      };
    },
  }),
  Yf = Jf;
function Xf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Zf(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!He(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function Ho(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Do = (e, t, n) => (e != null ? e : t != null ? t : n),
  ed = ms({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Xe(Yr),
        s = K(() => e.route || r.value),
        o = Xe(Bo, 0),
        i = K(() => {
          let u = wt(o);
          const { matched: c } = s.value;
          let h;
          for (; (h = c[u]) && !h.components; ) u++;
          return u;
        }),
        l = K(() => s.value.matched[i.value]);
      Ln(
        Bo,
        K(() => i.value + 1)
      ),
        Ln(Gf, l),
        Ln(Yr, s);
      const a = Dt();
      return (
        An(
          () => [a.value, l.value, e.name],
          ([u, c, h], [f, m, _]) => {
            c &&
              ((c.instances[h] = u),
              m &&
                m !== c &&
                u &&
                u === f &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              u &&
                c &&
                (!m || !zt(c, m) || !f) &&
                (c.enterCallbacks[h] || []).forEach((E) => E(u));
          },
          { flush: 'post' }
        ),
        () => {
          const u = s.value,
            c = e.name,
            h = l.value,
            f = h && h.components[c];
          if (!f) return Vo(n.default, { Component: f, route: u });
          const m = h.props[c],
            _ = m
              ? m === !0
                ? u.params
                : typeof m == 'function'
                ? m(u)
                : m
              : null,
            x = z(
              f,
              oe({}, _, t, {
                onVnodeUnmounted: (P) => {
                  P.component.isUnmounted && (h.instances[c] = null);
                },
                ref: a,
              })
            );
          return Vo(n.default, { Component: x, route: u }) || x;
        }
      );
    },
  });
function Vo(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const td = ed;
function nd(e) {
  const t = Tf(e.routes, e),
    n = e.parseQuery || Uf,
    r = e.stringifyQuery || Fo,
    s = e.history,
    o = Jt(),
    i = Jt(),
    l = Jt(),
    a = wa(rt);
  let u = rt;
  Nt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = Pr.bind(null, (y) => '' + y),
    h = Pr.bind(null, Kf),
    f = Pr.bind(null, Wn);
  function m(y, O) {
    let k, B;
    return (
      _l(y) ? ((k = t.getRecordMatcher(y)), (B = O)) : (B = y), t.addRoute(B, k)
    );
  }
  function _(y) {
    const O = t.getRecordMatcher(y);
    O && t.removeRoute(O);
  }
  function E() {
    return t.getRoutes().map((y) => y.record);
  }
  function x(y) {
    return !!t.getRecordMatcher(y);
  }
  function P(y, O) {
    if (((O = oe({}, O || a.value)), typeof y == 'string')) {
      const p = Rr(n, y, O.path),
        g = t.resolve({ path: p.path }, O),
        b = s.createHref(p.fullPath);
      return oe(p, g, {
        params: f(g.params),
        hash: Wn(p.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let k;
    if ('path' in y) k = oe({}, y, { path: Rr(n, y.path, O.path).path });
    else {
      const p = oe({}, y.params);
      for (const g in p) p[g] == null && delete p[g];
      (k = oe({}, y, { params: h(p) })), (O.params = h(O.params));
    }
    const B = t.resolve(k, O),
      se = y.hash || '';
    B.params = c(f(B.params));
    const fe = nf(r, oe({}, y, { hash: Df(se), path: B.path })),
      d = s.createHref(fe);
    return oe(
      { fullPath: fe, hash: se, query: r === Fo ? Wf(y.query) : y.query || {} },
      B,
      { redirectedFrom: void 0, href: d }
    );
  }
  function I(y) {
    return typeof y == 'string' ? Rr(n, y, a.value.path) : oe({}, y);
  }
  function j(y, O) {
    if (u !== y) return Kt(8, { from: O, to: y });
  }
  function V(y) {
    return W(y);
  }
  function F(y) {
    return V(oe(I(y), { replace: !0 }));
  }
  function A(y) {
    const O = y.matched[y.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: k } = O;
      let B = typeof k == 'function' ? k(y) : k;
      return (
        typeof B == 'string' &&
          ((B = B.includes('?') || B.includes('#') ? (B = I(B)) : { path: B }),
          (B.params = {})),
        oe(
          { query: y.query, hash: y.hash, params: 'path' in B ? {} : y.params },
          B
        )
      );
    }
  }
  function W(y, O) {
    const k = (u = P(y)),
      B = a.value,
      se = y.state,
      fe = y.force,
      d = y.replace === !0,
      p = A(k);
    if (p)
      return W(
        oe(I(p), {
          state: typeof p == 'object' ? oe({}, se, p.state) : se,
          force: fe,
          replace: d,
        }),
        O || k
      );
    const g = k;
    g.redirectedFrom = O;
    let b;
    return (
      !fe &&
        rf(r, B, k) &&
        ((b = Kt(16, { to: g, from: B })), De(B, B, !0, !1)),
      (b ? Promise.resolve(b) : J(g, B))
        .catch((v) => (Qe(v) ? (Qe(v, 2) ? v : et(v)) : re(v, g, B)))
        .then((v) => {
          if (v) {
            if (Qe(v, 2))
              return W(
                oe({ replace: d }, I(v.to), {
                  state: typeof v.to == 'object' ? oe({}, se, v.to.state) : se,
                  force: fe,
                }),
                O || g
              );
          } else v = $(g, B, !0, d, se);
          return X(g, B, v), v;
        })
    );
  }
  function N(y, O) {
    const k = j(y, O);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function Q(y) {
    const O = Tt.values().next().value;
    return O && typeof O.runWithContext == 'function'
      ? O.runWithContext(y)
      : y();
  }
  function J(y, O) {
    let k;
    const [B, se, fe] = rd(y, O);
    k = kr(B.reverse(), 'beforeRouteLeave', y, O);
    for (const p of B)
      p.leaveGuards.forEach((g) => {
        k.push(ct(g, y, O));
      });
    const d = N.bind(null, y, O);
    return (
      k.push(d),
      ve(k)
        .then(() => {
          k = [];
          for (const p of o.list()) k.push(ct(p, y, O));
          return k.push(d), ve(k);
        })
        .then(() => {
          k = kr(se, 'beforeRouteUpdate', y, O);
          for (const p of se)
            p.updateGuards.forEach((g) => {
              k.push(ct(g, y, O));
            });
          return k.push(d), ve(k);
        })
        .then(() => {
          k = [];
          for (const p of fe)
            if (p.beforeEnter)
              if (He(p.beforeEnter))
                for (const g of p.beforeEnter) k.push(ct(g, y, O));
              else k.push(ct(p.beforeEnter, y, O));
          return k.push(d), ve(k);
        })
        .then(
          () => (
            y.matched.forEach((p) => (p.enterCallbacks = {})),
            (k = kr(fe, 'beforeRouteEnter', y, O)),
            k.push(d),
            ve(k)
          )
        )
        .then(() => {
          k = [];
          for (const p of i.list()) k.push(ct(p, y, O));
          return k.push(d), ve(k);
        })
        .catch((p) => (Qe(p, 8) ? p : Promise.reject(p)))
    );
  }
  function X(y, O, k) {
    l.list().forEach((B) => Q(() => B(y, O, k)));
  }
  function $(y, O, k, B, se) {
    const fe = j(y, O);
    if (fe) return fe;
    const d = O === rt,
      p = Nt ? history.state : {};
    k &&
      (B || d
        ? s.replace(y.fullPath, oe({ scroll: d && p && p.scroll }, se))
        : s.push(y.fullPath, se)),
      (a.value = y),
      De(y, O, k, d),
      et();
  }
  let Z;
  function M() {
    Z ||
      (Z = s.listen((y, O, k) => {
        if (!_n.listening) return;
        const B = P(y),
          se = A(B);
        if (se) {
          W(oe(se, { replace: !0 }), B).catch(sn);
          return;
        }
        u = B;
        const fe = a.value;
        Nt && df(Ao(fe.fullPath, k.delta), dr()),
          J(B, fe)
            .catch((d) =>
              Qe(d, 12)
                ? d
                : Qe(d, 2)
                ? (W(d.to, B)
                    .then((p) => {
                      Qe(p, 20) &&
                        !k.delta &&
                        k.type === gn.pop &&
                        s.go(-1, !1);
                    })
                    .catch(sn),
                  Promise.reject())
                : (k.delta && s.go(-k.delta, !1), re(d, B, fe))
            )
            .then((d) => {
              (d = d || $(B, fe, !1)),
                d &&
                  (k.delta && !Qe(d, 8)
                    ? s.go(-k.delta, !1)
                    : k.type === gn.pop && Qe(d, 20) && s.go(-1, !1)),
                X(B, fe, d);
            })
            .catch(sn);
      }));
  }
  let ne = Jt(),
    ae = Jt(),
    ie;
  function re(y, O, k) {
    et(y);
    const B = ae.list();
    return (
      B.length ? B.forEach((se) => se(y, O, k)) : console.error(y),
      Promise.reject(y)
    );
  }
  function Ge() {
    return ie && a.value !== rt
      ? Promise.resolve()
      : new Promise((y, O) => {
          ne.add([y, O]);
        });
  }
  function et(y) {
    return (
      ie ||
        ((ie = !y),
        M(),
        ne.list().forEach(([O, k]) => (y ? k(y) : O())),
        ne.reset()),
      y
    );
  }
  function De(y, O, k, B) {
    const { scrollBehavior: se } = e;
    if (!Nt || !se) return Promise.resolve();
    const fe =
      (!k && hf(Ao(y.fullPath, 0))) ||
      ((B || !k) && history.state && history.state.scroll) ||
      null;
    return Ri()
      .then(() => se(y, O, fe))
      .then((d) => d && ff(d))
      .catch((d) => re(d, y, O));
  }
  const xe = (y) => s.go(y);
  let kt;
  const Tt = new Set(),
    _n = {
      currentRoute: a,
      listening: !0,
      addRoute: m,
      removeRoute: _,
      hasRoute: x,
      getRoutes: E,
      resolve: P,
      options: e,
      push: V,
      replace: F,
      go: xe,
      back: () => xe(-1),
      forward: () => xe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: ae.add,
      isReady: Ge,
      install(y) {
        const O = this;
        y.component('RouterLink', Yf),
          y.component('RouterView', td),
          (y.config.globalProperties.$router = O),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => wt(a),
          }),
          Nt &&
            !kt &&
            a.value === rt &&
            ((kt = !0), V(s.location).catch((se) => {}));
        const k = {};
        for (const se in rt)
          Object.defineProperty(k, se, {
            get: () => a.value[se],
            enumerable: !0,
          });
        y.provide(Rs, O), y.provide(Rl, bi(k)), y.provide(Yr, a);
        const B = y.unmount;
        Tt.add(y),
          (y.unmount = function () {
            Tt.delete(y),
              Tt.size < 1 &&
                ((u = rt),
                Z && Z(),
                (Z = null),
                (a.value = rt),
                (kt = !1),
                (ie = !1)),
              B();
          });
      },
    };
  function ve(y) {
    return y.reduce((O, k) => O.then(() => Q(k)), Promise.resolve());
  }
  return _n;
}
function rd(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => zt(u, l)) ? r.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((u) => zt(u, a)) || s.push(a));
  }
  return [n, r, s];
}
const sd = [
  {
    path: '/',
    component: () =>
      kn(
        () => import('./MainLayout.1d0736e0.js'),
        [
          'assets/MainLayout.1d0736e0.js',
          'assets/uid.acfcb5c3.js',
          'assets/vue-i18n.runtime.c21bafc3.js',
        ]
      ),
    children: [
      {
        path: '',
        component: () =>
          kn(
            () => import('./IndexPage.c552d6ea.js'),
            [
              'assets/IndexPage.c552d6ea.js',
              'assets/IndexPage.ab0ed0c8.css',
              'assets/uid.acfcb5c3.js',
              'assets/vue-i18n.runtime.c21bafc3.js',
            ]
          ),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => kn(() => import('./ErrorNotFound.54e00270.js'), []),
  },
];
var Tr = function () {
  return nd({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: sd,
    history: yf('/palworld-server-config-generator/'),
  });
};
async function od(e, t) {
  const n = e(Qu);
  n.use(Ku, t);
  const r = typeof Sr == 'function' ? await Sr({}) : Sr;
  n.use(r);
  const s = Pt(typeof Tr == 'function' ? await Tr({ store: r }) : Tr);
  return (
    r.use(({ store: o }) => {
      o.router = s;
    }),
    { app: n, store: r, router: s }
  );
}
const Xr = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  ks = { size: String };
function Ts(e, t = Xr) {
  return K(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const yn = (e) => Pt(ms(e)),
  id = (e) => Pt(e);
function ld(e, t) {
  return (e !== void 0 && e()) || t;
}
function gh(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function Zt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function ad(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function mh(e, t, n, r, s, o) {
  t.key = r + s;
  const i = z(e, t, n);
  return s === !0 ? Mi(i, o()) : i;
}
const zo = '0 0 24 24',
  Ko = (e) => e,
  Ar = (e) => `ionicons ${e}`,
  kl = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': Ko,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': Ar,
    'ion-ios': Ar,
    'ion-logo': Ar,
    'iconfont ': Ko,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  Tl = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  Al = { sym_o_: '-outlined', sym_r_: '-rounded', sym_s_: '-sharp' },
  cd = new RegExp('^(' + Object.keys(kl).join('|') + ')'),
  ud = new RegExp('^(' + Object.keys(Tl).join('|') + ')'),
  Uo = new RegExp('^(' + Object.keys(Al).join('|') + ')'),
  fd = /^[Mm]\s?[-+]?\.?\d/,
  dd = /^img:/,
  hd = /^svguse:/,
  pd = /^ion-/,
  gd = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var Gn = yn({
    name: 'QIcon',
    props: {
      ...ks,
      tag: { type: String, default: 'i' },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Rt(),
        r = Ts(e),
        s = K(
          () =>
            'q-icon' +
            (e.left === !0 ? ' on-left' : '') +
            (e.right === !0 ? ' on-right' : '') +
            (e.color !== void 0 ? ` text-${e.color}` : '')
        ),
        o = K(() => {
          let i,
            l = e.name;
          if (l === 'none' || !l) return { none: !0 };
          if (n.iconMapFn !== null) {
            const c = n.iconMapFn(l);
            if (c !== void 0)
              if (c.icon !== void 0) {
                if (((l = c.icon), l === 'none' || !l)) return { none: !0 };
              } else
                return {
                  cls: c.cls,
                  content: c.content !== void 0 ? c.content : ' ',
                };
          }
          if (fd.test(l) === !0) {
            const [c, h = zo] = l.split('|');
            return {
              svg: !0,
              viewBox: h,
              nodes: c.split('&&').map((f) => {
                const [m, _, E] = f.split('@@');
                return z('path', { style: _, d: m, transform: E });
              }),
            };
          }
          if (dd.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (hd.test(l) === !0) {
            const [c, h = zo] = l.split('|');
            return { svguse: !0, src: c.substring(7), viewBox: h };
          }
          let a = ' ';
          const u = l.match(cd);
          if (u !== null) i = kl[u[1]](l);
          else if (gd.test(l) === !0) i = l;
          else if (pd.test(l) === !0)
            i = `ionicons ion-${
              n.platform.is.ios === !0 ? 'ios' : 'md'
            }${l.substring(3)}`;
          else if (Uo.test(l) === !0) {
            i = 'notranslate material-symbols';
            const c = l.match(Uo);
            c !== null && ((l = l.substring(6)), (i += Al[c[1]])), (a = l);
          } else {
            i = 'notranslate material-icons';
            const c = l.match(ud);
            c !== null && ((l = l.substring(2)), (i += Tl[c[1]])), (a = l);
          }
          return { cls: i, content: a };
        });
      return () => {
        const i = {
          class: s.value,
          style: r.value,
          'aria-hidden': 'true',
          role: 'presentation',
        };
        return o.value.none === !0
          ? z(e.tag, i, ld(t.default))
          : o.value.img === !0
          ? z('span', i, Zt(t.default, [z('img', { src: o.value.src })]))
          : o.value.svg === !0
          ? z(
              'span',
              i,
              Zt(t.default, [
                z(
                  'svg',
                  { viewBox: o.value.viewBox || '0 0 24 24' },
                  o.value.nodes
                ),
              ])
            )
          : o.value.svguse === !0
          ? z(
              'span',
              i,
              Zt(t.default, [
                z('svg', { viewBox: o.value.viewBox }, [
                  z('use', { 'xlink:href': o.value.src }),
                ]),
              ])
            )
          : (o.value.cls !== void 0 && (i.class += ' ' + o.value.cls),
            z(e.tag, i, Zt(t.default, [o.value.content])));
      };
    },
  }),
  md = yn({
    name: 'QAvatar',
    props: {
      ...ks,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Ts(e),
        r = K(
          () =>
            'q-avatar' +
            (e.color ? ` bg-${e.color}` : '') +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : '') +
            (e.square === !0
              ? ' q-avatar--square'
              : e.rounded === !0
              ? ' rounded-borders'
              : '')
        ),
        s = K(() => (e.fontSize ? { fontSize: e.fontSize } : null));
      return () => {
        const o = e.icon !== void 0 ? [z(Gn, { name: e.icon })] : void 0;
        return z('div', { class: r.value, style: n.value }, [
          z(
            'div',
            {
              class: 'q-avatar__content row flex-center overflow-hidden',
              style: s.value,
            },
            ad(t.default, o)
          ),
        ]);
      };
    },
  });
const vd = { size: { type: [Number, String], default: '1em' }, color: String };
function yd(e) {
  return {
    cSize: K(() => (e.size in Xr ? `${Xr[e.size]}px` : e.size)),
    classes: K(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  };
}
var Ol = yn({
  name: 'QSpinner',
  props: { ...vd, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: n } = yd(e);
    return () =>
      z(
        'svg',
        {
          class: n.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          z('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      );
  },
});
function _d(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function vh(e) {
  if (e == null) return;
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = wt(e);
  if (t) return t.$el || t;
}
function yh(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
function bd(e, t = 250) {
  let n = !1,
    r;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (r = e.apply(this, arguments))),
      r
    );
  };
}
function Wo(e, t, n, r) {
  n.modifiers.stop === !0 && dl(e);
  const s = n.modifiers.color;
  let o = n.modifiers.center;
  o = o === !0 || r === !0;
  const i = document.createElement('span'),
    l = document.createElement('span'),
    a = xu(e),
    { left: u, top: c, width: h, height: f } = t.getBoundingClientRect(),
    m = Math.sqrt(h * h + f * f),
    _ = m / 2,
    E = `${(h - m) / 2}px`,
    x = o ? E : `${a.left - u - _}px`,
    P = `${(f - m) / 2}px`,
    I = o ? P : `${a.top - c - _}px`;
  (l.className = 'q-ripple__inner'),
    _d(l, {
      height: `${m}px`,
      width: `${m}px`,
      transform: `translate3d(${x},${I},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (i.className = `q-ripple${s ? ' text-' + s : ''}`),
    i.setAttribute('dir', 'ltr'),
    i.appendChild(l),
    t.appendChild(i);
  const j = () => {
    i.remove(), clearTimeout(V);
  };
  n.abort.push(j);
  let V = setTimeout(() => {
    l.classList.add('q-ripple__inner--enter'),
      (l.style.transform = `translate3d(${E},${P},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (V = setTimeout(() => {
        l.classList.remove('q-ripple__inner--enter'),
          l.classList.add('q-ripple__inner--leave'),
          (l.style.opacity = 0),
          (V = setTimeout(() => {
            i.remove(), n.abort.splice(n.abort.indexOf(j), 1);
          }, 275));
      }, 250));
  }, 50);
}
function Go(e, { modifiers: t, value: n, arg: r }) {
  const s = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: s.early === !0,
    stop: s.stop === !0,
    center: s.center === !0,
    color: s.color || r,
    keyCodes: [].concat(s.keyCodes || 13),
  };
}
var wd = id({
  name: 'ripple',
  beforeMount(e, t) {
    const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (n.ripple === !1) return;
    const r = {
      cfg: n,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(s) {
        r.enabled === !0 &&
          s.qSkipRipple !== !0 &&
          s.type === (r.modifiers.early === !0 ? 'pointerdown' : 'click') &&
          Wo(s, e, r, s.qKeyEvent === !0);
      },
      keystart: bd((s) => {
        r.enabled === !0 &&
          s.qSkipRipple !== !0 &&
          Gr(s, r.modifiers.keyCodes) === !0 &&
          s.type === `key${r.modifiers.early === !0 ? 'down' : 'up'}` &&
          Wo(s, e, r, !0);
      }, 300),
    };
    Go(r, t),
      (e.__qripple = r),
      Cu(r, 'main', [
        [e, 'pointerdown', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const n = e.__qripple;
      n !== void 0 &&
        ((n.enabled = t.value !== !1),
        n.enabled === !0 && Object(t.value) === t.value && Go(n, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((n) => {
        n();
      }),
      Su(t, 'main'),
      delete e._qripple);
  },
});
const Ll = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  xd = Object.keys(Ll),
  Ed = { align: { type: String, validator: (e) => xd.includes(e) } };
function Cd(e) {
  return K(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align;
    return `${e.vertical === !0 ? 'items' : 'justify'}-${Ll[t]}`;
  });
}
function _h(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function Sd(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function bh(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function Qo(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
function Jo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Pd(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (
      Array.isArray(s) === !1 ||
      s.length !== r.length ||
      r.some((o, i) => o !== s[i])
    )
      return !1;
  }
  return !0;
}
function Yo(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Rd(e, t) {
  return Array.isArray(e) === !0
    ? Yo(e, t)
    : Array.isArray(t) === !0
    ? Yo(t, e)
    : e === t;
}
function kd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (Rd(e[n], t[n]) === !1) return !1;
  return !0;
}
const Td = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: 'q-router-link--active' },
  exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  href: String,
  target: String,
  disable: Boolean,
};
function Ad({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Rt(),
    { props: r, proxy: s, emit: o } = n,
    i = Sd(n),
    l = K(() => r.disable !== !0 && r.href !== void 0),
    a = K(
      t === !0
        ? () =>
            i === !0 &&
            r.disable !== !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ''
        : () =>
            i === !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ''
    ),
    u = K(() => (a.value === !0 ? I(r.to) : null)),
    c = K(() => u.value !== null),
    h = K(() => l.value === !0 || c.value === !0),
    f = K(() => (r.type === 'a' || h.value === !0 ? 'a' : r.tag || e || 'div')),
    m = K(() =>
      l.value === !0
        ? { href: r.href, target: r.target }
        : c.value === !0
        ? { href: u.value.href, target: r.target }
        : {}
    ),
    _ = K(() => {
      if (c.value === !1) return -1;
      const { matched: F } = u.value,
        { length: A } = F,
        W = F[A - 1];
      if (W === void 0) return -1;
      const N = s.$route.matched;
      if (N.length === 0) return -1;
      const Q = N.findIndex(Jo.bind(null, W));
      if (Q > -1) return Q;
      const J = Qo(F[A - 2]);
      return A > 1 && Qo(W) === J && N[N.length - 1].path !== J
        ? N.findIndex(Jo.bind(null, F[A - 2]))
        : Q;
    }),
    E = K(
      () =>
        c.value === !0 && _.value !== -1 && Pd(s.$route.params, u.value.params)
    ),
    x = K(
      () =>
        E.value === !0 &&
        _.value === s.$route.matched.length - 1 &&
        kd(s.$route.params, u.value.params)
    ),
    P = K(() =>
      c.value === !0
        ? x.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ''
          : E.value === !0
          ? ` ${r.activeClass}`
          : ''
        : ''
    );
  function I(F) {
    try {
      return s.$router.resolve(F);
    } catch {}
    return null;
  }
  function j(
    F,
    { returnRouterError: A, to: W = r.to, replace: N = r.replace } = {}
  ) {
    if (r.disable === !0) return F.preventDefault(), Promise.resolve(!1);
    if (
      F.metaKey ||
      F.altKey ||
      F.ctrlKey ||
      F.shiftKey ||
      (F.button !== void 0 && F.button !== 0) ||
      r.target === '_blank'
    )
      return Promise.resolve(!1);
    F.preventDefault();
    const Q = s.$router[N === !0 ? 'replace' : 'push'](W);
    return A === !0 ? Q : Q.then(() => {}).catch(() => {});
  }
  function V(F) {
    if (c.value === !0) {
      const A = (W) => j(F, W);
      o('click', F, A), F.defaultPrevented !== !0 && A();
    } else o('click', F);
  }
  return {
    hasRouterLink: c,
    hasHrefLink: l,
    hasLink: h,
    linkTag: f,
    resolvedLink: u,
    linkIsActive: E,
    linkIsExactActive: x,
    linkClass: P,
    linkAttrs: m,
    getLink: I,
    navigateToRouterLink: j,
    navigateOnClick: V,
  };
}
const Xo = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  Od = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Ld = ['button', 'submit', 'reset'],
  $d = /[^\s]\/[^\s]/,
  Md = ['flat', 'outline', 'push', 'unelevated'],
  $l = (e, t) =>
    e.flat === !0
      ? 'flat'
      : e.outline === !0
      ? 'outline'
      : e.push === !0
      ? 'push'
      : e.unelevated === !0
      ? 'unelevated'
      : t,
  wh = (e) => {
    const t = $l(e);
    return t !== void 0 ? { [t]: !0 } : {};
  },
  Nd = {
    ...ks,
    ...Td,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...Md.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...Ed.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function Id(e) {
  const t = Ts(e, Od),
    n = Cd(e),
    {
      hasRouterLink: r,
      hasLink: s,
      linkTag: o,
      linkAttrs: i,
      navigateOnClick: l,
    } = Ad({ fallbackTag: 'button' }),
    a = K(() => {
      const x = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, x, {
            padding: e.padding
              .split(/\s+/)
              .map((P) => (P in Xo ? Xo[P] + 'px' : P))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : x;
    }),
    u = K(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    c = K(() => e.disable !== !0 && e.loading !== !0),
    h = K(() => (c.value === !0 ? e.tabindex || 0 : -1)),
    f = K(() => $l(e, 'standard')),
    m = K(() => {
      const x = { tabindex: h.value };
      return (
        s.value === !0
          ? Object.assign(x, i.value)
          : Ld.includes(e.type) === !0 && (x.type = e.type),
        o.value === 'a'
          ? (e.disable === !0
              ? (x['aria-disabled'] = 'true')
              : x.href === void 0 && (x.role = 'button'),
            r.value !== !0 && $d.test(e.type) === !0 && (x.type = e.type))
          : e.disable === !0 &&
            ((x.disabled = ''), (x['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(x, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        x
      );
    }),
    _ = K(() => {
      let x;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (x = `text-${e.textColor || e.color}`)
          : (x = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (x = `text-${e.textColor}`);
      const P =
        e.round === !0
          ? 'round'
          : `rectangle${
              u.value === !0
                ? ' q-btn--rounded'
                : e.square === !0
                ? ' q-btn--square'
                : ''
            }`;
      return (
        `q-btn--${f.value} q-btn--${P}` +
        (x !== void 0 ? ' ' + x : '') +
        (c.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
          ? ' disabled'
          : '') +
        (e.fab === !0
          ? ' q-btn--fab'
          : e.fabMini === !0
          ? ' q-btn--fab-mini'
          : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      );
    }),
    E = K(
      () =>
        n.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    );
  return {
    classes: _,
    style: a,
    innerClasses: E,
    attributes: m,
    hasLink: s,
    linkTag: o,
    navigateOnClick: l,
    isActionable: c,
  };
}
const { passiveCapture: Ae } = vn;
let Lt = null,
  $t = null,
  Mt = null;
var jd = yn({
  name: 'QBtn',
  props: {
    ...Nd,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = Rt(),
      {
        classes: s,
        style: o,
        innerClasses: i,
        attributes: l,
        hasLink: a,
        linkTag: u,
        navigateOnClick: c,
        isActionable: h,
      } = Id(e),
      f = Dt(null),
      m = Dt(null);
    let _ = null,
      E,
      x = null;
    const P = K(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      I = K(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: a.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      j = K(() => ({ center: e.round })),
      V = K(() => {
        const M = Math.max(0, Math.min(100, e.percentage));
        return M > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${M - 100}%)`,
            }
          : {};
      }),
      F = K(() => {
        if (e.loading === !0)
          return {
            onMousedown: Z,
            onTouchstart: Z,
            onClick: Z,
            onKeydown: Z,
            onKeyup: Z,
          };
        if (h.value === !0) {
          const M = { onClick: W, onKeydown: N, onMousedown: J };
          if (r.$q.platform.has.touch === !0) {
            const ne = e.onTouchstart !== void 0 ? '' : 'Passive';
            M[`onTouchstart${ne}`] = Q;
          }
          return M;
        }
        return { onClick: Ot };
      }),
      A = K(() => ({
        ref: f,
        class: 'q-btn q-btn-item non-selectable no-outline ' + s.value,
        style: o.value,
        ...l.value,
        ...F.value,
      }));
    function W(M) {
      if (f.value !== null) {
        if (M !== void 0) {
          if (M.defaultPrevented === !0) return;
          const ne = document.activeElement;
          if (
            e.type === 'submit' &&
            ne !== document.body &&
            f.value.contains(ne) === !1 &&
            ne.contains(f.value) === !1
          ) {
            f.value.focus();
            const ae = () => {
              document.removeEventListener('keydown', Ot, !0),
                document.removeEventListener('keyup', ae, Ae),
                f.value !== null && f.value.removeEventListener('blur', ae, Ae);
            };
            document.addEventListener('keydown', Ot, !0),
              document.addEventListener('keyup', ae, Ae),
              f.value.addEventListener('blur', ae, Ae);
          }
        }
        c(M);
      }
    }
    function N(M) {
      f.value !== null &&
        (n('keydown', M),
        Gr(M, [13, 32]) === !0 &&
          $t !== f.value &&
          ($t !== null && $(),
          M.defaultPrevented !== !0 &&
            (f.value.focus(),
            ($t = f.value),
            f.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', X, !0),
            f.value.addEventListener('blur', X, Ae)),
          Ot(M)));
    }
    function Q(M) {
      f.value !== null &&
        (n('touchstart', M),
        M.defaultPrevented !== !0 &&
          (Lt !== f.value &&
            (Lt !== null && $(),
            (Lt = f.value),
            (_ = M.target),
            _.addEventListener('touchcancel', X, Ae),
            _.addEventListener('touchend', X, Ae)),
          (E = !0),
          x !== null && clearTimeout(x),
          (x = setTimeout(() => {
            (x = null), (E = !1);
          }, 200))));
    }
    function J(M) {
      f.value !== null &&
        ((M.qSkipRipple = E === !0),
        n('mousedown', M),
        M.defaultPrevented !== !0 &&
          Mt !== f.value &&
          (Mt !== null && $(),
          (Mt = f.value),
          f.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', X, Ae)));
    }
    function X(M) {
      if (
        f.value !== null &&
        !(
          M !== void 0 &&
          M.type === 'blur' &&
          document.activeElement === f.value
        )
      ) {
        if (M !== void 0 && M.type === 'keyup') {
          if ($t === f.value && Gr(M, [13, 32]) === !0) {
            const ne = new MouseEvent('click', M);
            (ne.qKeyEvent = !0),
              M.defaultPrevented === !0 && Eu(ne),
              M.cancelBubble === !0 && dl(ne),
              f.value.dispatchEvent(ne),
              Ot(M),
              (M.qKeyEvent = !0);
          }
          n('keyup', M);
        }
        $();
      }
    }
    function $(M) {
      const ne = m.value;
      M !== !0 &&
        (Lt === f.value || Mt === f.value) &&
        ne !== null &&
        ne !== document.activeElement &&
        (ne.setAttribute('tabindex', -1), ne.focus()),
        Lt === f.value &&
          (_ !== null &&
            (_.removeEventListener('touchcancel', X, Ae),
            _.removeEventListener('touchend', X, Ae)),
          (Lt = _ = null)),
        Mt === f.value &&
          (document.removeEventListener('mouseup', X, Ae), (Mt = null)),
        $t === f.value &&
          (document.removeEventListener('keyup', X, !0),
          f.value !== null && f.value.removeEventListener('blur', X, Ae),
          ($t = null)),
        f.value !== null && f.value.classList.remove('q-btn--active');
    }
    function Z(M) {
      Ot(M), (M.qSkipRipple = !0);
    }
    return (
      ys(() => {
        $(!0);
      }),
      Object.assign(r, { click: W }),
      () => {
        let M = [];
        e.icon !== void 0 &&
          M.push(
            z(Gn, {
              name: e.icon,
              left: e.stack !== !0 && P.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          P.value === !0 && M.push(z('span', { class: 'block' }, [e.label])),
          (M = Zt(t.default, M)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            M.push(
              z(Gn, {
                name: e.iconRight,
                right: e.stack !== !0 && P.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            );
        const ne = [z('span', { class: 'q-focus-helper', ref: m })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            ne.push(
              z(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [
                  z('span', {
                    class: 'q-btn__progress-indicator fit block',
                    style: V.value,
                  }),
                ]
              )
            ),
          ne.push(
            z(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  i.value,
              },
              M
            )
          ),
          e.loading !== null &&
            ne.push(
              z(Cs, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      z(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [z(Ol)]
                      ),
                    ]
                  : null
              )
            ),
          Mi(z(u.value, A.value, ne), [[wd, I.value, void 0, j.value]])
        );
      }
    );
  },
});
let Fd = 1,
  Bd = document.body;
function qd(e, t) {
  const n = document.createElement('div');
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${Fd++}` : e),
    Un.globalNodes !== void 0)
  ) {
    const r = Un.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return Bd.appendChild(n), n;
}
function xh(e) {
  e.remove();
}
let Hd = 0;
const Nn = {},
  In = {},
  je = {},
  Ml = {},
  Dd = /^\s*$/,
  Nl = [],
  Vd = [void 0, null, !0, !1, ''],
  As = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'top',
    'bottom',
    'left',
    'right',
    'center',
  ],
  zd = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  It = {
    positive: { icon: (e) => e.iconSet.type.positive, color: 'positive' },
    negative: { icon: (e) => e.iconSet.type.negative, color: 'negative' },
    warning: {
      icon: (e) => e.iconSet.type.warning,
      color: 'warning',
      textColor: 'dark',
    },
    info: { icon: (e) => e.iconSet.type.info, color: 'info' },
    ongoing: { group: !1, timeout: 0, spinner: !0, color: 'grey-8' },
  };
function Il(e, t, n) {
  if (!e) return Yt('parameter required');
  let r;
  const s = { textColor: 'white' };
  if (
    (e.ignoreDefaults !== !0 && Object.assign(s, Nn),
    pn(e) === !1 &&
      (s.type && Object.assign(s, It[s.type]), (e = { message: e })),
    Object.assign(s, It[e.type || s.type], e),
    typeof s.icon == 'function' && (s.icon = s.icon(t)),
    s.spinner
      ? (s.spinner === !0 && (s.spinner = Ol), (s.spinner = Pt(s.spinner)))
      : (s.spinner = !1),
    (s.meta = {
      hasMedia: Boolean(s.spinner !== !1 || s.icon || s.avatar),
      hasText: Zo(s.message) || Zo(s.caption),
    }),
    s.position)
  ) {
    if (As.includes(s.position) === !1) return Yt('wrong position', e);
  } else s.position = 'bottom';
  if (Vd.includes(s.timeout) === !0) s.timeout = 5e3;
  else {
    const a = Number(s.timeout);
    if (isNaN(a) || a < 0) return Yt('wrong timeout', e);
    s.timeout = Number.isFinite(a) ? a : 0;
  }
  s.timeout === 0
    ? (s.progress = !1)
    : s.progress === !0 &&
      ((s.meta.progressClass =
        'q-notification__progress' +
        (s.progressClass ? ` ${s.progressClass}` : '')),
      (s.meta.progressStyle = { animationDuration: `${s.timeout + 1e3}ms` }));
  const o = (Array.isArray(e.actions) === !0 ? e.actions : [])
      .concat(
        e.ignoreDefaults !== !0 && Array.isArray(Nn.actions) === !0
          ? Nn.actions
          : []
      )
      .concat(
        It[e.type] !== void 0 && Array.isArray(It[e.type].actions) === !0
          ? It[e.type].actions
          : []
      ),
    { closeBtn: i } = s;
  if (
    (i && o.push({ label: typeof i == 'string' ? i : t.lang.label.close }),
    (s.actions = o.map(({ handler: a, noDismiss: u, ...c }) => ({
      flat: !0,
      ...c,
      onClick:
        typeof a == 'function'
          ? () => {
              a(), u !== !0 && l();
            }
          : () => {
              l();
            },
    }))),
    s.multiLine === void 0 && (s.multiLine = s.actions.length > 1),
    Object.assign(s.meta, {
      class:
        `q-notification row items-stretch q-notification--${
          s.multiLine === !0 ? 'multi-line' : 'standard'
        }` +
        (s.color !== void 0 ? ` bg-${s.color}` : '') +
        (s.textColor !== void 0 ? ` text-${s.textColor}` : '') +
        (s.classes !== void 0 ? ` ${s.classes}` : ''),
      wrapperClass:
        'q-notification__wrapper col relative-position border-radius-inherit ' +
        (s.multiLine === !0
          ? 'column no-wrap justify-center'
          : 'row items-center'),
      contentClass:
        'q-notification__content row items-center' +
        (s.multiLine === !0 ? '' : ' col'),
      leftClass: s.meta.hasText === !0 ? 'additional' : 'single',
      attrs: { role: 'alert', ...s.attrs },
    }),
    s.group === !1
      ? ((s.group = void 0), (s.meta.group = void 0))
      : ((s.group === void 0 || s.group === !0) &&
          (s.group = [s.message, s.caption, s.multiline]
            .concat(s.actions.map((a) => `${a.label}*${a.icon}`))
            .join('|')),
        (s.meta.group = s.group + '|' + s.position)),
    s.actions.length === 0
      ? (s.actions = void 0)
      : (s.meta.actionsClass =
          'q-notification__actions row items-center ' +
          (s.multiLine === !0 ? 'justify-end' : 'col-auto') +
          (s.meta.hasMedia === !0
            ? ' q-notification__actions--with-media'
            : '')),
    n !== void 0)
  ) {
    n.notif.meta.timer &&
      (clearTimeout(n.notif.meta.timer), (n.notif.meta.timer = void 0)),
      (s.meta.uid = n.notif.meta.uid);
    const a = je[s.position].value.indexOf(n.notif);
    je[s.position].value[a] = s;
  } else {
    const a = In[s.meta.group];
    if (a === void 0) {
      if (
        ((s.meta.uid = Hd++),
        (s.meta.badge = 1),
        ['left', 'right', 'center'].indexOf(s.position) !== -1)
      )
        je[s.position].value.splice(
          Math.floor(je[s.position].value.length / 2),
          0,
          s
        );
      else {
        const u = s.position.indexOf('top') > -1 ? 'unshift' : 'push';
        je[s.position].value[u](s);
      }
      s.group !== void 0 && (In[s.meta.group] = s);
    } else {
      if (
        (a.meta.timer && (clearTimeout(a.meta.timer), (a.meta.timer = void 0)),
        s.badgePosition !== void 0)
      ) {
        if (zd.includes(s.badgePosition) === !1)
          return Yt('wrong badgePosition', e);
      } else
        s.badgePosition = `top-${
          s.position.indexOf('left') > -1 ? 'right' : 'left'
        }`;
      (s.meta.uid = a.meta.uid),
        (s.meta.badge = a.meta.badge + 1),
        (s.meta.badgeClass =
          `q-notification__badge q-notification__badge--${s.badgePosition}` +
          (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : '') +
          (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : '') +
          (s.badgeClass ? ` ${s.badgeClass}` : ''));
      const u = je[s.position].value.indexOf(a);
      je[s.position].value[u] = In[s.meta.group] = s;
    }
  }
  const l = () => {
    Kd(s), (r = void 0);
  };
  if (
    (s.timeout > 0 &&
      (s.meta.timer = setTimeout(() => {
        (s.meta.timer = void 0), l();
      }, s.timeout + 1e3)),
    s.group !== void 0)
  )
    return (a) => {
      a !== void 0
        ? Yt('trying to update a grouped one which is forbidden', e)
        : l();
    };
  if (((r = { dismiss: l, config: e, notif: s }), n !== void 0)) {
    Object.assign(n, r);
    return;
  }
  return (a) => {
    if (r !== void 0)
      if (a === void 0) r.dismiss();
      else {
        const u = Object.assign({}, r.config, a, {
          group: !1,
          position: s.position,
        });
        Il(u, t, r);
      }
  };
}
function Kd(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), (e.meta.timer = void 0));
  const t = je[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete In[e.meta.group];
    const n = Nl['' + e.meta.uid];
    if (n) {
      const { width: r, height: s } = getComputedStyle(n);
      (n.style.left = `${n.offsetLeft}px`),
        (n.style.width = r),
        (n.style.height = s);
    }
    je[e.position].value.splice(t, 1),
      typeof e.onDismiss == 'function' && e.onDismiss();
  }
}
function Zo(e) {
  return e != null && Dd.test(e) !== !0;
}
function Yt(e, t) {
  return console.error(`Notify: ${e}`, t), !1;
}
function Ud() {
  return yn({
    name: 'QNotifications',
    devtools: { hide: !0 },
    setup() {
      return () =>
        z(
          'div',
          { class: 'q-notifications' },
          As.map((e) =>
            z(
              au,
              {
                key: e,
                class: Ml[e],
                tag: 'div',
                name: `q-notification--${e}`,
              },
              () =>
                je[e].value.map((t) => {
                  const n = t.meta,
                    r = [];
                  if (
                    (n.hasMedia === !0 &&
                      (t.spinner !== !1
                        ? r.push(
                            z(t.spinner, {
                              class:
                                'q-notification__spinner q-notification__spinner--' +
                                n.leftClass,
                              color: t.spinnerColor,
                              size: t.spinnerSize,
                            })
                          )
                        : t.icon
                        ? r.push(
                            z(Gn, {
                              class:
                                'q-notification__icon q-notification__icon--' +
                                n.leftClass,
                              name: t.icon,
                              color: t.iconColor,
                              size: t.iconSize,
                              role: 'img',
                            })
                          )
                        : t.avatar &&
                          r.push(
                            z(
                              md,
                              {
                                class:
                                  'q-notification__avatar q-notification__avatar--' +
                                  n.leftClass,
                              },
                              () =>
                                z('img', {
                                  src: t.avatar,
                                  'aria-hidden': 'true',
                                })
                            )
                          )),
                    n.hasText === !0)
                  ) {
                    let o;
                    const i = { class: 'q-notification__message col' };
                    if (t.html === !0)
                      i.innerHTML = t.caption
                        ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`
                        : t.message;
                    else {
                      const l = [t.message];
                      o = t.caption
                        ? [
                            z('div', l),
                            z('div', { class: 'q-notification__caption' }, [
                              t.caption,
                            ]),
                          ]
                        : l;
                    }
                    r.push(z('div', i, o));
                  }
                  const s = [z('div', { class: n.contentClass }, r)];
                  return (
                    t.progress === !0 &&
                      s.push(
                        z('div', {
                          key: `${n.uid}|p|${n.badge}`,
                          class: n.progressClass,
                          style: n.progressStyle,
                        })
                      ),
                    t.actions !== void 0 &&
                      s.push(
                        z(
                          'div',
                          { class: n.actionsClass },
                          t.actions.map((o) => z(jd, o))
                        )
                      ),
                    n.badge > 1 &&
                      s.push(
                        z(
                          'div',
                          {
                            key: `${n.uid}|${n.badge}`,
                            class: t.meta.badgeClass,
                            style: t.badgeStyle,
                          },
                          [n.badge]
                        )
                      ),
                    z(
                      'div',
                      {
                        ref: (o) => {
                          Nl['' + n.uid] = o;
                        },
                        key: n.uid,
                        class: n.class,
                        ...n.attrs,
                      },
                      [z('div', { class: n.wrapperClass }, s)]
                    )
                  );
                })
            )
          )
        );
    },
  });
}
var Wd = {
    setDefaults(e) {
      pn(e) === !0 && Object.assign(Nn, e);
    },
    registerType(e, t) {
      pn(t) === !0 && (It[e] = t);
    },
    install({ $q: e, parentApp: t }) {
      if (
        ((e.notify = this.create = (n) => Il(n, e)),
        (e.notify.setDefaults = this.setDefaults),
        (e.notify.registerType = this.registerType),
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0)
      ) {
        As.forEach((r) => {
          je[r] = Dt([]);
          const s =
              ['left', 'center', 'right'].includes(r) === !0
                ? 'center'
                : r.indexOf('top') > -1
                ? 'top'
                : 'bottom',
            o =
              r.indexOf('left') > -1
                ? 'start'
                : r.indexOf('right') > -1
                ? 'end'
                : 'center',
            i = ['left', 'right'].includes(r)
              ? `items-${r === 'left' ? 'start' : 'end'} justify-center`
              : r === 'center'
              ? 'flex-center'
              : `items-${o}`;
          Ml[
            r
          ] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${i}`;
        });
        const n = qd('q-notify');
        Du(Ud(), t).mount(n);
      }
    },
  },
  Gd = {
    config: { notify: { position: 'top', timeout: 1500 } },
    plugins: { Notify: Wd },
  };
const Qd = '/palworld-server-config-generator/';
async function Jd({ app: e, router: t, store: n }, r) {
  let s = !1;
  const o = (a) => {
      try {
        return t.resolve(a).href;
      } catch {}
      return Object(a) === a ? null : a;
    },
    i = (a) => {
      if (((s = !0), typeof a == 'string' && /^https?:\/\//.test(a))) {
        window.location.href = a;
        return;
      }
      const u = o(a);
      u !== null && ((window.location.href = u), window.location.reload());
    },
    l = window.location.href.replace(window.location.origin, '');
  for (let a = 0; s === !1 && a < r.length; a++)
    try {
      await r[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: i,
        urlPath: l,
        publicPath: Qd,
      });
    } catch (u) {
      if (u && u.url) {
        i(u.url);
        return;
      }
      console.error('[Quasar] boot error:', u);
      return;
    }
  s !== !0 && (e.use(t), e.mount('#q-app'));
}
od(ul, Gd).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          'allSettled',
          (r) =>
            r.map((s) => {
              if (s.status === 'rejected') {
                console.error('[Quasar] boot error:', s.reason);
                return;
              }
              return s.value.default;
            }),
        ]
      : ['all', (r) => r.map((s) => s.default)];
  return Promise[t]([
    kn(
      () => import('./i18n.d8b05f28.js'),
      ['assets/i18n.d8b05f28.js', 'assets/vue-i18n.runtime.c21bafc3.js']
    ),
  ]).then((r) => {
    const s = n(r).filter((o) => typeof o == 'function');
    Jd(e, s);
  });
});
export {
  Cu as $,
  gh as A,
  ch as B,
  Ln as C,
  uh as D,
  Wt as E,
  Oe as F,
  Zt as G,
  ja as H,
  Qi as I,
  Yi as J,
  La as K,
  Zi as L,
  Yd as M,
  wt as N,
  sh as O,
  eh as P,
  Gn as Q,
  Mi as R,
  Rc as S,
  ir as T,
  wd as U,
  Td as V,
  Ad as W,
  Gr as X,
  Ot as Y,
  Wr as Z,
  Eu as _,
  _s as a,
  Su as a0,
  Sd as a1,
  _h as a2,
  Ss as a3,
  rh as a4,
  qd as a5,
  xh as a6,
  Ja as a7,
  bh as a8,
  vh as a9,
  mh as aA,
  ad as aB,
  Xa as aC,
  Bi as aD,
  th as aE,
  hh as aF,
  lh as aG,
  Xd as aH,
  Zd as aI,
  _d as aa,
  Le as ab,
  xu as ac,
  Cs as ad,
  yh as ae,
  fh as af,
  Pu as ag,
  Za as ah,
  Qa as ai,
  Ol as aj,
  Mu as ak,
  Ts as al,
  ks as am,
  te as an,
  Ed as ao,
  Cd as ap,
  Ou as aq,
  ah as ar,
  id as as,
  Cr as at,
  qu as au,
  nh as av,
  ih as aw,
  oh as ax,
  ss as ay,
  Uu as az,
  ph as b,
  K as c,
  ms as d,
  Xl as e,
  Pe as f,
  Rt as g,
  z as h,
  Xe as i,
  Ce as j,
  yn as k,
  ld as l,
  jd as m,
  wh as n,
  vs as o,
  dl as p,
  xt as q,
  Dt as r,
  wa as s,
  ys as t,
  Nd as u,
  hn as v,
  An as w,
  Ri as x,
  vn as y,
  dh as z,
};
