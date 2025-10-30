stampa();

document.querySelector(".js-btn-salva").addEventListener('click', () => {
    salva();
});

function salva(){
    let todo = document.getElementById('todo').value;
    document.getElementById('todo').value = "";

    if(todo === "") alert("ERRORE!!! Inserire un todo valido");
    
    let lista = localStorage.getItem("LISTA") || [];

    lista = JSON.parse(lista);
    lista.push(todo);
    localStorage.setItem("LISTA", JSON.stringify(lista));
    stampa();
}

function stampa(){
    let laListaStr = localStorage.getItem("LISTA");
    let laLista = JSON.parse(laListaStr) || [];

    if(laLista.length === 0){
        document.querySelector('.js-lista').innerHTML = '<p>Ancora nessun todo</p>';
        return;
    }
    let SB = '';
    for(let i=0; i<laLista.length; i++){
        SB = SB + `
        <div class="grid">
            <div class="todo">` + String(laLista[i]) + `</div>
            <button class="js-btn-elimina">Cancella todo</button>
        </div>`;
    };        
    document.querySelector('.js-lista').innerHTML = SB;
    
    document.querySelectorAll(".js-btn-elimina").forEach((btn, indice) => {
        btn.addEventListener('click', () => {
            // cancella(laLista, indice);
            laLista.splice(indice, 1)
            localStorage.setItem("LISTA", JSON.stringify(laLista));
            stampa();
        });
    });
}