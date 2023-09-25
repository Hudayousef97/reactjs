import logo from './logo.svg';
import './App.css';
import myImage from './images/Pink_Typography_Initial_GC_Logo__1_-removebg-preview.png';
import myImage1 from './images/mypic.jpg';
import myImage2 from './images/albaqa.jpg';
import myImage3 from './images/Coding-Academy-Logo.jpg';
import myImage4 from './images/HAKEEM.png';
import myImage5 from './images/roooaad.png';
import myImage6 from './images/Screenshot 2023-07-05 163822.png';
import { FaHtml5, FaSass, FaLinux} from 'react-icons/fa';

function App() {
  return (

   <div className="App">
           <section>
           <nav class="nav">
            <div class="mylogo">

              <img src={myImage} width="20%" hight="10%"/>

              </div>
            <ul class="ul">
                <li class="li"><a href="#Home"><b> Home</b></a></li>
                <li class="li"><a href="#Education"><b>Education</b></a></li>
                <li class="li"><a href="#Experience"> <b> Experience</b></a></li>
                <li class="li"><a href="#Project"> <b> Project </b></a></li>
                <li class="li"><a href="#Skills"><b> Skills</b></a></li>
                <li class="li"><a href="#Contact"> <b> Contact </b></a></li>
            </ul>
        </nav>
        </section>

        <section id="Home" class="Home">
        <div class="home2">
            <div class="mypic"><img src={myImage1}/></div>

            <div class="home3">
              <b><span class="s1">Huda Yoysef Sandoqa</span><br></br> I'm
                    front-end developer<br></br>
                    Software engineer with ability to learn and collaborate <br></br>in rapidly changing environments and
                    compositions.<br></br>
                    Worked through 1000+ hours of bootcamp structure.</b>
                    <div class="home4"><a href="./CV_2023070322294428.pdf" class="myButton">Download CV</a></div>
            </div>
            </div>
</section>

<section id="Education" class="Education">
        <div class="edu1">Education</div><br></br><br></br>
        <div class="edu2">
            <div class="imgbalqa"><img src={myImage2} width="auto"/>
    <br></br>        <p  class="d1">Computer Seience
                (9/2015-6/2019) </p></div>
            <div class="imgcode"><img src={myImage3} width="70%" hight="10%"/>
<br></br><p class="d2">Web Developer
    (6/2023-12/2023) </p></div>
           

        </div>
    </section><br></br>



    <section id="Experience" class="Experience">
        <div class="ex1">Experience</div><br></br><br></br>
        <div class="ex2">
            <div class="hakeemimg"><img src={myImage4} height="90%" width="100%"/>
            <br></br><p class="ex3">EHS Company
                (2/2019-7/2019)</p>
            </div>
            <div class="code"><img src={myImage3} width="50%" height="90%"/>
           <br></br> <p  class="ex4">Web Developer
                (6/2023-12/2023)</p>
            </div>
          
        </div>
    </section><br></br>


    <section id="Project" class="Project">
        <div class="pro1">Project</div><br></br><br></br>
        <div class="proj">
            <div class="pro2"><img src={myImage5} width="100%" height="50%"/>
                <p class="pro5">
                    Road Helper project <br></br>in (3/2019)
                </p>
            </div>
            <div class="pro4"><img src={myImage6} width="90%" height="50%"/>
                
                <p class="pro3">
                    My Portfolio <br></br>in (5/2023)
                </p>
            </div>
          

            </div>

        
    </section><br></br>
     <section id="Skills" class="Skills">
        <div class="sk1">Skills</div><br></br><br></br>
<div class="icon">
    <div class="html"> Html  <i class="fa-brands fa-html5 fa-bounce fa-2xl" ></i>   </div>
    <div class="css"> Css <i class="fa-brands fa-css3-alt fa-bounce fa-2xl" ></i> </div>
    <div class="db"> Database <i class="fa-solid fa-database fa-bounce fa-2xl" ></i>  </div>      
    <div class="android"> Android <i class="fa-brands fa-android fa-bounce fa-2xl" ></i></div>

</div>
    </section>

    <section id="Contact" class="Contact">
    
    <div class="con1">Contact</div><br></br>  <br></br>
    <div class="con2">
{/* <div class="con3">
   <a href="https://www.linkedin.com/in/huda-yousef-72b01527a" target="_blank" ><i class="fa-brands fa-linkedin fa-beat fa-2xl" style="color: #295094;"></i></a>
    <a href="https://github.com/Hudayousef97" target="_blank"> <i class="fa-brands fa-github fa-beat fa-2xl" style="color: #111212;"></i></a>
    <a href="0795844097" target="_blank"><i class="fa-solid fa-phone fa-shake fa-2xl" style="color: #970994;"></i></a>
   <a href="hudahudayousef97@gmail.com" target="_blank"> <i class="fa-solid fa-envelope fa-flip fa-2xl" style="color: #b2242b;"></i></a>
</div> */}


    <div >

<p class="name">Your Name : <input type="text" name="name"/>
</p>
<br></br><br></br>

<p class="text"> Your Text :<textarea name="message" rows="10" cols="30"></textarea>
</p>
</div>
    </div>


</section> 


    </div>
  );
}

export default App;
