type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder
}

const superPrint:SuperPrint = (arr) => arr[0]

const a = superPrint([1,2,3]);
const b = superPrint(["a","b","c"]);
const c = superPrint([1,2,true]);