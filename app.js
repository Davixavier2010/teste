// Menu Data
const menuItems = [
  {
    id: 1,
    title: "Prato Executivo Filé Mignon",
    category: "almoco",
    price: "R$ 38,90",
    badge: "Mais Pedido",
    description: "Medalhão grelhado ao molho madeira suave, arroz soltinho, feijão caseiro, farofa artesanal e fritas crocantes.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    title: "Marmitex Especial do Dia",
    category: "marmitex",
    price: "R$ 26,00",
    badge: "Destaque do Almoço",
    description: "A autêntica comida caseira com arroz, feijão temperado, carne suculenta grelhada ou assada, legumes refogados e salada fresca.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    title: "Espresso Seleção Especial",
    category: "cafes",
    price: "R$ 8,50",
    badge: "100% Arábica",
    description: "Grãos selecionados da Alta Mogiana, torra média artesanal com notas de chocolate amargo e caramelo floral.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    title: "Cappuccino Italiano Cremoso",
    category: "cafes",
    price: "R$ 15,90",
    badge: "Favorito da Casa",
    description: "Dose dupla de espresso, leite vaporizado aveludado com microespuma densa e toque suave de cacau 70%.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    title: "Almôndegas ao Molho Rústico",
    category: "almoco",
    price: "R$ 32,50",
    badge: "Receita de Família",
    description: "Almôndegas de carne selecionada ao sugo com manjericão fresco, servidas com arroz branco e purê de batata cremoso.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    title: "Marmitex Fit Grelhado",
    category: "marmitex",
    price: "R$ 28,00",
    badge: "Opção Saudável",
    description: "Filé de frango marinado em ervas frescas, arroz integral multigrãos, brócolis ao vapor e purê de abóbora cabotiá.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    title: "Croissant Manteiga Artesanal",
    category: "lanches",
    price: "R$ 14,00",
    badge: "Fornada Fresca",
    description: "Massa folhada fermentada lentamente com manteiga francesa, servido quentinho com queijo gouda ou geleia da casa.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    title: "Sanduíche Ciabatta & Parma",
    category: "lanches",
    price: "R$ 29,90",
    badge: "Bistrô Signature",
    description: "Pão ciabatta de fermentação natural, presunto cru, rúcula fresca, queijo brie maçaricado e redução balsâmica.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    title: "Torta de Maçã com Gelato",
    category: "sobremesas",
    price: "R$ 21,00",
    badge: "Imperdível",
    description: "Torta folhada recheada com maçãs caramelizadas na canela da Índia, servida com bola de gelato artesanal de baunilha.",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=700&q=80"
  }
];

const WHATSAPP_PHONE = "5512974070207"; // Format for WhatsApp API

// Render Menu
function renderMenu(category = 'todos') {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  const filtered = category === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => {
    const orderText = encodeURIComponent(`Olá! Gostaria de pedir pelo cardápio: *${item.title}* (${item.price}).`);
    const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${orderText}`;

    return `
      <div class="group relative bg-[#15181f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#f5b324]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
        <div>
          <div class="relative h-52 w-full overflow-hidden bg-zinc-900">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#15181f] via-transparent to-transparent opacity-80"></div>
            <span class="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-[#f5b324] text-xs font-semibold px-3 py-1 rounded-full border border-[#f5b324]/30">
              ${item.badge}
            </span>
            <span class="absolute bottom-3 right-3 text-white font-bold text-lg bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
              ${item.price}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-white group-hover:text-[#f5b324] transition-colors mb-2">
              ${item.title}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">
              ${item.description}
            </p>
          </div>
        </div>

        <div class="p-6 pt-0 mt-2">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" 
             class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#f5b324] text-gray-200 hover:text-black font-semibold text-sm transition-all duration-200 border border-white/10 hover:border-[#f5b324]">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.086-.179.18-.077.355.101.174.449.741.964 1.2.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.55-.679.115-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824z"/>
            </svg>
            Pedir no WhatsApp ↗
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Category Tabs Switching
function setupCategoryFilters() {
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-[#f5b324]', 'text-black', 'border-[#f5b324]');
        t.classList.add('bg-white/5', 'text-gray-300', 'border-white/10');
      });
      tab.classList.remove('bg-white/5', 'text-gray-300', 'border-white/10');
      tab.classList.add('bg-[#f5b324]', 'text-black', 'border-[#f5b324]');
      
      const category = tab.getAttribute('data-category');
      renderMenu(category);
    });
  });
}

// Cookie Banner Handler
function setupCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const dismissed = localStorage.getItem('glacy_cookies_accepted');
  if (dismissed) {
    banner.style.display = 'none';
  }

  const buttons = banner.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('glacy_cookies_accepted', 'true');
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(30px)';
      banner.style.transition = 'all 0.4s ease';
      setTimeout(() => banner.remove(), 400);
    });
  });
}

// Modal Contact
function setupModal() {
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButton = document.getElementById('close-modal-btn');
  const modal = document.getElementById('contact-modal');
  const backdrop = document.getElementById('modal-backdrop');

  const open = () => {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.querySelector('.modal-box').classList.remove('scale-95');
      modal.querySelector('.modal-box').classList.add('scale-100');
    }, 10);
  };

  const close = () => {
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-box').classList.remove('scale-100');
    modal.querySelector('.modal-box').classList.add('scale-95');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  openButtons.forEach(btn => btn.addEventListener('click', open));
  if (closeButton) closeButton.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);

  // Modal contact form WhatsApp submit
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const motive = document.getElementById('form-motive').value;
      const message = document.getElementById('form-message').value;

      const fullText = encodeURIComponent(`Olá, Glacy Café & Bistrô!\n\n*Nome:* ${name}\n*Assunto:* ${motive}\n*Mensagem:* ${message}`);
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${fullText}`, '_blank');
      close();
    });
  }
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu ? menu.querySelectorAll('a') : [];

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// Dynamic Business Status (Limeira)
function updateStoreStatus() {
  const statusBadge = document.getElementById('store-status-badge');
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();

  let isOpen = false;

  if (day >= 1 && day <= 5) {
    // Seg a Sex: 07:00 as 19:00
    if (hour >= 7 && hour < 19) isOpen = true;
  } else if (day === 6) {
    // Sab: 08:00 as 16:00
    if (hour >= 8 && hour < 16) isOpen = true;
  }

  if (isOpen) {
    statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> Aberto agora para você`;
    statusBadge.className = "inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20";
  } else {
    statusBadge.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Fechado no momento • Abre amanhã às 07h`;
    statusBadge.className = "inline-flex items-center gap-2 text-xs font-medium text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20";
  }
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('todos');
  setupCategoryFilters();
  setupCookieBanner();
  setupModal();
  setupMobileMenu();
  updateStoreStatus();
});

