import {
  u as te,
  a as ne,
  b as oe,
  c as ae,
  Q as le,
  g as ie,
  d as re,
  e as se,
  f as O,
  h as ue,
  i as ce,
} from './uid.acfcb5c3.js';
import {
  k as q,
  c as f,
  h,
  l as V,
  g as L,
  u as K,
  r as p,
  w as B,
  o as H,
  Q as de,
  m as A,
  n as fe,
  p as ve,
  q as J,
  t as T,
  v as X,
  x as I,
  y as E,
  z as $,
  A as he,
  i as Y,
  B as F,
  C as Z,
  D as ge,
  E as P,
  a as be,
  G as me,
  d as we,
  H as ye,
  I as N,
  J as pe,
  K as C,
  j as _,
  L as Se,
  M as W,
  N as Be,
  O as qe,
  P as xe,
  F as ze,
  R as Ce,
  S as _e,
  U as Le,
} from './index.deb755dc.js';
import { u as $e } from './vue-i18n.runtime.c21bafc3.js';
var Qe = q({
    name: 'QList',
    props: {
      ...te,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: 'div' },
    },
    setup(e, { slots: c }) {
      const o = L(),
        n = ne(e, o.proxy.$q),
        a = f(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (n.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : '')
        );
      return () => h(e.tag, { class: a.value }, V(c.default));
    },
  }),
  Re = q({
    name: 'QBtnGroup',
    props: {
      unelevated: Boolean,
      outline: Boolean,
      flat: Boolean,
      rounded: Boolean,
      square: Boolean,
      push: Boolean,
      stretch: Boolean,
      glossy: Boolean,
      spread: Boolean,
    },
    setup(e, { slots: c }) {
      const o = f(() => {
        const n = [
          'unelevated',
          'outline',
          'flat',
          'rounded',
          'square',
          'push',
          'stretch',
          'glossy',
        ]
          .filter((a) => e[a] === !0)
          .map((a) => `q-btn-group--${a}`)
          .join(' ');
        return (
          `q-btn-group row no-wrap${n.length !== 0 ? ' ' + n : ''}` +
          (e.spread === !0 ? ' q-btn-group--spread' : ' inline')
        );
      });
      return () => h('div', { class: o.value }, V(c.default));
    },
  });
const De = Object.keys(K),
  He = (e) =>
    De.reduce((c, o) => {
      const n = e[o];
      return n !== void 0 && (c[o] = n), c;
    }, {});
