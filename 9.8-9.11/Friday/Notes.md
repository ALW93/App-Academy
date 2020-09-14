# **Notes**

## **CSS Hover Effect and Handling Overflow**

```css
.btn {
  background-color: #00bfff;
  color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
}
.btn--active:hover {
  cursor: pointer;
  transform: translateY(-0.25rem); /* Moves our button up/down on the Y axis */
}
```

- The Pseudo Class Selector **`hover`** activates when the cursor goes over the selected element.

**Content Overflow**

- You can apply an `overflow` content property to an element if it's inner contents are spilling over.
- There are three members in the overflow family:
  - **`overflow-x`** : Apply horizontally.
  - **`overflow-y`** : Apply vertically.
  - **`overflow`** : Apply both directions.

---

## **Transitions**

- Transitions provide a way to control animation speed when changing CSS properties.
- **Implicit Transitions** : Animations that involve transitioning between two states.

**Defining Transitions**

- **`transition-property`** : specifies the name of the CSS property to apply the transition.
- **`transition-duration`** : during of the transition.
- **`transition-delay`** : time before the transition should start.

**Examples** :

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

![tran](https://assets.aaonline.io/Module-Solo-Prep-Work/assets/example-css-transition-simple.gif)

- After a delay of two seconds, a four second transition begins where the font size goes from 36px to 14px.

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

![pic](https://assets.aaonline.io/Module-Solo-Prep-Work/assets/example-css-transition-multiple.gif)

- When the mouse hovers over a box, it spins due to the rotate transform. Width and height change and also the bg color.

---

## **BEM Guidelines**
