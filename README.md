Prueba para programador Javascript en CV Drin-Tin
=================================================

**Este repositorio y todo su contenido son privados e intransferibles. Nunca
puedes enviar a terceros o publicar el contenido ni parte del contenido incluso
después de haberlo modificado.**

Por favor, no hagas un pull request a este repositorio, ya que los pull request
son visibles para el resto de candidatos y no se pueden borrar del repositorio.
Puedes hacer un fork o mandarnos el patch después de realizar tus cambios.


Esta es una prueba para un programador Javascript para el CV Drin-Tin de 
[Leadtech](http://leadtech.com).

## Requisitos ##

* NodeJS 6.9.x.
* npm y dependencias del package.json.

## Reglas ##

* Los test de *untouchable-tests.js* deben ser superados con éxito.
* Respeta los principios SOLID.
* No te olvides del manifiesto KISS.
* No puedes usar más librerías de terceros que las que encontrarás en el 
  package.json actual. Eres libre de programar e instalar nuevas librerías que 
  hayas programado para esta ocasión.
* Evita una conexión a base de datos u otro servicio. Puedes usar el sistema de 
  ficheros.
* Crea suficiente cobertura con tus propios casos de test unitarios.
* Puedes modificar cualquier archivo o directorio menos *untouchable-tests.js*.

## Catálogo de ofertas selectivas ##

El contexto es una tienda online donde tenemos una serie de tipos de cuenta de 
usuario: Child, Boy y Girl.

En la tienda se venden 10 productos distintos, algunos de los cuales son 
exclusivos de uno o más tipos de cuenta de usuario. Esta es la relación de 
productos por tipo de usuario y precio:

|Producto|Tipos usuario|Precio|
|---|---|---|
|Laptop|Boy, Girl|1000|
|PS5|Boy, Child|400|
|Tablet|Boy, Girl|300|
|Móvil|Boy, Girl|220|
|Kit Lego|Child|140|
|Deportivas|Boy, Girl, Child|120|
|Falda|Girl|60|
|Gorra|Child, Boy|50|
|Camisa|Boy|40|
|Canicas|Child, Boy|5|

Hay unos descuentos para los productos relacionados con cada tipo de cuenta de 
usuario. Además, para cada tipo de cuenta de usuario, los precios se aplican
exclusivamente a los productos que superan el precio mínimo para descuento.
Por ejemplo, para los productos de un usuario Boy, el descuento del 50% se 
aplica exclusivamente a los productos con precio SUPERIOR a 300, es decir, a 
partir de 301 (o sea: Laptop, PS5).

Esta es la relación de descuentos por tipo de usuario:

|Tipo usuario|Precio máximo sin descuento|Restar del precio|
|---|---|---|
|Child|49|20%|
|Boy|300|50%|
|Girl|200|30%|

## Cálculo de prueba ##

En el catálogo de un tipo de usuario se añaden automáticamente los 3 productos 
más caros teniendo en cuenta el precio del producto una vez YA aplicado el 
descuento correspondiente.

Los tests en *page-test.js* consisten en calcular la suma de los productos del 
catálogo para cada tipo de usuario. El valor final de cada cálculo debe ser un
número entero, redondea los decimales.

Hemos revisado el resultado de los test y los valores son correctos. Si haces
el cálculo manualmente y el resultado no te cuadra, algo habrás hecho mal.

Puedes lanzar los test con:

`node tests/untouchable-tests.js`