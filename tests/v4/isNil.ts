// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, test } from "https://deno.land/x/testing/mod.ts";
//@ts-ignore
import { NIL_UUID } from "../../mod.ts";
//@ts-ignore
import { isNil, uuid } from "../../v4.ts";


test(function test_isNil() {
  const u = uuid();
  const nil = NIL_UUID;
  const t = "582cbcff-dad6-4f28-888a-e062ae36bafc";
  assert(isNil(nil));
  assert(!isNil(t));
  assert(!isNil(u));
  console.log("");
});
