export default function TableRow(props: {value: number ,multiplier: number, operator?: string }){
const multiply="x"
const sum="+"
const subtract="-"
const divide="/"
const operator="x"
function operation(a: number,b: number,operator: string){
    if (operator === multiply){
    return a*b
    }
    if (operator === sum){
        return a+b
    }
    if (operator === subtract){
        return a-b
        }
        if (operator === divide){
            return a/b
        }

}
return(
    <span className= "flex w-32 justify-between px-4 bg-gray-300" >
    <p>{ props.value} </p>
    <p>{operator} </p>
    <p>{props.multiplier}</p>
    <p> = </p>
    <p>{operation(props.value,props.multiplier,"x")}</p>
    </span>
)


}