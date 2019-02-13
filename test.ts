#!/usr/bin/env deno -A
import { runTests } from "https://deno.land/x/testing/mod.ts";
import "tests/isNil.ts";
import "tests/uuidV4.ts";
runTests();
