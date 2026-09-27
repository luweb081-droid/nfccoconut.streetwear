/*
 * Source unique du catalogue du site NFC COCONUT STREETWEAR.
 * Pour ajouter ou modifier un article, ne changer que ce tableau : les
 * cartes, la recherche et les fiches produit se mettent à jour automatiquement.
 *
 * IMPORTANT : renseigne `shopifyVariantId` pour chaque produit une fois que
 * tu l'as créé dans l'admin Shopify (format 'gid://shopify/ProductVariant/XXXXXXXX').
 * Tant que c'est null, le produit peut être ajouté au panier local mais ne
 * sera pas envoyé au checkout Shopify.
 *
 * Le champ `soldOut` défini ici sert de valeur de secours (affichage immédiat
 * au chargement), tout comme `price`, `oldPrice`, `description` et `images`.
 * Pour les produits qui ont un `shopifyVariantId`, TOUTES ces valeurs sont
 * ensuite automatiquement écrasées par les vraies données Shopify (stock,
 * prix, prix barré, description, photos) via syncProductDataFromShopify()
 * une fois la page chargée. `name`, `tags` et `features` restent gérés
 * uniquement ici : ce sont des textes marketing propres au site.
 *
 * Tant que la date de lancement (voir startLaunchCountdown) n'est pas
 * atteinte, chaque produit affiche un bouton verrouillé avec un compte à
 * rebours au lieu du bouton "Ajouter au panier".
 */
