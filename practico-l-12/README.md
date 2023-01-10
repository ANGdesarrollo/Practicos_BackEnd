# Practico numero 12:

```
Front-End = Realizado con React JS
Back-End = Realizado con Node JS y express.

Datos de LOGIN:

usuario: matias@gmail.com
contraseña: 123

Para inicializar este trabajo:
De el lado del servidor utilizar: npm start.
De el lado del front-end utilizar: npm start.
Corroborar que el puerto en el que se inicia el Front-End sea el mismo que esta declarado en el .env (corsOrigin)
```

### Consigna

Continuando con el desafío de la clase anterior, vamos a incorporar un mecanismo sencillo que
permite loguear un cliente por su nombre, mediante un formulario de ingreso.
Luego de que el usuario esté logueado, se mostrará sobre el contenido del sitio un cartel con el
mensaje “Bienvenido” y el nombre de usuario. Este cartel tendrá un botón de deslogueo a su
derecha.
Verificar que el cliente permanezca logueado en los reinicios de la página, mientras no expire el
tiempo de inactividad de un minuto, que se recargará con cada request. En caso de alcanzarse ese
tiempo, el próximo request de usuario nos llevará al formulario de login.
Al desloguearse, se mostrará una vista con el mensaje de 'Hasta luego' más el nombre y se
retornará automáticamente, luego de dos segundos, a la vista de login de usuario.

```
Se han realizado todos los puntos de el TP, el unico que no logre hacer fue que el tiempo
de sesion de la cookie se reinicie de el lado de el cliente por cada request, pero si logre que
el tiempo se resetee en la session que se guarda en el servidor
```

