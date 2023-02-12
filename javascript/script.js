class Produto{
    constructor(){
        this.id = 1
        this.arrayProdutos = []
    }
    //função para salvar nossos produtos, chamando as funções lerDados e adicionar
    salvar(){
       let produto = this.lerDados()

       if(this.validaCampos(produto)){
        this.adicionar(produto)
        console.log(this.arrayProdutos)
       }
       this.listarTabela()
       this.cancelar()

    }

    cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
    }

    //função para adicionar os valores lidos no nosso array produtos, será chamada na função salvar
    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    //função para ler os dados do nosso array
    lerDados(){
        let produto = []

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valor = document.getElementById('valor').value

        return produto
    }

    listarTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i <this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].valor

            let imgEdit = document.createElement('img')
            imgEdit.src = './img/edit.svg'
            let imgDelete = document.createElement('img')
            imgDelete.src = './img/delete.svg'
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")")
            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)
        }
    }

    deletar(id){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
    }
    validaCampos(produto){
        let msg = ''

        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto\n'
        }
        if(produto.valor == ''){
            msg += 'Informe o preço do produto\n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    }

}

var produto = new Produto()