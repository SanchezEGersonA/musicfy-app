import { useState } from "react";
import { Album } from "./components/Album"
import { AlbumForm } from "./components/AlbumForm";
import { useFetchAlbums } from "./hooks/useFetchAlbums"

export const App = () => {

    const { albums, isLoading } = useFetchAlbums();

    const [isNewAlbum, setIsNewAlbum] = useState(false);
    const [editAlbum, setEditAlbum] = useState({
        album_id: '',
        album_name: '',
        album_artist: '',
        album_year: '',
        album_image: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    const onNewAlbum = () => {
        setIsNewAlbum(true);
    }

    return (
        <>
            <h1>Musicfy App</h1>
            <hr />
            {
                (!isNewAlbum) && <button className="btn btn-primary" onClick={onNewAlbum}>Add New Album</button>
            }
            {
                (!isNewAlbum && !isLoading) ?
                    <div className="mb-3 row">
                        {
                            (albums && albums.length > 0) &&
                            albums.map((album) => {
                                return <Album key={album.album_id} album={album} setIsNewAlbum={setIsNewAlbum} setEditAlbum={setEditAlbum} setIsEdit={setIsEdit} />
                            })
                        }
                    </div>
                    : <AlbumForm album={editAlbum} isEditMode={isEdit} />
            }
        </>
    )

}
