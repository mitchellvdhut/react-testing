import axios from "axios";

function searchByTerm(searchTerm:string) {
  if(!searchTerm) throw Error("searchTerm cannot be empty");

  const data = [
    {id: 1 ,name: "Thijs"},
    {id: 2 ,name: "Frank"},
    {id: 3 ,name: "Lisa"},
    {id: 4 ,name: "Ron"},
    {id: 5 ,name: "Ronald"},
    {id: 6 ,name: "Maria"},
  ];

  const regex = new RegExp(searchTerm, "i")
  return data.filter((e: any) => {
    return e.name.match(regex)
  })
}

async function asyncSearchByTerm(searchTerm:string) {
  if(!searchTerm) throw Error("searchTerm cannot be empty");

  const data = await axios.get('data.json')
    .then(res => res.data)

  const regex = new RegExp(searchTerm, "i")
  return data.filter((e: any) => {
    return e.name.match(regex)
  })
}


export {searchByTerm, asyncSearchByTerm}