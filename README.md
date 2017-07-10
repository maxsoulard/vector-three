# Vector-three
Mini javascript library to perform common operations on 3D vectors.
```
npm install vector-three
```
```
const Vector3 = require('vector-three');
const vector = new Vector3(x, y, z);
```

## Documentation
```
vector.add(v)
```
Returns a new Vector by adding v to this.
```
vector.sub(v)
```
Returns a new Vector by subtracting v from this.
```
vector.dot(v)
```
Returns a new Vector by multiplying v by this.
```
vector.dotProduct(v)
// this.x * v.x + this.y * v.y + this.z * v.z
```
Returns the dot product (or scalar product) of this to v.
```
vector.crossProduct(v)
// (x = this.y * v.z - this.z * v.y, y = this.z * v.x - this.x * v.z, z = this.x * v.y - this.y * v.x)
```
Returns a new Vector which is the result of cross product this by v.
```
vector.norm()
```
Returns the norm (or vector length) of this Vector.
```
vector.normalize()
```
Returns a new unit Vector, which norm is 1.
```
Vector3.angleBetween(v1, v2)
```
Returns the angle between v1 and v2 in radian.
Call Vector3.angleBetween(v1, v2).toDegrees() to get the angle value in degrees.
```
Vector3.fromObject(o)
```
Returns a new Vector from a JS object : {x: x, y: y, z: z}
