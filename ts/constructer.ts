class Car {
    brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    drive(): void {
      console.log(`${this.brand} is driving`);
    }
  }
  
  const myCar = new Car("Tesla");
  myCar.drive();
  