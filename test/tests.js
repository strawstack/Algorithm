import { main as mergesort_main } from './mergesort.test';
import { main as unionfind_main } from './unionFind.test';
import { main as heap_main } from './heap.test';
import { main as dijkstra_main } from './dijkstra.test';

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
        console.log(e.message);
    }
}

if (require.main === module) {
    const tests = [mergesort_main, unionfind_main, heap_main, dijkstra_main];

    for (const main of tests) {
        main();
    }
}