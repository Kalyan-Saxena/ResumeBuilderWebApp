


function loadjson(file,callback){
  var xmlreq = new XMLHttpRequest();
  xmlreq.overrideMimeType("application/json");
  xmlreq.open('GET',file,true);
  xmlreq.onreadystatechange= function(){

    if(xmlreq.readyState===4 && xmlreq.status==200){

        callback(xmlreq.responseText);

    }

  }

  xmlreq.send();

}

loadjson("resume.json",function(text) {
  var data = JSON.parse(text);


  basic(data.basics);

  //console.log(data);

});

function basic(basics) {
  //console.log(basics.name);

  var leftdiv = document.getElementById('left-div');
  var sub1 = document.createElement('div');
  sub1.classList.add('sub1');

  var p = document.createElement('p');
  p.textContent = basics.label;
  var img = document.createElement('img');
  img.classList.add('img1');
  img.src = basics.picture;
  var h1= document.createElement('h1');
  h1.textContent = basics.name;

   // head3a.textContent = basics.email;
   // head3b.textContent = basics.phone;
   // head3c.textContent = basics.city + basics.region;

   sub1.appendChild(img);
   sub1.appendChild(h1);
   sub1.appendChild(p);

   // sub2.appendChild('head3a');
   // sub2.appendChild('head3b');
   // sub2.appendChild('head3c');

   var sub2 = document.createElement('div');
   sub2.classList.add('sub2');
   var head3a = document.createElement('h3');
   head3a.textContent = basics.email;
   var head3b = document.createElement('h3');
   head3b.textContent = basics.phone;
   var head3c = document.createElement('h3');
   head3c.textContent = basics.location.city +","+ basics.location.region ;

   sub2.appendChild(head3a);
   sub2.appendChild(head3b);
   sub2.appendChild(head3c);

   leftdiv.appendChild(sub1);
   leftdiv.appendChild(sub2);


}
