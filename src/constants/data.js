import faker from 'faker';

const Diet = [
  'Gluten Free',
  'Ketogenic',
  'Vegetarian',
  'Lacto-Vegetarian',
  'Ovo-Vegetarian',
  'Vegan',
  'Pescetarian',
  'Paleo',
  'Primal',
  'Whole30',
];

const Intolerances = [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat',
];

const Cuisines = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
];

const MealTypes = [
  'main course',
  'side dish',
  'dessert',
  'appetizer',
  'salad',
  'bread',
  'breakfast',
  'soup',
  'beverage',
  'sauce',
  'marinade',
  'fingerfood',
  'snack',
  'drink',
];

const Trending = Array(10)
  .fill()
  .map((_, index) => {
    return {
      id: index,
      //image: `https://source.unsplash.com/random/400x400?food/${index}`,
      image: `https://source.unsplash.com/400x400?food&index=${index}`,
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      calories: faker.random.alphaNumeric({count: 5}),
    };
  });

export {Diet, Intolerances, MealTypes, Cuisines, Trending};
