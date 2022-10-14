import axios from "axios";

const api = axios.create({
  baseURL: "https://random.dog/woof.json",
});

interface RandomDogApiResponse {
  fileSizeBytes: number;
  url: string;
}

export class RandomDogAPI {
  static async getRandomDog() {
    const { data } = await api.get<RandomDogApiResponse>("/");
    return data;
  }
}
