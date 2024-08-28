!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , r = Error().stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[r] = "887d22fe-6b6f-4759-9a90-0bf8732e1315",
        e._sentryDebugIdIdentifier = "sentry-dbid-887d22fe-6b6f-4759-9a90-0bf8732e1315")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8998], {
    76650: function(e, r, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/user/login", function() {
            return t(63359)
        }
        ])
    },
    59928: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return a
            }
        });
        var n = t(85893)
          , o = t(7257)
          , i = t(14535)
          , s = t(60406)
          , l = t(43749);
        function a(e) {
            let r, t, {type: a, children: d} = e;
            //a = "success";
            if ("warn" == a)
                r = (0,
                n.jsx)(o.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                t = "border-green-400 dark:border-green-700 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-300";
            else if ("error" == a)
                r = (0,
                n.jsx)(i.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                t = "border-red-400 dark:border-red-700 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-300";
            else if ("info" == a)
                r = (0,
                n.jsx)(s.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                t = "border-blue-400 dark:border-blue-700 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-300";
            else {
                if ("success" != a)
                    return (0,
                    n.jsx)(n.Fragment, {});
                r = (0,
                n.jsx)(l.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                t = "border-green-400 dark:border-green-700 bg-blue-100 dark:bg-green-900 text-green-900 dark:text-green-300"
            }
            return (0,
            n.jsxs)("div", {
                className: "rounded p-2 flex border-l-8 shadow items-center ".concat(t, " mx-1 md:mx-0"),
                children: [(0,
                n.jsx)("div", {
                    className: "float-left",
                    children: r
                }), (0,
                n.jsx)("span", {
                    className: "text-xs md:text-sm lg:text-base w-full",
                    children: d
                })]
            })
        }
    },
    17786: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return s
            }
        });
        var n = t(85893)
          , o = t(67294);
        let i = !1;
        function s() {
            return (0,
            o.useEffect)(()=>{
                i = !0
            }
            , []),
            i && (0,
            n.jsxs)("div", {
                className: "text-center p-4 py-12 ",
                children: [(0,
                n.jsxs)("div", {
                    className: "inline-flex font-medium text-xl relative leading-none",
                    children: [(0,
                    n.jsxs)("svg", {
                        className: "animate-spin -ml-1 mr-3 h-6 w-6 text-blue-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0,
                        n.jsx)("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }), (0,
                        n.jsx)("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    }), (0,
                    n.jsx)("span", {
                        className: "inline-block align-top select-none",
                        children: "Loading"
                    })]
                }), (0,
                n.jsx)("div", {
                    children: (0,
                    n.jsx)("em", {
                        children: "It shouldn't take too long."
                    })
                })]
            })
        }
    },
    15476: function(e, r, t) {
        "use strict";
        t.d(r, {
            i: function() {
                return n
            }
        });
        let n = (e,r)=>{
            e.query.flow != r && e.push("".concat(e.pathname, "?flow=").concat(r), void 0, {
                shallow: !0
            })
        }
    },
    65714: function(e, r, t) {
        "use strict";
        t.d(r, {
            V: function() {
                return s
            }
        });
        var n = t(11163)
          , o = t.n(n);
        t(67294);
        var i = t(86501);
        let s = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
              , n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return async s=>{
                var l, a, d, u, c, f, v, w, h, m, g;
                if (!s.response || (null === (l = s.response) || void 0 === l ? void 0 : l.status) === 0)
                    return window.location.href = "/user/error?error=".concat(encodeURIComponent(JSON.stringify(s.response))),
                    Promise.resolve();
                let b = (null === (a = s.response) || void 0 === a ? void 0 : a.data) || {};
                switch (null === (d = s.response) || void 0 === d ? void 0 : d.status) {
                case 400:
                    if ((null === (u = b.error) || void 0 === u ? void 0 : u.id) == "session_already_available")
                        return await o().push("/"),
                        Promise.resolve();
                    if (void 0 !== r)
                        return r(b),
                        Promise.resolve();
                    break;
                case 401:
                    try {
                        i.ZP.error(JSON.parse(s.request.response).error.reason)
                    } catch (e) {
                        i.ZP.error("An error occurred but we don't know the reason.")
                    }
                    return await o().push("/user/login"),
                    Promise.resolve();
                case 403:
                    if ((null === (c = b.error) || void 0 === c ? void 0 : c.id) === "session_aal2_required")
                        return await o().push("/user/login?aal2=true"),
                        o().reload(),
                        Promise.resolve();
                    if ((null === (f = b.error) || void 0 === f ? void 0 : f.id) === "session_refresh_required" && b.redirect_browser_to)
                        return window.location = b.redirect_browser_to,
                        Promise.resolve();
                    break;
                case 404:
                    {
                        let e = {
                            data: (null === (v = s.response) || void 0 === v ? void 0 : v.data) || s,
                            status: null === (w = s.response) || void 0 === w ? void 0 : w.status,
                            statusText: null === (h = s.response) || void 0 === h ? void 0 : h.statusText,
                            url: window.location.href
                        };
                        return await o().push("/user/error?error=".concat(encodeURIComponent(JSON.stringify(e)))),
                        Promise.resolve()
                    }
                case 410:
                    if (void 0 !== e && void 0 !== b.use_flow_id)
                        return e(b.use_flow_id).catch(e=>{
                            if (console.error(e),
                            void 0 !== t)
                                o().push(t);
                            else
                                throw e
                        }
                        );
                    if (void 0 !== t)
                        return await o().push(t),
                        Promise.resolve();
                    break;
                case 422:
                    if (void 0 !== b.redirect_browser_to) {
                        let r = new URL(window.location.href)
                          , n = new URL(b.redirect_browser_to);
                        if (r.host !== n.host)
                            return window.location = b.redirect_browser_to,
                            Promise.resolve();
                        if (r.pathname !== n.pathname)
                            return o().push(n.pathname + n.search),
                            Promise.resolve();
                        let i = n.searchParams.get("flow");
                        if (null != i && void 0 !== e)
                            return e(i).catch(e=>{
                                if (console.error(e),
                                void 0 !== t)
                                    o().push(t);
                                else
                                    throw e
                            }
                            );
                        return window.location = b.redirect_browser_to,
                        Promise.resolve()
                    }
                }
                if (console.error(s),
                n)
                    return await o().push({
                        pathname: "/user/error",
                        query: {
                            error: JSON.stringify(s, null, 2),
                            id: null === (g = s.response) || void 0 === g ? void 0 : null === (m = g.data.error) || void 0 === m ? void 0 : m.id,
                            flowType: o().pathname
                        }
                    }),
                    Promise.resolve();
                throw s
            }
        }
    },
    10331: function(e, r, t) {
        "use strict";
        t.d(r, {
            N: function() {
                return s
            }
        });
        var n = t(85734)
          , o = t(46346);
        let i = new n.V({
            basePath: "https://auth.comick.io",
            baseOptions: {
                withCredentials: !0
            }
        })
          , s = {
            identity: new o.xm(i),
            frontend: new o.eR(i),
            oauth2: new o.Md(i)
        }
    },
    28119: function(e, r, t) {
        "use strict";
        t.r(r),
        t.d(r, {
            default: function() {
                return d
            }
        });
        var n = t(85893)
          , o = t(65335);
        t(67294);
        var i = t(57770);
        t(40334),
        t(23672),
        t(56549),
        t(93443),
        t(92438),
        t(33278);
        var s = t(73345)
          , l = t(48583)
          , a = t(68452);
        function d(e) {
            let {children: r} = e
              , t = (0,
            s.Z)()
              , d = (0,
            l.Dv)(a.rw);
            return t ? (0,
            n.jsx)(o.f6, {
                themeOverrides: {
                    ...d ? {
                        border: {
                            def: "#666"
                        },
                        background: {
                            canvas: "rgb(31 41 55)",
                            subtle: "rgb(31 41 55)",
                            surface: "rgb(31 41 55)"
                        },
                        fontFamily: "inherit",
                        fontFamilyMono: "inherit"
                    } : {
                        border: {
                            def: "#ccc"
                        }
                    }
                },
                theme: d ? "dark" : "light",
                children: (0,
                n.jsx)(i.Z, {
                    defaultLocale: "en",
                    locale: "en",
                    children: (0,
                    n.jsx)("div", {
                        className: "mainContainer",
                        children: (0,
                        n.jsx)("div", {
                            className: "contentContainer",
                            children: (0,
                            n.jsx)("div", {
                                className: "content",
                                children: r
                            })
                        })
                    })
                })
            }) : null
        }
    },
    63359: function(e, r, t) {
        "use strict";
        t.r(r);
        var n = t(85893)
          , o = t(67294)
          , i = t(11163)
          , s = t.n(i)
          , l = t(10331)
          , a = t(2962)
          , d = t(28119)
          , u = t(65335)
          , c = t(15476)
          , f = t(65714)
          , v = t(17786)
          , w = t(59928);
        let h = ()=>{
            var e, r;
            let[t,d] = (0,
            o.useState)(null)
              , h = (0,
            i.useRouter)()
              , m = String(h.query.return_to || "")
              , g = String(h.query.flow || "")
              , b = !!h.query.refresh
              , p = String(h.query.aal || "")
              , x = (0,
            o.useCallback)(e=>l.N.frontend.getLoginFlow({
                id: e
            }).then(e=>{
                let {data: r} = e;
                return d(r)
            }
            ).catch(y), [])
              , y = (0,
            o.useCallback)(e=>{
                let r = (0,
                f.V)(x, d, "/login", !0);
                return window.scrollTo(0, 0),
                r(e)
            }
            , [x])
              , k = (0,
            o.useCallback)((e,r,t)=>l.N.frontend.createBrowserLoginFlow({
                refresh: e,
                aal: r,
                returnTo: t
            }).then(e=>{
                let {data: r} = e;
                d(r),
                (0,
                c.i)(s(), r.id)
            }
            ).catch(y), [y]);
            (0,
            o.useEffect)(()=>{
                if (h.isReady) {
                    if (g) {
                        x(g).catch(()=>{
                            k(b, p, m)
                        }
                        );
                        return
                    }
                    k(b, p, m)
                }
            }
            , [h.isReady]);
            let _ = e=>l.N.frontend.updateLoginFlow({
                flow: String(null == t ? void 0 : t.id),
                updateLoginFlowBody: e
            }).then(()=>{
                if (null == t ? void 0 : t.return_to) {
                    window.location.href = null == t ? void 0 : t.return_to;
                    return
                }
                window.location.href = "/"
            }
            ).catch(y);
            return (null == t ? void 0 : null === (r = t.ui) || void 0 === r ? void 0 : null === (e = r.nodes) || void 0 === e ? void 0 : e.length) > 0 && t.ui.nodes.map(e=>{
                var r, t;
                (null == e ? void 0 : null === (t = e.meta) || void 0 === t ? void 0 : null === (r = t.label) || void 0 === r ? void 0 : r.text) == "ID" && (e.meta.label.text = "Email")
            }
            ),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(a.PB, {
                    title: "Account Login"
                }), t ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "justify-center flex mb-10",
                        children: (0,
                        n.jsx)(w.Z, {
                            type: "warn",
                            children: 'Facebook Login is disabled for now, please use the "forgot password" to recover your account'
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        n.jsx)(u.MA, {
                            cardImage: "/static/icons/55x55-icon.png",
                            title: "Login",
                            flowType: "login",
                            className: "md:!max-w-[32rem]",
                            flow: t,
                            additionalProps: {
                                forgotPasswordURL: "/user/recovery",
                                signupURL: "/user/registration"
                            },
                            onSubmit: e=>{
                                let {body: r} = e;
                                return _(r)
                            }
                            ,
                            includeScripts: !0
                        })
                    })]
                }) : (0,
                n.jsx)(v.Z, {})]
            })
        }
        ;
        h.getLayout = e=>(0,
        n.jsx)(d.default, {
            children: e
        }),
        r.default = h
    },
    43749: function(e, r, t) {
        "use strict";
        var n = t(67294);
        let o = n.forwardRef(function(e, r) {
            let {title: t, titleId: o, ...i} = e;
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": o
            }, i), t ? n.createElement("title", {
                id: o
            }, t) : null, n.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            }))
        });
        r.Z = o
    },
    7257: function(e, r, t) {
        "use strict";
        var n = t(67294);
        let o = n.forwardRef(function(e, r) {
            let {title: t, titleId: o, ...i} = e;
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": o
            }, i), t ? n.createElement("title", {
                id: o
            }, t) : null, n.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            }))
        });
        r.Z = o
    },
    14535: function(e, r, t) {
        "use strict";
        var n = t(67294);
        let o = n.forwardRef(function(e, r) {
            let {title: t, titleId: o, ...i} = e;
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": o
            }, i), t ? n.createElement("title", {
                id: o
            }, t) : null, n.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            }))
        });
        r.Z = o
    },
    60406: function(e, r, t) {
        "use strict";
        var n = t(67294);
        let o = n.forwardRef(function(e, r) {
            let {title: t, titleId: o, ...i} = e;
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: r,
                "aria-labelledby": o
            }, i), t ? n.createElement("title", {
                id: o
            }, t) : null, n.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            }))
        });
        r.Z = o
    }
}, function(e) {
    e.O(0, [5808, 6382, 8764, 3658, 2969, 2888, 9774, 179], function() {
        return e(e.s = 76650)
    }),
    _N_E = e.O()
}
]);
