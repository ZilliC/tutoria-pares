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
            "Se llenó la memoria temporal donde el sistema guarda los datos de los procesos activos; al agotarse, recurre al disco, que es mucho más lento.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Se llenó la memoria de trabajo de la computadora.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "El procesador se saturó porque tiene que ejecutar las instrucciones de demasiados programas.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "El router no puede manejar tantas conexiones de red al mismo tiempo.",
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
            "Mueve datos a un espacio del disco (memoria de intercambio/swap), lo que aumenta mucho el tiempo de acceso.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Borra automáticamente los programas que menos se usan para liberar espacio.",
          correcto: false,
        },
      ],
    },
  },

  CPU: {
    p1: {
      pregunta:
        "Un programa tarda 10 segundos en tu computadora y solo 2 segundos en la de tu amigo, con la misma app. ¿Qué componente explica mejor la diferencia?",
      opciones: [
        {
          id: "a",
          texto:
            "El componente que ejecuta las instrucciones del programa: con mayor frecuencia o más núcleos procesa más operaciones por segundo.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "El procesador, porque es el que corre los programas.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "La memoria de trabajo: si tu amigo tiene más, el programa se abre más rápido.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Un mejor servidor DNS, porque eso hace que el programa cargue más rápido.",
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
            "Ejecutar varias instrucciones o hilos en paralelo, realmente al mismo tiempo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que cada instrucción individual se ejecute automáticamente más rápido.",
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
            "Cada uno es una instancia de un programa en ejecución, con su propio espacio de memoria y tiempo de CPU asignado por el sistema.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Cada uno es un programa que está corriendo.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Cada uno ocupa de forma permanente un núcleo del procesador mientras está abierto.",
          nivel: 1,
        },
        {
          id: "d",
          texto:
            "Cada uno es un paquete de datos que viaja por la red hacia el servidor.",
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
            "El programa es el archivo guardado en disco; el proceso es ese programa cargado en memoria y en ejecución.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Son lo mismo: proceso es solo otra palabra para programa.",
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
            "El sistema alterna el uso del CPU entre procesos tan rápido que parece simultáneo, dándole a cada uno pequeñas fracciones de tiempo.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Una función que permite ejecutar varios programas a la vez.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una función que permite que varias personas usen la computadora al mismo tiempo.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Una red local (LAN) que conecta varios dispositivos a la vez.",
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
            "El sistema alterna rapidísimo entre procesos; en cada instante solo corre uno, pero el cambio es imperceptible.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Un solo núcleo ejecuta de verdad todos los procesos exactamente al mismo tiempo.",
          correcto: false,
        },
      ],
    },
  },

  Multiusuario: {
    p1: {
      pregunta:
        "En una universidad, 30 alumnos se conectan al mismo servidor Linux con sus propias cuentas y trabajan de forma independiente. ¿Qué característica del SO lo permite?",
      opciones: [
        {
          id: "a",
          texto:
            "El sistema gestiona sesiones, permisos y recursos separados para cada usuario conectado simultáneamente al mismo equipo.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Una función que permite que varios usuarios usen el sistema a la vez.",
          nivel: 2,
        },
        {
          id: "c",
          texto:
            "Una función que permite correr varios procesos al mismo tiempo en el servidor.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Un switch que conecta a todas las computadoras de la red.",
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
            "Que todos los usuarios compartan los mismos archivos y configuración para colaborar.",
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
            "ls en Linux (o dir en Windows): lista archivos y carpetas del directorio actual; con ls -la también muestra permisos, tamaño y archivos ocultos.",
          nivel: 3,
        },
        { id: "b", texto: "ls en Linux o dir en Windows, para listar archivos.", nivel: 2 },
        {
          id: "c",
          texto: "cd, para ver en qué directorio estás y qué contiene.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "SELECT, para consultar los archivos de la carpeta.",
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
          texto: "Los archivos ocultos (los que empiezan con un punto).",
          correcto: true,
        },
        {
          id: "b",
          texto: "Los archivos ordenados alfabéticamente.",
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
            "cd Documentos/Tareas — cambia el directorio de trabajo actual; la ruta puede ser relativa (desde donde estás) o absoluta (desde la raíz).",
          nivel: 3,
        },
        { id: "b", texto: "cd Documentos/Tareas, para cambiar de carpeta.", nivel: 2 },
        {
          id: "c",
          texto: "ls Documentos/Tareas, para entrar y ver el contenido.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "ping Documentos/Tareas, para llegar a la carpeta.",
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
            "`cd ..` sube un nivel al directorio padre; `cd /` va directo a la raíz del sistema de archivos.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Ambos regresan al directorio personal del usuario (home).",
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
            "mkdir proyecto — crea el directorio; si ya existe da error, y con mkdir -p puedes crear directorios anidados sin error.",
          nivel: 3,
        },
        { id: "b", texto: "mkdir proyecto, para crear una nueva carpeta.", nivel: 2 },
        { id: "c", texto: "cd proyecto, para crear y entrar a la carpeta.", nivel: 1 },
        {
          id: "d",
          texto: "DNS proyecto, para registrar el nombre de la carpeta.",
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
            "Crea toda la cadena anidada a, b y c, aunque los directorios intermedios no existan.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Crea solo la última carpeta c y falla si a o b no existen.",
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
            "ping google.com — envía paquetes al destino y mide el tiempo de respuesta (latencia en ms); si hay respuesta, la conexión funciona.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "ping google.com, para verificar si hay conexión con ese host.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "mkdir google.com, para crear la conexión con el host.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "SELECT google.com, para consultar el estado del servidor.",
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
            "Que puede haber un problema de conexión, el host caído o el ICMP bloqueado por un firewall; no necesariamente que el sitio esté caído para todos.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Que tu internet está siempre completamente desconectado.",
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
            "Una red de área local: cubre un espacio pequeño como una casa u oficina y permite compartir recursos (impresoras, archivos) entre dispositivos cercanos.",
          nivel: 3,
        },
        { id: "b", texto: "Una LAN, una red local para dispositivos cercanos.", nivel: 2 },
        {
          id: "c",
          texto: "Una WAN, porque están conectados a internet, que es global.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Un proceso, porque el sistema operativo administra los dispositivos.",
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
            "No: los dispositivos de una LAN pueden compartir archivos e impresoras entre sí sin ninguna conexión a internet.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Sí: sin internet, una LAN no puede conectar sus dispositivos.",
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
            "Una red de área amplia: conecta redes separadas geográficamente, normalmente usando infraestructura de terceros como fibra o satélite.",
          nivel: 3,
        },
        { id: "b", texto: "Una WAN, porque conecta ubicaciones en distintas ciudades.", nivel: 2 },
        {
          id: "c",
          texto: "Una LAN extendida, porque sigue siendo la red interna de la misma empresa.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Una multitarea, porque maneja varias conexiones al mismo tiempo.",
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
            "A menudo de proveedores de telecomunicaciones (enlaces contratados), no de la propia empresa.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Siempre de la empresa que la usa, igual que una LAN.",
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
            "Internet es una red de redes pública y global que interconecta millones de redes usando TCP/IP; una WAN puede ser privada, e Internet es la WAN más grande del mundo.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Internet es la red global que conecta computadoras de todo el mundo.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Son lo mismo: Internet es simplemente una WAN muy grande.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Internet es un programa que se ejecuta dentro del navegador.",
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
            "El conjunto de protocolos estandarizados TCP/IP, que permite que redes heterogéneas se entiendan entre sí.",
          correcto: true,
        },
        {
          id: "b",
          texto: "El lenguaje HTML, que todos los dispositivos usan para comunicarse.",
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
            "El router: opera en la capa de red y usa tablas de enrutamiento para elegir el camino de cada paquete entre redes distintas según la IP destino.",
          nivel: 3,
        },
        { id: "b", texto: "El router, que conecta tu red local con internet.", nivel: 2 },
        {
          id: "c",
          texto: "El switch, que distribuye la señal entre todos los dispositivos de la red.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "El CPU, que procesa hacia dónde van los datos.",
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
          texto: "En la capa de red (capa 3), usando direcciones IP.",
          correcto: true,
        },
        {
          id: "b",
          texto: "En la capa física, porque transmite la señal eléctrica.",
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
            "Un switch: conecta dispositivos dentro de una LAN y envía los datos solo al destino usando direcciones MAC, a diferencia de un hub que los manda a todos.",
          nivel: 3,
        },
        { id: "b", texto: "Un switch, para conectar varios dispositivos en la misma red.", nivel: 2 },
        {
          id: "c",
          texto: "Un router, para que todos los dispositivos puedan comunicarse entre sí.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Un algoritmo, que organiza las conexiones entre las computadoras.",
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
            "Aprende y usa una tabla de direcciones MAC para enviarla solo al puerto correcto.",
          correcto: true,
        },
        {
          id: "b",
          texto: "La difunde a todos los puertos cada vez, igual que un hub.",
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
            "Recibe la solicitud del navegador (cliente), busca el recurso pedido y envía la respuesta; es una máquina o programa que provee servicios a otros dispositivos.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Almacena la página web y la envía cuando alguien la pide.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Es el router que dirige la petición hacia la página correcta.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Es una variable que guarda la página dentro del programa.",
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
          texto: "El cliente envía la solicitud; el servidor espera y responde.",
          correcto: true,
        },
        {
          id: "b",
          texto: "El servidor inicia enviando páginas a los clientes periódicamente.",
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
            "El módem convierte la señal de tu red a la que viaja por el cable del proveedor (y viceversa); el router solo distribuye la conexión ya convertida dentro de tu casa.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "El módem conecta tu casa a internet y el router distribuye esa conexión entre tus dispositivos.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "No necesitas los dos: el módem y el router hacen lo mismo.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "El módem es un proceso que el sistema operativo ejecuta para conectarse.",
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
            "Modula y demodula señales para adaptarlas entre medios (por ejemplo, de digital a la línea de transmisión del proveedor).",
          correcto: true,
        },
        {
          id: "b",
          texto: "Asigna direcciones IP a los dispositivos de la casa.",
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
            "Transmite los bits crudos por el medio: maneja voltaje, frecuencia y temporización. Ejemplos: cables Ethernet, fibra óptica, señal WiFi, conectores RJ45.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Es la capa más baja del OSI y maneja la transmisión de bits por el medio físico, como cables o señales inalámbricas.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Es la capa que asigna direcciones IP y enruta los paquetes entre redes.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Es la capa donde el CPU ejecuta las instrucciones del programa.",
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
          texto: "El conector RJ45 o el cable de fibra óptica que lleva la señal.",
          correcto: true,
        },
        {
          id: "b",
          texto: "La dirección IP que identifica al dispositivo.",
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
            "Garantiza la transferencia confiable entre dos nodos conectados directamente, detectando errores de la capa física y usando direcciones MAC dentro de la misma red local.",
          nivel: 3,
        },
        {
          id: "b",
          texto:
            "Maneja la comunicación entre dispositivos de la misma red usando direcciones MAC.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Establece y cierra las conexiones entre dispositivos para que se comuniquen.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Guarda los datos en una variable para poder enviarlos.",
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
          texto: "Direcciones MAC (físicas), únicas por cada interfaz de red.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Direcciones IP, para enrutar entre redes distintas.",
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
            "La capa de red: enruta los paquetes entre redes distintas usando direcciones IP; los routers operan aquí eligiendo el camino más eficiente.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "La capa de red, que usa direcciones IP para enrutar los paquetes entre redes.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "La capa de transporte, que controla el flujo de datos de extremo a extremo.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "La multitarea, que va alternando el envío de los datos.",
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
          texto: "El router, que elige rutas según la dirección IP.",
          correcto: true,
        },
        {
          id: "b",
          texto: "El switch, que trabaja sobre todo con MAC en la capa de enlace.",
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
            "Ambos son de la capa de transporte: TCP garantiza entrega ordenada y sin errores (web, email); UDP es más rápido pero sin garantías (videollamadas, juegos).",
          nivel: 3,
        },
        {
          id: "b",
          texto: "TCP garantiza que los datos lleguen bien y UDP es más rápido pero sin garantías.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "TCP y UDP son protocolos de la capa de red que enrutan los paquetes.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "TCP y UDP son variables de programación que guardan datos.",
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
            "Por su baja latencia: retransmitir un paquete que llegó tarde sería inútil, así que prioriza velocidad sobre entrega perfecta.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Porque UDP garantiza que cada cuadro llegue en orden perfecto.",
          correcto: false,
        },
      ],
    },
  },

  "Sesión": {
    p1: {
      pregunta:
        "Cuando haces una videollamada de Zoom de 1 hora, ¿qué capa del OSI gestiona que esa conexión se mantenga abierta toda la llamada?",
      opciones: [
        {
          id: "a",
          texto:
            "La capa de sesión: establece, mantiene y termina sesiones entre aplicaciones, sincronizando el diálogo para que la conexión no se pierda en intercambios largos.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "La capa de sesión, que abre y cierra las conexiones entre aplicaciones.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "La capa de transporte, porque TCP mantiene la conexión activa durante la llamada.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "La memoria RAM, que va guardando los datos de la llamada.",
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
            "Gestionar el diálogo entre dos aplicaciones: abrir, sincronizar, marcar puntos de control y cerrar la sesión.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Cifrar los datos antes de transmitirlos.",
          correcto: false,
        },
      ],
    },
  },

  "Presentación": {
    p1: {
      pregunta:
        "Cuando tu navegador recibe una página cifrada con HTTPS y la muestra bien, ¿qué capa del OSI participa en el descifrado y el formato de los datos?",
      opciones: [
        {
          id: "a",
          texto:
            "La capa de presentación: traduce los datos entre el formato de la red y el de la aplicación; se encarga del cifrado/descifrado, la compresión y la conversión de formatos.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "La capa de presentación, que formatea y cifra los datos para que la app los entienda.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "La capa de aplicación, porque es la que interactúa directamente con el navegador.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "El compilador, que traduce el código del programa.",
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
            "El cifrado/descifrado y la conversión de formato de los datos (por ejemplo, la codificación de caracteres).",
          correcto: true,
        },
        {
          id: "b",
          texto: "Elegir la ruta que toman los paquetes a través de las redes.",
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
            "Porque son la interfaz directa entre el software del usuario y la red; la capa de aplicación no es la app en sí, sino los protocolos que definen cómo se comunican las aplicaciones.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Porque son los protocolos que usan directamente las aplicaciones para comunicarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Porque se encargan de establecer la sesión de comunicación entre cliente y servidor.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Porque son procesos que ejecuta el sistema operativo.",
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
          texto: "No: el navegador es la aplicación; la capa de aplicación son los protocolos (como HTTP) que usa.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Sí: el navegador es literalmente la capa de aplicación del OSI.",
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
            "HTTPS cifra la comunicación con TLS/SSL, así que aunque alguien intercepte los datos no puede leerlos; HTTP los transmite en texto plano y cualquiera en la misma red vería tu contraseña.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "HTTPS es la versión segura de HTTP porque cifra los datos que se transmiten.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "HTTPS traduce de forma segura el nombre del dominio a su dirección IP.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "HTTPS es un CPU más rápido para el servidor del banco.",
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
          texto: "Una capa TLS/SSL que cifra y autentica la conexión.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Una conexión por cable directo al servidor que la hace más rápida.",
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
            "Traduce el nombre de dominio a su dirección IP (por ejemplo 142.250.80.46); la computadora no puede conectarse con un nombre, necesita la IP. Es como el directorio telefónico de internet.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Convierte el nombre del sitio en una dirección IP para que el navegador se conecte.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Cifra la conexión con el sitio para que sea segura.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Es la variable que guarda el sitio web dentro del programa.",
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
            "El navegador no encuentra la IP, así que la página no carga aunque el servidor esté funcionando.",
          correcto: true,
        },
        {
          id: "b",
          texto: "La página carga, pero sin imágenes.",
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
            "Para que el router sepa a quién entregar cada paquete; si dos dispositivos tienen la misma IP se produce un conflicto y los paquetes llegan al destino equivocado.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Porque cada dispositivo necesita una IP distinta para identificarse en la red.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Porque el DNS le da a cada dispositivo su nombre para que no choquen.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Porque cada dispositivo ejecuta un proceso distinto y por eso necesita otro número.",
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
            "Las IP privadas identifican dispositivos dentro de la red local; la IP pública identifica a toda la red frente a internet.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Las IP públicas son para celulares y las privadas para computadoras.",
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
            "Sí, si cumple: pasos precisos y no ambiguos, en orden definido, número finito y que produce un resultado. Si dice 'sal al gusto' deja de serlo, porque 'al gusto' es ambiguo.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Sí, porque una receta tiene pasos ordenados para llegar a un resultado.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "No, porque un algoritmo es solo una variable que almacena los pasos.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "No, porque un algoritmo solo existe dentro del CPU como señales eléctricas.",
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
          texto: "Que sea finito y con pasos bien definidos y no ambiguos.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Que esté escrito en un lenguaje de programación para que cuente como algoritmo.",
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
            "Es un espacio de memoria con nombre cuyo valor puede cambiar durante la ejecución; 'calificacion' guarda un valor distinto cada vez, mientras una constante como PI nunca cambia.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Guarda datos que pueden cambiar, a diferencia de una constante que siempre vale lo mismo.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Es el conjunto ordenado de pasos para calcular el promedio.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Es el chip de memoria RAM donde se almacena todo.",
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
          texto: "El valor de una variable se puede reasignar durante la ejecución; el de una constante no.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Una variable guarda números y una constante guarda texto.",
          correcto: false,
        },
      ],
    },
  },

  "Estructura de control": {
    p1: {
      pregunta:
        "Un cajero verifica tu saldo antes de darte dinero y, si no hay suficiente, muestra un error. ¿Qué tipo de estructura de control describe eso?",
      opciones: [
        {
          id: "a",
          texto:
            "Una estructura de selección (if/else): evalúa una condición (saldo >= monto) y ejecuta un bloque u otro; sin estructuras de control el programa correría en secuencia sin tomar decisiones.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Una estructura de selección o condicional, que ejecuta código distinto según una condición.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Una estructura de iteración, porque el cajero repite la verificación en cada operación.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Un router que decide a dónde enviar el dinero.",
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
            "La selección decide si ejecutar un bloque una vez según una condición; la iteración repite un bloque mientras se cumpla una condición.",
          correcto: true,
        },
        {
          id: "b",
          texto: "La selección ejecuta el código en orden y la iteración elige entre dos opciones.",
          correcto: false,
        },
      ],
    },
  },

  Compilado: {
    p1: {
      pregunta:
        "Un programa en C se compila una vez y se distribuye como ejecutable (.exe). ¿Qué ventaja concreta tiene sobre un lenguaje interpretado?",
      opciones: [
        {
          id: "a",
          texto:
            "El compilador traduce todo el código a lenguaje máquina antes de ejecutarse, así corre directo en el hardware: es más rápido y no necesita el compilador instalado para correr.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Los lenguajes compilados son más rápidos porque el código se traduce a lenguaje máquina antes de ejecutarse.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Los lenguajes compilados ejecutan el código línea por línea en tiempo real.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Los lenguajes compilados necesitan un router para distribuir el .exe.",
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
          texto: "No: ya es código máquina; el compilador solo se necesita para construirlo, no para ejecutarlo.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Sí: el compilador debe estar presente cada vez que el programa se ejecuta.",
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
            "El intérprete lee y ejecuta cada línea en tiempo real, sin traducir todo antes; si hay un error en la línea 50, corre las 49 anteriores y falla ahí. Requiere el intérprete instalado.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Ejecuta el código directamente sin compilarlo primero, línea por línea.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Se traduce por completo a lenguaje máquina antes de ejecutarse, por eso es lento.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Se interpreta porque un servidor lo lee de forma remota.",
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
          texto: "Porque el código fuente se traduce y ejecuta en tiempo de ejecución; sin el intérprete no hay nada que lo ejecute.",
          correcto: true,
        },
        {
          id: "b",
          texto: "Porque el intérprete guarda permanentemente las variables del programa.",
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
            "Un bucle for que suma los elementos de una lista: defines cada paso (inicializa contador, verifica condición, suma, incrementa) y controlas el flujo paso a paso.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Escribes instrucciones paso a paso que la computadora sigue en orden, como en C o Java.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Describes qué resultado quieres sin decir cómo obtenerlo, como en SQL.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Significa que el programa se ejecuta en la capa física de la red.",
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
          texto: "Especificas explícitamente la secuencia de pasos y los cambios de estado (el CÓMO).",
          correcto: true,
        },
        {
          id: "b",
          texto: "Solo describes el resultado deseado y el sistema decide los pasos.",
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
            "Porque describes QUÉ datos quieres, no CÓMO obtenerlos: no le dices que recorra la tabla fila por fila, él elige la estrategia más eficiente. En imperativo tendrías que escribir el ciclo y la condición a mano.",
          nivel: 3,
        },
        {
          id: "b",
          texto: "Porque declaras lo que quieres obtener sin especificar los pasos para lograrlo.",
          nivel: 2,
        },
        {
          id: "c",
          texto: "Porque escribes las instrucciones paso a paso para leer cada fila de la tabla.",
          nivel: 1,
        },
        {
          id: "d",
          texto: "Porque SQL se ejecuta en un servidor en la nube.",
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
          texto: "El sistema o motor (por ejemplo, el optimizador de consultas de la base de datos), no el programador.",
          correcto: true,
        },
        {
          id: "b",
          texto: "El programador, que escribe cada ciclo y condición a mano.",
          correcto: false,
        },
      ],
    },
  },
};
