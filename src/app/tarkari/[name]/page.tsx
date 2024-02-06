export default function PriceHisory({params}: {params:{name: string}}){
    return(
        <>
           Loading Price History for  {decodeURI(params.name)}
        </>
    )
}