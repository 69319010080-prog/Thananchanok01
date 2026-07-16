// ===============================
// Node.js Web Server - Dark Theme
// ===============================

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Web Server</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Consolas, monospace;
}

body{
    overflow:hidden;
    background:#0b0f19;
    color:white;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

/* พื้นหลังแบบ Gradient */
body::before{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background:
    radial-gradient(circle at top,#14213d,#000814 70%);
    z-index:-2;
}

/* กล่องข้อมูล */
.card{
    width:750px;
    padding:40px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.15);
    border-radius:20px;
    backdrop-filter:blur(15px);
    text-align:center;
    box-shadow:0 0 35px rgba(0,255,255,.2);
}

h1{
    color:#00f7ff;
    font-size:40px;
    margin-bottom:20px;
    text-shadow:0 0 20px cyan;
}

p{
    color:#ddd;
    font-size:18px;
    margin:15px 0;
}

.code{
    margin-top:25px;
    text-align:left;
    background:#101820;
    border-radius:12px;
    padding:20px;
    color:#7CFC00;
    font-size:16px;
    line-height:1.7;
    box-shadow:0 0 15px rgba(0,255,255,.2);
}

/* โค้ดลอย */
.floating{
    position:absolute;
    color:#00ff88;
    opacity:.08;
    font-size:22px;
    animation:float 18s linear infinite;
    user-select:none;
}

@keyframes float{

    from{
        transform:translateY(120vh);
    }

    to{
        transform:translateY(-120vh);
    }

}

.footer{
    margin-top:25px;
    color:#00f7ff;
}

</style>

</head>

<body>

<div class="floating" style="left:5%;animation-duration:16s;">
const server = http.createServer();
</div>

<div class="floating" style="left:18%;animation-duration:24s;">
function(){ return "Hello"; }
</div>

<div class="floating" style="left:33%;animation-duration:20s;">
&lt;html&gt;
</div>

<div class="floating" style="left:48%;animation-duration:14s;">
Node.js
</div>

<div class="floating" style="left:60%;animation-duration:22s;">
JavaScript
</div>

<div class="floating" style="left:76%;animation-duration:17s;">
HTTP 200 OK
</div>

<div class="floating" style="left:90%;animation-duration:25s;">
console.log()
</div>

<div class="card">

<h1>🚀 Web Server Online</h1>

<p>
สวัสดีค่ะ! ยินดีต้อนรับเข้าสู่ระบบ Web Server
</p>

<p>
<b>นางสาวธนัญชนก โชติเจริญอนันต์</b><br>
รหัสนักศึกษา : <b>69319010080</b>
</p>

<div class="code">

const http = require('http');<br>
const server = http.createServer();<br>
server.listen(3000);<br>
console.log("Server Running...");<br>

</div>

<p class="footer">
✅ Railway Server ทำงานเรียบร้อยแล้ว
</p>

</div>

</body>
</html>

`);
});

server.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
});
