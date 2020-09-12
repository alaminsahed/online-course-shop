Problem: * Set the cards row by row
         * Same height and weight
         * Image fit in the image position
         * Set hight and weight according to view point
         
         
         When I pass the value from one component to another. I have to use grid in this file. Here in Home.js, 
         ```
         <div className="container-fluid"> 
          \<div className="row row-cols-md-3 gy-4 mt-5">  //create a grid as a row & for medium device 3 cards are showed.
          ```
          
          Where props are recived in course component, here use girds col and inside it write simple card code.
          
          In course component css file, 
          
          ```
          .card{           //changing height and weight according to the information in the cards. Otherwise when the device change "written information" in the cards will overlap.
            width: 18rem;
            height: 30rem;
   
             }

      .card-img-top{    //set the image. object-fit remains the image in it's position
         width: 100%;
             height: 15vw;
            object-fit: cover;
           }

