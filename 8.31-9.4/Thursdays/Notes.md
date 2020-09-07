# **Notes**

## **Network Knowledge**

## **OSI Network Model**

- **`OSI`** : The Open Systems Interconnection reference model is a well known Network Model created in the UK that has both conceptual layers **and** suggested protocols for each.

  - There are seven layers to the OSI Model.
    ![osilayer](https://assets.aaonline.io/Module-Web/network/image-network-models-osi.svg)
  - **`Application`** : Includes information used by client-side software, data from this later interacts directly with applications. (i.e. HTTP)
  - **`Presentation`** : The syntax later that converts data from machine-readable to human-readable. Includes data compression, encryption, and character encoding. (i.e. JPEG & GIF)
  - **`Session`** : Includes protocols responsible for authentication and data continuity. Includes authorization or re-establishing a dropp connection. (i.e. RPC (Remote Procedure Call))
  - **`Transport`** : Utilization of transport protocols (i.e. TCP and UDP)
  - **`Network`** : Basically the internet layer (i.e. IP)
  - **`Data Link`** : Deal with connections from one machine's network interface to another. (i.e. ethernet)
  - **`Physical`** : Translating raw electrical signals to bits & bytes of data. (i.e. Wi-Fi & DSL)

- It is important to remember that OSI Model is highly conceptual, it's practical uses are limited.
- TCP/IP is much more practical compared to OSI, but it is purely practical.

---

## **TCP/IP Model**

- **`Reference Model`** : A High-level overview of a complex topic provided by an organization that manages it.

**Layers of the TCP/IP Model**
![tcpiplayer](https://assets.aaonline.io/Module-Web/network/image-network-models-tcp-ip.svg)

- **`Application`** : Includes protocols related to user-facing data. Anything that is transmitted from the Transport layer is considered Application Layer Data (i.e. HTTP & FTP)
- **`Transport`** : TCP & UDP.
- **`Internet`** : Connects separate networks together (IP)
- **`Link`** : Lower-level communication standards.
- **`Physical?`** : There is a supposed fifth layer that cinludes all the electrical concepts that span across wires, but it is not officially stated.
  ![encap](https://assets.aaonline.io/Module-Web/network/image-network-models-encapsulation.svg)
- We can think of the layers of our reference model as being **encapsulated**.

---

## **Binary and Hexidecimal**

- **`Binary`** : Number expressed in the base-2 numeral system or binary numeral system.
  - **`Base`** : Number System, computers use a Base 2 NS.
- **`CPU`** : Central Processing Unit, an electronic circuitry within a computer that executes instructions that make up a computer program.

- It is easy to understand binary numbers if you remember the bases.
- 1, 2, 4, 8, 16, 32, 64, 128...etc.

- **`Bit`** : A single digit represented by either 1 (ON) or 2 (OFF).
  ![pic](https://i.gyazo.com/413dd89d209c0b2a4d10d8c1f6fe40b6.png)

- **`Byte`** : Sequence of 8 Bits.

- **`Hexadecimal`** : Base 16, useful numeric system due to it making it easier for us to read binary.
  - Helps to make up for base 10 only going from 0 - 9, adds in A, B, C, D, E, F.
  - You will sometimes see hexadecimals pre-pended with a `0x`.
  - `FF = 255 = 11111111 = 1 byte`

```
hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  A,  B,  C,  D,  E,  F
decimal:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
```

```
Regular Numbers: 4 8 15 16 23 42
Binary: 00000100 00001000 00001111 00010000 00010111 00101010
Hexadecimal: 04 08 0F 10 17 2A
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
  - TCP is fault tolerant and end-to-end.
  - If data transmission fails it can be cached and re-sent.
  - No single central system that can take down the entire network.
- **`IP`** : Internet Protocol.
- **`Internet`** : A series of interconnected networks sharing data.
- **`Packet`** : Format that IP data is packaged in.
  - Contains metadata in headers, and body content.
- **`Pack-Switching`** : When a message is split up into separate 'packets', delivered to a destination, and reassembled as appropriate.
  > A Byte is 8 Bits
  > ![ip4](https://assets.aaonline.io/Module-Web/network/image-ip-ipv4-headers.svg)

* IPV4
* IPv4 is still the most commonly used protocol version online.

![ipv6](https://assets.aaonline.io/Module-Web/network/image-ip-ipv6-headers.svg)

- IPV6
- Was created because we are running out of IP Addresses.
- **`Version`** : Binary representation of the version #.
- **`Traffic Class`** : Used to Identify different types of packets.
- **`Flow Label`** : An experimental option used for adding packet sequencing into IP.
- **`Payload Length`** : Let's the receivers know how large the data in the packet will be.
- **`Next Header`** : Usually identifies the protocol type of the packet's data.
- **`Hop Limit`** : Means of preventing packets from being passed around routers forever.
- **`Source Address`** : Where the pack originated.
- **`Destination Address`** : Where the packet is heading.
  > All of the headers have a fixed length of 40 bytes.

**Special Addresses**

- **Local Host** : Loopback Address, or the identifier for your current machine.
  - `127.0.0.1`
- **ALl-Interfaces Address** : Used to catch any incoming requests regardless of the intended destination.
  - `0.0.0.0`

---

## **Transport Protocols**

- Transport Protocols act as our delivery person.
- IP is concerned with machine-to-machine communication.
- HTTP is designed for application-to-application communication.
- **`Port`** : Virtual interfaces that allow a single device to host lot's of different applications & services.
- **`TCP`** : Transmission Control Protocol, the most common transport protocol.

  - Connection-oriented protocol.
  - Reliable protocol because the segments cannot be lost.
  - Heavy protocol to use (hence, sometimes there is buffering)

- **`UDP`** : User Datagram Protocol.
  - Unreliable protocol.
  - Connection-less and provides no verification if data has been received.
  - Up to the sender/recipient to manage expectati

---

## **DNS**

- **`DNS`** : Domain Name System is a distributed appraoch to providing easily-understood names for internetworked devices. (Similar to a phonebook)
  - Invented as a way to distribute the work to numerous organizations, lightening the load and allowing much more rapid growth.

* **`Domain`** : A website's domain refers to the 'friendly' name for the website's host, or the server providing the site's content.
  ![url](https://assets.aaonline.io/Module-Web/network/image-ip-dns-domain.svg)
  - Top Level Domain the last part of the domain (.com, .net, .org)
  - Second Level Domain (Name of the website)
  - Subdomain (www)

- **`Resolution`** : Process of working out which name server is needed.
  - During resolving, we work from right to left.

**DNS Records**

- **`Zone File`** : Text file containing, host names, IP Addresses, and resource types.
- Common DNS Record Types:
  - **`SOA`** : Start of Authority, let's use know what name server is the primary authority (**`THE MINIMUM REQUIREMENT IN A ZONE FILE`**)
  - **`NS`** : Keeps us connected to our zone by pointing to name servers.
  - **`A/AAAA`** : A = Domain Name to IPv4 & AAAA = Domain Name to IPv6
  - **`CNAME`** : Links Domain name to Domain Name.
  - **`MX`** : Mail Exchanger, used by e-mail clients.
  - **`TTL`** : Time to live, measure of how long a record should be cached by a DNS name server.

---

## **Network Hardware**

- **HUB** : Simplest networking device aka a Signal Splitter.

  - Cheap and found in older networks.
  - Hubs do not do any filtering, every single data packet is sent to every single device all the time.
  - No one uses them anymore.

- **Switches: Traffic Control** : Intelligent Hubs, track devices connected to them, help manage network load, and can manage separate internal networks with ease.
  - The Max Address Table is the largest difference from hubs.
  - **`Flood`** : If a destination address is unknown, the switch will flood received data out to all connect devices.
  - **`Forward`** : If the destination is known, it will send data directly to that device.
  - **`Filter`** : When data is dropped entirely from a transfer.
- **`Routers`** : Connect separate networks with each other.
  - Participate in a process called NAT (Network Address Translation)

---
