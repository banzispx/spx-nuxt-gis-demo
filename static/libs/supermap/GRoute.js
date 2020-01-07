// 向量类
class GVector {
  constructor(x1, y1) {
    this.x = x1;
    this.y = y1;
    this.pi = 3.141592653;
  }

  normalize() {
    var len = Math.sqrt(this.x * this.x + this.y * this.y);
    this.x /= len;
    this.y /= len;
    return this;
  }

  addVector(v1) {
    return new GVector(this.x + v1.x, this.y + v1.y);
  }

  mmultNumber(t) {
    return new GVector(this.x * t, this.y * t);
  }

  dotMmultVector(v1) {
    return new GVector(this.x * v1.x, this.y * v1.y);
  }

  crossMmultVector(v1) {
    return this.x * v1.y - this.y * v1.x;
  }

  getReverseVector() {
    return new GVector(-this.x, -this.y);
  }

  getRotateVector(angle) {
    var alpha = (angle * this.pi) / 180.0;
    return new GVector(Math.cos(alpha) * this.x - Math.sin(alpha) * this.y, Math.sin(alpha) * this.x + Math.cos(alpha) * this.y);
  }
}

// 点类
class GPoint {
  constructor(x1, y1) {
    this.x = x1;
    this.y = y1;
  }

  addVector(v1) {
    return new GPoint(this.x + v1.x, this.y + v1.y);
  }

  minusPoint(p1) {
    return new GVector(this.x - p1.x, this.y - p1.y);
  }
}

// 路线点类
class GRoutePoint extends GPoint {
  constructor(x1, y1, r1) {
    super(x1, y1);
    this.r = r1;
  }
}

// 路线类
class GRoute {
  constructor() {
    this.pList = [];
  }

  appendPoint(myPoint, r1) {
    this.pList.push(new GRoutePoint(myPoint[0], myPoint[1], r1));
  }

  getMinRadius() {
    if (this.pList.length == 0) {
      return 0;
    }
    var minRadius = this.pList[0].r;
    for (let item of this.pList) {
      if (minRadius > item.r) {
        minRadius = item.r;
      }
    }

    return minRadius;
  }

  // 计算角平分线向量，先左手，后右手
  getBisectorVectors(p1, p2, p3) {
    var v1 = new GVector(p1.x - p2.x, p1.y - p2.y);
    var v2 = new GVector(p3.x - p2.x, p3.y - p2.y);

    v1.normalize();
    v2.normalize();

    var reList = [];

    // 角平分线向量
    var v3 = v1.addVector(v2);

    if (v3.x == 0 && v3.y == 0) {
      reList.push(v2.getRotateVector(-90));
      reList.push(v2.getRotateVector(90));
      return reList;
    }

    v3.normalize();

    if (v2.crossMmultVector(v3) > 0) {
      //右手
      reList.push(v3.getReverseVector());
      reList.push(v3);
    } else {
      reList.push(v3);
      reList.push(v3.getReverseVector());
    }

    return reList;
  }

  // 首端点的角平分线
  getFirstBisectorVectors(p1, p2) {
    // var beforePoint = p1.addVector(p2.minusPoint(p1).getReverseVector());
    var dirVec = p1.minusPoint(p2).normalize();
    var reList = [];
    // reList.push(dirVec.getRotateVector(-90));
    // reList.push(dirVec.getRotateVector(90));

    for (var i = -90; i <= 90; i += 18) {
      reList.push(dirVec.getRotateVector(i));
    }

    return reList;
  }

  // 末端点的角平分线
  getLastBisectorVectors(p1, p2) {
    var dirVec = p2.minusPoint(p1).normalize();
    var reList = [];
    // reList.push(dirVec.getRotateVector(-90));
    // reList.push(dirVec.getRotateVector(90));

    for (var i = -90; i <= 90; i += 18) {
      reList.push(dirVec.getRotateVector(i));
    }

    return reList;
  }

