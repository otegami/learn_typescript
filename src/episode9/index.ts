type PriceData = {
  [key: string]: number
}

const priceData = {
  apple: 220,
  coffee: 120,
  bento: 500
} as const

type Items = typeof priceData[keyof typeof priceData]

const applePrice: Items = priceData.apple
// const bananaPrice: Items = priceData.banana
