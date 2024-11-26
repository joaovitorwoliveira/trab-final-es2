# Padrões Estruturais: Decorator (João Vitor)

## Resumo

O **Decorator** é um padrão de projeto estrutural que permite adicionar responsabilidades ou comportamentos a objetos de forma dinâmica, sem alterar sua estrutura ou classe base. Ele é utilizado quando há a necessidade de estender as funcionalidades de um objeto de maneira flexível e modular.

## Como funciona

Este padrão utiliza uma composição de objetos para "encapar" o objeto original dentro de um ou mais objetos “decoradores”.

- Cada **decorator** implementa a mesma interface ou herda da mesma classe que o objeto original, garantindo que ele possa substituir o objeto em qualquer lugar.
- O padrão segue alguns princípios do **SOLID**, tais como:

### Princípios do SOLID

- **Open/Closed Principle**: Permite adicionar novos comportamentos a objetos existentes sem modificar o código da classe base.
- **Single Responsibility Principle**: Cada decorador tem uma única responsabilidade: adicionar um comportamento específico ao objeto.
- **Liskov Substitution Principle**: Decoradores implementam a mesma interface ou herdam da mesma classe que o componente que estão decorando. Isso garante que o código funcione independentemente de estar usando o objeto original ou um “decorado”.

## Prós

- Você pode estender o comportamento de um objeto sem criar uma nova subclasse.
- É possível adicionar ou remover responsabilidades de um objeto em tempo de execução.
- Permite combinar diversos comportamentos ao envolver o objeto com múltiplos decoradores.

## Contras

- É difícil remover um invólucro de uma pilha de invólucros.
- Implementar um decorador que não dependa da ordem da pilha de decoradores pode ser desafiador.
- A configuração inicial do código com várias camadas de decoradores pode ficar complexa e visualmente confusa.
