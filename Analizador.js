// 1. Contar el número total de palabras
function contarPalabras(texto) {
    let contador = 0;
    let enPalabra = false;
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const esSeparador = (char === ' ' || char === '\n');
        
        if (!esSeparador) {
            if (!enPalabra) {
                contador++;
                enPalabra = true;
            }
        } else {
            enPalabra = false;
        }
    }
    return contador;
}

// 2. Contar los signos de puntuación
function contarSignos(texto) {
    let contador = 0;
    const signosPuntuacion = ".,;:!?¿¡\"";
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        for (let j = 0; j < signosPuntuacion.length; j++) {
            if (char === signosPuntuacion[j]) {
                contador++;
                break; 
            }
        }
    }
    return contador;
}

// 3. Contar las vocales (a, e, i, o, u, A, E, I, O, U)
function contarVocales(texto) {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        for (let j = 0; j < vocales.length; j++) {
            if (char === vocales[j]) {
                contador++;
                break; 
            }
        }
    }
    return contador;
}

// 4. Contar los consonantes
function contarConsonantes(texto) {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const esLetraMinus = (char >= 'a' && char <= 'z');
        const esLetraMayus = (char >= 'A' && char <= 'Z');
        const esLetra = esLetraMinus || esLetraMayus;
        
        let esVocal = false;
        if (esLetra) {
            for (let j = 0; j < vocales.length; j++) {
                if (char === vocales[j]) {
                    esVocal = true;
                    break;
                }
            }
            if (!esVocal) {
                contador++;
            }
        }
    }
    return contador;
}

// 5. Contar los dígitos (0-9)
function contarDigitos(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if (char >= '0' && char <= '9') {
            contador++;
        }
    }
    return contador;
}

// 6 y 7. Contar palabras que empiezan en mayúscula/minúscula
function contarPalabrasPorMayusculaMinuscula(texto) {
    let contadorMayus = 0;
    let contadorMinus = 0;
    let enPalabra = false;
    
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const esSeparador = (char === ' ' || char === '\n');
        
        if (!esSeparador) {
            if (!enPalabra) {
                const esLetraMayus = (char >= 'A' && char <= 'Z');
                const esLetraMinus = (char >= 'a' && char <= 'z');
                
                if (esLetraMayus) { 
                    contadorMayus++;
                } else if (esLetraMinus) { 
                    contadorMinus++;
                }
                enPalabra = true;
            }
        } else {
            enPalabra = false;
        }
    }
    return { mayusculas: contadorMayus, minusculas: contadorMinus };
}

// 8. Contar párrafos
function contarParrafos(texto) {
    if (texto.length === 0) return 0;
    
    let cont = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '\n') {
            cont++;
        }
    }
    return cont;
}

// 9. Invertir el texto completo
function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido = textoInvertido + texto[i];
    }
    return textoInvertido;
}

// 10. Contar todos los caracteres
function contarTodosCaracteres(texto) {
    return texto.length;
}

// 11. Buscar una palabra en el texto
function buscarPalabra(texto, palabra) {
    let palabraActual = "";
    const signosPuntuacion = ".,;:!?¿¡\"";
    
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const esSeparador = (char === ' ' || char === '\n');
        
        let esSigno = false;
        for (let j = 0; j < signosPuntuacion.length; j++) {
            if (char === signosPuntuacion[j]) {
                esSigno = true;
                break;
            }
        }

        if (!esSeparador && !esSigno) {
            palabraActual = palabraActual + char;
        } else {
            if (palabraActual.length > 0 && palabraActual === palabra) {
                return true; 
            }
            palabraActual = "";
        }
    }
    if (palabraActual.length > 0 && palabraActual === palabra) {
        return true;
    }
    return false;
}

// 12. Contar un carácter en el texto
function contarCaracter(texto, caracterBuscado) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterBuscado) {
            contador++;
        }
    }
    return contador;
}

