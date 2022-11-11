import { useState } from "react"
import { AlbumForm } from "./AlbumForm"


export const Album = ({ album, setIsNewAlbum, setEditAlbum, setIsEdit }) => {

    const onEditClick = () => {
        setIsNewAlbum(true);
        setEditAlbum({
            album_id: album.album_id,
            album_name: album.album_name,
            album_artist: album.album_artist,
            album_year: album.album_year,
            album_image: album.album_image
        });
        setIsEdit(true);
    }

    const onDeleteClick = (event) => {
        const URL = `http://localhost:3000/api/delete_album/${album.album_id}`;
        fetch(URL, {
            method: 'DELETE',
        })
            .then(() => window.location.reload(false));
    }

    return (
        <>
            <div className="col-2">
                <div className="card">
                    <img src={album.album_image} className="card-img" />
                    <div className="card-body mt-1">
                        <h5 className="card-title">{album.album_name}</h5>
                        <p className="card-text">{album.album_artist}</p>
                        <p className="card-text">{album.album_year}</p>
                        <button onClick={onEditClick} className="btn btn-primary m-1">Edit</button>
                        <button onClick={onDeleteClick} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )

}
