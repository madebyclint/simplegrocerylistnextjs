import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { PrismaClient } from '@prisma/client'
import { main } from "framer-motion/client";

export default function Page() {
  async function createList(formData: FormData) {
    "use server"

    const prisma = new PrismaClient()
    try {
      const list = await prisma.listSimple.create({
        data: {
          name: formData.get("name") as string,
          listItemsSimple: formData.get("listItemsSimple") as string,
        },
      });
      console.log(list)
    } catch (error) {
      console.error("Failed to create list:", error);
    }
  }

  return <form action={createList} className="flex flex-col gap-4">
    <Input type="text" name="name" label="Name" />
    <Button type="submit">Create</Button>
  </form>

}