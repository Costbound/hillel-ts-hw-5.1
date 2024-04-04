interface IFigure {
  readonly name: string
  readonly color: string
  calculateArea: () => number
}
interface IQuadrilateral extends IFigure {
  print: () => string
}


interface ICircle extends IFigure {
  radius: number
}
class Circle implements ICircle {
  constructor(
    readonly name: string,
    readonly color: string,
    public radius: number
  ) {}

  calculateArea(): number {
    return Math.PI / this.radius ** 2
  }
}

interface IRectangle extends IQuadrilateral {
  width: number
  height: number
}
class Rectangle implements IRectangle {
  constructor(
    readonly name: string,
    readonly color: string,
    public width: number,
    public height: number
  ) { }

  calculateArea(): number {
    return this.width * this.height
  }

  print(): string {
    return "S = a * b, where S - area, a - width, b - height"
  }
}

interface ISquare extends IQuadrilateral {
  side: number
}
class Square implements ISquare {
  constructor(
    readonly name: string,
    readonly color: string,
    public side: number
  ) { }
  
  calculateArea(): number {
    return this.side ** 2
  }

  print(): string {
    return "S = a * a = a², where S - area, a - any side of square"
  }
}

type TriangleSides = {
  sideA: number,
  sideB: number,
  sideC: number
}
interface ITriangle extends IFigure {
  sides: TriangleSides
}
class Triangle implements ITriangle {
  constructor(
    readonly name: string,
    readonly color: string,
    public sides: TriangleSides,
  ) { }
  
  calculateArea(): number {
    const { sideA: a, sideB: b, sideC: c } = this.sides
    // Geron's formula
    const p = (a + b + c) / 2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
  }
}