const heading = document.getElementById('hello');
// const heading2 = document.querySelector('.h2_class');
const heading2 = document.querySelector('#sub_hello');  // всегда возвращает один первый элемент

console.log(heading2);

// const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll('h2');
console.log(h2List);
const heading3 = h2List[h2List.length - 1];
console.log(heading3);


setTimeout(() => {
    setStyleTo(heading, 'JavaScript');
}, 2000);

setTimeout(() => {
    setStyleTo(heading2, 'Практикуйся', 'green');
}, 3000);

let link = heading3.children[0];

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click on link', event.target.getAttribute('href'));

    const url = event.target.getAttribute('href');
    window.location = url;
});

setTimeout(() => {
    setStyleTo(link, 'И все получится', 'yellow', '40px');
}, 4000);

function setStyleTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.background = 'black';
    node.style.padding = '20px 10px';
    node.style.display = 'block';
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000';
        heading.style.background = '#fff';
    } else {
        heading.style.color = 'red';
        heading.style.background = '#000';
    }
};

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'green') {
        heading2.style.color = '#000';
        heading2.style.background = '#fff';
    } else {
        heading2.style.color = 'green';
        heading2.style.background = '#000';
    }
});



