export const COMPONENTS_DATA = [
	{ id: "ik-modal", name: "IkModal", category: "Modales", tag: "CRUD & Tabs" },
	{ id: "confirm-modal", name: "ConfirmModal", category: "Modales", tag: "Diálogo" },
	{ id: "notification-dialog", name: "NotificationDialog", category: "Modales", tag: "Alertas" },
	{ id: "loading", name: "Loading", category: "Modales", tag: "Dimmer" },
	{ id: "ik-table", name: "IkTable", category: "Componentes", tag: "Tablas & Datos" },
	{ id: "card", name: "Card", category: "Componentes", tag: "Contenedores & UI" },
	{ id: "file-manager", name: "FileManager", category: "Componentes", tag: "Archivos & Multimedia" },
	{ id: "text", name: "Text", category: "Componentes", tag: "Tipografía" },
	{ id: "text-area", name: "TextArea", category: "Componentes", tag: "Formularios" },
	{ id: "input", name: "Input", category: "Componentes", tag: "Formularios" },
	{ id: "dropdown", name: "Dropdown", category: "Componentes", tag: "Formularios & Selección" },
	{ id: "toggle", name: "Toggle", category: "Componentes", tag: "Formularios & Switch" },
	{ id: "color-picker", name: "ColorPicker", category: "Componentes", tag: "Formularios & Color" },
	{ id: "sidebar", name: "SideBar", category: "Componentes", tag: "Navegación" },
	{ id: "sidebar-menu", name: "SideBarMenu", category: "Componentes", tag: "Navegación" },
];

export const IK_TABLE_COLUMNS = [
	{ key: "id", label: "ID", order: true },
	{ key: "name", label: "Usuario", order: true },
	{ key: "email", label: "Correo Electrónico", order: true },
	{ key: "role", label: "Rol", order: true },
	{ key: "status", label: "Estado", format: "label", order: true },
];

export const IK_TABLE_SAMPLE_DATA = [
	{ id: 1, name: "Jeremy Reyes", email: "jeremy@ikompras.com", role: "Super Admin", status: "Activo" },
	{ id: 2, name: "Ana Torres", email: "ana.torres@ikompras.com", role: "Supervisor", status: "Activo" },
	{ id: 3, name: "Carlos López", email: "carlos.l@ikompras.com", role: "Agente de Soporte", status: "Inactivo" },
	{ id: 4, name: "María Gómez", email: "maria.g@ikompras.com", role: "Ventas", status: "Activo" },
	{ id: 5, name: "Pedro Soto", email: "pedro.s@ikompras.com", role: "Desarrollador", status: "Activo" },
];

export const SIDEBAR_SAMPLE_MENU = [
	{ id: "1", name: "Dashboard", icon: "dashboard", path: "/dashboard", type: "menu" },
	{
		id: "2",
		name: "Monitoreo",
		icon: "desktop",
		path: "/monitor",
		type: "menu",
		subMenu: [
			{ id: "2-1", name: "Chats Activos", path: "/chats", icon: "comments" },
			{ id: "2-2", name: "Agentes", path: "/agents", icon: "users" },
		],
	},
	{ id: "3", type: "divider" },
	{ id: "4", name: "Configuración", icon: "setting", path: "/settings", type: "menu" },
];

