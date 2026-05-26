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

// Nivel asignado por respuesta:
// opcion "a" → nivel 3 (aplica correctamente con razonamiento)
// opcion "b" → nivel 2 (reconoce correctamente)
// opcion "c" → nivel 1 (confunde con similar)
// opcion "d" / "no_se" → nivel 0

export const QUIZ = {
  RAM: {
    pregunta:
      "Tu computadora se vuelve lenta cuando abres muchas aplicaciones al mismo tiempo. ¿Cuál es la causa más probable y por qué?",
    opciones: [
      {
        id: "a",
        texto:
          "La RAM se llenó: es la memoria temporal donde el SO guarda los datos de los procesos activos, y cuando se agota, el sistema recurre al disco que es mucho más lento.",
      },
      {
        id: "b",
        texto: "La RAM se llenó porque es la memoria de trabajo de la computadora.",
      },
      {
        id: "c",
        texto:
          "El disco duro se llenó: al haber poco espacio de almacenamiento la computadora no puede guardar archivos nuevos.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  CPU: {
    pregunta:
      "Un programa tarda 10 segundos en ejecutarse en tu computadora. Tu amigo tiene la misma app y le tarda 2 segundos. ¿Qué componente explica mejor esa diferencia y por qué?",
    opciones: [
      {
        id: "a",
        texto:
          "El CPU: es el componente que ejecuta las instrucciones del programa. Uno con mayor frecuencia o más núcleos procesa más operaciones por segundo.",
      },
      {
        id: "b",
        texto: "El CPU, porque es el procesador que corre los programas.",
      },
      {
        id: "c",
        texto:
          "La RAM, porque si tu amigo tiene más memoria puede abrir el programa más rápido.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Proceso: {
    pregunta:
      "Tienes abierto el navegador y el reproductor de música al mismo tiempo. ¿Cómo llama el sistema operativo a cada uno de estos y qué implica eso?",
    opciones: [
      {
        id: "a",
        texto:
          "Cada uno es un proceso: una instancia del programa en ejecución con su propio espacio de memoria y tiempo de CPU asignado por el SO.",
      },
      {
        id: "b",
        texto: "Cada uno es un proceso, que es un programa que está corriendo.",
      },
      {
        id: "c",
        texto:
          "Cada uno es un archivo ejecutable almacenado en el disco duro.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Multitarea: {
    pregunta:
      "Estás escuchando música mientras escribes un documento. ¿Qué característica del sistema operativo hace esto posible?",
    opciones: [
      {
        id: "a",
        texto:
          "La multitarea: el SO alterna el uso del CPU entre procesos tan rápido que parece simultáneo, asignando pequeñas fracciones de tiempo a cada uno.",
      },
      {
        id: "b",
        texto:
          "La multitarea, que permite ejecutar varios programas al mismo tiempo.",
      },
      {
        id: "c",
        texto:
          "El multiusuario, que permite que varias personas usen la computadora a la vez.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Multiusuario: {
    pregunta:
      "En una universidad, 30 alumnos se conectan al mismo servidor Linux con sus propias cuentas y trabajan de forma independiente. ¿Qué característica del SO hace esto posible?",
    opciones: [
      {
        id: "a",
        texto:
          "El multiusuario: el SO gestiona sesiones, permisos y recursos separados para cada usuario conectado simultáneamente al mismo sistema.",
      },
      {
        id: "b",
        texto:
          "El multiusuario, que permite que varios usuarios usen el sistema al mismo tiempo.",
      },
      {
        id: "c",
        texto:
          "La multitarea, que permite correr varios procesos al mismo tiempo en el servidor.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "ls/dir": {
    pregunta:
      "Estás en la terminal y quieres saber qué archivos hay en la carpeta donde te encuentras. ¿Qué comando usas en Linux y qué muestra exactamente?",
    opciones: [
      {
        id: "a",
        texto:
          "ls en Linux (o dir en Windows): lista los archivos y carpetas del directorio actual. Con ls -la también muestra permisos, tamaño y archivos ocultos.",
      },
      { id: "b", texto: "ls en Linux o dir en Windows, para listar archivos." },
      {
        id: "c",
        texto: "cd, para ver en qué directorio estás y qué contiene.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  cd: {
    pregunta:
      "Estás en /home/usuario y necesitas ir a la carpeta /home/usuario/Documentos/Tareas. ¿Qué comando escribes?",
    opciones: [
      {
        id: "a",
        texto:
          "cd Documentos/Tareas — cd cambia el directorio de trabajo actual. La ruta puede ser relativa (desde donde estás) o absoluta (desde la raíz).",
      },
      { id: "b", texto: "cd Documentos/Tareas, para cambiar de carpeta." },
      {
        id: "c",
        texto: "ls Documentos/Tareas, para entrar y ver el contenido.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  mkdir: {
    pregunta:
      "Necesitas crear una carpeta llamada 'proyecto' dentro de tu directorio actual. ¿Qué comando usas y qué pasa si la carpeta ya existe?",
    opciones: [
      {
        id: "a",
        texto:
          "mkdir proyecto — crea el directorio. Si ya existe, da un error. Con mkdir -p puedes crear directorios anidados sin error aunque existan.",
      },
      { id: "b", texto: "mkdir proyecto, para crear una nueva carpeta." },
      { id: "c", texto: "cd proyecto, para crear y entrar a la carpeta." },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  ping: {
    pregunta:
      "Quieres saber si tu computadora puede comunicarse con google.com. ¿Qué comando usas y qué información te da?",
    opciones: [
      {
        id: "a",
        texto:
          "ping google.com — envía paquetes ICMP al destino y mide el tiempo de respuesta (latencia en ms). Si hay respuesta, la conexión funciona; si no, hay un problema de red.",
      },
      {
        id: "b",
        texto: "ping google.com, para verificar si hay conexión con ese host.",
      },
      {
        id: "c",
        texto:
          "tracert google.com, para ver si la computadora está conectada a internet.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  LAN: {
    pregunta:
      "En tu casa tienes 3 computadoras y un celular conectados al mismo router WiFi. ¿Qué tipo de red forman y cuál es su característica principal?",
    opciones: [
      {
        id: "a",
        texto:
          "Una LAN (red de área local): cubre un espacio geográfico pequeño como una casa u oficina, y permite compartir recursos como impresoras o archivos entre dispositivos cercanos.",
      },
      {
        id: "b",
        texto: "Una LAN, que es una red local para dispositivos cercanos.",
      },
      {
        id: "c",
        texto:
          "Una WAN, porque están conectados a internet que es una red global.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  WAN: {
    pregunta:
      "Una empresa tiene oficinas en CDMX y Monterrey que están interconectadas. ¿Qué tipo de red describe mejor esa conexión y por qué?",
    opciones: [
      {
        id: "a",
        texto:
          "Una WAN (red de área amplia): conecta redes separadas geográficamente, generalmente usando infraestructura de terceros como fibra óptica o satélite.",
      },
      {
        id: "b",
        texto:
          "Una WAN, porque conecta ubicaciones en diferentes ciudades.",
      },
      {
        id: "c",
        texto:
          "Una LAN extendida, porque sigue siendo la red interna de la misma empresa.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Internet: {
    pregunta:
      "¿Cuál es la diferencia entre Internet y una WAN?",
    opciones: [
      {
        id: "a",
        texto:
          "Internet es una red de redes pública y global que interconecta millones de redes privadas y públicas usando TCP/IP. Una WAN es una red amplia que puede ser privada; Internet es la WAN más grande del mundo.",
      },
      {
        id: "b",
        texto:
          "Internet es la red global que conecta computadoras de todo el mundo.",
      },
      {
        id: "c",
        texto:
          "Son lo mismo: Internet es simplemente una WAN muy grande.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Router: {
    pregunta:
      "Tienes dos redes distintas: tu red de casa (192.168.1.x) e internet. ¿Qué dispositivo conecta esas dos redes y cómo decide a dónde mandar cada paquete?",
    opciones: [
      {
        id: "a",
        texto:
          "El router: opera en la capa de red y usa tablas de enrutamiento para decidir el camino óptimo de cada paquete entre redes distintas basándose en la dirección IP destino.",
      },
      {
        id: "b",
        texto: "El router, que conecta tu red local con internet.",
      },
      {
        id: "c",
        texto:
          "El switch, que distribuye la señal entre todos los dispositivos de la red.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Switch: {
    pregunta:
      "Tienes 8 computadoras en una oficina que necesitan comunicarse entre sí. ¿Qué dispositivo usas y en qué se diferencia de un hub?",
    opciones: [
      {
        id: "a",
        texto:
          "Un switch: conecta dispositivos dentro de una LAN y envía los datos solo al dispositivo destino usando direcciones MAC. Un hub envía los datos a todos los dispositivos, lo que genera colisiones y desperdicia ancho de banda.",
      },
      {
        id: "b",
        texto:
          "Un switch, para conectar varios dispositivos en la misma red.",
      },
      {
        id: "c",
        texto:
          "Un router, para que todos los dispositivos puedan comunicarse entre sí.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Servidor: {
    pregunta:
      "Cuando escribes una URL en tu navegador y aparece una página web, ¿qué función cumple el servidor en ese proceso?",
    opciones: [
      {
        id: "a",
        texto:
          "El servidor recibe la solicitud HTTP del navegador (cliente), busca el recurso solicitado y envía la respuesta. Es un programa o máquina que provee servicios a otros dispositivos en la red.",
      },
      {
        id: "b",
        texto:
          "El servidor almacena la página web y la envía cuando alguien la pide.",
      },
      {
        id: "c",
        texto:
          "El servidor es el router que dirige la petición a la página correcta.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Módem: {
    pregunta:
      "¿Por qué necesitas un módem para conectarte a internet si ya tienes un router en casa?",
    opciones: [
      {
        id: "a",
        texto:
          "El módem convierte la señal digital de tu red local a la señal analógica (o de otro tipo) que viaja por el cable del proveedor, y viceversa. El router solo distribuye la conexión ya convertida dentro de tu casa.",
      },
      {
        id: "b",
        texto:
          "El módem conecta tu casa a internet y el router distribuye esa conexión entre tus dispositivos.",
      },
      {
        id: "c",
        texto:
          "No necesitas los dos: el módem y el router hacen lo mismo, por eso muchos proveedores dan un aparato que hace las dos funciones.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "Capa Física": {
    pregunta:
      "¿De qué se encarga la Capa Física del modelo OSI y qué ejemplos concretos la representan?",
    opciones: [
      {
        id: "a",
        texto:
          "Transmite bits crudos por el medio físico. Se encarga del voltaje, frecuencia y temporización de las señales. Ejemplos: cables Ethernet, fibra óptica, señales WiFi, conectores RJ45.",
      },
      {
        id: "b",
        texto:
          "Es la capa más baja del OSI y maneja la transmisión de bits por el medio físico como cables o señales inalámbricas.",
      },
      {
        id: "c",
        texto:
          "Es la capa que asigna direcciones IP y enruta los paquetes entre redes.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "Enlace de datos": {
    pregunta:
      "¿Qué problema resuelve la Capa de Enlace de datos y cómo lo hace?",
    opciones: [
      {
        id: "a",
        texto:
          "Garantiza la transferencia confiable de datos entre dos nodos directamente conectados, detectando y corrigiendo errores de la capa física. Usa direcciones MAC para identificar dispositivos dentro de la misma red local.",
      },
      {
        id: "b",
        texto:
          "Maneja la comunicación entre dispositivos en la misma red usando direcciones MAC.",
      },
      {
        id: "c",
        texto:
          "Establece y cierra las conexiones entre dispositivos para que puedan comunicarse.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "Capa de Red": {
    pregunta:
      "Cuando envías un mensaje de CDMX a Tokio, ¿qué capa del OSI decide el camino que toman los datos y cómo lo hace?",
    opciones: [
      {
        id: "a",
        texto:
          "La Capa de Red: enruta los paquetes entre redes distintas usando direcciones IP. Los routers operan en esta capa y usan algoritmos de enrutamiento para elegir el camino más eficiente.",
      },
      {
        id: "b",
        texto:
          "La Capa de Red, que usa direcciones IP para enrutar los paquetes entre redes.",
      },
      {
        id: "c",
        texto:
          "La Capa de Transporte, que controla el flujo de datos de extremo a extremo.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Transporte: {
    pregunta:
      "¿Cuál es la diferencia entre TCP y UDP, y en qué situación usarías cada uno?",
    opciones: [
      {
        id: "a",
        texto:
          "Ambos son protocolos de la Capa de Transporte. TCP garantiza entrega ordenada y sin errores (ideal para web, email). UDP es más rápido pero sin garantías (ideal para videollamadas o juegos donde la velocidad importa más que la perfección).",
      },
      {
        id: "b",
        texto:
          "TCP garantiza que los datos lleguen correctamente y UDP es más rápido pero sin garantías.",
      },
      {
        id: "c",
        texto:
          "TCP y UDP son protocolos de la Capa de Red que se encargan de enrutar los paquetes.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Sesión: {
    pregunta:
      "Cuando inicias sesión en Zoom y haces una videollamada de 1 hora, ¿qué capa del OSI gestiona que esa conexión se mantenga abierta durante toda la llamada?",
    opciones: [
      {
        id: "a",
        texto:
          "La Capa de Sesión: establece, mantiene y termina sesiones de comunicación entre aplicaciones. Gestiona la sincronización y el control del diálogo para que la conexión no se pierda durante intercambios prolongados.",
      },
      {
        id: "b",
        texto:
          "La Capa de Sesión, que abre y cierra las conexiones entre aplicaciones.",
      },
      {
        id: "c",
        texto:
          "La Capa de Transporte, porque TCP mantiene la conexión activa durante la llamada.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Presentación: {
    pregunta:
      "Cuando tu navegador recibe una página web cifrada con HTTPS y la muestra correctamente en pantalla, ¿qué capa del OSI está involucrada en el descifrado y formato de los datos?",
    opciones: [
      {
        id: "a",
        texto:
          "La Capa de Presentación: traduce los datos entre el formato de la red y el formato que entiende la aplicación. Se encarga del cifrado/descifrado, compresión y conversión de formatos (como ASCII a Unicode).",
      },
      {
        id: "b",
        texto:
          "La Capa de Presentación, que formatea y cifra los datos para que la aplicación los entienda.",
      },
      {
        id: "c",
        texto:
          "La Capa de Aplicación, porque es la que interactúa directamente con el navegador.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Aplicación: {
    pregunta:
      "¿Por qué HTTP, FTP y SMTP son protocolos de la Capa de Aplicación y no de otra capa?",
    opciones: [
      {
        id: "a",
        texto:
          "Porque son la interfaz directa entre el software del usuario y la red. La Capa de Aplicación no es la app en sí, sino los protocolos que definen cómo las aplicaciones se comunican: HTTP para web, FTP para archivos, SMTP para email.",
      },
      {
        id: "b",
        texto:
          "Porque son los protocolos que usan directamente las aplicaciones para comunicarse.",
      },
      {
        id: "c",
        texto:
          "Porque se encargan de establecer la sesión de comunicación entre el cliente y el servidor.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "HTTP/HTTPS": {
    pregunta:
      "¿Por qué los bancos usan HTTPS y no HTTP, y qué diferencia concreta hay entre los dos?",
    opciones: [
      {
        id: "a",
        texto:
          "HTTPS cifra la comunicación usando TLS/SSL, por lo que aunque alguien intercepte los datos no puede leerlos. HTTP los transmite en texto plano. En un banco, si usaran HTTP cualquiera en la misma red podría ver tu contraseña.",
      },
      {
        id: "b",
        texto:
          "HTTPS es la versión segura de HTTP porque cifra los datos que se transmiten.",
      },
      {
        id: "c",
        texto:
          "HTTPS es más rápido que HTTP porque usa una conexión directa con el servidor del banco.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  DNS: {
    pregunta:
      "Cuando escribes 'google.com' en el navegador, ¿qué hace el DNS exactamente antes de que cargue la página?",
    opciones: [
      {
        id: "a",
        texto:
          "El DNS traduce el nombre de dominio 'google.com' a su dirección IP (ej. 142.250.80.46). Tu computadora no puede conectarse usando un nombre, necesita la IP. El DNS actúa como el directorio telefónico de internet.",
      },
      {
        id: "b",
        texto:
          "El DNS convierte el nombre del sitio en una dirección IP para que el navegador pueda conectarse.",
      },
      {
        id: "c",
        texto:
          "El DNS verifica que el sitio web sea seguro antes de que el navegador lo cargue.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "Dirección IP": {
    pregunta:
      "Tu celular y tu laptop están en la misma red WiFi. ¿Por qué cada uno necesita una dirección IP diferente y qué pasaría si tuvieran la misma?",
    opciones: [
      {
        id: "a",
        texto:
          "Cada dispositivo necesita una IP única para que el router sepa a quién entregar cada paquete. Si dos dispositivos tienen la misma IP se produce un conflicto: los paquetes llegan al destino equivocado o ninguno de los dos recibe datos correctamente.",
      },
      {
        id: "b",
        texto:
          "Cada dispositivo necesita una IP distinta para identificarse en la red.",
      },
      {
        id: "c",
        texto:
          "Cada dispositivo tiene una IP diferente porque el router asigna IPs según la velocidad de conexión de cada uno.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Algoritmo: {
    pregunta:
      "Tu amigo dice que una receta de cocina es un algoritmo. ¿Tiene razón? ¿Por qué sí o por qué no?",
    opciones: [
      {
        id: "a",
        texto:
          "Sí, una receta puede ser un algoritmo si cumple: pasos precisos y no ambiguos, en orden definido, número finito de pasos y produce un resultado. Si dice 'agrega sal al gusto' no es un algoritmo porque 'al gusto' es ambiguo.",
      },
      {
        id: "b",
        texto:
          "Sí, porque una receta tiene pasos ordenados para llegar a un resultado, igual que un algoritmo.",
      },
      {
        id: "c",
        texto:
          "No, porque un algoritmo solo puede existir en computadoras, no en actividades del mundo real.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Variable: {
    pregunta:
      "En un programa que calcula el promedio de calificaciones, ¿qué rol juega una variable y qué la diferencia de un valor fijo (constante)?",
    opciones: [
      {
        id: "a",
        texto:
          "Una variable es un espacio de memoria con nombre cuyo valor puede cambiar durante la ejecución. En el promedio, la variable 'calificacion' guarda un valor distinto cada vez. Una constante como PI siempre es 3.14159, nunca cambia.",
      },
      {
        id: "b",
        texto:
          "Una variable guarda datos que pueden cambiar, a diferencia de una constante que siempre tiene el mismo valor.",
      },
      {
        id: "c",
        texto:
          "Una variable es el nombre que le damos al resultado del cálculo del promedio.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  "Estructura de control": {
    pregunta:
      "Un cajero automático verifica tu saldo antes de darte dinero, y si no hay suficiente te muestra un mensaje de error. ¿Qué tipo de estructura de control describe ese comportamiento?",
    opciones: [
      {
        id: "a",
        texto:
          "Una estructura de selección (if/else): evalúa una condición (saldo >= monto) y ejecuta un bloque u otro según el resultado. Sin estructuras de control, el programa ejecutaría instrucciones en secuencia lineal sin tomar decisiones.",
      },
      {
        id: "b",
        texto:
          "Una estructura de selección o condicional, que ejecuta código diferente según si se cumple una condición.",
      },
      {
        id: "c",
        texto:
          "Una estructura de iteración, porque el cajero repite la verificación cada vez que haces una operación.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Compilado: {
    pregunta:
      "Un programa en C se compila una vez y luego se distribuye como ejecutable (.exe). ¿Qué ventaja concreta tiene eso sobre un lenguaje interpretado?",
    opciones: [
      {
        id: "a",
        texto:
          "El compilador traduce todo el código a lenguaje máquina antes de ejecutarse, por lo que el programa corre directamente en el hardware sin intermediarios. Es más rápido en ejecución y no necesita tener el compilador instalado para correr.",
      },
      {
        id: "b",
        texto:
          "Los lenguajes compilados son más rápidos porque el código se traduce a lenguaje máquina antes de ejecutarse.",
      },
      {
        id: "c",
        texto:
          "Los lenguajes compilados son más fáciles de escribir porque el compilador detecta errores mientras programas.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Interpretado: {
    pregunta:
      "Python es interpretado. ¿Qué significa eso en la práctica cuando ejecutas un script de Python línea por línea?",
    opciones: [
      {
        id: "a",
        texto:
          "El intérprete lee y ejecuta cada línea en tiempo real, sin traducir todo el programa antes. Si hay un error en la línea 50, el programa corre las 49 anteriores y falla ahí. Requiere el intérprete instalado para ejecutarse.",
      },
      {
        id: "b",
        texto:
          "Un lenguaje interpretado ejecuta el código directamente sin compilarlo primero, línea por línea.",
      },
      {
        id: "c",
        texto:
          "Python se interpreta, lo que significa que se convierte a lenguaje máquina cada vez que lo ejecutas, por eso es más lento.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Imperativo: {
    pregunta:
      "En programación imperativa le dices a la computadora CÓMO hacer algo. Da un ejemplo concreto que ilustre eso.",
    opciones: [
      {
        id: "a",
        texto:
          "Un bucle for que suma los elementos de una lista: defines explícitamente cada paso — inicializa contador, verifica condición, suma elemento, incrementa. Tú controlas el flujo de ejecución paso a paso.",
      },
      {
        id: "b",
        texto:
          "En la programación imperativa escribes instrucciones paso a paso que la computadora sigue en orden, como en C o Java.",
      },
      {
        id: "c",
        texto:
          "La programación imperativa describe qué resultado quieres sin decir cómo obtenerlo, como en SQL.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },

  Declarativo: {
    pregunta:
      "En SQL escribes SELECT * FROM alumnos WHERE promedio > 8. ¿Por qué eso es programación declarativa y no imperativa?",
    opciones: [
      {
        id: "a",
        texto:
          "Porque describes QUÉ datos quieres, no CÓMO obtenerlos. No le dices al sistema que recorra la tabla fila por fila — él decide la estrategia más eficiente. En imperativo tendrías que escribir el ciclo y la condición manualmente.",
      },
      {
        id: "b",
        texto:
          "Porque en SQL declaras lo que quieres obtener sin especificar los pasos para lograrlo.",
      },
      {
        id: "c",
        texto:
          "Porque SQL es un lenguaje de base de datos, no un lenguaje de programación imperativo como Python.",
      },
      { id: "no_se", texto: "No sé" },
    ],
    niveles: { a: 3, b: 2, c: 1, no_se: 0 },
  },
};
