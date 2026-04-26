# 🚀 Aplicación Avanzada de Lista de Tareas (React)

**Práctica 1 de React** para el Máster en Desarrollo de Aplicaciones Fullstack. Se trata de una aplicación de gestión de tareas (To-Do List) que implementa patrones avanzados de diseño y optimización en React.

## 📋 Características Principales

La aplicación permite gestionar el ciclo de vida completo de una tarea, incluyendo:
- **Añadir tareas**: Registro con título y descripción detallada.
- **Estado de tareas**: Marcado de tareas como completadas o pendientes.
- **Eliminación**: Borrado individual de elementos de la lista.
- **Filtrado Avanzado**: Visualización por categorías (Todas, Completadas, Pendientes).
- **Persistencia Local**: Los datos se mantienen en el navegador mediante `localStorage`.

## 🛠️ Tecnologías y Patrones Utilizados

Para cumplir con los requisitos técnicos exigidos, se han implementado:

- **React Context & useReducer**: Gestión de estados complejos de forma global para evitar el *prop drilling*.
- **Custom Hooks**: Lógica de negocio encapsulada en el hook `useTasks`.
- **Code Splitting (Lazy Loading)**: Optimización de carga inicial utilizando `React.lazy` y `React.Suspense`.
- **Testing**: Pruebas unitarias de componentes y lógica de hooks mediante **Vitest** y **React Testing Library**.
- **Diseño Moderno**: Interfaz responsive y accesible desarrollada con CSS.

## 📂 Estructura del Proyecto

```text
src/
 ├── components/     # Componentes visuales (Header, Form, List, Item)
 ├── context/        # TaskContext para el estado global de la app
 ├── hooks/          # Custom hook useTasks para la lógica de negocio
 ├── tests/          # Pruebas unitarias y de integración
 ├── App.jsx         # Componente principal con implementación de Lazy Loading
 └── main.jsx        # Punto de entrada con el TaskProvider

```

## 🚀 Instrucciones de Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clonar el repositorio
Bash
git clone https://github.com/luisquintom/Lista_de_Tareas

2. Instalar dependencias
Bash
npm install
3. Iniciar el servidor
Bash
npm run dev
La aplicación estará disponible en http://localhost:5173.

🧪 Ejecución de Pruebas
Para verificar el correcto funcionamiento de la lógica y los componentes, ejecuta:

Bash
npm run test
# o también
npx vitest
👤 Autor
Luis Enrique - Desarrollador del Proyecto

Estudiante de la Universidad Europea.