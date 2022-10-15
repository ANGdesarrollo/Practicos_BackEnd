const fs = require('fs');

class Contenedor {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }

    async save(object) {
        await fs.promises.writeFile('./data.txt', object)
            .then(() => {
                const objectRecieved = JSON.parse(object)
                return console.log(objectRecieved.id)
            })
            .catch((err) => console.log(err))
    }

    async getById(Number) {
        await fs.readFile('./data.txt', 'utf8', (err, content) => {
            if(err) {
                throw err;
            } else {
                const dataToRead = JSON.parse(content)
                const findID = dataToRead.find(el => el.id === Number);
                return console.log(findID)
            }
        })
    }

}

const dataToTest = new Contenedor('Mouse', 100, 0)
const dataToTestString = JSON.stringify(dataToTest)

dataToTest.save(dataToTestString)
dataToTest.getById(1)
