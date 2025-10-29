let lista = [];

stampa();

function salva(){
    let todo = document.getElementById('todo').value;
    document.getElementById('todo').value = "";

    if(todo != ""){
        let antonio = localStorage.getItem("LISTA");

        if (antonio == null){
            lista.push(todo);
            localStorage.setItem("LISTA", JSON.stringify(lista));
            stampa();

        }else{
            antonio = JSON.parse(antonio);
            antonio.push(todo);
            localStorage.setItem("LISTA", JSON.stringify(antonio));
            stampa();

        }

    }else{
        alert("ERRORE!!! Inserire un todo valido");

    }
}

function cancella(x){
    let laListaStr = localStorage.getItem("LISTA");
    let laLista = JSON.parse(laListaStr);
    let laListaFiltrata = laLista.filter(e => e != laLista[x]);
    localStorage.removeItem('LISTA');
    localStorage.setItem("LISTA", JSON.stringify(laListaFiltrata));
    stampa(); 

}

function stampa(){
    let laListaStr = localStorage.getItem("LISTA");
    let laLista = JSON.parse(laListaStr);

    if(laLista.length != 0){
        let laLista = JSON.parse(laListaStr);
        let SB = '';
        for(let i=0; i<laLista.length; i++){
            SB = SB + `<div class="grid"><div class="todo">` + String(laLista[i]) + `</div><button onclick="cancella(`+[i]+`)">Cancella todo</button></div>`;
        };        
        document.querySelector('.js-lista').innerHTML = SB;

    }else{
        document.querySelector('.js-lista').innerHTML = '<p>Ancora nessun todo</p>';

    }
}