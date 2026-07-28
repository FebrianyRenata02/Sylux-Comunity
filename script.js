document.addEventListener('DOMContentLoaded', () => {
    const app = document.body;

    // DOM Helper Generator
    function create(tag, classes = [], attrs = {}, text = '') {
        const el = document.createElement(tag);
        if (classes.length) el.classList.add(...classes);
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        if (text) el.textContent = text;
        return el;
    }

    // ==========================================
    // 1. NAVBAR SECTION
    // ==========================================
    const navbar = create('header', ['navbar']);
    const navContainer = create('div', ['container', 'nav-container']);

    const logo = create('a', ['logo'], {
        href: '#'
    }, 'SYLUX');
    const navMenu = create('div', ['nav-menu']);
    const navLinksUl = create('ul', ['nav-links']);

    const menuItems = [{
            name: 'Home',
            href: '#home'
        },
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'Features',
            href: '#features'
        },
        {
            name: 'Gallery',
            href: '#gallery'
        },
        {
            name: 'Staff',
            href: '#staff'
        }
    ];

    menuItems.forEach(item => {
        const li = create('li');
        li.appendChild(create('a', [], {
            href: item.href
        }, item.name));
        navLinksUl.appendChild(li);
    });

    const btnDiscordNav = create('a', ['btn-discord-nav'], {
        href: 'https://discord.gg',
        target: '_blank'
    });
    btnDiscordNav.innerHTML = `<i class="fa-brands fa-discord"></i> Join Discord`;

    navMenu.appendChild(navLinksUl);
    navMenu.appendChild(btnDiscordNav);

    const mobileToggle = create('button', ['mobile-toggle'], {
        'aria-label': 'Toggle Menu'
    }, '☰');

    navContainer.appendChild(logo);
    navContainer.appendChild(navMenu);
    navContainer.appendChild(mobileToggle);
    navbar.appendChild(navContainer);

    // ==========================================
    // 2. HERO / BANNER SECTION
    // ==========================================
    const heroSection = create('section', ['hero-banner'], {
        id: 'home'
    });
    const glowBg = create('div', ['banner-glow-bg']);
    const heroContainer = create('div', ['container']);
    const heroContent = create('div', ['hero-content']);

    heroContent.appendChild(create('h1', ['hero-logo-text'], {}, 'SYLUX'));

    const heroSubtitle = create('h2', ['hero-subtitle']);
    heroSubtitle.innerHTML = 'THE <span class="highlight-purple">LUXURY</span> OF PSYCHOLOGY';
    heroContent.appendChild(heroSubtitle);

    heroContent.appendChild(create('p', ['hero-description'], {}, 'Elegance, Exclusivity, Credibility'));

    heroContainer.appendChild(heroContent);
    heroSection.appendChild(glowBg);
    heroSection.appendChild(heroContainer);

    // ==========================================
    // 3. ABOUT SECTION
    // ==========================================
    const aboutSection = create('section', ['about-section'], {
        id: 'about'
    });
    const aboutContainer = create('div', ['container']);
    const aboutGrid = create('div', ['about-grid']);

    const aboutText = create('div', ['about-text']);
    aboutText.appendChild(create('span', ['about-tag'], {}, 'ABOUT SYLUX'));

    const aboutTitle = create('h2');
    aboutTitle.innerHTML = 'Discord Server <br><span class="highlight-blue">Entertainment</span> Community';
    aboutText.appendChild(aboutTitle);

    aboutText.appendChild(create('p', [], {},
        'SYLUX is an entertainment & gaming Discord server where fun, community, and creativity come together. Chat, play games, join events, watch movies, and connect with awesome people in a friendly environment.'
    ));

    const featureList = create('div', ['about-features-list']);
    const featuresList = [{
            icon: 'fa-users',
            text: 'Friendly Community'
        },
        {
            icon: 'fa-gamepad',
            text: 'Gaming Together'
        },
        {
            icon: 'fa-user-check',
            text: 'Active Members'
        },
        {
            icon: 'fa-film',
            text: 'Movie Night'
        },
        {
            icon: 'fa-star',
            text: 'Exciting Events'
        },
        {
            icon: 'fa-gift',
            text: 'Giveaway & More'
        }
    ];

    featuresList.forEach(f => {
        const item = create('div', ['feature-item']);
        item.innerHTML = `<i class="fa-solid ${f.icon}"></i> <span>${f.text}</span>`;
        featureList.appendChild(item);
    });

    aboutText.appendChild(featureList);

    const btnJoin = create('a', ['btn-purple'], {
        href: '#'
    });
    btnJoin.innerHTML = `<i class="fa-brands fa-discord"></i> Join Now <i class="fa-solid fa-arrow-right"></i>`;
    aboutText.appendChild(btnJoin);

    const aboutImgWrapper = create('div', ['about-image']);
    aboutImgWrapper.appendChild(create('img', [], {
        src: 'https://raw.githubusercontent.com/FebrianyRenata02/Sylux-Comunity/refs/heads/main/About-Sylux.png?token=GHSAT0AAAAAAECGVEM5P53TUCHFD5E624I62TIRXKQ',
        alt: 'SYLUX Cyber Illustration'
    }));

    aboutGrid.appendChild(aboutText);
    aboutGrid.appendChild(aboutImgWrapper);
    aboutContainer.appendChild(aboutGrid);
    aboutSection.appendChild(aboutContainer);

    // ==========================================
    // 4. FEATURES & STATS SECTION
    // ==========================================
    const featuresSection = create('section', ['features-section'], {
        id: 'features'
    });
    const featuresContainer = create('div', ['container']);

    const featHeader = create('div', ['section-header']);
    featHeader.appendChild(create('span', ['section-tag'], {}, 'OUR FEATURES'));
    featuresContainer.appendChild(featHeader);

    const featuresGrid = create('div', ['features-grid']);
    const cardData = [{
            icon: 'fa-gamepad',
            title: 'Gaming',
            desc: 'Daily gaming sessions together'
        },
        {
            icon: 'fa-film',
            title: 'Movie Night',
            desc: 'Watch movies and anime together'
        },
        {
            icon: 'fa-calendar-star',
            title: 'Events',
            desc: 'Weekly events with cool prizes'
        },
        {
            icon: 'fa-users',
            title: 'Community',
            desc: 'Friendly chat and active community'
        },
        {
            icon: 'fa-music',
            title: 'Music',
            desc: '24/7 music bot in voice'
        },
        {
            icon: 'fa-gift',
            title: 'Giveaway',
            desc: 'Nitro & other amazing giveaways'
        }
    ];

    cardData.forEach(c => {
        const card = create('div', ['feature-card']);
        card.innerHTML = `<i class="fa-solid ${c.icon}"></i><h3>${c.title}</h3><p>${c.desc}</p>`;
        featuresGrid.appendChild(card);
    });

    featuresContainer.appendChild(featuresGrid);

    // Stats Bar
    const statsBar = create('div', ['stats-bar']);
    const stats = [{
            icon: 'fa-users',
            num: '15,000+',
            label: 'Members'
        },
        {
            icon: 'fa-circle-dot',
            num: '4,200+',
            label: 'Online'
        },
        {
            icon: 'fa-bolt',
            num: '230+',
            label: 'Events'
        },
        {
            icon: 'fa-gem',
            num: 'Level 3',
            label: 'Boost Level'
        }
    ];

    stats.forEach(s => {
        const item = create('div', ['stat-item']);
        item.innerHTML = `<i class="fa-solid ${s.icon}"></i><div><span class="num">${s.num}</span><span class="label">${s.label}</span></div>`;
        statsBar.appendChild(item);
    });

    featuresContainer.appendChild(statsBar);
    featuresSection.appendChild(featuresContainer);

    // ==========================================
    // 5. GALLERY SECTION
    // ==========================================
    const gallerySection = create('section', ['gallery-section'], {
        id: 'gallery'
    });
    const galleryContainer = create('div', ['container']);

    const galHeader = create('div', ['section-header']);
    galHeader.appendChild(create('span', ['section-tag'], {}, 'GALLERY'));
    galleryContainer.appendChild(galHeader);

    const galleryGrid = create('div', ['gallery-grid']);
    for (let i = 1; i <= 6; i++) {
        const item = create('div', ['gallery-item']);
        item.appendChild(create('img', [], {
            src: `https://picsum.photos/400/300?random=${i}`,
            alt: 'Gallery Snapshot'
        }));
        galleryGrid.appendChild(item);
    }

    galleryContainer.appendChild(galleryGrid);

    const btnWrapper = create('div', ['btn-center-wrapper']);
    btnWrapper.appendChild(create('a', ['btn-outline'], {
        href: '#'
    }, 'View More Photos'));
    galleryContainer.appendChild(btnWrapper);
    gallerySection.appendChild(galleryContainer);

    // ==========================================
    // 6. OUR STAFF SECTION
    // ==========================================
    const staffSection = create('section', ['staff-section'], {
        id: 'staff'
    });
    const staffContainer = create('div', ['container']);

    const staffHeader = create('div', ['section-header']);
    staffHeader.appendChild(create('span', ['section-tag'], {}, 'OUR STAFF'));
    staffContainer.appendChild(staffHeader);

    const staffGrid = create('div', ['staff-grid']);
    const staffData = [{
            name: 'Sylux',
            role: 'Owner',
            img: 'https://i.pravatar.cc/100?img=33'
        },
        {
            name: 'Luxx',
            role: 'Administrator',
            img: 'https://i.pravatar.cc/100?img=12'
        },
        {
            name: 'Psycho',
            role: 'Moderator',
            img: 'https://i.pravatar.cc/100?img=47'
        },
        {
            name: 'Luna',
            role: 'Moderator',
            img: 'https://i.pravatar.cc/100?img=9'
        },
        {
            name: 'Aqua',
            role: 'Moderator',
            img: 'https://i.pravatar.cc/100?img=20'
        }
    ];

    staffData.forEach(s => {
        const card = create('div', ['staff-card']);
        card.innerHTML = `
        <img src="${s.img}" class="staff-avatar" alt="${s.name}">
        <div class="staff-info">
          <h4>${s.name}</h4>
          <span>${s.role}</span>
          <span class="staff-status"><i class="fa-solid fa-circle"></i> Online</span>
        </div>
        <i class="fa-brands fa-discord staff-discord-icon"></i>
      `;
        staffGrid.appendChild(card);
    });

    staffContainer.appendChild(staffGrid);
    staffSection.appendChild(staffContainer);

    // ==========================================
    // 7. PRE-FOOTER BANNER
    // ==========================================
    const prefooterSection = create('section', ['prefooter-section']);
    const prefooterContainer = create('div', ['container']);

    const prefooterCard = create('div', ['prefooter-card']);
    prefooterCard.innerHTML = `
      <div class="prefooter-text">
        <h2>READY TO JOIN <span class="highlight-blue">SYLUX</span>?</h2>
        <p>Be part of our amazing community and create unforgettable memories.</p>
      </div>
      <a href="#" class="btn-large-discord"><i class="fa-brands fa-discord"></i> Join Discord Now</a>
    `;

    prefooterContainer.appendChild(prefooterCard);
    prefooterSection.appendChild(prefooterContainer);

    // ==========================================
    // 8. FOOTER SECTION
    // ==========================================
    const footer = create('footer', ['footer']);
    const footerContainer = create('div', ['container']);

    const footerGrid = create('div', ['footer-grid']);
    footerGrid.innerHTML = `
      <div class="footer-brand">
        <h3>SYLUX</h3>
        <p>Entertainment, Gaming, and Community All in one place.</p>
        <div class="footer-socials">
          <a href="#"><i class="fa-brands fa-discord"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>NAVIGATION</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#staff">Staff</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>COMMUNITY</h4>
        <ul>
          <li><a href="#">Rules</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Announcements</a></li>
          <li><a href="#">Giveaways</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>SOCIAL MEDIA</h4>
        <ul>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div class="footer-join-box">
        <h5>Join Our Discord</h5>
        <p>Click the button below to join our amazing community!</p>
        <a href="#" class="btn-small-discord"><i class="fa-brands fa-discord"></i> Join Discord</a>
      </div>
    `;

    const footerBottom = create('div', ['footer-bottom'], {}, '© 2024 SYLUX. All Rights Reserved.');

    footerContainer.appendChild(footerGrid);
    footerContainer.appendChild(footerBottom);
    footer.appendChild(footerContainer);

    // ==========================================
    // RENDER ALL TO BODY
    // ==========================================
    app.appendChild(navbar);
    app.appendChild(heroSection);
    app.appendChild(aboutSection);
    app.appendChild(featuresSection);
    app.appendChild(gallerySection);
    app.appendChild(staffSection);
    app.appendChild(prefooterSection);
    app.appendChild(footer);

    // ==========================================
    // EVENTS & INTERACTIONS
    // ==========================================
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    navLinksUl.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.textContent = '☰';
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(7, 8, 14, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(7, 8, 14, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });
});