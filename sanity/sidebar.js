import React from 'react';
// sanity's tool we use to create our custom sidebar
import S, { documentTypeListItems } from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

// build a custom sidebar
// CONFUSION ALERT : Yes, we are creating a custom sidebar however the majority of this code is for Home Page.  At the bottom, we just bring in
// ...documentTypeListItems().filter()  and bring in the rest of our side bar items.
export default function Sidebar() {
  // replace sidebar title from "Content" to "Slick's Slices"
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create an array of new sub items
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        .child(
          // when someone clicks on Home Page, create an editor for the schemaType storeSettings.
          // this lines up with our storeSettings.js schema
          S.editor()
            .schemaType('storeSettings')
            // link the editor we just created to the document ID.
            // What is the document ID? Look in the URL when you click on a pizza or something.  It is the random set of chars.
            // We create a new document ID, so we don't have a random string of numbers that sanity generates for us
            // doc id exists in the URL of our sanity page
            .documentId('downtown')
        ),
      // add in the rest of our document items
      // // we remove the "Settings" tab from the sidebar
      // because this returns an array, we can use filter
      // // For each item that it returns, check that the item.get() is not equal to storeSettings
      ...documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
