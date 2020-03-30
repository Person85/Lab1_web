function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const main = document.getElementById('test');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.matcher, main);
        console.log("Visa första i json-objektet: " + data.matcher[0].match);
        let test = data.matcher;
        return test.map(function(sebbe) {
            let article = createNode('article'),
                p = createNode('p'),
                img = createNode('img');
            img.src = sebbe.img;
            article.innerHTML = sebbe.match + " " + sebbe.matchDate + " " + sebbe.matchPrice;
            p.innerHTML = sebbe.p;
            append(article,img);
            append(article, p);
            append(main, article);
        })
    })
    .catch(function(error) {
        console.log(error);
    });