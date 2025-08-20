type Add = (a:number, b:number) => number;

const add:Add = (a,b) => a+b;

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push:Push= (config) => {
    if(typeof config === "string") {console.log(config)}
    else {
        console.log(config.path);
    }
}