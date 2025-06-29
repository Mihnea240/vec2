# vec2

A simple and efficient 2D vector library for JavaScript with comprehensive vector operations.

## Installation

```js
import { vec2 } from './vec2.js';
```

## Basic Usage

```js
// Create vectors
let v1 = new vec2(3, 4);
let v2 = new vec2(1, 2);

// Basic operations
v1.add(v2);           // Add vectors: (4, 6)
v1.scale(2);          // Scale by 2: (8, 12)
let length = v1.mag(); // Get magnitude: 14.42...

// Chaining operations
let result = new vec2(5, 0)
    .normalize()      // Normalize to unit vector
    .scale(10)        // Scale to length 10
    .rotateAround(Math.PI / 4); // Rotate 45 degrees
```

## Constructor

### `new vec2(x, y)`
Creates a new 2D vector with the specified components.
- `x` (number, optional): X component (default: 0)
- `y` (number, optional): Y component (default: 0)

## Instance Methods

All methods modify the current vector and return `this` for method chaining unless otherwise noted.

### Basic Operations

#### `set(x, y)`
Sets the x and y components of the vector.
```js
let v = new vec2().set(5, 3); // (5, 3)
```

#### `translate(x, y)`
Translates the vector by the given amounts.
```js
let v = new vec2(1, 1).translate(2, 3); // (3, 4)
```

#### `copy(other)`
Copies the values from another vector-like object into this vector.
```js
let v1 = new vec2(1, 2);
let v2 = new vec2().copy(v1); // (1, 2)
```

#### `clone()`
Returns a new `vec2` instance with the same x and y values.
```js
let v1 = new vec2(3, 4);
let v2 = v1.clone(); // New vector (3, 4)
```

### Vector Arithmetic

#### `add(other)`
Adds another vector to this vector (component-wise).
```js
let v = new vec2(1, 2).add({x: 3, y: 4}); // (4, 6)
```

#### `sub(other)`
Subtracts another vector from this vector (component-wise).
```js
let v = new vec2(5, 7).sub({x: 2, y: 3}); // (3, 4)
```

#### `hadamard(other)`
Multiplies this vector by another vector (component-wise).
```js
let v = new vec2(2, 3).hadamard({x: 4, y: 5}); // (8, 15)
```

#### `scale(scalar)`
Scales both components of this vector by a scalar value.
```js
let v = new vec2(2, 3).scale(2.5); // (5, 7.5)
```

### Magnitude and Normalization

#### `mag()`
Returns the magnitude (length) of the vector.
```js
let length = new vec2(3, 4).mag(); // 5
```

#### `magSq()`
Returns the squared magnitude of the vector (faster than `mag()`).
```js
let lengthSq = new vec2(3, 4).magSq(); // 25
```

#### `normalize()`
Normalizes the vector to have a length of 1.
```js
let unit = new vec2(3, 4).normalize(); // (0.6, 0.8)
```

#### `setMag(magnitude)`
Sets the magnitude of the vector while preserving direction.
```js
let v = new vec2(3, 4).setMag(10); // (6, 8) - same direction, length 10
```

### Vector Products

#### `dot(other)`
Returns the dot product of this vector and another.
```js
let dot = new vec2(2, 3).dot({x: 4, y: 5}); // 23
```

#### `cross(other)`
Returns the 2D cross product (scalar) with another vector.
```js
let cross = new vec2(2, 3).cross({x: 4, y: 5}); // -2
```

### Interpolation and Direction

#### `lerp(other, t)`
Linearly interpolates between this vector and another by `t` (0 ≤ t ≤ 1).
```js
let v1 = new vec2(0, 0);
let v2 = {x: 10, y: 10};
let mid = v1.lerp(v2, 0.5); // (5, 5) - halfway between
```

#### `setDirection(direction)`
Sets the direction of the vector to match another vector, preserving magnitude.
```js
let v = new vec2(5, 0).setDirection({x: 0, y: 1}); // (0, 5) - same length, new direction
```

### Rotation

#### `rotateAround(angle, origin)`
Rotates the vector around a given point by a specified angle (in radians).
```js
let v = new vec2(1, 0).rotateAround(Math.PI / 2); // (0, 1) - rotated 90° around origin
let v2 = new vec2(2, 0).rotateAround(Math.PI, {x: 1, y: 0}); // (0, 0) - rotated 180° around (1,0)
```

### Coordinate System Conversion

#### `toPolar()`
Converts the vector from Cartesian to polar coordinates.
After calling this method, `x` represents radius and `y` represents angle.
```js
let v = new vec2(3, 4).toPolar(); // (5, 0.927...) - radius and angle in radians
```

#### `toCartesian()`
Converts the vector from polar to Cartesian coordinates.
Assumes `x` is radius and `y` is angle in radians.
```js
let v = new vec2(5, Math.PI/2).toCartesian(); // (0, 5) - converted from polar
```

#### Polar Coordinate Properties
Access polar coordinates directly:
```js
let v = new vec2(3, 4).toPolar();
console.log(v.r);     // 5 (radius)
console.log(v.theta); // 0.927... (angle)
v.r = 10;            // Set radius
v.theta = Math.PI;   // Set angle
```

### Advanced Operations

#### `norm(p)`
Calculates the p-norm of the vector (default p=2 for Euclidean norm).
```js
let euclidean = new vec2(3, 4).norm();    // 5 (same as mag())
let manhattan = new vec2(3, 4).norm(1);   // 7 (L1 norm)
let max = new vec2(3, 4).norm(Infinity);  // 4 (L∞ norm)
```

## Static Methods

#### `vec2.angle(v1, v2)`
Calculates the angle between two vectors (in radians).
```js
let angle = vec2.angle(new vec2(1, 0), new vec2(0, 1)); // π/2 (90 degrees)
```

#### `vec2.angle2(v1, v2)`
Calculates the oriented angle between two vectors (0 to 2π).
```js
let angle = vec2.angle2(new vec2(1, 0), new vec2(0, -1)); // 3π/2 (270 degrees)
```

## Static Constants

Pre-defined vector constants for common directions:

```js
vec2.ORIGIN  // (0, 0)
vec2.RIGHT   // (1, 0)
vec2.LEFT    // (-1, 0)
vec2.TOP     // (0, 1)
vec2.DOWN    // (0, -1)
```

## Performance Notes

- Use `magSq()` instead of `mag()` when comparing distances (avoids expensive square root)
- Methods modify the original vector for better performance; use `clone()` if you need to preserve the original

