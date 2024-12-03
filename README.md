# Padrões Estruturais: Decorator

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
- Permite combinar diversos comportamentos ao envolver o objeto com múltiplos decoradores. Exemplo, um objeto pode ser decorado com LoggerDecorator e CacheDecorator, acumulando funcionalidades.

## Contras

- Cada decorador adiciona uma camada adicional de execução ao redor do objeto, o que pode levar a sobrecarga em cenários onde desempenho é crítico.
- A configuração inicial do código com várias camadas de decoradores pode ficar complexa e visualmente confusa.
- A ordem de aplicação de decorators é importante, o que pode gerar confusão. Exemplo, um LoggerDecorator pode precisar ser aplicado antes de um EncryptDecorator para registrar dados antes da criptografia.

# Padrões Estruturais: Adapter

## Resumo:

O padrão Adapter é um padrão estrutural que permite que objetos com interfaces incompatíveis se comuniquem. Ele age como um intermediário, convertendo a interface de um objeto para a do outro, permitindo a integração.

## Quando usar:

Supondo que você desenvolveu uma aplicação em Python voltada para análise de dados que recebia dados no formato XML. Agora, você quer melhorar sua aplicação e, para isso, deve usar a biblioteca `pandas`, que possui ótimas funções para análise de dados. No entanto, os dados precisam estar no formato CSV ou XLS. Nessa situação, pode-se usar o Adapter para transformar os dados em outro formato que a biblioteca possa utilizar.

## Como funciona:

1. Certifique-se que você tem ao menos duas classes com interfaces incompatíveis:
   - Uma classe de serviço útil, que você não pode modificar (quase sempre de terceiros, antiga ou com muitas dependências existentes).
   - Uma ou mais classes cliente que seriam beneficiadas com o uso da classe serviço.
2. Declare a interface cliente e descreva como o cliente se comunica com o serviço.
3. Crie a classe adaptadora e faça-a seguir a interface cliente. Deixe todos os métodos vazios por enquanto.
4. Adicione um campo para a classe do adaptador armazenar uma referência ao objeto do serviço. A prática comum é inicializar esse campo via o construtor, mas algumas vezes é mais conveniente passá-lo para o adaptador ao chamar seus métodos.
5. Um por um, implemente todos os métodos da interface cliente na classe adaptadora. O adaptador deve delegar a maioria do trabalho real para o objeto serviço, lidando apenas com a conversão da interface ou formato dos dados.
6. Os Clientes devem usar o adaptador através da interface cliente. Isso permitirá que você mude ou estenda o adaptador sem afetar o código cliente.

## Prós e Contras:

### Prós:

- **Princípio da Responsabilidade Única**: O Adapter isola a conversão de dados ou interfaces, simplificando o código principal.
- **Princípio Aberto/Fechado**: É possível adicionar novos tipos de adaptação sem modificar o código existente.

### Contras:

- **Aumento da complexidade geral do código**: Introduz mais classes e camadas na aplicação.

## Contribuidores:

<a href="https://github.com/joaovitorwoliveira"><img src="https://github.com/joaovitorwoliveira.png" width="45" height="45"></a> &nbsp;
<a href="https://github.com/erickheinemann"><img src="https://github.com/erickheinemann.png" width="45" height="45"></a> &nbsp;
