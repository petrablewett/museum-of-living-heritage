// ========================================
// Museum of Living Heritage - JavaScript
// Historical sites and filtering functionality
// ========================================

// Heritage Sites Database
const heritageSites = [
    // Museums
    {
        id: 1,
        title: "Livingstone Museum",
        category: "museum",
        location: "southern",
        description: "Zambia's oldest and largest museum, housing extensive collections on archaeology, ethnography, and the history of David Livingstone's expeditions.",
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?w=600&q=80",
        tag: "Museum"
    },
    {
        id: 2,
        title: "Lusaka National Museum",
        category: "museum",
        location: "lusaka",
        description: "The national museum featuring contemporary art, cultural heritage exhibits, and displays on Zambian history from prehistoric times to independence.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Museum"
    },
    {
        id: 3,
        title: "Moto Moto Museum",
        category: "museum",
        location: "northern",
        description: "Dedicated to the Bemba people and other tribes of Northern Zambia, featuring traditional artifacts, witchcraft items, and cultural displays.",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=600&q=80",
        tag: "Museum"
    },
    {
        id: 4,
        title: "Copperbelt Museum",
        category: "museum",
        location: "copperbelt",
        description: "Chronicles the history of copper mining in Zambia, displaying mining equipment, geological specimens, and the social history of the Copperbelt.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        tag: "Museum"
    },
    {
        id: 5,
        title: "Choma Museum",
        category: "museum",
        location: "southern",
        description: "A regional museum showcasing the rich cultural heritage of the Tonga people, including traditional crafts, music, and farming implements.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Museum"
    },

    // Waterfalls
    {
        id: 6,
        title: "Victoria Falls (Mosi-oa-Tunya)",
        category: "waterfall",
        location: "southern",
        description: "One of the Seven Natural Wonders of the World, known locally as 'The Smoke That Thunders'. A UNESCO World Heritage Site spanning the Zambezi River.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
        tag: "Waterfall"
    },
    {
        id: 7,
        title: "Kalambo Falls",
        category: "waterfall",
        location: "northern",
        description: "The second-highest uninterrupted waterfall in Africa at 235 meters, with archaeological sites containing evidence of early human habitation.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        tag: "Waterfall"
    },
    {
        id: 8,
        title: "Lumangwe Falls",
        category: "waterfall",
        location: "northern",
        description: "A spectacular 30-meter waterfall on the Kalungwishi River, surrounded by pristine miombo woodland and rich birdlife.",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80",
        tag: "Waterfall"
    },
    {
        id: 9,
        title: "Ngonye Falls",
        category: "waterfall",
        location: "western",
        description: "A horseshoe-shaped waterfall on the Zambezi River, sacred to the Lozi people and an important site for traditional ceremonies.",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
        tag: "Waterfall"
    },
    {
        id: 10,
        title: "Chishimba Falls",
        category: "waterfall",
        location: "northern",
        description: "A series of three waterfalls on the Luombe River, considered sacred by local communities and featuring a natural power station.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
        tag: "Waterfall"
    },

    // Historic Buildings
    {
        id: 11,
        title: "David Livingstone Memorial",
        category: "historic-building",
        location: "northern",
        description: "Located in Chitambo where David Livingstone died in 1873. A memorial marks the spot where his heart was buried under a mvula tree.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Historic Building"
    },
    {
        id: 12,
        title: "Old Government House",
        category: "historic-building",
        location: "southern",
        description: "The former colonial administrative building in Livingstone, now part of the town's heritage trail showcasing British colonial architecture.",
        image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=600&q=80",
        tag: "Historic Building"
    },
    {
        id: 13,
        title: "Victoria Falls Bridge",
        category: "historic-building",
        location: "southern",
        description: "An iconic steel arch bridge built in 1905, spanning the Zambezi gorge 128 meters above the river. A testament to colonial-era engineering.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
        tag: "Historic Building"
    },
    {
        id: 14,
        title: "Shiwa Ng'andu Manor",
        category: "historic-building",
        location: "muchinga",
        description: "A grand English-style manor house built in the 1920s by Stewart Gore-Browne, featuring a chapel, hot springs, and extensive grounds.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
        tag: "Historic Building"
    },
    {
        id: 15,
        title: "Limulunga Royal Palace",
        category: "historic-building",
        location: "western",
        description: "The dry-season palace of the Lozi King (Litunga), destination of the famous Kuomboka ceremony when the floodplains fill with water.",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=600&q=80",
        tag: "Historic Building"
    },

    // Monuments
    {
        id: 16,
        title: "Freedom Statue",
        category: "monument",
        location: "lusaka",
        description: "A bronze statue of a man breaking chains, symbolizing Zambia's independence from colonial rule. Located in the heart of Lusaka.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Monument"
    },
    {
        id: 17,
        title: "Kenneth Kaunda Statue",
        category: "monument",
        location: "lusaka",
        description: "A monument honoring Zambia's founding father and first president, located at the Kenneth Kaunda International Airport.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Monument"
    },
    {
        id: 18,
        title: "Independence Memorial",
        category: "monument",
        location: "lusaka",
        description: "A commemorative site marking Zambia's independence on October 24, 1964, featuring historical displays and the independence flame.",
        image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=600&q=80",
        tag: "Monument"
    },
    {
        id: 19,
        title: "Dag Hammarskjold Memorial",
        category: "monument",
        location: "copperbelt",
        description: "A memorial at the crash site where UN Secretary-General Dag Hammarskjold died in 1961. A solemn place of international significance.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        tag: "Monument"
    },

    // Rock Art
    {
        id: 20,
        title: "Nsalu Cave Rock Paintings",
        category: "rock-art",
        location: "central",
        description: "Ancient rock art site featuring geometric patterns and symbolic figures dating back thousands of years, offering insights into early spiritual beliefs.",
        image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80",
        tag: "Rock Art"
    },
    {
        id: 21,
        title: "Mwela Rock Paintings",
        category: "rock-art",
        location: "northern",
        description: "One of the most significant rock art sites in Zambia, featuring over 1,000 paintings including human figures, animals, and abstract designs.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        tag: "Rock Art"
    },
    {
        id: 22,
        title: "Nachikufu Cave",
        category: "rock-art",
        location: "muchinga",
        description: "A national monument containing rock paintings and archaeological deposits spanning 15,000 years of human occupation.",
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?w=600&q=80",
        tag: "Rock Art"
    },
    {
        id: 23,
        title: "Mumbwa Caves Rock Art",
        category: "rock-art",
        location: "central",
        description: "Rock shelters with ancient paintings and archaeological evidence of Stone Age occupation, important for understanding human prehistory.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
        tag: "Rock Art"
    },

    // Archaeological Sites
    {
        id: 24,
        title: "Kabwe (Broken Hill) Site",
        category: "archaeological-site",
        location: "central",
        description: "Discovery site of Homo rhodesiensis skull in 1921, one of the most important paleoanthropological finds in Africa, dating back 300,000 years.",
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?w=600&q=80",
        tag: "Archaeological Site"
    },
    {
        id: 25,
        title: "Ingombe Ilede",
        category: "archaeological-site",
        location: "southern",
        description: "A medieval trading settlement near the Zambezi-Kafue confluence, yielding gold jewelry, copper crosses, and evidence of long-distance trade.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        tag: "Archaeological Site"
    },
    {
        id: 26,
        title: "Kalambo Falls Archaeological Site",
        category: "archaeological-site",
        location: "northern",
        description: "Evidence of continuous human occupation for over 250,000 years, with preserved wooden tools and the earliest known use of fire in the region.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        tag: "Archaeological Site"
    },
    {
        id: 27,
        title: "Gwisho Hot Springs",
        category: "archaeological-site",
        location: "southern",
        description: "A Stone Age site with exceptionally preserved organic materials including wooden implements, providing rare insights into prehistoric life.",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
        tag: "Archaeological Site"
    },
    {
        id: 28,
        title: "Twin Rivers Kopje",
        category: "archaeological-site",
        location: "lusaka",
        description: "Archaeological site near Lusaka containing pigments and grinding stones suggesting early symbolic behavior dating back 400,000 years.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Archaeological Site"
    }
];

