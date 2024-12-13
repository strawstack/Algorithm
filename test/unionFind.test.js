import { run, not } from './tests.js';
import { unionFind } from '../unionFind.js';

export const tests = {

    trackGroupsCorrectly: () => {
        
        function obj(v) { return { key: v }; }
        const getKey = e => e.key;
        const elements = [obj(7), obj(2), obj(4), obj(8), obj(9)];
        
        const init  = [0, 1, 2, 3, 4];
        const final = [0, 0, 0, 4, 4];

        const { union, find } = unionFind(elements, getKey);

        const init_check = [];
        elements.forEach(e => {
            init_check.push(find(e));
        });

        union(
            elements[0],
            elements[2]
        );

        union(
            elements[4],
            elements[3]
        );

        union(
            elements[0],
            elements[1]
        );

        const final_check = [];
        elements.forEach(e => {
            final_check.push(find(e));
        });

        if (not(init.every((v, i) => v === init_check[i]))) {
            throw new Error("Groups not initialized correctly");
        }

        if (not(final.every((v, i) => v === final_check[i]))) {
            throw new Error("Group unions not tracked correctly");
        }
    }
    
};

if (require.main === module) {
    console.log("unionFind:");
    for (const testName in tests) {
        run(tests[testName], testName);
    }
}
