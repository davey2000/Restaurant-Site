import exportedImages from "./Images";

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 56,
    id: '1',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 59,
    id: '2',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieille Rose',
    price: 44,
    id: '3',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 31,
    id: '4',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 26,
    id: '5',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 20,
    id: '1',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 16,
    id: '2',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    id: '3',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 31,
    id: '4',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 26,
    id: '5',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const food = [
    {
        title: 'Sushi',
        price: 25,
        id: '1',
        tags: 'Rice | Lobster | Avocado | Seaweed',
    },
    {
        title: 'Cheese Burger',
        price: 20,
        id: '2',
        tags: 'Beef | Cheese | Lettuce | Onions | Mayonaise',
    },
    {
        title: 'Chicken Salad',
        price: 20,
        id: '3',
        tags: 'Chicken | Iceberg Lettuce | Tomatoes | Cashews',
    },
    {
        title: 'Burrito',
        price: 18,
        id: '4',
        tags: 'Tortilla Wrap | Rice | Beans | Guacomole | Beef'
    },
];

const appetizers = [
    {
        title: 'Coconut Shrimp',
        price: 12,
        id: '1',
        tags: 'Fried Shrimp battered in Coconut BreadCrumbs',
    },
    {
        title: 'Vegetable Spring Rolls',
        price: 10,
        id: '2',
        tags: 'Veggie Spring Rolls baked to perfection',
    },
    {
        title: 'French Onion Soup',
        price: 8,
        id: '3',
        tags: 'French Onion Soup with Fresh Mozzarella Cheese',
    },
    {
        title: 'Fried Pickels',
        price: 8,
        id: '4',
        tags: 'Fresh Dill Pickles Fried and Breaded'
    }  
];

const awards = [
  {
    imgUrl: exportedImages.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: exportedImages.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: exportedImages.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: exportedImages.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];
const exportedObject = {wines, cocktails, awards, food, appetizers};

export default exportedObject;
