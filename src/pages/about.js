import React from "react";
import image from "./imgg1.png"
// import image2 from "./imgg2.png"
// import image3 from "./imgg3.png"
import image4 from "./img4.png"
import image5 from "./img 5.png"
import image6 from "./imgg4.png"
// import image7 from "./img 6.png"
// import image8 from "./img 7.png"
// import image9 from "./img 8.png"
   import image10 from "./img 9.png"




const About = () => {
	return (
        <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image}
            alt="Card"
            height={100}
          />
          <div  className="card-img-overlay d-flex align-items-center">
            <div className="container" >
              <br>
              
              </br>

              <br>
              
              </br>

              <br>
              
              </br>
            <h1 className="card-title fs-1 text fw-lighter"  class="" style={{fontSize:"55px", color:"white", fontFamily:"cursive"}}>Welcome to <br></br>BITSS.fr</h1>
              <h5 className="card-title fs-1 text fw-lighter"  class="" style={{fontSize:"25px",color:"white", fontFamily:"Roboto"}}>Your Trusted Cyber Security Partner</h5>
              <h6 className="card-title fs-1 text fw-lighter"  class="" style={{fontSize:"15px",color:"white"}}>Cyber Security Services</h6>
              <p className="card-text fs-5 d-none d-sm-block " class="" style={{ 

                fontSize:"15px",
                color:"white",
                backgroundColor:"#303030", 
                opacity: 0.5,
                borderRadius:"8px",
                textAlign:"left",padding:"20px",
                 margin:"10px", width:"500px"}}>
                Bitss by BFIN – a French leading cyber security research company dedicated to stop:

              <br></br>
              <br></br> Stop Network, server, website Database theft, intrusion, hacking, website hostage ransom demands,
              data theft, client data theft, 
              pirating website payments, spamming from website contact page to name a few security features.<br></br>

              <br></br> Bitss has five unique cyber secuity systems that protect Networks, servers, websites, video sites, and contact page spamming.<br></br>

              <br></br> Whether you’re a small business, a large enterprise, or an individual, Bitss is affordable. 
               
              </p>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" enable style={{backgroundColor:"grey",border:"2px solid black"}} >
                  Learn More
                </button>
      
                <button class="my-2 mx-auto btn btn-dark" type="submit" enable style={{border:"2px solid black"}}>
                  Contact Us
                </button>
              </div>
            
            </div>
          </div>
          
          {/* <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image2}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image3}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image4}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image5}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image6}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image7}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image8}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image9}
            alt="Card"
            height={100}
          />
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image10}
            alt="Card"
            height={100}
          /> */}
          </div>
          <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Network access sercurity</h5>
                <p className="text-muted">Bitss N for networks controlling servers. Respecting the bitss system 100% procedures for Cyberwall and
                   Firewall security, Bitss will protect your network from intrusion, prevent data theft, hostage ransom bids,
                    block hacking and bitss detection systems, and VPN solutions will ensure protection for all the servers within the network on 
                    condition the bitss security procedure system is respected</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Dedicated Server Access Security</h5>
                <p className="text-muted">Bitss S for total server protection housing administration sites, retail websites, service websites, 
                        video content websites and media websites, and intern infrustruture sites. Installing and following bitss server security system, bitss 
                         will Protect your database, detect and respond to any unauthorized activities or breaches</p>
               
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Cloud Protection</h5>
                <p className="text-muted">All Websites and administration sites in cloud
                 hosting, follow bitss and protect online vulnerability with the bitss protection techniques that protects your data in
                 cloud, encryption, access controls, and advanced threat detection mechanisms</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://raw.githubusercontent.com/luispadron/UICircularProgressRing/master/.github/demo.gif" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Malware and Scam Protection</h5>
                <p className="text-muted">Bitss C secures web contact page, protect scamming by contact page, real-time threat 
                intelligence and advanced threat detection and advanced malware detection tools</p>
              </div>
            </div>
          </div>
        </div>  
        <div className="card-body">
                <h5 className="card-title text-center" style={{borderLeft:"2px solid red", fontSize:"20px"}}>We are a French research company committed to protecting your online website, video site, network, server and stop contact page spamming</h5>

          </div>
          <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.seekpng.com/png/detail/956-9564033_network-icon-png.png" alt="" height={180} />
              <div className="card-body">
                <h5 className="card-title text-center">Network access sercurity</h5>
                <p className="text-muted">Bitss N enforced network security solutions, secure 
                your network databases from unauthorized access and protect sensitive data. 
                The theft of sensitive data can ruin your bsuiness and that of your clients business.
                 Bitss is a software that is uploaded into the network servers, gateway server and every other server witin the network for 
                double triple protection and is affordable to small medium and large bsuiness.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/01/c9/73/01c973b7cd637d04728124976d9a2a45.jpg" alt="" height={150} />
              <div className="card-body">
                <h5 className="card-title text-center">Bitss WP protects all Website including WordPress sites</h5>
                <p className="text-muted">Protect your admin database, monitor and block suspicious login attempts and brute-force attacks. And prevents data theft, content theft, video destruction, intrusion, client data theft
                , hacking, hostage ransom threats, and blocks spamming from website contact page</p>
               
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://thumbs.dreamstime.com/b/circuit-technology-logo-vector-template-150898077.jpg" alt="" height={120} />
              <div className="card-body">
                <h5 className="card-title text-center">Dedicated Server Access Security</h5>
                <p className="text-muted">Protect your dedicated server database, ensure the integrity and confidentiality of your dedicated servers, and vaults your server to stop threats while maintaing its performance to build and serve your business needs.

                 </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/vectors/people-icon-vector-id853652122?k=20&m=853652122&s=612x612&w=0&h=Z8kzS73NnCdv5sNG_573l4tq5Y4KAAConQ5YTZNgHO4=" alt="" height={170} />
              <div className="card-body">
                <h5 className="card-title text-center">Malware and Scam Protection</h5>
                <p className="text-muted">Shield your systems from malware, ransomware, and phishing attacks</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://dypdvfcjkqkg2.cloudfront.net/large/4941285-9525.png" alt="" height={140} />
              <div className="card-body">
                <h5 className="card-title text-center">Shield your systems from malware, ransomware, and phishing attacks</h5>
                <p className="text-muted">Rapidly respond to security incidents, minimizing potential damages

                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://elements-cover-images-0.imgix.net/1c68e284-9cfa-4b14-9ac6-9f73d611d170?auto=compress%2Cformat&fit=max&w=710&s=01c79fd99ada3e4e30a18b1a03a18cfb" alt="" height={120} />
              <div className="card-body">
                <h5 className="card-title text-center">Client Login Pathway Security</h5>
                <p className="text-muted">Secure client login pathways to prevent scamming and unauthorized access to sensitive information and ensure reliable data encryption.

                </p>
              </div>
            </div>
          </div>
          <div className="card-body">
                <h5 className="card-title text-center" style={{ fontSize:"45px", marginBottom:"20px"}}>What's More? We Can Help <br></br>You Succeed.</h5>

          </div>
          <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/6a/8f/8f/6a8f8f9f5f34560405de991efefd6e82.png" alt="" height={100} />
              <div className="card-body">
                <h5 className="card-title text-center">Great Advices</h5>
                <p className="text-muted text-center">
                  Customized security Solutions
                  With our top-notch Cyber defense
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://t3.ftcdn.net/jpg/02/75/45/16/360_F_275451672_Cotom984pdxLalnwtLKwpLjH7TPYZJMc.jpg" alt="" height={150} />
              <div className="card-body">
                <h5 className="card-title text-center">Extrem security</h5>
                <p className="text-muted text-center">
                  Proactive threat monitoring and personal 
                  cyber production
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} />
              <div className="card-body">
                <h5 className="card-title text-center">Notification alter</h5>
                <p className="text-muted text-center"> Emplpoyee Security Awareness Programs

                 </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNFYCxEai5B75hIzPIt3oKGBKvrn8hylGVQ&usqp=CAU" alt="" height={170} />
              <div className="card-body">
                <h5 className="card-title text-center">Regular analytic</h5>
                <p className="text-muted text-center">Continual Security Enhancements </p>
              </div>
            </div>
          </div>
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image4}
            alt="Card"
            height={100}
          />
          </div>
          <br></br>
          <br></br>
          <div className="card-body" style={{padding:"80px"}}>
                <p className="card-title text-center" style={{ fontSize:"18px", marginBottom:"20px"}}>BEST SERVICES</p>
                <h5 className="card-title text-center" style={{ fontSize:"38px", marginBottom:"20px"}}>Our Services
                </h5>

          </div>
          <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/6a/8f/8f/6a8f8f9f5f34560405de991efefd6e82.png" alt="" height={100} /> */}
              <div className="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
              </svg>
              
                <h5 className="card-title text-left"><i class="bi bi-person-lines-fill">Best Support</i></h5>
                <p className="text-muted text-left">
                Bitss support package includes: *Upgrading with new security measures through ongoning research. *Training. *Assistance in placing the software. The package 
                is included in the initial software price. there after an affordable support pack
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://t3.ftcdn.net/jpg/02/75/45/16/360_F_275451672_Cotom984pdxLalnwtLKwpLjH7TPYZJMc.jpg" alt="" height={150} /> */}
              <div className="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list-columns-reverse" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"/>
              </svg>
                <h5 className="card-title text-left"><i class="bi bi-list-columns-reverse">Quick Response</i></h5>
                <p className="text-muted text-left">
                We recognize the urgency and critical nature of cyber incidents. Our dedicated incident response team is available around the clock to swiftly address any security breaches or threats that may arise. We understand the importance of immediate action, and we pride ourselves on our ability to respond rapidly.
                 minimizing the impact and ensuring a timely resolution as 24/7 security monitoring.

                 </p>

             
               
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                 <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
              </svg>
              

                <h5 className="card-title text-left"><i class="bi bi-currency-dollar">  Audits And Risk Assessments</i></h5>
                <p className="text-muted text-left">
              
                Our experts evaluate your security controls, policies, and procedures to ensure adherence to industry regulations such as GDPR, HIPAA, and PCI DSS. By identifying gaps and providing actionable
                recommendations, we assist you in meeting compliance requirements effectively.
                </p>

             
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNFYCxEai5B75hIzPIt3oKGBKvrn8hylGVQ&usqp=CAU" alt="" height={170} /> */}
              <div className="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
              </svg>
                <h5 className="card-title text-left"> <i class="bi bi-stack">Security Awareness Training</i></h5>
                <p className="text-muted text-left">
                  Our cyber security experts engaging and tailored security awareness 
                  training programs educate your employees about the latest threats and equip them with practical skills to detect and mitigate potential risks. </p>
              </div>
            </div>
          </div>
            <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">

              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
              </svg>

                <h5 className="card-title text-left"><i class="bi bi-lightbulb-fill">Real Solutions</i></h5>
                <p className="text-muted text-left">
                Our approach is rooted in practicality and real-world applicability to your business data protection. Through our extensive experience and deep industry knowledge. we provide customized recommendations and strategies tailored to your specific requirements and secure digital assets.
                </p>

             
              </div>
            </div>
          </div>
           <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              {/* <img className="card-img-top img-fluid" src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-notification-bell-icon-vector-vector-icon-template-png-image_4226911.jpg" alt="" height={120} /> */}
              <div className="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
              </svg>
              

                <h5 className="card-title text-left"><i class="bi bi-lightbulb-fill">Secure Code Review And Application Security</i></h5>
                <p className="text-muted text-left">
                 Our meticulous code review process examines your applications to identify vulnerabilities at the source code level. We employ industry-leading tools and
                 methodologies to uncover potential weaknesses that could be exploited by attackers.
                </p>

             
              </div>
            </div>
            </div>
          </div>
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image5}
            alt="Card"
            height={100}
          />
          </div> 
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image6}
            alt="Card"
            height={100}
          />
          </div> 
          <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={image10}
            alt="Card"
            height={100}
          />
          </div> 
        
    
      </div>
    </div>
          
   
      
	);
};

export default About;
