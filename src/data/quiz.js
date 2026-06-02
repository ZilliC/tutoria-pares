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
//   - opción nivel 2 → correcta con imprecisión sutil
//   - opción nivel 1 → confusión con un concepto del MISMO tema
//   - opción nivel 0 → confusión con un concepto de OTRO dominio
//   - "No sé"        → nivel 0
//
// p2: pregunta de profundidad (binaria), solo si eligió nivel 3.
//   - correcto: true  → nivel 3 final (lo puede enseñar)
//   - correcto: false → nivel 2 final (correcto pero superficial)
//
// NOTA: las opciones de cada pregunta se redactan con longitud
// similar para que la correcta no se delate por ser la más larga,
// y se barajan en tiempo de ejecución para evitar sesgo de posición.
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
            "La memoria temporal de los procesos activos se llenó y el sistema recurre al disco, que es mucho más lento.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La memoria de trabajo donde la computadora maneja los programas abiertos se quedó sin espacio libre.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El procesador se saturó porque tiene que ejecutar al mismo tiempo las instrucciones de demasiados programas.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El router no logra gestionar tantas conexiones de red abiertas a la vez y eso termina frenando el equipo.",
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
            "El componente que ejecuta las instrucciones: con más frecuencia o más núcleos procesa más operaciones por segundo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El procesador, porque es la parte de la computadora encargada de correr y resolver los programas.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La memoria de trabajo, ya que si tu amigo tiene más cantidad el programa logra abrirse mucho más rápido.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El servidor DNS que usa tu amigo es mejor y por eso consigue que el programa cargue en menos tiempo.",
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
            "Cada uno ocupa de forma permanente un núcleo completo del procesador todo el tiempo que está abierto.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Cada uno es un paquete de datos que viaja por la red hasta llegar al servidor que lo está solicitando.",
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
            "El sistema alterna el CPU entre procesos tan rápido que parece simultáneo, dando fracciones de tiempo a cada uno.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una función del sistema que le permite tener varios programas ejecutándose al mismo tiempo sin cerrarse.",
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
            "Una red local que conecta varios dispositivos entre sí para que puedan trabajar juntos de forma coordinada.",
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
        "En una universidad, 30 alumnos se conectan al mismo servidor Linux con sus cuentas y trabajan de forma independiente. ¿Qué característica del SO lo permite?",
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
            "Una función que permite correr varios procesos al mismo tiempo dentro del servidor para repartir el trabajo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Un switch que conecta a todas las computadoras de la red para que lleguen juntas hasta el mismo servidor.",
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
        "Estás en la terminal y quieres saber qué archivos hay en la carpeta donde te encuentras. ¿Qué comando usas?",
      opciones: [
        {
          id: "a",
          texto:
            "ls en Linux (o dir en Windows): lista los archivos y carpetas del directorio actual donde estás situado.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El comando ls en Linux, o dir en Windows, que sirve para listar los archivos que hay en la carpeta.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El comando cd, que sirve para ver en qué directorio te encuentras y también todo lo que contiene dentro.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "La instrucción SELECT, que se usa para consultar y traer los archivos guardados dentro de la carpeta.",
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
            "Escribo cd Documentos/Tareas, que es el comando que sirve para cambiarme de una carpeta a otra distinta.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Escribo ls Documentos/Tareas, que me permite entrar a esa carpeta y a la vez ver el contenido que tiene.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Escribo ping Documentos/Tareas, que envía una señal hasta la carpeta para poder llegar hasta ella.",
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
            "mkdir proyecto crea el directorio; si ya existe da error, y con mkdir -p se crean carpetas anidadas.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Uso el comando mkdir proyecto, que es el que sirve para crear una carpeta nueva donde me encuentro.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Uso el comando cd proyecto, que crea la carpeta y al mismo tiempo me mete dentro de ella para trabajar.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Uso la instrucción DNS proyecto, que registra el nombre de la carpeta para que el sistema la reconozca.",
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
            "Uso ping google.com, que sirve para verificar si existe conexión entre mi equipo y ese host concreto.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Uso mkdir google.com, que se encarga de crear y dejar establecida la conexión con el host que indico.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Uso SELECT google.com, que consulta directamente el estado en el que se encuentra el servidor remoto.",
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
            "Una LAN, que es básicamente una red local pensada para conectar dispositivos que están físicamente cerca.",
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
            "Un proceso, porque es el sistema operativo el que se encarga de administrar todos esos dispositivos juntos.",
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
            "Una WAN, porque se encarga de conectar entre sí ubicaciones que están en ciudades diferentes y lejanas.",
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
            "Una multitarea, porque es lo que permite manejar varias de esas conexiones al mismo tiempo sin saturarse.",
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
            "Internet es la gran red global que se encarga de conectar entre sí a las computadoras de todo el mundo.",
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
            "Internet es en realidad un programa que se ejecuta dentro del navegador para poder mostrar las páginas.",
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
            "El CPU, que es el componente que procesa y decide internamente hacia qué lugar tienen que ir los datos.",
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
            "Un switch: conecta equipos de una LAN y envía los datos solo al destino usando las direcciones MAC.",
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
            "Un algoritmo, que se encarga de organizar y de ordenar las conexiones entre todas las computadoras.",
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
            "El servidor es el router que se ocupa de dirigir la petición hasta la página correcta que se le pidió.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El servidor es una variable que guarda la página completa dentro del programa para mostrarla después.",
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
            "El módem es un proceso que el sistema operativo ejecuta cada vez que la computadora quiere conectarse.",
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
            "Es la capa donde el CPU se encarga de ejecutar una por una las instrucciones que componen el programa.",
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
            "Se encarga de guardar todos los datos dentro de una variable para que después se puedan enviar por la red.",
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
            "La multitarea, que es justo lo que va alternando el envío de los datos para que todos puedan avanzar.",
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
            "TCP y UDP son variables de programación que se utilizan para guardar datos mientras corre el programa.",
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
            "La memoria RAM, que es la que se va encargando de ir guardando los datos generados durante la llamada.",
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
            "El compilador, que es el encargado de traducir el código del programa para que la máquina lo pueda ejecutar.",
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
            "Porque en el fondo no son más que procesos que el sistema operativo se encarga de ejecutar cuando hacen falta.",
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
            "HTTPS es básicamente un CPU más rápido y potente que se instala en el servidor del banco para protegerlo.",
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
            "Es la variable que guarda el sitio web dentro del programa para poder volver a mostrarlo más adelante.",
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
            "Porque cada dispositivo ejecuta un proceso diferente y por esa misma razón necesita también otro número.",
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
            "No, porque un algoritmo solamente puede existir dentro del CPU en forma de señales eléctricas internas.",
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
            "Un router, que es el dispositivo que se encarga de decidir hacia qué lugar tiene que enviar el dinero.",
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
            "Los lenguajes compilados necesitan que haya un router disponible para poder distribuir el archivo .exe.",
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
            "Que se interpreta porque hay un servidor remoto que es el que se encarga de leerlo desde la distancia.",
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
            "Que el programa termine ejecutándose directamente dentro de la capa física de la red de computadoras.",
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
            "Porque el lenguaje SQL se termina ejecutando dentro de un servidor que está alojado en algún lugar de la nube.",
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
