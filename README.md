# PGIO-APF3

Aplicación de gestión de solicitudes y empleados desarrollada con Angular.

## Tecnologías

- **Angular** 20.3.0
- **TypeScript** 5.5.4
- **SCSS** para estilos
- **Angular Router** para navegación
- **Angular Forms** para formularios reactivos

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Git

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd PGIO-APF3
```

### 2. Acceder al directorio frontend

```bash
cd frontend
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
ng serve
```

Una vez ejecutado, accede a la aplicación en tu navegador:

```
http://localhost:4200
```

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── componentes/
│   │   │   ├── crear-solicitud/
│   │   │   ├── empleados/
│   │   │   ├── lista-solicitudes/
│   │   │   ├── login/
│   │   │   └── navbar/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```
