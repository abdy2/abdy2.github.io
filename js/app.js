var form = document.getElementById('input-message');
var mic = document.getElementById('send-audio');
var querybox = document.getElementById('questions');
var answerbox = document.getElementById('messages');
var sendd = document.getElementById('send-text');
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const iframeComponent = document.getElementById("preview").contentWindow.document;
var showupload = 'false';
var lastid = '';


    // speech recognistion
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.onstart = function() {
        console.log("You can speek now!");
    };

//all the possible words user can use to communicate with computer
const possibleTypes = ["blog", "ecommerce","portfolio",];
const elements = ['banner', 'navigation', 'section',  'card', 'footer'];
//some initiation
let UserChosedType = '';
let state = '';
//to browse options of element
let lastElement = '';
let je;
let quest;
//major objects
var p = {};




const type = {
    navigation: [
        [
            'blognav0',

             ` <div class="navigation">
             <a href="index.html" class="navigationLogo"><h1>FireBlogs</h1>
             </a>
             
             <div class="navigationItems">
                 <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="">Food</a></li>
                     <li><a href="">Travel</a></li>
                     <li><a href="">Books</a></li>
                 </ul>
             </div>     
          
           <div class="navigationButton"><button class="btn" >Get in Touch</button></div>
           
         
         </div>`,

            '\n' + `button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}
.navigation {
    display: flex;
    height: 80px;      /* optional; just for demo */
    box-shadow:  0.3em 0.3em 1em rgba(0,0,0,0.3);
  }
  
  .navigationLogo {
    flex: 1;          
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
  }
  
  .navigationItems {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  .navigationButton {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn{
    padding: 10px;
    color:white;
    font-weight: 10.3em;
    background-color: rgb(243, 110, 57);
   
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  li{
      display: inline;
      padding: 10px 10px 0 10px;
  }
  li:hover{
    border-bottom: 4px solid black;
  }`,


            'js goes here',

            'blognav1',
            `
            <div class="container">
            <ul class="nav">
             <li><a href="#">FOOD</a>
              <ul>
                  <li>
                    <ul>
                      <li><a href="#">Southern Food</a></li>
                      <li><a href="#">Barbecues & Grilling</a></li>
                      <li><a href="#">Home Cooking</a></li>
                      <li><a href="#">Cocktails</a></li>
                      <li><a href="#">Culinary Arts</a></li>
                      <li><a href="#">Busy Cooks</a></li>
                      <li><a href="#">Vegetarian Food</a></li>
                      <li><a href="#">More about food »</a></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                </ul>
              </li><li><a href="#">HEALTH</a>
              <ul>
                  <li>
                    <ul>
                      <li><a href="#">Arthritis & Joint Conditions</a></li>
                      <li><a href="#">Cold & Flu</a></li>
                      <li><a href="#">Type 2 Diabetes</a></li>
                      <li><a href="#">Weight Loss</a></li>
                      <li><a href="#">Cholesterol</a></li>
                      <li><a href="#">Pregnancy & Childbirth</a></li>
                      <li><a href="#">Pediatrics</a></li>
                      <li><a href="#">More about food »</a></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                <li>
                    <ul>
                      <li><div class="demo-box">a</div></li>
                    </ul>
                  </li>
                </ul>
              </li><li><a href="#">HOME</a>
              </li><li><a href="#">MONEY</a>
              </li><li><a href="#">STYLE</a>
              </li><li><a href="#">TECH</a>
              </li><li><a href="#">TRAVEL</a>
              </li><li><a href="#">MORE</a>
            </ul>
          </div>
    `,
            `@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,500,300italic,500italic,700italic,900,300);



            .container {
              width: 100%;
              height: auto;
              position: relative;
              background: #fff;
            }
            
            .nav {
              list-style: none;
              margin: 0 auto;
              width: 1000px;
            }
            
            .nav > li {
              display: inline-block;
            }
            
            .nav > li:hover {
              background: #F05A14;
            }
            
            .nav > li:nth-child(1):hover, .nav > li:nth-child(1)>ul {
              background: blue;
            }
            
            .nav > li:nth-child(2):hover, .nav > li:nth-child(2) > ul {
              background: rgb(240,90,20);
            }
            
            .nav > li:nth-child(3):hover, .nav > li:nth-child(3) > ul {
              background: rgb(0,160,210);
            }
            
            .nav > li:nth-child(4):hover, .nav > li:nth-child(4) > ul {
              background: rgb(140,10,145);
            }
            
            .nav > li:nth-child(5):hover, .nav > li:nth-child(5) > ul {
              background: rgb(30,70,165);
            }
            
            .nav > li:nth-child(6):hover, .nav > li:nth-child(6) > ul {
              background: rgb(185,0,130);
            }
            
            .nav > li:nth-child(7):hover, .nav > li:nth-child(7) > ul {
              background: rgb(0,190,235);
            }
            
            .nav > li:nth-child(8):hover, .nav > li:nth-child(8) > ul {
              background: rgb(0,190,135);
            }
            
            .nav > li > a {
              display: block;
              text-decoration: none;
              color: grey;
              line-height: 40px;
              padding: 0px 19px;
              text-transform: uppercase;
              letter-spacing: .05em;
              cursor: pointer;
            }
            
            .nav > li > a:hover {
              color: #fff;
            }
            
            .nav > li:hover ul {
              display: block;
              opacity: 1;
              visibility: visible;
            }
            
            .nav > li > ul {
              position: absolute;
              top: 40px;
              left: 0px;
              width: 100%;
              height: auto;
              opacity: 0;
              visibility: hidden;
              list-style: none;
              padding: 0px;
              border-bottom: 3px solid #ccc;
            }
            
            .nav > li > ul > li {
              margin: 0 auto;
              width: 1060px;
              color: #fff;
            }
            
            .nav > li > ul > li > ul {
              width: 240px;
              padding: 0px;
              margin: 40px 25px 40px 0px;
              float: left;
            }
            
            .nav > li > ul > li > ul > li {
              list-style: none;
            }
            
            .nav > li > ul > li > ul > li a {
              display: block;
              margin-bottom: 8px;
              color: #fff;
              text-decoration: none;
            }
            
            .demo-box {
              background: white;
              width: 215px;
              height: 280px;
              border: 5px solid rgba(0, 0, 0, 0.2); 
            }`,
            'js goes here',

            'blognav2',
            `
    <nav class = "navbar">
    <div class = "container">
      <a href = "index.html" class = "navbar-brand">Logo</a>
      <div class = "navbar-nav">
        <a href = "">home</a>
        <a href = "">design</a>
        <a href = "">blog</a>
        <a href = "">about</a>
      </div>
    </div>
  </nav>
    `,
            `
    .navbar{
      background: rgba(0, 0, 0, 0.6);
      padding: 1.2rem;
  }
  .navbar-brand{
      color: #fff;
      font-size: 2rem;
      display: block;
      text-align: center;
      text-decoration: none;
      font-family: var(--Playfair);
      letter-spacing: 1px;
  }
  .navbar-nav{
      padding: 0.8rem 0 0.2rem 0;
      text-align: center;
  }
  .navbar-nav a{
      text-transform: uppercase;
      font-family: var(--Roboto);
      letter-spacing: 1px;
      font-weight: 500;
      color: #fff;
      text-decoration: none;
      display: inline-block;
      padding: 0.4rem 0.1rem;
      letter-spacing: 3px;
      transition: opacity 0.5s ease;
  }
  .navbar-nav a:hover{
      opacity: 0.7;
  }
    `,

            'js goes here',
            'blognav3',
            `    <nav class="navbar container">
        <a href="./index.html">
            <h2 class="logo">NewsFlash</h2>
        </a>

        <div class="menu" id="menu">
            <ul class="list">
                <li class="list-item">
                    <a href="#" class="list-link current">Home</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Categories</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Reviews</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">News</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Membership</a>
                </li>
                <li class="list-item">
                    <a href="#" class="list-link">Contact</a>
                </li>
                <li class="list-item screen-lg-hidden">
                    <a href="./signin.html" class="list-link">Sign in</a>
                </li>
                <li class="list-item screen-lg-hidden">
                    <a href="./signup.html" class="list-link">Sign up</a>
                </li>
            </ul>
        </div>

        <div class="list list-right">
            <button class="btn place-items-center" id="theme-toggle-btn">
                <i class="ri-sun-line sun-icon"></i>
                <i class="ri-moon-line moon-icon"></i>
            </button>

            <button class="btn place-items-center" id="search-icon">
                <i class="ri-search-line"></i>
            </button>

            <button class="btn place-items-center screen-lg-hidden menu-toggle-icon" id="menu-toggle-icon">
                <i class="ri-menu-3-line open-menu-icon"></i>
                <i class="ri-close-line close-menu-icon"></i>
            </button>

            <a href="#" class="list-link screen-sm-hidden">Sign in</a>
            <a href="#" class="btn sign-up-btn fancy-border screen-sm-hidden">
                <span>Sign up</span>
            </a>
        </div>

    </nav>
    `,
            `
    /* Import font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    
    /* Custom properties */
    :root{
        --light-color: #fff;
        --light-color-alt: #afb6cd;
        --primary-background-color: #131417;
        --font-family: 'Poppins', sans-serif;
        --gap: 2rem;
    }
    
    
    
    
    
    a{
        color: inherit;
        text-decoration: none;
    }
    
    ul{
        list-style: none;
    }
    
    img{
        max-width: 100%;
    }
    
    input,
    button {
      font: inherit;
      color: inherit;
      border: none;
      background-color: transparent;
    }
    
    .container{
        max-width: 160rem;
        margin: 0 auto;
        padding: 0 1.5rem;
       font-size: 62.5%;
        font-family: 'poppins', san-serif;
        font-size: 1rem;
        color: #afb6cd;
        background-color: #131417;
        letter-spacing: 1px;
        transition: background-color .25s,color .25s;
    }
    
    .place-items-center{
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .section:not(.featured-articles){
        padding-block: 5rem;
    }
    
    .d-grid{
        display: grid;
    }
    
    .screen-sm-hidden{
        display: none;
    }
    /* Header */
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 1.5rem;
    }
    
    .logo{
        color: #fff;
    }
    
    .menu{
        position: absolute;
        top: 8.5rem;
        right: 1.5rem;
        width: 23rem;
        padding: 1.5rem;
        opacity: 0;
        transform: scale(0);
        transition: opacity .25s ease-in;
    }
    
    .list{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    
    .menu > .list{
        flex-direction: column;
    }
    
    .list-link.current{
        color: #fff;
    }
    
    .close-menu-icon{
        display: none;
    }
    
    .btn{
        cursor: pointer;
    }
    
    .list-link:hover,
    .btn:hover,
    .btn:hover span{
        color: #fff;
    }
    
    .moon-icon{
        display: none;
    }
    
    .light-theme .sun-icon{
        display: none;
    }
    
    .light-theme .moon-icon{
        display: block;
    }
    
    
    
    
    @media screen and (min-width: 1024px) {
        .menu{
            position: static;
            width: initial;
            padding: initial;
            background-color: transparent;
            opacity: 1;
            transform: scale(1);
        }
    
        .menu > .list{
            flex-direction: row;
        }
    
        .screen-lg-hidden{
            display: none;
        }
    
        .screen-sm-hidden{
            display: block;
        }
    
        .sign-up-btn{
            padding: 4px;
        }
    
      
        
    `,
            'js goes here',
            'blognav4',
            `<div class="page">
            <nav id="global-nav" class="global-nav" role="navigation">
              <ul class="menu">
                <li id="shortcuts-nav" class="nav">
                  <a href="#" id="shortcuts-item"><span>Shortcuts</span></a>
                  <ul class="panel">
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#case-studies">Case Studies</a>
                    </li>
                    <li>
                      <a href="#careers">Careers</a>
                    </li>
                    <li>
                      <a href="#news">News</a>
                    </li>
                    <li>
                      <a href="#events">Events</a>
                    </li>
                  </ul>
                </li>
                <li id="utility-nav">
                  <ul>
                    <li id="nav-search" class="nav">
                      <a href="#"><span>Search</span></a>
                      <form id="form-search" class="form-fields panel" action="#">
                        <fieldset class="fields-search">
                          <input id="search-terms" class="input-text" type="text" placeholder="Enter keywords..." />
                          <input id="submit-search" class="button" type="submit" value="Search" />
                        </fieldset>
                      </form>
                    </li>
                    <li id="nav-directory" class="nav">
                      <a href="#" id="nav-directory-item"><span><b>A-Z</b> Directory</span></a>
                      <div class="panel" id="panel-directory">
                        <p>Alphabetical Directory</p>
                        <ul id="alpha">
                          <li>
                            <a href="#a" rel="A">A</a>
                          </li>
                          <li>
                            <a href="#b" rel="B">B</a>
                          </li>
                          <li>
                            <a href="#c" rel="C">C</a>
                          </li>
                          <li>
                            <a href="#d" rel="D">D</a>
                          </li>
                          <li>
                            <a href="#e" rel="E">E</a>
                          </li>
                          <li>
                            <a href="#f" rel="F">F</a>
                          </li>
                          <li>
                            <a href="#g" rel="G">G</a>
                          </li>
                          <li>
                            <a href="#h" rel="H">H</a>
                          </li>
                          <li>
                            <a href="#i" rel="I">I</a>
                          </li>
                          <li>
                            <a href="#j" rel="J">J</a>
                          </li>
                          <li>
                            <a href="#k" rel="K">K</a>
                          </li>
                          <li>
                            <a href="#l" rel="L">L</a>
                          </li>
                          <li>
                            <a href="#m" rel="M">M</a>
                          </li>
                          <li>
                            <a href="#n" rel="N">N</a>
                          </li>
                          <li>
                            <a href="#o" rel="O">O</a>
                          </li>
                          <li>
                            <a href="#p" rel="P">P</a>
                          </li>
                          <li>
                            <a href="#q" rel="Q">Q</a>
                          </li>
                          <li>
                            <a href="#r" rel="R">R</a>
                          </li>
                          <li>
                            <a href="#s" rel="S">S</a>
                          </li>
                          <li>
                            <a href="#t" rel="T">T</a>
                          </li>
                          <li>
                            <a href="#u" rel="U">U</a>
                          </li>
                          <li>
                            <a href="#v" rel="V">V</a>
                          </li>
                          <li>
                            <a href="#w" rel="W">W</a>
                          </li>
                          <li>
                            <a href="#x" rel="X">X</a>
                          </li>
                          <li>
                            <a href="#y" rel="Y">Y</a>
                          </li>
                          <li>
                            <a href="#z" rel="Z">Z</a>
                          </li>
                          <li>
                            <a href="##" rel="#">#</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li id="nav-contact" class="nav">
                      <a href="#"><span>Email</span></a>
                      <form id="form-contact" class="form-fields panel" action="#">
                        <fieldset class="fields-contact">
                          <input id="email-name" class="input-text" type="text" placeholder="Full Name" />
                          <input id="email-address" class="input-text" type="email" placeholder="name@example.com" />
                          <input id="email-subject" class="input-text" type="text" placeholder="Subject" />
                        </fieldset>
                        <textarea id="email-message" class="textarea" placeholder="Enter your message" cols="8"></textarea>
                        <input id="submit-contact" class="button" type="submit" value="Send Message" />
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <header class="main-header">
              <h1 class="branding">
                <a href="#">Brand</a>
              </h1>
              <nav role="navigation" class="main-nav">
                <ul class="menu">
                  <li class="top-level">
                    <a href="#about">About</a>
                  </li>
                  <li class="top-level">
                    <a href="#team">Team</a>
                  </li>
                  <li class="top-level">
                    <a href="#work">Work</a>
                  </li>
                  <li class="top-level">
                    <a href="#process">Process</a>
                  </li>
                  <li class="top-level">
                    <a href="#blog">Blog</a>
                  </li>
                  <li class="top-level">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </header>
          
          </div>
          `,
          `/*
          ==================================================
          
          Reset
          
          ==================================================
          */
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed,
          figure, figcaption, footer, header, hgroup,
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            font-size: 100%;
            vertical-align: baseline;
          }
          
          html {
            line-height: 1;
          }
          
          ol, ul {
            list-style: none;
          }
          
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          
          caption, th, td {
            text-align: left;
            font-weight: normal;
            vertical-align: middle;
          }
          
          q, blockquote {
            quotes: none;
          }
          q:before, q:after, blockquote:before, blockquote:after {
            content: "";
            content: none;
          }
          
          a img {
            border: none;
          }
          
          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {
            display: block;
          }
          
          
          /*
          ==================================================
          
          ELEMENTS
          
          ==================================================
          */
          
          /*
          --------------------------------------------------
          Root Element
          -------------------------------------------------- */
          body {
            min-width: 300px;
          }
          
          /*
          --------------------------------------------------
          Text-Level Semantics
          -------------------------------------------------- */
          /* Anchors
          -------------------------------------------------- */
          a {
            text-decoration: none;
          }
          
          /* Modifiers
          -------------------------------------------------- */
          strong {
            font-weight: bold;
          }
          
          em {
            font-style: italic;
          }
          
          /*
          --------------------------------------------------
          Grouping Content
          -------------------------------------------------- */
          p,
          dl,
          hr,
          ol,
          ul,
          pre,
          table,
          address,
          fieldset {
            margin-bottom: 20px;
          }
          
          hr {
            border-color: #ddd;
            border-style: solid;
            border-width: 1px 0 0;
            height: 0;
          }
          
          u {
            text-decoration: none;
            border-bottom: 1px dotted #777;
          }
          
          /*
          --------------------------------------------------
          Document Sections
          -------------------------------------------------- */
          article, aside, details, figcaption, figure,
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          
          /*
          ==================================================
          
          TYPOGRAPHY
          
          ==================================================
          */
          /*
          --------------------------------------------------
          Fonts
          -------------------------------------------------- */
          body {
            font: normal 100%/1.5em "Open Sans", Helvetica, Arial, sans-serif;
            color: #666;
          }
          
          /*
          --------------------------------------------------
          Headings
          -------------------------------------------------- */
          h1 {
            font-size: 2.6em;
          }
          
          h2 {
            font-size: 2.2em;
          }
          
          h3 {
            font-size: 1.8em;
          }
          
          h4 {
            font-size: 1.6em;
          }
          
          h5 {
            font-size: 1.4em;
          }
          
          h6 {
            font-size: 1.2em;
          }
          
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: normal;
            margin-bottom: .5em;
            line-height: 1.2em;
          }
          
          /*
          --------------------------------------------------
          Text and Anchors
          -------------------------------------------------- */
          p {
            font-family: Georgia, "Times New Roman", serif;
          }
          
          b {
            font-weight: bold;
          }
          
          /*
          --------------------------------------------------
          Lists
          -------------------------------------------------- */
          ol {
            list-style: decimal;
          }
          
          ul {
            list-style: square;
          }
          
          li {
            margin-left: 24px;
          }
          
          ul li {
            list-style-type: disc;
          }
          
          ol li {
            list-style-type: decimal;
          }
          
          ol li ol li {
            list-style-type: lower-alpha;
          }
          
          ul li li {
            list-style-type: circle;
          }
          
          ul ul,
          ol ul,
          ol ol {
            margin-bottom: 0;
          }
          
          ol ul li {
            list-style-type: disc;
          }
          
          ol ul li li {
            list-style-type: circle;
          }
          
          /*
          --------------------------------------------------
          Tables
          -------------------------------------------------- */
          th,
          td {
            text-align: left;
          }
          
          td {
            vertical-align: top;
          }
          
          th {
            font-weight: bold;
          }
          
          /*
          --------------------------------------------------
          Miscellaneous
          -------------------------------------------------- */
          /* Blockquotes
          -------------------------------------------------- */
          blockquote {
            border-left: 3px solid #d14414;
            background-color: #fff;
            padding: 0px 0px 0px 12px;
            margin-left: 17px;
          }
          
          blockquote p:last-child {
            margin-bottom: 0;
          }
          
          /* Code
          -------------------------------------------------- */
          pre {
            white-space: normal;
            padding: 1em 1.5em;
            border: 1px solid #ddd;
            background-color: #eee;
            word-wrap: break-word;
          }
          
          code {
            white-space: pre;
            font-family: monospace;
            font-size: 1.2em;
            color: #000;
          }
          
          /*
          --------------------------------------------------
          Branding
          -------------------------------------------------- */
          .branding {
            font-family: "Raleway", Helvetica, Arial, sans-serif;
            font-weight: 300;
          }
          
          /*
          --------------------------------------------------
          Navigation
          -------------------------------------------------- */
          /* Global Navigation
          -------------------------------------------------- */
          .global-nav {
            font-size: .875em;
            font-size: .875rem;
          }
          
          /* Utility Navigation
          -------------------------------------------------- */
          #shortcuts-item,
          #utility-nav li a {
            font-size: .875em;
            font-size: .75rem;
            text-transform: uppercase;
            padding-top: .6em;
            padding-bottom: 1.1em;
          }
          
          /* Main Navigation
          -------------------------------------------------- */
          .main-nav {
            font-size: .875em;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: .1em;
          }
          
          /*
          --------------------------------------------------
          Buttons
          -------------------------------------------------- */
          .button {
            display: inline-block;
            font: bold normal 0.75em/1 "Open Sans", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            letter-spacing: .1em;
            padding: .8em 1.2em;
          }
          
          /*
          ==================================================
          
          CONTENT
          
          ==================================================
          */
          /*
          --------------------------------------------------
          Branding
          -------------------------------------------------- */
          .branding {
            margin: 0;
          }
          .branding a {
            display: block;
            padding: .6em 40px .6em;
          }
          
          /*
          --------------------------------------------------
          Navigation
          -------------------------------------------------- */
          .global-nav,
          .main-nav {
            white-space: nowrap;
            margin: 0;
          }
          .global-nav ul,
          .main-nav ul {
            margin: 0;
            padding: 0;
          }
          .global-nav li,
          .main-nav li {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .global-nav a,
          .main-nav a {
            display: block;
            padding: .7em 12px;
          }
          
          .global-nav a span {
            display: none;
          }
          
          .global-nav li {
            float: left;
          }
          
          .main-nav ul {
            margin: 0;
            padding: 0;
          }
          .main-nav ul li {
            position: relative;
            z-index: 2;
          }
          
          .main-nav li ul.sub-menu {
            display: none;
          }
          
          .fields-search {
            margin-bottom: 0;
          }
          
          .open .panel {
            display: block;
          }
          
          .panel {
            display: none;
            position: absolute;
            left: 0;
            right: 0;
            background: #333;
            overflow: hidden;
            z-index: 2000;
            padding: 20px;
            white-space: normal;
            box-sizing: border-box;
          }
          
          .panel p {
            font: normal normal 0.85em/1 "Open Sans", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
          }
          
          #nav-directory .panel ul li {
            width: 20%;
          }
          
          #nav-directory .panel a {
            font-size: 1em;
            text-indent: 0;
            text-align: center;
          }
          
          #shortcuts-nav.open .panel a {
            /* Fix for iPhone font resizing jump */
            font-size: 14px;
          }
          
          #shortcuts-nav {
            width: 25%;
          }
          
          #utility-nav {
            width: 75%;
          }
          
          #utility-nav .nav {
            width: 33.3333333333%;
          }
          
          .nav > a{
            text-align: center;
          }
          
          .nav > a:before {
            font-family: 'Octicons';
            -webkit-font-smoothing: antialiased;
            font-size: 2em;
            position: relative;
            top: .2em;
          }
          
          #shortcuts-item:before {
            content: "\f05e";
            left: .1em;
          }
          
          #nav-search > a:before {
            content: "\f02e";
            top: .25em;
          }
          
          #nav-directory-item:before {
            content: "\f007";
          }
          
          #nav-contact a:before {
            content: "\f03b";
            left: .1em;
            top: .18em;
          }
          
          #nav-search input[type='text'] {
            margin-top: 0;
          }
          
          .panel input[type='submit'] {
            margin-bottom: 0;
          }
          
          #nav-search input[type='submit'],
          #nav-contact input[type='submit'] {
            margin: 0;
          }
          
          #nav-contact textarea {
            margin-bottom: .5em;
            height: 7.2em;
          }
          
          .panel fieldset {
            margin: 0;
          }
          
          /* Main Navigation
          -------------------------------------------------- */
          .main-nav {
            padding: 0;
            border-top: none;
          }
          
          .main-nav li {
            border-top: 1px solid #e4e4e4;
            padding-bottom: 0px;
          }
          
          .main-nav li a {
            padding: 10px 20px;
            border-radius: 0;
          }
          
          /* Sub Navigation
          -------------------------------------------------- */
          .sub-nav {
            position: relative;
            left: 0;
            right: 0;
            z-index: 19;
            margin-bottom: 0px;
            display: none;
          }
          .sub-nav a {
            color: #fff;
            color: rgba(255, 255, 255, 0.6);
            display: block;
          }
          .sub-nav a:hover {
            color: #fff;
          }
          .sub-nav li {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .sub-nav .level-2 {
            margin-bottom: 0;
          }
          .sub-nav .level-2 > .subsection {
            display: none;
            padding: 20px;
            border-top: none!important;
          }
          .sub-nav .level-2 .nav-close {
            position: relative;
            display: block;
            max-width: 1040px;
            margin: 0 auto;
            text-align: right;
          }
          .sub-nav .level-2 .nav-close a {
            position: absolute;
            right: 0;
            top: 30px;
            display: block;
            width: 40px;
            height: 20px;
            padding: 6px 0 14px;
            text-align: center;
            color: #fff;
            background: #000;
            background: rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          .sub-nav .level-2 .nav-close a:hover {
            background: rgba(0, 0, 0, 0.3);
          }
          .sub-nav .level-3 {
            max-width: 1080px;
            margin: 0 auto;
          }
          .sub-nav .level-3 h4 a {
            color: #fff;
          }
          .sub-nav .level-3 h4 a:hover {
            font-weight: bold;
          }
          .sub-nav .subsection h3 {
            max-width: 1040px;
            margin: 0 auto;
            padding: 20px 0;
            border-bottom: 1px solid #fff;
            border-color: rgba(255, 255, 255, 0.4);
            display: block;
            font-size: 1.5em;
          }
          .sub-nav .subsection h3 a {
            color: #fff;
            padding: 0;
          }
          .sub-nav .subsection h3 a:hover {
            font-weight: bold;
          }
          
          .sub-nav:hover li {
            display: block;
          }
          
          @media screen and (max-width: 1120px) {
            .sub-nav .subsection h3 {
              margin: 0 20px;
            }
          
            .sub-nav .level-2 .nav-close {
              margin: 0 40px;
            }
          }
          .nav-close.bottom {
            display: none;
          }
          
          .sub-nav .level-2 > .subsection {
            display: none;
            padding: 20px;
          }
          
          .sub-nav .level-2 > .subsection {
            border-top: none!important;
          }
          
          .level-3 {
            overflow: hidden;
            margin-bottom: 20px;
          }
          .level-3 > div h4 {
            font-size: 1em;
            padding: 0 20px;
            margin-top: 20px;
            text-transform: uppercase;
          }
          
          .level-4 {
            padding: 0 20px;
            font-size: .875em;
          }
          .level-4 > li {
            line-height: 1.2em;
            margin: .5em 0;
          }
          
          .section-nav {
            padding-bottom: 20px;
          }
          .section-nav .level-4 {
            padding-bottom: 10px;
          }
          
          /*
          --------------------------------------------------
          Footer
          -------------------------------------------------- */
          .section-container {
            padding: 20px;
          }
          
          .nav-group .container {
            padding: 0 20px;
          }
          
          .organization-info .vcard {
            padding: 20px;
          }
          
          .organization-info .copyright {
            padding: 0 20px 40px;
          }
          
          .organization-info h2 {
            font-family: "Raleway", Helvetica, Arial, sans-serif;
            font-weight: 100;
          }
          
          .organization-info h2 a {
            color: #ccc;
          }
          
          .organization-info h2 a:hover {
            color: #fff;
          }
          
          .organization-info p {
            font-family: 'Open Sans', Helvetica, Arial, sans-serif;
            font-size: .875em;
            color: #999;
          }
          
          .organization-info a:hover {
            color: #fff;
          }
          
          .contact-info .vcard {
            padding: 20px;
          }
          
          .nav-group .container {
            padding: 0 20px;
          }
          
          .contact-info .copyright {
            padding: 0 20px 40px;
          }
          
          .contact-info h2 {
            color: #fff;
          }
          
          .contact-info p {
            font-family: 'Open Sans', Helvetica, Arial, sans-serif;
            font-size: .875em;
            color: #ba969d;
          }
          
          .contact-info a {
            color: #fff;
          }
          
          .contact-info a:hover {
            color: #fff;
          }
          
          .footer-nav h4 {
            font-size: .75em;
            text-transform: uppercase;
            letter-spacing: .1em;
            margin-bottom: .25em;
          }
          
          .footer-nav h4 a {
            color: #ccc;
          }
          
          .footer-nav h4 a:hover {
            color: #fff;
          }
          
          .footer-nav li {
            font-size: .875em;
            list-style: none;
            margin: 0;
            color: #ba969d;
          }
          
          .footer-nav li a {
          }
          
          .footer-nav li a:hover {
            color: #fff;
          }
          
          .site-info {
            font-size: .875em;
            padding: 20px;
          }
          
          p.copyright {
            font-family: "Open Sans", Helvetica, Arial, sans-serif;
            margin: 20px 0 0;
          }
          
          /*
          --------------------------------------------------
          Grid Items
          -------------------------------------------------- */
          .grid-nav {
            padding: 20px;
          }
          
          .grid-nav h4 {
            font-size: .75em;
            text-transform: uppercase;
            letter-spacing: .1em;
            color: #666;
            margin: 20px;
          }
          
          .grid-nav ul {
            padding: 15px;
          }
          
          .grid-nav li {
            list-style: none;
            margin: 0;
          }
          
          .grid-item {
            box-sizing: border-box;
            padding: 5px;
          }
          
          .grid-item a {
            display: block;
            text-align: center;
            padding: 20px;
          }
          
          
          /*
          ==================================================
          
          LAYOUT
          
          ==================================================
          */
          #bottom {
            padding: 20px;
          }
          
          /*
          --------------------------------------------------
          Clearing
          -------------------------------------------------- */
          /* http://www.positioniseverything.net/easyclearing.html */
          .global-nav ul:after,
          .main-header:after,
          .main-nav ul:after,
          section:after,
          .clearfix:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          
          .global-nav ul,
          .main-header,
          .main-nav ul,
          section,
          .clearfix {
            zoom: 1;
            display: block;
          }
          
          /*
          ==================================================
          
          COLORS
          
          ==================================================
          */
          /*
          --------------------------------------------------
          Typography
          -------------------------------------------------- */
          a {
            color: #0098c1;
          }
          
          /*
          --------------------------------------------------
          Backgrounds
          -------------------------------------------------- */
          /* Area Backgrounds
          -------------------------------------------------- */
          #main,
          #overview {
            background-color: #f1f1f1;
          }
          
          #content {
            background-color: #f1f1f1;
          }
          
          #secondary {
            background-color: #eee;
          }
          
          #bottom {
            background-color: #222;
          }
          
          /*
          --------------------------------------------------
          Branding
          -------------------------------------------------- */
          .branding a {
            color: #666;
          }
          
          .branding a:hover {
            color: #000;
          }
          
          /* Navigation Backgrounds
          -------------------------------------------------- */
          .global-nav {
            background-color: #555;
          }
          
          .global-nav a {
            color: #aaa;
          }
          
          .global-nav a:hover {
            color: #fff;
            background-color: #333;
          }
          
          .global-nav a:active {
            background-color: #000;
          }
          
          .global-nav .open > a {
            color: #fff;
            background-color: #333;
          }
          
          .global-nav .nav .panel a:active,
          .global-nav .nav > a:active,
          .global-nav .open > a:active {
            background-color: #000;
          }
          
          #nav-directory .panel a:hover {
            background: #222;
          }
          
          #nav-directory .panel a:active,
          .global-nav .panel a:active {
            background: #000;
          }
          
          .nav .panel p {
            color: #ccc;
          }
          
          .main-nav a {
            color: #444;
          }
          
          .main-nav li.active a,
          .main-nav a:hover {
            color: #0098c1;
          }
          
          .nav > a:before {
            color: #fff;
          }
          
          /* Grid Items
          -------------------------------------------------- */
          .grid-item a {
            background: #f9f9f9;
          }
          
          .grid-item a:hover {
            background: #eee;
          }
          
          
          /*
          ==================================================
          
          FORMS
          
          ==================================================
          */
          
          ::placeholder {
            color: #ccc;
          }
          
          input,
          select,
          textarea {
            box-sizing: padding-box;
          }
          
          textarea,
          input[type="text"],
          input[type="email"],
          input[type="number"] {
            color: black;
            font-size: 1em;
            line-height: 1.5em;
            width: 100%;
            box-sizing: border-box;
            padding: .75em;
            margin: 0 0 1em;
            border: 1px solid #ccc;
          }
          
          select {
            background: #fff;
            width: 100%;
            font-size: 1em;
            padding: 1em .75em;
            border: 1px solid #ccc;
            border-radius: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-overflow: '';
          }
          
          .dropdown {
            position: relative;
            margin: .5em 0 2em;
          }
          
          .dropdown .dropdown-options::after {
            color: #999;
            display: block;
            background: white;
            padding: .5em .3em .4em .8em;
            font-family: "Octicons";
            content: "\f0a3";
            font-size: 1.3em;
            pointer-events: none;
            position: absolute;
            top: .2em;
            right: .2em;
            border-left: 1px solid #eee;
          }
          
          label.field {
            font-weight: 700;
            display: block;
            margin-top: .75em;
          }
          
          form.submitted input:valid,
          form.submitted select:valid,
          form.submitted textarea:valid {
            border: 1px solid #ccc;
          }
          
          form.submitted input:invalid,
          form.submitted select:invalid,
          form.submitted textarea:invalid {
            border: 1px solid #f00;
            box-shadow: 0 0 0 2px #f00;
          }
          
          .checkboxes,
          .radio-buttons {
            margin: .5em 0 1.5em;
          }
          
          .checkboxes label,
          .radio-buttons label {
            margin-bottom: .5em;
            display: block;
          }
          
          .button,
          button {
            font-size: 1em;
            font-weight: normal;
            text-transform: uppercase;
            color: #fff;
            background: #444;
            width: 100%;
            margin: .5em 0 1em;
            padding: 1em .75em;
            border: 1px solid #000;
            border-radius: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          
          .button:hover,
          button:hover {
            background: #000;
          }
          
          .button:active,
          button:active {
            background: #0098c1;
          }
          
          
          /*
          ==================================================
          
          MEDIA QUERIES
          
          ==================================================
          */
          
          /*
          --------------------------------------------------
          Small Screens (320 pixels wide)
          -------------------------------------------------- */
          @media only screen and (min-width: 320px) {
            .main-nav {
              padding: 0;
              border-top: none;
            }
          
            .main-nav li {
              float: left;
              border-top: 1px solid #e4e4e4;
              width: 50%;
              padding-bottom: 0px;
            }
          
            .main-nav li a {
              padding: 10px 20px;
              border-radius: 0;
            }
          
            .main-nav li:nth-child(odd) {
              border-right: 1px solid #e4e4e4;
              margin-right: -1px;
            }
          }
          
          /*
          --------------------------------------------------
          Small Screens (480 pixels wide)
          -------------------------------------------------- */
          @media only screen and (min-width: 480px) {
          
            #nav-directory .panel ul li {
              width: 10%;
            }
          }
          
          /*
          --------------------------------------------------
          Small Screens (600 pixels wide)
          -------------------------------------------------- */
          @media only screen and (min-width: 600px) {
          
            .global-nav a span {
              display: inline;
            }
          
            #shortcuts-item,
            #utility-nav li a {
              text-align: left;
            }
          
            #shortcuts-item:before,
            #nav-search a:before,
            #nav-directory a:before,
            #nav-contact a:before {
              font-size: 2em;
              margin-right: .25em;
            }
          
            /* Footer
            -------------------------------------------------- */
            .organization-info {
              float: left;
              width: 50%;
            }
          
            .footer-nav {
              float: left;
              width: 50%;
              padding-top: 20px;
            }
          
            .nav-group {
              float: left;
            }
          
            .site-info {
              float: left;
            }
          
            .grid-nav li {
              float: left;
              width: 50%;
            }
          }
          
          /*
          --------------------------------------------------
          Small Screens (749 pixels wide max)
          -------------------------------------------------- */
          @media only screen and (max-width: 749px) {
          
            #shortcuts-nav ul {
              display: none;
              position: absolute;
              left: 0;
              right: 0;
              background: #333;
              overflow: hidden;
              z-index: 20;
            }
          
            #shortcuts-nav.open ul {
              display: block;
            }
          
            #shortcuts-nav.open #shortcuts-item {
              background: #333;
            }
          
            #shortcuts-nav ul li {
              width: 100%;
              border-top: 1px solid #444;
            }
          
            #shortcuts-nav.open #shortcuts-item:hover,
            #shortcuts-nav ul li a:hover {
              background: #222;
            }
          
            #shortcuts-nav.open #shortcuts-item:active,
            #shortcuts-nav ul li a:active {
              background: #000;
            }
          
          }
          
          /*
          --------------------------------------------------
          Medium Screens (750 pixels wide)
          -------------------------------------------------- */
          @media only screen and (min-width: 750px) {
          
            /*
            --------------------------------------------------
            Default Page Structure
            -------------------------------------------------- */
            header,
            section,
            #supplementary,
            .secondary-content,
            .global-nav ul.menu,
            .footer-nav {
              max-width: 1120px;
              margin: 0 auto;
            }
          
            #section-info {
              max-width: 1080px;
            }
          
            #shortcuts-nav {
              width: auto;
            }
          
            #shortcuts-item {
              display: none;
            }
          
            #shortcuts-nav .panel {
              background: none;
              position: static;
            }
          
            .global-nav #shortcuts-nav .panel a:hover {
              background-color: #333;
            }
          
            .global-nav #shortcuts-nav .panel a:active {
              background-color: #000;
            }
          
            #utility-nav {
              width: auto;
              float: right;
            }
          
            #utility-nav .nav {
              width: auto;
            }
          
            #nav-search,
            #nav-directory,
            #nav-contact {
              width: auto;
            }
          
            #nav-search .panel,
            #nav-contact .panel {
              max-width: 1120px;
              margin: 0 auto;
            }
          
            #nav-search input {
              margin-top: 0;
              float: left;
            }
          
            #nav-search input[type='text'] {
              width: 79%;
              margin-right: 1%;
              margin-bottom: 0;
            }
          
            #nav-search .button {
              width: 20%;
            }
          
            #nav-directory {
              position: relative;
            }
          
            #nav-directory .panel {
              width: 320px;
              left: auto;
              right: 0;
            }
          
            #nav-directory .panel ul li {
              width: 20%;
            }
          
            #nav-contact fieldset {
              float: left;
              width: 48.5%;
              margin-right: 1.5%;
              margin-bottom: 0;
            }
          
            #email-subject {
              margin-bottom: 0;
            }
          
            #nav-contact textarea {
              width: 50%;
            }
          
            #nav-contact .button {
              width: 50%;
            }
          
            .main-nav {
              font-weight: normal;
              padding-left: 40px;
              border-top: 1px solid #e4e4e4;
            }
          
            .main-nav li {
              border: none;
              width: auto;
            }
          
            .main-nav li:nth-child(odd) {
              border-right: none;
              margin-right: 0;
            }
          
            .main-nav a {
              padding: 3em 2em;
              border-bottom: 6px solid #fff;
            }
          
            .main-nav li.active a,
            .main-nav a:hover {
              border-bottom: 6px solid #0098c1;
            }
          
            /* Grid
            -------------------------------------------------- */
            .grid-nav li {
              float: left;
              width: 25%;
            }
          }
          
          /*
          --------------------------------------------------
          Large Screens (980 pixels wide)
          -------------------------------------------------- */
          @media only screen and (min-width: 980px) {
          
          
            /* Header
            -------------------------------------------------- */
            .branding {
              float: left;
            }
          
            .main-nav {
              font-size: 1em;
              float: right;
              border-top: none;
            }
          
            .main-nav li a {
              padding: 2.5em 1em;
            }
          
            /* Footer
            -------------------------------------------------- */
            .organization-info {
              float: left;
              width: 25%;
            }
          
            .footer-nav {
              width: 75%;
              padding: 0;
            }
          
            .nav-group {
              float: left;
              width: 33.3333333333%;
            }
          
            .nav-group .container {
              padding: 20px;
            }
          
            /* Grid
            -------------------------------------------------- */
            .grid-nav li {
              float: left;
              width: 12.5%;
            }
          }
          `,
          'js goes here'



        ],

        ['ecomerce-1',
        `<div class="container">
        <div class="navbar">
          <div class="logo">
            <a href="index.html"><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="account.html">Account</a></li>
            </ul>
          </nav>
          <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" class="menu-icon" onclick="menutoggle()" />
        </div>
      </div>
      
      
      
      
      `,
      `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: "Poppins", sans-serif;
      }
      
      .navbar {
        display: flex;
        align-items: center;
        padding: 20px;
      }
      
      nav {
        flex: 1;
        text-align: right;
      }
      
      nav ul {
        display: inline-block;
        list-style-type: none;
      }
      
      nav ul li {
        display: inline-block;
        margin-right: 20px;
      }
      
      a {
        text-decoration: none;
        color: #555;
      }
      
      p {
        color: #555;
      }
      
      .container {
        max-width: 1300px;
        margin: auto;
        padding-left: 25px;
        padding-right: 25px;
      }
      
      .row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      
      .col-2 {
        flex-basis: 50%;
        min-width: 300px;
      }
      
      .col-2 img {
        max-width: 100%;
        padding: 50px 0;
      }
      
      .col-2 h1 {
        font-size: 50px;
        line-height: 60px;
        margin: 25px 0;
      }
      
      .btn {
        display: inline-block;
        background: #ff523b;
        color: #ffffff;
        padding: 8px 30px;
        margin: 30px 0;
        border-radius: 30px;
        transition: background 0.5s;
      }
      
      .btn:hover {
        background: #563434;
      }
      
      .header {
        background: radial-gradient(#fff, #ffd6d6);
      }
      
      .header .row {
        margin-top: 70px;
      }
      
      .categories {
        margin: 70px 0;
      }
      
      .col-3 {
        flex-basis: 30%;
        min-width: 250px;
        margin-bottom: 30px;
      }
      
      .col-3 img {
        width: 100%;
      }
      
      .small-container {
        max-width: 1080px;
        margin: auto;
        padding-left: 25px;
        padding-right: 25px;
      }
      
      .col-4 {
        flex-basis: 25%;
        padding: 10px;
        min-width: 200px;
        margin-bottom: 50px;
        transition: transform 0.5s;
      }
      
      .col-4 img {
        width: 100%;
      }
      
      .title {
        text-align: center;
        margin: 0 auto 80px;
        position: relative;
        line-height: 60px;
        color: #555;
      }
      .title::after {
        content: "";
        background: #ff523b;
        width: 80px;
        height: 5px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
      
      h4 {
        color: #555;
        font-weight: normal;
      }
      
      .col-4 p {
        font-size: 14px;
      }
      
      .rating .fas {
        color: #ff523b;
      }
      
      .rating .far {
        color: #ff523b;
      }
      
      .col-4:hover {
        transform: translateY(-5px);
      }
      
      /* Offer */
      
      .offer {
        background: radial-gradient(#fff, #ffd6d6);
        margin-top: 80px;
        padding: 30px 0;
      }
      
      .col-2 .offer-img {
        padding: 50px;
      }
      
      small {
        color: #555;
      }
      
      /* testimonial */
      
      .testimonial {
        padding-top: 100px;
      }
      
      .testimonial .col-3 {
        text-align: center;
        padding: 40px 20px;
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.5s;
      }
      
      .testimonial .col-3 img {
        width: 100px;
        margin-top: 20px;
        border-radius: 50%;
      }
      
      .testimonial .col-3:hover {
        transform: translateY(-10px);
      }
      
      .fa-quote-left {
        font-size: 34px;
        color: #ff523b;
      }
      
      .col-3 p {
        font-size: 14px;
        margin: 12px 0;
        color: #777777;
      }
      
      .testimonial .col-3 h3 {
        font-weight: 600;
        color: #555;
        font-size: 16px;
      }
      
      .brands {
        margin: 100px auto;
      }
      
      .col-5 {
        width: 160px;
      }
      
      .col-5 img {
        width: 100%;
        cursor: pointer;
        filter: grayscale(100%);
      }
      
      .col-5 img:hover {
        width: 100%;
        cursor: pointer;
        filter: grayscale(0);
      }
      
      /* footer */
      
      .footer {
        background: #000;
        color: #8a8a8a;
        font-size: 14px;
        padding: 60px 0 20px;
      }
      
      .footer p {
        color: #8a8a8a;
      }
      
      .footer h3 {
        color: #ffffff;
        margin-bottom: 20px;
      }
      
      .footer-col-1,
      .footer-col-2,
      .footer-col-3,
      .footer-col-4 {
        min-width: 250px;
        margin-bottom: 20px;
      }
      
      .footer-col-1 {
        flex-basis: 30%;
      }
      
      .footer-col-2 {
        flex: 1;
        text-align: center;
      }
      
      .footer-col-2 img {
        width: 180px;
        margin-bottom: 20px;
      }
      
      .footer-col-3,
      .footer-col-4 {
        flex-basis: 12%;
        text-align: center;
      }
      
      ul {
        list-style-type: none;
      }
      
      .app-logo {
        margin-top: 20px;
      }
      .app-logo img {
        width: 140px;
      }
      
      .footer hr {
        border: none;
        background: #b5b5b5;
        height: 1px;
        margin: 20px 0;
      }
      
      .copyright {
        text-align: center;
      }
      
      .menu-icon {
        width: 28px;
        margin-left: 20px;
        display: none;
      }
      
      /* media query for menu */
      
      @media only screen and (max-width: 800px) {
        nav ul {
          position: absolute;
          top: 70px;
          left: 0;
          background: #333;
          width: 100%;
          overflow: hidden;
          transition: max-height 0.5s;
        }
        nav ul li {
          display: block;
          margin-right: 50px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      
        nav ul li a {
          color: #fff;
        }
        .menu-icon {
          display: block;
          cursor: pointer;
        }
      }
      
      /* all products page */
      
      .row-2 {
        justify-content: space-between;
        margin: 100px auto 50px;
      }
      
      select {
        border: 1px solid #ff523b;
        padding: 5px;
      }
      
      select:focus {
        outline: none;
      }
      
      .page-btn {
        margin: 0 auto 80px;
      }
      
      .page-btn span {
        display: inline-block;
        border: 1px solid #ff523b;
        margin-left: 10px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
      
      .page-btn span:hover {
        background: #ff523b;
        color: #ffffff;
      }
      
      /* single product details */
      
      .single-product {
        margin-top: 80px;
      }
      
      .single-product .col-2 img {
        padding: 0;
      }
      
      .single-product .col-2 {
        padding: 20px;
      }
      
      .single-product h4 {
        margin: 20px 0;
        font-size: 22px;
        font-weight: bold;
      }
      
      .single-product select {
        display: block;
        padding: 10px;
        margin-top: 20px;
      }
      
      .single-product input {
        width: 50px;
        height: 40px;
        padding-left: 10px;
        font-size: 20px;
        margin-right: 10px;
        border: 1px solid #ff523b;
      }
      
      input:focus {
        outline: none;
      }
      
      .single-product .fas {
        color: #ff523b;
        margin-left: 10px;
      }
      
      .small-img-row {
        display: flex;
        justify-content: space-between;
      }
      
      .small-img-col {
        flex-basis: 24%;
        cursor: pointer;
      }
      
      /* cart items */
      
      .cart-page {
        margin: 90px auto;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .cart-info {
        display: flex;
        flex-wrap: wrap;
      }
      
      th {
        text-align: left;
        padding: 5px;
        color: #ffffff;
        background: #ff523b;
        font-weight: normal;
      }
      td {
        padding: 10px 5px;
      }
      
      td input {
        width: 40px;
        height: 30px;
        padding: 5px;
      }
      
      td a {
        color: #ff523b;
        font-size: 12px;
      }
      
      td img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      
      .total-price {
        display: flex;
        justify-content: flex-end;
      }
      
      .total-price table {
        border-top: 3px solid #ff523b;
        width: 100%;
        max-width: 400px;
      }
      
      td:last-child {
        text-align: right;
      }
      
      th:last-child {
        text-align: right;
      }
      /* account page */
      .account-page {
        padding: 50px 0;
        background: radial-gradient(#fff, #ffd6d6);
      }
      
      .form-container {
        background: #ffffff;
        width: 300px;
        height: 400px;
        position: relative;
        text-align: center;
        padding: 20px 0;
        margin: auto;
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      
      .form-container span {
        font-weight: bold;
        padding: 0 10px;
        color: #555555;
        cursor: pointer;
        width: 100px;
        display: inline-block;
      }
      
      .form-btn {
        display: inline-block;
      }
      
      .form-container form {
        max-width: 300px;
        padding: 0 20px;
        position: absolute;
        top: 130px;
        transition: transform 1s;
      }
      
      form input {
        width: 100%;
        height: 30px;
        margin: 10px 0;
        padding: 0 10px;
        border: 1px solid #ccc;
      }
      
      form .btn {
        width: 100%;
        border: none;
        cursor: pointer;
        margin: 10px 0;
      }
      
      form .btn:focus {
        outline: none;
      }
      
      #LoginForm {
        left: -300px;
      }
      
      #RegForm {
        left: 0;
      }
      
      form a {
        font-size: 12px;
      }
      
      #Indicator {
        width: 100px;
        border: none;
        background: #ff523b;
        height: 3px;
        margin-top: 8px;
        transform: translateX(100px);
        transition: transform 1s;
      }
      
      /* media query for less than 600 screen size */
      
      @media only screen and (max-width: 600px) {
        .row {
          text-align: center;
        }
        .col-2,
        .col-3,
        .col-4 {
          flex-basis: 100%;
        }
      
        .single-product .row {
          text-align: left;
        }
      
        .single-product .col-2 {
          padding: 20px 0;
        }
        .single-product h1 {
          font-size: 26px;
          line-height: 32px;
        }
        .cart-info p {
          display: none;
        }
      }
      `,
      'js goes here',
          'ecomercenav0',
          `  <div class="horizontal" id="top">
          <a href="index.html" class="logoBtn">  <img class="logo" src="img/Amazon_logo.svg.webp" alt=""></a>
        
          <form class="searchBar">
              <select name="dropDown" class="dropDown" placeholder="Category">
                   <option value="all">All</option>
                   <option value="books">Books</option>
                   <option value="Automative">Automative</option>
                   <option value="Electronics">Electronics</option>
                   <option value="movies">Movies</option>
                   <option value="Machineries">Machineries</option>
                   <option value="Food">Food</option>
                   <option value="Electronics">Electronics</option>
              </select>
              <input class="search" type="text" placeholder="Search..">
              <a href="#" class="searchbtn">
                  <svg class="searchIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </a>
                  </form> 
                  
          <a href="login.html" class="account"><h1 class="accountText">Hello,Sign In</h1></a> 
          <a href="" class="cartBtn">
              <svg class="carticon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </a>
               </div>
      <div class="navigation">
      
          <ul>
              <li><a href="#">All</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Automative</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Machineries</a></li>
              <li><a href="#">Food</a></li>
            </ul>
      </div>`,
      `.horizontal {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
      }
      
      .logo {
        height: 50px;
        width: 150px;
      }
      
      .searchBar {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        height: 40px;
      }
      .dropDown {
        width: 40px;
        height: 40px;
        flex: 0.5;
        padding: 1px 2px;
      }
      .search {
        flex: 2;
        height: 36px;
      }
      .searchIcon {
        color: black;
        flex: 0.5;
        background-color: white;
        height: 40px;
        padding: 1px 2px;
      }
      .account {
        text-decoration: none;
      }
      .accountText {
        font-size: 20px;
        line-height: 14px;
        height: 14px;
        font-weight: bold;
        color: black;
      }
      
      .cartBtn {
        color: black;
      }
      
      .navigation {
        background-color: #293241;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      li {
        float: left;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      
      li a {
        color: white;
        text-align: center;
        text-decoration: none;
        padding: 20px;
      }
      li a:hover {
        background-color: #111;
      }
      `,
      'js goes here',
            'debiecomercenav',

            `  <nav>
            <div class="logo">QEFIRA</div>
            <div class="menu">
                <a href="#home">Home</a>
                <a href="#featured">Featured</a>
                <a href="#man">Man</a>
                <a href="#women">Women</a>
                <a href="#Electronics">Electronics</a>
                <a href="#">Shop</a>
            </div>
        </nav>
            `,
            `nav{
                width: 100%;
                height: 70px;
                border-bottom: 1px solid grey;
                box-shadow: 2px 0px 5px grey;
                display: flex;
                justify-content: space-around;
                align-items: center;
                top:0;
                z-index: 1;
                background: white;
            }
            .logo{
                font-size: 50px;
                font-weight: bold;
            }
            
            .menu a{
                text-decoration: none;
                font-size: 20px;
                color: black;
                padding: 10px 20px;
                margin:5px;
                font-weight: bold;
            }
            .menu a:last-child{
                background: black;
                color: white;
            }
            .container{
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
                transform-origin: center;
                perspective: 2000px;
            }
            
            .left{
                flex-basis: 50%;
                animation: animate 3s linear infinite;
            }
            .left img{
                width: 100%;
                padding-top: 100px;
            }
            
            `,
            'js goes here',

            'kalecomerce',
            `
           <header>  
 <div class="logo"><a href="#">ShoPperZ</a></div>  
 <div class="search">  
       <a href=""><input type="text" placeholder="search products" id="input">  
         <ion-icon class="s" name="search"></ion-icon>  
       </a>  
     </div>  
     <div class="heading">  
       <ul>  
         <li><a href="#" class="under">HOME</a></li>  
         <li><a href="#" class="under">SHOP</a></li>  
         <li><a href="#" class="under">OUR PRODUCTS</a></li>  
         <li><a href="#" class="under">CONTACT US</a></li>  
         <li><a href="#" class="under">ABOUT US</a></li>  
       </ul>  
     </div>  
  </header>  
            
            `,
            `* {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              header {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 60px;
                width: 100%;
                background: black;
              }
              .heading ul {
                display: flex;
              }
              .logo a {
                color: white;
                transition-duration: 1s;
                font-weight: 800;
              }
              .logo a:hover {
                color: rgb(240, 197, 6);
                transition-duration: 1s;
              }
              .heading ul li {
                list-style: none;
              }
              .heading ul li a {
                margin: 5px;
                text-decoration: none;
                color: black;
                font-weight: 500;
                position: relative;
                color: white;
                margin: 2px 14px;
                font-size: 18px;
                transition-duration: 1s;
              }
              .heading ul li a:active {
                color: red;
              }
              .heading ul li a:hover {
                color: rgb(243, 168, 7);
                transition-duration: 1s;
              }
              
              .heading ul li a::before {
                content: "";
                height: 2px;
                width: 0px;
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: white;
                transition-duration: 1s;
              }
              .heading ul li a:hover::before {
                width: 100%;
                transition-duration: 1s;
                background-color: rgb(243, 168, 7);
              }
              #input {
                height: 30px;
                width: 300px;
                text-decoration: none;
                border: 0px;
                padding: 5px;
              }
              .logo a {
                color: white;
                font-size: 35px;
                font-weight: 500;
                text-decoration: none;
              }
              ion-icon {
                width: 30px;
                height: 30px;
                background-color: white;
                color: black;
              }
              ion-icon:hover {
                cursor: pointer;
              }
              .search a {
                display: flex;
              }
              header a ion-icon {
                position: relative;
                right: 3px;
              }
              
              .img-slider img {
                height: 720px;
                width: 1080px;
              }
              @keyframes slide {
                0% {
                  left: 0px;
                }
                15% {
                  left: 0px;
                }
                20% {
                  left: -1080px;
                }
                32% {
                  left: -1080px;
                }
                35% {
                  left: -2160px;
                }
                47% {
                  left: -2160px;
                }
                50% {
                  left: -3240px;
                }
                63% {
                  left: -3240px;
                }
                66% {
                  left: -4320px;
                }
                79% {
                  left: -4320px;
                }
                82% {
                  left: -5400px;
                }
                100% {
                  left: 0px;
                }
              }
              .img-slider {
                display: flex;
                float: left;
                position: relative;
                width: 1080px;
                height: 720px;
                animation-name: slide;
                animation-duration: 10s;
                animation-iteration-count: infinite;
                transition-duration: 2s;
              }
              
              .heading1 {
                opacity: 0;
              }
              .search {
                display: flex;
                position: relative;
              }
            
            `,
            'js goes here',
            'NEW',
            `  
            <!-- Navigation Bar -->
        <navbar>
          <p class="text-logo">Amazon</p>
          <ul class="big-screen-nav">
            <li>
              <a href="#">Home</a>
              <a href="#">Store</a>
              <a href="#">Shopping cart</a>
              <a href="#">Try Prime</a>
              <button class="primary-button">Sign in</button>
              <button class="secondary-button">Login</button>
            </li>
          </ul>
          
          <ul class="small-screen-nav">
            <li><i class="fa-solid fa-bars"></i></li>
          </ul>
        </navbar>
        `,
        `/* GOOGLE FONTS */
        @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
        /* GOOGLE FONTS ENDS */
        
        /* COLORS */
        :root{
          --white: #fff;
          --blue: #232F3E;
          --orange: #FF9900;
          --dark-orange: #e08600;
        }
        /* COLORS ENDS */
        
        /* RESET */
        
        *,
        *::before,
        *::after{
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        
        /* RESET ENDS */
        
        /* DEFAULT */
        
        a{
          text-decoration: none;
          color: var(--white);
          transition: 0.2s ease-in-out;
        }
        
        a:hover{
          color: var(--orange);
        }
        
        button{
          padding: 0.5rem 1rem;
          
          font-family: inherit;
          color: var(--white);
          font-size: 18px;
          font-weight: 600;
          
          background-color: inherit;
          border: 1px hidden;
          
          cursor: pointer;
          
          transition: 0.1s ease-in-out;
        }
        
        .primary-button{
          border: 2px solid var(--orange);
          background-color: var(--orange);
          border-radius: 10px;
          color: var(--blue);
        }
        
        .primary-button:hover{
          background-color: var(--orange);
          border-radius: 10px;
          color: var(--white);
        }
        
        .secondary-button{
          border: 2px solid var(--orange);
          border-radius: 10px;
        }
        
        .secondary-button:hover{
          border: 2px solid var(--orange);
          background-color: var(--orange);
        }
        
        section{
          padding: 1rem 5vw;
        }
        
        .label h1{
          text-align: center;
          font-size: 28px;
          font-weight: 400;
        }
        
        /* DEFAULT ENDS */
        
        /* BODY */
        
        body{
          font-family: 'Montserrat', serif;
        }
        
        /* BODY ENDS */
        
        /* NAVIGATION BAR */
        
        navbar{
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--blue);
          width: 100%;
          padding: 1rem 5vw;
        }
        
        navbar .text-logo{
          font-size: 28px;
          color: var(--white);
          font-weight: 600;
          cursor: default;
        }
        
        navbar .big-screen-nav{
          cursor: defalut;
        }
        
        navbar li{
          display: flex;
          align-items: center;
        }
        
        navbar a{
          padding: 0.75rem;
          font-size: 18px;
        }
        
        navbar button{
          margin: 0 0.5rem;
        }
        
        navbar .small-screen-nav i{
          font-size: 28px;
          color: white;
        }
        
        /* MEDIA QUERY */
        @media screen and (min-width: 850px){
          navbar .small-screen-nav{
            display: none;
          }
        }
        
        @media screen and (max-width: 850px){
          navbar .big-screen-nav{
            display: none;
          }
        }
        
        /* NAVIGATION BAR ENDS */
        
        /* HERO */
        
        `,
        'JS GOES HERE'
        ],
        [
             'portfolionavo',
            `  <nav>
            <div class="container">
              <div class="row">
                <div class="logo">
                  <a href="#">Name</a>
                </div>
                <div class="mobile_btn">
                  <i class="fas fa-bars"></i>
                </div>
                <div class="main_menu">
                  <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li class="has_dropdown"><a href="#">Pages <i class="fas fa-angle-down"></i></a>
                      <ul class="sub_menu">
                        <li><a href="#">Page 1</a></li>
                        <li class="has_dropdown"><a href="#">Page 2 <i class="fas fa-angle-right"></i></a>
                          <ul class="sub_menu">
                            <li><a href="#">Page 2.1</a></li>
                            <li><a href="#">Page 2.2</a></li>
                            <li class="has_dropdown"><a href="#">Page 2.3 <i class="fas fa-angle-right"></i></a>
                              <ul class="sub_menu">
                                <li><a href="#">Page 2.1</a></li>
                                <li><a href="#">Page 2.2</a></li>
                                <li><a href="#">Page 2.3</a></li>
                                <li><a href="#">Page 2.4</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Page 2.4</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Page 3</a></li>
                        <li><a href="#">Page 4</a></li>
                      </ul>
                    </li>
                    <li class="mega_menu_dropdown has_dropdown">
                      <a href="#">Services <i class="fas fa-angle-down"></i></a>
                      <div class="mega_menu sub_menu">
                        <div class="mega_menu_item">
                          <img src="https://picsum.photos/250/300?random=2">
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                      </div>
                    </li>
                    <li class="mega_menu_dropdown mega_menu_demo_2 has_dropdown">
                      <a href="#">Shop <i class="fas fa-angle-down"></i></a>
                      <div class="mega_menu sub_menu">
                        <div class="mega_menu_item">
                          <img src="https://picsum.photos/250/300?random=2">
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                        <div class="mega_menu_item">
                          <h3>Theme Elements</h3>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                          <a href="#">Mega menu item</a>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
          
                  </ul>
                </div>
              </div>
            </div>
          </nav>
              `,
            `:root {
              --background-color: #f1f1f1;
              --hover-color: rgb(102, 40, 245);
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              outline: 0;
            }
            a {
              text-decoration: none;
            }
            ul,
            ol {
              list-style-type: none;
            }
            body {
              overflow-x: hidden;
              font-family: "Rubik", sans-serif;
            }
            .container {
              width: 1140px;
              margin: 0 auto;
            }
            
            .row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
            }
            nav {
              background: var(--background-color);
            }
            .logo a {
              font-size: 20px;
              font-weight: 700;
              color: #353535;
              text-transform: uppercase;
            }
            
            /* normal menu css */
            
            .main_menu > ul > li {
              display: inline-block;
              position: relative;
              margin: 0 -2px;
            }
            .main_menu ul li {
              position: relative;
            }
            
            .main_menu ul li a {
              font-size: 16px;
              color: #353535;
              padding: 20px 25px;
              display: block;
              font-weight: 400;
            }
            
            .main_menu ul li .active,
            .main_menu ul li:hover > a {
              color: var(--hover-color);
            }
            /* Normal Dropdown menu */
            .main_menu ul li ul {
              width: 200px;
              background: #fff;
              transition: 0.5s;
              box-shadow: 0px 5px 15px 0px rgba(212, 201, 201, 0.75);
            }
            
            .main_menu ul li ul li a {
              padding: 10px 25px;
              font-size: 15px;
            }
            .main_menu ul li ul li a i {
              float: right;
            }
            
            .main_menu ul li ul li ul {
              left: 100%;
              top: 0;
            }
            
            /* mega menu css */
            .mega_menu_dropdown {
              position: static !important;
            }
            .mega_menu {
              left: 0;
              right: 0;
              background: #fff;
              display: flex;
              flex-wrap: wrap;
              transition: 0.5s;
              box-shadow: 0px 5px 15px 0px rgba(212, 201, 201, 0.75);
            }
            .mega_menu_item {
              width: 25%;
              padding: 30px 20px;
            }
            .main_menu ul li .mega_menu_item a {
              padding: 10px 0;
            }
            
            .main_menu ul li .mega_menu_item a:hover {
              color: var(--hover-color);
            }
            .mega_menu_item h3 {
              margin-bottom: 15px;
            }
            .mega_menu_item img {
              width: 100%;
            }
            
            /* demo_2 css */
            .mega_menu_demo_2 .mega_menu {
              left: 50%;
              transform: translateX(-50%);
              width: 1140px;
            }
            
            .mobile_btn {
              display: none;
            }
            
            /* responsive css */
            @media (min-width: 992px) and (max-width: 1199.98px) {
              .container {
                width: 960px;
              }
              .mega_menu_demo_2 .mega_menu {
                width: 940px;
              }
              .main_menu ul li ul {
                width: 150px;
              }
            }
            
            @media (min-width: 768px) and (max-width: 991.98px) {
              .container {
                width: 720px;
              }
              .mega_menu_demo_2 .mega_menu {
                width: 700px;
              }
              .main_menu ul li a {
                font-size: 15px;
                padding: 20px 16px;
              }
              .main_menu ul li ul {
                width: 150px;
              }
            }
            @media (min-width: 768px) {
              .main_menu ul li ul {
                visibility: hidden;
                opacity: 0;
                position: absolute;
                margin-top: 50px;
              }
              .main_menu ul li .mega_menu {
                visibility: hidden;
                opacity: 0;
                position: absolute;
                margin-top: 50px;
              }
              .main_menu ul li:hover > ul {
                visibility: visible;
                opacity: 1;
                margin-top: 0px;
                z-index: 99;
              }
              .main_menu ul li:hover > .mega_menu {
                visibility: visible;
                opacity: 1;
                margin-top: 0;
                z-index: 99;
              }
            }
            
            @media (max-width: 767.98px) {
              .mega_menu_demo_2 .mega_menu,
              .container {
                width: 100%;
              }
            
              nav {
                padding: 15px;
              }
              .mobile_btn {
                cursor: pointer;
                display: block;
              }
            
              .main_menu {
                display: none;
                width: 100%;
              }
            
              .main_menu ul li {
                display: block;
              }
              .main_menu ul li a i {
                float: right;
              }
              .main_menu ul li a {
                border-bottom: 1px solid #ddd;
              }
              .main_menu ul li ul {
                width: 100%;
              }
              .main_menu ul li ul li ul {
                left: 0;
                top: auto;
              }
            
              .mega_menu .mega_menu_item {
                width: 50%;
              }
              .main_menu ul li ul {
                display: none;
                transition: none;
              }
              .main_menu ul li .mega_menu {
                display: none;
                transition: none;
              }
            
              .mega_menu_demo_2 .mega_menu {
                transform: translateX(0);
              }
            }
            
            @media (max-width: 575.98px) {
              .mega_menu .mega_menu_item {
                width: 100%;
              }
            }
            `,
            'js goes here',
            'portfolionav1',
            `<nav class="navbar">
            <div class="container">
              <section class="wrapper">
                <h1 class="brand"><a href="./index.html" class="brand-link">LOGO</a></h1>
                <button type="button" class="burger" id="burger">
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                </button>
                <div class="menu" id="menu">
                  <ul class="menu-inner">
                    <li class="menu-item"><a href="#" class="menu-link active">Home</a></li>
                    <li class="menu-item"><a href="#" class="menu-link">Profile</a></li>
                    <li class="menu-item"><a href="#" class="menu-link">Project</a></li>
                    <li class="menu-item"><a href="#" class="menu-link">Blog</a></li>
                    <li class="menu-item"><a href="#" class="menu-link">Contact</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </nav>`,
            `:root {
              --color-white: #fff;
              --color-light: #f1f5f8;
              --color-black: #121212;
              --color-night: #001633;
              --color-purple: #9b27b0;
              --color-indigo: #63f;
              --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
              --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            html {
              font-size: 100%;
              box-sizing: border-box;
              scroll-behavior: smooth;
            }
            *,
            *::before,
            *::after {
              padding: 0;
              margin: 0;
              box-sizing: inherit;
              list-style: none;
              list-style-type: none;
              text-decoration: none;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
            }
            body {
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              color: var(--color-black);
              background: var(--color-white);
            }
            a,
            button {
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              cursor: pointer;
              border: none;
              outline: none;
              background: none;
              text-decoration: none;
            }
            img,
            video {
              display: block;
              max-width: 100%;
              height: auto;
              object-fit: cover;
            }
            .container {
              max-width: 83rem;
              width: 100%;
              height: auto;
              margin: 0 auto;
              padding: 0 2rem;
            }
            .brand-link {
              font-family: inherit;
              font-size: 1.75rem;
              font-weight: 700;
              line-height: inherit;
              border: none;
              outline: none;
              color: var(--color-indigo);
              text-transform: uppercase;
              text-rendering: optimizeLegibility;
            }
            .navbar {
              max-width: 100%;
              height: auto;
              margin: 0 auto;
              padding: 0.75rem 0;
              border: none;
              outline: none;
              color: var(--color-black);
              background: var(--color-white);
              box-shadow: var(--shadow-large);
            }
            .navbar .wrapper {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: auto;
              margin: 0 auto;
            }
            .navbar .burger {
              position: relative;
              display: none;
              cursor: pointer;
              width: 2rem;
              height: 1rem;
              border: none;
              outline: none;
              opacity: 0;
              visibility: hidden;
              background: none;
              transform: rotate(0deg);
              transition: 0.35s ease-in-out;
            }
            .navbar .burger-line {
              display: block;
              position: absolute;
              width: 100%;
              height: 2px;
              left: 0;
              border: none;
              outline: none;
              opacity: 1;
              border-radius: 0.25rem;
              background: var(--color-black);
              transform: rotate(0deg);
              transition: 0.25s ease-in-out;
            }
            .navbar .burger-line:nth-child(1) {
              top: 0;
            }
            .navbar .burger-line:nth-child(2),
            .navbar .burger-line:nth-child(3) {
              top: 0.5rem;
            }
            .navbar .burger-line:nth-child(4) {
              top: 1rem;
            }
            .navbar .burger.active .burger-line:nth-child(1),
            .navbar .burger.active .burger-line:nth-child(4) {
              top: 1.25rem;
              width: 0%;
              left: 50%;
            }
            .navbar .burger.active .burger-line:nth-child(2) {
              transform: rotate(45deg);
            }
            .navbar .burger.active .burger-line:nth-child(3) {
              transform: rotate(-45deg);
            }
            .navbar .menu-inner {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 2rem;
            }
            .navbar .menu-link {
              font-family: inherit;
              font-size: 1rem;
              font-weight: 600;
              line-height: inherit;
              border: none;
              color: var(--color-black);
              text-transform: uppercase;
              text-rendering: optimizeLegibility;
              transition: all 0.35s ease-in-out;
            }
            .navbar .menu-link.active,
            .navbar .menu-link:hover {
              border: none;
              outline: none;
              color: var(--color-indigo);
            }
            @media only screen and (max-width: 768px) {
              .navbar .burger {
                display: block;
                opacity: 1;
                visibility: visible;
              }
              .navbar .menu {
                width: 100%;
                max-height: 0rem;
                padding: 0;
                opacity: 0;
                visibility: hidden;
                overflow: hidden;
                transition: all 0.35s ease;
              }
              .navbar .menu.active {
                opacity: 1;
                visibility: visible;
              }
              .navbar .menu-inner {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 0.75rem;
                padding: 1rem 0;
              }
            }
            `,
            'js goes here',
            'portfolionav2',
            `
            <div class="wrap col-9">
                <div class="menu col-9">
                  <header><h1>Portfolio</h1></header>
                  <nav>
                    <ul class="navigate">
                      <li class="active" data-type ="all"><a href="#">All</a></li>
                      <li data-type="macro"><a href="#">Macro</a></li>
                      <li data-type="fashion"><a href="#">Fashion</a></li>
                      <li data-type="architecture"><a href="#">Architecture</a></li>
                    </ul>
                  </nav>
                </div>
               
              </div>	
            `,
            `/*reset*/
            html,body,div,figure,img,header,ul,li,a{
              margin: 0;
              padding: 0;
              border: 0;
            }
            /*layout*/
            .col-9{
              max-width: 900px;
              width: 100%;
              margin: auto;
              box-sizing: border-box;
            }
            .col-3{
              max-width: 300px;
              width: 33.333333%;
              margin: auto;
              box-sizing: border-box;
            }
            /*items*/
            .portfolio{
              padding-top: 2em;
              clear: both;
            }
            .menu{
              padding: .3em .3em;
            }
            .wrap{
              padding: .3em;
            }
            img{width: 100%;
              opacity: 1;
              transition: opacity .6s;}
            
            figure{
              float: left;
              position: relative;
              line-height: 0;
              padding: .3em;
              cursor: pointer;
            }
            .img-wrap:before{
              content: '';
              position: absolute;
              top: .3em;
              left: .3em;
              right: .3em;
              bottom: .3em;
              background-color: rgba(255,255,255,.7);
              opacity: 0.5;
              transition: opacity 2s,
              background-color .4s; 
            }
            .img-wrap:hover:before{
              background-color: rgba(251,11,63,1);
              opacity: 0;
            
            }
            
            h1{color: #444;
              font-size: 44px;
              font-family: 'Open Sans Condensed', sans-serif;}
            nav{
              margin-top: 45px;
            }
            nav ul li {
              display: inline;
            }
            nav ul li a{
              text-decoration: none;
              padding: .5em 1.5em.5em;
              color: #444;
              font-size: 18px;
              font-family: 'Open Sans Condensed', sans-serif;
              transition: color .6s, background-color .2s;
            }
            nav ul li a:hover{
              background-color: #FB0B3F;
              color: #fff;
            }
            .active a{
              border: solid 1px #FB0B3F;
              color: #FB0B3F;
            }
            
            @media only screen and (min-width: 600px) {
              header{float: left}
              nav{float: right;
                text-align: right;}
            }`,
        ],

        

    ],
    section: [
        [
            'blogsection0',
            '\n' + ` <div  class="section" onclick="parent.img('rad1')">
<img src="img/remote.webp" alt="" class="sectionImage">
<div class="sectionDescription">
    <p class="sectionCategoryAndDate">Product July 24,2020</p>
    <h1 class="sectionTitle">Lorem Ipsum</h1>
    <p class="sectionParagraph">Text here </p>
    <div class="SectionButton"><button class="SectionBtn" >Read More</button></div>
</div>
</div>
`,
            '\n' + `.section{
    display: flex;
    padding: 30px;
    margin-top: 50px;
    width: 90vw;
    height: 60vh;
    margin-left: 60px;
    box-shadow: 5px 5px 8px #888888;
  }
  .sectionImage{
    padding: 10px;
    flex: 2;
  }

  .sectionDescription{
     flex: 1;
     display: flex;
     flex-direction: column;
     padding: 10px;
     align-items: center;
  }
  .sectionCategoryAndDate{
    flex:1;
  }
  .sectionTitle{
    flex:2;
  }
  .sectionParagraph{
    flex: 4;
  }
  .SectionButton{
    flex: 1;
  }
  .SectionBtn{
    background-color:rgb(223, 221, 221);
    height: 5vh;
    width: 8vw;
  }`,
            `js`,
            'blogsection1',
            `
            <div class="vertical">
      <p class="date">Published January 13,2021</p>
      <h1 class="title">7 Rules of Effective Branding</h1>
      <p class="intro">Why Branding matters to your Business</p>
      <div class="buttons">
          <div class="branding">Branding</div>
          <div class="communication">Communication</div>
          <div class="experience">Experience</div>
          <div class="identity">Identity</div>
      </div>
      <img src="img/Branding-full-width-1200x675.jpg" alt="" class="verticalImage">
      <h3 class="boldText">Branding is your identity in the digital world that your clients use to differentitate you from other businesses. your brand is your reputation and helps you to build trust with your clients. </h3>
      <p class="txt">Everything in your brand design should relate to the purpose of your business, your name. 
    </p>
</div>
            
            `,
            `
            .vertical{
              display: flex;
              flex-direction: column;
              width: 80vw;
              margin: auto;
              margin-top: 10vh;
              margin-bottom: 10vh;
              align-items: center;
            }
          
            .date{
              margin: 3vh 0 2vh 0;
            }
          
            .title{
              margin: 0 0 4vh 0;
            }
          
            .intro{
              margin: 0 0 4vh 0;
            }
          
            .buttons{
              display: flex;
              margin: 0 0 4vh 0;  
            }
            .branding, .communication, .experience, .identity{
              background-color: gray;
              padding: 10px;
              margin: 5px;
            }
            .boldText{
              width: 40vw;
              margin: 4vh 0 4vh 0;
            }
            .txt{
              margin: 4vh 0 4vh 0;
            }
            `,
            'js goes here',
            'blogsection2',
            `<section id="blog">
            <div class="blog-box">
              <div class="blog-image">
                <img src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog">
              </div>
              <div class="blog-details">
                <h4>Good as Gold Blog</h4>
                <p>A lot of the time when lists like this are put together, the emphasis is usually placed on small business blogs that talk
                  about how to run and manage a business. And while such lists are certainly useful, I thought it would be a good idea to
                  put together a list of blogs actually created and managed by retail store owners.</p>
                <a href="#">Continue reading</a>
              </div>
              <h1>01/22</h1>
            </div>
            <div class="blog-box">
              <div class="blog-image">
                <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog">
              </div>
              <div class="blog-details">
                <h4>10 Menswear Blogs Every Guy Should Know</h4>
                <p>A decade ago, you could count the number of men’s style bloggers on one hand. Clearly those days are long gone. Today,
                  sifting through all of them would take an eternity. So we’ve gathered 10 that inspire us so you can bookmark them and
                  get inspired too.</p>
                <a href="#">Continue reading</a>
              </div>
              <h1>01/19</h1>
            </div>
            <div class="blog-box">
              <div class="blog-image">
                <img src="https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog">
              </div>
              <div class="blog-details">
                <h4>8 Beauty bloggers you should be following</h4>
                <p> On the weekend (or whenever—who are we kidding?), we love nothing more than checking out what our favorite influencers
                  are posting, from the products they're raving about or the makeup tutorials they're loving. While makeup and skincare
                  blogs launch all the time, we continue to go back to certain experts over and over again...</p>
                <a href="#">Continue reading</a>
              </div>
              <h1>10/22</h1>
            </div>
            <div class="blog-box">
              <div class="blog-image">
                <img src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog">
              </div>
              <div class="blog-details">
                <h4>Good, Better, Best</h4>
                <p>Learning how to choose what kind of t-shirt to use for your craft or screen-printing project depends on your crafting or
                  screen-printing business needs. Some fabric and screen-printing choices make more sense for your bottom line than
                  others. Or perhaps you’re looking for a different kind of t-shirt for your business due to changing needs.</p>
                <a href="#">Continue reading</a>
              </div>
              <h1>09/15</h1>
            </div>
            <div class="blog-box">
              <div class="blog-image">
                <img src="https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog">
              </div>
              <div class="blog-details">
                <h4>3 keys to healthy grocery shopping
                </h4>
                <p>With the New Year a few months behind us now, hectic schedules and daily distractions have gotten in the way of our most
                  well intended resolutions. If you are still looking to work on being healthier this year, eating healthier is a good
                  option that may be easier than it seems.</p>
                <a href="#">Continue reading</a>
              </div>
              <h1>08/21</h1>
            </div>
          </section>`,
            `@import url("https://fonts.googleapis.com/css2?family=Caudex&display=swap");

            * {
              font-family: "Caudex", serif;
            }
            
            #blog {
              padding: 5rem 2rem;
            }
            
            #blog .blog-box {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              width: 100%;
              position: relative;
              padding-bottom: 6rem;
            }
            
            #blog .blog-box .blog-image {
              width: 50%;
            }
            
            #blog .blog-box .blog-image img {
              width: 100%;
              -o-object-fit: cover;
              object-fit: cover;
            }
            
            #blog .blog-box h1 {
              position: absolute;
              top: -7.5rem;
              left: 0;
              font-size: 5rem;
              font-weight: 500;
              color: #4cb0b0;
            }
            
            #blog .blog-details {
              width: 50%;
              padding: 0 1rem;
            }
            
            #blog .blog-details a {
              text-decoration: none;
              color: #046969;
              position: relative;
              background-image: -webkit-gradient(
                linear,
                left top,
                right top,
                from(red),
                to(blue)
              );
              background-image: linear-gradient(90deg, red, blue);
              background-size: 0% 3px;
              background-repeat: no-repeat;
              background-position: left bottom;
              -webkit-transition: background-size 300ms ease;
              transition: background-size 300ms ease;
            }
            
            #blog .blog-details a::after {
              content: "";
              width: 3rem;
              height: 2px;
              background-color: #004e4e;
              position: absolute;
              top: 10px;
              right: -4rem;
            }
            
            #blog .blog-details a:hover {
              background-size: 100% 3px;
            }
            
            #blog .blog-details a:hover::after {
              background-image: -webkit-gradient(
                linear,
                left top,
                right top,
                from(red),
                to(blue)
              );
              background-image: linear-gradient(90deg, red, blue);
              background-size: 0% 3px;
              background-repeat: no-repeat;
              background-position: left bottom;
              -webkit-transition: background-size 300ms ease;
              transition: background-size 300ms ease;
              background-size: 100% 3px;
            }
            
            @media screen and (max-width: 992px) {
              #blog .blog-box {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
              }
              #blog .blog-box .blog-image {
                width: 100%;
                padding: 0;
              }
              #blog .blog-details {
                width: 100%;
                padding: 0;
              }
            }
            `,
            'js',
            'blogsection2',
            `
            <div class="mainmain"
            <div class="main">
            <div class="bacon-blog-post bacon-shadow">
              <img src="http://i2.wp.com/garybacon.com/wp-content/uploads/2016/06/finding_what_challenges.png" class="wp-post-image">
              <div class="bacon-blog-post-inner">
                <h2><a href="http://garybacon.com/post/finding-what-challenges-you/" rel="bookmark" title="Permanent link to Finding What Challenges You" class="title-row">Finding What Challenges You</a></h2>
                <p>In an <a href="https://www.youtube.com/watch?v=eaVBDPAy-SI" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.youtube.com/watch?v=eaVBDPAy-SI', 'interview']);" target="_blank">interview</a>, Neil deGrasse Tyson talks about science
                  boosting the economy. He goes on to say, most companies and politicians don’t have the tolerance for the long term view.</p>
                <p>You don’t motivate a group of kids, saying “Who wants to be a mechanical engineer and help improve flight efficiency by 15% compared to the airplane your father flew?”</p>
                <p>But instead, ask “Who wants to be an engineer and help develop airfoils to help fly in the atmosphere of Mars?” With the latter, you get the best students in the class.</p>
                <blockquote>
                  <p>Flow is the intersection of what you are good at and what challenges you— where difficulty and competency meet.</p>
                  <p>When your competency exceeds the difficulty of a task, you are bored. And when the difficulty exceeds your competency, you are anxious. That was my problem: I was bored.</p>
                  <p>— Jeff Goins, <a href="http://amzn.to/28INctw" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://amzn.to/28INctw', 'The Art of Work']);" target="_blank">The Art of Work</a></p>
                </blockquote>
                <p>There are times where the day job requires me to do the mundane. That’s fine. We can’t always have constant excitement. It’s called work for a reason.</p>
                <p><h3>Inspiration</h3>
                <p>For inspiration, this is one of the reasons that I have side projects. To keep pushing my limits. It allows me to play. To find out how to make user interfaces for VR, tinker with implementing the <a href="https://www.ampproject.org/" onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.ampproject.org/', 'Acelerated Mobile Pages Project']);" target="_blank">Acelerated Mobile Pages Project</a> on content, create a <a href="http://garybacon.com/snapchat/" target="_blank">landing page for Snapchat</a>, write books, and so much more.</p>
              </div>
            </div>
          </div>
          </div>
`,
            `
            
            
            
         
            .main{
              width: 710px;
              margin: 0 auto;
            }
            
            
            .bacon-blog-post {
              position: relative;
              width: 100%;
              background: #fff;
              font-weight: 400;
              line-height: 1.45;
            }
            
            .bacon-blog-post-inner { padding: 42px; }
            
            .bacon-blog-post .wp-post-image {
              width: 100%;
              height: auto;
            }
            
            .bacon-blog-post h1, .bacon-blog-post h2, .bacon-blog-post h3, .bacon-blog-post h4 {
              margin: 1.414em 0 0.5em;
              font-weight: 700;
              line-height: 1.2;
              font-family: Open Sans, sans-serif;
            }
            
            .bacon-blog-post h1 a, .bacon-blog-post h2 a, .bacon-blog-post h3 a, .bacon-blog-post h4 a {
              display: inline-block;
              color: #000;
              text-decoration: none;
            }
            
            .bacon-blog-post h1 {
              margin-top: 0;
              font-size: 3.157em;
            }
            
            .bacon-blog-post h2 { margin-top: 0; font-size: 2.369em;}
            .bacon-blog-post h3 {font-size: 1.777em;}
            .bacon-blog-post h4 {font-size: 1.333em;}
            .bacon-blog-post small, .bacon-blog-post .font_small {font-size: 0.75em;}
            
            .bacon-blog-post p, .bacon-blog-post p a {
              font-family: Lora, Times New Roman, serif;
              font-size: 20px;
              line-height: 28px;
            }
            
            .bacon-blog-post p { margin-bottom: 1.3em; }
            .bacon-blog-post p:last-child { margin-bottom: 0; }
            .bacon-blog-post p a { color: #B21A13; }
            
            .bacon-blog-post blockquote {
              margin: 1.3em;
              padding-left: 1.3em;
              border-left: rgb(224,40,43) solid 0.25em;
              font-style: italic;
            }
            
            .bacon-shadow:after {
              position: absolute;
              content: "";
              left: 20px;
              right: 20px;
              bottom: 0px;
              z-index: -1;
              box-shadow: 0 0 30px 4px rgba(0,0,0,0.60);
            }
`,
            'JS GOES HERE',
        
            
        ],
        [
          'ecomercesection-1',
          `<div class="container">
          <div class="small-container">
            <div class="row row-2">
              <h2>All Products</h2>
              <select>
                <option value="">Default Shorting</option>
                <option value="">Short by price</option>
                <option value="">Short by popularity</option>
                <option value="">Short by rating</option>
                <option value="">Short by sale</option>
              </select>
            </div>
            <div class="row">
              <div class="col-4">
                <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
            </div>
          
            <div class="row">
              <div class="col-4">
                <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
            </div>
          
            <div class="row">
              <div class="col-4">
                <img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
            </div>
          
            <div class="row">
              <div class="col-4">
                <img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <p>₹500.00</p>
              </div>
          
              <div class="col-4">
                <img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt="" />
                <h4>Red Printed T-shirt</h4>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>₹500.00</p>
              </div>
            </div>
          
            <div class="page-btn">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>&#8594;</span>
            </div>
          </div>
          
          `,
          `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: "Poppins", sans-serif;
          }
          
          
          
          
          
          
          
          a {
            text-decoration: none;
            color: #555;
          }
          
          p {
            color: #555;
          }
          
          .container {
            max-width: 1300px;
            margin: auto;
            padding-left: 25px;
            padding-right: 25px;
          }
          
          .row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          
          .col-2 {
            flex-basis: 50%;
            min-width: 300px;
          }
          
          .col-2 img {
            max-width: 100%;
            padding: 50px 0;
          }
          
          .col-2 h1 {
            font-size: 50px;
            line-height: 60px;
            margin: 25px 0;
          }
          
          .btn {
            display: inline-block;
            background: #ff523b;
            color: #ffffff;
            padding: 8px 30px;
            margin: 30px 0;
            border-radius: 30px;
            transition: background 0.5s;
          }
          
          .btn:hover {
            background: #563434;
          }
          
          .header {
            background: radial-gradient(#fff, #ffd6d6);
          }
          
          .header .row {
            margin-top: 70px;
          }
          
          .categories {
            margin: 70px 0;
          }
          
          .col-3 {
            flex-basis: 30%;
            min-width: 250px;
            margin-bottom: 30px;
          }
          
          .col-3 img {
            width: 100%;
          }
          
          .small-container {
            max-width: 1080px;
            margin: auto;
            padding-left: 25px;
            padding-right: 25px;
          }
          
          .col-4 {
            flex-basis: 25%;
            padding: 10px;
            min-width: 200px;
            margin-bottom: 50px;
            transition: transform 0.5s;
          }
          
          .col-4 img {
            width: 100%;
          }
          
          .title {
            text-align: center;
            margin: 0 auto 80px;
            position: relative;
            line-height: 60px;
            color: #555;
          }
          .title::after {
            content: "";
            background: #ff523b;
            width: 80px;
            height: 5px;
            border-radius: 5px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
          }
          
          h4 {
            color: #555;
            font-weight: normal;
          }
          
          .col-4 p {
            font-size: 14px;
          }
          
          .rating .fas {
            color: #ff523b;
          }
          
          .rating .far {
            color: #ff523b;
          }
          
          .col-4:hover {
            transform: translateY(-5px);
          }
          
          /* Offer */
          
          .offer {
            background: radial-gradient(#fff, #ffd6d6);
            margin-top: 80px;
            padding: 30px 0;
          }
          
          .col-2 .offer-img {
            padding: 50px;
          }
          
          small {
            color: #555;
          }
          
          /* testimonial */
          
          .testimonial {
            padding-top: 100px;
          }
          
          .testimonial .col-3 {
            text-align: center;
            padding: 40px 20px;
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.5s;
          }
          
          .testimonial .col-3 img {
            width: 100px;
            margin-top: 20px;
            border-radius: 50%;
          }
          
          .testimonial .col-3:hover {
            transform: translateY(-10px);
          }
          
          .fa-quote-left {
            font-size: 34px;
            color: #ff523b;
          }
          
          .col-3 p {
            font-size: 14px;
            margin: 12px 0;
            color: #777777;
          }
          
          .testimonial .col-3 h3 {
            font-weight: 600;
            color: #555;
            font-size: 16px;
          }
          
          .brands {
            margin: 100px auto;
          }
          
          .col-5 {
            width: 160px;
          }
          
          .col-5 img {
            width: 100%;
            cursor: pointer;
            filter: grayscale(100%);
          }
          
          .col-5 img:hover {
            width: 100%;
            cursor: pointer;
            filter: grayscale(0);
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          ul {
            list-style-type: none;
          }
          
          .app-logo {
            margin-top: 20px;
          }
          .app-logo img {
            width: 140px;
          }
          
          
          
          .copyright {
            text-align: center;
          }
          
          .menu-icon {
            width: 28px;
            margin-left: 20px;
            display: none;
          }
          
          /* media query for menu */
          
          @media only screen and (max-width: 800px) {
            nav ul {
              position: absolute;
              top: 70px;
              left: 0;
              background: #333;
              width: 100%;
              overflow: hidden;
              transition: max-height 0.5s;
            }
            nav ul li {
              display: block;
              margin-right: 50px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
          
            nav ul li a {
              color: #fff;
            }
            .menu-icon {
              display: block;
              cursor: pointer;
            }
          }
          
          /* all products page */
          
          .row-2 {
            justify-content: space-between;
            margin: 100px auto 50px;
          }
          
          select {
            border: 1px solid #ff523b;
            padding: 5px;
          }
          
          select:focus {
            outline: none;
          }
          
          .page-btn {
            margin: 0 auto 80px;
          }
          
          .page-btn span {
            display: inline-block;
            border: 1px solid #ff523b;
            margin-left: 10px;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
          }
          
          .page-btn span:hover {
            background: #ff523b;
            color: #ffffff;
          }
          
          /* single product details */
          
          .single-product {
            margin-top: 80px;
          }
          
          .single-product .col-2 img {
            padding: 0;
          }
          
          .single-product .col-2 {
            padding: 20px;
          }
          
          .single-product h4 {
            margin: 20px 0;
            font-size: 22px;
            font-weight: bold;
          }
          
          .single-product select {
            display: block;
            padding: 10px;
            margin-top: 20px;
          }
          
          .single-product input {
            width: 50px;
            height: 40px;
            padding-left: 10px;
            font-size: 20px;
            margin-right: 10px;
            border: 1px solid #ff523b;
          }
          
          input:focus {
            outline: none;
          }
          
          .single-product .fas {
            color: #ff523b;
            margin-left: 10px;
          }
          
          .small-img-row {
            display: flex;
            justify-content: space-between;
          }
          
          .small-img-col {
            flex-basis: 24%;
            cursor: pointer;
          }
          
          /* cart items */
          
          .cart-page {
            margin: 90px auto;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          .cart-info {
            display: flex;
            flex-wrap: wrap;
          }
          
          th {
            text-align: left;
            padding: 5px;
            color: #ffffff;
            background: #ff523b;
            font-weight: normal;
          }
          td {
            padding: 10px 5px;
          }
          
          td input {
            width: 40px;
            height: 30px;
            padding: 5px;
          }
          
          td a {
            color: #ff523b;
            font-size: 12px;
          }
          
          td img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
          }
          
          .total-price {
            display: flex;
            justify-content: flex-end;
          }
          
          .total-price table {
            border-top: 3px solid #ff523b;
            width: 100%;
            max-width: 400px;
          }
          
          td:last-child {
            text-align: right;
          }
          
          th:last-child {
            text-align: right;
          }
          /* account page */
          .account-page {
            padding: 50px 0;
            background: radial-gradient(#fff, #ffd6d6);
          }
          
          .form-container {
            background: #ffffff;
            width: 300px;
            height: 400px;
            position: relative;
            text-align: center;
            padding: 20px 0;
            margin: auto;
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          
          .form-container span {
            font-weight: bold;
            padding: 0 10px;
            color: #555555;
            cursor: pointer;
            width: 100px;
            display: inline-block;
          }
          
          .form-btn {
            display: inline-block;
          }
          
          .form-container form {
            max-width: 300px;
            padding: 0 20px;
            position: absolute;
            top: 130px;
            transition: transform 1s;
          }
          
          form input {
            width: 100%;
            height: 30px;
            margin: 10px 0;
            padding: 0 10px;
            border: 1px solid #ccc;
          }
          
          form .btn {
            width: 100%;
            border: none;
            cursor: pointer;
            margin: 10px 0;
          }
          
          form .btn:focus {
            outline: none;
          }
          
          #LoginForm {
            left: -300px;
          }
          
          #RegForm {
            left: 0;
          }
          
          form a {
            font-size: 12px;
          }
          
          #Indicator {
            width: 100px;
            border: none;
            background: #ff523b;
            height: 3px;
            margin-top: 8px;
            transform: translateX(100px);
            transition: transform 1s;
          }
          
          /* media query for less than 600 screen size */
          
          @media only screen and (max-width: 600px) {
            .row {
              text-align: center;
            }
            .col-2,
            .col-3,
            .col-4 {
              flex-basis: 100%;
            }
          
            .single-product .row {
              text-align: left;
            }
          
            .single-product .col-2 {
              padding: 20px 0;
            }
            .single-product h1 {
              font-size: 26px;
              line-height: 32px;
            }
            .cart-info p {
              display: none;
            }
          }
          `,
          'js goes here',
            'ECOMERCESECTION0',
            `
            <!-- Hero Section -->
            <section class="label">
              <h1>New collection</h1>
            </section>
            <section class="hero">
              <svg viewBox="0 0 320 512" width="5%" title="chevron-left">
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
            </svg>
              <svg viewBox="0 0 320 512" width="5%" title="chevron-right">
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            </section>
            <!-- Hero Section ends -->
            
            `,
            `
              
           /* GOOGLE FONTS */
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
/* GOOGLE FONTS ENDS */

/* COLORS */
:root{
  --white: #fff;
  --blue: #232F3E;
  --orange: #FF9900;
  --dark-orange: #e08600;
}







button{
  padding: 0.5rem 1rem;
  font-family: inherit;
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  background-color: inherit;
  border: 1px hidden;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}

.primary-button{
  border: 2px solid var(--orange);
  background-color: var(--orange);
  border-radius: 10px;
  color: var(--blue);
}

.primary-button:hover{
  background-color: var(--orange);
  border-radius: 10px;
  color: var(--white);
}

.secondary-button{
  border: 2px solid var(--orange);
  border-radius: 10px;
}

.secondary-button:hover{
  border: 2px solid var(--orange);
  background-color: var(--orange);
}

section{
  padding: 1rem 5vw;
}

.label h1{
  text-align: center;
  font-size: 28px;
  font-weight: 400;
}



.hero{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  background-image: url("https://images.unsplash.com/photo-1511556532299-8f662fc26c06?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTQ4NTI5MTQ&ixlib=rb-1.2.1&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero svg{
  cursor: pointer;
}

            
            `,
            'js goes here',
            'ecomercesection1',

            `
         
  <div class="panel pricing-table">
    <div class="pricing-plan">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="306" class="illustration styles_illustrationTablet__1DWOa"><g id="_379_fitness_outline" data-name="#379_fitness_outline"><path d="M251,161.06s28.59,2.73,32.28,5.11c10.14,6.53,2.73,62.37,2.73,62.37H269.09L268.22,186h-21.4Z" fill="#ffc9b0"></path><path d="M286,229.54H269.09a1,1,0,0,1-1-1l-.85-41.6H246.82a1,1,0,0,1-.76-.35,1,1,0,0,1-.23-.81L250,160.9a1,1,0,0,1,1.08-.84c3,.29,28.94,2.83,32.73,5.27,4.59,2.95,6.43,14.24,5.62,34.51-.58,14.66-2.42,28.69-2.44,28.83A1,1,0,0,1,286,229.54Zm-15.89-2h15c2.05-16,5.34-55.55-2.39-60.53-2.49-1.6-19.5-3.75-30.91-4.87L248,185h20.22a1,1,0,0,1,1,1Z" fill="#093f68"></path><path d="M118.05,142.41s-5.58-3.84-12.64,1.8-7.52,10.54-6.2,11.18,3.81-1.77,3.81-1.77a26,26,0,0,0-.22,15.94c2.78,9.17,7.53,13.58,20.13,14.37a33,33,0,0,0,17.64-4.33s4.06-11.49-1.77-19.31S118.05,142.41,118.05,142.41Z" fill="#725858"></path><path d="M124.62,185c-.58,0-1.16,0-1.75,0-12.23-.77-17.93-4.86-21-15.08a27.55,27.55,0,0,1-.56-13.76,2.89,2.89,0,0,1-2.5.2,2.14,2.14,0,0,1-1.13-1.84c-.25-2.25,1.47-6.49,7.13-11,7.52-6,13.52-2.06,13.83-1.85.66.44,15.14,10.25,21,18.11,6.08,8.15,2.09,19.75,1.91,20.24a1,1,0,0,1-.41.52A34.12,34.12,0,0,1,124.62,185ZM103,152.62a1,1,0,0,1,.56.17A1,1,0,0,1,104,154a25.23,25.23,0,0,0-.2,15.28c2.44,8,6.37,12.85,19.24,13.66a32.08,32.08,0,0,0,16.75-4c.58-1.91,3.16-11.48-1.74-18.05-5.66-7.59-20.36-17.54-20.51-17.64h0c-.22-.14-5.11-3.31-11.46,1.77s-6.74,9-6.31,9.54a5.79,5.79,0,0,0,2.61-1.64A1,1,0,0,1,103,152.62Zm37.55,27h0Z" fill="#093f68"></path><path d="M152.27,166c-.77,4.63-4,8.43-7.75,11.06-1.94,1.38-4.42,3.75-6.91,2.42a7.44,7.44,0,0,1-2.52-2.56,26.22,26.22,0,0,0-5.48-6.52c-2.78-2.07-6.53-2.12-9.13-4.69-4.56-4.49-1.41-10.73-1.42-16.23,0-.61,0-6.89-1-7.08l18.55,3.1C146.86,147.22,154,155.59,152.27,166Z" fill="#ffc9b0"></path><path d="M139.14,180.88a4.22,4.22,0,0,1-2-.51,8.35,8.35,0,0,1-2.88-2.89,25.35,25.35,0,0,0-5.25-6.27,15,15,0,0,0-3.87-1.84,13.83,13.83,0,0,1-5.36-2.93c-3.61-3.55-2.88-8.14-2.23-12.19a31.52,31.52,0,0,0,.51-4.76,23.3,23.3,0,0,0-.54-6.23,1,1,0,0,1,.7-1.84l18.55,3.1a20.68,20.68,0,0,1,12.95,7.35,18,18,0,0,1,3.54,14.31h0c-.73,4.35-3.63,8.51-8.16,11.71l-.81.6C142.88,179.54,141.09,180.88,139.14,180.88ZM119.7,143.7a33.6,33.6,0,0,1,.36,5.79,32.33,32.33,0,0,1-.54,5.07c-.62,3.92-1.21,7.63,1.66,10.45a12,12,0,0,0,4.64,2.48,16.59,16.59,0,0,1,4.39,2.12,26.8,26.8,0,0,1,5.71,6.77,6.53,6.53,0,0,0,2.16,2.22c1.48.79,3-.21,5-1.71.29-.22.58-.44.86-.63,4.09-2.89,6.7-6.59,7.34-10.41a16,16,0,0,0-3.13-12.74,18.69,18.69,0,0,0-11.72-6.61ZM152.27,166h0Z" fill="#093f68"></path><circle cx="130.15" cy="150.68" r="1.74" fill="#093f68"></circle><path d="M131.67,146.27s8.45-3.11,8.55-1.88a19.5,19.5,0,0,1-.62,4.11" fill="#ffc9b0"></path><path d="M139.6,149.5a1,1,0,0,1-.24,0,1,1,0,0,1-.73-1.21,23.17,23.17,0,0,0,.57-3.15,44.15,44.15,0,0,0-7.18,2.1,1,1,0,0,1-1.29-.6,1,1,0,0,1,.6-1.28c7.86-2.89,8.95-2.2,9.31-2a1.25,1.25,0,0,1,.57.95,19.34,19.34,0,0,1-.64,4.43A1,1,0,0,1,139.6,149.5Z" fill="#093f68"></path><path d="M126.35,167.29s-3.9,4-.27,7.13,10.92,1.92,10.17-5.92" fill="#ffc9b0"></path><path d="M130.46,177a7.77,7.77,0,0,1-5-1.84,5,5,0,0,1-1.89-3.63,7.61,7.61,0,0,1,2.09-5,1,1,0,0,1,1.44,1.39,5.59,5.59,0,0,0-1.53,3.49,3,3,0,0,0,1.19,2.19,5.69,5.69,0,0,0,6.08.81c1.85-1,2.72-3.05,2.45-5.88a1,1,0,1,1,2-.19c.35,3.64-.93,6.5-3.52,7.84A7.1,7.1,0,0,1,130.46,177Z" fill="#093f68"></path><path d="M124.39,157.6a2.08,2.08,0,0,1-.68-.12,2,2,0,0,1-1.2-2.56l2.65-7.32a2,2,0,0,1,3.77,1.37l-2.65,7.31A2,2,0,0,1,124.39,157.6Z" fill="#093f68"></path><path d="M140.35,160a1,1,0,0,1,0-2,4.17,4.17,0,0,0,4.34-4.42,1,1,0,0,1,1-1h0a1,1,0,0,1,1,1,7.3,7.3,0,0,1-.67,3.11,6,6,0,0,1-5.59,3.39Z" fill="#093f68"></path><path d="M162.15,149.56l2.2-.85a19.43,19.43,0,0,1,11.08-1.13c3.6.82,6.71,3,10.27,3.92s7.44,0,11.22.2l16.48.73L212.09,186h-49.7a13.56,13.56,0,0,1-13.56-13.56v-8.68C148.83,155.76,155.57,152.18,162.15,149.56Z" fill="#68e1fd"></path><path d="M212.09,187h-49.7a14.57,14.57,0,0,1-14.56-14.56v-8.68c0-8.37,6.71-12.2,13.95-15.09l2.22-.86a20.32,20.32,0,0,1,11.65-1.16,28.22,28.22,0,0,1,5.54,2.07,28.75,28.75,0,0,0,4.75,1.85,21.56,21.56,0,0,0,6.74.27,40.64,40.64,0,0,1,4.29-.1l16.47.73a1,1,0,0,1,1,1L213.09,186A1,1,0,0,1,212.09,187ZM172,148.21a20.57,20.57,0,0,0-7.26,1.43l-2.19.85h0c-7.62,3-12.69,6.45-12.69,13.23v8.68A12.57,12.57,0,0,0,162.39,185h48.73l1.24-31.58-15.48-.69a39.63,39.63,0,0,0-4.08.11,23.38,23.38,0,0,1-7.35-.33,31.4,31.4,0,0,1-5.09-2,27,27,0,0,0-5.15-1.94A14.89,14.89,0,0,0,172,148.21Zm-9.82,1.35h0Z" fill="#093f68"></path><polygon points="262.02 185.96 212.09 185.96 213.4 152.43 262.02 155.8 262.02 185.96" fill="#f56132"></polygon><path d="M262,187H212.09a1,1,0,0,1-.72-.31,1,1,0,0,1-.28-.73l1.31-33.53a1,1,0,0,1,.33-.71,1,1,0,0,1,.74-.25l48.62,3.38a1,1,0,0,1,.93,1V186A1,1,0,0,1,262,187Zm-48.89-2H261V156.74l-46.66-3.24Z" fill="#093f68"></path><path d="M150.25,115.08h17.08a0,0,0,0,1,0,0v55a8.54,8.54,0,0,1-8.54,8.54h0a8.54,8.54,0,0,1-8.54-8.54v-55a0,0,0,0,1,0,0Z" transform="translate(22.52 -21.11) rotate(8.18)" fill="#ffc9b0"></path><path d="M155.49,179.42a9.12,9.12,0,0,1-1.37-.1,9.55,9.55,0,0,1-8.08-10.8L153.87,114a1,1,0,0,1,1.13-.85l16.91,2.43a1,1,0,0,1,.66.39,1,1,0,0,1,.19.75l-7.84,54.48A9.55,9.55,0,0,1,155.49,179.42Zm.22-64.1L148,168.8A7.54,7.54,0,1,0,162.94,171l7.7-53.49Z" fill="#093f68"></path><circle cx="167.4" cy="87" r="38.01" fill="#68e1fd"></circle><path d="M167.4,126a39,39,0,1,1,39-39A39.06,39.06,0,0,1,167.4,126Zm0-76a37,37,0,1,0,37,37A37.05,37.05,0,0,0,167.4,50Z" fill="#093f68"></path><circle cx="167.4" cy="87" r="29.32" fill="#68e1fd"></circle><path d="M167.4,117.33A30.33,30.33,0,1,1,197.72,87,30.36,30.36,0,0,1,167.4,117.33Zm0-58.65A28.33,28.33,0,1,0,195.72,87,28.35,28.35,0,0,0,167.4,58.68Z" fill="#093f68"></path><circle cx="167.4" cy="87" r="5.5" fill="#093f68"></circle><path d="M167.4,93.51A6.51,6.51,0,1,1,173.9,87,6.52,6.52,0,0,1,167.4,93.51Zm0-11a4.51,4.51,0,1,0,4.5,4.5A4.51,4.51,0,0,0,167.4,82.5Z" fill="#093f68"></path><path d="M269.09,228.54v12.22h30.85a1.43,1.43,0,0,0,.78-2.63L286,228.54Z" fill="#68e1fd"></path><path d="M299.94,241.76H269.09a1,1,0,0,1-1-1V228.54a1,1,0,0,1,1-1H286a1,1,0,0,1,.54.16l14.76,9.59a2.43,2.43,0,0,1-1.32,4.47Zm-29.85-2h29.85a.39.39,0,0,0,.41-.31.39.39,0,0,0-.18-.48l-14.51-9.43H270.09Z" fill="#093f68"></path><path d="M112.85,186H255.18a11.32,11.32,0,0,1,11.32,11.32v1.54a5.22,5.22,0,0,1-5.22,5.22H106.75a5.22,5.22,0,0,1-5.22-5.22v-1.54A11.32,11.32,0,0,1,112.85,186Z" fill="#093f68"></path><path d="M261.28,205H106.75a6.23,6.23,0,0,1-6.22-6.22v-1.54A12.33,12.33,0,0,1,112.85,185H255.18a12.34,12.34,0,0,1,12.32,12.32v1.54A6.23,6.23,0,0,1,261.28,205ZM112.85,187a10.33,10.33,0,0,0-10.32,10.32v1.54a4.22,4.22,0,0,0,4.22,4.22H261.28a4.22,4.22,0,0,0,4.22-4.22v-1.54A10.33,10.33,0,0,0,255.18,187Z" fill="#093f68"></path><rect x="120.29" y="204.04" width="9.86" height="31.53" fill="#093f68"></rect><path d="M130.15,236.58h-9.86a1,1,0,0,1-1-1V204a1,1,0,0,1,1-1h9.86a1,1,0,0,1,1,1v31.54A1,1,0,0,1,130.15,236.58Zm-8.86-2h7.86V205h-7.86Z" fill="#093f68"></path><rect x="113.86" y="235.58" width="21.41" height="5.43" rx="2.71" fill="#093f68"></rect><path d="M132.56,242h-16a3.72,3.72,0,1,1,0-7.43h16a3.72,3.72,0,0,1,0,7.43Zm-16-5.43a1.72,1.72,0,1,0,0,3.43h16a1.72,1.72,0,0,0,0-3.43Z" fill="#093f68"></path><rect x="235.12" y="204.04" width="9.86" height="31.53" fill="#093f68"></rect><path d="M245,236.58h-9.87a1,1,0,0,1-1-1V204a1,1,0,0,1,1-1H245a1,1,0,0,1,1,1v31.54A1,1,0,0,1,245,236.58Zm-8.87-2H244V205h-7.87Z" fill="#093f68"></path><rect x="228.7" y="235.58" width="21.41" height="5.43" rx="2.71" fill="#093f68"></rect><path d="M247.39,242h-16a3.72,3.72,0,0,1,0-7.43h16a3.72,3.72,0,1,1,0,7.43Zm-16-5.43a1.72,1.72,0,0,0,0,3.43h16a1.72,1.72,0,1,0,0-3.43Z" fill="#093f68"></path><path d="M285.23,236.58a1,1,0,0,1-.67-.25,1,1,0,0,1-.08-1.42l4.24-4.75a1,1,0,0,1,1.5,1.33L286,236.24A1,1,0,0,1,285.23,236.58Z" fill="#093f68"></path></g></svg>
      <h2> Train Like a Warrior</h2>
      <ul class="pricing-feature">
        <li class="pricing-feature-item">6x Sessions with a Personal Trainer</li>
        <li class="pricing-feature-item">Full gym floor access including all equipments</li>
        <li class="pricing-feature-item">Unlimited group fitness classes</li>
        <li class="pricing-feature-item">Unlimited HIIT classes</li>
      </ul>
      <span class="price">$150/month</span>
      <a class="join-now is-featured" href="#">JOIN NOW</a>
    </div>
    
    <div class="pricing-plan">
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 300" width="406" height="306" class="illustration styles_illustrationTablet__1DWOa"><defs><linearGradient id="linear-gradient" x1="100.59" y1="90.45" x2="76.53" y2="121.16" gradientTransform="matrix(1, 0, 0, -1, 0, 302)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0.03"></stop><stop offset="0.99" stop-color="#c1272d"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="335.9" y1="96.38" x2="311.34" y2="127.73" xlink:href="#linear-gradient"></linearGradient><linearGradient id="linear-gradient-3" x1="230.03" y1="76.25" x2="205.47" y2="107.61" gradientTransform="matrix(1, 0, 0, -1, 0, 302)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0.03"></stop><stop offset="0.99" stop-color="gray"></stop></linearGradient></defs><title>380_Fitness_Isometric</title><path d="M194.51,286.14,22,184.2c-5.49-3.08-10.2-8.15-4.85-11.46L190.29,73c2.6-1.61,6.54-2.66,9.18-1.13l181.07,105c5.49,3.19,6.48,12.1,1,15.29L217.25,286A22.94,22.94,0,0,1,194.51,286.14Z" fill="#ffbe30"></path><path d="M62.62,171.49c-6,3.46-11.94,7.08-17.67,11l61.19,42.83L129.9,207Z" opacity="0.32" fill="url(#linear-gradient)" style="isolation: isolate;"></path><path d="M297.12,164.74c-6.14,3.54-12.19,7.23-18,11.21l62.46,43.72L365.81,201Z" opacity="0.32" fill="url(#linear-gradient-2)" style="isolation: isolate;"></path><polygon points="295.01 217.13 235.77 251.23 91.28 167.69 150.52 133.17 295.01 217.13" fill="#68e1fd"></polygon><path d="M202.13,105.64s-20.14,6.93-22.6,11-2.78,27.68-7.86,40.62a3.79,3.79,0,0,0,4.75,2.29c3.6-1,9.34-21.78,10.48-27.84s1.8-8.19,1.8-8.19l18.93-2.5Z" fill="#ffbeb3"></path><path d="M173,157.65s1.12-3.81.13-5.37-1.86-.32-2.6,1.17a21.1,21.1,0,0,1-1.36,2.85c-.49.62-4.7,5.82-6.81,5.94s-6.93.55-6.19,3.8S163,170.89,168,169.9s6.43-4.08,10.76-2.72,5.94-.87,6.68-2.35-4.33-8.91-4.33-8.91S176.83,159,173,157.65Z" fill="#050817"></path><path d="M223.88,137.35s4,25.27,4.72,28.8,2.32,37.57,2,39.76,3,11.48,7.47.23c0,0,3.52-32.58,3.19-37.13s.86-32.53.43-36.56" fill="#ffbeb3"></path><path d="M226.41,178.8c4.92,1.46,9.38,1.91,14.29,0,.7-.37.57-3.38.61-4,.22-3.05.32-6.11.42-9.17.32-9.7,0-19.4,1.27-29.05a65.24,65.24,0,0,0-.08-16.77,44.53,44.53,0,0,0-2-8.81,31.19,31.19,0,0,0-1.74-4.07c-.31-.59-1.67-3.63-2.35-3.71L215,100.06l-33.48,12.79s0,6.82,8.1,12.54c0,0,22.83-1.55,28-2.77C217.68,122.62,224.89,174,226.41,178.8Z" fill="#047877"></path><path d="M222.39,51s-11.5-2.21-14-4.28-6.34-5.6-11.06-7.82-13.57-3.83-15.78-6a70.77,70.77,0,0,0-9-7.53l-5-1.07a3.25,3.25,0,0,0,2.5,2.68c2.41.8,3.66,1.7,4.29,3s1.61,2.41.63,2.59-5-.8-5,.18,3.75,1.7,5.45,2.41,10.36,7.5,15.63,10.18,18.67,11.34,19.65,13.4a30.66,30.66,0,0,1,1.7,5.09S235.78,77,238.81,77.19s5.89-1.34,8.13,0,13.93,4.91,18.4,7.14,11.61,5.81,15.27,6.52,6.25,1.61,7.77,2.77,2.77,3.3,3.93,4.73,2.14,2.68,2.5,2.23-.71-2.41-1.34-4-.71-2.32.45-2.32,8.4,3.66,9.56,3.13-4.11-5-5.54-6.61-9-2.41-10.45-3.22S262.21,75,259.89,72.9s-13.84-9.82-17-12.33S228.74,52.88,222.39,51Z" fill="#ffbeb3"></path><path d="M235.84,98.7a33.79,33.79,0,0,1,.7-6.88c1-5.75,2-8.79,2.28-14.62-.8-1.44-.42-5.82,0-8.25,1.21-6.34,4.16-8,4.16-8a8.14,8.14,0,0,0-2-1.74c-.75-.3-7.25,2.72-9.06,10,0,0-12.83-3.62-13.81-5.43s3.69-11.29,6.89-11.9-3.24-2.42-3.24-2.42-11.2,11.69-12.12,18.69,3.45,29,5,32.53,11.34,9.89,22.3,3.29A27.92,27.92,0,0,1,235.84,98.7Z" fill="#68e1fd"></path><path d="M245.87,31.06a6.36,6.36,0,0,0-7.49-5l-.12,0A8.81,8.81,0,0,0,232,30.35c-5.84-2-12.29.83-14.73,4.49-3.06,4.59.45,7.82.45,7.82l11.15,11.15a30.66,30.66,0,0,0,5.24-2.07c2.87-1.52,5-7.36,4.71-12.42a6.28,6.28,0,0,0,3.27-.44A6.84,6.84,0,0,0,245.87,31.06Z" fill="#050817"></path><path d="M217.71,42.67S218.88,57.6,223,58.32s6.92-2.61,7.55-4.14a6.48,6.48,0,0,0,.54-2.7s3.69-1.89,2.88-4-3,.9-3.6.63-2.34-.63-2.61-3.51S221.49,45,217.71,42.67Z" fill="#ffbeb3"></path><path d="M227.6,207.42s-.29-3.53,2.06-3.53,5,.73,5.14,2.64a33.77,33.77,0,0,1,0,4.11s3.53-8.23,4.26-8.08,1.32,2.94,1.18,4-1.91,9.33-2.64,10.94-4.87,7.2-10,7.49-7.48-3.08-6.45-5.29S227,213.59,227.6,207.42Z" fill="#050817"></path><path d="M181.55,112.85s-4.13.91-4.88,10.68l10.52,6.71,2.47-4.85" fill="#047877"></path><path d="M235.28,180l1.46-.07A310.07,310.07,0,0,0,233.23,106c-.16-.92-1.56-.53-1.4.39A308.43,308.43,0,0,1,235.28,180Z" fill="#f98506"></path><ellipse cx="288.4" cy="163.67" rx="15.86" ry="8.87" transform="translate(2.8 332.16) rotate(-60.11)" fill="#bc3b9b"></ellipse><polyline points="301.47 152.89 296.43 149.98 281.73 163.34 280.62 177.36 285.66 180.27" fill="#bc3b9b"></polyline><ellipse cx="293.57" cy="166.58" rx="15.81" ry="8.84" transform="translate(2.52 337.53) rotate(-60)" fill="#e47dc4"></ellipse><path d="M325.51,179.14l-28.61-15.2a2.27,2.27,0,0,0-1.22-.27,4.67,4.67,0,0,0-4.67,4.67s0,.09,0,.13a2.3,2.3,0,0,0,1.21,2.14l29.26,15.72a2.29,2.29,0,0,0,3.06-.85l1.87-3.15a2.29,2.29,0,0,0-.81-3.14Z" fill="#68e1fd"></path><ellipse cx="330.15" cy="185.79" rx="15.86" ry="8.87" transform="translate(4.56 379.46) rotate(-60.11)" fill="#bc3b9b"></ellipse><polyline points="343.3 175.14 338.25 172.23 323.56 185.59 322.45 199.61 327.49 202.52" fill="#bc3b9b"></polyline><ellipse cx="335.4" cy="188.83" rx="15.81" ry="8.84" transform="translate(4.17 384.88) rotate(-60)" fill="#e47dc4"></ellipse><ellipse cx="335.92" cy="189.13" rx="7.55" ry="4.22" transform="translate(4.17 385.48) rotate(-60)" fill="#bc3b9b"></ellipse><polyline points="342.11 183.99 339.69 182.6 332.68 188.98 332.15 195.67 334.56 197.06" fill="#bc3b9b"></polyline><ellipse cx="338.33" cy="190.53" rx="7.55" ry="4.22" transform="translate(4.16 388.27) rotate(-60)" fill="#ffb3eb"></ellipse><polyline points="44.95 165.06 44.95 180.38 69.73 180.38 69.73 165.06" fill="#68e1fd"></polyline><ellipse cx="57.34" cy="165.06" rx="12.39" ry="6.1" fill="#dd654a"></ellipse><ellipse cx="57.34" cy="180.98" rx="12.39" ry="6.1" fill="#68e1fd"></ellipse><path d="M71.21,129.45c-2.61-1.07-6.24-4.63-9.4-4.52a37,37,0,0,0-1.92,9.4A85.32,85.32,0,0,0,59.54,150q.11,1.75.29,3.49a2.78,2.78,0,0,0,.28,1v12.13a.39.39,0,0,0,.77,0V155a17.19,17.19,0,0,0,3.55-1.64,12.08,12.08,0,0,0,5-6.27c2-5.57.74-11.79,2.64-17.3C71.77,129.66,71.49,129.56,71.21,129.45Z" fill="#297600"></path><path d="M65.86,120.32a9.71,9.71,0,0,0-3.54,3.62,6.07,6.07,0,0,0-.56,1.07l-.11.23h0a16.2,16.2,0,0,0-.6,1.92,2.39,2.39,0,0,1,1.32-1,3.28,3.28,0,0,1,2.07-.19,8.66,8.66,0,0,1,1.9,1c.89.54,1.73,1.13,2.61,1.69,4.11,2.61,9.57,2.88,12.74-.93a2.78,2.78,0,0,1,.11-.46C82.27,124.66,74.94,115,65.86,120.32Z" fill="#5fad00"></path><path d="M79.87,129.34l.51-.34a.35.35,0,0,0-.1-.29c-2.48-2.55-5.15-5-8.54-6.3a14.63,14.63,0,0,0-7.63-.75c-.27.32-.53.66-.78,1a13.24,13.24,0,0,1,8.77.73c3,1.28,5.38,3.57,7.63,5.87A.37.37,0,0,0,79.87,129.34Z" fill="#297600"></path><path d="M38.27,134.89a10.35,10.35,0,0,0-5.54,9.93c.29,7.31,12.34.17,15.54-6s3.7,2.63,3.7,2.63" fill="#297600"></path><path d="M49.12,132.33a21.82,21.82,0,0,0-6.69.93,16.22,16.22,0,0,0-4.16,1.62,13.42,13.42,0,0,0,2.41,1.28A7.32,7.32,0,0,1,44.57,139a5.56,5.56,0,0,1,.46,1.1c.74,2.4.1,5.32,1.09,7.74s3,4.55,5.85,4.73c3.39.21,5-3.05,5.62-5.87s1.59-6.67.52-9.57C56.87,133.71,52.33,132.49,49.12,132.33Z" fill="#5fad00"></path><path d="M53.59,143.74c-1.42-4.62-4.45-9-8.87-11h-.17l-.21.07-.8.21c5.15,1.91,8.38,7,9.7,12.18,1.69,6.64,1.12,13.82,1.14,20.61a.36.36,0,0,0,.71,0C55.08,158.54,55.75,150.77,53.59,143.74Z" fill="#297600"></path><path d="M182.66,180.13a5.44,5.44,0,0,0-.5-.22,20.29,20.29,0,0,0-10.38,2.15c-5.87,3.26-2.72,9,.58,13.18l63.48,44.43L260.09,221Z" opacity="0.32" fill="url(#linear-gradient-3)" style="isolation: isolate;"></path></svg>
     <h2 class="pricing-header"> Body Goal Summer</h2>
      <ul class="pricing-feature">
        <li class="pricing-feature-item">6x Sessions with a Personal Trainer</li>
        <li class="pricing-feature-item">Full gym floor access including all equipments</li>
        <li class="pricing-feature-item">Unlimited yoga classes<li>
        <li class="pricing-feature-item">2x Bosu mind and body personal classes</li>
      </ul>
      <span class="price">$125/month </span>
      <a class="join-now" href="#">JOIN NOW</a>
    </div>
    
    <div class="pricing-plan">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="406" height="306" class="illustration styles_illustrationTablet__1DWOa"><g id="_378_fitness_outline" data-name="#378_fitness_outline"><path d="M230.38,170.09s20.21,33,21.75,32.75l6.28-1.13a1.47,1.47,0,0,1,1.1.1,1.35,1.35,0,0,1,.43.74c2.07,6.12,4,12.48,4.06,19,.08,5.34-1.09,12.21-5.49,15.78a11.55,11.55,0,0,1-9.07,2.14,17,17,0,0,1-10.84-6.77,81.42,81.42,0,0,1-4.83-8.73c-1.33-2.53-2.81-5-4.35-7.38-1.3-2-3.37-4.19-4-6.5-1.38-4.76-1.8-9.85-3.21-14.63-.92-3.09-2.4-4.31-1.4-7.48C223.3,180,230.38,170.09,230.38,170.09Z" fill="#ffc9b0"></path><path d="M251.5,240.63a13.85,13.85,0,0,1-2.22-.18,18.1,18.1,0,0,1-11.5-7.19,52.94,52.94,0,0,1-3.73-6.57c-.38-.76-.76-1.52-1.16-2.27-1.19-2.25-2.56-4.57-4.31-7.3-.38-.58-.83-1.19-1.3-1.83a16.31,16.31,0,0,1-2.86-4.93c-.69-2.39-1.15-4.89-1.6-7.29a72.48,72.48,0,0,0-1.61-7.33,21.34,21.34,0,0,0-.83-2.22,7.38,7.38,0,0,1-.56-5.85c2.55-8,9.45-17.75,9.75-18.16a1,1,0,0,1,1.66.06c7.07,11.55,18.79,30.1,21.08,32.22l5.92-1.06a2,2,0,0,1,2.66,1.5c1.94,5.74,4,12.44,4.11,19.3.05,3.51-.42,12.16-5.87,16.56A12.13,12.13,0,0,1,251.5,240.63Zm-21.17-68.7c-2,2.9-6.67,10.28-8.6,16.35-.6,1.89-.19,2.86.49,4.46a21.61,21.61,0,0,1,.9,2.43,72.59,72.59,0,0,1,1.67,7.53,70.63,70.63,0,0,0,1.55,7.1,15.22,15.22,0,0,0,2.54,4.3c.48.64,1,1.3,1.38,1.94,1.79,2.78,3.19,5.15,4.4,7.45.4.76.79,1.53,1.18,2.3a50.35,50.35,0,0,0,3.58,6.32,16,16,0,0,0,10.18,6.37,10.61,10.61,0,0,0,8.28-1.94c4.76-3.85,5.17-11.76,5.12-15-.09-6.57-2.12-13.09-4-18.69,0-.05-.05-.15-.08-.22l-.33,0-6.28,1.12C251.48,204,250.12,204.2,230.33,171.93Zm22.15,30h0Z" fill="#093f68"></path><path d="M243.63,227.92a1,1,0,0,1-1-.94c-.39-6.43,4.65-14.86,4.87-15.21a1,1,0,0,1,1.37-.34,1,1,0,0,1,.34,1.37c-.05.08-4.94,8.25-4.59,14.06a1,1,0,0,1-.93,1.06Z" fill="#093f68"></path><path d="M171.42,64c-4-3.42-10.77-4.15-16.12-2.5A13,13,0,0,0,148,66.51c-1.51,2.35-1.89,5.23-2.7,7.91a24.54,24.54,0,0,1-13.85,15.27c2.93,4.35,8.36,6.63,13.59,6.49,6.6-.16,14.93-4.23,20.18-8,5-3.66,9-9.15,9.61-15.35A9.94,9.94,0,0,0,171.42,64Z" fill="#725858"></path><path d="M144.61,97.19a16.81,16.81,0,0,1-14-6.93,1,1,0,0,1,.44-1.49,23.39,23.39,0,0,0,13.28-14.64c.22-.74.41-1.48.6-2.23A19.38,19.38,0,0,1,147.18,66,14,14,0,0,1,155,60.5c6-1.85,13-.75,17.06,2.69h0a10.93,10.93,0,0,1,3.77,9.7c-.53,6-4.18,11.83-10,16.07-5.48,4-14,8.05-20.73,8.22ZM133,90.1a15.35,15.35,0,0,0,12,5.08c6.29-.15,14.38-4.05,19.61-7.84s8.72-9.22,9.2-14.62a8.88,8.88,0,0,0-3.08-8h0c-3.54-3-9.79-4-15.17-2.3A12.16,12.16,0,0,0,148.86,67a18.13,18.13,0,0,0-2,5.35c-.19.78-.39,1.56-.63,2.32A25.48,25.48,0,0,1,133,90.1Z" fill="#093f68"></path><path d="M230.89,64c4-3.42,10.78-4.15,16.12-2.5a13,13,0,0,1,7.28,5.06c1.51,2.35,1.89,5.23,2.71,7.91a24.51,24.51,0,0,0,13.85,15.27c-2.94,4.35-8.36,6.63-13.6,6.49-6.59-.16-14.92-4.23-20.17-8C232,84.49,228,79,227.47,72.8A9.93,9.93,0,0,1,230.89,64Z" fill="#725858"></path><path d="M257.7,97.19h-.47C250.51,97,242,92.93,236.49,89c-5.83-4.23-9.49-10.09-10-16.07a10.93,10.93,0,0,1,3.77-9.7h0c4-3.44,11.06-4.54,17.06-2.69A14,14,0,0,1,255.14,66a19.62,19.62,0,0,1,2.21,5.93c.19.74.38,1.49.6,2.23a23.42,23.42,0,0,0,13.28,14.64,1,1,0,0,1,.58.64,1,1,0,0,1-.13.84A16.81,16.81,0,0,1,257.7,97.19ZM231.54,64.71a8.92,8.92,0,0,0-3.08,8c.49,5.4,3.84,10.73,9.21,14.62S251,95,257.28,95.18a15.3,15.3,0,0,0,12-5.08A25.48,25.48,0,0,1,256,74.71c-.23-.76-.43-1.54-.63-2.32a17.86,17.86,0,0,0-2-5.35,12.13,12.13,0,0,0-6.74-4.63c-5.38-1.66-11.62-.71-15.17,2.3Z" fill="#093f68"></path><polygon points="169.52 169.32 137.26 210.86 152.74 231.5 180 195.56 169.52 169.32" fill="#ffc9b0"></polygon><path d="M152.74,232.5h0a1,1,0,0,1-.8-.4l-15.48-20.64a1,1,0,0,1,0-1.22l32.26-41.53a1,1,0,0,1,1.71.24l10.49,26.24a1,1,0,0,1-.14,1l-27.25,36A1,1,0,0,1,152.74,232.5Zm-14.23-21.63,14.24,19,26.11-34.44-9.63-24.08Z" fill="#093f68"></path><path d="M180.77,64.6a41.37,41.37,0,0,0-7.31,3.21c-7.13,4-12.57,9.9-13.7,18-1.41,10.23-1.17,20-1,30.34.07,4.81.54,6.77,4.58,9.83,3.43,2.6,7.61,4.15,11.68,5.4a117.71,117.71,0,0,0,33.28,5.13c6.11.05,12.32-.39,18.06-2.49,5.93-2.17,13.16-7.16,14.55-13.67.92-4.3.1-9.76.26-14.2.18-4.91.42-9.81.42-14.73,0-28.78-35.72-33.57-57.26-27.9C183.13,63.86,181.94,64.21,180.77,64.6Z" fill="#725858"></path><path d="M209.33,137.53h-1.05a118.16,118.16,0,0,1-33.56-5.18c-3.87-1.18-8.32-2.77-12-5.55-4.44-3.36-4.91-5.7-5-10.62l0-1.69c-.15-9.8-.29-19,1.05-28.8,1.07-7.7,5.84-14,14.19-18.75a41.87,41.87,0,0,1,7.49-3.29c1.15-.38,2.36-.74,3.62-1.07,14.09-3.72,35.08-3.22,47.89,6.65,7,5.43,10.62,12.9,10.62,22.21,0,4-.16,8-.31,11.83l-.11,2.94c-.06,1.55,0,3.21.08,5a39.32,39.32,0,0,1-.36,9.39c-1.52,7.08-9.13,12.18-15.18,14.4S214.37,137.53,209.33,137.53Zm-8.2-75.17a65.1,65.1,0,0,0-16.55,2.15c-1.22.32-2.39.67-3.49,1h0A39.39,39.39,0,0,0,174,68.68c-7.78,4.42-12.22,10.23-13.2,17.28-1.32,9.6-1.18,18.78-1,28.5l0,1.69c.06,4.5.4,6.19,4.19,9.06,3.42,2.59,7.66,4.1,11.36,5.23a116.05,116.05,0,0,0,33,5.09c5,0,11.59-.19,17.71-2.43s12.66-7.06,13.91-12.94a37.5,37.5,0,0,0,.32-8.89c-.07-1.81-.14-3.51-.08-5.13l.11-3c.15-3.85.31-7.84.31-11.75,0-8.65-3.32-15.59-9.84-20.63C224.66,66.13,213.83,62.36,201.13,62.36ZM180.77,64.6h0Z" fill="#093f68"></path><path d="M236.29,193.27A30,30,0,0,1,232,208.45v31.18H169.25V208.44A30,30,0,0,1,165,193.27a24.2,24.2,0,0,1,4.25-14V171.4a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8v7.81A24.21,24.21,0,0,1,236.29,193.27Z" fill="#68e1fd"></path><path d="M232,240.63H169.25a1,1,0,0,1-1-1V208.71A30.73,30.73,0,0,1,164,193.27a25.14,25.14,0,0,1,4.25-14.35V171.4a9,9,0,0,1,9-9H224a9,9,0,0,1,9,9v7.5a25.21,25.21,0,0,1,4.26,14.37A30.9,30.9,0,0,1,233,208.72v30.91A1,1,0,0,1,232,240.63Zm-61.78-2H231V208.45a1,1,0,0,1,.14-.51,28.89,28.89,0,0,0,4.12-14.67,23.1,23.1,0,0,0-4.08-13.48,1,1,0,0,1-.18-.58V171.4a7,7,0,0,0-7-7H177.27a7,7,0,0,0-7,7v7.83a1,1,0,0,1-.19.58A23.11,23.11,0,0,0,166,193.27a28.82,28.82,0,0,0,4.11,14.66,1,1,0,0,1,.14.51Z" fill="#093f68"></path><path d="M185.75,163.5h29.78a0,0,0,0,1,0,0v14.89a14.89,14.89,0,0,1-14.89,14.89h0a14.89,14.89,0,0,1-14.89-14.89V163.5A0,0,0,0,1,185.75,163.5Z" fill="#ffc9b0"></path><path d="M200.64,194.28a15.9,15.9,0,0,1-15.89-15.89V163.5a1,1,0,0,1,1-1h29.78a1,1,0,0,1,1,1v14.89A15.9,15.9,0,0,1,200.64,194.28ZM186.75,164.5v13.89a13.89,13.89,0,0,0,27.78,0V164.5Z" fill="#093f68"></path><polyline points="194.18 166.32 194.18 159.23 206.5 159.23 206.5 166.32" fill="#ffc9b0"></polyline><path d="M206.5,167.32a1,1,0,0,1-1-1v-6.09H195.18v6.09a1,1,0,0,1-2,0v-7.09a1,1,0,0,1,1-1H206.5a1,1,0,0,1,1,1v7.09A1,1,0,0,1,206.5,167.32Z" fill="#093f68"></path><ellipse cx="165.15" cy="127.24" rx="11.96" ry="10.31" fill="#ffc9b0"></ellipse><path d="M165.15,138.55c-7.15,0-13-5.07-13-11.31s5.82-11.31,13-11.31,13,5.08,13,11.31S172.29,138.55,165.15,138.55Zm0-20.62c-6.05,0-11,4.18-11,9.31s4.92,9.31,11,9.31,11-4.17,11-9.31S171.19,117.93,165.15,117.93Z" fill="#093f68"></path><ellipse cx="234.89" cy="127.24" rx="11.96" ry="10.31" fill="#ffc9b0"></ellipse><path d="M234.89,138.55c-7.14,0-13-5.07-13-11.31s5.82-11.31,13-11.31,13,5.08,13,11.31S242,138.55,234.89,138.55Zm0-20.62c-6,0-11,4.18-11,9.31s4.92,9.31,11,9.31,11-4.17,11-9.31S240.94,117.93,234.89,117.93Z" fill="#093f68"></path><path d="M187.89,78.4c-.92,15.91-22,24.32-23.64,23v23.32a36.09,36.09,0,1,0,72.17,0V96.71C201,97.26,187.89,78.4,187.89,78.4Z" fill="#ffc9b0"></path><path d="M200.34,161.84a37.13,37.13,0,0,1-37.09-37.08V101.44a1,1,0,0,1,1.49-.87c1,.14,6.56-1.59,12.16-5.86,4.32-3.28,9.55-8.79,10-16.37a1,1,0,0,1,.72-.9,1,1,0,0,1,1.1.39c.12.18,12.89,17.89,46.2,17.89h1.5a1.07,1.07,0,0,1,.71.28,1,1,0,0,1,.3.72v28.05A37.12,37.12,0,0,1,200.34,161.84Zm-35.09-59.3v22.22a35.09,35.09,0,0,0,70.17,0v-27h-.55c-28.22,0-42-12.1-46.27-16.87-2.22,12.29-15.44,18.82-18.22,20.06A17.84,17.84,0,0,1,165.25,102.54Zm-.37-1.89h0Zm-.18-.09Z" fill="#093f68"></path><circle cx="183.63" cy="119.51" r="3.34" fill="#093f68"></circle><path d="M200.17,131.74a20,20,0,0,1-3.25-.27,1,1,0,0,1-.81-1.15,1,1,0,0,1,1.16-.82,15.47,15.47,0,0,0,5,.05c.24-.92-1-4.54-2.81-8a1,1,0,0,1,.43-1.35,1,1,0,0,1,1.34.42c.92,1.75,3.81,7.61,2.83,9.79a1.74,1.74,0,0,1-1.18,1A11.57,11.57,0,0,1,200.17,131.74Z" fill="#093f68"></path><path d="M194.54,113.32a1.42,1.42,0,0,1-.29,0l-19.31-3.47a1.58,1.58,0,0,1,.56-3.12l19.32,3.46a1.59,1.59,0,0,1-.28,3.15Z" fill="#093f68"></path><circle cx="220" cy="119.51" r="3.34" fill="#093f68"></circle><path d="M209.1,113.32a1.59,1.59,0,0,1-.28-3.15l19.32-3.46a1.58,1.58,0,1,1,.56,3.12l-19.32,3.47A1.32,1.32,0,0,1,209.1,113.32Z" fill="#093f68"></path><rect x="98.32" y="167.63" width="63.07" height="6.23" rx="3.07" transform="matrix(0.97, -0.26, 0.26, 0.97, -39.4, 38.95)" fill="#f56132"></rect><path d="M102.35,182.15a4.12,4.12,0,0,1-1.07-8.09l55-14.58a4.08,4.08,0,0,1,5,2.89,4.1,4.1,0,0,1-2.87,5.07l-55,14.58A4.17,4.17,0,0,1,102.35,182.15Zm55-20.81a2.33,2.33,0,0,0-.53.07l-55,14.58a2.14,2.14,0,0,0-1.26,1,2.14,2.14,0,0,0,2.35,3.13l55-14.58h0a2.06,2.06,0,0,0,1.26-1,2.1,2.1,0,0,0,.21-1.57,2.15,2.15,0,0,0-1-1.35A2.1,2.1,0,0,0,157.36,161.34Z" fill="#093f68"></path><rect x="102.68" y="160.6" width="14.83" height="31.75" rx="4.15" transform="translate(-41.52 34.08) rotate(-14.84)" fill="#f56132"></rect><path d="M109.94,193.8a5.17,5.17,0,0,1-5-3.83l-6-22.68a5.13,5.13,0,0,1,3.66-6.29l6.31-1.67a5.14,5.14,0,0,1,6.29,3.66l6,22.67a5.16,5.16,0,0,1-3.66,6.29h0l-6.31,1.68A5.43,5.43,0,0,1,109.94,193.8Zm.3-32.64a3.19,3.19,0,0,0-.8.1l-6.31,1.67a3.15,3.15,0,0,0-2.24,3.85l6,22.68a3.15,3.15,0,0,0,3.85,2.23l6.31-1.67a3.13,3.13,0,0,0,1.92-1.46,3.17,3.17,0,0,0,.32-2.39l-6-22.67A3.15,3.15,0,0,0,110.24,161.16ZM117.32,191h0Z" fill="#093f68"></path><rect x="141.01" y="150.45" width="14.83" height="31.75" rx="4.15" transform="translate(-37.64 43.56) rotate(-14.84)" fill="#f56132"></rect><path d="M148.27,183.64a5.12,5.12,0,0,1-5-3.83l-6-22.67a5.16,5.16,0,0,1,3.66-6.3l6.31-1.67a5.16,5.16,0,0,1,6.3,3.66l6,22.67a5.14,5.14,0,0,1-3.65,6.3l-6.32,1.67A5,5,0,0,1,148.27,183.64Zm.32-32.64a3.3,3.3,0,0,0-.82.11l-6.31,1.67a3.14,3.14,0,0,0-2.23,3.85l6,22.67a3.21,3.21,0,0,0,1.46,1.92,3.17,3.17,0,0,0,2.39.32l6.31-1.68h0a3.14,3.14,0,0,0,2.24-3.84l-6-22.68a3.09,3.09,0,0,0-1.46-1.91A3,3,0,0,0,148.59,151Z" fill="#093f68"></path><path d="M157.84,217.16l-6.48-13.46-10.51-21.86c-2-8.92-1.81-20.16-5.21-22.89-1.49-1.21-10.45-1.6-12.48,2.22s-3.78,11.76-3.33,14.16c.37,1.9,5.34,8.82,6.84,11.5l8.42,37.6a11.94,11.94,0,1,0,22.75-7.27Z" fill="#ffc9b0"></path><path d="M146.47,233.74a13,13,0,0,1-12.34-9l-8.4-37.55c-.52-.91-1.42-2.29-2.37-3.75-2.56-3.92-4.25-6.59-4.51-7.92-.53-2.77,1.36-10.94,3.43-14.82.84-1.59,2.67-2.71,5.31-3.25,3.25-.66,7.39-.32,8.68.72,2.53,2,3.23,7.54,4,13.91.4,3.16.82,6.42,1.48,9.43l16.94,35.22a.69.69,0,0,1,0,.13,12.93,12.93,0,0,1-12.32,16.88Zm-15.34-74.63a15.86,15.86,0,0,0-3.14.3c-2,.41-3.4,1.2-3.95,2.23-1.94,3.64-3.63,11.39-3.22,13.5.2,1.05,2.61,4.75,4.21,7.21,1,1.56,2,3,2.52,4a1.08,1.08,0,0,1,.1.27l8.41,37.6a10.95,10.95,0,0,0,20.85-6.68l-17-35.26a.9.9,0,0,1-.08-.21c-.7-3.13-1.12-6.49-1.54-9.73-.69-5.44-1.41-11.07-3.31-12.6A9,9,0,0,0,131.13,159.11Z" fill="#093f68"></path><path d="M204.47,147a18.26,18.26,0,0,1-9.24-2.33c-7.23-4.12-9.15-12.17-9.23-12.51a1,1,0,0,1,1.95-.45c0,.08,1.82,7.56,8.29,11.24,4.42,2.51,10,2.72,16.63.61a1,1,0,0,1,1.26.65,1,1,0,0,1-.65,1.26A29.92,29.92,0,0,1,204.47,147Z" fill="#093f68"></path><rect x="220.07" y="192.24" width="63.07" height="6.23" rx="3.07" transform="translate(554.41 294.23) rotate(160.26)" fill="#f56132"></rect><path d="M224.82,209.08a4.07,4.07,0,0,1-3.82-2.69,4.09,4.09,0,0,1,2.42-5.29L277,181.87a4.08,4.08,0,0,1,5.21,2.45,4.12,4.12,0,0,1-.12,3.2,4.06,4.06,0,0,1-2.31,2.09L226.2,208.84h0A4.09,4.09,0,0,1,224.82,209.08Zm1-1.18h0Zm52.52-24.28a2.11,2.11,0,0,0-.7.13L224.09,203a2.07,2.07,0,0,0-1.24,2.65,2.1,2.1,0,0,0,1.09,1.25,2,2,0,0,0,1.58.08l53.59-19.23a2.08,2.08,0,0,0,1.25-2.65,2.16,2.16,0,0,0-1.1-1.26A2.09,2.09,0,0,0,278.38,183.62Z" fill="#093f68"></path><rect x="263.71" y="172.98" width="14.83" height="31.75" rx="4.15" transform="translate(590.1 275.02) rotate(160.26)" fill="#f56132"></rect><path d="M272,206.15a5.16,5.16,0,0,1-4.85-3.41l-7.92-22.08a5.15,5.15,0,0,1,3.11-6.58l6.14-2.21a5.15,5.15,0,0,1,6.59,3.11L283,197.05a5.15,5.15,0,0,1-3.11,6.59l-6.14,2.2h0A5.07,5.07,0,0,1,272,206.15Zm1.4-1.25h0Zm-3.18-31.33a3.19,3.19,0,0,0-1.06.18L263,176a3.12,3.12,0,0,0-1.78,1.62,3.15,3.15,0,0,0-.12,2.41l7.93,22.07a3.14,3.14,0,0,0,4,1.9l6.15-2.2a3.17,3.17,0,0,0,1.9-4l-7.93-22.08a3.15,3.15,0,0,0-3-2.08Z" fill="#093f68"></path><rect x="226.38" y="186.38" width="14.83" height="31.75" rx="4.15" transform="translate(522.17 313.64) rotate(160.26)" fill="#f56132"></rect><path d="M234.68,219.55a5.18,5.18,0,0,1-4.84-3.42l-7.93-22.07a5.15,5.15,0,0,1,3.11-6.59l6.15-2.2a5.15,5.15,0,0,1,6.58,3.1l7.92,22.08a5.16,5.16,0,0,1-3.1,6.59l-6.15,2.2A5,5,0,0,1,234.68,219.55ZM232.91,187a3.31,3.31,0,0,0-1.07.19l-6.14,2.21a3.13,3.13,0,0,0-1.9,4l7.92,22.08a3.16,3.16,0,0,0,4,1.9h0l6.14-2.21a3.14,3.14,0,0,0,1.9-4l-7.92-22.08a3.12,3.12,0,0,0-1.62-1.78A3.17,3.17,0,0,0,232.91,187Z" fill="#093f68"></path><rect x="245.01" y="197.15" width="5.64" height="18.43" rx="2.82" transform="translate(-55.14 95.85) rotate(-19.74)" fill="#ffc9b0"></rect><path d="M250,216.2a3.81,3.81,0,0,1-3.59-2.53l-4.32-12a3.84,3.84,0,0,1,.14-2.92,3.79,3.79,0,0,1,2.17-2,3.81,3.81,0,0,1,4.88,2.31l4.32,12a3.75,3.75,0,0,1-.14,2.92,3.81,3.81,0,0,1-2.16,2A3.86,3.86,0,0,1,250,216.2Zm-4.31-17.68a1.88,1.88,0,0,0-.62.11,1.83,1.83,0,0,0-1,.94A1.81,1.81,0,0,0,244,201l4.32,12a1.86,1.86,0,0,0,.94,1,1.83,1.83,0,0,0,2.42-.87,1.81,1.81,0,0,0,.07-1.39l-4.32-12a1.8,1.8,0,0,0-.94-1A1.74,1.74,0,0,0,245.67,198.52Z" fill="#093f68"></path><rect x="250.16" y="194.95" width="5.64" height="18.43" rx="2.82" transform="translate(-54.1 97.46) rotate(-19.74)" fill="#ffc9b0"></rect><path d="M255.13,214a3.9,3.9,0,0,1-1.63-.36,3.8,3.8,0,0,1-2-2.17l-4.32-12a3.82,3.82,0,1,1,7.19-2.58l4.32,12a3.83,3.83,0,0,1-2.3,4.89A3.9,3.9,0,0,1,255.13,214Zm-4.31-17.67a1.87,1.87,0,0,0-.62.1,1.83,1.83,0,0,0-1.1,2.33l4.32,12a1.86,1.86,0,0,0,.94,1,1.83,1.83,0,0,0,2.49-2.26l-4.32-12a1.8,1.8,0,0,0-.94-1A1.73,1.73,0,0,0,250.82,196.33Z" fill="#093f68"></path><rect x="255.3" y="192.75" width="5.64" height="18.43" rx="2.82" transform="translate(-53.05 99.07) rotate(-19.74)" fill="#ffc9b0"></rect><path d="M260.29,211.8a3.82,3.82,0,0,1-3.6-2.53l-4.32-12a3.83,3.83,0,0,1,2.3-4.89,3.84,3.84,0,0,1,2.92.14,3.79,3.79,0,0,1,2,2.17l4.32,12a3.82,3.82,0,0,1-2.31,4.89h0A3.83,3.83,0,0,1,260.29,211.8Zm.95-1.16h0ZM256,194.12a1.87,1.87,0,0,0-.61.11,1.83,1.83,0,0,0-1,.94,1.81,1.81,0,0,0-.07,1.39l4.32,12a1.82,1.82,0,0,0,2.33,1.09h0a1.78,1.78,0,0,0,1-.93,1.81,1.81,0,0,0,.07-1.39l-4.32-12a1.83,1.83,0,0,0-.94-1A1.78,1.78,0,0,0,256,194.12Z" fill="#093f68"></path><rect x="260.45" y="190.55" width="5.64" height="18.43" rx="2.82" transform="translate(-52.01 100.68) rotate(-19.74)" fill="#ffc9b0"></rect><path d="M265.43,209.6a3.87,3.87,0,0,1-1.63-.36,3.8,3.8,0,0,1-2-2.17l-4.32-12a3.83,3.83,0,0,1,2.3-4.89,3.82,3.82,0,0,1,4.89,2.31l4.32,12a3.81,3.81,0,0,1-3.6,5.11Zm-4.32-17.67a1.86,1.86,0,0,0-.61.1,1.83,1.83,0,0,0-1.1,2.33l4.32,12a1.82,1.82,0,0,0,3.43-1.23l-4.32-12a1.83,1.83,0,0,0-.94-1A1.77,1.77,0,0,0,261.11,191.93Z" fill="#093f68"></path><rect x="240.8" y="190.12" width="14.5" height="5.28" rx="2.64" transform="translate(-55.54 112.01) rotate(-22.96)" fill="#ffc9b0"></rect><path d="M243.8,198.2a3.58,3.58,0,0,1-1.36-.27,3.63,3.63,0,0,1-.06-6.72l8.49-3.6a3.64,3.64,0,1,1,2.84,6.7h0l-8.49,3.6A3.68,3.68,0,0,1,243.8,198.2Zm8.49-8.88a1.63,1.63,0,0,0-.64.13l-8.49,3.6a1.64,1.64,0,0,0,1.28,3l8.49-3.6a1.6,1.6,0,0,0,.88-.89,1.62,1.62,0,0,0,0-1.26A1.64,1.64,0,0,0,252.29,189.32Zm1,4.07h0Z" fill="#093f68"></path></g></svg>
      <h2>Strength and Conditioning</h2>
       <ul class="pricing-feature">
        <li class="pricing-feature-item">6x Sessions with a Personal Trainer</li>
        <li class="pricing-feature-item">Full gym floor access including all equipments</li>
        <li class="pricing-feature-item">Unlimited group fitness classes<li>
        <li class="pricing-feature-item">Unlimited HIIT classes</li>
      </ul>
       <span class="price">$90/month</span>
      <a class="join-now" href="#">JOIN NOW</a>
    </div>
  </div>

            `,
            `
            @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Josefin+Sans:wght@700&family=Nunito&display=swap');

            html {
              font-family: 'Nunito', sans-serif;
            }
        
            /* if doing this on IDE, change flex-direction to column because of mobile first design */
            .panel {
              background-color: #f5f5f5;
              margin: 20px;
              border-radius: 10px;
              display: flex;
              flex-direction: row;
              text-align: center;
              text-transform: uppercase;
              padding: 20px 30px;
            }
            
            .pricing-plan {
            border-bottom: 1px solid #e1f1ff;
            }
            
            /* if on mobile and flex-direction column, add this
            .pricing-plan:last-child {
              border-bottom: none;
            }
            */
            
            h2 {
              color: #7AADDA;
              font-weight: 600;
              letter-spacing: 1px;
            }
            
            .pricing-feature {
              list-style: none;
              margin: 40px 0 25px;
              color: #016ff9;
            }
            
            .pricing-feature-item {
              font-weight: 500;
              letter-spacing: 1px;
              font-size: 12px;
              line-height: 1.5;
              padding: 15px 0;
              border-top: 1px solid #e1f1ff;
            }
            
            .pricing-feature-item:last-child {
              border-bottom: 1px solid #e1f1ff;
            }
            
            .price {
              color: #016ff9;
              display: block;
              font-size: 30px;
              font-weight: 700;
            }
            
            .join-now {
              border: 1px solid #9dd1ff;
              border-radius: 10px;
              color: #348efe;
              display: inline-block;
              padding: 15px 35px;
              text-decoration: none;
              margin: 25px;
              transition: all 200ms ease-in-out;
            }
            
            .join-now:hover, .join-now:focus {
              background-color:#bfffff;
              cursor: pointer;
            }
            
            .join-now.is-featured {
              background-color: #48aaff;
              color:white;
            }
            
            .join-now.is-featured:hover, .join-now.is-featured:focus {
              background-color: #269aff;
            }
           
    
            
            `,
            'js goes here',
            'ecomercesection2',
            `<head>
            <meta chatset="utf-8">
            <link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
          </head>
          <div class="content">
            <div class="shop-bg"></div>
            <div class="pop-up clearfix">
              <!--GALLERY-->
              <div class="pics">
                <span class="main-img"><img src="https://images-na.ssl-images-amazon.com/images/I/81StewvXHeL._UX500_.jpg"></span>
                <div class="additional-img">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81D8-r%2BiZgL._UX500_.jpg">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81PVFwDiEqL._UX500_.jpg">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81u04RfSYcL._UX500_.jpg">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81nuwkilZSL._UX500_.jpg">
                </div>
              </div>
              <!-- PRODUCT INFORMATION -->
              <div class="product">
                <!--category-breadcrumb-->
                <span class="category">Footwear</span>
                <!--stock-label-->
                <span class="stock">In Stock</span>
                <h1>Stacy Adams Men's Trevor Slip-On Loafer</h1>
                <!--PRICE-RATING-REVIEW-->
                <div class="block-price-rating clearfix">
                  <!--price-->
                  <div class="block-price clearfix">
                    <div class="price-new clearfix">
                      <span class="price-new-dollar">$399</span>
                      <span class="price-new-cent">90</span>  
                    </div>
                    <div class="price-old clearfix">
                      <span class="price-old-dollar">$599</span>
                      <span class="price-old-cent">&#8228;90</span>
                    </div>  
                  </div>
                  <!--rating-->
                  <div class="block-rating clearfix">
                    <!--review-->
                    <span class="review">40 Reviews</span>
                    <span class="rating"><img src="http://thrivedigital.wpengine.com/wp-content/uploads/2015/03/Review-Stars.png"></span>
                  </div>
                </div>
                <!-- rating <ul class="rating">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> -->
                <!--PRODUCT DESCRIPTION-->
                <div class="descr">
                  <p>Stacy Adams and men who know style have been a perfect fit for over 100 years. Founded in 1875 in Brockton, Massachusetts by William H. Stacy and Henry L. Adams, the Stacy Adams Shoe Company has long been a part of American culture.</p>
               </div> 
                <!--SELECT BLOCK-->
               <div class="block-select clearfix">
                <form>
                  <div class="select-color">
                    <span>Select Color</span>
                    <select class="color">
                      <option>Cognac</option>
                      <option>Black</option>
                    </select>
                  </div>
                  <div class="select-size">
                    <span>Size</span>
                    <select class="size">
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div> 
                  <!--BUTTON-->
                  <button class="btn"><img src="">Add to bag</button>
                 </form> 
                </div>
                <!--LINKS-->
               <div class="block-footer clearfix">
                <div class="block-links">
                 <div class="send">
                   <img src="http://www.free-icons-download.net/images/share-icon-20724.png">
                   <span>Send to a friend</span>
                  </div>
                  <div class="wishlist">
                    <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/23243-200.png">
                    <span>Save for later</span>
                  </div>
                </div>
                <!--SOCIAL-->
                <div class="social">
                    <a href="#"><img src="http://www.iconsdb.com/icons/download/black/facebook-7-256.gif"></a>
                    <a href="#"><img src="http://www.iconsdb.com/icons/download/black/twitter-4-512.gif"></a>
                    <a href="#"><img src="http://www.iconsdb.com/icons/download/black/google-plus-4-512.jpg"></a>
                    <a href="#"><img src="http://www.nataliemorgan.co.nz/images/Pinterest.png"></a>
                </div>
                </div>
              </div>
            </div>
          </div>
            `,
            `
            .clearfix {
              content:"";
              display: table;
            }
    
            .pop-up {
              width: 1000px;
              height: auto;
              margin-left: auto;
              margin-right: auto;
              margin-top: 80px;
              position: relative;
              background: #fff;
              padding: 30px;
              border-radius: 2px;
            }
            /*GALLERY*/
            .pics {
              float: left;
              width: 460px;
              margin-right: 0px;
            }
            .pics span {
              display: block;
            }
            .main-img img{
              display: block;
              border: .5px solid #ddd;
              border-radius: 2px;
              padding: 60px 30px;
              width: 390px;
              margin-bottom: 10px;
              cursor: pointer;
            }
            .additional-img img {
              float: left; /*display: inline-block has  automatic margin right and bottom :( */
              width: 98px;
              height: 45px;
              padding: 10px 5px;
              border: .5px solid #ddd;
              border-radius: 2px;
              margin-right: 5px;
              cursor: pointer;
            }
            .additional-img img:nth-child(4) {
              margin-right: 0;
            }
            .main-img img:hover,
            .additional-img img:hover {
              box-shadow: 0 0 6px #ddd;
            }
            /*PRODUCT INFORMATION*/
            .product {
              float: right;
              width: 430px;
            }
            span.category {
              display: block;
              font-weight: 700;
              color: #888;
              font-size: 12px;
              line-height: 14px;
              font-style: italic;
            }
            .product .category:hover {
              color: #999;
              cursor: pointer;
            }
            .product h1 {
              width: 300px;
              font-size: 21px;
              line-height: 24px;
              margin-top: 5px;
              color: #333;
              text-transform: uppercase;
              letter-spacing: .3px;
            }
            /*STOCK LABEL*/
            span.stock {
              display: block;
              float: right;
              position: relative;
              top: 4px;
              line-height: 11px;
              padding: 6px 12px 5px 12px;
              font-size: 11px;
              font-weight: bold;
              text-transform: uppercase;
              color: #fff;
              background: #18d11f;
              border-radius: 14px;
              letter-spacing: .3px;
            }
            /*PRICE & RATING*/
            .block-price-rating {
              width: 100%;
              margin-top: 10px;
            }
            .block-price {
              float: left;
              width: auto;
              margin-right: 20px;
            }
            .price-new {
              float: left;
              font-weight: bold;
              margin-right: 10px;
            }
            .price-new-dollar {
              float: left;
              display: block;
              font-size: 24px;
              margin-right: 5px;
              color: #333;
            }
            .price-new-cent {
              font-size: 14px;
            }
            .price-old {
              text-decoration: line-through;
              color: #444;
              font-size: 14px;
              position: relative;
              top: 6px;
            }
            /*rating*/
            .block-rating {
              float: right;
              position: relative;
              top: 2px;
            }
            span.rating img {
              display: block;
              float: left;
              width: 110px;
              margin-left: 10px;
            }
            span.rating img:hover {
              cursor: pointer;
            }
            /*review*/
            span.review {
              display: block;
              float: left;
              position: relative;
              top: 6px;
              font-weight: 700;
              color: #888;
              font-size: 12px;
              font-style: italic;
            }
            span.review:hover {
              color: #999;
              cursor: pointer;
            }
            /*PRODUCT DESCRIPTION*/
            .descr { 
              font-size: 14px;
              line-height: 18px;
              color: #444;
              letter-spacing: .3px;
              margin-top: 10px;
              width: 430px;
              height: 71px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: no-wrap;
            }
            /*SELECT BLOCK*/
            .block-select {
              margin-top: 15px;
            }
            .select-color,
            .select-size {
              float: left;
              font-size: 14px;
              font-weight: 700;
              color: #888;
            }
            .select-color span,
            .select-size span {
              display: block;
              margin-bottom: 5px;
            }
            select.color {
              width: 320px;
              margin-right: 10px;
            }
            select.size {
              width: 100px;
            }
            select.color, select.size {
              padding: 8px 10px;
              border: .5px solid #ddd;
              border-radius: 2px;
              text-transform: uppercase;
              font-weight: 700;
              opacity: .7;
              letter-spacing: .3px;
            }
            /*BUTTON*/
            .btn {
              margin: 10px auto;
              text-align: center;
              font-size: 14px;
              font-weight: 700;
              color: #fff;
              letter-spacing: .3px;
              text-transform: uppercase;
              padding: 15px 0;
              width: 100%;
              border-radius: 2px;
              cursor: pointer;
              background: #fd7064;
            }
            .btn:hover {
              background: #fc796f;
            }
            /*LINKS*/
            .block-footer {
              width: 100%;
              margin-top: 10px;
            }
            .block-links {
              float: left;
              cursor: pointer;
            }
            .block-links img {
              width: 20px;
              opacity: .3;
              vertical-align: middle;
              margin-right: 5px;
            }
            .block-links span {
              font-size: 11px;
              color: #888;
              font-weight: 700;
              letter-spacing: .3px;
              text-transform: uppercase;
              font-style: italic;
            }
            .block-links span:hover {
              color: #999;
            }
            .wishlist {
              margin-top: 5px;
            }
            /*SOCIAL*/
            .social {
              float: right;
              position: relative;
              top: 5px;
            }
            .social img {
              width: 36px;
              opacity: .3;
              cursor: pointer;
              margin-right: 3px;
              display: inline;
            }
            .social img:nth-child(4) {
              margin-right: 0;
            }
            .social img:hover {
              opacity: .2;
            }`,
            'js goes here',
            'ecomercesection3',
            `<section class="products-container container">
            <a href="https://www.pinterest.com/pin/ASQyu4IhVADMC-1ZPfodm2IgJJD-Q2dKvL8t-bQZv-H5rfuxCX52s94/" class="shop-item">
              <img src="https://static1.squarespace.com/static/560c458be4b0af26f729d191/560c5de0e4b083d9c365515f/560d4f67e4b00b2c2a29ab00/1443712877696/lauren-winter-haori-jacket_0250.jpg?format=750w" alt="Clothing item" class="lazy shop-item__img" id="HaoriJacketImg">
              <div class="quickview">
                <span class="quickview__icon" id="Haori Jacket">Quick View</span>
                <span class="quickview__info">Haori jacket<br><span class="quickview__info--price" id="HaoriJacketPrice">$210.00</span></span>
              </div>
            </a>
            <a href="https://www.pinterest.com/pin/449304500297815470/" class="shop-item">
                    <img src="https://static1.squarespace.com/static/560c458be4b0af26f729d191/560c5de0e4b083d9c365515f/560d5226e4b0e3eb29871ecf/1443713579307/lauren-winter-swing-dress_0183.jpg?format=2500w" alt="Clothing item" class="lazy shop-item__img" id="SwingDressImg">
                    <div class="quickview">
                      <span class="quickview__icon" id="Swing Dress">Quick View</span>
                      <span class="quickview__info">Swing dress<br><span class="quickview__info--price" id="SwingDressPrice">$218.00</span></span>
                    </div>
                  </a>
                  <a href="#" class="shop-item">
                    <img src="https://static1.squarespace.com/static/560c458be4b0af26f729d191/560c5de0e4b083d9c365515f/560d4fd9e4b03b1013fd1f56/1443712996946/lauren-winter-lounge-jumpsuit-black_0284.jpg?format=750w" alt="Clothing item" class="lazy shop-item__img" id="LoungeJumpsuitImg">
                    <div class="quickview">
                      <span class="quickview__icon" id="Lounge Jumpsuit">Quick View</span>
                      <span class="quickview__info">Lounge Jumpsuit<br><span class="quickview__info--price" id="LoungeJumpsuitPrice">$298.00</span></span>
                    </div>
                  </a>
                  <a href="#" class="shop-item">
                    <img src="https://static1.squarespace.com/static/560c458be4b0af26f729d191/560c5de0e4b083d9c365515f/560d542ae4b088b5adb66691/1443714094740/ulihu-blue-linen-crop-top_0320.jpg?format=750w" alt="Clothing item" class="lazy shop-item__img" id="LinenTopImg">
                    <div class="quickview">
                      <span class="quickview__icon" id="Linen Top">Quick View</span>
                      <span class="quickview__info">Linen top<br><span class="quickview__info--price" id="LinenTopPrice">$125.00</span></span>
                    </div>
                  </a>
          </section>
          
          <!-- Popup Shop Item -->
          
          <div class="overlay">
            <div class="popup-btn popup-btn--prev">
              <img src="https://image.flaticon.com/icons/svg/60/60758.svg" alt="Previous button" class="popup-btn__icon">
            </div>
            <div class="popup-item">
              <div class="clothing-item-flex">
                <div class="clothing-item-flex__img-wrapper">
                  <img src="" alt="Clothing item" class="clothing-item-flex__img zoom-normal" id="clothingImg">
                </div>
                <div class="product-info">
                  <h2 class="heading-secondary" id="clothingName"></h2>
                  <span class="product-info__price" id="clothingPrice"></span>
                  <p class="product-info__text">Sed ornare tellus non lectus blandit faucibus. Curabitur convallis nibh ut libero lobortis ullamcorper. Aliquam ornare risus in orci iaculis egestas. Vivamus varius ipsum eu leo ...</p>
                  <div class="detail-group">
                    <p class="detail-group__span">Size:</p>
                    <select class="detail-group__size">
                      <option value="">Select Size</option>
                      <option value="0">0</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div class="detail-group">
                    <p class="detail-group__span">Quantity:</p>
                    <input class="detail-group__quantity" max="9999" min="1" value="1" type="number">
                  </div>
                  <button type="button" class="btn btn--form btn--form--shop">Add to cart</button>
                  <a href="" class="btn-view">View Full Item</a>
                </div>
              </div>
              <span class="popup__close-icon-clothing" id="closeIcon">&times;</span>
            </div>
            <div class="popup-btn">
              <img src="https://image.flaticon.com/icons/svg/60/60758.svg" alt="Next button" class="popup-btn__icon">
            </div>
          </div>`,
          `
          
       
         
          
    
          
          .products-container {
            display: flex;
          }
          .container {
            padding: 4rem 5rem !important;
          }
          
          .shop-item {
            width: calc(100% / 4);
            margin: 1.5rem;
            position: relative;
            display: flex;
            justify-content: center;
          }
          
          .shop-item__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .quickview {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            padding-bottom: 2rem;
            color: #222;
            letter-spacing: 0.15rem;
            text-transform: uppercase;
            opacity: 0;
            transition: all ease-in-out 250ms;
          }
          
          .quickview:hover {
            opacity: 1;
          }
          
          .quickview__icon {
            font-size: 1rem;
            background-color: rgba(204, 204, 204, 0.9);
            padding: 0.7rem 1rem;
            align-self: center;
          }
          
          .quickview__info {
            font-size: 1.2rem;
            align-self: center;
            text-align: center;
          }
          
          .quickview__info--price {
            font-size: 1rem;
            color: rgba(61, 61, 61, 0.6);
          }
          
          .popup {
            height: 100vh;
            width: 100%;
            background-color: rgba(245, 239, 236, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            opacity: 0;
            visibility: hidden;
            transition: all ease-in-out 250ms;
          }
          
          .popup__img {
            height: 95%;
          }
          
          .popup__close-icon {
            position: absolute;
            top: 1rem;
            right: 2.5rem;
            font-size: 3rem;
            color: #d1d1d1;
            cursor: pointer;
            transition: all ease-in-out 250ms;
          }
          
          .popup__close-icon:hover {
            color: rgba(61, 61, 61, 0.6);
          }
          
          .popup__close-icon-clothing {
            position: absolute;
            font-size: 3.6rem;
            font-weight: lighter;
            color: #222;
            top: -1rem;
            right: 1.5rem;
            cursor: pointer;
          }
          
          .overlay {
            position: fixed;
            overflow-y: scroll;
            overscroll-behavior: contain;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
            visibility: hidden;
            background-color: rgba(240, 240, 240, 0.6);
          }
          
          .popup-item {
            width: 75%;
            height: 150vh;
            background-color: #fff;
            margin: 5rem auto;
            display: flex;
            justify-content: center;
          }
          
          .product-info {
            padding: 5rem 3.5rem;
            letter-spacing: 0.1rem;
            color: #222;
          }
          
          .product-info--shop {
            padding: 0 3.5rem;
          }
          
          .product-info__price {
            font-size: 2.4rem;
            margin: 3rem 0;
            display: block;
            color: rgba(29, 29, 29, 0.7);
          }
          
          .product-info__text {
            font-size: 1.4rem;
            margin-bottom: 3rem;
            color: rgba(29, 29, 29, 0.7);
          }
          
          .detail-group {
            color: #222;
            margin-bottom: 4rem;
          }
          
          .detail-group__span {
            font-size: 1.1rem;
            text-transform: uppercase;
          }
          
          .detail-group__size {
            width: 12.5rem;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            padding: 1.1rem 2rem;
            margin-top: 0.5rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border-radius: 0;
            border: 0;
            outline: none;
            background: url(../img/down-arrow.png) 85%/7% no-repeat #f8f8f8;
          }
          
          .detail-group__quantity {
            width: 7.5rem;
            padding: 1.1rem 1.6rem;
            margin-top: 0.5rem;
            outline: none;
            border: 0;
            background-color: #f8f8f8;
          }
          
          .clothing-item-flex {
            height: 100%;
            background-color: #fff;
            display: flex;
          }
          
          .clothing-item-flex__img-wrapper {
            min-width: 60%;
            margin: 1.5rem;
            overflow: hidden;
          }
          
          .clothing-item-flex__img-wrapper--no-margin {
            margin: 0;
          }
          
          .clothing-item-flex__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .btn {
            display: inline-block;
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            padding: 1.2rem 2.6rem;
            border: 2px solid #fff;
            color: #fff;
            text-decoration: none;
            outline: none;
            transition: all 250ms ease-in-out;
          }
          .btn:hover {
            color: #222;
            background-color: #fff;
          }
          .btn--form {
            color: #222;
            border: 2px solid black;
            font-weight: 400;
            padding: 1.4rem 3.5rem;
            cursor: pointer;
          }
          .btn--form:hover {
            color: #fff;
            background-color: #222;
          }
          .btn--form--shop {
            padding: 2.3rem 3.4rem;
          }
          
          .btn-view {
            display: block;
            width: 10.5rem;
            margin-top: 4rem;
            font-size: 1.4rem;
            letter-spacing: 0.1rem;
            text-decoration: none;
            color: rgba(61, 61, 61, 0.6);
            border-bottom: 1px solid rgba(162, 162, 162, 0.7);
          }
          
          .popup-btn {
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 50%;
            right: 9%;
            cursor: pointer;
          }
          .popup-btn--prev {
            transform: rotate(180deg);
            left: 9%;
          }
          .popup-btn__icon {
            height: 100%;
          }`,
          'js goes here',
          'ecomercesection4',
          `    <div class="horizontal" id="forcards">

  

          <div class="card">
            <img src="img/Electro.jpg" alt="">
       
          </div>
        
    
    
                <div class="card">
              <img src="img/Clothing.jpg" alt="">
         
           
            </div>
    
            <div class="card">
              <img src="img/car.jpg" alt="">
          
             
            </div> 
          
        </div>
    
          
        <div class="horizontal" id="forcards">
    
      
    
          <div class="card">
            <img src="img/asbeza.jpg" alt="">
           
          </div>
        
    
    
                <div class="card">
              <img src="img/food.jpg" alt="">
            
           
            </div>
    
            <div class="card">
              <img src="img/jewelry.jpg" alt="">
          
             
            </div> 
          
        </div>
    
        <div class="horizontal" id="forcards">
    
      
    
          <div class="card">
            <img src="img/finishing.jpg" alt="">
       
          </div>
        
    
    
                <div class="card">
              <img src="img/homematerial.jpg" alt="">
         
           
            </div>
    
            <div class="card">
              <img src="img/house.jpg" alt="">
           
             
            </div> 
          
        </div>`,
          `.horizontal {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
          }
          .card {
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 21vw;
            height: 45vh;
            margin: 2%;
            padding: 10px;
            max-height: 500px;
            border-radius: 2%;
            flex:1;
          
          }
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
          .cardDescription {
            padding: 20px 30px;
          }
          
          .card > img {
            width: auto;
            display: block;
            height: 300px;
            object-fit: contain;
          }
          #forcards{
            padding: 3%;
          }
          svg{
            color: white;
          }
          `,
          'js goes here',
          'new',
          ` <div class="horizontal">
          <img src="img/car.jpg" alt="" class="product">
          <div class="descrption">
                 <h2>Land Cruiser V8</h2>
                 <hr>
                 
                     Price: 	$44.62 <br>
                     Size	XS-43X30CM <br>
                     Brand	MMyydds <br>
                     Color	Gradient grey <br>
                     Item Weight	1 Grams <br>
                <hr>
                About this item
             
                  ***Provide your furry baby with a private enclosed mansion, when they want to be quiet, they can hide in their own secluded safe room. <br>
                  ***This dog bed can provide a super soft, warm and anti-anxiety environment for puppies or medium-sized dogs. The pet lying on the comfortable pet bed is as warm as a mother's arm.<br>
                  ***The pet bed is also equipped with a waterproof base to prevent wet and dirty surfaces.<br>
                  ***Used at home or traveling in cages, crates, kennels, vehicles, houses for dogs and cats. Soft and comfortable, this will be a great gift for your pet puppy.<br>
                  Note that separate washing and drying are recommended. Since it's compressed, after opening the package, please pat, shake and let stand for 48 hours to fluff.<br>
              
          </div>
          <div class="buy">
                 <div class="price">4000$</div>
                 <button class="cart">Add To Cart</button><br>
                 <button class="buynow">Buy Now</button>
                 <div class="buyDescription">
                    Ships from: MMyydds <br>
                    Sold by : MMyydds <br>
                    Return policy: Eligible for Return, Refund or Replacement.
                 </div>
          </div>
        </div>`,
          `.horizontal {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
          }
          .buy{
            border: 2px solid gray;
            border-radius: 5px;
            padding: 10px;
            height: 50vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            
          }
          .descrption{
            width: 20vw;
            height: 70vh;
            margin-top: 10vh;
            
          }
          .product{
            width: 40vw;
          }
          .cart,.buynow{
            padding: 10px;
            border-radius: 5px;
            width: 100%;
          }
          .price{
            margin-bottom: 15vh;
          }
          .buyDescription{
            margin-top: 10vh;
          }`,
          'js goes here'
            
        ],
        [
            'portfoliosection1',
            `
            <div class="hero flex items-centre justify-between">
            <div class="left flex-1 justify-center">
            <img src="https://i.picsum.photos/id/102/500/500.jpg?hmac=B0KI1e2bgYjHUk7tfMIQ_w6Q3TbnQSYJDrWuNNHx_-o">
            </div>
            <div class="right flex-1">
            <h6>Akshat Sharma</h6>
            <h1>I'm a Web<br> <span>Developer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum nam nobis, minima
            laudantium fugit sequi nostrum quod impedit, beatae necessitatibus praesentium optio labore
            nemo!</p>
            <div>
            <button class="btn btn-secondary">DOWNLOAD CV</button>
            </div>
            </div>
            </div>
                  
           
                   
              
            `,
            `
            @import 'utilities.css';
            :root{
            --primary: rgb(29, 221, 189);
            --bgDark: rgb(12, 12, 12);
            --white: rgb(250, 250, 250);
            --secondary: rgb(0, 59, 50);
            --bgLight: rgb(190, 181, 181);
            }
            header{
            background-color: var(--bgDark);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 73% 94%, 0 100%);
            }
            header nav .left a{
            color: var(--white);
            text-decoration: none;
            margin-right: 2rem;
            text-transform: uppercase;
            transition: all .2s ease;
            }
            header nav .left a:hover{
            color: var(--primary);
            }
            header nav {
            padding: 2rem 0;
            }
            header nav .logo{
            margin-right: 3rem;
            }
            
            .container{
            max-width: 1152px;
            padding: 0 15px;
            margin: 0 auto;
            }
            .hero{
            padding-top: 2rem;
            padding-bottom: 3rem;
            }
            .hero .left img{
            width: 400px;
            }
            .hero .right {
            color: var(--white);
            margin-top: -7rem;
            }
            .hero .right h6{
            font-size: 1.6rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
            }
            .hero .right h1{
            font-size: 4rem;
            font-weight: 100;
            line-height: 1.2;
            margin-bottom: 2rem;
            }
            .hero .right h1 span{
            color: var(--primary);
            }
            .hero .right p{
            line-height: 1.9;
            margin-bottom: 2rem;
            }
            
            .flex{
            display: flex;
            }
            .items-centre{
            align-items: center;
            }
            .justify-between{
            justify-content: space-between;
            }
            .justify-center{
            justify-content: center;
            }
            .justify-right{
            justify-content: right;
            }
            .btn{
            padding: 0.6rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            border: 2px solid transparent;
            outline: none;
            cursor: pointer;
            text-transform: uppercase;
            transition: all .2s ease;
            }
            .btn-primary{
            background-color: var(--primary);
            color: var(--secondary);
            margin-top: -15rem;
            }
            .btn-primary:hover{
            background: transparent;
            border-color: var(--primary);
            color: var(--primary);
            }
            .flex-1{
            flex: 1;
            }
            .btn-secondary{
            background: transparent;
            color: var(--primary);
            border-color: var(--primary);
            }
            .btn-secondary:hover{
            background: var(--primary);
            color: var(--secondary);
            }
            
           `,
            'js goes here',
            'portfoliosection2',
            `

            <link rel="icon" type="image/png" href="#" sizes="16x16">
            
            <div class="container-fluid">
              <div id="background-fixed">
        
            <div data-stellar-offset-parent="true">
            <div class="photo head" data-stellar-background-ratio="0.5">
            <div id="content">
            <div id="box">
            <span>NERDYANDNATURAL</span><br>
            </div>
              </div>
              </div>
              </div>
            
            `,
            `@charset "utf-8";
            /* CSS Document */
            
            .photo {
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: center;
              background-size: cover;
              position: relative;
               background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
             width: 100%;
            
            }
            
            .head {
              background-image:url(https://static.pexels.com/photos/169573/pexels-photo-169573.jpeg);
              height: 800px;
              
            }
            
            .end {
              background-image:url(https://static.pexels.com/photos/196254/pexels-photo-196254.jpeg);
              height: 525px;
              opacity: 0.7;
              
            }
            
            .navbar-fixed-top {
              font-size: 14px;
              color: silver;
              overflow: hidden;
              
              }
            
            
            li {
              list-style-type: none;
              text-decoration: none;
            }
            
            
            
            p {
            
              font-size: 16px;
              font-family: "Roundo", Helvetica, sans-serif;
            }
            
            h2 {
            
              font-family: "Open Sans", Helvetica, sans-serif;
              text-transform: uppercase;
              font-size: 42px;
            }
            
            i {
              position: relative; 
              left: 175px;
            
            }
            
            
            h3 {
              font-family: "Open Sans", Helvetica, sans-serif;
              text-transform: uppercase;
            }
            
            form {
              text-align: center;
            }
            
            .navbar-fixed-top.scrolled {
              background-color: rgba(0,0,0,0.5) !important;
              transition: background-color 200ms linear;
            }
            
            
            .menu-bar ul {
              font-family: "Open Sans", Helvetica, sans-serif;	
              list-style: none;
                padding: 0;
              padding-left: 10%;
              padding-right: 10%;
                width: 1100px;
                margin: 0;
              text-transform: uppercase;
              float: right;
            }
            
            .menu-bar li {
              color: silver;
              display: inline-block;
              margin: 1em 1em;
              font-family: "Open Sans", Helvetica, sans-serif;
              text-transform: uppercase;
              float: right;
            }
            
            .menu-bar li a {
              display: inline-block;
              color: white;
              text-decoration: none;
              padding: 0;
              font-size: 16px;
            }
            
            .menu-bar li a:hover {
              color: lightgreen;
            }
            
            
            #content {
              display: inline-block;
              width: 100%;
              background-size: cover;
              height: 1000px;
            }
            
            
            #box {
              color: white;
              font-family: "Open Sans", Helvetica, sans-serif;
              font-size: 72px;
              position: relative;
              text-align: center;
            
            }
            
            span {
              padding: 5px;
              margin: 5px;
                border: 5px solid white;
                display: inline-block;
              position: relative;
              top: 200px;
            
            
            }
            
            body {
             
                color: white;
              
            }
            
            .jumbotron {
              background-color: lightgreen !important; 
            }
            
            
            #superpowers {
              color: gray;
              height: 500px;
              background-color: white;
              
            }
            
            
            #portfolio {
              width: 100%;
              height: 400px;
              padding: 0 50 50 0;
                color: white;
            }
            
            
            #about {
              height:  500px;
              color: gray;
              background-color: white;
            
              width: 100%;
              
            }
            
            .img-circle {
              border:2px solid white;
            }
            
            
            #contact {
                display:block;
                width: 50%;
                margin:0 auto;
                left: 15px;
              
            }
            
            .form {
              height: 250px;
                 position: absolute;
                 display:block;
                margin-left:auto;
                margin-right:auto;
            }
            
            .footer, .push {
                height: 10px;
                min-height: 1px;
              color: gray;
            }
            
            footer {
              
              bottom: 0;
              width: 100%;
              color: silver;
            }
            
            
            /*=========================
              Icons
             ================= */
            
            /* footer social icons */
            .social-network {
              list-style: none;
              display: inline-block;
              padding: 0;
              left: 150;
            }
            .social-network li {
              display: inline-block;
              margin: 0 5px;
            }
            
            
            /* footer social icons */
            
            .social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,
            .social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i {
              color:#fff;
            }
            a.socialIcon:hover, .socialHoverClass {
              color:#44BCDD;
            }
            
            .social-network li a {
              display:inline-block;
              position: relative;
              margin:0 auto;
              width: 50px;
              height: 50px;
              font-size:20px;
              top: 50px;
              color: gray;
            }
            
            .social-network li a:hover {
              color: lightgreen;
            }
            
            
            .slideanim {visibility:hidden;}
            .slide {
                /* The name of the animation */
                animation-name: slide;
                -webkit-animation-name: slide; 
                /* The duration of the animation */
                animation-duration: 1s; 
                -webkit-animation-duration: 1s;
                /* Make the element visible */
                visibility: visible; 
            }
            
            @keyframes slide {
                0% {
                    opacity: 0;
                    transform: translateY(70%);
                } 
                100% {
                    opacity: 1;
                    transform: translateY(0%);
                } 
            }
            @-webkit-keyframes slide {
                0% {
                    opacity: 0;
                    -webkit-transform: translateY(70%);
                } 
                100% {
                    opacity: 1;
                    -webkit-transform: translateY(0%);
                }
            }
            
             /* Extra Small Devices, Phones */ 
                @media only screen and (min-width : 400px) and (max-width : 500px) {
               .photo{
             
                    background-attachment: scroll;
                  }
                  
                  .menu-bar li a {
                    font-size: 13px;
                  }
            
                 .head {
                   height: 400px;
                 }
            
                 .end {
                  height: 725px;
                 }
            
                  #box {
                    font-size: 32px;
                  }
            
                  #superpowers {
                    height: 1000px;
                  }
            
                  #portfolio {
                    height: 350px;
                  }
            
                  #about {
                    height: 750px;
                  }
                  
                  #contact {
                    width: 100%;
              
                  }
            
                  .social-network {
              list-style: none;
              display: block;
              padding: 0;
              left: 100;
            }
            
                  .social-network li a {
              display:inline-block;
              position: relative;
              margin:0 auto 0 auto;
              -moz-border-radius:50%;
              -webkit-border-radius:50%;
              width: 25px;
              height: 25px;
              font-size: 13px;
              color: white;
            }
            
                  
                }
            
            @media only screen and (max-width: 375px) {
              .photo {
                 background-attachment: scroll;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
            }
            
              #box {
                font-size: 16px;
              }
            
               .menu-bar li a {
                    font-size: 10px;
                  }
            
                 .head {
                   height: 400px;
            
                 }
            
                      .end {
                  height: 725px;
                 }
            
            
                  #box {
                    font-size: 30px;
                  }
            
                  #portfolio {
                    height: 300px;
              
            }
                    #superpowers {
                    height: 1000px;
                  }
                 
            
                  #about {
                    height: 775px;
                  }
                  
                  #contact {
                    width: 100%;
              
                  }
            
                   .social-network {
              list-style: none;
              display: inline-block;
              padding: 0;
              left: 100;
            }
            
            
                   .social-network li a {
              display:inline-block;
              position: absolute;
              margin:0 auto 0 auto;
              width: 25px;
              height: 25px;
              font-size: 13px;
              color: white;
            }
            }
            `,
            'js goes here',
            'portfoliosection3',
            `
            
  
            <section id="about" class="about-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <img src="https://i.picsum.photos/id/830/500/500.jpg?hmac=KC35WCb0_sG3NNDb9rNSm_LAmswJ8RohbTwuNZ0p4oI" class="img-circle" alt="Leví Martins">
                            <br>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div class="row" style="padding-top:50px">
                                <div class="col-md-8 col-md-offset-2 text-center">
                                    <div class="btn-group">
                                        <a target="_blank" href="https://www.facebook.com/levimonteir" type="button" class="btn btn-default btn-md"><i class="fa fa-facebook"></i></a>
                                        <a target="_blank" href="https://twitter.com/levimonteiro" type="button" class="btn btn-default btn-md"><i class="fa fa-twitter"></i></a>
                                        <a target="_blank" href="mailto:levimmartins@gmail.com" type="button" class="btn btn-default btn-md"><i class="fa fa-envelope"></i></a>
                                        <a target="_blank" href="https://ca.linkedin.com/pub/levi-monteiro-martins/9b/2b3/942" type="button" class="btn btn-default btn-md"><i class="fa fa-linkedin"></i></a>
                                        <a target="_blank" href="https://plus.google.com/u/0/+LeviMartins07" type="button" class="btn btn-default btn-md"><i class="fa fa-google"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Services Section -->
            <section id="services" class="services-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Portfolio</h1>
                            <div class="row" align="center">
                                <div class="col-sm-6">
                                   
                                </div>
                                <div class="col-sm-6">
                                    
                                    <br>
                                </div>
                            </div>
                            <div class="row" align="center">
                                <div class="col-sm-6">
                                   
                                </div>
                                <div class="col-sm-6">
                                   
                                </div>
                            </div>
                            <!--end row !-->
                        </div>
                    </div>
                </div>
            </section>
           `,
           `/*!
           * Start Bootstrap - Scrolling Nav (https://startbootstrap.com/)
           * Copyright 2013-2016 Start Bootstrap
           * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
           */
          
          body {
              width: 100%;
              height: 100%;
          }
          
          html {
              width: 100%;
              height: 100%;
          }
          
          @media(min-width:767px) {
              .navbar {
                  padding: 20px 0;
                  -webkit-transition: background .5s ease-in-out,padding .5s ease-in-out;
                  -moz-transition: background .5s ease-in-out,padding .5s ease-in-out;
                  transition: background .5s ease-in-out,padding .5s ease-in-out;
              }
          
              .top-nav-collapse {
                  padding: 0;
              }
          }
          
          /* Demo Sections - You can use these as guides or delete them - the scroller will work with any sort of height, fixed, undefined, or percentage based.
          The padding is very important to make sure the scrollspy picks up the right area when scrolled to. Adjust the margin and padding of sections and children 
          of those sections to manage the look and feel of the site. */
          h1{
            color: #0b7dda;
            font-family: 'Bitter', serif;
          }
          
          p{
            color: #010e18;
            font-family: 'Sarala', sans-serif;
            font-size: 15pt;
            padding-top: 10px;
          }
          
          .intro-section {
              height: 100%;
              padding-top: 150px;
              text-align: center;
              background: #fff;
          }
          
          .about-section {
              /* height: 150%;*/
              padding-bottom: 50px;
              padding-top: 150px;
              text-align: center;
              background: #eee;
          }
          
          .services-section {
              /* height: 150%;*/
              padding-bottom: 50px;
              padding-top: 150px;
              text-align: center;
              background: #fff;
          }
          
          .contact-section {
              /* height: 150%;*/
              padding-bottom: 50px;
              padding-top: 150px;
              text-align: center;
              background: #eee;
          }
          
          
          .contact-form{ margin-top:15px;}
          .contact-form .textarea{ min-height:220px; resize:none;}
          .form-control{ box-shadow:none; border-color:#eee; height:49px;}
          .form-control:focus{ box-shadow:none; border-color:#00b09c;}
          .form-control-feedback{ line-height:50px;}
          .main-btn{ background:#4da7f0; border-color:#72b9f3; color:#fff;}
          .main-btn:hover{ background:#148aeb;color:#fff;}
          .form-control-feedback {
          line-height: 50px;
          top: 0px;
          }
          
          
          .btn-default {
            font-size: 36px;
            padding: 16px 30px;
            min-width: 114px;
            border-color: #ededed;
          }
          
          .fa {
            color: #4da7f0;
          }
          
          .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default {
            background-color: #f8f8f8;
            border-color: #ededed;
           
          }`,
          'js goes here' 
        ]

    ],
    card: [
        [
            'blogcard0',

            '\n' + `
    <div class="cards">
      <img src="img/hybrid-v-native-hero-image.jpg" alt="" class="cardsImage">
      <div class="cardsDescription">
        <p class="cardsCategoryAndDate">Development . July 2, 2020</p>
        <h1 class="cardsTitle">Hybrid Vs. Native - Here is how you can choose one over the other</h1>
        <p class="cardsParagraph">there is no denying it, hybrid mobile development is becoming and becoming the main option when 
            considering developing a mobile applicationdue to the lower costs and faster develeopment time. </p>
        <div class="cardsButton"><button class="cardsBtn" >Read More</button></div>
      </div>
    </div>
    <!--IgnoreThis->CardGoesHere-->
    `,

            '\n' + `
  .cards{
    display: flex;
    flex-direction: column;
    margin: 30px;
    padding: 20px;
    width: 40vw;
    flex: 1;
    box-shadow: 5px 5px 8px #888888;
  }
  .cardsDescription{
    padding: 10px;
     margin: 10px;
  }
  .cardsCategoryAndDate, .cardsTitle, .cardsParagraph, .cardsButton{
    margin: 20px;
  } `,


            'js goes here',
            'blogcard1',  `
            <div class="container">
            <div class="card">
              <div class="card-header">
                <img src="https://images.unsplash.com/photo-1646974005583-01e9a7b0b5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="">
              </div>
              <div class="card-content">
                <span>Technology</span>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, temporibus!</p>
              </div>
              <div class="card-footer">
                <img src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" alt="">
                <div class="author">
                  <p>John Doe</p>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
            </div>     
        `,
            `
            @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");


.container {
  height: 100vh;
  font-family: "Open Sans", sans-serif;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 360px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
}

.card-header {
  width: 100%;
}

.card-header img {
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card-content {
  padding: 1rem;
}

.card-content span {
  background-color: #51adc4;
  color: #fff;
  font-weight: 300;
  font-size: 10px;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  text-transform: uppercase;
}

.card-content h3 {
  margin: 1rem 0 0.5rem 0;
}

.card-content p {
  font-size: 14px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.card-footer img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.card-footer .author {
  flex: 1;
  margin-left: 1rem;
}

.author p {
  font-weight: 700;
  font-size: 14px;
}

.author small {
  font-size: 12px;
}

            
            
            `,
            'js goes here',
            'blogcard1',
            `<section class="main">

            <div class="container cards-container">
          
              <h1>Latest News from Blog</h1>
              <img class="deco" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fdivider-png-hd-divider-png-1589-304-1589.png&f=1&nofb=1">
          
              <div class="flex-container">
          
                <div href="#" class="card-box">
                  <img src="https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" class="card-img">
                  <div class="card-text">
                    <div class="card-data">
                      <p class="data-text">July 03, 2017</p>
                      <p class="data-text   text-right">Posted by <a href="#" class="autor">FreshMeal</a></p>
                      <p class="data-text">12 Comments</p>
                    </div>
          
                    <a href="#" class="card-title">Lorem Ipsum is simply dummy text of the printing</a>
                    <p class="card-description">It is a long established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                      a more letters.</p>
                  </div>
                </div>
          
                <div href="#" class="card-box">
                  <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="card-img">
          
                  <div class="card-data">
                    <p class="data-text">July 03, 2017</p>
                    <p class="data-text   text-right">Posted by <a href="#" class="autor">FreshMeal</a></p>
                    <p class="data-text">12 Comments</p>
                  </div>
                  <a href="#" class="card-title">Lorem Ipsum is simply dummy text of the printing</a>
                  <p class="card-description">It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more letters.</p>
                </div>
          
              </div>
          
            </div>
          </section>`,
            `*,
* ::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: #333333;
  letter-spacing: 0.01rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.main {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
  overflow: hidden;
  background-color: whitesmoke;
}

.container {
  max-width: 80rem;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3rem 0;
}

.container .deco {
  height: 3rem;
  width: 23rem;
  filter: brightness(120%);
}

.flex-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
}
.cards-container {
  padding: 2rem;
}

.card-box {
  display: flex;
  flex-flow: column;
  width: 36.3rem;
  background-color: white;
  font-size: 0.92rem;
  box-shadow: 0px 3px 4px gray;
}

.card-img {
  height: 23rem;
}

.card-data,
.card-title,
.card-description {
  padding: 0 1.5rem;
}

.card-data {
  padding-top: 2rem;
  padding-bottom: 1.3rem;
  width: 100%;
  font-size: 1rem;
}

.card-data p {
  display: inline-block;
}

.text-right {
  margin-left: 9.4rem;
  margin-right: 1rem;
}

.autor {
  font-weight: bold;
}

.card-title {
  display: block;
  margin: 0;
  margin-bottom: 1.3rem;
  font-size: 1.5em;
  font-weight: bold;
}
.card-title:hover {
  background-color: rgb(205, 202, 202);
}

.card-description {
  font-size: 1.15rem;
  line-height: 1.7rem;
  padding-bottom: 2rem;
}

@media all and (max-width: 1200px) {
  .card-box {
    width: 30rem;
  }

  .container {
    padding: 1%;
  }

  .card-data {
    display: flex;
    justify-content: space-between;
  }

  .text-right {
    margin: 0;
  }

  .card-img {
    height: 20rem;
  }
}

@media all and (max-width: 1000px) {
  .flex-container {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .card-box {
    width: 100%;
  }

  .card-img {
    height: 27rem;
  }
}

@media all and (max-width: 550px) {
  .card-img {
    height: 20rem;
  }

  .data-text {
    font-size: 0.85rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-description {
    font-size: 1rem;
  }
}
`,
'js',
`blogcard4`,
`<head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<!-- Code by Angela Delise  
https://codepen.io/angeladelise/pen/Bajdvav
-->

</head>

<body>

<div class="wrapper">
  <div class="card">
    <div class="card-banner">
      <p class="category-tag popular">Popular</p>
      <img class="banner-img" src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    </div>
    <div class="card-body">
      <p class="blog-hashtag">#webdevelopment #frontend</p>
      <h2 class="blog-title">What is the future of front end development?</h2>
      <p class="blog-description">My thoughts on the future of front end web development</p>

      <div class="card-profile">
        <img class="profile-img" src='https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
        <div class="card-profile-info">
          <h3 class="profile-name">Maya Eleanor Peña</h3>
          <p class="profile-followers">1.2k followers</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-banner">
      <p class="category-tag technology">Technology</p>
      <img class="banner-img" src='https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    </div>
    <div class="card-body">
      <p class="blog-hashtag">#photographer #gearupgrade #selfmade</p>
      <h2 class="blog-title">Photography gear you need this year</h2>
      <p class="blog-description">Looking to upgrade your gear? Here is the list of the best photography tools for this year</p>

      <div class="card-profile">
        <img class="profile-img" src='https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
        <div class="card-profile-info">
          <h3 class="profile-name">Darrell Steward</h3>
          <p class="profile-followers">45.7k followers</p>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-banner">
      <p class="category-tag psychology">Psychology</p>
      <img class="banner-img" src='https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    </div>
    <div class="card-body">
      <p class="blog-hashtag">#mediation #mentalwellness</p>
      <h2 class="blog-title">Mediation and Mental Wellness Best Practices</h2>
      <p class="blog-description">Mediation has transformed my life. These are the best practices to get into the habit</p>

      <div class="card-profile">
        <img class="profile-img" src='https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
        <div class="card-profile-info">
          <h3 class="profile-name">Savannah Nguyen</h3>
          <p class="profile-followers">318 followers</p>
        </div>
      </div>
    </div>
  </div>

</div>

</body>`,
`:root {
  --clr-gray-light: #d7dfe2;
  --clr-gray-med: #616b74;
  --clr-gray-dark: #414b56;
  --clr-link: #4d97b2;
  --clr-popular: #ef257a;
  --clr-technology: #651fff;
  --clr-psychology: #e85808;
}

* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

body {
  margin: 2rem;
  color: var(--clr-gray-dark);
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  overflow: hidden;
  box-shadow: 0px 2px 20px var(--clr-gray-light);
  background: white;
  border-radius: 0.5rem;
  position: relative;
  width: 350px;
  margin: 1rem;
  transition: 250ms all ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 2px 40px var(--clr-gray-light);
}

.banner-img {
  position: absolute;
  object-fit: cover;
  height: 14rem;
  width: 100%;
}

.category-tag {
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  background: red;
  padding: 0.5rem 1.3rem 0.5rem 1rem;
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  top: 1rem;
  border-radius: 0 2rem 2rem 0;
}

.popular {
  background: var(--clr-popular);
}

.technology {
  background: var(--clr-technology);
}

.psychology {
  background: var(--clr-psychology);
}

.card-body {
  margin: 15rem 1rem 1rem 1rem;
}

.blog-hashtag {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--clr-link);
}

.blog-title {
  line-height: 1.5rem;
  margin: 1rem 0 0.5rem;
}

.blog-description {
  color: var(--clr-gray-med);
  font-size: 0.9rem;
}

.card-profile {
  display: flex;
  margin-top: 2rem;
  align-items: center;
}

.profile-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.card-profile-info {
  margin-left: 1rem;
}

.profile-name {
  font-size: 1rem;
}

.profile-followers {
  color: var(--clr-gray-med);
  font-size: 0.9rem;
}
`,
'js'
        ],

        [
            '',
            '<p> Sorry We don\t have card for ecommerce </p>',
            'p{background-color:lightblue;margin:20px;padding:20px;}',
            ''
           
        ],
        [
          '',
          '<p> Sorry We don\t have card for portfolio </p>',
          'p{background-color:lightblue;margin:20px;padding:20px;}',
          ''
        ]


    ],
    footer: [
        [
            'abdyblogfooter',
            `<div class="footer">
       <div class="footerBottom">
        <p> © 2021 ecomerce | something@gmail.com</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </div>
    </div>
    `,
            `   .footer{
        width: 100%;
      }
      
    
      
      .footerBottom {
        background-color: rgb(124, 49, 19);
        text-align: center;
        padding: 25px;
        height: 15vh;
        color: white;
      }
      
      .footer p {
        color: white;
        text-align: center;
      }
      
      .footer__instagram,
      .footer__facebook {
        margin: 10px;
        font-size: large;
        
      }
      svg{
        margin:10px;
      }
    `,
            'js goes here',

            'blogfooter1',
            `
   <head>
              <script src="https://cdn.tailwindcss.com"></script>
            
              <!--Font-Awesome-->
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
            
           
            
              <div class="my-[75px]">
            
                <div class="flex flex-col mx-auto mb-[75px] max-w-[1500px] h-auto">
            
                  <div class="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-[45px] py-[30px] lg:py-0 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-auto lg:h-[380px] bg-white">
            
                    <div class="lg:w-4/12">
            
                      <div class="flex items-center justify-center gap-x-[8px] mb-[30px] text-gray-900"><i class="fa-solid fa-2xl fa-laptop-code"></i>Lorem ipsum dolor sit</div>
            
                      <div class="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum doloremque praesentium repudiandae similique quas ipsa!</div>
            
                    </div>
            
                    <div class="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-[60px] gap-x-[90px] sm:gap-x-0 lg:w-7/12">
            
                      <div class="text-center sm:text-left">
            
                        <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">Product</div>
            
                        <ul class="flex flex-col gap-[10px] text-gray-600">
                          <a class="hover:underline" href="#">
                            <li>Overview</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Features</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Solutions</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Tutorials</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Pricing</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Releases</li>
                          </a>
                        </ul>
            
                      </div>
            
                      <div class="text-center sm:text-left">
            
                        <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">Company</div>
            
                        <ul class="flex flex-col gap-[10px] text-gray-600">
                          <a class="hover:underline" href="#">
                            <li>About us</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Careers</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Press</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>News</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Media kit</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Contact</li>
                          </a>
                        </ul>
            
                      </div>
            
                      <div class="text-center sm:text-left">
            
                        <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">Resources</div>
            
                        <ul class="flex flex-col gap-[10px] text-gray-600">
                          <a class="hover:underline" href="#">
                            <li>Blog</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Newsletter</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Events</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Help centre</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Tutorials</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Support</li>
                          </a>
                        </ul>
            
                      </div>
            
                      <div class="text-center sm:text-left">
            
                        <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">Social</div>
            
                        <ul class="flex flex-col gap-[10px] text-gray-600">
                          <a class="hover:underline" href="#">
                            <li>Twitter</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>LinkedIn</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Facebook</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Github</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>AngelList</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Dribbble</li>
                          </a>
                        </ul>
            
                      </div>
            
                      <div class="text-center sm:text-left">
            
                        <div class="mb-[18px] text-gray-400 text-sm font-bold select-none">Legal</div>
            
                        <ul class="flex flex-col gap-[10px] text-gray-600">
                          <a class="hover:underline" href="#">
                            <li>Terms</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Privacy</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Cookies</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Licenses</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Settings</li>
                          </a>
                          <a class="hover:underline" href="#">
                            <li>Contact</li>
                          </a>
                        </ul>
            
                      </div>
            
                    </div>
            
                  </div>
            
                  <div class="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-gray-200">
            
                    <div class="text-gray-600">Lorem ipsum dolor sit</div>
            
                    <ul class="flex gap-[15px] text-gray-600 cursor-pointer">
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-twitter"></i></li>
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-linkedin"></i></li>
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-facebook"></i></li>
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-github"></i></li>
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-angellist"></i></li>
                      <li class="ease-in duration-200 hover:text-gray-400"><i class="fa-brands fa-xl fa-dribbble"></i></li>
                    </ul>
            
                  </div>
            
               
          
            
    
          
    `,
            `   @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

            * {
              margin: 0;
              padding: 0;
            
              box-sizing: border-box;
            }
            
          
            
    `,
            'js goes here',
            'blogfooter2',
            `<footer>
            <div class="layout">
              <div class="footer-wrapper clearfix">
                <div class="grid-3 footer-logo">
                  <a href="index.php"><img alt="html layout logo" src=
                  "http://gtrickstechnology.com/img/logo.png"></a>
                  <p class="footer-text">Lorem ipsum dolor sit amet, consect tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven.</p>
                </div>a
                <div class="grid-3">
                  <p class="footer-heading">link</p>
                  <ul class="footermenu">
                    <li>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">team</a>
                    </li>
                    <li>
                      <a href="#">blog</a>
                    </li>
                  </ul>
                </div>
                <div class="grid-3">
                  <p class="footer-heading">link</p>
                  <ul class="footer-contact">
                    <li><i class="fa fa-home"></i><span>address:</span> O Html layout, 54100
                    new delhi</li>
                    <li>
                      <i class="fa fa-phone"></i><span>phone:</span> <a href=
                      "tel:88%2002%208714612">+91 8173096601</a>
                    </li>
                    <li>
                      <i class="fa fa-envelope-o"></i><span>e-mail:</span> <a href=
                      "mailto:msujeet0@gaiml.com">Msujeet0@gmail.com</a>
                    </li>
                    <li>
                      <i class="fa fa-chrome"></i><span>web:</span> <a href=
                      "http://htmllayout.in">www.htmllayout.in</a>
                    </li>
                  </ul>
                </div>
                <div class="grid-3">
                  <p class="footer-heading">recent posts</p>
                  <ul class="footerblog">
                    <li>
                      <a href="#">The Green Fields of Spring</a>
                      <p>13th Jun 2014</p>
                    </li>
                    <li>
                      <a href="#">This is a Video Post</a>
                      <p>18th Nov 2014</p>
                    </li>
                    <li>
                      <a href="#">Satisfaction Lies in the Effort</a>
                      <p>13th Jun 2014</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer><!-- footer End --> `,
      `* {
        box-sizing: border-box;
      }
      
      * {
        list-style: none;
        text-decoration: none;
        margin: 0;
      }
      /* force scrollbar */
      html {
        overflow-y: scroll;
      }
      
     
      
      
      ul {
        padding: 0;
      }
      
      .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
      
      .clearfix {
        display: inline-block;
      }
      
      /* start commented backslash hack \*/
      * html .clearfix {
        height: 1%;
      }
      
      .clearfix {
        display: block;
      }
      
      /* close commented backslash hack */
      .layout {
        margin: 0 auto;
        max-width: 1170px;
        width: 100%;
        padding: 0 15px;
      }
      
      .grid-3 {
        width: 25%;
        float: left;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
      }
      
      footer {
        background-color: #34495e;
      }
      
      .footer-wrapper {
        padding: 100px 0;
      }
      
      .footer-text {
        color: #dcdcdc;
        font-size: 14px;
        margin: 40px 0 0;
      }
      
      footer .footer-heading {
        color: #e1e1e1;
        font: 18px/19px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      
      .footer-wrapper ul.footermenu,.footer-contact,.footerblog {
        margin-top: 32px;
      }
      
      .footermenu > li {
        line-height: 25px;
      }
      
      .footer-wrapper ul.footermenu li a::before {
        content: "-";
        margin: 0 5px 0 0;
      }
      
      .footermenu li a {
        color: #dcdcdc;
        font-size: 14px;
        line-height: 34px;
        text-transform: capitalize;
      }
      
      .footer-contact li i {
        font-size: 14px;
        margin: 0 8px 0 0;
        color: #fff;
      }
      
      .footer-contact li span {
        color: #fff;
        font-size: 14px;
      }
      
      .footer-contact li,.footer-contact li a {
        color: #c7c7c7;
        font: 13px/28px "Open Sans",sans-serif;
        letter-spacing: 1.2px;
      }
      
      .footerblog li,.footerblog li a {
        color: #b4b4b4;
        font: 13px/18px "Open Sans",sans-serif;
        letter-spacing: 1.2px;
        padding-bottom: 10px;
      }
      
      .footerblog li p {
        color: #c7c7c7;
        font: italic 12px/18px "Open Sans",sans-serif;
      }
      
      footer a:hover {
        color: #22c489;
      }
      
      @media (max-width:980px) {
        .layout {
          width: 767px;
        }
      
        .grid-3 {
          width: 50%;
        }
      
        .footer-heading {
          margin-top: 18px;
        }
      }
      
      @media (max-width:640px) {
        .layout {
          width: 300px;
        }
      
        .grid-3 {
          width: 100%;
        }
      
        .footermenu > li {
          display: inline-block;
          float: none;
          line-height: 25px;
        }
      }
      
      
      `
        ],

        [
            'blogfooter0',
            `<div class="container">
            <!-- Footer -->
            <div class="footer">
              <div class="container">
                <div class="row">
                  <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and iso mobile phone.</p>
                    <div class="app-logo">
                      <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                      <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
                    </div>
                  </div>
            
                  <div class="footer-col-2">
                    <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt="" />
                    <p>
                      Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                      Sports Accessible to the Many.
                    </p>
                  </div>
            
                  <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>Coupons</li>
                      <li>Blog Post</li>
                      <li>Return Policy</li>
                      <li>Join Affiliate</li>
                    </ul>
                  </div>
            
                  <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>YouTube</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <p class="copyright">Copyright &copy; 2021 - Red Store</p>
              </div>
            </div>
            
         
    `,
            `* {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: "Poppins", sans-serif;
            }
            
            
            
            .footer {
              background: #000;
              color: #8a8a8a;
              font-size: 14px;
              padding: 60px 0 20px;
            }
            
            .footer p {
              color: #8a8a8a;
            }
            
            .footer h3 {
              color: #ffffff;
              margin-bottom: 20px;
            }
            
            .footer-col-1,
            .footer-col-2,
            .footer-col-3,
            .footer-col-4 {
              min-width: 250px;
              margin-bottom: 20px;
            }
            
            .footer-col-1 {
              flex-basis: 30%;
            }
            
            .footer-col-2 {
              flex: 1;
              text-align: center;
            }
            
            .footer-col-2 img {
              width: 180px;
              margin-bottom: 20px;
            }
            
            .footer-col-3,
            .footer-col-4 {
              flex-basis: 12%;
              text-align: center;
            }
            
            ul {
              list-style-type: none;
            }
            
            .app-logo {
              margin-top: 20px;
            }
            .app-logo img {
              width: 140px;
            }
            
            .footer hr {
              border: none;
              background: #b5b5b5;
              height: 1px;
              margin: 20px 0;
            }
            
            .copyright {
              text-align: center;
            }
            
            .menu-icon {
              width: 28px;
              margin-left: 20px;
              display: none;
            }
            
            /* media query for menu */
            
            @media only screen and (max-width: 800px) {
              nav ul {
                position: absolute;
                top: 70px;
                left: 0;
                background: #333;
                width: 100%;
                overflow: hidden;
                transition: max-height 0.5s;
              }
              nav ul li {
                display: block;
                margin-right: 50px;
                margin-top: 10px;
                margin-bottom: 10px;
              }
            
              nav ul li a {
                color: #fff;
              }
              .menu-icon {
                display: block;
                cursor: pointer;
              }
            }
            
            /* all products page */
            
            .row-2 {
              justify-content: space-between;
              margin: 100px auto 50px;
            }
            
            select {
              border: 1px solid #ff523b;
              padding: 5px;
            }
            
            select:focus {
              outline: none;
            }
            
            .page-btn {
              margin: 0 auto 80px;
            }
            
            .page-btn span {
              display: inline-block;
              border: 1px solid #ff523b;
              margin-left: 10px;
              width: 40px;
              height: 40px;
              text-align: center;
              line-height: 40px;
              cursor: pointer;
            }
            
            .page-btn span:hover {
              background: #ff523b;
              color: #ffffff;
            }
            
            /* single product details */
            
            .single-product {
              margin-top: 80px;
            }
            
            .single-product .col-2 img {
              padding: 0;
            }
            
            .single-product .col-2 {
              padding: 20px;
            }
            
            .single-product h4 {
              margin: 20px 0;
              font-size: 22px;
              font-weight: bold;
            }
            
            .single-product select {
              display: block;
              padding: 10px;
              margin-top: 20px;
            }
            
            .single-product input {
              width: 50px;
              height: 40px;
              padding-left: 10px;
              font-size: 20px;
              margin-right: 10px;
              border: 1px solid #ff523b;
            }
            
            input:focus {
              outline: none;
            }
            
            .single-product .fas {
              color: #ff523b;
              margin-left: 10px;
            }
            
            .small-img-row {
              display: flex;
              justify-content: space-between;
            }
            
            .small-img-col {
              flex-basis: 24%;
              cursor: pointer;
            }
            
            /* cart items */
            
            .cart-page {
              margin: 90px auto;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
            }
            
            .cart-info {
              display: flex;
              flex-wrap: wrap;
            }
            
            th {
              text-align: left;
              padding: 5px;
              color: #ffffff;
              background: #ff523b;
              font-weight: normal;
            }
            td {
              padding: 10px 5px;
            }
            
            td input {
              width: 40px;
              height: 30px;
              padding: 5px;
            }
            
            td a {
              color: #ff523b;
              font-size: 12px;
            }
            
            td img {
              width: 80px;
              height: 80px;
              margin-right: 10px;
            }
            
            .total-price {
              display: flex;
              justify-content: flex-end;
            }
            
            .total-price table {
              border-top: 3px solid #ff523b;
              width: 100%;
              max-width: 400px;
            }
            
            td:last-child {
              text-align: right;
            }
            
            th:last-child {
              text-align: right;
            }
            /* account page */
            .account-page {
              padding: 50px 0;
              background: radial-gradient(#fff, #ffd6d6);
            }
            
            .form-container {
              background: #ffffff;
              width: 300px;
              height: 400px;
              position: relative;
              text-align: center;
              padding: 20px 0;
              margin: auto;
              box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            
            .form-container span {
              font-weight: bold;
              padding: 0 10px;
              color: #555555;
              cursor: pointer;
              width: 100px;
              display: inline-block;
            }
            
            .form-btn {
              display: inline-block;
            }
            
            .form-container form {
              max-width: 300px;
              padding: 0 20px;
              position: absolute;
              top: 130px;
              transition: transform 1s;
            }
            
            form input {
              width: 100%;
              height: 30px;
              margin: 10px 0;
              padding: 0 10px;
              border: 1px solid #ccc;
            }
            
            form .btn {
              width: 100%;
              border: none;
              cursor: pointer;
              margin: 10px 0;
            }
            
            form .btn:focus {
              outline: none;
            }
            
            #LoginForm {
              left: -300px;
            }
            
            #RegForm {
              left: 0;
            }
            
            form a {
              font-size: 12px;
            }
            
            #Indicator {
              width: 100px;
              border: none;
              background: #ff523b;
              height: 3px;
              margin-top: 8px;
              transform: translateX(100px);
              transition: transform 1s;
            }
            
            /* media query for less than 600 screen size */
            
            @media only screen and (max-width: 600px) {
              .row {
                text-align: center;
              }
              .col-2,
              .col-3,
              .col-4 {
                flex-basis: 100%;
              }
            
              .single-product .row {
                text-align: left;
              }
            
              .single-product .col-2 {
                padding: 20px 0;
              }
              .single-product h1 {
                font-size: 26px;
                line-height: 32px;
              }
              .cart-info p {
                display: none;
              }
            }
            
    `,
            'js goes here',
            'ye kal navigation',
            `






            <!-- Footer -->
            <footer class="footer">
              <section class="links">
                  <ul>
                  <li><h1>Get to Know Us</h1></li>
                  <li><a>Careers</a></li>
                  <li><a>Amazon and Our Planet</a></li>
                  <li><a>Investor Relations</a></li>
                  <li><a>Press Releases</a></li>
                </ul>
            
                <ul>
                  <li><h1>Make money with Us</h1></li>
                  <li><a>Sell on Amazon</a></li>
                  <li><a>Amazon Associates</a></li>
                  <li><a>Sell on Amazon Handmade</a></li>
                  <li><a>Advertise Your Products</a></li>
                  <li><a>Independently Publish with Us</a></li>
                  <li><a>Host an Amazon Hub</a></li>
                </ul>
            
                <ul>
                  <li><h1>Amazon Payment Products</h1></li>
                  <li><a>Shop with Points</a></li>
                  <li><a>Reload Your Balance</a></li>
                  <li><a>Amazon Currency Converter</a></li>
                  <li><a>Gift Cards</a></li>
                  <li><a>Amazon Cash</a></li>
                </ul>
              </section>
              <h1 class="footer-text">Amazon.com</h1>
            </footer>
            <!-- Footer ends-->`,
            `/* GOOGLE FONTS */
            @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
            /* GOOGLE FONTS ENDS */
            
            /* COLORS */
            :root{
              --white: #fff;
              --blue: #232F3E;
              --orange: #FF9900;
              --dark-orange: #e08600;
            }
            /* COLORS ENDS */
            
            /* RESET */
            
            *,
            *::before,
            *::after{
              box-sizing: border-box;
              padding: 0;
              margin: 0;
            }
            
            
            
            /* FOOTER */
            
            .footer{
              background-color: var(--blue);
            }
            
            .footer .footer-text{
              color: var(--white);
              text-align: center;
              padding: 2rem;
            }
            
            .links{
              color: white;
              display: flex;
              justify-content: space-evenly;
              flex-wrap: wrap;
              padding: 1rem 0;
            }
            
            .links ul{
              margin: 0.5rem;
            }
            
            .links li{
              list-style: none;
            }
            
            .links li h1{
              cursor: default;
              font-size: 16px;
            }
            
            .links li a{
              font-size: 12px;
              cursor: pointer;
            }
            
            /* FOOTER ENDS */`,
            'js goes here',
        ],
        [
          'portfoliofooter2',
          `<div class="container">
          <ion-icon name="logo-designernews" class="logo"></ion-icon>
        
          <div class="main">
            <div class="col1">
              <p class="heading">
                Platform
              </p>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">What's new</a>
                </li>
              </ul>
            </div>
        
            <div class="col2">
              <p class="heading">Resources</p>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
        
            <div class="col3">
              <p class="heading">In partnership with</p>
              <ion-icon name="logo-deviantart" class="partner-logo"></ion-icon>
            </div>
          </div>
        
          <div class="bottom">
            <p class="copyright">
              © 2020 boardme. All rights reserved.
            </p>
        
            <div class="policy">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        
          <div class="circle c1"></div>
          <div class="circle c2"></div>
          <div class="circle c3"></div>
        </div>
        
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
          `@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

        
          
          .container {
            background: white;
            width: 100%;
            max-width: 800px;
            border-radius: 15px;
            margin: 0 auto;
            margin-top: 50px;
            padding: 40px;
            box-shadow: #cfd9f6 0 10px 10px;
            position: relative;
            overflow: hidden;
          }
          
          .logo {
            font-size: 80px;
            color: #284dd9;
          }
          
          .main {
            display: flex;
            gap: 50px;
            margin: 50px 0;
          }
          .col1 {
            flex: 2;
          }
          .col2 {
            flex: 2;
          }
          .col3 {
            flex: 3;
          }
          .heading {
            font-size: 16px;
            font-weight: 600;
          }
          .main a {
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            margin: 5px 0;
            color: black;
          }
          .main a:hover {
            color: #284dd9;
          }
          .partner-logo {
            font-size: 50px;
            color: tomato;
            margin-top: 10px;
          }
          
          .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .copyright {
            color: gray;
          }
          .policy a {
            color: black;
            margin-left: 20px;
          }
          
          .circle {
            position: absolute;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            border: solid 2px #d2dcf7;
          }
          .c1 {
            top: -600px;
            left: -500px;
          }
          .c2 {
            bottom: -600px;
            right: -200px;
          }
          .c3 {
            bottom: -400px;
            right: -500px;
          }
          `,
          'js goes here',
          'portfoliofooter3',
          `<footer>
          <div class="main">
            <div class="col1">
              <h3 class="heading">
                About the store
              </h3>
              <ul>
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    Become a customer
                  </a>
                </li>
                <li>
                  <a href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">
                    Return policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
        
            <div class="col2">
              <h3 class="heading">
                Language
              </h3>
              <div class="languages">
                <a href="#">Deutsch</a>
                <a href="#">English</a>
                <a href="#">Espaṅol</a>
                <a href="#">Français</a>
                <a href="#">Indonesian</a>
                <a href="#">Italian</a>
                <a href="#">Nederlands</a>
                <a href="#">Polnisch</a>
                <a href="#">Português</a>
                <a href="#">pyccknṅ</a>
                <a href="#">Tiéng Viêt</a>
                <a href="#">Türkçe</a>
              </div>
            </div>
        
            <div class="col3">
              <h3 class="heading">
                Get in touch
              </h3>
              <div class="social">
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        
          <p class="terms">
            <a href="#">Terms of purchase</a>
            <a href="#">Security and privacy</a>
            <a href="#">Newsletter</a>
          </p>
        </footer>
        
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
        `@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: open sans;
          transition: ease 0.5s;
          text-decoration: none;
          color: white;
          list-style-type: none;
        }
        
        
        
        footer {
          background: #1e3161;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          margin-top: 50px;
          border-radius: 15px;
          box-shadow: #2f4374 0 10px 20px 5px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
        
        .main {
          width: 100%;
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
        }
        .heading {
          margin-bottom: 15px;
        }
        .col1 {
          flex: 1;
          min-width: 200px;
        }
        .col2 {
          flex: 2;
          min-width: 300px;
        }
        .col3 {
          flex: 1;
          min-width: 200px;
        }
        
        .col1 a {
          display: inline-block;
          padding: 7px 0;
          font-size: 14px;
        }
        .col1 a:hover {
          color: #58bed5;
        }
        
        .col2 .languages {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 14px;
        }
        .col2 a {
          display: inline-block;
          padding: 3px 5px;
          border-radius: 3px;
        }
        .col2 a:hover {
          background: #58bed5;
        }
        
        .social {
          display: flex;
          gap: 20px;
        }
        .col3 ion-icon {
          font-size: 30px;
        }
        .social a:hover ion-icon {
          color: #5ac1d8;
        }
        
        .terms {
          display: flex;
          gap: 20px;
          font-size: 12px;
        }
        .terms a {
          color: #7783a0;
        }
        `,
        'js goes here'
     
        ]
    ],
    banner:[
      [
        '',
        `<p> Sorry We don\'t have banner for blog </p>`,
        `p{background-color:lightblue;margin:20px;padding:20px;}
        `,
        'js goes here'
      ],
      [
        'ecomercebanner0',
        `<section class="banner">
        <div class="content">
          <div class="general-info">
            <p>Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Phasellus a est. Curabitur vestibulum aliquam leo. Sed cursus turpis vitae tortor. Fusce pharetra convallis urna. </p>
          </div>
          <div class="principal">
            <h1>Proin faucibus arcu quis ante</h1>
            <a href="#" class="link-1 electronic">lorem <span>ipsum</span></a>
            <p>Etiam vitae tortor <span>phasellus</span> morbi ac</p>
            <a href="#" class="link-2">Maecenas</a>
          </div>
          <picture>
            <img src="https://i.imgur.com/SQOuQCV.png" alt="" usemap="#image-map">
      
            <map name="image-map">
              <area target="_blank" alt="Washer" title="Washer" href="#" coords="8,158,10,257,88,257,90,159,79,129,22,128" shape="poly">
              <area target="_blank" alt="Refrigerator" title="Refrigerator" href="#" coords="97,227,95,35,115,31,131,31,148,31,159,31,173,35,174,225" shape="poly">
              <area target="_blank" alt="Stove" title="Stove" href="#" coords="182,156,191,138,191,131,257,130,258,138,266,154,263,253,183,251" shape="poly">
            </map>
      
          </picture>
          
        </div>
      </section>`,
      `:root {
        --text-primary-color: white;
        --background-primary-color: #18649e;
        --background-secondary-color: #00bfba;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        position: relative;
        z-index: -1;
      }
      
      .banner {
        background: var(--background-primary-color);
        min-height: 50vh;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: -1;
      }
      
      .banner .content {
        height: 100%;
        width: 100%;
        max-width: 1400px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      
      
      
      .banner .content .principal {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
      }
      
      .banner .content .general-info {
        position: absolute;
        bottom: 0;
        background: var(--background-secondary-color);
        width: 100%;
        text-align: center;
        padding: 5px;
      }
      
      .banner .content .general-info p {
        max-width: 1400px;
        color: var(--text-primary-color);
        margin: 0 auto;
        font-size: 1rem;
      }
      
      @media screen and (max-width: 700px) {
        .banner .content {
          flex-direction: column-reverse;
        }
        
        .banner .content .general-info {
          margin: 20px 0px 0px 0px;
          position: relative;
          width: 100%;
          background: transparent;
        }
        
        .banner .content .general-info p {
          font-size: 0.8rem;
        }
        
      }
      
      .banner .content .principal h1 {
        color: var(--text-primary-color);
        font-weight: bold;
        font-size: 2em;
      }
      
      .banner .content .principal a {
        text-decoration: none;
      }
      
      .banner .content .principal .link-1 {
        color: var(--text-primary-color);
        padding: 5px 20px;
        font-size: 2em;
        width: max-content;
        background: transparent;
        border-radius: 24px 0px;
        position: relative;
        background: var(--background-primary-color);
        transition: border-width 0.05s ease-in-out;
      }
      
      .banner .content .principal .link-1:before {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 24px 0px;
        transform: scale(1.02, 1.08);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: radial-gradient(
            white,
            white,
            white,
            white,
            transparent,
            transparent
          )
          no-repeat;
        background-size: 100% 75%;
        animation: electronic 5s infinite linear;
      }
      
      .banner .content .principal .link-2 {
        color: var(--text-primary-color);
        padding: 0.2em 1em;
        border-radius: 0.3em;
        background: var(--background-secondary-color);
        font-size: 1.3em;
        width: max-content;
      }
      
      .banner .content .principal a span,
      .banner .content .principal p span {
        font-weight: bold;
      }
      
      .banner .content .principal p {
        color: var(--text-primary-color);
        font-size: 1.4em;
        font-weight: 600;
      }
      
      @keyframes electronic {
        0%,
        100% {
          background-position: 20px -30px;
        }
        25% {
          background-position: 150px 5px;
        }
        50% {
          background-position: 20px 40px;
        }
        75% {
          background-position: -100px 5px;
        }
      }
      
      `,
      'js goes here',
      'ecomercebanner1',
      `    <div id="banner" class="banner">
      <h2 class="bannerContent">get shipping discounts, free samples, and more from trusted suppliers</h2>
      <button class="btnsvg" type="button">Explore Now</button>
      <svg id="xicon" class="xicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>   
 </div>`,
      `.banner {
        background-color: #98c1d9;
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bannerContent {
        color: #293241;
        flex-grow: 2;
        margin-left: 10%;
      }
      .xicon{
        flex-grow: 1;
      }
      .btnsvg {
        flex-grow: 0.5;
      }
      #top {
        background-color: #3d5a80;
        height: 100px;
        padding: 0px 10px 0px 10px;
      }`,
      'js goes here'

      ],
      [
        '',
        `<p> Sorry We don\'t have banner for portfolio </p>`,
        `p{background-color:lightblue;margin:20px;padding:20px;}
        `,
        'js goes here'
      ]
    ]
}


