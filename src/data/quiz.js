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
      explicacion:
        "Al abrir muchas apps la RAM se llena y el SO empieza a paginar: mueve datos a disco (memoria virtual). Como el disco es mucho más lento que la RAM, el rendimiento cae. No es el disco lleno ni solo el reparto de CPU.",
    },
    p2: {
      pregunta:
        "Cuando la RAM se agota, ¿qué hace el sistema operativo para seguir funcionando?",
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
      explicacion:
        "El SO usa swap: traslada al disco los datos menos usados para liberar RAM. Funciona, pero acceder al disco es mucho más lento que a la memoria.",
    },
  },

  CPU: {
    p1: {
      pregunta:
        "Un programa hace cálculos intensivos y tarda 10 s en tu equipo, pero 2 s en el de tu compañero con la misma app y datos. ¿Qué lo explica mejor?",
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
      explicacion:
        "Con la misma app y datos, la diferencia está en cuántas instrucciones por segundo ejecuta el procesador (frecuencia de reloj y/o núcleos). Más RAM o un SSD no aceleran un cálculo que ya cabe en memoria.",
    },
    p2: {
      pregunta: "¿Qué ventaja real aporta que un CPU tenga más núcleos?",
      opciones: [
        {
          id: "a",
          texto:
            "Puede ejecutar varias instrucciones o hilos en paralelo de forma simultánea, repartiendo el trabajo entre ellos.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Subir la frecuencia de reloj de cada núcleo para que las instrucciones individuales se procesen más rápido.",
          correcto: false,
        },
      ],
      explicacion:
        "Más núcleos permiten ejecutar varios hilos o instrucciones en paralelo, repartiendo el trabajo. No hacen más rápida cada instrucción individual.",
    },
  },

  Proceso: {
    p1: {
      pregunta:
        "Tienes abiertos el navegador y un reproductor de música a la vez. En términos del sistema operativo, ¿qué es cada uno?",
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
      explicacion:
        "Cada programa en ejecución es un proceso: una instancia con su propio espacio de memoria y recursos asignados por el SO. No es el archivo en disco ni un simple hilo.",
    },
    p2: {
      pregunta: "¿En qué se diferencia un proceso de un programa?",
      opciones: [
        {
          id: "a",
          texto:
            "El programa es el código almacenado en disco; el proceso es ese programa ya cargado en memoria y en ejecución.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "El programa es el código que escribe el desarrollador y el proceso es ese mismo código una vez compilado.",
          correcto: false,
        },
      ],
      explicacion:
        "El programa es el código guardado en disco; el proceso es ese programa ya cargado en memoria y en ejecución.",
    },
  },

  Multitarea: {
    p1: {
      pregunta:
        "Escuchas música mientras escribes un documento en un equipo con un solo núcleo de CPU. ¿Qué permite que ambos programas avancen 'a la vez'?",
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
      explicacion:
        "Con un solo núcleo, el SO reparte el tiempo de CPU entre procesos en intervalos muy cortos: parecen simultáneos aunque en cada instante corra solo uno. No requiere varios núcleos ni el modo multiusuario.",
    },
    p2: {
      pregunta:
        "En un procesador de un solo núcleo, ¿cómo se logra la multitarea?",
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
      explicacion:
        "El SO conmuta rápidamente entre procesos; en cada instante corre uno solo, pero el cambio es tan veloz que resulta imperceptible.",
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
      explicacion:
        "Un sistema multiusuario gestiona sesiones, permisos y recursos aislados para cada usuario conectado a la vez. La multitarea (repartir CPU) es otra cosa, y no hace falta una máquina virtual por alumno.",
    },
    p2: {
      pregunta: "¿Qué es lo esencial que debe garantizar un sistema multiusuario?",
      opciones: [
        {
          id: "a",
          texto:
            "El aislamiento de recursos y permisos, de modo que un usuario no pueda acceder a los archivos privados de otro.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que la carga de trabajo se reparta por igual entre todos los usuarios que estén conectados en ese momento.",
          correcto: false,
        },
      ],
      explicacion:
        "Lo esencial es el aislamiento: permisos y recursos separados para que un usuario no acceda a los archivos privados de otro. No exige repartir el rendimiento por igual.",
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
      explicacion:
        "ls (o dir en Windows) lista el contenido del directorio; con -l muestra además permisos, tamaño y fecha. cd cambia de carpeta y cat muestra el contenido de archivos, no listan el directorio así.",
    },
    p2: {
      pregunta: "¿Qué hace específicamente la opción -a en `ls -a`?",
      opciones: [
        {
          id: "a",
          texto:
            "Muestra también los archivos ocultos, que son aquellos cuyo nombre comienza con un punto.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Los permisos y el tamaño de cada archivo, mostrando sus detalles completos en lugar de solo el nombre.",
          correcto: false,
        },
      ],
      explicacion:
        "ls -a muestra también los archivos ocultos, que en Linux son los que empiezan con un punto. Ver los atributos es lo que hace la opción -l.",
    },
  },

  cd: {
    p1: {
      pregunta:
        "Estás en /home/ana y quieres trabajar en /home/ana/proyectos/web sin escribir la ruta completa desde la raíz. ¿Qué escribes?",
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
      explicacion:
        "Desde /home/ana, `cd proyectos/web` usa una ruta relativa al directorio actual. Empezar con / la haría absoluta (otra carpeta) y ~ apunta al home del usuario.",
    },
    p2: {
      pregunta: "¿Qué diferencia hay entre una ruta absoluta y una relativa al usar cd?",
      opciones: [
        {
          id: "a",
          texto:
            "La absoluta parte de la raíz (/) y es siempre la misma; la relativa parte del directorio actual donde estés.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "`cd ..` regresa a la última carpeta en la que estabas y `cd /` te lleva a tu carpeta personal de usuario.",
          correcto: false,
        },
      ],
      explicacion:
        "La ruta absoluta parte siempre de la raíz (/) y es la misma estés donde estés; la relativa parte del directorio actual en el que te encuentras.",
    },
  },

  mkdir: {
    p1: {
      pregunta:
        "Necesitas crear una carpeta nueva llamada 'entrega' en el directorio actual. ¿Qué comando usas y qué ocurre si ya existe una con ese nombre?",
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
      explicacion:
        "mkdir entrega crea la carpeta; si ya existe, falla con un error de 'directorio existente'. cd no crea carpetas y touch crea archivos, no directorios.",
    },
    p2: {
      pregunta: "¿Para qué sirve la opción -p en `mkdir -p a/b/c`?",
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
      explicacion:
        "mkdir -p crea toda la ruta, generando las carpetas intermedias que falten (a y b), sin dar error si ya existen.",
    },
  },

  ping: {
    p1: {
      pregunta:
        "Quieres comprobar si tu equipo tiene conectividad con el servidor de google.com y medir cuánto tarda en responder. ¿Qué herramienta usas?",
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
      explicacion:
        "ping envía paquetes ICMP de eco y mide el tiempo de ida y vuelta para comprobar conectividad. traceroute y nslookup tienen otros fines (la ruta y la resolución de nombres).",
    },
    p2: {
      pregunta: "Si haces ping a un sitio y no obtienes respuesta, ¿qué puedes concluir con certeza?",
      opciones: [
        {
          id: "a",
          texto:
            "Poco por sí solo: el host podría estar activo pero con ICMP bloqueado por un firewall, o la ruta podría fallar.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que el servidor del sitio está apagado, ya que de estar encendido siempre respondería a cualquier ping.",
          correcto: false,
        },
      ],
      explicacion:
        "La falta de respuesta no prueba que el host esté caído: puede tener ICMP bloqueado por un firewall o haber un fallo en la ruta. Por sí solo el ping concluye poco.",
    },
  },

  // ─── U3 · Redes de Computadoras ──────────────────────────────
  LAN: {
    p1: {
      pregunta:
        "En una oficina, 20 equipos están conectados entre sí mediante switches dentro del mismo edificio, sin salir a internet. ¿Qué tipo de red constituyen?",
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
      explicacion:
        "Equipos en un área reducida (un edificio) conectados por switches forman una LAN, que permite compartir recursos. No es una MAN (mayor alcance) ni define por sí sola una intranet.",
    },
    p2: {
      pregunta: "¿Qué se necesita para que los equipos de una LAN compartan archivos entre sí?",
      opciones: [
        {
          id: "a",
          texto:
            "Nada más que la propia red local; pueden comunicarse directamente sin que exista conexión a internet.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: sin internet el router no puede asignar las direcciones que conectan a los dispositivos entre ellos.",
          correcto: false,
        },
      ],
      explicacion:
        "En una LAN los equipos se comunican directamente entre sí; no hace falta una conexión a internet para compartir archivos.",
    },
  },

  WAN: {
    p1: {
      pregunta:
        "Una empresa enlaza sus sucursales de Guadalajara, Mérida y Tijuana mediante enlaces contratados a un operador de telecomunicaciones. ¿Qué red forman?",
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
      explicacion:
        "Enlazar sucursales en ciudades distintas mediante enlaces de un operador es una WAN: conecta redes geográficamente dispersas sobre infraestructura de terceros. No es internet ni una VPN.",
    },
    p2: {
      pregunta: "¿Por qué una WAN suele depender de proveedores externos?",
      opciones: [
        {
          id: "a",
          texto:
            "Porque tender y mantener enlaces de larga distancia es muy costoso, así que se contratan a operadores que ya los tienen.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "De la empresa, que tiende su propio cableado de fibra óptica entre las dos ciudades para conectarlas.",
          correcto: false,
        },
      ],
      explicacion:
        "Tender y mantener enlaces de larga distancia es muy costoso, así que se contratan a operadores que ya los poseen. No hay una prohibición legal de fondo.",
    },
  },

  Internet: {
    p1: {
      pregunta: "¿Cuál es la relación correcta entre Internet y el concepto de WAN?",
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
      explicacion:
        "Internet es una WAN específica: la red pública mundial de redes interconectadas mediante TCP/IP. No toda WAN es internet, y no es el navegador.",
    },
    p2: {
      pregunta: "¿Qué distingue a la World Wide Web de Internet?",
      opciones: [
        {
          id: "a",
          texto:
            "La Web es un servicio (páginas enlazadas vía HTTP) que funciona sobre Internet, la infraestructura de red subyacente.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La fibra óptica submarina, que es el medio físico encargado de enlazar a todas las redes del planeta.",
          correcto: false,
        },
      ],
      explicacion:
        "La Web es un servicio (páginas enlazadas vía HTTP) que funciona sobre internet, la infraestructura de red subyacente. No son lo mismo.",
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
      explicacion:
        "El router opera en la capa 3 y, según la IP de destino, decide por qué ruta reenviar cada paquete entre redes. El switch trabaja dentro de la LAN y el módem solo traduce la señal.",
    },
    p2: {
      pregunta: "¿En qué se basa un router para decidir por dónde enviar un paquete?",
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
      explicacion:
        "El router decide según la IP de destino, que consulta en su tabla de enrutamiento para elegir el siguiente salto. La MAC la usa el switch dentro de la LAN.",
    },
  },

  Switch: {
    p1: {
      pregunta:
        "En una LAN con 24 equipos necesitas un dispositivo que reciba cada trama y la entregue solo al equipo destinatario, sin inundar a los demás. ¿Cuál usas?",
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
      explicacion:
        "El switch aprende las direcciones MAC y reenvía cada trama solo al puerto del destinatario. El hub inunda a todos y el router opera entre redes, no dentro de la LAN.",
    },
    p2: {
      pregunta: "¿Cómo sabe un switch a qué puerto enviar una trama destinada a cierto equipo?",
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
      explicacion:
        "El switch mantiene una tabla MAC-puerto que aprende observando el tráfico; así sabe a qué puerto enviar cada trama. No usa direcciones IP.",
    },
  },

  Servidor: {
    p1: {
      pregunta:
        "Escribes una URL y el navegador muestra la página. ¿Qué papel cumple el servidor en ese intercambio?",
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
      explicacion:
        "El servidor recibe la petición del cliente, localiza o genera el recurso solicitado y devuelve la respuesta. No es un mero almacén ni es el navegador quien decide el contenido.",
    },
    p2: {
      pregunta: "En el modelo cliente-servidor, ¿quién inicia normalmente la comunicación?",
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
      explicacion:
        "En el modelo cliente-servidor el cliente inicia: envía la petición y el servidor, que está a la escucha, responde.",
    },
  },

  "Módem": {
    p1: {
      pregunta:
        "Tu proveedor lleva la señal hasta tu casa por un cable. ¿Cuál es la función específica del módem, frente a la del router?",
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
      explicacion:
        "El módem modula y demodula: convierte la señal entre el formato del proveedor y el digital de tu red. El router solo distribuye esa conexión entre tus dispositivos.",
    },
    p2: {
      pregunta: "¿Qué significa, técnicamente, que un módem 'module y demodule'?",
      opciones: [
        {
          id: "a",
          texto:
            "Que transforma señales de un medio a otro: convierte los datos digitales en la señal que viaja por la línea, y al revés.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Reparte la conexión entrante creando la red WiFi y asignando una dirección a cada dispositivo conectado.",
          correcto: false,
        },
      ],
      explicacion:
        "Modular/demodular es transformar la señal de un medio a otro: convierte los datos digitales en la señal que viaja por la línea, y al revés. No es amplificar.",
    },
  },

  "Capa Física": {
    p1: {
      pregunta:
        "¿Qué función corresponde a la capa física del modelo OSI?",
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
      explicacion:
        "La capa física transmite los bits como señales por el medio, definiendo voltajes, codificación y temporización. Detectar errores agrupando bits en tramas es de la capa de enlace.",
    },
    p2: {
      pregunta: "¿Cuál de los siguientes pertenece a la capa física?",
      opciones: [
        {
          id: "a",
          texto:
            "Las características eléctricas del cable y los conectores, como los niveles de voltaje que representan un 0 y un 1.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La tarjeta de red del equipo, que es la que coloca los datos en el cable para poder transmitirlos.",
          correcto: false,
        },
      ],
      explicacion:
        "Las características eléctricas del cable y los conectores (los voltajes que representan un 0 y un 1) son de la capa física. La dirección MAC pertenece a la capa de enlace.",
    },
  },

  "Enlace de datos": {
    p1: {
      pregunta: "Dos equipos conectados al mismo switch intercambian datos. ¿De qué se encarga la capa de enlace de datos en esa comunicación?",
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
      explicacion:
        "La capa de enlace entrega tramas entre nodos de la misma red usando direcciones MAC y detecta errores de la capa física. Elegir la ruta entre redes es de la capa de red.",
    },
    p2: {
      pregunta: "¿Qué tipo de dirección utiliza la capa de enlace de datos para identificar a los equipos?",
      opciones: [
        {
          id: "a",
          texto:
            "La dirección MAC, un identificador físico único asociado a la interfaz de red de cada dispositivo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Direcciones IP, que identifican a cada equipo para que la trama logre llegar hasta su destino final.",
          correcto: false,
        },
      ],
      explicacion:
        "Usa la dirección MAC, un identificador físico asociado a la interfaz de red de cada equipo. La dirección IP corresponde a la capa de red.",
    },
  },

  "Capa de Red": {
    p1: {
      pregunta:
        "Un paquete debe viajar desde una red en México hasta otra en Japón, atravesando muchas redes intermedias. ¿Qué capa del OSI determina la ruta?",
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
      explicacion:
        "La capa de red usa las direcciones IP y los routers para decidir el camino entre redes distintas. La de transporte controla el envío extremo a extremo, no elige la ruta.",
    },
    p2: {
      pregunta: "¿Qué dispositivo trabaja principalmente en la capa de red?",
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
      explicacion:
        "El router trabaja en la capa de red: reenvía paquetes entre redes distintas según la IP de destino. El switch opera en la capa de enlace con direcciones MAC.",
    },
  },

  Transporte: {
    p1: {
      pregunta: "Una aplicación debe enviar datos y elegir entre TCP y UDP. ¿Cuál es la diferencia esencial entre ambos?",
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
      explicacion:
        "TCP da entrega confiable, ordenada y con control de flujo; UDP no garantiza entrega ni orden, pero tiene menos sobrecarga. La diferencia no es el cifrado ni el alcance de red.",
    },
    p2: {
      pregunta: "¿Por qué una videollamada en tiempo real suele usar UDP?",
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
      explicacion:
        "Una videollamada prioriza la baja latencia: reenviar un paquete atrasado no sirve, es mejor seguir con los datos recientes. Por eso UDP, que no espera confirmaciones.",
    },
  },

  "Sesión": {
    p1: {
      pregunta:
        "Durante una videollamada de una hora, ¿qué capa del OSI establece, mantiene y finaliza el diálogo entre las aplicaciones?",
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
      explicacion:
        "La capa de sesión abre, sincroniza (con puntos de control) y cierra ordenadamente el diálogo entre aplicaciones. Mantener la conexión TCP es de transporte; el formato, de presentación.",
    },
    p2: {
      pregunta: "¿Qué función es propia de la capa de sesión y no de otras?",
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
      explicacion:
        "Lo propio de la sesión es gestionar y sincronizar el diálogo entre aplicaciones, con puntos de control para reanudarlo tras una interrupción. La entrega sin errores es de transporte.",
    },
  },

  "Presentación": {
    p1: {
      pregunta:
        "Tu navegador recibe datos cifrados con HTTPS y los muestra como texto e imágenes legibles. ¿Qué capa del OSI se ocupa del descifrado y la conversión de formato?",
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
      explicacion:
        "La capa de presentación traduce, comprime y descifra los datos para que la aplicación pueda interpretarlos. No es la de aplicación ni la de transporte.",
    },
    p2: {
      pregunta: "¿Cuál de estas tareas es propia de la capa de presentación?",
      opciones: [
        {
          id: "a",
          texto:
            "Convertir la codificación de los caracteres y aplicar el cifrado o descifrado de los datos transmitidos.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La apertura y el cierre de la sesión de comunicación que mantienen entre sí las dos aplicaciones.",
          correcto: false,
        },
      ],
      explicacion:
        "Convertir la codificación de los caracteres y aplicar el cifrado o descifrado es propio de la capa de presentación. Determinar la ruta es de la capa de red.",
    },
  },

  "Aplicación": {
    p1: {
      pregunta:
        "¿Por qué se dice que HTTP, FTP y SMTP pertenecen a la capa de aplicación del modelo OSI?",
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
      explicacion:
        "HTTP, FTP y SMTP definen cómo las aplicaciones intercambian datos por la red: son protocolos, no la app en sí ni la gestión de sesión.",
    },
    p2: {
      pregunta: "¿El navegador web 'es' la capa de aplicación del modelo OSI?",
      opciones: [
        {
          id: "a",
          texto:
            "No: el navegador es un programa; la capa de aplicación son los protocolos, como HTTP, que ese programa utiliza.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: la capa de aplicación es justamente el programa con el que el usuario interactúa de forma directa.",
          correcto: false,
        },
      ],
      explicacion:
        "No: el navegador es un programa; la capa de aplicación son los protocolos (como HTTP) que ese programa utiliza para comunicarse.",
    },
  },

  "HTTP/HTTPS": {
    p1: {
      pregunta: "Un banco exige HTTPS en lugar de HTTP. ¿Cuál es la diferencia técnica que justifica esa exigencia?",
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
      explicacion:
        "HTTPS cifra la comunicación con TLS: aunque alguien intercepte el tráfico, no puede leerlo ni alterarlo. No solo verifica el certificado dejando los datos en claro.",
    },
    p2: {
      pregunta: "¿Qué aporta concretamente la capa TLS que usa HTTPS?",
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
      explicacion:
        "TLS cifra el canal y autentica al servidor mediante certificados, protegiendo la confidencialidad y la integridad de los datos. No es que 'acelere' la conexión.",
    },
  },

  DNS: {
    p1: {
      pregunta:
        "Escribes 'google.com' en el navegador. ¿Qué tarea realiza el DNS antes de que se establezca la conexión?",
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
      explicacion:
        "El DNS resuelve el nombre de dominio a su dirección IP, porque la conexión se establece con la IP y no con el nombre. No localiza el servidor más cercano ni valida certificados.",
    },
    p2: {
      pregunta: "Si el servidor DNS no logra resolver un dominio, ¿qué ocurre?",
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
      explicacion:
        "Sin resolución DNS el navegador no obtiene la IP del sitio, así que no puede conectarse aunque el servidor web esté funcionando.",
    },
  },

  "Dirección IP": {
    p1: {
      pregunta:
        "Dos dispositivos en la misma red WiFi tienen IPs distintas. ¿Por qué es necesario que cada uno tenga una dirección única?",
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
      explicacion:
        "Cada equipo necesita una IP única para que el enrutamiento entregue cada paquete al destino correcto; dos IPs iguales provocan un conflicto de direcciones.",
    },
    p2: {
      pregunta: "¿Qué diferencia hay entre una dirección IP privada y una pública?",
      opciones: [
        {
          id: "a",
          texto:
            "La privada identifica al equipo dentro de la red local; la pública identifica a toda esa red ante internet.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La pública es la que el proveedor asigna a cada equipo y la privada es la que tú configuras de forma manual.",
          correcto: false,
        },
      ],
      explicacion:
        "La IP privada identifica al equipo dentro de la red local; la pública identifica a toda esa red ante internet.",
    },
  },

  // ─── U4 · Lenguajes de Programación ──────────────────────────
  Algoritmo: {
    p1: {
      pregunta:
        "¿Bajo qué condición una receta de cocina puede considerarse, en sentido estricto, un algoritmo?",
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
      explicacion:
        "Una receta es algoritmo solo si sus pasos son precisos, finitos y no ambiguos y llevan siempre a un resultado; 'sazonar al gusto' lo descalifica por ambiguo.",
    },
    p2: {
      pregunta: "¿Cuál es una propiedad imprescindible de todo algoritmo?",
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
      explicacion:
        "Todo algoritmo debe terminar en un número finito de pasos y tener cada paso definido sin ambigüedad. No necesita ejecutarse en una computadora.",
    },
  },

  Variable: {
    p1: {
      pregunta:
        "En un programa que promedia calificaciones, ¿qué caracteriza a una variable frente a una constante?",
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
      explicacion:
        "Una variable es un espacio de memoria con nombre cuyo valor puede cambiar durante la ejecución; la constante no varía. No se distinguen por el tipo de dato que guardan.",
    },
    p2: {
      pregunta: "¿Qué distingue de raíz a una variable de una constante?",
      opciones: [
        {
          id: "a",
          texto:
            "Que el valor de una variable puede reasignarse mientras el programa corre, mientras que el de una constante no.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Que la variable se guarda en la memoria RAM y la constante queda grabada en el disco junto con el programa.",
          correcto: false,
        },
      ],
      explicacion:
        "Lo que las distingue de raíz es que el valor de una variable puede reasignarse mientras el programa corre, y el de una constante no.",
    },
  },

  "Estructura de control": {
    p1: {
      pregunta:
        "Un cajero comprueba el saldo y, según el resultado, entrega el dinero o muestra un error. ¿Qué estructura de control modela ese comportamiento?",
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
      explicacion:
        "Evaluar una condición y ejecutar un bloque distinto según el resultado es una estructura de selección (if/else). No es una iteración (repetir) ni una secuencia.",
    },
    p2: {
      pregunta: "¿Cuál es la diferencia esencial entre una selección y una iteración?",
      opciones: [
        {
          id: "a",
          texto:
            "La selección ejecuta un bloque a lo sumo una vez según una condición; la iteración lo repite mientras esta se cumpla.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "La selección elige entre dos caminos y la iteración entre varios, pero ninguna de las dos repite instrucciones.",
          correcto: false,
        },
      ],
      explicacion:
        "La selección ejecuta un bloque a lo sumo una vez según una condición; la iteración lo repite mientras esa condición se cumpla.",
    },
  },

  Compilado: {
    p1: {
      pregunta:
        "Un programa en C se compila a un ejecutable que se distribuye a los usuarios. Frente a un lenguaje interpretado, ¿qué ventaja aporta la compilación?",
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
      explicacion:
        "Al compilar, el código ya queda traducido a lenguaje máquina y se ejecuta directo sobre el hardware, sin traducirse en el momento. Eso no lo hace universal entre sistemas.",
    },
    p2: {
      pregunta: "¿Necesita el usuario tener el compilador instalado para ejecutar un programa ya compilado?",
      opciones: [
        {
          id: "a",
          texto:
            "No: el compilador solo se usa al construir el ejecutable; una vez generado, este corre por sí solo.",
          correcto: true,
        },
        {
          id: "b",
          texto:
            "Sí: el compilador debe volver a traducir el .exe al lenguaje de cada computadora donde se vaya a ejecutar.",
          correcto: false,
        },
      ],
      explicacion:
        "No: el compilador solo se usa al construir el ejecutable. Una vez generado, este corre por sí solo sin necesidad del compilador.",
    },
  },

  Interpretado: {
    p1: {
      pregunta: "Ejecutas un script de Python. ¿Qué implica, en la práctica, que Python sea un lenguaje interpretado?",
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
      explicacion:
        "En un lenguaje interpretado, un intérprete traduce y ejecuta el código sobre la marcha; un error en una línea detiene la ejecución al llegar a ella. No se compila todo antes.",
    },
    p2: {
      pregunta: "¿Por qué se necesita el intérprete instalado en la máquina donde corre el programa?",
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
      explicacion:
        "La traducción del código ocurre en tiempo de ejecución, así que sin el intérprete instalado no hay nada que lo procese.",
    },
  },

  Imperativo: {
    p1: {
      pregunta: "El paradigma imperativo se caracteriza por indicar a la máquina CÓMO hacer las cosas. ¿Qué ejemplo lo refleja con mayor precisión?",
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
      explicacion:
        "El imperativo indica CÓMO: un ciclo que recorre una lista sumando elementos, donde el programador define cada paso y controla el flujo. Una consulta SQL o reglas lógicas son declarativas.",
    },
    p2: {
      pregunta: "¿Cuál es el rasgo definitorio del paradigma imperativo?",
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
      explicacion:
        "Lo definitorio del imperativo es describir explícitamente la secuencia de pasos y los cambios de estado que llevan hasta el resultado. Describir solo el resultado es declarativo.",
    },
  },

  Declarativo: {
    p1: {
      pregunta:
        "La consulta SQL `SELECT * FROM alumnos WHERE promedio > 8` se considera declarativa. ¿Por qué?",
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
      explicacion:
        "SQL es declarativo porque expresas QUÉ datos quieres, no CÓMO obtenerlos; el motor decide internamente la forma más eficiente. No describe el recorrido paso a paso.",
    },
    p2: {
      pregunta: "En un programa declarativo, ¿quién determina los pasos concretos para llegar al resultado?",
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
      explicacion:
        "En lo declarativo, el sistema o motor de ejecución (como el optimizador de consultas) determina los pasos concretos, no la persona que programa.",
    },
  },
};
