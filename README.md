# Reto Técnico

Creación de 3 servicios para el reto técnico<br>
1.-Servicio get persona (integración con Star Wars API)<br>
2.-Servicio get empleado(mysql)<br>
3.-Servicio post empleado(mysql)<br>

## Comenzando 🚀
Instalando los modulos para poder realizar el deploy a aws<br>
![image](https://user-images.githubusercontent.com/5760574/119212577-f1c81780-ba7e-11eb-8b4c-f2269533f488.png)<br>

Deployando el proyecto para la subida en aws<br>
![image](https://user-images.githubusercontent.com/5760574/119212624-381d7680-ba7f-11eb-870a-7ee6a90cebfe.png)<br>

Una vez terminado de deployar exitosamente veremos las rutas para las pruebas respectivas<br>
![image](https://user-images.githubusercontent.com/5760574/119212676-8df21e80-ba7f-11eb-80f2-2edd2cf4d439.png)<br>
en este caso la documentación ya fue subida antes por eso el mensaje en consola<br>
![image](https://user-images.githubusercontent.com/5760574/119212701-b67a1880-ba7f-11eb-8f89-d621e1dc19bd.png)<br>
con el siguiente comando podemos descargarnos la documentación de nuestra API<br>
![image](https://user-images.githubusercontent.com/5760574/119212721-dad5f500-ba7f-11eb-8ad5-dad05b134416.png)<br>
![image](https://user-images.githubusercontent.com/5760574/119212735-ec1f0180-ba7f-11eb-8992-0f6b468ea084.png)<br>
![image](https://user-images.githubusercontent.com/5760574/119212759-11137480-ba80-11eb-9627-3710d2df32a9.png)<br>


## Ejecutando las pruebas ⚙️
1.-Obtenemos la persona con id 1 de Star Wars API<br>
![image](https://user-images.githubusercontent.com/5760574/119212789-48822100-ba80-11eb-9894-5809edded968.png)<br>

{
  "nombre": "Luke Skywalker",
  "altura": "172",
  "masa": "77",
  "colorDePelo": "blond",
  "colorDePiel": "fair",
  "colorDeOjo": "blue",
  "anioDeNacimiento": "19BBY",
  "genero": "male",
  "lugarDeOrigen": "https://swapi.py4e.com/api/planets/1/",
  "peliculas": [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
    "https://swapi.py4e.com/api/films/7/"
  ],
  "especies": [
    "https://swapi.py4e.com/api/species/1/"
  ],
  "vehiculos": [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/"
  ],
  "navesEstelares": [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/"
  ],
  "fechaDeCreacion": "2014-12-09T13:50:51.644000Z",
  "fechaDeActualizacion": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.py4e.com/api/people/1/"
}<br>

2.- Creamos un empleado en mysql <br>
![image](https://user-images.githubusercontent.com/5760574/119212858-b9293d80-ba80-11eb-84ef-9a9388735997.png)<br>
json a enviar :<br>
{
	"nombre": "Maria Lorze",
	"correo": "marialo@gmail.com"
}<br>
respuesta del servicio :<br>
![image](https://user-images.githubusercontent.com/5760574/119212884-e544be80-ba80-11eb-90fc-ba5f1c2fe61a.png)<br>
realizamos la verificación en la bd :<br>
![image](https://user-images.githubusercontent.com/5760574/119212920-2f2da480-ba81-11eb-8c4f-f990b9fa4438.png)<br>

3.- Obtenemos el listado de empleados deberíamos tener en la lista este ultimo empleado creado<br>
![image](https://user-images.githubusercontent.com/5760574/119212941-4a98af80-ba81-11eb-84d8-994dcf165bb0.png)<br>
![image](https://user-images.githubusercontent.com/5760574/119212949-613f0680-ba81-11eb-98e2-655693e76d67.png)<br>
