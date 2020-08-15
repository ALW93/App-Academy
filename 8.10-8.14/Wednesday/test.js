class Charity {}

class Business {
  toString() {
    return "Give us your money";
  }
}

class Restaurant extends Business {
  toString() {
    return "Eat Here";
  }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() {
    return "Buy something";
  }
}

class ClothingStore extends Retail {
  toString() {
    return "Buy this shirt";
  }
}

class PhoneStore extends Retail {
  toString() {
    return "Upgrade ur phone";
  }
}

console.log(new PhoneStore().toString());
console.log(new ClothingStore().toString());
console.log(new Restaurant().toString());
console.log(new AutoRepairShop().toString());
console.log(new Charity().toString());