const PRODUCTS = [
  {
    id: 'tshirt-streetwear-1',
    category: 'streetwear',
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
    category: 'streetwear',
    name: 'T-Shirt style Streetwear N°2',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/tshirt1.png', 'static/images/tshirt1bis.png', 'static/images/tshirt2bis2.png', 'static/images/tshirt2bis3.png'],
    description: 'Coupe boxy streetwear avec un patch NFC discret intégré au bas du vêtement.',
    tags: ['t-shirt', 'oversized', 'streetwear', 'nfc', 'vêtement'],
    features: ['Coupe Oversized Boxy', 'Patch NFC lavable intégré', 'Imprimé localement en France'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297833242967"
  },
  {
    id: 'tshirt-streetwear-3',
    category: 'streetwear',
    name: 'T-shirt style Streetwear N°3',
    price: 39.90,
    oldPrice: 59.90,
    images: ['static/images/t-shirt3.png', 'static/images/tshirt3bis.png'],
    description: 'T-shirt en coton lourd bio, pensé pour une coupe streetwear confortable et durable.',
    tags: ['t-shirt', 'streetwear', 'coton', 'vêtement'],
    features: ['Coupe Oversized Boxy', '100% Coton lourd bio (300g/m²)', 'Série limitée exclusive'],
    shopifyVariantId: "gid://shopify/ProductVariant/54297836552535"
  },
  {
    id: 'tshirt-streetwear-4',
    category: 'streetwear',
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
    id: 'poster-drop-00-N°1',
    category: 'streetwear',
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
    category: 'streetwear',
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
    category: 'streetwear',
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

// Navigation du site streetwear autonome (plus de liens vers les plaques NFC
// business ou le développement web : c'est un site à part entière).
const NAV_LINKS = [
  { label: 'Accueil', href: 'index.html', showInDesktop: true },
  { label: 'Le Drop', href: 'index.html#streetwear-drop', showInDesktop: true }
];

const euro = value => `${value.toFixed(2).replace('.', ',')} €`;
const escapeHtml = text => String(text).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const productUrl = product => `produit.html?id=${encodeURIComponent(product.id)}`;

// Tant que le Drop n'est pas lancé (voir startLaunchCountdown), un bouton
// verrouillé avec le compte à rebours remplace "Ajouter au panier" / "Épuisé".
function productActionButton(product) {
  const isSoldOut = product.soldOut === true;

  return `<button class="btn-add-cart btn-locked" type="button" disabled aria-label="Disponible au lancement du Drop">
      <i class="fa-solid fa-lock"></i>
      <span class="js-launch-timer">--j --h --m --s</span>
    </button>`;

  // Une fois le Drop lancé, tu peux remplacer le bloc ci-dessus par :
  // return isSoldOut
  //   ? `<button class="btn-add-cart disabled" type="button" disabled>Épuisé</button>`
  //   : `<button class="btn-add-cart" type="button" data-add="${product.id}">Ajouter au panier</button>`;
}

function productCard(product) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const isSoldOut = product.soldOut === true;

  const hasLowStock =
    !isSoldOut &&
    Number.isInteger(product.stockQty) &&
    product.stockQty <= 10;

  const lowStockBadge = hasLowStock
    ? `<span class="badge-low-stock">Plus que ${product.stockQty} en stock</span>`
    : '';

  const hasSecondImage =
    Array.isArray(product.images) &&
    product.images.length > 1;

  return `
    <article
      class="product-item product-item--${product.category}${isSoldOut ? ' is-sold-out' : ''}"
      data-product-id="${product.id}"
    >

      <a
        class="product-link"
        href="${productUrl(product)}"
        aria-label="Voir ${escapeHtml(product.name)}"
      >

        <div class="product-img-wrapper ${hasSecondImage ? 'has-hover-image' : ''}">

          <img
            class="product-image product-image-main"
            src="${product.images[0]}"
            alt="${escapeHtml(product.name)}"
          >

          ${
            hasSecondImage
              ? `
                <img
                  class="product-image product-image-hover"
                  src="${product.images[1]}"
                  alt="${escapeHtml(product.name)} - vue alternative"
                >
              `
              : ''
          }

          ${
            isSoldOut
              ? '<span class="badge-sold-out">Sold Out</span>'
              : ''
          }

        </div>

        <h3 class="product-title">
          ${escapeHtml(product.name)}
        </h3>

      </a>

      <div class="product-price-container">
        <span class="product-price">
          ${euro(product.price)}
        </span>

        ${
          product.oldPrice
            ? `
              <span class="product-price-old">
                ${euro(product.oldPrice)}
              </span>

              <span class="badge-discount">
                -${discount}%
              </span>
            `
            : ''
        }

        ${lowStockBadge}
      </div>

      <div class="product-actions">
        <a
          class="btn-details"
          href="${productUrl(product)}"
        >
          Voir le produit
        </a>

        ${productActionButton(product)}
      </div>

    </article>
  `;
}

function currentFile() {
  const name = window.location.pathname.split('/').pop();
  return name || 'index.html';
}

function renderNavigation() {
  const file = currentFile();

  const desktopLinks = NAV_LINKS
    .filter(link => link.showInDesktop)
    .map(({ label, href }) => `<a href="${href}"${href === file ? ' class="active" aria-current="page"' : ''}>${label}</a>`)
    .join('');

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
        <a href="https://www.instagram.com/nfc_coconut_official"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Notre page Instagram"
           class="header-icon-link"
           style="color: inherit; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; font-size: 1.2rem;">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.tiktok.com/@nfc_coconut_official?is_from_webapp=1&sender_device=pc"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Notre page TikTok"
           class="header-icon-link"
           style="color: inherit; text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; font-size: 1.2rem;">
            <i class="fa-brands fa-tiktok"></i>
        </a>
    </div>


        <button id="cartBtn"><i class="fa-solid fa-bag-shopping"></i><span>(0)</span></button>
      </div>`;
  });

  document.querySelectorAll('.mobile-nav').forEach(nav => {
    nav.innerHTML = `<ul>${NAV_LINKS.map(({ label, href }) => `<li><a href="${href}"${href === file ? ' class="active"' : ''}>${label}</a></li>`).join('')}</ul>`;
  });
}

function renderProductGrids() {
  const file = currentFile();
  const grids = [...document.querySelectorAll('.products-grid')];

  if (!grids.length || file === 'produit.html') return;

  const target = grids[0];
  const products = PRODUCTS.filter(p => p.category === 'streetwear');

  target.innerHTML = products.map(productCard).join('');
  target.dataset.catalogGrid = 'true';
}

function renderProductPage() {
  const root = document.getElementById('productPage');
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const product = PRODUCTS.find(item => item.id === id);

  if (!product) {
    root.innerHTML = '<div class="page-title"><h1>Produit introuvable</h1><p>Ce produit n’existe pas ou n’est plus disponible.</p><a class="btn-details" href="index.html">Retour à la boutique</a></div>';
    return;
  }

  document.title = `${product.name} — NFC COCONUT STREETWEAR`;

  function setMetaTag(selector, attribute, content) {
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      const [attrName, attrValue] = selector.match(/\[(\w+)="([^"]+)"\]/).slice(1, 3);
      tag.setAttribute(attrName, attrValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute(attribute, content);
  }

  const productImageUrl = new URL(product.images[0], window.location.origin).href;
  const productPageUrl = window.location.href;

  setMetaTag('meta[name="description"]', 'content', product.description);
  setMetaTag('meta[property="og:title"]', 'content', `${product.name} — NFC COCONUT STREETWEAR`);
  setMetaTag('meta[property="og:description"]', 'content', product.description);
  setMetaTag('meta[property="og:image"]', 'content', productImageUrl);
  setMetaTag('meta[property="og:url"]', 'content', productPageUrl);
  setMetaTag('meta[property="og:type"]', 'content', 'product');
  setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'content', `${product.name} — NFC COCONUT STREETWEAR`);
  setMetaTag('meta[name="twitter:description"]', 'content', product.description);
  setMetaTag('meta[name="twitter:image"]', 'content', productImageUrl);

  const productFeatures = product.features || ['Imprimé localement en France', 'Édition limitée', 'Livraison suivie'];
  const featuresHtml = productFeatures.map(feature => `<li>${escapeHtml(feature)}</li>`).join('');
  const isSoldOut = product.soldOut === true;

  const hasStockInfo = !isSoldOut && Number.isInteger(product.stockQty);
  const isLowStock = hasStockInfo && product.stockQty <= 5;
  const stockText = hasStockInfo
    ? (product.stockQty > 5 ? 'En stock' : (product.stockQty > 0 ? `Plus que ${product.stockQty} en stock` : ''))
    : '';
  const stockInfoHtml = (hasStockInfo && stockText) ? `<p class="stock-info${isLowStock ? ' low' : ''}">${stockText}</p>` : '';

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
        ${isSoldOut ? '<span class="badge-sold-out">Sold Out</span>' : ''}
      </div>
      <div class="product-thumbnails">
        ${product.images.map((image, index) => `<button type="button" class="product-thumbnail${index === 0 ? ' active' : ''}" data-image="${image}" aria-label="Voir la photo ${index + 1}"><img src="${image}" alt=""></button>`).join('')}
      </div>
    </div>
    <div class="product-info">
      <p class="product-category">Streetwear</p>
      <h1>${escapeHtml(product.name)}</h1>
      <div class="detail-price">${euro(product.price)}${product.oldPrice ? `<del>${euro(product.oldPrice)}</del>` : ''}</div>
      ${stockInfoHtml}
      <p class="product-description">${escapeHtml(product.description)}</p>

      <ul class="product-features">
        ${featuresHtml}
      </ul>

      ${productActionButton(product)}
    </div>
  </section>`;
}

function setupSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const opener = document.getElementById('searchBtn');
  const closer = document.getElementById('closeSearchBtn');

  if (!overlay || !input) return;

  let results = overlay.querySelector('.search-results');
  if (!results) {
    results = document.createElement('div');
    results.className = 'search-results';
    overlay.append(results);
  }

  const search = () => {
    const terms = input.value.toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/\s+/).filter(Boolean);
    const matches = PRODUCTS.filter(product => {
      const haystack = `${product.name} ${product.description} ${product.tags.join(' ')}`.toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return terms.every(term => haystack.includes(term));
    });
    results.innerHTML = !terms.length ? '<p>Recherchez un produit, une matière ou un usage.</p>' : matches.length ? matches.map(p => `<a href="${productUrl(p)}"><img src="${p.images[0]}" alt=""><span>${escapeHtml(p.name)}<small>${euro(p.price)}</small></span></a>`).join('') : '<p>Aucun produit ne correspond à votre recherche.</p>';
  };

  const toggle = () => {
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) { input.focus(); search(); }
  };

  opener?.addEventListener('click', toggle);
  closer?.addEventListener('click', toggle);
  input.addEventListener('input', search);
  window.filterProducts = search;
}

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem('nfcCoconutStreetwearCart') || '[]');
} catch (_) {
  /* Le site fonctionne aussi ouvert directement depuis un fichier. */
}

