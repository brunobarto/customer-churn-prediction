/* ================= I18N ================= */
const T = {
  en: {
    nav1:"Approach", nav2:"Insights", nav3:"Model", nav4:"Actions",
    tag:"Machine Learning · Retention", title:"Predicting Customer Churn Before It Happens",
    lead:"A gradient-boosted model that flags at-risk subscribers 60 days ahead, so retention teams act on the right customers, not all of them.",
    k1:"Customers analysed", k2:"Annual churn rate", k3:"Model ROC-AUC", k4:"Revenue saved / yr",
    disc:"* Illustrative project — synthetic data modelled on a telecom subscription business.",
    s1:"Approach", s2:"What drives churn", s3:"Model performance", s4:"Business actions",
    p1t:"1. Data", p1:"12,480 customers, 24 features: contract, billing, usage, support tickets, tenure.",
    p2t:"2. Features", p2:"Engineered ratios (charges/tenure), ticket frequency, payment-change flags.",
    p3t:"3. Model", p3:"Logistic regression baseline (AUC 0.78) → XGBoost tuned with 5-fold CV (AUC 0.89).",
    p4t:"4. Deploy", p4:"Weekly risk scores pushed to CRM; SHAP explains each prediction to account managers.",
    hint:"→ Click any chart for an explanation and the business takeaway. Hover for values.",
    c_contract:"Churn rate by contract", c_tenure:"Churn rate by tenure", c_trend:"Monthly churn rate — before vs after model",
    c_features:"Top churn drivers (feature importance)", c_roc:"ROC curve", c_conf:"Confusion matrix (test set, n=2,496)", c_risk:"Customer risk segments",
    m1:"Accuracy", m2:"Precision", m3:"Recall",
    r1t:"Convert month-to-month", r1:"Offer 15% discount on 12-month plans to high-risk monthly customers.",
    r2t:"Onboard in first 6 months", r2:"Welcome calls + tutorials: new customers churn at 47%.",
    r3t:"Fix support friction", r3:"Escalate customers with 3+ tickets to a priority queue within 48h.",
    roi1:"Revenue at risk / yr", roi2:"Campaign cost", roi3:"Revenue retained",
    what:"What it shows", read:"How to read it", biz:"Business insight",
    foot:"Customer Churn Prediction — Portfolio project",
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    contracts:["Monthly","1 year","2 years"], tenures:["0–6m","6–12m","1–2y","2–4y","4y+"],
    feats:["Contract type","Tenure","Monthly charges","Support tickets","Payment method","Internet service","Tech support","Paperless billing"],
    risk:["High","Medium","Low"], conf:["Predicted stay","Predicted churn","Actual stay","Actual churn"],
    deploy:"Model deployed", rand:"Random (0.50)",
    charts:{
      contract:["Churn by contract","Share of customers who left, grouped by contract type.","Taller bar = more churn. Monthly customers churn 15× more than 2-year customers.","Contract length is the #1 lever. Moving even 10% of monthly customers to annual plans cuts overall churn by ~3 points."],
      tenure:["Churn by tenure","Churn rate grouped by how long the customer has been with us.","Risk drops sharply after the first year: 47% churn in 0–6 months vs 5% after 4 years.","The first 6 months are critical. Investing in onboarding has the highest return per euro."],
      trend:["Monthly churn trend","Monthly churn rate over 12 months; the dashed line marks model deployment in June.","After June, churn steadily falls from 19.6% to 15.1% as targeted campaigns start.","Targeted retention lowered churn by 4.5 points in 6 months — about 560 customers kept."],
      features:["Feature importance","How much each variable contributes to the model's predictions (XGBoost gain, sums to 1).","Longer bar = stronger predictor. The top 3 explain 58% of the model's decisions.","Churn is driven by things the business controls: contract, pricing, support. That makes it actionable."],
      roc:["ROC curve","Trade-off between catching churners (true positive rate) and false alarms (false positive rate).","The closer the curve is to the top-left, the better. AUC 0.89 vs 0.50 for random guessing.","The model ranks customers well: budget can go to the top 20% of risk scores and reach ~75% of real churners."],
      confusion:["Confusion matrix","Model predictions vs real outcomes on 2,496 unseen customers.","Diagonal = correct. 566 churners caught, 98 missed, 112 false alarms.","A false alarm costs a €20 discount; a missed churner costs ~€540/yr. The model is tuned to favour recall."],
      risk:["Risk segments","Customers grouped by predicted churn probability: High >60%, Medium 30–60%, Low <30%.","14% of customers are high risk but account for 61% of expected churn.","Focus spend on the 1,750 high-risk customers instead of mass campaigns: 4.8× ROI."]
    },
    steps:["loading dataset","cleaning features","training model","rendering charts","ready"]
  },
  fr: {
    nav1:"Approche", nav2:"Analyses", nav3:"Modèle", nav4:"Actions",
    tag:"Machine Learning · Rétention", title:"Prédire l'attrition client avant qu'elle n'arrive",
    lead:"Un modèle de gradient boosting qui repère les abonnés à risque 60 jours à l'avance, pour que la rétention cible les bons clients, pas tous.",
    k1:"Clients analysés", k2:"Taux d'attrition annuel", k3:"ROC-AUC du modèle", k4:"CA préservé / an",
    disc:"* Projet illustratif — données synthétiques inspirées d'un opérateur télécom par abonnement.",
    s1:"Approche", s2:"Les causes de l'attrition", s3:"Performance du modèle", s4:"Actions business",
    p1t:"1. Données", p1:"12 480 clients, 24 variables : contrat, facturation, usage, tickets support, ancienneté.",
    p2t:"2. Variables", p2:"Ratios créés (montant/ancienneté), fréquence des tickets, changements de paiement.",
    p3t:"3. Modèle", p3:"Régression logistique de référence (AUC 0,78) → XGBoost optimisé en validation croisée (AUC 0,89).",
    p4t:"4. Déploiement", p4:"Scores de risque hebdomadaires envoyés au CRM ; SHAP explique chaque prédiction.",
    hint:"→ Cliquez sur un graphique pour l'explication et l'enseignement business. Survolez pour les valeurs.",
    c_contract:"Attrition par type de contrat", c_tenure:"Attrition par ancienneté", c_trend:"Attrition mensuelle — avant / après modèle",
    c_features:"Principaux facteurs (importance)", c_roc:"Courbe ROC", c_conf:"Matrice de confusion (test, n=2 496)", c_risk:"Segments de risque",
    m1:"Exactitude", m2:"Précision", m3:"Rappel",
    r1t:"Convertir les mensuels", r1:"Offrir 15 % de remise sur un engagement 12 mois aux mensuels à haut risque.",
    r2t:"Accompagner les 6 premiers mois", r2:"Appels de bienvenue + tutoriels : 47 % d'attrition chez les nouveaux.",
    r3t:"Réduire la friction support", r3:"File prioritaire sous 48 h pour les clients avec 3+ tickets.",
    roi1:"CA à risque / an", roi2:"Coût campagne", roi3:"CA conservé",
    what:"Ce que montre le graphique", read:"Comment le lire", biz:"Enseignement business",
    foot:"Prédiction de l'attrition client — Projet portfolio",
    months:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],
    contracts:["Mensuel","1 an","2 ans"], tenures:["0–6m","6–12m","1–2a","2–4a","4a+"],
    feats:["Type de contrat","Ancienneté","Montant mensuel","Tickets support","Moyen de paiement","Service internet","Support technique","Facture en ligne"],
    risk:["Élevé","Moyen","Faible"], conf:["Prédit reste","Prédit part","Reste réel","Part réel"],
    deploy:"Modèle déployé", rand:"Aléatoire (0,50)",
    charts:{
      contract:["Attrition par contrat","Part des clients partis, par type de contrat.","Barre plus haute = plus d'attrition. Les mensuels partent 15× plus que les clients 2 ans.","La durée du contrat est le levier n°1. Basculer 10 % des mensuels vers l'annuel réduit l'attrition globale d'environ 3 points."],
      tenure:["Attrition par ancienneté","Taux d'attrition selon l'ancienneté du client.","Le risque chute après la 1re année : 47 % entre 0 et 6 mois contre 5 % après 4 ans.","Les 6 premiers mois sont décisifs : l'onboarding offre le meilleur retour par euro investi."],
      trend:["Tendance mensuelle","Taux d'attrition mensuel sur 12 mois ; la ligne pointillée marque le déploiement en juin.","Après juin, l'attrition passe de 19,6 % à 15,1 % grâce aux campagnes ciblées.","La rétention ciblée a réduit l'attrition de 4,5 points en 6 mois — environ 560 clients conservés."],
      features:["Importance des variables","Contribution de chaque variable aux prédictions (gain XGBoost, total = 1).","Barre plus longue = facteur plus prédictif. Les 3 premières expliquent 58 % des décisions.","L'attrition dépend de leviers maîtrisés par l'entreprise : contrat, prix, support. C'est actionnable."],
      roc:["Courbe ROC","Compromis entre détection des départs (vrais positifs) et fausses alertes (faux positifs).","Plus la courbe approche le coin supérieur gauche, mieux c'est. AUC 0,89 contre 0,50 au hasard.","Le modèle classe bien : cibler les 20 % de scores les plus élevés touche ~75 % des vrais départs."],
      confusion:["Matrice de confusion","Prédictions du modèle vs résultats réels sur 2 496 clients jamais vus.","Diagonale = correct. 566 départs détectés, 98 manqués, 112 fausses alertes.","Une fausse alerte coûte une remise de 20 € ; un départ manqué ~540 €/an. Le modèle privilégie le rappel."],
      risk:["Segments de risque","Clients regroupés par probabilité de départ : Élevé >60 %, Moyen 30–60 %, Faible <30 %.","14 % des clients sont à haut risque mais représentent 61 % des départs attendus.","Concentrer le budget sur 1 750 clients à haut risque plutôt qu'une campagne de masse : ROI 4,8×."]
    },
    steps:["chargement des données","nettoyage","entraînement","rendu des graphiques","prêt"]
  }
};
let lang = localStorage.getItem("lang") || "en";

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = T[lang][el.dataset.i18n] ?? "");
  document.querySelectorAll(".lang span").forEach(s => s.classList.toggle("on", s.dataset.l === lang));
  drawAll();
}
document.getElementById("langBtn").onclick = () => {
  lang = lang === "en" ? "fr" : "en";
  localStorage.setItem("lang", lang); applyLang();
};

