!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "829fe251-c84b-44de-ba7b-dd4df3f78e48",
        e._sentryDebugIdIdentifier = "sentry-dbid-829fe251-c84b-44de-ba7b-dd4df3f78e48")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9831], {
    49481: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/comic/[slug]", function() {
            return s(79530)
        }
        ])
    },
    44325: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return d
            }
        });
        var r = s(85893)
          , a = s(27484)
          , l = s.n(a)
          , n = s(84110)
          , i = s.n(n)
          , o = s(67294)
          , c = s(86010);
        function d(e) {
            let {datetime: t, suffix: s=!1, className: a=""} = e
              , [n,i] = (0,
            o.useState)(!1);
            return (0,
            r.jsxs)("span", {
                className: (0,
                c.Z)("cursor-pointer", n && "z-10 relative", a),
                onClick: ()=>{
                    i(!n)
                }
                ,
                children: [n ? new Date(t).toLocaleString() : l()().to(t, !0), " ", s && !n ? "ago" : ""]
            })
        }
        l().extend(i(), {
            rounding: Math.floor
        })
    },
    59928: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return o
            }
        });
        var r = s(85893)
          , a = s(7257)
          , l = s(14535)
          , n = s(60406)
          , i = s(43749);
        function o(e) {
            let t, s, {type: o, children: c} = e;
            o = "sucess";
            console.log('funcionou por aqui')
            if ("warn" == o)
                t = (0,
                r.jsx)(a.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                s = "border-yellow-400 dark:border-yellow-700 bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-300";
            else if ("error" == o)
                t = (0,
                r.jsx)(l.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                s = "border-red-400 dark:border-red-700 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-300";
            else if ("info" == o)
                t = (0,
                r.jsx)(n.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                s = "border-blue-400 dark:border-blue-700 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-300";
            else {
                if ("success" != o)
                    return (0,
                    r.jsx)(r.Fragment, {});
                t = (0,
                r.jsx)(i.Z, {
                    className: "w-8 h-8 mr-2"
                }),
                s = "border-green-400 dark:border-green-700 bg-blue-100 dark:bg-green-900 text-green-900 dark:text-green-300"
            }
            return (0,
            r.jsxs)("div", {
                className: "rounded p-2 flex border-l-8 shadow items-center ".concat(s, " mx-1 md:mx-0"),
                children: [(0,
                r.jsx)("div", {
                    className: "float-left",
                    children: t
                }), (0,
                r.jsx)("span", {
                    className: "text-xs md:text-sm lg:text-base w-full",
                    children: c
                })]
            })
        }
    },
    63231: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var r = s(85893)
          , a = s(86010);
        s(67294);
        let l = {
            xs: "rounded px-2 py-1 text-xs",
            sm: "rounded px-2.5 py-1.5 text-xs",
            md: "rounded-md px-3 py-2 text-sm leading-4",
            lg: "rounded-md px-4 py-2 text-sm",
            xl: "rounded-md px-4 py-2 text-base",
            "2xl": "rounded-md px-6 py-3 text-base"
        }
          , n = {
            default: "border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-blue-500",
            primary: "border-transparent bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 focus:ring-blue-500",
            secondary: "border-transparent bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200  hover:bg-blue-200 dark:hover:bg-blue-600 focus:ring-blue-500"
        };
        function i(e) {
            let {size: t="md", children: s, onClick: i, type: o="button", color: c="default", disabled: d=!1, className: m="", id: u=""} = e;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("button", {
                    type: o,
                    onClick: i,
                    color: c,
                    disabled: d,
                    className: (0,
                    a.Z)(m, "inline-flex items-center rounded font-medium shadow-sm focus:outline-none focus:ring-2", l[t], n[c], d ? "opacity-75" : ""),
                    id: u,
                    children: s
                })
            })
        }
    },
    35270: function(e, t, s) {
        "use strict";
        var r = s(85893)
          , a = s(81981)
          , l = s(43749)
          , n = s(36856)
          , i = s(48583)
          , o = s(68452)
          , c = s(67294)
          , d = s(25933)
          , m = s(86010)
          , u = s(67565);
        let h = (0,
        c.forwardRef)((e,t)=>{
            let {hid: h, className: x="", showText: p=!1, setDownloaded: g=null} = e
              , v = (0,
            i.Dv)(o.LF)
              , [y,f] = (0,
            i.KO)(o.pG)
              , [j,b] = (0,
            c.useState)(!1)
              , w = (0,
            c.useRef)(0)
              , _ = (0,
            c.useRef)(!1)
              , N = (0,
            d.Z)();
            async function k(e) {
                b(!0);
                try {
                    let {zipSync: t} = await s.e(3778).then(s.bind(s, 93778))
                      , r = (await s.e(3162).then(s.t.bind(s, 93162, 23))).default
                      , l = (await s.e(707).then(s.bind(s, 50707))).default
                      , n = await fetch("https://api.comick.io" + "/v1.0/chapter/".concat(e, "/download"), {
                        credentials: "include"
                    })
                      , i = await n.json()
                      , o = await l(i.images, async e=>{
                        let t = "https://" + (0,
                        a.po)().replace("meo.comick.pictures", "s3.comick.ink/comick") + "/" + e
                          , s = await fetch(t, {
                            cache: "no-store"
                        }).then(e=>e.arrayBuffer());
                        return w.current = w.current + 1 / i.images.length * 100,
                        N(),
                        {
                            key: e,
                            binary: new Uint8Array(s)
                        }
                    }
                    , {
                        concurrency: 8
                    })
                      , c = {};
                    for (let e of o)
                        c[e.key] = e.binary;
                    let d = t(c);
                    r.saveAs(new Blob([d],{
                        type: "application/octet-stream"
                    }), i.safe_title + ".zip", !0),
                    w.current = 0,
                    f(e);
                    try {
                        u.event({
                            action: "download",
                            options: {
                                hid: e
                            }
                        })
                    } catch (e) {
                        console.error(e)
                    }
                    N()
                } finally {
                    b(!1)
                }
            }
            (0,
            c.useEffect)(()=>{
                g && y.includes(h) && g(!0)
            }
            , [y, h, g]),
            (0,
            c.useImperativeHandle)(t, ()=>({
                handleClick: Z
            }));
            let Z = async e=>{
                v.data.identity ? (g && g(!0),
                j || await k(h)) : alert("Login required.")
            }
            ;
            return w.current > 0 ? (0,
            r.jsxs)("span", {
                children: [Math.round(w.current), (0,
                r.jsx)("span", {
                    children: "%"
                })]
            }) : (0,
            r.jsxs)("span", {
                className: "cursor-pointer flex items-center space-x-1",
                onClick: Z,
                children: [y.includes(h) ? (0,
                r.jsx)(l.Z, {
                    className: (0,
                    m.Z)("w-5 h-5 hover:brightness-150 text-green-500 ")
                }) : (0,
                r.jsx)(n.Z, {
                    className: (0,
                    m.Z)("w-5 h-5 hover:brightness-150", !_.current && x)
                }), p && (0,
                r.jsx)("div", {
                    children: "Download as zip"
                })]
            })
        }
        );
        h.displayName = "Download",
        t.Z = h
    },
    33941: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return c
            }
        });
        var r = s(76140)
          , a = s(63749)
          , l = s(61012)
          , n = s(24244)
          , i = s(68452)
          , o = s(48583);
        function c() {
            let e = (0,
            r.NL)()
              , t = (0,
            n.Z)()
              , s = (0,
            o.Dv)(i.LF);
            return (0,
            a.D)({
                mutationFn: r=>(0,
                l.Z)("https://api.comick.io/follow", {
                    body: JSON.stringify({
                        id: r.id,
                        t: r.type
                    }),
                    mode: "cors",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                }).then(a=>{
                    let l = s.data.info.list;
                    return 0 == r.type ? l = l.filter(e=>e != r.hid) : l.includes(r.hid) || l.push(r.hid),
                    t.mutate({
                        list: l
                    }),
                    e.invalidateQueries({
                        queryKey: ["get_follow_by_user"]
                    }),
                    e.invalidateQueries({
                        queryKey: ["get_following_comics_or_by_id"]
                    }),
                    e.invalidateQueries({
                        queryKey: ["following_chapters"]
                    }),
                    e.invalidateQueries({
                        queryKey: ["current_user_list"]
                    }),
                    e.invalidateQueries({
                        queryKey: ["comic_ids_current_user_list"]
                    }),
                    e.invalidateQueries({
                        queryKey: ["user"]
                    }),
                    a
                }
                ),
                onSuccess: (t,s)=>{
                    e.setQueryData(["get_follow_by_user", s.id], e=>((null == e ? void 0 : e.follow) || e || (e = {}),
                    e.follow = t,
                    e))
                }
            })
        }
    },
    45518: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return u
            }
        });
        var r = s(85893)
          , a = s(24244)
          , l = s(63231)
          , n = s(73383)
          , i = s(48583)
          , o = s(59928)
          , c = s(68452)
          , d = s(67294)
          , m = s(11163);
        function u(e) {
            let {title: t} = e
              , s = (0,
            a.Z)()
              , u = (0,
            n.Z)()
              , h = (0,
            i.Dv)(c.LF)
              , x = (0,
            i.b9)(c.dq)
              , p = (0,
            m.useRouter)();
            return ((0,
            d.useEffect)(()=>(x(!1),
            ()=>{
                x(!0)
            }
            ), [x]),
            h.data.identity) ? (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("h1", {
                    className: "text-center text-2xl",
                    children: t
                }), (0,
                r.jsx)("div", {
                    className: "my-10 text-center text-lg",
                    children: "The comic may not be appropriate for all ages, or may not be appropriate for viewing at work."
                }), (0,
                r.jsx)("div", {
                    className: "my-10 text-center text-lg",
                    children: "By clicking View Page, you affirm that you are at least 18 years old."
                }), (0,
                r.jsx)("div", {
                    className: "w-full flex justify-center",
                    children: (0,
                    r.jsxs)("div", {
                        className: "space-x-5",
                        children: [(0,
                        r.jsx)(l.Z, {
                            size: u("xl") ? "2xl" : "xl",
                            onClick: ()=>{
                                try {
                                    localStorage
                                } catch (e) {
                                    alert("You need to enable cookies/localStorage to save this option.")
                                }
                                s.mutate({
                                    accept_erotic_content: !0
                                })
                            }
                            ,
                            children: "View Page"
                        }), (0,
                        r.jsx)(l.Z, {
                            size: u("xl") ? "2xl" : "xl",
                            onClick: ()=>p.back(),
                            children: "Cancel"
                        })]
                    })
                })]
            }) : (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    className: "max-w-xl mx-auto mt-10",
                    children: (0,
                    r.jsx)(o.Z, {
                        type: "warn",
                        children: "You must login to see this content."
                    })
                })
            })
        }
    },
    17786: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n
            }
        });
        var r = s(85893)
          , a = s(67294);
        let l = !1;
        function n() {
            return (0,
            a.useEffect)(()=>{
                l = !0
            }
            , []),
            l && (0,
            r.jsxs)("div", {
                className: "text-center p-4 py-12 ",
                children: [(0,
                r.jsxs)("div", {
                    className: "inline-flex font-medium text-xl relative leading-none",
                    children: [(0,
                    r.jsxs)("svg", {
                        className: "animate-spin -ml-1 mr-3 h-6 w-6 text-blue-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0,
                        r.jsx)("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }), (0,
                        r.jsx)("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    }), (0,
                    r.jsx)("span", {
                        className: "inline-block align-top select-none",
                        children: "Loading"
                    })]
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)("em", {
                        children: "It shouldn't take too long."
                    })
                })]
            })
        }
    },
    42057: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n
            }
        });
        var r = s(85893)
          , a = s(2280)
          , l = s(86010);
        function n(e) {
            let {size: t="md", iconOnly: s=!1} = e;
            return s ? (0,
            r.jsx)(a.Z, {
                className: (0,
                l.Z)("animate-spin text-blue-500", "md" == t ? "h-8 w-8" : "h-6 w-6")
            }) : (0,
            r.jsxs)("div", {
                className: (0,
                l.Z)("inline-flex relative leading-none items-center text-center"),
                children: [(0,
                r.jsx)(a.Z, {
                    className: (0,
                    l.Z)("animate-spin text-blue-500", "md" == t ? "h-8 w-8" : "h-6 w-6")
                }), !s && (0,
                r.jsx)("span", {
                    className: "inline-block align-top select-none",
                    children: "Loading"
                })]
            })
        }
    },
    53147: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return c
            }
        });
        var r = s(85893)
          , a = s(48583)
          , l = s(68452)
          , n = s(76140)
          , i = s(61012)
          , o = s(86501);
        function c() {
            let[e,t] = (0,
            a.KO)(l.nW)
              , s = (0,
            a.Dv)(l.LF)
              , c = (0,
            n.NL)();
            return a=>{
                let {comicId: l, nextId: n=null, chapterId: d, create: m=!1, chap: u=null} = a;
                return new Promise(a=>{
                    if (!s.data.identity || e === d)
                        return a(!0);
                    let h = new URL("https://api.comick.io/last_read");
                    return t(d),
                    (0,
                    i.Z)(h.href, {
                        method: "POST",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            comicId: l,
                            nextId: n,
                            chapterId: d,
                            create: m
                        })
                    }).then(()=>{
                        c.invalidateQueries({
                            queryKey: ["get_following_comics_or_by_id"]
                        }),
                        c.invalidateQueries({
                            queryKey: ["get_follow_by_user"]
                        }),
                        c.invalidateQueries({
                            queryKey: ["following_chapters"]
                        }),
                        c.invalidateQueries({
                            queryKey: ["current_user_list"]
                        }),
                        c.invalidateQueries({
                            queryKey: ["comic_ids_current_user_list"]
                        }),
                        u && o.ZP.success((0,
                        r.jsxs)("span", {
                            children: ["Marked ", (0,
                            r.jsx)("strong", {
                                children: u
                            }), " as last read"]
                        })),
                        a(!0)
                    }
                    ).catch(e=>{
                        e.message ? o.ZP.error("An error occurred while bookmarking this chapter: " + e.message) : o.ZP.error("Can not bookmark the chapter.")
                    }
                    )
                }
                )
            }
        }
    },
    79530: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSG: function() {
                return ej
            },
            default: function() {
                return eb
            }
        });
        var r = s(85893)
          , a = s(17786)
          , l = s(11163)
          , n = s(67294)
          , i = s(41664)
          , o = s.n(i)
          , c = s(56982)
          , d = s(2962)
          , m = s(23917)
          , u = s(97243)
          , h = s(91094)
          , x = s(68452)
          , p = s(48583)
          , g = s(1987)
          , v = s(61012)
          , y = s(81981)
          , f = s(42057)
          , j = s(86010)
          , b = s(33941);
        function w(e) {
            var t, s, a, l;
            let {comic: i, firstChap: o} = e
              , c = (0,
            p.Dv)(x.LF)
              , {data: d, isFetching: m} = (0,
            g.a)({
                queryKey: ["get_follow_by_user", i.id],
                queryFn: async()=>(0,
                v.Z)("https://api.comick.io/user/follow/comic/" + i.id, {
                    credentials: "include",
                    mode: "cors"
                }),
                enabled: !!i && !!(null == c ? void 0 : null === (s = c.data) || void 0 === s ? void 0 : null === (t = s.identity) || void 0 === t ? void 0 : t.id) && !!(null == c ? void 0 : null === (l = c.data) || void 0 === l ? void 0 : null === (a = l.info) || void 0 === a ? void 0 : a.list) && c.data.info.list.includes(i.hid)
            })
              , u = (0,
            p.b9)(x.Q);
            return (0,
            n.useEffect)(()=>{
                var e, t, s;
                (null == d ? void 0 : null === (e = d.follow) || void 0 === e ? void 0 : e.md_chapters) && (null == d ? void 0 : null === (s = d.follow) || void 0 === s ? void 0 : null === (t = s.md_chapters2) || void 0 === t ? void 0 : t.hid) && u(d.follow.md_chapters2.hid)
            }
            ),
            (0,
            r.jsxs)("div", {
                className: "flex items-center w-full md:max-w-md xl:max-w-xl space-x-3",
                children: [(0,
                r.jsx)(N, {
                    data: d,
                    firstChap: o,
                    comic: i,
                    isFetching: m,
                    user: c
                }), (0,
                r.jsx)(_, {
                    data: d,
                    comic: i,
                    isFetching: m,
                    user: c
                })]
            })
        }
        function _(e) {
            var t;
            let {data: s, comic: a, user: l, isFetching: n} = e
              , i = (0,
            b.Z)()
              , {requireAuth: o} = (0,
            h.d)();
            return n || l.isLoading ? (0,
            r.jsx)("button", {
                className: (0,
                j.Z)("md:w-96 h-12 btn px-2 py-3 flex-1"),
                children: (0,
                r.jsx)(f.Z, {
                    size: "sm",
                    iconOnly: !0
                })
            }) : l.data.identity && (null == s ? void 0 : null === (t = s.follow) || void 0 === t ? void 0 : t.type) ? (0,
            r.jsxs)("select", {
                className: (0,
                j.Z)("flex-1 mt-0 py-3 px-2 h-12 border border-gray-300 dark:bg-gray-700 dark:border-gray-700 rounded"),
                disabled: i.isPending,
                onChange: e=>i.mutate({
                    id: a.id,
                    type: Number(e.target.value),
                    hid: a.hid
                }),
                value: s.follow.type,
                children: [(0,
                r.jsx)("option", {
                    value: "0",
                    children: "Unfollow"
                }), (0,
                r.jsx)("option", {
                    value: "1",
                    children: "Reading"
                }), (0,
                r.jsx)("option", {
                    value: "2",
                    children: "Completed"
                }), (0,
                r.jsx)("option", {
                    value: "3",
                    children: "On-Hold"
                }), (0,
                r.jsx)("option", {
                    value: "4",
                    children: "Dropped"
                }), (0,
                r.jsx)("option", {
                    value: "5",
                    children: "Plan to Read"
                })]
            }) : (0,
            r.jsxs)("button", {
                className: (0,
                j.Z)("md:w-96 h-12 btn px-2 py-3 flex-1", i.isPending ? "disabled" : ""),
                onClick: ()=>{
                    o() && !i.isPending && i.mutate({
                        id: a.id,
                        type: 1,
                        hid: a.hid
                    })
                }
                ,
                children: [(0,
                r.jsx)(m.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsx)("span", {
                    className: "text-base font-semibold ml-1",
                    children: "Follow"
                })]
            })
        }
        function N(e) {
            var t, s, a, l, n, i, c, d;
            let m, {data: h, comic: x, user: p, isFetching: g, firstChap: v} = e, b = "flex-1 md:w-96 h-12 btn btn-primary px-2 py-3 flex items-center rounded";
            return ((g || p.isLoading) && (m = (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(u.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsx)(f.Z, {
                    size: "sm",
                    iconOnly: !0
                })]
            })),
            p.data.identity && (null == h ? void 0 : h.follow) || !v || (m = (0,
            r.jsxs)(o(), {
                href: (0,
                y.nb)({
                    slug: x.slug,
                    hid: null == v ? void 0 : v.hid,
                    chap: null == v ? void 0 : v.chap,
                    lang: null == v ? void 0 : v.lang,
                    vol: null == v ? void 0 : v.vol
                }),
                className: (0,
                j.Z)(b, "flex truncate flex-1"),
                children: [(0,
                r.jsx)(u.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsx)("span", {
                    className: "text-base font-semibold ml-1",
                    children: "Start Reading"
                })]
            })),
            (null == h ? void 0 : null === (t = h.follow) || void 0 === t ? void 0 : t.md_chapters) ? m = (0,
            r.jsxs)(o(), {
                href: (0,
                y.nb)({
                    slug: x.slug,
                    hid: h.follow.md_chapters.hid,
                    chap: h.follow.md_chapters.chap,
                    lang: null === (a = h.follow.md_chapters) || void 0 === a ? void 0 : a.lang,
                    vol: null === (l = h.follow.md_chapters) || void 0 === l ? void 0 : l.vol
                }),
                className: (0,
                j.Z)(b, "flex flex-1"),
                children: [(0,
                r.jsx)(u.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsxs)("span", {
                    className: "text-base font-semibold ml-1 truncate",
                    children: ["Continue", " ", h.follow.md_chapters.chap ? h.follow.md_chapters.chap : h.follow.md_chapters.vol && "Vol. " + h.follow.md_chapters.vol]
                })]
            }) : (null == h ? void 0 : null === (s = h.follow) || void 0 === s ? void 0 : s.md_chapters2) ? m = (0,
            r.jsxs)(o(), {
                href: (0,
                y.nb)({
                    slug: x.slug,
                    hid: null === (n = h.follow.md_chapters2) || void 0 === n ? void 0 : n.hid,
                    chap: null === (i = h.follow.md_chapters2) || void 0 === i ? void 0 : i.chap,
                    lang: null === (c = h.follow.md_chapters2) || void 0 === c ? void 0 : c.lang,
                    vol: null === (d = h.follow.md_chapters2) || void 0 === d ? void 0 : d.vol
                }),
                className: (0,
                j.Z)(b, "flex truncate flex-1"),
                children: [(0,
                r.jsx)(u.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsxs)("span", {
                    className: "text-base font-semibold ml-1",
                    children: ["Continue", " ", h.follow.md_chapters2.chap ? h.follow.md_chapters2.chap : h.follow.md_chapters2.vol && "Vol. " + h.follow.md_chapters2.vol]
                })]
            }) : (v || v) && (m = (0,
            r.jsxs)(o(), {
                href: (0,
                y.nb)({
                    slug: x.slug,
                    hid: v.hid,
                    chap: v.chap,
                    lang: v.lang,
                    vol: v.vol
                }),
                className: (0,
                j.Z)(b, "flex flex-1"),
                children: [(0,
                r.jsx)(u.Z, {
                    className: "w-6 h-6"
                }), (0,
                r.jsxs)("span", {
                    className: "text-base font-semibold ml-1",
                    children: ["Read", " ", v.chap && !isNaN(v.chap) ? "Ch. " + v.chap : v.vol && "Vol. " + v.vol]
                })]
            })),
            m) ? m : null
        }
        var k = s(73345)
          , Z = s(76140)
          , q = s(80129)
          , C = s.n(q);
        function S(e) {
            let {total: t, limit: s, shallow: a=!0, scroll: n=!1, nextPrev: i} = e
              , c = (0,
            l.useRouter)()
              , d = Math.ceil(t / s);
            if (isNaN(d) || d < 2)
                return null;
            let m = C().parse(window.location.search.slice(0), {
                ignoreQueryPrefix: !0
            });
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: "flex w-full",
                    id: "pagination",
                    children: [i ? c.query.page && Number(c.query.page) > 1 ? (0,
                    r.jsxs)(o(), {
                        prefetch: !1,
                        scroll: n,
                        shallow: a,
                        href: {
                            pathname: window.location.pathname,
                            hash: "chapter-header",
                            query: {
                                ...m,
                                page: Number(c.query.page) - 1
                            }
                        },
                        className: "btn m-2 flex-1 border rounded-md py-5 flex items-center justify-center font-semibold text-lg ",
                        children: [(0,
                        r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            })
                        }), (0,
                        r.jsx)("span", {
                            children: " Prev"
                        })]
                    }) : (0,
                    r.jsxs)("div", {
                        className: "btn m-2 flex-1 border w-50 rounded-md px-4 py-5 flex items-center justify-center  font-semibold text-lg text-gray-300 dark:text-gray-500",
                        children: [(0,
                        r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            })
                        }), (0,
                        r.jsx)("span", {
                            children: " Prev"
                        })]
                    }) : null, i ? Number(c.query.page) >= d ? (0,
                    r.jsxs)("div", {
                        className: "btn m-2 flex-1 border rounded-md px-4 py-5 flex items-center justify-center  font-semibold text-lg text-gray-300 dark:text-gray-500",
                        children: [(0,
                        r.jsx)("span", {
                            children: "Next "
                        }), (0,
                        r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            })
                        })]
                    }) : (0,
                    r.jsxs)(o(), {
                        scroll: n,
                        shallow: a,
                        prefetch: !1,
                        href: {
                            pathname: window.location.pathname,
                            hash: "chapter-header",
                            query: {
                                ...m,
                                page: Number(c.query.page) + 1
                            }
                        },
                        className: "btn m-2 flex-1 border rounded-md py-5 flex items-center justify-center font-semibold text-lg ",
                        children: [(0,
                        r.jsx)("span", {
                            children: "Next "
                        }), (0,
                        r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            })
                        })]
                    }) : null]
                }), (0,
                r.jsxs)("div", {
                    className: "text-center my-3",
                    children: ["Showing", " ", (Number(c.query.page ? c.query.page : 1) - 1) * s + 1, " to", " ", Number(c.query.page ? c.query.page : 1) * s, " of ", t, " ", "items"]
                }), (0,
                r.jsxs)("nav", {
                    className: "flex flex-wrap container m-auto",
                    role: "navigation",
                    "aria-label": "pagination",
                    children: [1 == Number(c.query.page ? c.query.page : 1) ? (0,
                    r.jsx)("div", {
                        className: "ml-3 mt-2 px-4 py-2 flex items-center justify-center ",
                        dangerouslySetInnerHTML: {
                            __html: "&ll; First"
                        }
                    }) : (0,
                    r.jsx)(o(), {
                        shallow: a,
                        scroll: n,
                        prefetch: !1,
                        href: {
                            pathname: window.location.pathname,
                            hash: "chapter-header",
                            query: {
                                ...m,
                                page: 1
                            }
                        },
                        className: "ml-3  mt-2 border rounded-md px-4 py-2 flex items-center justify-center",
                        dangerouslySetInnerHTML: {
                            __html: "&ll; First"
                        }
                    }), [...Array(d)].map((e,t)=>{
                        let s = "";
                        return ((c.query.page || 0 != t) && t + 1 != Number(c.query.page) || (s = "bg-blue-500 text-gray-300"),
                        t > 48) ? null : (0,
                        r.jsx)(o(), {
                            scroll: n,
                            shallow: a,
                            prefetch: !1,
                            href: {
                                pathname: window.location.pathname,
                                hash: "chapter-header",
                                query: {
                                    ...m,
                                    page: t > 0 ? t + 1 : 1
                                }
                            },
                            className: "ml-3  mt-2 border rounded-md px-4 py-2 w-12 h-12 flex items-center justify-center ".concat(s),
                            "aria-label": "Page ".concat(e),
                            "aria-current": "page",
                            children: t + 1
                        }, "paginate" + t)
                    }
                    ), Number(c.query.page) == d ? (0,
                    r.jsx)("div", {
                        className: "ml-3 b mt-2 order rounded-md px-4 py-2  flex items-center justify-center ",
                        dangerouslySetInnerHTML: {
                            __html: "Last &Gt;"
                        }
                    }) : d < 50 ? (0,
                    r.jsx)(o(), {
                        scroll: n,
                        shallow: a,
                        prefetch: !1,
                        href: {
                            pathname: window.location.pathname,
                            hash: "chapter-header",
                            query: {
                                ...m,
                                page: d
                            }
                        },
                        className: "ml-3  mt-2 border rounded-md px-4 py-2 flex items-center justify-center ",
                        dangerouslySetInnerHTML: {
                            __html: "Last &Gt;"
                        }
                    }) : (0,
                    r.jsx)("div", {
                        className: "ml-3 b mt-2 border rounded-md px-4 py-2  flex items-center justify-center dark:border-gray-700",
                        children: "..."
                    })]
                })]
            })
        }
        var L = s(80470)
          , D = s(22571)
          , F = s(49587)
          , P = s(58964)
          , O = s(52541)
          , R = s(25899)
          , Q = s(24163)
          , T = s(53147)
          , M = s(44325)
          , K = s(59928)
          , I = s(73383)
          , z = s(35270)
          , E = s(25447)
          , A = s(42766);
        function V(e) {
            var t, s, a, n, i, o, c, d;
            let {comic: m, langList: u, checkVol2Chap1: h} = e
              , f = (0,
            l.useRouter)()
              , b = (0,
            Z.NL)()
              , w = (0,
            T.Z)();
            (0,
            I.Z)();
            let _ = function(e) {
                var t, s;
                let r = (0,
                l.useRouter)()
                  , a = (0,
                p.Dv)(x.LF);
                return (0,
                g.a)({
                    queryKey: ["get_chapter_by_params", e, r.query, null === (s = a.data) || void 0 === s ? void 0 : null === (t = s.info) || void 0 === t ? void 0 : t.language],
                    queryFn: async()=>{
                        var t, s;
                        let l = new URL("https://api.comick.io" + "/comic/".concat(e, "/chapters"));
                        return (null === (s = a.data.info) || void 0 === s ? void 0 : null === (t = s.language) || void 0 === t ? void 0 : t.length) > 0 && l.searchParams.append("lang", a.data.info.language.join(",")),
                        r.query.lang && (l.searchParams.delete("lang"),
                        l.searchParams.append("lang", String(r.query.lang))),
                        "all" == r.query.lang && l.searchParams.delete("lang"),
                        r.query["chap-order"] && l.searchParams.append("chap-order", String(+r.query["chap-order"])),
                        r.query["date-order"] && l.searchParams.append("date-order", String(+r.query["date-order"])),
                        r.query.page && l.searchParams.append("page", String(r.query.page)),
                        r.query.chap && (l.searchParams.append("chap", String(r.query.chap)),
                        l.searchParams.delete("page")),
                        (0,
                        v.Z)(l.href, {
                            mode: "cors"
                        })
                    }
                    ,
                    enabled: !!e && r.isReady,
                    refetchOnWindowFocus: !0
                })
            }(m && m.hid)
              , N = [];
            return (null === (s = _.data) || void 0 === s ? void 0 : null === (t = s.chapters) || void 0 === t ? void 0 : t.length) > 0 && _.data.chapters.map(e=>{
                var t, s, r;
                (null === (s = e.group_name) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.match(/official/i)) && !N.includes("Official") && N.push("Official"),
                (null === (r = e.md_chapters_groups) || void 0 === r ? void 0 : r.length) > 0 && e.md_chapters_groups.map(e=>{
                    N.includes(e.md_groups.title) || N.push(e.md_groups.title)
                }
                )
            }
            ),
            (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("h2", {
                    id: "chapter-header",
                    children: "Chapters"
                }), (0,
                r.jsxs)("div", {
                    className: "flex justify-between md:justify-start items-center my-2",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex text-sm items-center",
                        children: [(0,
                        r.jsx)(L.Z, {
                            className: "fill-current mr-1 dark:text-gray-200 h-6 w-6 lg:w-8 lg:h-8"
                        }), (0,
                        r.jsxs)("p", {
                            className: "whitespace-nowrap",
                            children: [u.length, " languages", " ", (0,
                            r.jsx)("span", {
                                className: "hidden md:inline",
                                children: " are available."
                            })]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "text-sm px-2 w-auto overflow-hidden ",
                        children: (0,
                        r.jsxs)("select", {
                            className: "cursor-pointer pl-2 pr-6 py-1 border border-gray-300 rounded dark:border-gray-600",
                            onChange: e=>{
                                e.target.value ? f.push({
                                    query: {
                                        ...f.query,
                                        lang: e.target.value
                                    }
                                }, void 0, {
                                    shallow: !0
                                }) : f.push({
                                    query: {
                                        ...f.query,
                                        lang: void 0
                                    }
                                }, void 0, {
                                    shallow: !0
                                })
                            }
                            ,
                            value: null !== (c = f.query.lang) && void 0 !== c ? c : "",
                            children: [(0,
                            r.jsx)("option", {
                                value: "",
                                children: "Select language"
                            }), (0,
                            r.jsx)("option", {
                                value: "all",
                                children: "All languages"
                            }), u.map(e=>{
                                var t;
                                return (null === y.Qi || void 0 === y.Qi ? void 0 : null === (t = y.Qi[e]) || void 0 === t ? void 0 : t.nativeName) ? (0,
                                r.jsx)("option", {
                                    value: e,
                                    children: y.Qi[e].nativeName
                                }, "selectlang" + e) : null
                            }
                            )]
                        })
                    }), u.map((e,t)=>{
                        var s;
                        return (0,
                        r.jsx)("i", {
                            onClick: ()=>{
                                let t = {
                                    ...f.query
                                };
                                delete t.page,
                                t.lang = e,
                                f.push({
                                    query: t
                                }, void 0, {
                                    shallow: !0
                                })
                            }
                            ,
                            title: (null === y.Qi || void 0 === y.Qi ? void 0 : null === (s = y.Qi[e]) || void 0 === s ? void 0 : s.nativeName) ? y.Qi[e].nativeName : e,
                            className: "flag-icon flag-icon-".concat((0,
                            y.sm)(e), "  ml-2 cursor-pointer hover:opacity-60 hidden md:block ") + (f.query.lang == e ? " ring-4 ring-blue-400 " : "")
                        }, t)
                    }
                    )]
                }), (null == _ ? void 0 : null === (n = _.data) || void 0 === n ? void 0 : null === (a = n.chapters) || void 0 === a ? void 0 : a.length) > 0 && (0,
                r.jsxs)("div", {
                    className: "flex justify-center items-center mb-3",
                    children: [(0,
                    r.jsx)("div", {
                        className: "text-sm mx-1",
                        children: "Showing chapters "
                    }), (0,
                    r.jsx)("strong", {
                        children: null !== (d = _.data.chapters[_.data.chapters.length - 1].chap) && void 0 !== d ? d : 0
                    }), (0,
                    r.jsx)("div", {
                        className: "text-sm mx-1",
                        children: "to"
                    }), (0,
                    r.jsx)("strong", {
                        children: _.data.chapters[0].chap
                    }), (0,
                    r.jsx)("div", {
                        className: "text-sm mx-1",
                        children: "- page"
                    }), (0,
                    r.jsxs)("strong", {
                        children: [f.query.page ? f.query.page : 1, "/", Math.ceil(_.data.total / _.data.limit)]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "max-xl:overflow-auto 2xl:min-w-6xl 3xl:min-w-8xl items-stretch justify-between w-full",
                    children: (0,
                    r.jsxs)("table", {
                        className: (0,
                        j.Z)("table-fixed w-full whitespace-nowrap", _.isFetching && "opacity-50"),
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsx)("th", {
                                    className: "sticky text-xs md:text-base left-0 w-7/12 md:w-5/12  text-left cursor-pointer  bg-white dark:bg-gray-800",
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: "flex items-center text-right ",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "flex items-center hover:bg-gray-100 dark:hover:bg-gray-700",
                                            onClick: ()=>"0" != f.query["chap-order"] && f.query["chap-order"] ? f.push({
                                                query: {
                                                    ...f.query,
                                                    "chap-order": "0",
                                                    "date-order": void 0
                                                }
                                            }, void 0, {
                                                shallow: !0
                                            }) : f.push({
                                                query: {
                                                    ...f.query,
                                                    "chap-order": "1",
                                                    "date-order": void 0
                                                }
                                            }, void 0, {
                                                shallow: !0
                                            }),
                                            children: [(0,
                                            r.jsxs)("span", {
                                                className: "text-gray-400 dark:text-gray-400",
                                                children: ["Chap", " "]
                                            }), void 0 == f.query["chap-order"] && window.location.search.match(/\?/) ? (0,
                                            r.jsx)(D.Z, {
                                                className: "w-4 h-4 md:w-6 md:h-6 ml-1"
                                            }) : "1" == f.query["chap-order"] ? (0,
                                            r.jsx)(P.Z, {
                                                className: "w-4 h-4 md:w-6 md:h-6"
                                            }) : (0,
                                            r.jsx)(O.Z, {
                                                className: "w-4 h-4 md:w-6 md:h-6"
                                            })]
                                        }), (0,
                                        r.jsx)("input", {
                                            type: "text",
                                            placeholder: "Goto chap",
                                            defaultValue: f.query.chap,
                                            className: "pl-3 py-1 my-2 md:my-3 mx-3 !w-16 md:!w-3/5",
                                            onChange: e=>f.push({
                                                query: {
                                                    ...f.query,
                                                    chap: e.target.value
                                                }
                                            }, void 0, {
                                                shallow: !0
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    className: "w-20 xl:w-24 text-xs md:text-base text-right hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer group",
                                    onClick: ()=>"0" === f.query["date-order"] ? f.push({
                                        query: {
                                            ...f.query,
                                            "date-order": "1",
                                            "chap-order": void 0
                                        }
                                    }, void 0, {
                                        shallow: !0
                                    }) : f.push({
                                        query: {
                                            ...f.query,
                                            "date-order": "0",
                                            "chap-order": void 0
                                        }
                                    }, void 0, {
                                        shallow: !0
                                    }),
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: "flex items-center justify-end",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "text-gray-400 dark:text-gray-400 ",
                                            children: "Uploaded"
                                        }), void 0 != f.query["date-order"] ? "0" == f.query["date-order"] ? (0,
                                        r.jsx)(O.Z, {
                                            className: "w-4 h-4 md:w-6 md:h-6 text-base"
                                        }) : (0,
                                        r.jsx)(P.Z, {
                                            className: "w-4 h-4 md:w-6 md:h-6 text-base"
                                        }) : (0,
                                        r.jsx)(D.Z, {
                                            className: "w-4 h-4 md:w-6 md:h-6 ml-1 text-base"
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    className: "text-left pl-3 xl:pl-8 text-sm md:text-base0 text-gray-400 dark:text-gray-400",
                                    children: (null == N ? void 0 : N.length) > 0 ? (0,
                                    r.jsxs)("select", {
                                        value: f.query.group ? f.query.group : void 0,
                                        onChange: e=>{
                                            f.push({
                                                query: {
                                                    ...f.query,
                                                    group: e.target.value
                                                }
                                            }, void 0, {
                                                shallow: !0
                                            })
                                        }
                                        ,
                                        className: "max-w-[10em] !bg-white dark:!bg-gray-800 text-gray-400 dark:text-gray-400",
                                        children: [(0,
                                        r.jsx)("option", {
                                            value: "0",
                                            children: f.query.group ? "--All--" : "Group"
                                        }), N.map(e=>(0,
                                        r.jsx)("option", {
                                            value: e,
                                            children: e
                                        }, e))]
                                    }) : "Group"
                                })]
                            })
                        }), (0,
                        r.jsx)(B, {
                            comic: m,
                            chaptersResult: _,
                            markNextChap: w,
                            checkVol2Chap1: h,
                            queryClient: b
                        })]
                    })
                }), "error" == _.status && (0,
                r.jsx)("div", {
                    className: "text-center text-red-500",
                    children: "An error has occurred"
                }), (0,
                r.jsx)("div", {
                    className: "mt-3",
                    children: (null === (o = _.data) || void 0 === o ? void 0 : null === (i = o.chapters) || void 0 === i ? void 0 : i.length) > 0 && !f.query.chap ? (0,
                    r.jsx)(S, {
                        total: _.data.total,
                        limit: _.data.limit
                    }) : null
                })]
            })
        }
        function B(e) {
            var t, s, a, n;
            let {comic: i, chaptersResult: c, markNextChap: d, checkVol2Chap1: m, queryClient: u} = e
              , h = (0,
            l.useRouter)();
            return c.isLoading ? (0,
            r.jsx)("tbody", {
                children: (0,
                r.jsx)("tr", {
                    children: (0,
                    r.jsx)("td", {
                        colSpan: 4,
                        children: (0,
                        r.jsx)("div", {
                            className: "py-10 flex justify-center",
                            children: (0,
                            r.jsx)(f.Z, {})
                        })
                    })
                })
            }) : c.failureCount > 0 ? (0,
            r.jsx)("tbody", {
                children: (0,
                r.jsx)("tr", {
                    children: (0,
                    r.jsx)("td", {
                        colSpan: 4,
                        children: (0,
                        r.jsx)("div", {
                            className: "py-10",
                            children: (0,
                            r.jsxs)(K.Z, {
                                type: "error",
                                children: ["Failed to load " + c.failureCount, " "]
                            })
                        })
                    })
                })
            }) : (null === (s = c.data) || void 0 === s ? void 0 : null === (t = s.chapters) || void 0 === t ? void 0 : t.length) == 0 ? 0 == i.chapter_count ? (0,
            r.jsx)("tbody", {
                children: (0,
                r.jsx)("tr", {
                    children: (0,
                    r.jsx)("td", {
                        colSpan: 3,
                        className: "py-12 italic text-center font-bold",
                        children: "No chapters yet"
                    })
                })
            }) : (0,
            r.jsx)("tbody", {
                children: (0,
                r.jsx)("tr", {
                    children: (0,
                    r.jsxs)("td", {
                        colSpan: 3,
                        className: "py-12 italic text-center",
                        children: [(0,
                        r.jsx)("p", {
                            className: "",
                            children: "No results containing all your search terms were found."
                        }), (0,
                        r.jsxs)("a", {
                            className: "link mr-3",
                            onClick: ()=>h.push({
                                query: {
                                    ...h.query,
                                    lang: "all"
                                }
                            }, void 0, {
                                shallow: !0
                            }),
                            children: ["Show all languages (last chapter: ", i.last_chapter, ")"]
                        }), (0,
                        r.jsx)(o(), {
                            href: "/comic/" + i.slug,
                            scroll: !1,
                            prefetch: !1,
                            className: "link",
                            children: "Clear search queries"
                        })]
                    })
                })
            }) : (0,
            r.jsx)("tbody", {
                children: (null === (n = c.data) || void 0 === n ? void 0 : null === (a = n.chapters) || void 0 === a ? void 0 : a.length) > 0 && c.data.chapters.filter(e=>{
                    var t, s;
                    return "0" == h.query.group || !h.query.group || ("Official" == h.query.group ? null === (s = e.group_name) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.match(/official/i) : e.md_chapters_groups.some(e=>e.md_groups.title == h.query.group))
                }
                ).map((e,t)=>(0,
                r.jsx)(H, {
                    comic: i,
                    chapter: e,
                    index: t,
                    markNextChap: d,
                    checkVol2Chap1: m,
                    queryClient: u
                }, "chapter-row" + t))
            })
        }
        function H(e) {
            var t, s, a, l, i, c, d;
            let {comic: u, chapter: h, index: g, markNextChap: v, checkVol2Chap1: f, queryClient: b} = e
              , w = (0,
            p.Dv)(x.LF)
              , _ = (0,
            I.Z)()
              , N = (0,
            p.Dv)(x.Q)
              , [k,Z] = (0,
            n.useState)(!1)
              , [q,C] = (0,
            n.useState)(!1);
            if ((null == h ? void 0 : null === (t = h.md_chapters_groups) || void 0 === t ? void 0 : t.some(e=>"danke-fuers-lesen-k1itlii1" == e.md_groups.slug)) && !(null == w ? void 0 : null === (a = w.data) || void 0 === a ? void 0 : null === (s = a.identity) || void 0 === s ? void 0 : s.id))
                return null;
            let S = "border-t dark:border-gray-700";
            g < 1 && (S = "");
            let L = !1;
            N == h.hid && (L = !0);
            let D = [];
            return h.chap || "0" === h.chap ? D.push((0,
            r.jsx)("span", {
                className: f ? "" : "font-semibold",
                title: "Chapter " + h.chap,
                children: "Ch. ".concat(h.chap)
            }, "chap" + g)) : D.push((0,
            r.jsx)(n.Fragment, {}, "empty" + g)),
            h.vol && D.push((0,
            r.jsx)("span", {
                className: f ? "font-semibold" : "",
                children: " Vol. ".concat(h.vol, " ")
            }, "vol" + g)),
            f && h.vol && D.reverse(),
            (g < 3 && u.final_chapter && h.chap == u.final_chapter || h.is_the_last_chapter) && D.push((0,
            r.jsx)("span", {
                className: "ml-2",
                children: (0,
                r.jsx)(E.Z, {
                    variant: "gray",
                    children: "END"
                })
            }, "badge" + g)),
            h.title && D.push((0,
            r.jsxs)("span", {
                className: "text-xs md:text-base",
                children: [" ", h.title]
            }, "title" + g)),
            h.chap || h.vol || h.title || (D = (null === (d = u.genres) || void 0 === d ? void 0 : d.includes(262)) || 1 == u.last_chapter && u.translation_completed || 2 == u.status ? [(0,
            r.jsx)("span", {
                className: "font-semibold",
                children: "Oneshot"
            }, "oneshost" + g)] : [(0,
            r.jsx)("span", {
                className: "font-semibold",
                children: "Unknown"
            }, "unknown" + g)]),
            (0,
            r.jsxs)("tr", {
                className: "".concat(S, " group "),
                onMouseEnter: ()=>Z(!0),
                onMouseLeave: ()=>Z(!1),
                children: [(0,
                r.jsx)("td", {
                    className: "sticky left-0 break-all cursor-pointer flex items-center justify-between group bg-white dark:bg-gray-800 ",
                    children: (0,
                    r.jsxs)(o(), {
                        prefetch: !1,
                        href: (0,
                        y.nb)({
                            chap: h.chap,
                            hid: h.hid,
                            lang: h.lang,
                            slug: u.slug,
                            vol: h.vol
                        }),
                        className: "py-3 w-full link-effect-no-ring dark:visited:text-gray-500 visited:text-gray-400 text-black dark:text-gray-200 flex items-center justify-between active:bg-blue-500/30 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "truncate",
                            children: [(0,
                            r.jsx)("i", {
                                className: "flag-icon mr-2 flag-icon-".concat((0,
                                y.sm)(h.lang), " rounded")
                            }), D]
                        }), !_("sm") && L ? (0,
                        r.jsx)(F.Z, {
                            className: "text-blue-500 group-hover:block hover:brightness-150 w-8 h-8"
                        }) : null, h.up_count - h.down_count != 0 ? (0,
                        r.jsxs)("div", {
                            className: "flex items-center w-10 justify-end",
                            children: [(0,
                            r.jsx)("div", {
                                className: "text-sm !no-link",
                                children: h.up_count - h.down_count
                            }), (0,
                            r.jsx)(R.Z, {
                                className: "w-3 h-3"
                            })]
                        }) : null]
                    }, h.id)
                }), (0,
                r.jsx)("td", {
                    className: "text-gray-600 text-right dark:text-gray-400 text-xs md:text-sm lg:text-base",
                    title: "Created at " + new Date(h.created_at).toLocaleString(),
                    children: h.created_at ? (0,
                    r.jsx)(M.Z, {
                        datetime: h.created_at
                    }) : null
                }), (0,
                r.jsxs)("td", {
                    className: " pl-3 xl:pl-8 text-right text-gray-600 dark:text-gray-400 text-xs md:text-sm lg:text-base flex items-center justify-between",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex",
                        children: [(0,
                        r.jsx)("div", {
                            className: "w-32 md:w-40 lg:w-48 xl:w-56 text-left truncate",
                            children: (null === (l = h.md_chapters_groups) || void 0 === l ? void 0 : l.length) > 0 ? h.md_chapters_groups.map((e,t)=>{
                                var s;
                                return (0,
                                r.jsxs)("span", {
                                    children: [(null === (s = h.group_name) || void 0 === s ? void 0 : s[0]) == "Official" ? "Official" : (0,
                                    r.jsx)(o(), {
                                        href: "/group/".concat(e.md_groups.slug),
                                        prefetch: !1,
                                        className: "link text-blue-400 dark:text-blue-500",
                                        children: e.md_groups.title
                                    }), h.md_chapters_groups.length > 1 && t < h.md_chapters_groups.length - 1 ? (0,
                                    r.jsx)("span", {
                                        className: "text-gray-500",
                                        children: ", "
                                    }) : null]
                                }, "group" + t + h.id)
                            }
                            ) : (null === (i = h.group_name) || void 0 === i ? void 0 : i.length) > 0 ? (0,
                            r.jsx)("span", {
                                className: "dark:text-gray-400 text-gray-600",
                                children: h.group_name[0]
                            }) : (0,
                            r.jsx)("span", {
                                className: "dark:text-gray-600 text-gray-300",
                                children: "Unknown"
                            })
                        }), (0,
                        r.jsx)("div", {
                            children: (null === (c = h.identities) || void 0 === c ? void 0 : c.traits) && (0,
                            r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0,
                                r.jsx)(Q.Z, {
                                    className: "w-4 h-4"
                                }), h.identities.traits.username && (0,
                                r.jsx)(o(), {
                                    prefetch: !1,
                                    href: "/user/" + h.identities.id + "/list",
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "ml-2 w-30 truncate text-left",
                                        children: h.identities.traits.username
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    r.jsx)("div", {
                        children: _("sm") && (k || q || L) ? (0,
                        r.jsxs)("div", {
                            className: (0,
                            j.Z)((k || q || L) && "flex inset-y-0 items-center w-10 justify-end gap-4"),
                            children: [(0,
                            r.jsx)("div", {
                                onClick: ()=>{
                                    w.data.info ? v({
                                        comicId: u.id,
                                        nextId: h.id,
                                        chapterId: h.id,
                                        create: !0,
                                        ...h.chap ? {
                                            chap: h.chap
                                        } : {}
                                    }).then(()=>{
                                        b.invalidateQueries({
                                            queryKey: ["user"]
                                        })
                                    }
                                    ) : alert("Login Required.")
                                }
                                ,
                                className: "cursor-pointer",
                                title: L ? "Bookmark the chapter" : "Bookmarked",
                                children: L ? (0,
                                r.jsx)(F.Z, {
                                    className: "text-blue-500 group-hover:block hover:brightness-150 w-5 h-5"
                                }) : (0,
                                r.jsx)(m.Z, {
                                    className: "hidden group-hover:block hover:brightness-150 w-5 h-5"
                                })
                            }), _("md") && (0,
                            r.jsx)(A.SV, {
                                fallback: (0,
                                r.jsx)("p", {
                                    children: "An error has occurred"
                                }),
                                children: (0,
                                r.jsx)(z.Z, {
                                    hid: h.hid,
                                    setDownloaded: C
                                })
                            })]
                        }) : null
                    })]
                })]
            }, g)
        }
        var G = s(4298)
          , U = s.n(G)
          , Y = s(5152)
          , W = s.n(Y)
          , J = s(45518)
          , X = s(37965)
          , $ = s(71340)
          , ee = s(69005)
          , et = s(8105)
          , es = s(86199)
          , er = s(62682)
          , ea = s(7438)
          , el = s(85006)
          , en = s(87536)
          , ei = s(10103)
          , eo = s(70802)
          , ec = s(48938)
          , ed = s(63749)
          , em = s(24737)
          , eu = s(63231)
          , eh = s(84886)
          , ex = s(86501);
        function ep(e) {
            var t, s, a, l, i;
            let {comic: d, recommendable: m} = e
              , [u,h] = (0,
            n.useState)(!1)
              , y = (0,
            p.Dv)(x.LF)
              , b = (0,
            Z.NL)()
              , {isLoading: w, data: _} = function(e, t, s) {
                var r, a, l;
                let n = (0,
                p.Dv)(x.LF);
                return (0,
                g.a)({
                    queryKey: ["user_recommendations", e],
                    queryFn: async()=>(0,
                    v.Z)("https://api.comick.io" + "/recommendations?hid=".concat(e), {
                        credentials: "include",
                        mode: "cors"
                    }),
                    enabled: !!(null === (a = n.data) || void 0 === a ? void 0 : null === (r = a.identity) || void 0 === r ? void 0 : r.id) && (t || (null === (l = n.data.info.recommmendations) || void 0 === l ? void 0 : l.includes(e))) && s
                })
            }(d.hid, u, m)
              , {data: N, hasNextPage: k, fetchNextPage: q} = (i = d.hid,
            (0,
            em.N)({
                queryKey: ["recommendations", i],
                queryFn: async e=>{
                    let {pageParam: t} = e;
                    return await (0,
                    v.Z)("https://api.comick.io" + "/comic/".concat(i, "/recommendations") + (t ? "?page=" + t : ""), {
                        mode: "cors"
                    })
                }
                ,
                initialPageParam: 1,
                enabled: m,
                placeholderData: (e,t)=>e,
                staleTime: 6e5,
                gcTime: 3e5,
                getNextPageParam: (e,t)=>(null == e ? void 0 : e.length) != 0 && 30 == e.length ? t.length + 1 : void 0
            }))
              , C = (null == N ? void 0 : null === (t = N.pages) || void 0 === t ? void 0 : t.length) > 0 ? N.pages.flatMap(e=>e) : [];
            y.data.info.accept_mature_content || (C = C.filter(e=>"safe" == e.relates.content_rating)),
            y.data.info.accept_erotic_content || (C = C.filter(e=>"safe" == e.relates.content_rating || "suggestive" == e.relates.content_rating));
            let[S,{push: L, set: D, updateAt: F}] = (0,
            ec.Z)([]);
            (0,
            n.useEffect)(()=>{
                D(_)
            }
            , [D, _]);
            let P = !1;
            (null === (l = y.data) || void 0 === l ? void 0 : null === (a = l.identity) || void 0 === a ? void 0 : null === (s = a.verifiable_addresses) || void 0 === s ? void 0 : s.length) > 0 && +new Date - +new Date(y.data.identity.created_at) > 11232e5 && y.data.identity.verifiable_addresses.some(e=>e.verified) && (P = !0);
            let {handleSubmit: O, register: R, formState: {isSubmitting: Q}} = (0,
            en.cI)()
              , {mutate: T, isPending: M} = (0,
            ed.D)({
                mutationFn: e=>(0,
                v.Z)("https://api.comick.io/recommendations/add", {
                    body: JSON.stringify({
                        hid: e.hid,
                        relates: S.map(e=>({
                            hid: e.recommendations.hid,
                            type: e.recommendations.type ? e.recommendations.type : 1 == e.score ? "up" : "down"
                        }))
                    }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                }),
                onSuccess: ()=>{
                    b.invalidateQueries({
                        queryKey: ["recommendations", d.hid]
                    }),
                    b.invalidateQueries({
                        queryKey: ["user_recommendations", d.hid]
                    }),
                    b.invalidateQueries({
                        queryKey: ["user"]
                    }),
                    ex.ZP.success("Your recommendations were saved."),
                    h(!1)
                }
            });
            return (0,
            r.jsxs)(r.Fragment, {
                children: [u && (0,
                r.jsx)(el.Z, {
                    open: u,
                    onClose: ()=>h(!1),
                    title: "Add Recommendation",
                    position: "center",
                    children: P ? w ? (0,
                    r.jsx)(f.Z, {}) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("div", {
                            className: "mt-3",
                            children: (0,
                            r.jsx)(ei.Z, {
                                enterKeyHint: "enter",
                                autoFocus: !0,
                                placeholder: "Search comics in your FOLLOWING LIST.",
                                detachedMediaQuery: "none",
                                getSources: e=>{
                                    let {query: t} = e
                                      , s = new URLSearchParams;
                                    return s.append("q", t),
                                    s.append("user_id", y.data.identity.id),
                                    [{
                                        sourceId: "databases",
                                        async getItems() {
                                            let e = await (0,
                                            v.Z)("https://api.comick.io/search/suggestion_in_mylist?" + s.toString(), {
                                                mode: "cors"
                                            }).catch(e=>[]);
                                            return (null == e ? void 0 : e.length) > 0 && (e = e.filter(e=>!(null == S ? void 0 : S.some(t=>t.recommendations.hid == e.hid)) && e.hid != d.hid)),
                                            e
                                        },
                                        onSelect(e) {
                                            let {item: t, setIsOpen: s, setQuery: r} = e;
                                            L({
                                                score: 1,
                                                recommendations: {
                                                    title: t.title,
                                                    hid: t.hid,
                                                    slug: t.slug,
                                                    md_covers: t.md_covers,
                                                    type: "up"
                                                }
                                            }),
                                            r(""),
                                            s(!1)
                                        },
                                        templates: {
                                            item(e) {
                                                let {item: t, components: s} = e;
                                                return (0,
                                                r.jsx)(eo.Z, {
                                                    hit: t,
                                                    components: s
                                                })
                                            },
                                            noResults: ()=>"" !== t ? (0,
                                            r.jsx)("div", {
                                                className: "italic text-center",
                                                children: "No results for this query."
                                            }) : void 0
                                        }
                                    }]
                                }
                                ,
                                navigator: {
                                    navigate: e=>{
                                        let {itemUrl: t} = e;
                                        if (!t)
                                            return
                                    }
                                }
                            })
                        }), (null == S ? void 0 : S.length) > 0 ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("div", {
                                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-3",
                                children: S.map((e,t)=>(0,
                                r.jsxs)("a", {
                                    href: "/comic/" + e.recommendations.slug,
                                    target: "_blank",
                                    className: (0,
                                    j.Z)("relative flex items-center space-x-3 rounded-lg border border-gray-300 dark:border-gray-700 p-2 md:p-3 lg:p-4 !pr-1 shadow-sm hover:dark:border-gray-500 ", "delete" == e.recommendations.type && "opacity-30"),
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "flex-shrink-0",
                                        children: (0,
                                        r.jsx)(eh.Z, {
                                            cover: e.recommendations.md_covers[0],
                                            alt: e.recommendations.title,
                                            size: "xs"
                                        })
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "min-w-0 flex-1 self-start text-xs md:text-xs",
                                        children: (0,
                                        r.jsx)("p", {
                                            className: "font-medium ",
                                            children: e.recommendations.title
                                        })
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "border-l dark:border-gray-600 border-gray-100 pl-5 group",
                                        onClick: s=>{
                                            F(t, {
                                                score: -1,
                                                recommendations: {
                                                    title: e.recommendations.title,
                                                    hid: e.recommendations.hid,
                                                    slug: e.recommendations.slug,
                                                    type: "delete",
                                                    md_covers: e.recommendations.md_covers
                                                }
                                            }),
                                            s.stopPropagation(),
                                            s.preventDefault()
                                        }
                                        ,
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "w-6 h-5 rounded-full self-start dark:hover:bg-gray-600 hover:bg-gray-100 flex items-center justify-center hover:cursor-pointer group-hover:text-blue-500",
                                            children: (0,
                                            r.jsx)(ee.Z, {
                                                className: "w-5 h-5 font-bold"
                                            })
                                        }), -1 == e.score && "delete" != e.recommendations.type ? (0,
                                        r.jsx)(er.Z, {
                                            className: (0,
                                            j.Z)("w-5 h-5 text-red-500 fill-red-500")
                                        }) : null, 1 == e.score && (0,
                                        r.jsx)(ea.Z, {
                                            className: (0,
                                            j.Z)("w-5 h-5 text-green-600 fill-green-600")
                                        })]
                                    })]
                                }, e.recommendations.slug))
                            }), (0,
                            r.jsxs)("form", {
                                onSubmit: O(e=>T(e)),
                                children: [(0,
                                r.jsx)("input", {
                                    type: "hidden",
                                    ...R("hid"),
                                    value: d.hid
                                }), (0,
                                r.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0,
                                    r.jsx)(eu.Z, {
                                        className: "btn mt-5 m-auto",
                                        color: "primary",
                                        type: "submit",
                                        disabled: Q || M,
                                        children: "Submit"
                                    })
                                })]
                            })]
                        }) : (0,
                        r.jsx)("div", {
                            className: "p-5 text-center italic",
                            children: "No comics have been selected yet."
                        })]
                    }) : (0,
                    r.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        r.jsxs)("ul", {
                            className: "list-decimal ml-4",
                            children: [(0,
                            r.jsx)("li", {
                                children: "You need an account to use this feature."
                            }), (0,
                            r.jsx)("li", {
                                children: "Your account must have been verified."
                            }), (0,
                            r.jsx)("li", {
                                children: "Your account must have been registered for 14 days."
                            })]
                        })
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [(0,
                    r.jsx)("h2", {
                        id: "recommendations",
                        children: "Recommendations"
                    }), m && (0,
                    r.jsx)(eu.Z, {
                        color: "default",
                        size: "xs",
                        onClick: ()=>h(!0),
                        children: (0,
                        r.jsx)(et.Z, {
                            className: "w-5 h-5 font-bold"
                        })
                    })]
                }), !m && (0,
                r.jsx)("div", {
                    className: "my-10 text-gray-400",
                    children: "The section will unlock when 10 chapters are released."
                }), m && (null == C ? void 0 : C.length) > 0 ? (0,
                r.jsxs)("div", {
                    className: "max-md:flex max-md:justify-center max-md:flex-wrap",
                    children: [(0,
                    r.jsx)("div", {
                        className: "inline-grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 mt-5 space-x-1 h-auto gap-4",
                        children: C.map(e=>{
                            let t = !1
                              , s = !1;
                            if ((null == _ ? void 0 : _.length) > 0)
                                for (let r of _)
                                    r.recommendations.hid == e.relates.hid && (1 == r.score ? t = !0 : s = !0);
                            return (0,
                            r.jsxs)("div", {
                                className: "mb-5 w-28 md:w-28 lg:w-36 group",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "relative w-28 md:w-28 lg:w-36 h-36 md:h-36 lg:h-44",
                                    onMouseOver: ()=>{}
                                    ,
                                    children: [(0,
                                    r.jsx)(c.Z, {
                                        src: e.relates.md_covers[0],
                                        alt: e.relates.title,
                                        className: "w-28 md:w-28 lg:w-36 h-36 md:h-36 lg:h-44 object-cover"
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "absolute bottom-0 bg-black bg-opacity-70 px-2 max-md:group-hover:px-1 py-1 font-bold text-white flex group-hover:gap-1 md:group-hover:gap-2 rounded-tr justify-start items-center cursor-pointer",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            onClick: ()=>{
                                                (0,
                                                v.Z)("https://api.comick.io/recommendations/add", {
                                                    body: JSON.stringify({
                                                        hid: d.hid,
                                                        relates: [{
                                                            hid: e.relates.hid,
                                                            type: "up"
                                                        }]
                                                    }),
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    credentials: "include"
                                                }).then(()=>{
                                                    ex.ZP.success('You upvoted "'.concat(e.relates.title, '"')),
                                                    b.invalidateQueries({
                                                        queryKey: ["recommendations", d.hid]
                                                    }),
                                                    b.invalidateQueries({
                                                        queryKey: ["user_recommendations", d.hid]
                                                    }),
                                                    b.invalidateQueries({
                                                        queryKey: ["user"]
                                                    })
                                                }
                                                )
                                            }
                                            ,
                                            className: "flex items-center gap-2",
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "w-5/12 hidden group-hover:block",
                                                children: (0,
                                                r.jsx)(ea.Z, {
                                                    className: (0,
                                                    j.Z)("w-4 h-4 md:w-5 md:h-5", t ? "text-green-600  hover:text-green-500" : "text-gray-400 hover:text-gray-300")
                                                })
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "hidden group-hover:block text-xs",
                                                children: e.up
                                            })]
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "w-5/12 hidden group-hover:block",
                                            children: (0,
                                            r.jsx)(er.Z, {
                                                className: (0,
                                                j.Z)("w-4 h-4 md:w-5 md:h-5 cursor-pointer", s ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-gray-300"),
                                                onClick: ()=>{
                                                    (0,
                                                    v.Z)("https://api.comick.io/recommendations/add", {
                                                        body: JSON.stringify({
                                                            hid: d.hid,
                                                            relates: [{
                                                                hid: e.relates.hid,
                                                                type: "down"
                                                            }]
                                                        }),
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        credentials: "include"
                                                    }).then(()=>{
                                                        ex.ZP.success('You downvoted "'.concat(e.relates.title, '"')),
                                                        b.invalidateQueries({
                                                            queryKey: ["recommendations", d.hid]
                                                        }),
                                                        b.invalidateQueries({
                                                            queryKey: ["user_recommendations", d.hid]
                                                        }),
                                                        b.invalidateQueries({
                                                            queryKey: ["user"]
                                                        })
                                                    }
                                                    )
                                                }
                                            })
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "group-hover:hidden text-xs font-bold",
                                            children: e.up + e.down
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "hidden group-hover:block text-xs",
                                            children: e.down
                                        })]
                                    })]
                                }), (0,
                                r.jsx)(o(), {
                                    prefetch: !1,
                                    href: "/comic/".concat(e.relates.slug),
                                    className: "mt-2 font-semibold text-xs md:text-sm line-clamp-2 break-all link",
                                    children: e.relates.title
                                })]
                            }, e.relates.slug)
                        }
                        )
                    }), k ? (0,
                    r.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        r.jsxs)(eu.Z, {
                            onClick: ()=>q(),
                            children: [(0,
                            r.jsx)(es.Z, {
                                className: "h-4 w-4 mr-1"
                            }), " Show More"]
                        })
                    }) : null]
                }) : null]
            })
        }
        function eg() {
            let e = (0,
            p.Dv)(x.LF)
              , t = (0,
            l.useRouter)();
            return e.data.identity ? null : (0,
            r.jsx)(el.Z, {
                open: !0,
                onClose: ()=>null,
                title: "Login Required",
                position: "center",
                hideCloseBtn: !0,
                blur: !0,
                children: (0,
                r.jsxs)("div", {
                    className: "my-10 text-center text-lg",
                    children: [(0,
                    r.jsx)("div", {
                        children: "You need an account to view this page."
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-10",
                        children: (0,
                        r.jsx)(eu.Z, {
                            size: "2xl",
                            onClick: ()=>t.back(),
                            children: "Back"
                        })
                    })]
                })
            })
        }
        var ev = s(83271);
        let ey = W()(()=>s.e(465).then(s.bind(s, 20465)), {
            ssr: !1
        })
          , ef = W()(()=>s.e(7296).then(s.bind(s, 57296)), {
            ssr: !1
        });
        var ej = !0;
        function eb(e) {
            var t, s, i, c, d, m, u, h, g, v, f, b, _, N, Z, q, C, S;
            let {comic: L, langList: D, authors: F, artists: P, matureContent: O, demographic: R, checkVol2Chap1: Q, firstChap: T, recommendable: M} = e
              , z = (0,
            I.Z)()
              , E = (0,
            k.Z)()
              , A = (0,
            l.useRouter)()
              , [B,H] = (0,
            n.useState)(!1)
              , G = (0,
            p.Dv)(x.LF)
              , Y = (0,
            p.Dv)(x.zS);
            if ((0,
            n.useEffect)(()=>{
                (0,
                ev.zD)().then(e=>e.detect()).then(e=>{
                    e.bot && H(!0)
                }
                ).catch(e=>console.error(e))
            }
            ),
            A.isFallback || !L)
                return (0,
                r.jsx)(a.Z, {});
            let W = !1;
            ((null === (t = L.links) || void 0 === t ? void 0 : t.engtl) || L.noindex) && (W = !0),
            "kr" == L.country && (W = !0),
            (null === (i = L.mu_comics) || void 0 === i ? void 0 : null === (s = i.mu_comic_publishers) || void 0 === s ? void 0 : s.length) > 0 && (null === (c = L.mu_comics) || void 0 === c ? void 0 : c.mu_comic_publishers.some(e=>["kadokawa", "shueisha", "kodansha", "shogakukan", "viz", "00-shu-cream-pop", "houbunsha", "mag-garden"].includes(e.mu_publishers.slug))) && (W = !0);
            let X = !1;
            return ((L.md_comic_md_genres.some(e=>"incest" == e.md_genres.slug) || !1 == L.adsense) && (X = !0),
            "erotica" != L.content_rating || !E || B || (null === (m = G.data) || void 0 === m ? void 0 : null === (d = m.info) || void 0 === d ? void 0 : d.accept_erotic_content)) ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(e_, {
                    comic: L,
                    noindex: W
                }), "erotica" == L.content_rating || X ? null : (0,
                r.jsx)(r.Fragment, {
                    children: (0,
                    r.jsx)($.Z, {})
                }), function(e, t, s) {
                    var a, l;
                    let n = (null === (l = e.md_covers) || void 0 === l ? void 0 : null === (a = l[0]) || void 0 === a ? void 0 : a.b2key) ? "https://" + (0,
                    y.po)() + "/" + e.md_covers[0].b2key : "https://comick.io/static/unicorn-512.png";
                    return (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(U(), {
                            type: "application/ld+json",
                            id: "comic-jsonld-".concat(e.slug),
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    "@context": "https://schema.org/",
                                    "@type": "ComicSeries",
                                    name: e.title,
                                    image: n,
                                    ...e.bayesian_rating > 0 ? {
                                        aggregateRating: {
                                            "@type": "AggregateRating",
                                            ratingValue: e.bayesian_rating / 2,
                                            ratingCount: e.rating_count,
                                            bestRating: "10",
                                            worstRating: "0"
                                        }
                                    } : {},
                                    ...(null == t ? void 0 : t.length) > 0 ? {
                                        author: {
                                            "@type": "Person",
                                            name: t[0].name
                                        }
                                    } : {},
                                    ...(null == s ? void 0 : s.length) > 0 ? {
                                        artist: {
                                            "@type": "Person",
                                            name: s[0].name
                                        }
                                    } : {},
                                    alternateName: []
                                })
                            }
                        }), (0,
                        r.jsx)("script", {
                            id: "__MALSYNC__",
                            type: "application/json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify({
                                    selector_position: "#mal-sync",
                                    id: e.id,
                                    links: e.links,
                                    title: e.title,
                                    comic_url: "https://comick.io/comic/" + e.slug
                                })
                            }
                        }, "comic-json-".concat(e.slug))]
                    })
                }(L, F, P), (0,
                r.jsx)(ey, {
                    matureContent: O
                }), "erotica" == L.content_rating && (0,
                r.jsx)("div", {
                    className: "my-3",
                    children: (0,
                    r.jsx)(ef, {})
                }), E && L.login_required ? (0,
                r.jsx)(eg, {}) : null, (0,
                r.jsxs)("div", {
                    className: (0,
                    j.Z)("xl:max-w-screen-xl mx-auto space-y-20 divide-gray-500", Y ? "mt-1 md:mt-2 md:pt-2 lg:pt-3 xl:pt-4" : "mt-6 lg:mt-16"),
                    children: [(0,
                    r.jsxs)("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 max-xl:px-1",
                        children: [(0,
                        r.jsx)("h1", {
                            className: "md:hidden col-span-3 break-words max-md:mb-4",
                            children: L.title
                        }), (0,
                        r.jsx)("div", {
                            className: (0,
                            j.Z)("mr-4 relative", (null === (h = L.mu_comics) || void 0 === h ? void 0 : null === (u = h.mu_comic_categories) || void 0 === u ? void 0 : u.length) > 0 ? "row-span-5" : "row-span-4"),
                            children: (0,
                            r.jsx)(ew, {
                                comic: L
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "md:col-span-2 text-sm md:text-base",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "justify-between break-words hidden md:block",
                                children: [(0,
                                r.jsx)("h1", {
                                    children: L.title
                                }), (0,
                                r.jsx)("div", {
                                    className: "w-64 md:w-72"
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "text-gray-500 dark:text-gray-400 overflow-auto mt-3 ",
                                style: {
                                    maxHeight: "4.5em"
                                },
                                children: L.md_titles ? L.md_titles.map(e=>e.title).join(" • ") : null
                            }), (0,
                            r.jsx)("hr", {
                                className: "my-2 dark:border-gray-600"
                            }), L.country ? (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: ["Origination:", " "]
                                }), (0,
                                r.jsx)(eC, {
                                    name: L.lang_name,
                                    native: L.lang_native,
                                    country: L.country
                                })]
                            }) : null, (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: ["Demographic:", " "]
                                }), (0,
                                r.jsx)("span", {
                                    children: R
                                })]
                            }), L.year ? (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: ["Published:", " "]
                                }), (0,
                                r.jsx)(o(), {
                                    prefetch: !1,
                                    href: "/search?from=".concat(L.year, "&to=").concat(L.year),
                                    className: "link",
                                    children: L.year
                                })]
                            }) : null, (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: "Status: "
                                }), 1 == L.status ? (0,
                                r.jsx)("span", {
                                    children: "\uD83D\uDCD6 Ongoing"
                                }) : null, 2 == L.status ? (0,
                                r.jsx)("span", {
                                    children: "\uD83D\uDCD7 Completed"
                                }) : null, 3 == L.status ? (0,
                                r.jsx)("span", {
                                    children: "⏹️ Cancelled"
                                }) : null, 4 == L.status ? (0,
                                r.jsx)("span", {
                                    children: "⏸️ Hiatus"
                                }) : null]
                            }), (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: ["Translation:", " "]
                                }), !0 === L.translation_completed ? (0,
                                r.jsx)("span", {
                                    children: "\uD83D\uDCD7 Completed"
                                }) : !1 === L.translation_completed ? (0,
                                r.jsx)("span", {
                                    children: "\uD83D\uDCD6 Ongoing"
                                }) : (0,
                                r.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "Unknown"
                                })]
                            }), L.final_chapter || L.final_volume ? (0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: ["Final Chapter:", " "]
                                }), L.final_volume ? (0,
                                r.jsxs)("span", {
                                    children: ["Volume ", L.final_volume, ", "]
                                }) : null, L.final_chapter ? (0,
                                r.jsxs)("span", {
                                    children: ["Chapter ", L.final_chapter]
                                }) : null]
                            }) : null, (0,
                            r.jsxs)("div", {
                                className: "flex flex-wrap",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "mr-2",
                                    children: [(0,
                                    r.jsxs)("span", {
                                        className: "text-gray-500 dark:text-gray-400 ",
                                        children: ["Ranked:", " "]
                                    }), (null == L ? void 0 : L.follow_rank) ? "#" + (null === (g = L.follow_rank) || void 0 === g ? void 0 : g.toLocaleString()) : "N/A"]
                                }), (0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsxs)("span", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: ["Followed by", " "]
                                    }), (0,
                                    r.jsxs)(o(), {
                                        prefetch: !1,
                                        href: "/comic/" + L.slug + "/followers",
                                        className: "link",
                                        children: [L.user_follow_count.toLocaleString(), " ", "users", " "]
                                    }), " ", (null == L ? void 0 : L.follow_count) ? (0,
                                    r.jsx)("span", {
                                        className: "text-[9px] align-top"
                                    }) : null]
                                })]
                            }), E && L.bayesian_rating ? (0,
                            r.jsx)(eZ, {
                                rating: L.bayesian_rating
                            }) : null]
                        }), (0,
                        r.jsxs)("div", {
                            className: "col-span-3 md:col-span-2 my-8",
                            children: [E ? (0,
                            r.jsx)(w, {
                                comic: L,
                                firstChap: T
                            }) : null, L.mismatch && (0,
                            r.jsx)("div", {
                                className: "my-3",
                                children: (0,
                                r.jsx)(K.Z, {
                                    type: "warn",
                                    children: (0,
                                    r.jsx)("span", {
                                        children: "The chapter number could be mismatched if you select different groups."
                                    })
                                })
                            }), (0,
                            r.jsx)("div", {
                                id: "mal-sync"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "col-span-3 mt-3 md:col-span-2 space-y-5",
                            children: [(0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("h3", {
                                    children: "Description"
                                }), L.desc ? (0,
                                r.jsx)("div", {
                                    className: "comic-desc xl:h-auto max-h-96 overflow-y-auto scrollbox dark:scrollbox-dark scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 scrollbar-thumb-rounded my-3 md:my-5 prose prose-hr:my-3 dark:prose-invert max-w-none prose-table:w-auto",
                                    dangerouslySetInnerHTML: {
                                        __html: L.parsed
                                    }
                                }) : (0,
                                r.jsx)("div", {
                                    className: "my-3 md:my-5",
                                    children: "N/A"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "col-span-3 md:col-span-2 text-sm md:text-base space-y-5",
                                children: [(0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("h3", {
                                        children: "More Info"
                                    }), (0,
                                    r.jsx)("table", {
                                        className: "mt-3 md:mt-5 ",
                                        children: (0,
                                        r.jsxs)("tbody", {
                                            children: [(0,
                                            r.jsxs)("tr", {
                                                className: "mt-3",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: ["Artists:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: (null == P ? void 0 : P.length) > 0 && P.map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [(0,
                                                        r.jsx)(o(), {
                                                            href: "/people/" + e.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.name
                                                        }), t < P.length - 1 && ", "]
                                                    }, "people" + e.slug + t))
                                                })]
                                            }), (0,
                                            r.jsxs)("tr", {
                                                className: " mt-1",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: ["Authors:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: (null == F ? void 0 : F.length) > 0 && F.map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [(0,
                                                        r.jsx)(o(), {
                                                            href: "/people/" + e.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.name
                                                        }), t < F.length - 1 && ", "]
                                                    }, "author" + e.slug + t))
                                                })]
                                            }), (null === (v = L.md_comic_md_genres) || void 0 === v ? void 0 : v.length) > 0 && (null === (f = L.md_comic_md_genres.filter(e=>"Genre" == e.md_genres.group || "Content" == e.md_genres.group)) || void 0 === f ? void 0 : f.length) > 0 && (0,
                                            r.jsxs)("tr", {
                                                className: " mt-1",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400 flex-shrink-0",
                                                    children: ["Genres:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: L.md_comic_md_genres.filter(e=>"Genre" == e.md_genres.group || "Content" == e.md_genres.group).map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [0 != t ? (0,
                                                        r.jsx)("span", {
                                                            children: ", "
                                                        }) : "", (0,
                                                        r.jsx)(o(), {
                                                            href: "/search?genres=" + e.md_genres.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.md_genres.name
                                                        })]
                                                    }, "genre-" + t))
                                                })]
                                            }), (null === (b = L.md_comic_md_genres) || void 0 === b ? void 0 : b.length) > 0 && (null === (_ = L.md_comic_md_genres.filter(e=>"Theme" == e.md_genres.group)) || void 0 === _ ? void 0 : _.length) > 0 && (0,
                                            r.jsxs)("tr", {
                                                className: " mt-1",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400 flex-shrink-0",
                                                    children: ["Theme:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: L.md_comic_md_genres.filter(e=>"Theme" == e.md_genres.group).map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [0 != t ? (0,
                                                        r.jsx)("span", {
                                                            children: ", "
                                                        }) : "", (0,
                                                        r.jsx)(o(), {
                                                            href: "/search?genres=" + e.md_genres.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.md_genres.name
                                                        })]
                                                    }, "genre-" + t))
                                                })]
                                            }), (null === (N = L.md_comic_md_genres) || void 0 === N ? void 0 : N.length) > 0 && (null === (Z = L.md_comic_md_genres.filter(e=>"Format" == e.md_genres.group)) || void 0 === Z ? void 0 : Z.length) > 0 && (0,
                                            r.jsxs)("tr", {
                                                className: " mt-1",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400 flex-shrink-0",
                                                    children: ["Format:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: L.md_comic_md_genres.filter(e=>"Format" == e.md_genres.group).map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [0 != t ? (0,
                                                        r.jsx)("span", {
                                                            children: ", "
                                                        }) : "", (0,
                                                        r.jsx)(o(), {
                                                            href: "/search?genres=" + e.md_genres.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.md_genres.name
                                                        })]
                                                    }, "genre-" + t))
                                                })]
                                            }), (null === (q = L.mu_comics) || void 0 === q ? void 0 : q.mu_comic_publishers.length) > 0 && (0,
                                            r.jsxs)("tr", {
                                                className: " mt-1",
                                                children: [(0,
                                                r.jsxs)("td", {
                                                    className: "text-gray-500 dark:text-gray-400 flex-shrink-0",
                                                    children: ["Publishers:", " "]
                                                }), (0,
                                                r.jsx)("td", {
                                                    className: "pl-2",
                                                    children: L.mu_comics.mu_comic_publishers.map((e,t)=>(0,
                                                    r.jsxs)("span", {
                                                        children: [0 != t ? (0,
                                                        r.jsx)("span", {
                                                            children: ", "
                                                        }) : "", (0,
                                                        r.jsx)(o(), {
                                                            href: "/publisher/" + e.mu_publishers.slug,
                                                            prefetch: !1,
                                                            className: "link",
                                                            children: e.mu_publishers.title
                                                        })]
                                                    }, "publisher-" + t))
                                                })]
                                            })]
                                        })
                                    })]
                                }), L.relate_from && (0,
                                r.jsx)("div", {
                                    className: "max-h-64 overflow-y-auto scrollbox dark:scrollbox-dark scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 scrollbar-thumb-rounded mt-1",
                                    children: E && (0,
                                    r.jsx)(ek, {
                                        comic: L
                                    })
                                })]
                            }), (null === (S = L.mu_comics) || void 0 === S ? void 0 : null === (C = S.mu_comic_categories) || void 0 === C ? void 0 : C.length) > 0 ? (0,
                            r.jsx)(eq, {
                                categories: L.mu_comics.mu_comic_categories
                            }) : null, (0,
                            r.jsx)("div", {
                                className: "flex items-center",
                                children: (0,
                                r.jsx)(eN, {
                                    links: L.links
                                })
                            })]
                        })]
                    }), z("xl") || "erotica" == L.content_rating || X ? null : (0,
                    r.jsx)(r.Fragment, {}), (0,
                    r.jsx)("div", {
                        className: "max-xl:pl-1",
                        children: E && (0,
                        r.jsx)(V, {
                            comic: L,
                            langList: D,
                            checkVol2Chap1: Q
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "max-xl:px-1",
                        children: (0,
                        r.jsx)(ep, {
                            comic: L,
                            recommendable: M
                        })
                    })]
                })]
            }) : (0,
            r.jsx)(J.Z, {
                title: L.title
            })
        }
        function ew(e) {
            var t;
            let {comic: s} = e
              , [a,l] = (0,
            n.useState)(!1);
            (0,
            n.useEffect)(()=>{
                (0,
                y.Ee)() && l(!0)
            }
            , []);
            let i = (0,
            p.Dv)(x.LF)
              , d = (0,
            k.Z)()
              , m = "";
            return (i.data.info.accept_mature_content || "erotica" != s.content_rating && "suggestive" != s.content_rating || (m = "suggestive" == s.content_rating ? "blur-sm" : "blur"),
            (null === (t = s.md_covers) || void 0 === t ? void 0 : t.length) > 0) ? (0,
            r.jsxs)("div", {
                className: "relative",
                children: [(0,
                r.jsx)(o(), {
                    prefetch: !1,
                    href: "/comic/".concat(s.slug, "/cover"),
                    children: d && (0,
                    r.jsx)(c.Z, {
                        src: s.md_covers[0],
                        alt: s.title,
                        className: (0,
                        j.Z)("rounded w-full mb-2 md:mb-3 lg:mb-4", m),
                        type: "cover",
                        priority: !0,
                        objectFit: "contain",
                        objectPosition: "top",
                        sizes: "(max-width: 800px) 50vw, (max-width: 1400px) 40vw, 30vw"
                    })
                }), a && (0,
                r.jsx)("div", {
                    className: "rounded-full absolute top-1 right-1 bg-gray-500  bg-opacity-60 items-center flex p-1 z-10",
                    children: (0,
                    r.jsx)(X.Z, {
                        className: "w-5 h-5 stroke-white relative right-[0.9px]",
                        onClick: ()=>{
                            navigator.share && navigator.share({
                                title: s.title,
                                text: "Read ".concat(s.title, " on Comick"),
                                url: window.location.href
                            }).then(()=>console.info("Successful share")).catch(e=>console.error("Error sharing", e))
                        }
                    })
                })]
            }) : null
        }
        function e_(e) {
            var t, s, a, l, n, i;
            let o, {comic: c, noindex: m} = e, u = "";
            return o = c.desc ? "\uD83D\uDCD6 " + (o = (u = c.desc.replace(/(<([^>]+)>)/gi, "")).length > 160 ? u.substr(0, 160) : u) : "Read " + c.title,
            c.country,
            c.country,
            (0,
            r.jsx)(d.PB, {
                title: c.title,
                description: o,
                canonical: "/comic/".concat(c.slug),
                robotsProps: {
                    noimageindex: !0
                },
                noindex: m,
                nofollow: !1,
                openGraph: {
                    type: "book",
                    title: c.title,
                    description: o,
                    ...(null === (s = c.md_covers) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : t.b2key) && c.md_covers[0].h ? {
                        images: [{
                            url: "https://" + (0,
                            y.po)() + "/" + c.md_covers[0].b2key,
                            alt: "".concat(c.title, " image cover"),
                            height: null === (l = c.md_covers) || void 0 === l ? void 0 : null === (a = l[0]) || void 0 === a ? void 0 : a.h,
                            width: null === (i = c.md_covers) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.w
                        }]
                    } : {}
                }
            })
        }
        function eN(e) {
            let {links: t} = e
              , s = []
              , a = []
              , l = [];
            try {
                let e;
                if (!t)
                    return null;
                for (let n in e = t,
                t = Object.keys(e).sort().reduce((t,s)=>(t[s] = e[s],
                t), {})) {
                    let e, i;
                    switch (n) {
                    case "al":
                        e = "https://anilist.co/manga/" + t[n] + "?utm_source=comick";
                        break;
                    case "amz":
                    case "cdj":
                    case "ebj":
                        e = t[n];
                        break;
                    case "ap":
                        e = "https://www.anime-planet.com/manga/" + t[n] + "?utm_source=comick";
                        break;
                    case "bw":
                        e = "https://bookwalker.jp/series/" + t[n] + "?utm_source=comick";
                        break;
                    case "kt":
                        e = "https://kitsu.io/manga/" + t[n] + "?utm_source=comick";
                        break;
                    case "mal":
                        e = "https://myanimelist.net/manga/" + t[n] + "?utm_source=comick";
                        break;
                    case "mu":
                        e = Number(t[n]) == t[n] ? "https://www.mangaupdates.com/series.html?id=" + t[n] + "?utm_source=comick" : "https://www.mangaupdates.com/series/" + t[n] + "?utm_source=comick";
                        break;
                    case "nu":
                        e = "https://www.novelupdates.com/series/" + t[n] + "?utm_source=comick";
                        break;
                    case "raw":
                        e = t[n].match(/naver/) ? t[n] : t[n] + "?utm_source=comick";
                        break;
                    case "engtl":
                        e = t[n].replace("?utm_source=mgd", "?utm_source=comick"),
                        -1 == e.indexOf("utm_source=comick") && (e.match(/\?/) ? e += "&utm_source=comick" : e += "?utm_source=comick")
                    }
                    i = "raw" == n ? (0,
                    r.jsxs)("div", {
                        title: "Raw link",
                        className: " flex w-20 shrink-0 items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 font-semibold text-gray-700 dark:text-gray-400 text-center ml-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                        children: [(0,
                        r.jsx)("img", {
                            src: "https://www.google.com/s2/favicons?sz=32&domain_url=https://" + new URL(t[n]).hostname,
                            className: "w-6 h-6",
                            alt: n
                        }), (0,
                        r.jsx)("div", {
                            className: "ml-1",
                            children: "Raw"
                        })]
                    }) : "engtl" == n ? (0,
                    r.jsxs)("div", {
                        title: "English link",
                        className: " shrink-0 w-20 flex items-center px-2 py-1 bg-gray-100 font-semibold text-gray-700 dark:text-gray-400 text-center ml-2 rounded whitespace-nowrap hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                        children: [(0,
                        r.jsx)("img", {
                            src: "https://www.google.com/s2/favicons?sz=32&domain_url=https://" + new URL(t[n]).hostname,
                            className: "w-6 h-6",
                            alt: n
                        }), (0,
                        r.jsx)("div", {
                            className: "ml-1",
                            children: "Eng"
                        })]
                    }) : (0,
                    r.jsx)("span", {
                        title: n + " link",
                        className: "block bg-auto bg-".concat(n, " cursor-pointer w-6 h-6 ml-2 rounded hover:opacity-60")
                    });
                    let o = (0,
                    r.jsx)("a", {
                        href: e,
                        rel: "nofollow noreferrer",
                        target: "_blank",
                        className: "flex",
                        children: i
                    }, "link" + n);
                    -1 != ["mu", "nu", "mal", "kt", "ap", "al"].indexOf(n) ? s.push(o) : -1 != ["raw", "engtl"].indexOf(n) ? l.push(o) : a.push(o)
                }
                if ((!l || 0 == l.length) && (!s || 0 == s.length) && (!a || 0 == a.length))
                    return null
            } catch (e) {
                return null
            }
            return (0,
            r.jsxs)("div", {
                className: "flex items-center max-w-max overflow-x-auto scrollbox dark:scrollbox-dark scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 scrollbar-thumb-rounded space-x-3",
                children: [(0,
                r.jsx)("h3", {
                    className: "whitespace-nowrap text-base",
                    children: "Referrers"
                }), l.length > 0 ? (0,
                r.jsx)("div", {
                    className: "flex items-center py-2",
                    children: l
                }) : null, s.length > 0 ? (0,
                r.jsx)("div", {
                    className: "flex py-2",
                    children: s
                }) : null, a.length > 0 ? (0,
                r.jsx)("div", {
                    className: "flex py-2 ml-3 ",
                    children: a
                }) : null]
            })
        }
        function ek(e) {
            let {comic: t} = e;
            return t.relate_from.length ? (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("h3", {
                    children: "Relations"
                }), (0,
                r.jsx)("table", {
                    className: "table mt-3 md:mt-5 ",
                    children: (0,
                    r.jsx)("tbody", {
                        children: t.relate_from.map((e,t)=>{
                            let s = "";
                            switch (e.md_relates.name) {
                            case "Sequel":
                                s = "text-red-500 font-semibold";
                                break;
                            case "Prequel":
                                s = "text-purple-500 font-semibold";
                                break;
                            case "Alternate version":
                                s = "text-yellow-500 font-semibold";
                                break;
                            case "Monochrome":
                                s = "font-semibold text-sky-600";
                                break;
                            case "Coloured":
                                s = "text-teal-500 font-semibold"
                            }
                            return (0,
                            r.jsxs)("tr", {
                                className: "flex truncate",
                                children: [(0,
                                r.jsxs)("td", {
                                    className: "text-gray-500 dark:text-gray-400 flex-shrink-0 mr-1",
                                    children: [(0,
                                    r.jsx)("span", {
                                        className: s,
                                        children: e.md_relates.name
                                    }), ": "]
                                }), (0,
                                r.jsx)("td", {
                                    children: (0,
                                    r.jsx)(o(), {
                                        prefetch: !1,
                                        href: "/comic/".concat(e.relate_to.slug),
                                        className: "link",
                                        children: e.relate_to.title
                                    })
                                })]
                            }, "related" + t)
                        }
                        )
                    })
                })]
            }) : null
        }
        function eZ(e) {
            let {rating: t} = e
              , s = Number((t / 2).toFixed())
              , a = [];
            for (let e = 0; e < s; e++)
                a.push((0,
                r.jsx)("span", {
                    children: "⭐"
                }));
            return t && 0 != t ? (0,
            r.jsx)("div", {
                className: "flex my-2",
                children: (0,
                r.jsxs)("div", {
                    className: "flex items-center",
                    children: [a, " ", (0,
                    r.jsx)("div", {
                        className: "ml-1",
                        children: t
                    })]
                })
            }) : null
        }
        function eq(e) {
            let {categories: t} = e
              , s = t[0].positive_vote > 5
              , [a,l] = (0,
            n.useState)(t[0].positive_vote > 5 ? t.filter(e=>e.positive_vote - e.negative_vote > 0) : t)
              , [i,c] = (0,
            n.useState)(!1);
            return (0,
            r.jsxs)("div", {
                className: "col-span-3 md:col-span-2 ",
                children: [(0,
                r.jsxs)("h3", {
                    className: "font-semibold flex items-end",
                    children: ["Tags", " ", s && (0,
                    r.jsx)("div", {
                        className: "text-xs font-normal ml-2 mb-1 cursor-pointer hover:underline",
                        onClick: ()=>{
                            i ? l(t.filter(e=>e.positive_vote > 0)) : l(t),
                            c(!i)
                        }
                        ,
                        children: i ? "Show less" : "Show hidden tags"
                    })]
                }), (0,
                r.jsx)("ul", {
                    className: "scrollbox dark:scrollbox-dark mt-3 mb-3 flex flex-wrap max-h-32 md:max-h-48 xl:max-h-48  overflow-y-auto items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 scrollbar-thumb-rounded",
                    children: a.map((e,s)=>{
                        if (!e.mu_categories)
                            return null;
                        let a = "";
                        return t.length > 12 && s / t.length < .3 && (a = "md:text-lg"),
                        (0,
                        r.jsx)("li", {
                            className: (0,
                            j.Z)("text-sm md:text-base ml-1 mt-1 px-2 py-1 rounded bg-gray-100 dark:bg-gray-750 cursor-pointer active:bg-blue-500 hover:bg-gray-200 dark:hover:bg-gray-700", a),
                            title: "Vote: ".concat(e.positive_vote - e.negative_vote),
                            children: (0,
                            r.jsx)(o(), {
                                href: "/search?tags=" + e.mu_categories.slug,
                                prefetch: !1,
                                children: e.mu_categories.title
                            })
                        }, "category " + s)
                    }
                    )
                })]
            })
        }
        function eC(e) {
            if ("jp" == e.country)
                return (0,
                r.jsx)("span", {
                    children: "Manga"
                });
            if ("kr" == e.country)
                return (0,
                r.jsx)("span", {
                    children: "Manhwa"
                });
            if ("cn" == e.country || "hk" == e.country || "tw" == e.country)
                return (0,
                r.jsx)("span", {
                    children: "Manhua"
                });
            let t = (0,
            y.hU)(e.country);
            return (null == t ? void 0 : t.name) ? (0,
            r.jsx)("span", {
                children: t.name
            }) : null
        }
    },
    24654: function() {}
}, function(e) {
    e.O(0, [7536, 3650, 8209, 3226, 2888, 9774, 179], function() {
        return e(e.s = 49481)
    }),
    _N_E = e.O()
}
]);
