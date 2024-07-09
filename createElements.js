document.addEventListener('DOMContentLoaded', function() {
    var floatingIcon = document.createElement('img');
    floatingIcon.src = 'icon.png';
    floatingIcon.alt = 'Floating Icon';
    floatingIcon.className = 'floating-icon';
    floatingIcon.id = 'floatingIcon';
    document.body.appendChild(floatingIcon);

    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'myModal';
    modal.innerHTML = '' +
        '<div class="modal-content">' +
            '<h2>AKTIFKAN FITUR!!!</h2>' +
            '<p>NOTE! SETTING BET TERLEBIH DAHULU</p>' +
            '<div class="checklist">' +
                '<input type="checkbox" id="check">' +
                '<label for="check"><h3>AUTO SCATTER HITAM</h3></label>' +
            '</div>' +
            '<button class="button" id="startStopButton">' +
                '<img src="https://i.ibb.co/WDf3MqL/start.webp" alt="START" id="startStopImage">' +
            '</button>' +
        '</div>';
    document.body.appendChild(modal);
});