/* ================= THEME & ACCENT ================= */
const body = document.body;
body.dataset.theme = localStorage.getItem("theme") || "dark";
document.getElementById("themeBtn").onclick = () => {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", body.dataset.theme);
  setTimeout(drawAll, 50);
};
function setAccent(c){
  document.documentElement.style.setProperty("--accent", c);
  localStorage.setItem("accent", c);
  document.querySelectorAll(".sw[data-c]").forEach(s => s.classList.toggle("on", s.dataset.c === c));
  drawAll();
}
document.querySelectorAll(".sw[data-c]").forEach(s => s.onclick = () => setAccent(s.dataset.c));
document.getElementById("accentPick").oninput = e => setAccent(e.target.value);

const css = v => getComputedStyle(body).getPropertyValue(v).trim() || getComputedStyle(document.documentElement).getPropertyValue(v).trim();

/* ================= LOADER ================= */
body.classList.add("loading");
(function loader(){
  let p = 0;
  const fill = document.getElementById("barFill"), pct = document.getElementById("loadPct"), step = document.getElementById("loadStep");
  const iv = setInterval(() => {
    p = Math.min(100, p + Math.random() * 6 + 2);
    fill.style.width = p + "%"; pct.textContent = Math.floor(p) + "%";
    step.textContent = T[lang].steps[Math.min(4, Math.floor(p / 25))];
    if (p >= 100){
      clearInterval(iv);
      setTimeout(() => { document.getElementById("loader").classList.add("done"); body.classList.remove("loading"); }, 350);
    }
  }, 70);
})();

