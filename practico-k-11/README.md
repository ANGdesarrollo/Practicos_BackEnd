# Practico numero 11:

```
Para inicializar este trabajo:
De el lado del servidor utilizar: npm start.
De el lado del front-end utilizar: npm start.
Corroborar que el puerto en el que se inicia el Front-End sea el mismo que esta declarado en el .env (corsOrigin)
```

### Consigna 1 )

Sobre el desafío entregable de la clase 16, crear una vista en forma de tabla que consuma desde
la ruta ‘/api/productos-test’ del servidor una lista con 5 productos generados al azar utilizando
Faker.js como generador de información aleatoria de test (en lugar de tomarse desde la base de
datos). Elegir apropiadamente los temas para conformar el objeto ‘producto’ (nombre, precio y
foto).

```
Se creo la ruta especificada, la logica de faker js esta localizada en la carpeta controllers, en el archivo faker.js.
De el lado de el front-end creé en el context de sockets un fetch que golpea a la ruta y activa la funcion para que se rendericen
los items randoms de Faker JS. Luego mediante sockets se genera la persistencia de datos de cualquier item extra que se agregue.
```

### Consigna 2 )

Ahora, vamos a reformar el formato de los mensajes y la forma de comunicación del chat
(centro de mensajes).
El nuevo formato de mensaje será:
```
{
author: {
id: 'mail del usuario' ,
nombre: 'nombre del usuario' ,
apellido: 'apellido del usuario' ,
edad: 'edad del usuario' ,
alias: 'alias del usuario' ,
avatar: 'url avatar (foto, logo) del usuario'
},
text: 'mensaje del usuario'
}
```
```
En el front end, se crean los respectivos inputs para tomar esos datos, en el contexto se le da el formato solicitado y se envia
mediante sockets al back, este mismo lo toma y se lo devuelve a todos los usuarios.
```

### Aspectos a incluir en el entregable:

#### 1) Modificar la persistencia de los mensajes para que utilicen un contenedor que permita guardar objetos anidados (archivos o mongodb o firebase).

```
Se modifico la persistencia de datos con MONGO DB.
```

#### 2) El mensaje se envía del frontend hacia el backend, el cual lo almacenará en la base de datos elegida. Luego cuando el cliente se conecte o envie un mensaje, recibirá un array de mensajes a representar en su vista.

```
Para no vivir llamando a todos los mensajes y reenviarselos a los usuarios, separe la logica en dos partes, cuando un usuario se conecta
se realiza un unico llamado a todos los chats para que se vea en su pantalla, pero luego los mensajes entre los usuarios que esten online
se envian al back y el back se los re envia a todos sin necesidad de hacer un getAll() a toda la DB por cada mensaje que mandan
```


