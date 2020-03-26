# FriendFinder
Answer a few simple questions to determine which Stranger Things character most reflects your personality. To see the Full-Stack verison of the application, check out the Heroku website at:  https://young-tundra-00852.herokuapp.com/survey

## Tech Used
 * JavaScript: constructors
 * Node.js 
   * Express
   * path
 * HTML and CSS with Bootstrap
 * jQuery

## APP Set Up
  * The Friend Finder app utilizes the Express framework for Node.js
    * The `server.js` opens a listener on a specified port.
    * The `htmlRoutes.js` file utilizes the `GET` method to link together the app's main and survey pages
    * The `apiRoutes.js` file utilizes the `GET` method to access the `friends` Array, containing the information for all possible Stranger Thing character matches.
    * The `apiRoutes.js` file uses a `POST` method to call the `math();` and `findFriend();` functions to establish the user's closest character match.

## App Use
  * Use the Heroku link, posted above, to enter the home page.
  * Click on the **Go to Survey** button.
  * In the top fields enter your name and a link to an accessible picture
  * In questions 1 - 10, use the dropdown menus to select on a scale from 1 to 5 how strongly you agree or disagree with each statement.
  * Click on the **Submit** button at the end to determine your character match.
  * At the bottom of the page, click on `API Friends List` to take a look at all the possible Stranger Things matches. 