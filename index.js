const selectBtn = document.getElementById("selectBtn");
const dropdown = document.getElementById("dropdown");
const selectedImg = document.getElementById("selectedImg");
const selectedText = document.getElementById("selectedText");

selectBtn.onclick = () => {
  dropdown.classList.toggle("hidden");
};

function selectOption(element)
{
  const img = element.getAttribute("data-img");
  const text = element.getAttribute("data-text");

  selectedImg.src = img;
  selectedText.innerText = text;

  dropdown.classList.add("hidden");
}
const selectBtn2 = document.getElementById("selectBtn2");
const dropdown2 = document.getElementById("dropdown2");
const selectedImg2 = document.getElementById("selectedImg2");
const selectedText2 = document.getElementById("selectedText2");

selectBtn2.onclick = () => {
  dropdown2.classList.toggle("hidden");
};

function selectOption2(element)
{
  const img = element.getAttribute("data-img");
  const text = element.getAttribute("data-text");

  selectedImg2.src = img;
  selectedText2.innerText = text;

  dropdown2.classList.add("hidden");
}