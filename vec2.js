/**
 * 2D vector class for basic vector math operations.
 */
export class vec2 {
	/**
	 * Creates a new 2D vector.
	 * @param {number} [x=0] - The x component.
	 * @param {number} [y=0] - The y component.
	 */
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Sets the x and y components of the vector.
	 * @param {number} x - The new x component.
	 * @param {number} y - The new y component.
	 * @returns {vec2} This vector.
	 */
	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	/**
	 * Translates the vector by the given amounts.
	 * @param {number} [x=0] - Amount to translate x.
	 * @param {number} [y=0] - Amount to translate y.
	 * @returns {vec2} This vector.
	 */
	translate(x = 0, y = 0) {
		this.x += x;
		this.y += y;
		return this;
	}

	/**
	 * Calculates the squared magnitude of the vector.
	 * @returns {number} The squared magnitude.
	 */
	magSq() {
		return this.x * this.x + this.y * this.y;
	}

	/**
	 * Calculates the magnitude (length) of the vector.
	 * @returns {number} The magnitude.
	 */
	mag() {
		return Math.sqrt(this.magSq());
	}


	/**
	 * Multiplies both components by a scalar value.
	 * @param {number} val - The scalar value.
	 * @returns {vec2} This vector.
	 */
	scale(val) {
		this.x *= val;
		this.y *= val;
		return this;
	}

	/**
	 * Normalizes the vector to unit length.
	 * @returns {vec2} This vector.
	 */
	normalize() {
		let m = this.mag();
		if (m == 0) return this;
		return this.scale(1 / m);
	}

	/**
	 * Copies the x and y values from another vector.
	 * @param {{x: number, y: number}} param0 - The vector to copy from.
	 * @returns {vec2} This vector.
	 */
	copy({ x, y }) {
		return this.set(x, y);
	}

	/**
	 * Creates a clone of this vector.
	 * @returns {vec2} A new vector with the same components.
	 */
	clone() {
		return new vec2(this.x, this.y);
	}

	/**
	 * Subtracts another vector from this vector.
	 * @param {{x: number, y: number}} param0 - The vector to subtract.
	 * @returns {vec2} This vector.
	 */
	sub({ x, y }) {
		return this.translate(-x, -y);
	}

	/**
	 * Adds another vector to this vector.
	 * @param {{x: number, y: number}} param0 - The vector to add.
	 * @returns {vec2} This vector.
	 */
	add({ x, y }) {
		return this.translate(x, y);
	}

	/**
	 * Calculates the dot product with another vector.
	 * @param {{x: number, y: number}} param0 - The other vector.
	 * @returns {number} The dot product.
	 */
	dot({ x, y }) {
		return this.x * x + this.y * y;
	}

	/**
	 * Calculates the 2D cross product (scalar) with another vector.
	 * @param {{x: number, y: number}} param0 - The other vector.
	 * @returns {number} The cross product.
	 */
	cross({ x, y }) {
		return this.x * y - x * this.y;
	}

	/**
	 * Sets the magnitude of the vector.
	 * @param {number} mag - The new magnitude.
	 * @returns {vec2} This vector.
	 */
	setMag(mag) {
		return this.normalize().scale(mag);
	}

	/**
	 * Sets the direction of the vector to match another vector, preserving the magnitude.
	 * @param {{x: number, y: number}} dir - The direction vector.
	 * @returns {vec2} This vector.
	 */
	setDirection(dir) {
		let mag = this.dot(dir);
		return this.copy(dir).setMag(mag);
	}

	/**
	 * Rotates the vector around a given point by a specified angle.
	 * @param {number} angle - The angle in radians.
	 * @param {{x: number, y: number}} [origin=vec2.ORIGIN] - The point to rotate around.
	 * @returns {vec2} This vector.
	 */
	rotateAround(angle, { x, y } = vec2.ORIGIN) {
		let sin = Math.sin(angle), cos = Math.cos(angle);
		let tx = this.x - x, ty = this.y - y;
		return this.set(tx * cos - ty * sin + x, tx * sin + ty * cos + y);
	}

	/**
	 * Calculates the p-norm of the vector.
	 * @param {number} [norm=2] - The norm degree (default is 2, Euclidean norm).
	 * @returns {number} The p-norm of the vector.
	 */
	norm(norm = 2) {
		return Math.pow(Math.pow(this.x, norm) + Math.pow(this.y, norm), 1 / norm);
	}

	/**
	 * Calculates the angle between two vectors.
	 * @param {vec2} v1 - The first vector.
	 * @param {vec2} v2 - The second vector.
	 * @returns {number} The angle in radians.
	 */
	static angle(v1, v2) {
		return Math.acos(v1.dot(v2) / Math.sqrt(v1.magSq() * v2.magSq()));
	}

	/**
	 * Calculates the oriented angle between two vectors (0 to 2π).
	 * @param {vec2} v1 - The first vector.
	 * @param {vec2} v2 - The second vector.
	 * @returns {number} The oriented angle in radians.
	 */
	static angle2(v1, v2) {
		let a = vec2.angle(v1, v2);
		let sign = v1.cross(v2);
		if (sign < 0) return 2 * Math.PI - a;
		return a;
	}

	/**
	 * The origin vector (0, 0).
	 * @type {vec2}
	 */
	static ORIGIN = new vec2();

	/**
	 * The right unit vector (1, 0).
	 * @type {vec2}
	 */
	static RIGHT = new vec2(1, 0);

	/**
	 * The left unit vector (-1, 0).
	 * @type {vec2}
	 */
	static LEFT = new vec2(-1, 0);

	/**
	 * The top unit vector (0, 1).
	 * @type {vec2}
	 */
	static TOP = new vec2(0, 1);

	/**
	 * The down unit vector (0, -1).
	 * @type {vec2}
	 */
	static DOWN = new vec2(0, -1);
}