const NAVIGATION_LIST_ITEMS = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift Sets"
  ];

  const PRODUCTS = [
    { name: "Slub Jersey T-Shirt", price: "$12.99", img: "assets/tshirt1.jpg" },
    { name: "Printed T-Shirt", price: "$12.99", img: "assets/tshirt2.jpg" },
    { name: "Cotton T-Shirt", price: "$12.99", img: "assets/tshirt3.jpg" },
    { name: "T-Shirt with a Motif", price: "$12.99", img: "assets/tshirt4.jpg" },
    { name: "Cotton T-Shirt Regular Fit", price: "$12.99", img: "assets/tshirt5.jpg" },
    { name: "Slub Jersey T-Shirt", price: "$12.99", img: "assets/tshirt6.jpg" }
  ];
  
  const navList = document.getElementById('nav-list');
  NAVIGATION_LIST_ITEMS.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
      li.classList.add('active');
    });
    navList.appendChild(li);
  });

  const productGrid = document.getElementById('product-grid');
  PRODUCTS.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
  
    const img = document.createElement('img');
    img.src = product.img;
  
    const title = document.createElement('h3');
    title.textContent = product.name.toUpperCase();
  
    const price = document.createElement('p');
    price.textContent = product.price;
  
    const button = document.createElement('button');
    button.className = 'add-to-bag';
    button.textContent = 'Add to bag';
  
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);
  
    productGrid.appendChild(card);
  });

  const navRec = document.getElementById('recommended');

  const topBar = document.createElement('div');
  topBar.className = 'top-bar';
  
  const itemsCount = document.createElement('div');
  itemsCount.className = 'items-count';
  itemsCount.textContent = `${PRODUCTS.length} ITEMS`;
  
  const sortBy = document.createElement('div');
  sortBy.className = 'sort-by';
  sortBy.innerHTML = 'SORT BY <span class="sort-selected">RECOMMENDED ▼</span>';
  
  topBar.appendChild(itemsCount);
  topBar.appendChild(sortBy);
  
  navRec.prepend(topBar);
