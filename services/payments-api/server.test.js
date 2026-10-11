const { test } = require("node:test");
const assert = require("node:assert");
const server = require("./server");

test("health answers 200", async () => {
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/health`);
  assert.equal(res.status, 200);
  server.close();
});
