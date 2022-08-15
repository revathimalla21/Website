import React from 'react';

  function Content() {
    return (
       <div>
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary"><small>About us</small></h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh, Visakhapatnam is known for its picturesque beaches and serene landscape, as well as a rich cultural past, which makes it an ideal spot for a fantastic coastal vacation.</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="destinations">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/ig-3.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">RK Beach</h4>
                          <p class="card-text text-secondary">The beach is best known for the INS Kursura Submarine Museum, which preserves the Kalvari class submarine. The war memorial called 'Victory at Sea' at the shore of the beach was constructed as homage to soldiers of the 1971 war. RK beach is famous for family outings and it attracts large number of visitors.</p>
                       </div>
                       <div class="card-footer">
                          <a href="https://vizagtourism.org.in/rama-krishna-beach-vizag" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-2.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Rushikonda Beach</h4>
                          <p class="card-text text-secondary">Rushikonda beach is widely known for its golden sands and tidy waves of Bay of Bengal. Surrounded by green plants, Rushikonda beach looks picture perfect attracting nature lovers in huge numbers.</p>
                       </div>
                       <div class="card-footer">
                          <a href="https://vizagtourism.org.in/rushikonda-beach-vizag" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/t-1.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Kailasagiri</h4>
                          <p class="card-text text-secondary">The main attractions are big statues of lord shiva and parvathi. They are painted in white colour. Amazing sea view and greenery everywhere with lots of plants & trees. And there are toy train and children's park for kids.</p>
                       </div>
                       <div class="card-footer">
                          <a href="https://vizagtourism.org.in/kailasagiri-park-vizag" class="btn btn-primary">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  


       <section class=""  id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Places and Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div class="card-header" id="headingOne">
            <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Tourist Places
            </button>
            </h2>
         </div>

         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            The top sightseeing places in Visakhapatnam are Kailasagiri, Katiki Waterfalls, Kambalakonda Wildlife Sanctuary, Borra Caves, Submarine Museum, Simhachalam Temple.
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Best Destination
            </button>
            </h2>
         </div>
         <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
            The port of Visakhapatnam is renowned for being home to the oldest shipyard in all of India, and with a plethora of manmade wonders and natural spectacles, Visakhapatnam is a must-visit tourist destination in South India. 2-3 days is the ideal duration of a trip in Vizag. You can take a day to all the points of interest in Vizag city. Additionally, you will need a day more to take a trip to the Araku Valley and other points of interest like Tyda Park and Borra Caves.
            </div>
         </div>
      </div>
      <div class="card">
         <div class="card-header" id="headingThree">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Best Heritages
            </button>
            </h2>
         </div>
         <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
            Vizag also known as the “Goa of the east coast” has been the tourist destination from the decades. This city has much to offer ranging from beaches, caves,wildlife sanctuaries and submarine museum.
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary"><small>Other Places to visit</small></h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200813131424/iStock-1253176292-scaled.jpg" height={300} width={150} class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold mt-4">Araku Valley</h4>
          <h6 class="font-weight-bold blue-text my-3 "><small class="text-muted">Also called as Ooty of Andhra Pradesh</small></h6>
          <p><small>At an elevation of about 3200 ft, Araku is famous for its coffee plantations surrounded by beautiful gardens, streams, waterfalls and valleys that are covered with lush green forests. Situated in the Eastern Ghats, the hill station is about 112 km southeast of Vishakhapatnam.</small></p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://imgcld.yatra.com/ytimages/image//upload/c_fill,w_1400,h_510,q_100/v3613842062/Temples/shutterstock_300455909_sgTQVm.jpg" class="rounded-circle z-depth-1 img-fluid" height={300} width={200}/>
          </div>
          <h4 class="font-weight-bold mt-4">Simhachalam</h4>
          <h6 class="font-weight-bold blue-text my-3"><small class="text-muted">God of Hindus</small></h6>
          <p><small>Vishnu assumed the form of Varaha Narasimha, for whom Prahlada built a temple after Hiranyakashipu's death. Worship was conducted and the place was named Simhachalam (lion's hill).</small></p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://media.ttravelog.com/article/images/FB_IMG_1578731830613.jpg" class="rounded-circle z-depth-1 img-fluid" height={200} width={150}/>
          </div>
          <h4 class="font-weight-bold mt-4">Indira Gandhi Zoological Park</h4>

          <p><small>Indira Gandhi Zoological Park is located amidst Seethakonda Reserve Forest covering an area of 625 acres in Visakhapatnam district of Andhra Pradesh.</small></p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
  
  export default Content;