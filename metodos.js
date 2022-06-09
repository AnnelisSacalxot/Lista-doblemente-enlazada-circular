class Nodo {
    constructor(_numCarne){
        numCarne = this._numCarne
        //apuntando hacia el siguiente elemento
        this.siguiente = null
    }
}

class ListaSimple{
    constructor(){
        this.cabeza = null
    }

    //metodo para agregar numero de carne
    agregarNum(_objetoNum){
        var tempo = new Nodo(_objetoNum)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
    }

    mostrarNum(){
        temporal = this.cabeza

        //mientras temporal no sea nulo se seguira mostrando y si no termina el ciclo
        //(ya no hay otro elemento)
        while (temporal =! null) {
            console.log(temporal.numCarne.num)
            //llamamos al siguiente nodo o numero
            temporal = temporal.siguiente
        }
    }

    //IMPORTANTE: se usa sintaxix de Graphviz
    graficarNumeros(){

    }

}

class numero{
    constructor(_num){
        this.num = _num
    }
}

var listaNumeroCarne = new ListaSimple();


listaNumeroCarne.mostrarNum();
listaNumeroCarne.graficarNumeros();