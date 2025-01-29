export function convertToMoney(centavos: string): string {
  const reais = Number(centavos) / 100;
  return `R$ ${reais.toFixed(2).replace('.', ',')}`;
}
