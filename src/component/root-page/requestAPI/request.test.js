import { render } from "@testing-library/react";
import RequestAPI from "./RequestAPI";

describe("async query test", ()=>{
    beforeEach(()=>{
        render(<RequestAPI/>)
    })
    
    it("should test API query", async ()=>{
        let query = await fetch("https://fakestoreapi.com/products").then(resolve=>resolve.json())
        expect(query).toHaveReturned()
    })
})
