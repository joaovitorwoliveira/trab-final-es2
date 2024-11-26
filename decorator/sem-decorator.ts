interface Notifier {
  send(message: string): void;
}

class NotificationService implements Notifier {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }

  // Adicionando funcionalidade SMS diretamente
  sendWithSMS(message: string): void {
    this.send(message);
    console.log(`Enviando SMS: ${message}`);
  }

  // Adicionando funcionalidade Push Notification diretamente
  sendWithPush(message: string): void {
    this.send(message);
    console.log(`Enviando push notification: ${message}`);
  }
}

const notifier = new NotificationService();

// Apenas email
notifier.send("Olá, sem Decorator!");

// Email + SMS
notifier.sendWithSMS("Olá, sem Decorator!");

// Email + SMS + Push Notification
notifier.sendWithPush("Olá, sem Decorator!");
