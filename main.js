const allTools = [
    {
        id: 'pdf-toolkit',
        title: 'PDF Toolkit',
        description: 'Viewer, merge, split, extract text, convert and compress PDFs — all client-side',
        icon: 'file-text',
        href: 'pdf-toolkit/pdf-toolkit.html',
        category: 'Files',
        searchKeywords: 'pdf toolkit viewer merge split extract images compress'
    },
    
    {
        id: 'zip-extractor',
        title: 'ZIP Extractor',
        description: 'Extract and view contents of ZIP files',
        icon: 'archive',
        href: 'zip-extractor/zip-extractor.html',
        category: 'Files',
        searchKeywords: 'zip extractor unzip'
    },
    {
        id: 'merge-text',
        title: 'Merge Text Files',
        description: 'Combine multiple text files into one',
        icon: 'merge',
        href: 'merge-text/merge-text.html',
        category: 'Files',
        searchKeywords: 'merge text files combine'
    },
    {
        id: 'image-compressor',
        title: 'Image Compressor',
        description: 'Compress images to reduce file size',
        icon: 'compress',
        href: 'image-compressor/image-compressor.html',
        category: 'Images',
        searchKeywords: 'image compressor compress reduce size'
    },
    {
        id: 'image-converter',
        title: 'Image Converter',
        description: 'Convert between JPG, PNG, WebP formats',
        icon: 'repeat',
        href: 'image-converter/image-converter.html',
        category: 'Images',
        searchKeywords: 'image converter format jpg png webp'
    },
    {
        id: 'image-editor',
        title: 'Image Editor',
        description: 'Advanced image editor with background remover, filters, and more.',
        icon: 'edit-3',
        href: 'image-editor/image-editor.html',
        category: 'Images',
        searchKeywords: 'image editor crop rotate filter background remover changer text draw shapes'
    },
    {
        id: 'word-counter',
        title: 'Word Counter',
        description: 'Count words, characters, and paragraphs',
        icon: 'hash',
        href: 'word-counter/word-counter.html',
        category: 'Text',
        searchKeywords: 'word character counter count'
    },
    {
        id: 'case-converter',
        title: 'Case Converter',
        description: 'Convert text to different cases',
        icon: 'case-sensitive',
        href: 'case-converter/case-converter.html',
        category: 'Text',
        searchKeywords: 'case converter uppercase lowercase title'
    },
    {
        id: 'text-to-pdf',
        title: 'Text to PDF',
        description: 'Convert text content to PDF file',
        icon: 'file-type',
        href: 'text-to-pdf/text-to-pdf.html',
        category: 'Text',
        searchKeywords: 'text to pdf convert'
    },
    {
        id: 'audio-trimmer',
        title: 'Audio Trimmer',
        description: 'Trim audio files to desired length',
        icon: 'scissors',
        href: 'audio-trimmer/audio-trimmer.html',
        category: 'Media',
        searchKeywords: 'audio trimmer cut'
    },
    {
        id: 'media-recorder',
        title: 'Media Recorder',
        description: 'Record audio and video using your device',
        icon: 'mic',
        href: 'media-recorder/media-recorder.html',
        category: 'Media',
        searchKeywords: 'record audio video'
    },
    {
        id: 'audio-extractor',
        title: 'Audio Extractor',
        description: 'Extract audio track from video files',
        icon: 'volume-2',
        href: 'audio-extractor/audio-extractor.html',
        category: 'Media',
        searchKeywords: 'extract audio from video'
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        description: 'Generate strong, secure passwords',
        icon: 'key',
        href: 'password-generator/password-generator.html',
        category: 'Security',
        searchKeywords: 'password generator create'
    },
    {
        id: 'hash-generator',
        title: 'Hash Generator',
        description: 'Generate MD5 and SHA256 hashes',
        icon: 'hash',
        href: 'hash-generator/hash-generator.html',
        category: 'Security',
        searchKeywords: 'hash generator md5 sha256'
    },
    {
        id: 'text-encryption',
        title: 'Text Encryption',
        description: 'Encrypt and decrypt text using AES',
        icon: 'lock',
        href: 'text-encryption/text-encryption.html',
        category: 'Security',
        searchKeywords: 'encrypt decrypt text aes'
    },
    {
        id: 'qr-generator',
        title: 'QR Code Generator',
        description: 'Generate QR codes from text or URLs',
        icon: 'qr-code',
        href: 'qr-generator/qr-generator.html',
        category: 'Utilities',
        searchKeywords: 'qr code generator create'
    },
    {
        id: 'qr-scanner',
        title: 'QR Code Scanner',
        description: 'Scan QR codes using your camera',
        icon: 'scan',
        href: 'qr-scanner/qr-scanner.html',
        category: 'Utilities',
        searchKeywords: 'qr code scanner read'
    },
    {
        id: 'barcode-generator',
        title: 'Barcode Generator',
        description: 'Generate various types of barcodes',
        icon: 'barcode',
        href: 'barcode-generator/barcode-generator.html',
        category: 'Utilities',
        searchKeywords: 'barcode generator create'
    },
    {
        id: 'random-picker',
        title: 'Random Picker',
        description: 'Pick random numbers, names, or items',
        icon: 'shuffle',
        href: 'random-picker/random-picker.html',
        category: 'Utilities',
        searchKeywords: 'random picker number name'
    },
    {
        id: 'timer-stopwatch',
        title: 'Timer & Stopwatch',
        description: 'Stopwatch, timer, and clock tool',
        icon: 'timer',
        href: 'Timer-stopwatch/timer-stopwatch.html',
        category: 'Utilities',
        searchKeywords: 'timer stopwatch clock'
    },
    {
        id: 'unit-converter',
        title: 'Unit Converter',
        description: 'Convert units of measurement',
        icon: 'calculator',
        href: 'unit-converter/unit-converter.html',
        category: 'Utilities',
        searchKeywords: 'unit converter length weight temperature'
    }
];