var Pe = q({
  name: 'QBtnDropdown',
  props: {
    ...K,
    ...oe,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: { type: String, default: 'bottom end' },
    menuSelf: { type: String, default: 'top end' },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String,
  },
  emits: [
    'update:modelValue',
    'click',
    'beforeShow',
    'show',
    'beforeHide',
    'hide',
  ],
  setup(e, { slots: c, emit: o }) {
    const { proxy: n } = L(),
      a = p(e.modelValue),
      i = p(null),
      u = ae(),
      v = f(() => {
        const t = {
          'aria-expanded': a.value === !0 ? 'true' : 'false',
          'aria-haspopup': 'true',
          'aria-controls': u,
          'aria-label':
            e.toggleAriaLabel ||
            n.$q.lang.label[a.value === !0 ? 'collapse' : 'expand'](e.label),
        };
        return (
          (e.disable === !0 ||
            (e.split === !1 && e.disableMainBtn === !0) ||
            e.disableDropdown === !0) &&
            (t['aria-disabled'] = 'true'),
          t
        );
      }),
      s = f(
        () =>
          'q-btn-dropdown__arrow' +
          (a.value === !0 && e.noIconAnimation === !1 ? ' rotate-180' : '') +
          (e.split === !1 ? ' q-btn-dropdown__arrow-container' : '')
      ),
      r = f(() => fe(e)),
      g = f(() => He(e));
    B(
      () => e.modelValue,
      (t) => {
        i.value !== null && i.value[t ? 'show' : 'hide']();
      }
    ),
      B(() => e.split, b);
    function w(t) {
      (a.value = !0), o('beforeShow', t);
    }
    function S(t) {
      o('show', t), o('update:modelValue', !0);
    }
    function d(t) {
      (a.value = !1), o('beforeHide', t);
    }
    function y(t) {
      o('hide', t), o('update:modelValue', !1);
    }
    function Q(t) {
      o('click', t);
    }
    function R(t) {
      ve(t), b(), o('click', t);
    }
    function x(t) {
      i.value !== null && i.value.toggle(t);
    }
    function l(t) {
      i.value !== null && i.value.show(t);
    }
    function b(t) {
      i.value !== null && i.value.hide(t);
    }
    return (
      Object.assign(n, { show: l, hide: b, toggle: x }),
      H(() => {
        e.modelValue === !0 && l();
      }),
      () => {
        const t = [
          h(de, {
            class: s.value,
            name: e.dropdownIcon || n.$q.iconSet.arrow.dropdown,
          }),
        ];
        return (
          e.disableDropdown !== !0 &&
            t.push(
              h(
                le,
                {
                  ref: i,
                  id: u,
                  class: e.contentClass,
                  style: e.contentStyle,
                  cover: e.cover,
                  fit: !0,
                  persistent: e.persistent,
                  noRouteDismiss: e.noRouteDismiss,
                  autoClose: e.autoClose,
                  anchor: e.menuAnchor,
                  self: e.menuSelf,
                  offset: e.menuOffset,
                  separateClosePopup: !0,
                  transitionShow: e.transitionShow,
                  transitionHide: e.transitionHide,
                  transitionDuration: e.transitionDuration,
                  onBeforeShow: w,
                  onShow: S,
                  onBeforeHide: d,
                  onHide: y,
                },
                c.default
              )
            ),
          e.split === !1
            ? h(
                A,
                {
                  class: 'q-btn-dropdown q-btn-dropdown--simple',
                  ...g.value,
                  ...v.value,
                  disable: e.disable === !0 || e.disableMainBtn === !0,
                  noWrap: !0,
                  round: !1,
                  onClick: Q,
                },
                { default: () => V(c.label, []).concat(t), loading: c.loading }
              )
            : h(
                Re,
                {
                  class:
                    'q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item',
                  rounded: e.rounded,
                  square: e.square,
                  ...r.value,
                  glossy: e.glossy,
                  stretch: e.stretch,
                },
                () => [
                  h(
                    A,
                    {
                      class: 'q-btn-dropdown--current',
                      ...g.value,
                      disable: e.disable === !0 || e.disableMainBtn === !0,
                      noWrap: !0,
                      round: !1,
                      onClick: R,
                    },
                    { default: c.label, loading: c.loading }
                  ),
                  h(
                    A,
                    {
                      class: 'q-btn-dropdown__arrow-container q-anchor--skip',
                      ...v.value,
                      ...r.value,
                      disable: e.disable === !0 || e.disableDropdown === !0,
                      rounded: e.rounded,
                      color: e.color,
                      textColor: e.textColor,
                      dense: e.dense,
                      size: e.size,
                      padding: e.padding,
                      ripple: e.ripple,
                    },
                    () => t
                  ),
                ]
              )
        );
      }
    );
  },
});
function Te() {
  const e = p(!J.value);
  return (
    e.value === !1 &&
      H(() => {
        e.value = !0;
      }),
    e
  );
}
const ee = typeof ResizeObserver != 'undefined',
  U =
    ee === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        };