// 13. Contar caracteres en posiciones pares (índices 0, 2, 4, ...)
function contarCaracteresPares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

// 14. Contar caracteres en posiciones impares (índices 1, 3, 5, ...)
function contarCaracteresImpares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}

// 15. Añadir un texto al inicio o al final
function agregarTexto(texto, fragmento) {
    const alInicio = fragmento + " " + texto;
    const alFinal = texto + " " + fragmento;
    return { alInicio: alInicio, alFinal: alFinal };
}


// --- CONTROLADOR PRINCIPAL (Función que llama a todas las demás) ---
function analizarTextoPrincipal() {
    // Asume que existe un <textarea id="textoEntrada"> en el HTML
    const texto = document.getElementById('textoEntrada').value;
    let r = ""; // Acumulador de resultados.
    
    // --- 1. RESULTADOS ESTÁTICOS ---
    r += "--- RESULTADOS DE ANÁLISIS ---\n";
    r += `Total caracteres: ${contarTodosCaracteres(texto)}\n`;
    r += `Palabras: ${contarPalabras(texto)}\n`;
    r += `Párrafos: ${contarParrafos(texto)}\n`;
    
    r += "\n--- DETALLES DE CARACTERES ---\n";
    r += `Vocales: ${contarVocales(texto)}\n`;
    r += `Consonantes: ${contarConsonantes(texto)}\n`;
    r += `Dígitos: ${contarDigitos(texto)}\n`;
    r += `Signos puntuación: ${contarSignos(texto)}\n`;
    
    const mayusMinus = contarPalabrasPorMayusculaMinuscula(texto);
    r += "\n--- DETALLES DE PALABRAS ---\n";
    r += `Palabras inician Mayúscula: ${mayusMinus.mayusculas}\n`;
    r += `Palabras inician Minúscula: ${mayusMinus.minusculas}\n`;

    r += "\n--- POSICIONES ---\n";
    r += `Caracteres Pares (0, 2, 4, ...): ${contarCaracteresPares(texto)}\n`;
    r += `Caracteres Impares (1, 3, 5, ...): ${contarCaracteresImpares(texto)}\n`;
    
    r += "\n--- INVERTIDO ---\n";
    r += `Texto invertido: "${invertirTexto(texto)}"\n`;

    // --- 2. FUNCIONES INTERACTIVAS (USAN PROMPT) ---
    r += "\n--- INTERACTIVAS ---\n";

    // 12. Contar un carácter 
    let charBuscado = prompt("1/3 - Ingrese el CARÁCTER que desea contar (Ej: a):", 'a');
    if (charBuscado && charBuscado.length === 1) {
        r += `12. El carácter '${charBuscado}' aparece: ${contarCaracter(texto, charBuscado)} veces.\n`;
    } else { r += "12. Conteo de carácter omitido o inválido.\n"; }

    // 11. Buscar una palabra 
    let palabraBusqueda = prompt("2/3 - Ingrese la PALABRA que desea buscar (Ej: Mundo):", 'Mundo');
    if (palabraBusqueda) {
        let busqueda = buscarPalabra(texto, palabraBusqueda);
        r += `11. La palabra '${palabraBusqueda}' ${(busqueda ? "SÍ" : "NO")} se encuentra en el texto.\n`;
    } else { r += "11. Búsqueda de palabra omitida.\n"; }

    // 15. Añadir texto 
    let fragmento = prompt("3/3 - Ingrese el FRAGMENTO de texto a añadir (Ej: HOY):", 'HOY');
    if (fragmento) {
        const resultado15 = agregarTexto(texto, fragmento);
        r += "\n15. AÑADIR TEXTO\n";
        r += `Al inicio: "${resultado15.alInicio}"\n`;
        r += `Al final: "${resultado15.alFinal}"\n`;
    } else { r += "15. Función de añadir texto omitida.\n"; }
    
    // Asume que existe un <pre id="resp"> en el HTML para mostrar los resultados
    document.getElementById('resp').textContent = r;
}
