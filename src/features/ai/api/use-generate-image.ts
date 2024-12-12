import { useMutation } from "@tanstack/react-query";
import { client } from "@/lib/hono";

// Define the request type
interface GenerateImageRequest {
  prompt: string;
}

// Define the response type
interface GenerateImageResponse {
  data: string; // or whatever the response structure is
}

export const useGenerateImage = () => {
  const mutation = useMutation<GenerateImageResponse, Error, GenerateImageRequest>({
    mutationFn: async (json: GenerateImageRequest) => {
      const response = await client.api.ai["generate-image"].$post({ json });
      return await response.json();
    },
  });

  return mutation;
};
