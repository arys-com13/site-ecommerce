// ─── DATA ───────────────────────────────────────────
const products = [
  { id:1, name:'Blazer Structuré', brand:'MAISON CO.', price:'24500 Fcfa', oldPrice:null, badge:'Nouveau', stars:'★★★★★', img:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
  { id:2, name:'Pantalon Palazzo', brand:'ÉLITE PARIS', price:'16800 Fcfa', oldPrice:'21000 Fcfa', badge:'−20%', stars:'★★★★☆', img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80' },
  { id:3, name:'Chemise en Lin', brand:'ATELIER N°5', price:'11900 Fcfa', oldPrice:null, badge:'Meilleure-vente', stars:'★★★★★', img:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80' },
  { id:4, name:'Robe Midi Évasée', brand:'VOGUE LINE', price:'28900 Fcfa', oldPrice:null, badge:'Nouveau', stars:'★★★★★', img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80' },
  { id:5, name:'Cardigan Cachemire', brand:'NORDICA', price:'39500 Fcfa', oldPrice:'49000 Fcfa', badge:'−19%', stars:'★★★★☆', img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80' },
  { id:6, name:'Jupe Plissée Soie', brand:'SABLE & OR', price:'21000 Fcfa', oldPrice:null, badge:'Exclusif', stars:'★★★★★', img:'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80' },
  { id:7, name:'Veste en Daim', brand:'MAISON CO.', price:'45000 Cfa', oldPrice:'56000 Fcfa', badge:'−20%', stars:'★★★★★', img:'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&q=80' },
  { id:8, name:'Combinaison Lin', brand:'ATELIER N°5', price:'18500 Fcfa', oldPrice:null, badge:'Nouveau', stars:'★★★★☆', img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80' },
];

const testimonials = [
  { text:'Une qualité absolument remarquable. J\'ai reçu ma commande en 48h, les matières sont d\'une douceur incomparable et le style est exactement celui que je recherchais.', name:'Leslie chameni', role:'Cliente fidèle depuis 2025', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
  { text:'Le service client est exceptionnel. J\'ai eu besoin d\'aide pour un échange et tout s\'est réglé en moins d\'une heure. Je ne commande plus ailleurs.', name:'  jessy Djeumaleu' , role:'Ambassadrice AryShop', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80' },
  { text:'Des pièces qui traversent les années. J\'ai des articles achetés il y a 1,5 aryShop ans qui sont encore parfaits. Le vrai luxe, c\'est ça : durer dans le temps.', name:'Prisca Njoudam', role:'Styliste indépendante', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80' },
  { text:'Les photos sont fidèles à la réalité, les tailles sont bien indiquées et la livraison est impeccable. Exactement ce qu\'on attend d\'une boutique premium.', name:'Claire Makoudoum', role:'Cliente depuis 2025', stars:'★★★★☆', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
  { text:'J\'adore la curation éditoriale de la boutique. Chaque pièce a été choisie avec soin et ça se sent. Une vraie expérience d\'achat différenciante.', name:'Sylviane Magne', role:'Blogueuse mode', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80' },
   { text:'Une qualité absolument remarquable. J\'ai reçu ma commande en 48h, les matières sont d\'une douceur incomparable et le style est exactement celui que je recherchais.', name:'Arcel Tebu', role:'Cliente fidèle depuis 2025', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80' },
  { text:'Le service client est exceptionnel. J\'ai eu besoin d\'aide pour un échange et tout s\'est réglé en moins d\'une heure. Je ne commande plus ailleurs.', name:'  Patricia Ntsama' , role:'Ambassadrice AryShop', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80' },
  { text:'Des pièces qui traversent les années. J\'ai des articles achetés il y a 1,5 aryShop ans qui sont encore parfaits. Le vrai luxe, c\'est ça : durer dans le temps.', name:'Marcelle Megapche', role:'Styliste indépendante', stars:'★★★★★', avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80' },
  { text:'Les photos sont fidèles à la réalité, les tailles sont bien indiquées et la livraison est impeccable. Exactement ce qu\'on attend d\'une boutique premium.', name:'Aristote Fotsing', role:'Cliente depuis 2025', stars:'★★★★☆', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
];

// ─── INIT ────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 3200);

  renderProducts();
  renderTestimonials();
  initReveal();
});

// ─── NAVBAR SCROLL ───────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-top');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  backTop.classList.toggle('visible', window.scrollY > 400);
});

// ─── MOBILE MENU ─────────────────────────────────────
function toggleMobile() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.classList.toggle('active');
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeMobile() {
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── HERO SLIDER ─────────────────────────────────────
let currentSlide = 0, slideTimer;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetTimer();
}

function changeSlide(dir) { goToSlide(currentSlide + dir); }

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => changeSlide(1), 6000);
}
resetTimer();

// ─── PRODUCTS ────────────────────────────────────────
let prodOffset = 0;
const visibleCards = () => window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1100 ? 3 : 4;

function renderProducts() {
  const slider = document.getElementById('prodSlider');
  slider.innerHTML = products.map(p => `
    <div class="prod-card reveal">
      <div class="prod-img-wrap">
        <div class="prod-img" style="background-image:url('${p.img}')"></div>
        ${p.badge ? `<div class="prod-badge">${p.badge}</div>` : ''}
        <div class="prod-actions">
          <button class="prod-action-btn" onclick="addToCart('${p.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Ajouter
          </button>
          <button class="prod-action-btn wish" onclick="wishlist('${p.name}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
      </div>
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-price">
        <span class="price-current">${p.price}</span>
        ${p.oldPrice ? `<span class="price-old">${p.oldPrice}</span>` : ''}
      </div>
      <div class="prod-stars">${p.stars} (${Math.floor(Math.random()*80)+20})</div>
    </div>
  `).join('');
  initReveal();
}

function slideProd(dir) {
  const max = products.length - visibleCards();
  prodOffset = Math.max(0, Math.min(max, prodOffset + dir));
  const cardW = document.querySelector('.prod-card').offsetWidth + 24;
  document.getElementById('prodSlider').style.transform = `translateX(-${prodOffset * cardW}px)`;
}

function filterTab(el, type) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  prodOffset = 0;
  document.getElementById('prodSlider').style.transform = 'translateX(0)';
  showToast(`Filtre : ${el.textContent}`);
}

// ─── TESTIMONIALS ─────────────────────────────────────
let testiOffset = 0;
const testiVisible = () => window.innerWidth < 768 ? 1 : window.innerWidth < 900 ? 2 : 3;

function renderTestimonials() {
  const slider = document.getElementById('testiSlider');
  slider.innerHTML = testimonials.map(t => `
    <div class="testi-card reveal">
      <div class="testi-quote">"</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-author">
        <div class="testi-avatar" style="background-image:url('${t.avatar}')"></div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
          <div class="testi-stars">${t.stars}</div>
        </div>
      </div>
    </div>
  `).join('');

  const nav = document.getElementById('testiNav');
  const groups = Math.ceil(testimonials.length / testiVisible());
  nav.innerHTML = Array.from({length: groups}, (_,i) =>
    `<div class="testi-dot ${i===0?'active':''}" onclick="goTesti(${i})"></div>`
  ).join('');
  initReveal();
}

function goTesti(i) {
  testiOffset = i;
  const cards = document.querySelectorAll('.testi-card');
  const cardW = cards[0]?.offsetWidth + 32 || 400;
  document.getElementById('testiSlider').style.transform = `translateX(-${i * cardW * testiVisible()}px)`;
  document.querySelectorAll('.testi-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}

// Auto-advance testimonials
setInterval(() => {
  const groups = Math.ceil(testimonials.length / testiVisible());
  testiOffset = (testiOffset + 1) % groups;
  goTesti(testiOffset);
}, 5000);

// ─── CART ────────────────────────────────────────────
function openCart() { document.getElementById('cartOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); document.body.style.overflow = ''; }
function closeCartOutside(e) { if(e.target === document.getElementById('cartOverlay')) closeCart(); }

function addToCart(name) {
  const badge = document.getElementById('cartBadge');
  badge.textContent = parseInt(badge.textContent) + 1;
  showToast(`"${name}" ajouté au panier ✓`);
  openCart();
}

function wishlist(name) { showToast(`"${name}" ajouté aux favoris ♡`); }

function changeQty(btn, dir) {
  const qtyEl = btn.parentElement.querySelector('.qty-num');
  const newVal = Math.max(1, parseInt(qtyEl.textContent) + dir);
  qtyEl.textContent = newVal;
}

function removeCartItem(btn) {
  const item = btn.closest('.cart-item');
  item.style.opacity = '0'; item.style.transform = 'translateX(30px)';
  item.style.transition = 'all .3s ease';
  setTimeout(() => item.remove(), 300);
  const badge = document.getElementById('cartBadge');
  badge.textContent = Math.max(0, parseInt(badge.textContent) - 1);
}

// ─── NEWSLETTER ───────────────────────────────────────
function subscribeNewsletter() {
  const input = document.querySelector('.newsletter-input');
  if (input.value.includes('@')) {
    showToast('Merci ! Vous êtes abonné(e) ✓');
    input.value = '';
  } else {
    showToast('Veuillez entrer un email valide');
  }
}

// ─── TOAST ────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ─── REVEAL ON SCROLL ────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

window.addEventListener('resize', () => { renderTestimonials(); });