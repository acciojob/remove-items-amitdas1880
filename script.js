//your JS code here. If required.
let select = document.getElementById("colorSelect");
select.addEventListner('change',get_change_value)

let Red = document.getElementById("Red");
let Green = document.getElementById("Green");
let White = document.getElementById("White");
let Black = document.getElementById("Black");

let val ="";
const get_change_value = (e) => {
	val=e.target.value
}

let btn = document.getElementById("btn");
const btn_click=(e)=>{
	e.preventDefalt()
	if(val=="Red"){
		Red.style.display="none"
	}
	else if(val=="Green"){
		Green.style.display="none"
	}
	else if(val=="White"){
		White.style.display="none"
	}
	else if(val=="Black"){
		Black.style.display="none"
	}
}
btn.addEventListner("click", btn_click)



