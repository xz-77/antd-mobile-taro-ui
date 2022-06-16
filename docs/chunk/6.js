(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    126: function (e, c, t) {
      'use strict';
      t.d(c, 'a', function () {
        return withNativeProps;
      });
      var a = t(18),
        n = t(17),
        r = t.n(n),
        i = t(128),
        l = t.n(i);
      function withNativeProps(e, c) {
        var t = Object(a.a)({}, c.props);
        for (var n in (e.className && (t.className = l()(c.props.className, e.className)),
        e.style && (t.style = Object(a.a)(Object(a.a)({}, t.style), e.style)),
        void 0 !== e.tabIndex && (t.tabIndex = e.tabIndex),
        e))
          e.hasOwnProperty(n) && (n.startsWith('data-') || n.startsWith('aria-')) && (t[n] = e[n]);
        return r.a.cloneElement(c, t);
      }
    },
    127: function (e, c, t) {
      'use strict';
      t.d(c, 'a', function () {
        return mergeProps;
      });
      var a = t(134),
        n = t.n(a),
        r = t(135),
        i = t.n(r),
        l = t(136),
        s = t.n(l);
      function mergeProps() {
        function customizer(e, c) {
          return s()(c) ? e : c;
        }
        for (var e = n()({}, arguments.length <= 0 ? void 0 : arguments[0]), c = 1; c < arguments.length; c++)
          e = i()(e, c < 0 || arguments.length <= c ? void 0 : arguments[c], customizer);
        return e;
      }
    },
    131: function (e, c, t) {},
    132: function (e, c, t) {},
    137: function (e, c, t) {},
    138: function (e, c, t) {
      'use strict';
      t(137);
      var a = t(17),
        n = t(128),
        r = t.n(n),
        i = t(125),
        l = t(127),
        s = t(126),
        o = t(124),
        j = { default: 'var(--adm-color-weak)', primary: 'var(--adm-color-primary)', white: 'var(--adm-color-white)' },
        b = { color: 'default' },
        d = Object(a.memo)(function (e) {
          var c = Object(l.a)(b, e),
            t = Object(a.useMemo)(
              function () {
                var e;
                return null !== (e = j[c.color]) && void 0 !== e ? e : c.color;
              },
              [c]
            );
          return Object(s.a)(
            c,
            Object(o.jsx)(i.c, {
              className: r()('adm-loading', 'adm-dot-loading'),
              children: Object(o.jsxs)(i.c, {
                className: 'wrapper',
                children: [
                  Object(o.jsx)(i.b, { className: 'dot a', style: { backgroundColor: t } }),
                  Object(o.jsx)(i.b, { className: 'dot b', style: { backgroundColor: t } }),
                  Object(o.jsx)(i.b, { className: 'dot c', style: { backgroundColor: t } }),
                ],
              }),
            })
          );
        });
      c.a = d;
    },
    139: function (e, c, t) {},
    141: function (e, c, t) {
      'use strict';
      t.d(c, 'a', function () {
        return r;
      });
      var a = t(125),
        n = (t(17), t(131), t(124)),
        r = function DemoBlock(e) {
          return Object(n.jsxs)(a.c, {
            className: 'demoBlock',
            children: [
              Object(n.jsx)(a.c, { className: 'title', children: e.title }),
              Object(n.jsx)(a.c, {
                className: 'main',
                style: { padding: e.padding, background: e.background },
                children: e.children,
              }),
            ],
          });
        };
      r.defaultProps = { padding: '12px 12px', background: 'var(--adm-color-background)' };
    },
    144: function (e, c, t) {
      'use strict';
      t(132);
      var a = t(5),
        n = t(17),
        r = t.n(n),
        i = t(128),
        l = t.n(i),
        s = t(125),
        o = t(126),
        j = t(127),
        b = t(124),
        d = { direction: 'horizontal' };
      c.a = function Space(e) {
        var c,
          t = Object(j.a)(d, e),
          n = t.direction,
          i = t.onClick;
        return Object(o.a)(
          t,
          Object(b.jsx)(s.c, {
            className: l()(
              'adm-space',
              ((c = {}),
              Object(a.a)(c, ''.concat('adm-space', '-wrap'), t.wrap),
              Object(a.a)(c, ''.concat('adm-space', '-block'), t.block),
              Object(a.a)(c, ''.concat('adm-space', '-').concat(n), !0),
              Object(a.a)(c, ''.concat('adm-space', '-align-').concat(t.align), !!t.align),
              Object(a.a)(c, ''.concat('adm-space', '-justify-').concat(t.justify), !!t.justify),
              c)
            ),
            onClick: i,
            children: r.a.Children.map(t.children, function (e) {
              return null != e && Object(b.jsx)(s.c, { className: ''.concat('adm-space', '-item'), children: e });
            }),
          })
        );
      };
    },
    156: function (e, c, t) {
      'use strict';
      t(139);
      var a = t(5),
        n = t(21),
        r = t(30),
        i = t(15),
        l = t(17),
        s = t(128),
        o = t.n(s),
        j = t(125),
        b = t(138),
        d = t(127),
        u = t(126),
        O = t(7);
      var h = t(124),
        x = {
          color: 'default',
          fill: 'solid',
          block: !1,
          loading: !1,
          loadingIcon: Object(h.jsx)(b.a, { color: 'currentColor' }),
          type: '',
          shape: 'default',
          size: 'middle',
          onTouchStart: function onTouchStart() {},
        },
        m = Object(l.forwardRef)(function (e, c) {
          var t,
            s = Object(d.a)(x, e),
            b = Object(l.useState)(!1),
            m = Object(i.a)(b, 2),
            f = m[0],
            p = m[1],
            v = Object(l.useRef)(null),
            g = 'auto' === s.loading ? f : s.loading,
            k = s.disabled || g;
          Object(l.useImperativeHandle)(c, function () {
            return {
              get nativeElement() {
                return v.current;
              },
            };
          });
          var w = (function () {
            var e = Object(r.a)(
              Object(n.a)().mark(function _callee(e) {
                var c;
                return Object(n.a)().wrap(
                  function _callee$(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!k) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt('return');
                        case 2:
                          if (s.onClick) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt('return');
                        case 4:
                          if (
                            ((c = s.onClick(e)), !(a = c) || 'object' !== Object(O.a)(a) || 'function' != typeof a.then)
                          ) {
                            t.next = 17;
                            break;
                          }
                          return (t.prev = 6), p(!0), (t.next = 10), c;
                        case 10:
                          p(!1), (t.next = 17);
                          break;
                        case 13:
                          throw ((t.prev = 13), (t.t0 = t.catch(6)), p(!1), t.t0);
                        case 17:
                        case 'end':
                          return t.stop();
                      }
                    var a;
                  },
                  _callee,
                  null,
                  [[6, 13]]
                );
              })
            );
            return function handleClick(c) {
              return e.apply(this, arguments);
            };
          })();
          return Object(u.a)(
            s,
            Object(h.jsx)(j.c, {
              ref: v,
              onClick: w,
              className: o()(
                'adm-button',
                s.color ? ''.concat('adm-button', '-').concat(s.color) : null,
                ((t = {}),
                Object(a.a)(t, ''.concat('adm-button', '-block'), s.block),
                Object(a.a)(t, ''.concat('adm-button', '-disabled'), k),
                Object(a.a)(t, ''.concat('adm-button', '-fill-outline'), 'outline' === s.fill),
                Object(a.a)(t, ''.concat('adm-button', '-fill-none'), 'none' === s.fill),
                Object(a.a)(t, ''.concat('adm-button', '-mini'), 'mini' === s.size),
                Object(a.a)(t, ''.concat('adm-button', '-small'), 'small' === s.size),
                Object(a.a)(t, ''.concat('adm-button', '-large'), 'large' === s.size),
                Object(a.a)(t, ''.concat('adm-button', '-loading'), g),
                t),
                ''.concat('adm-button', '-shape-').concat(s.shape)
              ),
              onTouchStart: s.onTouchStart,
              onTouchEnd: s.onTouchEnd,
              children: g
                ? Object(h.jsxs)(j.c, {
                    className: ''.concat('adm-button', '-loading-wrapper'),
                    children: [s.loadingIcon, s.loadingText],
                  })
                : s.children,
            })
          );
        });
      c.a = m;
    },
    244: function (e, c, t) {
      'use strict';
      t.r(c);
      t(17);
      var a = t(144),
        n = t(156),
        r = t(141),
        i = t(124),
        demo1 = function () {
          return Object(i.jsxs)(i.Fragment, {
            children: [
              Object(i.jsx)(r.a, {
                title: '水平方向的间距',
                children: Object(i.jsxs)(a.a, {
                  children: [
                    Object(i.jsx)(n.a, { children: '按钮1' }),
                    Object(i.jsx)(n.a, { children: '按钮2' }),
                    Object(i.jsx)(n.a, { children: '按钮3' }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '换行',
                children: Object(i.jsxs)(a.a, {
                  wrap: !0,
                  children: [
                    Object(i.jsx)(n.a, { children: '按钮1' }),
                    Object(i.jsx)(n.a, { children: '按钮2' }),
                    Object(i.jsx)(n.a, { children: '按钮3' }),
                    Object(i.jsx)(n.a, { children: '按钮4' }),
                    Object(i.jsx)(n.a, { children: '按钮5' }),
                    Object(i.jsx)(n.a, { children: '按钮6' }),
                    Object(i.jsx)(n.a, { children: '按钮7' }),
                    Object(i.jsx)(n.a, { children: '按钮8' }),
                    Object(i.jsx)(n.a, { children: '按钮9' }),
                    Object(i.jsx)(n.a, { children: '按钮10' }),
                    Object(i.jsx)(n.a, { children: '按钮11' }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '垂直方向的间距',
                children: Object(i.jsxs)(a.a, {
                  direction: 'vertical',
                  children: [
                    Object(i.jsx)(n.a, { children: '按钮1' }),
                    Object(i.jsx)(n.a, { children: '按钮2' }),
                    Object(i.jsx)(n.a, { children: '按钮3' }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '自定义间距大小',
                children: Object(i.jsxs)(a.a, {
                  style: { '--gap': '24px' },
                  children: [
                    Object(i.jsx)(n.a, { children: '按钮1' }),
                    Object(i.jsx)(n.a, { children: '按钮2' }),
                    Object(i.jsx)(n.a, { children: '按钮3' }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '渲染为块级元素',
                children: Object(i.jsxs)(a.a, {
                  direction: 'vertical',
                  block: !0,
                  children: [
                    Object(i.jsx)(n.a, { children: '按钮1' }),
                    Object(i.jsx)(n.a, { children: '按钮2' }),
                    Object(i.jsx)(n.a, { children: '按钮3' }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '主轴对齐方式',
                children: Object(i.jsxs)(a.a, {
                  justify: 'center',
                  block: !0,
                  children: [
                    Object(i.jsx)(n.a, { children: '1' }),
                    Object(i.jsxs)(n.a, { children: ['2', Object(i.jsx)('br', {}), '2'] }),
                    Object(i.jsxs)(n.a, {
                      children: ['3', Object(i.jsx)('br', {}), '3', Object(i.jsx)('br', {}), '3'],
                    }),
                  ],
                }),
              }),
              Object(i.jsx)(r.a, {
                title: '交叉轴对齐方式',
                children: Object(i.jsxs)(a.a, {
                  align: 'end',
                  children: [
                    Object(i.jsx)(n.a, { children: '1' }),
                    Object(i.jsxs)(n.a, { children: ['2', Object(i.jsx)('br', {}), '2'] }),
                    Object(i.jsxs)(n.a, {
                      children: ['3', Object(i.jsx)('br', {}), '3', Object(i.jsx)('br', {}), '3'],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      c.default = function () {
        return Object(i.jsx)(i.Fragment, { children: Object(i.jsx)(demo1, {}) });
      };
    },
  },
]);
