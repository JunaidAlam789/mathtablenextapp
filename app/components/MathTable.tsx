import TableRow from './TableRow'
export default function MathTable(props: {value: number}){
let n=2
const rows= [1,2,3,4,5,6,7,8,9,10,11,12]

return(
    <>
    {rows.map((row)=>{return <TableRow value={props.value} multiplier={row}/>})}
    </>
)


}