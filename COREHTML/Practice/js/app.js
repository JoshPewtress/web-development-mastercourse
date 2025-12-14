'use strict';

const list = document.getElementById('js-topics');
const items = [
    {
        title: 'Creating HTML',
        description: 'Generating and inserting elements dynamically using <code>innerHTML</code>, <code>createElement()</code>, and <code>DocumentFragment</code> with attention to performance and safety tradeoffs'
    }
];

const fragment = new DocumentFragment();

items.forEach(item => {
    const listItem = document.createElement('li');

    const title = document.createElement('span');
    title.classList.add('topic-title');
    title.innerText = item.title;

    const description = document.createElement('p');
    description.classList.add('topic-description');
    description.innerHTML = item.description;

    listItem.appendChild(title);
    listItem.appendChild(description);
    fragment.appendChild(listItem);
});

list.appendChild(fragment);