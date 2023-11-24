# URL Shortener Service (Node.js)

> This is a simple example of a URL shortener service created using Express.js, for the purpose of learning.

### Architecture

#### Generate Short URL

```mermaid
sequenceDiagram
    autonumber
    actor Browser Client as User

    Browser Client->>URL Shortener Service: /url

    Note over Browser Client, URL Shortener Service: https://mctechie.vercel.app
    
    rect rgb(127, 12, 232)
        URL Shortener Service-->>URL Shortener Service: Create a `shortID`
        URL Shortener Service-->>MongoDB: Create a URL Document
        MongoDB-->>URL Shortener Service: URL Document
        URL Shortener Service->>Browser Client: Respond with  shortID
    end

    Note over Browser Client, URL Shortener Service: { shortID: agEH-jvH }
```

#### Redirect to Original URL

```mermaid
sequenceDiagram
    autonumber
    actor Browser Client as User
    Browser Client->>URL Shortener Service: /url/:shortID

    Note over Browser Client, URL Shortener Service: /url/agEH-jvH

    rect rgb(0, 100, 0)
        URL Shortener Service-->>MongoDB: Find URL Document
        MongoDB-->>URL Shortener Service: URL Document
        URL Shortener Service->>Browser Client: Redirect to URL
    end

    Note over Browser Client, URL Shortener Service: https://mctechie.vercel.app
```

#### Analytics

```mermaid
sequenceDiagram
    autonumber
    actor Browser Client as User

    Browser Client->>URL Shortener Service: /url/analytics/:shortID

    Note over Browser Client, URL Shortener Service: /url/analytics/agEH-jvH
    
    rect rgb(127, 12, 232)
        URL Shortener Service-->>MongoDB: Find URL Document
        MongoDB-->>URL Shortener Service: URL Document
        URL Shortener Service->>Browser Client: Send Analytics Data
    end

    Note over Browser Client, URL Shortener Service: Visit History, Number of Clicks, etc.
```

### How to run

> This project requires Node.js to run.

```bash
# Clone the repository
git clone https://github.com/McTechie/node-url-shortener.git

# Change directory
cd node-url-shortener

# Install dependencies
npm install

# Run the server
npm start
```

### Demo

#### Client 1

![Client 1](assets/client1.png)

#### Client 2

![Client 2](assets/client2.png)

#### MongoDB

![MongoDB](assets/mongoDB.png)

#### Analytics

![Analytics](assets/analytics.png)
