import React, { Component } from 'react';
import '../public/index.css';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <ol>
          <li>the Lord has done it</li>
          <li>the Lord has done it</li>
          <li>krissy made a change</li>
        </ol>
        <Shopping/>    
        <Footer/> 
        <Login/>
      </div>)
    }
}

class NavBar extends Component {
  render() {
    return (   
      <div>       
        <div className="greybk">
          <li id="li">Accessiblity|</li>
          <li id="li">En espanol|</li>
          <li id="li">Account summary|</li>
          <li id="li">Login</li>
        </div>

        <div className="greybk1">
          <li id="symbol" class="wh">&#169;</li>
          <li class="wh">Home</li>
          <li class="wh">Shop</li>
          <li class="wh">
            <div class="dropdown">
              <li>Support</li>
              <div class="dropdown-content">
                <a className="item" href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li class="wh">About</li>
          <li class="wh">FAQ</li>

          <form className="g" action="/action_page.php">
            <input className="g firs" type="text" placeholder="Search.." name="search"/>
            <button className="g first" type="submit">&#128269;</button>
          </form> 
        </div>
        <div className="displaynothing">
          <div className="support"></div>
          <div className="support"></div>
          <div className="support"></div>
        </div>
        <div class="greybk10"> 
            <img className="imgoveride"src="src/public/Ca1.PNG" alt="Trulli"></img>
        </div>
        <hr/>
           
      </div> 
      );
    }
  }
  
  class shop extends Component {
    render() {
      return (
        <div><p>Im rendering Shop</p> </div>
      );   
    }
  }

class Footer extends Component{
  render(){
    return (
      <div className="fooright">
      <p>Privacy PolicyTerms & Conditions  © 2019-2020 JCOMMERCE USA, Inc.
        All rights reserved.</p>  
      </div>
    );
  }
}

class Shopping extends Component {
  render() {
    return (    
      <div className="center">
        <h1 id="pshop" className="purple">Shop</h1>
        <div>
          <div className="item">
            <img className="epic"src="src/public/C1.PNG" alt="Trulli" ></img>
            <p className="whitecol">make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
          <div className="item"> 
            <img className="epic"src="src/public/C2.PNG" alt="Trulli" ></img>
            <p className="whitecol">make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
          <div className="item">
            <img className="epic"src="src/public/C3.PNG" alt="Trulli" ></img>
            <p className="whitecol">make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
        </div>
        <div>
          <div className="item">        
            <img className="epic"src="src/public/C4.PNG" alt="Trulli" ></img>
            <p className="whitecol">make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
          <div className="item">        
            <img className="epic"src="src/public/C5.PNG" alt="Trulli" ></img>
            <p className="whitecol">make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
          <div className="item">
            <img className="epic"src="src/public/C6.PNG" alt="Trulli" ></img>
            <p className="whitecol" >make: we</p>
            <p className="whitecol">model: we</p>
            <p className="whitecol">price: 5000</p>
            <p className="discount"> 50% off</p>
          </div>
        </div>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" class="active">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    );
  }
}

class Login extends Component{
  render(){
    return (
      <div className="">
        <img src="https://tf-assets-prod.s3.amazonaws.com/tf-curric/WEB-DEV-001/2.5.2_challenge_signup_form/logo.png"></img> 
        <form className="greenbox align">  
          <div className="align">
            <h1>Sign up</h1>
            <label className="leftalign" for="username">Email</label>
            <input className="mleft" name="name" type="text" placeholder="foo@bar" />

            <label className="leftalign" for="password">Password</label>
            <input className="mleft" name="name" type="text" placeholder="1234passwrod" /> 
            <div>
              <button className="mleft">Sign up</button>
            </div>   
          </div>
        </form>
      </div>
    );
  }
}

class Tsupport extends Component{
  render(){
    return (
      <div className="displaynothing">
        <div className="support"></div>
        <div className="support"></div>
        <div className="support"></div>
      </div>
    );
  }
}

export default App;