  // 计算缓冲边界线
  getBufferEdgeLine(epsilon) {
    var minRadius = this.getMinRadius();
    if (this.pList.length < 2) {
      return null;
    }

    minRadius -= epsilon;

    var pList1 = [],
      pList2 = [];

    var reList = [];
    var midList = this.getFirstBisectorVectors(this.pList[0], this.pList[1]);
    var vecLen = this.pList[0].r - minRadius;
    // var firstVector = this.pList[1].minusPoint(this.pList[0]);
    // var reverseVec = firstVector.getReverseVector().normalize();
    // pList1.push(this.pList[0].addVector(reverseVec.mmultNumber(vecLen)));
    // pList1.push(this.pList[0].addVector(midList[0].mmultNumber(vecLen)));
    // pList2.push(this.pList[0].addVector(midList[1].mmultNumber(vecLen)));

    for (var item of midList) {
      pList1.push(this.pList[0].addVector(item.mmultNumber(vecLen)));
    }

    for (var i = 1; i < this.pList.length - 1; i++) {
      if (pList1.length == 31) {
        // if (i == this.pList.length - 2) {
        var ss = 0;
        ss = ss + 1;
        // console.log(ss);
      }
      midList = this.getBisectorVectors(this.pList[i - 1], this.pList[i], this.pList[i + 1]);
      vecLen = this.pList[i].r - minRadius;
      pList1.push(this.pList[i].addVector(midList[0].mmultNumber(vecLen)));
      pList2.push(this.pList[i].addVector(midList[1].mmultNumber(vecLen)));
    }

    midList = this.getLastBisectorVectors(this.pList[this.pList.length - 2], this.pList[this.pList.length - 1]);
    vecLen = this.pList[this.pList.length - 1].r - minRadius;
    // pList1.push(this.pList[this.pList.length - 1].addVector(midList[0].mmultNumber(vecLen)));
    // pList2.push(this.pList[this.pList.length - 1].addVector(midList[1].mmultNumber(vecLen)));

    for (var item of midList) {
      pList1.push(this.pList[this.pList.length - 1].addVector(item.mmultNumber(vecLen)));
    }

    // var lastVector = this.pList[this.pList.length - 1].minusPoint(this.pList[this.pList.length - 2]);
    // pList1.push(this.pList[this.pList.length - 1].addVector(lastVector.normalize().mmultNumber(vecLen)));

    var reList = [];
    for (var item of pList1) {
      reList.push(item);
    }
    for (var i = pList2.length - 1; i >= 0; i--) {
      reList.push(pList2[i]);
    }

    return reList;
  }

  deleteSelfIntersection() {
    for (var i = 0; i < this.pList.length - 2; i++) {
      for (var j = i + 2; j < this.pList.length - 1; j++) {
        if (this.judgeIntersection(this.pList[i], this.pList[i + 1], this.pList[j], this.pList[j + 1])) {
          this.pList.splice(j, 1);
          j--;
        }
      }
    }
  }

  judgeIntersection(p1, p2, p3, p4) {
    var xmin1, xmax1, ymin1, ymax1, xmin2, xmax2, ymin2, ymax2;
    if (p1.x < p2.x) {
      xmin1 = p1.x;
      xmax1 = p2.x;
    } else {
      xmin1 = p2.x;
      xmax1 = p1.x;
    }

    if (p1.y < p2.y) {
      ymin1 = p1.y;
      ymax1 = p2.y;
    } else {
      ymin1 = p2.y;
      ymax1 = p1.y;
    }

    if (p3.x < p4.x) {
      xmin2 = p3.x;
      xmax2 = p4.x;
    } else {
      xmin2 = p4.x;
      xmax2 = p3.x;
    }

    if (p3.y < p4.y) {
      ymin2 = p3.y;
      ymax2 = p4.y;
    } else {
      ymin2 = p4.y;
      ymax2 = p3.y;
    }

    ////包围盒不相交
    if (xmin1 > xmax2 || xmax1 < xmin2 || ymin1 > ymax2 || ymax1 < ymin2) {
      return false;
    }

    if (((p3.x - p1.x) * (p4.y - p1.y) - (p4.x - p1.x) * (p3.y - p1.y)) * ((p3.x - p2.x) * (p4.y - p2.y) - (p4.x - p2.x) * (p3.y - p2.y)) < 0) {
      if (((p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y)) * ((p1.x - p4.x) * (p2.y - p4.y) - (p2.x - p4.x) * (p1.y - p4.y)) < 0) {
        return true;
      }
    }
    return false;
  }

  deleteRecuplication() {
    for (var i = 0; i < this.pList.length; i++) {
      for (var j = i + 1; j < this.pList.length; j++) {
        if (this.pList[i].x === this.pList[j].x && this.pList[i].y === this.pList[j].y) {
          this.pList.splice(j, 1);
          j--;
        }
      }
    }
  }
}
