import { useState } from 'react'

const SetOperations = () => {
    const [setA, setSetA] = useState([])
    const [setB, setSetB] = useState([])
    const [result, setResult] = useState(null)

    const processInput = input => {
        return input
            .replace(/\s+/g, '')
            .split(',')
            .filter(item => /^[a-zA-Z0-9]+$/.test(item))
    }

    const union = () => setResult([...new Set([...setA, ...setB])])
    const intersection = () => setResult(setA.filter(item => setB.includes(item)))
    const difference = () => setResult(setA.filter(item => !setB.includes(item)))
    const symmetricDifference = () => {
        const diffA = setA.filter(item => !setB.includes(item))
        const diffB = setB.filter(item => !setA.includes(item))
        setResult([...diffA, ...diffB])
    }
    return (
        <div className="flex flex-col m-auto w-auto text-center">
            <div className="grid grid-cols-2 gap-5  px-4 max-md:flex max-md:flex-col">
                <div>
                    <input
                        type="text"
                        placeholder="Conjunto A (separa con comas, evita los espacios)"
                        onChange={e => setSetA(processInput(e.target.value))}
                        className="h-full w-full rounded-[7px] border border-blue-500 bg-transparent px-3 py-5 font-sans md:text-sm font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-green-500 focus:border-2 focus:border-green-500"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Conjunto B (separa con comas, evita los espacios)"
                        onChange={e => setSetB(processInput(e.target.value))}
                        className="h-full w-full rounded-[7px] border border-orange-500 bg-transparent px-3 py-5 font-sans md:text-sm font-normal text-white outline-none transition-all placeholder-shown:border placeholder-shown:border-green-500 focus:border-2 focus:border-green-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-5 justify-center px-4">
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={union}
                >
                    Unión
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={intersection}
                >
                    Intersección
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={difference}
                >
                    Diferencia
                </button>
                <button
                    className="w-min md:w-auto px-6 py-2 text-xl font-semibold rounded-full border border-[#7629c8] text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95"
                    onClick={symmetricDifference}
                >
                    Diferencia Simétrica
                </button>
            </div>

            <section className="mt-6 flex justify-center w-lg px-4">
                <div className="w-80 border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
                    <p className="font-semibold">Resultado:</p>
                    {result && <p className="overflow-hidden text-ellipsis whitespace-nowrap">{result.join(', ')}</p>}
                </div>
            </section>
        </div>
    )
}

export default SetOperations
