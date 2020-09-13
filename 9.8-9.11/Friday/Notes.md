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
