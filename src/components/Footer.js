import styles from '../css_modules/Footer.module.css';


function Footer () {
  const currentYear=new Date().getFullYear();

  return (<div className= {
      styles.footerRow
    }

    id="footerrow1"> <div className= {
      styles.footleft
    }

    > <a href="/"className= {
      styles.navbarBrand
    }

    > <img src="images/bluetick-consultants.png"width="170"alt="Bluetick Consultants"/> </a> <h4 className= {
      ''
    }

    >Bluetick Consultants LLP</h4> <p> <a href="mailto:contact@bluetickconsultants.com" className={styles.contactEmail}>contact@bluetickconsultants.com</a><br /> </p> <div className= {
      styles.glassdoorIsoWrap
    }

    > <a href="https://www.glassdoor.co.in/Overview/Working-at-Bluetick-Consultants-EI_IE3180317.11,31.htm"target="_blank"rel="noopener noreferrer"> <img src="images/glassdoor-rating.webp"width="125"alt="Glassdoor Review"/> </a> <img src="images/bluetick-iso.webp"width="1"alt="Bluetick Consultants ISO Certified"/> </div> </div> 
    
    
    <div className= {
      styles.footright
    }

    > <div className= {
      ''
    }

    id= {
      styles.upsection
    }

    >
      <div className= {
      styles.righttop
    }

    >
      
       <div className= {
      ``
    }

    > <h4>RESOURCES</h4> <ul className= {
      styles.listUnstyled
    }

    > <li className= {
      ``
    }

    > <a href="https://www.bluetickconsultants.com/blogs.html"title="Blogs">Blogs</a> </li> </ul> </div> <div className= {
      ``
    }

    > <h4>PRODUCTS</h4> <ul className= {
      styles.listUnstyled
    }
    id={styles.products}
    > <li> <a href="https://talktocode.bluetickconsultants.com/"title="Talk To Code">Talk To Code</a> </li> <li> <a href="https://interviewgpt.bluetickconsultants.com/"title="InterviewGPT">InterviewGPT</a> </li> <li> <a href="https://pdf.bluetickconsultants.com/"title="PrivacyDoc">PrivacyDoc</a> </li> <li> <a href="https://salescalleval.bluetickconsultants.com/"title="Sales Call Evaluator">Sales Call Evaluator</a> </li> </ul> </div></div> </div> <div> <hr className= {
      ``
    }

    style= {
        {
        background: 'rgba(255, 255, 255, 0.5)',
        
      }
    }

    /> <div className= {
      styles.row
    }

    > <div className= {
      styles.iconsbox
    }

    > <a href="https://www.facebook.com/bluetickconsultants/"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/2x/facebook-new.png"className= {
      styles.socialIcons
    }

    alt='facebookicon'/></a> <a href="https://www.instagram.com/bluetickconsultants/"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/2x/instagram-new--v2.png"className= {
      styles.socialIcons
    }

    alt='instagramicon'/></a> <a href="https://www.threads.net/@bluetickconsultants"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/pulsar-line/48/threads.png"className= {
      styles.socialIcons
    }

    alt='threadsicon'/></a> <a href="https://twitter.com/BluetickConsult"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/2x/twitter-squared.png"className= {
      styles.socialIcons
    }

    alt='twittericon'/></a> <a href="https://www.linkedin.com/company/bluetick-consultants"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/2x/linkedin.png"className= {
      styles.socialIcons
    }

    alt='linkedinicon'/></a> <a href="https://www.quora.com/profile/Bluetick-Consultants"target="_blank"rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/150/quora.png"className= {
      styles.socialIcons
    }

    alt='quoraicon'/></a> </div> <div className= {
      ``
    }

    > <div className= {
      styles.copyright
    }

    > <span> {
      currentYear
    }

    </span> © All rights reserved by Bluetick Consultants LLP </div> </div> </div> </div> </div> </div>);
}

;

export default Footer;