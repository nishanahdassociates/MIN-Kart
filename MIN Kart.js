
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('animation').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 5000); // Total delay (animation duration + delay)
});
