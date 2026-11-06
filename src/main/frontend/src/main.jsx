import React from "react";
import { createRoot } from "react-dom/client";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import "./styles.css";
import reviewMatch01 from "./assets/reviews/review-match-01.png";
import reviewMatch02 from "./assets/reviews/review-match-02.png";
import reviewMatch03 from "./assets/reviews/review-match-03.png";
import reviewMatch04 from "./assets/reviews/review-match-04.png";
import reviewMatch05 from "./assets/reviews/review-match-05.png";
import reviewMatch06 from "./assets/reviews/review-match-06.png";

const reviewImages = [
  reviewMatch01,
  reviewMatch02,
  reviewMatch03,
  reviewMatch04,
  reviewMatch05,
  reviewMatch06
];

const copy = {
  zh: {
    title: "TennisZon 专业网球装备商城",
    subtitle: "为认真打球的人准备",
    intro: "从比赛级球拍到日常训练配件，TennisZon 以职业化选品、清晰导购与高性能视觉体验，让每一次购买都更接近你的理想手感。",
    nav: ["精选商品", "竞技优势", "系列推荐", "球员口碑"],
    actions: {
      browse: "浏览热销装备",
      learn: "查看专业能力",
      add: "加入购物车",
      cart: "购物车",
      close: "关闭",
      clear: "清空购物车",
      checkout: "去结算",
      empty: "购物车还是空的，先挑一件装备吧。",
      subtotal: "商品小计",
      shipping: "预计运费",
      total: "合计"
    },
    filters: {
      all: "全部",
      racket: "球拍",
      shoe: "球鞋",
      apparel: "服饰",
      accessory: "配件"
    },
    metrics: ["320+ 专业单品", "48h 快速发货", "4.9/5 球员评分"],
    categories: [
      ["专业球拍", "控制型、力量型与全能型拍框，覆盖单打和双打不同打法。"],
      ["场地球鞋", "硬地、红土与全场地鞋底结构，兼顾抓地与缓震反馈。"],
      ["比赛服饰", "轻量速干面料与俱乐部风剪裁，适合训练日与赛事日切换。"],
      ["训练配件", "网球、握把胶、阻力带、便携发球练习装备和收纳包。"]
    ],
    productsHeading: "核心商品矩阵",
    productsText: "围绕击球表现、场地适应性和日常训练强度，整理出最常被专业与进阶球员选购的品类。",
    performanceHeading: "专业站点该有的购买体验",
    performance: [
      ["按打法导购", "将控制、旋转、爆发和稳定性映射到具体产品，帮助用户快速做出判断。"],
      ["装备组合建议", "推荐成套方案，覆盖训练、比赛、旅行和俱乐部采购场景。"],
      ["会员与复购体系", "网球、拍线和握把胶等消耗品可支持周期补货。"]
    ],
    reviewsHeading: "来自真实球员的信任感",
    reviews: [
      ["分类方式很专业，是真的理解球员选装备时在意什么。", "张越 / 俱乐部教练"],
      ["球拍和鞋履的推荐逻辑很清楚，我能快速找到硬地训练组合。", "林乔 / 业余联赛选手"],
      ["视觉质感像高端运动品牌官网，信任感比普通商城强很多。", "陈思 / 赛事策划人"],
      ["训练装备分类清楚，比赛日需要的鞋、拍、包都能一次配齐。", "沈亦 / 高校校队队员"],
      ["青少年球拍和训练球推荐很实用，家长也能快速看懂差异。", "周睿 / 青少年球员"],
      ["页面上的装备组合很接近真实比赛需求，选购效率明显更高。", "许辰 / 公开赛选手"]
    ]
  },
  en: {
    title: "TennisZon Professional Tennis Store",
    subtitle: "Built for serious players",
    intro: "From match-grade rackets to everyday training essentials, TennisZon combines expert curation, clear buying guidance, and a premium shopping experience.",
    nav: ["Products", "Performance", "Collections", "Reviews"],
    actions: {
      browse: "Browse Gear",
      learn: "Why TennisZon",
      add: "Add to Cart",
      cart: "Cart",
      close: "Close",
      clear: "Clear Cart",
      checkout: "Checkout",
      empty: "Your cart is empty. Pick a piece of gear to get started.",
      subtotal: "Subtotal",
      shipping: "Estimated shipping",
      total: "Total"
    },
    filters: {
      all: "All",
      racket: "Rackets",
      shoe: "Shoes",
      apparel: "Apparel",
      accessory: "Accessories"
    },
    metrics: ["320+ pro items", "48h dispatch", "4.9/5 player rating"],
    categories: [
      ["Performance Rackets", "Control, power, and all-court frames for singles and doubles players."],
      ["Court Shoes", "Hard-court, clay, and all-court outsoles with grip and cushioning."],
      ["Match Apparel", "Light quick-dry pieces with a refined club look for training and match days."],
      ["Training Accessories", "Balls, overgrips, bands, serve trainers, and court-ready bags."]
    ],
    productsHeading: "Core Product Lineup",
    productsText: "Shop the categories trusted by competitive and improving players, organized around style, surface, and training intensity.",
    performanceHeading: "A Better Way To Buy Tennis Gear",
    performance: [
      ["Shop By Style", "Map control, spin, power, and stability to specific products."],
      ["Complete Gear Sets", "Recommend full setups for training, match day, travel, and clubs."],
      ["Replenishment Ready", "Balls, strings, and overgrips can support repeat ordering."]
    ],
    reviewsHeading: "Trusted By Real Players",
    reviews: [
      ["The category logic feels genuinely professional.", "Yue Zhang / Club Coach"],
      ["I quickly found the right hard-court training setup.", "Jo Lin / League Player"],
      ["It feels like a premium sports brand site.", "Si Chen / Event Planner"],
      ["The match-day gear sets make shoes, rackets, and bags easy to compare.", "Ian Shen / College Player"],
      ["The junior racket and training ball picks are clear enough for parents too.", "Rui Zhou / Junior Player"],
      ["The product bundles match real tournament needs and save shopping time.", "Chen Xu / Open Tournament Player"]
    ]
  }
};

