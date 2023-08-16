export interface Food {
    numero: number;
    grupo: string;
    descricao: string;
    energiaKcal: number | string;
    energiaKj: number | string;
    proteinas?: number | string | any;
    lipideos?: number | string | any;
    carboidratos?: number | string | any;
    fibras?: number | string;
    calcio?: number | string;
    magnesio?: number | string;
    manganes?: number | string;
    fosforo?: number | string;
    ferro?: number | string;
    sodio?: number | string;
    potassio?: number | string;
    cobre?: number | string;
    zinco?: number | string;
}

export interface ChosenFood {
    descricao: string;
    quantidade: number;
}

