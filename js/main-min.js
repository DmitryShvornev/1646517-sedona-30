const hotelSearch=document.querySelector(".hotel-search"),hotelForm=document.querySelector(".hotel-form"),hotelFormArrival=hotelForm.querySelector("[name=arrival]"),hotelFormDeparture=hotelForm.querySelector("[name=departure]"),hotelFormAdults=hotelForm.querySelector("[name=adults]"),hotelFormChildren=hotelForm.querySelector("[name=children]");let isStorageSupport=!0,adults="",children="";try{adults=localStorage.getItem("adults"),children=localStorage.getItem("children")}catch(e){isStorageSupport=!1}hotelForm.classList.add("hotel-form-hide"),hotelSearch.addEventListener("click",function(e){e.preventDefault(),hotelForm.classList.remove("hotel-form-error"),hotelForm.classList.toggle("hotel-form-show"),adults&&children&&(hotelFormAdults.value=adults,hotelFormChildren.value=children)}),hotelForm.addEventListener("submit",function(e){hotelFormArrival.value&&hotelFormDeparture.value&&hotelFormAdults.value&&hotelFormChildren.value?isStorageSupport&&(localStorage.setItem("adults",hotelFormAdults.value),localStorage.setItem("children",hotelFormChildren.value)):(e.preventDefault(),hotelForm.classList.remove("hotel-form-error"),hotelForm.offsetWidth=hotelForm.offsetWidth,hotelForm.classList.add("hotel-form-error"))}),hotelForm.classList.contains("hotel-form-error")&&hotelForm.classList.remove("hotel-form-error");
