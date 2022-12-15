var elem = document.querySelector('.mias');

fetch("https://danepubliczne.imgw.pl/api/data/synop/")
    .then(e=>e.json())
    .then(e=>{
        e.forEach(stacja => {
            var clone = elem.cloneNode(true);
            elem.innerHTML = `<b>${stacja.stacja}</b> <br>|| temperatura:  ${stacja.temperatura} || cisnienie: ${stacja.cisnienie} || data pomiaru: ${stacja.data_pomiaru} ||`
            elem.after(clone);
        });
    })