/* ================= STARS ================= */
const sc = document.getElementById("stars"), sx = sc.getContext("2d");
let stars = [], mouse = { x: -999, y: -999 }, W, H;
function initStars(){
  W = sc.width = innerWidth; H = sc.height = innerHeight;
  stars = Array.from({ length: Math.floor(W * H / 6000) }, () => ({
    x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + .3,
    vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15, a: Math.random(), d: Math.random() * .5 + .5
  }));
}
addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
function animStars(){
  sx.clearRect(0, 0, W, H);
  const col = css("--fg"), acc = css("--accent");
  for (const s of stars){
    const dx = s.x - mouse.x, dy = s.y - mouse.y, dist = Math.hypot(dx, dy);
    if (dist < 120){ const f = (120 - dist) / 120; s.x += dx / dist * f * 2.2; s.y += dy / dist * f * 2.2; }
    s.x += s.vx + (mouse.x / W - .5) * .2 * s.d;
    s.y += s.vy + (mouse.y / H - .5) * .2 * s.d;
    if (s.x < 0) s.x = W; if (s.x > W) s.x = 0; if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
    s.a += .02;
    sx.globalAlpha = .35 + Math.abs(Math.sin(s.a)) * .5;
    sx.fillStyle = dist < 140 ? acc : col;
    sx.fillRect(s.x, s.y, s.r * 1.6, s.r * 1.6); // square stars = discrete geometry
  }
  sx.globalAlpha = 1;
  requestAnimationFrame(animStars);
}