// Province display names
const provinceNames = {
    all: "All Provinces",
    lusaka: "Lusaka Province",
    copperbelt: "Copperbelt Province",
    southern: "Southern Province",
    northern: "Northern Province",
    eastern: "Eastern Province",
    western: "Western Province",
    northwestern: "North-Western Province",
    luapula: "Luapula Province",
    central: "Central Province",
    muchinga: "Muchinga Province"
};

// Category display names
const categoryNames = {
    all: "All Categories",
    museum: "Museum",
    waterfall: "Waterfall",
    "historic-building": "Historic Building",
    monument: "Monument",
    "rock-art": "Rock Art",
    "archaeological-site": "Archaeological Site"
};

// DOM Elements
const categorySelect = document.getElementById('category-select');
const locationSelect = document.getElementById('location-select');
const filterBtn = document.getElementById('filter-btn');
const resultsContainer = document.getElementById('results-container');

// Create a heritage site card HTML
function createSiteCard(site) {
    return `
        <article class="history-card" data-category="${site.category}" data-location="${site.location}">
            <div class="history-card-image">
                <img src="${site.image}" alt="${site.title}" loading="lazy" />
                <span class="history-card-tag">${site.tag}</span>
            </div>
            <div class="history-card-content">
                <div class="history-card-meta">
                    <span>${categoryNames[site.category]}</span>
                    <span>•</span>
                    <span>${provinceNames[site.location] || site.location}</span>
                </div>
                <h3>${site.title}</h3>
                <p>${site.description}</p>
                <a href="#" class="link-arrow">Learn more</a>
            </div>
        </article>
    `;
}

