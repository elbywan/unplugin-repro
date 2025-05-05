/// <reference path="./index.d.ts" />

for(let i = 1; i <= 10000; i++) {
    import(`./imports/${i}.ts`)
}
