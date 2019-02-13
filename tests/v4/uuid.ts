// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, assertEqual, test } from "https://deno.land/x/testing/mod.ts";
//@ts-ignore
import { isValid, uuid } from "../../v4.ts";

test(function test_uuid_v4() {
  const u = uuid();
  assertEqual(typeof u, "string", "returns a string");
  assert(u !== "", "return string is not empty");
});

test(function test_uuid_v4_format() {
  for (let i = 0; i < 10000; i++) {
    const u = uuid() as string;
    assert(isValid(u), `${u} is not a valid uuid v4`);
  }
});
