# **Notes**

## **HTTP Basics**

> "If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea." - Antoine de Saint-Exupery;

- **`HTTP`** : Hypertext Transfer Protocol.

  - **`HT`** : Hypertext - content with references to other content.
    - Term used to refer to content in computing.
    - What makes the Web a "web".
    - Most fundamental part of how we interact.
    - **`Hyperlinks`** : Links; references between HT resources.
  - **`TP`** : Transfer Protocol - set of guidelines surrounding the transmission of data.
    - Defines the expectations for both ends of the transer.
    - Defines some ways the transfer might fail.

- HTTP is a **`request/response`** protocol.
- HTTP works between **`clients`** & **`servers`**.
  - **`Clients`** : User Agent - the data consumer.
  - **`Servers`** : Origin - Data provider & where the application is running.

![pic](https://assets.aaonline.io/Module-Web/http/image-http-exchange.svg)

**Properties of HTTP**

- **`Reliable Connections`** : Messages passed between a client & server sacrifice a little speed for the sake of trust.

  - **`TCP`** is HTTP's preferred connection type.

- **`Stateless Transfer`** : HTTP is a stateless protocol - meaning it does not store any kind of information.

  - HTTP supports cookies.

- **`Intermediaries`** : Servers or devices that pass your request along which come in three types:
  - 1. **`Proxies`** : Modify your request so it appears to come from a different source.
  - 2. **`Gateways`** : Pretend to be the resource server you requested.
  - 3. **`Tunnels`** : Simply passes your request along.

![pic](https://assets.aaonline.io/Module-Web/http/image-http-proxy-tunnel-gateway.svg)

---

## **HTTP Requests**

**Structure of an HTTP Request**

```
GET / HTTP/1.1
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
```

> Example of how an HTTP request looks like for visiting appacademy.io

- **Request-line & HTTP verbs**

  - The first line of an HTTP Request made up of three parts:
    1. The **`Method`** : Indicated by an HTTP Verb.
    2. The **`URI`** : Uniform Resource Indicator that ID's our request.
    3. THe **`HTTP` Version** : Version we expect to use.
  - HTTP Verbs are a simply way of declaring our intention to the server.
    - **`GET`** : Used for direct requests.
    - **`POST`**: Used for creating new resources on the server.
    - **`PUT`**: Used to updated a resource on the server.
    - **`PATCH`** : Similar to PUT, but do not require the whole resource to perform the update.
    - **`DELETE`** : Used to destroy resources on the server.

- **Headers**

  - Key-Value pairs that come after the request line - they appear on sep. lines and define metadata needed to process the request.
  - Some common headers:
    - **`Host`** : Root path for our URI.
    - **`User-Agent`** : Displays information about which browser the request originated from.
    - **`Referer`** : Defines the URL you're coming from.
    - **`Accept`** : Indicates what the client will receive.
    - **`Content`-** : Define Details about the body of the request.

- **Body**
  - For when we need to send data that doesn't fit into the header & is too complex for the URI we can use the _body_.
  - **`URL encoding`** : Most common way form data is formatted.
  - `name=claire&age=29&iceCream=vanilla`
  - We can also format using JSON or XML.

**Sending an HTTP request from the command line**

- **netcat** : (nc) A Utility that comes as part of Unix-line environments such as Ubuntu and macOS.
  - Allows us to open a direct connection with a URL and manually send HTTP requests.
  - `nc -v appacademy.io 80`
  - `man nc` to open the netcat manual.

---

## **HTTP Responses**

**Structure of a Response**

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: close
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
X-Runtime: 0.006894
Strict-Transport-Security: max-age=31536000
Vary: Origin
Via: 1.1 vegur
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
CF-RAY: 51d641d1ca7d2d45-TXL

<!DOCTYPE html>
<html>
...
...
</html>
```

- **Status**

  - First line of an HTTP response - gives us a high level overview of the server's intentions. (**`status line`**)
  - `HTTP/1.1 200 OK`
  - **`HTTP status codes`** : numeric way of representing a server's response.
    - Follow the structure: x: xxx - xxx;
    - **`Status codes 100 - 199: Informational`**
      - Allow the clinet to know that a req. was received, and provides extra info from the server.
    - **`Status codes 200 - 299: Successful`**
      - Indicate that the request has succeeded and the server is handling it.
      - Common Examples: 200 OK (req received and fulfilled) & 201 Created (received and new record was created)
    - **`Status codes 300 - 399: Redirection`**
      - Let the client know if there has been a change.
      - Common Examples: 301 Moved Permanently (resource you requested is in a totally new location) & 302 Found (indicates a temporary move)
    - **`Status codes 400 - 499: Client Error`**
      - Indicate problem with client's request.
      - Common Examples: 400 Bad Request (received, but could not understand) & 401 Unauthorized (resource exists but you're not allowed to see w/o authentication) & 403 Forbidden (resource exists but you're not allowed to see it at all ) & 404 Not Found (resource requested does not exist);
    - **`Status codes 500 - 599: Server Error`**
      - Indicates request was formatted correctly, but the server couldn't do what you asked due to an internal problem.
      - Common Examples: 500 Internal Server Error (Server had trouble processing) & 504 Gateway Timeout (Server timeout);

- **Headers** : Work just like HTTP requests.

  - Common Examples:
    - **`Location`** : Used by client for redirection responses.
    - **`Content-Type`** : Let's client know what format the body is in.
    - **`Expires`** : When response is no longer valid
    - **`Content-Disposition`** : Let's client know how to display the response.
    - **`Set-Cookie`** : Sends data back to the client to set on the cookie.

- **`Data`** : If the request is successful, the body of the response will contain the resource you have requested.

---
