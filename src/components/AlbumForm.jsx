import { useState } from "react";

export const AlbumForm = ({ album, isEditMode }) => {

    const { album_name, album_artist, album_year, album_image } = album;

    const [name, setName] = useState(album_name);
    const [artist, setArtist] = useState(album_artist);
    const [year, setYear] = useState(album_year);
    const [image, setImage] = useState(album_image);

    const onNameChange = ({ target }) => {
        setName(target.value.trim())
    }

    const onArtistChange = ({ target }) => {
        setArtist(target.value.trim());
    }

    const onYearChange = ({ target }) => {
        setYear(target.value);
    }
    const onImageChange = ({ target }) => {
        setImage(target.value.trim());
    }

    const onSubmitForm = () => {

        if (!isEditMode) {
            const URL = 'http://localhost:3000/api/create_album';
            const newAlbum = { name, artist, year, image };
            fetch(URL, {
                method: 'POST',
                body: JSON.stringify(newAlbum),
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            const URL = `http://localhost:3000/api/update_album/${album.album_id}`;
            const newAlbum = { name, artist, year, image };
            fetch(URL, {
                method: 'PUT',
                body: JSON.stringify(newAlbum),
                headers: { 'Content-Type': 'application/json' }
            }).then(console.log).catch(console.log)
        }

    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3 row">
                            <label className="col sm-2 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="album_name"
                                    value={name}
                                    onChange={onNameChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col sm-2 col-form-label">Artist</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="album_artist"
                                    value={artist}
                                    onChange={onArtistChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col sm-2 col-form-label">Year</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="album_year"
                                    value={year}
                                    onChange={onYearChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col sm-2 col-form-label">URL Image</label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="album_image"
                                    value={image}
                                    onChange={onImageChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}