/**
 * Toolnest - Main JavaScript
 * Handles homepage interactivity, search functionality, and navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Dynamically render tool cards first
    renderToolsGrid();

    // Initialize Lucide icons after dynamic content is added
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize search functionality (now that cards exist)
    initializeSearch();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize category filtering
    initializeCategoryFiltering();
    
    console.log('Toolnest initialized successfully');
}

/**
 * Dynamically renders the tool grid based on data from toolsData.js
 */
function renderToolsGrid() {
    const toolsGridContainer = document.getElementById('toolsGridContainer');
    if (!toolsGridContainer) return;

    // Clear existing content
    toolsGridContainer.innerHTML = '';

    // Group tools by category
    const categories = {};
    allTools.forEach(tool => {
        const categoryKey = tool.category.toLowerCase();
        if (!categories[categoryKey]) {
            categories[categoryKey] = [];
        }
        categories[categoryKey].push(tool);
    });

    const categorySectionData = {
        'files': { title: 'File Tools', icon: 'file' },
        'images': { title: 'Image Tools', icon: 'image' },
        'text': { title: 'Text Tools', icon: 'type' },
        'media': { title: 'Media Tools', icon: 'play' },
        'security': { title: 'Security Tools', icon: 'shield' },
        'utilities': { title: 'Utility Tools', icon: 'wrench' }
    };

    // Render each category section
    for (const categoryName in categorySectionData) {
        const currentSection = categorySectionData[categoryName];
        const toolsInCategory = categories[categoryName] || [];

        if (toolsInCategory.length > 0) {
            const sectionElement = document.createElement('section');
            sectionElement.className = 'tools-section';
            sectionElement.setAttribute('data-category', categoryName);
            sectionElement.id = categoryName;

            sectionElement.innerHTML = `
                <h2 class="section-title">
                    <i data-lucide="${currentSection.icon}" class="section-icon"></i>
                    ${currentSection.title}
                </h2>
                <div class="tools-grid">
                    ${toolsInCategory.map(tool => `
                        <div class="tool-card" data-search="${tool.searchKeywords || ''}">
                            <div class="tool-icon">
                                <i data-lucide="${tool.icon}"></i>
                            </div>
                            <h3 class="tool-title">${tool.title}</h3>
                            <p class="tool-description">${tool.description}</p>
                            <a href="${tool.href}" class="tool-link">Open Tool</a>
                        </div>
                    `).join('')}
                </div>
            `;
            toolsGridContainer.appendChild(sectionElement);
        }
    }
}

