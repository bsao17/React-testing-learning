import { render } from "@testing-library/react";
import Title from "./Title.js";

// testing view
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
    
    it("should render search input", ()=>{
        //get search input
        const search = document.querySelector("input");
        //assert search input
        expect(search).toHaveAttribute("placeholder", "rechercher un drone");
    });

    // testing form
    it("should render form", ()=>{
        //get form
        const form = document.querySelector("form");
        //assert form
        expect(form).toBeInTheDocument();
    });
});

    