export const getAlbums = async () => {

    try {

        const URL = 'http://localhost:3000/api/get_albums';
        const response = await fetch(URL);
        const { data } = await response.json();

        return data || [];

    } catch (error) {
        console.log(error);
        return [];
    }

}