globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, readBody, getQuery as getQuery$1, createError, getResponseStatusText } from 'file://D:/theme/dplive/node_modules/h3/dist/index.mjs';
import adsmoment from 'file://D:/theme/dplive/node_modules/moment/moment.js';
import jimp from 'file://D:/theme/dplive/node_modules/jimp/dist/index.js';
import { PrismaClient } from 'file://D:/theme/dplive/node_modules/@prisma/client/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://D:/theme/dplive/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/theme/dplive/node_modules/devalue/index.js';
import { renderToString } from 'file://D:/theme/dplive/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file://D:/theme/dplive/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/theme/dplive/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/theme/dplive/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/theme/dplive/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/theme/dplive/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/theme/dplive/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/theme/dplive/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/theme/dplive/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/theme/dplive/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/theme/dplive/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/theme/dplive/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/theme/dplive/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/theme/dplive/node_modules/radix3/dist/index.mjs';
import { version, unref } from 'file://D:/theme/dplive/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file://D:/theme/dplive/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/theme/dplive/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiUrl": "http://127.0.0.1:8000",
    "device": {
      "enabled": true,
      "defaultUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
      "refreshOnResize": false
    },
    "vcalendar": "",
    "gtag": {
      "id": "G-75HYGMGRDV",
      "config": {},
      "initialConsent": true,
      "loadingStrategy": "async"
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/theme/dplive/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\theme\\dplive","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\theme\\dplive\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\theme\\dplive\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\theme\\dplive\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\theme\\dplive\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const _lazy_zOaAtF = () => Promise.resolve().then(function () { return commonads_post$3; });
const _lazy_IV5t7f = () => Promise.resolve().then(function () { return getauthorpost_post$3; });
const _lazy_XS5fr8 = () => Promise.resolve().then(function () { return breaking_get$3; });
const _lazy_f3u8le = () => Promise.resolve().then(function () { return categorycontent_post$7; });
const _lazy_7xMCwz = () => Promise.resolve().then(function () { return latestpost_post$7; });
const _lazy_HyX6I4 = () => Promise.resolve().then(function () { return alllatestpost_get$3; });
const _lazy_YpNJT4 = () => Promise.resolve().then(function () { return firstrightcatcontent_post$3; });
const _lazy_03P82S = () => Promise.resolve().then(function () { return getinsidemorenews_post$3; });
const _lazy_gI96KC = () => Promise.resolve().then(function () { return moredetailcontents_post$3; });
const _lazy_4DURjb = () => Promise.resolve().then(function () { return moreinsidemorenews_post$3; });
const _lazy_R518Kh = () => Promise.resolve().then(function () { return mreletedcontents_post$3; });
const _lazy_7kmHuj = () => Promise.resolve().then(function () { return postdetail_post$3; });
const _lazy_pmM96S = () => Promise.resolve().then(function () { return albumcategoryphotos_post$3; });
const _lazy_nudSwn = () => Promise.resolve().then(function () { return albumdetail_post$3; });
const _lazy_Iyx9gc = () => Promise.resolve().then(function () { return allcategory_get$3; });
const _lazy_iMMO25 = () => Promise.resolve().then(function () { return banglatime_get$3; });
const _lazy_4zQqH4 = () => Promise.resolve().then(function () { return headercategory_get$3; });
const _lazy_2DNMyh = () => Promise.resolve().then(function () { return art_get$3; });
const _lazy_91PK7o = () => Promise.resolve().then(function () { return campus_get$3; });
const _lazy_zU8AWg = () => Promise.resolve().then(function () { return career_get$3; });
const _lazy_JmpoiN = () => Promise.resolve().then(function () { return categorycontent_post$5; });
const _lazy_XnqXZw = () => Promise.resolve().then(function () { return child_get$3; });
const _lazy_S1cYoX = () => Promise.resolve().then(function () { return corporate_get$3; });
const _lazy_gbouOX = () => Promise.resolve().then(function () { return counter_get$3; });
const _lazy_CxJtlA = () => Promise.resolve().then(function () { return crime_get$3; });
const _lazy_paa5yA = () => Promise.resolve().then(function () { return economy_get$3; });
const _lazy_ZCIJ0q = () => Promise.resolve().then(function () { return education_get$3; });
const _lazy_yUpXvy = () => Promise.resolve().then(function () { return entertainment_get$3; });
const _lazy_oSdM2o = () => Promise.resolve().then(function () { return galleryphoto_get$3; });
const _lazy_YcscI3 = () => Promise.resolve().then(function () { return health_get$3; });
const _lazy_Ia4N7m = () => Promise.resolve().then(function () { return international_get$3; });
const _lazy_kXzK4n = () => Promise.resolve().then(function () { return lawcourt_get$3; });
const _lazy_olfjTz = () => Promise.resolve().then(function () { return lifestyle_get$3; });
const _lazy_8hunHo = () => Promise.resolve().then(function () { return literature_get$3; });
const _lazy_zmqEUt = () => Promise.resolve().then(function () { return motivation_get$3; });
const _lazy_OLdL98 = () => Promise.resolve().then(function () { return national_get$3; });
const _lazy_TOCPeD = () => Promise.resolve().then(function () { return opinion_get$3; });
const _lazy_vLKARi = () => Promise.resolve().then(function () { return politics_get$3; });
const _lazy_ALGuhU = () => Promise.resolve().then(function () { return positioncontent_post$3; });
const _lazy_D750VH = () => Promise.resolve().then(function () { return probash_get$3; });
const _lazy_2cHMnL = () => Promise.resolve().then(function () { return religion_get$3; });
const _lazy_lK1RoL = () => Promise.resolve().then(function () { return saradesh_get$3; });
const _lazy_mNKUQq = () => Promise.resolve().then(function () { return specialarticle_get$3; });
const _lazy_77Nht6 = () => Promise.resolve().then(function () { return specialreport_get$3; });
const _lazy_zX73wo = () => Promise.resolve().then(function () { return specialtopcontent_get$3; });
const _lazy_DPutjn = () => Promise.resolve().then(function () { return sports_get$3; });
const _lazy_r7Gs2O = () => Promise.resolve().then(function () { return technology_get$3; });
const _lazy_dexJjr = () => Promise.resolve().then(function () { return videofeature_post$3; });
const _lazy_3bQJLG = () => Promise.resolve().then(function () { return ogimage_post$3; });
const _lazy_UArCMD = () => Promise.resolve().then(function () { return search_post$3; });
const _lazy_qwl1yl = () => Promise.resolve().then(function () { return sitesetting_get$3; });
const _lazy_VJNikz = () => Promise.resolve().then(function () { return subcategorycontent_post$3; });
const _lazy_hPg4LI = () => Promise.resolve().then(function () { return latestpost_post$5; });
const _lazy_LhxTZ2 = () => Promise.resolve().then(function () { return popularpost_post$3; });
const _lazy_HsPPL7 = () => Promise.resolve().then(function () { return tagcontents_post$3; });
const _lazy_6O3yTT = () => Promise.resolve().then(function () { return allvideo_get$3; });
const _lazy_X5Zc5t = () => Promise.resolve().then(function () { return categoryvideos_post$3; });
const _lazy_485cQh = () => Promise.resolve().then(function () { return singlevideo_post$3; });
const _lazy_vP7xla = () => Promise.resolve().then(function () { return commonads_post$1; });
const _lazy_l6SksO = () => Promise.resolve().then(function () { return getauthorpost_post$1; });
const _lazy_rh86JF = () => Promise.resolve().then(function () { return breaking_get$1; });
const _lazy_kOe4SM = () => Promise.resolve().then(function () { return categorycontent_post$3; });
const _lazy_PYqToA = () => Promise.resolve().then(function () { return latestpost_post$3; });
const _lazy_sN0yog = () => Promise.resolve().then(function () { return alllatestpost_get$1; });
const _lazy_uQeHIl = () => Promise.resolve().then(function () { return firstrightcatcontent_post$1; });
const _lazy_5cnnGh = () => Promise.resolve().then(function () { return getinsidemorenews_post$1; });
const _lazy_CMVL5X = () => Promise.resolve().then(function () { return moredetailcontents_post$1; });
const _lazy_ta1g06 = () => Promise.resolve().then(function () { return moreinsidemorenews_post$1; });
const _lazy_g96VNl = () => Promise.resolve().then(function () { return mreletedcontents_post$1; });
const _lazy_npZl0j = () => Promise.resolve().then(function () { return postdetail_post$1; });
const _lazy_4Wd1bh = () => Promise.resolve().then(function () { return albumcategoryphotos_post$1; });
const _lazy_d4kMEV = () => Promise.resolve().then(function () { return albumdetail_post$1; });
const _lazy_TfpSID = () => Promise.resolve().then(function () { return allcategory_get$1; });
const _lazy_eQQ3r9 = () => Promise.resolve().then(function () { return banglatime_get$1; });
const _lazy_iUIZPy = () => Promise.resolve().then(function () { return headercategory_get$1; });
const _lazy_GcCzpH = () => Promise.resolve().then(function () { return art_get$1; });
const _lazy_94p5jq = () => Promise.resolve().then(function () { return campus_get$1; });
const _lazy_XbRsrH = () => Promise.resolve().then(function () { return career_get$1; });
const _lazy_xjc8wA = () => Promise.resolve().then(function () { return categorycontent_post$1; });
const _lazy_HffuFw = () => Promise.resolve().then(function () { return child_get$1; });
const _lazy_qtyQ3G = () => Promise.resolve().then(function () { return corporate_get$1; });
const _lazy_du47jQ = () => Promise.resolve().then(function () { return counter_get$1; });
const _lazy_jFPkK0 = () => Promise.resolve().then(function () { return crime_get$1; });
const _lazy_ibJIha = () => Promise.resolve().then(function () { return economy_get$1; });
const _lazy_QyR4Uh = () => Promise.resolve().then(function () { return education_get$1; });
const _lazy_vh3mMY = () => Promise.resolve().then(function () { return entertainment_get$1; });
const _lazy_mzn9fp = () => Promise.resolve().then(function () { return galleryphoto_get$1; });
const _lazy_SMhIX2 = () => Promise.resolve().then(function () { return health_get$1; });
const _lazy_aJUYez = () => Promise.resolve().then(function () { return international_get$1; });
const _lazy_Hzddeh = () => Promise.resolve().then(function () { return lawcourt_get$1; });
const _lazy_FJh1hX = () => Promise.resolve().then(function () { return lifestyle_get$1; });
const _lazy_fTvjcT = () => Promise.resolve().then(function () { return literature_get$1; });
const _lazy_yl9Lfa = () => Promise.resolve().then(function () { return motivation_get$1; });
const _lazy_JPpiK4 = () => Promise.resolve().then(function () { return national_get$1; });
const _lazy_I61oGR = () => Promise.resolve().then(function () { return opinion_get$1; });
const _lazy_LnEw0r = () => Promise.resolve().then(function () { return politics_get$1; });
const _lazy_YQ7gdJ = () => Promise.resolve().then(function () { return positioncontent_post$1; });
const _lazy_3o25Op = () => Promise.resolve().then(function () { return probash_get$1; });
const _lazy_1HIgk3 = () => Promise.resolve().then(function () { return religion_get$1; });
const _lazy_tr78fh = () => Promise.resolve().then(function () { return saradesh_get$1; });
const _lazy_wZd9xO = () => Promise.resolve().then(function () { return specialarticle_get$1; });
const _lazy_JF4qC3 = () => Promise.resolve().then(function () { return specialreport_get$1; });
const _lazy_Tr3673 = () => Promise.resolve().then(function () { return specialtopcontent_get$1; });
const _lazy_205ZkS = () => Promise.resolve().then(function () { return sports_get$1; });
const _lazy_T3hTnf = () => Promise.resolve().then(function () { return technology_get$1; });
const _lazy_toxEUg = () => Promise.resolve().then(function () { return videofeature_post$1; });
const _lazy_xDNuO1 = () => Promise.resolve().then(function () { return ogimage_post$1; });
const _lazy_5Hmbl1 = () => Promise.resolve().then(function () { return search_post$1; });
const _lazy_5x6soJ = () => Promise.resolve().then(function () { return sitesetting_get$1; });
const _lazy_CBd2ei = () => Promise.resolve().then(function () { return subcategorycontent_post$1; });
const _lazy_fYP0c0 = () => Promise.resolve().then(function () { return latestpost_post$1; });
const _lazy_aYQMYt = () => Promise.resolve().then(function () { return popularpost_post$1; });
const _lazy_VED4XN = () => Promise.resolve().then(function () { return tagcontents_post$1; });
const _lazy_35J76B = () => Promise.resolve().then(function () { return allvideo_get$1; });
const _lazy_8sfDai = () => Promise.resolve().then(function () { return categoryvideos_post$1; });
const _lazy_ozLuZc = () => Promise.resolve().then(function () { return latestvideo_post$1; });
const _lazy_RAExFr = () => Promise.resolve().then(function () { return latestvideos_get$1; });
const _lazy_NCkvyT = () => Promise.resolve().then(function () { return singlevideo_post$1; });
const _lazy_cSIFZd = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/prismaapi/adsmanager/commonads', handler: _lazy_zOaAtF, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/author/getauthorpost', handler: _lazy_IV5t7f, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/breakingnews/breaking', handler: _lazy_XS5fr8, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/category/categorycontent', handler: _lazy_f3u8le, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/collection/latestpost', handler: _lazy_7xMCwz, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/alllatestpost', handler: _lazy_HyX6I4, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/detail/firstrightcatcontent', handler: _lazy_YpNJT4, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/getinsidemorenews', handler: _lazy_03P82S, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/moredetailcontents', handler: _lazy_gI96KC, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/moreinsidemorenews', handler: _lazy_4DURjb, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/mreletedcontents', handler: _lazy_R518Kh, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/detail/postdetail', handler: _lazy_7kmHuj, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/gallery/albumcategoryphotos', handler: _lazy_pmM96S, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/gallery/albumdetail', handler: _lazy_nudSwn, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/header/allcategory', handler: _lazy_Iyx9gc, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/header/banglatime', handler: _lazy_iMMO25, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/header/headercategory', handler: _lazy_4zQqH4, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/art', handler: _lazy_2DNMyh, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/campus', handler: _lazy_91PK7o, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/career', handler: _lazy_zU8AWg, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/categorycontent', handler: _lazy_JmpoiN, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/home/child', handler: _lazy_XnqXZw, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/corporate', handler: _lazy_S1cYoX, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/counter', handler: _lazy_gbouOX, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/crime', handler: _lazy_CxJtlA, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/economy', handler: _lazy_paa5yA, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/education', handler: _lazy_ZCIJ0q, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/entertainment', handler: _lazy_yUpXvy, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/galleryphoto', handler: _lazy_oSdM2o, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/health', handler: _lazy_YcscI3, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/international', handler: _lazy_Ia4N7m, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/lawcourt', handler: _lazy_kXzK4n, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/lifestyle', handler: _lazy_olfjTz, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/literature', handler: _lazy_8hunHo, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/motivation', handler: _lazy_zmqEUt, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/national', handler: _lazy_OLdL98, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/opinion', handler: _lazy_TOCPeD, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/politics', handler: _lazy_vLKARi, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/positioncontent', handler: _lazy_ALGuhU, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/home/probash', handler: _lazy_D750VH, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/religion', handler: _lazy_2cHMnL, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/saradesh', handler: _lazy_lK1RoL, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/specialarticle', handler: _lazy_mNKUQq, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/specialreport', handler: _lazy_77Nht6, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/specialtopcontent', handler: _lazy_zX73wo, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/sports', handler: _lazy_DPutjn, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/technology', handler: _lazy_r7Gs2O, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/home/videofeature', handler: _lazy_dexJjr, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/ogimage/ogimage', handler: _lazy_3bQJLG, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/search/search', handler: _lazy_UArCMD, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/sitesetting/sitesetting', handler: _lazy_qwl1yl, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/subcategory/subcategorycontent', handler: _lazy_VJNikz, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/tabs/latestpost', handler: _lazy_hPg4LI, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/tabs/popularpost', handler: _lazy_LhxTZ2, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/tag/tagcontents', handler: _lazy_HsPPL7, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/video/allvideo', handler: _lazy_6O3yTT, lazy: true, middleware: false, method: "get" },
  { route: '/api/prismaapi/video/categoryvideos', handler: _lazy_X5Zc5t, lazy: true, middleware: false, method: "post" },
  { route: '/api/prismaapi/video/singlevideo', handler: _lazy_485cQh, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/adsmanager/commonads', handler: _lazy_vP7xla, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/author/getauthorpost', handler: _lazy_l6SksO, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/breakingnews/breaking', handler: _lazy_rh86JF, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/category/categorycontent', handler: _lazy_kOe4SM, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/collection/latestpost', handler: _lazy_PYqToA, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/alllatestpost', handler: _lazy_sN0yog, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/detail/firstrightcatcontent', handler: _lazy_uQeHIl, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/getinsidemorenews', handler: _lazy_5cnnGh, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/moredetailcontents', handler: _lazy_CMVL5X, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/moreinsidemorenews', handler: _lazy_ta1g06, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/mreletedcontents', handler: _lazy_g96VNl, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/detail/postdetail', handler: _lazy_npZl0j, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/gallery/albumcategoryphotos', handler: _lazy_4Wd1bh, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/gallery/albumdetail', handler: _lazy_d4kMEV, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/header/allcategory', handler: _lazy_TfpSID, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/header/banglatime', handler: _lazy_eQQ3r9, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/header/headercategory', handler: _lazy_iUIZPy, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/art', handler: _lazy_GcCzpH, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/campus', handler: _lazy_94p5jq, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/career', handler: _lazy_XbRsrH, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/categorycontent', handler: _lazy_xjc8wA, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/home/child', handler: _lazy_HffuFw, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/corporate', handler: _lazy_qtyQ3G, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/counter', handler: _lazy_du47jQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/crime', handler: _lazy_jFPkK0, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/economy', handler: _lazy_ibJIha, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/education', handler: _lazy_QyR4Uh, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/entertainment', handler: _lazy_vh3mMY, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/galleryphoto', handler: _lazy_mzn9fp, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/health', handler: _lazy_SMhIX2, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/international', handler: _lazy_aJUYez, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/lawcourt', handler: _lazy_Hzddeh, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/lifestyle', handler: _lazy_FJh1hX, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/literature', handler: _lazy_fTvjcT, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/motivation', handler: _lazy_yl9Lfa, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/national', handler: _lazy_JPpiK4, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/opinion', handler: _lazy_I61oGR, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/politics', handler: _lazy_LnEw0r, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/positioncontent', handler: _lazy_YQ7gdJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/home/probash', handler: _lazy_3o25Op, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/religion', handler: _lazy_1HIgk3, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/saradesh', handler: _lazy_tr78fh, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/specialarticle', handler: _lazy_wZd9xO, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/specialreport', handler: _lazy_JF4qC3, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/specialtopcontent', handler: _lazy_Tr3673, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/sports', handler: _lazy_205ZkS, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/technology', handler: _lazy_T3hTnf, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/home/videofeature', handler: _lazy_toxEUg, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/ogimage/ogimage', handler: _lazy_xDNuO1, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/search/search', handler: _lazy_5Hmbl1, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/sitesetting/sitesetting', handler: _lazy_5x6soJ, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/subcategory/subcategorycontent', handler: _lazy_CBd2ei, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/tabs/latestpost', handler: _lazy_fYP0c0, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/tabs/popularpost', handler: _lazy_aYQMYt, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/tag/tagcontents', handler: _lazy_VED4XN, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/video/allvideo', handler: _lazy_35J76B, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/video/categoryvideos', handler: _lazy_8sfDai, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/video/latestvideo', handler: _lazy_ozLuZc, lazy: true, middleware: false, method: "post" },
  { route: '/api/v1/video/latestvideos', handler: _lazy_RAExFr, lazy: true, middleware: false, method: "get" },
  { route: '/api/v1/video/singlevideo', handler: _lazy_NCkvyT, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_cSIFZd, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_cSIFZd, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const prisma = global.prisma || new PrismaClient();
global.prisma = prisma;

const commonads_post$2 = defineEventHandler(async (event) => {
  adsmoment.locale("en");
  const getBody = await readBody(event);
  const currentDate = adsmoment().utcOffset("+0600").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  const ads = await prisma.bn_ads.findFirst({
    where: {
      page: parseInt(getBody == null ? void 0 : getBody.page),
      position: parseInt(getBody == null ? void 0 : getBody.position),
      status: 1,
      end_time: {
        gte: currentDate
      }
    },
    select: {
      id: true,
      type: true,
      page: true,
      status: true,
      position: true,
      dfp_header_code: true,
      code: true,
      desktop_image_path: true,
      mobile_image_path: true,
      external_link: true,
      start_time: true,
      end_time: true
    }
  });
  return ads;
});

const commonads_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: commonads_post$2
});

