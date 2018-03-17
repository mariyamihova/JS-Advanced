function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Water' + super.toString();
        }

    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Fire' + super.toString();
        }

    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Earth' + super.toString();
        }

    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            return 'Element: Air' + super.toString();
        }

    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.invokes = 0;
        }

        morph() {
            let elements = ['Water', 'Fire', 'Earth', 'Air'];
            this.invokes++;
            if (this.invokes === 4) {
                this.invokes = 0;
            }
            this.element = elements[this.invokes];
            return this;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon

    }
}
let createMelon = solve();
//let fireMelon = new createMelon.Firemelon(10, 'kingSize');
//console.log(fireMelon.toString());

//console.log(Object.getPrototypeOf(createMelon.Watermelon));
//console.log(Object.getPrototypeOf(new createMelon.Watermelon(19,'melonsort')));

let test = new createMelon.Watermelon(5, "Rotten");
//test.morph().morph();
console.log(test.toString());