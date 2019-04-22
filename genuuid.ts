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

import { uuid } from "./mod.ts";

const { args } = Deno;

let n = args.length > 1 ? Number(args[1]) : 1;

Array(n)
  .fill(0)
  .forEach(() => {
    console.log(uuid());
  });
