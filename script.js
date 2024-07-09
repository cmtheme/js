document.addEventListener('DOMContentLoaded', function() {
    var startStopButton = document.getElementById('startStopButton');
    var startStopImage = document.getElementById('startStopImage');
    var floatingIcon = document.getElementById('floatingIcon');
    var modal = document.getElementById('myModal');

    var isDraggingIcon = false, isDraggingModal = false, offsetX, offsetY, isModalOpen = false;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    floatingIcon.addEventListener('mousedown', function(e) {
        isDraggingIcon = true;
        offsetX = e.clientX - floatingIcon.getBoundingClientRect().left;
        offsetY = e.clientY - floatingIcon.getBoundingClientRect().top;
    });

    floatingIcon.addEventListener('touchstart', function(e) {
        isDraggingIcon = true;
        var touch = e.touches[0];
        offsetX = touch.clientX - floatingIcon.getBoundingClientRect().left;
        offsetY = touch.clientY - floatingIcon.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDraggingIcon) {
            var left = clamp(e.clientX - offsetX, 0, window.innerWidth - floatingIcon.offsetWidth);
            var top = clamp(e.clientY - offsetY, 0, window.innerHeight - floatingIcon.offsetHeight);
            floatingIcon.style.left = left + 'px';
            floatingIcon.style.top = top + 'px';
            modal.style.left = left + 'px';
            modal.style.top = (top + 120) + 'px';
        }
        if (isDraggingModal) {
            var left = clamp(e.clientX - offsetX, 0, window.innerWidth - modal.offsetWidth);
            var top = clamp(e.clientY - offsetY, 0, window.innerHeight - modal.offsetHeight);
            modal.style.left = left + 'px';
            modal.style.top = top + 'px';
        }
    });

    document.addEventListener('touchmove', function(e) {
        if (isDraggingIcon) {
            var touch = e.touches[0];
            var left = clamp(touch.clientX - offsetX, 0, window.innerWidth - floatingIcon.offsetWidth);
            var top = clamp(touch.clientY - offsetY, 0, window.innerHeight - floatingIcon.offsetHeight);
            floatingIcon.style.left = left + 'px';
            floatingIcon.style.top = top + 'px';
            modal.style.left = left + 'px';
            modal.style.top = (top + 120) + 'px';
        }
        if (isDraggingModal) {
            var touch = e.touches[0];
            var left = clamp(touch.clientX - offsetX, 0, window.innerWidth - modal.offsetWidth);
            var top = clamp(touch.clientY - offsetY, 0, window.innerHeight - modal.offsetHeight);
            modal.style.left = left + 'px';
            modal.style.top = top + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDraggingIcon = false;
        isDraggingModal = false;
    });

    document.addEventListener('touchend', function() {
        isDraggingIcon = false;
        isDraggingModal = false;
    });

    modal.addEventListener('mousedown', function(e) {
        isDraggingModal = true;
        offsetX = e.clientX - modal.getBoundingClientRect().left;
        offsetY = e.clientY - modal.getBoundingClientRect().top;
    });

    modal.addEventListener('touchstart', function(e) {
        isDraggingModal = true;
        var touch = e.touches[0];
        offsetX = touch.clientX - modal.getBoundingClientRect().left;
        offsetY = touch.clientY - modal.getBoundingClientRect().top;
    });

    floatingIcon.addEventListener('click', function() {
        if (startStopImage.alt === 'START') {
            modal.style.display = isModalOpen ? 'none' : 'block';
            isModalOpen = !isModalOpen;
        }
    });

    startStopButton.addEventListener('click', function() {
        if (startStopImage.alt === 'START') {
            startStopImage.src = "https://i.ibb.co/GtWtsVB/stop.webp";
            startStopImage.alt = "STOP";
        } else {
            startStopImage.src = "https://i.ibb.co/WDf3MqL/start.webp";
            startStopImage.alt = "START";
        }
    });
});
