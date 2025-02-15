const button=document.querySelector(".btn");
button.addEventListener('click',function(){
    const level=document.querySelector(".form-select").value;
    console.log(level);
    switch(level) {
        case "facile":
            jeuFacil();
            break;
        case "intermediare":
            jeuIntermediaire();
            break;
        case "difficil":
            jeuDifficil();
            break;
    }


});

function jeuFacil(){
    const LeNombreCache=Math.floor(Math.random() * 50) ;
    console.log(LeNombreCache);
    const nombreDEssai=10;
    for(i=nombreDEssai;i>=0;i--){
        let reponse =prompt(`Vous avez ${i} essais pour deviner le nombre entre 0 et 50 :`);
        reponse=parseInt(reponse);
        //console.log(reponse);
        if(isNaN(reponse))alert("donner un entier valide");
        else if (reponse ===LeNombreCache){alert("gagné"); break;}
        else if (reponse<LeNombreCache){alert("trop petit");
        }
        else alert("trop grand");

    }
    let rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    if (rejouer==="oui"){
        jeuFacil();
    }
    else if (rejouer==="non"){
        return;
    }
    else{
        alert("donner une reponse valide");
        rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    }
}

function jeuIntermediaire(){
    const LeNombreCache=Math.floor(Math.random() * 100) ;
    console.log(LeNombreCache);
    const nombreDEssai=6;
    for(i=nombreDEssai;i>=0;i--){
        let reponse =prompt(`Vous avez ${i} essais pour deviner le nombre entre 0 et 100 :`);
        reponse=parseInt(reponse);
        //console.log(reponse);
        if(isNaN(reponse))alert("donner un entier valide");
        else if (reponse ===LeNombreCache){alert("gagné"); break;}
        else if (reponse<LeNombreCache){alert("trop petit");
        }
        else alert("trop grand");

    }
    let rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    if (rejouer==="oui"){
        jeuIntermediaire();
    }
    else if (rejouer==="non"){
        return;
    }
    else{
        alert("donner une reponse valide");
        rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    }
}

function jeuDifficil(){
    const LeNombreCache=Math.floor(Math.random() * 250) ;
    console.log(LeNombreCache);
    const nombreDEssai=4;
    for(i=nombreDEssai;i>=0;i--){
        let reponse =prompt(`Vous avez ${i} essais pour deviner le nombre entre 0 et 250 :`);
        reponse=parseInt(reponse);
        //console.log(reponse);
        if(isNaN(reponse))alert("donner un entier valide");
        else if (reponse ===LeNombreCache){alert("gagné"); break;}
        else if (reponse<LeNombreCache){alert("trop petit");
        }
        else alert("trop grand");

    }
    let rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    if (rejouer==="oui"){
        jeuDifficil();
    }
    else if (rejouer==="non"){
        return;
    }
    else{
        alert("donner une reponse valide");
        rejouer=prompt("reprondre le jeu? ecrire oui ou non");
    }
}