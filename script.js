
$('.dropdown.keep-open').on({
  "shown.bs.dropdown": function() { this.closable = false; },
  "click":             function() { this.closable = true; },
  "hide.bs.dropdown":  function() { return this.closable; }
});

function handleDropdown() {
    if ($("#btn")[0].className == 'on') {
      console.log('1')
      $("#btn")[0].classList.remove('on');
    }
    else {
      console.log('2')
      $("#btn")[0].classList.add('on');
    }
}

function navHandler() {
  handleDropdown()

  if(!$("#mySidenav")[0].classList.contains("show")){
    console.log('1')
    document.getElementById("mySidenav").style.width = "300px";
    $("#mySidenav")[0].classList.add("show")
  }
  else{
    console.log('2')
    document.getElementById("mySidenav").style.width = "0";
    $("#mySidenav")[0].classList.remove("show")
  }
}
