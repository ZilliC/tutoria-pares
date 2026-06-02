export const DOMAIN = {
  unidades: [
    {
      id: "u2",
      nombre: "Sistemas Operativos",
      temas: [
        {
          id: "u2-memoria",
          nombre: "Memoria y CPU",
          conceptos: ["RAM", "CPU", "Proceso"],
        },
        {
          id: "u2-clasificacion",
          nombre: "Clasificación de SO",
          conceptos: ["Multitarea", "Multiusuario"],
        },
        {
          id: "u2-comandos",
          nombre: "Comandos básicos",
          conceptos: ["ls/dir", "cd", "mkdir", "ping"],
        },
      ],
    },
    {
      id: "u3",
      nombre: "Redes de Computadoras",
      temas: [
        {
          id: "u3-tipos",
          nombre: "Tipos de redes",
          conceptos: ["LAN", "WAN", "Internet"],
        },
        {
          id: "u3-componentes",
          nombre: "Componentes de red",
          conceptos: ["Router", "Switch", "Servidor", "Módem"],
        },
        {
          id: "u3-osi",
          nombre: "Modelo OSI",
          conceptos: [
            "Capa Física",
            "Enlace de datos",
            "Capa de Red",
            "Transporte",
            "Sesión",
            "Presentación",
            "Aplicación",
          ],
        },
        {
          id: "u3-protocolos",
          nombre: "Protocolos TCP/IP",
          conceptos: ["HTTP/HTTPS", "DNS", "Dirección IP"],
        },
      ],
    },
    {
      id: "u4",
      nombre: "Lenguajes de Programación",
      temas: [
        {
          id: "u4-algoritmos",
          nombre: "Algoritmos",
          conceptos: ["Algoritmo", "Variable", "Estructura de control"],
        },
        {
          id: "u4-ejecucion",
          nombre: "Forma de ejecución",
          conceptos: ["Compilado", "Interpretado"],
        },
        {
          id: "u4-paradigmas",
          nombre: "Paradigmas",
          conceptos: ["Imperativo", "Declarativo"],
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// QUIZ — preguntas reales (formato de dos partes por concepto)
//
// p1: pregunta de identificación. El alumno no ve el nombre del
//     concepto; debe reconocerlo a partir de un escenario.
//   - opción nivel 3 → correcta y precisa → dispara p2
//   - opción nivel 2 → correcta, pero con una imprecisión sutil
//   - opción nivel 1 → confusión con un concepto HERMANO (mismo tema)
//   - opción nivel 0 → un modelo mental erróneo de fondo
//   - "No sé"        → nivel 0
//
// p2: pregunta de profundidad (binaria), solo si eligió nivel 3.
//   - correcto: true  → nivel 3 final (lo puede enseñar)
//   - correcto: false → nivel 2 final (correcto pero superficial)
//
// PRINCIPIOS DE DISEÑO (para que el quiz mida conocimiento real y
// no maña para resolver tests):
//   1. Las CUATRO opciones de p1 son plausibles. No hay distractores
//      absurdos de otro dominio que se descarten de un vistazo: los
//      errores son misconcepciones reales y frecuentes (confundir RAM
//      con disco, Internet con la Web, una variable con el chip, un
//      protocolo con la aplicación, etc.).
//   2. La correcta NO se distingue por tener más jerga ni por ser la
//      más larga. El nivel 3 se separa del nivel 2 por PRECISIÓN, no
//      por vocabulario. Las longitudes se mantienen parejas.
//   3. El enunciado no telegrafía la respuesta ni la opción correcta
//      repite el enunciado palabra por palabra.
//   4. Las opciones se barajan en tiempo de ejecución (ver Quiz.jsx)
//      para evitar sesgo de posición.
// ─────────────────────────────────────────────────────────────

export const QUIZ = {
  // ─── U2 · Sistemas Operativos ───────────────────────────────
  RAM: {
    p1: {
      pregunta:
        "Tu computadora se vuelve lenta cuando abres muchas aplicaciones al mismo tiempo. ¿Cuál es la causa más probable y por qué?",
      opciones: [
        {
          id: "a",
          texto:
            "La memoria de trabajo se llenó y el sistema empieza a usar el disco como respaldo, que es mucho más lento.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La memoria de trabajo se quedó sin espacio, así que el equipo ya no puede abrir más programas hasta cerrar uno.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El procesador no da abasto para ejecutar las instrucciones de tantos programas a la vez y todo responde lento.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El disco de almacenamiento está casi lleno y ya no queda lugar para guardar los datos de los programas abiertos.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta:
        "Cuando la memoria RAM se agota, ¿qué hace técnicamente el sistema operativo?",
      opciones: [
        {
          id: "a",
          texto:
            "Mueve parte de los datos a un espacio reservado del disco (swap), lo que vuelve el acceso mucho más lento.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Borra de forma automática los programas que llevan más tiempo sin usarse para liberar memoria.",
          correcto: false,
        },
      ],
    },
  },

  CPU: {
    p1: {
      pregunta:
        "Un programa tarda 10 segundos en tu computadora y solo 2 en la de tu amigo, con la misma app. ¿Qué componente explica mejor la diferencia?",
      opciones: [
        {
          id: "a",
          texto:
            "El que ejecuta las instrucciones: con más frecuencia o más núcleos resuelve más operaciones por segundo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El procesador, porque es donde corre el programa; el de tu amigo es más nuevo y por eso simplemente va más rápido.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La memoria de trabajo: como tu amigo tiene más cantidad, el mismo programa logra ejecutarse mucho más rápido.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "La velocidad de su conexión a internet, ya que de ella depende qué tan rápido puede correr cualquier programa.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué permite concretamente que un CPU tenga varios núcleos?",
      opciones: [
        {
          id: "a",
          texto:
            "Ejecutar varias instrucciones o hilos en paralelo, es decir realmente al mismo tiempo y no por turnos.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que cada instrucción individual del programa se ejecute por sí sola de forma automáticamente más rápida.",
          correcto: false,
        },
      ],
    },
  },

  Proceso: {
    p1: {
      pregunta:
        "Tienes abiertos el navegador y el reproductor de música a la vez. ¿Cómo llama el sistema operativo a cada uno y qué implica?",
      opciones: [
        {
          id: "a",
          texto:
            "Cada uno es una instancia de un programa en ejecución, con su propio espacio de memoria y tiempo de CPU.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Cada uno es un programa que está corriendo en este momento dentro de la computadora del usuario.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Cada uno ocupa de forma exclusiva un núcleo completo del procesador todo el tiempo que permanece abierto.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Cada uno es la ventana que ves en pantalla; al cerrarla deja de existir cualquier rastro suyo en el sistema.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es la diferencia entre un programa y un proceso?",
      opciones: [
        {
          id: "a",
          texto:
            "El programa es el archivo guardado en disco; el proceso es ese programa ya cargado en memoria y ejecutándose.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "No hay diferencia real: proceso es simplemente otra forma de nombrar a cualquier programa de la computadora.",
          correcto: false,
        },
      ],
    },
  },

  Multitarea: {
    p1: {
      pregunta:
        "Estás escuchando música mientras escribes un documento. ¿Qué característica del sistema operativo lo hace posible?",
      opciones: [
        {
          id: "a",
          texto:
            "El sistema reparte el CPU entre procesos en fracciones de tiempo tan breves que el avance parece simultáneo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una función que le permite tener varios programas abiertos y funcionando todos a la vez sin que se cierren.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una función que permite que varias personas distintas usen la misma computadora exactamente al mismo tiempo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Que el equipo dedica un procesador independiente a cada programa, de modo que cada app corre en el suyo propio.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta:
        "En un CPU de un solo núcleo, ¿cómo funciona realmente la multitarea?",
      opciones: [
        {
          id: "a",
          texto:
            "Alterna rapidísimo entre procesos; en cada instante corre solo uno, pero el cambio es imperceptible para ti.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Un único núcleo logra ejecutar de verdad todos los procesos abiertos exactamente en el mismo instante.",
          correcto: false,
        },
      ],
    },
  },

  Multiusuario: {
    p1: {
      pregunta:
        "En una universidad, 30 alumnos se conectan a la vez al mismo servidor Linux, cada uno con su cuenta y sus archivos. ¿Qué característica del SO lo permite?",
      opciones: [
        {
          id: "a",
          texto:
            "El sistema gestiona sesiones, permisos y recursos separados para cada usuario conectado al mismo tiempo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una función que permite que varios usuarios distintos usen el mismo sistema a la vez sin estorbarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una función que corre varios procesos al mismo tiempo dentro del servidor para repartir el trabajo de todos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Que el servidor genera una copia completa e independiente del sistema para cada alumno que inicia sesión.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué debe garantizar un sistema multiusuario?",
      opciones: [
        {
          id: "a",
          texto:
            "El aislamiento de permisos y archivos, para que un usuario no acceda a los recursos privados de otro.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que todos los usuarios compartan los mismos archivos y la misma configuración para poder colaborar mejor.",
          correcto: false,
        },
      ],
    },
  },

  "ls/dir": {
    p1: {
      pregunta:
        "Estás en la terminal y quieres saber qué archivos hay en la carpeta donde te encuentras. ¿Qué comando usas y qué hace exactamente?",
      opciones: [
        {
          id: "a",
          texto:
            "ls (o dir en Windows): lista el contenido del directorio actual sin cambiarte de ubicación ni abrir nada.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "ls en Linux, o dir en Windows: sirve para abrir la carpeta actual y poder ver todo lo que tiene adentro.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El comando cd, que te muestra en qué directorio estás situado y además todo lo que se encuentra dentro de él.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Hay que abrir uno por uno los archivos para saber cuáles existen; no hay un comando que los liste de golpe.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué muestra de más el comando `ls -a`?",
      opciones: [
        {
          id: "a",
          texto:
            "Los archivos ocultos, es decir aquellos cuyo nombre empieza con un punto y normalmente no se listan.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Los archivos ordenados alfabéticamente de la A a la Z para que sea más fácil encontrar lo que buscas.",
          correcto: false,
        },
      ],
    },
  },

  cd: {
    p1: {
      pregunta:
        "Estás en /home/usuario y necesitas ir a /home/usuario/Documentos/Tareas. ¿Qué comando escribes?",
      opciones: [
        {
          id: "a",
          texto:
            "cd Documentos/Tareas — cambia el directorio actual; la ruta puede ser relativa o absoluta desde la raíz.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "cd Documentos/Tareas, que es el comando que sirve para moverme de la carpeta donde estoy a otra distinta.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "ls Documentos/Tareas, que me permite entrar a esa carpeta y a la vez ver todo el contenido que tiene dentro.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Hay que escribir la ruta completa /home/usuario/Documentos/Tareas; las rutas cortas relativas no funcionan.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es la diferencia entre `cd ..` y `cd /`?",
      opciones: [
        {
          id: "a",
          texto:
            "`cd ..` sube un nivel hacia el directorio padre; `cd /` te lleva directo a la raíz del sistema de archivos.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Ambos comandos hacen lo mismo: te regresan al directorio personal (home) del usuario que inició sesión.",
          correcto: false,
        },
      ],
    },
  },

  mkdir: {
    p1: {
      pregunta:
        "Necesitas crear una carpeta llamada 'proyecto' en tu directorio actual. ¿Qué comando usas?",
      opciones: [
        {
          id: "a",
          texto:
            "mkdir proyecto crea el directorio en donde estás; si ya existe da error, y con mkdir -p se anidan carpetas.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "mkdir proyecto, que es justamente el comando que sirve para crear una carpeta nueva donde me encuentro.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "cd proyecto, que crea la carpeta nueva y al mismo tiempo me deja dentro de ella para empezar a trabajar.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Desde la terminal no se pueden crear carpetas; eso solo se hace con clic derecho y 'Nueva carpeta'.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué hace `mkdir -p a/b/c`?",
      opciones: [
        {
          id: "a",
          texto:
            "Crea toda la cadena anidada a, b y c de una vez, aunque los directorios intermedios todavía no existan.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Crea únicamente la última carpeta c y marca error si las carpetas a o b no han sido creadas antes.",
          correcto: false,
        },
      ],
    },
  },

  ping: {
    p1: {
      pregunta:
        "Quieres saber si tu computadora puede comunicarse con google.com. ¿Qué comando usas?",
      opciones: [
        {
          id: "a",
          texto:
            "ping google.com envía paquetes al destino y mide el tiempo de respuesta; si responde, hay conexión.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "ping google.com, que es el comando que sirve para verificar si hay conexión con ese host en concreto.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "cd google.com, que se encarga de crear y de dejar establecida la conexión hacia el host que le indico.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Basta con mirar el ícono de WiFi; no existe forma de probar un sitio concreto desde la línea de comandos.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "Si ping no recibe respuesta, ¿qué puedes concluir?",
      opciones: [
        {
          id: "a",
          texto:
            "Puede haber un problema de red, el host caído o un firewall bloqueando ICMP; no que el sitio esté caído.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Significa siempre, sin excepción, que tu conexión a internet está completamente caída y desconectada.",
          correcto: false,
        },
      ],
    },
  },

  // ─── U3 · Redes de Computadoras ──────────────────────────────
  LAN: {
    p1: {
      pregunta:
        "En tu casa tienes 3 computadoras y un celular conectados al mismo router WiFi. ¿Qué tipo de red forman?",
      opciones: [
        {
          id: "a",
          texto:
            "Una red de área local: cubre un espacio pequeño y permite compartir recursos entre dispositivos cercanos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una LAN, que es una red local pensada para conectar entre sí dispositivos que están físicamente cerca.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una WAN, ya que al estar todos conectados a internet forman parte de una red de alcance global y amplio.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "No forman ninguna red entre sí: cada dispositivo se conecta por su cuenta a internet de forma totalmente aparte.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Una LAN necesita internet para funcionar?",
      opciones: [
        {
          id: "a",
          texto:
            "No: los dispositivos de una LAN pueden compartir archivos e impresoras entre sí sin conexión a internet.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: sin una conexión a internet activa, una LAN no es capaz de comunicar ni de conectar sus dispositivos.",
          correcto: false,
        },
      ],
    },
  },

  WAN: {
    p1: {
      pregunta:
        "Una empresa tiene oficinas en CDMX y Monterrey interconectadas. ¿Qué tipo de red describe mejor esa conexión?",
      opciones: [
        {
          id: "a",
          texto:
            "Una red de área amplia: une redes separadas geográficamente usando infraestructura de terceros como fibra.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una WAN, que es la que se encarga de conectar entre sí ubicaciones situadas en ciudades diferentes y lejanas.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una LAN extendida, ya que en el fondo sigue siendo la misma red interna y privada de una sola empresa.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "No es una red única: son dos LAN del todo independientes que apenas comparten el mismo nombre de empresa.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿De quién suele ser la infraestructura física de una WAN?",
      opciones: [
        {
          id: "a",
          texto:
            "A menudo de proveedores de telecomunicaciones que rentan los enlaces, no de la propia empresa que la usa.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Siempre es propiedad de la empresa que la utiliza, exactamente igual que ocurre con cualquier red LAN.",
          correcto: false,
        },
      ],
    },
  },

  Internet: {
    p1: {
      pregunta: "¿Cuál es la diferencia entre Internet y una WAN?",
      opciones: [
        {
          id: "a",
          texto:
            "Internet es una red de redes pública y global con TCP/IP; una WAN puede ser privada y es solo una parte.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Internet es la gran red mundial que se encarga de conectar entre sí a las computadoras de todo el planeta.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Son exactamente lo mismo: Internet no es más que una red WAN que resulta ser muy grande y muy extensa.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Internet es el conjunto de páginas web y aplicaciones que usamos a diario a través del navegador del equipo.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué hace posible que redes muy distintas formen Internet?",
      opciones: [
        {
          id: "a",
          texto:
            "El conjunto de protocolos estándar TCP/IP, que permite que redes muy distintas se entiendan entre sí.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El lenguaje HTML, que es el que todos los dispositivos del mundo usan para poder comunicarse en la red.",
          correcto: false,
        },
      ],
    },
  },

  Router: {
    p1: {
      pregunta:
        "Tienes dos redes distintas: la de tu casa (192.168.1.x) e internet. ¿Qué dispositivo las conecta y decide a dónde mandar cada paquete?",
      opciones: [
        {
          id: "a",
          texto:
            "El router: opera en la capa de red y usa tablas de enrutamiento para elegir el camino según la IP destino.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El router, que es justamente el dispositivo encargado de conectar tu red local de la casa con internet.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El switch, que se encarga de distribuir la señal entre todos los dispositivos que hay dentro de la red.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Ningún aparato lo decide: los paquetes se difunden a toda la red y cada equipo toma los que le corresponden.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿En qué capa del modelo OSI opera principalmente un router?",
      opciones: [
        {
          id: "a",
          texto:
            "En la capa de red, también llamada capa 3, donde toma decisiones usando las direcciones IP de destino.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "En la capa física, ya que su función principal es transmitir directamente la señal eléctrica por el cable.",
          correcto: false,
        },
      ],
    },
  },

  Switch: {
    p1: {
      pregunta:
        "Tienes 8 computadoras en una oficina que necesitan comunicarse entre sí. ¿Qué dispositivo usas?",
      opciones: [
        {
          id: "a",
          texto:
            "Un switch: conecta equipos de una LAN y envía cada trama solo al destino usando las direcciones MAC.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Un switch, que es el dispositivo pensado para conectar entre sí varios equipos dentro de una misma red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Un router, ya que es el aparato necesario para que todos los dispositivos puedan comunicarse entre ellos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Ninguno: cada computadora se conecta con un cable directo hacia cada una de las otras siete de la oficina.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cómo decide un switch a qué puerto enviar una trama?",
      opciones: [
        {
          id: "a",
          texto:
            "Aprende y consulta una tabla de direcciones MAC para enviarla únicamente al puerto que le corresponde.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La difunde de golpe a todos los puertos cada vez, funcionando exactamente igual que lo haría un hub.",
          correcto: false,
        },
      ],
    },
  },

  Servidor: {
    p1: {
      pregunta:
        "Cuando escribes una URL y aparece una página web, ¿qué función cumple el servidor en ese proceso?",
      opciones: [
        {
          id: "a",
          texto:
            "Recibe la solicitud del navegador, busca el recurso pedido y lo devuelve; provee servicios a otros equipos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El servidor es el que almacena la página web y se encarga de enviarla cada vez que alguien la solicita.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El servidor es el router que se ocupa de dirigir tu petición hasta llegar a la página correcta que pediste.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El servidor es tu propia computadora, que arma y descarga la página completa por su cuenta sin pedir nada.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "En el modelo cliente-servidor, ¿quién inicia la comunicación?",
      opciones: [
        {
          id: "a",
          texto:
            "El cliente es quien envía la solicitud, y el servidor se mantiene a la espera para poder responderla.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El servidor inicia la comunicación enviando las páginas a los clientes cada cierto tiempo de forma activa.",
          correcto: false,
        },
      ],
    },
  },

  "Módem": {
    p1: {
      pregunta:
        "¿Por qué necesitas un módem para conectarte a internet si ya tienes un router en casa?",
      opciones: [
        {
          id: "a",
          texto:
            "El módem convierte la señal de tu red a la del cable del proveedor; el router solo la distribuye en casa.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El módem es lo que conecta tu casa con internet, y el router reparte esa conexión entre tus dispositivos.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "En realidad no necesitas los dos, porque el módem y el router terminan haciendo exactamente la misma tarea.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El módem es el plan de internet que contratas con la compañía, no un aparato distinto del propio router.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué hace fundamentalmente un módem?",
      opciones: [
        {
          id: "a",
          texto:
            "Modula y demodula señales para adaptarlas entre medios, por ejemplo de digital a la línea del proveedor.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Asigna las direcciones IP a cada uno de los dispositivos que están conectados dentro de la red de la casa.",
          correcto: false,
        },
      ],
    },
  },

  "Capa Física": {
    p1: {
      pregunta:
        "En el modelo OSI, ¿de qué se encarga la capa más baja y qué ejemplos la representan?",
      opciones: [
        {
          id: "a",
          texto:
            "Transmite los bits crudos por el medio y maneja el voltaje y la temporización; ejemplos: cables, fibra, WiFi.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es la capa más baja del modelo OSI y se encarga de transmitir los bits por el medio, sea cable o señal.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es la capa que se ocupa de asignar las direcciones IP y de enrutar los paquetes entre redes distintas.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es la parte física del equipo, como el gabinete, la fuente y los componentes internos de la computadora.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál de estos es un ejemplo de la capa física?",
      opciones: [
        {
          id: "a",
          texto:
            "El conector RJ45 o el cable de fibra óptica, que son el medio por donde viaja físicamente la señal.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La dirección IP, que es el número que se usa para identificar a cada dispositivo dentro de la red.",
          correcto: false,
        },
      ],
    },
  },

  "Enlace de datos": {
    p1: {
      pregunta: "¿Qué problema resuelve la capa de Enlace de datos y cómo lo hace?",
      opciones: [
        {
          id: "a",
          texto:
            "Transfiere datos de forma confiable entre dos nodos conectados, detecta errores y usa direcciones MAC.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Se encarga de manejar la comunicación entre los dispositivos de una misma red usando las direcciones MAC.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Se encarga de establecer y de cerrar las conexiones entre los dispositivos para que puedan comunicarse.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Traduce el texto que escribe el usuario a un idioma que la otra computadora pueda entender al recibirlo.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué tipo de dirección usa la capa de Enlace de datos?",
      opciones: [
        {
          id: "a",
          texto:
            "Direcciones MAC, también llamadas físicas, que son únicas para cada interfaz o tarjeta de red existente.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Direcciones IP, que son las que se utilizan para poder enrutar la información entre redes diferentes.",
          correcto: false,
        },
      ],
    },
  },

  "Capa de Red": {
    p1: {
      pregunta:
        "Cuando envías un mensaje de CDMX a Tokio, ¿qué capa del OSI decide el camino que toman los datos?",
      opciones: [
        {
          id: "a",
          texto:
            "La capa de red: enruta los paquetes entre redes usando direcciones IP, y es donde operan los routers.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de red, que es la que se vale de las direcciones IP para enrutar los paquetes entre las redes.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de transporte, que es la encargada de controlar el flujo de los datos de un extremo al otro.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Ninguna capa lo decide: el mensaje viaja por un único cable directo que une el origen con el destino final.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué dispositivo es el ejemplo clásico de la capa de red?",
      opciones: [
        {
          id: "a",
          texto:
            "El router, que es el que elige las rutas de los paquetes basándose en la dirección IP de su destino.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El switch, que en realidad trabaja sobre todo con direcciones MAC dentro de la capa de enlace de datos.",
          correcto: false,
        },
      ],
    },
  },

  Transporte: {
    p1: {
      pregunta: "¿Cuál es la diferencia entre TCP y UDP, y cuándo usarías cada uno?",
      opciones: [
        {
          id: "a",
          texto:
            "Son de la capa de transporte: TCP garantiza entrega ordenada y sin errores; UDP es más rápido sin garantías.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "TCP se asegura de que los datos lleguen bien, mientras que UDP es más rápido pero no ofrece garantías.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "TCP y UDP son protocolos de la capa de red que se encargan de enrutar los paquetes entre redes distintas.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "TCP y UDP son los dos tipos de cable que se utilizan para conectar físicamente las redes entre sí.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Por qué se usa UDP en videollamadas en vivo?",
      opciones: [
        {
          id: "a",
          texto:
            "Por su baja latencia: retransmitir un paquete que llegó tarde sería inútil, así que prioriza la velocidad.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Porque UDP es el que garantiza que absolutamente cada cuadro de la videollamada llegue en perfecto orden.",
          correcto: false,
        },
      ],
    },
  },

  "Sesión": {
    p1: {
      pregunta:
        "Cuando haces una videollamada de Zoom de 1 hora, ¿qué capa del OSI mantiene esa conexión abierta toda la llamada?",
      opciones: [
        {
          id: "a",
          texto:
            "La capa de sesión: abre, mantiene y cierra la sesión entre aplicaciones, sincronizando el diálogo largo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de sesión, que es la que se encarga de abrir y de cerrar las conexiones entre las aplicaciones.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de transporte, ya que es TCP el que mantiene la conexión activa durante toda la videollamada.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Ninguna capa la sostiene: mientras no cuelgues, los datos de la llamada siguen llegando por su cuenta solos.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es la responsabilidad principal de la capa de sesión?",
      opciones: [
        {
          id: "a",
          texto:
            "Gestionar el diálogo entre dos aplicaciones: abrirlo, sincronizarlo, marcar puntos de control y cerrarlo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Cifrar los datos antes de transmitirlos para que nadie pueda leerlos mientras viajan a través de la red.",
          correcto: false,
        },
      ],
    },
  },

  "Presentación": {
    p1: {
      pregunta:
        "Cuando tu navegador recibe una página cifrada con HTTPS y la muestra bien, ¿qué capa del OSI participa en el descifrado y el formato?",
      opciones: [
        {
          id: "a",
          texto:
            "La de presentación: traduce datos entre la red y la app, y hace el cifrado, la compresión y los formatos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de presentación, que se encarga de dar formato y de cifrar los datos para que la app los entienda.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de aplicación, ya que es justamente la que interactúa de forma directa con el navegador del usuario.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Lo hace el propio navegador con su código interno; el modelo OSI no interviene para nada en ese descifrado.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál de estas tareas pertenece a la capa de presentación?",
      opciones: [
        {
          id: "a",
          texto:
            "El cifrado y el descifrado junto con la conversión del formato de los datos, como la codificación de caracteres.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Elegir la ruta que van a tomar los paquetes a medida que atraviesan las distintas redes hasta su destino.",
          correcto: false,
        },
      ],
    },
  },

  "Aplicación": {
    p1: {
      pregunta:
        "¿Por qué HTTP, FTP y SMTP son protocolos de la capa de aplicación y no de otra capa?",
      opciones: [
        {
          id: "a",
          texto:
            "Son la interfaz directa entre el software y la red: definen cómo se comunican las aplicaciones, no son la app.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque son justamente los protocolos que las aplicaciones utilizan de forma directa para poder comunicarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque se encargan de establecer la sesión de comunicación que hay entre el cliente y el servidor remoto.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque son las aplicaciones mismas que el usuario abre, como el correo, el navegador o el cliente de archivos.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿El navegador en sí es la capa de aplicación del modelo OSI?",
      opciones: [
        {
          id: "a",
          texto:
            "No: el navegador es la aplicación; la capa de aplicación son los protocolos, como HTTP, que ese navegador usa.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: el navegador es, de forma literal, lo que constituye la capa de aplicación dentro del modelo OSI.",
          correcto: false,
        },
      ],
    },
  },

  "HTTP/HTTPS": {
    p1: {
      pregunta: "¿Por qué los bancos usan HTTPS y no HTTP, y qué diferencia concreta hay?",
      opciones: [
        {
          id: "a",
          texto:
            "HTTPS cifra la comunicación con TLS/SSL, así nadie puede leer los datos; HTTP los manda en texto plano.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "HTTPS es la versión segura de HTTP porque se encarga de cifrar todos los datos que se transmiten por la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "HTTPS es el que se ocupa de traducir de forma segura el nombre del dominio hasta llegar a su dirección IP.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "HTTPS bloquea el acceso de los atacantes a la página instalando un antivirus dentro del servidor del banco.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué agrega técnicamente la 'S' de HTTPS?",
      opciones: [
        {
          id: "a",
          texto:
            "Una capa TLS/SSL que se encarga de cifrar la conexión y además de autenticar al servidor con el que hablas.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Una conexión por cable directa hacia el servidor del banco, que es justamente lo que la vuelve más rápida.",
          correcto: false,
        },
      ],
    },
  },

  DNS: {
    p1: {
      pregunta:
        "Cuando escribes 'google.com' en el navegador, ¿qué hace el DNS antes de que cargue la página?",
      opciones: [
        {
          id: "a",
          texto:
            "Traduce el nombre de dominio a su dirección IP; el equipo no se conecta usando un nombre, sino la IP.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Convierte el nombre del sitio en una dirección IP para que el navegador sepa con quién debe conectarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Se encarga de cifrar la conexión que tendrás con el sitio para que la comunicación viaje de forma segura.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Descarga la página completa de google.com y la guarda en tu equipo para poder mostrártela enseguida.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué pasa si la resolución DNS falla?",
      opciones: [
        {
          id: "a",
          texto:
            "El navegador no encuentra la IP, así que la página no carga aunque el servidor esté funcionando bien.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La página de todos modos carga correctamente, solo que aparece sin ninguna de sus imágenes ni recursos.",
          correcto: false,
        },
      ],
    },
  },

  "Dirección IP": {
    p1: {
      pregunta:
        "Tu celular y tu laptop están en la misma red WiFi. ¿Por qué cada uno necesita una dirección IP diferente?",
      opciones: [
        {
          id: "a",
          texto:
            "Para que el router sepa a quién entregar cada paquete; con la misma IP habría conflicto y datos mal dirigidos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque cada dispositivo necesita tener una dirección IP distinta para poder identificarse dentro de la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque es el DNS el que le pone a cada dispositivo su propio nombre para que de ese modo no choquen entre sí.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque cada dispositivo es de una marca diferente y es eso lo que le asigna su número propio dentro de la red.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es la diferencia entre una IP pública y una privada?",
      opciones: [
        {
          id: "a",
          texto:
            "Las privadas identifican dispositivos dentro de la red local; la pública identifica a toda la red en internet.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Las direcciones IP públicas son para los celulares y las direcciones IP privadas son para las computadoras.",
          correcto: false,
        },
      ],
    },
  },

  // ─── U4 · Lenguajes de Programación ──────────────────────────
  Algoritmo: {
    p1: {
      pregunta:
        "Tu amigo dice que una receta de cocina es un algoritmo. ¿Tiene razón? ¿Por qué?",
      opciones: [
        {
          id: "a",
          texto:
            "Sí, si tiene pasos precisos, ordenados y finitos que dan un resultado; 'sal al gusto' lo volvería ambiguo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Sí, porque una receta de cocina tiene una serie de pasos ordenados para llegar a un resultado concreto.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "No, porque un algoritmo no es más que una variable que se encarga de almacenar dentro de sí todos los pasos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "No, porque algo solo es un algoritmo si está escrito en un lenguaje de programación dentro de la computadora.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué propiedad es imprescindible para que algo sea un algoritmo?",
      opciones: [
        {
          id: "a",
          texto:
            "Que sea finito y que tenga pasos bien definidos y no ambiguos que lleven siempre a un resultado claro.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que esté escrito en un lenguaje de programación, porque si no lo está entonces no se le considera algoritmo.",
          correcto: false,
        },
      ],
    },
  },

  Variable: {
    p1: {
      pregunta:
        "En un programa que calcula el promedio de calificaciones, ¿qué papel juega una variable y qué la diferencia de una constante?",
      opciones: [
        {
          id: "a",
          texto:
            "Es un espacio de memoria con nombre cuyo valor puede cambiar; una constante como PI nunca cambia su valor.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es algo que guarda datos que sí pueden cambiar, al revés de una constante que siempre vale exactamente lo mismo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es el conjunto de pasos ordenados que el programa va siguiendo uno por uno para calcular ese promedio final.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es el chip de memoria RAM que está dentro de la computadora y donde se termina almacenando absolutamente todo.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Qué distingue a una variable de una constante?",
      opciones: [
        {
          id: "a",
          texto:
            "Que el valor de una variable se puede reasignar mientras corre el programa, y el de una constante no cambia.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que una variable siempre guarda números mientras que una constante guarda únicamente texto o palabras.",
          correcto: false,
        },
      ],
    },
  },

  "Estructura de control": {
    p1: {
      pregunta:
        "Un cajero verifica tu saldo antes de darte dinero y, si no hay suficiente, muestra un error. ¿Qué tipo de estructura de control es?",
      opciones: [
        {
          id: "a",
          texto:
            "Una selección (if/else): evalúa una condición y ejecuta un bloque u otro según si esa condición se cumple.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una estructura de selección o condicional, que ejecuta un código distinto dependiendo de una condición dada.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una estructura de iteración, porque el cajero repite esa misma verificación cada vez que haces una operación.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Una variable, porque lo que hace es guardar el saldo de la cuenta para después poder compararlo con el monto.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es la diferencia central entre una selección (if) y una iteración (bucle)?",
      opciones: [
        {
          id: "a",
          texto:
            "La selección decide si ejecutar un bloque una vez según la condición; la iteración lo repite mientras se cumpla.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La selección ejecuta el código en orden y la iteración es la que se encarga de elegir entre dos opciones.",
          correcto: false,
        },
      ],
    },
  },

  Compilado: {
    p1: {
      pregunta:
        "Un programa en C se compila una vez y se distribuye como ejecutable (.exe). ¿Qué ventaja concreta tiene sobre uno interpretado?",
      opciones: [
        {
          id: "a",
          texto:
            "El compilador traduce todo a lenguaje máquina antes; así corre directo en el hardware y resulta más rápido.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Los lenguajes compilados son más rápidos porque el código se traduce a lenguaje máquina antes de ejecutarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Los lenguajes compilados van ejecutando el código línea por línea y en tiempo real mientras el programa corre.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El .exe es más rápido porque ocupa mucho menos espacio en el disco duro que el código fuente original.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Un .exe ya compilado necesita el compilador instalado en la máquina donde corre?",
      opciones: [
        {
          id: "a",
          texto:
            "No: como ya es código máquina, el compilador solo hace falta para construirlo, pero no para ejecutarlo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: el compilador tiene que estar presente e instalado cada vez que el programa se vuelve a ejecutar.",
          correcto: false,
        },
      ],
    },
  },

  Interpretado: {
    p1: {
      pregunta: "Python es interpretado. ¿Qué significa eso en la práctica al ejecutar un script línea por línea?",
      opciones: [
        {
          id: "a",
          texto:
            "El intérprete lee y ejecuta cada línea en el momento; si falla la 50, corre las 49 previas y se detiene ahí.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Que ejecuta el código directamente sin compilarlo primero, yendo línea por línea conforme va avanzando.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Que el código se traduce por completo a lenguaje máquina antes de ejecutarse, y justo por eso resulta lento.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Que 'interpretado' significa que el programa se traduce a otro idioma humano, como pasarlo del inglés al español.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Por qué un programa interpretado necesita el intérprete en la máquina que lo ejecuta?",
      opciones: [
        {
          id: "a",
          texto:
            "Porque el código se traduce y se ejecuta en el momento; sin el intérprete no hay nada que pueda ejecutarlo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Porque es el intérprete el que se encarga de guardar de forma permanente todas las variables del programa.",
          correcto: false,
        },
      ],
    },
  },

  Imperativo: {
    p1: {
      pregunta: "En la programación imperativa le dices a la computadora CÓMO hacer algo. ¿Qué ejemplo lo ilustra mejor?",
      opciones: [
        {
          id: "a",
          texto:
            "Un bucle for que suma una lista: defines cada paso (inicia, verifica, suma, incrementa) y controlas el flujo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Escribir instrucciones paso a paso que la computadora va siguiendo una por una en orden, como en C o en Java.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Describir solamente qué resultado quieres obtener sin tener que decir cómo conseguirlo, tal como pasa en SQL.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El paradigma que vuelve más rápido al programa porque está diseñado para usar la menor memoria posible.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "¿Cuál es el rasgo clave del paradigma imperativo?",
      opciones: [
        {
          id: "a",
          texto:
            "Que especificas de forma explícita la secuencia de pasos y los cambios de estado, es decir el CÓMO se hace.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que solo describes el resultado que deseas y es el sistema el que se encarga de decidir los pasos a seguir.",
          correcto: false,
        },
      ],
    },
  },

  Declarativo: {
    p1: {
      pregunta:
        "En SQL escribes SELECT * FROM alumnos WHERE promedio > 8. ¿Por qué eso es programación declarativa y no imperativa?",
      opciones: [
        {
          id: "a",
          texto:
            "Porque describes QUÉ datos quieres, no CÓMO obtenerlos; el motor es el que elige la estrategia más eficiente.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque lo que haces es declarar aquello que quieres obtener sin tener que especificar los pasos para lograrlo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque escribes las instrucciones paso a paso que hacen falta para ir leyendo una por una las filas de la tabla.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque SQL en realidad no es un lenguaje de programación de verdad, solo sirve para guardar y leer datos.",
          nivel: 0,
        },
        { id: "no_se", texto: "No sé", nivel: 0 },
      ],
    },
    p2: {
      pregunta: "En la programación declarativa, ¿quién decide los pasos exactos para obtener el resultado?",
      opciones: [
        {
          id: "a",
          texto:
            "El sistema o motor, como el optimizador de consultas de la base de datos, y no la persona que programa.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El programador, que es quien tiene que escribir manualmente cada uno de los ciclos y de las condiciones.",
          correcto: false,
        },
      ],
    },
  },
};