function render() {
    iframeComponent.open();
    iframeComponent.writeln(`
       ${html.value}
     <style>${`body{padding:0;margin:0;}`+css.value}
      </style>
       <script>${js.value}</script>`);
    iframeComponent.close();
}

/**
 * Create listener to call the render
 * always after a keypress.
 */
function compile() {
    document.addEventListener('keyup', function() {
        render();
    });
};

const sendMessage = (msg) => {
	//Create message
	const block = document.createElement('div');
							block.setAttribute('class', 'msg-text owner');
	const message = document.createElement('span');
							message.setAttribute('class', 'text');
							message.innerText = String(msg);
	
	//Append message
	block.appendChild(message);
	messages.appendChild(block);
	messages.scrollTo(0, 99999);
	
	//Clear input
	form.value = '';
	form.focus();
};

const dispMessage = (msg) => {
	//Create message
	const block = document.createElement('div');
							block.setAttribute('class', 'msg-text ');
	const m = document.createElement('span');
							m.setAttribute('class', 'text');
							m.innerText = String(msg);
	
	//Append message
	block.appendChild(m);
	//message.replaceChild(block,message.lastElementChild);
  
  let count = message.childElementCount -1;
  message.replaceChild(block,message.children[count]);
	messages.scrollTo(0, 99999);

};

