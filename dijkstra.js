export function dijkstra(matrix, start, end) {
    // matrix - 2D array row/column indexes are vertex ids, cells are edge weights
    // This implementation assumes edges are bidirectional

    // verticies - map {vertex id -> map { vertex id -> weight } }
    const verticies = unPack(matrix);

    const numVertex = Object.keys(verticies).length;
    const parent = Array(numVertex).fill(null);
    const distances = Array(numVertex).fill(Infinity);
    
    const visited = {};
    const h = heap([start], (a, b) => distances[a] < distances[b]);
    while (h.size() > 0) {
        const vid = h.pop();
        if (vid in visited) continue;
        if (vid === end) break;
        visited[vid] = true;

        // For each edge vid -> ovid
        for (const ovid in verticies[vid]) {
            const weight = verticies[vid][ovid];

            // Update distances
            if (distances[vid] + weight < distances[ovid]) {
                distances[ovid] = distances[vid] + weight;
                h.decreaseKey(ovid, distances[ovid]);
                parent[ovid] = vid;
            }

        }
    }

    return { 
        cost: distances[end],
        path: getPath(parent, end)
    };
}

function getPath(parent, end) {
    const path = [];
    let current = end;
    while (parent[current]) {
        path.push(current);
        current = parent[current];
    }
    return path.reverse();
}

function unPack(matrix) {
    function not(value) { return !value; }
    const verticies = {};
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            const weight = matrix[r][c];
            if (not(r in verticies)) verticies[r] = {};
            if (not(c in verticies)) verticies[c] = {};
            verticies[r][c] = weight;
            verticies[c][r] = weight;
        }
    }
    return verticies;
}
