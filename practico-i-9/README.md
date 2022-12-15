# Desafio 9

## Items

### 1) Agregar 10 documentos con valores distintos a las colecciones mensajes y productos

### 2) Definir las claves de los documentos en relación a los campos de las tablas de esa base.

```
db.messages.insertMany([
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Hola Matias !",
    "timestamp": ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Como est�s?",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 1",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 2",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 3",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 4",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 5",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Creando mensajes para la DB - Mongo - parte 6",
    timestamp: ISODate()
  },
  {
    "username": "alexisgraff123@gmail.com",
    "message": "Finalizado",
    timestamp: ISODate()
  }
])
```

```
db.products.insertMany([
{
"title": "Notebook Razer",
"price": 1400,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Notebook_2_d9kvm7.webp"
},
{
"title": "Mouse Razer",
"price": 750,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
{
"title": "Keyboard pro v4",
"price": 1100,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958399/react-js-game-on/products/Keyboard_1_slgpnz.webp"
},
{
"title": "Keyboard pro v3",
"price": 3200,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958400/react-js-game-on/products/Keyboard_3_ke2ati.webp"
},
{
"title": "Keyboard pro v2",
"price": 4000,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958399/react-js-game-on/products/Headset_2_zungei.webp"
},
{
"title": "Invictus gaming mouse",
"price": 3500,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
{
"title": "Mouse Razer DeathAdder v2",
"price": 300,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
{
"title": "Joystick Razer",
"price": 700,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
{
"title": "Notebook pro one Razer",
"price": 4500,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
{
"title": "PlayStation Razer",
"price": 250,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958404/react-js-game-on/products/Mouse_1_bz5vfj.webp"
},
])
```

## 3) Listar todos los documentos en cada colección.

```
db.messages.find().pretty()
db.products.find().pretty()
```

## 4) Mostrar la cantidad de documentos almacenados en cada una de ellas

```
db.messages.estimatedDocumentCount()
db.products.estimatedDocumentCount()
```

## 5) Realizar un CRUD sobre la colección de productos:

### A) Agregar un producto más en la colección de productos

```
db.products.insertOne({
"title": "SmartPhone Galaxy s2",
"price": 1450,
"thumbnail": "https://res.cloudinary.com/dwz16rstr/image/upload/v1662958399/react-js-game-on/products/Keyboard_1_slgpnz.webp"
})
```

### B) Agregar un producto más en la colección de productos

#### i) Listar los productos con precio menor a 1000 pesos.

```
db.products.find({price:{$lt: 1000}}).pretty()
```

#### ii) Listar los productos con precio entre los 1000 a 3000 pesos.

```
db.products.find({price:{$gt: 1000, $lt: 3000}}).pretty()
```

#### iii) Listar los productos con precio mayor a 3000 pesos.

```
db.products.find({price:{$gt: 3000}}).pretty()
```

#### iv) Listar los productos con precio mayor a 3000 pesos.

```
db.products.find().sort({price: 1}).limit(3).skip(2).limit(1)
```

### C) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
```
db.products.updateMany({price:{$gte: 1}},{$set:{stock: 100}})
```
### D) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
```
db.products.updateMany({price:{$gt: 4000}}, {$set:{stock: 0}})
```
### E) Borrar los productos con precio menor a 1000 pesos 
```
db.products.deleteMany({price: {$lt: 1000}})
```

## 6) Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce.
```
db.createUser({user: "pepe", pwd: "asd456", roles:[{role: "read", db: "ecommerce"}]})
```

















