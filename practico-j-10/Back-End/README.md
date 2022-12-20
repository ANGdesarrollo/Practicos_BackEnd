# Practico 10 - Segunda pre-entrega final.

### Consigna:  

Basándose en los contenedores ya desarrollados (memoria, archivos) desarrollar
dos contenedores más (que cumplan con la misma interfaz) que permitan realizar las operaciones
básicas de CRUD en MongoDb (ya sea local o remoto) y en Firebase. Luego, para cada
contenedor, crear dos clases derivadas, una para trabajar con Productos, y otra para trabajar con
Carritos.

```
Para esta consigna realice 4 containers con los siguientes metodos:

⚫ Save
⚫ GetAll
⚫ GetById
⚫ UpdateById
⚫ DeleteItemInCart 
⚫ AddItemToCart (Debido a la falta de persistencia de Datos, en memoria no funciona este metodo, deje un carrito y 
un producto hardcodeado para que lo pruebes ya que funciona de esta manera.).
⚫ DeletById
```

###Aspectos a incluir en el entregable:

#### A) A las clases derivadas de los contenedores se las conoce como DAOs (Data Access Objects), y pueden ir todas incluidas en una misma carpeta de ‘daos’.
#### B) En la carpeta de daos, incluir un archivo que importe todas las clases y exporte una instancia de dao de productos y una de dao de carritos, según corresponda. Esta decisión se tomará en base al valor de una variable de entorno cargada al momento de ejecutar el servidor.
#### C) Incluir un archivo de configuración (config) que contenga los datos correspondientes para conectarse a las bases de datos o medio de persistencia que corresponda.

```
Para la facilidad en la utilizacion de las DBS cree una carpeta llamada ENVIROMENT donde vas a encontrar
el archivo .env donde cambiando el nombre de la variable INSTANCE podras acceder a las diferentes bases de Datos.
La logica se encuentra en esa misma carpeta en el archivo instances.js
```

