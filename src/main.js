import './style.css'
import { initTheme } from './theme.js'

/**
 * Senior Developer Refactor: 
 * - Modular architecture
 * - Cached DOM lookups
 * - High-performance event delegation
 */

const App = {
  // Config
  PERSONA: {
    name: "Lead AI Consultant",
    greeting: "Greetings! I am the Lead AI Consultant for LicenseXpertIndia. How can I assist you with your business registration, licensing, or compliance needs today?",
    disclaimer: "\n\n*Disclaimer: I am an AI assistant. Regulatory requirements and government policies change frequently. This information is for guidance only.*",
    cta: "\n\nReady to get started? [Contact Us Today](#contact)"
  },

  // DOM Cache
  elements: {
    header: document.getElementById('header'),
    chatWidget: document.getElementById('chat-widget'),
    chatMessages: document.getElementById('chat-messages'),
    userInput: document.getElementById('user-input'),
    themeToggle: document.getElementById('checkbox'),
    faqContainer: document.querySelector('.faq-grid'),
    productTabs: document.querySelector('.product-tabs'),
    mobileMenu: document.getElementById('mobile-menu-btn'),
    navLinks: document.getElementById('nav-links')
  },

  init() {
    this.setupTheme();
    this.setupEventListeners();
    this.setupObservers();
    this.addMessage(this.PERSONA.greeting, 'ai');
  },

  setupTheme() {
    initTheme('#checkbox');
  },

  setupEventListeners() {
    // Scroll Header
    window.addEventListener('scroll', () => {
      this.elements.header?.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // Event Delegation: FAQ Accordion (Professional approach)
    this.elements.faqContainer?.addEventListener('click', (e) => {
      const item = e.target.closest('.faq-item');
      if (!item) return;
      
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });

    // Event Delegation: Product Tabs
    this.elements.productTabs?.addEventListener('click', (e) => {
      const tab = e.target.closest('.product-tab');
      if (!tab) return;
      
      const targetId = tab.dataset.target;
      document.querySelectorAll('.product-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.products-grid').forEach(g => g.style.display = 'none');
      
      tab.classList.add('active');
      const grid = document.getElementById(`grid-${targetId}`);
      if (grid) {
        grid.style.display = 'grid';
        grid.classList.add('active-grid');
      }
    });

    // Mobile Menu
    this.elements.mobileMenu?.addEventListener('click', () => {
      this.elements.mobileMenu.classList.toggle('active');
      this.elements.navLinks.classList.toggle('active');
    });
  },

  // Chat Logic
  addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message message-${sender} animate-fade-in-up`;
    const formatted = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--accent);font-weight:600;">$1</a>');
    msgDiv.innerHTML = formatted.replace(/\n/g, '<br>');
    this.elements.chatMessages.appendChild(msgDiv);
    this.elements.chatMessages.scrollTop = this.elements.chatMessages.scrollHeight;
  },

  // State
  state: {
    step: 0,
    userProfile: {
      businessType: null,
      location: null,
      needs: null
    }
  },

  // Chat Engine
  sendMessage() {
    if (!this.elements.userInput) return;
    const text = this.elements.userInput.value.trim();
    if (!text) return;

    this.addMessage(text, 'user');
    this.elements.userInput.value = '';
    
    setTimeout(() => this.processInput(text), 600);
  },

  processInput(input) {
    const lowerInput = input.toLowerCase();
    let response = "";

    // Pro State Machine for Chat
    if (this.state.step === 0) {
      if (lowerInput.includes('license') || lowerInput.includes('fssai')) {
        response = "I see you're interested in Business Licenses. To provide accurate guidance, could you please specify your business type and your State?";
        this.state.step = 1;
      } else if (lowerInput.includes('wizard') || lowerInput.includes('help')) {
        response = "No problem! Let's use our **Eligibility Wizard**. \n\n1. What is the nature of your business (e.g., Food, Retail, Tech)?";
        this.state.step = 10;
      } else {
        response = "I can assist with Licenses, Insurance, and Compliance. Which category does your inquiry fall into?";
      }
    } else if (this.state.step === 10) {
      this.state.userProfile.businessType = input;
      response = "Got it. And what is the scale of your operation (e.g., Small/MSME, Medium, or Large)?";
      this.state.step = 11;
    } else if (this.state.step === 11) {
      response = "Finally, which State is your business located in?";
      this.state.step = 12;
    } else if (this.state.step === 12) {
      response = `Based on your profile in ${input}, you likely need a Shop Act license and MSME registration. Shall I breakdown the costs?`;
      this.state.step = 0;
    } else {
      response = "I process registrations like GST and FSSAI every day. Would you like a document checklist?";
    }

    this.addMessage(response + this.PERSONA.disclaimer + this.PERSONA.cta, 'ai');
  },

  // Testimonials Slider Logic
  initSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (!slides.length) return;

    const total = slides.length;
    let current = 1;
    const update = () => {
      slides.forEach((s, i) => {
        s.classList.remove('active', 'prev', 'next');
        if (i === current) s.classList.add('active');
        else if (i === (current - 1 + total) % total) s.classList.add('prev');
        else if (i === (current + 1) % total) s.classList.add('next');
      });
      const ind = document.getElementById('current-slide');
      if (ind) ind.textContent = current + 1;
    };

    document.getElementById('next-btn')?.addEventListener('click', () => { current = (current + 1) % total; update(); });
    document.getElementById('prev-btn')?.addEventListener('click', () => { current = (current - 1 + total) % total; update(); });
    
    update();
    setInterval(() => { current = (current + 1) % total; update(); }, 5000);
  },

  // Observers (Scrolling & Counters)
  setupObservers() {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in-up').forEach(el => fadeObserver.observe(el));

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 1.0 });

    document.querySelectorAll('.counter').forEach(el => statObserver.observe(el));
  },

  animateCounter(el) {
    const target = +el.dataset.target;
    const speed = 200;
    const inc = target / speed;
    let count = 0;
    const update = () => {
      if (count < target) {
        count += inc;
        el.innerText = Math.ceil(count);
        setTimeout(update, 1);
      } else {
        el.innerText = target + (target === 99 ? '%' : '+');
      }
    };
    update();
  }
};

// Global Exposure
window.toggleChat = () => App.elements.chatWidget?.classList.toggle('active');
window.handleKeyPress = (e) => e.key === 'Enter' && App.sendMessage();
window.sendMessage = () => App.sendMessage();

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  App.initSlider();
});
