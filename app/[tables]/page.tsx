import MathTable from "../components/MathTable";

export default function Table_Page( {params}: { params: { tables: number } }){
    return (
        <div>                         
              <MathTable value={params.tables}/>
        </div>
      )
}

