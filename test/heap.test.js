import { not, run, ser } from './tests.js';
import { heap } from '../heap.js';

const tests = {

    isSorted: () => {        
        const h = heap([
            { key: 9 },
            { key: 0 },
            { key: 6 }
        ], (a, b) => a.key < b.key );
        
        if (h.size() !== 3) {
            throw new Error("Unexpected heap size");
        }

        const c1 = [];
        while (h.size() > 0) {
            c1.push(h.pop());
        }

        const e1 = [0, 6, 9];
        if (not(c1.every((v, i) => v.key === e1[i]))) {
            throw new Error(`Heap values not sorted on pop ${ser(c1)}`);
        }

        const cmds = [
            {
                cmd: 'push',
                value: { key: 6 }
            },
            {
                cmd: 'push',
                value: { key: 2 }
            },
            {
                cmd: 'push',
                value: { key: 0 }
            },
            {
                cmd: 'pop'
            },
            {
                cmd: 'push',
                value: { key: 6 }
            }
        ];

        for (const c of cmds) {
            const arg = ('value' in c) ? c.value : undefined;
            h[c.cmd](arg);
        }

        const c2 = [];
        while (h.size() > 0) {
            c2.push(h.pop());
        }

        const e2 = [2, 6, 6];
        if (not(c2.every((v, i) => v.key === e2[i]))) {
            throw new Error("Heap values not sorted on second round of pop");
        }

        if (h.size() !== 0) {
            throw new Error("Heap not empty");
        }
    }
    
};

export function main() {
    console.log("Heap:")
    for (const testName in tests) {
        run(tests[testName], testName);
    }
}

if (require.main === module) {
    main();
}