export const COMPONENT_PROPS = {
	ikModal: [
		{ name: "title", type: "string", default: '"Title"', description: "Título mostrado en la cabecera del modal." },
		{
			name: "mode",
			type: '"Add" | "Edit" | "Watch"',
			default: '"Add"',
			description: "Modo operativo para alternar iconos y botones de acción.",
		},
		{ name: "size", type: "string", default: '""', description: 'Tamaño: "mini", "tiny", "small", "large", "fullScreen".' },
		{ name: "tabs", type: "array", default: "[]", description: "Listado de botones de navegación superior con iconos y badges." },
		{
			name: "closeInside",
			type: "bool",
			default: "false",
			description: "Ubica la 'X' de cierre dentro del modal en la esquina superior derecha con fondo rojo estilizado y espacio reservado.",
		},
		{ name: "onSuccess", type: "func", default: "() => {}", description: "Función llamada al hacer clic en Guardar o Modificar." },
		{ name: "onClose", type: "func", default: "() => {}", description: "Función llamada al cerrar o presionar atrás." },
	],
	confirmModal: [
		{ name: "visible", type: "bool", default: "false", description: "Controla la visibilidad del modal." },
		{ name: "header", type: "string", default: '""', description: "Texto del encabezado." },
		{ name: "content", type: "string", default: '""', description: "Texto descriptivo de la confirmación." },
		{ name: "focus", type: "string", default: '""', description: "Texto o palabra clave a resaltar en negrita." },
		{ name: "buttonLabel", type: "string", default: '"Salir"', description: "Etiqueta del botón de confirmación." },
		{ name: "cancelLabel", type: "string", default: '"Atrás"', description: "Etiqueta del botón de cancelar." },
		{ name: "onConfirm", type: "func", default: "() => {}", description: "Callback al confirmar la acción." },
		{ name: "onDismiss", type: "func", default: "() => {}", description: "Callback al cancelar o cerrar." },
	],
	notificationDialog: [
		{ name: "isVisible", type: "bool", default: "false", description: "Indica si el diálogo está abierto." },
		{ name: "isError", type: "bool", default: "false", description: "Aplica estilo y color rojo de error o verde de éxito." },
		{
			name: "text",
			type: "string | object",
			default: '""',
			description: "Mensaje o respuesta de la API (parsea objetos automáticamente).",
		},
		{ name: "onDismiss", type: "func", default: "() => {}", description: "Callback al hacer clic en el botón Cerrar." },
	],
	loading: [{ name: "isFetching", type: "bool", default: "false", description: "Activa o desactiva el Dimmer con el loader animado." }],
	text: [
		{ name: "children", type: "node | string", default: '""', description: "Contenido del texto a renderizar." },
		{
			name: "withMarkdown",
			type: "bool",
			default: "false",
			description: "Habilita parseo de sintaxis WhatsApp (*negrita*, _cursiva_, ~tachado~).",
		},
		{ name: "as", type: "string", default: '"p"', description: "Elemento semántico HTML (p, h1, span, etc.)." },
	],
	textArea: [
		{ name: "label", type: "string", default: '""', description: "Etiqueta mostrada sobre el campo." },
		{ name: "value", type: "string", default: '""', description: "Valor actual del campo." },
		{ name: "onChange", type: "func", default: "() => {}", description: "Handler de cambio de valor." },
		{ name: "showCount", type: "bool", default: "false", description: "Muestra el conteo de caracteres actuales." },
		{ name: "maxLength", type: "number", default: "undefined", description: "Límite máximo de caracteres permitidos." },
		{ name: "isPassword", type: "bool", default: "false", description: "Oculta el texto y muestra el botón de alternar visibilidad." },
		{ name: "showRequired", type: "bool", default: "false", description: "Muestra el asterisco rojo de campo requerido." },
		{ name: "minRows", type: "number", default: "1", description: "Cantidad mínima de filas del área de texto." },
	],
	input: [
		{ name: "label", type: "string | node", default: "undefined", description: "Etiqueta mostrada sobre el input." },
		{
			name: "infoLabel / hint / info",
			type: "string | node",
			default: "undefined",
			description: "Tooltip informativo flotante con icono (i) al hacer hover.",
		},
		{ name: "required", type: "bool", default: "false", description: "Muestra asterisco rojo (*) y aplica required al input." },
		{
			name: "type",
			type: 'string ("text" | "password" | "link" | "pin")',
			default: '"text"',
			description: "Tipo de input. Soporta 'link' (botón Copiar), 'pin' (Generar + ojito), 'password' y estándar.",
		},
		{
			name: "isLink",
			type: "bool",
			default: "false",
			description: "Modo enlace con botón automático 'Copiar', ícono linkify y feedback visual '¡Copiado!'.",
		},
		{
			name: "isPin",
			type: "bool",
			default: "false",
			description: "Modo PIN con botón automático 'Generar', ojito para alternar visibilidad e ícono de clave.",
		},
		{
			name: "inlineLabel",
			type: "string | node",
			default: "undefined",
			description:
				"Etiqueta o prefijo integrado adyacente a la izquierda del campo (por ejemplo 'Min', 'USD', 'https://'), idéntico al patrón de Daykal.",
		},
		{
			name: "copyLabel",
			type: "string",
			default: '"Copiar"',
			description: "Texto del botón de copiado en modo link (cambia a '¡Copiado!').",
		},
		{ name: "generateLabel", type: "string", default: '"Generar"', description: "Texto del botón de generación en modo PIN." },
		{ name: "pinLength", type: "number", default: "4", description: "Cantidad de dígitos generados automáticamente para el PIN." },
		{ name: "onGeneratePin", type: "func", default: "undefined", description: "Función personalizada para generar el valor del PIN." },
		{
			name: "onCopy",
			type: "func",
			default: "undefined",
			description: "Callback disparado al copiar el valor al portapapeles: (text, event) => {}.",
		},
		{ name: "value", type: "string", default: '""', description: "Valor del input." },
		{ name: "onChange", type: "func", default: "() => {}", description: "Handler disparado al cambiar el valor." },
		{ name: "placeholder", type: "string", default: '""', description: "Texto provisional (por defecto toma el label si es texto)." },
		{ name: "isPassword", type: "bool", default: "false", description: "Modo contraseña con botón para alternar visibilidad." },
		{ name: "disabled", type: "bool", default: "false", description: "Deshabilita la edición del campo con fondo grisáceo." },
		{
			name: "watch",
			type: "bool",
			default: "false",
			description:
				"Modo consulta/bloqueado (compatible con IkModal 'Watch'). Deshabilita la edición y oculta automáticamente la 'X' y el botón 'Generar'.",
		},
		{ name: "hideGenerate", type: "bool", default: "false", description: "Oculta el botón 'Generar' en inputs de tipo PIN." },
		{ name: "rounded", type: "bool", default: "false", description: "Aplica esquinas redondeadas (border-radius: 1rem)." },
		{ name: "icon", type: "string", default: "undefined", description: "Nombre del icono de Semantic UI mostrado a la izquierda." },
		{ name: "onClear", type: "func", default: "null", description: "Callback disparado al presionar el botón de limpiar valor." },
	],
	dropdown: [
		{ name: "label", type: "string | node", default: "undefined", description: "Texto o elemento mostrado en la etiqueta superior." },
		{ name: "required", type: "bool", default: "false", description: "Muestra asterisco rojo (*) indicando obligatoriedad." },
		{
			name: "hint / infoLabel",
			type: "string | node",
			default: "undefined",
			description: "Muestra ícono de ayuda con tooltip informativo flotante.",
		},
		{ name: "error", type: "bool", default: "false", description: "Aplica estado visual de error con borde rojo y resalte." },
		{
			name: "errorMessage",
			type: "string | node",
			default: "undefined",
			description: "Mensaje de validación mostrado bajo el campo con ícono y estilo de alerta.",
		},
		{
			name: "multiple",
			type: "bool",
			default: "false",
			description: "Permite selección múltiple de elementos representados como chips interactivos.",
		},
		{
			name: "checkbox / useCheckbox",
			type: "bool",
			default: "false",
			description:
				"Variante checklist: muestra checkboxes cuadrados en cada opción y mantiene visibles las opciones seleccionadas en el menú desplegable.",
		},
		{ name: "search", type: "bool", default: "true", description: "Permite filtrar opciones escribiendo texto en tiempo real." },
		{ name: "clearable", type: "bool", default: "true", description: "Permite limpiar la selección actual mediante botón 'x'." },
		{ name: "selection", type: "bool", default: "true", description: "Aplica formato estándar de selección desplegable." },
		{ name: "fluid", type: "bool", default: "true", description: "Expande el ancho del dropdown al 100% de su contenedor." },
		{ name: "disabled", type: "bool", default: "false", description: "Deshabilita la interacción con opacidad y fondo gris suave." },
		{ name: "loading", type: "bool", default: "false", description: "Muestra spinner de carga dentro del dropdown." },
		{ name: "rounded", type: "bool", default: "false", description: "Aplica bordes redondeados modernos (0.875rem / 1rem)." },
		{
			name: "size",
			type: '"small" | "medium" | "large"',
			default: '"medium"',
			description: "Tamaño y altura del componente (medium = 38px base).",
		},
		{
			name: "options",
			type: "array",
			default: "[]",
			description: "Listado de opciones con formato Semantic UI [{ key, value, text, icon, ... }].",
		},
		{ name: "value", type: "string | number | array", default: "undefined", description: "Valor seleccionado en modo controlado." },
		{ name: "defaultValue", type: "string | number | array", default: "undefined", description: "Valor inicial en modo no controlado." },
		{ name: "onChange", type: "func", default: "undefined", description: "Callback al cambiar valor: (event, data) => {}." },
		{ name: "placeholder", type: "string", default: '""', description: "Texto de marcador de posición temporal." },
		{
			name: "noResultsMessage",
			type: "string | node",
			default: '"No hay resultados"',
			description: "Mensaje cuando la búsqueda no coincide con opciones.",
		},
		{
			name: "showId",
			type: "bool",
			default: "false",
			description: "Muestra automáticamente un badge con el ID en cada opción (estilo Max Monitor).",
		},
		{
			name: "idKey",
			type: "string",
			default: '"id"',
			description: "Propiedad del objeto de la opción utilizada para extraer el ID cuando showId es true.",
		},
		{
			name: "idBadgeColor",
			type: "string",
			default: '"teal"',
			description: "Color de fondo del badge del ID ('teal', 'blue', 'green', 'orange', 'red' o código hexadecimal).",
		},
		{
			name: "renderOption",
			type: "func",
			default: "undefined",
			description: "Renderizador personalizado para las opciones de la lista desplegable: (option, isSelected) => ReactNode.",
		},
	],
	sideBar: [
		{ name: "menu", type: "array", default: "[]", description: "Arreglo de elementos y submenús del SideBar." },
		{ name: "isExtended", type: "bool", default: "false", description: "Estado de expansión o colapso." },
		{ name: "handleToggle", type: "func", default: "() => {}", description: "Función para alternar entre expandido y colapsado." },
		{ name: "companyName", type: "string", default: '""', description: "Nombre de la empresa en la cabecera móvil." },
		{ name: "onNavigate", type: "func", default: "null", description: "Función de navegación al seleccionar una opción." },
		{ name: "currentPath", type: "string", default: '""', description: "Ruta activa actual para destacar la selección." },
	],
	ikTable: [
		{ name: "columns", type: "array", default: "[]", description: "Definición de columnas: key, label, order, format." },
		{ name: "data", type: "array", default: "[]", description: "Listado de objetos a renderizar en las filas." },
		{ name: "totalRows", type: "number", default: "0", description: "Total de registros para el cálculo de paginación." },
		{ name: "showAddButton", type: "bool", default: "true", description: "Muestra el botón de añadir en la barra superior." },
		{ name: "addButton", type: "object", default: "{}", description: "Configuración del botón de añadir (label, icon)." },
		{ name: "onAddButtonClick", type: "func", default: "null", description: "Disparador al presionar el botón de añadir." },
		{ name: "searcher", type: "object", default: "{}", description: "Configuración de la barra de búsqueda (placeholder, show)." },
		{ name: "handlerTable", type: "func", default: "null", description: "Callback de eventos de tabla (paginación, orden, clicks)." },
	],
	card: [
		{
			name: "variant",
			type: '"elevated" | "outlined" | "flat" | "soft" | "glass" | "gradient"',
			default: '"elevated"',
			description: "Estilo visual de la tarjeta ('soft' es ideal para sub-tarjetas con fondo entintado).",
		},
		{
			name: "collapsible",
			type: "bool",
			default: "false",
			description: "Permite colapsar/expandir el cuerpo de la tarjeta mediante botón o clic en cabecera.",
		},
		{
			name: "defaultCollapsed",
			type: "bool",
			default: "false",
			description: "Estado inicial de colapso no controlado.",
		},
		{
			name: "collapseTrigger",
			type: '"button" | "header"',
			default: '"button"',
			description: "Si el colapso se activa solo con el botón Chevron o con cualquier clic en la cabecera.",
		},
		{
			name: "onCollapseChange",
			type: "func",
			default: "undefined",
			description: "Callback disparado al alternar el estado de colapso: (isCollapsed) => {}.",
		},
		{
			name: "color",
			type: 'string ("primary" | "secondary" | "success" | "warning" | "danger" | "info" | "dark" | hex)',
			default: "undefined",
			description: "Preset temático o color HEX/RGB personalizado.",
		},
		{ name: "bgColor", type: "string", default: "undefined", description: "Color de fondo personalizado (HEX, RGB o CSS variable)." },
		{ name: "textColor", type: "string", default: "undefined", description: "Color de texto personalizado." },
		{ name: "borderColor", type: "string", default: "undefined", description: "Color de borde personalizado." },
		{ name: "accentColor", type: "string", default: "undefined", description: "Color de la barra de acento o halo." },
		{
			name: "accent",
			type: 'string | array | object ("left bottom", ["left", "bottom"], "all", etc.)',
			default: '"none"',
			description:
				"Posición o combinación de bordes decorativos de acento. Acepta posiciones individuales ('top', 'left', 'bottom', 'right'), combinaciones por string ('left bottom', 'top, right', 'all') o arrays (['left', 'bottom']).",
		},
		{
			name: "direction",
			type: '"vertical" | "horizontal"',
			default: '"vertical"',
			description: "Orientación del contenido de la tarjeta.",
		},
		{
			name: "responsive",
			type: "bool",
			default: "true",
			description: "Si es horizontal, conmuta a vertical en dispositivos móviles de forma automática.",
		},
		{ name: "hoverable", type: "bool", default: "false", description: "Añade elevación suave y resalte al posar el cursor." },
		{ name: "glow", type: "bool", default: "false", description: "Efecto de halo o aura de luz resplandeciente en hover." },
		{
			name: "clickable",
			type: "bool",
			default: "false",
			description: "Habilita cursor pointer, microinteracción de click y accesibilidad por teclado.",
		},
		{ name: "fluid", type: "bool", default: "true", description: "Ocupa el 100% del ancho del contenedor padre." },
		{
			name: "radius",
			type: '"none" | "small" | "medium" | "large" | "xl" | "full" | string',
			default: '"large"',
			description: "Curvatura de esquinas (o valor CSS ej: '24px').",
		},
		{
			name: "padding",
			type: '"none" | "small" | "medium" | "large"',
			default: "undefined",
			description: "Padding global opcional del contenedor.",
		},
		{ name: "loading", type: "bool", default: "false", description: "Muestra dimmer translúcido con spinner de carga." },
	],
	toggle: [
		{ name: "checked", type: "bool", default: "undefined", description: "Estado booleano activo/inactivo (modo controlado)." },
		{ name: "defaultChecked", type: "bool", default: "false", description: "Estado inicial del interruptor (modo no controlado)." },
		{ name: "onChange", type: "func", default: "undefined", description: "Callback disparado al alternar: (nextChecked, event) => {}." },
		{ name: "label", type: "string | node", default: "undefined", description: "Etiqueta descriptiva del interruptor." },
		{
			name: "labelPosition",
			type: '"left" | "right"',
			default: '"right"',
			description: "Ubicación del texto con respecto al interruptor.",
		},
		{
			name: "description",
			type: "string | node",
			default: "undefined",
			description: "Texto secundario o pista ubicado debajo de la etiqueta.",
		},
		{ name: "size", type: '"small" | "medium" | "large"', default: '"medium"', description: "Dimensiones del componente." },
		{
			name: "trueColor",
			type: "string (hex | --variable | preset)",
			default: '"primary"',
			description: "Color de fondo en estado activo (true). Acepta hex (#10b981), variable CSS (--accent o var(--accent)) o preset.",
		},
		{
			name: "falseColor",
			type: "string (hex | --variable | preset)",
			default: '"#cbd5e1"',
			description: "Color de fondo en estado inactivo (false). Acepta hex (#f43f5e), variable CSS (--red500 o var(--red500)) o preset.",
		},
		{
			name: "color",
			type: "string (hex | --variable | preset)",
			default: '"primary"',
			description: "Alias para trueColor.",
		},
		{ name: "title", type: "string | node", default: "undefined", description: "Texto de cabecera mostrado sobre el interruptor." },
		{
			name: "tposition / titlePosition",
			type: '"top" | "left" | "right" | "bottom"',
			default: '"left"',
			description: "Posición del título respecto al interruptor ('top' lo ubica arriba del switch).",
		},
		{
			name: "titleAlign",
			type: '"left" | "center" | "right"',
			default: '"left"',
			description: "Alineación horizontal del título cuando tposition es 'top' o 'bottom'.",
		},
		{ name: "disabled", type: "bool", default: "false", description: "Deshabilita la interacción con opacidad reducida." },
	],
	fileManager: [
		{
			name: "files",
			type: "array | string",
			default: "[]",
			description: "Lista de archivos o URLs (fotos, videos, audios, documentos o data URLs).",
		},
		{
			name: "setFiles",
			type: "func",
			default: "() => {}",
			description: "Función para actualizar el estado de los archivos.",
		},
		{
			name: "type",
			type: '"all" | "image" | "video" | "audio" | "media" | "file"',
			default: '"all"',
			description: "Filtro principal. 'all' admite fotos, videos, audios, pdfs, ofimática y zip.",
		},
		{
			name: "accept",
			type: "string",
			default: "null",
			description: "Cadena de tipos MIME o extensiones aceptadas personalizadas (ej: 'image/*,video/*').",
		},
		{
			name: "multiple",
			type: "bool",
			default: "false",
			description: "Permite seleccionar y gestionar múltiples archivos a la vez.",
		},
		{
			name: "width",
			type: "number",
			default: "3",
			description: "Ancho en rem de cada miniatura o tarjeta de archivo.",
		},
		{
			name: "height",
			type: "number",
			default: "3",
			description: "Alto en rem de cada miniatura o tarjeta de archivo.",
		},
		{
			name: "rounded",
			type: "bool",
			default: "false",
			description: "Diseño circular para fotos de perfil o avatares.",
		},
		{
			name: "disabled",
			type: "bool",
			default: "false",
			description: "Deshabilita la subida y eliminación de adjuntos.",
		},
		{
			name: "icon",
			type: "string",
			default: '"paperclip"',
			description: "Nombre del icono Semantic UI para el botón de subida.",
		},
		{
			name: "downloadFileFetcher",
			type: "func",
			default: "undefined",
			description: "Función asíncrona ({ uri }) para resolver URLs firmadas o de descarga.",
		},
		{
			name: "images / setImages",
			type: "array / func",
			default: "[]",
			description: "Props retrocompatibles heredadas de versiones anteriores de FileManager.",
		},
	],
	colorPicker: [
		{
			name: "value / currentColor",
			type: "string",
			default: '"#00B5AD"',
			description: "Código Hexadecimal del color seleccionado (admite value o currentColor).",
		},
		{
			name: "onChange / setCurrentColor",
			type: "func",
			default: "undefined",
			description: "Callback ejecutado al cambiar el color, recibe el string Hexadecimal ('#RRGGBB').",
		},
		{
			name: "format",
			type: '"swatch" | "input"',
			default: '"swatch"',
			description:
				"Modo de visualización del disparador: 'swatch' (botón compacto con muestra de color) o 'input' (campo de formulario completo).",
		},
		{
			name: "popover",
			type: "bool",
			default: "true",
			description: "Si es true, abre el selector en un popover flotante; si es false, lo muestra embebido/inline.",
		},
		{
			name: "presets",
			type: "array",
			default: "DEFAULT_PRESETS",
			description: "Array de colores Hexadecimales para la barra de presets o colores sugeridos.",
		},
		{
			name: "showPresets",
			type: "bool",
			default: "true",
			description: "Muestra u oculta la sección de presets rápidos en el panel.",
		},
		{
			name: "showEyeDropper",
			type: "bool",
			default: "true",
			description: "Muestra el botón de cuentagotas con la EyeDropper API nativa del navegador.",
		},
		{
			name: "showHexInput",
			type: "bool",
			default: "true",
			description: "Muestra el input de texto editable para escribir o pegar códigos Hex directamente.",
		},
		{
			name: "label",
			type: "string / node",
			default: "null",
			description: "Etiqueta superior del campo.",
		},
		{
			name: "info / infoLabel / hint",
			type: "string / node",
			default: "null",
			description: "Tooltip informativo que aparece junto a la etiqueta con el icono (i).",
		},
		{
			name: "size",
			type: '"small" | "medium" | "large"',
			default: '"medium"',
			description: "Tamaño visual del control disparador.",
		},
		{
			name: "rounded",
			type: "bool",
			default: "false",
			description: "Aplica bordes redondeados tipo píldora al disparador.",
		},
		{
			name: "disabled",
			type: "bool",
			default: "false",
			description: "Deshabilita la interacción con el selector.",
		},
		{
			name: "error / errorMessage",
			type: "bool / string",
			default: "false / null",
			description: "Muestra el borde de error y mensaje de validación inferior.",
		},
	],
};

