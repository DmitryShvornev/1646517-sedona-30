const hotelSearch = document.querySelector(".hotel-search");
const hotelForm = document.querySelector(".hotel-form");
const hotelFormArrival = hotelForm.querySelector("[name=arrival]");
const hotelFormDeparture = hotelForm.querySelector("[name=departure]");
const hotelFormAdults = hotelForm.querySelector("[name=adults]");
const hotelFormChildren = hotelForm.querySelector("[name=children]");

let isStorageSupport = true;
let adults = '';
let children = '';

try {
  adults = localStorage.getItem("adults");
  children = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

hotelForm.classList.add("hotel-form-hide");

hotelSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  hotelForm.classList.remove("hotel-form-error");
  hotelForm.classList.toggle("hotel-form-show");
  if (adults && children) {
    hotelFormAdults.value = adults;
    hotelFormChildren.value = children;
  }
});

hotelForm.addEventListener("submit", function (evt) {
  if (!hotelFormArrival.value || !hotelFormDeparture.value || !hotelFormAdults.value || !hotelFormChildren.value) {
    evt.preventDefault();
    hotelForm.classList.remove("hotel-form-error");
    hotelForm.offsetWidth = hotelForm.offsetWidth;
    hotelForm.classList.add("hotel-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", hotelFormAdults.value);
      localStorage.setItem("children", hotelFormChildren.value);
    }
  }
});


if (hotelForm.classList.contains("hotel-form-error")) {
  hotelForm.classList.remove("hotel-form-error");
}
