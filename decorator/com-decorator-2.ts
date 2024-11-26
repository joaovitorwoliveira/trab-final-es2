// Outro exemplo de uso do padrão Decorator adicionando funcionalidades em um contexto de pedidos:

interface Order {
  calculateTotal(): number;
}

class BasicOrder implements Order {
  private basePrice: number;

  constructor(basePrice: number) {
    this.basePrice = basePrice;
  }

  calculateTotal(): number {
    return this.basePrice;
  }
}

// Decorator base
class OrderDecorator implements Order {
  constructor(protected order: Order) {}

  calculateTotal(): number {
    return this.order.calculateTotal();
  }
}

// Decorator que adiciona desconto
class DiscountDecorator extends OrderDecorator {
  private discountPercentage: number;

  constructor(order: Order, discountPercentage: number) {
    super(order);
    this.discountPercentage = discountPercentage;
  }

  calculateTotal(): number {
    const total = super.calculateTotal();
    const discount = (this.discountPercentage / 100) * total;
    return total - discount;
  }
}

// Decorator que adiciona taxas
class TaxDecorator extends OrderDecorator {
  private taxPercentage: number;

  constructor(order: Order, taxPercentage: number) {
    super(order);
    this.taxPercentage = taxPercentage;
  }

  calculateTotal(): number {
    const total = super.calculateTotal();
    const tax = (this.taxPercentage / 100) * total;
    return total + tax;
  }
}

// Decorator que taxa fixa de entrega
class DeliveryFeeDecorator extends OrderDecorator {
  private deliveryFee: number;

  constructor(order: Order, deliveryFee: number) {
    super(order);
    this.deliveryFee = deliveryFee;
  }

  calculateTotal(): number {
    return super.calculateTotal() + this.deliveryFee;
  }
}

// -----------------------
// Uso do padrão Decorator
// -----------------------

const baseOrder = new BasicOrder(100); // Pedido básico com preço base de 100

// Adicionando um desconto de 10%
const discountedOrder = new DiscountDecorator(baseOrder, 10);

// Adicionando uma taxa de 8% sobre o pedido com desconto
const taxedOrder = new TaxDecorator(discountedOrder, 8);

// Adicionando uma taxa fixa de entrega de 15
const finalOrder = new DeliveryFeeDecorator(taxedOrder, 15);

console.log("Preço final do pedido:", finalOrder.calculateTotal()); // Saída: 104.4
