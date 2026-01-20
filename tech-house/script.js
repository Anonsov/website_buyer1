const PRODUCTS = [
  {
    id: "blender-pro-900",
    name: "Blender Pro 900",
    category: "Oshxona texnikasi",
    price: 129.99,
    rating: 4.6,
    availability: "Mavjud",
    features: ["900W motor", "6 tezlik sozlamalari", "BPA-free pitcher"],
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "smart-microwave-25l",
    name: "Smart Microwave 25L",
    category: "Oshxona texnikasi",
    price: 189.0,
    rating: 4.4,
    availability: "Mavjud",
    features: ["Sensor cooking", "Tez muzlatish", "Bolalar qulfi"],
    image:
      "https://imgs.search.brave.com/w8Agw6z50pl-AqzJA_mxJv4MTNQdTRa_sgzvY_VJus4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c21hcHBsaWFuY2Uu/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzA1X05l/b0NoZWZfQmxhY2tf/TVMyNTk1RElTX1BI/X1JpZ2h0U2lkZV84/MDB4LmpwZz92PTE3/MDQ5NjQ0NTU",
  },
  {
    id: "steam-cleaner-s1",
    name: "Steam Cleaner S1",
    category: "Tozalash qurilmalari",
    price: 99.5,
    rating: 4.2,
    availability: "Mavjud",
    features: ["Multi-surface heads", "Yengil vazn", "Tez isitish"],
    image:
      "https://imgs.search.brave.com/z-DvZybvZMFHMF71upKu6UPZxBksfOWceX-tnuYectA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS5r/YWVyY2hlci1tZWRp/YS5jb20vbWVkaWEv/aW1hZ2Uvc2VsZWN0/aW9uLzE3Mjk2Ni9k/MC9zdGVhbS1jbGVh/bmVyLWRlbHV4ZS5q/cGcjd2VicA",
  },
  {
    id: "vacuum-max-v7",
    name: "Vacuum Max V7",
    category: "Tozalash qurilmalari",
    price: 249.0,
    rating: 4.7,
    availability: "Mavjud",
    features: ["HEPA filtratsiya", "Simsiz dizayn", "45-daqiqa ishlash vaqti"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "tower-fan-breeze",
    name: "Tower Fan Breeze",
    category: "Isitish va sovitish",
    price: 79.0,
    rating: 4.3,
    availability: "Mavjud",
    features: [
      "Jim rejimi",
      "Masofadan boshqarish",
      "3 havo oqimi sozlamalari",
    ],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "compact-heater-h2",
    name: "Compact Heater H2",
    category: "Isitish va sovitish",
    price: 89.0,
    rating: 4.1,
    availability: "Mavjud emas",
    features: ["Avtomatik o'chirish", "Energiya tejovchi", "Stol o'lchami"],
    image:
      "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "hair-dryer-airlite",
    name: "Hair Dryer AirLite",
    category: "Shaxsiy parvarish",
    price: 59.99,
    rating: 4.5,
    availability: "Mavjud",
    features: ["Ionic texnologiya", "Qayriladigan tutqich", "Sovuq zarba"],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "steam-iron-smooth",
    name: "Steam Iron Smooth",
    category: "Shaxsiy parvarish",
    price: 64.0,
    rating: 4.0,
    availability: "Mavjud",
    features: ["Keramika taglik", "Anti-drip", "O'z-o'zini tozalash"],
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "smart-kettle-kconnect",
    name: "Smart Kettle K-Connect",
    category: "Aqlli uy",
    price: 119.0,
    rating: 4.6,
    availability: "Mavjud",
    features: ["Ilova orqali rejalashtirish", "Harorat presets", "Iliq tutish"],
    image:
      "https://imgs.search.brave.com/zAG5ciG-sbqp16EN9v0qfxaAirc4Y6pE7tQ8_sk5AUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVn/YWRnZXRmbG93LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMC9TbWFydGVy/LTNyZC1HZW4taUtl/dHRsZS1TbWFydC1F/bGVjdHJpYy1LZXR0/bGUtMDIuanBn",
  },
  {
    id: "air-purifier-cloud",
    name: "Air Purifier Cloud",
    category: "Aqlli uy",
    price: 199.0,
    rating: 4.3,
    availability: "Mavjud",
    features: [
      "Havo sifatini sensor",
      "Uxlash rejimi",
      "Aqlli ogohlantirishlar",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "mini-fridge-chill",
    name: "Mini Fridge Chill",
    category: "Oshxona texnikasi",
    price: 149.0,
    rating: 4.2,
    availability: "Mavjud",
    features: ["12L sig'im", "Energiya tejovchi", "Jim kompressor"],
    image:
      "https://imgs.search.brave.com/xn7smZEcQ_YK9IcnssekOjS2Y3zbUxEVBB9PCsgs_yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlcmFwcGxpYW5j/ZS5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/VWJlci1BcHBsaWFu/Y2UtVWJlci1DaGls/bC1VQi1DSDEtNi1D/YW4tUGVyc29uYWwt/TWluaS1GcmlkZ2Ut/VWJlci1BcHBsaWFu/Y2UtMTYwNjQ1NDY1/MS5qcGc_dj0xNjgz/MDc5MzI5JndpZHRo/PTEwODA",
  },
  {
    id: "robot-mop-swift",
    name: "Robot Mop Swift",
    category: "Tozalash qurilmalari",
    price: 299.0,
    rating: 4.4,
    availability: "Mavjud",
    features: [
      "Avtomatik xarita tuzish",
      "Nam + quruq rejimlar",
      "Aqlli jadval",
    ],
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=80",
  },
];

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const getCart = () => {
  const stored = localStorage.getItem("techHouseCart");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (error) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem("techHouseCart", JSON.stringify(cart));
  updateCartCount(cart);
};

const updateCartCount = (cart = getCart()) => {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });
};

