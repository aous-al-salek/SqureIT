<?php
session_start();
$msg = '';
$wrongCaptcha = '';
$fb = $_POST["user_text"] ?? '';
if (isset($_POST['input']) && strlen($_POST['input']) > 0) {
    if (strtolower($_POST['input']) == strtolower($_SESSION['captcha'])) {
        $msg = '<span style="color:green">CAPTCHA SUCCEEDED!</span>';
        $file = "feedback.txt";
        file_put_contents($file, $fb . "\r\n#########################\r\n", FILE_APPEND | LOCK_EX);
        header("Location: /thanks");
    }
    else {
        $msg = '<span style="color:red">CAPTCHA FAILED!</span>';
        $wrongCaptcha = '<script>document.body.scrollTop = 150; document.documentElement.scrollTop = 150;</script>';
    }
}
session_destroy();
unset($_SESSION["captcha"]);
?>
<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title>Feedback</title>
        <meta name="description" content="A page to submit user feedback.">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#4CAF50"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="SqureIT: Cyber Awareness Made Easy!"/>
	    <meta property="og:description" content="SqureIT is a cyber safety and security awareness platform focused on children and their care takes."/>
	    <meta property="og:url" content="https://squreit.se"/>
	    <meta property="og:image" content="https://squreit.se/img/favicon.png"/>
	    <meta name="twitter:card" content="summary_large_image"/>
	    <meta name="twitter:url" content="https://squreit.se"/>
	    <meta name="twitter:title" content="SqureIT: Cyber Awareness Made Easy!"/>
	    <meta name="twitter:description" content="SqureIT is a cyber safety and security awareness platform focused on children and their care takes."/>
	    <meta name="twitter:image" content="https://squreit.se/img/favicon.png"/>
        <link rel="icon shorcut" type="image/x-icon" href="/img/favicon.png">
        <link rel="apple-touch-icon" href="/img/favicon.png">
        <link rel="stylesheet" type="text/css" href="/css/main.css" id="styleMode">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
        <link rel="manifest" href="/manifest.json">
        <style>
            .zbg {
                background-image: url("/img/feedback.jpg");
            }
        </style>
    </head>
    <body>
        <button onclick="topFunction()" id="scrollBtn" title="Go to top">ᐱ</button>
        <div class="theme-container" onclick="lightMode()">
            <img id="theme-icon" src="/img/sun.svg">
        </div>
        <div class="search" onClick="window.open('/search', '_self');">
            <img id="spi" style="width: 20px; height: 20px;" src="/img/search_black_bg.png">
        </div>
        <div class="header">
            <img src="/img/logo.png" alt="SqureIT" onclick="window.open('/', '_self');"/>
            <div class="header-right">
                <a href="/">Home</a>
                <a href="/children">Children</a>
                <a href="/caretakers">Caretakers</a>
                <a href="/quiz">Quiz</a>
                <a href="/gamestools">Games & Tools</a>
            </div>
        </div>
        <div id="mobile_menu" class="mobile_menu">
            <ul class="menu" id="menu">
                <li><a class="menuItem" href="/">Home</a></li>
                <li><a class="menuItem" href="/children">Children</a></li>
                <li><a class="menuItem" href="/caretakers">Caretakers</a></li>
                <li><a class="menuItem" href="/quiz">Quiz</a></li>
                <li><a class="menuItem" href="/gamestools">Games & Tools</a></li>
                <li><a class="menuItem" href="/feedback">Feedback</a></li>
                <li><a class="menuItem" href="/about">About</a></li>
                <li><a class="menuItem" href="/contact">Contact</a></li>
            </ul>
            <button class="hamburger" id="hamburger">
                <div class="container material-icons" onclick="barShuffle(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </button>
        </div>
        <div class="zbg">
            <div class="zcenter">
                <h1>Feedback</h1>
            </div>
        </div>
        <div class="center">
            <strong style="max-width: 90%;">
                <p style="font-size: 20px;">You can provide anonymous feedback below.</p>
                <p style="font-size: 20px; margin-bottom: 20px;">Thank you for taking the time.</p>
            </strong>
            <div class="feedback_form" id="feedback_form">
                <form action="#feedback_form" name="feedback_form" method="post">
                    <textarea placeholder="We will appreciate any feedback or improvement suggestions to our website&#10;&#10;Vi uppskattar all feedback eller förbättringsförslag för vår webbplats" onblur="if(this.value==''){ this.placeholder='We will appreciate any feedback or improvement suggestions to our website\n\nVi uppskattar all feedback eller förbättringsförslag för vår webbplats'; }" onfocus="this.placeholder='';" name="user_text" id="user_text" class="textBox" style="margin-bottom: 25px;" required><?php echo $fb ?></textarea>
                    <div style="margin: 5px;">
                        <?php echo $msg; ?>
                    </div>
                    <div id="captcha-box" class="captcha-box">
                        <p style="width: 75%; margin: 5px auto; color: #4CAF50; font-weight: bold; background-color: inherit;">Confirm you are not a robot!</p>
                        <div class="clearfix" id="clearfix" style="-webkit-user-select: none; user-select: none;"></div>
                        <p style="font-size: 15px; width:153px; margin: 5px auto; color: #4CAF50; background-color: inherit;">Type the four letters you see in the image:</p>
                        <input type="text" class="captcha-input" id="captcha-input" name="input" autocomplete="off" pattern="[A-Za-z]{4}" required/>
                    </div>
                    <input type="submit" id="submitt_user_feedback" class="submit button buttonh" value="Submit" name="submit"/>
                </form>
            </div>
        </div>
        <div class="footer">
            <div class="row">
                <div class="column">
                    <h2>Links</h2>
                    <a href="/"><p>Home</p></a>
                    <a href="/quiz"><p>Quiz</p></a>
                    <a href="/gamestools"><p>Games & Tools</p></a>
                    <a href="/feedback"><p>Feedback</p></a>
                    <a href="/about"><p>About</p></a>
                    <a href="/contact"><p>Contact</p></a>
                </div>
                <div class="column">
                    <h2>Articles</h2>
                    <a href="/children"><p>Articles for children</p></a>
                    <a href="/caretakers"><p>Articles for caretakers</p></a>
                </div>
                <div class="column">
                    <img src="/img/logo.png" style="width: 250px;">
                    <p style="padding-left: 25px; padding-right: 25px;">Cyber awareness made easy</p>
                </div>
            </div>
            <p id="fcy"></p>
            <p>Available under the <a class="white" href="/LICENSE" target="_blank">GNU GPLv3 <img src="/img/gnu_heckert.png" style="width: 45px; margin-bottom: -15px; margin-top: 0; filter: invert(1);"></a></p>
            <p>Source code can be found on <a class="white" href="https://github.com/aous-al-salek/SqureIT" target="_blank">GitHub <img src="/img/github-mark-white.png" style="width: 35px; margin-bottom: -10px; margin-top: 0;"></a></p>
        </div>
        <script type="text/javascript" src="/js/mobile.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
        <script type="text/javascript" src="/js/pwa-handler.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            document.getElementById("clearfix").innerHTML = `<img src='/captcha?${new Date().getMilliseconds()}' id='captcha'><a href='javascript: refreshCaptcha();'><svg style='color: #4CAF50; padding-left: 5px;' xmlns='http://www.w3.org/2000/svg' width='25' height='50' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-rotate-cw'><polyline points='23 4 23 10 17 10'></polyline><path d='M20.49 15a9 9 0 1 1-2.12-9.36L23 10'></path></svg></a>`;
            function refreshCaptcha(){
            	var img = document.images['captcha'];
	            img.src = img.src.substring(0,img.src.lastIndexOf("captcha"))+"captcha?"+new Date().getMilliseconds();
            };
        </script>
        <?php echo $wrongCaptcha; ?>
    </body>
</html>
