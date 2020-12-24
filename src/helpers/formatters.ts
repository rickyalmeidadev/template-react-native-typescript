export const toCurrency = (value: number | string) => {
  const { format } = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  if (typeof value === 'string') return format(Number(value))
  return format(value)
}