const getauthorpost_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const author = await prisma.authors.findFirst({
    where: {
      author_slug: getBody == null ? void 0 : getBody.author_slug,
      deletable: 1
    }
  });
  if (author) {
    const contents = await prisma.bn_contents.findMany({
      where: {
        author_slugs: author == null ? void 0 : author.author_slug,
        status: 1,
        deletable: 1
      },
      take: getBody == null ? void 0 : getBody.take,
      orderBy: {
        content_id: "desc"
      }
    });
    const data = [];
    if ((contents == null ? void 0 : contents.length) > 0) {
      for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        });
      }
    }
    return {
      author: {
        author_name_bn: author == null ? void 0 : author.author_name_bn,
        author_slug: author == null ? void 0 : author.author_slug
      },
      content: data
    };
  }
});

const getauthorpost_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getauthorpost_post$2
});

const breaking_get$2 = defineEventHandler(async (event) => {
  adsmoment().locale("en");
  const currentDate = adsmoment().utcOffset("+0600").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  const breakingNews = await prisma.bn_breaking_news.findMany({
    where: {
      expired_time: {
        // Greater Then "gte" & Less Then "lte" date or string
        gte: currentDate
      }
    },
    select: {
      id: true,
      news_title: true,
      news_link: true,
      expired_time: true
    },
    orderBy: {
      id: "desc"
    }
  });
  return breakingNews;
});

const breaking_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: breaking_get$2
});

const categorycontent_post$6 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const getCategory = await prisma.bn_categories.findFirst({
    where: {
      cat_slug: getBody == null ? void 0 : getBody.cat_slug,
      // Assign Cat slug
      status: 1,
      deletable: 1
    }
  });
  if (getCategory) {
    const subcategory = await prisma.bn_subcategories.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      }
    });
    const getCategoryContents = await prisma.bn_contents.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: getBody == null ? void 0 : getBody.take,
      // Assign how many content you want to get,
      skip: getBody == null ? void 0 : getBody.skip
    });
    const data = [];
    if (getCategoryContents && (getCategoryContents == null ? void 0 : getCategoryContents.length) > 0) {
      for (let i = 0; i < (getCategoryContents == null ? void 0 : getCategoryContents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = getCategoryContents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory2 = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = getCategoryContents[i]) == null ? void 0 : _b.subcat_id
            // Assign Category ID 
          }
        });
        data.push({
          content_id: (_c = getCategoryContents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = getCategoryContents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = getCategoryContents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = getCategoryContents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = getCategoryContents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = getCategoryContents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = getCategoryContents[i]) == null ? void 0 : _i.updated_at,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory2 == null ? void 0 : subcategory2.subcat_slug
          // post_time: moment(getCategoryContents[i]?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return {
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
      },
      subcat: subcategory,
      contents: data
    };
  }
});

const categorycontent_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categorycontent_post$6
});

const latestpost_post$6 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: getBody == null ? void 0 : getBody.take,
    skip: getBody == null ? void 0 : getBody.skip
  });
  const data = [];
  if (contents && (contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          // Assign Category ID 
        }
      });
      data.push({
        content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
        created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
        updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      });
    }
    return data;
  }
});

const latestpost_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestpost_post$6
});

const alllatestpost_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const data = [];
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 20
  });
  for (let i = 0; i < 20; i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: contents[i].cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        subcat_id: (_a = contents[i]) == null ? void 0 : _a.subcat_id
      }
    });
    data.push({
      content_id: (_b = contents[i]) == null ? void 0 : _b.content_id,
      content_type: (_c = contents[i]) == null ? void 0 : _c.content_type,
      content_heading: (_d = contents[i]) == null ? void 0 : _d.content_heading,
      img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return data;
});

const alllatestpost_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: alllatestpost_get$2
});

const firstrightcatcontent_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const getContents = await prisma.bn_contents.findMany({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      NOT: {
        content_id: {
          equals: parseInt(getBody == null ? void 0 : getBody.content_id)
        }
      },
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 5
  });
  const data = [];
  for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = getContents[i]) == null ? void 0 : _a.cat_id
      },
      select: {
        cat_name_bn: true,
        cat_slug: true
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        subcat_id: (_b = getContents[i]) == null ? void 0 : _b.subcat_id
      }
    });
    data.push({
      content_id: (_c = getContents[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = getContents[i]) == null ? void 0 : _d.content_type,
      img_bg_path: (_e = getContents[i]) == null ? void 0 : _e.img_bg_path,
      content_heading: (_f = getContents[i]) == null ? void 0 : _f.content_heading,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return {
    contents: data
  };
});

const firstrightcatcontent_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: firstrightcatcontent_post$2
});

const getinsidemorenews_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const getInsideMoreNews = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          equals: parseInt(getBody == null ? void 0 : getBody.content_id)
        }
      },
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 7
  });
  const insideMoreNews = [];
  if ((getInsideMoreNews == null ? void 0 : getInsideMoreNews.length) > 0) {
    for (let i = 0; i < (getInsideMoreNews == null ? void 0 : getInsideMoreNews.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = getInsideMoreNews[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: (_b = getInsideMoreNews[i]) == null ? void 0 : _b.cat_id
          // Assign Category ID 
        }
      });
      insideMoreNews.push({
        content_id: (_c = getInsideMoreNews[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = getInsideMoreNews[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = getInsideMoreNews[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = getInsideMoreNews[i]) == null ? void 0 : _f.content_heading,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      });
    }
  }
  return insideMoreNews;
});

const getinsidemorenews_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getinsidemorenews_post$2
});

const moredetailcontents_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const getBody = await readBody(event);
  const getmoredetailsContent = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  for (let i = 0; i < (getmoredetailsContent == null ? void 0 : getmoredetailsContent.length); i++) {
    if (((_a = getmoredetailsContent[i]) == null ? void 0 : _a.content_id) !== parseInt(getBody == null ? void 0 : getBody.content_id)) {
      const getCategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_b = getmoredetailsContent[i]) == null ? void 0 : _b.cat_id
        }
      });
      const getSubcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: (_c = getmoredetailsContent[i]) == null ? void 0 : _c.cat_id
        }
      });
      const getAuthor = await prisma.authors.findFirst({
        where: {
          author_slug: (_e = (_d = getmoredetailsContent[i]) == null ? void 0 : _d.author_slugs) == null ? void 0 : _e.toString()
        }
      });
      data.push({
        content_id: (_f = getmoredetailsContent[i]) == null ? void 0 : _f.content_id,
        content_brief: (_g = getmoredetailsContent[i]) == null ? void 0 : _g.content_brief,
        content_details: (_h = getmoredetailsContent[i]) == null ? void 0 : _h.content_details,
        content_heading: (_i = getmoredetailsContent[i]) == null ? void 0 : _i.content_heading,
        content_sub_heading: (_j = getmoredetailsContent[i]) == null ? void 0 : _j.content_sub_heading,
        created_at: (_k = getmoredetailsContent[i]) == null ? void 0 : _k.created_at,
        updated_at: (_l = getmoredetailsContent[i]) == null ? void 0 : _l.updated_at,
        img_bg_path: (_m = getmoredetailsContent[i]) == null ? void 0 : _m.img_bg_path,
        content_type: (_n = getmoredetailsContent[i]) == null ? void 0 : _n.content_type,
        meta_keywords: (_o = getmoredetailsContent[i]) == null ? void 0 : _o.meta_keywords,
        tags: (_p = getmoredetailsContent[i]) == null ? void 0 : _p.tags,
        category: {
          cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
          cat_id: getCategory == null ? void 0 : getCategory.cat_id,
          cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
        },
        subcategory: {
          subcat_name_bn: getSubcategory == null ? void 0 : getSubcategory.subcat_name_bn,
          subcat_id: getSubcategory == null ? void 0 : getSubcategory.subcat_id,
          subcat_slug: getSubcategory == null ? void 0 : getSubcategory.subcat_slug
        },
        author: {
          author_id: getAuthor == null ? void 0 : getAuthor.author_id,
          author_name_bn: getAuthor == null ? void 0 : getAuthor.author_name_bn,
          author_slug: getAuthor == null ? void 0 : getAuthor.author_slug
        }
      });
    }
  }
  return data;
});

const moredetailcontents_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: moredetailcontents_post$2
});

const moreinsidemorenews_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const insidemorenews = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          in: [parseInt(getBody == null ? void 0 : getBody.currentPostDetailId), parseInt(getBody == null ? void 0 : getBody.morePostId)]
        }
      },
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 5
  });
  const data = [];
  for (let i = 0; i < (insidemorenews == null ? void 0 : insidemorenews.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = insidemorenews[i]) == null ? void 0 : _a.cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: (_b = insidemorenews[i]) == null ? void 0 : _b.cat_id
      }
    });
    data.push({
      content_id: (_c = insidemorenews[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = insidemorenews[i]) == null ? void 0 : _d.content_type,
      content_heading: (_e = insidemorenews[i]) == null ? void 0 : _e.content_heading,
      img_bg_path: (_f = insidemorenews[i]) == null ? void 0 : _f.img_bg_path,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return data;
});

const moreinsidemorenews_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: moreinsidemorenews_post$2
});

const mreletedcontents_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const getBody = await readBody(event);
  const getMreletedContents = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          in: getBody == null ? void 0 : getBody.readedids
        }
      },
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 4,
    skip: 1
  });
  const data = [];
  for (let i = 0; i < (getMreletedContents == null ? void 0 : getMreletedContents.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = getMreletedContents[i]) == null ? void 0 : _a.cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: (_b = getMreletedContents[i]) == null ? void 0 : _b.cat_id
      }
    });
    data.push({
      content_id: (_c = getMreletedContents[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = getMreletedContents[i]) == null ? void 0 : _d.content_type,
      cat_id: (_e = getMreletedContents[i]) == null ? void 0 : _e.cat_id,
      content_heading: (_f = getMreletedContents[i]) == null ? void 0 : _f.content_heading,
      img_bg_path: (_g = getMreletedContents[i]) == null ? void 0 : _g.img_bg_path,
      category: {
        cat_name_bn: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug
      },
      subcategory: {
        subcat_name_bn: subcategory == null ? void 0 : subcategory.subcat_name_bn,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      }
    });
  }
  return data;
});

const mreletedcontents_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: mreletedcontents_post$2
});

