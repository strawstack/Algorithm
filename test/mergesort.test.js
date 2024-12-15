import { not, run } from './tests.js';
import { mergesort } from '../mergesort.js';

const tests = {

    isSorted: () => {
        
        const lst = [2, 3, 3, 3, 5, 7, 4, 6, 4, 5, 7];
        const result = mergesort(lst);
        const actual = JSON.parse(JSON.stringify(lst)).sort((a, b) => a - b);
        
        if (not( result.every((v, i) => v === actual[i]) )) {
            throw new Error("List is not sorted");
        }
    }
    
};

export function main() {
    console.log("MergeSort:")
    for (const testName in tests) {
        run(tests[testName], testName);
    }
}

if (require.main === module) {
    main();
}