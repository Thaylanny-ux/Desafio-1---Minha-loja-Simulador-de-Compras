# Delícia Express — Milkshakes

**Aluna:** Thaylanny Oliveira Santos  
**Trilha:** Desenvolvimento Mobile  
**Desafio:** 1 — Minha Loja: Simulador de Compras

## Sobre o projeto

A Delícia Express é uma loja fictícia de milkshakes criada para praticar HTML, CSS e JavaScript. A página apresenta três sabores, seus preços e imagens ilustrativas. O usuário pode simular um pedido, informar as quantidades e conferir o subtotal, o desconto e o valor final.

## Cardápio

| Produto | Descrição | Preço unitário |
|---|---|---:|
| Choco Crunch | Milkshake de chocolate com biscoito | R$ 25,00 |
| Morango Dream | Milkshake de morango cremoso | R$ 22,00 |
| Vanilla Cloud | Milkshake de baunilha | R$ 20,00 |

Pedidos com subtotal igual ou superior a **R$ 50,00** recebem **10% de desconto**. Os produtos, preços e a promoção são fictícios e fazem parte do exercício.

## Tecnologias

- **HTML5:** estrutura e conteúdo da página.
- **CSS3:** identidade visual, cartões, efeitos e adaptação para celular e computador.
- **JavaScript:** perguntas de quantidade, validação das respostas, cálculos e resumo do pedido.

## Estrutura dos arquivos

```text
minha-loja/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── creditos-imagens.md
```

- `index.html`: estrutura da página e informações do cardápio.
- `style.css`: estilos e layout responsivo.
- `script.js`: lógica do simulador de compras.
- `README.md`: documentação do projeto.
- `assets/creditos-imagens.md`: links das fotografias utilizadas.

## Como executar

1. Baixe o ZIP e extraia a pasta do projeto.
2. Abra a pasta `minha-loja` no Visual Studio Code.
3. Abra o arquivo `index.html` em um navegador, como o Google Chrome.
4. Clique em **Simular compra**.
5. Informe uma quantidade inteira igual ou maior que zero para cada sabor. Digite `0` quando não quiser aquele produto.
6. Confira o resumo com as quantidades, o subtotal, o desconto e o total.

Não é necessário instalar dependências ou iniciar um servidor. As fotografias e as fontes externas precisam de conexão com a internet para carregar.

## Captura de tela

Antes de entregar, abra a página no navegador e tire uma captura de tela real. Salve-a como `captura-da-loja.png` dentro da pasta `assets` e adicione a imagem abaixo desta seção:

`![Página inicial da Delícia Express](assets/captura-da-loja.png)`

## Testes

Os cenários abaixo devem ser conferidos no navegador antes da entrega. Marque cada item como concluído somente depois de executá-lo:

- [ ] Informar `0` para todos os sabores e verificar a mensagem de nenhum produto selecionado.
- [ ] Comprar um Choco Crunch e conferir o subtotal de R$ 25,00.
- [ ] Comprar dois Choco Crunch e conferir subtotal de R$ 50,00, desconto de R$ 5,00 e total de R$ 45,00.
- [ ] Comprar sabores diferentes e conferir os valores.
- [ ] Informar número negativo, número decimal, texto e campo vazio.
- [ ] Cancelar uma pergunta e verificar que a simulação é interrompida.
- [ ] Conferir a página em uma tela de computador e em uma tela estreita.
- [ ] Conferir se as três fotografias carregam corretamente.

## Dificuldade e aprendizado

Depois de executar o projeto, escreva com suas palavras uma dificuldade que encontrou e o que aprendeu ao resolvê-la. Por exemplo, se representar sua experiência: “Aprendi a separar o conteúdo, a aparência e a lógica em arquivos diferentes e a validar os números antes de calcular o total.”

## Uso de inteligência artificial

O ChatGPT foi utilizado como apoio para reorganizar a estrutura, revisar o código e sugerir melhorias de apresentação e acessibilidade. A estudante deve revisar os arquivos, testar o funcionamento, adaptar o conteúdo ao que compreendeu e conseguir explicar como o simulador funciona.

## Créditos das imagens

As fotografias de milkshakes são do Unsplash. Os links e os créditos consultados estão registrados em `assets/creditos-imagens.md`. As imagens são carregadas pela internet.

## Entrega

Depois de concluir os testes, adicionar a captura de tela e revisar a documentação, publique os arquivos em um repositório no GitHub. Entregue o link do repositório conforme as orientações do desafio.
