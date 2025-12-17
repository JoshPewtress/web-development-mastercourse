'use strict';

// locate the ul's, and then foreach event listeners onto them
// get the button that was clicked
// if its not a button do nothing
// if it is a button get the li of the button
// find out which list the button was in
// if the li or the list is null, do nothing
// grab all the li in the list
// if the li wasnt the clicked li remove open class
// give open class to the li that was clicked

(function (app) {
    function handleListClick(e) {
        const button = e.target.closest('.topic-title');
        if (!button)
            return;

        const item = button.closest('.item');
        const list = button.closest('#html-topics, #css-topics, #js-topics, #deploy-topics');
        if (!item || !list)
            return;

        list.querySelectorAll('.item').forEach(li => {
            if (li !== item)
                li.classList.remove('open');
        });

        item.classList.toggle('open');
    };

    document.querySelectorAll('#html-topics, #css-topics, #js-topics, #deploy-topics').forEach(ul => {
        ul.addEventListener('click', handleListClick);
    });
})(window.app = window.app || {});