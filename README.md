# @ikompras/ik-components

Librería de componentes de interfaz de usuario (UI) reutilizables creados en React para los proyectos de **iKompras**. Esta librería está empaquetada con [Vite](https://vitejs.dev/) y alojada en el registro privado/interno de GitHub Packages.

## 📋 Pre-requisitos

Para poder instalar y consumir esta librería en otros proyectos de la empresa, necesitas estar autenticado en GitHub Packages.

La **mejor práctica** (para no tener que configurar cada proyecto individualmente y por seguridad) es configurar tu Token de Acceso Personal (PAT) de GitHub a nivel **global** en tu computadora. El token debe tener el permiso `read:packages`.

Abre tu terminal y ejecuta los siguientes comandos (reemplazando `TU_GITHUB_PERSONAL_ACCESS_TOKEN` con tu token real):

```bash
npm config set @ikompras:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken TU_GITHUB_PERSONAL_ACCESS_TOKEN
```

Esto guardará las credenciales de forma segura en tu usuario del sistema (archivo `~/.npmrc`) y te permitirá instalar la librería en cualquier proyecto de forma automática.

## 📦 Instalación

Una vez configurado el acceso, puedes instalar la librería usando tu gestor de paquetes favorito:

```bash
# Usando npm
npm install @ikompras/ik-components

# Usando yarn
yarn add @ikompras/ik-components
```

*Nota: Esta librería tiene como `peerDependencies` a `react` y `react-dom` (>=16.8.0).*

## 🛠️ Uso

Importa los componentes que necesites directamente desde la librería en tu aplicación de React:

```jsx
import React from 'react';
import { IkTable, Input, PrintRender } from '@ikompras/ik-components';
// Asegúrate de importar los estilos si es necesario en el futuro

const MiComponente = () => {
  return (
    <div>
      <Input placeholder="Escribe aquí..." />
      
      <IkTable 
        // props de la tabla
      />
    </div>
  );
};

export default MiComponente;
```

## 🧩 Componentes Disponibles

Actualmente la librería incluye los siguientes componentes principales:

*   **IkTable**: Componente robusto para la renderización de tablas de datos.
*   **Input**: Campos de entrada de texto estandarizados.
*   **FileManager**: Gestor y administrador de archivos.
*   **ImageViewer**: Visor de imágenes integrado (apoyado en `yet-another-react-lightbox`).
*   **PrintRender**: Componente de utilidad para manejar la impresión de vistas (utilizando `react-to-print`).

*(Revisar el código fuente en `src/components/` para ver las `props` detalladas de cada componente).*

## 👨‍💻 Desarrollo Local

Si deseas contribuir a esta librería o añadir nuevos componentes:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ikompras/ik-components.git
   cd ik-components
   ```

2. **Instala las dependencias:**
   ```bash
   yarn install
   # o npm install
   ```

3. **Estructura del Proyecto:**
   * `/src/components`: Crea una nueva carpeta aquí para cada componente nuevo.
   * `/src/index.js`: **¡Muy importante!** Todo nuevo componente o utilidad debe ser exportado desde este archivo para que sea accesible en el build final.
   * `/src/utils`: Funciones y utilidades compartidas (formateos, helpers, etc).

## 🏗️ Construcción (Build)

Para compilar la librería para producción, ejecuta:

```bash
yarn build
```
Esto generará la carpeta `dist/` utilizando la configuración de Vite (`vite.config.js`), preparando los formatos UMD y ES módulos.

## 🚀 Publicación de una nueva versión

Cuando tus cambios estén listos y mergeados, y quieras publicar una nueva versión para que otros proyectos la consuman:

1. **Sube la versión:** Modifica el `"version"` en el archivo `package.json` siguiendo el versionado semántico (Ej: de `1.0.0` a `1.0.1`).
2. **Genera el Build:** Asegúrate de tener la última versión compilada:
   ```bash
   yarn build
   ```
3. **Publica en GitHub Packages:**
   ```bash
   npm publish
   ```
   *(Asegúrate de que tu usuario tenga permisos de escritura/publicación en el repositorio de la empresa).*
