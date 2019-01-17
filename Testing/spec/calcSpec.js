describe("SetCountrySelected", function() {
    describe("ISOcounty",function() {
        it("should return IE",function() {
            expect(ISOcounty("Ireland")).toBe("IE");
        });
        it("should return GB",function() {
            expect(ISOcounty("Wales")).toBe("GB");
        });
    });
});

describe("panMapToCountrySelected", function() {
    describe("moveCenterToCapital",function() {
        it("should return [53.42,-7.94]",function() {
            expect(moveCenterToCapital("Ireland")).toEqual([53.42,-7.94]);
        });
        it("should return [52.29,-3.73]",function() {
            expect(moveCenterToCapital("Wales")).toEqual([52.29,-3.73]);
        });
        it("should return [52.79,-0.54]",function() {
            expect(moveCenterToCapital("England")).toEqual([52.79,-0.54]);
        });
        it("should return [56.78, -4.11]",function() {
            expect(moveCenterToCapital("Scotland")).toEqual([56.78, -4.11]);
        });
        it("should return [54.59,-6.06]",function() {
            expect(moveCenterToCapital("NIreland")).toEqual([54.59,-6.06]);
        });
        it("should return [53,7]",function() {
            expect(moveCenterToCapital("Spain")).toEqual([53,7]);
        });
    });
});

