# Deno UUID

UUID library for [Deno](https://deno.land).

## Usage

### genuuid

Quickly generate random uuids:

Using deno:

```bash

$ deno https://deno.land/x/uuid/genuuid.ts
Downloading https://deno.land/x/uuid/generate.ts...
Downloading https://deno.land/x/uuid/mod.ts...
ca137e5f-575e-4810-8229-80b6468c54fb

$ deno https://deno.land/x/uuid/genuuid.ts 3
36b6520f-3f6c-48df-8554-ec8b9422e942
47e6e147-405a-4b56-8cb6-05e5da7b3fb7
591b143a-ae5a-453a-8875-316fa143ab42

```

Or install as command via [denoget](https://github.com/syumai/deno-libs/tree/master/denoget):

```bash

$ denoget https://deno.land/x/uuid/genuuid.ts

$ genuuid
19e5ca15-4b1e-4329-87bb-bbb38b61dcd7

```

### Library

For use in other packages, simply import the function:

```js
import { uuid } from " https://deno.land/x/uuid/mod.ts";

const myUUID = uuid();
```

LICENSE: MIT
