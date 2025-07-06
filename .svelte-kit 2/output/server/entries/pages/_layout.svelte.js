import "clsx";
import { E as getContext, F as ensure_array_like, G as attr_class, I as attr, J as escape_html, K as stringify, M as store_get, N as unsubscribe_stores, D as pop, z as push, O as bind_props } from "../../chunks/index.js";
import "../../chunks/client.js";
import { i as derived } from "../../chunks/exports.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Nav($$payload, $$props) {
  push();
  var $$store_subs;
  let active = derived(page, ($page) => $page.url.pathname.slice(1));
  let { navs, mobile, classP } = $$props;
  const each_array = ensure_array_like(navs);
  $$payload.out += `<nav${attr_class(
    `${stringify(classP)} ${stringify(mobile ? "w-full flex flex-col gap-2" : "hidden md:flex h-full")}`,
    "svelte-9an2ox"
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let nav = each_array[$$index];
    $$payload.out += `<a${attr("href", `/${stringify(nav)}`)}${attr_class(`group ${stringify(store_get($$store_subs ??= {}, "$active", active) == nav ? "bg-gray-950/50" : "")} ${stringify(mobile ? "items-center bg-black" : "flex-col")} flex gap-0.5 p-2 justify-center transition-all duration-300 hover:-translate-y-0.5 hover:gap-2 hover:text-carrot-400 hover:bg-gray-950/50`)}><img${attr("src", `/icon/${stringify(nav)}.svg`)}${attr("alt", nav)} class="min-w-[32px] h-[50%]"/> <p${attr_class(
      `${stringify(mobile ? "mobile" : "hidden lg:block")} uppercase text-[80%] ${stringify(store_get($$store_subs ??= {}, "$active", active) == nav ? "text-[var(--color-accent)]" : "text-[var(--color-gray)] group-hover:text-[var(--color-accent)]")}`,
      "svelte-9an2ox"
    )}>${escape_html(nav)}</p></a>`;
  }
  $$payload.out += `<!--]--></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Odometer($$payload, $$props) {
  push();
  let { value = void 0 } = $$props;
  let digits = value.toString().split("");
  const each_array = ensure_array_like(digits);
  $$payload.out += `<b class="text-[100%] whitespace-nowrap text-green-600"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let digit = each_array[i];
    $$payload.out += `<span class="animation inline-block transition-transform duration-300 ease-in-out svelte-37opkm">${escape_html(digit)}</span>`;
  }
  $$payload.out += `<!--]--></b>`;
  bind_props($$props, { value });
  pop();
}
function Select($$payload, $$props) {
  push();
  let { select, selected } = $$props;
  $$payload.out += `<div class="relative"><button${attr_class(`${stringify("text-[var(--color-gray)] border-[var(--color-gray)]")} flex gap-1 cursor-pointer p-1 rounded-sm border hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]`)}>`;
  if (selected?.img) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", selected?.img)}${attr("alt", selected?.optional)}/>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p>${escape_html(selected?.optional)}</p></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function Social($$payload, $$props) {
  const SOCIALS = {
    "telegram": "https://m.sitehelp.me/telegram?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Ft.me%2Fcasebattle_official",
    "youtube": "https://www.youtube.com/c/CaseBattle",
    "vk": "https://m.sitehelp.me/vkGroup?siteId=eq0s19wly8wl0ir2w43xns0amci3niqv&clientId=fxaJzul5K8Q8UeawlbztSoideDAsETKI&url=https%3A%2F%2Fvk.com%2Fcasebattle",
    "twitch": "https://www.twitch.tv/casebattle_official"
  };
  let { mobile, classP } = $$props;
  const each_array = ensure_array_like(Object.entries(SOCIALS));
  $$payload.out += `<div${attr_class(`${stringify(classP)} ${stringify(mobile ? "flex" : "hidden md:flex h-[80%]")} gap-2 items-center border-y-1 border-[var(--color-accent)]`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [name, link] = each_array[$$index];
    $$payload.out += `<a${attr("href", link)}><img${attr("src", `/icon/${stringify(name)}`)}${attr("alt", name)}${attr("title", name)} class="hover:bg-white"/></a>`;
  }
  $$payload.out += `<!--]--></div>`;
}
function Header($$payload, $$props) {
  push();
  const SLOGAN = "У нас выйгрывают";
  const ONLINE_TITLE = "Пользователей онлайн";
  const CARRENCY_SELECT = [
    { optional: "RUB" },
    { optional: "USD" },
    { optional: "EUR" }
  ];
  const LANG_SELECT = [{ optional: "РУССКИЙ" }, { optional: "ENGLISH" }];
  let navs = ["upgrade", "contract", "giveaway", "tournament"];
  let online = 3917;
  $$payload.out += `<header class="flex pl-[190px] h-[68px] bg-[var(--color-header)]"><a href="/"${attr("title", SLOGAN)} class="fixed top-0 left-0 p-2 w-[190px] h-[68px] flex flex-col gap-1 items-center"><img src="/img/logo.svg"${attr("alt", SLOGAN)} class="cursor-pointer"/> <p class="w-full text-center truncate tracking-wide uppercase text-[10px] text-gray-200">У нас выйгрывают</p></a> `;
  Nav($$payload, { navs });
  $$payload.out += `<!----> <div${attr("title", ONLINE_TITLE)} class="flex flex-col gap-0.5 p-2 tems-center justify-center cursor-help"><img src="/icon/users.svg"${attr("alt", ONLINE_TITLE)}/> `;
  Odometer($$payload, { value: online });
  $$payload.out += `<!----></div> <div class="flex gap-4 w-full p-2 items-center justify-end">`;
  Social($$payload, {});
  $$payload.out += `<!----> `;
  Select($$payload, { select: CARRENCY_SELECT, selected: { optional: "RUB" } });
  $$payload.out += `<!----> `;
  Select($$payload, { select: LANG_SELECT });
  $$payload.out += `<!----> <button data-testid="auth" class="hidden md:flex cursor-pointer"><img src="/img/steam.png" alt="steam"/></button> <button class="flex md:hidden text-white">menu</button></div></header> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  Header($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
