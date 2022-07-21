22-05 (Exe):
Encontre el problema en sass era colocar un ; luego del import. Recomiendo utilizar este comando para instalar sass: npm install --save-dev node-sass
Agregue algunas variables para ir usando en Variables.scss;
Tuve que crear algunos componentes y ponerle los import/export para que React renderice algo.
Utilice la biblioteca react-icons; la podemos usar donde haga falta, ver documentacion https://react-icons.github.io/react-icons;

29-05 (Exe):

Para hacer los highlights dinámicos fue necesario utilizar styled components, de esa forma le pasas props al componente con los valores de humedad o posicion del viento, y las propiedades css dentro del componente se actualizan segun el valor.
Ver documentacion en: https://styled-components.com/docs/basics#adapting-based-on-props

https://www.davidhu.io/react-spinners/ (libreria de spinners)
https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding // como obtener la direccion (ciudad, pais) en base a las coordenadas
Solucionar temas de multiples renderizados con react memo, cuando escribimos en el input.
Solucionar el renderizado condicional con el fetching de datos.
Ver si el suspense esta bien colocado