var M = q({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: c }) {
      let o = null,
        n,
        a = { width: -1, height: -1 };
      function i(s) {
        s === !0 || e.debounce === 0 || e.debounce === '0'
          ? u()
          : o === null && (o = setTimeout(u, e.debounce));
      }
      function u() {
        if ((o !== null && (clearTimeout(o), (o = null)), n)) {
          const { offsetWidth: s, offsetHeight: r } = n;
          (s !== a.width || r !== a.height) &&
            ((a = { width: s, height: r }), c('resize', a));
        }
      }
      const { proxy: v } = L();
      if (((v.trigger = i), ee === !0)) {
        let s;
        const r = (g) => {
          (n = v.$el.parentNode),
            n
              ? ((s = new ResizeObserver(i)), s.observe(n), u())
              : g !== !0 &&
                I(() => {
                  r(!0);
                });
        };
        return (
          H(() => {
            r();
          }),
          T(() => {
            o !== null && clearTimeout(o),
              s !== void 0 &&
                (s.disconnect !== void 0
                  ? s.disconnect()
                  : n && s.unobserve(n));
          }),
          X
        );
      } else {
        let g = function () {
            o !== null && (clearTimeout(o), (o = null)),
              r !== void 0 &&
                (r.removeEventListener !== void 0 &&
                  r.removeEventListener('resize', i, E.passive),
                (r = void 0));
          },
          w = function () {
            g(),
              n &&
                n.contentDocument &&
                ((r = n.contentDocument.defaultView),
                r.addEventListener('resize', i, E.passive),
                u());
          };
        const s = Te();
        let r;
        return (
          H(() => {
            I(() => {
              (n = v.$el), n && w();
            });
          }),
          T(g),
          () => {
            if (s.value === !0)
              return h('object', {
                style: U.style,
                tabindex: -1,
                type: 'text/html',
                data: U.url,
                'aria-hidden': 'true',
                onLoad: w,
              });
          }
        );
      }
    },
  }),
  Ve = q({
    name: 'QHeader',
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ['reveal', 'focusin'],
    setup(e, { slots: c, emit: o }) {
      const {
          proxy: { $q: n },
        } = L(),
        a = Y(F, $);
      if (a === $)
        return console.error('QHeader needs to be child of QLayout'), $;
      const i = p(parseInt(e.heightHint, 10)),
        u = p(!0),
        v = f(
          () =>
            e.reveal === !0 ||
            a.view.value.indexOf('H') > -1 ||
            (n.platform.is.ios && a.isContainer.value === !0)
        ),
        s = f(() => {
          if (e.modelValue !== !0) return 0;
          if (v.value === !0) return u.value === !0 ? i.value : 0;
          const l = i.value - a.scroll.value.position;
          return l > 0 ? l : 0;
        }),
        r = f(() => e.modelValue !== !0 || (v.value === !0 && u.value !== !0)),
        g = f(() => e.modelValue === !0 && r.value === !0 && e.reveal === !0),
        w = f(
          () =>
            'q-header q-layout__section--marginal ' +
            (v.value === !0 ? 'fixed' : 'absolute') +
            '-top' +
            (e.bordered === !0 ? ' q-header--bordered' : '') +
            (r.value === !0 ? ' q-header--hidden' : '') +
            (e.modelValue !== !0 ? ' q-layout--prevent-focus' : '')
        ),
        S = f(() => {
          const l = a.rows.value.top,
            b = {};
          return (
            l[0] === 'l' &&
              a.left.space === !0 &&
              (b[n.lang.rtl === !0 ? 'right' : 'left'] = `${a.left.size}px`),
            l[2] === 'r' &&
              a.right.space === !0 &&
              (b[n.lang.rtl === !0 ? 'left' : 'right'] = `${a.right.size}px`),
            b
          );
        });
      function d(l, b) {
        a.update('header', l, b);
      }
      function y(l, b) {
        l.value !== b && (l.value = b);
      }
      function Q({ height: l }) {
        y(i, l), d('size', l);
      }
      function R(l) {
        g.value === !0 && y(u, !0), o('focusin', l);
      }
      B(
        () => e.modelValue,
        (l) => {
          d('space', l), y(u, !0), a.animate();
        }
      ),
        B(s, (l) => {
          d('offset', l);
        }),
        B(
          () => e.reveal,
          (l) => {
            l === !1 && y(u, e.modelValue);
          }
        ),
        B(u, (l) => {
          a.animate(), o('reveal', l);
        }),
        B(a.scroll, (l) => {
          e.reveal === !0 &&
            y(
              u,
              l.direction === 'up' ||
                l.position <= e.revealOffset ||
                l.position - l.inflectionPoint < 100
            );
        });
      const x = {};
      return (
        (a.instances.header = x),
        e.modelValue === !0 && d('size', i.value),
        d('space', e.modelValue),
        d('offset', s.value),
        T(() => {
          a.instances.header === x &&
            ((a.instances.header = void 0),
            d('size', 0),
            d('offset', 0),
            d('space', !1));
        }),
        () => {
          const l = he(c.default, []);
          return (
            e.elevated === !0 &&
              l.push(
                h('div', {
                  class:
                    'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                })
              ),
            l.push(h(M, { debounce: 0, onResize: Q })),
            h('header', { class: w.value, style: S.value, onFocusin: R }, l)
          );
        }
      );
    },
  }),
  ke = q({
    name: 'QPageContainer',
    setup(e, { slots: c }) {
      const {
          proxy: { $q: o },
        } = L(),
        n = Y(F, $);
      if (n === $)
        return console.error('QPageContainer needs to be child of QLayout'), $;
      Z(ge, !0);
      const a = f(() => {
        const i = {};
        return (
          n.header.space === !0 && (i.paddingTop = `${n.header.size}px`),
          n.right.space === !0 &&
            (i[
              `padding${o.lang.rtl === !0 ? 'Left' : 'Right'}`
            ] = `${n.right.size}px`),
          n.footer.space === !0 && (i.paddingBottom = `${n.footer.size}px`),
          n.left.space === !0 &&
            (i[
              `padding${o.lang.rtl === !0 ? 'Right' : 'Left'}`
            ] = `${n.left.size}px`),
          i
        );
      });
      return () =>
        h('div', { class: 'q-page-container', style: a.value }, V(c.default));
    },
  });
const { passive: G } = E,
  Oe = ['both', 'horizontal', 'vertical'];
var Ae = q({
    name: 'QScrollObserver',
    props: {
      axis: {
        type: String,
        validator: (e) => Oe.includes(e),
        default: 'vertical',
      },
      debounce: [String, Number],
      scrollTarget: { default: void 0 },
    },
    emits: ['scroll'],
    setup(e, { emit: c }) {
      const o = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let n = null,
        a,
        i;
      B(
        () => e.scrollTarget,
        () => {
          s(), v();
        }
      );
      function u() {
        n !== null && n();
        const w = Math.max(0, re(a)),
          S = se(a),
          d = { top: w - o.position.top, left: S - o.position.left };
        if (
          (e.axis === 'vertical' && d.top === 0) ||
          (e.axis === 'horizontal' && d.left === 0)
        )
          return;
        const y =
          Math.abs(d.top) >= Math.abs(d.left)
            ? d.top < 0
              ? 'up'
              : 'down'
            : d.left < 0
            ? 'left'
            : 'right';
        (o.position = { top: w, left: S }),
          (o.directionChanged = o.direction !== y),
          (o.delta = d),
          o.directionChanged === !0 &&
            ((o.direction = y), (o.inflectionPoint = o.position)),
          c('scroll', { ...o });
      }
      function v() {
        (a = ie(i, e.scrollTarget)), a.addEventListener('scroll', r, G), r(!0);
      }
      function s() {
        a !== void 0 && (a.removeEventListener('scroll', r, G), (a = void 0));
      }
      function r(w) {
        if (w === !0 || e.debounce === 0 || e.debounce === '0') u();
        else if (n === null) {
          const [S, d] = e.debounce
            ? [setTimeout(u, e.debounce), clearTimeout]
            : [requestAnimationFrame(u), cancelAnimationFrame];
          n = () => {
            d(S), (n = null);
          };
        }
      }
      const { proxy: g } = L();
      return (
        B(() => g.$q.lang.rtl, u),
        H(() => {
          (i = g.$el.parentNode), v();
        }),
        T(() => {
          n !== null && n(), s();
        }),
        Object.assign(g, { trigger: r, getPosition: () => o }),
        X
      );
    },
  }),
  Ee = q({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: c, emit: o }) {
      const {
          proxy: { $q: n },
        } = L(),
        a = p(null),
        i = p(n.screen.height),
        u = p(e.container === !0 ? 0 : n.screen.width),
        v = p({ position: 0, direction: 'down', inflectionPoint: 0 }),
        s = p(0),
        r = p(J.value === !0 ? 0 : O()),
        g = f(
          () =>
            'q-layout q-layout--' +
            (e.container === !0 ? 'containerized' : 'standard')
        ),
        w = f(() =>
          e.container === !1 ? { minHeight: n.screen.height + 'px' } : null
        ),
        S = f(() =>
          r.value !== 0
            ? { [n.lang.rtl === !0 ? 'left' : 'right']: `${r.value}px` }
            : null
        ),
        d = f(() =>
          r.value !== 0
            ? {
                [n.lang.rtl === !0 ? 'right' : 'left']: 0,
                [n.lang.rtl === !0 ? 'left' : 'right']: `-${r.value}px`,
                width: `calc(100% + ${r.value}px)`,
              }
            : null
        );
      function y(t) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const m = {
            position: t.position.top,
            direction: t.direction,
            directionChanged: t.directionChanged,
            inflectionPoint: t.inflectionPoint.top,
            delta: t.delta.top,
          };
          (v.value = m), e.onScroll !== void 0 && o('scroll', m);
        }
      }
      function Q(t) {
        const { height: m, width: z } = t;
        let D = !1;
        i.value !== m &&
          ((D = !0),
          (i.value = m),
          e.onScrollHeight !== void 0 && o('scrollHeight', m),
          x()),
          u.value !== z && ((D = !0), (u.value = z)),
          D === !0 && e.onResize !== void 0 && o('resize', t);
      }
      function R({ height: t }) {
        s.value !== t && ((s.value = t), x());
      }
      function x() {
        if (e.container === !0) {
          const t = i.value > s.value ? O() : 0;
          r.value !== t && (r.value = t);
        }
      }
      let l = null;
      const b = {
        instances: {},
        view: f(() => e.view),
        isContainer: f(() => e.container),
        rootRef: a,
        height: i,
        containerHeight: s,
        scrollbarWidth: r,
        totalWidth: f(() => u.value + r.value),
        rows: f(() => {
          const t = e.view.toLowerCase().split(' ');
          return {
            top: t[0].split(''),
            middle: t[1].split(''),
            bottom: t[2].split(''),
          };
        }),
        header: P({ size: 0, offset: 0, space: !1 }),
        right: P({ size: 300, offset: 0, space: !1 }),
        footer: P({ size: 0, offset: 0, space: !1 }),
        left: P({ size: 300, offset: 0, space: !1 }),
        scroll: v,
        animate() {
          l !== null
            ? clearTimeout(l)
            : document.body.classList.add('q-body--layout-animate'),
            (l = setTimeout(() => {
              (l = null),
                document.body.classList.remove('q-body--layout-animate');
            }, 155));
        },
        update(t, m, z) {
          b[t][m] = z;
        },
      };
      if ((Z(F, b), O() > 0)) {
        let z = function () {
            (t = null), m.classList.remove('hide-scrollbar');
          },
          D = function () {
            if (t === null) {
              if (m.scrollHeight > n.screen.height) return;
              m.classList.add('hide-scrollbar');
            } else clearTimeout(t);
            t = setTimeout(z, 300);
          },
          k = function (j) {
            t !== null && j === 'remove' && (clearTimeout(t), z()),
              window[`${j}EventListener`]('resize', D);
          },
          t = null;
        const m = document.body;
        B(() => (e.container !== !0 ? 'add' : 'remove'), k),
          e.container !== !0 && k('add'),
          be(() => {
            k('remove');
          });
      }
      return () => {
        const t = me(c.default, [
            h(Ae, { onScroll: y }),
            h(M, { onResize: Q }),
          ]),
          m = h(
            'div',
            {
              class: g.value,
              style: w.value,
              ref: e.container === !0 ? void 0 : a,
              tabindex: -1,
            },
            t
          );
        return e.container === !0
          ? h('div', { class: 'q-layout-container overflow-hidden', ref: a }, [
              h(M, { onResize: R }),
              h('div', { class: 'absolute-full', style: S.value }, [
                h('div', { class: 'scroll', style: d.value }, [m]),
              ]),
            ])
          : m;
      };
    },
  });
