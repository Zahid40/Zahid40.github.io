 var myHtmlCode = `<img id="logobg" src="/images and logos/logobg1.jpeg" alt="">
 <div class="burger">
     <div class="line"></div>
     <div class="line"></div>
     <div class="line"></div>
 </div> 
 <nav>
            <ul>
                <a href="/index.html#introididid">
                    <li class="navi" id="item1"><i class="fa fa-home"></i>&nbsp;&nbsp;&nbsp;Home </li>
                </a>
                <a href="/view-pages/About.html">
                    <li class="navi" id="item3"><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;About Me</li>
                </a>
                <a href="#mpypupypy">
                    <li class="navi" id="item2"><i class="fa fa-file-code-o"></i>&nbsp;&nbsp;&nbsp;My Projects</li>
                </a>
                <a href="#fooottteeercontact">
                    <li class="navi" id="item4"><i class="fa fa-paperclip"></i>&nbsp;&nbsp;&nbsp;Contact</li>
                </a>
            </ul>
    </nav>
 <div class="bgcloud">
     <img class="cloud" id="cloud1" src="/images and logos/cloudbg.png" alt="">
     <img class="cloud" id="cloud2" src="/images and logos/cloudbg.png" alt="">
     <img class="cloud" id="cloud3" src="/images and logos/cloudbg.png" alt="">
 </div>`;

 var myfootercode = `<div class="footericonnameimage">

 <img id="logofooterimage" src="/images and logos/logobg1.jpeg" alt="">
 <span>Designer's Freedom Let's design</span>
</div>
<div class="information">
 <a href="https://www.youtube.com/@CodeWithHarry">CodeWithHarry Yt</a>
 <a href="https://stackoverflow.com/">stackoverflow</a>
 <a href="https://www.geeksforgeeks.org/">geeksforgeeks</a>
 <a href="https://www.w3schools.com/">w3school</a>
 <a href="https://developer.mozilla.org/en-US/">mdn</a>
 <a href="https://github.com/">github</a>
 <a href="https://fffuel.co/">fffuel</a>
</div>
<!--Footer icon-->
<div class="footericon">
 <a class="icon" target="_blank" href="https://github.com/Zahid40">
     <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">
     <span class="iconspan"></span>
 </a>
 <a class="icon" target="_blank" href="https://www.instagram.com/its_zahid83/">
     <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="">
     <span class="iconspan"></span>
 </a>
 <a href="" class="icon" target="_blank">
     <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="">
     <span class="iconspan"></span>
 </a>
</div>
<hr>
<span class="credit1">Made by Zahid</span>
<span class="credit1">Hosting with Github</span>

<!--cc-->
<span class="credit1">Copyright&copy   |  thisisZahid   |    All Rights reserved</span>`;

 var myDiv = document.getElementById('navigationbaaaaar');
 myDiv.innerHTML = myHtmlCode;
 var myDiv2 = document.getElementById('fooottteeercontact');
 myDiv2.innerHTML = myfootercode;


