export function unionFind(elements, getKey) {
    // elements: a list of data items able to be passed to getKey
    // getKey: takes an element and returns a unique stable key to identify that element

    if (getKey === undefined) getKey = e => e;

    const keyToIndex = {};
    elements.forEach((e, i) => {
        keyToIndex[getKey(e)] = i;
    });

    const groups = Array(elements.length).fill(0).map((_, i) => i);

    function union(a, b) {
        const ai = find(a);
        const bi = find(b);
        groups[bi] = ai;
    }

    function find(a) {
        const ai = keyToIndex[getKey(a)];
        let p = ai;
        while (groups[p] !== p) {
            p = groups[p];
        }
        groups[ai] = p;
        return p;
    }

    return {
        union,
        find
    };
}