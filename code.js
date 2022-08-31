plano = [];
let pl_in = {};
let pl_tv = {}

function update(){
    
    dados_in();
    add_table(dados_in);
    console.log(plano)
}

function dados_in(){
    if (document.getElementById('p1').checked){
        pl_in.plano = "Teste";
        pl_in.descricao = "Esse é o plano 1";
        pl_in.valor = "R$250,00"
        valor.innerText = "R$250,00";
    }

    if (document.getElementById('p2').checked){
        pl_in.plano = "Teste1";
        pl_in.descricao = "Esse é o plano 2";
        pl_in.valor = "R$350,00"
        valor.innerText = "R$350,00";
    }

    if (document.getElementById('p3').checked){
        pl_in.plano = "Teste2";
        pl_in.descricao = "Esse é o plano 3";
        pl_in.valor = "R$399,00"
        valor.innerText = "R$399,00";
    }

    if(plano[0] == pl_in){

        if(document.getElementById('p1').checked){
            this.plano.pop([0]);
            document.getElementById("tb_planos").deleteRow(1);
        }

        if(document.getElementById('p2').checked){
            this.plano.pop([0]);
            document.getElementById("tb_planos").deleteRow(1);
        }

        if(document.getElementById('p3').checked){
            this.plano.pop([0]);
            document.getElementById("tb_planos").deleteRow(1);
        }
             
    }
    
    this.plano.push(pl_in);
}

function dados_tv(){

    if (document.getElementById('p4').checked){
        pl_tv.plano = "Teste3";
        pl_tv.descricao = "Esse é o plano 4";
        pl_tv.valor = "R$399,00"
        valor.innerText = "R$399,00";
    }

    if (document.getElementById('p5').checked){
        pl_tv.plano = "Teste4";
        pl_tv.descricao = "Esse é o plano 5";
        pl_tv.valor = "R$399,00"
        valor.innerText = "R$399,00";
    }

    if (document.getElementById('p6').checked){
        pl_tv.plano = "Teste5";
        pl_tv.descricao = "Esse é o plano 6";
        pl_tv.valor = "R$399,00"
        valor.innerText = "R$399,00";
    }

    if(plano[1] == pl_tv){

        if(document.getElementById('p4').checked){
            this.plano.pop([1]);
            document.getElementById("tb_planos").deleteRow(2);
        }

        if(document.getElementById('p5').checked){
            this.plano.pop([1]);
            document.getElementById("tb_planos").deleteRow(2);
        }

        if(document.getElementById('p6').checked){
            this.plano.pop([1]);
            document.getElementById("tb_planos").deleteRow(2);
        }
             
    }

    this.plano.push(pl_tv);

}

function add_table(){
 
    let tb = document.getElementById('tb_planos');

    if(pl_in.plano != ""){

        for(let i = 0; i < this.plano.length; i++){

            let tr = tb.insertRow(1);
        
            let td_plano = tr.insertCell();
            let td_desc = tr.insertCell();
            let td_valor = tr.insertCell();

            td_plano.innerText = pl_in.plano;
            td_desc.innerText = pl_in.descricao;
            td_valor.innerText = pl_in.valor;
        }
    }

    if(pl_tv.plano != ""){

        for(let i = 0; i < this.plano.length; i++){

            let tr1 = tb.insertRow(2);

            let td_plano1 = tr1.insertCell();
            let td_desc1 = tr1.insertCell();
            let td_valor1 = tr1.insertCell();

            td_plano1.innerText = pl_tv.plano;
            td_desc1.innerText = pl_tv.descricao;
            td_valor1.innerText = pl_tv.valor;
        
        }
    }
}