export const CODE_SNIPPETS = {
	ikModal: `import { IkModal } from '@ikompras/ik-components';

<IkModal
  title="Crear Contacto"
  mode={mode} // "Add" | "Edit" | "Watch"
  setMode={setMode}
  size="small"
  tabs={[
    { key: "1", state: "general", label: "General", icon: "user", order: 1 },
    { key: "2", state: "security", label: "Seguridad", icon: "lock", order: 2 }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  closeInside={true} // X en la esquina superior derecha interior (roja)
  onClose={() => setIsOpen(false)}
  onSuccess={handleSave}
>
  <p>Contenido del formulario...</p>
</IkModal>`,

	confirmModal: `import { ConfirmModal } from '@ikompras/ik-components';

<ConfirmModal
  visible={isOpen}
  header="Eliminar Registro"
  content="deseas eliminar a"
  focus="Juan Pérez"
  buttonLabel="Eliminar"
  cancelLabel="Atrás"
  onConfirm={handleDelete}
  onDismiss={() => setIsOpen(false)}
/>`,

	notificationDialog: `import { NotificationDialog } from '@ikompras/ik-components';

<NotificationDialog
  isVisible={isOpen}
  isError={false}
  text="Los cambios han sido guardados con éxito."
  onDismiss={() => setIsOpen(false)}
/>`,

	loading: `import { Loading } from '@ikompras/ik-components';

<Loading isFetching={isFetchingData} />`,

	text: `import { Text } from '@ikompras/ik-components';

<Text withMarkdown>
  Hola *Jeremy*, tu código está _listo_ y ~revisado~!
</Text>`,

	textArea: `import { TextArea } from '@ikompras/ik-components';

<TextArea
  label="Descripción del Flujo"
  placeholder="Ingresa los detalles aquí..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  showRequired
  showCount
  maxLength={500}
  minRows={3}
/>`,

	input: `import { Input } from '@ikompras/ik-components';

// 1. Etiqueta Integrada / Inline Label (estilo Daykal)
<Input
  label="Tiempo Sesión:"
  inlineLabel="Min"
  type="number"
  value={sessionTime}
  onChange={(e, data) => setSessionTime(data.value)}
/>

// 2. Tipo Link automático con botón Copiar y feedback
<Input
  type="link"
  label="Enlace de Invitación"
  value="https://ikompras.com/join/workspace-alpha"
  infoLabel="Comparte este enlace para invitar nuevos miembros"
  copyLabel="Copiar"
  onChange={(e, data) => setLink(data.value)}
/>

// 3. Tipo PIN automático con ojito y botón Generar
<Input
  type="pin"
  label="Código PIN de Seguridad"
  required
  pinLength={6}
  infoLabel="PIN de 6 dígitos para autorización de transacciones"
  value={pin}
  onChange={(e, data) => setPin(data.value)}
/>

// 3. Contraseña con ojito para alternar visibilidad
<Input
  isPassword
  label="Contraseña"
  required
  value={password}
  onChange={(e, data) => setPassword(data.value)}
/>

// 4. Búsqueda redondeada estándar
<Input
  rounded
  icon="search"
  placeholder="Buscar por SKU o nombre..."
  value={search}
  onChange={(e, data) => setSearch(data.value)}
/>`,

	sideBar: `import { SideBar } from '@ikompras/ik-components';

<SideBar
  isExtended={isExtended}
  handleToggle={() => setIsExtended(!isExtended)}
  companyName="Mi Empresa"
  menu={[
    { id: "1", name: "Inicio", icon: "home", path: "/" },
    { 
      id: "2", 
      name: "Reportes", 
      icon: "chart bar", 
      path: "/reports",
      subMenu: [
        { id: "2a", name: "Ventas", path: "/sales" }
      ]
    }
  ]}
  onNavigate={(path) => navigate(path)}
/>`,

	ikTable: `import { IkTable } from '@ikompras/ik-components';

const columns = [
  { key: "id", label: "ID", order: true },
  { key: "name", label: "Nombre", order: true },
  { key: "email", label: "Correo", order: true },
  { key: "role", label: "Rol", order: true },
  { key: "status", label: "Estado", format: "label", order: true },
];

<IkTable
  columns={columns}
  data={usersList}
  totalRows={totalUsers}
  defaultParams={{ rows: 10, page: 1 }}
  showAddButton={true}
  addButton={{ label: "Crear Usuario", icon: "plus" }}
  onAddButtonClick={() => setModalOpen(true)}
  searcher={{ placeholder: "Buscar...", show: true }}
  handlerTable={(action, data) => handleTableEvents(action, data)}
/>`,

	card: `import { Card } from '@ikompras/ik-components';
import { Button, Icon } from 'semantic-ui-react';

// 1. Tarjeta Informativa Colapsable con Sub-Tarjetas 'soft'
<Card variant="elevated" collapsible defaultCollapsed={false}>
  <Card.Header
    title="Centro de Información y Políticas Corporativas"
    subtitle="Normativas vigentes y protocolos de auditoría"
    avatar={<Card.Icon name="info circle" color="primary" size="small" />}
    action={<Card.Badge variant="primary">Actualizado 2026</Card.Badge>}
    divider
  />
  <Card.Body>
    <p>Directrices vigentes para adquisiciones y control presupuestario.</p>
    
    {/* Sub-tarjeta 'soft' descriptiva */}
    <Card variant="soft" color="primary" radius="large" hoverable>
      <Card.Body>
        <Card.Icon name="file alternate outline" color="primary" shape="circle" />
        <h4>POLÍTICA GENERAL DE ADQUISICIONES</h4>
        <p>Toda compra debe tramitarse exclusivamente a través de la plataforma con una orden autorizada.</p>
        <Card.Badge variant="primary">
          <Icon name="check" /> Aprobación Digital
        </Card.Badge>
      </Card.Body>
    </Card>
  </Card.Body>
</Card>

// 2. Tarjeta Ejecutiva con Media, Header y Footer
<Card variant="elevated" hoverable glow color="primary" accent="left">
  <Card.Media
    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    aspectRatio="16/9"
    badge={<Card.Badge variant="glass">Auditoría Q3</Card.Badge>}
  />
  <Card.Header
    title="Balance Financiero Consolidado"
    subtitle="Gestión de Tesorería y Cobranzas"
    divider
  />
  <Card.Body>
    <p>Informe consolidado de transacciones electrónicas y conciliaciones en tiempo real.</p>
  </Card.Body>
  <Card.Footer align="between" divider>
    <Card.Badge variant="success">99.98% SLA</Card.Badge>
    <Button primary size="small">Ver Informe Completo</Button>
  </Card.Footer>
</Card>

// 3. Tarjeta con Acentos Combinados (Izquierda + Inferior)
<Card
  variant="outlined"
  accent={["left", "bottom"]} // o también accent="left bottom"
  accentColor="#3b82f6"
  hoverable
>
  <Card.Header title="Monitoreo Continuo" subtitle="Acento combinado en L" />
  <Card.Body>Permite bordes simultáneos como left + bottom, top + right, o 'all'.</Card.Body>
</Card>`,

	toggle: `import { Toggle } from '@ikompras/ik-components';

// 1. Con Variables CSS para True y False
<Toggle
  checked={isEnabled}
  onChange={(checked) => setIsEnabled(checked)}
  trueColor="--accent"
  falseColor="--red500"
  label="Modo Alta Prioridad"
/>

// 2. Con Colores Hexadecimales
<Toggle
  defaultChecked={true}
  trueColor="#10b981"
  falseColor="#f43f5e"
  label="Autenticación en Dos Pasos (2FA)"
/>

// 3. Con Presets del Tema
<Toggle
  trueColor="primary"
  falseColor="secondary"
  size="large"
  label="Notificaciones Push"
/>

// 4. Con Título Arriba (tposition="top")
<Toggle
  title="Facturación Automática"
  tposition="top"
  checked={autoBilling}
  onChange={(val) => setAutoBilling(val)}
  label={autoBilling ? "Habilitada" : "Deshabilitada"}
  trueColor="#16a34a"
/>`,

	fileManager: `import { FileManager } from '@ikompras/ik-components';

// 1. Universal con todos los formatos principales (fotos, videos, audios, pdf, docs, zip)
const [files, setFiles] = useState([
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/horse.mp3',
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
]);

<FileManager
  files={files}
  setFiles={setFiles}
  type="all"
  multiple={true}
  width={4.5}
  height={4.5}
/>

// 2. Modo estricto de sólo fotos / avatares redondeados
<FileManager
  files={avatar}
  setFiles={setAvatar}
  type="image"
  rounded={true}
  width={5}
  height={5}
/>

// 3. Retrocompatibilidad clásica con images / setImages
<FileManager
  images={images}
  setImages={setImages}
  multiple={true}
/>`,

	dropdown: `import { Dropdown } from '@ikompras/ik-components';

// 1. Selección Simple con Búsqueda y Limpieza
<Dropdown
  label="País de Residencia"
  required
  hint="Selecciona tu país fiscal de facturación."
  placeholder="Seleccionar país..."
  options={[
    { key: 'co', value: 'co', text: 'Colombia' },
    { key: 'mx', value: 'mx', text: 'México' },
    { key: 'es', value: 'es', text: 'España' },
    { key: 'ar', value: 'ar', text: 'Argentina' }
  ]}
  value={country}
  onChange={(e, data) => setCountry(data.value)}
  search
  clearable
/>

// 2. Selección Múltiple con Checkboxes (Las opciones permanecen visibles)
<Dropdown
  label="Módulos Habilitados"
  multiple
  checkbox={true}
  search
  clearable
  placeholder="Seleccionar módulos..."
  options={[
    { key: 'crm', value: 'crm', text: 'CRM & Contactos' },
    { key: 'billing', value: 'billing', text: 'Facturación Electrónica' },
    { key: 'inventory', value: 'inventory', text: 'Control de Inventario' },
    { key: 'analytics', value: 'analytics', text: 'Reportes y Métricas' }
  ]}
  value={selectedModules}
  onChange={(e, data) => setSelectedModules(data.value)}
/>

// 3. Selección Múltiple Estándar sin Checkbox
<Dropdown
  label="Etiquetas asignadas"
  multiple
  placeholder="Seleccionar etiquetas..."
  options={tags}
  value={selectedTags}
  onChange={(e, data) => setSelectedTags(data.value)}
/>

// 3. Con Validación y Estado de Error
<Dropdown
  label="Rol de Acceso"
  required
  error={true}
  errorMessage="Debe asignar un rol válido para continuar."
  placeholder="Seleccionar rol..."
  options={roles}
/>`,

	colorPicker: `import { ColorPicker } from '@ikompras/ik-components';

// 1. Formato Swatch Estándar con Label (Etiqueta + Botón, sin input debajo)
<ColorPicker
  label="Color del Módulo:"
  info="Haz clic para seleccionar o personalizar el color"
  value={color}
  onChange={setColor}
  format="swatch"
/>

// 2. Con Presets de Marca Corporativos
<ColorPicker
  label="Color de la Compañía:"
  required
  format="swatch"
  value={brandColor}
  onChange={setBrandColor}
  presets={['#00b5ad', '#3b82f6', '#10b981', '#f59e0b', '#ef4444']}
/>

// 3. Modo Inline (Embebido sin popover flotante)
<ColorPicker
  popover={false}
  value={color}
  onChange={setColor}
/>`,
};
