export default class Carrito {
    constructor(id, cantidad){
        this.id = id,
        this.cantidad = cantidad
        }

        static incremento(){
            if(this.increment){
                this.increment++
            } 
            else{
                this.increment = 1
            }
            return this.increment
        }
    }

    const producto1 = new Carrito(2,4)
    const producto2 = new Carrito(2,6)

   // console.log(producto1, producto2)