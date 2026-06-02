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
//   - opción nivel 2 → correcta, pero superficial o con un matiz flojo
//   - opción nivel 1 → confusión TENTADORA con un concepto hermano
//   - opción nivel 0 → una misconception real (no un absurdo de paja)
//   - "No sé"        → nivel 0
//
// p2: pregunta de profundidad (binaria), solo si eligió nivel 3.
//   - correcto: true  → nivel 3 final (lo puede enseñar)
//   - correcto: false → nivel 2 final (correcto pero superficial)
//
// PRINCIPIOS DE DISEÑO (para medir conocimiento real, no maña):
//   1. Sin distractores de paja. Las opciones incorrectas son
//      misconcepciones que un alumno a medias SÍ cree (switch vs hub,
//      MAC vs IP, variable vs tipo de dato, módem vs punto de acceso,
//      proceso vs programa en disco, etc.).
//   2. La correcta no se delata. No lleva el término clave entre
//      paréntesis ni es la única "técnica": los distractores usan
//      vocabulario técnico igual de seguro, pero aplicado mal.
//   3. El nivel 1 tienta. Nombra un concepto hermano con una
//      descripción que SUENA correcta, así reconocer la palabra clave
//      del enunciado no basta: hay que distinguirlo de sus vecinos.
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
            "La memoria de trabajo se satura y el sistema empieza a paginar al disco, que es muchísimo más lento que ella.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La memoria de trabajo se llena y, al no quedar libre, el sistema deja de responder hasta que cierras programas.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El procesador es el cuello de botella: con tantos programas no alcanza a ejecutar todas las instrucciones a tiempo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El disco se está llenando y, sin espacio libre, ya no logra manejar tantos programas abiertos a la vez.",
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
            "Traslada parte de los datos a un área de intercambio en el disco, lo que vuelve el acceso mucho más lento.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Mueve los datos a la memoria caché del procesador, que es más rápida, para descongestionar la RAM saturada.",
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
            "El que ejecuta las instrucciones: más frecuencia de reloj y más núcleos resuelven más operaciones por segundo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El procesador del amigo es más potente; a mayor número de núcleos, cualquier programa corre proporcionalmente más rápido.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La memoria de trabajo: el amigo tiene más cantidad y con más memoria el mismo programa se ejecuta más rápido.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El disco de estado sólido del amigo lee el programa mucho más rápido, así que termina antes de procesarlo.",
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
            "Subir la frecuencia de reloj de cada núcleo para que las instrucciones individuales se procesen más rápido.",
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
            "Cada uno es una instancia en ejecución de un programa, con su propio espacio de memoria y su cuota de CPU.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Cada uno es un programa que el sistema tiene corriendo; mientras su ventana siga abierta, ese proceso existe.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Cada uno es un hilo que el procesador va atendiendo en uno de sus núcleos durante el tiempo que está activo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Cada uno es el programa instalado, es decir el conjunto de archivos que ocupa guardado en el disco del equipo.",
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
            "El programa es el código que escribe el desarrollador y el proceso es ese mismo código una vez compilado.",
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
            "El sistema reparte el tiempo de CPU entre los procesos en intervalos brevísimos, dando la ilusión de simultaneidad.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El sistema mantiene varios programas activos y el procesador los atiende a todos en paralelo de forma continua.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El sistema permite que distintos usuarios trabajen a la vez sin que sus sesiones interfieran entre sí.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El sistema asigna un núcleo del procesador a cada programa, de modo que cada uno corre en el suyo propio.",
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
            "Alterna entre los procesos a gran velocidad; en cada instante se ejecuta solo uno, pero no lo percibes.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Divide el único núcleo en varios núcleos virtuales para correr cada proceso en paralelo real y verdadero.",
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
            "Mantiene sesiones independientes, con permisos y recursos propios, para cada usuario conectado al mismo tiempo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Permite que varios usuarios entren a la vez y trabajen sobre los mismos recursos compartidos del servidor.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Ejecuta en paralelo los procesos de todos los alumnos para repartir el trabajo del servidor entre ellos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Arranca una máquina virtual independiente y completa para cada alumno en el momento en que inicia sesión.",
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
            "Que la carga de trabajo se reparta por igual entre todos los usuarios que estén conectados en ese momento.",
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
            "ls, o dir en Windows: muestra los archivos de la carpeta y entra en ella para que trabajes dentro.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "cd, que te sitúa en el directorio donde estás y de paso te muestra todo lo que ese directorio contiene.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "pwd, que imprime la carpeta actual junto con la lista de los archivos que se encuentran guardados en ella.",
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
            "Los permisos y el tamaño de cada archivo, mostrando sus detalles completos en lugar de solo el nombre.",
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
            "cd Documentos/Tareas cambia el directorio actual; la ruta puede darse relativa o absoluta desde la raíz.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "cd Documentos/Tareas te mueve a esa carpeta, siempre que escribas la ruta completa desde donde te encuentras.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "ls Documentos/Tareas, que te lleva hasta esa carpeta y enseguida lista el contenido que tiene dentro.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "cd /Documentos/Tareas, porque toda ruta debe empezar en la raíz para que el sistema logre encontrarla.",
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
            "`cd ..` regresa a la última carpeta en la que estabas y `cd /` te lleva a tu carpeta personal de usuario.",
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
            "mkdir proyecto crea el directorio en tu ubicación actual; si el nombre ya existe, el comando devuelve un error.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "mkdir proyecto crea la carpeta nueva y te deja dentro de ella para que empieces a trabajar de inmediato.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "cd proyecto, que genera la carpeta nueva en donde estás y al instante te posiciona dentro de ella.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "touch proyecto, que crea el nuevo elemento llamado 'proyecto' dentro del directorio en el que te encuentras.",
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
            "Crea toda la jerarquía anidada a, b y c de una vez, aunque los directorios intermedios todavía no existan.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Crea las tres carpetas a, b y c una junto a la otra, todas dentro del directorio actual en el que estás.",
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
            "ping google.com envía paquetes al destino y mide cuánto tarda en responder; si contesta, hay conectividad.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "ping google.com comprueba si el sitio está disponible; si responde, su página web está funcionando bien.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "nslookup google.com, que verifica si tu equipo logra comunicarse correctamente con ese servidor remoto.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "ipconfig google.com, que muestra el estado actual de la conexión que tienes establecida hacia ese sitio.",
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
            "Que el servidor del sitio está apagado, ya que de estar encendido siempre respondería a cualquier ping.",
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
            "Una red de área local: cubre un espacio reducido y permite a los dispositivos compartir recursos entre sí.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una LAN, una red local que conecta los dispositivos a través del router para que puedan navegar en internet.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una WAN, porque al conectarse todos a internet pasan a formar parte de una red de alcance amplio y extenso.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Una intranet, ya que es una red privada protegida a la que solo entran los dispositivos autorizados de la casa.",
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
            "Sí: sin internet el router no puede asignar las direcciones que conectan a los dispositivos entre ellos.",
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
            "Una red de área amplia: enlaza redes separadas por grandes distancias, casi siempre sobre infraestructura ajena.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una WAN, que une las dos oficinas; a diferencia de una LAN alcanza otras ciudades porque transmite más rápido.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una sola LAN distribuida, pues en el fondo sigue siendo la red interna y privada de una misma empresa.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Una VPN, ya que es la tecnología que comunica de forma segura dos sucursales remotas a través de internet.",
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
            "De la empresa, que tiende su propio cableado de fibra óptica entre las dos ciudades para conectarlas.",
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
            "Internet es una red pública y global de redes unidas por TCP/IP; una WAN puede ser privada y es solo una parte.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Internet enlaza redes de todo el mundo bajo un mismo estándar; una WAN hace lo mismo pero a menor escala.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Son lo mismo a distinta escala: Internet no es más que una red WAN que llegó a tener tamaño mundial.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Internet es el servicio que contratas con tu proveedor para que el navegador pueda acceder a las páginas.",
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
            "La fibra óptica submarina, que es el medio físico encargado de enlazar a todas las redes del planeta.",
          correcto: false,
        },
      ],
    },
  },

  Router: {
    p1: {
      pregunta:
        "El equipo que conecta tu red de casa (192.168.1.x) con internet y dirige el tráfico entre ambas. ¿Cuál es y cómo decide por dónde sale cada paquete?",
      opciones: [
        {
          id: "a",
          texto:
            "El router: trabaja en la capa de red y, con sus tablas de enrutamiento, elige la salida según la IP de destino.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El router, el equipo que une tu red local con internet y reparte la conexión entre todos tus dispositivos.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El switch, que dirige cada paquete al equipo correcto leyendo la dirección de destino que lleva indicada.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El módem, que traduce la señal del proveedor y de paso decide la ruta que toman los datos hacia internet.",
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
            "En la capa de red, la capa 3, donde toma sus decisiones usando las direcciones IP de destino de los paquetes.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "En la capa de transporte, la capa 4, porque se encarga de la entrega de los paquetes de un extremo al otro.",
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
            "Un switch: conecta los equipos de una LAN y, leyendo la dirección MAC, entrega cada trama solo a su destinatario.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Un switch, que enlaza los equipos de la red y reenvía a todos los puertos los datos que le van llegando.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Un router, que es el dispositivo necesario para que los equipos de la oficina puedan encontrarse entre ellos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Un hub, que reparte la señal que recibe entre todos los equipos conectados para que logren comunicarse.",
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
            "Consulta una tabla de direcciones MAC que va aprendiendo y envía la trama solo al puerto que corresponde.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Consulta la dirección IP de destino de la trama para elegir a qué puerto debe reenviarla en cada caso.",
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
            "Recibe la petición del cliente, localiza el recurso solicitado y lo devuelve; provee servicios a otros equipos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es la computadora que guarda la página y la envía cada vez que un usuario la solicita desde su navegador.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es el equipo que encamina tu petición por internet hasta dar con la página correcta que estás buscando.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es el centro de datos físico del proveedor donde se alojan en conjunto todas las páginas que hay en internet.",
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
            "El cliente es quien envía la petición, y el servidor permanece a la espera para poder responderla.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Suele ser el servidor, que contacta primero al cliente para ofrecerle el servicio y abrir la comunicación.",
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
            "El módem adapta la señal entre tu red y el medio del proveedor, modulándola y demodulándola; el router solo la reparte.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El módem trae internet a casa desde el proveedor y el router lo reparte; sin módem el router no tendría señal.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "No hacen falta los dos: el módem y el router cumplen la misma función y muchos equipos ya los combinan en uno.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El módem es el aparato que emite la señal WiFi a la que se conectan todos los dispositivos de la casa.",
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
            "Reparte la conexión entrante creando la red WiFi y asignando una dirección a cada dispositivo conectado.",
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
            "Transmite los bits en bruto por el medio y se ocupa del voltaje y la temporización; ejemplos: cables, fibra, WiFi.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es la capa más baja; envía los datos por el cable o el aire hasta el siguiente equipo de la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es la capa que pone las tramas en el cable y se asegura de que lleguen sin errores hasta el otro extremo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es la capa formada por el hardware de red del equipo: la tarjeta de red, el router y el switch que utiliza.",
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
            "La tarjeta de red del equipo, que es la que coloca los datos en el cable para poder transmitirlos.",
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
            "Entrega datos de forma fiable entre dos nodos directamente enlazados, detecta errores y direcciona con MAC.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Coordina la comunicación entre los equipos de la red usando las direcciones MAC para que los datos lleguen bien.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Decide la ruta que siguen los paquetes entre redes apoyándose en la dirección física de cada equipo.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Establece y mantiene la conexión lógica entre las dos aplicaciones que se están comunicando entre ellas.",
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
            "Direcciones IP, que identifican a cada equipo para que la trama logre llegar hasta su destino final.",
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
            "La capa de red: encamina los paquetes entre redes distintas usando direcciones IP, y es donde operan los routers.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de red, que con las direcciones IP lleva cada paquete por el mejor camino hasta llegar a su destino.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de transporte, que se asegura de que los datos lleguen completos y en orden de un extremo al otro.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "La capa de enlace, que usa las direcciones MAC para ir llevando los datos de un equipo al siguiente.",
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
            "El router, que es el que elige la ruta de cada paquete según la dirección IP de su destino.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El switch, que dirige los datos entre redes leyendo la dirección de destino que lleva cada paquete.",
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
            "Son de la capa de transporte: TCP asegura entrega ordenada y sin errores; UDP es más veloz pero sin garantías.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "TCP confirma que los datos lleguen y UDP no; por eso UDP es más rápido y se usa cuando da igual perder algo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Son los dos protocolos de la capa de red que deciden la ruta que siguen los paquetes a través de internet.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "TCP es para páginas web y UDP para descargar archivos; cada aplicación elige uno según el tipo de tarea.",
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
            "Por su baja latencia: reenviar un paquete que llegó tarde no sirve de nada, así que prioriza la rapidez.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Porque UDP corrige los errores más rápido que TCP y así la imagen de la llamada se ve sin ningún corte.",
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
            "La capa de sesión: abre, mantiene y cierra el diálogo entre las dos aplicaciones y lo sincroniza durante la llamada.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de sesión, encargada de iniciar y de terminar la conexión entre las aplicaciones que se comunican.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de transporte, ya que es TCP quien sostiene abierta la conexión mientras dura la videollamada.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "La capa de aplicación, porque es Zoom el programa que mantiene activa la llamada hasta que decides colgar.",
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
            "Gestionar el diálogo entre dos aplicaciones: iniciarlo, sincronizarlo, marcar puntos de control y cerrarlo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Mantener viva la conexión reenviando los paquetes que se llegan a perder durante la comunicación.",
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
            "La de presentación: traduce los datos entre la red y la app, y se ocupa del cifrado, la compresión y el formato.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "La capa de presentación, que da formato a los datos y los cifra para que la aplicación pueda mostrarlos.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La capa de aplicación, que es la que recibe la página y la entrega directamente al navegador del usuario.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "La capa de transporte, ya que es ahí donde se aplica el cifrado TLS antes de mandar los datos por la red.",
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
            "La apertura y el cierre de la sesión de comunicación que mantienen entre sí las dos aplicaciones.",
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
            "Son la interfaz entre el software y la red: definen cómo dialogan las aplicaciones, pero no son la app en sí.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque son los protocolos que las aplicaciones usan directamente para enviar y recibir su información.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque se encargan de dar formato y de cifrar los datos antes de que la aplicación termine por mostrarlos.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque son los programas que el usuario abre, como el navegador, el cliente de correo o el de transferencia.",
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
            "Sí: la capa de aplicación es justamente el programa con el que el usuario interactúa de forma directa.",
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
            "HTTPS cifra la comunicación con TLS, así nadie en el camino puede leerla; HTTP la envía toda en texto plano.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "HTTPS es la versión segura de HTTP porque cifra los datos para que viajen protegidos a través de la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "HTTPS traduce de forma segura el nombre del banco a su dirección para que no te redirijan a un sitio falso.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "HTTPS revisa con un antivirus que la página del banco esté libre de amenazas antes de mostrártela en pantalla.",
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
            "Una capa TLS que cifra la conexión y además autentica que el servidor es de verdad quien dice ser.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Una contraseña extra que el servidor pide para confirmar la identidad del usuario antes de dejarlo conectar.",
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
            "Traduce el nombre de dominio a su dirección IP; el equipo no se conecta usando el nombre, sino esa IP.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Convierte el nombre del sitio en su dirección IP para que el navegador sepa a qué servidor pedir la página.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Asigna al sitio la dirección IP con la que se va a identificar mientras dure tu conexión con él.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Guarda en caché la página de google.com para que cargue más rápido la próxima vez que decidas entrar.",
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
            "El navegador no obtiene la IP, así que la página no carga aunque el servidor esté funcionando bien.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La página carga igual, pero más lento, porque el equipo debe buscar el servidor por otros medios.",
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
            "Para que el router sepa a cuál entregar cada paquete; con la misma IP habría conflicto y los datos llegarían mal.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque cada dispositivo necesita su propia IP para identificarse y recibir lo que le corresponde en la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque la IP es el identificador físico único que cada dispositivo trae de fábrica para poder distinguirse.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque cada dispositivo abre su propia conexión con el proveedor y este le entrega a cada uno una IP distinta.",
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
            "La pública es la que el proveedor asigna a cada equipo y la privada es la que tú configuras de forma manual.",
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
            "Sí, si sus pasos son precisos, ordenados y finitos y dan un resultado; un 'sal al gusto' la volvería ambigua.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Sí, porque es una secuencia de pasos ordenados que, al seguirlos, llevan a obtener un resultado concreto.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "No del todo, porque a un algoritmo le faltarían las variables y los bucles que sí tiene cualquier programa.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "No, porque un algoritmo es la fórmula matemática que resuelve un problema, no una lista de pasos cotidianos.",
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
            "Que sea finito y que tenga pasos bien definidos y no ambiguos que lleven siempre al mismo resultado.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que pueda traducirse a código para que una computadora llegue a ejecutarlo de forma automática.",
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
            "Es un espacio de memoria con nombre cuyo valor puede cambiar; una constante como PI conserva siempre el mismo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es un dato que puede cambiar de valor, al contrario de una constante, que guarda siempre el mismo valor fijo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es la instrucción que recorre las calificaciones una a una para irlas sumando y sacar así el promedio.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es el tipo de dato, como entero o decimal, que define qué clase de número se va a guardar en el programa.",
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
            "Que la variable se guarda en la memoria RAM y la constante queda grabada en el disco junto con el programa.",
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
            "Una selección: evalúa una condición y, según se cumpla o no, ejecuta uno u otro bloque de instrucciones.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Una condicional, que ejecuta un bloque distinto dependiendo de si se cumple o no la condición del saldo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una iteración, porque el sistema repite la comprobación del saldo hasta que la operación pueda completarse.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Una función, ya que agrupa los pasos de verificar el saldo y mostrar el error dentro de una sola operación.",
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
            "La selección elige entre dos caminos y la iteración entre varios, pero ninguna de las dos repite instrucciones.",
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
            "El compilador traduce todo a lenguaje máquina por adelantado, así corre directo en el hardware y es más rápido.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es más rápido porque ya está traducido a lenguaje máquina antes de ejecutarse, sin traducir nada durante la corrida.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Es más rápido porque el procesador va leyendo y ejecutando el .exe línea por línea conforme el programa avanza.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Es más rápido porque el archivo .exe es más pequeño y ligero que el código fuente del que proviene.",
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
            "Sí: el compilador debe volver a traducir el .exe al lenguaje de cada computadora donde se vaya a ejecutar.",
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
            "El intérprete lee y ejecuta cada línea en el momento; si la 50 falla, ya corrió las 49 previas y se detiene ahí.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Que el código se ejecuta directamente, sin compilarse antes, traduciéndose paso a paso a medida que avanza.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Que primero se traduce por completo a lenguaje máquina y luego ese resultado se ejecuta de una sola vez.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Que necesita estar conectado a internet para que el servidor de Python vaya interpretando el código por ti.",
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
            "Porque el código se traduce y se ejecuta en el momento; sin el intérprete no hay nada que pueda correrlo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Porque el intérprete contiene las librerías del lenguaje sin las cuales el programa no podría funcionar.",
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
            "Un bucle for que suma una lista: defines cada paso —inicio, condición, suma, avance— y controlas el flujo.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Escribir las instrucciones paso a paso que la máquina sigue en orden, como se hace en lenguajes tipo C o Java.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Indicar el resultado que quieres y dejar que el sistema resuelva cómo obtenerlo, como en una consulta SQL.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Dar órdenes directas al procesador en su lenguaje de máquina, sin pasar por ningún lenguaje de alto nivel.",
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
            "Que detallas de forma explícita la secuencia de pasos y los cambios de estado, es decir el CÓMO se hace.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que escribes el código en el mismo orden exacto en que el usuario irá viendo los resultados en pantalla.",
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
            "Porque describes QUÉ datos quieres, no CÓMO obtenerlos; es el motor el que decide la estrategia para conseguirlos.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Porque declaras el resultado que esperas sin escribir los pasos concretos que hacen falta para llegar a él.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Porque indicas paso a paso cómo recorrer la tabla y comparar el promedio de cada fila una por una.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Porque SQL solo consulta datos ya guardados, y por eso no se considera realmente un lenguaje de programación.",
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
            "El motor del sistema, como el optimizador de consultas de la base de datos, y no la persona que programa.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El programador, que dentro del SELECT define el orden en que se deben recorrer y filtrar todas las filas.",
          correcto: false,
        },
      ],
    },
  },
};
