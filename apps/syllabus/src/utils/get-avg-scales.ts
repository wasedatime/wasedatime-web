import Review from "@app/types/review"

export interface Scales {
  satisfaction: number
  difficulty: number
  benefit: number
}

export const getAvgScales = (reviews: Review[]): Scales => {
  let satisfactionSum = 0
  let difficultySum = 0
  let benefitSum = 0
  if (reviews) {
    reviews.forEach((review) => {
      satisfactionSum += review.satisfaction
      difficultySum += review.difficulty
      benefitSum += review.benefit
    })
  }
  // calculate the averages of scales and round them to the nearest .5
  return {
    satisfaction: Math.round((satisfactionSum / reviews.length || 0) * 2) / 2,
    difficulty: Math.round((difficultySum / reviews.length || 0) * 2) / 2,
    benefit: Math.round((benefitSum / reviews.length || 0) * 2) / 2,
  }
}

export default getAvgScales
