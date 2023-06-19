const products = [
    {
      imageSrc: 'hsp1.jpg',
      title: 'Calçado',
      description: 'Sapato de couro marrom elegante.',
      number: 42,
      price: 0,
      productId: 11
    },
    {
      imageSrc: 'hsp2.jpg',
      title: 'Calçado',
      description: 'Sapato social feitos à mão de alta qualidade.',
      number: 40,
      price: 0,
      productId: 12
    },
    {
      imageSrc: 'hsp3.jpg',
      title: 'Calçado',
      description: 'Sapato anti deslizamento de pouco peso.',
      number: 45,
      price: 0,
      productId: 13
    },
    {
      imageSrc: 'hsp4.jpg',
      title: 'Calçado',
      description: 'Ténis casual.',
      number: 43,
      price: 0,
      productId: 14
    },
    {
      imageSrc: 'hsp5.jpg',
      title: 'Calçado',
      description: 'Sapato para idoso.',
      number: 41,
      price: 0,
      productId: 15
    },
    {
      imageSrc: 'hsp6.jpg',
      title: 'Calçado',
      description: 'Sapato casual.',
      number: 39,
      price: 0,
      productId: 16
    },
    {
      imageSrc: 'hsp7.jpg',
      title: 'Calçado',
      description: 'Sapato casual couro liso.',
      number: 42,
      price: 0,
      productId: 17
    },
    {
      imageSrc: 'hsp8.jpg',
      title: 'Calçado',
      description: 'Ténis casual.',
      number: 44,
      price: 0,
      productId: 18
    },
    {
      imageSrc: 'hsp9.jpg',
      title: 'Calçado',
      description: 'Ténis de corrida.',
      number: 43,
      price: 0,
      productId: 19
    },
    {
      imageSrc: 'hsp10.jpg',
      title: 'Calçado',
      description: 'Ténis casual.',
      number: 42,
      price: 0,
      productId: 20
    }
  ];
  
  function realizarPesquisa() {
    const searchTerm = document.getElementById('Pesquisar').value.toLowerCase();
    const resultados = products.filter(function(product) {
      const description = product.description.toLowerCase();
      return description.includes(searchTerm);
    });
  
    // Exibir os resultados da pesquisa
    if (resultados.length === 0) {
      console.log('Nenhum produto encontrado.');
    } else {
      console.log('Resultados da pesquisa:');
      resultados.forEach(function(product) {
        console.log('------------------------');
        console.log('Imagem: ' + product.imageSrc);
        console.log('Título: ' + product.title);
        console.log('Descrição: ' + product.description);
        console.log('Número: ' + product.number);
        console.log('Preço: ' + product.price);
        console.log('ID do produto: ' + product.productId);
      });
    }
  }