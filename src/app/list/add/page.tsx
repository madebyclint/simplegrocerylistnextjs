import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { submitList } from "../crud";
import { redirect } from "next/navigation";

export default function Page() {
  async function createList(formData: FormData) {
    "use server"

    await submitList(formData.get("name") as string, formData.get("listItemsSimple") as string)
    console.log("List successfully created")
    redirect("/list")

  }

  return <form action={createList} className="flex flex-col gap-4">
    <Input type="text" name="name" label="Name" />
    <Button type="submit">Create</Button>
  </form>

}