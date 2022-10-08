class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        return this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        return this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames() {
        return this.libros.map(el => el.nombre)
    }
}

const usuario = new Usuario("Alexis", "Graff", [], [])

console.log(usuario.getFullName())
usuario.addMascota('Perro')
console.log(usuario.countMascotas())
usuario.addBook('Contacto', 'Carl Sagan')
console.log(usuario.getBookNames())
console.log(usuario)