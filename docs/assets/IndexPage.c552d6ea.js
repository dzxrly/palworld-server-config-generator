import {
  k as Ae,
  c as f,
  h as k,
  l as Ee,
  g as Re,
  w as ie,
  o as Lt,
  t as Je,
  i as kt,
  af as Va,
  r as m,
  ag as zl,
  a3 as Ul,
  ah as Ll,
  Y as Be,
  x as qe,
  a7 as Hl,
  ai as jl,
  q as xa,
  _ as Ze,
  Q as Xe,
  aj as wa,
  ad as al,
  ak as Kl,
  ab as ot,
  p as Ge,
  al as Ql,
  G as Wl,
  am as Gl,
  an as ct,
  ao as ka,
  ap as Ca,
  aq as gl,
  y as lt,
  ar as qa,
  ae as Ra,
  z as Qe,
  B as Zl,
  D as Pa,
  as as Xl,
  at as ft,
  X as Yl,
  au as Aa,
  d as Rt,
  av as Ht,
  aw as jt,
  I as he,
  O as ze,
  L as ee,
  M as ke,
  N as ce,
  ax as Ct,
  J as Ye,
  K as me,
  ay as ye,
  j as x,
  m as Ce,
  az as Pt,
  aA as $a,
  aB as Ma,
  U as Ea,
  v as Jl,
  aC as Ia,
  aD as _a,
  aE as pl,
  Z as nl,
  aF as Ba,
  aG as Da,
  R as bl,
  S as at,
  aH as Oa,
  aI as Ta,
} from './index.deb755dc.js';
import {
  u as At,
  a as $t,
  j as ul,
  c as ea,
  r as Fa,
  e as Na,
  d as za,
  k as Ua,
  l as La,
  b as Ha,
  m as ja,
  n as Ka,
  o as Qa,
  p as Wa,
  q as Ga,
  s as Za,
  t as ol,
  v as yl,
  w as ta,
  x as Xa,
  y as Ya,
  z as Ja,
  Q as en,
  i as tn,
  h as ln,
} from './uid.acfcb5c3.js';
import { u as Mt } from './vue-i18n.runtime.c21bafc3.js';
var hl = Ae({
  name: 'QCard',
  props: {
    ...At,
    tag: { type: String, default: 'div' },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
  },
  setup(e, { slots: t }) {
    const {
        proxy: { $q: l },
      } = Re(),
      a = $t(e, l),
      o = f(
        () =>
          'q-card' +
          (a.value === !0 ? ' q-card--dark q-dark' : '') +
          (e.bordered === !0 ? ' q-card--bordered' : '') +
          (e.square === !0 ? ' q-card--square no-border-radius' : '') +
          (e.flat === !0 ? ' q-card--flat no-shadow' : '')
      );
    return () => k(e.tag, { class: o.value }, Ee(t.default));
  },
});
function an({ validate: e, resetValidation: t, requiresQForm: l }) {
  const a = kt(Va, !1);
  if (a !== !1) {
    const { props: o, proxy: u } = Re();
    Object.assign(u, { validate: e, resetValidation: t }),
      ie(
        () => o.disable,
        (v) => {
          v === !0
            ? (typeof t == 'function' && t(), a.unbindComponent(u))
            : a.bindComponent(u);
        }
      ),
      Lt(() => {
        o.disable !== !0 && a.bindComponent(u);
      }),
      Je(() => {
        o.disable !== !0 && a.unbindComponent(u);
      });
  } else l === !0 && console.error('Parent QForm not found on useFormChild()!');
}
const Sl = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  Vl = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  xl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  Ot =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  Tt =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Xt = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => Sl.test(e),
    hexaColor: (e) => Vl.test(e),
    hexOrHexaColor: (e) => xl.test(e),
    rgbColor: (e) => Ot.test(e),
    rgbaColor: (e) => Tt.test(e),
    rgbOrRgbaColor: (e) => Ot.test(e) || Tt.test(e),
    hexOrRgbColor: (e) => Sl.test(e) || Ot.test(e),
    hexaOrRgbaColor: (e) => Vl.test(e) || Tt.test(e),
    anyColor: (e) => xl.test(e) || Ot.test(e) || Tt.test(e),
  },
  nn = [!0, !1, 'ondemand'],
  on = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
      type: [Boolean, String],
      default: !1,
      validator: (e) => nn.includes(e),
    },
  };
