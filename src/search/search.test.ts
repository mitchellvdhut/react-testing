import {asyncSearchByTerm, searchByTerm} from "./search";
import axios from "axios";
jest.mock('axios');

describe("Search function", () => {
    it("Should filter data based on search term (ron)", () => {

        const output = [{id: 4, name: "Ron"}, {id: 5, name: "Ronald"}]

        expect(searchByTerm("ron")).toEqual(output);

        expect(searchByTerm("RON")).toEqual(output);
    })

    test("It should filter data based on search term (fRanK)", () => {
      const output = [{id: 2 ,name: "Frank"}];

      expect(searchByTerm("fRanK")).toEqual(output);
    })

    it("Should throw an error when searchTerm is empty", () => {
        expect(() => searchByTerm("")).toThrowError(Error("searchTerm cannot be empty"));
    })

})

describe("Async search function", () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>

    const data = [
        {id: 1 ,name: "Thijs"},
        {id: 2 ,name: "Frank"},
        {id: 3 ,name: "Lisa"},
        {id: 4 ,name: "Ron"},
        {id: 5 ,name: "Ronald"},
        {id: 6 ,name: "Maria"},
    ];
    it("Should filter data based on search term (ron)", async () => {
        const expectedOutput = [{id: 4, name: "Ron"}, {id: 5, name: "Ronald"}]

        mockedAxios.get.mockResolvedValue({data:data})

        await expect(asyncSearchByTerm("ron")).resolves.toEqual(expectedOutput);

        await expect(asyncSearchByTerm("RON")).resolves.toEqual(expectedOutput);
    })

    test("It should filter data based on search term (fRanK)", async() => {
        const expectedOutput = [{id: 2 ,name: "Frank"}];
        mockedAxios.get.mockResolvedValue({data: data})

        await expect(asyncSearchByTerm("fRanK")).resolves.toEqual(expectedOutput);
    })

    it("Should throw an error when searchTerm is empty", async () => {
        await expect(asyncSearchByTerm("")).rejects.toThrowError(Error("searchTerm cannot be empty"));
    })

})