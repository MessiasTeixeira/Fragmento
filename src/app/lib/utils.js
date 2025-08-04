export function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco);
}

export function atualizarContador(valor) {
  const number = Number(valor)
  return `R$ ${number.toFixed(2).replace('.', ',')}`;
}
