function parseCount(n) {
    let parseResult = Number.parseFloat(n);
    if(Number.isNaN(parseResult)){
        throw new Error ("Невалидное значение")
    } 
    return parseResult;
};

function validateCount(n) {
    try {
       return parseCount(n);
    } catch (error) {
        return error;
    }
};


class Triangle {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
            throw new Error ("Треугольник с такими сторонами не существует")
        };
    };

    get perimeter(){
        return this.a + this.b + this.c
    };


    get area(){
        const p = this.perimeter / 2;
        const a = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
        return Number(a);
    };
};

function getTriangle(a, b, c){

    try{
        return new Triangle(a, b, c);
    } catch (error){
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
              },
              get perimeter() {
                return "Ошибка! Треугольник не существует";       
        }
    }
  }
}
