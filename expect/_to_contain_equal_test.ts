// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { expect } from "./expect.ts";
import { AssertionError, assertThrows } from "@std/assert";

Deno.test("expect().toContainEqual()", () => {
  const arr = [{ foo: 42 }, { bar: 43 }, { baz: 44 }];
  expect(arr).toContainEqual({ bar: 43 });

  expect(arr).not.toContainEqual({ bar: 42 });

  assertThrows(
    () => {
      expect(arr).toContainEqual({ bar: 42 });
    },
    AssertionError,
    `The value doesn't contain the expected item.
Value: [{foo: 42},{bar: 43},{baz: 44}]
Expected: {bar: 42}`,
  );

  assertThrows(
    () => {
      expect(arr).not.toContainEqual({ foo: 42 });
    },
    AssertionError,
    `The value contains the expected item.
Value: [{foo: 42},{bar: 43},{baz: 44}]
Expected: {foo: 42}`,
  );
});