const addToCart = (productId) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart(cart);
};

const getProductById = (id) => PRODUCTS.find((product) => product.id === id);

const createProductCard = (product) => {
  const card = document.createElement("article");
  card.className = "card product-card";
  card.innerHTML = `
    <img class="media-img" src="${product.image}" alt="${product.name}" loading="lazy" />
    <h3>${product.name}</h3>
    <p class="price">${formatCurrency(product.price)}</p>
    <p class="rating">${product.rating} ★</p>
    <p class="status">${product.availability}</p>
    <ul class="feature-list">
      ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <div class="card-actions">
      <button class="btn primary" data-add-to-cart="${product.id}">Savatga qo'shish</button>
      <a class="btn secondary" href="product.html?id=${product.id}">Batafsil ko'rish</a>
    </div>
  `;
  return card;
};

const renderProductGrid = (products, container) => {
  container.innerHTML = "";
  if (!products.length) {
    container.innerHTML = '<p class="muted">Mahsulotlar topilmadi.</p>';
    return;
  }
  products.forEach((product) => container.appendChild(createProductCard(product)));
};

const initProductsPage = () => {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category");
  if (selectedCategory) {
    categoryFilter.value = selectedCategory;
  }

  const applyFilters = () => {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = PRODUCTS.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    renderProductGrid(filtered, grid);
  };

  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  applyFilters();
};

const initProductDetailPage = () => {
  const detailContainer = document.getElementById("productDetail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProductById(productId) || PRODUCTS[0];

  detailContainer.innerHTML = `
    <div class="product-detail">
      <div class="card">
        <img class="media-img large" src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="card">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="products.html">Mahsulotlar</a> <span aria-hidden="true">/</span> <span>${product.name}</span>
        </nav>
        <h1>${product.name}</h1>
        <p class="price">${formatCurrency(product.price)}</p>
        <p class="rating">${product.rating} ★</p>
        <p class="status">${product.availability}</p>
        <ul class="feature-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <p class="muted">2–5 kunda yetkazib beriladi yoki tanlangan do'konlarda bepul olib ketish.</p>
        <button class="btn primary" data-add-to-cart="${product.id}">Savatga qo'shish</button>
      </div>
    </div>
  `;

  const suggested = PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 3);
  const suggestedGrid = document.getElementById("suggestedGrid");
  if (suggestedGrid) {
    renderProductGrid(suggested, suggestedGrid);
  }
};

