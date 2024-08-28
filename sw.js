!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "9b88e39b-9fa3-4347-9871-44d9858c38b3",
        e._sentryDebugIdIdentifier = "sentry-dbid-9b88e39b-9fa3-4347-9871-44d9858c38b3")
    } catch (e) {}
}(),
function() {
    "use strict";
    var e = {
        913: function() {
            try {
                self["workbox:core:6.5.3"] && _()
            } catch (e) {}
        },
        550: function() {
            try {
                self["workbox:expiration:6.5.3"] && _()
            } catch (e) {}
        },
        977: function() {
            try {
                self["workbox:precaching:6.5.3"] && _()
            } catch (e) {}
        },
        80: function() {
            try {
                self["workbox:routing:6.5.3"] && _()
            } catch (e) {}
        },
        873: function() {
            try {
                self["workbox:strategies:6.5.3"] && _()
            } catch (e) {}
        }
    }
      , t = {};
    function s(a) {
        var r = t[a];
        if (void 0 !== r)
            return r.exports;
        var i = t[a] = {
            exports: {}
        }
          , n = !0;
        try {
            e[a](i, i.exports, s),
            n = !1
        } finally {
            n && delete t[a]
        }
        return i.exports
    }
    !function() {
        var e, t, a;
        let r, i, n, o, c, l;
        s(913);
        let h = (e,...t)=>{
            let s = e;
            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`),
            s
        }
        ;
        class u extends Error {
            constructor(e, t) {
                super(h(e, t)),
                this.name = e,
                this.details = t
            }
        }
        s(80);
        let d = e=>e && "object" == typeof e ? e : {
            handle: e
        };
        class f {
            constructor(e, t, s="GET") {
                this.handler = d(t),
                this.match = e,
                this.method = s
            }
            setCatchHandler(e) {
                this.catchHandler = d(e)
            }
        }
        class p extends f {
            constructor(e, t, s) {
                super(({url: t})=>{
                    let s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index))
                        return s.slice(1)
                }
                , t, s)
            }
        }
        let g = e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`), "");
        class w {
            constructor() {
                this._routes = new Map,
                this._defaultHandlerMap = new Map
            }
            get routes() {
                return this._routes
            }
            addFetchListener() {
                self.addEventListener("fetch", e=>{
                    let {request: t} = e
                      , s = this.handleRequest({
                        request: t,
                        event: e
                    });
                    s && e.respondWith(s)
                }
                )
            }
            addCacheListener() {
                self.addEventListener("message", e=>{
                    if (e.data && "CACHE_URLS" === e.data.type) {
                        let {payload: t} = e.data
                          , s = Promise.all(t.urlsToCache.map(t=>{
                            "string" == typeof t && (t = [t]);
                            let s = new Request(...t);
                            return this.handleRequest({
                                request: s,
                                event: e
                            })
                        }
                        ));
                        e.waitUntil(s),
                        e.ports && e.ports[0] && s.then(()=>e.ports[0].postMessage(!0))
                    }
                }
                )
            }
            handleRequest({request: e, event: t}) {
                let s;
                let a = new URL(e.url,location.href);
                if (!a.protocol.startsWith("http"))
                    return;
                let r = a.origin === location.origin
                  , {params: i, route: n} = this.findMatchingRoute({
                    event: t,
                    request: e,
                    sameOrigin: r,
                    url: a
                })
                  , o = n && n.handler
                  , c = e.method;
                if (!o && this._defaultHandlerMap.has(c) && (o = this._defaultHandlerMap.get(c)),
                !o)
                    return;
                try {
                    s = o.handle({
                        url: a,
                        request: e,
                        event: t,
                        params: i
                    })
                } catch (e) {
                    s = Promise.reject(e)
                }
                let l = n && n.catchHandler;
                return s instanceof Promise && (this._catchHandler || l) && (s = s.catch(async s=>{
                    if (l)
                        try {
                            return await l.handle({
                                url: a,
                                request: e,
                                event: t,
                                params: i
                            })
                        } catch (e) {
                            e instanceof Error && (s = e)
                        }
                    if (this._catchHandler)
                        return this._catchHandler.handle({
                            url: a,
                            request: e,
                            event: t
                        });
                    throw s
                }
                )),
                s
            }
            findMatchingRoute({url: e, sameOrigin: t, request: s, event: a}) {
                for (let r of this._routes.get(s.method) || []) {
                    let i;
                    let n = r.match({
                        url: e,
                        sameOrigin: t,
                        request: s,
                        event: a
                    });
                    if (n)
                        return Array.isArray(i = n) && 0 === i.length ? i = void 0 : n.constructor === Object && 0 === Object.keys(n).length ? i = void 0 : "boolean" == typeof n && (i = void 0),
                        {
                            route: r,
                            params: i
                        }
                }
                return {}
            }
            setDefaultHandler(e, t="GET") {
                this._defaultHandlerMap.set(t, d(e))
            }
            setCatchHandler(e) {
                this._catchHandler = d(e)
            }
            registerRoute(e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                this._routes.get(e.method).push(e)
            }
            unregisterRoute(e) {
                if (!this._routes.has(e.method))
                    throw new u("unregister-route-but-not-found-with-method",{
                        method: e.method
                    });
                let t = this._routes.get(e.method).indexOf(e);
                if (t > -1)
                    this._routes.get(e.method).splice(t, 1);
                else
                    throw new u("unregister-route-route-not-registered")
            }
        }
        let y = ()=>(r || ((r = new w).addFetchListener(),
        r.addCacheListener()),
        r);
        console("this is where the thing is suppose to log shit out");
        console.log(y); //aqui onde a alteracao ocorre
        function m(e, t, s) {
            let a;
            if ("string" == typeof e) {
                let r = new URL(e,location.href);
                a = new f(({url: e})=>e.href === r.href,t,s)
            } else if (e instanceof RegExp)
                a = new p(e,t,s);
            else if ("function" == typeof e)
                a = new f(e,t,s);
            else if (e instanceof f)
                a = e;
            else
                throw new u("unsupported-route-type",{
                    moduleName: "workbox-routing",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
            return y().registerRoute(a),
            a
        }
        let b = {
            googleAnalytics: "googleAnalytics",
            precache: "precache-v2",
            prefix: "workbox",
            runtime: "runtime",
            suffix: "undefined" != typeof registration ? registration.scope : ""
        }
          , x = e=>[b.prefix, e, b.suffix].filter(e=>e && e.length > 0).join("-")
          , v = e=>e || x(b.precache)
          , R = e=>e || x(b.runtime);
        function C(e, t) {
            let s = new URL(e);
            for (let e of t)
                s.searchParams.delete(e);
            return s.href
        }
        async function E(e, t, s, a) {
            let r = C(t.url, s);
            if (t.url === r)
                return e.match(t, a);
            let i = Object.assign(Object.assign({}, a), {
                ignoreSearch: !0
            });
            for (let n of (await e.keys(t, i)))
                if (r === C(n.url, s))
                    return e.match(n, a)
        }
        class D {
            constructor() {
                this.promise = new Promise((e,t)=>{
                    this.resolve = e,
                    this.reject = t
                }
                )
            }
        }
        let T = new Set;
        async function L() {
            for (let e of T)
                await e()
        }
        function k(e) {
            return new Promise(t=>setTimeout(t, e))
        }
        function U(e) {
            return "string" == typeof e ? new Request(e) : e
        }
        s(873);
        class I {
            constructor(e, t) {
                for (let s of (this._cacheKeys = {},
                Object.assign(this, t),
                this.event = t.event,
                this._strategy = e,
                this._handlerDeferred = new D,
                this._extendLifetimePromises = [],
                this._plugins = [...e.plugins],
                this._pluginStateMap = new Map,
                this._plugins))
                    this._pluginStateMap.set(s, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            async fetch(e) {
                let {event: t} = this
                  , s = U(e);
                if ("navigate" === s.mode && t instanceof FetchEvent && t.preloadResponse) {
                    let e = await t.preloadResponse;
                    if (e)
                        return e
                }
                let a = this.hasCallback("fetchDidFail") ? s.clone() : null;
                try {
                    for (let e of this.iterateCallbacks("requestWillFetch"))
                        s = await e({
                            request: s.clone(),
                            event: t
                        })
                } catch (e) {
                    if (e instanceof Error)
                        throw new u("plugin-error-request-will-fetch",{
                            thrownErrorMessage: e.message
                        })
                }
                let r = s.clone();
                try {
                    let e;
                    for (let a of (e = await fetch(s, "navigate" === s.mode ? void 0 : this._strategy.fetchOptions),
                    this.iterateCallbacks("fetchDidSucceed")))
                        e = await a({
                            event: t,
                            request: r,
                            response: e
                        });
                    return e
                } catch (e) {
                    throw a && await this.runCallbacks("fetchDidFail", {
                        error: e,
                        event: t,
                        originalRequest: a.clone(),
                        request: r.clone()
                    }),
                    e
                }
            }
            async fetchAndCachePut(e) {
                let t = await this.fetch(e)
                  , s = t.clone();
                return this.waitUntil(this.cachePut(e, s)),
                t
            }
            async cacheMatch(e) {
                let t;
                let s = U(e)
                  , {cacheName: a, matchOptions: r} = this._strategy
                  , i = await this.getCacheKey(s, "read")
                  , n = Object.assign(Object.assign({}, r), {
                    cacheName: a
                });
                for (let e of (t = await caches.match(i, n),
                this.iterateCallbacks("cachedResponseWillBeUsed")))
                    t = await e({
                        cacheName: a,
                        matchOptions: r,
                        cachedResponse: t,
                        request: i,
                        event: this.event
                    }) || void 0;
                return t
            }
            async cachePut(e, t) {
                let s = U(e);
                await k(0);
                let a = await this.getCacheKey(s, "write");
                if (!t)
                    throw new u("cache-put-with-no-response",{
                        url: g(a.url)
                    });
                let r = await this._ensureResponseSafeToCache(t);
                if (!r)
                    return !1;
                let {cacheName: i, matchOptions: n} = this._strategy
                  , o = await self.caches.open(i)
                  , c = this.hasCallback("cacheDidUpdate")
                  , l = c ? await E(o, a.clone(), ["__WB_REVISION__"], n) : null;
                try {
                    await o.put(a, c ? r.clone() : r)
                } catch (e) {
                    if (e instanceof Error)
                        throw "QuotaExceededError" === e.name && await L(),
                        e
                }
                for (let e of this.iterateCallbacks("cacheDidUpdate"))
                    await e({
                        cacheName: i,
                        oldResponse: l,
                        newResponse: r.clone(),
                        request: a,
                        event: this.event
                    });
                return !0
            }
            async getCacheKey(e, t) {
                let s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let a = e;
                    for (let e of this.iterateCallbacks("cacheKeyWillBeUsed"))
                        a = U(await e({
                            mode: t,
                            request: a,
                            event: this.event,
                            params: this.params
                        }));
                    this._cacheKeys[s] = a
                }
                return this._cacheKeys[s]
            }
            hasCallback(e) {
                for (let t of this._strategy.plugins)
                    if (e in t)
                        return !0;
                return !1
            }
            async runCallbacks(e, t) {
                for (let s of this.iterateCallbacks(e))
                    await s(t)
            }
            *iterateCallbacks(e) {
                for (let t of this._strategy.plugins)
                    if ("function" == typeof t[e]) {
                        let s = this._pluginStateMap.get(t)
                          , a = a=>{
                            let r = Object.assign(Object.assign({}, a), {
                                state: s
                            });
                            return t[e](r)
                        }
                        ;
                        yield a
                    }
            }
            waitUntil(e) {
                return this._extendLifetimePromises.push(e),
                e
            }
            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift(); )
                    await e
            }
            destroy() {
                this._handlerDeferred.resolve(null)
            }
            async _ensureResponseSafeToCache(e) {
                let t = e
                  , s = !1;
                for (let e of this.iterateCallbacks("cacheWillUpdate"))
                    if (t = await e({
                        request: this.request,
                        response: t,
                        event: this.event
                    }) || void 0,
                    s = !0,
                    !t)
                        break;
                return !s && t && 200 !== t.status && (t = void 0),
                t
            }
        }
        class N {
            constructor(e={}) {
                this.cacheName = R(e.cacheName),
                this.plugins = e.plugins || [],
                this.fetchOptions = e.fetchOptions,
                this.matchOptions = e.matchOptions
            }
            handle(e) {
                let[t] = this.handleAll(e);
                return t
            }
            handleAll(e) {
                e instanceof FetchEvent && (e = {
                    event: e,
                    request: e.request
                });
                let t = e.event
                  , s = "string" == typeof e.request ? new Request(e.request) : e.request
                  , a = new I(this,{
                    event: t,
                    request: s,
                    params: "params"in e ? e.params : void 0
                })
                  , r = this._getResponse(a, s, t)
                  , i = this._awaitComplete(r, a, s, t);
                return [r, i]
            }
            async _getResponse(e, t, s) {
                let a;
                await e.runCallbacks("handlerWillStart", {
                    event: s,
                    request: t
                });
                try {
                    if (!(a = await this._handle(t, e)) || "error" === a.type)
                        throw new u("no-response",{
                            url: t.url
                        })
                } catch (r) {
                    if (r instanceof Error) {
                        for (let i of e.iterateCallbacks("handlerDidError"))
                            if (a = await i({
                                error: r,
                                event: s,
                                request: t
                            }))
                                break
                    }
                    if (a)
                        ;
                    else
                        throw r
                }
                for (let r of e.iterateCallbacks("handlerWillRespond"))
                    a = await r({
                        event: s,
                        request: t,
                        response: a
                    });
                return a
            }
            async _awaitComplete(e, t, s, a) {
                let r, i;
                try {
                    r = await e
                } catch (e) {}
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: a,
                        request: s,
                        response: r
                    }),
                    await t.doneWaiting()
                } catch (e) {
                    e instanceof Error && (i = e)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                    event: a,
                    request: s,
                    response: r,
                    error: i
                }),
                t.destroy(),
                i)
                    throw i
            }
        }
        class S extends N {
            async _handle(e, t) {
                let s, a = await t.cacheMatch(e);
                if (!a)
                    try {
                        a = await t.fetchAndCachePut(e)
                    } catch (e) {
                        e instanceof Error && (s = e)
                    }
                if (!a)
                    throw new u("no-response",{
                        url: e.url,
                        error: s
                    });
                return a
            }
        }
        let M = {
            cacheWillUpdate: async({response: e})=>200 === e.status || 0 === e.status ? e : null
        };
        class q extends N {
            constructor(e={}) {
                super(e),
                this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
            }
            async _handle(e, t) {
                let s, a;
                try {
                    let a = [t.fetch(e)];
                    if (this._networkTimeoutSeconds) {
                        let e = k(1e3 * this._networkTimeoutSeconds);
                        a.push(e)
                    }
                    if (!(s = await Promise.race(a)))
                        throw Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)
                } catch (e) {
                    e instanceof Error && (a = e)
                }
                if (!s)
                    throw new u("no-response",{
                        url: e.url,
                        error: a
                    });
                return s
            }
        }
        class A extends N {
            constructor(e={}) {
                super(e),
                this.plugins.some(e=>"cacheWillUpdate"in e) || this.plugins.unshift(M)
            }
            async _handle(e, t) {
                let s;
                let a = t.fetchAndCachePut(e).catch(()=>{}
                );
                t.waitUntil(a);
                let r = await t.cacheMatch(e);
                if (r)
                    ;
                else
                    try {
                        r = await a
                    } catch (e) {
                        e instanceof Error && (s = e)
                    }
                if (!r)
                    throw new u("no-response",{
                        url: e.url,
                        error: s
                    });
                return r
            }
        }
        function K(e) {
            e.then(()=>{}
            )
        }
        function P(e, t) {
            let s = t();
            return e.waitUntil(s),
            s
        }
        async function O(e, t) {
            let s = null;
            if (e.url && (s = new URL(e.url).origin),
            s !== self.location.origin)
                throw new u("cross-origin-copy-response",{
                    origin: s
                });
            let a = e.clone()
              , r = {
                headers: new Headers(a.headers),
                status: a.status,
                statusText: a.statusText
            }
              , n = t ? t(r) : r
              , o = !function() {
                if (void 0 === i) {
                    let e = new Response("");
                    if ("body"in e)
                        try {
                            new Response(e.body),
                            i = !0
                        } catch (e) {
                            i = !1
                        }
                    i = !1
                }
                return i
            }() ? await a.blob() : a.body;
            return new Response(o,n)
        }
        let W = (e,t)=>t.some(t=>e instanceof t)
          , B = new WeakMap
          , j = new WeakMap
          , F = new WeakMap
          , H = new WeakMap
          , V = new WeakMap
          , $ = {
            get(e, t, s) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return j.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || F.get(e);
                    if ("store" === t)
                        return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
                }
                return Q(e[t])
            },
            set: (e,t,s)=>(e[t] = s,
            !0),
            has: (e,t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function Q(e) {
            var t;
            if (e instanceof IDBRequest)
                return function(e) {
                    let t = new Promise((t,s)=>{
                        let a = ()=>{
                            e.removeEventListener("success", r),
                            e.removeEventListener("error", i)
                        }
                          , r = ()=>{
                            t(Q(e.result)),
                            a()
                        }
                          , i = ()=>{
                            s(e.error),
                            a()
                        }
                        ;
                        e.addEventListener("success", r),
                        e.addEventListener("error", i)
                    }
                    );
                    return t.then(t=>{
                        t instanceof IDBCursor && B.set(t, e)
                    }
                    ).catch(()=>{}
                    ),
                    V.set(t, e),
                    t
                }(e);
            if (H.has(e))
                return H.get(e);
            let s = "function" == typeof (t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                return t.apply(G(this), e),
                Q(B.get(this))
            }
            : function(...e) {
                return Q(t.apply(G(this), e))
            }
            : function(e, ...s) {
                let a = t.call(G(this), e, ...s);
                return F.set(a, e.sort ? e.sort() : [e]),
                Q(a)
            }
            : (t instanceof IDBTransaction && function(e) {
                if (j.has(e))
                    return;
                let t = new Promise((t,s)=>{
                    let a = ()=>{
                        e.removeEventListener("complete", r),
                        e.removeEventListener("error", i),
                        e.removeEventListener("abort", i)
                    }
                      , r = ()=>{
                        t(),
                        a()
                    }
                      , i = ()=>{
                        s(e.error || new DOMException("AbortError","AbortError")),
                        a()
                    }
                    ;
                    e.addEventListener("complete", r),
                    e.addEventListener("error", i),
                    e.addEventListener("abort", i)
                }
                );
                j.set(e, t)
            }(t),
            W(t, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t,$) : t;
            return s !== e && (H.set(e, s),
            V.set(s, e)),
            s
        }
        let G = e=>V.get(e)
          , J = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , z = ["put", "add", "delete", "clear"]
          , X = new Map;
        function Y(e, t) {
            if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
                return;
            if (X.get(t))
                return X.get(t);
            let s = t.replace(/FromIndex$/, "")
              , a = t !== s
              , r = z.includes(s);
            if (!(s in (a ? IDBIndex : IDBObjectStore).prototype) || !(r || J.includes(s)))
                return;
            let i = async function(e, ...t) {
                let i = this.transaction(e, r ? "readwrite" : "readonly")
                  , n = i.store;
                return a && (n = n.index(t.shift())),
                (await Promise.all([n[s](...t), r && i.done]))[0]
            };
            return X.set(t, i),
            i
        }
        $ = {
            ...l = $,
            get: (e,t,s)=>Y(e, t) || l.get(e, t, s),
            has: (e,t)=>!!Y(e, t) || l.has(e, t)
        },
        s(550);
        let Z = "cache-entries"
          , ee = e=>{
            let t = new URL(e,location.href);
            return t.hash = "",
            t.href
        }
        ;
        class et {
            constructor(e) {
                this._db = null,
                this._cacheName = e
            }
            _upgradeDb(e) {
                let t = e.createObjectStore(Z, {
                    keyPath: "id"
                });
                t.createIndex("cacheName", "cacheName", {
                    unique: !1
                }),
                t.createIndex("timestamp", "timestamp", {
                    unique: !1
                })
            }
            _upgradeDbAndDeleteOldDbs(e) {
                this._upgradeDb(e),
                this._cacheName && function(e, {blocked: t}={}) {
                    let s = indexedDB.deleteDatabase(e);
                    t && s.addEventListener("blocked", e=>t(e.oldVersion, e)),
                    Q(s).then(()=>void 0)
                }(this._cacheName)
            }
            async setTimestamp(e, t) {
                let s = {
                    url: e = ee(e),
                    timestamp: t,
                    cacheName: this._cacheName,
                    id: this._getId(e)
                }
                  , a = (await this.getDb()).transaction(Z, "readwrite", {
                    durability: "relaxed"
                });
                await a.store.put(s),
                await a.done
            }
            async getTimestamp(e) {
                let t = await this.getDb()
                  , s = await t.get(Z, this._getId(e));
                return null == s ? void 0 : s.timestamp
            }
            async expireEntries(e, t) {
                let s = await this.getDb()
                  , a = await s.transaction(Z).store.index("timestamp").openCursor(null, "prev")
                  , r = []
                  , i = 0;
                for (; a; ) {
                    let s = a.value;
                    s.cacheName === this._cacheName && (e && s.timestamp < e || t && i >= t ? r.push(a.value) : i++),
                    a = await a.continue()
                }
                let n = [];
                for (let e of r)
                    await s.delete(Z, e.id),
                    n.push(e.url);
                return n
            }
            _getId(e) {
                return this._cacheName + "|" + ee(e)
            }
            async getDb() {
                return this._db || (this._db = await function(e, t, {blocked: s, upgrade: a, blocking: r, terminated: i}={}) {
                    let n = indexedDB.open(e, 1)
                      , o = Q(n);
                    return a && n.addEventListener("upgradeneeded", e=>{
                        a(Q(n.result), e.oldVersion, e.newVersion, Q(n.transaction), e)
                    }
                    ),
                    s && n.addEventListener("blocked", e=>s(e.oldVersion, e.newVersion, e)),
                    o.then(e=>{
                        i && e.addEventListener("close", ()=>i()),
                        r && e.addEventListener("versionchange", e=>r(e.oldVersion, e.newVersion, e))
                    }
                    ).catch(()=>{}
                    ),
                    o
                }("workbox-expiration", 0, {
                    upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                })),
                this._db
            }
        }
        class es {
            constructor(e, t={}) {
                this._isRunning = !1,
                this._rerunRequested = !1,
                this._maxEntries = t.maxEntries,
                this._maxAgeSeconds = t.maxAgeSeconds,
                this._matchOptions = t.matchOptions,
                this._cacheName = e,
                this._timestampModel = new et(e)
            }
            async expireEntries() {
                if (this._isRunning) {
                    this._rerunRequested = !0;
                    return
                }
                this._isRunning = !0;
                let e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0
                  , t = await this._timestampModel.expireEntries(e, this._maxEntries)
                  , s = await self.caches.open(this._cacheName);
                for (let e of t)
                    await s.delete(e, this._matchOptions);
                this._isRunning = !1,
                this._rerunRequested && (this._rerunRequested = !1,
                K(this.expireEntries()))
            }
            async updateTimestamp(e) {
                await this._timestampModel.setTimestamp(e, Date.now())
            }
            async isURLExpired(e) {
                if (!this._maxAgeSeconds)
                    return !1;
                {
                    let t = await this._timestampModel.getTimestamp(e)
                      , s = Date.now() - 1e3 * this._maxAgeSeconds;
                    return void 0 === t || t < s
                }
            }
            async delete() {
                this._rerunRequested = !1,
                await this._timestampModel.expireEntries(1 / 0)
            }
        }
        class ea {
            constructor(e={}) {
                if (this.cachedResponseWillBeUsed = async({event: e, request: t, cacheName: s, cachedResponse: a})=>{
                    if (!a)
                        return null;
                    let r = this._isResponseDateFresh(a)
                      , i = this._getCacheExpiration(s);
                    K(i.expireEntries());
                    let n = i.updateTimestamp(t.url);
                    if (e)
                        try {
                            e.waitUntil(n)
                        } catch (e) {}
                    return r ? a : null
                }
                ,
                this.cacheDidUpdate = async({cacheName: e, request: t})=>{
                    let s = this._getCacheExpiration(e);
                    await s.updateTimestamp(t.url),
                    await s.expireEntries()
                }
                ,
                this._config = e,
                this._maxAgeSeconds = e.maxAgeSeconds,
                this._cacheExpirations = new Map,
                e.purgeOnQuotaError) {
                    var t;
                    t = ()=>this.deleteCacheAndMetadata(),
                    T.add(t)
                }
            }
            _getCacheExpiration(e) {
                if (e === R())
                    throw new u("expire-custom-caches-only");
                let t = this._cacheExpirations.get(e);
                return t || (t = new es(e,this._config),
                this._cacheExpirations.set(e, t)),
                t
            }
            _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds)
                    return !0;
                let t = this._getDateHeaderTimestamp(e);
                return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
            }
            _getDateHeaderTimestamp(e) {
                if (!e.headers.has("date"))
                    return null;
                let t = new Date(e.headers.get("date")).getTime();
                return isNaN(t) ? null : t
            }
            async deleteCacheAndMetadata() {
                for (let[e,t] of this._cacheExpirations)
                    await self.caches.delete(e),
                    await t.delete();
                this._cacheExpirations = new Map
            }
        }
        s(977);
        class er {
            constructor() {
                this.updatedURLs = [],
                this.notUpdatedURLs = [],
                this.handlerWillStart = async({request: e, state: t})=>{
                    t && (t.originalRequest = e)
                }
                ,
                this.cachedResponseWillBeUsed = async({event: e, state: t, cachedResponse: s})=>{
                    if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                        let e = t.originalRequest.url;
                        s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                    }
                    return s
                }
            }
        }
        class ei {
            constructor({precacheController: e}) {
                this.cacheKeyWillBeUsed = async({request: e, params: t})=>{
                    let s = (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
                    return s ? new Request(s,{
                        headers: e.headers
                    }) : e
                }
                ,
                this._precacheController = e
            }
        }
        class en extends N {
            constructor(e={}) {
                e.cacheName = v(e.cacheName),
                super(e),
                this._fallbackToNetwork = !1 !== e.fallbackToNetwork,
                this.plugins.push(en.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(e, t) {
                return await t.cacheMatch(e) || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
            }
            async _handleFetch(e, t) {
                let s;
                let a = t.params || {};
                if (this._fallbackToNetwork) {
                    let r = a.integrity
                      , i = e.integrity
                      , n = !i || i === r;
                    s = await t.fetch(new Request(e,{
                        integrity: "no-cors" !== e.mode ? i || r : void 0
                    })),
                    r && n && "no-cors" !== e.mode && (this._useDefaultCacheabilityPluginIfNeeded(),
                    await t.cachePut(e, s.clone()))
                } else
                    throw new u("missing-precache-entry",{
                        cacheName: this.cacheName,
                        url: e.url
                    });
                return s
            }
            async _handleInstall(e, t) {
                this._useDefaultCacheabilityPluginIfNeeded();
                let s = await t.fetch(e);
                if (!await t.cachePut(e, s.clone()))
                    throw new u("bad-precaching-response",{
                        url: e.url,
                        status: s.status
                    });
                return s
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let e = null
                  , t = 0;
                for (let[s,a] of this.plugins.entries())
                    a !== en.copyRedirectedCacheableResponsesPlugin && (a === en.defaultPrecacheCacheabilityPlugin && (e = s),
                    a.cacheWillUpdate && t++);
                0 === t ? this.plugins.push(en.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
            }
        }
        en.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async({response: e})=>!e || e.status >= 400 ? null : e
        },
        en.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async({response: e})=>e.redirected ? await O(e) : e
        };
        class eo {
            constructor({cacheName: e, plugins: t=[], fallbackToNetwork: s=!0}={}) {
                this._urlsToCacheKeys = new Map,
                this._urlsToCacheModes = new Map,
                this._cacheKeysToIntegrities = new Map,
                this._strategy = new en({
                    cacheName: v(e),
                    plugins: [...t, new ei({
                        precacheController: this
                    })],
                    fallbackToNetwork: s
                }),
                this.install = this.install.bind(this),
                this.activate = this.activate.bind(this)
            }
            get strategy() {
                return this._strategy
            }
            precache(e) {
                this.addToCacheList(e),
                this._installAndActiveListenersAdded || (self.addEventListener("install", this.install),
                self.addEventListener("activate", this.activate),
                this._installAndActiveListenersAdded = !0)
            }
            addToCacheList(e) {
                let t = [];
                for (let s of e) {
                    "string" == typeof s ? t.push(s) : s && void 0 === s.revision && t.push(s.url);
                    let {cacheKey: e, url: a} = function(e) {
                        if (!e)
                            throw new u("add-to-cache-list-unexpected-type",{
                                entry: e
                            });
                        if ("string" == typeof e) {
                            let t = new URL(e,location.href);
                            return {
                                cacheKey: t.href,
                                url: t.href
                            }
                        }
                        let {revision: t, url: s} = e;
                        if (!s)
                            throw new u("add-to-cache-list-unexpected-type",{
                                entry: e
                            });
                        if (!t) {
                            let e = new URL(s,location.href);
                            return {
                                cacheKey: e.href,
                                url: e.href
                            }
                        }
                        let a = new URL(s,location.href)
                          , r = new URL(s,location.href);
                        return a.searchParams.set("__WB_REVISION__", t),
                        {
                            cacheKey: a.href,
                            url: r.href
                        }
                    }(s)
                      , r = "string" != typeof s && s.revision ? "reload" : "default";
                    if (this._urlsToCacheKeys.has(a) && this._urlsToCacheKeys.get(a) !== e)
                        throw new u("add-to-cache-list-conflicting-entries",{
                            firstEntry: this._urlsToCacheKeys.get(a),
                            secondEntry: e
                        });
                    if ("string" != typeof s && s.integrity) {
                        if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== s.integrity)
                            throw new u("add-to-cache-list-conflicting-integrities",{
                                url: a
                            });
                        this._cacheKeysToIntegrities.set(e, s.integrity)
                    }
                    this._urlsToCacheKeys.set(a, e),
                    this._urlsToCacheModes.set(a, r),
                    t.length > 0 && console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)
                }
            }
            install(e) {
                return P(e, async()=>{
                    let t = new er;
                    for (let[s,a] of (this.strategy.plugins.push(t),
                    this._urlsToCacheKeys)) {
                        let t = this._cacheKeysToIntegrities.get(a)
                          , r = this._urlsToCacheModes.get(s)
                          , i = new Request(s,{
                            integrity: t,
                            cache: r,
                            credentials: "same-origin"
                        });
                        await Promise.all(this.strategy.handleAll({
                            params: {
                                cacheKey: a
                            },
                            request: i,
                            event: e
                        }))
                    }
                    let {updatedURLs: s, notUpdatedURLs: a} = t;
                    return {
                        updatedURLs: s,
                        notUpdatedURLs: a
                    }
                }
                )
            }
            activate(e) {
                return P(e, async()=>{
                    let e = await self.caches.open(this.strategy.cacheName)
                      , t = await e.keys()
                      , s = new Set(this._urlsToCacheKeys.values())
                      , a = [];
                    for (let r of t)
                        s.has(r.url) || (await e.delete(r),
                        a.push(r.url));
                    return {
                        deletedURLs: a
                    }
                }
                )
            }
            getURLsToCacheKeys() {
                return this._urlsToCacheKeys
            }
            getCachedURLs() {
                return [...this._urlsToCacheKeys.keys()]
            }
            getCacheKeyForURL(e) {
                let t = new URL(e,location.href);
                return this._urlsToCacheKeys.get(t.href)
            }
            getIntegrityForCacheKey(e) {
                return this._cacheKeysToIntegrities.get(e)
            }
            async matchPrecache(e) {
                let t = e instanceof Request ? e.url : e
                  , s = this.getCacheKeyForURL(t);
                if (s)
                    return (await self.caches.open(this.strategy.cacheName)).match(s)
            }
            createHandlerBoundToURL(e) {
                let t = this.getCacheKeyForURL(e);
                if (!t)
                    throw new u("non-precached-url",{
                        url: e
                    });
                return s=>(s.request = new Request(e),
                s.params = Object.assign({
                    cacheKey: t
                }, s.params),
                this.strategy.handle(s))
            }
        }
        let ec = ()=>(c || (c = new eo),
        c);
        class el extends f {
            constructor(e, t) {
                super(({request: s})=>{
                    let a = e.getURLsToCacheKeys();
                    for (let r of function*(e, {ignoreURLParametersMatching: t=[/^utm_/, /^fbclid$/], directoryIndex: s="index.html", cleanURLs: a=!0, urlManipulation: r}={}) {
                        let i = new URL(e,location.href);
                        i.hash = "",
                        yield i.href;
                        let n = function(e, t=[]) {
                            for (let s of [...e.searchParams.keys()])
                                t.some(e=>e.test(s)) && e.searchParams.delete(s);
                            return e
                        }(i, t);
                        if (yield n.href,
                        s && n.pathname.endsWith("/")) {
                            let e = new URL(n.href);
                            e.pathname += s,
                            yield e.href
                        }
                        if (a) {
                            let e = new URL(n.href);
                            e.pathname += ".html",
                            yield e.href
                        }
                        if (r)
                            for (let e of r({
                                url: i
                            }))
                                yield e.href
                    }(s.url, t)) {
                        let t = a.get(r);
                        if (t) {
                            let s = e.getIntegrityForCacheKey(t);
                            return {
                                cacheKey: t,
                                integrity: s
                            }
                        }
                    }
                }
                , e.strategy)
            }
        }
        self.skipWaiting(),
        self.addEventListener("activate", ()=>self.clients.claim()),
        [].push({
            url: "/offline",
            revision: Math.random().toString(36).substring(7)
        }),
        e = ["/offline"],
        ec().precache(e),
        t = void 0,
        m(new el(ec(),t)),
        m("/", new q({}), "GET"),
        m(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new S({
            cacheName: "google-fonts",
            plugins: [new ea({
                maxEntries: 4,
                maxAgeSeconds: 31536e3,
                purgeOnQuotaError: !0
            })]
        }), "GET"),
        m(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new S({
            cacheName: "static-font-assets",
            plugins: [new ea({
                maxEntries: 4,
                maxAgeSeconds: 604800,
                purgeOnQuotaError: !0
            })]
        }), "GET"),
        m(e=>{
            let {request: t} = e;
            return !!("image" === t.destination && (t.url.includes("_next/") || t.url.includes("static/")))
        }
        , new A({
            cacheName: "image-cache",
            plugins: [new ea({
                maxAgeSeconds: 259200,
                maxEntries: 100,
                purgeOnQuotaError: !0
            })]
        })),
        m(e=>{
            let {request: t} = e;
            return !!t.url.includes("_next/static")
        }
        , new S({
            cacheName: "static-assets",
            plugins: [new ea({
                maxAgeSeconds: 86400,
                maxEntries: 250,
                purgeOnQuotaError: !0
            })]
        })),
        a = new q,
        y().setDefaultHandler(a)
    }()
}();
