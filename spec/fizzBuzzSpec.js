describe("Fizzbuzz", function(){
    it("should return fizz if divided by 3", function(){
        let num = 3;
        let result = fizzBuzz(num)
        expect(result).toEqual('fizz')
    })
    it("should return number if not divided by 3", function(){
        let num = 4;
        let result = fizzBuzz(num)
        expect(result).toEqual(4)
    })
    it("should return buzz if  divided by 5", function(){
        let num = 5;
        let result = fizzBuzz(num)
        expect(result).toEqual('buzz')
    })
    it("should return fizzbuzz if divided by 5 and 3", function(){
        let num = 15;
        let result = fizzBuzz(num)
        expect(result).toEqual('fizzbuzz')
    })
    it("should return fizzbuzz if divided by 5 and 3", function(){
        let num = 150;
        let result = fizzBuzz(num)
        expect(result).toEqual('fizzbuzz')
    })
})