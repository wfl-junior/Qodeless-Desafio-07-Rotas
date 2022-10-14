import { CircleNotch } from "phosphor-react";
import { useEffect, useState } from "react";
import { RandomDogAPI } from "../api/RandomDogAPI";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(
    "https://random.dog/749579d7-90a6-4214-a360-9fe7ab1d02b3.jpg",
  );

  async function fetchRandomDogImage() {
    setIsLoading(true);
    try {
      const { url } = await RandomDogAPI.getRandomDog();
      setImageUrl(url);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao buscar por outro cachorro.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <img
        src={imageUrl}
        alt=""
        className="aspect-square w-64 rounded object-cover"
      />

      <button
        onClick={fetchRandomDogImage}
        className="flex cursor-pointer items-center justify-center rounded bg-indigo-600 px-4 py-3 text-zinc-100 transition-colors duration-300 hover:enabled:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <CircleNotch size={24} className="animate-spin" />
        ) : (
          "Carregar outro cachorro"
        )}
      </button>
    </div>
  );
};