function toStoreProduct(product) {
  return {
    id: product.id,
    type: product.category,
    badge: product.badge,
    name: product.name,
    price: product.price,
    currency: product.currency,
    zh: product.descriptionZh || product.description_zh,
    en: product.descriptionEn || product.description_en
  };
}

const products = [
  {
    id: "pro-spin-98",
    type: "racket",
    badge: "Top Seller",
    name: "Pro Spin 98",
    price: 1899,
    zh: "98 拍面 / 305g / 旋转控制型",
    en: "98 sq in / 305g / Spin-control frame"
  },
  {
    id: "baseline-sprint-x",
    type: "shoe",
    badge: "Hard Court",
    name: "Baseline Sprint X",
    price: 899,
    zh: "硬地缓震结构 / 高包裹鞋面 / 快速变向支撑",
    en: "Hard-court cushioning / Locked-in upper / Fast lateral support"
  },
  {
    id: "match-day-polo",
    type: "apparel",
    badge: "Club Style",
    name: "Match Day Polo",
    price: 329,
    zh: "轻量速干面料 / 俱乐部线条设计 / 全天舒适",
    en: "Light quick-dry fabric / Club lines / All-day comfort"
  },
  {
    id: "strike-100-team",
    type: "racket",
    badge: "Power Frame",
    name: "Strike 100 Team",
    price: 1599,
    zh: "100 拍面 / 易上手 / 更宽容的甜区表现",
    en: "100 sq in / Easy power / More forgiving sweet spot"
  },
  {
    id: "tour-overgrip-pack",
    type: "accessory",
    badge: "Training",
    name: "Tour Overgrip Pack",
    price: 89,
    zh: "12 条装 / 高吸汗 / 稳定握感",
    en: "12-pack / High absorbency / Stable feel"
  },
  {
    id: "aero-control-100",
    type: "racket",
    badge: "All Court",
    name: "Aero Control 100",
    price: 1699,
    zh: "100 拍面 / 轻快挥速 / 攻守均衡",
    en: "100 sq in / Fast swing speed / Balanced attack and defense"
  },
  {
    id: "clay-glide-pro",
    type: "shoe",
    badge: "Clay Court",
    name: "Clay Glide Pro",
    price: 969,
    zh: "红土纹路鞋底 / 侧向支撑 / 稳定滑步",
    en: "Clay outsole / Lateral support / Controlled sliding"
  },
  {
    id: "ace-training-ball-72",
    type: "accessory",
    badge: "Club Pack",
    name: "Ace Training Ball 72",
    price: 699,
    zh: "72 颗装 / 高耐用毛毡 / 适合多球训练",
    en: "72-ball pack / Durable felt / Built for basket drills"
  },
  {
    id: "baseline-duffel-9",
    type: "accessory",
    badge: "Travel",
    name: "Baseline Duffel 9",
    price: 459,
    zh: "9 支装球包 / 独立鞋仓 / 防泼水面料",
    en: "9-racket bag / Shoe tunnel / Water-resistant shell"
  },
  {
    id: "court-air-tee",
    type: "apparel",
    badge: "New Color",
    name: "Court Air Tee",
    price: 239,
    zh: "透气网眼拼接 / 轻量剪裁 / 高强度训练",
    en: "Breathable mesh panels / Light cut / High-intensity sessions"
  },
  {
    id: "match-flow-skirt",
    type: "apparel",
    badge: "Match Fit",
    name: "Match Flow Skirt",
    price: 299,
    zh: "内置短裤 / 弹力腰头 / 比赛日廓形",
    en: "Built-in shorts / Stretch waistband / Match-day silhouette"
  },
  {
    id: "poly-spin-string",
    type: "accessory",
    badge: "String Lab",
    name: "Poly Spin String",
    price: 129,
    zh: "1.25mm 聚酯线 / 强上旋 / 更清晰击球反馈",
    en: "1.25mm polyester / Heavy spin / Crisp ball feedback"
  },
  {
    id: "junior-start-25",
    type: "racket",
    badge: "Junior",
    name: "Junior Start 25",
    price: 499,
    zh: "25 英寸 / 青少年入门 / 易挥动铝合金拍框",
    en: "25 inch / Junior starter / Easy-swing aluminum frame"
  }
];

