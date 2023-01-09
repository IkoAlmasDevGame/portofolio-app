import { Form, Link } from 'react-daisyui';

import myPhoto from '../Assets/Iko_Almas.png';
import myHtml from '../Assets/html.png';
import myReact from '../Assets/svg/reactjs.svg';
import myCss from '../Assets/svg/css.png';
import myDart from '../Assets/svg/dart.png';
import myJs from '../Assets/svg/js.png';
import myBs from '../Assets/svg/bootstrap.png';
import myWord from '../Assets/svg/word.png';
import myExcel from '../Assets/svg/excel.png';
import myPw from '../Assets/svg/powerpoint.png';

const IntroApp = () => {
    return(
        <div>
            <header className='basic1'>
                <h1 id='home'>Hello 🖐, I'm</h1>
                <p className='text-center' id='textsmall'>Iko Almas Qistan</p>
                <div style={{marginTop : "50px"}}>
                    <Link href='#contact' className='btn btn-default' id='btn'>Contact Me</Link>
                    <div style={{marginBottom : "165px"}}>
                        <Link href='#about' id='page-scroll'
                        className='animate__animated animate__repeat-5 
                        animate__pulse animate__infinite'>🖱 Scroll Down ⬇</Link>
                    </div>
                </div>                
            </header>
            <header className='basic2'>
                <h1 className='text-sm'>Get To Know</h1>
                <h1 id='about'>About Me</h1>
                <img src={myPhoto} alt="" className='img-thumbnail' style={{
                    width : "260px", height : "274px", margin : "auto", display : "flex", justifyContent : "center",
                    alignItems : "center"}}/>
                    <p className='img-thumbnail' id='text'>
                    Introducing my name is Iko almas qistan, I studied at a university in Jakarta, 
                    namely the university for the development of informatics facilities, I am a fresh graduate at the university 
                    for the development of informatics facilities.
                    </p>
                    <div className='btn' id='btn-center'>
                        <div>
                            <p className='text-large'>Experience</p>
                            <p className='text-sm' style={{lineHeight : "1px"}}>1+ Years Working</p>
                        </div>
                    </div>
                    <div className='btn' id='btn-center'>
                        <div>
                            <p className='text-large'>Clients</p>
                            <p className='text-sm' style={{lineHeight : "1px"}}>1+ WorldWide</p>
                        </div>
                    </div>
                    <div className='btn' id='btn-center'>
                        <div>
                            <p className='text-large'>Projects</p>
                            <p className='text-sm' style={{lineHeight : "1px"}}>2+ Completed</p>
                        </div>
                    </div>
            </header>
            <header className='basic3'>
                <h1 id='skill' className='text-larger'>Skills</h1>
                <p className='text-start text-sm'>Tech Stack</p>
                <div style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <p className='text-center'>
                    <img src={myHtml} style={{margin : "auto", width : "104px", height : "104px"}} alt=''/>
                    <p className='text-center' style={{fontSize : "16px"}}>HTML 5</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myReact} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />
                    <p className='text-center' style={{fontSize : "16px"}}>React Js</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myCss} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />                   
                    <p className='text-center' style={{fontSize : "16px"}}>CSS3</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myDart} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />
                    <p className='text-center' style={{fontSize : "16px"}}>Flutter</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myJs} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />                   
                    <p className='text-center' style={{fontSize : "16px"}}>Javascript</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myBs} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />                   
                    <p className='text-center' style={{fontSize : "16px"}}>Bootstrap</p>
                    </p>
                </div>
                <h1 className='text-large-x'>More Skills</h1>
                <div style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <p className='text-center'>
                    <img src={myExcel} style={{margin : "auto", width : "104px", height : "104px"}} alt=''/>
                    <p className='text-center' style={{fontSize : "16px", fontWeight : "normal"}}>Microsoft Excel</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myWord} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />
                    <p className='text-center' style={{fontSize : "16px"}}>Microsoft Word</p>
                    <div className='mx-auto'><p></p></div>
                    <img src={myPw} style={{margin : "auto", width : "104px", height : "104px"}} alt='' />                   
                    <p className='text-center' style={{fontSize : "16px"}}>Microsoft Power Point</p>
                    </p>
                </div>
            </header>
            <header>
            <form class="flex flex-col max-w-[600px] w-full">
            <div class="pb-8">
                    <p class="text-4xl font-semibold inline border-b-4 border-second " id='contact'>Contact</p>
                    </div>
                    <input className="p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg" type="text" placeholder="Your Name" name="name" required=""/>
                    <input className="p-4 bg-[#0b0b13] mb-3 outline-none border-none rounded-lg" type="email" placeholder="Your Email" name="email" required=""/>
                    <textarea className="p-4 bg-[#0b0b13] mb-4 outline-none border-none rounded-lg" name="message" id="message" placeholder="Project Description" cols="20" rows="10" required=""></textarea>
                    <button type="submit" className="bg-second text-white shadow-btn shadow-white py-[10px] px-7 inline-block border border-solid border-transparent text-base font-normal ease transition-all duration-300 cursor-pointer hover:bg-white hover:text-second hover:shadow-second"
                    style={{display : "flex", justifyContent : "center", color : "black", fontSize : "18px", backgroundColor : "black"}}>Let's Collaborate</button>
            </form>
            </header>
            <Link href='#scrollUp' style={{backgroundColor : "whitesmoke", display : "flex", justifyContent : "end", color : "gray", border : "1px solid black"}}
            className="fixed right-5 bg-second py-3 px-3 rounded-lg z-50 duration-700 ease cursor-pointer hover:bg-sky-800 bottom-5"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-md text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>👆</Link>
            <div class="bg-[#0b0b13] p-6 mt-12 text-center text-white text-xs md:text-sm"><p>Copyright © 2023 IkoAlmas. All Right Reserved</p></div>
        </div>
    );
}

export default IntroApp
