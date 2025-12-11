# uids-generator

A lightweight, simple unique ID generator based on user input type:

- `alphabet` → alphabet-based ID
- `number` → numeric ID
- `alphanumeric` → alphanumeric ID

It works seamlessly in **Node.js**, **Express**, **React**, **Vue**, or browser environments.

---

## Installation

```bash
npm install uids-generator --save
# or
yarn add uids-generator
```

```bash
# Node.js / Express (CommonJS)
const { generateUniqueId } = require("uids-generator");

# Generate alphabet ID
const alphabetId = generateUniqueId("alphabet", 10);
console.log(alphabetId);

# Example output: { id: 'AbCdEfGhIj', length: 10, type: 'alphabet' }

# Express example
const express = require("express");
const app = express();

app.get("/generate-id", (req, res) => {
const uid = generateUniqueId("alphanumeric", 12);
res.json(uid);
});

app.listen(3000, () => console.log("Server running on port 3000"));

generateUniqueId("alphabet", 10);
# { id: 'AbCdEfGhIj', length: 10, type: 'alphabet' }

generateUniqueId("number", 8);
# { id: '85017429', length: 8, type: 'number' }

generateUniqueId("alphanumeric", 16);
# { id: 'g8H1kP92Ms7Qx1Za', length: 16, type: 'alphanumeric' }
```
