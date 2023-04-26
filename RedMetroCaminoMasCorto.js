function BFS_shortestPath(grafo, nodoPrimero, nodoFinal) {
    let visitados = {}; // Objeto para guardar los nodos visitados
    let cola = []; // Cola para guardar los nodos a visitar
    let objPadres = {}; // Objeto para guardar el nodo que precede a cada nodo visitado en el camino más corto

    visitados[nodoPrimero] = true; // Marcamos el nodo de inicio como visitado
    cola.push(nodoPrimero); // Agregamos el nodo de inicio a la cola

    while (cola.length > 0) { // Mientras la cola no esté vacía

        // Sacamos el primer nodo de la cola
        let nodoActual = cola.shift();

        // Si llegamos al nodo final, detenemos el recorrido
        if (nodoActual === nodoFinal) {
            break;
        }

        // Recorremos los nodos adyacentes al nodo actual
        let nodosVecinos = grafo[nodoActual];
        for (let i = 0; i < nodosVecinos.length; i++) {
            let nodoVecino = nodosVecinos[i];
            if (!visitados[nodoVecino]) {
                visitados[nodoVecino] = true;
                objPadres[nodoVecino] = nodoActual;
                cola.push(nodoVecino);
            }
        }
    }

    // Reconstruimos el camino más corto a partir del nodo final
    let caminoMasCorto = [nodoFinal];
    let nodoActual = nodoFinal;
    while (nodoActual !== nodoPrimero) {
        let nodoPadre = objPadres[nodoActual];
        caminoMasCorto.unshift(nodoPadre);
        nodoActual = nodoPadre;
    }

    return caminoMasCorto;
};

const estaciones = {
    L1_A01: 'San Pablo',
    L1_A02: 'Neptuno',
    L1_A03: 'Pajaritos',
    L1_A04: 'Las Rejas',
    L1_A05: 'Ecuador',
    L1_A06: 'San Alberto Hurtado',
    L1_A07: 'U. de Santiago',
    L1_A08: 'Estación Central',
    L1_A09: 'U.L.A',
    L1_A10: 'República',
    L1_A11: 'Los Héroes',
    L1_A12: 'La Moneda',
    L1_A13: 'U. de Chile',
    L1_A14: 'Santa Lucía',
    L1_A15: 'U. Católica',
    L1_A16: 'Baquedano',
    L1_A17: 'Salvador',
    L1_A18: 'Manuel Montt',
    L1_A19: 'Pedro de Valdivia',
    L1_A20: 'Los Leones',
    L1_A21: 'Tobalaba',
    L1_A22: 'El Golf',
    L1_A23: 'Alcántara',
};

let grafo = {
    A: ['B', 'F', 'G'],
    G: ['A', 'H'],
    H: ['G', 'D'],
    B: ['A', 'C'],
    F: ['A', 'D'],
    C: ['B', 'D'],
    D: ['F', 'C', 'E'],
    E: ['D']
};

let shortestPath = BFS_shortestPath(grafo, 'D', 'A');
console.log(shortestPath); // ['A', 'C', 'F']