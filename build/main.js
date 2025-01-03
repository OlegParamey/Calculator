(() => {
    'use strict';
    var n = {
            208: (n, r, t) => {
                t.d(r, { A: () => i });
                var e = t(601),
                    o = t.n(e),
                    a = t(314),
                    c = t.n(a)()(o());
                c.push([
                    n.id,
                    ":root[data-theme='dark'] {\n    --primary-color: rgb(117, 117, 117);\n    --calculator-border-coolor: grey;\n    --display-bg-color: black;\n    --primary-accent-bg-color: orange;\n    --secondary-accent-bg-color: #4b4b4b;\n    --button-bg-color: #333;\n    --button-text-color: white;\n    --display-text-color: white;\n    --text-color: white;\n    --bg-gradient: linear-gradient(to right, #23074d, #cc5333);\n    color-scheme: dark;\n}\n\n:root[data-theme='light'] {\n    --primary-color: rgb(100, 153, 255);\n    --calculator-border-coolor: rgb(74, 126, 226);\n    --display-bg-color: #f9f9f9;\n    --primary-accent-bg-color: #faff5a;\n    --secondary-accent-bg-color: #d1d6ff;\n    --button-bg-color: #d8ffd0;\n    --button-text-color: #000000;\n    --display-text-color: #000000;\n    --text-color: #000000;\n    --bg-gradient: radial-gradient(\n        circle,\n        rgba(218, 238, 174, 1) 29%,\n        rgba(148, 187, 233, 1) 100%\n    );\n    color-scheme: light;\n}\n\n* {\n    transition: 0.2s ease;\n}\n\nbody {\n    background: var(--bg-gradient);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 400px;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.calculator {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    padding: 15px;\n    border-radius: 15px;\n    border: 3px solid var(--calculator-border-coolor);\n    background-color: var(--primary-color);\n}\n\n.display {\n    margin-bottom: 15px;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--display-bg-color);\n    color: var(--display-text-color);\n    min-height: 50px;\n    font-size: 2rem;\n    text-align: right;\n    border-radius: 10px;\n    box-sizing: border-box;\n}\n\n.buttons {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n}\n\n.button {\n    background-color: var(--button-bg-color);\n    color: var(--button-text-color);\n    font-size: 1.4rem;\n    width: 100%;\n    padding: 10px;\n    height: 60px;\n    box-sizing: border-box;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    text-align: center;\n}\n\n.button:hover {\n    border: 1px solid var(--text-color);\n    transform: scale(1.04);\n}\n\n.button:active {\n    opacity: 0.65;\n    transform: scale(0.99);\n}\n\n.indicator {\n    color: red !important;\n    border: 2px solid red;\n}\n\n.toggle-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.toggle {\n    width: 90%;\n    margin: 0;\n    padding: 10px;\n    border: 2px solid var(--calculator-border-coolor);\n    border-radius: 10px;\n    font-size: 1.5rem;\n    background-color: var(--secondary-accent-bg-color);\n    color: var(--text-color);\n    cursor: pointer;\n    text-align: center;\n    box-sizing: border-box;\n}\n\n.toggle:hover {\n    border: 1px solid var(--text-color);\n    transform: scale(1.04);\n}\n\n.toggle:active {\n    opacity: 0.65;\n    transform: scale(0.99);\n}\n\n.accent {\n    background-color: var(--primary-accent-bg-color);\n    color: var(--text-color);\n}\n.secondary-accent {\n    background-color: var(--secondary-accent-bg-color);\n    color: var(--text-color);\n}\n\n.wide {\n    grid-column: span 2;\n    border-radius: 10px;\n    width: 100%;\n}\n",
                    '',
                ]);
                const i = c;
            },
            314: (n) => {
                n.exports = function (n) {
                    var r = [];
                    return (
                        (r.toString = function () {
                            return this.map(function (r) {
                                var t = '',
                                    e = void 0 !== r[5];
                                return (
                                    r[4] && (t += '@supports ('.concat(r[4], ') {')),
                                    r[2] && (t += '@media '.concat(r[2], ' {')),
                                    e && (t += '@layer'.concat(r[5].length > 0 ? ' '.concat(r[5]) : '', ' {')),
                                    (t += n(r)),
                                    e && (t += '}'),
                                    r[2] && (t += '}'),
                                    r[4] && (t += '}'),
                                    t
                                );
                            }).join('');
                        }),
                        (r.i = function (n, t, e, o, a) {
                            'string' == typeof n && (n = [[null, n, void 0]]);
                            var c = {};
                            if (e)
                                for (var i = 0; i < this.length; i++) {
                                    var u = this[i][0];
                                    null != u && (c[u] = !0);
                                }
                            for (var s = 0; s < n.length; s++) {
                                var p = [].concat(n[s]);
                                (e && c[p[0]]) ||
                                    (void 0 !== a &&
                                        (void 0 === p[5] || (p[1] = '@layer'.concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {').concat(p[1], '}')),
                                        (p[5] = a)),
                                    t && (p[2] ? ((p[1] = '@media '.concat(p[2], ' {').concat(p[1], '}')), (p[2] = t)) : (p[2] = t)),
                                    o && (p[4] ? ((p[1] = '@supports ('.concat(p[4], ') {').concat(p[1], '}')), (p[4] = o)) : (p[4] = ''.concat(o))),
                                    r.push(p));
                            }
                        }),
                        r
                    );
                };
            },
            601: (n) => {
                n.exports = function (n) {
                    return n[1];
                };
            },
            72: (n) => {
                var r = [];
                function t(n) {
                    for (var t = -1, e = 0; e < r.length; e++)
                        if (r[e].identifier === n) {
                            t = e;
                            break;
                        }
                    return t;
                }
                function e(n, e) {
                    for (var a = {}, c = [], i = 0; i < n.length; i++) {
                        var u = n[i],
                            s = e.base ? u[0] + e.base : u[0],
                            p = a[s] || 0,
                            l = ''.concat(s, ' ').concat(p);
                        a[s] = p + 1;
                        var d = t(l),
                            f = { css: u[1], media: u[2], sourceMap: u[3], supports: u[4], layer: u[5] };
                        if (-1 !== d) r[d].references++, r[d].updater(f);
                        else {
                            var g = o(f, e);
                            (e.byIndex = i), r.splice(i, 0, { identifier: l, updater: g, references: 1 });
                        }
                        c.push(l);
                    }
                    return c;
                }
                function o(n, r) {
                    var t = r.domAPI(r);
                    return (
                        t.update(n),
                        function (r) {
                            if (r) {
                                if (r.css === n.css && r.media === n.media && r.sourceMap === n.sourceMap && r.supports === n.supports && r.layer === n.layer)
                                    return;
                                t.update((n = r));
                            } else t.remove();
                        }
                    );
                }
                n.exports = function (n, o) {
                    var a = e((n = n || []), (o = o || {}));
                    return function (n) {
                        n = n || [];
                        for (var c = 0; c < a.length; c++) {
                            var i = t(a[c]);
                            r[i].references--;
                        }
                        for (var u = e(n, o), s = 0; s < a.length; s++) {
                            var p = t(a[s]);
                            0 === r[p].references && (r[p].updater(), r.splice(p, 1));
                        }
                        a = u;
                    };
                };
            },
            659: (n) => {
                var r = {};
                n.exports = function (n, t) {
                    var e = (function (n) {
                        if (void 0 === r[n]) {
                            var t = document.querySelector(n);
                            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                                try {
                                    t = t.contentDocument.head;
                                } catch (n) {
                                    t = null;
                                }
                            r[n] = t;
                        }
                        return r[n];
                    })(n);
                    if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    e.appendChild(t);
                };
            },
            540: (n) => {
                n.exports = function (n) {
                    var r = document.createElement('style');
                    return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
                };
            },
            56: (n, r, t) => {
                n.exports = function (n) {
                    var r = t.nc;
                    r && n.setAttribute('nonce', r);
                };
            },
            825: (n) => {
                n.exports = function (n) {
                    if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
                    var r = n.insertStyleElement(n);
                    return {
                        update: function (t) {
                            !(function (n, r, t) {
                                var e = '';
                                t.supports && (e += '@supports ('.concat(t.supports, ') {')), t.media && (e += '@media '.concat(t.media, ' {'));
                                var o = void 0 !== t.layer;
                                o && (e += '@layer'.concat(t.layer.length > 0 ? ' '.concat(t.layer) : '', ' {')),
                                    (e += t.css),
                                    o && (e += '}'),
                                    t.media && (e += '}'),
                                    t.supports && (e += '}');
                                var a = t.sourceMap;
                                a &&
                                    'undefined' != typeof btoa &&
                                    (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                                        ' */'
                                    )),
                                    r.styleTagTransform(e, n, r.options);
                            })(r, n, t);
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1;
                                n.parentNode.removeChild(n);
                            })(r);
                        },
                    };
                };
            },
            113: (n) => {
                n.exports = function (n, r) {
                    if (r.styleSheet) r.styleSheet.cssText = n;
                    else {
                        for (; r.firstChild; ) r.removeChild(r.firstChild);
                        r.appendChild(document.createTextNode(n));
                    }
                };
            },
        },
        r = {};
    function t(e) {
        var o = r[e];
        if (void 0 !== o) return o.exports;
        var a = (r[e] = { id: e, exports: {} });
        return n[e](a, a.exports, t), a.exports;
    }
    (t.n = (n) => {
        var r = n && n.__esModule ? () => n.default : () => n;
        return t.d(r, { a: r }), r;
    }),
        (t.d = (n, r) => {
            for (var e in r) t.o(r, e) && !t.o(n, e) && Object.defineProperty(n, e, { enumerable: !0, get: r[e] });
        }),
        (t.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
        (t.nc = void 0);
    const e = { currentInput: '0', previousInput: '', operation: '', hasError: !1 },
        o = document.querySelector('.display');
    let a = document.getElementById('ac');
    function c(n = '0', r = !1) {
        (o.textContent = n), r ? a.classList.add('indicator') : a.classList.remove('indicator');
    }
    function i(n, r, t) {
        if ('÷' === t && 0 === r) return 'Error';
        const e = { '+': (n, r) => n + r, '-': (n, r) => n - r, x: (n, r) => n * r, '÷': (n, r) => (0 === r ? null : n / r) }[t]?.(n, r);
        return parseFloat(e.toFixed(10)).toString();
    }
    function u(n) {
        return 'Error' === n && ((e.hasError = !0), (e.currentInput = ''), (e.previousInput = ''), (e.operation = ''), c('Error', e.hasError), !0);
    }
    var s = t(72),
        p = t.n(s),
        l = t(825),
        d = t.n(l),
        f = t(659),
        g = t.n(f),
        b = t(56),
        v = t.n(b),
        h = t(540),
        m = t.n(h),
        x = t(113),
        y = t.n(x),
        I = t(208),
        E = {};
    (E.styleTagTransform = y()),
        (E.setAttributes = v()),
        (E.insert = g().bind(null, 'head')),
        (E.domAPI = d()),
        (E.insertStyleElement = m()),
        p()(I.A, E),
        I.A && I.A.locals && I.A.locals;
    const w = document.querySelector('.buttons');
    let k = document.querySelector('.toggle'),
        S = document.documentElement;
    w.addEventListener('click', (n) => {
        const r = n.target;
        if (!r.classList.contains('button')) return;
        const t = r.textContent;
        r.classList.contains('secondary-accent')
            ? (function (n) {
                  switch (n) {
                      case 'AC':
                          (e.currentInput = '0'), (e.previousInput = ''), (e.operation = ''), (e.hasError = !1), c('0');
                          break;
                      case '+/-':
                          !e.hasError &&
                              e.currentInput &&
                              ((e.currentInput = (-1 * parseFloat(e.currentInput)).toString()),
                              c(`${e.previousInput} ${e.operation} ${e.currentInput}`, e.hasError));
                          break;
                      case '%':
                          !e.hasError &&
                              e.currentInput &&
                              ((e.currentInput = (r = e.currentInput).endsWith('.') ? r.slice(0, -1) : r),
                              (e.currentInput = (parseFloat(e.currentInput) / 100).toString()),
                              c(`${e.previousInput} ${e.operation} ${e.currentInput}`, e.hasError));
                  }
                  var r;
              })(t)
            : r.classList.contains('accent')
              ? (function (n) {
                    e.hasError ||
                        ((e.currentInput || e.previousInput) &&
                            ('=' === n
                                ? (function () {
                                      if ('' !== e.previousInput && '' !== e.currentInput && e.operation) {
                                          if (((e.currentInput = i(parseFloat(e.previousInput), parseFloat(e.currentInput), e.operation)), u(e.currentInput)))
                                              return;
                                          (e.previousInput = ''), (e.operation = '');
                                      }
                                  })()
                                : (function (n) {
                                      if ('' !== e.currentInput && '' !== e.previousInput && e.operation) {
                                          if (((e.previousInput = i(parseFloat(e.previousInput), parseFloat(e.currentInput), e.operation)), u(e.previousInput)))
                                              return;
                                      } else '' !== e.currentInput && (e.previousInput = e.currentInput);
                                      (e.operation = n), (e.currentInput = '');
                                  })(n),
                            c(
                                e.hasError ? 'Error' : '' === e.operation ? e.currentInput || '0' : `${e.previousInput} ${e.operation} ${e.currentInput}`,
                                e.hasError
                            )));
                })(t)
              : (function (n) {
                    if (!(e.hasError || e.currentInput.length >= 15)) {
                        if ('.' === n) {
                            if ((e.currentInput || (e.currentInput = '0'), e.currentInput.includes('.'))) return;
                            e.currentInput += '.';
                        } else {
                            if ('0' === e.currentInput && '0' === n) return;
                            '0' === e.currentInput ? (e.currentInput = n) : (e.currentInput += n);
                        }
                        c(`${e.previousInput} ${e.operation} ${e.currentInput}`);
                    }
                })(t);
    }),
        k.addEventListener('click', () => {
            const n = 'light' === S.getAttribute('data-theme');
            S.setAttribute('data-theme', n ? 'dark' : 'light'), (k.textContent = n ? 'Switch to Light Theme' : 'Switch to Dark Theme');
        });
})();
