const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(product) {
        try {
            if (fs.existsSync(this.file)) {
                const products = await this.getAll();
                product.id = products.length;
                products.push(product)
                await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2))
            } else {
                product.id = 0;
                await fs.promises.writeFile(this.file, JSON.stringify([product], null, 2))
            }
        } catch {
            console.log('entre al error')
        }
    }

    async getById(id) {
        try {
            const products = await this.getAll()
            const findById = products.find(el => el.id === id)
            if (findById === undefined) {
                return console.log('null')
            }
            return console.log(findById)
        } catch {
            console.log('el archivo no puede ser encontrado')
        }

    }

    async getAll() {
        try {
            const content = await fs.promises.readFile('./products.txt', "utf-8")
            if (content.length > 0) {
                return JSON.parse(content)
            } else {
                return []
            }
        } catch {
            console.log('error al leer los archivos')
        }

    }

    async deleteById(id) {
        try {
            const products = await this.getAll()
            const deleteById = products.filter(el => el.id !== id)
            await fs.promises.writeFile(this.file, JSON.stringify(deleteById, null, 2))
        } catch {
            console.log('el elemento no puede ser borrado')
        }

    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.file, '');
        } catch {
            console.log('el archivo no puede ser vaciado')
        }
    }
}

module.exports = Contenedor