/**
 * Search functionality for finding tools
 */
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const toolCards = document.querySelectorAll('.tool-card');
    const sections = document.querySelectorAll('.tools-section');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value.toLowerCase().trim());
        }, 300);
    });
    
    // Handle search button click
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value.toLowerCase().trim());
        });
    }
    
    // Handle Enter key in search input
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(e.target.value.toLowerCase().trim());
        }
    });
    
    function performSearch(query) {
        // Re-query toolCards and sections as they are dynamically generated
        const currentToolCards = document.querySelectorAll('.tool-card');
        const currentSections = document.querySelectorAll('.tools-section');

        if (!query) {
            // Show all tools when search is empty
            currentToolCards.forEach(card => {
                card.style.display = 'block';
            });
            currentSections.forEach(section => {
                section.classList.remove('hidden');
            });
            showNoResultsMessage(false); // Hide no results message
            return;
        }
        
        let hasVisibleCards = false;
        
        // Hide all sections initially
        currentSections.forEach(section => {
            section.classList.add('hidden');
        });
        
        currentToolCards.forEach(card => {
            const searchData = card.getAttribute('data-search') || '';
            const toolTitle = card.querySelector('.tool-title')?.textContent.toLowerCase() || '';
            const toolDescription = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
            
            const searchableText = `${searchData} ${toolTitle} ${toolDescription}`.toLowerCase();
            
            if (searchableText.includes(query)) {
                card.style.display = 'block';
                // Show the parent section
                const parentSection = card.closest('.tools-section');
                if (parentSection) {
                    parentSection.classList.remove('hidden');
                }
                hasVisibleCards = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show no results message if needed
        showNoResultsMessage(!hasVisibleCards, query);
    }
    
    function showNoResultsMessage(show, query) {
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (show && !noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: #374151;">No tools found</h3>
                    <p>No tools match your search for "<strong>${query}</strong>"</p>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem;">Try searching for different keywords or browse by category above.</p>
                </div>
            `;
            document.querySelector('.tools-container').appendChild(noResultsMsg);
        } else if (!show && noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get category and scroll to section
            const category = this.getAttribute('data-category');
            if (category) {
                scrollToCategory(category);
            }
        });
    });
}

/**
 * Smooth scroll to category section
 */
function scrollToCategory(category) {
    const section = document.getElementById(category);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileMenuToggle || !navMenu) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        // Prevent body scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Category filtering functionality
 */
function initializeCategoryFiltering() {
    // This would be used for any advanced filtering features
    // Currently handled by the search function
}

/**
 * Utility function to highlight active navigation based on scroll position
 */
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.tools-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('data-category');
        }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Update navigation on scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveNavOnScroll, 100);
});

/**
 * Utility functions for localStorage
 */
const Storage = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    },
    
    get: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Could not read from localStorage:', e);
            return defaultValue;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Could not remove from localStorage:', e);
        }
    }
};

// Export utility functions for use in tool pages
window.Toolnest = {
    Storage: Storage,
    utils: {
        formatFileSize: function(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        },
        
        downloadFile: function(blob, filename) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        
        showStatus: function(message, type = 'success') {
            // Create or update status message
            let statusElement = document.querySelector('.status-message');
            if (!statusElement) {
                statusElement = document.createElement('div');
                statusElement.className = 'status-message';
                const container = document.querySelector('.tool-content') || document.body;
                container.insertBefore(statusElement, container.firstChild);
            }
            
            statusElement.className = `status-message status-${type}`;
            statusElement.textContent = message;
            
            // Auto-hide success messages
            if (type === 'success') {
                setTimeout(() => {
                    if (statusElement && statusElement.parentNode) {
                        statusElement.remove();
                    }
                }, 3000);
            }
        }
    }
};
