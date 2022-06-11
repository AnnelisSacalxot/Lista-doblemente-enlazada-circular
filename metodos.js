/*
Esto solo para comprobar que se ve el graphviz en el html

d3.select("#lienzo").graphviz()
.width(900)
.height(900)
.renderDot("digraph {a -> b}")
*/

class Nodo {
    constructor(_numCarne){
       this.numCarne = _numCarne
        //apuntando hacia el siguiente elemento
        this.siguiente = null
        this.anterior = null
    }
}

class ListaDoble{
    constructor(){
        this.cabeza = null
        this.ultimo = null
        this.tam = 0
    }

    //metodo para agregar numero de carne
    agregarNum(_numE){
        
        //tempo = new Nodo(_objetoNum)
        var mostrar = new numero(_numE)
        var tempo = new Nodo(mostrar)
        /*tempo.siguiente = this.cabeza
        this.cabeza = tempo*/
        //empezamos a contruir nuestras condiciones para lo doble enlazado
        if (this.cabeza == null) {
            this.cabeza = tempo
            this.ultimo = this.cabeza
            //ida
            this.cabeza.siguiente = this.ultimo
            this.cabeza.anterior = this.ultimo
            //regreso
            this.ultimo.siguiente = this.cabeza
            this.ultimo.anterior = this.cabeza
            this.tam++;
        } else{
            this.ultimo.siguiente = tempo
            tempo.anterior = this.ultimo
            this.ultimo = tempo
            this.cabeza.anterior = this.ultimo
            this.ultimo.siguiente = this.cabeza
            this.tam++;
        }
    }

    mostrarNum(){
       var temporalmuestra = this.cabeza
       var cont = 0

       /*
               //mientras temporal no sea nulo se seguira mostrando y si no termina el ciclo
        //(ya no hay otro elemento)
         while (temporalmuestra != null) {
            console.log(temporalmuestra.numCarne.numerito)
            //llamamos al siguiente nodo o numero
            temporalmuestra = temporalmuestra.siguiente
        }*/

        //muestro la doble lista 
        while (cont<this.tam) {
            console.log(temporalmuestra.numCarne)
            temporalmuestra = temporalmuestra.siguiente
            cont++;
        }
    }

    //IMPORTANTE: se usa sintaxis de Graphviz
    graficarNumeros(){
        var codigodot = "digraph G{\nlabel=\" numero carnet \";\nnode [shape=component];\n";
        var temporal = this.cabeza
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.numCarne.numerito + "\" ];\n"
            if(temporal.siguiente != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        var arreglo = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(500)
            .renderDot(codigodot)
    }

}

class numero{
    constructor(_num){
        this.numerito = _num
    }
}

var listaNumeroCarne = new ListaDoble();
var elementoNumero = new numero("7")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("9")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("5")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("1")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("3")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("7")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("1")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("0")
listaNumeroCarne.agregarNum(elementoNumero)
elementoNumero = new numero("2")
listaNumeroCarne.agregarNum(elementoNumero)


listaNumeroCarne.mostrarNum()
//listaNumeroCarne.graficarNumeros()