const chatanim = (msg) => {
  let span = document.querySelector('text');
	//Create message
	const block = document.createElement('div');
							block.setAttribute('class', 'msg-text ');
	const message = document.createElement('span');
							message.setAttribute('class', 'text');
							
  const animelement = document.createElement('div');
              animelement.setAttribute('class','loader');
	
	//Append message
	block.appendChild(message);
  block.appendChild(animelement);
	messages.appendChild(block);
	messages.scrollTo(0, 99999);
	

};

    
//lets start by letting user create new project
quest = 'What type of website you want to make';
chatanim();
setTimeout(() => {
  dispMessage(quest);
  readOut(quest);
  chatanim();
}, 3000); 

setTimeout(() => {
  dispMessage('you can chose blog, eccomerce or portfolio');
  
}, 4000); 







html.innerText =  `<div class="alert alert-info">This is a prototype. I took majority of templates from random websites just to showcase what this website can do. I didn't take time to make every single template on this website. Plus i can also add elements that can be made, for now its just banner navigation section card and footer.  </div> `;
css.innerText =  `.alert {
  background-color: rgba(54, 145, 175,0.1);
  padding: 40px;
  border: 1px solid rgb(54, 145, 175);
  font-size: 2rem;
  margin: 30vh 30px 30px 30px;
 
}` ; 

