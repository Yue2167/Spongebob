const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
body {
    background: rgb(255, 244, 0);
  }
  .skin {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
  }
  .nose {
    width: 70px;
    transform: rotate(10deg);
    height: 97px;
    border-radius: 50%;
    background: #000;
    border: 6px solid #000;
    position: absolute;
    top: 110px;
    left: 164px;
  }
  .nose1 {
    width: 68px;
    height: 103px;
    border-radius: 50%;
    background: rgb(255, 244, 0);
    position: absolute;
    top: 8px;
    transform: rotate(4deg) translateY(-7px);
    left: -2px;
  }
  .eye{
    height: 200px;
    width: 200px;
    background: #fff;
    border-radius: 100%;
    border: 6px solid #000;
    position: relative;
    display: inline-block;
    margin-left: -5px;
  }
.eyelash{
  width: 40px;
  height: 10px;
  background: #000;
  position: absolute;
}
  #eyelash1 {
   
    margin-top: -5px;
    margin-left: 10px;
    transform: rotate(50deg);
  }
  #eyelash2 {
   
    transform: rotate(90deg);
    margin-top: -26px;
    margin-left: 80px;
  }
  #eyelash3 {
    transform: rotate(-50deg);
    margin-top: -5px;
    margin-left: 150px;
  }
  
  #left-eye .olho1 {
    background: #4af;
    height: 100px;
    width: 100px;
    border: 4px solid #000;
    border-radius: 100%;
    position: absolute;
    left: 80px;
    top: 50px;
  }
  #left-eye .olho2 {
    background: #000;
    height: 50px;
    width: 50px;
    border: 3px solid #000;
    border-radius: 100%;
    position: absolute;
    left: 110px;
    top: 75px;
  }
  #eyelash4 {
    margin-top: -5px;
    margin-left: 10px;
    transform: rotate(50deg);
  }
  #eyelash5 {
    transform: rotate(90deg);
    margin-top: -26px;
    margin-left: 80px;
  }
  #eyelash6 {
    transform: rotate(-50deg);
    margin-top: -5px;
    margin-left: 150px;
  }
  #right-eye .olho1 {
    background: #4af;
    height: 100px;
    width: 100px;
    border: 4px solid #000;
    border-radius: 100%;
    position: absolute;
    right: 80px;
    top: 50px;
  }
  #right-eye .olho2 {
    background: #000;
    height: 50px;
    width: 50px;
    border: 3px solid #000;
    border-radius: 100%;
    position: absolute;
    right: 110px;
    top: 75px;
  }
  .mouth {
    top: 170px;
    z-index: -1;
    left: -50px;
    width: 500px;
    height: 122px;
    border-radius: 50%;
    position: absolute;
    background: #000;
  }
  .mouth .mouth1 {
    width: 530px;
    height: 133px;
    margin-left: -19px;
    border-radius: 50%;
    background: rgb(255, 244, 0);
    margin-top: -15px;
  }
  .mouth .tooth{
    border: 4px solid #000;
    position: absolute;
    width: 50px;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #fff;
  }
  .mouth #tooth1 {
    margin-left: 190px;
    margin-top: 1px;
    transform: rotate(1deg);
  }
  
  .mouth #tooth2 {
    margin-left: 260px;
    transform: rotate(-2deg);
  }
  .hole{
    position: absolute;
    border-radius: 50%;
    background: #d1c900;
  }
  #hole-1 {
    width: 6%;
    height: 6%;
    top: 8%;
    left: 16%;
  }
  #hole-2 {
    width: 7%;
    height: 7%;
    top: 6%;
    left: 71%;
  }
  #hole-3 {
    width: 5%;
    height: 5%;
    top: 41%;
    left: 71%;
  }
  #hole-4 {
    width: 4%;
    height: 4%;
    top: 53%;
    left: 27%;
  }
  #hole-5 {
    width: 2%;
    height: 2%;
    top: 86%;
    left: 42%;
  }
  #hole-6 {
    width: 3%;
    height: 3%;
    top: 76%;
    left: 71%;
  }
  #hole-7 {
    width: 5%;
    height: 5%;
    top: 66%;
    left: 9%;
  }
  #hole-8 {
    width: 4%;
    height: 4%;
    top: 81%;
    left: 89%;
  }

`;
export default string;
