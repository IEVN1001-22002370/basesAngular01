export interface CalculoResultado {
    resultado: number;
    resultadoMin: number;
    resultadoMax: number;
    color1: string;
    valor1: number;
    color2: string;
    valor2: number;
    color3: string;
    toleranciaR: string;

    error?: string;
}

export class CalculadoraResistencia {

    private defaultResult: CalculoResultado = {
        resultado: 0,
        resultadoMin: 0,
        resultadoMax: 0,
        color1: '',
        valor1: 0,
        color2: '',
        valor2: 0,
        color3: '',
        toleranciaR: '',
    };

    private getBandValueAndColor(banda: string, bandName: string): { color: string, valor: number, error?: string } {
        let color = '';
        let valor = 0;
        let error: string | undefined;

        if (banda === '0') { color = 'Negro'; valor = 0; }
        else if (banda === '1') { color = 'Café'; valor = 1; }
        else if (banda === '2') { color = 'Rojo'; valor = 2; }
        else if (banda === '3') { color = 'Naranja'; valor = 3; }
        else if (banda === '4') { color = 'Amarillo'; valor = 4; }
        else if (banda === '5') { color = 'Verde'; valor = 5; }
        else if (banda === '6') { color = 'Azul'; valor = 6; }
        else if (banda === '7') { color = 'Morado'; valor = 7; }
        else if (banda === '8') { color = 'Gris'; valor = 8; }
        else if (banda === '9') { color = 'Blanco'; valor = 9; }
        else { alert('Ingrese una opcion en la banda') }

        return { color, valor, error };
    }

    public calcular(banda1: string, banda2: string, banda3: string, tolerancia: string): CalculoResultado {

        const b1 = this.getBandValueAndColor(banda1, '1');
        if (b1.error) return { ...this.defaultResult, error: b1.error };

        const b2 = this.getBandValueAndColor(banda2, '2');
        if (b2.error) return { ...this.defaultResult, error: b2.error };

        const valor1 = b1.valor;
        const color1 = b1.color;
        const valor2 = b2.valor;
        const color2 = b2.color;

        const valorCombinado = parseInt(`${valor1}${valor2}`);

        let color3 = '';
        let resultado = 0;

        if (banda3 === '1') { color3 = 'Negro'; resultado = valorCombinado * 1; }
        else if (banda3 === '10') { color3 = 'Café'; resultado = valorCombinado * 10; }
        else if (banda3 === '100') { color3 = 'Rojo'; resultado = valorCombinado * 100; }
        else if (banda3 === '1000') { color3 = 'Naranja'; resultado = valorCombinado * 1000; }
        else if (banda3 === '10000') { color3 = 'Amarillo'; resultado = valorCombinado * 10000; }
        else if (banda3 === '100000') { color3 = 'Verde'; resultado = valorCombinado * 100000; }
        else if (banda3 === '1000000') { color3 = 'Azul'; resultado = valorCombinado * 1000000; }
        else if (banda3 === '10000000') { color3 = 'Morado'; resultado = valorCombinado * 10000000; }
        else if (banda3 === '100000000') { color3 = 'Gris'; resultado = valorCombinado * 100000000; }
        else if (banda3 === '1000000000') { color3 = 'Blanco'; resultado = valorCombinado * 1000000000; }
        else { alert('Ingrese una opcion en la banda 3') }


        let toleranciaR = '';
        let descuento = 0;

        if (tolerancia === 'dorado') {
            toleranciaR = 'Dorado 5%';
            descuento = resultado * 0.05;
        } else if (tolerancia === 'plata') {
            toleranciaR = 'Plata 10%';
            descuento = resultado * 0.10;
        } else {
            alert('Seleccione una tolerancia');
        }

        const resultadoMax = resultado + descuento;
        const resultadoMin = resultado - descuento;

        return {
            resultado,
            resultadoMin,
            resultadoMax,
            color1,
            valor1,
            color2,
            valor2,
            color3,
            toleranciaR,
        };
    }
}
