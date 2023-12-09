//ESDRAS IMPLEMENTAR CODIGO. GL HF
export default function Movie() {
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
                        <p id="textshort">{info.overview}</p>    
                    </div> 
                    <div class = "App_main2">
                        <li class="ui-item">
                            <p id="tex5">Status</p>  
                            <p id="textshort6">{info.status}</p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex0">{produ ? "Production Companies" : ''}</p> 
                            <p id="textshort2">{produ}</p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex1">Release Data</p>  
                            <p id="textshort3">{info.release_date}</p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex2">{rate ? "Movie Rate" : ''}</p> 
                            <p id="textshort3">{rate}</p>              
                        </li> 
                        <li class="ui-item">
                            <p id="tex4">{genr ? "Movie Genre" : ''}</p>  
                            <p id="textshort5">{genr}</p> 
                        </li>
                        <li class="ui-item">
                            <p id="tex3">{coll ? "Collection" : ''}</p>  
                            <p id="textshort4">{coll}</p> 
                        </li>     
                    </div>   
                    <div class='App_main1' style={{marginTop:"10px"}} >      
                        <button className='textlogin' onClick={() => navigate('/reviewmovie')}>
                             Review Movie
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