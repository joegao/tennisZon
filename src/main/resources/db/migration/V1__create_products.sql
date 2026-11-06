CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('racket', 'shoe', 'apparel', 'accessory')),
    description_zh TEXT NOT NULL,
    description_en TEXT NOT NULL,
    price INTEGER NOT NULL CHECK (price >= 0),
    currency TEXT NOT NULL DEFAULT 'CNY',
    badge TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO products
    (id, name, category, description_zh, description_en, price, currency, badge, sort_order)
VALUES
    ('pro-spin-98', 'Pro Spin 98', 'racket', '98 拍面 / 305g / 旋转控制型', '98 sq in / 305g / Spin-control frame', 1899, 'CNY', 'Top Seller', 10),
    ('baseline-sprint-x', 'Baseline Sprint X', 'shoe', '硬地缓震结构 / 高包裹鞋面 / 快速变向支撑', 'Hard-court cushioning / Locked-in upper / Fast lateral support', 899, 'CNY', 'Hard Court', 20),
    ('match-day-polo', 'Match Day Polo', 'apparel', '轻量速干面料 / 俱乐部线条设计 / 全天舒适', 'Light quick-dry fabric / Club lines / All-day comfort', 329, 'CNY', 'Club Style', 30),
    ('strike-100-team', 'Strike 100 Team', 'racket', '100 拍面 / 易上手 / 更宽容的甜区表现', '100 sq in / Easy power / More forgiving sweet spot', 1599, 'CNY', 'Power Frame', 40),
    ('tour-overgrip-pack', 'Tour Overgrip Pack', 'accessory', '12 条装 / 高吸汗 / 稳定握感', '12-pack / High absorbency / Stable feel', 89, 'CNY', 'Training', 50),
    ('aero-control-100', 'Aero Control 100', 'racket', '100 拍面 / 轻快挥速 / 攻守均衡', '100 sq in / Fast swing speed / Balanced attack and defense', 1699, 'CNY', 'All Court', 60),
    ('clay-glide-pro', 'Clay Glide Pro', 'shoe', '红土纹路鞋底 / 侧向支撑 / 稳定滑步', 'Clay outsole / Lateral support / Controlled sliding', 969, 'CNY', 'Clay Court', 70),
    ('ace-training-ball-72', 'Ace Training Ball 72', 'accessory', '72 颗装 / 高耐用毛毡 / 适合多球训练', '72-ball pack / Durable felt / Built for basket drills', 699, 'CNY', 'Club Pack', 80),
    ('baseline-duffel-9', 'Baseline Duffel 9', 'accessory', '9 支装球包 / 独立鞋仓 / 防泼水面料', '9-racket bag / Shoe tunnel / Water-resistant shell', 459, 'CNY', 'Travel', 90),
    ('court-air-tee', 'Court Air Tee', 'apparel', '透气网眼拼接 / 轻量剪裁 / 高强度训练', 'Breathable mesh panels / Light cut / High-intensity sessions', 239, 'CNY', 'New Color', 100),
    ('match-flow-skirt', 'Match Flow Skirt', 'apparel', '内置短裤 / 弹力腰头 / 比赛日廓形', 'Built-in shorts / Stretch waistband / Match-day silhouette', 299, 'CNY', 'Match Fit', 110),
    ('poly-spin-string', 'Poly Spin String', 'accessory', '1.25mm 聚酯线 / 强上旋 / 更清晰击球反馈', '1.25mm polyester / Heavy spin / Crisp ball feedback', 129, 'CNY', 'String Lab', 120),
    ('junior-start-25', 'Junior Start 25', 'racket', '25 英寸 / 青少年入门 / 易挥动铝合金拍框', '25 inch / Junior starter / Easy-swing aluminum frame', 499, 'CNY', 'Junior', 130)
ON CONFLICT (id) DO NOTHING;
