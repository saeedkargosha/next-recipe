export interface Recipe {
  id: string
  slug: string
  satietyScore: number
  rating: number
  description: string
  descriptionHtml: string
  title: string
  images: {
    defaultImage: {
      path: string
    }
  }
}

export interface RecipeQuery {
  data: {
    listRecipes: {
      recipes: Recipe[]
    }
  }
}

export interface RecipeInput {
  query?: string | null
  page: number
  pageSize: number
}
