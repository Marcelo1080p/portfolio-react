import React from "react";

export const Foto = () => {
    const style = {
        width: "200px",
    }

    const menuItems = ["home", "about", "projects"]

    const pathPicture = "https://scontent.fcgh28-1.fna.fbcdn.net/v/t39.30808-6/425413869_4441587399399723_7580381821634039709_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=c06Esyu9qYoAX-4V2-L&_nc_ht=scontent.fcgh28-1.fna&oh=00_AfCe6rDAfac74s5ryk9GoVBszOeWRVqbjE5kOd3ZnDLq1Q&oe=65C971D9";
    return(
        <section>
            <img style={style} src={pathPicture} alt="myImg" />
        </section>
    )
}