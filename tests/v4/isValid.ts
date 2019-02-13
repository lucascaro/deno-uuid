// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { assert, test } from "https://deno.land/x/testing/mod.ts";
//@ts-ignore
import { isValid, uuid } from "../../v4.ts";

test(function test_is_valid_uuid_v4() {
  const u = uuid();
  const t = "84fb7824-b951-490e-8afd-0c13228a8282";
  const n = "84fb7824-b951-490g-8afd-0c13228a8282";

  assert(isValid(u), `generated ${u} should be valid`);
  assert(isValid(t), `${t} should be valid`);
  assert(!isValid(n), `${n} should not be valid`);
});