const postdetail_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __;
  const getBody = await readBody(event);
  const config = useRuntimeConfig();
  const getdetailsContent = await prisma.bn_contents.findFirst({
    where: {
      content_id: parseInt(getBody == null ? void 0 : getBody.content_id),
      status: 1,
      deletable: 1
    }
  });
  if (getdetailsContent) {
    await prisma.bn_contents.update({
      where: {
        content_id: parseInt(getBody == null ? void 0 : getBody.content_id)
      },
      data: {
        total_hit: {
          increment: 1
        }
      }
    });
    const getCategory = await prisma.bn_categories.findFirst({
      where: {
        cat_id: getdetailsContent == null ? void 0 : getdetailsContent.cat_id
      }
    });
    const getSubcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id
      }
    });
    const getAuthor = await prisma.authors.findFirst({
      where: {
        author_slug: (_a = getdetailsContent == null ? void 0 : getdetailsContent.author_slugs) == null ? void 0 : _a.toString()
      },
      select: {
        author_id: true,
        author_name_bn: true,
        author_slug: true,
        img_path: true
      }
    });
    const detailsContent = {
      // ogImage: genretedOG,
      content_id: getdetailsContent == null ? void 0 : getdetailsContent.content_id,
      content_type: getdetailsContent == null ? void 0 : getdetailsContent.content_type,
      cat_id: getdetailsContent == null ? void 0 : getdetailsContent.cat_id,
      subcat_id: getdetailsContent == null ? void 0 : getdetailsContent.subcat_id,
      special_cat_id: getdetailsContent == null ? void 0 : getdetailsContent.special_cat_id,
      country_id: getdetailsContent == null ? void 0 : getdetailsContent.country_id,
      division_id: getdetailsContent == null ? void 0 : getdetailsContent.division_id,
      district_id: getdetailsContent == null ? void 0 : getdetailsContent.district_id,
      upozilla_id: getdetailsContent == null ? void 0 : getdetailsContent.upozilla_id,
      content_heading: getdetailsContent == null ? void 0 : getdetailsContent.content_heading,
      content_sub_heading: getdetailsContent == null ? void 0 : getdetailsContent.content_sub_heading,
      author_slugs: getdetailsContent == null ? void 0 : getdetailsContent.author_slugs,
      content_brief: getdetailsContent == null ? void 0 : getdetailsContent.content_brief,
      content_details: getdetailsContent == null ? void 0 : getdetailsContent.content_details,
      img_xs_path: getdetailsContent == null ? void 0 : getdetailsContent.img_xs_path,
      img_sm_path: getdetailsContent == null ? void 0 : getdetailsContent.img_sm_path,
      img_sm_caption: getdetailsContent == null ? void 0 : getdetailsContent.img_sm_caption,
      img_bg_path: getdetailsContent == null ? void 0 : getdetailsContent.img_bg_path,
      img_bg_caption: getdetailsContent == null ? void 0 : getdetailsContent.img_bg_caption,
      og_image: ((_b = config == null ? void 0 : config.public) == null ? void 0 : _b.apiUrl) + (getdetailsContent == null ? void 0 : getdetailsContent.og_image),
      tags: getdetailsContent == null ? void 0 : getdetailsContent.tags,
      meta_keywords: getdetailsContent == null ? void 0 : getdetailsContent.meta_keywords,
      created_at: getdetailsContent == null ? void 0 : getdetailsContent.created_at,
      updated_at: getdetailsContent == null ? void 0 : getdetailsContent.updated_at,
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
      },
      subcategory: {
        subcat_name_bn: getSubcategory == null ? void 0 : getSubcategory.subcat_name_bn,
        subcat_id: getSubcategory == null ? void 0 : getSubcategory.subcat_id,
        subcat_slug: getSubcategory == null ? void 0 : getSubcategory.subcat_slug
      },
      author: {
        author_id: getAuthor == null ? void 0 : getAuthor.author_id,
        author_name_bn: getAuthor == null ? void 0 : getAuthor.author_name_bn,
        author_slug: getAuthor == null ? void 0 : getAuthor.author_slug,
        img_path: getAuthor == null ? void 0 : getAuthor.img_path
      }
      // firstrightcatcontent: firstrightcatcontent
    };
    const moreContents = await prisma.bn_contents.findMany({
      where: {
        NOT: {
          content_id: {
            equals: parseInt(getBody == null ? void 0 : getBody.content_id)
          }
        },
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: 3
    });
    const moreDetailContent = [];
    const mrelatedPosts = [];
    const mreletedReadIds = [detailsContent == null ? void 0 : detailsContent.content_id];
    for (let i = 0; i < (moreContents == null ? void 0 : moreContents.length); i++) {
      const getmoreContentCategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_c = moreContents[i]) == null ? void 0 : _c.cat_id
        }
      });
      const getmoreContentSubCategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_d = moreContents[i]) == null ? void 0 : _d.subcat_id
        }
      });
      const getmoreContentAuthor = await prisma.authors.findFirst({
        where: {
          author_slug: (_f = (_e = moreContents[i]) == null ? void 0 : _e.author_slugs) == null ? void 0 : _f.toString()
        },
        select: {
          author_id: true,
          author_name_bn: true,
          author_slug: true,
          img_path: true
        }
      });
      const catwisePosts = await prisma.bn_contents.findMany({
        where: {
          cat_id: (_g = moreContents[i]) == null ? void 0 : _g.cat_id,
          NOT: {
            content_id: {
              equals: (_h = moreContents[i]) == null ? void 0 : _h.content_id
            }
          },
          status: 1,
          deletable: 1
        },
        orderBy: {
          content_id: "desc"
        },
        take: 5
      });
      const catwisePost = [];
      for (let catwise = 0; catwise < (catwisePosts == null ? void 0 : catwisePosts.length); catwise++) {
        const catwisecategory = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_i = catwisePosts[catwise]) == null ? void 0 : _i.cat_id
          }
        });
        const catwisesubcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_j = catwisePosts[catwise]) == null ? void 0 : _j.subcat_id
          }
        });
        catwisePost.push({
          content_id: (_k = catwisePosts[catwise]) == null ? void 0 : _k.content_id,
          content_type: (_l = catwisePosts[catwise]) == null ? void 0 : _l.content_type,
          content_heading: (_m = catwisePosts[catwise]) == null ? void 0 : _m.content_heading,
          img_bg_path: (_n = catwisePosts[catwise]) == null ? void 0 : _n.img_bg_path,
          cat_slug: catwisecategory == null ? void 0 : catwisecategory.cat_slug,
          subcat_slug: catwisesubcategory == null ? void 0 : catwisesubcategory.subcat_slug
        });
      }
      mreletedReadIds.push((_o = moreContents[i]) == null ? void 0 : _o.content_id);
      const readpost = await prisma.bn_contents.findMany({
        where: {
          status: 1,
          deletable: 1,
          NOT: {
            content_id: {
              in: mreletedReadIds
            }
          }
        },
        orderBy: {
          content_id: "desc"
        },
        take: 4,
        skip: 1
      });
      const mrelPostArray = [];
      for (let pb = 0; pb < (readpost == null ? void 0 : readpost.length); pb++) {
        const mrCategory = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_p = readpost[pb]) == null ? void 0 : _p.cat_id
          }
        });
        const mrsubCategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_q = readpost[pb]) == null ? void 0 : _q.subcat_id
          }
        });
        mrelPostArray.push({
          content_id: (_r = readpost[pb]) == null ? void 0 : _r.content_id,
          content_type: (_s = readpost[pb]) == null ? void 0 : _s.content_type,
          content_heading: (_t = readpost[pb]) == null ? void 0 : _t.content_heading,
          img_bg_path: (_u = readpost[pb]) == null ? void 0 : _u.img_bg_path,
          cat_slug: mrCategory == null ? void 0 : mrCategory.cat_slug,
          subcat_slug: mrsubCategory == null ? void 0 : mrsubCategory.subcat_slug
        });
      }
      mrelatedPosts.push(mrelPostArray);
      moreDetailContent.push({
        // ogImage: genretedOG,
        content_id: (_v = moreContents[i]) == null ? void 0 : _v.content_id,
        content_type: (_w = moreContents[i]) == null ? void 0 : _w.content_type,
        cat_id: (_x = moreContents[i]) == null ? void 0 : _x.cat_id,
        subcat_id: (_y = moreContents[i]) == null ? void 0 : _y.subcat_id,
        special_cat_id: (_z = moreContents[i]) == null ? void 0 : _z.special_cat_id,
        country_id: (_A = moreContents[i]) == null ? void 0 : _A.country_id,
        division_id: (_B = moreContents[i]) == null ? void 0 : _B.division_id,
        district_id: (_C = moreContents[i]) == null ? void 0 : _C.district_id,
        upozilla_id: (_D = moreContents[i]) == null ? void 0 : _D.upozilla_id,
        content_heading: (_E = moreContents[i]) == null ? void 0 : _E.content_heading,
        content_sub_heading: (_F = moreContents[i]) == null ? void 0 : _F.content_sub_heading,
        author_slugs: (_G = moreContents[i]) == null ? void 0 : _G.author_slugs,
        content_brief: (_H = moreContents[i]) == null ? void 0 : _H.content_brief,
        content_details: (_I = moreContents[i]) == null ? void 0 : _I.content_details,
        img_xs_path: (_J = moreContents[i]) == null ? void 0 : _J.img_xs_path,
        img_sm_path: (_K = moreContents[i]) == null ? void 0 : _K.img_sm_path,
        img_sm_caption: (_L = moreContents[i]) == null ? void 0 : _L.img_sm_caption,
        img_bg_path: (_M = moreContents[i]) == null ? void 0 : _M.img_bg_path,
        og_image: ((_N = config == null ? void 0 : config.public) == null ? void 0 : _N.apiUrl) + ((_O = moreContents[i]) == null ? void 0 : _O.og_image),
        img_bg_caption: (_P = moreContents[i]) == null ? void 0 : _P.img_bg_caption,
        tags: (_Q = moreContents[i]) == null ? void 0 : _Q.tags,
        meta_keywords: (_R = moreContents[i]) == null ? void 0 : _R.meta_keywords,
        created_at: (_S = moreContents[i]) == null ? void 0 : _S.created_at,
        updated_at: (_T = moreContents[i]) == null ? void 0 : _T.updated_at,
        category: {
          cat_name_bn: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_name_bn,
          cat_id: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_id,
          cat_slug: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_slug
        },
        subcategory: {
          subcat_name_bn: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_name_bn,
          subcat_id: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_id,
          subcat_slug: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_slug
        },
        author: {
          author_id: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_id,
          author_name_bn: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_name_bn,
          author_slug: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_slug,
          img_path: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.img_path
        },
        morecatwisePost: catwisePost,
        // cate wise post will be added,
        morereletedcontentbelow: mrelatedPosts
      });
    }
    const firstRelatedContents = [];
    const frelated = await prisma.bn_contents.findMany({
      where: {
        NOT: {
          content_id: {
            equals: detailsContent == null ? void 0 : detailsContent.content_id
          }
        },
        deletable: 1,
        status: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: 4,
      skip: 1
    });
    for (let ft = 0; ft < (frelated == null ? void 0 : frelated.length); ft++) {
      const rfcategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_U = frelated[ft]) == null ? void 0 : _U.cat_id
        }
      });
      const rfsubcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_V = frelated[ft]) == null ? void 0 : _V.subcat_id
        }
      });
      firstRelatedContents.push({
        content_id: (_W = frelated[ft]) == null ? void 0 : _W.content_id,
        content_type: (_X = frelated[ft]) == null ? void 0 : _X.content_type,
        content_heading: (_Y = frelated[ft]) == null ? void 0 : _Y.content_heading,
        content_sub_heading: (_Z = frelated[ft]) == null ? void 0 : _Z.content_sub_heading,
        img_bg_path: (__ = frelated[ft]) == null ? void 0 : __.img_bg_path,
        cat_slug: rfcategory == null ? void 0 : rfcategory.cat_slug,
        subcat_slug: rfsubcategory == null ? void 0 : rfsubcategory.subcat_slug
      });
    }
    return {
      detailsContent,
      // firstrightcatcontent: firstrightcatcontent,
      moreDetailContent,
      firstRelatedContents
    };
  }
});

const postdetail_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: postdetail_post$2
});

const albumcategoryphotos_post$2 = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const albumCategory = await prisma.p_categories.findFirst({
    where: {
      cat_slug: getBody == null ? void 0 : getBody.album_id
    }
  });
  const albums = await prisma.p_albums.findMany({
    where: {
      cat_id: albumCategory == null ? void 0 : albumCategory.cat_id,
      deletable: 1,
      status: 1
    },
    take: 12,
    orderBy: {
      album_id: "desc"
    },
    select: {
      album_id: true,
      cat_id: true,
      album_name: true
    }
  });
  const data = [];
  for (let i = 0; i < (albums == null ? void 0 : albums.length); i++) {
    const photo = await prisma.p_galleries.findFirst({
      where: {
        album_id: albums[i].album_id
      }
    });
    data.push({
      album_id: albums[i].album_id,
      album_name: albums[i].album_name,
      photo_path: photo == null ? void 0 : photo.photo,
      cat_name_bn: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
      cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug
    });
  }
  return {
    catalbums: data,
    cat_name_bn: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
    cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug
  };
});

const albumcategoryphotos_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: albumcategoryphotos_post$2
});

const albumdetail_post$2 = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const photoAlbum = await prisma.p_albums.findFirst({
    where: {
      album_id: parseInt(getBody == null ? void 0 : getBody.photo_id)
    }
  });
  const albumCategory = await prisma.p_categories.findFirst({
    where: {
      cat_id: photoAlbum == null ? void 0 : photoAlbum.cat_id
    }
  });
  const albumGallery = await prisma.p_galleries.findMany({
    where: {
      album_id: photoAlbum == null ? void 0 : photoAlbum.album_id
    }
  });
  return {
    album_name: photoAlbum == null ? void 0 : photoAlbum.album_name,
    created_at: photoAlbum == null ? void 0 : photoAlbum.created_at,
    updated_at: photoAlbum == null ? void 0 : photoAlbum.updated_at,
    short_description: photoAlbum == null ? void 0 : photoAlbum.short_description,
    cat_name: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
    cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug,
    photo_galleries: albumGallery
  };
});

const albumdetail_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: albumdetail_post$2
});

const allcategory_get$2 = defineEventHandler(async (event) => {
  const data = await prisma.bn_categories.findMany({
    where: {
      cat_type: 1,
      top_menu: 1,
      status: 1,
      deletable: 1
    },
    orderBy: {
      cat_position: "asc"
    }
  });
  return data;
});

const allcategory_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: allcategory_get$2
});

const banglatime_get$2 = defineEventHandler(async (event) => {
  const data = await $fetch("http://127.0.0.1:8000/api/get-bangla-time", {
    method: "GET"
  });
  return data;
});

const banglatime_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: banglatime_get$2
});

const headercategory_get$2 = defineEventHandler(async (event) => {
  const categoryContent = await prisma.bn_categories.findMany({
    where: {
      cat_type: 1,
      top_menu: 1,
      status: 1,
      deletable: 1
    },
    // take: 11,
    orderBy: {
      cat_position: "asc"
    }
  });
  return categoryContent;
});

const headercategory_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: headercategory_get$2
});

const art_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 43,
      // Assign Category ID
      deletable: 1,
      status: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 43
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const art_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: art_get$2
});

const campus_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 26,
      // Assign Category ID,
      status: 1,
      deletable: 1
    },
    take: 7,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 26
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const campus_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: campus_get$2
});

const career_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 12,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 8);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const career_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: career_get$2
});

const categorycontent_post$4 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  adsmoment.locale("bn-bd");
  const getBody = await readBody(event);
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    take: parseInt(getBody == null ? void 0 : getBody.take),
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id)
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id)
        }
      });
      data.push({
        content_id: (_a = categoryContent[i]) == null ? void 0 : _a.content_id,
        img_bg_path: (_b = categoryContent[i]) == null ? void 0 : _b.img_bg_path,
        content_heading: (_c = categoryContent[i]) == null ? void 0 : _c.content_heading,
        content_details: (_d = categoryContent[i]) == null ? void 0 : _d.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: adsmoment((_e = categoryContent[i]) == null ? void 0 : _e.created_at).startOf("hour").fromNow()
      });
    }
    return data;
  }
});

const categorycontent_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categorycontent_post$4
});

const child_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 27,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 27
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const child_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: child_get$2
});

const corporate_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 36,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 36
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const corporate_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: corporate_get$2
});

const counter_get$2 = defineEventHandler(async (event) => {
  const data = await $fetch("http://127.0.0.1:8000/api/home-counter", {
    method: "GET"
  });
  return data;
});

const counter_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: counter_get$2
});

const crime_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 33,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 33
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const crime_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: crime_get$2
});

const economy_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 3,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 6);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const economy_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: economy_get$2
});

const education_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 11,
      // Assign Category ID,
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 11
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const education_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: education_get$2
});

const entertainment_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 6,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 5);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const entertainment_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entertainment_get$2
});

const galleryphoto_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.p_album_positions.findFirst({
    where: {
      position_id: 1,
      status: 1,
      deletable: 1
    },
    select: {
      position_id: true,
      position_name: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 4) {
    const arrayPhotoIds = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    for (let i = 0; i < (arrayPhotoIds == null ? void 0 : arrayPhotoIds.length); i++) {
      const album = await prisma.p_albums.findFirst({
        where: {
          album_id: parseInt(arrayPhotoIds[i])
        }
      });
      const photo = await prisma.p_galleries.findFirst({
        where: {
          album_id: parseInt(arrayPhotoIds[i])
        }
      });
      const photo_category = await prisma.p_categories.findFirst({
        where: {
          cat_id: album == null ? void 0 : album.cat_id
        }
      });
      data.push({
        cat_name: photo_category == null ? void 0 : photo_category.cat_name_bn,
        cat_slug: photo_category == null ? void 0 : photo_category.cat_slug,
        album_id: album == null ? void 0 : album.album_id,
        album_name: album == null ? void 0 : album.album_name,
        short_description: album == null ? void 0 : album.short_description,
        photo_caption: photo == null ? void 0 : photo.photo_capture,
        photo: photo == null ? void 0 : photo.photo
      });
    }
  }
  return data;
});

const galleryphoto_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: galleryphoto_get$2
});

const health_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 10,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 10
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const health_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: health_get$2
});