const initCartPage = () => {
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  if (!cartItemsContainer || !subtotalEl) return;

  const renderCart = () => {
    const cart = getCart();
    if (!cart.length) {
      cartItemsContainer.innerHTML = '<p class="muted">Savat bo\'sh.</p>';
      subtotalEl.textContent = formatCurrency(0);
      return;
    }
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item) => {
      const product = getProductById(item.id);
      if (!product) return;
      subtotal += product.price * item.quantity;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img class="media-img small" src="${product.image}" alt="${product.name}" loading="lazy" />
        <div>
          <h3>${product.name}</h3>
          <p class="price">${formatCurrency(product.price)}</p>
          <div class="quantity-control" aria-label="Soni">
            <button type="button" data-qty="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-qty="increase" data-id="${item.id}">+</button>
            <button type="button" class="btn secondary" data-remove="${item.id}">O'chirish</button>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(row);
    });

    subtotalEl.textContent = formatCurrency(subtotal);
  };

  cartItemsContainer.addEventListener("click", (event) => {
    const cart = getCart();
    const target = event.target;
    const id = target.getAttribute("data-id") || target.getAttribute("data-remove");
    if (!id) return;

    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;

    if (target.hasAttribute("data-remove")) {
      cart.splice(itemIndex, 1);
    }

    if (target.getAttribute("data-qty") === "increase") {
      cart[itemIndex].quantity += 1;
    }

    if (target.getAttribute("data-qty") === "decrease") {
      cart[itemIndex].quantity -= 1;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
    }

    saveCart(cart);
    renderCart();
  });

  renderCart();
};

const initCheckoutPage = () => {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  const deliveryFields = document.getElementById("deliveryFields");
  const pickupFields = document.getElementById("pickupFields");
  const confirmation = document.getElementById("orderConfirmation");

  const toggleFields = () => {
    const fulfillment = form.fulfillment.value;
    if (fulfillment === "delivery") {
      deliveryFields.classList.remove("hidden");
      pickupFields.classList.add("hidden");
      deliveryFields.querySelectorAll("input").forEach((input) => (input.required = true));
      pickupFields.querySelector("select").required = false;
    } else {
      deliveryFields.classList.add("hidden");
      pickupFields.classList.remove("hidden");
      deliveryFields.querySelectorAll("input").forEach((input) => (input.required = false));
      pickupFields.querySelector("select").required = true;
    }
  };

  form.addEventListener("change", toggleFields);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    confirmation.textContent =
      "Rahmat! Sizning buyurtmangiz qabul qilindi va tasdiqlash xati yuborildi.";
    confirmation.classList.remove("hidden");
    saveCart([]);
    form.reset();
    toggleFields();
  });

  toggleFields();
};

const initSupportPage = () => {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;
  const confirmation = document.getElementById("contactConfirmation");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    confirmation.textContent =
      "Aloqa uchun rahmat! Bizning qo'llab-quvvatlash jamoamiz 1 ish kuni ichida javob beradi.";
    confirmation.classList.remove("hidden");
    contactForm.reset();
  });
};

const initGlobalHandlers = () => {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;
    const id = button.getAttribute("data-add-to-cart");
    if (!getProductById(id)) return;
    addToCart(id);
  });
};

updateCartCount();
initGlobalHandlers();
initProductsPage();
initProductDetailPage();
initCartPage();
initCheckoutPage();
initSupportPage();

(function() {
  const toggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !header || !nav) return;

  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
  const setExpanded = (exp) => {
    toggle.setAttribute('aria-expanded', String(exp));
    header.classList.toggle('menu-open', !!exp);
  };

  // Ensure closed by default
  setExpanded(false);

  toggle.addEventListener('click', function() {
    if (!isMobile()) return; // only act on phones
    const next = toggle.getAttribute('aria-expanded') === 'false';
    setExpanded(next);
  });

  // Close menu when resizing out of mobile
  window.addEventListener('resize', function() {
    if (!isMobile()) setExpanded(false);
  });

  // Close when navigating a link
  nav.addEventListener('click', function(e) {
    const t = e.target;
    if (t && t.tagName === 'A' && isMobile()) setExpanded(false);
  });
})();
