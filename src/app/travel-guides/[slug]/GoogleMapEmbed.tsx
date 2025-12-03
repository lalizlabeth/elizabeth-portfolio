import styles from "../travel-guides.module.css";

type GoogleMapEmbedProps = {
    mapEmbedUrl: string;
};

export default function GoogleMapEmbed({ mapEmbedUrl }: GoogleMapEmbedProps) {
    if (!mapEmbedUrl) {
        return null;
    }

    return (
        <div className={styles.mapContainer}>
            <iframe
                src={mapEmbedUrl}
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
            />
        </div>
    );
}

