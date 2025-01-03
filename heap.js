export function heap(initial, compare) {
    // initial - an initial list of data to use for the heap
    // compare - takes two ids, returns true if left < right
    const data = initial;
    heapify();

    function heapify() {
        for (let i = data.length - 1; i >= 0; i--) {
            downheap(i);
        }
    }

    function swap(ai, bi) {
        const temp = data[ai];
        data[ai] = data[bi];
        data[bi] = temp;
    }

    function upheap(n) {
        if (n <= 0) return;
        const d = data;
        const pi = Math.floor((n - 1) / 2);
        const bi = 2 * pi + 1;
        const ci = 2 * pi + 2;

        const left = (bi < data.length) ? d[bi] : Infinity;
        const right = (ci < data.length) ? d[ci] : Infinity;
        if (left === Infinity && right === Infinity) return;

        if (right === Infinity || compare(left, right)) {
            if (compare(left, d[pi])) {
                swap(bi, pi);
                upheap(pi);
            }
        } else { // right <= left
            if (right !== Infinity && compare(right, d[pi])) {
                swap(ci, pi);
                upheap(pi);
            }
        }
    }

    function downheap(pi) {
        const d = data;
        const bi = 2 * pi + 1;
        const ci = 2 * pi + 2;

        const left = (bi < data.length) ? d[bi] : Infinity;
        const right = (ci < data.length) ? d[ci] : Infinity;
        if (left === Infinity && right === Infinity) return;

        if (right === Infinity || compare(left, right)) {
            if (compare(left, d[pi])) {
                swap(bi, pi);
                downheap(bi);
            }
        } else { // right <= left
            if (right !== Infinity && compare(right, d[pi])) {
                swap(ci, pi);
                downheap(ci);
            }
        }
    }

    function push(e) {
        data.push(e);
        upheap(data.length - 1);
    }

    function pop() {
        const temp = data[0];
        data[0] = data[data.length - 1];
        data.pop();
        downheap(0);
        return temp;
    }

    function size() {
        return data.length;
    }

    return {
        push,
        pop,
        size
    };
}