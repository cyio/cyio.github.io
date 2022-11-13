# React source code 

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

1. createRoot 做了什么
```
createRoot
    createContainer
      root.current = uninitializedFiber;
        createFiber
            FiberNode
      uninitializedFiber.stateNode = root;
      initializeUpdateQueue(uninitializedFiber);
          fiber.updateQueue = queue;
```
2. root.render 做了什么
3. App 如何被 render
