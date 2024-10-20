"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createList(name: string, listItemsSimple: string) {
  await prisma.listSimple.create({
    data: { name, listItemsSimple },
  });
}

export async function submitList(name: string, listItemsSimple: string) {
  createList(name, listItemsSimple)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

export async function fetchLists() {
  const response = await prisma.listSimple.findMany();
  return response;
}
