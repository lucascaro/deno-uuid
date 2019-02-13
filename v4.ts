//@ts-ignore
import { NIL_UUID } from "mod.ts";

//format.ts
/**
 * Super-small uuid generation.
 *
 * Based on
 *  https://gist.github.com/jed/982883
 */

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isNil(val: string) {
  return val === NIL_UUID;
}

export function isValid(id: string): boolean {
  return UUID_RE.test(id);
}
export function uuid(): string {
  return (
    // return
    (
      "" + // a concatentated string:
      1e7 + //  10000000 +
      -1e3 + // -1000 +
      -4e3 + // -4000 +
      -8e3 + // -80000000 +
      -1e11
    ) // -100000000000,
      .replace(
        // replacing
        /[01]/g, // ones and zeroes with a
        () =>
          (
            0 | // floored
            (Math.random() * 16)
          ) // random integer from 0 to 15
            .toString(16) // as a hex digit.
      )
  );
}
