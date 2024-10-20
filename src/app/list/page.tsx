'use client'

import { useEffect, useState } from 'react';
import { Listbox, ListboxItem, Skeleton } from "@nextui-org/react";
import { fetchLists } from './crud';

interface ListItem {
  name: string;
  listItemsSimple: string | null;
  id: number;
  createdAt: Date;
}

export default function Page() {
  const [lists, setLists] = useState<ListItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedLists = await fetchLists();
      setLists(fetchedLists);
      setIsLoaded(true);
    }
    fetchData()
      .catch(console.error);
  }, []);

  return <>
    <h1 className="text-xl">Lists</h1>
    <Skeleton isLoaded={isLoaded} className="rounded-lg">
      <Listbox>
        {lists.map((list, index) => (
          <ListboxItem key={index}>{list.name}</ListboxItem>
        ))}
      </Listbox>
    </Skeleton>
  </>
}