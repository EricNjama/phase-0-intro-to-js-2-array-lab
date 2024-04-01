// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
const destructivelyAppendCat = function(name){
    return cats.push(name)
}
const destructivelyPrependCat = function(name){
    return cats.unshift(name)
}
const destructivelyRemoveLastCat = function(){
    return cats.pop()
}
const destructivelyRemoveFirstCat = function(){
    return cats.shift()
}
const appendCat = function(name){
    return [...cats, "Broom"]
}
const prependCat = function(name){
    return ["Arnold", ...cats]
}
const removeLastCat = function(){
    return cats.slice(0, cats.length -1)
}
const removeFirstCat = function(){
    return cats.slice(1)
}