/* ================= DATA (synthetic) ================= */
const DATA = {
  contract: [42.7, 11.3, 2.8],
  tenure: [47.1, 33.4, 21.2, 11.0, 5.3],
  trend: [19.8, 20.4, 21.1, 20.7, 20.2, 19.6, 18.6, 17.9, 17.1, 16.4, 15.7, 15.1],
  features: [.24, .19, .15, .13, .10, .08, .06, .05],
  conf: [[1720, 112], [98, 566]],
  risk: [14, 23, 63]
};

/* ================= CHART HELPERS ================= */
const hits = new Map(); // canvas -> [{x,y,w,h,label}]
function prep(c){
  const dpr = devicePixelRatio || 1, r = c.getBoundingClientRect();
  c.width = r.width * dpr; c.height = r.height * dpr;
  const ctx = c.getContext("2d"); ctx.scale(dpr, dpr);
  ctx.font = "600 12px Inconsolata"; ctx.textBaseline = "middle";
  hits.set(c, []);
  return { ctx, w: r.width, h: r.height };
}
const addHit = (c, x, y, w, h, label) => hits.get(c).push({ x, y, w, h, label });
const pal = () => [css("--accent"), "#F4B400", "#1D4ED8"];

function axes(ctx, x0, y0, x1, y1, max, steps, suffix = "%"){
  ctx.strokeStyle = css("--line"); ctx.fillStyle = css("--muted"); ctx.lineWidth = 1;
  for (let i = 0; i <= steps; i++){
    const y = y1 - (y1 - y0) * i / steps;
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.textAlign = "right"; ctx.fillText(Math.round(max * i / steps) + suffix, x0 - 6, y);
  }
  ctx.strokeStyle = css("--fg"); ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
}

function barChart(c, vals, labels, max){
  const { ctx, w, h } = prep(c), L = 44, B = 30, Tp = 14, R = 10;
  axes(ctx, L, Tp, w - R, h - B, max, 5);
  const bw = (w - L - R) / vals.length, P = pal();
  vals.forEach((v, i) => {
    const bh = (h - B - Tp) * v / max, x = L + i * bw + bw * .2, y = h - B - bh;
    ctx.fillStyle = i === 0 ? P[0] : css("--fg");
    ctx.globalAlpha = i === 0 ? 1 : .25 + .6 * (v / vals[0]);
    ctx.fillRect(x, y, bw * .6, bh); ctx.globalAlpha = 1;
    ctx.fillStyle = css("--fg"); ctx.textAlign = "center";
    ctx.fillText(v + "%", x + bw * .3, y - 9);
    ctx.fillStyle = css("--muted"); ctx.fillText(labels[i], x + bw * .3, h - B + 15);
    addHit(c, x, y, bw * .6, bh, `${labels[i]}: ${v}%`);
  });
}

function lineChart(c){
  const { ctx, w, h } = prep(c), L = 44, B = 30, Tp = 20, R = 14, max = 25, min = 10;
  const v = DATA.trend, m = T[lang].months, sx_ = (w - L - R) / (v.length - 1);
  // axes custom range
  ctx.strokeStyle = css("--line"); ctx.fillStyle = css("--muted");
  for (let i = 0; i <= 5; i++){
    const y = h - B - (h - B - Tp) * i / 5;
    ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(w - R, y); ctx.stroke();
    ctx.textAlign = "right"; ctx.fillText(min + (max - min) * i / 5 + "%", L - 6, y);
  }
  const Y = val => h - B - (h - B - Tp) * (val - min) / (max - min);
  // deploy marker
  const dx = L + 5 * sx_;
  ctx.setLineDash([6, 5]); ctx.strokeStyle = css("--fg"); ctx.beginPath(); ctx.moveTo(dx, Tp); ctx.lineTo(dx, h - B); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = css("--fg"); ctx.textAlign = "left"; ctx.fillText("▲ " + T[lang].deploy, dx + 6, Tp + 4);
  // area
  ctx.beginPath(); ctx.moveTo(L, h - B);
  v.forEach((p, i) => ctx.lineTo(L + i * sx_, Y(p)));
  ctx.lineTo(L + (v.length - 1) * sx_, h - B); ctx.closePath();
  ctx.fillStyle = css("--accent"); ctx.globalAlpha = .15; ctx.fill(); ctx.globalAlpha = 1;
  // stepped line (discrete)
  ctx.strokeStyle = css("--accent"); ctx.lineWidth = 3; ctx.beginPath();
  v.forEach((p, i) => { const x = L + i * sx_; i ? ctx.lineTo(x, Y(p)) : ctx.moveTo(x, Y(p)); });
  ctx.stroke();
  v.forEach((p, i) => {
    const x = L + i * sx_, y = Y(p);
    ctx.fillStyle = i < 5 ? css("--fg") : css("--accent");
    ctx.fillRect(x - 5, y - 5, 10, 10);
    ctx.fillStyle = css("--muted"); ctx.textAlign = "center"; ctx.fillText(m[i], x, h - B + 15);
    addHit(c, x - 10, y - 10, 20, 20, `${m[i]}: ${p}%`);
  });
}

