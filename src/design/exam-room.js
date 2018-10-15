/**
 * Exam Room
 *
 * In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.
 *
 * When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.
 * If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the
 * room, then the student sits at seat number 0.)
 *
 * Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what
 * seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves
 * the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.
 *
 * Example 1:
 *
 * Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
 * Output: [null,0,9,4,2,null,5]
 *
 * Explanation:
 * ExamRoom(10) -> null
 * seat() -> 0, no one is in the room, then the student sits at seat number 0.
 * seat() -> 9, the student sits at the last seat number 9.
 * seat() -> 4, the student sits at the last seat number 4.
 * seat() -> 2, the student sits at the last seat number 2.
 * leave(4) -> null
 * seat() -> 5, the student sits at the last seat number 5.
 */

/**
 * Mimic a TreeSet
 */
Object.prototype.size = function() {
  return Object.keys(this).length;
};

Object.prototype.first = function() {
  const keys = Object.keys(this);
  return parseInt(keys[0]);
};

Object.prototype.last = function() {
  const keys = Object.keys(this);
  return parseInt(keys[keys.length - 1]);
};

class ExamRoom {
  /**
   * @param {number} N
   */
  constructor(N) {
    this.N = N;
    this.students = {};
  }

  /**
   * @return {number}
   */
  seat() {
    // Let's determine student, the position of the next
    // student to sit down.
    let student = 0;

    if (this.students.size() > 0) {
      // Tenatively, dist is the distance to the closest student,
      // which is achieved by sitting in the position 'student'.
      // We start by considering the left-most seat.
      let dist = this.students.first();
      let prev = null;

      for (let s of Object.keys(this.students)) {
        if (prev !== null) {
          // For each pair of adjacent students in positions (prev, s),
          // d is the distance to the closest student;
          // achieved at position prev + d.
          const d = Math.floor((parseInt(s) - prev) / 2);

          if (d > dist) {
            dist = d;
            student = prev + d;
          }
        }

        prev = s;
      }

      // Considering the right-most seat.
      if (this.N - 1 - this.students.last() > dist) {
        student = this.N - 1;
      }
    }

    // Add the student to our sorted TreeSet of positions.
    this.students[student] = student;

    return student;
  }

  /**
   * @param {number} p
   * @return {void}
   */
  leave(p) {
    delete this.students[p];
  }
}

export { ExamRoom };

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
