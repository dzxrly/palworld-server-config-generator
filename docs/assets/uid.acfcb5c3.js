import {
  k as ne,
  c as p,
  h as F,
  l as qe,
  V as Ie,
  W as Ne,
  r as H,
  X as oe,
  Y as Te,
  A as Ue,
  g as _,
  Z as Ge,
  _ as fe,
  x as j,
  $ as ve,
  w as P,
  o as Ce,
  t as z,
  a0 as Xe,
  y as ee,
  a1 as Ye,
  a2 as K,
  a as Ze,
  a3 as Je,
  a4 as et,
  a5 as tt,
  a6 as nt,
  a7 as Se,
  a8 as Pe,
  a9 as ot,
  aa as me,
  ab as le,
  ac as lt,
  ad as it,
  ae as at,
} from './index.deb755dc.js';
var _t = ne({
  name: 'QItemSection',
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean,
  },
  setup(e, { slots: t }) {
    const n = p(
      () =>
        `q-item__section column q-item__section--${
          e.avatar === !0 || e.side === !0 || e.thumbnail === !0
            ? 'side'
            : 'main'
        }` +
        (e.top === !0
          ? ' q-item__section--top justify-start'
          : ' justify-center') +
        (e.avatar === !0 ? ' q-item__section--avatar' : '') +
        (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
        (e.noWrap === !0 ? ' q-item__section--nowrap' : '')
    );
    return () => F('div', { class: n.value }, qe(t.default));
  },
});
const He = { dark: { type: Boolean, default: null } };
function We(e, t) {
  return p(() => (e.dark === null ? t.dark.isActive : e.dark));
}
var Vt = ne({
  name: 'QItem',
  props: {
    ...He,
    ...Ie,
    tag: { type: String, default: 'div' },
    active: { type: Boolean, default: null },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean,
  },
  emits: ['click', 'keyup'],
  setup(e, { slots: t, emit: n }) {
    const {
        proxy: { $q: o },
      } = _(),
      l = We(e, o),
      {
        hasLink: c,
        linkAttrs: i,
        linkClass: u,
        linkTag: m,
        navigateOnClick: d,
      } = Ne(),
      s = H(null),
      g = H(null),
      b = p(() => e.clickable === !0 || c.value === !0 || e.tag === 'label'),
      a = p(() => e.disable !== !0 && b.value === !0),
      f = p(
        () =>
          'q-item q-item-type row no-wrap' +
          (e.dense === !0 ? ' q-item--dense' : '') +
          (l.value === !0 ? ' q-item--dark' : '') +
          (c.value === !0 && e.active === null
            ? u.value
            : e.active === !0
            ? ` q-item--active${
                e.activeClass !== void 0 ? ` ${e.activeClass}` : ''
              }`
            : '') +
          (e.disable === !0 ? ' disabled' : '') +
          (a.value === !0
            ? ' q-item--clickable q-link cursor-pointer ' +
              (e.manualFocus === !0
                ? 'q-manual-focusable'
                : 'q-focusable q-hoverable') +
              (e.focused === !0 ? ' q-manual-focusable--focused' : '')
            : '')
      ),
      q = p(() => {
        if (e.insetLevel === void 0) return null;
        const r = o.lang.rtl === !0 ? 'Right' : 'Left';
        return { ['padding' + r]: 16 + e.insetLevel * 56 + 'px' };
      });
    function E(r) {
      a.value === !0 &&
        (g.value !== null &&
          (r.qKeyEvent !== !0 && document.activeElement === s.value
            ? g.value.focus()
            : document.activeElement === g.value && s.value.focus()),
        d(r));
    }
    function T(r) {
      if (a.value === !0 && oe(r, [13, 32]) === !0) {
        Te(r), (r.qKeyEvent = !0);
        const x = new MouseEvent('click', r);
        (x.qKeyEvent = !0), s.value.dispatchEvent(x);
      }
      n('keyup', r);
    }
    function h() {
      const r = Ue(t.default, []);
      return (
        a.value === !0 &&
          r.unshift(
            F('div', { class: 'q-focus-helper', tabindex: -1, ref: g })
          ),
        r
      );
    }
    return () => {
      const r = {
        ref: s,
        class: f.value,
        style: q.value,
        role: 'listitem',
        onClick: E,
        onKeyup: T,
      };
      return (
        a.value === !0
          ? ((r.tabindex = e.tabindex || '0'), Object.assign(r, i.value))
          : b.value === !0 && (r['aria-disabled'] = 'true'),
        F(m.value, r, h())
      );
    };
  },
});
function ut() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        Ge.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
const st = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};
function rt({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: o, proxy: l, emit: c } = _(),
    i = H(null);
  let u = null;
  function m(a) {
    return i.value === null
      ? !1
      : a === void 0 || a.touches === void 0 || a.touches.length <= 1;
  }
  const d = {};
  n === void 0 &&
    (Object.assign(d, {
      hide(a) {
        l.hide(a);
      },
      toggle(a) {
        l.toggle(a), (a.qAnchorHandled = !0);
      },
      toggleKey(a) {
        oe(a, 13) === !0 && d.toggle(a);
      },
      contextClick(a) {
        l.hide(a),
          fe(a),
          j(() => {
            l.show(a), (a.qAnchorHandled = !0);
          });
      },
      prevent: fe,
      mobileTouch(a) {
        if ((d.mobileCleanup(a), m(a) !== !0)) return;
        l.hide(a), i.value.classList.add('non-selectable');
        const f = a.target;
        ve(d, 'anchor', [
          [f, 'touchmove', 'mobileCleanup', 'passive'],
          [f, 'touchend', 'mobileCleanup', 'passive'],
          [f, 'touchcancel', 'mobileCleanup', 'passive'],
          [i.value, 'contextmenu', 'prevent', 'notPassive'],
        ]),
          (u = setTimeout(() => {
            (u = null), l.show(a), (a.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(a) {
        i.value.classList.remove('non-selectable'),
          u !== null && (clearTimeout(u), (u = null)),
          e.value === !0 && a !== void 0 && ut();
      },
    }),
    (n = function (a = o.contextMenu) {
      if (o.noParentEvent === !0 || i.value === null) return;
      let f;
      a === !0
        ? l.$q.platform.is.mobile === !0
          ? (f = [[i.value, 'touchstart', 'mobileTouch', 'passive']])
          : (f = [
              [i.value, 'mousedown', 'hide', 'passive'],
              [i.value, 'contextmenu', 'contextClick', 'notPassive'],
            ])
        : (f = [
            [i.value, 'click', 'toggle', 'passive'],
            [i.value, 'keyup', 'toggleKey', 'passive'],
          ]),
        ve(d, 'anchor', f);
    }));
  function s() {
    Xe(d, 'anchor');
  }
  function g(a) {
    for (i.value = a; i.value.classList.contains('q-anchor--skip'); )
      i.value = i.value.parentNode;
    n();
  }
  function b() {
    if (o.target === !1 || o.target === '' || l.$el.parentNode === null)
      i.value = null;
    else if (o.target === !0) g(l.$el.parentNode);
    else {
      let a = o.target;
      if (typeof o.target == 'string')
        try {
          a = document.querySelector(o.target);
        } catch {
          a = void 0;
        }
      a != null
        ? ((i.value = a.$el || a), n())
        : ((i.value = null),
          console.error(`Anchor: target "${o.target}" not found`));
    }
  }
  return (
    P(
      () => o.contextMenu,
      (a) => {
        i.value !== null && (s(), n(a));
      }
    ),
    P(
      () => o.target,
      () => {
        i.value !== null && s(), b();
      }
    ),
    P(
      () => o.noParentEvent,
      (a) => {
        i.value !== null && (a === !0 ? s() : n());
      }
    ),
    Ce(() => {
      b(),
        t !== !0 &&
          o.modelValue === !0 &&
          i.value === null &&
          c('update:modelValue', !1);
    }),
    z(() => {
      u !== null && clearTimeout(u), s();
    }),
    { anchorEl: i, canShow: m, anchorEvents: d }
  );
}
function ct(e, t) {
  const n = H(null);
  let o;
  function l(u, m) {
    const d = `${m !== void 0 ? 'add' : 'remove'}EventListener`,
      s = m !== void 0 ? m : o;
    u !== window && u[d]('scroll', s, ee.passive),
      window[d]('scroll', s, ee.passive),
      (o = m);
  }
  function c() {
    n.value !== null && (l(n.value), (n.value = null));
  }
  const i = P(
    () => e.noParentEvent,
    () => {
      n.value !== null && (c(), t());
    }
  );
  return (
    z(i),
    { localScrollTarget: n, unconfigureScrollTarget: c, changeScrollEvent: l }
  );
}
const dt = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  ft = ['beforeShow', 'show', 'beforeHide', 'hide'];
function vt({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: o,
  handleHide: l,
  processOnMount: c,
}) {
  const i = _(),
    { props: u, emit: m, proxy: d } = i;
  let s;
  function g(h) {
    e.value === !0 ? f(h) : b(h);
  }
  function b(h) {
    if (
      u.disable === !0 ||
      (h !== void 0 && h.qAnchorHandled === !0) ||
      (t !== void 0 && t(h) !== !0)
    )
      return;
    const r = u['onUpdate:modelValue'] !== void 0;
    r === !0 &&
      (m('update:modelValue', !0),
      (s = h),
      j(() => {
        s === h && (s = void 0);
      })),
      (u.modelValue === null || r === !1) && a(h);
  }
  function a(h) {
    e.value !== !0 &&
      ((e.value = !0), m('beforeShow', h), o !== void 0 ? o(h) : m('show', h));
  }
  function f(h) {
    if (u.disable === !0) return;
    const r = u['onUpdate:modelValue'] !== void 0;
    r === !0 &&
      (m('update:modelValue', !1),
      (s = h),
      j(() => {
        s === h && (s = void 0);
      })),
      (u.modelValue === null || r === !1) && q(h);
  }
  function q(h) {
    e.value !== !1 &&
      ((e.value = !1), m('beforeHide', h), l !== void 0 ? l(h) : m('hide', h));
  }
  function E(h) {
    u.disable === !0 && h === !0
      ? u['onUpdate:modelValue'] !== void 0 && m('update:modelValue', !1)
      : (h === !0) !== e.value && (h === !0 ? a : q)(s);
  }
  P(() => u.modelValue, E),
    n !== void 0 &&
      Ye(i) === !0 &&
      P(
        () => d.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && f();
        }
      ),
    c === !0 &&
      Ce(() => {
        E(u.modelValue);
      });
  const T = { show: b, hide: f, toggle: g };
  return Object.assign(d, T), T;
}
let W = [],
  D = [];
function Me(e) {
  D = D.filter((t) => t !== e);
}
function mt(e) {
  Me(e), D.push(e);
}
function he(e) {
  Me(e), D.length === 0 && W.length !== 0 && (W[W.length - 1](), (W = []));
}
function ht(e) {
  D.length === 0 ? e() : W.push(e);
}
function Dt(e) {
  W = W.filter((t) => t !== e);
}
const A = [];
function zt(e) {
  return A.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function Le(e, t) {
  do {
    if (e.$options.name === 'QMenu') {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return K(e);
    } else if (e.__qPortal === !0) {
      const n = K(e);
      return n !== void 0 && n.$options.name === 'QPopupProxy'
        ? (e.hide(t), n)
        : e;
    }
    e = K(e);
  } while (e != null);
}
function Ot(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === 'QMenu')) {
        e = Le(e, t);
        continue;
      }
      e.hide(t);
    }
    e = K(e);
  }
}
function gt(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === 'QGlobalDialog') return !0;
    if (e.type.name === 'QDialog' || e.type.name === 'QMenu') return !1;
    e = e.parent;
  }
  return !1;
}
function bt(e, t, n, o) {
  const l = H(!1),
    c = H(!1);
  let i = null;
  const u = {},
    m = o === 'dialog' && gt(e);
  function d(g) {
    if (g === !0) {
      he(u), (c.value = !0);
      return;
    }
    (c.value = !1),
      l.value === !1 &&
        (m === !1 && i === null && (i = tt(!1, o)),
        (l.value = !0),
        A.push(e.proxy),
        mt(u));
  }
  function s(g) {
    if (((c.value = !1), g !== !0)) return;
    he(u), (l.value = !1);
    const b = A.indexOf(e.proxy);
    b !== -1 && A.splice(b, 1), i !== null && (nt(i), (i = null));
  }
  return (
    Ze(() => {
      s(!0);
    }),
    (e.proxy.__qPortal = !0),
    Je(e.proxy, 'contentEl', () => t.value),
    {
      showPortal: d,
      hidePortal: s,
      portalIsActive: l,
      portalIsAccessible: c,
      renderPortal: () =>
        m === !0 ? n() : l.value === !0 ? [F(et, { to: i }, n())] : void 0,
    }
  );
}
const wt = {
  transitionShow: { type: String, default: 'fade' },
  transitionHide: { type: String, default: 'fade' },
  transitionDuration: { type: [String, Number], default: 300 },
};
function yt(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: p(() => {
      const o = `q-transition--${e.transitionShow || t()}`,
        l = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${o}-enter-from`,
        enterActiveClass: `${o}-enter-active`,
        enterToClass: `${o}-enter-to`,
        leaveFromClass: `${l}-leave-from`,
        leaveActiveClass: `${l}-leave-active`,
        leaveToClass: `${l}-leave-to`,
      };
    }),
    transitionStyle: p(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
function pt() {
  let e;
  const t = _();
  function n() {
    e = void 0;
  }
  return (
    Se(n),
    z(n),
    {
      removeTick: n,
      registerTick(o) {
        (e = o),
          j(() => {
            e === o && (Pe(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
function xt() {
  let e = null;
  const t = _();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Se(n),
    z(n),
    {
      removeTimeout: n,
      registerTimeout(o, l) {
        n(), Pe(t) === !1 && (e = setTimeout(o, l));
      },
    }
  );
}
const kt = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function Et(e, t) {
  let n = ot(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return kt.includes(n) ? window : n;
}
function Qt(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Kt(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let O;
function qt() {
  if (O !== void 0) return O;
  const e = document.createElement('p'),
    t = document.createElement('div');
  me(e, { width: '100%', height: '200px' }),
    me(t, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = 'scroll';
  let o = e.offsetWidth;
  return n === o && (o = t.clientWidth), t.remove(), (O = n - o), O;
}
function jt(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-y']))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-x']));
}
const M = [];
let R;
function Tt(e) {
  R = e.keyCode === 27;
}
function Ct() {
  R === !0 && (R = !1);
}
function St(e) {
  R === !0 && ((R = !1), oe(e, 27) === !0 && M[M.length - 1](e));
}
function Be(e) {
  window[e]('keydown', Tt),
    window[e]('blur', Ct),
    window[e]('keyup', St),
    (R = !1);
}
function Pt(e) {
  le.is.desktop === !0 && (M.push(e), M.length === 1 && Be('addEventListener'));
}
function ge(e) {
  const t = M.indexOf(e);
  t > -1 && (M.splice(t, 1), M.length === 0 && Be('removeEventListener'));
}
const L = [];
function $e(e) {
  L[L.length - 1](e);
}
function Ht(e) {
  le.is.desktop === !0 &&
    (L.push(e),
    L.length === 1 && document.body.addEventListener('focusin', $e));
}
function Wt(e) {
  const t = L.indexOf(e);
  t > -1 &&
    (L.splice(t, 1),
    L.length === 0 && document.body.removeEventListener('focusin', $e));
}
const { notPassiveCapture: I } = ee,
  B = [];
function N(e) {
  const t = e.target;
  if (
    t === void 0 ||
    t.nodeType === 8 ||
    t.classList.contains('no-pointer-events') === !0
  )
    return;
  let n = A.length - 1;
  for (; n >= 0; ) {
    const o = A[n].$;
    if (o.type.name === 'QTooltip') {
      n--;
      continue;
    }
    if (o.type.name !== 'QDialog') break;
    if (o.props.seamless !== !0) return;
    n--;
  }
  for (let o = B.length - 1; o >= 0; o--) {
    const l = B[o];
    if (
      (l.anchorEl.value === null || l.anchorEl.value.contains(t) === !1) &&
      (t === document.body ||
        (l.innerRef.value !== null && l.innerRef.value.contains(t) === !1))
    )
      (e.qClickOutside = !0), l.onClickOutside(e);
    else return;
  }
}
function Mt(e) {
  B.push(e),
    B.length === 1 &&
      (document.addEventListener('mousedown', N, I),
      document.addEventListener('touchstart', N, I));
}
function be(e) {
  const t = B.findIndex((n) => n === e);
  t > -1 &&
    (B.splice(t, 1),
    B.length === 0 &&
      (document.removeEventListener('mousedown', N, I),
      document.removeEventListener('touchstart', N, I)));
}
let we, ye;
function pe(e) {
  const t = e.split(' ');
  return t.length !== 2
    ? !1
    : ['top', 'center', 'bottom'].includes(t[0]) !== !0
    ? (console.error(
        'Anchor/Self position must start with one of top/center/bottom'
      ),
      !1)
    : ['left', 'middle', 'right', 'start', 'end'].includes(t[1]) !== !0
    ? (console.error(
        'Anchor/Self position must end with one of left/middle/right/start/end'
      ),
      !1)
    : !0;
}
function Lt(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != 'number' || typeof e[1] != 'number')
    : !0;
}
const te = {
  'start#ltr': 'left',
  'start#rtl': 'right',
  'end#ltr': 'right',
  'end#rtl': 'left',
};
['left', 'middle', 'right'].forEach((e) => {
  (te[`${e}#ltr`] = e), (te[`${e}#rtl`] = e);
});
function xe(e, t) {
  const n = e.split(' ');
  return {
    vertical: n[0],
    horizontal: te[`${n[1]}#${t === !0 ? 'rtl' : 'ltr'}`],
  };
}
function Bt(e, t) {
  let {
    top: n,
    left: o,
    right: l,
    bottom: c,
    width: i,
    height: u,
  } = e.getBoundingClientRect();
  return (
    t !== void 0 &&
      ((n -= t[1]),
      (o -= t[0]),
      (c += t[1]),
      (l += t[0]),
      (i += t[0]),
      (u += t[1])),
    {
      top: n,
      bottom: c,
      height: u,
      left: o,
      right: l,
      width: i,
      middle: o + (l - o) / 2,
      center: n + (c - n) / 2,
    }
  );
}
function $t(e, t, n) {
  let { top: o, left: l } = e.getBoundingClientRect();
  return (
    (o += t.top),
    (l += t.left),
    n !== void 0 && ((o += n[1]), (l += n[0])),
    {
      top: o,
      bottom: o + 1,
      height: 1,
      left: l,
      right: l + 1,
      width: 1,
      middle: l,
      center: o,
    }
  );
}
function At(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function ke(e, t, n, o) {
  return {
    top: e[n.vertical] - t[o.vertical],
    left: e[n.horizontal] - t[o.horizontal],
  };
}
function Ae(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ae(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: o,
    anchorEl: l,
    anchorOrigin: c,
    selfOrigin: i,
    absoluteOffset: u,
    fit: m,
    cover: d,
    maxHeight: s,
    maxWidth: g,
  } = e;
  if (le.is.ios === !0 && window.visualViewport !== void 0) {
    const $ = document.body.style,
      { offsetLeft: k, offsetTop: C } = window.visualViewport;
    k !== we && ($.setProperty('--q-pe-left', k + 'px'), (we = k)),
      C !== ye && ($.setProperty('--q-pe-top', C + 'px'), (ye = C));
  }
  const { scrollLeft: b, scrollTop: a } = n,
    f = u === void 0 ? Bt(l, d === !0 ? [0, 0] : o) : $t(l, u, o);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: g || '100vw',
    maxHeight: s || '100vh',
    visibility: 'visible',
  });
  const { offsetWidth: q, offsetHeight: E } = n,
    { elWidth: T, elHeight: h } =
      m === !0 || d === !0
        ? {
            elWidth: Math.max(f.width, q),
            elHeight: d === !0 ? Math.max(f.height, E) : E,
          }
        : { elWidth: q, elHeight: E };
  let r = { maxWidth: g, maxHeight: s };
  (m === !0 || d === !0) &&
    ((r.minWidth = f.width + 'px'),
    d === !0 && (r.minHeight = f.height + 'px')),
    Object.assign(n.style, r);
  const x = At(T, h);
  let w = ke(f, x, c, i);
  if (u === void 0 || o === void 0) Z(w, f, x, c, i);
  else {
    const { top: $, left: k } = w;
    Z(w, f, x, c, i);
    let C = !1;
    if (w.top !== $) {
      C = !0;
      const S = 2 * o[1];
      (f.center = f.top -= S), (f.bottom -= S + 2);
    }
    if (w.left !== k) {
      C = !0;
      const S = 2 * o[0];
      (f.middle = f.left -= S), (f.right -= S + 2);
    }
    C === !0 && ((w = ke(f, x, c, i)), Z(w, f, x, c, i));
  }
  (r = { top: w.top + 'px', left: w.left + 'px' }),
    w.maxHeight !== void 0 &&
      ((r.maxHeight = w.maxHeight + 'px'),
      f.height > w.maxHeight && (r.minHeight = r.maxHeight)),
    w.maxWidth !== void 0 &&
      ((r.maxWidth = w.maxWidth + 'px'),
      f.width > w.maxWidth && (r.minWidth = r.maxWidth)),
    Object.assign(n.style, r),
    n.scrollTop !== a && (n.scrollTop = a),
    n.scrollLeft !== b && (n.scrollLeft = b);
}
function Z(e, t, n, o, l) {
  const c = n.bottom,
    i = n.right,
    u = qt(),
    m = window.innerHeight - u,
    d = document.body.clientWidth;
  if (e.top < 0 || e.top + c > m)
    if (l.vertical === 'center')
      (e.top = t[o.vertical] > m / 2 ? Math.max(0, m - c) : 0),
        (e.maxHeight = Math.min(c, m));
    else if (t[o.vertical] > m / 2) {
      const s = Math.min(
        m,
        o.vertical === 'center'
          ? t.center
          : o.vertical === l.vertical
          ? t.bottom
          : t.top
      );
      (e.maxHeight = Math.min(c, s)), (e.top = Math.max(0, s - c));
    } else
      (e.top = Math.max(
        0,
        o.vertical === 'center'
          ? t.center
          : o.vertical === l.vertical
          ? t.top
          : t.bottom
      )),
        (e.maxHeight = Math.min(c, m - e.top));
  if (e.left < 0 || e.left + i > d)
    if (((e.maxWidth = Math.min(i, d)), l.horizontal === 'middle'))
      e.left = t[o.horizontal] > d / 2 ? Math.max(0, d - i) : 0;
    else if (t[o.horizontal] > d / 2) {
      const s = Math.min(
        d,
        o.horizontal === 'middle'
          ? t.middle
          : o.horizontal === l.horizontal
          ? t.right
          : t.left
      );
      (e.maxWidth = Math.min(i, s)), (e.left = Math.max(0, s - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        o.horizontal === 'middle'
          ? t.middle
          : o.horizontal === l.horizontal
          ? t.left
          : t.right
      )),
        (e.maxWidth = Math.min(i, d - e.left));
}
var It = ne({
  name: 'QMenu',
  inheritAttrs: !1,
  props: {
    ...st,
    ...dt,
    ...He,
    ...wt,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: pe },
    self: { type: String, validator: pe },
    offset: { type: Array, validator: Lt },
    scrollTarget: { default: void 0 },
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...ft, 'click', 'escapeKey'],
  setup(e, { slots: t, emit: n, attrs: o }) {
    let l = null,
      c,
      i,
      u;
    const m = _(),
      { proxy: d } = m,
      { $q: s } = d,
      g = H(null),
      b = H(!1),
      a = p(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      f = We(e, s),
      { registerTick: q, removeTick: E } = pt(),
      { registerTimeout: T } = xt(),
      { transitionProps: h, transitionStyle: r } = yt(e),
      {
        localScrollTarget: x,
        changeScrollEvent: w,
        unconfigureScrollTarget: $,
      } = ct(e, ce),
      { anchorEl: k, canShow: C } = rt({ showing: b }),
      { hide: S } = vt({
        showing: b,
        canShow: C,
        handleShow: De,
        handleHide: ze,
        hideOnRouteChange: a,
        processOnMount: !0,
      }),
      {
        showPortal: ie,
        hidePortal: ae,
        renderPortal: Fe,
      } = bt(m, g, Qe, 'menu'),
      U = {
        anchorEl: k,
        innerRef: g,
        onClickOutside(v) {
          if (e.persistent !== !0 && b.value === !0)
            return (
              S(v),
              (v.type === 'touchstart' ||
                v.target.classList.contains('q-dialog__backdrop')) &&
                Te(v),
              !0
            );
        },
      },
      ue = p(() =>
        xe(
          e.anchor || (e.cover === !0 ? 'center middle' : 'bottom start'),
          s.lang.rtl
        )
      ),
      Re = p(() =>
        e.cover === !0 ? ue.value : xe(e.self || 'top start', s.lang.rtl)
      ),
      _e = p(
        () =>
          (e.square === !0 ? ' q-menu--square' : '') +
          (f.value === !0 ? ' q-menu--dark q-dark' : '')
      ),
      Ve = p(() => (e.autoClose === !0 ? { onClick: Oe } : {})),
      se = p(() => b.value === !0 && e.persistent !== !0);
    P(se, (v) => {
      v === !0 ? (Pt(X), Mt(U)) : (ge(X), be(U));
    });
    function G() {
      ht(() => {
        let v = g.value;
        v &&
          v.contains(document.activeElement) !== !0 &&
          ((v =
            v.querySelector(
              '[autofocus][tabindex], [data-autofocus][tabindex]'
            ) ||
            v.querySelector(
              '[autofocus] [tabindex], [data-autofocus] [tabindex]'
            ) ||
            v.querySelector('[autofocus], [data-autofocus]') ||
            v),
          v.focus({ preventScroll: !0 }));
      });
    }
    function De(v) {
      if (
        ((l = e.noRefocus === !1 ? document.activeElement : null),
        Ht(de),
        ie(),
        ce(),
        (c = void 0),
        v !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const Y = lt(v);
        if (Y.left !== void 0) {
          const { top: Ke, left: je } = k.value.getBoundingClientRect();
          c = { left: Y.left - je, top: Y.top - Ke };
        }
      }
      i === void 0 &&
        (i = P(
          () =>
            s.screen.width +
            '|' +
            s.screen.height +
            '|' +
            e.self +
            '|' +
            e.anchor +
            '|' +
            s.lang.rtl,
          V
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        q(() => {
          V(), e.noFocus !== !0 && G();
        }),
        T(() => {
          s.platform.is.ios === !0 && ((u = e.autoClose), g.value.click()),
            V(),
            ie(!0),
            n('show', v);
        }, e.transitionDuration);
    }
    function ze(v) {
      E(),
        ae(),
        re(!0),
        l !== null &&
          (v === void 0 || v.qClickOutside !== !0) &&
          ((
            (v && v.type.indexOf('key') === 0
              ? l.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || l
          ).focus(),
          (l = null)),
        T(() => {
          ae(!0), n('hide', v);
        }, e.transitionDuration);
    }
    function re(v) {
      (c = void 0),
        i !== void 0 && (i(), (i = void 0)),
        (v === !0 || b.value === !0) && (Wt(de), $(), be(U), ge(X)),
        v !== !0 && (l = null);
    }
    function ce() {
      (k.value !== null || e.scrollTarget !== void 0) &&
        ((x.value = Et(k.value, e.scrollTarget)), w(x.value, V));
    }
    function Oe(v) {
      u !== !0 ? (Le(d, v), n('click', v)) : (u = !1);
    }
    function de(v) {
      se.value === !0 &&
        e.noFocus !== !0 &&
        at(g.value, v.target) !== !0 &&
        G();
    }
    function X(v) {
      n('escapeKey'), S(v);
    }
    function V() {
      Ae({
        targetEl: g.value,
        offset: e.offset,
        anchorEl: k.value,
        anchorOrigin: ue.value,
        selfOrigin: Re.value,
        absoluteOffset: c,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth,
      });
    }
    function Qe() {
      return F(it, h.value, () =>
        b.value === !0
          ? F(
              'div',
              {
                role: 'menu',
                ...o,
                ref: g,
                tabindex: -1,
                class: ['q-menu q-position-engine scroll' + _e.value, o.class],
                style: [o.style, r.value],
                ...Ve.value,
              },
              qe(t.default)
            )
          : null
      );
    }
    return z(re), Object.assign(d, { focus: G, updatePosition: V }), Fe;
  },
});
let J,
  Q = 0;
const y = new Array(256);
for (let e = 0; e < 256; e++) y[e] = (e + 256).toString(16).substring(1);
const Ft = (() => {
    const e =
      typeof crypto != 'undefined'
        ? crypto
        : typeof window != 'undefined'
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const n = new Uint8Array(t);
          return e.getRandomValues(n), n;
        };
    }
    return (t) => {
      const n = [];
      for (let o = t; o > 0; o--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  Ee = 4096;
function Nt() {
  (J === void 0 || Q + 16 > Ee) && ((Q = 0), (J = Ft(Ee)));
  const e = Array.prototype.slice.call(J, Q, (Q += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    y[e[0]] +
      y[e[1]] +
      y[e[2]] +
      y[e[3]] +
      '-' +
      y[e[4]] +
      y[e[5]] +
      '-' +
      y[e[6]] +
      y[e[7]] +
      '-' +
      y[e[8]] +
      y[e[9]] +
      '-' +
      y[e[10]] +
      y[e[11]] +
      y[e[12]] +
      y[e[13]] +
      y[e[14]] +
      y[e[15]]
  );
}
export {
  It as Q,
  We as a,
  wt as b,
  Nt as c,
  Qt as d,
  Kt as e,
  qt as f,
  Et as g,
  Vt as h,
  _t as i,
  ht as j,
  jt as k,
  dt as l,
  ft as m,
  xt as n,
  pt as o,
  yt as p,
  bt as q,
  Dt as r,
  vt as s,
  Wt as t,
  He as u,
  ge as v,
  Ht as w,
  Pt as x,
  zt as y,
  Ot as z,
};
