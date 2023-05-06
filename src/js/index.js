const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
  if (menuHamburguer.checked) {
    navMenu.classList.add('aparecer')
  } else {
    navMenu.classList.remove('aparecer')
  }
})

const shortenLinkBtn = document.querySelector("#submit");
const error = document.querySelector(".error");
const shortenedLinksContainer = document.querySelector(".shortened-links");

shortenLinkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = document.querySelector("#input-url").value;

  if (inputValue === "") {
    error.innerHTML = "Please input a valid url";
    return;
  }

  try {
    fetchLink(inputValue).then((res) => {
      const shortenedLink = document.createElement("div");
      shortenedLink.innerHTML = `
              <p class='original-links'>${res.result.original_link}</p>
              <div class="shortened-links">
                <p class="result">${res.result.short_link}</p>
                <button class='copy-btn'>Copy</button>
            </div>`;

      shortenedLinksContainer.appendChild(shortenedLink);

      const copyBtn = document.querySelectorAll(".copy-btn");

      copyBtn.forEach((elem) =>
        elem.addEventListener("click", (e) => {

          const textElement =
            e.target.parentElement.firstElementChild.textContent;

          copyText(textElement)
          elem.innerHTML = "Copied!";
          elem.classList.add("copied");
        })
      );
      error.innerHTML = "";
    });
  } catch (e) {
    console.log(e);
    error.innerHTML = "Please input a valid url";
  }
});

async function fetchLink(val) {
  const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${val}`);
  const res = await data.json();
  return res;
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.log(error);
  }
};