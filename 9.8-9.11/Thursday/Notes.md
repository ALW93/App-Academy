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
