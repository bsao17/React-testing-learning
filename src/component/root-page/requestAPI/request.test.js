import { render } from "@testing-library/react";
import RequestAPI from "./RequestAPI";

describe("async query test", ()=>{
    beforeEach(()=>{
        render(<RequestAPI/>)
    })
    
    it("should test API query", ()=>{
        function callback(data){
            expect(data).toBe("hello world")
        }
    })
})
