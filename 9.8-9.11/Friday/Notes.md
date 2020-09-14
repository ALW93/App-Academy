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

- BEM was created as a guideline to solve the issue of loose standards around CSS naming conventions.
- **BEM** stands for `block`, `element`, `modifier`.
- **Block**

  - A standalone entity that is meaningful on it's own.
  - Can be nested and interact with one another.
  - Holistic entities without DOM rep can be blocks.
  - May consist latin letters, digits, and dashes.
  - Any DOM node can be a block if it accepts a class name.

- **Element**

  - Part of a block and has no standalone meaning.
  - Any element that is semantically tied to a block.
  - May consist latin letters, digits, and dashes.
  - Formed by using two underscores after it's block name.
  - Any DOM node within a block can be an element.
  - Element classes should be used independently.

- **Modifier**
  - A flag on blocks or elements. Use them to change appearance, behavior or state.
  - Extra class name to add onto blocks or elements.
  - Add mods only to the elements they modify.
  - Modifier names may consist of Latin letters, digits, dashes and underscores.
  - Written with two dashes.

**BEM Example**

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

```css
/* block selector */
.form {
}

/* block modifier selector */
.form--theme-xmas {
}

/* block modifier selector */
.form--simple {
}

/* element selector */
.form__input {
}

/* element selector */
.form__submit {
}

/* element modifier selector */
.form__submit--disabled {
}
```

---