function hBar(c){
  const { ctx, w, h } = prep(c), L = 130, R = 40, v = DATA.features, lab = T[lang].feats;
  const bh = (h - 10) / v.length;
  v.forEach((val, i) => {
    const y = 5 + i * bh, bw = (w - L - R) * val / .25;
    ctx.fillStyle = css("--muted"); ctx.textAlign = "right"; ctx.fillText(lab[i], L - 8, y + bh / 2);
    ctx.fillStyle = i < 3 ? css("--accent") : css("--fg"); ctx.globalAlpha = i < 3 ? 1 : .35;
    ctx.fillRect(L, y + bh * .18, bw, bh * .64); ctx.globalAlpha = 1;
    ctx.fillStyle = css("--fg"); ctx.textAlign = "left"; ctx.fillText(val.toFixed(2), L + bw + 6, y + bh / 2);
    addHit(c, L, y, bw, bh, `${lab[i]}: ${(val * 100).toFixed(0)}%`);
  });
}

function roc(c){
  const { ctx, w, h } = prep(c), L = 44, B = 30, Tp = 12, R = 14;
  axes(ctx, L, Tp, w - R, h - B, 1, 4, "");
  ctx.fillStyle = css("--muted"); ctx.textAlign = "center"; ctx.fillText("FPR", (w + L) / 2, h - 10);
  const X = x => L + (w - L - R) * x, Y = y => h - B - (h - B - Tp) * y;
  ctx.setLineDash([5, 5]); ctx.strokeStyle = css("--muted"); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(1), Y(1)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillText(T[lang].rand, X(.72), Y(.62));
  const k = 8.1; // AUC = k/(k+1) ≈ 0.89
  ctx.beginPath();
  for (let i = 0; i <= 40; i++){ const x = i / 40, y = 1 - Math.pow(1 - x, k); i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y)); }
  ctx.lineTo(X(1), Y(0)); ctx.closePath();
  ctx.fillStyle = css("--accent"); ctx.globalAlpha = .15; ctx.fill(); ctx.globalAlpha = 1;
  ctx.strokeStyle = css("--accent"); ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= 40; i++){
    const x = i / 40, y = 1 - Math.pow(1 - x, k);
    i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y));
    if (i % 4 === 0) addHit(c, X(x) - 8, Y(y) - 8, 16, 16, `FPR ${x.toFixed(2)} → TPR ${y.toFixed(2)}`);
  }
  ctx.stroke();
  ctx.fillStyle = css("--fg"); ctx.font = "800 22px Inconsolata"; ctx.textAlign = "left";
  ctx.fillText("AUC 0.89", X(.45), Y(.25));
}

function confusion(c){
  const { ctx, w, h } = prep(c), M = DATA.conf, lab = T[lang].conf;
  const L = 100, Tp = 30, s = Math.min((w - L - 10) / 2, (h - Tp - 10) / 2);
  const max = 1720;
  ctx.textAlign = "center"; ctx.fillStyle = css("--muted");
  ctx.fillText(lab[0], L + s / 2, Tp - 14); ctx.fillText(lab[1], L + s * 1.5, Tp - 14);
  for (let r = 0; r < 2; r++){
    ctx.textAlign = "right"; ctx.fillStyle = css("--muted"); ctx.fillText(lab[2 + r], L - 8, Tp + s * r + s / 2);
    for (let col = 0; col < 2; col++){
      const x = L + col * s, y = Tp + r * s, v = M[r][col], good = r === col;
      ctx.fillStyle = good ? css("--accent") : css("--fg");
      ctx.globalAlpha = good ? .3 + .7 * v / max : .12 + v / 600;
      ctx.fillRect(x + 2, y + 2, s - 4, s - 4); ctx.globalAlpha = 1;
      ctx.fillStyle = css("--fg"); ctx.font = "800 24px Inconsolata"; ctx.textAlign = "center";
      ctx.fillText(v.toLocaleString(), x + s / 2, y + s / 2);
      ctx.font = "600 12px Inconsolata";
      const tag = ["TN", "FP", "FN", "TP"][r * 2 + col];
      ctx.fillText(tag, x + s / 2, y + s / 2 + 22);
      addHit(c, x, y, s, s, `${tag}: ${v} (${(v / 2496 * 100).toFixed(1)}%)`);
    }
  }
}

