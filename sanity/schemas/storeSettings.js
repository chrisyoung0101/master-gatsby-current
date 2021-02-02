// react icons library (Md = material design)
import { MdStore as icon } from 'react-icons/md';

// here we will be exporting an object that has data in it
// we will have the settings page set up so that it will not be possible for the user to create a new store... we want them to
// go directly to the settings page.
export default {
  // Computer Name
  name: 'storeSettings',
  // Visible Title for humans
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    // Field for store name
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of the Store',
    },
    // Field for which slicemasters are currently slicing
    {
      name: 'slicemaster',
      title: 'Slicemasters Currently Slicing',
      // array of Slicemasters
      // the type is an array which is...
      // array will be an array of type of reference
      // this array of type reference will be linked 'to:' another array of type person.
      // So, I guess we create a new array that references an existing array
      // person comes from the person.js schema
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    // Field for available slices
    {
      name: 'hotSlices',
      title: 'Hot Slices available in the case',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
