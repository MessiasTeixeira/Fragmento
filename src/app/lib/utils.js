export function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco);
}

export function atualizarContador() {
  subtotal.textContent = `R$ ${preçoTotal.toFixed(2).replace('.', ',')}`;
  carrinhototal.textContent = `R$ ${preçoTotal.toFixed(2).replace('.', ',')}`;
}
