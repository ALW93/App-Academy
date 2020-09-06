# **Notes**

## **Network Knowledge**

## **OSI Network Model**

- **OSI** : The Open Systems Interconnection reference model is a well known Network Model created in the UK that has both conceptual layers **and** suggested protocols for each.
  - There are seven layers to the OSI Model.

---

## **Binary and Hexidecimal**

- **`Binary`** : Number expressed in the base-2 numeral system or binary numeral system.
  - **`Base`** : Number System, computers use a Base 2 NS.
- **`CPU`** : Central Processing Unit, an electronic circuitry within a computer that executes instructions that make up a computer program.

- It is easy to understand binary numbers if you remember the bases.
- 1, 2, 4, 8, 16, 32, 64, 128...etc.

- **`Bit`** : A single digit represented by either 1 (ON) or 2 (OFF).
  ![pic](https://i.gyazo.com/413dd89d209c0b2a4d10d8c1f6fe40b6.png)

- **`Hexadecimal`** : Base 16, useful numeric system due to it making it easier for us to read binary.
  - You will sometimes see hexadecimals pre-pended with a `0x`.

```
hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  A,  B,  C,  D,  E,  F
decimal:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

- If you provide a numerical base in JS in the .toString() method you can convert things to binary and decimal. (parseInt can also be used)

```js
Number(42).toString(16); // 2a
Number(42).toString(2); // 101010
```

```js
parseInt("101010", 2); // 42
parseInt("2A", 16); // 42
```

---

## **Internet Protocol**

- **`TCP`** : Transmission Control Protocol.
- **`IP`** : Internet Protocol.
- **`Internet`** : A series of interconnected networks sharing data.
- **`Packet`** : Format that IP data is packaged in.
  - Contains metadata in headers, and body content.
- **`Pack-Switching`** : When a message is split up into separate 'packets', delivered to a destination, and reassembled as appropriate.
  > A Byte is 8 Bits
  > ![ip4](https://assets.aaonline.io/Module-Web/network/image-ip-ipv4-headers.svg)

* IPV4

![ipv6](https://assets.aaonline.io/Module-Web/network/image-ip-ipv6-headers.svg)

- IPV6
- **`Version`** : Binary representation of the version #.
- **`Traffic Class`** : Used to Identify different types of packets.
- **`Flow Label`** : An experimental option used for adding packet sequencing into IP.
- **`Payload Length`** : Let's the receivers know how large the data in the packet will be.
- **`Next Header`** : Usually identifies the protocol type of the packet's data.
- **`Hop Limit`** : Means of preventing packets from being passed around routers forever.
- **`Source Address`** : Where the pack originated.
- **`Destination Address`** : Where the packet is heading.
  > All of the headers have a fixed length of 40 bytes.
