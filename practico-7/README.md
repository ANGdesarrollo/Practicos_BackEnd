
# PRACTICO-7

## Hecho para probar con POSTMAN.

## Sobre el practico =

###### El mismo fue realizado con Express y Node JS. En la carpeta controllers se encuentran todas las funciones que se activan al acceder a una ruta seleccionada. En la carpeta routes se encuentra toda la logica de routing con Router. En la carpeta store se encuentra la logica de FileSystem junto con la clase que lo crea.

### RUTAS =

#### El router base '/api/products' =
###### GET: '/' - = http://localhost:8080/api/products  (Muestra todos los productos)
###### GET: '/:id?' - = http://localhost:8080/api/products/:id  (Muestra producto por ID)
###### POST: '/' - = http://localhost:8080/api/products  (Agrega un producto)
###### PUT: '/:id' - = http://localhost:8080/api/products/:id  (Modifica un producto)
###### DELETE: '/:id' - = http://localhost:8080/api/products/:id  (Borra un producto)

#### El router base '/api/cart'

###### POST: '/' -  http://localhost:8080/api/cart (Crea un carrito y devuelve su id)
###### DELETE: '/:id' - http://localhost:8080/api/cart/:id (Vacía un carrito y lo elimina.)
###### GET: '/:id/products' - http://localhost:8080/api/cart/:id/products (Me permite listar todos los productos guardados en el carrito)
###### POST: '/:id/products' - http://localhost:8080/api/cart/:id/products (Para incorporar productos al carrito por su id de producto)
###### DELETE: '/:id/products/:id_prod' - http://localhost:8080/api/cart/:id/products/:id_prod (Eliminar un producto del carrito por su id de carrito y de producto)