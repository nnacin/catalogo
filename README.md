Catalogo
=================================================

## Requisitos ##

* NodeJS 6.9.x.
* npm y dependencias del package.json.

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

Puedes lanzar los test con:

`node tests/untouchable-tests.js`
