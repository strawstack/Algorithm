export function not(value) {
    return !value;
}
export function run(test, testName) {
    try {
        test();
        console.log(`PASS: ${testName}`);
    } catch(e) {
        console.log(`FAIL: ${testName}: ${e.message}`);
    }
}