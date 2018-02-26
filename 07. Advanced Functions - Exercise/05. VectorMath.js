let solution=(function () {

    return {
        add:function (vec1,vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply:function (vec1,scalar) {
            return [vec1[0]*scalar,vec1[1]*scalar];
        },
        length: function (vec1) {
            return Math.sqrt((vec1[0]*vec1[0])+(vec1[1]*vec1[1]));
        },
        dot: function (vec1,vec2) {
            return (Math.abs(vec1[0]*vec2[0])-Math.abs(vec1[1]*vec2[1]));
        },
        cross: function (vec1,vec2) {
            return ((vec1[0]*vec2[1])-(vec1[1]*vec2[0]));
        }
    }
})();
//console.log(solution.cross([3, 7], [1, 0]));
//console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.dot([1, 0], [0, -1]));