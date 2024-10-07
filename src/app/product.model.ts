export class Product {
    id_product?: number; // Hacer que el id sea opcional
    title: string; // Cambié 'name' a 'title' para que coincida con tu JSON
    price: number;
    quantity: number; // Agregué 'quantity' para reflejar la propiedad del JSON

    constructor(title: string, price: number, quantity: number, id?: number) {
        this.title = title; // Asignar el título
        this.price = price; // Asignar el precio
        this.quantity = quantity; // Asignar la cantidad
        if (id) {
            this.id_product = id; // Solo asignar el id si se proporciona
        }
    }
}
