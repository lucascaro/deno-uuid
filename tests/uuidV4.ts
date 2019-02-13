// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, assertEqual, test } from "https://deno.land/x/testing/mod.ts";
import { uuidV4 } from "../mod.ts";

test(function test_uuid_v4() {
  const u = uuidV4();
  assertEqual(typeof u, "string", "returns a string");
  assert(u !== "", "return string is not empty");
});

test(function test_uuid_v4_format() {
  const uuidRE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  for (let i = 0; i < 10000; i++) {
    const u = uuidV4() as string;
    assert(uuidRE.test(u), `${u} is not a valid uuid v4`);
  }
});
