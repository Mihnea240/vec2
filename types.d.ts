/**
 * 2D vector interface for objects with x and y properties
 */
export interface Vector2Like {
  x: number;
  y: number;
}

/**
 * Polar coordinates interface
 */
export interface PolarCoordinates {
  r: number;
  theta: number;
}

/**
 * 2D vector class for basic vector math operations.
 */
export declare class vec2 implements Vector2Like {
  x: number;
  y: number;

  /**
   * Creates a new 2D vector.
   * @param x - The x component (default: 0)
   * @param y - The y component (default: 0)
   */
  constructor(x?: number, y?: number);

  /**
   * Sets the x and y components of the vector.
   * @param x - The new x component
   * @param y - The new y component
   * @returns This vector
   */
  set(x: number, y: number): vec2;

  /**
   * Translates the vector by the given amounts.
   * @param x - Amount to translate x (default: 0)
   * @param y - Amount to translate y (default: 0)
   * @returns This vector
   */
  translate(x?: number, y?: number): vec2;

  /**
   * Calculates the squared magnitude of the vector.
   * @returns The squared magnitude
   */
  magSq(): number;

  /**
   * Calculates the magnitude (length) of the vector.
   * @returns The magnitude
   */
  mag(): number;

  /**
   * Multiplies both components by a scalar value.
   * @param val - The scalar value
   * @returns This vector
   */
  scale(val: number): vec2;

  /**
   * Normalizes the vector to unit length.
   * @returns This vector
   */
  normalize(): vec2;

  /**
   * Copies the x and y values from another vector.
   * @param other - The vector to copy from
   * @returns This vector
   */
  copy(other: Vector2Like): vec2;

  /**
   * Creates a clone of this vector.
   * @returns A new vector with the same components
   */
  clone(): vec2;

  /**
   * Subtracts another vector from this vector.
   * @param other - The vector to subtract
   * @returns This vector
   */
  sub(other: Vector2Like): vec2;

  /**
   * Adds another vector to this vector.
   * @param other - The vector to add
   * @returns This vector
   */
  add(other: Vector2Like): vec2;

  /**
   * Calculates the dot product with another vector.
   * @param other - The other vector
   * @returns The dot product
   */
  dot(other: Vector2Like): number;

  /**
   * Calculates the 2D cross product (scalar) with another vector.
   * @param other - The other vector
   * @returns The cross product
   */
  cross(other: Vector2Like): number;

  /**
   * Sets the magnitude of the vector.
   * @param mag - The new magnitude
   * @returns This vector
   */
  setMag(mag: number): vec2;

  /**
   * Multiplies the vector by another vector element-wise (Hadamard product).
   * @param other - The vector to multiply with
   * @returns This vector
   */
  hadamard(other: Vector2Like): vec2;

  /**
   * Sets the direction of the vector to match another vector, preserving the magnitude.
   * @param dir - The direction vector
   * @returns This vector
   */
  setDirection(dir: Vector2Like): vec2;

  /**
   * Rotates the vector around a given point by a specified angle.
   * @param angle - The angle in radians
   * @param origin - The point to rotate around (default: vec2.ORIGIN)
   * @returns This vector
   */
  rotateAround(angle: number, origin?: Vector2Like): vec2;

  /**
   * Calculates the p-norm of the vector.
   * @param norm - The norm degree (default: 2, Euclidean norm)
   * @returns The p-norm of the vector
   */
  norm(norm?: number): number;

  /**
   * Converts the vector to polar coordinates.
   * After calling this method, x represents radius and y represents angle.
   * @returns This vector with polar coordinates
   */
  toPolar(): vec2;

  /**
   * Converts the vector to Cartesian coordinates.
   * Assumes x is radius and y is angle in radians.
   * @returns This vector with Cartesian coordinates
   */
  toCartesian(): vec2;

  /**
   * Gets/sets the radius (r) in polar coordinates.
   * Note: This accesses the x component, which is used as r in polar representation.
   */
  get r(): number;
  set r(value: number);

  /**
   * Gets/sets the angle (theta) in polar coordinates.
   * Note: This accesses the y component, which is used as theta in polar representation.
   */
  get theta(): number;
  set theta(value: number);

  /**
   * Linearly interpolates between this vector and another vector.
   * @param other - The target vector
   * @param t - The interpolation factor (0 to 1)
   * @returns This vector after interpolation
   */
  lerp(other: Vector2Like, t: number): vec2;

  // Static methods
  /**
   * Calculates the angle between two vectors.
   * @param v1 - The first vector
   * @param v2 - The second vector
   * @returns The angle in radians
   */
  static angle(v1: vec2, v2: vec2): number;

  /**
   * Calculates the oriented angle between two vectors (0 to 2π).
   * @param v1 - The first vector
   * @param v2 - The second vector
   * @returns The oriented angle in radians
   */
  static angle2(v1: vec2, v2: vec2): number;

  // Static constants
  /**
   * The origin vector (0, 0).
   */
  static readonly ORIGIN: vec2;

  /**
   * The right unit vector (1, 0).
   */
  static readonly RIGHT: vec2;

  /**
   * The left unit vector (-1, 0).
   */
  static readonly LEFT: vec2;

  /**
   * The top unit vector (0, 1).
   */
  static readonly TOP: vec2;

  /**
   * The down unit vector (0, -1).
   */
  static readonly DOWN: vec2;
}