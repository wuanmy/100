document.getElementById("random").onclick=()=>{
        const valueRandom=Math.random();
        const value=Math.floor(Math.random() * 4);
        switch(value){
            case 0:
                document.getElementsByTagName("h3")[0].innerText="bạn my";
                break
            case 1:
                document.getElementsByTagName("h3")[0].innerText="bạn nhi";
                break
            case 2:
                document.getElementsByTagName("h3")[0].innerText="bạn trúc";
                break
            case 3:
                document.getElementsByTagName("h3")[0].innerText="bạn anh";
                break
        }
       
       };
    