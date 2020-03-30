function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const main = document.getElementById('main_spain');
//const ul = document.getElementById('main_ul');
const url = 'data/spanien.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.matcher, main);
        console.log("Visa första i json-objektet: " + data.matcher[0].match);
        let test = data.matcher;
        return test.map(function(sebbe) {
            let article = createNode('article'),
                h1 = createNode('H1'),
                p = createNode('P'),
                img = createNode('img');
            h1.innerHTML = sebbe.h1;
            p.innerHTML = sebbe.p;
            img.src = sebbe.img;
            append(article, h1);
            append(article, p);
            append(article,img);
            append(main, article);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

