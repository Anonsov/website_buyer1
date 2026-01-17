const PRODUCTS = [
  {
    id: "blender-pro-900",
    name: "Blender Pro 900",
    category: "Kitchen Appliances",
    price: 129.99,
    rating: 4.6,
    availability: "In stock",
    features: ["900W motor", "6 speed settings", "BPA-free pitcher"],
  },
  {
    id: "smart-microwave-25l",
    name: "Smart Microwave 25L",
    category: "Kitchen Appliances",
    price: 189.0,
    rating: 4.4,
    availability: "In stock",
    features: ["Sensor cooking", "Quick defrost", "Child lock"],
  },
  {
    id: "steam-cleaner-s1",
    name: "Steam Cleaner S1",
    category: "Cleaning Devices",
    price: 99.5,
    rating: 4.2,
    availability: "In stock",
    features: ["Multi-surface heads", "Lightweight body", "Fast heat-up"],
  },
  {
    id: "vacuum-max-v7",
    name: "Vacuum Max V7",
    category: "Cleaning Devices",
    price: 249.0,
    rating: 4.7,
    availability: "In stock",
    features: ["HEPA filtration", "Cordless design", "45-min runtime"],
  },
  {
    id: "tower-fan-breeze",
    name: "Tower Fan Breeze",
    category: "Heating & Cooling",
    price: 79.0,
    rating: 4.3,
    availability: "In stock",
    features: ["Quiet mode", "Remote control", "3 airflow settings"],
  },
  {
    id: "compact-heater-h2",
    name: "Compact Heater H2",
    category: "Heating & Cooling",
    price: 89.0,
    rating: 4.1,
    availability: "Out of stock",
    features: ["Auto shutoff", "Energy saver", "Desktop size"],
  },
  {
    id: "hair-dryer-airlite",
    name: "Hair Dryer AirLite",
    category: "Personal Care",
    price: 59.99,
    rating: 4.5,
    availability: "In stock",
    features: ["Ionic technology", "Foldable handle", "Cool shot"],
  },
  {
    id: "steam-iron-smooth",
    name: "Steam Iron Smooth",
    category: "Personal Care",
    price: 64.0,
    rating: 4.0,
    availability: "In stock",
    features: ["Ceramic soleplate", "Anti-drip", "Self-clean"],
  },
  {
    id: "smart-kettle-kconnect",
    name: "Smart Kettle K-Connect",
    category: "Smart Home",
    price: 119.0,
    rating: 4.6,
    availability: "In stock",
    features: ["App scheduling", "Temperature presets", "Keep warm"],
  },
  {
    id: "air-purifier-cloud",
    name: "Air Purifier Cloud",
    category: "Smart Home",
    price: 199.0,
    rating: 4.3,
    availability: "In stock",
    features: ["Air quality sensor", "Sleep mode", "Smart alerts"],
  },
  {
    id: "mini-fridge-chill",
    name: "Mini Fridge Chill",
    category: "Kitchen Appliances",
    price: 149.0,
    rating: 4.2,
    availability: "In stock",
    features: ["12L capacity", "Energy efficient", "Quiet compressor"],
  },
  {
    id: "robot-mop-swift",
    name: "Robot Mop Swift",
    category: "Cleaning Devices",
    price: 299.0,
    rating: 4.4,
    availability: "In stock",
    features: ["Auto mapping", "Wet + dry modes", "Smart schedule"],
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
    <div class="placeholder-img" aria-hidden="true"></div>
    <h3>${product.name}</h3>
    <p class="price">${formatCurrency(product.price)}</p>
    <p class="rating">${product.rating} ★</p>
    <p class="status">${product.availability}</p>
    <ul class="feature-list">
      ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
    </ul>
    <div class="card-actions">
      <button class="btn primary" data-add-to-cart="${product.id}">Add to cart</button>
      <a class="btn secondary" href="product.html?id=${product.id}">View details</a>
    </div>
  `;
  return card;
};

const renderProductGrid = (products, container) => {
  container.innerHTML = "";
  if (!products.length) {
    container.innerHTML = "<p class=\"muted\">No products match your search.</p>";
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
        <div class="placeholder-img large" aria-hidden="true"></div>
      </div>
      <div class="card">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="products.html">Products</a> <span aria-hidden="true">/</span> <span>${product.name}</span>
        </nav>
        <h1>${product.name}</h1>
        <p class="price">${formatCurrency(product.price)}</p>
        <p class="rating">${product.rating} ★</p>
        <p class="status">${product.availability}</p>
        <ul class="feature-list">
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <p class="muted">Delivery in 2–5 days or free pickup at select stores.</p>
        <button class="btn primary" data-add-to-cart="${product.id}">Add to cart</button>
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
      cartItemsContainer.innerHTML = "<p class=\"muted\">Your cart is empty.</p>";
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
        <div class="placeholder-img" aria-hidden="true"></div>
        <div>
          <h3>${product.name}</h3>
          <p class="price">${formatCurrency(product.price)}</p>
          <div class="quantity-control" aria-label="Quantity">
            <button type="button" data-qty="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-qty="increase" data-id="${item.id}">+</button>
            <button type="button" class="btn secondary" data-remove="${item.id}">Remove</button>
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

    confirmation.textContent = "Thank you! Your order has been placed and a confirmation email is on the way.";
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
    confirmation.textContent = "Thanks for reaching out! Our support team will respond within 1 business day.";
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
