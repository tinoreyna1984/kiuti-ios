import { bucket } from "./cosmic-api";
import useSWR from "swr";

async function getBucket() {
  const data = await bucket.objects
    .find({
      type: "modelos", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const modelos = await data.objects;
  return modelos;
}

export function getInitialData(){
    const { data, error } = useSWR("https://api.cosmicjs.com/v2/buckets/kiuti-cms-production/objects?pretty=true&query=%7B%22type%22%3A%22modelos%22%7D&read_key=00AtyYqL4bhq2M1lTZ02lR7dcX5iKQeWXoxUdiZBCh2CnakN8d&limit=20&props=slug,title,content", getBucket);
    return { data, error }
}