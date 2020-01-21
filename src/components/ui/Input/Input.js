import React from 'react';

import styles from './Input.module.css';

/**
 * Componente para una entrada personalizada.
 * 
 * Este componente no sólo va a mostrar la entrada del tipo que sea
 * sino una etiqueta y algo más de embellecimiento.
 * 
 */
const input = (props) => {
    // Para permitir cosas diferentes a un campo de texto, hacemos
    // un 'switch' para establecer el tipo (y le pasamos todas las
    // propiedades que tenemos en una primera instancia).
    //
    // Actualización: hemos convertido la configuración a algo dinámico
    // donde los elementos del formulario están configurados en el estado
    // del 'ContactData' con lo que ya no pasamos las propiedades a saco
    // sino que pasamos sólo las 'elementConfig' que ya son a medida
    // de lo que necesita el elemento concreto.
    //
    // Además, añadimos un 'listener' para detectar cuando el usuario
    // introduce datos en cada elemento.
    //
    // Otra actualización: le añadimos un 'feedback' de la validación de
    // los datos.
    //
    let inputElement = null;

    // Si recibimos una validación incorrecta del formulario,
    // añadimos la clase "Invalid" al estilo de cada elemento.
    let inputClasses = [styles.InputElement];

    // Ojo: hay elementos que a lo mejor no requieren validación
    // (nos lo pasan como propiedad en base a si tienen 'validation'
    // en la configuración).
    //
    // Además, para que no quede todo en rojo al cargar el formulario
    // vacío, sólo marcamos como inválido los elementos que han sido
    // modificados por el usuario.
    if (props.invalid && props.shouldValidate && props.modified) {
        inputClasses.push(styles.Invalid);
    }

    // Switch por cada tipo de entrada (para añadir la específica)
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(" ")}
                onChange={props.changed}
                value={props.value}
                {...props.elementConfig} />;
            break;

        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(" ")}
                onChange={props.changed}
                value={props.value}
                {...props.elementConfig} />;
            break;

        case ('select'):
            // Este elemento tiene un poco de truco para obtener las opciones.
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
                    onChange={props.changed}>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}

                </select>
            );
            break;

        default:
            inputElement = <input className={inputClasses.join(" ")} value={props.value} {...props.elementConfig} />;
            break;
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;