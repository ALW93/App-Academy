# **Notes**

## **The Box Model**

- **Box Model** : A concept that basically boils down that every DOM element has a box around it.

![boxmodel](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/the-box-model.svg)

> Imagine a gift, inside is the gift, wrapped in foam all around (padding), and the giftbox outside of it (border) and then a wrapping paper on the giftbox (margin).

- For items that are using `block` as it's display, the browser will follow these rules to layout the element:
  - The box fills 100% of the available container space.
  - Every new box takes on a new line/row.
  - Width and Height properties are respected.
  - Padding, Margin, and Border will push other elements away from the box.
- Certain elements have `block` as their default display, such as: divs, headers, and paragraphs.

- For items that are using `inline` as it's display, the browser will follow these rules to layout the element:
  - Each box appears in a single line until it fills up the space.
  - Width and height are **not** respected.
  - Padding, Margin, and Border are applied but they **do not** push other elements away from the box.
- Certain elements have `inline` as their default display, such as: span tags, anchors, and images.

**Standard Box Model vs Border-Box**

- As per the standard Box Model, the width and height pertains to the content of the box and excludes any additional padding, borders, and margins.

![example](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/standard-box.svg)

- This bothered many programmers so they created the **border box** to include the calculation of the entire box's height and width.

![ex](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/border-box.svg)

**Inline-Block**

- Inline-block uses the best features of both `block` and `inline`.
  - Elements still get laid out left to right.
  - Layout takes into account specified width and height.

**Padding**

- Padding applies padding to every side of a box. It is shorthand for four padding properties in this order: `padding-top`, `padding-right`, `padding-bottom`, `padding-left` (clockwise!)

**Border**

- Border applies a border on all sides of an element. It takes three values in this order: `border-width`, `border-style`, `border-color`.
- All three properties can be broken down in the four sides clockwise: top, right, bottom, left.

**Margin**

- Margin sets margins on every side of an element. It takes four values in this order: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.
- You can use `margin: 0 auto` to center an element.

---

## **Positioning**

- The `position` property allows us to set the position of elements on a page and is an integral part of creatnig a Web page layout.
- It accepts five values: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- Every property (minus `static`) is used with: `top`, `right`, `bottom`, and `left` to position an element on a page.

**Static Positioning**

- The default position value of page elements.
- Most likely will not use static that much.

**Relative Positioning**

- Remains in it's original position in the page flow.
- It is positioned _RELATIVE_ to the it's _ORIGINAL PLACE_ on the page flow.
- Creates a **stacking context** : overlapping elements whose order can be set by the z-index property.

```css
#pink-box {
  background-color: #ff69b4;
  bottom: 0;
  left: -20px;
  position: relative;
  right: 0;
  top: 0;
}
```

![rel](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-pink-box.png)

**Absolute Positioning**

- Absolute elements are removed from the normal page flow and other elements around it act like it's not there. (how we can easily achieve some layering)
- Here are some examples to illustration absolute positioning:

```css
.container {
  background-color: #2b2d2f;
  position: relative;
}

#pink-box {
  position: absolute;
  top: 60px;
}
```

![img](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-pink-box.png)

- Note that the container ele has a relative positioning - this is so that any changes made to the absolute positioned children will be positioned from it's top-left corner.
- Note that because we removed the pink from the normal page flow, the container has now shifted the blue box to where the pink box should have been - which is why it is now layered beneath the pink.

```css
.container {
  background-color: #2b2d2f;
  position: relative;
}

#pink-box {
  position: absolute;
  top: 60px;
}

#blue-box {
  position: absolute;
}
```

![img](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/absolute-blue-box.png)

- As you can see here, since we have also taken the blue box out of the normal page flow by declaring it as absoutely positioned it now overlaps over the pink box.

```css
.container {
  background-color: #2b2d2f;
  position: relative;
}

#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```

![img](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/relative-parent-absolute-child.png)

- Example where the absolute element has it's bottom property modified.

```css
.container {
  background-color: #2b2d2f;
}

#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```

![img](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/static-parent-absolute-child.png)

- If we removed the container's relative position. Our absolute unit would look for the nearest parent which would be the document itself.

**Fixed Positioning**

- Another positioning that removes it's element from the page flow, and automatically positions it's parent as the HTML doc itself.
- Fixed also uses top, right, bottom, and left.
- Useful for things like nav bars or other features we want to keep visible as the user scrolls.

**Sticky Positioning**

- Remains in it's original position in the page flow, and it is positioned relative to it's closest block-level ancestor and any _scrolling_ ancestors.
- Behaves like a relatively positioned element until the point at which you would normally scroll past it's viewport - then it sticks!
- It is positioned with top, right, bottom, and left.
- A good example are headers in a scrollable list.
  ![sticky](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Responsive-Design/layout/assets/css-layout-sticky-positioning.gif)

---

## **Flexible Box Model**
