type SuperPrint = {
    <T,M>(a: T[],b: M):T
}

const superPrint:SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3], true);
const b = superPrint(["a","b","c"], "sejin");
const c = superPrint([1,2,true], 1);