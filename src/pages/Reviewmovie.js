//ESDRAS IMPLEMENTAR CODIGO. GL HF
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import img from '../img/user.png'

export default function Movie() {

    const navigate = useNavigate();
    var item = localStorage.getItem('user');
    const [info, setinfo] = useState('')
    const [img, setimg] = useState('')
    const [produ, setprod] = useState('') 
    const ti = JSON.parse(localStorage.getItem('title'));
    
    useEffect(()=> {
        setinfo(ti)
        const linkdef = "https://image.tmdb.org/t/p/original";
        var imageshown =  linkdef + ti.poster_path ;
        setimg(imageshown)

        if(ti.production_companies)
        {
            var prod = ti.production_companies.split(',');
            var prodfilm = [];
            for(let i = 0; i<prod.length;i++ )
            {
                if (i%2 == 0  )
                {
                    prodfilm[i] = prod[i];
                }
            }
            var produ = prodfilm.toString().split("{'name':");
            produ.splice(0, 1);
            var produ1 = produ.toString().split(',, ,');
            var newprodu = produ1.toString().split("'").join("") ;
            setprod(newprodu);
        }
    }
    )

    function test()
    {
        var a = document.getElementById('welcomeDiv');
        if (a.style.display == "none")
        {
            a.style.display = "block";
            document.querySelector('#textusername').innerHTML = "Username: " + item;     
        }
        else{
            a.style.display = "none";
        } 
    }

    function loginpag() {
        localStorage.clear();
        navigate('/');
    }

    function historyback()
    {
        navigate('/userDetails');
    }

    function aboutus()
    {
        document.getElementById('divabout').style.display = "block";
        document.getElementById('App-header4').style.display = "none";
    }
    function home()
    {
        document.getElementById('divabout').style.display = "none";
        document.getElementById('App-header4').style.display = "flex";
    }

    return(
        <>
        <header className='headermain'>
            <div className='divmain'>
                <ul>
                    <li>
                        <a onClick={home}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a onClick={aboutus}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href='mailto:noreplyloginapp18881@gmail.com'>
                            Contact Us
                        </a>
                    </li>
                </ul>        
            </div>
            <div className='divmainright1'>
                <ul > 
                    <li>
                        
                        <button className='buttonimg' onClick={test}>
                            <div className='divmain1'>
                                <p id = "accountinfo" >Account</p>
                                <img src={img} alt="buttonpng" border="0" width="15px" height="15px"/>
                            </div>     
                        </button>
                        
                        <div id = "welcomeDiv">
                            <p id = "textusername"> 
                                
                            </p>
                            <button className='logout' onClick={loginpag}>
                                Log Out
                            </button>     
                        </div>   
                    </li>
                </ul>
            </div>
        </header>
        <div class="App">
            <div id="divabout">
                <ul>
                    <li class='textabout'>This application stores data related with films.</li>
                </ul>  
                <ul>
                    <li class='textabout'>You can select whether film you want. </li>
                </ul>
                <ul>
                    <li class='textabout'>It's possible to see the reviews,the comments.</li>
                </ul>
                <ul>
                    <li class='textabout'>You should create account and login.</li>
                </ul>
                <ul>
                    <li class='textabout'>To more information please contact us.</li>
                </ul>    
            </div>
            <header id="App-header">
                <button onClick = {historyback} class="textloginback">&#129144;</button>
                <div id="App-header1">      
                    <p id='text1'>{info.title}</p>
                    <img id = "imgs"  src={img} width={300} height={300} style={{marginLeft:'auto',marginRight:'auto'}}/>
                    <div class='App_main1' >      
                        <p id="textshort">Released on {info.release_date} by {produ} </p>    
                    </div> 
                    <div class = "App_main2">
                        <li class="ui-item">
                            <p id="tex5">Make your review</p>  
                            <p id="textshort6"></p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex0"></p> 
                            <p id="textshort2"></p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex1">Rating(1-10)</p>  
                            <p id="textshort3"></p> 
                        </li>
                        <form>
                        <li class="ui-item">
                            <p id="tex2">Review Title(Optional)</p> 
                            <textarea rows="2" cols="33" placeholder='Write your title review here!'></textarea>              
                        </li> 
                        <li class="ui-item">
                            <p id="tex4">Review Text(Optional)</p>  
                            <textarea name="story" rows="10" cols="33" placeholder='Write your review here!' ></textarea> 
                        </li>
                        </form>
                        <li class="ui-item">
                            <p id="tex3"></p>  
                            <p id="textshort4"></p> 
                        </li>     
                    </div>   
                    <div class='App_main1' style={{marginTop:"10px"}} >      
                        <button className='textlogin' onClick={() => navigate('/makeareview')}>
                             Make a Review 
                        </button>   
                    </div>      
                </div>
            </header>          
        </div> 
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>IPCA <span>Developer</span></h3>
                <p className="footer-links">
                    <a  onClick={home}>Home</a>
                    &nbsp;|&nbsp;
                    <a onClick={aboutus}> About</a>
                    &nbsp;|&nbsp;
                    <a href='mailto:noreplyloginapp18881@gmail.com'> Contact</a>
                    
                </p>
                <p className="footer-company-name">Copyright 2021 <strong>IPCA Developer </strong>
                All rights reserved</p>
            </div>
            <div className="footer-center">
                <div className='divtext'> 
                    <p><span>Alexandre Ramos</span></p>
                </div>
                <div className='divtext'>
                    <p><span>Esdras Teixeira</span></p>
                </div>
                <div className='divtext'>
                    <p><a href="#">noreplyloginapp18881@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className='fosterdiv'>  
                    <div>
                        <p className="footer-company-about">
                            Alexandre Contacts
                        </p>
                        <nav>
                        <div className="footer-icons">
                            <ul className='social-networks'>
                                <li>
                                    <a href="https://github.com/Alex18891">
                                        <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-github-1-240.png"></img> 
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/alexandre-ramos-7470b7133/">
                                        <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-linkedin-5-240.png"></img> 

                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/351935643952">
                                        <img  width="25px" height="25px" src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-whatsapp-1-240.png"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    <div>   
                    <p className="footer-company-about">
                        Esdras Contacts
                    </p>
                    <nav>
                    <div className="footer-icons">
                        <ul className='social-networks'>
                            <li>
                                <a href="https://github.com/ETFF2612">
                                    <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-github-1-240.png"></img> 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/esdras-falc%C3%A3o-697351214/">
                                    <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-linkedin-5-240.png"></img> 

                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/351967687915">
                                    <img  width="25px" height="25px" src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-whatsapp-1-240.png"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                    </div>
                </div>
            </div>
        </footer>  


    </>          
        
    );
}