import React from 'react'

const VennDiagram = ({ setA, setB }) => {
    const radio = 120
    const distancia = 150
    const interseccion = setA.filter(valor => setB.includes(valor))
    const setA_dif = setA.filter(item => !setB.includes(item))
    const setB_dif = setB.filter(item => !setA.includes(item))
    return (
        <div className='grid justify-center'>
            <h1>Diagrama de Venn</h1>
            <svg width={400} height={300}>
                <circle cx={210 - distancia / 2} cy={150} r={radio} fill="none" stroke="blue" strokeWidth={2} />

                <circle cx={190 + distancia / 2} cy={150} r={radio} fill="none" stroke="green" strokeWidth={2} />

                {interseccion.map((valor, indice) => (
                    <text key={indice} x={200} y={100 + indice * 20} textAnchor="middle" fill="red" fontSize={16}>
                        {valor}
                    </text>
                ))}

                <text x={200 - distancia / 2} y={150 - radio - 20} textAnchor="middle" fill="blue" fontSize={16}>
                    Conjunto A
                </text>
                <text x={200 + distancia / 2} y={150 - radio - 20} textAnchor="middle" fill="green" fontSize={16}>
                    Conjunto B
                </text>

                {setA_dif.map((valor, indice) => (
                    <text
                        key={indice}
                        x={200 - distancia / 2 - 50}
                        y={200 - radio + indice * 25}
                        textAnchor="middle"
                        fill="blue"
                        fontSize={14}
                    >
                        {valor}
                    </text>
                ))}

                {setB_dif.map((valor, indice) => (
                    <text
                        key={indice}
                        x={200 + distancia / 2 + 50}
                        y={200 - radio + indice * 20}
                        textAnchor="middle"
                        fill="green"
                        fontSize={14}
                    >
                        {valor}
                    </text>
                ))}
            </svg>
        </div>
    )
}

export default VennDiagram