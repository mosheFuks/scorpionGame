﻿# Scorpion

## Adivina el Número Oculto

Este es un juego simple creado en React donde el objetivo es adivinar un número secreto de 4 dígitos.

### Reglas del Juego

1. **Objetivo**: El jugador debe adivinar un número secreto de 4 dígitos generado aleatoriamente por la computadora.

2. **Intentos**: El jugador ingresa un número de 4 dígitos por cada intento.

3. **Validación de los números**:
   - Después de cada intento, la computadora comparará el número ingresado con el número secreto.
   - La computadora indicará cuántos dígitos han sido adivinados correctamente y si están en la posición correcta.
   - Ejemplo:
     - Número secreto: `1234`
     - Intento del jugador: `1233`
     - Respuesta de la computadora: "Has adivinado 3 números (1, 2 y 3)."
   - Ejemplo:
     - Número secreto: `1234`
     - Intento del jugador: `9999`
     - Respuesta de la computadora: "No has adivinado ningún número."

4. **Condición de victoria**: El jugador gana si adivina correctamente los 4 dígitos y sus posiciones.

**Jugalo en:** https://moshefuks.github.io/scorpionGame/
