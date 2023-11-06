window.onload = function() {

       fetch('https://api.jsonbin.io/v3/b/65491f7154105e766fcc4043')
           .then((response) => response.json())
           .then(json => {
               console.log(json.record); 
               let array = json.record;
               for (let i = 0; i < array.length; i++){
                    let div_post = document.createElement("div");
                    div_post.className = "post";

                    let div_pfptext = document.createElement("div");
                    div_pfptext.className = "pfptext";

                    let a_logopost = document.createElement("a");
                    a_logopost.className = "logopost"

                    let pfp  = document.createElement("img");
                    pfp.src = "res/images/pfp.png";
                    pfp.className = "logoimage"

                    a_logopost.appendChild(pfp);

                    let date = document.createElement("span");
                    date.textContent = array[i].date;

                    div_pfptext.appendChild(a_logopost);
                    div_pfptext.appendChild(date);

                    div_post.appendChild(div_pfptext)

                    if (!(array[i].picture === null)) {
                        let image = document.createElement("img");
                        image.className = "postImage"
                        image.src = array[i].picture;
                        image.alt = array[i].alt;
                        div_post.appendChild(image);
                    }

                    let p_text = document.createElement("p");
                    p_text.innerHTML = array[i].text;
                    div_post.appendChild(p_text);

                    let a_thumbsUp = document.createElement("a");
                    a_thumbsUp.className = "thumbsup"
                    let img_thumbsUp  = document.createElement("img");
                    img_thumbsUp.src = "res/images/thumbs-up.png";
                    img_thumbsUp.className = "logoimage"

                    a_thumbsUp.appendChild(img_thumbsUp);
                    div_post.appendChild(a_thumbsUp);

                    let mid = document.getElementsByClassName("mid");
                    mid[0].appendChild(div_post);              
               }   
           })
   
           .catch(err => {
               let errDiv = document.createElement("div");
               errDiv.className = 'post';
               errDiv.innerText = err;
               let mid = document.getElementsByClassName("mid");
               mid[0].appendChild(errDiv);    
               })
   }