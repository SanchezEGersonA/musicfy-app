import { useEffect, useState } from "react"
import { getAlbums } from "../helpers/getAlbums";

export const useFetchAlbums = () => {

    const [albums, setAlbums] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getListOfAlbums = async () => {
        const albumList = await getAlbums();
        (albumList && albumList.length > 0) ? setAlbums(albumList) : setAlbums([]);
        setIsLoading(false)
    }

    useEffect(() => {
        getListOfAlbums();
    }, []);

    return { albums, isLoading }

}
