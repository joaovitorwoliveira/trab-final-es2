interface Notifier {
  send(message: string): void;
}

class BaseNotificationService implements Notifier {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

// Decorator base
class NotifierDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): void {
    this.notifier.send(message);
  }
}

// Decorator que adiciona SMS
class SMSNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Enviando SMS: ${message}`);
  }
}

// Decorator que adiciona Push Notification
class PushNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Enviando push notification: ${message}`);
  }
}

// Uso
const emailNotifier = new BaseNotificationService(); // Notificação básica

// Adiciona funcionalidade SMS
const smsNotifier = new SMSNotifier(emailNotifier);

// Adiciona funcionalidade Push Notification
const fullNotifier = new PushNotifier(smsNotifier);

fullNotifier.send("Olá, com Decorator!");
