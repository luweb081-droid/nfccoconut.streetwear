/*
 * NFC COCONUT STREETWEAR — catalogue + boutique.
 *
 * Pour ajouter un article : ajoute un objet dans PRODUCTS avec n'importe quel
 * `shopifyVariantId` du produit (une seule variante suffit). Le site récupère
 * ensuite automatiquement depuis Shopify TOUTES les variantes (tailles), leur
 * stock, leur prix, la description et les photos, et se rafraîchit toutes les
 * 60 secondes. `name`, `tags` et `features` restent gérés ici.
 *
 * Un produit à variante unique (ex. les affiches) n'affiche pas de sélecteur
 * de taille.
 */
const PRODUCTS = [
  {
    id: 'tshirt-streetwear-1',
    name: 'T-shirt style Streetwear N°1',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/tshirt2.png', 'static/images/tshirt2bis.png'],
    description: 'T-shirt en coton lourd bio, pensé pour une coupe streetwear confortable et durable.',
    tags: ['t-shirt', 'streetwear', 'coton', 'vêtement'],
    features: ['Coupe Oversized Boxy', '100% Coton lourd bio (300g/m²)', 'Imprimé localement en France'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297832096087"
  },
  {
    id: 'tshirt-streetwear-2',
    name: 'T-Shirt style Streetwear N°2',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/tshirt1.png', 'static/images/tshirt1bis.png', 'static/images/tshirt2bis2.png', 'static/images/tshirt2bis3.png'],
    description: 'Coupe boxy streetwear avec un patch NFC discret intégré au bas du vêtement.',
    tags: ['t-shirt', 'oversized', 'streetwear', 'nfc', 'vêtement'],
    features: ['Coupe Oversized Boxy', 'Patch NFC lavable intégré', 'Imprimé localement en France'],
    shopifyVariantId: "gid://shopify/ProductVariant/55211592810839"
  },
  {
    id: 'tshirt-streetwear-3',
    name: 'T-shirt style Streetwear N°3',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/t-shirt3.png', 'static/images/tshirt3bis.png'],
    description: 'T-shirt en coton lourd bio, pensé pour une coupe streetwear confortable et durable.',
    tags: ['t-shirt', 'streetwear', 'coton', 'vêtement'],
    features: ['Coupe Oversized Boxy', '100% Coton lourd bio (300g/m²)', 'Série limitée exclusive'],
    shopifyVariantId: "gid://shopify/ProductVariant/55211623874903"
  },
  {
    id: 'tshirt-streetwear-4',
    name: 'T-shirt style Streetwear N°4',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/tshirt4.png', 'static/images/tshirt4bis.png'],
    description: 'T-shirt en coton lourd bio, pensé pour une coupe streetwear confortable et durable.',
    tags: ['t-shirt', 'streetwear', 'coton', 'vêtement'],
    features: ['Coupe Oversized Boxy', '100% Coton lourd bio (300g/m²)', 'Imprimé localement en France'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297837306199"
  },
  {
    id: 'tshirt-streetwear-5',
    name: 'T-shirt style Streetwear N°5',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/tshirt4.png', 'static/images/tshirt4bis.png'],
    description: 'T-shirt en coton lourd bio, pensé pour une coupe streetwear confortable et durable.',
    tags: ['t-shirt', 'streetwear', 'coton', 'vêtement'],
    features: ['Coupe Oversized Boxy', '100% Coton lourd bio (300g/m²)', 'Imprimé localement en France'],
    shopifyVariantId: "gid://shopify/ProductVariant/55222204039511"
  },
  {
    id: 'poster-drop-00-N°1',
    name: 'Affiche — Drop 00 (Art Print)',
    price: 24.90,
    oldPrice: 39.00,
    images: ['static/images/Vraiposter1.png'],
    description: 'Affiche exclusive Drop 00 imprimée sur un papier mat haute densité.',
    tags: ['poster', 'affiche', 'art', 'streetwear', 'decoration'],
    features: ['Format A3 (29.7 x 42 cm)', 'Papier mat haute densité', 'Édition limitée exclusive'],
    shopifyVariantId: "gid://shopify/ProductVariant/54296700584279"
  },
  {
    id: 'poster-drop-00-N°2',
    name: 'Affiche — Drop 00 (Art Print)',
    price: 24.90,
    oldPrice: 39.00,
    images: ['static/images/poster2.png'],
    description: 'Plongez dans l’univers visuel de NFC Coconut avec cette affiche collector.',
    tags: ['poster', 'affiche', 'art', 'streetwear', 'soundwave'],
    features: ['Format A3 (29.7 x 42 cm)', 'Papier mat haute densité', 'Édition limitée exclusive'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297815089495"
  },
  {
    id: 'poster-drop-00-N°3',
    name: 'Affiche — Drop 00 (Art Print)',
    price: 24.90,
    oldPrice: 39.00,
    images: ['static/images/poster3.png'],
    description: 'Plongez dans l’univers visuel de NFC Coconut avec cette affiche collector.',
    tags: ['poster', 'affiche', 'art', 'streetwear', 'soundwave'],
    features: ['Format A3 (29.7 x 42 cm)', 'Papier mat haute densité', 'Édition limitée exclusive'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297815548247"
  }
];

const NAV_LINKS = [
  { label: 'Accueil', href: 'index.html' },
  { label: 'Le Drop', href: 'index.html#streetwear-drop' },
  { label: 'Pour les PRO', href: 'https://nfccoconut.fr/b2b.html' }
];

const LAUNCH_DATE = new Date('2026-10-11T00:00:00').getTime();
const isLaunched = () => Date.now() >= LAUNCH_DATE;

const LOW_STOCK_CARD = 10;
const LOW_STOCK_PAGE = 5;

const euro = value => `${value.toFixed(2).replace('.', ',')} €`;
const escapeHtml = text => String(text).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const productUrl = product => `produit.html?id=${encodeURIComponent(product.id)}`;

// ================= VARIANTES (TAILLES) =================
// product.variants est rempli par Shopify : [{ id, title, available, qty, price, oldPrice }]
const selectedVariantByProduct = {};

const hasSizes = product => (product.variants || []).length > 1;
const isProductSoldOut = product => !!product.variants?.length && product.variants.every(v => !v.available);

function getSelectedVariant(product) {
  const variants = product.variants || [];
  return variants.find(v => v.id === selectedVariantByProduct[product.id])
    || variants.find(v => v.available)
    || variants[0]
    || null;
}

function stockLabel(variant) {
  if (!variant) return '';
  if (!variant.available) return 'Épuisé';
  if (typeof variant.qty === 'number' && variant.qty <= LOW_STOCK_PAGE) return `Plus que ${variant.qty} en stock`;
  return 'En stock';
}

// ================= BOUTONS =================
const lockedButton = () => `<button class="btn-add-cart btn-locked" type="button" disabled aria-label="Disponible au lancement du Drop">
    <i class="fa-solid fa-lock"></i>
    <span class="js-launch-timer">--j --h --m --s</span>
  </button>`;

// Bouton de la carte (grille) : la taille se choisit sur la fiche produit.
function cardActionButton(product) {
  if (!isLaunched()) return lockedButton();
  if (isProductSoldOut(product)) return `<button class="btn-add-cart disabled" type="button" disabled>Épuisé</button>`;

  const variants = product.variants || [];
  if (variants.length === 1) {
    return `<button class="btn-add-cart" type="button" data-add="${product.id}" data-variant="${variants[0].id}">Ajouter au panier</button>`;
  }
  return `<a class="btn-add-cart" href="${productUrl(product)}">Choisir la taille</a>`;
}

// Bouton de la fiche produit : agit sur la taille sélectionnée.
function pageActionButton(product) {
  if (!isLaunched()) return lockedButton();

  const variant = getSelectedVariant(product);
  if (!variant) return `<button class="btn-add-cart disabled" type="button" disabled>Chargement…</button>`;
  if (!variant.available) return `<button class="btn-add-cart disabled" type="button" disabled>Épuisé</button>`;
  return `<button class="btn-add-cart" type="button" data-add="${product.id}" data-variant="${variant.id}">Ajouter au panier</button>`;
}

// ================= CARTES =================
function productCard(product) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;
  const isSoldOut = isProductSoldOut(product);
  const hasLowStock = !isSoldOut && Number.isInteger(product.stockQty) && product.stockQty <= LOW_STOCK_CARD;
  const hasSecondImage = product.images.length > 1;

  return `
    <article class="product-item${isSoldOut ? ' is-sold-out' : ''}" data-product-id="${product.id}">
      <a class="product-link" href="${productUrl(product)}" aria-label="Voir ${escapeHtml(product.name)}">
        <div class="product-img-wrapper ${hasSecondImage ? 'has-hover-image' : ''}">
          <img class="product-image product-image-main" src="${product.images[0]}" alt="${escapeHtml(product.name)}">
          ${hasSecondImage ? `<img class="product-image product-image-hover" src="${product.images[1]}" alt="${escapeHtml(product.name)} - vue alternative">` : ''}
          ${isSoldOut ? '<span class="badge-sold-out">Sold Out</span>' : ''}
        </div>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
      </a>

      <div class="product-price-container">
        <span class="product-price">${euro(product.price)}</span>
        ${product.oldPrice ? `<span class="product-price-old">${euro(product.oldPrice)}</span><span class="badge-discount">-${discount}%</span>` : ''}
        ${hasLowStock ? `<span class="badge-low-stock">Plus que ${product.stockQty} en stock</span>` : ''}
      </div>

      <div class="product-actions">
        <a class="btn-details" href="${productUrl(product)}">Voir le produit</a>
        ${cardActionButton(product)}
      </div>
    </article>`;
}

function currentFile() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function renderNavigation() {
  const file = currentFile();

  const desktopLinks = NAV_LINKS
    .map(({ label, href }) => `<a href="${href}"${href === file ? ' class="active" aria-current="page"' : ''}>${label}</a>`)
    .join('');

  const socialLink = (href, label, icon) => `
    <a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}" class="header-icon-link"
       style="color: inherit; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; font-size: 1.2rem;">
      <i class="${icon}"></i>
    </a>`;

  document.querySelectorAll('.top-header').forEach(header => {
    header.innerHTML = `
      <div class="header-left" style="display: flex; align-items: center; gap: 15px;">
        <button id="menuBtn" class="mobile-only-btn" aria-label="Ouvrir le menu"><i class="fa-solid fa-bars"></i></button>
        <nav class="desktop-nav">${desktopLinks}</nav>
        <button id="searchBtn"><i class="fa-solid fa-magnifying-glass"></i><span class="desktop-only">Rechercher</span></button>
      </div>
      <a href="index.html" class="brand-logo" aria-label="NFC Coconut Streetwear"><img src="static/images/nfccoconut.png" alt="NFC Coconut Streetwear"></a>
      <div class="header-right" style="display: flex; align-items: center; gap: 15px;">
        <div id="launchCountdown" class="mobile-countdown-wrapper" style="font-size: 0.85rem; font-weight: 600; white-space: nowrap; color: #555;">
          DROP 00 dans : <span id="timerValue" class="js-launch-timer" style="font-weight: 700;">--j --h --m --s</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0;">
          ${socialLink('https://www.instagram.com/nfc_coconut_official', 'Notre page Instagram', 'fa-brands fa-instagram')}
          ${socialLink('https://www.tiktok.com/@nfc_coconut_official?is_from_webapp=1&sender_device=pc', 'Notre page TikTok', 'fa-brands fa-tiktok')}
        </div>
        <button id="cartBtn"><i class="fa-solid fa-bag-shopping"></i><span>(0)</span></button>
      </div>`;
  });

  document.querySelectorAll('.mobile-nav').forEach(nav => {
    nav.innerHTML = `<ul>${NAV_LINKS.map(({ label, href }) => `<li><a href="${href}"${href === file ? ' class="active"' : ''}>${label}</a></li>`).join('')}</ul>`;
  });
}

function renderProductGrids() {
  if (currentFile() === 'produit.html') return;
  const grid = document.querySelector('.products-grid');
  if (grid) grid.innerHTML = PRODUCTS.map(productCard).join('');
}

// ================= FICHE PRODUIT =================
function getCurrentPageProduct() {
  const id = new URLSearchParams(window.location.search).get('id');
  return PRODUCTS.find(item => item.id === id);
}

// Partie dynamique de la fiche (prix, stock, tailles, bouton) : redessinée
// à chaque changement de taille ou de stock, sans toucher à la galerie.
function renderBuyBox() {
  const product = getCurrentPageProduct();
  const priceStock = document.getElementById('priceStock');
  const buyBox = document.getElementById('buyBox');
  if (!product || !priceStock || !buyBox) return;

  const variant = getSelectedVariant(product);
  const price = variant?.price ?? product.price;
  const oldPrice = variant ? variant.oldPrice : product.oldPrice;
  const stock = stockLabel(variant);

  priceStock.innerHTML = `
    <div class="detail-price">${euro(price)}${oldPrice ? `<del>${euro(oldPrice)}</del>` : ''}</div>
    ${stock ? `<p class="stock-info${variant && (!variant.available || (typeof variant.qty === 'number' && variant.qty <= LOW_STOCK_PAGE)) ? ' low' : ''}">${stock}</p>` : ''}`;

  const sizesHtml = hasSizes(product) ? `
    <div class="size-selector" role="radiogroup" aria-label="Taille">
      ${product.variants.map(v => `
        <button type="button" class="size-btn${variant && v.id === variant.id ? ' active' : ''}${v.available ? '' : ' unavailable'}"
                data-size="${v.id}" role="radio" aria-checked="${variant && v.id === variant.id}" ${v.available ? '' : 'disabled'}>
          ${escapeHtml(v.title)}
        </button>`).join('')}
    </div>` : '';

  buyBox.innerHTML = `${sizesHtml}${pageActionButton(product)}`;
}

function renderProductPage() {
  const root = document.getElementById('productPage');
  if (!root) return;
  const product = getCurrentPageProduct();

  if (!product) {
    root.innerHTML = '<div class="page-title"><h1>Produit introuvable</h1><p>Ce produit n’existe pas ou n’est plus disponible.</p><a class="btn-details" href="index.html">Retour à la boutique</a></div>';
    return;
  }

  document.title = `${product.name} — NFC COCONUT STREETWEAR`;

  const setMeta = (selector, content) => {
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      const [attrName, attrValue] = selector.match(/\[(\w+)="([^"]+)"\]/).slice(1, 3);
      tag.setAttribute(attrName, attrValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  const title = `${product.name} — NFC COCONUT STREETWEAR`;
  const imageUrl = new URL(product.images[0], window.location.href).href;
  setMeta('meta[name="description"]', product.description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', product.description);
  setMeta('meta[property="og:image"]', imageUrl);
  setMeta('meta[property="og:url"]', window.location.href);
  setMeta('meta[property="og:type"]', 'product');
  setMeta('meta[name="twitter:card"]', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', product.description);
  setMeta('meta[name="twitter:image"]', imageUrl);

  const featuresHtml = (product.features || []).map(feature => `<li>${escapeHtml(feature)}</li>`).join('');
  const hasMultipleImages = product.images.length > 1;

  root.innerHTML = `<a class="back-link" href="index.html"><i class="fa-solid fa-arrow-left"></i> Retour</a>
  <section class="product-detail">
    <div class="product-gallery">
      <div class="product-img-wrapper" style="position: relative;">
        ${hasMultipleImages ? `
          <button type="button" class="gallery-arrow gallery-arrow-prev" aria-label="Photo précédente"><i class="fa-solid fa-chevron-left"></i></button>
          <button type="button" class="gallery-arrow gallery-arrow-next" aria-label="Photo suivante"><i class="fa-solid fa-chevron-right"></i></button>
        ` : ''}
        <img id="mainProductImage" src="${product.images[0]}" alt="${escapeHtml(product.name)}">
        ${isProductSoldOut(product) ? '<span class="badge-sold-out">Sold Out</span>' : ''}
      </div>
      <div class="product-thumbnails">
        ${product.images.map((image, index) => `<button type="button" class="product-thumbnail${index === 0 ? ' active' : ''}" data-image="${image}" aria-label="Voir la photo ${index + 1}"><img src="${image}" alt=""></button>`).join('')}
      </div>
    </div>
    <div class="product-info">
      <p class="product-category">Streetwear</p>
      <h1>${escapeHtml(product.name)}</h1>
      <div id="priceStock"></div>
      <p class="product-description">${escapeHtml(product.description)}</p>
      <ul class="product-features">${featuresHtml}</ul>
      <div id="buyBox"></div>
    </div>
  </section>`;

  renderBuyBox();
}

// ================= RECHERCHE =================
function setupSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  if (!overlay || !input) return;

  const results = document.createElement('div');
  results.className = 'search-results';
  overlay.append(results);

  const normalize = text => text.toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const search = () => {
    const terms = normalize(input.value).split(/\s+/).filter(Boolean);
    const matches = PRODUCTS.filter(product => {
      const haystack = normalize(`${product.name} ${product.description} ${product.tags.join(' ')}`);
      return terms.every(term => haystack.includes(term));
    });
    results.innerHTML = !terms.length
      ? '<p>Recherchez un produit, une matière ou un usage.</p>'
      : matches.length
        ? matches.map(p => `<a href="${productUrl(p)}"><img src="${p.images[0]}" alt=""><span>${escapeHtml(p.name)}<small>${euro(p.price)}</small></span></a>`).join('')
        : '<p>Aucun produit ne correspond à votre recherche.</p>';
  };

  const toggle = () => {
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) { input.focus(); search(); }
  };

  document.getElementById('searchBtn')?.addEventListener('click', toggle);
  document.getElementById('closeSearchBtn')?.addEventListener('click', toggle);
  input.addEventListener('input', search);
}

// ================= PANIER =================
// Une ligne de panier = une variante (produit + taille).
const CART_KEY = 'nfcCoconutStreetwearCart_v2';
let cart = [];

try {
  cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
} catch (_) { /* ouvert depuis un fichier : pas de stockage */ }

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (_) { /* stockage indisponible */ }
}

function findVariant(variantId) {
  for (const product of PRODUCTS) {
    const variant = (product.variants || []).find(v => v.id === variantId);
    if (variant) return { product, variant };
  }
  return null;
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cartBtn span').forEach(el => { el.textContent = `(${count})`; });

  const container = document.querySelector('.cart-items-container');
  if (container) {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="">
        <div class="cart-item-details">
          <div class="cart-item-title">${escapeHtml(item.name)}${item.size ? ` — ${escapeHtml(item.size)}` : ''}</div>
          <div class="cart-item-price">${euro(item.price)}</div>
          <div class="cart-quantity">
            <button class="cart-quantity-btn" data-decrease="${index}" aria-label="Retirer un article">−</button>
            <span>${item.quantity}</span>
            <button class="cart-quantity-btn" data-increase="${index}" aria-label="Ajouter un article">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${index}" aria-label="Supprimer le produit"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
  }

  const empty = document.querySelector('.drawer-empty-msg');
  if (empty) empty.style.display = cart.length ? 'none' : 'block';

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelectorAll('.btn-checkout').forEach(btn => {
    btn.textContent = `Commander (${euro(totalPrice)})`;
  });
}

function setupCartAndDrawer() {
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('cartDrawer');

  const close = () => { overlay?.classList.remove('active'); drawer?.classList.remove('active'); };
  const open = () => { overlay?.classList.add('active'); drawer?.classList.add('active'); };

  document.getElementById('cartBtn')?.addEventListener('click', open);
  document.getElementById('closeDrawerBtn')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);

  document.addEventListener('click', event => {
    const sizeBtn = event.target.closest('[data-size]');
    const add = event.target.closest('[data-add]');
    const remove = event.target.closest('[data-remove]');
    const decrease = event.target.closest('[data-decrease]');
    const increase = event.target.closest('[data-increase]');
    const checkout = event.target.closest('.btn-checkout');

    if (sizeBtn) {
      const product = getCurrentPageProduct();
      if (!product) return;
      selectedVariantByProduct[product.id] = sizeBtn.dataset.size;
      renderBuyBox();
      return;
    }

    if (add) {
      if (!isLaunched()) return;
      const product = PRODUCTS.find(p => p.id === add.dataset.add);
      const variant = product?.variants?.find(v => v.id === add.dataset.variant);
      if (!variant || !variant.available) return;

      const line = cart.find(item => item.id === variant.id);
      const currentQty = line ? line.quantity : 0;
      if (typeof variant.qty === 'number' && currentQty >= variant.qty) {
        alert(`Stock maximum atteint pour cette taille (${variant.qty}).`);
        return;
      }

      if (line) {
        line.quantity++;
      } else {
        cart.push({
          id: variant.id,
          shopifyVariantId: variant.id,
          name: product.name,
          size: hasSizes(product) ? variant.title : '',
          price: variant.price,
          image: product.images[0],
          quantity: 1
        });
      }

      saveCart();
      updateCart();
      open();
      return;
    }

    if (decrease) {
      const index = Number(decrease.dataset.decrease);
      const item = cart[index];
      if (!item) return;
      item.quantity--;
      if (item.quantity <= 0) cart.splice(index, 1);
      saveCart();
      updateCart();
      return;
    }

    if (increase) {
      const item = cart[Number(increase.dataset.increase)];
      if (!item) return;
      const found = findVariant(item.id);
      if (found && typeof found.variant.qty === 'number' && item.quantity >= found.variant.qty) return;
      item.quantity++;
      saveCart();
      updateCart();
      return;
    }

    if (remove) {
      cart.splice(Number(remove.dataset.remove), 1);
      saveCart();
      updateCart();
      return;
    }

    if (checkout) {
      if (!cart.length) return;
      checkout.disabled = true;
      const originalText = checkout.textContent;
      checkout.textContent = 'Redirection en cours...';
      createShopifyCheckout(cart).finally(() => {
        checkout.disabled = false;
        checkout.textContent = originalText;
      });
    }
  });

  updateCart();
}

// ================= SHOPIFY =================
const SHOPIFY_DOMAIN = "nfc-coconut.myshopify.com";
const SHOPIFY_STOREFRONT_TOKEN = "fdf11aee476ae0be122f4679ebec2b64";
const SHOPIFY_API_VERSION = "2024-10";

async function shopifyFetch(query, variables = {}) {
  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) throw new Error(`Shopify API a répondu avec le statut ${response.status}`);

  const json = await response.json();
  if (json.errors) {
    console.error('Shopify API error:', json.errors);
    throw new Error('Erreur retournée par Shopify.');
  }
  return json.data;
}

async function createShopifyCheckout(cartItems) {
  const lines = cartItems.map(item => ({ merchandiseId: item.shopifyVariantId, quantity: item.quantity }));

  const mutation = `
    mutation cartCreate($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart { checkoutUrl }
        userErrors { message }
      }
    }`;

  try {
    const result = (await shopifyFetch(mutation, { lines }))?.cartCreate;

    if (result?.userErrors?.length) {
      console.error('Shopify userErrors:', result.userErrors);
      alert("Impossible de créer la commande : un article n'est peut-être plus disponible dans cette taille.");
      return;
    }

    if (result?.cart?.checkoutUrl) {
      window.location.href = result.cart.checkoutUrl;
    } else {
      alert("Erreur lors de la création du panier de paiement.");
    }
  } catch (error) {
    console.error('createShopifyCheckout error:', error);
    alert("Une erreur est survenue lors de la connexion à Shopify. Réessaie dans quelques instants.");
  }
}

// Récupère pour chaque produit TOUTES ses variantes (tailles) avec stock,
// prix, description et photos. Appelée au chargement puis toutes les 60 s.
async function syncProductDataFromShopify() {
  const ids = [...new Set(PRODUCTS.map(p => p.shopifyVariantId).filter(Boolean))];
  if (!ids.length) return;

  const query = `
    query getProducts($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on ProductVariant {
          id
          product {
            description
            images(first: 6) { edges { node { url } } }
            variants(first: 30) {
              nodes {
                id
                title
                availableForSale
                quantityAvailable
                price { amount }
                compareAtPrice { amount }
              }
            }
          }
        }
      }
    }`;

  try {
    const data = await shopifyFetch(query, { ids });
    const nodeMap = {};
    (data?.nodes || []).forEach(node => { if (node) nodeMap[node.id] = node; });

    let stockChanged = false;
    let layoutChanged = false;

    PRODUCTS.forEach(product => {
      const node = nodeMap[product.shopifyVariantId];
      if (!node?.product) return;
      const shopifyProduct = node.product;

      const variants = (shopifyProduct.variants?.nodes || []).map(v => ({
        id: v.id,
        title: v.title,
        available: v.availableForSale,
        qty: typeof v.quantityAvailable === 'number' ? v.quantityAvailable : null,
        price: parseFloat(v.price.amount),
        oldPrice: v.compareAtPrice?.amount != null ? parseFloat(v.compareAtPrice.amount) : null
      }));

      if (JSON.stringify(variants) !== JSON.stringify(product.variants)) stockChanged = true;
      product.variants = variants;

      // Infos « produit » pour les cartes : prix de la 1re variante, stock total.
      if (variants.length) {
        product.price = variants[0].price;
        product.oldPrice = variants[0].oldPrice;
        const availableVariants = variants.filter(v => v.available);
        product.stockQty = availableVariants.every(v => v.qty !== null)
          ? availableVariants.reduce((sum, v) => sum + v.qty, 0)
          : null;
      }

      if (shopifyProduct.description && product.description !== shopifyProduct.description) {
        product.description = shopifyProduct.description;
        layoutChanged = true;
      }

      const images = (shopifyProduct.images?.edges || []).map(edge => edge.node.url);
      if (images.length && images.join('|') !== product.images.join('|')) {
        product.images = images;
        layoutChanged = true;
      }
    });

    if (stockChanged || layoutChanged) {
      renderProductGrids();
      if (layoutChanged) renderProductPage(); else renderBuyBox();
    }
  } catch (error) {
    console.error('syncProductDataFromShopify error:', error);
  }
}

// ================= MENU MOBILE =================
function setupMobileMenu() {
  const overlay = document.createElement('div');
  overlay.id = 'mobileMenuOverlay';
  overlay.className = 'drawer-overlay';

  const drawer = document.createElement('div');
  drawer.id = 'mobileMenuDrawer';
  drawer.className = 'drawer mobile-menu-drawer';
  drawer.innerHTML = `
    <div class="drawer-header">
      <h3>Menu</h3>
      <button id="closeMobileMenuBtn" class="drawer-close" aria-label="Fermer le menu"><i class="fa-solid fa-xmark"></i></button>
    </div>`;
  document.body.append(overlay, drawer);

  document.querySelectorAll('.mobile-nav').forEach(nav => drawer.appendChild(nav));

  const close = () => { overlay.classList.remove('active'); drawer.classList.remove('active'); };
  const open = () => { overlay.classList.add('active'); drawer.classList.add('active'); };

  document.addEventListener('click', event => {
    if (event.target.closest('#menuBtn')) open();
    if (event.target.closest('#closeMobileMenuBtn') || event.target === overlay) close();
  });
}

// ================= GALERIE =================
function setupGallery() {
  document.addEventListener('click', event => {
    const thumbBtn = event.target.closest('[data-image]');

    if (thumbBtn) {
      changeGalleryImage(thumbBtn.dataset.image);
      document.querySelectorAll('.product-thumbnail').forEach(item => item.classList.toggle('active', item === thumbBtn));
      return;
    }

    const arrow = event.target.closest('.gallery-arrow');
    if (!arrow) return;

    const thumbnails = [...document.querySelectorAll('.product-thumbnail')];
    if (!thumbnails.length) return;

    const direction = arrow.classList.contains('gallery-arrow-next') ? 1 : -1;
    const current = Math.max(0, thumbnails.findIndex(t => t.classList.contains('active')));
    const nextThumb = thumbnails[(current + direction + thumbnails.length) % thumbnails.length];

    changeGalleryImage(nextThumb.dataset.image, direction);
    thumbnails.forEach(item => item.classList.toggle('active', item === nextThumb));
  });
}

function changeGalleryImage(newImage, direction = 1) {
  const mainImage = document.getElementById('mainProductImage');
  if (!mainImage || mainImage.src.includes(newImage)) return;

  mainImage.classList.remove('gallery-slide-in-left', 'gallery-slide-in-right');
  mainImage.classList.add(direction === 1 ? 'gallery-slide-out-left' : 'gallery-slide-out-right');

  setTimeout(() => {
    mainImage.src = newImage;
    mainImage.classList.remove('gallery-slide-out-left', 'gallery-slide-out-right');
    mainImage.classList.add(direction === 1 ? 'gallery-slide-in-right' : 'gallery-slide-in-left');
    void mainImage.offsetWidth;

    requestAnimationFrame(() => {
      mainImage.classList.remove('gallery-slide-in-right', 'gallery-slide-in-left');
      mainImage.classList.add('gallery-slide-center');
    });

    setTimeout(() => mainImage.classList.remove('gallery-slide-center'), 400);
  }, 200);
}

// ================= COMPTE À REBOURS =================
// À l'heure du lancement, les boutons verrouillés deviennent automatiquement
// de vrais boutons d'achat (sans recharger la page).
function startLaunchCountdown() {
  let wasLaunched = isLaunched();

  const tick = () => {
    const distance = LAUNCH_DATE - Date.now();
    let text;

    if (distance < 0) {
      text = "C'est ouvert !";
      if (!wasLaunched) {
        wasLaunched = true;
        renderProductGrids();
        renderBuyBox();
      }
    } else {
      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      text = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    }

    document.querySelectorAll('.js-launch-timer').forEach(el => { el.textContent = text; });
  };

  tick();
  setInterval(tick, 1000);
}

// ================= STYLES DU SÉLECTEUR DE TAILLE =================
// (tu peux déplacer ce CSS dans static/css/style.css si tu préfères)
function injectSizeStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .size-selector { display: flex; flex-wrap: wrap; gap: 10px; margin: 22px 0 18px; }
    .size-btn { min-width: 52px; padding: 12px 16px; border: 1px solid #111; background: #fff; color: #111;
      font-family: inherit; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: background .2s, color .2s; }
    .size-btn:hover:not(:disabled) { background: #f0f0f0; }
    .size-btn.active { background: #111; color: #fff; }
    .size-btn.unavailable { border-color: #ccc; color: #aaa; text-decoration: line-through; cursor: not-allowed; }
    .size-btn:focus-visible { outline: 2px solid #111; outline-offset: 3px; }
    a.btn-add-cart { display: inline-block; text-align: center; text-decoration: none; }

    /* Grille de l'index : cartes étroites et hautes (≈4 par ligne sur ordinateur).
       Largeur : change 320px. Hauteur : change 3 / 4.6 (plus le 2e chiffre est grand, plus c'est haut). */
    .main-container { max-width: 1500px; }
    .products-grid { grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr)); gap: 40px 28px; }
    .products-grid .product-img-wrapper { position: relative; overflow: hidden; height: auto; aspect-ratio: 3 / 4.6; }
    .products-grid .product-image { width: 100%; height: 100%; object-fit: cover; }
    .products-grid .product-title { font-size: 1.05rem; }
    .products-grid .product-price { font-size: 1.1rem; }
    @media (max-width: 700px) {
      .products-grid { grid-template-columns: 1fr; gap: 32px; }
    }
  `;
  document.head.appendChild(style);
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
  injectSizeStyles();
  renderNavigation();
  renderProductGrids();
  renderProductPage();
  setupSearch();
  setupCartAndDrawer();
  setupMobileMenu();
  setupGallery();
  startLaunchCountdown();
  syncProductDataFromShopify();

  // Stock « en direct » : rafraîchi toutes les 60 s et au retour sur l'onglet.
  setInterval(syncProductDataFromShopify, 60000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) syncProductDataFromShopify();
  });
});