const international_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 4,
      // assign cat id
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 6);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const international_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: international_get$2
});

const lawcourt_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 14,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 14
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const lawcourt_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: lawcourt_get$2
});

const lifestyle_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 9,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 9
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const lifestyle_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: lifestyle_get$2
});

const literature_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 8,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 8
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const literature_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: literature_get$2
});

const motivation_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 28,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 28
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const motivation_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: motivation_get$2
});

const national_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 1,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < 7; i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const national_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: national_get$2
});

const opinion_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 21,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 21
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.content_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const opinion_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: opinion_get$2
});

const politics_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 2,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 5);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const politics_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: politics_get$2
});

const positioncontent_post$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const getBody = await readBody(event);
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, getBody == null ? void 0 : getBody.take);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: content == null ? void 0 : content.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: content == null ? void 0 : content.subcat_id
        }
      });
      data.push({
        content_id: content == null ? void 0 : content.content_id,
        img_bg_path: content == null ? void 0 : content.img_bg_path,
        content_heading: content == null ? void 0 : content.content_heading,
        content_details: content == null ? void 0 : content.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: content == null ? void 0 : content.created_at
        // created_at: moment(content?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const positioncontent_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: positioncontent_post$2
});

const probash_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 23,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 23
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const probash_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: probash_get$2
});

const religion_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 17,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 17
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const religion_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: religion_get$2
});

const saradesh_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 16,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const saradesh_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: saradesh_get$2
});

const specialarticle_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 25,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 25
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const specialarticle_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialarticle_get$2
});

const specialreport_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 30,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = categoryContent[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = categoryContent[i]) == null ? void 0 : _b.subcat_id
        }
      });
      data.push({
        content_id: (_c = categoryContent[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = categoryContent[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = categoryContent[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = categoryContent[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = categoryContent[i]) == null ? void 0 : _g.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = categoryContent[i]) == null ? void 0 : _h.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
  }
  return data;
});

const specialreport_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialreport_get$2
});

const specialtopcontent_get$2 = defineEventHandler(async (event) => {
  const data = await $fetch("http://127.0.0.1:8000/api/specialcontent", {
    method: "GET"
  });
  return data;
});

const specialtopcontent_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialtopcontent_get$2
});

const sports_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 5,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const sports_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sports_get$2
});

const technology_get$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 7,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 7
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const technology_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: technology_get$2
});

const videofeature_post$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const getBody = await readBody(event);
  const videoPosition = await prisma.bn_video_positions.findFirst({
    where: {
      position_id: 1,
      deletable: 1
    }
  });
  const data = [];
  if (videoPosition && ((_a = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _a.length) > 0) {
    const vdieoPositionArray = (_b = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _b.split(",");
    const getVideoIds = vdieoPositionArray == null ? void 0 : vdieoPositionArray.splice(0, parseInt(getBody == null ? void 0 : getBody.take));
    for (let i = 0; i < (getVideoIds == null ? void 0 : getVideoIds.length); i++) {
      const video = await prisma.bn_videos.findFirst({
        where: {
          id: parseInt(getVideoIds[i]),
          status: 1,
          deletable: 1
        }
      });
      const category = await prisma.bn_video_categories.findFirst({
        where: {
          id: parseInt(video == null ? void 0 : video.cat_id)
        },
        select: {
          id: true,
          slug: true,
          name_bn: true
        }
      });
      data.push({
        id: video == null ? void 0 : video.id,
        cat_id: category == null ? void 0 : category.id,
        slug: category == null ? void 0 : category.slug,
        type: video == null ? void 0 : video.type,
        title: video == null ? void 0 : video.title,
        img_bg_path: video == null ? void 0 : video.img_bg_path,
        img_sm_path: video == null ? void 0 : video.img_sm_path,
        code: video == null ? void 0 : video.code,
        is_live: video == null ? void 0 : video.is_live,
        target: video == null ? void 0 : video.target
      });
    }
    return data;
  }
});

const videofeature_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: videofeature_post$2
});

const ogimage_post$2 = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const config = useRuntimeConfig();
  const ogImageBanner = await prisma.site_settings.findFirst({
    where: {
      id: 1
    },
    select: {
      post_ogimage: true
    }
  });
  let watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner == null ? void 0 : ogImageBanner.post_ogimage}`);
  const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${getBody == null ? void 0 : getBody.img_bg_path}`);
  const watermark = watermarkImage.resize(750, jimp.AUTO);
  image.composite(watermark, 0, 337, {
    mode: jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 1
  });
  const ogimage = await image.getBase64Async(jimp.AUTO);
  return ogimage;
});

const ogimage_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ogimage_post$2
});

const search_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const getBody = await readBody(event);
  if ((getBody == null ? void 0 : getBody.keyword) !== "") {
    const getContent = await prisma.bn_contents.findMany({
      where: {
        OR: [
          {
            content_heading: {
              contains: getBody == null ? void 0 : getBody.keyword
            }
          }
        ],
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: parseInt(getBody == null ? void 0 : getBody.take)
    });
    const data = [];
    for (let c = 0; c < (getContent == null ? void 0 : getContent.length); c++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = getContent[c]) == null ? void 0 : _a.cat_id
        },
        select: {
          cat_id: true,
          cat_name_bn: true,
          cat_slug: true
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = getContent[c]) == null ? void 0 : _b.subcat_id
        },
        select: {
          subcat_id: true,
          subcat_name_bn: true,
          subcat_slug: true
        }
      });
      data.push({
        content_id: (_c = getContent[c]) == null ? void 0 : _c.content_id,
        content_type: (_d = getContent[c]) == null ? void 0 : _d.content_type,
        content_heading: (_e = getContent[c]) == null ? void 0 : _e.content_heading,
        content_details: (_f = getContent[c]) == null ? void 0 : _f.content_details,
        img_bg_path: (_g = getContent[c]) == null ? void 0 : _g.img_bg_path,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = getContent[c]) == null ? void 0 : _h.created_at,
        updated_at: (_i = getContent[c]) == null ? void 0 : _i.updated_at
      });
    }
    return data;
  } else {
    const getContent = await prisma.bn_contents.findMany({
      orderBy: {
        content_id: "desc"
      },
      take: parseInt(getBody == null ? void 0 : getBody.take)
    });
    const data = [];
    for (let c = 0; c < (getContent == null ? void 0 : getContent.length); c++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_j = getContent[c]) == null ? void 0 : _j.cat_id
        },
        select: {
          cat_id: true,
          cat_name_bn: true,
          cat_slug: true
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: category == null ? void 0 : category.cat_id
        },
        select: {
          subcat_id: true,
          subcat_name_bn: true,
          subcat_slug: true
        }
      });
      data.push({
        content_id: (_k = getContent[c]) == null ? void 0 : _k.content_id,
        content_heading: (_l = getContent[c]) == null ? void 0 : _l.content_heading,
        content_details: (_m = getContent[c]) == null ? void 0 : _m.content_details,
        img_bg_path: (_n = getContent[c]) == null ? void 0 : _n.img_bg_path,
        category: {
          cat_id: category == null ? void 0 : category.cat_id,
          cat_name_bn: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug
        },
        subcategory: {
          cat_id: subcategory == null ? void 0 : subcategory.subcat_id,
          subcat_id: subcategory == null ? void 0 : subcategory.subcat_id,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        },
        created_at: (_o = getContent[c]) == null ? void 0 : _o.created_at,
        updated_at: (_p = getContent[c]) == null ? void 0 : _p.updated_at
      });
    }
    return data;
  }
});

const search_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: search_post$2
});

const sitesetting_get$2 = defineEventHandler(async (event) => {
  const ads = await prisma.site_settings.findFirst({
    where: {
      id: 1
    },
    select: {
      logo: true,
      title: true,
      meta_keywords: true,
      meta_description: true,
      og_image: true,
      facebook: true,
      youtube: true,
      instagram: true,
      linkedin: true,
      twitter: true,
      editor_meta: true,
      address: true,
      favicon: true
    }
  });
  return ads;
});

const sitesetting_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitesetting_get$2
});

const subcategorycontent_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const getsubCatId = await prisma.bn_subcategories.findFirst({
    where: {
      // cat_id: getCategory?.cat_id,
      subcat_slug: getBody == null ? void 0 : getBody.subcat_slug,
      status: 1,
      deletable: 1
    }
  });
  if (getsubCatId) {
    const getCategory = await prisma.bn_categories.findFirst({
      where: {
        cat_slug: getBody == null ? void 0 : getBody.cat_slug,
        // Assign Cat slug
        status: 1,
        deletable: 1
      }
    });
    const subcategory = await prisma.bn_subcategories.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      }
    });
    const getSubCategoryContents = await prisma.bn_contents.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        subcat_id: getsubCatId == null ? void 0 : getsubCatId.subcat_id,
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: getBody == null ? void 0 : getBody.take,
      // Assign how many content you want to get
      skip: getBody == null ? void 0 : getBody.skip
    });
    const data = [];
    if (getSubCategoryContents && (getSubCategoryContents == null ? void 0 : getSubCategoryContents.length) > 0) {
      for (let i = 0; i < (getSubCategoryContents == null ? void 0 : getSubCategoryContents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = getSubCategoryContents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory2 = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = getSubCategoryContents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = getSubCategoryContents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = getSubCategoryContents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = getSubCategoryContents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = getSubCategoryContents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = getSubCategoryContents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = getSubCategoryContents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = getSubCategoryContents[i]) == null ? void 0 : _i.updated_at,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory2 == null ? void 0 : subcategory2.subcat_slug
          // post_time: moment(getSubCategoryContents[i]?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return {
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug,
        subcat_name_bn: getsubCatId == null ? void 0 : getsubCatId.subcat_name_bn,
        subcat_slug: getsubCatId == null ? void 0 : getsubCatId.subcat_slug
      },
      subcat: subcategory,
      contents: data
    };
  }
});

const subcategorycontent_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: subcategorycontent_post$2
});

const latestpost_post$4 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      content_heading: true,
      content_details: true,
      content_id: true,
      subcat_id: true,
      img_bg_path: true,
      content_type: true
    },
    orderBy: {
      content_id: "desc"
    },
    take: parseInt(getBody == null ? void 0 : getBody.take)
  });
  const data = [];
  if ((contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < contents.length; i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: contents[i].subcat_id
        }
      });
      data.push({
        content_id: (_b = contents[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = contents[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = contents[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = contents[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = contents[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      });
    }
    return data;
  }
});

const latestpost_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestpost_post$4
});

const popularpost_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  adsmoment().locale("en");
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1,
      created_at: {
        gt: adsmoment().subtract(3, "days").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      }
    },
    select: {
      cat_id: true,
      content_heading: true,
      content_details: true,
      content_id: true,
      content_type: true,
      subcat_id: true,
      img_bg_path: true,
      created_at: true,
      total_hit: true
    },
    orderBy: {
      total_hit: "desc"
    },
    take: parseInt(getBody == null ? void 0 : getBody.take)
  });
  const data = [];
  if ((contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < contents.length; i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
        }
      });
      data.push({
        content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
        total_hit: (_i = contents[i]) == null ? void 0 : _i.total_hit
      });
    }
    return data;
  }
});

const popularpost_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: popularpost_post$2
});

const tagcontents_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const tag = await prisma.bn_tags.findFirst({
    where: {
      tag_slug: getBody == null ? void 0 : getBody.tag_slug,
      deletable: 1
    }
  });
  if (tag) {
    const contents = await prisma.bn_contents.findMany({
      where: {
        tags: {
          contains: tag == null ? void 0 : tag.tag_slug
        },
        status: 1,
        deletable: 1
      },
      take: getBody == null ? void 0 : getBody.take,
      orderBy: {
        content_id: "desc"
      }
    });
    const data = [];
    if ((contents == null ? void 0 : contents.length) > 0) {
      for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        });
      }
    }
    return {
      tag: {
        tag_name: tag == null ? void 0 : tag.tag_name,
        tag_slug: tag == null ? void 0 : tag.tag_slug
      },
      content: data
    };
  }
});

const tagcontents_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: tagcontents_post$2
});

const allvideo_get$2 = defineEventHandler(async (event) => {
  var _a, _b;
  const nationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 1,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const saradeshVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 2,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const entertainmentVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 4,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const internationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 3,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const lifestyleVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 7,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const data = [
    {
      videos: nationalVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 1
        }
      })
    },
    {
      videos: saradeshVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 2
        }
      })
    },
    {
      videos: entertainmentVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 4
        }
      })
    },
    {
      videos: internationalVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 3
        }
      })
    },
    {
      videos: lifestyleVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 7
        }
      })
    }
  ];
  const videoPosition = await prisma.bn_video_positions.findFirst({
    where: {
      position_id: 3,
      deletable: 1
    }
  });
  const specialTopVideos = [];
  if (videoPosition && ((_a = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _a.length) > 2) {
    const videoid = (_b = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _b.split(",");
    for (let i = 0; i < (videoid == null ? void 0 : videoid.length); i++) {
      const spTopVideo = await prisma.bn_videos.findFirst({
        where: {
          id: parseInt(videoid[i]),
          deletable: 1,
          status: 1
        }
      });
      const spvCategory = await prisma.bn_video_categories.findFirst({
        where: {
          id: spTopVideo == null ? void 0 : spTopVideo.cat_id
        }
      });
      specialTopVideos.push({
        id: spTopVideo == null ? void 0 : spTopVideo.id,
        is_live: spTopVideo == null ? void 0 : spTopVideo.is_live,
        cat_id: spTopVideo == null ? void 0 : spTopVideo.cat_id,
        type: spTopVideo == null ? void 0 : spTopVideo.type,
        code: spTopVideo == null ? void 0 : spTopVideo.code,
        target: spTopVideo == null ? void 0 : spTopVideo.target,
        title: spTopVideo == null ? void 0 : spTopVideo.title,
        img_bg_path: spTopVideo == null ? void 0 : spTopVideo.img_bg_path,
        cat_slug: spvCategory == null ? void 0 : spvCategory.slug,
        cat_name: spvCategory == null ? void 0 : spvCategory.name_bn
      });
    }
  }
  const allCategory = await prisma.bn_video_categories.findMany({
    where: {
      deletable: 1,
      status: 1
    },
    orderBy: {
      id: "asc"
    }
  });
  return {
    categoryVideos: data,
    specialTopVideos,
    allCategory
  };
});

const allvideo_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: allvideo_get$2
});

const categoryvideos_post$2 = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const category = await prisma.bn_video_categories.findFirst({
    where: {
      slug: getBody == null ? void 0 : getBody.cat_slug
    }
  });
  if (category) {
    const allCategory = await prisma.bn_video_categories.findMany({
      where: {
        deletable: 1,
        status: 1
      },
      orderBy: {
        id: "asc"
      }
    });
    const videos = await prisma.bn_videos.findMany({
      where: {
        cat_id: category == null ? void 0 : category.id,
        deletable: 1,
        status: 1
      },
      orderBy: {
        id: "desc"
      },
      take: getBody == null ? void 0 : getBody.take
    });
    return {
      videos,
      category,
      allCategory
    };
  }
});

const categoryvideos_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categoryvideos_post$2
});

const singlevideo_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const getBody = await readBody(event);
  const video = await prisma.bn_videos.findFirst({
    where: {
      id: parseInt(getBody == null ? void 0 : getBody.id)
    }
  });
  if (video) {
    const currentCategory = await prisma.bn_video_categories.findFirst({
      where: {
        id: parseInt(video == null ? void 0 : video.cat_id)
      }
    });
    const currentVideo = {
      id: video == null ? void 0 : video.id,
      cat_id: currentCategory == null ? void 0 : currentCategory.id,
      type: video == null ? void 0 : video.type,
      title: video == null ? void 0 : video.title,
      code: video == null ? void 0 : video.code,
      img_bg_path: video == null ? void 0 : video.img_bg_path,
      link: video == null ? void 0 : video.link,
      cat_name_bn: currentCategory == null ? void 0 : currentCategory.name_bn,
      cat_slug: currentCategory == null ? void 0 : currentCategory.slug,
      created_at: video == null ? void 0 : video.created_at
    };
    const videos = await prisma.bn_videos.findMany({
      orderBy: {
        id: "desc"
      },
      take: 6
    });
    const getVideos = [];
    for (let i = 0; i < (videos == null ? void 0 : videos.length); i++) {
      if (((_a = videos[i]) == null ? void 0 : _a.id) !== (video == null ? void 0 : video.id)) {
        const category = await prisma.bn_video_categories.findFirst({
          where: {
            id: (_b = videos[i]) == null ? void 0 : _b.cat_id
          }
        });
        getVideos.push({
          id: (_c = videos[i]) == null ? void 0 : _c.id,
          cat_id: (_d = videos[i]) == null ? void 0 : _d.cat_id,
          type: (_e = videos[i]) == null ? void 0 : _e.type,
          title: (_f = videos[i]) == null ? void 0 : _f.title,
          code: (_g = videos[i]) == null ? void 0 : _g.code,
          img_bg_path: (_h = videos[i]) == null ? void 0 : _h.img_bg_path,
          link: (_i = videos[i]) == null ? void 0 : _i.link,
          cat_name_bn: category == null ? void 0 : category.name_bn,
          cat_slug: category == null ? void 0 : category.slug,
          created_at: (_j = videos[i]) == null ? void 0 : _j.created_at
        });
      }
    }
    return {
      currentVideo,
      getVideos
    };
  }
});

