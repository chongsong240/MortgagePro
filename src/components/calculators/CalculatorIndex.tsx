import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StandardCalculator from "./StandardCalculator";
import BiWeeklyCalculator from "./BiWeeklyCalculator";
import RentVsBuyCalculator from "./RentVsBuyCalculator";
import FIRECalculator from "./FIRECalculator";
import AffordabilityCalculator from "./AffordabilityCalculator";

const TAB_MAP: Record<string, string> = {
  standard: "standard",
  affordability: "affordability",
  biweekly: "biweekly",
  rentvsbuy: "rentvsbuy",
  fire: "fire",
};

export default function CalculatorIndex() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "standard";
  const defaultTab = TAB_MAP[tabParam] || "standard";

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Mortgage Tools</h1>
        <p className="text-muted-foreground">Select a calculator scenario to analyze your real estate decisions.</p>
      </div>
      
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="affordability">Affordability</TabsTrigger>
          <TabsTrigger value="biweekly">Bi-Weekly</TabsTrigger>
          <TabsTrigger value="rentvsbuy">Rent vs Buy</TabsTrigger>
          <TabsTrigger value="fire">FIRE Impact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <StandardCalculator />
        </TabsContent>

        <TabsContent value="affordability" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
          <AffordabilityCalculator />
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
