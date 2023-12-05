import { Widget } from "./widget/Widget";
import heartImage from "../img/heart.png";

function app() {
  const content = document.querySelector(".text-box-wrapper") as HTMLElement;
  const wrapper = document.querySelector(".text-box-wrapper") as HTMLElement;
  const btnLike = document.querySelector(".btn-like") as HTMLElement;
  const animations = ["likemov1", "likemov2", "likemov3", "likemov4"];
  const collapseHandler = () => {
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = "";
    } else {
      wrapper.style.maxHeight = content?.scrollHeight + "px";
    }
  };

  const likeHandler = () => {
    const likeImg = document.createElement("img") as HTMLImageElement;
    likeImg.classList.add("like");
    likeImg.src = heartImage as string;
    likeImg.width = 30;

    likeImg.style.animationName =
      animations[Math.floor(Math.random() * animations.length)];

    document.body.appendChild(likeImg);
  };

  const animationEndHandler = (event: Event) => {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains("like")) targetElement.remove();
  };

  document.querySelector(".btn")?.addEventListener("click", collapseHandler);
  btnLike?.addEventListener("click", likeHandler);
  document.body.addEventListener("animationend", animationEndHandler);
}

app();
new Widget();
