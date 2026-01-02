'use strict';

(function (app) {
    const TOPIC_LIST_SELECTOR = '#html-topics, #css-topics, #js-topics, #deploy-topics';

    // ---------- Topic accordion ----------
    function handleListClick(e) {
        const button = e.target.closest('.topic-title');
        if (!button) return;

        const item = button.closest('.item');
        const list = button.closest(TOPIC_LIST_SELECTOR);
        if (!item || !list) return;

        list.querySelectorAll('.item.open').forEach(li => {
            if (li !== item) li.classList.remove('open');
        });

        item.classList.toggle('open');
    };

    document.querySelectorAll(TOPIC_LIST_SELECTOR).forEach(ul => {
        ul.addEventListener('click', handleListClick);
    });


    // ---------- Form handling ----------
    const form = document.getElementById('hire-me-form');
    const submittedMsg = document.getElementById('form-submitted');
    const resetBtn = document.getElementById('reset-button');

    function showSubmittedMessage(el, message) {
        el.hidden = false;
        el.textContent = message;
    }

    function clearSubmittedMessage(el) {
        el.hidden = true;
        el.textContent = '';
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (!form || !submittedMsg || !resetBtn) return;

        showSubmittedMessage(submittedMsg, 'Form Submitted');

        setTimeout(() => {
            resetBtn.click();
            clearSubmittedMessage(submittedMsg);
        }, 4000);
    }

    if (form) {
        form.addEventListener('submit', onFormSubmit);
    }
    
})(window.app = window.app || {});