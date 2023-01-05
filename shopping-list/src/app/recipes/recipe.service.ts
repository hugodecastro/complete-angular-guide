import { Recipe } from "./recipe.model";

export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is Just a Test',
          'https://www.seriouseats.com/thmb/2OxF-UNLyWo2qMLSc6unSi7yH5o=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20160623-cubano-roast-pork-sandwich-recipe-19-57695d21e77947538db375d1d30b4bdf.jpg'
        ),
        new Recipe(
          'Anoter Test Recipe',
          'This is Just another Test',
          'https://www.seriouseats.com/thmb/2OxF-UNLyWo2qMLSc6unSi7yH5o=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20160623-cubano-roast-pork-sandwich-recipe-19-57695d21e77947538db375d1d30b4bdf.jpg'
        )
      ];

      getRecipes() {
        return this.recipes.slice();
      }

}
