const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function()
{
      const num = getRandumNumber();
      console.log(num);

      document.body.style.backgroundColor = colors[num];
      color.textContent = colors[num];
}
);

function getRandumNumber(){  
    return Math.floor(Math.random() * colors.length);
}

