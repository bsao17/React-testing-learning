import { act, render } from "@testing-library/react";
import Title from "./Title.js";

describe("should test Title component", ()=>{
   //test state value
   beforeEach(()=>{
         //render component
            render(<Title />);
    });
    it("should render title", ()=>{
        //get title
        const title = document.querySelector("h1");
        //assert title
        expect(title).toHaveTextContent("ma boutique de drone");
    });
});

    