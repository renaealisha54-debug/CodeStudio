// src/ui.js
export const UI = {
    showModal(title, message) {
        const modal = document.getElementById('modal-overlay');
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-body').innerHTML = message;
        modal.style.display = 'flex';
    },

    updateStatus(text, color) {
        const indicator = document.getElementById('status-indicator');
        const statusText = document.getElementById('status-text');
        indicator.style.background = color; // e.g., 'var(--success)'
        statusText.innerText = text;
    }
};
