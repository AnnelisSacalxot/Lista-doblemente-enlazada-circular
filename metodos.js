class Nodo {
    constructor(_numCarne){
       this.numCarne = _numCarne
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
       var temporalmuestra = this.cabeza

        //mientras temporal no sea nulo se seguira mostrando y si no termina el ciclo
        //(ya no hay otro elemento)
        while (temporalmuestra != null) {
            console.log(temporalmuestra.numCarne.numerito)
            //llamamos al siguiente nodo o numero
            temporalmuestra = temporalmuestra.siguiente
        }
    }

    //IMPORTANTE: se usa sintaxix de Graphviz
    graficarNumeros(){

    }

}

class numero{
    constructor(_num){
        this.numerito = _num
    }
}

var listaNumeroCarne = new ListaSimple();
var elementoNumero = new numero(2)
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("0")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("1")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("7")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("3")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("1")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("5")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("9")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("7")
listaNumeroCarne.agregarNum(elementoNumero)


listaNumeroCarne.mostrarNum();
listaNumeroCarne.graficarNumeros()