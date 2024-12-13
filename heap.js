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

    function swap(a, b) {
        const temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }

    function upheap(n) {
        const p = Math.floor((n - 1) / 2);
        const a = data[p];
        const bi = 2 * p + 1;
        const ci = 2 * p + 2;
        const b = data[bi];
        const c = data[ci];
        if (bi >= data.length) return;
        if (compare(b, a)) {
            swap(p, bi);
            downheap(bi);
        }

        if (ci >= data.length) return;
        if (compare(b, c)) {
            swap(p, ci);
            downheap(ci);
        }
    }

    function downheap(p) {
        const d = data;
        const left = 2 * n + 1;
        const right = 2 * n + 2;
        const b = data[bi];
        const c = data[ci];
        if (bi >= data.length) return;
        if (compare(b, a)) {
            swap(n, bi);
            downheap(bi);
        }

        if (ci >= data.length) return;
        if (compare(data[n], c)) {
            swap(n, ci);
            downheap(ci);
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