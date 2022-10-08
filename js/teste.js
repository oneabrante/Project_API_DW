
function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.status);
        }
    }
    xhr.send();
}




 function suap(){
     console.log(get("https://dados.ifpb.edu.br/dataset/2b36e2b7-4fcc-47c1-9eb6-9da314181780/resource/1b7e1a56-a23a-4392-9305-292a7149cff6/download/releases.json", function(data) {
      if (data == 0 || data == 200){
        console.log(data);
        document.getElementById("suapname").innerHTML = "Normal";
        document.getElementById("suapon").innerHTML = "<i class='fb fa-solid fa-circle-check'></i>";
        document.getElementById("suapon").style.color = "green";
        document.getElementById("suapon").style.fontSize = "30px";
 
      }
      if (data == 409){
        document.getElementById("suapname").innerHTML = "Error";
        document.getElementById("suapoff").innerHTML = "<i class='fb fa-solid fa-xmark'></i>";
        document.getElementById("suapoff").style.color = "red";
        document.getElementById("suapoff").style.fontSize = "30px";
       
      }
      
 
  }));
  }

suap()

 function pext(){
     console.log(get("https://dados.ifpb.edu.br/dataset/029b50a4-f50a-422d-867f-b457277b5168/resource/d3b1908b-e6d6-4437-aefb-281b7b1b57ea/download/projetos-extensao.json", function(data) {
     if (data == 0 || data == 200){
        document.getElementById("extname").innerHTML = "Normal";
        document.getElementById("exton").innerHTML = "<i class='fb fa-solid fa-circle-check'></i>";
        document.getElementById("exton").style.color = "green";
        document.getElementById("exton").style.fontSize = "30px";
 
      }
      else{
        document.getElementById("extname").innerHTML = "Error";
        document.getElementById("extoff").innerHTML = "<i class='fb fa-solid fa-xmark'></i>";
        document.getElementById("extoff").style.color = "red";
        document.getElementById("extoff").style.fontSize = "30px";
       
      }
      
 
  }));
  }
 
 pext()

    function ppesq(){
        console.log(get("https://swapi.dev/api/planets/3/9", function(data) {
        if (data == 0 || data == 200){
            document.getElementById("pesqname").innerHTML = "Normal";
            document.getElementById("pesqon").innerHTML = "<i class='fb fa-solid fa-circle-check'></i>";
            document.getElementById("pesqon").style.color = "green";
            document.getElementById("pesqon").style.fontSize = "30px";
          
    
    
        }
        else{
            document.getElementById("pesqname").innerHTML = "Error";
            document.getElementById("pesqoff").innerHTML = "<i class='fb fa-solid fa-xmark'></i>";
            document.getElementById("pesqoff").style.color = "red";
            document.getElementById("pesqoff").style.fontSize = "30px";
            
        
        }
        
    
    }));
    }

ppesq()




