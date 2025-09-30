import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Note } from "@/types/note";

const API_URL = "https://notehub-public.goit.study/api/notes";
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
});

export interface FetchNotesResponse {
  totalPages: number;
  notes: Note[];
}

export async function fetchNotes(
  search = "",
  page = 1,
  tag?: string
): Promise<FetchNotesResponse> {
  const { data }: AxiosResponse<FetchNotesResponse> = await axiosInstance.get("", {
    params: { search, page, perPage: 15, tag },
  });
  return data;
}

export function useNotes(search: string, page: number, tag?: string) {
  return useQuery<FetchNotesResponse, Error>({
    queryKey: ["notes", search, page, tag],
    queryFn: () => fetchNotes(search, page, tag),
  });
}
