function addCart(event) {
  const product = event.target.closest('.prod');
  const productName = product.querySelector('.tituloprod').innerText;
  const productImage = product.querySelector('.imgp').src;
  const productPrice = parseFloat(product.querySelector('.preco').innerText.replace('R$', '').trim()); // Converte para número

  console.log(productName);
  console.log(productImage);
  console.log(productPrice);

  // Cria um objeto para representar o produto
  const productData = {
    name: productName,
    image: productImage,
    price: productPrice
  };

  // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Adiciona o produto ao carrinho
  cart.push(productData);

  // Salva o carrinho atualizado de volta no armazenamento local
  localStorage.setItem('cart', JSON.stringify(cart));
}

const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', addCart);
});
