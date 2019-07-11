#!/usr/bin/env deno -A
/**
 * Generate uuids in the console.
 *
 * Usage:
 *
 *   generate.ts [N]
 *
 * where N is an optional number of uuids to generate (defaults to 1).
 */

import uuid from "https://deno.land/std/uuid/mod.ts";;

const { args } = Deno;

const n = args.length > 1 ? Number(args[1]) : 1;

if (Number.isNaN(n)) {
  console.error(
    `First argument needs to be a number. '${args.slice(1)}' given.`
  );
  Deno.exit(1);
}

Array(n)
  .fill(0)
  .forEach(() => {
    console.log(uuid());
  });
