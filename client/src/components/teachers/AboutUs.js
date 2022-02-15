import React from "react";



const AboutUs = () => {

  return (
    <div id='aboutus'>
      <div id='page text'>
      <h5>So you want to know more?</h5>
      <p>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly. We definitely didn't steal this website idea/design.....anyone that disagrees can send their complaints via email to peterbid@email.com</p>
      <h5><em>“The limits of my language mean the limits of my world.”</em></h5>
      <p>Contact our wonderful teachers if you'd like to expand your horizons!</p>

      <p>If you'd like to learn more about this website's creators check out our individual pages ⬇️</p>
      <div className='col-md-3 col-sm-6'>
        <ul className='list-socials'>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className='mb-3'>
        <h5>Recomended by</h5>
      </div>
      <div className='container-sm'> 
        <div className='mb-4'>
        <img className='img-fluid' src='https://static.npmjs.com/attachments/ck49cu3ceh1sust74dkzkfn69-grey-logowall.png' alt='brands' ></img>
        </div>
        
        </div>
      </div>

    </div>
  )
}

export default AboutUs