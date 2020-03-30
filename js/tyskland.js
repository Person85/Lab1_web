function createNode2(element) {
    return document.createElement(element);
}

function append2(parent, el) {
    return parent.appendChild(el);
}

const ul2 = document.getElementById('tyskland');
const url2 = 'data/tyskland.json';
fetch(url2)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.matcher3, ul2);
        console.log("Visa första i json-objektet: " + data.matcher3[0].match3);
        let test3 = data.matcher3;
        return test3.map(function(sebbe3) {
            let liTysk = createNode('li'),
                li2Tysk = createNode('li'),
                li3Tysk = createNode('li');
            liTysk.innerHTML = sebbe3.match3;
            li2Tysk.innerHTML = sebbe3.matchDate3;
            li3Tysk.innerHTML = sebbe3.matchPrice3;
            append(ul2,liTysk);
            append(ul2,li2Tysk);
            append(ul2,li3Tysk);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

