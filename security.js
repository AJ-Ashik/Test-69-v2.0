document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // Prevent the default context menu from appearing
            alert("Right-click is disabled on this page."); // Optional alert message
        });
