interface ISCADA {
    name: string;
    correction: ICorrection[]
}

interface ICorrection {
    name: string;
    correction: string;
}

export const SCADAcorrection: ISCADA[] = [
    {
        name: "KaraArna",
        correction: [
            {name: "RVS-2", correction: "+0,0013"},
            {name: "RVS-8", correction: "-0,0015"},
            {name: "RVS-9", correction: "+0,00012"},
        ]
    },
    {
        name: "KaratonM",
        correction: [
            {name: "RVS-1", correction: "-0,0011"},
            {name: "RVS-5", correction: "-0,0015"},
        ]
    },
    {
        name: "KaratonK",
        correction: [
            {name: "RVS-4", correction: "+0,0003"},
        ]
    },
    {
        name: "Matin",
        correction: [
            {name: "RVS-2", correction: "+0,0003"},
            {name: "RVS-5", correction: "+0,0014"},
        ]
    },
]