


class Recipe{
    constructor(name,ingredients,instruction) {
        this._name = name;
        this._ingredients = ingredients;
        this.instruction = instruction;
    }
}

const Cookies = new Recipe('Cookies',
[{'chocolate chips' :1}, {'flour': 1}]
,'Bake them, good fellow :).')

const Cake = new Recipe('Cake',
[{'chocolate mix' :3}, {'eggs': 2}]
,'This will bake a cake!')

const CookBook = {
    Cookies,
    Cake
}

module.exports = {Recipe,CookBook}