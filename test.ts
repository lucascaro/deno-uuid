#!/usr/bin/env deno -A
import { runTests } from "https://deno.land/x/testing/mod.ts";
import "tests/v4/isNil.ts";
import "tests/v4/isValid.ts";
import "tests/v4/uuid.ts";
runTests();
