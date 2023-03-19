import React from 'react'
import "../landing page/homepage.css"
import {useNavigate} from "react-router-dom"

export default function Homepage() {
    let navigate = useNavigate()
    localStorage.setItem("path","/")
  return (
    <div>


    <div class="page-content">
        <div class="img-gallery-1">
            <h1>Let your home flourish again</h1>
            <div class="gallrey-items">
                <a onClick={()=>{navigate("/products")}}><img src="https://www.ikea.com/images/bf/7e/bf7eb49d22f780e94fb45a5391861ad7.png?f=xl" alt=""/></a>
                <a href=""><img src="https://www.ikea.com/ext/ingkadam/m/4afe862651bc5b44/original/PH172865-crop001.jpg" alt=""/></a>
                <a href=""><img src="https://www.ikea.com/ext/ingkadam/m/4287d1a1f82bb719/original/PH178358-crop001.jpg?f=xs" alt="" /></a>
            </div>
        </div>




        <div class="scroll-menu">
            <div class="scroll-menu-item">
                
                <a href=""><i class="fa-sharp fa-solid fa-right"></i><img class="scroll-menu-img" src="https://www.ikea.com/images/33/7e/337e310d379c3060434462be17c1feaa.png" alt=""/></a>
                <p id="first-scroll-item-p">Free assembly on selected living room furniture</p>
                {/* <i class="fa-sharp fa-solid fa-right"></i> */}
            </div>

            <div class="scroll-menu-item" id="second-scroll-item">
                <a href=""><img class="scroll-menu-img" src="https://www.ikea.com/images/75/e7/75e7b6d273388fcc94456479df874c58.jpg" alt=""/></a>
                <p>New lower price</p>
              
            </div>

            <div class="scroll-menu-item" id="third-scroll-item">
                <a href=""><img class="scroll-menu-img" src="https://www.ikea.com/images/fe/6a/fe6a00dd3484de10e820b6bfe76e30bc.jpg" alt=""/></a>
                <p>20 SR or less</p>
                
            </div>

            <div class="scroll-menu-item" id="fourth-scroll-item">
                <a href=""><img class="scroll-menu-img" src="https://www.ikea.com/images/5a/ba/5aba41d981b3d27df4df5d2db022ca18.jpg" alt=""/></a>
                <p>Far more than low price</p>
                
               
            </div>
        </div>




        <div class="img-gallery-2">
            <h1>HAUGA livingroom series</h1>
            <p>Decorate your space with HAUGA white or grey living room furniture sets. These multitasking storage units can both hide away clutter and display your most precious belongings.</p>
            <div class="containerBox">
                <div class="gallery">
                    <figure class="gallery__item-1">
                        <img src="https://www.ikea.com/ext/ingkadam/m/3094bf9b3a4500d5/original/PH173350-crop002.jpg" alt="Gallery 2 image 1" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item-2">
                        <img src="https://www.ikea.com/ext/ingkadam/m/1416f733a425534f/original/PH175078-crop001.jpg" alt="Gallery 2 image 2" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item-3">
                        <img src="https://www.ikea.com/ext/ingkadam/m/62756b64298145fb/original/PH173616-crop001.jpg" alt="Gallery 2 image 3" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item-4">
                        <img src="https://www.ikea.com/ext/ingkadam/m/768cda926421bea4/original/PH172953-crop001.jpg" alt="Gallery 2 image 4" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item-5">
                        <img src="https://www.ikea.com/ext/ingkadam/m/2bdd3a562a97322e/original/PH173612.jpg" alt="Gallery 2 image 5" class="gallery__img"/>
                    </figure>
                </div>
        </div>

        <hr/>

        <h1 class="scroll-menu2-title">Featured furniture categories</h1>
        <div class="scroll-menu2">
            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/84/5e/845ea4713774624c5a47f47a9f1d29f7.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Beds & mattresses</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/44/d6/44d63d9818d9ac98b84c0e3b2dda5776.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Wardrobes</a>
                
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/b7/82/b782b23cebabcdc4c5017aed29d53a56.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Chest of drawers</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/a4/14/a4140cf13383f07dc996d9903ca71be6.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Sofas</a>
            </div>

            <div class="scroll-menu2-item">
                <a href="searchpage.html"><img class="scroll-menu2-img" src="https://www.ikea.com/images/1b/25/1b256acdb3f285ac85b189f0b6920f00.jpg" alt=""/></a>
                <a href="searchpage.html" class="scroll-menu2-item-title">Tables & desks</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/ba/4e/ba4eb0eadf65b3cc70a2a6df64d05230.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Bookcases & shelving units</a>
            </div>
        </div>
           


        <h1 class="scroll-menu2-title">Featured home furnishing accessories</h1>
        <div class="scroll-menu2">
            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/df/22/df22c86533eec90e03e60c149d99bdd1.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Textiles</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/b4/a4/b4a41fb907b031a736e87e783026799e.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Decoration</a>
                
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/9e/d6/9ed6f1594b0ac369d2eb0d35a97dec91.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Small storage & organisers</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/91/9a/919ae947d4892461f390fe8fe1b7d7b6.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Kitchenware & tableware</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/ca/37/ca370cab439faaf2a87427c8b9c6b937.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Rugs</a>
            </div>

            <div class="scroll-menu2-item">
                <a href=""><img class="scroll-menu2-img" src="https://www.ikea.com/images/4f/ed/4fedfd0cfdcc4e8df17858642c4c8876.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Lamps</a>
            </div>
        </div>

        <div class="img-gallery-1">
            <h1 id="h1withp">Sleek look in a style you love</h1>
            <p>Our modern TV stands reflect how we entertain ourselves these days – with a lot of options.</p>
            <div class="gallrey-items">
                
                <a href=""><img src="https://www.ikea.com/ext/ingkadam/m/1a88e5bd52e53260/original/PH163336-crop003.jpg" alt=""/></a>
                <a href=""><img src="https://www.ikea.com/ext/ingkadam/m/4d0daa22b11dce5e/original/PH171592-crop002.jpg" alt=""/></a>
            </div>
        </div>

        <div class="big-banner">
            <a href=""><img src="https://www.ikea.com/images/e1/fa/e1fa69bac395c7f57acf781ca5a7cfd1.jpg" alt="Planning tools image"/></a>
            <div class="big-banner-text-container">
                <h2>Planning tools</h2>
                <p>Plan your dream kitchen, your perfect home, office or wardrobe storage system. Play with colours, styles, sizes and configurations to plan your way to perfection with our easy to use planning tools.</p>
                <br/>
                <a href="" class="big-banner-button">Start planning</a>
            </div>
        </div>

        <h1 class="non-scroll-menu-title">Quick guides to a more sustainable life at home</h1>
        <div class="non-scroll-menu">
            <div class="non-scroll-menu-item">
                <a href=""><img class="non-scroll-menu-img" src="https://www.ikea.com/images/10/ea/10eaea785c52329ede80a79a1c4e3aec.jpg" alt=""/></a>
                <a href="" class="scroll-menu2-item-title">Water & energy</a>
            </div>

            <div class="non-scroll-menu-item">
                <a href=""><img class="non-scroll-menu-img" src="https://www.ikea.com/images/c8/fa/c8fadc03634e11fae25ee3be4e94a5b1.jpg" alt=""/></a>
                <a href="" class="non-scroll-menu-item-title">Materials</a>
            </div>

            <div class="non-scroll-menu-item">
                <a href=""><img class="non-scroll-menu-img" src="https://www.ikea.com/images/70/a9/70a9036a52c6bb3ea9d87c90c486f5eb.jpg" alt=""/></a>
                <a href="" class="non-scroll-menu-item-title">Health</a>
            </div>

            <div class="non-scroll-menu-item">
                <a href=""><img class="non-scroll-menu-img" src="https://www.ikea.com/images/ce/ab/ceabc4bf326a333e64bdf5d4e821be39.jpg" alt=""/></a>
                <a href="" class="non-scroll-menu-item-title">Food</a>
            </div>

            <div class="non-scroll-menu-item">
                <a href=""><img class="non-scroll-menu-img" src="https://www.ikea.com/images/26/3c/263cf62c0b373486e759136205d181b2.jpg" alt=""/></a>
                <a href="" class="non-scroll-menu-item-title">Furniture</a>
            </div>
        </div>

        


        <div class="ideas-container">
            <h1 class="ideas-title">Our services</h1>
            <a href="" class="ideas-button">Bedroom</a>
            <a href="" class="ideas-button">Living room</a>
            <a href="" class="ideas-button">Kitchen</a>
            <a href="" class="ideas-button">Home office</a>
            <a href="" class="ideas-button">Outdoor</a>
            <a href="" class="ideas-button">Bathroom</a>
            <a href="" class="ideas-button">Baby & children room</a>
            <a href="" class="ideas-button">+2 more</a>

            <div class="ideas-gallery">
                <div class="ideas-gallery-row"> 
                    <div class="ideas-gallery-column">
                        <img src="https://www.ikea.com/ext/ingkadam/m/2e3030045b9e6af0/original/PH162751-crop002.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/5ec885f883aca85e/original/PH163149-crop001.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/57137deabb89fb35/original/PH157297-crop001.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/2d99adc5e2dd1f6a/original/PH165566-crop001.jpg" alt=""/>

                    </div>
                    <div class="ideas-gallery-column">
                        <img id="first-column2" src="https://www.ikea.com/ext/ingkadam/m/10fdb13d3fb1d53c/original/PH156758-crop001.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/314fd312c5868abc/original/PH164210-crop001.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/3bf8cec7ca837e30/original/PH159521-crop002.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/48510dfbc447347b/original/PH159525-crop001.jpg" alt=""/>

                    </div>  
                    <div class="ideas-gallery-column">
                        <img src="https://www.ikea.com/ext/ingkadam/m/26e6835bd6c348ca/original/PH163128-crop002.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/7173bf07da74cf16/original/PH163611-crop002.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/3ff99cbc5985a236/original/PH158699-crop001.jpg" alt=""/>
                        <img src="https://www.ikea.com/ext/ingkadam/m/5715e59baa9d726/original/PH152876-crop004.jpg" alt=""/>
                    </div>
                  </div>
                  <div><a href="" class="load-more-button">Load 12 more</a></div>
            </div>
        </div>    
    </div>
</div>
  </div>
  )
}
