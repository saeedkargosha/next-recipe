'use server'

import { GRAPHQL_API_URL } from '@/configs'
import { RecipeQuery, RecipeInput } from '@/types'

const query = `
  query ListRecipes($input: ListRecipesInput) {
    listRecipes(input: $input) {
      recipes {
        id
        slug
        satietyScore
        rating
        description
        descriptionHtml
        title
        images {
          defaultImage {
            path
          }
        }
      }
    }
  }
`

export async function fetchRecipes(input: RecipeInput): Promise<RecipeQuery> {
  const request = await fetch(GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
    // next: { revalidate: 10 },
  })
    .then(response => {
      if (!response.ok) {
        console.error('Error fetching data:')
        return null
      }
      return response.json()
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      return null
    })

  return request
}
