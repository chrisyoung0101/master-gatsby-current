// react icons library (fa = font awesome)
import { FaPepperHot as icon } from 'react-icons/fa';

// here we will be exporting an object that has data in it
export default {
  // Computer Name : should always be lowercase and singular
  name: 'topping', // this is linked to pizza.js 'of' property
  // Human - Visible Title
  title: 'Toppings',
  type: 'document',
  // icon is imported above
  icon,
  fields: [
    {
      // Computer Name
      name: 'name',
      // visible name
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      // select the following fields :
      name: 'name',
      vegetarian: 'vegetarian',
    },
    // prepare function acts on existing fields I guess
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