setTimeout(() => {
  distroyNotif();
}, 4000);
function distroyNotif(){
  html.innerHTML = '';
  css.innerHTML = '';
}


function createNavFot() {

    //footer and navigation are common to all pages. so prepare separate object for them
    p.navigation = {
        html: '',
        css: '',
        js: ''
    }
    p.c = {
      html:'',
      css:'',
      js:'',

    }
   
    p.footer = {
        html: '',
        css: '',
        js: ''
    }

}
// function to read the massage
function readOut(massage) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = massage;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}
//Send messages
form.addEventListener('keypress', function(ev){
	if(ev.key === 'Enter' && input.value){
		ev.preventDefault();
		const msg = form.value.toLowerCase();
		lobby(msg);
   
    
	};
});
sendd.addEventListener('click', () => {
	const msg = form.value;
	if(msg) lobby(msg);
  
});
recognition.onresult = function(e){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    lobby(transcript.toLowerCase());
    render();
    
}
// adding eventlistner to voice
mic.addEventListener('click', function() {
    recognition.start();
})

function lobby(quiz) {
    if (quest == 'What type of website you want to make' ) {
      createNavFot();
        possibleTypes.forEach(function(e) {
            if (quiz.includes(e)) {
                UserChosedType = quiz;
                if (UserChosedType == 'blog') {
                    i = 0;
                }
                if (UserChosedType == 'ecommerce') {
                    i = 1;
                }
                if (UserChosedType == 'portfolio') {
                    i = 2;
                }
        quest = 'what is the element you want to add';
        sendMessage(quiz);
        chatanim();
        setTimeout(() => {
          dispMessage(quest);
          readOut(quest);
          chatanim();  
        }, 500);
        setTimeout(() => {
          dispMessage('you can add card, banner, navigation, section or footer');
        
        }, 1000);
       
       
            }
        })
        return;
    }


    if (quest.includes("type next until you find") && quest.includes('you are satisfied with. when satisfied type ok')) {

        if (quiz.includes('next')) {
         
            sendMessage('next')
          
          
            if (je + 4 < type[lastElement][i].length) {
                je += 4
                addElement(lastElement, i, je);
            } else {
                je = 0;
                addElement(lastElement, i, je);
            }
            //while ye j + 4 is less than or equal to length of array
            //j + 4
            //else j = 0
        }
        if (quiz.includes('ok')) {
           sendMessage('ok');
            addElement(lastElement, i, je, true);
        }
        return;
    }
    elements.forEach(function(e) {
        if (quiz.includes(e)) {
            addElement(quiz, i, 0, false);
        }
    })
}



