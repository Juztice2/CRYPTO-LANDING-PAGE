
/* SCROLL ANIMATION */
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-16");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  /* CURRENCIES CONVERTER */
 let base 
 let counter
  const select = document.getElementById("base-currency");
  const counterCurrency =  document.getElementById("counter-currency")

   select.addEventListener("change", function (){
    base = this.value
   })
   counterCurrency.addEventListener("change", function () {
   counter = this.value;
   async function convertCurency() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/fd91997063ef1d81240a8e46/latest/${base}`);
const data = await response.json()
console.log(data);
let timeUpdated = data.
time_last_update_utc;
console.log(timeUpdated)
let convertedTo = data.conversion_rates[counter];
document.querySelector('.date').innerHTML = `${timeUpdated}`;
document.querySelector('.converted-to').innerHTML = `${convertedTo.toFixed(2)}`
  }
  convertCurency();
});
 



 


