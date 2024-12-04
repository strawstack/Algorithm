export function mergesort(list, comp) {

    if (comp === undefined) {
        comp = (a, b) => a - b;
    }

    function merge(a, b) {
        const m = [];
        let aindex = 0;
        let bindex = 0;

        while (aindex < a.length && bindex < b.length) {
            if (comp(a[aindex], b[bindex]) < 0) {
                m.push(a[aindex])
                aindex += 1;
            } else {
                m.push(b[bindex])
                bindex += 1;
            }
        }

        while (aindex < a.length) {
            m.push(a[aindex])
            aindex += 1;
        }

        while (bindex < b.length) {
            m.push(b[bindex])
            bindex += 1;
        }

        return m;
    }

    function sort(lst) {
        if (lst.length <= 1) return lst;
        const m = Math.floor(lst.length/2);
        const left  = sort(lst.slice(0, m));
        const right = sort(lst.slice(m, lst.length));
        return merge(left, right);
    }

    return sort(list);
}

