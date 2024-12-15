import { not, run, ser } from './tests.js';
import { dijkstra } from '../dijkstra.js';

const tests = {

    shortPathFound: () => {        
        
    }
    
};

export function main() {
    console.log("Dijkstra:")
    for (const testName in tests) {
        run(tests[testName], testName);
    }
}

if (require.main === module) {
    main();
}