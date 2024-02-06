import Table from "@/components/Table";

export interface Data {
    status: number
    date: string
    prices: Price[]
  }
  
  export interface Price {
    commodityname: string
    commodityunit: string
    minprice: string
    maxprice: string
    avgprice: string
  }

export default async function Home() {
  const data = await fetch("https://kalimatimarket.gov.np/api/daily-prices/en")
    const res: Data = await data.json();
    return(
        <div>
            <Table data={res}/>
        </div>
    )
}
