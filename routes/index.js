/* 1-auth    *** publisher **
   2-user
   3- comment
   3-post
   4-category

   bloging => categories => collections of posts
*/

import authRoute from './authRoute.js';
import postRoute from './postRoute.js';
import categoryRoute from './categoryRoute.js';
import commentRoute from './commentRoute.js';

// import userRoute from './userRoute'


export default  (app) => {
    app.use(authRoute);
    app.use(postRoute);
    app.use(commentRoute);
    app.use(categoryRoute);
}