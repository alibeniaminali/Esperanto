import React from "react";



const AboutUs = () => {

  return (
    <div id='aboutus'>
      <div id='page text'>
      <h2>So you want to know more?</h2>
      <p>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly. We definitely didn't steal this website idea/design.....anyone that disagrees can send their complaints via email to peterbid@email.com</p>
      <h5><em>“The limits of my language mean the limits of my world.”</em></h5>
      <p>Contact our wonderful teachers if you'd like to expand your horizons!</p>

      <p>If you'd like to learn more about this website's creators check out our individual pages 👆</p>
      <div className="col-md-3 col-sm-6">
        <ul className="list-socials">
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
        <p>Recomended by</p>
      </div>
      <div class='container-sm'> 
        <div class='mb-3'>
        <img class='sponsor' src='https://static.npmjs.com/attachments/ck49cu3ceh1sust74dkzkfn69-grey-logowall.png' alt='brands' ></img>
        </div>
        
        </div>
      </div>

    </div>
  )
}

export default AboutUs