const singlevideo_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: singlevideo_post$2
});

const commonads_post = defineEventHandler(async (event) => {
  adsmoment.locale("en");
  const getBody = await readBody(event);
  const currentDate = adsmoment().utcOffset("+0600").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  const ads = await prisma.bn_ads.findFirst({
    where: {
      page: parseInt(getBody == null ? void 0 : getBody.page),
      position: parseInt(getBody == null ? void 0 : getBody.position),
      status: 1,
      end_time: {
        gte: currentDate
      }
    },
    select: {
      id: true,
      type: true,
      page: true,
      status: true,
      position: true,
      dfp_header_code: true,
      code: true,
      desktop_image_path: true,
      mobile_image_path: true,
      external_link: true,
      start_time: true,
      end_time: true
    }
  });
  return ads;
});

const commonads_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: commonads_post
});

const getauthorpost_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const author = await prisma.authors.findFirst({
    where: {
      author_slug: getBody == null ? void 0 : getBody.author_slug,
      deletable: 1
    }
  });
  if (author) {
    const contents = await prisma.bn_contents.findMany({
      where: {
        author_slugs: author == null ? void 0 : author.author_slug,
        status: 1,
        deletable: 1
      },
      take: parseInt(getBody == null ? void 0 : getBody.take),
      orderBy: {
        content_id: "desc"
      }
    });
    const data = [];
    if ((contents == null ? void 0 : contents.length) > 0) {
      for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        });
      }
    }
    return {
      author: {
        author_name_bn: author == null ? void 0 : author.author_name_bn,
        author_slug: author == null ? void 0 : author.author_slug
      },
      content: data
    };
  }
});

const getauthorpost_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getauthorpost_post
});

const breaking_get = defineEventHandler(async (event) => {
  adsmoment().locale("en");
  const currentDate = adsmoment().utcOffset("+0600").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  const breakingNews = await prisma.bn_breaking_news.findMany({
    where: {
      expired_time: {
        // Greater Then "gte" & Less Then "lte" date or string
        gte: currentDate
      }
    },
    select: {
      id: true,
      news_title: true,
      news_link: true,
      expired_time: true
    },
    orderBy: {
      id: "desc"
    }
  });
  return breakingNews;
});

const breaking_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: breaking_get
});

const categorycontent_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const getCategory = await prisma.bn_categories.findFirst({
    where: {
      cat_slug: getBody == null ? void 0 : getBody.cat_slug,
      // Assign Cat slug
      status: 1,
      deletable: 1
    }
  });
  if (getCategory) {
    const subcategory = await prisma.bn_subcategories.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      }
    });
    const getCategoryContents = await prisma.bn_contents.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: parseInt(getBody == null ? void 0 : getBody.take),
      // Assign how many content you want to get,
      skip: parseInt(getBody == null ? void 0 : getBody.skip)
    });
    const data = [];
    if (getCategoryContents && (getCategoryContents == null ? void 0 : getCategoryContents.length) > 0) {
      for (let i = 0; i < (getCategoryContents == null ? void 0 : getCategoryContents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = getCategoryContents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory2 = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = getCategoryContents[i]) == null ? void 0 : _b.subcat_id
            // Assign Category ID 
          }
        });
        data.push({
          content_id: (_c = getCategoryContents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = getCategoryContents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = getCategoryContents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = getCategoryContents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = getCategoryContents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = getCategoryContents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = getCategoryContents[i]) == null ? void 0 : _i.updated_at,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory2 == null ? void 0 : subcategory2.subcat_slug
          // post_time: moment(getCategoryContents[i]?.created_at).startOf('hour').fromNow()
        });
      }
    }
    const totalPost = await prisma.bn_contents.aggregate({
      _count: {
        content_id: true
      }
    });
    return {
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
      },
      subcat: subcategory,
      contents: data,
      total_post: totalPost._count.content_id
    };
  }
});

const categorycontent_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categorycontent_post$2
});

const latestpost_post$2 = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: parseInt(getBody == null ? void 0 : getBody.take),
    skip: parseInt(getBody == null ? void 0 : getBody.skip)
  });
  const data = [];
  if (contents && (contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          // Assign Category ID 
        }
      });
      const totalPost = await prisma.bn_contents.aggregate({
        _count: {
          content_id: true
        }
      });
      data.push({
        content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
        created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
        updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        total_post: totalPost._count.content_id
      });
    }
    return data;
  }
});

const latestpost_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestpost_post$2
});

const alllatestpost_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const data = [];
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 20
  });
  for (let i = 0; i < 20; i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: contents[i].cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        subcat_id: (_a = contents[i]) == null ? void 0 : _a.subcat_id
      }
    });
    data.push({
      content_id: (_b = contents[i]) == null ? void 0 : _b.content_id,
      content_type: (_c = contents[i]) == null ? void 0 : _c.content_type,
      content_heading: (_d = contents[i]) == null ? void 0 : _d.content_heading,
      img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return data;
});

const alllatestpost_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: alllatestpost_get
});

const firstrightcatcontent_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const getContents = await prisma.bn_contents.findMany({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      NOT: {
        content_id: {
          equals: parseInt(getBody == null ? void 0 : getBody.content_id)
        }
      },
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 5
  });
  const data = [];
  for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = getContents[i]) == null ? void 0 : _a.cat_id
      },
      select: {
        cat_name_bn: true,
        cat_slug: true
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        subcat_id: (_b = getContents[i]) == null ? void 0 : _b.subcat_id
      }
    });
    data.push({
      content_id: (_c = getContents[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = getContents[i]) == null ? void 0 : _d.content_type,
      img_bg_path: (_e = getContents[i]) == null ? void 0 : _e.img_bg_path,
      content_heading: (_f = getContents[i]) == null ? void 0 : _f.content_heading,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return {
    contents: data
  };
});

const firstrightcatcontent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: firstrightcatcontent_post
});

const getinsidemorenews_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const getInsideMoreNews = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          equals: parseInt(getBody == null ? void 0 : getBody.content_id)
        }
      },
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 7
  });
  const insideMoreNews = [];
  if ((getInsideMoreNews == null ? void 0 : getInsideMoreNews.length) > 0) {
    for (let i = 0; i < (getInsideMoreNews == null ? void 0 : getInsideMoreNews.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = getInsideMoreNews[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: (_b = getInsideMoreNews[i]) == null ? void 0 : _b.cat_id
          // Assign Category ID 
        }
      });
      insideMoreNews.push({
        content_id: (_c = getInsideMoreNews[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = getInsideMoreNews[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = getInsideMoreNews[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = getInsideMoreNews[i]) == null ? void 0 : _f.content_heading,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      });
    }
  }
  return insideMoreNews;
});

const getinsidemorenews_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: getinsidemorenews_post
});

const moredetailcontents_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const getBody = await readBody(event);
  const getmoredetailsContent = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  for (let i = 0; i < (getmoredetailsContent == null ? void 0 : getmoredetailsContent.length); i++) {
    if (((_a = getmoredetailsContent[i]) == null ? void 0 : _a.content_id) !== parseInt(getBody == null ? void 0 : getBody.content_id)) {
      const getCategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_b = getmoredetailsContent[i]) == null ? void 0 : _b.cat_id
        }
      });
      const getSubcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: (_c = getmoredetailsContent[i]) == null ? void 0 : _c.cat_id
        }
      });
      const getAuthor = await prisma.authors.findFirst({
        where: {
          author_slug: (_e = (_d = getmoredetailsContent[i]) == null ? void 0 : _d.author_slugs) == null ? void 0 : _e.toString()
        }
      });
      data.push({
        content_id: (_f = getmoredetailsContent[i]) == null ? void 0 : _f.content_id,
        content_brief: (_g = getmoredetailsContent[i]) == null ? void 0 : _g.content_brief,
        content_details: (_h = getmoredetailsContent[i]) == null ? void 0 : _h.content_details,
        content_heading: (_i = getmoredetailsContent[i]) == null ? void 0 : _i.content_heading,
        content_sub_heading: (_j = getmoredetailsContent[i]) == null ? void 0 : _j.content_sub_heading,
        created_at: (_k = getmoredetailsContent[i]) == null ? void 0 : _k.created_at,
        updated_at: (_l = getmoredetailsContent[i]) == null ? void 0 : _l.updated_at,
        img_bg_path: (_m = getmoredetailsContent[i]) == null ? void 0 : _m.img_bg_path,
        content_type: (_n = getmoredetailsContent[i]) == null ? void 0 : _n.content_type,
        meta_keywords: (_o = getmoredetailsContent[i]) == null ? void 0 : _o.meta_keywords,
        tags: (_p = getmoredetailsContent[i]) == null ? void 0 : _p.tags,
        category: {
          cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
          cat_id: getCategory == null ? void 0 : getCategory.cat_id,
          cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
        },
        subcategory: {
          subcat_name_bn: getSubcategory == null ? void 0 : getSubcategory.subcat_name_bn,
          subcat_id: getSubcategory == null ? void 0 : getSubcategory.subcat_id,
          subcat_slug: getSubcategory == null ? void 0 : getSubcategory.subcat_slug
        },
        author: {
          author_id: getAuthor == null ? void 0 : getAuthor.author_id,
          author_name_bn: getAuthor == null ? void 0 : getAuthor.author_name_bn,
          author_slug: getAuthor == null ? void 0 : getAuthor.author_slug
        }
      });
    }
  }
  return data;
});

const moredetailcontents_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: moredetailcontents_post
});

const moreinsidemorenews_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const getBody = await readBody(event);
  const insidemorenews = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          in: [parseInt(getBody == null ? void 0 : getBody.currentPostDetailId), parseInt(getBody == null ? void 0 : getBody.morePostId)]
        }
      },
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 5
  });
  const data = [];
  for (let i = 0; i < (insidemorenews == null ? void 0 : insidemorenews.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = insidemorenews[i]) == null ? void 0 : _a.cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: (_b = insidemorenews[i]) == null ? void 0 : _b.cat_id
      }
    });
    data.push({
      content_id: (_c = insidemorenews[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = insidemorenews[i]) == null ? void 0 : _d.content_type,
      content_heading: (_e = insidemorenews[i]) == null ? void 0 : _e.content_heading,
      img_bg_path: (_f = insidemorenews[i]) == null ? void 0 : _f.img_bg_path,
      cat_slug: category == null ? void 0 : category.cat_slug,
      subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
    });
  }
  return data;
});

const moreinsidemorenews_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: moreinsidemorenews_post
});

const mreletedcontents_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const getBody = await readBody(event);
  const getMreletedContents = await prisma.bn_contents.findMany({
    where: {
      NOT: {
        content_id: {
          in: getBody == null ? void 0 : getBody.readedids
        }
      },
      deletable: 1,
      status: 1
    },
    orderBy: {
      content_id: "desc"
    },
    take: 4,
    skip: 1
  });
  const data = [];
  for (let i = 0; i < (getMreletedContents == null ? void 0 : getMreletedContents.length); i++) {
    const category = await prisma.bn_categories.findFirst({
      where: {
        cat_id: (_a = getMreletedContents[i]) == null ? void 0 : _a.cat_id
      }
    });
    const subcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: (_b = getMreletedContents[i]) == null ? void 0 : _b.cat_id
      }
    });
    data.push({
      content_id: (_c = getMreletedContents[i]) == null ? void 0 : _c.content_id,
      content_type: (_d = getMreletedContents[i]) == null ? void 0 : _d.content_type,
      cat_id: (_e = getMreletedContents[i]) == null ? void 0 : _e.cat_id,
      content_heading: (_f = getMreletedContents[i]) == null ? void 0 : _f.content_heading,
      img_bg_path: (_g = getMreletedContents[i]) == null ? void 0 : _g.img_bg_path,
      category: {
        cat_name_bn: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug
      },
      subcategory: {
        subcat_name_bn: subcategory == null ? void 0 : subcategory.subcat_name_bn,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
      }
    });
  }
  return data;
});

const mreletedcontents_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: mreletedcontents_post
});

