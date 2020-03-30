function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('main_ul');
const url = 'data/spanien.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.matcher2, ul);
        console.log("Visa första i json-objektet: " + data.matcher2[0].match2);
        let test2 = data.matcher2;
        return test2.map(function(sebbe2) {
            let li = createNode('li'),
                li2 = createNode('li'),
                li3 = createNode('li');
            li.innerHTML = sebbe2.match2;
            li2.innerHTML = sebbe2.matchDate2;
            li3.innerHTML = sebbe2.matchPrice2;
            append(ul,li);
            append(ul,li2);
            append(ul,li3);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

