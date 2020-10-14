function domainBuilder() {
    let pronoun = ["the","our","your","their","my"];
    let adj = ["great","big","aggresive","repulsive"];
    let noun = ["racoon","pumpkin","wave","member"];
    let extensions = [".com",".in",".arr",".er",".ve"];
    let allTheResults = [];
    let result = "";

    for (let indexPronoun = 0; indexPronoun < pronoun.length; indexPronoun++) {
        for(let indexAdj = 0; indexAdj < adj.length; indexAdj++){
            for(let indexNoun = 0; indexNoun < noun.length; indexNoun++){
                for(let indexExtensions = 0; indexExtensions < extensions.length; indexExtensions++){
                    allTheResults.push(result.concat(pronoun[indexPronoun],adj[indexAdj],noun[indexNoun],extensions[indexExtensions]));
                }
            }
        }
    }
    return allTheResults;
}

function documentInsertion(array) {
    for(let indexArray = 0; indexArray < array.length; indexArray++){
        let containerList = document.querySelector("#domainList");
        let listElement = document.createElement("li");
        let textList = document.createTextNode(array[indexArray]);
        listElement.appendChild(textList);
        containerList.appendChild(listElement);
    }
}

documentInsertion(domainBuilder());