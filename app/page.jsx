import { Input } from "@/components/ui/input";
import ContainerLayout from "../components/ContainerLayout/ContainerLayout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <ContainerLayout>
      <div className="w-3/6 mx-auto">
        <div className="w-full flex gap-3">
          <Input type="text" placeholder="Ex: work from home" />
          <Button>Button</Button>
        </div>
      </div>
    </ContainerLayout>
  );
}
