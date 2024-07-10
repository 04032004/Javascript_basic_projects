let count=0;     //set initial count

//select values and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
          const styles = e.currentTarget.classList;
          if(styles.contains("decrease")){
              count--;
          }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count =0;
        }

        if(count>0){
            value.style.color = "red";
        }
        if(count<0){
            value.style.color = "green";
        }
        if(count=== 0){
            value.style.color = "blue";
        }
        value.textContent = count;

    });
})
