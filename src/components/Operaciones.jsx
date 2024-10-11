import React, { useState } from 'react'
import VennDiagram from './Diagram'

const SetOperations = () => {
    // Definición de los estados para almacenar los conjuntos A y B, y el resultado de la operación
    const [setA, setSetA] = useState([])
    const [setB, setSetB] = useState([])
    const [result, setResult] = useState(null)

    // Función para procesar la entrada del usuario: elimina espacios, separa los elementos por comas y filtra caracteres alfanuméricos
    const processInput = input => {
        return input
            .replace(/\s+/g, '') // Elimina espacios en blanco
            .split(',') // Divide la cadena en elementos separados por comas
            .filter(item => /^[a-zA-Z0-9]+$/.test(item)) // Filtra para incluir solo caracteres alfanuméricos
    }

    // Función para invertir los valores de los conjuntos A y B
    const processInvert = () => {
        const inputSetA = document.getElementById('inputSetA') // Obtiene el elemento input de conjunto A
        const inputSetB = document.getElementById('inputSetB') // Obtiene el elemento input de conjunto B

        const valueSetA = inputSetA.value // Captura el valor actual de A
        const valueSetB = inputSetB.value // Captura el valor actual de B

        // Intercambia los valores entre A y B
        inputSetA.value = valueSetB
        inputSetB.value = valueSetA

        // Actualiza los estados setA y setB después de invertir los valores
        setSetA(processInput(valueSetB))
        setSetB(processInput(valueSetA))
    }

    // Función para calcular la Unión de los conjuntos A y B
    const union = () => setResult([...new Set([...setA, ...setB])])
    // Combina los elementos de setA y setB y utiliza Set para eliminar duplicados

    // Función para calcular la Intersección de los conjuntos A y B
    const intersection = () => setResult(setA.filter(item => setB.includes(item)))
    // Filtra los elementos de setA que también están presentes en setB

    // Función para calcular la Diferencia entre los conjuntos A y B
    const difference = () => setResult(setA.filter(item => !setB.includes(item)))
    // Filtra los elementos de setA que no están presentes en setB

    // Función para calcular la Diferencia Simétrica entre los conjuntos A y B
    const symmetricDifference = () => {
        const diffA = setA.filter(item => !setB.includes(item)) // Elementos en setA pero no en setB
        const diffB = setB.filter(item => !setA.includes(item)) // Elementos en setB pero no en setA
        setResult([...diffA, ...diffB]) // Combina ambos resultados
    }

    return (
        <div className="flex flex-col m-auto w-auto text-center">
            <div className="grid grid-cols-2 gap-5 px-4 max-md:flex max-md:flex-col">
                <div>
                    <input
                        type="text"
                        id="inputSetA"
                        placeholder="Conjunto A (separa con comas, evita los espacios)"
                        onChange={e => setSetA(processInput(e.target.value))} // Actualiza setA cuando el usuario escribe
                        className="h-full w-full rounded-[7px] border border-blue-500 bg-transparent px-3 py-5 font-sans md:text-sm font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-green-500 focus:border-2 focus:border-green-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="inputSetB"
                        placeholder="Conjunto B (separa con comas, evita los espacios)"
                        onChange={e => setSetB(processInput(e.target.value))} // Actualiza setB cuando el usuario escribe
                        className="h-full w-full rounded-[7px] border border-orange-500 bg-transparent px-3 py-5 font-sans md:text-sm font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-green-500 focus:border-2 focus:border-green-500"
                    />
                </div>
            </div>
            <div>
                <button
                    className="mt-5 rounded-md bg-gradient-to-tr from-green-500 to-slate-700 pb-2 pt-1 px-4 border border-transparent text-center justify-center text-2xl text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={processInvert} // Invierte los conjuntos al hacer clic
                >
                    ↔
                </button>
            </div>

            <div className="flex flex-wrap gap-4 mt-5 justify-center px-4">
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={union} // Ejecuta la operación de Unión
                >
                    Unión
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={intersection} // Ejecuta la operación de Intersección
                >
                    Intersección
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={difference} // Ejecuta la operación de Diferencia
                >
                    Diferencia
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={symmetricDifference} // Ejecuta la operación de Diferencia Simétrica
                >
                    Diferencia Simétrica
                </button>
            </div>

            <section className="mt-6 flex justify-center w-lg px-4">
                <div className="w-80 border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
                    <p className="font-semibold">Resultado:</p>
                    {result && <p className="overflow-auto text-ellipsis">{result.join(', ')}</p>}
                </div>
            </section>

            <div className="border-solid border-gray-500 border-2 mt-5 h-max">
                <VennDiagram setA={setA} setB={setB} />
            </div>
        </div>
    )
}

export default SetOperations
