import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StandardCalculator from "./StandardCalculator";
import BiWeeklyCalculator from "./BiWeeklyCalculator";
import RentVsBuyCalculator from "./RentVsBuyCalculator";
import FIRECalculator from "./FIRECalculator";

export default function CalculatorIndex() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Mortgage Tools</h1>
        <p className="text-muted-foreground">Select a calculator scenario to analyze your real estate decisions.</p>
      </div>
      
      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px] mb-8">
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="biweekly">Bi-Weekly</TabsTrigger>
          <TabsTrigger value="rentvsbuy">Rent vs Buy</TabsTrigger>
          <TabsTrigger value="fire">FIRE Impact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <StandardCalculator />
        </TabsContent>
        
        <TabsContent value="biweekly" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <BiWeeklyCalculator />
        </TabsContent>
        
        <TabsContent value="rentvsbuy" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <RentVsBuyCalculator />
        </TabsContent>

        <TabsContent value="fire" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <FIRECalculator />
        </TabsContent>
        
      </Tabs>
    </div>
  );
}