const postdetail_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __;
  const getBody = await readBody(event);
  const config = useRuntimeConfig();
  const getdetailsContent = await prisma.bn_contents.findFirst({
    where: {
      content_id: parseInt(getBody == null ? void 0 : getBody.content_id),
      status: 1,
      deletable: 1
    }
  });
  if (getdetailsContent) {
    await prisma.bn_contents.update({
      where: {
        content_id: parseInt(getBody == null ? void 0 : getBody.content_id)
      },
      data: {
        total_hit: {
          increment: 1
        }
      }
    });
    const getCategory = await prisma.bn_categories.findFirst({
      where: {
        cat_id: getdetailsContent == null ? void 0 : getdetailsContent.cat_id
      }
    });
    const getSubcategory = await prisma.bn_subcategories.findFirst({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id
      }
    });
    const getAuthor = await prisma.authors.findFirst({
      where: {
        author_slug: (_a = getdetailsContent == null ? void 0 : getdetailsContent.author_slugs) == null ? void 0 : _a.toString()
      },
      select: {
        author_id: true,
        author_name_bn: true,
        author_slug: true,
        img_path: true
      }
    });
    const detailsContent = {
      // ogImage: genretedOG,
      content_id: getdetailsContent == null ? void 0 : getdetailsContent.content_id,
      content_type: getdetailsContent == null ? void 0 : getdetailsContent.content_type,
      cat_id: getdetailsContent == null ? void 0 : getdetailsContent.cat_id,
      subcat_id: getdetailsContent == null ? void 0 : getdetailsContent.subcat_id,
      special_cat_id: getdetailsContent == null ? void 0 : getdetailsContent.special_cat_id,
      country_id: getdetailsContent == null ? void 0 : getdetailsContent.country_id,
      division_id: getdetailsContent == null ? void 0 : getdetailsContent.division_id,
      district_id: getdetailsContent == null ? void 0 : getdetailsContent.district_id,
      upozilla_id: getdetailsContent == null ? void 0 : getdetailsContent.upozilla_id,
      content_heading: getdetailsContent == null ? void 0 : getdetailsContent.content_heading,
      content_sub_heading: getdetailsContent == null ? void 0 : getdetailsContent.content_sub_heading,
      author_slugs: getdetailsContent == null ? void 0 : getdetailsContent.author_slugs,
      content_brief: getdetailsContent == null ? void 0 : getdetailsContent.content_brief,
      content_details: getdetailsContent == null ? void 0 : getdetailsContent.content_details,
      img_xs_path: getdetailsContent == null ? void 0 : getdetailsContent.img_xs_path,
      img_sm_path: getdetailsContent == null ? void 0 : getdetailsContent.img_sm_path,
      img_sm_caption: getdetailsContent == null ? void 0 : getdetailsContent.img_sm_caption,
      img_bg_path: getdetailsContent == null ? void 0 : getdetailsContent.img_bg_path,
      img_bg_caption: getdetailsContent == null ? void 0 : getdetailsContent.img_bg_caption,
      og_image: ((_b = config == null ? void 0 : config.public) == null ? void 0 : _b.apiUrl) + (getdetailsContent == null ? void 0 : getdetailsContent.og_image),
      tags: getdetailsContent == null ? void 0 : getdetailsContent.tags,
      meta_keywords: getdetailsContent == null ? void 0 : getdetailsContent.meta_keywords,
      created_at: getdetailsContent == null ? void 0 : getdetailsContent.created_at,
      updated_at: getdetailsContent == null ? void 0 : getdetailsContent.updated_at,
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug
      },
      subcategory: {
        subcat_name_bn: getSubcategory == null ? void 0 : getSubcategory.subcat_name_bn,
        subcat_id: getSubcategory == null ? void 0 : getSubcategory.subcat_id,
        subcat_slug: getSubcategory == null ? void 0 : getSubcategory.subcat_slug
      },
      author: {
        author_id: getAuthor == null ? void 0 : getAuthor.author_id,
        author_name_bn: getAuthor == null ? void 0 : getAuthor.author_name_bn,
        author_slug: getAuthor == null ? void 0 : getAuthor.author_slug,
        img_path: getAuthor == null ? void 0 : getAuthor.img_path
      }
      // firstrightcatcontent: firstrightcatcontent
    };
    const moreContents = await prisma.bn_contents.findMany({
      where: {
        NOT: {
          content_id: {
            equals: parseInt(getBody == null ? void 0 : getBody.content_id)
          }
        },
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: 3
    });
    const moreDetailContent = [];
    const mrelatedPosts = [];
    const mreletedReadIds = [detailsContent == null ? void 0 : detailsContent.content_id];
    for (let i = 0; i < (moreContents == null ? void 0 : moreContents.length); i++) {
      const getmoreContentCategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_c = moreContents[i]) == null ? void 0 : _c.cat_id
        }
      });
      const getmoreContentSubCategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_d = moreContents[i]) == null ? void 0 : _d.subcat_id
        }
      });
      const getmoreContentAuthor = await prisma.authors.findFirst({
        where: {
          author_slug: (_f = (_e = moreContents[i]) == null ? void 0 : _e.author_slugs) == null ? void 0 : _f.toString()
        },
        select: {
          author_id: true,
          author_name_bn: true,
          author_slug: true,
          img_path: true
        }
      });
      const catwisePosts = await prisma.bn_contents.findMany({
        where: {
          cat_id: (_g = moreContents[i]) == null ? void 0 : _g.cat_id,
          NOT: {
            content_id: {
              equals: (_h = moreContents[i]) == null ? void 0 : _h.content_id
            }
          },
          status: 1,
          deletable: 1
        },
        orderBy: {
          content_id: "desc"
        },
        take: 5
      });
      const catwisePost = [];
      for (let catwise = 0; catwise < (catwisePosts == null ? void 0 : catwisePosts.length); catwise++) {
        const catwisecategory = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_i = catwisePosts[catwise]) == null ? void 0 : _i.cat_id
          }
        });
        const catwisesubcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_j = catwisePosts[catwise]) == null ? void 0 : _j.subcat_id
          }
        });
        catwisePost.push({
          content_id: (_k = catwisePosts[catwise]) == null ? void 0 : _k.content_id,
          content_type: (_l = catwisePosts[catwise]) == null ? void 0 : _l.content_type,
          content_heading: (_m = catwisePosts[catwise]) == null ? void 0 : _m.content_heading,
          img_bg_path: (_n = catwisePosts[catwise]) == null ? void 0 : _n.img_bg_path,
          cat_slug: catwisecategory == null ? void 0 : catwisecategory.cat_slug,
          subcat_slug: catwisesubcategory == null ? void 0 : catwisesubcategory.subcat_slug
        });
      }
      mreletedReadIds.push((_o = moreContents[i]) == null ? void 0 : _o.content_id);
      const readpost = await prisma.bn_contents.findMany({
        where: {
          status: 1,
          deletable: 1,
          NOT: {
            content_id: {
              in: mreletedReadIds
            }
          }
        },
        orderBy: {
          content_id: "desc"
        },
        take: 4,
        skip: 1
      });
      const mrelPostArray = [];
      for (let pb = 0; pb < (readpost == null ? void 0 : readpost.length); pb++) {
        const mrCategory = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_p = readpost[pb]) == null ? void 0 : _p.cat_id
          }
        });
        const mrsubCategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_q = readpost[pb]) == null ? void 0 : _q.subcat_id
          }
        });
        mrelPostArray.push({
          content_id: (_r = readpost[pb]) == null ? void 0 : _r.content_id,
          content_type: (_s = readpost[pb]) == null ? void 0 : _s.content_type,
          content_heading: (_t = readpost[pb]) == null ? void 0 : _t.content_heading,
          img_bg_path: (_u = readpost[pb]) == null ? void 0 : _u.img_bg_path,
          cat_slug: mrCategory == null ? void 0 : mrCategory.cat_slug,
          subcat_slug: mrsubCategory == null ? void 0 : mrsubCategory.subcat_slug
        });
      }
      mrelatedPosts.push(mrelPostArray);
      moreDetailContent.push({
        // ogImage: genretedOG,
        content_id: (_v = moreContents[i]) == null ? void 0 : _v.content_id,
        content_type: (_w = moreContents[i]) == null ? void 0 : _w.content_type,
        cat_id: (_x = moreContents[i]) == null ? void 0 : _x.cat_id,
        subcat_id: (_y = moreContents[i]) == null ? void 0 : _y.subcat_id,
        special_cat_id: (_z = moreContents[i]) == null ? void 0 : _z.special_cat_id,
        country_id: (_A = moreContents[i]) == null ? void 0 : _A.country_id,
        division_id: (_B = moreContents[i]) == null ? void 0 : _B.division_id,
        district_id: (_C = moreContents[i]) == null ? void 0 : _C.district_id,
        upozilla_id: (_D = moreContents[i]) == null ? void 0 : _D.upozilla_id,
        content_heading: (_E = moreContents[i]) == null ? void 0 : _E.content_heading,
        content_sub_heading: (_F = moreContents[i]) == null ? void 0 : _F.content_sub_heading,
        author_slugs: (_G = moreContents[i]) == null ? void 0 : _G.author_slugs,
        content_brief: (_H = moreContents[i]) == null ? void 0 : _H.content_brief,
        content_details: (_I = moreContents[i]) == null ? void 0 : _I.content_details,
        img_xs_path: (_J = moreContents[i]) == null ? void 0 : _J.img_xs_path,
        img_sm_path: (_K = moreContents[i]) == null ? void 0 : _K.img_sm_path,
        img_sm_caption: (_L = moreContents[i]) == null ? void 0 : _L.img_sm_caption,
        img_bg_path: (_M = moreContents[i]) == null ? void 0 : _M.img_bg_path,
        og_image: ((_N = config == null ? void 0 : config.public) == null ? void 0 : _N.apiUrl) + ((_O = moreContents[i]) == null ? void 0 : _O.og_image),
        img_bg_caption: (_P = moreContents[i]) == null ? void 0 : _P.img_bg_caption,
        tags: (_Q = moreContents[i]) == null ? void 0 : _Q.tags,
        meta_keywords: (_R = moreContents[i]) == null ? void 0 : _R.meta_keywords,
        created_at: (_S = moreContents[i]) == null ? void 0 : _S.created_at,
        updated_at: (_T = moreContents[i]) == null ? void 0 : _T.updated_at,
        category: {
          cat_name_bn: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_name_bn,
          cat_id: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_id,
          cat_slug: getmoreContentCategory == null ? void 0 : getmoreContentCategory.cat_slug
        },
        subcategory: {
          subcat_name_bn: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_name_bn,
          subcat_id: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_id,
          subcat_slug: getmoreContentSubCategory == null ? void 0 : getmoreContentSubCategory.subcat_slug
        },
        author: {
          author_id: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_id,
          author_name_bn: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_name_bn,
          author_slug: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.author_slug,
          img_path: getmoreContentAuthor == null ? void 0 : getmoreContentAuthor.img_path
        },
        morecatwisePost: catwisePost,
        // cate wise post will be added,
        morereletedcontentbelow: mrelatedPosts
      });
    }
    const firstRelatedContents = [];
    const frelated = await prisma.bn_contents.findMany({
      where: {
        NOT: {
          content_id: {
            equals: detailsContent == null ? void 0 : detailsContent.content_id
          }
        },
        deletable: 1,
        status: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: 4,
      skip: 1
    });
    for (let ft = 0; ft < (frelated == null ? void 0 : frelated.length); ft++) {
      const rfcategory = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_U = frelated[ft]) == null ? void 0 : _U.cat_id
        }
      });
      const rfsubcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_V = frelated[ft]) == null ? void 0 : _V.subcat_id
        }
      });
      firstRelatedContents.push({
        content_id: (_W = frelated[ft]) == null ? void 0 : _W.content_id,
        content_type: (_X = frelated[ft]) == null ? void 0 : _X.content_type,
        content_heading: (_Y = frelated[ft]) == null ? void 0 : _Y.content_heading,
        content_sub_heading: (_Z = frelated[ft]) == null ? void 0 : _Z.content_sub_heading,
        img_bg_path: (__ = frelated[ft]) == null ? void 0 : __.img_bg_path,
        cat_slug: rfcategory == null ? void 0 : rfcategory.cat_slug,
        subcat_slug: rfsubcategory == null ? void 0 : rfsubcategory.subcat_slug
      });
    }
    return {
      detailsContent,
      // firstrightcatcontent: firstrightcatcontent,
      moreDetailContent,
      firstRelatedContents
    };
  }
});

const postdetail_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: postdetail_post
});

const albumcategoryphotos_post = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const albumCategory = await prisma.p_categories.findFirst({
    where: {
      cat_slug: getBody == null ? void 0 : getBody.album_id
    }
  });
  const albums = await prisma.p_albums.findMany({
    where: {
      cat_id: albumCategory == null ? void 0 : albumCategory.cat_id,
      deletable: 1,
      status: 1
    },
    take: 12,
    orderBy: {
      album_id: "desc"
    },
    select: {
      album_id: true,
      cat_id: true,
      album_name: true
    }
  });
  const data = [];
  for (let i = 0; i < (albums == null ? void 0 : albums.length); i++) {
    const photo = await prisma.p_galleries.findFirst({
      where: {
        album_id: albums[i].album_id
      }
    });
    data.push({
      album_id: albums[i].album_id,
      album_name: albums[i].album_name,
      photo_path: photo == null ? void 0 : photo.photo,
      cat_name_bn: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
      cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug
    });
  }
  return {
    catalbums: data,
    cat_name_bn: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
    cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug
  };
});

const albumcategoryphotos_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: albumcategoryphotos_post
});

const albumdetail_post = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const photoAlbum = await prisma.p_albums.findFirst({
    where: {
      album_id: parseInt(getBody == null ? void 0 : getBody.photo_id)
    }
  });
  const albumCategory = await prisma.p_categories.findFirst({
    where: {
      cat_id: photoAlbum == null ? void 0 : photoAlbum.cat_id
    }
  });
  const albumGallery = await prisma.p_galleries.findMany({
    where: {
      album_id: photoAlbum == null ? void 0 : photoAlbum.album_id
    }
  });
  return {
    album_name: photoAlbum == null ? void 0 : photoAlbum.album_name,
    created_at: photoAlbum == null ? void 0 : photoAlbum.created_at,
    updated_at: photoAlbum == null ? void 0 : photoAlbum.updated_at,
    short_description: photoAlbum == null ? void 0 : photoAlbum.short_description,
    cat_name: albumCategory == null ? void 0 : albumCategory.cat_name_bn,
    cat_slug: albumCategory == null ? void 0 : albumCategory.cat_slug,
    photo_galleries: albumGallery
  };
});

const albumdetail_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: albumdetail_post
});

const allcategory_get = defineEventHandler(async (event) => {
  const data = await prisma.bn_categories.findMany({
    where: {
      cat_type: 1,
      top_menu: 1,
      status: 1,
      deletable: 1
    },
    orderBy: {
      cat_position: "asc"
    }
  });
  return data;
});

const allcategory_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: allcategory_get
});

const banglatime_get = defineEventHandler(async (event) => {
  const data = await $fetch("http://127.0.0.1:8000/api/get-bangla-time", {
    method: "GET"
  });
  return data;
});

const banglatime_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: banglatime_get
});

const headercategory_get = defineEventHandler(async (event) => {
  const categoryContent = await prisma.bn_categories.findMany({
    where: {
      cat_type: 1,
      top_menu: 1,
      status: 1,
      deletable: 1
    },
    // take: 11,
    orderBy: {
      cat_position: "asc"
    }
  });
  return categoryContent;
});

const headercategory_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: headercategory_get
});

const art_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 43,
      // Assign Category ID
      deletable: 1,
      status: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 43
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const art_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: art_get
});

const campus_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 26,
      // Assign Category ID,
      status: 1,
      deletable: 1
    },
    take: 7,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 26
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const campus_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: campus_get
});

const career_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 12,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 8);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const career_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: career_get
});

const categorycontent_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  adsmoment.locale("bn-bd");
  const getBody = await readBody(event);
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    take: parseInt(getBody == null ? void 0 : getBody.take),
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id)
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id)
        }
      });
      data.push({
        content_id: (_a = categoryContent[i]) == null ? void 0 : _a.content_id,
        img_bg_path: (_b = categoryContent[i]) == null ? void 0 : _b.img_bg_path,
        content_heading: (_c = categoryContent[i]) == null ? void 0 : _c.content_heading,
        content_details: (_d = categoryContent[i]) == null ? void 0 : _d.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: adsmoment((_e = categoryContent[i]) == null ? void 0 : _e.created_at).startOf("hour").fromNow()
      });
    }
    return data;
  }
});

const categorycontent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categorycontent_post
});

const child_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 27,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 27
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const child_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: child_get
});

const corporate_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 36,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 36
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const corporate_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: corporate_get
});

const counter_get = defineEventHandler(async (event) => {
  const data = await $fetch("http://127.0.0.1:8000/api/home-counter", {
    method: "GET"
  });
  return data;
});

const counter_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: counter_get
});

const crime_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 33,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 33
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const crime_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: crime_get
});

const economy_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 3,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 6);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const economy_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: economy_get
});

const education_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 11,
      // Assign Category ID,
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 11
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const education_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: education_get
});

const entertainment_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 6,
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 5);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const entertainment_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entertainment_get
});

const galleryphoto_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.p_album_positions.findFirst({
    where: {
      position_id: 1,
      status: 1,
      deletable: 1
    },
    select: {
      position_id: true,
      position_name: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 4) {
    const arrayPhotoIds = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    for (let i = 0; i < (arrayPhotoIds == null ? void 0 : arrayPhotoIds.length); i++) {
      const album = await prisma.p_albums.findFirst({
        where: {
          album_id: parseInt(arrayPhotoIds[i])
        }
      });
      const photo = await prisma.p_galleries.findFirst({
        where: {
          album_id: parseInt(arrayPhotoIds[i])
        }
      });
      const photo_category = await prisma.p_categories.findFirst({
        where: {
          cat_id: album == null ? void 0 : album.cat_id
        }
      });
      data.push({
        cat_name: photo_category == null ? void 0 : photo_category.cat_name_bn,
        cat_slug: photo_category == null ? void 0 : photo_category.cat_slug,
        album_id: album == null ? void 0 : album.album_id,
        album_name: album == null ? void 0 : album.album_name,
        short_description: album == null ? void 0 : album.short_description,
        photo_caption: photo == null ? void 0 : photo.photo_capture,
        photo: photo == null ? void 0 : photo.photo
      });
    }
  }
  return data;
});

const galleryphoto_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: galleryphoto_get
});

const health_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 10,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 10
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const health_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: health_get
});

const international_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 4,
      // assign cat id
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 6);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const international_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: international_get
});

const lawcourt_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 14,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 14
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const lawcourt_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: lawcourt_get
});

const lifestyle_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 9,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 9
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const lifestyle_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: lifestyle_get
});

const literature_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 8,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 8
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const literature_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: literature_get
});

const motivation_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 28,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 28
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const motivation_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: motivation_get
});

const national_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 1,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < 7; i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const national_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: national_get
});

const opinion_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 21,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 21
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.content_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const opinion_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: opinion_get
});

const politics_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 2,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 5);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const politics_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: politics_get
});

const positioncontent_post = defineEventHandler(async (event) => {
  var _a, _b;
  const getBody = await readBody(event);
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: parseInt(getBody == null ? void 0 : getBody.cat_id),
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, getBody == null ? void 0 : getBody.take);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: content == null ? void 0 : content.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: content == null ? void 0 : content.subcat_id
        }
      });
      data.push({
        content_id: content == null ? void 0 : content.content_id,
        img_bg_path: content == null ? void 0 : content.img_bg_path,
        content_heading: content == null ? void 0 : content.content_heading,
        content_details: content == null ? void 0 : content.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: content == null ? void 0 : content.created_at
        // created_at: moment(content?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const positioncontent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: positioncontent_post
});

const probash_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 23,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 23
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const probash_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: probash_get
});

const religion_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 17,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 17
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const religion_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: religion_get
});

const saradesh_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 16,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const saradesh_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: saradesh_get
});

