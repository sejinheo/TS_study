type Player = {
    name: string
    age?: number
}

const sejin : Player = {
    name: "sejin",
    age: 18
}

const aejin : Player= {
    name: "aejin",
    age: 20
}

function playerMaker(name:string) : Player {
    return{
        name
    }
}

const heosejin = playerMaker("heosejin");
heosejin.age= 18