let times = 0;
let timess = 0;
let timesc = 0;
let timesf = 0;
let timesb = 0;
// today function
function addElement(value, i, j, final) {
    je = j;
   
    if (value.includes("banner")) {
      lastElement = 'banner';     
      html.innerText =  type.banner[i][j + 1]+p.navigation.html + p.c.html;
      css.innerText =  type.banner[i][j+2]+p.navigation.css + p.c.css ; 
      if (final) {
        if(UserChosedType == 'blog' || UserChosedType == 'portfolio'){
          p.c.html +=  type.banner[i][j + 1].replace('<p> Sorry We don\'t have banner for blog </p>','');
          p.c.css += type.banner[i][j+2].replace('p{background-color:lightblue;margin:20px;padding:20px;}','');
          p.c.html +=  type.banner[i][j + 1].replace('<p> Sorry We don\'t have banner for portfolio </p>','');
         
        }
          p.c.html +=  type.banner[i][j + 1];
          html.innerText =  p.navigation.html+p.c.html;
          p.c.css +=  type.banner[i][j + 2];
          css.innerText = p.navigation.css +   p.c.css;
         
          quest = "what is the element you want to add";
          chatanim();
          setTimeout(() => {
            dispMessage(quest);
            readOut(quest);
          }, 500);
          
          timesb = 0;
          
          
      }
      if (!final) {
         
          if(UserChosedType == 'blog' || UserChosedType == 'portfolio'){
            quest = 'what is the element you want to add';
          }else{
          quest = "type next until you find banner you are satisfied with. when satisfied type ok";
          }
          timesb++;
          if (timesb==1) {
              
              sendMessage(value);
              chatanim();
              setTimeout(() => {
                dispMessage(quest);
                readOut(quest);
              }, 500);
             
          }


      }   
    } else if (value.includes("navigation")) {
        lastElement = 'navigation';
        html.innerText =p.c.html+ type.navigation[i][j + 1];
        css.innerText = p.c.css+ type.navigation[i][j+2];
        if (final) {
            p.navigation.html = type.navigation[i][j + 1];
            html.innerText = p.navigation.html+p.c.html;;
            p.navigation.css = type.navigation[i][j + 2];
            css.innerText =  p.c.css+ p.navigation.css+p.c.css;;
           
            quest = "what is the element you want to add";
            chatanim();
            setTimeout(() => {
              dispMessage(quest);
              readOut(quest);
            }, 500);
            
            times = 0;

        }
        if (!final) {
            quest = "type next until you find navigation you are satisfied with. when satisfied type ok";
            times++;
            if (times == 1 ) {
             
                sendMessage(value);
                chatanim();
                setTimeout(() => {
                  dispMessage(quest);
                  readOut(quest);
                }, 500);
              
            }

           render();
        }
    } else if (value.includes("section")) {
        lastElement = 'section';     
        html.innerText = p.navigation.html + p.c.html+ type.section[i][j + 1];
        css.innerText = p.navigation.css + p.c.css + type.section[i][j+2]; 
        if (final) {
            p.c.html +=  type.section[i][j + 1];
            html.innerText =  p.navigation.html+p.c.html;
            p.c.css +=  type.section[i][j + 2];
            css.innerText = p.navigation.css +   p.c.css;
           
            quest = "what is the element you want to add";
            chatanim();
            setTimeout(() => {
              dispMessage(quest);
              readOut(quest);
            }, 500);
          
            timess = 0;
        }
        if (!final) {
            quest = "type next until you find section you are satisfied with. when satisfied type ok";
            timess++;
            if (timess==1) {
              sendMessage(value);
              chatanim();
                setTimeout(() => {
                  dispMessage(quest);
                readOut(quest);
                }, 500);
                
                
            }


        }

       
    } else if (value.includes("card")) {
      lastElement = 'card';     
      html.innerText = p.navigation.html + p.c.html+ type.card[i][j + 1];
      css.innerText = p.navigation.css + p.c.css + type.card[i][j+2]; 
      if (final) {
          p.c.html +=  type.card[i][j + 1];
          html.innerText =  p.navigation.html+p.c.html;
          p.c.css +=  type.card[i][j + 2];
          css.innerText = p.navigation.css +   p.c.css;
         
          quest = "what is the element you want to add";
          chatanim();
          setTimeout(() => {
            dispMessage(quest);
            readOut(quest);
          }, 500);
        
          timess = 0;
      }
      if (!final) {
          
        if(UserChosedType == 'ecommerce' || UserChosedType == 'portfolio'){
          quest = 'what is the element you want to add';
        }else{
        quest = "type next until you find banner you are satisfied with. when satisfied type ok";
        }
        
  
          timess++;
          if (timess==1) {
              
              sendMessage(value);
              chatanim();
              setTimeout(() => {
                dispMessage(quest);
                readOut(quest);
              }, 500);
             
          }


      }

     
  } else if (value.includes("footer")) {
        lastElement = 'footer'        
        html.innerText =p.navigation.html +p.c.html+ type.footer[i][j + 1];
        css.innerText = p.navigation.css+p.c.css+ type.footer[i][j+2];

        if (final) {
            p.footer.html = type.footer[i][j + 1];
            html.innerText = p.navigation.html +p.c.html+p.footer.html;
            p.footer.css = type.footer[i][j + 2];
            css.innerText =  p.navigation.css+p.c.css + p.footer.css;
           
            quest = "what is the element you want to add";
            chatanim();
            setTimeout(() => {
              dispMessage(quest);
              readOut(quest);
            }, 500);
            
            timesf = 0;
        }
        if (!final) {
            quest = "type next until you find footer you are satisfied with. when satisfied type ok";

            timesf++;
            if (timesf == 1 ) {
             
                sendMessage(value);
                chatanim();
                setTimeout(() => {
                  dispMessage(quest);
                  readOut(quest);
                }, 500);
               
            }

            render();


        }



        
    }
}


/**
 * Create the listener
 * and render the first values
 */
compile();
render();