const specialarticle_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 25,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 8,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 25
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const specialarticle_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialarticle_get
});

const specialreport_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 30,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 4,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = categoryContent[i]) == null ? void 0 : _a.cat_id
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = categoryContent[i]) == null ? void 0 : _b.subcat_id
        }
      });
      data.push({
        content_id: (_c = categoryContent[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = categoryContent[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = categoryContent[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = categoryContent[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = categoryContent[i]) == null ? void 0 : _g.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = categoryContent[i]) == null ? void 0 : _h.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
  }
  return data;
});

const specialreport_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialreport_get
});

const specialtopcontent_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      position_id: 1,
      status: 1,
      deletable: 1
    },
    select: {
      position_id: true,
      cat_id: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true
    }
  });
  const specialFixedPosition = await prisma.bn_position_fixed.findFirst({
    where: {
      is_fixed: 1
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 11);
    const getPositionIds = [];
    for (let i = 0; i < 11; i++) {
      if ((specialFixedPosition == null ? void 0 : specialFixedPosition.position_number) === i + 1) {
        getPositionIds.push((_c = specialFixedPosition == null ? void 0 : specialFixedPosition.news_id) == null ? void 0 : _c.toString());
      } else {
        getPositionIds.push(getContents[i]);
      }
    }
    for (let i = 0; i < (getPositionIds == null ? void 0 : getPositionIds.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getPositionIds[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_sub_heading: content == null ? void 0 : content.content_sub_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // post_date: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const specialtopcontent_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: specialtopcontent_get
});

const sports_get = defineEventHandler(async (event) => {
  var _a, _b;
  const position = await prisma.bn_content_positions.findFirst({
    where: {
      cat_id: 5,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      position_id: true,
      position_name: true,
      special_cat_id: true,
      subcat_id: true,
      content_ids: true,
      total_content: true
    }
  });
  const data = [];
  if (position && ((_a = position == null ? void 0 : position.content_ids) == null ? void 0 : _a.length) > 0) {
    const positionArray = (_b = position == null ? void 0 : position.content_ids) == null ? void 0 : _b.split(",");
    const getContents = positionArray == null ? void 0 : positionArray.splice(0, 7);
    for (let i = 0; i < (getContents == null ? void 0 : getContents.length); i++) {
      const content = await prisma.bn_contents.findFirst({
        where: {
          content_id: parseInt(getContents[i]),
          status: 1,
          deletable: 1
        }
      });
      if (content) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: content == null ? void 0 : content.cat_id,
            cat_type: 1
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: content == null ? void 0 : content.subcat_id
          }
        });
        data.push({
          content_id: content == null ? void 0 : content.content_id,
          content_type: content == null ? void 0 : content.content_type,
          img_bg_path: content == null ? void 0 : content.img_bg_path,
          content_heading: content == null ? void 0 : content.content_heading,
          content_details: content == null ? void 0 : content.content_details,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
          created_at: content == null ? void 0 : content.created_at
          // created_at: moment(content?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return data;
  }
});

const sports_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sports_get
});

const technology_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const categoryContent = await prisma.bn_contents.findMany({
    where: {
      cat_id: 7,
      // Assign Category ID
      status: 1,
      deletable: 1
    },
    take: 5,
    orderBy: {
      content_id: "desc"
    }
  });
  const data = [];
  if (categoryContent && (categoryContent == null ? void 0 : categoryContent.length) > 0) {
    for (let i = 0; i < (categoryContent == null ? void 0 : categoryContent.length); i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: 7
          // Assign Category ID 
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_a = categoryContent[i]) == null ? void 0 : _a.subcat_id
        }
      });
      data.push({
        content_id: (_b = categoryContent[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = categoryContent[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = categoryContent[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = categoryContent[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = categoryContent[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = categoryContent[i]) == null ? void 0 : _g.created_at
        // created_at: moment(categoryContent[i]?.created_at).startOf('hour').fromNow()
      });
    }
    return data;
  }
});

const technology_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: technology_get
});

const videofeature_post = defineEventHandler(async (event) => {
  var _a, _b;
  const getBody = await readBody(event);
  const videoPosition = await prisma.bn_video_positions.findFirst({
    where: {
      position_id: 1,
      deletable: 1
    }
  });
  const data = [];
  if (videoPosition && ((_a = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _a.length) > 0) {
    const vdieoPositionArray = (_b = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _b.split(",");
    const getVideoIds = vdieoPositionArray == null ? void 0 : vdieoPositionArray.splice(0, parseInt(getBody == null ? void 0 : getBody.take));
    for (let i = 0; i < (getVideoIds == null ? void 0 : getVideoIds.length); i++) {
      const video = await prisma.bn_videos.findFirst({
        where: {
          id: parseInt(getVideoIds[i]),
          status: 1,
          deletable: 1
        }
      });
      const category = await prisma.bn_video_categories.findFirst({
        where: {
          id: parseInt(video == null ? void 0 : video.cat_id)
        },
        select: {
          id: true,
          slug: true,
          name_bn: true
        }
      });
      data.push({
        id: video == null ? void 0 : video.id,
        cat_id: category == null ? void 0 : category.id,
        slug: category == null ? void 0 : category.slug,
        type: video == null ? void 0 : video.type,
        title: video == null ? void 0 : video.title,
        img_bg_path: video == null ? void 0 : video.img_bg_path,
        img_sm_path: video == null ? void 0 : video.img_sm_path,
        code: video == null ? void 0 : video.code,
        is_live: video == null ? void 0 : video.is_live,
        target: video == null ? void 0 : video.target
      });
    }
    return data;
  }
});

const videofeature_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: videofeature_post
});

const ogimage_post = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const config = useRuntimeConfig();
  const ogImageBanner = await prisma.site_settings.findFirst({
    where: {
      id: 1
    },
    select: {
      post_ogimage: true
    }
  });
  let watermarkImage = await jimp.read(`${config.public.apiUrl}/media/ogImages/${ogImageBanner == null ? void 0 : ogImageBanner.post_ogimage}`);
  const image = await jimp.read(`${config.public.apiUrl}/media/content/images/${getBody == null ? void 0 : getBody.img_bg_path}`);
  const watermark = watermarkImage.resize(750, jimp.AUTO);
  image.composite(watermark, 0, 337, {
    mode: jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 1
  });
  const ogimage = await image.getBase64Async(jimp.AUTO);
  return ogimage;
});

const ogimage_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ogimage_post
});

const search_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const getBody = await readBody(event);
  if ((getBody == null ? void 0 : getBody.keyword) !== "") {
    const getContent = await prisma.bn_contents.findMany({
      where: {
        OR: [
          {
            content_heading: {
              contains: getBody == null ? void 0 : getBody.keyword
            }
          }
        ],
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: parseInt(getBody == null ? void 0 : getBody.take)
    });
    const data = [];
    for (let c = 0; c < (getContent == null ? void 0 : getContent.length); c++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = getContent[c]) == null ? void 0 : _a.cat_id
        },
        select: {
          cat_id: true,
          cat_name_bn: true,
          cat_slug: true
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = getContent[c]) == null ? void 0 : _b.subcat_id
        },
        select: {
          subcat_id: true,
          subcat_name_bn: true,
          subcat_slug: true
        }
      });
      data.push({
        content_id: (_c = getContent[c]) == null ? void 0 : _c.content_id,
        content_type: (_d = getContent[c]) == null ? void 0 : _d.content_type,
        content_heading: (_e = getContent[c]) == null ? void 0 : _e.content_heading,
        content_details: (_f = getContent[c]) == null ? void 0 : _f.content_details,
        img_bg_path: (_g = getContent[c]) == null ? void 0 : _g.img_bg_path,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = getContent[c]) == null ? void 0 : _h.created_at,
        updated_at: (_i = getContent[c]) == null ? void 0 : _i.updated_at
      });
    }
    return data;
  } else {
    const getContent = await prisma.bn_contents.findMany({
      orderBy: {
        content_id: "desc"
      },
      take: parseInt(getBody == null ? void 0 : getBody.take)
    });
    const data = [];
    for (let c = 0; c < (getContent == null ? void 0 : getContent.length); c++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_j = getContent[c]) == null ? void 0 : _j.cat_id
        },
        select: {
          cat_id: true,
          cat_name_bn: true,
          cat_slug: true
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          cat_id: category == null ? void 0 : category.cat_id
        },
        select: {
          subcat_id: true,
          subcat_name_bn: true,
          subcat_slug: true
        }
      });
      data.push({
        content_id: (_k = getContent[c]) == null ? void 0 : _k.content_id,
        content_heading: (_l = getContent[c]) == null ? void 0 : _l.content_heading,
        content_details: (_m = getContent[c]) == null ? void 0 : _m.content_details,
        img_bg_path: (_n = getContent[c]) == null ? void 0 : _n.img_bg_path,
        category: {
          cat_id: category == null ? void 0 : category.cat_id,
          cat_name_bn: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug
        },
        subcategory: {
          cat_id: subcategory == null ? void 0 : subcategory.subcat_id,
          subcat_id: subcategory == null ? void 0 : subcategory.subcat_id,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        },
        created_at: (_o = getContent[c]) == null ? void 0 : _o.created_at,
        updated_at: (_p = getContent[c]) == null ? void 0 : _p.updated_at
      });
    }
    return data;
  }
});

const search_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: search_post
});

const sitesetting_get = defineEventHandler(async (event) => {
  const ads = await prisma.site_settings.findFirst({
    where: {
      id: 1
    },
    select: {
      logo: true,
      title: true,
      meta_keywords: true,
      meta_description: true,
      og_image: true,
      facebook: true,
      youtube: true,
      instagram: true,
      linkedin: true,
      twitter: true,
      editor_meta: true,
      address: true,
      favicon: true
    }
  });
  return ads;
});

const sitesetting_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sitesetting_get
});

const subcategorycontent_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const getsubCatId = await prisma.bn_subcategories.findFirst({
    where: {
      // cat_id: getCategory?.cat_id,
      subcat_slug: getBody == null ? void 0 : getBody.subcat_slug,
      status: 1,
      deletable: 1
    }
  });
  if (getsubCatId) {
    const getCategory = await prisma.bn_categories.findFirst({
      where: {
        cat_slug: getBody == null ? void 0 : getBody.cat_slug,
        // Assign Cat slug
        status: 1,
        deletable: 1
      }
    });
    const subcategory = await prisma.bn_subcategories.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        status: 1,
        deletable: 1
      }
    });
    const getSubCategoryContents = await prisma.bn_contents.findMany({
      where: {
        cat_id: getCategory == null ? void 0 : getCategory.cat_id,
        subcat_id: getsubCatId == null ? void 0 : getsubCatId.subcat_id,
        status: 1,
        deletable: 1
      },
      orderBy: {
        content_id: "desc"
      },
      take: getBody == null ? void 0 : getBody.take,
      // Assign how many content you want to get
      skip: getBody == null ? void 0 : getBody.skip
    });
    const data = [];
    if (getSubCategoryContents && (getSubCategoryContents == null ? void 0 : getSubCategoryContents.length) > 0) {
      for (let i = 0; i < (getSubCategoryContents == null ? void 0 : getSubCategoryContents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = getSubCategoryContents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory2 = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = getSubCategoryContents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = getSubCategoryContents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = getSubCategoryContents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = getSubCategoryContents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = getSubCategoryContents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = getSubCategoryContents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = getSubCategoryContents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = getSubCategoryContents[i]) == null ? void 0 : _i.updated_at,
          bn_cat_name: category == null ? void 0 : category.cat_name_bn,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory2 == null ? void 0 : subcategory2.subcat_slug
          // post_time: moment(getSubCategoryContents[i]?.created_at).startOf('hour').fromNow()
        });
      }
    }
    return {
      category: {
        cat_name_bn: getCategory == null ? void 0 : getCategory.cat_name_bn,
        cat_slug: getCategory == null ? void 0 : getCategory.cat_slug,
        subcat_name_bn: getsubCatId == null ? void 0 : getsubCatId.subcat_name_bn,
        subcat_slug: getsubCatId == null ? void 0 : getsubCatId.subcat_slug
      },
      subcat: subcategory,
      contents: data
    };
  }
});

const subcategorycontent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: subcategorycontent_post
});

const latestpost_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1
    },
    select: {
      cat_id: true,
      content_heading: true,
      content_details: true,
      content_id: true,
      subcat_id: true,
      img_bg_path: true,
      content_type: true,
      created_at: true
    },
    orderBy: {
      content_id: "desc"
    },
    take: parseInt(getBody == null ? void 0 : getBody.take)
  });
  const data = [];
  if ((contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < contents.length; i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: contents[i].subcat_id
        }
      });
      data.push({
        content_id: (_b = contents[i]) == null ? void 0 : _b.content_id,
        content_type: (_c = contents[i]) == null ? void 0 : _c.content_type,
        img_bg_path: (_d = contents[i]) == null ? void 0 : _d.img_bg_path,
        content_heading: (_e = contents[i]) == null ? void 0 : _e.content_heading,
        content_details: (_f = contents[i]) == null ? void 0 : _f.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_g = contents[i]) == null ? void 0 : _g.created_at
      });
    }
    return data;
  }
});

const latestpost_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestpost_post
});

const popularpost_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  adsmoment().locale("en");
  const getBody = await readBody(event);
  const contents = await prisma.bn_contents.findMany({
    where: {
      status: 1,
      deletable: 1,
      created_at: {
        gt: adsmoment().subtract(3, "days").format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      }
    },
    select: {
      cat_id: true,
      content_heading: true,
      content_details: true,
      content_id: true,
      content_type: true,
      subcat_id: true,
      img_bg_path: true,
      created_at: true,
      total_hit: true
    },
    orderBy: {
      total_hit: "desc"
    },
    take: parseInt(getBody == null ? void 0 : getBody.take)
  });
  const data = [];
  if ((contents == null ? void 0 : contents.length) > 0) {
    for (let i = 0; i < contents.length; i++) {
      const category = await prisma.bn_categories.findFirst({
        where: {
          cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id,
          cat_type: 1
        }
      });
      const subcategory = await prisma.bn_subcategories.findFirst({
        where: {
          subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
        }
      });
      data.push({
        content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
        content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
        img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
        content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
        content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
        bn_cat_name: category == null ? void 0 : category.cat_name_bn,
        cat_slug: category == null ? void 0 : category.cat_slug,
        subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug,
        created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
        total_hit: (_i = contents[i]) == null ? void 0 : _i.total_hit
      });
    }
    return data;
  }
});

const popularpost_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: popularpost_post
});

const tagcontents_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const getBody = await readBody(event);
  const tag = await prisma.bn_tags.findFirst({
    where: {
      tag_slug: getBody == null ? void 0 : getBody.tag_slug,
      deletable: 1
    }
  });
  if (tag) {
    const contents = await prisma.bn_contents.findMany({
      where: {
        tags: {
          contains: tag == null ? void 0 : tag.tag_slug
        },
        status: 1,
        deletable: 1
      },
      take: getBody == null ? void 0 : getBody.take,
      orderBy: {
        content_id: "desc"
      }
    });
    const data = [];
    if ((contents == null ? void 0 : contents.length) > 0) {
      for (let i = 0; i < (contents == null ? void 0 : contents.length); i++) {
        const category = await prisma.bn_categories.findFirst({
          where: {
            cat_id: (_a = contents[i]) == null ? void 0 : _a.cat_id
            // Assign Category ID 
          }
        });
        const subcategory = await prisma.bn_subcategories.findFirst({
          where: {
            subcat_id: (_b = contents[i]) == null ? void 0 : _b.subcat_id
          }
        });
        data.push({
          content_id: (_c = contents[i]) == null ? void 0 : _c.content_id,
          content_type: (_d = contents[i]) == null ? void 0 : _d.content_type,
          img_bg_path: (_e = contents[i]) == null ? void 0 : _e.img_bg_path,
          content_heading: (_f = contents[i]) == null ? void 0 : _f.content_heading,
          content_details: (_g = contents[i]) == null ? void 0 : _g.content_details,
          created_at: (_h = contents[i]) == null ? void 0 : _h.created_at,
          updated_at: (_i = contents[i]) == null ? void 0 : _i.updated_at,
          cat_slug: category == null ? void 0 : category.cat_slug,
          subcat_slug: subcategory == null ? void 0 : subcategory.subcat_slug
        });
      }
    }
    return {
      tag: {
        tag_name: tag == null ? void 0 : tag.tag_name,
        tag_slug: tag == null ? void 0 : tag.tag_slug
      },
      content: data,
      total_post: data == null ? void 0 : data.length
    };
  }
});

