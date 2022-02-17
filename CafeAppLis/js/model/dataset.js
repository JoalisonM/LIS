const dataset = [ //criando uma constante com um array de json que será usado com os dados para preencher os cards
  { // abertura da chave do json
    id: 1, // propriedade id com o valor 1, que é um number
    name: 'Hambúrguer', // propriedade name com valor "Hambúrguer", que é uma string, essa imagem está guardada na pasta imagem
    image: 'images/hamburguer.jpg', // propriedade image com o endereço relativo da imagem, que é uma string
    description: // propriedade description com valor da descrição, que é uma string
      'Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado', // string com o texto da descrição
  }, // fechamento da chave do json
  { // abertura da chave do json
    id: 2, // propriedade id com o valor 2, que é um number
    name: 'Sanduíche', // propriedade name com valor "Sanduíche", que é uma string
    image: 'images/sanduiche.jpg', // propriedade image com o endereço relativo da imagem, que é uma string, essa imagem está guardada na pasta imagem
    description: // propriedade description com valor da descrição, que é uma string
      'O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.', // string com o texto da descrição
  }, // fechamento da chave do json
  { // abertura da chave do json
    id: 3, // propriedade id com o valor 3, que é um number
    name: 'Café', // propriedade name com valor "Café", que é uma string
    image: 'images/cafe.jpg', // propriedade image com o endereço relativo da imagem, que é uma string, essa imagem está guardada na pasta imagem
    description: // propriedade description com valor da descrição, que é uma string
      'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.', // string com o texto da descrição
  }, // fechamento da chave do json
  { // abertura da chave do json
    id: 4, // propriedade id com o valor 4, que é um number
    name: 'Suco', // propriedade name com valor "Suco", que é uma string
    image: 'images/suco.jpg', // propriedade image com o endereço relativo da imagem, que é uma string, essa imagem está guardada na pasta imagem
    description: // propriedade description com valor da descrição, que é uma string
      'Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.', // string com o texto da descrição
  }, // fechamento da chave do json
]; //fechamento do array de json

export default dataset; // exportando dataset como default, caso já tenha alguma variável com o nome dataset aonde ele for importado, vai poder ser mudado o nome da variável para o que a pessoa quiser
