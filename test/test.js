var v = require('../')
  , Vec3 = v.Vec3
  , assert = require('assert')

describe("v()", function() {
  it("x, y, z", function() {
    var v1 = v(-1, 5, 10.10);
    assert.strictEqual(v1.x, -1);
    assert.strictEqual(v1.y, 5);
    assert.strictEqual(v1.z, 10.10);
  });
  it("array", function() {
    var v1 = v([4, 5, 6]);
    assert.strictEqual(v1.x, 4);
    assert.strictEqual(v1.y, 5);
    assert.strictEqual(v1.z, 6);
  });
  it("object", function() {
    var v1 = v({x: 9, y: 8, z: 7});
    assert.strictEqual(v1.x, 9);
    assert.strictEqual(v1.y, 8);
    assert.strictEqual(v1.z, 7);
  });
});
describe("vec3", function() {
  it("floored", function() {
    var v1 = new Vec3(1.1, -1.5, 1.9);
    var v2 = v1.floored();
    v1.x = 10;
    assert.strictEqual(v2.x, 1);
    assert.strictEqual(v2.y, -2);
    assert.strictEqual(v2.z, 1);
  });
  it("offset", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = v1.offset(10, -10, 20);
    v1.x = -100;
    assert.strictEqual(v2.x, 11);
    assert.strictEqual(v2.y, -8);
    assert.strictEqual(v2.z, 23);
  });
  it("plus", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = new Vec3(-1, 0, 1);
    var v3 = v1.plus(v2);
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v1.z, 3);
    assert.strictEqual(v2.x, -1);
    assert.strictEqual(v2.y, 0);
    assert.strictEqual(v2.z, 1);
    assert.strictEqual(v3.x, 0);
    assert.strictEqual(v3.y, 2);
    assert.strictEqual(v3.z, 4);
  });
  it("minus", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = new Vec3(-1, 0, 1);
    var v3 = v1.minus(v2);
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v1.z, 3);
    assert.strictEqual(v2.x, -1);
    assert.strictEqual(v2.y, 0);
    assert.strictEqual(v2.z, 1);
    assert.strictEqual(v3.x, 2);
    assert.strictEqual(v3.y, 2);
    assert.strictEqual(v3.z, 2);
  });
  it("scaled", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = v1.scaled(2);
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v1.z, 3);
    assert.strictEqual(v2.x, 2);
    assert.strictEqual(v2.y, 4);
    assert.strictEqual(v2.z, 6);
  });
  it("abs", function() {
    var v1 = new Vec3(1.1, -1.5, 1.9);
    var v2 = v1.abs();
    v1.x = 10;
    assert.strictEqual(v2.x, 1.1);
    assert.strictEqual(v2.y, 1.5);
    assert.strictEqual(v2.z, 1.9);
  });
  it("distanceTo", function() {
    var v1 = new Vec3(1, 1, 1);
    var v2 = new Vec3(2, 2, 2);
    var dist1 = v1.distanceTo(v2);
    var dist2 = v2.distanceTo(v1);
    var expected = 1.7320508075688772;
    assert.strictEqual(dist1, dist2);
    assert.strictEqual(Math.round(dist1 * 100000), Math.round(expected * 100000));
  });
  it("equals", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = v1.scaled(0.23424);
    var v3 = v1.scaled(0.23424);
    assert.ok(v2.equals(v3));
  });
  it("toString", function() {
    var v1 = new Vec3(1, -1, 3.14);
    assert.strictEqual(v1.toString(), "(1, -1, 3.14)");
  });
  it("clone", function() {
    var v1 = new Vec3(1, 2, 3);
    var v2 = v1.clone();
    v2.x = 10;
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v1.z, 3);
    assert.strictEqual(v2.x, 10);
    assert.strictEqual(v2.y, 2);
    assert.strictEqual(v2.z, 3);
  });
});