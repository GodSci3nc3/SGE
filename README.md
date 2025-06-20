# Proyecto SGE: Sistema de Gestión Eléctrica

<img src = "https://github.com/user-attachments/assets/66cc4fd8-fd31-4cbe-b339-17f9af3dea76" style = "witdh: 1200px; height: 1200px">

## Descripción

Este proyecto tiene como objetivo el desarrollo de un sistema de gestión eléctrica inteligente, diseñado para ser implementado en hogares, edificios comerciales e instalaciones industriales. A través de una interfaz web, el sistema permitirá el monitoreo, control y automatización del suministro eléctrico de diversos dispositivos. El sistema empleará sensores avanzados, un microcontrolador y conectividad Wi-Fi para una gestión eficiente y accesible de los recursos energéticos.

### Propósito del Proyecto

El Sistema de Gestión Eléctrica (SGE) busca resolver problemas comunes asociados con la gestión y control de energía eléctrica, tales como:

- **Desperdicio energético** debido a la falta de monitoreo constante.
- **Limitada capacidad de monitoreo** y control remoto de equipos eléctricos.
- **Respuesta reactiva** ante cambios en el consumo eléctrico sin toma de decisiones automatizada.

El proyecto se enfoca en crear una solución accesible y sostenible que permita a los usuarios supervisar y controlar sus dispositivos eléctricos de manera eficiente y en tiempo real.

## Objetivos del Proyecto

### Objetivo General

Desarrollar un dispositivo inteligente capaz de gestionar y controlar la energía eléctrica en instalaciones, que integre sensores múltiples, un microcontrolador, y una interfaz web interactiva para facilitar la supervisión, regulación y control automatizado del sistema eléctrico.

### Objetivos Específicos

1. **Desarrollo del Sistema de Sensores**: Implementar y probar diversos sensores, y establecer un protocolo de comunicación entre el microcontrolador y la interfaz.
2. **Implementación de la Base de Datos**: Diseñar y crear una base de datos relacional optimizada que permita almacenar información estructurada para el análisis de datos y la ejecución de acciones automáticas.
3. **Desarrollo de la Interfaz de Usuario**: Crear una interfaz web intuitiva y visual para gestionar los dispositivos, donde los usuarios puedan monitorear y configurar parámetros según el rol asignado (administrador, supervisor, etc.).

## Tecnologías Utilizadas

### Frontend:
- **HTML5**: Para la estructura básica de las páginas web.
- **CSS3**: Para el diseño y la personalización de la apariencia de la interfaz.
- **TailwindCSS**: Para facilitar la creación de un diseño limpio, moderno y altamente responsive sin la necesidad de escribir CSS desde cero.

### Backend:
- **PHP**: Lenguaje de programación utilizado para desarrollar la lógica del servidor, procesar solicitudes del usuario y gestionar la base de datos.
- **MySQL**: Base de datos relacional donde se almacenarán de manera estructurada los datos obtenidos por los sensores, permitiendo un fácil acceso para análisis y control.
- **XAMPP**: Usaremos este entorno de desarrollo para facilitar la implementación de Apache, MySQL y PHP en un solo paquete.

## Estructura de la Base de Datos

La base de datos está diseñada para almacenar información clave sobre los dispositivos eléctricos, sus sensores y las lecturas generadas en tiempo real. A continuación se presentan las tablas principales de la base de datos:

1. **Nivel**: Representa los niveles jerárquicos de dispositivos (por ejemplo, edificios, pisos, etc.).
2. **Dispositivo**: Información sobre los dispositivos eléctricos que serán gestionados, como el estado y la fecha de instalación.
3. **LecturaSensor**: Almacena los datos generados por los sensores, como el valor medido y el tipo de dato correspondiente.

La relación entre estas tablas se organiza de manera que cada dispositivo pertenece a un nivel específico, y cada sensor genera múltiples lecturas.

## Colaboración

Este proyecto es desarrollado en colaboración con Danny Alejandro García Carreón, un estudiante de Maestría que lidera el desarrollo del sistema de sensores y la comunicación con el microcontrolador. El objetivo es combinar los conocimientos en ingeniería eléctrica y tecnologías de la información para crear un sistema integral y eficiente.