function un(e, t) {
  const { props: l, proxy: a } = Re(),
    o = m(!1),
    u = m(null),
    v = m(null);
  an({ validate: _, resetValidation: C });
  let g = 0,
    p;
  const w = f(
      () => l.rules !== void 0 && l.rules !== null && l.rules.length !== 0
    ),
    y = f(() => l.disable !== !0 && w.value === !0 && t.value === !1),
    b = f(() => l.error === !0 || o.value === !0),
    $ = f(() =>
      typeof l.errorMessage == 'string' && l.errorMessage.length !== 0
        ? l.errorMessage
        : u.value
    );
  ie(
    () => l.modelValue,
    () => {
      (v.value = !0), y.value === !0 && l.lazyRules === !1 && z();
    }
  ),
    ie(
      () => l.reactiveRules,
      (R) => {
        R === !0
          ? p === void 0 &&
            (p = ie(
              () => l.rules,
              () => {
                y.value === !0 &&
                  v.value === !0 &&
                  l.lazyRules !== 'ondemand' &&
                  z();
              },
              { immediate: !0 }
            ))
          : p !== void 0 && (p(), (p = void 0));
      },
      { immediate: !0 }
    ),
    ie(
      () => l.lazyRules,
      (R) => {
        R === !1 && y.value === !0 && v.value === !0 && z();
      }
    ),
    ie(e, (R) => {
      R === !0
        ? v.value === null && (v.value = l.lazyRules === !0)
        : y.value === !0 &&
          (l.lazyRules === !1 || (l.lazyRules === !0 && v.value === !0)) &&
          z();
    });
  function C() {
    g++,
      (t.value = !1),
      (v.value = null),
      (o.value = !1),
      (u.value = null),
      z.cancel();
  }
  function _(R = l.modelValue) {
    if (l.disable === !0 || w.value === !1) return !0;
    const J = ++g,
      G =
        t.value !== !0
          ? () => {
              v.value = !0;
            }
          : () => {},
      Z = (X, O) => {
        X === !0 && G(), (o.value = X), (u.value = O || null), (t.value = !1);
      },
      Q = [];
    for (let X = 0; X < l.rules.length; X++) {
      const O = l.rules[X];
      let N;
      if (
        (typeof O == 'function'
          ? (N = O(R, Xt))
          : typeof O == 'string' && Xt[O] !== void 0 && (N = Xt[O](R)),
        N === !1 || typeof N == 'string')
      )
        return Z(!0, N), !1;
      N !== !0 && N !== void 0 && Q.push(N);
    }
    return Q.length === 0
      ? (Z(!1), !0)
      : ((t.value = !0),
        Promise.all(Q).then(
          (X) => {
            if (X === void 0 || Array.isArray(X) === !1 || X.length === 0)
              return J === g && Z(!1), !0;
            const O = X.find((N) => N === !1 || typeof N == 'string');
            return J === g && Z(O !== void 0, O), O === void 0;
          },
          (X) => (J === g && (console.error(X), Z(!0)), !1)
        ));
  }
  const z = zl(_, 0);
  return (
    Je(() => {
      p !== void 0 && p(), z.cancel();
    }),
    Object.assign(a, { resetValidation: C, validate: _ }),
    Ul(a, 'hasError', () => b.value),
    {
      isDirtyModel: v,
      hasRules: w,
      hasError: b,
      errorMessage: $,
      validate: _,
      resetValidation: C,
    }
  );
}
const wl = /^on[A-Z]/;
function rn(e, t) {
  const l = { listeners: m({}), attributes: m({}) };
  function a() {
    const o = {},
      u = {};
    for (const v in e)
      v !== 'class' && v !== 'style' && wl.test(v) === !1 && (o[v] = e[v]);
    for (const v in t.props) wl.test(v) === !0 && (u[v] = t.props[v]);
    (l.attributes.value = o), (l.listeners.value = u);
  }
  return Ll(a), a(), l;
}
function la(e, t) {
  return e === void 0 ? (t === !0 ? `f_${ea()}` : void 0) : e;
}
function qt(e) {
  return e != null && ('' + e).length !== 0;
}
const Kt = {
    ...At,
    ...on,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  il = [
    'update:modelValue',
    'clear',
    'focus',
    'blur',
    'popupShow',
    'popupHide',
  ];
function rl({ requiredForAttr: e = !0, tagProp: t } = {}) {
  const { props: l, attrs: a, proxy: o, vnode: u } = Re(),
    v = $t(l, o.$q);
  return {
    requiredForAttr: e,
    tag: t === !0 ? f(() => l.tag) : { value: 'label' },
    isDark: v,
    editable: f(() => l.disable !== !0 && l.readonly !== !0),
    innerLoading: m(!1),
    focused: m(!1),
    hasPopupOpen: !1,
    splitAttrs: rn(a, u),
    targetUid: m(la(l.for, e)),
    rootRef: m(null),
    targetRef: m(null),
    controlRef: m(null),
  };
}
function sl(e) {
  const { props: t, emit: l, slots: a, attrs: o, proxy: u } = Re(),
    { $q: v } = u;
  let g = null;
  e.hasValue === void 0 && (e.hasValue = f(() => qt(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (S) => {
        l('update:modelValue', S);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: V, onFocusout: h }),
    Object.assign(e, {
      clearValue: M,
      onControlFocusin: V,
      onControlFocusout: h,
      focus: N,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = f(() => {
        if (t.counter !== !1) {
          const S =
              typeof t.modelValue == 'string' || typeof t.modelValue == 'number'
                ? ('' + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            U = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return S + (U !== void 0 ? ' / ' + U : '');
        }
      }));
  const {
      isDirtyModel: p,
      hasRules: w,
      hasError: y,
      errorMessage: b,
      resetValidation: $,
    } = un(e.focused, e.innerLoading),
    C =
      e.floatingLabel !== void 0
        ? f(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : f(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    _ = f(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        w.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    z = f(() =>
      t.filled === !0
        ? 'filled'
        : t.outlined === !0
        ? 'outlined'
        : t.borderless === !0
        ? 'borderless'
        : t.standout
        ? 'standout'
        : 'standard'
    ),
    R = f(
      () =>
        `q-field row no-wrap items-start q-field--${z.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : '') +
        (t.rounded === !0 ? ' q-field--rounded' : '') +
        (t.square === !0 ? ' q-field--square' : '') +
        (C.value === !0 ? ' q-field--float' : '') +
        (G.value === !0 ? ' q-field--labeled' : '') +
        (t.dense === !0 ? ' q-field--dense' : '') +
        (t.itemAligned === !0 ? ' q-field--item-aligned q-item-type' : '') +
        (e.isDark.value === !0 ? ' q-field--dark' : '') +
        (e.getControl === void 0 ? ' q-field--auto-height' : '') +
        (e.focused.value === !0 ? ' q-field--focused' : '') +
        (y.value === !0 ? ' q-field--error' : '') +
        (y.value === !0 || e.focused.value === !0
          ? ' q-field--highlighted'
          : '') +
        (t.hideBottomSpace !== !0 && _.value === !0
          ? ' q-field--with-bottom'
          : '') +
        (t.disable === !0
          ? ' q-field--disabled'
          : t.readonly === !0
          ? ' q-field--readonly'
          : '')
    ),
    J = f(
      () =>
        'q-field__control relative-position row no-wrap' +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : '') +
        (y.value === !0
          ? ' text-negative'
          : typeof t.standout == 'string' &&
            t.standout.length !== 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : '')
    ),
    G = f(() => t.labelSlot === !0 || t.label !== void 0),
    Z = f(
      () =>
        'q-field__label no-pointer-events absolute ellipsis' +
        (t.labelColor !== void 0 && y.value !== !0
          ? ` text-${t.labelColor}`
          : '')
    ),
    Q = f(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: C.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    X = f(() => {
      const S = { for: e.targetUid.value };
      return t.disable === !0 && (S['aria-disabled'] = 'true'), S;
    });
  ie(
    () => t.for,
    (S) => {
      e.targetUid.value = la(S, e.requiredForAttr);
    }
  );
  function O() {
    const S = document.activeElement;
    let U = e.targetRef !== void 0 && e.targetRef.value;
    U &&
      (S === null || S.id !== e.targetUid.value) &&
      (U.hasAttribute('tabindex') === !0 || (U = U.querySelector('[tabindex]')),
      U && U !== S && U.focus({ preventScroll: !0 }));
  }
  function N() {
    ul(O);
  }
  function oe() {
    Fa(O);
    const S = document.activeElement;
    S !== null && e.rootRef.value.contains(S) && S.blur();
  }
  function V(S) {
    g !== null && (clearTimeout(g), (g = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), l('focus', S));
  }
  function h(S, U) {
    g !== null && clearTimeout(g),
      (g = setTimeout(() => {
        (g = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), l('blur', S)),
            U !== void 0 && U());
      }));
  }
  function M(S) {
    Be(S),
      v.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === 'file' && (e.inputRef.value.value = null),
      l('update:modelValue', null),
      l('clear', t.modelValue),
      qe(() => {
        $(), v.platform.is.mobile !== !0 && (p.value = !1);
      });
  }
  function c() {
    const S = [];
    return (
      a.prepend !== void 0 &&
        S.push(
          k(
            'div',
            {
              class:
                'q-field__prepend q-field__marginal row no-wrap items-center',
              key: 'prepend',
              onClick: Ze,
            },
            a.prepend()
          )
        ),
      S.push(
        k(
          'div',
          {
            class:
              'q-field__control-container col relative-position row no-wrap q-anchor--skip',
          },
          B()
        )
      ),
      y.value === !0 &&
        t.noErrorIcon === !1 &&
        S.push(
          W('error', [
            k(Xe, { name: v.iconSet.field.error, color: 'negative' }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? S.push(
            W(
              'inner-loading-append',
              a.loading !== void 0 ? a.loading() : [k(wa, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          S.push(
            W('inner-clearable-append', [
              k(Xe, {
                class: 'q-field__focusable-action',
                tag: 'button',
                name: t.clearIcon || v.iconSet.field.clear,
                tabindex: 0,
                type: 'button',
                'aria-hidden': null,
                role: null,
                onClick: M,
              }),
            ])
          ),
      a.append !== void 0 &&
        S.push(
          k(
            'div',
            {
              class:
                'q-field__append q-field__marginal row no-wrap items-center',
              key: 'append',
              onClick: Ze,
            },
            a.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        S.push(W('inner-append', e.getInnerAppend())),
      e.getControlChild !== void 0 && S.push(e.getControlChild()),
      S
    );
  }
  function B() {
    const S = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        S.push(
          k(
            'div',
            { class: 'q-field__prefix no-pointer-events row items-center' },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        S.push(e.getShadowControl()),
      e.getControl !== void 0
        ? S.push(e.getControl())
        : a.rawControl !== void 0
        ? S.push(a.rawControl())
        : a.control !== void 0 &&
          S.push(
            k(
              'div',
              {
                ref: e.targetRef,
                class: 'q-field__native row',
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                'data-autofocus': t.autofocus === !0 || void 0,
              },
              a.control(Q.value)
            )
          ),
      G.value === !0 &&
        S.push(k('div', { class: Z.value }, Ee(a.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        S.push(
          k(
            'div',
            { class: 'q-field__suffix no-pointer-events row items-center' },
            t.suffix
          )
        ),
      S.concat(Ee(a.default))
    );
  }
  function F() {
    let S, U;
    y.value === !0
      ? b.value !== null
        ? ((S = [k('div', { role: 'alert' }, b.value)]),
          (U = `q--slot-error-${b.value}`))
        : ((S = Ee(a.error)), (U = 'q--slot-error'))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((S = [k('div', t.hint)]), (U = `q--slot-hint-${t.hint}`))
          : ((S = Ee(a.hint)), (U = 'q--slot-hint')));
    const ae = t.counter === !0 || a.counter !== void 0;
    if (t.hideBottomSpace === !0 && ae === !1 && S === void 0) return;
    const H = k('div', { key: U, class: 'q-field__messages col' }, S);
    return k(
      'div',
      {
        class:
          'q-field__bottom row items-start q-field__bottom--' +
          (t.hideBottomSpace !== !0 ? 'animated' : 'stale'),
        onClick: Ze,
      },
      [
        t.hideBottomSpace === !0
          ? H
          : k(al, { name: 'q-transition--field-message' }, () => H),
        ae === !0
          ? k(
              'div',
              { class: 'q-field__counter' },
              a.counter !== void 0 ? a.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function W(S, U) {
    return U === null
      ? null
      : k(
          'div',
          {
            key: S,
            class:
              'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
          },
          U
        );
  }
  let D = !1;
  return (
    Hl(() => {
      D = !0;
    }),
    jl(() => {
      D === !0 && t.autofocus === !0 && u.focus();
    }),
    Lt(() => {
      xa.value === !0 &&
        e.requiredForAttr === !0 &&
        t.for === void 0 &&
        (e.targetUid.value = `f_${ea()}`),
        t.autofocus === !0 && u.focus();
    }),
    Je(() => {
      g !== null && clearTimeout(g);
    }),
    Object.assign(u, { focus: N, blur: oe }),
    function () {
      const U =
        e.getControl === void 0 && a.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              'data-autofocus': t.autofocus === !0 || void 0,
              ...X.value,
            }
          : X.value;
      return k(
        e.tag.value,
        { ref: e.rootRef, class: [R.value, o.class], style: o.style, ...U },
        [
          a.before !== void 0
            ? k(
                'div',
                {
                  class:
                    'q-field__before q-field__marginal row no-wrap items-center',
                  onClick: Ze,
                },
                a.before()
              )
            : null,
          k(
            'div',
            { class: 'q-field__inner relative-position col self-stretch' },
            [
              k(
                'div',
                {
                  ref: e.controlRef,
                  class: J.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                c()
              ),
              _.value === !0 ? F() : null,
            ]
          ),
          a.after !== void 0
            ? k(
                'div',
                {
                  class:
                    'q-field__after q-field__marginal row no-wrap items-center',
                  onClick: Ze,
                },
                a.after()
              )
            : null,
        ]
      );
    }
  );
}
const kl = {
    date: '####/##/##',
    datetime: '####/##/## ##:##',
    time: '##:##',
    fulltime: '##:##:##',
    phone: '(###) ### - ####',
    card: '#### #### #### ####',
  },
  zt = {
    '#': { pattern: '[\\d]', negate: '[^\\d]' },
    S: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]' },
    N: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]' },
    A: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  aa = Object.keys(zt);
aa.forEach((e) => {
  zt[e].regex = new RegExp(zt[e].pattern);
});
const sn = new RegExp(
    '\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + aa.join('') + '])|(.)',
    'g'
  ),
  Cl = /[.*+?^${}()|[\]\\]/g,
  ve = String.fromCharCode(1),
  dn = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function cn(e, t, l, a) {
  let o, u, v, g, p, w;
  const y = m(null),
    b = m(C());
  function $() {
    return (
      e.autogrow === !0 ||
      ['textarea', 'text', 'search', 'url', 'tel', 'password'].includes(e.type)
    );
  }
  ie(() => e.type + e.autogrow, z),
    ie(
      () => e.mask,
      (V) => {
        if (V !== void 0) R(b.value, !0);
        else {
          const h = N(b.value);
          z(), e.modelValue !== h && t('update:modelValue', h);
        }
      }
    ),
    ie(
      () => e.fillMask + e.reverseFillMask,
      () => {
        y.value === !0 && R(b.value, !0);
      }
    ),
    ie(
      () => e.unmaskedValue,
      () => {
        y.value === !0 && R(b.value);
      }
    );
  function C() {
    if ((z(), y.value === !0)) {
      const V = X(N(e.modelValue));
      return e.fillMask !== !1 ? oe(V) : V;
    }
    return e.modelValue;
  }
  function _(V) {
    if (V < o.length) return o.slice(-V);
    let h = '',
      M = o;
    const c = M.indexOf(ve);
    if (c > -1) {
      for (let B = V - M.length; B > 0; B--) h += ve;
      M = M.slice(0, c) + h + M.slice(c);
    }
    return M;
  }
  function z() {
    if (
      ((y.value = e.mask !== void 0 && e.mask.length !== 0 && $()),
      y.value === !1)
    ) {
      (g = void 0), (o = ''), (u = '');
      return;
    }
    const V = kl[e.mask] === void 0 ? e.mask : kl[e.mask],
      h =
        typeof e.fillMask == 'string' && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : '_',
      M = h.replace(Cl, '\\$&'),
      c = [],
      B = [],
      F = [];
    let W = e.reverseFillMask === !0,
      D = '',
      S = '';
    V.replace(sn, (d, r, E, K, I) => {
      if (K !== void 0) {
        const P = zt[K];
        F.push(P),
          (S = P.negate),
          W === !0 &&
            (B.push(
              '(?:' +
                S +
                '+)?(' +
                P.pattern +
                '+)?(?:' +
                S +
                '+)?(' +
                P.pattern +
                '+)?'
            ),
            (W = !1)),
          B.push('(?:' + S + '+)?(' + P.pattern + ')?');
      } else if (E !== void 0)
        (D = '\\' + (E === '\\' ? '' : E)),
          F.push(E),
          c.push('([^' + D + ']+)?' + D + '?');
      else {
        const P = r !== void 0 ? r : I;
        (D = P === '\\' ? '\\\\\\\\' : P.replace(Cl, '\\\\$&')),
          F.push(P),
          c.push('([^' + D + ']+)?' + D + '?');
      }
    });
    const U = new RegExp(
        '^' +
          c.join('') +
          '(' +
          (D === '' ? '.' : '[^' + D + ']') +
          '+)?' +
          (D === '' ? '' : '[' + D + ']*') +
          '$'
      ),
      ae = B.length - 1,
      H = B.map((d, r) =>
        r === 0 && e.reverseFillMask === !0
          ? new RegExp('^' + M + '*' + d)
          : r === ae
          ? new RegExp(
              '^' +
                d +
                '(' +
                (S === '' ? '.' : S) +
                '+)?' +
                (e.reverseFillMask === !0 ? '$' : M + '*')
            )
          : new RegExp('^' + d)
      );
    (v = F),
      (g = (d) => {
        const r = U.exec(
          e.reverseFillMask === !0 ? d : d.slice(0, F.length + 1)
        );
        r !== null && (d = r.slice(1).join(''));
        const E = [],
          K = H.length;
        for (let I = 0, P = d; I < K; I++) {
          const T = H[I].exec(P);
          if (T === null) break;
          (P = P.slice(T.shift().length)), E.push(...T);
        }
        return E.length !== 0 ? E.join('') : d;
      }),
      (o = F.map((d) => (typeof d == 'string' ? d : ve)).join('')),
      (u = o.split(ve).join(h));
  }
  function R(V, h, M) {
    const c = a.value,
      B = c.selectionEnd,
      F = c.value.length - B,
      W = N(V);
    h === !0 && z();
    const D = X(W),
      S = e.fillMask !== !1 ? oe(D) : D,
      U = b.value !== S;
    c.value !== S && (c.value = S),
      U === !0 && (b.value = S),
      document.activeElement === c &&
        qe(() => {
          if (S === u) {
            const H = e.reverseFillMask === !0 ? u.length : 0;
            c.setSelectionRange(H, H, 'forward');
            return;
          }
          if (M === 'insertFromPaste' && e.reverseFillMask !== !0) {
            const H = c.selectionEnd;
            let d = B - 1;
            for (let r = p; r <= d && r < H; r++) o[r] !== ve && d++;
            G.right(c, d);
            return;
          }
          if (
            ['deleteContentBackward', 'deleteContentForward'].indexOf(M) > -1
          ) {
            const H =
              e.reverseFillMask === !0
                ? B === 0
                  ? S.length > D.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      S.length - (S === u ? 0 : Math.min(D.length, F) + 1)
                    ) + 1
                : B;
            c.setSelectionRange(H, H, 'forward');
            return;
          }
          if (e.reverseFillMask === !0)
            if (U === !0) {
              const H = Math.max(
                0,
                S.length - (S === u ? 0 : Math.min(D.length, F + 1))
              );
              H === 1 && B === 1
                ? c.setSelectionRange(H, H, 'forward')
                : G.rightReverse(c, H);
            } else {
              const H = S.length - F;
              c.setSelectionRange(H, H, 'backward');
            }
          else if (U === !0) {
            const H = Math.max(0, o.indexOf(ve), Math.min(D.length, B) - 1);
            G.right(c, H);
          } else {
            const H = B - 1;
            G.right(c, H);
          }
        });
    const ae = e.unmaskedValue === !0 ? N(S) : S;
    String(e.modelValue) !== ae &&
      (e.modelValue !== null || ae !== '') &&
      l(ae, !0);
  }
  function J(V, h, M) {
    const c = X(N(V.value));
    (h = Math.max(0, o.indexOf(ve), Math.min(c.length, h))),
      (p = h),
      V.setSelectionRange(h, M, 'forward');
  }
  const G = {
    left(V, h) {
      const M = o.slice(h - 1).indexOf(ve) === -1;
      let c = Math.max(0, h - 1);
      for (; c >= 0; c--)
        if (o[c] === ve) {
          (h = c), M === !0 && h++;
          break;
        }
      if (c < 0 && o[h] !== void 0 && o[h] !== ve) return G.right(V, 0);
      h >= 0 && V.setSelectionRange(h, h, 'backward');
    },
    right(V, h) {
      const M = V.value.length;
      let c = Math.min(M, h + 1);
      for (; c <= M; c++)
        if (o[c] === ve) {
          h = c;
          break;
        } else o[c - 1] === ve && (h = c);
      if (c > M && o[h - 1] !== void 0 && o[h - 1] !== ve) return G.left(V, M);
      V.setSelectionRange(h, h, 'forward');
    },
    leftReverse(V, h) {
      const M = _(V.value.length);
      let c = Math.max(0, h - 1);
      for (; c >= 0; c--)
        if (M[c - 1] === ve) {
          h = c;
          break;
        } else if (M[c] === ve && ((h = c), c === 0)) break;
      if (c < 0 && M[h] !== void 0 && M[h] !== ve) return G.rightReverse(V, 0);
      h >= 0 && V.setSelectionRange(h, h, 'backward');
    },
    rightReverse(V, h) {
      const M = V.value.length,
        c = _(M),
        B = c.slice(0, h + 1).indexOf(ve) === -1;
      let F = Math.min(M, h + 1);
      for (; F <= M; F++)
        if (c[F - 1] === ve) {
          (h = F), h > 0 && B === !0 && h--;
          break;
        }
      if (F > M && c[h - 1] !== void 0 && c[h - 1] !== ve)
        return G.leftReverse(V, M);
      V.setSelectionRange(h, h, 'forward');
    },
  };
  function Z(V) {
    t('click', V), (w = void 0);
  }
  function Q(V) {
    if ((t('keydown', V), Kl(V) === !0 || V.altKey === !0)) return;
    const h = a.value,
      M = h.selectionStart,
      c = h.selectionEnd;
    if ((V.shiftKey || (w = void 0), V.keyCode === 37 || V.keyCode === 39)) {
      V.shiftKey &&
        w === void 0 &&
        (w = h.selectionDirection === 'forward' ? M : c);
      const B =
        G[
          (V.keyCode === 39 ? 'right' : 'left') +
            (e.reverseFillMask === !0 ? 'Reverse' : '')
        ];
      if ((V.preventDefault(), B(h, w === M ? c : M), V.shiftKey)) {
        const F = h.selectionStart;
        h.setSelectionRange(Math.min(w, F), Math.max(w, F), 'forward');
      }
    } else
      V.keyCode === 8 && e.reverseFillMask !== !0 && M === c
        ? (G.left(h, M), h.setSelectionRange(h.selectionStart, c, 'backward'))
        : V.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          M === c &&
          (G.rightReverse(h, c),
          h.setSelectionRange(M, h.selectionEnd, 'forward'));
  }
  function X(V) {
    if (V == null || V === '') return '';
    if (e.reverseFillMask === !0) return O(V);
    const h = v;
    let M = 0,
      c = '';
    for (let B = 0; B < h.length; B++) {
      const F = V[M],
        W = h[B];
      if (typeof W == 'string') (c += W), F === W && M++;
      else if (F !== void 0 && W.regex.test(F))
        (c += W.transform !== void 0 ? W.transform(F) : F), M++;
      else return c;
    }
    return c;
  }
  function O(V) {
    const h = v,
      M = o.indexOf(ve);
    let c = V.length - 1,
      B = '';
    for (let F = h.length - 1; F >= 0 && c > -1; F--) {
      const W = h[F];
      let D = V[c];
      if (typeof W == 'string') (B = W + B), D === W && c--;
      else if (D !== void 0 && W.regex.test(D))
        do
          (B = (W.transform !== void 0 ? W.transform(D) : D) + B),
            c--,
            (D = V[c]);
        while (M === F && D !== void 0 && W.regex.test(D));
      else return B;
    }
    return B;
  }
  function N(V) {
    return typeof V != 'string' || g === void 0
      ? typeof V == 'number'
        ? g('' + V)
        : V
      : g(V);
  }
  function oe(V) {
    return u.length - V.length <= 0
      ? V
      : e.reverseFillMask === !0 && V.length !== 0
      ? u.slice(0, -V.length) + V
      : V + u.slice(V.length);
  }
  return {
    innerValue: b,
    hasMask: y,
    moveCursorForPaste: J,
    updateMaskValue: R,
    onMaskedKeydown: Q,
    onMaskedClick: Z,
  };
}
const dl = { name: String };
function fn(e = {}) {
  return (t, l, a) => {
    t[l](k('input', { class: 'hidden' + (a || ''), ...e.value }));
  };
}
function na(e) {
  return f(() => e.name || e.for);
}
function vn(e, t) {
  function l() {
    const a = e.modelValue;
    try {
      const o =
        'DataTransfer' in window
          ? new DataTransfer()
          : 'ClipboardEvent' in window
          ? new ClipboardEvent('').clipboardData
          : void 0;
      return (
        Object(a) === a &&
          ('length' in a ? Array.from(a) : [a]).forEach((u) => {
            o.items.add(u);
          }),
        { files: o.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return t === !0
    ? f(() => {
        if (e.type === 'file') return l();
      })
    : f(l);
}
const mn =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  gn =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  pn = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  bn = /[a-z0-9_ -]$/i;
function oa(e) {
  return function (l) {
    if (l.type === 'compositionend' || l.type === 'change') {
      if (l.target.qComposing !== !0) return;
      (l.target.qComposing = !1), e(l);
    } else
      l.type === 'compositionupdate' &&
        l.target.qComposing !== !0 &&
        typeof l.data == 'string' &&
        (ot.is.firefox === !0
          ? bn.test(l.data) === !1
          : mn.test(l.data) === !0 ||
            gn.test(l.data) === !0 ||
            pn.test(l.data) === !0) === !0 &&
        (l.target.qComposing = !0);
  };
}
var mt = Ae({
  name: 'QInput',
  inheritAttrs: !1,
  props: {
    ...Kt,
    ...dn,
    ...dl,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: 'text' },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...il, 'paste', 'change', 'keydown', 'click', 'animationend'],
  setup(e, { emit: t, attrs: l }) {
    const { proxy: a } = Re(),
      { $q: o } = a,
      u = {};
    let v = NaN,
      g,
      p,
      w = null,
      y;
    const b = m(null),
      $ = na(e),
      {
        innerValue: C,
        hasMask: _,
        moveCursorForPaste: z,
        updateMaskValue: R,
        onMaskedKeydown: J,
        onMaskedClick: G,
      } = cn(e, t, D, b),
      Z = vn(e, !0),
      Q = f(() => qt(C.value)),
      X = oa(F),
      O = rl(),
      N = f(() => e.type === 'textarea' || e.autogrow === !0),
      oe = f(
        () =>
          N.value === !0 ||
          ['text', 'search', 'url', 'tel', 'password'].includes(e.type)
      ),
      V = f(() => {
        const r = {
          ...O.splitAttrs.listeners.value,
          onInput: F,
          onPaste: B,
          onChange: U,
          onBlur: ae,
          onFocus: Ge,
        };
        return (
          (r.onCompositionstart =
            r.onCompositionupdate =
            r.onCompositionend =
              X),
          _.value === !0 && ((r.onKeydown = J), (r.onClick = G)),
          e.autogrow === !0 && (r.onAnimationend = W),
          r
        );
      }),
      h = f(() => {
        const r = {
          tabindex: 0,
          'data-autofocus': e.autofocus === !0 || void 0,
          rows: e.type === 'textarea' ? 6 : void 0,
          'aria-label': e.label,
          name: $.value,
          ...O.splitAttrs.attributes.value,
          id: O.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          N.value === !1 && (r.type = e.type),
          e.autogrow === !0 && (r.rows = 1),
          r
        );
      });
    ie(
      () => e.type,
      () => {
        b.value && (b.value.value = e.modelValue);
      }
    ),
      ie(
        () => e.modelValue,
        (r) => {
          if (_.value === !0) {
            if (p === !0 && ((p = !1), String(r) === v)) return;
            R(r);
          } else
            C.value !== r &&
              ((C.value = r),
              e.type === 'number' &&
                u.hasOwnProperty('value') === !0 &&
                (g === !0 ? (g = !1) : delete u.value));
          e.autogrow === !0 && qe(S);
        }
      ),
      ie(
        () => e.autogrow,
        (r) => {
          r === !0
            ? qe(S)
            : b.value !== null && l.rows > 0 && (b.value.style.height = 'auto');
        }
      ),
      ie(
        () => e.dense,
        () => {
          e.autogrow === !0 && qe(S);
        }
      );
    function M() {
      ul(() => {
        const r = document.activeElement;
        b.value !== null &&
          b.value !== r &&
          (r === null || r.id !== O.targetUid.value) &&
          b.value.focus({ preventScroll: !0 });
      });
    }
    function c() {
      b.value !== null && b.value.select();
    }
    function B(r) {
      if (_.value === !0 && e.reverseFillMask !== !0) {
        const E = r.target;
        z(E, E.selectionStart, E.selectionEnd);
      }
      t('paste', r);
    }
    function F(r) {
      if (!r || !r.target) return;
      if (e.type === 'file') {
        t('update:modelValue', r.target.files);
        return;
      }
      const E = r.target.value;
      if (r.target.qComposing === !0) {
        u.value = E;
        return;
      }
      if (_.value === !0) R(E, !1, r.inputType);
      else if ((D(E), oe.value === !0 && r.target === document.activeElement)) {
        const { selectionStart: K, selectionEnd: I } = r.target;
        K !== void 0 &&
          I !== void 0 &&
          qe(() => {
            r.target === document.activeElement &&
              E.indexOf(r.target.value) === 0 &&
              r.target.setSelectionRange(K, I);
          });
      }
      e.autogrow === !0 && S();
    }
    function W(r) {
      t('animationend', r), S();
    }
    function D(r, E) {
      (y = () => {
        (w = null),
          e.type !== 'number' &&
            u.hasOwnProperty('value') === !0 &&
            delete u.value,
          e.modelValue !== r &&
            v !== r &&
            ((v = r),
            E === !0 && (p = !0),
            t('update:modelValue', r),
            qe(() => {
              v === r && (v = NaN);
            })),
          (y = void 0);
      }),
        e.type === 'number' && ((g = !0), (u.value = r)),
        e.debounce !== void 0
          ? (w !== null && clearTimeout(w),
            (u.value = r),
            (w = setTimeout(y, e.debounce)))
          : y();
    }
    function S() {
      requestAnimationFrame(() => {
        const r = b.value;
        if (r !== null) {
          const E = r.parentNode.style,
            { scrollTop: K } = r,
            { overflowY: I, maxHeight: P } =
              o.platform.is.firefox === !0 ? {} : window.getComputedStyle(r),
            T = I !== void 0 && I !== 'scroll';
          T === !0 && (r.style.overflowY = 'hidden'),
            (E.marginBottom = r.scrollHeight - 1 + 'px'),
            (r.style.height = '1px'),
            (r.style.height = r.scrollHeight + 'px'),
            T === !0 &&
              (r.style.overflowY =
                parseInt(P, 10) < r.scrollHeight ? 'auto' : 'hidden'),
            (E.marginBottom = ''),
            (r.scrollTop = K);
        }
      });
    }
    function U(r) {
      X(r),
        w !== null && (clearTimeout(w), (w = null)),
        y !== void 0 && y(),
        t('change', r.target.value);
    }
    function ae(r) {
      r !== void 0 && Ge(r),
        w !== null && (clearTimeout(w), (w = null)),
        y !== void 0 && y(),
        (g = !1),
        (p = !1),
        delete u.value,
        e.type !== 'file' &&
          setTimeout(() => {
            b.value !== null &&
              (b.value.value = C.value !== void 0 ? C.value : '');
          });
    }
    function H() {
      return u.hasOwnProperty('value') === !0
        ? u.value
        : C.value !== void 0
        ? C.value
        : '';
    }
    Je(() => {
      ae();
    }),
      Lt(() => {
        e.autogrow === !0 && S();
      }),
      Object.assign(O, {
        innerValue: C,
        fieldClass: f(
          () =>
            `q-${N.value === !0 ? 'textarea' : 'input'}` +
            (e.autogrow === !0 ? ' q-textarea--autogrow' : '')
        ),
        hasShadow: f(
          () =>
            e.type !== 'file' &&
            typeof e.shadowText == 'string' &&
            e.shadowText.length !== 0
        ),
        inputRef: b,
        emitValue: D,
        hasValue: Q,
        floatingLabel: f(
          () =>
            (Q.value === !0 &&
              (e.type !== 'number' || isNaN(C.value) === !1)) ||
            qt(e.displayValue)
        ),
        getControl: () =>
          k(N.value === !0 ? 'textarea' : 'input', {
            ref: b,
            class: ['q-field__native q-placeholder', e.inputClass],
            style: e.inputStyle,
            ...h.value,
            ...V.value,
            ...(e.type !== 'file' ? { value: H() } : Z.value),
          }),
        getShadowControl: () =>
          k(
            'div',
            {
              class:
                'q-field__native q-field__shadow absolute-bottom no-pointer-events' +
                (N.value === !0 ? '' : ' text-no-wrap'),
            },
            [k('span', { class: 'invisible' }, H()), k('span', e.shadowText)]
          ),
      });
    const d = sl(O);
    return (
      Object.assign(a, {
        focus: M,
        select: c,
        getNativeElement: () => b.value,
      }),
      Ul(a, 'nativeEl', () => b.value),
      d
    );
  },
});
function yn(e, t) {
  const l = m(null),
    a = f(() =>
      e.disable === !0
        ? null
        : k('span', { ref: l, class: 'no-outline', tabindex: -1 })
    );
  function o(u) {
    const v = t.value;
    u !== void 0 && u.type.indexOf('key') === 0
      ? v !== null &&
        document.activeElement !== v &&
        v.contains(document.activeElement) === !0 &&
        v.focus()
      : l.value !== null &&
        (u === void 0 || (v !== null && v.contains(u.target) === !0)) &&
        l.value.focus();
  }
  return { refocusTargetEl: a, refocusTarget: o };
}
var hn = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
const Sn = {
    ...At,
    ...Gl,
    ...dl,
    modelValue: { required: !0, default: null },
    val: {},
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    indeterminateValue: { default: null },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: { type: String, validator: (e) => e === 'tf' || e === 'ft' },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  Vn = ['update:modelValue'];
function xn(e, t) {
  const { props: l, slots: a, emit: o, proxy: u } = Re(),
    { $q: v } = u,
    g = $t(l, v),
    p = m(null),
    { refocusTargetEl: w, refocusTarget: y } = yn(l, p),
    b = Ql(l, hn),
    $ = f(() => l.val !== void 0 && Array.isArray(l.modelValue)),
    C = f(() => {
      const c = ct(l.val);
      return $.value === !0 ? l.modelValue.findIndex((B) => ct(B) === c) : -1;
    }),
    _ = f(() =>
      $.value === !0 ? C.value > -1 : ct(l.modelValue) === ct(l.trueValue)
    ),
    z = f(() =>
      $.value === !0 ? C.value === -1 : ct(l.modelValue) === ct(l.falseValue)
    ),
    R = f(() => _.value === !1 && z.value === !1),
    J = f(() => (l.disable === !0 ? -1 : l.tabindex || 0)),
    G = f(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (l.disable === !0 ? ' disabled' : '') +
        (g.value === !0 ? ` q-${e}--dark` : '') +
        (l.dense === !0 ? ` q-${e}--dense` : '') +
        (l.leftLabel === !0 ? ' reverse' : '')
    ),
    Z = f(() => {
      const c = _.value === !0 ? 'truthy' : z.value === !0 ? 'falsy' : 'indet',
        B =
          l.color !== void 0 &&
          (l.keepColor === !0 ||
            (e === 'toggle' ? _.value === !0 : z.value !== !0))
            ? ` text-${l.color}`
            : '';
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${c}${B}`;
    }),
    Q = f(() => {
      const c = { type: 'checkbox' };
      return (
        l.name !== void 0 &&
          Object.assign(c, {
            '.checked': _.value,
            '^checked': _.value === !0 ? 'checked' : void 0,
            name: l.name,
            value: $.value === !0 ? l.val : l.trueValue,
          }),
        c
      );
    }),
    X = fn(Q),
    O = f(() => {
      const c = {
        tabindex: J.value,
        role: e === 'toggle' ? 'switch' : 'checkbox',
        'aria-label': l.label,
        'aria-checked':
          R.value === !0 ? 'mixed' : _.value === !0 ? 'true' : 'false',
      };
      return l.disable === !0 && (c['aria-disabled'] = 'true'), c;
    });
  function N(c) {
    c !== void 0 && (Be(c), y(c)),
      l.disable !== !0 && o('update:modelValue', oe(), c);
  }
  function oe() {
    if ($.value === !0) {
      if (_.value === !0) {
        const c = l.modelValue.slice();
        return c.splice(C.value, 1), c;
      }
      return l.modelValue.concat([l.val]);
    }
    if (_.value === !0) {
      if (l.toggleOrder !== 'ft' || l.toggleIndeterminate === !1)
        return l.falseValue;
    } else if (z.value === !0) {
      if (l.toggleOrder === 'ft' || l.toggleIndeterminate === !1)
        return l.trueValue;
    } else return l.toggleOrder !== 'ft' ? l.trueValue : l.falseValue;
    return l.indeterminateValue;
  }
  function V(c) {
    (c.keyCode === 13 || c.keyCode === 32) && Be(c);
  }
  function h(c) {
    (c.keyCode === 13 || c.keyCode === 32) && N(c);
  }
  const M = t(_, R);
  return (
    Object.assign(u, { toggle: N }),
    () => {
      const c = M();
      l.disable !== !0 &&
        X(c, 'unshift', ` q-${e}__native absolute q-ma-none q-pa-none`);
      const B = [
        k('div', { class: Z.value, style: b.value, 'aria-hidden': 'true' }, c),
      ];
      w.value !== null && B.push(w.value);
      const F = l.label !== void 0 ? Wl(a.default, [l.label]) : Ee(a.default);
      return (
        F !== void 0 &&
          B.push(k('div', { class: `q-${e}__label q-anchor--skip` }, F)),
        k(
          'div',
          {
            ref: p,
            class: G.value,
            ...O.value,
            onClick: N,
            onKeydown: V,
            onKeyup: h,
          },
          B
        )
      );
    }
  );
}
var ua = Ae({
  name: 'QToggle',
  props: { ...Sn, icon: String, iconColor: String },
  emits: Vn,
  setup(e) {
    function t(l, a) {
      const o = f(
          () =>
            (l.value === !0
              ? e.checkedIcon
              : a.value === !0
              ? e.indeterminateIcon
              : e.uncheckedIcon) || e.icon
        ),
        u = f(() => (l.value === !0 ? e.iconColor : null));
      return () => [
        k('div', { class: 'q-toggle__track' }),
        k(
          'div',
          { class: 'q-toggle__thumb absolute flex flex-center no-wrap' },
          o.value !== void 0
            ? [k(Xe, { name: o.value, color: u.value })]
            : void 0
        ),
      ];
    }
    return xn('toggle', t);
  },
});
const wn = {
    true: 'inset',
    item: 'item-inset',
    'item-thumbnail': 'item-thumbnail-inset',
  },
  Yt = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var kn = Ae({
    name: 'QSeparator',
    props: {
      ...At,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = Re(),
        l = $t(e, t.proxy.$q),
        a = f(() => (e.vertical === !0 ? 'vertical' : 'horizontal')),
        o = f(() => ` q-separator--${a.value}`),
        u = f(() => (e.inset !== !1 ? `${o.value}-${wn[e.inset]}` : '')),
        v = f(
          () =>
            `q-separator${o.value}${u.value}` +
            (e.color !== void 0 ? ` bg-${e.color}` : '') +
            (l.value === !0 ? ' q-separator--dark' : '')
        ),
        g = f(() => {
          const p = {};
          if (
            (e.size !== void 0 &&
              (p[e.vertical === !0 ? 'width' : 'height'] = e.size),
            e.spaced !== !1)
          ) {
            const w =
                e.spaced === !0
                  ? `${Yt.md}px`
                  : e.spaced in Yt
                  ? `${Yt[e.spaced]}px`
                  : e.spaced,
              y = e.vertical === !0 ? ['Left', 'Right'] : ['Top', 'Bottom'];
            p[`margin${y[0]}`] = p[`margin${y[1]}`] = w;
          }
          return p;
        });
      return () =>
        k('hr', {
          class: v.value,
          style: g.value,
          'aria-orientation': a.value,
        });
    },
  }),
  Cn = Ae({
    name: 'QCardSection',
    props: { tag: { type: String, default: 'div' }, horizontal: Boolean },
    setup(e, { slots: t }) {
      const l = f(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? 'horiz row no-wrap' : 'vert'
          }`
      );
      return () => k(e.tag, { class: l.value }, Ee(t.default));
    },
  }),
  qn = Ae({
    name: 'QCardActions',
    props: { ...ka, vertical: Boolean },
    setup(e, { slots: t }) {
      const l = Ca(e),
        a = f(
          () =>
            `q-card__actions ${l.value} q-card__actions--${
              e.vertical === !0 ? 'vert column' : 'horiz row'
            }`
        );
      return () => k('div', { class: a.value }, Ee(t.default));
    },
  });
function Rn(e, t, l) {
  let a;
  function o() {
    a !== void 0 && (gl.remove(a), (a = void 0));
  }
  return (
    Je(() => {
      e.value === !0 && o();
    }),
    {
      removeFromHistory: o,
      addToHistory() {
        (a = { condition: () => l.value === !0, handler: t }), gl.add(a);
      },
    }
  );
}
let Vt = 0,
  Jt,
  el,
  wt,
  tl = !1,
  ql,
  Rl,
  Pl,
  nt = null;
function Pn(e) {
  An(e) && Be(e);
}
function An(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains('q-layout__backdrop')
  )
    return !0;
  const t = qa(e),
    l = e.shiftKey && !e.deltaX,
    a = !l && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    o = l || a ? e.deltaY : e.deltaX;
  for (let u = 0; u < t.length; u++) {
    const v = t[u];
    if (Ua(v, a))
      return a
        ? o < 0 && v.scrollTop === 0
          ? !0
          : o > 0 && v.scrollTop + v.clientHeight === v.scrollHeight
        : o < 0 && v.scrollLeft === 0
        ? !0
        : o > 0 && v.scrollLeft + v.clientWidth === v.scrollWidth;
  }
  return !0;
}
function Al(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Ft(e) {
  tl !== !0 &&
    ((tl = !0),
    requestAnimationFrame(() => {
      tl = !1;
      const { height: t } = e.target,
        { clientHeight: l, scrollTop: a } = document.scrollingElement;
      (wt === void 0 || t !== window.innerHeight) &&
        ((wt = l - t), (document.scrollingElement.scrollTop = a)),
        a > wt &&
          (document.scrollingElement.scrollTop -= Math.ceil((a - wt) / 8));
    }));
}
function $l(e) {
  const t = document.body,
    l = window.visualViewport !== void 0;
  if (e === 'add') {
    const { overflowY: a, overflowX: o } = window.getComputedStyle(t);
    (Jt = Na(window)),
      (el = za(window)),
      (ql = t.style.left),
      (Rl = t.style.top),
      (Pl = window.location.href),
      (t.style.left = `-${Jt}px`),
      (t.style.top = `-${el}px`),
      o !== 'hidden' &&
        (o === 'scroll' || t.scrollWidth > window.innerWidth) &&
        t.classList.add('q-body--force-scrollbar-x'),
      a !== 'hidden' &&
        (a === 'scroll' || t.scrollHeight > window.innerHeight) &&
        t.classList.add('q-body--force-scrollbar-y'),
      t.classList.add('q-body--prevent-scroll'),
      (document.qScrollPrevented = !0),
      ot.is.ios === !0 &&
        (l === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              'resize',
              Ft,
              lt.passiveCapture
            ),
            window.visualViewport.addEventListener(
              'scroll',
              Ft,
              lt.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener('scroll', Al, lt.passiveCapture));
  }
  ot.is.desktop === !0 &&
    ot.is.mac === !0 &&
    window[`${e}EventListener`]('wheel', Pn, lt.notPassive),
    e === 'remove' &&
      (ot.is.ios === !0 &&
        (l === !0
          ? (window.visualViewport.removeEventListener(
              'resize',
              Ft,
              lt.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              'scroll',
              Ft,
              lt.passiveCapture
            ))
          : window.removeEventListener('scroll', Al, lt.passiveCapture)),
      t.classList.remove('q-body--prevent-scroll'),
      t.classList.remove('q-body--force-scrollbar-x'),
      t.classList.remove('q-body--force-scrollbar-y'),
      (document.qScrollPrevented = !1),
      (t.style.left = ql),
      (t.style.top = Rl),
      window.location.href === Pl && window.scrollTo(Jt, el),
      (wt = void 0));
}
function $n(e) {
  let t = 'add';
  if (e === !0) {
    if ((Vt++, nt !== null)) {
      clearTimeout(nt), (nt = null);
      return;
    }
    if (Vt > 1) return;
  } else {
    if (Vt === 0 || (Vt--, Vt > 0)) return;
    if (((t = 'remove'), ot.is.ios === !0 && ot.is.nativeMobile === !0)) {
      nt !== null && clearTimeout(nt),
        (nt = setTimeout(() => {
          $l(t), (nt = null);
        }, 100));
      return;
    }
  }
  $l(t);
}
function Mn() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), $n(t));
    },
  };
}
let Nt = 0;
const En = {
    standard: 'fixed-full flex-center',
    top: 'fixed-top justify-center',
    bottom: 'fixed-bottom justify-center',
    right: 'fixed-right items-center',
    left: 'fixed-left items-center',
  },
  Ml = {
    standard: ['scale', 'scale'],
    top: ['slide-down', 'slide-up'],
    bottom: ['slide-up', 'slide-down'],
    right: ['slide-left', 'slide-right'],
    left: ['slide-right', 'slide-left'],
  };
var ia = Ae({
  name: 'QDialog',
  inheritAttrs: !1,
  props: {
    ...La,
    ...Ha,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: 'standard',
      validator: (e) =>
        e === 'standard' || ['top', 'bottom', 'left', 'right'].includes(e),
    },
  },
  emits: [...ja, 'shake', 'click', 'escapeKey'],
  setup(e, { slots: t, emit: l, attrs: a }) {
    const o = Re(),
      u = m(null),
      v = m(!1),
      g = m(!1);
    let p = null,
      w = null,
      y,
      b;
    const $ = f(
        () =>
          e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
      ),
      { preventBodyScroll: C } = Mn(),
      { registerTimeout: _ } = Ka(),
      { registerTick: z, removeTick: R } = Qa(),
      { transitionProps: J, transitionStyle: G } = Wa(
        e,
        () => Ml[e.position][0],
        () => Ml[e.position][1]
      ),
      {
        showPortal: Z,
        hidePortal: Q,
        portalIsAccessible: X,
        renderPortal: O,
      } = Ga(o, u, K, 'dialog'),
      { hide: N } = Za({
        showing: v,
        hideOnRouteChange: $,
        handleShow: F,
        handleHide: W,
        processOnMount: !0,
      }),
      { addToHistory: oe, removeFromHistory: V } = Rn(v, N, $),
      h = f(
        () =>
          `q-dialog__inner flex no-pointer-events q-dialog__inner--${
            e.maximized === !0 ? 'maximized' : 'minimized'
          } q-dialog__inner--${e.position} ${En[e.position]}` +
          (g.value === !0 ? ' q-dialog__inner--animating' : '') +
          (e.fullWidth === !0 ? ' q-dialog__inner--fullwidth' : '') +
          (e.fullHeight === !0 ? ' q-dialog__inner--fullheight' : '') +
          (e.square === !0 ? ' q-dialog__inner--square' : '')
      ),
      M = f(() => v.value === !0 && e.seamless !== !0),
      c = f(() => (e.autoClose === !0 ? { onClick: d } : {})),
      B = f(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${
          M.value === !0 ? 'modal' : 'seamless'
        }`,
        a.class,
      ]);
    ie(
      () => e.maximized,
      (I) => {
        v.value === !0 && H(I);
      }
    ),
      ie(M, (I) => {
        C(I), I === !0 ? (ta(E), Xa(U)) : (ol(E), yl(U));
      });
    function F(I) {
      oe(),
        (w =
          e.noRefocus === !1 && document.activeElement !== null
            ? document.activeElement
            : null),
        H(e.maximized),
        Z(),
        (g.value = !0),
        e.noFocus !== !0
          ? (document.activeElement !== null && document.activeElement.blur(),
            z(D))
          : R(),
        _(() => {
          if (o.proxy.$q.platform.is.ios === !0) {
            if (e.seamless !== !0 && document.activeElement) {
              const { top: P, bottom: T } =
                  document.activeElement.getBoundingClientRect(),
                { innerHeight: te } = window,
                L =
                  window.visualViewport !== void 0
                    ? window.visualViewport.height
                    : te;
              P > 0 &&
                T > L / 2 &&
                (document.scrollingElement.scrollTop = Math.min(
                  document.scrollingElement.scrollHeight - L,
                  T >= te
                    ? 1 / 0
                    : Math.ceil(document.scrollingElement.scrollTop + T - L / 2)
                )),
                document.activeElement.scrollIntoView();
            }
            (b = !0), u.value.click(), (b = !1);
          }
          Z(!0), (g.value = !1), l('show', I);
        }, e.transitionDuration);
    }
    function W(I) {
      R(),
        V(),
        ae(!0),
        (g.value = !0),
        Q(),
        w !== null &&
          ((
            (I && I.type.indexOf('key') === 0
              ? w.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || w
          ).focus(),
          (w = null)),
        _(() => {
          Q(!0), (g.value = !1), l('hide', I);
        }, e.transitionDuration);
    }
    function D(I) {
      ul(() => {
        let P = u.value;
        P === null ||
          P.contains(document.activeElement) === !0 ||
          ((P =
            (I !== '' ? P.querySelector(I) : null) ||
            P.querySelector(
              '[autofocus][tabindex], [data-autofocus][tabindex]'
            ) ||
            P.querySelector(
              '[autofocus] [tabindex], [data-autofocus] [tabindex]'
            ) ||
            P.querySelector('[autofocus], [data-autofocus]') ||
            P),
          P.focus({ preventScroll: !0 }));
      });
    }
    function S(I) {
      I && typeof I.focus == 'function' ? I.focus({ preventScroll: !0 }) : D(),
        l('shake');
      const P = u.value;
      P !== null &&
        (P.classList.remove('q-animate--scale'),
        P.classList.add('q-animate--scale'),
        p !== null && clearTimeout(p),
        (p = setTimeout(() => {
          (p = null),
            u.value !== null && (P.classList.remove('q-animate--scale'), D());
        }, 170)));
    }
    function U() {
      e.seamless !== !0 &&
        (e.persistent === !0 || e.noEscDismiss === !0
          ? e.maximized !== !0 && e.noShake !== !0 && S()
          : (l('escapeKey'), N()));
    }
    function ae(I) {
      p !== null && (clearTimeout(p), (p = null)),
        (I === !0 || v.value === !0) &&
          (H(!1), e.seamless !== !0 && (C(!1), ol(E), yl(U))),
        I !== !0 && (w = null);
    }
    function H(I) {
      I === !0
        ? y !== !0 &&
          (Nt < 1 && document.body.classList.add('q-body--dialog'),
          Nt++,
          (y = !0))
        : y === !0 &&
          (Nt < 2 && document.body.classList.remove('q-body--dialog'),
          Nt--,
          (y = !1));
    }
    function d(I) {
      b !== !0 && (N(I), l('click', I));
    }
    function r(I) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0
        ? N(I)
        : e.noShake !== !0 && S();
    }
    function E(I) {
      e.allowFocusOutside !== !0 &&
        X.value === !0 &&
        Ra(u.value, I.target) !== !0 &&
        D('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      focus: D,
      shake: S,
      __updateRefocusTarget(I) {
        w = I || null;
      },
    }),
      Je(ae);
    function K() {
      return k(
        'div',
        {
          role: 'dialog',
          'aria-modal': M.value === !0 ? 'true' : 'false',
          ...a,
          class: B.value,
        },
        [
          k(al, { name: 'q-transition--fade', appear: !0 }, () =>
            M.value === !0
              ? k('div', {
                  class: 'q-dialog__backdrop fixed-full',
                  style: G.value,
                  'aria-hidden': 'true',
                  tabindex: -1,
                  onClick: r,
                })
              : null
          ),
          k(al, J.value, () =>
            v.value === !0
              ? k(
                  'div',
                  {
                    ref: u,
                    class: h.value,
                    style: G.value,
                    tabindex: -1,
                    ...c.value,
                  },
                  Ee(t.default)
                )
              : null
          ),
        ]
      );
    }
    return O;
  },
});
const In = {
  position: {
    type: String,
    default: 'bottom-right',
    validator: (e) =>
      [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top',
        'right',
        'bottom',
        'left',
      ].includes(e),
  },
  offset: { type: Array, validator: (e) => e.length === 2 },
  expand: Boolean,
};
function _n() {
  const {
      props: e,
      proxy: { $q: t },
    } = Re(),
    l = kt(Zl, Qe);
  if (l === Qe)
    return console.error('QPageSticky needs to be child of QLayout'), Qe;
  const a = f(() => {
      const b = e.position;
      return {
        top: b.indexOf('top') > -1,
        right: b.indexOf('right') > -1,
        bottom: b.indexOf('bottom') > -1,
        left: b.indexOf('left') > -1,
        vertical: b === 'top' || b === 'bottom',
        horizontal: b === 'left' || b === 'right',
      };
    }),
    o = f(() => l.header.offset),
    u = f(() => l.right.offset),
    v = f(() => l.footer.offset),
    g = f(() => l.left.offset),
    p = f(() => {
      let b = 0,
        $ = 0;
      const C = a.value,
        _ = t.lang.rtl === !0 ? -1 : 1;
      C.top === !0 && o.value !== 0
        ? ($ = `${o.value}px`)
        : C.bottom === !0 && v.value !== 0 && ($ = `${-v.value}px`),
        C.left === !0 && g.value !== 0
          ? (b = `${_ * g.value}px`)
          : C.right === !0 && u.value !== 0 && (b = `${-_ * u.value}px`);
      const z = { transform: `translate(${b}, ${$})` };
      return (
        e.offset && (z.margin = `${e.offset[1]}px ${e.offset[0]}px`),
        C.vertical === !0
          ? (g.value !== 0 &&
              (z[t.lang.rtl === !0 ? 'right' : 'left'] = `${g.value}px`),
            u.value !== 0 &&
              (z[t.lang.rtl === !0 ? 'left' : 'right'] = `${u.value}px`))
          : C.horizontal === !0 &&
            (o.value !== 0 && (z.top = `${o.value}px`),
            v.value !== 0 && (z.bottom = `${v.value}px`)),
        z
      );
    }),
    w = f(
      () =>
        `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${
          e.expand === !0 ? 'expand' : 'shrink'
        }`
    );
  function y(b) {
    const $ = Ee(b.default);
    return k(
      'div',
      { class: w.value, style: p.value },
      e.expand === !0 ? $ : [k('div', $)]
    );
  }
  return { $layout: l, getStickyContent: y };
}
var Bn = Ae({
    name: 'QPageSticky',
    props: In,
    setup(e, { slots: t }) {
      const { getStickyContent: l } = _n();
      return () => l(t);
    },
  }),
  Dn = Ae({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: l },
        } = Re(),
        a = kt(Zl, Qe);
      if (a === Qe)
        return console.error('QPage needs to be a deep child of QLayout'), Qe;
      if (kt(Pa, Qe) === Qe)
        return console.error('QPage needs to be child of QPageContainer'), Qe;
      const u = f(() => {
          const g =
            (a.header.space === !0 ? a.header.size : 0) +
            (a.footer.space === !0 ? a.footer.size : 0);
          if (typeof e.styleFn == 'function') {
            const p =
              a.isContainer.value === !0
                ? a.containerHeight.value
                : l.screen.height;
            return e.styleFn(g, p);
          }
          return {
            minHeight:
              a.isContainer.value === !0
                ? a.containerHeight.value - g + 'px'
                : l.screen.height === 0
                ? g !== 0
                  ? `calc(100vh - ${g}px)`
                  : '100vh'
                : l.screen.height - g + 'px',
          };
        }),
        v = f(() => `q-page${e.padding === !0 ? ' q-layout-padding' : ''}`);
      return () => k('main', { class: v.value, style: u.value }, Ee(t.default));
    },
  });
const El = { threshold: 0, root: null, rootMargin: '0px' };
function Il(e, t, l) {
  let a, o, u;
  typeof l == 'function'
    ? ((a = l), (o = El), (u = t.cfg === void 0))
    : ((a = l.handler),
      (o = Object.assign({}, El, l.cfg)),
      (u = t.cfg === void 0 || ft(t.cfg, o) === !1)),
    t.handler !== a && (t.handler = a),
    u === !0 &&
      ((t.cfg = o),
      t.observer !== void 0 && t.observer.unobserve(e),
      (t.observer = new IntersectionObserver(([v]) => {
        if (typeof t.handler == 'function') {
          if (v.rootBounds === null && document.body.contains(e) === !0) {
            t.observer.unobserve(e), t.observer.observe(e);
            return;
          }
          (t.handler(v, t.observer) === !1 ||
            (t.once === !0 && v.isIntersecting === !0)) &&
            ra(e);
        }
      }, o)),
      t.observer.observe(e));
}
function ra(e) {
  const t = e.__qvisible;
  t !== void 0 &&
    (t.observer !== void 0 && t.observer.unobserve(e), delete e.__qvisible);
}
var On = Xl({
  name: 'intersection',
  mounted(e, { modifiers: t, value: l }) {
    const a = { once: t.once === !0 };
    Il(e, a, l), (e.__qvisible = a);
  },
  updated(e, t) {
    const l = e.__qvisible;
    l !== void 0 && Il(e, l, t.value);
  },
  beforeUnmount: ra,
});
function _l(e) {
  if (e === !1) return 0;
  if (e === !0 || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
var Tn = Xl({
  name: 'close-popup',
  beforeMount(e, { value: t }) {
    const l = {
      depth: _l(t),
      handler(a) {
        l.depth !== 0 &&
          setTimeout(() => {
            const o = Ya(e);
            o !== void 0 && Ja(o, a, l.depth);
          });
      },
      handlerKey(a) {
        Yl(a, 13) === !0 && l.handler(a);
      },
    };
    (e.__qclosepopup = l),
      e.addEventListener('click', l.handler),
      e.addEventListener('keyup', l.handlerKey);
  },
  updated(e, { value: t, oldValue: l }) {
    t !== l && (e.__qclosepopup.depth = _l(t));
  },
  beforeUnmount(e) {
    const t = e.__qclosepopup;
    e.removeEventListener('click', t.handler),
      e.removeEventListener('keyup', t.handlerKey),
      delete e.__qclosepopup;
  },
});
function Et() {
  return kt(Aa);
}
const Fn = { key: 0, class: 'col-7' },
  Nn = { class: 'label-text text-subtitle1' },
  zn = Rt({
    __name: 'numberSettingItem',
    props: Ht(
      {
        settingName: { type: String, required: !0 },
        fixedDigits: { type: Number, default: 6 },
        backgroundColor: { type: String, default: 'bg-secondary' },
        minValue: { type: Number },
        maxValue: { type: Number },
        step: { type: Number, default: 0.1 },
        enable: { type: Boolean, default: !0 },
      },
      {
        modelValue: { type: Number, default: 1, required: !0 },
        modelModifiers: {},
      }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const { t } = Mt(),
        l = Et(),
        a = e,
        o = jt(e, 'modelValue'),
        u = f(() => l.screen.lt.md),
        v = f(() => (l.screen.lt.md ? t(a.settingName) : ''));
      function g(b) {
        return Number(parseFloat(b.toString()).toFixed(a.fixedDigits));
      }
      function p(b) {
        if (/^-?\d+(\.\d+)?$/.test(b)) {
          const C = parseFloat(b);
          a.maxValue != null && C > a.maxValue
            ? (o.value = a.maxValue)
            : a.minValue != null && C < a.minValue
            ? (o.value = a.minValue)
            : (o.value = g(C));
        } else o.value = g(o.value);
      }
      function w() {
        a.maxValue != null
          ? (o.value = g(
              o.value + a.step > a.maxValue ? a.maxValue : o.value + a.step
            ))
          : (o.value = g(o.value + a.step));
      }
      function y() {
        a.minValue != null
          ? (o.value = g(
              o.value - a.step < a.minValue ? a.minValue : o.value - a.step
            ))
          : (o.value = g(o.value - a.step));
      }
      return (b, $) => (
        he(),
        ze(
          'div',
          {
            class: ye([
              'number-setting-item row justify-between items-center full-width q-my-sm q-pa-xs',
              [a.backgroundColor],
            ]),
          },
          [
            u.value
              ? Ct('', !0)
              : (he(),
                ze('div', Fn, [ee('span', Nn, ke(ce(t)(a.settingName)), 1)])),
            ee(
              'div',
              { class: ye({ 'full-width': u.value, 'col-5': !u.value }) },
              [
                u.value
                  ? (he(),
                    Ye(
                      mt,
                      {
                        key: 1,
                        class: 'full-width',
                        modelValue: o.value,
                        'onUpdate:modelValue': [
                          $[2] || ($[2] = (C) => (o.value = C)),
                          $[3] || ($[3] = (C) => p(C)),
                        ],
                        color: 'dark',
                        label: v.value,
                        readonly: !a.enable,
                        outlined: '',
                      },
                      {
                        prepend: me(() => [
                          x(
                            Ce,
                            {
                              icon: 'remove',
                              onClick: y,
                              disable: !a.enable,
                              dense: !u.value,
                              round: '',
                              flat: '',
                            },
                            null,
                            8,
                            ['disable', 'dense']
                          ),
                        ]),
                        append: me(() => [
                          x(
                            Ce,
                            {
                              icon: 'add',
                              onClick: w,
                              disable: !a.enable,
                              dense: !u.value,
                              round: '',
                              flat: '',
                            },
                            null,
                            8,
                            ['disable', 'dense']
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['modelValue', 'label', 'readonly']
                    ))
                  : (he(),
                    Ye(
                      mt,
                      {
                        key: 0,
                        class: 'full-width',
                        modelValue: o.value,
                        'onUpdate:modelValue': [
                          $[0] || ($[0] = (C) => (o.value = C)),
                          $[1] || ($[1] = (C) => p(C)),
                        ],
                        color: 'dark',
                        readonly: !a.enable,
                        dense: '',
                        outlined: '',
                      },
                      {
                        prepend: me(() => [
                          x(
                            Ce,
                            {
                              icon: 'remove',
                              onClick: y,
                              disable: !a.enable,
                              dense: !u.value,
                              round: '',
                              flat: '',
                            },
                            null,
                            8,
                            ['disable', 'dense']
                          ),
                        ]),
                        append: me(() => [
                          x(
                            Ce,
                            {
                              icon: 'add',
                              onClick: w,
                              disable: !a.enable,
                              dense: !u.value,
                              round: '',
                              flat: '',
                            },
                            null,
                            8,
                            ['disable', 'dense']
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['modelValue', 'readonly']
                    )),
              ],
              2
            ),
          ],
          2
        )
      );
    },
  });
var Y = Pt(zn, [['__scopeId', 'data-v-43260c0f']]),
  Un = Ae({
    name: 'QField',
    inheritAttrs: !1,
    props: { ...Kt, tag: { type: String, default: 'label' } },
    emits: il,
    setup() {
      return sl(rl({ requiredForAttr: !1, tagProp: !0 }));
    },
  });
const Ln = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var Hn = Ae({
    name: 'QChip',
    props: {
      ...At,
      ...Gl,
      dense: Boolean,
      icon: String,
      iconRight: String,
      iconRemove: String,
      iconSelected: String,
      label: [String, Number],
      color: String,
      textColor: String,
      modelValue: { type: Boolean, default: !0 },
      selected: { type: Boolean, default: null },
      square: Boolean,
      outline: Boolean,
      clickable: Boolean,
      removable: Boolean,
      removeAriaLabel: String,
      tabindex: [String, Number],
      disable: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
    },
    emits: ['update:modelValue', 'update:selected', 'remove', 'click'],
    setup(e, { slots: t, emit: l }) {
      const {
          proxy: { $q: a },
        } = Re(),
        o = $t(e, a),
        u = Ql(e, Ln),
        v = f(() => e.selected === !0 || e.icon !== void 0),
        g = f(() =>
          e.selected === !0 ? e.iconSelected || a.iconSet.chip.selected : e.icon
        ),
        p = f(() => e.iconRemove || a.iconSet.chip.remove),
        w = f(
          () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
        ),
        y = f(() => {
          const R = (e.outline === !0 && e.color) || e.textColor;
          return (
            'q-chip row inline no-wrap items-center' +
            (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : '') +
            (R ? ` text-${R} q-chip--colored` : '') +
            (e.disable === !0 ? ' disabled' : '') +
            (e.dense === !0 ? ' q-chip--dense' : '') +
            (e.outline === !0 ? ' q-chip--outline' : '') +
            (e.selected === !0 ? ' q-chip--selected' : '') +
            (w.value === !0
              ? ' q-chip--clickable cursor-pointer non-selectable q-hoverable'
              : '') +
            (e.square === !0 ? ' q-chip--square' : '') +
            (o.value === !0 ? ' q-chip--dark q-dark' : '')
          );
        }),
        b = f(() => {
          const R =
              e.disable === !0
                ? { tabindex: -1, 'aria-disabled': 'true' }
                : { tabindex: e.tabindex || 0 },
            J = {
              ...R,
              role: 'button',
              'aria-hidden': 'false',
              'aria-label': e.removeAriaLabel || a.lang.label.remove,
            };
          return { chip: R, remove: J };
        });
      function $(R) {
        R.keyCode === 13 && C(R);
      }
      function C(R) {
        e.disable || (l('update:selected', !e.selected), l('click', R));
      }
      function _(R) {
        (R.keyCode === void 0 || R.keyCode === 13) &&
          (Be(R),
          e.disable === !1 && (l('update:modelValue', !1), l('remove')));
      }
      function z() {
        const R = [];
        w.value === !0 && R.push(k('div', { class: 'q-focus-helper' })),
          v.value === !0 &&
            R.push(
              k(Xe, { class: 'q-chip__icon q-chip__icon--left', name: g.value })
            );
        const J =
          e.label !== void 0
            ? [k('div', { class: 'ellipsis' }, [e.label])]
            : void 0;
        return (
          R.push(
            k(
              'div',
              {
                class:
                  'q-chip__content col row no-wrap items-center q-anchor--skip',
              },
              Ma(t.default, J)
            )
          ),
          e.iconRight &&
            R.push(
              k(Xe, {
                class: 'q-chip__icon q-chip__icon--right',
                name: e.iconRight,
              })
            ),
          e.removable === !0 &&
            R.push(
              k(Xe, {
                class: 'q-chip__icon q-chip__icon--remove cursor-pointer',
                name: p.value,
                ...b.value.remove,
                onClick: _,
                onKeyup: _,
              })
            ),
          R
        );
      }
      return () => {
        if (e.modelValue === !1) return;
        const R = { class: y.value, style: u.value };
        return (
          w.value === !0 &&
            Object.assign(R, b.value.chip, { onClick: C, onKeyup: $ }),
          $a(
            'div',
            R,
            z(),
            'ripple',
            e.ripple !== !1 && e.disable !== !0,
            () => [[Ea, e.ripple]]
          )
        );
      };
    },
  }),
  jn = Ae({
    name: 'QItemLabel',
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String],
    },
    setup(e, { slots: t }) {
      const l = f(() => parseInt(e.lines, 10)),
        a = f(
          () =>
            'q-item__label' +
            (e.overline === !0
              ? ' q-item__label--overline text-overline'
              : '') +
            (e.caption === !0 ? ' q-item__label--caption text-caption' : '') +
            (e.header === !0 ? ' q-item__label--header' : '') +
            (l.value === 1 ? ' ellipsis' : '')
        ),
        o = f(() =>
          e.lines !== void 0 && l.value > 1
            ? {
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': l.value,
              }
            : null
        );
      return () => k('div', { style: o.value, class: a.value }, Ee(t.default));
    },
  });
let Ut = !1;
{
  const e = document.createElement('div');
  e.setAttribute('dir', 'rtl'),
    Object.assign(e.style, { width: '1px', height: '1px', overflow: 'auto' });
  const t = document.createElement('div');
  Object.assign(t.style, { width: '1000px', height: '1px' }),
    document.body.appendChild(e),
    e.appendChild(t),
    (e.scrollLeft = -1e3),
    (Ut = e.scrollLeft >= 0),
    e.remove();
}
const De = 1e3,
  Kn = ['start', 'center', 'end', 'start-force', 'center-force', 'end-force'],
  sa = Array.prototype.filter,
  Qn =
    window.getComputedStyle(document.body).overflowAnchor === void 0
      ? Jl
      : function (e, t) {
          e !== null &&
            (e._qOverflowAnimationFrame !== void 0 &&
              cancelAnimationFrame(e._qOverflowAnimationFrame),
            (e._qOverflowAnimationFrame = requestAnimationFrame(() => {
              if (e === null) return;
              e._qOverflowAnimationFrame = void 0;
              const l = e.children || [];
              sa.call(
                l,
                (o) => o.dataset && o.dataset.qVsAnchor !== void 0
              ).forEach((o) => {
                delete o.dataset.qVsAnchor;
              });
              const a = l[t];
              a && a.dataset && (a.dataset.qVsAnchor = '');
            })));
        };
function vt(e, t) {
  return e + t;
}
function ll(e, t, l, a, o, u, v, g) {
  const p =
      e === window ? document.scrollingElement || document.documentElement : e,
    w = o === !0 ? 'offsetWidth' : 'offsetHeight',
    y = {
      scrollStart: 0,
      scrollViewSize: -v - g,
      scrollMaxSize: 0,
      offsetStart: -v,
      offsetEnd: -g,
    };
  if (
    (o === !0
      ? (e === window
          ? ((y.scrollStart =
              window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0),
            (y.scrollViewSize += document.documentElement.clientWidth))
          : ((y.scrollStart = p.scrollLeft),
            (y.scrollViewSize += p.clientWidth)),
        (y.scrollMaxSize = p.scrollWidth),
        u === !0 &&
          (y.scrollStart =
            (Ut === !0 ? y.scrollMaxSize - y.scrollViewSize : 0) -
            y.scrollStart))
      : (e === window
          ? ((y.scrollStart =
              window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop ||
              0),
            (y.scrollViewSize += document.documentElement.clientHeight))
          : ((y.scrollStart = p.scrollTop),
            (y.scrollViewSize += p.clientHeight)),
        (y.scrollMaxSize = p.scrollHeight)),
    l !== null)
  )
    for (
      let b = l.previousElementSibling;
      b !== null;
      b = b.previousElementSibling
    )
      b.classList.contains('q-virtual-scroll--skip') === !1 &&
        (y.offsetStart += b[w]);
  if (a !== null)
    for (let b = a.nextElementSibling; b !== null; b = b.nextElementSibling)
      b.classList.contains('q-virtual-scroll--skip') === !1 &&
        (y.offsetEnd += b[w]);
  if (t !== e) {
    const b = p.getBoundingClientRect(),
      $ = t.getBoundingClientRect();
    o === !0
      ? ((y.offsetStart += $.left - b.left), (y.offsetEnd -= $.width))
      : ((y.offsetStart += $.top - b.top), (y.offsetEnd -= $.height)),
      e !== window && (y.offsetStart += y.scrollStart),
      (y.offsetEnd += y.scrollMaxSize - y.offsetStart);
  }
  return y;
}
function Bl(e, t, l, a) {
  t === 'end' &&
    (t = (e === window ? document.body : e)[
      l === !0 ? 'scrollWidth' : 'scrollHeight'
    ]),
    e === window
      ? l === !0
        ? (a === !0 &&
            (t =
              (Ut === !0
                ? document.body.scrollWidth -
                  document.documentElement.clientWidth
                : 0) - t),
          window.scrollTo(
            t,
            window.pageYOffset || window.scrollY || document.body.scrollTop || 0
          ))
        : window.scrollTo(
            window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0,
            t
          )
      : l === !0
      ? (a === !0 && (t = (Ut === !0 ? e.scrollWidth - e.offsetWidth : 0) - t),
        (e.scrollLeft = t))
      : (e.scrollTop = t);
}
function xt(e, t, l, a) {
  if (l >= a) return 0;
  const o = t.length,
    u = Math.floor(l / De),
    v = Math.floor((a - 1) / De) + 1;
  let g = e.slice(u, v).reduce(vt, 0);
  return (
    l % De !== 0 && (g -= t.slice(u * De, l).reduce(vt, 0)),
    a % De !== 0 && a !== o && (g -= t.slice(a, v * De).reduce(vt, 0)),
    g
  );
}
const Wn = {
    virtualScrollSliceSize: { type: [Number, String], default: null },
    virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 },
    virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 },
    virtualScrollItemSize: { type: [Number, String], default: 24 },
    virtualScrollStickySizeStart: { type: [Number, String], default: 0 },
    virtualScrollStickySizeEnd: { type: [Number, String], default: 0 },
    tableColspan: [Number, String],
  },
  Gn = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Wn };
function Zn({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: l,
  virtualScrollItemSizeComputed: a,
}) {
  const o = Re(),
    { props: u, emit: v, proxy: g } = o,
    { $q: p } = g;
  let w,
    y,
    b,
    $ = [],
    C;
  const _ = m(0),
    z = m(0),
    R = m({}),
    J = m(null),
    G = m(null),
    Z = m(null),
    Q = m({ from: 0, to: 0 }),
    X = f(() => (u.tableColspan !== void 0 ? u.tableColspan : 100));
  a === void 0 && (a = f(() => u.virtualScrollItemSize));
  const O = f(() => a.value + ';' + u.virtualScrollHorizontal),
    N = f(
      () =>
        O.value +
        ';' +
        u.virtualScrollSliceRatioBefore +
        ';' +
        u.virtualScrollSliceRatioAfter
    );
  ie(N, () => {
    D();
  }),
    ie(O, oe);
  function oe() {
    W(y, !0);
  }
  function V(d) {
    W(d === void 0 ? y : d);
  }
  function h(d, r) {
    const E = t();
    if (E == null || E.nodeType === 8) return;
    const K = ll(
      E,
      l(),
      J.value,
      G.value,
      u.virtualScrollHorizontal,
      p.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    b !== K.scrollViewSize && D(K.scrollViewSize),
      c(
        E,
        K,
        Math.min(e.value - 1, Math.max(0, parseInt(d, 10) || 0)),
        0,
        Kn.indexOf(r) > -1 ? r : y > -1 && d > y ? 'end' : 'start'
      );
  }
  function M() {
    const d = t();
    if (d == null || d.nodeType === 8) return;
    const r = ll(
        d,
        l(),
        J.value,
        G.value,
        u.virtualScrollHorizontal,
        p.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ),
      E = e.value - 1,
      K = r.scrollMaxSize - r.offsetStart - r.offsetEnd - z.value;
    if (w === r.scrollStart) return;
    if (r.scrollMaxSize <= 0) {
      c(d, r, 0, 0);
      return;
    }
    b !== r.scrollViewSize && D(r.scrollViewSize), B(Q.value.from);
    const I = Math.floor(
      r.scrollMaxSize -
        Math.max(r.scrollViewSize, r.offsetEnd) -
        Math.min(C[E], r.scrollViewSize / 2)
    );
    if (I > 0 && Math.ceil(r.scrollStart) >= I) {
      c(d, r, E, r.scrollMaxSize - r.offsetEnd - $.reduce(vt, 0));
      return;
    }
    let P = 0,
      T = r.scrollStart - r.offsetStart,
      te = T;
    if (T <= K && T + r.scrollViewSize >= _.value)
      (T -= _.value), (P = Q.value.from), (te = T);
    else for (let L = 0; T >= $[L] && P < E; L++) (T -= $[L]), (P += De);
    for (; T > 0 && P < E; )
      (T -= C[P]), T > -r.scrollViewSize ? (P++, (te = T)) : (te = C[P] + T);
    c(d, r, P, te);
  }
  function c(d, r, E, K, I) {
    const P = typeof I == 'string' && I.indexOf('-force') > -1,
      T = P === !0 ? I.replace('-force', '') : I,
      te = T !== void 0 ? T : 'start';
    let L = Math.max(0, E - R.value[te]),
      ge = L + R.value.total;
    ge > e.value && ((ge = e.value), (L = Math.max(0, ge - R.value.total))),
      (w = r.scrollStart);
    const Pe = L !== Q.value.from || ge !== Q.value.to;
    if (Pe === !1 && T === void 0) {
      U(E);
      return;
    }
    const { activeElement: Ue } = document,
      xe = Z.value;
    Pe === !0 &&
      xe !== null &&
      xe !== Ue &&
      xe.contains(Ue) === !0 &&
      (xe.addEventListener('focusout', F),
      setTimeout(() => {
        xe !== null && xe.removeEventListener('focusout', F);
      })),
      Qn(xe, E - L);
    const Le = T !== void 0 ? C.slice(L, E).reduce(vt, 0) : 0;
    if (Pe === !0) {
      const $e = ge >= Q.value.from && L <= Q.value.to ? Q.value.to : ge;
      (Q.value = { from: L, to: $e }),
        (_.value = xt($, C, 0, L)),
        (z.value = xt($, C, ge, e.value)),
        requestAnimationFrame(() => {
          Q.value.to !== ge &&
            w === r.scrollStart &&
            ((Q.value = { from: Q.value.from, to: ge }),
            (z.value = xt($, C, ge, e.value)));
        });
    }
    requestAnimationFrame(() => {
      if (w !== r.scrollStart) return;
      Pe === !0 && B(L);
      const $e = C.slice(L, E).reduce(vt, 0),
        Me = $e + r.offsetStart + _.value,
        He = Me + C[E];
      let Oe = Me + K;
      if (T !== void 0) {
        const We = $e - Le,
          Te = r.scrollStart + We;
        Oe =
          P !== !0 && Te < Me && He < Te + r.scrollViewSize
            ? Te
            : T === 'end'
            ? He - r.scrollViewSize
            : Me -
              (T === 'start' ? 0 : Math.round((r.scrollViewSize - C[E]) / 2));
      }
      (w = Oe), Bl(d, Oe, u.virtualScrollHorizontal, p.lang.rtl), U(E);
    });
  }
  function B(d) {
    const r = Z.value;
    if (r) {
      const E = sa.call(
          r.children,
          (L) =>
            L.classList && L.classList.contains('q-virtual-scroll--skip') === !1
        ),
        K = E.length,
        I =
          u.virtualScrollHorizontal === !0
            ? (L) => L.getBoundingClientRect().width
            : (L) => L.offsetHeight;
      let P = d,
        T,
        te;
      for (let L = 0; L < K; ) {
        for (
          T = I(E[L]), L++;
          L < K &&
          E[L].classList.contains('q-virtual-scroll--with-prev') === !0;

        )
          (T += I(E[L])), L++;
        (te = T - C[P]),
          te !== 0 && ((C[P] += te), ($[Math.floor(P / De)] += te)),
          P++;
      }
    }
  }
  function F() {
    Z.value !== null && Z.value !== void 0 && Z.value.focus();
  }
  function W(d, r) {
    const E = 1 * a.value;
    (r === !0 || Array.isArray(C) === !1) && (C = []);
    const K = C.length;
    C.length = e.value;
    for (let P = e.value - 1; P >= K; P--) C[P] = E;
    const I = Math.floor((e.value - 1) / De);
    $ = [];
    for (let P = 0; P <= I; P++) {
      let T = 0;
      const te = Math.min((P + 1) * De, e.value);
      for (let L = P * De; L < te; L++) T += C[L];
      $.push(T);
    }
    (y = -1),
      (w = void 0),
      (_.value = xt($, C, 0, Q.value.from)),
      (z.value = xt($, C, Q.value.to, e.value)),
      d >= 0
        ? (B(Q.value.from),
          qe(() => {
            h(d);
          }))
        : ae();
  }
  function D(d) {
    if (d === void 0 && typeof window != 'undefined') {
      const T = t();
      T != null &&
        T.nodeType !== 8 &&
        (d = ll(
          T,
          l(),
          J.value,
          G.value,
          u.virtualScrollHorizontal,
          p.lang.rtl,
          u.virtualScrollStickySizeStart,
          u.virtualScrollStickySizeEnd
        ).scrollViewSize);
    }
    b = d;
    const r = parseFloat(u.virtualScrollSliceRatioBefore) || 0,
      E = parseFloat(u.virtualScrollSliceRatioAfter) || 0,
      K = 1 + r + E,
      I = d === void 0 || d <= 0 ? 1 : Math.ceil(d / a.value),
      P = Math.max(
        1,
        I,
        Math.ceil(
          (u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / K
        )
      );
    R.value = {
      total: Math.ceil(P * K),
      start: Math.ceil(P * r),
      center: Math.ceil(P * (0.5 + r)),
      end: Math.ceil(P * (1 + r)),
      view: I,
    };
  }
  function S(d, r) {
    const E = u.virtualScrollHorizontal === !0 ? 'width' : 'height',
      K = { ['--q-virtual-scroll-item-' + E]: a.value + 'px' };
    return [
      d === 'tbody'
        ? k(d, { class: 'q-virtual-scroll__padding', key: 'before', ref: J }, [
            k('tr', [
              k('td', {
                style: { [E]: `${_.value}px`, ...K },
                colspan: X.value,
              }),
            ]),
          ])
        : k(d, {
            class: 'q-virtual-scroll__padding',
            key: 'before',
            ref: J,
            style: { [E]: `${_.value}px`, ...K },
          }),
      k(
        d,
        {
          class: 'q-virtual-scroll__content',
          key: 'content',
          ref: Z,
          tabindex: -1,
        },
        r.flat()
      ),
      d === 'tbody'
        ? k(d, { class: 'q-virtual-scroll__padding', key: 'after', ref: G }, [
            k('tr', [
              k('td', {
                style: { [E]: `${z.value}px`, ...K },
                colspan: X.value,
              }),
            ]),
          ])
        : k(d, {
            class: 'q-virtual-scroll__padding',
            key: 'after',
            ref: G,
            style: { [E]: `${z.value}px`, ...K },
          }),
    ];
  }
  function U(d) {
    y !== d &&
      (u.onVirtualScroll !== void 0 &&
        v('virtualScroll', {
          index: d,
          from: Q.value.from,
          to: Q.value.to - 1,
          direction: d < y ? 'decrease' : 'increase',
          ref: g,
        }),
      (y = d));
  }
  D();
  const ae = zl(M, p.platform.is.ios === !0 ? 120 : 35);
  Ia(() => {
    D();
  });
  let H = !1;
  return (
    Hl(() => {
      H = !0;
    }),
    jl(() => {
      if (H !== !0) return;
      const d = t();
      w !== void 0 && d !== void 0 && d !== null && d.nodeType !== 8
        ? Bl(d, w, u.virtualScrollHorizontal, p.lang.rtl)
        : h(y);
    }),
    Je(() => {
      ae.cancel();
    }),
    Object.assign(g, { scrollTo: h, reset: oe, refresh: V }),
    {
      virtualScrollSliceRange: Q,
      virtualScrollSliceSizeComputed: R,
      setVirtualScrollSize: D,
      onVirtualScrollEvt: ae,
      localResetVirtualScroll: W,
      padVirtualScroll: S,
      scrollTo: h,
      reset: oe,
      refresh: V,
    }
  );
}
function Dl(e, t, l) {
  if (l <= t) return t;
  const a = l - t + 1;
  let o = t + ((e - t) % a);
  return o < t && (o = a + o), o === 0 ? 0 : o;
}
const Ol = (e) => ['add', 'add-unique', 'toggle'].includes(e),
  Xn = '.*+?^${}()|[]\\',
  Yn = Object.keys(Kt);
var Tl = Ae({
  name: 'QSelect',
  inheritAttrs: !1,
  props: {
    ...Gn,
    ...dl,
    ...Kt,
    modelValue: { required: !0 },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: { type: Array, default: () => [] },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: { type: Boolean, default: null },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: { type: String, validator: Ol },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: { type: [Number, String], default: 500 },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: { type: [String, Number], default: 0 },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (e) => ['default', 'menu', 'dialog'].includes(e),
      default: 'default',
    },
    virtualScrollItemSize: { type: [Number, String], default: void 0 },
    onNewValue: Function,
    onFilter: Function,
  },
  emits: [
    ...il,
    'add',
    'remove',
    'inputValue',
    'newValue',
    'keyup',
    'keypress',
    'keydown',
    'filterAbort',
  ],
  setup(e, { slots: t, emit: l }) {
    const { proxy: a } = Re(),
      { $q: o } = a,
      u = m(!1),
      v = m(!1),
      g = m(-1),
      p = m(''),
      w = m(!1),
      y = m(!1);
    let b = null,
      $ = null,
      C,
      _,
      z,
      R = null,
      J,
      G,
      Z,
      Q;
    const X = m(null),
      O = m(null),
      N = m(null),
      oe = m(null),
      V = m(null),
      h = na(e),
      M = oa(i),
      c = f(() => (Array.isArray(e.options) ? e.options.length : 0)),
      B = f(() =>
        e.virtualScrollItemSize === void 0
          ? e.optionsDense === !0
            ? 24
            : 48
          : e.virtualScrollItemSize
      ),
      {
        virtualScrollSliceRange: F,
        virtualScrollSliceSizeComputed: W,
        localResetVirtualScroll: D,
        padVirtualScroll: S,
        onVirtualScrollEvt: U,
        scrollTo: ae,
        setVirtualScrollSize: H,
      } = Zn({
        virtualScrollLength: c,
        getVirtualScrollTarget: Qt,
        getVirtualScrollEl: Dt,
        virtualScrollItemSizeComputed: B,
      }),
      d = rl(),
      r = f(() => {
        const n = e.mapOptions === !0 && e.multiple !== !0,
          A =
            e.modelValue !== void 0 && (e.modelValue !== null || n === !0)
              ? e.multiple === !0 && Array.isArray(e.modelValue)
                ? e.modelValue
                : [e.modelValue]
              : [];
        if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
          const q = e.mapOptions === !0 && C !== void 0 ? C : [],
            j = A.map((ne) => pt(ne, q));
          return e.modelValue === null && n === !0
            ? j.filter((ne) => ne !== null)
            : j;
        }
        return A;
      }),
      E = f(() => {
        const n = {};
        return (
          Yn.forEach((A) => {
            const q = e[A];
            q !== void 0 && (n[A] = q);
          }),
          n
        );
      }),
      K = f(() => (e.optionsDark === null ? d.isDark.value : e.optionsDark)),
      I = f(() => qt(r.value)),
      P = f(() => {
        let n = 'q-field__input q-placeholder col';
        return e.hideSelected === !0 || r.value.length === 0
          ? [n, e.inputClass]
          : ((n += ' q-field__input--padding'),
            e.inputClass === void 0 ? n : [n, e.inputClass]);
      }),
      T = f(
        () =>
          (e.virtualScrollHorizontal === !0
            ? 'q-virtual-scroll--horizontal'
            : '') + (e.popupContentClass ? ' ' + e.popupContentClass : '')
      ),
      te = f(() => c.value === 0),
      L = f(() => r.value.map((n) => pe.value(n)).join(', ')),
      ge = f(() => (e.displayValue !== void 0 ? e.displayValue : L.value)),
      Pe = f(() =>
        e.optionsHtml === !0 ? () => !0 : (n) => n != null && n.html === !0
      ),
      Ue = f(
        () =>
          e.displayValueHtml === !0 ||
          (e.displayValue === void 0 &&
            (e.optionsHtml === !0 || r.value.some(Pe.value)))
      ),
      xe = f(() => (d.focused.value === !0 ? e.tabindex : -1)),
      Le = f(() => {
        const n = {
          tabindex: e.tabindex,
          role: 'combobox',
          'aria-label': e.label,
          'aria-readonly': e.readonly === !0 ? 'true' : 'false',
          'aria-autocomplete': e.useInput === !0 ? 'list' : 'none',
          'aria-expanded': u.value === !0 ? 'true' : 'false',
          'aria-controls': `${d.targetUid.value}_lb`,
        };
        return (
          g.value >= 0 &&
            (n['aria-activedescendant'] = `${d.targetUid.value}_${g.value}`),
          n
        );
      }),
      $e = f(() => ({
        id: `${d.targetUid.value}_lb`,
        role: 'listbox',
        'aria-multiselectable': e.multiple === !0 ? 'true' : 'false',
      })),
      Me = f(() =>
        r.value.map((n, A) => ({
          index: A,
          opt: n,
          html: Pe.value(n),
          selected: !0,
          removeAtIndex: re,
          toggleOption: be,
          tabindex: xe.value,
        }))
      ),
      He = f(() => {
        if (c.value === 0) return [];
        const { from: n, to: A } = F.value;
        return e.options.slice(n, A).map((q, j) => {
          const ne = Ie.value(q) === !0,
            le = ue(q) === !0,
            Se = n + j,
            de = {
              clickable: !0,
              active: le,
              activeClass: Te.value,
              manualFocus: !0,
              focused: !1,
              disable: ne,
              tabindex: -1,
              dense: e.optionsDense,
              dark: K.value,
              role: 'option',
              'aria-selected': le === !0 ? 'true' : 'false',
              id: `${d.targetUid.value}_${Se}`,
              onClick: () => {
                be(q);
              },
            };
          return (
            ne !== !0 &&
              (g.value === Se && (de.focused = !0),
              o.platform.is.desktop === !0 &&
                (de.onMousemove = () => {
                  u.value === !0 && _e(Se);
                })),
            {
              index: Se,
              opt: q,
              html: Pe.value(q),
              label: pe.value(q),
              selected: de.active,
              focused: de.focused,
              toggleOption: be,
              setOptionIndex: _e,
              itemProps: de,
            }
          );
        });
      }),
      Oe = f(() =>
        e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown
      ),
      We = f(
        () =>
          e.optionsCover === !1 &&
          e.outlined !== !0 &&
          e.standout !== !0 &&
          e.borderless !== !0 &&
          e.rounded !== !0
      ),
      Te = f(() =>
        e.optionsSelectedClass !== void 0
          ? e.optionsSelectedClass
          : e.color !== void 0
          ? `text-${e.color}`
          : ''
      ),
      we = f(() => bt(e.optionValue, 'value')),
      pe = f(() => bt(e.optionLabel, 'label')),
      Ie = f(() => bt(e.optionDisable, 'disable')),
      je = f(() => r.value.map((n) => we.value(n))),
      ut = f(() => {
        const n = {
          onInput: i,
          onChange: M,
          onKeydown: Bt,
          onKeyup: Ne,
          onKeypress: yt,
          onFocus: _t,
          onClick(A) {
            _ === !0 && Ge(A);
          },
        };
        return (
          (n.onCompositionstart =
            n.onCompositionupdate =
            n.onCompositionend =
              M),
          n
        );
      });
    ie(
      r,
      (n) => {
        (C = n),
          e.useInput === !0 &&
            e.fillInput === !0 &&
            e.multiple !== !0 &&
            d.innerLoading.value !== !0 &&
            ((v.value !== !0 && u.value !== !0) || I.value !== !0) &&
            (z !== !0 && dt(), (v.value === !0 || u.value === !0) && it(''));
      },
      { immediate: !0 }
    ),
      ie(() => e.fillInput, dt),
      ie(u, Gt),
      ie(c, Sa);
    function It(n) {
      return e.emitValue === !0 ? we.value(n) : n;
    }
    function gt(n) {
      if (n > -1 && n < r.value.length)
        if (e.multiple === !0) {
          const A = e.modelValue.slice();
          l('remove', { index: n, value: A.splice(n, 1)[0] }),
            l('update:modelValue', A);
        } else l('update:modelValue', null);
    }
    function re(n) {
      gt(n), d.focus();
    }
    function et(n, A) {
      const q = It(n);
      if (e.multiple !== !0) {
        e.fillInput === !0 && St(pe.value(n), !0, !0),
          l('update:modelValue', q);
        return;
      }
      if (r.value.length === 0) {
        l('add', { index: 0, value: q }),
          l('update:modelValue', e.multiple === !0 ? [q] : q);
        return;
      }
      if (
        (A === !0 && ue(n) === !0) ||
        (e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
      )
        return;
      const j = e.modelValue.slice();
      l('add', { index: j.length, value: q }),
        j.push(q),
        l('update:modelValue', j);
    }
    function be(n, A) {
      if (d.editable.value !== !0 || n === void 0 || Ie.value(n) === !0) return;
      const q = we.value(n);
      if (e.multiple !== !0) {
        A !== !0 && (St(e.fillInput === !0 ? pe.value(n) : '', !0, !0), tt()),
          O.value !== null && O.value.focus(),
          (r.value.length === 0 || ft(we.value(r.value[0]), q) !== !0) &&
            l('update:modelValue', e.emitValue === !0 ? q : n);
        return;
      }
      if (
        ((_ !== !0 || w.value === !0) && d.focus(), _t(), r.value.length === 0)
      ) {
        const le = e.emitValue === !0 ? q : n;
        l('add', { index: 0, value: le }),
          l('update:modelValue', e.multiple === !0 ? [le] : le);
        return;
      }
      const j = e.modelValue.slice(),
        ne = je.value.findIndex((le) => ft(le, q));
      if (ne > -1) l('remove', { index: ne, value: j.splice(ne, 1)[0] });
      else {
        if (e.maxValues !== void 0 && j.length >= e.maxValues) return;
        const le = e.emitValue === !0 ? q : n;
        l('add', { index: j.length, value: le }), j.push(le);
      }
      l('update:modelValue', j);
    }
    function _e(n) {
      if (o.platform.is.desktop !== !0) return;
      const A = n > -1 && n < c.value ? n : -1;
      g.value !== A && (g.value = A);
    }
    function Fe(n = 1, A) {
      if (u.value === !0) {
        let q = g.value;
        do q = Dl(q + n, -1, c.value - 1);
        while (q !== -1 && q !== g.value && Ie.value(e.options[q]) === !0);
        g.value !== q &&
          (_e(q),
          ae(q),
          A !== !0 &&
            e.useInput === !0 &&
            e.fillInput === !0 &&
            s(q >= 0 ? pe.value(e.options[q]) : J, !0));
      }
    }
    function pt(n, A) {
      const q = (j) => ft(we.value(j), n);
      return e.options.find(q) || A.find(q) || n;
    }
    function bt(n, A) {
      const q = n !== void 0 ? n : A;
      return typeof q == 'function'
        ? q
        : (j) => (j !== null && typeof j == 'object' && q in j ? j[q] : j);
    }
    function ue(n) {
      const A = we.value(n);
      return je.value.find((q) => ft(q, A)) !== void 0;
    }
    function _t(n) {
      e.useInput === !0 &&
        O.value !== null &&
        (n === void 0 ||
          (O.value === n.target && n.target.value === L.value)) &&
        O.value.select();
    }
    function fe(n) {
      Yl(n, 27) === !0 && u.value === !0 && (Ge(n), tt(), dt()), l('keyup', n);
    }
    function Ne(n) {
      const { value: A } = n.target;
      if (n.keyCode !== void 0) {
        fe(n);
        return;
      }
      if (
        ((n.target.value = ''),
        b !== null && (clearTimeout(b), (b = null)),
        $ !== null && (clearTimeout($), ($ = null)),
        dt(),
        typeof A == 'string' && A.length !== 0)
      ) {
        const q = A.toLocaleLowerCase(),
          j = (le) => {
            const Se = e.options.find(
              (de) => le.value(de).toLocaleLowerCase() === q
            );
            return Se === void 0
              ? !1
              : (r.value.indexOf(Se) === -1 ? be(Se) : tt(), !0);
          },
          ne = (le) => {
            j(we) !== !0 &&
              (j(pe) === !0 || le === !0 || it(A, !0, () => ne(!0)));
          };
        ne();
      } else d.clearValue(n);
    }
    function yt(n) {
      l('keypress', n);
    }
    function Bt(n) {
      if ((l('keydown', n), Kl(n) === !0)) return;
      const A =
          p.value.length !== 0 &&
          (e.newValueMode !== void 0 || e.onNewValue !== void 0),
        q =
          n.shiftKey !== !0 && e.multiple !== !0 && (g.value > -1 || A === !0);
      if (n.keyCode === 27) {
        Ze(n);
        return;
      }
      if (n.keyCode === 9 && q === !1) {
        rt();
        return;
      }
      if (
        n.target === void 0 ||
        n.target.id !== d.targetUid.value ||
        d.editable.value !== !0
      )
        return;
      if (n.keyCode === 40 && d.innerLoading.value !== !0 && u.value === !1) {
        Be(n), st();
        return;
      }
      if (
        n.keyCode === 8 &&
        (e.useChips === !0 || e.clearable === !0) &&
        e.hideSelected !== !0 &&
        p.value.length === 0
      ) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0
          ? gt(e.modelValue.length - 1)
          : e.multiple !== !0 &&
            e.modelValue !== null &&
            l('update:modelValue', null);
        return;
      }
      (n.keyCode === 35 || n.keyCode === 36) &&
        (typeof p.value != 'string' || p.value.length === 0) &&
        (Be(n), (g.value = -1), Fe(n.keyCode === 36 ? 1 : -1, e.multiple)),
        (n.keyCode === 33 || n.keyCode === 34) &&
          W.value !== void 0 &&
          (Be(n),
          (g.value = Math.max(
            -1,
            Math.min(
              c.value,
              g.value + (n.keyCode === 33 ? -1 : 1) * W.value.view
            )
          )),
          Fe(n.keyCode === 33 ? 1 : -1, e.multiple)),
        (n.keyCode === 38 || n.keyCode === 40) &&
          (Be(n), Fe(n.keyCode === 38 ? -1 : 1, e.multiple));
      const j = c.value;
      if (
        ((Z === void 0 || Q < Date.now()) && (Z = ''),
        j > 0 &&
          e.useInput !== !0 &&
          n.key !== void 0 &&
          n.key.length === 1 &&
          n.altKey === !1 &&
          n.ctrlKey === !1 &&
          n.metaKey === !1 &&
          (n.keyCode !== 32 || Z.length !== 0))
      ) {
        u.value !== !0 && st(n);
        const ne = n.key.toLocaleLowerCase(),
          le = Z.length === 1 && Z[0] === ne;
        (Q = Date.now() + 1500), le === !1 && (Be(n), (Z += ne));
        const Se = new RegExp(
          '^' +
            Z.split('')
              .map((Zt) => (Xn.indexOf(Zt) > -1 ? '\\' + Zt : Zt))
              .join('.*'),
          'i'
        );
        let de = g.value;
        if (le === !0 || de < 0 || Se.test(pe.value(e.options[de])) !== !0)
          do de = Dl(de + 1, -1, j - 1);
          while (
            de !== g.value &&
            (Ie.value(e.options[de]) === !0 ||
              Se.test(pe.value(e.options[de])) !== !0)
          );
        g.value !== de &&
          qe(() => {
            _e(de),
              ae(de),
              de >= 0 &&
                e.useInput === !0 &&
                e.fillInput === !0 &&
                s(pe.value(e.options[de]), !0);
          });
        return;
      }
      if (
        !(
          n.keyCode !== 13 &&
          (n.keyCode !== 32 || e.useInput === !0 || Z !== '') &&
          (n.keyCode !== 9 || q === !1)
        )
      ) {
        if ((n.keyCode !== 9 && Be(n), g.value > -1 && g.value < j)) {
          be(e.options[g.value]);
          return;
        }
        if (A === !0) {
          const ne = (le, Se) => {
            if (Se) {
              if (Ol(Se) !== !0) return;
            } else Se = e.newValueMode;
            if ((St('', e.multiple !== !0, !0), le == null)) return;
            (Se === 'toggle' ? be : et)(le, Se === 'add-unique'),
              e.multiple !== !0 && (O.value !== null && O.value.focus(), tt());
          };
          if (
            (e.onNewValue !== void 0 ? l('newValue', p.value, ne) : ne(p.value),
            e.multiple !== !0)
          )
            return;
        }
        u.value === !0 ? rt() : d.innerLoading.value !== !0 && st();
      }
    }
    function Dt() {
      return _ === !0
        ? V.value
        : N.value !== null && N.value.contentEl !== null
        ? N.value.contentEl
        : void 0;
    }
    function Qt() {
      return Dt();
    }
    function Wt() {
      return e.hideSelected === !0
        ? []
        : t['selected-item'] !== void 0
        ? Me.value.map((n) => t['selected-item'](n)).slice()
        : t.selected !== void 0
        ? [].concat(t.selected())
        : e.useChips === !0
        ? Me.value.map((n, A) =>
            k(
              Hn,
              {
                key: 'option-' + A,
                removable: d.editable.value === !0 && Ie.value(n.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: xe.value,
                onRemove() {
                  n.removeAtIndex(A);
                },
              },
              () =>
                k('span', {
                  class: 'ellipsis',
                  [n.html === !0 ? 'innerHTML' : 'textContent']: pe.value(
                    n.opt
                  ),
                })
            )
          )
        : [
            k('span', {
              [Ue.value === !0 ? 'innerHTML' : 'textContent']: ge.value,
            }),
          ];
    }
    function ht() {
      if (te.value === !0)
        return t['no-option'] !== void 0
          ? t['no-option']({ inputValue: p.value })
          : void 0;
      const n =
        t.option !== void 0
          ? t.option
          : (q) =>
              k(ln, { key: q.index, ...q.itemProps }, () =>
                k(tn, () =>
                  k(jn, () =>
                    k('span', {
                      [q.html === !0 ? 'innerHTML' : 'textContent']: q.label,
                    })
                  )
                )
              );
      let A = S('div', He.value.map(n));
      return (
        t['before-options'] !== void 0 && (A = t['before-options']().concat(A)),
        Wl(t['after-options'], A)
      );
    }
    function se(n, A) {
      const q =
          A === !0 ? { ...Le.value, ...d.splitAttrs.attributes.value } : void 0,
        j = {
          ref: A === !0 ? O : void 0,
          key: 'i_t',
          class: P.value,
          style: e.inputStyle,
          value: p.value !== void 0 ? p.value : '',
          type: 'search',
          ...q,
          id: A === !0 ? d.targetUid.value : void 0,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          'data-autofocus': n === !0 || e.autofocus === !0 || void 0,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
          ...ut.value,
        };
      return (
        n !== !0 &&
          _ === !0 &&
          (Array.isArray(j.class) === !0
            ? (j.class = [...j.class, 'no-pointer-events'])
            : (j.class += ' no-pointer-events')),
        k('input', j)
      );
    }
    function i(n) {
      b !== null && (clearTimeout(b), (b = null)),
        $ !== null && (clearTimeout($), ($ = null)),
        !(n && n.target && n.target.qComposing === !0) &&
          (s(n.target.value || ''),
          (z = !0),
          (J = p.value),
          d.focused.value !== !0 && (_ !== !0 || w.value === !0) && d.focus(),
          e.onFilter !== void 0 &&
            (b = setTimeout(() => {
              (b = null), it(p.value);
            }, e.inputDebounce)));
    }
    function s(n, A) {
      p.value !== n &&
        ((p.value = n),
        A === !0 || e.inputDebounce === 0 || e.inputDebounce === '0'
          ? l('inputValue', n)
          : ($ = setTimeout(() => {
              ($ = null), l('inputValue', n);
            }, e.inputDebounce)));
    }
    function St(n, A, q) {
      (z = q !== !0),
        e.useInput === !0 &&
          (s(n, !0), (A === !0 || q !== !0) && (J = n), A !== !0 && it(n));
    }
    function it(n, A, q) {
      if (e.onFilter === void 0 || (A !== !0 && d.focused.value !== !0)) return;
      d.innerLoading.value === !0
        ? l('filterAbort')
        : ((d.innerLoading.value = !0), (y.value = !0)),
        n !== '' &&
          e.multiple !== !0 &&
          r.value.length !== 0 &&
          z !== !0 &&
          n === pe.value(r.value[0]) &&
          (n = '');
      const j = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      R !== null && clearTimeout(R),
        (R = j),
        l(
          'filter',
          n,
          (ne, le) => {
            (A === !0 || d.focused.value === !0) &&
              R === j &&
              (clearTimeout(R),
              typeof ne == 'function' && ne(),
              (y.value = !1),
              qe(() => {
                (d.innerLoading.value = !1),
                  d.editable.value === !0 &&
                    (A === !0
                      ? u.value === !0 && tt()
                      : u.value === !0
                      ? Gt(!0)
                      : (u.value = !0)),
                  typeof le == 'function' &&
                    qe(() => {
                      le(a);
                    }),
                  typeof q == 'function' &&
                    qe(() => {
                      q(a);
                    });
              }));
          },
          () => {
            d.focused.value === !0 &&
              R === j &&
              (clearTimeout(R), (d.innerLoading.value = !1), (y.value = !1)),
              u.value === !0 && (u.value = !1);
          }
        );
    }
    function ca() {
      return k(
        en,
        {
          ref: N,
          class: T.value,
          style: e.popupContentStyle,
          modelValue: u.value,
          fit: e.menuShrink !== !0,
          cover: e.optionsCover === !0 && te.value !== !0 && e.useInput !== !0,
          anchor: e.menuAnchor,
          self: e.menuSelf,
          offset: e.menuOffset,
          dark: K.value,
          noParentEvent: !0,
          noRefocus: !0,
          noFocus: !0,
          square: We.value,
          transitionShow: e.transitionShow,
          transitionHide: e.transitionHide,
          transitionDuration: e.transitionDuration,
          separateClosePopup: !0,
          ...$e.value,
          onScrollPassive: U,
          onBeforeShow: fl,
          onBeforeHide: fa,
          onShow: va,
        },
        ht
      );
    }
    function fa(n) {
      vl(n), rt();
    }
    function va() {
      H();
    }
    function ma(n) {
      Ge(n),
        O.value !== null && O.value.focus(),
        (w.value = !0),
        window.scrollTo(
          window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
          0
        );
    }
    function ga(n) {
      Ge(n),
        qe(() => {
          w.value = !1;
        });
    }
    function pa() {
      const n = [
        k(
          Un,
          {
            class: `col-auto ${d.fieldClass.value}`,
            ...E.value,
            for: d.targetUid.value,
            dark: K.value,
            square: !0,
            loading: y.value,
            itemAligned: !1,
            filled: !0,
            stackLabel: p.value.length !== 0,
            ...d.splitAttrs.listeners.value,
            onFocus: ma,
            onBlur: ga,
          },
          {
            ...t,
            rawControl: () => d.getControl(!0),
            before: void 0,
            after: void 0,
          }
        ),
      ];
      return (
        u.value === !0 &&
          n.push(
            k(
              'div',
              {
                ref: V,
                class: T.value + ' scroll',
                style: e.popupContentStyle,
                ...$e.value,
                onClick: Ze,
                onScrollPassive: U,
              },
              ht()
            )
          ),
        k(
          ia,
          {
            ref: oe,
            modelValue: v.value,
            position: e.useInput === !0 ? 'top' : void 0,
            transitionShow: G,
            transitionHide: e.transitionHide,
            transitionDuration: e.transitionDuration,
            onBeforeShow: fl,
            onBeforeHide: ba,
            onHide: ya,
            onShow: ha,
          },
          () =>
            k(
              'div',
              {
                class:
                  'q-select__dialog' +
                  (K.value === !0 ? ' q-select__dialog--dark q-dark' : '') +
                  (w.value === !0 ? ' q-select__dialog--focused' : ''),
              },
              n
            )
        )
      );
    }
    function ba(n) {
      vl(n),
        oe.value !== null &&
          oe.value.__updateRefocusTarget(
            d.rootRef.value.querySelector(
              '.q-field__native > [tabindex]:last-child'
            )
          ),
        (d.focused.value = !1);
    }
    function ya(n) {
      tt(), d.focused.value === !1 && l('blur', n), dt();
    }
    function ha() {
      const n = document.activeElement;
      (n === null || n.id !== d.targetUid.value) &&
        O.value !== null &&
        O.value !== n &&
        O.value.focus(),
        H();
    }
    function rt() {
      v.value !== !0 &&
        ((g.value = -1),
        u.value === !0 && (u.value = !1),
        d.focused.value === !1 &&
          (R !== null && (clearTimeout(R), (R = null)),
          d.innerLoading.value === !0 &&
            (l('filterAbort'), (d.innerLoading.value = !1), (y.value = !1))));
    }
    function st(n) {
      d.editable.value === !0 &&
        (_ === !0
          ? (d.onControlFocusin(n),
            (v.value = !0),
            qe(() => {
              d.focus();
            }))
          : d.focus(),
        e.onFilter !== void 0
          ? it(p.value)
          : (te.value !== !0 || t['no-option'] !== void 0) && (u.value = !0));
    }
    function tt() {
      (v.value = !1), rt();
    }
    function dt() {
      e.useInput === !0 &&
        St(
          (e.multiple !== !0 &&
            e.fillInput === !0 &&
            r.value.length !== 0 &&
            pe.value(r.value[0])) ||
            '',
          !0,
          !0
        );
    }
    function Gt(n) {
      let A = -1;
      if (n === !0) {
        if (r.value.length !== 0) {
          const q = we.value(r.value[0]);
          A = e.options.findIndex((j) => ft(we.value(j), q));
        }
        D(A);
      }
      _e(A);
    }
    function Sa(n, A) {
      u.value === !0 &&
        d.innerLoading.value === !1 &&
        (D(-1, !0),
        qe(() => {
          u.value === !0 &&
            d.innerLoading.value === !1 &&
            (n > A ? D() : Gt(!0));
        }));
    }
    function cl() {
      v.value === !1 && N.value !== null && N.value.updatePosition();
    }
    function fl(n) {
      n !== void 0 && Ge(n),
        l('popupShow', n),
        (d.hasPopupOpen = !0),
        d.onControlFocusin(n);
    }
    function vl(n) {
      n !== void 0 && Ge(n),
        l('popupHide', n),
        (d.hasPopupOpen = !1),
        d.onControlFocusout(n);
    }
    function ml() {
      (_ =
        o.platform.is.mobile !== !0 && e.behavior !== 'dialog'
          ? !1
          : e.behavior !== 'menu' &&
            (e.useInput === !0
              ? t['no-option'] !== void 0 ||
                e.onFilter !== void 0 ||
                te.value === !1
              : !0)),
        (G =
          o.platform.is.ios === !0 && _ === !0 && e.useInput === !0
            ? 'fade'
            : e.transitionShow);
    }
    return (
      Ll(ml),
      _a(cl),
      ml(),
      Je(() => {
        b !== null && clearTimeout(b), $ !== null && clearTimeout($);
      }),
      Object.assign(a, {
        showPopup: st,
        hidePopup: tt,
        removeAtIndex: gt,
        add: et,
        toggleOption: be,
        getOptionIndex: () => g.value,
        setOptionIndex: _e,
        moveOptionSelection: Fe,
        filter: it,
        updateMenuPosition: cl,
        updateInputValue: St,
        isOptionSelected: ue,
        getEmittingOptionValue: It,
        isOptionDisabled: (...n) => Ie.value.apply(null, n) === !0,
        getOptionValue: (...n) => we.value.apply(null, n),
        getOptionLabel: (...n) => pe.value.apply(null, n),
      }),
      Object.assign(d, {
        innerValue: r,
        fieldClass: f(
          () =>
            `q-select q-field--auto-height q-select--with${
              e.useInput !== !0 ? 'out' : ''
            }-input q-select--with${
              e.useChips !== !0 ? 'out' : ''
            }-chips q-select--${e.multiple === !0 ? 'multiple' : 'single'}`
        ),
        inputRef: X,
        targetRef: O,
        hasValue: I,
        showPopup: st,
        floatingLabel: f(
          () =>
            (e.hideSelected !== !0 && I.value === !0) ||
            typeof p.value == 'number' ||
            p.value.length !== 0 ||
            qt(e.displayValue)
        ),
        getControlChild: () => {
          if (
            d.editable.value !== !1 &&
            (v.value === !0 || te.value !== !0 || t['no-option'] !== void 0)
          )
            return _ === !0 ? pa() : ca();
          d.hasPopupOpen === !0 && (d.hasPopupOpen = !1);
        },
        controlEvents: {
          onFocusin(n) {
            d.onControlFocusin(n);
          },
          onFocusout(n) {
            d.onControlFocusout(n, () => {
              dt(), rt();
            });
          },
          onClick(n) {
            if ((Ze(n), _ !== !0 && u.value === !0)) {
              rt(), O.value !== null && O.value.focus();
              return;
            }
            st(n);
          },
        },
        getControl: (n) => {
          const A = Wt(),
            q = n === !0 || v.value !== !0 || _ !== !0;
          if (e.useInput === !0) A.push(se(n, q));
          else if (d.editable.value === !0) {
            const ne = q === !0 ? Le.value : void 0;
            A.push(
              k('input', {
                ref: q === !0 ? O : void 0,
                key: 'd_t',
                class: 'q-select__focus-target',
                id: q === !0 ? d.targetUid.value : void 0,
                value: ge.value,
                readonly: !0,
                'data-autofocus': n === !0 || e.autofocus === !0 || void 0,
                ...ne,
                onKeydown: Bt,
                onKeyup: fe,
                onKeypress: yt,
              })
            ),
              q === !0 &&
                typeof e.autocomplete == 'string' &&
                e.autocomplete.length !== 0 &&
                A.push(
                  k('input', {
                    class: 'q-select__autocomplete-input',
                    autocomplete: e.autocomplete,
                    tabindex: -1,
                    onKeyup: Ne,
                  })
                );
          }
          if (h.value !== void 0 && e.disable !== !0 && je.value.length !== 0) {
            const ne = je.value.map((le) =>
              k('option', { value: le, selected: !0 })
            );
            A.push(
              k(
                'select',
                { class: 'hidden', name: h.value, multiple: e.multiple },
                ne
              )
            );
          }
          const j =
            e.useInput === !0 || q !== !0
              ? void 0
              : d.splitAttrs.attributes.value;
          return k(
            'div',
            {
              class: 'q-field__native row items-center',
              ...j,
              ...d.splitAttrs.listeners.value,
            },
            A
          );
        },
        getInnerAppend: () =>
          e.loading !== !0 && y.value !== !0 && e.hideDropdownIcon !== !0
            ? [
                k(Xe, {
                  class:
                    'q-select__dropdown-icon' +
                    (u.value === !0 ? ' rotate-180' : ''),
                  name: Oe.value,
                }),
              ]
            : null,
      }),
      sl(d)
    );
  },
});
const Jn = { key: 0, class: 'col-7' },
  eo = { class: 'label-text text-subtitle1' },
  to = Rt({
    __name: 'selectorSettingItem',
    props: Ht(
      {
        settingName: { type: String, required: !0 },
        backgroundColor: { type: String, default: 'bg-secondary' },
        selectorOptions: { type: Array, required: !0 },
        enable: { type: Boolean, default: !0 },
      },
      {
        modelValue: { type: String, default: '', required: !0 },
        modelModifiers: {},
      }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const { t } = Mt(),
        l = Et(),
        a = e,
        o = jt(e, 'modelValue'),
        u = f(() => l.screen.lt.md),
        v = f(() => (l.screen.lt.md ? t(a.settingName) : ''));
      return (g, p) => (
        he(),
        ze(
          'div',
          {
            class: ye([
              'selector-setting-item row justify-between items-center full-width q-py-sm',
              [a.backgroundColor],
            ]),
          },
          [
            u.value
              ? Ct('', !0)
              : (he(),
                ze('div', Jn, [ee('span', eo, ke(ce(t)(a.settingName)), 1)])),
            ee(
              'div',
              { class: ye({ 'full-width': u.value, 'col-5': !u.value }) },
              [
                u.value
                  ? (he(),
                    Ye(
                      Tl,
                      {
                        key: 1,
                        class: 'full-width',
                        modelValue: o.value,
                        'onUpdate:modelValue':
                          p[1] || (p[1] = (w) => (o.value = w)),
                        options: a.selectorOptions,
                        color: 'dark',
                        label: v.value,
                        readonly: !a.enable,
                        'option-label': (w) => ce(t)(w.label),
                        outlined: '',
                        'emit-value': '',
                        'map-options': '',
                      },
                      null,
                      8,
                      [
                        'modelValue',
                        'options',
                        'label',
                        'readonly',
                        'option-label',
                      ]
                    ))
                  : (he(),
                    Ye(
                      Tl,
                      {
                        key: 0,
                        class: 'full-width',
                        modelValue: o.value,
                        'onUpdate:modelValue':
                          p[0] || (p[0] = (w) => (o.value = w)),
                        options: a.selectorOptions,
                        color: 'dark',
                        readonly: !a.enable,
                        'option-label': (w) => ce(t)(w.label),
                        dense: '',
                        outlined: '',
                        'emit-value': '',
                        'map-options': '',
                      },
                      null,
                      8,
                      ['modelValue', 'options', 'readonly', 'option-label']
                    )),
              ],
              2
            ),
          ],
          2
        )
      );
    },
  });
var Fl = Pt(to, [['__scopeId', 'data-v-09c1cb68']]);
const lo = { class: 'col-7' },
  ao = { class: 'label-text text-subtitle1' },
  no = { class: 'col-5 row justify-end items-center' },
  oo = Rt({
    __name: 'boolSettingItem',
    props: Ht(
      {
        settingName: { type: String, required: !0 },
        backgroundColor: { type: String, default: 'bg-secondary' },
        enable: { type: Boolean, default: !0 },
      },
      { modelValue: { type: Boolean, required: !0 }, modelModifiers: {} }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const { t } = Mt(),
        l = Et(),
        a = e,
        o = jt(e, 'modelValue'),
        u = f(() => l.screen.lt.md);
      return (v, g) => (
        he(),
        ze(
          'div',
          {
            class: ye([
              'bool-setting-item row justify-between items-center full-width q-py-sm cursor-pointer non-selectable',
              [a.backgroundColor],
            ]),
            onClick: g[1] || (g[1] = (p) => (o.value = !o.value)),
          },
          [
            ee('div', lo, [ee('span', ao, ke(ce(t)(a.settingName)), 1)]),
            ee('div', no, [
              x(
                ua,
                {
                  modelValue: o.value,
                  'onUpdate:modelValue': g[0] || (g[0] = (p) => (o.value = p)),
                  color: 'dark',
                  disable: !a.enable,
                  dense: !u.value,
                },
                null,
                8,
                ['modelValue', 'disable', 'dense']
              ),
            ]),
          ],
          2
        )
      );
    },
  });
var Ve = Pt(oo, [['__scopeId', 'data-v-919e0d96']]);
const uo = { key: 0, class: 'col-7' },
  io = { class: 'label-text text-subtitle1' },
  ro = Rt({
    __name: 'stringSettingItem',
    props: Ht(
      {
        settingName: { type: String, required: !0 },
        backgroundColor: { type: String, default: 'bg-secondary' },
        enable: { type: Boolean, default: !0 },
      },
      {
        modelValue: { type: String, default: '', required: !0 },
        modelModifiers: {},
      }
    ),
    emits: ['update:modelValue'],
    setup(e) {
      const { t } = Mt(),
        l = Et(),
        a = e,
        o = jt(e, 'modelValue'),
        u = f(() => l.screen.lt.md),
        v = f(() => (l.screen.lt.md ? t(a.settingName) : ''));
      return (g, p) => (
        he(),
        ze(
          'div',
          {
            class: ye([
              'string-setting-item row justify-between items-center full-width q-py-sm',
              [a.backgroundColor],
            ]),
          },
          [
            u.value
              ? Ct('', !0)
              : (he(),
                ze('div', uo, [ee('span', io, ke(ce(t)(a.settingName)), 1)])),
            ee(
              'div',
              { class: ye({ 'full-width': u.value, 'col-5': !u.value }) },
              [
                u.value
                  ? (he(),
                    Ye(
                      mt,
                      {
                        key: 1,
                        modelValue: o.value,
                        'onUpdate:modelValue':
                          p[3] || (p[3] = (w) => (o.value = w)),
                        color: 'dark',
                        label: v.value,
                        readonly: !a.enable,
                        outlined: '',
                      },
                      pl({ _: 2 }, [
                        o.value != ''
                          ? {
                              name: 'append',
                              fn: me(() => [
                                x(
                                  Ce,
                                  {
                                    icon: 'clear',
                                    onClick:
                                      p[2] || (p[2] = (w) => (o.value = '')),
                                    dense: !u.value,
                                    flat: '',
                                    round: '',
                                  },
                                  null,
                                  8,
                                  ['dense']
                                ),
                              ]),
                              key: '0',
                            }
                          : void 0,
                      ]),
                      1032,
                      ['modelValue', 'label', 'readonly']
                    ))
                  : (he(),
                    Ye(
                      mt,
                      {
                        key: 0,
                        modelValue: o.value,
                        'onUpdate:modelValue':
                          p[1] || (p[1] = (w) => (o.value = w)),
                        color: 'dark',
                        readonly: !a.enable,
                        dense: '',
                        outlined: '',
                      },
                      pl({ _: 2 }, [
                        o.value != ''
                          ? {
                              name: 'append',
                              fn: me(() => [
                                x(
                                  Ce,
                                  {
                                    icon: 'clear',
                                    onClick:
                                      p[0] || (p[0] = (w) => (o.value = '')),
                                    dense: !u.value,
                                    flat: '',
                                    round: '',
                                  },
                                  null,
                                  8,
                                  ['dense']
                                ),
                              ]),
                              key: '0',
                            }
                          : void 0,
                      ]),
                      1032,
                      ['modelValue', 'readonly']
                    )),
              ],
              2
            ),
          ],
          2
        )
      );
    },
  });
var Ke = Pt(ro, [['__scopeId', 'data-v-8ff31e64']]);
function so(e) {
  const t = document.createElement('textarea');
  (t.value = e), (t.contentEditable = 'true'), (t.style.position = 'fixed');
  const l = () => {};
  ta(l), document.body.appendChild(t), t.focus(), t.select();
  const a = document.execCommand('copy');
  return t.remove(), ol(l), a;
}
function co(e) {
  return navigator.clipboard !== void 0
    ? navigator.clipboard.writeText(e)
    : new Promise((t, l) => {
        const a = so(e);
        a ? t(!0) : l(a);
      });
}
function fo(e) {
  const t = Object.assign({ noopener: !0 }, e),
    l = [];
  for (const a in t) {
    const o = t[a];
    o === !0
      ? l.push(a)
      : (Ba(o) || (typeof o == 'string' && o !== '')) && l.push(a + '=' + o);
  }
  return l.join(',');
}
function Nl(e, t, l) {
  let a = window.open;
  if (nl.is.cordova === !0) {
    if (
      cordova !== void 0 &&
      cordova.InAppBrowser !== void 0 &&
      cordova.InAppBrowser.open !== void 0
    )
      a = cordova.InAppBrowser.open;
    else if (navigator !== void 0 && navigator.app !== void 0)
      return navigator.app.loadUrl(e, { openExternal: !0 });
  }
  const o = a(e, '_blank', fo(l));
  if (o) return nl.is.desktop && o.focus(), o;
  t && t();
}
var vo = (e, t, l) => {
  if (nl.is.ios === !0 && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((a) => {
      a ? window.SafariViewController.show({ url: e }, Jl, t) : Nl(e, t, l);
    });
    return;
  }
  return Nl(e, t, l);
};
const da = (e) => (Oa('data-v-61482e5c'), (e = e()), Ta(), e),
  mo = { class: 'top-tips q-pa-md' },
  go = { class: 'text-body1 text-primary' },
  po = {
    class: 'rule-settings-card-title row justify-center items-center q-mb-lg',
  },
  bo = { class: 'text-subtitle1 text-bold' },
  yo = { class: 'row justify-center items-center full-width' },
  ho = { class: 'text-subtitle1 text-bold q-mt-md q-mb-lg' },
  So = { key: 0, class: 'config-display-textarea full-width' },
  Vo = { class: 'cursor-pointer' },
  xo = { class: 'text-body1 non-selectable q-mr-md' },
  wo = { key: 1, class: 'config-display-textarea full-width q-mb-md' },
  ko = { class: 'row justify-center items-center q-mt-md' },
  Co = { class: 'row justify-between items-center q-mt-md' },
  qo = { class: 'text-body2 text-grey-8' },
  Ro = da(() =>
    ee('span', { id: 'qiushaocloud_sitecounter_value_site_pv' }, 'n', -1)
  ),
  Po = da(() =>
    ee('span', { class: 'text-body2 text-grey-8' }, 'By Egg Targaryen', -1)
  ),
  Ao = { class: 'q-ml-md' },
  $o = Rt({
    __name: 'IndexPage',
    setup(e) {
      Da((se) => ({ '79f94a18': bt.value }));
      const t = m('None'),
        l = m(1),
        a = m(1),
        o = m(1),
        u = m(1),
        v = m(1),
        g = m(1),
        p = m(1),
        w = m(1),
        y = m(1),
        b = m(1),
        $ = m(1),
        C = m(1),
        _ = m(1),
        z = m(1),
        R = m(1),
        J = m(1),
        G = m(1),
        Z = m(1),
        Q = m(1),
        X = m(1),
        O = m(1),
        N = m(1),
        oe = m(1),
        V = m('All'),
        h = m(20),
        M = m(1),
        c = m(!1),
        B = m(!0),
        F = m(!1),
        W = m(!0),
        D = m(!1),
        S = m(3e3),
        U = m(100),
        ae = m(128),
        H = m(15),
        d = m(1),
        r = m(!1),
        E = m(72),
        K = m(!1),
        I = m(!1),
        P = m(!1),
        T = m(!1),
        te = m(!0),
        L = m(!0),
        ge = m(!1),
        Pe = m(!1),
        Ue = m(4),
        xe = m(!1),
        Le = m(32),
        $e = m('Default Server Name'),
        Me = m(''),
        He = m(''),
        Oe = m(''),
        We = m('8211'),
        Te = m(''),
        we = m(!1),
        pe = m(''),
        Ie = m(''),
        je = m(!0),
        ut = m('https://api.palworldgame.com/api/banlist.txt'),
        It = [
          { label: 'difficultyOptionsNone', value: 'None' },
          { label: 'difficultyOptionsHard', value: 'Hard' },
        ],
        gt = [
          { label: 'deathPenaltyOptionsNone', value: 'None' },
          { label: 'deathPenaltyOptionsItem', value: 'Item' },
          {
            label: 'deathPenaltyOptionsItemAndEquipment',
            value: 'ItemAndEquipment',
          },
          { label: 'deathPenaltyOptionsAll', value: 'All' },
        ],
        { t: re } = Mt(),
        et = m(!1),
        be = m(''),
        _e = m(!1),
        Fe = Et(),
        pt = m(!0),
        bt = f(() => (pt.value ? 0 : 1)),
        ue = f(() => Fe.screen.lt.md);
      function _t() {
        (t.value = 'None'),
          (l.value = 1),
          (a.value = 1),
          (o.value = 1),
          (u.value = 1),
          (v.value = 1),
          (g.value = 1),
          (p.value = 1),
          (w.value = 1),
          (y.value = 1),
          (b.value = 1),
          ($.value = 1),
          (C.value = 1),
          (_.value = 1),
          (z.value = 1),
          (R.value = 1),
          (J.value = 1),
          (G.value = 1),
          (Z.value = 1),
          (Q.value = 1),
          (X.value = 1),
          (O.value = 1),
          (N.value = 1),
          (oe.value = 1),
          (V.value = 'All'),
          (h.value = 20),
          (M.value = 1),
          (c.value = !1),
          (B.value = !0),
          (F.value = !1),
          (W.value = !0),
          (D.value = !1),
          (S.value = 3e3),
          (U.value = 100),
          (ae.value = 128),
          (H.value = 15),
          (d.value = 1),
          (r.value = !1),
          (E.value = 72),
          (K.value = !1),
          (I.value = !1),
          (P.value = !1),
          (T.value = !1),
          (te.value = !0),
          (L.value = !0),
          (ge.value = !1),
          (Pe.value = !1),
          (Ue.value = 4),
          (xe.value = !1),
          (Le.value = 32),
          ($e.value = 'Default Server Name'),
          (Me.value = ''),
          (He.value = ''),
          (Oe.value = ''),
          (We.value = '8211'),
          (Te.value = ''),
          (we.value = !1),
          (pe.value = ''),
          (Ie.value = ''),
          (je.value = !0),
          (ut.value = 'https://api.palworldgame.com/api/banlist.txt'),
          (be.value = re('configInitContent'));
      }
      function fe(se) {
        return se ? 'True' : 'False';
      }
      function Ne(se) {
        return `"${se}"`;
      }
      function yt(se) {
        const i = document.querySelector(se);
        i
          ? window.scrollTo({ top: i.offsetTop + 1, behavior: 'smooth' })
          : console.log(`target ${se} not found`);
      }
      function Bt() {
        (be.value = `[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=${t.value},DayTimeSpeedRate=${
          l.value
        },NightTimeSpeedRate=${a.value},ExpRate=${o.value},PalCaptureRate=${
          u.value
        },PalSpawnNumRate=${v.value},PalDamageRateAttack=${
          g.value
        },PalDamageRateDefense=${p.value},PlayerDamageRateAttack=${
          w.value
        },PlayerDamageRateDefense=${y.value},PlayerStomachDecreaceRate=${
          b.value
        },PlayerStaminaDecreaceRate=${$.value},PlayerAutoHPRegeneRate=${
          C.value
        },PlayerAutoHpRegeneRateInSleep=${_.value},PalStomachDecreaceRate=${
          z.value
        },PalStaminaDecreaceRate=${R.value},PalAutoHPRegeneRate=${
          J.value
        },PalAutoHpRegeneRateInSleep=${G.value},BuildObjectDamageRate=${
          Z.value
        },BuildObjectDeteriorationDamageRate=${Q.value},CollectionDropRate=${
          X.value
        },CollectionObjectHpRate=${O.value},CollectionObjectRespawnSpeedRate=${
          N.value
        },EnemyDropItemRate=${oe.value},DeathPenalty=${
          V.value
        },GuildPlayerMaxNum=${h.value},PalEggDefaultHatchingTime=${
          M.value
        },bEnableFriendlyFire=${fe(c.value)},bEnableInvaderEnemy=${fe(
          B.value
        )},bActiveUNKO=${fe(F.value)},bEnableAimAssistPad=${fe(
          W.value
        )},bEnableAimAssistKeyboard=${fe(D.value)},DropItemMaxNum=${
          S.value
        },DropItemMaxNum_UNKO=${U.value},BaseCampMaxNum=${
          ae.value
        },BaseCampWorkerMaxNum=${H.value},DropItemAliveMaxHours=${
          d.value
        },bAutoResetGuildNoOnlinePlayers=${fe(
          r.value
        )},AutoResetGuildTimeNoOnlinePlayers=${E.value},bIsMultiplay=${fe(
          K.value
        )},bIsPvP=${fe(I.value)},bCanPickupOtherGuildDeathPenaltyDrop=${fe(
          P.value
        )},bEnableNonLoginPenalty=${fe(T.value)},bEnableFastTravel=${fe(
          te.value
        )},bIsStartLocationSelectByMap=${fe(
          L.value
        )},bExistPlayerAfterLogout=${fe(
          ge.value
        )},bEnableDefenseOtherGuildPlayer=${fe(Pe.value)},CoopPlayerMaxNum=${
          Ue.value
        },bEnablePlayerToPlayerDamage=${fe(xe.value)},ServerPlayerMaxNum=${
          Le.value
        },ServerName=${Ne($e.value)},ServerDescription=${Ne(
          Me.value
        )},AdminPassword=${Ne(He.value)},ServerPassword=${Ne(
          Oe.value
        )},PublicPort=${We.value},PublicIP=${Ne(Te.value)},RCONEnabled=${fe(
          we.value
        )},RCONPort=${pe.value},Region=${Ne(Ie.value)},bUseAuth=${fe(
          je.value
        )},BanListURL=${Ne(ut.value)})`),
          yt(ue.value ? '.download-btn' : '.config-display-textarea');
      }
      function Dt() {
        be.value
          ? co(be.value)
              .then(() => {
                Fe.notify({
                  message: re('copySuccess'),
                  color: 'positive',
                  textColor: 'primary',
                  icon: 'done',
                  position: 'top',
                });
              })
              .catch((se) => {
                Fe.notify({
                  message: `${re('copyFailed')}${se}}`,
                  color: 'negative',
                  textColor: 'accent',
                  icon: 'error',
                  position: 'top',
                });
              })
          : Fe.notify({
              message: re('copyEmptyFailed'),
              color: 'negative',
              textColor: 'accent',
              icon: 'error',
              position: 'top',
            });
      }
      function Qt(se) {
        pt.value = se.isIntersecting;
      }
      function Wt() {
        if (be.value) {
          const se = new Blob([be.value], { type: 'text/plain' }),
            i = window.URL.createObjectURL(se),
            s = document.createElement('a');
          (s.href = i), (s.download = 'PalGameWorldSettings.ini'), s.click();
        } else
          Fe.notify({
            message: re('downloadEmptyFailed'),
            color: 'negative',
            textColor: 'accent',
            icon: 'error',
            position: 'top',
          });
      }
      function ht(se) {
        vo(se);
      }
      return (
        Lt(() => {
          const se = document.createElement('script');
          (se.src =
            '//githubcdn.qiushaocloud.top/gh/qiushaocloud/site-counter@master/dist/qiushaocloud_site_counter.min.js'),
            (se.async = !0),
            document.body.appendChild(se);
        }),
        (se, i) => (
          he(),
          Ye(
            Dn,
            { class: 'row justify-evenly items-start q-pb-lg' },
            {
              default: me(() => [
                ee(
                  'div',
                  {
                    class: ye([
                      'q-py-md full-width',
                      { 'q-px-xl': !ue.value, 'q-px-md': ue.value },
                    ]),
                  },
                  [ee('div', mo, [ee('span', go, ke(ce(re)('topTips')), 1)])],
                  2
                ),
                ee(
                  'div',
                  {
                    class: ye([
                      'col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6',
                      { 'q-px-lg': ue.value },
                    ]),
                  },
                  [
                    x(
                      hl,
                      { class: 'bg-secondary full-width q-pa-md' },
                      {
                        default: me(() => [
                          bl(
                            (he(),
                            ze('div', po, [
                              ee('span', bo, ke(ce(re)('settingTitle')), 1),
                            ])),
                            [[On, Qt]]
                          ),
                          x(
                            Fl,
                            {
                              'selector-options': It,
                              'setting-name': 'settingDifficulty',
                              modelValue: t.value,
                              'onUpdate:modelValue':
                                i[0] || (i[0] = (s) => (t.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Fl,
                            {
                              'selector-options': gt,
                              'setting-name': 'settingDeathPenalty',
                              modelValue: V.value,
                              'onUpdate:modelValue':
                                i[1] || (i[1] = (s) => (V.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: l.value,
                              'onUpdate:modelValue':
                                i[2] || (i[2] = (s) => (l.value = s)),
                              'setting-name': 'settingDayTimeSpeedRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: a.value,
                              'onUpdate:modelValue':
                                i[3] || (i[3] = (s) => (a.value = s)),
                              'setting-name': 'settingNightTimeSpeedRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: o.value,
                              'onUpdate:modelValue':
                                i[4] || (i[4] = (s) => (o.value = s)),
                              'setting-name': 'settingExpRate',
                              'max-value': 20,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: u.value,
                              'onUpdate:modelValue':
                                i[5] || (i[5] = (s) => (u.value = s)),
                              'setting-name': 'settingPalCaptureRate',
                              'max-value': 2,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: v.value,
                              'onUpdate:modelValue':
                                i[6] || (i[6] = (s) => (v.value = s)),
                              'setting-name': 'settingPalSpawnNumRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: g.value,
                              'onUpdate:modelValue':
                                i[7] || (i[7] = (s) => (g.value = s)),
                              'setting-name': 'settingPalDamageRateAttack',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: p.value,
                              'onUpdate:modelValue':
                                i[8] || (i[8] = (s) => (p.value = s)),
                              'setting-name': 'settingPalDamageRateDefense',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: w.value,
                              'onUpdate:modelValue':
                                i[9] || (i[9] = (s) => (w.value = s)),
                              'setting-name': 'settingPlayerDamageRateAttack',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: y.value,
                              'onUpdate:modelValue':
                                i[10] || (i[10] = (s) => (y.value = s)),
                              'setting-name': 'settingPlayerDamageRateDefense',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: b.value,
                              'onUpdate:modelValue':
                                i[11] || (i[11] = (s) => (b.value = s)),
                              'setting-name':
                                'settingPlayerStomachDecreaceRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: $.value,
                              'onUpdate:modelValue':
                                i[12] || (i[12] = (s) => ($.value = s)),
                              'setting-name':
                                'settingPlayerStaminaDecreaceRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: C.value,
                              'onUpdate:modelValue':
                                i[13] || (i[13] = (s) => (C.value = s)),
                              'setting-name': 'settingPlayerAutoHPRegeneRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: _.value,
                              'onUpdate:modelValue':
                                i[14] || (i[14] = (s) => (_.value = s)),
                              'setting-name':
                                'settingPlayerAutoHpRegeneRateInSleep',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: z.value,
                              'onUpdate:modelValue':
                                i[15] || (i[15] = (s) => (z.value = s)),
                              'setting-name': 'settingPalStomachDecreaceRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: R.value,
                              'onUpdate:modelValue':
                                i[16] || (i[16] = (s) => (R.value = s)),
                              'setting-name': 'settingPalStaminaDecreaceRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: J.value,
                              'onUpdate:modelValue':
                                i[17] || (i[17] = (s) => (J.value = s)),
                              'setting-name': 'settingPalAutoHPRegeneRate',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: G.value,
                              'onUpdate:modelValue':
                                i[18] || (i[18] = (s) => (G.value = s)),
                              'setting-name':
                                'settingPalAutoHpRegeneRateInSleep',
                              'max-value': 5,
                              'min-value': 0.1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: Z.value,
                              'onUpdate:modelValue':
                                i[19] || (i[19] = (s) => (Z.value = s)),
                              'setting-name': 'settingBuildObjectDamageRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: Q.value,
                              'onUpdate:modelValue':
                                i[20] || (i[20] = (s) => (Q.value = s)),
                              'setting-name':
                                'settingBuildObjectDeteriorationDamageRate',
                              'max-value': 10,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: X.value,
                              'onUpdate:modelValue':
                                i[21] || (i[21] = (s) => (X.value = s)),
                              'setting-name': 'settingCollectionDropRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: O.value,
                              'onUpdate:modelValue':
                                i[22] || (i[22] = (s) => (O.value = s)),
                              'setting-name': 'settingCollectionObjectHpRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: N.value,
                              'onUpdate:modelValue':
                                i[23] || (i[23] = (s) => (N.value = s)),
                              'setting-name':
                                'settingCollectionObjectRespawnSpeedRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: oe.value,
                              'onUpdate:modelValue':
                                i[24] || (i[24] = (s) => (oe.value = s)),
                              'setting-name': 'settingEnemyDropItemRate',
                              'max-value': 3,
                              'min-value': 0.5,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: h.value,
                              'onUpdate:modelValue':
                                i[25] || (i[25] = (s) => (h.value = s)),
                              'setting-name': 'settingGuildPlayerMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'max-value': 100,
                              'min-value': 1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: M.value,
                              'onUpdate:modelValue':
                                i[26] || (i[26] = (s) => (M.value = s)),
                              'setting-name':
                                'settingPalEggDefaultHatchingTime',
                              'max-value': 240,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: S.value,
                              'onUpdate:modelValue':
                                i[27] || (i[27] = (s) => (S.value = s)),
                              'setting-name': 'settingDropItemMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: U.value,
                              'onUpdate:modelValue':
                                i[28] || (i[28] = (s) => (U.value = s)),
                              'setting-name': 'settingDropItemMaxNumUNKO',
                              'fixed-digits': 0,
                              step: 1,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: ae.value,
                              'onUpdate:modelValue':
                                i[29] || (i[29] = (s) => (ae.value = s)),
                              'setting-name': 'settingBaseCampMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: H.value,
                              'onUpdate:modelValue':
                                i[30] || (i[30] = (s) => (H.value = s)),
                              'setting-name': 'settingBaseCampWorkerMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: d.value,
                              'onUpdate:modelValue':
                                i[31] || (i[31] = (s) => (d.value = s)),
                              'setting-name': 'settingDropItemAliveMaxHours',
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: E.value,
                              'onUpdate:modelValue':
                                i[32] || (i[32] = (s) => (E.value = s)),
                              'setting-name':
                                'settingAutoResetGuildTimeNoOnlinePlayers',
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: Ue.value,
                              'onUpdate:modelValue':
                                i[33] || (i[33] = (s) => (Ue.value = s)),
                              'setting-name': 'settingCoopPlayerMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'min-value': 0,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Y,
                            {
                              modelValue: Le.value,
                              'onUpdate:modelValue':
                                i[34] || (i[34] = (s) => (Le.value = s)),
                              'setting-name': 'settingServerPlayerMaxNum',
                              'fixed-digits': 0,
                              step: 1,
                              'max-value': 32,
                              'min-value': 1,
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingServerName',
                              modelValue: $e.value,
                              'onUpdate:modelValue':
                                i[35] || (i[35] = (s) => ($e.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingServerDescription',
                              modelValue: Me.value,
                              'onUpdate:modelValue':
                                i[36] || (i[36] = (s) => (Me.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingAdminPassword',
                              modelValue: He.value,
                              'onUpdate:modelValue':
                                i[37] || (i[37] = (s) => (He.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingServerPassword',
                              modelValue: Oe.value,
                              'onUpdate:modelValue':
                                i[38] || (i[38] = (s) => (Oe.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingPublicPort',
                              modelValue: We.value,
                              'onUpdate:modelValue':
                                i[39] || (i[39] = (s) => (We.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingPublicIP',
                              modelValue: Te.value,
                              'onUpdate:modelValue':
                                i[40] || (i[40] = (s) => (Te.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingRCONPort',
                              modelValue: pe.value,
                              'onUpdate:modelValue':
                                i[41] || (i[41] = (s) => (pe.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingRegion',
                              modelValue: Ie.value,
                              'onUpdate:modelValue':
                                i[42] || (i[42] = (s) => (Ie.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ke,
                            {
                              'setting-name': 'settingBanListURL',
                              modelValue: ut.value,
                              'onUpdate:modelValue':
                                i[43] || (i[43] = (s) => (ut.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableFriendlyFire',
                              modelValue: c.value,
                              'onUpdate:modelValue':
                                i[44] || (i[44] = (s) => (c.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableInvaderEnemy',
                              modelValue: B.value,
                              'onUpdate:modelValue':
                                i[45] || (i[45] = (s) => (B.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbActiveUNKO',
                              modelValue: F.value,
                              'onUpdate:modelValue':
                                i[46] || (i[46] = (s) => (F.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableAimAssistPad',
                              modelValue: W.value,
                              'onUpdate:modelValue':
                                i[47] || (i[47] = (s) => (W.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableAimAssistKeyboard',
                              modelValue: D.value,
                              'onUpdate:modelValue':
                                i[48] || (i[48] = (s) => (D.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name':
                                'settingbAutoResetGuildNoOnlinePlayers',
                              modelValue: r.value,
                              'onUpdate:modelValue':
                                i[49] || (i[49] = (s) => (r.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbIsMultiplay',
                              modelValue: K.value,
                              'onUpdate:modelValue':
                                i[50] || (i[50] = (s) => (K.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbIsPvP',
                              modelValue: I.value,
                              'onUpdate:modelValue':
                                i[51] || (i[51] = (s) => (I.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name':
                                'settingbCanPickupOtherGuildDeathPenaltyDrop',
                              modelValue: P.value,
                              'onUpdate:modelValue':
                                i[52] || (i[52] = (s) => (P.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableNonLoginPenalty',
                              modelValue: T.value,
                              'onUpdate:modelValue':
                                i[53] || (i[53] = (s) => (T.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbEnableFastTravel',
                              modelValue: te.value,
                              'onUpdate:modelValue':
                                i[54] || (i[54] = (s) => (te.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name':
                                'settingbIsStartLocationSelectByMap',
                              modelValue: L.value,
                              'onUpdate:modelValue':
                                i[55] || (i[55] = (s) => (L.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbExistPlayerAfterLogout',
                              modelValue: ge.value,
                              'onUpdate:modelValue':
                                i[56] || (i[56] = (s) => (ge.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name':
                                'settingbEnableDefenseOtherGuildPlayer',
                              modelValue: Pe.value,
                              'onUpdate:modelValue':
                                i[57] || (i[57] = (s) => (Pe.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name':
                                'settingbEnablePlayerToPlayerDamage',
                              modelValue: xe.value,
                              'onUpdate:modelValue':
                                i[58] || (i[58] = (s) => (xe.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingRCONEnabled',
                              modelValue: we.value,
                              'onUpdate:modelValue':
                                i[59] || (i[59] = (s) => (we.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          x(
                            Ve,
                            {
                              'setting-name': 'settingbUseAuth',
                              modelValue: je.value,
                              'onUpdate:modelValue':
                                i[60] || (i[60] = (s) => (je.value = s)),
                            },
                            null,
                            8,
                            ['modelValue']
                          ),
                          ee(
                            'div',
                            {
                              class: ye([
                                'btn-row q-mt-lg',
                                {
                                  'col justify-center items-center': ue.value,
                                  'row justify-between items-center': !ue.value,
                                },
                              ]),
                            },
                            [
                              x(
                                Ce,
                                {
                                  class: ye({
                                    'full-width': ue.value,
                                    'col-8': !ue.value,
                                  }),
                                  icon: 'sim_card_download',
                                  color: 'dark',
                                  onClick: i[61] || (i[61] = (s) => Bt()),
                                  outline: '',
                                },
                                {
                                  default: me(() => [
                                    at(ke(ce(re)('btnGenerate')), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['class']
                              ),
                              x(
                                Ce,
                                {
                                  class: ye({
                                    'full-width q-mt-md': ue.value,
                                    'col-3': !ue.value,
                                  }),
                                  icon: 'delete',
                                  color: 'negative',
                                  onClick:
                                    i[62] || (i[62] = (s) => (et.value = !0)),
                                  outline: '',
                                },
                                {
                                  default: me(() => [
                                    at(ke(ce(re)('btnReset')), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['class']
                              ),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  2
                ),
                ee(
                  'div',
                  {
                    class: ye([
                      'col justify-start items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5',
                      { 'q-px-lg q-mt-lg': ue.value },
                    ]),
                  },
                  [
                    ee('div', yo, [
                      ee('span', ho, ke(ce(re)('configTitle')), 1),
                    ]),
                    ue.value
                      ? Ct('', !0)
                      : (he(),
                        ze('div', So, [
                          x(
                            mt,
                            {
                              color: 'dark',
                              modelValue: be.value,
                              'onUpdate:modelValue':
                                i[63] || (i[63] = (s) => (be.value = s)),
                              readonly: !_e.value,
                              placeholder: ce(re)('configInitContent'),
                              outlined: '',
                              autogrow: '',
                            },
                            null,
                            8,
                            ['modelValue', 'readonly', 'placeholder']
                          ),
                        ])),
                    ee(
                      'div',
                      {
                        class: ye([
                          'full-width',
                          {
                            'col justify-start items-center': ue.value,
                            'row justify-between items-center q-my-md':
                              !ue.value,
                          },
                        ]),
                      },
                      [
                        ee('div', null, [
                          x(
                            Ce,
                            {
                              class: ye([
                                'download-btn',
                                { 'full-width': ue.value },
                              ]),
                              color: 'dark',
                              icon: 'download',
                              onClick: i[64] || (i[64] = (s) => Wt()),
                              outline: '',
                            },
                            {
                              default: me(() => [
                                at(ke(ce(re)('btnDownload')), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['class']
                          ),
                          x(
                            Ce,
                            {
                              class: ye({
                                'full-width q-mt-md': ue.value,
                                'q-ml-md': !ue.value,
                              }),
                              color: 'dark',
                              icon: 'content_copy',
                              onClick: i[65] || (i[65] = (s) => Dt()),
                              outline: '',
                            },
                            {
                              default: me(() => [at(ke(ce(re)('btnCopy')), 1)]),
                              _: 1,
                            },
                            8,
                            ['class']
                          ),
                        ]),
                        ee(
                          'div',
                          {
                            class: ye({
                              'row justify-center items-center q-my-md':
                                ue.value,
                            }),
                          },
                          [
                            ee('label', Vo, [
                              ee('span', xo, ke(ce(re)('editMode')), 1),
                              x(
                                ua,
                                {
                                  modelValue: _e.value,
                                  'onUpdate:modelValue':
                                    i[66] || (i[66] = (s) => (_e.value = s)),
                                  color: 'dark',
                                  dense: '',
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                            ]),
                          ],
                          2
                        ),
                      ],
                      2
                    ),
                    ue.value
                      ? (he(),
                        ze('div', wo, [
                          x(
                            mt,
                            {
                              color: 'dark',
                              modelValue: be.value,
                              'onUpdate:modelValue':
                                i[67] || (i[67] = (s) => (be.value = s)),
                              readonly: !_e.value,
                              placeholder: ce(re)('configInitContent'),
                              outlined: '',
                              autogrow: '',
                            },
                            null,
                            8,
                            ['modelValue', 'readonly', 'placeholder']
                          ),
                        ]))
                      : Ct('', !0),
                    x(kn),
                    ee('div', ko, [
                      x(
                        Ce,
                        {
                          class: 'q-pa-sm',
                          icon: 'fa-brands fa-github',
                          color: 'grey-9',
                          onClick:
                            i[68] ||
                            (i[68] = (s) =>
                              ht(
                                'https://github.com/dzxrly/Palworld-Server-Config-Generator'
                              )),
                          dense: '',
                          flat: '',
                        },
                        { default: me(() => [at('Github ')]), _: 1 }
                      ),
                      x(
                        Ce,
                        {
                          class: 'q-ml-md q-pa-sm',
                          icon: 'volunteer_activism',
                          color: 'negative',
                          onClick:
                            i[69] ||
                            (i[69] = (s) => ht('https://ko-fi.com/F1F0PZH7X')),
                          dense: '',
                          flat: '',
                        },
                        {
                          default: me(() => [at(ke(ce(re)('btnDonate')), 1)]),
                          _: 1,
                        }
                      ),
                    ]),
                    ee('div', Co, [
                      ee('span', qo, [at(ke(ce(re)('visitors')), 1), Ro]),
                      Po,
                    ]),
                  ],
                  2
                ),
                bl(
                  (he(),
                  Ye(
                    ia,
                    {
                      modelValue: et.value,
                      'onUpdate:modelValue':
                        i[72] || (i[72] = (s) => (et.value = s)),
                      'auto-close': '',
                    },
                    {
                      default: me(() => [
                        x(
                          hl,
                          { class: 'bg-secondary' },
                          {
                            default: me(() => [
                              x(
                                Cn,
                                { class: 'row justify-center items-center' },
                                {
                                  default: me(() => [
                                    x(Xe, {
                                      name: 'warning',
                                      size: 'lg',
                                      class: 'text-negative',
                                    }),
                                    ee(
                                      'span',
                                      Ao,
                                      ke(ce(re)('resetDialogContent')),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              x(
                                qn,
                                { align: 'right' },
                                {
                                  default: me(() => [
                                    x(
                                      Ce,
                                      {
                                        color: 'negative',
                                        icon: 'check',
                                        flat: '',
                                        label: ce(re)('resetConfirm'),
                                        onClick: i[70] || (i[70] = (s) => _t()),
                                      },
                                      null,
                                      8,
                                      ['label']
                                    ),
                                    x(
                                      Ce,
                                      {
                                        color: 'primary',
                                        icon: 'close',
                                        flat: '',
                                        label: ce(re)('resetCancel'),
                                        onClick:
                                          i[71] ||
                                          (i[71] = (s) => (et.value = !1)),
                                      },
                                      null,
                                      8,
                                      ['label']
                                    ),
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
                    },
                    8,
                    ['modelValue']
                  )),
                  [[Tn]]
                ),
                x(
                  Bn,
                  {
                    class: 'up-btn-wrap',
                    position: 'bottom-right',
                    offset: [30, 30],
                  },
                  {
                    default: me(() => [
                      x(
                        Ce,
                        {
                          class: ye([
                            'shadow-4',
                            { 'no-pointer-events': pt.value },
                          ]),
                          color: 'dark',
                          icon: 'arrow_upward',
                          onClick:
                            i[73] ||
                            (i[73] = (s) => yt('.rule-settings-card-title')),
                          size: 'md',
                          round: '',
                        },
                        null,
                        8,
                        ['class']
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  });
var _o = Pt($o, [['__scopeId', 'data-v-61482e5c']]);
export { _o as default };