const Me = { class: 'text-h6 text-bold' },
  Ne = we({
    __name: 'MainLayout',
    setup(e) {
      const { t: c, locale: o } = $e({ useScope: 'global' }),
        n = [
          { value: 'en-US', label: 'English' },
          { value: 'zh-CN', label: '\u7B80\u4F53\u4E2D\u6587' },
        ];
      return (a, i) => {
        const u = ye('router-view');
        return (
          N(),
          pe(
            Ee,
            { view: 'hHh lpR fFf' },
            {
              default: C(() => [
                _(
                  Ve,
                  {
                    reveal: '',
                    class:
                      'page-header bg-accent text-primary row items-center justify-between q-px-md q-py-sm',
                  },
                  {
                    default: C(() => [
                      Se('span', Me, W(Be(c)('title')), 1),
                      _(
                        Pe,
                        {
                          color: 'primary',
                          icon: 'translate',
                          flat: '',
                          'auto-close': '',
                        },
                        {
                          default: C(() => [
                            _(
                              Qe,
                              { class: 'bg-secondary' },
                              {
                                default: C(() => [
                                  (N(),
                                  qe(
                                    ze,
                                    null,
                                    xe(n, (v) =>
                                      Ce(
                                        _(
                                          ue,
                                          {
                                            key: v.value,
                                            clickable: '',
                                            onClick: (s) => (o.value = v.value),
                                          },
                                          {
                                            default: C(() => [
                                              _(
                                                ce,
                                                null,
                                                {
                                                  default: C(() => [
                                                    _e(W(v.label), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['onClick']
                                        ),
                                        [[Le]]
                                      )
                                    ),
                                    64
                                  )),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                _(ke, null, { default: C(() => [_(u)]), _: 1 }),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
export { Ne as default };
