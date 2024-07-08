the project has 3 routes #Home #about #destinastions
The #home component you can type in your destinations and click add and it is stored on the local storage and also displayed on screen (please Note the add location is not computed) they are only added statically, still in the Home Component you have the leaflet map which on tap of any location on the map it prints out the GeoCoordinates and calculates the distance as well asthe total time taken and also stores this data in the localStorage of the browser (please note to get actual city names on map i will need to use the google Api on google console of which i dont have access because Google has somewhat rejected my naira debit card, so currently i can only fetch coordinates.

The #About Component is just static Text
The Destinations is where i used The Watcheffect to display all saved locations
### 
About: basically the entire project was built and powered by the vuex state management library and
of course router for navigation, the project like most modern framework structure is component based 
and for styling i setup tailwind at the root level, but ended up just coding pure css due to some vue3 styling issues
(applying in some components and others not) and its a common problem because you dont get this behavior with react or next,
also i made use of the vue3 draggable libarary for moving tiles and since google has since rejected my atm card
i dont have access to Api keys anymore like i used to, so i cant really access the console and enjoy the free tier APIs for directions,
Places, searching cities and getting their data etc  and its a shame really because i could have been able to access real time data(-_-).
(tbf usually my organization provides). so I made use of leaflet  FOR MAP features which isnt as powerful and has less features and there i say it, it required more coding ouch!! 

to recap
1. setup Vue app
2. setup store for vuex to handle logic and state management
3. setup helper functions to enable calculations of time and distances
4. setup leaflet for map/geolocation features
5. setup vuedraggable to make tiles reactive and dynamic
6. setup tailwindcss for styling but used css
7. setup vue router to handle dynamic routes
8. ensured project was production ready by building for production and setting up vercel dependencies
9. deployed on vercel 
