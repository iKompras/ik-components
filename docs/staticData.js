export const COMPONENTS_DATA = [
	{ id: "ik-modal", name: "IkModal", category: "Modales", tag: "CRUD & Tabs" },
	{ id: "confirm-modal", name: "ConfirmModal", category: "Modales", tag: "Diálogo" },
	{ id: "notification-dialog", name: "NotificationDialog", category: "Modales", tag: "Alertas" },
	{ id: "loading", name: "Loading", category: "Modales", tag: "Dimmer" },
	{ id: "ik-table", name: "IkTable", category: "Componentes", tag: "Tablas & Datos" },
	{ id: "card", name: "Card", category: "Componentes", tag: "Contenedores & UI" },
	{ id: "text", name: "Text", category: "Componentes", tag: "Tipografía" },
	{ id: "text-area", name: "TextArea", category: "Componentes", tag: "Formularios" },
	{ id: "input", name: "Input", category: "Componentes", tag: "Formularios" },
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
		{ name: "infoLabel", type: "string | node", default: "null", description: "Tooltip informativo con icono (i) al hacer hover." },
		{ name: "required", type: "bool", default: "false", description: "Muestra asterisco rojo (*) y aplica required al input." },
		{ name: "value", type: "string", default: '""', description: "Valor del input." },
		{ name: "onChange", type: "func", default: "() => {}", description: "Handler disparado al cambiar el valor." },
		{ name: "placeholder", type: "string", default: '""', description: "Texto provisional (por defecto toma el label si es texto)." },
		{ name: "isPassword", type: "bool", default: "false", description: "Modo contraseña con botón para alternar visibilidad." },
		{ name: "disabled", type: "bool", default: "false", description: "Deshabilita la edición del campo con fondo grisáceo." },
		{ name: "rounded", type: "bool", default: "false", description: "Aplica esquinas redondeadas (border-radius: 1rem)." },
		{ name: "icon", type: "string", default: "undefined", description: "Nombre del icono de Semantic UI mostrado a la izquierda." },
		{ name: "onClear", type: "func", default: "null", description: "Callback disparado al presionar el botón de limpiar valor." },
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
			type: '"none" | "top" | "left" | "bottom" | "right"',
			default: '"none"',
			description: "Posición del borde decorativo de acento.",
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

<Input
  label="Nombre Completo"
  required
  infoLabel="Nombre oficial registrado en el documento de identidad"
  placeholder="Ej: Jeremy Reyes"
  value={name}
  onChange={(e, data) => setName(data.value)}
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
</Card>`,
};
