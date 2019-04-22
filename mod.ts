//@ts-ignore
import * as _V4 from "./v4.ts";

export const NIL_UUID = "00000000-0000-0000-0000-000000000000";
// Export functions namespaced by UUID version (Only v4 for now).
export const V4 = _V4;

// Export UUID v4 functions as default.
//@ts-ignore
export * from "./v4.ts";
