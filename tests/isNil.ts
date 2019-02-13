// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, test } from "https://deno.land/x/testing/mod.ts";
import { isNil, NIL_UUID, uuidV4 } from "../mod.ts";

test(function test_isNil() {
  const u = uuidV4();
  const nil = NIL_UUID;
  const t = "582cbcff-dad6-4f28-888a-e062ae36bafc";
  assert(isNil(nil));
  assert(!isNil(t));
  assert(!isNil(u));
  console.log("");
});