function saveCart() {
  try {
    localStorage.setItem('nfcCoconutStreetwearCart', JSON.stringify(cart));
  } catch (_) {
    /* Stockage indisponible : panier conservé pour la page en cours. */
  }
}

// ================= SHOPIFY =================
// Même boutique Shopify que le site principal : les variantes streetwear
// y sont déjà créées, donc le checkout fonctionne à l'identique ici.
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

  if (!response.ok) {
    throw new Error(`Shopify API a répondu avec le statut ${response.status}`);
  }

  const json = await response.json();
  if (json.errors) {
    console.error('Shopify API error:', json.errors);
    throw new Error('Erreur retournée par Shopify.');
  }
  return json.data;
}

async function createShopifyCheckout(cartItems) {
  const lines = cartItems
    .filter(item => item.shopifyVariantId)
    .map(item => ({ merchandiseId: item.shopifyVariantId, quantity: item.quantity }));

  const missing = cartItems.filter(item => !item.shopifyVariantId);
  if (missing.length) {
    console.warn('Produits sans shopifyVariantId, ignorés du checkout :', missing.map(i => i.name));
  }

  if (!lines.length) {
    alert("Ces produits ne sont pas encore configurés pour le paiement en ligne. Contacte-nous directement pour commander.");
    return;
  }

  const mutation = `
    mutation cartCreate($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }`;

  try {
    const data = await shopifyFetch(mutation, { lines });
    const result = data?.cartCreate;

    if (result?.userErrors?.length) {
      console.error('Shopify userErrors:', result.userErrors);
      alert("Impossible de créer le panier Shopify. Vérifie les identifiants de variante.");
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

// Synchronise chaque produit ayant un shopifyVariantId avec les vraies
// données Shopify : stock, prix, prix barré, description et photos.
async function syncProductDataFromShopify() {
  const idsToCheck = [...new Set(PRODUCTS.filter(p => p.shopifyVariantId).map(p => p.shopifyVariantId))];
  if (!idsToCheck.length) return;

  const query = `
    query getVariantsData($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on ProductVariant {
          id
          availableForSale
          quantityAvailable
          price {
            amount
          }
          compareAtPrice {
            amount
          }
          product {
            description
            images(first: 6) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }`;

  try {
    const data = await shopifyFetch(query, { ids: idsToCheck });
    const dataMap = {};
    (data?.nodes || []).forEach(node => {
      if (node) dataMap[node.id] = node;
    });

    let changed = false;
    PRODUCTS.forEach(product => {
      if (!product.shopifyVariantId || !(product.shopifyVariantId in dataMap)) return;
      const info = dataMap[product.shopifyVariantId];

      const nowSoldOut = !info.availableForSale;
      const nowStockQty = typeof info.quantityAvailable === 'number' ? info.quantityAvailable : null;
      if (product.soldOut !== nowSoldOut || product.stockQty !== nowStockQty) changed = true;
      product.soldOut = nowSoldOut;
      product.stockQty = nowStockQty;

      if (info.price?.amount != null) {
        const nowPrice = parseFloat(info.price.amount);
        if (product.price !== nowPrice) changed = true;
        product.price = nowPrice;
      }

      const nowOldPrice = info.compareAtPrice?.amount != null ? parseFloat(info.compareAtPrice.amount) : null;
      if (product.oldPrice !== nowOldPrice) changed = true;
      product.oldPrice = nowOldPrice;

      if (info.product?.description && product.description !== info.product.description) {
        product.description = info.product.description;
        changed = true;
      }

      const shopifyImages = (info.product?.images?.edges || []).map(edge => edge.node.url);
      if (shopifyImages.length && shopifyImages.join('|') !== (product.images || []).join('|')) {
        product.images = shopifyImages;
        changed = true;
      }
    });

    if (changed) {
      renderProductGrids();
      renderProductPage();
    }
  } catch (error) {
    console.error('syncProductDataFromShopify error:', error);
  }
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cartBtn span').forEach(el => { el.textContent = `(${total})`; });

  const container = document.querySelector('.cart-items-container');

  if (container) {
    container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="">

      <div class="cart-item-details">
        <div class="cart-item-title">${escapeHtml(item.name)}</div>

        <div class="cart-item-price">
          ${euro(item.price)}
        </div>

        <div class="cart-quantity">
          <button class="cart-quantity-btn" data-decrease="${index}" aria-label="Retirer un article">
            −
          </button>

          <span>${item.quantity}</span>

          <button class="cart-quantity-btn" data-increase="${index}" aria-label="Ajouter un article">
            +
          </button>
        </div>
      </div>

      <button class="cart-item-remove" data-remove="${index}" aria-label="Supprimer le produit"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `).join('');
  }

  const empty = document.querySelector('.drawer-empty-msg');
  if (empty) empty.style.display = cart.length ? 'none' : 'block';

  const total_price = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelectorAll('.btn-checkout').forEach(btn => {
    btn.textContent = `Commander (${euro(total_price)})`;
  });
}

// ===== Tiroir MENU MOBILE (totalement séparé du panier) =====
function setupMobileMenu() {
  let overlay = document.getElementById('mobileMenuOverlay');
  let drawer = document.getElementById('mobileMenuDrawer');

  if (!drawer) {
    overlay = document.createElement('div');
    overlay.id = 'mobileMenuOverlay';
    overlay.className = 'drawer-overlay';

    drawer = document.createElement('div');
    drawer.id = 'mobileMenuDrawer';
    drawer.className = 'drawer mobile-menu-drawer';
    drawer.innerHTML = `
      <div class="drawer-header">
        <h3>Menu</h3>
        <button id="closeMobileMenuBtn" class="drawer-close" aria-label="Fermer le menu"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;

    document.body.append(overlay, drawer);
  }

  document.querySelectorAll('.mobile-nav').forEach(nav => {
    if (!drawer.contains(nav)) drawer.appendChild(nav);
  });

  const close = () => { overlay.classList.remove('active'); drawer.classList.remove('active'); };
  const open = () => { overlay.classList.add('active'); drawer.classList.add('active'); };

  document.addEventListener('click', event => {
    if (event.target.closest('#menuBtn')) { open(); }
    if (event.target.closest('#closeMobileMenuBtn')) { close(); }
    if (event.target === overlay) { close(); }
  });
}

// Galerie de la fiche produit : clics sur miniatures + flèches gauche/droite.
function setupGallery() {
  document.addEventListener('click', event => {
    const thumbBtn = event.target.closest('[data-image]');

    if (thumbBtn) {
      changeGalleryImage(thumbBtn.dataset.image);
      document.querySelectorAll('.product-thumbnail').forEach(item => {
        item.classList.toggle('active', item === thumbBtn);
      });
      return;
    }

    const arrow = event.target.closest('.gallery-arrow');

    if (arrow) {
      const thumbnails = [...document.querySelectorAll('.product-thumbnail')];
      if (!thumbnails.length) return;

      const currentIndex = thumbnails.findIndex(
        t => t.classList.contains('active')
      );

      const direction = arrow.classList.contains('gallery-arrow-next') ? 1 : -1;
      const safeCurrentIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex =
        (safeCurrentIndex + direction + thumbnails.length) %
        thumbnails.length;

      const nextThumb = thumbnails[nextIndex];

      changeGalleryImage(
        nextThumb.dataset.image,
        direction
      );

      thumbnails.forEach(item => {
        item.classList.toggle('active', item === nextThumb);
      });
    }
  });
}

function changeGalleryImage(newImage, direction = 1) {
  const mainImage = document.getElementById('mainProductImage');

  if (!mainImage) return;
  if (mainImage.src.includes(newImage)) return;

  mainImage.classList.remove(
    'gallery-slide-in-left',
    'gallery-slide-in-right'
  );

  mainImage.classList.add(
    direction === 1
      ? 'gallery-slide-out-left'
      : 'gallery-slide-out-right'
  );

  setTimeout(() => {
    mainImage.src = newImage;

    mainImage.classList.remove(
      'gallery-slide-out-left',
      'gallery-slide-out-right'
    );

    mainImage.classList.add(
      direction === 1
        ? 'gallery-slide-in-right'
        : 'gallery-slide-in-left'
    );

    void mainImage.offsetWidth;

    requestAnimationFrame(() => {
      mainImage.classList.remove(
        'gallery-slide-in-right',
        'gallery-slide-in-left'
      );

      mainImage.classList.add('gallery-slide-center');
    });

    setTimeout(() => {
      mainImage.classList.remove('gallery-slide-center');
    }, 400);

  }, 200);
}

// Compte à rebours du lancement/Drop : met à jour TOUS les éléments portant
// la classe .js-launch-timer (barre de navigation + boutons "verrouillés").
// ⚠️ Pense à changer la date ci-dessous à la vraie date de lancement du Drop.
function startLaunchCountdown() {
  const targetDate = new Date('2026-10-11T00:00:00').getTime();

  const tick = () => {
    const timerEls = document.querySelectorAll('.js-launch-timer');
    if (!timerEls.length) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    let text;
    if (distance < 0) {
      text = "C'est ouvert !";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      text = `${days}j ${hours}h ${minutes}m ${seconds}s`;
    }

    timerEls.forEach(el => { el.textContent = text; });
  };

  tick();
  setInterval(tick, 1000);
}

// ===== Tiroir PANIER (séparé du menu mobile) =====
function setupCartAndDrawer() {
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('cartDrawer');

  if (drawer && !drawer.querySelector('.cart-items-container')) {
    const container = document.createElement('div');
    container.className = 'cart-items-container';
    drawer.querySelector('.drawer-empty-msg')?.before(container);
  }

  const close = () => { overlay?.classList.remove('active'); drawer?.classList.remove('active'); };
  const open = () => { overlay?.classList.add('active'); drawer?.classList.add('active'); };

  document.getElementById('cartBtn')?.addEventListener('click', open);
  document.getElementById('closeDrawerBtn')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);

  document.addEventListener('click', event => {
    const add = event.target.closest('[data-add]');
    const remove = event.target.closest('[data-remove]');
    const decrease = event.target.closest('[data-decrease]');
    const increase = event.target.closest('[data-increase]');
    const checkout = event.target.closest('.btn-checkout');

    if (add) {
      const product = PRODUCTS.find(p => p.id === add.dataset.add);
      if (!product || product.soldOut) return;

      const line = cart.find(item => item.id === product.id);

      if (line) {
        line.quantity++;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
          shopifyVariantId: product.shopifyVariantId
        });
      }

      saveCart();
      updateCart();
      open();
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
      const index = Number(increase.dataset.increase);
      const item = cart[index];
      if (!item) return;

      item.quantity++;
      saveCart();
      updateCart();
      return;
    }

    if (remove) {
      const index = Number(remove.dataset.remove);
      cart.splice(index, 1);
      saveCart();
      updateCart();
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

document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderProductGrids();
  renderProductPage();
  setupSearch();
  setupCartAndDrawer();
  setupMobileMenu();
  setupGallery();
  startLaunchCountdown();
  syncProductDataFromShopify();
});