function formatPrice(value, lang) {
  return new Intl.NumberFormat(lang === "zh" ? "zh-CN" : "en-US", {
    style: "currency",
    currency: lang === "zh" ? "CNY" : "USD",
    maximumFractionDigits: 0
  }).format(lang === "zh" ? value : Math.round(value / 7));
}

function App() {
  const [lang, setLang] = React.useState(() => localStorage.getItem("tenniszon-lang") || "zh");
  const [filter, setFilter] = React.useState("all");
  const [cartOpen, setCartOpen] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [productsStatus, setProductsStatus] = React.useState("loading");
  const [cart, setCart] = React.useState(() => {
    const saved = localStorage.getItem("tenniszon-cart");
    return saved ? JSON.parse(saved) : {};
  });

  const t = copy[lang];
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.type === filter);
  const cartItems = Object.values(cart);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 && subtotal < 1200 ? 39 : 0;
  const total = subtotal + shipping;

  React.useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = lang === "zh" ? "TennisZon | 专业网球装备商城" : "TennisZon | Professional Tennis Store";
    localStorage.setItem("tenniszon-lang", lang);
  }, [lang]);

  React.useEffect(() => {
    localStorage.setItem("tenniszon-cart", JSON.stringify(cart));
  }, [cart]);

  React.useEffect(() => {
    let ignore = false;

    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load products");
        }

        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setProducts(data.map(toStoreProduct));
          setProductsStatus("ready");
        }
      })
      .catch(() => {
        if (!ignore) {
          setProducts([]);
          setProductsStatus("error");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  function addToCart(product) {
    setCart((current) => ({
      ...current,
      [product.id]: {
        ...product,
        quantity: (current[product.id]?.quantity || 0) + 1
      }
    }));
    setCartOpen(true);
  }

  function updateQuantity(productId, quantity) {
    setCart((current) => {
      if (quantity <= 0) {
        const next = { ...current };
        delete next[productId];
        return next;
      }

      return {
        ...current,
        [productId]: {
          ...current[productId],
          quantity
        }
      };
    });
  }

  return (
    <>
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#home" aria-label="TennisZon">
            <span className="brand-mark">TZ</span>
            <span className="brand-copy">
              <strong>TennisZon</strong>
              <small>Performance Tennis Store</small>
            </span>
          </a>

          <nav className="nav">
            {t.nav.map((label, index) => (
              <a key={label} href={["#products", "#performance", "#collection", "#reviews"][index]}>
                {label}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <div className="language-switch" aria-label="Language switcher">
              <button className={lang === "zh" ? "lang-button is-active" : "lang-button"} type="button" onClick={() => setLang("zh")}>
                中文
              </button>
              <button className={lang === "en" ? "lang-button is-active" : "lang-button"} type="button" onClick={() => setLang("en")}>
                EN
              </button>
            </div>
            <button className="cart-trigger" type="button" onClick={() => setCartOpen(true)} aria-label={t.actions.cart}>
              <ShoppingBag size={19} />
              <span>{itemCount}</span>
            </button>
          </div>
        </header>

        <main id="home">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">{t.subtitle}</p>
              <h1>{t.title}</h1>
              <p className="hero-text">{t.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">{t.actions.browse}</a>
                <a className="button button-secondary" href="#performance">{t.actions.learn}</a>
              </div>
              <ul className="hero-metrics">
                {t.metrics.map((metric) => (
                  <li key={metric}>
                    <strong>{metric.split(" ")[0]}</strong>
                    <span>{metric.split(" ").slice(1).join(" ")}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-visual">
              <div className="hero-card hero-main-card">
                <p>Champion Setup</p>
                <h2>{products[0]?.name || "Pro Spin 98"}</h2>
                <span>{products[0]?.[lang] || (lang === "zh" ? "正在从商品数据库加载" : "Loading from the product catalog")}</span>
              </div>
              <div className="hero-card hero-side-card">
                <p>Editor's Pick</p>
                <h3>Clay Court Kit</h3>
                <span>{lang === "zh" ? "鞋履、吸汗带与训练球一站配齐" : "Shoes, wristbands, and training balls in one kit"}</span>
              </div>
              <div className="court-lines" aria-hidden="true"></div>
            </div>
          </section>

          <section className="trust-strip">
            {["Pro-feel", "Stringing", "Training", "Club orders"].map((label, index) => (
              <p key={label}>{lang === "zh" ? ["职业手感选品", "拍线磅数建议", "分级训练装备", "俱乐部批量采购"][index] : label}</p>
            ))}
          </section>

          <section id="products" className="products">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Featured Gear</p>
                <h2>{t.productsHeading}</h2>
              </div>
              <p>{t.productsText}</p>
            </div>

            <div className="category-grid">
              {t.categories.map(([title, text], index) => (
                <article className={`category-card ${["accent-orange", "accent-green", "accent-cream", "accent-dark"][index]}`} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="product-toolbar">
              {Object.entries(t.filters).map(([key, label]) => (
                <button className={filter === key ? "filter-pill is-active" : "filter-pill"} type="button" key={key} onClick={() => setFilter(key)}>
                  {label}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {productsStatus === "loading" && (
                <p className="product-state">{lang === "zh" ? "正在加载商品..." : "Loading products..."}</p>
              )}
              {productsStatus === "error" && (
                <p className="product-state">{lang === "zh" ? "商品加载失败，请检查数据库连接。" : "Products failed to load. Check the database connection."}</p>
              )}
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-badge">{product.badge}</div>
                  <h3>{product.name}</h3>
                  <p>{product[lang]}</p>
                  <div className="product-meta">
                    <strong>{formatPrice(product.price, lang)}</strong>
                    <button className="ghost-button" type="button" onClick={() => addToCart(product)}>
                      <ShoppingBag size={16} />
                      {t.actions.add}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="performance" className="performance">
            <div className="section-heading compact">
              <p className="eyebrow">Why TennisZon</p>
              <h2>{t.performanceHeading}</h2>
            </div>
            <div className="performance-grid">
              {t.performance.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="collection" className="collection">
            <div className="collection-copy">
              <p className="eyebrow">Season Edit</p>
              <h2>{lang === "zh" ? "从基础训练到比赛日，一页完成搭配" : "From Training Basics To Match Day"}</h2>
              <p>{lang === "zh" ? "这个 React 前端已经可以继续扩展成完整商城，包括商品详情页、购物车结算、会员体系和后台商品管理。" : "This React frontend can grow into a full store with product details, checkout, memberships, and admin tools."}</p>
              <button className="button button-primary" type="button" onClick={() => setCartOpen(true)}>{t.actions.cart}</button>
            </div>
            <div className="collection-stack">
              {["Starter Pack", "Tournament Pack", "Coach Picks"].map((label, index) => (
                <div className={index === 1 ? "stack-card highlight" : "stack-card"} key={label}>
                  <p>{label}</p>
                  <strong>{lang === "zh" ? ["新手入门组合", "比赛日组合", "教练推荐清单"][index] : ["Starter setup", "Match-day setup", "Coach picks"][index]}</strong>
                  <span>{lang === "zh" ? ["球拍 + 球鞋 + 训练球", "高性能球拍 + 比赛服 + 专业包袋", "按训练目标与年龄段筛选"][index] : ["Racket + shoes + balls", "Racket + apparel + pro bag", "Filter by goal and age group"][index]}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="reviews" className="reviews">
            <div className="section-heading compact">
              <p className="eyebrow">Player Voices</p>
              <h2>{t.reviewsHeading}</h2>
            </div>
            <div className="review-grid">
              {t.reviews.map(([text, author], index) => (
                <blockquote className="review-card" key={author}>
                  <img src={reviewImages[index]} alt="" loading="lazy" />
                  <p>"{text}"</p>
                  <footer>{author}</footer>
                </blockquote>
              ))}
            </div>
          </section>
        </main>
      </div>

      <div className={cartOpen ? "cart-backdrop is-open" : "cart-backdrop"} onClick={() => setCartOpen(false)}></div>
      <aside className={cartOpen ? "cart-drawer is-open" : "cart-drawer"} aria-label={t.actions.cart}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">{t.actions.cart}</p>
            <h2>{itemCount} {lang === "zh" ? "件商品" : "items"}</h2>
          </div>
          <button className="icon-button" type="button" onClick={() => setCartOpen(false)} aria-label={t.actions.close}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-list">
          {cartItems.length === 0 ? (
            <p className="empty-cart">{t.actions.empty}</p>
          ) : (
            cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item[lang]}</p>
                  <span>{formatPrice(item.price, lang)}</span>
                </div>
                <div className="quantity-control">
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">
                    <Minus size={15} />
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">
                    <Plus size={15} />
                  </button>
                  <button className="remove-button" type="button" onClick={() => updateQuantity(item.id, 0)} aria-label="Remove item">
                    <Trash2 size={15} />
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="cart-summary">
          <div>
            <span>{t.actions.subtotal}</span>
            <strong>{formatPrice(subtotal, lang)}</strong>
          </div>
          <div>
            <span>{t.actions.shipping}</span>
            <strong>{formatPrice(shipping, lang)}</strong>
          </div>
          <div className="summary-total">
            <span>{t.actions.total}</span>
            <strong>{formatPrice(total, lang)}</strong>
          </div>
          <button className="button button-primary checkout-button" type="button" disabled={cartItems.length === 0}>
            {t.actions.checkout}
          </button>
          <button className="clear-cart" type="button" onClick={() => setCart({})} disabled={cartItems.length === 0}>
            {t.actions.clear}
          </button>
        </div>
      </aside>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