function donut(c){
  const { ctx, w, h } = prep(c), v = DATA.risk, lab = T[lang].risk, P = pal();
  const cx = w * .38, cy = h / 2, r = Math.min(w, h) * .38;
  let a = -Math.PI / 2;
  v.forEach((p, i) => {
    const e = a + p / 100 * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, a, e); ctx.closePath();
    ctx.fillStyle = P[i]; ctx.fill();
    ctx.strokeStyle = css("--card"); ctx.lineWidth = 4; ctx.stroke();
    a = e;
  });
  ctx.fillStyle = css("--card"); ctx.fillRect(cx - r * .45, cy - r * .45, r * .9, r * .9); // square hole
  ctx.fillStyle = css("--fg"); ctx.textAlign = "center"; ctx.font = "800 20px Inconsolata";
  ctx.fillText("12,480", cx, cy);
  ctx.font = "600 13px Inconsolata";
  const counts = [1747, 2870, 7863];
  v.forEach((p, i) => {
    const y = cy - 40 + i * 34, x = w * .72;
    ctx.fillStyle = P[i]; ctx.fillRect(x, y - 8, 16, 16);
    ctx.fillStyle = css("--fg"); ctx.textAlign = "left"; ctx.fillText(`${lab[i]} ${p}%`, x + 24, y);
    addHit(c, x, y - 12, 140, 24, `${lab[i]}: ${counts[i].toLocaleString()}`);
  });
  addHit(c, cx - r, cy - r, r * 2, r * 2, lab.map((l, i) => `${l} ${v[i]}%`).join(" · "));
}

function drawAll(){
  document.querySelectorAll(".card").forEach(card => {
    const c = card.querySelector("canvas"), t = card.dataset.chart, L = T[lang];
    ({
      contract: () => barChart(c, DATA.contract, L.contracts, 50),
      tenure: () => barChart(c, DATA.tenure, L.tenures, 50),
      trend: () => lineChart(c),
      features: () => hBar(c),
      roc: () => roc(c),
      confusion: () => confusion(c),
      risk: () => donut(c)
    })[t]();
  });
}

/* ================= TOOLTIP + MODAL ================= */
const tip = document.getElementById("tip");
document.querySelectorAll(".card canvas").forEach(c => {
  c.addEventListener("mousemove", e => {
    const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    const hit = (hits.get(c) || []).find(o => x >= o.x && x <= o.x + o.w && y >= o.y && y <= o.y + o.h);
    if (hit){ tip.textContent = hit.label; tip.style.left = e.clientX + 14 + "px"; tip.style.top = e.clientY + 14 + "px"; tip.style.opacity = 1; }
    else tip.style.opacity = 0;
  });
  c.addEventListener("mouseleave", () => tip.style.opacity = 0);
});

const modal = document.getElementById("modal");
document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => {
  const [t, w, r, b] = T[lang].charts[card.dataset.chart];
  mTitle.textContent = t; mWhat.textContent = w; mRead.textContent = r; mBiz.textContent = b;
  modal.classList.add("open");
}));
document.getElementById("closeModal").onclick = () => modal.classList.remove("open");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("open"); });

/* ================= REVEAL ON SCROLL ================= */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .15 });
document.querySelectorAll("section > *").forEach(el => { el.classList.add("reveal"); io.observe(el); });

/* ================= INIT ================= */
let rt;
addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { initStars(); drawAll(); }, 150); });
document.fonts.ready.then(() => {
  initStars(); animStars();
  const savedAccent = localStorage.getItem("accent");
  if (savedAccent){ document.documentElement.style.setProperty("--accent", savedAccent); document.getElementById("accentPick").value = savedAccent; }
  applyLang();
});