const tagcontents_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: tagcontents_post
});

const allvideo_get = defineEventHandler(async (event) => {
  var _a, _b;
  const nationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 1,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const saradeshVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 2,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const entertainmentVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 4,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const internationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 3,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const lifestyleVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 7,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    take: 8
  });
  const data = [
    {
      videos: nationalVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 1
        }
      })
    },
    {
      videos: saradeshVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 2
        }
      })
    },
    {
      videos: entertainmentVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 4
        }
      })
    },
    {
      videos: internationalVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 3
        }
      })
    },
    {
      videos: lifestyleVideos,
      category: await prisma.bn_video_categories.findFirst({
        where: {
          id: 7
        }
      })
    }
  ];
  const videoPosition = await prisma.bn_video_positions.findFirst({
    where: {
      position_id: 3,
      deletable: 1
    }
  });
  const specialTopVideos = [];
  if (videoPosition && ((_a = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _a.length) > 2) {
    const videoid = (_b = videoPosition == null ? void 0 : videoPosition.video_ids) == null ? void 0 : _b.split(",");
    for (let i = 0; i < (videoid == null ? void 0 : videoid.length); i++) {
      const spTopVideo = await prisma.bn_videos.findFirst({
        where: {
          id: parseInt(videoid[i]),
          deletable: 1,
          status: 1
        }
      });
      const spvCategory = await prisma.bn_video_categories.findFirst({
        where: {
          id: spTopVideo == null ? void 0 : spTopVideo.cat_id
        }
      });
      specialTopVideos.push({
        id: spTopVideo == null ? void 0 : spTopVideo.id,
        is_live: spTopVideo == null ? void 0 : spTopVideo.is_live,
        cat_id: spTopVideo == null ? void 0 : spTopVideo.cat_id,
        type: spTopVideo == null ? void 0 : spTopVideo.type,
        code: spTopVideo == null ? void 0 : spTopVideo.code,
        target: spTopVideo == null ? void 0 : spTopVideo.target,
        title: spTopVideo == null ? void 0 : spTopVideo.title,
        img_bg_path: spTopVideo == null ? void 0 : spTopVideo.img_bg_path,
        cat_slug: spvCategory == null ? void 0 : spvCategory.slug,
        cat_name: spvCategory == null ? void 0 : spvCategory.name_bn
      });
    }
  }
  const allCategory = await prisma.bn_video_categories.findMany({
    where: {
      deletable: 1,
      status: 1
    },
    orderBy: {
      id: "asc"
    }
  });
  return {
    categoryVideos: data,
    specialTopVideos,
    allCategory
  };
});

const allvideo_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: allvideo_get
});

const categoryvideos_post = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const category = await prisma.bn_video_categories.findFirst({
    where: {
      slug: getBody == null ? void 0 : getBody.cat_slug
    }
  });
  if (category) {
    const allCategory = await prisma.bn_video_categories.findMany({
      where: {
        deletable: 1,
        status: 1
      },
      orderBy: {
        id: "asc"
      }
    });
    const videos = await prisma.bn_videos.findMany({
      where: {
        cat_id: category == null ? void 0 : category.id,
        deletable: 1,
        status: 1
      },
      orderBy: {
        id: "desc"
      },
      take: getBody == null ? void 0 : getBody.take
    });
    return {
      videos,
      category,
      allCategory
    };
  }
});

const categoryvideos_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: categoryvideos_post
});

const latestvideo_post = defineEventHandler(async (event) => {
  const getBody = await readBody(event);
  const videos = await prisma.bn_videos.findMany({
    where: {
      type: 1,
      status: 1,
      deletable: 1
    },
    orderBy: {
      id: "desc"
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    take: parseInt(getBody == null ? void 0 : getBody.take)
  });
  const total = await prisma.bn_videos.aggregate({
    _count: {
      id: true
    },
    where: {
      type: 1
    }
  });
  return {
    videos,
    total_videos: total._count.id
  };
});

const latestvideo_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestvideo_post
});

const latestvideos_get = defineEventHandler(async (event) => {
  const nationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 1,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const saradeshVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 2,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const entertainmentVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 4,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const internationalVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 3,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const lifestyleVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 7,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const sportVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 5,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const tourismVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 6,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const artcultureVideos = await prisma.bn_videos.findMany({
    where: {
      cat_id: 8,
      status: 1,
      deletable: 1
    },
    select: {
      id: true,
      title: true,
      code: true,
      img_bg_path: true,
      created_at: true
    },
    orderBy: {
      id: "desc"
    },
    take: 5
  });
  const data = [
    {
      id: nationalVideos[0].id,
      title: nationalVideos[0].title,
      code: nationalVideos[0].code,
      img_bg_path: nationalVideos[0].img_bg_path,
      created_at: nationalVideos[0].created_at
    },
    {
      id: nationalVideos[1].id,
      title: nationalVideos[1].title,
      code: nationalVideos[1].code,
      img_bg_path: nationalVideos[1].img_bg_path,
      created_at: nationalVideos[1].created_at
    },
    {
      id: nationalVideos[2].id,
      title: nationalVideos[2].title,
      code: nationalVideos[2].code,
      img_bg_path: nationalVideos[2].img_bg_path,
      created_at: nationalVideos[2].created_at
    },
    {
      id: nationalVideos[3].id,
      title: nationalVideos[3].title,
      code: nationalVideos[3].code,
      img_bg_path: nationalVideos[3].img_bg_path,
      created_at: nationalVideos[3].created_at
    },
    {
      id: nationalVideos[4].id,
      title: nationalVideos[4].title,
      code: nationalVideos[4].code,
      img_bg_path: nationalVideos[4].img_bg_path,
      created_at: nationalVideos[4].created_at
    },
    {
      id: saradeshVideos[0].id,
      title: saradeshVideos[0].title,
      code: saradeshVideos[0].code,
      img_bg_path: saradeshVideos[0].img_bg_path,
      created_at: saradeshVideos[0].created_at
    },
    {
      id: saradeshVideos[1].id,
      title: saradeshVideos[1].title,
      code: saradeshVideos[1].code,
      img_bg_path: saradeshVideos[1].img_bg_path,
      created_at: saradeshVideos[1].created_at
    },
    {
      id: saradeshVideos[2].id,
      title: saradeshVideos[2].title,
      code: saradeshVideos[2].code,
      img_bg_path: saradeshVideos[2].img_bg_path,
      created_at: saradeshVideos[2].created_at
    },
    {
      id: saradeshVideos[3].id,
      title: saradeshVideos[3].title,
      code: saradeshVideos[3].code,
      img_bg_path: saradeshVideos[3].img_bg_path,
      created_at: saradeshVideos[3].created_at
    },
    {
      id: saradeshVideos[4].id,
      title: saradeshVideos[4].title,
      code: saradeshVideos[4].code,
      img_bg_path: saradeshVideos[4].img_bg_path,
      created_at: saradeshVideos[4].created_at
    },
    {
      id: entertainmentVideos[0].id,
      title: entertainmentVideos[0].title,
      code: entertainmentVideos[0].code,
      img_bg_path: entertainmentVideos[0].img_bg_path,
      created_at: entertainmentVideos[0].created_at
    },
    {
      id: entertainmentVideos[1].id,
      title: entertainmentVideos[1].title,
      code: entertainmentVideos[1].code,
      img_bg_path: entertainmentVideos[1].img_bg_path,
      created_at: entertainmentVideos[1].created_at
    },
    {
      id: entertainmentVideos[2].id,
      title: entertainmentVideos[2].title,
      code: entertainmentVideos[2].code,
      img_bg_path: entertainmentVideos[2].img_bg_path,
      created_at: entertainmentVideos[2].created_at
    },
    {
      id: entertainmentVideos[3].id,
      title: entertainmentVideos[3].title,
      code: entertainmentVideos[3].code,
      img_bg_path: entertainmentVideos[3].img_bg_path,
      created_at: entertainmentVideos[3].created_at
    },
    {
      id: entertainmentVideos[4].id,
      title: entertainmentVideos[4].title,
      code: entertainmentVideos[4].code,
      img_bg_path: entertainmentVideos[4].img_bg_path,
      created_at: entertainmentVideos[4].created_at
    },
    {
      id: internationalVideos[0].id,
      title: internationalVideos[0].title,
      code: internationalVideos[0].code,
      img_bg_path: internationalVideos[0].img_bg_path,
      created_at: internationalVideos[0].created_at
    },
    {
      id: internationalVideos[1].id,
      title: internationalVideos[1].title,
      code: internationalVideos[1].code,
      img_bg_path: internationalVideos[1].img_bg_path,
      created_at: internationalVideos[1].created_at
    },
    {
      id: internationalVideos[2].id,
      title: internationalVideos[2].title,
      code: internationalVideos[2].code,
      img_bg_path: internationalVideos[2].img_bg_path,
      created_at: internationalVideos[2].created_at
    },
    {
      id: internationalVideos[3].id,
      title: internationalVideos[3].title,
      code: internationalVideos[3].code,
      img_bg_path: internationalVideos[3].img_bg_path,
      created_at: internationalVideos[3].created_at
    },
    {
      id: internationalVideos[4].id,
      title: internationalVideos[4].title,
      code: internationalVideos[4].code,
      img_bg_path: internationalVideos[4].img_bg_path,
      created_at: internationalVideos[4].created_at
    },
    {
      id: lifestyleVideos[0].id,
      title: lifestyleVideos[0].title,
      code: lifestyleVideos[0].code,
      img_bg_path: lifestyleVideos[0].img_bg_path,
      created_at: lifestyleVideos[0].created_at
    },
    {
      id: lifestyleVideos[1].id,
      title: lifestyleVideos[1].title,
      code: lifestyleVideos[1].code,
      img_bg_path: lifestyleVideos[1].img_bg_path,
      created_at: lifestyleVideos[1].created_at
    },
    {
      id: lifestyleVideos[2].id,
      title: lifestyleVideos[2].title,
      code: lifestyleVideos[2].code,
      img_bg_path: lifestyleVideos[2].img_bg_path,
      created_at: lifestyleVideos[2].created_at
    },
    {
      id: lifestyleVideos[3].id,
      title: lifestyleVideos[3].title,
      code: lifestyleVideos[3].code,
      img_bg_path: lifestyleVideos[3].img_bg_path,
      created_at: lifestyleVideos[3].created_at
    },
    {
      id: lifestyleVideos[4].id,
      title: lifestyleVideos[4].title,
      code: lifestyleVideos[4].code,
      img_bg_path: lifestyleVideos[4].img_bg_path,
      created_at: lifestyleVideos[4].created_at
    },
    {
      id: sportVideos[0].id,
      title: sportVideos[0].title,
      code: sportVideos[0].code,
      img_bg_path: sportVideos[0].img_bg_path,
      created_at: sportVideos[0].created_at
    },
    {
      id: sportVideos[1].id,
      title: sportVideos[1].title,
      code: sportVideos[1].code,
      img_bg_path: sportVideos[1].img_bg_path,
      created_at: sportVideos[1].created_at
    },
    {
      id: sportVideos[2].id,
      title: sportVideos[2].title,
      code: sportVideos[2].code,
      img_bg_path: sportVideos[2].img_bg_path,
      created_at: sportVideos[2].created_at
    },
    {
      id: sportVideos[3].id,
      title: sportVideos[3].title,
      code: sportVideos[3].code,
      img_bg_path: sportVideos[3].img_bg_path,
      created_at: sportVideos[3].created_at
    },
    {
      id: sportVideos[4].id,
      title: sportVideos[4].title,
      code: sportVideos[4].code,
      img_bg_path: sportVideos[4].img_bg_path,
      created_at: sportVideos[4].created_at
    },
    {
      id: tourismVideos[0].id,
      title: tourismVideos[0].title,
      code: tourismVideos[0].code,
      img_bg_path: tourismVideos[0].img_bg_path,
      created_at: tourismVideos[0].created_at
    },
    {
      id: tourismVideos[1].id,
      title: tourismVideos[1].title,
      code: tourismVideos[1].code,
      img_bg_path: tourismVideos[1].img_bg_path,
      created_at: tourismVideos[1].created_at
    },
    {
      id: tourismVideos[2].id,
      title: tourismVideos[2].title,
      code: tourismVideos[2].code,
      img_bg_path: tourismVideos[2].img_bg_path,
      created_at: tourismVideos[2].created_at
    },
    {
      id: tourismVideos[3].id,
      title: tourismVideos[3].title,
      code: tourismVideos[3].code,
      img_bg_path: tourismVideos[3].img_bg_path,
      created_at: tourismVideos[3].created_at
    },
    {
      id: tourismVideos[4].id,
      title: tourismVideos[4].title,
      code: tourismVideos[4].code,
      img_bg_path: tourismVideos[4].img_bg_path,
      created_at: tourismVideos[4].created_at
    },
    {
      id: artcultureVideos[0].id,
      title: artcultureVideos[0].title,
      code: artcultureVideos[0].code,
      img_bg_path: artcultureVideos[0].img_bg_path,
      created_at: artcultureVideos[0].created_at
    },
    {
      id: artcultureVideos[1].id,
      title: artcultureVideos[1].title,
      code: artcultureVideos[1].code,
      img_bg_path: artcultureVideos[1].img_bg_path,
      created_at: artcultureVideos[1].created_at
    },
    {
      id: artcultureVideos[2].id,
      title: artcultureVideos[2].title,
      code: artcultureVideos[2].code,
      img_bg_path: artcultureVideos[2].img_bg_path,
      created_at: artcultureVideos[2].created_at
    },
    {
      id: artcultureVideos[3].id,
      title: artcultureVideos[3].title,
      code: artcultureVideos[3].code,
      img_bg_path: artcultureVideos[3].img_bg_path,
      created_at: artcultureVideos[3].created_at
    },
    {
      id: artcultureVideos[4].id,
      title: artcultureVideos[4].title,
      code: artcultureVideos[4].code,
      img_bg_path: artcultureVideos[4].img_bg_path,
      created_at: artcultureVideos[4].created_at
    }
  ];
  return {
    videos: data,
    total: data == null ? void 0 : data.length
  };
});

const latestvideos_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: latestvideos_get
});

const singlevideo_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const getBody = await readBody(event);
  const video = await prisma.bn_videos.findFirst({
    where: {
      id: parseInt(getBody == null ? void 0 : getBody.id)
    }
  });
  if (video) {
    const currentCategory = await prisma.bn_video_categories.findFirst({
      where: {
        id: parseInt(video == null ? void 0 : video.cat_id)
      }
    });
    const currentVideo = {
      id: video == null ? void 0 : video.id,
      cat_id: currentCategory == null ? void 0 : currentCategory.id,
      type: video == null ? void 0 : video.type,
      title: video == null ? void 0 : video.title,
      code: video == null ? void 0 : video.code,
      img_bg_path: video == null ? void 0 : video.img_bg_path,
      link: video == null ? void 0 : video.link,
      cat_name_bn: currentCategory == null ? void 0 : currentCategory.name_bn,
      cat_slug: currentCategory == null ? void 0 : currentCategory.slug,
      created_at: video == null ? void 0 : video.created_at
    };
    const videos = await prisma.bn_videos.findMany({
      orderBy: {
        id: "desc"
      },
      take: 6
    });
    const getVideos = [];
    for (let i = 0; i < (videos == null ? void 0 : videos.length); i++) {
      if (((_a = videos[i]) == null ? void 0 : _a.id) !== (video == null ? void 0 : video.id)) {
        const category = await prisma.bn_video_categories.findFirst({
          where: {
            id: (_b = videos[i]) == null ? void 0 : _b.cat_id
          }
        });
        getVideos.push({
          id: (_c = videos[i]) == null ? void 0 : _c.id,
          cat_id: (_d = videos[i]) == null ? void 0 : _d.cat_id,
          type: (_e = videos[i]) == null ? void 0 : _e.type,
          title: (_f = videos[i]) == null ? void 0 : _f.title,
          code: (_g = videos[i]) == null ? void 0 : _g.code,
          img_bg_path: (_h = videos[i]) == null ? void 0 : _h.img_bg_path,
          link: (_i = videos[i]) == null ? void 0 : _i.link,
          cat_name_bn: category == null ? void 0 : category.name_bn,
          cat_slug: category == null ? void 0 : category.slug,
          created_at: (_j = videos[i]) == null ? void 0 : _j.created_at
        });
      }
    }
    return {
      currentVideo,
      getVideos
    };
  }
});

const singlevideo_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: singlevideo_post
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/theme/dplive/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://D:/theme/dplive/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = false ;
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
