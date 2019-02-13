//format.ts
/**
 * Super-small uuid generation.
 *
 * Based on
 *  https://gist.github.com/jed/982883
 */

export const NIL_UUID = "00000000-0000-0000-0000-000000000000";

export function isNil(val: string) {
  return val === NIL_UUID;
}

export function uuidV4(): string {
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
        /1|0/g, // ones and zeroes with a
        function() {
          return (
            0 | // floored
            (Math.random() * 16)
          ) // random integer from 0 to 15
            .toString(16); // as a hex digit.
        }
      )
  );
}
