function Vector3(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

    /**
     * Returns a new Vector by adding v to this.
     */
    this.add = function(v) {
        if (!(v instanceof Object)) throw new TypeError();
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    };

    /**
     * Returns a new Vector by subtracting v from this.
     */
    this.sub = function(v) {
        if (!(v instanceof Object)) throw new TypeError();
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    };

    /**
     * Returns the dot product (or scalar product) of this to v
     */
    this.dotProduct = function(v) {
        if (!(v instanceof Object)) throw new TypeError();
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };

    /**
     * Returns a new Vector by multiplying v by this.
     */
    this.dot = function(v) {
        if (!(v instanceof Object)) throw new TypeError();
        return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
    };

    /**
     * Returns a new Vector which is the result of cross product this by v.
     */
    this.crossProduct = function(v) {
        if (!(v instanceof Object)) throw new TypeError();
        const x = this.y * v.z - this.z * v.y
            , y = this.z * v.x - this.x * v.z
            , z = this.x * v.y - this.y * v.x;
        return new Vector3(x, y, z);
    };

    /**
     * Returns the norm (or vector length) of this Vector.
     */
    this.norm = function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };

    /**
     * Returns a new unit Vector, which norm is 1.
     */
    this.normalize = function() {
        const norm = this.norm();
        return new Vector3(this.x / norm, this.y / norm, this.z / norm);
    };
}

/**
 * Returns a new Vector from a JS object : {x: x, y: y, z: z}
 */
Vector3.fromObject = function(o) {
    return new Vector3(o.x, o.y, o.z);
}

/** calculate angle between 3 points
 * θ = arcos((|AB|² + |AC|² - |BC|²) / (2 * |AB| * |AC|))
 * where |AB| is length between points A and B
 */
Vector3.angleBetween = function(v1, v2) {
    if (!(v1 instanceof Object)) throw TypeError();
    if (!(v2 instanceof Object)) throw TypeError();
    v1 = Vector3.fromObject(v1);
    v2 = Vector3.fromObject(v2);
    
    const dotProduct = v1.dotProduct(v2);
    const cosTheta = dotProduct / (v1.norm() * v2.norm());
    const theta = Math.acos(cosTheta);

    return new Angle(theta);
}

function Angle(inRad) {
    this.inRad = inRad;

    /**
     * Get angle value in degrees
     */
    this.toDegrees = function() {
        return this.inRad * 180 / Math.PI;
    }
}

module.exports = Vector3;