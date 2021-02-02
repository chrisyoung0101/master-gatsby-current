// react icons library (md = material design)
import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/Priceinput';

// here we will be exporting an object that has data in it
export default {
  // Computer Name
  name: 'pizza',
  // Visible Title for humans
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      // set a min price of $10 on a pizza
      validation: (Rule) => Rule.min(1000),
      // Add custom input component from components folder
      // This overrides the built-in input component from Sanity
      inputComponent: PriceInput,
    },
    // allows us to select what toppings go on the pizza
    {
      name: 'toppings',
      title: 'Toppings',
      // we use an array because we want an array of references to create our one(pizza) to
      // many(toppings) relationship
      type: 'array',
      // for type: reference.  We use reference because we can reference multiple types (our toppings)
      // for type: 'topping', topping links to name: topping in topping.js
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      // gotcha : we can name the field for 'name' whatever apparently
      title: 'name',
      // image field
      media: 'image',
      // see comments for this in notes
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    // prepare is a function that takes in our fields
    prepare: ({ title, media, ...toppings }) => {
      // 1. Filter undefined out
      // Converting a value into a true boolean
      // Boolean of undefined returns false
      // Boolean of mushroom returns true
      const tops = Object.values(toppings).filter(Boolean);
      // while we are writing this code
      // 2. Return the preview object for the pizza
      return {
        title, // return title property
        media, // return media property
        subtitle: tops.join(', '), // tops is an array that we created above
      };
    },
  },
};
