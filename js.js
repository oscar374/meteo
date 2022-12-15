var elem = document.querySelector('.mias');

fetch("https://danepubliczne.imgw.pl/api/data/synop/")
    .then(e=>e.json())
    .then(e=>{
        e.forEach(stacja => {
            var clone = elem.cloneNode(true);
            elem.innerHTML = `<b>${stacja.stacja}</b> <br> temperatura:  ${parseInt(stacja.temperatura) + 1} <br> cisnienie: ${stacja.cisnienie} <br> data pomiaru: ${stacja.data_pomiaru} `
            let temp = parseInt(stacja.temperatura);
            if(temp < -19){
                elem.style.background = "url(https://thumbs.gfycat.com/AppropriateSourAngora-size_restricted.gif)";
                elem.style.color = "gray";
            }
            else if(temp < -9){
                elem.style.background = "url(https://i.gifer.com/3Pm1.gif)";
                elem.style.color = "white";
            }
            else if(temp < 0){
                elem.style.background = "url(https://i.pinimg.com/originals/95/e8/2d/95e82d311a9c58d3f5e758c1d472f994.gif)";
                elem.style.color = "white";
            }else if(temp < 10){
                elem.style.background = "url(https://i.gifer.com/fzmZ.gif)"; 
            }else if(temp < 20){
                elem.style.background = "url(https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif)"; 
                elem.style.color = "white";
            }else if(temp < 30){
                elem.style.background = "url(https://media.istockphoto.com/id/1151250848/pl/zdj%C4%99cie/b%C5%82%C4%99kitne-niebo-ze-s%C5%82o%C5%84cem-i-chmurami.jpg?s=612x612&w=0&k=20&c=e4a-MPVReYc8r7Oc_pnqnXXpUf--xJdfZPPXRU1beHM=)"; 
                elem.style.color = "white";
            }

            elem.after(clone);
        });
    })