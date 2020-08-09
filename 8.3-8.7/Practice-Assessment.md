# **Solutions for Practice Assessment**

## **Problem One**

```js
const circle = document.getElementById("blue-circumference-circle");
const blueButton = document.getElementById("make-circle-blue");
const blueCircle = () => circle.classList.add("blue");
blueButton.addEventListener("click", blueCircle);
```

## **Problem Two**

```js
const appleButton = document.getElementById("remove-content-from-apples");
const appleDiv = document.getElementById("apples-div");
const removeApple = () => (appleDiv.innerHTML = "");
appleButton.addEventListener("click", removeApple);
```

## **Problem Three**

```js
const imgButton = document.getElementById("add-image-btn");
const imgDiv = document.getElementById("add-image");
const addImg = () => {
  if (imgDiv.hasChildNodes() === false) {
    const newImg = document.createElement("IMG");
    newImg.setAttribute("src", "./images/logo-emblem-black.svg");
    imgDiv.appendChild(newImg);
  }
};
imgButton.addEventListener("click", addImg);
```

## **Problem Four**

```js
const bubbleInput = document.getElementById("bubble-friend");
bubbleInput.addEventListener("keydown", (event) => {
  event.stopPropagation();
});
```

## **Problem Five**

```js
const multiply = document.getElementById("multiply");
const add = document.getElementById("add-two");
const reset = document.getElementById("reset-total");
const totalValue = document.getElementById("total-value");
totalValue.innerHTML = total;
const multiplyNum = () => {
  total *= 2;
  totalValue.innerHTML = total;
};
const addNum = () => {
  total += 2;
  totalValue.innerHTML = total;
};
const resetNum = () => {
  total = 1;
  totalValue.innerHTML = total;
};
multiply.addEventListener("click", multiplyNum);
add.addEventListener("click", addNum);
reset.addEventListener("click", resetNum);
```

## **Problem Six**

```js
let storedFlavor = localStorage.getItem("favorite");
const inputBox = document.getElementById("fav-flavor");
const flavorButton = document.getElementById("store-flavor");

if (storedFlavor) {
  inputBox.value = storedFlavor;
}
flavorButton.addEventListener("click", (event) => {
  localStorage.setItem("favorite", inputBox.value);
});
```

## **Problem Seven**

```js
const inputId = document.getElementById("will-not-check");
inputId.addEventListener("click", (event) => {
  event.preventDefault();
});
```

---
