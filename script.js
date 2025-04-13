

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Store sidebar state in localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    });
    
    // Check for saved sidebar state
    const savedState = localStorage.getItem('sidebarCollapsed');
    if (savedState === 'true') {
        sidebar.classList.add('collapsed');
    }
    
    // Submenu toggle functionality
    const menuToggles = document.querySelectorAll('.menu-toggle');
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const menuItem = toggle.parentElement;
            const submenu = menuItem.querySelector('.submenu');
            
            // Close other open submenus in the same level
            menuItem.parentElement.querySelectorAll('.has-submenu').forEach(item => {
                if (item !== menuItem) {
                    item.classList.remove('active');
                    item.querySelector('.submenu')?.classList.remove('active');
                }
            });
            
            // Toggle current submenu
            menuItem.classList.toggle('active');
            submenu?.classList.toggle('active');
        });
    });
    
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${tabId}-tab`)?.classList.add('active');
        });
    });
    
    // Form submission
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Profile updated successfully!');
        });
    }
});