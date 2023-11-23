document.getElementById('tab1-button').addEventListener('click', function() {
    resetButtonColors();
    this.style.backgroundColor = 'lightblue';
    showTabContent('tab1-content');
});

document.getElementById('tab2-button').addEventListener('click', function() {
    resetButtonColors();
    this.style.backgroundColor = 'lightcoral';
    showTabContent('tab2-content');
});

document.getElementById('tab3-button').addEventListener('click', function() {
    resetButtonColors();
    this.style.backgroundColor = 'lightgreen';
    showTabContent('tab3-content');
});

function resetButtonColors() {
    document.getElementById('tab1-button').style.backgroundColor = '';
    document.getElementById('tab2-button').style.backgroundColor = '';
    document.getElementById('tab3-button').style.backgroundColor = '';
}

function showTabContent(tabId) {
    hideAllTabContents();
    document.getElementById(tabId).style.display = 'block';
}

function hideAllTabContents() {
    document.getElementById('tab1-content').style.display = 'none';
    document.getElementById('tab2-content').style.display = 'none';
    document.getElementById('tab3-content').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    showTabContent('tab1-content');
});
