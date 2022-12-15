const fs = require('fs');

class Container {
    constructor(file) {
        this.file = file;
    }

    async save(product) {
        try {
            if (fs.existsSync(this.file)) {
                const products = await this.getAll();
                product.id = products.length + 1;
                products.push(product)
                await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2))
            } else {
                product.id = 0;
                await fs.promises.writeFile(this.file, JSON.stringify([product], null, 2))
            }
        } catch {
            console.log('error')
        }
    }

    async modifyItem(id, body) {
        try {
            let products = await this.getAll();
            const findById = products.findIndex(el => el.id === Number(id))
            products[findById] = {...products[findById], ...body }
            await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2))
        } catch {
            console.log("item couldn't be replaced");
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
            console.log('File not found')
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
            console.log('error at reading files')
        }

    }

    async deleteById(id) {
        try {
            const products = await this.getAll()
            const deleteById = products.filter(el => el.id !== Number(id))
            await fs.promises.writeFile(this.file, JSON.stringify(deleteById, null, 2))
        } catch {
            console.log('the element cant be deleted')
        }

    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.file, '');
        } catch {
            console.log('the file cannot be emptied')
        }
    }
}

module.exports = Container
