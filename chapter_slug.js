! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "97f6d31d-0e81-496c-a314-2eee4ea00cba", e._sentryDebugIdIdentifier = "sentry-dbid-97f6d31d-0e81-496c-a314-2eee4ea00cba")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6494, 7296], {
        38224: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/comic/[slug]/[chapter]", function() {
                return r(2135)
            }])
        },
        44325: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var a = r(85893),
                s = r(27484),
                n = r.n(s),
                l = r(84110),
                i = r.n(l),
                c = r(67294),
                o = r(86010);

            function d(e) {
                let {
                    datetime: t,
                    suffix: r = !1,
                    className: s = ""
                } = e, [l, i] = (0, c.useState)(!1);
                return (0, a.jsxs)("span", {
                    className: (0, o.Z)("cursor-pointer", l && "z-10 relative", s),
                    onClick: () => {
                        i(!l)
                    },
                    children: [l ? new Date(t).toLocaleString() : n()().to(t, !0), " ", r && !l ? "ago" : ""]
                })
            }
            n().extend(i(), {
                rounding: Math.floor
            })
        },
        12171: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return c
                }
            });
            var a = r(85893),
                s = r(86010),
                n = r(48583),
                l = r(67294),
                i = r(68452);

            function c(e) {
                let {
                    zoneId: t,
                    position: r = null,
                    hid: c = null
                } = e, o = (0, n.Dv)(i.zS);
                return (0, l.useEffect)(() => {
                    if (!document.getElementById("bidgearAdsScript")) {
                        let e = document.createElement("script");
                        e.setAttribute("src", "https://platform.bidgear.com/pubbidgear-ad.js"), e.setAttribute("id", "bidgearAdsScript"), document.head.appendChild(e)
                    }
                    let e = document.getElementById("bg-ssp-" + t);
                    e && (r && c ? e.id = "bg-ssp-".concat(t, "-") + r + c : e.id = "bg-ssp-".concat(t, "-") + Math.floor(Math.random() * Date.now()), window.pubbidgeartag = window.pubbidgeartag || [], window.pubbidgeartag.push({
                        zoneid: t,
                        id: e.id,
                        wu: window.location.href
                    }))
                }, [c, r, t]), (0, a.jsxs)("div", {
                    className: (0, s.Z)(o ? "" : "top" == r ? "pb-10 pt-2 " : "py-16"),
                    children: [!o && (0, a.jsx)("div", {
                        className: "text-center text-xs py-2",
                        children: "ADVERTISEMENT"
                    }), (0, a.jsx)("div", {
                        id: "bg-ssp-" + t,
                        className: (0, s.Z)(!o && "min-h-[250px] min-w-[300px]")
                    })]
                })
            }
        },
        59928: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return c
                }
            });
            var a = r(85893),
                s = r(7257),
                n = r(14535),
                l = r(60406),
                i = r(43749);

            function c(e) {
                let t, r, {
                    type: c,
                    children: o
                } = e;
                if ("warn" == c) t = (0, a.jsx)(s.Z, {
                    className: "w-8 h-8 mr-2"
                }), r = "border-yellow-400 dark:border-yellow-700 bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-300";
                else if ("error" == c) t = (0, a.jsx)(n.Z, {
                    className: "w-8 h-8 mr-2"
                }), r = "border-red-400 dark:border-red-700 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-300";
                else if ("info" == c) t = (0, a.jsx)(l.Z, {
                    className: "w-8 h-8 mr-2"
                }), r = "border-blue-400 dark:border-blue-700 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-300";
                else {
                    if ("success" != c) return (0, a.jsx)(a.Fragment, {});
                    t = (0, a.jsx)(i.Z, {
                        className: "w-8 h-8 mr-2"
                    }), r = "border-green-400 dark:border-green-700 bg-blue-100 dark:bg-green-900 text-green-900 dark:text-green-300"
                }
                return (0, a.jsxs)("div", {
                    className: "rounded p-2 flex border-l-8 shadow items-center ".concat(r, " mx-1 md:mx-0"),
                    children: [(0, a.jsx)("div", {
                        className: "float-left",
                        children: t
                    }), (0, a.jsx)("span", {
                        className: "text-xs md:text-sm lg:text-base w-full",
                        children: o
                    })]
                })
            }
        },
        57296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var a = r(85893),
                s = r(59928);

            function n() {
                return (0, a.jsx)("div", {
                    className: "xl:container mx-auto margin-safe-top",
                    children: (0, a.jsx)(s.Z, {
                        type: "error",
                        children: (0, a.jsx)("div", {
                            className: "md:ml-3 my-3",
                            children: (0, a.jsx)("div", {
                                children: "The Comic may not be appropriate for all ages, or may not be appropriate for viewing at work."
                            })
                        })
                    })
                })
            }
        },
        35270: function(e, t, r) {
            "use strict";
            var a = r(85893),
                s = r(81981),
                n = r(43749),
                l = r(36856),
                i = r(48583),
                c = r(68452),
                o = r(67294),
                d = r(25933),
                m = r(86010),
                u = r(67565);
            let h = (0, o.forwardRef)((e, t) => {
                let {
                    hid: h,
                    className: x = "",
                    showText: g = !1,
                    setDownloaded: p = null
                } = e, f = (0, i.Dv)(c.LF), [v, y] = (0, i.KO)(c.pG), [b, j] = (0, o.useState)(!1), w = (0, o.useRef)(0), N = (0, o.useRef)(!1), k = (0, d.Z)();
                async function _(e) {
                    j(!0);
                    try {
                        let {
                            zipSync: t
                        } = await r.e(3778).then(r.bind(r, 93778)), a = (await r.e(3162).then(r.t.bind(r, 93162, 23))).default, n = (await r.e(707).then(r.bind(r, 50707))).default, l = await fetch("https://api.comick.io" + "/v1.0/chapter/".concat(e, "/download"), {
                            credentials: "include"
                        }), i = await l.json(), c = await n(i.images, async e => {
                            let t = "https://" + (0, s.po)().replace("meo.comick.pictures", "s3.comick.ink/comick") + "/" + e,
                                r = await fetch(t, {
                                    cache: "no-store"
                                }).then(e => e.arrayBuffer());
                            return w.current = w.current + 1 / i.images.length * 100, k(), {
                                key: e,
                                binary: new Uint8Array(r)
                            }
                        }, {
                            concurrency: 8
                        }), o = {};
                        for (let e of c) o[e.key] = e.binary;
                        let d = t(o);
                        a.saveAs(new Blob([d], {
                            type: "application/octet-stream"
                        }), i.safe_title + ".zip", !0), w.current = 0, y(e);
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
                        k()
                    } finally {
                        j(!1)
                    }
                }(0, o.useEffect)(() => {
                    p && v.includes(h) && p(!0)
                }, [v, h, p]), (0, o.useImperativeHandle)(t, () => ({
                    handleClick: Z
                }));
                let Z = async e => {
                    f.data.identity ? (p && p(!0), b || await _(h)) : alert("Login required.")
                };
                return w.current > 0 ? (0, a.jsxs)("span", {
                    children: [Math.round(w.current), (0, a.jsx)("span", {
                        children: "%"
                    })]
                }) : (0, a.jsxs)("span", {
                    className: "cursor-pointer flex items-center space-x-1",
                    onClick: Z,
                    children: [v.includes(h) ? (0, a.jsx)(n.Z, {
                        className: (0, m.Z)("w-5 h-5 hover:brightness-150 text-green-500 ")
                    }) : (0, a.jsx)(l.Z, {
                        className: (0, m.Z)("w-5 h-5 hover:brightness-150", !N.current && x)
                    }), g && (0, a.jsx)("div", {
                        children: "Download as zip"
                    })]
                })
            });
            h.displayName = "Download", t.Z = h
        },
        57036: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return q
                }
            });
            var a = r(85893),
                s = r(1987),
                n = r(76140),
                l = r(67294),
                i = r(91094),
                c = r(68452),
                o = r(48583),
                d = r(28276),
                m = r(87536),
                u = r(35418),
                h = r(85006),
                x = r(63749),
                g = r(61012),
                p = r(73383),
                f = r(5152),
                v = r.n(f),
                y = r(92501);

            function b() {
                return (0, a.jsx)("div", {
                    className: "whitespace-normal prose dark:prose-invert",
                    children: (0, a.jsx)(y.Z, {
                        content: "\n  ## Comick's Community Guidelines\n  \n  When you use Comick, you join a community of people from all over the world. The guidelines below help keep Comick fun and enjoyable for everyone.\n  \n  If you see content that you think violates these guidelines, please downvote or report to the Discord support channel:\n  \n  ### Spam & deceptive practices\n  \n  content that intends to scam, mislead, spam, or defraud other users isn't allowed on Comick.\n  \n  ### Sensitive content\n  \n  We hope to protect viewers, and especially minors. That's why pornography or hentai is disallowed on Comick.\n  \n  ### Spoiler content\n\n  A spoiler is an element of a disseminated summary or description of any narrative that reveals plot elements. Typically, the details of the conclusion of the plot, including the climax and ending, are especially regarded as spoiler material. It can also be used to refer to any piece of information regarding any part of a given media that a potential consumer was not intended to know beforehand.\n  \n  ### Violent or dangerous content\n  \n  Hate speech, predatory behavior, graphic violence, malicious attacks, and content that promotes harmful or dangerous behavior isn't allowed on Comick.\n  \n  ### Misinformation\n  \n  Certain types of misleading or deceptive content with serious risk of egregious harm are not allowed on Comick. This includes certain types of misinformation that can cause real-world harm, like promoting harmful remedies or treatments, certain types of technically manipulated content, or content interfering with democratic processes.\n  \n	"
                    })
                })
            }
            var j = r(23279),
                w = r.n(j),
                N = r(64196),
                k = r(86010),
                _ = r(56657);
            let Z = v()(() => r.e(1678).then(r.bind(r, 21678)), {
                    loadableGenerated: {
                        webpack: () => [21678]
                    },
                    ssr: !1
                }),
                C = (0, l.forwardRef)((e, t) => {
                    var r, s, f;
                    let {
                        chapterId: v,
                        autoFocus: y = !1,
                        onSuccess: j = null,
                        defaultValue: C = "",
                        large: D = !1
                    } = e, S = (0, p.Z)(), {
                        requireAuthAndUsername: I,
                        requireVerification: F
                    } = (0, i.d)(), [E, A] = (0, o.KO)(c.Gx), [T, R] = (0, o.KO)(c.aN), [z, L] = (0, l.useState)(!1), [M, P] = (0, l.useState)(!1), [B, V] = (0, o.KO)(c.oR), [O, q] = (0, l.useState)(!1), H, U = "comment_content_" + v;
                    try {
                        H = localStorage.getItem(U)
                    } catch (e) {}
                    let K = (0, o.Dv)(c.LF),
                        {
                            handleSubmit: G,
                            control: Y,
                            reset: Q,
                            watch: W,
                            setValue: J,
                            formState: {
                                isSubmitting: X,
                                errors: $,
                                isDirty: ee
                            }
                        } = (0, m.cI)(),
                        et = W("content");
                    if (E && A(!1), (0, l.useEffect)(() => {
                            (void 0 === et && (H || C) || !et && E) && J("content", H && "undefined" != H ? H : C || "")
                        }, [E, C, H, J, et]), (0, l.useEffect)(() => {
                            et && !O ? q(!0) : !et && O && q(!1)
                        }, [et, O]), ee) try {
                        localStorage.setItem(U, et)
                    } catch (e) {}
                    let er = e => {
                            "Enter" === e.key && !e.shiftKey && S("xl") && (e.preventDefault(), G(es)())
                        },
                        ea = function() {
                            let e = (0, n.NL)();
                            return (0, x.D)({
                                mutationFn: t => (0, g.Z)("https://api.comick.io/comment", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        content: t.content,
                                        ...t.chapterId ? {
                                            chapter_id: t.chapterId
                                        } : {},
                                        ...t.commentId ? {
                                            comment_id: t.commentId
                                        } : {}
                                    }),
                                    credentials: "include"
                                }).finally(() => {
                                    e.invalidateQueries({
                                        queryKey: ["query_comments", t.chapterId]
                                    })
                                })
                            })
                        }(),
                        es = async e => {
                            try {
                                await ea.mutateAsync({
                                    chapterId: v,
                                    commentId: T,
                                    content: e.content
                                }, {
                                    onSuccess: () => {
                                        Q(), J("content", ""), R(void 0);
                                        try {
                                            localStorage.removeItem(U), H = ""
                                        } catch (e) {}
                                        V(!1)
                                    },
                                    onError: e => {
                                        V(!0)
                                    },
                                    onSettled: () => {}
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        };
                    return (0, a.jsxs)("form", {
                        onSubmit: w()(e => {
                            e.preventDefault(), G(es)()
                        }, 3e3, {
                            leading: !0,
                            trailing: !1
                        }),
                        children: [z ? (0, a.jsx)(h.Z, {
                            title: "Formatting guide",
                            onClose: () => L(!1),
                            open: z,
                            children: (0, a.jsx)("div", {
                                className: "overflow-auto",
                                children: (0, a.jsx)(Z, {})
                            })
                        }) : null, M ? (0, a.jsx)(h.Z, {
                            title: "Community Guidelines",
                            onClose: () => P(!1),
                            open: M,
                            children: (0, a.jsx)("div", {
                                className: "overflow-auto",
                                children: (0, a.jsx)(b, {})
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: "flex items-center clear-both relative",
                            children: [X || et && et.length > 450 ? (0, a.jsx)("div", {
                                className: "text-xs bg-gray-500 absolute right-12 z-50",
                                children: X ? "Submitting..." : (0, a.jsx)("div", {
                                    className: (0, k.Z)(et.length < 500 ? "text-yellow-500" : "text-red-500"),
                                    children: et.length + " / 500"
                                })
                            }) : null, !S("xl") && B ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    className: "text-xs link absolute right-10 -top-8 z-50 dark:bg-gray-600 bg-gray-200 p-1 rounded",
                                    onClick: () => {
                                        L(!0)
                                    },
                                    children: "Formatting Help"
                                }), (0, a.jsx)("span", {
                                    className: "text-xs link absolute right-40 -top-8 z-50 dark:bg-gray-600 bg-gray-200 p-1 rounded",
                                    onClick: () => {
                                        P(!0)
                                    },
                                    children: "Community Guidelines"
                                })]
                            }) : null, (null === (s = K.data.identity) || void 0 === s ? void 0 : null === (r = s.traits) || void 0 === r ? void 0 : r.email) ? (0, a.jsx)("img", {
                                className: "rounded-full h-8 w-8 md:h-10 md:w-10 mr-1",
                                src: (0, u.Z)({
                                    email: K.data.identity.traits.email,
                                    size: 100
                                }),
                                alt: "avatar"
                            }) : null, (0, a.jsx)(m.Qr, {
                                control: Y,
                                name: "content",
                                rules: {
                                    required: !0,
                                    maxLength: {
                                        message: "The maximum comment length is 500 characters",
                                        value: 500
                                    }
                                },
                                render: e => {
                                    let {
                                        field: {
                                            onChange: r,
                                            value: s
                                        }
                                    } = e;
                                    return (0, a.jsx)(d.Z, {
                                        ref: t,
                                        autoFocus: y,
                                        placeholder: "Leave a comment...",
                                        onFocus: e => {
                                            e.target.selectionStart = 100
                                        },
                                        onChange: e => {
                                            var t, a;
                                            I() && F() || e.target.blur(), r(e.target.value), "" == e.target.value && T && R(null), (null === (a = e.target) || void 0 === a ? void 0 : null === (t = a.value) || void 0 === t ? void 0 : t.length) > 0 && !B && V(!0)
                                        },
                                        value: s || "",
                                        onKeyDown: er,
                                        disabled: !!X,
                                        minRows: D ? 3 : 1,
                                        className: "p-2 scrollbar-none disabled:opacity-50 border-0 "
                                    })
                                }
                            }), !O && (0, a.jsx)("div", {
                                className: "absolute right-1 z-10 ml-2 mr-1 ",
                                onClick: () => B ? V(!1) : V(!0),
                                children: (0, a.jsx)(_.Z, {
                                    className: "w-6 h-6  fill-gray-500 dark:fill-gray-300"
                                })
                            }), (0, a.jsx)("button", {
                                type: "submit",
                                className: (0, k.Z)("p-1 active:bg-gray-200 py-4", !O && "hidden"),
                                disabled: !!X,
                                children: (0, a.jsx)(N.Z, {
                                    className: "w-6 h-6 stroke-current ml-2 mr-1 "
                                })
                            })]
                        }), (null === (f = $.content) || void 0 === f ? void 0 : f.message) ? (0, a.jsx)("div", {
                            className: "text-red-500 text-sm my-3 text-center",
                            children: $.content.message
                        }) : null, S("xl") && B ? (0, a.jsxs)("div", {
                            className: "flex w-full justify-end",
                            children: [(0, a.jsx)("span", {
                                className: "text-xs mr-3 link",
                                onClick: () => {
                                    P(!0)
                                },
                                children: "Community guidelines"
                            }), (0, a.jsx)("span", {
                                className: "text-xs link mr-12",
                                onClick: () => {
                                    L(!0)
                                },
                                children: "Formatting help"
                            })]
                        }) : null]
                    })
                });
            C.displayName = "CommentForm";
            var D = r(26749),
                S = r(27484),
                I = r.n(S),
                F = r(84110),
                E = r.n(F);
            r(46810);
            var A = r(86501),
                T = r(87649),
                R = r(63760),
                z = r(80649),
                L = r(24201),
                M = r(41664),
                P = r.n(M),
                B = r(11163),
                V = r(20544),
                O = r(81981);

            function q(e) {
                var t, r, n, d;
                let {
                    chapterId: m = null,
                    chapterHid: u = null,
                    comicRevisionId: x = null,
                    isBlur: f = !1,
                    showAffilite: v = !1,
                    lang: y = null,
                    chap: b = null,
                    comicId: j = null,
                    checkVol2Chap1: w = !1,
                    hiddenForm: N = !1,
                    large: _ = !1,
                    next: Z = null
                } = e, D = (0, o.Dv)(c.LF), S = (0, o.Dv)((0, c.YQ)({
                    hid: u
                })), [I, F] = (0, o.KO)(c.oR), E = (0, o.Dv)(c.D3), A = (0, p.Z)(), {
                    data: R,
                    isLoadingError: z,
                    isError: L,
                    isSuccess: M
                } = function(e) {
                    let {
                        chapterId: t,
                        comicRevisionId: r,
                        comicId: a,
                        chap: n,
                        lang: l,
                        checkVol2Chap1: i = !1
                    } = e;
                    return (0, s.a)({
                        queryKey: ["query_comments", t, r],
                        queryFn: async () => {
                            let e = "https://api.comick.io/comment";
                            t && (e += "/chapter/" + t), r && (e += "/revision/" + r);
                            let s = new URL(e);
                            return t && a && l && n && (s.searchParams.append("lang", l), s.searchParams.append("comic-id", a), s.searchParams.append("chap", n)), i && s.searchParams.append("order-by-vol", String(i)), (0, g.Z)(s.href, {
                                credentials: "include",
                                mode: "cors"
                            })
                        },
                        enabled: !!t || !!r
                    })
                }({
                    chapterId: m,
                    comicRevisionId: x,
                    lang: y,
                    comicId: j,
                    chap: b,
                    checkVol2Chap1: w
                });
                (0, l.useEffect)(() => {
                    async function e(e) {
                        if (e.match(/comment/))
                            for (let t = 0; t < 10; t++)
                                if (A("xl")) {
                                    let t = document.getElementById("comment-section");
                                    if (t) {
                                        let r = document.getElementById(e);
                                        if (r) {
                                            let e = r.offsetTop - t.offsetTop;
                                            t.scrollTop = e
                                        }
                                    }
                                } else await new Promise(e => setTimeout(e, 100)), document.getElementById(e) && window.location.replace("#" + e)
                    }
                    M && "" != window.location.hash && e(window.location.hash.substring(1))
                }, [A, M]);
                let P = (0, l.useRef)(),
                    [B, V] = (0, l.useState)(!1),
                    {
                        requireAuthAndUsername: q,
                        requireVerification: U
                    } = (0, i.d)(),
                    [K, Y] = (0, o.KO)(c.aN),
                    [Q, W] = (0, l.useState)(""),
                    J = (0, o.b9)(c.c$),
                    X = (0, o.b9)(c.Gx),
                    [$, ee] = (0, l.useState)(f);

                function et(e, t) {
                    q() && U() && (Y(t), W(e), X(!0), A("lg") ? V(!0) : P.current.focus())
                }
                return (0, l.useEffect)(() => {
                    "" != window.location.hash && window.location.hash.match("comment") ? ee(!1) : ee(f || !E), Y(null), W(""), V(!1), F(!1)
                }, [m, f, Y, F, E]), (0, a.jsxs)("div", {
                    onMouseEnter: () => J(!0),
                    onMouseLeave: () => J(!1),
                    className: "min-h-1/2",
                    children: [N || S.isDelay ? S.isDelay ? (0, a.jsx)("span", {
                        className: "text-gray-400 dark:text-gray-500",
                        children: "You can't comment when the chapter was not published"
                    }) : "" : (0, a.jsxs)("div", {
                        className: (0, k.Z)("z-10", A("xl") ? "" : "fixed bottom-0 bg-white dark:bg-gray-800 w-full p-1 border-t dark:border-gray-700 padding-safe-bottom"),
                        children: [I || A("xl") ? null : (0, a.jsx)(G, {
                            next: Z
                        }, m), (0, a.jsxs)("div", {
                            className: (0, k.Z)(A("xl") ? "" : "py-4 pt-8", (0, O.Ee)() && "pb-12"),
                            children: [K && (0, a.jsxs)("div", {
                                className: "ml-8 md:ml-10 text-xs mb-2",
                                children: ["You are replying to @", Q]
                            }), (0, a.jsx)(C, {
                                chapterId: m,
                                ref: P,
                                large: _,
                                ...K && {
                                    defaultValue: "@".concat(Q, " "),
                                    large: _
                                }
                            })]
                        })]
                    }), B && (0, a.jsx)(h.Z, {
                        open: B,
                        onClose: () => V(!1),
                        title: "Comment",
                        position: "center",
                        hideCloseBtn: !0,
                        children: (0, a.jsxs)("div", {
                            className: "top-0",
                            children: [(0, a.jsxs)("div", {
                                className: "py-3",
                                children: ["You are replying to @", Q]
                            }), (0, a.jsx)(C, {
                                chapterId: m,
                                defaultValue: "@".concat(Q, " "),
                                onSuccess: () => V(!1),
                                large: _
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: (0, k.Z)("px-1 xl:px-0 xl:mt-3 ", A("xl") ? "relative" : ""),
                        children: [$ && (null == R ? void 0 : null === (t = R.comments) || void 0 === t ? void 0 : t.length) > 0 ? (0, a.jsx)("div", {
                            className: "absolute left-1/2 py-10  -translate-x-1/2 blur-0 font-semibold cursor-pointer  z-10 rounded",
                            onClick: () => ee(!1),
                            children: "Click to reveal comments"
                        }) : null, z || L ? (0, a.jsx)("div", {
                            children: "An error has occurred. Can't load comments"
                        }) : null, (0, a.jsxs)("ul", {
                            className: (0, k.Z)($ && (null == R ? void 0 : null === (r = R.comments) || void 0 === r ? void 0 : r.length) > 0 ? "blur-sm pointer-events-none" : "", "tree"),
                            id: "comments-container",
                            children: [(null == R ? void 0 : null === (n = R.comments) || void 0 === n ? void 0 : n.length) == 0 && (0, a.jsxs)("div", {
                                className: "w-56 h-56 m-auto text-center  xl:py-0 xl:text-gray-500  opacity-60 text-lg",
                                children: [(0, a.jsx)(T.Z, {
                                    className: "w-14 h-14 m-auto"
                                }), (0, a.jsx)("div", {
                                    children: "No comments yet"
                                }), " ", (0, a.jsx)("div", {
                                    children: "Be the first to comment."
                                })]
                            }), null == R ? void 0 : null === (d = R.comments) || void 0 === d ? void 0 : d.map(e => {
                                var t;
                                return (0, a.jsx)(H, {
                                    allCommentsTotal: null == R ? void 0 : null === (t = R.comments) || void 0 === t ? void 0 : t.length,
                                    user: D,
                                    onClickReply: et,
                                    comment: e,
                                    actions: R.actions,
                                    replyParentId: e.id,
                                    breakpoint: A
                                }, e.id)
                            }), v ? (0, a.jsx)("div", {
                                className: "mt-10"
                            }) : null]
                        })]
                    })]
                })
            }

            function H(e) {
                var t;
                let {
                    allCommentsTotal: r,
                    comment: s,
                    user: n,
                    actions: i,
                    breakpoint: c,
                    onClickReply: o
                } = e, d = !1, m = 0, [u, h] = (0, l.useState)(!1);
                return (0, a.jsxs)("li", {
                    children: [(0, a.jsx)(U, {
                        reply: s,
                        user: n,
                        actions: i,
                        onClickReply: (e, t) => o(e, t),
                        replyParentId: s.id,
                        breakpoint: c
                    }), (null === (t = s.other_comments) || void 0 === t ? void 0 : t.length) > 0 && (0, a.jsxs)("ul", {
                        children: [s.other_comments.map((e, t) => {
                            if (d) return null;
                            if (!u) {
                                if (r > 5 && e.parsed.match(/<img/) || t > -1 && r > 10) return d = !0, m = t, null;
                                if (d) return null
                            }
                            return (0, a.jsx)("li", {
                                className: "flex",
                                children: (0, a.jsx)(U, {
                                    reply: e,
                                    user: n,
                                    actions: i,
                                    onClickReply: (e, t) => o(e, t),
                                    parentId: s.id,
                                    replyParentId: s.id,
                                    breakpoint: c
                                })
                            }, e.id)
                        }), d && !u ? (0, a.jsx)("li", {
                            className: "flex",
                            children: (0, a.jsxs)("div", {
                                className: "pl-5 py-2 font-semibold text-gray-500 dark:text-gray-400 cursor-pointer",
                                onClick: () => h(!0),
                                children: ["View ", s.other_comments.length - m, " ", s.other_comments.length - m > 1 ? "replies" : "reply"]
                            })
                        }) : null]
                    })]
                })
            }

            function U(e) {
                var t, r, s, i, c, o, d;
                let {
                    reply: m,
                    user: u,
                    actions: x,
                    onClickReply: p,
                    parentId: f = null,
                    replyParentId: v,
                    breakpoint: y
                } = e, b = (0, B.useRouter)(), [j, w] = (0, l.useState)(!1), N = (0, n.NL)(), [_, Z] = (0, l.useState)(!1), [C] = (0, l.useState)(m.down_count - m.up_count > 6 && m.up_count / m.down_count < .5);
                return (null == m ? void 0 : null === (t = m.identities) || void 0 === t ? void 0 : t.id) && ((null === (s = u.data) || void 0 === s ? void 0 : null === (r = s.identity) || void 0 === r ? void 0 : r.id) == m.identities.id || !(m.parsed.length < 15)) && ((null === (i = u.data.identity) || void 0 === i ? void 0 : i.id) == m.identities.id || "unapproved" != m.status) ? (0, a.jsxs)(a.Fragment, {
                    children: [j && !C ? (0, a.jsx)(h.Z, {
                        open: j,
                        onClose: () => w(!1),
                        position: "bottom",
                        hideCloseBtn: !0,
                        children: (0, a.jsxs)("div", {
                            className: "padding-safe-bottom",
                            children: [(null === (c = u.data.identity) || void 0 === c ? void 0 : c.id) == m.identities.id && (0, a.jsx)("button", {
                                className: "w-full h-full text-center text-xl py-3 border-b dark:border-gray-600 border-gray-200 active:text-red-800",
                                onClick: () => {
                                    _ || (Z(!0), (0, g.Z)("https://api.comick.io/comment/" + m.id, {
                                        method: "delete",
                                        credentials: "include"
                                    }).finally(() => {
                                        N.invalidateQueries({
                                            queryKey: ["query_comments"]
                                        }), w(!1), Z(!1)
                                    }))
                                },
                                children: "Delete"
                            }), (0, a.jsx)("button", {
                                className: "w-full h-full text-center text-xl py-3  active:text-red-800",
                                onClick: () => {
                                    navigator.clipboard.writeText(m.content), w(!1), A.ZP.success("Copied to clipboard")
                                },
                                children: "Copy"
                            })]
                        })
                    }) : null, (0, a.jsxs)("div", {
                        id: "comment-" + m.id,
                        className: (0, k.Z)("mb-1 target:bg-orange-100/50 target:dark:bg-orange-900/50", "" != window.location.hash && window.location.hash.substring(1) == "comment-" + m.id ? "bg-orange-100/50 dark:bg-orange-900/50" : ""),
                        children: [(0, a.jsxs)("div", {
                            className: (0, k.Z)("flex w-full items-start"),
                            children: [(0, a.jsx)("img", {
                                className: (0, k.Z)("rounded-full cursor-pointer ", f ? "h-6 w-6 md:h-8 md:w-8" : "h-8 w-8 md:h-10 md:w-10"),
                                loading: "lazy",
                                src: m.identities.traits.gravatar,
                                alt: "avatar",
                                onClick: () => b.push("/user/".concat(m.identities.id, "/list"))
                            }), (0, a.jsxs)("div", {
                                className: (0, k.Z)("ml-2 p-2 rounded-xl", "unapproved" == m.status ? "" : "bg-gray-50 dark:bg-gray-750"),
                                children: [(0, a.jsx)("div", {
                                    className: "flex items-center justify-between w-full ",
                                    children: (0, a.jsxs)("div", {
                                        className: (0, k.Z)("flex items-center", y("xl") ? "" : " select-none"),
                                        children: [(0, a.jsx)(P(), {
                                            href: "/user/".concat(m.identities.id, "/list"),
                                            prefetch: !1,
                                            className: (0, k.Z)("font-semibold link-effect", (null === (o = u.data.identity) || void 0 === o ? void 0 : o.id) == m.identities.id && "bg-yellow-500/20"),
                                            children: m.identities.traits.username
                                        }), (0, a.jsx)("a", {
                                            className: "text-xs ml-3 text-gray-600 dark:text-gray-450 hover:underline block ",
                                            href: "#comment-" + m.id,
                                            children: I()().to(m.created_at, !0)
                                        }), (0, a.jsx)("span", {
                                            className: "text-xs ml-3 text-gray-600 dark:text-gray-450",
                                            children: "toxicity" == m.attributes && "marked as toxicity"
                                        })]
                                    })
                                }), "unapproved" == m.status && (0, a.jsx)("div", {
                                    className: "my-2 text-red-600 dark:text-red-450",
                                    children: "\uD83E\uDD16: your comment is unapproval by AI."
                                }), (0, a.jsx)("div", {
                                    className: (0, k.Z)(" w-full"),
                                    children: (0, a.jsx)(K, {
                                        comment: m,
                                        replyTo: m.identities.traits.username,
                                        hidden: C
                                    })
                                })]
                            })]
                        }), "deleted" != m.attributes && (0, a.jsxs)("div", {
                            className: (0, k.Z)("flex items-center my-1 space-x-2 text-gray-400 dark:text-gray-500 font-semibold text-xs cursor-pointer pl-14", y("lg") ? "" : "select-none"),
                            children: [(0, a.jsx)(D.Z, {
                                commentId: m.id,
                                count: m.up_count - m.down_count,
                                downVoteEnabled: !(m.down_count - m.up_count > 6 && m.up_count / m.down_count < .3),
                                voted: (null == x ? void 0 : x.comments) && m.id in x.comments && x.comments[m.id] ? "vote_comment_up" == x.comments[m.id] ? "up" : "down" : ""
                            }), (0, a.jsx)("div", {
                                className: "pl-3",
                                onClick: e => {
                                    e.stopPropagation(), p(m.identities.traits.username, v)
                                },
                                children: "Reply"
                            }), (null === (d = u.data.identity) || void 0 === d ? void 0 : d.id) == m.identities.id ? y("lg") ? (0, a.jsx)(V.Z, {
                                id: m.id
                            }) : (0, a.jsx)(R.Z, {
                                className: "w-5 h-5 text-gray-500 stroke-2",
                                onClick: () => w(!0)
                            }) : null]
                        })]
                    })]
                }) : null
            }

            function K(e) {
                let {
                    comment: t,
                    replyTo: r,
                    hidden: s
                } = e;
                return "spoiler" == t.attributes ? (0, a.jsx)("p", {
                    className: "break-words text-gray-400 dark:text-gray-500",
                    children: "Spoiler comment was removed."
                }) : "deleted" == t.attributes ? (0, a.jsx)("p", {
                    className: "break-words text-gray-400 dark:text-gray-500",
                    children: "Comment deleted by user."
                }) : s ? (0, a.jsx)("p", {
                    className: "cursor-pointer text-gray-400 dark:text-gray-500",
                    children: "The comment was hidden."
                }) : (0, a.jsx)("p", {
                    ..."toxicity" == t.attributes ? {
                        title: "The comment was marked as toxicity"
                    } : {},
                    className: (0, k.Z)("break-words   ", "toxicity" == t.attributes ? "text-gray-400 dark:text-gray-500" : t.down_count > 3 && "text-gray-500 dark:text-gray-400"),
                    dangerouslySetInnerHTML: {
                        __html: r ? t.parsed.replace("@" + r, "<strong>@" + r.replace(/</g, "&lt;") + "</strong>") : t.parsed
                    }
                })
            }

            function G(e) {
                let {
                    next: t
                } = e, [r, s] = (0, l.useState)(!1);
                return (0, a.jsx)("div", {
                    className: "justify-end text-gray-600 dark:text-gray-400",
                    children: r ? (0, a.jsx)("span", {
                        className: "float-right",
                        children: "Loading..."
                    }) : t ? (0, a.jsxs)(P(), {
                        href: t,
                        className: "flex items-center float-right",
                        onClick: e => r ? e.preventDefault() : s(!0),
                        children: ["Next ", (0, a.jsx)(z.Z, {
                            className: "w-6 h-6"
                        })]
                    }) : (0, a.jsxs)(P(), {
                        href: "/home2",
                        className: "flex items-center float-right ",
                        children: ["Home ", (0, a.jsx)(L.Z, {
                            className: "ml-2 w-5 h-6"
                        })]
                    })
                })
            }
            I().extend(E(), {
                rounding: Math.floor
            })
        },
        20544: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = r(85893),
                s = r(67294),
                n = r(26554),
                l = r(65247),
                i = r(34744),
                c = r(76140),
                o = r(61012),
                d = r(86010),
                m = r(73383);

            function u(e) {
                let {
                    id: t
                } = e, r = (0, m.Z)(), u = (0, c.NL)();
                return (0, a.jsxs)(n.v2, {
                    as: "div",
                    className: "relative inline-block text-left",
                    children: [(0, a.jsx)(n.v2.Button, {
                        children: (0, a.jsx)(i.Z, {
                            className: "w-5 h-5 text-gray-500 z-10 "
                        })
                    }), (0, a.jsx)(l.u, {
                        as: s.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, a.jsx)(n.v2.Items, {
                            className: (0, d.Z)("absolute z-50 mt-2 py-2 px-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-750 dark:text-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-gray-500 dark:shadow-gray-900", r("lg") ? "left-0" : "right-0"),
                            children: (0, a.jsx)("div", {
                                className: "",
                                children: (0, a.jsx)(n.v2.Item, {
                                    children: e => {
                                        let {
                                            active: r
                                        } = e;
                                        return (0, a.jsx)("span", {
                                            className: function() {
                                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                                return t.filter(Boolean).join(" ")
                                            }(r ? "bg-gray-100 dark:bg-gray-700 " : "", "block px-4 py-2 text-sm rounded"),
                                            onClick: () => (0, o.Z)("https://api.comick.io/comment/" + t, {
                                                method: "delete",
                                                credentials: "include"
                                            }).finally(() => {
                                                u.invalidateQueries({
                                                    queryKey: ["query_comments"]
                                                })
                                            }),
                                            children: "Delete"
                                        })
                                    }
                                })
                            })
                        })
                    })]
                })
            }
        },
        45518: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = r(85893),
                s = r(24244),
                n = r(63231),
                l = r(73383),
                i = r(48583),
                c = r(59928),
                o = r(68452),
                d = r(67294),
                m = r(11163);

            function u(e) {
                let {
                    title: t
                } = e, r = (0, s.Z)(), u = (0, l.Z)(), h = (0, i.Dv)(o.LF), x = (0, i.b9)(o.dq), g = (0, m.useRouter)();
                return ((0, d.useEffect)(() => (x(!1), () => {
                    x(!0)
                }), [x]), h.data.identity) ? (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("h1", {
                        className: "text-center text-2xl",
                        children: t
                    }), (0, a.jsx)("div", {
                        className: "my-10 text-center text-lg",
                        children: "The comic may not be appropriate for all ages, or may not be appropriate for viewing at work."
                    }), (0, a.jsx)("div", {
                        className: "my-10 text-center text-lg",
                        children: "By clicking View Page, you affirm that you are at least 18 years old."
                    }), (0, a.jsx)("div", {
                        className: "w-full flex justify-center",
                        children: (0, a.jsxs)("div", {
                            className: "space-x-5",
                            children: [(0, a.jsx)(n.Z, {
                                size: u("xl") ? "2xl" : "xl",
                                onClick: () => {
                                    try {
                                        localStorage
                                    } catch (e) {
                                        alert("You need to enable cookies/localStorage to save this option.")
                                    }
                                    r.mutate({
                                        accept_erotic_content: !0
                                    })
                                },
                                children: "View Page"
                            }), (0, a.jsx)(n.Z, {
                                size: u("xl") ? "2xl" : "xl",
                                onClick: () => g.back(),
                                children: "Cancel"
                            })]
                        })
                    })]
                }) : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: "max-w-xl mx-auto mt-10",
                        children: (0, a.jsx)(c.Z, {
                            type: "warn",
                            children: "You must login to see this content."
                        })
                    })
                })
            }
        },
        17786: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = r(85893),
                s = r(67294);
            let n = !1;

            function l() {
                return (0, s.useEffect)(() => {
                    n = !0
                }, []), n && (0, a.jsxs)("div", {
                    className: "text-center p-4 py-12 ",
                    children: [(0, a.jsxs)("div", {
                        className: "inline-flex font-medium text-xl relative leading-none",
                        children: [(0, a.jsxs)("svg", {
                            className: "animate-spin -ml-1 mr-3 h-6 w-6 text-blue-500",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [(0, a.jsx)("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }), (0, a.jsx)("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })]
                        }), (0, a.jsx)("span", {
                            className: "inline-block align-top select-none",
                            children: "Loading"
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)("em", {
                            children: "It shouldn't take too long."
                        })
                    })]
                })
            }
        },
        42057: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = r(85893),
                s = r(2280),
                n = r(86010);

            function l(e) {
                let {
                    size: t = "md",
                    iconOnly: r = !1
                } = e;
                return r ? (0, a.jsx)(s.Z, {
                    className: (0, n.Z)("animate-spin text-blue-500", "md" == t ? "h-8 w-8" : "h-6 w-6")
                }) : (0, a.jsxs)("div", {
                    className: (0, n.Z)("inline-flex relative leading-none items-center text-center"),
                    children: [(0, a.jsx)(s.Z, {
                        className: (0, n.Z)("animate-spin text-blue-500", "md" == t ? "h-8 w-8" : "h-6 w-6")
                    }), !r && (0, a.jsx)("span", {
                        className: "inline-block align-top select-none",
                        children: "Loading"
                    })]
                })
            }
        },
        92501: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = r(85893),
                s = r(73639);

            function n(e) {
                let {
                    content: t
                } = e;
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(s.MN, {
                        remarkToRehypeOptions: {
                            allowDangerousHtml: !0
                        },
                        children: t
                    })
                })
            }
        },
        26749: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return m
                }
            });
            var a = r(85893),
                s = r(91094),
                n = r(7438),
                l = r(62682),
                i = r(67294),
                c = r(61012),
                o = r(76140),
                d = r(86010);

            function m(e) {
                let {
                    commentId: t = null,
                    chapterId: r = null,
                    voted: c = null,
                    count: m,
                    showDown: h = !0,
                    size: x = "md",
                    downVoteEnabled: g = !0
                } = e, p = (0, o.NL)(), [f, v] = (0, i.useState)(m), [y, b] = (0, i.useState)(c), [j, w] = (0, i.useState)(!1), {
                    requireAuth: N,
                    requireVerification: k
                } = (0, s.d)(), _ = "w-5 h-5 ";
                return "xl" == x && (_ = "w-12 h-12"), (0, a.jsxs)("div", {
                    className: "flex items-center " + ("xl" == x ? " text-xl" : ""),
                    children: [(0, a.jsx)(n.Z, {
                        className: (0, d.Z)(_, "cursor-pointer hover:text-blue-500 hover:brightness-200 active:brightness-200 active:animate-ping", "up" == y ? "text-blue-600  " : ""),
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), N() && k() && !j && ("down" == y ? (b("up"), v(f + 2)) : y ? "up" == y && (b(void 0), v(f - 1)) : (b("up"), v(f + 1)), w(!0), u("up", t, r, p).then(() => {
                                w(!1)
                            }))
                        }
                    }), 0 != f && (0, a.jsx)("div", {
                        className: "w-3 mx-2",
                        children: f > -8 ? f : "∞"
                    }), h ? (0, a.jsx)(l.Z, {
                        className: (0, d.Z)(_, "ml-2 cursor-pointer hover:text-blue-500 hover:brightness-200 active:brightness-200  active:animate-ping", "down" == y ? "text-blue-600" : ""),
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), N() && g && k() && !j && ("up" == y ? (b("down"), v(f - 2)) : y ? "down" == y && (b(void 0), v(f + 1)) : (b("down"), v(f - 1)), w(!0), u("down", t, r, p).then(() => {
                                w(!1)
                            }))
                        }
                    }) : null]
                })
            }

            function u(e, t, r, a) {
                let s = new URL("https://api.comick.io/reaction");
                return (0, c.Z)(s.href, {
                    credentials: "include",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        action: e,
                        ...t ? {
                            comment_id: t
                        } : {},
                        ...r ? {
                            chapter_id: r
                        } : {}
                    }),
                    method: "POST"
                })
            }
        },
        75561: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = r(85893),
                s = r(67294);

            function n(e) {
                let {
                    publishAt: t
                } = e, [r, n] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    let e;

                    function r() {
                        let r = (+new Date(t) - +new Date) / 1e3,
                            s = Math.floor(r / 60 / 60),
                            i = Math.floor((r - 3600 * s) / 60);
                        n((0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "hours",
                                children: l(s)
                            }), (0, a.jsx)("span", {
                                className: "divider",
                                children: ":"
                            }), (0, a.jsx)("span", {
                                className: "minutes",
                                children: l(i)
                            }), (0, a.jsx)("span", {
                                className: "divider",
                                children: ":"
                            }), (0, a.jsx)("span", {
                                className: "seconds",
                                children: l(Math.floor(r - 3600 * s - 60 * i))
                            })]
                        })), r <= 0 && clearInterval(e)
                    }
                    return e = setInterval(r, 1e3), r(), () => clearInterval(e)
                }, []);
                let l = e => e.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: !1
                });
                return (0, a.jsx)("p", {
                    children: r
                })
            }
        },
        46810: function(e, t, r) {
            "use strict";

            function a(e) {
                switch (e) {
                    case 1:
                        return "Shounen";
                    case 2:
                        return "Shoujo";
                    case 3:
                        return "Seinen";
                    case 4:
                        return "Josei"
                }
                return "Unknown demographic"
            }

            function s(e) {
                switch (e) {
                    case 1:
                        return "\uD83D\uDCD6 Ongoing";
                    case 2:
                        return "\uD83D\uDCD7 Completed";
                    case 3:
                        return "Cancelled";
                    case 4:
                        return "Hiatus"
                }
                return "Unknown status"
            }

            function n(e) {
                switch (e) {
                    case "kr":
                        return "Manhwa";
                    case "jp":
                        return "Manga";
                    case "cn":
                        return "Manhua"
                }
                return "Comic"
            }
            r.d(t, {
                dz: function() {
                    return s
                },
                gj: function() {
                    return n
                },
                mv: function() {
                    return a
                }
            })
        },
        96169: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = r(27484),
                s = r.n(a),
                n = r(67294);

            function l(e) {
                let {
                    publishAt: t
                } = e, [r, a] = (0, n.useState)(!1), [l, i] = (0, n.useState)(t);
                return (0, n.useEffect)(() => {
                    i(t)
                }, [t]), (0, n.useEffect)(() => {
                    let e;

                    function t() {
                        s()().isBefore(s()(l)) ? r || a(!0) : (a(!1), clearInterval(e))
                    }
                    return l && (e = setInterval(t, 1e3), t()), () => {
                        l && clearInterval(e)
                    }
                }, [r, l]), r
            }
        },
        53147: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = r(85893),
                s = r(48583),
                n = r(68452),
                l = r(76140),
                i = r(61012),
                c = r(86501);

            function o() {
                let [e, t] = (0, s.KO)(n.nW), r = (0, s.Dv)(n.LF), o = (0, l.NL)();
                return s => {
                    let {
                        comicId: n,
                        nextId: l = null,
                        chapterId: d,
                        create: m = !1,
                        chap: u = null
                    } = s;
                    return new Promise(s => {
                        if (!r.data.identity || e === d) return s(!0);
                        let h = new URL("https://api.comick.io/last_read");
                        return t(d), (0, i.Z)(h.href, {
                            method: "POST",
                            credentials: "include",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                comicId: n,
                                nextId: l,
                                chapterId: d,
                                create: m
                            })
                        }).then(() => {
                            o.invalidateQueries({
                                queryKey: ["get_following_comics_or_by_id"]
                            }), o.invalidateQueries({
                                queryKey: ["get_follow_by_user"]
                            }), o.invalidateQueries({
                                queryKey: ["following_chapters"]
                            }), o.invalidateQueries({
                                queryKey: ["current_user_list"]
                            }), o.invalidateQueries({
                                queryKey: ["comic_ids_current_user_list"]
                            }), u && c.ZP.success((0, a.jsxs)("span", {
                                children: ["Marked ", (0, a.jsx)("strong", {
                                    children: u
                                }), " as last read"]
                            })), s(!0)
                        }).catch(e => {
                            e.message ? c.ZP.error("An error occurred while bookmarking this chapter: " + e.message) : c.ZP.error("Can not bookmark the chapter.")
                        })
                    })
                }
            }
        },
        46653: function(e, t, r) {
            "use strict";

            function a(e) {
                return new Promise(t => {
                    if (document.querySelector(e)) return t(document.querySelector(e));
                    let r = new MutationObserver(() => {
                        document.querySelector(e) && (t(document.querySelector(e)), r.disconnect())
                    });
                    r.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                })
            }
            r.d(t, {
                Z: function() {
                    return a
                }
            })
        },
        2135: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return tx
                },
                default: function() {
                    return tg
                }
            });
            var a = r(85893),
                s = r(11163),
                n = r(17786),
                l = r(9008),
                i = r.n(l),
                c = r(56982),
                o = r(41664),
                d = r.n(o),
                m = r(50694),
                u = r(11917),
                h = r(73383);

            function x(e) {
                var t, r;
                let {
                    chapter: s,
                    turnOn: n = !1,
                    hidden: l = !1,
                    setMinimize: i
                } = e, o = (0, h.Z)(), x = !1;
                o("xl") && (x = !0);
                let g = !n && x,
                    p = "";
                return l && (p = "hidden"), (0, a.jsx)("div", {
                    className: "w-full xl:container mx-auto select-none ".concat(p),
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center bg-gray-100 dark:bg-gray-700",
                        children: [(0, a.jsx)("div", {
                            className: "w-12 h-12 overflow-hidden",
                            children: (null == s ? void 0 : null === (r = s.md_comics) || void 0 === r ? void 0 : null === (t = r.md_covers) || void 0 === t ? void 0 : t.length) > 0 ? (0, a.jsx)(c.Z, {
                                src: s.md_comics.md_covers[0],
                                alt: s.md_comics.title,
                                type: "cover",
                                className: " object-cover w-12 h-12",
                                sizes: "(max-width: 480px) 20vw, (max-width: 1080px) 16vw, 6vw",
                                width: null,
                                height: null
                            }) : null
                        }), (0, a.jsx)(d(), {
                            href: "/comic/".concat(s.md_comics.slug),
                            className: "flex-1 pl-2 text-blue-700 dark:text-blue-400 font-semibold overflow-hidden text-sm md:text-base link py-2 truncate",
                            children: s.md_comics.title
                        }), n ? (0, a.jsx)("div", {
                            className: "w-12 h-12 overflow-y-hidden flex items-center bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 cursor-pointer",
                            onClick: () => window.scrollTo(0, 0),
                            children: (0, a.jsx)(m.Z, {
                                className: "w-7 h-7 mx-auto"
                            })
                        }) : null, g ? (0, a.jsx)("div", {
                            className: "w-12 h-12 overflow-y-hidden flex items-center hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer",
                            onClick: () => i(!0),
                            children: (0, a.jsx)(u.Z, {
                                className: "h-6 w-6 mx-auto dark:text-gray-400 text-gray-500"
                            })
                        }) : null]
                    })
                })
            }
            var g = r(5152),
                p = r.n(g),
                f = r(42057),
                v = r(1987),
                y = r(61012),
                b = r(26749),
                j = r(68452),
                w = r(48583);

            function N(e) {
                var t;
                let {
                    id: r,
                    upCount: s,
                    downCount: n
                } = e, {
                    data: l,
                    isFetching: i
                } = (t = (0, w.Dv)(j.LF), (0, v.a)({
                    queryKey: ["query_reaction", r],
                    queryFn: async () => {
                        let e = new URL("https://api.comick.io/reaction");
                        return r && e.searchParams.append("chapter_id", r), (0, y.Z)(e.href, {
                            credentials: "include",
                            mode: "cors"
                        })
                    },
                    enabled: !!r && !!t.data.identity,
                    placeholderData: (e, t) => e,
                    staleTime: 3e6
                }));
                return (0, a.jsx)(b.Z, {
                    ...(null == l ? void 0 : l.data) && {
                        voted: l.data
                    },
                    chapterId: r,
                    count: s - n,
                    size: "xl",
                    showDown: !1
                }, r + i)
            }
            var k = r(46977),
                _ = r(91994),
                Z = r(19461),
                C = r(9239),
                D = r(67294),
                S = r(81981),
                I = r(58923),
                F = r(80649),
                E = r(44325);

            function A(e) {
                var t;
                let {
                    chapterLangList: r,
                    dupGroupChapters: n,
                    chapters: l,
                    chapter: i,
                    type: c,
                    next: o = null,
                    prev: m = null,
                    checkVol2Chap1: u
                } = e, x = (0, h.Z)(), g = (0, s.useRouter)(), p = (0, D.useRef)(null), f = null === (t = i.md_comics.genres) || void 0 === t ? void 0 : t.includes(262);

                function v(e) {
                    let t, r, a;
                    for (let s of l) s.hid == e && (t = s.chap, r = s.lang, a = s.vol);
                    g.push((0, S.nb)({
                        slug: i.md_comics.slug,
                        hid: e,
                        chap: t,
                        lang: r,
                        vol: a
                    }))
                }

                function y(e) {
                    let t, r, a;
                    for (let s of n) s.hid == e && (t = s.chap, r = s.lang, a = s.vol);
                    g.push((0, S.nb)({
                        slug: i.md_comics.slug,
                        hid: e,
                        chap: t,
                        lang: r,
                        vol: a
                    }))
                }

                function b(e) {
                    let t;
                    for (let a of r)
                        if (a.lang == e) {
                            t = a;
                            break
                        } g.push((0, S.nb)({
                        slug: i.md_comics.slug,
                        hid: t.hid,
                        chap: i.chap,
                        lang: t.lang,
                        vol: t.vol
                    }))
                }
                return "small" == c ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("select", {
                        className: "flex-1 py-1 md:py-2 w-auto",
                        defaultValue: i.hid,
                        onChange: e => v(e.target.value),
                        children: l.map((e, t) => 1 != l.length && e.chap == p.current && e.chap ? null : (p.current = e.chap, (0, a.jsxs)("option", {
                            value: e.hid,
                            children: [u && e.vol ? "V".concat(e.vol, ", ") : " ", e.chap ? "Ch ".concat(e.chap) : e.vol ? "Vol  ".concat(e.vol) : e.title ? "".concat(e.title) : ""]
                        }, t)))
                    }, i.hid), (0, a.jsx)("select", {
                        className: "flex-1 ml-1 md:ml-3 rounded overflow-hidden py-1 md:py-2 xl:w-auto",
                        value: i.lang,
                        onChange: e => b(e.target.value),
                        children: r.map((e, t) => (0, a.jsx)("option", {
                            value: e.lang,
                            children: S.Qi[e.lang].nativeName
                        }, "select-language" + t + e.lang))
                    }), (0, a.jsx)("div", {
                        className: "flex-1 text-xs md:text-base ml-1 md:ml-3 text-center overflow-hidden",
                        children: (0, a.jsx)(T, {
                            chapter: i,
                            dupGroupChapters: n,
                            onChangeGroup: y
                        })
                    }), (0, a.jsx)("time", {
                        dateTime: new Date(i.crawled_at ? i.crawled_at : i.created_at).toISOString(),
                        title: "Updated : " + new Date(i.crawled_at ? i.crawled_at : i.created_at).toISOString(),
                        className: "text-gray-500 dark:text-gray-400 max-md:hidden md:ml-3",
                        children: (0, a.jsx)(E.Z, {
                            datetime: i.crawled_at ? i.crawled_at : i.created_at
                        })
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "mt-3 pr-2 flex justify-between items-center space-x-1",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-400 dark:border-gray-500  rounded w-7/12",
                            children: [m ? (0, a.jsx)(d(), {
                                href: m.href,
                                scroll: !0,
                                className: "w-12 hover:bg-gray-200 dark:hover:bg-gray-600 h-10 flex items-center shrink-0",
                                children: (0, a.jsx)(I.Z, {
                                    className: "w-6 h-6 pr-1 cursor-pointer hover:text-gray-500 block m-auto shrink-0"
                                })
                            }) : (0, a.jsx)("a", {
                                className: "w-12",
                                children: (0, a.jsx)(I.Z, {
                                    className: "w-5 h-5 opacity-10 block m-auto"
                                })
                            }), (0, a.jsx)("select", {
                                className: " border-r border-l rounded-none border-gray-300 dark:border-gray-600 flex-1 ",
                                defaultValue: i.hid,
                                onChange: e => v(e.target.value),
                                children: f ? (0, a.jsx)("option", {
                                    children: "Oneshot"
                                }) : l.map((e, t) => {
                                    if (1 != l.length && e.chap == p.current && e.chap) return null;
                                    p.current = e.chap;
                                    let r = {
                                        vol: void 0,
                                        chap: void 0,
                                        title: void 0
                                    };
                                    return x("2xl"), u && e.vol && (r.vol = e.vol), e.chap ? r.chap = e.chap : e.vol ? r.vol = e.vol : e.title && (r.title = e.title), (0, a.jsxs)("option", {
                                        value: e.hid,
                                        children: [r.vol && "Vol " + r.vol, r.chap && r.vol ? ", " : "", r.chap ? x("2xl") ? "Ch " + r.chap : r.chap : "", r.vol || r.chap || !r.title ? "" : r.title]
                                    }, t)
                                })
                            }), o ? (0, a.jsx)(d(), {
                                href: o.href,
                                scroll: !0,
                                className: "w-12 hover:bg-gray-200 dark:hover:bg-gray-600 h-10 flex items-center shrink-0",
                                children: (0, a.jsx)(F.Z, {
                                    className: "w-6 h-6 pl-1 cursor-pointer block m-auto"
                                })
                            }) : (0, a.jsx)("a", {
                                className: "w-12",
                                children: (0, a.jsx)(F.Z, {
                                    className: "w-5 h-5 opacity-10 pl-1 block m-auto shrink-0"
                                })
                            })]
                        }), (0, a.jsx)("select", {
                            className: "rounded border border-gray-400 dark:border-gray-500 dark:bg-gray-700 w-5/12 flex-none overflow-hidden ",
                            value: i.lang,
                            onChange: e => b(e.target.value),
                            children: r.map((e, t) => (0, a.jsx)("option", {
                                value: e.lang,
                                children: S.Qi[e.lang].nativeName
                            }, "select-language" + t + e.lang))
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex pr-2 mt-3 justify-between  items-start",
                        children: [(0, a.jsx)("div", {
                            className: "flex-none w-1/2",
                            children: (0, a.jsx)(R, {
                                chapter: i,
                                dupGroupChapters: n,
                                onChangeGroup: y
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex-grow flex flex-row-reverse  text-gray-400 dark:text-gray-500 text-sm",
                            children: (0, a.jsxs)("time", {
                                dateTime: new Date(i.crawled_at ? i.crawled_at : i.created_at).toISOString(),
                                title: new Date(i.crawled_at ? i.crawled_at : i.created_at).toISOString(),
                                children: ["Updated: ", (0, a.jsx)(E.Z, {
                                    datetime: i.crawled_at ? i.crawled_at : i.created_at,
                                    suffix: !0
                                })]
                            })
                        })]
                    })]
                })
            }

            function T(e) {
                let {
                    chapter: t,
                    dupGroupChapters: r,
                    onChangeGroup: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [r.length < 2 && t.group_name ? (0, a.jsx)("span", {
                        className: "shrink overflow-hidden whitespace-nowrap text-gray-500 dark:text-gray-400 ",
                        title: "Translation Groups",
                        children: t.group_name
                    }) : (0, a.jsx)(a.Fragment, {}), r.length > 1 && (0, a.jsx)("select", {
                        value: t.hid,
                        onChange: e => s(e.target.value),
                        className: "dark:bg-gray-700 text-base pl-2 pr-8 md:ml-1 rounded py-1 md:py-2",
                        children: r.map((e, t) => {
                            var r, s, n;
                            return (0, a.jsx)("option", {
                                value: e.hid,
                                children: (null === (n = e.md_chapters_groups) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : null === (r = s.md_groups) || void 0 === r ? void 0 : r.title) ? e.md_chapters_groups.map(e => e.md_groups.title).join(", ") : e.group_name ? e.group_name.join(", ") : "Unknown"
                            }, "group-chapter-" + t)
                        })
                    })]
                })
            }

            function R(e) {
                let {
                    chapter: t,
                    dupGroupChapters: r,
                    onChangeGroup: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex flex-row-reverse md:flex-row items-center overflow-hidden ",
                    children: [r.group_name ? (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        className: "pl-0 h-6 hidden md:inline",
                        width: "24",
                        height: "24",
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        })
                    }) : null, r.length < 2 && t.group_name ? (0, a.jsx)("span", {
                        className: "shrink whitespace-pre text-sm text-gray-500 dark:text-gray-400",
                        title: "Translation Groups",
                        children: t.group_name.join(", ")
                    }) : (0, a.jsx)(a.Fragment, {}), r.length > 1 && (0, a.jsx)("select", {
                        value: t.hid,
                        onChange: e => s(e.target.value),
                        className: "dark:bg-gray-700 border-gray-400 dark:border-gray-500 border pl-2 pr-8 rounded w-full",
                        children: r.map((e, t) => {
                            var r, s, n;
                            return (0, a.jsx)("option", {
                                value: e.hid,
                                children: (null === (n = e.md_chapters_groups) || void 0 === n ? void 0 : null === (s = n[0]) || void 0 === s ? void 0 : null === (r = s.md_groups) || void 0 === r ? void 0 : r.title) ? e.md_chapters_groups.map(e => e.md_groups.title).join(", ") : e.group_name ? e.group_name.join(", ") : "Unknown"
                            }, "group-chapter-" + t)
                        })
                    })]
                })
            }
            var z = r(42766);
            let L = p()(() => Promise.resolve().then(r.bind(r, 57036)), {
                loadableGenerated: {
                    webpack: () => [57036]
                },
                ssr: !1,
                loading: () => (0, a.jsx)(f.Z, {})
            });

            function M(e) {
                var t;
                let {
                    suggestRedirect: r,
                    suggestLangName: s,
                    prev: n,
                    next: l,
                    images: i,
                    chapter: c,
                    chapters: o,
                    chapterLangList: m,
                    dupGroupChapters: u,
                    chapTitle: g,
                    showAffilite: p,
                    checkVol2Chap1: f
                } = e, v = (0, h.Z)(), [y, b] = (0, w.KO)(j.P6), [D, S] = (0, w.KO)(j.AB);
                return ((0, k.y1)("f,r", (e, t) => {
                    if (v("lg")) switch (t.keys.join("")) {
                        case "f":
                            D ? S(!1) : S(!0);
                            break;
                        case "r":
                            y ? b(!1) : b(!0)
                    }
                }, {
                    keydown: !0
                }, [D, y]), !0 !== D && (v("2xl") || null !== D)) ? (0, a.jsx)("div", {
                    className: "info-reader-container relative flex-none",
                    children: (0, a.jsx)("div", {
                        className: "sticky top-0 max-h-screen",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col mx-0 pl-2 max-h-screen ",
                            children: [r ? (0, a.jsx)(d(), {
                                href: r,
                                className: "p-2 block",
                                children: (0, a.jsxs)("div", {
                                    className: "btn text-sm px-1",
                                    children: [(0, a.jsx)(C.Z, {
                                        className: "w-6 h-6 mr-2"
                                    }), (0, a.jsxs)("span", {
                                        children: ["Switch to ", (0, a.jsx)("span", {
                                            className: "font-bold",
                                            children: s
                                        }), " ", "version"]
                                    })]
                                })
                            }) : null, (0, a.jsx)("div", {
                                children: (0, a.jsx)(x, {
                                    chapter: c,
                                    setMinimize: S,
                                    hidden: !1
                                })
                            }), (0, a.jsx)(A, {
                                chapterLangList: m,
                                dupGroupChapters: u,
                                chapters: o,
                                chapter: c,
                                type: "large",
                                next: l,
                                prev: n,
                                checkVol2Chap1: f
                            }, c.hid), (0, a.jsx)("div", {
                                id: "mal-sync"
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mt-3 pr-2",
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsx)(N, {
                                        upCount: c.up_count,
                                        downCount: c.down_count,
                                        id: c.id
                                    })
                                }), (null === (t = c.md_images) || void 0 === t ? void 0 : t.length) > 0 && (0, a.jsxs)("div", {
                                    className: "text-gray-400 dark:text-gray-500 text-sm",
                                    children: [c.md_images.length, " images"]
                                })]
                            }), (0, a.jsx)("hr", {
                                className: "mt-3"
                            }), (0, a.jsx)("div", {
                                className: "mt-3 pt-1 pb-16 pr-2 w-full overflow-x-hidden overflow-y-auto myscrollbar ",
                                id: "comment-section",
                                children: (0, a.jsx)(z.SV, {
                                    fallback: (0, a.jsx)("p", {
                                        children: "An error has occurred"
                                    }),
                                    children: (0, a.jsx)(L, {
                                        chapterHid: c.hid,
                                        chapterId: c.id,
                                        isBlur: y,
                                        showAffilite: p,
                                        comicId: c.md_comics.id,
                                        lang: c.lang,
                                        chap: c.chap,
                                        checkVol2Chap1: f
                                    })
                                })
                            })]
                        })
                    })
                }) : (0, a.jsx)("div", {
                    className: "w-12 cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-600 fixed top-0 right-0 z-20 opacity-50",
                    onClick: () => S(!1),
                    children: (0, a.jsxs)("div", {
                        className: "w-12 overflow-y-hidden flex flex-col items-center hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer sticky top-0",
                        children: [(0, a.jsx)(_.Z, {
                            className: "h-6 w-6 my-3 mx-auto text-gray-500"
                        }), (0, a.jsx)(Z.Z, {
                            className: "h-6 w-6 mt-3 mx-auto text-gray-500"
                        }), (0, a.jsx)("div", {
                            className: "dark:text-gray-600 text-gray-400",
                            children: c.comment_count ? c.comment_count : ""
                        })]
                    })
                })
            }

            function P() {
                let e = (0, h.Z)();
                return (0, a.jsx)("div", {
                    className: "fixed top-2 left-0 xl:left-3 flex z-20 ",
                    children: (0, a.jsx)(d(), {
                        href: "/home2",
                        className: "rounded-full w-10 h-10 md:w-12 md:h-12 items-center text-center flex cursor-pointer " + (e("xl") ? "hover:opacity-100 opacity-40" : ""),
                        children: (0, a.jsx)("img", {
                            className: "self-center",
                            src: "/static/icons/unicorn-64.png",
                            alt: "logo",
                            width: "64",
                            height: "64"
                        })
                    })
                })
            }
            var B = r(34751),
                V = r(53147),
                O = r(76140),
                q = r(63749),
                H = r(11027);

            function U() {
                let e = (0, O.NL)(),
                    t = (0, w.Dv)(j.LF),
                    r = (0, w.Dv)(j.vt);
                return (0, q.D)({
                    mutationFn: e => !t.data.identity || r ? new Promise(t => {
                        t(e)
                    }) : (0, y.Z)("https://api.comick.io/user/history", {
                        mode: "cors",
                        body: JSON.stringify({
                            hid: e.hid
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        credentials: "include"
                    }).then(e => e),
                    onSuccess: (t, a) => {
                        e.setQueryData(["get_history_comics"], t => {
                            if (r) return [];
                            let s = void 0 === t ? [] : t;
                            try {
                                var n, l, i;
                                for (let e in t)(null === (l = t[e].md_comics) || void 0 === l ? void 0 : l.slug) == (null === (i = a.md_comics) || void 0 === i ? void 0 : i.slug) && s.splice(Number(e), 1);
                                (null === (n = a.md_comics) || void 0 === n ? void 0 : n.slug) && s.unshift({
                                    md_comics: {
                                        slug: a.md_comics.slug,
                                        title: a.md_comics.title,
                                        md_covers: a.md_comics.md_covers
                                    },
                                    chap: a.chap,
                                    vol: a.vol,
                                    hid: a.hid,
                                    lang: a.lang
                                }), s.length > 50 && s.pop(), e.invalidateQueries({
                                    queryKey: ["get_history_comics"]
                                })
                            } catch (e) {
                                H.v("variable", {
                                    variables: a,
                                    oldData: t
                                }), H.Tb(e)
                            }
                            return s
                        })
                    }
                })
            }
            var K = r(57036);

            function G(e) {
                let {
                    chapter: t,
                    chapters: r,
                    chapterLangList: s,
                    dupGroupChapters: n,
                    checkVol2Chap1: l
                } = e;
                return (0, a.jsx)("div", {
                    className: " p-1 md:p-3 w-full !bg-opacity-80 right-0 bg-gray-200 dark:bg-gray-700 text-sm md:text-base padding-safe-top",
                    children: (0, a.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center mt-1 space-x-5",
                            children: [(0, a.jsx)(d(), {
                                href: "/comic/" + t.md_comics.slug,
                                className: "rounded-full ml-3 w-8 h-8 md:w-12 md:h-12 items-center text-center flex cursor-pointer relative",
                                children: (0, a.jsx)(c.Z, {
                                    src: t.md_comics.md_covers[0],
                                    alt: t.md_comics.title,
                                    type: "cover",
                                    className: "object-cover w-8 h-8 md:w-12 md:h-12 rounded-full",
                                    sizes: "(max-width: 480px) 20vw, (max-width: 1080px) 16vw, 6vw"
                                })
                            }), (0, a.jsx)(A, {
                                chapterLangList: s,
                                dupGroupChapters: n,
                                chapters: r,
                                chapter: t,
                                type: "small",
                                checkVol2Chap1: l
                            })]
                        })
                    })
                })
            }
            var Y = r(24201),
                Q = r(37965),
                W = r(25899),
                J = r(86010),
                X = r(57296),
                $ = r(24244),
                ee = r(63231),
                et = r(85006),
                er = r(83271);

            function ea(e) {
                let {
                    title: t,
                    type: r = "mature"
                } = e, s = (0, $.Z)(), n = (0, w.Dv)(j.LF), [l, i] = (0, D.useState)(!0), c = (0, h.Z)(), [o, m] = (0, D.useState)(!1);
                return ((0, D.useEffect)(() => {
                    (0, er.zD)().then(e => e.detect()).then(e => {
                        e.bot && m(!0)
                    }).catch(e => console.error(e))
                }), "erotic" != r || n.data.identity || o) ? (0, a.jsx)(et.Z, {
                    open: l,
                    onClose: () => null,
                    title: t,
                    position: "center",
                    hideCloseBtn: !0,
                    children: (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("h1", {
                            className: "text-center text-2xl",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: "my-10 text-center text-lg",
                            children: "mature" == r ? "The Comic may not be appropriate for all ages, or may not be appropriate for viewing at work." : "The Comic that contain content that is explicit or graphic and is intended for adults only."
                        }), (0, a.jsx)("div", {
                            className: "my-10 text-center text-lg",
                            children: "mature" == r ? "By clicking View Page, you affirm that you are at least 13 years old." : "By clicking View Page, you affirm that you are at least 18 years old."
                        }), (0, a.jsx)("div", {
                            className: "w-full flex justify-center",
                            children: (0, a.jsxs)("div", {
                                className: "space-x-5",
                                children: [(0, a.jsx)(ee.Z, {
                                    size: c("xl") ? "2xl" : c("md") ? "xl" : "md",
                                    onClick: () => {
                                        try {
                                            localStorage
                                        } catch (e) {
                                            alert("You need to enable cookies/localStorage to save this option.")
                                        }
                                        s.mutate("mature" == r ? {
                                            accept_mature_content: !0
                                        } : {
                                            accept_erotic_content: !0
                                        }), i(!1)
                                    },
                                    className: "m-1",
                                    children: "View Page"
                                }), (0, a.jsx)(d(), {
                                    href: "/home2",
                                    children: (0, a.jsx)(ee.Z, {
                                        size: c("xl") ? "2xl" : c("md") ? "xl" : "md",
                                        className: "m-1",
                                        children: "Go Home"
                                    })
                                })]
                            })
                        })]
                    })
                }) : (0, a.jsx)("div", {
                    children: "You must login to see this content."
                })
            }
            var es = r(34155);

            function en(e) {
                let t, r, s, {
                        image: n,
                        chapter: l,
                        alt: i = null,
                        overwriteClassName: o = "",
                        minWidth: d = null,
                        maxWidth: m = null
                    } = e,
                    u = (0, h.Z)(),
                    x = (0, D.useRef)(void 0),
                    g = (0, w.Dv)(j.rf),
                    p = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    f = (0, D.useMemo)(() => {
                        if ("loading" in HTMLImageElement.prototype) return null;
                        let e = 2e3;
                        return window.matchMedia("screen and (min-width: 1920px)").matches ? e = 6e3 : window.matchMedia("screen and (min-width: 1280px)").matches ? e = 5e3 : window.matchMedia("screen and (min-width: 1024px)").matches ? e = 4e3 : window.matchMedia("screen and (min-width: 640px)").matches && (e = 3e3), n.h > 1300 && (e = Math.round(150 * e / 100)), n.h > 2e3 && (e = Math.round(200 * e / 100)), e
                    }, [n.h]),
                    v = {
                        width: null,
                        height: null,
                        fallback: null,
                        style: null
                    };
                if (n.gpurl && !n.b2key) n.gpurl.match(/siasky/) ? t = n.gpurl : (t = "https://lh3.googleusercontent.com/" + n.gpurl, v.width = n.w, v.height = n.h);
                else {
                    n.w && (v.width = n.w), n.h && (v.height = n.h);
                    let e = "mangadex.org" == l.server ? "images.comick.fun" : l.server;
                    if (n.b2key) {
                        if ("development" == es.env.NEXT_PUBLIC_NODE_ENV) t = "https://localcomick.s3.ap-southeast-1.amazonaws.com/" + n.b2key;
                        else {
                            let e, r;
                            [t, e, r] = (0, S.PN)(+new Date(l.created_at) > +new Date("2024-03-14 06:00:00") ? l.id : 1, n.b2key, n.optimized, n.w, n.h), v.width = e, v.height = r
                        }
                    } else t = l.chapter_id || (null == e ? void 0 : e.match(/mangadex/)) ? "https://" + e + "/data/" + l.hash + "/" + n.name : "https://" + e + "/" + l.hash + "/" + n.name
                }
                let y = {
                        className: "flex justify-center relative"
                    },
                    b = "intrinsic",
                    N = !1;
                return !d && p <= 640 ? (y.className = "m-auto block justify-center relative", b = "responsive") : u("sm") && d && n.w && d > n.w ? (y.className = "m-auto block justify-center relative", N = !0, s = d, b = "fill") : u("sm") && m && n.w && m < n.w && (y.className = "m-auto block justify-center relative", N = !0, s = m, b = "fill"), (0, a.jsx)("div", {
                    className: (0, J.Z)("overflow-auto select-none"),
                    ref: x,
                    children: (0, a.jsx)("div", {
                        style: N ? {
                            ...d ? {
                                width: "".concat(d, "px"),
                                position: "relative"
                            } : {},
                            ...m ? {
                                maxWidth: "".concat(m, "px")
                            } : {},
                            aspectRatio: String(s / (Number(s) / n.w * n.h))
                        } : {},
                        ...y,
                        children: (0, a.jsx)(c.Z, {
                            src: t,
                            alt: i,
                            isReader: !0,
                            fallbacks: r,
                            className: (0, J.Z)(o || " mx-auto select-none "),
                            ...v,
                            ...f ? {
                                lazyBoundary: f + "px"
                            } : {},
                            layout: b,
                            loading: "lazy",
                            ...g ? {
                                priority: !0
                            } : {}
                        })
                    })
                })
            }
            var el = r(5546),
                ei = r(8105),
                ec = r(42238);

            function eo(e) {
                let {
                    comicId: t,
                    defaultWidth: r
                } = e, [s, n] = (0, w.KO)(j.Zz), [l, i] = (0, D.useState)(!0), c = (0, ec.UAParser)();
                return (0, B.useScroll)(e => {
                    let {
                        xy: [, t],
                        lastOffset: r,
                        offset: a
                    } = e;
                    t > 1500 && i(!1)
                }, {
                    axis: "y",
                    target: window
                }), (0, a.jsxs)("div", {
                    className: (0, J.Z)("flex bg-opacity-50 p-", l ? "opacity-100" : "opacity-0", "transition-opacity duration-300"),
                    onMouseOver: () => {
                        i(!0)
                    },
                    onMouseLeave: () => {},
                    id: "zoom-btn",
                    children: [(0, a.jsx)("button", {
                        className: " text-2xl w-10 h-10 border z-20 rounded-l-md flex justify-center items-center dark:bg-gray-700 bg-gray-100 border-gray-200 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600",
                        onClick: () => {
                            var e;
                            (null == c ? void 0 : null === (e = c.browser) || void 0 === e ? void 0 : e.name) == "Firefox" && alert("Sorry, this feature is not supported on Firefox yet."), (null == s ? void 0 : s[t]) === void 0 && (s[t] = 100), n({
                                comicId: t,
                                value: s[t] - 5
                            })
                        },
                        children: (0, a.jsx)(el.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, a.jsxs)("div", {
                        className: (0, J.Z)("flex items-center text-sm h-10 w-12 px-2 border-t border-b dark:bg-gray-800 bg-white dark:border-gray-600 border-gray-200 select-none", (null == s ? void 0 : s[t]) < 100 && "text-orange-500", (null == s ? void 0 : s[t]) > 100 && "text-green-500"),
                        children: [(null == s ? void 0 : s[t]) ? s[t] : 100, "%"]
                    }), (0, a.jsx)("button", {
                        className: " text-2xl w-10 h-10 border rounded-r-md  flex justify-center dark:bg-gray-700 bg-gray-100 items-center border-gray-200 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600",
                        onClick: () => {
                            var e;
                            (null == c ? void 0 : null === (e = c.browser) || void 0 === e ? void 0 : e.name) == "Firefox" && alert("Sorry, this feature is not supported on Firefox yet."), (null == s ? void 0 : s[t]) === void 0 && (s[t] = 100), n({
                                comicId: t,
                                value: s[t] + 5
                            })
                        },
                        children: (0, a.jsx)(ei.Z, {
                            className: "w-4 h-4"
                        })
                    })]
                })
            }
            var ed = r(46653);

            function em(e) {
                let {
                    next: t,
                    prev: r,
                    nextHover: s
                } = e, [n, l] = (0, D.useState)(!1);
                return (0, ec.UAParser)().os, (0, D.useEffect)(() => {
                    l(!1)
                }, [t.href]), (0, a.jsx)(d(), {
                    href: t.href,
                    className: (0, J.Z)("relative grow-0 ".concat(r ? "w-8/12" : "w-full", " flex justify-center  h-28 md:h-32  xl:h-40 px-4 border-r leading-5  border-gray-600 select-none text-xl "), s ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"),
                    onClick: e => {
                        n ? e.preventDefault() : l(!0)
                    },
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: " select-none ",
                        children: n ? (0, a.jsx)("span", {
                            children: "Loading..."
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "absolute right-0 inset-y-0 flex items-center pr-3",
                                children: (0, a.jsx)(F.Z, {
                                    className: "w-8 h-8"
                                })
                            }), (0, a.jsx)("div", {
                                className: "font-medium select-none ",
                                children: "Next"
                            }), (0, a.jsx)("div", {
                                className: "text-xs text-gray-400 absolute left-1/2 -translate-x-1/2",
                                children: t.chap ? "Ch. ".concat(t.chap) : "Vol. ".concat(t.vol)
                            })]
                        })
                    })
                })
            }

            function eu(e) {
                let {
                    prev: t
                } = e, [r, s] = (0, D.useState)(!1), n = (0, ec.UAParser)().os;
                return (0, D.useEffect)(() => {
                    s(!1)
                }, [t.href]), "iOS" == n.name ? (0, a.jsx)("a", {
                    href: t.href,
                    className: "relative grow-0 w-4/12 flex justify-center  h-28 md:h-32  xl:h-40 px-4 leading-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border-gray-600 border-r select-none text-lg",
                    onClick: e => {
                        r ? e.preventDefault() : s(!0)
                    },
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: " select-none ",
                        children: r ? (0, a.jsx)("span", {
                            children: "Loading..."
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "absolute left-0 inset-y-0 flex items-center pl-3  select-none ",
                                children: (0, a.jsx)(I.Z, {
                                    className: "w-8 h-8"
                                })
                            }), (0, a.jsx)("span", {
                                className: "font-medium select-none ",
                                children: "Prev"
                            }), (0, a.jsx)("div", {
                                className: "text-xs text-gray-400 absolute left-1/2 -translate-x-1/2",
                                children: t.chap ? "Ch. ".concat(t.chap) : "Vol. ".concat(t.vol)
                            })]
                        })
                    })
                }) : (0, a.jsx)(d(), {
                    href: t.href,
                    className: "relative grow-0 w-4/12 flex justify-center  h-28 md:h-32  xl:h-40 px-4 leading-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border-gray-600 border-r select-none text-lg",
                    onClick: e => {
                        r ? e.preventDefault() : s(!0)
                    },
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: " select-none ",
                        children: r ? (0, a.jsx)("span", {
                            children: "Loading..."
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("span", {
                                className: "absolute left-0 inset-y-0 flex items-center pl-3  select-none ",
                                children: (0, a.jsx)(I.Z, {
                                    className: "w-8 h-8"
                                })
                            }), (0, a.jsx)("span", {
                                className: "font-medium select-none ",
                                children: "Prev"
                            }), (0, a.jsx)("div", {
                                className: "text-xs text-gray-400 absolute left-1/2 -translate-x-1/2",
                                children: t.chap ? "Ch. ".concat(t.chap) : "Vol. ".concat(t.vol)
                            })]
                        })
                    })
                })
            }
            var eh = r(39667),
                ex = r(24678),
                eg = r(54563);

            function ep(e) {
                let {
                    chapterHid: t,
                    readerContainerRef: r
                } = e, [s, n] = (0, D.useState)(0), [l, i] = (0, D.useState)(0), c = (0, D.useRef)(!0);
                (0, D.useEffect)(() => {
                    n(0)
                }, [t]);
                let o = (0, D.useRef)((0, eg.Z)(async (e, a) => {
                    try {
                        var s, n;
                        let l = null == r ? void 0 : null === (n = r.current) || void 0 === n ? void 0 : null === (s = n.getBoundingClientRect()) || void 0 === s ? void 0 : s.height;
                        95 * l / 100 < e[1] ? c.current && (0, ex.IV)("scrollY-" + t).then(() => c.current = !1).catch(e => {}) : (0, ex.Vx)("scrollY-" + t, () => ({
                            y: a,
                            p: Math.round(e[1] / l * 100)
                        })).then(() => c.current = !0).catch(e => {})
                    } catch (e) {}
                }, 200)).current;
                return (0, B.useScroll)(e => {
                    let {
                        xy: [, t],
                        offset: r
                    } = e;
                    o(r, t)
                }, {
                    axis: "y",
                    target: window
                }), (0, D.useEffect)(() => {
                    try {
                        (0, ex.U2)("scrollY-" + t).then(e => {
                            (null == e ? void 0 : e.y) && null != e.y && e.y > 3500 && (n(e.y), i(e.p))
                        }).catch(e => {})
                    } catch (e) {}
                }, [t]), s > 3500 ? (0, a.jsxs)("div", {
                    className: "h-14 text-center flex items-center justify-center cursor-pointer",
                    onClick: () => scrollTo({
                        top: s
                    }),
                    children: [(0, a.jsxs)("p", {
                        className: "font-semibold grow-0 text-orange-700 dark:text-orange-400",
                        children: ["Restore scroll position (", l, "%)"]
                    }), (0, a.jsx)(eh.Z, {
                        className: "w-8 h-8 ml-3 grow-0"
                    })]
                }) : null
            }

            function ef(e) {
                let {
                    pageLength: t
                } = e, r = (0, w.Dv)(j.nY);
                return (0, a.jsx)("div", {
                    className: "diagonal-fractions text-lg text-gray-500",
                    children: (0 == r ? 1 : r) + "/" + t
                })
            }
            var ev = r(2280);

            function ey() {
                return (0, a.jsx)("div", {
                    className: "rounded-full h-8 w-8 flex items-center justify-center bg-gray-50 dark:bg-gray-700 cursor-pointer dark:hover:bg-gray-600 !bg-opacity-70 z-10 active:animate-spin hover:animate-spin",
                    onClick: () => window.location.reload(),
                    children: (0, a.jsx)(ev.Z, {
                        className: "w-6 h-6"
                    })
                })
            }
            var eb = r(34744),
                ej = r(23309),
                ew = r(34828),
                eN = r(94934),
                ek = r(50008),
                e_ = r(70151),
                eZ = r(35270);

            function eC() {
                let e = (0, w.Dv)(j.LF);
                return "1page" == e.data.info.reader_mode ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("table", {
                        className: " mt-3 block table-auto",
                        children: (0, a.jsxs)("tbody", {
                            children: [(0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    className: "space-x-4",
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2  dark:border-gray-600",
                                        children: "<-"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2  dark:border-gray-600 px-1",
                                        children: "h"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2  dark:border-gray-600 px-1",
                                        children: "j"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "a"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "s"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "pagedown"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Previous page"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    className: "space-x-4",
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600",
                                        children: "->"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "l"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "k"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "w"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "d"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "pageup"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Next page"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300",
                                children: [(0, a.jsx)("td", {
                                    children: (0, a.jsx)("code", {
                                        className: "rounded border dark:border-gray-600 px-1",
                                        children: "f"
                                    })
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Toggle Sidebar"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300",
                                children: [(0, a.jsx)("td", {
                                    children: (0, a.jsx)("code", {
                                        className: "rounded border dark:border-gray-600 px-1",
                                        children: "r"
                                    })
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Reveal/hide comments"
                                    })
                                })]
                            })]
                        })
                    })
                }) : "scroll" != e.data.info.reader_mode && e.data.info.reader_mode ? void 0 : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("table", {
                        className: " mt-3 block table-auto",
                        children: (0, a.jsxs)("tbody", {
                            children: [(0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    className: "space-x-4",
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2  dark:border-gray-600 ",
                                        children: "<-"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "h"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Next chapter"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    className: "space-x-4",
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600",
                                        children: "->"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "l"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Previous chapter"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "j"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "s"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Scroll down"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300 space-x-1",
                                children: [(0, a.jsxs)("td", {
                                    children: [(0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "k"
                                    }), (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "w"
                                    })]
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Scroll up"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300",
                                children: [(0, a.jsx)("td", {
                                    children: (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "f"
                                    })
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Toggle Sidebar"
                                    })
                                })]
                            }), (0, a.jsxs)("tr", {
                                className: "text-black dark:text-gray-300",
                                children: [(0, a.jsx)("td", {
                                    children: (0, a.jsx)("code", {
                                        className: "rounded border-2 dark:border-gray-600 px-1",
                                        children: "r"
                                    })
                                }), (0, a.jsx)("td", {
                                    children: (0, a.jsx)("span", {
                                        className: "ml-2",
                                        children: "Reveal/hide comments"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var eD = r(26554),
                eS = r(65247);

            function eI(e) {
                let {
                    hid: t,
                    comicId: r,
                    nextId: s,
                    chapterId: n,
                    chap: l
                } = e, i = (0, h.Z)(), [c, o] = (0, D.useState)(!1), [d, m] = (0, D.useState)(!1), u = (0, w.Dv)(j.LF), x = (0, V.Z)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(eD.v2, {
                        as: "div",
                        className: "relative inline-block text-left",
                        children: [(0, a.jsx)(eD.j2, {
                            className: "p-2 rounded-full btn",
                            children: (0, a.jsx)(eb.Z, {
                                className: "w-7 h-7"
                            })
                        }), (0, a.jsx)(eS.u, {
                            as: D.Fragment,
                            enter: "transition ease-out duration-100",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: open && (0, a.jsxs)(eD.sd, {
                                anchor: "top end",
                                modal: !1,
                                className: "absolute z-10 py-2 px-2 w-44 origin-top-right rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-gray-500 dark:shadow-gray-900 divide-y divide-solid divide-slate-500",
                                children: [(0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: t
                                        } = e;
                                        return (0, a.jsxs)("span", {
                                            className: (0, J.Z)(t ? "bg-gray-100 dark:bg-gray-600 " : "", "py-2 text-sm rounded flex items-center cursor-pointer active:opacity-80"),
                                            onClick: e => {
                                                var t;
                                                (null === (t = u.data) || void 0 === t ? void 0 : t.info) ? x({
                                                    comicId: r,
                                                    nextId: s,
                                                    chapterId: n,
                                                    create: !0,
                                                    chap: l
                                                }): alert("An account is required to use this feature."), e.preventDefault()
                                            },
                                            children: [(0, a.jsx)(e_.Z, {
                                                className: "h-6 w-6 mr-1"
                                            }), " Mark as last read"]
                                        })
                                    }
                                }), (0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: r
                                        } = e;
                                        return (0, a.jsx)(eF, {
                                            active: r,
                                            hid: t
                                        })
                                    }
                                }), (0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: t
                                        } = e;
                                        return (0, a.jsxs)("span", {
                                            className: (0, J.Z)(t ? "bg-gray-100 dark:bg-gray-600 " : "", "py-2 text-sm rounded flex items-center cursor-pointer active:opacity-80"),
                                            onClick: e => {
                                                if (document.fullscreenElement) document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
                                                else {
                                                    let e = document.documentElement;
                                                    e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                                                }
                                                e.preventDefault()
                                            },
                                            children: [(0, a.jsx)(ej.Z, {
                                                className: "h-6 w-6 mr-1"
                                            }), " Fullscreen"]
                                        })
                                    }
                                }), i("xl") && (0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: t
                                        } = e;
                                        return (0, a.jsxs)("span", {
                                            className: (0, J.Z)(t ? "bg-gray-100 dark:bg-gray-600 " : "", "py-2 text-sm rounded flex items-center cursor-pointer active:opacity-80"),
                                            onClick: e => {
                                                c ? o(!1) : o(!0), e.preventDefault()
                                            },
                                            children: [(0, a.jsx)(ew.Z, {
                                                className: "h-6 w-6 mr-1"
                                            }), " FAQ"]
                                        })
                                    }
                                }), (0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: t
                                        } = e;
                                        return (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsxs)("span", {
                                                className: (0, J.Z)(t ? "bg-gray-100 dark:bg-gray-600 " : "", " py-2 text-sm rounded flex items-center cursor-pointer active:opacity-80"),
                                                onClick: e => {
                                                    m(!0), e.preventDefault()
                                                },
                                                children: [(0, a.jsx)(eN.Z, {
                                                    className: "h-6 w-6 mr-1"
                                                }), " Reader Settings"]
                                            })
                                        })
                                    }
                                })]
                            })
                        })]
                    }), c && (0, a.jsx)(et.Z, {
                        title: "Additional Info",
                        open: c,
                        onClose: () => o(!1),
                        children: (0, a.jsx)(eC, {})
                    }), d ? (0, a.jsx)(ek.Z, {
                        setShowModal: m,
                        showModal: d
                    }) : null]
                })
            }

            function eF(e) {
                let {
                    hid: t,
                    active: r
                } = e, s = (0, D.useRef)(null), n = () => {
                    s.current && s.current.handleClick()
                };
                return (0, a.jsx)("span", {
                    className: (0, J.Z)(r ? "bg-gray-100 dark:bg-gray-600 " : "", " py-2 text-sm rounded flex items-center cursor-pointer active:opacity-80"),
                    onClick: e => {
                        e.preventDefault(), n()
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex ",
                        children: [(0, a.jsx)(eZ.Z, {
                            hid: t,
                            ref: s
                        }), (0, a.jsx)("span", {
                            className: "ml-2",
                            children: "Download"
                        })]
                    })
                })
            }

            function eE(e) {
                let {
                    seoTitle: t,
                    seoDescription: r
                } = e;
                return (0, a.jsx)("div", {
                    id: "share-btn",
                    className: " rounded-full h-8 w-8 flex items-center justify-center bg-gray-50 dark:bg-gray-700 cursor-pointer dark:hover:bg-gray-600 !bg-opacity-70 pr-1 z-10",
                    onClick: () => void(navigator.share && navigator.share({
                        title: t,
                        text: "Read " + r + " on ComicK",
                        url: window.location.href
                    }).then(() => console.info("Successful share")).catch(e => console.error("Error sharing", e))),
                    children: (0, a.jsx)(Q.Z, {
                        className: "w-5 h-5"
                    })
                })
            }
            var eA = r(89899);

            function eT(e) {
                let {
                    hid: t,
                    imagesLength: r,
                    seoDescription: s,
                    seoTitle: n,
                    showPageNum: l = !0,
                    paddingSafeBottom: i = !1,
                    nextId: c,
                    chapterId: o,
                    chap: d,
                    comicId: m
                } = e, [u, x] = (0, D.useState)(!1), g = (0, w.Dv)(j.Uz), p = (0, h.Z)();
                return (0, a.jsxs)("div", {
                    id: "bottom-reader-settings",
                    className: (0, J.Z)("fixed z-10 transition-all duration-300 ease-in-out flex items-center right-2 gap-4", g ? "bottom-2" : "-bottom-24", i ? "padding-safe-bottom" : ""),
                    children: [l && !p("xl") ? (0, a.jsx)(ef, {
                        pageLength: r
                    }) : null, !p("xl") && (0, a.jsx)(ey, {}), !p("xl") && (0, a.jsx)("a", {
                        href: "#comments-container",
                        className: " rounded-full h-8 w-8 flex items-center justify-center bg-gray-50 dark:bg-gray-700 cursor-pointer dark:hover:bg-gray-600 !bg-opacity-70  z-10",
                        children: (0, a.jsx)(eA.Z, {
                            className: "w-5 h-5"
                        })
                    }), !p("xl") && (0, a.jsx)(eE, {
                        seoDescription: s,
                        seoTitle: n
                    }), p("xl") ? (0, a.jsx)(eI, {
                        hid: t,
                        chap: d,
                        chapterId: o,
                        comicId: m,
                        nextId: c
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: (0, J.Z)("rounded-full h-8 w-8 flex-none flex items-center justify-center bg-gray-50 dark:bg-gray-700 cursor-pointer dark:hover:bg-gray-600 !bg-opacity-70 z-30"),
                            onClick: () => {
                                x(!0)
                            },
                            children: (0, a.jsx)(eN.Z, {
                                className: "h-6 w-6"
                            })
                        }), u ? (0, a.jsx)(ek.Z, {
                            setShowModal: x,
                            showModal: u
                        }) : null]
                    })]
                })
            }
            var eR = r(71340);

            function ez(e) {
                let {
                    client: t,
                    slot: r,
                    className: s = "",
                    style: n = {
                        display: "block"
                    },
                    format: l = "auto",
                    fullWidthResponsive: i = "true",
                    pageLevelAds: c = !1,
                    ...o
                } = e;
                return (0, D.useEffect)(() => {
                    let e = {};
                    c && (e.google_ad_client = t, e.enable_page_level_ads = !0);
                    try {
                        (window.adsbygoogle = window.adsbygoogle || []).push(e)
                    } catch (e) {}
                }, []), (0, a.jsx)("ins", {
                    className: "adsbygoogle ".concat(s),
                    style: n,
                    "data-ad-client": t,
                    "data-ad-slot": r,
                    "data-ad-format": l,
                    "data-full-width-responsive": i,
                    ...o
                })
            }

            function eL(e) {
                let {
                    slot: t,
                    hid: r = "string"
                } = e, s = {
                    chapter_atf: {
                        slot: "4044131688",
                        format: "auto"
                    },
                    chapter_btf: {
                        format: "auto",
                        slot: "9287089193"
                    },
                    comic_atf: {
                        format: "auto",
                        slot: "8827408906"
                    },
                    comic_middle: {
                        format: "auto",
                        slot: "4888163893"
                    },
                    comic_btf: {
                        format: "auto",
                        slot: "6201245567"
                    }
                }, n = (0, w.Dv)(j.zS);
                if (!s) return null;
                let l = s[t];
                return "chapter_atf" == t ? (0, a.jsx)("div", {
                    align: "center",
                    className: (0, J.Z)(!n && " w-full max-md:pb-8 max-md:pt-2 md:my-16 xl:py-3 ", !n && "min-h-[122px]", "dark:bg-gray-750 bg-gray-50"),
                    id: "ads-top",
                    children: (0, a.jsx)(ez, {
                        client: "ca-pub-2303006588318827",
                        slot: l.slot,
                        format: l.format
                    }, "chapter-atf" + r)
                }) : "chapter_btf" == t ? (0, a.jsxs)("div", {
                    align: "center",
                    className: (0, J.Z)("my-32", !n && " dark:bg-gray-750 bg-gray-50"),
                    children: [!n && (0, a.jsx)("div", {
                        className: "text-center text-xs py-2",
                        children: "ADVERTISEMENT"
                    }), (0, a.jsx)(ez, {
                        client: "ca-pub-2303006588318827",
                        slot: l.slot,
                        format: l.format
                    }, "chapter-btf" + r)]
                }) : "comic_atf" == t ? (0, a.jsxs)("div", {
                    align: "center",
                    className: (0, J.Z)("w-full my-8 ", !n && "min-h-[232px] py-2 dark:bg-gray-750 bg-gray-50"),
                    children: [!n && (0, a.jsx)("div", {
                        className: "w-full text-center text-xs py-2",
                        children: "ADVERTISEMENT"
                    }), (0, a.jsx)(ez, {
                        client: "ca-pub-2303006588318827",
                        slot: l.slot,
                        format: l.format
                    }, "comic-atf" + r)]
                }) : "comic_middle" == t ? (0, a.jsx)("div", {
                    align: "center",
                    className: (0, J.Z)("my-6", "mx-auto dark:bg-gray-750 bg-gray-50"),
                    children: (0, a.jsx)(ez, {
                        client: "ca-pub-2303006588318827",
                        slot: l.slot
                    }, "comic-middle-" + r)
                }) : "comic_btf" == t ? (0, a.jsx)("div", {
                    className: "items-end ml-3 mt-[4.80em]",
                    children: (0, a.jsx)("div", {
                        className: "sticky top-0 w-[160px] h-[600px] ml-1",
                        children: (0, a.jsx)(ez, {
                            client: "ca-pub-2303006588318827",
                            slot: l.slot,
                            format: "vertical"
                        }, "ads-btf-bottom-" + r)
                    })
                }) : null
            }
            var eM = r(12171);

            function eP(e) {
                let {
                    hid: t,
                    position: r,
                    suggestive: s = !1
                } = e, n = (0, S.Lz)(t, 1, 10), l = "top" == r || n < 5.5;
                s = !1;
                let i = (0, D.useRef)(null);
                return ["Asia/Kolkata", "Asia/Manila", "Asia/Dhaka", "Asia/Karachi", "Asia/Jakarta", "Asia/Makassar", "Asia/Jayapura", "Asia/Shanghai", "Asia/Singapore"].includes(Intl.DateTimeFormat().resolvedOptions().timeZone) && (i.current = !0), l && !s || !0 == i.current ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eR.Z, {}), (0, a.jsx)("div", {
                        children: (0, a.jsx)(eL, {
                            slot: "top" == r ? "chapter_atf" : "chapter_btf",
                            hid: t
                        })
                    })]
                }) : (0, a.jsx)(eM.Z, {
                    zoneId: "top" == r ? 8709 : 8744,
                    position: r,
                    hid: t
                }, "top" == r ? "bidgear_top_" + t : "bidgear_bottom_" + t)
            }

            function eB(e) {
                var t, r;
                let {
                    images: s,
                    chapter: n
                } = e, l = (0, w.Dv)(j.LF), i = (0, w.Dv)(j.ir), c = (0, w.Dv)(j.eU), o = l.data.info.reader_remove_margin;
                return (null == n ? void 0 : null === (r = n.md_comics) || void 0 === r ? void 0 : null === (t = r.genres) || void 0 === t ? void 0 : t.includes(274)) && (o = !0), s.map((e, t) => (0, a.jsx)(D.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: (0, J.Z)("overflow-scroll remove-scroll-bar ", !o && "mb-1 md:mb-2", "suggestive" != n.md_comics.content_rating || l.data.info.accept_mature_content ? "" : "blur"),
                        id: "page".concat(t + 1),
                        children: [(0, a.jsx)("div", {
                            className: "text-gray-300 dark:text-gray-400 text-5xl md:text-9xl font-extrabold absolute left-1/2 -translate-x-1/2 px-3 py-1 -z-10",
                            children: t
                        }), (0, a.jsx)(en, {
                            alt: n.md_comics.title + " chapter " + n.chap + ", page " + t,
                            minWidth: i,
                            maxWidth: c,
                            image: e,
                            chapter: n
                        })]
                    }, "image" + n.id + t)
                }, "fragment" + n.hid + t))
            }
            var eV = function(e) {
                    let {
                        chapTitle: t,
                        images: r,
                        chapter: n,
                        chapters: l,
                        dupGroupChapters: i,
                        chapterLangList: c,
                        next: o,
                        prev: m,
                        seoTitle: u,
                        seoDescription: x,
                        checkVol2Chap1: g,
                        matureContent: p
                    } = e, f = (0, w.Dv)(j.LF), v = (0, w.Dv)(j._H), b = (0, w.Dv)(j.QF), _ = (0, w.Dv)(j.Zz), Z = (0, h.Z)(), C = (0, D.useRef)(0), I = (0, D.useRef)(null), F = (0, V.Z)(), A = (0, D.useRef)(0), T = U(), [R, L] = (0, D.useState)(!1), [M, P] = (0, D.useState)(!0), [O, q] = (0, w.KO)(j.P6), [H, $] = (0, w.KO)(j.T1), ee = (0, D.useRef)(null), et = (0, D.useRef)(null), er = (0, D.useRef)(null), es = (0, s.useRouter)(), en = (0, w.Dv)(j.nY), el = (0, w.b9)(j.Uz);
                    (0, D.useEffect)(() => {
                        en > 1 && (0, ed.Z)("#page".concat(en)).then(e => {
                            e.scrollIntoView()
                        })
                    }, [en]), (0, D.useEffect)(() => {
                        function e(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
                            window.innerHeight;
                            let r = 80 * window.innerHeight / 100;
                            (e.clientY < window.innerHeight / 2.5 || "left" === t) && (r = -r), scrollTo({
                                top: window.scrollY + r,
                                behavior: v ? "smooth" : "auto"
                            })
                        }
                        let t = I.current;

                        function r(r) {
                            b && r.clientX / t.clientWidth > .7 ? e(r, "right") : b && r.clientX / t.clientWidth < .3 ? e(r, "left") : Z("xl") || (H ? ($(!1), el(!1)) : ($(!0), el(!0)))
                        }
                        return t && t.addEventListener("click", r), () => {
                            t.removeEventListener("click", r)
                        }
                    }, [Z, b, $, el, H, v]), (0, D.useEffect)(() => {
                        q(!0), C.current = 0, A.current = 0, window.scrollTo(0, 0)
                    }, [n.hid, q]);
                    let ei = (0, w.Dv)(j.AB);
                    (0, k.y1)("right,left,l,h,j,k,w,d,s,a,down,up", function(e, t) {
                        if (Z("md")) switch (t.keys.join("")) {
                            case "l":
                            case "a":
                            case "right":
                                o && es.push(o.href);
                                break;
                            case "h":
                            case "d":
                            case "left":
                                m && es.push(m.href);
                                break;
                            case "j":
                            case "s":
                                window.scrollBy({
                                    top: .7 * window.innerHeight,
                                    behavior: "auto"
                                });
                                break;
                            case "k":
                            case "w":
                                window.scrollBy({
                                    top: -(.7 * window.innerHeight),
                                    behavior: "auto"
                                })
                        }
                    }, {
                        keydown: !0
                    }, [n]), (0, B.useScroll)(e => {
                        let {
                            xy: [, t],
                            lastOffset: r,
                            offset: a
                        } = e;
                        if (er.current && "getBoundingClientRect" in er.current) {
                            var s;
                            let e = window.innerHeight;
                            a[1] - r[1] > 50 && !Z("xl") && ($(!1), el(!1));
                            let l = er.current.getBoundingClientRect(),
                                i = l.y - e < 0 ? (-l.y + e) / l.height : 0,
                                c = null === (s = n.md_comics.md_covers) || void 0 === s ? void 0 : s[0],
                                d = o ? o.id : n.id;
                            if (i > .8 && C.current != d) {
                                if ((null == o ? void 0 : o.hid) && (0, y.Z)("https://api.comick.io/chapter/" + o.hid, {
                                        credentials: "include",
                                        mode: "cors"
                                    }), f.data.info) {
                                    let e = window.location.hash.substring(1);
                                    (void 0 === e || "" === e) && F({
                                        comicId: n.md_comics.id,
                                        nextId: d,
                                        chapterId: n.id
                                    })
                                }
                                C.current = d
                            }
                            if (i > .6 && A.current != n.md_comics.id && (null == c ? void 0 : c.w) && (null == c ? void 0 : c.b2key) && (T.mutate({
                                    md_comics: {
                                        title: n.md_comics.title,
                                        slug: n.md_comics.slug,
                                        md_covers: {
                                            b2key: n.md_comics.md_covers[0].b2key,
                                            h: n.md_comics.md_covers[0].h,
                                            w: n.md_comics.md_covers[0].w
                                        }
                                    },
                                    chap: n.chap,
                                    vol: n.vol,
                                    hid: n.hid,
                                    lang: n.lang
                                }), A.current = n.md_comics.id), !Z("xl") && ee.current && "getBoundingClientRect" in ee.current) {
                                let t = ee.current.getBoundingClientRect().y - e < 0;
                                t && M ? P(!1) : M || t || P(!0)
                            } else(t + e) / document.body.scrollHeight > .95 && O && q(!1)
                        }
                    }, {
                        axis: "y",
                        target: window
                    });
                    let ec = (0, D.useMemo)(() => r.map(e => e.h ? e.h : 800).reduce((e, t) => e + t, 0), [r]),
                        eh = !1;
                    if(true){
                        n.md_comics.content_rating = "safe"; //changes
                        console.log('thats where the things where changes');
                        console.log(n.md_comics.content_rating);
                    }
                    return (n.md_comics.genres.includes(320) || "erotica" == n.md_comics.content_rating || !n.adsense) && (eh = !0), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "xl:pt-0 w-full 5xl:w-auto z-0 relative",
                            children: [(!p || f.data.info.accept_mature_content) && (f.data.info.accept_erotic_content || "erotica" != n.md_comics.content_rating) ? null : (0, a.jsx)(ea, {
                                title: n.md_comics.title + (n.chap ? ", Chap: " + n.chap : ""),
                                type: p && !f.data.info.accept_mature_content ? "mature" : "erotic"
                            }), "erotica" == n.md_comics.content_rating ? (0, a.jsx)(X.default, {}, "alertBorderlineh" + n.hid) : null, Z("xl") ? (0, a.jsx)("div", {
                                className: "fixed z-30 bottom-10 left-7",
                                children: (0, a.jsx)(eo, {
                                    comicId: n.md_comics.id,
                                    defaultWidth: 1e3
                                })
                            }) : null, ei && Z("xl") ? (0, a.jsx)(G, {
                                chapter: n,
                                chapters: l,
                                dupGroupChapters: i,
                                chapterLangList: c,
                                checkVol2Chap1: g
                            }) : null, !Z("md") && (0, a.jsxs)("div", {
                                className: "flex justify-between my-1",
                                children: [(0, a.jsxs)("time", {
                                    dateTime: new Date(n.crawled_at ? n.crawled_at : n.created_at).toISOString(),
                                    title: new Date(n.crawled_at ? n.crawled_at : n.created_at).toISOString(),
                                    className: "text-gray-500 md:hidden ml-2 text-xs",
                                    children: ["Updated", " ", (0, a.jsx)(E.Z, {
                                        datetime: n.crawled_at ? n.crawled_at : n.created_at,
                                        suffix: !0
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "text-gray-500 md:hidden mr-2 text-xs",
                                    children: [null == r ? void 0 : r.length, " images"]
                                })]
                            }), t && (0, a.jsxs)("h1", {
                                className: "font-medium text-lg md:text-xl xl:text-2xl w-full text-center my-3 break-words",
                                children: [t, n.is_the_last_chapter && (0, a.jsx)("span", {
                                    className: "ml-3 text-xs",
                                    children: "END"
                                })]
                            }), (ec > 2e4 || r.length > 7) && !eh && Z("md") ? (0, a.jsx)(eP, {
                                hid: n.hid,
                                position: "top",
                                suggestive: "suggestive" == n.md_comics.content_rating
                            }) : null, (0, a.jsxs)("div", {
                                className: "reader-container m-auto",
                                style: {
                                    contain: "content"
                                },
                                ref: er,
                                children: [(0, a.jsxs)("div", {
                                    className: " min-h-screen relative overflow-hidden",
                                    children: [(0, a.jsx)(ep, {
                                        chapterHid: n.hid,
                                        readerContainerRef: er
                                    }), (0, a.jsxs)("div", {
                                        className: (0, J.Z)("relative"),
                                        style: {
                                            zoom: _[n.md_comics.id] + "%"
                                        },
                                        id: "images-reader-container",
                                        ref: I,
                                        children: [Z("xl") && o ? (0, a.jsx)("div", {
                                            className: "absolute w-1/3 right-0 bottom-0 h-[30em] z-20 cursor-e-resize",
                                            onClick: () => {
                                                es.push(o.href)
                                            },
                                            onMouseEnter: () => L(!0),
                                            onMouseLeave: () => L(!1)
                                        }) : null, (0, a.jsx)(eB, {
                                            images: r,
                                            chapter: n
                                        })]
                                    }), !eh && (0, a.jsx)(eP, {
                                        hid: n.hid,
                                        position: "bottom",
                                        suggestive: "suggestive" == n.md_comics.content_rating
                                    }), !o && (0, a.jsxs)("div", {
                                        className: "text-center",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-lg",
                                            children: "You are caught up!"
                                        }), (0, a.jsx)("p", {
                                            className: "text-lg",
                                            children: "You can check out similar manga in the recommendations section."
                                        }), (0, a.jsx)(d(), {
                                            href: "/comic/".concat(n.md_comics.slug, "#recommendations"),
                                            className: "link text-xl",
                                            children: "Recommendations"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        id: "comic-info-bottom",
                                        className: "m-3",
                                        children: [(0, a.jsx)("div", {
                                            className: "mb-2",
                                            children: n.md_comics.title
                                        }), (0, a.jsx)("div", {
                                            id: "hash-genre",
                                            className: "text-gray-500",
                                            children: n.md_comics.genres.map(e => [282, 281, 283, 274].includes(e) ? "" : S.R4[e].match(/sex/i) ? "" : "#" + S.R4[e]).join(" ")
                                        })]
                                    }), ei && Z("xl") ? (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)("div", {
                                            className: "flex items-center justify-center border-gray-100  dark:border-gray-700 absolute bottom-10 right-10 rounded-full border p-5 z-20",
                                            children: (0, a.jsx)(N, {
                                                upCount: n.up_count,
                                                downCount: n.down_count,
                                                id: n.id
                                            }, "reaction" + n.id)
                                        })
                                    }) : null]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    ref: et,
                                    children: [m ? (0, a.jsx)(eu, {
                                        prev: m
                                    }) : null, o ? (0, a.jsx)(em, {
                                        next: o,
                                        prev: m,
                                        nextHover: R
                                    }) : (0, a.jsx)(d(), {
                                        href: "/home2",
                                        className: "relative grow-0 ".concat(m ? "w-9/12" : "w-full", " flex justify-center h-28 md:h-32 xl:h-40 px-4 border-r leading-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 border-gray-600 select-none text-xl "),
                                        children: (0, a.jsx)("button", {
                                            type: "button",
                                            className: "select-none",
                                            children: (0, a.jsxs)("div", {
                                                className: "justify-items-center",
                                                children: [(0, a.jsx)(Y.Z, {
                                                    className: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 "
                                                }), (0, a.jsx)("div", {
                                                    className: "text-xs  absolute left-1/2 -translate-x-1/2",
                                                    children: "Home"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            }), ei && Z("xl") ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: "mt-3 pb-16 max-w-prose m-auto overflow-hidden",
                                    ref: ee,
                                    id: "comment-section",
                                    children: [(0, a.jsx)("h3", {
                                        className: "mt-20 mb-8",
                                        children: "Comments"
                                    }), (0, a.jsx)(z.SV, {
                                        fallback: (0, a.jsx)("p", {
                                            children: "An error has occurred"
                                        }),
                                        children: (0, a.jsx)(K.default, {
                                            chapterHid: n.hid,
                                            chapterId: n.id,
                                            lang: n.lang,
                                            chap: n.chap,
                                            comicId: n.md_comics.id,
                                            checkVol2Chap1: g,
                                            large: !0
                                        })
                                    })]
                                })
                            }) : null, (0, a.jsx)(eT, {
                                hid: n.hid,
                                seoDescription: x,
                                seoTitle: u,
                                imagesLength: n.md_images.length,
                                showPageNum: !1,
                                paddingSafeBottom: !0,
                                comicId: n.md_comics.id,
                                nextId: o ? o.id : n.id,
                                chapterId: n.id,
                                chap: n.chap
                            })]
                        }), Z("xl") ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
                                className: "py-3 my-2 px-1 flex justify-between border-gray-100 dark:border-gray-700",
                                children: [(0, a.jsx)(N, {
                                    upCount: n.up_count,
                                    downCount: n.down_count,
                                    id: n.id
                                }, "reaction" + n.id), (0, a.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [(0, a.jsx)("div", {
                                        className: "btn",
                                        onClick: () => void(navigator.share && navigator.share({
                                            title: u,
                                            text: u,
                                            url: window.location.href
                                        }).then(() => console.info("Successful share")).catch(e => console.error("Error sharing", e))),
                                        children: (0, a.jsx)(Q.Z, {
                                            className: "w-7 h-7"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "btn",
                                        onClick: () => scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth"
                                        }),
                                        children: (0, a.jsx)(W.Z, {
                                            className: "w-7 h-7"
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                id: "comment-section",
                                ref: ee,
                                className: "overflow-hidden",
                                children: (0, a.jsx)("div", {
                                    className: "mt-3 pb-36",
                                    children: (0, a.jsx)(z.SV, {
                                        fallback: (0, a.jsx)("p", {
                                            children: "An error has occurred"
                                        }),
                                        children: (0, a.jsx)(K.default, {
                                            chapterHid: n.hid,
                                            chapterId: n.id,
                                            lang: n.lang,
                                            chap: n.chap,
                                            comicId: n.md_comics.id,
                                            checkVol2Chap1: g,
                                            hiddenForm: M,
                                            ...o ? {
                                                next: o.href
                                            } : {}
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                eO = r(80314),
                eq = r(73139),
                eH = r(59928);

            function eU() {
                let e = (0, w.Dv)(j.LF),
                    t = (0, $.Z)();
                try {
                    if (e.data.info.accept_mature_content || "undefined" == typeof localStorage) return (0, a.jsx)(a.Fragment, {})
                } catch (e) {
                    return (0, a.jsx)(a.Fragment, {})
                }
                return (0, a.jsxs)("div", {
                    className: "xl:container mx-auto margin-safe-top",
                    children: [(0, a.jsx)(eH.Z, {
                        type: "warn",
                        children: (0, a.jsxs)("div", {
                            className: "md:ml-3",
                            children: ["The comic may not be appropriate for all ages, or may not be appropriate\n        for viewing at work.", (0, a.jsx)("div", {
                                children: "Please confirm you are over 18 to remove this banner:"
                            }), (0, a.jsxs)("div", {
                                className: "mt-2",
                                children: [(0, a.jsx)(ee.Z, {
                                    onClick: () => {
                                        t.mutate({
                                            accept_mature_content: !0
                                        })
                                    },
                                    className: "btn py-1 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-200",
                                    children: "Confirm"
                                }), (0, a.jsx)(d(), {
                                    href: "/home2",
                                    children: (0, a.jsx)(ee.Z, {
                                        className: "btn py-1 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-200 ml-3",
                                        children: "Go to home"
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: "my-2"
                    })]
                })
            }
            var eK = r(34155);

            function eG(e) {
                let t, r, s, {
                        image: n,
                        chapter: l,
                        page: i,
                        alt: o = null,
                        overwriteClassName: d = "",
                        limit: m = "width",
                        minWidth: u = null,
                        maxWidth: h = null
                    } = e,
                    x = (0, w.Dv)(j.nY),
                    g = (0, D.useRef)(void 0),
                    p = (0, w.Dv)(j.rw),
                    f = 2500;
                window.matchMedia("screen and (min-width: 1920px)").matches ? f = 6e3 : window.matchMedia("screen and (min-width: 1280px)").matches ? f = 5e3 : window.matchMedia("screen and (min-width: 1024px)").matches ? f = 4e3 : window.matchMedia("screen and (min-width: 768px)").matches && (f = 2500), n.h > 1300 && (f = Math.round(150 * f / 100)), n.h > 2e3 && (f = Math.round(200 * f / 100));
                let v = {
                    width: null,
                    height: null,
                    fallback: null,
                    style: null
                };
                if (n.gpurl && !n.b2key) n.gpurl.match(/siasky/) ? t = n.gpurl : (t = "https://lh3.googleusercontent.com/" + n.gpurl, v.width = n.w, v.height = n.h);
                else {
                    n.w && (v.width = n.w), n.h && (v.height = n.h);
                    let e = "mangadex.org" == l.server ? "images.comick.fun" : l.server;
                    if (n.b2key) {
                        if ("development" == eK.env.NEXT_PUBLIC_NODE_ENV) t = "https://p.comick.fun?url=https://localcomick.s3.ap-southeast-1.amazonaws.com/" + n.b2key;
                        else {
                            let e, r;
                            [t, e, r] = (0, S.PN)(+new Date(l.created_at) > +new Date("2024-03-14 06:00:00"), n.b2key, n.optimized, n.width, n.height), v.width = e, v.height = r
                        }
                    } else t = l.chapter_id || (null == e ? void 0 : e.match(/mangadex/)) ? "https://" + e + "/data/" + l.hash + "/" + n.name : "https://" + e + "/" + l.hash + "/" + n.name
                }
                let y = {
                        className: "m-auto flex justify-center relative"
                    },
                    b = "intrinsic",
                    N = !1;
                return u && n.w && u > n.w ? (N = !0, s = u, b = "fill") : h && n.w && h < n.w && (N = !0, s = h, b = "fill"), "height" == m && (y.className += " max-h-screen min-h-screen", b = "fill"), (0, a.jsx)("div", {
                    className: (0, J.Z)("overflow-auto select-none"),
                    ref: g,
                    children: (0, a.jsx)("div", {
                        style: N ? {
                            ...u ? {
                                width: "".concat(u, "px"),
                                position: "relative"
                            } : {},
                            ...h ? {
                                maxWidth: "".concat(h, "px")
                            } : {},
                            aspectRatio: String(s / (Number(s) / n.w * n.h))
                        } : {},
                        ...y,
                        children: (0, a.jsx)(c.Z, {
                            src: t,
                            alt: o,
                            isReader: !0,
                            fallbacks: r,
                            className: (0, J.Z)(d || " mx-auto select-none ", "height" == m ? "object-scale-down" : "", u || h ? "object-fill" : ""),
                            ...v,
                            lazyBoundary: f + "px",
                            objectFit: "height" == m ? "contain" : void 0,
                            layout: b,
                            type: "cover",
                            blurDataURL: p ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNklnArBwABYQDaV35i7wAAAABJRU5ErkJggg==" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkUikoBwAB1QEP5CGDDQAAAABJRU5ErkJggg==",
                            priority: x + 3 > i
                        })
                    })
                })
            }

            function eY(e) {
                var t;
                let {
                    images: r,
                    chapter: n,
                    next: l,
                    seoTitle: i,
                    seoDescription: c,
                    matureContent: o
                } = e, m = (0, w.Dv)(j.ir), x = (0, w.Dv)(j.eU), g = (0, w.Dv)(j.oY), p = (0, V.Z)(), f = (0, w.b9)(j.P6), v = (0, w.b9)(j.Rc);
                (0, D.useEffect)(() => {
                    f(!0), v(!0)
                }, [v, f]);
                let y = (0, w.Dv)(j.LF),
                    b = y.data.info.reader_limit,
                    N = y.data.info.reader_direction,
                    [Z, C] = (0, w.KO)(j.nY);
                Z == r.length - 1 && v(!1), (0, D.useEffect)(() => {
                    Z == r.length - 2 && f(!1)
                }, [r.length, Z, f]);
                let I = (0, h.Z)(),
                    F = (0, w.Dv)(j.c$),
                    E = (0, s.useRouter)();
                Z == r.length - 1 && p({
                    comicId: n.md_comics.id,
                    nextId: l ? l.id : n.id,
                    chapterId: n.id
                });
                let A = b;

                function T(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    "left" == N && N ? e > 1 && z(e - 1, t) : e < r.length ? z(e + 1, t) : l && E.replace(l.href)
                }

                function R(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    "left" == N && N ? e < r.length ? z(e + 1, t) : l && E.replace(l.href) : e > 1 && z(e - 1, t)
                }

                function z(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    C(e);
                    let r = document.getElementById("scrollTo");
                    "height" != A && null != r && r.getBoundingClientRect() && (t ? window.scrollTo(0, r.getBoundingClientRect().bottom + document.documentElement.scrollHeight) : window.scrollTo(0, r.getBoundingClientRect().top + document.documentElement.scrollTop))
                }
                "width" != b && (null === (t = r[Z]) || void 0 === t ? void 0 : t.h) && r[Z].h / r[Z].w > 1.8 && (A = "width");
                let L = (0, D.useRef)(0),
                    M = (0, D.useRef)(0);
                (0, k.y1)("right,left,l,h,j,k,a,w,s,d,down,up,pagedown,pageup", function(e, t) {
                    if (I("lg")) switch (t.keys.join("")) {
                        case "l":
                        case "d":
                        case "right":
                            T(Z);
                            break;
                        case "h":
                        case "a":
                        case "left":
                            R(Z);
                            break;
                        case "j":
                        case "s":
                            eW() ? Z < r.length ? z(Z + 1) : l && E.replace(l.href) : window.scrollBy({
                                top: .7 * window.innerHeight,
                                behavior: "smooth"
                            });
                            break;
                        case "k":
                        case "w":
                            eJ() ? Z > 1 && z(Z - 1, !0) : window.scrollBy({
                                top: -(.7 * window.innerHeight),
                                behavior: "smooth"
                            });
                            break;
                        case "up":
                            eJ() && (L.current++, L.current > 1 && Z >= 1 && (z(Z - 1, !0), L.current = 0), e.preventDefault());
                            break;
                        case "pageup":
                            eJ() && (Z > 1 && z(Z - 1, !0), e.preventDefault());
                            break;
                        case "down":
                            eW() && (M.current++, M.current > 1 && (Z < r.length ? (z(Z + 1), M.current = 0) : l && E.replace(l.href)), e.preventDefault());
                            break;
                        case "pagedown":
                            eW() && (Z < r.length ? (Z < r.length && z(Z + 1), e.preventDefault()) : l && E.replace(l.href))
                    }
                }, {
                    keyup: !0
                }, [n, Z]);
                let P = 0,
                    O = 0,
                    q = (0, B.useWheel)(e => {
                        !F && (eW() && 1 == e.direction[1] && ++P > 4 && Z < r.length && z(Z + 1), eJ() && -1 == e.direction[1] && ++O > 3 && Z > 1 && z(Z - 1, !0))
                    }, {
                        enabled: g
                    });
                if (Z > r.length) return (0, a.jsxs)("div", {
                    className: "flex justify-center items-center h-screen -my-28 w-full relative",
                    children: [eQ(r.length, I, Z, e => z(e)), (0, a.jsx)("div", {
                        children: (0, a.jsx)("div", {
                            className: "w-96 mx-auto",
                            children: l ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(d(), {
                                    href: l.href,
                                    replace: !0,
                                    className: "btn text-2xl py-3 cursor-pointer flex items-center",
                                    children: ["Read the Next Chapter", l.chap, " ", (0, a.jsx)(eO.Z, {
                                        className: "h-6 w-6 select-none"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "my-8 relative",
                                    children: [(0, a.jsx)("hr", {
                                        className: " border-gray-500 border-dashed overflow-visible"
                                    }), (0, a.jsx)("div", {
                                        className: "text-center -mt-3 font-semibold bg-white dark:bg-gray-800 w-10 mx-auto",
                                        children: "OR"
                                    })]
                                }), (0, a.jsx)("button", {
                                    className: "btn mx-auto",
                                    onClick: () => {
                                        z(1)
                                    },
                                    children: "Read again from page 1"
                                })]
                            }) : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)("h1", {
                                    children: "You are caught up!"
                                })
                            })
                        })
                    })]
                });
                let H = [];
                return H.push(r[Z + 1]), r[Z + 1] && H.push(r[Z + 1]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "xl:pt-0 w-full 5xl:w-auto relative",
                        ...q(),
                        children: [(0, a.jsx)("div", {
                            className: "absolute top-0 z-20 w-full",
                            children: o ? (0, a.jsx)(eU, {}) : null
                        }), I("xl") && (0, a.jsx)("div", {
                            className: "min-h-full absolute w-3/12 group left-1/3 z-10 select-none cursor-all-scroll disable-tap-highlight",
                            onClick: e => {
                                (0, S.V9)(e)
                            }
                        }), eQ(r.length, I, Z, e => z(e - 1)), (0, a.jsx)("div", {
                            className: "min-h-full absolute left-20  w-3/12 group z-10 select-none " + (Z > 1 ? "cursor-pointer" : ""),
                            onClick: () => {
                                R(Z)
                            },
                            children: Z == r.length && l && "left" == N ? (0, a.jsx)(_.Z, {
                                className: "sticky float-left cursor-pointer select-none pointer-events-none top-1/2 h-12 w-12 text-gray-300 group-hover:text-gray-400 dark:text-gray-700 dark:group-hover:text-gray-600"
                            }) : (0, a.jsx)(eq.Z, {
                                className: "sticky pointer-events-none select-none left-5 top-1/2  h-12 w-12 text-gray-300 group-hover:text-gray-400 dark:text-gray-700 dark:group-hover:text-gray-600 " + (Z > 1 ? " group-hover:block hover:block cursor-pointer" : "") + ("left" == N ? " " : " hidden")
                            })
                        }), (0, a.jsx)("div", {
                            className: "min-h-full absolute right-0 w-3/12 cursor-pointer group z-10 select-none",
                            onClick: () => {
                                T(Z)
                            },
                            children: Z == r.length && l && "left" != N ? (0, a.jsx)(u.Z, {
                                className: "sticky float-right cursor-pointer top-1/2 h-12 w-12 text-gray-300 group-hover:text-gray-400 dark:text-gray-700 dark:group-hover:text-gray-600"
                            }) : Z != r.length && (0, a.jsx)(eO.Z, {
                                className: "sticky float-right cursor-pointer top-1/2 h-12 w-12 text-gray-300 group-hover:text-gray-400 dark:text-gray-700 dark:group-hover:text-gray-600" + (Z > 1 ? " group-hover:block hover:block cursor-pointer" : "") + ("left" != N ? " " : " hidden")
                            })
                        }), (0, a.jsx)("div", {
                            className: "images-reader-container m-auto pointer-events-none select-none ",
                            children: (0, a.jsx)("div", {
                                className: " min-h-screen ",
                                id: "scrollTo",
                                children: [Z, Z + 1, Z + 2, Z - 1, Z - 2].map(e => r[e] ? (0, a.jsx)("div", {
                                    className: e != Z - 1 ? "!invisible absolute top-0 h-0 min-h-screen overflow-hidden " : " ",
                                    children: (0, a.jsx)(eG, {
                                        alt: n.md_comics.title + " chapter " + n.chap + ", page " + Z,
                                        minWidth: m,
                                        maxWidth: x,
                                        image: r[e],
                                        chapter: n,
                                        limit: A
                                    }, "image" + n.id + e)
                                }, "inviimage" + e) : null)
                            })
                        }), Z == r.length && (0, a.jsx)("div", {
                            className: (0, J.Z)("absolute text-center px-3 py-2 font-semibold rounded text-gray-200 bg-gray-500 dark:text-gray-700 dark:bg-gray-400 opacity-70 flex items-center", "left" == N ? " bottom-0 left-4" : " bottom-0 right-1 ", !l && "z-20"),
                            children: l ? (0, a.jsxs)(a.Fragment, {
                                children: ["left" == N && (0, a.jsx)(_.Z, {
                                    className: "ml-1 w-5 h-5 select-none"
                                }), "Next Chapter ", l.chap, " ", "left" != N && (0, a.jsx)(u.Z, {
                                    className: "ml-1 w-5 h-5 select-none"
                                })]
                            }) : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)(d(), {
                                    href: "/home2",
                                    className: "flex items-center ",
                                    children: [(0, a.jsx)(Y.Z, {
                                        className: "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 "
                                    }), "Home"]
                                })
                            })
                        })]
                    }), (0, a.jsx)(eT, {
                        hid: n.hid,
                        seoDescription: c,
                        seoTitle: i,
                        imagesLength: n.md_images.length,
                        comicId: n.md_comics.id,
                        nextId: l ? l.id : n.id,
                        chapterId: n.id,
                        chap: n.chap
                    })]
                })
            }

            function eQ(e, t, r, s) {
                return (0, a.jsx)("div", {
                    className: "w-20 left-0 top-0 fixed z-10 cursor-pointer min-h-screen max-h-screen grid grid-cols-1",
                    children: t("xl") ? Array.from({
                        length: e
                    }, (e, t) => t + 1).map(t => (0, a.jsxs)("div", {
                        className: "flex shrink group",
                        onMouseEnter: () => {
                            1 != t && document.getElementById("inav" + t).classList.remove("hidden")
                        },
                        onMouseLeave: () => {
                            1 != t && document.getElementById("inav" + t).classList.add("hidden")
                        },
                        children: [(0, a.jsx)("div", {
                            onClick: () => s(t + 1),
                            className: "w-1 xl:w-2 flex-0  group-hover:bg-gray-400  dark:group-hover:bg-gray-500 " + (r == t ? "bg-gray-500 dark:bg-gray-500" : " bg-gray-200 dark:bg-gray-700")
                        }), 1 != t ? (0, a.jsx)("div", {
                            id: "inav" + t,
                            className: "hidden group-hover:block pl-2 flex-1 group-hover:font-semibold items-center " + (e > 30 ? "text-xs" : ""),
                            onClick: () => s(t + 1),
                            children: t
                        }) : null]
                    }, "track" + t)) : null
                })
            }

            function eW() {
                return Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight
            }

            function eJ() {
                return 0 == Math.floor(window.scrollY)
            }
            var eX = r(8223),
                e$ = r(8419),
                e0 = r(86150),
                e1 = r(34155);

            function e2(e) {
                let t, r, {
                        image: s,
                        chapter: n,
                        alt: l = null,
                        loading: i = "lazy",
                        overwriteClassName: o = ""
                    } = e,
                    d = (0, D.useRef)(void 0),
                    m = 2500;
                window.matchMedia("screen and (min-width: 1280px)").matches ? m = 5e3 : window.matchMedia("screen and (min-width: 1024px)").matches ? m = 4e3 : window.matchMedia("screen and (min-width: 640px)").matches && (m = 2500), s.h > 1300 && (m = Math.round(150 * m / 100)), s.h > 2e3 && (m = Math.round(200 * m / 100));
                let u = {
                    width: null,
                    height: null,
                    fallback: null,
                    style: null
                };
                if (s.gpurl && !s.b2key) s.gpurl.match(/siasky/) ? t = s.gpurl : (t = "https://lh3.googleusercontent.com/" + s.gpurl, u.width = s.w, u.height = s.h);
                else {
                    s.w && (u.width = s.w), s.h && (u.height = s.h);
                    let e = "mangadex.org" == n.server ? "images.comick.fun" : n.server;
                    if (s.b2key) {
                        if ("development" == e1.env.NEXT_PUBLIC_NODE_ENV) t = "https://p.comick.fun?url=https://localcomick.s3.ap-southeast-1.amazonaws.com/" + s.b2key;
                        else {
                            let e, r;
                            [t, e, r] = (0, S.PN)(+new Date(n.created_at) > +new Date("2024-03-14 06:00:00"), s.b2key, s.optimized, s.w, s.h), u.width = e, u.height = r
                        }
                    } else t = n.chapter_id || (null == e ? void 0 : e.match(/mangadex/)) ? "https://" + e + "/data/" + n.hash + "/" + s.name : "https://" + e + "/" + n.hash + "/" + s.name
                }
                let h = (0, a.jsx)(c.Z, {
                    src: t,
                    alt: l,
                    loading: i,
                    isReader: !0,
                    fallbacks: r,
                    className: (0, J.Z)(o || " mx-auto select-none ", " object-contain w-full h-full max-h-screen "),
                    ...u,
                    lazyBoundary: m + "px",
                    objectFit: "contain",
                    layout: "intrinsic",
                    type: "cover"
                });
                return (0, a.jsx)("div", {
                    className: (0, J.Z)("select-none max-h-screen min-h-screen flex justify-center items-center relative touch-none"),
                    ref: d,
                    children: h
                })
            }
            var e5 = r(86501),
                e6 = r(34411);
            let e3 = p()(() => Promise.resolve().then(r.bind(r, 57036)), {
                loadableGenerated: {
                    webpack: () => [57036]
                },
                ssr: !1,
                loading: () => (0, a.jsx)(f.Z, {})
            });

            function e4(e) {
                let {
                    images: t,
                    chapter: r,
                    next: s,
                    checkVol2Chap1: n
                } = e, l = (0, w.Dv)(j.LF), i = (0, w.b9)(j.T1), c = l.data.info.reader_direction, o = (0, D.useRef)(null), d = (0, w.b9)(j.nY), m = window.location.hash.match(/#page=([0-9]+)$/), u = (0, D.useRef)(m && m[1] ? Number(m[1]) : 1), h = (0, D.useRef)(!0), x = (0, w.b9)(j.Uz), g = (0, D.useRef)(0), p = U(), f = (0, V.Z)(), v = (0, w.b9)(j.Fg), y = (0, D.useRef)(!1), b = (0, D.useRef)(0);
                return (0, D.useEffect)(() => {
                    let e = () => {
                            let e = document.getElementsByClassName("swiper-slide-next");
                            if (e.length > 0)
                                for (let t of e[0].getElementsByTagName("img")) t.setAttribute("loading", "eager")
                        },
                        a = e => {
                            try {
                                if (e.detail[0].activeIndex != t.length) {
                                    let t = (e.detail[1] instanceof PointerEvent ? e.detail[1].clientX : e.detail[1].changedTouches[0].clientX) / window.innerWidth;
                                    t < .15 ? "left" == c ? n.swiper.slideNext(0) : n.swiper.slidePrev(0) : t > .85 ? "left" == c ? n.swiper.slidePrev(0) : n.swiper.slideNext(0) : (b.current++, setTimeout(() => {
                                        1 === b.current && (!1 == h.current ? (i(!0), x(!0), h.current = !0) : (x(!1), i(!1), h.current = !1)), b.current = 0
                                    }, 300))
                                }
                            } catch (e) {
                                e5.ZP.error(e)
                            }
                        },
                        n = null;
                    return o.current && ((n = o.current).addEventListener("swipertap", a), n.addEventListener("swiperslidechange", e => {
                        let a = e.detail[0].activeIndex;
                        if (d(a + 1), t.length - a < 3 && a != t.length) {
                            var n;
                            let e = null === (n = r.md_comics.md_covers) || void 0 === n ? void 0 : n[0],
                                t = s ? s.id : r.id;
                            f({
                                comicId: r.md_comics.id,
                                nextId: t,
                                chapterId: r.id
                            }), g.current != r.md_comics.id && (null == e ? void 0 : e.w) && (null == e ? void 0 : e.b2key) && (p.mutate({
                                md_comics: {
                                    title: r.md_comics.title,
                                    slug: r.md_comics.slug,
                                    md_covers: r.md_comics.md_covers
                                },
                                chap: r.chap,
                                vol: r.vol,
                                hid: r.hid,
                                lang: r.lang
                            }), g.current = r.md_comics.id)
                        }
                        a == t.length ? (h.current && x(!1), h.current || i(!0), h.current = !0) : (h.current && x(!1), h.current && i(!1), h.current = !1), a != t.length - 1 || y.current ? a != t.length - 1 && y.current && (v(!1), y.current = !1) : (v(!0), y.current = !0)
                    }), n.addEventListener("swipertransitionend", e), h.current = !1, 1 != u.current && n.swiper.slideTo(u.current - 1, 0)), () => {
                        n && (n.removeEventListener("swipertap", a), n.removeEventListener("swiperslidechange", a), n.removeEventListener("swipertransitionend", e))
                    }
                }, []), (0, a.jsxs)("swiper-container", {
                    ref: o,
                    className: "chapter-reader-swiper",
                    zoom: !0,
                    autoHeight: !0,
                    keyboard: !0,
                    ..."left" == c ? {
                        dir: "rtl"
                    } : {},
                    on: {
                        tap: (e, r) => {
                            if (e.activeIndex != t.length) {
                                let t = r.clientX / window.innerWidth;
                                t < .2 ? "left" == c ? e.slideNext(0) : e.slidePrev(0) : t > .8 ? "left" == c ? e.slidePrev(0) : e.slideNext(0) : !1 == h.current ? (i(!0), x(!0), h.current = !0) : (x(!1), i(!1), h.current = !1)
                            }
                        }
                    },
                    children: [t.map((e, t) => (0, a.jsx)("swiper-slide", {
                        children: (0, a.jsxs)("div", {
                            className: "swiper-zoom-container chapter-reader-slide",
                            children: [(0, a.jsxs)("div", {
                                className: "text-gray-300 dark:text-gray-400 text-5xl md:text-9xl font-extrabold absolute left-1/2 -translate-x-1/2 px-3 py-1 -z-10",
                                children: [t, " LOADING"]
                            }), (0, a.jsx)(e2, {
                                alt: "page " + t,
                                image: e,
                                chapter: r,
                                loading: 0 == t || 1 == t || 2 == t || 3 == t ? "eager" : "lazy"
                            })]
                        })
                    }, t)), (0, a.jsx)(e8, {
                        chapter: r,
                        checkVol2Chap1: n,
                        images: t,
                        next: s,
                        readerDirection: c,
                        setShowNav: i,
                        swiperElRef: o
                    })]
                })
            }

            function e8(e) {
                let {
                    images: t,
                    chapter: r,
                    readerDirection: s,
                    checkVol2Chap1: n,
                    next: l,
                    swiperElRef: i,
                    setShowNav: c
                } = e;
                return (0, a.jsx)("swiper-slide", {
                    lazy: !0,
                    children: (0, a.jsxs)("div", {
                        className: "h-screen overflow-scroll",
                        style: {
                            direction: "ltr"
                        },
                        children: [(0, a.jsxs)("div", {
                            className: (0, J.Z)("h-[50vh] flex items-center animated-one-phone !touch-auto", "left" == s ? "flex-row-reverse" : ""),
                            children: [(0, a.jsx)("div", {
                                className: "w-1/3",
                                children: (0, a.jsxs)("button", {
                                    className: (0, J.Z)("text-base m-auto md:text-xl flex items-center py-4 w-46", "left" == s ? "ml-5 flex-row-reverse" : "mr-5"),
                                    onClick: () => {
                                        i.current.swiper.slidePrev()
                                    },
                                    children: ["left" == s ? (0, a.jsx)(F.Z, {
                                        className: "w-4 h-4 ml-2"
                                    }) : (0, a.jsx)(I.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }), "Back"]
                                })
                            }), (0, a.jsx)("div", {
                                className: (0, J.Z)("w-2/3", "left" == s ? "ml-5 flex-row-reverse" : "mr-5"),
                                children: l ? (0, a.jsxs)(d(), {
                                    href: l.href,
                                    replace: !0,
                                    className: (0, J.Z)("md:text-xl btn flex items-center py-4 w-52 font-medium mx-auto", "left" == s && "flex-row-reverse"),
                                    onClick: () => c(!1),
                                    children: ["Next Ch.", l.chap, "left" == s ? (0, a.jsx)(_.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }) : (0, a.jsx)(e0.Z, {
                                        className: "w-4 h-4 ml-2"
                                    })]
                                }) : (0, a.jsxs)("div", {
                                    className: "flex justify-center w-full",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-sm md:text-xl italic flex items-center",
                                        children: "You are caught up!"
                                    }), (0, a.jsx)(d(), {
                                        href: "/home2",
                                        onClick: () => c(!1),
                                        children: (0, a.jsx)(ee.Z, {
                                            className: "ml-2",
                                            children: "Home"
                                        })
                                    })]
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "!touch-auto pb-72",
                            children: (0, a.jsx)(z.SV, {
                                fallback: (0, a.jsx)("p", {
                                    children: "An error has occurred"
                                }),
                                children: (0, a.jsx)(e3, {
                                    chapterHid: r.hid,
                                    chapterId: r.id,
                                    comicId: r.md_comics.id,
                                    lang: r.lang,
                                    chap: r.chap,
                                    checkVol2Chap1: n
                                })
                            })
                        })]
                    })
                }, t.length)
            }

            function e7(e) {
                var t, r;
                let {
                    images: s,
                    chapter: n,
                    next: l,
                    seoTitle: i,
                    seoDescription: c,
                    checkVol2Chap1: o,
                    matureContent: d
                } = e, m = (0, w.Dv)(j.LF), u = (0, w.Dv)(j.Fg);
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("div", {
                        className: "absolute top-0 z-10",
                        children: d ? (0, a.jsx)(eU, {}) : null
                    }), (0, a.jsx)(e9, {
                        direction: m.data.info.reader_direction
                    }), (0, a.jsx)(e4, {
                        chapter: n,
                        checkVol2Chap1: o,
                        images: s,
                        next: l
                    }, null == m ? void 0 : null === (r = m.data) || void 0 === r ? void 0 : null === (t = r.info) || void 0 === t ? void 0 : t.reader_direction), (0, a.jsx)(eT, {
                        hid: n.hid,
                        seoDescription: c,
                        seoTitle: i,
                        imagesLength: n.md_images.length,
                        comicId: n.md_comics.id,
                        nextId: l ? l.id : n.id,
                        chapterId: n.id,
                        chap: n.chap
                    }), u && (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: "fixed left-2 bottom-1",
                            children: (0, a.jsx)(N, {
                                upCount: n.up_count,
                                downCount: n.down_count,
                                id: n.id
                            })
                        })
                    })]
                }, "onepagephone")
            }

            function e9(e) {
                let {
                    direction: t
                } = e, [r, s] = (0, D.useState)(!0);
                return (0, D.useEffect)(() => {
                    setTimeout(() => {
                        s(!1)
                    }, 1500), setTimeout(() => {
                        s(!0)
                    }, 2e3), setTimeout(() => {
                        s(!1)
                    }, 2500), setTimeout(() => {
                        s(!0)
                    }, 3e3), setTimeout(() => {
                        s(!1)
                    }, 3400)
                }, []), (0, a.jsx)("div", {
                    className: (0, J.Z)("w-10 h-10 top-1/2 -translate-y-1/2 absolute p-2 z-10 transition-all duration-500 ease-in-out pointer-events-none", "left" == t ? "left-10" : "right-10", r ? "opacity-100" : "opacity-0"),
                    id: "arrow-direction-guide",
                    children: "left" == t ? (0, a.jsx)(eX.Z, {
                        className: "w-10 h-10 text-gray-200 bg-gray-600 rounded-full p-2 z-10 opacity-90"
                    }) : (0, a.jsx)(e$.Z, {
                        className: "w-10 h-10 text-gray-200 bg-gray-600 rounded-full p-2 z-10 opacity-90"
                    })
                })
            }(0, e6.z2)();
            var te = r(2962),
                tt = r(87833),
                tr = r(62506);

            function ta(e) {
                let {
                    comicId: t,
                    nextId: r,
                    currentChapterId: s,
                    chapterHid: n
                } = e, l = (0, V.Z)(), [i, c] = (0, w.KO)(j.nW), [o, d] = (0, D.useState)(!1);
                return (0, D.useEffect)(() => {
                    d(!1)
                }, []), (0, a.jsxs)(eD.v2, {
                    as: "div",
                    className: "relative inline-block text-left",
                    children: [(0, a.jsx)(eD.j2, {
                        children: (0, a.jsx)(eb.Z, {
                            className: "w-10 h-10 md:w-12 md:h-12 rounded-full ml-3 cursor-pointer  mt-1"
                        })
                    }), (0, a.jsx)(eS.u, {
                        as: D.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, a.jsxs)(eD.sd, {
                            className: "absolute right-0 z-10 mt-2 py-2 px-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-750 dark:text-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-gray-500 dark:shadow-gray-900 divide-y divide-solid divide-slate-500",
                            children: [(0, a.jsx)(eD.sN, {
                                children: e => {
                                    let {
                                        active: n
                                    } = e;
                                    return (0, a.jsxs)("span", {
                                        className: (0, J.Z)(n ? "bg-gray-100 dark:bg-gray-700 " : "", "px-4 py-4 text-sm rounded flex items-center"),
                                        onClick: () => {
                                            d(!0), l({
                                                comicId: t,
                                                nextId: r,
                                                chapterId: s,
                                                create: !0
                                            }).then(() => {
                                                d(!1), c(s), e5.ZP.success("Marked as last read")
                                            })
                                        },
                                        children: [i == s ? (0, a.jsx)(tr.Z, {
                                            className: "text-blue-500 w-5 h-5 mr-1 stroke-2"
                                        }) : (0, a.jsx)(tr.Z, {
                                            className: "text-gray-500 w-5 h-5 mr-1 stroke-2"
                                        }), "Mark as last read"]
                                    })
                                }
                            }), (0, a.jsx)(eD.sN, {
                                children: e => {
                                    let {
                                        active: t,
                                        close: r
                                    } = e;
                                    return (0, a.jsx)("span", {
                                        onClick: e => e.preventDefault(),
                                        className: (0, J.Z)(t ? "bg-gray-100 dark:bg-gray-700 " : "", "px-4 py-4 text-sm rounded flex items-center space-x-2"),
                                        children: (0, a.jsx)(eZ.Z, {
                                            hid: n,
                                            showText: !0
                                        })
                                    })
                                }
                            })]
                        })
                    })]
                })
            }

            function ts(e) {
                var t;
                let {
                    chapter: r,
                    chapters: s,
                    chapterLangList: n,
                    dupGroupChapters: l,
                    modeReader: i,
                    next: o,
                    checkVol2Chap1: m
                } = e, [u, h] = (0, D.useState)(!1), [x, g] = (0, D.useState)("scroll" != i), p = (0, w.Dv)(j.T1);
                return (0, D.useEffect)(() => {
                    h(!1)
                }, []), (0, a.jsxs)("div", {
                    className: (0, J.Z)("scroll" == i ? "sticky" : "fixed", "p-1 md:p-3 w-full !bg-opacity-80 right-0 bg-gray-200 dark:bg-gray-700 text-sm md:text-base padding-safe-top z-10 ransition-all duration-700 ease-in-out", p ? "top-0" : "-top-40 "),
                    children: [u ? (0, a.jsx)(et.Z, {
                        open: u,
                        onClose: () => h(!1),
                        title: (0, a.jsx)("div", {
                            className: "ml-3",
                            children: "Login required"
                        }),
                        position: "middle",
                        desc: (0, a.jsxs)("div", {
                            className: "pl-3",
                            children: ["An account is required to comment.", " ", (0, a.jsx)("a", {
                                className: "font-semibold link",
                                href: (0, tt.Z)(),
                                rel: "nofollow",
                                children: "Sign in with your account."
                            })]
                        })
                    }) : null, (0, a.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [(0, a.jsx)(d(), {
                            href: "/home2",
                            className: "rounded-full w-9 h-9 md:w-12 md:h-12 items-center text-center flex cursor-pointer ",
                            children: (0, a.jsx)("img", {
                                className: "self-center",
                                src: "/static/icons/unicorn-64.png",
                                alt: "logo",
                                width: "64",
                                height: "64"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "font-bold",
                                onClick: () => x ? g(!1) : g(!0),
                                children: ["Chap ", r.chap]
                            }), (0, a.jsx)("div", {
                                className: "font-bold text-xs w-14 md:w-32 truncate ml-3",
                                onClick: () => x ? g(!1) : g(!0),
                                children: null === S.Qi || void 0 === S.Qi ? void 0 : null === (t = S.Qi[r.lang]) || void 0 === t ? void 0 : t.name
                            }), (0, a.jsx)(d(), {
                                href: "/comic/" + r.md_comics.slug,
                                className: "rounded-full ml-3 w-8 h-8 md:w-12 md:h-12 items-center text-center flex cursor-pointer relative",
                                children: (0, a.jsx)(c.Z, {
                                    src: r.md_comics.md_covers[0],
                                    alt: r.md_comics.title,
                                    className: "object-cover w-8 h-8 md:w-12 md:h-12 rounded-full",
                                    type: "cover",
                                    layout: "fill",
                                    sizes: "(max-width: 480px) 20vw, (max-width: 1080px) 16vw, 6vw"
                                })
                            }), (0, a.jsx)(ta, {
                                comicId: r.md_comics.id,
                                nextId: o ? o.id : r.id,
                                chapterHid: r.hid,
                                currentChapterId: r.id
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: "max-md:grid max-md:grid-cols-3 md:flex mt-2 md:mt-3 items-center ",
                        children: (0, a.jsx)(A, {
                            chapterLangList: n,
                            dupGroupChapters: l,
                            chapters: s,
                            chapter: r,
                            type: "small",
                            checkVol2Chap1: m
                        })
                    })]
                })
            }
            var tn = r(73345),
                tl = r(45518),
                ti = r(75561),
                tc = r(5277),
                to = r(49881),
                td = r(67565);

            function tm(e) {
                let {
                    publishAt: t,
                    groupName: r,
                    comicSlug: n,
                    externalUrl: l,
                    chapterId: i,
                    nextId: c,
                    comicId: o,
                    chap: m
                } = e, [u, x] = (0, D.useState)(!1), g = (0, h.Z)();
                (0, D.useEffect)(() => {
                    (0, er.zD)().then(e => e.detect()).then(e => {
                        e.bot && x(!0)
                    }).catch(e => console.error(e))
                });
                let p = (0, s.useRouter)();
                return (0, a.jsx)("div", {
                    className: "w-full top-1/2 translate-y-1/2 ",
                    children: (0, a.jsx)("div", {
                        className: "rounded-md bg-blue-50 dark:bg-blue-900 p-4 max-w-md md:mx-auto mx-3",
                        children: (0, a.jsxs)("div", {
                            className: "flex",
                            children: [(0, a.jsx)("div", {
                                className: "flex-shrink-0",
                                children: (0, a.jsx)(tc.Z, {
                                    className: "h-5 w-5 text-blue-400",
                                    "aria-hidden": "true"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "ml-3",
                                children: [(0, a.jsx)("h3", {
                                    className: "text-base font-medium text-blue-800 dark:text-blue-200",
                                    children: "Delayed Release"
                                }), (0, a.jsxs)("p", {
                                    className: "text-sm text-blue-700 dark:text-blue-300 mt-3",
                                    children: ["This chapter was released by ", (0, a.jsx)("strong", {
                                        children: r
                                    }), ". If you wish to read it soon, you can visit their website. The chapter will unlock on Comick in:"]
                                }), (0, a.jsx)("div", {
                                    className: "mt-2 text-xl text-blue-700 dark:text-blue-300 text-center -translate-x-4",
                                    children: (0, a.jsx)(ti.Z, {
                                        publishAt: t
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "mt-4 grid-cols-1 divide-y-2 gap-y-8 divide-blue-500",
                                    children: [(0, a.jsxs)("div", {
                                        className: "-mx-2 -my-1.5 flex flex-wrap justify-center px-7 py-5",
                                        children: [!u && (0, a.jsx)("a", {
                                            href: "https://" + l + "?utm_source=comick",
                                            target: "_blank",
                                            onClick: () => {
                                                try {
                                                    td.event({
                                                        action: "go_to_scanlator_website",
                                                        options: {
                                                            website: l
                                                        }
                                                    })
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                            },
                                            children: (0, a.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-md bg-blue-50 dark:bg-blue-600 px-2 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50 flex items-center",
                                                children: ["Go to their website", " ", (0, a.jsx)(to.Z, {
                                                    className: "w-4 h-4 ml-1"
                                                })]
                                            })
                                        }), (0, a.jsxs)("p", {
                                            className: "text-xs my-2 text-blue-800 dark:text-blue-200",
                                            children: ["Comick is not related to ", "https://" + l, ", the website may contain a lot of ads."]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "-mx-2 -my-1.5 flex justify-between px-7 py-5",
                                        children: [(0, a.jsx)(d(), {
                                            href: "/comic/" + n,
                                            children: (0, a.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-md bg-blue-50 dark:bg-blue-600 px-2 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50 flex items-center",
                                                children: ["Find previous chapters", " "]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "space-x-4 flex",
                                            children: [(0, a.jsx)("button", {
                                                type: "button",
                                                onClick: () => p.back(),
                                                className: "ml-3 rounded-md bg-blue-50 dark:bg-blue-600 px-2 py-1.5 text-sm font-medium text-blue-800  dark:text-blue-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50",
                                                children: "Back"
                                            }), g("xl") && (0, a.jsx)(tu, {
                                                chapterId: i,
                                                nextId: c,
                                                comicId: o,
                                                chap: m
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }

            function tu(e) {
                let {
                    chapterId: t,
                    nextId: r,
                    comicId: s,
                    chap: n
                } = e, l = (0, w.Dv)(j.LF), i = (0, V.Z)();
                return (0, a.jsx)(eD.v2, {
                    as: "div",
                    className: "relative inline-block text-left",
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(eD.j2, {
                            className: "rounded-md bg-blue-50 dark:bg-blue-600 px-2 py-1.5 text-sm font-medium text-blue-800  dark:text-blue-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50",
                            children: (0, a.jsx)(eb.Z, {
                                className: "w-5 h-5"
                            })
                        }), (0, a.jsx)(eS.u, {
                            as: D.Fragment,
                            enter: "transition ease-out duration-100",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: open && (0, a.jsx)(eD.sd, {
                                className: "absolute right-0 z-10 mt-2 py-2 px-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-750 dark:text-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-gray-500 dark:shadow-gray-900 divide-y divide-solid divide-slate-500",
                                children: (0, a.jsx)(eD.sN, {
                                    children: e => {
                                        let {
                                            active: c
                                        } = e;
                                        return (0, a.jsx)("span", {
                                            className: (0, J.Z)(c ? "bg-gray-100 dark:bg-gray-700 " : "", "px-4 py-2 text-sm rounded flex items-center cursor-pointer"),
                                            onClick: () => {
                                                var e;
                                                (null === (e = l.data) || void 0 === e ? void 0 : e.info) ? i({
                                                    comicId: s,
                                                    nextId: r,
                                                    chapterId: t,
                                                    create: !0,
                                                    chap: n
                                                }): alert("An account is required to use this feature.")
                                            },
                                            children: "Mark as last read"
                                        })
                                    }
                                })
                            })
                        })]
                    })
                })
            }
            var th = r(96169),
                tx = !0;

            function tg(e) {
                var t, r, l, c, o, d, m, u, x, g, p, b, N, k, _, Z, C, I, F, E, A, T, R, z, L, B, V, O, q;
                let H, U;
                let {
                    chapter: K,
                    prev: G,
                    next: Y,
                    chapters: Q,
                    seoTitle: W,
                    seoDescription: J,
                    chapterLangList: X,
                    canonical: $,
                    chapTitle: ee,
                    dupGroupChapters: et,
                    checkVol2Chap1: ea,
                    matureContent: es,
                    externalUrl: en
                } = e, el = (0, tn.Z)(), ei = (0, s.useRouter)(), [, ec] = (0, D.useState)(!1), eo = (0, th.Z)({
                    publishAt: null == K ? void 0 : K.publish_at
                }), ed = (0, D.useRef)(!!(null == K ? void 0 : K.publish_at) && new Date(null == K ? void 0 : K.publish_at) > new Date(null == K ? void 0 : K.created_at) && (null === (t = K.md_images) || void 0 === t ? void 0 : t.length) == 0), [em, eu] = (0, w.KO)((0, j.YQ)({
                    hid: null == K ? void 0 : K.hid
                }));
                (0, D.useEffect)(() => {
                    (null == em ? void 0 : em.isDelay) != eo && eu({
                        isDelay: eo
                    })
                }, [null == em ? void 0 : em.isDelay, eo, eu, null == K ? void 0 : K.hid]);
                let {
                    data: eh,
                    isFetching: ex,
                    isSuccess: eg
                } = (O = null == K ? void 0 : K.hid, q = ed.current, (0, v.a)({
                    queryKey: ["get-images", O],
                    queryFn: async () => (0, y.Z)("https://api.comick.io/chapter/" + O + "/get_images", {
                        credentials: "include",
                        mode: "cors"
                    }),
                    enabled: !eo && q,
                    staleTime: 3e5,
                    gcTime: 3e5
                }));
                (0, D.useEffect)(() => {
                    eg && (K.md_images = eh, ec(!0))
                }, [K, eh, eg]);
                let ep = (0, h.Z)(),
                    ef = (0, w.Dv)(j.LF),
                    [ev, ey] = (0, D.useState)(!1);
                (0, D.useEffect)(() => {
                    (0, er.zD)().then(e => e.detect()).then(e => {
                        e.bot && ey(!0)
                    }).catch(e => console.error(e))
                });
                let eb = K.md_images,
                    trap = K.md_comics.content_rating = "safe", //changes
                    ej = (0, D.useMemo)(() => eb.map(e => e.h ? e.h : 800).reduce((e, t) => e + t, 0), [eb]),
                    ew = !1;
                if(true){
                    console.log('pegou aqui novo script');
                    console.log(K.md_comics.content_rating);
                }
                if ((K.md_comics.genres.includes(320) || "erotica" == K.md_comics.content_rating || !K.adsense) && (ew = !0), ei.isFallback || !(null == K ? void 0 : K.md_comics)) return (0, a.jsx)(n.Z, {});
                let eN = !1;
                if (((null === (r = K.md_comics.links) || void 0 === r ? void 0 : r.engtl) || K.md_comics.noindex) && (eN = !0), (null === (c = K.md_comics.mu_comics) || void 0 === c ? void 0 : null === (l = c.mu_comic_publishers) || void 0 === l ? void 0 : l.length) > 0 && (null === (o = K.md_comics.mu_comics) || void 0 === o ? void 0 : o.mu_comic_publishers.some(e => ["kadokawa", "shueisha", "kodansha", "shogakukan", "viz", "00-shu-cream-pop", "houbunsha", "mag-garden"].includes(e.mu_publishers.slug))) && (eN = !0), "kr" == K.md_comics.country && (eN = !0), (null == K ? void 0 : K.md_comics.content_rating) == "erotica" && el && !ev && !(null === (d = ef.data.info) || void 0 === d ? void 0 : d.accept_erotic_content)) return (0, a.jsx)(tl.Z, {
                    title: K.md_comics.title
                });
                let ek = "scroll";
                if ((!K.md_comics.genres || 0 == K.md_comics.genres.length || (null === (m = K.md_comics.genres) || void 0 === m ? void 0 : m.length) > 0 && !K.md_comics.genres.includes(274)) && (ef.data.info.reader_mode || ef.data.info.reader_mode_sm) && (ep("xl") && "1page" == ef.data.info.reader_mode ? ek = "1page" : ep("xl") || "1page" != ef.data.info.reader_mode_sm || (ek = "1page")), (null === (x = ef.data.info) || void 0 === x ? void 0 : null === (u = x.language) || void 0 === u ? void 0 : u.indexOf(K.lang)) == -1 && (null === (L = ef.data.info) || void 0 === L ? void 0 : null === (z = L.language) || void 0 === z ? void 0 : z.indexOf(K.lang)) === -1)
                    for (let e of X)(null === (V = ef.data.info) || void 0 === V ? void 0 : null === (B = V.language) || void 0 === B ? void 0 : B.indexOf(e.lang)) !== -1 && (U = S.Qi[e.lang].name, H = "/comic/" + K.md_comics.slug + "/" + e.hid + "-chapter-" + K.chap + "-" + e.lang);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(ej > 2e4 || eb.length > 7) && !ew && "scroll" == ek && !ep("md") ? (0, a.jsx)(eP, {
                        hid: K.hid,
                        position: "top",
                        suggestive: "suggestive" == K.md_comics.content_rating
                    }) : null, "erotica" != K.md_comics.content_rating ? (0, a.jsx)(a.Fragment, {}) : null, (0, a.jsx)(te.PB, {
                        title: W,
                        noindex: eN,
                        description: J,
                        nofollow: !1,
                        canonical: $,
                        robotsProps: {
                            noimageindex: !0
                        },
                        openGraph: {
                            type: "book",
                            url: $,
                            title: W,
                            description: J,
                            ...(null === (p = K.md_comics.md_covers) || void 0 === p ? void 0 : null === (g = p[0]) || void 0 === g ? void 0 : g.b2key) && (null === (N = K.md_comics.md_covers) || void 0 === N ? void 0 : null === (b = N[0]) || void 0 === b ? void 0 : b.w) ? {
                                images: [{
                                    url: "https://meo.comick.pictures/" + (null === (_ = K.md_comics.md_covers) || void 0 === _ ? void 0 : null === (k = _[0]) || void 0 === k ? void 0 : k.b2key),
                                    alt: "".concat(W, " image cover"),
                                    width: null === (C = K.md_comics.md_covers) || void 0 === C ? void 0 : null === (Z = C[0]) || void 0 === Z ? void 0 : Z.w,
                                    height: null === (F = K.md_comics.md_covers) || void 0 === F ? void 0 : null === (I = F[0]) || void 0 === I ? void 0 : I.h
                                }]
                            } : {}
                        }
                    }), (0, a.jsxs)(i(), {
                        children: [(0, a.jsx)("meta", {
                            name: "description",
                            content: J
                        }), (0, a.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, a.jsx)("meta", {
                            property: "og:title",
                            content: W
                        }), (0, a.jsx)("meta", {
                            property: "og:description",
                            content: J
                        }), (0, a.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), (0, a.jsx)("meta", {
                            property: "twitter:title",
                            content: W
                        }), (0, a.jsx)("meta", {
                            property: "twitter:description",
                            content: J
                        })]
                    }), (0, a.jsx)("script", {
                        id: "__MALSYNC__",
                        type: "application/json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify({
                                id: K.id,
                                title: K.title,
                                vol: K.vol,
                                chap: K.chap,
                                selector_position: "#mal-sync",
                                links: K.md_comics.links,
                                comic_url: "https://comick.io/comic/" + K.md_comics.slug,
                                md_comic: {
                                    links: K.md_comics.links,
                                    id: K.md_comics.id,
                                    title: K.md_comics.title
                                }
                            }))
                        }
                    }, "script-chapter-".concat(K.id)), el && ep("xl") ? (0, a.jsx)(P, {}) : null, (0, a.jsxs)("div", {
                        className: "flex flex-col xl:flex-row-reverse justify-between 5xl:justify-center relative ",
                        children: [el && ep("xl") ? (0, a.jsx)(M, {
                            suggestRedirect: H,
                            suggestLangName: U,
                            prev: G,
                            next: Y,
                            images: eb,
                            chapter: K,
                            chapters: Q,
                            chapterLangList: X,
                            dupGroupChapters: et,
                            chapTitle: ee,
                            checkVol2Chap1: ea,
                            showAffilite: "1page" == ek
                        }) : null, el && !ep("xl") ? (0, a.jsx)(ts, {
                            chapter: K,
                            chapters: Q,
                            dupGroupChapters: et,
                            chapterLangList: X,
                            checkVol2Chap1: ea,
                            modeReader: ek,
                            next: Y
                        }) : null, el ? (0, a.jsx)(a.Fragment, {
                            children: eo && ed ? ex ? (0, a.jsx)("div", {
                                className: "w-full flex justify-center",
                                children: (0, a.jsx)(f.Z, {})
                            }) : (0, a.jsx)(tm, {
                                externalUrl: en,
                                publishAt: K.publish_at,
                                comicSlug: K.md_comics.slug,
                                groupName: (null === (T = K.md_chapters_groups) || void 0 === T ? void 0 : null === (A = T[0]) || void 0 === A ? void 0 : null === (E = A.md_groups) || void 0 === E ? void 0 : E.title) ? K.md_chapters_groups[0].md_groups.title : (null === (R = K.group_name) || void 0 === R ? void 0 : R[0]) ? K.group_name[0] : "",
                                comicId: K.md_comics.id,
                                nextId: Y ? Y.id : K.id,
                                chapterId: K.id,
                                chap: K.chap ? K.chap : null
                            }) : "scroll" == ek ? (0, a.jsx)(eV, {
                                chapTitle: ee,
                                chapters: Q,
                                dupGroupChapters: et,
                                chapterLangList: X,
                                images: eb,
                                chapter: K,
                                next: Y,
                                prev: G,
                                seoTitle: W,
                                seoDescription: J,
                                checkVol2Chap1: ea,
                                matureContent: es
                            }, "chapter-fullpage" + K.hid) : ep("xl") ? (0, a.jsx)(eY, {
                                images: eb,
                                chapter: K,
                                next: Y,
                                seoTitle: W,
                                seoDescription: J,
                                matureContent: es
                            }) : (0, a.jsx)(e7, {
                                images: eb,
                                chapter: K,
                                next: Y,
                                seoTitle: W,
                                seoDescription: J,
                                checkVol2Chap1: ea,
                                matureContent: es
                            }, "onepageswiper" + K.hid)
                        }) : null]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [7536, 982, 3836, 3639, 8209, 467, 3661, 2888, 9774, 179], function() {
            console.log(e(e.s = 38224)); //changes
            return e(e.s = 38224)
        }), _N_E = e.O()
    }
]);