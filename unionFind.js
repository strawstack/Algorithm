export function unionFind(elements, getKey) {
    // elements: a list of data items able to be passed to getKey
    // getKey: takes an element and returns a unique stable key to identify that element

    if (getKey === undefined) getKey = e => e;

    const groups = Array(elements.length).fill(0).map((_, i) => {
        return getKey(elements[i]);
    });

    function union(a, b) {

    }

    function find(a) {

    }

    return {
        union,
        find
    };
}