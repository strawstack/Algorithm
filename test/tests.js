import { tests as mergesort_tests } from './mergesort.test';
import { tests as unionfind_tests } from './unionFind.test';
import { tests as heap_tests } from './heap.test';

export function ser(value) {
    return JSON.stringify(value);
}
export function not(value) {
    return !value;
}
export function run(test, testName) {
    test();
    try {
        
        console.log(`  PASS: ${testName}`);
    } catch(e) {
        console.log(`  FAIL: ${testName}: ${e.message}`);
    }
}

// Note: If not wrapped in this "if" code auto-executes on import
// So this file could just import the other files to trigger execution
// of their tests rather than import and run them
if (require.main === module) {
    const tests = { ...mergesort_tests, ...unionfind_tests, ...heap_tests };

    for (const testName in tests) {
        run(tests[testName], testName);
    }
}