// Filter and display results
function filterAndDisplay() {
    const selectedCategory = categorySelect.value;
    const selectedLocation = locationSelect.value;

    // Filter sites
    let filteredSites = heritageSites.filter(site => {
        const categoryMatch = selectedCategory === 'all' || site.category === selectedCategory;
        const locationMatch = selectedLocation === 'all' || site.location === selectedLocation;
        return categoryMatch && locationMatch;
    });

    // Sort alphabetically by title
    filteredSites.sort((a, b) => a.title.localeCompare(b.title));

    // Display results
    if (filteredSites.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your filters to explore more heritage sites.</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = filteredSites.map(createSiteCard).join('');
    }

    // Add animation to cards
    const cards = resultsContainer.querySelectorAll('.history-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Event Listeners
filterBtn.addEventListener('click', filterAndDisplay);

// Also filter when dropdowns change (for better UX)
categorySelect.addEventListener('change', filterAndDisplay);
locationSelect.addEventListener('change', filterAndDisplay);

// Initialize with all results on page load
document.addEventListener('DOMContentLoaded', () => {
    filterAndDisplay();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Mobile menu toggle (basic implementation)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Search functionality placeholder
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = prompt('Search heritage sites:');
        if (query && query.trim()) {
            // Filter sites by search query
            const searchResults = heritageSites.filter(site =>
                site.title.toLowerCase().includes(query.toLowerCase()) ||
                site.description.toLowerCase().includes(query.toLowerCase())
            );

            if (searchResults.length > 0) {
                // Reset dropdowns and show search results
                categorySelect.value = 'all';
                locationSelect.value = 'all';
                resultsContainer.innerHTML = searchResults.map(createSiteCard).join('');

                // Scroll to results
                document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('No results found for "' + query + '"');
            }
        }
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing! You will receive updates at: ' + email);
            newsletterForm.reset();
        }
    });
}

console.log('Museum of Living Heritage website loaded successfully!');
console.log(`Loaded ${heritageSites.length} heritage sites.`);
